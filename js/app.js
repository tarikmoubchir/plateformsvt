// Application : routage, parcours élève (séquences, paliers, seuil de 90 %, remédiation), entrée professeur.
(function () {
  const S = window.SVT, KEY = "moubchir_svt_v1";
  const SEQS = Object.values(S.sequences).sort((a, b) => a.ordre - b.ordre);
  // Vrai quand le site est ouvert depuis l'ordinateur (double-clic ou serveur local) ; faux une fois publié en ligne.
  const EN_LOCAL = location.protocol === "file:" || /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  let uid = 0;

  // ---------- état (enregistré dans le navigateur) ----------
  // db = tous les comptes de l'appareil (élèves, classes ajoutées, professeur actif) ; st = le compte élève en cours.
  const vide = () => ({ eleve: null, statut: null, paliers: {}, quiz: {}, caps: {} });
  const today = () => new Date().toISOString().slice(0, 10);
  let db = { eleves: [], courant: null, classes: {}, prof: S.professeurs[0].id, stag: [], stagCourant: null };
  try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (raw && raw.eleves) db = Object.assign(db, raw);
    else if (raw && raw.eleve) { // ancien format : un seul élève, accepté d'office
      raw.eleve.profId = raw.eleve.profId || S.professeurs[0].id;
      db.eleves.push(Object.assign(vide(), raw, { id: "e1", statut: "accepte", date: today() })); db.courant = "e1";
    }
  } catch (e) { /* stockage indisponible */ }
  let st = db.eleves.find(e => e.id === db.courant) || vide();
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* idem */ } };
  const acces = () => !!st.eleve && st.statut === "accepte";

  // ---------- utilitaires ----------
  function h(tag, attrs, ...kids) {
    const e = document.createElement(tag);
    for (const k in (attrs || {})) {
      const v = attrs[k];
      if (k === "class") e.className = v; else if (k === "html") e.innerHTML = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v === true ? "" : v);
    }
    kids.flat(Infinity).forEach(c => { if (c != null && c !== false) e.append(c.nodeType ? c : document.createTextNode(c)); });
    return e;
  }
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const idx = n => Array.from({ length: n }, (_, i) => i);
  const pct = (a, b) => b ? Math.round(100 * a / b) : 0;
  const go = p => { location.hash = p; };
  S.h = h;

  // Index de toutes les questions, et banque commune pour le générateur de devoirs.
  const QI = {};
  SEQS.forEach(s => {
    s.quiz.forEach(q => { QI[q.id] = { q, seq: s }; });
    [1, 2, 3].forEach(n => ["entrainement", "evaluation"].forEach(r => s.paliers[n][r].forEach(ex => ex.questions.forEach(q => { QI[q.id] = { q, seq: s, ex, palier: n }; }))));
  });
  S.bank = () => ({
    restitution: SEQS.flatMap(s => s.quiz.map(q => ({ q, seq: s }))),
    exos: SEQS.flatMap(s => [1, 2, 3].flatMap(n => ["entrainement", "evaluation"].flatMap(r => s.paliers[n][r].map(ex => ({ ex, seq: s, palier: n })))))
  });

  // ---------- questions : affichage, lecture de la réponse, correction ----------
  function qView(q, n) {
    const body = h("div", { class: "q-body" });
    let read;
    if (q.type === "qcm") {
      const name = "q" + uid++;
      shuffle(idx(q.options.length)).forEach(i => body.append(h("label", { class: "opt" }, h("input", { type: "radio", name, value: i }), h("span", { html: q.options[i] }))));
      read = () => { const c = body.querySelector("input:checked"); return c ? +c.value : null; };
    } else if (q.type === "vf") {
      q.items.forEach(it => { const name = "q" + uid++; body.append(h("div", { class: "row" }, h("span", { class: "row-t", html: it.t }), h("span", { class: "vf" }, h("label", {}, h("input", { type: "radio", name, value: 1 }), " Vrai"), h("label", {}, h("input", { type: "radio", name, value: 0 }), " Faux")))); });
      read = () => [...body.querySelectorAll(".row")].map(r => { const c = r.querySelector("input:checked"); return c ? c.value === "1" : null; });
    } else if (q.type === "assoc") {
      const order = shuffle(idx(q.droite.length));
      q.gauche.forEach(g => body.append(h("div", { class: "row" }, h("span", { class: "row-t", html: g }), h("select", { "aria-label": g }, h("option", { value: "" }, "— choisir —"), order.map(i => h("option", { value: i }, q.droite[i]))))));
      read = () => [...body.querySelectorAll("select")].map(s => s.value === "" ? null : +s.value);
    } else if (q.type === "ordre") {
      const order = shuffle(idx(q.items.length)), sels = [];
      order.forEach(i => { const s = h("select", { "aria-label": "Rang" }, h("option", { value: "" }, "rang"), idx(q.items.length).map(r => h("option", { value: r }, r + 1))); sels[i] = s; body.append(h("div", { class: "row" }, s, h("span", { class: "row-t", html: q.items[i] }))); });
      read = () => sels.map(s => s.value === "" ? null : +s.value);
    } else if (q.type === "num") {
      const inp = h("input", { type: "text", inputmode: "decimal", class: "num", "aria-label": "Réponse" });
      body.append(h("div", { class: "row" }, inp, h("span", {}, q.unite || "")));
      read = () => { const v = parseFloat(inp.value.replace(",", ".").replace(/\s/g, "")); return isNaN(v) ? null : v; };
    } else if (q.type === "trous") {
      const p = h("p", { class: "trous" });
      q.texte.split(/\{(\d+)\}/).forEach((part, i) => {
        if (i % 2 === 0) p.append(part);
        else p.append(h("select", { "aria-label": "Mot manquant" }, h("option", { value: "" }, "…"), shuffle(idx(q.choix[+part].length)).map(j => h("option", { value: j }, q.choix[+part][j]))));
      });
      body.append(p);
      read = () => [...p.querySelectorAll("select")].map(s => s.value === "" ? null : +s.value);
    }
    const box = h("div", { class: "q" },
      h("div", { class: "q-head" }, h("span", { class: "q-num" }, "Question " + n), h("span", { class: "tag" }, S.capacites[q.cap].nom), h("span", { class: "pts" }, String(q.pts).replace(".", ",") + " pt")),
      h("p", { class: "q-enonce", html: q.enonce }), body, h("div", { class: "fb" }));
    box.read = read; box.q = q;
    return box;
  }

  // Fraction de réussite (0 à 1) ; null si rien n'a été répondu.
  function grade(q, a) {
    const part = (arr, ok) => arr.every(v => v == null) ? null : arr.filter((v, i) => v != null && ok(v, i)).length / arr.length;
    switch (q.type) {
      case "qcm": return a == null ? null : +(a === q.rep);
      case "num": return a == null ? null : +(Math.abs(a - q.rep) <= (q.tol || 0) + 1e-9);
      case "vf": return part(a, (v, i) => v === q.items[i].v);
      case "assoc": case "trous": return part(a, (v, i) => v === q.rep[i]);
      case "ordre": return part(a, (v, i) => v === i);
    }
  }
  S.solution = function (q) {
    switch (q.type) {
      case "qcm": return q.options[q.rep];
      case "num": return String(q.rep).replace(".", ",") + " " + (q.unite || "");
      case "vf": return q.items.map(it => it.t + " → <b>" + (it.v ? "Vrai" : "Faux") + "</b>").join("<br>");
      case "assoc": return q.gauche.map((g, i) => g + " → <b>" + q.droite[q.rep[i]] + "</b>").join("<br>");
      case "ordre": return q.items.map((t, i) => (i + 1) + ". " + t).join("<br>");
      case "trous": return q.texte.replace(/\{(\d+)\}/g, (_, i) => "<b>" + q.choix[+i][q.rep[+i]] + "</b>");
    }
  };
  function showFb(box, f) {
    const q = box.q, fb = box.querySelector(".fb");
    box.classList.remove("ok", "ko", "mi");
    const cls = f === 1 ? "ok" : f > 0 ? "mi" : "ko";
    box.classList.add(cls);
    fb.innerHTML = "";
    fb.append(h("p", { class: "fb-t" }, f === 1 ? "✔ Réponse correcte" : f > 0 ? "◐ Réponse partiellement correcte" : "✘ Réponse incorrecte"),
      f < 1 ? h("p", { html: "<b>Réponse attendue :</b><br>" + S.solution(q) }) : "", h("p", { html: "<b>À retenir :</b> " + q.retour }));
  }
  function record(q, f) { const c = st.caps[q.cap] || (st.caps[q.cap] = { ok: 0, n: 0 }); c.ok += f; c.n += 1; }

  function exoEl(ex, startN) {
    let n = startN;
    const boxes = ex.questions.map(q => qView(q, ++n));
    const el = h("section", { class: "exo" }, h("h3", {}, ex.titre), h("p", { class: "ctx" }, ex.contexte), ex.docs.map((d, i) => S.docEl(d, i + 1)), boxes);
    return { el, boxes };
  }

  // ---------- progression et verrous ----------
  const pk = (s, n) => s.id + "-P" + n;
  const valide = (s, n) => !!(st.paliers[pk(s, n)] && st.paliers[pk(s, n)].valide);
  const seqDone = s => [1, 2, 3].every(n => valide(s, n));
  const seqOpen = s => { const i = SEQS.indexOf(s); return i === 0 || seqDone(SEQS[i - 1]); };
  const palOpen = (s, n) => seqOpen(s) && (n === 1 || valide(s, n - 1));
  // Leçons explicites du collège : e = compte élève (par défaut l'élève en cours).
  const lecons = e => (e.eleve && (S.lecons || {})[e.eleve.niveau]) || [];
  const lecOk = (l, e) => { const r = ((e || st).lecons || {})[l.id]; return !!(r && r.valide); };
  const lecOpen = (list, l) => { const i = list.indexOf(l); return i === 0 || lecOk(list[i - 1]); };

  // ---------- vues ----------
  function page(...kids) { const a = document.getElementById("app"); a.innerHTML = ""; a.append(...kids.flat(Infinity).filter(Boolean)); window.scrollTo(0, 0); }
  const crumb = (...items) => h("nav", { class: "crumb", "aria-label": "Fil d’Ariane" }, items.map((it, i) => [i ? " › " : "", it[1] ? h("a", { href: it[1] }, it[0]) : h("span", {}, it[0])]));

  function vHome() {
    page(h("section", { class: "hero" },
      h("p", { class: "kicker" }, "Apprendre · Évaluer · Remédier"),
      h("h1", {}, "Plateforme d’apprentissage et d’évaluation en SVT"),
      h("p", { class: "lead" }, "Classe inversée : préparer le cours en autonomie, s’évaluer par paliers, retravailler ses difficultés, puis vérifier ses progrès vers les exigences de l’examen."),
      h("div", { class: "entries" },
        h("a", { class: "entry", href: "#/eleve" }, h("span", { class: "entry-i" }, "🎓"), h("strong", {}, "Je suis élève"), h("span", {}, "Suivre mon parcours : cours, exercices résolus, paliers et remédiation.")),
        h("a", { class: "entry", href: "#/prof" }, h("span", { class: "entry-i" }, "📋"), h("strong", {}, "Je suis professeur"), h("span", {}, "Consulter le cadre de référence, concevoir un devoir surveillé et suivre mes classes.")),
        h("a", { class: "entry", href: "#/crmef" }, h("span", { class: "entry-i" }, "🏛️"), h("strong", {}, "Je suis étudiant CRMEF"), h("span", {}, "Accéder aux modules de formation du Pr. Moubchir : analyse de pratiques, évaluation et remédiation.")))),
      h("section", { class: "cycle" }, ["Enseigner par l’inversion", "Évaluer", "Analyser les difficultés", "Remédier", "Vérifier les progrès"].map((t, i) => h("div", { class: "step" }, h("b", {}, i + 1), t))));
  }

  function vInscription() {
    let prof = null;
    const niveau = h("select", { id: "niv" }, S.niveaux.map(n => h("option", { value: n.id, disabled: !n.actif }, n.nom + (n.actif ? "" : " — bientôt"))));
    const nom = h("input", { type: "text", id: "nom", placeholder: "Prénom et nom", autocomplete: "name" });
    const rech = h("input", { type: "search", id: "rech", placeholder: "Nom du professeur ou de l’établissement" });
    const liste = h("div", { class: "profs" }), classe = h("select", { id: "cl", disabled: true }, h("option", { value: "" }, "Choisir d’abord un professeur"));
    const err = h("p", { class: "err", role: "alert" });
    function maj() {
      const t = rech.value.trim().toLowerCase();
      liste.innerHTML = "";
      S.professeurs.filter(p => !t || (p.nom + " " + p.etablissement).toLowerCase().includes(t)).forEach(p => liste.append(
        h("button", { type: "button", class: "prof" + (prof === p ? " on" : ""), onclick: () => { prof = p; classe.disabled = false; classe.innerHTML = ""; p.classes.forEach(c => classe.append(h("option", {}, c))); maj(); } }, h("strong", {}, p.nom), h("span", {}, p.etablissement))));
      if (!liste.children.length) liste.append(h("p", { class: "muted" }, "Aucun professeur trouvé."));
    }
    rech.addEventListener("input", maj); maj();
    page(crumb(["Accueil", "#/"], ["Inscription élève"]),
      h("h1", {}, "Mon inscription"),
      h("form", { class: "card form", onsubmit: e => {
        e.preventDefault();
        if (!nom.value.trim()) { err.textContent = "Indique ton prénom et ton nom."; return; }
        if (!prof) { err.textContent = "Choisis ton professeur dans la liste."; return; }
        st = Object.assign(vide(), { id: "e" + Date.now(), statut: "attente", date: today(), eleve: { nom: nom.value.trim(), niveau: niveau.value, prof: prof.nom, profId: prof.id, classe: classe.value } });
        db.eleves.push(st); db.courant = st.id;
        save(); go("#/eleve"); vEleve();
      } },
        h("label", { for: "niv" }, "1. Mon niveau scolaire"), niveau,
        h("label", { for: "nom" }, "2. Mon identité"), nom,
        h("label", { for: "rech" }, "3. Je cherche mon professeur pour rejoindre sa liste de classe inversée"), rech, liste,
        h("label", { for: "cl" }, "4. Ma classe"), classe,
        err, h("button", { class: "btn" }, "Envoyer ma demande d’inscription"),
        h("p", { class: "muted" }, "Ta demande sera envoyée à ton professeur : le parcours s’ouvre dès qu’il l’accepte.")));
  }

  const quitter = () => { db.courant = null; st = vide(); save(); };
  function vProfils() {
    const lib = { attente: "demande en attente", accepte: "inscription acceptée", refuse: "demande refusée" };
    page(crumb(["Accueil", "#/"], ["Espace élève"]), h("h1", {}, "Qui es-tu ?"),
      h("div", { class: "profs" }, db.eleves.map(e => h("button", { type: "button", class: "prof", onclick: () => { db.courant = e.id; st = e; save(); vEleve(); } }, h("strong", {}, e.eleve.nom), h("span", {}, e.eleve.classe + " · " + e.eleve.prof + " · " + lib[e.statut])))),
      h("a", { class: "btn", href: "#/eleve/inscription" }, "Nouvelle inscription"));
  }
  function vAttente() {
    const refus = st.statut === "refuse";
    page(crumb(["Accueil", "#/"], ["Mon inscription"]), h("h1", {}, "Bonjour " + st.eleve.nom),
      h("div", { class: "card result " + (refus ? "ko" : "") }, h("h2", {}, refus ? "Demande refusée" : "Demande en attente"),
        h("p", {}, refus ? st.eleve.prof + " n’a pas accepté ta demande. Vérifie le professeur choisi, puis refais une inscription." : "Ta demande a été envoyée à " + st.eleve.prof + " pour la classe " + st.eleve.classe + ". Ton parcours s’ouvrira dès qu’elle sera acceptée."),
        refus && h("button", { class: "btn", onclick: () => { db.eleves = db.eleves.filter(e => e !== st); quitter(); go("#/eleve/inscription"); } }, "Refaire mon inscription"),
        h("button", { class: "btn ghost", onclick: () => { quitter(); vEleve(); } }, "Changer d’élève")),
      !refus && h("p", { class: "muted small" }, "Version de test sur un seul appareil : le professeur accepte la demande dans « Je suis professeur » › « Mes classes »."));
  }

  function vEleve() {
    if (!st.eleve) return db.eleves.length ? vProfils() : vInscription();
    if (!acces()) return vAttente();
    const liens = h("p", { class: "muted small" }, h("button", { class: "link", onclick: () => { quitter(); vEleve(); } }, "Changer d’élève"), " · ",
      h("button", { class: "link", onclick: () => { if (confirm("Effacer ma progression et mon inscription sur cet appareil ?")) { db.eleves = db.eleves.filter(e => e !== st); quitter(); go("#/"); } } }, "Supprimer mon compte"));
    const niv = S.niveaux.find(n => n.id === st.eleve.niveau) || {};
    if (!niv.banque) { // niveau sans paliers : programme officiel, leçons explicites (collège) et résumés de chapitre quand ils existent
      const prog = S.programmes[st.eleve.niveau], lec = lecons(st), res = (S.resumes || {})[st.eleve.niveau] || {};
      const faites = lec.filter(l => lecOk(l)).length, courante = lec.find(l => !lecOk(l)) || lec[0]; // le chapitre de la leçon en cours s'affiche ouvert
      const seqEl = (t, l) => {
        if (!l) return h("li", {}, t);
        const open = lecOpen(lec, l), r = (st.lecons || {})[l.id];
        return h("li", {}, open ? h("a", { href: "#/eleve/lecon/" + l.id }, h("b", {}, t)) : h("b", {}, t), " ",
          h("span", { class: "tag" }, lecOk(l) ? "✔ Leçon validée" + (r ? " (" + r.best + " %)" : "") : open ? "Leçon disponible" : "🔒 Leçon verrouillée"));
      };
      return page(crumb(["Accueil", "#/"], ["Mon parcours"]),
        h("div", { class: "card who" }, h("div", {}, h("h1", {}, "Bonjour " + st.eleve.nom), h("p", { class: "muted" }, (niv.nom || "") + " · " + st.eleve.classe + " · " + st.eleve.prof)),
          lec.length ? h("div", { class: "who-r" }, h("div", { class: "meter", role: "img", "aria-label": faites + " leçons validées sur " + lec.length }, h("i", { style: "width:" + pct(faites, lec.length) + "%" })), h("span", {}, faites + " / " + lec.length + " leçons validées"),
            h("a", { class: "btn ghost", href: "#/eleve/bilan" }, "Mon bilan de compétences")) : null),
        h("p", { class: "note " + (lec.length ? "ok" : "ko") }, lec.length ? "Ouvre un chapitre du programme ci-dessous pour accéder à ses leçons. Chaque leçon suit cinq étapes : ouverture, « je fais », « nous faisons », « tu fais », « je retiens ». La leçon suivante s’ouvre à " + S.site.seuil + " % de réussite."
          : Object.keys(res).length ? "Voici le programme de l’année, avec un résumé de chaque chapitre. Les exercices de ce niveau sont en préparation." : "Les cours et les exercices de ce niveau sont en préparation. Voici le programme de l’année, dans l’ordre des séquences."),
        prog ? prog.unites.map((u, ui) => h("section", { class: "unite" }, h("h2", {}, u.nom), u.chapitres.map((c, ci) => {
          const r = res[ui + "." + ci], mine = lec.filter(l => l.u === ui && l.c === ci);
          const fait = mine.filter(l => lecOk(l)).length;
          return h("details", { class: "card meth-card", open: mine.includes(courante) }, h("summary", {}, c.nom + (mine.length ? " — " + fait + " / " + mine.length + " leçon(s) validée(s)" : r ? " — résumé" : c.sequences.length ? " — " + c.sequences.length + " séquence(s)" : "")),
            c.sequences.length ? h("ol", {}, c.sequences.map((t, si) => seqEl(t, mine.find(l => l.s === si))))
              : mine.length ? h("ul", {}, mine.map(l => seqEl(l.titre.split(" — ").slice(1).join(" — "), l))) : !r && h("p", { class: "muted" }, "Chapitre sans découpage en séquences dans le programme."),
            r && h("div", { class: "lesson resume" }, h("h3", {}, "Résumé du chapitre"), h("div", { html: r })));
        }))) : null, liens);
    }
    const total = SEQS.length * 3, faits = SEQS.reduce((a, s) => a + [1, 2, 3].filter(n => valide(s, n)).length, 0);
    page(crumb(["Accueil", "#/"], ["Mon parcours"]),
      h("div", { class: "card who" },
        h("div", {}, h("h1", {}, "Bonjour " + st.eleve.nom), h("p", { class: "muted" }, st.eleve.classe + " · " + st.eleve.prof + " · inscription acceptée")),
        h("div", { class: "who-r" }, h("div", { class: "meter", role: "img", "aria-label": faits + " paliers validés sur " + total }, h("i", { style: "width:" + pct(faits, total) + "%" })), h("span", {}, faits + " / " + total + " paliers validés"),
          h("a", { class: "btn ghost", href: "#/eleve/bilan" }, "Mon bilan de compétences"))),
      S.unites.map(u => h("section", { class: "unite" }, h("h2", {}, u.nom),
        u.chapitres.length ? u.chapitres.map(c => h("div", { class: "chap" }, h("h3", {}, c.nom),
          c.actif ? h("div", { class: "seqs" }, c.sequences.map(id => seqCard(S.sequences[id]))) : h("p", { class: "muted" }, "Chapitre en préparation.")))
          : h("p", { class: "muted" }, "Unité en préparation."))),
      liens);
  }
  // Leçon du collège en enseignement explicite : ouverture → je fais → nous faisons → tu fais → je retiens.
  function vLecon(id, tab) {
    if (!acces()) return vEleve();
    const list = lecons(st), l = list.find(x => x.id === id);
    if (!l || !lecOpen(list, l)) return go("#/eleve");
    st.lecons = st.lecons || {};
    tab = tab || "ouverture";
    const base = "#/eleve/lecon/" + id + "/", next = list[list.indexOf(l) + 1];
    const tabs = [["ouverture", "1. Ouverture"], ["modelage", "2. Je fais"], ["guidee", "3. Nous faisons"], ["autonome", "4. Tu fais"], ["cloture", "5. Je retiens"]];
    const suite = (t, txt) => h("a", { class: "btn", href: base + t }, txt);
    const verif = boxes => boxes.forEach(b => b.append(h("button", { class: "btn small", onclick: e => { const f = grade(b.q, b.read()); if (f == null) return; showFb(b, f); e.target.textContent = "Vérifier à nouveau"; } }, "Vérifier")));
    const exos = arr => { let n0 = 0; return arr.map(ex => { const x = exoEl(ex, n0); n0 += ex.questions.length; return x; }); };
    let content;
    if (tab === "ouverture") {
      let n = 0; const boxes = l.prerequis.quiz.map(q => qView(q, ++n)); verif(boxes);
      content = h("div", {}, h("div", { class: "card" }, h("h3", {}, "Objectif de la leçon"), h("p", { class: "def" }, l.objectif), h("h3", {}, "Je saurai que j’ai réussi si…"), h("ul", {}, l.reussite.map(x => h("li", {}, x)))),
        h("h2", {}, "J’active ce que je sais déjà"), h("div", { class: "card lesson", html: l.prerequis.html }), boxes, suite("modelage", "Continuer : je fais →"));
    } else if (tab === "modelage") content = h("div", {}, h("p", { class: "muted" }, "Le professeur montre comment faire et dit à voix haute comment il réfléchit. Lis chaque étape avant de passer à la suite."),
      l.modelage.map(m => h("article", { class: "card lesson" }, h("h3", {}, m.titre), h("div", { html: m.html }))), suite("guidee", "Continuer : nous faisons →"));
    else if (tab === "guidee") {
      const parts = exos(l.guidee); parts.forEach(x => verif(x.boxes));
      content = h("div", {}, h("p", { class: "muted" }, "Pratique guidée : réponds, puis vérifie tout de suite. La correction t’explique la démarche. Aucun score n’est enregistré."), parts.map(x => x.el), suite("autonome", "Continuer : tu fais →"));
    } else if (tab === "autonome") {
      const parts = exos(l.autonome), boxes = parts.flatMap(x => x.boxes), r = st.lecons[id], out = h("div", { class: "result", role: "status" }), warn = h("p", { class: "err", role: "alert" });
      content = h("div", {}, h("p", { class: "muted" }, "Pratique autonome : travaille seul, réponds à toutes les questions puis valide. Il faut au moins " + S.site.seuil + " % pour valider la leçon."),
        r && h("p", { class: "note " + (r.valide ? "ok" : "ko") }, (r.valide ? "Leçon validée" : "Leçon non validée") + " — meilleur score : " + r.best + " % (" + r.n + " tentative(s))."),
        parts.map(x => x.el), warn, h("button", { class: "btn", onclick: e => {
          const fs = boxes.map(b => grade(b.q, b.read())), vides = fs.filter(f => f == null).length;
          if (vides && !warn.dataset.ok) { warn.textContent = vides + " question(s) sans réponse. Complète-les, ou clique de nouveau pour valider quand même."; warn.dataset.ok = 1; return; }
          warn.textContent = "";
          let got = 0, tot = 0;
          boxes.forEach((b, i) => { const f = fs[i] || 0; showFb(b, f); record(b.q, f); got += f * b.q.pts; tot += b.q.pts; });
          const sc = pct(got, tot), ok = sc >= S.site.seuil, rec = st.lecons[id] || (st.lecons[id] = { best: 0, n: 0, valide: false });
          rec.n++; rec.best = Math.max(rec.best, sc); rec.valide = rec.valide || ok; st.maj = today(); save();
          out.className = "card result " + (ok ? "ok" : "ko"); out.innerHTML = "";
          out.append(h("p", { class: "score" }, sc + " %"), h("h3", {}, ok ? "Leçon validée" : "Leçon non validée"),
            h("p", {}, ok ? "Bravo : tu as atteint le seuil de " + S.site.seuil + " %." : "Il faut au moins " + S.site.seuil + " %. Lis les corrections ci-dessus, reprends « Je fais » et « Nous faisons », puis recommence."),
            ok ? suite("cloture", "Continuer : je retiens →") : h("div", { class: "bar" }, suite("modelage", "Revoir « Je fais »"), h("button", { class: "btn ghost", onclick: () => vLecon(id, "autonome") }, "Nouvelle tentative")));
          e.target.remove();
        } }, "Valider mon travail"), out);
    } else content = h("div", {}, h("div", { class: "card lesson" }, h("h3", {}, "Ce que je retiens"), h("div", { html: l.cloture })),
      lecOk(l) ? (next ? h("a", { class: "btn", href: "#/eleve/lecon/" + next.id }, "Leçon suivante →") : h("a", { class: "btn", href: "#/eleve" }, "Retour à mon parcours"))
        : h("p", { class: "note ko" }, "Pour ouvrir la leçon suivante, valide l’étape « Tu fais » à " + S.site.seuil + " %."), lecOk(l) ? null : suite("autonome", "Aller à « Tu fais » →"));
    page(crumb(["Accueil", "#/"], ["Mon parcours", "#/eleve"], [l.titre.split(" — ")[0]]), h("h1", {}, l.titre),
      h("div", { class: "tabs", role: "tablist" }, tabs.map(t => h("a", { role: "tab", "aria-selected": t[0] === tab, class: t[0] === tab ? "on" : "", href: base + t[0] }, t[1]))), content);
  }

  function seqCard(s) {
    const open = seqOpen(s), done = seqDone(s);
    return h(open ? "a" : "div", { class: "seq " + (done ? "done" : open ? "open" : "lock"), href: open ? "#/eleve/seq/" + s.id : null },
      h("span", { class: "seq-st" }, done ? "✔ Validée" : open ? "En cours" : "🔒 Verrouillée"),
      h("strong", {}, s.titre),
      h("span", { class: "pals" }, S.paliers.map(p => h("span", { class: "pal" + (valide(s, p.n) ? " ok" : "") }, p.n + " " + p.nom))),
      !open && h("span", { class: "muted small" }, "Se débloque quand les 3 paliers de la séquence précédente sont validés à " + S.site.seuil + " %."));
  }

  function vSeq(id, tab) {
    const s = S.sequences[id];
    if (!acces()) return vEleve();
    if (!s || !seqOpen(s)) return go("#/eleve");
    tab = tab || "cours";
    const tabs = [["cours", "L’essentiel"], ["resolu", "Exercice résolu"], s.modele && ["modele", "Modélisation"], ["quiz", "Quiz du cours"], ["paliers", "Paliers d’exercices"]].filter(Boolean);
    let content;
    if (tab === "cours") content = h("div", {}, h("p", { class: "pb" }, h("b", {}, "Problème : "), s.probleme), s.cours.map(c => h("article", { class: "card lesson" }, h("h3", {}, c.titre), h("div", { html: c.html }))),
      h("a", { class: "btn", href: "#/eleve/seq/" + id + "/resolu" }, "Continuer : exercice résolu →"));
    else if (tab === "resolu") content = h("div", { class: "card" }, h("h3", {}, s.resolu.titre), h("p", { class: "ctx" }, s.resolu.contexte), s.resolu.docs.map((d, i) => S.docEl(d, i + 1)),
      s.resolu.etapes.map((e, i) => h("details", { class: "step-r" }, h("summary", {}, (i + 1) + ". " + e.q), h("p", { class: "meth" }, h("b", {}, "Méthode : "), e.methode), h("p", {}, h("b", {}, "Réponse rédigée : "), e.r))),
      h("p", { class: "muted" }, "Essaie de répondre avant d’ouvrir chaque étape."));
    else if (tab === "modele") content = S.modelEl(s.modele);
    else if (tab === "quiz") content = quizEl(s);
    else content = h("div", { class: "pal-list" }, S.paliers.map(p => {
      const open = palOpen(s, p.n), r = st.paliers[pk(s, p.n)];
      return h(open ? "a" : "div", { class: "card pal-card " + (valide(s, p.n) ? "done" : open ? "open" : "lock"), href: open ? "#/eleve/seq/" + id + "/p/" + p.n : null },
        h("span", { class: "seq-st" }, valide(s, p.n) ? "✔ Validé" : open ? "Accessible" : "🔒 Verrouillé"),
        h("strong", {}, "Palier " + p.n + " — " + p.nom), h("span", {}, p.desc),
        r && h("span", { class: "muted small" }, "Meilleur score : " + r.best + " % · " + r.tentatives.length + " tentative(s)"));
    }));
    page(crumb(["Accueil", "#/"], ["Mon parcours", "#/eleve"], [s.titre.split(" — ")[0]]),
      h("h1", {}, s.titre),
      h("div", { class: "tabs", role: "tablist" }, tabs.map(t => h("a", { role: "tab", "aria-selected": t[0] === tab, class: t[0] === tab ? "on" : "", href: "#/eleve/seq/" + id + "/" + t[0] }, t[1]))),
      content);
  }

  function quizEl(s) {
    let n = 0;
    const boxes = s.quiz.map(q => qView(q, ++n)), out = h("div", { class: "result", role: "status" });
    return h("div", {}, h("p", { class: "muted" }, "Vérifie que tu as retenu l’essentiel (restitution des connaissances). Ce quiz ne bloque pas la suite."), boxes,
      h("button", { class: "btn", onclick: e => {
        let got = 0, tot = 0;
        boxes.forEach(b => { const f = grade(b.q, b.read()) || 0; showFb(b, f); record(b.q, f); got += f * b.q.pts; tot += b.q.pts; });
        const p = pct(got, tot); st.quiz[s.id] = Math.max(st.quiz[s.id] || 0, p); save();
        out.innerHTML = ""; out.append(h("h3", {}, "Score : " + p + " %"), h("p", {}, p >= S.site.seuil ? "Très bien : tu peux passer aux paliers d’exercices." : "Relis « L’essentiel » pour les questions manquées, puis recommence."), h("a", { class: "btn ghost", href: "#/eleve/seq/" + s.id + "/paliers" }, "Aller aux paliers →"));
        e.target.remove();
      } }, "Valider mes réponses"), out);
  }

  function vPalier(id, n, mode) {
    const s = S.sequences[id]; n = +n;
    if (!acces()) return vEleve();
    if (!s || !palOpen(s, n)) return go("#/eleve");
    const p = S.paliers[n - 1], pal = s.paliers[n], key = pk(s, n), r = st.paliers[key];
    const base = "#/eleve/seq/" + id + "/p/" + n;
    const head = [crumb(["Accueil", "#/"], ["Mon parcours", "#/eleve"], [s.titre.split(" — ")[0], "#/eleve/seq/" + id + "/paliers"], ["Palier " + n]), h("h1", {}, "Palier " + n + " — " + p.nom)];

    if (!mode) {
      const caps = [...new Set(pal.evaluation.concat(pal.entrainement).flatMap(ex => ex.questions.map(q => q.cap)))];
      return page(head, h("p", { class: "lead" }, p.desc),
        r && h("p", { class: "note " + (r.valide ? "ok" : "ko") }, r.valide ? "Palier validé (meilleur score : " + r.best + " %). Tu peux le refaire pour réviser." : "Palier non validé : meilleur score " + r.best + " %. Il faut au moins " + S.site.seuil + " %."),
        h("div", { class: "two" },
          h("a", { class: "card act", href: base + "/e" }, h("strong", {}, "① Entraînement"), h("span", {}, "Exercices avec correction immédiate après chaque question.")),
          h("a", { class: "card act", href: base + "/v" }, h("strong", {}, "② Évaluation formative"), h("span", {}, "Réussir à " + S.site.seuil + " % au moins pour débloquer la suite."))),
        h("h2", {}, "Fiches méthode du palier"), caps.map(c => methodeEl(c)));
    }

    if (mode === "e") {
      let n0 = 0;
      const parts = pal.entrainement.map(ex => { const x = exoEl(ex, n0); n0 += ex.questions.length; return x; });
      parts.forEach(x => x.boxes.forEach(b => b.append(h("button", { class: "btn small", onclick: e => { const f = grade(b.q, b.read()); if (f == null) return; showFb(b, f); e.target.textContent = "Vérifier à nouveau"; } }, "Vérifier"))));
      return page(head, h("p", { class: "muted" }, "Entraînement : réponds, vérifie, lis la correction. Aucun score n’est enregistré."), parts.map(x => x.el), h("a", { class: "btn", href: base + "/v" }, "Passer à l’évaluation formative →"));
    }

    // Évaluation : si la dernière tentative a échoué, la remédiation précède la nouvelle tentative.
    if (r && r.bloque) return page(head, remediationEl(s, n, r, base));
    let n0 = 0;
    const parts = pal.evaluation.map(ex => { const x = exoEl(ex, n0); n0 += ex.questions.length; return x; });
    const boxes = parts.flatMap(x => x.boxes), warn = h("p", { class: "err", role: "alert" });
    page(head, h("p", { class: "muted" }, "Évaluation formative : réponds à toutes les questions puis valide. Seuil de réussite : " + S.site.seuil + " %."), parts.map(x => x.el), warn,
      h("button", { class: "btn", onclick: () => {
        const fs = boxes.map(b => grade(b.q, b.read()));
        const vides = fs.filter(f => f == null).length;
        if (vides && !warn.dataset.ok) { warn.textContent = vides + " question(s) sans réponse. Complète-les, ou clique de nouveau pour valider quand même."; warn.dataset.ok = 1; return; }
        let got = 0, tot = 0; const err = [];
        boxes.forEach((b, i) => { const f = fs[i] || 0; record(b.q, f); got += f * b.q.pts; tot += b.q.pts; if (f < 1) err.push(b.q.id); });
        const score = pct(got, tot), ok = score >= S.site.seuil;
        const rec = st.paliers[key] || (st.paliers[key] = { valide: false, best: 0, tentatives: [] });
        rec.tentatives.push({ d: today(), score, err }); st.maj = today();
        rec.best = Math.max(rec.best, score); rec.valide = rec.valide || ok; rec.bloque = !ok;
        save(); vResultat(s, n, rec, base, head);
      } }, "Valider mon évaluation"));
  }

  function vResultat(s, n, rec, base, head) {
    const t = rec.tentatives[rec.tentatives.length - 1], ok = t.score >= S.site.seuil;
    const next = n < 3 ? ["Palier " + (n + 1) + " →", "#/eleve/seq/" + s.id + "/p/" + (n + 1)] : SEQS[SEQS.indexOf(s) + 1] ? ["Séquence suivante →", "#/eleve/seq/" + SEQS[SEQS.indexOf(s) + 1].id] : ["Retour à mon parcours", "#/eleve"];
    page(head, h("div", { class: "card result " + (ok ? "ok" : "ko"), role: "status" },
      h("p", { class: "score" }, t.score + " %"),
      h("h2", {}, ok ? "Palier validé" : "Palier non validé"),
      h("p", {}, ok ? "Bravo : tu as atteint le seuil de " + S.site.seuil + " %. La suite est débloquée." : "Il faut au moins " + S.site.seuil + " %. Retravaille les points ci-dessous, puis fais une nouvelle tentative."),
      ok && h("a", { class: "btn", href: next[1] }, next[0])),
      t.err.length ? (ok ? [h("h2", {}, "Questions à revoir"), t.err.map(id => errEl(QI[id].q))] : remediationEl(s, n, rec, base)) : null);
  }

  const errEl = q => h("div", { class: "q ko" }, h("p", { class: "q-enonce", html: q.enonce }), h("div", { class: "fb" }, h("p", { html: "<b>Réponse attendue :</b><br>" + S.solution(q) }), h("p", { html: "<b>À retenir :</b> " + q.retour })));
  const methodeEl = c => h("details", { class: "card meth-card" }, h("summary", {}, "Fiche méthode — " + S.capacites[c].nom), h("ol", {}, S.capacites[c].methode.map(m => h("li", {}, m))));

  // Remédiation différenciée : les erreurs sont regroupées par capacité, chacune avec sa fiche méthode.
  function remediationEl(s, n, rec, base) {
    const t = rec.tentatives[rec.tentatives.length - 1], byCap = {};
    t.err.forEach(id => { const q = QI[id].q; (byCap[q.cap] = byCap[q.cap] || []).push(q); });
    return h("section", { class: "remed" }, h("h2", {}, "Ma remédiation"),
      h("p", { class: "muted" }, "Dernière tentative : " + t.score + " %. Voici les capacités à retravailler avant de recommencer."),
      Object.keys(byCap).map(c => h("div", { class: "card" }, h("h3", {}, S.capacites[c].nom + " — " + byCap[c].length + " erreur(s)"),
        h("ol", { class: "meth" }, S.capacites[c].methode.map(m => h("li", {}, m))), byCap[c].map(errEl))),
      h("div", { class: "two" },
        h("a", { class: "card act", href: "#/eleve/seq/" + s.id + "/cours" }, h("strong", {}, "Revoir l’essentiel du cours")),
        h("a", { class: "card act", href: base + "/e" }, h("strong", {}, "Refaire l’entraînement"))),
      h("button", { class: "btn", onclick: () => { rec.bloque = false; save(); vPalier(s.id, n, "v"); } }, "J’ai retravaillé mes difficultés : nouvelle tentative"));
  }

  function vBilan() {
    if (!acces()) return vEleve();
    const caps = Object.keys(S.capacites).filter(c => st.caps[c]);
    page(crumb(["Accueil", "#/"], ["Mon parcours", "#/eleve"], ["Mon bilan"]), h("h1", {}, "Mon bilan de compétences"),
      caps.length ? h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t bilan" }, h("tr", {}, h("th", {}, "Capacité"), h("th", {}, "Questions traitées"), h("th", {}, "Réussite"), h("th", {}, "Diagnostic")),
        caps.map(c => { const v = st.caps[c], p = pct(v.ok, v.n); return h("tr", {}, h("th", {}, S.capacites[c].nom), h("td", {}, v.n), h("td", {}, h("div", { class: "meter" }, h("i", { style: "width:" + p + "%", class: p >= 90 ? "g" : p >= 60 ? "o" : "r" })), " " + p + " %"), h("td", {}, p >= 90 ? "Maîtrisée" : p >= 60 ? "À consolider" : "À retravailler en priorité")); }))))
        : h("p", { class: "muted" }, "Aucune évaluation réalisée pour le moment."),
      caps.filter(c => pct(st.caps[c].ok, st.caps[c].n) < 90).length ? [h("h2", {}, "Fiches méthode conseillées"), caps.filter(c => pct(st.caps[c].ok, st.caps[c].n) < 90).map(methodeEl)] : null,
      lecons(st).length ? [h("h2", {}, "Mes leçons"), h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("tr", {}, h("th", {}, "Leçon"), h("th", {}, "Meilleur score"), h("th", {}, "Tentatives"), h("th", {}, "État")),
        lecons(st).map(l => { const r = (st.lecons || {})[l.id]; return h("tr", {}, h("th", {}, l.titre), h("td", {}, r ? r.best + " %" : "—"), h("td", {}, r ? r.n : "—"), h("td", {}, lecOk(l) ? "✔ Validée" : r ? "À reprendre" : "Non commencée")); }))))] :
      [h("h2", {}, "Mes paliers"),
      h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("tr", {}, h("th", {}, "Séquence"), S.paliers.map(p => h("th", {}, p.n + ". " + p.nom)), h("th", {}, "Quiz du cours")),
        SEQS.map(s => h("tr", {}, h("th", {}, s.titre.split(" — ")[0]), [1, 2, 3].map(n => { const r = st.paliers[pk(s, n)]; return h("td", {}, r ? r.best + " %" + (r.valide ? " ✔" : "") + " (" + r.tentatives.length + " tent.)" : "—"); }), h("td", {}, st.quiz[s.id] != null ? st.quiz[s.id] + " %" : "—"))))))]);
  }

  function vProf() {
    page(crumb(["Accueil", "#/"], ["Espace professeur"]), h("h1", {}, "Espace professeur"),
      h("div", { class: "two" },
        h("a", { class: "card act big", href: "#/prof/cadre" }, h("strong", {}, "Cadre référentiel et documents administratifs"), h("span", {}, "Références et consignes utiles à la préparation et à l’exploitation des devoirs surveillés.")),
        h("a", { class: "card act big", href: "#/prof/ds" }, h("strong", {}, "Concevoir un devoir surveillé"), h("span", {}, "Choisir les concepts, la durée et la difficulté de chaque partie et de chaque exercice : le devoir est composé à partir de la banque commune et téléchargeable en PDF.")),
        h("a", { class: "card act big", href: "#/prof/classes" }, h("strong", {}, "Mes classes" + (db.eleves.some(e => e.statut === "attente") ? " — " + db.eleves.filter(e => e.statut === "attente").length + " demande(s) en attente" : "")), h("span", {}, "Accepter ou refuser les élèves qui m’ont choisi comme professeur, les répartir dans mes classes et suivre leur progression."))));
  }

  // ---------- Mes classes : demandes d'inscription, répartition, suivi de la progression ----------
  function vClasses() {
    const prof = S.professeurs.find(p => p.id === db.prof) || S.professeurs[0];
    const classes = prof.classes.concat(db.classes[prof.id] || []);
    const miens = db.eleves.filter(e => e.eleve.profId === prof.id), total = SEQS.length * 3;
    const ok = (e, s, n) => !!(e.paliers[pk(s, n)] && e.paliers[pk(s, n)].valide);
    const nbVal = e => SEQS.reduce((a, s) => a + [1, 2, 3].filter(n => ok(e, s, n)).length, 0);
    const refaire = () => { save(); vClasses(); };
    const selClasse = (val, fn) => h("select", { "aria-label": "Classe", onchange: fn }, classes.concat(classes.includes(val) ? [] : [val]).map(c => h("option", { selected: c === val }, c)));
    // capacités les moins réussies d'un groupe d'élèves, de la plus fragile à la plus solide
    function fragiles(list) {
      const agg = {};
      list.forEach(e => Object.keys(e.caps).forEach(c => { const a = agg[c] || (agg[c] = { ok: 0, n: 0 }); a.ok += e.caps[c].ok; a.n += e.caps[c].n; }));
      return Object.keys(agg).map(c => ({ c, p: pct(agg[c].ok, agg[c].n) })).filter(x => x.p < 90).sort((a, b) => a.p - b.p);
    }
    const suivi = e => !!(S.niveaux.find(n => n.id === e.eleve.niveau) || {}).banque; // niveau dont les contenus existent
    function position(e) {
      if (!suivi(e)) {
        const list = lecons(e);
        if (!list.length) return "Contenus du niveau en préparation";
        const k = list.filter(l => lecOk(l, e)).length, nx = list.find(l => !lecOk(l, e)), r = nx && (e.lecons || {})[nx.id];
        return k + " / " + list.length + " leçon(s) validée(s)" + (nx ? " · en cours : " + nx.titre.split(" — ")[0] + (r ? " (" + r.n + " tentative(s), meilleur score " + r.best + " %)" : "") : " · leçons terminées");
      }
      for (const s of SEQS) for (const n of [1, 2, 3]) if (!ok(e, s, n)) {
        const r = e.paliers[pk(s, n)];
        return s.titre.split(" — ")[0] + " · palier " + n + (r ? " (" + r.tentatives.length + " tentative(s), meilleur score " + r.best + " %)" : "");
      }
      return "Parcours terminé";
    }
    const attente = miens.filter(e => e.statut === "attente"), refuses = miens.filter(e => e.statut === "refuse");
    const nouvelle = h("input", { type: "text", placeholder: "Nom de la nouvelle classe", "aria-label": "Nom de la nouvelle classe" });

    page(crumb(["Accueil", "#/"], ["Espace professeur", "#/prof"], ["Mes classes"]), h("h1", {}, "Mes classes"),
      h("div", { class: "card bar" },
        h("label", {}, "Je suis : ", h("select", { onchange: e => { db.prof = e.target.value; refaire(); } }, S.professeurs.map(p => h("option", { value: p.id, selected: p.id === prof.id }, p.nom)))),
        h("form", { class: "bar", onsubmit: e => { e.preventDefault(); const v = nouvelle.value.trim(); if (v && !classes.includes(v)) { (db.classes[prof.id] = db.classes[prof.id] || []).push(v); refaire(); } } }, nouvelle, h("button", { class: "btn small ghost" }, "Ajouter une classe"))),

      h("h2", {}, "Demandes d’inscription (" + attente.length + ")"),
      attente.length ? attente.map(e => {
        const sel = selClasse(e.eleve.classe);
        return h("div", { class: "card bar" }, h("div", { class: "grow" }, h("strong", {}, e.eleve.nom), h("div", { class: "muted small" }, "Classe demandée : " + e.eleve.classe + " · demande du " + e.date)),
          h("label", {}, "Classer dans : ", sel),
          h("button", { class: "btn small", onclick: () => { e.statut = "accepte"; e.eleve.classe = sel.value; refaire(); } }, "Accepter"),
          h("button", { class: "btn small ghost danger", onclick: () => { e.statut = "refuse"; refaire(); } }, "Refuser"));
      }) : h("p", { class: "muted" }, "Aucune demande en attente. Les élèves qui vous choisissent comme professeur lors de leur inscription apparaissent ici."),

      classes.map(c => {
        const list = miens.filter(e => e.statut === "accepte" && e.eleve.classe === c), fr = fragiles(list);
        if (!list.length) return null; // les classes vides sont listées en une ligne plus bas
        return h("section", {}, h("h2", {}, c + " — " + list.length + " élève(s)"),
          [
            h("div", { class: "stats" },
              h("div", { class: "stat" }, h("b", {}, list.some(suivi) ? pct(sum(list.filter(suivi), nbVal), list.filter(suivi).length * total) + " %" : "—"), h("span", {}, "Avancement moyen du parcours")),
              h("div", { class: "stat" }, h("b", {}, list.filter(e => suivi(e) && nbVal(e) === total).length + " / " + list.length), h("span", {}, "Élèves ayant terminé le chapitre")),
              h("div", { class: "stat txt" }, h("b", {}, fr.length ? S.capacites[fr[0].c].nom : "Aucune"), h("span", {}, fr.length ? "Capacité la plus fragile de la classe (" + fr[0].p + " %)" : "Capacité fragile"))),
            fr.length ? h("p", { class: "pb" }, h("b", {}, "À retravailler en classe : "), fr.slice(0, 4).map(x => S.capacites[x.c].nom + " (" + x.p + " %)").join(" ; ")) : null,
            h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t suivi" },
              h("tr", {}, h("th", {}, "Élève"), h("th", {}, "Paliers validés"), h("th", {}, "Où en est-il ?"), h("th", {}, "Capacité la plus fragile"), h("th", {}, "Dernière activité"), h("th", {}, "Classe")),
              list.map(e => { const f = fragiles([e])[0]; return h("tr", {}, h("th", {}, e.eleve.nom),
                h("td", {}, suivi(e) ? [h("div", { class: "meter" }, h("i", { style: "width:" + pct(nbVal(e), total) + "%" })), " " + nbVal(e) + " / " + total] : "—"),
                h("td", {}, position(e)), h("td", {}, f ? S.capacites[f.c].nom + " (" + f.p + " %)" : "—"), h("td", {}, e.maj || "—"),
                h("td", {}, selClasse(c, ev => { e.eleve.classe = ev.target.value; refaire(); }), " ", h("button", { class: "link danger", onclick: () => { if (confirm("Retirer " + e.eleve.nom + " de vos classes ?")) { e.statut = "refuse"; refaire(); } } }, "Retirer"))); })))),
            list.map(e => h("details", { class: "card meth-card" }, h("summary", {}, "Détail — " + e.eleve.nom),
              h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("tr", {}, h("th", {}, "Séquence"), S.paliers.map(p => h("th", {}, p.n + ". " + p.nom)), h("th", {}, "Quiz du cours")),
                SEQS.map(s => h("tr", {}, h("th", {}, s.titre.split(" — ")[0]), [1, 2, 3].map(n => { const r = e.paliers[pk(s, n)]; return h("td", {}, r ? r.best + " %" + (r.valide ? " ✔" : "") + " (" + r.tentatives.length + " tent.)" : "—"); }), h("td", {}, e.quiz[s.id] != null ? e.quiz[s.id] + " %" : "—"))))),
              Object.keys(e.caps).length ? h("p", { class: "small" }, h("b", {}, "Réussite par capacité : "), Object.keys(S.capacites).filter(k => e.caps[k]).map(k => S.capacites[k].nom + " " + pct(e.caps[k].ok, e.caps[k].n) + " %").join(" · ")) : null))
          ]);
      }),

      h("p", { class: "muted" }, "Classes sans élève : " + (classes.filter(c => !miens.some(e => e.statut === "accepte" && e.eleve.classe === c)).join(", ") || "aucune") + "."),
      refuses.length ? [h("h2", {}, "Demandes refusées ou élèves retirés (" + refuses.length + ")"), refuses.map(e => h("div", { class: "card bar" }, h("div", { class: "grow" }, h("strong", {}, e.eleve.nom), h("div", { class: "muted small" }, e.eleve.classe)),
        h("button", { class: "btn small ghost", onclick: () => { e.statut = "attente"; refaire(); } }, "Réexaminer la demande")))] : null,
      h("h2", {}, "Mes étudiants CRMEF (" + db.stag.length + ")"),
      db.stag.length ? h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t suivi" },
        h("tr", {}, h("th", {}, "Étudiant"), h("th", {}, "Filière"), MODS.map(m => h("th", {}, "Module " + m.code + " — " + m.id)), h("th", {}, "Dernière activité")),
        db.stag.map(x => h("tr", {}, h("th", {}, x.nom), h("td", {}, x.cycle),
          MODS.map(m => h("td", {}, h("div", { class: "meter" }, h("i", { style: "width:" + pct(nbParts(x, m), m.parties.length) + "%" })), " " + nbParts(x, m) + " / " + m.parties.length + " parties",
            h("div", { class: "muted small" }, m.parties.map((_, k) => { const r = x.parts[m.id + "-" + k]; return "P" + (k + 1) + " : " + (r ? r.best + " % (" + r.n + " tent.)" : "—"); }).join(" · ")))),
          h("td", {}, x.maj || x.date || "—"))))))
        : h("p", { class: "muted" }, "Aucun étudiant CRMEF inscrit sur cet appareil."),
      h("p", { class: "muted small" }, "Version de test : les comptes sont ceux enregistrés sur cet appareil. En ligne, chaque professeur verra uniquement ses propres élèves après connexion."));
  }
  const sum = (a, f) => a.reduce((t, x) => t + f(x), 0);

  function vCadre() {
    const c = S.cadre;
    page(crumb(["Accueil", "#/"], ["Espace professeur", "#/prof"], ["Cadre référentiel"]), h("h1", {}, "Cadre référentiel de l’évaluation"),
      h("p", { class: "muted" }, c.titre),
      h("div", { class: "card" }, h("h2", {}, "Structure de l’épreuve"), h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("tr", {}, h("th", {}, "Partie"), h("th", {}, "Notation"), h("th", {}, "Contenu")), c.structure.map(r => h("tr", {}, h("th", {}, r[0]), h("td", {}, r[1]), h("td", {}, r[2])))))),
      h("div", { class: "card" }, h("h2", {}, "Domaines et taux de recouvrement"), h("div", { class: "t-wrap" }, h("table", { class: "t" }, c.domaines.map(r => h("tr", {}, h("th", {}, r[0]), h("td", {}, r[1]))))),
        h("p", { class: "muted" }, "Matériel du candidat : matériel d’écriture et de dessin, calculatrice non programmable, papier millimétré.")),
      h("div", { class: "card" }, h("h2", {}, "Sous-domaine 1.1 — connaissances évaluables (première version du site)"), h("ul", {}, Object.values(S.concepts).map(t => h("li", {}, t)))),
      h("div", { class: "card" }, h("h2", {}, "Documents officiels"), h("ul", { class: "docs" }, c.documents.map(d => h("li", {}, h("a", { href: encodeURI(c.dossier + d[1]), target: "_blank", rel: "noopener" }, d[0]), " (PDF)")))));
  }

  // ---------- Entrée étudiant CRMEF : modules, parties débloquées à 90 %, outil d'analyse de notes ----------
  const MODS = S.crmef.modules;
  const stag = () => db.stag.find(x => x.id === db.stagCourant);
  const partOk = (sg, m, i) => !!(sg.parts[m.id + "-" + i] && sg.parts[m.id + "-" + i].valide);
  const partOpen = (sg, m, i) => i === 0 || partOk(sg, m, i - 1);
  const nbParts = (sg, m) => m.parties.filter((_, i) => partOk(sg, m, i)).length;

  function vCrmef() {
    const sg = stag();
    if (!sg) {
      const nom = h("input", { type: "text", id: "c-nom", placeholder: "Prénom et nom", autocomplete: "name" }), cycle = h("select", { id: "c-cy" }, S.crmef.cycles.map(c => h("option", {}, c))), err = h("p", { class: "err", role: "alert" });
      return page(crumb(["Accueil", "#/"], ["Espace CRMEF"]), h("h1", {}, "Espace étudiant CRMEF"),
        db.stag.length ? [h("h2", {}, "Reprendre ma formation"), h("div", { class: "profs" }, db.stag.map(x => h("button", { type: "button", class: "prof", onclick: () => { db.stagCourant = x.id; save(); vCrmef(); } }, h("strong", {}, x.nom), h("span", {}, x.cycle))))] : null,
        h("h2", {}, "Nouvelle inscription"),
        h("form", { class: "card form", onsubmit: e => { e.preventDefault(); if (!nom.value.trim()) { err.textContent = "Indiquez votre prénom et votre nom."; return; } const x = { id: "s" + Date.now(), nom: nom.value.trim(), cycle: cycle.value, date: today(), parts: {} }; db.stag.push(x); db.stagCourant = x.id; save(); vCrmef(); } },
          h("label", { for: "c-nom" }, "Mon identité"), nom, h("label", { for: "c-cy" }, "Ma filière"), cycle, err, h("button", { class: "btn" }, "Accéder aux modules")));
    }
    page(crumb(["Accueil", "#/"], ["Espace CRMEF"]),
      h("div", { class: "card who" }, h("div", {}, h("h1", {}, "Bonjour " + sg.nom), h("p", { class: "muted" }, sg.cycle + " · Formateur : " + S.site.concepteur))),
      h("h2", {}, "Mes modules"),
      h("div", { class: "seqs" }, MODS.map(m => h("a", { class: "seq " + (nbParts(sg, m) === m.parties.length ? "done" : "open"), href: "#/crmef/" + m.id },
        h("span", { class: "seq-st" }, "Module " + m.code + " · " + nbParts(sg, m) + " / " + m.parties.length + " parties validées"), h("strong", {}, m.titre), h("span", {}, "« " + m.devise + " »")))),
      h("p", { class: "muted small" }, h("button", { class: "link", onclick: () => { db.stagCourant = null; save(); vCrmef(); } }, "Changer d’étudiant")));
  }

  function vModule(id, tab, arg) {
    const sg = stag(), m = MODS.find(x => x.id === id);
    if (!sg || !m) return go("#/crmef");
    tab = tab || "pres";
    const base = "#/crmef/" + id, i = +arg;
    const tabs = [["pres", "Présentation", base + "/pres"]].concat(m.parties.map((p, k) => ["p" + k, (partOk(sg, m, k) ? "✔ " : partOpen(sg, m, k) ? "" : "🔒 ") + "Partie " + (k + 1), base + "/p/" + k]),
      m.outil ? [["outil", "Outil", base + "/outil"]] : [], [["res", "Ressources", base + "/res"]]);
    const cur = tab === "p" ? "p" + i : tab;
    let content;
    if (tab === "pres") content = h("div", {}, h("p", { class: "lead" }, "« " + m.devise + " »"),
      h("div", { class: "card" }, h("h3", {}, "Compétence visée"), h("p", {}, m.competence), h("h3", {}, "Objectifs"), h("ul", {}, m.objectifs.map(o => h("li", {}, o))),
        m.prerequis && [h("h3", {}, "Prérequis"), h("ul", {}, m.prerequis.map(o => h("li", {}, o)))],
        m.reinvest && [h("h3", {}, "Réinvestissement dans la pratique professionnelle"), h("ul", {}, m.reinvest.map(o => h("li", {}, o)))],
        h("p", { class: "muted" }, "Volume horaire : " + m.volume + ". Évaluation : " + m.evaluation)),
      h("p", { class: "pb" }, h("b", {}, "Classe inversée : "), "préparez chaque partie en autonomie avant la séance en présentiel, puis validez le quiz. La partie suivante s’ouvre à partir de " + S.site.seuil + " % de réussite."),
      h("a", { class: "btn", href: base + "/p/0" }, "Commencer la partie 1 →"));
    else if (tab === "outil") content = outilNotes();
    else if (tab === "res") content = h("div", { class: "card" }, h("h3", {}, "Documents du module"), h("ul", { class: "docs" }, m.ressources.filter(r => !r[2] || EN_LOCAL).map(r => h("li", {}, h("a", { href: encodeURI(r[1]), target: "_blank", rel: "noopener" }, r[0]), r[2] ? h("span", { class: "tag" }, "sur cet ordinateur seulement") : null))),
      EN_LOCAL && m.ressources.some(r => r[2]) ? h("p", { class: "muted small" }, "Les documents marqués « sur cet ordinateur seulement » sont d’autres auteurs : ils ne sont pas copiés dans le site et n’apparaîtront pas dans la version en ligne.") : null);
    else {
      const p = m.parties[i];
      if (!p) return go(base);
      if (!partOpen(sg, m, i)) content = h("p", { class: "note ko" }, "Cette partie s’ouvrira quand le quiz de la partie " + i + " sera validé à " + S.site.seuil + " %.");
      else {
        let n = 0;
        const boxes = p.quiz.map(q => qView(q, ++n)), out = h("div", { class: "result", role: "status" }), key = m.id + "-" + i, r = sg.parts[key];
        content = h("div", {}, h("h2", {}, p.titre), p.cours.map(c => h("article", { class: "card lesson" }, h("h3", {}, c.titre), h("div", { html: c.html }))),
          h("div", { class: "pb" }, h("b", {}, "Activité à préparer pour la séance : "), p.activite),
          h("h2", {}, "Quiz de validation"), r && h("p", { class: "note " + (r.valide ? "ok" : "ko") }, (r.valide ? "Partie validée" : "Partie non validée") + " — meilleur score : " + r.best + " % (" + r.n + " tentative(s))."),
          boxes, h("button", { class: "btn", onclick: e => {
            let got = 0, tot = 0;
            boxes.forEach(b => { const f = grade(b.q, b.read()) || 0; showFb(b, f); got += f * b.q.pts; tot += b.q.pts; });
            const sc = pct(got, tot), rec = sg.parts[key] || (sg.parts[key] = { best: 0, n: 0, valide: false });
            rec.n++; rec.best = Math.max(rec.best, sc); rec.valide = rec.valide || sc >= S.site.seuil; sg.maj = today(); save();
            const ok = sc >= S.site.seuil, suite = i + 1 < m.parties.length ? ["Partie " + (i + 2) + " →", base + "/p/" + (i + 1)] : ["Retour à mes modules", "#/crmef"];
            out.className = "card result " + (ok ? "ok" : "ko"); out.innerHTML = "";
            out.append(h("p", { class: "score" }, sc + " %"), h("h3", {}, ok ? "Partie validée" : "Partie non validée"),
              h("p", {}, ok ? "La suite est débloquée." : "Il faut au moins " + S.site.seuil + " %. Relisez les points signalés dans les corrections, puis recommencez."),
              ok ? h("a", { class: "btn", href: suite[1] }, suite[0]) : h("button", { class: "btn", onclick: () => vModule(id, "p", i) }, "Nouvelle tentative"));
            e.target.remove();
          } }, "Valider mes réponses"), out);
      }
    }
    page(crumb(["Accueil", "#/"], ["Espace CRMEF", "#/crmef"], ["Module " + m.code]), h("h1", {}, m.titre),
      h("div", { class: "tabs", role: "tablist" }, tabs.map(t => h("a", { role: "tab", "aria-selected": t[0] === cur, class: t[0] === cur ? "on" : "", href: t[2] }, t[1]))), content);
  }

  // Outil du module ESR : paramètres statistiques et groupes de besoin à partir des notes d'un devoir.
  function outilNotes() {
    const fr1 = v => String(Math.round(v * 100) / 100).replace(".", ",");
    const ta = h("textarea", { rows: 4, "aria-label": "Notes sur 20", class: "notes" }, "4 6,5 7 8 9 9,5 10 10 11 11,5 12 12 13 14 14,5 15 16 17,5 18");
    const out = h("div", { role: "status" });
    function calc() {
      const v = ta.value.split(/[\s;]+/).map(x => parseFloat(x.replace(",", "."))).filter(x => !isNaN(x) && x >= 0 && x <= 20).sort((a, b) => a - b), n = v.length;
      out.innerHTML = "";
      if (n < 2) { out.append(h("p", { class: "err" }, "Saisissez au moins deux notes entre 0 et 20, séparées par des espaces.")); return; }
      const moy = sum(v, x => x) / n, med = n % 2 ? v[(n - 1) / 2] : (v[n / 2 - 1] + v[n / 2]) / 2, et = Math.sqrt(sum(v, x => (x - moy) * (x - moy)) / n);
      const freq = {}; v.forEach(x => { freq[x] = (freq[x] || 0) + 1; });
      const fmax = Math.max(...Object.values(freq)), mode = fmax > 1 ? Object.keys(freq).filter(k => freq[k] === fmax).map(k => fr1(+k)).join(" ; ") : "aucun (toutes les notes sont différentes)";
      const cl = [["[0 ; 5[", 0, 5], ["[5 ; 10[", 5, 10], ["[10 ; 15[", 10, 15], ["[15 ; 20]", 15, 20.01]].map(c => [c[0], v.filter(x => x >= c[1] && x < c[2]).length]);
      out.append(
        h("div", { class: "stats" }, [["Effectif", n], ["Moyenne", fr1(moy)], ["Médiane", fr1(med)], ["Écart-type", fr1(et)], ["Étendue", fr1(v[n - 1] - v[0]) + " (de " + fr1(v[0]) + " à " + fr1(v[n - 1]) + ")"], ["Notes ≥ 10", pct(v.filter(x => x >= 10).length, n) + " %"]].map(s => h("div", { class: "stat" }, h("b", {}, s[1]), h("span", {}, s[0])))),
        h("p", {}, h("b", {}, "Mode : "), mode),
        h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("tr", {}, h("th", {}, "Classe de notes"), h("th", {}, "Effectif"), h("th", {}, "Répartition")),
          cl.map(c => h("tr", {}, h("th", {}, c[0]), h("td", {}, c[1]), h("td", {}, h("div", { class: "meter" }, h("i", { style: "width:" + pct(c[1], n) + "%" })), " " + pct(c[1], n) + " %"))))),
        h("p", { class: "pb" }, h("b", {}, "Lecture : "), (et >= 4 ? "écart-type élevé, le groupe est hétérogène : des groupes de besoin sont à envisager. " : "écart-type modéré, le groupe est plutôt homogène. ") +
          (Math.abs(moy - med) >= 1 ? "La moyenne et la médiane diffèrent nettement : des notes extrêmes tirent la moyenne, la médiane décrit mieux l’élève « du milieu ». " : "") +
          cl[0][1] + " élève(s) en grande difficulté (moins de 5) et " + cl[1][1] + " élève(s) entre 5 et 10 : ce sont les premiers concernés par la remédiation. Ce diagnostic de groupe doit être complété par l’analyse des erreurs de chaque copie."));
    }
    ta.addEventListener("input", calc); calc();
    return h("div", { class: "card model" }, h("h3", {}, "Outil : analyser les notes d’un devoir"), h("p", { class: "muted" }, "Saisissez les notes sur 20, séparées par des espaces. Les décimales s’écrivent avec une virgule."), ta, out);
  }

  // ---------- routage ----------
  function route() {
    const p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    document.querySelectorAll("header nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + (p[0] || "")));
    if (!p.length) return vHome();
    if (p[0] === "eleve") {
      if (p[1] === "bilan") return vBilan();
      if (p[1] === "inscription") return vInscription();
      if (p[1] === "seq" && p[3] === "p") return vPalier(p[2], p[4], p[5]);
      if (p[1] === "seq") return vSeq(p[2], p[3]);
      if (p[1] === "lecon") return vLecon(p[2], p[3]);
      return vEleve();
    }
    if (p[0] === "crmef") return p[1] ? vModule(p[1], p[2], p[3]) : vCrmef();
    if (p[0] === "prof") {
      if (p[1] === "cadre") return vCadre();
      if (p[1] === "classes") return vClasses();
      if (p[1] === "ds") return page(crumb(["Accueil", "#/"], ["Espace professeur", "#/prof"], ["Concevoir un devoir"]), S.viewDS());
      return vProf();
    }
    vHome();
  }
  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
})();
