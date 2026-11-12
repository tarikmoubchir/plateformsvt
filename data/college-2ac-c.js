// 2AC — Thème 3 « L'Univers » et thème 4 « L'environnement ».
// Même modèle que college.js : enseignement explicite (ouverture, je fais, nous faisons, tu fais, je retiens).
(function () {
  const L = window.SVT.lecons["2AC"];

  // ---------- Thème 3, chapitre 1, séquence 1 ----------
  L.push({
    id: "2AC-L11", u: 2, c: 0, s: 0,
    titre: "Leçon 11 — Les phénomènes liés au mouvement de la Terre autour du Soleil",
    objectif: "À la fin de la leçon, je sais expliquer l’alternance du jour et de la nuit et l’origine des saisons.",
    reussite: ["Je distingue la rotation de la Terre de sa révolution.", "Je compare la durée du jour à différentes dates.", "J’explique les saisons par l’inclinaison de l’axe, et non par la distance au Soleil."],
    prerequis: {
      html: `<p>En 1AC, tu as vu que la Terre est une <b>planète</b> qui tourne autour d’une <b>étoile</b>, le Soleil.</p>`,
      quiz: [
        { id: "2AC-L11-a1", cap: "K", pts: 1, type: "qcm", enonce: "La Terre est :", options: ["une planète qui tourne autour du Soleil", "une étoile", "un satellite de la Lune", "le centre du système solaire"], rep: 0, retour: "C’est le Soleil qui est au centre du système solaire." },
        { id: "2AC-L11-a2", cap: "K", pts: 1, type: "qcm", enonce: "Combien de saisons compte une année au Maroc ?", options: ["Quatre", "Deux", "Douze", "Une"], rep: 0, retour: "Printemps, été, automne, hiver." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je distingue les deux mouvements de la Terre", html: `
        <p class="ctx">Pour chaque mouvement, je me pose trois questions : « Autour de quoi ? En combien de temps ? Avec quelle conséquence ? »</p>
        <table class="t"><tr><th></th><th>Rotation</th><th>Révolution</th></tr>
        <tr><th>Autour de quoi ?</th><td>Sur elle-même, autour de son axe</td><td>Autour du Soleil</td></tr><tr><th>Durée</th><td>24 heures</td><td>365 jours et un quart</td></tr>
        <tr><th>Conséquence</th><td>L’alternance du <b>jour</b> et de la <b>nuit</b></td><td>L’<b>année</b> et, avec l’axe incliné, les <b>saisons</b></td></tr></table>
        <p>« Il fait jour sur la moitié de la Terre tournée vers le Soleil, nuit sur l’autre. Comme la Terre tourne sur elle-même, chaque lieu passe du jour à la nuit en 24 heures. »</p>
        <p>L’<b>axe</b> de rotation de la Terre est <b>incliné</b>, et il garde toujours la même direction pendant que la Terre tourne autour du Soleil.</p>
        <ul><li>En <b>juin</b>, l’hémisphère Nord penche vers le Soleil : les rayons y arrivent plus droits, les jours sont longs. C’est l’<b>été</b> au Maroc.</li>
        <li>En <b>décembre</b>, l’hémisphère Nord penche à l’opposé : rayons plus obliques, jours courts. C’est l’<b>hiver</b>.</li></ul>
        <p>Dans l’hémisphère Sud, les saisons sont <b>inversées</b>.</p>` },
      { titre: "Je fais 2 — Je vérifie une idée avec des données", html: `
        <p>Une idée très répandue : « Il fait chaud en été parce que la Terre est plus près du Soleil. » Je la vérifie.</p>
        <table class="t"><tr><th>Date</th><th>Distance Terre–Soleil</th><th>Saison au Maroc</th></tr><tr><td>Début janvier</td><td>147 millions de km</td><td>Hiver</td></tr><tr><td>Début juillet</td><td>152 millions de km</td><td>Été</td></tr></table>
        <p>« En juillet, la Terre est à 152 millions de km du Soleil, <b>alors qu’</b>en janvier elle n’est qu’à 147 millions de km. La Terre est donc <b>plus loin</b> du Soleil en été. L’idée est <b>fausse</b>. »</p>
        <p class="def">Les saisons sont dues à l’<b>inclinaison de l’axe</b> de la Terre au cours de sa révolution autour du Soleil, et non à la distance.</p>
        <p>Quatre dates repères : le <b>21 juin</b> (solstice d’été, jour le plus long), le <b>21 décembre</b> (solstice d’hiver, jour le plus court), le <b>21 mars</b> et le <b>23 septembre</b> (équinoxes : le jour et la nuit ont la même durée).</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — La durée du jour à Rabat", contexte: "Le tableau donne la durée du jour et de la nuit à Rabat à quatre dates (valeurs arrondies à l’heure).", docs: [
        { type: "table", titre: "Durée du jour et de la nuit à Rabat", cols: ["Date", "21 mars", "21 juin", "23 septembre", "21 décembre"], rows: [["Durée du jour", "12 h", "14 h", "12 h", "10 h"], ["Durée de la nuit", "12 h", "10 h", "12 h", "14 h"]] }
      ], questions: [
        { id: "2AC-L11-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la durée du jour le 21 juin ?", rep: 14, tol: 0, unite: "h", retour: "Ligne « Durée du jour », colonne « 21 juin »." },
        { id: "2AC-L11-g2", cap: "I4", pts: 1, type: "qcm", enonce: "À quelles dates le jour et la nuit ont-ils la même durée ?", options: ["Le 21 mars et le 23 septembre", "Le 21 juin et le 21 décembre", "Le 21 mars et le 21 juin", "Jamais"], rep: 0, retour: "Ce sont les deux équinoxes : 12 h de jour, 12 h de nuit." },
        { id: "2AC-L11-g3", cap: "R1", pts: 1, type: "qcm", enonce: "Pourquoi la durée du jour change-t-elle au cours de l’année ?", options: ["L’axe de la Terre est incliné pendant qu’elle tourne autour du Soleil", "La Terre tourne plus vite en hiver", "Le Soleil s’éteint en hiver", "La Lune cache le Soleil en hiver"], rep: 0, retour: "Selon la position de la Terre sur son orbite, un hémisphère penche vers le Soleil ou à l’opposé." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — La distance et les saisons", contexte: "Le tableau donne la distance entre la Terre et le Soleil à deux moments de l’année.", docs: [
        { type: "table", titre: "Distance Terre–Soleil", cols: ["Date", "Début janvier", "Début juillet"], rows: [["Distance (millions de km)", "147", "152"], ["Saison au Maroc", "Hiver", "Été"]] }
      ], questions: [
        { id: "2AC-L11-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la distance Terre–Soleil au début de juillet ?", rep: 152, tol: 0, unite: "millions de km", retour: "Ligne « Distance », colonne « Début juillet »." },
        { id: "2AC-L11-t2", cap: "R3", pts: 1, type: "qcm", enonce: "Un élève affirme : « Il fait chaud en été parce que la Terre est plus près du Soleil. » Que montre le tableau ?", options: ["C’est faux : en été, la Terre est plus loin du Soleil qu’en hiver", "C’est vrai : en été, la Terre est plus près du Soleil", "Le tableau ne permet pas de répondre", "La distance ne change jamais"], rep: 0, retour: "152 millions de km en juillet, alors que 147 en janvier : l’explication par la distance ne tient pas." },
        { id: "2AC-L11-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque phénomène à sa cause.", gauche: ["L’alternance du jour et de la nuit", "La durée de l’année", "Les saisons"], droite: ["La révolution de la Terre autour du Soleil", "L’inclinaison de l’axe de la Terre au cours de sa révolution", "La rotation de la Terre sur elle-même"], rep: [2, 0, 1], retour: "Rotation : jour et nuit. Révolution : année. Axe incliné : saisons." },
        { id: "2AC-L11-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Quand c’est l’été au Maroc, quelle saison est-ce dans l’hémisphère Sud ?", options: ["L’hiver", "L’été", "Le printemps", "L’automne"], rep: 0, retour: "Quand l’hémisphère Nord penche vers le Soleil, l’hémisphère Sud penche à l’opposé." },
        { id: "2AC-L11-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La Terre fait un tour sur elle-même en 24 heures.", v: true }, { t: "La Terre fait le tour du Soleil en un mois.", v: false }, { t: "Le 21 juin est le jour le plus long de l’année au Maroc.", v: true }, { t: "Les saisons sont dues à la distance entre la Terre et le Soleil.", v: false }], retour: "La révolution dure un an ; les saisons viennent de l’inclinaison de l’axe." }
      ] }
    ],
    cloture: `<ul><li><b>Rotation</b> de la Terre sur elle-même en 24 h : alternance du <b>jour</b> et de la <b>nuit</b>.</li><li><b>Révolution</b> autour du Soleil en 365 jours et un quart : l’<b>année</b>.</li><li>Les <b>saisons</b> sont dues à l’<b>inclinaison de l’axe</b> de la Terre, pas à la distance au Soleil.</li><li>Solstices : 21 juin et 21 décembre. Équinoxes : 21 mars et 23 septembre.</li><li>Les saisons sont inversées dans les deux hémisphères.</li></ul>`
  });

  // ---------- Thème 3, chapitre 1, séquence 2 ----------
  const gMaree = {
    type: "graph", titre: "Hauteur de la mer dans un port de l’Atlantique pendant une journée", xlab: "Heure", ylab: "Hauteur de l’eau (m)", xmax: 24, ymax: 4,
    series: [{ nom: "Hauteur de l’eau", pts: [[0, 3.2], [6, 0.8], [12, 3.4], [18, 0.9], [24, 3.3]] }]
  };
  L.push({
    id: "2AC-L12", u: 2, c: 0, s: 1,
    titre: "Leçon 12 — Les phénomènes liés au mouvement de la Lune autour de la Terre",
    objectif: "À la fin de la leçon, je sais expliquer les phases de la Lune, les éclipses et les marées.",
    reussite: ["Je cite les phases de la Lune dans l’ordre.", "Je distingue une éclipse de Soleil d’une éclipse de Lune.", "Je lis une courbe de marée, segment par segment."],
    prerequis: {
      html: `<p>La <b>Lune</b> est le satellite naturel de la Terre. Elle ne produit pas de lumière : elle renvoie celle du Soleil (1AC).</p>`,
      quiz: [
        { id: "2AC-L12-a1", cap: "K", pts: 1, type: "qcm", enonce: "La Lune est :", options: ["un satellite naturel de la Terre", "une étoile", "une planète", "une galaxie"], rep: 0, retour: "Elle tourne autour de la Terre." },
        { id: "2AC-L12-a2", cap: "K", pts: 1, type: "qcm", enonce: "D’où vient la lumière de la Lune ?", options: ["Du Soleil : la Lune la renvoie", "De la Lune elle-même", "De la Terre", "Des étoiles"], rep: 0, retour: "La Lune est éclairée par le Soleil." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — J’explique les phases de la Lune", html: `
        <p class="ctx">Je pars de deux faits : le Soleil éclaire toujours <b>une moitié</b> de la Lune ; la Lune fait le tour de la Terre en un mois environ.</p>
        <p>« La Lune ne change pas de forme. Ce qui change, c’est la <b>partie de sa moitié éclairée que je vois</b> depuis la Terre, selon sa position. »</p>
        <table class="t"><tr><th>Phase</th><th>Ce que l’on voit</th><th>Jour du cycle (environ)</th></tr>
        <tr><td>Nouvelle lune</td><td>Rien : la face éclairée est tournée vers le Soleil</td><td>1</td></tr><tr><td>Premier quartier</td><td>Un demi-disque</td><td>8</td></tr>
        <tr><td>Pleine lune</td><td>Le disque entier</td><td>15</td></tr><tr><td>Dernier quartier</td><td>L’autre demi-disque</td><td>22</td></tr></table>
        <p>Le cycle complet dure environ <b>29 jours et demi</b> : c’est le mois lunaire, qui sert de base au calendrier de l’Hégire.</p>
        <p><b>Erreur fréquente</b> : les phases ne sont <b>pas</b> dues à l’ombre de la Terre sur la Lune.</p>` },
      { titre: "Je fais 2 — J’explique les éclipses et les marées", html: `
        <p>Pour une éclipse, je me demande : « <b>Qui est au milieu ?</b> »</p>
        <table class="t"><tr><th></th><th>Éclipse de Soleil</th><th>Éclipse de Lune</th></tr>
        <tr><th>Alignement</th><td>Soleil – <b>Lune</b> – Terre</td><td>Soleil – <b>Terre</b> – Lune</td></tr><tr><th>Ce qui se passe</th><td>La Lune cache le Soleil ; son ombre tombe sur la Terre</td><td>La Lune passe dans l’ombre de la Terre</td></tr>
        <tr><th>Phase de la Lune</th><td>Nouvelle lune</td><td>Pleine lune</td></tr></table>
        <p>Il n’y a pas d’éclipse chaque mois : l’alignement parfait est rare. On ne regarde jamais une éclipse de Soleil sans lunettes spéciales.</p>
        <p class="def">Les <b>marées</b> sont les montées et les descentes régulières du niveau de la mer. Elles sont dues à l’<b>attraction</b> exercée par la Lune, et aussi par le Soleil, sur l’eau des océans.</p>
        <p>« Sur une courbe de marée, je repère les sommets (marée haute) et les creux (marée basse), puis je décris chaque segment : marée montante ou marée descendante. »</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Une journée de marée", contexte: "On a relevé la hauteur de l’eau dans un port pendant 24 heures.", docs: [gMaree], questions: [
        { id: "2AC-L12-g1", cap: "I1", pts: 1, type: "num", enonce: "Quelle est la hauteur de l’eau à 6 heures ?", rep: 0.8, tol: 0.15, unite: "m", retour: "On part de 6 sur l’axe horizontal, on monte jusqu’à la courbe : 0,8 m. C’est une marée basse." },
        { id: "2AC-L12-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Entre 6 heures et 12 heures, la hauteur de l’eau :", options: ["augmente de 0,8 m à 3,4 m : la marée monte", "diminue de 3,4 m à 0,8 m : la marée descend", "reste égale à 0,8 m", "augmente de 0,9 m à 3,3 m"], rep: 0, retour: "On donne le sens et les deux valeurs du segment." },
        { id: "2AC-L12-g3", cap: "R1", pts: 1, type: "qcm", enonce: "Quelle est la cause des marées ?", options: ["L’attraction de la Lune, et du Soleil, sur l’eau des océans", "Le vent", "La pluie", "La rotation de la Lune sur elle-même"], rep: 0, retour: "La Lune, plus proche, a l’effet le plus important." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Un mois lunaire", contexte: "On a noté le jour où chaque phase de la Lune a été observée.", docs: [
        { type: "table", titre: "Phases de la Lune au cours d’un cycle", cols: ["Phase", "Nouvelle lune", "Premier quartier", "Pleine lune", "Dernier quartier", "Nouvelle lune suivante"], rows: [["Jour", "1", "8", "15", "22", "30"]] }
      ], questions: [
        { id: "2AC-L12-t1", cap: "I4", pts: 1, type: "num", enonce: "Quel jour du cycle observe-t-on la pleine lune ?", rep: 15, tol: 0, unite: "", retour: "Colonne « Pleine lune »." },
        { id: "2AC-L12-t2", cap: "K", pts: 1, type: "ordre", enonce: "Remets les phases dans l’ordre, à partir de la nouvelle lune.", items: ["Nouvelle lune", "Premier quartier", "Pleine lune", "Dernier quartier"], retour: "Environ une semaine sépare deux phases successives." },
        { id: "2AC-L12-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque phénomène à son explication.", gauche: ["L’éclipse de Soleil", "L’éclipse de Lune", "Les marées", "Les phases de la Lune"], droite: ["La Terre est entre le Soleil et la Lune", "On voit une partie variable de la moitié éclairée de la Lune", "La Lune est entre le Soleil et la Terre", "La Lune attire l’eau des océans"], rep: [2, 0, 3, 1], retour: "Pour les éclipses : qui est au milieu ? La Lune (éclipse de Soleil) ou la Terre (éclipse de Lune)." },
        { id: "2AC-L12-t4", cap: "R3", pts: 1, type: "qcm", enonce: "Un élève affirme : « Les phases de la Lune sont dues à l’ombre de la Terre. » Que lui réponds-tu ?", options: ["C’est faux : l’ombre de la Terre ne touche la Lune que pendant une éclipse de Lune", "C’est vrai", "C’est vrai, mais seulement en hiver", "C’est faux : la Lune change réellement de forme"], rep: 0, retour: "Les phases viennent de la position de la Lune : on voit plus ou moins sa moitié éclairée." },
        { id: "2AC-L12-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La Lune produit sa propre lumière.", v: false }, { t: "Une éclipse de Soleil se produit à la nouvelle lune.", v: true }, { t: "Le cycle des phases de la Lune dure environ un mois.", v: true }, { t: "Il y a une éclipse de Lune à chaque pleine lune.", v: false }], retour: "L’alignement exact Soleil–Terre–Lune est rare." }
      ] }
    ],
    cloture: `<ul><li>Les <b>phases</b> : on voit une partie variable de la moitié éclairée de la Lune ; le cycle dure environ 29 jours et demi.</li><li>Ordre : nouvelle lune, premier quartier, pleine lune, dernier quartier.</li><li><b>Éclipse de Soleil</b> : la Lune est entre le Soleil et la Terre. <b>Éclipse de Lune</b> : la Terre est entre le Soleil et la Lune.</li><li>Les <b>marées</b> sont dues à l’attraction de la Lune et du Soleil sur les océans.</li></ul>`
  });

  // ---------- Thème 3, chapitre 2, séquence 1 ----------
  L.push({
    id: "2AC-L13", u: 2, c: 1, s: 0,
    titre: "Leçon 13 — Le cycle de l’eau",
    objectif: "À la fin de la leçon, je sais décrire les étapes du cycle de l’eau et montrer que la quantité d’eau sur Terre reste constante.",
    reussite: ["Je cite les étapes du cycle dans l’ordre.", "Je nomme le changement d’état à chaque étape.", "Je fais un bilan chiffré à partir d’un tableau."],
    prerequis: {
      html: `<p>En 1AC, tu as étudié l’<b>hydrosphère</b> : l’eau de la Terre, présente sous trois états dans les océans, les glaciers, le sous-sol, les rivières et l’atmosphère.</p>`,
      quiz: [
        { id: "2AC-L13-a1", cap: "K", pts: 1, type: "qcm", enonce: "Quel est le plus grand réservoir d’eau de la Terre ?", options: ["Les océans", "Les rivières", "Les nuages", "Les lacs"], rep: 0, retour: "Les mers et les océans contiennent environ 97 % de l’eau." },
        { id: "2AC-L13-a2", cap: "K", pts: 1, type: "qcm", enonce: "Le passage de l’eau liquide à la vapeur d’eau s’appelle :", options: ["l’évaporation", "la fusion", "la solidification", "la condensation"], rep: 0, retour: "Liquide → gaz : évaporation (ou vaporisation)." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je suis une goutte d’eau", html: `
        <p class="ctx">Je pars de l’océan et, à chaque étape, je me demande : « Où va l’eau ? Change-t-elle d’état ? »</p>
        <table class="t"><tr><th>Étape</th><th>Ce qui se passe</th><th>Changement d’état</th></tr>
        <tr><th>1. Évaporation</th><td>Le Soleil chauffe l’eau des océans, qui passe dans l’air. Les plantes rejettent aussi de l’eau : c’est la transpiration</td><td>Liquide → gaz</td></tr>
        <tr><th>2. Condensation</th><td>En altitude, l’air se refroidit : la vapeur forme de fines gouttelettes, les nuages</td><td>Gaz → liquide</td></tr>
        <tr><th>3. Précipitations</th><td>L’eau retombe : pluie, neige, grêle</td><td>—</td></tr>
        <tr><th>4. Ruissellement</th><td>Une partie de l’eau coule à la surface vers les rivières</td><td>—</td></tr>
        <tr><th>5. Infiltration</th><td>Une autre partie pénètre dans le sol et alimente les nappes souterraines</td><td>—</td></tr>
        <tr><th>6. Retour à l’océan</th><td>Les rivières et les nappes ramènent l’eau à la mer</td><td>—</td></tr></table>
        <p class="def">Le <b>cycle de l’eau</b> est la circulation permanente de l’eau entre les océans, l’atmosphère et les continents. Son moteur est l’<b>énergie du Soleil</b>.</p>
        <p><b>Erreur fréquente</b> : un nuage n’est pas de la vapeur d’eau. La vapeur est un gaz invisible ; le nuage est formé de gouttelettes liquides ou de cristaux de glace.</p>` },
      { titre: "Je fais 2 — Je fais le bilan", html: `
        <p>Chaque année, les échanges d’eau sont à peu près les suivants (en milliers de kilomètres cubes) :</p>
        <table class="t"><tr><th>Échange</th><th>Quantité par an</th></tr><tr><td>Évaporation au-dessus des océans</td><td>425</td></tr><tr><td>Précipitations sur les océans</td><td>385</td></tr>
        <tr><td>Précipitations sur les continents</td><td>110</td></tr><tr><td>Évaporation et transpiration sur les continents</td><td>70</td></tr></table>
        <p>« Sur les continents, il tombe 110 et il s’évapore 70. Je calcule ce qui reste : 110 − 70 = <b>40</b>. Ces 40 retournent à l’océan par les rivières et les nappes. »</p>
        <p>« L’océan perd 425 par évaporation. Il reçoit 385 de pluie et 40 des rivières : 385 + 40 = <b>425</b>. Ce qu’il perd, il le retrouve. »</p>
        <p>Je conclus : la quantité totale d’eau sur la Terre reste <b>constante</b>. C’est toujours la même eau qui circule.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Le bilan de l’eau", contexte: "Le tableau donne les échanges d’eau annuels à la surface de la Terre (en milliers de kilomètres cubes, valeurs arrondies).", docs: [
        { type: "table", titre: "Échanges d’eau en une année", cols: ["Échange", "Quantité (milliers de km³)"], rows: [["Évaporation au-dessus des océans", "425"], ["Précipitations sur les océans", "385"], ["Précipitations sur les continents", "110"], ["Évaporation et transpiration sur les continents", "70"]] }
      ], questions: [
        { id: "2AC-L13-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle quantité d’eau tombe chaque année sur les continents ?", rep: 110, tol: 0, unite: "milliers de km³", retour: "Troisième ligne du tableau." },
        { id: "2AC-L13-g2", cap: "R5", pts: 1, type: "num", enonce: "Sur les continents, il tombe 110 et il s’évapore 70. Quelle quantité retourne à l’océan par les rivières et les nappes ?", rep: 40, tol: 0, unite: "milliers de km³", retour: "110 − 70 = 40." },
        { id: "2AC-L13-g3", cap: "R2", pts: 1, type: "qcm", enonce: "L’océan perd 425 par évaporation et reçoit 385 + 40. Que peut-on en déduire ?", options: ["La quantité d’eau de l’océan reste constante", "L’océan se vide peu à peu", "L’océan déborde chaque année", "Il pleut plus sur l’océan qu’il ne s’en évapore"], rep: 0, retour: "385 + 40 = 425 : les entrées compensent exactement les sorties." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Les étapes et les changements d’état", contexte: "Le tableau rappelle les changements d’état de l’eau.", docs: [
        { type: "table", titre: "Changements d’état de l’eau", cols: ["Nom", "Évaporation", "Condensation", "Solidification", "Fusion"], rows: [["Passage", "Liquide → gaz", "Gaz → liquide", "Liquide → solide", "Solide → liquide"]] }
      ], questions: [
        { id: "2AC-L13-t1", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les étapes du cycle de l’eau.", items: ["Évaporation de l’eau des océans", "Condensation : formation des nuages", "Précipitations", "Ruissellement et infiltration", "Retour de l’eau à l’océan"], retour: "L’eau monte, forme les nuages, retombe, circule sur et dans le sol, puis revient à la mer." },
        { id: "2AC-L13-t2", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque mot à sa définition.", gauche: ["Évaporation", "Condensation", "Fusion", "Infiltration"], droite: ["Passage de l’état solide à l’état liquide", "Pénétration de l’eau dans le sol", "Passage de l’état liquide à l’état gazeux", "Passage de l’état gazeux à l’état liquide"], rep: [2, 3, 0, 1], retour: "Les trois premiers sont des changements d’état ; l’infiltration est un déplacement de l’eau." },
        { id: "2AC-L13-t3", cap: "K", pts: 1, type: "qcm", enonce: "Quelle est la source d’énergie du cycle de l’eau ?", options: ["Le Soleil", "La Lune", "Le vent", "Les volcans"], rep: 0, retour: "C’est la chaleur du Soleil qui provoque l’évaporation." },
        { id: "2AC-L13-t4", cap: "R2", pts: 1, type: "qcm", enonce: "On coupe la forêt qui couvrait une pente. Que devient l’eau de pluie ?", options: ["Elle s’infiltre moins et ruisselle davantage : risque d’inondation et d’érosion", "Elle s’infiltre davantage", "Elle ne tombe plus", "Rien ne change"], rep: 0, retour: "Les racines et la litière retiennent l’eau et favorisent l’infiltration. Sans elles, l’eau dévale la pente." },
        { id: "2AC-L13-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La quantité totale d’eau sur la Terre reste à peu près constante.", v: true }, { t: "Un nuage est formé de vapeur d’eau invisible.", v: false }, { t: "Les plantes rejettent de l’eau dans l’air par transpiration.", v: true }, { t: "L’eau des nappes souterraines ne rejoint jamais la mer.", v: false }], retour: "Un nuage est formé de gouttelettes ; l’eau souterraine finit par rejoindre les rivières et la mer." }
      ] }
    ],
    cloture: `<ul><li>Étapes : <b>évaporation</b> (et transpiration), <b>condensation</b>, <b>précipitations</b>, <b>ruissellement</b> et <b>infiltration</b>, retour à l’océan.</li><li>Le moteur du cycle est l’<b>énergie du Soleil</b>.</li><li>Le cycle relie l’hydrosphère, l’atmosphère, les continents et les êtres vivants.</li><li>La quantité totale d’eau reste <b>constante</b> : c’est toujours la même eau qui circule.</li></ul>`
  });

  // ---------- Thème 3, chapitre 2, séquence 2 ----------
  L.push({
    id: "2AC-L14", u: 2, c: 1, s: 1,
    titre: "Leçon 14 — Le cycle des roches",
    objectif: "À la fin de la leçon, je sais expliquer comment une roche peut se transformer en une roche d’une autre famille.",
    reussite: ["Je cite les trois familles de roches et leur mode de formation.", "Je remets dans l’ordre les étapes de la formation d’une roche sédimentaire.", "J’explique pourquoi on parle d’un cycle."],
    prerequis: {
      html: `<p>En 1AC, tu as appris à reconnaître trois familles de roches dans la <b>lithosphère</b> : magmatiques, sédimentaires et métamorphiques.</p>`,
      quiz: [
        { id: "2AC-L14-a1", cap: "K", pts: 1, type: "assoc", enonce: "Rappelle la famille de chaque roche.", gauche: ["Le granite", "Le calcaire", "Le marbre"], droite: ["Roche métamorphique", "Roche magmatique", "Roche sédimentaire"], rep: [1, 2, 0], retour: "Granite : magma refroidi. Calcaire : dépôts. Marbre : calcaire transformé." },
        { id: "2AC-L14-a2", cap: "K", pts: 1, type: "qcm", enonce: "Une roche en couches, contenant des fossiles, est :", options: ["sédimentaire", "magmatique", "métamorphique", "une lave"], rep: 0, retour: "Les couches et les fossiles signalent un dépôt." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je suis un grain de granite", html: `
        <p class="ctx">Je raconte l’histoire d’un grain de roche, en nommant chaque transformation.</p>
        <ol><li>« En profondeur, un <b>magma</b> (roche fondue) refroidit lentement et donne un <b>granite</b> : roche <b>magmatique</b>. »</li>
        <li>« Des millions d’années plus tard, ce granite se retrouve en surface. La pluie, le gel et le vent l’usent : c’est l’<b>érosion</b>. »</li>
        <li>« Les grains sont emportés par la rivière : c’est le <b>transport</b>. »</li>
        <li>« Ils se déposent au fond de la mer, en couches : c’est la <b>sédimentation</b>. »</li>
        <li>« Sous le poids des couches suivantes, les grains se tassent et se soudent : ils forment un <b>grès</b>, roche <b>sédimentaire</b>. »</li>
        <li>« Enfoui très profondément, le grès est chauffé et comprimé : il se transforme, sans fondre, en roche <b>métamorphique</b>. »</li>
        <li>« Plus profond encore, la roche fond : elle redevient un <b>magma</b>. »</li></ol>
        <p class="def">Les roches se transforment sans cesse les unes en les autres : c’est le <b>cycle des roches</b>. Il se déroule sur des <b>millions d’années</b>.</p>` },
      { titre: "Je fais 2 — Je résume par un tableau", html: `
        <table class="t"><tr><th>Transformation</th><th>Ce qui est nécessaire</th><th>Roche obtenue</th></tr>
        <tr><td>Refroidissement d’un magma</td><td>Une baisse de température</td><td>Magmatique (granite, basalte)</td></tr>
        <tr><td>Érosion, transport, dépôt, compaction</td><td>L’eau, le vent, la glace, puis le temps</td><td>Sédimentaire (grès, calcaire, argile)</td></tr>
        <tr><td>Transformation à l’état solide</td><td>Une forte chaleur et une forte pression, en profondeur</td><td>Métamorphique (marbre, schiste)</td></tr>
        <tr><td>Fusion</td><td>Une température très élevée</td><td>Magma</td></tr></table>
        <p>« N’importe quelle roche peut entrer dans le cycle : un marbre porté à la surface s’érode lui aussi, et ses débris donneront une roche sédimentaire. »</p>
        <p><b>Erreurs fréquentes</b> : croire que les roches sont éternelles ; croire que le cycle ne va que dans un sens.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — L’origine de quatre roches", contexte: "Le tableau indique comment quatre roches se sont formées.", docs: [
        { type: "table", titre: "Origine de quatre roches", cols: ["Roche", "Origine"], rows: [["Basalte", "Lave refroidie rapidement en surface"], ["Grès", "Grains de sable déposés, puis soudés"], ["Marbre", "Calcaire chauffé et comprimé en profondeur"], ["Granite", "Magma refroidi lentement en profondeur"]] }
      ], questions: [
        { id: "2AC-L14-g1", cap: "R2", pts: 1, type: "assoc", enonce: "Range chaque roche dans sa famille.", gauche: ["Le basalte", "Le grès", "Le marbre", "Le granite"], droite: ["Roche sédimentaire", "Roche métamorphique", "Roche magmatique"], rep: [2, 0, 1, 2], retour: "Lave ou magma refroidi : magmatique. Dépôt soudé : sédimentaire. Chauffée et comprimée : métamorphique." },
        { id: "2AC-L14-g2", cap: "I4", pts: 1, type: "qcm", enonce: "Quelle roche du tableau s’est formée à partir de sable ?", options: ["Le grès", "Le basalte", "Le marbre", "Le granite"], rep: 0, retour: "Ligne « Grès » : grains de sable déposés, puis soudés." },
        { id: "2AC-L14-g3", cap: "R1", pts: 1, type: "qcm", enonce: "Le calcaire contient souvent des fossiles, mais pas le marbre qui en provient. Pourquoi ?", options: ["La chaleur et la pression ont transformé la roche et effacé les fossiles", "Le marbre est plus jeune", "Les fossiles se sont enfuis", "Le marbre vient d’une lave"], rep: 0, retour: "Le métamorphisme réorganise toute la roche à l’état solide." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Des transformations très lentes", contexte: "Le tableau donne la durée approximative de quelques phénomènes géologiques.", docs: [
        { type: "table", titre: "Durée de quelques phénomènes", cols: ["Phénomène", "Durée approximative"], rows: [["Refroidissement d’une coulée de lave", "Quelques jours à quelques années"], ["Dépôt d’un mètre de sédiments au fond de la mer", "Des milliers d’années"], ["Formation d’une chaîne de montagnes", "Des millions d’années"]] }
      ], questions: [
        { id: "2AC-L14-t1", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre les étapes de la formation d’une roche sédimentaire.", items: ["Érosion d’une roche", "Transport des débris par l’eau", "Dépôt au fond d’un lac ou de la mer", "Compaction et soudure des grains"], retour: "Érosion, transport, sédimentation, compaction." },
        { id: "2AC-L14-t2", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque transformation à son résultat.", gauche: ["Refroidissement d’un magma", "Dépôt et compaction de sédiments", "Forte chaleur et forte pression en profondeur", "Fusion d’une roche"], droite: ["Roche métamorphique", "Magma", "Roche magmatique", "Roche sédimentaire"], rep: [2, 3, 0, 1], retour: "Chaque famille de roches correspond à un mode de formation." },
        { id: "2AC-L14-t3", cap: "I4", pts: 1, type: "qcm", enonce: "Quel phénomène du tableau est le plus long ?", options: ["La formation d’une chaîne de montagnes", "Le refroidissement d’une coulée de lave", "Le dépôt d’un mètre de sédiments", "Ils ont la même durée"], rep: 0, retour: "Des millions d’années : c’est l’ordre de grandeur du cycle des roches." },
        { id: "2AC-L14-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Un granite peut-il donner un jour un grès ?", options: ["Oui : après érosion, transport, dépôt et compaction de ses grains", "Non : une roche magmatique reste toujours magmatique", "Oui, en fondant", "Non : le granite ne s’use pas"], rep: 0, retour: "C’est exactement l’histoire suivie dans le modelage." },
        { id: "2AC-L14-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Une roche sédimentaire peut devenir une roche métamorphique.", v: true }, { t: "Le cycle des roches se déroule en quelques années.", v: false }, { t: "L’eau et le vent participent à l’érosion.", v: true }, { t: "Un magma est une roche fondue.", v: true }], retour: "Le cycle des roches se compte en millions d’années." }
      ] }
    ],
    cloture: `<ul><li>Magma refroidi → roche <b>magmatique</b>.</li><li>Érosion, transport, <b>sédimentation</b>, compaction → roche <b>sédimentaire</b>.</li><li>Chaleur et pression en profondeur → roche <b>métamorphique</b> ; fusion → magma.</li><li>Toute roche peut se transformer en une autre : c’est le <b>cycle des roches</b>, sur des millions d’années.</li></ul>`
  });

  // ---------- Thème 3, chapitre 2, séquence 3 ----------
  L.push({
    id: "2AC-L15", u: 2, c: 1, s: 2,
    titre: "Leçon 15 — Le système climatique",
    objectif: "À la fin de la leçon, je sais distinguer la météo du climat et expliquer comment les composantes de la Terre agissent ensemble sur le climat.",
    reussite: ["Je dis si une phrase parle de météo ou de climat.", "Je lis un tableau de températures et de précipitations.", "Je cite le rôle des océans, des glaces, de la végétation et des gaz à effet de serre."],
    prerequis: {
      html: `<p>Tu connais les enveloppes de la Terre (atmosphère, hydrosphère, lithosphère), l’<b>effet de serre naturel</b> (1AC) et le <b>cycle de l’eau</b> (leçon 13).</p>`,
      quiz: [
        { id: "2AC-L15-a1", cap: "K", pts: 1, type: "qcm", enonce: "L’effet de serre naturel :", options: ["retient une partie de la chaleur et maintient la Terre à 15 °C en moyenne", "refroidit la Terre", "arrête les rayons ultraviolets", "provoque les marées"], rep: 0, retour: "Sans lui, la température moyenne serait d’environ −18 °C." },
        { id: "2AC-L15-a2", cap: "K", pts: 1, type: "qcm", enonce: "Quelle est la source d’énergie du cycle de l’eau ?", options: ["Le Soleil", "La Lune", "Le noyau de la Terre", "Le vent"], rep: 0, retour: "Le Soleil est aussi le moteur du climat." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je distingue météo et climat", html: `
        <p class="ctx">Je me pose deux questions : « Sur quelle <b>durée</b> ? Sur quelle <b>étendue</b> ? »</p>
        <table class="t"><tr><th></th><th>Météo</th><th>Climat</th></tr><tr><th>Ce que c’est</th><td>Le temps qu’il fait</td><td>Le temps qu’il fait <b>en moyenne</b></td></tr>
        <tr><th>Durée</th><td>Aujourd’hui, demain, cette semaine</td><td>Moyennes calculées sur 30 ans environ</td></tr><tr><th>Exemple</th><td>« Il pleuvra demain à Fès. »</td><td>« Le sud du Maroc est aride. »</td></tr></table>
        <p>« Une journée très froide en mai : est-ce le climat qui change ? Non, c’est la météo d’un jour. Pour parler de climat, il faut des moyennes sur de nombreuses années. »</p>
        <p>On décrit un climat par ses <b>températures</b> et ses <b>précipitations</b> moyennes, mois par mois.</p>` },
      { titre: "Je fais 2 — Je relie les composantes du système", html: `
        <p class="def">Le <b>système climatique</b> est l’ensemble formé par l’atmosphère, les océans, les glaces, les continents et les êtres vivants, qui échangent en permanence de l’énergie et de la matière. Son moteur est l’<b>énergie du Soleil</b>.</p>
        <table class="t"><tr><th>Composante</th><th>Son action sur le climat</th></tr>
        <tr><td>Atmosphère</td><td>Les gaz à effet de serre retiennent la chaleur ; les vents la transportent</td></tr>
        <tr><td>Océans</td><td>Ils stockent la chaleur et la transportent par les courants ; ils fournissent l’eau des pluies</td></tr>
        <tr><td>Glaces</td><td>Blanches, elles renvoient une grande partie de la lumière du Soleil</td></tr>
        <tr><td>Végétation</td><td>Elle absorbe du dioxyde de carbone et rejette de l’eau dans l’air</td></tr></table>
        <p>« Tout est lié. Si les glaces fondent, la surface sombre de l’océan apparaît. Elle renvoie moins de lumière et absorbe plus de chaleur : la température monte encore. »</p>
        <p>La Terre reçoit plus d’énergie à l’équateur qu’aux pôles : c’est pourquoi on distingue une zone <b>chaude</b>, deux zones <b>tempérées</b> et deux zones <b>froides</b>.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Le climat de Marrakech", contexte: "Le tableau donne les moyennes mesurées à Marrakech sur trente ans, pour quatre mois (valeurs arrondies).", docs: [
        { type: "table", titre: "Températures et précipitations moyennes à Marrakech", cols: ["Mois", "Janvier", "Avril", "Juillet", "Octobre"], rows: [["Température moyenne (°C)", "12", "19", "29", "21"], ["Précipitations (mm)", "32", "31", "1", "24"]] }
      ], questions: [
        { id: "2AC-L15-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la température moyenne en juillet ?", rep: 29, tol: 0, unite: "°C", retour: "Ligne « Température moyenne », colonne « Juillet »." },
        { id: "2AC-L15-g2", cap: "I4", pts: 1, type: "qcm", enonce: "Quel est le mois le plus sec du tableau ?", options: ["Juillet", "Janvier", "Avril", "Octobre"], rep: 0, retour: "1 mm de précipitations : c’est la plus petite valeur de la troisième ligne." },
        { id: "2AC-L15-g3", cap: "K", pts: 1, type: "qcm", enonce: "Ces valeurs, calculées sur trente ans, décrivent :", options: ["le climat de Marrakech", "la météo d’aujourd’hui à Marrakech", "la météo de demain", "le cycle des roches"], rep: 0, retour: "Des moyennes sur une longue durée décrivent un climat." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — La lumière renvoyée par la surface de la Terre", contexte: "Selon sa couleur, une surface renvoie une part plus ou moins grande de la lumière du Soleil (valeurs approximatives).", docs: [
        { type: "table", titre: "Part de la lumière solaire renvoyée", cols: ["Surface", "Neige fraîche", "Sable", "Forêt", "Océan"], rows: [["Lumière renvoyée", "85 %", "35 %", "15 %", "6 %"]] }
      ], questions: [
        { id: "2AC-L15-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle part de la lumière la neige fraîche renvoie-t-elle ?", rep: 85, tol: 0, unite: "%", retour: "Colonne « Neige fraîche »." },
        { id: "2AC-L15-t2", cap: "R2", pts: 1, type: "qcm", enonce: "La banquise fond et laisse place à l’océan. Quelle en est la conséquence ?", options: ["La surface renvoie moins de lumière et absorbe plus de chaleur : le réchauffement s’accentue", "La surface renvoie plus de lumière : il fait plus froid", "Rien ne change", "L’océan disparaît"], rep: 0, retour: "La neige renvoie 85 % de la lumière, alors que l’océan n’en renvoie que 6 %." },
        { id: "2AC-L15-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque composante à son action.", gauche: ["Les océans", "Les glaces", "La végétation", "Les gaz à effet de serre"], droite: ["Retiennent une partie de la chaleur", "Renvoient une grande partie de la lumière", "Stockent et transportent la chaleur", "Absorbe du dioxyde de carbone"], rep: [2, 1, 3, 0], retour: "Chaque composante agit sur le climat et dépend des autres." },
        { id: "2AC-L15-t4", cap: "K", pts: 1, type: "assoc", enonce: "Météo ou climat ?", gauche: ["« Il pleuvra demain à Fès. »", "« Le sud du Maroc est aride. »", "« Un orage est annoncé ce soir. »", "« Les hivers sont doux à Agadir. »"], droite: ["Climat", "Météo"], rep: [1, 0, 1, 0], retour: "Un moment précis : météo. Une tendance sur de nombreuses années : climat." },
        { id: "2AC-L15-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "Le climat se définit sur une longue durée, environ trente ans.", v: true }, { t: "Le Soleil est la source d’énergie du système climatique.", v: true }, { t: "Les océans n’ont aucune influence sur le climat.", v: false }, { t: "La météo et le climat désignent la même chose.", v: false }], retour: "Les océans stockent et transportent la chaleur ; la météo est locale et de courte durée." }
      ] }
    ],
    cloture: `<ul><li><b>Météo</b> : le temps qu’il fait, à court terme. <b>Climat</b> : les moyennes sur trente ans environ.</li><li>Le <b>système climatique</b> réunit atmosphère, océans, glaces, continents et êtres vivants ; son moteur est le <b>Soleil</b>.</li><li>Les océans stockent la chaleur, les glaces renvoient la lumière, la végétation absorbe le dioxyde de carbone, les gaz à effet de serre retiennent la chaleur.</li><li>Ces composantes sont liées : modifier l’une modifie les autres.</li></ul>`
  });

  // ---------- Thème 4, chapitre 1, séquence 1 ----------
  const gEspece = {
    type: "graph", titre: "Effectif d’une espèce d’oiseau menacée dans une région", xlab: "Temps (années)", ylab: "Nombre d’oiseaux", xmax: 40, ymax: 450,
    series: [{ nom: "Oiseaux", pts: [[0, 400], [10, 250], [20, 120], [30, 200], [40, 350]] }],
    marques: [{ x: 20, label: "Création d’un parc national" }]
  };
  L.push({
    id: "2AC-L16", u: 3, c: 0, s: 0,
    titre: "Leçon 16 — L’impact de l’humain sur la biodiversité",
    objectif: "À la fin de la leçon, je sais citer les principales menaces que l’Homme fait peser sur la biodiversité et des mesures pour la protéger.",
    reussite: ["Je définis la biodiversité.", "Je relie une activité humaine à la menace qu’elle représente.", "J’explique l’effet d’une mesure de protection à partir d’une courbe."],
    prerequis: {
      html: `<p>Tu sais que la taille d’une <b>population</b> dépend de sa nourriture, de ses prédateurs, des maladies… et des <b>activités humaines</b> (leçon 7).</p>`,
      quiz: [
        { id: "2AC-L16-a1", cap: "K", pts: 1, type: "qcm", enonce: "Une population est :", options: ["l’ensemble des individus d’une même espèce dans un même lieu", "l’ensemble de toutes les espèces de la Terre", "un seul animal", "un milieu de vie"], rep: 0, retour: "Une seule espèce, un même lieu." },
        { id: "2AC-L16-a2", cap: "K", pts: 1, type: "qcm", enonce: "Laquelle de ces activités humaines peut faire diminuer une population animale ?", options: ["La chasse excessive", "La création d’une réserve", "Le reboisement", "L’interdiction de la pêche pendant la reproduction"], rep: 0, retour: "Les trois autres sont des mesures de protection." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — Je repère la menace", html: `
        <p class="def">La <b>biodiversité</b> est la diversité du vivant : diversité des <b>espèces</b>, diversité des <b>milieux</b> de vie, et diversité des <b>individus</b> à l’intérieur d’une espèce.</p>
        <p class="ctx">Devant une activité humaine, je me demande : « Que change-t-elle pour les êtres vivants : leur <b>milieu</b>, leur <b>nombre</b>, la <b>qualité</b> de l’eau ou de l’air, ou leurs <b>voisins</b> ? »</p>
        <table class="t"><tr><th>Menace</th><th>Exemple</th><th>Ce qui change</th></tr>
        <tr><td>Destruction des milieux</td><td>Couper une forêt, assécher une zone humide, construire</td><td>Les êtres vivants perdent leur lieu de vie</td></tr>
        <tr><td>Surexploitation</td><td>Surpêche, chasse excessive, braconnage</td><td>On prélève plus d’individus qu’il n’en naît</td></tr>
        <tr><td>Pollution</td><td>Pesticides, plastiques, eaux usées</td><td>L’eau, l’air ou le sol deviennent toxiques</td></tr>
        <tr><td>Espèces envahissantes</td><td>Introduire une espèce venue d’ailleurs</td><td>Elle concurrence ou mange les espèces locales</td></tr>
        <tr><td>Changement climatique</td><td>Sécheresses plus fréquentes</td><td>Les conditions de vie ne conviennent plus</td></tr></table>
        <p>Au Maroc, le lion de l’Atlas a disparu de la nature ; le phoque moine et l’ibis chauve sont menacés ; la forêt d’arganiers recule.</p>` },
      { titre: "Je fais 2 — Je juge l’effet d’une mesure de protection", html: `
        <p>On suit pendant 40 ans une population d’oiseaux menacée. À la 20ᵉ année, on crée un parc national.</p>
        <ol><li><b>Je découpe la courbe à la date de la mesure</b> : avant et après la 20ᵉ année.</li>
        <li><b>Je décris chaque partie</b> : « De 0 à 20 ans, le nombre d’oiseaux diminue de 400 à 120. De 20 à 40 ans, il augmente de 120 à 350. »</li>
        <li><b>Je conclus</b> : « La tendance s’inverse après la création du parc : la protection est efficace. »</li></ol>
        <p><b>Protéger la biodiversité :</b> créer des <b>parcs nationaux</b> et des réserves (Toubkal, Souss-Massa, Ifrane) ; <b>reboiser</b> ; réglementer la chasse et la pêche (périodes de repos biologique) ; limiter les pesticides ; trier et réduire ses déchets.</p>
        <p><b>Erreur fréquente</b> : croire que la disparition d’une espèce ne concerne qu’elle. Dans un réseau alimentaire, elle touche aussi les espèces qui la mangent et celles qu’elle mange.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Une espèce protégée", contexte: "On compte les oiseaux d’une espèce menacée, dans une région, pendant 40 ans. Un parc national est créé la 20ᵉ année.", docs: [gEspece], questions: [
        { id: "2AC-L16-g1", cap: "I1", pts: 1, type: "num", enonce: "Combien d’oiseaux compte-t-on la 20ᵉ année ?", rep: 120, tol: 8, unite: "oiseaux", retour: "C’est le point le plus bas de la courbe : 120." },
        { id: "2AC-L16-g2", cap: "I1", pts: 1, type: "qcm", enonce: "Entre le début du suivi et la 20ᵉ année, le nombre d’oiseaux :", options: ["diminue de 400 à 120", "augmente de 120 à 350", "reste égal à 400", "diminue de 350 à 120"], rep: 0, retour: "On donne le sens et les deux valeurs du premier segment." },
        { id: "2AC-L16-g3", cap: "R2", pts: 1, type: "qcm", enonce: "Que montre la courbe après la création du parc ?", options: ["Le nombre d’oiseaux augmente de 120 à 350 : la protection est efficace", "Le nombre d’oiseaux continue de diminuer", "Les oiseaux ont disparu", "Le parc n’a aucun effet"], rep: 0, retour: "La tendance s’inverse à partir de la date de la mesure." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Une forêt qui recule", contexte: "On a mesuré la surface d’une forêt à trois dates.", docs: [
        { type: "table", titre: "Surface d’une forêt", cols: ["Année", "1980", "2000", "2020"], rows: [["Surface (hectares)", "10 000", "7 000", "5 000"]] }
      ], questions: [
        { id: "2AC-L16-t1", cap: "I4", pts: 1, type: "num", enonce: "Quelle est la surface de la forêt en 2020 ?", rep: 5000, tol: 0, unite: "hectares", retour: "Colonne « 2020 »." },
        { id: "2AC-L16-t2", cap: "R5", pts: 1, type: "num", enonce: "Quelle surface de forêt a disparu entre 1980 et 2020 ?", rep: 5000, tol: 0, unite: "hectares", retour: "10 000 − 5 000 = 5 000 hectares : la moitié de la forêt." },
        { id: "2AC-L16-t3", cap: "K", pts: 1, type: "assoc", enonce: "Associe chaque menace à un exemple.", gauche: ["Destruction des milieux", "Surexploitation", "Pollution", "Espèce envahissante"], droite: ["Rejeter des plastiques en mer", "Introduire une espèce étrangère qui concurrence les espèces locales", "Couper une forêt pour construire", "Pêcher plus de poissons qu’il n’en naît"], rep: [2, 3, 0, 1], retour: "Quatre façons différentes de menacer la biodiversité." },
        { id: "2AC-L16-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Quelle mesure protège le mieux les espèces de cette forêt ?", options: ["Classer la forêt en parc national et reboiser", "Y construire une route", "Autoriser la chasse toute l’année", "Y déposer les déchets de la ville"], rep: 0, retour: "Protéger le milieu de vie protège toutes les espèces qui en dépendent." },
        { id: "2AC-L16-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "La biodiversité désigne la diversité des êtres vivants et de leurs milieux.", v: true }, { t: "La disparition d’une espèce n’a aucun effet sur les autres.", v: false }, { t: "Le reboisement aide à protéger la biodiversité.", v: true }, { t: "L’Homme ne peut rien faire pour protéger les espèces.", v: false }], retour: "Les espèces sont liées entre elles, et des mesures de protection existent." }
      ] }
    ],
    cloture: `<ul><li>La <b>biodiversité</b> : diversité des espèces, des milieux et des individus.</li><li>Menaces dues à l’Homme : <b>destruction des milieux</b>, <b>surexploitation</b>, <b>pollution</b>, <b>espèces envahissantes</b>, <b>changement climatique</b>.</li><li>Protection : parcs nationaux et réserves, reboisement, réglementation de la chasse et de la pêche, réduction des pollutions.</li><li>Les espèces sont liées : la disparition de l’une touche les autres.</li></ul>`
  });

  // ---------- Thème 4, chapitre 1, séquence 2 ----------
  const tCO2 = { type: "table", titre: "Dioxyde de carbone dans l’atmosphère (en parties par million, ppm)", cols: ["Année", "1960", "1980", "2000", "2020"], rows: [["Dioxyde de carbone (ppm)", "317", "339", "370", "414"]] };
  L.push({
    id: "2AC-L17", u: 3, c: 0, s: 1,
    titre: "Leçon 17 — L’impact de l’humain sur le climat",
    objectif: "À la fin de la leçon, je sais expliquer comment les activités humaines renforcent l’effet de serre, en citer les conséquences et proposer des gestes pour les limiter.",
    reussite: ["Je calcule une augmentation à partir d’un tableau.", "J’enchaîne les causes et les conséquences du réchauffement.", "Je propose des gestes qui réduisent les émissions de dioxyde de carbone."],
    prerequis: {
      html: `<p>L’<b>effet de serre naturel</b> est indispensable à la vie (1AC). Le <b>dioxyde de carbone</b> est l’un des gaz qui retiennent la chaleur ; les plantes en absorbent par photosynthèse (leçon 3).</p>`,
      quiz: [
        { id: "2AC-L17-a1", cap: "K", pts: 1, type: "qcm", enonce: "Lequel de ces gaz est un gaz à effet de serre ?", options: ["Le dioxyde de carbone", "Le diazote", "Le dioxygène", "Aucun"], rep: 0, retour: "La vapeur d’eau et le méthane en sont aussi." },
        { id: "2AC-L17-a2", cap: "K", pts: 1, type: "qcm", enonce: "Quel phénomène retire du dioxyde de carbone de l’air ?", options: ["La photosynthèse des plantes", "La respiration", "La combustion du bois", "La décomposition"], rep: 0, retour: "Les forêts sont des réservoirs de carbone." }
      ]
    },
    modelage: [
      { titre: "Je fais 1 — J’enchaîne les causes et les conséquences", html: `
        <p class="ctx">Je construis la chaîne maillon par maillon, en me demandant à chaque fois : « Et qu’est-ce que cela provoque ? »</p>
        <ol><li>« Pour se déplacer, se chauffer, produire de l’électricité et fabriquer des objets, l’Homme brûle du <b>pétrole</b>, du <b>charbon</b> et du <b>gaz</b>. Il coupe aussi des forêts. »</li>
        <li>« Ces combustions rejettent du <b>dioxyde de carbone</b>, et les forêts coupées n’en absorbent plus : la quantité de dioxyde de carbone dans l’air <b>augmente</b>. » L’élevage et les décharges rejettent aussi du méthane.</li>
        <li>« Davantage de gaz à effet de serre retiennent davantage de chaleur : l’effet de serre est <b>renforcé</b>. »</li>
        <li>« La température moyenne de la Terre <b>augmente</b> : environ 1 °C de plus qu’il y a 150 ans. C’est le <b>réchauffement climatique</b>. »</li>
        <li>« Conséquences : fonte des glaces, <b>montée du niveau des mers</b>, sécheresses et canicules plus fréquentes, pluies violentes, espèces menacées. »</li></ol>
        <p><b>À ne pas confondre</b> : l’effet de serre <b>naturel</b> est utile ; c’est l’effet de serre <b>additionnel</b>, dû à l’Homme, qui pose problème.</p>` },
      { titre: "Je fais 2 — Je calcule une augmentation, puis je cherche des solutions", html: `
        <table class="t"><tr><th>Année</th><th>1960</th><th>2020</th></tr><tr><th>Dioxyde de carbone (ppm)</th><td>317</td><td>414</td></tr></table>
        <p>« Je calcule l’augmentation : valeur d’arrivée moins valeur de départ. 414 − 317 = <b>97 ppm</b> en 60 ans. »</p>
        <p><b>Agir, c’est rejeter moins de dioxyde de carbone :</b></p>
        <ul><li>se déplacer à pied, à vélo ou en transports en commun ;</li><li>économiser l’électricité et le chauffage ;</li><li>produire l’électricité avec des énergies <b>renouvelables</b> : le Soleil (centrale Noor à Ouarzazate), le vent ;</li><li><b>reboiser</b> : les arbres absorbent du dioxyde de carbone ;</li><li>réduire, réutiliser et recycler les déchets.</li></ul>
        <p>Le Maroc est particulièrement exposé : les sécheresses y deviennent plus fréquentes et l’eau plus rare.</p>` }
    ],
    guidee: [
      { titre: "Nous faisons — Le dioxyde de carbone de l’atmosphère", contexte: "Le tableau donne la quantité de dioxyde de carbone mesurée dans l’atmosphère à quatre dates.", docs: [tCO2], questions: [
        { id: "2AC-L17-g1", cap: "I4", pts: 1, type: "num", enonce: "Quelle était la quantité de dioxyde de carbone en 2000 ?", rep: 370, tol: 0, unite: "ppm", retour: "Colonne « 2000 »." },
        { id: "2AC-L17-g2", cap: "R5", pts: 1, type: "num", enonce: "De combien la quantité de dioxyde de carbone a-t-elle augmenté entre 1960 et 2020 ?", rep: 97, tol: 0, unite: "ppm", retour: "414 − 317 = 97 ppm." },
        { id: "2AC-L17-g3", cap: "R1", pts: 1, type: "qcm", enonce: "Quelle est la cause principale de cette augmentation ?", options: ["La combustion du pétrole, du charbon et du gaz par l’Homme", "La respiration des poissons", "Les marées", "Les éclipses"], rep: 0, retour: "Les combustions rejettent du dioxyde de carbone ; la déforestation aggrave le phénomène." }
      ] }
    ],
    autonome: [
      { titre: "Tu fais — Comment se déplacer ?", contexte: "Le tableau donne un ordre de grandeur du dioxyde de carbone rejeté pour transporter une personne sur un kilomètre.", docs: [
        { type: "table", titre: "Dioxyde de carbone rejeté par personne et par kilomètre (ordres de grandeur)", cols: ["Moyen de transport", "Voiture (une seule personne)", "Bus", "Train", "Vélo, marche"], rows: [["Dioxyde de carbone (g par km)", "190", "70", "30", "0"]] }
      ], questions: [
        { id: "2AC-L17-t1", cap: "I4", pts: 1, type: "qcm", enonce: "Quel moyen de transport rejette le plus de dioxyde de carbone par personne ?", options: ["La voiture avec une seule personne", "Le bus", "Le train", "Le vélo"], rep: 0, retour: "190 g par kilomètre : la plus grande valeur du tableau." },
        { id: "2AC-L17-t2", cap: "R5", pts: 1, type: "num", enonce: "Quelle quantité de dioxyde de carbone rejette une personne seule en voiture sur un trajet de 10 km ?", rep: 1900, tol: 0, unite: "g", retour: "190 × 10 = 1 900 g, soit presque 2 kg." },
        { id: "2AC-L17-t3", cap: "K", pts: 1, type: "ordre", enonce: "Remets dans l’ordre la chaîne des causes et des conséquences.", items: ["Combustion du pétrole, du charbon et du gaz", "Augmentation du dioxyde de carbone dans l’atmosphère", "Renforcement de l’effet de serre", "Hausse de la température moyenne de la Terre", "Fonte des glaces et montée du niveau des mers"], retour: "Activités humaines → gaz → effet de serre renforcé → réchauffement → conséquences." },
        { id: "2AC-L17-t4", cap: "R2", pts: 1, type: "qcm", enonce: "Quel geste réduit le plus les rejets de dioxyde de carbone pour aller au collège, à 2 km ?", options: ["Y aller à pied ou à vélo", "Se faire conduire seul en voiture", "Prendre un taxi", "Faire deux trajets en voiture"], rep: 0, retour: "La marche et le vélo ne rejettent pas de dioxyde de carbone." },
        { id: "2AC-L17-t5", cap: "K", pts: 1, type: "vf", enonce: "Vrai ou faux ?", items: [{ t: "L’effet de serre naturel est indispensable à la vie.", v: true }, { t: "Les activités humaines augmentent la quantité de gaz à effet de serre.", v: true }, { t: "Les forêts rejettent le dioxyde de carbone que nous produisons.", v: false }, { t: "Le réchauffement climatique fait monter le niveau des mers.", v: true }], retour: "Les forêts absorbent du dioxyde de carbone : c’est pourquoi on reboise." }
      ] }
    ],
    cloture: `<ul><li>La combustion du pétrole, du charbon et du gaz, ainsi que la déforestation, augmentent le <b>dioxyde de carbone</b> de l’atmosphère.</li><li>L’effet de serre est <b>renforcé</b> : la température moyenne de la Terre augmente. C’est le <b>réchauffement climatique</b>.</li><li>Conséquences : fonte des glaces, montée des mers, sécheresses, canicules, menaces sur la biodiversité.</li><li>Agir : économiser l’énergie, choisir les transports en commun, le vélo et les énergies renouvelables, reboiser, recycler.</li></ul>`
  });
})();
