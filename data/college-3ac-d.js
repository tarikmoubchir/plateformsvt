// 3AC — Thème 2, chapitres 3 à 6 : les microbes, l'immunité, les dysfonctionnements du système immunitaire, la transfusion sanguine et l'hygiène de l'appareil reproducteur.
// Enseignement explicite : ouverture, je fais, nous faisons, tu fais, je retiens.
(function () {
  const { qcm, vf, assoc, ordre, num, trous, table, graph, lecon } = window.SVT.mk;
  const L = (n, pos, o) => lecon("3AC", n, pos, o);

  // ---------- Chapitre 3, séquence 1 ----------
  const tMicrobes = table("Les quatre grands groupes de microbes", ["Groupe", "Taille", "Structure", "Exemple utile ou inoffensif", "Exemple pathogène"],
    [["Bactéries", "1 à 10 µm", "Une cellule sans vrai noyau", "Bactéries du yaourt", "Bacille de la tuberculose"], ["Virus", "0,02 à 0,3 µm", "Pas de cellule ; se multiplie seulement dans une cellule vivante", "—", "Virus de la grippe, VIH"], ["Champignons microscopiques", "5 à 50 µm", "Cellules à noyau", "Levure du pain, pénicillium", "Agent de la teigne"], ["Protozoaires", "10 à 100 µm", "Une cellule à noyau", "Paramécie", "Agent du paludisme"]]);
  L(25, [1, 2, 0], {
    titre: "La diversité et la classification des microbes",
    objectif: "À la fin de la leçon, je sais classer un microbe dans l’un des quatre grands groupes et distinguer les microbes utiles des microbes pathogènes.",
    reussite: ["Je cite les quatre groupes de microbes.", "Je distingue une bactérie d’un virus.", "Je donne des exemples de microbes utiles et de microbes pathogènes."],
    pre: [`<p>Les cellules se mesurent en <b>micromètres</b> (µm) : 1 millimètre = 1 000 µm. Certains êtres vivants sont formés d’<b>une seule cellule</b>.</p>`, [
      qcm("K", "Un être vivant formé d’une seule cellule est dit :", ["unicellulaire", "pluricellulaire", "minéral", "organique"], "Beaucoup de microbes sont unicellulaires."),
      qcm("K", "Combien de micromètres y a-t-il dans un millimètre ?", ["1 000", "10", "100", "1 000 000"], "1 mm = 1 000 µm.")]],
    mod: [["Je fais 1 — Je classe un microbe", `
        <p class="def">Un <b>microbe</b> (ou micro-organisme) est un être vivant visible seulement au microscope.</p>
        <p class="ctx">Pour classer un microbe, je me pose trois questions, dans cet ordre.</p>
        <ol><li><b>Est-il formé d’une cellule ?</b> Si non : c’est un <b>virus</b>. Il ne peut se multiplier qu’à l’intérieur d’une cellule vivante.</li>
        <li><b>Cette cellule a-t-elle un vrai noyau ?</b> Si non : c’est une <b>bactérie</b>.</li>
        <li><b>S’il y a un noyau</b> : c’est un <b>champignon microscopique</b> (levure, moisissure) ou un <b>protozoaire</b> (cellule de type animal, souvent mobile).</li></ol>
        <p>« Le microbe de la grippe ne mesure que 0,1 µm et ne se multiplie que dans nos cellules. Première question : est-il formé d’une cellule ? Non. C’est un <b>virus</b>. »</p>
        <p>Les bactéries ont des formes variées : sphériques (<b>coques</b>), en bâtonnet (<b>bacilles</b>), en virgule (<b>vibrions</b>), en spirale (<b>spirilles</b>).</p>`],
      ["Je fais 2 — Je distingue l’utile du pathogène", `
        <table class="t"><tr><th>Microbes utiles ou inoffensifs</th><th>Microbes pathogènes</th></tr>
        <tr><td>Les bactéries lactiques transforment le lait en yaourt</td><td>Le bacille de Koch provoque la tuberculose</td></tr>
        <tr><td>La levure fait lever le pain</td><td>Le virus de la grippe, le VIH</td></tr>
        <tr><td>Le pénicillium produit un antibiotique, la pénicilline</td><td>Le vibrion du choléra</td></tr>
        <tr><td>Les bactéries de l’intestin aident la digestion</td><td>Le protozoaire du paludisme</td></tr>
        <tr><td>Les décomposeurs recyclent la matière</td><td>Le champignon de la teigne</td></tr></table>
        <p class="def">Un microbe <b>pathogène</b> est un microbe capable de provoquer une maladie.</p>
        <p>« La grande majorité des microbes ne sont pas dangereux. Je ne dis donc jamais “microbe = maladie”. »</p>
        <p>Je lis le tableau à double entrée en croisant le groupe et le critère : « Ligne “Virus”, colonne “Taille” : 0,02 à 0,3 µm. Ce sont les plus petits : on ne les voit qu’au microscope électronique. »</p>`]],
    gui: { titre: "Nous faisons — Quatre groupes de microbes", ctx: "Le tableau présente les quatre grands groupes de microbes.", docs: [tMicrobes], q: [
      qcm("I4", "Quel groupe réunit les microbes les plus petits ?", ["Les virus", "Les bactéries", "Les champignons microscopiques", "Les protozoaires"], "Colonne « Taille » : 0,02 à 0,3 µm."),
      qcm("I4", "Quelle est la structure d’une bactérie ?", ["Une cellule sans vrai noyau", "Une cellule à noyau", "Pas de cellule", "Plusieurs cellules à noyau"], "Ligne « Bactéries », colonne « Structure »."),
      qcm("R2", "Un microbe mesure 0,1 µm et ne se multiplie que dans une cellule vivante. Dans quel groupe le ranger ?", ["Les virus", "Les bactéries", "Les protozoaires", "Les champignons microscopiques"], "Très petite taille et multiplication dans une cellule : ce sont les deux caractères du virus.")] },
    aut: { titre: "Tu fais — Classer et reconnaître", ctx: "Utilise le tableau pour répondre.", docs: [tMicrobes], q: [
      qcm("I4", "À quel groupe appartient l’agent du paludisme ?", ["Les protozoaires", "Les bactéries", "Les virus", "Les champignons microscopiques"], "Ligne « Protozoaires », dernière colonne."),
      assoc("K", "Classe chaque microbe dans son groupe.", ["Le bacille de la tuberculose", "Le VIH", "La levure du pain", "La paramécie"], ["Virus", "Protozoaire", "Bactérie", "Champignon microscopique"], [2, 0, 3, 1], "On retrouve chaque exemple dans le tableau."),
      assoc("K", "Microbe utile ou microbe pathogène ?", ["Les bactéries du yaourt", "Le virus de la grippe", "La levure du pain", "Le vibrion du choléra"], ["Pathogène", "Utile"], [1, 0, 1, 0], "Un microbe pathogène provoque une maladie."),
      assoc("K", "Associe chaque forme de bactérie à son nom.", ["Sphérique", "En bâtonnet", "En virgule"], ["Bacille", "Vibrion", "Coque"], [2, 0, 1], "Coque, bacille, vibrion."),
      vf([["Tous les microbes provoquent des maladies.", false], ["Un virus ne peut se multiplier qu’à l’intérieur d’une cellule vivante.", true], ["Une bactérie possède un vrai noyau.", false], ["Le pénicillium est un champignon microscopique.", true]], "La plupart des microbes sont inoffensifs ou utiles ; la bactérie n’a pas de vrai noyau.")] },
    clo: `<ul><li>Quatre groupes de microbes : <b>bactéries</b>, <b>virus</b>, <b>champignons microscopiques</b>, <b>protozoaires</b>.</li><li>La <b>bactérie</b> est une cellule sans vrai noyau ; le <b>virus</b> n’est pas une cellule et se multiplie dans une cellule vivante.</li><li>Beaucoup de microbes sont <b>utiles</b> (yaourt, pain, antibiotiques, digestion, décomposition).</li><li>Un microbe <b>pathogène</b> provoque une maladie.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 2 ----------
  const gAntibio = graph("Nombre de bactéries dans deux cultures identiques", "Temps (heures)", "Bactéries (millions par mL)", 8, 110,
    [["Culture sans antibiotique", [[0, 1], [2, 4], [4, 16], [6, 60], [8, 100]]], ["Culture avec antibiotique ajouté à 4 heures", [[0, 1], [2, 4], [4, 16], [6, 6], [8, 1]]]], [{ x: 4, label: "Ajout de l’antibiotique" }]);
  L(26, [1, 2, 1], {
    titre: "L’Homme face aux microbes",
    objectif: "À la fin de la leçon, je sais expliquer comment un microbe pathogène agit dans l’organisme et comment l’Homme s’en protège.",
    reussite: ["Je distingue contamination et infection.", "Je distingue les deux modes d’action d’une bactérie pathogène.", "Je distingue asepsie, antisepsie et antibiotique."],
    pre: [`<p>Certains microbes sont <b>pathogènes</b> (leçon 25). Pour provoquer une maladie, ils doivent d’abord <b>entrer</b> dans le corps.</p>`, [
      qcm("K", "Un microbe pathogène est un microbe qui :", ["peut provoquer une maladie", "fabrique le yaourt", "est toujours un virus", "n’entre jamais dans le corps"], "Tous les groupes de microbes comptent des espèces pathogènes."),
      qcm("K", "Par où un microbe peut-il entrer dans le corps ?", ["Par une plaie, par la bouche ou par le nez", "Seulement par les cheveux", "Par les ongles", "Il ne peut pas entrer"], "Il emprunte les voies cutanée, digestive, respiratoire ou sexuelle.")]],
    mod: [["Je fais 1 — Je suis le microbe dans l’organisme", `
        <ol><li><b>Contamination</b> : le microbe entre dans l’organisme (plaie, air, eau et aliments, rapports sexuels).</li>
        <li><b>Infection</b> : le microbe se <b>multiplie</b>. Une bactérie se divise en deux toutes les 20 à 30 minutes.</li></ol>
        <p>Une bactérie pathogène agit de deux façons. Je me demande : « Est-ce la bactérie elle-même qui se répand, ou une substance qu’elle fabrique ? »</p>
        <table class="t"><tr><th></th><th>Par sa multiplication</th><th>Par ses toxines</th></tr>
        <tr><th>Ce qui se répand</th><td>Les bactéries, qui envahissent l’organisme</td><td>Un poison fabriqué par la bactérie, la <b>toxine</b>, transporté par le sang</td></tr>
        <tr><th>Où reste la bactérie ?</th><td>Elle passe dans le sang : c’est la <b>septicémie</b></td><td>Elle reste près de la plaie</td></tr>
        <tr><th>Exemple</th><td>Bacille du charbon</td><td>Bacille du tétanos, bacille de la diphtérie</td></tr></table>
        <p>« Le bacille du tétanos reste dans la plaie, et pourtant tous les muscles du malade se contractent. Ce n’est donc pas la bactérie qui se répand : c’est sa <b>toxine</b>. »</p>`],
      ["Je fais 2 — Je distingue trois moyens de lutte", `
        <table class="t"><tr><th>Moyen</th><th>But</th><th>Exemples</th></tr>
        <tr><th>Asepsie</th><td><b>Empêcher</b> les microbes d’arriver</td><td>Se laver les mains, stériliser les instruments, utiliser des pansements stériles</td></tr>
        <tr><th>Antisepsie</th><td><b>Détruire</b> les microbes déjà présents sur une plaie</td><td>Alcool, eau oxygénée, bétadine</td></tr>
        <tr><th>Antibiotique</th><td>Détruire les <b>bactéries</b> dans l’organisme, ou arrêter leur multiplication</td><td>Pénicilline</td></tr></table>
        <p>« Je me blesse au genou. Je lave la plaie : j’enlève des microbes. Je mets un antiseptique : <b>antisepsie</b>. Je pose un pansement stérile : <b>asepsie</b>. »</p>
        <p>Les antibiotiques n’agissent <b>pas sur les virus</b>. Mal utilisés, ils rendent les bactéries <b>résistantes</b>.</p>
        <p>Sur un graphique à deux courbes, je repère le moment où l’on ajoute l’antibiotique, puis je compare les deux courbes <b>après</b> ce moment.</p>`]],
    gui: { titre: "Nous faisons — L’effet d’un antibiotique", ctx: "On suit deux cultures de la même bactérie. Dans la seconde, on ajoute un antibiotique au bout de 4 heures.", docs: [gAntibio], q: [
      num("I1", "Combien de bactéries compte-t-on à 8 heures dans la culture sans antibiotique ?", 100, "millions par mL", "On lit la courbe « sans antibiotique » à 8 heures : 100 millions par mL.", 3),
      qcm("I1", "Comment évolue le nombre de bactéries après l’ajout de l’antibiotique ?", ["Il diminue de 16 à 1 million par mL entre 4 et 8 heures", "Il augmente de 16 à 100 millions par mL", "Il reste à 16 millions par mL", "Il augmente de 1 à 16 millions par mL"], "On lit la seconde courbe après 4 heures."),
      qcm("R2", "Que peut-on conclure ?", ["L’antibiotique détruit ces bactéries", "L’antibiotique favorise la multiplication des bactéries", "L’antibiotique n’a aucun effet", "Les bactéries meurent toutes seules"], "À 8 heures : 1 million avec antibiotique, alors que 100 millions sans.")] },
    aut: { titre: "Tu fais — Se protéger des microbes", ctx: "Utilise le graphique et tes connaissances.", docs: [gAntibio], q: [
      qcm("I1", "Avant l’ajout de l’antibiotique, de 0 à 4 heures, les deux courbes sont :", ["confondues : le nombre de bactéries passe de 1 à 16 millions par mL", "différentes dès le départ", "toutes deux décroissantes", "horizontales"], "Tant que les conditions sont identiques, les deux cultures évoluent de la même façon."),
      ordre("K", "Remets dans l’ordre ce qui se passe quand un microbe pathogène pénètre par une plaie.", ["Contamination : le microbe entre dans l’organisme", "Infection : le microbe se multiplie", "Le microbe ou ses toxines se répandent", "Les signes de la maladie apparaissent"], "Entrer, se multiplier, se répandre, rendre malade."),
      assoc("K", "Associe chaque geste au moyen de lutte.", ["Stériliser une seringue", "Appliquer de l’alcool sur une plaie", "Prendre de la pénicilline contre une angine bactérienne", "Se laver les mains avant un soin"], ["Antibiotique", "Asepsie", "Antisepsie"], [1, 2, 0, 1], "Asepsie : empêcher d’arriver. Antisepsie : détruire sur la plaie. Antibiotique : détruire les bactéries dans le corps."),
      qcm("R2", "Le bacille du tétanos reste dans la plaie, mais tous les muscles du malade se contractent. Comment l’expliquer ?", ["Le bacille produit une toxine, transportée par le sang jusqu’au système nerveux", "Le bacille envahit tous les muscles", "Le bacille n’est pas pathogène", "La plaie guérit seule"], "C’est l’action par toxine."),
      vf([["Un antibiotique agit sur les virus.", false], ["La septicémie est l’invasion du sang par des bactéries.", true], ["L’asepsie consiste à empêcher les microbes d’arriver.", true], ["Mal utilisés, les antibiotiques peuvent devenir inefficaces.", true]], "Les antibiotiques n’agissent que sur les bactéries.")] },
    clo: `<ul><li><b>Contamination</b> : entrée du microbe. <b>Infection</b> : multiplication du microbe.</li><li>Une bactérie pathogène agit par sa <b>multiplication</b> (septicémie) ou par ses <b>toxines</b> (tétanos, diphtérie).</li><li><b>Asepsie</b> : empêcher les microbes d’arriver. <b>Antisepsie</b> : les détruire sur la plaie.</li><li><b>Antibiotiques</b> : contre les bactéries seulement, jamais contre les virus.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 1 ----------
  const tInflam = table("Nombre de globules blancs dans une goutte de liquide prélevée au niveau d’une plaie infectée", ["Temps après la piqûre", "0 h", "2 h", "6 h", "12 h"], [["Phagocytes (pour 1 mm³)", "50", "400", "2 000", "5 000"]]);
  L(27, [1, 3, 0], {
    titre: "L’immunité naturelle",
    objectif: "À la fin de la leçon, je sais décrire les barrières naturelles, la réaction inflammatoire et les étapes de la phagocytose.",
    reussite: ["Je cite les barrières naturelles.", "J’explique les quatre signes de l’inflammation.", "Je remets dans l’ordre les étapes de la phagocytose."],
    pre: [`<p>Des microbes pathogènes nous entourent, et pourtant nous sommes rarement malades. Les <b>globules blancs</b> assurent la défense de l’organisme (leçon 12).</p>`, [
      qcm("K", "Quels éléments du sang défendent l’organisme ?", ["Les globules blancs", "Les globules rouges", "Les plaquettes", "L’urée"], "Ils possèdent un noyau."),
      qcm("K", "La contamination est :", ["l’entrée d’un microbe dans l’organisme", "la multiplication d’un microbe", "la guérison", "la vaccination"], "L’infection, elle, est la multiplication.")]],
    mod: [["Je fais 1 — Je décris les deux premières lignes de défense", `
        <p><b>Première ligne : les barrières naturelles.</b></p>
        <table class="t"><tr><th>Barrière</th><th>Comment elle agit</th></tr><tr><td>La peau</td><td>Elle forme un obstacle continu ; la sueur est acide</td></tr><tr><td>Les muqueuses (nez, bronches)</td><td>Le mucus colle les microbes ; des cils les repoussent</td></tr>
        <tr><td>Les larmes, la salive</td><td>Elles contiennent une substance qui détruit des bactéries</td></tr><tr><td>Le suc gastrique</td><td>Son acidité détruit la plupart des microbes avalés</td></tr></table>
        <p><b>Deuxième ligne : la réaction inflammatoire.</b> « Une épine perce la peau : des bactéries entrent. Quelques heures plus tard, je constate quatre signes. Pour chacun, je cherche la cause. »</p>
        <table class="t"><tr><th>Signe</th><th>Cause</th></tr><tr><td>Rougeur et chaleur</td><td>Les vaisseaux se dilatent : le sang afflue</td></tr><tr><td>Gonflement</td><td>Du plasma sort des vaisseaux</td></tr><tr><td>Douleur</td><td>Les terminaisons nerveuses sont excitées</td></tr></table>
        <p>Des globules blancs traversent la paroi des capillaires et gagnent la plaie : ce sont les <b>phagocytes</b>.</p>`],
      ["Je fais 2 — Je décris la phagocytose", `
        <p class="def">La <b>phagocytose</b> est la destruction d’un microbe par un phagocyte, qui l’englobe et le digère.</p>
        <ol><li><b>Adhésion</b> : le phagocyte s’approche du microbe et se fixe sur lui.</li><li><b>Ingestion</b> : il l’entoure de ses prolongements et l’enferme dans une vésicule.</li>
        <li><b>Digestion</b> : des enzymes détruisent le microbe.</li><li><b>Rejet</b> des débris.</li></ol>
        <p>Deux issues possibles : les phagocytes l’emportent, et l’infection est arrêtée ; ou les microbes l’emportent, se multiplient, forment du <b>pus</b> (phagocytes morts et microbes) et peuvent gagner les ganglions, puis le sang.</p>
        <p class="def">L’<b>immunité naturelle</b> est <b>immédiate</b>, présente dès la naissance, et <b>non spécifique</b> : elle agit de la même façon contre tous les microbes.</p>
        <p>« Dans un tableau, je vérifie cette réaction en suivant le nombre de phagocytes au niveau de la plaie : s’il augmente, c’est que la défense s’organise. »</p>`]],
    gui: { titre: "Nous faisons — Les phagocytes à la plaie", ctx: "On prélève une goutte de liquide au niveau d’une plaie infectée, à différents moments.", docs: [tInflam], q: [
      num("I4", "Combien de phagocytes compte-t-on par mm³, 6 heures après la piqûre ?", 2000, "", "Colonne « 6 h »."),
      qcm("I4", "Comment évolue le nombre de phagocytes au niveau de la plaie ?", ["Il augmente fortement : de 50 à 5 000 par mm³ en 12 heures", "Il diminue de 5 000 à 50", "Il reste égal à 50", "Il augmente de 50 à 400 en 12 heures"], "On lit la ligne de gauche à droite."),
      qcm("R1", "Comment expliquer cette augmentation ?", ["Des globules blancs sortent des capillaires et affluent vers la plaie pour phagocyter les microbes", "Les microbes se transforment en globules blancs", "Le sang ne circule plus", "Les phagocytes sont fabriqués par la peau"], "C’est la réaction inflammatoire.")] },
    aut: { titre: "Tu fais — La première défense", ctx: "Utilise le tableau et tes connaissances.", docs: [tInflam], q: [
      num("I4", "Combien de phagocytes compte-t-on par mm³ au moment de la piqûre ?", 50, "", "Colonne « 0 h »."),
      ordre("K", "Remets dans l’ordre les étapes de la phagocytose.", ["Adhésion du phagocyte au microbe", "Ingestion du microbe", "Digestion du microbe", "Rejet des débris"], "Se fixer, englober, digérer, rejeter."),
      assoc("K", "Associe chaque signe de l’inflammation à sa cause.", ["La rougeur et la chaleur", "Le gonflement", "La douleur"], ["L’excitation des terminaisons nerveuses", "L’afflux de sang dans les vaisseaux dilatés", "La sortie de plasma hors des vaisseaux"], [1, 2, 0], "Chaque signe a une cause précise."),
      qcm("K", "Pourquoi dit-on que l’immunité naturelle est non spécifique ?", ["Elle agit de la même façon contre tous les microbes", "Elle n’agit que contre un seul microbe", "Elle apparaît après une vaccination", "Elle n’agit jamais"], "Les phagocytes englobent n’importe quel microbe."),
      vf([["La peau saine est une barrière contre les microbes.", true], ["Le pus est formé de globules rouges.", false], ["La phagocytose est réalisée par des globules blancs.", true], ["L’immunité naturelle existe dès la naissance.", true]], "Le pus contient des phagocytes morts et des microbes.")] },
    clo: `<ul><li><b>Barrières naturelles</b> : peau, muqueuses, larmes, salive, suc gastrique.</li><li><b>Réaction inflammatoire</b> : rougeur, chaleur, gonflement, douleur ; les phagocytes affluent.</li><li><b>Phagocytose</b> : adhésion, ingestion, digestion, rejet.</li><li>L’immunité naturelle est <b>immédiate</b> et <b>non spécifique</b>.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 2 ----------
  const tHumorale = table("Expériences sur des cobayes : la toxine tétanique tue un animal non protégé", ["Lot", "Ce que l’animal a reçu au préalable", "Injection ensuite", "Résultat"],
    [["1", "Rien", "Toxine tétanique", "Mort"], ["2", "Toxine tétanique rendue inoffensive (anatoxine), 15 jours avant", "Toxine tétanique", "Survie"], ["3", "Sérum d’un animal du lot 2", "Toxine tétanique", "Survie"], ["4", "Sérum d’un animal du lot 2", "Toxine diphtérique", "Mort"]]);
  L(28, [1, 3, 1], {
    titre: "L’immunité spécifique à médiation humorale",
    objectif: "À la fin de la leçon, je sais expliquer, à partir d’expériences, comment les anticorps protègent l’organisme, et pourquoi cette protection est spécifique.",
    reussite: ["Je définis antigène et anticorps.", "J’interprète quatre lots d’expériences en les comparant deux à deux.", "J’explique les mots « spécifique » et « humorale »."],
    pre: [`<p>L’immunité naturelle ne suffit pas toujours. Le <b>sérum</b> est le liquide qui se sépare du sang coagulé (leçon 12). Une <b>toxine</b> est un poison fabriqué par une bactérie (leçon 26).</p>`, [
      qcm("K", "Qu’est-ce que le sérum ?", ["Le liquide obtenu à partir du sang coagulé", "Un globule blanc", "Un microbe", "Un antibiotique"], "Il ne contient pas de cellules."),
      qcm("K", "Quelle bactérie agit par une toxine ?", ["Le bacille du tétanos", "La bactérie du yaourt", "La levure", "Aucune"], "Le bacille de la diphtérie aussi.")]],
    mod: [["Je fais 1 — J’interprète les expériences, deux lots à la fois", `
        <table class="t"><tr><th>Lot</th><th>Reçu au préalable</th><th>Puis</th><th>Résultat</th></tr><tr><th>1</th><td>Rien</td><td>Toxine tétanique</td><td>Mort</td></tr><tr><th>2</th><td>Anatoxine tétanique, 15 jours avant</td><td>Toxine tétanique</td><td>Survie</td></tr><tr><th>3</th><td>Sérum d’un animal du lot 2</td><td>Toxine tétanique</td><td>Survie</td></tr><tr><th>4</th><td>Sérum d’un animal du lot 2</td><td>Toxine diphtérique</td><td>Mort</td></tr></table>
        <p>« <b>Lots 1 et 2.</b> La seule différence : l’anatoxine reçue 15 jours avant. L’animal du lot 2 survit : l’anatoxine l’a <b>protégé</b>. Son organisme a fabriqué quelque chose contre la toxine. »</p>
        <p>« <b>Lots 1 et 3.</b> L’animal du lot 3 n’a reçu que le sérum d’un animal protégé, et il survit. La protection se trouve donc <b>dans le sérum</b> : ce sont des substances dissoutes, les <b>anticorps</b>. »</p>
        <p>« <b>Lots 3 et 4.</b> Même sérum, mais une autre toxine : l’animal meurt. Les anticorps contre la toxine tétanique n’agissent pas contre la toxine diphtérique : la protection est <b>spécifique</b>. »</p>`],
      ["Je fais 2 — Je nomme les acteurs", `
        <p class="def">Un <b>antigène</b> est tout élément étranger à l’organisme qui déclenche une réponse immunitaire : microbe, toxine, cellule étrangère.</p>
        <p class="def">Un <b>anticorps</b> est une molécule fabriquée par l’organisme, qui se fixe sur <b>un seul</b> antigène et le neutralise.</p>
        <ol><li>L’antigène entre dans l’organisme.</li><li>Des <b>lymphocytes B</b> le reconnaissent, se multiplient et se transforment en cellules productrices d’anticorps, les <b>plasmocytes</b>.</li>
        <li>Les anticorps passent dans le sang et se fixent sur l’antigène : il est neutralisé.</li><li>Les phagocytes éliminent l’ensemble.</li></ol>
        <p>Cette réponse demande plusieurs jours. Elle est dite <b>humorale</b> parce que les anticorps circulent dans les liquides du corps (le sang, la lymphe), qu’on appelait autrefois les « humeurs ».</p>
        <p>Des lymphocytes B <b>mémoire</b> sont conservés : au contact suivant avec le même antigène, la réponse est plus rapide et plus forte.</p>`]],
    gui: { titre: "Nous faisons — Quatre lots de cobayes", ctx: "On réalise quatre expériences sur des cobayes.", docs: [tHumorale], q: [
      qcm("I4", "Quel est le résultat pour le lot 3 ?", ["L’animal survit", "L’animal meurt", "L’animal devient paralysé", "On ne sait pas"], "Ligne 3, dernière colonne."),
      qcm("R2", "On compare les lots 1 et 2. Que peut-on conclure ?", ["L’anatoxine a protégé l’animal contre la toxine tétanique", "L’anatoxine tue l’animal", "La toxine tétanique est inoffensive", "Le sérum protège l’animal"], "Seule l’injection préalable d’anatoxine distingue les deux lots."),
      qcm("R2", "On compare les lots 3 et 4. Que peut-on conclure ?", ["La protection apportée par le sérum est spécifique : elle n’agit que contre la toxine tétanique", "Le sérum protège contre toutes les toxines", "Le sérum est toxique", "La toxine diphtérique est inoffensive"], "Même sérum, toxine différente : l’animal n’est plus protégé.")] },
    aut: { titre: "Tu fais — Antigènes et anticorps", ctx: "Utilise le tableau et tes connaissances.", docs: [tHumorale], q: [
      qcm("R2", "On compare les lots 1 et 3. Où se trouve ce qui protège l’animal ?", ["Dans le sérum : ce sont des substances dissoutes, les anticorps", "Dans les globules rouges", "Dans la toxine", "Dans la peau"], "L’animal du lot 3 n’a reçu que du sérum."),
      trous("K", "Complète.", "Un {0} est un élément étranger qui déclenche une réponse immunitaire. Un {1} est une molécule fabriquée par l’organisme, qui se fixe sur un seul antigène et le {2}.", [["antigène", "anticorps", "phagocyte"], ["anticorps", "antigène", "microbe"], ["neutralise", "multiplie", "nourrit"]], "L’antigène déclenche, l’anticorps neutralise."),
      ordre("K", "Remets dans l’ordre les étapes de la réponse humorale.", ["L’antigène entre dans l’organisme", "Des lymphocytes B le reconnaissent et se multiplient", "Ils se transforment en plasmocytes, qui produisent des anticorps", "Les anticorps se fixent sur l’antigène et le neutralisent", "Les phagocytes éliminent l’ensemble"], "Reconnaître, se multiplier, produire, neutraliser, éliminer."),
      qcm("K", "Pourquoi cette réponse est-elle dite « humorale » ?", ["Les anticorps circulent dans les liquides du corps, comme le sang", "Elle rend de bonne humeur", "Elle agit par contact direct entre cellules", "Elle se déroule dans les os"], "Les « humeurs » sont les liquides de l’organisme."),
      vf([["Un anticorps agit contre tous les antigènes.", false], ["Les anticorps sont produits par des cellules issues des lymphocytes B.", true], ["La réponse humorale est immédiate.", false], ["Une toxine est un antigène.", true]], "L’anticorps est spécifique, et il faut plusieurs jours pour le produire.")] },
    clo: `<ul><li><b>Antigène</b> : élément étranger qui déclenche une réponse immunitaire. <b>Anticorps</b> : molécule qui neutralise un antigène précis.</li><li>Les <b>lymphocytes B</b> reconnaissent l’antigène et donnent des <b>plasmocytes</b>, qui produisent les anticorps.</li><li>Cette réponse est <b>spécifique</b>, <b>humorale</b> (anticorps dans le sang) et demande plusieurs jours.</li><li>Des lymphocytes <b>mémoire</b> rendent la réponse suivante plus rapide.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 3 ----------
  const tCellulaire = table("Expériences sur des cobayes : le bacille de Koch (BK) provoque la tuberculose", ["Lot", "Ce que l’animal a reçu au préalable", "Injection ensuite", "Résultat"],
    [["1", "Rien", "BK", "Mort"], ["2", "BK atténué (vaccin BCG), un mois avant", "BK", "Survie"], ["3", "Sérum d’un animal du lot 2", "BK", "Mort"], ["4", "Lymphocytes d’un animal du lot 2", "BK", "Survie"]]);
  L(29, [1, 3, 2], {
    titre: "L’immunité spécifique à médiation cellulaire",
    objectif: "À la fin de la leçon, je sais montrer, à partir d’expériences, que certaines défenses sont assurées directement par des cellules, les lymphocytes T.",
    reussite: ["J’interprète quatre lots d’expériences.", "Je distingue la réponse cellulaire de la réponse humorale.", "Je cite le rôle des lymphocytes T tueurs."],
    pre: [`<p>Contre la toxine tétanique, la protection se trouve dans le <b>sérum</b> : ce sont des <b>anticorps</b> (leçon 28). En est-il de même contre tous les microbes ?</p>`, [
      qcm("K", "Où se trouvent les anticorps ?", ["Dans le sérum", "Dans les os", "Dans les globules rouges", "Dans les tendons"], "Ils circulent dans le sang."),
      qcm("K", "Quelles cellules produisent les anticorps ?", ["Les plasmocytes, issus des lymphocytes B", "Les globules rouges", "Les phagocytes", "Les plaquettes"], "C’est la réponse humorale.")]],
    mod: [["Je fais 1 — J’interprète les expériences", `
        <table class="t"><tr><th>Lot</th><th>Reçu au préalable</th><th>Puis</th><th>Résultat</th></tr><tr><th>1</th><td>Rien</td><td>BK</td><td>Mort</td></tr><tr><th>2</th><td>BCG, un mois avant</td><td>BK</td><td>Survie</td></tr><tr><th>3</th><td>Sérum d’un animal du lot 2</td><td>BK</td><td>Mort</td></tr><tr><th>4</th><td>Lymphocytes d’un animal du lot 2</td><td>BK</td><td>Survie</td></tr></table>
        <p>« <b>Lots 1 et 2.</b> Le BCG a protégé l’animal : il est <b>immunisé</b> contre le BK. »</p>
        <p>« <b>Lot 3.</b> Le sérum d’un animal immunisé ne protège pas. La protection n’est donc <b>pas</b> due à des anticorps circulants. »</p>
        <p>« <b>Lot 4.</b> Les lymphocytes d’un animal immunisé protègent. La protection est assurée par des <b>cellules</b>. »</p>
        <p class="def">Cette réponse est dite à <b>médiation cellulaire</b> : elle est assurée directement par des cellules, les <b>lymphocytes T</b>.</p>`],
      ["Je fais 2 — J’explique l’action des lymphocytes T", `
        <p>Le bacille de Koch, comme les virus, se cache <b>à l’intérieur</b> des cellules : les anticorps, qui circulent dans le sang, ne peuvent pas l’atteindre.</p>
        <ol><li>Des lymphocytes T reconnaissent l’antigène porté par une cellule infectée.</li><li>Ils se multiplient et donnent des <b>lymphocytes T tueurs</b> (cytotoxiques).</li>
        <li>Chaque lymphocyte T tueur se fixe sur une cellule infectée et la <b>détruit par contact</b>.</li><li>Les phagocytes éliminent les débris.</li></ol>
        <table class="t"><tr><th></th><th>Réponse humorale</th><th>Réponse cellulaire</th></tr><tr><th>Cellules</th><td>Lymphocytes B</td><td>Lymphocytes T</td></tr><tr><th>Moyen d’action</th><td>Anticorps libérés dans le sang</td><td>Contact direct avec la cellule cible</td></tr><tr><th>Cible</th><td>Microbes et toxines libres dans les liquides</td><td>Cellules infectées, cellules étrangères (greffe)</td></tr><tr><th>Transmise par</th><td>Le sérum</td><td>Les lymphocytes</td></tr></table>
        <p>Les deux réponses sont <b>spécifiques</b> et gardent une <b>mémoire</b>. C’est la réponse cellulaire qui provoque le <b>rejet des greffes</b>.</p>`]],
    gui: { titre: "Nous faisons — Le BCG et le bacille de Koch", ctx: "On réalise quatre expériences sur des cobayes.", docs: [tCellulaire], q: [
      qcm("I4", "Dans quels lots les animaux survivent-ils ?", ["Les lots 2 et 4", "Les lots 1 et 3", "Les lots 2 et 3", "Les lots 3 et 4"], "Colonne « Résultat »."),
      qcm("R2", "Que montre le lot 3 ?", ["Le sérum d’un animal immunisé ne protège pas contre le BK", "Le sérum protège contre le BK", "Le BCG est mortel", "Le BK est inoffensif"], "L’animal meurt malgré le sérum : la protection ne passe pas par des anticorps circulants."),
      qcm("R2", "Que montre le lot 4 ?", ["La protection contre le BK est assurée par des cellules, les lymphocytes", "La protection est assurée par le sérum", "Les lymphocytes tuent l’animal", "Le BK est détruit par l’anatoxine"], "Les lymphocytes transférés suffisent à protéger l’animal.")] },
    aut: { titre: "Tu fais — Deux réponses spécifiques", ctx: "Utilise le tableau et tes connaissances.", docs: [tCellulaire], q: [
      qcm("R2", "On compare les lots 1 et 2. Que peut-on conclure ?", ["Le BCG immunise l’animal contre le bacille de Koch", "Le BCG rend l’animal malade", "Le BK protège contre le BCG", "Le sérum immunise l’animal"], "Seule l’injection préalable de BCG distingue les deux lots."),
      assoc("K", "Associe chaque caractère à la réponse qui convient.", ["Elle est assurée par les lymphocytes B", "Elle agit par contact direct entre cellules", "Elle est transmise par le sérum", "Elle détruit les cellules infectées"], ["Réponse à médiation cellulaire", "Réponse à médiation humorale"], [1, 0, 1, 0], "Humorale : lymphocytes B, anticorps, sérum. Cellulaire : lymphocytes T, contact, cellules infectées."),
      qcm("R1", "Pourquoi les anticorps sont-ils peu efficaces contre le bacille de Koch ?", ["Le bacille se trouve à l’intérieur des cellules, hors d’atteinte des anticorps", "Le bacille est trop gros", "Le bacille n’est pas un antigène", "Les anticorps détruisent les lymphocytes"], "Les anticorps circulent dans les liquides, pas dans les cellules."),
      ordre("K", "Remets dans l’ordre les étapes de la réponse cellulaire.", ["Des lymphocytes T reconnaissent l’antigène d’une cellule infectée", "Ils se multiplient et donnent des lymphocytes T tueurs", "Les lymphocytes T tueurs détruisent les cellules infectées par contact", "Les phagocytes éliminent les débris"], "Reconnaître, se multiplier, détruire, nettoyer."),
      vf([["La réponse cellulaire est spécifique.", true], ["Les lymphocytes T tueurs libèrent des anticorps.", false], ["Le rejet d’une greffe est dû à la réponse cellulaire.", true], ["Les deux réponses spécifiques gardent une mémoire.", true]], "Les lymphocytes T tueurs agissent par contact direct, sans anticorps.")] },
    clo: `<ul><li>Certaines protections ne sont pas transmises par le sérum, mais par les <b>lymphocytes</b> : c’est la réponse à <b>médiation cellulaire</b>.</li><li>Les <b>lymphocytes T tueurs</b> détruisent par contact les cellules infectées ou étrangères.</li><li>Elle vise les microbes cachés dans les cellules (bacille de Koch, virus) et provoque le rejet des greffes.</li><li>Comme la réponse humorale, elle est <b>spécifique</b> et garde une <b>mémoire</b>.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 4 ----------
  const tOrigine = table("Expériences sur des souris dont on a détruit la moelle osseuse par irradiation", ["Lot", "Traitement après l’irradiation", "Production d’anticorps", "Lymphocytes T tueurs"],
    [["1", "Aucun", "Non", "Non"], ["2", "Greffe de moelle osseuse", "Oui", "Oui"], ["3", "Greffe de moelle osseuse, mais thymus retiré", "Non, ou très faible", "Non"]]);
  L(30, [1, 3, 3], {
    titre: "Les origines et la coopération des cellules immunitaires",
    objectif: "À la fin de la leçon, je sais dire où naissent les cellules immunitaires et expliquer comment elles coopèrent.",
    reussite: ["Je cite l’origine des lymphocytes B et T.", "J’interprète une expérience à trois lots.", "J’explique le rôle central des lymphocytes T4."],
    pre: [`<p>Tu connais trois types de cellules de défense : les <b>phagocytes</b> (leçon 27), les <b>lymphocytes B</b> (leçon 28) et les <b>lymphocytes T</b> (leçon 29).</p>`, [
      assoc("K", "Rappelle le rôle de chaque cellule.", ["Le phagocyte", "Le lymphocyte B", "Le lymphocyte T tueur"], ["Détruit par contact les cellules infectées", "Englobe et digère les microbes", "Donne des cellules productrices d’anticorps"], [1, 2, 0], "Phagocytose, anticorps, destruction par contact."),
      qcm("K", "Ces trois cellules sont :", ["des globules blancs", "des globules rouges", "des plaquettes", "des neurones"], "Ce sont des leucocytes.")]],
    mod: [["Je fais 1 — Je cherche l’origine des cellules", `
        <table class="t"><tr><th>Lot</th><th>Après l’irradiation</th><th>Anticorps</th><th>Lymphocytes T tueurs</th></tr><tr><th>1</th><td>Rien</td><td>Non</td><td>Non</td></tr><tr><th>2</th><td>Greffe de moelle osseuse</td><td>Oui</td><td>Oui</td></tr><tr><th>3</th><td>Greffe de moelle, thymus retiré</td><td>Non, ou très faible</td><td>Non</td></tr></table>
        <p>« <b>Lots 1 et 2.</b> Sans moelle osseuse, aucune défense spécifique ; avec une greffe de moelle, les deux réponses reviennent. Je conclus : toutes les cellules immunitaires <b>naissent dans la moelle osseuse</b>. »</p>
        <p>« <b>Lots 2 et 3.</b> La seule différence est le thymus. Sans thymus, pas de lymphocytes T tueurs. Je conclus : les lymphocytes T ont besoin du <b>thymus</b> pour devenir fonctionnels. »</p>
        <table class="t"><tr><th>Cellule</th><th>Naissance</th><th>Maturation</th></tr><tr><td>Lymphocyte B</td><td>Moelle osseuse</td><td>Moelle osseuse</td></tr><tr><td>Lymphocyte T</td><td>Moelle osseuse</td><td>Thymus</td></tr><tr><td>Phagocyte</td><td>Moelle osseuse</td><td>—</td></tr></table>
        <p>Les cellules mûres gagnent ensuite les <b>ganglions lymphatiques</b>, la <b>rate</b> et les <b>amygdales</b>, où elles rencontrent les antigènes.</p>`],
      ["Je fais 2 — J’explique la coopération", `
        <p>« Dans le lot 3, la production d’anticorps est très faible, alors que les lymphocytes B sont présents. Il leur manque donc une aide : celle de certains lymphocytes T. »</p>
        <ol><li>Un <b>phagocyte</b> (macrophage) digère le microbe et en <b>présente</b> des fragments à sa surface.</li>
        <li>Des <b>lymphocytes T4</b> (auxiliaires) reconnaissent ces fragments et s’activent.</li>
        <li>Ils libèrent des <b>messagers chimiques</b>.</li>
        <li>Ces messagers stimulent la multiplication des <b>lymphocytes B</b> (→ anticorps) et des <b>lymphocytes T8</b> (→ lymphocytes T tueurs).</li></ol>
        <p class="def">Les cellules immunitaires <b>coopèrent</b>. Les <b>lymphocytes T4</b> sont les chefs d’orchestre des réponses spécifiques.</p>
        <p>« Je comprends pourquoi une maladie qui détruit les lymphocytes T4 affaiblit <b>toutes</b> les défenses spécifiques. » C’est le cas du SIDA.</p>`]],
    gui: { titre: "Nous faisons — La moelle osseuse et le thymus", ctx: "On détruit par irradiation la moelle osseuse de souris, puis on leur applique trois traitements différents.", docs: [tOrigine], q: [
      qcm("I4", "Dans quel lot les deux réponses spécifiques sont-elles rétablies ?", ["Le lot 2", "Le lot 1", "Le lot 3", "Aucun"], "Ligne 2 : « Oui » dans les deux colonnes."),
      qcm("R2", "On compare les lots 1 et 2. Que peut-on conclure ?", ["Les cellules immunitaires naissent dans la moelle osseuse", "La moelle osseuse détruit les lymphocytes", "L’irradiation fabrique des anticorps", "Le thymus produit la moelle osseuse"], "La greffe de moelle rétablit les deux réponses."),
      qcm("R2", "On compare les lots 2 et 3. Quel est le rôle du thymus ?", ["Il permet aux lymphocytes T de devenir fonctionnels", "Il fabrique les globules rouges", "Il détruit les anticorps", "Il n’a aucun rôle"], "Sans thymus, pas de lymphocytes T tueurs.")] },
    aut: { titre: "Tu fais — Origine et coopération", ctx: "Utilise le tableau et tes connaissances.", docs: [tOrigine], q: [
      qcm("R2", "Dans le lot 3, les lymphocytes B sont présents, mais la production d’anticorps est très faible. Comment l’expliquer ?", ["Sans lymphocytes T, les lymphocytes B ne sont plus stimulés", "Les lymphocytes B ont été détruits", "Le thymus fabrique les anticorps", "Les anticorps sont inutiles"], "Les lymphocytes T4 aident les lymphocytes B."),
      assoc("K", "Associe chaque cellule à son lieu de maturation.", ["Le lymphocyte B", "Le lymphocyte T"], ["Le thymus", "La moelle osseuse"], [1, 0], "B comme « bone marrow » (moelle osseuse), T comme thymus."),
      ordre("K", "Remets dans l’ordre les étapes de la coopération.", ["Un phagocyte présente des fragments du microbe", "Des lymphocytes T4 reconnaissent ces fragments et s’activent", "Les lymphocytes T4 libèrent des messagers chimiques", "Les lymphocytes B et T8 se multiplient"], "Présenter, reconnaître, signaler, multiplier."),
      qcm("R2", "Une maladie détruit les lymphocytes T4. Quelle en est la conséquence ?", ["Les deux réponses spécifiques, humorale et cellulaire, sont affaiblies", "Seule la phagocytose disparaît", "Les défenses sont renforcées", "Rien ne change"], "Les lymphocytes T4 stimulent à la fois les lymphocytes B et les lymphocytes T8."),
      vf([["Toutes les cellules immunitaires naissent dans la moelle osseuse.", true], ["Les lymphocytes T mûrissent dans la rate.", false], ["Les ganglions lymphatiques contiennent des lymphocytes.", true], ["Les lymphocytes T4 libèrent des messagers chimiques.", true]], "Les lymphocytes T mûrissent dans le thymus.")] },
    clo: `<ul><li>Toutes les cellules immunitaires naissent dans la <b>moelle osseuse</b> ; les lymphocytes T mûrissent dans le <b>thymus</b>.</li><li>Elles se rassemblent dans les ganglions lymphatiques, la rate et les amygdales.</li><li><b>Coopération</b> : le phagocyte présente l’antigène ; les <b>lymphocytes T4</b> s’activent et stimulent les lymphocytes B et T8 par des messagers chimiques.</li><li>Les lymphocytes T4 sont indispensables aux deux réponses spécifiques.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 5 ----------
  const gVaccin = graph("Quantité d’anticorps dans le sang après deux injections du même vaccin", "Temps (semaines)", "Anticorps (unités arbitraires)", 12, 110,
    [["Anticorps contre l’antigène du vaccin", [[0, 0], [1, 1], [2, 8], [3, 10], [5, 5], [8, 3], [9, 60], [10, 100], [12, 90]]]], [{ x: 0, label: "1re injection" }, { x: 8, label: "Rappel" }]);
  const tAides = table("Comparaison de la vaccination et de la sérothérapie", ["", "Vaccination", "Sérothérapie"],
    [["Ce que l’on injecte", "Un antigène rendu inoffensif", "Des anticorps déjà fabriqués"], ["Délai d’action", "Plusieurs jours", "Immédiat"], ["Durée de la protection", "Longue : des années", "Courte : quelques semaines"], ["Usage", "Préventif", "Curatif, en urgence"], ["Mémoire immunitaire", "Oui", "Non"]]);
  L(31, [1, 3, 4], {
    titre: "Les aides aux réponses immunitaires",
    objectif: "À la fin de la leçon, je sais expliquer le principe de la vaccination et de la sérothérapie, et choisir entre les deux selon la situation.",
    reussite: ["J’explique l’intérêt du rappel à partir d’une courbe.", "Je compare vaccination et sérothérapie dans un tableau à double entrée.", "Je choisis l’aide adaptée à un cas."],
    pre: [`<p>La réponse spécifique demande plusieurs jours, mais elle laisse une <b>mémoire</b> : au second contact avec le même antigène, elle est plus rapide et plus forte (leçons 28 et 29).</p>`, [
      qcm("K", "Que laisse une première rencontre avec un antigène ?", ["Des lymphocytes mémoire", "Rien", "Des toxines", "Des globules rouges"], "Ils rendent la réponse suivante plus efficace."),
      qcm("K", "Qu’est-ce qu’une anatoxine ?", ["Une toxine rendue inoffensive", "Un anticorps", "Un antibiotique", "Un virus"], "Elle garde le pouvoir de déclencher une réponse immunitaire.")]],
    mod: [["Je fais 1 — J’explique la vaccination par une courbe", `
        <p class="def"><b>Vacciner</b>, c’est introduire dans l’organisme un antigène rendu <b>inoffensif</b> (microbe tué ou atténué, anatoxine), pour qu’il fabrique lui-même ses anticorps et garde la mémoire, <b>sans faire la maladie</b>.</p>
        <p>« Je lis la courbe en deux temps, autour de la date du rappel. »</p>
        <ul><li>« Après la <b>première injection</b>, les anticorps apparaissent lentement et atteignent un maximum de 10 unités à 3 semaines, puis diminuent. »</li>
        <li>« Après le <b>rappel</b>, à 8 semaines, ils atteignent 100 unités en 2 semaines seulement, et restent élevés. »</li></ul>
        <p>« Je compare : la seconde réponse est <b>dix fois plus forte</b> et <b>plus rapide</b>. C’est l’effet de la mémoire immunitaire. Voilà pourquoi on fait des rappels. »</p>
        <p>La vaccination est <b>préventive</b> et <b>spécifique</b> : le vaccin contre le tétanos ne protège pas de la rougeole.</p>`],
      ["Je fais 2 — Je compare vaccination et sérothérapie", `
        <p class="def">La <b>sérothérapie</b> consiste à injecter un sérum contenant des <b>anticorps déjà fabriqués</b>.</p>
        <table class="t"><tr><th></th><th>Vaccination</th><th>Sérothérapie</th></tr><tr><th>On injecte</th><td>Un antigène inoffensif</td><td>Des anticorps</td></tr><tr><th>Délai</th><td>Plusieurs jours</td><td>Immédiat</td></tr><tr><th>Durée</th><td>Des années</td><td>Quelques semaines</td></tr><tr><th>Usage</th><td>Préventif</td><td>Curatif</td></tr></table>
        <p>« Pour choisir, je me demande : la personne est-elle <b>déjà en danger</b> ? Si oui, il faut des anticorps tout de suite : <b>sérum</b>. Sinon, je prépare son organisme : <b>vaccin</b>. »</p>
        <p>« Un jardinier non vacciné se blesse profondément avec un outil souillé de terre : danger de tétanos, immédiat. Sérum antitétanique d’abord, puis vaccin pour l’avenir. »</p>
        <p><b>Erreur fréquente</b> : dire que le vaccin « contient des anticorps ». C’est le sérum qui en contient ; le vaccin contient un antigène.</p>`]],
    gui: { titre: "Nous faisons — Le rappel de vaccin", ctx: "On dose les anticorps dans le sang d’une personne vaccinée, qui reçoit un rappel 8 semaines après la première injection.", docs: [gVaccin], q: [
      num("I1", "Quelle est la quantité maximale d’anticorps après la première injection ?", 10, "unités", "Le premier sommet, à 3 semaines : 10 unités.", 2),
      num("I1", "Quelle est la quantité maximale d’anticorps après le rappel ?", 100, "unités", "Le second sommet, à 10 semaines : 100 unités.", 3),
      qcm("R1", "Pourquoi la réponse est-elle plus forte et plus rapide après le rappel ?", ["L’organisme a gardé des lymphocytes mémoire depuis la première injection", "Le vaccin du rappel contient des anticorps", "Le microbe est devenu plus faible", "Les anticorps de la première injection sont restés intacts"], "C’est la mémoire immunitaire.")] },
    aut: { titre: "Tu fais — Vaccin ou sérum ?", ctx: "Utilise le tableau pour répondre.", docs: [tAides], q: [
      qcm("I4", "Quelle est la durée de la protection apportée par la sérothérapie ?", ["Courte : quelques semaines", "Longue : des années", "Toute la vie", "Aucune"], "Ligne « Durée de la protection », colonne « Sérothérapie »."),
      qcm("I4", "Laquelle des deux aides laisse une mémoire immunitaire ?", ["La vaccination", "La sérothérapie", "Les deux", "Aucune"], "Dernière ligne du tableau."),
      assoc("R2", "Choisis l’aide la mieux adaptée à chaque situation.", ["Un nourrisson en bonne santé, à protéger contre la rougeole", "Une personne non vaccinée mordue par un chien enragé", "Un voyageur qui partira dans six mois en zone de fièvre jaune", "Un blessé non vacciné contre le tétanos"], ["Sérum, puis vaccin", "Vaccin"], [1, 0, 1, 0], "S’il y a urgence, le sérum apporte des anticorps immédiatement ; sinon, le vaccin prépare l’organisme."),
      qcm("R1", "Pourquoi la protection apportée par le sérum est-elle de courte durée ?", ["Les anticorps injectés sont peu à peu éliminés, et l’organisme n’en fabrique pas lui-même", "Le sérum contient un antigène", "Le sérum détruit les lymphocytes", "Le sérum crée une mémoire trop forte"], "Aucune cellule mémoire n’a été formée."),
      vf([["Le vaccin contient des anticorps déjà fabriqués.", false], ["La vaccination est spécifique.", true], ["Un rappel renforce la protection.", true], ["La sérothérapie agit immédiatement.", true]], "Le vaccin contient un antigène inoffensif ; c’est le sérum qui contient des anticorps.")] },
    clo: `<ul><li><b>Vaccination</b> : antigène inoffensif → l’organisme fabrique ses anticorps et garde la mémoire. Préventive, durable, spécifique, mais lente à agir.</li><li>Les <b>rappels</b> entretiennent la mémoire : réponse plus rapide et plus forte.</li><li><b>Sérothérapie</b> : anticorps déjà fabriqués. Curative, immédiate, mais de courte durée et sans mémoire.</li><li>En cas d’urgence : sérum d’abord, vaccin ensuite.</li></ul>`
  });

  // ---------- Chapitre 5, séquence 1 ----------
  const tAllergie = table("Tests cutanés réalisés chez une personne qui éternue chaque printemps", ["Substance déposée sur la peau", "Diamètre de la rougeur après 20 minutes"],
    [["Eau salée (témoin)", "0 mm"], ["Pollen de graminées", "9 mm"], ["Acariens de la poussière", "0 mm"], ["Poils de chat", "1 mm"]]);
  L(32, [1, 4, 0], {
    titre: "Les allergies",
    objectif: "À la fin de la leçon, je sais expliquer le mécanisme d’une allergie et les moyens de la prévenir.",
    reussite: ["Je définis l’allergie et l’allergène.", "Je distingue le premier contact des contacts suivants.", "J’interprète un test cutané."],
    pre: [`<p>Le système immunitaire fabrique des <b>anticorps</b> contre les antigènes (leçon 28). Parfois, il réagit trop fort, contre une substance qui ne présente aucun danger.</p>`, [
      qcm("K", "Un anticorps est fabriqué en réponse à :", ["un antigène", "un globule rouge", "un nutriment", "un tendon"], "L’antigène est l’élément étranger."),
      qcm("K", "Dans une expérience, le témoin sert à :", ["comparer", "fausser les résultats", "gagner du temps", "remplacer le test"], "Il montre ce qui se passe sans la substance testée.")]],
    mod: [["Je fais 1 — J’explique le mécanisme en deux temps", `
        <p class="def">Une <b>allergie</b> est une réaction excessive du système immunitaire contre une substance habituellement inoffensive, appelée <b>allergène</b> : pollen, acariens, poils d’animaux, certains aliments, certains médicaments.</p>
        <p class="ctx">Je distingue toujours deux temps.</p>
        <table class="t"><tr><th></th><th>Premier contact</th><th>Contacts suivants</th></tr>
        <tr><th>Ce qui se passe</th><td>L’organisme fabrique des anticorps particuliers, qui se fixent sur des cellules de la peau et des muqueuses, les <b>mastocytes</b></td><td>L’allergène se fixe sur ces anticorps : les mastocytes libèrent brutalement de l’<b>histamine</b></td></tr>
        <tr><th>Signes</th><td>Aucun : c’est la <b>sensibilisation</b></td><td>Éternuements, yeux qui piquent, plaques rouges, gêne respiratoire</td></tr></table>
        <p>« Une personne mange des fraises pour la première fois : rien. La fois suivante : des plaques rouges. Ce n’est pas un hasard : le premier contact l’a sensibilisée. »</p>
        <p>L’<b>histamine</b> dilate les vaisseaux (rougeur, gonflement) et contracte les bronches (asthme). Formes d’allergie : rhume des foins, asthme, urticaire, eczéma. La forme la plus grave, le choc anaphylactique, est une urgence vitale.</p>`],
      ["Je fais 2 — J’interprète un test cutané", `
        <p>Pour trouver l’allergène, le médecin dépose sur la peau une goutte de chaque substance suspecte, pique légèrement, et mesure la rougeur.</p>
        <table class="t"><tr><th>Substance</th><th>Rougeur</th></tr><tr><td>Eau salée (témoin)</td><td>0 mm</td></tr><tr><td>Pollen de graminées</td><td>9 mm</td></tr><tr><td>Acariens</td><td>0 mm</td></tr></table>
        <p>« Je commence par le <b>témoin</b> : 0 mm. La piqûre seule ne provoque rien. Je compare ensuite chaque ligne au témoin : pollen, 9 mm ; acariens, 0 mm. Je conclus : cette personne est allergique au pollen de graminées, pas aux acariens. »</p>
        <p><b>Prévention et traitement :</b></p>
        <ul><li><b>éviter</b> l’allergène, quand c’est possible ;</li><li>prendre des médicaments <b>antihistaminiques</b>, qui bloquent l’action de l’histamine ;</li><li>la <b>désensibilisation</b> : on habitue l’organisme par des doses très faibles, puis croissantes, d’allergène.</li></ul>
        <p><b>Erreur fréquente</b> : croire qu’une allergie se déclare dès le premier contact, ou qu’elle est contagieuse.</p>`]],
    gui: { titre: "Nous faisons — Un test cutané", ctx: "Un médecin réalise quatre tests sur l’avant-bras d’une personne.", docs: [tAllergie], q: [
      qcm("I4", "Quelle est la rougeur obtenue avec le pollen de graminées ?", ["9 mm", "0 mm", "1 mm", "20 mm"], "Deuxième ligne du tableau."),
      qcm("R3", "À quoi sert le test à l’eau salée ?", ["C’est le témoin : il montre que la piqûre seule ne provoque pas de rougeur", "Il soigne l’allergie", "Il révèle une allergie au sel", "Il ne sert à rien"], "On compare chaque résultat à ce témoin."),
      qcm("R2", "À quoi cette personne est-elle allergique ?", ["Au pollen de graminées", "Aux acariens", "À l’eau salée", "À rien"], "Seul le pollen donne une rougeur nette (9 mm, contre 0 mm pour le témoin).")] },
    aut: { titre: "Tu fais — Comprendre l’allergie", ctx: "Utilise le tableau et tes connaissances.", docs: [tAllergie], q: [
      qcm("I4", "Quelle est la rougeur obtenue avec les acariens ?", ["0 mm", "9 mm", "1 mm", "5 mm"], "Troisième ligne du tableau."),
      ordre("K", "Remets dans l’ordre les étapes d’une allergie.", ["Premier contact avec l’allergène", "Fabrication d’anticorps qui se fixent sur les mastocytes", "Nouveau contact avec le même allergène", "Libération d’histamine par les mastocytes", "Apparition des signes de l’allergie"], "Sensibilisation d’abord, réaction ensuite."),
      qcm("R1", "Pourquoi cette personne éternue-t-elle au printemps et pas en hiver ?", ["Le pollen de graminées, son allergène, n’est présent dans l’air qu’au printemps", "Elle est plus fatiguée au printemps", "Les acariens disparaissent en hiver", "Le froid détruit l’histamine"], "Sans allergène, pas de réaction."),
      assoc("K", "Associe chaque moyen à son principe.", ["L’éviction", "L’antihistaminique", "La désensibilisation"], ["Habituer l’organisme par des doses croissantes d’allergène", "Éviter le contact avec l’allergène", "Bloquer l’action de l’histamine"], [1, 2, 0], "Éviter, bloquer, habituer."),
      vf([["Une allergie se manifeste dès le premier contact avec l’allergène.", false], ["L’histamine provoque rougeur et gonflement.", true], ["Une allergie est contagieuse.", false], ["Un aliment peut être un allergène.", true]], "Le premier contact sensibilise sans provoquer de signes ; une allergie ne se transmet pas.")] },
    clo: `<ul><li>L’<b>allergie</b> est une réaction excessive du système immunitaire contre un <b>allergène</b> inoffensif.</li><li><b>Premier contact</b> : sensibilisation, sans signe. <b>Contacts suivants</b> : libération d’<b>histamine</b>, signes de l’allergie.</li><li>Le <b>test cutané</b>, comparé à un témoin, identifie l’allergène.</li><li>Éviter l’allergène, antihistaminiques, désensibilisation.</li></ul>`
  });

  // ---------- Chapitre 5, séquence 2 ----------
  const gVIH = graph("Évolution, sans traitement, chez une personne infectée par le VIH", "Temps (années)", "Valeur (unités arbitraires)", 10, 110,
    [["Lymphocytes T4 (en % de la valeur normale)", [[0, 100], [0.5, 50], [1, 70], [4, 50], [7, 30], [9, 15], [10, 5]]], ["Quantité de virus dans le sang", [[0, 0], [0.5, 80], [1, 15], [4, 20], [7, 40], [9, 70], [10, 100]]]]);
  const tTransm = table("Le VIH se transmet-il ?", ["Situation", "Transmission du VIH"],
    [["Rapport sexuel non protégé avec une personne infectée", "Oui"], ["Partage d’une seringue ou d’un objet souillé de sang", "Oui"], ["De la mère infectée à son enfant (grossesse, accouchement, allaitement)", "Oui"], ["Serrer la main, embrasser sur la joue", "Non"], ["Partager un repas, boire dans le même verre", "Non"], ["Piqûre de moustique", "Non"]]);
  L(33, [1, 4, 1], {
    titre: "Le syndrome d’immunodéficience acquise : le SIDA",
    objectif: "À la fin de la leçon, je sais expliquer comment le VIH affaiblit le système immunitaire, comment il se transmet et comment s’en protéger.",
    reussite: ["Je décris l’évolution des lymphocytes T4 et du virus sur un graphique à deux courbes.", "Je distingue séropositivité et SIDA.", "Je cite les modes de transmission et les moyens de prévention."],
    pre: [`<p>Les <b>lymphocytes T4</b> sont les chefs d’orchestre des réponses immunitaires spécifiques (leçon 30). Un <b>virus</b> ne se multiplie qu’à l’intérieur d’une cellule (leçon 25).</p>`, [
      qcm("K", "Quel est le rôle des lymphocytes T4 ?", ["Stimuler les lymphocytes B et les lymphocytes T8", "Transporter le dioxygène", "Phagocyter les microbes", "Coaguler le sang"], "Sans eux, les deux réponses spécifiques s’affaiblissent."),
      qcm("K", "Où un virus se multiplie-t-il ?", ["À l’intérieur d’une cellule vivante", "Dans l’eau", "Dans l’air", "Sur la peau"], "Il détourne le fonctionnement de la cellule qu’il infecte.")]],
    mod: [["Je fais 1 — Je lis deux courbes qui évoluent en sens contraire", `
        <p class="def">Le <b>SIDA</b> (syndrome d’immunodéficience acquise) est dû à un virus, le <b>VIH</b> (virus de l’immunodéficience humaine). Le VIH infecte et détruit les <b>lymphocytes T4</b>.</p>
        <p class="ctx">Je découpe le graphique en trois périodes et, pour chacune, je décris les deux courbes.</p>
        <table class="t"><tr><th>Période</th><th>Virus</th><th>Lymphocytes T4</th><th>État de la personne</th></tr>
        <tr><th>Première année : primo-infection</th><td>Il augmente fortement, puis diminue</td><td>Ils chutent, puis remontent en partie</td><td>Signes proches d’une grippe, ou rien</td></tr>
        <tr><th>De 1 à 7 ans environ : phase sans symptôme</th><td>Il augmente lentement</td><td>Ils diminuent lentement</td><td>Aucun signe, mais la personne est contagieuse</td></tr>
        <tr><th>Ensuite : SIDA déclaré</th><td>Il augmente fortement</td><td>Ils s’effondrent</td><td>Maladies opportunistes</td></tr></table>
        <p>« Je relie les deux courbes : quand le virus augmente, les lymphocytes T4 diminuent. Le virus se multiplie <b>dans</b> les T4 et les détruit. »</p>
        <p>Sans lymphocytes T4, l’organisme ne se défend plus : des microbes habituellement peu dangereux provoquent des <b>maladies opportunistes</b> (tuberculose, pneumonies, certains cancers).</p>
        <p class="def">Une personne <b>séropositive</b> possède dans son sang des anticorps contre le VIH : elle est infectée et peut transmettre le virus, même sans aucun symptôme.</p>`],
      ["Je fais 2 — Je distingue ce qui transmet le virus de ce qui ne le transmet pas", `
        <p>Le VIH se trouve dans le <b>sang</b>, le <b>sperme</b>, les <b>sécrétions vaginales</b> et le <b>lait maternel</b>. « Pour chaque situation, je me demande : l’un de ces liquides passe-t-il d’une personne à l’autre ? »</p>
        <table class="t"><tr><th>Transmet le VIH</th><th>Ne transmet pas le VIH</th></tr>
        <tr><td>Rapports sexuels non protégés</td><td>Serrer la main, embrasser sur la joue</td></tr><tr><td>Sang : seringue partagée, objet souillé</td><td>Partager un repas, un verre, des toilettes</td></tr><tr><td>De la mère à l’enfant</td><td>Piqûre de moustique, toux, éternuement</td></tr></table>
        <p><b>Prévention</b> : abstinence ou fidélité ; préservatif ; matériel d’injection à usage unique ; contrôle du sang transfusé ; suivi médical de la femme enceinte séropositive ; <b>test de dépistage</b>.</p>
        <p>Il n’existe pas encore de vaccin. Les traitements actuels (trithérapie) empêchent le virus de se multiplier et permettent de vivre longtemps, mais ils ne le font pas disparaître.</p>
        <p>Une personne séropositive n’est pas dangereuse dans la vie quotidienne : rien ne justifie de la mettre à l’écart.</p>`]],
    gui: { titre: "Nous faisons — Le virus et les lymphocytes T4", ctx: "On suit pendant dix ans, sans traitement, la quantité de virus et le nombre de lymphocytes T4 d’une personne infectée.", docs: [gVIH], q: [
      num("I1", "À combien de pour cent de la valeur normale sont les lymphocytes T4 au bout de 7 ans ?", 30, "%", "Courbe des lymphocytes T4, à 7 ans : 30 %.", 3),
      qcm("I1", "Comment évoluent les deux courbes entre la 7ᵉ et la 10ᵉ année ?", ["Le virus augmente de 40 à 100, alors que les lymphocytes T4 diminuent de 30 % à 5 %", "Les deux courbes augmentent", "Les deux courbes diminuent", "Le virus diminue, alors que les lymphocytes T4 augmentent"], "Les deux courbes évoluent en sens contraire."),
      qcm("R1", "Pourquoi le nombre de lymphocytes T4 diminue-t-il quand le virus augmente ?", ["Le VIH se multiplie dans les lymphocytes T4 et les détruit", "Les lymphocytes T4 se transforment en virus utiles", "Le virus nourrit les lymphocytes T4", "Les lymphocytes T4 quittent le sang pour le cerveau"], "Le VIH a pour cible les lymphocytes T4.")] },
    aut: { titre: "Tu fais — Transmission et prévention", ctx: "Utilise le tableau pour répondre.", docs: [tTransm], q: [
      qcm("I4", "Une piqûre de moustique transmet-elle le VIH ?", ["Non", "Oui", "Parfois", "Seulement en été"], "Dernière ligne du tableau."),
      assoc("I4", "Cette situation transmet-elle le VIH ?", ["Un rapport sexuel non protégé", "Serrer la main", "Le partage d’une seringue", "Boire dans le même verre"], ["Ne transmet pas le VIH", "Transmet le VIH"], [1, 0, 1, 0], "Le VIH se transmet par le sang, les liquides sexuels et de la mère à l’enfant."),
      qcm("R2", "Une personne séropositive ne présente aucun symptôme. Peut-elle transmettre le virus ?", ["Oui : elle porte le virus dans son sang et ses liquides sexuels", "Non : sans symptôme, il n’y a pas de virus", "Non : elle est guérie", "Seulement si elle tousse"], "La phase sans symptôme dure plusieurs années, et la personne est contagieuse."),
      qcm("R1", "Pourquoi les malades du SIDA souffrent-ils de maladies opportunistes ?", ["La destruction des lymphocytes T4 laisse l’organisme sans défense spécifique", "Le VIH fabrique d’autres microbes", "Les anticorps deviennent trop nombreux", "Les globules rouges disparaissent"], "Sans lymphocytes T4, les lymphocytes B et T8 ne sont plus stimulés."),
      vf([["Le VIH détruit les lymphocytes T4.", true], ["Il existe un vaccin efficace contre le SIDA.", false], ["Le préservatif protège contre la transmission sexuelle du VIH.", true], ["Les traitements actuels font disparaître définitivement le virus.", false]], "Il n’existe pas encore de vaccin ; les traitements bloquent la multiplication du virus sans l’éliminer.")] },
    clo: `<ul><li>Le <b>SIDA</b> est dû au <b>VIH</b>, qui infecte et détruit les <b>lymphocytes T4</b>.</li><li>Primo-infection → longue phase sans symptôme (séropositivité) → SIDA déclaré, avec <b>maladies opportunistes</b>.</li><li>Transmission : rapports sexuels non protégés, sang, de la mère à l’enfant. Pas par les gestes de la vie courante.</li><li>Prévention : fidélité, préservatif, matériel à usage unique, dépistage. Pas de vaccin ; les traitements freinent le virus.</li></ul>`
  });

  // ---------- Chapitre 6, séquence 1 ----------
  const tIST = table("Quelques infections sexuellement transmissibles (IST)", ["Infection", "Microbe", "Principaux signes", "Traitement ou prévention"],
    [["Syphilis", "Bactérie", "Petite plaie indolore, puis taches sur la peau ; atteintes graves des années plus tard", "Antibiotiques"], ["Gonococcie (blennorragie)", "Bactérie", "Écoulement, brûlures en urinant ; risque de stérilité", "Antibiotiques"], ["Hépatite B", "Virus", "Fatigue, jaunisse ; atteinte du foie", "Vaccin"], ["SIDA", "Virus (VIH)", "Longue phase sans signe, puis maladies opportunistes", "Pas de vaccin ; traitements qui freinent le virus"], ["Mycose génitale", "Champignon microscopique", "Démangeaisons", "Médicaments antifongiques"]]);
  L(34, [1, 5, 0], {
    titre: "L’hygiène de l’appareil reproducteur",
    objectif: "À la fin de la leçon, je sais citer les principales infections sexuellement transmissibles, leurs agents et les moyens de s’en protéger.",
    reussite: ["Je lis un tableau à double entrée à cinq lignes.", "Je relie le type de microbe au traitement possible.", "Je cite les règles de prévention."],
    pre: [`<p>Le VIH se transmet notamment par les <b>rapports sexuels</b> (leçon 33). D’autres microbes empruntent la même voie. Les <b>antibiotiques</b> n’agissent que sur les bactéries (leçon 26).</p>`, [
      qcm("K", "Sur quels microbes les antibiotiques agissent-ils ?", ["Sur les bactéries", "Sur les virus", "Sur tous les microbes", "Sur aucun"], "Ils sont sans effet sur les virus."),
      qcm("K", "Comment se protège-t-on de la transmission sexuelle du VIH ?", ["Par le préservatif", "Par un antibiotique", "Par le lavage des mains", "Par une moustiquaire"], "Le préservatif protège aussi des autres infections sexuellement transmissibles.")]],
    mod: [["Je fais 1 — Je relie le microbe au traitement", `
        <p class="def">Une <b>infection sexuellement transmissible</b> (IST) est une infection due à un microbe qui se transmet lors des rapports sexuels.</p>
        <p class="ctx">Pour chaque IST, je cherche d’abord le <b>type de microbe</b> : c’est lui qui décide du traitement.</p>
        <table class="t"><tr><th>Microbe</th><th>Exemples d’IST</th><th>Ce que l’on peut faire</th></tr>
        <tr><th>Bactérie</th><td>Syphilis, gonococcie</td><td><b>Antibiotiques</b> : guérison si le traitement est précoce</td></tr>
        <tr><th>Virus</th><td>Hépatite B, SIDA, herpès génital</td><td>Pas d’antibiotique ; <b>vaccin</b> contre l’hépatite B ; traitements qui freinent le VIH</td></tr>
        <tr><th>Champignon microscopique</th><td>Mycoses</td><td>Médicaments antifongiques</td></tr></table>
        <p>« La gonococcie est due à une bactérie : je prévois que les antibiotiques la guérissent. L’hépatite B est due à un virus : les antibiotiques sont inutiles, mais il existe un vaccin. »</p>
        <p>Beaucoup d’IST donnent peu de signes au début. Non soignées, elles peuvent provoquer une <b>stérilité</b> ou se transmettre à l’enfant pendant la grossesse.</p>`],
      ["Je fais 2 — Je formule les règles de prévention", `
        <ul><li><b>Abstinence</b> ou <b>fidélité</b> entre deux partenaires non infectés.</li><li><b>Préservatif</b> : il protège de toutes les IST.</li>
        <li><b>Vaccination</b> contre l’hépatite B.</li><li><b>Dépistage</b> au moindre doute ; consulter un médecin sans attendre et sans honte.</li>
        <li>En cas d’infection : <b>traiter aussi le partenaire</b>, sinon chacun recontamine l’autre.</li><li><b>Hygiène corporelle</b> quotidienne ; ne pas partager le linge de toilette.</li></ul>
        <p>« Un patient est guéri d’une gonococcie par des antibiotiques, mais il rechute un mois plus tard. Je cherche la cause : son partenaire n’a pas été traité. »</p>
        <p><b>Erreur fréquente</b> : croire qu’une IST guérit toujours seule quand les signes disparaissent. Dans la syphilis, la première plaie disparaît d’elle-même, alors que la bactérie continue de se répandre dans l’organisme.</p>`]],
    gui: { titre: "Nous faisons — Cinq infections", ctx: "Le tableau présente cinq infections sexuellement transmissibles.", docs: [tIST], q: [
      qcm("I4", "Quel microbe est responsable de l’hépatite B ?", ["Un virus", "Une bactérie", "Un champignon microscopique", "Un protozoaire"], "Ligne « Hépatite B », colonne « Microbe »."),
      qcm("I4", "Quelles infections du tableau sont traitées par des antibiotiques ?", ["La syphilis et la gonococcie", "L’hépatite B et le SIDA", "La mycose et le SIDA", "Toutes"], "Ce sont les deux infections dues à des bactéries."),
      qcm("R1", "Pourquoi les antibiotiques ne guérissent-ils pas l’hépatite B ?", ["Elle est due à un virus, et les antibiotiques n’agissent pas sur les virus", "Elle est due à une bactérie résistante", "Elle n’est pas une infection", "Les antibiotiques sont trop faibles"], "Le type de microbe décide du traitement.")] },
    aut: { titre: "Tu fais — Prévenir les IST", ctx: "Utilise le tableau et tes connaissances.", docs: [tIST], q: [
      qcm("I4", "Quel risque la gonococcie non soignée fait-elle courir ?", ["La stérilité", "La cécité", "Le diabète", "L’obésité"], "Ligne « Gonococcie », colonne « Principaux signes »."),
      assoc("K", "Associe chaque infection à son type de microbe.", ["La syphilis", "Le SIDA", "La mycose génitale", "L’hépatite B"], ["Virus", "Champignon microscopique", "Bactérie"], [2, 0, 1, 0], "On lit la colonne « Microbe »."),
      qcm("R2", "Un malade traité pour une IST bactérienne rechute peu après sa guérison. Quelle est l’explication la plus probable ?", ["Son partenaire n’a pas été traité et l’a recontaminé", "Les antibiotiques l’ont rendu malade", "La bactérie s’est transformée en virus", "Il s’est lavé les mains"], "On traite toujours les deux partenaires."),
      qcm("K", "Quel moyen protège de l’ensemble des IST lors d’un rapport sexuel ?", ["Le préservatif", "Les antibiotiques pris à l’avance", "La pilule contraceptive", "Le vaccin contre la grippe"], "La pilule évite une grossesse, mais ne protège d’aucune infection."),
      vf([["Une IST peut exister sans signe visible.", true], ["Il existe un vaccin contre l’hépatite B.", true], ["La syphilis est guérie dès que la première plaie disparaît.", false], ["Une IST non soignée peut rendre stérile.", true]], "La plaie de la syphilis disparaît, mais la bactérie reste dans l’organisme.")] },
    clo: `<ul><li>Les <b>IST</b> se transmettent lors des rapports sexuels : syphilis et gonococcie (bactéries), hépatite B et SIDA (virus), mycoses (champignons).</li><li>Les IST bactériennes se soignent par <b>antibiotiques</b> ; contre l’hépatite B, il existe un <b>vaccin</b>.</li><li>Non soignées : stérilité, transmission à l’enfant.</li><li>Prévention : fidélité, <b>préservatif</b>, dépistage, traitement des deux partenaires, hygiène.</li></ul>`
  });

  // ---------- Chapitre 6, séquence 2 ----------
  const tGroupes = table("Les quatre groupes sanguins du système ABO", ["Groupe", "Antigène sur les globules rouges", "Anticorps dans le plasma"], [["A", "A", "Anti-B"], ["B", "B", "Anti-A"], ["AB", "A et B", "Aucun"], ["O", "Aucun", "Anti-A et anti-B"]]);
  const tTestsABO = table("Détermination du groupe sanguin de quatre personnes (+ : agglutination ; − : pas d’agglutination)", ["Personne", "Sang + sérum anti-A", "Sang + sérum anti-B"], [["Karim", "+", "−"], ["Leïla", "−", "+"], ["Samir", "+", "+"], ["Nadia", "−", "−"]]);
  L(35, [1, 5, 1], {
    titre: "La transfusion sanguine",
    objectif: "À la fin de la leçon, je sais déterminer un groupe sanguin et dire si une transfusion est possible entre deux personnes.",
    reussite: ["Je cite les antigènes et les anticorps de chaque groupe.", "Je détermine un groupe à partir de deux tests.", "Je vérifie la compatibilité entre un donneur et un receveur."],
    pre: [`<p>Un <b>antigène</b> déclenche une réponse immunitaire ; un <b>anticorps</b> se fixe sur un antigène précis (leçon 28). Les globules rouges portent eux aussi des antigènes.</p>`, [
      qcm("K", "Un anticorps anti-A se fixe sur :", ["l’antigène A seulement", "l’antigène B seulement", "tous les antigènes", "aucun antigène"], "Un anticorps est spécifique."),
      qcm("K", "Où trouve-t-on les anticorps dans le sang ?", ["Dans le plasma", "À la surface des globules rouges", "Dans les plaquettes", "Dans l’hémoglobine"], "Les antigènes, eux, sont portés par les globules rouges.")]],
    mod: [["Je fais 1 — Je retiens la règle et je détermine un groupe", `
        <table class="t"><tr><th>Groupe</th><th>Antigène sur les globules rouges</th><th>Anticorps dans le plasma</th></tr><tr><th>A</th><td>A</td><td>Anti-B</td></tr><tr><th>B</th><td>B</td><td>Anti-A</td></tr><tr><th>AB</th><td>A et B</td><td>Aucun</td></tr><tr><th>O</th><td>Aucun</td><td>Anti-A et anti-B</td></tr></table>
        <p>« Je repère la règle : une personne ne possède jamais l’anticorps dirigé contre son propre antigène. Le groupe A porte l’antigène A, donc il n’a pas d’anti-A : il a de l’anti-B. »</p>
        <p class="def">Quand un anticorps rencontre l’antigène correspondant, les globules rouges se collent en amas : c’est l’<b>agglutination</b>. Dans les vaisseaux, elle peut être mortelle.</p>
        <p><b>Déterminer un groupe.</b> « Je mélange une goutte de sang avec du sérum anti-A, une autre avec du sérum anti-B. Agglutination avec l’anti-A, et rien avec l’anti-B : les globules portent l’antigène A et pas le B. Groupe <b>A</b>. »</p>
        <table class="t"><tr><th>Avec anti-A</th><th>Avec anti-B</th><th>Groupe</th></tr><tr><td>+</td><td>−</td><td>A</td></tr><tr><td>−</td><td>+</td><td>B</td></tr><tr><td>+</td><td>+</td><td>AB</td></tr><tr><td>−</td><td>−</td><td>O</td></tr></table>`],
      ["Je fais 2 — Je vérifie la compatibilité", `
        <p class="ctx">Règle de la transfusion : les <b>anticorps du receveur</b> ne doivent pas rencontrer les <b>antigènes du donneur</b>.</p>
        <p>« Peut-on transfuser du sang A à une personne du groupe B ? Je cherche les anticorps du receveur B : anti-A. Je cherche les antigènes du donneur A : A. L’anti-A rencontre l’antigène A : <b>agglutination</b>. Transfusion impossible. »</p>
        <p>« Et du sang O à une personne A ? Antigènes du donneur O : aucun. Aucune rencontre possible : transfusion possible. »</p>
        <ul><li>Le groupe <b>O</b>, sans antigène, peut donner à tous : <b>donneur universel</b>.</li><li>Le groupe <b>AB</b>, sans anticorps, peut recevoir de tous : <b>receveur universel</b>.</li></ul>
        <p>Il faut aussi respecter le <b>facteur Rhésus</b> : une personne Rh− ne doit recevoir que du sang Rh−. Le donneur universel complet est donc O Rh−.</p>
        <p>Le sang donné est contrôlé (VIH, hépatites) avant d’être transfusé. Le <b>don du sang</b> est un geste volontaire, gratuit, qui sauve des vies.</p>`]],
    gui: { titre: "Nous faisons — Quatre groupes à déterminer", ctx: "On mélange une goutte de sang de chaque personne avec deux sérums tests.", docs: [tTestsABO], q: [
      qcm("R2", "Quel est le groupe sanguin de Karim ?", ["A", "B", "AB", "O"], "Agglutination avec l’anti-A seulement : ses globules portent l’antigène A."),
      qcm("R2", "Quel est le groupe sanguin de Samir ?", ["AB", "A", "B", "O"], "Agglutination avec les deux sérums : antigènes A et B."),
      qcm("R2", "Quel est le groupe sanguin de Nadia ?", ["O", "A", "B", "AB"], "Aucune agglutination : ses globules ne portent ni l’antigène A ni l’antigène B.")] },
    aut: { titre: "Tu fais — Qui peut donner à qui ?", ctx: "Utilise le tableau des groupes sanguins. Rappel : les anticorps du receveur ne doivent pas rencontrer les antigènes du donneur.", docs: [tGroupes], q: [
      qcm("I4", "Quels anticorps trouve-t-on dans le plasma d’une personne du groupe O ?", ["Anti-A et anti-B", "Anti-A seulement", "Anti-B seulement", "Aucun"], "Ligne « O », dernière colonne."),
      assoc("K", "Associe chaque groupe à l’antigène porté par ses globules rouges.", ["Le groupe A", "Le groupe B", "Le groupe AB", "Le groupe O"], ["Aucun antigène", "Antigènes A et B", "Antigène A", "Antigène B"], [2, 3, 1, 0], "On lit la deuxième colonne du tableau."),
      qcm("R2", "Peut-on transfuser du sang du groupe B à une personne du groupe A ?", ["Non : les anticorps anti-B du receveur agglutineraient les globules rouges B du donneur", "Oui, sans risque", "Oui, si le donneur est jeune", "Non : le groupe B n’existe pas"], "Receveur A : anti-B. Donneur B : antigène B. Ils se rencontrent."),
      qcm("R1", "Pourquoi le groupe O est-il appelé donneur universel ?", ["Ses globules rouges ne portent ni l’antigène A ni l’antigène B", "Son plasma ne contient aucun anticorps", "Il est le plus rare", "Il contient plus de globules rouges"], "Sans antigène, les anticorps du receveur n’ont rien à agglutiner."),
      vf([["Le groupe AB est receveur universel.", true], ["Une personne du groupe A possède des anticorps anti-A.", false], ["Une personne Rh− ne doit recevoir que du sang Rh−.", true], ["L’agglutination est sans danger.", false]], "Le groupe A possède l’anti-B ; l’agglutination peut boucher les vaisseaux.")] },
    clo: `<ul><li>Système <b>ABO</b> : antigènes A et B sur les globules rouges, anticorps anti-A et anti-B dans le plasma.</li><li>A : antigène A, anti-B. B : antigène B, anti-A. AB : A et B, aucun anticorps. O : aucun antigène, anti-A et anti-B.</li><li>Transfusion possible si les <b>anticorps du receveur</b> ne rencontrent pas les <b>antigènes du donneur</b> ; sinon, <b>agglutination</b>.</li><li>O : donneur universel. AB : receveur universel. Respecter aussi le <b>Rhésus</b>.</li></ul>`
  });
})();
