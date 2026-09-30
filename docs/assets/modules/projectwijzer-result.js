import { esc } from './projectwijzer-core.js';
import { fmt, labelOf } from './projectwijzer-form.js';
import { renderResult } from './projectwijzer-view.js';

const MAX_CHIPS = 6;

export function chipsHtml(model, answers, ui) {
  const chips = [];
  for (const q of model.questions) {
    const a = answers[q.id] ?? [];
    if (!a.length) continue;
    chips.push(a.length === 1 ? labelOf(q, a[0]) : `${q.title}: ${fmt(ui.chosen, { n: a.length })}`);
  }
  return chips.length ? `<ul class="pw-chips">${chips.slice(0, MAX_CHIPS).map((c) => `<li>${esc(c)}</li>`).join('')}</ul>` : '';
}

export function resultHtml({ model, result, scenario, answers, S, ui, parts }) {
  const main = result.zones.map((z) => z.result.logical[0]?.route).find(Boolean);
  const tech = main?.tech ?? main?.url;
  const match = scenario
    ? `<p class="pw-hero-sub">${esc(fmt(ui.scenario, { title: scenario.title }))}${scenario.url ? ` <a href="${esc(scenario.url)}">${esc(ui.scenarioLink)}</a>` : ''}</p>`
    : `<p class="pw-hero-sub">${esc(ui.noScenario)}</p>`;
  const hero = `<header class="pw-hero"><p class="pw-eyebrow">${esc(ui.result)}</p><h2 class="pw-hero-title" tabindex="-1">${esc(S.hero)}</h2>${match}</header>`;
  const profile = `<aside class="pw-profile" aria-labelledby="pw-profile-t"><p class="pw-profile-title" id="pw-profile-t">${esc(ui.profile)}</p>${chipsHtml(model, answers, ui)}<details class="pw-all-answers"><summary>${esc(ui.allAnswers)}</summary><p class="pw-profile-help">${esc(ui.profileHelp)}</p>${parts.rail}</details><div class="pw-nav pw-nav--result"><button type="button" class="pw-back" data-edit>${esc(ui.edit)}</button><button type="button" class="pw-back" data-restart>${esc(ui.restart)}</button></div></aside>`;
  const ctas = `<nav class="pw-ctas" aria-label="${esc(ui.nextSteps)}">${main?.url ? `<a class="pw-cta" href="${esc(main.url)}">${esc(ui.ctaSolution)}</a>` : ''}${tech ? `<a class="pw-cta pw-cta--secondary" href="${esc(tech)}">${esc(ui.ctaTech)}</a>` : ''}<p class="pw-ctas-more">${model.cta?.products ? `<a href="${esc(model.cta.products)}">${esc(ui.productsShort)}</a>` : ''}<a href="#pw-offer" data-offer>${esc(ui.offerShort)}</a></p></nav>`;
  const body = renderResult(model, result, S, { toggles: parts.toggles, engineering: false });
  const [top, techPart] = splitAt(body, '<section class="pw-tech-section"');
  const [mid, links] = splitAt(techPart, '<nav class="pw-links"');
  return `<div class="pw-dialog pw-dialog--result">${parts.changes}${hero}${profile}<div class="pw-main">${top}${ctas}${mid}${parts.offer}${links}</div></div>`;
}

const splitAt = (s, marker) => {
  const i = s.indexOf(marker);
  if (i < 0) return [s.replace(/<\/div>$/, ''), '</div>'];
  return [s.slice(0, i), s.slice(i)];
};
