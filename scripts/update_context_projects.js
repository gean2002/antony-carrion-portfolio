const fs = require('fs');
const path = require('path');

const contextPath = path.join(__dirname, '../src/context/LanguageContext.tsx');
let content = fs.readFileSync(contextPath, 'utf-8');

const itAdd = `
    'projects.allTitle': 'TUTTI I PROGETTI E CASI',
    'projects.allSub': 'Catalogo dei lavori completati nel 2023-2024.',
    'projects.allCat': 'Tutte',
    'projects.viewLive': 'VEDI LIVE',
`;

const enAdd = `
    'projects.allTitle': 'ALL PROJECTS AND CASES',
    'projects.allSub': 'Catalog of works completed in 2023-2024.',
    'projects.allCat': 'All',
    'projects.viewLive': 'VIEW LIVE',
`;

const esAdd = `
    'projects.allTitle': 'TODOS LOS PROYECTOS Y CASOS',
    'projects.allSub': 'Catálogo de trabajos completados en 2023-2024.',
    'projects.allCat': 'Todas',
    'projects.viewLive': 'VER EN VIVO',
`;

content = content.replace("'about.g4': 'Design Unico 100% (No template preconfezionati)',", "'about.g4': 'Design Unico 100% (No template preconfezionati)'," + itAdd);
content = content.replace("'about.g4': '100% Unique Design (No premade templates)',", "'about.g4': '100% Unique Design (No premade templates)'," + enAdd);
content = content.replace("'about.g4': 'Diseño 100% Único (Sin plantillas prefabricadas)',", "'about.g4': 'Diseño 100% Único (Sin plantillas prefabricadas)'," + esAdd);

fs.writeFileSync(contextPath, content, 'utf-8');
