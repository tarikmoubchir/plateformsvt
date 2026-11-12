// Raccourcis d'écriture pour les leçons du collège (utilisés à partir de 3AC) : même structure de données que college.js.
// qcm et trous : la bonne réponse est toujours écrite en premier (l'affichage mélange les propositions).
(function () {
  const S = window.SVT;
  const base = (cap, type, enonce, retour, extra) => Object.assign({ cap, pts: 1, type, enonce, retour }, extra);
  S.mk = {
    qcm: (cap, enonce, options, retour) => base(cap, "qcm", enonce, retour, { options, rep: 0 }),
    vf: (items, retour, cap) => base(cap || "K", "vf", "Vrai ou faux ?", retour, { items: items.map(x => ({ t: x[0], v: x[1] })) }),
    assoc: (cap, enonce, gauche, droite, rep, retour) => base(cap, "assoc", enonce, retour, { gauche, droite, rep }),
    ordre: (cap, enonce, items, retour) => base(cap, "ordre", enonce, retour, { items }),
    num: (cap, enonce, rep, unite, retour, tol) => base(cap, "num", enonce, retour, { rep, unite, tol: tol || 0 }),
    trous: (cap, enonce, texte, choix, retour) => base(cap, "trous", enonce, retour, { texte, choix, rep: choix.map(() => 0) }),
    table: (titre, cols, rows) => ({ type: "table", titre, cols, rows }),
    graph: (titre, xlab, ylab, xmax, ymax, series, marques) => ({ type: "graph", titre, xlab, ylab, xmax, ymax, series: series.map(s => ({ nom: s[0], pts: s[1] })), marques: marques || [] }),
    // pos = [thème, chapitre, séquence] dans le programme officiel ; les identifiants des questions sont attribués automatiquement.
    lecon: (niveau, n, pos, o) => {
      const id = niveau + "-L" + n, tag = (arr, k) => arr.map((q, i) => Object.assign(q, { id: id + "-" + k + (i + 1) }));
      const exo = (e, k) => [{ titre: e.titre, contexte: e.ctx, docs: e.docs || [], questions: tag(e.q, k) }];
      (S.lecons[niveau] = S.lecons[niveau] || []).push({
        id, u: pos[0], c: pos[1], s: pos[2], titre: "Leçon " + n + " — " + o.titre, objectif: o.objectif, reussite: o.reussite,
        prerequis: { html: o.pre[0], quiz: tag(o.pre[1], "a") }, modelage: o.mod.map(m => ({ titre: m[0], html: m[1] })),
        guidee: exo(o.gui, "g"), autonome: exo(o.aut, "t"), cloture: o.clo
      });
    }
  };
})();
