import { chooseResult, daylightState, daylightSvg, fill, heightSvg, num, pirPath, segmentAt } from './sensor-core.js';
import * as rm from './sensor-room.js';
import * as ex from './sensor-ex.js';

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
  layers(el) {
    const tabs = [...el.querySelectorAll('.sn-tab')];
    const panels = [...el.querySelectorAll('.sn-panel')];
    const slot = el.querySelector('[data-slot="itf"]');
    el.querySelector('.sn-tabs').hidden = false;
    const show = (id) => {
      for (const b of tabs) {
        const on = b.dataset.v === id;
        b.setAttribute('aria-selected', String(on));
        b.tabIndex = on ? 0 : -1;
      }
      for (const p of panels) p.hidden = p.dataset.v !== id;
      const p = panels.find((x) => x.dataset.v === id);
      if (p && slot) slot.textContent = p.dataset.itf;
    };
    for (const b of tabs) b.addEventListener('click', () => show(b.dataset.v));
    arrowKeys(el.querySelector('.sn-tabs'), '.sn-tab', (b) => show(b.dataset.v));
    show(tabs[0].dataset.v);
  },

  pir(el, c) {
    const svg = el.querySelector('.sn-svg--pir');
    const person = svg.querySelector('.sn-person');
    const n = el.querySelector('.sn-count-n');
    const btns = [...el.querySelectorAll('.sn-btn[data-path]')];
    el.querySelector('.sn-ctl').hidden = false;
    const clear = () => {
      for (const s of svg.querySelectorAll('.sn-seg.is-hit')) s.classList.remove('is-hit');
      for (const g of svg.querySelectorAll('.sn-walk')) g.classList.remove('is-on');
    };
    const play = (b) => {
      clear();
      for (const x of btns) x.setAttribute('aria-pressed', String(x === b));
      const p = c.paths.find((x) => x.id === b.dataset.path);
      svg.querySelector(`.sn-walk[data-path="${p.id}"]`)?.classList.add('is-on');
      el.querySelector('.sn-paths')?.querySelectorAll('li').forEach((li) => li.classList.toggle('is-current', li.dataset.path === p.id));
      const pts = pirPath(p.kind, c.rings, c.sectors);
      let prev = null;
      let count = 0;
      for (const q of pts) {
        const sg = segmentAt(q, c.rings, c.sectors);
        const key = sg ? `${sg.k}-${sg.j}` : null;
        if (key && prev && key !== prev) {
          const seg = svg.querySelector(`.sn-seg[data-seg="${key}"]`);
          if (seg) {
            seg.style.setProperty('--d', `${count * 140}ms`);
            seg.classList.add('is-hit');
          }
          count++;
        }
        if (key) prev = key;
      }
      const end = pts[pts.length - 1];
      person.setAttribute('cx', end.x);
      person.setAttribute('cy', end.y);
      n.textContent = count ? String(count) : c.strings.none;
    };
    for (const b of btns) b.addEventListener('click', () => play(b));
  },

  height(el, c) {
    const ctl = el.querySelector('.sn-ctl--height');
    ctl.hidden = false;
    const range = ctl.querySelector('input[type="range"]');
    const btns = [...ctl.querySelectorAll('[data-optic]')];
    const slot = (k) => el.querySelector(`[data-slot="${k}"]`);
    let optic = c.optics.find((o) => o.id === c.start);
    const fmt = (v) => `${num(v)} m`;
    const draw = () => {
      const h = Number(range.value);
      slot('svg').innerHTML = heightSvg(optic, h, c.labels);
      slot('range').textContent = `${fmt(optic.min)} – ${fmt(optic.max)}`;
      slot('h').textContent = fmt(h);
      slot('detects').textContent = optic.detects;
      const ok = h <= optic.light;
      const li = slot('light');
      li.textContent = fill(ok ? c.strings.lightOk : c.strings.lightOver, { v: fmt(optic.light) });
      li.className = ok ? 'is-ok' : 'is-over';
      range.setAttribute('aria-valuetext', fmt(h));
    };
    const pick = (b) => {
      optic = c.optics.find((o) => o.id === b.dataset.optic);
      for (const x of btns) x.setAttribute('aria-checked', String(x === b));
      range.min = optic.min;
      range.max = optic.max;
      range.value = optic.max;
      draw();
    };
    for (const b of btns) b.addEventListener('click', () => pick(b));
    arrowKeys(ctl.querySelector('[role="radiogroup"]'), '[data-optic]', pick);
    range.addEventListener('input', draw);
    draw();
  },

  room: (el, c) => rm.room(el, c),
  place: (el, c) => rm.place(el, c),

  daylight(el, c) {
    const ctl = el.querySelector('.sn-ctl--day');
    ctl.hidden = false;
    const range = ctl.querySelector('input[type="range"]');
    const btns = [...ctl.querySelectorAll('[data-mode]')];
    let mode = c.start.mode;
    const draw = () => {
      const level = Number(range.value);
      const st = daylightState(level, c.levels.length, mode);
      el.querySelector('[data-slot="svg"]').innerHTML = daylightSvg(st, c.labels);
      for (const k of ['day', 'seen', 'art']) {
        const v = el.querySelector(`[data-slot="${k}"]`);
        v.textContent = String(st[k]);
        v.previousElementSibling.querySelector('i').style.width = `${st[k]}%`;
      }
      el.querySelector('[data-slot="level"]').textContent = c.levels[level];
      range.setAttribute('aria-valuetext', c.levels[level]);
      for (const b of btns) b.setAttribute('aria-checked', String(b.dataset.mode === mode));
      el.querySelectorAll('.sn-modes li').forEach((li) => li.classList.toggle('is-current', li.dataset.mode === mode));
    };
    const pick = (b) => {
      mode = b.dataset.mode;
      draw();
    };
    for (const b of btns) b.addEventListener('click', () => pick(b));
    arrowKeys(ctl.querySelector('[role="radiogroup"]'), '[data-mode]', pick);
    range.addEventListener('input', draw);
    draw();
    return {
      play(id) {
        const b = btns.find((x) => x.dataset.mode === id);
        if (b) pick(b);
        const last = c.levels.length - 1;
        if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
          range.value = String(last);
          return draw();
        }
        let l = 1;
        range.value = '1';
        draw();
        const step = () => {
          if (l >= last) return;
          l += 1;
          range.value = String(l);
          draw();
          setTimeout(step, 900);
        };
        setTimeout(step, 900);
      },
    };
  },

  sort: (el, c) => ex.sort(el, c),
  pick: (el) => ex.pick(el),
  spot: (el, c) => ex.spot(el, c),

  choose(el, c) {
    const form = el.querySelector('.sn-form');
    const res = el.querySelector('.sn-result');
    form.hidden = false;
    el.querySelector('.sn-static').hidden = true;
    form.addEventListener('submit', (ev) => ev.preventDefault());
    const draw = () => {
      const picks = Object.fromEntries(c.questions.map((q) => [q.id, form.querySelector(`input[name="${q.id}"]:checked`)?.value]));
      const any = Object.values(picks).some(Boolean);
      res.hidden = !any;
      if (!any) return;
      const r = chooseResult(c.questions, picks);
      for (const k of ['optic', 'interface', 'form']) res.querySelector(`[data-slot="${k}"]`).textContent = r[k] ?? c.strings.open;
      const list = (k, items) => {
        const ul = res.querySelector(`[data-slot="${k}"]`);
        ul.replaceChildren(...items.map((s) => Object.assign(document.createElement('li'), { textContent: s })));
      };
      list('why', r.why);
      list('check', [...r.check, c.strings.always]);
    };
    form.addEventListener('change', draw);
  },

  family(el) {
    const wrap = el.querySelector('.sn-filters');
    wrap.hidden = false;
    const btns = [...wrap.querySelectorAll('[data-filter]')];
    const rows = [...el.querySelectorAll('tr[data-form]')];
    let active = null;
    for (const b of btns) b.addEventListener('click', () => {
      active = active === b.dataset.filter ? null : b.dataset.filter;
      for (const x of btns) x.setAttribute('aria-pressed', String(x.dataset.filter === active));
      for (const r of rows) {
        if (!active) {
          r.classList.remove('is-dim', 'is-match');
          continue;
        }
        const [kind, id] = active.split(':');
        const list = (kind === 'itf' ? r.dataset.itfs : r.dataset.optics).split(' ');
        r.classList.toggle('is-match', list.includes(id));
        r.classList.toggle('is-dim', !list.includes(id));
      }
      for (const ch of el.querySelectorAll('.sn-chip')) {
        const [kind, id] = (active ?? ':').split(':');
        ch.classList.toggle('is-hit', Boolean(active) && ch.dataset[kind] === id);
      }
    });
  },
};

export function mount(el, config = {}) {
  const fn = MODES[config.mode];
  if (!fn) return;
  el.classList.add('is-enhanced');
  const api = fn(el, config) ?? {};
  if (config.predict) ex.predict(el, config.predict, config.predict.strings, () => config.predict.play && api.play?.(config.predict.play));
}
