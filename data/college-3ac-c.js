// 3AC — Thème 2, chapitres 1 et 2 : le système nerveux ; le système musculaire.
// Enseignement explicite : ouverture, je fais, nous faisons, tu fais, je retiens.
(function () {
  const { qcm, vf, assoc, ordre, num, trous, table, graph, lecon } = window.SVT.mk;
  const L = (n, pos, o) => lecon("3AC", n, pos, o);

  // ---------- Chapitre 1, séquence 1 ----------
  const tSens = table("Observations réalisées chez des personnes accidentées", ["Cas", "Lésion constatée", "Organe des sens", "Conséquence"],
    [["1", "Destruction de la rétine de l’œil droit", "Œil droit détruit", "Ne voit plus de l’œil droit"], ["2", "Section du nerf optique droit", "Œil droit intact", "Ne voit plus de l’œil droit"], ["3", "Destruction de l’aire visuelle du cerveau", "Yeux intacts", "Cécité"], ["4", "Destruction de l’aire auditive du cerveau", "Yeux intacts", "Vision normale, surdité"]]);
  L(17, [1, 0, 0], {
    titre: "La sensibilité consciente",
    objectif: "À la fin de la leçon, je sais décrire le trajet du message nerveux sensitif, du récepteur jusqu’au cerveau, et expliquer la naissance d’une sensation.",
    reussite: ["Je cite les trois éléments qui interviennent dans une sensation.", "J’interprète des observations de lésions.", "J’associe chaque sens à son aire du cortex cérébral."],
    pre: [`<p>Nous percevons le monde grâce à nos <b>organes des sens</b> : l’œil, l’oreille, la peau, la langue, le nez. Chacun est sensible à un <b>stimulus</b> : la lumière, le son, le contact, les substances chimiques.</p>`, [
      assoc("K", "Associe chaque organe des sens à son stimulus.", ["L’œil", "L’oreille", "La peau"], ["Le contact, la chaleur, la douleur", "La lumière", "Le son"], [1, 2, 0], "Chaque organe des sens est spécialisé."),
      qcm("K", "Quel organe est protégé par le crâne ?", ["Le cerveau", "Le cœur", "Le rein", "La moelle épinière"], "La moelle épinière, elle, est protégée par la colonne vertébrale.")]],
    mod: [["Je fais 1 — J’interprète des lésions", `
        <p class="ctx">Pour savoir à quoi sert un organe, j’observe ce qui se passe quand il est détruit. Je raisonne cas par cas sur la vision.</p>
        <table class="t"><tr><th>Lésion</th><th>Conséquence</th><th>Ce que j’en déduis</th></tr>
        <tr><td>Rétine détruite</td><td>Plus de vision de cet œil</td><td>La rétine <b>reçoit</b> le stimulus : c’est le récepteur</td></tr>
        <tr><td>Nerf optique sectionné, œil intact</td><td>Plus de vision de cet œil</td><td>Le nerf <b>conduit</b> quelque chose vers le cerveau : le message nerveux</td></tr>
        <tr><td>Aire visuelle du cerveau détruite, yeux et nerfs intacts</td><td>Cécité</td><td>C’est dans le <b>cerveau</b> que naît la sensation</td></tr></table>
        <p>« Dans le cas 3, les yeux fonctionnent, les nerfs aussi, et pourtant la personne ne voit pas. Je conclus : on ne voit pas avec les yeux seuls, on voit avec son cerveau. »</p>
        <p class="def">Une sensation fait intervenir trois éléments : un <b>récepteur sensoriel</b>, un <b>conducteur</b> (le nerf sensitif) et un <b>centre nerveux</b> (une aire du cortex cérébral).</p>`],
      ["Je fais 2 — Je suis le message nerveux sensitif", `
        <p>« Je touche un objet chaud. Je suis le trajet, étape par étape. »</p>
        <ol><li>Le <b>stimulus</b> (la chaleur) excite les <b>récepteurs</b> de la peau.</li><li>Un <b>message nerveux sensitif</b> naît et parcourt le <b>nerf sensitif</b>.</li>
        <li>Il monte par la <b>moelle épinière</b> jusqu’au cerveau.</li><li>Il arrive à l’<b>aire sensitive</b> du cortex cérébral : la <b>sensation</b> de chaleur devient consciente.</li></ol>
        <table class="t"><tr><th>Sens</th><th>Récepteur</th><th>Aire du cortex cérébral</th></tr><tr><td>Vue</td><td>Rétine</td><td>Aire visuelle, à l’arrière du cerveau</td></tr><tr><td>Ouïe</td><td>Oreille interne</td><td>Aire auditive, sur le côté</td></tr><tr><td>Toucher</td><td>Récepteurs de la peau</td><td>Aire de la sensibilité générale, au sommet</td></tr></table>
        <p>Les voies sensitives <b>se croisent</b> : l’hémisphère gauche reçoit les messages du côté droit du corps, et inversement.</p>
        <p><b>Erreur fréquente</b> : croire qu’une lésion du cerveau touche tous les sens. Chaque aire est <b>spécialisée</b>.</p>`]],
    gui: { titre: "Nous faisons — Quatre cas cliniques", ctx: "Des médecins ont relevé les conséquences de quatre lésions.", docs: [tSens], q: [
      qcm("I4", "Dans quel cas la personne est-elle sourde ?", ["Le cas 4", "Le cas 1", "Le cas 2", "Le cas 3"], "Ligne 4, colonne « Conséquence »."),
      qcm("R2", "Dans le cas 2, l’œil est intact mais la personne ne voit plus de cet œil. Que peut-on en déduire ?", ["Le nerf optique conduit le message nerveux de l’œil vers le cerveau", "L’œil ne sert à rien", "Le nerf optique fabrique la lumière", "La vision naît dans le nerf"], "Si le conducteur est coupé, le message n’arrive plus."),
      qcm("R2", "Que montrent ensemble les cas 3 et 4 ?", ["Chaque aire du cortex est spécialisée dans une sensation", "Le cerveau ne sert pas à voir", "Une lésion du cerveau supprime tous les sens", "Les yeux commandent l’audition"], "Aire visuelle détruite : cécité. Aire auditive détruite : surdité, mais vision normale.")] },
    aut: { titre: "Tu fais — Du stimulus à la sensation", ctx: "Utilise le tableau et tes connaissances.", docs: [tSens], q: [
      qcm("I4", "Dans le cas 3, dans quel état sont les yeux ?", ["Intacts", "Détruits", "Absents", "Opérés"], "Ligne 3, colonne « Organe des sens »."),
      ordre("K", "Remets dans l’ordre le trajet du message nerveux quand on touche un objet chaud.", ["Récepteurs de la peau", "Nerf sensitif", "Moelle épinière", "Aire sensitive du cortex cérébral"], "Récepteur, conducteur, centre nerveux."),
      assoc("K", "Associe chaque élément à son rôle.", ["Le récepteur sensoriel", "Le nerf sensitif", "L’aire du cortex cérébral"], ["Conduit le message nerveux", "Fait naître la sensation", "Reçoit le stimulus"], [2, 0, 1], "Recevoir, conduire, faire naître la sensation."),
      qcm("R2", "Une personne ne sent plus rien sur la main droite, alors que sa main et ses nerfs sont intacts. Où peut se trouver la lésion ?", ["Dans l’aire de la sensibilité générale de l’hémisphère gauche", "Dans l’aire visuelle", "Dans l’hémisphère droit", "Dans la main gauche"], "Les voies sensitives se croisent : le côté droit du corps est relié à l’hémisphère gauche."),
      vf([["La sensation naît dans le cortex cérébral.", true], ["Un nerf sensitif conduit le message du cerveau vers la peau.", false], ["L’hémisphère gauche reçoit les messages du côté droit du corps.", true], ["Toutes les aires du cortex ont le même rôle.", false]], "Le nerf sensitif conduit le message du récepteur vers le centre nerveux.")] },
    clo: `<ul><li>Sensation : <b>récepteur</b> (reçoit le stimulus) → <b>nerf sensitif</b> (conduit le message) → <b>aire du cortex cérébral</b> (fait naître la sensation).</li><li>Chaque aire du cortex est <b>spécialisée</b> : visuelle, auditive, sensibilité générale.</li><li>Les voies sensitives se croisent : chaque hémisphère reçoit les messages du côté opposé du corps.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 2 ----------
  const tMoteur = table("Observations sur la commande des mouvements", ["Observation", "Résultat"],
    [["Stimulation électrique de l’aire motrice de l’hémisphère gauche", "Mouvement de la main droite"], ["Destruction de l’aire motrice de l’hémisphère gauche", "Paralysie du côté droit du corps"], ["Section de la moelle épinière au niveau du dos", "Paralysie des deux jambes"], ["Section du nerf moteur d’un muscle", "Paralysie de ce muscle seulement"]]);
  L(18, [1, 0, 1], {
    titre: "La motricité volontaire",
    objectif: "À la fin de la leçon, je sais décrire le trajet du message nerveux moteur, du cerveau jusqu’au muscle, lors d’un mouvement volontaire.",
    reussite: ["Je cite les éléments qui interviennent dans un mouvement volontaire.", "J’explique une paralysie par la place de la lésion.", "Je compare la voie sensitive et la voie motrice."],
    pre: [`<p>Dans la sensibilité consciente, le message nerveux va du <b>récepteur</b> vers le <b>cortex cérébral</b> (leçon 17). Pour un mouvement décidé, le message fait le trajet inverse.</p>`, [
      qcm("K", "Où naît une sensation ?", ["Dans le cortex cérébral", "Dans la peau", "Dans le nerf", "Dans le muscle"], "Dans une aire spécialisée du cortex."),
      qcm("K", "L’hémisphère gauche du cerveau est relié :", ["au côté droit du corps", "au côté gauche du corps", "aux deux côtés de la même façon", "à la tête seulement"], "Les voies nerveuses se croisent.")]],
    mod: [["Je fais 1 — Je cherche d’où part la commande", `
        <p class="ctx">J’utilise deux types d’observations : la <b>stimulation</b> (que se passe-t-il si j’excite ?) et la <b>lésion</b> (que se passe-t-il si c’est détruit ?).</p>
        <ul><li>« On stimule une zone du cortex de l’hémisphère gauche : la main droite bouge. Cette zone commande donc des mouvements : c’est l’<b>aire motrice</b>. »</li>
        <li>« Chez un malade, cette aire est détruite à gauche : tout le côté droit est paralysé. Cela confirme, et cela montre que la commande <b>se croise</b>. »</li></ul>
        <p class="def">Le <b>mouvement volontaire</b> est décidé et commandé par l’<b>aire motrice</b> du cortex cérébral.</p>
        <p>La paralysie de la moitié du corps s’appelle une <b>hémiplégie</b>.</p>`],
      ["Je fais 2 — Je suis le message nerveux moteur", `
        <ol><li>Le message nerveux <b>moteur</b> naît dans l’<b>aire motrice</b>.</li><li>Il descend dans le cerveau et <b>croise</b> la ligne médiane au niveau du bulbe rachidien.</li>
        <li>Il descend dans la <b>moelle épinière</b>.</li><li>Il emprunte un <b>nerf moteur</b>.</li><li>Il arrive au <b>muscle</b>, qui se contracte : c’est l’<b>effecteur</b>.</li></ol>
        <p>« Je prévois l’effet d’une lésion en cherchant où le trajet est coupé. Moelle sectionnée au niveau du dos : les messages n’arrivent plus aux jambes, elles sont paralysées ; les bras, branchés plus haut, bougent encore. »</p>
        <table class="t"><tr><th></th><th>Sensibilité consciente</th><th>Motricité volontaire</th></tr><tr><th>Point de départ</th><td>Récepteur sensoriel</td><td>Aire motrice du cortex</td></tr><tr><th>Point d’arrivée</th><td>Aire sensitive du cortex</td><td>Muscle (effecteur)</td></tr><tr><th>Nerf</th><td>Sensitif</td><td>Moteur</td></tr><tr><th>Sens du message</th><td>Vers le cerveau</td><td>Vers le muscle</td></tr></table>`]],
    gui: { titre: "Nous faisons — Stimulations et lésions", ctx: "Le tableau rassemble quatre observations.", docs: [tMoteur], q: [
      qcm("I4", "Que provoque la stimulation de l’aire motrice de l’hémisphère gauche ?", ["Un mouvement de la main droite", "Un mouvement de la main gauche", "Une paralysie", "Une sensation de chaleur"], "Première ligne du tableau."),
      qcm("R2", "Que montrent ensemble les deux premières observations ?", ["L’aire motrice commande les mouvements du côté opposé du corps", "L’aire motrice commande la vision", "L’hémisphère gauche commande le côté gauche", "Le muscle commande le cerveau"], "Stimulation à gauche : mouvement à droite. Destruction à gauche : paralysie à droite."),
      qcm("R1", "Pourquoi la section de la moelle épinière au niveau du dos paralyse-t-elle les deux jambes ?", ["Le message moteur ne peut plus descendre jusqu’aux nerfs des jambes", "Les muscles des jambes sont détruits", "Le cerveau ne fonctionne plus", "Les jambes ne reçoivent plus de sang"], "La moelle épinière est la voie de passage du message moteur.")] },
    aut: { titre: "Tu fais — Le trajet de la commande", ctx: "Utilise le tableau et tes connaissances.", docs: [tMoteur], q: [
      qcm("I4", "Que provoque la section du nerf moteur d’un muscle ?", ["La paralysie de ce muscle seulement", "La paralysie de tout le corps", "La paralysie du côté opposé", "Aucun effet"], "Dernière ligne du tableau."),
      ordre("K", "Remets dans l’ordre le trajet du message nerveux moteur.", ["Aire motrice du cortex cérébral", "Moelle épinière", "Nerf moteur", "Muscle"], "Du centre nerveux vers l’effecteur."),
      qcm("R2", "Après un accident vasculaire dans l’hémisphère droit, quelle paralysie peut-on observer ?", ["Une paralysie du côté gauche du corps", "Une paralysie du côté droit du corps", "Une paralysie des deux jambes seulement", "Aucune paralysie"], "La commande motrice se croise."),
      assoc("K", "Associe chaque élément à la voie à laquelle il appartient.", ["Le récepteur sensoriel", "L’aire motrice", "Le nerf sensitif", "Le muscle"], ["Motricité volontaire", "Sensibilité consciente"], [1, 0, 1, 0], "Récepteur et nerf sensitif : sensibilité. Aire motrice et muscle : motricité."),
      vf([["Le muscle est l’effecteur du mouvement.", true], ["Le message moteur va du muscle vers le cerveau.", false], ["L’hémiplégie est la paralysie de la moitié du corps.", true], ["Le mouvement volontaire est commandé par l’aire visuelle.", false]], "Le message moteur part de l’aire motrice et arrive au muscle.")] },
    clo: `<ul><li>Mouvement volontaire : <b>aire motrice</b> du cortex → moelle épinière → <b>nerf moteur</b> → <b>muscle</b> (effecteur).</li><li>La commande <b>se croise</b> : chaque hémisphère commande le côté opposé du corps.</li><li>Une lésion sur le trajet provoque une <b>paralysie</b> en aval.</li><li>Voie sensitive : vers le cerveau. Voie motrice : vers le muscle.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 3 ----------
  const tSubst = table("Position de la substance grise et de la substance blanche", ["Centre nerveux", "Substance grise", "Substance blanche"], [["Cerveau", "À l’extérieur : c’est le cortex", "À l’intérieur"], ["Moelle épinière", "Au centre, en forme de papillon", "À l’extérieur"]]);
  L(19, [1, 0, 2], {
    titre: "L’organisation du système nerveux",
    objectif: "À la fin de la leçon, je sais décrire l’organisation du système nerveux et la structure du neurone.",
    reussite: ["Je distingue les centres nerveux des nerfs.", "Je situe la substance grise et la substance blanche.", "Je nomme les parties d’un neurone et le sens du message."],
    pre: [`<p>Tu as rencontré le <b>cerveau</b>, la <b>moelle épinière</b>, les <b>nerfs sensitifs</b> et les <b>nerfs moteurs</b> (leçons 17 et 18). Comment tout cela est-il organisé ?</p>`, [
      qcm("K", "Quel nerf conduit le message vers le muscle ?", ["Le nerf moteur", "Le nerf sensitif", "Le nerf optique", "Aucun"], "Le nerf sensitif conduit le message vers le centre nerveux."),
      qcm("K", "L’unité de structure de tout être vivant est :", ["la cellule", "l’organe", "le nerf", "le muscle"], "Les cellules du système nerveux sont les neurones.")]],
    mod: [["Je fais 1 — Je classe les organes du système nerveux", `
        <table class="t"><tr><th></th><th>Organes</th><th>Protection</th><th>Rôle</th></tr>
        <tr><th>Système nerveux central</th><td>Encéphale (cerveau, cervelet, bulbe rachidien) et moelle épinière</td><td>Os (crâne, colonne vertébrale) et méninges</td><td>Recevoir, traiter les messages et commander</td></tr>
        <tr><th>Système nerveux périphérique</th><td>Nerfs crâniens (12 paires) et nerfs rachidiens (31 paires)</td><td>—</td><td>Relier les centres nerveux aux organes</td></tr></table>
        <p>« Pour classer un organe, je me demande : traite-t-il les messages, ou se contente-t-il de les conduire ? Le cerveau traite : centre nerveux. Le nerf sciatique conduit : nerf. »</p>
        <p>Une coupe du cerveau ou de la moelle montre deux zones : la <b>substance grise</b> et la <b>substance blanche</b>.</p>
        <table class="t"><tr><th></th><th>Substance grise</th><th>Substance blanche</th></tr><tr><th>Cerveau</th><td>À l’extérieur (cortex)</td><td>À l’intérieur</td></tr><tr><th>Moelle épinière</th><td>Au centre</td><td>À l’extérieur</td></tr></table>
        <p>« Je croise ligne et colonne : dans la moelle, la substance grise est au centre. C’est l’inverse du cerveau. »</p>`],
      ["Je fais 2 — Je décris le neurone", `
        <p class="def">Le <b>neurone</b> est la cellule nerveuse : l’unité de structure et de fonctionnement du système nerveux.</p>
        <table class="t"><tr><th>Partie du neurone</th><th>Description</th><th>Rôle</th></tr>
        <tr><td>Dendrites</td><td>Prolongements courts et ramifiés</td><td>Reçoivent les messages</td></tr><tr><td>Corps cellulaire</td><td>Contient le noyau</td><td>Fait vivre la cellule</td></tr>
        <tr><td>Axone</td><td>Prolongement unique, parfois très long (jusqu’à 1 m)</td><td>Conduit le message vers la cellule suivante</td></tr><tr><td>Arborisation terminale</td><td>Ramifications au bout de l’axone</td><td>Transmet le message</td></tr></table>
        <p>« Le message circule toujours dans le même sens : dendrites → corps cellulaire → axone → arborisation terminale. »</p>
        <p>Les <b>corps cellulaires</b> sont regroupés dans la <b>substance grise</b> ; les <b>axones</b> (fibres nerveuses) forment la <b>substance blanche</b> et les <b>nerfs</b>. Un nerf est un ensemble de fibres nerveuses groupées en faisceaux.</p>
        <p>La zone de contact entre deux neurones, ou entre un neurone et un muscle, est une <b>synapse</b>.</p>`]],
    gui: { titre: "Nous faisons — Substance grise, substance blanche", ctx: "Le tableau compare le cerveau et la moelle épinière.", docs: [tSubst], q: [
      qcm("I4", "Où se trouve la substance grise dans la moelle épinière ?", ["Au centre", "À l’extérieur", "Partout", "Nulle part"], "Ligne « Moelle épinière », colonne « Substance grise »."),
      qcm("C1", "Compare la position de la substance grise dans les deux centres nerveux.", ["Elle est à l’extérieur dans le cerveau, alors qu’elle est au centre dans la moelle épinière", "Elle est au centre dans les deux", "Elle est à l’extérieur dans les deux", "Elle est absente de la moelle épinière"], "On lit la colonne « Substance grise » sur les deux lignes."),
      qcm("R2", "La substance grise contient les corps cellulaires des neurones. Que contient surtout la substance blanche ?", ["Les axones, c’est-à-dire les fibres nerveuses", "Du sang", "Des os", "Des muscles"], "Les fibres nerveuses conduisent les messages d’une région à l’autre.")] },
    aut: { titre: "Tu fais — L’organisation du système nerveux", ctx: "Utilise le tableau et tes connaissances.", docs: [tSubst], q: [
      qcm("I4", "Comment s’appelle la substance grise située à la surface du cerveau ?", ["Le cortex", "La moelle", "Le bulbe", "Le nerf"], "Ligne « Cerveau », colonne « Substance grise »."),
      assoc("K", "Classe chaque organe.", ["Le cerveau", "Le nerf sciatique", "La moelle épinière", "Le nerf optique", "Le cervelet"], ["Système nerveux central", "Système nerveux périphérique"], [0, 1, 0, 1, 0], "Les centres nerveux forment le système nerveux central ; les nerfs, le système nerveux périphérique."),
      ordre("K", "Remets dans l’ordre le trajet d’un message dans un neurone.", ["Dendrites", "Corps cellulaire", "Axone", "Arborisation terminale"], "Le message circule toujours dans ce sens."),
      assoc("K", "Associe chaque partie du neurone à son rôle.", ["Les dendrites", "L’axone", "Le corps cellulaire"], ["Contient le noyau et fait vivre la cellule", "Reçoivent les messages", "Conduit le message vers la cellule suivante"], [1, 2, 0], "Recevoir, conduire, faire vivre."),
      vf([["Le cerveau est protégé par le crâne et les méninges.", true], ["Un nerf est formé d’une seule fibre nerveuse.", false], ["Le neurone est une cellule.", true], ["La synapse est la zone de contact entre deux neurones.", true]], "Un nerf réunit de très nombreuses fibres nerveuses.")] },
    clo: `<ul><li><b>Système nerveux central</b> : encéphale et moelle épinière, protégés par les os et les méninges. <b>Système nerveux périphérique</b> : les nerfs.</li><li>Cerveau : substance grise à l’extérieur (cortex). Moelle épinière : substance grise au centre.</li><li>Le <b>neurone</b> : dendrites → corps cellulaire → axone → arborisation terminale.</li><li>Substance grise = corps cellulaires ; substance blanche et nerfs = fibres nerveuses ; <b>synapse</b> = zone de contact.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 4 ----------
  const tReflexe = table("Expériences sur une grenouille dont l’encéphale a été détruit (grenouille spinale)", ["Expérience", "Ce que l’on fait", "Réaction quand on pince la patte gauche"],
    [["1", "Rien de plus", "Flexion de la patte gauche"], ["2", "On endort la peau de la patte gauche avec un anesthésique", "Aucune réaction"], ["3", "On sectionne le nerf de la patte gauche", "Aucune réaction"], ["4", "On détruit la moelle épinière", "Aucune réaction"]]);
  L(20, [1, 0, 3], {
    titre: "Les réflexes médullaires",
    objectif: "À la fin de la leçon, je sais décrire les éléments d’un arc réflexe et distinguer un réflexe d’un mouvement volontaire.",
    reussite: ["J’interprète une série d’expériences en changeant une variable à la fois.", "Je cite dans l’ordre les cinq éléments de l’arc réflexe.", "Je donne trois caractères du réflexe."],
    pre: [`<p>Un mouvement volontaire est commandé par le <b>cerveau</b> (leçon 18). Pourtant, on retire sa main d’une plaque brûlante <b>avant même d’y penser</b>.</p>`, [
      qcm("K", "D’où part la commande d’un mouvement volontaire ?", ["De l’aire motrice du cortex cérébral", "De la moelle épinière", "Du muscle", "De la peau"], "C’est le cerveau qui décide."),
      qcm("K", "Dans la moelle épinière, la substance grise est :", ["au centre", "à l’extérieur", "absente", "dans les nerfs"], "En forme de papillon.")]],
    mod: [["Je fais 1 — J’interprète les expériences", `
        <p class="ctx">On détruit l’encéphale d’une grenouille : elle ne peut plus faire de mouvement volontaire. On pince alors sa patte.</p>
        <p>« Expérience 1 : la patte pincée se replie. Sans cerveau, une réaction existe encore : ce n’est pas un mouvement volontaire, c’est un <b>réflexe</b>. »</p>
        <p>Je change ensuite <b>un seul élément à la fois</b> :</p>
        <table class="t"><tr><th>Ce que l’on supprime</th><th>Réaction</th><th>Ce que j’en déduis</th></tr>
        <tr><td>La sensibilité de la peau (anesthésie)</td><td>Aucune</td><td>La <b>peau</b> est indispensable : elle reçoit le stimulus</td></tr>
        <tr><td>Le nerf de la patte (section)</td><td>Aucune</td><td>Le <b>nerf</b> est indispensable : il conduit les messages</td></tr>
        <tr><td>La moelle épinière (destruction)</td><td>Aucune</td><td>La <b>moelle épinière</b> est indispensable : c’est le centre nerveux</td></tr></table>
        <p class="def">Un <b>réflexe médullaire</b> est une réaction dont le centre nerveux est la moelle épinière.</p>`],
      ["Je fais 2 — Je construis l’arc réflexe", `
        <p>« Je range les éléments dans l’ordre où le message les parcourt. »</p>
        <ol><li><b>Récepteur</b> : la peau, qui reçoit le stimulus.</li><li><b>Conducteur sensitif</b> : la fibre nerveuse sensitive, qui entre dans la moelle par la racine dorsale.</li>
        <li><b>Centre nerveux</b> : la moelle épinière.</li><li><b>Conducteur moteur</b> : la fibre nerveuse motrice, qui sort par la racine ventrale.</li>
        <li><b>Effecteur</b> : le muscle, qui se contracte.</li></ol>
        <p>Ce trajet s’appelle l’<b>arc réflexe</b>.</p>
        <table class="t"><tr><th></th><th>Réflexe médullaire</th><th>Mouvement volontaire</th></tr><tr><th>Centre nerveux</th><td>Moelle épinière</td><td>Cortex cérébral</td></tr><tr><th>Volonté</th><td>Involontaire</td><td>Décidé</td></tr><tr><th>Rapidité</th><td>Très rapide</td><td>Moins rapide</td></tr><tr><th>Réponse</th><td>Toujours la même pour un même stimulus</td><td>Variable</td></tr></table>
        <p>Le réflexe <b>protège</b> l’organisme : retirer la main d’une flamme, fermer la paupière. Le cerveau est informé ensuite : la douleur n’est ressentie qu’après le retrait.</p>`]],
    gui: { titre: "Nous faisons — La grenouille spinale", ctx: "On réalise quatre expériences sur des grenouilles dont l’encéphale a été détruit.", docs: [tReflexe], q: [
      qcm("I4", "Dans quelle expérience la patte pincée se replie-t-elle ?", ["L’expérience 1", "L’expérience 2", "L’expérience 3", "L’expérience 4"], "Première ligne : flexion de la patte gauche."),
      qcm("R2", "Que montre l’expérience 1, réalisée sans encéphale ?", ["La réaction n’a pas besoin du cerveau : c’est un réflexe", "La grenouille décide de plier la patte", "Le cerveau commande la flexion", "La grenouille ne sent rien"], "L’encéphale est détruit, et la réaction existe quand même."),
      qcm("R2", "On compare les expériences 1 et 4. Que peut-on conclure ?", ["La moelle épinière est le centre nerveux de ce réflexe", "La peau est le centre nerveux", "Le nerf est inutile", "La moelle épinière est inutile"], "Sans moelle épinière, plus aucune réaction.")] },
    aut: { titre: "Tu fais — L’arc réflexe", ctx: "Utilise le tableau et tes connaissances.", docs: [tReflexe], q: [
      qcm("R2", "On compare les expériences 1 et 2. Quel est le rôle de la peau ?", ["Elle reçoit le stimulus : c’est le récepteur", "Elle commande le mouvement", "Elle conduit le message moteur", "Elle n’a aucun rôle"], "Peau anesthésiée : plus de réaction."),
      ordre("K", "Remets dans l’ordre les éléments de l’arc réflexe.", ["Récepteur (peau)", "Conducteur sensitif", "Centre nerveux (moelle épinière)", "Conducteur moteur", "Effecteur (muscle)"], "C’est le trajet du message nerveux."),
      assoc("K", "Réflexe médullaire ou mouvement volontaire ?", ["Retirer la main d’une plaque brûlante", "Écrire son prénom", "Le genou qui se détend quand le médecin tape sous la rotule", "Lever la main pour répondre"], ["Mouvement volontaire", "Réflexe médullaire"], [1, 0, 1, 0], "Le réflexe est involontaire et immédiat ; le mouvement volontaire est décidé."),
      qcm("R1", "Pourquoi retire-t-on la main avant de ressentir la brûlure ?", ["Le trajet du réflexe passe par la moelle épinière : il est plus court que le trajet jusqu’au cerveau", "Le cerveau commande le retrait", "La douleur n’existe pas", "Le muscle décide seul"], "Le message atteint la moelle et repart vers le muscle avant d’arriver au cortex."),
      vf([["Un réflexe est involontaire.", true], ["Le centre nerveux d’un réflexe médullaire est le cerveau.", false], ["Pour un même stimulus, la réponse réflexe est toujours la même.", true], ["Le muscle est l’effecteur du réflexe.", true]], "Le centre nerveux du réflexe médullaire est la moelle épinière.")] },
    clo: `<ul><li>Un <b>réflexe médullaire</b> est une réaction involontaire, rapide et toujours identique, dont le centre est la <b>moelle épinière</b>.</li><li><b>Arc réflexe</b> : récepteur → conducteur sensitif → centre nerveux → conducteur moteur → effecteur.</li><li>Les réflexes protègent l’organisme.</li><li>Pour trouver le rôle d’un élément, on le supprime en ne changeant rien d’autre.</li></ul>`
  });

  // ---------- Chapitre 1, séquence 5 ----------
  const gAlcool = graph("Quantité d’alcool dans le sang d’un adulte après la même boisson alcoolisée, dans deux situations", "Temps (heures)", "Alcool dans le sang (g/L)", 6, 1,
    [["Boisson prise à jeun", [[0, 0], [0.5, 0.6], [1, 0.8], [2, 0.6], [3, 0.45], [4, 0.3], [5, 0.15], [6, 0]]], ["Boisson prise au cours d’un repas", [[0, 0], [0.5, 0.25], [1, 0.45], [1.5, 0.5], [2, 0.45], [3, 0.3], [4, 0.15], [5, 0], [6, 0]]]]);
  const tReaction = table("Effet de l’alcool sur la conduite", ["Alcool dans le sang", "0 g/L", "0,5 g/L", "0,8 g/L", "1,2 g/L"], [["Risque d’accident mortel, par rapport à un conducteur sobre", "× 1", "× 2", "× 10", "× 35"]]);
  L(21, [1, 0, 4], {
    titre: "L’hygiène du système nerveux",
    objectif: "À la fin de la leçon, je sais expliquer les effets de l’alcool, des drogues et du manque de sommeil sur le système nerveux, et proposer des règles d’hygiène.",
    reussite: ["Je compare deux courbes tracées sur un même graphique.", "Je relie une substance à son effet sur le système nerveux.", "Je cite quatre règles d’hygiène du système nerveux."],
    pre: [`<p>Le système nerveux reçoit les messages, les traite et commande les mouvements, volontaires ou réflexes (leçons 17 à 20). Tout ce qui perturbe les neurones perturbe ces fonctions.</p>`, [
      qcm("K", "Quelle cellule conduit les messages nerveux ?", ["Le neurone", "Le globule rouge", "La fibre musculaire", "La plaquette"], "C’est l’unité du système nerveux."),
      qcm("K", "Le temps qui sépare un signal de la réaction s’appelle :", ["le temps de réaction", "le temps de digestion", "la fréquence cardiaque", "le débit"], "Il s’allonge quand le système nerveux est perturbé.")]],
    mod: [["Je fais 1 — Je compare deux courbes", `
        <p class="ctx">Un adulte boit la même boisson alcoolisée, une fois à jeun, une autre fois pendant un repas. On mesure l’alcool dans son sang.</p>
        <ol><li><b>Je repère les variables.</b> Variable que l’on fait varier : à jeun ou pendant un repas. Variable mesurée : la quantité d’alcool dans le sang.</li>
        <li><b>Je cherche le maximum de chaque courbe.</b> « À jeun : 0,8 g/L, atteint en 1 heure. Pendant un repas : 0,5 g/L, atteint en 1 h 30. »</li>
        <li><b>Je compare.</b> « Le maximum est plus élevé et atteint plus vite à jeun. »</li>
        <li><b>Je regarde la fin.</b> « Dans les deux cas, il faut plusieurs heures pour que l’alcool disparaisse : environ 6 heures à jeun. Rien n’accélère cette élimination, ni le café, ni l’eau. »</li></ol>
        <p>L’alcool passe très vite dans le sang, puis atteint le cerveau : il ralentit la transmission des messages nerveux. Le temps de réaction s’allonge, la vision se rétrécit, les gestes sont moins précis.</p>`],
      ["Je fais 2 — Je formule des règles d’hygiène", `
        <table class="t"><tr><th>Ce qui agresse le système nerveux</th><th>Effets</th></tr>
        <tr><td>L’alcool</td><td>Allonge le temps de réaction, trouble l’équilibre et le jugement ; à la longue, détruit des neurones et crée une dépendance</td></tr>
        <tr><td>Les drogues (cannabis, cocaïne, héroïne…)</td><td>Modifient la transmission des messages entre neurones : hallucinations, perte de mémoire, dépendance</td></tr>
        <tr><td>Le tabac (nicotine)</td><td>Dépendance</td></tr>
        <tr><td>Le manque de sommeil</td><td>Baisse de l’attention et de la mémoire, irritabilité</td></tr>
        <tr><td>Le bruit intense, les écrans tard le soir</td><td>Fatigue nerveuse, troubles du sommeil, baisse de l’audition</td></tr></table>
        <p class="def">Une <b>dépendance</b> est le besoin irrésistible de reprendre une substance, avec un malaise quand on en est privé.</p>
        <p><b>Règles</b> : dormir suffisamment (8 à 9 heures à ton âge) et à heures régulières ; refuser l’alcool, le tabac et les drogues ; avoir une alimentation équilibrée ; pratiquer une activité physique ; limiter le bruit et les écrans.</p>`]],
    gui: { titre: "Nous faisons — L’alcool dans le sang", ctx: "Un adulte boit la même boisson alcoolisée dans deux situations.", docs: [gAlcool], q: [
      num("I1", "Quelle est la quantité maximale d’alcool dans le sang quand la boisson est prise à jeun ?", 0.8, "g/L", "Le sommet de la courbe « à jeun », à 1 heure : 0,8 g/L.", 0.03),
      qcm("I1", "Quel est le maximum atteint quand la boisson est prise au cours d’un repas ?", ["0,5 g/L, au bout de 1 h 30", "0,8 g/L, au bout de 1 heure", "0,25 g/L, au bout de 30 minutes", "1 g/L, au bout de 2 heures"], "On lit le sommet de la seconde courbe."),
      qcm("R2", "Que montre la comparaison des deux courbes ?", ["À jeun, l’alcool passe plus vite et en plus grande quantité dans le sang", "Le repas augmente la quantité d’alcool dans le sang", "Le repas n’a aucun effet", "L’alcool disparaît en quelques minutes"], "0,8 g/L en 1 heure à jeun, alors que 0,5 g/L en 1 h 30 pendant un repas.")] },
    aut: { titre: "Tu fais — L’alcool et la conduite", ctx: "Le tableau indique comment le risque d’accident mortel évolue avec la quantité d’alcool dans le sang du conducteur.", docs: [tReaction], q: [
      qcm("I4", "Par combien le risque est-il multiplié à 0,8 g/L ?", ["Par 10", "Par 2", "Par 35", "Par 1"], "Colonne « 0,8 g/L »."),
      qcm("I4", "Comment varie le risque quand la quantité d’alcool augmente ?", ["Il augmente très fortement : il est multiplié par 35 à 1,2 g/L", "Il diminue", "Il reste constant", "Il augmente un peu : il double à 1,2 g/L"], "On lit la ligne de gauche à droite."),
      qcm("R1", "Pourquoi l’alcool augmente-t-il le risque d’accident ?", ["Il ralentit la transmission des messages nerveux : le temps de réaction s’allonge", "Il améliore la vision", "Il accélère les réflexes", "Il augmente l’attention"], "Le conducteur réagit plus tard et moins bien."),
      assoc("K", "Associe chaque cause à son effet sur le système nerveux.", ["L’alcool", "Le manque de sommeil", "Les drogues", "Le bruit intense"], ["Hallucinations et dépendance", "Baisse de l’audition et fatigue nerveuse", "Allongement du temps de réaction", "Baisse de l’attention et de la mémoire"], [2, 3, 0, 1], "Chaque agression a ses effets propres."),
      vf([["Boire du café fait disparaître l’alcool du sang.", false], ["Une dépendance est un besoin irrésistible de reprendre une substance.", true], ["Un adolescent a besoin de 8 à 9 heures de sommeil.", true], ["Les drogues modifient la transmission des messages nerveux.", true]], "Seul le temps élimine l’alcool.")] },
    clo: `<ul><li>L’<b>alcool</b> ralentit la transmission des messages nerveux : temps de réaction plus long, gestes imprécis ; il s’élimine lentement.</li><li>Les <b>drogues</b> perturbent la communication entre les neurones et créent une <b>dépendance</b>.</li><li>Le <b>manque de sommeil</b>, le <b>bruit</b> et l’excès d’écrans fatiguent le système nerveux.</li><li>Règles : sommeil suffisant, refus de l’alcool, du tabac et des drogues, alimentation équilibrée, activité physique.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 1 ----------
  const tAntago = table("État de deux muscles du bras pendant deux mouvements", ["Mouvement de l’avant-bras", "Biceps (devant le bras)", "Triceps (derrière le bras)"], [["Flexion", "Contracté : court, épais, dur", "Relâché : long, mince, mou"], ["Extension", "Relâché : long, mince, mou", "Contracté : court, épais, dur"]]);
  L(22, [1, 1, 0], {
    titre: "Le rôle et les caractéristiques du muscle strié squelettique",
    objectif: "À la fin de la leçon, je sais citer les propriétés du muscle strié squelettique et expliquer un mouvement par le jeu de deux muscles antagonistes.",
    reussite: ["Je définis les trois propriétés du muscle.", "Je décris un muscle contracté.", "J’explique la flexion et l’extension de l’avant-bras."],
    pre: [`<p>Le <b>muscle</b> est l’<b>effecteur</b> des mouvements volontaires et des réflexes : il se contracte quand un message nerveux moteur lui parvient (leçons 18 et 20).</p>`, [
      qcm("K", "Quel organe reçoit le message nerveux moteur et produit le mouvement ?", ["Le muscle", "La peau", "L’os", "Le nerf sensitif"], "C’est l’effecteur."),
      qcm("K", "Par quoi un muscle est-il relié aux os ?", ["Par des tendons", "Par des nerfs", "Par des veines", "Par la peau"], "Les tendons sont blancs et très résistants.")]],
    mod: [["Je fais 1 — Je mets en évidence les propriétés du muscle", `
        <p class="ctx">On isole le muscle du mollet d’une grenouille, avec son nerf, et on réalise trois essais.</p>
        <table class="t"><tr><th>Ce que l’on fait</th><th>Ce que l’on observe</th><th>Propriété</th></tr>
        <tr><td>On stimule le muscle ou son nerf (choc électrique)</td><td>Le muscle réagit</td><td><b>Excitabilité</b> : il répond à une stimulation</td></tr>
        <tr><td>On observe sa réaction</td><td>Il se raccourcit, s’épaissit et durcit</td><td><b>Contractilité</b> : il se contracte</td></tr>
        <tr><td>On l’étire avec une masse, puis on la retire</td><td>Il s’allonge, puis reprend sa longueur</td><td><b>Élasticité</b></td></tr></table>
        <p>« Je décris un muscle contracté par trois mots : plus <b>court</b>, plus <b>épais</b>, plus <b>dur</b>. Son volume, lui, ne change pas. »</p>
        <p class="def">Le <b>muscle strié squelettique</b> est attaché aux os par des tendons. En se contractant, il tire sur l’os et le déplace autour de l’articulation.</p>`],
      ["Je fais 2 — J’explique un mouvement", `
        <p>Un muscle ne sait que <b>tirer</b> : il ne peut pas pousser. Pour un mouvement dans les deux sens, il en faut donc deux.</p>
        <table class="t"><tr><th>Mouvement</th><th>Biceps</th><th>Triceps</th></tr><tr><th>Flexion de l’avant-bras</th><td>Contracté</td><td>Relâché</td></tr><tr><th>Extension de l’avant-bras</th><td>Relâché</td><td>Contracté</td></tr></table>
        <p>« Je lis ligne par ligne. Flexion : le biceps se contracte et tire l’avant-bras vers le haut ; pendant ce temps, le triceps se relâche. Extension : c’est l’inverse. »</p>
        <p class="def">Deux muscles qui ont des actions opposées sur une même articulation sont des muscles <b>antagonistes</b>.</p>
        <p>Le biceps est le <b>fléchisseur</b>, le triceps l’<b>extenseur</b>.</p>
        <p><b>Erreur fréquente</b> : croire que le muscle « gonfle » parce qu’il grossit. Il s’épaissit parce qu’il se raccourcit.</p>`]],
    gui: { titre: "Nous faisons — Biceps et triceps", ctx: "Le tableau décrit l’état des deux muscles du bras pendant la flexion et l’extension de l’avant-bras.", docs: [tAntago], q: [
      qcm("I4", "Dans quel état se trouve le triceps pendant la flexion ?", ["Relâché", "Contracté", "Déchiré", "Absent"], "Ligne « Flexion », colonne « Triceps »."),
      qcm("I4", "Quel muscle se contracte pendant l’extension ?", ["Le triceps", "Le biceps", "Les deux", "Aucun"], "Ligne « Extension » : le triceps est contracté."),
      qcm("R2", "Pourquoi dit-on que le biceps et le triceps sont antagonistes ?", ["Quand l’un se contracte, l’autre se relâche : leurs actions sont opposées", "Ils se contractent toujours ensemble", "Ils sont attachés au même tendon", "Ils sont de la même taille"], "On le lit dans les deux lignes du tableau.")] },
    aut: { titre: "Tu fais — Les propriétés du muscle", ctx: "Utilise le tableau et tes connaissances.", docs: [tAntago], q: [
      qcm("I4", "Comment est le biceps pendant la flexion ?", ["Court, épais et dur", "Long, mince et mou", "Long et dur", "Court et mou"], "Ligne « Flexion », colonne « Biceps »."),
      assoc("K", "Associe chaque propriété à sa définition.", ["L’excitabilité", "La contractilité", "L’élasticité"], ["Le muscle reprend sa longueur après avoir été étiré", "Le muscle répond à une stimulation", "Le muscle se raccourcit et s’épaissit"], [1, 2, 0], "Répondre, se contracter, reprendre sa longueur."),
      trous("K", "Complète.", "Pendant la flexion de l’avant-bras, le {0} se contracte et le {1} se relâche : ce sont des muscles {2}.", [["biceps", "triceps", "tendon"], ["triceps", "biceps", "cœur"], ["antagonistes", "identiques", "lisses"]], "Le fléchisseur se contracte, l’extenseur se relâche."),
      qcm("R1", "Pourquoi faut-il deux muscles pour plier puis tendre le bras ?", ["Un muscle ne peut que tirer, jamais pousser", "Un muscle se fatigue trop vite", "Un muscle n’est pas excitable", "Un muscle n’a pas de tendon"], "Chaque muscle tire l’os dans un sens."),
      vf([["Un muscle contracté est plus court et plus épais.", true], ["Le volume du muscle augmente beaucoup pendant la contraction.", false], ["Les tendons relient les muscles aux os.", true], ["Le triceps est le muscle fléchisseur de l’avant-bras.", false]], "Le volume ne change pas ; le triceps est l’extenseur.")] },
    clo: `<ul><li>Propriétés du muscle : <b>excitabilité</b>, <b>contractilité</b>, <b>élasticité</b>.</li><li>Un muscle contracté est plus court, plus épais et plus dur ; son volume ne change pas.</li><li>Le muscle tire sur l’os par l’intermédiaire des <b>tendons</b>.</li><li>Les muscles <b>antagonistes</b> ont des actions opposées : biceps (fléchisseur) et triceps (extenseur).</li></ul>`
  });

  // ---------- Chapitre 2, séquence 2 ----------
  const tIrrig = table("Un kilogramme de muscle, au repos et en activité (valeurs arrondies, par heure)", ["", "Au repos", "En activité"], [["Volume de sang qui traverse le muscle", "12 L", "56 L"], ["Dioxygène consommé", "0,3 L", "5,2 L"], ["Glucose consommé", "2 g", "8,4 g"], ["Chaleur dégagée", "Faible", "Forte"]]);
  L(23, [1, 1, 1], {
    titre: "La structure du muscle strié squelettique",
    objectif: "À la fin de la leçon, je sais décrire la structure du muscle, de l’organe à la cellule, et expliquer ses besoins.",
    reussite: ["Je range les éléments du muscle du plus grand au plus petit.", "Je décris la fibre musculaire.", "Je relie l’irrigation du muscle à ses besoins en énergie."],
    pre: [`<p>Le muscle se contracte (leçon 22). Cette contraction demande de l’<b>énergie</b>, libérée par la respiration cellulaire (leçon 10).</p>`, [
      qcm("K", "D’où vient l’énergie utilisée par les cellules ?", ["De la dégradation du glucose en présence de dioxygène", "De l’eau", "Du dioxyde de carbone", "Des tendons"], "C’est la respiration cellulaire."),
      qcm("K", "Un muscle contracté est :", ["plus court et plus épais", "plus long et plus mince", "plus mou", "identique"], "C’est la contractilité.")]],
    mod: [["Je fais 1 — Je descends de l’organe à la cellule", `
        <p class="ctx">J’observe un muscle à l’œil nu, puis à la loupe, puis au microscope : chaque fois, je vois plus petit.</p>
        <ol><li>« À l’œil nu : une partie rouge et renflée, le <b>ventre</b> du muscle, terminée par des <b>tendons</b> blancs. »</li>
        <li>« En coupe : le muscle est formé de <b>faisceaux</b>, séparés par un tissu qui contient des vaisseaux sanguins et des nerfs. »</li>
        <li>« À la loupe : chaque faisceau est formé de <b>fibres musculaires</b>, comme un câble fait de fils. »</li>
        <li>« Au microscope : chaque fibre est une <b>cellule</b> très allongée, qui contient <b>plusieurs noyaux</b> et montre des <b>stries</b> : une alternance de bandes claires et de bandes sombres. »</li></ol>
        <p class="def">La <b>fibre musculaire</b> est une cellule géante, à plusieurs noyaux, striée. C’est elle qui se contracte.</p>
        <p>Les stries sont dues aux <b>myofibrilles</b>, des filaments rangés dans le sens de la longueur. C’est pourquoi on parle de muscle <b>strié</b>.</p>`],
      ["Je fais 2 — Je relie la structure aux besoins", `
        <table class="t"><tr><th>Pour 1 kg de muscle, par heure</th><th>Au repos</th><th>En activité</th></tr><tr><th>Sang qui traverse le muscle</th><td>12 L</td><td>56 L</td></tr><tr><th>Dioxygène consommé</th><td>0,3 L</td><td>5,2 L</td></tr><tr><th>Glucose consommé</th><td>2 g</td><td>8,4 g</td></tr></table>
        <p>« Je compare les deux colonnes : en activité, le muscle reçoit 56 L de sang, <b>alors qu’</b>au repos il n’en reçoit que 12 L. Il consomme aussi plus de dioxygène et de glucose. »</p>
        <p>« Je relie : le sang apporte le dioxygène et le glucose ; la respiration cellulaire libère l’énergie de la contraction, et de la <b>chaleur</b>. C’est pourquoi le muscle est <b>richement irrigué</b>, et pourquoi on a chaud pendant un effort. »</p>
        <p>Chaque fibre reçoit aussi une terminaison d’un nerf moteur : sans message nerveux, pas de contraction.</p>`]],
    gui: { titre: "Nous faisons — Repos et activité", ctx: "On mesure ce qui se passe dans un kilogramme de muscle, au repos et en activité.", docs: [tIrrig], q: [
      num("I4", "Quel volume de sang traverse le muscle en activité, en une heure ?", 56, "L", "Première ligne, dernière colonne."),
      trous("C1", "Complète la comparaison.", "Au repos, le muscle est traversé par {0} L de sang par heure, alors qu’en activité il l’est par {1} L : son irrigation a {2}.", [["12", "56", "2"], ["56", "12", "5,2"], ["augmenté", "diminué", "cessé"]], "Première ligne du tableau."),
      qcm("R1", "Pourquoi l’irrigation du muscle augmente-t-elle pendant l’activité ?", ["Le muscle a besoin de plus de dioxygène et de glucose pour produire son énergie", "Le muscle fabrique du sang", "Le muscle se refroidit", "Le muscle n’a plus besoin d’énergie"], "Le sang livre ce que consomme la respiration cellulaire.")] },
    aut: { titre: "Tu fais — De l’organe à la cellule", ctx: "Utilise le tableau et tes connaissances.", docs: [tIrrig], q: [
      num("I4", "Quelle quantité de glucose le muscle en activité consomme-t-il en une heure ?", 8.4, "g", "Ligne « Glucose consommé », dernière colonne."),
      ordre("K", "Classe ces éléments du plus grand au plus petit.", ["Muscle", "Faisceau de fibres", "Fibre musculaire", "Myofibrille"], "Le muscle est formé de faisceaux, eux-mêmes formés de fibres, qui contiennent des myofibrilles."),
      qcm("K", "Comment reconnaît-on une fibre musculaire au microscope ?", ["C’est une cellule très allongée, à plusieurs noyaux, avec des stries", "C’est une cellule ronde à un seul noyau", "C’est une cellule sans noyau", "C’est une cellule étoilée"], "Allongée, plusieurs noyaux, striée."),
      qcm("R1", "Pourquoi a-t-on chaud pendant un effort ?", ["La respiration cellulaire des muscles libère de l’énergie, dont une partie sous forme de chaleur", "Le sang cesse de circuler", "Les muscles ne consomment plus de glucose", "Les tendons chauffent"], "La ligne « Chaleur dégagée » passe de faible à forte."),
      vf([["La fibre musculaire est une cellule.", true], ["Les tendons sont formés de fibres musculaires.", false], ["Le muscle est richement irrigué.", true], ["Les stries sont dues aux myofibrilles.", true]], "Les tendons ne se contractent pas : ils relient le muscle à l’os.")] },
    clo: `<ul><li>Muscle → <b>faisceaux</b> → <b>fibres musculaires</b> → <b>myofibrilles</b>.</li><li>La <b>fibre musculaire</b> : cellule très allongée, à plusieurs noyaux, striée.</li><li>Le muscle est <b>richement irrigué</b> : le sang lui apporte le dioxygène et le glucose nécessaires à la contraction.</li><li>En activité, il consomme davantage et dégage de la chaleur.</li></ul>`
  });

  // ---------- Chapitre 2, séquence 3 ----------
  const gFatigue = graph("Force développée par un muscle au cours d’un exercice répété, chez deux personnes", "Temps (min)", "Force (en % de la force de départ)", 10, 110,
    [["Personne entraînée", [[0, 100], [2, 100], [4, 95], [6, 90], [8, 80], [10, 70]]], ["Personne non entraînée", [[0, 100], [2, 90], [4, 70], [6, 50], [8, 30], [10, 15]]]]);
  L(24, [1, 1, 2], {
    titre: "L’hygiène du système musculaire",
    objectif: "À la fin de la leçon, je sais reconnaître les principaux accidents musculaires et proposer des règles pour les éviter.",
    reussite: ["Je distingue la crampe, la courbature, l’élongation et la déchirure.", "Je compare deux courbes de fatigue musculaire.", "Je cite les règles à respecter avant, pendant et après un effort."],
    pre: [`<p>Le muscle a besoin de <b>dioxygène</b>, de <b>glucose</b> et d’une bonne <b>irrigation</b> (leçon 23). Il est <b>élastique</b>, mais dans certaines limites (leçon 22).</p>`, [
      qcm("K", "Qu’apporte le sang au muscle ?", ["Du dioxygène et du glucose", "De l’urée", "Des fibres", "Des tendons"], "C’est ce que consomme la respiration cellulaire."),
      qcm("K", "L’élasticité du muscle est sa capacité à :", ["reprendre sa longueur après avoir été étiré", "répondre à une stimulation", "se raccourcir", "produire du sang"], "Au-delà d’une limite, les fibres s’abîment.")]],
    mod: [["Je fais 1 — Je reconnais un accident musculaire", `
        <p class="ctx">Je me pose deux questions : « Les fibres sont-elles <b>abîmées</b> ? La douleur est-elle <b>immédiate</b> ou <b>retardée</b> ? »</p>
        <table class="t"><tr><th>Accident</th><th>Ce qui se passe</th><th>Signes</th></tr>
        <tr><td>Crampe</td><td>Contraction involontaire et durable ; fibres intactes</td><td>Douleur vive, muscle dur ; elle cède à l’étirement</td></tr>
        <tr><td>Courbature</td><td>Petites lésions après un effort inhabituel</td><td>Douleur le lendemain, qui disparaît en quelques jours</td></tr>
        <tr><td>Élongation</td><td>Fibres étirées au-delà de leur limite, sans rupture</td><td>Douleur pendant l’effort</td></tr>
        <tr><td>Déchirure (claquage)</td><td>Rupture de fibres</td><td>Douleur brutale, arrêt immédiat, hématome</td></tr></table>
        <p>« Un sportif ressent une douleur brutale à la cuisse en plein sprint et ne peut plus courir : douleur immédiate, arrêt forcé. Je pense à une <b>déchirure</b>. »</p>
        <p>La <b>fatigue musculaire</b> est la baisse de la force d’un muscle qui travaille longtemps : ses réserves s’épuisent et les déchets s’accumulent.</p>`],
      ["Je fais 2 — Je formule des règles", `
        <table class="t"><tr><th>Moment</th><th>Règle</th><th>Pourquoi</th></tr>
        <tr><th>Avant l’effort</th><td>S’échauffer progressivement</td><td>L’irrigation et la température du muscle augmentent : il devient plus souple</td></tr>
        <tr><th>Pendant</th><td>Boire de l’eau ; doser son effort</td><td>La sueur fait perdre de l’eau et des sels minéraux : leur manque favorise les crampes</td></tr>
        <tr><th>Après</th><td>S’étirer doucement, se reposer</td><td>Le muscle récupère</td></tr>
        <tr><th>Tous les jours</th><td>Activité régulière, alimentation équilibrée, sommeil, bonne posture</td><td>Un muscle entraîné est plus fort et se fatigue moins vite</td></tr></table>
        <p>Porter un cartable trop lourd, ou sur une seule épaule, fatigue les muscles du dos et peut déformer la colonne vertébrale.</p>
        <p class="def">Le <b>dopage</b> est l’usage de substances pour augmenter artificiellement ses performances. Il est interdit et dangereux : accidents cardiaques, déchirures, troubles hormonaux, dépendance.</p>`]],
    gui: { titre: "Nous faisons — La fatigue musculaire", ctx: "Deux personnes répètent le même exercice pendant dix minutes. On mesure la force de leur muscle.", docs: [gFatigue], q: [
      num("I1", "Quelle est la force de la personne non entraînée au bout de 10 minutes ?", 15, "%", "On lit la courbe « non entraînée » à 10 minutes : 15 %.", 3),
      qcm("I1", "Comment évolue la force de la personne entraînée ?", ["Elle reste à 100 % pendant 2 minutes, puis diminue lentement jusqu’à 70 %", "Elle diminue rapidement jusqu’à 15 %", "Elle augmente jusqu’à 110 %", "Elle reste constante à 100 %"], "On décrit la courbe en deux segments, avec leurs valeurs."),
      qcm("R2", "Que montre la comparaison des deux courbes ?", ["L’entraînement retarde et diminue la fatigue musculaire", "L’entraînement accélère la fatigue", "L’entraînement n’a aucun effet", "Les deux personnes se fatiguent de la même façon"], "À 10 minutes : 70 % pour la personne entraînée, alors que 15 % pour l’autre.")] },
    aut: { titre: "Tu fais — Prévenir les accidents musculaires", ctx: "Utilise le graphique et tes connaissances.", docs: [gFatigue], q: [
      num("I1", "Quelle est la force de la personne non entraînée au bout de 6 minutes ?", 50, "%", "Courbe « non entraînée », à 6 minutes : 50 %.", 3),
      assoc("K", "Associe chaque accident à sa description.", ["La crampe", "La courbature", "L’élongation", "La déchirure"], ["Rupture de fibres : douleur brutale et arrêt immédiat", "Fibres trop étirées, sans rupture", "Contraction involontaire et durable", "Douleur qui apparaît le lendemain de l’effort"], [2, 3, 1, 0], "Contraction durable, douleur retardée, étirement excessif, rupture."),
      qcm("R1", "Pourquoi faut-il s’échauffer avant un effort ?", ["L’échauffement augmente l’irrigation et la température du muscle, qui devient plus souple", "L’échauffement fatigue le muscle", "L’échauffement remplace l’entraînement", "L’échauffement diminue l’irrigation"], "Un muscle froid se déchire plus facilement."),
      qcm("R2", "Un coureur a des crampes en fin de course, par forte chaleur. Quel conseil lui donner pour la prochaine fois ?", ["Boire régulièrement de l’eau pour compenser les pertes d’eau et de sels minéraux", "Ne pas boire pendant la course", "Courir sans s’échauffer", "Prendre un produit dopant"], "La déshydratation favorise les crampes."),
      vf([["Une activité physique régulière rend le muscle plus résistant à la fatigue.", true], ["Le dopage est sans danger pour la santé.", false], ["Une courbature disparaît en quelques jours.", true], ["Porter un cartable lourd sur une seule épaule est bon pour le dos.", false]], "Le dopage est interdit et dangereux ; le cartable se porte sur les deux épaules.")] },
    clo: `<ul><li>Accidents : <b>crampe</b> (contraction involontaire), <b>courbature</b> (douleur retardée), <b>élongation</b> (étirement excessif), <b>déchirure</b> (rupture de fibres).</li><li>Avant : s’échauffer. Pendant : boire, doser son effort. Après : s’étirer, se reposer.</li><li>L’entraînement régulier retarde la <b>fatigue musculaire</b>.</li><li>Bonne posture, alimentation équilibrée, sommeil ; le <b>dopage</b> est interdit et dangereux.</li></ul>`
  });
})();
