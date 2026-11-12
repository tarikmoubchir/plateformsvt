// Leçons du collège (1AC, 2AC) construites selon le modèle de l'enseignement explicite des collèges pionniers :
// ouverture (prérequis, objectif) → modelage « je fais » → pratique guidée « nous faisons » → pratique autonome « tu fais » → clôture.
// u, c, s = position de la séquence dans le programme officiel (thème, chapitre, séquence), à partir de 0.
(function () {
  const S = window.SVT;
  S.lecons = { "1AC": [], "2AC": [] };

  // ======================= 1AC — Chapitre 1 : Les écosystèmes et leurs composantes =======================
  S.lecons["1AC"].push({
    id: "1AC-L1", u: 0, c: 0, s: 0,
    titre: "Leçon 1 — Diversité et unité des écosystèmes",
    objectif: "À la fin de la leçon, je sais reconnaître les composantes d’un écosystème (biotope et biocénose) et dire ce que tous les écosystèmes ont en commun.",
    reussite: ["Je range chaque élément d’un milieu dans le biotope ou dans la biocénose.", "Je cite une relation entre un être vivant et son milieu.", "J’explique pourquoi deux milieux différents sont tous les deux des écosystèmes."],
    prerequis: {
      html: `<p>Tu sais déjà distinguer ce qui est <b>vivant</b> de ce qui ne l’est pas : un être vivant naît, se nourrit, respire, grandit, se reproduit et meurt.</p>`,
      quiz: [
        { id: "1AC-L1-a1", cap: "K", pts: 1, type: "assoc", enonce: "Vivant ou non vivant ?", gauche: ["Une grenouille", "Un caillou", "Un roseau", "L’eau de la mare"], droite: ["Non vivant", "Vivant"], rep: [1, 0, 1, 0], retour: "La grenouille et le roseau naissent, se nourrissent, se reproduisent et meurent : ce sont des êtres vivants." },
        { id: "1AC-L1-a2", cap: "K", pts: 1, type: "qcm", enonce: "Lequel de ces caractères appartient seulement aux êtres vivants ?", options: ["Se reproduire", "Bouger", "Avoir une couleur", "Être dans l’eau"], rep: 0, retour: "L’eau d’une rivière bouge mais ne se reproduit pas : le mouvement ne suffit pas pour dire qu’une chose est vivante." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je trouve les composantes d’une mare", html: `
        <p class="ctx">Écoute comment je réfléchis à voix haute devant une mare.</p>
        <ol><li><b>Je liste ce que j’observe</b>, sans trier : de l’eau, de la vase, des cailloux, la lumière du soleil, des roseaux, des grenouilles, des libellules, des têtards.</li>
        <li><b>Pour chaque élément, je me pose la même question</b> : « Est-ce que cela naît, se nourrit, se reproduit et meurt ? » Les roseaux, oui. Les grenouilles, oui. L’eau, non. Les cailloux, non.</li>
        <li><b>Je range</b>. Tous les êtres vivants ensemble forment la <b>biocénose</b>. Le lieu où ils vivent, avec ses caractéristiques (eau, sol, lumière, température), forme le <b>biotope</b>.</li>
        <li><b>Je cherche des relations</b>. La grenouille mange la libellule : relation entre deux êtres vivants. Le roseau a besoin de lumière et d’eau : relation entre un être vivant et son biotope.</li></ol>
        <p class="def"><b>Écosystème</b> = biotope + biocénose + les relations qui les unissent.</p>
        <p><b>Attention aux erreurs fréquentes.</b> L’eau bouge, mais elle n’est pas vivante : elle appartient au biotope. La température et la lumière ne se voient pas comme des objets, pourtant elles font partie du biotope. Un roseau est fixé au sol, pourtant il est vivant : il appartient à la biocénose.</p>` },
      { titre: "Je fais 2 — Je compare deux écosystèmes", html: `
        <p>Je compare la mare et une forêt de chêne-liège.</p>
        <table class="t"><tr><th></th><th>Mare</th><th>Forêt de chêne-liège</th></tr>
        <tr><th>Biotope</th><td>Eau douce calme, vase, lumière</td><td>Sol sableux, air, lumière filtrée par les arbres</td></tr>
        <tr><th>Biocénose</th><td>Roseaux, grenouilles, libellules</td><td>Chênes-lièges, sangliers, oiseaux, champignons</td></tr>
        <tr><th>Relations</th><td>Oui</td><td>Oui</td></tr></table>
        <p>Je lis le tableau <b>colonne par colonne</b> : les deux milieux n’ont ni le même biotope ni les mêmes êtres vivants. C’est la <b>diversité</b> des écosystèmes.</p>
        <p>Je lis ensuite <b>ligne par ligne</b> : dans les deux cas je retrouve un biotope, une biocénose et des relations. C’est l’<b>unité</b> des écosystèmes.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Une oasis", contexte: "Dans une oasis du sud du Maroc, on observe : des palmiers-dattiers, du sable, une source d’eau, des dromadaires, une forte chaleur, des scarabées, de la luzerne cultivée à l’ombre des palmiers.", docs: [], questions: [
        { id: "1AC-L1-g1", cap: "I2", pts: 1, type: "assoc", enonce: "Range chaque élément. Pose-toi la question : « Est-ce un être vivant ? »", gauche: ["Les palmiers-dattiers", "Le sable", "La forte chaleur", "Les scarabées", "La source d’eau"], droite: ["Biotope", "Biocénose"], rep: [1, 0, 0, 1, 0], retour: "Palmiers et scarabées sont des êtres vivants : biocénose. Sable, chaleur et eau caractérisent le milieu : biotope." },
        { id: "1AC-L1-g2", cap: "R2", pts: 1, type: "qcm", enonce: "Laquelle de ces phrases décrit une relation entre un être vivant et son biotope ?", options: ["La luzerne pousse grâce à l’eau de la source", "Le dromadaire mange la luzerne", "Le scarabée vit sous le palmier", "Le sable est chaud"], rep: 0, retour: "La luzerne est vivante, l’eau fait partie du biotope. « Le dromadaire mange la luzerne » relie deux êtres vivants." },
        { id: "1AC-L1-g3", cap: "K", pts: 1, type: "trous", enonce: "Complète la phrase.", texte: "L’oasis est un écosystème parce qu’on y trouve un {0}, une {1} et des {2} entre eux.", choix: [["biotope", "animal", "désert"], ["biocénose", "température", "source"], ["relations", "cailloux", "saisons"]], rep: [0, 0, 0], retour: "Écosystème = biotope + biocénose + relations." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Une côte rocheuse et une prairie", contexte: "Deux élèves ont noté ce qu’ils ont observé pendant une sortie.", docs: [
        { type: "table", titre: "Relevés de la sortie", cols: ["", "Côte rocheuse (Atlantique)", "Prairie de montagne"], rows: [["Température de l’air", "18 °C", "12 °C"], ["Sol ou support", "Rochers", "Sol épais et humide"], ["Eau", "Eau de mer salée", "Eau de pluie"], ["Êtres vivants observés", "Algues, moules, crabes, goélands", "Herbes, sauterelles, moutons, vers de terre"]] }
      ], questions: [
        { id: "1AC-L1-t1", cap: "I4", pts: 1, type: "qcm", enonce: "D’après le tableau, quel être vivant a été observé sur la côte rocheuse ?", options: ["Les moules", "Les sauterelles", "Les vers de terre", "Les moutons"], rep: 0, retour: "On lit la colonne « Côte rocheuse », à la ligne « Êtres vivants observés »." },
        { id: "1AC-L1-t2", cap: "I4", pts: 1, type: "assoc", enonce: "Range chaque élément du tableau.", gauche: ["Les rochers", "Les crabes", "L’eau de mer salée", "Les herbes", "La température de 12 °C"], droite: ["Biocénose", "Biotope"], rep: [1, 0, 1, 0, 1], retour: "Crabes et herbes sont vivants : biocénose. Rochers, eau salée et température : biotope." },
        { id: "1AC-L1-t3", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La biocénose est l’ensemble des êtres vivants d’un milieu.", v: true }, { t: "La température fait partie de la biocénose.", v: false }, { t: "Une plante fait partie du biotope parce qu’elle ne se déplace pas.", v: false }, { t: "Dans un écosystème, les êtres vivants ont des relations avec leur milieu.", v: true }], retour: "La température caractérise le milieu : biotope. Une plante est vivante : biocénose." },
        { id: "1AC-L1-t4", cap: "R2", pts: 1, type: "qcm", enonce: "La côte rocheuse et la prairie sont très différentes. Pourquoi dit-on pourtant que ce sont deux écosystèmes ?", options: ["Chacune comporte un biotope, une biocénose et des relations entre eux", "Elles ont la même température", "On y trouve les mêmes êtres vivants", "Elles sont toutes les deux au Maroc"], rep: 0, retour: "C’est l’unité des écosystèmes : mêmes composantes, même organisation." },
        { id: "1AC-L1-t5", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "Les deux milieux n’ont pas le même biotope : sur la côte l’eau est {0}, alors que dans la prairie elle vient de la {1}. Ils n’ont pas non plus les mêmes êtres vivants : c’est la {2} des écosystèmes.", choix: [["salée", "douce", "absente"], ["pluie", "mer", "source chaude"], ["diversité", "unité", "biocénose"]], rep: [0, 0, 0], retour: "Pour comparer, on prend le même critère dans les deux milieux et on relie les deux constats par « alors que »." }
      ] }
    ],
    cloture: `<ul><li>Le <b>biotope</b> est le milieu de vie avec ses caractéristiques : eau, sol, lumière, température.</li><li>La <b>biocénose</b> est l’ensemble des êtres vivants de ce milieu.</li><li>Un <b>écosystème</b> = biotope + biocénose + relations.</li><li><b>Diversité</b> : les écosystèmes diffèrent par leur biotope et leur biocénose. <b>Unité</b> : ils ont tous la même organisation.</li></ul>`
  });

  S.lecons["1AC"].push({
    id: "1AC-L2", u: 0, c: 0, s: 1,
    titre: "Leçon 2 — De l’être vivant à son groupe",
    objectif: "À la fin de la leçon, je sais placer un animal dans son groupe en utilisant ses caractères et une clé de détermination.",
    reussite: ["Je relève les caractères visibles d’un animal.", "Je suis une clé de détermination question par question.", "Je justifie le groupe trouvé par les caractères, pas par le lieu de vie."],
    prerequis: {
      html: `<p>Dans la leçon 1, tu as vu que la <b>biocénose</b> rassemble tous les êtres vivants d’un milieu. Ils sont très nombreux et très variés : pour s’y retrouver, les scientifiques les rangent en <b>groupes</b>.</p>`,
      quiz: [
        { id: "1AC-L2-a1", cap: "K", pts: 1, type: "qcm", enonce: "La biocénose d’une forêt, c’est :", options: ["l’ensemble des êtres vivants de la forêt", "le sol de la forêt", "la température de la forêt", "les arbres seulement"], rep: 0, retour: "Tous les êtres vivants : végétaux, animaux, champignons, êtres microscopiques." },
        { id: "1AC-L2-a2", cap: "K", pts: 1, type: "qcm", enonce: "Lequel de ces animaux possède un squelette interne avec une colonne vertébrale ?", options: ["Le chat", "L’escargot", "La mouche", "Le ver de terre"], rep: 0, retour: "Le chat a des os et une colonne vertébrale. L’escargot, la mouche et le ver de terre n’en ont pas." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je classe une grenouille", html: `
        <p class="ctx">Pour classer, je ne regarde ni où vit l’animal ni ce qu’il fait : je regarde <b>ce qu’il possède</b>. Ce sont ses <b>caractères</b>.</p>
        <table class="t"><tr><th>Question de la clé</th><th>Si oui</th><th>Si non</th></tr>
        <tr><td>1. A-t-il un squelette interne avec une colonne vertébrale ?</td><td>Vertébré → question 2</td><td>Invertébré</td></tr>
        <tr><td>2. A-t-il des poils et des mamelles ?</td><td>Mammifère</td><td>question 3</td></tr>
        <tr><td>3. A-t-il des plumes ?</td><td>Oiseau</td><td>question 4</td></tr>
        <tr><td>4. A-t-il des nageoires à rayons et des écailles ?</td><td>Poisson</td><td>question 5</td></tr>
        <tr><td>5. A-t-il la peau nue et humide ?</td><td>Amphibien</td><td>Peau sèche couverte d’écailles soudées : Reptile</td></tr></table>
        <p>Je réfléchis à voix haute : « La grenouille a des os et une colonne vertébrale : c’est un <b>vertébré</b>. A-t-elle des poils ? Non. Des plumes ? Non. Des nageoires à rayons ? Non, elle a quatre pattes. Sa peau est-elle nue et humide ? Oui. » La grenouille est un <b>amphibien</b>.</p>
        <p>Je vérifie : j’ai répondu à chaque question dans l’ordre, sans en sauter.</p>` },
      { titre: "Je fais 2 — Les pièges : ce qu’il ne faut pas faire", html: `
        <ul><li><b>Le dauphin vit dans l’eau, donc c’est un poisson ?</b> Non. Je regarde ses caractères : il allaite ses petits (mamelles), il respire par des poumons. C’est un <b>mammifère</b>.</li>
        <li><b>La chauve-souris vole, donc c’est un oiseau ?</b> Non. Elle a des poils et des mamelles, pas de plumes : c’est un <b>mammifère</b>.</li>
        <li><b>Le serpent n’a pas de pattes, donc c’est un invertébré ?</b> Non. Il a une colonne vertébrale et une peau sèche à écailles soudées : c’est un <b>reptile</b>.</li></ul>
        <p class="def">On classe les êtres vivants d’après les <b>caractères qu’ils partagent</b>, jamais d’après leur milieu de vie, leur taille ou leur façon de se déplacer.</p>
        <p>Les <b>invertébrés</b> n’ont pas de colonne vertébrale. Parmi eux : les <b>insectes</b> (six pattes articulées), les <b>arachnides</b> (huit pattes), les <b>mollusques</b> (corps mou, souvent une coquille), les <b>vers</b> (corps mou allongé, sans pattes).</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Quatre animaux à classer", contexte: "Utilise la clé de détermination du modelage. Réponds aux questions de la clé dans l’ordre.", docs: [
        { type: "table", titre: "Caractères relevés", cols: ["Animal", "Colonne vertébrale", "Revêtement du corps", "Membres"], rows: [["Sardine", "Oui", "Écailles", "Nageoires à rayons"], ["Cigogne", "Oui", "Plumes", "2 pattes, 2 ailes"], ["Lézard", "Oui", "Peau sèche, écailles soudées", "4 pattes"], ["Abeille", "Non", "Carapace fine", "6 pattes articulées, 4 ailes"]] }
      ], questions: [
        { id: "1AC-L2-g1", cap: "I4", pts: 1, type: "qcm", enonce: "D’après le tableau, quel animal n’a pas de colonne vertébrale ?", options: ["L’abeille", "La sardine", "Le lézard", "La cigogne"], rep: 0, retour: "On lit la colonne « Colonne vertébrale » : seule l’abeille a « Non ». C’est un invertébré." },
        { id: "1AC-L2-g2", cap: "R2", pts: 1, type: "assoc", enonce: "Place chaque animal dans son groupe.", gauche: ["Sardine", "Cigogne", "Lézard", "Abeille"], droite: ["Reptile", "Insecte", "Poisson", "Oiseau"], rep: [2, 3, 0, 1], retour: "Nageoires à rayons et écailles : poisson. Plumes : oiseau. Peau sèche à écailles soudées : reptile. Six pattes articulées : insecte." },
        { id: "1AC-L2-g3", cap: "R2", pts: 1, type: "qcm", enonce: "La cigogne et l’abeille ont toutes les deux des ailes. Peut-on les mettre dans le même groupe ?", options: ["Non : l’une a une colonne vertébrale et des plumes, l’autre non", "Oui : elles volent toutes les deux", "Oui : elles vivent dans le même milieu", "Non : l’abeille est trop petite"], rep: 0, retour: "Voler est une façon de se déplacer, pas un caractère de classification. La taille ne compte pas non plus." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Les animaux d’une sortie en forêt", contexte: "Au retour d’une sortie, la classe a relevé les caractères de cinq animaux.", docs: [
        { type: "table", titre: "Caractères relevés", cols: ["Animal", "Colonne vertébrale", "Revêtement du corps", "Autres caractères"], rows: [["Hérisson", "Oui", "Poils (piquants)", "Mamelles"], ["Crapaud", "Oui", "Peau nue et humide", "4 pattes"], ["Araignée", "Non", "Carapace fine", "8 pattes articulées"], ["Escargot", "Non", "Corps mou", "Coquille"], ["Tortue", "Oui", "Peau sèche, écailles soudées", "4 pattes, carapace"]] }
      ], questions: [
        { id: "1AC-L2-t1", cap: "I4", pts: 1, type: "assoc", enonce: "Vertébré ou invertébré ?", gauche: ["Hérisson", "Araignée", "Escargot", "Tortue"], droite: ["Invertébré", "Vertébré"], rep: [1, 0, 0, 1], retour: "On lit la colonne « Colonne vertébrale » : oui → vertébré ; non → invertébré." },
        { id: "1AC-L2-t2", cap: "R2", pts: 1, type: "assoc", enonce: "Place chaque animal dans son groupe.", gauche: ["Hérisson", "Crapaud", "Araignée", "Escargot", "Tortue"], droite: ["Mollusque", "Reptile", "Mammifère", "Arachnide", "Amphibien"], rep: [2, 4, 3, 0, 1], retour: "Poils et mamelles : mammifère. Peau nue et humide : amphibien. Huit pattes : arachnide. Corps mou et coquille : mollusque. Peau sèche à écailles soudées : reptile." },
        { id: "1AC-L2-t3", cap: "R2", pts: 1, type: "qcm", enonce: "L’araignée n’est pas un insecte parce que :", options: ["elle a huit pattes, alors qu’un insecte en a six", "elle ne vole pas", "elle vit dans une toile", "elle est dangereuse"], rep: 0, retour: "Le caractère qui sépare insectes et arachnides est le nombre de pattes articulées." },
        { id: "1AC-L2-t4", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "On classe un animal d’après les caractères qu’il possède.", v: true }, { t: "Tous les animaux qui vivent dans l’eau sont des poissons.", v: false }, { t: "Les oiseaux sont les seuls animaux à avoir des plumes.", v: true }, { t: "Un serpent est un invertébré parce qu’il n’a pas de pattes.", v: false }], retour: "Le milieu de vie ne classe pas. Le serpent a une colonne vertébrale : c’est un vertébré, du groupe des reptiles." },
        { id: "1AC-L2-t5", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les étapes pour classer un animal.", items: ["Observer l’animal et relever ses caractères", "Répondre à la première question de la clé", "Suivre les questions suivantes dans l’ordre", "Nommer le groupe et le justifier par les caractères"], retour: "Observer → première question → questions suivantes → nommer et justifier." }
      ] }
    ],
    cloture: `<ul><li>Pour classer un être vivant, on relève ses <b>caractères</b> (ce qu’il possède).</li><li>Les <b>vertébrés</b> ont une colonne vertébrale : poissons, amphibiens, reptiles, oiseaux, mammifères.</li><li>Les <b>invertébrés</b> n’en ont pas : insectes, arachnides, mollusques, vers…</li><li>Une <b>clé de détermination</b> se suit question par question.</li><li>Le milieu de vie et le mode de déplacement ne servent pas à classer.</li></ul>`
  });

  // ======================= 2AC — Chapitre 1 : Relations vivant-vivant =======================
  const gProies = {
    type: "graph", titre: "Nombre de pucerons et de coccinelles sur une parcelle de fèves", xlab: "Temps (semaines)", ylab: "Nombre d’individus (par plant)", xmax: 10, ymax: 100,
    series: [{ nom: "Pucerons", pts: [[0, 20], [2, 60], [4, 90], [6, 50], [8, 20], [10, 40]] }, { nom: "Coccinelles", pts: [[0, 2], [2, 4], [4, 10], [6, 16], [8, 8], [10, 4]] }]
  };
  S.lecons["2AC"].push({
    id: "2AC-L1", u: 0, c: 0, s: 0,
    titre: "Leçon 1 — Les relations d’exploitation : prédation et parasitisme",
    objectif: "À la fin de la leçon, je sais reconnaître une relation de prédation et une relation de parasitisme, et décrire leur effet sur le nombre d’individus.",
    reussite: ["Je dis qui profite de la relation et qui en souffre.", "Je distingue le prédateur du parasite.", "Je lis une courbe à plusieurs segments en citant des valeurs."],
    prerequis: {
      html: `<p>En 1AC, tu as appris qu’un écosystème réunit un <b>biotope</b>, une <b>biocénose</b> et des <b>relations</b>. Parmi ces relations, beaucoup sont <b>alimentaires</b> : un être vivant se nourrit d’un autre.</p>`,
      quiz: [
        { id: "2AC-L1-a1", cap: "K", pts: 1, type: "trous", enonce: "Complète.", texte: "Dans un écosystème, l’ensemble des êtres vivants forme la {0} ; ils ont des {1} entre eux et avec leur milieu.", choix: [["biocénose", "biotope", "population"], ["relations", "températures", "sols"]], rep: [0, 0], retour: "Biocénose = êtres vivants ; biotope = milieu ; l’écosystème inclut leurs relations." },
        { id: "2AC-L1-a2", cap: "K", pts: 1, type: "qcm", enonce: "Dans la chaîne « herbe → sauterelle → lézard », la flèche signifie :", options: ["« est mangé par »", "« mange »", "« vit avec »", "« est plus grand que »"], rep: 0, retour: "La flèche va de celui qui est mangé vers celui qui le mange." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je reconnais le type de relation", html: `
        <p class="ctx">Devant deux êtres vivants en relation, je me pose toujours les deux mêmes questions.</p>
        <ol><li><b>Qui profite ? Qui en souffre ?</b></li><li><b>Celui qui en souffre est-il tué et mangé, ou reste-t-il vivant ?</b></li></ol>
        <p><b>Exemple 1 : la coccinelle et le puceron.</b> « La coccinelle se nourrit : elle profite. Le puceron en souffre. Est-il tué ? Oui, la coccinelle le capture, le tue et le mange. » C’est une <b>prédation</b> : la coccinelle est le <b>prédateur</b>, le puceron est la <b>proie</b>.</p>
        <p><b>Exemple 2 : la tique et le chien.</b> « La tique se nourrit du sang du chien : elle profite. Le chien en souffre. Est-il tué et mangé ? Non : la tique reste fixée sur lui et se nourrit à ses dépens pendant longtemps. » C’est un <b>parasitisme</b> : la tique est le <b>parasite</b>, le chien est l’<b>hôte</b>.</p>
        <table class="t"><tr><th></th><th>Prédation</th><th>Parasitisme</th></tr>
        <tr><th>Celui qui profite</th><td>Le prédateur</td><td>Le parasite</td></tr><tr><th>Celui qui en souffre</th><td>La proie : tuée et mangée</td><td>L’hôte : reste vivant, affaibli</td></tr><tr><th>Durée</th><td>Courte</td><td>Longue</td></tr></table>
        <p class="def">Prédation et parasitisme sont des <b>relations d’exploitation</b> : un être vivant tire profit d’un autre, qui en souffre.</p>
        <p><b>Erreurs fréquentes.</b> Un parasite n’est pas toujours un animal : la cuscute est une plante sans chlorophylle qui parasite d’autres plantes. Un prédateur n’est pas toujours gros : la coccinelle est un prédateur.</p>` },
      { titre: "Je fais 2 — Je lis une courbe à plusieurs segments", html: `
        <p>Un graphique montre le nombre de pucerons au cours du temps. Voici comment je le lis.</p>
        <ol><li><b>Je lis le titre et les axes</b> : en bas le temps en semaines, à gauche le nombre de pucerons.</li>
        <li><b>Je découpe la courbe</b> là où elle change de sens : elle monte de 0 à 4 semaines, elle descend de 4 à 8 semaines.</li>
        <li><b>Pour chaque segment, je dis le sens et je cite deux valeurs</b> : « De la semaine 0 à la semaine 4, le nombre de pucerons augmente de 20 à 90. De la semaine 4 à la semaine 8, il diminue de 90 à 20. »</li></ol>
        <p><b>Ce qu’il ne faut pas faire</b> : écrire « la courbe monte puis descend » sans dire de quoi l’on parle ni citer de valeurs.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Pucerons et coccinelles", contexte: "Sur une parcelle de fèves, on compte chaque semaine les pucerons et les coccinelles.", docs: [gProies], questions: [
        { id: "2AC-L1-g1", cap: "I1", pts: 1, type: "num", enonce: "Combien de pucerons compte-t-on par plant à la semaine 4 ?", rep: 90, tol: 2, unite: "pucerons", retour: "On part de 4 sur l’axe du temps, on monte jusqu’à la courbe des pucerons, puis on lit la valeur sur l’axe vertical : 90." },
        { id: "2AC-L1-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Entre la semaine 4 et la semaine 8, le nombre de pucerons :", options: ["diminue de 90 à 20", "augmente de 20 à 90", "reste égal à 90", "diminue de 16 à 8"], rep: 0, retour: "On cite le sens de variation et les deux valeurs, lues sur la courbe des pucerons." },
        { id: "2AC-L1-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Le nombre de coccinelles augmente de la semaine 2 à la semaine 6. Quelle explication relie cette augmentation aux pucerons ?", options: ["Les pucerons sont nombreux : les coccinelles ont beaucoup de proies, elles se nourrissent et se reproduisent mieux", "Les coccinelles mangent les fèves", "Les pucerons mangent les coccinelles", "Il fait plus chaud"], rep: 0, retour: "Le nombre de prédateurs suit, avec un retard, le nombre de proies." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Des relations dans un champ", contexte: "Dans un champ et ses abords, on observe : un faucon qui capture un mulot ; des poux sur la tête d’un mouton ; de la cuscute enroulée autour de la luzerne, dont elle aspire la sève ; un caméléon qui attrape une mouche.", docs: [gProies], questions: [
        { id: "2AC-L1-t1", cap: "I2", pts: 1, type: "assoc", enonce: "Indique le type de relation.", gauche: ["Faucon et mulot", "Pou et mouton", "Cuscute et luzerne", "Caméléon et mouche"], droite: ["Parasitisme", "Prédation"], rep: [1, 0, 0, 1], retour: "Le mulot et la mouche sont tués et mangés : prédation. Le mouton et la luzerne restent vivants mais sont affaiblis : parasitisme." },
        { id: "2AC-L1-t2", cap: "K", pts: 1, type: "assoc", enonce: "Donne le rôle de chaque être vivant.", gauche: ["Le faucon", "Le mulot", "La cuscute", "La luzerne"], droite: ["Hôte", "Prédateur", "Parasite", "Proie"], rep: [1, 3, 2, 0], retour: "Prédateur / proie dans la prédation ; parasite / hôte dans le parasitisme." },
        { id: "2AC-L1-t3", cap: "I1", pts: 1, type: "num", enonce: "Sur le graphique, combien de coccinelles compte-t-on par plant à la semaine 6 ?", rep: 16, tol: 1, unite: "coccinelles", retour: "On lit la courbe des coccinelles, pas celle des pucerons : 16 à la semaine 6." },
        { id: "2AC-L1-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Entre la semaine 6 et la semaine 8, le nombre de coccinelles diminue de 16 à 8. Pourquoi ?", options: ["Les pucerons sont devenus rares : les coccinelles manquent de nourriture", "Les pucerons ont mangé les coccinelles", "Les coccinelles sont devenues des parasites", "Les fèves ont été récoltées"], rep: 0, retour: "Quand les proies diminuent, les prédateurs diminuent à leur tour." },
        { id: "2AC-L1-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Dans le parasitisme, l’hôte est tué et mangé immédiatement.", v: false }, { t: "Une plante peut être un parasite.", v: true }, { t: "La prédation et le parasitisme sont des relations d’exploitation.", v: true }, { t: "Dans une prédation, la proie profite de la relation.", v: false }], retour: "Le parasite vit aux dépens d’un hôte qui reste vivant ; dans les deux relations, un seul des deux profite." }
      ] }
    ],
    cloture: `<ul><li><b>Prédation</b> : le prédateur capture, tue et mange la proie.</li><li><b>Parasitisme</b> : le parasite vit aux dépens d’un hôte qui reste vivant mais affaibli.</li><li>Ce sont des <b>relations d’exploitation</b> : l’un profite, l’autre en souffre.</li><li>Le nombre de prédateurs dépend du nombre de proies, et inversement.</li><li>Pour lire une courbe : je la découpe en segments, je donne le sens et deux valeurs pour chacun.</li></ul>`
  });

  const tParam = {
    type: "table", titre: "Nombre de paramécies par millilitre dans un milieu où la nourriture est limitée", cols: ["Jour", "0", "4", "8", "12", "16"],
    rows: [["Espèce A, cultivée seule", "20", "150", "400", "500", "500"], ["Espèce B, cultivée seule", "20", "60", "150", "200", "200"], ["Espèce A, cultivée avec B", "20", "120", "300", "380", "400"], ["Espèce B, cultivée avec A", "20", "50", "60", "20", "0"]]
  };
  S.lecons["2AC"].push({
    id: "2AC-L2", u: 0, c: 0, s: 1,
    titre: "Leçon 2 — Les relations de compétition et de mutualisme",
    objectif: "À la fin de la leçon, je sais reconnaître une compétition et un mutualisme, et les distinguer des relations d’exploitation.",
    reussite: ["Je dis pour chacun des deux êtres vivants s’il gagne (+) ou s’il perd (−).", "Je nomme la ressource disputée dans une compétition.", "Je lis un tableau à plusieurs lignes en comparant deux situations."],
    prerequis: {
      html: `<p>Dans la leçon 1, tu as appris à te demander <b>« Qui profite ? Qui en souffre ? »</b>. Dans la prédation et le parasitisme, l’un profite (+) et l’autre en souffre (−).</p>`,
      quiz: [
        { id: "2AC-L2-a1", cap: "K", pts: 1, type: "assoc", enonce: "Rappelle le type de relation.", gauche: ["Le renard capture et mange un lapin", "Le ténia vit dans l’intestin de l’Homme et s’y nourrit"], droite: ["Parasitisme", "Prédation"], rep: [1, 0], retour: "Proie tuée et mangée : prédation. Hôte vivant et affaibli : parasitisme." },
        { id: "2AC-L2-a2", cap: "K", pts: 1, type: "qcm", enonce: "Dans une relation d’exploitation :", options: ["l’un profite et l’autre en souffre", "les deux profitent", "les deux en souffrent", "aucun des deux n’est concerné"], rep: 0, retour: "On peut le noter (+ / −)." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je note + ou − pour chacun", html: `
        <p class="ctx">Je garde ma question « Qui profite ? Qui en souffre ? », mais je réponds pour <b>chacun des deux</b> êtres vivants, avec un signe.</p>
        <p><b>Exemple 1 : deux jeunes arbres qui poussent côte à côte.</b> « Les deux ont besoin de la même lumière et de la même eau du sol. Chacun en reçoit moins que s’il était seul. L’arbre 1 : −. L’arbre 2 : −. » Les deux en souffrent : c’est une <b>compétition</b>. La <b>ressource</b> disputée est la lumière et l’eau.</p>
        <p><b>Exemple 2 : l’abeille et la fleur.</b> « L’abeille récolte le nectar : +. En passant de fleur en fleur, elle transporte le pollen, ce qui permet à la plante de se reproduire : +. » Les deux profitent : c’est un <b>mutualisme</b>.</p>
        <table class="t"><tr><th>Relation</th><th>Être vivant 1</th><th>Être vivant 2</th></tr>
        <tr><th>Prédation, parasitisme</th><td>+</td><td>−</td></tr><tr><th>Compétition</th><td>−</td><td>−</td></tr><tr><th>Mutualisme</th><td>+</td><td>+</td></tr></table>
        <p class="def"><b>Compétition</b> : des êtres vivants recherchent la même ressource, qui est en quantité limitée. Elle peut opposer des individus de la <b>même espèce</b> ou d’<b>espèces différentes</b>.</p>
        <p class="def"><b>Mutualisme</b> : relation à bénéfice réciproque. Quand les deux partenaires ne peuvent pas vivre l’un sans l’autre, on parle de <b>symbiose</b> : le lichen associe une algue et un champignon.</p>
        <p><b>Erreur fréquente</b> : la compétition n’est pas un combat. Deux plantes qui ne se touchent pas sont en compétition si elles puisent la même eau.</p>` },
      { titre: "Je fais 2 — Je compare deux lignes d’un tableau", html: `
        <p>On cultive deux espèces de paramécies, seules puis ensemble. Voici comment je compare.</p>
        <ol><li><b>Je repère ce qui change</b> entre les deux lignes : l’espèce B est cultivée seule, puis avec l’espèce A.</li>
        <li><b>Je lis la même colonne dans les deux lignes</b> : au jour 16, B seule = 200 ; B avec A = 0.</li>
        <li><b>Je rédige avec « alors que »</b> : « Au jour 16, on compte 200 paramécies B par millilitre quand elles sont seules, alors qu’il n’en reste aucune quand elles sont cultivées avec A. »</li>
        <li><b>Je conclus seulement après</b> : la présence de A empêche B de se maintenir.</li></ol>` }
    ],
    guidee: [
      { titre: "Nous faisons — Deux espèces de paramécies", contexte: "Les paramécies sont des êtres vivants microscopiques. Les deux espèces se nourrissent des mêmes bactéries.", docs: [tParam], questions: [
        { id: "2AC-L2-g1", cap: "I4", pts: 1, type: "num", enonce: "Combien de paramécies A par millilitre compte-t-on au jour 12 quand elles sont cultivées seules ?", rep: 500, tol: 0, unite: "par mL", retour: "Ligne « Espèce A, cultivée seule », colonne « 12 »." },
        { id: "2AC-L2-g2", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "Au jour 16, on compte {0} paramécies A par millilitre quand elles sont seules, alors qu’on en compte {1} quand elles sont cultivées avec B.", choix: [["500", "200", "400"], ["400", "500", "0"]], rep: [0, 0], retour: "On lit la colonne « 16 » dans les lignes 1 et 3." },
        { id: "2AC-L2-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Cultivées ensemble, les deux espèces sont moins nombreuses que seules. Quelle relation existe entre elles ?", options: ["Une compétition : elles se disputent la même nourriture, en quantité limitée", "Une prédation : A mange B", "Un mutualisme : chacune aide l’autre", "Un parasitisme : B vit dans A"], rep: 0, retour: "Les deux en souffrent (− / −) et la ressource commune est limitée : compétition entre espèces différentes." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Des relations à reconnaître", contexte: "Voici quatre situations. (1) Dans une forêt dense, les jeunes cèdres poussent mal à l’ombre des grands cèdres. (2) Sur les racines de la fève, des bactéries logées dans de petites boules (nodosités) fournissent de l’azote à la plante, qui leur fournit des sucres. (3) Des lions et des hyènes se disputent la même carcasse. (4) L’oiseau pique-bœuf mange les tiques sur le dos du buffle.", docs: [tParam], questions: [
        { id: "2AC-L2-t1", cap: "I2", pts: 1, type: "assoc", enonce: "Indique le type de relation.", gauche: ["(1) Jeunes cèdres et grands cèdres", "(2) Fève et bactéries des nodosités", "(3) Lions et hyènes", "(4) Pique-bœuf et buffle"], droite: ["Mutualisme", "Compétition"], rep: [1, 0, 1, 0], retour: "Même ressource disputée (lumière, carcasse) : compétition. Bénéfice pour les deux : mutualisme." },
        { id: "2AC-L2-t2", cap: "R2", pts: 1, type: "qcm", enonce: "Dans la situation (1), quelle est la ressource disputée ?", options: ["La lumière", "Les tiques", "L’azote de l’air", "La carcasse"], rep: 0, retour: "Les jeunes cèdres sont à l’ombre des grands : ils manquent de lumière. C’est une compétition entre individus de la même espèce." },
        { id: "2AC-L2-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque relation à ses signes.", gauche: ["Compétition", "Mutualisme", "Parasitisme"], droite: ["+ / +", "+ / −", "− / −"], rep: [2, 0, 1], retour: "Compétition : les deux perdent. Mutualisme : les deux gagnent. Exploitation : un seul gagne." },
        { id: "2AC-L2-t4", cap: "I4", pts: 1, type: "num", enonce: "D’après le tableau, combien de paramécies B par millilitre reste-t-il au jour 12 quand elles sont cultivées avec A ?", rep: 20, tol: 0, unite: "par mL", retour: "Ligne « Espèce B, cultivée avec A », colonne « 12 »." },
        { id: "2AC-L2-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une compétition peut exister entre deux individus de la même espèce.", v: true }, { t: "Dans un mutualisme, un seul des deux partenaires profite.", v: false }, { t: "Le lichen est une symbiose entre une algue et un champignon.", v: true }, { t: "Deux plantes ne peuvent pas être en compétition car elles ne se déplacent pas.", v: false }], retour: "La compétition porte sur une ressource limitée (lumière, eau, sels minéraux), même sans contact." }
      ] }
    ],
    cloture: `<ul><li><b>Compétition</b> (− / −) : des êtres vivants se disputent une ressource limitée ; entre individus de la même espèce ou d’espèces différentes.</li><li><b>Mutualisme</b> (+ / +) : chacun tire profit de l’autre. S’ils ne peuvent pas vivre séparés : <b>symbiose</b>.</li><li><b>Exploitation</b> (+ / −) : prédation et parasitisme.</li><li>Pour comparer deux lignes d’un tableau : même colonne, deux valeurs, « alors que ».</li></ul>`
  });
})();
