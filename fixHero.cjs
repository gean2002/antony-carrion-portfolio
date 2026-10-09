const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/HeroSection.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Title 
content = content.replace(
  'font-heading font-black tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl xl:text-[6rem] select-none',
  'font-heading font-bold tracking-normal leading-[1.1] text-6xl sm:text-7xl md:text-8xl xl:text-[7rem] select-none'
);

content = content.replace(
  'span className="block text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.15)]"',
  'span className="block text-zinc-200"'
);

content = content.replace(
  'span className="block text-red-600 red-glow-text mt-1"',
  'span className="block text-red-600 mt-2"'
);

// Subtitle
content = content.replace(
  'font-heading text-sm sm:text-base tracking-[0.25em] text-zinc-300 uppercase',
  'font-heading font-normal text-sm sm:text-base tracking-[0.1em] text-zinc-300 uppercase'
);

// Button
content = content.replace(
  'group relative inline-flex items-center gap-3 px-7 py-3.5 bg-transparent border border-red-600/50 hover:bg-red-900/20 text-zinc-300 hover:text-white font-heading font-bold text-sm sm:text-base tracking-wider uppercase transition-all duration-300 cursor-pointer',
  'group relative inline-flex items-center gap-3 px-6 py-2.5 bg-transparent border border-red-600/40 hover:border-red-500 text-zinc-200 hover:text-white font-heading font-medium text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 cursor-pointer'
);

// Stats container and layout
content = content.replace(
  'lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-center gap-8 lg:gap-12 order-3 pl-0 lg:pl-6 border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0',
  'lg:col-span-3 flex flex-row lg:flex-col justify-between lg:justify-center items-start gap-8 lg:gap-10 order-3 pt-8 lg:pt-0'
);

content = content.replace(
  '{`group text-left ${idx !== PORTFOLIO_DATA.stats.length - 1 ? \'border-b border-white/10 pb-8\' : \'\'}`}',
  '{`group text-left w-auto inline-block ${idx !== PORTFOLIO_DATA.stats.length - 1 ? \'border-b border-white/10 pb-8\' : \'\'}`}'
);

content = content.replace(
  'font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-red-600 red-glow-text tracking-tight transition-transform duration-300 group-hover:scale-105',
  'font-heading font-bold text-5xl sm:text-6xl text-red-600 tracking-tight transition-transform duration-300 group-hover:scale-105'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('HeroSection updated.');
