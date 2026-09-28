import { esc, visible } from './projectwijzer-core.js';

export const fmt = (s, vars) => String(s ?? '').replace(/\{(\w+)\}/g, (_, k) => (vars[k] ?? ''));

export function stepsOf(model) {
  const steps = [];
  for (const q of [...model.questions].sort((a, b) => a.step - b.step || a.order - b.order)) {
    const last = steps[steps.length - 1];
    if (last && last.step === q.step) last.questions.push(q);
    else steps.push({ step: q.step, questions: [q] });
  }
  return steps;
}

export const shown = (st, answers) => st.questions.filter((q) => visible(q, answers));
export const missing = (st, answers) => shown(st, answers).filter((q) => !q.optional && !(answers[q.id] ?? []).length);
export const labelOf = (q, id) => q.options.find((o) => o.id === id)?.label ?? id;

const stepSummary = (st, answers, ui) =>
  shown(st, answers)
    .map((q) => {
      const a = answers[q.id] ?? [];
      if (!a.length) return '';
      return a.length === 1 ? labelOf(q, a[0]) : fmt(ui.chosen, { n: a.length });
    })
    .filter(Boolean)
    .join(' · ');

export function railHtml(steps, state, ui) {
  return `<nav class="pw-rail" aria-label="${esc(ui.steps)}"><ol>${steps
    .map((st, i) => {
      const current = state.phase === 'steps' && i === state.cur;
      const done = i < state.cur || state.phase === 'result' || (i <= state.reached && !missing(st, state.answers).length);
      return `<li class="pw-rail-step${current ? ' is-current' : ''}${done && !current ? ' is-done' : ''}"><button type="button" data-goto="${i}"${i > state.reached ? ' disabled' : ''}${current ? ' aria-current="step"' : ''}><span class="pw-rail-n" aria-hidden="true">${i + 1}</span><span class="pw-rail-text"><span class="pw-rail-label">${esc(shown(st, state.answers).map((q) => q.title).join(' · '))}</span><span class="pw-rail-answer">${esc(stepSummary(st, state.answers, ui))}</span></span></button></li>`;
    })
    .join('')}</ol></nav>`;
}

const choice = (q, o, checked) => `<label class="pw-choice"><input type="${q.multiple ? 'checkbox' : 'radio'}" name="${esc(q.id)}" value="${esc(o.id)}"${checked ? ' checked' : ''}><span class="pw-choice-box">${o.icon ? `<span class="pw-choice-visual" aria-hidden="true"><svg class="pw-choice-icon" focusable="false"><use href="#pw-i-${esc(o.icon)}"></use></svg></span>` : ''}<span class="pw-choice-text"><span class="pw-choice-label">${esc(o.label)}</span>${o.hint ? `<span class="pw-choice-hint">${esc(o.hint)}</span>` : ''}</span></span></label>`;

const numbers = (q, values, ui) =>
  q.numbers?.length
    ? `<div class="pw-numbers"><p class="pw-q-note">${esc(ui.numbers)}</p>${q.numbers.map((n) => `<label class="pw-number"><span class="pw-number-label">${esc(n.label)}</span><input type="number" inputmode="numeric" min="0" step="1" data-n="${esc(n.id)}" value="${esc(values[n.id] ?? '')}"></label>`).join('')}</div>`
    : '';

export function questionHtml(q, state, ui) {
  const a = state.answers[q.id] ?? [];
  const icons = q.options.some((o) => o.icon);
  const unknown = q.optional && !q.multiple ? `<label class="pw-choice pw-choice--unknown"><input type="radio" name="${esc(q.id)}" value=""${a.length ? '' : ' checked'}><span class="pw-choice-box"><span class="pw-choice-text"><span class="pw-choice-label">${esc(ui.unknown)}</span></span></span></label>` : '';
  const note = [q.multiple ? ui.multiple : '', q.optional && q.multiple ? ui.optional : ''].filter(Boolean).join(' ');
  return `<fieldset class="pw-q" data-q="${esc(q.id)}"><legend><h2 class="pw-q-title" tabindex="-1">${esc(q.question)}</h2></legend>${q.help ? `<p class="pw-q-help">${esc(q.help)}</p>` : ''}${note ? `<p class="pw-q-note">${esc(note)}</p>` : ''}<div class="pw-choices${icons ? ' pw-choices--icons' : ''}">${q.options.map((o) => choice(q, o, a.includes(o.id))).join('')}${unknown}</div>${numbers(q, state.numbers, ui)}<p class="pw-q-error" role="alert" hidden>${esc(ui.required)}</p></fieldset>`;
}

export function stepHtml(steps, state, ui) {
  const st = steps[state.cur];
  const last = state.cur === steps.length - 1;
  return `<div class="pw-dialog">${railHtml(steps, state, ui)}<form class="pw-step" novalidate><p class="visually-hidden">${esc(fmt(ui.step, { n: state.cur + 1, total: steps.length }))}</p>${shown(st, state.answers).map((q) => questionHtml(q, state, ui)).join('')}<div class="pw-nav"><button type="submit" class="pw-next">${esc(last ? ui.show : ui.next)}</button>${state.cur > 0 ? `<button type="button" class="pw-back" data-back>${esc(ui.back)}</button>` : ''}</div></form></div>`;
}

export function readStep(form, st, state, model) {
  for (const q of shown(st, state.answers)) {
    const vals = [...form.querySelectorAll(`input[name="${CSS.escape(q.id)}"]:checked`)].map((i) => i.value).filter(Boolean);
    if (vals.length) state.answers[q.id] = vals;
    else delete state.answers[q.id];
  }
  for (const input of form.querySelectorAll('input[data-n]')) {
    const n = Number(input.value);
    if (input.value.trim() && Number.isFinite(n) && n >= 0) state.numbers[input.dataset.n] = String(Math.round(n));
    else delete state.numbers[input.dataset.n];
  }
  for (const q of model.questions) if (!visible(q, state.answers)) delete state.answers[q.id];
}
