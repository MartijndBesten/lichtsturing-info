
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const fill = (str, vars = {}) => String(str ?? '').replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));
const num = (n, locale = 'nl-NL') => new Intl.NumberFormat(locale).format(n);

export function assign(items, model) {
  const typeOf = new Map(model.types.map((t) => [t.id, t]));
  const next = { gear: 0, device: 0 };
  return items.map((id, i) => {
    const t = typeOf.get(id);
    const lim = model.protocol[t.space];
    const addrs = [];
    for (let k = 0; k < (t.addresses ?? 1); k++) {
      const a = next[t.space]++;
      addrs.push(a < lim ? a : null);
    }
    return { i, type: t, addrs };
  });
}

export function evaluate(state, model) {
  const src = model.controllers.find((s) => s.id === state.source) ?? model.controllers[0];
  const parts = assign(state.items, model);
  const reserve = Math.max(0, Math.min(50, Number(state.reserve) || 0));
  const used = { gear: 0, device: 0 };
  for (const p of parts) used[p.type.space] += p.addrs.length;
  const space = (k) => {
    const limit = model.protocol[k];
    const design = Math.floor(limit * (1 - reserve / 100));
    const n = used[k];
    const status = n > limit ? 'over' : n === limit ? 'grens' : reserve && n > design ? 'reserve' : 'ok';
    return { used: n, limit, design, free: Math.max(0, limit - n), over: Math.max(0, n - limit), status };
  };
  const counts = {};
  for (const id of state.items) counts[id] = (counts[id] ?? 0) + 1;
  const total = used.gear + used.device;
  let product = null;
  if (src.productLimit) {
    const lim = src.productLimit.value;
    product = { limit: lim, used: total, status: total > lim ? (src.productLimit.open ? 'controleren' : 'over') : total === lim ? 'grens' : 'ok', open: Boolean(src.productLimit.open) };
  }
  let known = 0;
  let upper = false; // met een bovengrens gerekend: „meer dan de voeding” is dan een controlepunt, geen zekerheid
  const unknown = {};
  for (const p of parts) {
    if (p.type.current?.upper) upper = true;
    if (p.type.current) known += p.type.current.value * (p.type.current.perAddress ? p.addrs.length : 1);
    else unknown[p.type.id] = (unknown[p.type.id] ?? 0) + 1;
  }
  const unknownCount = Object.values(unknown).reduce((a, b) => a + b, 0);
  const supply = src.supply ?? null;
  let cstatus;
  if (!state.items.length) cstatus = 'ok';
  else if (!supply) cstatus = 'info';
  else if (known > supply.value) cstatus = upper ? 'controleren' : 'over';
  else if (unknownCount) cstatus = 'onbekend';
  else cstatus = known === supply.value ? 'grens' : 'ok';
  return {
    source: src,
    parts,
    reserve,
    gear: space('gear'),
    device: space('device'),
    product,
    current: { known, unknown, unknownCount, supply, upper, status: cstatus },
    counts,
    total,
  };
}


const CELL = 36; // breedte per deelnemer op de bus
const GLYPH = 28;
const CTL_BOTTOM = 52; // onderkant van het besturingsblok

