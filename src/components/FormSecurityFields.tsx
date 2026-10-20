import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface PrivacyConsentFieldProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  onOpenPrivacy: () => void;
}

/** Mandatory GDPR consent checkbox for contact forms. */
export const PrivacyConsentField: React.FC<PrivacyConsentFieldProps> = ({ id, checked, onChange, onOpenPrivacy }) => {
  const { t } = useLanguage();
  return (
    <div className="flex items-start gap-2.5">
      <input
        id={id}
        type="checkbox"
        required
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-0.5 w-4 h-4 shrink-0 accent-red-600 cursor-pointer"
      />
      <label htmlFor={id} className="text-[11px] sm:text-xs text-zinc-400 font-body leading-relaxed cursor-pointer">
        {t('form.privacyConsent')}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onOpenPrivacy();
          }}
          className="text-red-400 hover:text-red-300 underline underline-offset-2 cursor-pointer"
        >
          {t('form.privacyLink')}
        </button>
        {t('form.privacyConsentEnd')}
      </label>
    </div>
  );
};

/**
 * Invisible honeypot field: hidden from humans (off-screen, not focusable, ignored by screen readers),
 * but automated spam bots fill it in, so their submissions get discarded.
 */
export const HoneypotField: React.FC<{ value: string; onChange: (v: string) => void }> = ({ value, onChange }) => (
  <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
    <label>
      Website
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  </div>
);
