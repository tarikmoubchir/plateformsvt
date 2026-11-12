// 1AC — Thème 3 « Planète Terre » et thème 4 « L'Humain et l'environnement ».
// Même modèle que college.js : enseignement explicite (ouverture, je fais, nous faisons, tu fais, je retiens).
(function () {
  const L = window.SVT.lecons["1AC"];

  // ---------- Thème 3, chapitre 1 (sans découpage en séquences dans le programme) ----------
  const tPlanetes = { type: "table", titre: "Les huit planètes du système solaire (valeurs arrondies)", cols: ["Planète", "Nature", "Diamètre"], rows: [["Mercure", "Rocheuse", "4 900 km"], ["Vénus", "Rocheuse", "12 100 km"], ["Terre", "Rocheuse", "12 800 km"], ["Mars", "Rocheuse", "6 800 km"], ["Jupiter", "Gazeuse", "143 000 km"], ["Saturne", "Gazeuse", "120 500 km"], ["Uranus", "Gazeuse", "51 100 km"], ["Neptune", "Gazeuse", "49 500 km"]] };
  L.push({
    id: "1AC-L12", u: 2, c: 0, s: 0,
    titre: "Leçon 12 — La Terre dans le système solaire et dans l’Univers",
    objectif: "À la fin de la leçon, je sais situer la Terre dans le système solaire et dire ce qui la rend habitable.",
    reussite: ["Je distingue une étoile, une planète et un satellite.", "Je cite les planètes dans l’ordre à partir du Soleil.", "J’explique la présence de la vie sur Terre avec des données d’un tableau."],
    prerequis: {
      html: `<p>Le jour, tu vois le <b>Soleil</b> ; la nuit, la <b>Lune</b> et des milliers de points lumineux. Tous ces objets du ciel sont des <b>astres</b>.</p>`,
      quiz: [
        { id: "1AC-L12-a1", cap: "K", pts: 1, type: "qcm", enonce: "Le Soleil est :", options: ["une étoile", "une planète", "un satellite", "une galaxie"], rep: 0, retour: "Le Soleil produit sa propre lumière : c’est une étoile." },
        { id: "1AC-L12-a2", cap: "K", pts: 1, type: "qcm", enonce: "La Terre fait le tour du Soleil en :", options: ["un an", "un jour", "un mois", "une heure"], rep: 0, retour: "Un tour complet autour du Soleil dure une année ; un tour sur elle-même dure un jour." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je range les astres du plus grand au plus petit ensemble", html: `
        <p class="ctx">Pour chaque astre, je me pose deux questions : « Produit-il sa propre lumière ? Autour de quoi tourne-t-il ? »</p>
        <table class="t"><tr><th>Astre</th><th>Lumière</th><th>Mouvement</th><th>Exemple</th></tr>
        <tr><th>Étoile</th><td>Elle produit sa lumière</td><td>—</td><td>Le Soleil</td></tr><tr><th>Planète</th><td>Elle est éclairée par son étoile</td><td>Elle tourne autour d’une étoile</td><td>La Terre</td></tr>
        <tr><th>Satellite naturel</th><td>Il est éclairé par l’étoile</td><td>Il tourne autour d’une planète</td><td>La Lune</td></tr></table>
        <p>« La Lune brille la nuit. Est-ce une étoile ? Produit-elle sa lumière ? Non : elle renvoie la lumière du Soleil. Elle tourne autour de la Terre : c’est un <b>satellite</b>. »</p>
        <p>J’emboîte ensuite les ensembles : la <b>Terre</b> appartient au <b>système solaire</b> ; le système solaire appartient à une <b>galaxie</b>, la Voie lactée, qui contient des milliards d’étoiles ; l’<b>Univers</b> contient des milliards de galaxies.</p>
        <p>Le système solaire compte <b>huit planètes</b>. Dans l’ordre à partir du Soleil : Mercure, Vénus, Terre, Mars (petites et <b>rocheuses</b>), puis Jupiter, Saturne, Uranus, Neptune (géantes et <b>gazeuses</b>). Pour retenir l’ordre : « <b>M</b>e <b>V</b>oici <b>T</b>out <b>M</b>ouillé, <b>J</b>e <b>S</b>uis <b>U</b>n <b>N</b>ageur ».</p>` },
      { titre: "Je fais 2 — J’explique pourquoi la Terre est habitable", html: `
        <table class="t"><tr><th>Planète</th><th>Distance au Soleil</th><th>Température moyenne à la surface</th></tr>
        <tr><td>Vénus</td><td>108 millions de km</td><td>464 °C</td></tr><tr><td>Terre</td><td>150 millions de km</td><td>15 °C</td></tr><tr><td>Mars</td><td>228 millions de km</td><td>−63 °C</td></tr></table>
        <p>Je lis la dernière colonne. « Sur Vénus, il fait 464 °C : l’eau ne peut pas rester liquide. Sur Mars, il fait −63 °C : l’eau est gelée. Sur Terre, il fait en moyenne 15 °C : l’eau est <b>liquide</b>. »</p>
        <p class="def">La Terre est la seule planète connue qui abrite la vie : elle est à la bonne distance du Soleil, elle possède de l’<b>eau liquide</b> et une <b>atmosphère</b> qui contient du dioxygène.</p>
        <p><b>Erreur fréquente</b> : la planète la plus proche du Soleil n’est pas la plus chaude. Vénus est plus chaude que Mercure, à cause de son atmosphère très épaisse.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Les quatre planètes rocheuses", contexte: "Voici quelques données sur les quatre planètes les plus proches du Soleil.", docs: [
        { type: "table", titre: "Planètes rocheuses", cols: ["Planète", "Distance au Soleil (millions de km)", "Température moyenne à la surface"], rows: [["Mercure", "58", "167 °C"], ["Vénus", "108", "464 °C"], ["Terre", "150", "15 °C"], ["Mars", "228", "−63 °C"]] }
      ], questions: [
        { id: "1AC-L12-g1", cap: "I4", pts: 1, type: "num", enonce: "À quelle distance du Soleil se trouve la Terre ?", rep: 150, tol: 0, unite: "millions de km", retour: "Ligne « Terre », deuxième colonne." },
        { id: "1AC-L12-g2", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle est la planète la plus chaude du tableau ?", options: ["Vénus", "Mercure", "La Terre", "Mars"], rep: 0, retour: "464 °C est la valeur la plus élevée de la dernière colonne." },
        { id: "1AC-L12-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Pourquoi trouve-t-on de l’eau liquide sur la Terre ?", options: ["Sa température moyenne, 15 °C, n’est ni trop élevée ni trop basse", "Elle est la planète la plus proche du Soleil", "Elle est la plus grosse planète", "Elle n’a pas d’atmosphère"], rep: 0, retour: "À 464 °C l’eau s’évapore, à −63 °C elle gèle : 15 °C permet l’eau liquide." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Les huit planètes", contexte: "Utilise le tableau pour répondre.", docs: [tPlanetes], questions: [
        { id: "1AC-L12-t1", cap: "K", pts: 1, type: "ordre", enonce: "Classe ces planètes de la plus proche à la plus éloignée du Soleil.", items: ["Mercure", "Vénus", "Terre", "Mars"], retour: "« Me Voici Tout Mouillé » : Mercure, Vénus, Terre, Mars." },
        { id: "1AC-L12-t2", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle est la plus grosse planète du système solaire ?", options: ["Jupiter", "Saturne", "La Terre", "Neptune"], rep: 0, retour: "143 000 km est le plus grand diamètre du tableau." },
        { id: "1AC-L12-t3", cap: "K", pts: 1, type: "assoc", enonce: "Dis ce qu’est chaque astre.", gauche: ["Le Soleil", "La Terre", "La Lune", "La Voie lactée"], droite: ["Une galaxie", "Une planète", "Une étoile", "Un satellite naturel"], rep: [2, 1, 3, 0], retour: "Le Soleil produit sa lumière ; la Terre tourne autour du Soleil ; la Lune tourne autour de la Terre ; la Voie lactée est notre galaxie." },
        { id: "1AC-L12-t4", cap: "R2", pts: 1, type: "qcm", enonce: "D’après le tableau, les planètes gazeuses sont :", options: ["beaucoup plus grosses que les planètes rocheuses", "plus petites que les planètes rocheuses", "de la même taille que la Terre", "plus proches du Soleil"], rep: 0, retour: "La plus petite planète gazeuse (Neptune, 49 500 km) est près de quatre fois plus grosse que la Terre (12 800 km)." },
        { id: "1AC-L12-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La Lune produit sa propre lumière.", v: false }, { t: "La Terre est la troisième planète à partir du Soleil.", v: true }, { t: "Le système solaire compte huit planètes.", v: true }, { t: "Le système solaire contient toute la Voie lactée.", v: false }], retour: "La Lune renvoie la lumière du Soleil. C’est la Voie lactée qui contient le système solaire, et non l’inverse." }
      ] }
    ],
    cloture: `<ul><li>Une <b>étoile</b> produit sa lumière ; une <b>planète</b> tourne autour d’une étoile ; un <b>satellite</b> tourne autour d’une planète.</li><li>Terre → système solaire → galaxie (Voie lactée) → Univers.</li><li><b>Huit planètes</b> : quatre rocheuses (Mercure, Vénus, Terre, Mars), quatre gazeuses (Jupiter, Saturne, Uranus, Neptune).</li><li>La Terre abrite la vie : température moyenne de 15 °C, eau liquide, atmosphère contenant du dioxygène.</li></ul>`
  });

  // ---------- Thème 3, chapitre 2, séquence 1 ----------
  L.push({
    id: "1AC-L13", u: 2, c: 1, s: 0,
    titre: "Leçon 13 — L’atmosphère, une composante de la Terre",
    objectif: "À la fin de la leçon, je sais donner la composition de l’air et expliquer trois rôles de l’atmosphère.",
    reussite: ["Je cite les deux gaz principaux de l’air avec leur pourcentage.", "Je lis un tableau à deux lignes et j’indique le sens de variation.", "J’explique le rôle de la couche d’ozone et de l’effet de serre naturel."],
    prerequis: {
      html: `<p>La Terre est entourée d’une couche d’air : on ne la voit pas, mais on la sent quand le vent souffle. C’est une des <b>enveloppes</b> de la Terre.</p>`,
      quiz: [
        { id: "1AC-L13-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quel gaz de l’air les êtres vivants prélèvent-ils en respirant ?", options: ["Le dioxygène", "Le diazote", "Le dioxyde de carbone", "L’ozone"], rep: 0, retour: "La respiration consomme du dioxygène." },
        { id: "1AC-L13-a2", cap: "K", pts: 1, type: "qcm", enonce: "La vie est possible sur la Terre parce qu’elle possède :", options: ["de l’eau liquide et une atmosphère", "des anneaux", "deux soleils", "une surface gazeuse"], rep: 0, retour: "C’est ce que tu as vu dans la leçon 12." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je décris l’atmosphère", html: `
        <p class="def">L’<b>atmosphère</b> est l’enveloppe de gaz qui entoure la Terre.</p>
        <table class="t"><tr><th>Gaz de l’air</th><th>Part</th></tr><tr><td>Diazote</td><td>78 %</td></tr><tr><td>Dioxygène</td><td>21 %</td></tr><tr><td>Autres gaz (argon, dioxyde de carbone, vapeur d’eau…)</td><td>1 %</td></tr></table>
        <p>« Je lis le tableau : le gaz le plus abondant est le diazote, pas le dioxygène. Sur 100 litres d’air, il y a 78 litres de diazote et 21 litres de dioxygène. »</p>
        <p>L’atmosphère est formée de couches. Les deux premières sont :</p>
        <ul><li>la <b>troposphère</b>, du sol jusqu’à 12 km environ : c’est là que nous vivons et que se forment les nuages, la pluie et le vent ;</li>
        <li>la <b>stratosphère</b>, de 12 à 50 km environ : elle contient la <b>couche d’ozone</b>.</li></ul>
        <p>Plus on monte, plus l’air est rare. L’atmosphère n’a pas de limite nette.</p>
        <p><b>Erreur fréquente</b> : « l’air, c’est du dioxygène ». Non : le dioxygène ne représente qu’un cinquième de l’air environ.</p>` },
      { titre: "Je fais 2 — J’explique à quoi sert l’atmosphère", html: `
        <table class="t"><tr><th>Rôle</th><th>Explication</th></tr>
        <tr><th>Permettre la respiration</th><td>Elle contient le dioxygène utilisé par les êtres vivants</td></tr>
        <tr><th>Protéger des rayons dangereux</th><td>La couche d’ozone arrête une grande partie des rayons ultraviolets du Soleil</td></tr>
        <tr><th>Garder la chaleur</th><td>Certains gaz (dioxyde de carbone, vapeur d’eau) retiennent une partie de la chaleur : c’est l’<b>effet de serre naturel</b></td></tr>
        <tr><th>Protéger des météorites</th><td>La plupart brûlent en traversant l’atmosphère</td></tr></table>
        <p>« Grâce à l’effet de serre naturel, la température moyenne de la Terre est de 15 °C. Sans lui, elle serait d’environ −18 °C : l’eau serait gelée. »</p>
        <p><b>Je lis un tableau à deux lignes.</b> Altitude 0 km : 15 °C ; altitude 10 km : −50 °C. « Quand l’altitude augmente de 0 à 10 km, la température <b>diminue</b> de 15 °C à −50 °C. »</p>
        <p><b>Attention.</b> L’effet de serre naturel est utile. Ce qui pose problème, c’est son <b>augmentation</b> due aux gaz rejetés par les activités humaines.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — La composition de l’air", contexte: "Voici la composition de l’air que nous respirons.", docs: [
        { type: "table", titre: "Composition de l’air", cols: ["Gaz", "Diazote", "Dioxygène", "Autres gaz"], rows: [["Part dans l’air", "78 %", "21 %", "1 %"]] }
      ], questions: [
        { id: "1AC-L13-g1", cap: "I4", pts: 1, type: "num", enonce: "Quel est le pourcentage de dioxygène dans l’air ?", rep: 21, tol: 0, unite: "%", retour: "Colonne « Dioxygène » : 21 %." },
        { id: "1AC-L13-g2", cap: "R5", pts: 1, type: "num", enonce: "Dans 100 litres d’air, combien y a-t-il de litres de diazote ?", rep: 78, tol: 0, unite: "L", retour: "78 % signifie 78 litres sur 100 litres." },
        { id: "1AC-L13-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Sans effet de serre naturel, la température moyenne de la Terre serait d’environ −18 °C. Quelle en serait la conséquence ?", options: ["L’eau serait gelée et la vie serait très difficile", "Il ferait plus chaud qu’aujourd’hui", "Il n’y aurait plus de dioxygène", "Rien ne changerait"], rep: 0, retour: "À −18 °C, l’eau est solide. L’effet de serre naturel maintient la Terre à 15 °C en moyenne." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — La température en altitude", contexte: "Un ballon-sonde mesure la température de l’air en s’élevant dans la troposphère.", docs: [
        { type: "table", titre: "Température de l’air selon l’altitude", cols: ["Altitude (km)", "0", "2", "4", "6", "8", "10"], rows: [["Température (°C)", "15", "2", "−11", "−24", "−37", "−50"]] }
      ], questions: [
        { id: "1AC-L13-t1", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle est la température à 4 km d’altitude ?", options: ["−11 °C", "2 °C", "−24 °C", "15 °C"], rep: 0, retour: "On repère la colonne « 4 », puis on lit la ligne des températures." },
        { id: "1AC-L13-t2", cap: "I4", pts: 1, type: "qcm", enonce: "Comment varie la température quand l’altitude augmente ?", options: ["Elle diminue de 15 °C à −50 °C entre 0 et 10 km", "Elle augmente de −50 °C à 15 °C entre 0 et 10 km", "Elle reste égale à 15 °C", "Elle diminue de 10 °C à 0 °C"], rep: 0, retour: "On donne le sens (diminue) et les deux valeurs extrêmes." },
        { id: "1AC-L13-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque élément à son rôle.", gauche: ["La troposphère", "La couche d’ozone", "L’effet de serre naturel", "Le dioxygène"], droite: ["Permet la respiration des êtres vivants", "Retient une partie de la chaleur", "Couche où se forment les nuages et la pluie", "Arrête une grande partie des rayons ultraviolets"], rep: [2, 3, 1, 0], retour: "Troposphère : météo. Ozone : protection contre les ultraviolets. Effet de serre : chaleur. Dioxygène : respiration." },
        { id: "1AC-L13-t4", cap: "R1", pts: 1, type: "qcm", enonce: "Un alpiniste qui monte à plus de 8 000 m utilise souvent une bouteille de dioxygène. Pourquoi ?", options: ["En altitude, l’air est plus rare : il y a moins de dioxygène à respirer", "En altitude, il n’y a que du diazote", "En altitude, il fait trop chaud", "En altitude, il n’y a plus d’atmosphère"], rep: 0, retour: "Plus on monte, plus l’air est rare." },
        { id: "1AC-L13-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "L’air contient surtout du dioxygène.", v: false }, { t: "La couche d’ozone se trouve dans la stratosphère.", v: true }, { t: "L’atmosphère nous protège de certains rayons du Soleil.", v: true }, { t: "L’atmosphère s’arrête nettement à 12 km d’altitude.", v: false }], retour: "Le gaz le plus abondant est le diazote (78 %). 12 km est seulement la limite de la troposphère." }
      ] }
    ],
    cloture: `<ul><li>L’<b>atmosphère</b> est l’enveloppe gazeuse de la Terre : <b>78 % de diazote</b>, <b>21 % de dioxygène</b>, 1 % d’autres gaz.</li><li><b>Troposphère</b> : nuages, pluie, vent, vie. <b>Stratosphère</b> : couche d’ozone.</li><li>Rôles : respiration, protection contre les ultraviolets et les météorites, <b>effet de serre naturel</b> (15 °C en moyenne au lieu de −18 °C).</li><li>Quand l’altitude augmente, l’air devient plus rare et, dans la troposphère, plus froid.</li></ul>`
  });

  // ---------- Thème 3, chapitre 2, séquence 2 ----------
  L.push({
    id: "1AC-L14", u: 2, c: 1, s: 1,
    titre: "Leçon 14 — L’hydrosphère, une composante de la Terre",
    objectif: "À la fin de la leçon, je sais décrire la répartition de l’eau sur la Terre et expliquer pourquoi l’eau douce est une ressource rare.",
    reussite: ["Je cite les réservoirs d’eau de la Terre et l’état de l’eau dans chacun.", "Je calcule la part d’eau douce à partir de la part d’eau salée.", "J’explique pourquoi il faut économiser l’eau douce."],
    prerequis: {
      html: `<p>L’eau existe sous trois <b>états</b> : solide, liquide et gazeux. Vue de l’espace, la Terre est bleue : l’eau recouvre la plus grande partie de sa surface.</p>`,
      quiz: [
        { id: "1AC-L14-a1", cap: "K", pts: 1, type: "assoc", enonce: "Donne l’état de l’eau.", gauche: ["La glace", "La vapeur d’eau", "La pluie"], droite: ["Liquide", "Gazeux", "Solide"], rep: [2, 1, 0], retour: "Glace : solide. Vapeur d’eau : gaz, invisible. Pluie : liquide." },
        { id: "1AC-L14-a2", cap: "K", pts: 1, type: "qcm", enonce: "L’eau de mer est :", options: ["salée", "douce", "gazeuse", "solide"], rep: 0, retour: "On ne peut ni la boire ni arroser les cultures avec elle sans la traiter." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je répartis 100 litres d’eau", html: `
        <p class="def">L’<b>hydrosphère</b> est l’ensemble de l’eau de la Terre, sous ses trois états. L’eau recouvre environ <b>71 %</b> de la surface de la planète.</p>
        <p class="ctx">Pour comprendre la répartition, j’imagine que toute l’eau de la Terre tient dans 100 litres.</p>
        <ol><li>« Sur ces 100 litres, <b>97 litres</b> sont de l’eau <b>salée</b> : les mers et les océans. »</li>
        <li>« Je calcule l’eau douce : 100 − 97 = <b>3 litres</b>. »</li>
        <li>« Sur ces 3 litres d’eau douce, environ 2 litres sont de la <b>glace</b> (glaciers, calottes des pôles), et presque 1 litre est dans le sous-sol (<b>eaux souterraines</b>). »</li>
        <li>« Les lacs et les rivières ne représentent que quelques gouttes. »</li></ol>
        <p>Je conclus : l’eau est très abondante sur Terre, mais l’eau <b>douce, liquide et facile à atteindre</b> est très rare.</p>` },
      { titre: "Je fais 2 — Je nomme les réservoirs et j’explique leur importance", html: `
        <table class="t"><tr><th>Réservoir</th><th>État de l’eau</th><th>Eau salée ou douce</th></tr>
        <tr><td>Mers et océans</td><td>Liquide</td><td>Salée</td></tr><tr><td>Glaciers et calottes polaires</td><td>Solide</td><td>Douce</td></tr><tr><td>Eaux souterraines (nappes)</td><td>Liquide</td><td>Douce</td></tr>
        <tr><td>Lacs et rivières</td><td>Liquide</td><td>Douce</td></tr><tr><td>Atmosphère</td><td>Gaz (vapeur d’eau) et gouttelettes des nuages</td><td>Douce</td></tr></table>
        <p>L’hydrosphère est <b>indispensable à la vie</b> : tous les êtres vivants contiennent de l’eau (environ les deux tiers du corps humain) et beaucoup y vivent. Elle influence aussi le <b>climat</b> : les océans stockent la chaleur et alimentent les pluies.</p>
        <p><b>Erreur fréquente</b> : « Il y a de l’eau partout, on peut la gaspiller. » Faux : presque toute l’eau est salée ou gelée. Au Maroc, où les sécheresses sont fréquentes, l’eau des barrages et des nappes doit être économisée.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Où se trouve l’eau douce ?", contexte: "Le tableau indique comment l’eau douce de la Terre se répartit entre ses réservoirs (valeurs arrondies).", docs: [
        { type: "table", titre: "Répartition de l’eau douce", cols: ["Réservoir", "Glaciers et calottes polaires", "Eaux souterraines", "Lacs, rivières et autres"], rows: [["Part de l’eau douce", "69 %", "30 %", "1 %"]] }
      ], questions: [
        { id: "1AC-L14-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle part de l’eau douce se trouve dans les glaciers et les calottes polaires ?", rep: 69, tol: 0, unite: "%", retour: "Première colonne de valeurs : 69 %." },
        { id: "1AC-L14-g2", cap: "R2", pts: 1, type: "qcm", enonce: "Le plus grand réservoir d’eau douce est formé par les glaciers. Pourquoi est-il difficile à utiliser ?", options: ["L’eau y est solide et loin des lieux où vivent les Hommes", "L’eau y est salée", "L’eau y est polluée", "Il n’existe pas"], rep: 0, retour: "L’essentiel de cette glace se trouve aux pôles et en haute montagne." },
        { id: "1AC-L14-g3", cap: "R5", pts: 1, type: "num", enonce: "Sur 100 litres d’eau de la Terre, 97 litres sont salés. Combien de litres sont de l’eau douce ?", rep: 3, tol: 0, unite: "L", retour: "100 − 97 = 3 litres." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — À quoi sert l’eau douce ?", contexte: "Le tableau indique les usages de l’eau douce prélevée par les Hommes dans le monde (valeurs arrondies).", docs: [
        { type: "table", titre: "Usages de l’eau douce dans le monde", cols: ["Usage", "Agriculture (irrigation)", "Industrie", "Maison (boisson, toilette, cuisine)"], rows: [["Part de l’eau utilisée", "70 %", "20 %", "10 %"]] }
      ], questions: [
        { id: "1AC-L14-t1", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle activité utilise le plus d’eau douce ?", options: ["L’agriculture", "L’industrie", "La maison", "Elles en utilisent autant"], rep: 0, retour: "70 % est la plus grande valeur du tableau." },
        { id: "1AC-L14-t2", cap: "R5", pts: 1, type: "num", enonce: "Sur 100 litres d’eau douce utilisés, combien de litres servent à l’industrie et à la maison réunies ?", rep: 30, tol: 0, unite: "L", retour: "20 + 10 = 30 litres." },
        { id: "1AC-L14-t3", cap: "K", pts: 1, type: "assoc", enonce: "Décris l’eau de chaque réservoir.", gauche: ["L’océan", "Le glacier", "La nappe souterraine", "Le nuage"], droite: ["Eau douce solide", "Gouttelettes d’eau dans l’atmosphère", "Eau salée liquide", "Eau douce liquide du sous-sol"], rep: [2, 0, 3, 1], retour: "Chaque réservoir se définit par l’état de l’eau et par sa nature, salée ou douce." },
        { id: "1AC-L14-t4", cap: "R2", pts: 1, type: "qcm", enonce: "L’agriculture est la première utilisatrice d’eau. Quel geste permet d’en économiser le plus ?", options: ["Arroser au goutte-à-goutte au lieu d’inonder les champs", "Arroser en plein soleil à midi", "Laisser couler les canaux jour et nuit", "Cultiver des plantes qui demandent beaucoup d’eau"], rep: 0, retour: "Le goutte-à-goutte apporte l’eau directement au pied de la plante, sans perte." },
        { id: "1AC-L14-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La plus grande partie de l’eau de la Terre est salée.", v: true }, { t: "L’eau douce facile à utiliser est très abondante.", v: false }, { t: "L’hydrosphère comprend aussi la glace.", v: true }, { t: "L’eau recouvre environ 71 % de la surface de la Terre.", v: true }], retour: "L’eau douce ne représente que 3 % de l’eau de la Terre, et elle est surtout gelée ou souterraine." }
      ] }
    ],
    cloture: `<ul><li>L’<b>hydrosphère</b> est l’ensemble de l’eau de la Terre, sous ses trois états ; l’eau couvre 71 % de la surface.</li><li><b>97 %</b> de l’eau est salée ; <b>3 %</b> seulement est douce.</li><li>L’eau douce se trouve surtout dans les glaciers et le sous-sol ; les lacs et les rivières en contiennent très peu.</li><li>L’eau est indispensable à la vie et agit sur le climat : il faut l’<b>économiser</b>.</li></ul>`
  });

  // ---------- Thème 3, chapitre 2, séquence 3 ----------
  L.push({
    id: "1AC-L15", u: 2, c: 1, s: 2,
    titre: "Leçon 15 — La lithosphère, une composante de la Terre",
    objectif: "À la fin de la leçon, je sais situer la lithosphère dans la Terre et reconnaître les trois grandes familles de roches.",
    reussite: ["Je cite les enveloppes internes de la Terre, de la surface vers le centre.", "Je compare la croûte continentale et la croûte océanique.", "Je range une roche dans sa famille d’après ce que j’observe."],
    prerequis: {
      html: `<p>Tu connais déjà deux enveloppes de la Terre : l’<b>atmosphère</b> (les gaz) et l’<b>hydrosphère</b> (l’eau). Sous nos pieds se trouve la partie <b>solide</b> de la planète.</p>`,
      quiz: [
        { id: "1AC-L15-a1", cap: "K", pts: 1, type: "assoc", enonce: "De quoi est formée chaque enveloppe ?", gauche: ["L’atmosphère", "L’hydrosphère", "La lithosphère"], droite: ["D’eau", "De roches", "De gaz"], rep: [2, 0, 1], retour: "Atmosphère : gaz. Hydrosphère : eau. Lithosphère : roches (« lithos » signifie « pierre »)." },
        { id: "1AC-L15-a2", cap: "K", pts: 1, type: "qcm", enonce: "Le granite, le calcaire et le basalte sont :", options: ["des roches", "des gaz", "des êtres vivants", "des planètes"], rep: 0, retour: "Ce sont trois roches très courantes." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je situe la lithosphère", html: `
        <p class="ctx">Je descends de la surface vers le centre de la Terre, dont le rayon mesure environ 6 370 km.</p>
        <table class="t"><tr><th>Enveloppe</th><th>Profondeur</th></tr><tr><td>Croûte</td><td>De la surface à 30 km environ sous les continents</td></tr><tr><td>Manteau</td><td>Jusqu’à 2 900 km</td></tr><tr><td>Noyau</td><td>De 2 900 km au centre (6 370 km)</td></tr></table>
        <p class="def">La <b>lithosphère</b> est l’enveloppe solide et rigide de la surface : elle réunit la <b>croûte</b> et la partie supérieure du <b>manteau</b>. Elle mesure environ 100 km d’épaisseur.</p>
        <p>« 100 km sur 6 370 km : la lithosphère est très mince par rapport à la Terre, un peu comme la coquille par rapport à l’œuf. »</p>
        <p>Il existe deux sortes de croûte. Je les compare critère par critère :</p>
        <table class="t"><tr><th></th><th>Croûte continentale</th><th>Croûte océanique</th></tr><tr><th>Où ?</th><td>Sous les continents</td><td>Sous les océans</td></tr><tr><th>Épaisseur moyenne</th><td>30 km</td><td>7 km</td></tr><tr><th>Roche principale</th><td>Granite</td><td>Basalte</td></tr></table>
        <p><b>Erreur fréquente</b> : la lithosphère n’est pas seulement la croûte, et elle ne comprend pas le noyau.</p>` },
      { titre: "Je fais 2 — Je reconnais la famille d’une roche", html: `
        <p class="ctx">Devant une roche, je me pose trois questions.</p>
        <ol><li><b>Est-elle disposée en couches ? Contient-elle des fossiles ?</b> Si oui : roche <b>sédimentaire</b>, formée par des dépôts (calcaire, grès, argile).</li>
        <li><b>Vient-elle du refroidissement d’un magma ?</b> Cristaux soudés bien visibles (granite) ou roche sombre issue d’une lave (basalte) : roche <b>magmatique</b>.</li>
        <li><b>A-t-elle été transformée par la chaleur et la pression ?</b> Si oui : roche <b>métamorphique</b> (marbre, schiste).</li></ol>
        <p>« Cette roche est claire, je vois des grains de plusieurs couleurs soudés les uns aux autres, sans couches ni fossiles : c’est un <b>granite</b>, une roche magmatique. »</p>
        <p>À la surface, les roches s’altèrent et se mélangent aux restes des êtres vivants : elles forment le <b>sol</b>, mince couche qui porte les plantes.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Trois échantillons", contexte: "On a observé trois roches.", docs: [
        { type: "table", titre: "Observations", cols: ["Roche", "Ce que l’on observe"], rows: [["A", "Claire ; grains de plusieurs couleurs soudés entre eux ; pas de couches"], ["B", "En couches ; contient des coquilles fossiles"], ["C", "Noire, très dure ; provient d’une coulée de lave refroidie"]] }
      ], questions: [
        { id: "1AC-L15-g1", cap: "R2", pts: 1, type: "assoc", enonce: "Nomme chaque roche.", gauche: ["Roche A", "Roche B", "Roche C"], droite: ["Calcaire", "Basalte", "Granite"], rep: [2, 0, 1], retour: "Grains soudés de plusieurs couleurs : granite. Couches et fossiles : calcaire. Lave noire refroidie : basalte." },
        { id: "1AC-L15-g2", cap: "R2", pts: 1, type: "qcm", enonce: "À quelle famille appartient la roche B ?", options: ["Sédimentaire, car elle est en couches et contient des fossiles", "Magmatique, car elle est dure", "Métamorphique, car elle est ancienne", "Aucune famille"], rep: 0, retour: "Les couches et les fossiles sont les indices d’une roche formée par des dépôts." },
        { id: "1AC-L15-g3", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle roche du tableau provient d’une lave ?", options: ["La roche C", "La roche A", "La roche B", "Aucune"], rep: 0, retour: "C’est écrit dans la ligne C : « provient d’une coulée de lave refroidie »." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — La croûte et l’intérieur de la Terre", contexte: "Utilise les deux tableaux pour répondre.", docs: [
        { type: "table", titre: "Les deux sortes de croûte", cols: ["", "Croûte continentale", "Croûte océanique"], rows: [["Épaisseur moyenne", "30 km", "7 km"], ["Roche principale", "Granite", "Basalte"]] },
        { type: "table", titre: "Les enveloppes internes de la Terre", cols: ["Enveloppe", "Croûte", "Manteau", "Noyau"], rows: [["Profondeur", "0 à 30 km", "30 à 2 900 km", "2 900 à 6 370 km"]] }
      ], questions: [
        { id: "1AC-L15-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est l’épaisseur moyenne de la croûte océanique ?", rep: 7, tol: 0, unite: "km", retour: "Premier tableau, ligne « Épaisseur moyenne », colonne « Croûte océanique »." },
        { id: "1AC-L15-t2", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "La croûte continentale a une épaisseur moyenne de {0} km, alors que la croûte océanique ne mesure que {1} km. La première est surtout formée de {2}, la seconde de {3}.", choix: [["30", "7", "100"], ["7", "30", "2 900"], ["granite", "basalte", "calcaire"], ["basalte", "granite", "marbre"]], rep: [0, 0, 0, 0], retour: "On compare d’abord l’épaisseur, puis la roche, en gardant le même ordre." },
        { id: "1AC-L15-t3", cap: "K", pts: 1, type: "ordre", enonce: "Classe les enveloppes de la surface vers le centre de la Terre.", items: ["Croûte", "Manteau", "Noyau"], retour: "On lit le second tableau de gauche à droite." },
        { id: "1AC-L15-t4", cap: "K", pts: 1, type: "assoc", enonce: "Range chaque roche dans sa famille.", gauche: ["Le granite", "Le calcaire", "Le marbre", "Le basalte"], droite: ["Roche sédimentaire", "Roche métamorphique", "Roche magmatique"], rep: [2, 0, 1, 2], retour: "Granite et basalte viennent d’un magma. Le calcaire se dépose en couches. Le marbre est un calcaire transformé." },
        { id: "1AC-L15-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La lithosphère est l’enveloppe solide et rigide de la surface de la Terre.", v: true }, { t: "La lithosphère comprend le noyau.", v: false }, { t: "La croûte océanique est plus épaisse que la croûte continentale.", v: false }, { t: "Le sol recouvre les roches de la lithosphère.", v: true }], retour: "La lithosphère réunit la croûte et le haut du manteau ; la croûte océanique (7 km) est la plus mince." }
      ] }
    ],
    cloture: `<ul><li>De la surface au centre : <b>croûte, manteau, noyau</b>.</li><li>La <b>lithosphère</b> = croûte + partie supérieure du manteau ; solide, rigide, épaisse d’environ 100 km.</li><li>Croûte <b>continentale</b> : 30 km, granite. Croûte <b>océanique</b> : 7 km, basalte.</li><li>Trois familles de roches : <b>magmatiques</b> (granite, basalte), <b>sédimentaires</b> (calcaire, grès), <b>métamorphiques</b> (marbre, schiste).</li><li>Le <b>sol</b> se forme à la surface, à partir des roches et des restes d’êtres vivants.</li></ul>`
  });

  // ---------- Thème 4, chapitre 1 (sans découpage en séquences dans le programme) ----------
  const gPeche = {
    type: "graph", titre: "Quantité de poissons pêchés chaque année par un village de pêcheurs", xlab: "Temps (années)", ylab: "Poissons pêchés (tonnes par an)", xmax: 10, ymax: 120,
    series: [{ nom: "Poissons pêchés", pts: [[0, 50], [2, 80], [4, 100], [6, 70], [8, 40], [10, 20]] }]
  };
  L.push({
    id: "1AC-L16", u: 3, c: 0, s: 0,
    titre: "Leçon 16 — Les ressources naturelles et leurs utilisations",
    objectif: "À la fin de la leçon, je sais distinguer une ressource renouvelable d’une ressource non renouvelable et proposer des gestes pour les préserver.",
    reussite: ["Je classe une ressource en me demandant si elle se reconstitue rapidement.", "Je relie une ressource à son utilisation.", "J’explique ce qu’est la surexploitation à partir d’une courbe."],
    prerequis: {
      html: `<p>L’atmosphère, l’hydrosphère, la lithosphère et les êtres vivants fournissent à l’Homme tout ce dont il a besoin : air, eau, roches, nourriture, énergie.</p>`,
      quiz: [
        { id: "1AC-L16-a1", cap: "K", pts: 1, type: "assoc", enonce: "De quelle enveloppe provient chaque ressource ?", gauche: ["Le vent", "L’eau d’un barrage", "Les phosphates"], droite: ["La lithosphère", "L’atmosphère", "L’hydrosphère"], rep: [1, 2, 0], retour: "Le vent est de l’air en mouvement ; l’eau appartient à l’hydrosphère ; les phosphates sont extraits des roches." },
        { id: "1AC-L16-a2", cap: "K", pts: 1, type: "qcm", enonce: "Lequel de ces produits existe dans la nature sans avoir été fabriqué par l’Homme ?", options: ["Le pétrole", "Le plastique", "Le verre", "Le béton"], rep: 0, retour: "Le pétrole se trouve dans le sous-sol. Le plastique, le verre et le béton sont fabriqués." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je classe les ressources", html: `
        <p class="def">Une <b>ressource naturelle</b> est un élément de la nature que l’Homme utilise pour répondre à ses besoins.</p>
        <p class="ctx">Pour classer une ressource, je me pose une seule question : « <b>Se reconstitue-t-elle rapidement, à l’échelle d’une vie humaine ?</b> »</p>
        <ul><li>« Le <b>Soleil</b> brille chaque jour, le <b>vent</b> souffle de nouveau, la pluie remplit les rivières, un arbre repousse en quelques dizaines d’années. » Oui : ce sont des ressources <b>renouvelables</b>.</li>
        <li>« Le <b>pétrole</b>, le <b>gaz</b> et le <b>charbon</b> ont mis des millions d’années à se former. Les <b>minerais</b> et les <b>phosphates</b> aussi. » Non : ce sont des ressources <b>non renouvelables</b>. Ce qui est extrait n’est pas remplacé.</li></ul>
        <table class="t"><tr><th>Ressource</th><th>Utilisation</th></tr>
        <tr><td>Eau</td><td>Boire, irriguer, produire de l’électricité (barrages)</td></tr><tr><td>Sol</td><td>Cultiver</td></tr><tr><td>Forêt</td><td>Bois, papier</td></tr>
        <tr><td>Phosphates</td><td>Engrais. Le Maroc possède les plus grandes réserves du monde, environ 70 %</td></tr><tr><td>Pétrole</td><td>Carburants, plastiques</td></tr>
        <tr><td>Soleil, vent</td><td>Électricité : centrale solaire Noor à Ouarzazate, parcs éoliens</td></tr></table>
        <p><b>Attention.</b> « Renouvelable » ne veut pas dire « inépuisable ». Une forêt coupée plus vite qu’elle ne repousse finit par disparaître.</p>` },
      { titre: "Je fais 2 — Je repère une surexploitation sur une courbe", html: `
        <p>On mesure chaque année le niveau de l’eau dans un puits utilisé pour l’irrigation : 20 m d’eau au départ, 20 m après 2 ans, 12 m après 6 ans, 4 m après 10 ans.</p>
        <ol><li><b>Je découpe</b> : de 0 à 2 ans, le niveau est stable ; de 2 à 10 ans, il baisse.</li>
        <li><b>Je décris avec des valeurs</b> : « De 2 à 10 ans, le niveau de l’eau diminue de 20 m à 4 m. »</li>
        <li><b>J’explique</b> : « On pompe plus d’eau que la pluie n’en ramène dans la nappe. »</li></ol>
        <p class="def"><b>Surexploitation</b> : on prélève une ressource plus vite qu’elle ne se reconstitue. Elle conduit à l’épuisement.</p>
        <p><b>Gérer durablement les ressources</b>, c’est : <b>économiser</b> l’eau et l’énergie ; <b>réutiliser</b> et <b>recycler</b> ; préférer les énergies <b>renouvelables</b> ; <b>reboiser</b> ; respecter les périodes où la pêche est interdite.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — La pêche d’un village", contexte: "Un village de pêcheurs s’équipe de bateaux plus nombreux et plus puissants. On note la quantité de poissons pêchés chaque année.", docs: [gPeche], questions: [
        { id: "1AC-L16-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle quantité de poissons a été pêchée la quatrième année ?", rep: 100, tol: 3, unite: "tonnes", retour: "On part de 4 sur l’axe du temps, on monte jusqu’à la courbe, on lit à gauche : 100 tonnes." },
        { id: "1AC-L16-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Comment varie la quantité pêchée entre la 4ᵉ et la 10ᵉ année ?", options: ["Elle diminue de 100 à 20 tonnes par an", "Elle augmente de 20 à 100 tonnes par an", "Elle reste à 100 tonnes par an", "Elle diminue de 50 à 20 tonnes par an"], rep: 0, retour: "On donne le sens (diminue) et les deux valeurs lues sur la courbe." },
        { id: "1AC-L16-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Les bateaux sont plus nombreux, pourtant on pêche de moins en moins. Quelle explication proposes-tu ?", options: ["Les poissons ont été pêchés plus vite qu’ils ne se reproduisent : il en reste moins", "Les pêcheurs ne savent plus pêcher", "Les poissons sont devenus plus gros", "La mer a disparu"], rep: 0, retour: "C’est une surexploitation : la ressource est renouvelable, mais on l’a prélevée trop vite." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Renouvelable ou non ?", contexte: "Le tableau indique le temps nécessaire pour que chaque ressource se reconstitue.", docs: [
        { type: "table", titre: "Temps de reconstitution de quelques ressources", cols: ["Ressource", "Temps nécessaire pour se reconstituer"], rows: [["Bois d’un arbre", "Quelques dizaines d’années"], ["Pétrole", "Des millions d’années"], ["Énergie du Soleil", "Disponible chaque jour"], ["Eau d’une rivière", "Renouvelée par les pluies chaque année"], ["Phosphates", "Des millions d’années"]] }
      ], questions: [
        { id: "1AC-L16-t1", cap: "I4", pts: 1, type: "assoc", enonce: "Classe chaque ressource.", gauche: ["Le bois", "Le pétrole", "L’énergie du Soleil", "Les phosphates", "L’eau d’une rivière"], droite: ["Renouvelable", "Non renouvelable"], rep: [0, 1, 0, 1, 0], retour: "Ce qui demande des millions d’années ne se reconstitue pas à l’échelle d’une vie humaine : non renouvelable." },
        { id: "1AC-L16-t2", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque ressource à son utilisation.", gauche: ["Les phosphates", "Le pétrole", "Le vent", "Le sol"], droite: ["Cultiver les plantes", "Fabriquer des engrais", "Produire de l’électricité avec des éoliennes", "Fabriquer des carburants et des plastiques"], rep: [1, 3, 2, 0], retour: "Phosphates : engrais. Pétrole : carburants et plastiques. Vent : électricité. Sol : cultures." },
        { id: "1AC-L16-t3", cap: "R2", pts: 1, type: "qcm", enonce: "On coupe les arbres d’une forêt plus vite qu’ils ne repoussent. Que va-t-il se passer ?", options: ["La forêt finira par disparaître, même si le bois est une ressource renouvelable", "Rien, car le bois est renouvelable", "La forêt va s’agrandir", "Les arbres pousseront plus vite"], rep: 0, retour: "Une ressource renouvelable s’épuise si on la prélève plus vite qu’elle ne se reconstitue." },
        { id: "1AC-L16-t4", cap: "K", pts: 1, type: "qcm", enonce: "Quel geste aide à préserver les ressources naturelles ?", options: ["Trier ses déchets pour qu’ils soient recyclés", "Laisser couler l’eau en se brossant les dents", "Laisser les lampes allumées dans une pièce vide", "Jeter les piles dans la nature"], rep: 0, retour: "Recycler évite de prélever de nouvelles matières premières." },
        { id: "1AC-L16-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Le pétrole est une ressource renouvelable.", v: false }, { t: "Le Maroc possède d’importantes réserves de phosphates.", v: true }, { t: "Une ressource renouvelable peut s’épuiser si on l’exploite trop.", v: true }, { t: "L’énergie solaire est une énergie renouvelable.", v: true }], retour: "Le pétrole a mis des millions d’années à se former : il n’est pas renouvelable." }
      ] }
    ],
    cloture: `<ul><li>Une <b>ressource naturelle</b> est un élément de la nature utilisé par l’Homme : eau, sol, forêts, roches, énergie.</li><li><b>Renouvelable</b> : elle se reconstitue rapidement (Soleil, vent, eau, bois). <b>Non renouvelable</b> : il lui faut des millions d’années (pétrole, gaz, charbon, minerais, phosphates).</li><li>La <b>surexploitation</b> épuise même les ressources renouvelables.</li><li>Gérer durablement : économiser, réutiliser, recycler, choisir les énergies renouvelables, reboiser.</li></ul>`
  });
})();