export function physicalSvg(state, model, { cols: maxCols = 16, strings: s, title = '', symbols = {} }) {
  const ev = evaluate(state, model);
  const parts = ev.parts;
  const cols = Math.min(maxCols, Math.max(8, parts.length));
  const rows = Math.max(1, Math.ceil(parts.length / cols));
  const W = cols * CELL + 74;
  const TRUNK = 34;
  const y0 = 96;
  const RH = 60;
  const H = y0 + rows * RH + (parts.length ? 4 : 30);
  const label = ev.source.short ?? ev.source.label;
  const ctlW = Math.min(W - 24, 26 + label.length * 6.6 + 18);
  const out = [];
  out.push(`<svg class="dl-svg dl-svg--${maxCols}" viewBox="0 0 ${W} ${H}" style="max-width:${Math.round(W * 1.35)}px" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMin meet">`);
  out.push(`<g class="dl-ctl"><rect x="12" y="12" width="${ctlW}" height="40" rx="5"></rect><g class="dl-icon" transform="translate(20 24)" aria-hidden="true">${symbols['centrale-unit'] ?? ''}</g><text x="44" y="36">${esc(label)}</text></g>`);
  const lastRow = rows - 1;
  const busY = (r) => y0 + r * RH;
  if (!parts.length) {
    out.push(`<path class="ch-line ch-line--bus" d="M${TRUNK} ${CTL_BOTTOM}V${y0}H${TRUNK + 70}"></path>`);
    out.push(`<text class="dl-buslabel" x="${TRUNK + 6}" y="70">${esc(s.bus)}</text>`);
    out.push(`<text class="dl-empty" x="${TRUNK + 80}" y="${y0 + 4}">${esc(s.empty)}</text>`);
  } else {
    out.push(`<path class="ch-line ch-line--bus" d="M${TRUNK} ${CTL_BOTTOM}V${busY(lastRow)}"></path>`);
    out.push(`<text class="dl-buslabel" x="${TRUNK + 6}" y="70">${esc(s.bus)}</text>`);
    for (let r = 0; r < rows; r++) {
      const inRow = parts.slice(r * cols, (r + 1) * cols);
      const xEnd = 60 + (inRow.length - 1) * CELL + GLYPH / 2;
      const drops = inRow.map((p, k) => `M${60 + k * CELL + GLYPH / 2} ${busY(r)}V${busY(r) + 14}`).join('');
      out.push(`<path class="ch-line ch-line--bus" d="M${TRUNK} ${busY(r)}H${xEnd}${drops}"></path>`);
    }
    parts.forEach((p, i) => {
      const r = Math.floor(i / cols);
      const x = 60 + (i % cols) * CELL;
      const y = busY(r) + 14;
      const over = p.addrs.some((a) => a == null);
      const addr = p.addrs.map((a) => (a == null ? '—' : a)).join('+');
      const tip = `${p.type.label} · ${fill(p.type.space === 'gear' ? s.addrGear : s.addrDevice, { n: addr })}`;
      out.push(`<g class="dl-p dl-p--${p.type.space}${over ? ' is-over' : ''}" data-i="${i}" data-type="${esc(p.type.id)}"><title>${esc(tip)}</title><rect x="${x}" y="${y}" width="${GLYPH}" height="${GLYPH}" rx="4"></rect><g class="dl-icon" transform="translate(${x + 6} ${y + 6})" aria-hidden="true">${symbols[p.type.symbol] ?? ''}</g>${p.addrs.length > 1 ? `<text class="dl-badge" x="${x + GLYPH - 2}" y="${y + GLYPH + 9}" text-anchor="end">${p.addrs.length}×</text>` : ''}</g>`);
    });
  }
  out.push('</svg>');
  return out.join('');
}

export function addressGrid(state, model, space, { strings: s, symbols = {} }) {
  const ev = evaluate(state, model);
  const lim = model.protocol[space];
  const cols = 8;
  const C = 26;
  const G = 4;
  const rows = Math.ceil(lim / cols);
  const W = cols * (C + G) - G + 2;
  const H = rows * (C + G) - G + 2;
  const byAddr = new Map();
  let overflow = 0;
  for (const p of ev.parts) {
    if (p.type.space !== space) continue;
    for (const a of p.addrs) {
      if (a == null) overflow++;
      else byAddr.set(a, p);
    }
  }
  const cells = [];
  for (let a = 0; a < lim; a++) {
    const x = 1 + (a % cols) * (C + G);
    const y = 1 + Math.floor(a / cols) * (C + G);
    const p = byAddr.get(a);
    cells.push(p
      ? `<g class="dl-cell dl-cell--${space} is-used" data-type="${esc(p.type.id)}"><title>${esc(`${fill(space === 'gear' ? s.addrGear : s.addrDevice, { n: a })} · ${p.type.label}`)}</title><rect x="${x}" y="${y}" width="${C}" height="${C}" rx="3"></rect><g class="dl-icon" transform="translate(${x + 5} ${y + 5}) scale(1)" aria-hidden="true">${symbols[p.type.symbol] ?? ''}</g></g>`
      : `<g class="dl-cell"><rect x="${x}" y="${y}" width="${C}" height="${C}" rx="3"></rect></g>`);
  }
  const used = ev[space].used;
  const head = fill(space === 'gear' ? s.gridGear : s.gridDevice, { used: Math.min(used, lim), limit: lim });
  return `<figure class="dl-grid dl-grid--${space}"><figcaption>${esc(head)}</figcaption><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(head)}">${cells.join('')}</svg>${overflow ? `<p class="dl-overflow">${esc(fill(s.overflow, { n: overflow }))}</p>` : ''}</figure>`;
}

const BASIS = { gear: 'protocol', device: 'protocol', product: 'product', current: 'ontwerp', length: 'product', reserve: 'ontwerp' };

