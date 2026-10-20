import React, { useEffect, useState } from 'react';
import { Cookie, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ConsentState, getStoredConsent, saveConsent } from '../utils/consent';

interface CookieBannerProps {
  /** Forces the preferences panel open (e.g. from the "Cookie preferences" footer link). */
  forceOpen: boolean;
  onForceOpenHandled: () => void;
  onConsentChange: (consent: ConsentState) => void;
  onOpenPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  forceOpen,
  onForceOpenHandled,
  onConsentChange,
  onOpenPolicy,
}) => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  // First visit: show banner if no valid consent stored
  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      onConsentChange(stored);
      setAnalytics(stored.analytics);
    } else {
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Re-open from footer link
  useEffect(() => {
    if (forceOpen) {
      const stored = getStoredConsent();
      setAnalytics(stored?.analytics ?? false);
      setShowDetails(true);
      setVisible(true);
      onForceOpenHandled();
    }
  }, [forceOpen, onForceOpenHandled]);

  const decide = (analyticsChoice: boolean) => {
    const state = saveConsent(analyticsChoice);
    onConsentChange(state);
    setVisible(false);
    setShowDetails(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-5 pointer-events-none"
      role="dialog"
      aria-live="polite"
      aria-label={t('cookie.title')}
    >
      <div className="pointer-events-auto mx-auto max-w-3xl bg-[#0b0b0e]/97 backdrop-blur-xl border border-white/10 border-t-red-700/60 shadow-2xl shadow-black/80 rounded-sm">
        <div className="p-4 sm:p-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 shrink-0 rounded bg-red-950/60 border border-red-600/40 flex items-center justify-center">
              <Cookie className="w-4.5 h-4.5 text-red-500" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-wider">
                {t('cookie.title')}
              </h2>
              <p className="mt-1 text-xs sm:text-[13px] text-zinc-400 font-body leading-relaxed">
                {t('cookie.text')}{' '}
                <button
                  onClick={onOpenPolicy}
                  className="text-red-400 hover:text-red-300 underline underline-offset-2 cursor-pointer"
                >
                  {t('cookie.readPolicy')}
                </button>
              </p>
            </div>
            {showDetails && (
              <button
                onClick={() => setShowDetails(false)}
                aria-label={t('legal.close')}
                className="p-1 text-zinc-500 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category details */}
          {showDetails && (
            <div className="mt-4 space-y-2.5">
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-heading font-semibold text-xs text-white uppercase tracking-wider">
                    {t('cookie.necessary')}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">
                    {t('cookie.alwaysActive')}
                  </span>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-body leading-relaxed">
                  {t('cookie.necessaryDesc')}
                </p>
              </div>

              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-sm">
                <div className="flex items-center justify-between gap-3">
                  <label htmlFor="consent-analytics" className="font-heading font-semibold text-xs text-white uppercase tracking-wider cursor-pointer">
                    {t('cookie.analytics')}
                  </label>
                  <button
                    id="consent-analytics"
                    role="switch"
                    aria-checked={analytics}
                    onClick={() => setAnalytics((v) => !v)}
                    className={`relative w-10 h-5 rounded-full transition-colors cursor-pointer ${analytics ? 'bg-red-600' : 'bg-zinc-700'}`}
                  >
                    <span
                      className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${analytics ? 'translate-x-5' : ''}`}
                    />
                  </button>
                </div>
                <p className="mt-1 text-[11px] sm:text-xs text-zinc-400 font-body leading-relaxed">
                  {t('cookie.analyticsDesc')}
                </p>
              </div>
            </div>
          )}

          {/* Actions — "reject" has the same visual weight as "accept" (Garante guidelines) */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
            {showDetails ? (
              <button
                onClick={() => decide(analytics)}
                className="sm:col-span-1 px-4 py-2.5 border border-white/20 hover:border-white/40 text-zinc-200 font-heading font-semibold text-[11px] tracking-widest uppercase transition-colors cursor-pointer"
              >
                {t('cookie.save')}
              </button>
            ) : (
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2.5 border border-white/20 hover:border-white/40 text-zinc-200 font-heading font-semibold text-[11px] tracking-widest uppercase transition-colors cursor-pointer"
              >
                {t('cookie.customize')}
              </button>
            )}
            <button
              onClick={() => decide(false)}
              className="px-4 py-2.5 bg-zinc-100 hover:bg-white text-black font-heading font-bold text-[11px] tracking-widest uppercase transition-colors cursor-pointer"
            >
              {t('cookie.rejectAll')}
            </button>
            <button
              onClick={() => decide(true)}
              className="px-4 py-2.5 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-[11px] tracking-widest uppercase transition-colors cursor-pointer"
            >
              {t('cookie.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
