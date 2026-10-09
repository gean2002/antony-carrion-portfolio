import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playSubtleClick } from '../utils/audio';
import { ArrowUp, Code2, Copyright } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    playSubtleClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-4 bg-[#030304] border-t border-white/5 text-zinc-400 font-body text-xs">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left: Copyright & Logo */}
        <div className="flex items-center gap-2.5">
          <img src="/logo-ac.png" alt="Antony Carrion Logo" className="h-6 w-auto object-contain opacity-90" />
          <div className="flex items-center gap-1.5">
            <Copyright className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
            <span>2026 {PORTFOLIO_DATA.name}. Tutti i diritti riservati.</span>
          </div>
        </div>

        {/* Center: Scroll to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 text-zinc-400 hover:text-red-400 transition-colors py-1 px-3 border border-white/5 hover:border-red-500/30 rounded text-xs font-mono cursor-pointer"
        >
          <span>TORNA SU</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

        {/* Right: SVILUPPO WEB </> */}
        <div className="flex items-center gap-1.5 font-heading font-bold text-zinc-300 tracking-wider">
          <span>{PORTFOLIO_DATA.role}</span>
          <span className="text-red-500 font-mono tracking-normal">&lt;/&gt;</span>
        </div>

      </div>
    </footer>
  );
};
