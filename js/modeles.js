// Modélisation interactive : devenir de l'énergie du glucose selon la voie métabolique.
(function () {
  const S = window.SVT, h = (...a) => S.h(...a);
  const E_GLU = 2860, E_ATP = 30.5;
  const fr = v => String(Math.round(v * 10) / 10).replace(".", ",");

  S.modelEl = function () {
    let o2 = true, cell = "levure", n = 1;
    const out = h("div", { class: "model-out" }), canvas = h("canvas", { width: 1120, height: 520, role: "img", "aria-label": "Répartition de l’énergie du glucose" });
    canvas.style.width = "100%"; canvas.style.maxWidth = "560px";

    function calc() {
      const atp = (o2 ? 38 : 2) * n, eAtp = atp * E_ATP, eTot = E_GLU * n;
      const residu = o2 ? 0 : (cell === "levure" ? 2720 : 2730) * n;
      return { atp, eAtp, eTot, residu, chaleur: eTot - eAtp - residu, rdt: 100 * eAtp / eTot,
        o2: o2 ? 6 * n : 0, co2: o2 ? 6 * n : cell === "levure" ? 2 * n : 0,
        produit: o2 ? 6 * n + " H₂O" : 2 * n + (cell === "levure" ? " éthanol" : " acide lactique"),
        voie: o2 ? "Respiration cellulaire" : cell === "levure" ? "Fermentation alcoolique" : "Fermentation lactique",
        lieu: o2 ? "Hyaloplasme puis mitochondrie" : "Hyaloplasme uniquement" };
    }
    function draw(r) {
      const c = canvas.getContext("2d"), W = 560, H = 260;
      c.setTransform(2, 0, 0, 2, 0, 0); c.fillStyle = "#fff"; c.fillRect(0, 0, W, H);
      const parts = [["Conservée dans l’ATP", r.eAtp, "#2e7d32"], ["Restée dans le résidu organique", r.residu, "#b26a00"], ["Dissipée en chaleur", r.chaleur, "#b03a2e"]];
      let x = 20; const bw = W - 40;
      c.font = "bold 13px Arial"; c.fillStyle = "#222"; c.textBaseline = "middle";
      c.fillText("Répartition de l’énergie de " + n + " mole(s) de glucose : " + fr(r.eTot) + " kJ", 20, 22);
      parts.forEach(p => { const w = bw * p[1] / r.eTot; c.fillStyle = p[2]; c.fillRect(x, 44, w, 60); x += w; });
      c.strokeStyle = "#222"; c.strokeRect(20, 44, bw, 60);
      c.font = "13px Arial";
      parts.forEach((p, i) => { const y = 136 + i * 34; c.fillStyle = p[2]; c.fillRect(20, y - 9, 18, 18); c.fillStyle = "#222"; c.fillText(p[0] + " : " + fr(p[1]) + " kJ (" + fr(100 * p[1] / r.eTot) + " %)", 48, y); });
    }
    function maj() {
      const r = calc();
      out.innerHTML = "";
      out.append(h("div", { class: "t-wrap" }, h("table", { class: "t" },
        [["Voie métabolique", r.voie], ["Localisation", r.lieu], ["O₂ consommé", r.o2 + " molécule(s)"], ["CO₂ rejeté", r.co2 + " molécule(s)"], ["Autre produit final", r.produit],
          ["ATP produits", r.atp + " ATP"], ["Rendement énergétique", fr(r.rdt) + " %"]].map(l => h("tr", {}, h("th", {}, l[0]), h("td", {}, l[1]))))));
      draw(r);
    }
    const radio = (name, val, label, on, fn) => h("label", { class: "opt inline" }, h("input", { type: "radio", name, value: val, checked: on, onchange: fn }), h("span", {}, label));
    const nb = h("output", {}, "1");
    const el = h("div", { class: "card model" },
      h("h3", {}, "Modèle : que devient l’énergie du glucose ?"),
      h("p", { class: "muted" }, "Un modèle simplifie la réalité pour la rendre calculable. Modifie les paramètres, prévois le résultat, puis vérifie."),
      h("div", { class: "model-ctl" },
        h("fieldset", {}, h("legend", {}, "Milieu"), radio("m-o2", 1, "Avec dioxygène", true, () => { o2 = true; maj(); }), radio("m-o2", 0, "Sans dioxygène", false, () => { o2 = false; maj(); })),
        h("fieldset", {}, h("legend", {}, "Cellule"), radio("m-c", "levure", "Levure", true, () => { cell = "levure"; maj(); }), radio("m-c", "muscle", "Cellule musculaire", false, () => { cell = "muscle"; maj(); })),
        h("fieldset", {}, h("legend", {}, "Glucose consommé"), h("input", { type: "range", min: 1, max: 20, value: 1, "aria-label": "Nombre de molécules de glucose", oninput: e => { n = +e.target.value; nb.textContent = n; maj(); } }), nb, " molécule(s)")),
      out, canvas,
      h("div", { class: "pb" }, h("b", {}, "À explorer : "), h("ol", {},
        h("li", {}, "Sans O₂, combien de molécules de glucose faut-il pour obtenir autant d’ATP qu’une seule molécule avec O₂ ?"),
        h("li", {}, "Le rendement change-t-il quand on augmente la quantité de glucose ? Pourquoi ?"),
        h("li", {}, "Où se trouve l’essentiel de l’énergie du glucose après une fermentation ?"))),
      h("p", { class: "muted small" }, "Limites du modèle : valeurs théoriques du programme (38 ATP ; 30,5 kJ par mole d’ATP ; 2860 kJ par mole de glucose). L’énergie du résidu organique est une valeur approchée."));
    maj();
    return el;
  };
})();
