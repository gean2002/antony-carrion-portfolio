const fs = require('fs');
const path = require('path');

const contextPath = path.join(__dirname, '../src/context/LanguageContext.tsx');
let content = fs.readFileSync(contextPath, 'utf-8');

const itAdd = `
    'about.story': 'SCOPRI LA MIA STORIA',
    'about.openTo': 'Aperto a nuovi interessanti progetti commerciali',
    'about.discussBtn': 'DISCUTI IL TUO PROGETTO',
    'form.type1': 'Landing page',
    'form.type2': 'Negozio online',
    'form.type3': 'Sito aziendale',
`;

const enAdd = `
    'about.story': 'DISCOVER MY STORY',
    'about.openTo': 'Open to new interesting commercial projects',
    'about.discussBtn': 'DISCUSS YOUR PROJECT',
    'form.type1': 'Landing page',
    'form.type2': 'Online store',
    'form.type3': 'Corporate site',
`;

const esAdd = `
    'about.story': 'DESCUBRE MI HISTORIA',
    'about.openTo': 'Abierto a nuevos e interesantes proyectos comerciales',
    'about.discussBtn': 'DISCUTIR TU PROYECTO',
    'form.type1': 'Landing page',
    'form.type2': 'Tienda online',
    'form.type3': 'Sitio corporativo',
`;

content = content.replace("'about.g4': 'Design Unico 100% (No template preconfezionati)',", "'about.g4': 'Design Unico 100% (No template preconfezionati)'," + itAdd);
content = content.replace("'about.g4': '100% Unique Design (No premade templates)',", "'about.g4': '100% Unique Design (No premade templates)'," + enAdd);
content = content.replace("'about.g4': 'Diseño 100% Único (Sin plantillas prefabricadas)',", "'about.g4': 'Diseño 100% Único (Sin plantillas prefabricadas)'," + esAdd);

fs.writeFileSync(contextPath, content, 'utf-8');
