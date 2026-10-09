import React, { useRef, useEffect } from 'react';
import { PORTFOLIO_DATA, Service } from '../data/portfolioData';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { ArrowRight, Code, Layout, ShoppingCart, Headphones } from 'lucide-react';

interface AboutAndServicesProps {
  onOpenAboutModal: () => void;
  onSelectService: (service: Service) => void;
}

export const AboutAndServices: React.FC<AboutAndServicesProps> = ({
  onOpenAboutModal,
  onSelectService,
}) => {
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
        <div className="bg-[#0d0d0f] border border-white/8 rounded-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">

            {/* LEFT: Portrait Video */}
            <div className="lg:col-span-3 relative overflow-hidden h-[300px] xs:h-[340px] sm:h-[380px] lg:h-auto lg:min-h-[300px] flex items-center justify-center bg-black border-b lg:border-b-0 lg:border-r border-white/5">
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
                className="w-full h-full object-cover object-center"
              />
              {/* Subtle right-side fade into the card background */}
              <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#0d0d0f] to-transparent pointer-events-none hidden lg:block" />
              {/* Subtle bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#0d0d0f] to-transparent pointer-events-none" />
            </div>

            {/* MIDDLE: About me */}
            <div className="lg:col-span-4 flex flex-col justify-center px-5 sm:px-6 py-6 border-b lg:border-b-0 lg:border-r border-white/5">
              {/* Section header */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-[3px] h-5 bg-red-600" />
                <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
                  CHI SONO
                </h2>
              </div>

              <div className="space-y-3 text-zinc-400 font-body text-xs sm:text-sm leading-relaxed">
                <p>
                  Mi chiamo <span className="text-zinc-200 font-medium">Antony Carrion</span>, sviluppatore web e Shopify specialist con base in Italia.
                </p>
                <p>
                  Diplomato presso l'<span className="text-zinc-200 font-medium">Istituto Superiore Ettore Majorana di Grugliasco</span>, unisco una solida preparazione tecnica al design d'impatto e all'ottimizzazione delle conversioni.
                </p>
                <p>
                  Aiuto aziende e professionisti a scalare su internet con soluzioni moderne, veloci e chiavi in mano.
                </p>
              </div>

              {/* Eye-catching CTA button */}
              <div className="mt-6 pt-1">
                <button
                  onClick={() => {
                    playSubtleClick();
                    onOpenAboutModal();
                  }}
                  className="group relative inline-flex items-center gap-3 px-5 py-3 bg-[#180507] hover:bg-red-600 border border-red-600/80 hover:border-red-500 text-white font-heading font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-red-950/60 active:scale-95"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 group-hover:bg-white animate-pulse" />
                    <span>SCOPRI LA MIA STORIA</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-red-500 group-hover:text-white group-hover:translate-x-1.5 transition-all" />
                </button>
              </div>
            </div>

            {/* RIGHT: Services list */}
            <div id="services" className="lg:col-span-5 flex flex-col justify-center px-5 sm:px-7 py-6 sm:py-8 scroll-mt-20 sm:scroll-mt-24">
              <div className="flex items-center gap-2.5 mb-4 sm:mb-5">
                <span className="w-[3px] h-5 bg-red-600" />
                <h2 className="font-heading font-bold text-base sm:text-lg tracking-widest text-white uppercase">
                  SERVIZI
                </h2>
              </div>

              <div className="space-y-1">
                {PORTFOLIO_DATA.services.map((service, idx) => (
                  <div
                    key={service.id}
                    onClick={() => playTechBlip()}
                    className={`group flex items-start gap-4 py-3 sm:py-3.5 cursor-default transition-all duration-200 hover:bg-white/4 -mx-2 px-3 rounded-sm ${idx !== 0 ? 'border-t border-white/5' : ''}`}
                  >
                    {/* Icon badge */}
                    <div className="w-10 h-10 shrink-0 bg-[#20070a] border border-red-700/60 group-hover:border-red-500 group-hover:bg-[#2c090d] flex items-center justify-center transition-all rounded-sm shadow-sm shadow-red-950/40 mt-0.5">
                      {getServiceIcon(service.icon)}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-bold text-xs sm:text-[13px] tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400 font-body leading-relaxed line-clamp-2">
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
