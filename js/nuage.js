// Accès à la base Supabase (comptes, progression, journal) par son API, sans bibliothèque externe.
// Chaque compte du site est un utilisateur Supabase d'e-mail technique <identifiant>@moubchirsvt.courses.
(function () {
  const S = window.SVT, C = S.config || {};
  if (!C.url || !C.cle) return; // pas de configuration : le site garde les comptes dans le navigateur
  const KEY = "moubchir_session", DOM = "@moubchirsvt.courses";
  let session = null;
  try { session = JSON.parse(localStorage.getItem(KEY)); } catch (e) { /* stockage indisponible */ }
  const garder = s => { session = s; try { if (s) localStorage.setItem(KEY, JSON.stringify(s)); else localStorage.removeItem(KEY); } catch (e) { /* idem */ } };

  async function brut(path, o) {
    o = o || {};
    const hd = { apikey: C.cle, "Content-Type": "application/json" };
    if (o.jeton) hd.Authorization = "Bearer " + o.jeton;
    if (o.prefer) hd.Prefer = o.prefer;
    const r = await fetch(C.url + path, { method: o.method || "GET", headers: hd, body: o.body === undefined ? undefined : JSON.stringify(o.body) });
    const t = await r.text();
    let d = null; try { d = t ? JSON.parse(t) : null; } catch (e) { d = t; }
    if (!r.ok) {
      const e = new Error((d && (d.msg || d.message || d.error_description || d.error)) || "Erreur " + r.status);
      e.status = r.status; e.code = d && (d.code || d.error_code); throw e;
    }
    return d;
  }
  // Jeton de session, renouvelé une minute avant son expiration.
  async function jeton() {
    if (!session) return null;
    if (session.expires_at && session.expires_at * 1000 - Date.now() < 60000) {
      try { garder(await brut("/auth/v1/token?grant_type=refresh_token", { method: "POST", body: { refresh_token: session.refresh_token } })); }
      catch (e) { if (e.status >= 400 && e.status < 500) garder(null); else throw e; }
    }
    return session && session.access_token;
  }
  const api = async (path, o) => brut(path, Object.assign({}, o, { jeton: await jeton() }));

  S.api = {
    login: () => session && session.user && session.user.email ? session.user.email.split("@")[0] : null,
    async pret() { await jeton(); return !!session; },
    async connecter(login, mdp) { garder(await brut("/auth/v1/token?grant_type=password", { method: "POST", body: { email: login + DOM, password: mdp } })); },
    async inscrire(login, mdp) {
      const s = await brut("/auth/v1/signup", { method: "POST", body: { email: login + DOM, password: mdp } });
      if (!s || !s.access_token) throw new Error("Le compte n’a pas pu être activé (confirmation par e-mail activée dans Supabase ?)");
      garder(s); return s;
    },
    changerMdp: mdp => api("/auth/v1/user", { method: "PUT", body: { password: mdp } }),
    async deconnecter() { const j = session && session.access_token; garder(null); if (j) try { await brut("/auth/v1/logout", { method: "POST", jeton: j }); } catch (e) { /* déjà expirée */ } },
    rpc: (f, args) => api("/rest/v1/rpc/" + f, { method: "POST", body: args || {} }),
    lire: q => api("/rest/v1/" + q),
    ajouter: (table, rows) => api("/rest/v1/" + table, { method: "POST", body: rows, prefer: "return=minimal" }),
    modifier: (table, id, champs) => api("/rest/v1/" + table + "?id=eq." + encodeURIComponent(id), { method: "PATCH", body: champs, prefer: "return=minimal" })
  };
})();
