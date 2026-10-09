import React from 'react';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full min-h-[500px] md:min-h-[640px] flex items-center justify-center pointer-events-none select-none overflow-hidden">
      {/* Background Volumetric Red Atmosphere & Fog */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-red-600/18 rounded-full blur-[140px] pointer-events-none animate-pulse"
        style={{ animationDuration: '6s' }}
      />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-red-800/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Behind Hero: Hacker / Developer Multimonitor Station on the Right */}
      <div className="absolute right-0 sm:right-6 top-1/2 -translate-y-1/2 w-72 h-80 opacity-60 hidden md:block">
        <svg viewBox="0 0 300 320" className="w-full h-full drop-shadow-[0_0_15px_rgba(239,68,68,0.2)]">
          <defs>
            <linearGradient id="screenGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="coderGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1e2025" />
              <stop offset="100%" stopColor="#08080a" />
            </linearGradient>
          </defs>

          {/* Code Monitors */}
          <rect x="30" y="70" width="110" height="75" rx="3" fill="#0d0e12" stroke="#ef4444" strokeWidth="1" strokeOpacity="0.4" />
          <rect x="35" y="75" width="100" height="65" fill="#060709" />
          {/* Code lines */}
          <line x1="42" y1="84" x2="80" y2="84" stroke="#ef4444" strokeWidth="2" strokeOpacity="0.8" />
          <line x1="42" y1="92" x2="110" y2="92" stroke="#a1a1aa" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="48" y1="100" x2="95" y2="100" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="48" y1="108" x2="120" y2="108" stroke="#38bdf8" strokeWidth="1.5" strokeOpacity="0.7" />
          <line x1="42" y1="116" x2="75" y2="116" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="42" y1="124" x2="100" y2="124" stroke="#a1a1aa" strokeWidth="1.5" strokeOpacity="0.5" />
          {/* Stand */}
          <rect x="80" y="145" width="10" height="20" fill="#18181b" />
          <rect x="65" y="165" width="40" height="4" rx="2" fill="#27272a" />

          {/* Secondary Vertical Monitor */}
          <rect x="150" y="50" width="70" height="110" rx="3" fill="#0d0e12" stroke="#71717a" strokeWidth="0.8" strokeOpacity="0.3" />
          <rect x="154" y="54" width="62" height="102" fill="#050608" />
          <line x1="160" y1="62" x2="190" y2="62" stroke="#22c55e" strokeWidth="1.5" strokeOpacity="0.6" />
          <line x1="160" y1="70" x2="205" y2="70" stroke="#a1a1aa" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="160" y1="78" x2="185" y2="78" stroke="#a1a1aa" strokeWidth="1.2" strokeOpacity="0.4" />
          <line x1="160" y1="86" x2="200" y2="86" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.6" />
          <line x1="160" y1="94" x2="180" y2="94" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" />

          {/* Programmer Hooded Silhouette Sitting at Desk */}
          {/* Desk surface */}
          <line x1="10" y1="180" x2="260" y2="180" stroke="#27272a" strokeWidth="2.5" />
          {/* Head & Hood */}
          <path d="M 175 125 C 160 120, 155 140, 160 160 C 165 175, 175 185, 195 185 C 215 185, 225 170, 220 150 C 215 130, 200 122, 175 125 Z" fill="url(#coderGrad)" />
          {/* Back & Coat */}
          <path d="M 160 160 C 150 180, 140 215, 135 260 L 245 260 C 240 215, 230 180, 220 160 Z" fill="#090a0d" />
          {/* Subtle rim glow on coder hood */}
          <path d="M 160 145 C 162 132, 175 125, 190 126" stroke="#ef4444" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
          {/* Keyboard & Hands glow */}
          <ellipse cx="140" cy="180" rx="40" ry="6" fill="#18181b" />
          <ellipse cx="140" cy="178" rx="25" ry="3" fill="#22c55e" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Center Cinematic Portrait (Young developer, dark messy hair, sunglasses, coat, cross necklace) */}
      <div className="relative w-[340px] sm:w-[420px] md:w-[480px] h-[480px] sm:h-[580px] md:h-[640px] flex items-end justify-center">
        {/* Soft volumetric smoky glow behind the head */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-72 h-72 bg-gradient-to-t from-red-600/30 via-red-950/20 to-transparent rounded-full blur-2xl" />

        {/* Cinematic Character Illustration & Silhouette */}
        <svg
          viewBox="0 0 500 680"
          className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.95)]"
        >
          <defs>
            {/* Skin Tone Gradient with Moody Rim Lighting */}
            <linearGradient id="skinGrad" x1="0.2" y1="0" x2="0.8" y2="1">
              <stop offset="0%" stopColor="#d4a373" />
              <stop offset="45%" stopColor="#9c6644" />
              <stop offset="85%" stopColor="#4a2810" />
              <stop offset="100%" stopColor="#1c0f08" />
            </linearGradient>

            {/* Red Rim Light Gradient */}
            <linearGradient id="redRim" x1="1" y1="0" x2="0" y2="0">
              <stop offset="0%" stopColor="#ef4444" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ef4444" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
            </linearGradient>

            {/* Dark Coat Texture */}
            <linearGradient id="coatGrad" x1="0.3" y1="0" x2="0.7" y2="1">
              <stop offset="0%" stopColor="#1b1c22" />
              <stop offset="30%" stopColor="#121318" />
              <stop offset="70%" stopColor="#090a0d" />
              <stop offset="100%" stopColor="#030305" />
            </linearGradient>

            {/* Sunglasses Lens Reflection */}
            <linearGradient id="sunglassReflect" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="40%" stopColor="#090d16" />
              <stop offset="65%" stopColor="#dc2626" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#05070a" />
            </linearGradient>

            {/* Silver Cross Metal Shine */}
            <linearGradient id="silverCross" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>
          </defs>

          {/* Atmospheric Particle / Smoke tendrils in SVG */}
          <path
            d="M 120 400 Q 80 320 140 240 Q 200 160 180 80"
            stroke="rgba(239, 68, 68, 0.15)"
            strokeWidth="38"
            strokeLinecap="round"
            fill="none"
            filter="blur(16px)"
          />
          <path
            d="M 360 440 Q 420 320 340 200 Q 300 120 330 40"
            stroke="rgba(239, 68, 68, 0.2)"
            strokeWidth="42"
            strokeLinecap="round"
            fill="none"
            filter="blur(18px)"
          />

          {/* Coat Body Base */}
          <path
            d="M 60 680 C 70 540 100 440 160 380 C 180 360 210 350 250 350 C 290 350 320 360 340 380 C 400 440 430 540 440 680 Z"
            fill="url(#coatGrad)"
          />

          {/* Coat Puffer Segments & Baffles */}
          <path
            d="M 85 640 C 130 620 220 625 250 625 C 280 625 370 620 415 640"
            stroke="#242630"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M 110 560 C 160 540 220 545 250 545 C 280 545 340 540 390 560"
            stroke="#242630"
            strokeWidth="5"
            fill="none"
          />
          <path
            d="M 130 480 C 170 460 220 465 250 465 C 280 465 330 460 370 480"
            stroke="#242630"
            strokeWidth="5"
            fill="none"
          />

          {/* High Puffer Collar */}
          {/* Left Collar flap */}
          <path
            d="M 160 375 C 150 330 170 300 205 305 C 215 340 210 380 185 410 Z"
            fill="#181920"
            stroke="#272935"
            strokeWidth="2"
          />
          {/* Right Collar flap */}
          <path
            d="M 340 375 C 350 330 330 300 295 305 C 285 340 290 380 315 410 Z"
            fill="#121318"
            stroke="#272935"
            strokeWidth="2"
          />

          {/* Neck with Shadow */}
          <path
            d="M 215 280 L 215 360 C 235 370 265 370 285 360 L 285 280 Z"
            fill="#5a331c"
          />
          <path
            d="M 215 320 C 240 350 260 350 285 320 L 285 360 C 265 370 235 370 215 360 Z"
            fill="#2c170b"
          />

          {/* Silver Cross Necklace hanging on chest */}
          {/* Chain */}
          <path
            d="M 228 320 C 235 370 245 400 250 410 C 255 400 265 370 272 320"
            fill="none"
            stroke="#94a3b8"
            strokeWidth="1.6"
            strokeDasharray="2,1"
          />
          {/* Cross Pendant */}
          <g transform="translate(250, 416)">
            {/* Glow */}
            <circle cx="0" cy="12" r="14" fill="#ef4444" fillOpacity="0.25" filter="blur(4px)" />
            {/* Vertical beam */}
            <rect x="-2" y="0" width="4" height="26" rx="1" fill="url(#silverCross)" />
            {/* Horizontal beam */}
            <rect x="-8" y="6" width="16" height="4" rx="1" fill="url(#silverCross)" />
            {/* Highlight spark */}
            <circle cx="0" cy="8" r="1.5" fill="#ffffff" />
          </g>

          {/* Jawline & Head Structure */}
          {/* Head base */}
          <path
            d="M 195 210 C 190 260 205 305 240 318 C 250 322 260 322 270 317 C 300 300 315 255 310 205 C 310 150 295 120 250 120 C 205 120 195 160 195 210 Z"
            fill="url(#skinGrad)"
          />

          {/* Right Jaw Edge Red Rim Highlight */}
          <path
            d="M 270 317 C 298 300 312 260 310 210 C 310 175 302 140 285 125"
            stroke="#ef4444"
            strokeWidth="3.5"
            strokeOpacity="0.85"
            fill="none"
          />

          {/* Ear on the Right */}
          <path
            d="M 305 210 C 318 212 322 230 318 245 C 314 255 308 258 302 254"
            fill="#7a4628"
            stroke="#ef4444"
            strokeWidth="1.5"
            strokeOpacity="0.7"
          />

          {/* Nose & Mouth in Mood Lighting */}
          <path
            d="M 248 215 L 253 250 L 244 256 L 257 256"
            stroke="#381c0e"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Mouth line */}
          <path
            d="M 238 280 C 248 277 256 277 266 280"
            stroke="#2e1408"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M 243 287 C 250 289 255 289 261 287"
            stroke="#451f0b"
            strokeWidth="2"
            fill="none"
          />

          {/* Stylish Designer Sunglasses */}
          {/* Frame */}
          <path
            d="M 205 195 C 220 190 240 192 250 196 C 260 192 280 190 295 195 C 305 198 308 210 305 224 C 300 238 285 244 268 242 C 258 240 252 232 250 220 C 248 232 242 240 232 242 C 215 244 200 238 195 224 C 192 210 195 198 205 195 Z"
            fill="#090a0d"
            stroke="#1c1d24"
            strokeWidth="2.5"
          />
          {/* Left Lens */}
          <path
            d="M 203 202 C 215 198 232 200 240 205 C 243 218 238 235 228 236 C 214 237 202 230 199 218 C 198 208 200 203 203 202 Z"
            fill="url(#sunglassReflect)"
          />
          {/* Right Lens with subtle red glow reflection */}
          <path
            d="M 260 205 C 268 200 285 198 297 202 C 300 203 302 208 301 218 C 298 230 286 237 272 236 C 262 235 257 218 260 205 Z"
            fill="url(#sunglassReflect)"
          />
          {/* Right Lens Specular Glint */}
          <line x1="272" y1="206" x2="292" y2="214" stroke="#ffffff" strokeWidth="1.8" strokeOpacity="0.75" strokeLinecap="round" />
          <line x1="268" y1="214" x2="284" y2="220" stroke="#ef4444" strokeWidth="1.2" strokeOpacity="0.8" strokeLinecap="round" />

          {/* Textured Messy Dark Hair with Highlights */}
          {/* Hair base silhouette */}
          <path
            d="M 180 195 C 170 155 185 110 215 85 C 240 65 280 65 305 90 C 330 115 335 155 325 195 C 320 180 310 160 300 150 C 285 125 245 125 225 140 C 205 155 195 175 180 195 Z"
            fill="#0c0d11"
          />
          {/* Strands & volume spikes */}
          <path d="M 215 85 C 210 65 230 50 245 65 C 255 75 250 95 240 100 Z" fill="#181920" />
          <path d="M 245 65 C 255 45 280 48 285 68 C 290 80 280 98 270 102 Z" fill="#14151b" />
          <path d="M 285 68 C 300 55 320 65 322 85 C 322 98 310 112 300 115 Z" fill="#181920" />
          <path d="M 195 120 C 180 105 190 85 205 95 C 215 105 210 120 200 125 Z" fill="#121318" />
          
          {/* Hair fringe falling slightly towards brow */}
          <path d="M 220 125 Q 235 160 230 180 Q 220 155 210 135 Z" fill="#0d0e12" />
          <path d="M 240 120 Q 255 165 250 185 Q 240 155 235 130 Z" fill="#14151b" />
          <path d="M 265 120 Q 275 160 270 180 Q 260 150 255 130 Z" fill="#0d0e12" />

          {/* Right Hair Edge Red Rim Light */}
          <path
            d="M 285 68 C 308 60 326 75 328 100 C 332 130 330 165 322 195"
            stroke="#ef4444"
            strokeWidth="3.2"
            strokeOpacity="0.85"
            fill="none"
          />

          {/* Coat Right Shoulder Red Rim Glow */}
          <path
            d="M 340 380 C 400 440 430 540 440 680"
            stroke="#ef4444"
            strokeWidth="4"
            strokeOpacity="0.8"
            fill="none"
          />

          {/* Bottom vignette to blend into solid black page background */}
          <rect x="0" y="580" width="500" height="100" fill="url(#bottomFade)" />
          <linearGradient id="bottomFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#030303" stopOpacity="0" />
            <stop offset="60%" stopColor="#030303" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#030303" stopOpacity="1" />
          </linearGradient>
        </svg>

        {/* Ambient bottom fog overlay */}
        <div className="absolute -bottom-4 left-0 right-0 h-28 bg-gradient-to-t from-[#030303] via-[#030303]/80 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};
