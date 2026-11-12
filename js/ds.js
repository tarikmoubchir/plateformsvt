// Générateur de devoirs surveillés : sélection dans la banque commune, mise en page, export PDF (pages en image, texte non modifiable).
(function () {
  const S = window.SVT, h = (...a) => S.h(...a);
  const PW = 1240, PH = 1754, M = 95, CW = PW - 2 * M; // A4 à 150 dpi
  const fr = v => String(Math.round(v * 100) / 100).replace(".", ",");
  const sum = (a, f) => a.reduce((t, x) => t + f(x), 0);
  const txt = s => String(s).replace(/<br\s*\/?>/g, "\n").replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ");
  const L = "abcdefghij";

  // Permutation stable (même ordre dans le sujet et dans le corrigé).
  function perm(n, seed) {
    let x = 0; for (const c of seed) x = (x * 31 + c.charCodeAt(0)) >>> 0;
    const a = Array.from({ length: n }, (_, i) => i);
    for (let i = n - 1; i > 0; i--) { x = (x * 1103515245 + 12345) >>> 0; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  }

  // ---------- version papier d'une question ----------
  function paper(q) {
    if (q.ouvert) return q.ouvert;
    const e = txt(q.enonce);
    switch (q.type) {
      case "qcm": return e + " (Recopier la lettre de la proposition correcte.)\n" + perm(q.options.length, q.id).map((i, k) => "   " + L[k] + ") " + txt(q.options[i])).join("\n");
      case "vf": return e + "\n" + q.items.map((it, k) => "   " + L[k] + ") " + txt(it.t)).join("\n");
      case "assoc": return e + " (Recopier les couples : élément, lettre.)\n" + q.gauche.map((g, k) => "   " + (/^\d+$/.test(g) ? "Élément " + g : (k + 1) + ". " + txt(g))).join("\n") + "\n   Propositions : " + q.droite.map((d, k) => L[k] + ") " + txt(d)).join(" ; ");
      case "ordre": return e + " (Recopier les lettres dans l’ordre.)\n" + perm(q.items.length, q.id).map((i, k) => "   " + L[k] + ") " + txt(q.items[i])).join("\n");
      case "trous": return e + " (Recopier le texte en choisissant, pour chaque crochet, le terme correct.)\n   " + q.texte.replace(/\{(\d+)\}/g, (_, i) => "[ " + q.choix[+i].slice().sort().join(" / ") + " ]");
      default: return e;
    }
  }
  function answer(q) {
    if (q.ouvert) return q.corrige || txt(S.solution(q)).replace(/\n/g, " ; ");
    switch (q.type) {
      case "qcm": return L[perm(q.options.length, q.id).indexOf(q.rep)] + ") " + txt(q.options[q.rep]);
      case "vf": return q.items.map((it, k) => L[k] + ") " + (it.v ? "Vrai" : "Faux")).join(" ; ");
      case "assoc": return q.gauche.map((g, k) => "(" + (/^\d+$/.test(g) ? g : k + 1) + ", " + L[q.rep[k]] + ")").join(" ; ");
      case "ordre": { const p = perm(q.items.length, q.id); return q.items.map((_, i) => L[p.indexOf(i)]).join(" → "); }
      default: return txt(S.solution(q));
    }
  }

  // ---------- composition ----------
  // Cadre de référence : partie I (restitution) = 25 % de la note et du temps ; partie II (raisonnement et communication) = 75 %.
  function scale(qs, total) {
    if (!qs.length) return [];
    const f = total / sum(qs, q => q.pts), pts = qs.map(q => Math.max(0.25, Math.round(q.pts * f * 4) / 4));
    // l'écart d'arrondi est réparti par quarts de point sur les questions les mieux dotées
    for (let d = total - sum(pts, p => p), g = 0; Math.abs(d) > 1e-9 && g < 400; d = total - sum(pts, p => p), g++) {
      let i = 0; pts.forEach((p, k) => { if (p > pts[i]) i = k; });
      if (d < 0 && pts[i] <= 0.25) break;
      pts[i] += d > 0 ? 0.25 : -0.25;
    }
    return pts;
  }
  const NIV = { 1: "Débutant", 2: "Moyen", 3: "Avancé" };
  const niveauDe = d => d < 1.5 ? 1 : d < 2.3 ? 2 : 3; // difficulté moyenne d'un exercice → niveau
  // p.diffI : niveau de la partie I ; p.diffs : niveau demandé pour chaque exercice de la partie II.
  function compose(p) {
    const bank = S.bank(), tI = p.duree * 0.25, tII = p.duree * 0.75;
    const partI = []; let used = 0;
    bank.restitution.filter(x => p.concepts.has(x.q.concept)).map(x => ({ q: x.q, w: -Math.abs(x.q.diff - p.diffI) + Math.random() * 0.6 })).sort((a, b) => b.w - a.w)
      .forEach(x => { if (used + x.q.duree <= tI * 1.1) { partI.push(x.q); used += x.q.duree; } });
    const pool = bank.exos.map(x => { const qs = x.ex.questions.filter(q => p.concepts.has(q.concept)); return { ex: x.ex, palier: x.palier, qs, duree: sum(qs, q => q.duree), diff: sum(qs, q => q.diff) / (qs.length || 1) }; })
      .filter(x => x.qs.length >= 2);
    const partII = [], budget = tII / p.diffs.length; let used2 = 0;
    p.diffs.forEach(d => {
      let best = null, bs = -Infinity;
      pool.forEach(x => {
        if (used2 + x.duree > tII * 1.1 || partII.some(y => y.ex === x.ex || y.ex.docs.some(dd => x.ex.docs.includes(dd)))) return;
        // d'abord le niveau demandé, puis la variété des paliers et le respect du temps alloué à l'exercice
        const s = -2 * Math.abs(niveauDe(x.diff) - d) - Math.abs(x.diff - d) - 0.7 * partII.filter(y => y.palier === x.palier).length - 0.5 * Math.abs(x.duree - budget) / budget + Math.random() * 0.4;
        if (s > bs) { bs = s; best = x; }
      });
      if (best) { partII.push(Object.assign({ voulu: d }, best)); used2 += best.duree; }
    });
    const hasI = partI.length > 0, pts = new Map();
    scale(partI, partII.length ? 5 : 20).forEach((v, i) => pts.set(partI[i], v));
    // les points de la partie II sont répartis également entre les exercices (cadre de référence : exercices de même poids)
    const q4 = (hasI ? 15 : 20) * 4, n = partII.length;
    partII.forEach((x, i) => scale(x.qs, (Math.floor(q4 / n) + (i < q4 % n ? 1 : 0)) / 4).forEach((v, k) => pts.set(x.qs[k], v)));
    return { p, partI, partII, pts, duree: used + used2, manque: p.diffs.length - n };
  }

  // ---------- mise en page sur canevas ----------
  function Pager() {
    const pages = []; let ctx, y;
    const font = (size, bold, italic) => { ctx.font = (italic ? "italic " : "") + (bold ? "bold " : "") + size + "px Arial, Helvetica, sans-serif"; };
    function newPage() { const c = document.createElement("canvas"); c.width = PW; c.height = PH; ctx = c.getContext("2d"); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, PW, PH); ctx.fillStyle = "#000"; ctx.textBaseline = "alphabetic"; pages.push(c); y = M; }
    const ensure = hh => { if (y + hh > PH - M - 30) newPage(); };
    function wrap(t, maxW) {
      const lines = [];
      t.split("\n").forEach(par => {
        const lead = (par.match(/^ +/) || [""])[0]; let line = "";
        par.trim().split(/\s+/).forEach(wd => { const t2 = line ? line + " " + wd : lead + wd; if (line && ctx.measureText(t2).width > maxW) { lines.push(line); line = lead + "   " + wd; } else line = t2; });
        lines.push(line);
      });
      return lines;
    }
    function text(t, o) {
      o = Object.assign({ size: 22, bold: false, italic: false, indent: 0, after: 10, align: "left", color: "#000" }, o);
      font(o.size, o.bold, o.italic);
      const lh = Math.round(o.size * 1.4), lines = wrap(t, CW - o.indent);
      lines.forEach(l => { ensure(lh); font(o.size, o.bold, o.italic); ctx.fillStyle = o.color; ctx.textAlign = o.align; ctx.fillText(l, o.align === "center" ? PW / 2 : M + o.indent, y + o.size); y += lh; });
      ctx.textAlign = "left"; y += o.after;
    }
    function rule() { ensure(12); ctx.fillStyle = "#000"; ctx.fillRect(M, y, CW, 2); y += 14; }
    function table(d) {
      font(20);
      const n = d.cols.length, wts = d.cols.map((c, i) => Math.min(40, Math.max(6, c.length, ...d.rows.map(r => String(r[i]).length)))), tw = sum(wts, v => v);
      const ws = wts.map(v => CW * v / tw);
      [d.cols].concat(d.rows).forEach((row, ri) => {
        font(20, ri === 0);
        const cells = row.map((c, i) => wrap(String(c), ws[i] - 20)), rh = Math.max(...cells.map(c => c.length)) * 28 + 16;
        ensure(rh);
        let x = M;
        cells.forEach((ls, i) => {
          ctx.fillStyle = ri === 0 ? "#eeeeee" : "#fff"; ctx.fillRect(x, y, ws[i], rh); ctx.strokeStyle = "#000"; ctx.lineWidth = 1.5; ctx.strokeRect(x, y, ws[i], rh);
          ctx.fillStyle = "#000"; ctx.textAlign = "center"; font(20, ri === 0 || i === 0);
          ls.forEach((l, k) => ctx.fillText(l, x + ws[i] / 2, y + 28 + k * 28 + (rh - 16 - ls.length * 28) / 2));
          x += ws[i];
        });
        ctx.textAlign = "left"; y += rh;
      });
      y += 18; void n;
    }
    function doc(d, n) {
      text("Document " + n + " : " + txt(d.titre), { bold: true, size: 20, after: 6 });
      if (d.type === "table") table(d);
      else if (d.type === "texte") { text(d.texte, { italic: true, size: 21, indent: 30, after: 16 }); }
      else { const sz = S.docSize(d), k = 1.45, w = sz[0] * k, hh = sz[1] * k; ensure(hh + 10); (d.type === "graph" ? S.drawGraph : S.drawSchema)(ctx, d, (PW - w) / 2, y, w, hh, k); y += hh + 16; }
    }
    function finish(label) {
      pages.forEach((c, i) => {
        const g = c.getContext("2d");
        g.save(); g.translate(PW / 2, PH / 2); g.rotate(-Math.PI / 4); g.globalAlpha = 0.05; g.fillStyle = "#000"; g.font = "bold 150px Arial"; g.textAlign = "center"; g.fillText("MOUBCHIR", 0, 50); g.restore();
        g.fillStyle = "#000"; g.fillRect(M, PH - M + 8, CW, 1.5); g.font = "17px Arial"; g.fillStyle = "#333"; g.textAlign = "left";
        g.fillText(S.site.nom + " · Concepteur : " + S.site.concepteur + " · " + label, M, PH - M + 34);
        g.textAlign = "right"; g.fillText("Page " + (i + 1) + " / " + pages.length, PW - M, PH - M + 34);
      });
      return pages;
    }
    newPage();
    return { text, rule, doc, ensure, finish, space: v => { y += v; }, box(lines) { const hh = lines.length * 34 + 24; ctx.strokeStyle = "#000"; ctx.lineWidth = 2; ctx.strokeRect(M, y, CW, hh); y += 16; lines.forEach(l => text(l[0], Object.assign({ after: 0, align: "center" }, l[1]))); y += 22; } };
  }

  function entete(pg, ds, titre) {
    const p = ds.p, niv = S.niveaux.find(n => n.id === p.niveau).nom;
    pg.box([[p.etab || "Établissement : ................................................", { size: 21 }], [titre, { size: 28, bold: true }], [niv, { size: 21 }],
      ["Durée : " + p.duree + " min" + (p.classe ? "   ·   Classe : " + p.classe : "") + (p.date ? "   ·   Date : " + p.date : ""), { size: 21 }]]);
  }
  function renderSujet(ds) {
    const pg = Pager();
    entete(pg, ds, ds.p.titre || "Devoir surveillé de SVT");
    pg.text("Nom et prénom : ...............................................................   N° : ..........   Note : .......... / 20", { size: 21, after: 6 });
    pg.text("Matériel autorisé : matériel d’écriture et de dessin, calculatrice non programmable, papier millimétré.", { size: 18, italic: true, after: 18 });
    let n = 0;
    // le barème suit la consigne, avant les propositions
    const withPts = q => { const t = paper(q).split("\n"); t[0] += "  (" + fr(ds.pts.get(q)) + " pt)"; return t.join("\n"); };
    if (ds.partI.length) {
      pg.text("Partie I — Restitution des connaissances (" + fr(sum(ds.partI, q => ds.pts.get(q))) + " points)", { bold: true, size: 25, after: 4 }); pg.rule();
      ds.partI.forEach(q => { pg.ensure(90); pg.text(++n + ". " + withPts(q), { after: 14 }); });
    }
    if (ds.partII.length) {
      pg.space(10);
      pg.text("Partie II — Raisonnement scientifique et communication écrite et graphique (" + fr(sum(ds.partII, x => sum(x.qs, q => ds.pts.get(q)))) + " points)", { bold: true, size: 25, after: 4 }); pg.rule();
      ds.partII.forEach((x, i) => {
        pg.ensure(200);
        pg.text("Exercice " + (i + 1) + " (" + fr(sum(x.qs, q => ds.pts.get(q))) + " points)", { bold: true, size: 23, after: 6 });
        pg.text(x.ex.contexte, { after: 12 });
        x.ex.docs.forEach((d, k) => pg.doc(d, k + 1));
        x.qs.forEach(q => { pg.ensure(90); pg.text(++n + ". " + withPts(q), { after: 14 }); });
        pg.space(8);
      });
    }
    return pg.finish("Sujet");
  }
  function renderCorrige(ds) {
    const pg = Pager();
    entete(pg, ds, "Éléments de réponse et barème");
    let n = 0;
    const line = q => { pg.ensure(80); pg.text(++n + ". [" + fr(ds.pts.get(q)) + " pt — " + S.capacites[q.cap].nom + "]", { bold: true, size: 20, after: 2 }); pg.text(answer(q), { indent: 30, after: 12 }); };
    if (ds.partI.length) { pg.text("Partie I — Restitution des connaissances", { bold: true, size: 25, after: 4 }); pg.rule(); ds.partI.forEach(line); }
    if (ds.partII.length) { pg.text("Partie II — Raisonnement scientifique et communication", { bold: true, size: 25, after: 4 }); pg.rule(); ds.partII.forEach((x, i) => { pg.text("Exercice " + (i + 1) + " — " + x.ex.titre, { bold: true, size: 22, after: 6 }); x.qs.forEach(line); }); }
    return pg.finish("Corrigé");
  }

  // ---------- assemblage du fichier PDF (une image JPEG par page) ----------
  function buildPDF(pages, title) {
    const enc = new TextEncoder(), chunks = [], offs = []; let len = 0;
    const push = d => { const b = typeof d === "string" ? enc.encode(d) : d; chunks.push(b); len += b.length; };
    const obj = (n, dict, bin) => { offs[n] = len; push(n + " 0 obj\n" + dict + "\n"); if (bin) { push("stream\n"); push(bin); push("\nendstream\n"); } push("endobj\n"); };
    const ascii = s => s.normalize("NFD").replace(/[^\x20-\x7e]/g, "").replace(/[()\\]/g, "");
    push("%PDF-1.4\n");
    const N = pages.length, info = 3 + 3 * N;
    obj(1, "<< /Type /Catalog /Pages 2 0 R >>");
    obj(2, "<< /Type /Pages /Count " + N + " /Kids [" + pages.map((_, i) => (3 + 3 * i) + " 0 R").join(" ") + "] >>");
    pages.forEach((c, i) => {
      const b64 = c.toDataURL("image/jpeg", 0.88).split(",")[1], bin = atob(b64), img = new Uint8Array(bin.length);
      for (let k = 0; k < bin.length; k++) img[k] = bin.charCodeAt(k);
      const cont = "q 595.28 0 0 841.89 0 0 cm /Im0 Do Q", o = 3 + 3 * i;
      obj(o, "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im0 " + (o + 2) + " 0 R >> >> /Contents " + (o + 1) + " 0 R >>");
      obj(o + 1, "<< /Length " + cont.length + " >>", enc.encode(cont));
      obj(o + 2, "<< /Type /XObject /Subtype /Image /Width " + c.width + " /Height " + c.height + " /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length " + img.length + " >>", img);
    });
    obj(info, "<< /Title (" + ascii(title) + ") /Author (" + ascii(S.site.concepteur) + ") /Creator (" + ascii(S.site.nom) + ") >>");
    const xref = len;
    push("xref\n0 " + (info + 1) + "\n0000000000 65535 f \n" + offs.slice(1).map(o => String(o).padStart(10, "0") + " 00000 n \n").join(""));
    push("trailer\n<< /Size " + (info + 1) + " /Root 1 0 R /Info " + info + " 0 R >>\nstartxref\n" + xref + "\n%%EOF\n");
    return new Blob(chunks, { type: "application/pdf" });
  }
  function download(blob, name) {
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 5000);
  }
  S._ds = { compose, renderSujet, renderCorrige, buildPDF }; // exposé pour les tests

  // ---------- interface ----------
  S.viewDS = function () {
    const out = h("div", { class: "ds-out", role: "status" });
    const niveau = h("select", { id: "d-niv" }, S.niveaux.filter(n => n.banque).map(n => h("option", { value: n.id }, n.nom)));
    const boxes = Object.keys(S.concepts).map(c => h("label", { class: "opt" }, h("input", { type: "checkbox", value: c, checked: true }), h("span", {}, S.concepts[c])));
    const duree = h("select", { id: "d-dur" }, [30, 45, 60, 90, 120].map(v => h("option", { value: v, selected: v === 60 }, v + " min")));
    const selNiv = (id, val) => h("select", { id }, [1, 2, 3].map(v => h("option", { value: v, selected: v === val }, NIV[v])));
    const diffI = selNiv("d-dI", 2), nbEx = h("select", { id: "d-nb" }, [1, 2, 3, 4].map(v => h("option", { value: v, selected: v === 3 }, v + " exercice" + (v > 1 ? "s" : ""))));
    const exBox = h("div", { class: "ex-diffs" });
    let exSel = [];
    function majEx() { // un sélecteur de niveau par exercice, en conservant les choix déjà faits
      const old = exSel.map(s => +s.value);
      exSel = Array.from({ length: +nbEx.value }, (_, i) => selNiv("d-ex" + i, old[i] || 2));
      exBox.innerHTML = ""; exSel.forEach((s, i) => exBox.append(h("div", {}, h("label", { for: "d-ex" + i }, "Exercice " + (i + 1)), s)));
    }
    nbEx.addEventListener("change", majEx); majEx();
    const tous = h("select", { id: "d-tous", onchange: e => { if (e.target.value) { diffI.value = e.target.value; exSel.forEach(s => { s.value = e.target.value; }); } } },
      h("option", { value: "" }, "Personnalisée (réglages ci-dessous)"), [1, 2, 3].map(v => h("option", { value: v }, NIV[v] + " partout")));
    const f = (id, ph) => h("input", { type: "text", id, placeholder: ph });
    const titre = f("d-tit", "Devoir surveillé n° 1 — Semestre 1"), etab = f("d-etab", "Nom de l’établissement"), classe = f("d-cl", "2BAC SPC-F 1"), date = f("d-date", "jj/mm/aaaa");
    const err = h("p", { class: "err", role: "alert" });
    let ds = null;

    function lancer() {
      const concepts = new Set(boxes.map(b => b.querySelector("input")).filter(i => i.checked).map(i => i.value));
      err.textContent = "";
      if (!concepts.size) { err.textContent = "Cochez au moins un concept à évaluer."; return; }
      ds = compose({ niveau: niveau.value, concepts, duree: +duree.value, diffI: +diffI.value, diffs: exSel.map(s => +s.value), titre: titre.value.trim(), etab: etab.value.trim(), classe: classe.value.trim(), date: date.value.trim() });
      apercu();
    }
    function apercu() {
      out.innerHTML = "";
      const all = ds.partI.concat(ds.partII.flatMap(x => x.qs));
      if (!all.length) { out.append(h("p", { class: "note ko" }, "La banque ne contient aucune question pour cette sélection.")); return; }
      const ptI = sum(ds.partI, q => ds.pts.get(q)), ptII = 20 - ptI, caps = {};
      all.forEach(q => { caps[q.cap] = (caps[q.cap] || 0) + ds.pts.get(q); });
      let n = 0;
      const li = q => h("li", {}, h("span", { class: "tag" }, S.capacites[q.cap].nom), " ", txt(q.ouvert || q.enonce), h("span", { class: "muted small" }, " — " + fr(ds.pts.get(q)) + " pt · " + q.duree + " min · difficulté " + q.diff + "/3"), void ++n);
      out.append(h("div", {},
        h("h2", {}, "Devoir composé"),
        ds.duree < ds.p.duree * 0.8 && h("p", { class: "note ko" }, "Banque insuffisante pour cette sélection : durée estimée de " + ds.duree + " min pour " + ds.p.duree + " min demandées. Cochez davantage de concepts ou réduisez la durée."),
        ds.manque > 0 && h("p", { class: "note ko" }, ds.manque + " exercice(s) demandé(s) n’ont pas pu être composés : la banque n’en contient pas assez pour ces concepts et cette durée."),
        h("div", { class: "stats" }, [["Durée estimée", ds.duree + " min"], ["Questions", all.length], ["Restitution", fr(ptI) + " pts (" + Math.round(ptI * 5) + " %)"], ["Raisonnement et communication", fr(ptII) + " pts (" + Math.round(ptII * 5) + " %)"]].map(s => h("div", { class: "stat" }, h("b", {}, s[1]), h("span", {}, s[0])))),
        h("div", { class: "btns" },
          h("button", { class: "btn", onclick: () => { S.journal && S.journal("Devoir surveillé téléchargé" + (ds.p.titre ? " : " + ds.p.titre : "")); download(buildPDF(renderSujet(ds), ds.p.titre || "Devoir surveille SVT"), "DS_SVT_sujet.pdf"); } }, "Télécharger le sujet (PDF)"),
          h("button", { class: "btn ghost", onclick: () => download(buildPDF(renderCorrige(ds), "Corrige et bareme"), "DS_SVT_corrige.pdf") }, "Télécharger le corrigé et le barème (PDF)"),
          h("button", { class: "btn ghost", onclick: lancer }, "Recomposer (autre tirage)")),
        h("div", { class: "card" }, h("h3", {}, "Tableau de spécification"), h("div", { class: "t-wrap" }, h("table", { class: "t" }, h("tr", {}, h("th", {}, "Capacité évaluée"), h("th", {}, "Points"), h("th", {}, "Part")),
          Object.keys(caps).map(c => h("tr", {}, h("th", {}, S.capacites[c].nom), h("td", {}, fr(caps[c])), h("td", {}, Math.round(caps[c] * 5) + " %")))))),
        ds.partI.length ? h("div", { class: "card" }, h("h3", {}, "Partie I — Restitution des connaissances (" + fr(ptI) + " pts)"), h("p", { class: "muted small" }, "Niveau demandé : " + NIV[ds.p.diffI]), h("ol", { class: "ds-list" }, ds.partI.map(li))) : null,
        ds.partII.map((x, i) => h("div", { class: "card" }, h("h3", {}, "Partie II — Exercice " + (i + 1) + " : " + x.ex.titre + " (" + fr(sum(x.qs, q => ds.pts.get(q))) + " pts)"),
          h("p", { class: "muted small" }, "Niveau demandé : " + NIV[x.voulu] + " · niveau obtenu : " + NIV[niveauDe(x.diff)] + " · " + x.ex.docs.length + " document(s) · palier « " + S.paliers[x.palier - 1].nom + " »"), h("ol", { class: "ds-list", start: n + 1 }, x.qs.map(li))))));
    }

    return h("div", {}, h("h1", {}, "Concevoir un devoir surveillé"),
      h("p", { class: "muted" }, "Les questions sont tirées de la banque commune des exercices du parcours élève. La composition respecte le cadre de référence : 25 % pour la restitution des connaissances, 75 % pour le raisonnement scientifique et la communication."),
      h("form", { class: "card form", onsubmit: e => { e.preventDefault(); lancer(); } },
        h("label", { for: "d-niv" }, "Niveau"), niveau,
        h("fieldset", {}, h("legend", {}, "Concepts à évaluer"), boxes,
          h("button", { type: "button", class: "link", onclick: () => { const on = boxes.some(b => !b.querySelector("input").checked); boxes.forEach(b => { b.querySelector("input").checked = on; }); } }, "Tout cocher / tout décocher")),
        h("div", { class: "two" }, h("div", {}, h("label", { for: "d-dur" }, "Durée"), duree), h("div", {}, h("label", { for: "d-tous" }, "Difficulté d’ensemble"), tous)),
        h("fieldset", {}, h("legend", {}, "Difficulté de chaque partie et de chaque exercice"),
          h("div", { class: "two" }, h("div", {}, h("label", { for: "d-dI" }, "Partie I — Restitution des connaissances"), diffI), h("div", {}, h("label", { for: "d-nb" }, "Partie II — nombre d’exercices"), nbEx)),
          exBox),
        h("div", { class: "two" }, h("div", {}, h("label", { for: "d-tit" }, "Titre du devoir (facultatif)"), titre), h("div", {}, h("label", { for: "d-etab" }, "Établissement (facultatif)"), etab)),
        h("div", { class: "two" }, h("div", {}, h("label", { for: "d-cl" }, "Classe (facultatif)"), classe), h("div", {}, h("label", { for: "d-date" }, "Date (facultatif)"), date)),
        err, h("button", { class: "btn" }, "Composer le devoir")),
      out);
  };
})();
