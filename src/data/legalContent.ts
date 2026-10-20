import { Language } from '../context/LanguageContext';

export interface LegalSection {
  title: string;
  body: string[];
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: LegalSection[];
}

export const LEGAL_LAST_UPDATE = '20/10/2026';

const OWNER_EMAIL = 'antonycarrion.dev@gmail.com';

const legal: Record<Language, { privacy: LegalDoc; cookies: LegalDoc }> = {
  it: {
    privacy: {
      title: 'Informativa Privacy',
      intro:
        'Informativa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato dal D.Lgs. 101/2018, per gli utenti che visitano antonycarrion.com.',
      sections: [
        {
          title: '1. Titolare del trattamento',
          body: [
            `Antony Carrion — Web Designer, Torino (Italia). Email: ${OWNER_EMAIL}. Telefono/WhatsApp: +39 345 418 4481.`,
          ],
        },
        {
          title: '2. Dati trattati',
          body: [
            'Dati forniti volontariamente tramite il modulo di contatto: nome o azienda, numero di telefono/WhatsApp, tipo di progetto, budget indicativo ed eventuale messaggio.',
            'Dati di navigazione: i server di hosting registrano automaticamente dati tecnici (indirizzo IP, tipo di browser, data e ora della richiesta) necessari al funzionamento e alla sicurezza del sito.',
            'Statistiche anonime: solo previo consenso, dati aggregati e non identificativi sulle visite (pagine viste, paese, tipo di dispositivo).',
          ],
        },
        {
          title: '3. Finalità e base giuridica',
          body: [
            'Rispondere alle richieste di contatto e preparare preventivi — esecuzione di misure precontrattuali su richiesta dell\'interessato (art. 6.1.b GDPR) e consenso (art. 6.1.a).',
            'Garantire la sicurezza del sito e prevenire abusi, spam e attacchi informatici — legittimo interesse del titolare (art. 6.1.f).',
            'Statistiche anonime di utilizzo — consenso (art. 6.1.a), revocabile in qualsiasi momento.',
          ],
        },
        {
          title: '4. Destinatari e responsabili del trattamento',
          body: [
            'Vercel Inc. (USA) — hosting del sito e statistiche anonime (Vercel Web Analytics).',
            'FormSubmit (formsubmit.co) — servizio di inoltro via email dei messaggi inviati tramite il modulo di contatto.',
            'Google LLC — casella email Gmail su cui vengono ricevute le richieste.',
            'I dati non vengono venduti né ceduti a terzi per finalità di marketing.',
          ],
        },
        {
          title: '5. Trasferimento extra UE',
          body: [
            'Alcuni fornitori hanno sede negli Stati Uniti. Il trasferimento avviene sulla base dell\'EU-U.S. Data Privacy Framework e/o delle Clausole Contrattuali Standard approvate dalla Commissione Europea (artt. 45-46 GDPR).',
          ],
        },
        {
          title: '6. Conservazione',
          body: [
            'I dati delle richieste di contatto sono conservati per il tempo necessario a gestire la richiesta e, in caso di mancata collaborazione, per un massimo di 24 mesi. I log tecnici del server sono conservati per il periodo stabilito dal fornitore di hosting, di norma non oltre 30 giorni.',
          ],
        },
        {
          title: '7. Natura del conferimento',
          body: [
            'Il conferimento dei dati tramite il modulo è facoltativo, ma senza nome e recapito non è possibile rispondere alla richiesta.',
          ],
        },
        {
          title: '8. Diritti dell\'interessato',
          body: [
            'Puoi in qualsiasi momento chiedere l\'accesso, la rettifica, la cancellazione, la limitazione, la portabilità dei tuoi dati, opporti al trattamento e revocare il consenso (artt. 15-22 GDPR), scrivendo a ' +
              OWNER_EMAIL +
              '.',
            'Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).',
          ],
        },
        {
          title: '9. Sicurezza',
          body: [
            'Il sito è servito esclusivamente tramite connessione cifrata HTTPS (TLS) e adotta misure tecniche di protezione: Content Security Policy, protezione da clickjacking, filtri anti-spam sul modulo e limitazione degli invii.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      intro:
        'Questa pagina descrive i cookie e le tecnologie di memorizzazione locale utilizzate da antonycarrion.com, in conformità al Provvedimento del Garante Privacy del 10 giugno 2021 e alla Direttiva ePrivacy.',
      sections: [
        {
          title: '1. Cosa sono i cookie',
          body: [
            'I cookie e le tecnologie simili (come il localStorage del browser) sono piccoli file o dati salvati sul tuo dispositivo che permettono al sito di ricordare informazioni tra una visita e l\'altra.',
          ],
        },
        {
          title: '2. Strumenti tecnici necessari (sempre attivi)',
          body: [
            'app_lang — memorizza la lingua scelta (IT/ES). Durata: persistente fino alla cancellazione.',
            'ac_cookie_consent — memorizza le tue scelte sui cookie. Durata: 6 mesi.',
            'ac_last_submit — impedisce l\'invio ripetuto del modulo (protezione anti-spam). Durata: persistente, nessun dato personale.',
            'Questi strumenti non richiedono consenso perché strettamente necessari al funzionamento del servizio richiesto.',
          ],
        },
        {
          title: '3. Statistiche (solo con consenso)',
          body: [
            'Vercel Web Analytics — fornitore: Vercel Inc. Raccoglie in forma anonima e aggregata dati come pagine visitate, paese e tipo di dispositivo. Non utilizza cookie e non consente di identificare l\'utente. Viene attivato solo se scegli "Accetta tutti" o abiliti la categoria Statistiche.',
          ],
        },
        {
          title: '4. Cookie di profilazione e pubblicità',
          body: [
            'Questo sito NON utilizza cookie di profilazione, pubblicitari o di tracciamento di terze parti, né pixel di social network.',
          ],
        },
        {
          title: '5. Link esterni',
          body: [
            'Cliccando sui pulsanti WhatsApp o Telegram verrai indirizzato a servizi esterni che applicano le proprie privacy e cookie policy.',
          ],
        },
        {
          title: '6. Come gestire o revocare il consenso',
          body: [
            'Puoi modificare le tue scelte in qualsiasi momento cliccando su "Preferenze cookie" in fondo alla pagina. Puoi anche cancellare i dati memorizzati dalle impostazioni del tuo browser.',
          ],
        },
      ],
    },
  },
  es: {
    privacy: {
      title: 'Política de Privacidad',
      intro:
        'Información conforme a los arts. 13 y 14 del Reglamento (UE) 2016/679 (RGPD) para los usuarios que visitan antonycarrion.com.',
      sections: [
        {
          title: '1. Responsable del tratamiento',
          body: [
            `Antony Carrion — Web Designer, Turín (Italia). Email: ${OWNER_EMAIL}. Teléfono/WhatsApp: +39 345 418 4481.`,
          ],
        },
        {
          title: '2. Datos tratados',
          body: [
            'Datos facilitados voluntariamente a través del formulario de contacto: nombre o empresa, número de teléfono/WhatsApp, tipo de proyecto, presupuesto orientativo y mensaje opcional.',
            'Datos de navegación: los servidores de alojamiento registran automáticamente datos técnicos (dirección IP, tipo de navegador, fecha y hora de la solicitud) necesarios para el funcionamiento y la seguridad del sitio.',
            'Estadísticas anónimas: solo con consentimiento previo, datos agregados y no identificativos sobre las visitas (páginas vistas, país, tipo de dispositivo).',
          ],
        },
        {
          title: '3. Finalidades y base jurídica',
          body: [
            'Responder a las solicitudes de contacto y preparar presupuestos — aplicación de medidas precontractuales a petición del interesado (art. 6.1.b RGPD) y consentimiento (art. 6.1.a).',
            'Garantizar la seguridad del sitio y prevenir abusos, spam y ataques informáticos — interés legítimo del responsable (art. 6.1.f).',
            'Estadísticas anónimas de uso — consentimiento (art. 6.1.a), revocable en cualquier momento.',
          ],
        },
        {
          title: '4. Destinatarios y encargados del tratamiento',
          body: [
            'Vercel Inc. (EE. UU.) — alojamiento del sitio y estadísticas anónimas (Vercel Web Analytics).',
            'FormSubmit (formsubmit.co) — servicio de reenvío por email de los mensajes enviados mediante el formulario.',
            'Google LLC — buzón de correo Gmail en el que se reciben las solicitudes.',
            'Los datos no se venden ni se ceden a terceros con fines de marketing.',
          ],
        },
        {
          title: '5. Transferencias fuera de la UE',
          body: [
            'Algunos proveedores tienen sede en Estados Unidos. La transferencia se basa en el EU-U.S. Data Privacy Framework y/o en las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea (arts. 45-46 RGPD).',
          ],
        },
        {
          title: '6. Conservación',
          body: [
            'Los datos de las solicitudes de contacto se conservan el tiempo necesario para gestionarlas y, si no se inicia una colaboración, durante un máximo de 24 meses. Los registros técnicos del servidor se conservan durante el periodo establecido por el proveedor de alojamiento, normalmente no más de 30 días.',
          ],
        },
        {
          title: '7. Carácter de la comunicación de datos',
          body: [
            'Facilitar los datos a través del formulario es voluntario, pero sin nombre y contacto no es posible responder a la solicitud.',
          ],
        },
        {
          title: '8. Derechos del interesado',
          body: [
            'Puedes solicitar en cualquier momento el acceso, la rectificación, la supresión, la limitación, la portabilidad de tus datos, oponerte al tratamiento y retirar el consentimiento (arts. 15-22 RGPD), escribiendo a ' +
              OWNER_EMAIL +
              '.',
            'También tienes derecho a presentar una reclamación ante la autoridad de control competente (en Italia: Garante per la protezione dei dati personali; en España: AEPD, www.aepd.es).',
          ],
        },
        {
          title: '9. Seguridad',
          body: [
            'El sitio se sirve exclusivamente mediante conexión cifrada HTTPS (TLS) y aplica medidas técnicas de protección: Content Security Policy, protección contra clickjacking, filtros anti-spam en el formulario y limitación de envíos.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      intro:
        'Esta página describe las cookies y tecnologías de almacenamiento local que utiliza antonycarrion.com, de acuerdo con la Directiva ePrivacy y el RGPD.',
      sections: [
        {
          title: '1. Qué son las cookies',
          body: [
            'Las cookies y tecnologías similares (como el localStorage del navegador) son pequeños archivos o datos guardados en tu dispositivo que permiten al sitio recordar información entre visitas.',
          ],
        },
        {
          title: '2. Herramientas técnicas necesarias (siempre activas)',
          body: [
            'app_lang — guarda el idioma elegido (IT/ES). Duración: persistente hasta su eliminación.',
            'ac_cookie_consent — guarda tus elecciones sobre cookies. Duración: 6 meses.',
            'ac_last_submit — evita el envío repetido del formulario (protección anti-spam). Duración: persistente, sin datos personales.',
            'Estas herramientas no requieren consentimiento porque son estrictamente necesarias para el servicio solicitado.',
          ],
        },
        {
          title: '3. Estadísticas (solo con consentimiento)',
          body: [
            'Vercel Web Analytics — proveedor: Vercel Inc. Recopila de forma anónima y agregada datos como páginas visitadas, país y tipo de dispositivo. No utiliza cookies y no permite identificar al usuario. Solo se activa si eliges "Aceptar todas" o habilitas la categoría Estadísticas.',
          ],
        },
        {
          title: '4. Cookies de perfilado y publicidad',
          body: [
            'Este sitio NO utiliza cookies de perfilado, publicitarias ni de seguimiento de terceros, ni píxeles de redes sociales.',
          ],
        },
        {
          title: '5. Enlaces externos',
          body: [
            'Al pulsar los botones de WhatsApp o Telegram serás redirigido a servicios externos que aplican sus propias políticas de privacidad y cookies.',
          ],
        },
        {
          title: '6. Cómo gestionar o retirar el consentimiento',
          body: [
            'Puedes modificar tus elecciones en cualquier momento pulsando "Preferencias de cookies" al final de la página. También puedes borrar los datos almacenados desde la configuración de tu navegador.',
          ],
        },
      ],
    },
  },
};

export const getLegalContent = (lang: Language) => legal[lang];
