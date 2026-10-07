import { SVG_DRAW, button, fill, node } from './glossary-visual-kit.js';
import { ROOM_DRAW } from './glossary-visual-room.js';

function timeline(stage, it, L) {
  const box = node('div', 'gv-timeline-box');
  const clock = node('div', 'gv-clock', '10');
  const bar = node('div', 'gv-timeline');
  const fillBar = node('div', 'gv-timeline-fill');
  bar.append(fillBar);
  const controls = node('div', 'glossary-controls');
  const start = button(L.timeStart);
  const reset = button(L.timeReset, 'secondary');
  controls.append(start, reset);
  box.append(clock, bar, controls);
  stage.append(box);
  let timer = null;
  let value = 10;
  const paint = () => { clock.textContent = String(value); fillBar.style.width = `${value * 10}%`; };
  const stop = () => { if (timer) clearInterval(timer); timer = null; };
  const run = () => { stop(); timer = setInterval(() => { value -= 1; paint(); if (value <= 0) stop(); }, 500); };
  start.addEventListener('click', run);
  reset.addEventListener('click', () => { value = 10; paint(); run(); });
  paint();
}

function threshold(stage, it, L, cfg) {
  const box = node('div', 'gv-threshold-box');
  const sun = node('div', 'gv-sun', '☀');
  sun.setAttribute('aria-hidden', 'true');
  const lum = node('div', 'gv-luminaire');
  const cone = node('div', 'gv-light-cone');
  lum.append(cone);
  const value = node('div', 'gv-value');
  value.setAttribute('aria-live', 'polite');
  const input = document.createElement('input');
  Object.assign(input, { type: 'range', min: '0', max: '100', value: '35' });
  input.setAttribute('aria-label', L.levelInput);
  box.append(sun, lum, value, input);
  stage.append(box);
  const c = cfg.colour || {};
  const paint = () => {
    const v = Number(input.value);
    if (it.v === 'colour') {
      value.textContent = `${Math.round(c.from + (c.to - c.from) * (v / 100))} ${c.unit}`;
      cone.style.opacity = '.82';
      cone.style.filter = `sepia(${Math.max(0, 55 - v) / 100}) saturate(1.15)`;
    } else {
      value.textContent = fill(L.levelDaylight, { d: v, k: 100 - v });
      cone.style.opacity = String(0.15 + ((100 - v) / 100) * 0.85);
    }
  };
  input.addEventListener('input', paint);
  paint();
}

function layers(stage, it, L, cfg) {
  const box = node('div', 'gv-layers');
  (cfg.layers[it.v === 'security' || it.v === 'stack' ? it.v : 'standaard'] || []).forEach((label, i) => {
    const layer = button(label, 'gv-layer');
    layer.className = 'gv-layer';
    layer.style.setProperty('--i', i);
    layer.addEventListener('click', () => layer.classList.toggle('is-open'));
    box.append(layer);
  });
  stage.append(box);
}

function flow(stage, it, L, cfg) {
  const box = node('div', 'gv-flow');
  const steps = cfg.flow.map((label, i) => {
    const n = node('div', 'gv-flow-node', label);
    box.append(n);
    if (i < cfg.flow.length - 1) box.append(node('span', 'gv-flow-arrow', '→'));
    return n;
  });
  const run = button(L.play);
  run.addEventListener('click', () => steps.forEach((n, i) => {
    n.classList.remove('is-active');
    setTimeout(() => n.classList.add('is-active'), i * 260);
    setTimeout(() => n.classList.remove('is-active'), 1500 + i * 260);
  }));
  stage.append(box, run);
}

function compare(stage, it, L) {
  const box = node('div', 'gv-compare');
  const wire = it.v === 'wire';
  const pane = (title, text, on) => {
    const p = node('div', `gv-compare-pane${on ? ' is-active' : ''}`);
    p.append(node('strong', null, title), node('span', null, text));
    return p;
  };
  const a = pane(wire ? L.compareWireA : L.compareA, L.compareAText, true);
  const b = pane(wire ? L.compareWireB : L.compareB, L.compareBText, false);
  const toggle = button(L.compareToggle);
  toggle.addEventListener('click', () => { a.classList.toggle('is-active'); b.classList.toggle('is-active'); });
  box.append(a, b);
  stage.append(box, toggle);
}

function decision(stage, it, L, cfg) {
  const box = node('div', 'gv-decision');
  const out = node('div', 'gv-decision-out', L.decisionEmpty);
  out.setAttribute('aria-live', 'polite');
  const row = node('div', 'glossary-controls');
  cfg.decision.forEach((o, i) => {
    const b = button(o.label, i ? 'secondary' : '');
    b.addEventListener('click', () => {
      for (const c of row.children) c.classList.remove('is-selected');
      b.classList.add('is-selected');
      out.textContent = o.text;
    });
    row.append(b);
  });
  box.append(node('strong', null, L.decisionQuestion), row, out);
  stage.append(box);
}

const DRAW = { ...SVG_DRAW, ...ROOM_DRAW, timeline, threshold, layers, flow, compare, decision };

export function enhance(el, cfg) {
  const L = cfg.labels || {};
  for (const entry of el.querySelectorAll('.glossary-entry')) {
    const it = cfg.items?.[entry.id];
    const dd = entry.querySelector('dd');
    if (!it || !dd || !DRAW[it.k] || dd.querySelector('.glossary-demo-toggle')) continue;
    const term = entry.querySelector('.glossary-term')?.textContent?.trim() || '';
    const desc = dd.querySelector(':scope > p')?.textContent?.trim() || '';
    entry.classList.add('is-interactive');
    const shell = node('div', 'glossary-visual');
    shell.hidden = true;
    shell.id = `${entry.id}-visual`;
    shell.dataset.visual = it.k;
    shell.setAttribute('role', 'region');
    shell.setAttribute('aria-label', fill(L.region, { term }));
    const head = node('div', 'glossary-visual-head');
    head.append(node('strong', null, L.title), node('span', 'glossary-visual-hint', it.h || L.hint));
    const stage = node('div', 'glossary-stage');
    const note = node('p', 'glossary-takeaway');
    note.append(node('span', 'glossary-remember', L.remember), document.createTextNode(` ${it.n || desc}`));
    shell.append(head, stage, note);
    const onOpen = DRAW[it.k](stage, it, L, cfg);
    const toggle = button(L.open, 'glossary-demo-toggle');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', shell.id);
    toggle.addEventListener('click', () => {
      const open = shell.hidden;
      shell.hidden = !open;
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? L.close : L.open;
      entry.classList.toggle('is-visual-open', open);
      if (open) {
        shell.scrollIntoView({ block: 'nearest' });
        if (typeof onOpen === 'function') onOpen();
      }
    });
    const more = dd.querySelector('.glossary-more');
    if (more) dd.insertBefore(toggle, more);
    else dd.append(toggle);
    dd.append(shell);
  }
}
