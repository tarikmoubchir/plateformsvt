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
  // NUAGE : comptes et progression dans la base Supabase (js/nuage.js) ; sinon, dans ce navigateur seulement.
  const NUAGE = !!S.api;
  let db = { eleves: [], courant: null, classes: {}, prof: S.professeurs[0].id, stag: [], stagCourant: null, comptes: [], profs: [], journal: [], session: null };
  if (!NUAGE) try {
    const raw = JSON.parse(localStorage.getItem(KEY));
    if (raw && raw.eleves) db = Object.assign(db, raw);
    else if (raw && raw.eleve) { // ancien format : un seul élève, accepté d'office
      raw.eleve.profId = raw.eleve.profId || S.professeurs[0].id;
      db.eleves.push(Object.assign(vide(), raw, { id: "e1", statut: "accepte", date: today() })); db.courant = "e1";
    }
  } catch (e) { /* stockage indisponible */ }

  // ---------- comptes ----------
  // Identifiant = prénom + nom collés, sans accent ni espace (un numéro s'ajoute si l'identifiant existe déjà).
  // Mot de passe = identifiant + jjmmaa de la date de naissance. Seule une empreinte SHA-256 du mot de passe est conservée.
  // Administrateur : en ligne, c'est un compte de la base ; ADMIN ne sert qu'au mode navigateur (tests), avec une empreinte fournie par la configuration.
  const ADMIN = { login: "tarikmoubchir", h: (S.config && S.config.adminLocal) || null, role: "admin", prenom: "Tarik", nom: "MOUBCHIR", naissance: "06/03/1984" };
  const ROLES = { eleve: "Élève", prof: "Professeur", crmef: "Étudiant(e) CRMEF", admin: "Administrateur", invite: "Invité" };
  const pad2 = n => String(n).padStart(2, "0");
  const norm = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
  const empreinte = mdp => sha256("moubchir-svt|" + mdp);
  const compte = () => !NUAGE && db.session === ADMIN.login ? ADMIN : db.comptes.find(c => c.login === db.session) || null;
  const estAdmin = () => { const c = compte(); return !!c && c.role === "admin"; };
  if (!compte()) { db.session = null; db.courant = null; db.stagCourant = null; } // pas de session ouverte : aucun profil actif
  let invite = null, invStag = null; // mode invité (non enregistré) : "eleve", "prof" ou "crmef"

  function sha256(str) {
    const s = unescape(encodeURIComponent(str)), K = [], H = [], w = [], by = [];
    for (let n = 2, c = 0; c < 64; n++) {
      let p = true; for (let d = 2; d * d <= n; d++) if (n % d === 0) { p = false; break; }
      if (p) { if (c < 8) H[c] = (Math.pow(n, 1 / 2) * 4294967296) | 0; K[c++] = (Math.pow(n, 1 / 3) * 4294967296) | 0; }
    }
    for (let i = 0; i < s.length; i++) by.push(s.charCodeAt(i));
    const l = by.length * 8; by.push(0x80); while (by.length % 64 !== 56) by.push(0);
    for (let i = 7; i >= 0; i--) by.push(i > 3 ? 0 : (l >>> (i * 8)) & 255);
    const R = (x, k) => (x >>> k) | (x << (32 - k));
    for (let j = 0; j < by.length; j += 64) {
      for (let i = 0; i < 16; i++) w[i] = (by[j + 4 * i] << 24) | (by[j + 4 * i + 1] << 16) | (by[j + 4 * i + 2] << 8) | by[j + 4 * i + 3];
      for (let i = 16; i < 64; i++) w[i] = (w[i - 16] + (R(w[i - 15], 7) ^ R(w[i - 15], 18) ^ (w[i - 15] >>> 3)) + w[i - 7] + (R(w[i - 2], 17) ^ R(w[i - 2], 19) ^ (w[i - 2] >>> 10))) | 0;
      let [a, b, c, d, e, f, g, k] = H;
      for (let i = 0; i < 64; i++) {
        const t1 = (k + (R(e, 6) ^ R(e, 11) ^ R(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + w[i]) | 0;
        const t2 = ((R(a, 2) ^ R(a, 13) ^ R(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
        k = g; g = f; f = e; e = (d + t1) | 0; d = c; c = b; b = a; a = (t1 + t2) | 0;
      }
      [a, b, c, d, e, f, g, k].forEach((v, i) => { H[i] = (H[i] + v) | 0; });
    }
    return H.map(v => (v >>> 0).toString(16).padStart(8, "0")).join("");
  }

  // Journal d'activité consulté dans le tableau de bord (les actions de l'administrateur n'y figurent pas, sauf ses connexions).
  function journal(action, c) {
    c = c || compte();
    if (c && c.role === "admin" && action !== "Connexion") return;
    if (c && c.role !== "admin") c.derniere = today();
    const x = { t: new Date().toISOString(), login: c ? c.login : "invité", role: c ? c.role : "invite", action };
    db.journal.push(x);
    if (NUAGE) aEnvoyer.push({ login: x.login, role: x.role, action: x.action.slice(0, 300) });
    if (db.journal.length > 3000) db.journal.splice(0, db.journal.length - 3000);
  }
  S.journal = a => { journal(a); save(); };

  function lireNaissance(v) {
    const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(String(v).trim());
    if (!m) return null;
    const j = +m[1], mo = +m[2], a = +m[3], d = new Date(a, mo - 1, j);
    if (d.getDate() !== j || d.getMonth() !== mo - 1 || a < 1930 || d > new Date()) return null;
    return { j, mo, a, txt: pad2(j) + "/" + pad2(mo) + "/" + a };
  }
  function creerCompte(role, id) {
    const base = norm(id.prenom) + norm(id.nom);
    let login = base, k = 0;
    while (login === ADMIN.login || db.comptes.some(c => c.login === login)) login = base + (++k);
    const c = { login, role, prenom: id.prenom, nom: id.nom, naissance: id.nais.txt, date: today(), derniere: today(), mdpAuto: true };
    const mdp = mdpAuto(c); c.h = empreinte(mdp);
    db.comptes.push(c);
    journal("Création du compte", c);
    return { c, mdp, double: login !== base };
  }
  // Mot de passe fabriqué à la création : identifiant + jjmmaa. Facile à deviner, d'où l'invitation à le changer.
  const mdpAuto = c => { const [j, m, a] = c.naissance.split("/"); return c.login + j + m + a.slice(-2); };
  const aChanger = () => { const c = compte(); return !!c && c.mdpAuto && c.role !== "admin"; };
  // Bandeau qui invite à changer le mot de passe automatique, dès que le compte est actif.
  const alerteMdp = tu => aChanger() ? h("p", { class: "note mi" }, tu ? "Ton compte est activé. Ton mot de passe actuel est facile à deviner (ton nom et ta date de naissance) : " : "Votre mot de passe actuel est facile à deviner (nom et date de naissance) : ",
    h("a", { href: "#/compte" }, tu ? "change-le maintenant" : "changez-le maintenant"), ".") : null;
  function ouvrirSession(c) {
    quitterInvite();
    db.session = c.login; c.derniere = today();
    db.courant = c.role === "eleve" ? c.ref : null;
    db.stagCourant = c.role === "crmef" ? c.ref : null;
    if (c.role === "prof") db.prof = c.ref;
    st = db.eleves.find(e => e.id === db.courant) || vide();
  }
  // Renvoie le compte connecté, ou null si l'identifiant ou le mot de passe est faux (exception si le serveur est injoignable).
  async function connecter(login, mdp) {
    login = login.trim().toLowerCase(); mdp = mdp.trim();
    if (!NUAGE) {
      const c = login === ADMIN.login ? ADMIN : db.comptes.find(x => x.login === login);
      if (!c || !c.h || c.h !== empreinte(mdp)) return null;
      ouvrirSession(c); journal("Connexion", c); save();
      return c;
    }
    try { await S.api.connecter(login, mdp); } catch (e) { if (e.status === 400) return null; throw e; }
    quitterInvite(); await charger();
    const c = compte();
    if (!c) return null;
    S.api.modifier("profils", c.id, { derniere: new Date().toISOString() }).catch(() => {});
    journal("Connexion", c); save();
    return c;
  }
  // Création d'un compte : identifiant libre, mot de passe automatique, fiche de l'espace (élève, professeur, CRMEF).
  async function inscrire(role, id, info) {
    if (!NUAGE) {
      const r = creerCompte(role, id);
      if (role === "eleve") {
        st = Object.assign(vide(), { id: "e" + Date.now(), statut: "attente", date: today(), eleve: { nom: id.prenom + " " + id.nom, niveau: info.niveau, prof: info.prof.nom, profId: info.prof.id, classe: info.classe } });
        r.c.ref = st.id; db.eleves.push(st);
      }
      if (role === "prof") { r.c.ref = r.c.login; db.profs.push({ id: r.c.login, nom: "Pr. " + id.prenom + " " + id.nom, etablissement: info.etablissement, classes: info.classes }); }
      if (role === "crmef") { const x = { id: "s" + Date.now(), nom: id.prenom + " " + id.nom, cycle: info.cycle, date: today(), parts: {} }; r.c.ref = x.id; db.stag.push(x); }
      ouvrirSession(r.c); save();
      return r;
    }
    const base = norm(id.prenom) + norm(id.nom);
    for (let essai = 0; essai < 4; essai++) {
      const login = await S.api.rpc("identifiant_libre", { base });
      const mdp = login + pad2(id.nais.j) + pad2(id.nais.mo) + String(id.nais.a).slice(-2);
      let s;
      try { s = await S.api.inscrire(login, mdp); } catch (e) { if (/already|registered|exists/i.test(e.message)) continue; throw e; } // pris entre-temps : identifiant suivant
      const row = { id: s.user.id, login, role, prenom: id.prenom, nom: id.nom, naissance: id.nais.txt };
      if (role === "eleve") Object.assign(row, { prof_id: info.prof.id, classe: info.classe, donnees: { niveau: info.niveau, profNom: info.prof.nom } });
      if (role === "prof") row.donnees = { etablissement: info.etablissement, classes: info.classes };
      if (role === "crmef") row.donnees = { cycle: info.cycle };
      await S.api.ajouter("profils", row);
      quitterInvite(); await charger();
      const c = compte();
      journal("Création du compte", c); save();
      return { c, mdp, double: login !== base };
    }
    throw new Error("Aucun identifiant disponible : réessayez dans un instant.");
  }
  async function supprimerCompte(c) {
    journal("Suppression du compte " + c.login);
    if (NUAGE) { await envoyer(); await S.api.rpc("supprimer_compte", { cible: c.id }); }
    if (c.role === "eleve") db.eleves = db.eleves.filter(e => e.id !== c.ref);
    if (c.role === "crmef") db.stag = db.stag.filter(x => x.id !== c.ref);
    if (c.role === "prof") db.profs = db.profs.filter(p => p.id !== c.ref);
    db.comptes = db.comptes.filter(x => x !== c);
  }
  async function reinitialiser(c) {
    if (NUAGE) await S.api.rpc("reinitialiser_mdp", { cible: c.id, mdp: mdpAuto(c) });
    else c.h = empreinte(mdpAuto(c));
    c.mdpAuto = true; save();
  }
  function quitterInvite() { invite = null; invStag = null; if (st && (st.invite || st.apercu)) st = vide(); }
  async function deconnecter() {
    if (compte()) journal("Déconnexion");
    if (NUAGE) {
      await envoyer().catch(() => {});
      await S.api.deconnecter();
      Object.assign(db, { comptes: [], eleves: [], stag: [], journal: [], classes: {} });
    }
    db.session = null; db.courant = null; db.stagCourant = null; quitterInvite(); st = vide(); save(); aller("#/");
  }
  const profsTous = () => NUAGE ? db.profs : S.professeurs.concat(db.profs);

  // ---------- synchronisation avec la base en ligne ----------
  const aEnvoyer = []; // actions du journal pas encore envoyées
  let derniers = {}, minuterie = null, charge = 0;
  // Ligne de la table « profils » correspondant à un compte (ce que la base enregistre).
  function ligneDe(c) {
    const l = { prenom: c.prenom, nom: c.nom, mdp_auto: !!c.mdpAuto };
    if (c.role === "eleve") {
      const e = db.eleves.find(x => x.id === c.id);
      if (e) Object.assign(l, { statut: e.statut, classe: e.eleve.classe, donnees: { niveau: e.eleve.niveau, profNom: e.eleve.prof, paliers: e.paliers, quiz: e.quiz, caps: e.caps, lecons: e.lecons || {}, maj: e.maj || null } });
    } else if (c.role === "crmef") {
      const x = db.stag.find(s => s.id === c.id);
      if (x) l.donnees = { cycle: x.cycle, parts: x.parts, maj: x.maj || null };
    } else {
      const p = db.profs.find(q => q.id === c.login) || {};
      l.donnees = { etablissement: p.etablissement || "", classes: p.classes || [], classesAjoutees: db.classes[c.login] || [] };
    }
    return l;
  }
  // Charge les comptes visibles par l'utilisateur connecté (le sien ; ses élèves pour un professeur ; tous pour l'administrateur).
  // Les données affichées ne sont remplacées qu'une fois tout reçu (une coupure en cours de route ne déconnecte personne).
  async function charger() {
    if (db.session) await envoyer(); // d'abord ce qui n'est pas encore parti
    const profs = await S.api.rpc("liste_profs");
    const n = { profs: profs.map(p => ({ id: p.login, nom: p.nom, etablissement: p.etablissement, classes: p.classes || [] })), comptes: [], eleves: [], stag: [], journal: [], classes: {}, session: null, courant: null, stagCourant: null };
    charge = Date.now();
    if (!(await S.api.pret())) { Object.assign(db, n); return; }
    const login = S.api.login(), rows = await S.api.lire("profils?select=*");
    rows.forEach(r => {
      const d = r.donnees || {}, date = String(r.cree_le).slice(0, 10);
      n.comptes.push({ id: r.id, login: r.login, role: r.role, prenom: r.prenom, nom: r.nom, naissance: r.naissance, date, derniere: String(r.derniere).slice(0, 10), mdpAuto: r.mdp_auto, ref: r.role === "eleve" || r.role === "crmef" ? r.id : r.login });
      if (r.role === "eleve") n.eleves.push({ id: r.id, statut: r.statut, date, eleve: { nom: r.prenom + " " + r.nom, niveau: d.niveau, prof: d.profNom || r.prof_id, profId: r.prof_id, classe: r.classe }, paliers: d.paliers || {}, quiz: d.quiz || {}, caps: d.caps || {}, lecons: d.lecons || {}, maj: d.maj });
      if (r.role === "crmef") n.stag.push({ id: r.id, nom: r.prenom + " " + r.nom, cycle: d.cycle, date, parts: d.parts || {}, maj: d.maj });
      if (r.role === "prof" || r.role === "admin") n.classes[r.login] = d.classesAjoutees || [];
    });
    const moi = n.comptes.find(c => c.login === login);
    if (moi && moi.role === "admin") n.journal = (await S.api.lire("journal?select=t,login,role,action&order=t.desc&limit=1000")).reverse();
    Object.assign(db, n);
    derniers = {}; db.comptes.forEach(c => { derniers[c.id] = JSON.stringify(ligneDe(c)); });
    if (!moi) { await S.api.deconnecter(); return; } // compte sans fiche (supprimé) : session fermée
    db.session = login;
    db.courant = moi.role === "eleve" ? moi.id : null;
    db.stagCourant = moi.role === "crmef" ? moi.id : null;
    if (moi.role === "prof" || (moi.role === "admin" && !db.profs.some(p => p.id === db.prof))) db.prof = moi.login;
    if (!st.apercu && !st.invite) st = db.eleves.find(e => e.id === db.courant) || vide();
  }
  // Envoie le journal et les fiches modifiées depuis le dernier envoi.
  async function envoyer() {
    clearTimeout(minuterie);
    let ok = true;
    const j = aEnvoyer.splice(0);
    if (j.length) try { await S.api.ajouter("journal", j); } catch (e) { console.warn("journal", e); }
    for (const c of db.comptes) {
      const l = ligneDe(c), txt = JSON.stringify(l);
      if (derniers[c.id] === txt) continue;
      try { await S.api.modifier("profils", c.id, l); derniers[c.id] = txt; } catch (e) { ok = false; console.warn("profil", e); }
    }
    alerteReseau(!ok);
  }
  function alerteReseau(ko, msg) {
    let z = document.getElementById("reseau");
    if (!ko) { if (z) z.remove(); return; }
    if (!z) { z = h("div", { id: "reseau", role: "alert" }); document.body.append(z); }
    z.textContent = msg || "Connexion au serveur perdue : vos derniers résultats ne sont pas encore enregistrés. Vérifiez Internet ; l’envoi reprendra au prochain enregistrement.";
  }

  let st = db.eleves.find(e => e.id === db.courant) || vide();
  const save = () => {
    if (NUAGE) { clearTimeout(minuterie); minuterie = setTimeout(() => envoyer().catch(() => alerteReseau(true)), 400); return; }
    try { localStorage.setItem(KEY, JSON.stringify(db)); } catch (e) { /* idem */ }
  };
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
  const aller = p => { if (location.hash === p) route(); else go(p); }; // affiche la page même si l'adresse ne change pas
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
  // Invité : seule la première séquence (ou leçon) est ouverte. Aperçu de l'administrateur : tout est ouvert.
  const seqOpen = s => { const i = SEQS.indexOf(s); return st.apercu || i === 0 || (!st.invite && seqDone(SEQS[i - 1])); };
  const palOpen = (s, n) => st.apercu || (seqOpen(s) && (n === 1 || valide(s, n - 1)));
  // Leçons explicites du collège : e = compte élève (par défaut l'élève en cours).
  const lecons = e => (e.eleve && (S.lecons || {})[e.eleve.niveau]) || [];
  const lecOk = (l, e) => { const r = ((e || st).lecons || {})[l.id]; return !!(r && r.valide); };
  const lecOpen = (list, l) => { const i = list.indexOf(l); return st.apercu || i === 0 || (!st.invite && lecOk(list[i - 1])); };

  // ---------- vues ----------
  function page(...kids) { majEntete(); const a = document.getElementById("app"); a.innerHTML = ""; a.append(...kids.flat(Infinity).filter(Boolean)); window.scrollTo(0, 0); }
  const crumb = (...items) => h("nav", { class: "crumb", "aria-label": "Fil d’Ariane" }, items.map((it, i) => [i ? " › " : "", it[1] ? h("a", { href: it[1] }, it[0]) : h("span", {}, it[0])]));

  function vHome() {
    page(h("section", { class: "hero" },
      h("p", { class: "kicker" }, "Apprendre · Évaluer · Remédier"),
      h("h1", {}, "Plateforme d’apprentissage et d’évaluation en SVT"),
      h("p", { class: "lead" }, "Classe inversée : préparer le cours en autonomie, s’évaluer par paliers, retravailler ses difficultés, puis vérifier ses progrès vers les exigences de l’examen."),
      h("div", { class: "entries" },
        h("a", { class: "entry", href: "#/eleve" }, h("span", { class: "entry-i" }, "🎓"), h("strong", {}, "Je suis élève"), h("span", {}, "Suivre mon parcours : cours, exercices résolus, paliers et remédiation.")),
        h("a", { class: "entry", href: "#/prof" }, h("span", { class: "entry-i" }, "📋"), h("strong", {}, "Je suis professeur"), h("span", {}, "Consulter le cadre de référence, concevoir un devoir surveillé et suivre mes classes.")),
        h("a", { class: "entry", href: "#/crmef" }, h("span", { class: "entry-i" }, "🏛️"), h("strong", {}, "Je suis étudiant(e) CRMEF"), h("span", {}, "Accéder aux modules de formation du Pr. Moubchir : analyse de pratiques, évaluation et remédiation.")))),
      h("section", { class: "cycle" }, ["Enseigner par l’inversion", "Évaluer", "Analyser les difficultés", "Remédier", "Vérifier les progrès"].map((t, i) => h("div", { class: "step" }, h("b", {}, i + 1), t))));
  }

  // ---------- accès : connexion, création de compte, mode invité ----------
  const ESPACES = {
    eleve: { titre: "Espace élève", tu: true, insc: "#/eleve/inscription", invite: "Consulter la première séquence du premier chapitre de ton niveau, sans créer de compte. Rien n’est enregistré." },
    prof: { titre: "Espace professeur", tu: false, insc: "#/prof/inscription", invite: "Consulter le cadre référentiel de l’évaluation, sans créer de compte." },
    crmef: { titre: "Espace étudiant(e) CRMEF", tu: false, insc: "#/crmef/inscription", invite: "Consulter la première partie du premier module, sans créer de compte. Rien n’est enregistré." }
  };
  const selNiveau = id => h("select", { id }, S.niveaux.map(n => h("option", { value: n.id, disabled: !n.actif }, n.nom + (n.actif ? "" : " — bientôt"))));
  const accueilDe = c => c.role === "admin" ? "#/admin" : "#/" + c.role;

  // Formulaire qui attend le serveur : bouton bloqué pendant l'envoi (pas de double inscription), message clair si le réseau manque.
  function envoi(bt, err, fn) {
    return async e => {
      e.preventDefault();
      if (bt.disabled) return;
      const txt = bt.textContent;
      bt.disabled = true; bt.textContent = "Patientez…"; err.textContent = "";
      try { await fn(); }
      catch (x) { console.warn(x); err.textContent = x.status ? "Le serveur a refusé l’opération (" + x.message + ")." : "Impossible de joindre le serveur. Vérifiez votre connexion Internet, puis réessayez."; }
      bt.disabled = false; bt.textContent = txt;
    };
  }
  function formConnexion() {
    const id = h("input", { type: "text", id: "lg", autocomplete: "username", autocapitalize: "none", spellcheck: "false", placeholder: "exemple : tarikmoubchir" });
    const mdp = h("input", { type: "password", id: "pw", autocomplete: "current-password" }), err = h("p", { class: "err", role: "alert" });
    const bt = h("button", { class: "btn" }, "Se connecter");
    return h("form", { class: "card form", onsubmit: envoi(bt, err, async () => {
      const c = await connecter(id.value, mdp.value);
      if (!c) { err.textContent = "Nom d’utilisateur ou mot de passe incorrect."; mdp.value = ""; return; }
      aller(accueilDe(c));
    }) }, h("h2", {}, "J’ai déjà un compte"), h("label", { for: "lg" }, "Nom d’utilisateur"), id, h("label", { for: "pw" }, "Mot de passe"), mdp, err, bt);
  }

  // Page d'entrée d'un espace quand personne n'est connecté.
  function vPorte(role) {
    const E = ESPACES[role], niv = role === "eleve" ? selNiveau("g-niv") : null;
    page(crumb(["Accueil", "#/"], [E.titre]), h("h1", {}, E.titre),
      h("div", { class: "two" }, formConnexion(),
        h("div", { class: "card" }, h("h2", {}, "Je n’ai pas de compte"),
          h("p", {}, E.tu ? "Crée ton compte avec ton prénom, ton nom et ta date de naissance : ton nom d’utilisateur et ton mot de passe sont fabriqués automatiquement." : "Créez votre compte avec votre prénom, votre nom et votre date de naissance : le nom d’utilisateur et le mot de passe sont fabriqués automatiquement."),
          h("a", { class: "btn", href: E.insc }, E.tu ? "Créer mon compte" : "Créer un compte"),
          h("h3", { class: "sep" }, "Entrer en invité"), h("p", { class: "muted" }, E.invite),
          niv && [h("label", { for: "g-niv", class: "lbl" }, "Mon niveau"), niv],
          h("button", { class: "btn ghost", onclick: () => entrerInvite(role, niv && niv.value) }, "Entrer en invité"))));
  }
  function entrerInvite(role, niveau) {
    quitterInvite(); invite = role;
    if (role === "eleve") st = Object.assign(vide(), { invite: true, statut: "accepte", eleve: { nom: "invité", niveau, classe: "Mode invité", prof: "—" } });
    if (role === "crmef") invStag = { id: "invite", nom: "invité", cycle: "Mode invité", parts: {}, invite: true };
    journal("Entrée en invité — espace " + ROLES[role].toLowerCase() + (niveau ? " (" + niveau + ")" : "")); save();
    aller("#/" + role);
  }
  // Rubrique réservée aux inscrits, demandée par un invité.
  function vBloque(role) {
    const E = ESPACES[role];
    page(crumb(["Accueil", "#/"], [E.titre, "#/" + role], ["Accès réservé"]), h("h1", {}, "Accès réservé aux inscrits"),
      h("div", { class: "card result ko" }, h("p", {}, E.tu ? "En mode invité, tu peux seulement consulter la première séquence du premier chapitre. Crée ton compte pour accéder à tout le parcours et garder ta progression."
        : role === "prof" ? "En mode invité, seul le cadre référentiel est consultable. Créez votre compte pour concevoir des devoirs surveillés et suivre vos classes."
          : "En mode invité, seule la première partie du premier module est consultable. Créez votre compte pour accéder à tous les modules et garder votre progression."),
        h("a", { class: "btn", href: E.insc }, E.tu ? "Créer mon compte" : "Créer un compte"),
        h("button", { class: "btn ghost", onclick: () => { quitterInvite(); aller("#/" + role); } }, "J’ai déjà un compte"),
        h("a", { class: "btn ghost", href: "#/" + role }, "Revenir")));
  }
  // Connecté avec un compte d'un autre espace.
  function vAutreRole(c, role) {
    page(crumb(["Accueil", "#/"], [ESPACES[role].titre]), h("h1", {}, ESPACES[role].titre),
      h("div", { class: "card" }, h("p", {}, "Vous êtes connecté avec le compte « " + c.login + " » (" + ROLES[c.role].toLowerCase() + "). Pour entrer dans cet espace, déconnectez-vous puis connectez-vous avec le compte correspondant."),
        h("a", { class: "btn", href: accueilDe(c) }, "Aller à mon espace"), h("button", { class: "btn ghost", onclick: deconnecter }, "Se déconnecter")));
  }
  function vConnexion() {
    const c = compte();
    if (c) return aller(accueilDe(c));
    page(crumb(["Accueil", "#/"], ["Connexion"]), h("h1", {}, "Connexion"),
      h("div", { class: "two" }, formConnexion(),
        h("div", { class: "card" }, h("h2", {}, "Pas encore de compte ?"), h("p", {}, "Choisissez votre espace pour créer un compte :"),
          h("a", { class: "btn", href: "#/eleve/inscription" }, "Je suis élève"), h("a", { class: "btn ghost", href: "#/prof/inscription" }, "Je suis professeur"), h("a", { class: "btn ghost", href: "#/crmef/inscription" }, "Je suis étudiant(e) CRMEF"))));
  }

  // Champs prénom, nom, date de naissance, communs aux trois inscriptions.
  function champsIdentite(tu) {
    const pre = h("input", { type: "text", id: "i-pre", autocomplete: "given-name" }), nom = h("input", { type: "text", id: "i-nom", autocomplete: "family-name" });
    const nais = h("input", { type: "text", id: "i-nais", placeholder: "jj/mm/aaaa", inputmode: "numeric", maxlength: "10", autocomplete: "bday" });
    const prevu = h("p", { class: "muted small", "aria-live": "polite" });
    const maj = () => { const b = norm(pre.value) + norm(nom.value); prevu.textContent = b ? "Nom d’utilisateur prévu : " + b : ""; };
    pre.addEventListener("input", maj); nom.addEventListener("input", maj);
    nais.addEventListener("input", () => { // les barres obliques s'ajoutent toutes seules
      const d = nais.value.replace(/\D/g, "").slice(0, 8);
      nais.value = d.length > 4 ? d.slice(0, 2) + "/" + d.slice(2, 4) + "/" + d.slice(4) : d.length > 2 ? d.slice(0, 2) + "/" + d.slice(2) : d;
    });
    return {
      els: [h("label", { for: "i-pre" }, "Prénom"), pre, h("label", { for: "i-nom" }, "Nom"), nom, prevu, h("label", { for: "i-nais" }, "Date de naissance (jj/mm/aaaa)"), nais],
      lire(err) {
        if (!norm(pre.value) || !norm(nom.value)) { err.textContent = tu ? "Indique ton prénom et ton nom, en lettres latines." : "Indiquez votre prénom et votre nom, en lettres latines."; return null; }
        const n = lireNaissance(nais.value);
        if (!n) { err.textContent = "Date de naissance invalide : écrire jour/mois/année, par exemple 06/03/1984."; return null; }
        const p = pre.value.trim().replace(/\s+/g, " ");
        return { prenom: p.charAt(0).toUpperCase() + p.slice(1), nom: nom.value.trim().replace(/\s+/g, " ").toUpperCase(), nais: n };
      }
    };
  }
  // Écran affiché juste après la création du compte.
  function vIdentifiants(r, suite) {
    page(crumb(["Accueil", "#/"], ["Compte créé"]), h("h1", {}, "Votre compte est créé"),
      h("div", { class: "card result ok" },
        h("p", {}, "Notez bien ces deux informations : elles servent à se reconnecter, depuis n’importe quelle page, avec le bouton « Connexion »."),
        h("dl", { class: "ids" }, h("dt", {}, "Nom d’utilisateur"), h("dd", {}, h("code", {}, r.c.login)), h("dt", {}, "Mot de passe"), h("dd", {}, h("code", {}, r.mdp))),
        h("p", { class: "muted small" }, "Règle : le nom d’utilisateur est le prénom et le nom collés, sans accent ni espace ; le mot de passe est le nom d’utilisateur suivi du jour, du mois et des deux derniers chiffres de l’année de naissance."
          + (r.double ? " Un compte portant déjà ce nom existait : un numéro a été ajouté au nom d’utilisateur." : "")),
        h("button", { class: "btn", onclick: () => aller(suite) }, "Continuer →"),
        h("a", { class: "btn ghost", href: "#/compte" }, "Choisir mon propre mot de passe")));
  }

  function vInscription() {
    if (compte()) return vEleve();
    let prof = null;
    const niveau = selNiveau("niv"), ident = champsIdentite(true);
    const rech = h("input", { type: "search", id: "rech", placeholder: "Nom du professeur ou de l’établissement" });
    const liste = h("div", { class: "profs" }), classe = h("select", { id: "cl", disabled: true }, h("option", { value: "" }, "Choisir d’abord un professeur"));
    const err = h("p", { class: "err", role: "alert" }), bt = h("button", { class: "btn" }, "Créer mon compte et envoyer ma demande");
    function maj() {
      const t = rech.value.trim().toLowerCase();
      liste.innerHTML = "";
      profsTous().filter(p => !t || (p.nom + " " + p.etablissement).toLowerCase().includes(t)).forEach(p => liste.append(
        h("button", { type: "button", class: "prof" + (prof === p ? " on" : ""), onclick: () => { prof = p; classe.disabled = false; classe.innerHTML = ""; (p.classes.length ? p.classes : ["À répartir par le professeur"]).forEach(c => classe.append(h("option", {}, c))); maj(); } }, h("strong", {}, p.nom), h("span", {}, p.etablissement))));
      if (!liste.children.length) liste.append(h("p", { class: "muted" }, NUAGE && !db.profs.length ? "Liste des professeurs indisponible : vérifie ta connexion Internet puis recharge la page." : "Aucun professeur trouvé."));
    }
    rech.addEventListener("input", maj); maj();
    page(crumb(["Accueil", "#/"], ["Espace élève", "#/eleve"], ["Créer mon compte"]),
      h("h1", {}, "Créer mon compte élève"),
      h("form", { class: "card form", onsubmit: envoi(bt, err, async () => {
        const id = ident.lire(err); if (!id) return;
        if (!prof) { err.textContent = "Choisis ton professeur dans la liste."; return; }
        vIdentifiants(await inscrire("eleve", id, { niveau: niveau.value, prof, classe: classe.value }), "#/eleve");
      }) },
        h("fieldset", {}, h("legend", {}, "1. Mon identité"), ident.els),
        h("label", { for: "niv" }, "2. Mon niveau scolaire"), niveau,
        h("label", { for: "rech" }, "3. Je cherche mon professeur pour rejoindre sa liste de classe inversée"), rech, liste,
        h("label", { for: "cl" }, "4. Ma classe"), classe,
        err, bt,
        h("p", { class: "muted" }, "Ton nom d’utilisateur et ton mot de passe s’affichent juste après. Ta demande est envoyée à ton professeur : le parcours s’ouvre dès qu’il l’accepte.")));
  }

  function vInscriptionProf() {
    if (compte()) return vProf();
    const ident = champsIdentite(false), etab = h("input", { type: "text", id: "p-etab" }), cls = h("input", { type: "text", id: "p-cl", placeholder: "exemple : 2BAC SPC-F 1, 1AC-3" }), err = h("p", { class: "err", role: "alert" }), bt = h("button", { class: "btn" }, "Créer mon compte");
    page(crumb(["Accueil", "#/"], ["Espace professeur", "#/prof"], ["Créer un compte"]), h("h1", {}, "Créer un compte professeur"),
      h("form", { class: "card form", onsubmit: envoi(bt, err, async () => {
        const id = ident.lire(err); if (!id) return;
        if (!etab.value.trim()) { err.textContent = "Indiquez votre établissement."; return; }
        vIdentifiants(await inscrire("prof", id, { etablissement: etab.value.trim(), classes: cls.value.split(/[,;]/).map(x => x.trim()).filter(Boolean) }), "#/prof");
      }) },
        h("fieldset", {}, h("legend", {}, "1. Mon identité"), ident.els),
        h("label", { for: "p-etab" }, "2. Mon établissement"), etab,
        h("label", { for: "p-cl" }, "3. Mes classes (séparées par des virgules, facultatif)"), cls,
        err, bt,
        h("p", { class: "muted" }, "Vos élèves vous trouveront dans la liste des professeurs lors de leur inscription.")));
  }

  function vInscriptionCrmef() {
    if (compte()) return vCrmef();
    const ident = champsIdentite(false), cycle = h("select", { id: "c-cy" }, S.crmef.cycles.map(c => h("option", {}, c))), err = h("p", { class: "err", role: "alert" }), bt = h("button", { class: "btn" }, "Créer mon compte");
    page(crumb(["Accueil", "#/"], ["Espace CRMEF", "#/crmef"], ["Créer un compte"]), h("h1", {}, "Créer un compte étudiant(e) CRMEF"),
      h("form", { class: "card form", onsubmit: envoi(bt, err, async () => {
        const id = ident.lire(err); if (!id) return;
        vIdentifiants(await inscrire("crmef", id, { cycle: cycle.value }), "#/crmef");
      }) },
        h("fieldset", {}, h("legend", {}, "1. Mon identité"), ident.els),
        h("label", { for: "c-cy" }, "2. Ma filière"), cycle, err, bt));
  }

  // Bandeau et liens communs de l'espace élève.
  function liensEleve() {
    if (st.invite) return h("p", { class: "muted small" }, h("a", { href: "#/eleve/inscription" }, "Créer mon compte"), " · ", h("button", { class: "link", onclick: () => { quitterInvite(); aller("#/eleve"); } }, "Quitter le mode invité"));
    if (st.apercu) return h("p", { class: "muted small" }, h("button", { class: "link", onclick: () => { st = vide(); vEleve(); } }, "Changer de niveau"), " · ", h("a", { href: "#/admin" }, "Tableau de bord"));
    return h("p", { class: "muted small" }, h("a", { href: "#/compte" }, "Mon compte et mot de passe"), " · ", h("button", { class: "link", onclick: deconnecter }, "Se déconnecter"), " · ",
      h("button", { class: "link", onclick: async () => { if (!confirm("Supprimer définitivement mon compte et ma progression ?")) return; const c = compte(); try { if (c) await supprimerCompte(c); deconnecter(); } catch (x) { alert("Suppression impossible pour le moment : vérifie ta connexion Internet."); } } }, "Supprimer mon compte"));
  }
  const bandeau = () => st.invite ? h("p", { class: "note ko" }, "Mode invité : seule la première séquence du premier chapitre est ouverte et rien n’est enregistré. ", h("a", { href: "#/eleve/inscription" }, "Crée ton compte"), " pour accéder à tout le parcours.")
    : st.apercu ? h("p", { class: "note ok" }, "Aperçu administrateur : toutes les leçons sont ouvertes et rien n’est enregistré.") : alerteMdp(true);

  function vAttente() {
    const refus = st.statut === "refuse";
    page(crumb(["Accueil", "#/"], ["Mon inscription"]), h("h1", {}, "Bonjour " + st.eleve.nom),
      h("div", { class: "card result " + (refus ? "ko" : "") }, h("h2", {}, refus ? "Demande refusée" : "Demande en attente"),
        h("p", {}, refus ? st.eleve.prof + " n’a pas accepté ta demande. Vérifie le professeur choisi, puis refais une inscription." : "Ta demande a été envoyée à " + st.eleve.prof + " pour la classe " + st.eleve.classe + ". Ton parcours s’ouvrira dès qu’elle sera acceptée."),
        refus && h("button", { class: "btn", onclick: async () => { const c = compte(); try { if (c) await supprimerCompte(c); await deconnecter(); aller("#/eleve/inscription"); } catch (x) { alert("Opération impossible pour le moment : vérifie ta connexion Internet."); } } }, "Refaire mon inscription"),
        NUAGE && !refus ? h("button", { class: "btn", onclick: async e => { e.target.textContent = "Vérification…"; try { await charger(); } catch (x) { /* hors ligne */ } vEleve(); } }, "Ma demande a-t-elle été acceptée ?") : null,
        h("button", { class: "btn ghost", onclick: deconnecter }, "Se déconnecter")),
      !refus && h("p", { class: "muted small" }, "En attendant, tu peux consulter la première séquence en mode invité. Version de test : le professeur accepte la demande dans « Je suis professeur » › « Mes classes »."));
  }

  // Administrateur dans l'espace élève : aperçu d'un niveau, tout ouvert.
  function vApercuChoix() {
    const niv = selNiveau("a-niv");
    page(crumb(["Accueil", "#/"], ["Espace élève"]), h("h1", {}, "Espace élève — aperçu"),
      h("div", { class: "card form" }, h("p", {}, "Vous êtes connecté en administrateur. Choisissez un niveau pour voir le parcours tel qu’un élève le voit, avec toutes les leçons ouvertes."),
        h("label", { for: "a-niv" }, "Niveau"), niv,
        h("button", { class: "btn", onclick: () => { st = Object.assign(vide(), { apercu: true, statut: "accepte", eleve: { nom: "administrateur", niveau: niv.value, classe: "Aperçu", prof: "—" } }); vEleve(); } }, "Voir ce niveau"),
        h("a", { class: "btn ghost", href: "#/admin" }, "Tableau de bord")));
  }

  function vEleve() {
    const c = compte();
    if (c && c.role === "admin" && !st.apercu) return vApercuChoix();
    if (c && c.role !== "eleve" && c.role !== "admin") return vAutreRole(c, "eleve");
    if (!c && !st.invite) return vPorte("eleve");
    if (!st.eleve) return c ? deconnecter() : vInscription();
    if (!acces()) return vAttente();
    const liens = liensEleve();
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
        bandeau(), h("p", { class: "note " + (lec.length ? "ok" : "ko") }, lec.length ? "Ouvre un chapitre du programme ci-dessous pour accéder à ses leçons. Chaque leçon suit cinq étapes : ouverture, « je fais », « nous faisons », « tu fais », « je retiens ». La leçon suivante s’ouvre à " + S.site.seuil + " % de réussite."
          : Object.keys(res).length ? "Voici le programme de l’année, avec un résumé de chaque chapitre. Les exercices de ce niveau sont en préparation." : "Les cours et les exercices de ce niveau sont en préparation. Voici le programme de l’année, dans l’ordre des séquences."),
        prog ? prog.unites.map((u, ui) => h("section", { class: "unite" }, h("h2", {}, u.nom), u.chapitres.map((c, ci) => {
          const r = st.invite && (ui || ci) ? null : res[ui + "." + ci], mine = lec.filter(l => l.u === ui && l.c === ci);
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
        h("div", {}, h("h1", {}, "Bonjour " + st.eleve.nom), h("p", { class: "muted" }, st.invite || st.apercu ? st.eleve.classe : st.eleve.classe + " · " + st.eleve.prof + " · inscription acceptée")),
        h("div", { class: "who-r" }, h("div", { class: "meter", role: "img", "aria-label": faits + " paliers validés sur " + total }, h("i", { style: "width:" + pct(faits, total) + "%" })), h("span", {}, faits + " / " + total + " paliers validés"),
          h("a", { class: "btn ghost", href: "#/eleve/bilan" }, "Mon bilan de compétences"))),
      bandeau(), S.unites.map(u => h("section", { class: "unite" }, h("h2", {}, u.nom),
        u.chapitres.length ? u.chapitres.map(c => h("div", { class: "chap" }, h("h3", {}, c.nom),
          c.actif ? h("div", { class: "seqs" }, c.sequences.map(id => seqCard(S.sequences[id]))) : h("p", { class: "muted" }, "Chapitre en préparation.")))
          : h("p", { class: "muted" }, "Unité en préparation."))),
      liens);
  }
  // Leçon du collège en enseignement explicite : ouverture → je fais → nous faisons → tu fais → je retiens.
  function vLecon(id, tab) {
    if (!acces()) return vEleve();
    const list = lecons(st), l = list.find(x => x.id === id);
    if (!l || !lecOpen(list, l)) return st.invite && l ? vBloque("eleve") : go("#/eleve");
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
          rec.n++; rec.best = Math.max(rec.best, sc); rec.valide = rec.valide || ok; st.maj = today(); if (!st.apercu) journal("Leçon « " + l.titre.split(" — ")[0] + " » : " + sc + " %" + (ok ? " — validée" : "")); save();
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
      !open && h("span", { class: "muted small" }, st.invite ? "Réservée aux élèves inscrits." : "Se débloque quand les 3 paliers de la séquence précédente sont validés à " + S.site.seuil + " %."));
  }

  function vSeq(id, tab) {
    const s = S.sequences[id];
    if (!acces()) return vEleve();
    if (!s || !seqOpen(s)) return st.invite && s ? vBloque("eleve") : go("#/eleve");
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
        const p = pct(got, tot); st.quiz[s.id] = Math.max(st.quiz[s.id] || 0, p); if (!st.apercu) journal("Quiz du cours « " + s.titre.split(" — ")[0] + " » : " + p + " %"); save();
        out.innerHTML = ""; out.append(h("h3", {}, "Score : " + p + " %"), h("p", {}, p >= S.site.seuil ? "Très bien : tu peux passer aux paliers d’exercices." : "Relis « L’essentiel » pour les questions manquées, puis recommence."), h("a", { class: "btn ghost", href: "#/eleve/seq/" + s.id + "/paliers" }, "Aller aux paliers →"));
        e.target.remove();
      } }, "Valider mes réponses"), out);
  }

  function vPalier(id, n, mode) {
    const s = S.sequences[id]; n = +n;
    if (!acces()) return vEleve();
    if (!s || !palOpen(s, n)) return st.invite && s ? vBloque("eleve") : go("#/eleve");
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
        rec.best = Math.max(rec.best, score); rec.valide = rec.valide || ok; rec.bloque = !ok; if (!st.apercu) journal("Palier " + n + " de « " + s.titre.split(" — ")[0] + " » : " + score + " %" + (ok ? " — validé" : ""));
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

  // Professeur connecté (ou administrateur) ; l'invité ne voit que le cadre référentiel.
  const profOk = () => { const c = compte(); return !!c && (c.role === "prof" || c.role === "admin"); };
  function vProf() {
    const c = compte();
    if (c && !profOk()) return vAutreRole(c, "prof");
    if (!c && invite !== "prof") return vPorte("prof");
    const verrou = !c ? "🔒 " : "";
    const enAttente = c ? db.eleves.filter(e => e.statut === "attente" && (estAdmin() || e.eleve.profId === db.prof)).length : 0;
    const pr = c && profsTous().find(p => p.id === db.prof);
    page(crumb(["Accueil", "#/"], ["Espace professeur"]), h("h1", {}, "Espace professeur"),
      c ? h("p", { class: "muted" }, (estAdmin() ? "Administrateur" : pr ? pr.nom + " · " + pr.etablissement : c.prenom + " " + c.nom), " · ", estAdmin() ? null : [h("a", { href: "#/compte" }, "Mon compte"), " · "], h("button", { class: "link", onclick: deconnecter }, "Se déconnecter"))
        : h("p", { class: "note ko" }, "Mode invité : seul le cadre référentiel est consultable. ", h("a", { href: "#/prof/inscription" }, "Créez votre compte"), " pour accéder aux autres rubriques. ", h("button", { class: "link", onclick: () => { quitterInvite(); aller("#/prof"); } }, "J’ai déjà un compte")),
      alerteMdp(false),
      h("div", { class: "two" },
        h("a", { class: "card act big", href: "#/prof/cadre" }, h("strong", {}, "Cadre référentiel et documents administratifs"), h("span", {}, "Références et consignes utiles à la préparation et à l’exploitation des devoirs surveillés.")),
        h("a", { class: "card act big", href: "#/prof/ds" }, h("strong", {}, verrou + "Concevoir un devoir surveillé"), h("span", {}, "Choisir les concepts, la durée et la difficulté de chaque partie et de chaque exercice : le devoir est composé à partir de la banque commune et téléchargeable en PDF.")),
        h("a", { class: "card act big", href: "#/prof/classes" }, h("strong", {}, verrou + "Mes classes" + (enAttente ? " — " + enAttente + " demande(s) en attente" : "")), h("span", {}, "Accepter ou refuser les élèves qui m’ont choisi comme professeur, les répartir dans mes classes et suivre leur progression."))));
  }

  // ---------- Mes classes : demandes d'inscription, répartition, suivi de la progression ----------
  function vClasses() {
    if (!estAdmin()) db.prof = compte().ref; // un professeur ne voit que ses propres élèves
    const prof = profsTous().find(p => p.id === db.prof) || profsTous()[0] || S.professeurs[0];
    const miens = db.eleves.filter(e => e.eleve.profId === prof.id), total = SEQS.length * 3;
    const classes = [...new Set(prof.classes.concat(db.classes[prof.id] || [], miens.filter(e => e.statut === "accepte").map(e => e.eleve.classe)))];
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
        estAdmin() ? h("label", {}, "Voir les classes de : ", h("select", { onchange: e => { db.prof = e.target.value; refaire(); } }, profsTous().map(p => h("option", { value: p.id, selected: p.id === prof.id }, p.nom)))) : h("strong", {}, prof.nom),
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
      !estAdmin() ? null : h("h2", {}, "Mes étudiant(e)s CRMEF (" + db.stag.length + ")"),
      !estAdmin() ? null : db.stag.length ? h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t suivi" },
        h("tr", {}, h("th", {}, "Étudiant(e)"), h("th", {}, "Filière"), MODS.map(m => h("th", {}, "Module " + m.code + " — " + m.id)), h("th", {}, "Dernière activité")),
        db.stag.map(x => h("tr", {}, h("th", {}, x.nom), h("td", {}, x.cycle),
          MODS.map(m => h("td", {}, h("div", { class: "meter" }, h("i", { style: "width:" + pct(nbParts(x, m), m.parties.length) + "%" })), " " + nbParts(x, m) + " / " + m.parties.length + " parties",
            h("div", { class: "muted small" }, m.parties.map((_, k) => { const r = x.parts[m.id + "-" + k]; return "P" + (k + 1) + " : " + (r ? r.best + " % (" + r.n + " tent.)" : "—"); }).join(" · ")))),
          h("td", {}, x.maj || x.date || "—"))))))
        : h("p", { class: "muted" }, "Aucun(e) étudiant(e) CRMEF inscrit(e) sur cet appareil."),
      h("p", { class: "muted small" }, "Version de test : seuls les comptes créés dans ce navigateur apparaissent ici."));
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
  // Invité : première partie du premier module seulement. Administrateur : aperçu avec tout ouvert, rien d'enregistré.
  const stag = () => {
    if (invStag) return invStag;
    if (estAdmin()) return (invStag = { id: "apercu", nom: "administrateur", cycle: "Aperçu", parts: {}, apercu: true });
    return db.stag.find(x => x.id === db.stagCourant);
  };
  const partOk = (sg, m, i) => !!(sg.parts[m.id + "-" + i] && sg.parts[m.id + "-" + i].valide);
  const partOpen = (sg, m, i) => sg.apercu || (sg.invite ? m === MODS[0] && i === 0 : i === 0 || partOk(sg, m, i - 1));
  const nbParts = (sg, m) => m.parties.filter((_, i) => partOk(sg, m, i)).length;

  function vCrmef() {
    const c = compte();
    if (c && c.role !== "crmef" && c.role !== "admin") return vAutreRole(c, "crmef");
    if (!c && invite !== "crmef") return vPorte("crmef");
    const sg = stag();
    if (!sg) return deconnecter();
    page(crumb(["Accueil", "#/"], ["Espace CRMEF"]),
      h("div", { class: "card who" }, h("div", {}, h("h1", {}, "Bonjour " + sg.nom), h("p", { class: "muted" }, sg.cycle + " · Formateur : " + S.site.concepteur))),
      sg.invite ? h("p", { class: "note ko" }, "Mode invité : seule la première partie du premier module est ouverte et rien n’est enregistré. ", h("a", { href: "#/crmef/inscription" }, "Créez votre compte"), " pour accéder à tous les modules.")
        : sg.apercu ? h("p", { class: "note ok" }, "Aperçu administrateur : toutes les parties sont ouvertes et rien n’est enregistré.") : alerteMdp(false),
      h("h2", {}, "Mes modules"),
      h("div", { class: "seqs" }, MODS.map((m, k) => {
        const ferme = sg.invite && k > 0;
        return h("a", { class: "seq " + (ferme ? "lock" : nbParts(sg, m) === m.parties.length ? "done" : "open"), href: "#/crmef/" + m.id },
          h("span", { class: "seq-st" }, ferme ? "🔒 Réservé aux inscrits" : "Module " + m.code + " · " + nbParts(sg, m) + " / " + m.parties.length + " parties validées"), h("strong", {}, m.titre), h("span", {}, "« " + m.devise + " »"));
      })),
      h("p", { class: "muted small" }, sg.invite ? h("button", { class: "link", onclick: () => { quitterInvite(); aller("#/crmef"); } }, "Quitter le mode invité")
        : sg.apercu ? h("a", { href: "#/admin" }, "Tableau de bord") : h("button", { class: "link", onclick: deconnecter }, "Se déconnecter")));
  }

  function vModule(id, tab, arg) {
    const c = compte();
    if (!c && invite !== "crmef") return vPorte("crmef");
    if (c && c.role !== "crmef" && c.role !== "admin") return vAutreRole(c, "crmef");
    const sg = stag(), m = MODS.find(x => x.id === id);
    if (!sg || !m) return go("#/crmef");
    if (sg.invite && (m !== MODS[0] || (tab && tab !== "pres" && !(tab === "p" && +arg === 0)))) return vBloque("crmef");
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
            rec.n++; rec.best = Math.max(rec.best, sc); rec.valide = rec.valide || sc >= S.site.seuil; sg.maj = today(); if (!sg.apercu) journal("Module " + m.code + ", partie " + (i + 1) + " : " + sc + " %" + (sc >= S.site.seuil ? " — validée" : "")); save();
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

  // ---------- tableau de bord de l'administrateur ----------
  const fmtDate = iso => { const d = new Date(iso); return pad2(d.getDate()) + "/" + pad2(d.getMonth() + 1) + "/" + d.getFullYear() + " " + pad2(d.getHours()) + ":" + pad2(d.getMinutes()); };
  const fmtJour = s => s ? s.split("-").reverse().join("/") : "—";
  // Avancement d'un élève : paliers (niveau avec banque d'exercices) ou leçons (collège).
  function progEleve(e) {
    if ((S.niveaux.find(n => n.id === e.eleve.niveau) || {}).banque) {
      const k = SEQS.reduce((a, s) => a + [1, 2, 3].filter(n => e.paliers[pk(s, n)] && e.paliers[pk(s, n)].valide).length, 0);
      return { k, n: SEQS.length * 3, unite: "paliers" };
    }
    const list = lecons(e);
    return { k: list.filter(l => lecOk(l, e)).length, n: list.length, unite: "leçons" };
  }
  function vAdmin() {
    if (!estAdmin()) return vConnexion();
    const parRole = r => db.comptes.filter(c => c.role === r);
    const ilYa = j => new Date(Date.now() - j * 864e5).toISOString();
    const j7 = db.journal.filter(x => x.t >= ilYa(7));
    const actifs = new Set(j7.filter(x => x.role !== "invite" && x.role !== "admin").map(x => x.login)).size;
    const invites = db.journal.filter(x => x.action.startsWith("Entrée en invité")).length;
    const eleveDe = c => db.eleves.find(e => e.id === c.ref), stagDe = c => db.stag.find(x => x.id === c.ref);
    // toutes les évaluations enregistrées : leçons, paliers, parties CRMEF
    const scores = [];
    db.eleves.forEach(e => { Object.values(e.lecons || {}).forEach(r => scores.push(r.best)); Object.values(e.paliers).forEach(r => r.tentatives.forEach(t => scores.push(t.score))); });
    db.stag.forEach(x => Object.values(x.parts).forEach(r => scores.push(r.best)));
    const moy = scores.length ? Math.round(sum(scores, x => x) / scores.length) : null;
    const valides = sum(db.eleves, e => progEleve(e).k);

    function detail(c) {
      if (c.role === "eleve") {
        const e = eleveDe(c); if (!e) return "—";
        const niv = (S.niveaux.find(n => n.id === e.eleve.niveau) || {}).nom || e.eleve.niveau, p = progEleve(e);
        return [niv + " · " + e.eleve.classe + " · " + e.eleve.prof + " · ", h("b", {}, { attente: "en attente", accepte: "accepté", refuse: "refusé" }[e.statut]),
          p.n ? h("div", {}, h("span", { class: "meter" }, h("i", { style: "width:" + pct(p.k, p.n) + "%" })), " " + p.k + " / " + p.n + " " + p.unite + " validé(e)s") : null];
      }
      if (c.role === "crmef") { const x = stagDe(c); return x ? x.cycle + " · " + MODS.map(m => m.code + " : " + nbParts(x, m) + "/" + m.parties.length).join(" · ") : "—"; }
      if (c.role === "prof") { const p = db.profs.find(q => q.id === c.ref); return p ? p.etablissement + " · " + db.eleves.filter(e => e.eleve.profId === p.id && e.statut === "accepte").length + " élève(s) · " + db.eleves.filter(e => e.eleve.profId === p.id && e.statut === "attente").length + " demande(s)" : "—"; }
      return "—";
    }

    // filtres des tableaux
    const fRole = h("select", { "aria-label": "Filtrer les comptes par rôle" }, h("option", { value: "" }, "Tous les rôles"), ["eleve", "prof", "crmef"].map(r => h("option", { value: r }, ROLES[r])));
    const fTxt = h("input", { type: "search", placeholder: "Rechercher un nom ou un identifiant", "aria-label": "Rechercher un compte" });
    const corps = h("tbody");
    function majComptes() {
      const t = norm(fTxt.value);
      corps.innerHTML = "";
      const list = db.comptes.filter(c => (!fRole.value || c.role === fRole.value) && (!t || norm(c.login + c.prenom + c.nom).includes(t))).slice().reverse();
      if (!list.length) corps.append(h("tr", {}, h("td", { colspan: "6", class: "muted" }, "Aucun compte.")));
      list.forEach(c => corps.append(h("tr", {}, h("th", {}, c.login, h("div", { class: "muted small" }, c.prenom + " " + c.nom)), h("td", {}, ROLES[c.role]), h("td", {}, c.naissance),
        h("td", {}, fmtJour(c.date), h("div", { class: "muted small" }, "activité : " + fmtJour(c.derniere))), h("td", {}, detail(c)),
        h("td", {}, c.mdpAuto ? h("div", { class: "muted small" }, "mot de passe automatique") : h("button", { class: "link", onclick: () => {
          if (!confirm("Remettre le mot de passe automatique de « " + c.login + " » ? (en cas d’oubli)")) return;
          reinitialiser(c).then(() => { alert("Nouveau mot de passe de " + c.login + " : " + mdpAuto(c)); vAdmin(); }, () => alert("Réinitialisation impossible pour le moment : vérifiez la connexion Internet."));
        } }, "Réinitialiser le mot de passe"), " ",
          h("button", { class: "link danger", onclick: () => { if (confirm("Supprimer le compte « " + c.login + " » et toute sa progression ?")) supprimerCompte(c).then(() => { save(); vAdmin(); }, () => alert("Suppression impossible pour le moment : vérifiez la connexion Internet.")); } }, "Supprimer")))));
    }
    fRole.addEventListener("change", majComptes); fTxt.addEventListener("input", majComptes);

    const jRole = h("select", { "aria-label": "Filtrer le journal par rôle" }, h("option", { value: "" }, "Toute l’activité"), ["eleve", "prof", "crmef", "invite", "admin"].map(r => h("option", { value: r }, ROLES[r])));
    const jCorps = h("tbody");
    function majJournal() {
      jCorps.innerHTML = "";
      const list = db.journal.filter(x => !jRole.value || x.role === jRole.value).slice(-150).reverse();
      if (!list.length) jCorps.append(h("tr", {}, h("td", { colspan: "4", class: "muted" }, "Aucune activité enregistrée.")));
      list.forEach(x => jCorps.append(h("tr", {}, h("td", { class: "nowrap" }, fmtDate(x.t)), h("th", {}, x.login), h("td", {}, ROLES[x.role] || x.role), h("td", {}, x.action))));
    }
    jRole.addEventListener("change", majJournal);
    majComptes(); majJournal();

    // élèves par niveau
    const niveaux = S.niveaux.map(n => ({ n, list: db.eleves.filter(e => e.eleve.niveau === n.id) })).filter(x => x.list.length);

    page(crumb(["Accueil", "#/"], ["Tableau de bord"]), h("h1", {}, "Tableau de bord de l’administrateur"),
      h("p", { class: "muted" }, "Connecté : " + compte().login + " · ", NUAGE ? [h("button", { class: "link", onclick: async () => { try { await charger(); } catch (x) { alerteReseau(true, "Actualisation impossible : vérifiez la connexion Internet."); } vAdmin(); } }, "Actualiser"), " · ", h("a", { href: "#/compte" }, "Mon mot de passe"), " · "] : null, h("a", { href: "#/eleve" }, "Aperçu de l’espace élève"), " · ", h("a", { href: "#/prof/classes" }, "Classes des professeurs"), " · ", h("a", { href: "#/crmef" }, "Aperçu de l’espace CRMEF"), " · ", h("button", { class: "link", onclick: deconnecter }, "Se déconnecter")),
      h("div", { class: "stats" },
        h("div", { class: "stat" }, h("b", {}, parRole("eleve").length), h("span", {}, "Élèves inscrits (" + db.eleves.filter(e => e.statut === "attente").length + " en attente)")),
        h("div", { class: "stat" }, h("b", {}, parRole("prof").length), h("span", {}, "Professeurs inscrits")),
        h("div", { class: "stat" }, h("b", {}, parRole("crmef").length), h("span", {}, "Étudiant(e)s CRMEF inscrit(e)s")),
        h("div", { class: "stat" }, h("b", {}, actifs), h("span", {}, "Comptes actifs ces 7 derniers jours")),
        h("div", { class: "stat" }, h("b", {}, j7.filter(x => x.action === "Connexion" && x.role !== "admin").length), h("span", {}, "Connexions ces 7 derniers jours")),
        h("div", { class: "stat" }, h("b", {}, invites), h("span", {}, "Visites en mode invité")),
        h("div", { class: "stat" }, h("b", {}, scores.length), h("span", {}, "Évaluations réalisées")),
        h("div", { class: "stat" }, h("b", {}, moy == null ? "—" : moy + " %"), h("span", {}, "Score moyen des évaluations")),
        h("div", { class: "stat" }, h("b", {}, valides), h("span", {}, "Leçons et paliers validés"))),

      niveaux.length ? [h("h2", {}, "Élèves par niveau"), h("div", { class: "card" }, h("div", { class: "t-wrap" }, h("table", { class: "t" },
        h("tr", {}, h("th", {}, "Niveau"), h("th", {}, "Élèves"), h("th", {}, "Acceptés"), h("th", {}, "Avancement moyen")),
        niveaux.map(x => { const acc = x.list.filter(e => e.statut === "accepte"), p = acc.map(progEleve).filter(q => q.n);
          return h("tr", {}, h("th", {}, x.n.nom), h("td", {}, x.list.length), h("td", {}, acc.length), h("td", {}, p.length ? Math.round(sum(p, q => pct(q.k, q.n)) / p.length) + " %" : "—")); }))))] : null,

      h("h2", {}, "Comptes (" + db.comptes.length + ")"),
      h("div", { class: "card" }, h("div", { class: "bar" }, fRole, fTxt),
        h("div", { class: "t-wrap" }, h("table", { class: "t suivi" }, h("thead", {}, h("tr", {}, h("th", {}, "Utilisateur"), h("th", {}, "Rôle"), h("th", {}, "Naissance"), h("th", {}, "Inscrit le"), h("th", {}, "Détail"), h("th", {}, ""))), corps))),

      h("h2", {}, "Activité récente"),
      h("div", { class: "card" }, h("div", { class: "bar" }, jRole, h("span", { class: "muted small" }, "150 dernières actions affichées")),
        h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("thead", {}, h("tr", {}, h("th", {}, "Date"), h("th", {}, "Utilisateur"), h("th", {}, "Rôle"), h("th", {}, "Action"))), jCorps))),
      h("p", { class: "muted small" }, NUAGE ? "Données de la base en ligne : comptes de tous les appareils, actualisées à chaque ouverture du tableau de bord." : "Version de test : le tableau de bord montre les comptes et l’activité enregistrés dans ce navigateur."));
  }

  // ---------- Mon compte : informations et changement du mot de passe ----------
  function vCompte() {
    const c = compte();
    if (!c) return vConnexion();
    if (c.role === "admin" && !NUAGE) return aller("#/admin");
    const tu = c.role === "eleve", err = h("p", { class: "err", role: "alert" }), out = h("div", { role: "status" }), bt = h("button", { class: "btn" }, "Enregistrer le nouveau mot de passe");
    const champ = (id, lib, ac) => [h("label", { for: id }, lib), h("input", { type: "password", id, autocomplete: ac })];
    const [la, ancien] = champ("m-old", tu ? "Mon mot de passe actuel" : "Mot de passe actuel", "current-password");
    const [ln, neuf] = champ("m-new", tu ? "Mon nouveau mot de passe" : "Nouveau mot de passe", "new-password");
    const [lc, conf] = champ("m-conf", "Confirmer le nouveau mot de passe", "new-password");
    page(crumb(["Accueil", "#/"], c.role === "admin" ? ["Tableau de bord", "#/admin"] : [ESPACES[c.role].titre, "#/" + c.role], ["Mon compte"]), h("h1", {}, "Mon compte"),
      h("div", { class: "card" }, h("dl", { class: "ids" },
        h("dt", {}, "Nom d’utilisateur"), h("dd", {}, h("code", {}, c.login)), h("dt", {}, "Nom"), h("dd", {}, c.prenom + " " + c.nom),
        h("dt", {}, "Espace"), h("dd", {}, ROLES[c.role]), h("dt", {}, "Date de naissance"), h("dd", {}, c.naissance), h("dt", {}, "Inscription"), h("dd", {}, fmtJour(c.date)))),
      alerteMdp(tu),
      h("form", { class: "card form", onsubmit: envoi(bt, err, async () => {
        out.innerHTML = "";
        const n = neuf.value;
        if (n.length < 8) { err.textContent = "Le nouveau mot de passe doit contenir au moins 8 caractères."; return; }
        if (/\s/.test(n)) { err.textContent = "Le mot de passe ne doit pas contenir d’espace."; return; }
        if (n === mdpAuto(c) || norm(n).startsWith(norm(c.prenom)) && norm(n).includes(norm(c.nom))) { err.textContent = tu ? "Choisis un mot de passe qui ne reprend pas ton nom et ton prénom." : "Choisissez un mot de passe qui ne reprend pas votre nom et votre prénom."; return; }
        if (n !== conf.value) { err.textContent = "Les deux nouveaux mots de passe ne sont pas identiques."; return; }
        if (NUAGE) {
          try { await S.api.connecter(c.login, ancien.value.trim()); } catch (x) { if (x.status === 400) { err.textContent = "Le mot de passe actuel est incorrect."; return; } throw x; }
          await S.api.changerMdp(n);
        } else {
          if (c.h !== empreinte(ancien.value.trim())) { err.textContent = "Le mot de passe actuel est incorrect."; return; }
          c.h = empreinte(n);
        }
        c.mdpAuto = false; journal("Mot de passe modifié"); save();
        ancien.value = neuf.value = conf.value = "";
        vCompte(); document.getElementById("app").append(h("p", { class: "note ok", role: "status" }, tu ? "C’est fait : ton nouveau mot de passe est enregistré. Utilise-le à ta prochaine connexion." : "C’est fait : le nouveau mot de passe est enregistré. Utilisez-le à votre prochaine connexion."));
      }) }, h("h2", {}, "Changer mon mot de passe"),
        h("p", { class: "muted small" }, "Au moins 8 caractères, sans espace, sans reprendre le prénom et le nom. Mélanger lettres, chiffres et un signe (par exemple @ ou !) le rend plus sûr."),
        la, ancien, ln, neuf, lc, conf, err, bt,
        h("p", { class: "muted small" }, tu ? "En cas d’oubli, demande à l’administrateur de remettre ton mot de passe automatique." : "En cas d’oubli, l’administrateur peut remettre le mot de passe automatique.")),
      out, h("a", { class: "btn ghost", href: accueilDe(c) }, "Retour à mon espace"));
  }

  function majEntete() {
    const z = document.getElementById("compte");
    if (!z) return;
    const c = compte();
    z.innerHTML = "";
    if (c) z.append(...[c.role === "admin" && h("a", { href: "#/admin" }, "Tableau de bord"), h("a", { class: "qui", href: "#/compte", title: "Mon compte et mot de passe" }, "👤 " + c.login), h("button", { class: "link", onclick: deconnecter }, "Déconnexion")].filter(Boolean));
    else z.append(h("a", { href: "#/connexion" }, "Connexion"));
  }

  // ---------- routage ----------
  function route() {
    const p = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    document.querySelectorAll("header nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#/" + (p[0] || "")));
    majEntete();
    if (!p.length) return vHome();
    if (p[0] === "connexion") return vConnexion();
    if (NUAGE && db.session && (p[0] === "admin" || p[1] === "classes") && Date.now() - charge > 15000) {
      const ici = location.hash;
      charger().then(() => { if (location.hash === ici) route(); }, () => alerteReseau(true, "Actualisation impossible : vérifiez la connexion Internet."));
    }
    if (p[0] === "admin") return vAdmin();
    if (p[0] === "compte") return vCompte();
    if (p[0] === "eleve") {
      if (p[1] === "inscription") return vInscription();
      if (!compte() && !st.invite) return vPorte("eleve");
      if (p[1] === "bilan") return vBilan();
      if (p[1] === "seq" && p[3] === "p") return vPalier(p[2], p[4], p[5]);
      if (p[1] === "seq") return vSeq(p[2], p[3]);
      if (p[1] === "lecon") return vLecon(p[2], p[3]);
      return vEleve();
    }
    if (p[0] === "crmef") return p[1] === "inscription" ? vInscriptionCrmef() : p[1] ? vModule(p[1], p[2], p[3]) : vCrmef();
    if (p[0] === "prof") {
      if (p[1] === "inscription") return vInscriptionProf();
      if (p[1] === "cadre") return profOk() || invite === "prof" ? vCadre() : vProf();
      if ((p[1] === "classes" || p[1] === "ds") && !profOk()) return compte() ? vProf() : invite === "prof" ? vBloque("prof") : vPorte("prof");
      if (p[1] === "classes") return vClasses();
      if (p[1] === "ds") return page(crumb(["Accueil", "#/"], ["Espace professeur", "#/prof"], ["Concevoir un devoir"]), S.viewDS());
      return vProf();
    }
    vHome();
  }
  window.addEventListener("hashchange", route);
  // En ligne : la session et les comptes sont chargés avant le premier affichage.
  async function demarrer() {
    if (NUAGE) {
      page(h("p", { class: "muted" }, "Chargement…"));
      try { await charger(); } catch (x) { console.warn(x); alerteReseau(true, "Le serveur ne répond pas : la connexion et l’inscription sont momentanément indisponibles. Vérifiez Internet puis rechargez la page."); }
    }
    route();
  }
  window.addEventListener("DOMContentLoaded", demarrer);
})();
