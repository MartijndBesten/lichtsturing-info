
export const MAX_ALTERNATIVES = 1;
export const MIN_ALTERNATIVE = 2;

export function mergeAnswers(...layers) {
  const out = {};
  for (const layer of layers) {
    if (!layer) continue;
    const entries = Array.isArray(layer) ? layer.map((a) => [a.question, a.options]) : Object.entries(layer);
    for (const [q, opts] of entries) if (opts?.length) out[q] = [...opts];
  }
  return out;
}

export const holds = (answers, cond) => (answers[cond.question] ?? []).some((o) => cond.options.includes(o));

export function applies(c, zone, project = zone) {
  const a = c.scope === 'project' ? project : zone;
  return holds(a, c) && (c.when ?? []).every((w) => holds(a, w)) && !(c.unless ?? []).some((u) => holds(a, u));
}

export const visible = (q, answers) => !(q.showWhen ?? []).length || q.showWhen.every((c) => holds(answers, c));

export function evaluateZone(model, answers, project = answers) {
  const rows = model.routes.map((route) => {
    const on = (effect) => route.criteria.filter((c) => c.effect === effect && applies(c, answers, project));
    const fits = on('past');
    const less = on('minder');
    return { route, fits, less, checks: on('controleren'), excluded: on('uitsluiten'), discouraged: on('afraden'), balance: fits.length - less.length };
  });
  const ranked = rows
    .filter((r) => !r.excluded.length && !r.discouraged.length && r.fits.length && r.balance > 0)
    .sort((a, b) => b.balance - a.balance || (a.route.order ?? 99) - (b.route.order ?? 99));
  const logical = ranked.slice(0, 1);
  const best = logical[0]?.balance;
  const named = new Set(logical.flatMap((r) => r.route.alternatives ?? []));
  const rank = (r) => (r.balance === best ? 0 : named.has(r.route.id) ? 1 : 2);
  const alternatives = ranked.slice(1).filter((r) => r.balance === best || r.balance >= MIN_ALTERNATIVE).sort((a, b) => rank(a) - rank(b) || b.balance - a.balance || (a.route.order ?? 99) - (b.route.order ?? 99)).slice(0, MAX_ALTERNATIVES);
  const seen = new Set();
  const checks = logical.flatMap((r) => [...r.checks, ...r.less]).filter((c) => {
    const key = JSON.stringify(c.reason);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return { logical, alternatives, checks, excluded: rows.filter((r) => r.excluded.length), discouraged: rows.filter((r) => r.discouraged.length) };
}

export function matchScenario(model, answers) {
  const hits = model.scenarios.filter((s) => s.match?.length && s.match.every((m) => holds(answers, m)));
  hits.sort((a, b) => b.match.length - a.match.length || (a.order ?? 99) - (b.order ?? 99));
  return hits[0] ?? null;
}

export function matchPatterns(model, answerSets) {
  return model.patterns.filter((p) => (p.triggers ?? []).some((tr) => answerSets.some((a) => holds(a, tr))));
}

export function evaluateProject(model, answers, scenario = matchScenario(model, answers)) {
  const base = mergeAnswers(scenario?.answers, answers);
  const zones = (scenario?.zones?.length ? scenario.zones : [{ id: 'project', label: null, text: null, answers: [] }]).map((zone) => {
    const za = mergeAnswers(base, zone.answers);
    return { zone, answers: za, result: evaluateZone(model, za, base) };
  });
  const patterns = matchPatterns(model, [base, ...zones.map((z) => z.answers)]);
  const routeSets = zones.map((z) => z.result.logical.map((r) => r.route.id).join('|'));
  const combination = zones.length > 1 && new Set(routeSets.filter(Boolean)).size > 1;
  return { scenario, answers: base, zones, patterns, combination };
}

export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

export function partsHtml(parts) {
  return (parts ?? []).map((p) => (p.t === 'link' && p.u ? `<a href="${esc(p.u)}">${esc(p.v)}</a>` : esc(p.v))).join('');
}
