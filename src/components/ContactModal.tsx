import React, { useState, useEffect } from 'react';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitContactForm, FormSubmitError, FIELD_LIMITS } from '../utils/secureForm';
import { PrivacyConsentField, HoneypotField } from './FormSecurityFields';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onOpenPrivacy: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onOpenPrivacy,
}) => {
  const { t, language } = useLanguage();
  const currencySymbol = language === 'it' ? '€' : '$';
  
  const [projectType, setProjectType] = useState<string>(initialService || t('form.type1'));
  const [budget, setBudget] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [privacyAccepted, setPrivacyAccepted] = useState<boolean>(false);
  const [honeypot, setHoneypot] = useState<string>('');
  const [startedAt, setStartedAt] = useState<number>(() => Date.now());
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setStartedAt(Date.now());
      setErrorKey(null);
      if (initialService) setProjectType(initialService);
    }
  }, [isOpen, initialService]);

  if (!isOpen) return null;

  const projectTypes = [
    t('form.type1'),
    t('form.type2'),
    t('form.type3'),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playSubtleClick();
    setErrorKey(null);
    setIsSubmitting(true);
    
    try {
      await submitContactForm({
        name,
        contact,
        projectType,
        budget,
        message,
        honeypot,
        startedAt,
        subject: 'Nuova richiesta (Pop-up) dal Portfolio!',
      });
      setIsSubmitted(true);
    } catch (error) {
      const code = error instanceof FormSubmitError ? error.code : 'network';
      if (code === 'spam') setIsSubmitted(true);
      else setErrorKey(`form.err.${code}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContact('');
    setBudget('');
    setMessage('');
    setPrivacyAccepted(false);
    setErrorKey(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0a0a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                {t('modal.discuss')}
              </h2>
              <span className="text-xs font-body text-zinc-300">
                {t('modal.discussSub')}
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              playSubtleClick();
              onClose();
            }}
            className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded transition-colors focus:outline-none cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5 text-zinc-300 hover:text-red-400" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Success State */
            <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto bg-red-950/50 border border-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <CheckCircle2 className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                {t('thanks')}, {name || ''} {t('received')}
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto font-body">
                {t('form.successSub')}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 border border-white/10 hover:border-white/30 text-zinc-300 text-xs font-heading font-semibold uppercase rounded"
                >
                  {t('nav.home')}
                </button>
              </div>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="space-y-6 relative" noValidate={false}>
              <HoneypotField value={honeypot} onChange={setHoneypot} />
              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  {t('form.project')}:
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        playTechBlip();
                        setProjectType(type);
                      }}
                      className={`px-3 py-1.5 text-xs font-body rounded transition-colors cursor-pointer ${
                        projectType === type
                          ? 'bg-red-600 text-white font-semibold shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                          : 'bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  {t('form.budget')} ({currencySymbol}):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-mono">{currencySymbol}</span>
                  <input
                    type="text"
                    required
                    maxLength={FIELD_LIMITS.budget}
                    placeholder=""
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full pl-8 pr-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-mono"
                  />
                </div>
              </div>

              {/* 3. Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    required
                    minLength={2}
                    maxLength={FIELD_LIMITS.name}
                    autoComplete="name"
                    placeholder={t('form.namePlaceholder')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    {t('form.contact')}
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={FIELD_LIMITS.contact}
                    pattern="[+\d\s().\-]{6,40}"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder={t('form.contactPlaceholder')}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-body"
                  />
                </div>
              </div>

              {/* 5. Additional Message / Link */}
              <div>
                <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  {t('form.message')}:
                </label>
                <textarea
                  rows={3}
                  maxLength={FIELD_LIMITS.message}
                  placeholder={t('form.messagePlaceholder')}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-body resize-none"
                />
              </div>

              {/* Guarantees Badge */}
              <div className="p-3 bg-zinc-950/80 border border-white/5 rounded flex items-center gap-3 text-zinc-300 text-xs font-body">
                <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
                <span>
                  {t('modal.guarantee')}
                </span>
              </div>

              {/* GDPR consent */}
              <PrivacyConsentField
                id="privacy-modal"
                checked={privacyAccepted}
                onChange={setPrivacyAccepted}
                onOpenPrivacy={onOpenPrivacy}
              />

              {errorKey && (
                <p role="alert" className="text-xs text-red-400 font-body bg-red-950/30 border border-red-700/40 px-3 py-2 rounded">
                  {t(errorKey)}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !privacyAccepted}
                  className={`w-full py-4 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm tracking-wider uppercase rounded transition-all red-glow cursor-pointer text-center flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${isSubmitting ? 'cursor-wait' : ''}`}
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? t('form.submitting') : t('form.submit')}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
