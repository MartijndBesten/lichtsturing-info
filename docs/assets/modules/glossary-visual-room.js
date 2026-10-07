import { baseSvg, button, fill, node, svgEl } from './glossary-visual-kit.js';

const status = (text) => { const p = node('p', 'gv-status', text); p.setAttribute('aria-live', 'polite'); return p; };
const label = (x, y, text, anchor = 'middle') => { const t = svgEl('text', { x, y, class: 'gv-label', 'text-anchor': anchor }); t.textContent = text; return t; };
const person = (x) => {
  const g = svgEl('g', { class: 'gv-person' });
  g.append(
    svgEl('ellipse', { cx: x, cy: 172, rx: 34, ry: 52, class: 'gv-heat' }),
    svgEl('circle', { cx: x, cy: 137, r: 12 }), svgEl('line', { x1: x, y1: 149, x2: x, y2: 188 }),
    svgEl('line', { x1: x, y1: 160, x2: x - 18, y2: 176 }), svgEl('line', { x1: x, y1: 160, x2: x + 19, y2: 176 }),
    svgEl('line', { x1: x, y1: 188, x2: x - 15, y2: 214 }), svgEl('line', { x1: x, y1: 188, x2: x + 16, y2: 214 }),
  );
  return g;
};

const SEGS = 9, X0 = 130, SW = 460 / SEGS, APEX = 36, FLOOR = 218, TORSO = 150, START = 100, END = 470, STEPS = 18;
function pir(stage, it, L) {
  const svg = baseSvg(L.pirFigure, 240);
  const segs = Array.from({ length: SEGS }, (_, k) => svgEl('path', { d: `M360 ${APEX} L${X0 + k * SW} ${FLOOR} L${X0 + (k + 1) * SW} ${FLOOR} Z`, class: `gv-seg${k % 2 ? ' gv-seg--odd' : ''}` }));
  const sensor = svgEl('g', { class: 'gv-sensor' });
  sensor.append(svgEl('rect', { x: 334, y: 18, width: 52, height: 14, rx: 6 }), svgEl('circle', { cx: 360, cy: 34, r: 8 }));
  const who = person(START);
  svg.append(...segs, svgEl('line', { x1: 30, y1: 28, x2: 690, y2: 28, class: 'gv-line' }), svgEl('line', { x1: 30, y1: FLOOR, x2: 690, y2: FLOOR, class: 'gv-line' }), sensor, label(322, 23, L.pirSensor, 'end'), who);
  const line = status(L.pirStart);
  const walk = button(L.pirWalk);
  stage.append(svg, line, walk);
  const segAt = (x) => { const k = Math.floor((360 + (x - 360) * ((FLOOR - APEX) / (TORSO - APEX)) - X0) / SW); return k >= 0 && k < SEGS ? k : -1; };
  let dx = 0, timer = null;
  const clear = () => segs.forEach((s) => s.classList.remove('is-now', 'is-seen'));
  walk.addEventListener('click', () => {
    if (timer) return;
    const dir = dx > 0 ? -1 : 1;
    const seen = new Set();
    let i = 0;
    clear();
    timer = setInterval(() => {
      i += 1;
      dx = dir > 0 ? ((END - START) * i) / STEPS : ((END - START) * (STEPS - i)) / STEPS;
      who.style.transform = `translateX(${dx}px)`;
      const k = segAt(START + dx);
      segs.forEach((s, j) => { s.classList.toggle('is-now', j === k); if (j === k) { s.classList.add('is-seen'); seen.add(j); } });
      line.textContent = seen.size ? fill(L.pirCross, { n: seen.size }) : L.pirOutside;
      if (i >= STEPS) {
        clearInterval(timer);
        timer = null;
        setTimeout(() => { clear(); line.textContent = dir > 0 ? L.pirStill : L.pirOutside; }, 900);
      }
    }, 170);
  });
}

