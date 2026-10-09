import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playSubtleClick } from '../utils/audio';
import { Volume2, VolumeX, Menu, X, Send, Phone } from 'lucide-react';

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
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'CHI SONO' },
    { id: 'services', label: 'SERVIZI' },
    { id: 'projects', label: 'PROGETTI' },
    { id: 'process', label: 'FASI' },
    { id: 'contacts', label: 'CONTATTI' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#050505]/95 backdrop-blur-md border-b border-white/5 py-3 shadow-2xl shadow-black/80`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left Zone: Brand Logo (AC) */}
        <button
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
          aria-label="Alla Home"
        >
          <div className="relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <img
              src="/logo-ac.png"
              alt="Antony Carrion Logo"
              className="h-8 sm:h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(185,28,28,0.4)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-red-400 transition-colors leading-tight">
              ANTONY CARRION
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
              WEB DESIGNER
            </span>
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

        {/* Right Zone: Social & Mobile Menu */}
        <div className="flex items-center gap-4 sm:gap-5">
          {/* WhatsApp & Telefono */}
          <div className="hidden sm:flex items-center gap-3 text-zinc-300 text-sm">
            {/* WhatsApp */}
            <a
              href={PORTFOLIO_DATA.contacts.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:bg-emerald-500/20 hover:text-emerald-300 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-heading text-xs font-semibold uppercase tracking-wider hidden md:inline">WhatsApp</span>
            </a>

            {/* Telefono */}
            <a
              href={PORTFOLIO_DATA.contacts.phoneUrl}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/5 border border-white/10 hover:border-red-500/40 text-zinc-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span className="font-mono text-xs font-medium tracking-tight">{PORTFOLIO_DATA.contacts.phone}</span>
            </a>
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

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 text-zinc-300">
                <a
                  href={PORTFOLIO_DATA.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 hover:text-emerald-300 text-xs font-heading font-semibold uppercase tracking-wider"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href={PORTFOLIO_DATA.contacts.phoneUrl}
                  className="flex items-center justify-center gap-2 px-3 py-2 rounded bg-white/5 border border-white/10 text-zinc-200 text-xs font-mono"
                  aria-label="Telefono"
                >
                  <Phone className="w-3.5 h-3.5 text-red-500" />
                  <span>{PORTFOLIO_DATA.contacts.phone}</span>
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="px-4 py-2.5 text-xs font-bold tracking-wider font-heading text-white border border-red-700/60 hover:border-red-600 bg-transparent text-center"
              >
                DISCUTI IL PROGETTO
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
