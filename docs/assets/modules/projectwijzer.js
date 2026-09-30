import { esc, evaluateProject, matchScenario, mergeAnswers } from './projectwijzer-core.js';
import { autoStep, missing, railHtml, readStep, stepHtml, stepsOf } from './projectwijzer-form.js';
import { changesHtml, offerData, offerHtml, offerText, snapshot } from './projectwijzer-offer.js';
import { resultHtml } from './projectwijzer-result.js';

const CONFIRM_MS = 2e2;

export function mount(el, config) {
  const ui = config.ui || {};
  const S = config.S || {};
  const model = config.model;
  if (!model?.questions?.length) return;

  const steps = stepsOf(model);
  const byId = new Map(model.questions.map((q) => [q.id, q]));
  const motion = window.matchMedia?.('(prefers-reduced-motion: no-preference)').matches;

  const state = { answers: {}, numbers: {}, cur: 0, reached: 0, phase: 'steps', forced: null, off: new Set(), edits: {}, openTraits: null, refocus: null, prev: null, busy: false, arrow: false };

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
    const toggles = scenario && scenario.zones.length > 1
      ? `<div class="pw-zone-toggle"><p>${esc(ui.zonesHelp)}</p><ul>${scenario.zones.map((z) => `<li><label class="pw-toggle"><input type="checkbox" data-zone="${esc(z.id)}"${state.off.has(z.id) ? '' : ' checked'}> ${esc(z.label)}</label></li>`).join('')}</ul></div>`
      : '';
    const parts = { changes: changesHtml(model, state.prev, state.answers, result, ui), rail: rail(), toggles, offer: offerHtml(offerData(model, state.answers, state.numbers, result), ui) };
    return resultHtml({ model, result, scenario, answers: state.answers, S, ui, parts });
  };

  const leaveResult = () => {
    if (state.phase === 'result') state.prev = snapshot(state.answers, project().result);
  };

  const read = (form) => readStep(form, steps[state.cur], state, model);

  const remember = (replace) => {
    const entry = { pw: { cur: state.cur, phase: state.phase } };
    if (replace) history.replaceState(entry, '');
    else history.pushState(entry, '');
  };
  window.addEventListener('popstate', (ev) => {
    const h = ev.state?.pw;
    if (!h) return;
    if (state.phase === 'result' && h.phase !== 'result') leaveResult();
    state.cur = Math.min(h.cur, state.reached);
    state.phase = h.phase;
    render(true);
  });

  const render = (focus) => {
    const top = el.getBoundingClientRect().top;
    el.innerHTML = state.phase === 'result' ? resultView() : stepHtml(steps, state, ui);
    bind();
    state.busy = false;
    if (state.phase === 'result') {
      const zones = project().result.zones.map((z) => z.zone).filter((z) => z.defaults?.length);
      if (zones.length > 1) {
        import('./projectwijzer-zone.js').then((m) => m.enhanceZones(el, { model, zones, S: ui, state, render }));
      }
    }
    if (!focus) return;
    const box = el.firstElementChild;
    if (box && motion) {
      box.classList.add('is-entering');
      void box.offsetWidth; // stijl vastleggen, zodat het weghalen een CSS-overgang start (geen animatie in script)
      box.classList.remove('is-entering');
    }
    const target = state.phase === 'result' ? el.querySelector('.pw-changes') ?? el.querySelector('.pw-hero-title') : el.querySelector('.pw-q-title');
    target?.setAttribute('tabindex', '-1');
    target?.focus({ preventScroll: true });
    if (top < 0 || top > window.innerHeight * 0.6) el.scrollIntoView({ block: 'start' });
  };

  const advance = () => {
    if (state.cur < steps.length - 1) {
      state.cur += 1;
      state.reached = Math.max(state.reached, state.cur);
    } else {
      state.phase = 'result';
    }
    render(true);
    remember(false);
  };

  const goTo = (i) => {
    leaveResult();
    state.cur = i;
    state.phase = 'steps';
    render(true);
    remember(false);
  };

  const bindRail = () => {
    for (const b of el.querySelectorAll('[data-goto]')) b.addEventListener('click', () => goTo(Number(b.dataset.goto)));
  };

  const bind = () => {
    bindRail();
    const form = el.querySelector('.pw-step');
    if (form) {
      form.addEventListener('keydown', (ev) => {
        state.arrow = ev.key.startsWith('Arrow');
      });
      form.addEventListener('change', (ev) => {
        if (state.busy) return;
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
        const input = ev.target.closest?.('input[type="radio"]');
        if (!input || state.arrow || !autoStep(steps[state.cur], state.answers) || missing(steps[state.cur], state.answers).length) return;
        state.busy = true;
        input.closest('.pw-choice')?.classList.add('is-confirming');
        setTimeout(advance, motion ? CONFIRM_MS : 0);
      });
      form.addEventListener('submit', (ev) => {
        ev.preventDefault();
        if (state.busy) return;
        read(form);
        const open = missing(steps[state.cur], state.answers);
        if (open.length) {
          for (const q of open) form.querySelector(`[data-q="${CSS.escape(q.id)}"] .pw-q-error`).hidden = false;
          form.querySelector(`[data-q="${CSS.escape(open[0].id)}"] input`)?.focus();
          return;
        }
        advance();
      });
      form.querySelector('[data-back]')?.addEventListener('click', () => {
        read(form);
        goTo(Math.max(0, state.cur - 1));
      });
    }
    for (const box of el.querySelectorAll('[data-zone]')) {
      box.addEventListener('change', () => {
        if (box.checked) state.off.delete(box.dataset.zone);
        else state.off.add(box.dataset.zone);
        render(false);
        const again = el.querySelector(`[data-zone="${CSS.escape(box.dataset.zone)}"]`);
        if (again) {
          again.closest('details')?.setAttribute('open', '');
          again.focus();
        }
      });
    }
    el.querySelector('[data-edit]')?.addEventListener('click', () => goTo(0));
    el.querySelector('[data-restart]')?.addEventListener('click', () => {
      Object.assign(state, { answers: {}, numbers: {}, cur: 0, reached: 0, phase: 'steps', forced: null, off: new Set(), edits: {}, openTraits: null, prev: null });
      render(true);
      remember(false);
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
  remember(true);
}
