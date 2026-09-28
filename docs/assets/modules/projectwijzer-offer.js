import { applies, esc, partsHtml } from './projectwijzer-core.js';
import { fmt, labelOf } from './projectwijzer-form.js';

const plain = (parts) => (parts ?? []).map((p) => p.v).join('');
const list = (items) => (items.length ? `<ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul>` : '');
const same = (a, b) => JSON.stringify(a ?? []) === JSON.stringify(b ?? []);
const routeOf = (z) => z.result.logical[0]?.route ?? null;
const AGAINST = ['uitsluiten', 'afraden', 'minder', 'controleren'];

export function snapshot(answers, project) {
  const zones = Object.fromEntries(project.zones.map((z) => [z.zone.id, z.answers]));
  return JSON.parse(JSON.stringify({ answers, routes: Object.fromEntries(project.zones.map((z) => [z.zone.id, routeOf(z)?.id ?? null])), zones, base: project.answers }));
}

export function changesHtml(model, before, answers, project, ui) {
  if (!before) return '';
  const changed = model.questions.filter((q) => !same(before.answers[q.id], answers[q.id]));
  if (!changed.length) return '';
  const ids = new Set(changed.map((q) => q.id));
  const label = (q, a) => (a?.length ? a.map((id) => labelOf(q, id)).join(', ') : ui.unknown);
  const rows = changed.map((q) => `<strong>${esc(q.title)}</strong>: ${esc(label(q, before.answers[q.id]))} → ${esc(label(q, answers[q.id]))}`);
  const byId = new Map(model.routes.map((r) => [r.id, r]));
  const sameZones = same(Object.keys(before.routes), project.zones.map((z) => z.zone.id));
  const moves = project.zones
    .filter((z) => sameZones && (before.routes[z.zone.id] ?? null) !== (routeOf(z)?.id ?? null))
    .map((z) => {
      const was = byId.get(before.routes[z.zone.id]);
      const now = routeOf(z);
      const hit = (r, effects, za, pa) => (r ? r.criteria.filter((c) => ids.has(c.question) && effects.includes(c.effect) && applies(c, za, pa)) : []);
      const reasons = (cs) => [...new Set(cs.map((c) => partsHtml(c.reason)))];
      const now1 = [...hit(was, AGAINST, z.answers, project.answers), ...hit(now, ['past'], z.answers, project.answers)];
      const za = before.zones?.[z.zone.id];
      const gone = za ? [...hit(was, ['past'], za, before.base), ...hit(now, AGAINST, za, before.base)].filter((c) => !applies(c, z.answers, project.answers)) : [];
      const head = fmt(z.zone.label ? ui.changedZone : ui.changedRoute, { deel: z.zone.label ?? '', before: was?.title ?? ui.none, after: now?.title ?? ui.none });
      return `<p>${esc(head)}</p>${list(reasons(now1))}${gone.length ? `<p class="pw-why">${esc(ui.changedGone)}</p>${list(reasons(gone))}` : ''}`;
    });
  return `<section class="pw-changes" aria-labelledby="pw-changes-t" tabindex="-1"><h2 id="pw-changes-t" class="pw-block-label">${esc(ui.changes)}</h2>${list(rows)}${moves.length ? moves.join('') : `<p>${esc(sameZones ? ui.changedNone : ui.changedSplit)}</p>`}</section>`;
}

export function offerData(model, answers, numbers, project) {
  const known = [];
  const open = [];
  for (const q of model.questions) {
    const a = answers[q.id] ?? [];
    if (a.length) known.push([q.title, a.map((id) => labelOf(q, id)).join(', ')]);
    else open.push(q.title);
    for (const n of q.numbers ?? []) {
      if (numbers[n.id]) known.push([n.label, numbers[n.id]]);
      else open.push(n.label);
    }
  }
  const routes = project.zones.map((z) => [z.zone.label, routeOf(z)?.title ?? null]);
  const seen = new Set();
  const checks = project.zones
    .flatMap((z) => z.result.checks.map((c) => (z.zone.label ? `${z.zone.label}: ${plain(c.reason)}` : plain(c.reason))))
    .filter((t) => !seen.has(t) && seen.add(t));
  return { known, routes, open, checks, deliver: (model.engineering ?? []).map(plain) };
}

export function offerText(d, ui) {
  const sec = (title, lines) => (lines.length ? [title, ...lines.map((l) => `- ${l}`), ''] : []);
  return [
    ui.offer, '',
    ...sec(ui.offerKnown, d.known.map(([k, v]) => `${k}: ${v}`)),
    ...sec(ui.offerRoutes, d.routes.map(([z, r]) => `${z ? `${z}: ` : ''}${r ?? ui.none}`)),
    ...sec(ui.offerOpen, d.open),
    ...sec(ui.offerChecks, d.checks),
    ...sec(ui.offerDeliver, d.deliver),
  ].join('\n').trim();
}

export function offerHtml(d, ui) {
  const sec = (title, items) => (items.length ? `<h3>${esc(title)}</h3>${list(items)}` : '');
  return `<details class="pw-offer" id="pw-offer"><summary>${esc(ui.offer)}</summary><p class="pw-offer-intro">${esc(ui.offerIntro)}</p>${sec(ui.offerKnown, d.known.map(([k, v]) => `<span class="pw-trait-q">${esc(k)}</span> ${esc(v)}`))}${sec(ui.offerRoutes, d.routes.map(([z, r]) => `${z ? `<span class="pw-trait-q">${esc(z)}</span> ` : ''}${esc(r ?? ui.none)}`))}${sec(ui.offerOpen, d.open.map(esc))}${sec(ui.offerChecks, d.checks.map(esc))}${sec(ui.offerDeliver, d.deliver.map(esc))}<p class="pw-offer-copy"><button type="button" class="pw-back" data-copy>${esc(ui.copy)}</button> <span class="pw-copy-status" role="status"></span></p></details>`;
}
