// 1AC — Thème 2 « Le corps humain et la santé » : digestion et alimentation saine ; respiration, circulation et exercice physique.
// Même modèle que college.js : enseignement explicite (ouverture, je fais, nous faisons, tu fais, je retiens).
(function () {
  const L = window.SVT.lecons["1AC"];

  // ---------- Chapitre 1, séquence 1 ----------
  L.push({
    id: "1AC-L8", u: 1, c: 0, s: 0,
    titre: "Leçon 8 — La digestion et l’absorption",
    objectif: "À la fin de la leçon, je sais décrire le trajet des aliments dans le tube digestif et expliquer ce que sont la digestion et l’absorption.",
    reussite: ["Je cite dans l’ordre les organes du tube digestif.", "J’explique une expérience de digestion en comparant avec le tube témoin.", "Je dis où les nutriments passent dans le sang."],
    prerequis: {
      html: `<p>Nos organes ont besoin de matière et d’énergie, apportées par les <b>aliments</b>. Mais un morceau de pain est bien trop gros pour entrer dans le sang : il doit d’abord être transformé.</p>`,
      quiz: [
        { id: "1AC-L8-a1", cap: "K", pts: 1, type: "qcm", enonce: "Dans une expérience, à quoi sert le tube témoin ?", options: ["À comparer", "À décorer", "À gagner du temps", "À remplacer l’hypothèse"], rep: 0, retour: "Le témoin sert de comparaison : un seul facteur le distingue de l’autre tube (leçon 3)." },
        { id: "1AC-L8-a2", cap: "K", pts: 1, type: "qcm", enonce: "Lequel de ces organes est traversé par les aliments ?", options: ["L’estomac", "Le cœur", "Les poumons", "Le cerveau"], rep: 0, retour: "L’estomac fait partie du tube digestif." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je suis le trajet d’une bouchée de pain", html: `
        <p class="ctx">Je suis l’aliment organe par organe, et à chaque étape je me demande : « Que lui arrive-t-il ici ? »</p>
        <table class="t"><tr><th>Organe du tube digestif</th><th>Ce qui arrive aux aliments</th></tr>
        <tr><th>1. Bouche</th><td>Les dents coupent et broient ; la salive mouille les aliments et commence à les transformer</td></tr>
        <tr><th>2. Œsophage</th><td>Il conduit les aliments vers l’estomac</td></tr>
        <tr><th>3. Estomac</th><td>Il brasse les aliments et les mélange au suc gastrique : on obtient une bouillie</td></tr>
        <tr><th>4. Intestin grêle</th><td>La bile, le suc pancréatique et le suc intestinal achèvent la transformation ; les nutriments passent dans le sang</td></tr>
        <tr><th>5. Gros intestin</th><td>Ce qui n’a pas été digéré forme les excréments, rejetés par l’anus</td></tr></table>
        <p>Les aliments subissent <b>deux actions</b> : une action <b>mécanique</b> (dents, brassage de l’estomac) et une action <b>chimique</b> (les <b>sucs digestifs</b>).</p>
        <p class="def"><b>Digestion</b> : transformation des aliments en <b>nutriments</b>, très petits et solubles.</p>
        <p><b>Attention.</b> Les aliments ne traversent ni le foie ni le pancréas : ces glandes sont à côté du tube digestif et y déversent leurs sucs. Et la digestion ne se fait pas « seulement dans l’estomac » : elle commence dans la bouche et se termine dans l’intestin grêle.</p>` },
      { titre: "Je fais 2 — J’interprète une expérience, puis je définis l’absorption", html: `
        <p>Le pain contient de l’<b>amidon</b>. L’eau iodée, jaune, devient <b>bleu-noir</b> en présence d’amidon.</p>
        <table class="t"><tr><th>Tube</th><th>Contenu, gardé 15 minutes à 37 °C</th><th>Couleur avec l’eau iodée</th></tr><tr><th>A</th><td>Amidon + salive</td><td>Jaune</td></tr><tr><th>B (témoin)</th><td>Amidon + eau</td><td>Bleu-noir</td></tr></table>
        <p>« Je cherche ce qui change entre A et B : seulement la salive. Dans B, la couleur bleu-noir montre que l’amidon est toujours là. Dans A, la couleur reste jaune : l’amidon a <b>disparu</b>. Je conclus : la salive transforme l’amidon. » Il est devenu un sucre, beaucoup plus petit.</p>
        <p>Que deviennent les nutriments ? La paroi de l’<b>intestin grêle</b> est très plissée, très fine et parcourue par de nombreux vaisseaux sanguins. Les nutriments la traversent et passent dans le <b>sang</b>, qui les distribue à tous les organes.</p>
        <p class="def"><b>Absorption</b> : passage des nutriments de l’intestin grêle vers le sang.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — La salive et la température", contexte: "On prépare trois tubes contenant de l’amidon. Après 15 minutes, on ajoute de l’eau iodée dans chacun.", docs: [
        { type: "table", titre: "Résultats de l’expérience", cols: ["Tube", "Contenu", "Température", "Couleur avec l’eau iodée"], rows: [["1", "Amidon + salive", "37 °C", "Jaune"], ["2", "Amidon + eau", "37 °C", "Bleu-noir"], ["3", "Amidon + salive", "0 °C", "Bleu-noir"]] }
      ], questions: [
        { id: "1AC-L8-g1", cap: "I4", pts: 1, type: "qcm", enonce: "Dans quel tube l’amidon a-t-il disparu ?", options: ["Le tube 1", "Le tube 2", "Le tube 3", "Aucun"], rep: 0, retour: "La couleur jaune montre qu’il n’y a plus d’amidon : c’est le tube 1." },
        { id: "1AC-L8-g2", cap: "R2", pts: 1, type: "qcm", enonce: "On compare les tubes 1 et 2. Que peut-on conclure ?", options: ["La salive est nécessaire pour transformer l’amidon", "La température transforme l’amidon", "L’eau transforme l’amidon", "L’eau iodée transforme l’amidon"], rep: 0, retour: "Entre 1 et 2, seule la présence de salive change. Sans salive, l’amidon reste." },
        { id: "1AC-L8-g3", cap: "R2", pts: 1, type: "qcm", enonce: "On compare les tubes 1 et 3. Que peut-on conclure ?", options: ["La salive agit à 37 °C, mais pas à 0 °C", "La salive n’agit jamais", "L’amidon disparaît au froid", "L’eau est nécessaire"], rep: 0, retour: "Entre 1 et 3, seule la température change. 37 °C est la température du corps." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Le sang autour de l’intestin grêle", contexte: "Après un repas, on mesure la quantité de glucose (un nutriment) dans le sang qui arrive à l’intestin grêle et dans le sang qui en repart. Les valeurs sont simplifiées.", docs: [
        { type: "table", titre: "Glucose dans le sang après un repas", cols: ["", "Sang qui arrive à l’intestin grêle", "Sang qui repart de l’intestin grêle"], rows: [["Glucose (g par litre de sang)", "0,9", "1,8"]] }
      ], questions: [
        { id: "1AC-L8-t1", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les organes traversés par les aliments.", items: ["Bouche", "Œsophage", "Estomac", "Intestin grêle", "Gros intestin"], retour: "C’est le trajet du tube digestif, de la bouche à l’anus." },
        { id: "1AC-L8-t2", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la quantité de glucose dans le sang qui repart de l’intestin grêle ?", rep: 1.8, tol: 0, unite: "g/L", retour: "On lit la dernière colonne du tableau : 1,8 g par litre." },
        { id: "1AC-L8-t3", cap: "R2", pts: 1, type: "qcm", enonce: "Le sang qui repart de l’intestin contient plus de glucose que celui qui y arrive. Pourquoi ?", options: ["Les nutriments sont passés de l’intestin grêle dans le sang : c’est l’absorption", "Le sang fabrique du glucose", "L’estomac a envoyé du glucose dans le cœur", "Le glucose vient des poumons"], rep: 0, retour: "L’augmentation (de 0,9 à 1,8 g/L) montre que le sang s’est enrichi en nutriments en traversant la paroi de l’intestin." },
        { id: "1AC-L8-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque organe au suc digestif qu’il produit.", gauche: ["Glandes salivaires", "Foie", "Estomac", "Pancréas"], droite: ["Bile", "Suc pancréatique", "Salive", "Suc gastrique"], rep: [2, 0, 3, 1], retour: "Glandes salivaires : salive. Foie : bile. Estomac : suc gastrique. Pancréas : suc pancréatique." },
        { id: "1AC-L8-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La digestion transforme les aliments en nutriments.", v: true }, { t: "L’absorption se fait surtout dans l’estomac.", v: false }, { t: "Les aliments traversent le foie.", v: false }, { t: "Les dents exercent une action mécanique sur les aliments.", v: true }], retour: "L’absorption se fait dans l’intestin grêle. Le foie déverse la bile dans l’intestin, mais les aliments n’y passent pas." }
      ] }
    ],
    cloture: `<ul><li>Tube digestif : <b>bouche → œsophage → estomac → intestin grêle → gros intestin</b>.</li><li>La <b>digestion</b> transforme les aliments en <b>nutriments</b>, par une action mécanique (dents, brassage) et chimique (sucs digestifs).</li><li>L’<b>absorption</b> est le passage des nutriments dans le sang, à travers la paroi de l’<b>intestin grêle</b>.</li><li>Ce qui n’est pas digéré est rejeté sous forme d’excréments.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 2 ----------
  L.push({
    id: "1AC-L9", u: 1, c: 0, s: 1,
    titre: "Leçon 9 — L’alimentation saine",
    objectif: "À la fin de la leçon, je sais dire si un repas est équilibré et lire la quantité de sucre indiquée sur une étiquette.",
    reussite: ["Je classe un aliment : bâtisseur, énergétique ou protecteur.", "Je vérifie qu’un repas contient les trois sortes d’aliments et de l’eau.", "Je calcule le nombre de morceaux de sucre contenus dans une boisson."],
    prerequis: {
      html: `<p>Après la digestion, les <b>nutriments</b> passent dans le sang et sont distribués aux organes. Tous les aliments n’apportent pas les mêmes nutriments : il faut donc bien les choisir.</p>`,
      quiz: [
        { id: "1AC-L9-a1", cap: "K", pts: 1, type: "qcm", enonce: "Où les nutriments passent-ils dans le sang ?", options: ["Dans l’intestin grêle", "Dans la bouche", "Dans l’œsophage", "Dans le gros intestin"], rep: 0, retour: "C’est l’absorption intestinale (leçon 8)." },
        { id: "1AC-L9-a2", cap: "K", pts: 1, type: "qcm", enonce: "Lequel de ces aliments est d’origine végétale ?", options: ["Les lentilles", "Le lait", "Les œufs", "Le poisson"], rep: 0, retour: "Les lentilles sont des graines. Le lait, les œufs et le poisson sont d’origine animale." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — J’analyse un repas", html: `
        <p class="ctx">Je classe chaque aliment selon ce qu’il apporte au corps.</p>
        <table class="t"><tr><th>Rôle</th><th>Aliments</th><th>Ce qu’ils apportent</th></tr>
        <tr><th>Bâtisseurs</th><td>Viande, poisson, œufs, lait, fromage, lentilles, pois chiches</td><td>Des protéines et du calcium : pour grandir et réparer le corps</td></tr>
        <tr><th>Énergétiques</th><td>Pain, semoule, riz, pâtes, pommes de terre, huile, beurre</td><td>Des glucides et des lipides : pour l’énergie</td></tr>
        <tr><th>Protecteurs</th><td>Fruits et légumes</td><td>Des vitamines, des sels minéraux et des fibres : pour le bon fonctionnement du corps</td></tr></table>
        <p>L’<b>eau</b> est la seule boisson indispensable.</p>
        <p><b>Repas 1 : tajine de poulet aux légumes, pain, orange, eau.</b> « Poulet : bâtisseur. Pain : énergétique. Légumes et orange : protecteurs. Eau : oui. Les trois rôles sont présents. » Ce repas est <b>équilibré</b>.</p>
        <p><b>Repas 2 : frites, pain, soda, biscuits.</b> « Frites, pain, biscuits : énergétiques. Soda : du sucre. Bâtisseur ? Aucun. Protecteur ? Aucun. » Ce repas n’est <b>pas équilibré</b> : trop gras, trop sucré, sans fruit ni légume.</p>` },
      { titre: "Je fais 2 — Je lis une étiquette", html: `
        <p>Sur une canette de soda de 33 cL, je lis : « sucres : 35 g ». Un morceau de sucre pèse environ 5 g.</p>
        <p>« Je cherche combien de fois 5 g entre dans 35 g. Je divise : 35 ÷ 5 = <b>7</b>. Une canette contient l’équivalent de 7 morceaux de sucre. »</p>
        <p><b>Les règles d’une alimentation saine :</b></p>
        <ul><li>manger <b>varié</b> : les trois sortes d’aliments à chaque repas principal ;</li><li>ne pas sauter le <b>petit-déjeuner</b> ;</li><li>limiter le <b>sucre</b>, le <b>sel</b> et les <b>graisses</b> ;</li><li>boire de l’<b>eau</b> ;</li><li>bouger chaque jour.</li></ul>
        <p>Manger <b>trop</b> gras ou trop sucré favorise le surpoids, les caries et, plus tard, le diabète. Ne <b>pas assez</b> manger d’une sorte d’aliment provoque une <b>carence</b> : fatigue, mauvaise croissance, os fragiles.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Trois repas", contexte: "Voici trois repas de midi.", docs: [
        { type: "table", titre: "Composition des repas", cols: ["Repas", "Aliments", "Boisson"], rows: [["A", "Lentilles, pain, salade de tomates, pomme", "Eau"], ["B", "Frites, pain, biscuits", "Soda"], ["C", "Poisson grillé, riz", "Eau"]] }
      ], questions: [
        { id: "1AC-L9-g1", cap: "K", pts: 1, type: "assoc", enonce: "Donne le rôle de chaque aliment.", gauche: ["Les lentilles", "Le pain", "La tomate", "Le poisson", "L’huile"], droite: ["Aliment protecteur", "Aliment bâtisseur", "Aliment énergétique"], rep: [1, 2, 0, 1, 2], retour: "Lentilles et poisson : protéines, bâtisseurs. Pain et huile : énergétiques. Tomate : protecteur." },
        { id: "1AC-L9-g2", cap: "R2", pts: 1, type: "qcm", enonce: "Quel repas est équilibré ?", options: ["Le repas A", "Le repas B", "Le repas C", "Aucun"], rep: 0, retour: "A contient un bâtisseur (lentilles), un énergétique (pain), des protecteurs (tomates, pomme) et de l’eau." },
        { id: "1AC-L9-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Que manque-t-il au repas C ?", options: ["Un fruit ou un légume", "Un aliment bâtisseur", "Un aliment énergétique", "Une boisson"], rep: 0, retour: "Le poisson est bâtisseur, le riz énergétique : il manque un aliment protecteur." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Le sucre caché", contexte: "On a relevé la quantité de sucres indiquée sur quatre étiquettes. Un morceau de sucre pèse environ 5 g.", docs: [
        { type: "table", titre: "Sucres par portion", cols: ["Produit", "Portion", "Sucres"], rows: [["Eau", "1 verre", "0 g"], ["Yaourt sucré", "1 pot", "15 g"], ["Jus de fruits industriel", "1 verre (20 cL)", "20 g"], ["Soda", "1 canette (33 cL)", "35 g"]] }
      ], questions: [
        { id: "1AC-L9-t1", cap: "I4", pts: 1, type: "num", enonce: "Combien de grammes de sucres contient une canette de soda ?", rep: 35, tol: 0, unite: "g", retour: "Ligne « Soda », colonne « Sucres »." },
        { id: "1AC-L9-t2", cap: "R5", pts: 1, type: "num", enonce: "À combien de morceaux de sucre correspond un pot de yaourt sucré ?", rep: 3, tol: 0, unite: "morceaux", retour: "15 ÷ 5 = 3 morceaux." },
        { id: "1AC-L9-t3", cap: "R2", pts: 1, type: "qcm", enonce: "Quelle boisson faut-il choisir tous les jours ?", options: ["L’eau, car elle n’apporte pas de sucre", "Le soda, car il donne de l’énergie", "Le jus industriel, car il contient des fruits", "Aucune, il ne faut pas boire"], rep: 0, retour: "L’eau est la seule boisson indispensable. Les boissons sucrées doivent rester occasionnelles." },
        { id: "1AC-L9-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque erreur alimentaire à sa conséquence.", gauche: ["Trop de sucre", "Trop de graisses", "Pas assez de fruits et de légumes", "Pas assez de produits laitiers"], droite: ["Carence en vitamines", "Os fragiles, par manque de calcium", "Caries et risque de diabète", "Surpoids"], rep: [2, 3, 0, 1], retour: "Chaque excès et chaque manque a une conséquence sur la santé." },
        { id: "1AC-L9-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Un repas équilibré contient des aliments bâtisseurs, énergétiques et protecteurs.", v: true }, { t: "On peut sauter le petit-déjeuner sans conséquence.", v: false }, { t: "Les fruits et les légumes apportent des vitamines.", v: true }, { t: "Les boissons sucrées peuvent remplacer l’eau.", v: false }], retour: "Le petit-déjeuner apporte l’énergie de la matinée ; l’eau reste la boisson de tous les jours." }
      ] }
    ],
    cloture: `<ul><li>Aliments <b>bâtisseurs</b> (protéines, calcium), <b>énergétiques</b> (glucides, lipides), <b>protecteurs</b> (vitamines, sels minéraux, fibres).</li><li>Un repas <b>équilibré</b> contient les trois, avec de l’<b>eau</b>.</li><li>Limiter le sucre, le sel et les graisses ; ne pas sauter le petit-déjeuner.</li><li>Les excès et les carences nuisent à la santé.</li><li>Lire les étiquettes : 5 g de sucres = 1 morceau.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 1 ----------
  const tAir = { type: "table", titre: "Composition de l’air inspiré et de l’air expiré", cols: ["Gaz", "Air inspiré", "Air expiré"], rows: [["Dioxygène", "21 %", "16 %"], ["Dioxyde de carbone", "0,03 %", "4 %"], ["Diazote", "78 %", "78 %"]] };
  L.push({
    id: "1AC-L10", u: 1, c: 1, s: 0,
    titre: "Leçon 10 — La respiration et la circulation sanguine",
    objectif: "À la fin de la leçon, je sais expliquer comment le dioxygène de l’air arrive jusqu’aux organes.",
    reussite: ["Je compare l’air inspiré et l’air expiré avec des valeurs.", "Je cite dans l’ordre le trajet de l’air jusqu’aux alvéoles.", "Je donne le rôle du cœur, des artères, des veines et des capillaires."],
    prerequis: {
      html: `<p>Tu sais que respirer, c’est prélever du <b>dioxygène</b> et rejeter du <b>dioxyde de carbone</b> (leçon 4). Chez l’Homme, l’organe respiratoire est le <b>poumon</b>.</p>`,
      quiz: [
        { id: "1AC-L10-a1", cap: "K", pts: 1, type: "qcm", enonce: "En respirant, un être vivant :", options: ["prélève du dioxygène et rejette du dioxyde de carbone", "prélève du dioxyde de carbone et rejette du dioxygène", "prélève de l’eau et rejette du sable", "ne rejette rien"], rep: 0, retour: "C’est la définition de la respiration." },
        { id: "1AC-L10-a2", cap: "K", pts: 1, type: "qcm", enonce: "Quel est l’organe respiratoire de l’Homme ?", options: ["Les poumons", "Les branchies", "Les trachées", "La peau"], rep: 0, retour: "L’Homme prélève le dioxygène dans l’air grâce à ses poumons." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je compare l’air inspiré et l’air expiré", html: `
        <table class="t"><tr><th>Gaz</th><th>Air inspiré</th><th>Air expiré</th></tr><tr><th>Dioxygène</th><td>21 %</td><td>16 %</td></tr><tr><th>Dioxyde de carbone</th><td>0,03 %</td><td>4 %</td></tr><tr><th>Diazote</th><td>78 %</td><td>78 %</td></tr></table>
        <p class="ctx">Je lis <b>ligne par ligne</b> et je rédige avec « alors que ».</p>
        <ul><li>« L’air inspiré contient 21 % de dioxygène, <b>alors que</b> l’air expiré n’en contient que 16 %. » Le corps a <b>gardé</b> du dioxygène.</li>
        <li>« L’air inspiré contient 0,03 % de dioxyde de carbone, alors que l’air expiré en contient 4 %. » Le corps a <b>rejeté</b> du dioxyde de carbone.</li>
        <li>« Le diazote ne change pas. » Le corps ne l’utilise pas.</li></ul>
        <p><b>Le trajet de l’air :</b> nez → trachée → bronches → bronchioles → <b>alvéoles pulmonaires</b>. Les alvéoles sont de minuscules sacs à paroi très fine, entourés de vaisseaux sanguins. C’est là que le dioxygène passe de l’air dans le <b>sang</b>, et que le dioxyde de carbone passe du sang dans l’air.</p>
        <p><b>Attention.</b> On n’expire pas « que du dioxyde de carbone » : l’air expiré contient encore 16 % de dioxygène.</p>` },
      { titre: "Je fais 2 — Je suis le sang", html: `
        <p>Le dioxygène est entré dans le sang. Comment arrive-t-il jusqu’au muscle de la jambe ?</p>
        <table class="t"><tr><th>Organe</th><th>Rôle</th></tr><tr><th>Cœur</th><td>Muscle creux : c’est la pompe qui fait circuler le sang</td></tr><tr><th>Artères</th><td>Elles conduisent le sang du cœur vers les organes</td></tr>
        <tr><th>Capillaires</th><td>Vaisseaux très fins, dans les organes : c’est là que se font les échanges</td></tr><tr><th>Veines</th><td>Elles ramènent le sang des organes vers le cœur</td></tr></table>
        <p>« Le sang quitte les poumons, riche en dioxygène. Il passe par le cœur, qui l’envoie dans les artères. Dans les capillaires du muscle, il donne du dioxygène et des nutriments, et il reçoit le dioxyde de carbone. Il revient au cœur par les veines, puis retourne aux poumons. »</p>
        <p class="def">Les organes utilisent le <b>dioxygène</b> et les <b>nutriments</b> apportés par le sang pour produire l’<b>énergie</b> dont ils ont besoin.</p>
        <p><b>Erreur fréquente</b> : le sang n’est jamais bleu. Il est rouge vif quand il est riche en dioxygène, rouge sombre quand il en contient moins.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Le sang qui traverse un muscle", contexte: "On mesure les gaz contenus dans 100 mL de sang, à l’entrée et à la sortie d’un muscle.", docs: [
        { type: "table", titre: "Gaz transportés par 100 mL de sang", cols: ["Gaz", "Sang qui entre dans le muscle", "Sang qui sort du muscle"], rows: [["Dioxygène", "20 mL", "15 mL"], ["Dioxyde de carbone", "49 mL", "53 mL"]] }
      ], questions: [
        { id: "1AC-L10-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle quantité de dioxygène contient le sang qui sort du muscle ?", rep: 15, tol: 0, unite: "mL", retour: "Ligne « Dioxygène », colonne « Sang qui sort du muscle »." },
        { id: "1AC-L10-g2", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "Le sang qui entre dans le muscle contient {0} mL de dioxygène, alors que le sang qui en sort n’en contient que {1} mL : le muscle a {2} du dioxygène.", choix: [["20", "15", "49"], ["15", "20", "53"], ["prélevé", "rejeté", "fabriqué"]], rep: [0, 0, 0], retour: "La quantité diminue en traversant le muscle : le muscle a prélevé 5 mL de dioxygène." },
        { id: "1AC-L10-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Le dioxyde de carbone passe de 49 mL à 53 mL. Que peut-on en déduire ?", options: ["Le muscle rejette du dioxyde de carbone dans le sang", "Le muscle prélève du dioxyde de carbone", "Le sang fabrique du dioxyde de carbone", "Le muscle ne fait aucun échange"], rep: 0, retour: "La quantité augmente à la sortie : le dioxyde de carbone vient du muscle." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — De l’air aux organes", contexte: "Utilise le tableau pour répondre.", docs: [tAir], questions: [
        { id: "1AC-L10-t1", cap: "I4", pts: 1, type: "num", enonce: "Quel est le pourcentage de dioxygène dans l’air expiré ?", rep: 16, tol: 0, unite: "%", retour: "Ligne « Dioxygène », colonne « Air expiré »." },
        { id: "1AC-L10-t2", cap: "R2", pts: 1, type: "qcm", enonce: "Le pourcentage de diazote est le même dans l’air inspiré et dans l’air expiré. Que peut-on en déduire ?", options: ["Le corps n’utilise pas le diazote", "Le corps fabrique du diazote", "Le diazote remplace le dioxygène", "Le corps garde tout le diazote"], rep: 0, retour: "Ce qui entre ressort en même quantité : ce gaz n’est ni gardé ni produit." },
        { id: "1AC-L10-t3", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre le trajet de l’air inspiré.", items: ["Nez", "Trachée", "Bronches", "Bronchioles", "Alvéoles pulmonaires"], retour: "L’air descend dans des conduits de plus en plus fins, jusqu’aux alvéoles." },
        { id: "1AC-L10-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque organe à son rôle.", gauche: ["Les artères", "Les veines", "Les capillaires", "Le cœur"], droite: ["Ramènent le sang des organes vers le cœur", "Pompe qui fait circuler le sang", "Conduisent le sang du cœur vers les organes", "Vaisseaux très fins où se font les échanges"], rep: [2, 0, 3, 1], retour: "Artères : du cœur aux organes. Veines : des organes au cœur. Capillaires : échanges. Cœur : pompe." },
        { id: "1AC-L10-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "L’air expiré ne contient plus de dioxygène.", v: false }, { t: "Les échanges entre l’air et le sang se font dans les alvéoles pulmonaires.", v: true }, { t: "Le sang transporte le dioxygène jusqu’aux organes.", v: true }, { t: "Les organes rejettent du dioxyde de carbone dans le sang.", v: true }], retour: "L’air expiré contient encore 16 % de dioxygène." }
      ] }
    ],
    cloture: `<ul><li>L’air expiré contient <b>moins de dioxygène</b> (16 % au lieu de 21 %) et <b>plus de dioxyde de carbone</b> (4 % au lieu de 0,03 %) que l’air inspiré.</li><li>Trajet de l’air : nez → trachée → bronches → bronchioles → <b>alvéoles</b>, où se font les échanges avec le sang.</li><li>Le <b>cœur</b> pompe le sang ; les <b>artères</b> l’emmènent aux organes, les <b>veines</b> le ramènent, les <b>capillaires</b> permettent les échanges.</li><li>Les organes utilisent le dioxygène et les nutriments pour produire de l’énergie.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 2 ----------
  const gPouls = {
    type: "graph", titre: "Fréquence cardiaque de deux élèves avant, pendant et après une course", xlab: "Temps (min)", ylab: "Battements par minute", xmax: 12, ymax: 180,
    series: [{ nom: "Élève entraîné", pts: [[0, 65], [2, 65], [4, 110], [6, 125], [8, 80], [10, 65], [12, 65]] }, { nom: "Élève non entraîné", pts: [[0, 80], [2, 80], [4, 135], [6, 160], [8, 125], [10, 95], [12, 80]] }],
    marques: [{ x: 2, label: "Début de la course" }, { x: 6, label: "Fin de la course" }]
  };
  L.push({
    id: "1AC-L11", u: 1, c: 1, s: 1,
    titre: "Leçon 11 — L’exercice physique et la santé des appareils respiratoire et circulatoire",
    objectif: "À la fin de la leçon, je sais expliquer pourquoi le cœur et la respiration s’accélèrent pendant l’effort et citer ce qui protège ou abîme ces deux appareils.",
    reussite: ["Je lis une courbe en trois parties : repos, effort, récupération.", "J’explique l’accélération du cœur par les besoins des muscles.", "Je cite deux habitudes bonnes pour le cœur et les poumons, et deux dangers."],
    prerequis: {
      html: `<p>Le <b>sang</b> apporte aux organes le dioxygène et les nutriments (leçon 10). La <b>fréquence cardiaque</b> est le nombre de battements du cœur en une minute : on la mesure en prenant le pouls.</p>`,
      quiz: [
        { id: "1AC-L11-a1", cap: "K", pts: 1, type: "qcm", enonce: "Qu’apporte le sang aux muscles ?", options: ["Du dioxygène et des nutriments", "Du dioxyde de carbone", "De l’air", "Des aliments non digérés"], rep: 0, retour: "Avec le dioxygène et les nutriments, le muscle produit son énergie." },
        { id: "1AC-L11-a2", cap: "K", pts: 1, type: "qcm", enonce: "Quand on prend son pouls, on compte :", options: ["les battements du cœur", "les mouvements respiratoires", "les pas", "les clignements des yeux"], rep: 0, retour: "Chaque battement du cœur envoie une onde de sang que l’on sent au poignet." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je lis une courbe en trois parties", html: `
        <p class="ctx">Un élève court pendant 4 minutes. On a mesuré sa fréquence cardiaque : 70 battements par minute au repos, 140 à la fin de la course, de nouveau 70 quatre minutes après l’arrêt.</p>
        <ol><li><b>Je repère les trois moments</b> : avant la course (repos), pendant la course (effort), après la course (récupération).</li>
        <li><b>Je décris chaque moment avec le sens et deux valeurs.</b> « Au repos, la fréquence cardiaque est constante : 70 battements par minute. Pendant l’effort, elle augmente de 70 à 140. Pendant la récupération, elle diminue de 140 à 70. »</li>
        <li><b>J’explique.</b> « Pendant l’effort, les muscles travaillent davantage : ils ont besoin de plus de dioxygène et de plus de nutriments. Le cœur bat plus vite pour leur envoyer plus de sang. La respiration s’accélère aussi, pour faire entrer plus de dioxygène. »</li></ol>
        <table class="t"><tr><th></th><th>Au repos</th><th>Pendant l’effort</th></tr><tr><th>Fréquence cardiaque</th><td>70 battements par minute</td><td>140 battements par minute</td></tr><tr><th>Fréquence respiratoire</th><td>16 mouvements par minute</td><td>40 mouvements par minute</td></tr></table>
        <p><b>Attention.</b> Un cœur qui s’accélère pendant l’effort n’est pas un cœur malade : c’est une adaptation normale.</p>` },
      { titre: "Je fais 2 — Ce qui protège, ce qui abîme", html: `
        <p><b>L’activité physique régulière</b> muscle le cœur : il envoie plus de sang à chaque battement. Chez une personne entraînée, il bat donc <b>moins vite au repos</b> et il <b>récupère plus vite</b> après l’effort. Les poumons se remplissent mieux. Il est recommandé aux enfants et aux adolescents de bouger au moins <b>60 minutes par jour</b>.</p>
        <table class="t"><tr><th>Danger</th><th>Effet</th></tr>
        <tr><th>Tabac</th><td>Les goudrons encrassent les poumons ; le monoxyde de carbone prend la place du dioxygène dans le sang ; la nicotine rend dépendant</td></tr>
        <tr><th>Sédentarité (rester assis)</th><td>Le cœur s’affaiblit ; le surpoids s’installe</td></tr><tr><th>Air pollué</th><td>Il irrite les voies respiratoires</td></tr></table>
        <p>Avant un effort, on s’<b>échauffe</b> ; pendant et après, on <b>boit de l’eau</b>.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Deux élèves, une même course", contexte: "Deux élèves font la même course de 4 minutes. L’un s’entraîne trois fois par semaine, l’autre ne fait pas de sport.", docs: [gPouls], questions: [
        { id: "1AC-L11-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la fréquence cardiaque de l’élève non entraîné à la fin de la course (6 minutes) ?", rep: 160, tol: 4, unite: "battements par minute", retour: "On part de 6 sur l’axe du temps, on monte jusqu’à la courbe de l’élève non entraîné, on lit à gauche : 160." },
        { id: "1AC-L11-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Pendant la course (de 2 à 6 minutes), la fréquence cardiaque de l’élève entraîné :", options: ["augmente de 65 à 125 battements par minute", "diminue de 125 à 65 battements par minute", "reste à 65 battements par minute", "augmente de 80 à 160 battements par minute"], rep: 0, retour: "On lit la courbe de l’élève entraîné : 65 au début de la course, 125 à la fin." },
        { id: "1AC-L11-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Lequel des deux récupère le plus vite ?", options: ["L’élève entraîné : il retrouve sa fréquence de repos 4 minutes après la course, alors que l’autre met 6 minutes", "L’élève non entraîné : son cœur bat plus vite", "Les deux récupèrent en même temps", "Aucun des deux ne récupère"], rep: 0, retour: "L’élève entraîné revient à 65 à 10 minutes ; l’élève non entraîné ne revient à 80 qu’à 12 minutes." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Les mesures de Salma", contexte: "Salma a compté ses battements cardiaques et ses mouvements respiratoires au repos, puis juste après avoir monté quatre étages en courant.", docs: [
        { type: "table", titre: "Mesures de Salma", cols: ["", "Au repos", "Après l’effort"], rows: [["Fréquence cardiaque (battements par minute)", "72", "150"], ["Fréquence respiratoire (mouvements par minute)", "18", "42"]] }
      ], questions: [
        { id: "1AC-L11-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la fréquence respiratoire de Salma après l’effort ?", rep: 42, tol: 0, unite: "mouvements par minute", retour: "Ligne « Fréquence respiratoire », colonne « Après l’effort »." },
        { id: "1AC-L11-t2", cap: "C1", pts: 1, type: "trous", enonce: "Complète la comparaison.", texte: "Au repos, le cœur de Salma bat {0} fois par minute, alors qu’après l’effort il bat {1} fois par minute : la fréquence cardiaque a {2}.", choix: [["72", "18", "150"], ["150", "42", "72"], ["augmenté", "diminué", "disparu"]], rep: [0, 0, 0], retour: "On lit la première ligne du tableau, puis on indique le sens de variation." },
        { id: "1AC-L11-t3", cap: "R1", pts: 1, type: "qcm", enonce: "Pourquoi le cœur bat-il plus vite pendant l’effort ?", options: ["Les muscles ont besoin de plus de dioxygène et de nutriments : le cœur leur envoie plus de sang", "Le cœur est fatigué", "Les muscles n’ont plus besoin de sang", "Les poumons s’arrêtent"], rep: 0, retour: "Plus un muscle travaille, plus il consomme de dioxygène et de nutriments." },
        { id: "1AC-L11-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque habitude à son effet.", gauche: ["Fumer", "Faire du sport régulièrement", "Rester assis toute la journée", "Respirer un air pollué"], droite: ["Renforce le cœur et améliore la récupération", "Irrite les voies respiratoires", "Encrasse les poumons et réduit le dioxygène transporté par le sang", "Affaiblit le cœur et favorise le surpoids"], rep: [2, 0, 3, 1], retour: "Le sport protège ; le tabac, la sédentarité et la pollution abîment." },
        { id: "1AC-L11-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Pendant l’effort, la fréquence respiratoire augmente.", v: true }, { t: "Un cœur entraîné bat plus vite au repos.", v: false }, { t: "Il est conseillé aux adolescents de bouger au moins 60 minutes par jour.", v: true }, { t: "Fumer n’a aucun effet sur la respiration.", v: false }], retour: "Un cœur entraîné bat moins vite au repos, car il envoie plus de sang à chaque battement." }
      ] }
    ],
    cloture: `<ul><li>Pendant l’effort, les <b>fréquences cardiaque et respiratoire augmentent</b> : les muscles reçoivent plus de dioxygène et de nutriments.</li><li>Après l’effort, elles reviennent à leur valeur de repos : c’est la <b>récupération</b>.</li><li>L’<b>activité physique régulière</b> renforce le cœur : il bat moins vite au repos et récupère plus vite.</li><li>Le <b>tabac</b>, la <b>sédentarité</b> et la <b>pollution</b> abîment le cœur et les poumons.</li></ul>`
  });
})();
