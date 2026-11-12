// Séquence 2 — Les fermentations (cadre de référence SPC, sous-domaine 1.1).
(function () {
  const gEthanol = {
    type: "graph", titre: "Concentrations en glucose et en éthanol d’une culture de levures en milieu privé de O₂",
    xlab: "Temps (h)", ylab: "Concentration (g/L)", xmax: 10, ymax: 20,
    series: [
      { nom: "Glucose", pts: [[0, 20], [2, 16], [4, 11], [6, 6], [8, 2], [10, 0.5]] },
      { nom: "Éthanol", pts: [[0, 0], [2, 1.9], [4, 4.3], [6, 6.8], [8, 8.7], [10, 9.4]] }
    ]
  };
  const tLait = {
    type: "table", titre: "Évolution d’un lait ensemencé avec des bactéries lactiques, en récipient fermé",
    cols: ["Temps (h)", "0", "2", "4", "6", "8"],
    rows: [["Lactose (g/L)", "48", "44", "36", "27", "20"], ["Acide lactique (g/L)", "1,5", "3", "7", "11", "14"], ["pH", "6,6", "6,3", "5,6", "4,9", "4,5"]]
  };
  const txPasteur = {
    type: "texte", titre: "D’après les travaux de Louis Pasteur sur la levure de bière",
    texte: "Pasteur cultive des levures dans un jus sucré. À l’abri de l’air, les levures transforment le sucre en alcool et en gaz carbonique ; elles se multiplient très peu, mais consomment une grande quantité de sucre. Au contact de l’air, les mêmes levures ne produisent presque plus d’alcool ; elles se multiplient activement tout en consommant beaucoup moins de sucre pour une même masse de levures formée. Pasteur qualifie la fermentation de « vie sans air »."
  };
  const tMarquage = {
    type: "table", titre: "Recherche de la radioactivité dans une culture de levures privée de O₂, après ajout de glucose marqué au carbone 14",
    cols: ["Temps après l’ajout", "Molécules radioactives détectées"],
    rows: [["Quelques secondes", "Glucose"], ["Quelques minutes", "Glucose, pyruvate"], ["Une heure", "Éthanol, CO₂ (plus de glucose radioactif)"]]
  };

  SVT.sequences.S2 = {
    id: "S2", ordre: 2,
    titre: "Séquence 2 — Les fermentations : produire de l’ATP sans dioxygène",
    concepts: ["c1", "c7"],
    probleme: "Comment certaines cellules produisent-elles de l’ATP en l’absence de dioxygène ?",
    cours: [
      { titre: "1. Mise en évidence des fermentations", html: `
        <p>Des levures placées dans un milieu glucosé <b>privé de O₂</b> continuent à consommer le glucose : elles rejettent du CO₂ et le milieu s’enrichit en <b>éthanol</b>. Dans un lait fermé, des bactéries lactiques transforment le lactose en <b>acide lactique</b>, ce qui abaisse le pH. La cellule musculaire, lors d’un effort intense, produit aussi de l’acide lactique.</p>
        <p class="def"><b>Fermentation :</b> dégradation <b>incomplète</b> du glucose, en l’absence de O₂, qui donne un résidu organique encore riche en énergie et une <b>faible</b> quantité d’ATP.</p>` },
      { titre: "2. Les étapes essentielles", html: `
        <p>Toute la fermentation se déroule dans le <b>hyaloplasme</b>, en deux temps :</p>
        <ul><li><b>La glycolyse</b>, identique à celle de la respiration : 1 glucose → 2 pyruvates + 2 ATP + 2 NADH,H⁺.</li>
        <li><b>La réduction du pyruvate</b> par le NADH,H⁺. Cette étape ne produit pas d’ATP, mais elle <b>régénère le NAD⁺</b> indispensable à la poursuite de la glycolyse.</li></ul>
        <p><b>Fermentation lactique :</b> le pyruvate est réduit en acide lactique.</p>
        <p class="eq">CH₃–CO–COOH + NADH,H⁺ → CH₃–CHOH–COOH + NAD⁺</p>
        <p><b>Fermentation alcoolique :</b> le pyruvate est décarboxylé en éthanal (libération de CO₂), puis l’éthanal est réduit en éthanol.</p>
        <p class="eq">CH₃–CO–COOH → CH₃–CHO + CO₂ &nbsp;;&nbsp; CH₃–CHO + NADH,H⁺ → CH₃–CH₂OH + NAD⁺</p>` },
      { titre: "3. Bilans", html: `
        <p class="eq">Fermentation alcoolique : C₆H₁₂O₆ + 2 ADP + 2 Pi → 2 CH₃–CH₂OH + 2 CO₂ + 2 ATP</p>
        <p class="eq">Fermentation lactique : C₆H₁₂O₆ + 2 ADP + 2 Pi → 2 CH₃–CHOH–COOH + 2 ATP</p>
        <p>Dans les deux cas, le bilan est de <b>2 ATP par molécule de glucose</b>, tous produits par la glycolyse. La mitochondrie n’intervient pas.</p>` }
    ],
    resolu: {
      titre: "Exercice résolu — Exploiter un tableau : la fermentation lactique du lait",
      contexte: "Un lait est ensemencé avec des bactéries lactiques et placé en récipient fermé. On suit pendant 8 heures sa teneur en lactose, en acide lactique et son pH.",
      docs: [tLait],
      etapes: [
        { q: "Décrire l’évolution des trois grandeurs mesurées.", methode: "Pour chaque ligne du tableau : sens de variation + valeurs de début et de fin.",
          r: "Entre 0 et 8 h, la teneur en lactose diminue de 48 à 20 g/L ; la teneur en acide lactique augmente de 1,5 à 14 g/L ; le pH diminue de 6,6 à 4,5." },
        { q: "Établir la relation entre ces trois évolutions.", methode: "Relier cause et conséquence : « on constate… ; or… ; donc… ».",
          r: "La disparition du lactose s’accompagne de l’apparition d’acide lactique : les bactéries transforment le lactose en acide lactique. Or l’acide lactique est un acide : son accumulation entraîne la baisse du pH." },
        { q: "Identifier le phénomène réalisé par les bactéries et justifier.", methode: "Mobiliser la définition du cours et vérifier chacun de ses critères avec les données.",
          r: "Le récipient est fermé (absence de O₂ renouvelé) et le produit formé est une molécule organique, l’acide lactique : la dégradation est incomplète. Il s’agit d’une fermentation lactique." }
      ]
    },
    quiz: [
      { id: "S2-K1", cap: "K", concept: "c7", diff: 1, duree: 1, pts: 0.5, type: "qcm", enonce: "Les produits de la fermentation alcoolique du glucose sont :", options: ["l’éthanol et le CO₂", "l’acide lactique seul", "le CO₂ et l’eau", "le pyruvate et le O₂"], rep: 0, retour: "Glucose → 2 éthanol + 2 CO₂ + 2 ATP." },
      { id: "S2-K2", cap: "K", concept: "c7", diff: 1, duree: 1, pts: 0.5, type: "qcm", enonce: "Les réactions de la fermentation se déroulent :", options: ["entièrement dans le hyaloplasme", "dans la matrice mitochondriale", "au niveau de la membrane interne mitochondriale", "dans le noyau"], rep: 0, retour: "Glycolyse et réduction du pyruvate ont lieu dans le hyaloplasme ; la mitochondrie n’intervient pas." },
      { id: "S2-K3", cap: "K", concept: "c7", diff: 2, duree: 2, pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
        { t: "La fermentation est une dégradation incomplète du glucose.", v: true },
        { t: "La fermentation lactique libère du CO₂.", v: false },
        { t: "La réduction du pyruvate régénère le NAD⁺ nécessaire à la glycolyse.", v: true },
        { t: "La fermentation produit 38 ATP par molécule de glucose.", v: false }
      ], retour: "Seule la fermentation alcoolique libère du CO₂ ; le bilan est de 2 ATP dans les deux cas." },
      { id: "S2-K4", cap: "K", concept: "c7", diff: 1, duree: 1, pts: 0.5, type: "num", enonce: "Combien de molécules d’ATP produit la fermentation d’une molécule de glucose ?", rep: 2, tol: 0, unite: "ATP", retour: "Les 2 ATP proviennent de la glycolyse." },
      { id: "S2-K5", cap: "K", concept: "c1", diff: 1, duree: 2, pts: 1, type: "assoc", enonce: "Relier chaque voie métabolique à ses produits finaux.",
        gauche: ["Fermentation alcoolique", "Fermentation lactique", "Respiration", "Glycolyse"],
        droite: ["CO₂ et H₂O", "Pyruvate", "Éthanol et CO₂", "Acide lactique"], rep: [2, 3, 0, 1],
        retour: "La glycolyse, commune aux trois voies, s’arrête au pyruvate." },
      { id: "S2-K6", cap: "K", concept: "c1", diff: 1, duree: 2, pts: 1, type: "trous", enonce: "Compléter la définition.",
        texte: "La fermentation est la dégradation {0} du glucose, en {1} de O₂, qui donne un résidu {2} encore riche en énergie et une {3} quantité d’ATP.",
        choix: [["incomplète", "complète"], ["l’absence", "présence"], ["organique", "minéral"], ["faible", "grande"]], rep: [0, 0, 0, 0],
        ouvert: "Définir : fermentation.", corrige: "Dégradation incomplète du glucose en l’absence de O₂, donnant un résidu organique riche en énergie et peu d’ATP.",
        retour: "Idées attendues : incomplète, sans O₂, résidu organique, peu d’ATP." }
    ],
    paliers: {
      1: {
        entrainement: [{
          id: "S2-P1-A", titre: "Des levures privées de dioxygène",
          contexte: "Des levures sont cultivées dans un milieu glucosé, dans un récipient fermé ne contenant pas de O₂. On dose régulièrement le glucose et l’éthanol du milieu.",
          docs: [gEthanol],
          questions: [
            { id: "S2-P1-A1", cap: "I1", concept: "c7", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Au cours des 10 heures :", options: ["la concentration en glucose diminue et celle en éthanol augmente", "les deux concentrations augmentent", "la concentration en glucose augmente et celle en éthanol diminue", "les deux concentrations restent constantes"], rep: 0, retour: "Glucose : 20 → 0,5 g/L ; éthanol : 0 → 9,4 g/L." },
            { id: "S2-P1-A2", cap: "I1", concept: "c7", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Lire la concentration en éthanol à t = 6 h.", rep: 6.8, tol: 0.4, unite: "g/L", retour: "À l’abscisse 6 h, la courbe de l’éthanol passe par 6,8 g/L." },
            { id: "S2-P1-A3", cap: "I1", concept: "c7", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "Entre 8 et 10 h, la production d’éthanol ralentit nettement. À ce moment :", options: ["le glucose est presque épuisé (2 puis 0,5 g/L)", "le glucose est à sa concentration maximale", "la concentration en glucose augmente", "il n’y a plus d’éthanol dans le milieu"], rep: 0, retour: "Les deux courbes se lisent ensemble : quand le glucose s’épuise, l’éthanol plafonne." }
          ]
        }],
        evaluation: [{
          id: "S2-P1-B", titre: "Deux exemples de fermentation",
          contexte: "On étudie la transformation d’un lait par des bactéries lactiques, ainsi qu’un texte historique sur les levures.",
          docs: [tLait, txPasteur],
          questions: [
            { id: "S2-P1-B1", cap: "I4", concept: "c7", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Relever la teneur du lait en acide lactique à t = 6 h.", rep: 11, tol: 0, unite: "g/L", retour: "Ligne « acide lactique », colonne « 6 » : 11 g/L." },
            { id: "S2-P1-B2", cap: "I4", concept: "c7", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "D’après le tableau, entre 0 et 8 h :", options: ["le lactose diminue pendant que l’acide lactique augmente", "le lactose et l’acide lactique augmentent", "le lactose augmente pendant que l’acide lactique diminue", "seul le pH varie"], rep: 0, retour: "Lactose : 48 → 20 g/L ; acide lactique : 1,5 → 14 g/L." },
            { id: "S2-P1-B3", cap: "I4", concept: "c7", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Le pH du lait :", options: ["diminue de 6,6 à 4,5", "augmente de 4,5 à 6,6", "reste égal à 6,6", "diminue de 48 à 20"], rep: 0, retour: "Ligne « pH » : 6,6 à 0 h, 4,5 à 8 h." },
            { id: "S2-P1-B4", cap: "I2", concept: "c1", diff: 2, duree: 4, pts: 1, type: "vf", enonce: "D’après le texte, répondre par vrai ou faux.", items: [
              { t: "À l’abri de l’air, les levures produisent de l’alcool et du gaz carbonique.", v: true },
              { t: "À l’abri de l’air, les levures se multiplient activement.", v: false },
              { t: "Au contact de l’air, les levures ne produisent presque plus d’alcool.", v: true }
            ], retour: "Sans air : alcool + CO₂, faible multiplication. Avec air : presque pas d’alcool, multiplication active." },
            { id: "S2-P1-B5", cap: "I2", concept: "c1", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "Selon le texte, pour une même masse de levures formée, la consommation de sucre est :", options: ["beaucoup plus forte à l’abri de l’air qu’au contact de l’air", "identique dans les deux cas", "plus forte au contact de l’air", "nulle à l’abri de l’air"], rep: 0, retour: "Le texte indique une grande consommation de sucre à l’abri de l’air et une consommation bien moindre au contact de l’air." }
          ]
        }]
      },
      2: {
        entrainement: [{
          id: "S2-P2-A", titre: "Décrire et représenter une fermentation alcoolique",
          contexte: "On reprend le suivi d’une culture de levures en milieu glucosé privé de O₂.",
          docs: [gEthanol],
          questions: [
            { id: "S2-P2-A1", cap: "C1", concept: "c7", diff: 1, duree: 4, pts: 1, type: "trous", enonce: "Compléter la description du graphique.",
              texte: "Entre 0 et 10 h, la concentration en glucose {0} de 20 à {1} g/L, tandis que la concentration en éthanol {2} de 0 à {3} g/L.",
              choix: [["diminue", "augmente"], ["0,5", "9,4", "6"], ["augmente", "diminue"], ["9,4", "0,5", "20"]], rep: [0, 0, 0, 0],
              retour: "Sens de variation + valeurs extrêmes, pour chacune des deux courbes." },
            { id: "S2-P2-A2", cap: "C2", concept: "c7", diff: 2, duree: 3, pts: 1, type: "qcm", enonce: "Pour tracer deux courbes sur un même graphique, il est indispensable :", options: ["d’ajouter une légende permettant de distinguer les deux courbes", "de supprimer les unités", "de tracer deux axes des abscisses différents", "de ne pas donner de titre"], rep: 0, retour: "Chaque courbe doit être identifiée (couleur ou type de trait + légende)." },
            { id: "S2-P2-A3", cap: "C4", concept: "c7", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "Pour regrouper les valeurs lues sur ce graphique dans un tableau, on choisit comme en-têtes de lignes :", options: ["Temps (h) ; Glucose (g/L) ; Éthanol (g/L)", "Levures ; Récipient ; O₂", "Glucose (h) ; Éthanol (h) ; Temps (g/L)", "Titre ; Légende ; Échelle"], rep: 0, retour: "Une ligne par grandeur, avec son unité dans l’en-tête." }
          ]
        }],
        evaluation: [{
          id: "S2-P2-B", titre: "Communiquer les résultats d’une fermentation lactique",
          contexte: "Un lait ensemencé avec des bactéries lactiques est suivi pendant 8 heures.",
          docs: [tLait],
          questions: [
            { id: "S2-P2-B1", cap: "C2", concept: "c7", diff: 1, duree: 3, pts: 1, type: "qcm", enonce: "Pour représenter l’évolution de l’acide lactique, on trace :", options: ["une courbe avec le temps en abscisse et la teneur en acide lactique en ordonnée", "une courbe avec l’acide lactique en abscisse et le temps en ordonnée", "un diagramme circulaire", "un schéma de la bactérie"], rep: 0, retour: "Évolution au cours du temps : courbe, temps en abscisse." },
            { id: "S2-P2-B2", cap: "C2", concept: "c7", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "On dispose de 7 cm sur l’axe vertical pour des valeurs allant de 0 à 14 g/L. L’échelle la mieux adaptée est :", options: ["1 cm pour 2 g/L", "1 cm pour 14 g/L", "1 cm pour 0,1 g/L", "1 cm pour 10 g/L"], rep: 0,
              ouvert: "Tracer la courbe de variation de la teneur en acide lactique en fonction du temps (échelle : 1 cm pour 1 h ; 1 cm pour 2 g/L).", corrige: "Axes légendés avec unités, échelle respectée, 5 points exacts reliés, titre.",
              retour: "14 ÷ 7 = 2 g/L par cm : l’axe est utilisé en entier." },
            { id: "S2-P2-B3", cap: "C1", concept: "c7", diff: 1, duree: 4, pts: 1, type: "trous", enonce: "Compléter la description du tableau.",
              texte: "Entre 0 et 8 h, le lactose {0} de 48 à {1} g/L, l’acide lactique {2} de 1,5 à 14 g/L et le pH {3}.",
              choix: [["diminue", "augmente"], ["20", "27", "14"], ["augmente", "diminue"], ["diminue", "augmente", "reste constant"]], rep: [0, 0, 0, 0],
              ouvert: "Décrire l’évolution de la teneur en lactose, en acide lactique et du pH du lait.", corrige: "Lactose : 48 → 20 g/L ; acide lactique : 1,5 → 14 g/L ; pH : 6,6 → 4,5.",
              retour: "Une phrase par grandeur, avec les valeurs de début et de fin." },
            { id: "S2-P2-B4", cap: "C3", concept: "c7", diff: 2, duree: 4, pts: 1, type: "trous", enonce: "Compléter le schéma fonctionnel de la fermentation alcoolique.",
              texte: "1 glucose → (glycolyse) → 2 {0} → 2 {1} + 2 {2} ; ATP produits : {3}.",
              choix: [["pyruvates", "acétyl-CoA", "acides lactiques"], ["éthanol", "acide lactique", "H₂O"], ["CO₂", "O₂", "NAD⁺"], ["2", "38", "4"]], rep: [0, 0, 0, 0],
              ouvert: "Réaliser un schéma fonctionnel résumant les étapes de la fermentation alcoolique et son bilan en ATP.", corrige: "Glucose → 2 pyruvates (2 ATP, 2 NADH,H⁺) → 2 éthanal + 2 CO₂ → 2 éthanol (NAD⁺ régénéré). Bilan : 2 ATP.",
              retour: "Glycolyse → 2 pyruvates → 2 éthanol + 2 CO₂ ; 2 ATP." },
            { id: "S2-P2-B5", cap: "C1", concept: "c7", diff: 3, duree: 4, pts: 1, type: "qcm", enonce: "Quelle phrase compare correctement les deux fermentations ?", options: [
              "Toutes deux se déroulent dans le hyaloplasme et produisent 2 ATP par glucose, mais seule la fermentation alcoolique libère du CO₂",
              "La fermentation lactique produit 38 ATP alors que la fermentation alcoolique en produit 2",
              "La fermentation alcoolique se déroule dans la mitochondrie, contrairement à la fermentation lactique",
              "Les deux fermentations consomment du O₂ mais ne donnent pas les mêmes produits"], rep: 0,
              ouvert: "Comparer la fermentation alcoolique et la fermentation lactique (localisation, produits, bilan en ATP).", corrige: "Points communs : hyaloplasme, sans O₂, 2 ATP. Différence : éthanol + CO₂ / acide lactique sans CO₂.",
              retour: "Comparer = points communs (lieu, bilan) puis différences (produits)." }
          ]
        }]
      },
      3: {
        entrainement: [{
          id: "S2-P3-A", titre: "Raisonner sur la fermentation lactique",
          contexte: "Un lait ensemencé avec des bactéries lactiques est suivi pendant 8 heures en récipient fermé.",
          docs: [tLait],
          questions: [
            { id: "S2-P3-A1", cap: "R2", concept: "c7", diff: 1, duree: 4, pts: 1, type: "qcm", enonce: "La baisse du pH du lait a pour cause :", options: ["l’accumulation de l’acide lactique produit par les bactéries à partir du lactose", "la consommation de O₂ par les bactéries", "l’augmentation de la teneur en lactose", "la production d’éthanol"], rep: 0, retour: "Cause : production d’acide lactique ; conséquence : acidification du milieu." },
            { id: "S2-P3-A2", cap: "R1", concept: "c7", diff: 3, duree: 4, pts: 1, type: "qcm", enonce: "La réduction du pyruvate ne produit pas d’ATP. Elle est pourtant indispensable car :", options: ["elle régénère le NAD⁺, sans lequel la glycolyse s’arrêterait", "elle consomme le O₂ du milieu", "elle fait entrer le pyruvate dans la mitochondrie", "elle transforme l’ADP en ATP"], rep: 0, retour: "La glycolyse a besoin de NAD⁺. Sans chaîne respiratoire, c’est la réduction du pyruvate qui réoxyde le NADH,H⁺." },
            { id: "S2-P3-A3", cap: "R5", concept: "c7", diff: 1, duree: 3, pts: 1, type: "num", enonce: "Calculer le nombre d’ATP produits par la fermentation de 5 molécules de glucose.", rep: 10, tol: 0, unite: "ATP", retour: "5 × 2 = 10 ATP." }
          ]
        }],
        evaluation: [{
          id: "S2-P3-B", titre: "D’où viennent l’éthanol et le CO₂ ?",
          contexte: "On formule l’hypothèse suivante : « Le CO₂ et l’éthanol rejetés par les levures privées de O₂ proviennent du glucose. » Pour l’éprouver, on fournit aux levures du glucose dont les atomes de carbone sont radioactifs (carbone 14).",
          docs: [tMarquage],
          questions: [
            { id: "S2-P3-B1", cap: "R3", concept: "c7", diff: 2, duree: 4, pts: 1, type: "qcm", enonce: "L’hypothèse est :", options: ["validée, car la radioactivité du glucose se retrouve dans l’éthanol et le CO₂", "réfutée, car le glucose radioactif disparaît", "réfutée, car le pyruvate est radioactif", "impossible à tester avec cette expérience"], rep: 0,
              ouvert: "L’hypothèse formulée est-elle validée ? Justifier à partir des résultats.", corrige: "Validée : après une heure, la radioactivité apportée par le glucose se retrouve dans l’éthanol et le CO₂ ; leurs carbones proviennent donc du glucose.",
              retour: "On suit les carbones marqués : glucose → pyruvate → éthanol + CO₂." },
            { id: "S2-P3-B2", cap: "R2", concept: "c7", diff: 2, duree: 5, pts: 1, type: "assoc", enonce: "Associer à chaque cause sa conséquence.",
              gauche: ["Absence de O₂", "Réduction du pyruvate par le NADH,H⁺", "Dégradation incomplète du glucose", "Accumulation d’acide lactique"],
              droite: ["Faible production d’ATP", "Baisse du pH du milieu", "Chaîne respiratoire non fonctionnelle", "Régénération du NAD⁺"], rep: [2, 3, 0, 1],
              retour: "Sans O₂, pas d’accepteur final : la cellule réoxyde ses transporteurs en réduisant le pyruvate." },
            { id: "S2-P3-B3", cap: "R1", concept: "c7", diff: 3, duree: 5, pts: 1, type: "ordre", enonce: "Remettre dans l’ordre les étapes de la fermentation alcoolique.",
              items: ["Entrée du glucose dans le hyaloplasme de la levure", "Glycolyse : formation de 2 pyruvates, 2 ATP et 2 NADH,H⁺", "Décarboxylation du pyruvate en éthanal, avec libération de CO₂", "Réduction de l’éthanal en éthanol par le NADH,H⁺, qui redevient NAD⁺"],
              ouvert: "Expliquer, en précisant les étapes, comment la levure produit de l’éthanol et du CO₂ à partir du glucose.", retour: "Glucose → pyruvate → éthanal + CO₂ → éthanol." },
            { id: "S2-P3-B4", cap: "R5", concept: "c7", diff: 2, duree: 3, pts: 1, type: "num", enonce: "L’hydrolyse d’une mole d’ATP libère 30,5 kJ. Calculer l’énergie conservée sous forme d’ATP lors de la fermentation d’une mole de glucose.", rep: 61, tol: 0.5, unite: "kJ", retour: "2 × 30,5 = 61 kJ." },
            { id: "S2-P3-B5", cap: "R4", concept: "c7", diff: 3, duree: 5, pts: 1, type: "qcm", enonce: "Quelle synthèse répond le mieux au problème : « Comment certaines cellules produisent-elles de l’ATP en l’absence de O₂ ? »", options: [
              "Par fermentation : dans le hyaloplasme, la glycolyse fournit 2 ATP ; le pyruvate est ensuite réduit (en éthanol + CO₂ ou en acide lactique), ce qui régénère le NAD⁺ et permet à la glycolyse de se poursuivre",
              "Par respiration : le pyruvate est dégradé dans la mitochondrie sans O₂ et fournit 38 ATP",
              "Par fermentation : le glucose est dégradé complètement en CO₂ et H₂O dans le hyaloplasme",
              "Par fermentation : la réduction du pyruvate fournit directement la plus grande partie de l’ATP"], rep: 0,
              ouvert: "À partir des données et de vos connaissances, rédiger une synthèse expliquant comment la levure produit de l’ATP en l’absence de O₂.", corrige: "Glycolyse (2 ATP, 2 NADH,H⁺) dans le hyaloplasme ; réduction du pyruvate → régénération du NAD⁺ ; dégradation incomplète, résidu organique ; bilan 2 ATP.",
              retour: "L’ATP vient uniquement de la glycolyse ; la réduction du pyruvate ne sert qu’à régénérer le NAD⁺." }
          ]
        }]
      }
    }
  };
})();
