
export const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export const fill = (str, vars = {}) => String(str ?? '').replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

const DIM_STEP = 20; // illustratief: één lange druk = één stap
const DIM_MIN = 10; // illustratief: dimmen gaat niet naar uit

export function initialState(model) {
  const groups = {};
  for (const g of model.groups) groups[g.id] = { level: 0, scene: null, paused: false };
  return { groups, dir: {} };
}

const sceneOf = (model, id) => model.scenes.find((s) => s.id === id) ?? null;

export function callScene(model, state, sceneId) {
  const sc = sceneOf(model, sceneId);
  if (!sc) return state;
  const groups = { ...state.groups };
  for (const l of sc.levels) groups[l.group] = { level: l.level, scene: sc.id, paused: false };
  return { ...state, groups };
}

function onLevel(model, g) {
  const sc = g.scene ? sceneOf(model, g.scene) : null;
  return sc?.levels.find((l) => l.group === g.id)?.level || 100;
}

export function press(model, state, fn, kind, inputId = 'x') {
  if (!fn || fn.kind === 'inactief') return { state, what: 'niets' };
  if (fn.kind === 'scene') return kind === 'kort' ? { state: callScene(model, state, fn.scene), what: 'scene', scene: fn.scene } : { state, what: 'niets' };
  if (fn.kind === 'wissel') {
    if (kind !== 'kort') return { state, what: 'niets' };
    const [a, b] = fn.scenes;
    const first = sceneOf(model, a);
    const onA = first && first.levels.every((l) => state.groups[l.group]?.scene === a);
    const next = onA ? b : a;
    return { state: callScene(model, state, next), what: 'wissel', scene: next };
  }
  const groups = { ...state.groups };
  const ids = (fn.groups ?? []).filter((g) => groups[g]);
  if (kind === 'kort') {
    if (!fn.short || fn.short === 'inactief') return { state, what: 'niets' };
    const anyOn = ids.some((g) => groups[g].level > 0);
    const on = fn.short === 'aan' || (fn.short === 'aanuit' && !anyOn);
    for (const g of ids) groups[g] = { ...groups[g], level: on ? onLevel(model, { ...groups[g], id: g }) : 0 };
    return { state: { ...state, groups }, what: on ? 'aan' : 'uit' };
  }
  if (!fn.long || fn.long === 'inactief') return { state, what: 'niets' };
  const key = `${inputId}:${fn.id}`;
  if (!ids.some((g) => groups[g].level > 0)) return { state, what: 'dim-uit' };
  let up = state.dir[key] == null ? ids.every((g) => groups[g].level < 100) : !state.dir[key];
  if (ids.every((g) => groups[g].level >= 100)) up = false;
  if (ids.every((g) => groups[g].level <= DIM_MIN)) up = true;
  for (const g of ids) {
    const cur = groups[g].level;
    const lvl = up ? Math.min(100, Math.max(DIM_MIN, cur) + DIM_STEP) : Math.max(DIM_MIN, cur - DIM_STEP);
    groups[g] = { ...groups[g], level: lvl, paused: Boolean(groups[g].scene && sceneOf(model, groups[g].scene)?.daylight) || groups[g].paused };
  }
  return { state: { ...state, groups, dir: { ...state.dir, [key]: up } }, what: up ? 'dim-op' : 'dim-af' };
}

export const ROOM = { W: 320, H: 190 };

export function roomSvg(model, levels, { presence = false, title = '', uid = 'r' } = {}) {
  const { W, H } = ROOM;
  const parts = [];
  parts.push(`<rect class="ct-room" x="8" y="8" width="${W - 16}" height="${H - 16}" rx="3"/>`);
  parts.push(`<rect class="ct-table" x="96" y="70" width="112" height="50" rx="22"/>`);
  parts.push(`<rect class="ct-screen" x="${W - 16}" y="56" width="6" height="78"/>`);
  const ceil = model.groups.filter((g) => !g.wall);
  const wall = model.groups.filter((g) => g.wall);
  const lum = (g, x, y, w, h) => {
    const lv = levels[g.id] ?? 0;
    return `<rect class="ct-lum${lv > 0 ? ' is-on' : ''}" data-group="${esc(g.id)}" x="${x}" y="${y}" width="${w}" height="${h}" rx="2" style="--lvl:${(lv / 100).toFixed(2)}"/>`;
  };
  ceil.forEach((g, gi) => {
    const n = g.count ?? 3;
    const rowY = ceil.length === 1 ? 46 : 36 + gi * (106 / Math.max(1, ceil.length - 1));
    for (let i = 0; i < n; i++) parts.push(lum(g, n === 1 ? 137 : 72 + i * (170 / (n - 1)), rowY, 30, 8));
    parts.push(`<text class="ct-glabel" x="16" y="${rowY + 7}">${esc(g.label)}</text>`);
  });
  wall.forEach((g, gi) => {
    const n = g.count ?? 2;
    for (let i = 0; i < n; i++) parts.push(lum(g, W - 36 - gi * 16, 46 + i * (98 / Math.max(1, n - 1)), 8, 14));
    parts.push(`<text class="ct-glabel ct-glabel--wall" x="${W - 44 - gi * 16}" y="${H - 18}" text-anchor="end">${esc(g.label)}</text>`);
  });
  parts.push(`<g class="ct-sensor" transform="translate(152 95)"><circle r="6"/><circle r="2"/></g>`);
  if (presence) parts.push(`<g class="ct-person" transform="translate(112 138)"><circle r="7"/><circle cy="-2" r="2.6"/></g>`);
  const t = title ? `<title id="${esc(uid)}-t">${esc(title)}</title>` : '';
  return `<svg class="ct-room-svg" viewBox="0 0 ${W} ${H}" role="img"${title ? ` aria-labelledby="${esc(uid)}-t"` : ' aria-hidden="true"'}>${t}${parts.join('')}</svg>`;
}

export function levelsText(model, levels) {
  return model.groups.map((g) => `${g.label} ${levels[g.id] > 0 ? `${levels[g.id]} %` : model.strings.off}`).join(' · ');
}

export function targetText(model, fn) {
  if (!fn || fn.kind === 'inactief') return model.strings.none;
  if (fn.kind === 'scene') return fill(model.strings.toScene, { scene: sceneOf(model, fn.scene)?.label ?? fn.scene });
  if (fn.kind === 'wissel') return fill(model.strings.toToggle, { a: sceneOf(model, fn.scenes[0])?.label, b: sceneOf(model, fn.scenes[1])?.label });
  return fill(model.strings.toGroups, { groups: (fn.groups ?? []).map((g) => model.groups.find((x) => x.id === g)?.label ?? g).join(', ') });
}
