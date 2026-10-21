import React from 'react';
import { getPortfolioData } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playTechBlip } from '../utils/audio';
import { ChevronRight, MessageSquare, Compass, Code, ShieldCheck, Rocket } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  const getStepIcon = (index: number) => {
    const baseCls = "w-6 h-6 sm:w-7 sm:h-7 text-red-500 group-hover:text-red-300 transition-colors duration-300";
    switch (index) {
      case 0: return <MessageSquare className={`${baseCls} anim-icon-chat`} />;
      case 1: return <Compass className={`${baseCls} anim-icon-compass`} />;
      case 2: return <Code className={`${baseCls} anim-icon-code`} />;
      case 3: return <ShieldCheck className={`${baseCls} anim-icon-shield`} />;
      case 4: return <Rocket className={`${baseCls} anim-icon-rocket`} />;
      default: return <Code className={`${baseCls} anim-icon-code`} />;
    }
  };

  return (
    <section
      id="process"
      data-wow="process"
      className="relative py-10 sm:py-14 bg-[#040404] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <span className="wow-accent-bar w-1 h-6 bg-red-600 rounded-sm" />
          <h2 className="font-heading font-bold text-lg sm:text-xl tracking-widest text-white uppercase">
            <span className="wow-title-text">{t('nav.process')}</span>
          </h2>
        </div>

        {/* 5 steps horizontal layout with travelling pipeline laser beam */}
        <div className="relative grid grid-cols-1 md:grid-cols-5 gap-0 border border-white/10 bg-[#08090c] shadow-xl shadow-black/60 rounded-sm overflow-hidden">
          {/* Travelling red energy beam along the top edge */}
          <div aria-hidden="true" className="wow-pipeline-beam" />

          {PORTFOLIO_DATA.processSteps.map((step, idx) => {
            const isLast = idx === PORTFOLIO_DATA.processSteps.length - 1;
            return (
              <div
                key={step.step}
                style={{ '--stagger': idx } as React.CSSProperties}
                onClick={() => playTechBlip()}
                className={`wow-step-card relative flex items-center gap-4 p-5 sm:p-6 lg:p-5 xl:p-6 min-h-[115px] sm:min-h-[125px] cursor-pointer group hover:bg-[#11121a] ${
                  !isLast ? 'border-b md:border-b-0 md:border-r border-white/10' : ''
                }`}
              >
                {/* Top active laser bar on hover */}
                <div
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-[2px] w-0 group-hover:w-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.95)] transition-all duration-300"
                />

                {/* Subtle step number watermark in top-right corner */}
                <span
                  aria-hidden="true"
                  className="absolute top-2.5 right-3.5 font-mono text-[10px] font-bold tracking-widest text-white/15 group-hover:text-red-500/80 transition-colors select-none"
                >
                  {step.step}
                </span>

                {/* Red Cyberpunk Icon Badge with subtle hover lift and glow */}
                <div className="relative z-10 w-13 h-13 sm:w-14 sm:h-14 shrink-0 bg-[#22070a] border border-red-700/60 group-hover:border-red-400 group-hover:bg-[#32080d] group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(239,68,68,0.45)] rounded flex items-center justify-center transition-all duration-300 shadow-md shadow-red-950/40">
                  {getStepIcon(idx)}
                </div>

                {/* Text Content */}
                <div className="relative z-10 min-w-0 flex-1">
                  <h3 className="font-heading font-bold text-sm sm:text-[15px] tracking-wider text-white group-hover:text-red-400 uppercase transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-[13px] text-zinc-400 group-hover:text-zinc-300 font-body leading-snug line-clamp-3 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Animated wave arrow between steps */}
                {!isLast && (
                  <div
                    style={{ '--stagger': idx } as React.CSSProperties}
                    className="wow-step-arrow hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none"
                  >
                    <ChevronRight className="w-5 h-5 text-red-600/90 stroke-[2.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
