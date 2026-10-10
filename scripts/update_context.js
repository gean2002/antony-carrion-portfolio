const fs = require('fs');
const path = require('path');

const contextPath = path.join(__dirname, '../src/context/LanguageContext.tsx');
let content = fs.readFileSync(contextPath, 'utf-8');

const itAdditions = `
    'about.p1': 'Ciao! Sono Antony Carrion, sviluppatore web e Shopify specialist con base in Italia.',
    'about.p2': 'Ho conseguito il diploma presso l\\'Istituto Superiore Ettore Majorana di Grugliasco, dove ho maturato una solida formazione tecnica, logica e analitica. Questa base accademica è stata il trampolino di lancio per dedicarmi con rigore allo sviluppo frontend, alla programmazione backend e alla creazione di architetture digitali scalabili.',
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
`;

const enAdditions = `
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
`;

const esAdditions = `
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
`;

content = content.replace("'received': 'È STATA RICEVUTA!'", "'received': 'È STATA RICEVUTA!',\n" + itAdditions);
content = content.replace("'received': 'HAS BEEN RECEIVED!'", "'received': 'HAS BEEN RECEIVED!',\n" + enAdditions);
content = content.replace("'received': '¡HA SIDO RECIBIDA!'", "'received': '¡HA SIDO RECIBIDA!',\n" + esAdditions);

fs.writeFileSync(contextPath, content, 'utf-8');
console.log('LanguageContext updated');
