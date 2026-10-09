import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { playSubtleClick, playTechBlip } from '../utils/audio';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService,
}) => {
  const [projectType, setProjectType] = useState<string>(initialService || 'Landing page');
  const [budget, setBudget] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Landing page',
    'Negozio online',
    'Sito aziendale',
  ];



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSubtleClick();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setContact('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0a0a0d] border border-white/10 rounded-sm shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-5 sm:p-6 bg-[#0a0a0d]/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-6 bg-red-600 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <div>
              <h2 className="font-heading font-black text-lg sm:text-xl text-white tracking-wide uppercase">
                DISCUTI IL PROGETTO
              </h2>
              <span className="text-xs font-body text-zinc-300">
                Compila il brief o scrivi direttamente su Telegram
              </span>
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

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            /* Success State */
            <div className="py-10 text-center space-y-5 animate-in zoom-in-95 duration-200">
              <div className="w-16 h-16 mx-auto bg-red-950/50 border border-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <CheckCircle2 className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-heading font-black text-xl text-white uppercase">
                GRAZIE, {name || 'LA TUA RICHIESTA'} È STATA RICEVUTA!
              </h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto font-body">
                Antony ti contatterà entro 30 minuti per chiarire i dettagli e calcolare un preventivo.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/393454184481?text=${encodeURIComponent(
                    `Ciao Antony! Ho inviato una richiesta per il progetto "${projectType}". Vorrei ricevere maggiori informazioni e capire come realizzare il mio sito web con te! Il mio contatto: ${contact}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>SCRIVI SU WHATSAPP ADESSO</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3 border border-white/10 hover:border-white/30 text-zinc-300 text-xs font-heading font-semibold uppercase rounded"
                >
                  CHIUDI
                </button>
              </div>
            </div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Project Type Selector */}
              <div>
                <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  1. Tipo di progetto web:
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => {
                        playTechBlip();
                        setProjectType(type);
                      }}
                      className={`px-3 py-1.5 text-xs font-body rounded transition-colors cursor-pointer ${
                        projectType === type
                          ? 'bg-red-600 text-white font-semibold shadow-[0_0_10px_rgba(239,68,68,0.4)]'
                          : 'bg-zinc-900 border border-white/5 text-zinc-300 hover:text-white'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Budget Range */}
              <div>
                <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-2">
                  2. Budget stimato (€):
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 font-mono">€</span>
                  <input
                    type="number"
                    min="500"
                    required
                    placeholder="Minimo 500"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full pl-8 pr-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-mono"
                  />
                </div>
              </div>

              {/* 3. Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Il tuo nome:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alessandro"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-body"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                    Numero WhatsApp:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+39 ... o numero WhatsApp"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-body"
                  />
                </div>
              </div>

              {/* 5. Additional Message / Link */}
              <div>
                <label className="block text-xs font-heading font-bold text-zinc-300 uppercase tracking-wider mb-1.5">
                  Breve descrizione del compito (o link al mockup / riferimenti):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ho bisogno di un sito per un'azienda di costruzioni con un calcolatore dei costi..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-zinc-950 border border-white/10 rounded focus:border-red-500 focus:outline-none text-zinc-200 text-base sm:text-sm font-body resize-none"
                />
              </div>

              {/* Guarantees Badge */}
              <div className="p-3 bg-zinc-950/80 border border-white/5 rounded flex items-center gap-3 text-zinc-300 text-xs font-body">
                <ShieldCheck className="w-5 h-5 text-red-500 shrink-0" />
                <span>
                  Garantisco il rispetto delle scadenze, codice pulito e 30 giorni di supporto tecnico gratuito dopo il rilascio.
                </span>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-sm tracking-wider uppercase rounded transition-all red-glow cursor-pointer text-center flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>INVIA LA RICHIESTA DI PREVENTIVO</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
