const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/AllProjectsModal.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace("TUTTI I PROGETTI E CASI", "{t('projects.allTitle')}");
content = content.replace("Catalogo dei lavori completati nel 2023-2024.", "{t('projects.allSub')}");
content = content.replace("Tutte", "{t('projects.allCat')}");
content = content.replace("VEDI LIVE", "{t('projects.viewLive')}");
// Wait, is "VEDI LIVE" in there? I'll just leave it replacing if found.

fs.writeFileSync(filePath, content, 'utf-8');
