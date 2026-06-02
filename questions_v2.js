// ═══════════════════════════════════════════════════════════
//  BASE DE QUESTIONS — VERSION 2 (questions_v2.js)
//  Cours « Sensation & Perception » — Éric Laurent, Université de Fribourg
//  Format : { id, bloc, blocLabel, text, options[], correct[], feedback }
//  correct[] = indices des bonnes réponses (0-based)
//  ⚠️ Entre 1 et 4 bonnes réponses possibles — distribution VOLONTAIREMENT variée
//  Barème : 1 pt si la sélection est exactement correcte, 0 sinon (tout-ou-rien)
//  10 thèmes alignés sur les 10 chapitres du cours.
// ═══════════════════════════════════════════════════════════

const QUESTIONS = [

  // ══ 1 — Place de la perception en psychologie ════════════════
  {
    id: 1, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "En quelle année et par qui le premier laboratoire de psychologie expérimentale a-t-il été fondé ?",
    options: [
      "En 1879, à Leipzig, par Wilhelm Wundt",
      "En 1860, à Leipzig, par Gustav Fechner",
      "En 1888, à Berlin, par Hermann von Helmholtz",
      "En 1879, à Zürich, par Johannes Müller"
    ],
    correct: [0],
    feedback: "Wundt fonde l'Institut für Psychologie (avec un laboratoire de psychologie) à Leipzig en 1879. Fechner publie les Elemente der Psychophysik en 1860 mais ne fonde pas ce labo ; Helmholtz fut le mentor (physiologie) de Wundt."
  },
  {
    id: 2, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Quelles affirmations sur le parcours de Wilhelm Wundt sont exactes ?",
    options: [
      "Il a été assistant de physiologie de Hermann von Helmholtz (1858-1863)",
      "Il a été professeur de philosophie et de psychologie expérimentale à Leipzig",
      "Il a proposé le terme « psychophysique »",
      "Il a publié les Elemente der Psychophysik en 1860"
    ],
    correct: [0, 1],
    feedback: "Wundt : assistant d'Helmholtz, puis professeur à Leipzig. C'est FECHNER qui a proposé le terme « psychophysique » et publié les Elemente der Psychophysik (1860)."
  },
  {
    id: 3, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Selon Helmholtz (1888), lesquelles de ces affirmations sont correctes ?",
    options: [
      "La sensation = des impressions qui apparaissent comme des états particuliers du corps (appareils nerveux)",
      "La perception = quand ces impressions servent à se former des représentations d'objets extérieurs",
      "Reconnaître le son d'un violon est un acte de perception",
      "Décomposer un son complexe en sons partiels est un acte de sensation pure"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Les quatre énoncés reprennent exactement la distinction d'Helmholtz : sensation = état nerveux brut (ex. décomposer un son en partiels) ; perception = conclure à l'existence d'un objet extérieur (ex. reconnaître un violon)."
  },
  {
    id: 4, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Que postule la théorie trichromatique de Young-Helmholtz ?",
    options: [
      "L'œil humain est contraint par un triple codage (type « RGB »)",
      "Deux types de récepteurs suffisent pour coder toutes les couleurs",
      "La théorie porte sur les sensations auditives",
      "Au moins 5 primaires sont nécessaires pour optimiser le rendu coloré"
    ],
    correct: [0],
    feedback: "Young-Helmholtz : triple codage (RGB) — 2 semble insuffisant, et plus de 3 n'optimise pas le rendu. C'est une théorie de la VISION des couleurs, pas de l'audition."
  },
  {
    id: 5, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Concernant la place de la perception en psychologie, quelles affirmations sont exactes ?",
    options: [
      "La psychologie expérimentale est née dans le champ de la sensation et de la perception",
      "Avec le cognitivisme et la métaphore du calcul, l'influence du champ a relativement diminué",
      "Les travaux de Turing et l'essor technologique ont influencé la psychologie cognitive",
      "Le cognitivisme a replacé la perception au centre absolu de la discipline"
    ],
    correct: [0, 1, 2],
    feedback: "La perception fut fondatrice (place centrale aux origines) puis relativement marginalisée par le cognitivisme (métaphore du calcul, influence de Turing). Elle n'est PAS redevenue centrale avec le cognitivisme (D faux)."
  },
  {
    id: 6, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Parmi ces définitions (Wolfe et al., 2021), lesquelles sont correctes ?",
    options: [
      "Les qualia sont les expériences conscientes et privées de sensation ou de perception",
      "La perception est l'acte de donner un sens à une sensation détectée",
      "La sensation est l'acte de donner une signification à un objet",
      "Les qualia sont des grandeurs physiques mesurables de la stimulation"
    ],
    correct: [0, 1],
    feedback: "Sensation = détecter un stimulus (et éventuellement en faire une expérience privée) ; perception = donner du sens à la sensation ; qualia = expériences conscientes/privées. Les qualia ne sont pas des grandeurs physiques."
  },
  {
    id: 7, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "L'illusion d'Ebbinghaus est-elle spécifique à l'être humain ?",
    options: [
      "Non — des poussins de 4 jours (Rosa Salva et al., 2013) y sont également sensibles",
      "Oui — elle nécessite un cortex humain développé",
      "Oui — elle repose sur des apprentissages culturels propres à l'humain",
      "Non — mais seuls les grands singes y sont sensibles en dehors de l'humain"
    ],
    correct: [0],
    feedback: "Rosa Salva et al. (2013) : des poussins de 4 jours (Gallus gallus) sont sensibles à l'illusion d'Ebbinghaus → les effets de contexte ne sont ni purement culturels ni propres à l'humain."
  },
  {
    id: 8, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Quelles illusions ou faits illustrent les « effets de contexte » sur la perception ?",
    options: [
      "L'illusion d'Ebbinghaus (taille perçue d'un disque selon les disques qui l'entourent)",
      "L'illusion de Müller-Lyer (longueur perçue de segments selon les flèches aux extrémités)",
      "L'illusion de Delboeuf (taille perçue d'un disque selon un anneau l'entourant)",
      "Notre interprétation de la réalité dépend des éléments que l'on relie entre eux"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Ebbinghaus, Müller-Lyer et Delboeuf illustrent tous des effets de contexte : la perception d'un élément dépend de son environnement. Principe général : on interprète en reliant les éléments entre eux."
  },
  {
    id: 9, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Associez correctement les contributions à leurs auteurs.",
    options: [
      "Wundt → fondation du premier laboratoire de psychologie (Leipzig, 1879)",
      "Fechner → invention du terme « psychophysique » et Elemente der Psychophysik (1860)",
      "Helmholtz → fondation du premier laboratoire de psychologie expérimentale",
      "Wundt → invention du terme « psychophysique »"
    ],
    correct: [0, 1],
    feedback: "Wundt = 1er labo (1879). Fechner = « psychophysique » + Elemente (1860). Helmholtz = mentor de Wundt (ophtalmoscope, trichromatisme, distinction sensation/perception) mais pas le 1er labo."
  },
  {
    id: 10, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "La perception est souvent conçue dans un cadre probabiliste comme le « meilleur pari ». Qu'est-ce que cela implique ?",
    options: [
      "Face à une information sensorielle ambiguë, le système construit l'interprétation la plus vraisemblable",
      "Percevoir comporte une part d'incertitude car l'information est incomplète",
      "Ce cadre probabiliste s'articule avec la théorie de la détection du signal",
      "La perception est strictement identique chez tous les individus"
    ],
    correct: [0, 1, 2],
    feedback: "« Meilleur pari » = interprétation probabiliste la plus vraisemblable d'une information ambiguë ; lien direct avec la TDS. La perception varie selon l'individu, le contexte, l'expertise (D faux)."
  },
  {
    id: 11, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Une seule de ces affirmations est FAUSSE. Laquelle ?",
    options: [
      "Fechner a fondé le premier laboratoire de psychologie en 1879",
      "Wundt a été l'assistant de physiologie d'Helmholtz",
      "Helmholtz a inventé l'ophtalmoscope",
      "Helmholtz a proposé une théorie trichromatique de la vision des couleurs"
    ],
    correct: [0],
    feedback: "C'est WUNDT (pas Fechner) qui fonde le 1er labo en 1879. Les trois autres énoncés sont exacts : Wundt assistant d'Helmholtz ; Helmholtz inventeur de l'ophtalmoscope et auteur (avec Young) du trichromatisme."
  },
  {
    id: 12, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Pourquoi un système cognitif totalement « coupé du monde » est-il problématique ?",
    options: [
      "Sans entrées sensorielles, l'intelligence est déconnectée du monde réel",
      "La robotique et l'IA montrent qu'agir suppose de percevoir l'environnement",
      "Cela prouve que la perception n'a aucun rôle en cognition",
      "Cela montre que la mémoire peut fonctionner sans aucune perception"
    ],
    correct: [0, 1],
    feedback: "Un « ordinateur sans sensoriel » est coupé du monde : l'intelligence a besoin d'entrées perceptives (cf. drones dont la motricité s'adapte à ce qu'ils perçoivent). La perception reste indispensable (C et D faux)."
  },
  {
    id: 13, bloc: 1, blocLabel: "1 — Place en psychologie",
    text: "Quels courants ont étudié les processus mentaux et/ou le comportement au fil de l'histoire de la psychologie ?",
    options: [
      "Le courant introspectionniste (philosophie, XIXe s.)",
      "Le courant béhavioriste (première moitié du XXe s.)",
      "Le courant cognitiviste (deuxième moitié du XXe s.)",
      "Le courant de la psychophysique (depuis le dernier quart du XIXe s.)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Le cours liste : introspectionnisme, béhaviorisme, cognitivisme et psychophysique (depuis ~1875). Tous ces courants ont étudié les processus mentaux et/ou le comportement."
  },

  // ══ 2 — Principes, définitions & psychophysique ═════════════
  {
    id: 14, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Qu'est-ce que la transduction neurosensorielle ?",
    options: [
      "La traduction d'un stimulus physique en un changement de potentiel de membrane",
      "Ce signal est ensuite transmis au système nerveux central (SNC)",
      "C'est l'attribution d'un sens conscient à un objet perçu",
      "C'est la décomposition d'un son complexe en sons partiels"
    ],
    correct: [0, 1],
    feedback: "Transduction = conversion d'un stimulus physique en changement de potentiel de membrane, transmis au SNC (Fain, 2020). Donner un sens = perception ; décomposer un son = sensation pure."
  },
  {
    id: 15, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quels types de transduction sont décrits dans le cours ?",
    options: [
      "La mécanotransduction (stimulus mécanique)",
      "La chémotransduction (stimulus chimique)",
      "La phototransduction (stimulus lumineux)",
      "L'électrotransduction (stimulus électrique pur)"
    ],
    correct: [0, 1, 2],
    feedback: "Mécano- (mécanique), chémo- (chimique) et phototransduction (lumineuse). « L'électrotransduction » n'est pas une catégorie du cours."
  },
  {
    id: 16, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelle idée caractérise le sensualisme d'Étienne Bonnot de Condillac (Traité des sensations, 1754) ?",
    options: [
      "Le jugement, la réflexion, les désirs et les passions ne sont que la sensation transformée",
      "La sensation ne joue aucun rôle dans la vie mentale",
      "Les représentations sont innées et indépendantes de l'expérience sensorielle",
      "La perception précède toujours la sensation"
    ],
    correct: [0],
    feedback: "Condillac (sensualisme) : « le jugement, la réflexion, les désirs, les passions… ne sont que la sensation même qui se transforme ». La sensation est la base de toute la vie mentale."
  },
  {
    id: 17, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Lesquelles relèvent des sensations somesthésiques ?",
    options: [
      "Les sensations extéroceptives (tactile, thermique)",
      "Les sensations proprioceptives/kinesthésiques (muscles, tendons, ligaments)",
      "Les sensations intéroceptives (viscères)",
      "Les sensations nociceptives (douleur)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Les sensations somesthésiques regroupent extéroceptives, proprioceptives/kinesthésiques, intéroceptives et nociceptives. Les sensations « spécifiques » (vision, audition, équilibration, olfaction, gustation) en sont distinctes."
  },
  {
    id: 18, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Parmi ces modalités, laquelle est une sensation « spécifique » et NON somesthésique ?",
    options: [
      "La vision",
      "Le toucher",
      "La proprioception",
      "La nociception"
    ],
    correct: [0],
    feedback: "Sensations « spécifiques » : vision, audition, équilibration, olfaction, gustation. Le toucher, la proprioception et la nociception sont somesthésiques."
  },
  {
    id: 19, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelles correspondances entre grandeur physique et dimension sensorielle sont correctes ?",
    options: [
      "Intensité/luminance lumineuse → luminosité (sombre, clair)",
      "Fréquence sonore (Hz) → hauteur tonale (grave, aigu)",
      "Longueur d'onde lumineuse → sonie (volume perçu)",
      "Intensité sonore (dB) → teinte colorée"
    ],
    correct: [0, 1],
    feedback: "Luminance → luminosité ; fréquence (Hz) → hauteur tonale. La longueur d'onde → teinte (chromaticité), pas la sonie ; l'intensité sonore (dB) → sonie, pas la teinte."
  },
  {
    id: 20, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelle est la définition conventionnelle du seuil absolu (RL) ?",
    options: [
      "La quantité minimale de stimulation détectée 50 % du temps",
      "La plus petite intensité physiquement mesurable par un instrument",
      "La plus petite différence perceptible entre deux stimuli",
      "L'intensité au-delà de laquelle la sensation devient douloureuse"
    ],
    correct: [0],
    feedback: "Seuil absolu = quantité minimale de stimulation détectée 50 % du temps (convention de lecture sur la fonction psychométrique). La plus petite différence perceptible = seuil différentiel (DL/JND)."
  },
  {
    id: 21, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quel est le lien entre seuil absolu (RL) et seuil différentiel (DL) ?",
    options: [
      "Le RL est un cas particulier de DL : détection d'une différence par rapport à zéro",
      "Le DL (ou JND) est la quantité de changement minimale pour qu'une différence soit perçue",
      "Le RL mesure une différence entre deux stimuli tous deux présents",
      "Le DL ne peut pas être mesuré avec les méthodes des seuils absolus"
    ],
    correct: [0, 1],
    feedback: "RL = différence entre « rien » et « quelque chose » → cas particulier du DL. DL/JND = plus petit changement perçu. Les mêmes méthodes servent à mesurer RL et DL (D faux)."
  },
  {
    id: 22, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelles méthodes d'étude des seuils sont décrites dans le cours ?",
    options: [
      "La méthode des limites (séries ascendantes/descendantes)",
      "La méthode de l'ajustement (le participant contrôle l'intensité)",
      "La méthode constante (stimuli d'intensités variées présentés aléatoirement)",
      "La méthode du choix forcé (nAFC, ≥ 2 options)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Les quatre méthodes : limites, ajustement, constante, et choix forcé (nAFC). Elles servent aussi bien pour les seuils absolus que différentiels."
  },
  {
    id: 23, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quel est le principal inconvénient de la méthode des limites ?",
    options: [
      "Les effets d'attente (persévération, effets d'ordre) car le participant peut anticiper",
      "Les stimuli sont présentés de façon totalement aléatoire",
      "Elle ne permet jamais de déterminer un seuil",
      "Le participant contrôle lui-même l'intensité du stimulus"
    ],
    correct: [0],
    feedback: "Séries ascendantes/descendantes → le participant peut anticiper le changement (persévération, effets d'attente). La présentation aléatoire = méthode CONSTANTE ; le contrôle de l'intensité par le sujet = méthode de l'ajustement."
  },
  {
    id: 24, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Concernant la fonction psychométrique, quelles affirmations sont correctes ?",
    options: [
      "C'est une courbe du pourcentage de détection en fonction de l'intensité",
      "Elle a typiquement une forme d'ogive (≈ sigmoïde en S)",
      "Le seuil absolu s'y lit conventionnellement à 50 % de détection",
      "Sa forme en S prouve l'existence d'un seuil strict en dessous duquel rien n'est détecté"
    ],
    correct: [0, 1, 2],
    feedback: "Fonction psychométrique = ogive (% détection / intensité), seuil lu à 50 %. La forme en S reflète la variabilité de la détection : il n'existe pas de « seuil idéal » strict (D faux)."
  },
  {
    id: 25, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Que stipule la loi de Weber (fraction de Weber) ?",
    options: [
      "ΔI / I₀ = k (constante) : le seuil différentiel dépend d'une fraction de l'intensité initiale",
      "Plus le stimulus standard est intense, plus le ΔI nécessaire pour percevoir une différence est grand",
      "La constante k est universelle et identique pour toutes les modalités",
      "Le ΔI nécessaire est indépendant de l'intensité de départ"
    ],
    correct: [0, 1],
    feedback: "Weber : k = ΔI/I₀ (constante < 1). Plus le standard est fort, plus le ΔI requis est grand. Mais k varie selon la modalité sensorielle — elle n'est pas universelle (C faux)."
  },
  {
    id: 26, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "La loi de Fechner s'écrit S = k × log(R). Que prédit-elle ?",
    options: [
      "La magnitude de la sensation croît comme le logarithme de l'intensité du stimulus",
      "Il y a « compression » de la sensation aux fortes intensités",
      "Elle s'appuie sur l'assemblage des JND (calculées via la fraction de Weber)",
      "La sensation croît linéairement avec l'intensité physique"
    ],
    correct: [0, 1, 2],
    feedback: "Fechner : S = k log(R), croissance logarithmique → compression aux hautes intensités. Construite en « assemblant » les JND issues de la fraction de Weber. Donc PAS linéaire (D faux)."
  },
  {
    id: 27, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelles limites de la loi de Fechner sont évoquées dans le cours ?",
    options: [
      "Elle rend mal compte des luminances très faibles et très élevées",
      "La fonction logarithmique n'est pas la seule à s'infléchir : la loi de puissance aussi",
      "Une activité résiduelle interne contribue aux sensations (Delboeuf)",
      "Toutes les JND ne seraient pas perceptivement équivalentes (Stevens)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Les quatre limites figurent dans le cours : échecs aux luminances extrêmes ; loi de puissance (Plateau/Stevens) ; activité résiduelle interne (Delboeuf) ; non-équivalence des JND (Stevens)."
  },
  {
    id: 28, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Dans la formule de Delboeuf s = k × log[(c + δ)/c], que représente c et quel est l'apport ?",
    options: [
      "c = niveau intrinsèque d'activité résiduelle de l'organe sensoriel (≈ un « bruit » interne)",
      "Même en l'absence de stimulus externe (δ = 0), la sensation n'est pas nulle",
      "c est la constante de Weber ΔI/I₀",
      "δ représente le niveau de bruit externe environnemental"
    ],
    correct: [0, 1],
    feedback: "c = activité résiduelle interne (bruit de fond biologique) ; δ = intensité du stimulus. Si δ = 0, la sensation dépend encore de c → préfigure la notion de bruit interne de la TDS."
  },
  {
    id: 29, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Que décrit la loi de puissance de Stevens, S = k × Iⁿ ?",
    options: [
      "La magnitude de la sensation est proportionnelle à l'intensité élevée à un exposant n",
      "La sensation est toujours comprimée, quel que soit n",
      "n est identique (= 1) pour toutes les modalités",
      "Elle a été validée uniquement par la méthode des limites"
    ],
    correct: [0],
    feedback: "Stevens : S = k Iⁿ. Selon n, la sensation est comprimée (n < 1) ou amplifiée (n > 1). Validée par l'estimation directe de magnitude. Pour n > 1, la loi de Fechner ne s'applique pas."
  },
  {
    id: 30, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "D'après les données d'estimation de magnitude (exposants 3.5, 1.0, 0.8, 0.3), lesquelles sont correctes ?",
    options: [
      "Les chocs électriques ont un exposant > 1 (≈ 3.5) : sensation amplifiée (expansion)",
      "La luminosité a un exposant faible (≈ 0.3) : forte compression",
      "Un exposant > 1 signifie une compression de la sensation",
      "La loi de Fechner s'applique parfaitement aux chocs électriques"
    ],
    correct: [0, 1],
    feedback: "Chocs électriques n ≈ 3.5 (expansion), longueur ≈ 1.0, sucre ≈ 0.8, luminosité ≈ 0.3 (compression). n > 1 = amplification (pas compression) ; pour n > 1 il faut la loi de puissance (PBS), pas Fechner."
  },
  {
    id: 31, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelles procédures Stevens (et Plateau) ont-ils développées pour mesurer la magnitude des sensations ?",
    options: [
      "L'estimation directe de magnitude (attribuer une valeur à chaque stimulus)",
      "La production de magnitude (régler I pour obtenir un multiple, ex. × 2)",
      "La mise en correspondance intermodale (égaler une intensité d'une modalité à une autre)",
      "La méthode des limites ascendantes"
    ],
    correct: [0, 1, 2],
    feedback: "Estimation directe, production de magnitude et mise en correspondance intermodale (« tournez le bouton jusqu'à ce que ce son soit aussi fort que cette lumière est lumineuse »). La méthode des limites concerne les seuils, pas la magnitude."
  },
  {
    id: 32, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Que stipule la loi de Ricco ?",
    options: [
      "Pour de petites surfaces, I × Surface = constante (intensité et surface s'échangent)",
      "I × Durée = constante pour la détection",
      "La teinte perçue change avec l'énergie lumineuse",
      "Elle s'applique sans aucune limite de taille de surface"
    ],
    correct: [0],
    feedback: "Ricco : pour de petites surfaces lumineuses, l'intensité requise est inversement proportionnelle à la surface (I × S = cste), jusqu'à l'aire de Ricco. L'échange I/durée = loi de Bloch."
  },
  {
    id: 33, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Comment s'appelle la surface au-delà de laquelle la loi de Ricco cesse de s'appliquer ?",
    options: [
      "L'aire de Ricco (ou aire de sommation)",
      "L'aire de Bloch",
      "La fovéa",
      "La fraction de Weber"
    ],
    correct: [0],
    feedback: "C'est l'aire de Ricco (ou aire de sommation) : au-delà, l'échange surface/intensité ne tient plus (sur le graphe log-log, la courbe s'aplatit)."
  },
  {
    id: 34, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Que stipule la loi de Bloch (et quelle est sa limite) ?",
    options: [
      "I × Durée = constante pour la détection visuelle",
      "Au-delà d'environ 0,1 s, augmenter la durée n'améliore plus la détection",
      "Elle ne concerne que la surface du stimulus",
      "Elle s'applique sans aucune limite temporelle"
    ],
    correct: [0, 1],
    feedback: "Bloch : l'intensité requise est inversement proportionnelle à la durée (sommation temporelle), jusqu'à ~0,1 s. Au-delà, pas d'avantage à allonger la durée. Garner (1947) a montré un analogue auditif."
  },
  {
    id: 35, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Que décrit le changement de teinte de Bezold-Brücke ?",
    options: [
      "Quand l'énergie lumineuse augmente, les rouges paraissent plus jaunes",
      "Quand l'énergie lumineuse augmente, les violets paraissent plus bleus",
      "Il existe un équivalent auditif (aigus plus aigus, graves plus graves à fort volume)",
      "La teinte perçue est totalement indépendante de l'intensité"
    ],
    correct: [0, 1, 2],
    feedback: "Bezold-Brücke : rouge → plus jaune, violet → plus bleu quand l'énergie augmente. Équivalent auditif existant. La qualité perçue dépend donc de l'intensité (D faux)."
  },
  {
    id: 36, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "D'où provient historiquement la théorie de la détection du signal (TDS) ?",
    options: [
      "De la détection radar (Marcum) et des sciences computationnelles (Peterson et al.)",
      "Des travaux de Fechner sur les seuils différentiels",
      "De la philosophie sensualiste de Condillac",
      "Des expériences de Weber sur la comparaison de poids"
    ],
    correct: [0],
    feedback: "TDS issue du radar (Marcum, 1947-48) et des sciences computationnelles (Peterson, Birdsall & Fox, 1954), puis appliquée à la perception (Tanner & Swets, 1954 ; Green & Swets, 1966)."
  },
  {
    id: 37, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "En quoi la TDS marque-t-elle une bascule vers la « psychophysique moderne » ?",
    options: [
      "Elle prend en compte les essais sans stimulus (rejets corrects, fausses alarmes)",
      "Elle introduit la notion de détectabilité d'un signal dans un ensemble signal + bruit",
      "Elle présente toujours plusieurs intensités de stimulation par essai",
      "Elle a été proposée par Fechner comme prolongement direct de sa loi"
    ],
    correct: [0, 1],
    feedback: "La TDS analyse aussi les essais sans signal (FA, rejets corrects) et la détectabilité dans signal + bruit. Souvent une seule intensité est utilisée, certains essais étant sans stimulus. Elle ne vient pas de Fechner."
  },
  {
    id: 38, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Dans la TDS, quelles sont les quatre issues possibles d'un essai ?",
    options: [
      "Détection correcte (HIT) : signal présent, réponse « oui »",
      "Manqué (miss) : signal présent, réponse « non »",
      "Fausse alarme : signal absent, réponse « oui »",
      "Rejet correct : signal absent, réponse « non »"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Les quatre cases du tableau de la TDS : HIT, manqué (miss), fausse alarme, rejet correct. Le « manqué » consiste à dire « non » alors que le signal est présent."
  },
  {
    id: 39, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Quelles sont les deux sources de « bruit » identifiées par la TDS ?",
    options: [
      "Le bruit externe lié à la stimulation (parasites, ligne téléphonique…)",
      "L'activité nerveuse résiduelle interne, présente même sans stimulus",
      "Le critère de décision fixé par l'observateur",
      "Le nombre d'options de réponse proposées"
    ],
    correct: [0, 1],
    feedback: "Bruit externe (parasites) + bruit interne (activité de fond : ~50 décharges/s dans certains neurones auditifs, ~100/s dans des neurones vestibulaires sans mouvement). Le critère n'est pas une source de bruit."
  },
  {
    id: 40, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Que mesure d' (d-prime) dans la TDS ?",
    options: [
      "La sensibilité : d' = D/σ (distance entre les distributions bruit et signal+bruit, rapportée à l'écart-type)",
      "Une mesure indépendante du critère de décision",
      "Quand d' = 0, les distributions se superposent et la performance est au niveau du hasard",
      "Le seuil interne librement fixé par l'observateur"
    ],
    correct: [0, 1, 2],
    feedback: "d' = D/σ = sensibilité PURE (indépendante du critère). d' = 0 → distributions confondues → performance au hasard. Le seuil interne librement fixé = critère β, pas d'."
  },
  {
    id: 41, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Qu'est-ce que le critère de décision (β) ?",
    options: [
      "Un seuil interne fixé par l'observateur : au-dessus il répond « oui », en dessous « non »",
      "Une mesure de la sensibilité sensorielle pure",
      "La distance entre les deux distributions (bruit et signal+bruit)",
      "Le nombre de fausses alarmes divisé par le nombre de HITs"
    ],
    correct: [0],
    feedback: "β = critère/seuil interne (biais de réponse), qui dépend des enjeux et motivations. La sensibilité sensorielle pure = d' (indépendante de β)."
  },
  {
    id: 42, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Un observateur (ex. un radiologue) adopte un critère très libéral. Quelles conséquences ?",
    options: [
      "Beaucoup de HITs (détections correctes)",
      "Beaucoup de fausses alarmes",
      "Peu de manqués",
      "Sa sensibilité d' reste inchangée"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Critère libéral = dire « oui » facilement → ↑ HITs, ↑ fausses alarmes, ↓ manqués. Mais changer le critère ne modifie JAMAIS d' (la sensibilité est indépendante de la stratégie de décision)."
  },
  {
    id: 43, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Comment peut-on déplacer le critère d'un même observateur (pour tracer une courbe ROC) ?",
    options: [
      "En modifiant la probabilité d'apparition du signal selon les sessions",
      "En modifiant les gains/pertes associés aux réponses (enjeux)",
      "En changeant la personnalité de l'observateur",
      "En augmentant l'intensité du signal"
    ],
    correct: [0, 1],
    feedback: "On déplace β par des manipulations externes : probabilité du signal (rare → conservateur ; fréquent → libéral) et enjeux financiers. Changer l'intensité du signal modifie d', pas le critère."
  },
  {
    id: 44, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Au sujet de la courbe ROC, une seule affirmation est FAUSSE. Laquelle ?",
    options: [
      "Deux observateurs de critères différents mais de même sensibilité ont des courbes ROC différentes",
      "La courbe ROC trace les HITs en fonction des fausses alarmes pour différents critères",
      "La diagonale correspond à d' = 0 (réponses au niveau du hasard)",
      "Plus la courbe est bombée vers le coin haut-gauche, plus d' est élevé"
    ],
    correct: [0],
    feedback: "FAUX : deux observateurs de MÊME sensibilité (d' identique) partagent la MÊME courbe ROC, même si leurs critères diffèrent (ils occupent des points différents de la même courbe). Les trois autres énoncés sont exacts."
  },
  {
    id: 45, bloc: 2, blocLabel: "2 — Définitions & psychophysique",
    text: "Pourquoi le choix forcé (nAFC, ex. 2AFC) est-il lié à la TDS ?",
    options: [
      "Il force le sujet à choisir dans quelle fenêtre se trouve le signal, limitant le biais du critère",
      "Il fournit une mesure de sensibilité moins contaminée par la stratégie de réponse",
      "Il augmente mécaniquement la sensibilité d' du sujet",
      "En 2AFC, la performance au hasard est de 25 %"
    ],
    correct: [0, 1],
    feedback: "Le nAFC limite l'influence du critère (le sujet ne peut pas être « libéral/conservateur »), donnant une mesure proche de d' pur. Il n'augmente pas la sensibilité réelle ; en 2AFC le hasard = 50 % (pas 25 %)."
  },

  // ══ 3 — Fondements biologiques ══════════════════════════════
  {
    id: 46, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Que stipule la doctrine des énergies nerveuses spécifiques de Johannes Müller ?",
    options: [
      "Ce qui détermine la sensation, c'est QUEL nerf est stimulé, pas COMMENT il l'est",
      "Nous accédons directement au monde extérieur via nos organes sensoriels",
      "Chaque sensation correspond à une énergie physique unique et externe",
      "La sensation dépend uniquement de l'intensité du stimulus"
    ],
    correct: [0],
    feedback: "Müller : nous ne sommes connectés qu'à l'activité de nos nerfs ; c'est QUEL nerf est stimulé (et non comment) qui détermine la sensation. On n'accède jamais directement au monde extérieur (ex. appuyer sur l'œil produit une sensation lumineuse)."
  },
  {
    id: 47, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quelles illustrations/corollaires de la doctrine de Müller sont corrects ?",
    options: [
      "Appuyer sur l'œil dans le noir peut produire une sensation de lumière",
      "On n'a accès qu'à l'activité de nos nerfs, jamais au monde « en soi »",
      "Stimuler le nerf optique avec un son produirait une sensation auditive",
      "La maxime « Nemo psychologus nisi physiologus » contredit Müller"
    ],
    correct: [0, 1],
    feedback: "Appuyer sur l'œil active le nerf optique → lumière sans lumière ; on n'accède qu'à l'activité nerveuse. Stimuler le nerf OPTIQUE produit toujours une sensation visuelle (C faux). La maxime « Nemo psychologus nisi physiologus » est justement de Müller (D faux)."
  },
  {
    id: 48, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Concernant les nerfs crâniens, quelles affirmations sont correctes ?",
    options: [
      "Il y a 12 paires de nerfs crâniens",
      "Ils passent par de petites ouvertures de l'os à la base du crâne",
      "Ils conduisent des informations sensorielles, motrices, ou les deux",
      "Ils ne concernent pas uniquement la vision"
    ],
    correct: [0, 1, 2, 3],
    feedback: "12 paires de nerfs crâniens, passant par la base du crâne, conduisant des informations sensorielles et/ou motrices — couvrant vision, audition, équilibration, motricité faciale, etc."
  },
  {
    id: 49, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quel est le spectre de l'énergie électromagnétique visible par l'humain ?",
    options: [
      "400 à 700 nm (sachant que 1 nm = 10⁻⁹ m)",
      "200 à 400 nm",
      "700 à 1100 nm",
      "10 à 100 nm"
    ],
    correct: [0],
    feedback: "Le spectre visible s'étend de ~400 nm (violet/bleu) à ~700 nm (rouge). Rappel : 1 nm = 10⁻⁹ m."
  },
  {
    id: 50, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "À propos de la diffusion de Rayleigh, quelles affirmations sont correctes ?",
    options: [
      "Elle donne au ciel un aspect bleu quand le soleil est haut",
      "Au coucher du soleil, le trajet de la lumière est plus long et la lumière bleue est « perdue »",
      "Le ciel paraît alors rouge/orangé au coucher du soleil",
      "Au coucher, le trajet est plus court, ce qui amplifie le bleu"
    ],
    correct: [0, 1, 2],
    feedback: "Rayleigh : soleil haut = trajet court → ciel bleu ; soleil bas = trajet plus LONG → bleu perdu en route → ciel rouge/orange. D est faux (trajet long, pas court)."
  },
  {
    id: 51, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quelles affirmations distinguent correctement les systèmes photopique et scotopique ?",
    options: [
      "Le système photopique (cônes) assure la vision diurne, détaillée et colorée",
      "Le système scotopique (bâtonnets) assure la vision nocturne, peu précise et non colorée",
      "Les cônes sont absents de la fovéa",
      "Les bâtonnets permettent la discrimination des couleurs"
    ],
    correct: [0, 1],
    feedback: "Photopique = cônes (jour, détails, couleur, max à la fovéa) ; scotopique = bâtonnets (nuit, imprécis, non coloré, câblage convergent). Ce sont les BÂTONNETS qui sont absents de la fovéa, et les CÔNES qui codent la couleur (C et D faux)."
  },
  {
    id: 52, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Où les bâtonnets sont-ils absents ?",
    options: [
      "Au niveau de la fovéa",
      "Sur toute la rétine périphérique",
      "Au niveau du disque optique uniquement",
      "Ils sont présents partout, y compris la fovéa"
    ],
    correct: [0],
    feedback: "Les bâtonnets sont absents de la fovéa (zone centrale, riche en cônes). Le disque optique est le point aveugle (aucun photorécepteur du tout), mais ce n'est pas la bonne réponse ici (« uniquement » est faux)."
  },
  {
    id: 53, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Concernant les pigments des photorécepteurs, quelles affirmations sont correctes ?",
    options: [
      "Chaque photorécepteur ne contient qu'UN seul type de pigment",
      "Les bâtonnets contiennent la rhodopsine (décomposable entre ~400 et 600 nm)",
      "Il existe trois pigments de cônes : érythrolabe, chlorolabe, cyanolabe (L, M, S)",
      "La discrimination des couleurs vient de la comparaison de l'activité des trois types de cônes"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Un seul pigment par photorécepteur. Bâtonnets = rhodopsine (un seul pigment → pas de discrimination des λ entre 400-600 nm). Cônes = 3 pigments (érythrolabe/L/rouge, chlorolabe/M/vert, cyanolabe/S/bleu) ; la couleur naît de leur COMPARAISON."
  },
  {
    id: 54, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quelles correspondances pigment ↔ longueur d'onde sont correctes ?",
    options: [
      "Érythrolabe → grandes longueurs d'onde (rouge, cônes L)",
      "Cyanolabe → courtes longueurs d'onde (bleu, cônes S)",
      "Chlorolabe → grandes longueurs d'onde (rouge)",
      "Rhodopsine → permet de distinguer finement les couleurs"
    ],
    correct: [0, 1],
    feedback: "Érythrolabe = grandes λ (L/rouge), chlorolabe = moyennes λ (M/vert), cyanolabe = courtes λ (S/bleu). La rhodopsine (bâtonnets) ne distingue pas les couleurs (un seul pigment)."
  },
  {
    id: 55, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quelles erreurs réfractives sont correctement décrites ?",
    options: [
      "Astigmatisme : cornée à courbures inégales (en « ballon de rugby »)",
      "Presbytie : chute de l'amplitude d'accommodation avec l'âge",
      "Myopie : l'image se forme en avant de la rétine",
      "Hypermétropie : cornée parfaitement sphérique sans aucun défaut"
    ],
    correct: [0, 1, 2],
    feedback: "Astigmatisme = courbures inégales (rugby) ; presbytie = perte d'accommodation avec l'âge ; myopie = image en avant de la rétine (hypermétropie = en arrière). L'hypermétropie est bien un défaut réfractif (D faux)."
  },
  {
    id: 56, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quelle erreur réfractive est due à une cornée dont les courbures diffèrent selon les méridiens ?",
    options: [
      "L'astigmatisme",
      "La myopie",
      "L'hypermétropie",
      "La presbytie"
    ],
    correct: [0],
    feedback: "Astigmatisme = cornée en forme de ballon de rugby (courbures inégales horizontal/vertical) → certaines orientations de lignes apparaissent moins contrastées (cf. la « figure en éventail »)."
  },
  {
    id: 57, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Concernant l'accommodation et la pupille, quelles affirmations sont correctes ?",
    options: [
      "L'accommodation modifie la puissance du cristallin (via le muscle ciliaire)",
      "La pupille, au centre de l'iris, change de taille selon l'éclairement",
      "L'accommodation se fait par déformation de la cornée",
      "La pupille réalise la transduction de la lumière"
    ],
    correct: [0, 1],
    feedback: "Accommodation = renflement du cristallin lors de la contraction du muscle ciliaire (relâchement des zonules). La pupille (ouverture de l'iris) régule la quantité de lumière. La transduction se fait dans les photorécepteurs, pas la pupille (C et D faux)."
  },
  {
    id: 58, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quels types de mouvements oculaires sont décrits dans le cours ?",
    options: [
      "Les saccades (changement rapide de direction du regard)",
      "La poursuite visuelle lente",
      "La vergence (convergence/divergence, alignement d'un œil par rapport à l'autre)",
      "Les mécanismes de stabilisation : réflexe vestibulo-oculaire et système optocinétique"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Direction du regard : saccades + poursuite lente (alignement par rapport au monde) et vergence (alignement d'un œil vs l'autre, loi de Hering). Stabilisation : vestibulo-oculaire + optocinétique."
  },
  {
    id: 59, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Combien de muscles extra-oculaires meuvent chaque œil ?",
    options: [
      "Six muscles (3 paires)",
      "Quatre muscles (2 paires)",
      "Douze muscles (6 paires)",
      "Deux muscles (1 paire)"
    ],
    correct: [0],
    feedback: "Chaque œil est mû par 6 muscles extra-oculaires (3 paires), qui permettent l'ensemble des mouvements oculaires."
  },
  {
    id: 60, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Quelles affirmations sur les mouvements oculaires sont correctes ?",
    options: [
      "Le réflexe vestibulo-oculaire et le système optocinétique stabilisent le regard",
      "Les saccades changent la direction du regard par rapport au monde extérieur",
      "La vergence repose sur un signal différent pour chaque œil (loi de Hering)",
      "La vergence sert à stabiliser le regard pendant les mouvements de la tête"
    ],
    correct: [0, 1, 2],
    feedback: "Stabilisation = vestibulo-oculaire + optocinétique. Saccades = direction (vs monde). Vergence = alignement d'un œil vs l'autre (signal différent par œil, loi de Hering sur l'innervation inégale). La vergence n'est pas un mécanisme de stabilisation (D faux)."
  },
  {
    id: 61, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Concernant le corps géniculé latéral (CGL), quelles affirmations sont correctes ?",
    options: [
      "Il est situé dans le thalamus et comporte 6 couches",
      "Les couches 1-2 sont magnocellulaires ; les couches 3-6 sont parvocellulaires",
      "Les couches 1-2 sont parvocellulaires (couleur, détails fins)",
      "Il est situé dans le lobe temporal"
    ],
    correct: [0, 1],
    feedback: "CGL = relais thalamique à 6 couches : 1-2 magnocellulaires (grandes cellules → mouvement/contraste), 3-6 parvocellulaires (petites → couleur/détails fins). C inverse les couches ; D se trompe de localisation."
  },
  {
    id: 62, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "Concernant les voies visuelles ventrale et dorsale, quelles affirmations sont correctes ?",
    options: [
      "La voie ventrale (vers le lobe temporal) sert à la reconnaissance des objets (« quoi »)",
      "La voie dorsale (vers le lobe pariétal) traite les relations spatiales et le guidage (« où/comment »)",
      "Les deux voies partent du cortex visuel primaire (V1)",
      "La voie dorsale sert à reconnaître les visages"
    ],
    correct: [0, 1, 2],
    feedback: "Ventrale (temporale) = « quoi » (reconnaissance d'objets/visages) ; dorsale (pariétale) = « où/comment » (spatial, guidage de l'action). Les deux partent de V1. La reconnaissance des visages relève de la voie VENTRALE (D faux)."
  },
  {
    id: 63, bloc: 3, blocLabel: "3 — Fondements biologiques",
    text: "À propos des troubles consécutifs aux lésions, une seule association est FAUSSE. Laquelle ?",
    options: [
      "Lésion pariétale postérieure → prosopagnosie (incapacité à reconnaître les visages)",
      "Lésion temporale → agnosie visuelle associative (voit mais ne reconnaît pas, peut copier)",
      "Lésion pariétale postérieure → simultagnosie (perçoit un seul objet à la fois)",
      "Lésion pariétale postérieure → ataxie optique (erreurs en tendant la main vers une cible)"
    ],
    correct: [0],
    feedback: "FAUX : la prosopagnosie relève de la voie VENTRALE (lésion TEMPORALE), pas pariétale. Simultagnosie et ataxie optique = voie dorsale (pariétale). Agnosie associative = temporale (le patient copie des images sans les reconnaître)."
  },

  // ══ 4 — Perception indirecte vs perception directe ══════════
  {
    id: 64, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Quelle est l'idée centrale de la perception INDIRECTE ?",
    options: [
      "L'information sensorielle est ambiguë : le cerveau reconstruit via des représentations intermédiaires",
      "L'environnement fournit une information suffisante pour guider directement l'action",
      "La perception ne fait jamais appel à la mémoire",
      "Toute perception est un prélèvement direct d'affordances"
    ],
    correct: [0],
    feedback: "Perception indirecte = enrichissement/interprétation progressifs d'une information ambiguë, par médiation de représentations (mises en correspondance avec des représentations stockées). B, C, D décrivent la perception DIRECTE (Gibson)."
  },
  {
    id: 65, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Comment le cours définit-il la perception DIRECTE ?",
    options: [
      "Un processus de sélection, dans la stimulation environnementale, d'informations directement signifiantes en termes de capacités d'action",
      "Selon l'APA : percevoir un objet sur la base du seul stimulus distal, sans inférence ni représentation",
      "Une chaîne de causalité perception-perception (Rock)",
      "Une reconstruction interne enrichissant une image rétinienne ambiguë"
    ],
    correct: [0, 1],
    feedback: "Perception directe = sélection d'informations directement signifiantes pour l'action (Gibson) ; l'APA précise : percevoir sur la base du stimulus distal seul, sans inférence/représentation. La « chaîne perception-perception » (Rock) et la reconstruction interne définissent la perception INDIRECTE."
  },
  {
    id: 66, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Qu'est-ce qu'une « représentation » selon le cours ?",
    options: [
      "En psychologie : un équivalent symbolique d'une réalité (souvent absente des canaux sensoriels)",
      "En neurosciences : un processus de codage nerveux/électrochimique d'un ensemble d'événements",
      "Une notion centrale dans les paradigmes piagétiens",
      "Un concept au cœur du débat perception indirecte vs directe"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Représentation = équivalent symbolique (psycho, cf. Piaget) ou codage nerveux (neuro). C'est LA notion au cœur du débat indirecte/directe : les représentationnalistes la postulent, les non-représentationnalistes (Gibson) la rejettent."
  },
  {
    id: 67, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Concernant les paradigmes représentationnalistes, quelle affirmation est correcte ?",
    options: [
      "Ils sont extrêmement dominants en psychologie et s'appuient (souvent implicitement) sur la métaphore du calcul",
      "Ils sont aujourd'hui minoritaires en psychologie cognitive",
      "Ils rejettent tout héritage philosophique dualiste",
      "Ils correspondent à la psychologie écologique de Gibson"
    ],
    correct: [0],
    feedback: "Les représentationnalistes DOMINENT la psychologie ; ils reposent sur la métaphore du calcul et un héritage dualiste. Gibson (écologique) est au contraire NON-représentationnaliste."
  },
  {
    id: 68, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Quels sont les formats de représentation mentale listés dans le cours ?",
    options: [
      "Analogique (ressemble à ce qu'il représente)",
      "Verbal ou linguistique",
      "Propositionnel",
      "Quantitatif (valeurs numériques)"
    ],
    correct: [0, 1, 2],
    feedback: "Trois formats : analogique (à la perception), verbal/linguistique, et propositionnel. Le format « quantitatif » n'appartient pas à cette classification."
  },
  {
    id: 69, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Que dit le cours du rôle des représentations dans le développement (perspective piagétienne) ?",
    options: [
      "Les représentations se construisent (apports piagétiens et post-piagétiens)",
      "Il y a une abstraction progressive du processus de représentation",
      "Pour Piaget, les représentations sont innées et fixes",
      "Piaget est un précurseur de l'approche écologique de Gibson"
    ],
    correct: [0, 1],
    feedback: "Piaget (et post-piagétiens) : les représentations se construisent, avec une abstraction progressive. Piaget est représentationnaliste — à l'opposé de Gibson (C et D faux)."
  },
  {
    id: 70, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Lequel de ces ensembles relève des paradigmes NON-représentationnalistes ?",
    options: [
      "La psychologie écologique (perception directe, couplage perception-action) et les approches dynamiques des coordinations motrices",
      "La théorie des géons de Biederman",
      "Les paradigmes piagétiens",
      "La métaphore du calcul en psychologie cognitive"
    ],
    correct: [0],
    feedback: "Non-représentationnalistes = psychologie écologique de Gibson (perception directe, couplage perception-action) + approches dynamiques. Biederman, Piaget et la métaphore du calcul sont représentationnalistes."
  },
  {
    id: 71, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Quelles affirmations sur la perception indirecte et ses critiques sont correctes ?",
    options: [
      "Selon Rock (1997), la perception indirecte repose sur des perceptions antérieures (chaîne perception-perception)",
      "La « régression à l'infini » : acquérir des représentations en suppose d'autres, et ainsi de suite",
      "La « désincarnation » : le cerveau y est traité comme un processeur isolé du corps et du monde",
      "Ces critiques visent principalement la perception directe de Gibson"
    ],
    correct: [0, 1, 2],
    feedback: "Rock : indirect = chaîne perception-perception. Critiques DE la perception indirecte : régression à l'infini (acquisition des représentations) et désincarnation (cerveau-ordinateur coupé du corps). Elles ne visent pas Gibson (D faux)."
  },
  {
    id: 72, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Pourquoi l'image rétinienne est-elle dite « ambiguë » dans l'approche indirecte ?",
    options: [
      "Une même image rétinienne peut correspondre à plusieurs configurations distales (question rétinien/phénoménal)",
      "Le cerveau doit donc « parier » sur l'interprétation la plus probable",
      "L'information environnementale suffit toujours, sans aucune ambiguïté",
      "L'ambiguïté disparaît dès que l'on bouge (selon les représentationnalistes)"
    ],
    correct: [0, 1],
    feedback: "Pour l'approche indirecte, l'image rétinienne est ambiguë (plusieurs causes distales possibles) → le système reconstruit/infère (« meilleur pari »). L'idée que l'information suffit sans ambiguïté est le postulat de Gibson (perception directe), pas de l'approche indirecte."
  },
  {
    id: 73, bloc: 4, blocLabel: "4 — Indirecte vs directe",
    text: "Quelles oppositions entre perception indirecte et directe sont correctes ?",
    options: [
      "Indirecte : information ambiguë → reconstruction interne via représentations",
      "Directe : information environnementale riche et non-ambiguë, directement utilisable pour l'action",
      "Indirecte : approche dominante en psychologie cognitive",
      "Directe : associée à la psychologie écologique de Gibson"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Indirecte = reconstruction représentationnelle d'une info ambiguë (dominante en psycho cognitive) ; directe = prélèvement d'une info riche et non-ambiguë pour l'action (Gibson, écologique). Les quatre énoncés sont exacts."
  },

  // ══ 5 — Perception indirecte : Biederman & géons ════════════
  {
    id: 74, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Qu'est-ce qu'un géon selon Biederman (1987) ?",
    options: [
      "Une primitive volumétrique simple (cylindre, cône, brique…) servant à reconnaître les objets",
      "Une primitive auditive élémentaire",
      "Une représentation photographique complète de l'objet",
      "Une affordance au sens de Gibson"
    ],
    correct: [0],
    feedback: "Géon = primitive volumétrique (cylindre, cône, brique…) dans la théorie « recognition-by-components » de Biederman (1987). Les objets sont reconnus en les décomposant en géons et en leurs relations spatiales."
  },
  {
    id: 75, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Quelles propriétés Biederman attribue-t-il aux géons ?",
    options: [
      "Il en propose un nombre limité (≈ 36)",
      "Ils sont « viewpoint-invariant » : reconnaissables depuis la plupart des angles",
      "Ils restent discriminables même en conditions visuelles dégradées",
      "Ce sont des images mémorisées spécifiques à chaque objet"
    ],
    correct: [0, 1, 2],
    feedback: "Biederman propose ~36 géons, viewpoint-invariant (sauf « angles accidentels ») et discriminables même dégradés → reconnaissance robuste. Ce ne sont PAS des images photographiques (D faux)."
  },
  {
    id: 76, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Comment reconnaît-on une tasse selon la théorie de Biederman ?",
    options: [
      "En la décomposant en géons (un cylindre pour le corps, un tore pour l'anse) et leurs relations spatiales",
      "La reconnaissance fonctionne depuis la plupart des angles, sauf les angles accidentels",
      "En mémorisant une photographie précise de chaque tasse rencontrée",
      "En prélevant directement l'affordance « boire » (Gibson)"
    ],
    correct: [0, 1],
    feedback: "Biederman : tasse = cylindre (corps) + tore (anse) + relations spatiales ; reconnaissance viewpoint-invariant (sauf angles accidentels). La mémorisation photographique et l'affordance directe relèvent d'autres approches."
  },
  {
    id: 77, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "La théorie de Biederman s'inscrit dans quelle perspective, et quelles affirmations sont correctes ?",
    options: [
      "C'est une approche de la perception INDIRECTE (représentationnaliste)",
      "Elle postule des primitives internes (géons) entre le stimulus et la reconnaissance",
      "Elle a été publiée en 1987 (Recognition-by-Components)",
      "Elle s'oppose au prélèvement direct d'affordances de Gibson"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Biederman (1987) = perception indirecte/représentationnaliste : des géons internes médiatisent la reconnaissance. Cela s'oppose à Gibson, pour qui c'est l'affordance (et non une forme géométrique interne) qui est prélevée directement."
  },
  {
    id: 78, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Dans la théorie des géons, qu'est-ce qui peut mettre en échec la reconnaissance « viewpoint-invariant » ?",
    options: [
      "Les « angles accidentels » (points de vue très particuliers masquant la structure)",
      "La présence de couleurs vives",
      "Le fait que l'objet soit familier",
      "L'utilisation de la vision binoculaire"
    ],
    correct: [0],
    feedback: "Les géons sont reconnaissables depuis la plupart des angles SAUF certains « angles accidentels » très spécifiques où la structure volumétrique n'est plus lisible."
  },
  {
    id: 79, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Que montre l'expérience « Dr. Angry and Mr. Smile » (Schyns & Oliva, 1999) ?",
    options: [
      "Les primitives perceptives ne sont pas fixes : elles dépendent des catégories formées par l'observateur",
      "La catégorisation d'un visage hybride varie selon l'observateur (et l'échelle spatiale traitée)",
      "Elle confirme que les géons sont des primitives universelles et fixes",
      "Elle ne concerne que la perception auditive"
    ],
    correct: [0, 1],
    feedback: "Schyns & Oliva (1999) : avec un visage hybride (une expression en hautes fréquences, une autre en basses fréquences), la catégorisation dépend de l'observateur → les « primitives » sont flexibles. Cela remet en cause l'universalité/fixité des géons (C faux)."
  },
  {
    id: 80, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Pourquoi dit-on que les géons sont « discriminables », et quelle en est la portée ?",
    options: [
      "Ils restent distinguables même en conditions dégradées (occlusion, faible luminosité)",
      "Cela rend la reconnaissance robuste même avec une information partielle",
      "Cette idée d'universalité est interrogée par Schyns & Oliva (1999)",
      "Cela signifie que deux géons distincts peuvent toujours être confondus"
    ],
    correct: [0, 1, 2],
    feedback: "Discriminables = deux géons restent distinguables même dégradés → reconnaissance robuste. Schyns & Oliva interrogent toutefois la fixité/universalité des primitives. D est contradictoire (discriminable = NON confondus)."
  },
  {
    id: 81, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "À quel grand paradigme la théorie de Biederman appartient-elle ?",
    options: [
      "Au paradigme représentationnaliste (perception indirecte)",
      "Au paradigme écologique de Gibson (perception directe)",
      "Au sensualisme de Condillac",
      "À la théorie de la détection du signal"
    ],
    correct: [0],
    feedback: "Biederman postule des représentations internes (géons) → paradigme représentationnaliste / perception indirecte. C'est l'opposé de l'approche directe de Gibson."
  },
  {
    id: 82, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Selon Biederman, qu'est-ce qui permet de distinguer deux objets composés des mêmes géons ?",
    options: [
      "Les relations spatiales entre les géons (agencement)",
      "La structure (configuration) et non seulement la liste des composants",
      "La couleur dominante de l'objet uniquement",
      "Rien : deux objets aux mêmes géons sont toujours identiques"
    ],
    correct: [0, 1],
    feedback: "La reconnaissance dépend des géons ET de leurs relations spatiales : un même jeu de géons agencé différemment donne des objets différents. La couleur n'est pas le critère central (C et D faux)."
  },
  {
    id: 83, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Quelles affirmations résument correctement le débat autour des géons ?",
    options: [
      "Biederman : reconnaissance par décomposition en primitives volumétriques internes",
      "Les géons seraient en nombre limité et largement invariants au point de vue",
      "Schyns & Oliva : les primitives dépendent des catégories/attentes de l'observateur",
      "Le débat porte sur le caractère fixe et universel — ou flexible — des primitives perceptives"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Biederman défend des primitives internes fixes (géons, ≈ 36, viewpoint-invariant). Schyns & Oliva montrent leur flexibilité (dépendance aux catégories de l'observateur). Le débat porte bien sur fixité/universalité vs flexibilité."
  },
  {
    id: 84, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Les géons de Biederman sont des primitives…",
    options: [
      "visuelles (de la reconnaissance d'objets)",
      "auditives (de la reconnaissance de phonèmes)",
      "tactiles",
      "olfactives"
    ],
    correct: [0],
    feedback: "Les géons sont des primitives VISUELLES servant à la reconnaissance des objets (formes volumétriques)."
  },
  {
    id: 85, bloc: 5, blocLabel: "5 — Indirecte : Biederman & géons",
    text: "Dans l'illusion d'image hybride (Oliva & Schyns), quelles affirmations sont correctes ?",
    options: [
      "Une image combine des informations à différentes échelles spatiales (hautes vs basses fréquences)",
      "L'interprétation dépend de la distance d'observation et/ou des catégories activées",
      "Cela illustre que la catégorisation peut modifier la perception du même stimulus",
      "Cela prouve que la perception est identique quel que soit l'observateur"
    ],
    correct: [0, 1, 2],
    feedback: "Les images hybrides mêlent hautes et basses fréquences spatiales : selon la distance/les catégories activées, on perçoit l'une ou l'autre expression. Cela montre que la catégorisation modifie la perception (D faux)."
  },

  // ══ 6 — Perception directe : Gibson ═════════════════════════
  {
    id: 86, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Quels sont les postulats fondamentaux de l'approche écologique de Gibson ?",
    options: [
      "Le sujet et son environnement forment un couple indissociable",
      "La perception (prélèvement d'information) est déterminée par l'action en cours",
      "La perception détermine de façon non-ambiguë un état du système sujet-environnement",
      "« Perception is for doing » : percevoir est au service de l'action"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Gibson : (1) couple sujet-environnement indissociable ; (2) perception déterminée par l'action en cours ; (3) la perception spécifie de façon non-ambiguë l'état du couple. Devise : « perception is for doing » (l'action crée l'information, l'information spécifie l'action)."
  },
  {
    id: 87, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Qu'est-ce que la « stimulation perceptive » chez Gibson (vs approche computationnelle) ?",
    options: [
      "Un patron d'énergie lumineuse parvenant au point d'observation après réflexion sur les surfaces",
      "L'image rétinienne bidimensionnelle à reconstruire",
      "Une représentation interne stockée en mémoire",
      "Un géon volumétrique"
    ],
    correct: [0],
    feedback: "Pour Gibson, la stimulation perceptive = patron d'énergie lumineuse (configuration optique) au point d'observation, après réflexion sur les surfaces — par opposition à l'« image rétinienne » des approches computationnelles."
  },
  {
    id: 88, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Que désignent la « configuration optique » et le « point d'observation » ?",
    options: [
      "L'ensemble des angles sous-tendus par les surfaces par rapport au point d'observation",
      "À chaque point d'observation correspond un agencement structuré particulier du patron lumineux",
      "Une image inversée formée sur la rétine",
      "Une représentation propositionnelle de la scène"
    ],
    correct: [0, 1],
    feedback: "Configuration optique = ensemble structuré d'angles sous-tendus par les surfaces, propre à chaque point d'observation. Ce n'est ni l'image rétinienne ni une représentation propositionnelle."
  },
  {
    id: 89, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Concernant le flux optique, quelles affirmations sont correctes ?",
    options: [
      "C'est le changement des configurations optiques au cours du temps",
      "On distingue un flux optique global et un flux optique local",
      "Un élément optique peut être décrit par un vecteur (amplitude, direction, sens)",
      "Le flux optique est une représentation interne reconstruite par le cerveau"
    ],
    correct: [0, 1, 2],
    feedback: "Flux optique = transformation des configurations optiques dans le temps (global/local) ; chaque élément peut être modélisé par un vecteur (amplitude, direction, sens). Pour Gibson, il est directement disponible dans la stimulation, pas reconstruit (D faux)."
  },
  {
    id: 90, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Qu'est-ce qu'un invariant STRUCTURAL ?",
    options: [
      "Un invariant peu ou pas influencé par le déplacement de l'observateur (permanence : taille, forme)",
      "Un invariant dont les valeurs dépendent du déplacement de l'observateur",
      "Une représentation interne de l'objet",
      "Le temps restant avant contact avec une cible"
    ],
    correct: [0],
    feedback: "Invariant structural = permanence des objets (taille, forme, composition), peu/pas influencé par le déplacement de l'observateur (ex. gradient de texture). Celui qui dépend du déplacement = invariant transformationnel (ex. τ)."
  },
  {
    id: 91, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Comment distinguer invariants structuraux et transformationnels (« de contrôle ») ?",
    options: [
      "Structuraux : peu/pas influencés par la nature du déplacement de l'observateur",
      "Transformationnels : influencés par le déplacement → utilisables pour indexer/contrôler son propre mouvement",
      "Structuraux : le focus d'expansion et le tau (τ)",
      "Transformationnels : la taille et la forme permanentes des objets"
    ],
    correct: [0, 1],
    feedback: "Structuraux = permanence (taille, forme), indépendants du déplacement. Transformationnels/de contrôle = influencés par le déplacement (ex. focus d'expansion, τ) → servent à contrôler son mouvement. C et D inversent les exemples."
  },
  {
    id: 92, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Concernant τ (tau), quelles affirmations sont correctes ?",
    options: [
      "τ = taille angulaire / taux de croissance de cette taille angulaire",
      "Il estime le temps restant avant contact avec un objet en approche",
      "Il est directement disponible dans le flux optique, sans calculer séparément distance et vitesse",
      "C'est un invariant transformationnel (de contrôle)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "τ = taille angulaire / taux de croissance = temps avant contact. Avantage : disponible DIRECTEMENT dans le flux optique (pas besoin de distance et vitesse séparées). C'est un invariant transformationnel/de contrôle."
  },
  {
    id: 93, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Qu'est-ce qu'une affordance selon Gibson ?",
    options: [
      "Une possibilité d'action offerte par l'environnement au sujet (dans la relation organisme-environnement)",
      "Une propriété de l'objet seul, indépendante de l'organisme",
      "Une représentation mentale de l'objectif à atteindre",
      "Un géon volumétrique"
    ],
    correct: [0],
    feedback: "Affordance = possibilité d'action, située dans la RELATION organisme-environnement (perception « relative » des propriétés). Elle n'est ni dans l'objet seul, ni une représentation interne."
  },
  {
    id: 94, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Que montre l'étude de Warren (1984) sur la montée d'escaliers ?",
    options: [
      "L'« escaladabilité » dépend d'un rapport entre la hauteur de marche et la dimension du corps (longueur de jambe)",
      "Le même escalier peut être montable pour un adulte mais pas pour un enfant",
      "Il existe des points critiques biomécaniques et des points optimaux physiologiques (rapportés à L)",
      "La hauteur de marche seule (en cm) suffit, indépendamment du corps"
    ],
    correct: [0, 1, 2],
    feedback: "Warren (1984) : l'escaladabilité est un rapport hauteur de marche / dimension corporelle (point critique ≈ .88·L, optimum ≈ .25·L) → affordance relative à l'organisme (adulte vs enfant). La hauteur seule ne suffit pas (D faux)."
  },
  {
    id: 95, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Qu'est-ce qu'une « loi de contrôle » dans l'approche de Gibson ?",
    options: [
      "Une règle liant directement une variable perceptive (information) et des forces/action",
      "Ex. : maintenir τ constant lors de l'approche pour un contact en douceur",
      "Une règle nécessitant une représentation mentale préalable de l'objectif",
      "Une loi purement linguistique sans lien avec l'action"
    ],
    correct: [0, 1],
    feedback: "Lois de contrôle = relations directes information ↔ forces (accélération, impulsion, raideur ; ex. I = mg·Δτ), sans représentation. Ex. maintenir τ constant → contact en douceur (couplage perception-action direct)."
  },
  {
    id: 96, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Que démontre la « chambre oscillante » (swinging room) de Lee ?",
    options: [
      "Le flux optique peut dominer les informations vestibulaires pour le contrôle de la posture",
      "Les informations vestibulaires dominent toujours sur la vision",
      "La posture ne dépend d'aucune information visuelle",
      "Les enfants sont insensibles au flux optique"
    ],
    correct: [0],
    feedback: "Chambre oscillante : quand les murs bougent (pas le sol), le flux optique signale un déplacement → le sujet (surtout l'enfant) compense et chancelle/tombe. Le flux optique DOMINE alors les infos vestibulaires (couplage gibsonien)."
  },
  {
    id: 97, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Que montrent les travaux de Warren, Young & Lee (1986) sur la course en terrain irrégulier ?",
    options: [
      "Le contrôle visuel régule la longueur des pas/foulées",
      "Ils illustrent les lois de contrôle reliant information optique et forces (impulsion)",
      "Ils s'inscrivent dans le couplage perception-action de Gibson",
      "Ils prouvent que la course ne dépend d'aucune information visuelle"
    ],
    correct: [0, 1, 2],
    feedback: "Warren, Young & Lee (1986) : la longueur de pas est régulée visuellement (ajustement de l'impulsion verticale) → illustration des lois de contrôle (information ↔ forces) et du couplage perception-action. La vision est centrale (D faux)."
  },
  {
    id: 98, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Chez Gibson, quelle est la différence entre « invariant » et « information » ?",
    options: [
      "L'invariant est une propriété du flux optique (support informationnel potentiel)",
      "L'information est le statut que prend l'invariant lorsqu'il est détecté (état du couplage sujet-environnement)",
      "L'invariant est une représentation stockée en mémoire à long terme",
      "L'information est totalement indépendante du couplage sujet-environnement"
    ],
    correct: [0, 1],
    feedback: "Invariant = propriété (potentielle) du flux optique ; information = ce statut une fois l'invariant DÉTECTÉ, portant de façon non-ambiguë sur l'état du couplage sujet-environnement. Rien à voir avec une représentation stockée (C et D faux)."
  },
  {
    id: 99, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Pourquoi dit-on que les affordances sont « relatives » à l'organisme ?",
    options: [
      "Elles dépendent des capacités motrices et perceptives de l'organisme",
      "Une même branche afforde la grimpe pour un singe, pas forcément pour un humain",
      "Le même escalier n'afforde pas la montée de la même façon pour un adulte et un enfant",
      "Elles sont perçues directement, sans inférence"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Une affordance dépend des capacités de l'organisme (« relative ») : branche pour un singe, escalier selon la longueur de jambe… et elle est perçue directement, sans inférence. Les quatre énoncés sont exacts."
  },
  {
    id: 100, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "Quelle est une limite majeure de l'approche gibsonienne ?",
    options: [
      "Elle est difficile à formaliser sur le plan computationnel (comment modéliser une affordance ?)",
      "Elle nie totalement l'existence du cerveau",
      "Elle ne s'applique qu'aux animaux non-humains",
      "Elle suppose des représentations internes riches"
    ],
    correct: [0],
    feedback: "Gibson est difficile à formaliser computationnellement et peine dans des environnements appauvris (brouillard, labo). Il ne nie pas le cerveau, s'applique aux humains, et REFUSE justement les représentations internes (B, C, D faux)."
  },
  {
    id: 101, bloc: 6, blocLabel: "6 — Directe : Gibson",
    text: "En quoi Gibson s'oppose-t-il à Biederman ?",
    options: [
      "Gibson rejette les représentations intermédiaires (géons) entre stimulus et action",
      "Pour Gibson, l'unité de perception est l'affordance, pas la forme géométrique interne",
      "Gibson, comme Biederman, postule des primitives internes",
      "Biederman défend la perception directe sans représentation"
    ],
    correct: [0, 1],
    feedback: "Gibson (direct) : pas de représentations internes → on prélève des affordances. Biederman (indirect) : géons internes. C et D inversent les positions des deux auteurs."
  },

  // ══ 7 — Expertise & perception catégorielle ═════════════════
  {
    id: 102, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Comment la perspective cognitiviste classique définit-elle l'expertise perceptivo-cognitive ?",
    options: [
      "La détention d'un stock riche et bien organisé de connaissances en MLT, activables selon les besoins",
      "Une capacité innée indépendante de toute connaissance",
      "Le prélèvement direct d'affordances sans aucune mémoire",
      "Une simple rapidité motrice"
    ],
    correct: [0],
    feedback: "Perspective classique : expertise = stock exceptionnellement riche et bien organisé de connaissances spécifiques en mémoire à long terme, activables selon les besoins du traitement."
  },
  {
    id: 103, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Concernant les « chunks » dans l'expertise (ex. les échecs), quelles affirmations sont correctes ?",
    options: [
      "On estime 50 000 à 300 000 chunks en MLT chez les experts aux échecs",
      "Les experts perçoivent des structures (configurations) que les novices ne voient pas",
      "Dans les milieux à espace continu, le nombre de chunks pose problème (potentiellement infini)",
      "Les chunks correspondent à une mémorisation pièce par pièce, sans structure"
    ],
    correct: [0, 1, 2],
    feedback: "Échecs (espace discret) : 50 000 à 300 000 chunks en MLT ; les experts encodent des STRUCTURES signifiantes (pas pièce par pièce). En milieu continu, le dénombrement des chunks devient problématique (D faux)."
  },
  {
    id: 104, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Quelles sont les deux limites de la vision classique de l'expertise pointées dans le cours ?",
    options: [
      "La négligence de la rationalité limitée (l'expert n'est pas une machine optimale)",
      "La désincarnation : l'expertise est traitée comme une base de connaissances externe aux processus corporels",
      "La surestimation systématique du nombre de chunks",
      "L'oubli total du rôle de la mémoire à long terme"
    ],
    correct: [0, 1],
    feedback: "Deux limites : (1) négligence de la rationalité limitée ; (2) désincarnation (connaissances « extérieures » aux processus, ignorant que savoir-faire et perception sont incarnés dans le corps et l'action)."
  },
  {
    id: 105, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "À propos de la perception des experts aux échecs (Reingold & Charness, 2005), quelles affirmations sont correctes ?",
    options: [
      "L'analyse des mouvements oculaires révèle des différences experts/novices",
      "Les experts perçoivent des structures (relations entre pièces) invisibles aux novices",
      "Les positions du regard (gaze) diffèrent selon le niveau d'expertise",
      "La pratique délibérée cumulée distingue maîtres et grands maîtres"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Reingold & Charness (2005) : les mouvements oculaires (gaze) montrent que les experts saisissent des structures relationnelles que les novices ne perçoivent pas ; la pratique délibérée cumulée distingue Class A, Maîtres et Grands maîtres."
  },
  {
    id: 106, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Que montre l'étude de Laurent, Ward, Williams & Ripoll (2006) sur l'expertise au basketball ?",
    options: [
      "L'expertise modifie les capacités de discrimination perceptive, les processus cognitifs et les comportements visuels",
      "L'expertise sportive n'a aucun effet sur la perception",
      "Seule la vitesse de course distingue experts et novices",
      "Les experts mémorisent les scènes pixel par pixel"
    ],
    correct: [0],
    feedback: "Laurent, Ward, Williams & Ripoll (2006) : l'expertise en basketball modifie les capacités de discrimination perceptive, les processus cognitifs sous-jacents et les comportements visuels (exploration du regard)."
  },
  {
    id: 107, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "L'idée que « les experts perçoivent des structures que les novices ne perçoivent pas » est illustrée par…",
    options: [
      "La radiologie (Sowden, Davies & Roling, 2000)",
      "Le sexage de poussins chez certaines volailles (Biederman & Shiffrar, 1987)",
      "L'incapacité totale des experts à apprendre de nouvelles catégories",
      "Le fait que l'expertise soit purement innée"
    ],
    correct: [0, 1],
    feedback: "Les experts produisent des concepts spécifiques et sont plus sensibles à certaines variations physiques : radiologie (Sowden et al., 2000) et sexage de poussins (Biederman & Shiffrar, 1987). L'expertise s'apprend (C et D faux)."
  },
  {
    id: 108, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Selon Harnad (1987), qu'est-ce que la perception catégorielle ?",
    options: [
      "Une stimulation continue, variable et non différenciée est classée en catégories distinctes",
      "Les membres d'une même catégorie acquièrent des relations de similarité perceptive",
      "Les membres de catégories différentes acquièrent des relations de dissimilarité perceptive",
      "C'est la mémorisation pièce par pièce d'une scène visuelle"
    ],
    correct: [0, 1, 2],
    feedback: "Harnad (1987) : la perception catégorielle classe une stimulation continue en catégories → similarité accrue AU SEIN d'une catégorie, dissimilarité accrue ENTRE catégories. Rien à voir avec une mémorisation pièce par pièce (D faux)."
  },
  {
    id: 109, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Une seule affirmation sur la perception catégorielle est FAUSSE. Laquelle ?",
    options: [
      "Elle accentue les différences entre membres d'une MÊME catégorie",
      "Elle accentue les différences entre catégories différentes",
      "Elle réduit la complexité de la stimulation",
      "Elle a un caractère « direct »"
    ],
    correct: [0],
    feedback: "FAUX : au sein d'une même catégorie, les différences sont MINIMISÉES (pas accentuées). La perception catégorielle accentue les différences inter-catégories, réduit la complexité et a un caractère direct (ses deux caractéristiques essentielles)."
  },
  {
    id: 110, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Selon Goldstone & Hendrickson (2010), quelles affirmations sur la perception catégorielle sont correctes ?",
    options: [
      "Elle est le processus de production de la pensée protosymbolique",
      "Elle crée des classes d'équivalence pour des stimuli physiquement différents",
      "La discrimination est meilleure entre catégories différentes qu'au sein d'une même catégorie",
      "Un changement physique linéaire produit un changement perceptif non-linéaire"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Goldstone & Hendrickson (2010) : perception catégorielle = production de pensée protosymbolique via des classes d'équivalence ; meilleure discrimination inter- qu'intra-catégorie ; changement physique linéaire → changement perceptif non-linéaire (frontière abrupte)."
  },
  {
    id: 111, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Que montre l'expérience de Lisker & Abramson (1970) sur le Voice Onset Time (VOT) ?",
    options: [
      "Le VOT varie de façon physiquement continue, mais on perçoit /b/ et /p/ comme deux catégories nettes",
      "Un changement physique continu produit un changement perceptif abrupt (non-linéaire)",
      "Les phonèmes sont perçus de façon strictement continue, sans frontière",
      "Le VOT ne concerne que la vision des couleurs"
    ],
    correct: [0, 1],
    feedback: "Lisker & Abramson (1970) : malgré un continuum physique (VOT), la perception de /b/ vs /p/ est catégorielle (frontière nette) → continu physique, abrupt perceptif. Exemple de perception catégorielle des phonèmes (C et D faux)."
  },
  {
    id: 112, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Lequel de ces domaines N'est PAS cité comme exemple de perception catégorielle dans le cours ?",
    options: [
      "La perception de la douleur thermique",
      "Les phonèmes",
      "Les couleurs",
      "Les visages"
    ],
    correct: [0],
    feedback: "Domaines cités : phonèmes, couleurs, figures géométriques simples (Goldstone, 1994), visages (Beale & Keil ; Levin & Beale), objets familiers (Newell & Bülthoff). La douleur thermique n'en fait pas partie."
  },
  {
    id: 113, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "La perception catégorielle peut-elle s'acquérir ? Quels éléments l'illustrent ?",
    options: [
      "Oui : par apprentissage de catégories arbitraires sur des figures géométriques (Goldstone, 1994)",
      "La perception catégorielle des phonèmes est en partie spécifique à la culture/langue",
      "Elle est en partie innée (ex. couleurs) mais aussi acquise",
      "Elle est entièrement innée et ne peut jamais être apprise"
    ],
    correct: [0, 1, 2],
    feedback: "La perception catégorielle est en partie innée (couleurs) ET acquise : apprentissage de catégories arbitraires sur figures géométriques (Goldstone, 1994) ; phonèmes en partie spécifiques à la langue maternelle. D est donc faux."
  },
  {
    id: 114, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Vers quelle définition « enactive » de l'expertise le cours fait-il évoluer la notion ?",
    options: [
      "Une capacité à coordonner la recherche d'information et les dimensions téléologiques (buts) des systèmes cognitifs",
      "Une expertise incarnée : perception et savoir-faire ne sont pas séparés du corps et de l'action",
      "Une expertise réduite à une base de données externe au corps",
      "Une dissociation stricte « hardware / software »"
    ],
    correct: [0, 1],
    feedback: "Définition enactive (Laurent & Ripoll) : coordination entre recherche d'information et dimensions téléologiques (buts) ; expertise INCARNÉE — par opposition à la dissociation hardware/software et à la « base de connaissances » externe de la perspective classique."
  },
  {
    id: 115, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Le modèle générique classique de la prise de décision (perspective dominante) comprend quels éléments ?",
    options: [
      "Une étape de détection des événements environnementaux",
      "Une étape de reconnaissance",
      "Une étape de sélection de la réponse, envoyée aux effecteurs",
      "Une base de connaissances mobilisée dans le traitement"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Modèle classique (Laurent, 2003) : détection → reconnaissance → sélection de la réponse (vers les effecteurs), avec une base de connaissances. C'est ce modèle « désincarné » que l'approche enactive critique."
  },
  {
    id: 116, bloc: 7, blocLabel: "7 — Expertise & perception catégorielle",
    text: "Selon le cours, quel est le lien entre perception catégorielle et cognition ?",
    options: [
      "Elle implique à la fois des processus de bas niveau (perception) et de haut niveau (concepts)",
      "Perception et conception sont totalement séparées, sans aucun échange",
      "Seuls les concepts influencent la perception, jamais l'inverse",
      "Elle ne concerne que la mémoire"
    ],
    correct: [0],
    feedback: "La perception catégorielle articule bas niveau (perception) et haut niveau (concepts) : c'est un phénomène-charnière en sciences cognitives, où catégories perceptives et conceptuelles s'influencent mutuellement."
  },

  // ══ 8 — Phylogenèse & Proffitt (économie de l'action) ═══════
  {
    id: 117, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "À quelle approche se rattachent les travaux de Proffitt et collaborateurs ?",
    options: [
      "Une approche évolutionniste (phylogénétique) du jugement perceptif",
      "La psychophysique classique des seuils absolus",
      "La théorie trichromatique de la couleur",
      "La doctrine des énergies nerveuses spécifiques"
    ],
    correct: [0],
    feedback: "Proffitt développe une approche ÉVOLUTIONNISTE (phylogénétique) : la perception visuelle refléterait des pressions de sélection et serait au service de la survie."
  },
  {
    id: 118, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Selon Proffitt (2006), « la perception visuelle n'est pas un processus purement visuel ». Qu'implique cette idée ?",
    options: [
      "Ce que l'on voit dépend aussi des buts, de l'état physiologique et des émotions",
      "Les perceptions sont incarnées (embodied)",
      "Elles relient le corps et les buts aux opportunités et aux coûts de l'action",
      "La perception ne dépend que de l'information optique et oculomotrice"
    ],
    correct: [0, 1, 2],
    feedback: "Proffitt (2006) : la perception est incarnée — elle dépend des buts, de l'état physiologique et des émotions, et relie le corps aux opportunités et coûts de l'action. Elle ne se réduit donc pas à l'optique/oculomoteur (D faux)."
  },
  {
    id: 119, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Quelles sont les hypothèses générales de la théorie de Proffitt (2006) ?",
    options: [
      "La structure/fonction de l'œil étant façonnée par des pressions évolutives, la perception visuelle en reflète aussi",
      "La perception visuelle promeut la survie en rendant conscient des opportunités ET des coûts de l'action",
      "La perception est totalement indépendante de toute pression évolutive",
      "Seules les variables optiques déterminent la perception de l'espace"
    ],
    correct: [0, 1],
    feedback: "Hypothèses de Proffitt : (1) comme l'œil, la perception visuelle reflète des pressions évolutives ; (2) elle favorise la survie en signalant opportunités et coûts de l'action. C et D contredisent la théorie."
  },
  {
    id: 120, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Qu'est-ce que le principe d'« économie de l'action » (à bien retenir pour l'examen) ?",
    options: [
      "Le gain d'énergie doit excéder le coût lié à son obtention (loi de survie)",
      "La consommation d'énergie doit être gérée au mieux",
      "La perception relie les propriétés distales de l'environnement aux coûts énergétiques de la locomotion",
      "L'économie de l'action est formative de la perception visuelle"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Économie de l'action (principe central) : gain énergétique > coût d'obtention ; gestion optimale de l'énergie ; la perception couple propriétés distales et coûts énergétiques de l'action → l'économie de l'action est FORMATIVE de la perception."
  },
  {
    id: 121, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Qu'observe-t-on dans les jugements d'inclinaison de pente (Proffitt et al., 1995) ?",
    options: [
      "Les pentes sont systématiquement surestimées (une pente de 5° est perçue bien plus raide, ~20°)",
      "Les pentes sont systématiquement sous-estimées",
      "Les pentes sont jugées avec une précision parfaite",
      "Seules les pentes supérieures à 45° sont surestimées"
    ],
    correct: [0],
    feedback: "Les inclinaisons de pente sont fortement SURESTIMÉES (une pente de 5° peut être jugée ~20°), surestimation plus marquée pour les petites pentes."
  },
  {
    id: 122, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Dans les expériences de Proffitt, quelles modalités de jugement surestiment fortement, et laquelle reste précise ?",
    options: [
      "Les modalités VISUELLE et VERBALE surestiment fortement (jugements « explicites », conscients)",
      "La modalité HAPTIQUE (mise en correspondance manuelle/visuomotrice) reste relativement précise",
      "La modalité haptique surestime davantage que la visuelle et la verbale",
      "La modalité visuelle est la plus précise des trois"
    ],
    correct: [0, 1],
    feedback: "Point clé : ce sont les mesures VISUELLE et VERBALE (conscience explicite) qui surestiment fortement, tandis que la mesure HAPTIQUE (action guidée) reste précise — d'où la dissociation conscience explicite / actions guidées visuellement. (C et D inversent le résultat.)"
  },
  {
    id: 123, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Que montre l'effet de la fatigue sur l'estimation de pente (Proffitt et al., 1995, Exp. 5 : coureurs) ?",
    options: [
      "Après une course éreintante, les pentes sont jugées plus raides",
      "Seuls les jugements VERBAL et VISUEL sont affectés par la fatigue",
      "Le coût de l'effort locomoteur anticipé n'est plus le même après l'effort",
      "La mesure haptique est la plus affectée par la fatigue"
    ],
    correct: [0, 1, 2],
    feedback: "Après l'effort, la surestimation augmente : seuls les jugements VERBAL et VISUEL (explicites) sont affectés ; l'anticipation d'un coût énergétique accru en est la cause. La mesure haptique n'est PAS la plus affectée (D faux)."
  },
  {
    id: 124, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Quel effet le port d'un sac à dos lourd a-t-il sur la perception des pentes (Bhalla & Proffitt, 1999) ?",
    options: [
      "Il augmente la surestimation de l'inclinaison perçue",
      "Il diminue la surestimation",
      "Il n'a aucun effet",
      "Il rend la mesure haptique totalement erronée"
    ],
    correct: [0],
    feedback: "Bhalla & Proffitt (1999) : porter une charge lourde augmente la surestimation de la pente — le coût anticipé de l'action, accru, déforme les jugements explicites (visuel/verbal)."
  },
  {
    id: 125, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Pourquoi la surestimation des pentes concerne-t-elle surtout les petites inclinaisons ? (raisonnement adaptatif)",
    options: [
      "Elle accroît la sensibilité aux différences entre petites pentes habituellement gravissables",
      "Distinguer 5° de 6° est important pour la locomotion quotidienne",
      "Distinguer 65° de 66° (falaise) importe moins dans la vie quotidienne",
      "Cela facilite la planification de la locomotion"
    ],
    correct: [0, 1, 2, 3],
    feedback: "La surestimation est maximale pour les petites pentes : elle augmente la sensibilité aux différences pertinentes pour la locomotion (5° vs 6° compte ; 65° vs 66° beaucoup moins) → utile à la planification de l'action."
  },
  {
    id: 126, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Que montre l'expérience sur l'effort et la distance (Proffitt, Stefanucci, Banton & Epstein, 2003, Exp. 3) ?",
    options: [
      "Un flux optique cohérent avec l'effort permet une recalibration correcte des distances perçues",
      "Le flux optique joue un rôle dans la calibration effort/espace",
      "L'effort n'a jamais aucun effet sur la perception des distances",
      "Le flux optique est sans rôle ; seul l'effort compte"
    ],
    correct: [0, 1],
    feedback: "Proffitt et al. (2003, Exp. 3) : marche sur tapis avec flux optique cohérent → recalibration correcte des distances. Le flux optique participe donc à la calibration effort/espace (C et D faux)."
  },
  {
    id: 127, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Qu'appelle-t-on la « dissociation » centrale dans la théorie de Proffitt ?",
    options: [
      "La dissociation entre conscience explicite (visuel/verbal, déformée) et actions guidées visuellement (précises)",
      "La dissociation entre cônes et bâtonnets",
      "La dissociation entre voie magnocellulaire et parvocellulaire",
      "La dissociation entre seuil absolu et seuil différentiel"
    ],
    correct: [0],
    feedback: "Proffitt : dissociation entre la conscience explicite des étendues spatiales (jugements visuel/verbal, déformés par les coûts énergétiques) et les actions guidées visuellement (qui restent calibrées)."
  },
  {
    id: 128, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Quelles conclusions générales le cours tire-t-il des travaux de Proffitt ?",
    options: [
      "Le jugement perceptif est ancré dans le niveau de disponibilité physiologique du corps",
      "Le rapport au monde est modulé par notre capacité d'action sur le monde",
      "Cela s'inscrit dans une écologie biologique (survie)",
      "La perception est un processus neutre, indépendant de l'état du corps"
    ],
    correct: [0, 1, 2],
    feedback: "Conclusions : le jugement perceptif est ancré dans la disponibilité physiologique du corps et dans la capacité d'action, finalisé par une écologie biologique (survie). La perception n'est donc PAS neutre (D faux)."
  },
  {
    id: 129, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Pourquoi parle-t-on de « phylogenèse » à propos de la théorie de Proffitt ?",
    options: [
      "Parce que la perception y est expliquée par des pressions évolutives (sélection naturelle)",
      "Parce que la perception est conçue comme favorisant la survie",
      "Parce qu'elle ne concerne que le développement de l'enfant (ontogenèse)",
      "Parce qu'elle nie tout rôle de l'évolution"
    ],
    correct: [0, 1],
    feedback: "Phylogenèse = évolution de l'espèce : Proffitt explique la perception par des pressions évolutives la rendant adaptative (survie). L'ontogenèse (développement individuel) est un autre niveau (C et D faux)."
  },
  {
    id: 130, bloc: 8, blocLabel: "8 — Phylogenèse & Proffitt",
    text: "Quelles affirmations résument correctement l'« économie de l'action » de Proffitt ?",
    options: [
      "La perception informe sur les opportunités d'action ET leurs coûts",
      "Augmenter le coût métabolique anticipé (charge, fatigue) → pentes/distances jugées plus grandes",
      "Les jugements explicites (visuel, verbal) sont les plus sensibles à ces coûts",
      "Cette modulation favorise une dépense énergétique efficace"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Synthèse : la perception signale opportunités + coûts ; un coût anticipé accru (charge, fatigue, faible capital énergétique) augmente les estimations explicites (visuel/verbal) ; cette modulation sert une dépense énergétique efficace (survie)."
  },

  // ══ 9 — Processus affectifs (humeur, émotions) ══════════════
  {
    id: 131, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Selon Laurent & Vandel (2016), quelle est la différence entre humeur et émotion ?",
    options: [
      "L'humeur est un état affectif « de fond », de basse intensité, dont les origines échappent largement à la conscience",
      "L'émotion a un « objet » souvent identifié, est plus aiguë et plus intense",
      "Humeur et émotion sont des synonymes parfaits",
      "L'humeur est toujours consciente et volontairement contrôlable"
    ],
    correct: [0, 1],
    feedback: "Laurent & Vandel (2016) : humeur = phénomène de fond, basse intensité, origines largement inconscientes ; émotion = objet identifié, aiguë, intense. Ce sont des phénomènes distincts (C et D faux)."
  },
  {
    id: 132, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Selon Laurent & Vandel (2016), l'humeur pourrait constituer…",
    options: [
      "une fonction du niveau de satisfaction des besoins (et de la perception des possibilités de les satisfaire)",
      "un processus totalement indépendant des besoins de l'organisme",
      "une simple décision consciente et volontaire",
      "un phénomène strictement identique à une saccade oculaire"
    ],
    correct: [0],
    feedback: "Laurent & Vandel (2016) : l'humeur (et sa régulation) serait une fonction du niveau de satisfaction des besoins — élémentaires (alimentation, sécurité, sommeil) ou élaborés (affiliation, estime de soi…) — et de la perception des possibilités d'y répondre."
  },
  {
    id: 133, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Que montre l'étude de Changizi & Hall (2001) sur la soif ?",
    options: [
      "Les participants déshydratés ont une plus grande propension à percevoir la transparence (l'« eau »)",
      "Un état appétitif modifie l'utilité de certaines dimensions du stimulus et biaise la perception",
      "Mieux vaut percevoir par erreur une source d'eau absente que rater une source d'eau présente (logique utilitaire)",
      "La soif n'a aucun effet sur la perception visuelle"
    ],
    correct: [0, 1, 2],
    feedback: "Changizi & Hall (2001) : les sujets déshydratés perçoivent davantage la transparence → approche probabiliste/utilitaire (mieux vaut un faux positif « eau » qu'un manqué quand on a soif). La soif influence donc bien la perception (D faux)."
  },
  {
    id: 134, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Qu'est-ce que l'alliesthésie (Cabanac, 1971) ?",
    options: [
      "Le changement de la valeur hédonique d'un stimulus sous l'effet des fluctuations de l'état physiologique",
      "Une illusion d'optique liée au contexte",
      "Un type de mouvement oculaire de stabilisation",
      "La perte de la reconnaissance des visages"
    ],
    correct: [0],
    feedback: "Alliesthésie (Cabanac, 1971) : la valeur hédonique (plaisir/déplaisir) d'un stimulus change selon l'état physiologique interne (faim, soif, glycémie…)."
  },
  {
    id: 135, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Concernant l'alliesthésie, quelles affirmations sont correctes ?",
    options: [
      "Alliesthésie positive = évolution vers plus de plaisir / moins de déplaisir",
      "Alliesthésie négative = évolution vers plus de déplaisir / moins de plaisir",
      "Si la glycémie chute, le goût et l'odeur du sucre sont jugés plus agréables",
      "Les effets peuvent s'étendre à la simple présentation visuelle du stimulus"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Alliesthésie positive (→ plus de plaisir) / négative (→ plus de déplaisir) ; glycémie basse → sucre plus agréable (et inversement) ; effets spécifiques à un type d'aliment, s'étendant à la simple présentation visuelle."
  },
  {
    id: 136, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Que montre l'étude de Laurent & Bianchi (2010) sur la soif et une publicité ?",
    options: [
      "La valence hédonique positive dépend de la congruence entre besoin hydrique et nature de la boisson proposée",
      "La persuasivité d'une pub pour une boisson (prix jugé adéquat, probabilité d'achat) dépend du niveau d'hydratation/soif",
      "La soif n'a aucun effet sur l'évaluation des publicités",
      "L'effet ne concerne que les stimuli sonores"
    ],
    correct: [0, 1],
    feedback: "Laurent & Bianchi (2010) : après ingestion de chips (déshydratation), une pub Coca-Cola est jugée plus persuasive ; valence et persuasivité dépendent de la congruence besoin hydrique / proposition (sensibilité physiologique aux messages). C et D faux."
  },
  {
    id: 137, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Selon la théorie de l'affect-en-tant-qu'information (Clore et al., 2001), comment l'humeur influence-t-elle le traitement ?",
    options: [
      "L'humeur est utilisée comme une information sur l'orientation initiale à adopter face à une tâche",
      "L'humeur n'influence jamais le traitement de l'information",
      "Seule l'émotion intense, jamais l'humeur, joue un rôle",
      "L'humeur ne renseigne que sur la mémoire à long terme"
    ],
    correct: [0],
    feedback: "Affect-en-tant-qu'information (Clore et al., 2001) : l'humeur sert d'information sur la situation et oriente le traitement (humeur positive → plus global/heuristique ; négative → plus local/analytique)."
  },
  {
    id: 138, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Que montre l'étude de Gasper & Clore (2002) sur humeur et traitement visuel ?",
    options: [
      "Une humeur positive favorise un traitement global (vision d'ensemble)",
      "Une humeur négative favorise un traitement local (focalisation sur les détails)",
      "L'induction d'humeur se faisait par un récit d'événement positif ou négatif",
      "L'humeur n'a aucun effet sur le style de traitement visuel"
    ],
    correct: [0, 1, 2],
    feedback: "Gasper & Clore (2002) : induction par récit, puis reproduction sérielle de dessins (paradigme de Bartlett) et jugement de similarité de figures hiérarchiques (Kimchi & Palmer) → humeur positive = global, humeur négative = local. D est faux."
  },
  {
    id: 139, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Le cours présente deux théories des relations humeur-cognition. Lesquelles ?",
    options: [
      "La théorie de l'affect-en-tant-qu'information (Clore et al., 2001)",
      "La théorie de la contingence hédonique (Wegener & Petty, 1994)",
      "La théorie trichromatique (Young-Helmholtz)",
      "La doctrine des énergies nerveuses spécifiques (Müller)"
    ],
    correct: [0, 1],
    feedback: "Deux théories des relations humeur-cognition : affect-en-tant-qu'information (Clore et al., 2001) et contingence hédonique (Wegener & Petty, 1994). Young-Helmholtz et Müller relèvent d'autres chapitres."
  },
  {
    id: 140, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Selon la logique de l'affect-en-tant-qu'information, pourquoi humeur positive et négative orientent-elles différemment le traitement ?",
    options: [
      "Une humeur positive « signale » une situation sûre → traitement global/heuristique",
      "Une humeur négative « signale » un problème potentiel → traitement local/analytique",
      "L'humeur sert d'indice sur l'état de l'environnement",
      "L'humeur influence aussi la perception visuelle, pas seulement les jugements abstraits"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Logique affect-as-information : humeur positive = « tout va bien » → global/heuristique ; humeur négative = « attention, problème » → local/analytique. L'humeur, indice sur l'environnement, module aussi la perception visuelle elle-même."
  },
  {
    id: 141, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Quel effet la proximité socioaffective a-t-elle sur la perception des pentes (Schnall et al., 2008) ?",
    options: [
      "Être accompagné d'un ami réduit la surestimation de l'inclinaison de la pente",
      "Être accompagné augmente fortement la surestimation",
      "Le support social n'a strictement aucun effet",
      "L'effet n'existe que chez les personnes déshydratées"
    ],
    correct: [0],
    feedback: "Schnall et al. (2008) : la présence d'un ami (support psychosocial) réduit la surestimation de la pente — le coût perçu de l'action diminue quand on n'est pas seul (cadre de l'économie de l'action)."
  },
  {
    id: 142, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Selon le cours, quels facteurs « coût » influencent l'estimation perceptive d'une action envisagée ?",
    options: [
      "La peur liée à l'action (ex. Stefanucci et al., 2008)",
      "L'effort à consentir (ex. Witt et al., 2004)",
      "La couleur des yeux de l'observateur",
      "Le nombre de nerfs crâniens"
    ],
    correct: [0, 1],
    feedback: "Les coûts potentiels d'une action envisagée — effort à consentir (Witt et al., 2004) et peur (Stefanucci et al., 2008) — influencent les jugements perceptifs (hauteurs, distances, pentes), dans la lignée de Proffitt."
  },
  {
    id: 143, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "À quoi se rapportent les études de « passabilité » (ex. Warren & Whang, 1987) ?",
    options: [
      "À juger si l'on peut passer par une ouverture compte tenu des dimensions de son corps",
      "C'est un jugement de type affordance (relation corps-environnement)",
      "Cela illustre que la perception intègre les capacités d'action du sujet",
      "Cela mesure uniquement l'acuité visuelle"
    ],
    correct: [0, 1, 2],
    feedback: "Passabilité (Warren & Whang, 1987) : juger si une ouverture est franchissable selon la largeur de ses épaules → jugement d'affordance (relation corps-environnement). Ce n'est pas une mesure d'acuité (D faux)."
  },
  {
    id: 144, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Dans Gasper & Clore (2002), comment l'humeur des participants était-elle induite ?",
    options: [
      "En leur demandant d'écrire un récit relatant un événement « joyeux/positif » ou « triste/négatif »",
      "Par injection d'un médicament",
      "Par privation de sommeil",
      "Par stimulation magnétique transcrânienne"
    ],
    correct: [0],
    feedback: "Gasper & Clore (2002) : induction d'humeur par un récit autobiographique (événement positif vs négatif), suivie de tâches de reproduction de dessins et de jugement de similarité de figures hiérarchiques."
  },
  {
    id: 145, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Quelles situations illustrent l'alliesthésie (le « pleasant = useful » de Cabanac) ?",
    options: [
      "L'eau paraît plus désirable quand on est déshydraté",
      "Le goût du sucre est jugé plus agréable quand la glycémie est basse",
      "Un aliment devient moins appétissant une fois rassasié de ce type d'aliment",
      "La valeur hédonique d'un stimulus dépend de l'état interne de l'organisme"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Alliesthésie (« pleasant = useful ») : la valeur hédonique suit l'état interne — eau désirable si déshydraté, sucre agréable si glycémie basse, satiété spécifique à un aliment. Les quatre énoncés sont corrects."
  },
  {
    id: 146, bloc: 9, blocLabel: "9 — Processus affectifs",
    text: "Quel lien unit les processus affectifs (ch. 9) et la théorie de Proffitt (ch. 8) ?",
    options: [
      "Tous deux montrent que des facteurs non optiques (état interne, affect, social) modulent la perception",
      "Tous deux relèvent d'une logique d'« économie de l'action » (coûts/possibilités)",
      "Tous deux nient que l'état du corps influence la perception",
      "Tous deux réduisent la perception à la seule information rétinienne"
    ],
    correct: [0, 1],
    feedback: "Processus affectifs et théorie de Proffitt convergent : des facteurs non optiques (état physiologique, humeur, support social) modulent la perception, dans une logique d'économie de l'action (couplage coûts/possibilités). C et D contredisent les deux approches."
  },

  // ══ 10 — Maladies, mouvements oculaires & conclusion (MEM) ══
  {
    id: 147, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Pourquoi analyser les mouvements oculaires pour caractériser des maladies ?",
    options: [
      "Ils reflètent des processus attentionnels et perceptifs, et sont mesurables objectivement de façon non-invasive",
      "Ils sont entièrement sous contrôle volontaire conscient",
      "Ils ne varient jamais d'un individu à l'autre",
      "Ils ne dépendent d'aucun processus cérébral"
    ],
    correct: [0],
    feedback: "Les mouvements oculaires reflètent l'attention et la perception, et sont mesurables objectivement, sans intervention invasive → utiles comme marqueurs. Ils ne sont pas entièrement volontaires (les saccades sont en partie automatiques)."
  },
  {
    id: 148, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Concernant l'étude des mouvements oculaires dans les maladies, quelles affirmations sont correctes ?",
    options: [
      "Certaines maladies modifient de façon caractéristique les patterns d'exploration visuelle",
      "Les mouvements oculaires peuvent constituer des marqueurs potentiels d'une maladie",
      "Les saccades sont en grande partie automatiques (non entièrement volontaires)",
      "Les patterns oculaires des patients sont toujours identiques à ceux des personnes saines"
    ],
    correct: [0, 1, 2],
    feedback: "Des maladies (Alzheimer, dépression…) modifient les patterns oculaires de façon caractéristique → marqueurs potentiels ; les saccades sont en partie automatiques. Les patterns des patients DIFFÈRENT des sujets sains (D faux)."
  },
  {
    id: 149, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Que montre Noiret et al. (2018) sur la maladie d'Alzheimer ?",
    options: [
      "La maladie d'Alzheimer modifie les saccades oculaires et le contrôle attentionnel",
      "L'analyse des saccades peut contribuer à caractériser la maladie",
      "Les patients Alzheimer ont des saccades strictement identiques aux personnes saines",
      "L'étude ne portait que sur la vision des couleurs"
    ],
    correct: [0, 1],
    feedback: "Noiret et al. (2018) : Alzheimer modifie les saccades et le contrôle attentionnel → l'analyse des mouvements oculaires aide à caractériser la maladie (marqueur potentiel). Les patterns diffèrent des sujets sains (C faux)."
  },
  {
    id: 150, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Que montre Noiret et al. (2015) sur la dépression et l'exploration des visages ?",
    options: [
      "Le comportement de scanning visuel est altéré dans la dépression majeure",
      "L'étude porte sur des personnes âgées",
      "Elle concerne le traitement de visages émotionnels",
      "L'exploration visuelle des déprimés diffère de celle des non-déprimés"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Noiret et al. (2015) : chez des personnes âgées en dépression majeure, le scanning visuel de visages émotionnels est altéré et diffère des non-déprimés → la dépression affecte aussi la perception/exploration visuelle."
  },
  {
    id: 151, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Que montre l'étude de Laurent, Welklen & Noiret (2013) sur la déshydratation et les mouvements oculaires ?",
    options: [
      "La déshydratation modifie la régulation inhibitrice des mouvements oculaires et oriente les fixations vers des contenus « satisfaisant le besoin »",
      "La déshydratation n'a aucun effet sur les mouvements oculaires",
      "Elle améliore uniformément toutes les performances cognitives",
      "Elle ne concerne que la mémoire à long terme"
    ],
    correct: [0],
    feedback: "Laurent, Welklen & Noiret (2013) : la déshydratation améliore la précision en antisaccade pour les contenus pertinents au besoin et oriente les fixations vers des contenus « hydratants/neutres » (stratégie de satisfaction du besoin) — alliesthésie visuelle médiée par les mouvements oculaires."
  },
  {
    id: 152, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Quels sont des principes organisateurs du Modèle de l'Énaction Multi-échelles (MEM, Laurent, 2014) ?",
    options: [
      "La prise en compte de l'autopoïèse à de multiples niveaux (de la cellule à l'organisme)",
      "Des influences mutuelles entre structures à de multiples niveaux d'intégration biologique et psychologique",
      "La réduction de la perception aux seuls processus cognitifs de haut niveau",
      "L'élimination de toute dimension téléologique (les buts)"
    ],
    correct: [0, 1],
    feedback: "MEM (Laurent, 2014) : autopoïèse multi-niveaux (cellule → organisme), influences mutuelles entre structures à de multiples niveaux d'intégration, et prise en compte des dimensions téléologiques. Il n'est ni réductionniste « haut niveau » ni a-téléologique (C et D faux)."
  },
  {
    id: 153, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Que vise à intégrer le MEM (Laurent, 2014) ?",
    options: [
      "Les multiples influences sur le couple perception-action",
      "Les dimensions biologiques, affectives, sociales et évolutives de la perception",
      "Une vision systémique reliant les différents niveaux d'organisation du vivant",
      "Uniquement la dimension optique de la vision"
    ],
    correct: [0, 1, 2],
    feedback: "Le MEM est un modèle INTÉGRATIF : il réunit les multiples influences (biologiques, affectives, sociales, évolutives) sur le couple perception-action, dans une perspective systémique multi-niveaux. Il ne se limite pas à l'optique (D faux)."
  },
  {
    id: 154, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Selon la perspective de l'énaction (Varela), qu'est-ce que la cognition ?",
    options: [
      "Le « faire-émerger » d'un monde par le biais d'une histoire viable de couplage structurel",
      "Une résolution de problèmes fondée sur des représentations internes",
      "Un simple traitement passif d'informations rétiniennes",
      "Une fonction sans aucun lien avec l'action"
    ],
    correct: [0],
    feedback: "Énaction (Varela, Thompson & Rosch) : la cognition n'est pas une résolution de problèmes sur des représentations, mais le « faire-émerger » d'un monde via une histoire viable de couplage structurel organisme-environnement."
  },
  {
    id: 155, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "Quelles idées caractérisent la conclusion « systémique » du cours ?",
    options: [
      "Les grands problèmes sont interconnectés et interdépendants (pensée systémique, Capra)",
      "« Par la clôture du système nerveux, le bruit en provenance de l'environnement devient objet » (Varela)",
      "Comprendre un phénomène, c'est le replacer dans le contexte d'un tout plus large",
      "La perception résulte de multiples influences à différents niveaux d'intégration"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Conclusion : pensée systémique (Capra : tout est interconnecté ; comprendre = mettre en contexte), clôture du système nerveux (Varela : le bruit devient objet), et intégration des multiples influences (MEM). Les quatre énoncés sont corrects."
  },
  {
    id: 156, bloc: 10, blocLabel: "10 — Maladies & mouvements oculaires",
    text: "En quoi le chapitre 10 illustre-t-il les objectifs « cliniques » du cours ?",
    options: [
      "Il articule perception et processus pathologiques (Alzheimer, dépression)",
      "Il ouvre sur des perspectives de caractérisation, voire thérapeutiques",
      "Il démontre que la perception n'a aucun intérêt clinique",
      "Il se limite à l'anatomie de l'œil"
    ],
    correct: [0, 1],
    feedback: "Le chapitre 10 relie perception et pathologies (Alzheimer, dépression) via les mouvements oculaires, ouvrant sur la caractérisation des maladies et des perspectives thérapeutiques — un des objectifs annoncés du cours (C et D faux)."
  },

  // ══ 11 — 📝 EXAMEN BLANC (type prof, 30 questions) ══════════
  //  Calqué sur les sujets et le style de quizzExam.md.
  {
    id: 157, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce que la loi de Ricco ?",
    options: [
      "Pour de petites surfaces de lumière, l'intensité (radiance) requise pour la détection est inversement proportionnelle à la surface, lorsque la durée d'exposition est fixe",
      "L'intensité requise est inversement proportionnelle à la durée d'exposition, lorsque la surface est fixe",
      "Quand l'énergie augmente, la lumière rouge est perçue plus jaune",
      "La sensation croît comme le logarithme de l'intensité du stimulus"
    ],
    correct: [0],
    feedback: "Loi de Ricco : pour de petites surfaces, I × Surface = constante (jusqu'à l'« aire de Ricco »). B = loi de Bloch (échange intensité/durée) ; C = Bezold-Brücke ; D = loi de Fechner."
  },
  {
    id: 158, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce que la loi de Bloch (et quelle est sa limite) ?",
    options: [
      "L'intensité requise pour la détection est inversement proportionnelle à la durée d'exposition, lorsque la surface est fixe",
      "Au-delà d'environ 0,1 s, augmenter la durée n'apporte plus d'avantage pour la détection",
      "Elle décrit l'échange entre intensité et surface du stimulus",
      "Elle ne s'applique qu'aux sons, jamais à la lumière"
    ],
    correct: [0, 1],
    feedback: "Bloch : I × Durée = constante (sommation temporelle), jusqu'à ~0,1 s. L'échange intensité/surface = loi de Ricco (C faux). Un analogue existe en audition (Garner, 1947), mais Bloch concerne d'abord la vision (D faux)."
  },
  {
    id: 159, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce que le changement de teinte de Bezold-Brücke ?",
    options: [
      "Quand l'énergie de la stimulation augmente, la lumière rouge est perçue plus jaune",
      "Quand l'énergie augmente, les lumières violettes sont perçues plus bleues",
      "C'est l'explication de la couleur bleue du ciel",
      "C'est la relation logarithmique entre sensation et intensité"
    ],
    correct: [0, 1],
    feedback: "Bezold-Brücke : à énergie croissante, rouge → plus jaune et violet → plus bleu (la teinte perçue dépend de l'intensité). C = diffusion de Rayleigh ; D = loi de Fechner."
  },
  {
    id: 160, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Dans la théorie de la détection du signal, avec quelle autre composante le signal se présente-t-il habituellement ?",
    options: [
      "Le bruit",
      "Le critère de décision",
      "La sensibilité d'",
      "La fonction psychométrique"
    ],
    correct: [0],
    feedback: "Le signal se présente toujours avec du BRUIT (externe : parasites ; interne : activité nerveuse de fond). Détecter = distinguer « signal + bruit » de « bruit seul »."
  },
  {
    id: 161, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quelles définitions des quatre issues de la TDS sont correctes ?",
    options: [
      "HIT (identification correcte) : on pense qu'il y a un signal et il y en a bien un",
      "Manqué (miss) : dire qu'il n'y a pas de signal alors qu'il y en a un",
      "Fausse alarme : dire qu'il y a un signal alors qu'il n'y en a pas",
      "Rejet correct : déclarer qu'il n'y a pas de signal et il n'y en a effectivement pas"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Les quatre issues : HIT (signal présent + « oui »), manqué (signal présent + « non »), fausse alarme (signal absent + « oui »), rejet correct (signal absent + « non »)."
  },
  {
    id: 162, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quels sont les deux grands facteurs originellement identifiés comme influençant une décision (TDS) ?",
    options: [
      "La sensibilité (capacité à discerner correctement le signal du bruit)",
      "Le critère de décision (seuil interne, biais de réponse)",
      "La longueur d'onde du stimulus",
      "Le nombre de paires de nerfs crâniens"
    ],
    correct: [0, 1],
    feedback: "Deux facteurs : la SENSIBILITÉ (mesurée par d') et le CRITÈRE de décision (β). La sensibilité = capacité à discriminer ; le critère = stratégie/biais de réponse, indépendant de d'."
  },
  {
    id: 163, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Chez l'être humain, combien de paires de nerfs crâniens passent par de petites ouvertures à la base du crâne ?",
    options: [
      "12 paires",
      "14 paires",
      "10 paires",
      "8 paires"
    ],
    correct: [0],
    feedback: "12 paires de nerfs crâniens, conduisant des informations sensorielles, motrices, ou les deux."
  },
  {
    id: 164, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Dans la loi de Fechner S = k × log(R), que signifient les termes et que prédit-elle ?",
    options: [
      "S = la sensation",
      "R = l'intensité (magnitude) du stimulus (de l'allemand « Reiz »)",
      "La sensation croît de façon logarithmique : il y a « compression » aux fortes intensités",
      "k désigne le niveau d'activité résiduelle interne de l'organe sensoriel"
    ],
    correct: [0, 1, 2],
    feedback: "Fechner : S = sensation, R = intensité (Reiz), k = constante ; croissance logarithmique (compression). Le niveau d'activité résiduelle interne (c) est le terme propre à DELBOEUF, pas à Fechner (D faux)."
  },
  {
    id: 165, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Dans la formule de Delboeuf s = k × log[(c + δ)/c], que représente « c » ?",
    options: [
      "Le niveau intrinsèque d'activité de l'organe sensoriel (équivalent à un stimulus interne)",
      "L'intensité du stimulus externe",
      "La constante de Weber ΔI/I₀",
      "Le pourcentage de détection au seuil"
    ],
    correct: [0],
    feedback: "Chez Delboeuf, δ = intensité du stimulus et c = niveau d'activité résiduelle interne → même sans stimulus (δ = 0), la sensation n'est pas nulle. Cette idée préfigure le « bruit interne » de la TDS."
  },
  {
    id: 166, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quelle est la place de la perception dans l'histoire de la psychologie ?",
    options: [
      "Elle fut fondatrice : objet d'étude du premier laboratoire de psychologie (Wundt, 1879)",
      "Elle a été relativement marginalisée avec le cognitivisme et la métaphore du calcul",
      "La robotique et l'IA tendent aujourd'hui à lui redonner de l'importance",
      "Elle n'a jamais eu de rôle en psychologie expérimentale"
    ],
    correct: [0, 1, 2],
    feedback: "Fondatrice (1er labo de Wundt) → marginalisée par le cognitivisme (métaphore du calcul) → réhabilitée par la robotique/IA (un système coupé du sensoriel est coupé du monde). D est faux."
  },
  {
    id: 167, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Pourquoi parle-t-on d'« effets de contexte » dans le domaine de la perception ?",
    options: [
      "Parce que notre interprétation de la réalité dépend des éléments que l'on relie entre eux",
      "Parce que la perception ne dépend que du stimulus rétinien isolé",
      "Parce que la sensation est proportionnelle au logarithme de l'intensité",
      "Parce que chaque cône contient les trois pigments"
    ],
    correct: [0],
    feedback: "Effets de contexte : l'interprétation d'un élément dépend de son entourage (illusions d'Ebbinghaus, Müller-Lyer, Delboeuf). La perception n'est pas déterminée par le seul élément isolé (B faux)."
  },
  {
    id: 168, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Les effets de contexte (ex. illusion d'Ebbinghaus) sont-ils spécifiques à l'être humain ?",
    options: [
      "Non : des poussins y sont également sensibles",
      "Oui : ils nécessitent le langage humain",
      "Oui : seuls les humains adultes les présentent",
      "Non : mais seuls les primates les présentent en dehors de l'humain"
    ],
    correct: [0],
    feedback: "Non : des poussins (Rosa Salva et al., 2013) sont sensibles à l'illusion d'Ebbinghaus → les effets de contexte ne sont ni propres à l'humain ni purement culturels/langagiers."
  },
  {
    id: 169, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Sur quelle base von Helmholtz distingue-t-il sensation et perception ?",
    options: [
      "La sensation = des états particuliers du corps (appareils nerveux)",
      "La perception = la formation d'une représentation d'un objet extérieur (intégration)",
      "Reconnaître le son d'un violon est un acte de perception",
      "Décomposer un son complexe en sons partiels est un acte de perception"
    ],
    correct: [0, 1, 2],
    feedback: "Helmholtz : sensation = état nerveux brut ; perception = représentation d'un objet extérieur (intégration). Reconnaître un violon = perception ; décomposer un son en partiels = sensation pure (D faux)."
  },
  {
    id: 170, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce que la psychophysique, et par qui ce terme a-t-il été proposé ?",
    options: [
      "Une discipline reliant les variations de la stimulation physique aux réactions/processus psychologiques de l'organisme",
      "Le terme a été proposé par Gustav Fechner",
      "Le terme a été proposé par Wilhelm Wundt",
      "C'est l'étude exclusive de l'anatomie de l'œil"
    ],
    correct: [0, 1],
    feedback: "Psychophysique = mise en relation des dimensions physiques de la stimulation et des processus psychologiques (détection, sensation). Terme proposé par FECHNER (pas Wundt)."
  },
  {
    id: 171, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce qu'une fonction psychométrique ?",
    options: [
      "Une courbe (en ogive) du pourcentage de détection en fonction de l'intensité du stimulus",
      "La distance entre les distributions « bruit » et « signal + bruit »",
      "Le rapport ΔI / I₀",
      "Le nombre de chunks stockés en mémoire à long terme"
    ],
    correct: [0],
    feedback: "Fonction psychométrique = courbe en ogive (forme en S) reliant % de détection et intensité ; le seuil absolu s'y lit à 50 % de détection."
  },
  {
    id: 172, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quelles sont les méthodes d'étude des seuils décrites dans le cours ?",
    options: [
      "La méthode des limites",
      "La méthode de l'ajustement",
      "La méthode constante (stimuli présentés aléatoirement)",
      "La méthode du choix forcé (nAFC)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Quatre méthodes : limites, ajustement, constante (présentation aléatoire) et choix forcé (nAFC). Elles servent pour les seuils absolus comme différentiels."
  },
  {
    id: 173, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quelle est la différence entre invariants structuraux et transformationnels (« de contrôle ») chez Gibson ?",
    options: [
      "Les structuraux sont peu ou pas influencés par la nature du déplacement de l'observateur",
      "Les transformationnels sont influencés par le déplacement → utilisables pour contrôler son propre mouvement",
      "Les structuraux servent à indexer son propre déplacement",
      "Les transformationnels concernent la taille et la forme permanentes des objets"
    ],
    correct: [0, 1],
    feedback: "Structuraux = permanence (taille, forme), indépendants du déplacement (ex. gradient de texture). Transformationnels/de contrôle = dépendent du déplacement (ex. focus d'expansion, τ) → contrôle du mouvement. C et D inversent."
  },
  {
    id: 174, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Que sont les « lois de contrôle » dans la théorie écologique de Gibson ?",
    options: [
      "Des lois qui formalisent les relations entre informations (perceptives) et forces",
      "Des règles nécessitant une représentation mentale préalable de l'objectif",
      "Des lois décrivant la compression logarithmique de la sensation",
      "Des règles de classification des couleurs en catégories"
    ],
    correct: [0],
    feedback: "Lois de contrôle = relations DIRECTES information ↔ forces (ex. maintenir τ constant → contact en douceur), sans représentation interne (B faux). Elles incarnent le couplage perception-action."
  },
  {
    id: 175, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce que la perception catégorielle (Harnad, 1987) ?",
    options: [
      "Une stimulation continue, variable et non différenciée est classée en catégories distinctes",
      "Les membres d'une même catégorie acquièrent des relations de similarité perceptive",
      "Les membres de catégories différentes acquièrent des relations de dissimilarité perceptive",
      "Les différences au sein d'une même catégorie sont perceptivement accentuées"
    ],
    correct: [0, 1, 2],
    feedback: "Harnad (1987) : classement d'un continu en catégories → similarité accrue AU SEIN d'une catégorie, dissimilarité accrue ENTRE catégories. Au sein d'une catégorie, les différences sont MINIMISÉES (D faux)."
  },
  {
    id: 176, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quel est le spectre de l'énergie électromagnétique visible par l'humain ?",
    options: [
      "Environ 400 à 700 nm",
      "Environ 700 à 1400 nm",
      "Environ 100 à 400 nm",
      "Environ 10 à 100 nm"
    ],
    correct: [0],
    feedback: "Le spectre visible s'étend de ~400 nm (violet/bleu) à ~700 nm (rouge). Rappel : 1 nm = 10⁻⁹ m."
  },
  {
    id: 177, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Qu'est-ce que la diffusion de Rayleigh ?",
    options: [
      "La diffusion de la lumière qui donne au ciel un aspect bleu lorsque le soleil est haut",
      "Au coucher du soleil, le trajet plus long fait « perdre » la lumière bleue → ciel rouge/orangé",
      "Le changement de teinte perçue lorsque l'énergie lumineuse augmente",
      "La décomposition d'un son complexe en sons partiels"
    ],
    correct: [0, 1],
    feedback: "Rayleigh : soleil haut → trajet court → ciel bleu ; soleil bas → trajet long → bleu perdu → ciel rouge. C = Bezold-Brücke ; D = sensation auditive (Helmholtz)."
  },
  {
    id: 178, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Que peut générer, sur le plan cognitif, une lésion du lobe temporal (voie ventrale) ?",
    options: [
      "Une agnosie visuelle associative (le patient voit mais ne reconnaît plus les objets)",
      "Une prosopagnosie (trouble de la reconnaissance des visages)",
      "Une ataxie optique",
      "Une simultagnosie"
    ],
    correct: [0, 1],
    feedback: "Lobe temporal = voie ventrale (« quoi ») → agnosie visuelle associative et prosopagnosie. L'ataxie optique et la simultagnosie relèvent de la voie dorsale (pariétale)."
  },
  {
    id: 179, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Que peut générer, sur le plan cognitif, une lésion du cortex pariétal postérieur (voie dorsale) ?",
    options: [
      "Une simultagnosie (incapacité à percevoir plusieurs objets simultanément)",
      "Une ataxie optique (erreurs d'orientation/direction de la main vers une cible dans le champ contralatéral)",
      "Une prosopagnosie",
      "Une agnosie visuelle associative"
    ],
    correct: [0, 1],
    feedback: "Cortex pariétal postérieur = voie dorsale (« où/comment ») → simultagnosie et ataxie optique (trouble du guidage visuel du geste). Prosopagnosie et agnosie associative = voie ventrale (temporale)."
  },
  {
    id: 180, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Combien de couches comporte le corps géniculé latéral, et comment se répartissent-elles ?",
    options: [
      "6 couches : 2 magnocellulaires (couches 1-2) et 4 parvocellulaires (couches 3-6)",
      "6 couches : 4 magnocellulaires et 2 parvocellulaires",
      "4 couches : 2 magnocellulaires et 2 parvocellulaires",
      "2 couches magnocellulaires uniquement"
    ],
    correct: [0],
    feedback: "CGL (thalamus) : 6 couches — 2 magnocellulaires (1-2 : mouvement/contraste) et 4 parvocellulaires (3-6 : couleur/détails fins)."
  },
  {
    id: 181, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quels sont les grands types de mouvements oculaires ?",
    options: [
      "Les saccades (passage rapide d'un point de fixation à un autre)",
      "La poursuite visuelle lente (suivre une cible en mouvement)",
      "Les mouvements de vergence (convergence / divergence)",
      "Le réflexe vestibulo-oculaire (à partir des informations vestibulaires d'accélération)"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Quatre grands types : saccades et poursuite lente (changement de direction du regard), vergence (alignement d'un œil par rapport à l'autre) et stabilisation par le réflexe vestibulo-oculaire (+ système optocinétique)."
  },
  {
    id: 182, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "La perception catégorielle peut-elle être acquise ?",
    options: [
      "Oui : même si elle est en partie innée (ex. couleurs), elle peut aussi s'acquérir",
      "Oui : celle des phonèmes est en partie spécifique à la culture (un son perçu « Pa » par des anglo-saxons, « Pha » par des thaïlandais)",
      "Non : elle est entièrement innée",
      "Non : elle ne concerne que la vision des couleurs"
    ],
    correct: [0, 1],
    feedback: "La perception catégorielle est en partie innée (couleurs) ET acquise : les phonèmes sont catégorisés différemment selon la langue maternelle (« Pa » vs « Pha »)."
  },
  {
    id: 183, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quels cas illustrent l'ACQUISITION de la perception catégorielle ?",
    options: [
      "L'apprentissage de catégories arbitraires appliquées à des figures géométriques (Goldstone, 1994)",
      "La perception catégorielle des phonèmes (spécifique à la langue/culture)",
      "La diffusion de Rayleigh",
      "La loi de Bloch"
    ],
    correct: [0, 1],
    feedback: "Cas d'acquisition : apprentissage de catégories arbitraires sur des figures géométriques (Goldstone, 1994) et perception des phonèmes (langue/culture). Rayleigh et Bloch n'ont aucun rapport."
  },
  {
    id: 184, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Dans la théorie évolutionniste de Proffitt, pourquoi la perception des inclinaisons de pente varie-t-elle avec la fatigue ou la charge portée ? (point clé de l'examen)",
    options: [
      "Parce que l'économie de l'action est formative de la perception : on anticipe les coûts énergétiques de l'action",
      "La surestimation est d'autant plus importante que le capital énergétique est diminué et/ou la charge importante",
      "C'est une question de survie : il faut que les gains énergétiques excèdent les coûts",
      "La perception des pentes est totalement indépendante de l'état du corps"
    ],
    correct: [0, 1, 2],
    feedback: "Proffitt : l'anticipation de l'action s'accompagne d'une anticipation de ses coûts énergétiques, qui influence les jugements explicites. Surestimation ↑ avec une charge lourde ou un capital énergétique diminué (logique de survie : gains > coûts). D est faux."
  },
  {
    id: 185, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Comment s'explique la divergence entre les modalités de jugement des pentes (visuelle/verbale vs haptique) chez Proffitt ?",
    options: [
      "Les jugements explicites (visuel et verbal) surestiment car ils intègrent l'anticipation des coûts de l'action",
      "La mesure haptique (action guidée) reste relativement précise",
      "La mesure haptique est la plus déformée des trois",
      "Le jugement verbal est précis et totalement insensible à la fatigue"
    ],
    correct: [0, 1],
    feedback: "Dissociation conscience explicite / action : les mesures VISUELLE et VERBALE surestiment (perméables aux coûts anticipés), tandis que la mesure HAPTIQUE (visuomotrice) reste précise. C et D sont donc faux."
  },
  {
    id: 186, bloc: 11, blocLabel: "📝 Examen — type prof",
    text: "Quels sont les deux effets caractéristiques de la perception catégorielle sur la discrimination ?",
    options: [
      "Les différences entre objets de catégories différentes sont accentuées",
      "Les différences entre objets d'une même catégorie sont minimisées",
      "Les différences au sein d'une même catégorie sont accentuées",
      "La discrimination devient impossible entre catégories"
    ],
    correct: [0, 1],
    feedback: "Deux effets : accentuation des différences ENTRE catégories + minimisation des différences AU SEIN d'une catégorie (un changement physique linéaire produit un changement perceptif non-linéaire). C inverse l'effet ; D est faux."
  }
];

