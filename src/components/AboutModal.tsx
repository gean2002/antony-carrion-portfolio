import React from 'react';
import { getPortfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playSubtleClick } from '../utils/audio';
import { X, CheckCircle2, Terminal, Award, FileCode2, GraduationCap } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDiscussProject: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({
  isOpen,
  onClose,
  onDiscussProject,
}) => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0a0a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div>
              <span className="text-xs font-mono text-red-500 uppercase tracking-wider block">
                {t('modal.bio')}
              </span>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                ANTONY CARRION
              </h2>
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-7">
          
          {/* Main Story */}
          <div className="space-y-3.5 text-zinc-300 font-body text-sm leading-relaxed">
            <p className="text-base text-white font-medium">
              {t('about.p1')}
            </p>
            <p>
              <span dangerouslySetInnerHTML={{__html: t('about.p2').replace('Istituto Superiore Ettore Majorana di Grugliasco', '<strong class="text-white">Istituto Superiore Ettore Majorana di Grugliasco</strong>').replace('Instituto Superior Ettore Majorana de Grugliasco', '<strong class="text-white">Instituto Superior Ettore Majorana de Grugliasco</strong>').replace('Ettore Majorana High School of Grugliasco', '<strong class="text-white">Ettore Majorana High School of Grugliasco</strong>')}}></span>
            </p>
            <p>
              {t('about.p3')}
            </p>
          </div>

          {/* Education Highlight Card */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1f0609] via-[#0d0e12] to-[#0d0e12] border border-red-600/40 rounded-sm flex items-start gap-4 shadow-md shadow-red-950/30">
            <div className="w-11 h-11 rounded-sm bg-red-950/80 border border-red-500/50 flex items-center justify-center text-red-400 shrink-0 mt-0.5">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest">
                Formazione & Diploma
              </div>
              <h4 className="font-heading font-bold text-sm sm:text-base text-white uppercase mt-0.5">
                Istituto Superiore Ettore Majorana di Grugliasco
              </h4>
              <p className="text-xs text-zinc-300 font-body leading-relaxed mt-1">
                {t('about.eduDesc')}
              </p>
            </div>
          </div>

          {/* 3 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-zinc-950 border border-white/5 rounded-sm">
              <div className="w-8 h-8 rounded bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-500 mb-3">
                <FileCode2 className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-1.5">
                {t('about.f1Title')}
              </h4>
              <p className="text-xs text-zinc-300 font-body leading-relaxed">
                {t('about.f1Desc')}
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-white/5 rounded-sm">
              <div className="w-8 h-8 rounded bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-500 mb-3">
                <Terminal className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-1.5">
                {t('about.f2Title')}
              </h4>
              <p className="text-xs text-zinc-300 font-body leading-relaxed">
                {t('about.f2Desc')}
              </p>
            </div>

            <div className="p-4 bg-zinc-950 border border-white/5 rounded-sm">
              <div className="w-8 h-8 rounded bg-red-950/60 border border-red-500/40 flex items-center justify-center text-red-500 mb-3">
                <Award className="w-4 h-4" />
              </div>
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white mb-1.5">
                {t('about.f3Title')}
              </h4>
              <p className="text-xs text-zinc-300 font-body leading-relaxed">
                {t('about.f3Desc')}
              </p>
            </div>
          </div>

          {/* Guarantees List */}
          <div className="p-6 bg-zinc-950/80 border border-red-600/30 rounded-sm">
            <h4 className="font-heading font-bold text-xs text-red-400 uppercase tracking-wider mb-3">
              {t('about.whatYouGet')}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300 font-body">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>{t('about.g1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>{t('about.g2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>{t('about.g3')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>30 giorni di supporto tecnico gratuito dopo la consegna</span>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-300 font-mono">
              {t('about.openTo')}
            </div>
            <button
              onClick={() => {
                onClose();
                onDiscussProject();
              }}
              className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all red-glow cursor-pointer"
            >
              {t('about.discussBtn')}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
