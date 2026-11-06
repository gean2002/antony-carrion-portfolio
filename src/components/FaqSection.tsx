import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: Record<'it' | 'es', FAQItem[]> = {
    it: [
      {
        q: 'In quanto tempo consegni un sito web finito?',
        a: 'Le tempistiche dipendono dalla tipologia: per una Landing Page promozionale ad alta conversione servono circa 7-12 giorni lavorativi; per un negozio e-commerce completo o un sito aziendale strutturato circa 14-25 giorni. Tutte le scadenze sono concordate nero su bianco prima di iniziare.',
      },
      {
        q: 'Come funzionano i pagamenti e l\'anticipo?',
        a: 'Lavoriamo con la massima trasparenza: 50% di anticipo all\'avvio dei lavori (dopo aver definito brief e specifiche) e 50% solo a progetto completato, testato su tutti i dispositivi e pronto per la pubblicazione online.',
      },
      {
        q: 'Chi si occupa di modificare testi, immagini e prodotti dopo il lancio?',
        a: 'Me ne occupo direttamente io al 100%: non dovrai preoccuparti di nulla né perdere tempo con pannelli complicati. Ti basterà inviarmi i nuovi testi, foto o aggiornamenti via WhatsApp o email e applicherò le modifiche tempestivamente per te. In questo modo il tuo sito resta sempre perfetto, veloce e senza rischi di errori tecnici o grafici.',
      },
      {
        q: 'Cosa include la garanzia di supporto tecnico di 30 giorni?',
        a: 'Dopo il rilascio online, hai 30 giorni di assistenza tecnica gratuita al 100%: risoluzione tempestiva di qualsiasi anomalia, ottimizzazione continua e risposte rapide a qualunque tuo dubbio operativo.',
      },
      {
        q: 'Il sito sarà veloce e ottimizzato per Google (SEO)?',
        a: 'Sì. Non uso template pesanti né codice superfluo: sviluppo architetture snelle con tempi di caricamento inferiori a 1.2 secondi, punteggio Google PageSpeed 95+ e conformità a tutti gli standard SEO moderni e Core Web Vitals.',
      },
    ],
    es: [
      {
        q: '¿En cuánto tiempo entregas una página web terminada?',
        a: 'Los plazos dependen del proyecto: para una Landing Page de alta conversión se requieren entre 7 y 12 días laborables; para una tienda online o portal corporativo entre 14 y 25 días. Todos los plazos quedan definidos antes de comenzar.',
      },
      {
        q: '¿Cómo funcionan los pagos y el anticipo?',
        a: 'Trabajamos con total transparencia: un 50% de anticipo al inicio de los trabajos y el 50% restante solo tras la entrega final, comprobada en todos los dispositivos y lista para su publicación.',
      },
      {
        q: '¿Quién se encarga de modificar textos, fotos y productos tras el lanzamiento?',
        a: 'Me encargo yo directamente al 100%: no tendrás que preocuparte de nada ni perder tiempo con paneles complicados. Solo tendrás que enviarme los nuevos textos, imágenes o actualizaciones por WhatsApp o email y aplicaré los cambios rápidamente por ti. Así tu web se mantiene siempre impecable, rápida y sin riesgo de errores técnicos.',
      },
      {
        q: '¿Qué incluye la garantía de soporte técnico de 30 días?',
        a: 'Tras la puesta online, dispones de 30 días de asistencia técnica gratuita: resolución de cualquier duda o ajuste y monitorización continua del rendimiento.',
      },
      {
        q: '¿La página estará optimizada para Google (SEO) y será rápida?',
        a: 'Sí. Desarrollo código semántico limpio sin plantillas pesadas: cargas en menos de 1.2 segundos, puntuación Google PageSpeed 95+ y adaptación completa a dispositivos móviles.',
      },
    ],
  };

  const list = faqs[language] || faqs.it;

  const toggle = (idx: number) => {
    playSubtleClick();
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" data-wow="faq" className="relative py-8 sm:py-12 bg-[#030303] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="relative flex items-center justify-between mb-6 pb-2">
          <div className="flex items-center gap-2.5">
            <span className="wow-accent-bar w-[3px] h-4 bg-red-700" />
            <h2 className="font-heading font-bold text-base sm:text-lg tracking-widest text-white uppercase">
              <span className="wow-title-text">
                {language === 'it' ? 'DOMANDE FREQUENTI' : 'PREGUNTAS FRECUENTES'}
              </span>
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
            <HelpCircle className="w-3.5 h-3.5 text-red-500" />
            <span className="hidden sm:inline">FAQ & RISPOSTE CHIARE</span>
          </div>
          <div
            aria-hidden="true"
            className="wow-divider-line absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-red-600/60 via-white/10 to-transparent"
          />
        </div>

        {/* Accordion Container */}
        <div className="max-w-4xl mx-auto space-y-3">
          {list.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{ '--stagger': idx } as React.CSSProperties}
                className={`wow-faq-item transition-all duration-300 border rounded-sm overflow-hidden ${
                  isOpen
                    ? 'bg-[#0a0a0e] border-red-600/60 shadow-lg shadow-red-950/25'
                    : 'bg-[#070709] border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded flex items-center justify-center font-mono text-xs font-bold shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-red-600 text-white shadow-[0_0_8px_rgba(239,68,68,0.7)]'
                          : 'bg-white/5 text-zinc-400'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`font-heading font-bold text-xs sm:text-sm tracking-wider uppercase transition-colors ${
                        isOpen ? 'text-white' : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {item.q}
                    </span>
                  </span>

                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-red-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-400 font-body leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
