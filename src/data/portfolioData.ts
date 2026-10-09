export interface Service {
  id: string;
  icon: 'code' | 'layout' | 'cart' | 'support';
  title: string;
  description: string;
  features: string[];
}

export interface Project {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  year: string;
  duration: string;
  client: string;
  results: string;
  previewType: 'villa' | 'shop' | 'corp' | 'studio' | 'fintech' | 'saas';
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  duration: string;
  details: string;
}

export interface TechItem {
  id: string;
  name: string;
  level: string;
  years: string;
  color: string;
  iconType: 'html' | 'css' | 'js' | 'php' | 'shopify' | 'stitch' | 'google-calendar' | 'figma' | 'git' | 'wordpress' | 'mysql';
}

export const PORTFOLIO_DATA = {
  name: 'ANTONY CARRION',
  firstName: 'ANTONY',
  lastName: 'CARRION',
  role: 'SVILUPPO WEB',
  roleDescription: 'Creo siti web moderni e funzionali chiavi in mano',
  tagline: 'CREO SITI CHE LAVORANO PER IL TUO BUSINESS',
  experienceYears: '2+',
  completedProjects: '10+',
  satisfactionRate: '100%',
  stats: [
    { value: '2+', label: 'anni di esperienza', sub: 'di pratica commerciale continua' },
    { value: '10+', label: 'lavori completati', sub: 'dai siti promozionali ai negozi online' },
    { value: '100%', label: 'responsabilità e qualità', sub: 'rispetto delle scadenze e codice pulito' },
  ],
  bio: [
    'Mi chiamo Antony Carrion, sviluppatore web e Shopify specialist con base in Italia.',
    'Diplomato presso l\'Istituto Superiore Ettore Majorana di Grugliasco, ho solide basi tecniche e logiche applicate allo sviluppo web ad alte prestazioni.',
    'Aiuto aziende e professionisti a scalare su internet con e-commerce, landing page e portali web moderni orientati alla conversione.'
  ],
  contacts: {
    whatsapp: '+39 345 418 4481',
    whatsappNumber: '393454184481',
    whatsappUrl: `https://wa.me/393454184481?text=${encodeURIComponent('Ciao Antony! Ho visto il tuo portfolio e i tuoi progetti. Vorrei maggiori informazioni e capire come possiamo realizzare un sito web moderno ed efficace per la mia attività. Sei disponibile per parlarne?')}`,
    phone: '+39 345 418 4481',
    phoneUrl: 'tel:+393454184481',
    email: 'antonycarrion.dev@gmail.com',
    location: 'Torino / Remoto',
    telegram: '@carrion_antony',
    telegramUrl: 'https://t.me/carrion_antony',
    github: 'https://github.com',
    vk: 'https://vk.com',
  },
  services: [
    {
      id: 'web-dev',
      icon: 'code',
      title: 'SVILUPPO SITI WEB',
      description: 'Creazione di siti di qualsiasi complessità: da landing page eleganti a grandi negozi ad alto carico.',
      features: ['Codice semantico pulito', 'Elevata velocità di caricamento (PageSpeed 95+)', 'Struttura ottimizzata per la SEO'],
    },
    {
      id: 'markup',
      icon: 'layout',
      title: 'IMPAGINAZIONE',
      description: 'Impaginazione adattiva e cross-browser Pixel-Perfect da mockup Figma, PSD, XD.',
      features: ['Adattamento mobile per tutti gli schermi', 'Micro-animazioni e transizioni fluide', 'Supporto per browser moderni'],
    },
    {
      id: 'ecommerce',
      icon: 'cart',
      title: 'NEGOZI ONLINE',
      description: 'Sviluppo di negozi online completi su CMS e framework moderni con un comodo catalogo.',
      features: ['Integrazione pagamenti online', 'Carrello e filtraggio prodotti comodi', 'Pannello di gestione ordini'],
    },
    {
      id: 'support',
      icon: 'support',
      title: 'SUPPORTO E MIGLIORAMENTO',
      description: 'Supporto tecnico, miglioramento e ottimizzazione dei siti esistenti, risoluzione degli errori.',
      features: ['Velocizzazione del sito', 'Aggiornamento dei moduli e protezione da hacking', 'Aggiunta di nuove funzionalità'],
    },
  ] as Service[],
  projects: [
    {
      id: 'p1',
      category: 'LANDING PAGE',
      title: 'LANDING PAGE',
      subtitle: 'Landing page promozionale ad alta conversione per brand skincare',
      description: 'Landing page moderna ed elegante per Luméra Skincare con presentazione formule, carosello dermatologi ed esperienza d\'acquisto premium.',
      tags: ['Figma to Web', 'Alta Conversione', 'Motion UI', 'Performance 4K'],
      year: '2024',
      duration: '12 giorni',
      client: 'Luméra Skincare Brand',
      results: 'Tasso di conversione dell\'8.4% e oltre 25.000 ordini',
      previewType: 'villa',
    },
    {
      id: 'p2',
      category: 'NEGOZIO ONLINE',
      title: 'NEGOZIO ONLINE',
      subtitle: 'Negozio online con un comodo pannello di controllo',
      description: 'Negozio di abbigliamento e calzature maschili di design con filtri, sincronizzazione magazzino, pagamento online e account personale.',
      tags: ['Shopify', 'Liquid', 'REST API', 'Pagamenti Online'],
      year: '2024',
      duration: '24 giorni',
      client: 'AURA Menswear Store',
      results: 'Oltre 1.200 ordini nel primo mese di attività',
      previewType: 'shop',
    },
    {
      id: 'p3',
      category: 'SITO AZIENDALE',
      title: 'SITO AZIENDALE',
      subtitle: 'Sito per una società di consulenza e legale',
      description: 'Portale aziendale multipagina con design formale, catalogo di pratiche legali, prenotazione consulenze e blog di esperti.',
      tags: ['JavaScript', 'API Integration', 'Google Calendar', 'Architettura SEO'],
      year: '2023',
      duration: '18 giorni',
      client: 'Lex & Capital Partners',
      results: 'Prima pagina su Google per le principali ricerche di settore',
      previewType: 'corp',
    },
    {
      id: 'p4',
      category: 'STUDIO DI DESIGN',
      title: 'STUDIO DI DESIGN',
      subtitle: 'Portale esclusivo e booking per luxury barbershop a Torino',
      description: 'Sito web d\'atmosfera dark per JM Barber Club Torino, completo di catalogo servizi, showcase dei barbieri, recensioni e sistema integrato di prenotazione rituali online.',
      tags: ['Creative Frontend', 'Prenotazioni Online', 'Dark Luxury UI', 'Mobile First'],
      year: '2024',
      duration: '14 giorni',
      client: 'JM Barber Club Torino',
      results: 'Oltre il 70% degli appuntamenti prenotati online dal primo mese',
      previewType: 'studio',
    },
  ] as Project[],
  processSteps: [
    {
      step: '01',
      title: 'DISCUSSIONE',
      description: 'Discussione dell\'idea, obiettivi del progetto, pubblico di destinazione e requisiti tecnici.',
      duration: '1-2 giorni',
      details: 'Conduciamo un brief dettagliato, chiariamo gli obiettivi di business, definiamo le funzionalità e stiliamo le specifiche preliminari.'
    },
    {
      step: '02',
      title: 'PROGETTAZIONE',
      description: 'Sviluppo della struttura, prototipazione delle pagine e approvazione del concept di design.',
      duration: '3-5 giorni',
      details: 'Creiamo un prototipo interattivo della logica del sito e un concept visivo su Figma tenendo conto dell\'identità del brand.'
    },
    {
      step: '03',
      title: 'SVILUPPO',
      description: 'Impaginazione pulita e adattiva, programmazione della logica e integrazione con CMS/backend.',
      duration: '7-14 giorni',
      details: 'Scriviamo codice pulito e scalabile, implementiamo componenti dinamici, colleghiamo database e API.'
    },
    {
      step: '04',
      title: 'TEST',
      description: 'Controllo della visualizzazione su tutti i dispositivi, test di carico e correzione dei bug.',
      duration: '2-3 giorni',
      details: 'Testiamo su schermi mobile (iOS/Android), controlliamo la validazione dei form, la velocità e la compatibilità cross-browser.'
    },
    {
      step: '05',
      title: 'LANCIO',
      description: 'Trasferimento sull\'hosting del cliente, collegamento dominio, certificato SSL e formazione.',
      duration: '1 giorno',
      details: 'Distribuiamo il progetto sul server di produzione, forniamo gli accessi e insegniamo come gestire i contenuti.'
    },
  ] as ProcessStep[],
  technologies: [
    { id: 't1', name: 'HTML5', level: '98%', years: '3 anni', color: '#e34f26', iconType: 'html' },
    { id: 't2', name: 'CSS3', level: '95%', years: '3 anni', color: '#1572b6', iconType: 'css' },
    { id: 't3', name: 'JavaScript', level: '90%', years: '3 anni', color: '#f7df1e', iconType: 'js' },
    { id: 't4', name: 'Shopify', level: '95%', years: '2 anni', color: '#95bf47', iconType: 'shopify' },
    { id: 't5', name: 'Stitch', level: '90%', years: '2 anni', color: '#38bdf8', iconType: 'stitch' },
    { id: 't6', name: 'Google Calendar', level: '92%', years: '2 anni', color: '#4285f4', iconType: 'google-calendar' },
  ] as TechItem[],
};
