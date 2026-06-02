// ═══════════════════════════════════════════════════════════
//  BASE DE DONNÉES DES QUESTIONS
//  Format : { id, bloc, blocLabel, text, options[], correct[], feedback }
//  correct[] = indices des bonnes réponses (0-based)
//  Entre 1 et 4 bonnes réponses possibles — distribution variée
// ═══════════════════════════════════════════════════════════

const QUESTIONS = [

  // ══ 1 — Définitions & histoire ══════════════════════════════
  {
    id: 1, bloc: 1, blocLabel: "1 - Définitions & histoire",
    text: "Selon Helmholtz, reconnaître qu'un son vient d'un violon est un acte de…",
    options: [
      "Sensation pure, car l'oreille capte directement les vibrations",
      "Perception, car on conclut à l'existence d'un objet extérieur",
      "Psychophysique, car on mesure une intensité sonore",
      "Qualia, car c'est une expérience purement subjective"
    ],
    correct: [1],
    feedback: "Helmholtz : percevoir un violon = former une représentation d'un objet extérieur = PERCEPTION. La sensation pure consisterait à décomposer le son en partiels sans l'attribuer à un instrument. Les qualia renvoient à la dimension subjective irréductible."
  },
  {
    id: 2, bloc: 1, blocLabel: "1 - Définitions & histoire",
    text: "Wundt a fondé le premier laboratoire de psychologie en 1879. Quelles affirmations sur son parcours sont correctes ?",
    options: [
      "Il était auparavant assistant de physiologie d'Helmholtz",
      "Il a proposé le terme 'psychophysique' en 1860",
      "Il était professeur de philosophie et psychologie expérimentale à Leipzig",
      "Il a publié les Elemente der Psychophysik"
    ],
    correct: [0, 2],
    feedback: "Wundt : assistant d'Helmholtz (1858-1863), puis professeur à Leipzig. C'est FECHNER (pas Wundt) qui a proposé le terme 'psychophysique' et publié les Elemente en 1860."
  },
  {
    id: 3, bloc: 1, blocLabel: "1 - Définitions & histoire",
    text: "L'illusion d'Ebbinghaus est-elle spécifique à l'être humain ?",
    options: [
      "Non — des poussins de 4 jours y sont également sensibles",
      "Oui — elle requiert un cortex cérébral développé",
      "Non — mais uniquement les primates y sont sensibles en dehors de l'humain",
      "Oui — elle repose sur des apprentissages culturels humains"
    ],
    correct: [0],
    feedback: "Rosa Salva et al. (2013) ont montré que des poussins de 4 jours (Gallus gallus) sont sensibles à l'illusion d'Ebbinghaus — réfutant l'idée d'une origine purement culturelle ou corticale humaine."
  },
  {
    id: 4, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "Parmi ces définitions, lesquelles sont correctes ?",
    options: [
      "Les qualia sont les expériences conscientes et privées de sensation ou de perception",
      "La psychophysique relie les dimensions physiques de la stimulation aux réponses de l'organisme",
      "La psychophysique est un terme proposé par Wundt",
      "La perception est souvent conçue comme le 'meilleur pari' probabiliste sur la réalité"
    ],
    correct: [0, 1, 3],
    feedback: "Qualia = expériences subjectives irréductibles. Psychophysique = terme proposé par FECHNER (pas Wundt). La perception est décrite dans un cadre probabiliste comme le meilleur 'pari' sur la stimulation."
  },
  {
    id: 5, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "Qu'est-il arrivé à la place de la perception en psychologie avec le cognitivisme ?",
    options: [
      "Elle est devenue encore plus centrale car les ordinateurs ont besoin d'entrées sensorielles",
      "Son influence a diminué — la métaphore du calcul privilégie mémoire et raisonnement",
      "Elle a complètement disparu du champ",
      "Elle reste fondatrice car toute intelligence est couplée au monde via les sens"
    ],
    correct: [1, 3],
    feedback: "Le cognitivisme a marginalisé la perception (ordinateur = processeur abstrait sans corps). Mais un système cognitif coupé du monde est impossible : la robotique et l'IA redonnent de l'importance à la perception."
  },
  {
    id: 6, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "Helmholtz distingue sensation et perception. Laquelle de ces affirmations est fausse ?",
    options: [
      "La sensation correspond à des états particuliers du corps ou des appareils nerveux",
      "La perception sert à former des représentations des objets extérieurs",
      "Décomposer un son en partiels est un acte de perception",
      "Reconnaître un son de violon est un acte de perception"
    ],
    correct: [2],
    feedback: "Décomposer un son en partiels = sensation pure (traitement brut). Reconnaître un violon = perception (construction d'une représentation). La sensation = état nerveux brut ; la perception = interprétation et représentation."
  },
  {
    id: 7, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "Quels types de sensations sont somesthésiques ?",
    options: [
      "La vision",
      "Le toucher et la température (extéroceptif)",
      "La proprioception et kinesthésie (muscles, tendons)",
      "La douleur (nociception)"
    ],
    correct: [1, 2, 3],
    feedback: "Les sensations somesthésiques incluent : extéroceptives (toucher, température), proprioceptives/kinesthésiques (muscles, tendons, ligaments), intéroceptives (viscères) et nociceptives (douleur). La VISION est une sensation 'spécifique', pas somesthésique."
  },
  {
    id: 8, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "Quelle affirmation sur la théorie trichromatique de Young-Helmholtz est correcte ?",
    options: [
      "L'œil fonctionne avec un triple codage des couleurs",
      "Deux types de récepteurs suffisent pour percevoir toutes les couleurs",
      "Plus de 3 couleurs n'optimise pas le rendu coloré",
      "La théorie a été développée dans le cadre des travaux sur l'audition"
    ],
    correct: [0, 2],
    feedback: "Young-Helmholtz : triple codage RGB car 2 semble insuffisant et plus de 3 n'optimise pas le rendu. Ce n'est PAS 2 récepteurs, et la théorie concerne la VISION (pas l'audition)."
  },
  {
    id: 9, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "Quelle est la différence entre l'illusion de Müller-Lyer et l'illusion d'Ebbinghaus ?",
    options: [
      "Müller-Lyer joue sur la longueur perçue de lignes via des flèches à leurs extrémités",
      "Ebbinghaus joue sur la taille perçue d'un cercle central selon les cercles qui l'entourent",
      "Müller-Lyer joue sur la taille perçue d'un cercle, Ebbinghaus sur des lignes",
      "Les deux illusions impliquent uniquement la couleur"
    ],
    correct: [0, 1],
    feedback: "Müller-Lyer = lignes avec flèches (longueur perçue). Ebbinghaus = cercle central entouré de cercles de tailles différentes (taille perçue). Ne pas les inverser à l'examen !"
  },
  {
    id: 10, bloc: 1, blocLabel: "1 — Définitions & histoire",
    text: "La perception est souvent décrite comme un 'meilleur pari'. Qu'est-ce que cela signifie ?",
    options: [
      "La perception est identique chez tous les individus car elle repose sur des données objectives",
      "La perception est un processus probabiliste qui construit l'interprétation la plus vraisemblable",
      "Percevoir comporte toujours une part d'incertitude car l'information sensorielle est incomplète",
      "Ce cadre probabiliste est à la base de la théorie de la détection du signal"
    ],
    correct: [1, 2, 3],
    feedback: "Perception = 'meilleur pari' probabiliste : face à une information ambiguë, le cerveau construit l'interprétation la plus probable. Ce cadre est directement lié à la TDS. La perception N'est pas identique chez tous — elle varie selon l'individu, l'expertise, le contexte."
  },

  // ══ 2 — Seuils & lois ═══════════════════════════════════════
  {
    id: 11, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Quelle est la définition précise du seuil absolu ?",
    options: [
      "La plus petite intensité physiquement mesurable par des instruments",
      "L'intensité à laquelle un stimulus est détecté 50% du temps",
      "Le seuil absolu est un cas particulier du seuil différentiel (référence = zéro)",
      "La différence minimale perceptible entre deux stimuli"
    ],
    correct: [1, 2],
    feedback: "Seuil absolu = détection 50% du temps (convention). C'est un cas particulier du DL : on mesure la différence entre 'rien' et 'quelque chose'. Ce n'est pas le minimum physique mesurable, ni la JND."
  },
  {
    id: 12, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Quel est le risque principal de la méthode des limites ?",
    options: [
      "Le participant peut anticiper et changer de réponse trop tôt ou trop tard",
      "Elle ne permet pas de construire une fonction psychométrique",
      "Le participant est passif — il répond seulement oui/non",
      "Elle présente les stimuli aléatoirement, ce qui crée des biais"
    ],
    correct: [0],
    feedback: "La méthode des limites présente des stimuli en séries ascendantes ou descendantes — le participant peut anticiper le changement (persévération, effets d'attente). La méthode CONSTANTE (présentation aléatoire) résout ce problème. La méthode des limites présente bien les stimuli en ordre, pas aléatoirement."
  },
  {
    id: 13, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "La loi de Weber-Fechner est S = k × log(R). Qu'est-ce que cela prédit ?",
    options: [
      "La sensation croît linéairement avec l'intensité du stimulus",
      "La sensation croît de façon logarithmique — elle est comprimée aux hautes intensités",
      "Plus le stimulus initial est intense, plus le changement nécessaire pour percevoir une différence est grand",
      "La constante k est identique pour toutes les modalités sensorielles"
    ],
    correct: [1, 2],
    feedback: "S = k × log(R) = croissance logarithmique (comprimée). Conséquence directe : à haute intensité, il faut un ΔI bien plus grand pour percevoir une différence. La constante k varie selon les modalités — elle n'est pas universelle."
  },
  {
    id: 14, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Pourquoi Stevens a-t-il développé la loi de puissance S = k × Iⁿ ?",
    options: [
      "Car toutes les JND sont perceptivement équivalentes selon lui",
      "Car pour les chocs électriques (n > 1), la sensation est amplifiée, pas comprimée",
      "Car la loi logarithmique de Fechner prédit bien tous les cas",
      "Car Stevens a validé sa loi via l'estimation directe de magnitude"
    ],
    correct: [1, 3],
    feedback: "Stevens critique Fechner : toutes les JND ne sont pas équivalentes. Sa loi avec n variable rend compte de la compression (n < 1, luminosité ≈ 0.3) et l'expansion (n > 1, chocs électriques ≈ 3.5). Il valide via l'estimation de magnitude. Fechner ÉCHOUE pour les chocs électriques."
  },
  {
    id: 15, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Quelle est la loi de Ricco ?",
    options: [
      "Pour de petites surfaces, intensité et surface sont interchangeables pour atteindre le seuil",
      "L'intensité requise est inversement proportionnelle à la durée d'exposition",
      "I × Surface = constante (pour petites surfaces lumineuses)",
      "Elle s'applique sans limite de taille de surface"
    ],
    correct: [0, 2],
    feedback: "Ricco : I × Surface = constante (petites surfaces). Surface et intensité s'échangent jusqu'à l'aire de Ricco. Au-delà d'une certaine surface, la relation ne tient plus. L'échange intensité/durée, c'est la loi de BLOCH."
  },
  {
    id: 16, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Quelle affirmation sur la loi de Bloch est FAUSSE ?",
    options: [
      "I × Durée = constante pour la détection visuelle",
      "La loi de Bloch s'applique sans limite temporelle",
      "Au-delà de ~0,1 s, augmenter la durée n'améliore plus la détection",
      "Un phénomène analogue existe en audition (Garner, 1947)"
    ],
    correct: [1],
    feedback: "B est FAUSSE : Bloch s'applique seulement jusqu'à ~0,1 s. Au-delà, la sommation temporelle cesse — augmenter la durée ne sert plus à rien. Garner (1947) a démontré l'équivalent auditif."
  },
  {
    id: 17, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Que décrit le changement de teinte de Bezold-Brücke ?",
    options: [
      "Quand l'énergie lumineuse augmente, les rouges tendent à paraître plus jaunes",
      "Quand l'énergie lumineuse augmente, les violets tendent à paraître plus bleus",
      "C'est un phénomène exclusivement visuel sans équivalent auditif",
      "Il illustre que la qualité perçue d'un stimulus peut changer avec son intensité"
    ],
    correct: [0, 1, 3],
    feedback: "Bezold-Brücke : rouge → plus jaune, violet → plus bleu quand l'énergie augmente. Il existe un équivalent auditif (aigus → plus aigus, graves → plus graves à fort volume). C est donc FAUX."
  },
  {
    id: 18, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Dans la formule de Delboeuf s = k × log[(c + δ)/c], que représente c et quel est l'apport par rapport à Fechner ?",
    options: [
      "c est la constante de Weber ΔI/I₀",
      "c est le niveau d'activité résiduelle interne de l'organe sensoriel",
      "Delboeuf montre que la sensation ne serait pas nulle en l'absence de stimulus externe",
      "Ce concept de bruit interne préfigure la théorie de la détection du signal"
    ],
    correct: [1, 2, 3],
    feedback: "c = activité résiduelle interne (bruit de fond biologique). Si δ = 0 (aucun stimulus), la sensation n'est pas nulle — elle dépend de c. Cette idée de 'bruit interne' préfigure directement la TDS."
  },
  {
    id: 19, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Quelle méthode de mesure du seuil réduit le mieux les biais de décision ?",
    options: [
      "La méthode des limites ascendante",
      "La méthode du choix forcé (nAFC)",
      "La méthode de l'ajustement",
      "La méthode constante"
    ],
    correct: [1],
    feedback: "Le nAFC force le participant à choisir dans quelle fenêtre se trouve le signal — il ne peut pas biaiser sa réponse avec un critère libéral/conservateur. C'est le lien direct avec la TDS. La méthode constante réduit l'anticipation mais pas le critère de décision."
  },
  {
    id: 20, bloc: 2, blocLabel: "2 — Seuils & lois",
    text: "Qu'est-ce que la fonction psychométrique ?",
    options: [
      "Une courbe en ogive reliant le % de détection à l'intensité du stimulus",
      "Elle est produite par la méthode constante (stimuli aléatoires à intensités variées)",
      "Sa forme en S signifie qu'il existe un seuil strict absolu en dessous duquel rien n'est détecté",
      "Le seuil absolu se lit à 50% sur cette courbe"
    ],
    correct: [0, 1, 3],
    feedback: "Fonction psychométrique = ogive (forme en S), % détection / intensité, obtenue par méthode constante. Seuil à 50%. C est FAUX : la forme en S reflète la variabilité de la détection — il n'y a pas de seuil strict absolu."
  },

  // ══ 3 — TDS ═════════════════════════════════════════════════
  {
    id: 21, bloc: 3, blocLabel: "3 — TDS",
    text: "Qu'est-ce qu'un 'manqué' (miss) dans la TDS ?",
    options: [
      "Dire qu'il y a un signal alors qu'il n'y en a pas",
      "Dire qu'il n'y a pas de signal alors qu'il y en a un",
      "Détecter correctement un signal présent",
      "Rejeter correctement une absence de signal"
    ],
    correct: [1],
    feedback: "Miss = signal présent + réponse 'non'. Fausse alarme = signal absent + 'oui'. HIT = signal présent + 'oui'. Rejet correct = signal absent + 'non'. Ces 4 issues sont au cœur de la TDS."
  },
  {
    id: 22, bloc: 3, blocLabel: "3 — TDS",
    text: "D'où vient la TDS et qui l'a appliquée à la perception humaine ?",
    options: [
      "De la détection radar (Marcum, 1947) et des sciences computationnelles (Peterson et al., 1954)",
      "Elle a été développée par Fechner comme extension de la psychophysique classique",
      "Elle a été appliquée à la perception par Green & Swets (1966) et Tanner & Swets (1954)",
      "Elle est issue d'une théorie philosophique sur la conscience"
    ],
    correct: [0, 2],
    feedback: "La TDS vient du domaine militaire (radar) et des sciences computationnelles — pas de la psychophysique classique. Green & Swets (1966) et Tanner & Swets (1954) l'ont appliquée à la perception."
  },
  {
    id: 23, bloc: 3, blocLabel: "3 — TDS",
    text: "Quelles sont les deux sources du 'bruit' dans la TDS ?",
    options: [
      "Le bruit lié aux parasites environnementaux externes",
      "L'activité nerveuse résiduelle interne, présente même sans aucun stimulus",
      "Les erreurs volontaires du participant",
      "Les fluctuations du critère de décision"
    ],
    correct: [0, 1],
    feedback: "Deux sources : externe (parasites) et interne (activité nerveuse de fond). Neurones auditifs ≈ 50 décharges/s sans stimulus ; vestibulaires ≈ 100/s sans mouvement. Le critère n'est pas une source de bruit."
  },
  {
    id: 24, bloc: 3, blocLabel: "3 — TDS",
    text: "Que mesure d' (d-prime) et que se passe-t-il quand d' = 0 ?",
    options: [
      "d' mesure le seuil interne de décision de l'observateur",
      "d' = distance entre distributions N et S+N divisée par l'écart-type",
      "d' = 0 signifie que les distributions N et S+N se superposent totalement",
      "d' = 0 donne une performance équivalente au hasard"
    ],
    correct: [1, 2, 3],
    feedback: "d' = D/σ = sensibilité PURE, indépendante du critère. d' = 0 → les deux distributions se confondent → performance au hasard. Le seuil interne de décision, c'est β (le critère), pas d'."
  },
  {
    id: 25, bloc: 3, blocLabel: "3 — TDS",
    text: "Un détecteur radar réglé très libéralement : quelles sont les conséquences ?",
    options: [
      "Taux de HITs élevé",
      "Taux de fausses alarmes élevé",
      "Sa sensibilité d' reste identique — le critère ne change pas d'",
      "Taux de manqués faible"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Critère libéral = dire 'oui' facilement → beaucoup de HITs, beaucoup de fausses alarmes, peu de manqués. Le réglage du critère N'affecte PAS d' — la sensibilité reste identique."
  },
  {
    id: 26, bloc: 3, blocLabel: "3 — TDS",
    text: "Parmi ces affirmations sur la courbe ROC, laquelle est FAUSSE ?",
    options: [
      "Elle trace les HITs en fonction des fausses alarmes pour différents critères",
      "La diagonale correspond à d' = 0",
      "Deux observateurs avec des sensibilités différentes mais le même critère ont la même courbe ROC",
      "Plus la courbe est bombée vers le coin haut-gauche, plus d' est élevé"
    ],
    correct: [2],
    feedback: "C est FAUSSE : c'est deux observateurs avec la même SENSIBILITÉ (pas le même critère) qui ont la même courbe ROC. La courbe ROC reflète la sensibilité pure — deux critères différents donnent des points différents sur la MÊME courbe si d' est identique."
  },
  {
    id: 27, bloc: 3, blocLabel: "3 — TDS",
    text: "Quelle est la différence fondamentale entre d' et le critère β ?",
    options: [
      "d' mesure la capacité sensorielle réelle, indépendamment des décisions du sujet",
      "β est le seuil interne librement fixé selon les enjeux et motivations",
      "Un observateur qui dit 'oui' très souvent a un d' plus élevé",
      "Même d' + critères différents = même courbe ROC"
    ],
    correct: [0, 1, 3],
    feedback: "d' = capacité sensorielle pure. β = stratégie de décision. Dire 'oui' souvent = β bas (libéral), pas d' plus élevé — C est FAUX. Même d' avec des β différents = même courbe ROC (car la courbe reflète la sensibilité, pas la stratégie)."
  },
  {
    id: 28, bloc: 3, blocLabel: "3 — TDS",
    text: "Comment varie-t-on le critère d'un même observateur pour tracer sa courbe ROC ?",
    options: [
      "En lui demandant de changer de personnalité",
      "En modifiant les probabilités d'apparition du signal selon les sessions",
      "En modifiant les gains et pertes associés aux réponses correctes ou incorrectes",
      "En changeant l'intensité du signal entre les sessions"
    ],
    correct: [1, 2],
    feedback: "On déplace le critère via des manipulations externes : probabilité d'apparition du signal (rare → conservateur, fréquent → libéral) et enjeux financiers (HITs très rémunérés → libéral). Changer la personnalité ou l'intensité du signal ne change pas le critère de façon contrôlée."
  },
  {
    id: 29, bloc: 3, blocLabel: "3 — TDS",
    text: "Un radiologue adopte un critère très libéral. Laquelle de ces conséquences est FAUSSE ?",
    options: [
      "Il aura peu de cancers manqués",
      "Il aura beaucoup de fausses alarmes",
      "Sa sensibilité d' sera améliorée",
      "Il dira 'oui' facilement même en cas de doute"
    ],
    correct: [2],
    feedback: "C est FAUSSE : changer le critère ne change JAMAIS d'. La sensibilité sensorielle est indépendante de la stratégie de décision. Le critère libéral donne peu de manqués et beaucoup de fausses alarmes — mais d' reste identique."
  },
  {
    id: 30, bloc: 3, blocLabel: "3 — TDS",
    text: "Pourquoi le nAFC (choix forcé) est-il lié à la TDS ?",
    options: [
      "Il force le sujet à choisir entre fenêtres, éliminant l'influence de β",
      "Il donne une mesure de sensibilité moins biaisée par la stratégie de réponse",
      "En 2AFC, la performance au hasard est 50%",
      "En 3AFC, la performance au hasard est de 33%"
    ],
    correct: [0, 1, 2, 3],
    feedback: "nAFC complète la TDS : choix forcé → le sujet ne peut pas biaiser avec un β libéral/conservateur → mesure proche de d' pur. En 2AFC, hasard = 50%. Ils ne sont pas identiques (D faux) : nAFC = procédure, TDS = cadre théorique."
  },

  // ══ 4 — Fondements biologiques ══════════════════════════════
  {
    id: 31, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Que stipule la doctrine des énergies nerveuses spécifiques de Müller ?",
    options: [
      "Ce qui détermine la sensation, c'est quel nerf est stimulé, pas comment",
      "On accède directement au monde extérieur via nos organes sensoriels",
      "Appuyer sur l'œil dans le noir peut produire une sensation lumineuse",
      "Chaque sensation correspond à une énergie physique unique"
    ],
    correct: [0, 2],
    feedback: "Müller : ce qui compte = QUEL nerf, pas COMMENT stimulé. Appuyer sur l'œil active le nerf optique → sensation de lumière sans lumière. On n'accède jamais directement au monde — seulement à l'activité de nos nerfs."
  },
  {
    id: 32, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Quelle affirmation sur le spectre visible et la diffusion de Rayleigh est FAUSSE ?",
    options: [
      "Le spectre visible s'étend de 400 à 700 nanomètres",
      "Au coucher du soleil, la lumière bleue est amplifiée car le trajet est plus court",
      "La diffusion de Rayleigh explique le ciel bleu quand le soleil est haut",
      "Au coucher du soleil, la lumière bleue est perdue en chemin → ciel rouge"
    ],
    correct: [1],
    feedback: "B est FAUSSE : au coucher, le trajet est plus LONG (pas plus court), la lumière bleue est perdue → ciel rouge/orange. Quand le soleil est haut, le trajet est court et la lumière bleue est diffusée dans tout le ciel."
  },
  {
    id: 33, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Quelles caractéristiques appartiennent aux bâtonnets ?",
    options: [
      "Ils contiennent un seul pigment : la rhodopsine",
      "Ils sont absents de la fovéa",
      "Ils permettent la discrimination des couleurs",
      "Leur câblage convergent produit une vision sensible mais peu précise"
    ],
    correct: [0, 1, 3],
    feedback: "Bâtonnets : 1 seul pigment (rhodopsine), absents de la fovéa, câblage convergent (peu précis mais très sensible à la lumière faible). La discrimination des couleurs est le rôle des CÔNES — C est FAUX."
  },
  {
    id: 34, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Qu'est-ce que l'érythrolabe, le chlorolabe et le cyanolabe ?",
    options: [
      "Les trois pigments des cônes (L, M, S)",
      "L'érythrolabe est sensible aux grandes longueurs d'onde (rouge)",
      "Chaque cône contient les trois pigments pour comparer les couleurs",
      "Leur comparaison est la base de la théorie trichromatique de Young-Helmholtz"
    ],
    correct: [0, 1, 3],
    feedback: "Chaque cône ne contient QU'UN SEUL pigment — C est FAUX. La discrimination des couleurs vient de la comparaison entre les 3 types (L=érythrolabe/rouge, M=chlorolabe/vert, S=cyanolabe/bleu). Base de la théorie trichromatique."
  },
  {
    id: 35, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Combien y a-t-il de paires de nerfs crâniens et quelle est leur fonction ?",
    options: [
      "14 paires, uniquement sensorielles",
      "12 paires passant par des ouvertures à la base du crâne",
      "Ils conduisent des informations sensorielles, motrices ou les deux",
      "12 paires impliquées uniquement dans la vision"
    ],
    correct: [1, 2],
    feedback: "12 paires de nerfs crâniens (pas 14), conduisant des infos sensorielles ET/OU motrices. Ils couvrent vision, audition, équilibration, motricité faciale, etc. — pas uniquement la vision."
  },
  {
    id: 36, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Le CGL (corps géniculé latéral) a 6 couches. Comment sont-elles réparties ?",
    options: [
      "Couches 1-2 : magnocellulaires → mouvement, contraste, localisation grossière",
      "Couches 3-6 : parvocellulaires → couleur, détails fins, reconnaissance",
      "Couches 1-2 : parvocellulaires → couleur et détails fins",
      "Il est situé dans le thalamus"
    ],
    correct: [0, 1, 3],
    feedback: "CGL dans le thalamus : couches 1-2 = magnocellulaires (grandes cellules, mouvement/contraste), couches 3-6 = parvocellulaires (petites cellules, couleur/détails). C est INVERSÉ."
  },
  {
    id: 37, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Une lésion du lobe temporal produit quels troubles ?",
    options: [
      "Agnosie visuelle : voit mais ne reconnaît plus les objets",
      "Simultagnosie : ne perçoit qu'un objet à la fois",
      "Prosopagnosie : ne reconnaît plus les visages",
      "Ataxie optique : rate les objets en tendant la main"
    ],
    correct: [0, 2],
    feedback: "Lobe temporal = voie VENTRALE ('quoi ?'). Lésion → agnosie visuelle et prosopagnosie. La simultagnosie et l'ataxie optique sont des troubles de la voie DORSALE (lobe pariétal postérieur)."
  },
  {
    id: 38, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Qu'est-ce qui distingue l'ataxie optique de la simultagnosie ?",
    options: [
      "Dans l'ataxie optique, le patient voit la cible mais commet des erreurs de guidage du geste",
      "Dans la simultagnosie, le patient ne perçoit qu'un objet à la fois",
      "Les deux troubles relèvent de la voie ventrale",
      "Dans la simultagnosie, les objets sont perçus isolément, sans scène globale"
    ],
    correct: [0, 1, 3],
    feedback: "Ataxie optique (voie dorsale) : voit la cible, mais erreurs d'orientation/direction du geste dans le champ contralatéral. Simultagnosie (voie dorsale aussi) : perçoit des éléments isolés mais ne peut former une scène unifiée. Les DEUX sont de la voie DORSALE — C est FAUX."
  },
  {
    id: 39, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Quels types de mouvements oculaires permettent de STABILISER le regard ?",
    options: [
      "Les saccades",
      "Le réflexe vestibulo-oculaire",
      "Le système optocinétique",
      "La vergence"
    ],
    correct: [1, 2],
    feedback: "Stabilisation : réflexe vestibulo-oculaire (infos d'accélération vestibulaires) et système optocinétique (flux visuel). Les saccades changent la DIRECTION du regard. La vergence ajuste la profondeur (convergence/divergence des yeux)."
  },
  {
    id: 40, bloc: 4, blocLabel: "4 — Fondements biologiques",
    text: "Quelle erreur réfractive correspond à une cornée dont les courbures sont inégales ?",
    options: [
      "Myopie",
      "Hypermétropie",
      "Astigmatisme",
      "Presbytie"
    ],
    correct: [2],
    feedback: "Astigmatisme = cornée en forme de rugby (courbures inégales selon les méridiens) → lignes dans certaines orientations moins nettes. Myopie = image avant la rétine. Hypermétropie = image derrière. Presbytie = perte d'accommodation avec l'âge."
  },

  // ══ 5 — Perception indirecte & géons ════════════════════════
  {
    id: 41, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Quelle est l'idée centrale de la perception indirecte ?",
    options: [
      "L'information sensorielle est ambiguë — le cerveau reconstruit via des représentations",
      "L'environnement contient suffisamment d'information pour guider directement la perception",
      "Elle s'appuie sur l'héritage philosophique dualiste et la métaphore du calcul",
      "Elle est dominante en psychologie cognitive"
    ],
    correct: [0, 2, 3],
    feedback: "Perception indirecte : information ambiguë → reconstruction via représentations. Ancrage dualiste + métaphore du calcul. Dominante en psycho cognitive. B décrit la perception DIRECTE de Gibson."
  },
  {
    id: 42, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Quels sont les trois formats de représentation mentale ?",
    options: [
      "Analogique : ressemble à ce qu'elle représente (image mentale)",
      "Verbal ou linguistique : encodée en mots",
      "Quantitatif : encodé en valeurs numériques",
      "Propositionnel : encodé en propositions logiques abstraites"
    ],
    correct: [0, 1, 3],
    feedback: "Les 3 formats : analogique, verbal/linguistique, propositionnel. Le format 'quantitatif' n'existe pas dans cette classification."
  },
  {
    id: 43, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Qu'est-ce qu'un géon selon Biederman (1987) ?",
    options: [
      "Une primitive volumétrique simple (cylindre, cône, brique...)",
      "Biederman propose 36 géons de base",
      "Les géons sont viewpoint-invariant : reconnaissables depuis la plupart des angles",
      "Les géons sont des primitives auditives"
    ],
    correct: [0, 1, 2],
    feedback: "Géons = primitives volumétriques. Biederman en propose 36. Ils sont viewpoint-invariant (sauf angles accidentels très spécifiques). Ce sont des primitives VISUELLES, pas auditives."
  },
  {
    id: 44, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "L'expérience 'Dr. Angry and Mr. Smile' (Schyns & Oliva, 1999) montre que…",
    options: [
      "Les géons de Biederman sont universels et fixes",
      "Les primitives perceptives dépendent des catégories formées par l'observateur",
      "La catégorisation d'un visage hybride varie selon l'observateur",
      "Les primitives perceptives sont apprises, pas innées"
    ],
    correct: [1, 2, 3],
    feedback: "Schyns & Oliva : les 'primitives' ne sont pas fixes — elles dépendent des catégories de l'observateur. Face à un visage hybride (haut=colère, bas=sourire), la catégorisation varie. Cela réfute l'universalité des géons (A est FAUX)."
  },
  {
    id: 45, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Qu'est-ce que le problème de la 'régression à l'infini' dans la critique de la perception indirecte ?",
    options: [
      "Si percevoir requiert des représentations, il faut d'autres représentations pour les acquérir — et ainsi de suite",
      "C'est une critique adressée à Gibson, pas à la perception indirecte",
      "Il illustre que l'approche indirecte ne peut pas expliquer l'acquisition initiale des représentations",
      "Le problème est que les représentations sont trop nombreuses pour être stockées"
    ],
    correct: [0, 2],
    feedback: "Régression à l'infini : pour interpréter via des représentations, il faut avoir acquis ces représentations — ce qui nécessite d'autres représentations, etc. C'est une critique DE la perception indirecte. Le problème est l'acquisition initiale, pas le stockage."
  },
  {
    id: 46, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "La 'désincarnation' est une critique des approches représentationnalistes. Qu'est-ce que cela signifie ?",
    options: [
      "Elles traitent le cerveau comme un processeur isolé du corps et du monde",
      "Elles ont surtout été testées en laboratoire avec des conditions artificielles",
      "Elles prédisent correctement tous les comportements perceptifs naturels",
      "Elles ignorent que tout organisme est incarné — corps et actions font partie de la perception"
    ],
    correct: [0, 1, 3],
    feedback: "Désincarnation = cerveau traité comme ordinateur séparé du corps (héritage de Descartes). Critique liée : tests en laboratoire (inadéquation écologique). Gibson répond : organisme, corps, mouvements et environnement sont inséparables de la perception."
  },
  {
    id: 47, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Comment reconnaît-on une tasse selon Biederman ?",
    options: [
      "En mémorisant une image photographique précise de chaque tasse",
      "En décomposant l'objet en géons (cylindre + tore) et leurs relations spatiales",
      "La reconnaissance fonctionne depuis n'importe quel angle sauf les angles accidentels",
      "En comparant à des prototypes stockés en mémoire sémantique"
    ],
    correct: [1, 2],
    feedback: "Biederman : reconnaissance via géons (cylindre pour le corps, tore pour l'anse) + relations spatiales. Viewpoint-invariant sauf angles accidentels. Les prototypes de mémoire sémantique sont une autre théorie."
  },
  {
    id: 48, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Quelle affirmation sur Piaget et les représentations est correcte ?",
    options: [
      "Pour Piaget, les représentations sont innées et ne se développent pas",
      "Piaget montre que les représentations se construisent progressivement par l'expérience",
      "Piaget est un précurseur de l'approche écologique de Gibson",
      "L'abstraction progressive du processus de représentation est une idée piagétienne"
    ],
    correct: [1, 3],
    feedback: "Piaget : les représentations se construisent progressivement, avec abstraction croissante. Il est représentationnaliste — à l'opposé de Gibson. Il n'est pas un précurseur de l'approche écologique."
  },
  {
    id: 49, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Pourquoi dit-on que les géons sont 'discriminables' ?",
    options: [
      "Ils restent distinguables même dans des conditions visuelles dégradées",
      "Cela rend la reconnaissance robuste même avec une information visuelle partielle",
      "Cette propriété est directement remise en question par Schyns & Oliva (1999)",
      "Deux géons différents ne peuvent pas être confondus, même en basse luminosité"
    ],
    correct: [0, 1],
    feedback: "Discriminables = deux géons restent distinguables même dégradés (occlusion, obscurité) → reconnaissance robuste. Schyns & Oliva remettent en question l'universalité/fixité des primitives, pas spécifiquement leur discriminabilité."
  },
  {
    id: 50, bloc: 5, blocLabel: "5 — Perception indirecte & géons",
    text: "Quelle est la différence principale entre paradigmes représentationnalistes et non-représentationnalistes ?",
    options: [
      "Les représentationnalistes postulent que le cerveau construit une représentation interne",
      "Les non-représentationnalistes incluent la psychologie écologique de Gibson",
      "Les représentationnalistes sont minoritaires en psychologie cognitive",
      "Les non-représentationnalistes postulent que l'info environnementale est suffisante"
    ],
    correct: [0, 1, 3],
    feedback: "Représentationnalistes (DOMINANTS en psycho cognitive) : reconstruction interne. Non-représentationnalistes : Gibson (psychologie écologique) — info environnementale directement utilisable. C est FAUX : les représentationnalistes sont dominants."
  },

  // ══ 6 — Gibson & perception directe ═════════════════════════
  {
    id: 51, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Quel est le postulat central de Gibson ?",
    options: [
      "L'information environnementale est riche et non-ambiguë — pas besoin de représentations",
      "Gibson publie ses ouvrages majeurs en 1966 et 1979",
      "Le sujet et l'environnement forment un tout indissociable",
      "La perception est guidée par l'action en cours"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Gibson : 3 postulats : info non-ambiguë, unité organisme-environnement, perception guidée par l'action. B décrit la perception INDIRECTE."
  },
  {
    id: 52, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Le flux optique est-il un invariant structural ou transformationnel ?",
    options: [
      "Structural, car il est permanent dans l'environnement",
      "Transformationnel, car il se conserve à travers les transformations liées au mouvement",
      "Le gradient de texture est un invariant structural",
      "Le flux optique informe directement sur la direction et la vitesse de déplacement"
    ],
    correct: [1, 2, 3],
    feedback: "Flux optique = invariant TRANSFORMATIONNEL (lié au mouvement, pas une propriété permanente). Le gradient de texture = invariant structural (propriété permanente de l'environnement). Le flux optique informe direction, vitesse, profondeur."
  },
  {
    id: 53, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Qu'est-ce que τ (tau) et quel est son avantage ?",
    options: [
      "τ = taille angulaire / taux de croissance de cette taille angulaire",
      "τ représente le temps estimé avant contact avec un objet en approche",
      "τ nécessite de connaître séparément la distance et la vitesse de l'objet",
      "τ est directement disponible dans le flux optique, sans calcul mental"
    ],
    correct: [0, 1, 3],
    feedback: "τ = taille angulaire / taux de croissance = temps avant impact. Son avantage : disponible DIRECTEMENT dans le flux optique, sans calculer distance et vitesse séparément (C est FAUX). Un pigeon qui atterrit, un footballeur qui frappe utilisent τ."
  },
  {
    id: 54, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Une affordance est-elle une propriété de l'objet, du sujet, ou des deux ?",
    options: [
      "Une affordance est purement dans l'objet, indépendamment de l'organisme",
      "Elle est dans la relation entre l'objet et l'organisme",
      "Elle dépend des capacités motrices et perceptives de l'organisme",
      "Elle est perçue directement, sans inférence"
    ],
    correct: [1, 2, 3],
    feedback: "Affordance = dans la RELATION objet-organisme (pas dans l'objet seul — A est FAUX). Elle dépend des capacités de l'organisme (une branche afforde la grimpe pour un singe, pas pour un humain). Elle est perçue directement."
  },
  {
    id: 55, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Selon Warren (1984), quand un escalier afforde-t-il la montée ?",
    options: [
      "Quand la largeur des marches est suffisante",
      "Quand la hauteur des marches / longueur de jambe ≈ π/4",
      "Le même escalier peut être montable pour un adulte mais pas pour un enfant",
      "La hauteur de marche seule suffit à déterminer si l'escalier est montable"
    ],
    correct: [1, 2],
    feedback: "Warren (1984) : escalier montable si hauteur de marche / longueur de jambe ≈ π/4. Rapport dépendant de l'organisme → même escalier, affordances différentes pour adulte et enfant. La largeur n'est pas le critère, et la hauteur seule ne suffit pas sans le rapport avec la jambe."
  },
  {
    id: 56, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Qu'est-ce qu'une loi de contrôle dans l'approche de Gibson ?",
    options: [
      "Une règle nécessitant une représentation mentale de l'objectif avant d'agir",
      "Une règle liant directement variable perceptive et variable motrice",
      "Maintenir τ constant lors de l'approche permet un atterrissage en douceur",
      "Les lois de contrôle illustrent le couplage direct perception-action"
    ],
    correct: [1, 2, 3],
    feedback: "Lois de contrôle = règles perceptivo-motrices DIRECTES, sans représentation (A est FAUX). Ex : maintenir τ constant → atterrissage en douceur. Illustrent le couplage direct perception-action."
  },
  {
    id: 57, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Que démontre la chambre oscillante de Lee (1976) ?",
    options: [
      "Les bébés tombent car ils privilégient l'information visuelle sur les infos vestibulaires",
      "Le flux optique domine sur les informations vestibulaires pour le contrôle posturale",
      "Cela illustre le couplage direct perception-action central chez Gibson",
      "Le flux optique seul suffit à contrôler la posture"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Chambre oscillante : chambre bouge (pas l'enfant) → flux optique indique un mouvement → l'enfant tombe. La vision domine sur les infos vestibulaires correctes. Cela CONFIRME l'approche gibsonienne — pas besoin de représentation (C est FAUX)."
  },
  {
    id: 58, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Quelle est la principale limite de l'approche gibsonienne ?",
    options: [
      "Gibson ignore complètement le rôle du cerveau",
      "Elle est difficile à modéliser computationnellement",
      "Elle a du mal à rendre compte de la perception dans des environnements pauvres ou artificiels",
      "Elle ne s'applique qu'aux animaux non-humains"
    ],
    correct: [1, 2],
    feedback: "Gibson est difficile à formaliser computationnellement (comment modéliser les affordances ?). Dans des environnements appauvris (brouillard, laboratoire), l'info environnementale devient insuffisante. Gibson ne nie pas le cerveau et s'applique aux humains."
  },
  {
    id: 59, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Quelles sont les deux composantes du flux optique ?",
    options: [
      "Laplacienne (expansion/contraction) : indique la direction de déplacement",
      "Rotationnelle : liée aux rotations",
      "Temporelle : liée à la durée du déplacement",
      "Frontale : liée à la vitesse d'approche d'une surface"
    ],
    correct: [0, 1],
    feedback: "Le flux optique a deux composantes : laplacienne (expansion/contraction des objets, indique la direction) et rotationnelle (rotations). Il n'y a pas de composante 'temporelle' ou 'frontale' dans cette classification."
  },
  {
    id: 60, bloc: 6, blocLabel: "6 — Gibson & perception directe",
    text: "Comment Gibson s'oppose-t-il à Biederman ?",
    options: [
      "Gibson rejette les représentations intermédiaires entre stimulus et action",
      "Biederman postule des géons internes — forme de traitement représentationnaliste",
      "Gibson pense comme Biederman que la reconnaissance repose sur des primitives internes",
      "Pour Gibson, c'est l'affordance qui est l'unité de perception, pas la forme géométrique"
    ],
    correct: [0, 1, 3],
    feedback: "Gibson : pas de représentations → perception directe des affordances. Biederman : géons internes = représentationnaliste. Gibson ne partage PAS la vision de primitives géométriques fixes (C est FAUX) — l'affordance prime sur la forme."
  },

  // ══ 7 — Expertise & perception catégorielle & Proffitt ══════
  {
    id: 61, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Qu'ont montré Chase & Simon (1973) sur la perception des experts aux échecs ?",
    options: [
      "Les grands maîtres mémorisent les positions pièce par pièce, plus rapidement que les novices",
      "Les experts perçoivent des structures (chunks) invisibles aux novices",
      "L'avantage des experts disparaît face à des positions de pièces aléatoires",
      "Les experts stockent entre 50 000 et 300 000 chunks en mémoire à long terme"
    ],
    correct: [1, 2, 3],
    feedback: "Chase & Simon : les experts mémorisent des STRUCTURES (chunks), pas pièce par pièce. Sur des positions aléatoires, l'avantage disparaît — preuve que c'est la structure signifiante qui est mémorisée, pas une mémoire photographique. Estimation : 50 000 à 300 000 chunks en MLT."
  },
  {
    id: 62, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Quelle est la définition de la perception catégorielle selon Harnad (1987) ?",
    options: [
      "La capacité à mémoriser des objets en les regroupant en chunks signifiants",
      "Le processus par lequel une stimulation continue est classée en catégories dont les membres acquièrent des relations de similarité entre eux",
      "Les différences entre objets de catégories différentes sont accentuées perceptivement",
      "Les différences entre objets de la même catégorie sont minimisées perceptivement"
    ],
    correct: [1, 2, 3],
    feedback: "Harnad (1987) : perception catégorielle = stimulation continue classée en catégories → similarité accrue au sein des catégories, dissimilarité accrue entre catégories. Ce n'est pas la même chose que les chunks de Chase & Simon (qui concernent la mémoire, pas directement la perception)."
  },
  {
    id: 63, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "L'expérience de Lisker & Abramson (1970) sur le Voice Onset Time (VOT) illustre quoi ?",
    options: [
      "Le VOT est une variable physique qui varie de façon continue",
      "La perception des phonèmes /b/ et /p/ est catégorielle : on perçoit une frontière nette malgré le continuum physique",
      "Le changement physique est linéaire mais le changement perceptif est non-linéaire",
      "Les phonèmes sont perçus différemment selon la langue maternelle de l'auditeur"
    ],
    correct: [0, 1, 2],
    feedback: "VOT = variable physique continue. Pourtant on perçoit /b/ et /p/ comme deux catégories nettement distinctes — c'est la perception catégorielle. Changement physique linéaire → changement perceptif non-linéaire (abrupt à la frontière). L'effet de la langue maternelle est réel mais n'est pas le point central de cette expérience."
  },
  {
    id: 64, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Selon Goldstone & Hendrickson (2010), quel est le lien entre perception catégorielle et cognition ?",
    options: [
      "La perception catégorielle est le processus de production de la pensée protosymbolique",
      "Les catégories perceptives sont les briques de base de la cognition",
      "La pensée protosymbolique précède la perception catégorielle et la génère",
      "La perception catégorielle crée des classes d'équivalences pour des stimuli physiquement différents"
    ],
    correct: [0, 1, 3],
    feedback: "Goldstone & Hendrickson (2010) : perception catégorielle = production de pensée protosymbolique, via la création de classes d'équivalences pour des stimuli différents. Ce sont les catégories perceptives qui sont à la base de la cognition — pas l'inverse (C est FAUX)."
  },
  {
    id: 65, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Quels sont les deux effets caractéristiques de la perception catégorielle sur les jugements perceptifs ?",
    options: [
      "Les différences entre membres de catégories différentes sont accentuées",
      "Les différences entre membres de la même catégorie sont minimisées",
      "Les différences entre membres de la même catégorie sont accentuées",
      "Les catégories rendent la perception plus précise pour tous les stimuli"
    ],
    correct: [0, 1],
    feedback: "Deux effets : accentuation des différences ENTRE catégories + minimisation des différences AU SEIN d'une catégorie. C est l'inverse de la réalité. D est faux : la catégorisation améliore la discrimination entre catégories mais réduit la sensibilité aux variations intracatégorielles."
  },
  {
    id: 66, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Qu'ont montré Proffitt et al. (2003) sur la perception des pentes ?",
    options: [
      "Les pentes sont systématiquement surestimées par rapport à leur valeur physique réelle",
      "Les participants portant un sac à dos lourd surestiment davantage les pentes",
      "La fatigue et la charge physique n'ont aucun effet sur la perception des pentes",
      "L'effet est présent sur les mesures verbale et haptique"
    ],
    correct: [0, 1, 3],
    feedback: "Proffitt : pentes surestimées (5° perçu comme ~20°), effet amplifié avec sac à dos. L'effet est présent sur mesures VERBALE et HAPTIQUE (jugements plus cognitifs), mais moins sur la mesure VISUELLE (plus directe et automatique). C est FAUX."
  },
  {
    id: 67, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Pourquoi la mesure visuelle est-elle moins affectée que les mesures verbale et haptique dans l'expérience de Proffitt ?",
    options: [
      "La mesure visuelle est plus automatique et directe — moins perméable aux biais cognitifs",
      "Les mesures verbale et haptique impliquent plus de traitement cognitif conscient",
      "La mesure visuelle est la plus précise car elle utilise directement le flux optique",
      "Les mesures verbale et haptique sont plus influencées par l'état interne de l'organisme"
    ],
    correct: [0, 1, 3],
    feedback: "La mesure visuelle (ajuster un disque) est un jugement perceptif immédiat et automatique — plus résistant aux influences de l'état interne. Les mesures verbale (donner un chiffre) et haptique (incliner une plateforme) impliquent plus de traitement cognitif conscient, donc plus perméables aux biais liés à la fatigue ou à la charge."
  },
  {
    id: 68, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Qu'est-ce que l'alliesthésie ?",
    options: [
      "La valeur affective d'un stimulus change selon l'état interne de l'organisme",
      "Un stimulus lié à l'eau paraît plus désirable quand on est déshydraté",
      "C'est un phénomène exclusivement visuel",
      "L'alliesthésie illustre que la perception n'est pas neutre — elle dépend des besoins de l'organisme"
    ],
    correct: [0, 1, 3],
    feedback: "Alliesthésie : la valeur perçue d'un stimulus change selon l'état interne (faim, soif, fatigue). Ex : l'eau paraît plus belle et désirable quand on est déshydraté. C n'est pas exclusivement visuel — ça s'applique à toutes les modalités."
  },
  {
    id: 69, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Quel rôle joue le flux optique dans l'expérience de calibration de Proffitt (Exp. 3) ?",
    options: [
      "Un flux optique cohérent avec l'effort permet une recalibration correcte de la perception des distances",
      "Un flux optique incohérent empêche la recalibration",
      "Le flux optique n'a aucun rôle dans la calibration effort/espace — seul l'effort compte",
      "Le flux optique relie directement l'effort physique à la représentation de l'espace"
    ],
    correct: [0, 1, 3],
    feedback: "Exp. 3 de Proffitt : marche sur tapis roulant avec flux optique cohérent → recalibration correcte. Flux incohérent → pas de recalibration. Le flux optique joue un rôle clé dans la calibration effort/espace. C est FAUX."
  },
  {
    id: 70, bloc: 7, blocLabel: "7 — Expertise & Proffitt",
    text: "Quelles sont les deux limites de la vision classique de l'expertise identifiées dans le cours ?",
    options: [
      "Elle néglige la rationalité limitée : les experts ont des biais et des contraintes cognitives",
      "Elle est désincarnée : l'expertise est traitée comme une base de connaissances externe aux processus corporels",
      "Elle surestime le nombre de chunks mémorisables par les experts",
      "Elle ignore complètement le rôle de la mémoire à long terme dans l'expertise"
    ],
    correct: [0, 1],
    feedback: "Deux limites : (1) négligence de la rationalité limitée (les experts ne sont pas des machines optimales — ils ont des biais), (2) désincarnation (l'expertise est traitée comme une base de données externe, ignorant que savoir-faire et perception sont incarnés dans le corps et l'action)."
  },

  // ══ 8 — Processus affectifs, mouvements oculaires & maladies ══
  {
    id: 71, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Quelle est la différence entre humeur et émotion selon Laurent & Vandel (2016) ?",
    options: [
      "L'humeur est un état affectif de fond, basse intensité, dont les origines échappent à la conscience",
      "L'émotion a un objet identifié au plan de la conscience et est plus aiguë et intense",
      "L'humeur et l'émotion sont deux termes interchangeables désignant le même phénomène",
      "L'humeur est toujours consciente et volontairement contrôlable"
    ],
    correct: [0, 1],
    feedback: "Laurent & Vandel (2016) : humeur = phénomène de fond, basse intensité, omniprésent, origines largement inconscientes. Émotion = objet identifié, processus aigu, intensité plus importante. Ils sont distincts — C et D sont FAUX."
  },
  {
    id: 72, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Qu'ont montré Gasper & Clore (2002) sur le lien entre humeur et traitement visuel ?",
    options: [
      "Une humeur positive favorise un traitement global (vision d'ensemble)",
      "Une humeur négative favorise un traitement local (attention aux détails)",
      "L'humeur n'a aucun effet sur le style de traitement visuel",
      "Ils ont utilisé une induction d'humeur par récit d'événements passés positifs ou négatifs"
    ],
    correct: [0, 1, 3],
    feedback: "Gasper & Clore (2002) : induction d'humeur par récit → tâche de reproduction sérielle de dessins + jugement de similarité entre figures hiérarchiques. Résultat : humeur positive → traitement global ; humeur négative → traitement local. C est FAUX."
  },
  {
    id: 73, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Qu'est-ce que l'alliesthésie et quel est son lien avec la perception ?",
    options: [
      "La valeur affective d'un stimulus change selon l'état interne de l'organisme",
      "Un stimulus lié à l'eau paraît plus désirable quand on est déshydraté",
      "C'est un phénomène purement auditif sans équivalent visuel",
      "Elle illustre que la perception intègre les besoins biologiques de l'organisme"
    ],
    correct: [0, 1, 3],
    feedback: "Alliesthésie : la valeur perçue d'un stimulus varie selon l'état interne (faim, soif). Ex : eau paraît plus belle et désirable si déshydraté. Ce phénomène s'applique à plusieurs modalités — pas exclusivement auditif (C faux). Lien direct avec l'économie de l'action de Proffitt."
  },
  {
    id: 74, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Quel effet la proximité socioaffective a-t-elle sur la perception des pentes (Schnall et al., 2008) ?",
    options: [
      "Être accompagné d'un ami réduit la surestimation des pentes",
      "Le support social n'a aucun effet sur les jugements perceptifs de pente",
      "Cela illustre que les processus affectifs modulent la perception au sens de Proffitt",
      "L'effet est lié à l'économie de l'action : le coût perçu diminue quand on n'est pas seul"
    ],
    correct: [0, 2, 3],
    feedback: "Schnall et al. (2008) : être avec un ami réduit la surestimation des pentes. Cela s'inscrit dans le cadre de Proffitt — le coût perçu de l'action diminue avec le support social. B est FAUX."
  },
  {
    id: 75, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Selon la théorie de l'affect-en-tant-qu'information (Clore et al., 2001), comment l'humeur influence-t-elle la perception ?",
    options: [
      "L'humeur est utilisée comme information sur l'orientation initiale à adopter face à une tâche",
      "Une humeur positive signale que la situation est sûre → traitement plus global et heuristique",
      "L'humeur n'influence que les jugements explicites, jamais la perception visuelle",
      "Une humeur négative signale un problème → traitement plus analytique et local"
    ],
    correct: [0, 1, 3],
    feedback: "Théorie affect-en-tant-qu'information (Clore et al.) : l'humeur sert d'information sur l'environnement. Positive → situation sûre → traitement global/heuristique. Négative → problème potentiel → traitement local/analytique. L'humeur influence aussi la perception visuelle directe — C est FAUX."
  },
  {
    id: 76, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Pourquoi analyser les mouvements oculaires pour caractériser des maladies ?",
    options: [
      "Les mouvements oculaires reflètent les processus attentionnels et perceptifs sous-jacents",
      "Certaines maladies modifient de façon caractéristique les patterns d'exploration visuelle",
      "Les saccades oculaires sont entièrement sous contrôle volontaire conscient",
      "Les mouvements oculaires sont mesurables objectivement et de façon non-invasive"
    ],
    correct: [0, 1, 3],
    feedback: "Les mouvements oculaires reflètent les processus attentionnels et perceptifs. Des maladies comme Alzheimer ou la dépression modifient ces patterns de façon caractéristique et mesurable. C est FAUX : les saccades sont en grande partie automatiques et non entièrement volontaires."
  },
  {
    id: 77, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Qu'ont montré Noiret et al. (2018) sur les saccades oculaires dans la maladie d'Alzheimer ?",
    options: [
      "La maladie d'Alzheimer modifie les saccades oculaires et le contrôle attentionnel",
      "Les patients Alzheimer ont des patterns de saccades identiques aux personnes saines",
      "L'analyse des saccades peut contribuer à la caractérisation de la maladie",
      "Les mouvements oculaires constituent un marqueur potentiel de la maladie d'Alzheimer"
    ],
    correct: [0, 2, 3],
    feedback: "Noiret et al. (2018) : Alzheimer modifie les saccades et le contrôle attentionnel — ces modifications peuvent servir à caractériser la maladie. B est FAUX : les patterns sont bien différents des personnes saines."
  },
  {
    id: 78, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Que montrent Noiret et al. (2015) sur la dépression et l'exploration visuelle de visages ?",
    options: [
      "Les personnes âgées déprimées explorent les visages émotionnels différemment des non-déprimés",
      "Le comportement de scanning visuel est altéré dans la dépression majeure",
      "La dépression n'affecte que la mémoire, pas la perception visuelle",
      "L'étude porte sur le traitement de visages émotionnels chez des personnes âgées"
    ],
    correct: [0, 1, 3],
    feedback: "Noiret et al. (2015) : scanning visuel altéré dans la dépression majeure chez des personnes âgées face à des visages émotionnels. C est FAUX — la dépression affecte bien la perception visuelle, pas seulement la mémoire."
  },
  {
    id: 79, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "Qu'est-ce que le Modèle d'Enaction Multi-échelles (MEM) proposé par Laurent (2014) ?",
    options: [
      "Un modèle intégrant les multiples influences sur la perception à différents niveaux biologiques et psychologiques",
      "Il prend en compte l'autopoièse à de multiples niveaux, de la cellule à l'organisme",
      "Il propose que la perception ne dépend que des processus cognitifs de haut niveau",
      "Il intègre les dimensions biologiques, affectives, sociales et évolutives de la perception"
    ],
    correct: [0, 1, 3],
    feedback: "MEM (Laurent, 2014) : modèle intégratif prenant en compte l'autopoièse multi-niveaux (cellule → organisme), les influences mutuelles entre structures biologiques et psychologiques, et les dimensions téléologiques. C est FAUX — il intègre justement tous les niveaux, pas seulement le cognitif."
  },
  {
    id: 80, bloc: 8, blocLabel: "8 — Affectif & maladies",
    text: "La perception catégorielle peut-elle être acquise ? Quels exemples l'illustrent ?",
    options: [
      "Oui, elle peut être acquise — elle n'est pas entièrement innée",
      "La perception catégorielle des phonèmes est en partie spécifique à la culture",
      "Un même son peut être perçu comme 'Pa' par des Anglo-saxons et 'Pha' par des Thaïlandais",
      "On peut générer une perception catégorielle via un apprentissage de catégories arbitraires appliquées à des figures géométriques"
    ],
    correct: [0, 1, 2, 3],
    feedback: "Toutes les affirmations sont correctes ! La perception catégorielle est en partie innée (couleurs) mais aussi acquise. Preuve 1 : phonèmes — un même VOT est catégorisé différemment selon la langue maternelle. Preuve 2 : Goldstone (1994) — apprentissage de catégories arbitraires sur figures géométriques génère une perception catégorielle."
  }

  // ══ BLOCS 9 à venir ════════════════════════════════════════
];
