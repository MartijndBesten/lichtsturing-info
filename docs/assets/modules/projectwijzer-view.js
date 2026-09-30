import { esc, mergeAnswers, partsHtml } from './projectwijzer-core.js';

const list = (items, cls = '') => (items.length ? `<ul${cls ? ` class="${cls}"` : ''}>${items.map((x) => `<li>${x}</li>`).join('')}</ul>` : '');
const routeLink = (r) => (r.url ? `<a href="${esc(r.url)}">${esc(r.title)}</a>` : esc(r.title));
const slug = (id) => String(id ?? '').split('.').pop();
const fmt = (s, vars) => String(s ?? '').replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? '');
const uniq = (arr) => [...new Set(arr)];
const MAX_REASONS = 3;

export function traitsHtml(model, answers, cls = 'pw-traits') {
  const chosen = Array.isArray(answers) ? mergeAnswers(answers) : answers ?? {};
  const rows = (model.questions ?? [])
    .filter((q) => chosen[q.id]?.length)
    .map((q) => `<li><span class="pw-trait-q">${esc(q.title)}</span> ${chosen[q.id].map((id) => esc(q.options.find((o) => o.id === id)?.label ?? id)).join(', ')}</li>`);
  return rows.length ? `<ul class="${cls}">${rows.join('')}</ul>` : '';
}

export function sceneOf(model, z) {
  const q = model.questions.find((x) => x.id === model.sceneQuestion) ?? model.questions.find((x) => x.options.some((o) => o.icon));
  const id = q ? (z.answers?.[q.id] ?? [])[0] : null;
  return q?.options.find((o) => o.id === id)?.icon ?? null;
}
export const sceneKeysOf = (model, project) => uniq(project.zones.map((z) => sceneOf(model, z)).filter(Boolean));

function routeGroups(project) {
  const groups = [];
  for (const z of project.zones) {
    const first = z.result.logical[0];
    if (!first) continue;
    let g = groups.find((x) => x.route.id === first.route.id);
    if (!g) groups.push((g = { route: first.route, zones: [], fits: [] }));
    g.zones.push(z);
    for (const c of first.fits) g.fits.push(partsHtml(c.reason));
  }
  return groups.map((g) => ({ ...g, reasons: uniq(g.fits) }));
}

function cardsHtml(model, project, S, multi) {
  return `<ol class="pw-cards">${project.zones.map((z) => {
    const first = z.result.logical[0];
    const scene = sceneOf(model, z);
    const visual = scene ? `<span class="pw-card-visual" aria-hidden="true"><svg class="scene pw-card-scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" focusable="false"><use href="#pw-s-${esc(scene)}"></use></svg></span>` : '';
    const zone = `<p class="pw-card-zone">${esc(multi ? z.zone.label : S.project)}</p>`;
    if (!first) return `<li class="pw-card pw-card--open">${visual}<div class="pw-card-body">${zone}<p class="pw-card-route">${esc(S.open)}</p><p class="pw-card-reason">${esc(S.none)}</p></div></li>`;
    const reason = first.fits[0] ? partsHtml(first.fits[0].reason) : '';
    return `<li class="pw-card" data-route="${esc(slug(first.route.id))}">${visual}<div class="pw-card-body">${zone}<p class="pw-card-route">${routeLink(first.route)}</p>${reason ? `<p class="pw-card-reason">${reason}</p>` : ''}<a class="pw-card-more" href="#pw-why-${esc(slug(first.route.id))}">${esc(S.more)}</a></div></li>`;
  }).join('')}</ol>`;
}

function whyHtml(groups, S, multi) {
  if (!groups.length) return '';
  return `<section class="pw-why-section" aria-labelledby="pw-why-t"><h2 id="pw-why-t">${esc(S.whyShort)}</h2>${groups.map((g) => `<div class="pw-why-route" id="pw-why-${esc(slug(g.route.id))}"><p class="pw-why-name">${routeLink(g.route)}${multi ? ` <span class="pw-why-for">${esc(fmt(S.forParts, { parts: g.zones.map((z) => z.zone.label).join(', ') }))}</span>` : ''}</p>${list(g.reasons.slice(0, MAX_REASONS), 'pw-why-list')}</div>`).join('')}</section>`;
}

const level = (id, title, body, { open = false, cls = '' } = {}) => (body ? `<details class="pw-level${cls ? ` ${cls}` : ''}" id="${id}"${open ? ' open' : ''}><summary>${esc(title)}</summary><div class="pw-level-body">${body}</div></details>` : '');
const zoneHead = (label) => (label ? `<h3 class="pw-level-h">${esc(label)}</h3>` : '');

