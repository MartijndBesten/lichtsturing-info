import { esc, mergeAnswers, partsHtml } from './projectwijzer-core.js';

const list = (items, cls = '') => (items.length ? `<ul${cls ? ` class="${cls}"` : ''}>${items.map((x) => `<li>${x}</li>`).join('')}</ul>` : '');
const routeLink = (r) => (r.url ? `<a href="${esc(r.url)}">${esc(r.title)}</a>` : esc(r.title));

export function traitsHtml(model, answers, cls = 'pw-traits') {
  const chosen = Array.isArray(answers) ? mergeAnswers(answers) : answers ?? {};
  const rows = (model.questions ?? [])
    .filter((q) => chosen[q.id]?.length)
    .map((q) => `<li><span class="pw-trait-q">${esc(q.title)}</span> ${chosen[q.id].map((id) => esc(q.options.find((o) => o.id === id)?.label ?? id)).join(', ')}</li>`);
  return rows.length ? `<ul class="${cls}">${rows.join('')}</ul>` : '';
}

const routeExtra = (r, S) =>
  `${r.needs?.length ? `<p class="pw-why">${esc(S.needs)}</p>${list(r.needs.map(partsHtml))}` : ''}${r.products?.length ? `<p class="pw-why">${esc(S.products)}</p><p class="pw-products">${r.products.map((p) => `<a class="pw-chip" href="${esc(p.u)}">${esc(p.v)}</a>`).join(' ')}</p>` : ''}${r.family ? `<p class="pw-tech"><a href="${esc(r.family.u)}">${esc(r.family.v)}</a></p>` : ''}${r.tech ? `<p class="pw-tech"><a href="${esc(r.tech)}">${esc(S.tech)}</a></p>` : ''}`;

function zoneHtml(model, z, S, open, multi) {
  const { result } = z;
  const head = multi
    ? `<h3 class="pw-zone-title" id="zone-${esc(z.zone.id)}-t">${esc(z.zone.label)}</h3>${z.zone.text ? `<p class="pw-zone-text">${partsHtml(z.zone.text)}</p>` : ''}${z.zone.answers?.length ? `<details class="pw-zone-traits"><summary>${esc(S.traits)}</summary>${traitsHtml(model, z.zone.answers)}</details>` : ''}`
    : '';
  const first = result.logical[0];
  const logical = first
    ? `<div class="pw-block pw-block--logisch"><p class="pw-block-label">${esc(S.logical)}</p><div class="pw-route"><p class="pw-route-name">${routeLink(first.route)}</p>${first.route.summary ? `<p class="pw-route-summary">${partsHtml(first.route.summary)}</p>` : ''}<p class="pw-why">${esc(S.why)}</p>${list(first.fits.map((c) => partsHtml(c.reason)))}${routeExtra(first.route, S)}</div></div>`
    : `<div class="pw-block pw-block--geen"><p class="pw-block-label">${esc(S.logical)}</p><p>${esc(S.none)}</p></div>`;
  const alternatives = result.alternatives.length
    ? `<details class="pw-block pw-block--alternatief"${open ? ' open' : ''}><summary class="pw-block-label">${esc(S.alternative)}<span class="pw-summary-routes">${result.alternatives.map((r) => esc(r.route.title)).join(', ')}</span></summary>${result.alternatives.map((r) => `<div class="pw-route"><p class="pw-route-name">${routeLink(r.route)}</p><p class="pw-why">${esc(S.when)}</p>${list((r.route.fitsWhen ?? []).map(partsHtml))}</div>`).join('')}</details>`
    : '';
  const checks = result.checks.length
    ? `<details class="pw-block pw-block--controleren"${open ? ' open' : ''}><summary class="pw-block-label">${esc(S.check)}</summary>${list(result.checks.map((c) => partsHtml(c.reason)))}</details>`
    : '';
  return `<section class="pw-zone" id="zone-${esc(z.zone.id)}"${multi ? ` aria-labelledby="zone-${esc(z.zone.id)}-t"` : ''}>${head}${logical}${alternatives}${checks}</section>`;
}

export function renderResult(model, project, S, { openDetails = false } = {}) {
  const multi = project.zones.length > 1;
  const routeName = (z) => (z.result.logical.length ? `<span class="pw-chip">${esc(z.result.logical[0].route.title)}</span>` : `<span class="pw-chip pw-chip--open">${esc(S.open)}</span>`);
  const plan = multi
    ? `<section class="pw-plan" aria-labelledby="pw-plan-title"><h2 id="pw-plan-title">${esc(S.plan)}</h2><p class="pw-plan-note">${esc(S.planNote)}</p><ol class="pw-plan-zones">${project.zones.map((z) => `<li class="pw-plan-zone"><a class="pw-plan-link" href="#zone-${esc(z.zone.id)}"><span class="pw-plan-name">${esc(z.zone.label)}</span><span class="pw-plan-route">${routeName(z)}</span></a></li>`).join('')}</ol></section>`
    : `<h2 class="pw-single-title">${esc(S.result)}</h2>`;
  const zones = `<div class="pw-zones">${project.zones.map((z) => zoneHtml(model, z, S, openDetails, multi)).join('')}</div>`;
  const combination = project.combination
    ? `<section class="pw-block pw-block--combinatie" aria-labelledby="pw-comb-title"><h2 id="pw-comb-title" class="pw-block-label">${esc(S.combination)}</h2><p>${esc(S.combinationText)}</p>${list(project.zones.filter((z) => z.result.logical.length).map((z) => `<strong>${esc(z.zone.label)}</strong> — ${routeLink(z.result.logical[0].route)}`))}</section>`
    : '';
  const patterns = project.patterns.length
    ? `<section class="pw-patterns" aria-labelledby="pw-pat-title"><h2 id="pw-pat-title">${esc(S.patterns)}</h2>${list(project.patterns.map((p) => `${p.url ? `<a href="${esc(p.url)}">${esc(p.title)}</a>` : esc(p.title)}${p.summary ? ` — ${partsHtml(p.summary)}` : ''}`))}</section>`
    : '';
  const general = model.checks?.length
    ? `<details class="pw-block pw-block--controleren pw-general"${openDetails ? ' open' : ''}><summary class="pw-block-label">${esc(S.always)}</summary>${list(model.checks.map(partsHtml))}</details>`
    : '';
  const engineering = model.engineering?.length
    ? `<details class="pw-engineering"${openDetails ? ' open' : ''}><summary>${esc(S.engineering)}</summary>${list(model.engineering.map(partsHtml))}</details>`
    : '';
  const links = (model.links ?? []).length ? `<nav class="pw-links" aria-label="${esc(S.next)}">${list(model.links.map((l) => `<a href="${esc(l.u)}">${esc(l.v)}</a>`))}</nav>` : '';
  return `<div class="pw-result${multi ? ' pw-result--zones' : ''}"><p class="pw-disclaimer">${esc(S.disclaimer)}</p><div class="pw-overview">${plan}${zones}</div>${combination}${patterns}${general}${engineering}${links}</div>`;
}
