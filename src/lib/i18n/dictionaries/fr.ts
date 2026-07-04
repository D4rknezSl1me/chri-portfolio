import type { Dictionary } from './en'

export const fr: Dictionary = {
  brand: 'Christian Cangelli',
  nav: { work: 'Projets', skills: 'Compétences', vision: 'Vision', contact: 'Contact', resume: 'CV' },

  hero: {
    role: "Développeur logiciel aujourd'hui · Ingénieur de classe mondiale par choix · Fondateur par intention",
    headline: "Je crée des logiciels qui partent en production, et je bâtis quelque chose qui m'appartient.",
    description:
      'Je crée des logiciels qui partent en production. Je me perfectionne pour devenir un ingénieur de classe mondiale et je bâtis ma propre entreprise. Voici les preuves, et la vision.',
    ctaWork: 'Voir mon travail',
    ctaContact: 'Me contacter',
    ctaResume: 'Voir le CV →',
  },

  stats: {
    items: [
      'Produits conçus et livrés',
      'Produits KinAI, full-stack',
      'Maîtrisés de bout en bout, self-hosted',
      'Note des en-têtes de sécurité',
    ],
    trustBefore: 'En production dans des clubs de ',
    trustEmphasis: 'Serie A et Serie B',
    trustAfter: ' italiennes.',
  },

  work: {
    eyebrow: 'Travaux sélectionnés',
    title: "Ce que j'ai construit",
    roleLabel: 'Rôle :',
    outcomeLabel: 'Résultat :',
    inProduction: 'En production',
    live: 'Live →',
    code: 'Code →',
  },

  projects: {
    kinai: {
      title: 'KinAI',
      summary:
        "Une plateforme d'IA qui aide les clubs de football professionnels à prendre des décisions plus intelligentes, fondées sur les données. En production avec des équipes de Serie A et Serie B italiennes. Je travaille en full-stack sur ses trois produits : un portail web, un moteur central et une application de bureau. Le premier et le seul de son genre dans sa catégorie.",
      role: 'Développeur full-stack',
      outcome: 'Adoptée par des clubs de Serie A et Serie B, la première et la seule de sa catégorie.',
    },
    'aperture-nas': {
      title: 'Aperture NAS : coffre-fort IA privé',
      summary:
        'Un NAS auto-hébergé avec un cerveau IA intégré : recherche sémantique en langage naturel dans vos propres photos et fichiers (« voiture bleue sur la plage »), étiquetage et indexation automatiques, le tout traité localement, sans cloud et sans exposition des données à des tiers.',
      role: 'Architecture et full-stack',
      outcome: "Recherche sémantique d'images on-premise qui garde chaque octet sur votre propre matériel.",
    },
    'naked-glados': {
      title: 'Naked-GLaDOS : plateforme auto-hébergée',
      summary:
        "Une plateforme de microservices en production, pilotée par GitOps, sur mon propre cluster k3s : une API d'authentification/cœur partagée (JWT + Passkeys), plusieurs applications web et des panneaux de contrôle de serveurs de jeu, le tout réconcilié depuis un unique dépôt source de vérité via Flux.",
      role: 'Architecte et opérateur en solo',
      outcome: 'Infrastructure auto-réparatrice et reproductible qui fait tourner une suite complète de services en production.',
    },
    'cs2-manager': {
      title: 'CS2 Server Manager',
      summary:
        "Un panneau de contrôle web qui provisionne et exploite un serveur de jeu Counter-Strike 2 via l'API Kubernetes et envoie des commandes en jeu en temps réel via RCON. L'infrastructure transformée en un produit propre, en un clic.",
      role: 'Full-stack',
      outcome: 'Cycle de vie complet du serveur de jeu et administration en direct, le tout depuis le navigateur.',
    },
    'voxel-vortex': {
      title: 'Voxel Vortex : hébergement Minecraft',
      summary:
        "Une plateforme d'hébergement Minecraft en libre-service : lancez des serveurs de jeu à la demande et gérez-les entièrement depuis le navigateur, avec console en direct, sauvegardes automatiques, plugins, mondes et contrôle des accès/whitelist. Chaque serveur tourne isolé dans son propre conteneur sur Kubernetes.",
      role: 'Full-stack',
      outcome: 'Serveurs Minecraft entièrement gérés en un clic, auto-hébergés, sans hébergeur tiers.',
    },
    'this-site': {
      title: 'Ce portfolio',
      summary:
        'Auto-hébergé sur mon propre cluster Kubernetes et livré via une pipeline de release à tags v*, durci selon des standards de sécurité entreprise. Le site lui-même est une pièce du portfolio.',
      role: 'Design, développement, infra et CI/CD',
      outcome: 'En-têtes de sécurité A+, Lighthouse 95+, auto-hébergement à coût zéro.',
    },
  },

  skills: {
    eyebrow: 'Compétences et expertise',
    title: 'Sur toute la stack',
    categories: {
      Languages: 'Langages',
      Frontend: 'Frontend',
      Backend: 'Backend',
      'Databases & Storage': 'Bases de données et stockage',
      'DevOps & Cloud': 'DevOps et cloud',
      'Security & Auth': 'Sécurité et authentification',
      'AI & Data': 'IA et données',
      Web3: 'Web3',
      'Practices & Tools': 'Pratiques et outils',
    },
  },

  process: {
    eyebrow: 'Comment je travaille',
    title: "De l'idée à la production, maîtrisé de bout en bout",
    steps: [
      { title: 'Design', body: 'Une réflexion produit nette avant la moindre ligne de code : ce qui doit exister, et pourquoi ça gagne.' },
      { title: 'Développement', body: "Full-stack, fortement typé et testé, de l'interface jusqu'au modèle de données." },
      { title: 'Livraison', body: "CI/CD sur les tags v* : scan d'image, garde-fous de sécurité, déploiement sans interruption, automatiquement." },
      { title: 'Possession', body: 'Ça tourne sur mon propre cluster k3s. Je possède le code et la machine sur laquelle il vit.' },
    ],
  },

  vision: {
    eyebrow: 'Où je vais',
    title: 'La vision',
    paraBefore:
      "Je suis aujourd'hui développeur logiciel doté de compétences solides et concrètes, et je deviens délibérément un ingénieur de classe mondiale au fil des prochaines années. Mais le but n'est pas seulement d'exceller dans le métier. C'est de bâtir ma propre entreprise : transformer une thèse concrète sur ",
    paraEmphasis: 'le logiciel qui devrait selon moi exister',
    paraAfter:
      " en un produit, une équipe et un business. Ce site est la première preuve de ma façon de travailler : maîtrisé de bout en bout, du code au cluster sur lequel il tourne.",
    milestones: [
      { k: "Aujourd'hui", v: "Je livre du vrai logiciel, j'affûte les fondamentaux." },
      { k: '3 ans', v: 'Un ingénieur de classe mondiale avec un vrai bilan.' },
      { k: 'Le but', v: 'Fonder et bâtir ma propre entreprise.' },
    ],
  },

  github: {
    eyebrow: 'En public',
    title: 'Mis en avant sur GitHub',
    reposSuffix: 'dépôts publics',
    seeAll: 'Tout voir sur GitHub →',
    fallback: 'Retrouvez-moi sur GitHub →',
  },

  contact: {
    eyebrow: 'Parlons-en',
    title: 'Me contacter',
    blurb:
      "Vous construisez quelque chose, vous recrutez ou vous investissez tôt dans les gens ? J'aimerais beaucoup vous lire.",
    name: 'Votre nom',
    email: 'Votre email',
    message: 'Votre message',
    send: 'Envoyer le message',
    sending: 'Envoi…',
    sent: 'Merci ! Votre message est en route. Je vous répondrai bientôt.',
    location: 'Italie',
  },

  colophon: {
    lead: 'Comment ce site est construit.',
    body: ' Conçu, développé, durci et auto-hébergé par moi. Sans page builder, sans hébergeur tiers.',
    readSource: 'Lire le code source →',
  },

  footer: { tagline: 'Auto-hébergé sur k3s, livré via CI/CD.', github: 'GitHub', linkedin: 'LinkedIn', email: 'Email' },

  resume: {
    back: '← Retour au site',
    print: 'Imprimer / Enregistrer en PDF',
    summaryTitle: 'Profil',
    summaryBody:
      "Développeur logiciel full-stack qui construit des systèmes en production de bout en bout, de l'interface au modèle de données jusqu'au cluster Kubernetes sur lequel ils tournent. Actuellement full-stack sur KinAI, une plateforme d'IA en production avec des clubs de Serie A et Serie B italiennes. Je construis délibérément vers une ingénierie de classe mondiale et, à terme, ma propre entreprise.",
    workTitle: 'Travaux sélectionnés',
    inProduction: 'en production',
    skillsTitle: 'Compétences',
    trajectoryTitle: 'Trajectoire',
    now: "Aujourd'hui :",
    nowBody: "Je livre du vrai logiciel, j'affûte les fondamentaux.",
    threeYears: '3 ans :',
    threeYearsBody: 'Un ingénieur de classe mondiale avec un vrai bilan.',
    goal: 'Le but :',
    goalBody: 'Fonder et bâtir ma propre entreprise.',
  },

  language: { change: 'Changer de langue' },
}
