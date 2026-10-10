const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/AboutModal.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace("Codice pulito", "{t('about.f1Title')}");
content = content.replace("Velocità & SEO", "{t('about.f2Title')}");
content = content.replace("Scadenze 100%", "{t('about.f3Title')}");

content = content.replace("Cosa ottieni ordinando un sito:", "{t('about.whatYouGet')}");
content = content.replace("Adattabilità per il 100% di schermi e telefoni", "{t('about.g1')}");
content = content.replace("Ottimizzazione SEO base e meta-tag", "{t('about.g2')}");
content = content.replace("Integrazione form, richieste e notifiche Telegram", "{t('about.g3')}");
content = content.replace("Design Unico 100% (No template preconfezionati)", "{t('about.g4')}");

fs.writeFileSync(filePath, content, 'utf-8');
