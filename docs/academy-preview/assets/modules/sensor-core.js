
export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const fill = (str, vars = {}) => String(str ?? '').replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
export const num = (n, locale = 'nl-NL') => new Intl.NumberFormat(locale, { maximumFractionDigits: 1 }).format(n);
const r1 = (n) => Math.round(n * 10) / 10;

export const PIR = { cx: 280, cy: 180, R: 150, W: 560, H: 350 };

export function segmentAt(p, rings, sectors) {
  const dx = p.x - PIR.cx;
  const dy = p.y - PIR.cy;
  const r = Math.hypot(dx, dy);
  if (r > PIR.R) return null;
  const k = Math.min(rings - 1, Math.floor((r / PIR.R) * rings));
  let a = Math.atan2(dy, dx);
  if (a < 0) a += 2 * Math.PI;
  const j = Math.floor((a / (2 * Math.PI)) * sectors) % sectors;
  return { k, j, active: (k + j) % 2 === 0 };
}

export function pirPath(kind, rings, sectors) {
  const { cx, cy } = PIR;
  const pts = [];
  const step = 2 * Math.PI / sectors;
  if (kind === 'tangentieel') {
    for (let x = 60; x <= 500; x += 2) pts.push({ x, y: cy - 92 });
  } else if (kind === 'radiaal') {
    const a = (Math.round((7 * Math.PI / 4) / step) + 0.5) * step; // midden van een sector, rechtsboven
    for (let r = 215; r >= 26; r -= 2) pts.push({ x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) });
  } else {
    const near = kind === 'klein-dichtbij';
    const rr = near ? PIR.R * 0.28 : PIR.R * 0.86;
    const a0 = (Math.round((near ? 0.8 : 0.85) * Math.PI / step) + 0.5) * step;
    for (let t = 0; t <= 2; t += 0.02) {
      const off = 14 * Math.sin(t * Math.PI); // ± 14 px: dezelfde kleine beweging op beide plekken
      const a = a0 + off / rr;
      pts.push({ x: cx + rr * Math.cos(a), y: cy + rr * Math.sin(a) });
    }
  }
  return pts.map((p) => ({ x: r1(p.x), y: r1(p.y) }));
}

export function pirChanges(pts, rings, sectors) {
  let prev = null;
  let n = 0;
  for (const p of pts) {
    const s = segmentAt(p, rings, sectors);
    const key = s ? `${s.k}-${s.j}` : null;
    if (key && prev && key !== prev) n++;
    if (key) prev = key;
  }
  return n;
}

export function pirSvg(cfg, labels) {
  const { cx, cy, R, W, H } = PIR;
  const { rings, sectors } = cfg;
  const seg = [];
  for (let k = 0; k < rings; k++) {
    const r0 = (R * k) / rings;
    const r1v = (R * (k + 1)) / rings;
    for (let j = 0; j < sectors; j++) {
      const a0 = (2 * Math.PI * j) / sectors;
      const a1 = (2 * Math.PI * (j + 1)) / sectors;
      const P = (r, a) => `${r1(cx + r * Math.cos(a))} ${r1(cy + r * Math.sin(a))}`;
      const d = k === 0
        ? `M${cx} ${cy}L${P(r1v, a0)}A${r1v} ${r1v} 0 0 1 ${P(r1v, a1)}Z`
        : `M${P(r0, a0)}L${P(r1v, a0)}A${r1v} ${r1v} 0 0 1 ${P(r1v, a1)}L${P(r0, a1)}A${r0} ${r0} 0 0 0 ${P(r0, a0)}Z`;
      seg.push(`<path class="sn-seg${(k + j) % 2 === 0 ? ' sn-seg--on' : ''}" data-seg="${k}-${j}" d="${d}"/>`);
    }
  }
  const paths = cfg.paths.map((p) => {
    const pts = pirPath(p.kind, rings, sectors);
    const d = `M${pts.map((q) => `${q.x} ${q.y}`).join('L')}`;
    const end = pts[pts.length - 1];
    return `<g class="sn-walk" data-path="${esc(p.id)}"><path class="sn-walk-line" d="${d}"/>${p.kind.startsWith('klein') ? '' : `<circle class="sn-walk-end" cx="${end.x}" cy="${end.y}" r="3"/>`}<text class="sn-walk-label" x="${r1(pts[0].x + (p.kind === 'radiaal' ? -6 : 0))}" y="${r1(pts[0].y - 8)}" text-anchor="${p.kind === 'radiaal' ? 'end' : 'start'}">${esc(p.short)}</text></g>`;
  }).join('');
  return `<svg class="sn-svg sn-svg--pir" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(labels.title)}">
<g class="sn-field">${seg.join('')}<circle class="sn-field-edge" cx="${cx}" cy="${cy}" r="${R}"/></g>
${paths}
<g class="sn-sensor-top"><circle cx="${cx}" cy="${cy}" r="9"/><circle class="sn-sensor-eye" cx="${cx}" cy="${cy}" r="3.5"/></g>
<text class="sn-cap" x="${cx}" y="${cy + R + 16}" text-anchor="middle">${esc(labels.sensor)}</text>
<circle class="sn-person" cx="-20" cy="-20" r="7"/>
</svg>`;
}

