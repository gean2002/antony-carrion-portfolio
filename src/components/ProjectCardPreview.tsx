import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectCardPreviewProps {
  type: Project['previewType'];
  title: string;
  isModal?: boolean;
  image?: string;
}

export const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = ({ type, title, isModal = false, image }) => {
  // Config per-type
  let imgSrc = image || '/project-pietranova.jpg';
  let badgeLabel = 'LIVE DEMO · VERCEL';
  let dotColor = 'bg-red-500';

  if (type === 'pietranova') {
    imgSrc = '/project-pietranova.jpg';
    badgeLabel = 'RESIDENCE & SUITES · NEXT.JS';
    dotColor = 'bg-amber-400';
  } else if (type === 'sushi') {
    imgSrc = '/project-sushi.jpg';
    badgeLabel = 'RESTAURANT · POKE & SUSHI';
    dotColor = 'bg-emerald-400';
  } else if (type === 'chickencup') {
    imgSrc = '/project-chickencup.png';
    badgeLabel = 'STREET FOOD · E-COMMERCE';
    dotColor = 'bg-orange-400';
  } else if (type === 'olbia') {
    imgSrc = '/project-olbia.jpg';
    badgeLabel = 'LUXURY STAYS · NEXT.JS 14';
    dotColor = 'bg-cyan-400';
  } else if (type === 'barber' || type === 'studio') {
    imgSrc = '/project-barber-final.png';
    badgeLabel = 'BARBERSHOP · DARK LUXURY';
    dotColor = 'bg-red-500';
  } else if (type === 'moretti') {
    imgSrc = '/project-moretti-hero.jpg';
    badgeLabel = 'PSICOLOGIA CLINICA · TORINO';
    dotColor = 'bg-emerald-400';
  } else if (type === 'corp') {
    imgSrc = '/project-moretti-hero.jpg';
    badgeLabel = 'STUDIO MEDICO · CLEAN UI';
    dotColor = 'bg-blue-400';
  } else if (type === 'rinaldi') {
    imgSrc = '/project-rinaldi.jpg';
    badgeLabel = 'PSICOTERAPIA · TORINO';
    dotColor = 'bg-teal-400';
  } else if (type === 'villa') {
    imgSrc = '/project-landing.png';
    badgeLabel = 'LANDING PAGE · 4K ULTRA HD';
    dotColor = 'bg-amber-400';
  } else if (type === 'shop') {
    imgSrc = '/project-urbanx.png';
    badgeLabel = 'E-COMMERCE · SHOPIFY';
    dotColor = 'bg-emerald-400';
  }

  return (
    <div className="relative w-full h-full bg-[#070709] overflow-hidden flex items-start justify-center group">
      <img
        src={imgSrc}
        alt={title}
        className={`w-full h-full object-cover block select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105 ${
          isModal ? 'max-h-[460px] object-cover' : 'aspect-[16/10]'
        }`}
        loading="lazy"
        decoding="async"
      />

      {/* Gradient Vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

      {/* Badge */}
      <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/10 rounded text-[10px] text-zinc-300 font-mono shadow-md pointer-events-none z-10 flex items-center gap-1.5">
        <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`} />
        <span>{badgeLabel}</span>
      </div>
    </div>
  );
};
