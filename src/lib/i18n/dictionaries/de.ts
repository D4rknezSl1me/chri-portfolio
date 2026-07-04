import type { Dictionary } from './en'

export const de: Dictionary = {
  nav: { work: 'Projekte', skills: 'Fähigkeiten', vision: 'Vision', contact: 'Kontakt', resume: 'Lebenslauf' },

  hero: {
    role: 'Heute Softwareentwickler · Weltklasse-Ingenieur aus Überzeugung · Gründer aus Absicht',
    headline: 'Ich baue Software, die live geht, und ich baue an etwas Eigenem.',
    description:
      'Ich baue Software, die live geht. Ich entwickle mich zum Weltklasse-Ingenieur und baue an einem eigenen Unternehmen. Hier sind die Belege, und die Vision.',
    ctaWork: 'Meine Arbeit ansehen',
    ctaContact: 'Kontakt aufnehmen',
    ctaResume: 'Lebenslauf ansehen →',
  },

  stats: {
    items: [
      'Produkte entworfen & ausgeliefert',
      'KinAI-Produkte, full-stack',
      'Durchgängig selbst verantwortet, self-hosted',
      'Bewertung der Security-Header',
    ],
    trustBefore: 'In Produktion bei Vereinen der italienischen ',
    trustEmphasis: 'Serie A & Serie B',
    trustAfter: '.',
  },

  work: {
    eyebrow: 'Ausgewählte Arbeiten',
    title: 'Was ich gebaut habe',
    roleLabel: 'Rolle:',
    outcomeLabel: 'Ergebnis:',
    inProduction: 'In Produktion',
    live: 'Live →',
    code: 'Code →',
  },

  projects: {
    kinai: {
      title: 'KinAI',
      summary:
        'Eine KI-Plattform, die professionellen Fußballvereinen hilft, klügere, datengetriebene Entscheidungen zu treffen. In Produktion bei Teams der italienischen Serie A und Serie B. Ich arbeite full-stack an ihren drei Produkten: einem Webportal, einer Kern-Engine und einer Desktop-Anwendung. Das erste und einzige seiner Art in seiner Kategorie.',
      role: 'Full-Stack-Entwickler',
      outcome: 'Von Vereinen der Serie A & Serie B eingesetzt, das erste und einzige seiner Kategorie.',
    },
    'aperture-nas': {
      title: 'Aperture NAS: Privater KI-Tresor',
      summary:
        'Ein self-hosted NAS mit eingebautem KI-Gehirn: semantische Suche in natürlicher Sprache über deine eigenen Fotos und Dateien („blaues Auto am Strand“), automatisches Tagging und Indexieren, alles lokal verarbeitet, ohne Cloud und ohne Datenweitergabe an Dritte.',
      role: 'Architektur & Full-Stack',
      outcome: 'Semantische Bildsuche on-premise, die jedes Byte auf deiner eigenen Hardware behält.',
    },
    'naked-glados': {
      title: 'Naked-GLaDOS: Self-Hosted-Plattform',
      summary:
        'Eine produktive, GitOps-gesteuerte Microservice-Plattform auf meinem eigenen k3s-Cluster: eine gemeinsame Auth-/Core-API (JWT + Passkeys), mehrere Web-Apps und Steuerpanels für Gameserver, alles aus einem einzigen Source-of-Truth-Repository via Flux abgeglichen.',
      role: 'Alleiniger Architekt & Betreiber',
      outcome: 'Selbstheilende, reproduzierbare Infrastruktur, die eine ganze Suite von Diensten in Produktion betreibt.',
    },
    'cs2-manager': {
      title: 'CS2 Server Manager',
      summary:
        'Ein Web-Steuerpanel, das einen Counter-Strike-2-Gameserver über die Kubernetes-API bereitstellt und betreibt und Live-Befehle im Spiel über RCON sendet. Infrastruktur, verwandelt in ein sauberes Ein-Klick-Produkt.',
      role: 'Full-Stack',
      outcome: 'Kompletter Gameserver-Lebenszyklus und Live-Administration, alles aus dem Browser.',
    },
    'voxel-vortex': {
      title: 'Voxel Vortex: Minecraft-Hosting',
      summary:
        'Eine Self-Service-Minecraft-Hosting-Plattform: Gameserver auf Abruf starten und komplett aus dem Browser verwalten, mit Live-Konsole, automatischen Backups, Plugins, Welten und Whitelist-/Zugriffskontrolle. Jeder Server läuft isoliert in seinem eigenen Container auf Kubernetes.',
      role: 'Full-Stack',
      outcome: 'Ein-Klick, vollständig verwaltete Minecraft-Server, self-hosted, ohne Drittanbieter-Host.',
    },
    'this-site': {
      title: 'Dieses Portfolio',
      summary:
        'Self-hosted auf meinem eigenen Kubernetes-Cluster und über eine v*-Tag-Release-Pipeline ausgeliefert, gehärtet nach Enterprise-Sicherheitsstandards. Die Seite selbst ist ein Portfolio-Stück.',
      role: 'Design, Entwicklung, Infrastruktur & CI/CD',
      outcome: 'A+-Security-Header, Lighthouse 95+, kostenloses Self-Hosting.',
    },
  },

  skills: {
    eyebrow: 'Fähigkeiten & Expertise',
    title: 'Über den gesamten Stack',
    categories: {
      Languages: 'Sprachen',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Databases & Storage': 'Datenbanken & Speicher',
      'DevOps & Cloud': 'DevOps & Cloud',
      'Security & Auth': 'Sicherheit & Auth',
      'AI & Data': 'KI & Daten',
      Web3: 'Web3',
      'Practices & Tools': 'Praktiken & Werkzeuge',
    },
  },

  process: {
    eyebrow: 'Wie ich arbeite',
    title: 'Von der Idee zur Produktion, durchgängig selbst verantwortet',
    steps: [
      { title: 'Design', body: 'Klares Produktdenken vor der ersten Zeile Code: was existieren sollte und warum es gewinnt.' },
      { title: 'Bauen', body: 'Full-stack, streng typisiert und getestet, vom UI bis zum Datenmodell.' },
      { title: 'Ausliefern', body: 'CI/CD auf v*-Tags: Image-Scan, Sicherheits-Gates, Rollout ohne Downtime, automatisch.' },
      { title: 'Besitzen', body: 'Läuft auf meinem eigenen k3s-Cluster. Mir gehören der Code und die Hardware, auf der er lebt.' },
    ],
  },

  vision: {
    eyebrow: 'Wohin ich gehe',
    title: 'Die Vision',
    paraBefore:
      'Heute bin ich Softwareentwickler mit tiefen, praktischen Fähigkeiten, und ich entwickle mich in den nächsten Jahren bewusst zum Weltklasse-Ingenieur. Aber das Ziel ist nicht nur, das Handwerk zu beherrschen. Es ist, ein eigenes Unternehmen aufzubauen: eine konkrete These darüber, ',
    paraEmphasis: 'welche Software es meiner Meinung nach geben sollte',
    paraAfter:
      ', in ein Produkt, ein Team und ein Geschäft zu verwandeln. Diese Seite ist der erste Beweis, wie ich arbeite: durchgängig selbst verantwortet, vom Code bis zum Cluster, auf dem sie läuft.',
    milestones: [
      { k: 'Jetzt', v: 'Echte Software ausliefern, Grundlagen schärfen.' },
      { k: '3 Jahre', v: 'Ein Weltklasse-Ingenieur mit Erfolgsbilanz.' },
      { k: 'Das Ziel', v: 'Ein eigenes Unternehmen gründen und aufbauen.' },
    ],
  },

  github: {
    eyebrow: 'Öffentlich',
    title: 'Ausgewählt auf GitHub',
    reposSuffix: 'öffentliche Repositories',
    seeAll: 'Alles auf GitHub ansehen →',
    fallback: 'Finde mich auf GitHub →',
  },

  contact: {
    eyebrow: 'Sprechen wir',
    title: 'Kontakt aufnehmen',
    blurb: 'Du baust etwas, stellst ein oder investierst früh in Menschen? Ich würde gern von dir hören.',
    name: 'Dein Name',
    email: 'Deine E-Mail',
    message: 'Deine Nachricht',
    send: 'Nachricht senden',
    sending: 'Senden…',
    sent: 'Danke! Deine Nachricht ist unterwegs. Ich melde mich bald.',
    location: 'Italien',
  },

  colophon: {
    lead: 'Wie diese Seite gebaut ist.',
    body: ' Von mir entworfen, entwickelt, gehärtet und self-hosted. Kein Baukasten, kein Drittanbieter-Host.',
    readSource: 'Quellcode lesen →',
  },

  footer: { tagline: 'Self-hosted auf k3s, ausgeliefert via CI/CD.', github: 'GitHub', linkedin: 'LinkedIn', email: 'E-Mail' },

  resume: {
    back: '← Zurück zur Seite',
    print: 'Drucken / Als PDF speichern',
    summaryTitle: 'Profil',
    summaryBody:
      'Full-Stack-Softwareentwickler, der produktive Systeme durchgängig baut, vom UI über das Datenmodell bis zum Kubernetes-Cluster, auf dem sie laufen. Aktuell full-stack an KinAI, einer KI-Plattform in Produktion bei Vereinen der italienischen Serie A und Serie B. Ich baue bewusst auf Weltklasse-Engineering hin und letztlich auf ein eigenes Unternehmen.',
    workTitle: 'Ausgewählte Arbeiten',
    inProduction: 'in Produktion',
    skillsTitle: 'Fähigkeiten',
    trajectoryTitle: 'Werdegang',
    now: 'Jetzt:',
    nowBody: 'Echte Software ausliefern, Grundlagen schärfen.',
    threeYears: '3 Jahre:',
    threeYearsBody: 'Ein Weltklasse-Ingenieur mit Erfolgsbilanz.',
    goal: 'Das Ziel:',
    goalBody: 'Ein eigenes Unternehmen gründen und aufbauen.',
  },

  language: { change: 'Sprache ändern' },
}
