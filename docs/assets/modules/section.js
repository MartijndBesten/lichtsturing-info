import { createPlayer } from './tour-player.js';

const KEYS = ['daylight', 'art', 'meter', 'sensor'];

export function mount(el, config) {
  const s = config.strings || {};
  const box = el.querySelector('.tour-box');
  const bar = box?.querySelector('.tour-bar');
  const now = box?.querySelector('.tour-now');
  const items = [...el.querySelectorAll('.tour-steps > li[data-step]')];
  const markers = [...el.querySelectorAll('.ill-num[data-anchor]')];
  const slider = el.querySelector('.sec-slider');
  const range = slider?.querySelector('input[type="range"]');

  const set = (st) => {
    for (const k of KEYS) {
      if (st?.[k] != null) el.dataset[k] = st[k];
      else delete el.dataset[k];
    }
  };
  const markAnchors = (list) => {
    for (const m of markers) m.classList.toggle('is-current', list.includes(m.dataset.anchor));
  };

  let player = null;
  if (bar && items.length) {
    box.classList.add('is-enhanced');
    player = createPlayer(el, bar, {
      total: () => items.length,
      strings: s,
      durationOf: () => 6,
      onStep(i) {
        const li = items[i];
        if (range) range.value = '0';
        set({ daylight: li.dataset.daylight, art: li.dataset.light, meter: li.dataset.meter ?? '0', sensor: li.dataset.sensor });
        markAnchors((li.dataset.anchors || '').split(' '));
        for (const x of items) x.classList.toggle('is-current', x === li);
        if (now) {
          const p = Object.assign(document.createElement('p'), { textContent: li.querySelector('.tour-step-text')?.textContent.replace(/\s+/g, ' ').trim() || '' });
          now.replaceChildren(p);
          now.hidden = false;
        }
      },
      onStop() {
        set(null);
        markAnchors([]);
        for (const x of items) x.classList.remove('is-current');
        if (now) now.hidden = true;
      },
    });
  }

  if (range) {
    const words = [range.dataset.low, range.dataset.mid, range.dataset.high];
    const update = () => {
      const v = Number(range.value) / 100;
      el.style.setProperty('--daylight', (0.12 + 0.88 * v).toFixed(2));
      el.style.setProperty('--art', (1 - 0.72 * v).toFixed(2));
      range.setAttribute('aria-valuetext', words[v < 1 / 3 ? 0 : v < 2 / 3 ? 1 : 2] || '');
    };
    slider.hidden = false;
    range.addEventListener('input', () => {
      if (player?.active) player.stop(false);
      set({ daylight: 'schuif', art: 'schuif', meter: '0', sensor: 'referentie' });
      update();
    });
    update();
  }

  document.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape' && player?.active) player.stop(true);
  });
}
