// Séquence 3 — Bilans et rendements énergétiques comparés (cadre de référence SPC, sous-domaine 1.1).
(function () {
  const tMilieux = {
    type: "table", titre: "Résultats de deux cultures de levures dans un même milieu glucosé, après 24 h",
    cols: ["", "Milieu aéré", "Milieu privé de O₂"],
    rows: [["Glucose consommé (g)", "4,5", "13,5"], ["Masse de levures formée (g)", "1,9", "0,25"], ["Éthanol produit (g)", "0", "6,2"], ["ATP produits par molécule de glucose", "38", "2"]]
  };
  const gCroissance = {
    type: "graph", titre: "Croissance d’une population de levures en milieu aéré et en milieu privé de O₂",
    xlab: "Temps (h)", ylab: "Levures (millions de cellules/mL)", xmax: 10, ymax: 35,
    series: [
      { nom: "Milieu aéré", pts: [[0, 1], [2, 2], [4, 6], [6, 14], [8, 24], [10, 30]] },
      { nom: "Milieu privé de O₂", pts: [[0, 1], [2, 1.3], [4, 2], [6, 3], [8, 3.8], [10, 4.2]] }
    ]
  };
  const txEnergie = {
    type: "texte", titre: "Données énergétiques",
    texte: "L’oxydation complète d’une mole de glucose libère 2860 kJ. L’hydrolyse d’une mole d’ATP libère 30,5 kJ. L’oxydation complète d’une mole d’éthanol libère 1360 kJ : l’éthanol est donc une molécule encore riche en énergie. L’énergie du glucose qui n’est pas conservée dans l’ATP ou dans un résidu organique est dissipée sous forme de chaleur."
  };

  SVT.sequences.S3 = {
    id: "S3", ordre: 3,
    titre: "Séquence 3 — Bilans et rendements énergétiques : respiration et fermentation comparées",
    concepts: ["c6", "c8"],
    probleme: "Laquelle des deux voies, respiration ou fermentation, exploite le mieux l’énergie du glucose ?",
    modele: "glucose",
    cours: [
      { titre: "1. Tableau comparatif", html: `
        <table class="t"><tr><th></th><th>Respiration</th><th>Fermentation</th></tr>
        <tr><td>Dioxygène</td><td>Nécessaire</td><td>Non utilisé</td></tr>
        <tr><td>Localisation</td><td>Hyaloplasme puis mitochondrie</td><td>Hyaloplasme uniquement</td></tr>
        <tr><td>Dégradation du glucose</td><td>Complète</td><td>Incomplète</td></tr>
        <tr><td>Produits finaux</td><td>CO₂ et H₂O (minéraux)</td><td>Éthanol + CO₂, ou acide lactique (résidu organique)</td></tr>
        <tr><td>ATP par glucose</td><td>38</td><td>2</td></tr>
        <tr><td>Rendement énergétique</td><td>≈ 40 %</td><td>≈ 2 %</td></tr></table>
        <p>La glycolyse est l’étape <b>commune</b> aux deux voies ; c’est le devenir du pyruvate qui les distingue.</p>` },
      { titre: "2. Le rendement énergétique", html: `
        <p class="def"><b>Rendement énergétique :</b> part de l’énergie du glucose conservée sous forme d’ATP.</p>
        <p class="eq">Rendement (%) = (nombre d’ATP × 30,5 kJ ÷ 2860 kJ) × 100</p>
        <p><b>Respiration :</b> (38 × 30,5 ÷ 2860) × 100 = 1159 ÷ 2860 × 100 ≈ <b>40,5 %</b>. Le reste (≈ 59,5 %) est dissipé en chaleur.</p>
        <p><b>Fermentation :</b> (2 × 30,5 ÷ 2860) × 100 = 61 ÷ 2860 × 100 ≈ <b>2,1 %</b>. La plus grande partie de l’énergie reste dans le résidu organique (éthanol ou acide lactique).</p>` },
      { titre: "3. Conséquences pour la cellule", html: `
        <p>Pour produire la même quantité d’ATP, une cellule qui fermente doit consommer <b>19 fois plus de glucose</b> (38 ÷ 2) qu’une cellule qui respire. C’est pourquoi des levures privées de O₂ consomment beaucoup de glucose et se multiplient peu, alors qu’en milieu aéré elles consomment moins de glucose et se multiplient activement.</p>
        <p>La fermentation reste utile : elle permet de produire de l’ATP <b>sans O₂</b>, donc de survivre en milieu anaérobie ou de répondre à un besoin intense et bref.</p>` },
      { titre: "4. Schéma bilan", html: `
        <p class="eq">Glucose → (glycolyse, hyaloplasme : 2 ATP) → 2 pyruvates</p>
        <p class="eq">Avec O₂ : pyruvate → mitochondrie → CO₂ + H₂O &nbsp;(+ 36 ATP) &nbsp;⇒&nbsp; 38 ATP</p>
        <p class="eq">Sans O₂ : pyruvate → hyaloplasme → éthanol + CO₂ ou acide lactique &nbsp;⇒&nbsp; 2 ATP</p>
        <p>L’ATP produit est l’<b>intermédiaire énergétique</b> : son hydrolyse (ATP → ADP + Pi) fournit l’énergie des activités cellulaires.</p>` }
    ],
    resolu: {
      titre: "Exercice résolu — Calculer et comparer des rendements énergétiques",
      contexte: "On veut comparer l’efficacité de la respiration et de la fermentation alcoolique chez la levure.",
      docs: [txEnergie],
      etapes: [
        { q: "Calculer le rendement énergétique de la respiration.", methode: "Formule littérale d’abord, puis application numérique avec les unités.",
          r: "Rendement = (énergie conservée dans l’ATP ÷ énergie du glucose) × 100 = (38 × 30,5 ÷ 2860) × 100 = (1159 ÷ 2860) × 100 ≈ 40,5 %." },
        { q: "Calculer le rendement énergétique de la fermentation alcoolique.", methode: "Même formule ; seul le nombre d’ATP change.",
          r: "Rendement = (2 × 30,5 ÷ 2860) × 100 = (61 ÷ 2860) × 100 ≈ 2,1 %." },
        { q: "Expliquer la différence entre les deux rendements.", methode: "Relier le résultat du calcul au devenir du glucose dans chaque voie.",
          r: "La respiration dégrade complètement le glucose en CO₂ et H₂O : toute son énergie est libérée, dont 40,5 % sont conservés dans l’ATP. La fermentation est une dégradation incomplète : les 2 moles d’éthanol formées contiennent encore 2 × 1360 = 2720 kJ. Très peu d’énergie est donc libérée, d’où un rendement de 2,1 % seulement." }
      ]
    },
    quiz: [
      { id: "S3-K1", cap: "K", concept: "c8", diff: 2, duree: 2, pts: 1, type: "num", enonce: "Calculer le rendement énergétique de la respiration (38 ATP par glucose ; 30,5 kJ par mole d’ATP ; 2860 kJ par mole de glucose). Arrondir au dixième.", rep: 40.5, tol: 0.6, unite: "%", retour: "(38 × 30,5 ÷ 2860) × 100 ≈ 40,5 %." },
      { id: "S3-K2", cap: "K", concept: "c8", diff: 1, duree: 1, pts: 0.5, type: "qcm", enonce: "Le rendement énergétique de la fermentation est d’environ :", options: ["2 %", "40 %", "60 %", "100 %"], rep: 0, retour: "(2 × 30,5 ÷ 2860) × 100 ≈ 2,1 %." },
      { id: "S3-K3", cap: "K", concept: "c8", diff: 2, duree: 2, pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
        { t: "La glycolyse est commune à la respiration et à la fermentation.", v: true },
        { t: "La fermentation dégrade complètement le glucose.", v: false },
        { t: "Dans la respiration, une partie de l’énergie du glucose est dissipée en chaleur.", v: true },
        { t: "Pour produire autant d’ATP, la fermentation consomme moins de glucose que la respiration.", v: false }
      ], retour: "La fermentation, incomplète, exige 19 fois plus de glucose pour la même quantité d’ATP." },
      { id: "S3-K4", cap: "K", concept: "c8", diff: 1, duree: 2, pts: 1, type: "assoc", enonce: "Attribuer chaque caractéristique à la voie métabolique qui convient.",
        gauche: ["38 ATP par glucose", "2 ATP par glucose", "Résidu organique riche en énergie", "Produits finaux uniquement minéraux"],
        droite: ["Respiration", "Fermentation"], rep: [0, 1, 1, 0],
        retour: "Respiration : 38 ATP, CO₂ et H₂O. Fermentation : 2 ATP, résidu organique." },
      { id: "S3-K5", cap: "K", concept: "c6", diff: 1, duree: 2, pts: 1, type: "trous", enonce: "Compléter la définition.",
        texte: "Le rendement énergétique est le rapport entre l’énergie conservée sous forme {0} et l’énergie totale contenue dans {1}, multiplié par {2}.",
        choix: [["d’ATP", "de chaleur", "de CO₂"], ["le glucose", "l’éthanol", "le dioxygène"], ["100", "38", "30,5"]], rep: [0, 0, 0],
        ouvert: "Définir : rendement énergétique.", corrige: "Pourcentage de l’énergie du glucose conservée sous forme d’ATP : (énergie de l’ATP ÷ énergie du glucose) × 100.",
        retour: "Rendement = (énergie de l’ATP ÷ énergie du glucose) × 100." }
    ],
    paliers: {
      1: {
        entrainement: [{
          id: "S3-P1-A", titre: "Deux cultures de levures",
          contexte: "On cultive la même quantité de levures dans deux flacons contenant le même milieu glucosé : l’un est aéré en permanence, l’autre est privé de O₂.",
          docs: [tMilieux],
          questions: [
            { id: "S3-P1-A1", cap: "I4", concept: "c8", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Relever la masse de glucose consommée en milieu privé de O₂.", rep: 13.5, tol: 0, unite: "g", retour: "Ligne « glucose consommé », colonne « milieu privé de O₂ » : 13,5 g." },
            { id: "S3-P1-A2", cap: "I4", concept: "c8", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "La masse de levures formée est :", options: ["plus grande en milieu aéré (1,9 g contre 0,25 g)", "plus grande en milieu privé de O₂", "identique dans les deux milieux", "nulle en milieu aéré"], rep: 0, retour: "1,9 g en milieu aéré contre 0,25 g sans O₂." },
            { id: "S3-P1-A3", cap: "I4", concept: "c8", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "De l’éthanol est produit :", options: ["uniquement en milieu privé de O₂", "uniquement en milieu aéré", "dans les deux milieux", "dans aucun des deux milieux"], rep: 0, retour: "0 g en milieu aéré, 6,2 g en milieu privé de O₂." }
          ]
        }],
        evaluation: [{
          id: "S3-P1-B", titre: "Croissance des levures et énergie",
          contexte: "On suit la croissance de levures dans deux milieux et l’on dispose de données énergétiques.",
          docs: [gCroissance, tMilieux, txEnergie],
          questions: [
            { id: "S3-P1-B1", cap: "I1", concept: "c8", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Lire le nombre de levures en milieu aéré à t = 8 h.", rep: 24, tol: 1.5, unite: "millions/mL", retour: "À l’abscisse 8 h, la courbe « milieu aéré » passe par 24 millions/mL." },
            { id: "S3-P1-B2", cap: "I1", concept: "c8", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "À t = 10 h, la population en milieu aéré est environ :", options: ["7 fois plus importante qu’en milieu privé de O₂", "égale à celle du milieu privé de O₂", "2 fois plus faible qu’en milieu privé de O₂", "30 fois plus importante qu’en milieu privé de O₂"], rep: 0, retour: "30 ÷ 4,2 ≈ 7." },
            { id: "S3-P1-B3", cap: "I1", concept: "c8", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "En milieu privé de O₂, la population de levures :", options: ["augmente lentement, de 1 à 4,2 millions/mL en 10 h", "reste strictement constante", "diminue jusqu’à 0", "augmente plus vite qu’en milieu aéré"], rep: 0, retour: "La courbe « privé de O₂ » monte faiblement : 1 → 4,2 millions/mL." },
            { id: "S3-P1-B4", cap: "I2", concept: "c8", diff: 1, duree: 3, pts: 1, type: "num", enonce: "D’après le texte, quelle énergie libère l’oxydation complète d’une mole d’éthanol ?", rep: 1360, tol: 0, unite: "kJ", retour: "Le texte indique 1360 kJ par mole d’éthanol." },
            { id: "S3-P1-B5", cap: "I4", concept: "c8", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "D’après le tableau, la consommation de glucose en milieu privé de O₂ est :", options: ["3 fois plus élevée qu’en milieu aéré", "3 fois plus faible qu’en milieu aéré", "égale à celle du milieu aéré", "19 fois plus faible qu’en milieu aéré"], rep: 0, retour: "13,5 ÷ 4,5 = 3." }
          ]
        }]
      },
      2: {
        entrainement: [{
          id: "S3-P2-A", titre: "Comparer deux cultures de levures",
          contexte: "On reprend les résultats des deux cultures de levures, en milieu aéré et en milieu privé de O₂.",
          docs: [tMilieux],
          questions: [
            { id: "S3-P2-A1", cap: "C1", concept: "c8", diff: 1, duree: 4, pts: 1, type: "trous", enonce: "Compléter la comparaison.",
              texte: "En milieu aéré, les levures consomment {0} g de glucose et forment 1,9 g de levures, alors qu’en milieu privé de O₂ elles en consomment {1} g pour ne former que {2} g de levures.",
              choix: [["4,5", "13,5"], ["13,5", "4,5"], ["0,25", "1,9", "6,2"]], rep: [0, 0, 0],
              retour: "Comparer = mettre en regard les valeurs des deux situations avec « alors que »." },
            { id: "S3-P2-A2", cap: "C2", concept: "c8", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "Pour comparer le nombre d’ATP produits par glucose dans les deux voies (38 et 2), la représentation la mieux adaptée est :", options: ["un diagramme en bâtons, car on compare deux catégories", "une courbe en fonction du temps", "un schéma de la mitochondrie", "un tableau à une seule case"], rep: 0, retour: "Deux catégories (respiration / fermentation) : diagramme en bâtons." },
            { id: "S3-P2-A3", cap: "C3", concept: "c8", diff: 2, duree: 4, pts: 1, type: "trous", enonce: "Compléter le schéma bilan du devenir du pyruvate.",
              texte: "En présence de O₂, le pyruvate entre dans {0} où il est dégradé en CO₂ et H₂O. En l’absence de O₂, il reste dans {1} où il est transformé en {2}.",
              choix: [["la mitochondrie", "le noyau", "le hyaloplasme"], ["le hyaloplasme", "la mitochondrie", "la matrice"], ["éthanol ou acide lactique", "glucose", "CO₂ et H₂O"]], rep: [0, 0, 0],
              retour: "Avec O₂ : mitochondrie. Sans O₂ : hyaloplasme, résidu organique." }
          ]
        }],
        evaluation: [{
          id: "S3-P2-B", titre: "Présenter une comparaison respiration / fermentation",
          contexte: "Pour un exposé, des élèves doivent présenter clairement la comparaison entre respiration et fermentation.",
          docs: [gCroissance, txEnergie],
          questions: [
            { id: "S3-P2-B1", cap: "C4", concept: "c8", diff: 2, duree: 5, pts: 1, type: "assoc", enonce: "Pour construire un tableau comparatif, placer chaque caractéristique dans la colonne qui convient.",
              gauche: ["Dégradation complète du glucose", "Résidu organique encore riche en énergie", "Se déroule uniquement dans le hyaloplasme", "Nécessite du dioxygène", "Commence par la glycolyse"],
              droite: ["Respiration", "Fermentation", "Les deux voies"], rep: [0, 1, 1, 0, 2],
              ouvert: "Construire un tableau comparant la respiration et la fermentation selon : le besoin en O₂, la localisation, le type de dégradation, les produits finaux et le bilan en ATP.", corrige: "Respiration : O₂ nécessaire ; hyaloplasme + mitochondrie ; complète ; CO₂ + H₂O ; 38 ATP. Fermentation : sans O₂ ; hyaloplasme ; incomplète ; résidu organique ; 2 ATP.",
              retour: "La glycolyse appartient aux deux colonnes : c’est l’étape commune." },
            { id: "S3-P2-B2", cap: "C2", concept: "c8", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Pour représenter les rendements énergétiques des deux voies (40,5 % et 2,1 %), on construit :", options: ["un diagramme en bâtons avec le rendement (%) en ordonnée", "une courbe avec le temps en abscisse", "un diagramme en bâtons avec le temps en ordonnée", "une courbe reliant les deux valeurs"], rep: 0, retour: "Deux catégories à comparer : deux bâtons, rendement en ordonnée." },
            { id: "S3-P2-B3", cap: "C1", concept: "c8", diff: 2, duree: 4, pts: 1, type: "trous", enonce: "Compléter la comparaison tirée du graphique.",
              texte: "À 10 h, la population atteint {0} millions/mL en milieu aéré contre {1} millions/mL en milieu privé de O₂, soit environ {2} fois plus.",
              choix: [["30", "24", "4,2"], ["4,2", "30", "1"], ["7", "2", "19"]], rep: [0, 0, 0],
              ouvert: "Comparer la croissance des levures dans les deux milieux.", corrige: "À 10 h : 30 millions/mL en milieu aéré contre 4,2 en milieu privé de O₂, soit environ 7 fois plus.",
              retour: "30 ÷ 4,2 ≈ 7." },
            { id: "S3-P2-B4", cap: "C3", concept: "c6", diff: 2, duree: 4, pts: 1, type: "trous", enonce: "Compléter le schéma bilan énergétique de la respiration d’une mole de glucose.",
              texte: "Énergie du glucose : 2860 kJ → énergie conservée dans 38 ATP : {0} kJ + énergie dissipée sous forme de {1} : {2} kJ.",
              choix: [["1159", "61", "2860"], ["chaleur", "lumière", "éthanol"], ["1701", "2799", "1159"]], rep: [0, 0, 0],
              retour: "38 × 30,5 = 1159 kJ ; 2860 − 1159 = 1701 kJ dissipés en chaleur." },
            { id: "S3-P2-B5", cap: "C1", concept: "c8", diff: 3, duree: 4, pts: 1, type: "qcm", enonce: "Quelle phrase de conclusion est correctement rédigée ?", options: [
              "La respiration a un rendement d’environ 40 % contre environ 2 % pour la fermentation : elle exploite donc beaucoup mieux l’énergie du glucose",
              "La respiration c’est mieux",
              "La fermentation a un rendement de 40 % et la respiration de 2 %",
              "Le rendement de la respiration est de 38 ATP et celui de la fermentation de 2 kJ"], rep: 0,
              retour: "Une conclusion cite les valeurs avec leurs unités et répond à la question de comparaison." }
          ]
        }]
      },
      3: {
        entrainement: [{
          id: "S3-P3-A", titre: "Calculer et interpréter des rendements",
          contexte: "On dispose des données énergétiques ci-dessous et des résultats de deux cultures de levures.",
          docs: [txEnergie, tMilieux],
          questions: [
            { id: "S3-P3-A1", cap: "R5", concept: "c8", diff: 2, duree: 4, pts: 1, type: "num", enonce: "Calculer le rendement énergétique de la respiration (38 ATP par glucose). Arrondir au dixième.", rep: 40.5, tol: 0.6, unite: "%", retour: "(38 × 30,5 ÷ 2860) × 100 = 40,5 %." },
            { id: "S3-P3-A2", cap: "R5", concept: "c8", diff: 2, duree: 4, pts: 1, type: "num", enonce: "Calculer le rendement énergétique de la fermentation (2 ATP par glucose). Arrondir au dixième.", rep: 2.1, tol: 0.15, unite: "%", retour: "(2 × 30,5 ÷ 2860) × 100 = 2,1 %." },
            { id: "S3-P3-A3", cap: "R2", concept: "c8", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "En milieu privé de O₂, les levures consomment 3 fois plus de glucose. La cause en est :", options: ["la fermentation ne fournit que 2 ATP par glucose : il faut dégrader plus de glucose pour couvrir les besoins en ATP", "le glucose est plus abondant dans ce milieu", "les levures y sont plus nombreuses", "la respiration y est plus rapide"], rep: 0, retour: "Faible bilan en ATP → forte consommation de glucose." }
          ]
        }],
        evaluation: [{
          id: "S3-P3-B", titre: "Respiration ou fermentation : quelle voie est la plus efficace ?",
          contexte: "On cherche à expliquer pourquoi des levures se multiplient beaucoup moins en l’absence de O₂, alors qu’elles consomment davantage de glucose.",
          docs: [tMilieux, gCroissance, txEnergie],
          questions: [
            { id: "S3-P3-B1", cap: "R5", concept: "c8", diff: 2, duree: 4, pts: 1, type: "num", enonce: "Combien de molécules de glucose une cellule doit-elle fermenter pour produire autant d’ATP que la respiration d’une seule molécule de glucose ?", rep: 19, tol: 0, unite: "molécules", retour: "38 ÷ 2 = 19." },
            { id: "S3-P3-B2", cap: "R1", concept: "c8", diff: 2, duree: 5, pts: 1, type: "qcm", enonce: "La faible multiplication des levures en milieu privé de O₂ s’explique par :", options: ["la faible quantité d’ATP fournie par la fermentation, qui limite les synthèses nécessaires à la multiplication cellulaire", "l’absence de glucose dans ce milieu", "la toxicité du O₂ pour les levures", "l’impossibilité de réaliser la glycolyse sans O₂"], rep: 0,
              ouvert: "Expliquer pourquoi les levures se multiplient peu en milieu privé de O₂ alors qu’elles consomment davantage de glucose.", corrige: "Sans O₂, les levures fermentent : 2 ATP par glucose au lieu de 38. Malgré une consommation de glucose 3 fois plus forte, l’ATP disponible pour les synthèses et la multiplication est bien moindre.",
              retour: "La multiplication cellulaire exige de l’ATP ; la fermentation en fournit 19 fois moins par glucose." },
            { id: "S3-P3-B3", cap: "R3", concept: "c8", diff: 3, duree: 4, pts: 1, type: "qcm", enonce: "Un élève affirme : « La fermentation est inutile puisque son rendement est très faible. » La critique correcte est :", options: [
              "Affirmation à nuancer : malgré son faible rendement, la fermentation permet de produire de l’ATP et de survivre en l’absence de O₂",
              "Affirmation exacte : aucune cellule n’utilise la fermentation",
              "Affirmation fausse : le rendement de la fermentation est supérieur à celui de la respiration",
              "Affirmation exacte : la fermentation ne produit pas d’ATP"], rep: 0,
              ouvert: "Un élève affirme : « La fermentation est inutile puisque son rendement est très faible. » Critiquer cette affirmation.", corrige: "Le rendement est bien faible (≈ 2 %), mais la fermentation fournit de l’ATP sans O₂ : elle permet la survie en anaérobiose (les levures privées de O₂ se multiplient encore, de 1 à 4,2 millions/mL).",
              retour: "Le graphique le montre : sans O₂, la population augmente encore, grâce à l’ATP de la fermentation." },
            { id: "S3-P3-B4", cap: "R2", concept: "c8", diff: 2, duree: 5, pts: 1, type: "assoc", enonce: "Associer à chaque cause sa conséquence.",
              gauche: ["Dégradation complète du glucose", "Résidu organique (éthanol) riche en énergie", "Faible bilan en ATP de la fermentation", "Énergie du glucose non conservée dans l’ATP ni dans un résidu"],
              droite: ["Dégagement de chaleur", "Rendement d’environ 40 %", "Forte consommation de glucose", "Rendement d’environ 2 %"], rep: [1, 3, 2, 0],
              retour: "Complète → 40 % ; résidu riche en énergie → 2 % ; peu d’ATP → beaucoup de glucose consommé ; énergie restante → chaleur." },
            { id: "S3-P3-B5", cap: "R4", concept: "c8", diff: 3, duree: 5, pts: 1, type: "qcm", enonce: "Quelle synthèse répond le mieux au problème : « Laquelle des deux voies exploite le mieux l’énergie du glucose ? »", options: [
              "La respiration : la dégradation complète du glucose fournit 38 ATP (rendement ≈ 40 %), contre 2 ATP (≈ 2 %) pour la fermentation, dégradation incomplète dont le résidu organique conserve l’essentiel de l’énergie",
              "La fermentation : elle consomme plus de glucose, donc elle produit plus d’ATP par glucose",
              "Les deux voies sont équivalentes puisqu’elles commencent par la glycolyse",
              "La respiration : elle conserve 100 % de l’énergie du glucose sous forme d’ATP"], rep: 0,
              ouvert: "En exploitant l’ensemble des documents et vos connaissances, rédiger une synthèse répondant au problème : laquelle des deux voies exploite le mieux l’énergie du glucose ?", corrige: "Respiration : dégradation complète, 38 ATP, rendement ≈ 40,5 %, croissance forte. Fermentation : incomplète, 2 ATP, ≈ 2,1 %, énergie restant dans l’éthanol (2720 kJ), consommation de glucose élevée et croissance faible.",
              retour: "La synthèse relie type de dégradation, bilan en ATP, rendement et conséquences sur la croissance." }
          ]
        }]
      }
    }
  };
})();
