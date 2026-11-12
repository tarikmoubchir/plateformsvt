// Rendu des documents (graphique, schéma, tableau, texte) : les mêmes fonctions de dessin servent à l'écran et au PDF.
(function () {
  const S = window.SVT;
  const STYLES = [{ color: "#1f4e79", dash: [], mark: "o" }, { color: "#b03a2e", dash: [9, 5], mark: "s" }, { color: "#2e7d32", dash: [3, 4], mark: "t" }];

  function niceStep(max) {
    for (const s of [0.1, 0.2, 0.5, 1, 2, 5, 10, 20, 25, 50, 100, 200, 500, 1000]) if (max / s <= 10) return s;
    return max / 10;
  }
  const fr = v => String(Math.round(v * 100) / 100).replace(".", ",");

  // Dessine un graphique dans la boîte (x, y, w, h). k = facteur d'échelle des traits et du texte.
  S.drawGraph = function (ctx, d, x, y, w, h, k) {
    k = k || 1;
    const font = (sz, b) => (b ? "bold " : "") + Math.round(sz * k) + "px Arial, sans-serif";
    const L = x + 62 * k, R = x + w - 18 * k, T = y + 58 * k, B = y + h - 46 * k;
    const X = v => L + (v / d.xmax) * (R - L), Y = v => B - (v / d.ymax) * (B - T);
    ctx.save();
    ctx.lineWidth = 1 * k; ctx.textBaseline = "middle";
    const sx = niceStep(d.xmax), sy = niceStep(d.ymax);
    // quadrillage (secondaire puis principal)
    ctx.strokeStyle = "#e6e6e6";
    for (let v = 0; v <= d.xmax + 1e-9; v += sx / 2) { ctx.beginPath(); ctx.moveTo(X(v), T); ctx.lineTo(X(v), B); ctx.stroke(); }
    for (let v = 0; v <= d.ymax + 1e-9; v += sy / 2) { ctx.beginPath(); ctx.moveTo(L, Y(v)); ctx.lineTo(R, Y(v)); ctx.stroke(); }
    ctx.strokeStyle = "#bdbdbd"; ctx.fillStyle = "#222"; ctx.font = font(12);
    ctx.textAlign = "center";
    for (let v = 0; v <= d.xmax + 1e-9; v += sx) { ctx.beginPath(); ctx.moveTo(X(v), T); ctx.lineTo(X(v), B); ctx.stroke(); ctx.fillText(fr(v), X(v), B + 12 * k); }
    ctx.textAlign = "right";
    for (let v = 0; v <= d.ymax + 1e-9; v += sy) { ctx.beginPath(); ctx.moveTo(L, Y(v)); ctx.lineTo(R, Y(v)); ctx.stroke(); ctx.fillText(fr(v), L - 7 * k, Y(v)); }
    // axes
    ctx.strokeStyle = "#222"; ctx.lineWidth = 1.6 * k;
    ctx.beginPath(); ctx.moveTo(L, T - 6 * k); ctx.lineTo(L, B); ctx.lineTo(R + 6 * k, B); ctx.stroke();
    ctx.font = font(12.5, true); ctx.textAlign = "center";
    ctx.fillText(d.xlab, (L + R) / 2, B + 32 * k);
    ctx.save(); ctx.translate(x + 14 * k, (T + B) / 2); ctx.rotate(-Math.PI / 2); ctx.fillText(d.ylab, 0, 0); ctx.restore();
    // événements signalés
    (d.marques || []).forEach(m => {
      ctx.strokeStyle = "#555"; ctx.fillStyle = "#333"; ctx.lineWidth = 1.2 * k; ctx.setLineDash([4 * k, 3 * k]);
      ctx.beginPath(); ctx.moveTo(X(m.x), T - 8 * k); ctx.lineTo(X(m.x), B); ctx.stroke(); ctx.setLineDash([]);
      ctx.beginPath(); ctx.moveTo(X(m.x), T + 2 * k); ctx.lineTo(X(m.x) - 4 * k, T - 7 * k); ctx.lineTo(X(m.x) + 4 * k, T - 7 * k); ctx.fill();
      ctx.font = font(11.5, true); ctx.textAlign = "center"; ctx.fillText(m.label, Math.max(L + 40 * k, Math.min(R - 40 * k, X(m.x))), T - 17 * k);
    });
    // courbes
    d.series.forEach((s, i) => {
      const st = STYLES[i % STYLES.length];
      ctx.strokeStyle = st.color; ctx.fillStyle = st.color; ctx.lineWidth = 2.2 * k; ctx.setLineDash(st.dash.map(v => v * k));
      ctx.beginPath(); s.pts.forEach((p, j) => j ? ctx.lineTo(X(p[0]), Y(p[1])) : ctx.moveTo(X(p[0]), Y(p[1]))); ctx.stroke(); ctx.setLineDash([]);
      s.pts.forEach(p => mark(ctx, st.mark, X(p[0]), Y(p[1]), 3.6 * k));
    });
    // légende
    if (d.series.length > 1) {
      let lx = L + 4 * k; const ly = y + 12 * k;
      ctx.font = font(12); ctx.textAlign = "left";
      d.series.forEach((s, i) => {
        const st = STYLES[i % STYLES.length];
        ctx.strokeStyle = st.color; ctx.fillStyle = st.color; ctx.lineWidth = 2.2 * k; ctx.setLineDash(st.dash.map(v => v * k));
        ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(lx + 34 * k, ly); ctx.stroke(); ctx.setLineDash([]);
        mark(ctx, st.mark, lx + 17 * k, ly, 3.6 * k);
        ctx.fillStyle = "#222"; ctx.fillText(s.nom, lx + 40 * k, ly);
        lx += 54 * k + ctx.measureText(s.nom).width;
      });
    }
    ctx.restore();
  };
  function mark(ctx, m, cx, cy, r) {
    ctx.beginPath();
    if (m === "s") ctx.rect(cx - r, cy - r, 2 * r, 2 * r);
    else if (m === "t") { ctx.moveTo(cx, cy - r * 1.3); ctx.lineTo(cx + r * 1.2, cy + r); ctx.lineTo(cx - r * 1.2, cy + r); }
    else ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.fill();
  }

  // Schéma numéroté de la mitochondrie : 1 membrane externe, 2 espace intermembranaire, 3 membrane interne, 4 crête, 5 matrice.
  S.drawSchema = function (ctx, d, x, y, w, h, k) {
    k = k || 1;
    if (d.nom !== "mitochondrie") return;
    const cx = x + w * 0.42, cy = y + h * 0.5, rx = w * 0.36, ry = h * 0.36, gap = 13 * k;
    const irx = rx - gap, iry = ry - gap;
    ctx.save(); ctx.lineWidth = 2 * k; ctx.strokeStyle = "#222";
    ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    ctx.fillStyle = "#e9f2e4"; ctx.beginPath(); ctx.ellipse(cx, cy, irx, iry, 0, 0, 2 * Math.PI); ctx.fill(); ctx.stroke();
    // crêtes : replis de la membrane interne vers la matrice
    const cw = 13 * k, xs = [-0.62, -0.3, 0.02, 0.34, 0.62];
    xs.forEach((f, i) => {
      const px = cx + f * irx, edge = iry * Math.sqrt(1 - f * f), top = i % 2 === 0, len = edge * 1.25;
      const y0 = top ? cy - edge : cy + edge, y1 = top ? y0 + len : y0 - len;
      ctx.fillStyle = "#fff";
      ctx.beginPath(); ctx.moveTo(px - cw / 2, y0 + (top ? -3 : 3) * k); ctx.lineTo(px - cw / 2, y1); ctx.arc(px, y1, cw / 2, Math.PI, 0, top); ctx.lineTo(px + cw / 2, y0 + (top ? -3 : 3) * k); ctx.closePath(); ctx.fill();
      ctx.beginPath(); ctx.moveTo(px - cw / 2, y0 + (top ? 2 : -2) * k); ctx.lineTo(px - cw / 2, y1); ctx.arc(px, y1, cw / 2, Math.PI, 0, top); ctx.lineTo(px + cw / 2, y0 + (top ? 2 : -2) * k); ctx.stroke();
    });
    // traits de légende numérotés
    const lx = x + w * 0.86, a = -0.55;
    const targets = [
      [cx + rx * Math.cos(a), cy + ry * Math.sin(a)],
      [cx + (rx - gap / 2) * Math.cos(-0.25), cy + (ry - gap / 2) * Math.sin(-0.25)],
      [cx + irx * Math.cos(0.05), cy + iry * Math.sin(0.05)],
      [cx + 0.62 * irx + cw / 2, cy - iry * 0.1],
      [cx + 0.18 * irx, cy + iry * 0.62]
    ];
    ctx.lineWidth = 1.2 * k; ctx.fillStyle = "#222"; ctx.font = "bold " + Math.round(15 * k) + "px Arial, sans-serif"; ctx.textBaseline = "middle"; ctx.textAlign = "left";
    targets.forEach((t, i) => {
      const ly = y + h * (0.16 + i * 0.17);
      ctx.beginPath(); ctx.arc(t[0], t[1], 2.4 * k, 0, 2 * Math.PI); ctx.fill();
      ctx.beginPath(); ctx.moveTo(t[0], t[1]); ctx.lineTo(lx - 30 * k, ly); ctx.lineTo(lx - 6 * k, ly); ctx.stroke();
      ctx.fillText(String(i + 1), lx, ly);
    });
    ctx.restore();
  };

  S.docSize = d => d.type === "graph" ? [640, 380] : [560, 300];

  // Élément HTML d'un document, numéroté.
  S.docEl = function (d, n) {
    const fig = document.createElement("figure"); fig.className = "doc";
    const cap = document.createElement("figcaption"); cap.innerHTML = "<b>Document " + n + "</b> — " + d.titre; fig.appendChild(cap);
    if (d.type === "table") {
      const t = document.createElement("table"); t.className = "t";
      t.innerHTML = "<tr>" + d.cols.map(c => "<th>" + c + "</th>").join("") + "</tr>" + d.rows.map(r => "<tr>" + r.map((c, i) => i ? "<td>" + c + "</td>" : "<th>" + c + "</th>").join("") + "</tr>").join("");
      const wrap = document.createElement("div"); wrap.className = "t-wrap"; wrap.appendChild(t); fig.appendChild(wrap);
    } else if (d.type === "texte") {
      const p = document.createElement("blockquote"); p.textContent = d.texte; fig.appendChild(p);
    } else {
      const [w, h] = S.docSize(d), c = document.createElement("canvas"), r = 2;
      c.width = w * r; c.height = h * r; c.style.maxWidth = w + "px"; c.style.width = "100%";
      const ctx = c.getContext("2d"); ctx.scale(r, r); ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, w, h);
      (d.type === "graph" ? S.drawGraph : S.drawSchema)(ctx, d, 0, 0, w, h, 1);
      c.setAttribute("role", "img"); c.setAttribute("aria-label", d.titre);
      fig.appendChild(c);
    }
    return fig;
  };
})();
