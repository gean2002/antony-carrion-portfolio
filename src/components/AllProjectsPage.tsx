import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData, Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ExternalLink, ArrowRight, ArrowLeft, Globe, Layers, Sparkles } from 'lucide-react';
import { playSubtleClick } from '../utils/audio';

interface AllProjectsPageProps {
  onSelectProject?: (project: Project) => void;
  onOpenContact?: () => void;
  onBackToHome: () => void;
}

type FilterType = 'all' | 'hospitality' | 'food' | 'services';

export const AllProjectsPage: React.FC<AllProjectsPageProps> = ({
  onSelectProject,
  onOpenContact,
  onBackToHome,
}) => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  const filterTabs: { id: FilterType; labelKey: string; count: number }[] = [
    { id: 'all', labelKey: 'portfolio.filter.all', count: PORTFOLIO_DATA.projects.length },
    {
      id: 'hospitality',
      labelKey: 'portfolio.filter.hospitality',
      count: PORTFOLIO_DATA.projects.filter((p) => p.filterGroup === 'hospitality').length,
    },
    {
      id: 'food',
      labelKey: 'portfolio.filter.food',
      count: PORTFOLIO_DATA.projects.filter((p) => p.filterGroup === 'food').length,
    },
    {
      id: 'services',
      labelKey: 'portfolio.filter.services',
      count: PORTFOLIO_DATA.projects.filter((p) => p.filterGroup === 'services').length,
    },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.filterGroup === activeFilter);

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 pt-20 sm:pt-24 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Top Breadcrumb & Back Button */}
        <div className="flex items-center justify-between py-4 mb-6 border-b border-white/5">
          <button
            onClick={() => {
              playSubtleClick();
              onBackToHome();
            }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-red-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all cursor-pointer group"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-red-500 group-hover:-translate-x-1 transition-transform" />
            <span>{language === 'it' ? 'Torna alla Home' : 'Volver al Inicio'}</span>
          </button>

          <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-500">
            <span>HOME</span>
            <span>/</span>
            <span className="text-red-400 font-bold uppercase">
              {language === 'it' ? 'Tutti i Progetti' : 'Todos los Proyectos'}
            </span>
          </div>
        </div>

        {/* Page Header */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              <span className="text-xs font-mono text-red-400 font-bold tracking-widest uppercase">
                {language === 'it' ? 'ARCHIVIO COMPLETO · 7 PROGETTI LIVE' : 'ARCHIVO COMPLETO · 7 PROYECTOS LIVE'}
              </span>
            </div>
            
            <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl tracking-wider text-white uppercase">
              {language === 'it' ? 'PORTFOLIO PROGETTI' : 'PORTAFOLIO DE PROYECTOS'}
            </h1>
            
            <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-body max-w-2xl leading-relaxed">
              {language === 'it'
                ? 'Tutti i siti web, le piattaforme e-commerce e i portali realizzati su misura per brand, attività locali e professionisti. Clicca su ciascun progetto per esplorare direttamente la versione live su Vercel.'
                : 'Todos los sitios web, plataformas de e-commerce y portales desarrollados a medida. Haz clic en cada proyecto para navegar directamente en la versión en vivo en Vercel.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-start md:self-auto bg-white/[0.03] p-1.5 rounded-sm border border-white/10">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSubtleClick();
                    setActiveFilter(tab.id);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{t(tab.labelKey)}</span>
                  <span
                    className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive ? 'bg-black/40 text-white' : 'bg-white/10 text-zinc-400'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 7 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => {
            const domainName = project.liveUrl.replace('https://', '');

            return (
              <div
                key={project.id}
                style={{ '--stagger': idx } as React.CSSProperties}
                className="wow-project-card group relative flex flex-col bg-[#090a0d] border border-white/10 hover:border-red-600/70 rounded-sm overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_12px_35px_rgba(220,38,38,0.22)]"
              >
                {/* Browser-style Top Navigation Bar */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-[#0c0d12] border-b border-white/10 select-none">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 group-hover:bg-[#ff5f56] transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 group-hover:bg-[#ffbd2e] transition-colors" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 group-hover:bg-[#27c93f] transition-colors" />
                  </div>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-black/60 border border-white/10 hover:border-red-500/40 text-[10px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    title={`Apri ${project.liveUrl}`}
                  >
                    <Globe className="w-2.5 h-2.5 text-zinc-500" />
                    <span className="truncate max-w-[210px] sm:max-w-[270px]">{domainName}</span>
                  </a>

                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 tracking-wider">
                      LIVE
                    </span>
                  </div>
                </div>

                {/* Thumbnail Visual - Direct Live Link */}
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5 block cursor-pointer bg-black group/thumb"
                  title={language === 'it' ? `Apri il sito live ${project.title}` : `Abrir el sitio live ${project.title}`}
                >
                  <div aria-hidden="true" className="wow-project-sheen" />
                  <ProjectCardPreview
                    type={project.previewType}
                    title={project.title}
                    image={project.image}
                  />

                  {/* Clean Hover Overlay */}
                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-sm bg-red-600/90 border border-red-400 text-xs font-heading font-bold text-white uppercase tracking-wider backdrop-blur-md flex items-center gap-2 shadow-xl">
                      <span>{language === 'it' ? 'Apri Sito Live' : 'Abrir Sitio Live'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Content Details */}
                <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between relative bg-[#090a0d]">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-semibold truncate">
                        {project.category}
                      </span>
                      {project.year === '2026' ? (
                        <span className="shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-red-600/20 border border-red-500/50 text-red-300 text-[10px] font-mono font-bold tracking-wider shadow-[0_0_10px_rgba(239,68,68,0.25)]">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
                          </span>
                          2026
                        </span>
                      ) : (
                        <span className="shrink-0 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 text-zinc-400 text-[10px] font-mono font-medium tracking-wider">
                          2025
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-black text-sm sm:text-base tracking-wider text-white hover:text-red-400 transition-colors uppercase">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 hover:underline"
                        title={language === 'it' ? `Visita ${project.title}` : `Visitar ${project.title}`}
                      >
                        <span>{project.title}</span>
                        <ExternalLink className="w-3 h-3 text-red-500 opacity-70 group-hover:opacity-100 transition-opacity shrink-0" />
                      </a>
                    </h3>

                    <p className="mt-1.5 text-xs text-zinc-400 group-hover:text-zinc-300 font-body leading-relaxed line-clamp-2 transition-colors">
                      {project.subtitle}
                    </p>

                    {/* Tech stack badges */}
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/10 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: Direct Live Button + Details */}
                  <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shimmer flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-red-600 hover:bg-red-500 text-white rounded text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.35)] active:scale-95 group/btn"
                    >
                      <span>{language === 'it' ? 'Vedi Live ↗' : 'Ver Live ↗'}</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        playSubtleClick();
                        onSelectProject?.(project);
                      }}
                      className="px-3.5 py-2.5 text-zinc-400 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20 rounded text-xs font-heading font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 shrink-0"
                    >
                      <span>{language === 'it' ? 'Scheda' : 'Ficha'}</span>
                      <ArrowRight className="w-3 h-3 text-red-500" />
                    </button>
                  </div>
                </div>

                {/* Laser Glowing Border Bottom */}
                <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.9)] transition-all duration-500" />
              </div>
            );
          })}
        </div>

        {/* Bottom Conversion Banner */}
        <div className="mt-14 p-6 sm:p-10 bg-gradient-to-r from-red-950/40 via-[#0d090c] to-[#0a0a0d] border border-red-500/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{language === 'it' ? 'VUOI UN SITO CON QUESTI STANDARD?' : '¿QUIERES UNA WEB CON ESTOS ESTÁNDARES?'}</span>
            </span>
            <h3 className="font-heading font-black text-lg sm:text-2xl text-white uppercase tracking-wide">
              {language === 'it'
                ? 'Richiedi un preventivo e analisi gratuita per la tua attività'
                : 'Solicita un presupuesto y análisis gratuito para tu negocio'}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-body">
              {language === 'it'
                ? 'Senza impegno. Ti consegno tempi certi, specifiche chiare e una proposta studiata appositamente per il tuo brand.'
                : 'Sin compromiso. Te entrego plazos definidos, especificaciones claras y una propuesta adaptada a tu marca.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 relative z-10 shrink-0">
            <button
              onClick={() => {
                playSubtleClick();
                onOpenContact?.();
              }}
              className="btn-shimmer px-6 py-3.5 bg-red-600 hover:bg-red-500 text-white rounded text-xs sm:text-sm font-heading font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.45)] cursor-pointer active:scale-95 flex items-center gap-2"
            >
              <span>{language === 'it' ? 'Richiedi Preventivo Gratuito' : 'Solicitar Presupuesto Gratis'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                playSubtleClick();
                onBackToHome();
              }}
              className="px-5 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white rounded text-xs sm:text-sm font-heading font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              <span>{language === 'it' ? 'Torna alla Home' : 'Volver al Inicio'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
