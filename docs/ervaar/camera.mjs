// Camera, licht en ontdekking voor /ervaar/ (fase 2). Pure functies zonder DOM; getest in de bronrepo.
//
// Instelbaar (bovenin, met uitleg). Alle waarden zijn beginwaarden die op een echte iPhone beoordeeld moeten worden.
export const CAMERA = {
  FOV_V: 62, // verticale beeldhoek in graden: groot genoeg om ruimte te voelen, klein genoeg dat de wereld groter is dan het scherm
  ROLL_FACTOR: 0.6, // hoeveel van het fysieke kantelen de camera overneemt (1 = volledig; minder = rustiger, beter leesbaar)
  PITCH_MAX: 84, // camera nooit precies recht omhoog/omlaag (degeneratie van de basis)
  // Adaptieve demping (idee van het 1€-filter): bij langzame/kleine beweging sterk dempen (geen handtrilling in beeld),
  // bij snelle beweging weinig (geen „achterlopen”). Tau in seconden.
  TAU_RUST: 0.32,
  TAU_SNEL: 0.07,
  SNEL_BIJ: 90, // °/s waarbij de snelle tau bereikt is
  // Het licht volgt de kijkrichting met iets meer traagheid: het „veegt” door de ruimte en voelt tastbaar.
  TAU_LICHT: 0.22,
};

export const LICHT = {
  BUNDEL: 13, // halve openingshoek (graden) waarbinnen een onderwerp volledig verlicht is
  RAND: 13, // extra graden waarover het licht naar nul afloopt
  // Ontdekking per onderwerp (seconden ononderbroken verlicht, met „verlicht” = intensiteit > 0,6):
  LAAG2_NA: 0.7, // herkenning
  LAAG3_NA: 2.0, // glimp
  TERUGVAL: 0.8, // verblijftijd zakt met deze factor × dt terug als je wegkijkt (inhoud zakt rustig terug)
  FADE: 0.35, // tau (s) voor het in- en uitfaden van zichtbare lagen
};

const DEG = Math.PI / 180;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
export const smoothstep = (a, b, x) => {
  const t = clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
/** Kortste hoekverschil (graden), voor yaw die over ±180 springt. */
export function hoekverschil(a, b) {
  return ((((b - a) % 360) + 540) % 360) - 180;
}

/** Adaptieve demping voor één hoek. Geeft de nieuwe gedempte waarde; `wrap` voor yaw. */
export function demp(huidig, doel, dt, { wrap = false, cfg = CAMERA } = {}) {
  if (huidig == null) return doel;
  const delta = wrap ? hoekverschil(huidig, doel) : doel - huidig;
  const snelheid = Math.abs(delta) / Math.max(dt, 1e-3);
  const tau = cfg.TAU_RUST + (cfg.TAU_SNEL - cfg.TAU_RUST) * clamp(snelheid / cfg.SNEL_BIJ, 0, 1);
  const k = 1 - Math.exp(-dt / tau);
  return huidig + delta * k;
}
export function dempVast(huidig, doel, dt, tau, wrap = false) {
  if (huidig == null) return doel;
  const delta = wrap ? hoekverschil(huidig, doel) : doel - huidig;
  return huidig + delta * (1 - Math.exp(-dt / tau));
}

/** Camerabasis uit yaw/pitch/roll (graden). f = vooruit, r = rechts, u = omhoog (na roll). */
export function basis(yaw, pitch, roll, cfg = CAMERA) {
  const p = clamp(pitch, -cfg.PITCH_MAX, cfg.PITCH_MAX) * DEG;
  const y = yaw * DEG;
  const f = [Math.sin(y) * Math.cos(p), Math.sin(p), -Math.cos(y) * Math.cos(p)];
  // r = f × (0,1,0), genormaliseerd; u = r × f
  let r = [-f[2], 0, f[0]];
  const rl = Math.hypot(r[0], r[2]) || 1;
  r = [r[0] / rl, 0, r[2] / rl];
  const u = [r[1] * f[2] - r[2] * f[1], r[2] * f[0] - r[0] * f[2], r[0] * f[1] - r[1] * f[0]];
  const t = roll * cfg.ROLL_FACTOR * DEG;
  const c = Math.cos(t), s = Math.sin(t);
  // Telefoon tegen de klok in (rechterrand omhoog) → rechts-as kantelt omhoog → de wereld draait op het scherm mee terug.
  const r2 = [r[0] * c + u[0] * s, r[1] * c + u[1] * s, r[2] * c + u[2] * s];
  const u2 = [u[0] * c - r[0] * s, u[1] * c - r[1] * s, u[2] * c - r[2] * s];
  return { f, r: r2, u: u2 };
}

const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/**
 * Projectie van een wereldpunt naar schermcoördinaten (px, vanaf het midden; y omlaag).
 * @returns {{x:number, y:number, z:number, s:number}|null} z = diepte (m), s = schaal (px per meter); null achter de camera
 */
export function projecteer(p, cam, focaal, near = 0.2) {
  const z = dot(p, cam.f);
  if (z < near) return null;
  return { x: (dot(p, cam.r) / z) * focaal, y: (-dot(p, cam.u) / z) * focaal, z, s: focaal / z };
}
export function focaalVoor(hoogtePx, cfg = CAMERA) {
  return hoogtePx / 2 / Math.tan((cfg.FOV_V / 2) * DEG);
}

/** Verlichting (0..1) van een richting door een lichtbundel met richting `licht` (beide eenheidsvectoren). */
export function verlichting(dir, licht, cfg = LICHT) {
  const hoek = Math.acos(clamp(dot(dir, licht), -1, 1)) / DEG;
  return 1 - smoothstep(cfg.BUNDEL, cfg.BUNDEL + cfg.RAND, hoek);
}

/**
 * Ontdekkingstoestand van één onderwerp. `stap(licht, dt)` werkt verblijftijd en zichtbare lagen bij.
 * Lagen: l1 = begrip (volgt het licht direct), l2 = herkenning, l3 = glimp. `ontdekt` wordt waar bij de eerste keer laag 2.
 */
export function ontdekking(cfg = LICHT) {
  const s = { verblijf: 0, l1: 0, l2: 0, l3: 0, ontdekt: false, licht: 0 };
  function stap(licht, dt) {
    s.licht = licht;
    if (licht > 0.6) s.verblijf += dt;
    else s.verblijf = Math.max(0, s.verblijf - dt * cfg.TERUGVAL);
    const k = 1 - Math.exp(-dt / cfg.FADE);
    const doel2 = s.verblijf >= cfg.LAAG2_NA && licht > 0.35 ? 1 : 0;
    const doel3 = s.verblijf >= cfg.LAAG3_NA && licht > 0.35 ? 1 : 0;
    s.l1 += (licht - s.l1) * Math.min(1, k * 2);
    s.l2 += (doel2 - s.l2) * k;
    s.l3 += (doel3 - s.l3) * k;
    let nieuw = false;
    if (!s.ontdekt && doel2) { s.ontdekt = true; nieuw = true; }
    return nieuw;
  }
  return { stap, toestand: s };
}
