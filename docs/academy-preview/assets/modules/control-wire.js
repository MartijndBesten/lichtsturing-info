import { esc } from './control-core.js';

const BTN = (x, y, label, id, hl, side = false) =>
  `<g class="ct-btn${hl ? ' is-hl' : ''}" data-input="${esc(id)}"><rect x="${x}" y="${y}" width="34" height="34" rx="5"/><rect class="ct-btn-key" x="${x + 9}" y="${y + 9}" width="16" height="16" rx="2"/>${side ? `<text class="ct-lbl" x="${x + 42}" y="${y + 11}">${esc(label)}</text>` : `<text class="ct-lbl" x="${x + 17}" y="${y + 48}" text-anchor="middle">${esc(label)}</text>`}</g>`;
const DEV = (x, y, kind, label) => {
  const icon = {
    armatuur: '<rect x="-12" y="-4" width="24" height="8" rx="2"/>',
    sensor: '<path d="M-7 2a7 7 0 0 1 14 0z"/><path d="M-9 6a10 10 0 0 0 18 0"/>',
  }[kind];
  return `<g class="ct-dev ct-dev--${kind}" transform="translate(${x} ${y})">${icon}</g>${label ? `<text class="ct-lbl ct-lbl--s" x="${x}" y="${y + 22}" text-anchor="middle">${esc(label)}</text>` : ''}`;
};

export function wiringSvg(model, { vertical = false, uid = 'w', title = '', highlight = null } = {}) {
  const w = model.wiring;
  const ins = w.inputs;
  const parts = [];
  const ceil = model.groups.filter((g) => !g.wall);
  const wall = model.groups.filter((g) => g.wall);
  if (!vertical) {
    const W = 760;
    const busY = 26;
    const boxH = 50 * ins.length + 40;
    const H = 42 + boxH + 20;
    parts.push(`<rect class="ct-box" x="170" y="42" width="150" height="${boxH}" rx="6"/>`);
    parts.push(`<text class="ct-box-title" x="245" y="${42 + boxH - 14}" text-anchor="middle">${esc(w.coupler)}</text>`);
    ins.forEach((inp, i) => {
      const y = 50 + i * 50;
      parts.push(`<path class="ch-line ch-line--contact" d="M58 ${y + 17}H170"/><circle class="ct-term" cx="170" cy="${y + 17}" r="3"/>`);
      parts.push(BTN(24, y, inp.label, inp.id, highlight === inp.id, true));
      parts.push(`<text class="ct-lbl ct-lbl--in" x="182" y="${y + 21}">${esc(inp.inLabel)}</text>`);
    });
    const devX = [];
    let x = 370;
    if (w.sensor) devX.push({ x, kind: 'sensor', label: w.sensor }), (x += 60);
    for (const g of [...ceil, ...wall]) {
      const n = g.count ?? 2;
      const start = x;
      for (let i = 0; i < n; i++) devX.push({ x, kind: 'armatuur' }), (x += 42);
      parts.push(`<path class="ct-bracket" d="M${start - 14} 100v6H${x - 28}v-6"/><text class="ct-lbl ct-lbl--g" x="${(start + x - 42) / 2}" y="122" text-anchor="middle">${esc(g.label)}</text>`);
      x += 20;
    }
    const ctlW = 132;
    const ctlX = Math.min(W - ctlW - 6, Math.max(x, 600));
    const cx = ctlX + ctlW / 2;
    parts.push(`<path class="ch-line ch-line--bus" d="M245 42L245 ${busY}H${cx}V160"/>`);
    for (const d of devX) parts.push(`<path class="ch-line ch-line--bus" d="M${d.x} ${busY}V58"/>`, DEV(d.x, 70, d.kind, d.label));
    parts.push(`<rect class="ct-box ct-box--ctl" x="${ctlX}" y="160" width="${ctlW}" height="48" rx="6"/>${twoLines(w.controller, cx, 180, 'ct-box-title ct-box-title--ctl')}`);
    parts.push(`<text class="ct-lbl ct-lbl--bus" x="${cx - 6}" y="${busY - 8}" text-anchor="end">${esc(w.busLabel)}</text>`);
    return svgWrap(parts, W, H, uid, title, 'ct-wire-svg ct-wire-svg--h');
  }
  const W = 360;
  const step = 80;
  const x0 = 180 - ((ins.length - 1) * step) / 2;
  parts.push(`<rect class="ct-box" x="20" y="120" width="320" height="56" rx="6"/><text class="ct-box-title" x="180" y="164" text-anchor="middle">${esc(w.coupler)}</text>`);
  ins.forEach((inp, i) => {
    const bx = x0 + i * step - 17;
    parts.push(BTN(bx, 10, inp.label, inp.id, highlight === inp.id));
    parts.push(`<path class="ch-line ch-line--contact" d="M${bx + 17} 70V120"/><circle class="ct-term" cx="${bx + 17}" cy="120" r="3"/><text class="ct-lbl ct-lbl--in" x="${bx + 17}" y="138" text-anchor="middle">${esc(inp.inShort)}</text>`);
  });
  let y = 216;
  const rows = [];
  if (w.sensor) rows.push({ kind: 'sensor', label: w.sensor });
  for (const g of [...ceil, ...wall]) for (let i = 0; i < (g.count ?? 2); i++) rows.push({ kind: 'armatuur', label: i === 0 ? g.label : '', group: g.id });
  const segs = [];
  for (const r of rows) {
    segs.push(`<path class="ch-line ch-line--bus" d="M40 ${y}H86"/>`, DEV(104, y, r.kind, ''));
    if (r.label) segs.push(`<text class="ct-lbl" x="128" y="${y + 4}">${esc(r.label)}</text>`);
    y += r.kind === 'sensor' ? 44 : 32;
  }
  const ctlY = y + 8;
  parts.push(`<path class="ch-line ch-line--bus" d="M40 176L40 ${ctlY + 22}H70"/>`, ...segs);
  parts.push(`<rect class="ct-box ct-box--ctl" x="70" y="${ctlY}" width="220" height="44" rx="6"/><text class="ct-box-title ct-box-title--ctl" x="180" y="${ctlY + 27}" text-anchor="middle">${esc(w.controller)}</text>`);
  parts.push(`<text class="ct-lbl ct-lbl--bus" x="48" y="200">${esc(w.busLabel)}</text>`);
  return svgWrap(parts, W, ctlY + 60, uid, title, 'ct-wire-svg ct-wire-svg--v');
}

function twoLines(label, x, y, cls) {
  const t = String(label ?? '');
  if (t.length <= 18) return `<text class="${cls}" x="${x}" y="${y + 8}" text-anchor="middle">${esc(t)}</text>`;
  const cut = t.lastIndexOf(' ', Math.ceil(t.length / 2) + 4);
  const a = cut > 0 ? t.slice(0, cut) : t;
  const b = cut > 0 ? t.slice(cut + 1) : '';
  return `<text class="${cls}" x="${x}" y="${y}" text-anchor="middle">${esc(a)}</text><text class="${cls}" x="${x}" y="${y + 15}" text-anchor="middle">${esc(b)}</text>`;
}

function svgWrap(parts, W, H, uid, title, cls) {
  const t = title ? `<title id="${esc(uid)}-t">${esc(title)}</title>` : '';
  return `<svg class="${cls}" viewBox="0 0 ${W} ${H}" role="img"${title ? ` aria-labelledby="${esc(uid)}-t"` : ' aria-hidden="true"'}>${t}${parts.join('')}</svg>`;
}

