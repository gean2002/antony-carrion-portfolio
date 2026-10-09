import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { X, ArrowRight, ExternalLink } from 'lucide-react';

interface AllProjectsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const AllProjectsModal: React.FC<AllProjectsModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'Tutti i progetti' },
    { id: 'LANDING PAGE', label: 'Landing Page' },
    { id: 'NEGOZIO ONLINE', label: 'Negozi online' },
    { id: 'SITO AZIENDALE', label: 'Aziendali' },
    { id: 'STUDIO DI DESIGN', label: 'Studio di Design' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0a0a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                TUTTI I PROGETTI E CASI
              </h2>
              <span className="text-xs font-mono text-zinc-300">
                Catalogo dei lavori completati nel 2023-2024.
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              playSubtleClick();
              onClose();
            }}
            className="p-2 text-zinc-300 hover:text-white hover:bg-white/5 rounded transition-colors focus:outline-none cursor-pointer"
            aria-label="Chiudi"
          >
            <X className="w-5 h-5 text-zinc-300 hover:text-red-400" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="p-6 pb-2 border-b border-white/5 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                playTechBlip();
                setActiveCategory(cat.id);
              }}
              className={`px-3.5 py-1.5 rounded text-xs font-heading font-semibold tracking-wider uppercase transition-colors cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-red-600 text-white shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                  : 'bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                playTechBlip();
                onClose();
                onSelectProject(project);
              }}
              className="group relative flex flex-col bg-[#08080a] border border-white/5 hover:border-red-600/50 rounded-sm overflow-hidden cursor-pointer transition-all hover:-translate-y-1"
            >
              <div className="relative aspect-[16/10] w-full border-b border-white/5">
                <ProjectCardPreview type={project.previewType} title={project.title} />
              </div>

              <div className="p-4 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-red-500 uppercase">
                      {project.category}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-red-400 transition-colors mt-1">
                    {project.title}
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-300 font-body line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>{project.client}</span>
                  <span className="text-zinc-300">{project.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
