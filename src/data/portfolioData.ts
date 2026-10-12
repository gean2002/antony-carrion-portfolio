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
  previewType: 'villa' | 'shop' | 'corp' | 'studio';
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

const contactsData = {
  whatsapp: '+39 345 418 4481',
  whatsappNumber: '393454184481',
  whatsappUrl: `https://wa.me/393454184481?text=${encodeURIComponent('Ciao Antony! Vorrei maggiori informazioni e capire come possiamo realizzare un sito web moderno ed efficace per la mia attività. Sei disponibile per parlarne?')}`,
  phone: '+39 345 418 4481',
  phoneUrl: 'tel:+393454184481',
  email: 'antonycarrion.dev@gmail.com',
  location: 'Torino / Remoto',
  telegram: '@carrion_antony',
  telegramUrl: 'https://t.me/carrion_antony',
  github: 'https://github.com',
  vk: 'https://vk.com',
};

const contactsDataES = {
  ...contactsData,
  location: 'Turín / Remoto',
  whatsappUrl: `https://wa.me/393454184481?text=${encodeURIComponent('¡Hola Antony! Quisiera más información y entender cómo podemos crear un sitio web moderno y eficaz para mi negocio. ¿Estás disponible para hablar?')}`,
};

const technologiesData = [
  { id: 't1', name: 'HTML5', level: '98%', years: '3 anni', color: '#e34f26', iconType: 'html' },
  { id: 't2', name: 'CSS3', level: '95%', years: '3 anni', color: '#1572b6', iconType: 'css' },
  { id: 't3', name: 'JavaScript', level: '90%', years: '3 anni', color: '#f7df1e', iconType: 'js' },
  { id: 't4', name: 'Shopify', level: '95%', years: '2 anni', color: '#95bf47', iconType: 'shopify' },
  { id: 't5', name: 'Stitch', level: '90%', years: '2 anni', color: '#38bdf8', iconType: 'stitch' },
  { id: 't6', name: 'Google Calendar', level: '92%', years: '2 anni', color: '#4285f4', iconType: 'google-calendar' },
] as TechItem[];

const PORTFOLIO_DATA_IT = {
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
    'Sono uno sviluppatore web e Shopify specialist con base in Italia.',
    'Diplomato presso l\'Istituto Superiore Ettore Majorana di Grugliasco, ho solide basi tecniche e logiche applicate allo sviluppo web ad alte prestazioni.',
    'Aiuto aziende e professionisti a scalare su internet con e-commerce, landing page e portali web moderni orientati alla conversione.'
  ],
  contacts: contactsData,
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
      year: '2025',
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
      year: '2026',
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
  technologies: technologiesData,
};

