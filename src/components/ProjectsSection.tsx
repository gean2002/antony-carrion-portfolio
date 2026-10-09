import React from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
interface ProjectsSectionProps {
  onSelectProject?: (project: Project) => void;
  onViewAllProjects?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = () => {
  return (
    <section id="projects" className="relative py-6 sm:py-8 bg-[#030303] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <span className="w-[3px] h-4 bg-red-700" />
            <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
              PROGETTI
            </h2>
          </div>
        </div>

        {/* 4 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PORTFOLIO_DATA.projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col bg-[#0a0a0d] border border-white/5 hover:border-red-700/50 transition-all duration-300 rounded-none overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
                <ProjectCardPreview type={project.previewType} title={project.title} />
              </div>

              {/* Meta */}
              <div className="p-3.5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xs tracking-wider text-white uppercase">
                    {project.title}
                  </h3>

                  <p className="mt-1 text-[11px] text-zinc-400 font-body leading-relaxed line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-500 font-body">
                  <span>{project.year}</span>
                  <span className="text-zinc-400">{project.duration}</span>
                </div>
              </div>

              <div className="h-[1.5px] w-0 group-hover:w-full bg-red-600 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