const FLOOR = 262;
const footprint = (h, k, shape) => Math.min(shape === 'gang' ? 330 : 300, h * k * (shape === 'gang' ? 2 : 1.4));

export function heightState(optic, h) {
  const inRange = h >= optic.min && h <= optic.max;
  const light = h <= optic.light;
  return { inRange, light };
}

export function heightSvg(optic, h, labels, locale = 'nl-NL') {
  const k = 214 / optic.max; // per optiek geschaald: de persoon geeft de maat
  const ceil = FLOOR - h * k;
  const sx = 210;
  const w = footprint(h, k, optic.shape);
  const inner = w * 0.55;
  const person = Math.max(10, 1.8 * k);
  const px = 330;
  const lightY = FLOOR - optic.light * k;
  const st = heightState(optic, h);
  const ins = Math.max(0.35, h / optic.max);
  const top = optic.shape === 'gang'
    ? `<ellipse class="sn-zone sn-zone--t" cx="484" cy="128" rx="${r1(62 * ins)}" ry="${r1(22 * ins)}"/><ellipse class="sn-zone sn-zone--r" cx="484" cy="128" rx="${r1(40 * ins)}" ry="${r1(12 * ins)}"/>`
    : `<circle class="sn-zone sn-zone--t" cx="484" cy="128" r="${r1(58 * ins)}"/><circle class="sn-zone sn-zone--r" cx="484" cy="128" r="${r1(32 * ins)}"/>`;
  const side = `<svg class="sn-svg sn-svg--height" viewBox="0 0 410 312" role="img" aria-label="${esc(fill(labels.aria, { optic: optic.label, h: num(h, locale) }))}">
<rect class="sn-floor" x="40" y="${FLOOR}" width="360" height="6"/>
<rect class="sn-ceiling" x="40" y="${r1(ceil - 8)}" width="360" height="8"/>
${optic.light < optic.max ? `<g class="sn-lightmax${st.light ? '' : ' is-over'}"><path d="M44 ${r1(lightY)}H396"/><text x="396" y="${r1(lightY - 5)}" text-anchor="end">${esc(fill(labels.lightMax, { v: num(optic.light, locale) }))}</text></g>` : ''}
<g class="sn-dim"><path d="M26 ${FLOOR}V${r1(ceil)}"/><path d="M21 ${FLOOR}H31M21 ${r1(ceil)}H31"/><text x="20" y="${r1((FLOOR + ceil) / 2)}" transform="rotate(-90 20 ${r1((FLOOR + ceil) / 2)})" text-anchor="middle">${esc(fill(labels.h, { v: num(h, locale) }))}</text></g>
<ellipse class="sn-zone sn-zone--t" cx="${sx}" cy="${FLOOR}" rx="${r1(w / 2)}" ry="5"/>
<ellipse class="sn-zone sn-zone--r" cx="${sx}" cy="${FLOOR}" rx="${r1(inner / 2)}" ry="3.5"/>
<path class="sn-recessed" d="M${sx - 8} ${r1(ceil)}A8 7 0 0 0 ${sx + 8} ${r1(ceil)}Z"/>
<g class="sn-human" transform="translate(${px} ${r1(FLOOR - person)})"><circle cx="0" cy="${r1(person * 0.11)}" r="${r1(person * 0.11)}"/><path d="M0 ${r1(person * 0.22)}V${r1(person * 0.62)}M0 ${r1(person * 0.62)}L${r1(-person * 0.12)} ${r1(person)}M0 ${r1(person * 0.62)}L${r1(person * 0.12)} ${r1(person)}M${r1(-person * 0.16)} ${r1(person * 0.34)}H${r1(person * 0.16)}"/></g>
<text class="sn-cap" x="400" y="${FLOOR + 44}" text-anchor="end">${esc(labels.person)}</text>
<text class="sn-cap sn-cap--detect" x="40" y="${FLOOR + 24}">${esc(labels.floor)}</text>
</svg>`;
  const topView = `<svg class="sn-svg sn-svg--inset" viewBox="414 34 140 190" role="img" aria-label="${esc(labels.top)}"><g class="sn-inset"><rect x="414" y="34" width="140" height="190" rx="6"/><text x="484" y="52" text-anchor="middle">${esc(labels.top)}</text>${top}<circle class="sn-sensor-eye" cx="484" cy="128" r="3"/>
<text x="484" y="${optic.shape === 'gang' ? 178 : 202}" text-anchor="middle" class="sn-key sn-key--t">${esc(labels.tang)}</text><text x="484" y="${optic.shape === 'gang' ? 194 : 216}" text-anchor="middle" class="sn-key sn-key--r">${esc(labels.rad)}</text></g></svg>`;
  return side + topView;
}

