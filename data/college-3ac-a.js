// 3AC — Thème 1, chapitres 1 et 2 : les aliments et la digestion ; l'éducation nutritionnelle et l'hygiène de l'appareil digestif.
// Enseignement explicite : ouverture, je fais, nous faisons, tu fais, je retiens. Outils 3AC : variables, tableau à double entrée, graphique à deux courbes.
(function () {
  const { qcm, vf, assoc, ordre, num, trous, table, graph, lecon } = window.SVT.mk;
  const L = (n, pos, o) => lecon("3AC", n, pos, o);

  // ---------- Chapitre 1, séquence 1 ----------
  const tTests = table("Résultats des tests réalisés sur quatre aliments (+ : test positif ; − : test négatif)", ["Aliment", "Eau iodée", "Liqueur de Fehling à chaud", "Réaction du biuret", "Tache sur le papier"],
    [["Lait", "−", "+", "+", "+"], ["Pain", "+", "−", "+", "−"], ["Huile d’olive", "−", "−", "−", "+"], ["Blanc d’œuf", "−", "−", "+", "−"]]);
  L(1, [0, 0, 0], {
    titre: "Les aliments",
    objectif: "À la fin de la leçon, je sais retrouver la composition d’un aliment à partir des résultats de tests et distinguer un aliment simple d’un aliment composé.",
    reussite: ["J’associe chaque réactif à l’aliment simple qu’il met en évidence.", "Je lis un tableau à double entrée en croisant une ligne et une colonne.", "Je dis si un aliment est simple ou composé."],
    pre: [`<p>En 1AC, tu as classé les aliments selon leur rôle : bâtisseurs, énergétiques, protecteurs. On cherche maintenant de quoi ils sont <b>faits</b>.</p>`, [
      qcm("K", "Quel type d’aliment apporte surtout de l’énergie ?", ["Les aliments riches en glucides et en lipides", "L’eau", "Les fruits et les légumes", "Le sel"], "Pain, semoule, huile : ce sont les aliments énergétiques."),
      qcm("K", "Dans une expérience, un test « positif » signifie que :", ["la substance recherchée est présente", "la substance recherchée est absente", "l’expérience a échoué", "il faut recommencer"], "Le réactif change d’aspect quand la substance est là.")]],
    mod: [["Je fais 1 — J’associe un réactif à un aliment simple", `
        <p class="def">Un <b>aliment simple</b> est formé d’un seul type de substance. Il en existe six : l’eau, les sels minéraux, les vitamines, les glucides, les lipides et les protides.</p>
        <table class="t"><tr><th>Aliment simple recherché</th><th>Test</th><th>Résultat positif</th></tr>
        <tr><td>Amidon (glucide)</td><td>Eau iodée</td><td>Couleur bleu-noir</td></tr><tr><td>Sucres réducteurs, comme le glucose</td><td>Liqueur de Fehling, à chaud</td><td>Précipité rouge brique</td></tr>
        <tr><td>Protides</td><td>Réaction du biuret (soude + sulfate de cuivre)</td><td>Couleur violette</td></tr><tr><td>Lipides</td><td>Frotter sur du papier</td><td>Tache translucide qui ne sèche pas</td></tr>
        <tr><td>Eau</td><td>Chauffer dans un tube</td><td>Buée sur la paroi</td></tr><tr><td>Chlorures (sels minéraux)</td><td>Nitrate d’argent</td><td>Précipité blanc qui noircit à la lumière</td></tr></table>
        <p>« J’ajoute de l’eau iodée sur du pain : il devient bleu-noir. Je lis ma table : bleu-noir avec l’eau iodée, c’est l’<b>amidon</b>. Le pain contient donc de l’amidon. »</p>
        <p><b>Attention.</b> La liqueur de Fehling ne réagit qu’<b>à chaud</b>. Et un test négatif veut dire « absent » : c’est aussi une information.</p>`],
      ["Je fais 2 — Je lis un tableau à double entrée", `
        <p class="ctx">Dans un tableau à double entrée, chaque case se trouve au <b>croisement</b> d’une ligne et d’une colonne.</p>
        <table class="t"><tr><th>Aliment</th><th>Eau iodée</th><th>Liqueur de Fehling à chaud</th><th>Réaction du biuret</th><th>Tache sur le papier</th></tr>
        <tr><th>Lait</th><td>−</td><td>+</td><td>+</td><td>+</td></tr><tr><th>Huile d’olive</th><td>−</td><td>−</td><td>−</td><td>+</td></tr></table>
        <p>« Je cherche si le lait contient des protides. Je repère la <b>ligne</b> “Lait”, puis la <b>colonne</b> “Réaction du biuret”. À leur croisement : +. Le lait contient des protides. »</p>
        <p>« Je lis toute la ligne du lait : sucre réducteur, protides et lipides. Le lait contient <b>plusieurs</b> aliments simples : c’est un <b>aliment composé</b>. »</p>
        <p>« Je lis la ligne de l’huile : un seul test positif, celui des lipides. L’huile est un <b>aliment simple</b>. »</p>`]],
    gui: { titre: "Nous faisons — Quatre aliments, quatre tests", ctx: "On a réalisé quatre tests sur quatre aliments.", docs: [tTests], q: [
      qcm("I4", "Le pain contient-il de l’amidon ?", ["Oui : le test à l’eau iodée est positif", "Non : le test à l’eau iodée est négatif", "On ne peut pas le savoir", "Oui : le test de Fehling est positif"], "Ligne « Pain », colonne « Eau iodée » : +."),
      qcm("I4", "Quel aliment du tableau contient un sucre réducteur ?", ["Le lait", "Le pain", "L’huile d’olive", "Le blanc d’œuf"], "Colonne « Liqueur de Fehling à chaud » : seul le lait a un +."),
      qcm("R2", "Le blanc d’œuf n’est positif qu’à la réaction du biuret. Que peut-on en déduire ?", ["Parmi les substances testées, il ne contient que des protides", "Il contient de l’amidon", "Il ne contient rien", "Il contient des lipides"], "Un seul test positif : celui des protides.")] },
    aut: { titre: "Tu fais — La composition des aliments", ctx: "Utilise le tableau pour répondre.", docs: [tTests], q: [
      qcm("I4", "Quels aliments simples le lait contient-il, d’après le tableau ?", ["Un sucre réducteur, des protides et des lipides", "De l’amidon et des lipides", "Des protides seulement", "De l’amidon, un sucre réducteur et des protides"], "On lit toute la ligne « Lait » : −, +, +, +."),
      assoc("K", "Associe chaque test à ce qu’il met en évidence.", ["Eau iodée", "Liqueur de Fehling à chaud", "Réaction du biuret", "Tache translucide sur le papier"], ["Les protides", "Les lipides", "L’amidon", "Les sucres réducteurs"], [2, 3, 0, 1], "Eau iodée : amidon. Fehling : sucres réducteurs. Biuret : protides. Tache : lipides."),
      assoc("R2", "Aliment simple ou aliment composé ?", ["Le lait", "L’huile d’olive", "Le pain", "L’eau"], ["Aliment composé", "Aliment simple"], [0, 1, 0, 1], "Plusieurs aliments simples : composé. Un seul : simple."),
      qcm("R3", "Un élève verse de la liqueur de Fehling sur du jus de raisin, sans chauffer. Rien ne se passe ; il conclut : « pas de sucre ». Que lui réponds-tu ?", ["Le test n’est pas valable : la liqueur de Fehling ne réagit qu’à chaud", "Il a raison", "Il fallait ajouter de l’eau iodée", "Le raisin ne contient que des lipides"], "Les conditions du test n’ont pas été respectées : on ne peut pas conclure."),
      vf([["Les protides sont mis en évidence par l’eau iodée.", false], ["Un aliment composé contient plusieurs aliments simples.", true], ["L’amidon est un glucide.", true], ["Un test négatif n’apporte aucune information.", false]], "L’eau iodée révèle l’amidon ; un test négatif indique l’absence de la substance.")] },
    clo: `<ul><li>Six <b>aliments simples</b> : eau, sels minéraux, vitamines, glucides, lipides, protides.</li><li>Tests : eau iodée → amidon ; liqueur de Fehling à chaud → sucres réducteurs ; biuret → protides ; tache translucide → lipides.</li><li>Un <b>aliment composé</b> (lait, pain) contient plusieurs aliments simples.</li><li>Tableau à double entrée : je croise une ligne et une colonne.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 2 ----------
  const tSalive = table("Digestion de l’amidon cuit : résultats après 15 minutes", ["Tube", "Contenu", "Température", "Eau iodée", "Liqueur de Fehling à chaud"],
    [["1", "Amidon cuit + salive", "37 °C", "−", "+"], ["2", "Amidon cuit + eau", "37 °C", "+", "−"], ["3", "Amidon cuit + salive bouillie", "37 °C", "+", "−"], ["4", "Amidon cuit + salive", "0 °C", "+", "−"]]);
  L(2, [0, 0, 1], {
    titre: "La digestion des aliments au niveau de la bouche",
    objectif: "À la fin de la leçon, je sais expliquer la transformation de l’amidon dans la bouche et donner les conditions d’action d’une enzyme.",
    reussite: ["Je distingue l’action mécanique de l’action chimique.", "Je compare deux tubes qui ne diffèrent que par une variable.", "Je cite les conditions d’action de l’amylase salivaire."],
    pre: [`<p>L’eau iodée colore l’<b>amidon</b> en bleu-noir ; la liqueur de Fehling à chaud donne un précipité rouge brique avec les <b>sucres réducteurs</b> (leçon 1).</p>`, [
      qcm("K", "Quel réactif met en évidence l’amidon ?", ["L’eau iodée", "La liqueur de Fehling", "Le nitrate d’argent", "Le biuret"], "Couleur bleu-noir."),
      qcm("K", "Pour tester l’effet d’un facteur, on compare deux tubes qui diffèrent par :", ["une seule variable", "deux variables", "toutes les variables", "aucune variable"], "Sinon, on ne peut pas savoir quelle variable a agi.")]],
    mod: [["Je fais 1 — Je distingue deux actions", `
        <p>Dans la bouche, les aliments subissent deux actions.</p>
        <ul><li><b>Action mécanique</b> : les dents coupent, déchirent et broient ; la langue mélange. Les aliments sont réduits en petits morceaux, mais leur nature ne change pas.</li>
        <li><b>Action chimique</b> : la <b>salive</b>, produite par les glandes salivaires, transforme une partie de l’amidon cuit.</li></ul>
        <p>« Je garde longtemps du pain dans la bouche : un goût sucré apparaît. Je fais l’hypothèse que la salive transforme l’amidon en sucre. »</p>`],
      ["Je fais 2 — J’interprète l’expérience, tube par tube", `
        <table class="t"><tr><th>Tube</th><th>Contenu, 15 min</th><th>Eau iodée</th><th>Fehling à chaud</th></tr><tr><th>1</th><td>Amidon cuit + salive, à 37 °C</td><td>−</td><td>+</td></tr><tr><th>2</th><td>Amidon cuit + eau, à 37 °C</td><td>+</td><td>−</td></tr></table>
        <p>« Je compare 1 et 2 : la seule variable qui change est la <b>présence de salive</b>. Dans le tube 2, sans salive, l’amidon est toujours là. Dans le tube 1, l’amidon a disparu <b>et</b> un sucre réducteur est apparu. Je conclus : la salive transforme l’amidon cuit en sucre réducteur. » Ce sucre est le <b>maltose</b>.</p>
        <p>La salive contient une <b>enzyme</b>, l’<b>amylase salivaire</b>.</p>
        <p class="def"><b>Enzyme</b> : substance produite par l’organisme, qui accélère la transformation d’un aliment précis. Elle agit à la température du corps (37 °C) et elle est détruite par la chaleur.</p>
        <p>« Avec de la salive <b>bouillie</b>, ou à <b>0 °C</b>, l’amidon reste : l’enzyme est détruite par l’ébullition, et elle n’agit pas au froid. »</p>
        <p><b>Erreur fréquente</b> : dire « l’amidon a disparu ». Il n’a pas disparu : il a été <b>transformé</b> en maltose.</p>`]],
    gui: { titre: "Nous faisons — Quatre tubes", ctx: "On prépare quatre tubes contenant de l’amidon cuit. Après 15 minutes, on partage chaque tube en deux pour faire les deux tests.", docs: [tSalive], q: [
      qcm("I4", "Dans quel tube trouve-t-on un sucre réducteur ?", ["Le tube 1", "Le tube 2", "Le tube 3", "Le tube 4"], "Colonne « Liqueur de Fehling à chaud » : seul le tube 1 est positif."),
      qcm("R3", "Quels tubes faut-il comparer pour montrer que la salive est nécessaire ?", ["Les tubes 1 et 2", "Les tubes 1 et 4", "Les tubes 2 et 3", "Les tubes 3 et 4"], "Entre 1 et 2, seule la présence de salive change."),
      qcm("R2", "On compare les tubes 1 et 4. Que peut-on conclure ?", ["L’amylase salivaire agit à 37 °C mais pas à 0 °C", "La salive est inutile", "L’amidon se transforme seul au froid", "L’eau iodée détruit l’enzyme"], "Seule la température change : à 0 °C, l’amidon reste présent.")] },
    aut: { titre: "Tu fais — Les conditions d’action de l’amylase", ctx: "Utilise le tableau des quatre tubes.", docs: [tSalive], q: [
      qcm("I4", "Quel est le résultat du test à l’eau iodée dans le tube 3 ?", ["Positif : l’amidon est toujours présent", "Négatif : l’amidon a été transformé", "On ne peut pas le savoir", "Positif : un sucre est apparu"], "Ligne 3, colonne « Eau iodée » : +."),
      qcm("R2", "On compare les tubes 1 et 3. Que peut-on conclure ?", ["L’ébullition détruit l’enzyme de la salive", "L’ébullition rend la salive plus active", "L’eau transforme l’amidon", "La température n’a aucun effet"], "La salive bouillie ne transforme plus l’amidon."),
      trous("K", "Complète.", "Dans la bouche, l’{0} salivaire transforme l’amidon cuit en {1}, à la température de {2}.", [["amylase", "pepsine", "bile"], ["maltose", "protides", "lipides"], ["37 °C", "0 °C", "100 °C"]], "L’amylase salivaire agit sur l’amidon cuit, à la température du corps."),
      assoc("K", "Action mécanique ou action chimique ?", ["Les dents broient le pain", "L’amylase transforme l’amidon", "La langue mélange les aliments", "La salive transforme l’amidon en maltose"], ["Action chimique", "Action mécanique"], [1, 0, 1, 0], "L’action mécanique fragmente ; l’action chimique change la nature de l’aliment."),
      vf([["Une enzyme est détruite par l’ébullition.", true], ["L’amylase salivaire transforme les protides.", false], ["Le maltose est un sucre réducteur.", true], ["Dans le tube 1, l’amidon a simplement disparu.", false]], "L’amylase n’agit que sur l’amidon ; celui-ci est transformé en maltose.")] },
    clo: `<ul><li>Dans la bouche : action <b>mécanique</b> (dents, langue) et action <b>chimique</b> (salive).</li><li>L’<b>amylase salivaire</b> transforme l’amidon cuit en <b>maltose</b>, un sucre réducteur.</li><li>Une <b>enzyme</b> agit sur un aliment précis, à 37 °C ; elle est détruite par l’ébullition et inactive au froid.</li><li>Pour conclure, je compare deux tubes qui ne diffèrent que par une variable.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 3 ----------
  const tPepsine = table("Digestion du blanc d’œuf cuit : résultats après 3 heures à 37 °C", ["Tube", "Contenu", "Aspect du blanc d’œuf"],
    [["1", "Blanc d’œuf + eau", "Morceaux intacts"], ["2", "Blanc d’œuf + pepsine", "Morceaux intacts"], ["3", "Blanc d’œuf + acide chlorhydrique", "Morceaux intacts"], ["4", "Blanc d’œuf + pepsine + acide chlorhydrique", "Morceaux disparus, liquide limpide"]]);
  const tBilan = table("Bilan de la digestion", ["Aliment", "Enzymes", "Lieu", "Nutriment obtenu"],
    [["Amidon", "Amylases, puis maltase", "Bouche, intestin grêle", "Glucose"], ["Protides", "Pepsine, puis autres protéases", "Estomac, intestin grêle", "Acides aminés"], ["Lipides", "Lipase (après l’action de la bile)", "Intestin grêle", "Acides gras et glycérol"]]);
  L(3, [0, 0, 2], {
    titre: "La digestion progressive des aliments dans l’estomac et l’intestin grêle",
    objectif: "À la fin de la leçon, je sais expliquer comment les aliments sont transformés en nutriments dans l’estomac et l’intestin grêle.",
    reussite: ["Je nomme les sucs digestifs et leur lieu d’action.", "J’interprète une expérience à quatre tubes.", "J’associe chaque aliment au nutriment obtenu."],
    pre: [`<p>Dans la bouche, l’amylase salivaire a commencé à transformer l’amidon (leçon 2). Les protides et les lipides, eux, sont encore intacts.</p>`, [
      qcm("K", "Une enzyme :", ["agit sur un aliment précis, à 37 °C", "agit sur tous les aliments", "agit seulement à 100 °C", "est un aliment"], "C’est la spécificité de l’enzyme."),
      qcm("K", "Quel test met en évidence les protides ?", ["La réaction du biuret", "L’eau iodée", "La liqueur de Fehling", "La tache sur le papier"], "Couleur violette.")]],
    mod: [["Je fais 1 — J’interprète une expérience à quatre tubes", `
        <p class="ctx">L’estomac produit le <b>suc gastrique</b>, qui contient une enzyme, la <b>pepsine</b>, et de l’<b>acide chlorhydrique</b>. Le blanc d’œuf est un protide.</p>
        <table class="t"><tr><th>Tube</th><th>Contenu, 3 h à 37 °C</th><th>Blanc d’œuf</th></tr><tr><th>1</th><td>Eau</td><td>Intact</td></tr><tr><th>2</th><td>Pepsine</td><td>Intact</td></tr><tr><th>3</th><td>Acide chlorhydrique</td><td>Intact</td></tr><tr><th>4</th><td>Pepsine + acide chlorhydrique</td><td>Disparu</td></tr></table>
        <p>« Tube 2 : la pepsine seule ne suffit pas. Tube 3 : l’acide seul ne suffit pas. Tube 4 : avec les <b>deux</b>, le blanc d’œuf est transformé. Je conclus : la pepsine digère les protides, mais seulement en <b>milieu acide</b>. »</p>
        <p>Dans l’estomac, les protides sont coupés en chaînes plus courtes, les <b>polypeptides</b>. Le brassage par la paroi musclée donne une bouillie.</p>`],
      ["Je fais 2 — Je suis les aliments dans l’intestin grêle", `
        <p>L’intestin grêle reçoit trois sucs.</p>
        <table class="t"><tr><th>Suc</th><th>Origine</th><th>Action</th></tr>
        <tr><td>Bile</td><td>Foie</td><td>Elle ne contient pas d’enzyme : elle divise les lipides en fines gouttelettes (émulsion)</td></tr>
        <tr><td>Suc pancréatique</td><td>Pancréas</td><td>Ses enzymes agissent sur l’amidon, les protides et les lipides</td></tr>
        <tr><td>Suc intestinal</td><td>Paroi de l’intestin</td><td>Ses enzymes achèvent la digestion</td></tr></table>
        <p>« Je résume par une simplification, aliment par aliment : »</p>
        <ul><li>amidon → maltose → <b>glucose</b> ;</li><li>protides → polypeptides → <b>acides aminés</b> ;</li><li>lipides → <b>acides gras</b> et <b>glycérol</b>.</li></ul>
        <p class="def">La <b>digestion</b> est une simplification progressive : les grosses molécules des aliments sont transformées en <b>nutriments</b>, petites molécules solubles.</p>
        <p>L’eau, les sels minéraux et les vitamines sont déjà de petite taille : ils ne sont pas transformés.</p>`]],
    gui: { titre: "Nous faisons — La pepsine et l’acide", ctx: "On place des morceaux de blanc d’œuf cuit dans quatre tubes, à 37 °C.", docs: [tPepsine], q: [
      qcm("I4", "Dans quel tube le blanc d’œuf a-t-il été digéré ?", ["Le tube 4", "Le tube 1", "Le tube 2", "Le tube 3"], "Dernière ligne : morceaux disparus."),
      qcm("R3", "À quoi sert le tube 1 ?", ["C’est le témoin : l’eau seule ne digère pas le blanc d’œuf", "À digérer le blanc d’œuf", "À fabriquer de la pepsine", "Il ne sert à rien"], "Il montre que la digestion n’est pas due à l’eau ni à la température."),
      qcm("R2", "On compare les tubes 2 et 4. Que peut-on conclure ?", ["La pepsine n’agit qu’en présence d’acide", "L’acide est inutile", "La pepsine agit sans acide", "L’acide seul digère les protides"], "Seule la présence d’acide change : sans lui, la pepsine n’agit pas.")] },
    aut: { titre: "Tu fais — Le bilan de la digestion", ctx: "Utilise le tableau.", docs: [tBilan], q: [
      qcm("I4", "Quel nutriment obtient-on à partir des protides ?", ["Les acides aminés", "Le glucose", "Le glycérol", "Le maltose"], "Ligne « Protides », dernière colonne."),
      assoc("K", "Associe chaque aliment au nutriment obtenu.", ["L’amidon", "Les protides", "Les lipides"], ["Acides gras et glycérol", "Glucose", "Acides aminés"], [1, 2, 0], "On lit la dernière colonne du tableau."),
      assoc("K", "Associe chaque suc à son origine.", ["Le suc gastrique", "La bile", "Le suc pancréatique", "La salive"], ["Le foie", "Les glandes salivaires", "L’estomac", "Le pancréas"], [2, 0, 3, 1], "Estomac, foie, pancréas, glandes salivaires."),
      qcm("R1", "La bile ne contient pas d’enzyme. Quel est son rôle ?", ["Diviser les lipides en fines gouttelettes, ce qui facilite l’action de la lipase", "Transformer les protides en acides aminés", "Transformer l’amidon en glucose", "Absorber les nutriments"], "Plus les gouttelettes sont petites, plus l’enzyme les attaque facilement."),
      vf([["La pepsine agit en milieu acide.", true], ["L’eau est transformée par les enzymes digestives.", false], ["La digestion s’achève dans l’intestin grêle.", true], ["Les lipides donnent du glucose.", false]], "L’eau, les sels minéraux et les vitamines ne sont pas transformés ; les lipides donnent des acides gras et du glycérol.")] },
    clo: `<ul><li><b>Estomac</b> : le suc gastrique (pepsine + acide chlorhydrique) commence la digestion des protides.</li><li><b>Intestin grêle</b> : la bile émulsionne les lipides ; les sucs pancréatique et intestinal achèvent la digestion.</li><li>Amidon → <b>glucose</b> ; protides → <b>acides aminés</b> ; lipides → <b>acides gras et glycérol</b>.</li><li>La digestion est une simplification progressive des aliments en <b>nutriments</b>.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 4 ----------
  const tAbs = table("Analyses réalisées avant et après un repas (valeurs simplifiées)", ["", "Avant le repas", "Deux heures après le repas"],
    [["Glucose dans le sang qui quitte l’intestin grêle (g/L)", "0,8", "1,8"], ["Acides aminés dans le sang qui quitte l’intestin grêle (g/L)", "0,4", "0,9"], ["Lipides dans la lymphe qui quitte l’intestin grêle (g/L)", "2", "30"]]);
  L(4, [0, 0, 3], {
    titre: "L’absorption intestinale",
    objectif: "À la fin de la leçon, je sais expliquer comment les nutriments passent dans le sang et la lymphe, et en quoi l’intestin grêle est adapté à ce rôle.",
    reussite: ["Je définis l’absorption intestinale.", "Je cite trois caractères qui font de l’intestin grêle une surface d’échange efficace.", "Je distingue la voie sanguine de la voie lymphatique."],
    pre: [`<p>À la fin de la digestion, l’intestin grêle contient des <b>nutriments</b> : glucose, acides aminés, acides gras, glycérol, ainsi que de l’eau, des sels minéraux et des vitamines (leçon 3).</p>`, [
      qcm("K", "Lequel de ces éléments est un nutriment ?", ["Le glucose", "L’amidon", "Le blanc d’œuf", "Le pain"], "Le glucose est une petite molécule soluble, issue de la digestion de l’amidon."),
      qcm("K", "Où la digestion s’achève-t-elle ?", ["Dans l’intestin grêle", "Dans la bouche", "Dans l’œsophage", "Dans le gros intestin"], "C’est là que tous les nutriments sont disponibles.")]],
    mod: [["Je fais 1 — Je montre que les nutriments quittent l’intestin", `
        <table class="t"><tr><th></th><th>Avant le repas</th><th>Deux heures après</th></tr><tr><th>Glucose dans le sang qui quitte l’intestin (g/L)</th><td>0,8</td><td>1,8</td></tr></table>
        <p>« Avant le repas, le sang qui quitte l’intestin contient 0,8 g/L de glucose, <b>alors qu’</b>après le repas il en contient 1,8 g/L. Le sang s’est enrichi en glucose en traversant la paroi de l’intestin. »</p>
        <p class="def"><b>Absorption intestinale</b> : passage des nutriments de l’intestin grêle vers le sang et la lymphe.</p>
        <p>Deux voies emportent les nutriments :</p>
        <ul><li>la <b>voie sanguine</b> : glucose, acides aminés, eau, sels minéraux, vitamines ;</li><li>la <b>voie lymphatique</b> : la plus grande partie des acides gras et du glycérol.</li></ul>
        <p>Les deux voies se rejoignent : tous les nutriments finissent dans le sang, qui les distribue aux organes.</p>`],
      ["Je fais 2 — J’explique l’efficacité de l’intestin grêle", `
        <p class="ctx">Je cherche ce qui, dans la structure de l’intestin grêle, facilite le passage des nutriments.</p>
        <ol><li><b>Une très grande surface.</b> Long de 7 mètres environ, sa paroi interne porte des <b>replis</b>, eux-mêmes couverts de millions de <b>villosités</b>. Dépliée, la surface atteindrait environ 200 m², celle d’un terrain de tennis.</li>
        <li><b>Une paroi très fine.</b> Une seule couche de cellules sépare les nutriments des vaisseaux.</li>
        <li><b>De très nombreux vaisseaux.</b> Chaque villosité contient des capillaires sanguins et un vaisseau lymphatique.</li></ol>
        <p>« Grande surface, paroi fine, riche irrigation : ce sont les trois caractères d’une <b>surface d’échange</b>. »</p>
        <p>Ce qui n’est pas absorbé passe dans le gros intestin, où l’eau est récupérée ; le reste forme les matières fécales.</p>`]],
    gui: { titre: "Nous faisons — Avant et après le repas", ctx: "On analyse le sang et la lymphe qui quittent l’intestin grêle, avant un repas puis deux heures après.", docs: [tAbs], q: [
      num("I4", "Quelle est la quantité de glucose dans le sang qui quitte l’intestin, deux heures après le repas ?", 1.8, "g/L", "Première ligne, dernière colonne."),
      trous("C1", "Complète la comparaison.", "Avant le repas, la lymphe contient {0} g/L de lipides, alors que deux heures après elle en contient {1} g/L : la quantité de lipides a fortement {2}.", [["2", "30", "0,8"], ["30", "2", "1,8"], ["augmenté", "diminué", "stagné"]], "Troisième ligne du tableau."),
      qcm("R2", "Que montrent ces résultats ?", ["Après le repas, les nutriments passent de l’intestin dans le sang et la lymphe", "Le sang fabrique du glucose", "Les nutriments restent dans l’intestin", "La lymphe ne transporte rien"], "Les trois valeurs augmentent après le repas : c’est l’absorption.")] },
    aut: { titre: "Tu fais — Les voies de l’absorption", ctx: "Utilise le tableau pour répondre.", docs: [tAbs], q: [
      num("I4", "Quelle est la quantité d’acides aminés dans le sang qui quitte l’intestin, deux heures après le repas ?", 0.9, "g/L", "Deuxième ligne, dernière colonne."),
      assoc("K", "Par quelle voie chaque nutriment quitte-t-il surtout l’intestin ?", ["Le glucose", "Les acides gras", "Les acides aminés", "Le glycérol"], ["Voie lymphatique", "Voie sanguine"], [1, 0, 1, 0], "Glucose et acides aminés : sang. Acides gras et glycérol : lymphe, pour l’essentiel."),
      qcm("R1", "Pourquoi l’intestin grêle absorbe-t-il efficacement les nutriments ?", ["Sa surface est très grande, sa paroi très fine et il est très irrigué", "Il est très court", "Sa paroi est très épaisse", "Il ne contient aucun vaisseau"], "Ce sont les trois caractères d’une surface d’échange."),
      qcm("R2", "Chez une personne dont les villosités sont détruites par une maladie, on observe un amaigrissement. Pourquoi ?", ["La surface d’absorption est réduite : moins de nutriments passent dans le sang", "Les aliments ne sont plus digérés dans la bouche", "Le sang devient trop riche en nutriments", "L’estomac ne fonctionne plus"], "Moins de surface, moins d’absorption."),
      vf([["L’absorption se fait surtout dans l’intestin grêle.", true], ["Les villosités réduisent la surface de l’intestin.", false], ["Tous les nutriments finissent par rejoindre le sang.", true], ["L’amidon est absorbé sans être digéré.", false]], "Les villosités augmentent la surface ; seuls les nutriments, de petite taille, traversent la paroi.")] },
    clo: `<ul><li>L’<b>absorption intestinale</b> est le passage des nutriments de l’intestin grêle vers le sang et la lymphe.</li><li><b>Voie sanguine</b> : glucose, acides aminés, eau, sels minéraux, vitamines. <b>Voie lymphatique</b> : acides gras et glycérol.</li><li>L’intestin grêle est une <b>surface d’échange</b> : très grande surface (replis, villosités), paroi fine, riche irrigation.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 1 ----------
  const gRats = graph("Masse de deux lots de jeunes rats recevant des régimes différents", "Temps (jours)", "Masse moyenne (g)", 40, 200,
    [["Lot A : régime complet", [[0, 50], [10, 80], [20, 115], [30, 150], [40, 185]]], ["Lot B : régime sans protides", [[0, 50], [10, 55], [20, 52], [30, 48], [40, 45]]]]);
  const tCarences = table("Quelques maladies de carence", ["Maladie", "Aliment simple qui manque", "Principaux signes"],
    [["Kwashiorkor", "Protides", "Ventre gonflé, œdèmes, arrêt de la croissance"], ["Rachitisme", "Vitamine D et calcium", "Os mous et déformés"], ["Scorbut", "Vitamine C", "Gencives qui saignent, grande fatigue"], ["Goitre", "Iode", "Gonflement du cou"], ["Anémie", "Fer", "Pâleur, essoufflement"]]);
  L(5, [0, 1, 0], {
    titre: "Les carences alimentaires",
    objectif: "À la fin de la leçon, je sais montrer, à partir d’une expérience, qu’un aliment simple est indispensable, et associer une maladie de carence à l’aliment qui manque.",
    reussite: ["Je compare deux courbes tracées sur un même graphique.", "Je définis une carence alimentaire.", "J’associe une maladie à l’aliment simple qui manque."],
    pre: [`<p>Les aliments apportent six sortes d’<b>aliments simples</b> (leçon 1). Que se passe-t-il si l’un d’eux vient à manquer ?</p>`, [
      qcm("K", "Lequel de ces éléments est un aliment simple ?", ["Les protides", "Le lait", "Le pain", "Le couscous"], "Le lait, le pain et le couscous sont des aliments composés."),
      qcm("K", "Pour lire un graphique à deux courbes, on commence par :", ["lire le titre, les axes et la légende de chaque courbe", "regarder seulement la courbe du haut", "calculer une moyenne", "choisir une courbe au hasard"], "La légende indique à quel lot correspond chaque courbe.")]],
    mod: [["Je fais 1 — Je compare deux courbes", `
        <p class="ctx">Deux lots de jeunes rats reçoivent la même nourriture, sauf sur un point : le régime du lot B ne contient pas de protides.</p>
        <ol><li><b>Je repère les variables.</b> Variable que l’on fait varier : la présence de protides. Variable mesurée : la masse des rats.</li>
        <li><b>Je décris chaque courbe</b>, avec le sens et deux valeurs. « Lot A : la masse augmente de 50 g à 185 g en 40 jours. Lot B : la masse reste voisine de 50 g, puis diminue jusqu’à 45 g. »</li>
        <li><b>Je compare au même moment.</b> « Au jour 40, les rats du lot A pèsent 185 g, <b>alors que</b> ceux du lot B pèsent 45 g. »</li>
        <li><b>Je conclus.</b> « Sans protides, la croissance s’arrête : les protides sont indispensables à la croissance. »</li></ol>`],
      ["Je fais 2 — Je relie une maladie à l’aliment qui manque", `
        <p class="def">Une <b>carence alimentaire</b> est le manque d’un aliment simple indispensable. Elle provoque une <b>maladie de carence</b>, qui guérit quand on apporte l’aliment manquant.</p>
        <table class="t"><tr><th>Maladie</th><th>Ce qui manque</th><th>Signes</th></tr>
        <tr><td>Kwashiorkor</td><td>Protides</td><td>Ventre gonflé, œdèmes, arrêt de la croissance</td></tr><tr><td>Rachitisme</td><td>Vitamine D et calcium</td><td>Os mous et déformés</td></tr>
        <tr><td>Scorbut</td><td>Vitamine C</td><td>Gencives qui saignent</td></tr><tr><td>Goitre</td><td>Iode</td><td>Gonflement du cou</td></tr><tr><td>Anémie</td><td>Fer</td><td>Pâleur, essoufflement</td></tr></table>
        <p>« Un enfant a les jambes arquées et les os mous. Je cherche dans la colonne des signes : “os mous et déformés”. Je lis la même ligne : rachitisme, manque de vitamine D et de calcium. »</p>
        <p>Une alimentation insuffisante en quantité (manque d’énergie) provoque la <b>sous-alimentation</b> ; une alimentation insuffisante en qualité provoque la <b>malnutrition</b>.</p>`]],
    gui: { titre: "Nous faisons — Deux lots de rats", ctx: "Deux lots de jeunes rats de même âge sont suivis pendant 40 jours.", docs: [gRats], q: [
      num("I1", "Quelle est la masse moyenne des rats du lot A au jour 40 ?", 185, "g", "On lit la courbe du lot A au jour 40 : 185 g.", 5),
      qcm("I1", "Comment évolue la masse des rats du lot B ?", ["Elle reste voisine de 50 g, puis diminue jusqu’à 45 g", "Elle augmente de 50 g à 185 g", "Elle double en 10 jours", "Elle augmente de 45 g à 50 g"], "On donne le sens et les valeurs lues sur la courbe du lot B."),
      qcm("R2", "Quelle conclusion peut-on écrire ?", ["Les protides sont indispensables à la croissance", "Les protides empêchent la croissance", "Le régime n’a aucun effet sur la croissance", "Les rats du lot B mangent trop"], "La seule différence entre les lots est la présence de protides.")] },
    aut: { titre: "Tu fais — Les maladies de carence", ctx: "Utilise le tableau pour répondre.", docs: [tCarences], q: [
      qcm("I4", "Quel aliment simple manque dans le cas du scorbut ?", ["La vitamine C", "Le fer", "L’iode", "Les protides"], "Ligne « Scorbut », deuxième colonne."),
      assoc("K", "Associe chaque maladie à ce qui manque.", ["Le rachitisme", "Le goitre", "L’anémie", "Le kwashiorkor"], ["Le fer", "Les protides", "La vitamine D et le calcium", "L’iode"], [2, 3, 0, 1], "On lit la deuxième colonne du tableau."),
      qcm("R2", "Des marins partis plusieurs mois sans fruits ni légumes frais ont les gencives qui saignent. Que faut-il leur donner ?", ["Des agrumes, riches en vitamine C", "Du sel", "De la viande séchée", "Du pain"], "Les signes sont ceux du scorbut : il manque de la vitamine C."),
      qcm("R1", "Pourquoi utilise-t-on du sel iodé ?", ["Pour prévenir le goitre, dû à un manque d’iode", "Pour prévenir le scorbut", "Pour donner du goût", "Pour remplacer les protides"], "L’iode ajouté au sel couvre les besoins de l’organisme."),
      vf([["Une maladie de carence guérit quand on apporte l’aliment manquant.", true], ["Le kwashiorkor est dû à un excès de protides.", false], ["La malnutrition est une alimentation de mauvaise qualité.", true], ["Les vitamines sont inutiles à l’organisme.", false]], "Le kwashiorkor est dû à un manque de protides ; les vitamines sont indispensables en très petite quantité.")] },
    clo: `<ul><li>Une <b>carence</b> est le manque d’un aliment simple indispensable ; elle provoque une <b>maladie de carence</b>.</li><li>Protides → kwashiorkor ; vitamine D et calcium → rachitisme ; vitamine C → scorbut ; iode → goitre ; fer → anémie.</li><li><b>Sous-alimentation</b> : quantité insuffisante. <b>Malnutrition</b> : qualité insuffisante.</li><li>Pour comparer deux courbes : mêmes axes, même moment, deux valeurs, « alors que ».</li></ul>`
  });

  // ---------- Chapitre 2, séquence 2 ----------
  const tCompo = table("Composition de 100 g de trois aliments (valeurs arrondies)", ["Aliment", "Glucides", "Protides", "Lipides"], [["Pain", "55 g", "8 g", "1 g"], ["Lait entier", "5 g", "3 g", "4 g"], ["Huile d’olive", "0 g", "0 g", "100 g"]]);
  L(6, [0, 1, 1], {
    titre: "Le rôle des aliments dans le corps humain",
    objectif: "À la fin de la leçon, je sais donner le rôle de chaque aliment simple et calculer l’énergie apportée par un aliment.",
    reussite: ["Je classe les aliments simples selon leur rôle.", "Je connais la valeur énergétique d’un gramme de glucides, de protides et de lipides.", "Je calcule l’énergie apportée par 100 g d’un aliment."],
    pre: [`<p>Tu sais que le manque de protides arrête la croissance et que le manque de vitamines rend malade (leçon 5) : chaque aliment simple a donc un <b>rôle</b>.</p>`, [
      qcm("K", "Que provoque un manque de protides chez un jeune animal ?", ["L’arrêt de la croissance", "Une croissance plus rapide", "Rien", "Un excès d’énergie"], "C’est le résultat de l’expérience sur les rats."),
      qcm("K", "L’unité d’énergie utilisée sur les étiquettes des aliments est :", ["le kilojoule (kJ)", "le gramme", "le litre", "le mètre"], "On trouve aussi la kilocalorie : 1 kcal ≈ 4,18 kJ.")]],
    mod: [["Je fais 1 — Je classe les aliments simples selon leur rôle", `
        <table class="t"><tr><th>Rôle</th><th>Aliments simples</th><th>À quoi ils servent</th></tr>
        <tr><th>Bâtisseur</th><td>Protides, calcium, phosphore, eau</td><td>Construire et réparer les organes : croissance, os, muscles</td></tr>
        <tr><th>Énergétique</th><td>Glucides, lipides</td><td>Fournir l’énergie : mouvement, chaleur, fonctionnement des organes</td></tr>
        <tr><th>Fonctionnel (protecteur)</th><td>Vitamines, sels minéraux, eau</td><td>Permettre le bon fonctionnement de l’organisme, en très petite quantité pour les vitamines</td></tr></table>
        <p>« Je me demande pour chaque aliment simple : sert-il à <b>construire</b>, à <b>fournir de l’énergie</b>, ou à <b>faire fonctionner</b> ? Le calcium entre dans la composition des os : bâtisseur. »</p>
        <p>Un même aliment simple peut avoir deux rôles : l’eau est à la fois bâtisseuse et fonctionnelle ; les protides peuvent aussi fournir de l’énergie.</p>`],
      ["Je fais 2 — Je calcule l’énergie apportée par un aliment", `
        <p class="def">1 g de glucides apporte <b>17 kJ</b> ; 1 g de protides apporte <b>17 kJ</b> ; 1 g de lipides apporte <b>38 kJ</b>.</p>
        <p>« 100 g de pain contiennent 55 g de glucides, 8 g de protides et 1 g de lipides. Je calcule ligne par ligne, puis j’additionne. »</p>
        <table class="t"><tr><th></th><th>Masse</th><th>Calcul</th><th>Énergie</th></tr><tr><th>Glucides</th><td>55 g</td><td>55 × 17</td><td>935 kJ</td></tr><tr><th>Protides</th><td>8 g</td><td>8 × 17</td><td>136 kJ</td></tr><tr><th>Lipides</th><td>1 g</td><td>1 × 38</td><td>38 kJ</td></tr><tr><th>Total</th><td></td><td></td><td><b>1 109 kJ</b></td></tr></table>
        <p><b>Erreurs fréquentes</b> : oublier d’additionner les trois résultats ; utiliser 17 pour les lipides. À masse égale, les lipides apportent plus de deux fois plus d’énergie que les glucides.</p>
        <p>L’eau, les sels minéraux et les vitamines n’apportent pas d’énergie.</p>`]],
    gui: { titre: "Nous faisons — L’énergie du lait", ctx: "Rappel : 1 g de glucides ou de protides apporte 17 kJ ; 1 g de lipides apporte 38 kJ.", docs: [tCompo], q: [
      num("I4", "Quelle masse de lipides contiennent 100 g de lait entier ?", 4, "g", "Ligne « Lait entier », colonne « Lipides »."),
      num("R5", "Quelle énergie apportent les lipides de 100 g de lait ?", 152, "kJ", "4 × 38 = 152 kJ."),
      num("R5", "Quelle est l’énergie totale apportée par 100 g de lait entier ?", 288, "kJ", "Glucides : 5 × 17 = 85. Protides : 3 × 17 = 51. Lipides : 152. Total : 85 + 51 + 152 = 288 kJ.")] },
    aut: { titre: "Tu fais — Comparer trois aliments", ctx: "Rappel : 1 g de glucides ou de protides apporte 17 kJ ; 1 g de lipides apporte 38 kJ.", docs: [tCompo], q: [
      num("I4", "Quelle masse de glucides contiennent 100 g de pain ?", 55, "g", "Ligne « Pain », colonne « Glucides »."),
      num("R5", "Quelle énergie apportent 100 g d’huile d’olive ?", 3800, "kJ", "100 × 38 = 3 800 kJ."),
      qcm("R2", "Lequel des trois aliments est le plus énergétique, à masse égale ?", ["L’huile d’olive : 3 800 kJ pour 100 g", "Le pain : 1 109 kJ pour 100 g", "Le lait : 288 kJ pour 100 g", "Ils apportent la même énergie"], "L’huile est formée uniquement de lipides, les plus riches en énergie."),
      assoc("K", "Donne le rôle principal de chaque aliment simple.", ["Les protides", "Les glucides", "Les vitamines", "Le calcium", "Les lipides"], ["Rôle énergétique", "Rôle bâtisseur", "Rôle fonctionnel"], [1, 0, 2, 1, 0], "Protides et calcium construisent ; glucides et lipides fournissent l’énergie ; les vitamines font fonctionner."),
      vf([["Un gramme de lipides apporte plus d’énergie qu’un gramme de glucides.", true], ["L’eau apporte de l’énergie.", false], ["Les protides sont des aliments bâtisseurs.", true], ["Les vitamines sont nécessaires en grande quantité.", false]], "38 kJ contre 17 kJ ; l’eau et les vitamines n’apportent pas d’énergie.")] },
    clo: `<ul><li>Aliments <b>bâtisseurs</b> : protides, calcium, eau. <b>Énergétiques</b> : glucides, lipides. <b>Fonctionnels</b> : vitamines, sels minéraux, eau.</li><li>1 g de glucides = 17 kJ ; 1 g de protides = 17 kJ ; 1 g de lipides = 38 kJ.</li><li>Énergie d’un aliment = (glucides × 17) + (protides × 17) + (lipides × 38).</li></ul>`
  });

  // ---------- Chapitre 2, séquence 3 ----------
  const tBesoins = table("Besoins énergétiques quotidiens (valeurs moyennes arrondies)", ["Personne", "Besoins (kJ par jour)"],
    [["Enfant de 8 ans", "8 500"], ["Adolescente de 15 ans", "10 500"], ["Adolescent de 15 ans", "12 500"], ["Femme adulte, activité moyenne", "9 000"], ["Homme adulte, activité moyenne", "11 500"], ["Homme adulte, travail de force", "15 000"]]);
  const tApports = table("Besoins et apports de trois adolescents de 15 ans (kJ par jour)", ["Élève", "Besoins", "Apports"], [["Yasmine", "10 500", "10 400"], ["Omar", "12 500", "16 000"], ["Salim", "12 500", "8 500"]]);
  L(7, [0, 1, 2], {
    titre: "La notion de ration alimentaire",
    objectif: "À la fin de la leçon, je sais définir la ration alimentaire, expliquer de quoi dépendent les besoins et dire si une ration est équilibrée.",
    reussite: ["Je cite les facteurs qui font varier les besoins énergétiques.", "Je compare des apports à des besoins.", "Je donne les règles d’une ration équilibrée."],
    pre: [`<p>Tu sais calculer l’énergie apportée par un aliment (leçon 6). Mais de combien d’énergie le corps a-t-il besoin chaque jour ?</p>`, [
      qcm("K", "Quels aliments simples fournissent l’énergie ?", ["Les glucides et les lipides", "L’eau et les vitamines", "Les sels minéraux", "Le calcium"], "Les protides peuvent en fournir aussi."),
      qcm("K", "1 g de lipides apporte :", ["38 kJ", "17 kJ", "4 kJ", "100 kJ"], "Plus du double des glucides.")]],
    mod: [["Je fais 1 — Je cherche de quoi dépendent les besoins", `
        <p class="def">La <b>ration alimentaire</b> est la quantité d’aliments qu’une personne doit consommer en 24 heures pour couvrir tous ses besoins.</p>
        <p class="ctx">Je compare les lignes du tableau deux à deux, en ne changeant qu’un facteur à la fois.</p>
        <table class="t"><tr><th>Personne</th><th>Besoins (kJ par jour)</th></tr><tr><td>Enfant de 8 ans</td><td>8 500</td></tr><tr><td>Adolescente de 15 ans</td><td>10 500</td></tr><tr><td>Adolescent de 15 ans</td><td>12 500</td></tr><tr><td>Homme adulte, activité moyenne</td><td>11 500</td></tr><tr><td>Homme adulte, travail de force</td><td>15 000</td></tr></table>
        <ul><li>« Enfant et adolescent : les besoins changent avec l’<b>âge</b>. »</li><li>« Adolescente et adolescent du même âge : ils changent avec le <b>sexe</b>. »</li><li>« Deux hommes adultes, activité moyenne ou travail de force : ils changent avec l’<b>activité</b>. »</li></ul>
        <p>Les besoins augmentent aussi pendant la grossesse et l’allaitement, et quand il fait froid.</p>`],
      ["Je fais 2 — Je juge une ration", `
        <p>Une ration doit être équilibrée de deux façons.</p>
        <ul><li><b>En quantité</b> : l’énergie apportée doit être égale aux besoins. « Apports supérieurs aux besoins : l’excès est mis en réserve sous forme de graisses, risque d’obésité. Apports inférieurs : amaigrissement, fatigue. »</li>
        <li><b>En qualité</b> : elle doit apporter tous les aliments simples, dans de bonnes proportions — environ 55 % de l’énergie sous forme de glucides, 30 % de lipides, 15 % de protides — avec de l’eau, des vitamines, des sels minéraux et des fibres.</li></ul>
        <p>« Omar a besoin de 12 500 kJ et en consomme 16 000. Je calcule l’écart : 16 000 − 12 500 = 3 500 kJ en trop chaque jour. Sa ration est excessive. »</p>
        <p>Règles pratiques : manger varié, répartir la ration en plusieurs repas, ne pas sauter le petit-déjeuner, limiter les produits gras, sucrés et salés.</p>`]],
    gui: { titre: "Nous faisons — Les besoins selon les personnes", ctx: "Le tableau donne les besoins énergétiques de six personnes.", docs: [tBesoins], q: [
      num("I4", "Quels sont les besoins quotidiens d’un adolescent de 15 ans ?", 12500, "kJ", "Troisième ligne du tableau."),
      qcm("R3", "Quelles lignes faut-il comparer pour montrer l’effet de l’activité ?", ["Homme adulte, activité moyenne, et homme adulte, travail de force", "Enfant de 8 ans et homme adulte", "Adolescente et adolescent", "Femme adulte et enfant"], "Même sexe, même âge : seule l’activité change."),
      num("R5", "De combien les besoins d’un homme qui fait un travail de force dépassent-ils ceux d’un homme d’activité moyenne ?", 3500, "kJ", "15 000 − 11 500 = 3 500 kJ.")] },
    aut: { titre: "Tu fais — Trois adolescents", ctx: "On a comparé les besoins et les apports de trois élèves de 15 ans.", docs: [tApports], q: [
      num("I4", "Quels sont les apports quotidiens de Salim ?", 8500, "kJ", "Ligne « Salim », colonne « Apports »."),
      num("R5", "De combien les apports d’Omar dépassent-ils ses besoins ?", 3500, "kJ", "16 000 − 12 500 = 3 500 kJ."),
      assoc("R2", "Juge la ration de chaque élève.", ["Yasmine", "Omar", "Salim"], ["Ration insuffisante", "Ration équilibrée en quantité", "Ration excessive"], [1, 2, 0], "Yasmine : apports presque égaux aux besoins. Omar : apports supérieurs. Salim : apports inférieurs."),
      qcm("R2", "Quel risque Omar court-il s’il continue ainsi ?", ["Une prise de poids, pouvant conduire à l’obésité", "Un amaigrissement", "Le scorbut", "Aucun risque"], "L’énergie en excès est mise en réserve sous forme de graisses."),
      vf([["Les besoins énergétiques dépendent de l’âge, du sexe et de l’activité.", true], ["Une ration équilibrée ne dépend que de la quantité d’énergie.", false], ["Une femme enceinte a des besoins plus élevés.", true], ["Les glucides doivent fournir environ la moitié de l’énergie.", true]], "Une ration doit être équilibrée en quantité et en qualité.")] },
    clo: `<ul><li>La <b>ration alimentaire</b> : les aliments nécessaires pour couvrir les besoins de 24 heures.</li><li>Les besoins dépendent de l’<b>âge</b>, du <b>sexe</b>, de l’<b>activité</b> et de l’état de l’organisme (grossesse, allaitement).</li><li>Ration équilibrée <b>en quantité</b> (apports = besoins) et <b>en qualité</b> (tous les aliments simples, environ 55 % de glucides, 30 % de lipides, 15 % de protides).</li><li>Excès → obésité ; insuffisance → amaigrissement et carences.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 4 ----------
  const gPH = graph("Acidité de la plaque dentaire après une boisson (un pH plus bas signifie un milieu plus acide)", "Temps (min)", "pH de la plaque dentaire", 40, 8,
    [["Après une boisson sucrée", [[0, 7], [5, 5.5], [10, 4.8], [20, 5.2], [30, 6], [40, 6.8]]], ["Après un verre d’eau", [[0, 7], [10, 7], [20, 7], [30, 7], [40, 7]]]]);
  L(8, [0, 1, 3], {
    titre: "L’hygiène de l’appareil digestif",
    objectif: "À la fin de la leçon, je sais expliquer la formation d’une carie et proposer des règles d’hygiène pour protéger l’appareil digestif.",
    reussite: ["J’enchaîne les étapes de la formation d’une carie.", "Je compare deux courbes pour montrer l’effet du sucre.", "Je cite quatre règles d’hygiène de l’appareil digestif."],
    pre: [`<p>Les dents assurent la digestion mécanique (leçon 2). Une dent est formée, de l’extérieur vers l’intérieur, de l’<b>émail</b>, de la <b>dentine</b> et de la <b>pulpe</b>, qui contient les nerfs et les vaisseaux.</p>`, [
      qcm("K", "Quelle action les dents exercent-elles sur les aliments ?", ["Une action mécanique", "Une action chimique", "Aucune action", "Une absorption"], "Elles coupent et broient."),
      qcm("K", "Quelle partie de la dent contient les nerfs ?", ["La pulpe", "L’émail", "La dentine", "La gencive"], "C’est pourquoi une carie profonde fait mal.")]],
    mod: [["Je fais 1 — J’explique la formation d’une carie", `
        <p class="ctx">J’enchaîne les étapes, en me demandant à chaque fois : « Et ensuite ? »</p>
        <ol><li>« Après un repas, des restes d’aliments sucrés restent collés aux dents. »</li>
        <li>« Les <b>bactéries</b> de la bouche s’y multiplient et forment la <b>plaque dentaire</b>. »</li>
        <li>« Ces bactéries transforment les sucres en <b>acides</b>. »</li>
        <li>« Les acides attaquent l’<b>émail</b> : un trou se forme, sans douleur. »</li>
        <li>« La carie atteint la <b>dentine</b>, puis la <b>pulpe</b> : la douleur apparaît. Sans soin, un abcès peut se former. »</li></ol>
        <p>Je lis le graphique : « Après une boisson sucrée, le pH de la plaque dentaire descend de 7 à 4,8 en 10 minutes : le milieu devient acide. Il lui faut 40 minutes pour remonter. Après un verre d’eau, le pH reste à 7. » En dessous de 5,5 environ, l’émail est attaqué.</p>
        <p>« Je comprends pourquoi grignoter du sucré toute la journée est dangereux : les dents restent presque toujours en milieu acide. »</p>`],
      ["Je fais 2 — Je formule des règles d’hygiène", `
        <table class="t"><tr><th>Problème</th><th>Cause</th><th>Règle d’hygiène</th></tr>
        <tr><td>Carie dentaire</td><td>Acides produits par les bactéries à partir des sucres</td><td>Se brosser les dents après les repas ; limiter les sucreries ; consulter le dentiste une fois par an</td></tr>
        <tr><td>Intoxication alimentaire, diarrhée</td><td>Aliments ou eau souillés par des microbes</td><td>Se laver les mains ; laver les fruits et légumes ; bien cuire ; respecter la chaîne du froid et les dates</td></tr>
        <tr><td>Constipation</td><td>Manque de fibres et d’eau</td><td>Manger des fruits, des légumes et des céréales complètes ; boire de l’eau</td></tr>
        <tr><td>Digestion difficile, brûlures d’estomac</td><td>Repas trop gras, pris trop vite</td><td>Bien mâcher ; manger à heures régulières, dans le calme</td></tr></table>
        <p>L’alcool et le tabac irritent les muqueuses digestives et favorisent des maladies graves.</p>`]],
    gui: { titre: "Nous faisons — Le sucre et l’acidité", ctx: "On mesure le pH de la plaque dentaire d’une personne après une boisson sucrée, puis, un autre jour, après un verre d’eau.", docs: [gPH], q: [
      num("I1", "Quel est le pH de la plaque dentaire 10 minutes après la boisson sucrée ?", 4.8, "", "On lit la courbe « boisson sucrée » à 10 minutes : 4,8.", 0.2),
      qcm("I1", "Comment évolue le pH après le verre d’eau ?", ["Il reste égal à 7", "Il diminue de 7 à 4,8", "Il augmente de 4,8 à 7", "Il diminue de 7 à 5,5"], "La courbe « verre d’eau » est horizontale."),
      qcm("R2", "Que montre la comparaison des deux courbes ?", ["Le sucre rend la plaque dentaire acide pendant plusieurs dizaines de minutes", "L’eau rend la plaque dentaire acide", "Le sucre n’a aucun effet", "L’acidité ne dure que quelques secondes"], "À 10 minutes : pH 4,8 après le sucre, alors que 7 après l’eau.")] },
    aut: { titre: "Tu fais — Protéger ses dents et son tube digestif", ctx: "Utilise le graphique et tes connaissances.", docs: [gPH], q: [
      qcm("I1", "Au bout de combien de temps le pH est-il presque revenu à sa valeur de départ après la boisson sucrée ?", ["40 minutes", "5 minutes", "10 minutes", "Jamais"], "À 40 minutes, le pH est de 6,8, proche de 7."),
      ordre("K", "Remets dans l’ordre les étapes de la formation d’une carie.", ["Des restes d’aliments sucrés restent sur les dents", "Les bactéries de la plaque dentaire transforment les sucres en acides", "Les acides attaquent l’émail", "La carie atteint la dentine", "La carie atteint la pulpe : douleur"], "Sucres → bactéries → acides → émail → dentine → pulpe."),
      qcm("R2", "Pourquoi vaut-il mieux éviter de grignoter des sucreries toute la journée ?", ["Chaque prise de sucre rend la plaque acide pendant longtemps : l’émail est attaqué en permanence", "Le sucre nettoie les dents", "Le sucre renforce l’émail", "Le sucre tue les bactéries"], "Les périodes acides s’enchaînent sans que le pH ait le temps de remonter."),
      assoc("K", "Associe chaque problème à la règle qui le prévient.", ["La carie", "L’intoxication alimentaire", "La constipation"], ["Manger des fibres et boire de l’eau", "Se brosser les dents après les repas", "Se laver les mains et bien cuire les aliments"], [1, 2, 0], "Chaque règle agit sur la cause du problème."),
      vf([["Une carie débutante n’est pas douloureuse.", true], ["Les acides sont produits par les bactéries de la plaque dentaire.", true], ["Il suffit de se brosser les dents une fois par semaine.", false], ["Les fibres facilitent le transit intestinal.", true]], "La carie ne fait mal que lorsqu’elle atteint la pulpe : d’où l’intérêt des visites régulières chez le dentiste.")] },
    clo: `<ul><li><b>Carie</b> : les bactéries de la plaque dentaire transforment les sucres en acides, qui attaquent l’émail, puis la dentine et la pulpe.</li><li>Prévention : brossage après les repas, moins de sucreries, visite annuelle chez le dentiste.</li><li>Hygiène alimentaire : mains et aliments propres, cuisson, eau potable.</li><li>Bien mâcher, manger des fibres, boire de l’eau, éviter l’alcool et le tabac.</li></ul>`
  });
})();