function techHtml(model, project, groups, S, multi, open) {
  const needs = groups.filter((g) => g.route.needs?.length || g.route.products?.length).map((g) => `${zoneHead(g.route.title)}${list((g.route.needs ?? []).map(partsHtml))}${g.route.products?.length ? `<p class="pw-why">${esc(S.products)}</p><p class="pw-products">${g.route.products.map((p) => `<a class="pw-chip" href="${esc(p.u)}">${esc(p.v)}</a>`).join(' ')}</p>` : ''}`).join('');
  const build = groups.filter((g) => g.route.summary || g.route.tech || g.route.family).map((g) => `${zoneHead(g.route.title)}${g.route.summary ? `<p class="pw-route-summary">${partsHtml(g.route.summary)}</p>` : ''}${g.route.family ? `<p class="pw-tech"><a href="${esc(g.route.family.u)}">${esc(g.route.family.v)}</a></p>` : ''}${g.route.tech ? `<p class="pw-tech"><a href="${esc(g.route.tech)}">${esc(S.tech)}</a></p>` : ''}`).join('');
  const alts = [];
  for (const z of project.zones) {
    for (const r of z.result.alternatives) {
      let a = alts.find((x) => x.route.id === r.route.id);
      if (!a) alts.push((a = { route: r.route, zones: [] }));
      a.zones.push(z.zone.label);
    }
  }
  const alternative = alts.map((a) => `<div class="pw-route"><p class="pw-route-name">${routeLink(a.route)}${multi ? ` <span class="pw-why-for">${esc(fmt(S.forParts, { parts: a.zones.filter(Boolean).join(', ') }))}</span>` : ''}</p><p class="pw-why">${esc(S.when)}</p>${list((a.route.fitsWhen ?? []).map(partsHtml))}</div>`).join('');
  const checks = project.zones.filter((z) => z.result.checks.length).map((z) => `${multi ? zoneHead(z.zone.label) : ''}${list(z.result.checks.map((c) => partsHtml(c.reason)))}`).join('');
  const patterns = project.patterns.length ? list(project.patterns.map((p) => `${p.url ? `<a href="${esc(p.url)}">${esc(p.title)}</a>` : esc(p.title)}${p.summary ? ` — ${partsHtml(p.summary)}` : ''}`)) : '';
  const always = model.checks?.length ? list(model.checks.map(partsHtml)) : '';
  const body = `${level('pw-needs', S.needs, needs, { open })}${level('pw-build', S.build, build, { open })}${level('pw-alternative', S.alternative, alternative, { open, cls: 'pw-level--alt' })}${level('pw-check', S.check, checks, { open, cls: 'pw-level--check' })}${level('pw-patterns', S.patterns, patterns, { open })}${level('pw-always', S.always, always, { open, cls: 'pw-level--check' })}`;
  return body ? `<section class="pw-tech-section" aria-labelledby="pw-tech-t"><h2 id="pw-tech-t">${esc(S.techniek)}</h2>${body}</section>` : '';
}

function zonesHtml(model, project, S, open, toggles) {
  if (project.zones.length < 2) return '';
  const zones = project.zones.map((z) => `<section class="pw-zone" id="zone-${esc(z.zone.id)}" aria-labelledby="zone-${esc(z.zone.id)}-t"><h3 class="pw-zone-title" id="zone-${esc(z.zone.id)}-t">${esc(z.zone.label)}</h3>${z.zone.text ? `<p class="pw-zone-text">${partsHtml(z.zone.text)}</p>` : ''}${z.zone.answers?.length ? `<details class="pw-zone-traits"><summary>${esc(S.traits)}</summary>${traitsHtml(model, z.zone.answers)}</details>` : ''}</section>`).join('');
  return level('pw-zones', S.zonesEdit, `${toggles}<div class="pw-zones">${zones}</div>`, { open, cls: 'pw-level--zones' });
}

export function renderResult(model, project, S, { openDetails = false, toggles = '', engineering = true, title = false } = {}) {
  const multi = project.zones.length > 1;
  const groups = routeGroups(project);
  const combination = project.combination ? `<p class="pw-combination">${esc(S.combinationText)}</p>` : '';
  const eng = engineering && model.engineering?.length ? level('pw-engineering', S.engineering, list(model.engineering.map(partsHtml)), { open: openDetails, cls: 'pw-level--eng' }) : '';
  const links = (model.links ?? []).length ? `<nav class="pw-links" aria-label="${esc(S.next)}"><p class="pw-links-label">${esc(S.next)}</p>${list(model.links.map((l) => `<a href="${esc(l.u)}">${esc(l.v)}</a>`))}</nav>` : '';
  return `<div class="pw-result${multi ? ' pw-result--zones' : ''}">${title ? `<h2 class="pw-result-title">${esc(S.hero)}</h2>` : ''}${cardsHtml(model, project, S, multi)}${combination}<p class="pw-disclaimer">${esc(S.disclaimer)}</p>${whyHtml(groups, S, multi)}${techHtml(model, project, groups, S, multi, openDetails)}${zonesHtml(model, project, S, openDetails, toggles)}${eng}${links}</div>`;
}
