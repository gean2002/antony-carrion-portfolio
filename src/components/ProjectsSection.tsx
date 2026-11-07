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

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onViewAllProjects,
  onOpenContact,
}) => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  // Top 3 featured projects for Home Page:
  // 1. Corte Pietranova (Salento Luxury Residence)
  // 2. Q Sushi Bar (Torino Food & Poke)
  // 3. JM Barber Club (Torino Dark Luxury Barbershop)
  const homeProjects = [
    PORTFOLIO_DATA.projects.find((p) => p.id === 'p1') || PORTFOLIO_DATA.projects[0],
    PORTFOLIO_DATA.projects.find((p) => p.id === 'p2') || PORTFOLIO_DATA.projects[1],
    PORTFOLIO_DATA.projects.find((p) => p.id === 'p5') || PORTFOLIO_DATA.projects[2],
  ].filter(Boolean);

  return (
    <section
      id="projects"
      data-wow="projects"
      className="relative pt-10 sm:pt-14 pb-6 sm:pb-8 bg-[#030303] border-t border-white/5"
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
                ? 'Una selezione dei migliori progetti realizzati e pubblicati live in produzione su Vercel. Clicca per esplorarli direttamente.'
                : 'Una selección de los mejores proyectos realizados y publicados en vivo en Vercel. Haz clic para explorarlos directamente.'}
            </p>
          </div>

          {/* Quick "Vedi Tutti (7)" Header Button */}
          <button
            onClick={() => {
              playSubtleClick();
              onViewAllProjects?.();
            }}
            className="btn-shimmer inline-flex items-center gap-2 px-4 py-2 rounded bg-white/[0.04] hover:bg-red-600 border border-white/10 hover:border-red-500 text-xs font-heading font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer shadow-md group active:scale-95 self-start md:self-auto"
          >
            <Layers className="w-3.5 h-3.5 text-red-500 group-hover:text-white transition-colors" />
            <span>{language === 'it' ? 'Tutti i Progetti (7)' : 'Todos los Proyectos (7)'}</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Animated horizontal divider line */}
          <div
            aria-hidden="true"
            className="wow-divider-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-red-600/60 via-white/10 to-transparent"
          />
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homeProjects.map((project, idx) => {
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

        {/* Explore All Projects Banner (Transition to All Projects Page) */}
        <div className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-[#0c0d12] via-[#090a0d] to-[#12080a] border border-white/10 hover:border-red-500/40 rounded-sm flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl transition-all">
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-600/15 border border-red-500/30 text-red-400 text-[10px] font-mono font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>{language === 'it' ? 'ARCHIVIO COMPLETO · 7 SITI IN PRODUZIONE' : 'ARCHIVO COMPLETO · 7 SITIOS EN PRODUCCIÓN'}</span>
            </div>
            <h3 className="font-heading font-black text-base sm:text-lg text-white uppercase tracking-wide">
              {language === 'it' 
                ? 'Vuoi vedere tutti i 7 progetti realizzati?' 
                : '¿Quieres ver los 7 proyectos realizados?'}
            </h3>
            <p className="text-xs text-zinc-400 font-body max-w-xl leading-relaxed">
              {language === 'it'
                ? 'Esplora anche le ville di Olbia Luxury Stays, lo street food di CupCup\'s Chicken e gli studi clinici della Dott.ssa Elena Moretti e Dott.ssa Chiara Rinaldi.'
                : 'Explora también las villas de Olbia Luxury Stays, el street food de CupCup\'s Chicken y los gabinetes médicos de la Dra. Moretti y Dra. Rinaldi.'}
            </p>
          </div>

          <button
            onClick={() => {
              playSubtleClick();
              onViewAllProjects?.();
            }}
            className="btn-shimmer px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded text-xs font-heading font-bold uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] flex items-center gap-2 cursor-pointer shrink-0 active:scale-95"
          >
            <Layers className="w-4 h-4" />
            <span>{language === 'it' ? 'Apri Tutti i Progetti (7)' : 'Abrir Todos los Proyectos (7)'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
