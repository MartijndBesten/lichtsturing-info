
const STOPWORDS = new Set([
  'hoe', 'ik', 'je', 'jij', 'u', 'we', 'de', 'het', 'een', 'wat', 'waar', 'wanneer', 'welk', 'welke', 'is', 'zijn', 'bij',
  'voor', 'van', 'met', 'doe', 'mijn', 'er', 'wordt', 'worden', 'kan', 'kun', 'moet', 'te', 'om', 'dat', 'die', 'dit',
  'of', 'en', 'als', 'wil', 'mag', 'naar', 'zo', 'nou',
]);
const PARTICLES = new Set(['aan', 'uit', 'in', 'op', 'af', 'mee', 'terug', 'door']);

export const norm = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const words = (q) => norm(q).split(/[^a-z0-9]+/).filter(Boolean);
const variants = (w) => (w.length >= 5 ? [w, w.replace(/(en|t|e|s)$/, '')] : [w]);

export function parseQuery(q) {
  const all = words(q);
  const content = all.filter((w) => !STOPWORDS.has(w) && !PARTICLES.has(w));
  const particles = all.filter((w) => PARTICLES.has(w));
  const required = content.length ? content : all.filter((w) => !STOPWORDS.has(w));
  const optional = [...particles, ...particles.flatMap((p) => content.filter((w) => w.length >= 3).map((w) => p + w))];
  return { required, optional, phrase: all.join(' '), core: required.join(' ') };
}

export function prepare(entries) {
  return entries.map((e) => ({
    ...e,
    _t: norm(e.t),
    _s: norm(e.s),
    _k: norm(e.k),
    _x: norm(e.x),
    _kw: String(e.k || '').split(' · ').filter(Boolean),
  }));
}

const whole = (field, w) => new RegExp(`(^|[^a-z0-9])${w}([^a-z0-9]|$)`).test(field);
const hit = (field, w) => (w.length <= 2 ? whole(field, w) : variants(w).some((v) => field.includes(v)));

function score(e, q) {
  let total = 0;
  let matched = 0;
  for (const w of q.required) {
    const s = (hit(e._t, w) ? 5 : 0) || (hit(e._k, w) ? 3 : 0) || (hit(e._s, w) ? 2 : 0) || (hit(e._x, w) ? 1 : 0);
    if (s) matched += 1;
    total += s;
  }
  if (!q.required.length || matched < Math.max(1, Math.ceil(q.required.length * 0.6))) return 0;
  for (const w of q.optional) if (hit(e._t, w) || hit(e._k, w)) total += 2;
  if (q.phrase && (e._t.includes(q.phrase) || (e.o && e._k.includes(q.phrase)))) total += 15;
  else if (q.phrase && e._k.includes(q.phrase)) total += 10;
  else if (q.core.includes(' ') && (e._t.includes(q.core) || e._k.includes(q.core))) total += 8;
  if (e._t === q.phrase) total += 10;
  return total;
}

function via(e, q) {
  if (q.required.every((w) => hit(e._t, w))) return null;
  let best = null;
  let bestCount = 0;
  for (const k of e._kw) {
    const nk = norm(k);
    const count = q.required.filter((w) => hit(nk, w)).length + (q.phrase && nk.includes(q.phrase) ? 10 : 0);
    if (count > bestCount) {
      best = k;
      bestCount = count;
    }
  }
  return best && norm(best) !== e._t ? best : null;
}

export function search(prepared, query, { limit = 12 } = {}) {
  const q = parseQuery(query);
  if (!q.required.length) return [];
  return prepared
    .map((e) => ({ entry: e, score: score(e, q) }))
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => ({ ...r, via: via(r.entry, q) }));
}
