const fs = require('fs');
const path = require('path');

const contextPath = path.join(__dirname, '../src/context/LanguageContext.tsx');
let content = fs.readFileSync(contextPath, 'utf-8');

const itAdd = `
    'about.whatYouGet': 'COSA OTTIENI ORDINANDO UN SITO:',
    'about.g1': 'Adattabilità per il 100% di schermi e telefoni',
    'about.g2': 'Ottimizzazione SEO base e meta-tag',
    'about.g3': 'Integrazione form, richieste e notifiche Telegram',
    'about.g4': 'Design Unico 100% (No template preconfezionati)',
`;

const enAdd = `
    'about.whatYouGet': 'WHAT YOU GET WHEN ORDERING A SITE:',
    'about.g1': '100% responsiveness for screens and phones',
    'about.g2': 'Basic SEO optimization and meta-tags',
    'about.g3': 'Forms, requests and Telegram notifications integration',
    'about.g4': '100% Unique Design (No premade templates)',
`;

const esAdd = `
    'about.whatYouGet': 'QUÉ OBTIENES AL ORDENAR UN SITIO:',
    'about.g1': 'Adaptabilidad para el 100% de pantallas y teléfonos',
    'about.g2': 'Optimización SEO básica y meta-etiquetas',
    'about.g3': 'Integración de formularios, solicitudes y notificaciones de Telegram',
    'about.g4': 'Diseño 100% Único (Sin plantillas prefabricadas)',
`;

content = content.replace("'about.f3Desc': 'Tempistiche chiare per ogni fase. Nessuna sparizione e rispetto delle scadenze concordate.',", "'about.f3Desc': 'Tempistiche chiare per ogni fase. Nessuna sparizione e rispetto delle scadenze concordate.'," + itAdd);
content = content.replace("'about.f3Desc': 'Clear timelines for each phase. No disappearances and respect of agreed deadlines.',", "'about.f3Desc': 'Clear timelines for each phase. No disappearances and respect of agreed deadlines.'," + enAdd);
content = content.replace("'about.f3Desc': 'Tiempos claros para cada fase. Sin desapariciones y cumplimiento de los plazos acordados.',", "'about.f3Desc': 'Tiempos claros para cada fase. Sin desapariciones y cumplimiento de los plazos acordados.'," + esAdd);

fs.writeFileSync(contextPath, content, 'utf-8');
