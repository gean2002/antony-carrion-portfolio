import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playSubtleClick } from '../utils/audio';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] pt-20 pb-8 sm:pt-24 sm:pb-10 flex items-center overflow-hidden bg-[#030303]"
    >
      {/* DESKTOP Atmospheric Hero Image: centered with seamless dissolving edge gradients */}
      <div className="hidden lg:flex absolute inset-0 pointer-events-none overflow-hidden items-center justify-center translate-x-8 bg-[#030303]">
        <div className="relative h-full max-h-[520px] w-auto aspect-[1466/1073] flex items-center justify-center">
          <img
            src="/hero-cyberpunk.jpg"
            alt="Antony Carrion - Web Designer"
            className="w-full h-full object-contain"
          />
          {/* Soft edge gradients so the image dissolves seamlessly into the background */}
          <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#030303]/90 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">

          {/* LEFT: Name + CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Big name */}
            <h1 className="font-heading font-bold leading-none select-none uppercase">
              <span className="block text-white text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.5rem] tracking-wide">
                {PORTFOLIO_DATA.lastName}
              </span>
              <span className="block text-red-600 text-[2.5rem] xs:text-[3rem] sm:text-[4rem] md:text-[4.8rem] lg:text-[5.5rem] tracking-wide -mt-1 sm:-mt-2 lg:-mt-3">
                {PORTFOLIO_DATA.firstName}
              </span>
            </h1>

            {/* Role */}
            <p className="mt-2.5 sm:mt-3 font-heading text-xs sm:text-sm tracking-[0.25em] text-zinc-300 uppercase">
              {PORTFOLIO_DATA.role}
            </p>

            {/* Subtitle */}
            <p className="mt-2 text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm font-body">
              {PORTFOLIO_DATA.roleDescription}
            </p>

            {/* CTA Button */}
            <div className="mt-5 sm:mt-6">
              <button
                onClick={() => {
                  playSubtleClick();
                  onOpenContact();
                }}
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 bg-transparent border border-red-700/60 hover:border-red-600 hover:bg-red-600/10 text-zinc-200 hover:text-white font-heading font-medium text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer active:scale-95"
              >
                <span>DISCUTI IL PROGETTO</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* MOBILE ONLY: Cyberpunk Hero Portrait */}
            <div className="lg:hidden relative w-full max-w-[440px] mx-auto mt-6 mb-2 aspect-[4/3] xs:aspect-[16/11] overflow-hidden flex items-center justify-center">
              <img
                src="/hero-cyberpunk.jpg"
                alt="Antony Carrion - Sviluppatore Web"
                className="w-full h-full object-cover object-[62%_center]"
              />
              {/* Soft edge gradients so it blends seamlessly into background */}
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#030303] to-transparent pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#030303] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#030303] to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#030303] to-transparent pointer-events-none" />
            </div>
          </div>

          {/* CENTER: empty space on desktop so background portrait is clearly visible */}
          <div className="lg:col-span-3 hidden lg:block" />

          {/* RIGHT: Stats - responsive layout for phones & tablets */}
          <div className="lg:col-span-3 grid grid-cols-3 lg:flex lg:flex-col justify-between sm:justify-start gap-3 sm:gap-6 lg:gap-0 mt-6 lg:mt-0 lg:self-center pt-5 lg:pt-0 border-t border-white/5 lg:border-t-0">
            {PORTFOLIO_DATA.stats.map((stat, idx) => (
              <div
                key={idx}
                className={`text-left lg:py-3.5 ${idx !== 0 ? 'lg:border-t border-white/10' : ''}`}
              >
                <div className="font-heading font-bold text-3xl xs:text-4xl sm:text-5xl text-red-600 leading-none">
                  {stat.value}
                </div>
                <div className="mt-1 text-[10px] sm:text-[11px] text-zinc-400 uppercase tracking-wider font-heading leading-snug max-w-[110px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-800/40 to-transparent" />
    </section>
  );
};
