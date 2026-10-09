const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/AboutAndServices.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the start of the grid
const gridStartStr = '<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">';
const startIdx = content.indexOf(gridStartStr);
if (startIdx === -1) throw new Error('Grid start not found');

// Find the end of the grid
const sectionEndStr = '</section>';
const endIdx = content.indexOf(sectionEndStr);

const beforeGrid = content.slice(0, startIdx);
const afterGrid = content.slice(endIdx);

// Extract the SVG 
const svgStart = content.indexOf('<svg viewBox="0 0 300 400"');
const svgEnd = content.indexOf('</svg>', svgStart) + 6;
const svgContent = content.slice(svgStart, svgEnd);

// Generate new grid content
const newGrid = `<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            
            {/* LEFT COLUMN: Photo */}
            <div className="lg:col-span-3 h-full">
              <div className="relative aspect-[3/4] lg:aspect-auto lg:h-full w-full rounded-sm overflow-hidden bg-gradient-to-b from-[#14151a] to-[#08080a] border border-white/10 group-hover:border-red-500/50 transition-colors shadow-2xl">
                ${svgContent}
                <div className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full shadow-[0_0_6px_rgba(239,68,68,0.9)]" />
              </div>
            </div>

            {/* MIDDLE COLUMN: Bio */}
            <div className="lg:col-span-4 flex flex-col justify-between py-2">
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="w-1 h-6 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                  <h2 className="font-heading font-black text-2xl tracking-wider text-white uppercase">
                    CHI SONO
                  </h2>
                </div>
                
                <div className="space-y-4 text-zinc-300 font-body text-sm leading-relaxed">
                  <p className="text-zinc-200">
                    <strong className="text-white font-semibold">Mi chiamo Maxim Nishtchakov</strong>, mi occupo di sviluppo web e creazione di siti di varie complessità.
                  </p>
                  <p className="text-zinc-300">
                    Aiuto aziende e persone a distinguersi su internet con soluzioni moderne e di alta qualità.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => {
                    playSubtleClick();
                    onOpenAboutModal();
                  }}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 bg-transparent border border-red-600/30 hover:border-red-600/60 text-zinc-300 hover:text-white font-heading font-semibold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
                >
                  <span>SCOPRI DI PIÙ</span>
                  <ArrowRight className="w-3.5 h-3.5 text-red-600 group-hover:text-red-500 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Services */}
            <div className="lg:col-span-5 flex flex-col py-2">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-1 h-6 bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
                <h2 className="font-heading font-black text-2xl tracking-wider text-white uppercase">
                  SERVIZI
                </h2>
              </div>

              <div className="space-y-4">
                {PORTFOLIO_DATA.services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      playTechBlip();
                      onSelectService(service);
                    }}
                    className="group relative flex items-start gap-4 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-11 h-11 shrink-0 bg-transparent border border-red-900/50 rounded flex items-center justify-center group-hover:border-red-600 group-hover:shadow-[0_0_15px_rgba(143,18,18,0.3)] transition-all">
                      {getServiceIcon(service.icon)}
                    </div>
                    
                    <div className="flex-1 min-w-0 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
                      <h3 className="font-heading font-bold text-sm tracking-wider text-white group-hover:text-red-400 transition-colors uppercase">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-xs text-zinc-400 font-body leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>`;

fs.writeFileSync(filePath, beforeGrid + newGrid, 'utf8');
console.log('AboutAndServices updated');
