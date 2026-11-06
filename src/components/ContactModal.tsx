import React, { useState, useEffect } from 'react';
import { playSubtleClick } from '../utils/audio';
import { X, CheckCircle2, ArrowUpRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  submitContactForm,
  FormSubmitError,
  FIELD_LIMITS,
  isValidEmail,
  isValidPhone,
} from '../utils/secureForm';
import { PrivacyConsentField, HoneypotField } from './FormSecurityFields';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  onOpenPrivacy: () => void;
}

const INTEREST_OPTIONS = [
  { id: 'website', key: 'form.interest.website' },
  { id: 'ecommerce', key: 'form.interest.ecommerce' },
  { id: 'software', key: 'form.interest.software' },
  { id: 'ai', key: 'form.interest.ai' },
  { id: 'seo', key: 'form.interest.seo' },
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService,
  onOpenPrivacy,
}) => {
  const { t, language } = useLanguage();

  // Form State matching the request exactly
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [activityCity, setActivityCity] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>(['website', 'ecommerce']);
  const [hasWebsite, setHasWebsite] = useState('');
  const [mainGoal, setMainGoal] = useState('');

  // Optional business section
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [businessName, setBusinessName] = useState('');
  const [instagram, setInstagram] = useState('');
  const [logoLink, setLogoLink] = useState('');

  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStartedAt(Date.now());
      setErrorKey(null);
      if (initialService) {
        const match = INTEREST_OPTIONS.find(
          (o) => o.id === initialService || t(o.key).toLowerCase() === initialService.toLowerCase()
        );
        if (match && !selectedInterests.includes(match.id)) {
          setSelectedInterests((prev) => [...prev, match.id]);
        }
      }
    }
  }, [isOpen, initialService, t]);

  if (!isOpen) return null;

  const toggleInterest = (id: string) => {
    playSubtleClick();
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const isFormValid =
    fullName.trim().length >= 2 &&
    isValidEmail(email) &&
    isValidPhone(phone) &&
    activityCity.trim().length >= 2 &&
    hasWebsite.trim().length >= 1 &&
    mainGoal.trim().length >= 3 &&
    privacyAccepted;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playSubtleClick();
    setErrorKey(null);

    if (!isValidEmail(email)) {
      setErrorKey(t('form.err.email'));
      return;
    }
    if (!isValidPhone(phone)) {
      setErrorKey(t('form.err.phone'));
      return;
    }

    setIsSubmitting(true);

    try {
      const interestsLocalized = selectedInterests.map((id) => {
        const found = INTEREST_OPTIONS.find((o) => o.id === id);
        return found ? t(found.key) : id;
      });

      await submitContactForm({
        fullName,
        email,
        phone,
        activityCity,
        interests: interestsLocalized,
        hasWebsite,
        mainGoal,
        businessName,
        instagram,
        logoLink,
        honeypot,
        startedAt,
        subject: `Nuova Richiesta Anteprima (Pop-up) [${language.toUpperCase()}] da antonycarrion.com!`,
      });
      setIsSubmitted(true);
    } catch (error) {
      const code = error instanceof FormSubmitError ? error.code : 'network';
      if (code === 'spam') setIsSubmitted(true);
      else if (code === 'tooFast') setErrorKey(t('form.err.tooFast'));
      else if (code === 'cooldown') setErrorKey(t('form.err.cooldown'));
      else if (code === 'invalid') setErrorKey(t('form.err.required'));
      else setErrorKey(t('form.err.network'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setActivityCity('');
    setSelectedInterests(['website', 'ecommerce']);
    setHasWebsite('');
    setMainGoal('');
    setBusinessName('');
    setInstagram('');
    setLogoLink('');
    setPrivacyAccepted(false);
    setStartedAt(Date.now());
    setErrorKey(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-[#0a0a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                {t('form.previewTitle')}
              </h2>
              <span className="text-xs font-body text-zinc-300">
                {t('form.previewSubtitle')}
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
        <div className="p-4 sm:p-6">
          {isSubmitted ? (
            /* Success State */
            <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto bg-red-950/50 border border-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <CheckCircle2 className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                {t('thanks')}, {fullName || ''}! {t('form.successTitle')}
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto font-body">
                {t('form.successDesc')}
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 border border-white/10 hover:border-white/30 text-zinc-300 text-xs font-heading font-semibold uppercase rounded cursor-pointer"
                >
                  {t('legal.close')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
              <HoneypotField value={honeypot} onChange={setHoneypot} />

              {/* Row 1: NOME E COGNOME + EMAIL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-1">
                    {t('form.fullName')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={FIELD_LIMITS.fullName}
                    autoComplete="name"
                    placeholder={t('form.fullNamePlaceholder')}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                  />
                  <span className="block mt-1 text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                    {t('form.fullNameHelper')} <span className="text-red-400/80">*</span>
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-1">
                    {t('form.emailLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={FIELD_LIMITS.email}
                    autoComplete="email"
                    placeholder={t('form.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                  />
                  <span className="block mt-1 text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                    {t('form.emailHelper')} <span className="text-red-400/80">*</span>
                  </span>
                </div>
              </div>

              {/* Row 2: TELEFONO / WHATSAPP + ATTIVITÀ E CITTÀ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-1">
                    {t('form.phoneLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={FIELD_LIMITS.phone}
                    autoComplete="tel"
                    placeholder={t('form.phonePlaceholder')}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                  />
                  <span className="block mt-1 text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                    {t('form.phoneHelper')} <span className="text-red-400/80">*</span>
                  </span>
                </div>

                <div>
                  <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-1">
                    {t('form.activityCity')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={FIELD_LIMITS.activityCity}
                    placeholder={t('form.activityCityPlaceholder')}
                    value={activityCity}
                    onChange={(e) => setActivityCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                  />
                  <span className="block mt-1 text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                    {t('form.activityCityHelper')} <span className="text-red-400/80">*</span>
                  </span>
                </div>
              </div>

              {/* Row 3: COSA TI INTERESSA? */}
              <div>
                <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-2">
                  {t('form.interestsTitle')}{' '}
                  <span className="text-zinc-500 font-normal lowercase">
                    {t('form.interestsOptional')}
                  </span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((opt) => {
                    const isSelected = selectedInterests.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleInterest(opt.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-150 cursor-pointer ${
                          isSelected
                            ? 'bg-[#0055b8] text-white shadow-[0_0_12px_rgba(0,85,184,0.4)] border border-[#1e70d4]'
                            : 'bg-white/5 border border-white/15 text-zinc-300 hover:border-white/30 hover:text-white'
                        }`}
                      >
                        {t(opt.key)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 4: HAI GIÀ UN SITO? */}
              <div>
                <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-1">
                  {t('form.hasSite')} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={FIELD_LIMITS.hasWebsite}
                  placeholder={t('form.hasSitePlaceholder')}
                  value={hasWebsite}
                  onChange={(e) => setHasWebsite(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                />
                <span className="block mt-1 text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                  {t('form.hasSiteHelper')} <span className="text-red-400/80">*</span>
                </span>
              </div>

              {/* Row 5: QUAL È L'OBIETTIVO PRINCIPALE DEL SITO? */}
              <div>
                <label className="block text-[11px] font-heading font-bold text-zinc-200 uppercase tracking-wider mb-1">
                  {t('form.mainGoal')} <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  maxLength={FIELD_LIMITS.mainGoal}
                  placeholder={t('form.mainGoalPlaceholder')}
                  value={mainGoal}
                  onChange={(e) => setMainGoal(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600 resize-none"
                />
                <span className="block mt-1 text-[10px] font-heading font-bold text-zinc-500 uppercase tracking-wider">
                  {t('form.mainGoalHelper')} <span className="text-red-400/80">*</span>
                </span>
              </div>

              {/* Collapsible: HAI LOGO O INSTAGRAM? */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setShowOptionalFields(!showOptionalFields)}
                  className="flex items-center gap-2 text-xs font-heading font-bold text-[#2563eb] hover:text-[#3b82f6] uppercase tracking-wider cursor-pointer group"
                >
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      showOptionalFields ? 'rotate-180' : ''
                    }`}
                  />
                  <span>{t('form.optionalBrandToggle')}</span>
                </button>

                {showOptionalFields && (
                  <div className="mt-3 space-y-3 p-3.5 bg-zinc-950/60 border border-white/5 rounded">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-heading font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                          {t('form.businessName')}{' '}
                          <span className="text-zinc-500 lowercase">{t('form.optionalLabel')}</span>
                        </label>
                        <input
                          type="text"
                          maxLength={FIELD_LIMITS.businessName}
                          placeholder={t('form.businessNamePlaceholder')}
                          value={businessName}
                          onChange={(e) => setBusinessName(e.target.value)}
                          className="w-full px-3 py-2 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-heading font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                          {t('form.instagram')}{' '}
                          <span className="text-zinc-500 lowercase">{t('form.optionalLabel')}</span>
                        </label>
                        <input
                          type="text"
                          maxLength={FIELD_LIMITS.instagram}
                          placeholder={t('form.instagramPlaceholder')}
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                          className="w-full px-3 py-2 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-heading font-semibold text-zinc-300 uppercase tracking-wider mb-1">
                        {t('form.logoLink')}{' '}
                        <span className="text-zinc-500 lowercase">{t('form.optionalLabel')}</span>
                      </label>
                      <input
                        type="text"
                        maxLength={FIELD_LIMITS.logoLink}
                        placeholder={t('form.logoLinkPlaceholder')}
                        value={logoLink}
                        onChange={(e) => setLogoLink(e.target.value)}
                        className="w-full px-3 py-2 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-sm font-body placeholder:text-zinc-600"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="pt-2">
                <PrivacyConsentField
                  id="privacy-modal"
                  checked={privacyAccepted}
                  onChange={setPrivacyAccepted}
                  onOpenPrivacy={onOpenPrivacy}
                  customLabel={
                    <span>
                      {t('form.privacyCheckboxPre')}
                      <button
                        type="button"
                        onClick={onOpenPrivacy}
                        className="underline font-bold text-zinc-200 hover:text-white inline"
                      >
                        {t('form.privacyCheckboxLink')}
                      </button>
                      {t('form.privacyCheckboxPost')}{' '}
                      <span className="text-red-400">*</span>
                    </span>
                  }
                />
              </div>

              {errorKey && (
                <p role="alert" className="text-xs text-red-400 font-body bg-red-950/30 border border-red-700/40 px-3 py-2 rounded">
                  {errorKey}
                </p>
              )}

              {/* Submit CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full py-3.5 px-6 rounded font-heading font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isFormValid && !isSubmitting
                      ? 'bg-white hover:bg-zinc-100 text-[#0055b8] shadow-lg hover:shadow-xl'
                      : 'bg-white/10 text-zinc-500 cursor-not-allowed border border-white/5'
                  }`}
                >
                  <span className="text-[#0055b8] font-black text-sm">
                    {isSubmitting ? t('form.submittingPreview') : t('form.submitPreview')}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#0055b8]" />
                </button>
              </div>

              {/* Footer reassurance */}
              <div className="space-y-1 text-center pt-2">
                <p className="text-[11px] text-zinc-400 font-body">
                  {t('form.previewReassurance')}
                </p>
                {!isFormValid && (
                  <p className="text-[11px] text-zinc-500 font-body">
                    {t('form.requiredReminder')}
                  </p>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
