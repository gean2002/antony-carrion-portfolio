import { OWNER_EMAIL } from './portfolioData';

export interface LegalTabContent {
  title: string;
  intro: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
}

export interface LegalContent {
  privacy: LegalTabContent;
  cookies: LegalTabContent;
}

export const LEGAL_CONTENT: Record<'it' | 'es', LegalContent> = {
  it: {
    privacy: {
      title: 'Informativa sulla Privacy',
      intro:
        'Informativa resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) a coloro che interagiscono con il sito web antonycarrion.com.',
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
            'Dati forniti volontariamente tramite il modulo di contatto: nome o azienda, numero di telefono/WhatsApp, tipo di progetto ed eventuale messaggio.',
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
          title: '6. Periodo di conservazione',
          body: [
            'I messaggi di contatto e i relativi dati sono conservati per il tempo strettamente necessario a gestire la richiesta o la trattativa commerciale (massimo 24 mesi dall\'ultimo contatto in assenza di rapporto contrattuale).',
            'I log tecnici di navigazione sono conservati per un massimo di 30 giorni per finalità di sicurezza.',
          ],
        },
        {
          title: '7. Diritti dell\'interessato',
          body: [
            'Ai sensi degli artt. 15-22 del GDPR hai il diritto di accedere ai tuoi dati personali, chiederne la rettifica o la cancellazione, la limitazione del trattamento, la portabilità, nonché di opporti al loro trattamento.',
            `Per esercitare i tuoi diritti puoi scrivere in qualsiasi momento a: ${OWNER_EMAIL}.`,
            'Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).',
          ],
        },
        {
          title: '8. Natura del conferimento',
          body: [
            'Il conferimento dei dati nel modulo di contatto è facoltativo ma necessario per ricevere risposta alla richiesta. Il mancato conferimento rende impossibile ricontattarti.',
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
            'Cliccando sul pulsante WhatsApp verrai indirizzato a un servizio esterno che applica le proprie privacy e cookie policy.',
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
            'Datos facilitados voluntariamente a través del formulario de contacto: nombre o empresa, número de teléfono/WhatsApp, tipo de proyecto y mensaje opcional.',
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
          title: '5. Transferencias internacionales',
          body: [
            'Algunos proveedores tienen su sede en Estados Unidos. La transferencia se realiza bajo el EU-U.S. Data Privacy Framework y/o las Cláusulas Contractuales Tipo aprobadas por la Comisión Europea (arts. 45-46 RGPD).',
          ],
        },
        {
          title: '6. Plazo de conservación',
          body: [
            'Los mensajes y datos asociados se conservan durante el tiempo estrictamente necesario para gestionar la solicitud o negociación comercial (máximo 24 meses desde el último contacto si no media relación contractual).',
            'Los registros técnicos de navegación se conservan un máximo de 30 días con fines de seguridad.',
          ],
        },
        {
          title: '7. Derechos del usuario',
          body: [
            'Conforme a los arts. 15-22 del RGPD tienes derecho de acceso, rectificación, supresión, limitación, portabilidad y oposición.',
            `Puedes ejercer tus derechos escribiendo en cualquier momento a: ${OWNER_EMAIL}.`,
            'También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) o la autoridad de control de tu país.',
          ],
        },
        {
          title: '8. Carácter obligatorio del suministro de datos',
          body: [
            'Completar el formulario es voluntario pero indispensable para responder a tu consulta. Sin estos datos no será posible ponernos en contacto contigo.',
          ],
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      intro:
        'Esta página describe las cookies y tecnologías de almacenamiento local utilizadas por antonycarrion.com, conforme a la normativa europea de privacidad (Directiva ePrivacy y RGPD).',
      sections: [
        {
          title: '1. Qué son las cookies',
          body: [
            'Las cookies y tecnologías similares (como el localStorage del navegador) son pequeños ficheros que se guardan en tu dispositivo para recordar información entre visitas.',
          ],
        },
        {
          title: '2. Herramientas técnicas necesarias (siempre activas)',
          body: [
            'app_lang — guarda el idioma elegido (IT/ES). Duración: persistente hasta su borrado.',
            'ac_cookie_consent — guarda tus preferencias de cookies. Duración: 6 meses.',
            'ac_last_submit — evita el envío duplicado del formulario (protección anti-spam). Duración: persistente, sin datos personales.',
            'Estas herramientas no requieren consentimiento previo por ser estrictamente necesarias para el servicio solicitado.',
          ],
        },
        {
          title: '3. Estadísticas (solo con consentimiento)',
          body: [
            'Vercel Web Analytics — proveedor: Vercel Inc. Recopila de forma anónima y agregada datos como páginas vistas, país y tipo de dispositivo. No utiliza cookies ni identifica al usuario. Solo se activa si eliges "Aceptar todo" o habilitas la categoría Estadísticas.',
          ],
        },
        {
          title: '4. Cookies de publicidad o seguimiento',
          body: [
            'Este sitio NO utiliza cookies publicitarias, de seguimiento ni píxeles de redes sociales.',
          ],
        },
        {
          title: '5. Enlaces externos',
          body: [
            'Al hacer clic en el botón de WhatsApp serás redirigido a una plataforma externa con sus propias políticas de privacidad y cookies.',
          ],
        },
        {
          title: '6. Cómo gestionar o retirar el consentimiento',
          body: [
            'Puedes modificar tus preferencias en cualquier momento haciendo clic en "Preferencias de cookies" al pie de página, o borrando los datos de navegación en tu navegador.',
          ],
        },
      ],
    },
  },
};
