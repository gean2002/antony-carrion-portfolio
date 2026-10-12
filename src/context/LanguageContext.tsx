import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'it' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  it: {
    'nav.home': 'HOME',
    'nav.about': 'CHI SONO',
    'nav.services': 'SERVIZI',
    'nav.projects': 'PROGETTI',
    'nav.process': 'FASI',
    'nav.contact': 'CONTATTI',
    'nav.cta': 'PARLIAMO DEL TUO PROGETTO',
    'hero.badge': 'DISPONIBILE PER NUOVI PROGETTI',
    'hero.title1': 'SVILUPPATORE',
    'hero.title2': 'WEB FREELANCE',
    'hero.subtitle': 'Aiuto le aziende a costruire esperienze digitali veloci, moderne e orientate alla conversione.',
    'hero.cta': 'INIZIAMO UN PROGETTO',
    'hero.viewWork': 'VEDI I MIEI LAVORI',
    'form.name': 'IL TUO NOME O AZIENDA *',
    'form.namePlaceholder': 'Es. Mario Rossi',
    'form.contact': 'NUMERO WHATSAPP O TELEFONO *',
    'form.contactPlaceholder': '+39 ... o numero WhatsApp',
    'form.project': 'TIPO DI PROGETTO',
    'form.budget': 'BUDGET MEDIO',
    'form.message': 'IL TUO MESSAGGIO',
    'form.messagePlaceholder': 'Descrivi brevemente gli obiettivi, funzionalità richieste o scadenze...',
    'form.submit': 'INVIA MESSAGGIO',
    'form.submitting': 'INVIO IN CORSO...',
    'form.success': 'MESSAGGIO INVIATO CON SUCCESSO!',
    'form.successSub': 'ho ricevuto la tua richiesta. Ti risponderò entro pochissime ore.',
    'form.sendNew': 'INVIA UN ALTRO MESSAGGIO',
    'form.currency': '€',
    'footer.rights': 'Tutti i diritti riservati.',
    'footer.toTop': 'TORNA SU',
    'whatsapp.tooltip': 'Scrivimi su WhatsApp',
    'whatsapp.aria': 'Contattami su WhatsApp',
    'modal.discuss': 'DISCUTI IL PROGETTO',
    'modal.discussSub': 'Compila il brief o scrivi direttamente su Telegram',
    'modal.guarantee': 'Garantisco il rispetto delle scadenze, codice pulito e 30 giorni di supporto tecnico gratuito dopo il rilascio.',
    'modal.bio': 'BIOGRAFIA E FORMAZIONE',
    'contacts.title': 'CONTATTI',
    'contacts.subtitle': 'CREO SITI CHE LAVORANO PER IL TUO BUSINESS',
    'contacts.text': 'Hai un progetto da sviluppare o vuoi ottimizzare il tuo business online? Compila il form a lato o contattami subito.',
    'contacts.city': 'CITTÀ',
    'contacts.write': 'SCRIVIMI UN MESSAGGIO',
    'tech.title': 'TECNOLOGIE',
    'tech.ready1': 'IL PROGETTO PRONTO INIZIA ',
    'tech.ready2': 'QUI',
    'tech.discuss': 'Discuteremo la tua idea, le opzioni e la proposta commerciale.',
    'tech.writeMe': 'SCRIVIMI',
    'tech.response': 'Risposta garantita entro 24 ore',
    'thanks': 'GRAZIE',
    'received': 'È STATA RICEVUTA!',

    'about.p1': 'Ciao! Sono Antony Carrion, sviluppatore web e Shopify specialist con base in Italia.',
    'about.p2': 'Ho conseguito il diploma presso l\'Istituto Superiore Ettore Majorana di Grugliasco, dove ho maturato una solida formazione tecnica, logica e analitica. Questa base accademica è stata il trampolino di lancio per dedicarmi con rigore allo sviluppo frontend, alla programmazione backend e alla creazione di architetture digitali scalabili.',
    'about.p3': 'Oggi mi dedico alla realizzazione di soluzioni web chiavi in mano: dagli store e-commerce performanti su Shopify a landing page e siti corporate ad alto impatto emotivo e di conversione.',
    'about.eduTitle': 'FORMAZIONE & DIPLOMA',
    'about.eduName': 'ISTITUTO SUPERIORE ETTORE MAJORANA DI GRUGLIASCO',
    'about.eduDesc': 'Percorso di istruzione superiore tecnica con focus su logica, metodologie progettuali e informatica. Un bagaglio formativo che mi permette di approcciare ogni sfida di sviluppo web con precisione ingegneristica, velocità e problem solving strutturato.',
    'about.f1Title': 'CODICE PULITO',
    'about.f1Desc': 'Impaginazione semantica, separazione della logica, assenza di librerie pesanti inutili.',
    'about.f2Title': 'VELOCITÀ & SEO',
    'about.f2Desc': 'I siti si caricano in meno di 1.2 secondi. Alti punteggi su Google PageSpeed (95+).',
    'about.f3Title': 'SCADENZE 100%',
    'about.f3Desc': 'Tempistiche chiare per ogni fase. Nessuna sparizione e rispetto delle scadenze concordate.',
    'about.whatYouGet': 'COSA OTTIENI ORDINANDO UN SITO:',
    'about.g1': 'Adattabilità per il 100% di schermi e telefoni',
    'about.g2': 'Ottimizzazione SEO base e meta-tag',
    'about.g3': 'Integrazione form, richieste e notifiche Telegram',
    'about.g4': '30 giorni di supporto tecnico gratuito dopo la consegna',
    'about.story': 'SCOPRI LA MIA STORIA',
    'about.openTo': 'Aperto a nuovi interessanti progetti commerciali',
    'about.discussBtn': 'DISCUTI IL TUO PROGETTO',
    'form.type1': 'Landing page',
    'form.type2': 'Negozio online',
    'form.type3': 'Sito aziendale',

    'projects.allTitle': 'TUTTI I PROGETTI E CASI',
    'projects.allSub': 'Catalogo dei lavori completati nel 2023-2024.',
    'projects.allCat': 'Tutte',
    'projects.viewLive': 'VEDI LIVE',



  },
  en: {
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.services': 'SERVICES',
    'nav.projects': 'PROJECTS',
    'nav.process': 'PROCESS',
    'nav.contact': 'CONTACT',
    'nav.cta': 'LET\'S TALK',
    'hero.badge': 'AVAILABLE FOR NEW PROJECTS',
    'hero.title1': 'FREELANCE',
    'hero.title2': 'WEB DEVELOPER',
    'hero.subtitle': 'I help businesses build fast, modern, and conversion-oriented digital experiences.',
    'hero.cta': 'START A PROJECT',
    'hero.viewWork': 'VIEW MY WORK',
    'form.name': 'YOUR NAME OR COMPANY *',
    'form.namePlaceholder': 'e.g. John Doe',
    'form.contact': 'WHATSAPP OR PHONE NUMBER *',
    'form.contactPlaceholder': '+1 ... or WhatsApp number',
    'form.project': 'PROJECT TYPE',
    'form.budget': 'AVERAGE BUDGET',
    'form.message': 'YOUR MESSAGE',
    'form.messagePlaceholder': 'Briefly describe your goals, required features, or deadlines...',
    'form.submit': 'SEND MESSAGE',
    'form.submitting': 'SENDING...',
    'form.success': 'MESSAGE SENT SUCCESSFULLY!',
    'form.successSub': 'I received your request. I will reply within a few hours.',
    'form.sendNew': 'SEND ANOTHER MESSAGE',
    'form.currency': '$',
    'footer.rights': 'All rights reserved.',
    'modal.discuss': 'DISCUSS THE PROJECT',
    'modal.discussSub': 'Fill out the brief or write directly on Telegram',
    'modal.guarantee': 'I guarantee deadlines, clean code and 30 days of free technical support after launch.',
    'modal.bio': 'BIOGRAPHY AND EDUCATION',
    'contacts.title': 'CONTACTS',
    'contacts.subtitle': 'I BUILD SITES THAT WORK FOR YOUR BUSINESS',
    'contacts.text': 'Do you have a project to develop or want to optimize your online business? Fill out the form or contact me now.',
    'contacts.city': 'CITY',
    'contacts.write': 'WRITE ME A MESSAGE',
    'tech.title': 'TECHNOLOGIES',
    'tech.ready1': 'YOUR READY PROJECT STARTS ',
    'tech.ready2': 'HERE',
    'tech.discuss': 'We will discuss your idea, options and commercial proposal.',
    'tech.writeMe': 'WRITE ME',
    'tech.response': 'Response guaranteed within 24 hours',
    'thanks': 'THANK YOU',
    'received': 'HAS BEEN RECEIVED!',

    'about.p1': 'Hi! I am Antony Carrion, web developer and Shopify specialist based in Italy.',
    'about.p2': 'I graduated from the Ettore Majorana High School of Grugliasco, where I gained a solid technical, logical and analytical background. This academic foundation was the springboard to dedicate myself rigorously to frontend development, backend programming and the creation of scalable digital architectures.',
    'about.p3': 'Today I dedicate myself to creating turnkey web solutions: from high-performance e-commerce stores on Shopify to landing pages and corporate sites with high emotional and conversion impact.',
    'about.eduTitle': 'EDUCATION & DIPLOMA',
    'about.eduName': 'ETTORE MAJORANA HIGH SCHOOL OF GRUGLIASCO',
    'about.eduDesc': 'Higher technical education path with a focus on logic, design methodologies and computer science. An educational background that allows me to approach every web development challenge with engineering precision, speed and structured problem solving.',
    'about.f1Title': 'CLEAN CODE',
    'about.f1Desc': 'Semantic markup, separation of logic, absence of useless heavy libraries.',
    'about.f2Title': 'SPEED & SEO',
    'about.f2Desc': 'Sites load in less than 1.2 seconds. High scores on Google PageSpeed (95+).',
    'about.f3Title': '100% DEADLINES',
    'about.f3Desc': 'Clear timelines for each phase. No disappearances and respect of agreed deadlines.',
    'about.whatYouGet': 'WHAT YOU GET WHEN ORDERING A SITE:',
    'about.g1': '100% responsiveness for screens and phones',
    'about.g2': 'Basic SEO optimization and meta-tags',
    'about.g3': 'Forms, requests and Telegram notifications integration',
    'about.g4': '100% Unique Design (No premade templates)',
    'about.story': 'DISCOVER MY STORY',
    'about.openTo': 'Open to new interesting commercial projects',
    'about.discussBtn': 'DISCUSS YOUR PROJECT',
    'form.type1': 'Landing page',
    'form.type2': 'Online store',
    'form.type3': 'Corporate site',

    'projects.allTitle': 'ALL PROJECTS AND CASES',
    'projects.allSub': 'Catalog of works completed in 2023-2024.',
    'projects.allCat': 'All',
    'projects.viewLive': 'VIEW LIVE',



  },
  es: {
    'nav.home': 'INICIO',
    'nav.about': 'SOBRE MÍ',
    'nav.services': 'SERVICIOS',
    'nav.projects': 'PROYECTOS',
    'nav.process': 'PROCESO',
    'nav.contact': 'CONTACTO',
    'nav.cta': 'HABLEMOS',
    'hero.badge': 'DISPONIBLE PARA NUEVOS PROYECTOS',
    'hero.title1': 'DESARROLLADOR',
    'hero.title2': 'WEB FREELANCE',
    'hero.subtitle': 'Ayudo a las empresas a construir experiencias digitales rápidas, modernas y orientadas a la conversión.',
    'hero.cta': 'INICIAR UN PROYECTO',
    'hero.viewWork': 'VER MI TRABAJO',
    'form.name': 'TU NOMBRE O EMPRESA *',
    'form.namePlaceholder': 'Ej. Juan Pérez',
    'form.contact': 'WHATSAPP O TELÉFONO *',
    'form.contactPlaceholder': '+34 ... o número de WhatsApp',
    'form.project': 'TIPO DE PROYECTO',
    'form.budget': 'PRESUPUESTO PROMEDIO',
    'form.message': 'TU MENSAJE',
    'form.messagePlaceholder': 'Describe brevemente los objetivos, funciones requeridas o plazos...',
    'form.submit': 'ENVIAR MENSAJE',
    'form.submitting': 'ENVIANDO...',
    'form.success': '¡MENSAJE ENVIADO CON ÉXITO!',
    'form.successSub': 'He recibido tu solicitud. Te responderé en unas pocas horas.',
    'form.sendNew': 'ENVIAR OTRO MENSAJE',
    'form.currency': '$',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.toTop': 'VOLVER ARRIBA',
    'whatsapp.tooltip': 'Escríbeme por WhatsApp',
    'whatsapp.aria': 'Contáctame por WhatsApp',
    'modal.discuss': 'DISCUTIR EL PROYECTO',
    'modal.discussSub': 'Rellena el brief o escribe directamente en Telegram',
    'modal.guarantee': 'Garantizo el cumplimiento de plazos, código limpio y 30 días de soporte técnico gratuito tras el lanzamiento.',
    'modal.bio': 'BIOGRAFÍA Y FORMACIÓN',
    'contacts.title': 'CONTACTOS',
    'contacts.subtitle': 'CREO SITIOS QUE TRABAJAN PARA TU NEGOCIO',
    'contacts.text': '¿Tienes un proyecto por desarrollar o quieres optimizar tu negocio online? Rellena el formulario o contáctame ahora.',
    'contacts.city': 'CIUDAD',
    'contacts.write': 'ESCRÍBEME UN MENSAJE',
    'tech.title': 'TECNOLOGÍAS',
    'tech.ready1': 'EL PROYECTO LISTO COMIENZA ',
    'tech.ready2': 'AQUÍ',
    'tech.discuss': 'Discutiremos tu idea, las opciones y la propuesta comercial.',
    'tech.writeMe': 'ESCRÍBEME',
    'tech.response': 'Respuesta garantizada en 24 horas',
    'thanks': 'GRACIAS',
    'received': '¡HA SIDO RECIBIDA!',

    'about.p1': '¡Hola! Soy Antony Carrion, desarrollador web y especialista en Shopify basado en Italia.',
    'about.p2': 'Obtuve mi diploma en el Instituto Superior Ettore Majorana de Grugliasco, donde adquirí una sólida formación técnica, lógica y analítica. Esta base académica fue el trampolín para dedicarme con rigor al desarrollo frontend, la programación backend y la creación de arquitecturas digitales escalables.',
    'about.p3': 'Hoy me dedico a la creación de soluciones web llave en mano: desde tiendas e-commerce de alto rendimiento en Shopify hasta landing pages y sitios corporativos con alto impacto emocional y de conversión.',
    'about.eduTitle': 'FORMACIÓN Y DIPLOMA',
    'about.eduName': 'INSTITUTO SUPERIOR ETTORE MAJORANA DE GRUGLIASCO',
    'about.eduDesc': 'Trayectoria de educación técnica superior con enfoque en lógica, metodologías de diseño e informática. Un bagaje formativo que me permite afrontar cada reto de desarrollo web con precisión de ingeniería, velocidad y resolución de problemas estructurada.',
    'about.f1Title': 'CÓDIGO LIMPIO',
    'about.f1Desc': 'Maquetación semántica, separación de la lógica, ausencia de pesadas bibliotecas inútiles.',
    'about.f2Title': 'VELOCIDAD Y SEO',
    'about.f2Desc': 'Los sitios cargan en menos de 1.2 segundos. Altas puntuaciones en Google PageSpeed (95+).',
    'about.f3Title': 'PLAZOS 100%',
    'about.f3Desc': 'Tiempos claros para cada fase. Sin desapariciones y cumplimiento de los plazos acordados.',
    'about.whatYouGet': 'QUÉ OBTIENES AL ORDENAR UN SITIO:',
    'about.g1': 'Adaptabilidad para el 100% de pantallas y teléfonos',
    'about.g2': 'Optimización SEO básica y meta-etiquetas',
    'about.g3': 'Integración de formularios, solicitudes y notificaciones de Telegram',
    'about.g4': '30 días de soporte técnico gratuito tras la entrega',
    'about.story': 'DESCUBRE MI HISTORIA',
    'about.openTo': 'Abierto a nuevos e interesantes proyectos comerciales',
    'about.discussBtn': 'DISCUTIR TU PROYECTO',
    'form.type1': 'Landing page',
    'form.type2': 'Tienda online',
    'form.type3': 'Sitio corporativo',

    'projects.allTitle': 'TODOS LOS PROYECTOS Y CASOS',
    'projects.allSub': 'Catálogo de trabajos completados en 2023-2024.',
    'projects.allCat': 'Todas',
    'projects.viewLive': 'VER EN VIVO',



  }
};

export const LanguageProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('it');

  useEffect(() => {
    const saved = localStorage.getItem('app_lang') as Language;
    if (saved && ['it', 'es'].includes(saved)) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_lang', lang);
  };

  const t = (key: string): string => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
