import { fill, initialState, levelsText, press, roomSvg, targetText } from './control-core.js';
import { fbClass, M } from './control-modes.js';

const levelsOf = (state) => Object.fromEntries(Object.entries(state.groups).map(([k, v]) => [k, v.level]));

function arrowKeys(container, sel, pick) {
  container.addEventListener('keydown', (ev) => {
    const btns = [...container.querySelectorAll(sel)];
    const i = btns.indexOf(document.activeElement);
    if (i < 0) return;
    let k = null;
    if (ev.key === 'ArrowRight' || ev.key === 'ArrowDown') k = (i + 1) % btns.length;
    if (ev.key === 'ArrowLeft' || ev.key === 'ArrowUp') k = (i - 1 + btns.length) % btns.length;
    if (k == null) return;
    ev.preventDefault();
    btns[k].focus();
    pick(btns[k]);
  });
}


const MODES = {
  wiring(el, c) {
    const m = c.model;
    const fns = new Map(m.wiring.functions.map((f) => [f.id, f]));
    const start = Object.fromEntries(m.wiring.inputs.map((i) => [i.id, i.start]));
    let assign = { ...start };
    let state = initialState(m);
    const room = el.querySelector('.ct-result [data-slot="room"]');
    const status = el.querySelector('.ct-result [data-slot="status"]');
    const what = el.querySelector('.ct-result [data-slot="what"]');
    const counter = el.querySelector('.ct-counter');
    counter.hidden = false;
    el.querySelector('.ct-reset').hidden = false;
    const tabs = [...el.querySelectorAll('.ct-tab')];
    const panels = [...el.querySelectorAll('.ct-panel')];
    el.querySelector('.ct-tabs').hidden = false;
    const show = (v) => {
      for (const b of tabs) {
        b.setAttribute('aria-selected', String(b.dataset.v === v));
        b.tabIndex = b.dataset.v === v ? 0 : -1;
      }
      for (const p of panels) p.classList.toggle('is-current', p.dataset.v === v);
    };
    for (const b of tabs) b.addEventListener('click', () => show(b.dataset.v));
    arrowKeys(el.querySelector('.ct-tabs'), '.ct-tab', (b) => show(b.dataset.v));
    show(c.task ? 'l' : 'f');
    el.classList.add('is-enhanced');

    const draw = () => {
      room.innerHTML = roomSvg(m, levelsOf(state), { title: c.strings.roomAria, uid: `${c.slug}-r` });
      const scenes = [...new Set(Object.values(state.groups).map((g) => g.scene).filter(Boolean))].map((id) => m.scenes.find((s) => s.id === id)?.label);
      const paused = Object.values(state.groups).some((g) => g.paused);
      status.textContent = fill(c.strings.statusLine, { levels: levelsText(m, levelsOf(state)), scene: scenes.length ? scenes.join(', ') : c.strings.noScene }) + (paused ? ` ${c.strings.paused}` : '');
      const changed = Object.keys(assign).filter((k) => assign[k] !== start[k]).length;
      counter.querySelector('[data-slot="fn"]').textContent = String(changed);
      el.querySelector('[data-slot="same"]').textContent = changed ? fill(c.strings.changed, { n: changed }) : c.strings.same;
    };
    for (const sel of el.querySelectorAll('.ct-select')) {
      sel.disabled = false;
      sel.addEventListener('change', () => {
        assign[sel.dataset.input] = sel.value;
        const row = sel.closest('.ct-row');
        const fn = fns.get(sel.value);
        row.querySelector('[data-slot="target"]').textContent = targetText(m, fn);
        row.querySelector('[data-slot="text"]').textContent = fn.text;
        row.classList.add('is-changed');
        setTimeout(() => row.classList.remove('is-changed'), 600);
        draw();
      });
    }
    for (const p of el.querySelectorAll('.ct-press')) p.hidden = false;
    for (const b of el.querySelectorAll('.ct-pbtn')) {
      b.addEventListener('click', () => {
        const id = b.dataset.input;
        const r = press(m, state, fns.get(assign[id]), b.dataset.press, id);
        state = r.state;
        const inp = m.wiring.inputs.find((i) => i.id === id);
        what.hidden = false;
        what.textContent = fill(c.strings.what[r.what], { scene: m.scenes.find((s) => s.id === r.scene)?.label ?? '', input: inp?.label ?? '' });
        for (const g of el.querySelectorAll(`.ct-btn[data-input]`)) g.classList.toggle('is-hl', g.dataset.input === id);
        draw();
      });
    }
    el.querySelector('[data-act="reset"]').addEventListener('click', () => {
      assign = { ...start };
      state = initialState(m);
      for (const sel of el.querySelectorAll('.ct-select')) {
        sel.value = start[sel.dataset.input];
        sel.dispatchEvent(new Event('change'));
      }
      what.hidden = true;
      for (const fb of el.querySelectorAll('.ct-task-fb')) fb.hidden = true;
      draw();
    });
    if (c.task) {
      el.querySelector('.ct-task-actions').hidden = false;
      for (const d of el.querySelectorAll('.ct-answer')) d.hidden = true;
      const auto = el.querySelector('.ct-auto');
      if (auto) auto.disabled = false;
      const say = (box, w) => {
        const fb = box.querySelector('.ct-task-fb');
        fb.hidden = false;
        const k = fb.querySelector('[data-slot="k"]');
        k.textContent = w.kind ? `${w.kind === 'werkt' ? '✓' : '!'} ${c.strings.feedback[w.kind]}` : `! ${c.strings.chooseFirst}`;
        fbClass(k, w.kind ?? 'systeem');
        fb.querySelector('[data-slot="why"]').textContent = w.why;
      };
      const none = { kind: null, why: '' };
      el.querySelector('.ct-task-actions [data-act="check"]').addEventListener('click', () => {
        if (c.auto && auto) {
          const got = auto.value;
          say(el.querySelector('.ct-task-auto'), !got ? none : got === c.auto.answer ? { kind: 'werkt', why: c.auto.why } : { kind: 'systeem', why: c.auto.wrong.find((x) => x.opt === got)?.why ?? '' });
        }
        for (const r of c.task) {
          const got = assign[r.input];
          say(el.querySelector(`.ct-row[data-input="${r.input}"]`), got === r.answer ? { kind: 'werkt', why: r.why } : fns.get(got)?.kind === 'inactief' ? none : r.wrong.find((x) => x.fn === got) ?? r.otherwise);
        }
      });
    }
    draw();
  },

  ...M,
};

export function mount(el, config) {
  MODES[config.mode]?.(el, config);
}
