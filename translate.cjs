const fs = require('fs');
const path = require('path');

const translations = {
  // AllProjectsModal.tsx
  "ДИЗАЙН-СТУДИЯ": "STUDIO DI DESIGN",
  "Дизайн-Студии": "Studio di Design",
  "ВСЕ ПРОЕКТЫ И КЕЙСЫ": "TUTTI I PROGETTI E CASI",
  "Каталог выполненных работ за 2023–2024 гг.": "Catalogo dei lavori completati nel 2023-2024.",
  "Закрыть": "Chiudi",

  // ContactModal.tsx
  "Лендинг пейдж": "Landing page",
  "Интернет-магазин": "Negozio online",
  "Корпоративный сайт": "Sito aziendale",
  "Верстка по макету": "Impaginazione da mockup",
  "Доработка / Оптимизация": "Miglioramento / Ottimizzazione",
  "до 50 000 ₽": "fino a 50.000 ₽",
  "Срочно (до 7 дней)": "Urgente (fino a 7 giorni)",
  "2–3 недели": "2-3 settimane",
  "1 месяц": "1 mese",
  "Обсуждается": "Da discutere",
  "ОБСУДИТЬ ПРОЕКТ": "DISCUTI IL PROGETTO",
  "Заполните бриф или напишите напрямую в Telegram": "Compila il brief o scrivi direttamente su Telegram",
  "СПАСИБО, {name || 'ВАША ЗАЯВКА'} ПРИНЯТА!": "GRAZIE, {name || 'LA TUA RICHIESTA'} È STATA RICEVUTA!",
  "СПАСИБО": "GRAZIE",
  "ВАША ЗАЯВКА": "LA TUA RICHIESTA",
  "ПРИНЯТА!": "È STATA RICEVUTA!",
  "Максим свяжется с вами в течение 30 минут для уточнения деталей и расчета сметы.": "Maxim ti contatterà entro 30 minuti per chiarire i dettagli e calcolare un preventivo.",
  "`Здравствуйте, Максим! Я отправил заявку на проект \"${projectType}\". Мой контакт: ${contact}`": "`Ciao, Maxim! Ho inviato una richiesta per il progetto \"${projectType}\". Il mio contatto: ${contact}`",
  "НАПИСАТЬ В TELEGRAM ПРЯМО СЕЙЧАС": "SCRIVI SU TELEGRAM ADESSO",
  "ЗАКРЫТЬ": "CHIUDI",
  "1. Тип веб-проекта:": "1. Tipo di progetto web:",
  "2. Ориентировочный бюджет:": "2. Budget stimato:",
  "3. Желаемые сроки запуска:": "3. Tempistiche di lancio desiderate:",
  "Ваше имя:": "Il tuo nome:",
  "Александр": "Alessandro",
  "Telegram или телефон:": "Telegram o telefono:",
  "Кратко о задаче (или ссылка на макет / референсы):": "Breve descrizione del compito (o link al mockup / riferimenti):",
  "Нужен сайт для строительной компании с калькулятором стоимости...": "Ho bisogno di un sito per un'azienda di costruzioni con un calcolatore dei costi...",
  "Гарантирую соблюдение дедлайна, чистый код и бесплатную 30-дневную техподдержку после релиза.": "Garantisco il rispetto delle scadenze, codice pulito e 30 giorni di supporto tecnico gratuito dopo il rilascio.",
  "ОТПРАВИТЬ ЗАЯВКУ НА РАСЧЕТ": "INVIA LA RICHIESTA DI PREVENTIVO",

  // ContactsSection.tsx
  "КОНТАКТЫ": "CONTATTI",
  "Копировать": "Copia",
  "Открыть": "Apri",
  "Город": "Città",
  "ЗАПОЛНИТЬ БРИФ / ОБСУДИТЬ САЙТ": "COMPILA IL BRIEF / DISCUTI IL SITO",
  "СОЗДАЮ САЙТЫ, КОТОРЫЕ РАБОТАЮТ НА ВАШ БИЗНЕС": "CREO SITI CHE LAVORANO PER IL TUO BUSINESS",
  "СОЗДАЮ САЙТЫ, КОТОРЫЕ РАБОТАЮТ": "CREO SITI CHE LAVORANO",
  "НА ВАШ БИЗНЕС": "PER IL TUO BUSINESS",
  "От индивидуального дизайна до стабильного хостинга и технического сопровождения": "Dal design individuale all'hosting stabile e supporto tecnico",

  // Footer.tsx
  "Все права защищены.": "Tutti i diritti riservati.",
  "НАВЕРХ": "TORNA SU",
  "ВЕБ-РАЗРАБОТКА": "SVILUPPO WEB",

  // HeroSection.tsx
  "ОБСУДИТЬ ПРОЕКТ": "DISCUTI IL PROGETTO",
  "ПОРТФОЛИО": "PORTFOLIO",

  // ProcessSection.tsx
  "ЭТАПЫ РАБОТЫ": "FASI DI LAVORO",
  "Срок:": "Durata:",
  "ПОДРОБНЕЕ ОБ ЭТАПЕ:": "MAGGIORI DETTAGLI SULLA FASE:",
  "Ориентировочное время:": "Tempo stimato:",

  // ProjectModal.tsx
  "Интерактивный предпросмотр:": "Anteprima interattiva:",
  "Десктоп": "Desktop",
  "Мобильный": "Mobile",
  "Заказчик:": "Cliente:",
  "Год:": "Anno:",
  "Результат:": "Risultato:",
  "О проекте и задачах:": "Sul progetto e obiettivi:",
  "Использованный стек технологий:": "Stack tecnologico utilizzato:",
  "Хотите похожий проект для вашей сферы?": "Vuoi un progetto simile per il tuo settore?",
  "ОБСУДИТЬ ПОДОБНЫЙ САЙТ": "DISCUTI UN SITO SIMILE",

  // ProjectsSection.tsx
  "МОИ ПРОЕКТЫ": "I MIEI PROGETTI",
  "СМОТРЕТЬ ВСЕ": "VEDI TUTTI",
  "КЕЙС": "CASO",

  // TechAndCtaSection.tsx
  "ТЕХНОЛОГИИ": "TECNOLOGIE",
  "Стек: Frontend + Backend + CMS": "Stack: Frontend + Backend + CMS",
  "3+ года практики": "3+ anni di pratica",
  "ГОТОВЫЙ ПРОЕКТ НАЧИНАЕТСЯ ЗДЕСЬ": "IL PROGETTO PRONTO INIZIA QUI",
  "ГОТОВЫЙ ПРОЕКТ": "IL PROGETTO PRONTO",
  "НАЧИНАЕТСЯ": "INIZIA",
  "ЗДЕСЬ": "QUI",
  "Обсудим вашу идею и превратим её в эффективное веб-решение": "Discuteremo la tua idea e la trasformeremo in una soluzione web efficace",
  "НАПИСАТЬ МНЕ": "SCRIVIMI",
  
  // Navbar.tsx
  "На главную": "Alla Home",
  "Выключить звук": "Disattiva audio",
  "Включить звук": "Attiva audio",
  "Выключить звук кликов": "Disattiva audio click",
  "Включить звук кликов": "Attiva audio click",
  "СВЯЗЬ": "CONTATTO",
  "Меню навигации": "Menu di navigazione"
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
