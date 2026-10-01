import { esc } from './projectwijzer-core.js';

export function enhanceZones(el, { model, zones, S, state, render }) {
  const redraw = (zid, refocus) => {
    Object.assign(state, { openTraits: zid, zone: zid, refocus });
    render(false);
  };
  const qById = new Map(model.questions.map((q) => [q.id, q]));
  for (const zone of zones) {
    const box = el.querySelector(`#zone-${CSS.escape(zone.id)} .pw-zone-traits`);
    if (!box) continue;
    const current = Object.fromEntries(zone.answers.map((a) => [a.question, a.options]));
    const fields = zone.defaults
      .map((a) => qById.get(a.question))
      .filter(Boolean)
      .map((q) => {
        const type = q.multiple ? 'checkbox' : 'radio';
        const opts = q.options.map((o) => `<label class="pw-toggle"><input type="${type}" name="${esc(`${zone.id}:${q.id}`)}" value="${esc(o.id)}" data-q="${esc(q.id)}"${(current[q.id] ?? []).includes(o.id) ? ' checked' : ''}> ${esc(o.label)}</label>`);
        return `<fieldset class="pw-zone-q"><legend>${esc(q.title)}</legend>${opts.join('')}</fieldset>`;
      });
    if (!fields.length) continue;
    const form = document.createElement('form');
    form.className = 'pw-zone-edit';
    form.innerHTML = `<p class="pw-zone-edit-help">${esc(S.zoneEdit)}</p>${fields.join('')}${zone.edited ? `<button type="button" class="pw-back" data-zone-reset>${esc(S.zoneReset)}</button>` : ''}`;
    box.append(form);
    if (state.openTraits === zone.id) box.open = true;
    form.addEventListener('change', (ev) => {
      const input = ev.target.closest('input[data-q]');
      if (!input) return;
      const picked = [...form.querySelectorAll(`input[data-q="${CSS.escape(input.dataset.q)}"]:checked`)].map((x) => x.value);
      state.edits[zone.id] = { ...state.edits[zone.id], [input.dataset.q]: picked };
      redraw(zone.id, { name: input.name, value: input.value });
    });
    form.querySelector('[data-zone-reset]')?.addEventListener('click', () => {
      delete state.edits[zone.id];
      redraw(zone.id, null);
    });
  }
  const f = state.refocus;
  if (f) el.querySelector(`input[name="${CSS.escape(f.name)}"][value="${CSS.escape(f.value)}"]`)?.focus();
  state.refocus = null;
}
