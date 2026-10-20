// Cookie / storage consent management (GDPR + ePrivacy + Garante Privacy guidelines)
// Consent is stored locally in the browser and expires after 6 months,
// after which the banner is shown again.

export interface ConsentState {
  necessary: true;      // always active (technical storage)
  analytics: boolean;   // Vercel Web Analytics (anonymous statistics)
  timestamp: number;
  version: number;
}

const STORAGE_KEY = 'ac_cookie_consent';
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 180; // 6 months

export const CONSENT_EVENT = 'ac-consent-change';

export const getStoredConsent = (): ConsentState | null => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (
      typeof parsed !== 'object' ||
      parsed === null ||
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.timestamp !== 'number' ||
      typeof parsed.analytics !== 'boolean' ||
      Date.now() - parsed.timestamp > CONSENT_MAX_AGE_MS
    ) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return { necessary: true, analytics: parsed.analytics, timestamp: parsed.timestamp, version: CONSENT_VERSION };
  } catch {
    return null;
  }
};

export const saveConsent = (analytics: boolean): ConsentState => {
  const state: ConsentState = {
    necessary: true,
    analytics,
    timestamp: Date.now(),
    version: CONSENT_VERSION,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage unavailable (private mode): consent kept in memory only */
  }
  window.dispatchEvent(new CustomEvent<ConsentState>(CONSENT_EVENT, { detail: state }));
  return state;
};
