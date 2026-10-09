import React from 'react';

export const LaptopCodeMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-[16/11] flex items-center justify-center">
      {/* Red ambient backlight behind laptop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-red-600/20 rounded-full blur-[80px] pointer-events-none" />

      {/* 3D Isometric / Front angled laptop */}
      <svg viewBox="0 0 460 320" className="w-full h-full drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]">
        <defs>
          <linearGradient id="laptopLid" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#242630" />
            <stop offset="50%" stopColor="#14151b" />
            <stop offset="100%" stopColor="#08090c" />
          </linearGradient>

          <linearGradient id="laptopBase" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2c38" />
            <stop offset="50%" stopColor="#181920" />
            <stop offset="100%" stopColor="#0d0e12" />
          </linearGradient>

          <linearGradient id="screenCodeGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06070a" />
            <stop offset="50%" stopColor="#0d1017" />
            <stop offset="100%" stopColor="#1a0b0e" />
          </linearGradient>

          <linearGradient id="keyboardDeck" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1c1d25" />
            <stop offset="100%" stopColor="#0c0d11" />
          </linearGradient>
        </defs>

        {/* --- LAPTOP SCREEN (LID) --- */}
        {/* Outer Lid Frame */}
        <polygon points="100,30 360,30 380,200 80,200" fill="url(#laptopLid)" stroke="#3a3d4d" strokeWidth="1.5" />
        
        {/* Bezel inner */}
        <polygon points="108,36 352,36 372,194 88,194" fill="#07080a" />

        {/* Screen Glass Area with glowing code and wallpaper */}
        <polygon points="114,42 346,42 366,190 94,190" fill="url(#screenCodeGlow)" />

        {/* Glowing wallpaper horizon on screen */}
        <path d="M 100 150 Q 230 110 360 150 L 366 190 L 94 190 Z" fill="#ef4444" opacity="0.35" filter="blur(8px)" />
        <path d="M 140 160 L 230 120 L 320 160" stroke="#f87171" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Code Editor Window Header */}
        <rect x="120" y="48" width="220" height="12" rx="2" fill="#12141c" opacity="0.8" />
        <circle cx="127" cy="54" r="2" fill="#ef4444" />
        <circle cx="134" cy="54" r="2" fill="#eab308" />
        <circle cx="141" cy="54" r="2" fill="#22c55e" />
        <text x="152" y="57" fill="#71717a" fontSize="6" fontFamily="monospace">Maksim_Dev.tsx</text>

        {/* Glowing Code Lines inside Editor */}
        <g opacity="0.9" transform="translate(122, 68)">
          {/* import React from 'react' */}
          <line x1="6" y1="4" x2="45" y2="4" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="4" x2="85" y2="4" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" />
          
          {/* const website = createProject({ */}
          <line x1="6" y1="12" x2="35" y2="12" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
          <line x1="40" y1="12" x2="80" y2="12" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />

          {/* conversion: 100%, */}
          <line x1="16" y1="20" x2="55" y2="20" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="20" x2="90" y2="20" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />

          {/* speed: 'ultra-fast', */}
          <line x1="16" y1="28" x2="65" y2="28" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

          {/* design: 'pixel-perfect' */}
          <line x1="16" y1="36" x2="75" y2="36" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />

          {/* }); */}
          <line x1="6" y1="44" x2="25" y2="44" stroke="#a1a1aa" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Small Terminal Tab on right of screen */}
        <rect x="235" y="72" width="100" height="75" rx="2" fill="#090a0f" stroke="#ef4444" strokeWidth="0.8" opacity="0.9" />
        <text x="242" y="84" fill="#22c55e" fontSize="6" fontFamily="monospace">➜ build: SUCCESS</text>
        <text x="242" y="94" fill="#ef4444" fontSize="6" fontFamily="monospace">● Lighthouse 100/100</text>
        <text x="242" y="104" fill="#38bdf8" fontSize="6" fontFamily="monospace">⚡ Ready for client</text>
        <line x1="242" y1="112" x2="265" y2="112" stroke="#ffffff" strokeWidth="1.5" />

        {/* Screen Web Camera */}
        <circle cx="230" cy="33" r="1.5" fill="#000000" stroke="#4b5563" strokeWidth="0.5" />

        {/* --- LAPTOP KEYBOARD & BASE --- */}
        {/* Hinge */}
        <polygon points="80,200 380,200 385,206 75,206" fill="#1c1e28" stroke="#333644" strokeWidth="0.8" />

        {/* Keyboard Base Plate (Perspective Slant) */}
        <polygon points="75,206 385,206 430,285 30,285" fill="url(#laptopBase)" stroke="#333644" strokeWidth="1" />

        {/* Keyboard Recess */}
        <polygon points="90,212 370,212 405,258 55,258" fill="url(#keyboardDeck)" />

        {/* Keyboard Keys Rows with Subtle Glow */}
        <g opacity="0.6">
          <polygon points="95,215 365,215 370,222 90,222" fill="#07080b" stroke="#ef4444" strokeWidth="0.4" strokeOpacity="0.5" />
          <polygon points="88,224 372,224 378,232 82,232" fill="#07080b" stroke="#27272a" strokeWidth="0.5" />
          <polygon points="80,234 380,234 388,243 72,243" fill="#07080b" stroke="#27272a" strokeWidth="0.5" />
          <polygon points="70,245 390,245 400,255 60,255" fill="#07080b" stroke="#ef4444" strokeWidth="0.4" strokeOpacity="0.4" />
        </g>

        {/* Spacebar */}
        <polygon points="190,246 270,246 275,254 185,254" fill="#050608" stroke="#3f3f46" strokeWidth="0.5" />

        {/* Trackpad */}
        <polygon points="180,262 280,262 290,280 170,280" fill="#14151c" stroke="#2c2f3d" strokeWidth="0.8" />

        {/* Front Edge Chamfer */}
        <polygon points="30,285 430,285 432,290 28,290" fill="#181920" />

        {/* Bottom Table Reflection */}
        <ellipse cx="230" cy="292" rx="190" ry="10" fill="#000000" opacity="0.8" />
        <ellipse cx="230" cy="290" rx="140" ry="4" fill="#ef4444" opacity="0.25" filter="blur(3px)" />
      </svg>
    </div>
  );
};
