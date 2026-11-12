// 3AC — Thème 1, chapitres 3, 4 et 5 : la respiration, le sang et la circulation sanguine, l'excrétion urinaire.
// Enseignement explicite : ouverture, je fais, nous faisons, tu fais, je retiens.
(function () {
  const { qcm, vf, assoc, ordre, num, trous, table, graph, lecon } = window.SVT.mk;
  const L = (n, pos, o) => lecon("3AC", n, pos, o);

  // ---------- Chapitre 3, séquence 1 ----------
  const tAirs = table("Composition de l’air inspiré et de l’air expiré", ["Gaz", "Air inspiré", "Air expiré"], [["Dioxygène", "21 %", "16 %"], ["Dioxyde de carbone", "0,03 %", "4,5 %"], ["Diazote", "79 %", "79 %"]]);
  const tSangPoumon = table("Gaz contenus dans 100 mL de sang, de part et d’autre des poumons", ["Gaz", "Sang qui arrive aux poumons", "Sang qui quitte les poumons"], [["Dioxygène", "15 mL", "20 mL"], ["Dioxyde de carbone", "53 mL", "49 mL"]]);
  L(9, [0, 2, 0], {
    titre: "Les échanges gazeux respiratoires au niveau des poumons",
    objectif: "À la fin de la leçon, je sais décrire les échanges gazeux entre l’air des alvéoles et le sang, et expliquer pourquoi l’alvéole est une surface d’échange efficace.",
    reussite: ["Je compare l’air inspiré et l’air expiré, puis le sang entrant et le sang sortant.", "Je décris le trajet de l’air jusqu’aux alvéoles.", "Je cite les caractères qui facilitent les échanges au niveau de l’alvéole."],
    pre: [`<p>La paroi de l’intestin grêle est une <b>surface d’échange</b> : grande, fine, très irriguée (leçon 4). Les poumons en sont une autre, pour les gaz.</p>`, [
      qcm("K", "Quels sont les trois caractères d’une surface d’échange ?", ["Grande surface, paroi fine, riche irrigation sanguine", "Petite surface, paroi épaisse", "Paroi épaisse et sèche", "Absence de vaisseaux"], "On les retrouve dans l’intestin grêle et dans les poumons."),
      qcm("K", "Quel gaz trouble l’eau de chaux ?", ["Le dioxyde de carbone", "Le dioxygène", "Le diazote", "La vapeur d’eau"], "On s’en sert pour montrer que l’air expiré en contient davantage.")]],
    mod: [["Je fais 1 — Je compare les airs, puis les sangs", `
        <table class="t"><tr><th>Gaz</th><th>Air inspiré</th><th>Air expiré</th></tr><tr><th>Dioxygène</th><td>21 %</td><td>16 %</td></tr><tr><th>Dioxyde de carbone</th><td>0,03 %</td><td>4,5 %</td></tr><tr><th>Diazote</th><td>79 %</td><td>79 %</td></tr></table>
        <p>« L’air inspiré contient 21 % de dioxygène, <b>alors que</b> l’air expiré n’en contient que 16 % : de l’oxygène est resté dans le corps. Pour le dioxyde de carbone, c’est l’inverse : 0,03 %, puis 4,5 %. »</p>
        <p>Où sont allés ces gaz ? Je compare le sang avant et après les poumons.</p>
        <table class="t"><tr><th>Dans 100 mL de sang</th><th>Sang qui arrive</th><th>Sang qui repart</th></tr><tr><th>Dioxygène</th><td>15 mL</td><td>20 mL</td></tr><tr><th>Dioxyde de carbone</th><td>53 mL</td><td>49 mL</td></tr></table>
        <p>« Le sang gagne 5 mL de dioxygène et perd 4 mL de dioxyde de carbone. Je relie les deux tableaux : le dioxygène passe de l’<b>air vers le sang</b> ; le dioxyde de carbone passe du <b>sang vers l’air</b>. »</p>
        <p class="def">Ces <b>échanges gazeux respiratoires</b> se font au niveau des <b>alvéoles pulmonaires</b>.</p>`],
      ["Je fais 2 — J’explique l’efficacité de l’alvéole", `
        <p><b>Trajet de l’air</b> : fosses nasales → pharynx → larynx → trachée → bronches → bronchioles → alvéoles.</p>
        <p><b>Mouvements respiratoires.</b> À l’<b>inspiration</b>, le diaphragme se contracte et s’abaisse, les côtes se soulèvent : le volume de la cage thoracique augmente, l’air entre. À l’<b>expiration</b>, c’est l’inverse.</p>
        <p>« Je cherche dans l’alvéole les trois caractères d’une surface d’échange. »</p>
        <ol><li><b>Grande surface</b> : environ 700 millions d’alvéoles, soit près de 100 m² au total.</li>
        <li><b>Paroi très fine</b> : une seule couche de cellules.</li>
        <li><b>Riche irrigation</b> : chaque alvéole est entourée d’un réseau de capillaires sanguins.</li></ol>
        <p>Les gaz traversent par <b>diffusion</b> : chacun va du milieu où il est le plus concentré vers celui où il l’est le moins.</p>
        <p><b>Erreur fréquente</b> : l’air expiré n’est pas « du dioxyde de carbone ». Il contient encore 16 % de dioxygène.</p>`]],
    gui: { titre: "Nous faisons — Le sang qui traverse les poumons", ctx: "On dose les gaz du sang à l’entrée et à la sortie des poumons.", docs: [tSangPoumon], q: [
      num("I4", "Quelle quantité de dioxygène contiennent 100 mL de sang qui quitte les poumons ?", 20, "mL", "Ligne « Dioxygène », dernière colonne."),
      num("R5", "Quelle quantité de dioxygène 100 mL de sang ont-ils gagnée en traversant les poumons ?", 5, "mL", "20 − 15 = 5 mL."),
      qcm("R2", "Le dioxyde de carbone passe de 53 mL à 49 mL. Que peut-on en déduire ?", ["Le sang cède du dioxyde de carbone à l’air des alvéoles", "Le sang prélève du dioxyde de carbone dans l’air", "Les poumons fabriquent du dioxyde de carbone", "Il n’y a aucun échange"], "La quantité diminue dans le sang : le gaz est passé dans l’air, qui sera expiré.")] },
    aut: { titre: "Tu fais — De l’air aux alvéoles", ctx: "Utilise le tableau pour répondre.", docs: [tAirs], q: [
      qcm("I4", "Quel est le pourcentage de dioxyde de carbone dans l’air expiré ?", ["4,5 %", "0,03 %", "16 %", "21 %"], "Ligne « Dioxyde de carbone », colonne « Air expiré »."),
      trous("C1", "Complète la comparaison.", "L’air inspiré contient {0} de dioxygène, alors que l’air expiré n’en contient que {1} : une partie du dioxygène est passée dans le {2}.", [["21 %", "16 %", "79 %"], ["16 %", "21 %", "4,5 %"], ["sang", "diazote", "diaphragme"]], "Première ligne du tableau, puis conclusion."),
      ordre("K", "Remets dans l’ordre le trajet de l’air inspiré.", ["Fosses nasales", "Trachée", "Bronches", "Bronchioles", "Alvéoles pulmonaires"], "Des conduits de plus en plus fins, jusqu’aux alvéoles."),
      qcm("R1", "Pourquoi les alvéoles permettent-elles des échanges efficaces ?", ["Elles offrent une grande surface, leur paroi est très fine et elles sont très irriguées", "Elles sont peu nombreuses", "Leur paroi est épaisse", "Elles ne contiennent pas de vaisseaux"], "Les trois caractères d’une surface d’échange."),
      vf([["À l’inspiration, le diaphragme s’abaisse.", true], ["L’air expiré ne contient plus de dioxygène.", false], ["Le diazote n’est pas utilisé par l’organisme.", true], ["Le dioxyde de carbone passe de l’air vers le sang.", false]], "Le diazote reste à 79 % ; le dioxyde de carbone passe du sang vers l’air.")] },
    clo: `<ul><li>L’air expiré est plus pauvre en dioxygène (16 % au lieu de 21 %) et plus riche en dioxyde de carbone (4,5 % au lieu de 0,03 %).</li><li>Au niveau des <b>alvéoles</b> : le dioxygène passe de l’air vers le sang, le dioxyde de carbone du sang vers l’air.</li><li>L’alvéole est une <b>surface d’échange</b> : grande surface, paroi fine, riche irrigation ; les gaz passent par diffusion.</li><li>Inspiration : le diaphragme s’abaisse, la cage thoracique augmente de volume.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 2 ----------
  const tMuscle = table("Échanges d’un kilogramme de muscle en une heure (valeurs arrondies)", ["", "Muscle au repos", "Muscle en activité"], [["Dioxygène consommé", "0,3 L", "5,2 L"], ["Dioxyde de carbone rejeté", "0,2 L", "6 L"], ["Glucose consommé", "2 g", "8,4 g"]]);
  const tSangMuscle = table("Composition de 100 mL de sang, de part et d’autre d’un muscle au repos", ["", "Sang qui entre dans le muscle", "Sang qui sort du muscle"], [["Dioxygène", "20 mL", "15 mL"], ["Dioxyde de carbone", "49 mL", "53 mL"], ["Glucose", "90 mg", "87 mg"]]);
  L(10, [0, 2, 1], {
    titre: "Les échanges respiratoires au niveau des organes et l’importance de la respiration",
    objectif: "À la fin de la leçon, je sais expliquer ce que les organes font du dioxygène et pourquoi la respiration est indispensable.",
    reussite: ["Je décris les échanges entre le sang et un organe.", "Je compare un muscle au repos et un muscle en activité.", "J’écris le bilan de la respiration cellulaire."],
    pre: [`<p>Au niveau des alvéoles, le sang s’est chargé en <b>dioxygène</b> (leçon 9). Le sang transporte aussi le <b>glucose</b> absorbé par l’intestin (leçon 4).</p>`, [
      qcm("K", "Où le sang se charge-t-il en dioxygène ?", ["Au niveau des alvéoles pulmonaires", "Dans l’estomac", "Dans les muscles", "Dans les reins"], "C’est le résultat des échanges gazeux pulmonaires."),
      qcm("K", "Quel nutriment provient de la digestion de l’amidon ?", ["Le glucose", "Les acides aminés", "Le glycérol", "L’urée"], "Amidon → maltose → glucose.")]],
    mod: [["Je fais 1 — Je décris les échanges entre le sang et un muscle", `
        <table class="t"><tr><th>Dans 100 mL de sang</th><th>Sang qui entre</th><th>Sang qui sort</th></tr><tr><th>Dioxygène</th><td>20 mL</td><td>15 mL</td></tr><tr><th>Dioxyde de carbone</th><td>49 mL</td><td>53 mL</td></tr><tr><th>Glucose</th><td>90 mg</td><td>87 mg</td></tr></table>
        <p class="ctx">Je lis ligne par ligne, et pour chaque ligne je dis ce que fait le muscle.</p>
        <ul><li>« Dioxygène : 20, puis 15. Le muscle en a <b>prélevé</b>. »</li><li>« Glucose : 90, puis 87. Le muscle en a <b>prélevé</b>. »</li><li>« Dioxyde de carbone : 49, puis 53. Le muscle en a <b>rejeté</b>. »</li></ul>
        <p>Tous les organes font de même. Le dioxygène est transporté par l’<b>hémoglobine</b> des globules rouges.</p>`],
      ["Je fais 2 — J’explique à quoi servent ces échanges", `
        <table class="t"><tr><th>Pour 1 kg de muscle, en 1 heure</th><th>Au repos</th><th>En activité</th></tr><tr><th>Dioxygène consommé</th><td>0,3 L</td><td>5,2 L</td></tr><tr><th>Glucose consommé</th><td>2 g</td><td>8,4 g</td></tr></table>
        <p>« En activité, le muscle consomme 5,2 L de dioxygène, alors qu’au repos il n’en consomme que 0,3 L. Il consomme aussi plus de glucose. Or un muscle en activité a besoin de beaucoup plus d’<b>énergie</b>. Je relie : plus le muscle a besoin d’énergie, plus il consomme de dioxygène et de glucose. »</p>
        <p class="def"><b>Respiration cellulaire</b> : dans les cellules, le glucose est dégradé en présence de dioxygène ; cette réaction libère de l’<b>énergie</b> et produit du dioxyde de carbone et de l’eau.</p>
        <p class="eq">Glucose + dioxygène → dioxyde de carbone + eau + énergie</p>
        <p>L’énergie sert au mouvement, au fonctionnement des organes et au maintien de la température du corps (37 °C).</p>
        <p><b>Erreur fréquente</b> : croire que l’on respire « avec les poumons » seulement. Les poumons assurent les échanges ; la respiration qui libère l’énergie a lieu dans <b>toutes les cellules</b>.</p>`]],
    gui: { titre: "Nous faisons — Repos et activité", ctx: "On mesure les échanges d’un muscle au repos, puis en activité.", docs: [tMuscle], q: [
      num("I4", "Quelle quantité de dioxygène un kilogramme de muscle en activité consomme-t-il en une heure ?", 5.2, "L", "Ligne « Dioxygène consommé », dernière colonne."),
      trous("C1", "Complète la comparaison.", "Au repos, le muscle consomme {0} g de glucose par heure, alors qu’en activité il en consomme {1} g : sa consommation a {2}.", [["2", "8,4", "0,3"], ["8,4", "2", "6"], ["augmenté", "diminué", "cessé"]], "Dernière ligne du tableau."),
      qcm("R1", "Pourquoi le muscle en activité consomme-t-il davantage de dioxygène et de glucose ?", ["Il a besoin de plus d’énergie, libérée par la dégradation du glucose en présence de dioxygène", "Il stocke le dioxygène pour plus tard", "Il fabrique du glucose", "Il respire moins"], "C’est la respiration cellulaire qui fournit l’énergie de la contraction.")] },
    aut: { titre: "Tu fais — Le sang autour d’un muscle", ctx: "Utilise le tableau pour répondre.", docs: [tSangMuscle], q: [
      num("I4", "Quelle quantité de dioxyde de carbone contiennent 100 mL de sang qui sort du muscle ?", 53, "mL", "Ligne « Dioxyde de carbone », dernière colonne."),
      num("R5", "Quelle quantité de dioxygène le muscle a-t-il prélevée dans 100 mL de sang ?", 5, "mL", "20 − 15 = 5 mL."),
      assoc("R2", "Que fait le muscle pour chaque substance ?", ["Le dioxygène", "Le dioxyde de carbone", "Le glucose"], ["Il la rejette dans le sang", "Il la prélève dans le sang"], [1, 0, 1], "Ce qui diminue dans le sang a été prélevé ; ce qui augmente a été rejeté."),
      trous("K", "Complète le bilan de la respiration cellulaire.", "Glucose + {0} → {1} + eau + {2}", [["dioxygène", "dioxyde de carbone", "diazote"], ["dioxyde de carbone", "dioxygène", "glucose"], ["énergie", "amidon", "urée"]], "Le glucose est dégradé en présence de dioxygène ; l’énergie est libérée."),
      vf([["La respiration cellulaire a lieu dans toutes les cellules du corps.", true], ["L’énergie libérée sert notamment à maintenir la température du corps.", true], ["Un muscle au repos ne consomme pas de dioxygène.", false], ["Le dioxygène est transporté par l’hémoglobine.", true]], "Même au repos, les cellules ont besoin d’énergie.")] },
    clo: `<ul><li>Les organes <b>prélèvent</b> dans le sang du dioxygène et du glucose, et y <b>rejettent</b> du dioxyde de carbone.</li><li><b>Respiration cellulaire</b> : glucose + dioxygène → dioxyde de carbone + eau + énergie.</li><li>Plus un organe est actif, plus il consomme de dioxygène et de glucose.</li><li>L’énergie sert au mouvement, au fonctionnement des organes et à la température du corps.</li></ul>`
  });

  // ---------- Chapitre 3, séquence 3 ----------
  const tTabac = table("Décès par cancer du poumon chez des hommes, selon leur consommation de tabac (étude britannique de Doll et Hill)", ["Consommation quotidienne", "Non-fumeurs", "1 à 14 cigarettes", "15 à 24 cigarettes", "25 cigarettes et plus"], [["Décès par an, pour 100 000 hommes", "7", "57", "139", "227"]]);
  L(11, [0, 2, 2], {
    titre: "L’hygiène de l’appareil respiratoire",
    objectif: "À la fin de la leçon, je sais expliquer les dangers du tabac et de la pollution pour l’appareil respiratoire et proposer des mesures de protection.",
    reussite: ["J’associe chaque substance de la fumée à son effet.", "Je tire d’un tableau la relation entre la consommation de tabac et le risque.", "Je cite quatre règles d’hygiène respiratoire."],
    pre: [`<p>Les alvéoles pulmonaires sont très fines et très nombreuses (leçon 9). Le dioxygène est transporté par l’<b>hémoglobine</b> (leçon 10). Tout ce qui abîme l’un ou l’autre gêne la respiration.</p>`, [
      qcm("K", "Par quoi le dioxygène est-il transporté dans le sang ?", ["Par l’hémoglobine des globules rouges", "Par les plaquettes", "Par les globules blancs", "Par l’urée"], "C’est elle qui donne sa couleur rouge au sang."),
      qcm("K", "La paroi d’une alvéole est :", ["très fine", "très épaisse", "osseuse", "imperméable aux gaz"], "Une seule couche de cellules.")]],
    mod: [["Je fais 1 — J’associe chaque substance de la fumée à son effet", `
        <p class="ctx">La fumée de cigarette contient des milliers de substances. Pour chacune des principales, je me demande : « Sur quoi agit-elle ? »</p>
        <table class="t"><tr><th>Substance</th><th>Elle agit sur…</th><th>Conséquence</th></tr>
        <tr><td>Goudrons</td><td>Les bronches et les alvéoles, où ils se déposent</td><td>Cancers du poumon, de la gorge</td></tr>
        <tr><td>Monoxyde de carbone</td><td>L’hémoglobine, où il prend la place du dioxygène</td><td>Moins de dioxygène transporté : essoufflement</td></tr>
        <tr><td>Nicotine</td><td>Le système nerveux, le cœur</td><td>Dépendance ; accélération du cœur</td></tr>
        <tr><td>Substances irritantes</td><td>La muqueuse des bronches</td><td>Toux, bronchite chronique</td></tr></table>
        <p>« Un fumeur est essoufflé à l’effort. Quelle substance l’explique le mieux ? Le monoxyde de carbone : il occupe l’hémoglobine, donc le sang apporte moins de dioxygène aux muscles. »</p>
        <p>La fumée touche aussi les personnes qui la respirent sans fumer : c’est le <b>tabagisme passif</b>.</p>`],
      ["Je fais 2 — Je lis une relation dans un tableau, puis je formule des règles", `
        <table class="t"><tr><th>Cigarettes par jour</th><th>0</th><th>1 à 14</th><th>15 à 24</th><th>25 et plus</th></tr><tr><th>Décès par cancer du poumon, pour 100 000 hommes</th><td>7</td><td>57</td><td>139</td><td>227</td></tr></table>
        <p>« Je lis la ligne de gauche à droite : quand le nombre de cigarettes augmente, le nombre de décès augmente. Je compare les extrêmes : 227 décès chez les gros fumeurs, <b>alors que</b> 7 chez les non-fumeurs. Je calcule : 227 ÷ 7 ≈ 32. Le risque est environ 32 fois plus élevé. »</p>
        <p><b>Autres dangers</b> : la pollution de l’air (gaz d’échappement, poussières), les microbes (bacille de la tuberculose, virus de la grippe), les poussières allergisantes (asthme).</p>
        <p><b>Règles d’hygiène :</b></p>
        <ul><li>ne pas fumer et éviter les lieux enfumés ;</li><li>aérer les pièces chaque jour ;</li><li>pratiquer une activité physique, qui développe la capacité respiratoire ;</li><li>respirer par le nez, qui filtre, réchauffe et humidifie l’air ;</li><li>se faire vacciner (BCG contre la tuberculose).</li></ul>`]],
    gui: { titre: "Nous faisons — Tabac et cancer du poumon", ctx: "Une étude a suivi des milliers d’hommes pendant plusieurs années.", docs: [tTabac], q: [
      num("I4", "Combien de décès par cancer du poumon compte-t-on pour 100 000 hommes fumant 15 à 24 cigarettes par jour ?", 139, "", "Colonne « 15 à 24 cigarettes »."),
      qcm("I4", "Comment varie le nombre de décès quand la consommation augmente ?", ["Il augmente : de 7 chez les non-fumeurs à 227 chez les plus gros fumeurs", "Il diminue : de 227 à 7", "Il reste constant", "Il augmente puis diminue"], "On lit la ligne de gauche à droite."),
      qcm("R2", "Que peut-on déduire de ce tableau ?", ["Plus on fume, plus le risque de cancer du poumon est élevé", "Le tabac protège du cancer", "Le cancer ne touche que les fumeurs", "Le nombre de cigarettes n’a pas d’importance"], "Les non-fumeurs ne sont pas totalement épargnés (7), mais le risque croît fortement avec la consommation.")] },
    aut: { titre: "Tu fais — Protéger ses poumons", ctx: "Utilise le tableau et tes connaissances.", docs: [tTabac], q: [
      num("I4", "Combien de décès compte-t-on pour 100 000 non-fumeurs ?", 7, "", "Colonne « Non-fumeurs »."),
      assoc("K", "Associe chaque substance de la fumée à son effet.", ["Les goudrons", "Le monoxyde de carbone", "La nicotine", "Les substances irritantes"], ["Dépendance", "Bronchite chronique", "Cancers", "Diminution du dioxygène transporté par le sang"], [2, 3, 0, 1], "Goudrons : cancers. Monoxyde de carbone : hémoglobine. Nicotine : dépendance. Irritants : bronchite."),
      qcm("R1", "Pourquoi un fumeur est-il plus vite essoufflé pendant un effort ?", ["Le monoxyde de carbone prend la place du dioxygène sur l’hémoglobine", "La nicotine apporte trop de dioxygène", "Les goudrons accélèrent la respiration cellulaire", "La fumée nourrit les muscles"], "Moins de dioxygène arrive aux muscles."),
      qcm("R2", "Un enfant vit avec deux parents qui fument à la maison. Que risque-t-il ?", ["Des bronchites et de l’asthme plus fréquents : c’est le tabagisme passif", "Rien, puisqu’il ne fume pas", "Une meilleure capacité respiratoire", "Une carence en vitamines"], "La fumée respirée par l’entourage contient les mêmes substances."),
      vf([["La nicotine est responsable de la dépendance au tabac.", true], ["Aérer une pièce renouvelle son air.", true], ["Le sport diminue la capacité respiratoire.", false], ["Respirer par le nez réchauffe et filtre l’air.", true]], "L’activité physique développe la capacité respiratoire.")] },
    clo: `<ul><li>Fumée de tabac : <b>goudrons</b> (cancers), <b>monoxyde de carbone</b> (moins de dioxygène transporté), <b>nicotine</b> (dépendance), irritants (bronchite).</li><li>Plus on fume, plus le risque de cancer du poumon est élevé ; le tabagisme passif est dangereux aussi.</li><li>Autres dangers : pollution de l’air, microbes, poussières.</li><li>Protéger ses poumons : ne pas fumer, aérer, faire du sport, respirer par le nez, se faire vacciner.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 1 ----------
  const tCellules = table("Les éléments figurés du sang", ["Élément", "Nombre par mm³ de sang", "Noyau", "Rôle"], [["Globules rouges (hématies)", "5 000 000", "Absent", "Transport du dioxygène"], ["Globules blancs (leucocytes)", "7 000", "Présent", "Défense de l’organisme"], ["Plaquettes", "250 000", "Absent", "Coagulation du sang"]]);
  L(12, [0, 3, 0], {
    titre: "Le sang : sa composition et ses fonctions",
    objectif: "À la fin de la leçon, je sais donner la composition du sang et le rôle de chacun de ses constituants.",
    reussite: ["Je distingue le plasma des éléments figurés.", "Je compare les trois types d’éléments figurés à l’aide d’un tableau.", "J’associe chaque constituant à son rôle."],
    pre: [`<p>Le sang transporte les <b>nutriments</b> absorbés par l’intestin et les <b>gaz respiratoires</b> (leçons 4 et 10). De quoi est-il fait ?</p>`, [
      qcm("K", "Que transporte le sang vers les organes ?", ["Du dioxygène et des nutriments", "De l’air", "Des aliments non digérés", "De l’urine"], "Il en rapporte le dioxyde de carbone et les déchets."),
      qcm("K", "Environ combien de litres de sang contient le corps d’un adulte ?", ["5 litres", "0,5 litre", "20 litres", "50 litres"], "Soit environ un treizième de la masse du corps.")]],
    mod: [["Je fais 1 — Je sépare les constituants du sang", `
        <p class="ctx">Je laisse reposer du sang rendu incoagulable dans un tube : il se sépare en deux parties.</p>
        <ul><li>« En haut, un liquide jaune clair : le <b>plasma</b>, environ 55 % du volume. »</li><li>« En bas, un dépôt rouge : les <b>éléments figurés</b>, environ 45 % du volume. »</li></ul>
        <p>Le <b>plasma</b> est formé surtout d’eau (90 %). Il transporte les nutriments, les sels minéraux, les déchets comme l’<b>urée</b>, une partie du dioxyde de carbone, des hormones et des protéines.</p>
        <p>« J’observe ensuite une goutte de sang étalée sur une lame (un frottis), au microscope. Je vois de très nombreuses cellules roses sans noyau, et quelques cellules plus grosses, à noyau coloré. »</p>`],
      ["Je fais 2 — Je compare les éléments figurés", `
        <table class="t"><tr><th>Élément</th><th>Nombre par mm³</th><th>Noyau</th><th>Rôle</th></tr>
        <tr><th>Globules rouges</th><td>5 000 000</td><td>Absent</td><td>Transport du dioxygène, grâce à l’hémoglobine</td></tr>
        <tr><th>Globules blancs</th><td>7 000</td><td>Présent</td><td>Défense contre les microbes</td></tr>
        <tr><th>Plaquettes</th><td>250 000</td><td>Absent</td><td>Coagulation : elles aident à fermer les blessures</td></tr></table>
        <p>« Je lis la colonne des nombres : les globules rouges sont de très loin les plus nombreux. Je calcule : 5 000 000 ÷ 7 000 ≈ 700. Il y a environ 700 globules rouges pour un globule blanc. »</p>
        <p>Le sang qui coagule forme un <b>caillot</b>, qui retient les cellules. Le liquide jaune qui s’en sépare est le <b>sérum</b> : c’est du plasma privé de sa protéine de coagulation.</p>
        <p class="def">Le sang assure trois fonctions : le <b>transport</b> (gaz, nutriments, déchets), la <b>défense</b> (globules blancs) et la <b>coagulation</b> (plaquettes).</p>
        <p><b>Erreur fréquente</b> : confondre plasma et sérum. Le plasma s’obtient à partir de sang <b>non coagulé</b> ; le sérum, à partir de sang <b>coagulé</b>.</p>`]],
    gui: { titre: "Nous faisons — Les cellules du sang", ctx: "Le tableau résume l’observation d’un frottis sanguin.", docs: [tCellules], q: [
      num("I4", "Combien de plaquettes compte-t-on par mm³ de sang ?", 250000, "", "Ligne « Plaquettes », deuxième colonne."),
      qcm("I4", "Quel élément figuré possède un noyau ?", ["Le globule blanc", "Le globule rouge", "La plaquette", "Aucun"], "Colonne « Noyau » : présent seulement chez les globules blancs."),
      qcm("R2", "Chez une personne, on compte 3 000 000 de globules rouges par mm³. Quelle conséquence peut-on prévoir ?", ["Un transport insuffisant du dioxygène : fatigue, essoufflement", "Une mauvaise coagulation", "Une infection", "Aucune conséquence"], "Les globules rouges transportent le dioxygène : c’est une anémie.")] },
    aut: { titre: "Tu fais — La composition du sang", ctx: "Utilise le tableau pour répondre.", docs: [tCellules], q: [
      num("I4", "Combien de globules blancs compte-t-on par mm³ de sang ?", 7000, "", "Ligne « Globules blancs », deuxième colonne."),
      assoc("K", "Associe chaque constituant du sang à son rôle.", ["Les globules rouges", "Les globules blancs", "Les plaquettes", "Le plasma"], ["Coagulation", "Transport des nutriments et des déchets", "Transport du dioxygène", "Défense de l’organisme"], [2, 3, 0, 1], "Transport des gaz, défense, coagulation, transport des substances dissoutes."),
      ordre("I4", "Classe les éléments figurés du moins nombreux au plus nombreux.", ["Globules blancs", "Plaquettes", "Globules rouges"], "7 000, puis 250 000, puis 5 000 000 par mm³."),
      qcm("R2", "Une personne saigne longtemps à la moindre coupure. Quel élément du sang est probablement en cause ?", ["Les plaquettes, en nombre insuffisant", "Les globules rouges", "Les globules blancs", "L’urée"], "Les plaquettes interviennent dans la coagulation."),
      vf([["Le plasma représente environ 55 % du volume du sang.", true], ["Les globules rouges possèdent un noyau.", false], ["L’hémoglobine se trouve dans les globules rouges.", true], ["Le sérum est obtenu à partir de sang coagulé.", true]], "Les globules rouges de l’Homme n’ont pas de noyau.")] },
    clo: `<ul><li>Le sang = <b>plasma</b> (55 %) + <b>éléments figurés</b> (45 %).</li><li><b>Globules rouges</b> : 5 millions par mm³, sans noyau, transport du dioxygène par l’hémoglobine.</li><li><b>Globules blancs</b> : 7 000 par mm³, avec noyau, défense. <b>Plaquettes</b> : 250 000 par mm³, coagulation.</li><li>Le <b>plasma</b> transporte nutriments, déchets, hormones ; le sérum est du plasma sans la protéine de coagulation.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 2 ----------
  const tVaisseaux = table("Comparaison des trois types de vaisseaux sanguins", ["", "Artère", "Veine", "Capillaire"],
    [["Sens de circulation du sang", "Du cœur vers les organes", "Des organes vers le cœur", "D’une artère vers une veine, dans l’organe"], ["Paroi", "Épaisse et élastique", "Mince, peu élastique", "Très fine : une seule couche de cellules"], ["Pression du sang", "Forte", "Faible", "Faible"], ["Valvules", "Absentes", "Présentes", "Absentes"]]);
  L(13, [0, 3, 1], {
    titre: "L’appareil circulatoire",
    objectif: "À la fin de la leçon, je sais décrire le cœur et les vaisseaux sanguins, et relier la structure de chacun à son rôle.",
    reussite: ["Je nomme les quatre cavités du cœur et le rôle des valvules.", "Je compare artères, veines et capillaires dans un tableau à double entrée.", "Je relie une structure à sa fonction."],
    pre: [`<p>Le sang transporte gaz, nutriments et déchets (leçon 12). Pour remplir ce rôle, il doit <b>circuler</b> : c’est le travail du cœur et des vaisseaux.</p>`, [
      qcm("K", "Quel organe met le sang en mouvement ?", ["Le cœur", "Le poumon", "Le foie", "Le rein"], "C’est un muscle creux."),
      qcm("K", "Où se font les échanges entre le sang et les organes ?", ["Dans des vaisseaux très fins, les capillaires", "Dans le cœur", "Dans les grosses artères", "Dans la trachée"], "Leur paroi très fine laisse passer gaz et nutriments.")]],
    mod: [["Je fais 1 — Je décris le cœur", `
        <p class="ctx">Je décris le cœur de haut en bas, puis de droite à gauche.</p>
        <ul><li>« En haut, deux <b>oreillettes</b>, à paroi mince : elles <b>reçoivent</b> le sang amené par les veines. »</li>
        <li>« En bas, deux <b>ventricules</b>, à paroi épaisse : ils <b>chassent</b> le sang dans les artères. »</li>
        <li>« Une <b>cloison</b> sépare complètement le cœur droit du cœur gauche : les deux sangs ne se mélangent pas. »</li>
        <li>« Entre oreillette et ventricule, et à la sortie des ventricules, des <b>valvules</b> : elles ne s’ouvrent que dans un sens. »</li></ul>
        <table class="t"><tr><th>Cavité</th><th>Vaisseau</th></tr><tr><td>Oreillette droite</td><td>Reçoit les veines caves (sang venu des organes)</td></tr><tr><td>Ventricule droit</td><td>Envoie le sang dans l’artère pulmonaire</td></tr>
        <tr><td>Oreillette gauche</td><td>Reçoit les veines pulmonaires (sang venu des poumons)</td></tr><tr><td>Ventricule gauche</td><td>Envoie le sang dans l’artère aorte</td></tr></table>
        <p>« La paroi du ventricule gauche est la plus épaisse. Je relie à sa fonction : il doit envoyer le sang dans <b>tout le corps</b>. »</p>`],
      ["Je fais 2 — Je relie la structure des vaisseaux à leur rôle", `
        <table class="t"><tr><th></th><th>Artère</th><th>Veine</th><th>Capillaire</th></tr>
        <tr><th>Sens du sang</th><td>Cœur → organes</td><td>Organes → cœur</td><td>Dans l’organe</td></tr><tr><th>Paroi</th><td>Épaisse, élastique</td><td>Mince</td><td>Une seule couche de cellules</td></tr><tr><th>Pression</th><td>Forte</td><td>Faible</td><td>Faible</td></tr></table>
        <p>« Je croise la colonne “Artère” et la ligne “Paroi” : épaisse et élastique. Pourquoi ? Elle reçoit le sang chassé avec force par le ventricule : elle doit résister à une <b>forte pression</b>. »</p>
        <p>« Colonne “Capillaire”, ligne “Paroi” : très fine. Je relie : c’est là que se font les <b>échanges</b> avec les organes. »</p>
        <p>« Dans les veines, la pression est faible. Des <b>valvules</b> empêchent le sang de redescendre. »</p>
        <p><b>Erreur fréquente</b> : définir une artère par la « couleur » du sang. On la définit par le <b>sens</b> : elle part du cœur. L’artère pulmonaire transporte d’ailleurs un sang pauvre en dioxygène.</p>`]],
    gui: { titre: "Nous faisons — Trois types de vaisseaux", ctx: "Le tableau compare les artères, les veines et les capillaires.", docs: [tVaisseaux], q: [
      qcm("I4", "Dans quel type de vaisseau la pression du sang est-elle forte ?", ["L’artère", "La veine", "Le capillaire", "Aucun"], "Ligne « Pression du sang », colonne « Artère »."),
      qcm("I4", "Quel vaisseau possède des valvules ?", ["La veine", "L’artère", "Le capillaire", "Les trois"], "Ligne « Valvules » : présentes seulement dans la veine."),
      qcm("R1", "Pourquoi la paroi des capillaires est-elle très fine ?", ["Elle laisse passer les gaz et les nutriments entre le sang et les organes", "Elle résiste à une forte pression", "Elle empêche tout échange", "Elle pompe le sang"], "Une paroi fine est un caractère de surface d’échange.")] },
    aut: { titre: "Tu fais — Le cœur et les vaisseaux", ctx: "Utilise le tableau et tes connaissances.", docs: [tVaisseaux], q: [
      qcm("I4", "Dans quel sens le sang circule-t-il dans une veine ?", ["Des organes vers le cœur", "Du cœur vers les organes", "Dans les deux sens", "Il ne circule pas"], "Ligne « Sens de circulation », colonne « Veine »."),
      assoc("K", "Associe chaque cavité du cœur au vaisseau qui lui correspond.", ["L’oreillette droite", "Le ventricule droit", "L’oreillette gauche", "Le ventricule gauche"], ["L’artère aorte", "Les veines caves", "L’artère pulmonaire", "Les veines pulmonaires"], [1, 2, 3, 0], "Les oreillettes reçoivent le sang des veines ; les ventricules l’envoient dans les artères."),
      qcm("R1", "Pourquoi la paroi du ventricule gauche est-elle plus épaisse que celle du ventricule droit ?", ["Il envoie le sang dans tout le corps, et non seulement vers les poumons", "Il reçoit plus de sang", "Il contient les valvules", "Il ne se contracte pas"], "Plus le trajet est long, plus la poussée doit être forte."),
      qcm("R2", "Que se passe-t-il si une valvule du cœur ferme mal ?", ["Une partie du sang reflue en arrière : le cœur est moins efficace", "Le sang circule plus vite", "Les deux sangs se mélangent", "Rien"], "Les valvules imposent un sens unique à la circulation."),
      vf([["Une artère conduit le sang du cœur vers les organes.", true], ["Les oreillettes ont une paroi plus épaisse que les ventricules.", false], ["La cloison du cœur sépare le cœur droit du cœur gauche.", true], ["Toutes les artères transportent un sang riche en dioxygène.", false]], "L’artère pulmonaire transporte un sang pauvre en dioxygène ; ce sont les ventricules qui ont une paroi épaisse.")] },
    clo: `<ul><li>Le <b>cœur</b> : deux oreillettes (elles reçoivent le sang) et deux ventricules (ils le chassent), séparés par une cloison ; des <b>valvules</b> imposent un sens unique.</li><li><b>Artères</b> : cœur → organes, paroi épaisse et élastique, forte pression.</li><li><b>Veines</b> : organes → cœur, paroi mince, valvules.</li><li><b>Capillaires</b> : paroi très fine, lieu des échanges.</li></ul>`
  });

  // ---------- Chapitre 4, séquence 3 ----------
  const tDebit = table("Activité du cœur d’un adulte au repos et pendant un effort", ["", "Au repos", "Pendant l’effort"], [["Fréquence cardiaque (battements par minute)", "70", "150"], ["Volume de sang éjecté par un ventricule à chaque battement (mL)", "70", "120"]]);
  L(14, [0, 3, 2], {
    titre: "L’activité du cœur et la circulation sanguine",
    objectif: "À la fin de la leçon, je sais décrire un battement cardiaque, calculer le débit du cœur et suivre le trajet du sang dans la double circulation.",
    reussite: ["Je cite les trois phases d’une révolution cardiaque.", "Je calcule un débit cardiaque.", "Je décris la petite et la grande circulation."],
    pre: [`<p>Le cœur comprend deux oreillettes et deux ventricules ; les artères emmènent le sang vers les organes, les veines le ramènent (leçon 13).</p>`, [
      qcm("K", "Quelle cavité envoie le sang dans l’artère aorte ?", ["Le ventricule gauche", "Le ventricule droit", "L’oreillette gauche", "L’oreillette droite"], "Sa paroi est la plus épaisse."),
      qcm("K", "Quel vaisseau ramène au cœur le sang venu des poumons ?", ["Les veines pulmonaires", "L’artère pulmonaire", "Les veines caves", "L’aorte"], "Elles arrivent à l’oreillette gauche.")]],
    mod: [["Je fais 1 — Je décris un battement et je calcule le débit", `
        <p class="def">Une <b>révolution cardiaque</b> est l’ensemble des événements d’un battement. Elle dure environ 0,8 seconde au repos.</p>
        <table class="t"><tr><th>Phase</th><th>Durée</th><th>Ce qui se passe</th></tr>
        <tr><th>Systole auriculaire</th><td>0,1 s</td><td>Les oreillettes se contractent : le sang passe dans les ventricules</td></tr>
        <tr><th>Systole ventriculaire</th><td>0,3 s</td><td>Les ventricules se contractent : le sang est chassé dans les artères</td></tr>
        <tr><th>Diastole générale</th><td>0,4 s</td><td>Le cœur se relâche et se remplit</td></tr></table>
        <p>« Je vérifie la fréquence : en une minute, soit 60 secondes, le cœur fait 60 ÷ 0,8 = <b>75</b> battements. »</p>
        <p class="def"><b>Débit cardiaque</b> = fréquence cardiaque × volume de sang éjecté à chaque battement.</p>
        <p>« Au repos : 70 battements par minute × 70 mL = 4 900 mL, soit <b>4,9 litres par minute</b>. Tout le sang du corps passe par le cœur en une minute environ. »</p>
        <p><b>Erreur fréquente</b> : oublier de convertir les millilitres en litres (1 L = 1 000 mL).</p>`],
      ["Je fais 2 — Je suis le sang dans la double circulation", `
        <p class="ctx">Je pars du ventricule droit et je suis le sang jusqu’à son retour.</p>
        <p><b>Petite circulation (pulmonaire).</b> « Ventricule droit → artère pulmonaire → <b>poumons</b>, où le sang se charge en dioxygène → veines pulmonaires → oreillette gauche. »</p>
        <p><b>Grande circulation (générale).</b> « Oreillette gauche → ventricule gauche → artère aorte → <b>organes</b>, où le sang cède du dioxygène et se charge en dioxyde de carbone → veines caves → oreillette droite. »</p>
        <p>« Le sang passe donc <b>deux fois</b> par le cœur pour faire un tour complet : c’est la <b>double circulation</b>. »</p>
        <table class="t"><tr><th></th><th>Petite circulation</th><th>Grande circulation</th></tr><tr><th>Départ</th><td>Ventricule droit</td><td>Ventricule gauche</td></tr><tr><th>Passe par</th><td>Les poumons</td><td>Tous les organes</td></tr><tr><th>Arrivée</th><td>Oreillette gauche</td><td>Oreillette droite</td></tr><tr><th>Rôle</th><td>Recharger le sang en dioxygène</td><td>Approvisionner les organes</td></tr></table>`]],
    gui: { titre: "Nous faisons — Le débit du cœur", ctx: "Rappel : débit cardiaque = fréquence cardiaque × volume éjecté à chaque battement.", docs: [tDebit], q: [
      num("I4", "Quelle est la fréquence cardiaque pendant l’effort ?", 150, "battements par minute", "Première ligne, dernière colonne."),
      num("R5", "Quel est le débit cardiaque au repos, en millilitres par minute ?", 4900, "mL/min", "70 × 70 = 4 900 mL par minute."),
      num("R5", "Quel est le débit cardiaque pendant l’effort, en litres par minute ?", 18, "L/min", "150 × 120 = 18 000 mL par minute, soit 18 L par minute.")] },
    aut: { titre: "Tu fais — Le cœur et la double circulation", ctx: "Utilise le tableau et tes connaissances.", docs: [tDebit], q: [
      num("I4", "Quel volume de sang un ventricule éjecte-t-il à chaque battement pendant l’effort ?", 120, "mL", "Deuxième ligne, dernière colonne."),
      qcm("R1", "Pourquoi le débit cardiaque augmente-t-il pendant l’effort ?", ["Les muscles ont besoin de plus de dioxygène et de glucose", "Le cœur est fatigué", "Le sang devient plus épais", "Les poumons s’arrêtent"], "Plus de sang, c’est plus de dioxygène et de nutriments livrés aux muscles."),
      ordre("K", "Remets dans l’ordre le trajet du sang dans la petite circulation.", ["Ventricule droit", "Artère pulmonaire", "Poumons", "Veines pulmonaires", "Oreillette gauche"], "Du cœur droit aux poumons, puis retour au cœur gauche."),
      ordre("K", "Remets dans l’ordre les phases d’une révolution cardiaque.", ["Systole auriculaire", "Systole ventriculaire", "Diastole générale"], "Les oreillettes se contractent, puis les ventricules, puis tout le cœur se relâche."),
      vf([["Le sang passe deux fois par le cœur pour faire un tour complet.", true], ["La grande circulation part du ventricule droit.", false], ["Dans les poumons, le sang se charge en dioxygène.", true], ["Pendant la diastole, le cœur se remplit.", true]], "La grande circulation part du ventricule gauche.")] },
    clo: `<ul><li><b>Révolution cardiaque</b> (0,8 s) : systole auriculaire, systole ventriculaire, diastole générale.</li><li><b>Débit cardiaque</b> = fréquence × volume éjecté ; environ 5 L par minute au repos, bien plus à l’effort.</li><li><b>Petite circulation</b> : ventricule droit → poumons → oreillette gauche.</li><li><b>Grande circulation</b> : ventricule gauche → organes → oreillette droite.</li></ul>`
  });

  // ---------- Chapitre 5, séquence 1 ----------
  const tUrine = table("Composition du plasma et de l’urine d’une personne en bonne santé (en grammes par litre)", ["Constituant", "Plasma", "Urine"], [["Eau", "900", "950"], ["Protides", "80", "0"], ["Lipides", "5", "0"], ["Glucose", "1", "0"], ["Chlorure de sodium (sel)", "7", "10"], ["Urée", "0,3", "20"], ["Acide urique", "0,03", "0,5"], ["Ammoniaque", "0", "0,5"]]);
  L(15, [0, 4, 0], {
    titre: "La composition et l’origine de l’urine",
    objectif: "À la fin de la leçon, je sais comparer la composition du plasma et de l’urine, et en déduire que l’urine provient du sang.",
    reussite: ["Je lis un tableau à double entrée à huit lignes.", "Je classe les constituants en trois groupes.", "Je calcule combien de fois l’urée est plus concentrée dans l’urine."],
    pre: [`<p>Le plasma transporte les <b>déchets</b> produits par les cellules, comme l’<b>urée</b> (leçon 12). Il faut bien qu’ils quittent le corps.</p>`, [
      qcm("K", "Quelle partie du sang transporte l’urée ?", ["Le plasma", "Les globules rouges", "Les plaquettes", "Les globules blancs"], "L’urée y est dissoute."),
      qcm("K", "Quel organe produit l’urine ?", ["Le rein", "Le foie", "L’estomac", "Le poumon"], "Nous en avons deux.")]],
    mod: [["Je fais 1 — Je compare le plasma et l’urine", `
        <p class="ctx">Je compare les deux colonnes ligne par ligne, et je range chaque constituant dans un groupe.</p>
        <table class="t"><tr><th>Constituant (g/L)</th><th>Plasma</th><th>Urine</th></tr><tr><th>Protides</th><td>80</td><td>0</td></tr><tr><th>Glucose</th><td>1</td><td>0</td></tr><tr><th>Urée</th><td>0,3</td><td>20</td></tr><tr><th>Ammoniaque</th><td>0</td><td>0,5</td></tr></table>
        <ul><li><b>Groupe 1 — présents dans le plasma, absents de l’urine</b> : protides, lipides, glucose. « Le rein ne les laisse pas partir : ils sont utiles. »</li>
        <li><b>Groupe 2 — présents dans les deux, plus concentrés dans l’urine</b> : urée, acide urique, sel. « Le rein les concentre pour les éliminer. »</li>
        <li><b>Groupe 3 — absent du plasma, présent dans l’urine</b> : l’ammoniaque. « Le rein le fabrique lui-même. »</li></ul>
        <p>« Je calcule pour l’urée : 20 ÷ 0,3 ≈ 67. L’urée est environ <b>67 fois</b> plus concentrée dans l’urine que dans le plasma. »</p>`],
      ["Je fais 2 — Je conclus sur l’origine de l’urine", `
        <p>« Presque tous les constituants de l’urine se trouvent déjà dans le plasma. Je conclus : l’<b>urine provient du sang</b>. Le rein n’est pas un simple filtre : il <b>retient</b> les substances utiles, <b>concentre</b> les déchets et <b>fabrique</b> l’ammoniaque. »</p>
        <p class="def">L’<b>excrétion urinaire</b> est l’élimination, par l’urine, des déchets transportés par le sang.</p>
        <p><b>L’appareil urinaire</b> comprend deux <b>reins</b>, qui produisent l’urine ; deux <b>uretères</b>, qui la conduisent ; la <b>vessie</b>, qui la stocke ; l’<b>urètre</b>, qui l’évacue. Un adulte produit environ 1,5 litre d’urine par jour.</p>
        <p>« Chez une personne en bonne santé, l’urine ne contient ni glucose ni protides. Si une analyse en trouve, je pense à une maladie : du glucose dans l’urine fait penser au <b>diabète</b>. »</p>`]],
    gui: { titre: "Nous faisons — Plasma et urine", ctx: "On a analysé le plasma et l’urine d’une personne en bonne santé.", docs: [tUrine], q: [
      num("I4", "Quelle est la concentration de l’urée dans l’urine ?", 20, "g/L", "Ligne « Urée », colonne « Urine »."),
      qcm("I4", "Quel constituant du plasma est totalement absent de l’urine ?", ["Le glucose", "L’urée", "Le sel", "L’eau"], "Ligne « Glucose » : 1 g/L dans le plasma, 0 dans l’urine. C’est aussi le cas des protides et des lipides."),
      qcm("R2", "L’urée passe de 0,3 g/L dans le plasma à 20 g/L dans l’urine. Que fait le rein ?", ["Il concentre l’urée dans l’urine pour l’éliminer", "Il fabrique des protides", "Il retient l’urée dans le sang", "Il transforme l’urée en glucose"], "La concentration est multipliée par 67 environ.")] },
    aut: { titre: "Tu fais — Les constituants de l’urine", ctx: "Utilise le tableau pour répondre.", docs: [tUrine], q: [
      num("I4", "Quelle est la concentration des protides dans le plasma ?", 80, "g/L", "Ligne « Protides », colonne « Plasma »."),
      assoc("R2", "Range chaque constituant dans son groupe.", ["Le glucose", "L’urée", "L’ammoniaque", "Les protides", "L’acide urique"], ["Présent dans le plasma, absent de l’urine", "Présent dans les deux, plus concentré dans l’urine", "Absent du plasma, présent dans l’urine"], [0, 1, 2, 0, 1], "On compare, pour chaque ligne, les deux colonnes."),
      qcm("R2", "D’où vient l’ammoniaque de l’urine ?", ["Le rein le fabrique : il est absent du plasma", "Il vient directement du plasma", "Il vient de la vessie", "Il vient des aliments non digérés"], "0 g/L dans le plasma, 0,5 g/L dans l’urine."),
      ordre("K", "Remets dans l’ordre le trajet de l’urine.", ["Rein", "Uretère", "Vessie", "Urètre"], "Production, conduction, stockage, évacuation."),
      vf([["L’urine d’une personne en bonne santé contient du glucose.", false], ["L’urine provient du sang.", true], ["L’urée est un déchet.", true], ["Le rein laisse passer les protides dans l’urine.", false]], "Glucose et protides sont absents d’une urine normale.")] },
    clo: `<ul><li>L’<b>urine provient du sang</b> : presque tous ses constituants existent dans le plasma.</li><li>Le rein <b>retient</b> les substances utiles (glucose, protides, lipides), <b>concentre</b> les déchets (urée, acide urique) et <b>fabrique</b> l’ammoniaque.</li><li>Appareil urinaire : reins → uretères → vessie → urètre.</li><li>Une urine normale ne contient ni glucose ni protides.</li></ul>`
  });

  // ---------- Chapitre 5, séquence 2 ----------
  const tNephron = table("Composition de trois liquides (en grammes par litre) et volume produit par jour", ["", "Plasma", "Urine primitive", "Urine définitive"], [["Protides", "80", "0", "0"], ["Glucose", "1", "1", "0"], ["Urée", "0,3", "0,3", "20"], ["Volume par jour", "—", "180 L", "1,5 L"]]);
  L(16, [0, 4, 1], {
    titre: "La formation de l’urine au niveau des reins",
    objectif: "À la fin de la leçon, je sais expliquer les deux étapes de la formation de l’urine dans le néphron.",
    reussite: ["Je distingue la filtration de la réabsorption.", "Je compare trois liquides dans un tableau à double entrée.", "Je calcule le volume d’eau réabsorbé chaque jour."],
    pre: [`<p>L’urine provient du sang : le rein retient le glucose et les protides, et concentre l’urée (leçon 15). Comment s’y prend-il ?</p>`, [
      qcm("K", "Quel constituant est absent d’une urine normale ?", ["Le glucose", "L’urée", "L’eau", "Le sel"], "Avec les protides et les lipides."),
      qcm("K", "L’urée est environ combien de fois plus concentrée dans l’urine que dans le plasma ?", ["67 fois", "2 fois", "Autant", "1 000 fois"], "20 ÷ 0,3 ≈ 67.")]],
    mod: [["Je fais 1 — Je décris le néphron", `
        <p class="def">Chaque rein contient environ un million de <b>néphrons</b>. Le néphron est l’unité qui fabrique l’urine.</p>
        <p>Un néphron comprend deux parties :</p>
        <ul><li>un <b>glomérule</b> : une pelote de capillaires sanguins, logée dans une capsule ;</li><li>un <b>tube urinifère</b>, long et contourné, entouré lui aussi de capillaires.</li></ul>
        <p>Plusieurs tubes se jettent dans un tube collecteur, qui conduit l’urine vers l’uretère.</p>`],
      ["Je fais 2 — J’explique les deux étapes", `
        <table class="t"><tr><th>g/L</th><th>Plasma</th><th>Urine primitive</th><th>Urine définitive</th></tr><tr><th>Protides</th><td>80</td><td>0</td><td>0</td></tr><tr><th>Glucose</th><td>1</td><td>1</td><td>0</td></tr><tr><th>Urée</th><td>0,3</td><td>0,3</td><td>20</td></tr><tr><th>Volume par jour</th><td>—</td><td>180 L</td><td>1,5 L</td></tr></table>
        <p><b>Étape 1 — la filtration.</b> « Je compare le plasma et l’urine primitive : même glucose, même urée, mais plus de protides. Au niveau du glomérule, le plasma est <b>filtré</b> : l’eau et les petites molécules passent, les grosses molécules (protides) et les cellules restent dans le sang. »</p>
        <p><b>Étape 2 — la réabsorption.</b> « Je compare l’urine primitive et l’urine définitive : le glucose a disparu et le volume est passé de 180 L à 1,5 L. Le long du tube, <b>tout le glucose</b> et presque <b>toute l’eau</b> retournent dans le sang. »</p>
        <p>« Je calcule l’eau réabsorbée : 180 − 1,5 = <b>178,5 L</b> par jour. Comme l’eau repart et que l’urée reste, l’urée se retrouve très concentrée. »</p>
        <p class="def">Le rein <b>épure</b> le sang de ses déchets et maintient constante la composition du milieu intérieur.</p>
        <p><b>Hygiène</b> : boire suffisamment d’eau ; limiter le sel. Quand les reins ne fonctionnent plus, une machine doit filtrer le sang : c’est la <b>dialyse</b>.</p>`]],
    gui: { titre: "Nous faisons — Trois liquides", ctx: "On compare le plasma, l’urine primitive (prélevée à la sortie du glomérule) et l’urine définitive.", docs: [tNephron], q: [
      qcm("I4", "Quelle est la concentration du glucose dans l’urine primitive ?", ["1 g/L", "0 g/L", "20 g/L", "80 g/L"], "Ligne « Glucose », colonne « Urine primitive »."),
      qcm("R2", "Les protides sont présents dans le plasma mais absents de l’urine primitive. Que peut-on en déduire ?", ["Le glomérule filtre le plasma et retient les grosses molécules", "Les protides sont détruits par le rein", "Le glomérule fabrique des protides", "Les protides passent dans l’urine définitive"], "Seules l’eau et les petites molécules traversent le filtre."),
      qcm("R2", "Le glucose est présent dans l’urine primitive mais absent de l’urine définitive. Que s’est-il passé ?", ["Il a été réabsorbé : il est retourné dans le sang le long du tube", "Il a été transformé en urée", "Il est resté dans la vessie", "Il a été filtré une seconde fois"], "La réabsorption récupère les substances utiles.")] },
    aut: { titre: "Tu fais — Le travail du néphron", ctx: "Utilise le tableau pour répondre.", docs: [tNephron], q: [
      qcm("I4", "Quel volume d’urine primitive les reins produisent-ils chaque jour ?", ["180 L", "1,5 L", "20 L", "80 L"], "Dernière ligne, colonne « Urine primitive »."),
      num("R5", "Quel volume d’eau est réabsorbé chaque jour ?", 178.5, "L", "180 − 1,5 = 178,5 L."),
      assoc("K", "Associe chaque étape à son lieu.", ["La filtration du plasma", "La réabsorption de l’eau et du glucose"], ["Le tube urinifère", "Le glomérule"], [1, 0], "Filtration : glomérule. Réabsorption : tube urinifère."),
      qcm("R2", "Chez un malade, l’urine définitive contient du glucose. Quelle étape fonctionne mal, ou est dépassée ?", ["La réabsorption du glucose", "La filtration des protides", "Le stockage dans la vessie", "La digestion"], "Normalement, tout le glucose filtré est réabsorbé. Dans le diabète, il y en a trop dans le sang pour qu’il le soit entièrement."),
      vf([["Chaque rein contient environ un million de néphrons.", true], ["L’urine primitive contient des protides.", false], ["Presque toute l’eau filtrée retourne dans le sang.", true], ["Le rein contribue à maintenir constante la composition du sang.", true]], "Les protides ne traversent pas le filtre du glomérule.")] },
    clo: `<ul><li>Le <b>néphron</b> (un million par rein) = un glomérule + un tube urinifère.</li><li><b>Filtration</b> au niveau du glomérule : le plasma, sans ses protides, donne l’<b>urine primitive</b> (180 L par jour).</li><li><b>Réabsorption</b> le long du tube : tout le glucose et presque toute l’eau retournent dans le sang ; il reste 1,5 L d’<b>urine définitive</b>.</li><li>Le rein épure le sang et maintient constant le milieu intérieur.</li></ul>`
  });
})();
