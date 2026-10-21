import { useLanguage } from '../context/LanguageContext';
import React, { useRef, useEffect } from 'react';
import { getPortfolioData, Service } from '../data/portfolioData';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { ArrowRight, Code, Layout, ShoppingCart, Headphones } from 'lucide-react';
import { Highlight } from './Highlight';

interface AboutAndServicesProps {
  onOpenAboutModal: () => void;
  onSelectService: (service: Service) => void;
}

export const AboutAndServices: React.FC<AboutAndServicesProps> = ({
  onOpenAboutModal,
  onSelectService,
}) => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('ended', handleEnded);
    video.play().catch(() => {});

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const getServiceIcon = (icon: Service['icon']) => {
    const cls = "w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors";
    switch (icon) {
      case 'code': return <Code className={cls} />;
      case 'layout': return <Layout className={cls} />;
      case 'cart': return <ShoppingCart className={cls} />;
      case 'support': return <Headphones className={cls} />;
      default: return <Code className={cls} />;
    }
  };

  return (
    <div id="about" className="relative bg-[#050505] border-t border-white/5 scroll-mt-16 sm:scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-8">
        {/* Single card container matching the reference image */}
        <div
          data-wow="about"
          className="bg-[#0d0d0f] border border-white/8 hover:border-red-900/40 transition-colors duration-500 rounded-none relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* LEFT: Portrait Video with Shutter Reveal + Holographic Laser Scanline */}
            <div className="wow-video-curtain group/vid lg:col-span-3 relative overflow-hidden h-[300px] xs:h-[340px] sm:h-[380px] lg:h-auto lg:min-h-[300px] flex items-center justify-center bg-black border-b lg:border-b-0 lg:border-r border-white/5">
              <video
                ref={videoRef}
                src="/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                onEnded={(e) => {
                  e.currentTarget.currentTime = 0;
                  e.currentTarget.play().catch(() => {});
                }}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover/vid:scale-105"
              />
              {/* Holographic laser scanline sweeping down on reveal */}
              <div
                aria-hidden="true"
                className="wow-scanline absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent shadow-[0_0_18px_2px_rgba(239,68,68,0.9)] pointer-events-none z-10 opacity-0"
              />
              {/* Subtle cyberpunk corner brackets */}
              <div aria-hidden="true" className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-red-600/60 pointer-events-none z-10" />
              <div aria-hidden="true" className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-red-600/60 pointer-events-none z-10" />
              {/* Subtle right-side fade into the card background */}
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d0d0f] to-transparent pointer-events-none hidden lg:block" />
              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d0f] to-transparent pointer-events-none" />
            </div>

            {/* MIDDLE: About me */}
            <div className="lg:col-span-4 flex flex-col justify-center px-5 sm:px-6 py-6 border-b lg:border-b-0 lg:border-r border-white/5">
              {/* Section header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span style={{ '--delay': '0.08s' } as React.CSSProperties} className="wow-accent-bar w-[3px] h-5 bg-red-600" />
                <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
                  <span style={{ '--delay': '0.08s' } as React.CSSProperties} className="wow-title-text">
                    {t('nav.about')}
                  </span>
                </h2>
              </div>

              <div className="space-y-3 text-zinc-400 font-body text-xs sm:text-sm leading-relaxed">
                {PORTFOLIO_DATA.bio.map((paragraph, i) => (
                  <p
                    key={i}
                    style={{ '--stagger': i } as React.CSSProperties}
                    className="wow-bio-item"
                  >
                    <Highlight
                      text={paragraph}
                      phrases={[
                        'Istituto Superiore Ettore Majorana di Grugliasco',
                        'Instituto Superior Ettore Majorana de Grugliasco',
                      ]}
                      className="text-zinc-200 font-medium"
                    />
                  </p>
                ))}
              </div>

              {/* Eye-catching CTA button */}
              <div
                style={{ '--stagger': PORTFOLIO_DATA.bio.length } as React.CSSProperties}
                className="wow-bio-item mt-6 pt-1"
              >
                <button
                  onClick={() => {
                    playSubtleClick();
                    onOpenAboutModal();
                  }}
                  className="btn-shimmer group relative inline-flex items-center gap-3 px-5 py-3 bg-[#180507] hover:bg-red-600 border border-red-600/80 hover:border-red-500 text-white font-heading font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-red-950/60 hover:shadow-[0_0_25px_rgba(220,38,38,0.45)] active:scale-95"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-white animate-pulse" />
                    <span>{t('about.story')}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:text-white group-hover:translate-x-1.5 transition-all" />
                </button>
              </div>
            </div>

            {/* RIGHT: Services list */}
            <div id="services" className="lg:col-span-5 flex flex-col justify-center px-5 sm:px-7 py-6 sm:py-8 scroll-mt-20 sm:scroll-mt-24">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span style={{ '--delay': '0.16s' } as React.CSSProperties} className="wow-accent-bar w-[3px] h-5 bg-red-600" />
                <h2 className="font-heading font-bold text-base sm:text-lg tracking-widest text-white uppercase">
                  <span style={{ '--delay': '0.16s' } as React.CSSProperties} className="wow-title-text">
                    {t('nav.services')}
                  </span>
                </h2>
              </div>

              <div className="space-y-1">
                {PORTFOLIO_DATA.services.map((service, idx) => (
                  <div
                    key={service.id}
                    style={{ '--stagger': idx } as React.CSSProperties}
                    onClick={() => playTechBlip()}
                    className={`wow-service-row group flex items-start gap-4 py-3 sm:py-3.5 cursor-default -mx-2 px-3 rounded-sm ${idx !== 0 ? 'border-t border-white/5' : ''}`}
                  >
                    {/* Icon badge */}
                    <div className="w-10 h-10 shrink-0 bg-[#20070a] border border-red-700/60 group-hover:border-red-400 group-hover:bg-[#2c090d] group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(239,68,68,0.45)] flex items-center justify-center transition-all duration-300 rounded-sm shadow-sm shadow-red-950/40 mt-0.5">
                      {getServiceIcon(service.icon)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-xs sm:text-[13px] tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400 group-hover:text-zinc-300 font-body leading-relaxed line-clamp-2 transition-colors">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
