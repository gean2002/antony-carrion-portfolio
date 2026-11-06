import React, { useState, useEffect } from 'react';
import { getPortfolioData } from '../data/portfolioData';
import { playSubtleClick } from '../utils/audio';
import { Volume2, VolumeX, Menu, X, Send, Phone, Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

interface NavbarProps {
  onOpenContact: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  soundEnabled,
  onToggleSound,
}) => {
  const { language, setLanguage, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'services', label: t('nav.services') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'process', label: t('nav.process') },
    { id: 'faq', label: 'FAQ' },
    { id: 'contacts', label: t('nav.contact') },
  ];

  const isManualScrolling = React.useRef(false);
  const scrollTimeout = React.useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (isManualScrolling.current) return;

      if (window.scrollY < 80) {
        setActiveSection('hero');
        return;
      }

      const sections = navLinks.map(link => {
        const el = document.getElementById(link.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        return {
          id: link.id,
          top: rect.top,
          bottom: rect.bottom,
        };
      }).filter(Boolean);

      // Section whose top is closest to navbar area (around 100px)
      const current = sections.find(s => s && s.top <= 160 && s.bottom >= 100);
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playSubtleClick();
    setMobileMenuOpen(false);
    setActiveSection(id);

    isManualScrolling.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    scrollTimeout.current = setTimeout(() => {
      isManualScrolling.current = false;
    }, 800);

    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className="intro-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-2.5 sm:py-3 shadow-2xl shadow-black/80"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between">
        {/* Left Zone: Brand Logo (AC) */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          aria-label="Alla Home"
        >
          <div className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <img
              src="/logo-full.png"
              alt="Antony Carrion Logo"
              className="h-7 sm:h-9 md:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(185,28,28,0.4)]"
            />
          </div>
        </button>

        {/* Center Zone: Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold tracking-wider font-heading">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative py-1 transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-red-500 font-bold drop-shadow-[0_0_8px_rgba(239,68,68,0.6)]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-red-500 rounded-full shadow-[0_0_10px_rgba(239,68,68,1)]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Zone: CTA & Language Switch */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Bottone Richiesta Preventivo Gratuito (Desktop & Tablet) */}
          <button
            onClick={() => {
              playSubtleClick();
              onOpenContact();
            }}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 red-glow cursor-pointer shadow-lg shadow-red-950/60 active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{t('nav.quoteBtn')}</span>
          </button>

          {/* Selettore Lingua (Visibile sia su Desktop che su Mobile nella Navbar principale) */}
          <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded border border-white/10">
            <button 
              onClick={() => {
                playSubtleClick();
                setLanguage('it');
              }}
              className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${language === 'it' ? 'bg-red-600 text-white shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'text-zinc-400 hover:text-white'}`}
            >
              IT
            </button>
            <button 
              onClick={() => {
                playSubtleClick();
                setLanguage('es');
              }}
              className={`px-2 py-0.5 text-[10px] font-bold rounded transition-colors ${language === 'es' ? 'bg-red-600 text-white shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 'text-zinc-400 hover:text-white'}`}
            >
              ES
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              playSubtleClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Menu di navigazione"
            className="lg:hidden text-zinc-300 hover:text-white p-2 rounded focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-zinc-950/95 border-b border-white/10 px-6 py-6 backdrop-blur-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4 font-heading text-sm font-semibold">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left py-2 border-b border-white/5 transition-colors ${
                  activeSection === link.id ? 'text-red-500 font-bold' : 'text-zinc-300 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  playSubtleClick();
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded transition-all duration-200 red-glow shadow-lg shadow-red-950/60 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t('nav.quoteBtn')}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
