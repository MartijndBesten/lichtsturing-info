import { LEVELS, levelsFor } from './swarm-core.js';
import { createPlayer } from './tour-player.js';

export function mount(el, config) {
  const s = config.strings || {};
  const labels = config.levels || {};
  const zoneNames = config.zones || [];
  const zones = [...el.querySelectorAll('.sw-zone')];
  const steps = [...el.querySelectorAll('.illustration-steps--swarm > li')];
  const status = el.querySelector('.sw-status');
  const person = el.querySelector('.sw-person');
  const bar = el.querySelector('.tour-bar');
  const kindNotes = new Map([...el.querySelectorAll('.sw-kinds [data-key]')].map((x) => [x.dataset.key, x]));
  const toggleNotes = new Map([...el.querySelectorAll('.sw-toggles [data-key]')].map((x) => [x.dataset.key, x]));
  if (!zones.length || !steps.length || !status || !bar) return;
  const start = Number(config.start) || 0;
  const state = { step: start, pos: Number(steps[start].dataset.pos), basislicht: true, drempel: false };

  const opts = document.createElement('div');
  opts.className = 'sw-options';
  opts.setAttribute('role', 'group');
  opts.setAttribute('aria-label', s.options || '');
  const toggles = [...toggleNotes.entries()].map(([key, box]) => {
    const b = Object.assign(document.createElement('button'), { type: 'button', textContent: box.querySelector('dt')?.textContent.trim() || key });
    b.dataset.key = key;
    opts.append(b);
    return b;
  });
  const detail = document.createElement('p');
  detail.className = 'sw-detail';
  detail.setAttribute('aria-live', 'polite');
  const hint = Object.assign(document.createElement('p'), { className: 'ports-hint', textContent: s.hint || '' });
  el.querySelector('svg').after(hint);
  status.after(opts, detail);
  el.classList.add('is-enhanced');

  const zoneStatus = (lv) => zoneNames.map((z, i) => `${z}: ${labels[lv[i]] ?? lv[i]}`).join(' · ');

  function render() {
    const lv = levelsFor(zones.length, state.pos, state);
    zones.forEach((z, i) => {
      for (const l of LEVELS) z.classList.toggle(`sw-zone--${l}`, lv[i] === l);
      const txt = z.querySelector('.sw-level');
      if (txt) txt.textContent = labels[lv[i]] ?? lv[i];
    });
    if (person) {
      const away = state.pos < 0;
      person.classList.toggle('is-away', away);
      if (!away) {
        const hit = zones[state.pos].querySelector('.sw-hit');
        const cx = Number(hit.getAttribute('x')) + Number(hit.getAttribute('width')) / 2;
        person.style.transform = `translate(${Math.round(cx)}px, 0)`;
      }
    }
    steps.forEach((li, i) => li.classList.toggle('is-current', i === state.step));
    const standard = state.basislicht && !state.drempel;
    status.textContent = state.step != null && standard ? steps[state.step].textContent.trim() : `${state.step == null ? `${s.custom || ''} ` : ''}${zoneStatus(lv)}`.trim();
    for (const b of toggles) b.setAttribute('aria-pressed', String(Boolean(state[b.dataset.key])));
  }

  const player = createPlayer(el, bar, {
    total: () => steps.length,
    strings: s,
    durationOf: () => 3,
    initial: start,
    onStep(i) {
      state.step = i;
      state.pos = Number(steps[i].dataset.pos);
      render();
    },
  });

  opts.addEventListener('click', (ev) => {
    const b = ev.target.closest('button[data-key]');
    if (!b) return;
    state[b.dataset.key] = !state[b.dataset.key];
    detail.textContent = toggleNotes.get(b.dataset.key)?.querySelector('dd')?.textContent.trim() || '';
    render();
  });
  zones.forEach((z, i) => {
    z.querySelector('.sw-hit')?.addEventListener('click', () => {
      player.pause();
      state.step = null;
      state.pos = i;
      detail.textContent = '';
      const count = bar.querySelector('.tour-count');
      if (count) count.textContent = '';
      render();
    });
    for (const lum of z.querySelectorAll('.sw-lum')) {
      lum.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const box = kindNotes.get(lum.dataset.kind);
        detail.textContent = box ? `${box.querySelector('dt')?.textContent.trim()}: ${box.querySelector('dd')?.textContent.trim()}` : '';
      });
    }
  });
  el.addEventListener('keydown', (ev) => {
    if (ev.key === 'Escape') player.pause();
  });
  render();
}
