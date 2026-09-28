import { esc, evaluateProject, matchScenario, mergeAnswers } from './projectwijzer-core.js';
import { fmt, missing, railHtml, readStep, stepHtml, stepsOf } from './projectwijzer-form.js';
import { changesHtml, offerData, offerHtml, offerText, snapshot } from './projectwijzer-offer.js';
import { renderResult } from './projectwijzer-view.js';

export function mount(el, config) {
  const S = config.S || {};
  const ui = config.ui || {};
  const model = config.model;
  if (!model?.questions?.length) return;

  const steps = stepsOf(model);
  const byId = new Map(model.questions.map((q) => [q.id, q]));

  const state = { answers: {}, numbers: {}, cur: 0, reached: 0, phase: 'steps', forced: null, off: new Set(), zone: null, edits: {}, openTraits: null, refocus: null, prev: null };

  const showZone = (id, focus) => {
    const zones = [...el.querySelectorAll('.pw-zone')];
    if (zones.length < 2) return;
    const pick = zones.find((z) => z.id === `zone-${id}`) ?? zones[0];
    state.zone = pick.id.slice(5);
    for (const z of zones) z.hidden = z !== pick;
    for (const a of el.querySelectorAll('.pw-plan-link')) {
      if (a.hash === `#${pick.id}`) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    }
    if (!focus) return;
    const title = pick.querySelector('.pw-zone-title');
    title?.setAttribute('tabindex', '-1');
    title?.focus({ preventScroll: true });
    if (pick.getBoundingClientRect().top > window.innerHeight * 0.7) pick.scrollIntoView({ block: 'start' });
  };

  const slug = new URLSearchParams(window.location.search).get('voorbeeld');
  const preset = slug ? model.scenarios.find((s) => s.id.split('.')[1] === slug) : null;
  if (preset) {
    state.answers = mergeAnswers(preset.answers);
    state.forced = preset;
    state.phase = 'result';
    state.reached = steps.length - 1;
  }

  const rail = () => railHtml(steps, state, ui);

  const project = () => {
    const scenario = state.forced ?? matchScenario(model, state.answers);
    const zones = scenario?.zones?.filter((z) => !state.off.has(z.id)).map((z) => {
      const ed = state.edits[z.id];
      if (!ed) return { ...z, defaults: z.answers };
      const answers = [...z.answers.filter((a) => !(a.question in ed)), ...Object.entries(ed).filter(([, o]) => o.length).map(([question, options]) => ({ question, options }))];
      return { ...z, answers, defaults: z.answers, edited: true };
    });
    const s = scenario ? { ...scenario, zones: zones?.length ? zones : [] } : null;
    return { scenario, result: evaluateProject(model, state.answers, s) };
  };

  const resultView = () => {
    const { scenario, result } = project();
    const match = scenario
      ? `<p class="pw-match">${esc(fmt(ui.scenario, { title: scenario.title }))}${scenario.url ? ` <a href="${esc(scenario.url)}">${esc(ui.scenarioLink)}</a>` : ''}</p>`
      : `<p class="pw-match">${esc(ui.noScenario)}</p>`;
    const toggles = scenario && scenario.zones.length > 1
      ? `<details class="pw-zone-toggle"${state.off.size ? ' open' : ''}><summary>${esc(ui.zones)}</summary><p>${esc(ui.zonesHelp)}</p><ul>${scenario.zones.map((z) => `<li><label class="pw-toggle"><input type="checkbox" data-zone="${esc(z.id)}"${state.off.has(z.id) ? '' : ' checked'}> ${esc(z.label)}</label></li>`).join('')}</ul></details>`
      : '';
    const main = result.zones.map((z) => z.result.logical[0]?.route).find(Boolean);
    const tech = main?.tech ?? main?.url;
    const next = `<nav class="pw-next-steps" aria-label="${esc(ui.nextSteps)}"><ul>${tech ? `<li><a href="${esc(tech)}">${esc(ui.tech)}</a></li>` : ''}${model.cta?.products ? `<li><a href="${esc(model.cta.products)}">${esc(ui.products)}</a></li>` : ''}<li><a href="#pw-offer" data-offer>${esc(ui.offer)}</a></li></ul></nav>`;
    const profile = `<aside class="pw-profile" aria-labelledby="pw-profile-t"><p class="pw-profile-title" id="pw-profile-t">${esc(ui.profile)}</p><p class="pw-profile-help">${esc(ui.profileHelp)}</p>${rail()}</aside>`;
    return `<div class="pw-dialog pw-dialog--result">${profile}<div class="pw-outcome"><p class="pw-eyebrow">${esc(ui.result)}</p>${changesHtml(model, state.prev, state.answers, result, ui)}${match}${toggles}${renderResult(model, result, S)}${next}${offerHtml(offerData(model, state.answers, state.numbers, result), ui)}<div class="pw-nav pw-nav--result"><button type="button" class="pw-next" data-edit>${esc(ui.edit)}</button><button type="button" class="pw-back" data-restart>${esc(ui.restart)}</button></div></div></div>`;
  };

  const leaveResult = () => {
    if (state.phase === 'result') state.prev = snapshot(state.answers, project().result);
  };

  const read = (form) => readStep(form, steps[state.cur], state, model);

  const render = (focus) => {
    el.innerHTML = state.phase === 'result' ? resultView() : stepHtml(steps, state, ui);
    bind();
    if (state.phase === 'result') {
      showZone(state.zone, false);
      const zones = project().result.zones.map((z) => z.zone).filter((z) => z.defaults?.length);
      if (zones.length > 1) {
        import('./projectwijzer-zone.js').then((m) => m.enhanceZones(el, { model, zones, S: ui, state, render }));
      }
    }
    if (!focus) return;
    const target = state.phase === 'result' ? el.querySelector('.pw-changes') ?? el.querySelector('.pw-result h2') : el.querySelector('.pw-q-title');
    target?.setAttribute('tabindex', '-1');
    target?.focus();
  };

  const bindRail = () => {
    for (const b of el.querySelectorAll('[data-goto]')) {
      b.addEventListener('click', () => {
        leaveResult();
        state.cur = Number(b.dataset.goto);
        state.phase = 'steps';
        render(true);
      });
    }
  };

  const bind = () => {
    bindRail();
    const form = el.querySelector('.pw-step');
    if (form) {
      form.addEventListener('change', () => {
        read(form);
        state.forced = null;
        for (const fs of form.querySelectorAll('.pw-q')) {
          const q = byId.get(fs.dataset.q);
          if ((state.answers[q.id] ?? []).length) fs.querySelector('.pw-q-error').hidden = true;
        }
        const railNode = el.querySelector('.pw-rail');
        if (railNode) {
          railNode.outerHTML = rail();
          bindRail();
        }
      });
      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        read(form);
        const open = missing(steps[state.cur], state.answers);
        if (open.length) {
          for (const q of open) form.querySelector(`[data-q="${CSS.escape(q.id)}"] .pw-q-error`).hidden = false;
          form.querySelector(`[data-q="${CSS.escape(open[0].id)}"] input`)?.focus();
          return;
        }
        if (state.cur < steps.length - 1) {
          state.cur += 1;
          state.reached = Math.max(state.reached, state.cur);
        } else {
          state.phase = 'result';
        }
        render(true);
      });
      form.querySelector('[data-back]')?.addEventListener('click', () => {
        read(form);
        state.cur = Math.max(0, state.cur - 1);
        render(true);
      });
    }
    for (const box of el.querySelectorAll('[data-zone]')) {
      box.addEventListener('change', () => {
        if (box.checked) state.off.delete(box.dataset.zone);
        else state.off.add(box.dataset.zone);
        render(false);
        el.querySelector(`[data-zone="${CSS.escape(box.dataset.zone)}"]`)?.focus();
      });
    }
    for (const a of el.querySelectorAll('.pw-plan-link')) {
      a.addEventListener('click', (ev) => {
        ev.preventDefault();
        showZone(a.hash.slice(6), true);
      });
    }
    el.querySelector('[data-edit]')?.addEventListener('click', () => {
      leaveResult();
      state.phase = 'steps';
      state.cur = 0;
      render(true);
    });
    el.querySelector('[data-restart]')?.addEventListener('click', () => {
      Object.assign(state, { answers: {}, numbers: {}, cur: 0, reached: 0, phase: 'steps', forced: null, off: new Set(), zone: null, edits: {}, openTraits: null, prev: null });
      render(true);
    });
    const offer = el.querySelector('#pw-offer');
    el.querySelector('[data-offer]')?.addEventListener('click', () => {
      if (offer) offer.open = true;
    });
    el.querySelector('[data-copy]')?.addEventListener('click', () => {
      const status = el.querySelector('.pw-copy-status');
      const text = offerText(offerData(model, state.answers, state.numbers, project().result), ui);
      const done = (msg) => {
        if (status) status.textContent = msg;
      };
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(() => done(ui.copied), () => done(ui.copyFail));
      else done(ui.copyFail);
    });
  };

  el.hidden = false;
  render(Boolean(preset));
}
