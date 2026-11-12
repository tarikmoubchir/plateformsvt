// Séquence 1 — La respiration cellulaire (cadre de référence SPC, sous-domaine 1.1).
(function () {
  const gLevures = {
    type: "graph", titre: "Concentrations en O₂ et en CO₂ d’une suspension de levures en milieu aéré (mesures ExAO)",
    xlab: "Temps (min)", ylab: "Concentration (mg/L)", xmax: 12, ymax: 10,
    series: [
      { nom: "O₂", pts: [[0, 8], [3, 7.9], [4, 7], [6, 5], [8, 3], [10, 1.2], [12, 0.4]] },
      { nom: "CO₂", pts: [[0, 0.5], [3, 0.6], [4, 1.5], [6, 3.4], [8, 5.3], [10, 7], [12, 7.8]] }
    ],
    marques: [{ x: 3, label: "Injection de glucose" }]
  };
  const tMito = {
    type: "table", titre: "Consommation de O₂ par une suspension de mitochondries isolées, selon les substances ajoutées",
    cols: ["Substances ajoutées au milieu", "O₂ consommé (unités arbitraires)"],
    rows: [["Aucune", "0"], ["Glucose", "0"], ["Pyruvate", "12"], ["Pyruvate + ADP + Pi", "45"], ["Pyruvate + ADP + Pi + cyanure", "0"]]
  };
  const gMito = {
    type: "graph", titre: "Concentration en O₂ d’une suspension de mitochondries isolées (ajouts successifs)",
    xlab: "Temps (min)", ylab: "O₂ dans le milieu (u.a.)", xmax: 12, ymax: 120,
    series: [{ nom: "O₂", pts: [[0, 100], [2, 100], [5, 88], [8, 43], [11, 43]] }],
    marques: [{ x: 2, label: "Pyruvate" }, { x: 5, label: "ADP + Pi" }, { x: 8, label: "Cyanure" }]
  };
  const txLevures = {
    type: "texte", titre: "Observation de levures au microscope électronique",
    texte: "Des levures cultivées dans un milieu glucosé bien aéré possèdent de nombreuses mitochondries, volumineuses, dont la membrane interne forme des crêtes très développées. Les mêmes levures, cultivées dans un milieu glucosé privé de dioxygène, ne présentent que de rares mitochondries, petites et presque dépourvues de crêtes. Remises en milieu aéré, elles retrouvent en quelques heures des mitochondries normales."
  };
  const sMito = { type: "schema", nom: "mitochondrie", titre: "Schéma de l’ultrastructure d’une mitochondrie (coupe longitudinale)" };
  const tVesicules = {
    type: "table", titre: "Synthèse d’ATP par des vésicules fermées obtenues à partir de la membrane interne mitochondriale (milieu contenant ADP et Pi)",
    cols: ["Expérience", "Sphères pédonculées", "Gradient de H⁺ de part et d’autre de la membrane", "Synthèse d’ATP"],
    rows: [
      ["1", "Présentes", "Oui", "Oui"],
      ["2", "Présentes", "Non", "Non"],
      ["3", "Retirées", "Oui", "Non"],
      ["4", "Présentes", "Oui, puis ajout d’une substance rendant la membrane perméable aux H⁺", "Non"]
    ]
  };
  const tTemps = {
    type: "table", titre: "Concentration en O₂ d’une suspension de levures après ajout de glucose",
    cols: ["Temps (min)", "0", "2", "4", "6", "8", "10"],
    rows: [["O₂ (mg/L)", "8", "6,8", "5,5", "4,1", "2,9", "1,6"]]
  };

  SVT.sequences.S1 = {
    id: "S1", ordre: 1,
    titre: "Séquence 1 — La respiration cellulaire : réactions et structures productrices d’ATP",
    concepts: ["c1", "c2", "c3", "c4", "c5", "c6"],
    probleme: "Comment la cellule libère-t-elle, en présence de dioxygène, l’énergie emmagasinée dans le glucose ?",
    cours: [
      { titre: "1. Mise en évidence de la respiration cellulaire", html: `
        <p>Des levures placées dans un milieu aéré contenant du glucose <b>consomment du dioxygène</b>, <b>rejettent du dioxyde de carbone</b> et dégagent de la chaleur. Le glucose disparaît du milieu.</p>
        <p class="def"><b>Respiration cellulaire :</b> dégradation <b>complète</b> d’un métabolite organique (le glucose) en présence de O₂, en matière minérale (CO₂ et H₂O), avec libération d’une grande quantité d’énergie.</p>
        <p class="eq">C₆H₁₂O₆ + 6 O₂ → 6 CO₂ + 6 H₂O + énergie (2860 kJ par mole de glucose)</p>
        <p>Une partie de cette énergie est conservée sous forme d’<b>ATP</b>, intermédiaire énergétique de la cellule ; le reste est dissipé en chaleur.</p>` },
      { titre: "2. La glycolyse : première étape, dans le hyaloplasme", html: `
        <p>La glycolyse se déroule dans le <b>hyaloplasme</b> et ne nécessite pas de O₂. Une molécule de glucose (6 C) est oxydée en <b>2 molécules d’acide pyruvique</b> (pyruvate, 3 C).</p>
        <p class="eq">C₆H₁₂O₆ + 2 NAD⁺ + 2 ADP + 2 Pi → 2 CH₃–CO–COOH + 2 NADH,H⁺ + 2 ATP</p>
        <p><b>Bilan de la glycolyse :</b> 2 pyruvates, 2 ATP, 2 NADH,H⁺ par molécule de glucose.</p>` },
      { titre: "3. La mitochondrie : organite de la respiration", html: `
        <p>La mitochondrie est limitée par deux membranes : une <b>membrane externe</b> et une <b>membrane interne</b> repliée en <b>crêtes</b>, séparées par l’<b>espace intermembranaire</b>. L’intérieur est occupé par la <b>matrice</b>.</p>
        <ul><li>La <b>matrice</b> contient les enzymes des décarboxylations et des déshydrogénations (cycle de Krebs).</li>
        <li>La <b>membrane interne</b> porte les transporteurs d’électrons de la chaîne respiratoire et les <b>sphères pédonculées</b> (ATP synthases). Les crêtes augmentent sa surface.</li></ul>
        <p>Les mitochondries isolées n’utilisent pas le glucose : elles utilisent le <b>pyruvate</b> issu de la glycolyse.</p>` },
      { titre: "4. Les oxydations dans la matrice : cycle de Krebs", html: `
        <p>Le pyruvate entre dans la matrice. Il y subit une décarboxylation et une déshydrogénation qui forment l’<b>acétyl-coenzyme A</b> (2 C) :</p>
        <p class="eq">Pyruvate + NAD⁺ + CoA → Acétyl-CoA + CO₂ + NADH,H⁺</p>
        <p>L’acétyl-CoA entre dans le <b>cycle de Krebs</b>, suite de réactions de décarboxylation et de déshydrogénation qui achèvent la dégradation du squelette carboné en CO₂.</p>
        <p><b>Bilan dans la matrice, pour un pyruvate :</b> 3 CO₂, 4 NADH,H⁺, 1 FADH₂, 1 ATP.<br><b>Pour une molécule de glucose (2 pyruvates) :</b> 6 CO₂, 8 NADH,H⁺, 2 FADH₂, 2 ATP.</p>` },
      { titre: "5. Chaîne respiratoire et phosphorylation oxydative", html: `
        <p>Les transporteurs réduits (NADH,H⁺ et FADH₂) sont <b>réoxydés</b> au niveau de la membrane interne. Leurs électrons sont transférés de transporteur en transporteur le long de la <b>chaîne respiratoire</b> jusqu’au <b>dioxygène, accepteur final</b>, qui est réduit en eau :</p>
        <p class="eq">½ O₂ + 2 H⁺ + 2 e⁻ → H₂O</p>
        <p>L’énergie libérée par ce transfert sert à expulser des protons H⁺ de la matrice vers l’espace intermembranaire : il se crée un <b>gradient de H⁺</b>. Le retour des H⁺ vers la matrice à travers les <b>sphères pédonculées</b> fournit l’énergie de la phosphorylation de l’ADP :</p>
        <p class="eq">ADP + Pi → ATP (phosphorylation oxydative)</p>
        <p>La réoxydation d’1 NADH,H⁺ permet la synthèse de <b>3 ATP</b> ; celle d’1 FADH₂, de <b>2 ATP</b>.</p>` },
      { titre: "6. Bilan énergétique de la respiration", html: `
        <table class="t"><tr><th>Étape</th><th>Lieu</th><th>ATP directs</th><th>NADH,H⁺</th><th>FADH₂</th></tr>
        <tr><td>Glycolyse</td><td>Hyaloplasme</td><td>2</td><td>2</td><td>0</td></tr>
        <tr><td>Formation de l’acétyl-CoA + cycle de Krebs</td><td>Matrice</td><td>2</td><td>8</td><td>2</td></tr>
        <tr><td><b>Total</b></td><td></td><td><b>4</b></td><td><b>10</b></td><td><b>2</b></td></tr></table>
        <p class="eq">ATP total = 4 + (10 × 3) + (2 × 2) = 38 ATP par molécule de glucose</p>` }
    ],
    resolu: {
      titre: "Exercice résolu — Exploiter une expérience sur des mitochondries isolées",
      contexte: "On mesure la concentration en O₂ d’une suspension de mitochondries isolées. On ajoute successivement du pyruvate, puis de l’ADP et du phosphate (Pi), puis du cyanure (poison qui bloque le dernier transporteur de la chaîne respiratoire).",
      docs: [gMito],
      etapes: [
        { q: "Décrire l’évolution de la concentration en O₂ du milieu.", methode: "Décrire = découper en phases et donner des valeurs, sans expliquer.",
          r: "De 0 à 2 min, la concentration en O₂ reste constante à 100 u.a. Après l’ajout de pyruvate, elle diminue lentement de 100 à 88 u.a. entre 2 et 5 min. Après l’ajout d’ADP + Pi, elle diminue rapidement de 88 à 43 u.a. entre 5 et 8 min. Après l’ajout de cyanure, elle reste constante à 43 u.a." },
        { q: "Expliquer l’effet de l’ajout d’ADP + Pi.", methode: "Partir du résultat, puis mobiliser la connaissance : couplage entre chaîne respiratoire et synthèse d’ATP.",
          r: "L’ajout d’ADP + Pi accélère la consommation de O₂ (15 u.a./min au lieu de 4). L’ADP et le Pi sont les substrats de l’ATP synthase : leur phosphorylation en ATP utilise le gradient de H⁺, ce qui stimule la chaîne respiratoire et donc la réduction de O₂. La consommation de O₂ est couplée à la synthèse d’ATP." },
        { q: "Déduire le rôle du dioxygène dans la respiration.", methode: "Comparer avant/après cyanure : un seul facteur change.",
          r: "Le cyanure bloque le transfert des électrons vers O₂ et la consommation de O₂ s’arrête. On en déduit que O₂ est l’accepteur final des électrons de la chaîne respiratoire : il est réduit en H₂O." }
      ]
    },
    quiz: [
      { id: "S1-K1", cap: "K", concept: "c2", diff: 1, duree: 1, pts: 0.5, type: "qcm", enonce: "La glycolyse se déroule dans :", options: ["le hyaloplasme", "la matrice mitochondriale", "la membrane interne mitochondriale", "l’espace intermembranaire"], rep: 0, retour: "La glycolyse a lieu dans le hyaloplasme, hors de la mitochondrie, et sans O₂." },
      { id: "S1-K2", cap: "K", concept: "c5", diff: 1, duree: 1, pts: 0.5, type: "qcm", enonce: "L’accepteur final des électrons de la chaîne respiratoire est :", options: ["le dioxygène O₂", "le NAD⁺", "le pyruvate", "le dioxyde de carbone"], rep: 0, retour: "O₂ reçoit les électrons en bout de chaîne et il est réduit en H₂O." },
      { id: "S1-K3", cap: "K", concept: "c4", diff: 2, duree: 2, pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
        { t: "Le cycle de Krebs se déroule dans la matrice mitochondriale.", v: true },
        { t: "Le cycle de Krebs consomme directement du dioxygène.", v: false },
        { t: "Les décarboxylations du pyruvate et du cycle de Krebs libèrent du CO₂.", v: true },
        { t: "Les mitochondries isolées utilisent directement le glucose.", v: false }
      ], retour: "Le cycle de Krebs a lieu dans la matrice, libère du CO₂ et produit des transporteurs réduits ; O₂ n’intervient qu’au niveau de la chaîne respiratoire." },
      { id: "S1-K4", cap: "K", concept: "c3", diff: 1, duree: 2, pts: 1, type: "assoc", enonce: "Relier chaque structure cellulaire au phénomène qui s’y déroule.",
        gauche: ["Hyaloplasme", "Matrice mitochondriale", "Membrane interne (transporteurs)", "Sphères pédonculées"],
        droite: ["Synthèse d’ATP par phosphorylation de l’ADP", "Glycolyse", "Transfert des électrons jusqu’à O₂", "Cycle de Krebs"], rep: [1, 3, 2, 0],
        retour: "Glycolyse : hyaloplasme. Krebs : matrice. Chaîne respiratoire : membrane interne. ATP synthase : sphères pédonculées." },
      { id: "S1-K5", cap: "K", concept: "c6", diff: 2, duree: 2, pts: 1, type: "ordre", enonce: "Classer les étapes de la respiration cellulaire dans l’ordre chronologique.",
        items: ["Glycolyse", "Formation de l’acétyl-CoA", "Cycle de Krebs", "Chaîne respiratoire et phosphorylation oxydative"],
        retour: "Glucose → pyruvate (glycolyse) → acétyl-CoA → cycle de Krebs → réoxydation des transporteurs par la chaîne respiratoire." },
      { id: "S1-K6", cap: "K", concept: "c6", diff: 1, duree: 1, pts: 0.5, type: "num", enonce: "Combien de molécules d’ATP sont produites par la respiration complète d’une molécule de glucose ?", rep: 38, tol: 0, unite: "ATP", retour: "4 ATP directs + 10 NADH,H⁺ × 3 + 2 FADH₂ × 2 = 38 ATP." },
      { id: "S1-K7", cap: "K", concept: "c2", diff: 2, duree: 1, pts: 0.5, type: "qcm", enonce: "Le bilan de la glycolyse, pour une molécule de glucose, est :", options: ["2 pyruvates, 2 ATP et 2 NADH,H⁺", "2 pyruvates, 38 ATP et 2 CO₂", "1 pyruvate, 2 ATP et 2 FADH₂", "2 acétyl-CoA, 2 ATP et 2 CO₂"], rep: 0, retour: "La glycolyse ne libère pas de CO₂ : elle donne 2 pyruvates, 2 ATP et 2 NADH,H⁺." },
      { id: "S1-K8", cap: "K", concept: "c1", diff: 1, duree: 2, pts: 1, type: "trous", enonce: "Compléter la définition.",
        texte: "La respiration cellulaire est la dégradation {0} du glucose, en présence de {1}, en CO₂ et H₂O, avec production d’une {2} quantité d’ATP.",
        choix: [["complète", "incomplète"], ["dioxygène", "dioxyde de carbone", "éthanol"], ["grande", "faible"]], rep: [0, 0, 0],
        ouvert: "Définir : respiration cellulaire.", corrige: "Dégradation complète du glucose en présence de O₂, en CO₂ et H₂O, avec production d’une grande quantité d’ATP.",
        retour: "Trois idées attendues : dégradation complète, présence de O₂, beaucoup d’ATP." }
    ],
    paliers: {
      1: {
        entrainement: [{
          id: "S1-P1-A", titre: "Des levures en milieu aéré",
          contexte: "On place une suspension de levures dans un bioréacteur aéré puis fermé. À t = 3 min, on injecte une solution de glucose. Des sondes mesurent les concentrations en O₂ et en CO₂ du milieu.",
          docs: [gLevures],
          questions: [
            { id: "S1-P1-A1", cap: "I1", concept: "c1", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Avant l’injection de glucose (de 0 à 3 min), la concentration en O₂ :", options: ["reste presque constante, proche de 8 mg/L", "diminue fortement", "augmente de 0,5 à 8 mg/L", "est nulle"], rep: 0, retour: "Entre 0 et 3 min, la courbe O₂ est pratiquement horizontale (8 → 7,9 mg/L)." },
            { id: "S1-P1-A2", cap: "I1", concept: "c1", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Lire la concentration en O₂ du milieu à t = 8 min.", rep: 3, tol: 0.3, unite: "mg/L", retour: "À l’abscisse 8 min, la courbe O₂ passe par 3 mg/L." },
            { id: "S1-P1-A3", cap: "I1", concept: "c1", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "Après l’injection de glucose :", options: ["la concentration en O₂ diminue et celle en CO₂ augmente", "les deux concentrations diminuent", "la concentration en O₂ augmente et celle en CO₂ diminue", "les deux concentrations restent constantes"], rep: 0,
              ouvert: "Décrire l’évolution des concentrations en O₂ et en CO₂ après l’injection du glucose.", corrige: "O₂ diminue de 7,9 à 0,4 mg/L entre 3 et 12 min ; CO₂ augmente de 0,6 à 7,8 mg/L.",
              retour: "O₂ passe de 7,9 à 0,4 mg/L tandis que CO₂ passe de 0,6 à 7,8 mg/L : les levures respirent." }
          ]
        }],
        evaluation: [{
          id: "S1-P1-B", titre: "La mitochondrie, organite de la respiration",
          contexte: "Pour préciser le rôle des mitochondries dans la respiration, on dispose des documents suivants.",
          docs: [tMito, gMito, txLevures, sMito],
          questions: [
            { id: "S1-P1-B1", cap: "I4", concept: "c3", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "D’après le tableau, les mitochondries isolées consomment du O₂ lorsqu’on leur fournit :", options: ["du pyruvate", "du glucose", "aucune substance", "du cyanure seul"], rep: 0, retour: "Avec le glucose, la consommation est nulle (0) ; avec le pyruvate, elle est de 12 u.a." },
            { id: "S1-P1-B2", cap: "I4", concept: "c5", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "D’après le tableau, l’ajout d’ADP + Pi au pyruvate :", options: ["multiplie la consommation de O₂ par presque 4", "ne modifie pas la consommation de O₂", "arrête la consommation de O₂", "divise la consommation de O₂ par 4"], rep: 0, retour: "45 ÷ 12 = 3,75 : la consommation est presque quadruplée." },
            { id: "S1-P1-B3", cap: "I1", concept: "c5", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "D’après le graphique, la concentration en O₂ du milieu diminue le plus rapidement :", options: ["entre 5 et 8 min, après l’ajout d’ADP + Pi", "entre 0 et 2 min", "entre 2 et 5 min, après l’ajout de pyruvate", "entre 8 et 11 min, après l’ajout de cyanure"], rep: 0, retour: "Entre 5 et 8 min, O₂ passe de 88 à 43 u.a. (15 u.a./min), contre 4 u.a./min entre 2 et 5 min." },
            { id: "S1-P1-B4", cap: "I2", concept: "c3", diff: 2, duree: 4, pts: 1, type: "vf", enonce: "D’après le texte, répondre par vrai ou faux.", items: [
              { t: "En milieu aéré, les levures possèdent de nombreuses mitochondries à crêtes développées.", v: true },
              { t: "En l’absence de O₂, les mitochondries des levures sont plus volumineuses.", v: false },
              { t: "La modification des mitochondries en l’absence de O₂ est réversible.", v: true }
            ], retour: "Sans O₂ : mitochondries rares, petites, presque sans crêtes ; elles redeviennent normales en milieu aéré." },
            { id: "S1-P1-B5", cap: "I3", concept: "c3", diff: 1, duree: 4, pts: 1, type: "assoc", enonce: "Attribuer à chaque numéro du schéma la légende qui convient.",
              gauche: ["1", "2", "3", "4", "5"], droite: ["Matrice", "Membrane externe", "Crête mitochondriale", "Espace intermembranaire", "Membrane interne"], rep: [1, 3, 4, 2, 0],
              retour: "De l’extérieur vers l’intérieur : membrane externe, espace intermembranaire, membrane interne (repliée en crêtes), matrice." }
          ]
        }]
      },
      2: {
        entrainement: [{
          id: "S1-P2-A", titre: "Décrire et représenter la respiration des levures",
          contexte: "On reprend les mesures réalisées sur une suspension de levures en milieu aéré, avec injection de glucose à t = 3 min.",
          docs: [gLevures, sMito],
          questions: [
            { id: "S1-P2-A1", cap: "C1", concept: "c1", diff: 1, duree: 4, pts: 1, type: "trous", enonce: "Compléter la description de la courbe du O₂.",
              texte: "Avant l’injection du glucose, la concentration en O₂ reste {0}. Après l’injection, elle {1} de 7,9 à {2} mg/L, alors que la concentration en CO₂ {3}.",
              choix: [["constante", "nulle", "croissante"], ["diminue", "augmente"], ["0,4", "3", "7,8"], ["augmente", "diminue", "reste constante"]], rep: [0, 0, 0, 0],
              retour: "Une description cite le sens de variation et les valeurs de début et de fin." },
            { id: "S1-P2-A2", cap: "C2", concept: "c1", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Pour tracer la courbe d’évolution de la concentration en O₂ au cours du temps, on place :", options: ["le temps en abscisse et la concentration en O₂ en ordonnée", "la concentration en O₂ en abscisse et le temps en ordonnée", "le temps sur les deux axes", "le glucose en abscisse et le temps en ordonnée"], rep: 0, retour: "Le temps, facteur qui varie régulièrement, se place en abscisse ; la grandeur mesurée en ordonnée." },
            { id: "S1-P2-A3", cap: "C3", concept: "c3", diff: 1, duree: 4, pts: 1, type: "assoc", enonce: "Compléter les légendes du schéma de la mitochondrie.",
              gauche: ["1", "2", "3", "4", "5"], droite: ["Crête mitochondriale", "Membrane interne", "Matrice", "Membrane externe", "Espace intermembranaire"], rep: [3, 4, 1, 0, 2],
              retour: "1 membrane externe, 2 espace intermembranaire, 3 membrane interne, 4 crête, 5 matrice." }
          ]
        }],
        evaluation: [{
          id: "S1-P2-B", titre: "Communiquer des résultats sur la respiration",
          contexte: "Un élève doit présenter dans son compte rendu les résultats ci-dessous.",
          docs: [tTemps, tMito],
          questions: [
            { id: "S1-P2-B1", cap: "C2", concept: "c1", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Pour représenter les données du premier tableau, le graphique le mieux adapté est :", options: ["une courbe, car la grandeur évolue de façon continue au cours du temps", "un diagramme circulaire", "un diagramme en bâtons sans axe du temps", "un schéma fonctionnel"], rep: 0, retour: "Une évolution en fonction du temps se représente par une courbe." },
            { id: "S1-P2-B2", cap: "C2", concept: "c1", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "Le titre correct de ce graphique est :", options: ["Variation de la concentration en O₂ du milieu en fonction du temps", "Les levures", "Variation du temps en fonction de O₂", "Tableau de la respiration"], rep: 0, retour: "Titre = grandeur mesurée (ordonnée) « en fonction de » la grandeur en abscisse." },
            { id: "S1-P2-B3", cap: "C2", concept: "c1", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "Avec l’échelle 1 cm pour 2 min et 1 cm pour 1 mg/L, le point correspondant à t = 6 min se place à :", options: ["3 cm sur l’axe horizontal et 4,1 cm sur l’axe vertical", "6 cm sur l’axe horizontal et 4,1 cm sur l’axe vertical", "4,1 cm sur l’axe horizontal et 3 cm sur l’axe vertical", "3 cm sur l’axe horizontal et 8,2 cm sur l’axe vertical"], rep: 0,
              ouvert: "Tracer la courbe de variation de la concentration en O₂ en fonction du temps (échelle : 1 cm pour 2 min ; 1 cm pour 1 mg/L).", corrige: "Axes légendés avec unités, échelle respectée, 6 points exacts reliés, titre.",
              retour: "6 min ÷ 2 = 3 cm en abscisse ; 4,1 mg/L = 4,1 cm en ordonnée." },
            { id: "S1-P2-B4", cap: "C1", concept: "c3", diff: 2, duree: 4, pts: 1, type: "trous", enonce: "Compléter la comparaison tirée du second tableau.",
              texte: "Avec le glucose, la consommation de O₂ par les mitochondries est {0}, alors qu’avec le pyruvate elle atteint {1} u.a. Les mitochondries utilisent donc {2} et non {3}.",
              choix: [["nulle", "maximale"], ["12", "45", "0"], ["le pyruvate", "le glucose"], ["le glucose", "le pyruvate"]], rep: [0, 0, 0, 0],
              ouvert: "Comparer la consommation de O₂ par les mitochondries en présence de glucose et en présence de pyruvate. Que peut-on en déduire ?", corrige: "Nulle avec le glucose, 12 u.a. avec le pyruvate : la mitochondrie utilise le pyruvate, pas le glucose.",
              retour: "Comparer = « alors que » + valeurs chiffrées des deux situations." },
            { id: "S1-P2-B5", cap: "C3", concept: "c5", diff: 2, duree: 4, pts: 1, type: "assoc", enonce: "Compléter le schéma fonctionnel de la chaîne respiratoire en associant chaque rôle à l’élément correspondant.",
              gauche: ["Donneur d’électrons", "Accepteur final des électrons", "Produit de la réduction de l’accepteur final", "Site de la phosphorylation de l’ADP"],
              droite: ["H₂O", "Sphère pédonculée (ATP synthase)", "NADH,H⁺", "O₂"], rep: [2, 3, 0, 1],
              ouvert: "Réaliser un schéma fonctionnel de la membrane interne montrant le devenir des électrons du NADH,H⁺ et la synthèse d’ATP.", corrige: "NADH,H⁺ → transporteurs → O₂ réduit en H₂O ; H⁺ expulsés vers l’espace intermembranaire ; retour par la sphère pédonculée : ADP + Pi → ATP.",
              retour: "NADH,H⁺ donne ses électrons ; O₂ les reçoit et devient H₂O ; l’ATP est formé au niveau des sphères pédonculées." }
          ]
        }]
      },
      3: {
        entrainement: [{
          id: "S1-P3-A", titre: "Raisonner sur une expérience avec des mitochondries isolées",
          contexte: "On mesure la consommation de O₂ d’une suspension de mitochondries isolées dans différentes conditions. Le cyanure bloque le dernier transporteur de la chaîne respiratoire.",
          docs: [tMito],
          questions: [
            { id: "S1-P3-A1", cap: "R2", concept: "c2", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "Les mitochondries isolées ne consomment pas de O₂ avec le glucose, mais en consomment avec le pyruvate. On en déduit que :", options: ["le glucose doit d’abord être transformé en pyruvate hors de la mitochondrie, dans le hyaloplasme", "le glucose n’est jamais utilisé par la cellule", "le pyruvate est produit dans la matrice à partir de O₂", "la glycolyse se déroule dans la mitochondrie"], rep: 0, retour: "Seul le substrat change : la mitochondrie n’oxyde pas le glucose mais le pyruvate, produit par la glycolyse dans le hyaloplasme." },
            { id: "S1-P3-A2", cap: "R1", concept: "c5", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "L’arrêt de la consommation de O₂ en présence de cyanure s’explique par :", options: ["le blocage du transfert des électrons vers O₂ : O₂ n’est plus réduit en H₂O", "la destruction du pyruvate par le cyanure", "l’absence d’ADP dans le milieu", "l’arrêt de la glycolyse dans le hyaloplasme"], rep: 0, retour: "Le cyanure bloque la chaîne respiratoire : les électrons n’atteignent plus O₂, qui n’est donc plus consommé." },
            { id: "S1-P3-A3", cap: "R5", concept: "c5", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Calculer le nombre d’ATP formés par la réoxydation de 2 NADH,H⁺ et de 1 FADH₂.", rep: 8, tol: 0, unite: "ATP", retour: "2 × 3 + 1 × 2 = 8 ATP." }
          ]
        }],
        evaluation: [{
          id: "S1-P3-B", titre: "D’où vient l’ATP de la respiration ?",
          contexte: "On prépare des vésicules fermées à partir de fragments de membrane interne mitochondriale. Elles sont placées dans un milieu contenant de l’ADP et du Pi, et l’on recherche la synthèse d’ATP dans quatre conditions.",
          docs: [tVesicules],
          questions: [
            { id: "S1-P3-B1", cap: "R2", concept: "c5", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "En comparant les expériences 1, 2 et 3, on déduit que la synthèse d’ATP nécessite :", options: ["à la fois des sphères pédonculées et un gradient de H⁺", "uniquement des sphères pédonculées", "uniquement un gradient de H⁺", "ni sphères pédonculées ni gradient de H⁺"], rep: 0,
              ouvert: "En exploitant les résultats des expériences 1, 2 et 3, déduire les conditions nécessaires à la synthèse d’ATP.", corrige: "Exp. 1/2 : sans gradient de H⁺, pas d’ATP. Exp. 1/3 : sans sphères, pas d’ATP. Il faut les deux.",
              retour: "1 contre 2 : le gradient est nécessaire. 1 contre 3 : les sphères sont nécessaires." },
            { id: "S1-P3-B2", cap: "R3", concept: "c5", diff: 3, duree: 4, pts: 1, type: "qcm", enonce: "Un élève affirme : « Le dioxygène sert directement à fabriquer l’ATP. » La critique correcte est :", options: ["Inexact : O₂ est l’accepteur final des électrons ; l’ATP est formé par les sphères pédonculées grâce au gradient de H⁺", "Exact : O₂ se fixe sur l’ADP pour former l’ATP", "Exact : O₂ traverse les sphères pédonculées", "Inexact : O₂ n’intervient à aucun moment dans la respiration"], rep: 0,
              ouvert: "Un élève affirme : « Le dioxygène sert directement à fabriquer l’ATP. » Critiquer cette affirmation.", corrige: "Affirmation inexacte : O₂ accepte les électrons en fin de chaîne (→ H₂O). L’ATP est synthétisé par l’ATP synthase grâce au retour des H⁺. Le rôle de O₂ est indirect.",
              retour: "Le rôle de O₂ est indirect : en acceptant les électrons, il permet l’entretien du gradient de H⁺." },
            { id: "S1-P3-B3", cap: "R1", concept: "c5", diff: 3, duree: 5, pts: 1, type: "ordre", enonce: "Remettre dans l’ordre les étapes qui expliquent la synthèse d’ATP au niveau de la membrane interne.",
              items: ["Réoxydation du NADH,H⁺ : ses électrons sont cédés à la chaîne respiratoire", "Transfert des électrons de transporteur en transporteur jusqu’à O₂", "Expulsion de H⁺ de la matrice vers l’espace intermembranaire", "Établissement d’un gradient de H⁺ de part et d’autre de la membrane interne", "Retour des H⁺ vers la matrice à travers les sphères pédonculées", "Phosphorylation de l’ADP en ATP"],
              ouvert: "Expliquer comment la réoxydation du NADH,H⁺ aboutit à la synthèse d’ATP.", retour: "Oxydation → transfert d’électrons → pompage de H⁺ → gradient → retour par l’ATP synthase → ATP." },
            { id: "S1-P3-B4", cap: "R5", concept: "c6", diff: 2, duree: 4, pts: 1, type: "num", enonce: "Dans la matrice, la dégradation des 2 pyruvates issus d’un glucose fournit 8 NADH,H⁺, 2 FADH₂ et 2 ATP. Calculer le nombre total d’ATP correspondant, après réoxydation des transporteurs.", rep: 30, tol: 0, unite: "ATP", retour: "8 × 3 + 2 × 2 + 2 = 30 ATP." },
            { id: "S1-P3-B5", cap: "R4", concept: "c6", diff: 3, duree: 5, pts: 1, type: "qcm", enonce: "Quelle synthèse répond le mieux au problème : « Comment la cellule libère-t-elle, en présence de O₂, l’énergie du glucose ? »", options: [
              "Le glucose est oxydé en pyruvate dans le hyaloplasme ; le pyruvate est dégradé en CO₂ dans la matrice ; les transporteurs réduits sont réoxydés par la chaîne respiratoire, dont l’accepteur final est O₂, ce qui permet la synthèse de 38 ATP",
              "Le glucose entre dans la mitochondrie où il réagit directement avec O₂ pour donner 38 ATP",
              "Le glucose est transformé en éthanol et en CO₂ dans la matrice, avec production de 2 ATP",
              "Le pyruvate est réduit dans le hyaloplasme par O₂, ce qui produit de l’ATP et de l’eau"], rep: 0,
              ouvert: "À partir des données de l’exercice et de vos connaissances, rédiger une synthèse expliquant comment la cellule libère l’énergie du glucose en présence de O₂.", corrige: "Glycolyse (hyaloplasme) → oxydations dans la matrice (CO₂, NADH,H⁺, FADH₂) → chaîne respiratoire, O₂ accepteur final, gradient de H⁺, ATP synthase → 38 ATP.",
              retour: "Une synthèse reprend les trois étapes, leur localisation et le rôle de O₂." }
          ]
        }]
      }
    }
  };
})();
