import { addressGrid, engineeringHtml, physicalSvg, summary } from './dali-core.js';

export function mount(el, config = {}) {
  const { model, strings: s, symbols, locale } = config;
  if (!model) return;
  const max = config.max || 140;
  const state = { source: model.controllers[0].id, items: [...(config.start || [])], reserve: 0 };
  const controls = el.querySelector('.dl-controls');
  const tabs = [...el.querySelectorAll('.dl-view')];
  const panels = [...el.querySelectorAll('.dl-panel')];
  const canvas = el.querySelector('.dl-canvas');
  const grids = el.querySelector('.dl-grids');
  const eng = el.querySelector('.dl-eng');
  const live = el.querySelector('.dl-live');
  const reserveBox = el.querySelector('.dl-reserve');
  const reserve = el.querySelector('.dl-reserve-input');
  const title = el.querySelector('.illustration-title')?.textContent || '';
  el.classList.add('is-enhanced');
  controls.hidden = false;
  el.querySelector('.dl-views').hidden = false;
  if (reserveBox) reserveBox.hidden = false;

  function draw() {
    canvas.innerHTML = physicalSvg(state, model, { cols: 16, strings: s, title, symbols }) + physicalSvg(state, model, { cols: 8, strings: s, title, symbols });
    grids.innerHTML = addressGrid(state, model, 'gear', { strings: s, symbols }) + addressGrid(state, model, 'device', { strings: s, symbols });
    eng.innerHTML = engineeringHtml(state, model, { strings: s, locale });
    live.textContent = summary(state, model, s);
    for (const row of el.querySelectorAll('.dl-type')) {
      const n = state.items.filter((id) => id === row.dataset.type).length;
      row.querySelector('.dl-count').textContent = String(n);
      row.querySelector('[data-act="min"]').disabled = n === 0;
      for (const b of row.querySelectorAll('[data-act^="plus"]')) b.disabled = state.items.length >= max;
    }
  }

  for (const row of el.querySelectorAll('.dl-type')) {
    const type = row.dataset.type;
    row.addEventListener('click', (ev) => {
      const b = ev.target.closest('[data-act]');
      if (!b) return;
      if (b.dataset.act === 'plus') state.items.push(type);
      if (b.dataset.act === 'plus10') for (let k = 0; k < 10 && state.items.length < max; k++) state.items.push(type);
      if (b.dataset.act === 'min') {
        const i = state.items.lastIndexOf(type);
        if (i >= 0) state.items.splice(i, 1);
      }
      draw();
    });
  }
  el.querySelector('[data-act="reset"]').addEventListener('click', () => {
    state.items = [...(config.start || [])];
    state.reserve = 0;
    if (reserve) reserve.value = '0';
    draw();
  });
  el.querySelector('[data-act="fill"]').addEventListener('click', () => {
    const gear = model.types.find((t) => t.space === 'gear' && (t.addresses || 1) === 1);
    const used = () => state.items.reduce((n, id) => {
      const t = model.types.find((x) => x.id === id);
      return n + (t.space === 'gear' ? t.addresses || 1 : 0);
    }, 0);
    while (gear && used() < model.protocol.gear && state.items.length < max) state.items.push(gear.id);
    draw();
  });
  for (const r of el.querySelectorAll('.dl-source input')) {
    r.addEventListener('change', () => {
      state.source = r.value;
      draw();
    });
  }
  if (reserve) {
    reserve.addEventListener('input', () => {
      state.reserve = Math.max(0, Math.min(50, Number(reserve.value) || 0));
      draw();
    });
  }

  function show(v, focus = false) {
    el.dataset.view = v;
    for (const b of tabs) {
      const on = b.dataset.view === v;
      b.setAttribute('aria-selected', String(on));
      b.tabIndex = on ? 0 : -1;
      if (on && focus) b.focus();
    }
    for (const p of panels) p.hidden = p.dataset.view !== v;
  }
  tabs.forEach((b, i) => {
    b.addEventListener('click', () => show(b.dataset.view));
    b.addEventListener('keydown', (ev) => {
      const k = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[ev.key];
      if (k) {
        ev.preventDefault();
        show(tabs[(i + k + tabs.length) % tabs.length].dataset.view, true);
      } else if (ev.key === 'Home' || ev.key === 'End') {
        ev.preventDefault();
        show(tabs[ev.key === 'Home' ? 0 : tabs.length - 1].dataset.view, true);
      }
    });
  });
  show(el.dataset.view || 'fysiek');
  draw();
}
