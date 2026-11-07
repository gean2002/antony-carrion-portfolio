import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getPortfolioData, Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ExternalLink, ArrowRight, Sparkles, Globe, Layers } from 'lucide-react';
import { playSubtleClick } from '../utils/audio';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
  onViewAllProjects?: () => void;
  onOpenContact?: () => void;
}

type FilterType = 'all' | 'hospitality' | 'food' | 'services';

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenContact,
}) => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filterTabs: { id: FilterType; labelKey: string }[] = [
    { id: 'all', labelKey: 'portfolio.filter.all' },
    { id: 'hospitality', labelKey: 'portfolio.filter.hospitality' },
    { id: 'food', labelKey: 'portfolio.filter.food' },
    { id: 'services', labelKey: 'portfolio.filter.services' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.filterGroup === activeFilter);

  return (
    <section
      id="projects"
      data-wow="projects"
      className="relative py-10 sm:py-16 bg-[#030303] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-3">
          <div>
            <div className="flex items-center gap-2.5 mb-1.5">
              <span className="wow-accent-bar w-[3px] h-4 bg-red-700" />
              <h2 className="font-heading font-black text-lg sm:text-2xl tracking-widest text-white uppercase">
                <span className="wow-title-text">{t('nav.projects')}</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 font-body max-w-xl">
              {language === 'it'
                ? 'Esplora i progetti realizzati e distribuiti in produzione su Vercel. Clicca su "Vedi Live" per testarli direttamente.'
                : 'Explora los proyectos reales desplegados en producción en Vercel. Haz clic en "Ver Live" para probarlos en directo.'}
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 self-start md:self-auto bg-white/[0.03] p-1 rounded-sm border border-white/10">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    playSubtleClick();
                    setActiveFilter(tab.id);
                  }}
                  className={`px-3 py-1.5 text-[11px] font-heading font-bold uppercase tracking-wider rounded-sm transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-red-600 text-white shadow-[0_0_12px_rgba(220,38,38,0.5)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(tab.labelKey)}
                </button>
              );
            })}
          </div>

          {/* Animated horizontal divider line */}
          <div
            aria-hidden="true"
            className="wow-divider-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-red-600/60 via-white/10 to-transparent"
          />
        </div>

        {/* Real Vercel Projects Grid */}
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
        <div className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-red-950/40 via-[#0d090c] to-[#0a0a0d] border border-red-500/30 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-1.5 text-center md:text-left relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-red-400 uppercase tracking-widest font-bold">
              <Sparkles className="w-3 h-3" />
              <span>{language === 'it' ? 'PRONTO A FARE IL SALTO DI QUALITÀ?' : '¿LISTO PARA DAR EL SALTO?'}</span>
            </span>
            <h3 className="font-heading font-black text-base sm:text-xl text-white uppercase tracking-wide">
              {t('portfolio.ctaTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 font-body max-w-xl">
              {t('portfolio.ctaSub')}
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            {onOpenContact ? (
              <button
                type="button"
                onClick={() => {
                  playSubtleClick();
                  onOpenContact();
                }}
                className="btn-shimmer w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(220,38,38,0.45)] cursor-pointer active:scale-95"
              >
                <span>{t('portfolio.ctaBtn')}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            ) : (
              <a
                href="#contacts"
                onClick={() => playSubtleClick()}
                className="btn-shimmer w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-[0_0_25px_rgba(220,38,38,0.45)] cursor-pointer active:scale-95"
              >
                <span>{t('portfolio.ctaBtn')}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