const ROOM = [40, 30, 560, 370], DOOR = [260, 320], HALL = 700, CAB = [330, 100, 374, 220], DESK = [150, 310], ROUTE = [[560, 290], [260, 290]];
const R = 200, NEAR = 100, OVER = 3.5; // veldstraal, bereik voor kleine bewegingen; zichtlijn over de kast: H/(H−h) bij 2,8 m plafond en 2 m kast
const PRESETS = [['posMid', 300, 200], ['posWall', 300, 55], ['posCorner', 85, 75], ['posAtDesk', 170, 250], ['posDoor', 500, 180]];
let uid = 0;
function positie(stage, it, L) {
  const id = `gvp${(uid += 1)}`;
  const svg = baseSvg(L.posFigure, 400);
  svg.classList.add('gv-pos');
  const defs = svgEl('defs');
  const clipRoom = svgEl('clipPath', { id: `${id}-room` });
  const wedge = svgEl('polygon');
  clipRoom.append(svgEl('rect', { x: ROOM[0], y: ROOM[1], width: ROOM[2] - ROOM[0], height: ROOM[3] - ROOM[1] }), wedge);
  const clipField = svgEl('clipPath', { id: `${id}-field` });
  const clipCircle = svgEl('circle', { r: R });
  clipField.append(clipCircle);
  defs.append(clipRoom, clipField);
  const field = svgEl('circle', { r: R, class: 'gv-pos-field' });
  const near = svgEl('circle', { r: NEAR, class: 'gv-pos-near' });
  const shadow = svgEl('g', { class: 'gv-pos-shadow', 'clip-path': `url(#${id}-field)` });
  const quads = [0, 1, 2, 3].map(() => { const p = svgEl('polygon'); shadow.append(p); return p; });
  const clipped = svgEl('g', { 'clip-path': `url(#${id}-room)` });
  clipped.append(field, near, shadow);
  const desk = svgEl('g', { class: 'gv-pos-desk' });
  desk.append(svgEl('rect', { x: 100, y: 240, width: 90, height: 50, rx: 4 }), svgEl('circle', { cx: DESK[0], cy: DESK[1], r: 11 }));
  const route = svgEl('g', { class: 'gv-pos-route' });
  route.append(svgEl('line', { x1: ROUTE[0][0], y1: ROUTE[0][1], x2: ROUTE[1][0] + 14, y2: ROUTE[1][1] }), svgEl('path', { d: `M${ROUTE[1][0] + 16} ${ROUTE[1][1] - 9} L${ROUTE[1][0]} ${ROUTE[1][1]} L${ROUTE[1][0] + 16} ${ROUTE[1][1] + 9} Z` }));
  const sensor = svgEl('g', { class: 'gv-pos-sensor', tabindex: '0', role: 'button', 'aria-label': L.posSensor });
  const grip = svgEl('circle', { r: 28, class: 'gv-pos-grip' });
  sensor.append(grip, svgEl('circle', { r: 15, class: 'gv-pos-dome' }), svgEl('circle', { r: 5, class: 'gv-pos-eye' }));
  svg.append(defs, svgEl('rect', { x: ROOM[2], y: ROOM[1], width: HALL - ROOM[2], height: ROOM[3] - ROOM[1], class: 'gv-pos-hall' }), clipped,
    svgEl('path', { d: `M${ROOM[0]} ${ROOM[1]} H${ROOM[2]} V${DOOR[0]} M${ROOM[2]} ${DOOR[1]} V${ROOM[3]} H${ROOM[0]} V${ROOM[1]}`, class: 'gv-pos-wall' }),
    svgEl('rect', { x: CAB[0], y: CAB[1], width: CAB[2] - CAB[0], height: CAB[3] - CAB[1], class: 'gv-pos-cab' }),
    desk, route, label(145, 345, L.posDesk), label(352, 90, L.posCabinet), label(630, 60, L.posHall), sensor);
  const list = node('ul', 'gv-pos-list');
  list.setAttribute('aria-live', 'polite');
  const rows = ['desk', 'route', 'door'].map(() => { const li = node('li'); list.append(li); return li; });
  const controls = node('div', 'glossary-controls');
  stage.append(svg, list, controls);

  let S = [0, 0];
  const sx = (p) => (p[0] - S[0]) * OVER + S[0], sy = (p) => (p[1] - S[1]) * OVER + S[1];
  const row = (li, state, text) => { li.dataset.state = state; li.textContent = text; };
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  const inRect = (x, y) => x >= CAB[0] && x <= CAB[2] && y >= CAB[1] && y <= CAB[3];
  const hidden = (p) => { for (let t = 1 - 1 / OVER; t <= 1; t += 0.02) if (inRect(S[0] + (p[0] - S[0]) * t, S[1] + (p[1] - S[1]) * t)) return true; return false; };
  const place = (x, y) => {
    x = Math.min(ROOM[2] - 24, Math.max(ROOM[0] + 24, x)); y = Math.min(ROOM[3] - 24, Math.max(ROOM[1] + 24, y));
    if (inRect(x, y)) x = x - CAB[0] < CAB[2] - x ? CAB[0] - 24 : CAB[2] + 24;
    S = [x, y];
    for (const c of [field, near, clipCircle]) { c.setAttribute('cx', x); c.setAttribute('cy', y); }
    sensor.setAttribute('transform', `translate(${x} ${y})`);
    const t = (HALL - x) / (ROOM[2] - x);
    const far = (yy) => [HALL, (yy - y) * t + y];
    wedge.setAttribute('points', [[ROOM[2], DOOR[0]], [ROOM[2], DOOR[1]], far(DOOR[1]), far(DOOR[0])].map((p) => p.join(',')).join(' '));
    const c = [[CAB[0], CAB[1]], [CAB[2], CAB[1]], [CAB[2], CAB[3]], [CAB[0], CAB[3]]];
    quads.forEach((q, i) => { const a = c[i], b = c[(i + 1) % 4]; q.setAttribute('points', [a, b, [sx(b), sy(b)], [sx(a), sy(a)]].map((p) => p.join(',')).join(' ')); });
    const dd = dist(S, DESK), hid = dd <= R && hidden(DESK);
    const ds = hid || dd > R ? 'bad' : dd <= NEAR ? 'ok' : 'warn';
    row(rows[0], ds, hid ? L.posDeskHidden : dd > R ? L.posDeskOut : dd <= NEAR ? L.posDeskNear : L.posDeskFar);
    desk.dataset.state = ds;
    const [[ax, ay], [ex]] = ROUTE;
    const dr = x >= ex && x <= ax ? Math.abs(y - ay) : Math.min(dist(S, ROUTE[0]), dist(S, ROUTE[1]));
    const along = ax - x, perp = Math.abs(y - ay);
    const rs = dr > R ? 'bad' : along > 0 && perp < along * 0.45 ? 'warn' : 'ok';
    row(rows[1], rs, dr > R ? L.posRouteOut : rs === 'warn' ? L.posRouteToward : L.posRouteAcross);
    route.dataset.state = rs;
    const dDoor = y >= DOOR[0] && y <= DOOR[1] ? ROOM[2] - x : Math.min(dist(S, [ROOM[2], DOOR[0]]), dist(S, [ROOM[2], DOOR[1]]));
    row(rows[2], dDoor <= R ? 'warn' : 'ok', dDoor <= R ? L.posDoorLeak : L.posDoorOk);
  };
  const pt = (e) => new DOMPoint(e.clientX, e.clientY).matrixTransform(svg.getScreenCTM().inverse());
  let drag = null;
  sensor.addEventListener('pointerdown', (e) => { if (e.button) return; const p = pt(e); drag = [S[0] - p.x, S[1] - p.y]; sensor.setPointerCapture(e.pointerId); });
  sensor.addEventListener('pointermove', (e) => { if (!drag) return; const p = pt(e); place(p.x + drag[0], p.y + drag[1]); });
  for (const ev of ['pointerup', 'pointercancel']) sensor.addEventListener(ev, () => { drag = null; });
  svg.addEventListener('click', (e) => { if (!sensor.contains(e.target)) { const p = pt(e); place(p.x, p.y); } });
  sensor.addEventListener('keydown', (e) => {
    const d = { ArrowLeft: [-15, 0], ArrowRight: [15, 0], ArrowUp: [0, -15], ArrowDown: [0, 15] }[e.key];
    if (!d) return;
    e.preventDefault();
    place(S[0] + d[0], S[1] + d[1]);
  });
  for (const [k, x, y] of PRESETS) {
    const b = button(L[k], 'secondary');
    b.addEventListener('click', () => { place(x, y); sensor.focus({ preventScroll: true }); });
    controls.append(b);
  }
  place(PRESETS[0][1], PRESETS[0][2]);
}

export const ROOM_DRAW = { pir, positie };
