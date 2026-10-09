import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TechLogo } from './TechLogos';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { ArrowRight } from 'lucide-react';

interface TechAndCtaSectionProps {
  onOpenContact: () => void;
}

export const TechAndCtaSection: React.FC<TechAndCtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section className="relative py-6 sm:py-8 bg-[#040404] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT: Technologies (Clean icons on dark background, no grey box cards) */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-[3px] h-5 bg-red-700" />
                <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
                  TECNOLOGIE
                </h2>
              </div>

              {/* 3-col x 2-row clean icons */}
              <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:gap-y-7 sm:gap-x-6">
                {PORTFOLIO_DATA.technologies.map((tech) => (
                  <div
                    key={tech.id}
                    onMouseEnter={() => playTechBlip()}
                    className="group flex flex-col items-center justify-center cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                  >
                    <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                      <TechLogo type={tech.iconType} className="w-9 h-9 sm:w-10 sm:h-10" />
                    </div>
                    <span className="mt-2.5 text-xs sm:text-sm font-heading font-medium tracking-wider text-zinc-300 group-hover:text-white transition-colors text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CTA Card - compact, with user artwork occupying only the right half */}
          <div className="lg:col-span-7 relative overflow-hidden border border-white/10 rounded-none min-h-[220px] sm:min-h-[240px] flex items-center bg-[#070709] shadow-xl">
            {/* The artwork covers ONLY the right half (50%) */}
            <div className="absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden pointer-events-none">
              <img
                src="/cta-traveler.jpg"
                alt="Maxim nel paesaggio vulcanico"
                className="w-full h-full object-cover object-[50%_25%] brightness-105 contrast-[1.02]"
              />
              {/* Soft fade on the left edge into the card background #070709 */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#070709] to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070709]/30 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content on the left half: clean solid dark background */}
            <div className="relative z-10 w-full sm:w-[55%] lg:w-1/2 px-5 sm:px-7 py-5 sm:py-6">
              <h3 className="font-heading font-black text-base sm:text-xl lg:text-[1.65rem] text-white uppercase leading-[1.15] tracking-wide">
                IL PROGETTO PRONTO<br />
                INIZIA <span className="text-[#e50914]">QUI</span>
              </h3>

              <p className="mt-2 text-[11px] sm:text-xs text-zinc-300 font-body leading-relaxed max-w-[280px]">
                Discuteremo la tua idea, le opzioni<br className="hidden sm:inline" /> e la proposta commerciale.
              </p>

              <button
                onClick={() => { playSubtleClick(); onOpenContact(); }}
                className="mt-4 sm:mt-5 group inline-flex items-center gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#d3101b] hover:bg-[#b00d16] text-white font-heading font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-200 cursor-pointer shadow-md shadow-red-950/60 active:scale-95"
              >
                <span>SCRIVIMI</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
