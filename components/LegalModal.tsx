import React, { useEffect } from 'react';
import { X, ShieldCheck, Cookie } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getLegalContent, LEGAL_LAST_UPDATE } from '../data/legalContent';

export type LegalTab = 'privacy' | 'cookies';

interface LegalModalProps {
  tab: LegalTab | null;
  onChangeTab: (tab: LegalTab) => void;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ tab, onChangeTab, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    if (!tab) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [tab, onClose]);

  if (!tab) return null;
  const doc = getLegalContent(language)[tab];

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-3 p-4 sm:p-5 border-b border-white/10">
          <div className="flex gap-1 bg-white/5 p-1 rounded border border-white/10">
            {(['privacy', 'cookies'] as LegalTab[]).map((key) => (
              <button
                key={key}
                onClick={() => onChangeTab(key)}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] sm:text-xs font-heading font-semibold uppercase tracking-wider rounded transition-colors cursor-pointer ${
                  tab === key ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {key === 'privacy' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Cookie className="w-3.5 h-3.5" />}
                {key === 'privacy' ? t('legal.privacy') : t('legal.cookies')}
              </button>
            ))}
          </div>
          <button
            onClick={onClose}
            aria-label={t('legal.close')}
            className="p-2 text-zinc-300 hover:text-red-400 hover:bg-white/5 rounded transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto p-5 sm:p-8 space-y-6 text-zinc-300 font-body text-sm leading-relaxed">
          <div>
            <h2 id="legal-title" className="font-heading font-bold text-xl sm:text-2xl text-white uppercase tracking-wide">
              {doc.title}
            </h2>
            <p className="mt-1 text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
              {t('legal.lastUpdate')}: {LEGAL_LAST_UPDATE}
            </p>
            <p className="mt-3 text-zinc-400">{doc.intro}</p>
          </div>

          {doc.sections.map((section) => (
            <section key={section.title}>
              <h3 className="font-heading font-semibold text-sm sm:text-base text-red-400 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
              <ul className="space-y-1.5">
                {section.body.map((line, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full bg-red-600 shrink-0" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};
