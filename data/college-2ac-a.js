// 2AC — Thème 1 (suite) : chapitre 2 « Cycles et flux de l'énergie dans l'écosystème » et chapitre 3 « Croissance et taille de la population ».
// Même modèle que college.js : enseignement explicite (ouverture, je fais, nous faisons, tu fais, je retiens).
(function () {
  const L = window.SVT.lecons["2AC"];

  // ---------- Chapitre 2, séquence 1 ----------
  const gElodee = {
    type: "graph", titre: "Dioxygène dissous dans l’eau d’un bocal contenant une plante aquatique (élodée)", xlab: "Temps (min)", ylab: "Dioxygène dissous (mg/L)", xmax: 30, ymax: 14,
    series: [{ nom: "Dioxygène", pts: [[0, 8], [10, 6], [25, 12], [30, 11]] }],
    marques: [{ x: 10, label: "On allume la lampe" }, { x: 25, label: "On éteint la lampe" }]
  };
  L.push({
    id: "2AC-L3", u: 0, c: 1, s: 0,
    titre: "Leçon 3 — Les échanges de matière et d’énergie : respiration et photosynthèse",
    objectif: "À la fin de la leçon, je sais décrire les échanges gazeux d’une plante verte à la lumière et à l’obscurité, et écrire le bilan de la photosynthèse et de la respiration.",
    reussite: ["Je nomme le gaz absorbé et le gaz rejeté dans chaque cas.", "J’écris les deux bilans avec des mots.", "Je lis une courbe à plusieurs segments en reliant chaque segment à une condition."],
    prerequis: {
      html: `<p>En 1AC, tu as appris que <b>respirer</b>, c’est prélever du dioxygène et rejeter du dioxyde de carbone. Les plantes vertes doivent leur couleur à la <b>chlorophylle</b>.</p>`,
      quiz: [
        { id: "2AC-L3-a1", cap: "K", pts: 1, type: "qcm", enonce: "Un animal qui respire :", options: ["prélève du dioxygène et rejette du dioxyde de carbone", "prélève du dioxyde de carbone et rejette du dioxygène", "ne fait aucun échange avec son milieu", "prélève de la lumière"], rep: 0, retour: "C’est la définition de la respiration." },
        { id: "2AC-L3-a2", cap: "K", pts: 1, type: "qcm", enonce: "Qu’est-ce qui donne leur couleur verte aux feuilles ?", options: ["La chlorophylle", "L’eau", "Le dioxygène", "Le sol"], rep: 0, retour: "La chlorophylle capte l’énergie de la lumière." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je compare la plante à la lumière et à l’obscurité", html: `
        <p class="ctx">Je place une plante aquatique, l’élodée, dans un bocal d’eau, et je mesure les gaz dissous.</p>
        <table class="t"><tr><th>Condition</th><th>Gaz absorbé</th><th>Gaz rejeté</th><th>Phénomène</th></tr>
        <tr><th>À la lumière</th><td>Dioxyde de carbone</td><td>Dioxygène</td><td>Photosynthèse (elle masque la respiration)</td></tr>
        <tr><th>À l’obscurité</th><td>Dioxygène</td><td>Dioxyde de carbone</td><td>Respiration seule</td></tr></table>
        <p>« À la lumière, des bulles se dégagent de l’élodée : c’est du dioxygène. À l’obscurité, les bulles s’arrêtent, et le dioxygène de l’eau diminue : la plante respire. »</p>
        <p class="def"><b>Photosynthèse</b> : eau + dioxyde de carbone + <b>énergie lumineuse</b> → matière organique + dioxygène. Elle se déroule dans les parties vertes, à la lumière.</p>
        <p class="def"><b>Respiration</b> : matière organique + dioxygène → dioxyde de carbone + eau + <b>énergie</b>. Elle se déroule chez tous les êtres vivants, jour et nuit.</p>
        <p>Les deux bilans sont <b>inverses</b>. La photosynthèse <b>met en réserve</b> l’énergie de la lumière dans la matière organique ; la respiration <b>libère</b> cette énergie pour les activités de l’être vivant.</p>
        <p><b>Erreurs fréquentes.</b> « Les plantes respirent seulement la nuit » : faux, elles respirent tout le temps ; le jour, la photosynthèse est simplement plus forte. « Les plantes se nourrissent de terre » : faux, elles fabriquent leur matière organique à partir d’eau, de sels minéraux et de dioxyde de carbone.</p>` },
      { titre: "Je fais 2 — Je repère les variables et je lis la courbe", html: `
        <p>Dans une expérience, je distingue toujours deux <b>variables</b> :</p>
        <ul><li>celle que <b>je fais varier</b> : ici, l’<b>éclairement</b> (lampe allumée ou éteinte) ;</li><li>celle que <b>je mesure</b> : ici, le <b>dioxygène dissous</b> dans l’eau.</li></ul>
        <p>Tout le reste ne change pas : même plante, même eau, même température.</p>
        <p>Je lis ensuite la courbe <b>segment par segment</b>, en associant chaque segment à sa condition : « De 0 à 10 minutes, à l’obscurité, le dioxygène diminue de 8 à 6 mg/L : la plante respire. De 10 à 25 minutes, à la lumière, il augmente de 6 à 12 mg/L : la plante réalise la photosynthèse. »</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — L’élodée et la lampe", contexte: "Une élodée est placée dans un bocal d’eau fermé. Elle est d’abord à l’obscurité ; on allume une lampe à 10 minutes et on l’éteint à 25 minutes.", docs: [gElodee], questions: [
        { id: "2AC-L3-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la quantité de dioxygène dissous à 25 minutes ?", rep: 12, tol: 0.3, unite: "mg/L", retour: "On part de 25 sur l’axe du temps, on monte jusqu’à la courbe, on lit à gauche : 12 mg/L." },
        { id: "2AC-L3-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Entre 10 et 25 minutes, lampe allumée, le dioxygène dissous :", options: ["augmente de 6 à 12 mg/L", "diminue de 8 à 6 mg/L", "reste égal à 6 mg/L", "diminue de 12 à 11 mg/L"], rep: 0, retour: "On donne le sens de variation et les deux valeurs du segment." },
        { id: "2AC-L3-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Que peut-on déduire de ce segment ?", options: ["À la lumière, la plante rejette du dioxygène : elle réalise la photosynthèse", "À la lumière, la plante ne fait plus d’échanges", "À la lumière, la plante absorbe du dioxygène", "La lampe fabrique du dioxygène"], rep: 0, retour: "Le dioxygène augmente seulement quand la plante est éclairée." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — L’amidon dans les feuilles", contexte: "L’amidon est une matière organique. L’eau iodée, jaune, devient bleu-noir en sa présence. On teste trois feuilles d’une même plante, placées trois jours dans des conditions différentes.", docs: [
        { type: "table", titre: "Recherche de l’amidon dans trois feuilles", cols: ["Feuille", "Conditions", "Couleur avec l’eau iodée"], rows: [["1", "Lumière, air normal", "Bleu-noir"], ["2", "Obscurité, air normal", "Jaune"], ["3", "Lumière, air sans dioxyde de carbone", "Jaune"]] }
      ], questions: [
        { id: "2AC-L3-t1", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle feuille contient de l’amidon ?", options: ["La feuille 1", "La feuille 2", "La feuille 3", "Les trois"], rep: 0, retour: "Seule la feuille 1 donne la couleur bleu-noir." },
        { id: "2AC-L3-t2", cap: "R2", pts: 1, type: "qcm", enonce: "On compare les feuilles 1 et 2. Que peut-on conclure ?", options: ["La lumière est nécessaire à la fabrication de l’amidon", "Le dioxyde de carbone est nécessaire", "L’eau iodée fabrique l’amidon", "L’obscurité fabrique l’amidon"], rep: 0, retour: "Entre 1 et 2, la seule variable qui change est l’éclairement." },
        { id: "2AC-L3-t3", cap: "R2", pts: 1, type: "qcm", enonce: "On compare les feuilles 1 et 3. Que peut-on conclure ?", options: ["Le dioxyde de carbone est nécessaire à la fabrication de l’amidon", "La lumière est inutile", "L’air est dangereux pour la plante", "L’amidon vient du sol"], rep: 0, retour: "Entre 1 et 3, la seule variable qui change est la présence de dioxyde de carbone." },
        { id: "2AC-L3-t4", cap: "K", pts: 1, type: "trous", enonce: "Complète le bilan de la photosynthèse.", texte: "Eau + {0} + énergie {1} → matière organique + {2}", choix: [["dioxyde de carbone", "dioxygène", "amidon"], ["lumineuse", "électrique", "musculaire"], ["dioxygène", "dioxyde de carbone", "diazote"]], rep: [0, 0, 0], retour: "La plante absorbe du dioxyde de carbone et rejette du dioxygène, grâce à l’énergie de la lumière." },
        { id: "2AC-L3-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une plante verte respire le jour et la nuit.", v: true }, { t: "La photosynthèse se déroule à l’obscurité.", v: false }, { t: "La respiration libère de l’énergie.", v: true }, { t: "La photosynthèse consomme du dioxygène.", v: false }], retour: "La photosynthèse exige la lumière et rejette du dioxygène ; la respiration est permanente." }
      ] }
    ],
    cloture: `<ul><li><b>Photosynthèse</b> (parties vertes, à la lumière) : eau + dioxyde de carbone + énergie lumineuse → matière organique + dioxygène.</li><li><b>Respiration</b> (tous les êtres vivants, jour et nuit) : matière organique + dioxygène → dioxyde de carbone + eau + énergie.</li><li>La photosynthèse met l’énergie lumineuse en réserve ; la respiration la libère.</li><li>Dans une expérience : une variable que l’on fait varier, une variable que l’on mesure.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 2 ----------
  L.push({
    id: "2AC-L4", u: 0, c: 1, s: 1,
    titre: "Leçon 4 — Le transfert de la matière et le flux de l’énergie dans l’écosystème",
    objectif: "À la fin de la leçon, je sais construire une chaîne alimentaire, nommer ses niveaux et expliquer pourquoi la matière diminue d’un niveau au suivant.",
    reussite: ["J’écris une chaîne alimentaire avec les flèches dans le bon sens.", "Je nomme producteur, consommateurs et décomposeurs.", "Je calcule la part de matière qui passe d’un niveau au suivant."],
    prerequis: {
      html: `<p>Tu connais la <b>prédation</b> (leçon 1) et la <b>photosynthèse</b> (leçon 3) : la plante verte fabrique sa matière organique, les animaux la trouvent dans leur nourriture.</p>`,
      quiz: [
        { id: "2AC-L4-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quel être vivant fabrique sa matière organique grâce à la lumière ?", options: ["La plante verte", "Le lézard", "Le champignon", "Le faucon"], rep: 0, retour: "C’est la photosynthèse." },
        { id: "2AC-L4-a2", cap: "K", pts: 1, type: "qcm", enonce: "Dans « sauterelle → lézard », la flèche signifie :", options: ["« est mangée par »", "« mange »", "« est plus petite que »", "« vit avec »"], rep: 0, retour: "La flèche indique le sens du transfert de matière : de celui qui est mangé vers celui qui mange." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je construis une chaîne alimentaire", html: `
        <p class="ctx">Dans un champ, je sais que : le criquet mange l’herbe ; le lézard mange le criquet ; le faucon mange le lézard.</p>
        <ol><li><b>Je cherche le point de départ</b> : la plante verte. « L’herbe ne mange personne : elle fabrique sa matière. »</li>
        <li><b>J’écris la chaîne</b>, chaque flèche voulant dire « est mangé par » : herbe → criquet → lézard → faucon.</li>
        <li><b>Je nomme les niveaux.</b></li></ol>
        <table class="t"><tr><th>Maillon</th><th>Niveau</th><th>Pourquoi ?</th></tr>
        <tr><td>Herbe</td><td><b>Producteur</b></td><td>Fabrique sa matière organique par photosynthèse</td></tr><tr><td>Criquet</td><td><b>Consommateur primaire</b></td><td>Mange un végétal</td></tr>
        <tr><td>Lézard</td><td><b>Consommateur secondaire</b></td><td>Mange un herbivore</td></tr><tr><td>Faucon</td><td><b>Consommateur tertiaire</b></td><td>Mange un carnivore</td></tr></table>
        <p>Les <b>décomposeurs</b> (bactéries, champignons, vers de terre) transforment les cadavres, les excréments et les feuilles mortes en matière minérale. Plusieurs chaînes qui se croisent forment un <b>réseau alimentaire</b>.</p>
        <p><b>Erreurs fréquentes</b> : écrire la flèche à l’envers ; commencer une chaîne par un animal.</p>` },
      { titre: "Je fais 2 — Je suis la matière et l’énergie", html: `
        <table class="t"><tr><th>Niveau</th><th>Masse d’êtres vivants sur un hectare</th></tr><tr><td>Herbe</td><td>1 000 kg</td></tr><tr><td>Criquets</td><td>100 kg</td></tr><tr><td>Lézards</td><td>10 kg</td></tr><tr><td>Faucons</td><td>1 kg</td></tr></table>
        <p>« Je compare deux lignes voisines : 1 000 kg d’herbe ne donnent que 100 kg de criquets. Je calcule : 100 ÷ 1 000 = 0,1, soit <b>10 %</b>. »</p>
        <p>Où sont passés les 90 % restants ? Une partie de l’herbe n’est pas mangée ; une partie est rejetée dans les excréments ; une grande partie est utilisée par la <b>respiration</b> du criquet et perdue sous forme de <b>chaleur</b>.</p>
        <p class="def">L’énergie d’un écosystème vient du <b>Soleil</b>. Elle passe d’un niveau au suivant en diminuant fortement, et ne revient jamais en arrière : c’est un <b>flux d’énergie</b>, à sens unique.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Une chaîne dans une mare", contexte: "Dans une mare, les algues vertes sont mangées par les têtards ; les têtards sont mangés par la perche ; la perche est mangée par le héron.", docs: [], questions: [
        { id: "2AC-L4-g1", cap: "I2", pts: 1, type: "ordre", enonce: "Remets les maillons dans l’ordre de la chaîne alimentaire.", items: ["Algues vertes", "Têtards", "Perche", "Héron"], retour: "On part du végétal chlorophyllien, puis on suit « est mangé par »." },
        { id: "2AC-L4-g2", cap: "K", pts: 1, type: "assoc", enonce: "Donne le niveau de chaque maillon.", gauche: ["Algues vertes", "Têtards", "Perche", "Héron"], droite: ["Consommateur secondaire", "Producteur", "Consommateur tertiaire", "Consommateur primaire"], rep: [1, 3, 0, 2], retour: "Producteur, puis consommateurs primaire, secondaire et tertiaire." },
        { id: "2AC-L4-g3", cap: "R2", pts: 1, type: "qcm", enonce: "On retire toutes les perches de la mare. Que se passe-t-il d’abord pour les têtards ?", options: ["Leur nombre augmente, car ils n’ont plus de prédateur", "Leur nombre diminue, car ils n’ont plus de nourriture", "Rien ne change", "Ils deviennent des producteurs"], rep: 0, retour: "Sans prédateur, les têtards sont moins mangés. Ensuite, trop nombreux, ils feront diminuer les algues." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — La matière le long d’une chaîne", contexte: "Dans une prairie, on a estimé la masse des êtres vivants de chaque niveau d’une chaîne alimentaire.", docs: [
        { type: "table", titre: "Masse des êtres vivants sur un hectare de prairie", cols: ["Niveau", "Herbes", "Sauterelles", "Lézards", "Faucons"], rows: [["Masse (kg)", "5 000", "500", "50", "5"]] }
      ], questions: [
        { id: "2AC-L4-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la masse des lézards ?", rep: 50, tol: 0, unite: "kg", retour: "Colonne « Lézards »." },
        { id: "2AC-L4-t2", cap: "R5", pts: 1, type: "num", enonce: "La masse des sauterelles représente quel pourcentage de la masse des herbes ?", rep: 10, tol: 0, unite: "%", retour: "500 ÷ 5 000 = 0,1, soit 10 %." },
        { id: "2AC-L4-t3", cap: "R1", pts: 1, type: "qcm", enonce: "Pourquoi la masse diminue-t-elle d’un niveau au suivant ?", options: ["Une grande partie de la matière mangée est utilisée par la respiration et perdue en chaleur, ou rejetée", "Les animaux ne mangent jamais", "Les herbes sont plus petites que les faucons", "Les faucons mangent de l’herbe"], rep: 0, retour: "Une partie n’est pas mangée, une partie est rejetée, une partie est consommée par la respiration." },
        { id: "2AC-L4-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque niveau à sa définition.", gauche: ["Producteur", "Consommateur primaire", "Consommateur secondaire", "Décomposeur"], droite: ["Transforme la matière morte en matière minérale", "Mange des herbivores", "Fabrique sa matière organique grâce à la lumière", "Mange des végétaux"], rep: [2, 3, 1, 0], retour: "Le producteur fabrique, les consommateurs mangent, les décomposeurs recyclent." },
        { id: "2AC-L4-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une chaîne alimentaire commence toujours par un producteur.", v: true }, { t: "La flèche d’une chaîne alimentaire signifie « mange ».", v: false }, { t: "L’énergie d’un écosystème vient du Soleil.", v: true }, { t: "Toute l’énergie d’un niveau passe au niveau suivant.", v: false }], retour: "La flèche signifie « est mangé par » ; seule une petite part de l’énergie, environ 10 %, passe au niveau suivant." }
      ] }
    ],
    cloture: `<ul><li>Chaîne alimentaire : <b>producteur → consommateur primaire → consommateur secondaire → …</b> ; la flèche signifie « est mangé par ».</li><li>Les <b>décomposeurs</b> transforment la matière morte en matière minérale.</li><li>D’un niveau au suivant, la matière et l’énergie diminuent fortement (environ 10 % sont transmis).</li><li>L’énergie vient du Soleil et circule à sens unique : c’est un <b>flux</b>.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 3 ----------
  const tFeuilles = { type: "table", titre: "Masse de feuilles mortes restant dans deux bacs de sol", cols: ["Temps", "Au départ", "Après 3 mois", "Après 6 mois"], rows: [["Bac A : sol de forêt normal", "100 g", "65 g", "40 g"], ["Bac B : sol de forêt stérilisé par la chaleur", "100 g", "99 g", "98 g"]] };
  L.push({
    id: "2AC-L5", u: 0, c: 1, s: 2,
    titre: "Leçon 5 — Les êtres vivants et les cycles dans un écosystème",
    objectif: "À la fin de la leçon, je sais expliquer comment la matière circule en cycle dans un écosystème et quel rôle y jouent les décomposeurs.",
    reussite: ["Je cite dans l’ordre les étapes du cycle de la matière.", "J’interprète une expérience sur la décomposition en nommant les variables.", "Je distingue le cycle de la matière du flux de l’énergie."],
    prerequis: {
      html: `<p>Tu sais que la <b>photosynthèse</b> prélève du dioxyde de carbone dans l’air, que la <b>respiration</b> en rejette, et que les <b>décomposeurs</b> transforment la matière morte.</p>`,
      quiz: [
        { id: "2AC-L5-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quel phénomène prélève du dioxyde de carbone dans l’air ?", options: ["La photosynthèse", "La respiration", "La digestion", "La prédation"], rep: 0, retour: "La plante verte absorbe du dioxyde de carbone à la lumière." },
        { id: "2AC-L5-a2", cap: "K", pts: 1, type: "qcm", enonce: "Les décomposeurs sont surtout :", options: ["des bactéries et des champignons du sol", "des plantes vertes", "des rapaces", "des herbivores"], rep: 0, retour: "Aidés par de petits animaux du sol, comme les vers de terre." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je suis le trajet de la matière", html: `
        <p class="ctx">Je suis le carbone, un constituant de toute matière organique, étape par étape.</p>
        <ol><li>« Il est d’abord dans l’air, sous forme de <b>dioxyde de carbone</b>. »</li>
        <li>« La plante l’absorbe et, par <b>photosynthèse</b>, l’intègre à sa <b>matière organique</b>. »</li>
        <li>« Un animal mange la plante : la matière passe dans l’animal. »</li>
        <li>« En <b>respirant</b>, la plante et l’animal rejettent une partie de ce carbone dans l’air. »</li>
        <li>« Les feuilles mortes, les excréments et les cadavres sont transformés par les <b>décomposeurs</b>, qui rejettent du dioxyde de carbone et libèrent des <b>sels minéraux</b> dans le sol. »</li>
        <li>« Les plantes absorbent ces sels minéraux et le dioxyde de carbone : tout recommence. »</li></ol>
        <p class="def">Dans un écosystème, la matière n’est ni créée ni perdue : elle est <b>recyclée</b>. On parle de <b>cycle de la matière</b>.</p>
        <p>À ne pas confondre : la <b>matière</b> tourne en <b>cycle</b> ; l’<b>énergie</b> traverse l’écosystème à sens unique, c’est un <b>flux</b> (leçon 4).</p>` },
      { titre: "Je fais 2 — J’interprète une expérience sur la décomposition", html: `
        <p>On place 100 g de feuilles mortes dans deux bacs. Bac A : sol de forêt normal. Bac B : même sol, chauffé pour tuer tous les êtres vivants qu’il contient.</p>
        <ul><li><b>Variable que l’on fait varier</b> : la présence des êtres vivants du sol.</li><li><b>Variable que l’on mesure</b> : la masse de feuilles restantes.</li></ul>
        <p>« Après 6 mois, il reste 40 g de feuilles dans le bac A, <b>alors qu’</b>il en reste 98 g dans le bac B. Je conclus : ce sont les êtres vivants du sol qui transforment les feuilles mortes. »</p>
        <p><b>Erreur fréquente</b> : dire que les feuilles « disparaissent ». Elles ne disparaissent pas : elles sont <b>transformées</b> en dioxyde de carbone et en sels minéraux.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Des feuilles mortes dans deux bacs", contexte: "On reprend l’expérience du modelage avec ses résultats complets.", docs: [tFeuilles], questions: [
        { id: "2AC-L5-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle masse de feuilles reste-t-il dans le bac A après 6 mois ?", rep: 40, tol: 0, unite: "g", retour: "Ligne « Bac A », colonne « Après 6 mois »." },
        { id: "2AC-L5-g2", cap: "R3", pts: 1, type: "qcm", enonce: "Quelle variable fait-on varier entre les deux bacs ?", options: ["La présence des êtres vivants du sol", "La masse de feuilles au départ", "La durée de l’expérience", "L’espèce des feuilles"], rep: 0, retour: "Le sol du bac B a été stérilisé : c’est la seule différence." },
        { id: "2AC-L5-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Quelle conclusion peut-on écrire ?", options: ["Les décomposeurs du sol transforment les feuilles mortes", "Les feuilles mortes disparaissent toutes seules", "La chaleur fait grossir les feuilles", "Le sol stérilisé décompose mieux les feuilles"], rep: 0, retour: "Sans êtres vivants (bac B), la masse ne change presque pas : de 100 g à 98 g." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Le cycle de la matière dans une forêt", contexte: "Utilise le tableau et tes connaissances.", docs: [tFeuilles], questions: [
        { id: "2AC-L5-t1", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les étapes du cycle de la matière.", items: ["La plante absorbe le dioxyde de carbone de l’air", "La plante fabrique de la matière organique", "Un animal mange la plante", "L’animal meurt : les décomposeurs transforment sa matière", "Du dioxyde de carbone et des sels minéraux retournent au milieu"], retour: "Air → plante → animal → décomposeurs → retour au milieu, puis le cycle recommence." },
        { id: "2AC-L5-t2", cap: "K", pts: 1, type: "assoc", enonce: "Quel est l’effet de chaque phénomène sur le dioxyde de carbone de l’air ?", gauche: ["La photosynthèse", "La respiration des animaux", "La respiration des décomposeurs", "La respiration des plantes"], droite: ["En prélève dans l’air", "En rejette dans l’air"], rep: [0, 1, 1, 1], retour: "Seule la photosynthèse prélève du dioxyde de carbone ; toutes les respirations en rejettent." },
        { id: "2AC-L5-t3", cap: "I4", pts: 1, type: "qcm", enonce: "Comment évolue la masse de feuilles dans le bac B ?", options: ["Elle reste presque constante : de 100 g à 98 g en 6 mois", "Elle diminue de 100 g à 40 g en 6 mois", "Elle augmente de 98 g à 100 g", "Elle devient nulle"], rep: 0, retour: "On lit la deuxième ligne du tableau." },
        { id: "2AC-L5-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Que se passerait-il dans une forêt dont le sol ne contiendrait plus de décomposeurs ?", options: ["Les feuilles mortes s’accumuleraient et le sol s’appauvrirait en sels minéraux", "Les arbres pousseraient plus vite", "Rien ne changerait", "Les feuilles mortes se transformeraient plus vite"], rep: 0, retour: "Sans décomposeurs, la matière morte n’est plus recyclée : les plantes manquent de sels minéraux." },
        { id: "2AC-L5-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Dans un écosystème, la matière circule en cycle.", v: true }, { t: "L’énergie circule elle aussi en cycle.", v: false }, { t: "Les plantes absorbent les sels minéraux du sol.", v: true }, { t: "Les feuilles mortes disparaissent sans rien devenir.", v: false }], retour: "La matière est recyclée ; l’énergie, elle, traverse l’écosystème à sens unique." }
      ] }
    ],
    cloture: `<ul><li>La matière passe de l’air et du sol aux plantes, puis aux animaux, puis aux <b>décomposeurs</b>, qui la rendent au milieu : c’est un <b>cycle</b>.</li><li>Photosynthèse : prélève le dioxyde de carbone. Respirations et décomposition : en rejettent.</li><li>Les décomposeurs libèrent les <b>sels minéraux</b> nécessaires aux plantes.</li><li>La matière est recyclée ; l’énergie circule en <b>flux</b> à sens unique.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 1 ----------
  const gTruites = {
    type: "graph", titre: "Masse moyenne de jeunes truites élevées dans deux bassins", xlab: "Temps (mois)", ylab: "Masse moyenne (g)", xmax: 6, ymax: 300,
    series: [{ nom: "Bassin à 15 °C", pts: [[0, 10], [2, 60], [4, 150], [6, 260]] }, { nom: "Bassin à 8 °C", pts: [[0, 10], [2, 30], [4, 70], [6, 120]] }]
  };
  L.push({
    id: "2AC-L6", u: 0, c: 2, s: 0,
    titre: "Leçon 6 — Les facteurs qui agissent sur la croissance de l’être vivant",
    objectif: "À la fin de la leçon, je sais identifier, à partir d’une expérience, un facteur qui agit sur la croissance d’un être vivant.",
    reussite: ["Je nomme la variable que l’on fait varier et celle que l’on mesure.", "Je choisis les deux lots à comparer pour tester un facteur.", "Je cite quatre facteurs de la croissance."],
    prerequis: {
      html: `<p>Un être vivant <b>grandit</b>. Pour cela, il utilise la matière qu’il fabrique (plante) ou qu’il trouve dans sa nourriture (animal).</p>`,
      quiz: [
        { id: "2AC-L6-a1", cap: "K", pts: 1, type: "qcm", enonce: "De quoi une plante verte a-t-elle besoin pour fabriquer sa matière organique ?", options: ["D’eau, de sels minéraux, de dioxyde de carbone et de lumière", "De viande", "D’obscurité", "De sable uniquement"], rep: 0, retour: "Ce sont les besoins de la photosynthèse (leçon 3)." },
        { id: "2AC-L6-a2", cap: "K", pts: 1, type: "qcm", enonce: "Dans une expérience, combien de variables fait-on varier à la fois ?", options: ["Une seule", "Deux", "Toutes", "Aucune"], rep: 0, retour: "Si deux variables changent, on ne peut pas savoir laquelle a agi." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je lis une courbe de croissance", html: `
        <p class="def"><b>Croissance</b> : augmentation de la taille et de la masse d’un être vivant au cours du temps.</p>
        <p class="ctx">On pèse un poussin régulièrement : 40 g à la naissance, 400 g à 4 semaines, 1 500 g à 8 semaines, 2 000 g à 12 semaines, 2 100 g à 16 semaines.</p>
        <p>Je découpe la courbe en segments et je compare leur pente.</p>
        <ul><li>« De 0 à 4 semaines, la masse augmente de 40 à 400 g : croissance <b>lente</b>. »</li><li>« De 4 à 8 semaines, elle augmente de 400 à 1 500 g : croissance <b>rapide</b>. »</li><li>« De 12 à 16 semaines, elle passe de 2 000 à 2 100 g : la croissance <b>ralentit</b> et s’arrête presque. »</li></ul>
        <p>La croissance n’a pas la même vitesse à tous les âges.</p>` },
      { titre: "Je fais 2 — Je teste un facteur", html: `
        <p>Question : « Les sels minéraux agissent-ils sur la croissance du blé ? »</p>
        <table class="t"><tr><th></th><th>Lot A</th><th>Lot B</th></tr><tr><th>Arrosage</th><td>Eau + sels minéraux</td><td>Eau seule</td></tr><tr><th>Lumière, température, nombre de plants</th><td colspan="2">Identiques</td></tr><tr><th>Hauteur après 3 semaines</th><td>24 cm</td><td>11 cm</td></tr></table>
        <ul><li><b>Variable que je fais varier</b> : la présence de sels minéraux.</li><li><b>Variable que je mesure</b> : la hauteur des plants.</li><li><b>Ce qui ne change pas</b> : la lumière, la température, l’eau, le nombre de plants.</li></ul>
        <p>« Les plants du lot A mesurent 24 cm, alors que ceux du lot B mesurent 11 cm : les sels minéraux favorisent la croissance du blé. »</p>
        <p class="def">Les facteurs de la croissance : la <b>nourriture</b> (quantité et qualité), l’<b>eau</b>, la <b>température</b>, et, pour les plantes vertes, la <b>lumière</b> et les <b>sels minéraux</b>.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Des truites dans deux bassins", contexte: "Deux lots de jeunes truites de même âge reçoivent la même nourriture. Seule la température de l’eau diffère : 15 °C dans un bassin, 8 °C dans l’autre.", docs: [gTruites], questions: [
        { id: "2AC-L6-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la masse moyenne des truites du bassin à 15 °C au bout de 6 mois ?", rep: 260, tol: 6, unite: "g", retour: "On lit la courbe du bassin à 15 °C, à 6 mois : 260 g." },
        { id: "2AC-L6-g2", cap: "R3", pts: 1, type: "qcm", enonce: "Quelle variable fait-on varier dans cette expérience ?", options: ["La température de l’eau", "La masse des truites", "La nourriture", "L’âge des truites"], rep: 0, retour: "La masse est la variable que l’on mesure ; la nourriture et l’âge sont identiques." },
        { id: "2AC-L6-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Quelle conclusion peut-on écrire ?", options: ["La température agit sur la croissance : les truites grandissent plus vite à 15 °C qu’à 8 °C", "La température n’a aucun effet sur la croissance", "Les truites ne grandissent pas à 8 °C", "La nourriture agit sur la croissance"], rep: 0, retour: "À 6 mois : 260 g à 15 °C, alors que 120 g à 8 °C. Les truites grandissent aussi à 8 °C, mais moins vite." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Trois lots de haricots", contexte: "On sème des haricots dans trois pots placés à la lumière, à la même température. On mesure la hauteur moyenne des plants.", docs: [
        { type: "table", titre: "Hauteur moyenne des plants (cm)", cols: ["Jour", "0", "7", "14", "21"], rows: [["Lot A : eau + sels minéraux", "2", "8", "18", "30"], ["Lot B : eau seule", "2", "6", "10", "13"], ["Lot C : sans arrosage", "2", "2", "2", "2"]] }
      ], questions: [
        { id: "2AC-L6-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la hauteur des plants du lot A au jour 21 ?", rep: 30, tol: 0, unite: "cm", retour: "Ligne « Lot A », colonne « 21 »." },
        { id: "2AC-L6-t2", cap: "R3", pts: 1, type: "qcm", enonce: "Pour connaître l’effet des sels minéraux, quels lots faut-il comparer ?", options: ["Les lots A et B", "Les lots A et C", "Les lots B et C", "Le lot A seul"], rep: 0, retour: "Entre A et B, seule la présence de sels minéraux change. Entre A et C, deux variables changent." },
        { id: "2AC-L6-t3", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "Au jour 21, les plants du lot A mesurent {0} cm, alors que ceux du lot B mesurent {1} cm : les sels minéraux {2} la croissance.", choix: [["30", "18", "13"], ["13", "10", "30"], ["favorisent", "empêchent", "ne changent pas"]], rep: [0, 0, 0], retour: "Même colonne, deux lignes, puis une conclusion." },
        { id: "2AC-L6-t4", cap: "R2", pts: 1, type: "qcm", enonce: "On compare les lots B et C. Que peut-on conclure ?", options: ["L’eau est indispensable à la croissance", "Les sels minéraux sont indispensables", "La lumière est indispensable", "L’eau ralentit la croissance"], rep: 0, retour: "Sans eau (lot C), les plants restent à 2 cm ; avec de l’eau (lot B), ils atteignent 13 cm." },
        { id: "2AC-L6-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La croissance est une augmentation de la taille et de la masse.", v: true }, { t: "La lumière n’a aucun effet sur la croissance des plantes vertes.", v: false }, { t: "Une nourriture insuffisante ralentit la croissance d’un animal.", v: true }, { t: "Un être vivant grandit à la même vitesse toute sa vie.", v: false }], retour: "La croissance dépend de plusieurs facteurs et sa vitesse change avec l’âge." }
      ] }
    ],
    cloture: `<ul><li>La <b>croissance</b> est l’augmentation de la taille et de la masse.</li><li>Elle dépend de la <b>nourriture</b>, de l’<b>eau</b>, de la <b>température</b> et, pour les plantes, de la <b>lumière</b> et des <b>sels minéraux</b>.</li><li>Pour tester un facteur, on compare deux lots qui ne diffèrent que par ce facteur.</li><li>Variable que l’on fait varier ≠ variable que l’on mesure.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 2 ----------
  const gChevres = {
    type: "graph", titre: "Nombre de chèvres sauvages sur une petite île sans prédateur", xlab: "Temps (années)", ylab: "Nombre de chèvres", xmax: 12, ymax: 600,
    series: [{ nom: "Chèvres", pts: [[0, 20], [3, 80], [6, 300], [8, 500], [10, 150], [12, 120]] }]
  };
  L.push({
    id: "2AC-L7", u: 0, c: 2, s: 1,
    titre: "Leçon 7 — Les facteurs qui agissent sur la taille d’une population",
    objectif: "À la fin de la leçon, je sais calculer l’évolution de la taille d’une population et expliquer ses variations.",
    reussite: ["Je définis une population.", "Je calcule sa taille à partir des naissances, des décès, des arrivées et des départs.", "J’explique une augmentation ou une diminution lue sur une courbe."],
    prerequis: {
      html: `<p>Tu as vu que le nombre de proies et de prédateurs varie au cours du temps (leçon 1) et que les êtres vivants se disputent les ressources (leçon 2).</p>`,
      quiz: [
        { id: "2AC-L7-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quand les proies deviennent rares, le nombre de prédateurs :", options: ["diminue", "augmente", "ne change jamais", "double"], rep: 0, retour: "Les prédateurs manquent de nourriture." },
        { id: "2AC-L7-a2", cap: "K", pts: 1, type: "qcm", enonce: "Deux êtres vivants qui recherchent la même ressource limitée sont en :", options: ["compétition", "mutualisme", "symbiose", "prédation"], rep: 0, retour: "La compétition porte sur une ressource limitée : nourriture, eau, lumière, espace." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je calcule la taille d’une population", html: `
        <p class="def">Une <b>population</b> est l’ensemble des individus d’une <b>même espèce</b> qui vivent dans un <b>même lieu</b>.</p>
        <p class="ctx">Je raisonne comme pour un compte : ce qui entre s’ajoute, ce qui sort se retranche.</p>
        <table class="t"><tr><th>Fait augmenter</th><th>Fait diminuer</th></tr><tr><td>Les <b>naissances</b></td><td>Les <b>décès</b></td></tr><tr><td>Les <b>arrivées</b> (immigration)</td><td>Les <b>départs</b> (émigration)</td></tr></table>
        <p>« Une réserve compte 200 gazelles. En un an : 60 naissances, 40 décès, 10 arrivées, 5 départs. Je calcule : 200 + 60 − 40 + 10 − 5 = <b>225</b> gazelles. »</p>
        <p><b>Erreur fréquente</b> : confondre population et biocénose. La population ne concerne qu’une seule espèce.</p>` },
      { titre: "Je fais 2 — J’explique les variations", html: `
        <p>Les naissances et les décès dépendent de plusieurs <b>facteurs</b> :</p>
        <table class="t"><tr><th>Facteur</th><th>Effet sur la population</th></tr>
        <tr><td>Nourriture abondante</td><td>Plus de naissances, moins de décès : elle augmente</td></tr><tr><td>Manque de nourriture ou d’eau</td><td>Elle diminue</td></tr>
        <tr><td>Prédateurs nombreux</td><td>Elle diminue</td></tr><tr><td>Maladies, parasites</td><td>Elle diminue</td></tr>
        <tr><td>Climat (sécheresse, froid)</td><td>Elle diminue</td></tr><tr><td>Activités humaines (chasse, destruction du milieu)</td><td>Elle diminue ; la protection la fait augmenter</td></tr></table>
        <p>« Sur une courbe, je découpe en segments et, pour chacun, je cherche le facteur responsable. Une population sans prédateur augmente d’abord vite ; quand elle devient trop nombreuse, la nourriture manque et elle chute. »</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Des chèvres sur une île", contexte: "On a lâché 20 chèvres sur une petite île couverte d’herbe, sans aucun prédateur.", docs: [gChevres], questions: [
        { id: "2AC-L7-g1", cap: "I1", pts: 1, type: "num", enonce: "Combien de chèvres compte-t-on la 8ᵉ année ?", rep: 500, tol: 12, unite: "chèvres", retour: "On part de 8 sur l’axe du temps, on monte jusqu’à la courbe : 500." },
        { id: "2AC-L7-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Entre la 8ᵉ et la 10ᵉ année, le nombre de chèvres :", options: ["diminue de 500 à 150", "augmente de 150 à 500", "reste égal à 500", "diminue de 300 à 80"], rep: 0, retour: "On donne le sens et les deux valeurs du segment." },
        { id: "2AC-L7-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Il n’y a pas de prédateur sur l’île. Comment expliquer cette chute ?", options: ["Les chèvres, trop nombreuses, ont épuisé l’herbe : la nourriture manque", "Les chèvres ont été mangées", "Les chèvres ont eu trop de petits", "L’île s’est agrandie"], rep: 0, retour: "La ressource est limitée : au-delà d’un certain nombre, la population ne peut plus se nourrir." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Les perdrix d’une forêt", contexte: "Une forêt abrite 300 perdrix au début de l’année. Le tableau résume ce qui s’est passé pendant l’année.", docs: [
        { type: "table", titre: "Événements de l’année dans la population de perdrix", cols: ["Naissances", "Décès", "Arrivées", "Départs"], rows: [["120", "90", "10", "20"]] }
      ], questions: [
        { id: "2AC-L7-t1", cap: "R5", pts: 1, type: "num", enonce: "Combien de perdrix la forêt compte-t-elle à la fin de l’année ?", rep: 320, tol: 0, unite: "perdrix", retour: "300 + 120 − 90 + 10 − 20 = 320." },
        { id: "2AC-L7-t2", cap: "K", pts: 1, type: "assoc", enonce: "Quel est l’effet de chaque événement ?", gauche: ["Les naissances", "Les décès", "Les arrivées", "Les départs"], droite: ["Fait augmenter la population", "Fait diminuer la population"], rep: [0, 1, 0, 1], retour: "Ce qui entre s’ajoute, ce qui sort se retranche." },
        { id: "2AC-L7-t3", cap: "R2", pts: 1, type: "qcm", enonce: "Les renards, prédateurs des perdrix, sont chassés intensivement. Quel effet cela a-t-il d’abord sur les perdrix ?", options: ["Leur nombre augmente, car elles ont moins de prédateurs", "Leur nombre diminue", "Aucun effet", "Elles deviennent des prédateurs"], rep: 0, retour: "Moins de prédateurs : moins de décès chez les proies." },
        { id: "2AC-L7-t4", cap: "K", pts: 1, type: "qcm", enonce: "Une population est :", options: ["l’ensemble des individus d’une même espèce vivant dans un même lieu", "l’ensemble de toutes les espèces d’un milieu", "un seul individu", "le milieu de vie d’une espèce"], rep: 0, retour: "Une seule espèce, un même lieu." },
        { id: "2AC-L7-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une population réunit des individus d’espèces différentes.", v: false }, { t: "Le manque de nourriture peut faire diminuer une population.", v: true }, { t: "Une maladie peut réduire la taille d’une population.", v: true }, { t: "La taille d’une population ne change jamais.", v: false }], retour: "La taille d’une population varie avec la nourriture, les prédateurs, les maladies, le climat et l’Homme." }
      ] }
    ],
    cloture: `<ul><li>Une <b>population</b> : les individus d’une même espèce dans un même lieu.</li><li>Elle augmente par les <b>naissances</b> et les <b>arrivées</b>, diminue par les <b>décès</b> et les <b>départs</b>.</li><li>Facteurs : nourriture, prédateurs, maladies, climat, activités humaines.</li><li>Une population ne peut pas croître sans limite : les ressources du milieu sont limitées.</li></ul>`
  });
})();
