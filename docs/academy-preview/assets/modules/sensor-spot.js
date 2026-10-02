import { esc } from './sensor-core.js';

const C = 22;
const F = 118;
const base = (extra) => `<rect class="sn-ceiling" x="10" y="${C - 7}" width="200" height="7"/><rect class="sn-floor" x="10" y="${F}" width="200" height="4"/>${extra}`;
const dome = (x, y = C) => `<path class="sn-recessed" d="M${x - 7} ${y}A7 6 0 0 0 ${x + 7} ${y}Z"/>`;
const zone = (a, b) => `<rect class="sn-zone sn-zone--t" x="${a}" y="${F - 4}" width="${b - a}" height="4"/>`;
const lum = (x) => `<rect class="sn-lum" x="${x - 18}" y="${C}" width="36" height="3"/>`;
const beam = (x) => `<path class="sn-beam" d="M${x - 18} ${C + 3}H${x + 18}L${x + 34} ${F}H${x - 34}Z"/>`;

const KINDS = {
  'in-plafond': () => base(`${zone(55, 165)}${dome(110)}`),
  zwevend: () => base(`${zone(55, 165)}<circle class="sn-float" cx="110" cy="52" r="8"/><path class="sn-gapline" d="M110 ${C}V44"/>`),
  bundel: () => base(`<path class="sn-beam sn-beam--wrong" d="M104 ${C + 4}H116L165 ${F}H55Z"/>${dome(110)}`),
  'door-wand': () => base(`<rect class="sn-wall" x="148" y="${C}" width="5" height="${F - C}"/>${zone(45, 200)}${dome(100)}`),
  'naast-armatuur': () => base(`${beam(92)}${lum(92)}<rect class="sn-measure-band" x="96" y="${F - 30}" width="50" height="3"/>${dome(121)}`),
  'licht-uit-armatuur': () => base(`${beam(60)}${lum(60)}${zone(110, 200)}${dome(155)}`),
};

export const SPOT_KINDS = Object.keys(KINDS);

export function spotSvg(kind, label) {
  return `<svg class="sn-svg sn-svg--spot" viewBox="0 0 220 130" role="img" aria-label="${esc(label)}">${KINDS[kind]()}</svg>`;
}
