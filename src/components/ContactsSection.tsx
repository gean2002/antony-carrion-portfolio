import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, Copyright, ArrowUpRight, ChevronDown } from 'lucide-react';
import { getPortfolioData } from '../data/portfolioData';
import { playSubtleClick } from '../utils/audio';
import { useLanguage } from '../context/LanguageContext';
import {
  submitContactForm,
  FormSubmitError,
  FIELD_LIMITS,
  isValidEmail,
  isValidPhone,
} from '../utils/secureForm';
import { PrivacyConsentField, HoneypotField } from './FormSecurityFields';
import { Highlight } from './Highlight';

interface ContactsSectionProps {
  onOpenContactModal: () => void;
  onOpenLegal: (tab: 'privacy' | 'cookies') => void;
  onOpenCookiePreferences: () => void;
}

const INTEREST_OPTIONS = [
  { id: 'website', key: 'form.interest.website' },
  { id: 'ecommerce', key: 'form.interest.ecommerce' },
  { id: 'software', key: 'form.interest.software' },
  { id: 'ai', key: 'form.interest.ai' },
  { id: 'seo', key: 'form.interest.seo' },
];

export const ContactsSection: React.FC<ContactsSectionProps> = ({
  onOpenLegal,
  onOpenCookiePreferences,
}) => {
  const { t, language } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  // Form State matching the user request
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
        subject: `Nuova Richiesta Anteprima [${language.toUpperCase()}] da antonycarrion.com!`,
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
  };

  return (
    <section id="contacts" className="relative py-7 sm:py-9 bg-[#040404] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Single large bordered card enclosing contacts, new form, laptop, and copyright */}
        <div className="reveal reveal-scale border border-white/10 bg-[#060608] relative overflow-hidden p-5 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT: Contacts list, Slogan & Laptop Image */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                {/* Section header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-[3px] h-5 bg-red-600" />
                  <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
                    {t('contacts.title')}
                  </h2>
                </div>

                {/* Slogan */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase leading-tight tracking-wide">
                  <Highlight
                    text={t('contacts.subtitle')}
                    phrases={['PER IL TUO BUSINESS', 'PARA TU NEGOCIO']}
                    className="text-red-600"
                  />
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-body leading-relaxed max-w-sm">
                  {t('contacts.text')}
                </p>
              </div>

              {/* Clean stacked contacts */}
              <div className="space-y-3.5">
                {/* WhatsApp & Telefono */}
                <div className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">WhatsApp</div>
                    <a
                      href={PORTFOLIO_DATA.contacts.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-heading text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.contacts.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contacts.email}`}
                      className="text-xs sm:text-sm font-heading text-zinc-300 hover:text-red-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.contacts.email}
                    </a>
                  </div>
                </div>

                {/* City */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{t('contacts.city')}</div>
                    <span className="text-xs sm:text-sm font-heading text-zinc-300">{PORTFOLIO_DATA.contacts.location}</span>
                  </div>
                </div>
              </div>

              {/* Laptop Image seamlessly blended */}
              <div className="relative w-full max-w-[340px] aspect-[16/10] overflow-hidden flex items-center justify-center pt-2">
                <img
                  src="/contact-laptop.jpg"
                  alt="Laptop Workspace"
                  className="reveal-media w-full h-full object-contain brightness-95"
                />
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#060608] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#060608] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* RIGHT: New Requested Form Layout */}
            <div className="lg:col-span-7 bg-[#0a0b0e] border border-white/10 p-5 sm:p-7 relative w-full rounded-sm shadow-xl">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-600/70 pointer-events-none" />

              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/5">
                <MessageSquare className="w-4 h-4 text-red-500" />
                <h4 className="font-heading font-bold text-xs sm:text-sm tracking-wider text-white uppercase">
                  {t('form.previewTitle')}
                </h4>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto bg-red-950/40 border border-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                    <CheckCircle2 className="w-7 h-7 text-red-400" />
                  </div>
                  <h5 className="font-heading font-bold text-lg text-white uppercase">
                    {t('form.successTitle')}
                  </h5>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto font-body">
                    {t('thanks')} <strong className="text-white">{fullName}</strong>! {t('form.successDesc')}
                  </p>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={handleReset}
                      className="px-4 py-2.5 border border-white/20 hover:border-white/40 text-zinc-300 font-heading text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      {t('form.sendAnother')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 relative" noValidate={false}>
                  <HoneypotField value={honeypot} onChange={setHoneypot} />

                  {/* Row 1: NOME E COGNOME * + EMAIL * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                        {t('form.fullName')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        minLength={2}
                        maxLength={FIELD_LIMITS.fullName}
                        autoComplete="name"
                        placeholder={t('form.fullNamePlaceholder')}
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                      />
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase mt-1">
                        {t('form.fullNameHelper')} <span className="text-red-500/80">*</span>
                      </span>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
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
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                      />
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase mt-1">
                        {t('form.emailHelper')} <span className="text-red-500/80">*</span>
                      </span>
                    </div>
                  </div>

                  {/* Row 2: TELEFONO / WHATSAPP * + ATTIVITÀ E CITTÀ * */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                        {t('form.phoneLabel')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={FIELD_LIMITS.phone}
                        pattern="[+\d\s().\-]{6,45}"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder={t('form.phonePlaceholder')}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                      />
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase mt-1">
                        {t('form.phoneHelper')} <span className="text-red-500/80">*</span>
                      </span>
                    </div>

                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                        {t('form.activityCity')} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={FIELD_LIMITS.activityCity}
                        placeholder={t('form.activityCityPlaceholder')}
                        value={activityCity}
                        onChange={(e) => setActivityCity(e.target.value)}
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                      />
                      <span className="block text-[9px] font-mono text-zinc-500 uppercase mt-1">
                        {t('form.activityCityHelper')} <span className="text-red-500/80">*</span>
                      </span>
                    </div>
                  </div>

                  {/* Row 3: COSA TI INTERESSA? (facoltativo, scegli quante vuoi) */}
                  <div className="pt-1">
                    <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-2">
                      {t('form.interestsTitle')}{' '}
                      <span className="text-zinc-500 text-[10px] font-normal lowercase">
                        {t('form.interestsOptional')}
                      </span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {INTEREST_OPTIONS.map((opt) => {
                        const isSelected = selectedInterests.includes(opt.id);
                        return (
                          <button
                            type="button"
                            key={opt.id}
                            onClick={() => toggleInterest(opt.id)}
                            className={`px-3.5 py-1.5 text-xs font-heading font-medium tracking-wide rounded-full border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-red-600 text-white border-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]'
                                : 'bg-[#121318] text-zinc-400 border-white/10 hover:border-white/25 hover:text-white'
                            }`}
                          >
                            {t(opt.key)}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Row 4: HAI GIÀ UN SITO? LINK OPPURE SCRIVI "NO" * */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                      {t('form.hasSite')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={FIELD_LIMITS.hasWebsite}
                      placeholder={t('form.hasSitePlaceholder')}
                      value={hasWebsite}
                      onChange={(e) => setHasWebsite(e.target.value)}
                      className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                    />
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase mt-1">
                      {t('form.hasSiteHelper')} <span className="text-red-500/80">*</span>
                    </span>
                  </div>

                  {/* Row 5: QUAL È L'OBIETTIVO PRINCIPALE DEL SITO? * */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                      {t('form.mainGoal')} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={3}
                      required
                      minLength={3}
                      maxLength={FIELD_LIMITS.mainGoal}
                      placeholder={t('form.mainGoalPlaceholder')}
                      value={mainGoal}
                      onChange={(e) => setMainGoal(e.target.value)}
                      className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none p-3.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body resize-none rounded-sm"
                    />
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase mt-1">
                      {t('form.mainGoalHelper')} <span className="text-red-500/80">*</span>
                    </span>
                  </div>

                  {/* Collapsible / Optional Business & Brand Fields */}
                  <div className="pt-2 border-t border-white/5">
                    <button
                      type="button"
                      onClick={() => {
                        playSubtleClick();
                        setShowOptionalFields(!showOptionalFields);
                      }}
                      className="flex items-center justify-between w-full text-left py-2 text-xs font-heading font-bold text-red-400 hover:text-red-300 transition-colors cursor-pointer uppercase tracking-wider"
                    >
                      <span>{t('form.optionalBrandToggle')}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          showOptionalFields ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {showOptionalFields && (
                      <div className="space-y-3.5 pt-2 animate-in fade-in duration-200">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[10px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                              {t('form.businessName')}{' '}
                              <span className="text-zinc-500 font-normal lowercase">
                                {t('form.optionalLabel')}
                              </span>
                            </label>
                            <input
                              type="text"
                              maxLength={FIELD_LIMITS.businessName}
                              placeholder={t('form.businessNamePlaceholder')}
                              value={businessName}
                              onChange={(e) => setBusinessName(e.target.value)}
                              className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                              {t('form.instagram')}{' '}
                              <span className="text-zinc-500 font-normal lowercase">
                                {t('form.optionalLabel')}
                              </span>
                            </label>
                            <input
                              type="text"
                              maxLength={FIELD_LIMITS.instagram}
                              placeholder={t('form.instagramPlaceholder')}
                              value={instagram}
                              onChange={(e) => setInstagram(e.target.value)}
                              className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] font-heading font-bold tracking-wider text-zinc-300 uppercase mb-1">
                            {t('form.logoLink')}{' '}
                            <span className="text-zinc-500 font-normal lowercase">
                              {t('form.optionalLabel')}
                            </span>
                          </label>
                          <input
                            type="text"
                            maxLength={FIELD_LIMITS.logoLink}
                            placeholder={t('form.logoLinkPlaceholder')}
                            value={logoLink}
                            onChange={(e) => setLogoLink(e.target.value)}
                            className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body rounded-sm"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* GDPR Consent */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none group">
                      <input
                        type="checkbox"
                        required
                        checked={privacyAccepted}
                        onChange={(e) => setPrivacyAccepted(e.target.checked)}
                        className="mt-1 w-4 h-4 rounded border-white/20 bg-[#121318] text-red-600 focus:ring-0 focus:ring-offset-0 cursor-pointer accent-red-600"
                      />
                      <span className="text-xs text-zinc-300 font-body leading-snug">
                        {t('form.privacyCheckboxPre')}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            onOpenLegal('privacy');
                          }}
                          className="text-red-400 hover:text-red-300 underline font-semibold cursor-pointer"
                        >
                          {t('form.privacyCheckboxLink')}
                        </button>
                        {t('form.privacyCheckboxPost')} <span className="text-red-500">*</span>
                      </span>
                    </label>
                  </div>

                  {errorKey && (
                    <p role="alert" className="text-xs text-red-400 font-body bg-red-950/30 border border-red-700/40 px-3 py-2 rounded">
                      {errorKey}
                    </p>
                  )}

                  {/* Submit Button & Subtext */}
                  <div className="pt-2 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !isFormValid}
                      className={`btn-shimmer w-full inline-flex items-center justify-between px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-red-950/50 rounded-sm active:scale-98 disabled:opacity-50 disabled:cursor-not-allowed ${
                        isSubmitting ? 'cursor-wait' : ''
                      }`}
                    >
                      <span>{isSubmitting ? t('form.submittingPreview') : t('form.submitPreview')}</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </button>

                    <p className="text-[11px] text-zinc-400 font-body text-center">
                      {t('form.previewReassurance')}
                    </p>

                    {!isFormValid && (
                      <p className="text-[10px] text-zinc-500 font-mono text-center">
                        {t('form.requiredReminder')}
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* BOTTOM: Integrated Copyright & Role */}
          <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-body text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <Copyright className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>2026 {PORTFOLIO_DATA.name}. {t('footer.rights')}</span>
            </div>

            {/* Legal links */}
            <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <button onClick={() => onOpenLegal('privacy')} className="hover:text-red-400 transition-colors cursor-pointer">
                {t('legal.privacy')}
              </button>
              <span className="text-zinc-700">|</span>
              <button onClick={() => onOpenLegal('cookies')} className="hover:text-red-400 transition-colors cursor-pointer">
                {t('legal.cookies')}
              </button>
              <span className="text-zinc-700">|</span>
              <button onClick={onOpenCookiePreferences} className="hover:text-red-400 transition-colors cursor-pointer">
                {t('legal.preferences')}
              </button>
            </nav>

            <div className="flex items-center gap-1.5 font-heading text-zinc-400 uppercase tracking-wider text-xs">
              <span>{PORTFOLIO_DATA.role}</span>
              <span className="text-red-500 font-mono tracking-normal">&lt;/&gt;</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
