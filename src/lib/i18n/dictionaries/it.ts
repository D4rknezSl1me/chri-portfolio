import type { Dictionary } from './en'

export const it: Dictionary = {
  brand: 'Christian Cangelli',
  nav: { work: 'Progetti', skills: 'Competenze', vision: 'Visione', contact: 'Contatti', resume: 'CV' },

  hero: {
    role: 'Sviluppatore software oggi · Ingegnere di primo livello per scelta · Fondatore per vocazione',
    headline: 'Creo software che arriva in produzione, e sto costruendo qualcosa di mio.',
    description:
      "Creo software che arriva in produzione. Mi sto affinando fino a diventare un ingegnere di primo livello e sto costruendo un'azienda tutta mia. Ecco le prove, e la visione.",
    ctaWork: 'Guarda i miei progetti',
    ctaContact: 'Mettiti in contatto',
    ctaResume: 'Vedi il CV →',
  },

  stats: {
    items: [
      'Prodotti progettati e realizzati',
      'Prodotti KinAI, full-stack',
      "Gestiti dall'inizio alla fine, self-hosted",
      'Valutazione degli header di sicurezza',
    ],
    trustBefore: 'In produzione con i club della ',
    trustEmphasis: 'Serie A e Serie B',
    trustAfter: ' italiana.',
  },

  work: {
    eyebrow: 'Progetti selezionati',
    title: 'Cose che ho costruito',
    roleLabel: 'Ruolo:',
    outcomeLabel: 'Risultato:',
    inProduction: 'In produzione',
    live: 'Sito →',
    code: 'Codice →',
  },

  projects: {
    kinai: {
      title: 'KinAI',
      summary:
        "Una piattaforma di IA che aiuta i club di calcio professionistici a prendere decisioni più intelligenti e basate sui dati. In produzione con squadre di Serie A e Serie B in Italia. Lavoro full-stack sui suoi tre prodotti: un portale web, un motore centrale e un'applicazione desktop. Prima e unica nel suo genere nella sua categoria.",
      role: 'Sviluppatore full-stack',
      outcome: 'Adottata da club di Serie A e Serie B, prima e unica nella sua categoria.',
    },
    'aperture-nas': {
      title: 'Aperture NAS: Cassaforte IA Privata',
      summary:
        'Un NAS self-hosted con un cervello IA integrato: ricerca semantica in linguaggio naturale tra le tue foto e i tuoi file (“auto blu sulla spiaggia”), tagging e indicizzazione automatici, tutto elaborato in locale, senza cloud e senza esposizione di dati a terzi.',
      role: 'Architettura e full-stack',
      outcome: 'Ricerca semantica di immagini on-premise che tiene ogni byte sul tuo hardware.',
    },
    'naked-glados': {
      title: 'Naked-GLaDOS: Piattaforma Self-Hosted',
      summary:
        "Una piattaforma di microservizi in produzione, guidata da GitOps, sul mio cluster k3s: un'API di autenticazione/core condivisa (JWT + Passkey), diverse web app e pannelli di controllo per server di gioco, tutto riconciliato da un unico repository sorgente tramite Flux.",
      role: 'Architetto e operatore in solitaria',
      outcome:
        'Infrastruttura auto-riparante e riproducibile che gestisce una suite completa di servizi in produzione.',
    },
    'cs2-manager': {
      title: 'CS2 Server Manager',
      summary:
        "Un pannello di controllo web che crea e gestisce un server di gioco Counter-Strike 2 tramite l'API di Kubernetes e invia comandi in tempo reale via RCON. Infrastruttura trasformata in un prodotto pulito, con un clic.",
      role: 'Full-stack',
      outcome: 'Intero ciclo di vita del server di gioco e amministrazione live, tutto dal browser.',
    },
    'voxel-vortex': {
      title: 'Voxel Vortex: Hosting Minecraft',
      summary:
        'Una piattaforma di hosting Minecraft self-service: avvia server di gioco su richiesta e gestiscili interamente dal browser, con console live, backup automatici, plugin, mondi e controllo di whitelist/accessi. Ogni server gira isolato nel proprio container su Kubernetes.',
      role: 'Full-stack',
      outcome: 'Server Minecraft completamente gestiti con un clic, self-hosted, senza host di terze parti.',
    },
    'this-site': {
      title: 'Questo Portfolio',
      summary:
        'Self-hosted sul mio cluster Kubernetes e distribuito tramite una pipeline di rilascio con tag v*, rafforzato secondo standard di sicurezza enterprise. Il sito stesso è un pezzo del portfolio.',
      role: 'Design, sviluppo, infrastruttura e CI/CD',
      outcome: 'Header di sicurezza A+, Lighthouse 95+, self-hosting a costo zero.',
    },
  },

  skills: {
    eyebrow: 'Competenze ed esperienza',
    title: 'Su tutto lo stack',
    categories: {
      Languages: 'Linguaggi',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Databases & Storage': 'Database e Storage',
      'DevOps & Cloud': 'DevOps e Cloud',
      'Security & Auth': 'Sicurezza e Autenticazione',
      'AI & Data': 'IA e Dati',
      Web3: 'Web3',
      'Practices & Tools': 'Pratiche e Strumenti',
    },
  },

  process: {
    eyebrow: 'Come lavoro',
    title: "Dall'idea alla produzione, dall'inizio alla fine",
    steps: [
      { title: 'Design', body: 'Pensiero di prodotto lucido prima di una riga di codice: cosa deve esistere e perché vince.' },
      { title: 'Sviluppo', body: "Full-stack, fortemente tipizzato e testato, dall'interfaccia fino al modello dei dati." },
      { title: 'Rilascio', body: 'CI/CD sui tag v*: scansione dell’immagine, controlli di sicurezza, rollout senza downtime, in automatico.' },
      { title: 'Possesso', body: 'Gira sul mio cluster k3s. Possiedo il codice e il ferro su cui vive.' },
    ],
  },

  vision: {
    eyebrow: 'Dove sto andando',
    title: 'La visione',
    paraBefore:
      "Oggi sono uno sviluppatore software con competenze profonde e concrete, e sto deliberatamente diventando un ingegnere di primo livello nei prossimi anni. Ma l'obiettivo non è solo essere bravo nel mestiere. È costruire un'azienda tutta mia: trasformare una tesi concreta su ",
    paraEmphasis: 'il software che credo dovrebbe esistere',
    paraAfter:
      ' in un prodotto, un team e un business. Questo sito è la prima prova di come lavoro: gestito dall’inizio alla fine, dal codice al cluster su cui gira.',
    milestones: [
      { k: 'Oggi', v: 'Rilascio software reale, affino le basi.' },
      { k: '3 anni', v: 'Un ingegnere di primo livello con un track record.' },
      { k: "L'obiettivo", v: 'Fondare e costruire la mia azienda.' },
    ],
  },

  github: {
    eyebrow: 'In pubblico',
    title: 'In evidenza su GitHub',
    reposSuffix: 'repository pubblici',
    seeAll: 'Vedi tutto su GitHub →',
    fallback: 'Trovami su GitHub →',
  },

  contact: {
    eyebrow: 'Parliamone',
    title: 'Mettiti in contatto',
    blurb:
      'Stai costruendo qualcosa, cerchi persone o investi presto sulle persone? Mi farebbe piacere sentirti.',
    name: 'Il tuo nome',
    email: 'La tua email',
    message: 'Il tuo messaggio',
    send: 'Invia messaggio',
    sending: 'Invio…',
    sent: 'Grazie! Il tuo messaggio è in arrivo. Ti risponderò presto.',
    location: 'Italia',
  },

  colophon: {
    lead: 'Come è fatto questo sito.',
    body: ' Progettato, sviluppato, rafforzato e self-hosted da me. Nessun page builder, nessun host di terze parti.',
    readSource: 'Leggi il codice sorgente →',
  },

  footer: { tagline: 'Self-hosted su k3s, distribuito via CI/CD.', github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },

  resume: {
    back: '← Torna al sito',
    print: 'Stampa / Salva come PDF',
    summaryTitle: 'Profilo',
    summaryBody:
      "Sviluppatore software full-stack che costruisce sistemi in produzione dall'inizio alla fine, dall'interfaccia al modello dei dati fino al cluster Kubernetes su cui girano. Attualmente full-stack su KinAI, una piattaforma di IA in produzione con club di Serie A e Serie B in Italia. Costruisco deliberatamente verso un'ingegneria di primo livello e, in ultima analisi, un'azienda tutta mia.",
    workTitle: 'Progetti selezionati',
    inProduction: 'in produzione',
    skillsTitle: 'Competenze',
    trajectoryTitle: 'Traiettoria',
    now: 'Oggi:',
    nowBody: 'Rilascio software reale, affino le basi.',
    threeYears: '3 anni:',
    threeYearsBody: 'Un ingegnere di primo livello con un track record.',
    goal: "L'obiettivo:",
    goalBody: 'Fondare e costruire la mia azienda.',
  },

  language: { change: 'Cambia lingua' },
}
