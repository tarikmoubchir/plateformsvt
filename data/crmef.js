// Entrée « Étudiant CRMEF » : modules enseignés par le Pr. Moubchir, condensés à partir de ses supports de cours (M15 et M13).
(function () {
  const S = window.SVT;
  S.capacites.FK = { palier: 0, nom: "Maîtriser les concepts", methode: ["Relire la partie du support en reformulant chaque définition avec ses propres mots.", "Associer chaque concept à un exemple tiré d’une séance de SVT."] };
  S.capacites.FA = { palier: 0, nom: "Analyser une situation professionnelle", methode: ["Séparer les faits observés des interprétations.", "Rattacher chaque hypothèse à un cadre de référence du cours.", "Conclure par une piste concrète et réaliste."] };

  // D : copies publiables (textes officiels, supports du Pr. Moubchir) rangées dans site/docs/crmef.
  // Les documents d'autres auteurs restent dans les dossiers de l'ordinateur : leur ligne porte un troisième élément « true » et n'est affichée qu'en local.
  const D = "docs/crmef/", DOS = "../Entrée étudiant CRMEF/", APP = DOS + "Module APP/Supports du Cours APP/", ESR = DOS + "Module ESR/Support du Cours ESR/";

  S.crmef = {
    cycles: ["Secondaire collégial — SVT", "Secondaire qualifiant — SVT"],
    modules: [
      {
        id: "APP", code: "M15", titre: "Atelier d’analyse de pratiques professionnelles",
        devise: "Observer, comprendre et faire évoluer sa pratique enseignante",
        volume: "34 heures : 18 % cours, 70 % activités pratiques, 12 % évaluation",
        competence: "Au terme de cet atelier, l’étudiant sera capable d’analyser sa propre pratique professionnelle et celle de ses pairs dans la discipline enseignée, en mobilisant, selon une démarche instrumentée, des savoirs issus de la recherche et/ou des savoirs issus de pratiques formalisées.",
        objectifs: ["S’approprier le concept d’analyse de pratiques professionnelles, en le différenciant du concept d’évaluation.", "Identifier l’intérêt et les finalités de l’analyse de pratiques professionnelles.", "S’approprier les étapes de la démarche d’analyse compréhensive et réflexive.", "Élaborer des outils d’observation et d’analyse de pratiques professionnelles.", "Mener l’analyse de pratiques professionnelles, aussi bien en situation de formation qu’en situation d’enseignement-apprentissage en classe."],
        prerequis: ["Théories et concepts des sciences de l’éducation sur l’enseignement-apprentissage.", "Concepts de la didactique de la discipline enseignée et savoirs disciplinaires.", "Ressources des modules de planification, de gestion, d’évaluation des apprentissages et de remédiation.", "Notions de base des TICE et de l’intelligence artificielle."],
        reinvest: ["Exploiter les grilles d’observation durant les stages.", "Exploiter les activités d’analyse de pratiques pour enrichir le portfolio."],
        evaluation: "Contrôle continu 25 % ; examen de fin de module 75 % (syllabus de septembre 2026).",
        parties: [
          {
            titre: "Partie 1 — Notions de base, approches théoriques, enjeux et finalités",
            cours: [
              { titre: "1.0 Des notions à distinguer", html: `
                <p>Le syllabus demande de différencier sept opérations que l’on confond souvent :</p>
                <table class="t"><tr><th>Opération</th><th>Ce qu’elle consiste à faire</th><th>Exemple sur une séance de SVT</th></tr>
                <tr><th>Observer</th><td>Recueillir des faits, sans les interpréter</td><td>« L’enseignant pose 14 questions, dont 11 fermées. »</td></tr>
                <tr><th>Analyser</th><td>Décomposer la situation et relier les faits entre eux et à un cadre de référence</td><td>Relier le type de questions à la place laissée au raisonnement des élèves</td></tr>
                <tr><th>Synthétiser</th><td>Rassembler les éléments d’analyse en un tout cohérent et court</td><td>« Un guidage très serré tout au long de la séance »</td></tr>
                <tr><th>Problématiser</th><td>Transformer un constat en une question qui mérite d’être travaillée</td><td>« Qu’est-ce qui conduit à guider autant une activité d’investigation ? »</td></tr>
                <tr><th>Interpréter</th><td>Donner un sens aux faits, sous forme d’hypothèses</td><td>Crainte de manquer de temps ? conception de l’erreur ?</td></tr>
                <tr><th>Théoriser</th><td>Dégager un principe général, transférable à d’autres situations</td><td>La tension entre guidage et autonomie de l’élève</td></tr>
                <tr><th>Évaluer / contrôler</th><td>Comparer la pratique à une norme et porter un jugement de conformité</td><td>Remplir une grille d’inspection et attribuer une appréciation</td></tr></table>
                <p>L’analyse de pratiques mobilise les six premières opérations ; elle s’interdit la dernière.</p>` },
              { titre: "1.1 Pratique, activité et analyse de pratique", html: `
                <p>La <b>pratique</b> enseignante ne se réduit pas à ce qui est visible en classe : c’est « tout ce que l’enseignant pense, dit ou ne dit pas, fait ou ne fait pas, sur un temps long » (Robert, 2008). L’<b>activité</b> en est une partie délimitée dans le temps et l’espace : ce que l’enseignant déploie durant une séance pour atteindre un but.</p>
                <p class="def"><b>Analyse de pratique :</b> démarche réflexive et instrumentée qui consiste à prendre du recul sur une action professionnelle vécue — la sienne ou celle d’un pair — pour en comprendre les logiques, les effets et les marges de manœuvre.</p>
                <p><b>Analyser n’est pas évaluer.</b> L’évaluation porte un jugement de conformité à une norme ; l’analyse cherche à comprendre, sans jugement de valeur immédiat. D’où les règles de l’atelier : confidentialité, écoute, droit de réserve.</p>` },
              { titre: "1.2 Les quatre dimensions de la pratique", html: `
                <ul><li><b>Pédagogique</b> : organisation de la classe, temps, espaces, consignes, climat, différenciation.</li>
                <li><b>Didactique</b> : rapport au savoir enseigné — choix des tâches, progression, obstacles, validation des réponses.</li>
                <li><b>Relationnelle</b> : interactions enseignant-élèves et entre élèves, étayage, écoute, gestion des conflits.</li>
                <li><b>Personnelle</b> : connaissances, conceptions, convictions et parcours de l’enseignant.</li></ul>
                <p>Ces dimensions se croisent : une même observation (ignorer une erreur d’élève) peut relever à la fois d’un choix didactique, d’un choix relationnel et d’une conception personnelle de l’erreur.</p>` },
              { titre: "1.3 Finalités", html: `
                <ul><li><b>Compréhension</b> : toute pratique a une rationalité, souvent invisible à son auteur.</li>
                <li><b>Développement professionnel</b> : devenir un praticien réflexif (Schön, 1983).</li>
                <li><b>Professionnalisation</b> : fonder son identité sur des savoirs d’action explicités et partageables.</li>
                <li><b>Formation collective</b> : construire des savoirs professionnels communs par l’analyse croisée.</li></ul>
                <p>La pratique réflexive ne se développe pas spontanément : elle demande entraînement, accompagnement et outils (Perrenoud, 2001).</p>` },
              { titre: "1.4 Trois approches", html: `
                <table class="t"><tr><th>Approche</th><th>Centration</th><th>Visée</th></tr>
                <tr><th>Psychosociale</th><td>Le vécu du praticien, ses affects, la dynamique de groupe</td><td>Soutien et prise de distance par la parole partagée</td></tr>
                <tr><th>Clinique</th><td>Le sujet enseignant, son histoire, ses implications inconscientes</td><td>Compréhension en profondeur des enjeux personnels</td></tr>
                <tr><th>Fonctionnelle / réflexive</th><td>L’activité observable en situation et ses déterminants</td><td>Analyse instrumentée pour comprendre et transformer l’activité</td></tr></table>
                <p>L’atelier s’appuie sur l’approche <b>fonctionnelle et réflexive</b>, la plus outillable en formation initiale.</p>` },
              { titre: "1.5 Cadres de référence : triangle didactique et DADE", html: `
                <p>Le <b>triangle didactique</b> (savoir – enseignant – élève) situe une observation par rapport à trois relations : enseignant-savoir (transposition), élève-savoir (apprentissage, obstacles), enseignant-élève (relation pédagogique).</p>
                <p>La <b>Double Approche Didactique et Ergonomique</b> (Robert et Rogalski) décrit une pratique par cinq composantes :</p>
                <table class="t"><tr><th>Composante</th><th>Ce qu’elle caractérise</th></tr>
                <tr><th>Cognitive</th><td>Les tâches prévues pour les élèves et les savoirs en jeu</td></tr>
                <tr><th>Médiative</th><td>L’organisation du travail des élèves et l’étayage de l’enseignant</td></tr>
                <tr><th>Institutionnelle</th><td>Programmes, ressources imposées, préconisations de l’inspection</td></tr>
                <tr><th>Sociale</th><td>Habitudes de la discipline, choix des collègues, contexte de l’établissement</td></tr>
                <tr><th>Personnelle</th><td>Connaissances, conceptions, convictions et parcours de l’enseignant</td></tr></table>
                <p>Conséquence pratique : l’observation d’une séance ne suffit pas. Elle doit être complétée par un entretien avec l’enseignant, avant et après la séance.</p>` }
            ],
            activite: "Choisissez une séance de SVT observée en stage. Relevez trois faits, puis rattachez chacun à une dimension de la pratique et à une composante de la DADE.",
            quiz: [
              { id: "APP1-1", cap: "FK", pts: 1, type: "qcm", enonce: "Ce qui distingue l’analyse de pratique de l’évaluation de pratique, c’est que l’analyse :", options: ["cherche à comprendre la pratique sans jugement de valeur immédiat", "mesure la conformité de la pratique à un référentiel", "aboutit à une note de stage", "ne s’appuie sur aucun outil"], rep: 0, retour: "L’évaluation juge la conformité à une norme ; l’analyse reconstitue la cohérence d’une pratique pour ouvrir des possibles." },
              { id: "APP1-2", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque objet d’observation à la dimension de la pratique concernée.",
                gauche: ["Gestion du temps et des consignes", "Choix des tâches et traitement des obstacles", "Qualité de l’écoute et de l’étayage", "Conceptions et parcours de l’enseignant"],
                droite: ["Dimension personnelle", "Dimension pédagogique", "Dimension relationnelle", "Dimension didactique"], rep: [1, 3, 2, 0], retour: "Pédagogique : organisation ; didactique : rapport au savoir ; relationnelle : interactions ; personnelle : ce qui est propre à l’enseignant." },
              { id: "APP1-3", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque élément à la composante de la DADE qui le caractérise.",
                gauche: ["Les tâches proposées aux élèves", "Les aides apportées pendant le travail", "Le programme officiel et les notes ministérielles", "Les habitudes de l’équipe disciplinaire", "Les convictions de l’enseignant"],
                droite: ["Sociale", "Cognitive", "Personnelle", "Institutionnelle", "Médiative"], rep: [1, 4, 3, 0, 2], retour: "Cognitive : tâches ; médiative : étayage ; institutionnelle : prescriptions ; sociale : collectif ; personnelle : l’individu." },
              { id: "APP1-4", cap: "FK", pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
                { t: "La pratique enseignante inclut aussi ce que l’enseignant ne dit pas et ne fait pas.", v: true },
                { t: "L’atelier s’appuie principalement sur l’approche clinique.", v: false },
                { t: "La pratique réflexive se développe spontanément avec l’expérience.", v: false },
                { t: "L’observation d’une séance doit être complétée par un entretien avec l’enseignant.", v: true }
              ], retour: "L’atelier retient l’approche fonctionnelle et réflexive ; la réflexivité exige un entraînement outillé." },
              { id: "APP1-5", cap: "FA", pts: 1, type: "qcm", enonce: "Un enseignant ne relève pas une erreur d’élève pendant une mise en commun. La lecture la plus conforme à l’esprit de l’analyse de pratique est :", options: [
                "Formuler plusieurs hypothèses (choix didactique, choix relationnel, conception de l’erreur) à vérifier en entretien",
                "Conclure que l’enseignant ne maîtrise pas le contenu",
                "Lui conseiller immédiatement de corriger toutes les erreurs",
                "Noter la séance en dessous de la moyenne"], rep: 0, retour: "Une même observation relève de plusieurs dimensions ; l’entretien permet de trancher entre les hypothèses." },
              { id: "APP1-6", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque énoncé à l’opération qu’il illustre.",
                gauche: ["« L’enseignant pose 14 questions, dont 11 fermées. »", "« Qu’est-ce qui conduit à guider autant cette activité ? »", "« Il craint peut-être de manquer de temps. »", "« La séance n’est pas conforme à la fiche de préparation : insuffisant. »"],
                droite: ["Interpréter", "Évaluer / contrôler", "Observer", "Problématiser"], rep: [2, 3, 0, 1], retour: "Un fait compté relève de l’observation ; une question, de la problématisation ; une hypothèse, de l’interprétation ; un jugement de conformité, de l’évaluation." }
            ]
          },
          {
            titre: "Partie 2 — Conception des instruments d’observation et d’analyse",
            cours: [
              { titre: "2.1 Grilles d’observation générales et ciblées", html: `
                <p>La <b>grille générale</b> couvre toute la séance (temps, consignes, interactions, contenus, évaluation) : utile pour une première découverte. La <b>grille ciblée</b> se concentre sur un objet précis (gestion des erreurs, étayage, répartition de la parole, une composante de la DADE) et permet une analyse plus fine.</p>
                <p>Objectif central : passer d’une observation impressionniste (« la séance s’est bien passée ») à une observation <b>instrumentée</b> : traces datées, verbatim, occurrences comptées.</p>` },
              { titre: "2.2 Construire une grille en quatre étapes", html: `
                <ol><li><b>Définir l’objectif d’observation</b> : quelle dimension, quelle composante, quel moment de la séance ?</li>
                <li><b>Choisir l’unité d’observation</b> : tranches de temps, événements ou épisodes.</li>
                <li><b>Formuler des indicateurs observables</b> : un fait constatable (« l’enseignant reformule la question »), pas une interprétation (« l’enseignant est bienveillant »).</li>
                <li><b>Séparer traces et commentaires</b> : une colonne pour le fait, une autre pour l’hypothèse d’analyse.</li></ol>
                <table class="t"><tr><th>Temps / phase</th><th>Ce qui est proposé aux élèves</th><th>Ce que fait l’enseignant</th><th>Commentaires / hypothèses</th></tr><tr><td>&nbsp;</td><td></td><td></td><td></td></tr></table>` },
              { titre: "2.3 Verbatim et récit de pratique", html: `
                <p>Le <b>verbatim</b> est la transcription fidèle et intégrale des échanges d’une séance, sans reformulation : il conserve hésitations, silences et tours de parole. Le <b>récit de pratique</b> est un écrit à la première personne relatant a posteriori une situation vécue : il donne accès aux intentions et au ressenti.</p>
                <p class="pb"><b>Consigne type :</b> « Décrivez une situation de classe récente qui vous a interrogé(e) ou mis(e) en difficulté. Précisez le contexte, ce que vous avez fait, ce que vous avez pensé sur le moment, et ce que vous en comprenez à présent. »</p>` },
              { titre: "2.4 L’analyse croisée entre pairs", html: `
                <ol><li>Exposé de la situation par le praticien, sans interruption.</li><li>Questions de clarification factuelle, sans jugement ni conseil.</li><li>Hypothèses d’analyse des pairs, distinguées des faits.</li><li>Retour du praticien sur les hypothèses.</li><li>Synthèse collective des apprentissages transférables.</li></ol>
                <p>Le but n’est jamais de trouver « la bonne solution », mais de multiplier les hypothèses de compréhension.</p>` },
              { titre: "2.5 Entretien d’explicitation et de co-explicitation", html: `
                <p>L’<b>entretien d’explicitation</b> (Vermersch, 1994) amène le praticien à décrire le déroulement précis de son action : le « comment » plutôt que le « pourquoi », qui induit une justification. Questions types : « Qu’avez-vous fait à ce moment précis ? », « Comment saviez-vous qu’il fallait le faire ? ». Conduit entre pairs en fin de séance, on parle d’entretien de <b>co-explicitation</b>.</p>` }
            ],
            activite: "Construisez une grille d’observation ciblée sur la gestion des erreurs des élèves : objectif, unité d’observation, quatre indicateurs observables, colonnes « trace » et « commentaire ».",
            quiz: [
              { id: "APP2-1", cap: "FK", pts: 1, type: "ordre", enonce: "Classer dans l’ordre les étapes de construction d’une grille d’observation.", items: ["Définir l’objectif d’observation", "Choisir l’unité d’observation", "Formuler des indicateurs observables", "Prévoir une colonne de traces et une colonne de commentaires"], retour: "Objectif → unité → indicateurs → séparation trace / commentaire." },
              { id: "APP2-2", cap: "FA", pts: 1, type: "qcm", enonce: "Lequel de ces énoncés est un indicateur observable ?", options: ["L’enseignant reformule la question après une réponse erronée", "L’enseignant est bienveillant", "Les élèves sont motivés", "La séance est bien menée"], rep: 0, retour: "Un indicateur décrit un fait constatable, pas une interprétation ni un jugement." },
              { id: "APP2-3", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque outil à ce qu’il apporte.",
                gauche: ["Verbatim", "Récit de pratique", "Grille ciblée", "Entretien d’explicitation"],
                droite: ["Description précise du déroulement de l’action vécue", "Analyse fine d’un objet précis de la séance", "Faits de langage exacts, silences et tours de parole", "Intentions et ressenti du praticien"], rep: [2, 3, 1, 0], retour: "Verbatim : les faits de langage ; récit : la subjectivité ; grille ciblée : un objet précis ; explicitation : le « comment »." },
              { id: "APP2-4", cap: "FK", pts: 1, type: "qcm", enonce: "Dans un entretien d’explicitation, on évite les questions en « pourquoi » car elles :", options: ["induisent une justification a posteriori au lieu d’une description de l’action", "sont trop longues", "ne sont comprises que des spécialistes", "portent sur la discipline et non sur la pédagogie"], rep: 0, retour: "Le « pourquoi » appelle une justification ; on vise la description du vécu de l’action." },
              { id: "APP2-5", cap: "FK", pts: 1, type: "ordre", enonce: "Classer dans l’ordre les temps d’une analyse croisée entre pairs.", items: ["Exposé de la situation par le praticien", "Questions de clarification factuelle", "Hypothèses d’analyse des pairs", "Retour du praticien sur les hypothèses", "Synthèse collective"], retour: "Exposé → clarification → hypothèses → retour du praticien → synthèse." }
            ]
          },
          {
            titre: "Partie 3 — Mise en œuvre de l’analyse de pratiques professionnelles",
            cours: [
              { titre: "3.1 Le praticien réflexif", html: `
                <p>Le praticien réflexif (Schön, 1983) réfléchit <b>dans</b> l’action (ajustements en temps réel) et <b>sur</b> l’action (retour a posteriori). Cette posture permet de sortir de la reproduction de routines pour entrer dans une régulation continue de sa pratique. Elle doit être <b>outillée</b> : livrée à elle-même, la réflexion d’un débutant reste superficielle ou auto-justificatrice (Altet, 2000).</p>` },
              { titre: "3.2 La démarche fonctionnelle en cinq étapes", html: `
                <table class="t"><tr><th>Étape</th><th>Ce que l’on fait</th></tr>
                <tr><th>1. Observation</th><td>Recueillir des données objectivables, sans les interpréter</td></tr>
                <tr><th>2. Problématisation</th><td>Identifier une question ou une tension qui interroge</td></tr>
                <tr><th>3. Analyse</th><td>Relier les observations à des cadres de référence pour formuler des hypothèses</td></tr>
                <tr><th>4. Conceptualisation</th><td>Dégager un principe transférable à d’autres situations</td></tr>
                <tr><th>5. Pratiques alternatives</th><td>Envisager des ajustements concrets pour les situations futures</td></tr></table>
                <p>La démarche n’est pas strictement linéaire : l’analyse peut faire reformuler la problématique.</p>` },
              { titre: "3.3 Exemple guidé", html: `
                <p>Un enseignant fait répéter collectivement une définition avant l’exercice d’application.</p>
                <ul><li><b>Observation</b> : définition répétée trois fois, puis en chœur — environ 6 minutes sur 50.</li>
                <li><b>Problématisation</b> : pourquoi tant de temps avant que les élèves aient manipulé le concept ?</li>
                <li><b>Analyse</b> : débutant (personnelle), formé là où l’inspection valorisait la restitution du vocabulaire (institutionnelle), craint les erreurs de termes devant des évaluateurs externes (sociale).</li>
                <li><b>Conceptualisation</b> : tension entre fidélité au vocabulaire prescrit et temps d’appropriation conceptuelle.</li>
                <li><b>Alternative</b> : faire formuler la définition par les élèves après une première manipulation.</li></ul>` },
              { titre: "3.4 Conduire l’entretien de co-explicitation", html: `
                <ul><li>Débuter par une question ouverte sur le vécu global.</li><li>Revenir sur un ou deux moments précis, en demandant une description factuelle.</li><li>Éviter les questions fermées ou orientées.</li><li>Laisser des silences.</li><li>Terminer vers l’avenir : « Que referiez-vous ? Que changeriez-vous ? »</li></ul>` },
              { titre: "3.5 Les écueils à éviter", html: `
                <ul><li><b>Glissement vers le jugement</b> : qualifier la pratique de bonne ou mauvaise.</li><li><b>Généralisation hâtive</b> : conclure à partir d’une seule séance.</li><li><b>Confusion fait / interprétation</b> : présenter une hypothèse comme un fait.</li><li><b>Conseil prématuré</b> : proposer une solution avant d’avoir compris.</li><li><b>Oubli du collectif</b> : ignorer les contraintes institutionnelles et sociales.</li></ul>` },
              { titre: "3.6 Analyser une séance d’enseignement explicite (établissements pionniers)", html: `
                <p>Le syllabus de septembre 2026 demande d’analyser aussi les pratiques fondées sur l’<b>enseignement explicite des contenus et des comportements</b>, adopté dans les établissements pionniers. La séance y suit des phases que la grille d’observation peut reprendre une à une :</p>
                <table class="t"><tr><th>Phase</th><th>Ce que l’on observe</th></tr>
                <tr><th>Ouverture</th><td>L’attention est captée ; les prérequis sont activés ; l’objectif d’apprentissage est déclaré <i>et</i> expliqué aux élèves.</td></tr>
                <tr><th>Modelage (« je fais »)</th><td>L’enseignant montre comment réaliser la tâche en « mettant un haut-parleur sur sa pensée » ; le modelage est court ; il s’appuie sur des exemples et des contre-exemples.</td></tr>
                <tr><th>Pratique guidée (« nous faisons »)</th><td>Collective puis en binôme : questions à tous les élèves, travail sur l’ardoise, vérification de la compréhension avant de passer à l’étape suivante, rétroaction sur chaque erreur, verbalisation des démarches.</td></tr>
                <tr><th>Pratique autonome (« vous faites »)</th><td>Consignes claires ; travail individuel d’une durée suffisante ; l’enseignant circule et soutient les élèves en difficulté.</td></tr>
                <tr><th>Clôture</th><td>Récapitulation des éléments essentiels à retenir.</td></tr></table>
                <p><b>Points de vigilance relevés en SVT</b> (support de formation « Collèges pionniers », avril 2026) : l’objectif est déclaré mais pas toujours explicité ; le modelage montre « quoi faire » sans montrer « comment penser » ; la pratique guidée ne sollicite que quelques volontaires ; la correction valide les réponses sans analyser les erreurs ; le binôme démarre sans temps de réflexion individuelle ; la pratique autonome commence avant que les acquis soient consolidés.</p>
                <p>Ces points ne servent pas à juger la séance : chacun devient une <b>question d’analyse</b> à traiter avec les cinq étapes de la démarche.</p>` },
              { titre: "3.7 Accompagner l’analyse : posture et réinvestissement", html: `
                <p>Celui qui accompagne une analyse (formateur, tuteur de stage, pair) adopte une posture de <b>non-jugement</b> : il questionne au lieu de conseiller, part des faits, laisse le praticien formuler lui-même ses pistes. L’entretien de co-explicitation est son outil principal.</p>
                <p>Les analyses se font en dyades ou en groupe, à partir de séances de <b>micro-enseignement</b>, d’extraits filmés en stage, de verbatim ou de récits de pratique. Elles sont à réinvestir : grilles utilisées pendant les stages, analyses versées au <b>portfolio</b>.</p>` }
            ],
            activite: "Rédigez un récit de pratique (contexte, situation vécue, ce que j’ai pensé, ce que j’en comprends, ce que je veux approfondir), puis appliquez-lui les cinq étapes de la démarche. Vérifiez votre production avec la grille d’auto-évaluation du support (§3.6).",
            quiz: [
              { id: "APP3-1", cap: "FK", pts: 1, type: "ordre", enonce: "Classer dans l’ordre les cinq étapes de la démarche fonctionnelle.", items: ["Observation", "Problématisation", "Analyse", "Conceptualisation / théorisation", "Conception de pratiques alternatives"], retour: "Observer → problématiser → analyser → conceptualiser → concevoir des alternatives." },
              { id: "APP3-2", cap: "FA", pts: 1, type: "assoc", enonce: "Dans l’exemple de la définition répétée, associer chaque énoncé à l’étape de la démarche.",
                gauche: ["« La définition est répétée trois fois, soit 6 minutes sur 50. »", "« Pourquoi tant de temps avant toute manipulation ? »", "« La formation reçue valorisait la restitution du vocabulaire. »", "« Tension entre vocabulaire prescrit et temps d’appropriation. »", "« Faire formuler la définition par les élèves après manipulation. »"],
                droite: ["Analyse", "Pratique alternative", "Observation", "Conceptualisation", "Problématisation"], rep: [2, 4, 0, 3, 1], retour: "Fait daté = observation ; question = problématisation ; hypothèse rattachée à un cadre = analyse ; principe général = conceptualisation ; piste = alternative." },
              { id: "APP3-3", cap: "FA", pts: 1, type: "assoc", enonce: "Associer chaque remarque d’un observateur à l’écueil qu’elle illustre.",
                gauche: ["« C’était une mauvaise séance. »", "« Ce stagiaire ne sait pas gérer une classe », après une seule visite", "« À ta place, j’aurais fait des groupes », dès le début de l’échange", "« Il a ignoré l’élève parce qu’il ne l’aime pas », présenté comme un fait"],
                droite: ["Conseil prématuré", "Confusion entre fait et interprétation", "Glissement vers le jugement", "Généralisation hâtive"], rep: [2, 3, 0, 1], retour: "Juger, généraliser, conseiller trop tôt et confondre fait et hypothèse bloquent l’analyse." },
              { id: "APP3-4", cap: "FK", pts: 1, type: "trous", enonce: "Compléter.", texte: "Selon Schön, le praticien réflexif réfléchit {0} l’action, par des ajustements en temps réel, et {1} l’action, par un retour a posteriori. Pour être formatrice, cette réflexion doit être {2}.",
                choix: [["dans", "sur", "contre"], ["sur", "dans", "avant"], ["outillée", "spontanée", "notée"]], rep: [0, 0, 0], retour: "Réflexion dans l’action et sur l’action ; la réflexion spontanée d’un débutant reste superficielle sans outils." },
              { id: "APP3-5", cap: "FA", pts: 1, type: "qcm", enonce: "Quelle question convient le mieux pour ouvrir un entretien de co-explicitation ?", options: ["« Comment as-tu vécu cette séance, globalement ? »", "« Pourquoi n’as-tu pas fait travailler les élèves en groupes ? »", "« Tu ne trouves pas que c’était trop long ? »", "« Est-ce que tu as atteint tes objectifs, oui ou non ? »"], rep: 0, retour: "On débute par une question ouverte sur le vécu ; on évite le « pourquoi », les questions orientées et les questions fermées." },
              { id: "APP3-6", cap: "FK", pts: 1, type: "ordre", enonce: "Classer dans l’ordre les phases d’une séance d’enseignement explicite.", items: ["Ouverture : prérequis et objectif", "Modelage", "Pratique guidée", "Pratique autonome", "Clôture"], retour: "Ouverture → « je fais » → « nous faisons » → « vous faites » → clôture." },
              { id: "APP3-7", cap: "FA", pts: 1, type: "qcm", enonce: "Pendant le modelage, un enseignant de SVT lit la courbe au tableau et donne directement la réponse. Dans une analyse de pratique, on dira que :", options: [
                "le modelage montre « quoi faire » mais n’explicite pas le raisonnement : c’est une question à problématiser avec l’enseignant",
                "la séance est ratée et doit être refaite",
                "l’enseignant ne connaît pas l’enseignement explicite",
                "les élèves n’étaient pas attentifs"], rep: 0, retour: "On part du fait observé, on le rattache à la phase concernée, puis on problématise — sans juger la séance ni la personne." }
            ]
          }
        ],
        ressources: [
          ["Syllabus du module APP — cycle collégial (septembre 2026)", D + "syllabus-app-college-2026.pdf"],
          ["Syllabus du module APP — cycle qualifiant (septembre 2026)", D + "syllabus-app-qualifiant-2026.pdf"],
          ["Support de cours complet — APP (Pr. Moubchir)", D + "support-de-cours-app-moubchir.pdf"],
          ["Grilles d’observation pour l’APP", APP + "Grilles d observation pour APP .pdf", true],
          ["Grille d’observation d’un scénario pédagogique", APP + "grille_d_observation_d_un_sénario_pédagogique.pdf", true],
          ["Grille d’autoévaluation de l’enseignement explicite", D + "grille-enseignement-explicite.pdf"],
          ["Guide 1 — Adopter des pratiques pédagogiques efficaces (collèges pionniers)", D + "guide-1-pratiques-pedagogiques-efficaces.pdf"],
          ["Examen blanc — APP", D + "examen-blanc-app.pdf"]
        ]
      },
      {
        id: "ESR", code: "M13", titre: "Évaluation des apprentissages, soutien et remédiation",
        devise: "Évaluer pour comprendre, soutenir pour faire progresser",
        volume: "34 heures : 18 % cours, 70 % activités pratiques, 12 % évaluation",
        competence: "Au terme de ce module, l’étudiant sera capable de mettre en place un processus d’évaluation des apprentissages, de soutien et de remédiation en cohérence avec la fonction visée, en mobilisant les ressources institutionnelles, théoriques et méthodologiques appropriées.",
        objectifs: ["Connaître les concepts, les démarches, les types, les fonctions et le processus de l’évaluation des apprentissages.", "S’approprier les prescriptions institutionnelles en matière d’évaluation des apprentissages.", "Élaborer des outils d’évaluation en fonction des objets évalués et de l’intention d’évaluation.", "Analyser les données recueillies d’une évaluation.", "Interpréter les résultats de l’analyse des données recueillies.", "Concevoir des plans de remédiation et de soutien.", "Communiquer les résultats des évaluations aux parties prenantes."],
        prerequis: ["Notions de base de sciences de l’éducation.", "Notions de base de didactique de la discipline de spécialité.", "Notions de base des TICE et de l’intelligence artificielle."],
        reinvest: ["Production et passation de différents types d’évaluation.", "Correction des copies et analyse des données.", "Élaboration et mise en œuvre de plans de remédiation et de soutien."],
        evaluation: "Contrôle continu 25 % ; examen de fin de module 75 % (syllabus de septembre 2026).",
        outil: "notes",
        parties: [
          {
            titre: "Partie 1 — Fondements de l’évaluation des apprentissages",
            cours: [
              { titre: "1. Concepts de base", html: `
                <p class="def"><b>Évaluation :</b> processus conduisant à juger le degré d’adéquation d’informations recueillies aux objectifs fixés, en vue de prendre une décision.</p>
                <p>L’<b>évaluation pédagogique</b> est un outil de régulation des enseignements-apprentissages. Le <b>soutien pédagogique</b> est l’ensemble des moyens utilisés, en classe ou en dehors, pour pallier les difficultés d’apprentissage. La <b>remédiation</b>, inscrite dans une pédagogie différenciée, est un levier pour créer les conditions de réussite de chaque élève. Les trois sont indissociables.</p>` },
              { titre: "2. Types d’évaluation", html: `
                <table class="t"><tr><th>Type</th><th>Quand ?</th><th>Quoi ?</th><th>Pour quoi ?</th></tr>
                <tr><th>Diagnostique</th><td>En début d’apprentissage</td><td>Prérequis, représentations initiales</td><td>Anticiper les obstacles, adapter l’enseignement</td></tr>
                <tr><th>Formative</th><td>Pendant l’apprentissage</td><td>Acquis en cours de construction</td><td>Réguler, repérer les difficultés, donner un retour</td></tr>
                <tr><th>Sommative</th><td>Au terme d’un apprentissage</td><td>Degré de maîtrise d’un bloc, d’un palier</td><td>Situer l’apprenant et décider (passage, orientation)</td></tr>
                <tr><th>Certificative</th><td>Au terme d’un cycle</td><td>Maîtrise par rapport au niveau minimal attendu</td><td>Valider et certifier</td></tr>
                <tr><th>Informative</th><td>À tout moment</td><td>Qualité des outils d’évaluation</td><td>Garantir validité, fidélité, équité</td></tr></table>
                <p>On passe d’une vision « sanction / récompense » à un outil de régulation et de formation.</p>` },
              { titre: "3. Fonctions, formes, objets et processus", html: `
                <p><b>Trois fonctions</b> : l’<b>orientation</b> (décider du point de départ ou du parcours — évaluation diagnostique), la <b>régulation</b> (ajuster l’enseignement et l’apprentissage en cours de route — évaluation formative), la <b>validation / certification</b> (attester des acquis — évaluations sommative et certificative).</p>
                <p><b>Trois formes</b>, selon celui qui évalue :</p>
                <ul><li><b>Autoévaluation</b> : l’élève juge sa propre production à l’aide de critères qui lui sont donnés.</li>
                <li><b>Évaluation mutuelle</b> (par les pairs) : les élèves évaluent les productions les uns des autres avec les mêmes critères.</li>
                <li><b>Co-évaluation</b> : l’élève et l’enseignant confrontent leurs deux jugements sur la même production.</li></ul>
                <p><b>Trois objets</b> : des <b>contenus</b> (savoirs), des <b>objectifs</b> (comportements observables attendus), des <b>compétences</b> (mobilisation de ressources dans une situation complexe).</p>
                <p><b>Un processus en cinq temps</b> : élaboration et passation → collecte des données (correction, recueil) → jugement (analyse, interprétation) → prise de décision → communication des résultats.</p>` },
              { titre: "4. L’évaluation dans les collèges pionniers", html: `
                <p>Le modèle des collèges pionniers a sa propre terminologie, à connaître :</p>
                <table class="t"><tr><th>Terme</th><th>Ce qu’il désigne</th></tr>
                <tr><th>Test de positionnement</th><td>Test de début d’année qui situe le niveau réel de maîtrise des prérequis de base de chaque élève.</td></tr>
                <tr><th>Groupes de remédiation</th><td>Groupes homogènes et provisoires, formés d’après le test de positionnement.</td></tr>
                <tr><th>Remédiation intensive</th><td>Programme de 4 semaines en début d’année pour rattraper les lacunes sur les prérequis, avant le programme d’enseignement explicite.</td></tr>
                <tr><th>Palier</th><td>Étape du parcours de remédiation. On ne passe au palier suivant que si la majorité des élèves du groupe (80 %) maîtrise les objectifs du palier.</td></tr>
                <tr><th>Test de fin de palier</th><td>Vérification chiffrée de la maîtrise, qui décide du passage au palier suivant.</td></tr>
                <tr><th>Post-test</th><td>Test de fin de période, de même structure que le test de positionnement, qui mesure les progrès.</td></tr></table>
                <p>En SVT, la remédiation intensive vise cinq fondamentaux : lexique thématique, verbes de consigne, variables, tableaux, graphiques.</p>` },
              { titre: "5. Outils de recueil", html: `
                <ul><li><b>Tests oraux</b> : questions-réponses, exposés (diagnostic, formatif).</li><li><b>Tests pratiques</b> : manipulation, expérimentation — essentiels en SVT.</li>
                <li><b>Tests écrits</b> : objectifs (QCM, appariement, réponses courtes), de rédaction (restitution directe ou organisée), d’exploitation de documents.</li></ul>` },
              { titre: "6. Tests standardisés, nationaux et internationaux", html: `
                <p>L’<b>Instance Nationale d’Évaluation</b> (INE) évalue le système éducatif. Trois niveaux : <b>macro</b> (le système, les politiques, les cycles), <b>méso</b> (établissements, programmes), <b>micro</b> (les acquis des apprenants : <b>PNEA</b> au niveau national ; PIRLS, TIMSS, PISA au niveau international).</p>` }
            ],
            activite: "Pour une séquence de SVT de votre choix, proposez une évaluation diagnostique, une évaluation formative et une évaluation sommative : précisez pour chacune le moment, l’objet et la décision attendue.",
            quiz: [
              { id: "ESR1-6", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque situation à la forme d’évaluation.",
                gauche: ["L’élève vérifie seul son schéma avec une liste de critères", "Deux élèves échangent leurs copies et les corrigent avec la même grille", "L’élève et le professeur comparent leurs jugements sur le même compte rendu"],
                droite: ["Co-évaluation", "Autoévaluation", "Évaluation mutuelle"], rep: [1, 2, 0], retour: "Soi-même : autoévaluation ; entre pairs : évaluation mutuelle ; élève et enseignant ensemble : co-évaluation." },
              { id: "ESR1-7", cap: "FK", pts: 1, type: "qcm", enonce: "Dans un collège pionnier, un groupe de remédiation passe au palier suivant lorsque :", options: ["la majorité des élèves du groupe (80 %) maîtrise les objectifs du palier", "la date prévue dans la programmation est atteinte", "le meilleur élève du groupe a réussi le test", "la moitié des élèves a la moyenne"], rep: 0, retour: "La programmation n’est qu’indicative : c’est la maîtrise vérifiée (test de fin de palier) qui décide du passage." },
              { id: "ESR1-1", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque type d’évaluation à sa fonction principale.",
                gauche: ["Diagnostique", "Formative", "Sommative", "Certificative"],
                droite: ["Valider un niveau minimal en vue d’un diplôme", "Réguler l’apprentissage en cours", "Repérer prérequis et représentations initiales", "Situer l’apprenant au terme d’un apprentissage pour décider"], rep: [2, 1, 3, 0], retour: "Diagnostique : avant ; formative : pendant ; sommative : au terme ; certificative : validation officielle." },
              { id: "ESR1-2", cap: "FK", pts: 1, type: "trous", enonce: "Compléter la définition.", texte: "L’évaluation est un processus conduisant à juger le degré d’adéquation d’informations recueillies aux {0} fixés, en vue de prendre une {1}.",
                choix: [["objectifs", "horaires", "barèmes"], ["décision", "note", "sanction"]], rep: [0, 0], retour: "Évaluer, c’est comparer des informations à des objectifs pour décider." },
              { id: "ESR1-3", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque objet d’évaluation à son niveau.",
                gauche: ["Les acquis des élèves (PNEA, TIMSS, PISA)", "Un établissement scolaire", "Les politiques publiques d’éducation"],
                droite: ["Macro-évaluation", "Micro-évaluation", "Méso-évaluation"], rep: [1, 2, 0], retour: "Micro : apprenants ; méso : établissements ; macro : système." },
              { id: "ESR1-4", cap: "FK", pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
                { t: "Le soutien pédagogique est intrinsèquement lié à l’évaluation.", v: true },
                { t: "L’évaluation formative intervient uniquement à la fin de l’année.", v: false },
                { t: "Les tests pratiques sont essentiels en SVT.", v: true },
                { t: "Le PNEA est une évaluation internationale.", v: false }
              ], retour: "L’évaluation formative accompagne l’apprentissage ; le PNEA est le programme national d’évaluation des acquis." },
              { id: "ESR1-5", cap: "FA", pts: 1, type: "qcm", enonce: "Avant d’aborder la respiration cellulaire, un professeur vérifie ce que ses élèves savent de la cellule et des échanges gazeux. Il s’agit d’une évaluation :", options: ["diagnostique", "sommative", "certificative", "informative"], rep: 0, retour: "Elle porte sur les prérequis, avant l’apprentissage, pour adapter l’enseignement." }
            ]
          },
          {
            titre: "Partie 2 — Dispositifs d’évaluation : cadre, ressources, conception",
            cours: [
              { titre: "1. Cadre réglementaire", html: `
                <ul><li>Le <b>contrôle continu</b>, encadré par la Note 190 (élaboration, correction et suivi des devoirs).</li><li>L’<b>évaluation diagnostique</b> de début d’année ou de séquence.</li>
                <li>L’<b>examen régional unifié</b> de fin de cycle collégial, sommatif et certificatif, organisé par l’AREF.</li><li>Les <b>dispositifs de soutien scolaire</b> (Décret n° 2.20.472, Programme National de Soutien Scolaire).</li></ul>
                <p>Gouvernance : établissement (conseil de classe), Académie régionale, Ministère et INE.</p>` },
              { titre: "2. Ressources et supports", html: `
                <p>Référentiels officiels, banques de sujets et annales, grilles de critères et barèmes, guides méthodologiques, outils numériques (QCM en ligne, tableur), ressources humaines (inspecteurs, formateurs, pairs : co-élaboration et co-correction).</p>` },
              { titre: "3. Concevoir un sujet", html: `
                <p>La conception s’engage <b>dès la planification</b> de la séquence. Un sujet complet précise :</p>
                <ul><li>une <b>mise en situation</b> ;</li><li>un <b>énoncé</b> clair du problème ou de la performance attendue ;</li><li>le <b>cadrage</b> de la tâche (format, longueur) ;</li><li>les <b>conditions</b> (durée, matériel, aides) ;</li><li>les <b>critères d’évaluation</b>, communiqués avant l’épreuve.</li></ul>
                <p>Un apprenant qui maîtrise les objectifs doit pouvoir réussir : pas de questions pièges ni de consignes implicites.</p>` },
              { titre: "4. Grille de correction et niveaux d’évaluation", html: `
                <p>La grille définit des <b>critères de réussite observables et indépendants</b> (une dizaine, jamais plus de vingt) et un <b>seuil de réussite</b> : l’ensemble minimal de critères à remplir.</p>
                <table class="t"><tr><th>Niveau (De Ketele)</th><th>Ce qui est évalué</th><th>Exemple en SVT</th></tr>
                <tr><th>1. Savoirs</th><td>Restitution de connaissances</td><td>QCM de restitution</td></tr>
                <tr><th>2. Automatismes</th><td>Application d’une procédure connue</td><td>Lecture d’un graphique type</td></tr>
                <tr><th>3. Compétences</th><td>Résolution d’un problème nouveau</td><td>Exploitation d’un dossier documentaire</td></tr>
                <tr><th>4. Réalisation</th><td>Mise en œuvre en situation réelle</td><td>Projet de terrain</td></tr></table>
                <p>Ne pas concentrer tout le dispositif sur les niveaux 1 et 2.</p>
                <p>Une grille de correction complète distingue trois étages : le <b>critère</b> (la qualité attendue : « pertinence de l’analyse du graphique »), l’<b>indicateur</b> (le signe observable : « cite deux valeurs avec leurs unités ») et le <b>descripteur</b> (ce qui caractérise chaque niveau de réussite, de « insuffisant » à « très satisfaisant »).</p>` },
              { titre: "5. Tableau de spécification et qualités d’un outil", html: `
                <p>Le <b>tableau de spécification</b> garantit que l’épreuve couvre ce qui a été enseigné, dans les bonnes proportions. Il croise les contenus (en lignes) et les niveaux d’habileté (en colonnes) et fixe le poids de chaque case :</p>
                <table class="t"><tr><th>Contenu</th><th>Restitution</th><th>Raisonnement et communication</th><th>Total</th></tr>
                <tr><th>Les aliments</th><td>2 pts</td><td>3 pts</td><td>5 pts</td></tr><tr><th>La digestion</th><td>3 pts</td><td>6 pts</td><td>9 pts</td></tr><tr><th>L’absorption intestinale</th><td>3 pts</td><td>3 pts</td><td>6 pts</td></tr>
                <tr><th>Total</th><td>8 pts</td><td>12 pts</td><td>20 pts</td></tr></table>
                <p class="muted small">Exemple chiffré donné à titre d’illustration : les pondérations réelles sont celles du cadre de référence du niveau concerné.</p>
                <p>Trois qualités sont exigées d’un outil : la <b>pertinence</b> (il correspond aux objectifs réellement poursuivis), la <b>validité</b> (il mesure bien ce qu’il prétend mesurer) et la <b>fidélité</b> (il donne le même résultat quel que soit le correcteur ou le moment).</p>` },
              { titre: "6. Construire une épreuve", html: `
                <ul><li><b>Test diagnostique / test de positionnement</b> : centré sur les prérequis indispensables à la suite ; items courts ; résultats lus par objectif (pas de note globale) pour former des groupes de besoin.</li>
                <li><b>Devoir surveillé</b> : couvre une période d’enseignement ; respecte les proportions du cadre de référence entre restitution des connaissances et raisonnement scientifique ; barème et durée annoncés.</li>
                <li><b>Examen normalisé</b> : même épreuve et mêmes conditions pour tous les candidats (examen normalisé local, régional ou national), construite à partir du cadre de référence et corrigée avec une grille commune.</li></ul>
                <p><b>Élèves en situation de handicap</b> : on adapte l’outil et les conditions sans changer l’objectif évalué — temps majoré, énoncés agrandis ou lus à voix haute, réponse orale ou dictée, documents allégés.</p>
                <p>Les outils numériques (questionnaires en ligne, tableur, cette plateforme) aident à concevoir les épreuves, y compris pour l’autoévaluation et la co-évaluation.</p>` }
            ],
            activite: "À partir d’un devoir de SVT du collège, vérifiez la présence des cinq éléments d’un sujet complet, classez chaque question selon les quatre niveaux de De Ketele, puis rédigez une grille de correction avec son seuil de réussite.",
            quiz: [
              { id: "ESR2-1", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque tâche au niveau d’évaluation de De Ketele.",
                gauche: ["Définir la respiration cellulaire", "Lire une valeur sur un graphique de type déjà étudié", "Exploiter un dossier documentaire pour résoudre un problème nouveau", "Mener un projet de terrain sur un écosystème"],
                droite: ["Réalisation", "Savoirs", "Compétences", "Automatismes"], rep: [1, 3, 2, 0], retour: "Savoirs → automatismes → compétences → réalisation, chaque niveau englobant les précédents." },
              { id: "ESR2-2", cap: "FK", pts: 1, type: "qcm", enonce: "Le seuil de réussite d’une grille de correction est :", options: ["l’ensemble minimal de critères à remplir pour que la production soit recevable", "la note maximale de l’épreuve", "la moyenne de la classe", "le nombre de questions du sujet"], rep: 0, retour: "C’est un repère explicite, à communiquer aux apprenants avant l’épreuve." },
              { id: "ESR2-3", cap: "FK", pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
                { t: "La conception de l’évaluation gagne à commencer dès la planification de la séquence.", v: true },
                { t: "Les critères d’évaluation doivent rester inconnus des apprenants.", v: false },
                { t: "Les questions pièges discriminent utilement les apprenants.", v: false },
                { t: "La Note 190 encadre les devoirs de contrôle continu au collège.", v: true }
              ], retour: "Critères communiqués à l’avance ; ni pièges ni consignes implicites." },
              { id: "ESR2-4", cap: "FA", pts: 1, type: "qcm", enonce: "Un devoir ne comporte que des QCM de restitution et des lectures de graphiques types. La critique la plus pertinente est :", options: ["Il se limite aux niveaux 1 et 2 : il renseigne peu sur la maîtrise des compétences", "Il est trop difficile pour des collégiens", "Il évalue trop de niveaux à la fois", "Il ne respecte pas la durée réglementaire"], rep: 0, retour: "Savoirs et automatismes sont les plus simples à évaluer, mais les moins révélateurs des compétences." },
              { id: "ESR2-5", cap: "FK", pts: 1, type: "qcm", enonce: "L’examen régional unifié de fin de cycle collégial est une évaluation :", options: ["sommative et certificative", "diagnostique", "formative", "informative"], rep: 0, retour: "Il sanctionne l’ensemble du cycle et participe à la certification." },
              { id: "ESR2-6", cap: "FK", pts: 1, type: "assoc", enonce: "Dans une grille de correction, associer chaque énoncé à ce qu’il est.",
                gauche: ["« Pertinence de l’analyse du graphique »", "« Cite deux valeurs avec leurs unités »", "« Très satisfaisant : toutes les valeurs utiles sont citées et comparées »"],
                droite: ["Descripteur", "Critère", "Indicateur"], rep: [1, 2, 0], retour: "Critère : la qualité attendue ; indicateur : le signe observable ; descripteur : la description d’un niveau de réussite." },
              { id: "ESR2-7", cap: "FK", pts: 1, type: "qcm", enonce: "Le tableau de spécification sert d’abord à :", options: ["vérifier que l’épreuve couvre les contenus enseignés et les niveaux d’habileté dans les proportions voulues", "calculer la moyenne de la classe", "classer les élèves par groupes de besoin", "communiquer les notes aux parents"], rep: 0, retour: "Il se construit avant de rédiger les questions : contenus en lignes, habiletés en colonnes, poids dans les cases." }
            ]
          },
          {
            titre: "Partie 3 — Analyse des données, interprétation et communication des résultats",
            cours: [
              { titre: "1. Paramètres statistiques", html: `
                <ul><li><b>Tendance centrale</b> : moyenne, médiane (partage l’effectif en deux moitiés), mode (note la plus fréquente). La médiane est utile quand des valeurs extrêmes déforment la moyenne.</li>
                <li><b>Dispersion</b> : étendue, variance, écart-type. Un écart-type élevé traduit un groupe hétérogène.</li><li><b>Histogramme</b> des notes : il fait apparaître d’éventuels groupes de niveau.</li></ul>
                <p>Ce diagnostic de groupe doit toujours être complété par une lecture individuelle. L’outil « Analyser les notes d’un devoir » de ce module calcule ces paramètres.</p>` },
              { titre: "2. Indices psychométriques", html: `
                <ul><li><b>Validité</b> : le test mesure bien ce qu’il est censé mesurer.</li><li><b>Fidélité</b> : résultats stables, quel que soit le correcteur ou le moment.</li>
                <li><b>Indice de difficulté</b> : proportion d’apprenants qui réussissent l’item.</li><li><b>Indice de discrimination</b> : capacité de l’item à distinguer ceux qui maîtrisent l’objectif. On le calcule souvent comme la différence entre le taux de réussite du groupe fort et celui du groupe faible.</li><li><b>Cohérence</b> (interne) : les items d’une même épreuve vont dans le même sens — un élève qui réussit l’ensemble réussit en général chaque item.</li><li><b>Objectivité</b> : indépendance du jugement par rapport à l’évaluateur.</li></ul>
                <p><b>Analyse d’un test de positionnement (« grouping »)</b> : on ne calcule pas une moyenne, on relève pour chaque élève les objectifs maîtrisés ou non, puis on regroupe les élèves qui ont le même profil dans un même groupe de remédiation, homogène et provisoire.</p>` },
              { titre: "3. Interpréter avec prudence", html: `
                <p>La performance observée ne reflète jamais directement l’apprentissage réel. Biais de <b>contexte</b> (stress, fatigue), biais liés à la <b>tâche et à l’image de soi</b> (un même exercice présenté comme « géométrie » ou « dessin » ne donne pas les mêmes résultats — Huguet et Monteil, 1991), biais de <b>compensation</b> (la moyenne masque une lacune essentielle).</p>
                <ul><li>Croiser plusieurs sources d’évaluation.</li><li>Lire les résultats par rapport aux critères (référence critériée) autant que par rapport au groupe (référence normée).</li><li>Distinguer analyse de groupe et analyse individuelle.</li><li>Identifier des profils d’erreurs pour orienter la remédiation.</li></ul>` },
              { titre: "4. Communiquer les résultats", html: `
                <p><b>En évaluation formative</b> : juger la production et non la personne ; commencer par les points réussis ; limiter à deux ou trois points à travailler, hiérarchisés ; formuler des conseils concrets tournés vers l’avenir.</p>
                <p><b>En évaluation sommative ou certificative</b> : l’appréciation justifie la décision en indiquant factuellement les critères atteints ou non.</p>
                <table class="t"><tr><th>Destinataire</th><th>Ce qu’il attend</th><th>Support</th></tr>
                <tr><th>L’apprenant</th><td>Savoir ce qui est réussi, ce qui reste à travailler et comment</td><td>Annotations sur la copie, appréciation qualitative, correction collective</td></tr>
                <tr><th>Les parents ou tuteurs</th><td>Situer leur enfant et savoir comment l’aider</td><td>Bulletin de notes, appréciation, rencontre</td></tr>
                <tr><th>L’administration</th><td>Disposer de notes fiables pour le suivi et les décisions du conseil de classe</td><td>Notes chiffrées saisies dans les délais, relevés</td></tr></table>
                <p>Le syllabus insiste sur les <b>appréciations qualitatives</b> destinées aux apprenants : une note seule ne dit pas quoi faire pour progresser.</p>` }
            ],
            activite: "Saisissez les notes d’un devoir réel dans l’outil du module. Décrivez la distribution, repérez les groupes de besoin, puis rédigez pour une copie une appréciation formative conforme aux quatre principes du cours.",
            quiz: [
              { id: "ESR3-1", cap: "FA", pts: 1, type: "num", enonce: "Les notes de cinq élèves sont : 6 ; 9 ; 10 ; 12 ; 18. Quelle est la médiane ?", rep: 10, tol: 0, unite: "/ 20", retour: "La médiane est la valeur centrale de la série ordonnée : 10. La moyenne (11) est tirée vers le haut par le 18." },
              { id: "ESR3-2", cap: "FA", pts: 1, type: "num", enonce: "Dans une classe de 40 élèves, 30 réussissent une question. Quel est son indice de difficulté ?", rep: 0.75, tol: 0.001, unite: "", retour: "Proportion de réussite : 30 ÷ 40 = 0,75." },
              { id: "ESR3-3", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque qualité d’un test à sa définition.",
                gauche: ["Validité", "Fidélité", "Indice de discrimination", "Objectivité"],
                droite: ["Indépendance du jugement par rapport à l’évaluateur", "Capacité à mesurer ce que l’on veut mesurer", "Capacité d’un item à distinguer ceux qui maîtrisent l’objectif", "Stabilité des résultats"], rep: [1, 3, 2, 0], retour: "Validité : pertinence de la mesure ; fidélité : stabilité ; discrimination : pouvoir de distinction ; objectivité : indépendance du correcteur." },
              { id: "ESR3-4", cap: "FA", pts: 1, type: "qcm", enonce: "Laquelle de ces appréciations respecte les principes d’une communication formative ?", options: [
                "« Le graphique est bien construit et légendé. À travailler : citer des valeurs dans la description, puis conclure par une phrase qui répond à la question. »",
                "« Tu ne fais aucun effort, c’est insuffisant. »", "« Travail faible. 7/20. »", "« Dix points à revoir : orthographe, soin, titre, unités, échelle, légende, analyse, conclusion, vocabulaire, présentation. »"], rep: 0,
                retour: "Elle porte sur la production, commence par le réussi, limite les points à travailler et donne des conseils concrets." },
              { id: "ESR3-5", cap: "FK", pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
                { t: "Un écart-type élevé traduit un groupe hétérogène.", v: true },
                { t: "La moyenne de plusieurs notes peut masquer une lacune essentielle.", v: true },
                { t: "Une note isolée suffit pour décider d’une orientation.", v: false },
                { t: "La référence critériée compare l’apprenant aux autres élèves de la classe.", v: false }
              ], retour: "La référence critériée compare aux critères ; la référence normée, au groupe. On croise toujours plusieurs sources." },
              { id: "ESR3-6", cap: "FA", pts: 1, type: "num", enonce: "Une question est réussie par 90 % des élèves du groupe fort et par 30 % des élèves du groupe faible. Quel est son indice de discrimination ?", rep: 0.6, tol: 0.001, unite: "", retour: "0,90 − 0,30 = 0,60 : la question distingue bien les élèves qui maîtrisent l’objectif." }
            ]
          },
          {
            titre: "Partie 4 — Exploiter les résultats : soutien et remédiation",
            cours: [
              { titre: "1. De l’évaluation à l’intervention", html: `
                <ul><li>L’évaluation <b>diagnostique</b> révèle des lacunes → mesures <b>préventives</b> avant le nouvel apprentissage.</li>
                <li>L’évaluation <b>formative</b> montre des difficultés → interventions <b>immédiates</b>.</li><li>L’évaluation <b>sommative</b> montre des objectifs non atteints → remédiation <b>compensatoire</b> en fin de séquence.</li></ul>` },
              { titre: "2. Stratégies et types de soutien", html: `
                <p><b>Stratégie préventive</b> : anticiper les difficultés récurrentes sur des notions sensibles. <b>Stratégie corrective</b> : cibler un groupe homogène d’apprenants partageant les mêmes difficultés.</p>
                <ul><li><b>Soutien intégré</b> : en classe, en continu.</li><li><b>Soutien institutionnel</b> : dans l’établissement (groupes de besoin, heures dédiées).</li><li><b>Soutien externe</b> : avec des partenaires (associations, programme national).</li></ul>` },
              { titre: "3. Organiser la remédiation", html: `
                <ol><li><b>Diagnostic des besoins</b> : analyse des copies et des erreurs, groupes de besoin.</li><li><b>Planification</b> : moment, durée, fréquence — sans intervenir trop tard.</li>
                <li><b>Ressources humaines</b> : enseignant, tutorat par les pairs, intervenants.</li><li><b>Modalités</b> : ateliers ciblés, fiches différenciées, auto-correction guidée.</li>
                <li><b>Suivi</b> : nouvelle évaluation formative sur les objectifs travaillés.</li><li><b>Communication</b> avec les familles et l’administration.</li></ol>` },
              { titre: "4. Remédiation intensive et soutien étalé dans les collèges pionniers", html: `
                <p><b>Remédiation intensive</b> — 4 semaines en début d’année :</p>
                <ol><li><b>Test de positionnement</b> : niveau réel de chaque élève sur les prérequis de base.</li>
                <li><b>Groupes de remédiation</b> homogènes et provisoires, chacun avec un parcours adapté.</li>
                <li><b>Séances de remédiation</b> conduites en enseignement explicite : modelage, pratique guidée, pratique autonome, puis séances de consolidation.</li>
                <li><b>Suivi</b> : contrôle de la maîtrise pendant la pratique autonome, grille d’auto-évaluation de l’élève, test de fin de palier. On avance au rythme du groupe : passage au palier suivant quand 80 % des élèves maîtrisent ; sinon on prolonge.</li>
                <li><b>Post-test</b>, puis début du programme d’enseignement explicite.</li></ol>
                <table class="t"><tr><th>Niveau</th><th>Palier 1</th><th>Palier 2</th></tr>
                <tr><th>1AC</th><td>Lexique thématique, verbes de consigne, variables</td><td>Tableau simple (2 lignes), graphique en courbe simple</td></tr>
                <tr><th>2AC</th><td>Variables</td><td>Tableau simple (3 lignes), courbe à plusieurs segments</td></tr>
                <tr><th>3AC</th><td>Variables</td><td>Tableau à double entrée, graphique à double courbe</td></tr></table>
                <p>Des activités de défi sont prévues pour les élèves avancés.</p>
                <p><b>Soutien étalé</b> : après la période intensive, le soutien se poursuit tout au long de l’année pour les élèves dont les lacunes persistent, à partir des résultats des évaluations. Le guide officiel du soutien étalé (en arabe) figure dans les ressources du module.</p>` },
              { titre: "À retenir", html: `
                <ul><li>Évaluer, c’est d’abord réguler.</li><li>La rigueur méthodologique conditionne l’équité.</li><li>Soutien et remédiation sont l’aboutissement pédagogique de l’évaluation.</li></ul>
                <p>Le parcours élève de cette plateforme applique ce cycle : évaluation formative par palier, analyse des erreurs par capacité, remédiation, nouvelle évaluation.</p>` }
            ],
            activite: "À partir des résultats d’un devoir (réel ou fourni en TD), identifiez deux groupes de besoin, choisissez pour chacun une stratégie et un type de soutien, puis rédigez un plan de remédiation en six étapes.",
            quiz: [
              { id: "ESR4-1", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque constat à l’intervention qui en découle.",
                gauche: ["Lacunes révélées par l’évaluation diagnostique", "Difficultés repérées par l’évaluation formative", "Objectifs non atteints à l’évaluation sommative"],
                droite: ["Remédiation compensatoire en fin de séquence", "Mesures préventives avant le nouvel apprentissage", "Interventions immédiates en cours d’apprentissage"], rep: [1, 2, 0], retour: "C’est la forme d’évaluation qui révèle la difficulté qui fixe le moment de l’intervention." },
              { id: "ESR4-2", cap: "FK", pts: 1, type: "assoc", enonce: "Associer chaque situation au type de soutien.",
                gauche: ["Reprise d’une notion en classe pendant la séance", "Groupes de besoin sur des heures dédiées dans l’établissement", "Accompagnement par une association partenaire"],
                droite: ["Soutien externe", "Soutien intégré", "Soutien institutionnel"], rep: [1, 2, 0], retour: "Intégré : en classe ; institutionnel : dans l’établissement ; externe : avec des partenaires." },
              { id: "ESR4-3", cap: "FK", pts: 1, type: "ordre", enonce: "Classer dans l’ordre les étapes d’organisation d’une remédiation.", items: ["Diagnostic des besoins", "Planification", "Mobilisation des ressources humaines", "Choix des modalités", "Suivi et évaluation du dispositif"], retour: "Diagnostiquer → planifier → mobiliser → choisir les modalités → vérifier l’efficacité." },
              { id: "ESR4-4", cap: "FA", pts: 1, type: "qcm", enonce: "Après un devoir, huit élèves confondent décrire et expliquer un graphique. La réponse la plus adaptée est :", options: [
                "Une stratégie corrective : réunir ces élèves en groupe de besoin autour d’un atelier ciblé, puis vérifier par une nouvelle évaluation formative",
                "Refaire tout le chapitre avec la classe entière", "Baisser le barème des questions de description", "Attendre l’examen régional pour vérifier"], rep: 0,
                retour: "Groupe homogène, difficulté ciblée, puis contrôle de l’efficacité : c’est la stratégie corrective." },
              { id: "ESR4-5", cap: "FK", pts: 1, type: "vf", enonce: "Répondre par vrai ou faux.", items: [
                { t: "La stratégie préventive anticipe les difficultés sur des notions sensibles.", v: true },
                { t: "Le tutorat par les pairs est une ressource de la remédiation.", v: true },
                { t: "Une remédiation n’a pas besoin d’être évaluée.", v: false }
              ], retour: "Sans nouvelle évaluation formative, on ne sait pas si la remédiation a été efficace." },
              { id: "ESR4-6", cap: "FK", pts: 1, type: "ordre", enonce: "Classer dans l’ordre les temps de la remédiation intensive des collèges pionniers.", items: ["Test de positionnement", "Constitution des groupes de remédiation", "Séances de remédiation et de consolidation", "Test de fin de palier", "Post-test"], retour: "Positionner → grouper → remédier → vérifier la maîtrise du palier → mesurer les progrès." }
            ]
          }
        ],
        ressources: [
          ["Syllabus du module Évaluation — cycle collégial (septembre 2026)", D + "syllabus-evaluation-college-2026.pdf"],
          ["Syllabus du module Évaluation — cycle qualifiant (septembre 2026)", D + "syllabus-evaluation-qualifiant-2026.pdf"],
          ["Support de cours complet — Évaluation, soutien et remédiation (Pr. Moubchir)", D + "support-de-cours-evaluation-moubchir.pdf"],
          ["Résumé — Évaluation, soutien et remédiation", D + "resume-evaluation-soutien-remediation.pdf"],
          ["Série d’exercices de TD", D + "td-serie-exercices-evaluation.pdf"],
          ["Guide de l’enseignant sur l’évaluation formative", ESR + "Guide de l’enseignant sur l evaluation formative.pdf", true],
          ["Guide de l’évaluation selon la pédagogie de l’intégration", ESR + "Guide de l’évaluation des apprentissages selon les principes de la pédagogie de l’intégration.pdf", true],
          ["Guide 2 — Remédiation intensive en SVT (collèges pionniers)", D + "guide-2-remediation-intensive-svt.pdf"],
          ["Guide du soutien étalé 2025-2026 (en arabe)", D + "guide-soutien-etale-2025-2026-ar.pdf"],
          ["Test diagnostique 3AC (exemple)", DOS + "Module ESR/EXAM ESR/test diag collège/Test diagnostique -3APIC-.pdf", true]
        ]
      }
    ]
  };
})();
