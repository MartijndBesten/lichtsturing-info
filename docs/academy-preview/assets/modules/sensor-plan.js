import { esc } from './sensor-core.js';

const r1 = (n) => Math.round(n * 10) / 10;

export function planScale(sc) {
  const s = Math.min(520 / sc.width, 300 / sc.depth, 7);
  return { s, ox: 20, oy: 20, w: r1(sc.width * s), h: r1(sc.depth * s) };
}

export function planSvg(sc, state, labels) {
  const { s, ox, oy, w, h } = planScale(sc);
  const X = (v) => r1(ox + v * s);
  const Y = (v) => r1(oy + v * s);
  const pos = sc.positions.find((p) => p.id === state.pos) ?? null;
  const parts = [];
  parts.push(`<rect class="sn-room" x="${ox}" y="${oy}" width="${w}" height="${h}"/>`);
  if (state.daylight && sc.window && sc.window !== 'geen') {
    const id = `dl-${esc(sc.id)}-${state.uid ?? 0}`;
    parts.push(sc.window === 'links'
      ? `<defs><linearGradient id="${id}" x1="0" x2="1"><stop offset="0" class="sn-dl0"/><stop offset="1" class="sn-dl1"/></linearGradient></defs><rect fill="url(#${id})" x="${ox}" y="${oy}" width="${r1(w * 0.55)}" height="${h}"/>`
      : `<defs><linearGradient id="${id}" x1="0" x2="0" y1="0" y2="1"><stop offset="0" class="sn-dl0"/><stop offset="1" class="sn-dl1"/></linearGradient></defs><rect fill="url(#${id})" x="${ox}" y="${oy}" width="${w}" height="${r1(h * 0.55)}"/>`);
  }
  const clip = `cl-${esc(sc.id)}-${state.uid ?? 0}${state.letters ? 'x' : ''}`;
  const dGap = sc.door ? 9 * s : 0;
  parts.push(`<defs><clipPath id="${clip}"><rect x="${ox}" y="${oy}" width="${w}" height="${h}"/>${sc.door && (sc.door.side === 'onder' || sc.door.side === 'boven') ? `<rect x="${X(sc.door.x)}" y="${sc.door.side === 'onder' ? r1(oy + h) : r1(oy - 30)}" width="${r1(dGap)}" height="30"/>` : ''}${sc.door && (sc.door.side === 'links' || sc.door.side === 'rechts') ? `<rect x="${sc.door.side === 'links' ? r1(ox - 30) : r1(ox + w)}" y="${Y(sc.door.y)}" width="30" height="${r1(dGap)}"/>` : ''}</clipPath></defs>`);
  parts.push(`<g clip-path="url(#${clip})">`);
  if (pos && state.detect !== false) {
    const det = pos.detect ?? sc.detect;
    [pos, ...(pos.also ?? [])].forEach((q, i) => {
      const dx = X(q.x);
      const dy = Y(q.y);
      const zone = det.shape === 'gang'
        ? (() => {
          const a = r1((det.rx ?? det.r * 3) * s);
          const b = r1(det.r * s);
          return `<ellipse class="sn-zone sn-zone--t" cx="${dx}" cy="${dy}" rx="${det.along === 'y' ? b : a}" ry="${det.along === 'y' ? a : b}"/>`;
        })()
        : `<circle class="sn-zone sn-zone--t" cx="${dx}" cy="${dy}" r="${r1(det.r * s)}"/>`;
      const cell = (i === 0 ? pos.cell : q.cell) ?? null;
      if (!cell?.length) return parts.push(zone);
      const cid = `${clip}-c${i}`;
      parts.push(`<defs><clipPath id="${cid}">${cell.map((c) => `<rect x="${X(c.x)}" y="${Y(c.y)}" width="${r1(c.w * s)}" height="${r1(c.h * s)}"/>`).join('')}</clipPath></defs><g clip-path="url(#${cid})">${zone}</g>`);
    });
  }
  if (pos && state.measure && sc.measure) parts.push(`<circle class="sn-measure" cx="${X(pos.x)}" cy="${Y(pos.y)}" r="${r1(sc.measure * s)}"/>`);
  parts.push('</g>');
  for (const r of sc.racks ?? []) parts.push(`<rect class="sn-rack" x="${X(r.x)}" y="${Y(r.y)}" width="${r1(r.w * s)}" height="${r1(r.h * s)}"/>${r.label ? `<text class="sn-lbl" x="${r1(X(r.x) + 4)}" y="${r1(Y(r.y + r.h) - 4)}">${esc(r.label)}</text>` : ''}`);
  for (const r of sc.desks ?? []) parts.push(`<rect class="sn-desk" x="${X(r.x)}" y="${Y(r.y)}" width="${r1(r.w * s)}" height="${r1(r.h * s)}" rx="2"/>${r.label ? `<text class="sn-lbl" x="${r1(X(r.x) + 4)}" y="${r1(Y(r.y) + 12)}">${esc(r.label)}</text>` : ''}`);
  for (const r of sc.walls ?? []) parts.push(`<rect class="sn-wall" x="${X(r.x)}" y="${Y(r.y)}" width="${r1(Math.max(2, r.w * s))}" height="${r1(Math.max(2, r.h * s))}"/>`);
  for (const ht of sc.heat ?? []) parts.push(`<g class="sn-heat"><rect x="${r1(X(ht.x) - 9)}" y="${r1(Y(ht.y) - 5)}" width="18" height="10" rx="2"/><path d="M${r1(X(ht.x) - 5)} ${r1(Y(ht.y) - 5)}v10M${X(ht.x)} ${r1(Y(ht.y) - 5)}v10M${r1(X(ht.x) + 5)} ${r1(Y(ht.y) - 5)}v10"/><text class="sn-lbl sn-lbl--heat" x="${X(ht.x)}" y="${r1(Y(ht.y) + 17)}" text-anchor="middle">${esc(ht.label)}</text></g>`);
  if (sc.window === 'links') parts.push(`<path class="sn-window" d="M${ox} ${r1(oy + h * 0.08)}V${r1(oy + h * 0.92)}"/>`);
  if (sc.window === 'boven') parts.push(`<path class="sn-window" d="M${r1(ox + w * 0.08)} ${oy}H${r1(ox + w * 0.92)}"/>`);
  if (sc.door) {
    const d = sc.door;
    const L = 9 * s;
    const x = X(d.x);
    const y = Y(d.y);
    const g = d.side === 'onder' || d.side === 'boven'
      ? `<path class="sn-gap" d="M${x} ${y}H${r1(x + L)}"/><path class="sn-door" d="M${x} ${y}${d.side === 'onder' ? `V${r1(y - L)}A${r1(L)} ${r1(L)} 0 0 1 ${r1(x + L)} ${y}` : `V${r1(y + L)}A${r1(L)} ${r1(L)} 0 0 0 ${r1(x + L)} ${y}`}"/>`
      : `<path class="sn-gap" d="M${x} ${y}V${r1(y + L)}"/><path class="sn-door" d="M${x} ${y}${d.side === 'rechts' ? `H${r1(x - L)}A${r1(L)} ${r1(L)} 0 0 0 ${x} ${r1(y + L)}` : `H${r1(x + L)}A${r1(L)} ${r1(L)} 0 0 1 ${x} ${r1(y + L)}`}"/>`;
    parts.push(`<g>${g}</g>`);
  }
  for (const l of sc.luminaires ?? []) {
    const lw = (l.long ? 12 : 6) * s;
    const lh = (l.long ? 2.4 : 6) * s;
    parts.push(`<rect class="sn-lum${l.group ? ` sn-lum--${esc(l.group)}` : ''}" x="${r1(X(l.x) - lw / 2)}" y="${r1(Y(l.y) - lh / 2)}" width="${r1(lw)}" height="${r1(lh)}" rx="1"/>`);
  }
  if (sc.walk?.length > 1) parts.push(`<path class="sn-route" d="M${sc.walk.map((p) => `${X(p.x)} ${Y(p.y)}`).join('L')}"/><path class="sn-route-head" d="${arrowHead(sc.walk.map((p) => ({ x: X(p.x), y: Y(p.y) })))}"/>`);
  if (pos?.onAt && sc.walk?.length) {
    const a = sc.walk[0];
    const o = pos.onAt;
    parts.push(`<path class="sn-dark" d="M${X(a.x)} ${Y(a.y)}L${X(o.x)} ${Y(o.y)}"/><g class="sn-on"><circle cx="${X(o.x)}" cy="${Y(o.y)}" r="6"/><path d="M${X(o.x)} ${r1(Y(o.y) - 6)}V${oy - 3}"/><text x="${X(o.x)}" y="${oy - 6}" text-anchor="${X(o.x) < ox + 40 ? 'start' : 'middle'}">${esc(labels.on ?? '')}</text></g>`);
  }
  for (const p of sc.positions) {
    const cls = `sn-cand${p.id === state.pos ? ' is-on' : ''}${state.reveal && p.id === sc.answer ? ' is-answer' : ''}`;
    parts.push(state.letters
      ? `<g class="${cls}" data-pos="${esc(p.id)}"><circle cx="${X(p.x)}" cy="${Y(p.y)}" r="11"/><text x="${X(p.x)}" y="${r1(Y(p.y) + 4)}" text-anchor="middle">${esc(p.label.slice(0, 1))}</text></g>`
      : `<g class="${cls}" data-pos="${esc(p.id)}"><circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5"/></g>`);
  }
  if (pos) for (const q of [pos, ...(pos.also ?? [])]) parts.push(`<g class="sn-sensor-top"><circle cx="${X(q.x)}" cy="${Y(q.y)}" r="7"/><circle class="sn-sensor-eye" cx="${X(q.x)}" cy="${Y(q.y)}" r="2.8"/></g>`);
  return `<svg class="sn-svg sn-svg--plan" viewBox="0 0 ${r1(w + 40)} ${r1(h + 40)}" role="img" aria-label="${esc(labels.title)}">${parts.join('')}</svg>`;
}

