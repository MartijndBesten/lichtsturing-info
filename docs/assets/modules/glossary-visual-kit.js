export const NS = 'http://www.w3.org/2000/svg';
export const fill = (s, vars) => String(s ?? '').replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
export const svgEl = (name, attrs = {}) => {
  const n = document.createElementNS(NS, name);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  return n;
};
export const node = (tag, cls, text) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
};
export const button = (label, cls = '') => {
  const b = node('button', `glossary-demo-button ${cls}`.trim(), label);
  b.type = 'button';
  return b;
};
export const baseSvg = (label, h = 260) => {
  const svg = svgEl('svg', { viewBox: `0 0 720 ${h}`, role: 'img', 'aria-label': label });
  svg.classList.add('glossary-svg');
  return svg;
};
export const onActivate = (n, fn) => {
  n.addEventListener('click', fn);
  n.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); fn(); } });
};
export const replay = (n, cls = 'is-run') => {
  n.classList.remove(cls);
  void n.getBoundingClientRect();
  n.classList.add(cls);
};
const statusLine = (text) => {
  const p = node('p', 'gv-status', text);
  p.setAttribute('aria-live', 'polite');
  return p;
};

function room(stage, it, L) {
  const svg = baseSvg(L.roomFigure, 232);
  const zone1 = svgEl('path', { d: 'M360 47 L205 220 L360 220 Z', class: 'gv-zone gv-zone-a' });
  const zone2 = svgEl('path', { d: 'M360 47 L360 220 L515 220 Z', class: 'gv-zone gv-zone-b' });
  const sensor = svgEl('g', { class: 'gv-sensor' });
  sensor.append(svgEl('rect', { x: 332, y: 24, width: 56, height: 18, rx: 7 }), svgEl('circle', { cx: 360, cy: 46, r: 9 }));
  const person = svgEl('g', { class: 'gv-person', tabindex: '0', role: 'button', 'aria-label': L.roomPerson });
  person.append(
    svgEl('circle', { cx: 250, cy: 137, r: 12 }),
    svgEl('line', { x1: 250, y1: 149, x2: 250, y2: 188 }),
    svgEl('line', { x1: 250, y1: 160, x2: 232, y2: 176 }),
    svgEl('line', { x1: 250, y1: 160, x2: 269, y2: 176 }),
    svgEl('line', { x1: 250, y1: 188, x2: 235, y2: 214 }),
    svgEl('line', { x1: 250, y1: 188, x2: 266, y2: 214 }),
  );
  const status = statusLine(L.roomStart);
  svg.append(zone1, zone2, svgEl('line', { x1: 40, y1: 35, x2: 680, y2: 35, class: 'gv-line' }), svgEl('line', { x1: 40, y1: 220, x2: 680, y2: 220, class: 'gv-line' }), sensor, person);
  stage.append(svg, status);
  let right = false;
  onActivate(person, () => {
    right = !right;
    person.style.transform = right ? 'translateX(220px)' : 'translateX(0)';
    zone1.classList.toggle('is-active', !right);
    zone2.classList.toggle('is-active', right);
    status.textContent = it.v === 'pir' ? L.roomPir : right ? L.roomIn : L.roomOut;
  });
}

function network(stage, it, L) {
  const svg = baseSvg(L.netFigure, 200);
  const pts = [[110, 150], [250, 85], [370, 165], [500, 90], [620, 155]];
  for (const [a, b] of [[0, 1], [1, 2], [2, 3], [3, 4], [1, 3]]) svg.append(svgEl('line', { x1: pts[a][0], y1: pts[a][1], x2: pts[b][0], y2: pts[b][1], class: 'gv-link' }));
  const nodes = pts.map(([x, y], i) => {
    const g = svgEl('g', { class: 'gv-node', tabindex: '0', role: 'button', 'aria-label': fill(L.netNode, { n: i + 1 }) });
    const t = svgEl('text', { x, y, 'text-anchor': 'middle', 'dominant-baseline': 'central' });
    t.textContent = String(i + 1);
    g.append(svgEl('circle', { cx: x, cy: y, r: 24 }), t);
    svg.append(g);
    return g;
  });
  const packet = svgEl('circle', { cx: 110, cy: 150, r: 7, class: 'gv-packet gv-packet--route' });
  const label = statusLine(L.netStart);
  svg.append(packet);
  stage.append(svg, label);
  let off = -1;
  nodes.forEach((g, i) => onActivate(g, () => {
    off = off === i ? -1 : i;
    nodes.forEach((n, j) => n.classList.toggle('is-off', j === off));
    label.textContent = off < 0 ? L.netAll : fill(L.netOff, { n: off + 1 });
    replay(packet);
  }));
  return () => replay(packet);
}

function bus(stage, it, L) {
  const wrap = node('div', 'gv-bus-wrap');
  const svg = baseSvg(L.busFigure, 160);
  svg.append(svgEl('line', { x1: 70, y1: 125, x2: 650, y2: 125, class: 'gv-bus' }));
  const devices = [130, 240, 350, 460, 570].map((x) => {
    svg.append(svgEl('line', { x1: x, y1: 125, x2: x, y2: 72, class: 'gv-drop' }));
    const r = svgEl('rect', { x: x - 28, y: 38, width: 56, height: 34, rx: 7, class: 'gv-device' });
    svg.append(r);
    return r;
  });
  const power = svgEl('circle', { cx: 70, cy: 125, r: 16, class: 'gv-power is-on' });
  const packet = svgEl('circle', { cx: 90, cy: 125, r: 7, class: 'gv-packet gv-packet--bus' });
  const status = statusLine(L.busReady);
  svg.append(power, packet);
  const controls = node('div', 'glossary-controls');
  const send = button(it.v === 'power' ? L.busPower : L.busSend);
  controls.append(send);
  wrap.append(svg, status, controls);
  stage.append(wrap);
  let on = true;
  send.addEventListener('click', () => {
    if (it.v === 'power') {
      on = !on;
      power.classList.toggle('is-on', on);
      svg.classList.toggle('is-bus-off', !on);
      status.textContent = on ? L.busOn : L.busOff;
      return;
    }
    devices.forEach((d, i) => setTimeout(() => d.classList.add('is-active'), 250 + i * 110));
    setTimeout(() => devices.forEach((d) => d.classList.remove('is-active')), 1400);
    replay(packet);
    status.textContent = L.busSent;
  });
}

function signal(stage, it, L) {
  const nfc = it.v === 'nfc';
  const svg = baseSvg(L.signalFigure, 185);
  const device = (x, label) => {
    const g = svgEl('g', { class: 'gv-radio-device' });
    const t = svgEl('text', { x: x + 40, y: 125, 'text-anchor': 'middle', 'dominant-baseline': 'central' });
    t.textContent = label;
    g.append(svgEl('rect', { x: x - 35, y: 90, width: 150, height: 70, rx: 12 }), t);
    return g;
  };
  const waves = [1, 2, 3].map((i) => svgEl('path', { d: `M ${210 + i * 35} 80 Q 360 125 ${210 + i * 35} 170`, class: `gv-wave gv-wave--${i}` }));
  const status = statusLine(L.signalStart);
  svg.append(device(90, nfc ? L.signalSenderNfc : L.signalSender), ...waves, device(550, L.signalReceiver));
  const run = button(nfc ? L.signalSendNfc : L.signalSend);
  run.addEventListener('click', () => {
    waves.forEach((w) => replay(w));
    status.textContent = nfc ? L.signalSentNfc : L.signalSent;
  });
  stage.append(svg, status, run);
}

export const SVG_DRAW = { room, network, bus, signal };
