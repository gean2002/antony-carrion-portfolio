import React from 'react';

export const LoneWandererArtwork: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[220px] rounded-sm overflow-hidden bg-[#07080a] flex items-center justify-center">
      <svg viewBox="0 0 320 280" className="w-full h-full object-cover">
        <defs>
          {/* Deep Space Night Sky with Red Cosmic Nebulae */}
          <radialGradient id="nebulaGlow" cx="50%" cy="65%" r="60%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.7" />
            <stop offset="35%" stopColor="#991b1b" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#200a0d" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#040507" stopOpacity="1" />
          </radialGradient>

          {/* Horizon glow */}
          <linearGradient id="horizonGlow" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#ef4444" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
          </linearGradient>

          {/* Rocky cliff silhouette */}
          <linearGradient id="rockGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#14151b" />
            <stop offset="100%" stopColor="#060608" />
          </linearGradient>
        </defs>

        {/* Space Backdrop */}
        <rect width="320" height="280" fill="#040507" />
        <rect width="320" height="280" fill="url(#nebulaGlow)" />

        {/* Starfield */}
        <circle cx="25" cy="35" r="0.9" fill="#ffffff" opacity="0.8" />
        <circle cx="85" cy="18" r="1.3" fill="#ffffff" opacity="0.9" />
        <circle cx="140" cy="45" r="0.8" fill="#ffffff" opacity="0.6" />
        <circle cx="210" cy="20" r="1.1" fill="#ffffff" opacity="0.85" />
        <circle cx="290" cy="40" r="0.8" fill="#ffffff" opacity="0.7" />
        <circle cx="50" cy="85" r="1.2" fill="#ffffff" opacity="0.75" />
        <circle cx="110" cy="110" r="0.7" fill="#ffffff" opacity="0.5" />
        <circle cx="180" cy="80" r="1.4" fill="#ffffff" opacity="0.95" />
        <circle cx="260" cy="95" r="0.9" fill="#ffffff" opacity="0.7" />
        <circle cx="305" cy="70" r="1.1" fill="#ffffff" opacity="0.8" />
        <circle cx="160" cy="15" r="1.5" fill="#fecaca" opacity="0.9" />

        {/* Cosmic red ambient light on horizon */}
        <rect x="0" y="150" width="320" height="70" fill="url(#horizonGlow)" opacity="0.6" />

        {/* Rocky jagged horizon ridge in the middle ground */}
        <path
          d="M 0 215 L 45 200 L 95 210 L 150 195 L 210 205 L 270 190 L 320 200 L 320 280 L 0 280 Z"
          fill="#0c0d12"
        />

        {/* Foreground Rocky Promontory / Cliff */}
        <path
          d="M 60 280 L 110 215 L 160 205 L 210 215 L 260 280 Z"
          fill="url(#rockGrad)"
        />

        {/* Lone Traveler with Backpack standing in silhouette */}
        <g transform="translate(150, 155)">
          {/* Head & Hood */}
          <circle cx="10" cy="10" r="5" fill="#030406" />

          {/* Traveler Body & Jacket */}
          <path d="M 5 15 L 15 15 L 17 38 L 3 38 Z" fill="#030406" />

          {/* Backpack on back */}
          <rect x="-1" y="16" width="7" height="15" rx="3" fill="#08090d" stroke="#1c1d25" strokeWidth="0.8" />

          {/* Left & Right Legs */}
          <line x1="6" y1="38" x2="4" y2="52" stroke="#030406" strokeWidth="3" strokeLinecap="round" />
          <line x1="14" y1="38" x2="16" y2="52" stroke="#030406" strokeWidth="3" strokeLinecap="round" />

          {/* Rim light outline on the traveler from glowing red horizon */}
          <path
            d="M 0 20 L 5 15 C 7 11 13 11 15 15 L 19 22"
            stroke="#ef4444"
            strokeWidth="1.2"
            fill="none"
            opacity="0.85"
          />
        </g>

        {/* Atmospheric ground dust glow */}
        <ellipse cx="160" cy="225" rx="45" ry="6" fill="#ef4444" opacity="0.2" filter="blur(4px)" />
      </svg>
    </div>
  );
};