function arrowHead(pts) {
  const a = pts[pts.length - 2];
  const b = pts[pts.length - 1];
  const ang = Math.atan2(b.y - a.y, b.x - a.x);
  const L = 9;
  const p1 = { x: b.x - L * Math.cos(ang - 0.45), y: b.y - L * Math.sin(ang - 0.45) };
  const p2 = { x: b.x - L * Math.cos(ang + 0.45), y: b.y - L * Math.sin(ang + 0.45) };
  return `M${r1(p1.x)} ${r1(p1.y)}L${r1(b.x)} ${r1(b.y)}L${r1(p2.x)} ${r1(p2.y)}`;
}

export function sectionSvg(sc, state, labels) {
  const { s, ox, w } = planScale(sc);
  const X = (v) => r1(ox + v * s);
  const C = 26;
  const F = 132;
  const pos = sc.positions.find((p) => p.id === state.pos) ?? null;
  const out = [];
  if (state.daylight && sc.window === 'links') out.push(`<path class="sn-daywedge" d="M${ox} ${C + 18}L${ox} ${F - 34}L${r1(ox + w * 0.5)} ${F}L${r1(ox + w * 0.16)} ${F}Z"/>`);
  out.push(`<rect class="sn-ceiling" x="${ox}" y="${C - 8}" width="${w}" height="8"/><rect class="sn-floor" x="${ox}" y="${F}" width="${w}" height="5"/>`);
  out.push(`<path class="sn-wallside" d="M${ox} ${C}V${F}M${r1(ox + w)} ${C}V${F}"/>`);
  if (sc.window === 'links') out.push(`<path class="sn-window" d="M${ox} ${C + 18}V${F - 34}"/>`);
  const xs = [...new Set((sc.luminaires ?? []).map((l) => l.x))];
  for (const x of xs) out.push(`<rect class="sn-lum" x="${r1(X(x) - 6 * s)}" y="${C}" width="${r1(12 * s)}" height="3"/>`);
  for (const d of sc.desks ?? []) out.push(`<rect class="sn-desk" x="${X(d.x)}" y="${F - 26}" width="${r1(d.w * s)}" height="4"/><path class="sn-desk-leg" d="M${r1(X(d.x) + 3)} ${F - 22}V${F}M${r1(X(d.x + d.w) - 3)} ${F - 22}V${F}"/>`);
  if (pos) {
    const px = X(pos.x);
    if (state.detect !== false) {
      const det = pos.detect ?? sc.detect;
      const half = r1((det.shape === 'gang' && det.along !== 'y' ? (det.rx ?? det.r * 3) : det.r) * s);
      out.push(`<rect class="sn-zone sn-zone--t" x="${r1(Math.max(ox, px - half))}" y="${F - 4}" width="${r1(Math.min(ox + w, px + half) - Math.max(ox, px - half))}" height="4"/>`);
    }
    if (state.measure && sc.measure) {
      const m = r1(sc.measure * s);
      out.push(`<rect class="sn-measure-band" x="${r1(Math.max(ox, px - m))}" y="${F - 30}" width="${r1(Math.min(ox + w, px + m) - Math.max(ox, px - m))}" height="3"/>`);
    }
    out.push(`<path class="sn-recessed" d="M${r1(px - 7)} ${C}A7 6 0 0 0 ${r1(px + 7)} ${C}Z"/>`);
  }
  out.push(`<text class="sn-cap" x="${r1(ox + w)}" y="12" text-anchor="end">${esc(labels.section)}</text>`);
  return `<svg class="sn-svg sn-svg--section" viewBox="0 0 ${r1(w + 40)} 150" role="img" aria-label="${esc(labels.section)}">${out.join('')}</svg>`;
}

