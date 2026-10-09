import React, { useState } from 'react';
import { Project } from '../data/portfolioData';
import { ProjectCardPreview } from './ProjectCardPreview';
import { playSubtleClick } from '../utils/audio';
import { X, CheckCircle, ExternalLink, Calendar, Clock, User, Award, Smartphone, Monitor } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onDiscussProject: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0a0a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div>
              <span className="text-xs font-mono text-red-500 uppercase tracking-wider block">
                {project.category}
              </span>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                {project.title}
              </h2>
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Interactive Device View Toggle & Preview Container */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono text-zinc-300">Anteprima interattiva:</span>
              <div className="flex items-center gap-1 bg-zinc-900 p-1 rounded border border-white/5">
                <button
                  onClick={() => {
                    playSubtleClick();
                    setDeviceView('desktop');
                  }}
                  className={`px-2.5 py-1 text-xs rounded flex items-center gap-1.5 transition-colors ${
                    deviceView === 'desktop'
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Desktop</span>
                </button>
                <button
                  onClick={() => {
                    playSubtleClick();
                    setDeviceView('mobile');
                  }}
                  className={`px-2.5 py-1 text-xs rounded flex items-center gap-1.5 transition-colors ${
                    deviceView === 'mobile'
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Mobile</span>
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-center p-4 bg-zinc-950 border border-white/10 rounded-sm">
              <div
                className={`transition-all duration-300 overflow-hidden rounded border border-white/10 ${
                  deviceView === 'desktop'
                    ? 'w-full aspect-[16/9]'
                    : 'w-[280px] aspect-[9/16]'
                }`}
              >
                <ProjectCardPreview type={project.previewType} title={project.title} isModal={true} />
              </div>
            </div>
          </div>

          {/* Meta Information Cards (Client, Duration, Year, Results) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-zinc-950/60 border border-white/5 rounded">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <User className="w-3.5 h-3.5 text-red-500" />
                <span>Cliente:</span>
              </div>
              <div className="font-heading font-semibold text-sm sm:text-base text-zinc-200">
                {project.client}
              </div>
            </div>

            <div className="p-4 bg-zinc-950/60 border border-white/5 rounded">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                <span>Durata:</span>
              </div>
              <div className="font-heading font-semibold text-sm sm:text-base text-zinc-200">
                {project.duration}
              </div>
            </div>

            <div className="p-4 bg-zinc-950/60 border border-white/5 rounded">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Calendar className="w-3.5 h-3.5 text-red-500" />
                <span>Anno:</span>
              </div>
              <div className="font-heading font-semibold text-sm sm:text-base text-zinc-200">
                {project.year}
              </div>
            </div>

            <div className="p-4 bg-zinc-950/60 border border-white/5 rounded">
              <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-mono mb-1">
                <Award className="w-3.5 h-3.5 text-red-500" />
                <span>Risultato:</span>
              </div>
              <div className="font-heading font-semibold text-sm sm:text-base text-red-400">
                {project.results}
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-2">
              Sul progetto e obiettivi:
            </h4>
            <p className="text-zinc-300 font-body text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div>
            <h4 className="font-heading font-bold text-xs text-zinc-300 uppercase tracking-wider mb-3">
              Stack tecnologico utilizzato:
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-zinc-900 border border-white/10 rounded text-xs font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-300 font-body">
              Vuoi un progetto simile per il tuo settore?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onDiscussProject();
                }}
                className="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs tracking-wider uppercase rounded transition-all red-glow cursor-pointer"
              >
                DISCUTI UN SITO SIMILE
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
