import { useLanguage } from '../context/LanguageContext';
import React from 'react';
import { getPortfolioData, Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  return (
    <section
      id="projects"
      data-wow="projects"
      className="relative py-8 sm:py-12 bg-[#030303] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="relative flex items-center justify-between mb-6 pb-2">
          <div className="flex items-center gap-2.5">
            <span className="wow-accent-bar w-[3px] h-4 bg-red-700" />
            <h2 className="font-heading font-bold text-base sm:text-lg tracking-widest text-white uppercase">
              <span className="wow-title-text">{t('nav.projects')}</span>
            </h2>
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest ml-2 hidden sm:inline">
              (6 {language === 'it' ? 'Progetti Live su Vercel' : 'Proyectos Live en Vercel'})
            </span>
          </div>
          {/* Animated horizontal divider line */}
          <div
            aria-hidden="true"
            className="wow-divider-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-red-600/60 via-white/10 to-transparent"
          />
        </div>

        {/* 6 Real Vercel Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ '--stagger': idx } as React.CSSProperties}
              onClick={() => onSelectProject?.(project)}
              className="wow-project-card group relative flex flex-col bg-[#0a0a0d] border border-white/5 hover:border-red-600/60 rounded-none overflow-hidden cursor-pointer transition-all duration-300 shadow-lg hover:shadow-[0_10px_30px_rgba(220,38,38,0.15)]"
            >
              {/* Thumbnail with holographic sheen reflection */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
                <div aria-hidden="true" className="wow-project-sheen" />
                <ProjectCardPreview
                  type={project.previewType}
                  title={project.title}
                  image={project.image}
                />
              </div>

              {/* Meta Content */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between relative bg-[#09090c]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-heading font-black text-sm sm:text-base tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                    {project.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-zinc-400 group-hover:text-zinc-300 font-body leading-relaxed line-clamp-2 transition-colors">
                    {project.subtitle}
                  </p>

                  {/* Tech stack tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 text-[10px] font-mono text-zinc-400 bg-white/[0.04] border border-white/5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions: Live link + Details */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/15 hover:bg-red-600 border border-red-500/40 hover:border-red-500 text-red-400 hover:text-white rounded text-[11px] font-mono font-medium tracking-wider transition-all duration-200 cursor-pointer shadow-sm group/btn"
                    title={project.liveUrl}
                  >
                    <span>{language === 'it' ? 'Vedi Live' : 'Ver Live'}</span>
                    <ExternalLink className="w-3 h-3 text-red-400 group-hover/btn:text-white transition-colors" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onSelectProject?.(project)}
                    className="text-zinc-400 hover:text-white text-[11px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>{language === 'it' ? 'Scheda Progetto' : 'Detalles'}</span>
                    <span className="text-red-500 group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Glowing bottom laser line on hover */}
              <div className="h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-red-700 via-red-500 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.9)] transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
