import React from 'react';
import { Project } from '../data/portfolioData';

interface ProjectCardPreviewProps {
  type: Project['previewType'];
  title: string;
  isModal?: boolean;
}

export const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = ({ type, isModal = false }) => {
  // 1. Landing Page Showcase (Luméra Skincare - 4K High Definition)
  if (type === 'villa') {
    return (
      <div className="relative w-full h-full bg-[#070709] overflow-hidden flex items-start justify-center">
        <img
          src="/project-landing.png"
          alt="Landing Page Luméra Skincare 4K"
          className="w-full h-auto block select-none pointer-events-none project-scroll-preview contrast-[1.03] brightness-[1.01]"
          loading="eager"
        />

        {/* Badge */}
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/10 rounded text-xs text-zinc-300 font-mono shadow-md pointer-events-none z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          <span>LANDING PAGE · 4K ULTRA HD</span>
        </div>
      </div>
    );
  }

  // 2. E-Commerce Store (URBANX Shopify)
  if (type === 'shop') {
    return (
      <div className="relative w-full h-full bg-[#070709] overflow-hidden flex items-start justify-center">
        <img
          src="/project-urbanx.png"
          alt="URBANX Shopify Store"
          className="w-full h-auto block select-none pointer-events-none project-scroll-preview"
          loading="eager"
        />

        {/* Badge */}
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/10 rounded text-xs text-zinc-300 font-mono shadow-md pointer-events-none z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>E-COMMERCE · SHOPIFY</span>
        </div>
      </div>
    );
  }

  // 3. Corporate Law / Legal Firm (Atorn Law)
  if (type === 'corp') {
    return (
      <div className="relative w-full h-full bg-[#070709] overflow-hidden flex items-start justify-center">
        <img
          src="/project-corp.png"
          alt="Sito Aziendale Studio Legale"
          className="w-full h-auto block select-none pointer-events-none project-scroll-preview"
          loading="eager"
        />

        {/* Badge */}
        <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/10 rounded text-xs text-zinc-300 font-mono shadow-md pointer-events-none z-10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          <span>CORPORATE · MULTIPAGE</span>
        </div>
      </div>
    );
  }

  // 4. Studio di Design / Luxury Brand (JM Barber Club Torino - 4K)
  return (
    <div className="relative w-full h-full bg-[#070709] overflow-hidden flex items-start justify-center">
      <img
        src="/project-barber-final.png"
        alt="JM Barber Club Torino 4K"
        className="w-full h-auto block select-none pointer-events-none project-scroll-deep"
        loading="eager"
      />

      {/* Badge */}
      <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-black/85 backdrop-blur-sm border border-white/10 rounded text-xs text-zinc-300 font-mono shadow-md pointer-events-none z-10 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
        <span>STUDIO DI DESIGN · 4K</span>
      </div>
    </div>
  );
};
