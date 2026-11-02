// Secure contact form submission
// - Input sanitization (control chars, HTML tags, length limits)
// - Honeypot field against spam bots
// - Minimum fill time (bots submit instantly)
// - Client-side rate limiting (cooldown between submissions)
// - Real HTTP response check

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/71dc468991040c93f0ff7dab032f7866';
const SUPABASE_URL = 'https://tnjvtlrxwwswknajcagn.supabase.co';
const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRuanZ0bHJ4d3dzd2tuYWpjYWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0NTIyMTUsImV4cCI6MjEwOTAyODIxNX0.TF0JdFC1yOEyBJpBI5UqNrDBAHepdubzVlky7gfdIcQ';

const COOLDOWN_MS = 60 * 1000;     // 1 submission per minute
const MIN_FILL_TIME_MS = 3000;     // humans need at least 3s to fill the form
const LAST_SUBMIT_KEY = 'ac_last_submit';

export const FIELD_LIMITS = {
  name: 80,
  contact: 40,
  website: 120,
  budget: 30,
  message: 1500,
} as const;

export type SubmitError = 'spam' | 'tooFast' | 'cooldown' | 'invalid' | 'network';

export class FormSubmitError extends Error {
  constructor(public code: SubmitError) {
    super(code);
  }
}

/** Removes control characters, HTML tags and angle brackets, trims and caps length. */
export const sanitize = (value: string, maxLength: number): string =>
  value
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/<[^>]*>/g, '')
    .replace(/[<>]/g, '')
    .trim()
    .slice(0, maxLength);

/** Allows only digits, spaces, +, -, (, ), . in phone/WhatsApp field. */
const PHONE_REGEX = /^[+\d\s().-]{6,40}$/;

export const isValidPhone = (value: string) => PHONE_REGEX.test(value.trim());

interface SubmitPayload {
  name: string;
  contact: string;
  projectType: string;
  website?: string;
  budget?: string;
  message: string;
  honeypot: string;
  startedAt: number;
  subject: string;
}

export const submitContactForm = async (data: SubmitPayload): Promise<void> => {
  // 1. Honeypot: real users never see/fill this field
  if (data.honeypot.trim() !== '') throw new FormSubmitError('spam');

  // 2. Too fast = bot
  if (Date.now() - data.startedAt < MIN_FILL_TIME_MS) throw new FormSubmitError('tooFast');

  // 3. Rate limit
  try {
    const last = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
    if (Date.now() - last < COOLDOWN_MS) throw new FormSubmitError('cooldown');
  } catch (e) {
    if (e instanceof FormSubmitError) throw e;
  }

  // 4. Sanitize & validate
  const name = sanitize(data.name, FIELD_LIMITS.name);
  const contact = sanitize(data.contact, FIELD_LIMITS.contact);
  const website = data.website ? sanitize(data.website, FIELD_LIMITS.website) : '';
  const message = sanitize(data.message, FIELD_LIMITS.message);
  const projectType = sanitize(data.projectType, 60);

  if (name.length < 2 || !isValidPhone(contact)) throw new FormSubmitError('invalid');

  // 5. Send to Supabase (Instant Lead Ingestion for Jarvis & Agency DB)
  let supabaseOk = false;
  try {
    const supaRes = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
      method: 'POST',
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        name,
        contact,
        phone: contact,
        email: contact.includes('@') ? contact : null,
        service_needed: projectType,
        website: website || null,
        message: message || 'Nessun messaggio aggiuntivo',
        source: 'antonycarrion.com',
        status: 'new',
        alerted: false,
      }),
    });
    supabaseOk = supaRes.ok;
  } catch (err) {
    console.warn('[Supabase Ingestion Note]', err);
  }

  // 6. Send to FormSubmit (Email Notification Backup)
  let emailOk = false;
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: JSON.stringify({
        Nome: name,
        Contatto: contact,
        Progetto: projectType,
        'Sito Attuale': website || 'Nessun sito indicato (da zero)',
        Messaggio: message || 'Nessun messaggio aggiuntivo',
        'Consenso privacy': 'Sì',
        _subject: data.subject,
        _template: 'box',
        _captcha: 'false',
        _honey: '',
      }),
    });
    emailOk = res.ok;
  } catch {
    /* If Supabase succeeded, email failure shouldn't block the user */
  }

  if (!supabaseOk && !emailOk) {
    throw new FormSubmitError('network');
  }

  try {
    localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
  } catch {
    /* ignore */
  }
};
