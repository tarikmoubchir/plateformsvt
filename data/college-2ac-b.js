// 2AC — Thème 2 « Corps humain et santé » : les maladies, le système immunitaire et les aides à l'immunité.
// Même modèle que college.js : enseignement explicite (ouverture, je fais, nous faisons, tu fais, je retiens).
(function () {
  const L = window.SVT.lecons["2AC"];

  // ---------- Chapitre 1, séquence 1 ----------
  L.push({
    id: "2AC-L8", u: 1, c: 0, s: 0,
    titre: "Leçon 8 — Les maladies : causes, modes de transmission et prévention",
    objectif: "À la fin de la leçon, je sais distinguer une maladie infectieuse d’une maladie non infectieuse et associer un mode de transmission au geste de prévention qui convient.",
    reussite: ["Je dis si une maladie est due à un microbe.", "Je nomme son mode de transmission.", "Je propose le geste de prévention adapté."],
    prerequis: {
      html: `<p>Certains êtres vivants sont si petits qu’on ne les voit qu’au microscope : ce sont les <b>microbes</b>. Beaucoup sont utiles (yaourt, pain, décomposition) ; quelques-uns rendent malade.</p>`,
      quiz: [
        { id: "2AC-L8-a1", cap: "K", pts: 1, type: "qcm", enonce: "Pour observer une bactérie, il faut :", options: ["un microscope", "une loupe de poche", "des jumelles", "rien, on la voit à l’œil nu"], rep: 0, retour: "Une bactérie mesure quelques micromètres." },
        { id: "2AC-L8-a2", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Tous les microbes sont dangereux.", v: false }, { t: "Des microbes servent à fabriquer le yaourt.", v: true }], retour: "La plupart des microbes sont inoffensifs ou utiles." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je classe une maladie", html: `
        <p class="ctx">Pour chaque maladie, je me pose deux questions : « Est-elle due à un microbe ? Comment ce microbe passe-t-il d’une personne à l’autre ? »</p>
        <p class="def">Une maladie <b>infectieuse</b> est due à un microbe <b>pathogène</b> (bactérie, virus, champignon ou parasite microscopique) qui entre dans le corps et s’y multiplie. Une maladie <b>non infectieuse</b> n’est pas due à un microbe : elle ne se transmet pas.</p>
        <table class="t"><tr><th>Maladie</th><th>Cause</th><th>Type</th></tr>
        <tr><td>Grippe</td><td>Un virus</td><td>Infectieuse</td></tr><tr><td>Choléra</td><td>Une bactérie</td><td>Infectieuse</td></tr>
        <tr><td>Diabète</td><td>Un mauvais contrôle du sucre dans le sang</td><td>Non infectieuse</td></tr><tr><td>Rachitisme</td><td>Un manque de vitamine D</td><td>Non infectieuse (carence)</td></tr></table>
        <p>« La grippe : y a-t-il un microbe ? Oui, un virus. Elle est infectieuse. Le diabète : y a-t-il un microbe ? Non. Il est non infectieux : on ne peut pas l’attraper au contact d’un malade. »</p>
        <p>Un <b>virus</b> est beaucoup plus petit qu’une <b>bactérie</b> et ne peut se multiplier qu’à l’intérieur d’une cellule.</p>` },
      { titre: "Je fais 2 — Je relie la transmission à la prévention", html: `
        <table class="t"><tr><th>Le microbe passe par…</th><th>Exemples</th><th>Prévention</th></tr>
        <tr><td>L’air (toux, éternuements)</td><td>Grippe, tuberculose</td><td>Se couvrir la bouche, aérer, porter un masque</td></tr>
        <tr><td>L’eau et les aliments souillés</td><td>Choléra, typhoïde</td><td>Boire de l’eau potable, laver les aliments, les cuire</td></tr>
        <tr><td>Les mains sales, le contact</td><td>Gastro-entérite</td><td>Se laver les mains au savon</td></tr>
        <tr><td>Une piqûre d’insecte</td><td>Paludisme (moustique)</td><td>Moustiquaire, supprimer les eaux stagnantes</td></tr>
        <tr><td>Une blessure</td><td>Tétanos</td><td>Nettoyer et désinfecter la plaie, être vacciné</td></tr>
        <tr><td>Le sang</td><td>Hépatite B</td><td>Matériel d’injection à usage unique, vaccination</td></tr></table>
        <p>« Je pars toujours du <b>chemin</b> suivi par le microbe : la prévention consiste à <b>couper ce chemin</b>. Le choléra passe par l’eau : je bois de l’eau potable. »</p>
        <p>Pourquoi agir vite ? Dans de bonnes conditions, une bactérie se divise en deux toutes les 20 minutes : 1, puis 2, puis 4, puis 8… Le nombre <b>double</b> à chaque fois.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Quatre maladies infectieuses", contexte: "Le tableau présente quatre maladies.", docs: [
        { type: "table", titre: "Quatre maladies infectieuses", cols: ["Maladie", "Microbe", "Mode de transmission"], rows: [["Grippe", "Virus", "L’air : toux, éternuements"], ["Choléra", "Bactérie", "L’eau et les aliments souillés"], ["Paludisme", "Parasite microscopique", "La piqûre d’un moustique"], ["Tuberculose", "Bactérie", "L’air : toux"]] }
      ], questions: [
        { id: "2AC-L8-g1", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle maladie du tableau se transmet par l’eau ?", options: ["Le choléra", "La grippe", "Le paludisme", "La tuberculose"], rep: 0, retour: "Ligne « Choléra », colonne « Mode de transmission »." },
        { id: "2AC-L8-g2", cap: "R2", pts: 1, type: "assoc", enonce: "Associe chaque maladie au geste qui la prévient.", gauche: ["La grippe", "Le choléra", "Le paludisme"], droite: ["Dormir sous une moustiquaire", "Se couvrir la bouche et aérer les pièces", "Boire de l’eau potable"], rep: [1, 2, 0], retour: "On coupe le chemin du microbe : l’air, l’eau, le moustique." },
        { id: "2AC-L8-g3", cap: "R1", pts: 1, type: "qcm", enonce: "Pourquoi faut-il se laver les mains avant de manger ?", options: ["Pour éliminer les microbes qu’elles portent, avant qu’ils n’entrent par la bouche", "Pour refroidir les mains", "Pour que les aliments aient meilleur goût", "Parce que le savon nourrit la peau"], rep: 0, retour: "Les mains touchent tout : elles transportent les microbes jusqu’à la bouche." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Des bactéries qui se multiplient", contexte: "On place une bactérie dans un milieu nutritif à 37 °C et on compte les bactéries toutes les 20 minutes.", docs: [
        { type: "table", titre: "Multiplication d’une bactérie", cols: ["Temps (min)", "0", "20", "40", "60", "80"], rows: [["Nombre de bactéries", "1", "2", "4", "8", "16"]] }
      ], questions: [
        { id: "2AC-L8-t1", cap: "I4", pts: 1, type: "num", enonce: "Combien de bactéries compte-t-on à 60 minutes ?", rep: 8, tol: 0, unite: "bactéries", retour: "Colonne « 60 »." },
        { id: "2AC-L8-t2", cap: "R5", pts: 1, type: "num", enonce: "Si la multiplication continue au même rythme, combien y aura-t-il de bactéries à 100 minutes ?", rep: 32, tol: 0, unite: "bactéries", retour: "Le nombre double toutes les 20 minutes : 16 × 2 = 32." },
        { id: "2AC-L8-t3", cap: "K", pts: 1, type: "assoc", enonce: "Classe chaque maladie.", gauche: ["La grippe", "Le diabète", "La tuberculose", "Le rachitisme", "Le choléra"], droite: ["Maladie infectieuse", "Maladie non infectieuse"], rep: [0, 1, 0, 1, 0], retour: "Grippe, tuberculose et choléra sont dues à des microbes. Le diabète et le rachitisme ne le sont pas." },
        { id: "2AC-L8-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque mode de transmission au geste de prévention.", gauche: ["L’air", "L’eau souillée", "La piqûre d’un moustique", "Les mains sales"], droite: ["Boire de l’eau potable", "Se laver les mains au savon", "Porter un masque et aérer", "Utiliser une moustiquaire"], rep: [2, 0, 3, 1], retour: "Chaque geste coupe un chemin de transmission." },
        { id: "2AC-L8-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Tous les microbes provoquent des maladies.", v: false }, { t: "Un virus est beaucoup plus petit qu’une bactérie.", v: true }, { t: "Une maladie non infectieuse ne se transmet pas d’une personne à l’autre.", v: true }, { t: "Dans de bonnes conditions, les bactéries se multiplient très vite.", v: true }], retour: "Seuls les microbes pathogènes rendent malade." }
      ] }
    ],
    cloture: `<ul><li>Maladie <b>infectieuse</b> : due à un microbe pathogène (bactérie, virus, champignon, parasite). Maladie <b>non infectieuse</b> : sans microbe (carence, diabète…).</li><li>Les microbes se transmettent par l’<b>air</b>, l’<b>eau</b> et les aliments, les <b>mains</b>, les <b>piqûres</b> d’insectes, les <b>blessures</b>, le <b>sang</b>.</li><li><b>Prévenir</b>, c’est couper le chemin du microbe : hygiène des mains, eau potable, masque, moustiquaire, désinfection, vaccination.</li><li>Les bactéries se multiplient très vite : leur nombre double à chaque division.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 2 ----------
  const gAnticorps = {
    type: "graph", titre: "Quantité d’anticorps dans le sang après deux contacts avec le même microbe", xlab: "Temps (semaines)", ylab: "Anticorps (unités arbitraires)", xmax: 10, ymax: 110,
    series: [{ nom: "Anticorps contre ce microbe", pts: [[0, 0], [1, 2], [2, 10], [4, 4], [6, 2], [7, 60], [8, 100], [10, 70]] }],
    marques: [{ x: 0, label: "1er contact" }, { x: 6, label: "2e contact" }]
  };
  L.push({
    id: "2AC-L9", u: 1, c: 0, s: 1,
    titre: "Leçon 9 — Le rôle du système immunitaire dans la résistance aux maladies",
    objectif: "À la fin de la leçon, je sais décrire les trois lignes de défense du corps contre les microbes.",
    reussite: ["Je cite les barrières naturelles.", "Je remets dans l’ordre les étapes de la phagocytose.", "J’explique la mémoire immunitaire à partir d’une courbe."],
    prerequis: {
      html: `<p>Des microbes pathogènes nous entourent en permanence (leçon 8). Pourtant, nous ne sommes pas malades tous les jours : le corps <b>se défend</b>. L’ensemble de ses défenses forme le <b>système immunitaire</b>.</p>`,
      quiz: [
        { id: "2AC-L9-a1", cap: "K", pts: 1, type: "qcm", enonce: "Une maladie infectieuse est due à :", options: ["un microbe pathogène", "un manque de vitamines", "un excès de sucre", "la fatigue"], rep: 0, retour: "Le microbe entre dans le corps et s’y multiplie." },
        { id: "2AC-L9-a2", cap: "K", pts: 1, type: "qcm", enonce: "Quelles cellules du sang défendent l’organisme ?", options: ["Les globules blancs", "Les globules rouges", "Les plaquettes", "Aucune"], rep: 0, retour: "Les globules rouges transportent le dioxygène ; les globules blancs défendent le corps." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je suis un microbe qui tente d’entrer", html: `
        <p class="ctx">Je raconte l’histoire d’une écharde plantée dans un doigt, ligne de défense par ligne de défense.</p>
        <p><b>1ʳᵉ ligne : les barrières naturelles.</b> « Tant que la <b>peau</b> est intacte, les microbes restent dehors. Les <b>muqueuses</b> du nez et de la bouche, les larmes, la salive et le suc acide de l’estomac jouent le même rôle. » L’écharde perce la peau : des bactéries entrent.</p>
        <p><b>2ᵉ ligne : la réaction inflammatoire et la phagocytose.</b> « Le doigt devient <b>rouge</b>, <b>chaud</b>, <b>gonflé</b> et <b>douloureux</b> : le sang afflue et amène des globules blancs, les <b>phagocytes</b>. » Chaque phagocyte :</p>
        <ol><li>s’approche d’une bactérie et s’y fixe ;</li><li>l’entoure et l’englobe ;</li><li>la digère ;</li><li>rejette les débris.</li></ol>
        <p>Cette réaction est <b>rapide</b> et identique pour tous les microbes. Le pus est formé de phagocytes morts et de microbes.</p>
        <p><b>3ᵉ ligne : les lymphocytes.</b> « Si les microbes résistent, d’autres globules blancs, les <b>lymphocytes</b>, interviennent. Certains fabriquent des <b>anticorps</b> : des molécules qui se fixent sur <b>ce microbe-là</b> et le neutralisent. D’autres détruisent les cellules infectées. » Cette réponse est plus lente, mais <b>spécifique</b>.</p>` },
      { titre: "Je fais 2 — Je lis la courbe des anticorps", html: `
        <p>On dose les anticorps dans le sang d’une personne qui rencontre deux fois le même microbe.</p>
        <p>« Après le <b>premier contact</b>, les anticorps apparaissent lentement et atteignent un maximum de 10 unités au bout de 2 semaines, puis diminuent. »</p>
        <p>« Après le <b>second contact</b>, ils augmentent beaucoup plus vite et atteignent 100 unités en 2 semaines. »</p>
        <p>Je compare : la seconde réponse est <b>plus rapide</b> et <b>plus forte</b>.</p>
        <p class="def"><b>Mémoire immunitaire</b> : après un premier contact, le corps garde des lymphocytes « mémoire ». Si le même microbe revient, la réponse est immédiate et efficace.</p>
        <p><b>Erreur fréquente</b> : un anticorps n’agit pas contre tous les microbes. L’anticorps contre la rougeole ne protège pas de la grippe.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Deux contacts avec le même microbe", contexte: "Une personne rencontre un microbe une première fois, puis une seconde fois six semaines plus tard.", docs: [gAnticorps], questions: [
        { id: "2AC-L9-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la quantité maximale d’anticorps après le premier contact ?", rep: 10, tol: 2, unite: "unités", retour: "Le premier sommet de la courbe, à 2 semaines : 10 unités." },
        { id: "2AC-L9-g2", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la quantité maximale d’anticorps après le second contact ?", rep: 100, tol: 3, unite: "unités", retour: "Le second sommet, à 8 semaines : 100 unités." },
        { id: "2AC-L9-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Comment expliquer cette différence ?", options: ["Le corps a gardé la mémoire du microbe : la seconde réponse est plus rapide et plus forte", "Le microbe est devenu plus faible", "Les anticorps du premier contact sont restés intacts", "Le second microbe est différent"], rep: 0, retour: "C’est la mémoire immunitaire : 100 unités au lieu de 10, atteintes dans le même délai." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Une analyse de sang", contexte: "On compte les globules blancs dans le sang de deux personnes.", docs: [
        { type: "table", titre: "Nombre de globules blancs par millimètre cube de sang", cols: ["Personne", "Globules blancs"], rows: [["Personne en bonne santé", "7 000"], ["Personne atteinte d’une angine due à une bactérie", "15 000"]] }
      ], questions: [
        { id: "2AC-L9-t1", cap: "I4", pts: 1, type: "num", enonce: "Combien de globules blancs par millimètre cube compte-t-on chez la personne malade ?", rep: 15000, tol: 0, unite: "", retour: "Deuxième ligne du tableau : 15 000." },
        { id: "2AC-L9-t2", cap: "R1", pts: 1, type: "qcm", enonce: "Pourquoi ce nombre est-il plus élevé chez la personne malade ?", options: ["Le corps produit davantage de globules blancs pour combattre les bactéries", "Les bactéries se transforment en globules blancs", "La personne a trop mangé", "Les globules rouges ont disparu"], rep: 0, retour: "L’augmentation des globules blancs est le signe que le système immunitaire réagit à une infection." },
        { id: "2AC-L9-t3", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les étapes de la phagocytose.", items: ["Le phagocyte s’approche du microbe et s’y fixe", "Il l’entoure et l’englobe", "Il le digère", "Il rejette les débris"], retour: "Fixation, englobement, digestion, rejet." },
        { id: "2AC-L9-t4", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque élément à son rôle.", gauche: ["La peau", "Le phagocyte", "L’anticorps", "La mémoire immunitaire"], droite: ["Se fixe sur un microbe précis et le neutralise", "Permet une réponse plus rapide au second contact", "Empêche les microbes d’entrer", "Englobe et digère les microbes"], rep: [2, 3, 0, 1], retour: "Barrière, phagocytose, anticorps spécifique, mémoire." },
        { id: "2AC-L9-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une peau saine empêche l’entrée des microbes.", v: true }, { t: "Un anticorps agit contre tous les microbes.", v: false }, { t: "La rougeur et le gonflement sont des signes de la réaction inflammatoire.", v: true }, { t: "Après une première infection, le corps ne garde aucun souvenir du microbe.", v: false }], retour: "L’anticorps est spécifique d’un microbe, et le corps en garde la mémoire." }
      ] }
    ],
    cloture: `<ul><li><b>1ʳᵉ ligne</b> : les barrières naturelles (peau, muqueuses, larmes, suc gastrique).</li><li><b>2ᵉ ligne</b> : la réaction inflammatoire et la <b>phagocytose</b> — rapide, la même pour tous les microbes.</li><li><b>3ᵉ ligne</b> : les <b>lymphocytes</b> et les <b>anticorps</b> — plus lente, spécifique d’un microbe.</li><li><b>Mémoire immunitaire</b> : au second contact, la réponse est plus rapide et plus forte.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 1 ----------
  const gSerum = {
    type: "graph", titre: "Quantité d’anticorps dans le sang après un sérum ou après un vaccin", xlab: "Temps (semaines)", ylab: "Anticorps (unités arbitraires)", xmax: 8, ymax: 100,
    series: [{ nom: "Après une injection de sérum", pts: [[0, 90], [1, 70], [2, 40], [3, 15], [4, 0], [8, 0]] }, { nom: "Après une vaccination", pts: [[0, 0], [1, 5], [2, 30], [3, 60], [4, 70], [8, 70]] }]
  };
  L.push({
    id: "2AC-L10", u: 1, c: 1, s: 0,
    titre: "Leçon 10 — Les aides et le soutien au système immunitaire",
    objectif: "À la fin de la leçon, je sais expliquer le rôle du vaccin, du sérum et des antibiotiques, et choisir l’aide adaptée à une situation.",
    reussite: ["Je distingue le vaccin (prévenir) du sérum (soigner en urgence).", "Je dis contre quels microbes un antibiotique est efficace.", "Je compare deux courbes sur un même graphique."],
    prerequis: {
      html: `<p>Le système immunitaire fabrique des <b>anticorps</b> spécifiques et garde la <b>mémoire</b> des microbes rencontrés (leçon 9). Mais contre certains microbes, il est trop lent : il faut l’aider.</p>`,
      quiz: [
        { id: "2AC-L10-a1", cap: "K", pts: 1, type: "qcm", enonce: "Au second contact avec un microbe, la production d’anticorps est :", options: ["plus rapide et plus forte", "plus lente et plus faible", "identique", "nulle"], rep: 0, retour: "C’est la mémoire immunitaire." },
        { id: "2AC-L10-a2", cap: "K", pts: 1, type: "qcm", enonce: "Un anticorps :", options: ["neutralise un microbe précis", "détruit tous les microbes", "transporte le dioxygène", "digère les aliments"], rep: 0, retour: "Chaque anticorps est spécifique d’un microbe." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je compare le vaccin et le sérum", html: `
        <p class="ctx">Pour choisir, je me pose une question : « Faut-il <b>préparer</b> le corps à l’avance, ou le <b>secourir</b> tout de suite ? »</p>
        <table class="t"><tr><th></th><th>Vaccin</th><th>Sérum</th></tr>
        <tr><th>Ce que l’on injecte</th><td>Un microbe tué ou affaibli, ou un fragment de microbe, sans danger</td><td>Des anticorps déjà fabriqués</td></tr>
        <tr><th>Ce que fait le corps</th><td>Il fabrique lui-même ses anticorps et garde la mémoire</td><td>Il reçoit les anticorps, sans rien fabriquer</td></tr>
        <tr><th>Protection</th><td>Elle apparaît après quelques jours et <b>dure longtemps</b></td><td><b>Immédiate</b>, mais elle ne dure que quelques semaines</td></tr>
        <tr><th>Usage</th><td><b>Prévenir</b> la maladie</td><td><b>Soigner</b> en urgence</td></tr></table>
        <p>« Youssef, qui n’est pas vacciné contre le tétanos, se blesse avec un clou rouillé. Faut-il le préparer ou le secourir ? Le secourir : le médecin injecte un <b>sérum</b>, dont les anticorps agissent tout de suite. Il le <b>vaccine</b> aussi, pour le protéger à l’avenir. »</p>
        <p>Certains vaccins demandent des <b>rappels</b> pour entretenir la mémoire. Le carnet de santé indique les dates.</p>` },
      { titre: "Je fais 2 — Les antibiotiques et l’hygiène", html: `
        <p class="def">Un <b>antibiotique</b> est un médicament qui détruit les <b>bactéries</b> ou empêche leur multiplication. Il n’a <b>aucun effet sur les virus</b>.</p>
        <p>« Une angine due à une bactérie : antibiotique utile. Une grippe, due à un virus : antibiotique inutile. »</p>
        <p>Trois règles : prendre un antibiotique seulement sur <b>prescription du médecin</b> ; respecter la <b>dose</b> ; aller <b>jusqu’au bout</b> du traitement, même si l’on se sent mieux. Sinon, les bactéries les plus résistantes survivent et l’antibiotique devient inefficace.</p>
        <p><b>Autres aides :</b></p>
        <ul><li>l’<b>antiseptique</b> (alcool, eau oxygénée) détruit les microbes sur une plaie ;</li><li>l’<b>asepsie</b> évite de les apporter : mains lavées, matériel stérile ;</li><li>une bonne <b>hygiène de vie</b> : alimentation équilibrée, sommeil, activité physique.</li></ul>` }
    ],
    guidee: [
      { titre: "Nous faisons — Sérum ou vaccin ?", contexte: "On dose les anticorps dans le sang de deux personnes : l’une a reçu un sérum, l’autre un vaccin, contre le même microbe.", docs: [gSerum], questions: [
        { id: "2AC-L10-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la quantité d’anticorps juste après l’injection de sérum (semaine 0) ?", rep: 90, tol: 3, unite: "unités", retour: "On lit la courbe du sérum à la semaine 0 : 90 unités." },
        { id: "2AC-L10-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Après la vaccination, la quantité d’anticorps :", options: ["augmente de 0 à 70 unités en 4 semaines, puis reste stable", "diminue de 90 à 0 unité en 4 semaines", "reste nulle", "augmente de 0 à 90 unités en une semaine"], rep: 0, retour: "On lit la courbe du vaccin en deux segments : montée, puis palier." },
        { id: "2AC-L10-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Que montre la comparaison des deux courbes ?", options: ["Le sérum protège tout de suite mais peu de temps ; le vaccin protège plus tard mais durablement", "Le vaccin protège tout de suite", "Le sérum protège durablement", "Les deux ont le même effet"], rep: 0, retour: "Sérum : 90 unités à la semaine 0, puis 0 à la semaine 4. Vaccin : 0 à la semaine 0, puis 70 unités maintenues." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — L’effet d’un antibiotique", contexte: "On cultive des microbes dans trois boîtes, avec ou sans antibiotique.", docs: [
        { type: "table", titre: "Résultats après 24 heures", cols: ["Boîte", "Microbe cultivé", "Antibiotique", "Résultat"], rows: [["1", "Bactéries", "Non", "Les bactéries sont très nombreuses"], ["2", "Bactéries", "Oui", "Les bactéries ont disparu"], ["3", "Virus de la grippe", "Oui", "Les virus sont toujours actifs"]] }
      ], questions: [
        { id: "2AC-L10-t1", cap: "I4", pts: 1, type: "qcm", enonce: "Dans quelle boîte les microbes ont-ils été détruits ?", options: ["La boîte 2", "La boîte 1", "La boîte 3", "Aucune"], rep: 0, retour: "Ligne 2, colonne « Résultat »." },
        { id: "2AC-L10-t2", cap: "R2", pts: 1, type: "qcm", enonce: "Pourquoi le médecin ne prescrit-il pas d’antibiotique contre la grippe ?", options: ["La grippe est due à un virus, et les antibiotiques n’agissent pas sur les virus", "La grippe n’est pas une maladie", "Les antibiotiques coûtent trop cher", "La grippe est due à une bactérie"], rep: 0, retour: "La boîte 3 le montre : les virus restent actifs malgré l’antibiotique." },
        { id: "2AC-L10-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque aide à son rôle.", gauche: ["Le vaccin", "Le sérum", "L’antibiotique", "L’antiseptique"], droite: ["Détruire les bactéries dans le corps", "Désinfecter une plaie", "Prévenir une maladie, avec une protection durable", "Soigner en urgence, avec une protection immédiate mais courte"], rep: [2, 3, 0, 1], retour: "Vaccin : prévenir. Sérum : secourir. Antibiotique : contre les bactéries. Antiseptique : sur la plaie." },
        { id: "2AC-L10-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Une personne non vaccinée contre le tétanos se blesse profondément. Pourquoi le médecin lui injecte-t-il d’abord un sérum ?", options: ["Le sérum apporte des anticorps déjà fabriqués, qui agissent immédiatement", "Le sérum protège toute la vie", "Le sérum contient un antibiotique", "Le sérum remplace la désinfection"], rep: 0, retour: "Le vaccin serait trop lent : il faut plusieurs jours au corps pour fabriquer ses propres anticorps." },
        { id: "2AC-L10-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Le vaccin contient des anticorps déjà fabriqués.", v: false }, { t: "La vaccination fait apparaître une mémoire immunitaire.", v: true }, { t: "On peut arrêter un antibiotique dès que l’on se sent mieux.", v: false }, { t: "Se laver les mains aide à éviter les infections.", v: true }], retour: "C’est le sérum qui contient des anticorps. Un traitement antibiotique se suit jusqu’au bout." }
      ] }
    ],
    cloture: `<ul><li><b>Vaccin</b> : microbe rendu inoffensif ; le corps fabrique ses anticorps et garde la mémoire ; il <b>prévient</b>, durablement.</li><li><b>Sérum</b> : anticorps déjà fabriqués ; il <b>soigne en urgence</b>, immédiatement mais brièvement.</li><li><b>Antibiotique</b> : actif contre les <b>bactéries</b>, jamais contre les virus ; sur prescription et jusqu’au bout.</li><li>Antiseptique, asepsie et bonne hygiène de vie complètent ces aides.</li></ul>`
  });
})();
