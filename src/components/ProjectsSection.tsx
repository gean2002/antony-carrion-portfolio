import { useLanguage } from '../context/LanguageContext';
import React from 'react';
import { getPortfolioData, Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  const { language, t } = useLanguage();
  const PORTFOLIO_DATA = getPortfolioData(language);

  return (
    <section
      id="projects"
      data-wow="projects"
      className="relative py-6 sm:py-8 bg-[#030303] border-t border-white/5"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="relative flex items-center justify-between mb-4 pb-2">
          <div className="flex items-center gap-2.5">
            <span className="wow-accent-bar w-[3px] h-4 bg-red-700" />
            <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
              <span className="wow-title-text">{t('nav.projects')}</span>
            </h2>
          </div>
          {/* Animated horizontal divider line */}
          <div
            aria-hidden="true"
            className="wow-divider-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-red-600/60 via-white/10 to-transparent"
          />
        </div>

        {/* 4 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.projects.map((project, idx) => (
            <div
              key={project.id}
              style={{ '--stagger': idx } as React.CSSProperties}
              className="wow-project-card group relative flex flex-col bg-[#0a0a0d] border border-white/5 hover:border-red-600/60 rounded-none overflow-hidden"
            >
              {/* Thumbnail with holographic sheen reflection */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
                <div aria-hidden="true" className="wow-project-sheen" />
                <ProjectCardPreview type={project.previewType} title={project.title} />
              </div>

              {/* Meta */}
              <div className="p-3.5 flex flex-col flex-1 justify-between relative">
                <div>
                  <h3 className="font-heading font-bold text-xs tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-zinc-400 group-hover:text-zinc-300 font-body leading-relaxed line-clamp-2 transition-colors">
                    {project.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-body">
                  <span className="group-hover:text-zinc-300 transition-colors">{project.year}</span>
                  <span className="text-zinc-400 group-hover:text-red-400 transition-colors">{project.duration}</span>
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