export function daylightState(level, levels, mode) {
  const day = Math.round((100 * level) / (levels - 1));
  const art = mode === 'drempel' ? (day < 50 ? 100 : 0) : Math.max(0, Math.min(100, 100 - day));
  const seen = Math.min(100, Math.round(0.6 * day + 0.6 * art));
  return { day, art, seen };
}

export function daylightSvg(st, labels) {
  const a = (st.art / 100) * 0.75;
  const dw = (st.day / 100) * 0.7;
  const C = 30;
  const F = 200;
  return `<svg class="sn-svg sn-svg--day" viewBox="0 0 560 230" role="img" aria-label="${esc(labels.title)}">
<path class="sn-daywedge" style="opacity:${r1(dw * 10) / 10 + 0.02}" d="M40 52L40 150L300 ${F}L120 ${F}Z"/>
<path class="sn-beam" style="opacity:${r1(a * 10) / 10}" d="M186 ${C + 3}H234L274 ${F}H146Z"/>
<path class="sn-beam sn-beam--inner" d="M396 ${C + 3}H444L484 ${F}H356Z"/>
<rect class="sn-ceiling" x="40" y="${C - 8}" width="490" height="8"/><rect class="sn-floor" x="40" y="${F}" width="490" height="5"/>
<path class="sn-wallside" d="M40 ${C}V${F}M530 ${C}V${F}"/><path class="sn-window" d="M40 52V150"/>
<rect class="sn-lum" x="186" y="${C}" width="48" height="4"/><rect class="sn-lum sn-lum--inner" x="396" y="${C}" width="48" height="4"/>
<rect class="sn-desk" x="150" y="${F - 30}" width="130" height="4"/><path class="sn-desk-leg" d="M154 ${F - 26}V${F}M276 ${F - 26}V${F}"/>
<path class="sn-recessed" d="M293 ${C}A7 6 0 0 0 307 ${C}Z"/>
<text class="sn-cap" x="210" y="${C + 22}" text-anchor="middle">${esc(labels.window)}</text>
<text class="sn-cap" x="430" y="${C + 22}" text-anchor="middle">${esc(labels.inner)}</text>
<text class="sn-cap sn-cap--detect" x="300" y="${C - 12}" text-anchor="middle">${esc(labels.sensor)}</text>
<text class="sn-cap sn-cap--day" x="48" y="${F - 6}">${esc(labels.day)}</text>
</svg>`;
}

export function chooseResult(questions, picks) {
  const out = { optic: null, interface: null, form: null, why: [], check: [] };
  for (const q of questions) {
    const o = q.options.find((x) => x.id === picks[q.id]);
    if (!o) continue;
    for (const k of ['optic', 'interface', 'form']) if (o[k]) out[k] = o[k];
    out.why.push(o.why);
    if (o.check) out.check.push(o.check);
  }
  return out;
}