export function engineeringHtml(state, model, { strings: s, locale = 'nl-NL' }) {
  const ev = evaluate(state, model);
  const src = ev.source;
  const unit = (v) => `${num(v.value, locale)} ${v.unit}`;
  const row = ({ key, basis = BASIS[key] ?? 'ontwerp', title, status, ratio = null, design = null, value, why, partial = null }) => {
    const pct = ratio == null ? null : Math.min(100, Math.round(ratio * 100));
    return `<li class="dl-row dl-row--${status}" data-check="${key}">
<div class="dl-row-head"><span class="dl-row-title">${esc(title)}</span><span class="kbasis kbasis--${basis}">${esc(s[`basis_${basis}`])}</span><span class="dl-status dl-status--${status}">${esc(s[`st_${status}`])}</span></div>
${pct == null ? '' : `<div class="dl-meter" aria-hidden="true"><span class="dl-meter-fill" style="width:${pct}%"></span>${partial ? `<span class="dl-meter-unknown" style="left:${pct}%;width:${Math.max(4, 100 - pct)}%"></span>` : ''}${design != null ? `<span class="dl-meter-design" style="left:${Math.min(100, design * 100)}%"></span>` : ''}</div>`}
<p class="dl-row-value">${esc(value)}</p>
<p class="dl-row-why">${esc(why)}</p></li>`;
  };
  const out = [];
  for (const k of ['gear', 'device']) {
    const x = ev[k];
    const why = x.status === 'over' ? fill(s[`${k}_over`], { n: x.over }) : x.status === 'grens' ? s[`${k}_grens`] : x.status === 'reserve' ? fill(s.reserve_over, { n: x.free }) : fill(s[`${k}_ok`], { n: x.free });
    out.push(row({ key: k, title: s[`${k}_title`], status: x.status, ratio: x.used / x.limit, design: ev.reserve ? x.design / x.limit : null, value: fill(s.of, { used: x.used, limit: x.limit }), why }));
  }
  if (ev.product) {
    const p = ev.product;
    const why = p.status === 'ok' ? fill(s.product_ok, { product: src.label, limit: p.limit, what: src.productLimit.what }) : p.status === 'grens' ? fill(s.product_grens, { product: src.label, limit: p.limit, what: src.productLimit.what }) : fill(p.open ? s.product_open : s.product_over, { product: src.label, limit: p.limit, what: src.productLimit.what });
    out.push(row({ key: 'product', title: fill(s.product_title, { product: src.label }), status: p.status, ratio: p.used / p.limit, value: fill(s.of, { used: p.used, limit: p.limit }), why: `${why}${src.productLimit.note ? ` ${src.productLimit.note}` : ''}` }));
  }
  const c = ev.current;
  const names = Object.entries(c.unknown).map(([id, n]) => `${n} × ${model.types.find((t) => t.id === id).short ?? id}`).join(', ');
  let cwhy;
  let cvalue;
  if (!state.items.length) {
    cwhy = s.current_empty;
    cvalue = '—';
  } else if (!c.supply) {
    cwhy = fill(s.current_generic, { max: unit(model.protocol.supplyMax) });
    cvalue = fill(s.current_known, { sum: unit({ value: c.known, unit: 'mA' }) });
  } else {
    cvalue = fill(s.current_of, { sum: unit({ value: c.known, unit: 'mA' }), supply: unit(c.supply), bound: s[`bound_${c.supply.bound}`] });
    cwhy = c.status === 'over' ? s.current_over : c.status === 'controleren' ? s.current_over_upper : c.unknownCount ? fill(s.current_unknown, { list: names }) : c.status === 'grens' ? s.current_grens : s.current_ok;
  }
  if (c.unknownCount && !c.supply && state.items.length) cwhy = `${cwhy} ${fill(s.current_unknown, { list: names })}`;
  out.push(row({ key: 'current', title: s.current_title, status: c.status, ratio: c.supply ? c.known / c.supply.value : null, partial: c.unknownCount > 0 && c.supply, value: cvalue, why: `${cwhy} ${s.current_gear}${ev.parts.some((q) => q.type.space === 'device' && q.type.current) ? ` ${s.current_device}` : ''}` }));
  out.push(row({ key: 'length', basis: src.length ? 'product' : 'protocol', title: s.length_title, status: 'info', value: src.length ? fill(s.length_product, { value: unit(src.length), product: src.label }) : fill(s.length_ref, { value: unit(model.protocol.distance), section: unit(model.protocol.section) }), why: s.length_why }));
  return `<ul class="dl-rows">${out.join('')}</ul>`;
}

export function summary(state, model, s) {
  const ev = evaluate(state, model);
  const worst = ['over', 'controleren', 'grens', 'onbekend', 'reserve'].find((st) => [ev.gear.status, ev.device.status, ev.product?.status, ev.current.status].includes(st));
  return fill(s.summary, { gear: ev.gear.used, device: ev.device.used, n: state.items.length }) + (worst ? ` ${s[`sum_${worst}`]}` : ` ${s.sum_ok}`);
}
