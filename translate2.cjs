const fs = require('fs');
const path = require('path');

const translations = {
  // Comments
  "ОБО МНЕ": "CHI SONO",
  "УСЛУГИ": "SERVIZI",
  
  // AboutAndServices.tsx
  "Меня зовут Нищаков Максим": "Mi chiamo Maxim Nishtchakov",
  "я занимаюсь веб-разработкой и созданием сайтов разной сложности.": "mi occupo di sviluppo web e creazione di siti di varie complessità.",
  "Помогаю бизнесу и людям выделиться в интернете с помощью качественных и современных решений.": "Aiuto aziende e persone a distinguersi su internet con soluzioni moderne e di alta qualità.",
  "От продуманной архитектуры до мельчайших микро-анимаций: каждый пиксель работает на повышение конверсии.": "Dall'architettura ben pensata alle micro-animazioni più piccole: ogni pixel lavora per aumentare la conversione.",
  "БОЛЬШЕ ОБО МНЕ": "SCOPRI DI PIÙ",
  
  // AboutModal.tsx
  "БИОГРАФИЯ И ПРИНЦИПЫ": "BIOGRAFIA E PRINCIPI",
  "НИЩАКОВ МАКСИМ": "MAXIM NISHTCHAKOV",
  "Привет! Я Максим, веб-разработчик и UI/UX специалист из Москвы.": "Ciao! Sono Maxim, sviluppatore web e specialista UI/UX di Mosca.",
  "Мой путь в разработке начался более 3 лет назад с увлечения созданием красивых интерфейсов и сложной верстки. Сегодня я создаю сайты под ключ: от интерактивных продающих лендингов до полноценных интернет-магазинов и корпоративных порталов.": "Il mio percorso nello sviluppo è iniziato più di 3 anni fa con la passione per la creazione di belle interfacce e layout complessi. Oggi creo siti chiavi in mano: dalle landing page interattive ai negozi online completi e portali aziendali.",
  "В своей работе я не использую шаблонные решения «на коленке». Каждый проект проектируется с глубоким пониманием бизнес-задач клиента, аудитории и психологических триггеров конверсии.": "Nel mio lavoro non uso soluzioni standard. Ogni progetto è progettato con una profonda comprensione degli obiettivi di business del cliente, del pubblico e dei trigger psicologici della conversione.",
  "Чистый код": "Codice pulito",
  "Семантическая верстка, разделение логики, отсутствие лишних тяжелых библиотек.": "Impaginazione semantica, separazione della logica, assenza di librerie pesanti inutili.",
  "Скорость & SEO": "Velocità & SEO",
  "Сайты загружаются менее чем за 1.2 секунды. Высокие показатели Google PageSpeed (95+).": "I siti si caricano in meno di 1.2 secondi. Alti punteggi su Google PageSpeed (95+).",
  "Дедлайны 100%": "Scadenze 100%",
  "Понятный тайминг по этапам. Никаких пропаж из связи и срывов согласованных сроков.": "Tempistiche chiare per ogni fase. Nessuna sparizione e rispetto delle scadenze concordate.",
  "Что вы получаете при заказе сайта:": "Cosa ottieni ordinando un sito:",
  "Адаптивность под 100% экранов и телефонов": "Adattabilità per il 100% di schermi e telefoni",
  "Базовая SEO-оптимизация и мета-теги": "Ottimizzazione SEO base e meta-tag",
  "Подключение форм, заявок и Telegram-уведомлений": "Integrazione form, richieste e notifiche Telegram",
  "30 дней бесплатной поддержки после сдачи": "30 giorni di supporto tecnico gratuito dopo la consegna",
  "Открыт к новым интересным коммерческим проектам": "Aperto a nuovi interessanti progetti commerciali",
  "ОБСУДИТЬ ВАШ ПРОЕКТ": "DISCUTI IL TUO PROGETTO",

  // AllProjectsModal.tsx
  "Все проекты": "Tutti i progetti",
  "Интернет-Магазины": "Negozi online",
  "Корпоративные": "Aziendali",
  
  // Remaining Navbar and ContactModal
  "или +7...": "o numero di telefono...",
  "кликов": "click"
};

function translateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let originalContent = content;
  
  for (const [ru, it] of Object.entries(translations)) {
    content = content.split(ru).join(it);
  }

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Translated:', filePath);
  }
}

function walk(dir) {
  let files = fs.readdirSync(dir);
  for (let file of files) {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      translateFile(fullPath);
    }
  }
}

walk('src');
