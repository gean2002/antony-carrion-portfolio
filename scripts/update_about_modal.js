const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/AboutModal.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace("BIOGRAFIA E FORMAZIONE", "{t('modal.bio')}");
content = content.replace("Ciao! Sono Antony Carrion, sviluppatore web e Shopify specialist con base in Italia.", "{t('about.p1')}");

content = content.replace(
  "Ho conseguito il diploma presso l'<strong className=\"text-white\">Istituto Superiore Ettore Majorana di Grugliasco</strong>, dove ho maturato una solida formazione tecnica, logica e analitica. Questa base accademica è stata il trampolino di lancio per dedicarmi con rigore allo sviluppo frontend, alla programmazione backend e alla creazione di architetture digitali scalabili.",
  "<span dangerouslySetInnerHTML={{__html: t('about.p2').replace('Istituto Superiore Ettore Majorana di Grugliasco', '<strong class=\"text-white\">Istituto Superiore Ettore Majorana di Grugliasco</strong>').replace('Instituto Superior Ettore Majorana de Grugliasco', '<strong class=\"text-white\">Instituto Superior Ettore Majorana de Grugliasco</strong>').replace('Ettore Majorana High School of Grugliasco', '<strong class=\"text-white\">Ettore Majorana High School of Grugliasco</strong>')}}></span>"
);

content = content.replace("Oggi mi dedico alla realizzazione di soluzioni web chiavi in mano: dagli store e-commerce performanti su Shopify a landing page e siti corporate ad alto impatto emotivo e di conversione.", "{t('about.p3')}");

content = content.replace("FORMAZIONE & DIPLOMA", "{t('about.eduTitle')}");
content = content.replace("ISTITUTO SUPERIORE ETTORE MAJORANA DI GRUGLIASCO", "{t('about.eduName')}");
content = content.replace("Percorso di istruzione superiore tecnica con focus su logica, metodologie progettuali e informatica. Un bagaglio formativo che mi permette di approcciare ogni sfida di sviluppo web con precisione ingegneristica, velocità e problem solving strutturato.", "{t('about.eduDesc')}");

content = content.replace("CODICE PULITO", "{t('about.f1Title')}");
content = content.replace("Impaginazione semantica, separazione della logica, assenza di librerie pesanti inutili.", "{t('about.f1Desc')}");

content = content.replace("VELOCITÀ & SEO", "{t('about.f2Title')}");
content = content.replace("I siti si caricano in meno di 1.2 secondi. Alti punteggi su Google PageSpeed (95+).", "{t('about.f2Desc')}");

content = content.replace("SCADENZE 100%", "{t('about.f3Title')}");
content = content.replace("Tempistiche chiare per ogni fase. Nessuna sparizione e rispetto delle scadenze concordate.", "{t('about.f3Desc')}");

fs.writeFileSync(filePath, content, 'utf-8');
console.log('AboutModal updated');
