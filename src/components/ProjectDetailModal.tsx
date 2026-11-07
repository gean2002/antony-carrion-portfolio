import React from 'react';
import { Project } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';
import { playSubtleClick } from '../utils/audio';
import { X, ExternalLink, CheckCircle2, TrendingUp, Layers, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { ProjectCardPreview } from './ProjectCardPreview';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestSimilar: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onRequestSimilar,
}) => {
  const { language, t } = useLanguage();

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-[#090a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-5 bg-[#090a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.9)] shrink-0" />
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-[10px] font-mono text-red-500 uppercase tracking-widest block truncate font-semibold">
                  {project.category}
                </span>
                {project.year === '2026' ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-600/20 border border-red-500/50 text-red-300 text-[9px] font-mono font-bold tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                    2026
                  </span>
                ) : (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[9px] font-mono">
                    2025
                  </span>
                )}
              </div>
              <h2 className="font-heading font-black text-base sm:text-lg text-white tracking-wide uppercase truncate">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-500 text-white rounded text-xs font-heading font-bold uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(220,38,38,0.4)] cursor-pointer"
              >
                <span>{language === 'it' ? 'Vedi Live' : 'Ver Live'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

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
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Visual Showcase */}
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/10 rounded-sm bg-black group">
            <ProjectCardPreview
              type={project.previewType}
              title={project.title}
              isModal={true}
              image={project.image}
            />
            <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/15 rounded text-[10px] font-mono text-zinc-300 pointer-events-none">
              Preview 4K Ultra HD
            </div>
          </div>

          {/* Key Metric / Highlight Banner */}
          <div className="p-4 bg-gradient-to-r from-red-950/60 via-[#180507] to-zinc-950 border border-red-600/50 rounded-sm flex items-center gap-3.5 shadow-md shadow-red-950/40">
            <div className="w-10 h-10 rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center text-red-400 shrink-0 shadow-[0_0_12px_rgba(239,68,68,0.4)]">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest">
                {language === 'it' ? 'RISULTATO CHIAVE OTTENUTO' : 'KEY RESULT ACHIEVED'}
              </div>
              <div className="text-xs sm:text-sm font-heading font-bold text-white uppercase mt-0.5">
                {project.results}
              </div>
            </div>
          </div>

          {/* Description & Problem-Solution */}
          <div className="space-y-3 font-body text-xs sm:text-sm text-zinc-300 leading-relaxed">
            <h3 className="font-heading font-bold text-sm sm:text-base text-white uppercase tracking-wider">
              {project.subtitle}
            </h3>
            <p className="text-zinc-400">
              {project.description}
            </p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/5">
            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase">
                <Layers className="w-3.5 h-3.5 text-red-500" />
                {language === 'it' ? 'Cliente' : 'Client'}
              </div>
              <div className="text-xs font-heading font-semibold text-white uppercase mt-1">
                {project.client}
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase">
                <Clock className="w-3.5 h-3.5 text-red-500" />
                {language === 'it' ? 'Tempi' : 'Duration'}
              </div>
              <div className="text-xs font-heading font-semibold text-white uppercase mt-1">
                {project.duration}
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase">
                <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
                {language === 'it' ? 'Garanzia' : 'Warranty'}
              </div>
              <div className="text-xs font-heading font-semibold text-white uppercase mt-1">
                30 gg supporto
              </div>
            </div>

            <div className="p-3 bg-white/[0.02] border border-white/5 rounded-sm">
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-zinc-500 uppercase">
                <CheckCircle2 className="w-3.5 h-3.5 text-red-500" />
                PageSpeed
              </div>
              <div className="text-xs font-heading font-semibold text-emerald-400 uppercase mt-1">
                98/100 Mobile
              </div>
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="pt-2">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
              Stack & Metodologia
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-[11px] font-mono bg-white/5 border border-white/10 text-zinc-300 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTA Box */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <span className="text-xs font-heading font-bold text-white uppercase tracking-wider block">
                {language === 'it' ? 'Vuoi un progetto con gli stessi risultati?' : 'Want a similar high-performance site?'}
              </span>
              <span className="text-[11px] text-zinc-400 font-body">
                {language === 'it' ? 'Risposta e preventivo entro 24 ore senza impegno' : 'Free quote and consultation within 24 hours'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-heading font-bold text-xs tracking-widest uppercase transition-all rounded-sm cursor-pointer"
                >
                  <span>{language === 'it' ? 'APRI SITO LIVE' : 'ABRIR SITIO EN VIVO'}</span>
                  <ExternalLink className="w-4 h-4 text-red-500" />
                </a>
              )}

              <button
                onClick={() => {
                  playSubtleClick();
                  onClose();
                  onRequestSimilar(project.title);
                }}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs tracking-widest uppercase transition-all shadow-lg shadow-red-950/60 cursor-pointer active:scale-95"
              >
                <span>{language === 'it' ? 'RICHIEDI UN PROGETTO SIMILE' : 'REQUEST SIMILAR PROJECT'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
