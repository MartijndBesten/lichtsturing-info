import { createPlayer } from './tour-player.js';

export function mount(el, config) {
  const s = config.strings || {};
  const variants = [...el.querySelectorAll('.tl-variant')];
  const bar = el.querySelector('.tour-bar');
  if (!variants.length || !bar) return;
  let mode = 0;
  const cur = () => variants[mode];
  const phases = () => [...cur().querySelectorAll('.illustration-steps > li')];

  function veil(v, x) {
    const r = v.querySelector('.tl-veil');
    const w = Number(v.querySelector('svg')?.viewBox.baseVal.width) || 0;
    if (!r) return;
    r.setAttribute('x', String(x ?? w));
    r.setAttribute('width', String(x == null ? 0 : Math.max(0, w - x)));
  }

  function mark(i) {
    const v = cur();
    for (const x of v.querySelectorAll('[data-phase]')) x.classList.toggle('is-current', Number(x.dataset.phase) === i);
    for (const li of phases()) li.toggleAttribute('aria-current', Number(li.dataset.phase) === i);
    const col = v.querySelector(`.tl-col[data-phase="${i}"]`);
    veil(v, col ? Number(col.getAttribute('x')) + Number(col.getAttribute('width')) : null);
  }

  function clear() {
    for (const v of variants) {
      for (const x of v.querySelectorAll('.is-current')) x.classList.remove('is-current');
      for (const li of v.querySelectorAll('[aria-current]')) li.removeAttribute('aria-current');
      veil(v, null);
    }
  }

  const player = createPlayer(el, bar, { total: () => phases().length, strings: s, durationOf: () => 3.5, onStep: mark, onStop: clear });
  el.classList.add('is-enhanced');

  const modeBar = el.querySelector('.tl-modes');
  if (modeBar && variants.length > 1) {
    const buttons = [...modeBar.querySelectorAll('button[data-mode]')];
    const show = (m) => {
      player.stop(false);
      mode = m;
      variants.forEach((v, k) => {
        v.hidden = k !== m;
      });
      for (const b of buttons) b.setAttribute('aria-pressed', String(Number(b.dataset.mode) === m));
    };
    modeBar.hidden = false;
    modeBar.addEventListener('click', (ev) => {
      const b = ev.target.closest('button[data-mode]');
      if (b) show(Number(b.dataset.mode));
    });
    show(0);
  }

  el.addEventListener('click', (ev) => {
    const hit = ev.target.closest('.tl-col, .illustration-steps > li');
    if (hit && cur().contains(hit)) player.go(Number(hit.dataset.phase));
  });
  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && player.active) player.stop(true);
  });
}
