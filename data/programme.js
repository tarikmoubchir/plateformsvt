// Référentiel commun : niveaux, paliers, capacités (avec fiches méthode), concepts, cadre de référence.
window.SVT = {
  site: { nom: "Plateforme MOUBCHIR — CESR SVT", concepteur: "Pr. Tarik MOUBCHIR", seuil: 90 },

  niveaux: [
    // banque : true = les séquences et la banque de questions de ce niveau sont rédigées ; sinon seul le programme est affiché.
    { id: "2BAC_SPCF", nom: "2ᵉ année Bac — Sciences Physiques et Chimie, option français", actif: true, banque: true },
    { id: "1BAC_SE", nom: "1ʳᵉ année Bac — Sciences expérimentales", actif: true },
    { id: "TCS", nom: "Tronc commun scientifique", actif: true },
    { id: "3AC", nom: "3ᵉ année du collège", actif: true },
    { id: "2AC", nom: "2ᵉ année du collège", actif: true },
    { id: "1AC", nom: "1ʳᵉ année du collège", actif: true }
  ],

  // Inscription simulée dans le prototype local : la liste réelle viendra de la base en ligne.
  professeurs: [
    { id: "moubchir", nom: "Pr. Tarik MOUBCHIR", etablissement: "Lycée — classe inversée SVT", classes: ["2BAC SPC-F 1", "2BAC SPC-F 2", "1BAC SE-F 1", "TCS-F 1", "3AC-1", "2AC-1", "1AC-1"] },
    { id: "demo", nom: "Professeur de démonstration", etablissement: "Établissement de test", classes: ["2BAC SPC-F A"] }
  ],

  paliers: [
    { n: 1, nom: "S’informer", desc: "Tirer des informations d’un graphique, d’un texte, d’un schéma ou d’un tableau." },
    { n: 2, nom: "Communiquer", desc: "Décrire, comparer, construire un graphique ou un tableau, compléter un schéma." },
    { n: 3, nom: "Raisonner", desc: "Expliquer, relier cause et conséquence, critiquer, calculer, réaliser une synthèse." }
  ],

  capacites: {
    K: { palier: 0, nom: "Restituer ses connaissances", methode: [
      "Relire « L’essentiel » de la séquence en cachant les mots en gras, puis les retrouver.",
      "Refaire de mémoire le schéma bilan et le tableau des bilans.",
      "Apprendre les définitions mot à mot : une définition incomplète ne rapporte pas de point."
    ] },
    I1: { palier: 1, nom: "Tirer des informations d’un graphique", methode: [
      "Lire le titre, puis la grandeur et l’unité de chaque axe.",
      "Repérer les événements signalés (injection, ajout d’une substance…).",
      "Pour une valeur : partir de l’abscisse, monter jusqu’à la courbe, lire l’ordonnée.",
      "Pour une évolution : découper la courbe en phases et donner les valeurs de début et de fin de chaque phase."
    ] },
    I2: { palier: 1, nom: "Tirer des informations d’un texte", methode: [
      "Lire la question avant le texte pour savoir quoi chercher.",
      "Souligner les faits observés et les distinguer des interprétations.",
      "Répondre avec les informations du texte, sans ajouter ce qu’il ne dit pas."
    ] },
    I3: { palier: 1, nom: "Tirer des informations d’un schéma ou d’une image", methode: [
      "Lire le titre et l’échelle : que représente le document, à quelle taille ?",
      "Suivre chaque trait de légende jusqu’à la structure qu’il désigne.",
      "Relier la forme observée à la fonction connue (ex. crêtes = grande surface)."
    ] },
    I4: { palier: 1, nom: "Tirer des informations d’un tableau", methode: [
      "Lire le titre, l’en-tête des colonnes et des lignes, les unités.",
      "Croiser la bonne ligne et la bonne colonne pour lire une valeur.",
      "Comparer les lignes deux à deux : une seule condition doit changer à la fois."
    ] },
    C1: { palier: 2, nom: "Décrire ou comparer par un texte", methode: [
      "Décrire = dire ce que l’on voit, sans expliquer : sens de variation + valeurs chiffrées + unités.",
      "Comparer = utiliser des mots de comparaison (alors que, plus… que, contrairement à).",
      "Toujours citer au moins deux valeurs lues sur le document."
    ] },
    C2: { palier: 2, nom: "Construire un graphique", methode: [
      "Abscisse = le facteur que l’on fait varier (souvent le temps) ; ordonnée = la grandeur mesurée.",
      "Choisir une échelle régulière qui occupe la plus grande partie du papier millimétré.",
      "Courbe pour une évolution continue ; diagramme en bâtons pour comparer des catégories.",
      "Ne pas oublier : titre, nom et unité des axes, légende si plusieurs courbes."
    ] },
    C3: { palier: 2, nom: "Réaliser ou compléter un schéma", methode: [
      "Un schéma est simplifié : formes nettes, traits de légende horizontaux tracés à la règle.",
      "Chaque légende désigne une seule structure ; le titre indique ce qui est représenté.",
      "Pour un schéma fonctionnel : des flèches orientées du réactif vers le produit."
    ] },
    C4: { palier: 2, nom: "Construire un tableau", methode: [
      "Identifier ce que l’on compare (colonnes) et les critères de comparaison (lignes).",
      "Donner un titre, indiquer les unités dans l’en-tête, une seule information par case."
    ] },
    R1: { palier: 3, nom: "Expliquer en utilisant ses connaissances", methode: [
      "Partir du résultat observé, puis mobiliser la connaissance du cours qui le justifie.",
      "Enchaîner les étapes dans l’ordre avec des connecteurs (donc, car, ce qui entraîne).",
      "Terminer par une phrase qui répond exactement à la question posée."
    ] },
    R2: { palier: 3, nom: "Déduire — relier cause et conséquence", methode: [
      "Comparer deux situations qui ne diffèrent que par un seul facteur.",
      "La différence de résultat est la conséquence ; le facteur modifié est la cause.",
      "Rédiger : « On constate que… ; or… ; donc… »."
    ] },
    R3: { palier: 3, nom: "Critiquer une explication ou éprouver une hypothèse", methode: [
      "Reformuler l’affirmation ou l’hypothèse à tester.",
      "Chercher dans les documents un résultat qui la confirme ou la contredit.",
      "Conclure clairement : validée, réfutée, ou à corriger — en justifiant par un résultat."
    ] },
    R4: { palier: 3, nom: "Réaliser une synthèse — répondre au problème posé", methode: [
      "Rappeler le problème, puis tirer une idée essentielle de chaque document.",
      "Relier ces idées entre elles et aux connaissances, dans un ordre logique.",
      "Conclure par une réponse complète au problème initial."
    ] },
    R5: { palier: 3, nom: "Calculer un bilan ou un rendement", methode: [
      "Écrire la formule littérale avant de remplacer par les valeurs.",
      "Rappels : 1 NADH,H⁺ → 3 ATP ; 1 FADH₂ → 2 ATP ; 1 mol d’ATP = 30,5 kJ ; 1 mol de glucose = 2860 kJ.",
      "Rendement (%) = (énergie stockée dans l’ATP ÷ énergie totale du glucose) × 100.",
      "Vérifier l’unité et l’ordre de grandeur du résultat."
    ] }
  },

  unites: [
    { id: "U1", nom: "Unité 1 — Consommation de la matière organique et flux d’énergie", chapitres: [
      { id: "U1C1", nom: "Chapitre 1 — Libération de l’énergie emmagasinée dans la matière organique", sequences: ["S1", "S2", "S3"], actif: true },
      { id: "U1C2", nom: "Chapitre 2 — Rôle du muscle strié squelettique dans la conversion de l’énergie", sequences: [], actif: false }
    ] },
    { id: "U2", nom: "Unité 2 — Nature et expression de l’information génétique, transmission par la reproduction sexuée", chapitres: [], actif: false },
    { id: "U3", nom: "Unité 3 — Utilisation des matières organiques et inorganiques", chapitres: [], actif: false },
    { id: "U4", nom: "Unité 4 — Phénomènes géologiques accompagnant la formation des chaînes de montagnes", chapitres: [], actif: false }
  ],

  // Concepts cochables par le professeur (connaissances du cadre de référence, sous-domaine 1.1).
  concepts: {
    c1: "Notions de respiration et de fermentation",
    c2: "Glycolyse : étapes essentielles et bilan",
    c3: "Structure et ultrastructure de la mitochondrie",
    c4: "Cycle de Krebs : étapes essentielles et bilan",
    c5: "Chaîne respiratoire et phosphorylation oxydative",
    c6: "Bilan énergétique de la respiration",
    c7: "Fermentations : étapes essentielles et bilan",
    c8: "Rendement énergétique — comparaison respiration / fermentation"
  },

  cadre: {
    titre: "Cadre de référence de l’examen national — SVT, filière Sciences Physiques, option français (CNEE, octobre 2015)",
    structure: [
      ["Partie I — Restitution des connaissances", "5 pts (25 %)", "QCM, vrai/faux, appariement, sériation et classification, questions à réponse courte (définir, légender…). Porte sur un seul des quatre domaines."],
      ["Partie II — Raisonnement scientifique et communication écrite et graphique", "15 pts (75 %)", "3 exercices de 5 pts, chacun sur un domaine non évalué dans la partie I."]
    ],
    domaines: [
      ["1. Consommation de la matière organique et flux d’énergie", "25 %"],
      ["2. Nature et expression de l’information génétique — transmission par la reproduction sexuée", "25 %"],
      ["3. Utilisation des matières organiques et inorganiques", "25 %"],
      ["4. Phénomènes géologiques accompagnant la formation des chaînes de montagnes", "25 %"]
    ],
    documents: [
      ["Cadre de référence SVT — filière SPC, option français", "cadre-de-reference-svt-spc.pdf"],
      ["Cadre de référence SVT — filière SVT, option français", "cadre-de-reference-svt-svt.pdf"],
      ["Cadre de référence SVT — filière SM A, option français", "cadre-de-reference-svt-sma.pdf"],
      ["Cadre de référence SVT — TCS et 1ʳᵉ année Bac", "cadre-de-reference-svt-tcs-1bac.pdf"],
      ["Curriculum SVT — lycée", "curriculum-svt-lycee.pdf"],
      ["Curriculum SVT — collège", "curriculum-svt-college.pdf"]
    ],
    dossier: "docs/cadre/" // copies placées dans site/docs pour que le site soit publiable tel quel
  },

  sequences: {}
};
