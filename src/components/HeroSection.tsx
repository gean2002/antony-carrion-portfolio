import React from 'react';
import { getPortfolioData } from '../data/portfolioData';
import { playSubtleClick } from '../utils/audio';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  const { t, language } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);
  return (
    <section
      id="hero"
      className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] pt-20 pb-8 sm:pt-24 sm:pb-10 flex items-center overflow-hidden bg-[#030303]"
    >
      {/* DESKTOP Atmospheric Hero Image: beautifully positioned on the right half with seamless dissolving edge gradients */}
      <div className="hidden lg:flex absolute inset-0 pointer-events-none overflow-hidden items-center justify-center translate-x-12 xl:translate-x-16 bg-[#030303]">
        <div className="relative h-full max-h-[520px] w-auto aspect-[1466/1073] flex items-center justify-center">
          <img
            src="/hero-cyberpunk.jpg"
            alt="Antony Carrion - Web Designer & Vibe Coder"
            className="intro-portrait w-full h-full object-contain"
          />
          {/* Soft edge gradients so the image dissolves seamlessly into the background */}
          <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#030303]/90 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Container */}
      <div className="hero-exit relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* LEFT: Name + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Live Availability Badge */}
            <div
              style={{ '--delay': '0.15s' } as React.CSSProperties}
              className="intro-fade-up inline-flex items-center gap-2 px-3 py-1 mb-3.5 sm:mb-4 rounded-full border border-emerald-500/30 bg-emerald-950/30 backdrop-blur-sm self-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-heading text-[10px] sm:text-[11px] font-medium tracking-wider text-emerald-400 uppercase">
                {t('hero.badge')}
              </span>
            </div>

            {/* Big name */}
            <h1 className="font-heading font-bold leading-none select-none uppercase">
              <span className="intro-mask">
                <span className="intro-line-1 text-white text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.5rem] tracking-wide">
                  {PORTFOLIO_DATA.lastName}
                </span>
              </span>
              <span className="intro-mask -mt-1 sm:-mt-2 lg:-mt-3">
                <span className="intro-line-2 text-red-600 text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.5rem] tracking-wide">
                  {PORTFOLIO_DATA.firstName}
                </span>
              </span>
            </h1>

            {/* Role / High-conversion specialty */}
            <p
              style={{ '--delay': '0.34s' } as React.CSSProperties}
              className="intro-fade-up mt-2.5 sm:mt-3 font-heading text-xs sm:text-sm tracking-[0.22em] text-zinc-300 uppercase flex flex-wrap items-center gap-1.5"
            >
              <span>{t('hero.title1')}</span>
              <span className="text-red-500 font-bold tracking-[0.25em] drop-shadow-[0_0_12px_rgba(239,68,68,0.45)]">{t('hero.title2')}</span>
            </p>

            {/* Subtitle / Direct Value Proposition */}
            <p
              style={{ '--delay': '0.44s' } as React.CSSProperties}
              className="intro-fade-up mt-2.5 text-zinc-300 text-xs sm:text-sm sm:text-[13.5px] leading-relaxed max-w-lg font-body"
            >
              {t('hero.subtitle')}
            </p>

            {/* Dual CTA Buttons (CRO: Primary + Secondary) */}
            <div
              style={{ '--delay': '0.54s' } as React.CSSProperties}
              className="intro-fade-up mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-3.5"
            >
              <button
                onClick={() => {
                  playSubtleClick();
                  onOpenContact();
                }}
                className="btn-shimmer group inline-flex items-center gap-2.5 px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-heading font-medium text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer active:scale-95 shadow-[0_0_25px_rgba(220,38,38,0.35)] hover:shadow-[0_0_35px_rgba(220,38,38,0.55)] border border-red-500/80"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <a
                href="#projects"
                onClick={() => playSubtleClick()}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/25 text-zinc-300 hover:text-white font-heading font-medium text-xs tracking-widest uppercase transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>{t('hero.secondaryCta')}</span>
              </a>
            </div>

            {/* Micro-trust indicators / Friction Reducers */}
            <div
              style={{ '--delay': '0.62s' } as React.CSSProperties}
              className="intro-fade-up mt-3.5 text-[10.5px] sm:text-[11.5px] text-zinc-400 font-body flex items-center gap-1.5"
            >
              <span>{t('hero.trustBadge')}</span>
            </div>

            {/* MOBILE ONLY: Cyberpunk Hero Portrait */}
            <div className="lg:hidden relative w-full max-w-[440px] mx-auto mt-6 mb-2 aspect-[4/3] xs:aspect-[16/11] overflow-hidden flex items-center justify-center">
              <img
                src="/hero-cyberpunk.jpg"
                alt="Antony Carrion - Web Designer & Vibe Coder"
                className="intro-portrait w-full h-full object-cover object-[62%_center]"
              />
              {/* Soft edge gradients so it blends seamlessly into background */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: empty space on desktop so background portrait is unobstructed */}
          <div className="lg:col-span-5 hidden lg:block" />

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />
    </section>
  );
};
