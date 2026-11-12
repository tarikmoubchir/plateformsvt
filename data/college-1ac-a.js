// 1AC — Thème 1 (suite) : chapitre 2 « Les systèmes organiques selon l'environnement » et chapitre 3 « La cellule ».
// Même modèle que college.js : enseignement explicite (ouverture, je fais, nous faisons, tu fais, je retiens).
(function () {
  const L = window.SVT.lecons["1AC"];

  // ---------- Chapitre 2, séquence 1 ----------
  L.push({
    id: "1AC-L3", u: 0, c: 1, s: 0,
    titre: "Leçon 3 — La démarche d’investigation expérimentale",
    objectif: "À la fin de la leçon, je sais remettre dans l’ordre les étapes d’une démarche expérimentale, repérer le facteur qui varie et dire à quoi sert le témoin.",
    reussite: ["Je distingue le problème, l’hypothèse, le résultat et la conclusion.", "Je repère le seul facteur qui change entre deux lots.", "Je conclus en disant si l’hypothèse est validée ou non."],
    prerequis: {
      html: `<p>Un scientifique ne se contente pas de donner son avis : il <b>vérifie</b>. Pour cela, il part d’une question à laquelle une expérience peut répondre.</p>`,
      quiz: [
        { id: "1AC-L3-a1", cap: "K", pts: 1, type: "qcm", enonce: "Laquelle de ces phrases est une question que l’on peut vérifier par une expérience ?", options: ["Les graines ont-elles besoin d’eau pour germer ?", "Les graines sont jolies.", "J’aime les lentilles.", "Les graines sont dans un sachet."], rep: 0, retour: "Une question scientifique peut être testée : on peut donner de l’eau à certaines graines et pas à d’autres." },
        { id: "1AC-L3-a2", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Un être vivant a des besoins, par exemple de l’eau.", v: true }, { t: "Une graine sèche est un être vivant : elle peut germer.", v: true }, { t: "Pour savoir si une idée est juste, il suffit de la répéter.", v: false }], retour: "Une idée devient une connaissance quand elle a été vérifiée." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je suis les six étapes", html: `
        <p class="ctx">Je réfléchis à voix haute sur un exemple : les graines de lentille.</p>
        <ol><li><b>Observation.</b> « Des lentilles oubliées dans un sachet sec ne germent pas. Celles tombées sur une éponge mouillée ont germé. »</li>
        <li><b>Problème.</b> Je transforme mon observation en question : « Les graines ont-elles besoin d’eau pour germer ? »</li>
        <li><b>Hypothèse.</b> Je propose une réponse possible, que je ne connais pas encore : « Je suppose que l’eau est nécessaire à la germination. »</li>
        <li><b>Expérience.</b> Je prépare deux lots de 10 graines. Lot A : coton <b>humide</b>. Lot B : coton <b>sec</b>. Tout le reste est identique : mêmes graines, même température, même lumière.</li>
        <li><b>Résultats.</b> Je note ce que je vois, sans expliquer : « Après 5 jours, 9 graines ont germé dans le lot A, aucune dans le lot B. »</li>
        <li><b>Conclusion.</b> Je réponds au problème : « Les graines ont besoin d’eau pour germer. Mon hypothèse est validée. »</li></ol>
        <p class="def">Le lot placé dans les conditions habituelles (ici le lot A, avec de l’eau) est le <b>témoin</b> : il sert de <b>comparaison</b>. Entre le témoin et l’autre lot, <b>un seul facteur</b> change.</p>` },
      { titre: "Je fais 2 — Les erreurs à éviter", html: `
        <ul><li><b>Changer deux facteurs à la fois.</b> Si je mets le lot A humide au chaud et le lot B sec au froid, je ne saurai pas si c’est l’eau ou la température qui a agi. Je ne peux pas conclure.</li>
        <li><b>Utiliser une seule graine par lot.</b> Si elle ne germe pas, c’est peut-être une graine abîmée. Avec 10 graines, le résultat est plus sûr.</li>
        <li><b>Confondre résultat et conclusion.</b> « 9 graines ont germé » est un résultat : je le vois. « L’eau est nécessaire » est une conclusion : je le déduis.</li>
        <li><b>Croire qu’une hypothèse fausse est un échec.</b> Si l’expérience ne confirme pas l’hypothèse, on dit qu’elle est <b>rejetée</b>, et on en propose une autre. C’est aussi un résultat.</li></ul>` }
    ],
    guidee: [
      { titre: "Nous faisons — Les cloportes et la lumière", contexte: "On trouve les cloportes sous les pierres. Des élèves se demandent : « Les cloportes préfèrent-ils l’obscurité ? » Ils placent 10 cloportes au milieu d’une boîte dont une moitié est éclairée et l’autre recouverte d’un carton. Le sol est humide partout et la température est la même.", docs: [
        { type: "table", titre: "Position des cloportes dans la boîte", cols: ["Moitié de la boîte", "Éclairée", "Sombre"], rows: [["Nombre de cloportes au début", "5", "5"], ["Nombre de cloportes après 10 minutes", "2", "8"]] }
      ], questions: [
        { id: "1AC-L3-g1", cap: "R3", pts: 1, type: "qcm", enonce: "Quel est le seul facteur qui change entre les deux moitiés de la boîte ?", options: ["La lumière", "L’humidité du sol", "La température", "Le nombre de cloportes"], rep: 0, retour: "L’humidité et la température sont les mêmes partout : seule la lumière diffère." },
        { id: "1AC-L3-g2", cap: "I4", pts: 1, type: "num", enonce: "Combien de cloportes se trouvent dans la moitié sombre après 10 minutes ?", rep: 8, tol: 0, unite: "cloportes", retour: "Colonne « Sombre », ligne « après 10 minutes »." },
        { id: "1AC-L3-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Quelle conclusion peut-on écrire ?", options: ["Les cloportes préfèrent l’obscurité : l’hypothèse est validée", "8 cloportes sont dans la moitié sombre", "Les cloportes préfèrent l’humidité", "Les cloportes ont peur du carton"], rep: 0, retour: "« 8 cloportes sont dans la moitié sombre » est un résultat. La conclusion répond au problème posé. L’humidité n’a pas été testée." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — La germination et la température", contexte: "Des élèves se demandent si la température agit sur la germination. Ils préparent deux lots de 20 graines de lentille sur du coton humide, à l’obscurité. Le lot A est placé à 20 °C, le lot B à 5 °C.", docs: [
        { type: "table", titre: "Nombre de graines germées", cols: ["Jour", "0", "2", "4", "6"], rows: [["Lot A (20 °C)", "0", "6", "15", "18"], ["Lot B (5 °C)", "0", "0", "1", "2"]] }
      ], questions: [
        { id: "1AC-L3-t1", cap: "R3", pts: 1, type: "qcm", enonce: "Quel est le facteur qui varie entre les deux lots ?", options: ["La température", "L’eau", "La lumière", "Le nombre de graines"], rep: 0, retour: "Les deux lots sont humides, à l’obscurité et comptent 20 graines : seule la température change." },
        { id: "1AC-L3-t2", cap: "R3", pts: 1, type: "vf", enonce: "Pour que l’expérience soit correcte… Vrai ou faux ?", items: [{ t: "Le nombre de graines doit être le même dans les deux lots.", v: true }, { t: "On peut arroser un lot et pas l’autre.", v: false }, { t: "Les graines doivent être de la même espèce.", v: true }, { t: "On peut mettre le lot A à la lumière et le lot B à l’obscurité.", v: false }], retour: "Un seul facteur doit changer : ici la température. Tout le reste reste identique." },
        { id: "1AC-L3-t3", cap: "I4", pts: 1, type: "num", enonce: "Combien de graines ont germé dans le lot A au jour 4 ?", rep: 15, tol: 0, unite: "graines", retour: "Ligne « Lot A (20 °C) », colonne « 4 »." },
        { id: "1AC-L3-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Quelle conclusion répond au problème ?", options: ["La température agit sur la germination : les lentilles germent mieux à 20 °C qu’à 5 °C", "Au jour 6, 18 graines ont germé dans le lot A", "Les graines ont besoin d’eau pour germer", "Les lentilles ne germent jamais au froid"], rep: 0, retour: "La conclusion répond à la question posée. Deux graines ont germé à 5 °C : on ne peut pas écrire « jamais »." },
        { id: "1AC-L3-t5", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les étapes de la démarche expérimentale.", items: ["Observation", "Problème", "Hypothèse", "Expérience", "Résultats", "Conclusion"], retour: "J’observe, je pose une question, je propose une réponse, je la teste, je note ce que je vois, je réponds à la question." }
      ] }
    ],
    cloture: `<ul><li>La démarche expérimentale suit six étapes : <b>observation, problème, hypothèse, expérience, résultats, conclusion</b>.</li><li>Dans une expérience, <b>un seul facteur</b> change ; le <b>témoin</b> sert de comparaison.</li><li>Le <b>résultat</b> est ce que j’observe ; la <b>conclusion</b> est ce que j’en déduis pour répondre au problème.</li><li>Une hypothèse est <b>validée</b> ou <b>rejetée</b> par l’expérience.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 2 ----------
  const gCriquet = {
    type: "graph", titre: "Pourcentage de dioxygène dans l’air de deux bocaux fermés", xlab: "Temps (min)", ylab: "Dioxygène dans l’air (%)", xmax: 15, ymax: 25,
    series: [{ nom: "Bocal avec un criquet", pts: [[0, 21], [5, 20], [10, 19], [15, 18]] }, { nom: "Bocal sans criquet (témoin)", pts: [[0, 21], [5, 21], [10, 21], [15, 21]] }]
  };
  L.push({
    id: "1AC-L4", u: 0, c: 1, s: 1,
    titre: "Leçon 4 — L’appareil respiratoire selon l’environnement",
    objectif: "À la fin de la leçon, je sais relier l’organe respiratoire d’un animal au milieu dans lequel il prélève le dioxygène.",
    reussite: ["Je dis si l’animal prélève le dioxygène dans l’air ou dans l’eau.", "Je nomme son organe respiratoire : poumons, branchies, trachées ou peau.", "Je lis une courbe simple en citant deux valeurs."],
    prerequis: {
      html: `<p><b>Respirer</b>, c’est prélever du <b>dioxygène</b> dans son milieu et y rejeter du <b>dioxyde de carbone</b>. L’air contient du dioxygène ; l’eau aussi, sous forme <b>dissoute</b>.</p>`,
      quiz: [
        { id: "1AC-L4-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quand un être vivant respire, il prélève dans son milieu :", options: ["du dioxygène", "du dioxyde de carbone", "de la lumière", "du sable"], rep: 0, retour: "Il prélève du dioxygène et rejette du dioxyde de carbone." },
        { id: "1AC-L4-a2", cap: "K", pts: 1, type: "assoc", enonce: "Dans quel milieu vit chaque animal ?", gauche: ["La sardine", "Le pigeon", "Le criquet", "La truite"], droite: ["Milieu aquatique", "Milieu aérien"], rep: [0, 1, 1, 0], retour: "Sardine et truite vivent dans l’eau ; pigeon et criquet vivent dans l’air." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je trouve l’organe respiratoire", html: `
        <p class="ctx">Je me pose deux questions, toujours dans le même ordre.</p>
        <ol><li><b>Où l’animal prélève-t-il son dioxygène : dans l’air ou dans l’eau ?</b></li><li><b>Quel organe lui permet de le faire ?</b></li></ol>
        <p><b>Le poisson.</b> « L’eau entre par sa bouche et ressort par les ouïes. Sous les ouïes, je vois des lames rouges, très fines : les <b>branchies</b>. Elles sont rouges parce qu’elles sont riches en sang. Le dioxygène dissous dans l’eau passe dans le sang. » Le poisson prélève le dioxygène <b>dans l’eau</b>, grâce à ses branchies.</p>
        <p><b>Le criquet.</b> « Sur les côtés de son abdomen, je vois de petits orifices. Ils s’ouvrent sur des tubes fins et ramifiés qui conduisent l’air dans tout le corps : les <b>trachées</b>. » Le criquet prélève le dioxygène <b>dans l’air</b>, grâce à ses trachées.</p>
        <table class="t"><tr><th>Organe respiratoire</th><th>Dioxygène prélevé dans…</th><th>Exemples</th></tr>
        <tr><th>Poumons</th><td>l’air</td><td>Homme, mouton, pigeon, lézard, dauphin</td></tr><tr><th>Trachées</th><td>l’air</td><td>Insectes : criquet, abeille, mouche</td></tr>
        <tr><th>Branchies</th><td>l’eau</td><td>Poissons, têtard, crabe</td></tr><tr><th>Peau fine et humide</th><td>l’air humide ou l’eau</td><td>Ver de terre ; grenouille (en plus de ses poumons)</td></tr></table>
        <p><b>Attention.</b> Le dauphin vit dans l’eau, mais il a des <b>poumons</b> : il doit remonter à la surface pour respirer l’air. Ce qui compte n’est pas le lieu où vit l’animal, c’est le milieu où il <b>prélève le dioxygène</b>.</p>` },
      { titre: "Je fais 2 — Je lis une courbe simple", html: `
        <p>On place un poisson dans un bocal fermé rempli d’eau. On mesure le dioxygène dissous : 8 mg/L au début, 6,5 mg/L après 10 minutes, 5 mg/L après 20 minutes, 3,5 mg/L après 30 minutes.</p>
        <ol><li><b>Je lis le titre et les axes</b> : en bas le temps en minutes, à gauche le dioxygène dissous en mg/L.</li>
        <li><b>Je regarde le sens de la courbe</b> : elle descend.</li>
        <li><b>Je rédige avec deux valeurs</b> : « De 0 à 30 minutes, le dioxygène dissous dans l’eau diminue de 8 à 3,5 mg/L. »</li>
        <li><b>Je conclus</b> : le poisson prélève le dioxygène dissous dans l’eau.</li></ol>
        <p>Dans un bocal identique <b>sans poisson</b> (le témoin), le dioxygène reste à 8 mg/L : la diminution est bien due au poisson.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Quatre animaux", contexte: "Voici ce que l’on observe chez quatre animaux.", docs: [
        { type: "table", titre: "Observations", cols: ["Animal", "Il prélève le dioxygène dans…", "Ce que l’on observe"], rows: [["Truite", "l’eau", "Des lames rouges sous les ouïes"], ["Criquet", "l’air", "De petits tubes ramifiés, ouverts par des orifices sur l’abdomen"], ["Mouton", "l’air", "Deux sacs spongieux dans le thorax"], ["Ver de terre", "l’air du sol", "Une peau fine, toujours humide"]] }
      ], questions: [
        { id: "1AC-L4-g1", cap: "I4", pts: 1, type: "assoc", enonce: "Nomme l’organe respiratoire de chaque animal.", gauche: ["Truite", "Criquet", "Mouton", "Ver de terre"], droite: ["Poumons", "Peau", "Branchies", "Trachées"], rep: [2, 3, 0, 1], retour: "Lames rouges sous les ouïes : branchies. Tubes ramifiés : trachées. Sacs spongieux dans le thorax : poumons. Peau fine et humide : respiration par la peau." },
        { id: "1AC-L4-g2", cap: "I4", pts: 1, type: "qcm", enonce: "Quel animal du tableau prélève le dioxygène dissous dans l’eau ?", options: ["La truite", "Le criquet", "Le mouton", "Le ver de terre"], rep: 0, retour: "On lit la deuxième colonne : seule la truite prélève le dioxygène dans l’eau." },
        { id: "1AC-L4-g3", cap: "R2", pts: 1, type: "qcm", enonce: "La tortue marine vit dans la mer, mais elle remonte régulièrement à la surface. Quel est son organe respiratoire ?", options: ["Des poumons, car elle prélève le dioxygène dans l’air", "Des branchies, car elle vit dans l’eau", "Des trachées, car elle a une carapace", "La peau, car elle est mouillée"], rep: 0, retour: "Elle remonte pour respirer l’air : elle a des poumons. Le lieu de vie ne suffit pas pour trouver l’organe." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Un criquet dans un bocal", contexte: "On enferme un criquet dans un bocal rempli d’air. On prépare un second bocal identique, sans criquet. On mesure le pourcentage de dioxygène dans l’air des deux bocaux.", docs: [gCriquet], questions: [
        { id: "1AC-L4-t1", cap: "I1", pts: 1, type: "num", enonce: "Quel est le pourcentage de dioxygène dans le bocal avec le criquet à 15 minutes ?", rep: 18, tol: 0.3, unite: "%", retour: "On part de 15 sur l’axe du temps, on monte jusqu’à la courbe « avec un criquet », puis on lit à gauche : 18 %." },
        { id: "1AC-L4-t2", cap: "I1", pts: 1, type: "qcm", enonce: "Comment varie le dioxygène dans le bocal avec le criquet ?", options: ["Il diminue de 21 % à 18 % en 15 minutes", "Il augmente de 18 % à 21 % en 15 minutes", "Il reste égal à 21 %", "Il diminue de 21 % à 0 %"], rep: 0, retour: "On donne le sens (diminue) et deux valeurs (21 % et 18 %)." },
        { id: "1AC-L4-t3", cap: "R3", pts: 1, type: "qcm", enonce: "À quoi sert le bocal sans criquet ?", options: ["C’est le témoin : il montre que la diminution du dioxygène est due au criquet", "À avoir plus de résultats", "À donner de l’air au criquet", "Il ne sert à rien"], rep: 0, retour: "Sans criquet, le dioxygène reste à 21 % : c’est donc bien le criquet qui le prélève." },
        { id: "1AC-L4-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque animal à son organe respiratoire.", gauche: ["La sardine", "L’abeille", "Le chat", "La baleine"], droite: ["Trachées", "Branchies", "Poumons"], rep: [1, 0, 2, 2], retour: "Poisson : branchies. Insecte : trachées. Le chat et la baleine sont des mammifères : poumons." },
        { id: "1AC-L4-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Tous les animaux qui vivent dans l’eau respirent par des branchies.", v: false }, { t: "Les branchies prélèvent le dioxygène dissous dans l’eau.", v: true }, { t: "Les insectes respirent par des trachées.", v: true }, { t: "L’organe respiratoire dépend du milieu où l’animal prélève le dioxygène.", v: true }], retour: "La baleine, le dauphin et la tortue marine vivent dans l’eau mais respirent l’air avec des poumons." }
      ] }
    ],
    cloture: `<ul><li>Respirer, c’est prélever du dioxygène et rejeter du dioxyde de carbone.</li><li>Dans l’<b>air</b> : <b>poumons</b> (mammifères, oiseaux, reptiles) ou <b>trachées</b> (insectes).</li><li>Dans l’<b>eau</b> : <b>branchies</b> (poissons, têtards).</li><li>Certains animaux respirent aussi par la <b>peau</b> (ver de terre, grenouille).</li><li>L’organe respiratoire est adapté au milieu où l’animal prélève le dioxygène.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 3 ----------
  const tIntestin = { type: "table", titre: "Longueur de l’intestin comparée à la longueur du corps (valeurs approximatives)", cols: ["Animal", "Régime alimentaire", "L’intestin mesure environ…"], rows: [["Chat", "Carnivore", "4 fois la longueur du corps"], ["Chien", "Carnivore", "6 fois la longueur du corps"], ["Lapin", "Herbivore", "10 fois la longueur du corps"], ["Mouton", "Herbivore", "27 fois la longueur du corps"]] };
  L.push({
    id: "1AC-L5", u: 0, c: 1, s: 2,
    titre: "Leçon 5 — L’appareil digestif selon l’environnement",
    objectif: "À la fin de la leçon, je sais retrouver le régime alimentaire d’un animal à partir de ses dents et de son tube digestif.",
    reussite: ["Je reconnais les incisives, les canines et les molaires et je dis leur rôle.", "Je relie la forme des dents au régime alimentaire.", "Je compare la longueur de l’intestin d’un herbivore et d’un carnivore."],
    prerequis: {
      html: `<p>Chaque animal se nourrit de ce qu’il trouve dans son <b>milieu de vie</b>. Selon sa nourriture, on dit qu’il est <b>herbivore</b> (il mange des végétaux), <b>carnivore</b> (il mange d’autres animaux) ou <b>omnivore</b> (il mange les deux).</p>`,
      quiz: [
        { id: "1AC-L5-a1", cap: "K", pts: 1, type: "assoc", enonce: "Que mange chaque animal ?", gauche: ["La vache", "Le lion", "La poule"], droite: ["Des végétaux seulement", "Des animaux seulement", "Des végétaux et des animaux"], rep: [0, 1, 2], retour: "La vache broute l’herbe, le lion chasse, la poule mange des graines et des vers." },
        { id: "1AC-L5-a2", cap: "K", pts: 1, type: "qcm", enonce: "À quoi servent les dents ?", options: ["À couper et à broyer les aliments", "À respirer", "À sentir les odeurs", "À avaler l’eau"], rep: 0, retour: "Les dents réduisent les aliments en petits morceaux." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je lis une mâchoire", html: `
        <p class="ctx">Devant un crâne, je regarde les trois sortes de dents, de l’avant vers le fond.</p>
        <table class="t"><tr><th>Dent</th><th>Place</th><th>Rôle</th></tr><tr><th>Incisives</th><td>À l’avant</td><td>Couper</td></tr><tr><th>Canines</th><td>Sur les côtés</td><td>Déchirer</td></tr><tr><th>Molaires</th><td>Au fond</td><td>Broyer ou trancher</td></tr></table>
        <p><b>Le chat.</b> « Ses incisives sont petites. Ses canines sont longues et pointues : ce sont des crocs, ils servent à tuer la proie et à déchirer la viande. Ses molaires sont tranchantes comme des lames de ciseaux. » Ces dents sont faites pour la viande : le chat est <b>carnivore</b>.</p>
        <p><b>La vache.</b> « Elle n’a pas de canines. Ses molaires sont larges et plates, avec une surface râpeuse : elles broient l’herbe comme une meule. » La vache est <b>herbivore</b>.</p>
        <p><b>L’Homme.</b> « Il possède les trois sortes de dents, peu spécialisées, et ses molaires sont bosselées. » L’Homme est <b>omnivore</b>.</p>
        <p><b>Attention.</b> La taille de l’animal ne dit rien de son régime : l’éléphant est herbivore, la coccinelle est carnivore.</p>` },
      { titre: "Je fais 2 — Je compare les tubes digestifs", html: `
        <p>Je lis la troisième colonne du tableau, ligne par ligne.</p>
        <table class="t"><tr><th>Animal</th><th>Régime</th><th>L’intestin mesure environ…</th></tr><tr><td>Chat</td><td>Carnivore</td><td>4 fois la longueur du corps</td></tr><tr><td>Mouton</td><td>Herbivore</td><td>27 fois la longueur du corps</td></tr></table>
        <p>« L’intestin du chat mesure environ 4 fois la longueur de son corps, <b>alors que</b> celui du mouton mesure environ 27 fois la longueur du sien. »</p>
        <p>J’explique : l’herbe est difficile à digérer. Elle doit rester longtemps dans le tube digestif, qui est donc très long. Chez la vache et le mouton, l’estomac a plusieurs poches et l’animal <b>rumine</b> : il fait remonter l’herbe dans sa bouche pour la mâcher une seconde fois. La viande se digère plus vite : l’intestin du carnivore est court.</p>
        <p class="def">Les dents et le tube digestif d’un animal sont <b>adaptés</b> à la nourriture qu’il trouve dans son milieu.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Trois mâchoires", contexte: "On a observé les dents de trois animaux.", docs: [
        { type: "table", titre: "Dents observées", cols: ["Animal", "Incisives", "Canines", "Molaires"], rows: [["Lion", "Petites", "Très longues et pointues", "Tranchantes"], ["Mouton", "Présentes en bas seulement", "Absentes", "Larges et plates"], ["Sanglier", "Présentes", "Développées", "Bosselées"]] }
      ], questions: [
        { id: "1AC-L5-g1", cap: "R2", pts: 1, type: "assoc", enonce: "Trouve le régime alimentaire de chaque animal.", gauche: ["Lion", "Mouton", "Sanglier"], droite: ["Omnivore", "Carnivore", "Herbivore"], rep: [1, 2, 0], retour: "Crocs et molaires tranchantes : carnivore. Pas de canines et molaires plates : herbivore. Canines et molaires bosselées : omnivore." },
        { id: "1AC-L5-g2", cap: "I4", pts: 1, type: "qcm", enonce: "Quel animal du tableau n’a pas de canines ?", options: ["Le mouton", "Le lion", "Le sanglier", "Aucun"], rep: 0, retour: "Colonne « Canines », ligne « Mouton » : absentes." },
        { id: "1AC-L5-g3", cap: "R1", pts: 1, type: "qcm", enonce: "À quoi servent les molaires larges et plates du mouton ?", options: ["À broyer l’herbe", "À tuer une proie", "À déchirer la viande", "À couper les os"], rep: 0, retour: "Une surface large et râpeuse écrase et broie les végétaux." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Dents et intestin", contexte: "Utilise le tableau pour répondre.", docs: [tIntestin], questions: [
        { id: "1AC-L5-t1", cap: "I4", pts: 1, type: "num", enonce: "L’intestin du mouton mesure environ combien de fois la longueur de son corps ?", rep: 27, tol: 0, unite: "fois", retour: "Ligne « Mouton », troisième colonne." },
        { id: "1AC-L5-t2", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "L’intestin du lapin mesure environ {0} fois la longueur de son corps, alors que celui du chat ne mesure qu’environ {1} fois : l’intestin de l’herbivore est le plus {2}.", choix: [["10", "4", "27"], ["4", "6", "10"], ["long", "court", "large"]], rep: [0, 0, 0], retour: "On prend la même information pour les deux animaux et on les relie par « alors que »." },
        { id: "1AC-L5-t3", cap: "R2", pts: 1, type: "qcm", enonce: "Un animal inconnu n’a pas de canines et son intestin mesure 25 fois la longueur de son corps. Il est probablement :", options: ["herbivore", "carnivore", "omnivore", "impossible à dire"], rep: 0, retour: "Pas de canines et un intestin très long : deux caractères d’un herbivore." },
        { id: "1AC-L5-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque dent à son rôle.", gauche: ["Incisives", "Canines", "Molaires"], droite: ["Broyer", "Couper", "Déchirer"], rep: [1, 2, 0], retour: "Les incisives coupent, les canines déchirent, les molaires broient." },
        { id: "1AC-L5-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Un carnivore a des canines développées.", v: true }, { t: "Tous les gros animaux sont carnivores.", v: false }, { t: "L’herbe est plus longue à digérer que la viande.", v: true }, { t: "L’Homme est omnivore.", v: true }], retour: "L’éléphant et la vache sont de gros herbivores." }
      ] }
    ],
    cloture: `<ul><li>Trois sortes de dents : <b>incisives</b> (couper), <b>canines</b> (déchirer), <b>molaires</b> (broyer).</li><li><b>Carnivore</b> : crocs, molaires tranchantes, intestin court.</li><li><b>Herbivore</b> : pas de canines ou canines réduites, molaires plates, intestin très long.</li><li><b>Omnivore</b> : trois sortes de dents peu spécialisées.</li><li>L’appareil digestif est adapté à la nourriture disponible dans le milieu.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 1 ----------
  const tTailles = { type: "table", titre: "Taille de quelques cellules (1 millimètre = 1000 micromètres, notés µm)", cols: ["Cellule", "Taille approximative", "Forme"], rows: [["Bactérie", "2 µm", "Bâtonnet"], ["Globule rouge de l’Homme", "7 µm", "Disque"], ["Cellule de la joue de l’Homme", "60 µm", "Arrondie, irrégulière"], ["Paramécie", "150 µm", "Allongée, en forme de semelle"], ["Cellule d’épiderme d’oignon", "200 µm", "Rectangulaire"]] };
  L.push({
    id: "1AC-L6", u: 0, c: 2, s: 0,
    titre: "Leçon 6 — La diversité des cellules",
    objectif: "À la fin de la leçon, je sais décrire une cellule observée au microscope et montrer que les cellules sont diverses par leur forme et leur taille.",
    reussite: ["Je calcule le grossissement du microscope.", "Je décris une cellule par sa forme, sa taille et ce que je vois à l’intérieur.", "Je distingue un être unicellulaire d’un être pluricellulaire."],
    prerequis: {
      html: `<p>Certains objets sont trop petits pour être vus à l’œil nu. On utilise un <b>microscope</b>. Leur taille se mesure en <b>micromètres</b> (µm) : 1 millimètre = 1000 µm.</p>`,
      quiz: [
        { id: "1AC-L6-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quel instrument permet d’observer un objet beaucoup trop petit pour l’œil ?", options: ["Le microscope", "Le thermomètre", "La balance", "La règle"], rep: 0, retour: "Le microscope grossit l’image de l’objet." },
        { id: "1AC-L6-a2", cap: "K", pts: 1, type: "qcm", enonce: "Un objet qui mesure 100 µm est :", options: ["plus petit qu’un millimètre", "égal à un millimètre", "plus grand qu’un centimètre", "plus grand qu’un mètre"], rep: 0, retour: "1 millimètre = 1000 µm ; 100 µm, c’est dix fois moins." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — J’observe et je décris", html: `
        <p class="ctx">J’observe au microscope la fine peau d’un oignon (son épiderme).</p>
        <p><b>Je calcule d’abord le grossissement.</b> « L’oculaire porte la mention ×10, l’objectif ×40. Je multiplie : 10 × 40 = 400. L’image est 400 fois plus grande que l’objet. »</p>
        <p><b>Je décris ensuite ce que je vois</b>, en répondant à trois questions.</p>
        <ol><li><b>Quelle forme ?</b> « Je vois des cases allongées, serrées les unes contre les autres, comme les briques d’un mur. Chaque case est une <b>cellule</b>. Elle est rectangulaire. »</li>
        <li><b>Quelle taille ?</b> « Environ 200 µm de long. »</li>
        <li><b>Que vois-je à l’intérieur ?</b> « Un contour épais, et une petite tache ronde plus foncée : le noyau. »</li></ol>
        <p><b>Attention.</b> Des ronds vides, à bord noir très épais, ne sont pas des cellules : ce sont des <b>bulles d’air</b> prises dans la préparation.</p>` },
      { titre: "Je fais 2 — Je compare plusieurs cellules", html: `
        <table class="t"><tr><th>Cellule</th><th>Forme</th><th>Taille</th><th>Être vivant</th></tr>
        <tr><td>Épiderme d’oignon</td><td>Rectangulaire</td><td>200 µm</td><td>Plante, formée de très nombreuses cellules</td></tr>
        <tr><td>Cellule de la joue</td><td>Arrondie, irrégulière</td><td>60 µm</td><td>Homme, formé de très nombreuses cellules</td></tr>
        <tr><td>Cellule nerveuse</td><td>Étoilée, avec un très long prolongement</td><td>Jusqu’à 1 mètre de long</td><td>Homme</td></tr>
        <tr><td>Paramécie</td><td>En forme de semelle</td><td>150 µm</td><td>L’être vivant entier est une seule cellule</td></tr></table>
        <p>Je lis la colonne « Forme » : aucune cellule n’a la même forme. Je lis la colonne « Taille » : les tailles sont très différentes. Les cellules sont <b>diverses</b>.</p>
        <p class="def">Un être vivant formé d’<b>une seule cellule</b> est <b>unicellulaire</b> (paramécie, levure, bactérie). Un être vivant formé de <b>nombreuses cellules</b> est <b>pluricellulaire</b> (oignon, chat, Homme).</p>
        <p>Dans un être pluricellulaire, la forme d’une cellule est liée à son rôle : la cellule nerveuse est très longue parce qu’elle transmet des messages loin dans le corps.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Quatre cellules", contexte: "Voici quatre cellules observées au microscope.", docs: [
        { type: "table", titre: "Observations", cols: ["Cellule", "Forme", "Taille", "Être vivant"], rows: [["Levure", "Ovale", "8 µm", "Champignon formé d’une seule cellule"], ["Cellule de feuille d’élodée", "Rectangulaire", "80 µm", "Plante aquatique"], ["Cellule musculaire", "Très allongée", "Plusieurs centimètres", "Animal"], ["Euglène", "Allongée, avec un fouet", "50 µm", "Être vivant formé d’une seule cellule"]] }
      ], questions: [
        { id: "1AC-L6-g1", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle est la plus petite cellule du tableau ?", options: ["La levure", "L’euglène", "La cellule d’élodée", "La cellule musculaire"], rep: 0, retour: "On compare les valeurs de la colonne « Taille » : 8 µm est la plus petite." },
        { id: "1AC-L6-g2", cap: "K", pts: 1, type: "assoc", enonce: "Unicellulaire ou pluricellulaire ?", gauche: ["La levure", "L’élodée", "L’euglène", "L’Homme"], droite: ["Pluricellulaire", "Unicellulaire"], rep: [1, 0, 1, 0], retour: "La levure et l’euglène sont formées d’une seule cellule ; l’élodée et l’Homme en comptent un très grand nombre." },
        { id: "1AC-L6-g3", cap: "R5", pts: 1, type: "num", enonce: "On observe avec un oculaire ×10 et un objectif ×40. Quel est le grossissement ?", rep: 400, tol: 0, unite: "fois", retour: "Grossissement = oculaire × objectif = 10 × 40 = 400." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Des cellules de toutes les tailles", contexte: "Utilise le tableau pour répondre.", docs: [tTailles], questions: [
        { id: "1AC-L6-t1", cap: "I4", pts: 1, type: "ordre", enonce: "Classe ces cellules de la plus petite à la plus grande.", items: ["Bactérie", "Globule rouge", "Cellule de la joue", "Paramécie", "Cellule d’épiderme d’oignon"], retour: "2 µm, 7 µm, 60 µm, 150 µm, 200 µm." },
        { id: "1AC-L6-t2", cap: "R5", pts: 1, type: "num", enonce: "On observe avec un oculaire ×15 et un objectif ×10. Quel est le grossissement ?", rep: 150, tol: 0, unite: "fois", retour: "15 × 10 = 150." },
        { id: "1AC-L6-t3", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Toutes les cellules ont la même forme.", v: false }, { t: "Une paramécie est formée d’une seule cellule.", v: true }, { t: "Le corps de l’Homme est formé d’un très grand nombre de cellules.", v: true }, { t: "On peut voir la plupart des cellules à l’œil nu.", v: false }], retour: "Les cellules sont diverses et presque toujours microscopiques." },
        { id: "1AC-L6-t4", cap: "R3", pts: 1, type: "qcm", enonce: "Un élève dessine des ronds vides, à bord noir très épais, et écrit « cellules ». Que lui réponds-tu ?", options: ["Ce sont des bulles d’air, pas des cellules", "Ce sont des noyaux", "Ce sont des cellules d’oignon", "Ce sont des bactéries"], rep: 0, retour: "Une bulle d’air est ronde, vide, avec un bord noir épais. Une cellule a un contenu." },
        { id: "1AC-L6-t5", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "La cellule d’épiderme d’oignon est {0}, alors que la cellule de la joue est {1} : les cellules sont {2}.", choix: [["rectangulaire", "ronde", "étoilée"], ["arrondie", "rectangulaire", "en bâtonnet"], ["diverses", "identiques", "invisibles"]], rep: [0, 0, 0], retour: "On compare le même critère (la forme) pour les deux cellules." }
      ] }
    ],
    cloture: `<ul><li>La <b>cellule</b> s’observe au microscope. Grossissement = oculaire × objectif.</li><li>Les cellules sont <b>diverses</b> : formes, tailles et rôles différents.</li><li><b>Unicellulaire</b> : une seule cellule (paramécie, levure). <b>Pluricellulaire</b> : de très nombreuses cellules (plantes, animaux).</li><li>Pour décrire une cellule : sa forme, sa taille, ce que l’on voit à l’intérieur.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 2 ----------
  const tConst = { type: "table", titre: "Constituants observés dans deux cellules", cols: ["Constituant", "Cellule animale (joue)", "Cellule végétale (feuille)"], rows: [["Membrane", "Oui", "Oui"], ["Cytoplasme", "Oui", "Oui"], ["Noyau", "Oui", "Oui"], ["Paroi", "Non", "Oui"], ["Chloroplastes", "Non", "Oui"], ["Grande vacuole", "Non", "Oui"]] };
  L.push({
    id: "1AC-L7", u: 0, c: 2, s: 1,
    titre: "Leçon 7 — L’unité des cellules",
    objectif: "À la fin de la leçon, je sais nommer les trois constituants communs aux cellules et expliquer pourquoi la cellule est l’unité du vivant.",
    reussite: ["Je cite la membrane, le cytoplasme et le noyau, avec leur rôle.", "Je distingue une cellule végétale d’une cellule animale.", "J’explique les mots « unité structurale » et « unité fonctionnelle »."],
    prerequis: {
      html: `<p>Dans la leçon 6, tu as vu que les cellules sont très <b>diverses</b>. Aujourd’hui, on cherche au contraire ce qu’elles ont <b>en commun</b>.</p>`,
      quiz: [
        { id: "1AC-L7-a1", cap: "K", pts: 1, type: "qcm", enonce: "Un être vivant formé d’une seule cellule est :", options: ["unicellulaire", "pluricellulaire", "minéral", "invisible"], rep: 0, retour: "« Uni » signifie « un seul »." },
        { id: "1AC-L7-a2", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Les cellules n’ont pas toutes la même forme.", v: true }, { t: "Les plantes ne sont pas formées de cellules.", v: false }], retour: "Plantes, animaux et êtres unicellulaires : tous sont formés de cellules." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je cherche ce qui est commun", html: `
        <p class="ctx">Je range dans un tableau ce que j’ai vu dans trois cellules, puis je le lis <b>ligne par ligne</b>.</p>
        <table class="t"><tr><th>Constituant</th><th>Cellule d’oignon</th><th>Cellule de la joue</th><th>Paramécie</th></tr>
        <tr><th>Membrane</th><td>Oui</td><td>Oui</td><td>Oui</td></tr><tr><th>Cytoplasme</th><td>Oui</td><td>Oui</td><td>Oui</td></tr><tr><th>Noyau</th><td>Oui</td><td>Oui</td><td>Oui</td></tr>
        <tr><th>Paroi</th><td>Oui</td><td>Non</td><td>Non</td></tr><tr><th>Grande vacuole</th><td>Oui</td><td>Non</td><td>Non</td></tr></table>
        <p>« Ligne membrane : oui, oui, oui. Ligne cytoplasme : oui partout. Ligne noyau : oui partout. Ces trois constituants sont <b>communs</b>. Ligne paroi : seulement chez l’oignon. »</p>
        <table class="t"><tr><th>Constituant commun</th><th>Rôle</th></tr>
        <tr><th>Membrane</th><td>Limite la cellule et contrôle ce qui entre et ce qui sort</td></tr><tr><th>Cytoplasme</th><td>Remplit la cellule ; c’est là que se déroulent ses activités</td></tr><tr><th>Noyau</th><td>Contient l’information héréditaire et dirige la cellule</td></tr></table>
        <p>La cellule <b>végétale</b> possède en plus une <b>paroi</b> rigide autour de la membrane, une grande <b>vacuole</b> et, dans les parties vertes, des <b>chloroplastes</b>.</p>` },
      { titre: "Je fais 2 — J’explique « unité du vivant »", html: `
        <p class="def"><b>Unité structurale</b> : tous les êtres vivants sont <b>construits</b> avec des cellules, comme un mur est construit avec des briques.</p>
        <p class="def"><b>Unité fonctionnelle</b> : chaque cellule est <b>vivante</b>. Elle se nourrit, respire, grandit et se divise pour donner de nouvelles cellules.</p>
        <p>Malgré leur diversité, les cellules ont le même plan d’organisation : c’est l’<b>unité</b> des cellules.</p>
        <p><b>Erreurs fréquentes.</b></p>
        <ul><li>« La cellule végétale n’a pas de membrane puisqu’elle a une paroi. » Faux : la paroi s’ajoute à la membrane.</li>
        <li>« La cellule d’oignon n’est pas végétale car elle n’est pas verte. » Faux : l’oignon pousse dans le sol, ses cellules n’ont pas de chloroplastes, mais elles ont une paroi et une grande vacuole.</li></ul>` }
    ],
    guidee: [
      { titre: "Nous faisons — Deux cellules inconnues", contexte: "On a observé deux cellules. Cellule 1 : membrane, cytoplasme, noyau, paroi, chloroplastes. Cellule 2 : membrane, cytoplasme, noyau.", docs: [], questions: [
        { id: "1AC-L7-g1", cap: "R2", pts: 1, type: "qcm", enonce: "La cellule 1 est une cellule végétale. Quel indice le prouve ?", options: ["Elle possède une paroi et des chloroplastes", "Elle possède un noyau", "Elle possède une membrane", "Elle possède un cytoplasme"], rep: 0, retour: "Noyau, membrane et cytoplasme existent dans les deux cellules : ils ne permettent pas de les distinguer." },
        { id: "1AC-L7-g2", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque constituant à son rôle.", gauche: ["Membrane", "Noyau", "Cytoplasme", "Paroi"], droite: ["Contient l’information héréditaire", "Enveloppe rigide de la cellule végétale", "Limite la cellule et contrôle les échanges", "Remplit la cellule, lieu de ses activités"], rep: [2, 0, 3, 1], retour: "Membrane : limite et échanges. Noyau : information héréditaire. Cytoplasme : contenu actif. Paroi : rigidité, chez les végétaux." },
        { id: "1AC-L7-g3", cap: "K", pts: 1, type: "qcm", enonce: "Quels sont les trois constituants communs aux deux cellules ?", options: ["Membrane, cytoplasme, noyau", "Paroi, vacuole, chloroplastes", "Membrane, paroi, noyau", "Cytoplasme, chloroplastes, noyau"], rep: 0, retour: "Ce sont les trois constituants du plan commun des cellules." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Cellule animale et cellule végétale", contexte: "Utilise le tableau pour répondre.", docs: [tConst], questions: [
        { id: "1AC-L7-t1", cap: "I4", pts: 1, type: "assoc", enonce: "Où trouve-t-on chaque constituant ?", gauche: ["Membrane", "Paroi", "Noyau", "Chloroplastes", "Cytoplasme"], droite: ["Dans les deux cellules", "Seulement dans la cellule végétale"], rep: [0, 1, 0, 1, 0], retour: "On lit chaque ligne : « Oui, Oui » = dans les deux ; « Non, Oui » = seulement dans la cellule végétale." },
        { id: "1AC-L7-t2", cap: "K", pts: 1, type: "trous", enonce: "Complète.", texte: "Tous les êtres vivants sont formés de {0} : la cellule est l’unité {1} du vivant. Chaque cellule se nourrit, respire et se divise : elle est aussi l’unité {2} du vivant.", choix: [["cellules", "noyaux", "parois"], ["structurale", "fonctionnelle", "végétale"], ["fonctionnelle", "structurale", "animale"]], rep: [0, 0, 0], retour: "Structurale : elle construit les êtres vivants. Fonctionnelle : elle est vivante." },
        { id: "1AC-L7-t3", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une cellule animale possède une paroi.", v: false }, { t: "Le noyau contient l’information héréditaire.", v: true }, { t: "La cellule végétale a une membrane en plus de sa paroi.", v: true }, { t: "Une paramécie n’a ni membrane ni cytoplasme.", v: false }], retour: "La paramécie est une cellule : elle a une membrane, un cytoplasme et un noyau." },
        { id: "1AC-L7-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Une cellule possède une membrane, un cytoplasme et un noyau, mais ni paroi ni chloroplastes. C’est :", options: ["une cellule animale", "une cellule végétale", "une bulle d’air", "un chloroplaste"], rep: 0, retour: "L’absence de paroi et de chloroplastes indique une cellule animale." },
        { id: "1AC-L7-t5", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "La cellule animale et la cellule végétale possèdent toutes les deux {0}, alors que seule la cellule végétale possède {1}.", choix: [["une membrane, un cytoplasme et un noyau", "une paroi et des chloroplastes", "une grande vacuole"], ["une paroi", "un noyau", "une membrane"]], rep: [0, 0], retour: "On cite d’abord les points communs, puis la différence." }
      ] }
    ],
    cloture: `<ul><li>Les cellules ont trois constituants communs : <b>membrane</b>, <b>cytoplasme</b>, <b>noyau</b>.</li><li>La cellule <b>végétale</b> possède en plus une <b>paroi</b>, une grande <b>vacuole</b> et parfois des <b>chloroplastes</b>.</li><li>La cellule est l’<b>unité structurale</b> du vivant : tous les êtres vivants en sont formés.</li><li>Elle est l’<b>unité fonctionnelle</b> du vivant : elle se nourrit, respire et se divise.</li></ul>`
  });
})();
