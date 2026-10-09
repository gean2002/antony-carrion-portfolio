import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Mail, MapPin, Send, CheckCircle2, ArrowRight, MessageSquare, Phone, Copyright } from 'lucide-react';
import { playSubtleClick } from '../utils/audio';

interface ContactsSectionProps {
  onOpenContactModal: () => void;
}

export const ContactsSection: React.FC<ContactsSectionProps> = ({ onOpenContactModal }) => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [projectType, setProjectType] = useState('Landing page');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playSubtleClick();
    setIsSubmitted(true);
  };

  return (
    <section id="contacts" className="relative py-7 sm:py-9 bg-[#040404] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Single large bordered card enclosing contacts, form, laptop, and copyright */}
        <div className="border border-white/10 bg-[#060608] relative overflow-hidden p-5 sm:p-8 lg:p-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">

            {/* LEFT: Contacts list, Slogan & Laptop Image */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                {/* Section header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-[3px] h-5 bg-red-600" />
                  <h2 className="font-heading font-bold text-base tracking-widest text-white uppercase">
                    CONTATTI
                  </h2>
                </div>

                {/* Slogan */}
                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white uppercase leading-tight tracking-wide">
                  CREO SITI CHE LAVORANO<br />
                  <span className="text-red-600">PER IL TUO BUSINESS</span>
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-body leading-relaxed max-w-sm">
                  Hai un progetto da sviluppare o vuoi ottimizzare il tuo business online? Compila il form a lato o contattami subito.
                </p>
              </div>

              {/* Clean stacked contacts */}
              <div className="space-y-3.5">
                {/* WhatsApp & Telefono */}
                <div className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">WhatsApp</div>
                    <a
                      href={PORTFOLIO_DATA.contacts.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-heading text-zinc-300 hover:text-emerald-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.contacts.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5 group cursor-pointer">
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Email</div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.contacts.email}`}
                      className="text-xs sm:text-sm font-heading text-zinc-300 hover:text-red-400 transition-colors"
                    >
                      {PORTFOLIO_DATA.contacts.email}
                    </a>
                  </div>
                </div>

                {/* City */}
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">Città</div>
                    <span className="text-xs sm:text-sm font-heading text-zinc-300">{PORTFOLIO_DATA.contacts.location}</span>
                  </div>
                </div>
              </div>

              {/* Laptop Image seamlessly blended */}
              <div className="relative w-full max-w-[340px] aspect-[16/10] overflow-hidden flex items-center justify-center pt-2">
                <img
                  src="/contact-laptop.jpg"
                  alt="Laptop Workspace"
                  className="w-full h-full object-contain brightness-95"
                />
                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#060608] to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#060608] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#060608] to-transparent pointer-events-none" />
                <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-[#060608] to-transparent pointer-events-none" />
              </div>
            </div>

            {/* RIGHT: Inline Cyberpunk Contact Form */}
            <div className="lg:col-span-7 bg-[#0a0b0e] border border-white/10 p-5 sm:p-7 relative w-full">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-red-600/70 pointer-events-none" />

              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className="w-4 h-4 text-red-500" />
                <h4 className="font-heading font-bold text-xs sm:text-sm tracking-wider text-white uppercase">
                  SCRIVIMI UN MESSAGGIO
                </h4>
              </div>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto bg-red-950/40 border border-red-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                    <CheckCircle2 className="w-7 h-7 text-red-400" />
                  </div>
                  <h5 className="font-heading font-bold text-lg text-white uppercase">
                    MESSAGGIO INVIATO CON SUCCESSO!
                  </h5>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto font-body">
                    Grazie <strong className="text-white">{name || 'per il tuo messaggio'}</strong>, ho ricevuto la tua richiesta. Ti risponderò entro pochissime ore.
                  </p>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/393454184481?text=${encodeURIComponent(
                        `Ciao Antony! Ti ho inviato una richiesta dal tuo portfolio per un progetto "${projectType}". Vorrei capire costi e dettagli per realizzare il mio nuovo sito web, possiamo sentirci?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-semibold text-xs tracking-wider uppercase transition-colors"
                    >
                      <span>APRI CHAT WHATSAPP</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setContact('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 border border-white/20 hover:border-white/40 text-zinc-300 font-heading text-xs tracking-wider uppercase transition-colors cursor-pointer"
                    >
                      INVIA UN ALTRO MESSAGGIO
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Name */}
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-medium tracking-wider text-zinc-400 uppercase mb-1">
                        NOME / AZIENDA *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Es. Mario Rossi"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body"
                      />
                    </div>

                    {/* Contact (WhatsApp or Phone) */}
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-medium tracking-wider text-zinc-400 uppercase mb-1">
                        NUMERO WHATSAPP O TELEFONO *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+39 ... o numero WhatsApp"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {/* Project type */}
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-medium tracking-wider text-zinc-400 uppercase mb-1">
                        TIPO DI PROGETTO
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none px-3.5 py-2.5 text-base sm:text-sm text-white transition-colors font-body"
                      >
                        <option value="Landing page">Landing page</option>
                        <option value="Negozio online">Negozio online</option>
                        <option value="Sito aziendale">Sito aziendale</option>
                      </select>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-[10px] sm:text-[11px] font-heading font-medium tracking-wider text-zinc-400 uppercase mb-1">
                        BUDGET STIMATO (€)
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
                          className="w-full pl-8 pr-3.5 py-2.5 bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none text-base sm:text-sm text-white transition-colors font-mono"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] sm:text-[11px] font-heading font-medium tracking-wider text-zinc-400 uppercase mb-1">
                      IL TUO MESSAGGIO
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Descrivi brevemente gli obiettivi, funzionalità richieste o scadenze..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-[#121318] border border-white/10 focus:border-red-600 focus:outline-none p-3.5 text-base sm:text-sm text-white placeholder-zinc-600 transition-colors font-body resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#c81919] hover:bg-[#b01414] text-white font-heading font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shadow-lg shadow-red-950/40 active:scale-95"
                    >
                      <span>INVIA MESSAGGIO</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    <span className="text-[11px] text-zinc-500 font-body text-center sm:text-right">
                      🔒 Risposta garantita entro 24 ore
                    </span>
                  </div>
                </form>
              )}
            </div>

          </div>

          {/* BOTTOM: Integrated Copyright & Role */}
          <div className="mt-8 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-body text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-1.5">
              <Copyright className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
              <span>2026 {PORTFOLIO_DATA.name}. Tutti i diritti riservati.</span>
            </div>

            <div className="flex items-center gap-1.5 font-heading text-zinc-400 uppercase tracking-wider text-xs">
              <span>{PORTFOLIO_DATA.role}</span>
              <span className="text-red-500 font-mono tracking-normal">&lt;/&gt;</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
