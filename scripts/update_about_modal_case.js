const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/AboutModal.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace("Formazione & Diploma", "{t('about.eduTitle')}");
content = content.replace("Istituto Superiore Ettore Majorana di Grugliasco", "{t('about.eduName')}");

// Also what about "Cosa ottieni ordinando un sito:"?
// I see this string in the images, let's add it to LanguageContext as well, but first check AboutModal.
content = content.replace("Cosa ottieni ordinando un sito:", "{t('about.whatYouGet')}");

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed AboutModal case');
