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
  previewType: 'villa' | 'shop' | 'corp' | 'studio' | 'pietranova' | 'sushi' | 'chickencup' | 'olbia' | 'barber' | 'moretti';
  liveUrl: string;
  image?: string;
  filterGroup?: 'hospitality' | 'food' | 'services';
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
  whatsappUrl: `https://wa.me/393454184481?text=${encodeURIComponent('Ciao Antony! Ho visto il tuo portfolio e vorrei informazioni/preventivo per un nuovo progetto per la mia attività. Sei disponibile per parlarne?')}`,
  phone: '+39 345 418 4481',
  phoneUrl: 'tel:+393454184481',
  email: 'antonycarrion.dev@gmail.com',
  location: 'Torino / Remoto',
  github: 'https://github.com',
  vk: 'https://vk.com',
};

const contactsDataES = {
  ...contactsData,
  location: 'Turín / Remoto',
  whatsappUrl: `https://wa.me/393454184481?text=${encodeURIComponent('¡Hola Antony! Vi tu portfolio y quisiera información/presupuesto para un nuevo proyecto para mi negocio. ¿Estás disponible para hablar?')}`,
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
      category: 'RESIDENCE & LUXURY SUITES',
      title: 'CORTE PIETRANOVA',
      subtitle: 'Boutique residence con piscina a sfioro nel Salento (Gallipoli)',
      description: 'Piattaforma esclusiva per boutique residence a Sannicola (Gallipoli). Presentazione suite storiche con volte a stella, gallery fotografica immersiva, virtual tour e sistema di richiesta prenotazione diretta.',
      tags: ['Next.js 14', 'Tailwind CSS', 'Direct Booking', 'PageSpeed 98'],
      year: '2026',
      duration: '14 giorni',
      client: 'Pietranova Hospitality',
      results: '+65% di richieste dirette ricevute senza commissioni di intermediari',
      previewType: 'pietranova',
      liveUrl: 'https://corte-pietranova.vercel.app',
      image: '/project-pietranova.jpg',
      filterGroup: 'hospitality',
    },
    {
      id: 'p2',
      category: 'RISTORAZIONE & FOOD',
      title: 'Q SUSHI BAR',
      subtitle: 'Cucina giapponese contemporanea, Noodle Bar & Poke a Torino',
      description: 'Sito web moderno e dinamico con menu digitale interattivo, selezione ingredienti, allergeni chiari, prenotazione tavoli rapida e integrazione delivery.',
      tags: ['Frontend Creativo', 'Menu Digitale', 'Mobile First', 'Fast Load'],
      year: '2026',
      duration: '10 giorni',
      client: 'Q Sushi Bar Torino',
      results: '+45% di prenotazioni online e menu visualizzato da oltre 15.000 utenti/mese',
      previewType: 'sushi',
      liveUrl: 'https://q-sushi-bar.vercel.app',
      image: '/project-sushi.jpg',
      filterGroup: 'food',
    },
    {
      id: 'p3',
      category: 'FAST CASUAL & STREET FOOD',
      title: "CUPCUP'S CHICKEN",
      subtitle: 'Brand di pollo fritto premium e ordering online a Firenze',
      description: 'Piattaforma street food ad alto impatto visivo per il celebre locale in Via Nazionale a Firenze: visual menu accattivante, configuratore porzioni, takeaway e promozioni social.',
      tags: ['Brand Identity', 'Custom Cursor', 'High Conversion', 'Mobile First'],
      year: '2026',
      duration: '12 giorni',
      client: 'CupCup’s Chicken Firenze',
      results: 'Tasso di conversione mobile del 9.2% e raddoppio degli ordini da asporto',
      previewType: 'chickencup',
      liveUrl: 'https://chickencup-demo.vercel.app',
      image: '/project-chickencup.png',
      filterGroup: 'food',
    },
    {
      id: 'p4',
      category: 'AFFITTI TURISTICI DI LUSSO',
      title: 'OLBIA LUXURY STAYS',
      subtitle: 'Ville e attici di lusso a Olbia e in Costa Smeralda',
      description: 'Portale luxury per affitti vacanze d\'élite in Sardegna: cataloghi ville con piscina, filtri per zona e servizi, calcolatore preventivi e supporto multilingua per clientela internazionale.',
      tags: ['Next.js App Router', 'TypeScript', 'SEO Multilingua', 'Luxury UI'],
      year: '2026',
      duration: '18 giorni',
      client: 'Olbia Luxury Hospitality',
      results: 'Prima pagina Google per ricerche "luxury stays Olbia" e oltre 80 prenotazioni stagionali',
      previewType: 'olbia',
      liveUrl: 'https://olbia-luxury-stays.vercel.app',
      image: '/project-olbia.jpg',
      filterGroup: 'hospitality',
    },
    {
      id: 'p5',
      category: 'STUDIO DI DESIGN & GROOMING',
      title: 'JM BARBER CLUB',
      subtitle: 'Barbershop di lusso Mayfair style con prenotazione appuntamenti online',
      description: 'Web app dall\'estetica dark luxury con catalogo rituali di rasatura, selezione barbiere di fiducia, recensioni verificate e sincronizzazione calendario per appuntamenti 24/7.',
      tags: ['Next.js', 'Online Booking', 'Dark Aesthetic', 'Performance 99'],
      year: '2025',
      duration: '14 giorni',
      client: 'J.M Barber Club',
      results: 'Oltre il 75% degli appuntamenti fissati autonomamente dai clienti online',
      previewType: 'barber',
      liveUrl: 'https://demo-barberia-jm.vercel.app',
      image: '/project-barber-final.png',
      filterGroup: 'services',
    },
    {
      id: 'p6',
      category: 'STUDIO PROFESSIONALE & SALUTE',
      title: 'DOTT.SSA ELENA MORETTI',
      subtitle: 'Studio di Psicologia & Psicoterapia a Torino con primo consulto online',
      description: 'Sito web professionale, rassicurante e conformemente ottimizzato GDPR/privacy per studio clinico a Torino: presentazione ambiti di intervento, autovalutazione guidata e contatto rapido WhatsApp.',
      tags: ['Clean Design', 'SEO Locale Torino', 'GDPR Compliant', 'Accessibilità'],
      year: '2025',
      duration: '9 giorni',
      client: 'Studio Dott.ssa Moretti',
      results: 'Posizionamento top 3 a Torino e flusso costante di nuovi pazienti settimanali',
      previewType: 'moretti',
      liveUrl: 'https://dott-ssa-elena-moretti.vercel.app',
      image: '/project-corp.png',
      filterGroup: 'services',
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
      category: 'RESIDENCIA Y SUITES DE LUJO',
      title: 'CORTE PIETRANOVA',
      subtitle: 'Boutique residence con piscina infinita en Salento (Gallipoli)',
      description: 'Plataforma exclusiva para boutique residence en Sannicola (Gallipoli). Presentación de suites históricas, galería inmersiva, virtual tour y sistema de reservas directas sin comisiones.',
      tags: ['Next.js 14', 'Tailwind CSS', 'Reservas Directas', 'PageSpeed 98'],
      year: '2026',
      duration: '14 días',
      client: 'Pietranova Hospitality',
      results: '+65% de reservas directas obtenidas sin intermediarios',
      previewType: 'pietranova',
      liveUrl: 'https://corte-pietranova.vercel.app',
      image: '/project-pietranova.jpg',
      filterGroup: 'hospitality',
    },
    {
      id: 'p2',
      category: 'RESTAURANTE Y GASTRONOMÍA',
      title: 'Q SUSHI BAR',
      subtitle: 'Cocina japonesa contemporánea, Noodle Bar & Poke en Turín',
      description: 'Sitio web moderno y dinámico con carta digital interactiva, alérgenos claros, reserva inmediata de mesas e integración con pedidos.',
      tags: ['Frontend Creativo', 'Carta Digital', 'Mobile First', 'Carga Rápida'],
      year: '2026',
      duration: '10 días',
      client: 'Q Sushi Bar Torino',
      results: '+45% de reservas online y más de 15.000 visitas al menú al mes',
      previewType: 'sushi',
      liveUrl: 'https://q-sushi-bar.vercel.app',
      image: '/project-sushi.jpg',
      filterGroup: 'food',
    },
    {
      id: 'p3',
      category: 'FAST CASUAL Y STREET FOOD',
      title: "CUPCUP'S CHICKEN",
      subtitle: 'Marca de pollo frito premium y pedidos online en Florencia',
      description: 'Plataforma de street food de alto impacto visual para el local en Via Nazionale en Florencia: menú visual, configurador de raciones y pedidos para llevar.',
      tags: ['E-Commerce', 'Identidad Visual', 'Cursor Creativo', 'Alta Conversión'],
      year: '2026',
      duration: '12 días',
      client: 'CupCup’s Chicken Firenze',
      results: 'Tasa de conversión móvil del 9.2% y duplicación de pedidos para llevar',
      previewType: 'chickencup',
      liveUrl: 'https://chickencup-demo.vercel.app',
      image: '/project-chickencup.png',
      filterGroup: 'food',
    },
    {
      id: 'p4',
      category: 'ALQUILERES TURÍSTICOS DE LUJO',
      title: 'OLBIA LUXURY STAYS',
      subtitle: 'Villas y áticos exclusivos en Olbia y Costa Esmeralda',
      description: 'Portal de lujo para alquileres vacacionales en Cerdeña: catálogo de villas con piscina, filtros por zona y servicios, cotizador y soporte multilingüe.',
      tags: ['Next.js App Router', 'TypeScript', 'SEO Multilingüe', 'Luxury UI'],
      year: '2026',
      duration: '18 días',
      client: 'Olbia Luxury Hospitality',
      results: 'Primera página en Google para búsquedas de villas de lujo y más de 80 reservas',
      previewType: 'olbia',
      liveUrl: 'https://olbia-luxury-stays.vercel.app',
      image: '/project-olbia.jpg',
      filterGroup: 'hospitality',
    },
    {
      id: 'p5',
      category: 'ESTUDIO DE DISEÑO Y BARBERSHOP',
      title: 'JM BARBER CLUB',
      subtitle: 'Barbershop de lujo estilo Mayfair con citas online 24/7',
      description: 'Aplicación web con estética dark luxury con catálogo de rituales, elección de barbero, valoraciones reales y sincronización de agenda para citas online.',
      tags: ['Next.js', 'Reservas Online', 'Dark Aesthetic', 'Rendimiento 99'],
      year: '2025',
      duration: '14 días',
      client: 'J.M Barber Club',
      results: 'Más del 75% de las citas reservadas directamente por los clientes online',
      previewType: 'barber',
      liveUrl: 'https://demo-barberia-jm.vercel.app',
      image: '/project-barber-final.png',
      filterGroup: 'services',
    },
    {
      id: 'p6',
      category: 'ESTUDIO PROFESIONAL Y SALUD',
      title: 'DOTT.SSA ELENA MORETTI',
      subtitle: 'Gabinete de Psicología y Psicoterapia en Turín con primera cita online',
      description: 'Web médica profesional y adaptada a RGPD: presentación de áreas terapéuticas, autoevaluación guiada y contacto rápido por WhatsApp.',
      tags: ['Diseño Limpio', 'SEO Local Turín', 'Cumplimiento RGPD', 'Accesibilidad'],
      year: '2025',
      duration: '9 días',
      client: 'Studio Dott.ssa Moretti',
      results: 'Posicionamiento top 3 en Turín y flujo constante de nuevos pacientes semanales',
      previewType: 'moretti',
      liveUrl: 'https://dott-ssa-elena-moretti.vercel.app',
      image: '/project-corp.png',
      filterGroup: 'services',
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
