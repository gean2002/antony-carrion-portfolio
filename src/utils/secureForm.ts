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
const MIN_FILL_TIME_MS = 2500;     // humans need at least 2.5s to fill the form
const LAST_SUBMIT_KEY = 'ac_last_submit';

export const FIELD_LIMITS = {
  fullName: 90,
  email: 120,
  phone: 45,
  activityCity: 120,
  hasWebsite: 160,
  mainGoal: 1500,
  businessName: 100,
  instagram: 100,
  logoLink: 300,
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

const PHONE_REGEX = /^[+\d\s().-]{6,45}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidPhone = (value: string) => PHONE_REGEX.test(value.trim());
export const isValidEmail = (value: string) => EMAIL_REGEX.test(value.trim());

export interface NewContactFormData {
  fullName: string;
  email: string;
  phone: string;
  activityCity: string;
  interests: string[];
  hasWebsite: string;
  mainGoal: string;
  businessName?: string;
  instagram?: string;
  logoLink?: string;
  attachedFileUrl?: string;
  attachedFileName?: string;
  honeypot: string;
  startedAt: number;
  subject?: string;
}

/** Uploads an optional logo/attachment file to public Supabase Storage bucket */
export const uploadLeadAttachment = async (file: File): Promise<string> => {
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
  if (file.size > MAX_FILE_SIZE) {
    throw new Error('FILE_TOO_LARGE');
  }

  // Create clean safe filename
  const cleanName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const path = `leads/${Date.now()}-${Math.random().toString(36).substring(2, 8)}-${cleanName}`;

  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/lead-attachments/${path}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': file.type || 'application/octet-stream',
    },
    body: file,
  });

  if (!res.ok) {
    const errorDetails = await res.text().catch(() => '');
    console.error('[Supabase Storage Upload Error]', res.status, errorDetails);
    throw new Error('UPLOAD_FAILED');
  }

  return `${SUPABASE_URL}/storage/v1/object/public/lead-attachments/${path}`;
};

export const submitContactForm = async (data: NewContactFormData): Promise<void> => {
  // 1. Honeypot check
  if (data.honeypot && data.honeypot.trim() !== '') {
    throw new FormSubmitError('spam');
  }

  // 2. Too fast = bot
  if (Date.now() - data.startedAt < MIN_FILL_TIME_MS) {
    throw new FormSubmitError('tooFast');
  }

  // 3. Rate limit check
  try {
    const last = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
    if (Date.now() - last < COOLDOWN_MS) {
      throw new FormSubmitError('cooldown');
    }
  } catch (e) {
    if (e instanceof FormSubmitError) throw e;
  }

  // 4. Sanitize
  const fullName = sanitize(data.fullName, FIELD_LIMITS.fullName);
  const email = sanitize(data.email, FIELD_LIMITS.email);
  const phone = sanitize(data.phone, FIELD_LIMITS.phone);
  const activityCity = sanitize(data.activityCity, FIELD_LIMITS.activityCity);
  const hasWebsite = sanitize(data.hasWebsite, FIELD_LIMITS.hasWebsite);
  const mainGoal = sanitize(data.mainGoal, FIELD_LIMITS.mainGoal);
  const businessName = data.businessName ? sanitize(data.businessName, FIELD_LIMITS.businessName) : '';
  const instagram = data.instagram ? sanitize(data.instagram, FIELD_LIMITS.instagram) : '';
  const logoLink = data.logoLink ? sanitize(data.logoLink, FIELD_LIMITS.logoLink) : '';
  const interestsList = (data.interests || []).map((i) => sanitize(i, 50)).filter(Boolean);

  // Validation
  if (fullName.length < 2) throw new FormSubmitError('invalid');
  if (!isValidEmail(email)) throw new FormSubmitError('invalid');
  if (!isValidPhone(phone)) throw new FormSubmitError('invalid');
  if (activityCity.length < 2) throw new FormSubmitError('invalid');
  if (hasWebsite.length < 1) throw new FormSubmitError('invalid');
  if (mainGoal.length < 3) throw new FormSubmitError('invalid');

  const interestsText = interestsList.length > 0 ? interestsList.join(', ') : 'Nessuna indicata';

  // 5. Send to Supabase (Leads Table)
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
        name: fullName,
        contact: phone,
        phone: phone,
        email: email,
        service_needed: interestsText,
        website: hasWebsite,
        message: [
          `Attività e Città: ${activityCity}`,
          `Interessi: ${interestsText}`,
          `Sito Attuale: ${hasWebsite}`,
          `Obiettivo Principale: ${mainGoal}`,
          businessName ? `Nome Business: ${businessName}` : null,
          instagram ? `Instagram: ${instagram}` : null,
          logoLink ? `Link Logo: ${logoLink}` : null,
          data.attachedFileUrl ? `File Allegato: ${data.attachedFileUrl}` : null,
        ]
          .filter(Boolean)
          .join('\n'),
        source: 'antonycarrion.com (Richiesta Anteprima)',
        status: 'new',
        alerted: false,
      }),
    });
    supabaseOk = supaRes.ok;
  } catch (err) {
    console.warn('[Supabase Ingestion Note]', err);
  }

  // 6. Send to FormSubmit (Email Backup)
  let emailOk = false;
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: JSON.stringify({
        'Nome e Cognome': fullName,
        Email: email,
        'Telefono / WhatsApp': phone,
        'Attività e Città': activityCity,
        'Cosa ti interessa': interestsText,
        'Hai già un sito?': hasWebsite,
        'Obiettivo Principale': mainGoal,
        'Nome del Business (opzionale)': businessName || '-',
        'Instagram del Business (opzionale)': instagram || '-',
        'Link al Logo (opzionale)': logoLink || '-',
        'File Caricato (opzionale)': data.attachedFileUrl || '-',
        'Consenso Privacy': 'Sì, accettato',
        _subject: data.subject || 'Nuova Richiesta Anteprima dal Portfolio!',
        _template: 'box',
        _captcha: 'false',
        _honey: '',
      }),
    });
    emailOk = res.ok;
  } catch {
    /* ignore email network failure if Supabase worked */
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