const PORTFOLIO_DATA_ES = {
  name: 'ANTONY CARRION',
  firstName: 'ANTONY',
  lastName: 'CARRION',
  role: 'DESARROLLO WEB',
  roleDescription: 'Creo sitios web modernos y funcionales llave en mano',
  tagline: 'CREO SITIOS QUE TRABAJAN PARA TU NEGOCIO',
  experienceYears: '2+',
  completedProjects: '10+',
  satisfactionRate: '100%',
  stats: [
    { value: '2+', label: 'años de experiencia', sub: 'de práctica comercial continua' },
    { value: '10+', label: 'trabajos completados', sub: 'desde sitios promocionales hasta tiendas online' },
    { value: '100%', label: 'responsabilidad y calidad', sub: 'cumplimiento de plazos y código limpio' },
  ],
  bio: [
    'Soy un desarrollador web y especialista en Shopify basado en Italia.',
    'Graduado del Instituto Superior Ettore Majorana de Grugliasco, tengo sólidas bases técnicas y lógicas aplicadas al desarrollo web de alto rendimiento.',
    'Ayudo a empresas y profesionales a escalar en internet con e-commerce, landing pages y portales web modernos orientados a la conversión.'
  ],
  contacts: contactsDataES,
  services: [
    {
      id: 'web-dev',
      icon: 'code',
      title: 'DESARROLLO WEB',
      description: 'Creación de sitios de cualquier complejidad: desde landing pages elegantes hasta grandes tiendas de alto tráfico.',
      features: ['Código semántico limpio', 'Alta velocidad de carga (PageSpeed 95+)', 'Estructura optimizada para SEO'],
    },
    {
      id: 'markup',
      icon: 'layout',
      title: 'MAQUETACIÓN',
      description: 'Maquetación adaptativa y multiplataforma Pixel-Perfect desde diseños de Figma, PSD, XD.',
      features: ['Adaptación móvil para todas las pantallas', 'Microanimaciones y transiciones fluidas', 'Soporte para navegadores modernos'],
    },
    {
      id: 'ecommerce',
      icon: 'cart',
      title: 'TIENDAS ONLINE',
      description: 'Desarrollo de tiendas online completas en CMS y frameworks modernos con un cómodo catálogo.',
      features: ['Integración de pagos online', 'Carrito y filtrado de productos', 'Panel de gestión de pedidos'],
    },
    {
      id: 'support',
      icon: 'support',
      title: 'SOPORTE Y MEJORA',
      description: 'Soporte técnico, mejora y optimización de sitios existentes, resolución de errores.',
      features: ['Aceleración del sitio web', 'Actualización de módulos y protección', 'Adición de nuevas funcionalidades'],
    },
  ] as Service[],
  projects: [
    {
      id: 'p1',
      category: 'LANDING PAGE',
      title: 'LANDING PAGE',
      subtitle: 'Landing page promocional de alta conversión para marca de cuidado de la piel',
      description: 'Landing page moderna y elegante para Luméra Skincare con presentación de fórmulas, carrusel de dermatólogos y experiencia de compra premium.',
      tags: ['Figma a Web', 'Alta Conversión', 'Motion UI', 'Rendimiento 4K'],
      year: '2024',
      duration: '12 días',
      client: 'Luméra Skincare Brand',
      results: 'Tasa de conversión del 8.4% y más de 25.000 pedidos',
      previewType: 'villa',
    },
    {
      id: 'p2',
      category: 'TIENDA ONLINE',
      title: 'TIENDA ONLINE',
      subtitle: 'Tienda online con un cómodo panel de control',
      description: 'Tienda de ropa y calzado masculino de diseño con filtros, sincronización de inventario, pago online y cuenta personal.',
      tags: ['Shopify', 'Liquid', 'API REST', 'Pagos Online'],
      year: '2024',
      duration: '24 días',
      client: 'AURA Menswear Store',
      results: 'Más de 1.200 pedidos en el primer mes de actividad',
      previewType: 'shop',
    },
    {
      id: 'p3',
      category: 'SITIO CORPORATIVO',
      title: 'SITIO CORPORATIVO',
      subtitle: 'Sitio para una firma de consultoría y legal',
      description: 'Portal corporativo multipágina con diseño formal, catálogo de prácticas legales, reserva de consultas y blog de expertos.',
      tags: ['JavaScript', 'Integración de API', 'Google Calendar', 'Arquitectura SEO'],
      year: '2025',
      duration: '18 días',
      client: 'Lex & Capital Partners',
      results: 'Primera página en Google para las principales búsquedas del sector',
      previewType: 'corp',
    },
    {
      id: 'p4',
      category: 'ESTUDIO DE DISEÑO',
      title: 'ESTUDIO DE DISEÑO',
      subtitle: 'Portal exclusivo y reservas para luxury barbershop en Turín',
      description: 'Sitio web con atmósfera dark para JM Barber Club Turín, completo con catálogo de servicios, vitrina de barberos, reseñas y sistema integrado de reserva online.',
      tags: ['Frontend Creativo', 'Reservas Online', 'Dark Luxury UI', 'Mobile First'],
      year: '2026',
      duration: '14 días',
      client: 'JM Barber Club Torino',
      results: 'Más del 70% de las citas reservadas online desde el primer mes',
      previewType: 'studio',
    },
  ] as Project[],
  processSteps: [
    {
      step: '01',
      title: 'DISCUSIÓN',
      description: 'Discusión de la idea, objetivos del proyecto, público objetivo y requisitos técnicos.',
      duration: '1-2 días',
      details: 'Realizamos un brief detallado, aclaramos los objetivos de negocio, definimos las funcionalidades y elaboramos especificaciones preliminares.'
    },
    {
      step: '02',
      title: 'DISEÑO',
      description: 'Desarrollo de la estructura, prototipado de páginas y aprobación del concepto de diseño.',
      duration: '3-5 días',
      details: 'Creamos un prototipo interactivo de la lógica del sitio y un concepto visual en Figma teniendo en cuenta la identidad de la marca.'
    },
    {
      step: '03',
      title: 'DESARROLLO',
      description: 'Maquetación limpia y adaptativa, programación de la lógica e integración con CMS/backend.',
      duration: '7-14 días',
      details: 'Escribimos código limpio y escalable, implementamos componentes dinámicos, conectamos bases de datos y API.'
    },
    {
      step: '04',
      title: 'PRUEBAS',
      description: 'Verificación de la visualización en todos los dispositivos, pruebas de carga y corrección de errores.',
      duration: '2-3 días',
      details: 'Probamos en pantallas móviles (iOS/Android), comprobamos la validación de formularios, la velocidad y la compatibilidad entre navegadores.'
    },
    {
      step: '05',
      title: 'LANZAMIENTO',
      description: 'Transferencia al hosting del cliente, conexión de dominio, certificado SSL y capacitación.',
      duration: '1 día',
      details: 'Desplegamos el proyecto en el servidor de producción, proporcionamos accesos y enseñamos a gestionar los contenidos.'
    },
  ] as ProcessStep[],
  technologies: technologiesData,
};

export const getPortfolioData = (lang: string) => {
  return lang === 'es' ? PORTFOLIO_DATA_ES : PORTFOLIO_DATA_IT;
};

// Fallback for non-refactored components
export const PORTFOLIO_DATA = PORTFOLIO_DATA_IT;
