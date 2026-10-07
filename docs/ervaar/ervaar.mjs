// /ervaar/ — fase 2: de iPhone als venster én bediening. Alles lokaal; geen opslag, geen netwerk, geen analytics.
//
// Opbouw: sensor-engine uit fase 1 (orientation-math, motion-detect) → gedempte camera (camera.mjs) → Canvas 2D met eigen
// perspectiefprojectie. Bewust geen WebGL/Three.js: de wereld bestaat uit typografie, lijnen en lichtvlakken, en Canvas 2D
// geeft daarvoor scherpe tekst, een snelle eerste load (geen bibliotheek) en weinig GPU-werk (batterij, warmte).
import { rotationMatrix, relativeView } from '../experience-test/orientation-math.mjs';
import { createDetector } from '../experience-test/motion-detect.mjs';
import { CAMERA, LICHT, demp, dempVast, basis, projecteer, focaalVoor, verlichting, ontdekking, smoothstep } from './camera.mjs';
import { ONDERWERPEN, ACADEMIE, VERBINDINGEN, DRAMATURGIE, KERN, FALLBACK, OPEN, VLOER, richting, positie } from './world.mjs';

// ---------- Instelbaar ----------
const BEELD = {
  DPR_MAX: 2, // devicePixelRatio begrenzen: 3× op een iPhone kost veel pixels zonder zichtbare winst bij dit beeld
  ARCH_SCHAAL: 0.5, // architectuurlaag op halve resolutie (zachte lijnen, minder pixels)
  POOL_STRAAL: 0.62, // straal lichtveld t.o.v. de korte schermzijde
  START_WACHT_MS: 2200, // zo lang wachten op de eerste oriëntatiedata vóór de terugvalmelding
  HINT_WEG_NA_GRADEN: 28, // „Kijk om je heen” verdwijnt na zoveel graden rondkijken (of na HINT_MAX_MS)
  HINT_MAX_MS: 7000,
  KERN_VERTRAGING: 1.4, // s na de drempel
  KERN_DUUR: 6.5, // s volledig zichtbaar, daarna rustig kleiner/weg en verschijnt „Ontdek verder”
};
// Rust/oppakken (optioneel, fase 1 nog niet bewezen): alleen bij een tafel-stille toestel (veel strenger dan in de hand
// haalbaar is) en uit te zetten met ?rust=0. Vals positief = alleen een rustig dimmen; oppakken herstelt het direct.
const RUST_AAN = new URLSearchParams(location.search).get('rust') !== '0';
const RUST_CFG = { STILL_ACCEL: 0.15, STILL_ROT: 3, FLAT_ANGLE_DEG: 10, FLAT_MS: 3000, STATIONARY_MS: 2000, PICKUP_TILT_DEG: 20, PICKUP_SUSTAIN_MS: 700 };

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const FONT = '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", "Helvetica Neue", Arial, sans-serif';

// ---------- Canvas ----------
const canvas = $('wereld');
const ctx = canvas.getContext('2d', { alpha: false });
const arch = document.createElement('canvas');
const actx = arch.getContext('2d');
let W = 0, H = 0, DPR = 1, F = 1;
function maat() {
  DPR = Math.min(window.devicePixelRatio || 1, BEELD.DPR_MAX);
  W = Math.round(innerWidth * DPR);
  H = Math.round(innerHeight * DPR);
  canvas.width = W; canvas.height = H;
  arch.width = Math.max(1, Math.round(W * BEELD.ARCH_SCHAAL));
  arch.height = Math.max(1, Math.round(H * BEELD.ARCH_SCHAAL));
  F = focaalVoor(H);
}
addEventListener('resize', maat);
maat();

// ---------- Toestand ----------
const st = {
  fase: 'open', // open → wacht → wereld
  ruw: null, // laatste oriëntatie-event
  R0: null, // kalibratie
  doel: { yaw: 0, pitch: 0, roll: 0 },
  cam: { yaw: null, pitch: null, roll: null },
  licht: { yaw: null, pitch: null },
  gekeken: 0, // max. hoek van rondkijken sinds start (voor de hint)
  tStart: 0,
  tijd: 0,
  ontdekt: 0,
  rijker: 0, // 0..1
  kern: { getoond: false, t: null },
  rust: 0, wekken: 0,
  academie: { open: 0, verblijf: 0, ontdekt: false },
};
const onderwerpen = ONDERWERPEN.map((o) => ({ ...o, pos: positie(o), dir: richting(o.yaw, o.pitch), od: ontdekking(), seed: hash(o.id) }));
const byId = Object.fromEntries(onderwerpen.map((o) => [o.id, o]));
const acPos = positie(ACADEMIE);
const acDir = richting(ACADEMIE.yaw, ACADEMIE.pitch);
// Een paar lichtpunten zijn vanaf het begin zwak zichtbaar (uitnodiging); de rest moet je echt zoeken.
const GLOEIT = new Set(['lichtsturing', 'sensoren', 'gacs']);

function hash(s) { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; }
function rng(seed) { let x = seed || 1; return () => ((x = Math.imul(x ^ (x >>> 15), 2246822507) ^ Math.imul(x ^ (x >>> 13), 3266489909)) >>> 0) / 4294967296; }

// ---------- Sensoren ----------
const detector = createDetector(RUST_CFG);
function onOrientation(e) {
  if (e.alpha == null && e.beta == null) return;
  st.ruw = e;
  if (!st.R0) return;
  const v = relativeView(st.R0, rotationMatrix(e.alpha, e.beta, e.gamma));
  st.doel = v;
}
function onMotion(e) {
  if (!RUST_AAN) return;
  const ev = detector.sample({ t: performance.now(), acc: e.acceleration, accG: e.accelerationIncludingGravity, rot: e.rotationRate });
  for (const x of ev) if (x.type === 'pickup') st.wekken = 1;
}
function kalibreer() {
  const e = st.ruw;
  st.R0 = rotationMatrix(e.alpha, e.beta, e.gamma);
  st.doel = { yaw: 0, pitch: 0, roll: 0 };
  st.cam = { yaw: 0, pitch: 0, roll: 0 };
  st.licht = { yaw: 0, pitch: 0 };
}

async function vraag(ctor) {
  if (!ctor) return 'niet beschikbaar';
  if (typeof ctor.requestPermission !== 'function') return 'niet nodig';
  try { return await ctor.requestPermission(); } catch { return 'fout'; }
}
let wakeLock = null;
async function wakker() {
  try { if ('wakeLock' in navigator && document.visibilityState === 'visible') wakeLock = await navigator.wakeLock.request('screen'); } catch { /* optioneel */ }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && st.fase === 'wereld') wakker(); });

function melding(tekst, klein = '') {
  $('melding-tekst').textContent = tekst;
  $('melding-klein').textContent = klein;
  $('melding').hidden = false;
  $('open').hidden = true;
  st.fase = 'melding';
}

$('open-titel').textContent = OPEN.titel;
$('start').textContent = OPEN.knop;
$('start').addEventListener('click', async () => {
  $('start').disabled = true;
  // Beide aanvragen binnen dezelfde tik starten (iOS vraagt een gebruikersactie).
  const [o, m] = await Promise.all([vraag(window.DeviceOrientationEvent), vraag(window.DeviceMotionEvent)]);
  if (o === 'denied' || o === 'fout') {
    melding('Zonder toegang tot de bewegingssensoren kun je hier niet rondkijken.', 'Sluit het tabblad en open de pagina opnieuw om de vraag nog eens te krijgen.');
    return;
  }
  if (o === 'niet beschikbaar') { melding(FALLBACK); return; }
  addEventListener('deviceorientation', onOrientation, true);
  if (m === 'granted' || m === 'niet nodig') addEventListener('devicemotion', onMotion, true);
  st.fase = 'wacht';
  $('open').classList.add('uit');
  wakker();
  const t0 = performance.now();
  const wacht = () => {
    if (st.ruw) {
      kalibreer();
      st.fase = 'wereld';
      st.tStart = performance.now();
      $('open').hidden = true;
      toonHint(OPEN.hint);
      return;
    }
    if (performance.now() - t0 > BEELD.START_WACHT_MS) { melding(FALLBACK); return; }
    requestAnimationFrame(wacht);
  };
  // Kort wachten zodat de eerste waarden van een stilgehouden toestel komen, niet van de tik zelf.
  setTimeout(() => requestAnimationFrame(wacht), 350);
});
function toonHint(t) { const h = $('hint'); h.textContent = t; h.classList.remove('uit'); }
function verbergHint() { $('hint').classList.add('uit'); }

// ---------- Tekenen ----------
function rgba(c, a) { return `rgba(${c},${clamp(a, 0, 1).toFixed(3)})`; }
const WARM = '255,227,154', PAPIER = '243,234,216', ZACHT = '214,205,188', LIJN = '201,186,152', DAG = '255,244,209', ACCENT = '184,121,26';

function lokaalAssen(o) {
  // Vlak dat naar de kijker kijkt maar rechtop blijft staan (architectonisch: verticaal blijft verticaal).
  const y = o.yaw * Math.PI / 180;
  return { R: [Math.cos(y), 0, Math.sin(y)], U: [0, 1, 0], N: [Math.sin(y), 0, -Math.cos(y)] };
}
const add = (p, v, k = 1) => [p[0] + v[0] * k, p[1] + v[1] * k, p[2] + v[2] * k];
const vlak = (o, a, b, c = 0) => { const L = lokaalAssen(o); return add(add(add(o.pos, L.R, a), L.U, b), L.N, c); };

let cam;
function P(p) { const q = projecteer(p, cam, F); return q ? { x: W / 2 + q.x, y: H / 2 + q.y, s: q.s, z: q.z } : null; }
function lijn(pts, kleur, alpha, breedte = 1) {
  if (alpha < 0.004) return;
  ctx.beginPath();
  let pen = false;
  for (const p of pts) {
    const q = P(p);
    if (!q) { pen = false; continue; }
    if (pen) ctx.lineTo(q.x, q.y); else { ctx.moveTo(q.x, q.y); pen = true; }
  }
  ctx.strokeStyle = rgba(kleur, alpha);
  ctx.lineWidth = breedte * DPR;
  ctx.stroke();
}
function punt(p, r, kleur, alpha) {
  const q = P(p);
  if (!q || alpha < 0.004) return;
  ctx.fillStyle = rgba(kleur, alpha);
  ctx.beginPath(); ctx.arc(q.x, q.y, Math.max(0.6 * DPR, r * q.s), 0, Math.PI * 2); ctx.fill();
}
function gloed(p, straalPx, kleur, alpha) {
  const q = P(p);
  if (!q || alpha < 0.004) return;
  const g = ctx.createRadialGradient(q.x, q.y, 0, q.x, q.y, straalPx * DPR);
  g.addColorStop(0, rgba(kleur, alpha));
  g.addColorStop(1, rgba(kleur, 0));
  ctx.fillStyle = g;
  ctx.fillRect(q.x - straalPx * DPR, q.y - straalPx * DPR, straalPx * 2 * DPR, straalPx * 2 * DPR);
}
/** Tekst in de ruimte: rechtop in het lokale vlak, perspectivisch geschaald, met een minimale leesbare grootte. */
function tekst(o, regel, a, b, hoogteM, kleur, alpha, { gewicht = 300, spatiering = 0, minPx = 0, maxPx = 0, maxBreedteM = 0, upper = false } = {}) {
  if (alpha < 0.01 || !regel) return 0;
  const p0 = P(vlak(o, a, b));
  const p1 = P(vlak(o, a + 1, b));
  if (!p0 || !p1) return 0;
  const hoek = Math.atan2(p1.y - p0.y, p1.x - p0.x);
  let px = Math.max(hoogteM * p0.s, minPx * DPR);
  if (maxPx) px = Math.min(px, maxPx * DPR);
  const t = upper ? regel.toLocaleUpperCase('nl') : regel;
  const zet = () => {
    ctx.font = `${gewicht} ${px.toFixed(1)}px ${FONT}`;
    if ('letterSpacing' in ctx) ctx.letterSpacing = `${(spatiering * px).toFixed(1)}px`;
  };
  zet();
  // Eén regel (begrip) mag nooit breder zijn dan het scherm: liever kleiner dan afgesneden.
  if (!maxBreedteM) {
    const w = ctx.measureText(t).width, max = W * 0.84;
    if (w > max) { px *= max / w; zet(); }
  }
  ctx.save();
  ctx.translate(p0.x, p0.y);
  ctx.rotate(hoek);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = rgba(kleur, alpha);
  const regels = maxBreedteM ? breek(t, Math.min(W * 0.8, Math.max(maxBreedteM * p0.s, 230 * DPR))) : [t];
  regels.forEach((r, i) => ctx.fillText(r, 0, i * px * 1.32));
  ctx.restore();
  return regels.length * px * 1.32 / p0.s; // gebruikte hoogte in meters (bij deze schaal)
}
function breek(t, max) {
  const woorden = t.split(' '), out = [];
  let r = '';
  for (const w of woorden) {
    const probeer = r ? `${r} ${w}` : w;
    if (ctx.measureText(probeer).width > max && r) { out.push(r); r = w; } else r = probeer;
  }
  if (r) out.push(r);
  return out;
}

// Lagen 2 en 3 onder het begrip.
function lagen(o, b0, s, dim) {
  const t = o.od.toestand;
  let b = b0;
  if (o.herkenning && t.l2 > 0.01) {
    const h = tekst(o, o.herkenning, 0, b, 0.15, PAPIER, t.l2 * 0.88 * dim, { minPx: 14.5, maxPx: 19, maxBreedteM: 2.8 });
    b -= h + 0.08;
  }
  if (t.l3 > 0.01) {
    for (const g of o.glimp) {
      const h = tekst(o, g, 0, b, 0.13, ZACHT, t.l3 * 0.78 * dim, { minPx: 13, maxPx: 16.5, maxBreedteM: 2.8 });
      b -= h + 0.05;
    }
    tekst(o, `lichtsturing.info${o.pad}`, 0, b - 0.06, 0.1, ACCENT, t.l3 * 0.75 * dim, { minPx: 11, maxPx: 12.5, spatiering: 0.04 });
  }
}

function vorm(o, dim) {
  const t = o.od.toestand;
  const a = clamp(t.l1, 0, 1) * dim;
  const ember = GLOEIT.has(o.id) ? (0.16 + 0.06 * Math.sin(st.tijd * 1.05 + o.seed % 7)) * (1 - t.l1) * dim : 0;
  if (ember > 0.01) gloed(o.pos, 9, WARM, ember);
  if (a < 0.008 && ember < 0.01) return;
  const naam = o.naam;
  switch (o.vorm) {
    case 'woord':
    case 'woord-klein': {
      const k = o.vorm === 'woord' ? 0.46 : 0.3;
      tekst(o, naam, 0, 0, k, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.18, upper: true });
      lagen(o, -k * 0.95, 1, dim);
      break;
    }
    case 'sensor': {
      const top = vlak(o, 0, 0.9);
      punt(top, 0.07, PAPIER, a);
      gloed(top, 26, WARM, a * 0.35);
      const ring = [];
      for (let i = 0; i <= 40; i++) {
        const h = (i / 40) * Math.PI * 2;
        ring.push(vlak(o, Math.cos(h) * 1.15, -0.55, Math.sin(h) * 1.15));
      }
      lijn(ring, LIJN, a * 0.55);
      lijn([vlak(o, -1.15, -0.55), top, vlak(o, 1.15, -0.55)], LIJN, a * 0.32);
      tekst(o, naam, 0, 0.22, 0.34, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.18, upper: true });
      lagen(o, -0.95, 1, dim);
      break;
    }
    case 'bus': {
      const L = 1.8;
      lijn([vlak(o, -L, 0.05), vlak(o, L, 0.05)], LIJN, a * 0.8);
      lijn([vlak(o, -L, -0.05), vlak(o, L, -0.05)], LIJN, a * 0.8);
      for (let i = 0; i < 5; i++) {
        const x = -L + 0.4 + i * ((2 * L - 0.8) / 4);
        lijn([vlak(o, x, -0.05), vlak(o, x, -0.42)], LIJN, a * 0.5);
        lijn([vlak(o, x - 0.16, -0.42), vlak(o, x + 0.16, -0.42), vlak(o, x + 0.16, -0.5), vlak(o, x - 0.16, -0.5), vlak(o, x - 0.16, -0.42)], LIJN, a * 0.5);
      }
      tekst(o, naam, 0, 0.42, 0.42, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.22, upper: true });
      lagen(o, -0.85, 1, dim);
      break;
    }
    case 'venster': {
      const w = 0.75, h = 1.15;
      const pts = [vlak(o, -w, -h), vlak(o, w, -h), vlak(o, w, h), vlak(o, -w, h)].map(P);
      if (pts.every(Boolean)) {
        const g = ctx.createLinearGradient(pts[3].x, pts[3].y, pts[0].x, pts[0].y);
        g.addColorStop(0, rgba(DAG, a * 0.22));
        g.addColorStop(1, rgba(DAG, a * 0.04));
        ctx.fillStyle = g;
        ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y))); ctx.closePath(); ctx.fill();
      }
      lijn([vlak(o, -w, -h), vlak(o, w, -h), vlak(o, w, h), vlak(o, -w, h), vlak(o, -w, -h)], DAG, a * 0.5);
      lijn([vlak(o, 0, -h), vlak(o, 0, h)], DAG, a * 0.3);
      lijn([vlak(o, -w, 0.25), vlak(o, w, 0.25)], DAG, a * 0.3);
      tekst(o, naam, 0, -h - 0.38, 0.32, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.16, upper: true });
      lagen(o, -h - 0.8, 1, dim);
      break;
    }
    case 'verbinding': {
      lijn([vlak(o, -2.6, 0), vlak(o, 2.6, 0)], LIJN, a * 0.6);
      punt(vlak(o, -2.6, 0), 0.05, PAPIER, a * 0.8);
      punt(vlak(o, 2.6, 0), 0.05, PAPIER, a * 0.8);
      punt(vlak(o, 0, 0), 0.07, WARM, a);
      gloed(vlak(o, 0, 0), 30, WARM, a * 0.3);
      tekst(o, naam, 0, 0.5, 0.5, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.3, upper: true });
      lagen(o, -0.42, 1, dim);
      break;
    }
    case 'gebouw': {
      const w = 1.1, h = 1.5;
      lijn([vlak(o, -w, -h), vlak(o, w, -h), vlak(o, w, h), vlak(o, -w, h), vlak(o, -w, -h)], LIJN, a * 0.55);
      for (let i = 1; i < 4; i++) lijn([vlak(o, -w, -h + i * (2 * h / 4)), vlak(o, w, -h + i * (2 * h / 4))], LIJN, a * 0.3);
      const r = rng(o.seed);
      for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) {
        punt(vlak(o, -w + 0.3 + j * 0.75 + r() * 0.1, -h + 0.35 + i * (2 * h / 4)), 0.035, WARM, a * (0.35 + 0.5 * r()));
      }
      tekst(o, naam, 0, h + 0.4, 0.34, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.16, upper: true });
      lagen(o, -h - 0.35, 1, dim);
      break;
    }
    case 'punten': {
      const r = rng(o.seed);
      const pts = Array.from({ length: 16 }, () => vlak(o, (r() - 0.5) * 3, (r() - 0.5) * 1.6, (r() - 0.5) * 2));
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1], pts[i][2] - pts[j][2]);
        if (d < 0.95) lijn([pts[i], pts[j]], LIJN, a * 0.22 * (1 - d / 0.95));
      }
      pts.forEach((p, i) => punt(p, 0.03, i % 4 ? PAPIER : WARM, a * 0.8));
      tekst(o, naam, 0, 1.2, 0.36, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.3, upper: true });
      lagen(o, -1.15, 1, dim);
      break;
    }
    case 'plattegrond': {
      // Op de vloer: een fragment van een plattegrond met ruimtes.
      const L = lokaalAssen(o);
      const vloer = (x, z) => add(add([o.pos[0], VLOER, o.pos[2]], L.R, x), L.N, z);
      const kamers = [[-1.3, -0.7, 0.9, 0.9], [-0.4, -0.7, 1.0, 0.9], [0.6, -0.7, 0.8, 0.9], [-1.3, 0.2, 1.4, 0.7], [0.1, 0.2, 1.3, 0.7]];
      for (const [x, z, w, d] of kamers) lijn([vloer(x, z), vloer(x + w, z), vloer(x + w, z + d), vloer(x, z + d), vloer(x, z)], LIJN, a * 0.55);
      kamers.forEach(([x, z, w, d], i) => punt(vloer(x + w / 2, z + d / 2), 0.03, WARM, a * (i === 1 ? 0.9 : 0.4)));
      // Begrip en tekst staan rechtop boven de plattegrond, niet erop.
      tekst(o, naam, 0, VLOER - o.pos[1] + 1.5, 0.3, PAPIER, a, { maxPx: 44, gewicht: 200, spatiering: 0.2, upper: true, minPx: 0 });
      lagen(o, VLOER - o.pos[1] + 1.27, 1, dim);
      break;
    }
  }
}

function academie(dim, verlicht) {
  const A = st.academie;
  const o = { ...ACADEMIE, pos: acPos };
  const p = A.open;
  const zw = 0.025 + p * 0.85; // halve breedte
  const zh = 1.6 + p * 0.35;
  const basisAlpha = (0.16 + 0.05 * Math.sin(st.tijd * 0.7)) * dim;
  const a = clamp(basisAlpha + verlicht * 0.55 + p * 0.4, 0, 1) * dim;
  // Diepte: teruglopende kozijnen achter de opening.
  for (let k = 4; k >= 1; k--) {
    const d = k * 1.6 * p;
    if (p < 0.02) break;
    lijn([vlak(o, -zw, -zh, d), vlak(o, zw, -zh, d), vlak(o, zw, zh, d), vlak(o, -zw, zh, d), vlak(o, -zw, -zh, d)], WARM, a * p * (0.32 - k * 0.05));
  }
  const pts = [vlak(o, -zw, -zh), vlak(o, zw, -zh), vlak(o, zw, zh), vlak(o, -zw, zh)].map(P);
  if (pts.every(Boolean)) {
    const g = ctx.createLinearGradient(pts[0].x, pts[0].y, pts[3].x, pts[3].y);
    g.addColorStop(0, rgba(DAG, a * (0.35 + 0.4 * p)));
    g.addColorStop(1, rgba(WARM, a * (0.12 + 0.25 * p)));
    ctx.fillStyle = g;
    ctx.beginPath(); pts.forEach((q, i) => (i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y))); ctx.closePath(); ctx.fill();
  }
  // Licht dat op de vloer naar je toe valt.
  if (p > 0.02) {
    const L = lokaalAssen(o);
    const v = (x, z) => add(add([acPos[0], VLOER, acPos[2]], L.R, x), L.N, z);
    const f = [v(-zw, 0), v(zw, 0), v(zw * 2.2, -5 * p), v(-zw * 2.2, -5 * p)].map(P);
    if (f.every(Boolean)) {
      const g = ctx.createLinearGradient((f[0].x + f[1].x) / 2, f[0].y, (f[2].x + f[3].x) / 2, f[2].y);
      g.addColorStop(0, rgba(WARM, 0.16 * p * dim));
      g.addColorStop(1, rgba(WARM, 0));
      ctx.fillStyle = g;
      ctx.beginPath(); f.forEach((q, i) => (i ? ctx.lineTo(q.x, q.y) : ctx.moveTo(q.x, q.y))); ctx.closePath(); ctx.fill();
    }
  }
  const tl = smoothstep(0.15, 0.6, verlicht + p);
  tekst(o, ACADEMIE.naam, 0, zh + 0.55, 0.42, PAPIER, tl * dim, { maxPx: 44, gewicht: 200, spatiering: 0.34, upper: true });
  const tg = smoothstep(0.7, 1, p);
  tekst(o, ACADEMIE.glimp[0], 0, -zh - 0.45, 0.2, ZACHT, tg * 0.85 * dim, { minPx: 14 });
}

function architectuur(dim, lx, ly) {
  // Op halve resolutie: vloerraster en enkele verticale lijnen, daarna gemaskeerd door het lichtveld.
  const s = BEELD.ARCH_SCHAAL;
  actx.setTransform(1, 0, 0, 1, 0, 0);
  actx.clearRect(0, 0, arch.width, arch.height);
  const sterkte = (0.2 + 0.32 * st.rijker) * dim;
  if (sterkte < 0.01) return;
  actx.lineWidth = 1;
  actx.strokeStyle = rgba(LIJN, sterkte);
  actx.beginPath();
  const seg = (p1, p2) => {
    const a = projecteer(p1, cam, F), b = projecteer(p2, cam, F);
    if (!a || !b) return;
    actx.moveTo((W / 2 + a.x) * s, (H / 2 + a.y) * s);
    actx.lineTo((W / 2 + b.x) * s, (H / 2 + b.y) * s);
  };
  const R = 16, stap = 2;
  for (let x = -R; x <= R; x += stap) for (let z = -R; z < R; z += stap) {
    seg([x, VLOER, z], [x, VLOER, z + stap]);
    seg([z, VLOER, x], [z + stap, VLOER, x]);
  }
  // Verticale lijnen: randen van de ruimte, ver weg.
  for (let i = 0; i < 14; i++) {
    const h = (i / 14) * Math.PI * 2 + 0.2;
    const r = 19 + (i % 3) * 2;
    seg([Math.sin(h) * r, VLOER, -Math.cos(h) * r], [Math.sin(h) * r, 7, -Math.cos(h) * r]);
  }
  actx.stroke();
  // Masker: alleen waar licht valt.
  actx.globalCompositeOperation = 'destination-in';
  const straal = Math.min(W, H) * BEELD.POOL_STRAAL * s * (1 + st.wekken * 0.6);
  const g = actx.createRadialGradient(lx * s, ly * s, 0, lx * s, ly * s, straal);
  g.addColorStop(0, 'rgba(0,0,0,1)');
  g.addColorStop(0.55, 'rgba(0,0,0,0.35)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  actx.fillStyle = g;
  actx.fillRect(0, 0, arch.width, arch.height);
  actx.globalCompositeOperation = 'source-over';
  ctx.drawImage(arch, 0, 0, W, H);
}

function verbindingen(dim) {
  for (const [a, b] of VERBINDINGEN) {
    const A = byId[a], B = byId[b];
    const k = Math.min(A.od.toestand.ontdekt ? 1 : 0, B.od.toestand.ontdekt ? 1 : 0);
    if (!k) continue;
    const alpha = (0.08 + 0.1 * st.rijker + 0.25 * st.wekken + (a === 'gacs' || b === 'gacs' ? 0.06 : 0)) * dim;
    const pts = [];
    for (let i = 0; i <= 24; i++) {
      const t = i / 24;
      const p = [A.pos[0] + (B.pos[0] - A.pos[0]) * t, A.pos[1] + (B.pos[1] - A.pos[1]) * t, A.pos[2] + (B.pos[2] - A.pos[2]) * t];
      const n = Math.hypot(...p);
      const r = n + Math.sin(t * Math.PI) * 1.2; // licht naar buiten gebogen, door de ruimte
      pts.push([p[0] / n * r, p[1] / n * r, p[2] / n * r]);
    }
    lijn(pts, WARM, alpha, 0.8);
  }
}

let vorige = performance.now();
let hintWeg = false;
function frame(nu) {
  const dt = clamp((nu - vorige) / 1000, 0, 0.05);
  vorige = nu;
  st.tijd += dt;
  if (st.fase === 'wereld') stap(dt, nu);
  teken();
  requestAnimationFrame(frame);
}

function stap(dt, nu) {
  st.cam.yaw = demp(st.cam.yaw, st.doel.yaw, dt, { wrap: true });
  st.cam.pitch = demp(st.cam.pitch, st.doel.pitch, dt);
  st.cam.roll = demp(st.cam.roll, st.doel.roll, dt);
  st.licht.yaw = dempVast(st.licht.yaw, st.cam.yaw, dt, CAMERA.TAU_LICHT, true);
  st.licht.pitch = dempVast(st.licht.pitch, st.cam.pitch, dt, CAMERA.TAU_LICHT);
  st.gekeken = Math.max(st.gekeken, Math.hypot(Math.abs(st.cam.yaw), st.cam.pitch));
  if (!hintWeg && (st.gekeken > BEELD.HINT_WEG_NA_GRADEN || nu - st.tStart > BEELD.HINT_MAX_MS)) { hintWeg = true; verbergHint(); }

  // Rust / oppakken (optioneel).
  const plat = RUST_AAN && detector.state.flat;
  st.rust = dempVast(st.rust, plat ? 1 : 0, dt, plat ? 1.6 : 0.25);
  st.wekken = Math.max(0, st.wekken - dt / 1.8);

  const L = richting(st.licht.yaw, st.licht.pitch);
  const kracht = 1 - 0.8 * st.rust;
  for (const o of onderwerpen) {
    const v = verlichting(o.dir, L) * kracht;
    if (o.od.stap(v, dt)) {
      st.ontdekt += 1;
      $('sr').textContent = `Ontdekt: ${o.naam}`;
    }
  }
  // Academie: lang genoeg ernaar kijken opent de doorgang; wegkijken laat haar langzaam weer sluiten.
  const A = st.academie;
  const va = verlichting(acDir, L) * kracht;
  if (va > 0.6) A.verblijf += dt; else A.verblijf = Math.max(0, A.verblijf - dt * 0.5);
  if (A.verblijf > 1.2) A.open = Math.min(1, A.open + dt / 2.6);
  else A.open = Math.max(A.ontdekt ? 0.35 : 0, A.open - dt / 7);
  if (!A.ontdekt && A.open > 0.6) { A.ontdekt = true; st.ontdekt += 1; $('sr').textContent = 'Ontdekt: Academie'; }
  A.verlicht = va;

  st.kernDim = dempVast(st.kernDim ?? 0, st.kern.getoond && !st.kern.weg ? 1 : 0, dt, 0.9);
  st.rijker = dempVast(st.rijker, st.ontdekt >= DRAMATURGIE.RIJKER_NA ? 1 : 0, dt, 2.5);
  // Kernzin.
  const K = st.kern;
  // Op een logisch moment: niet terwijl je een onderwerp leest of de Academie opent, maar als het licht in het donker valt.
  const leest = onderwerpen.some((o) => o.od.toestand.l2 > 0.25) || A.open > 0.05 + (A.ontdekt ? 0.35 : 0);
  if (leest) K.t = null;
  if (!K.getoond && st.ontdekt >= DRAMATURGIE.KERN_NA && !leest) {
    if (K.t == null) K.t = st.tijd;
    if (st.tijd - K.t > BEELD.KERN_VERTRAGING) {
      K.getoond = true; K.vanaf = st.tijd;
      $('kern').textContent = KERN;
      $('kern').classList.remove('uit');
      verbergHint();
    }
  }
  // Ga je tijdens de kernzin iets anders lezen of de Academie openen, dan maakt de zin eerder plaats.
  if (K.getoond && !K.weg && (st.tijd - K.vanaf > BEELD.KERN_DUUR || (leest && st.tijd - K.vanaf > 2.5))) {
    K.weg = true;
    $('kern').classList.add('uit');
    $('verder').classList.remove('uit');
  }
}

function teken() {
  ctx.fillStyle = '#050608';
  ctx.fillRect(0, 0, W, H);
  if (st.fase !== 'wereld') return;
  cam = basis(st.cam.yaw, st.cam.pitch, st.cam.roll);
  const A = st.academie;
  const kernDim = 1 - 0.7 * st.kernDim;
  const dim = (1 - 0.45 * A.open * (A.verlicht ?? 0)) * (1 - 0.82 * st.rust) * kernDim;
  // Lichtveld op het scherm: waar het (iets tragere) licht valt.
  const Lp = P(richting(st.licht.yaw, st.licht.pitch).map((v) => v * 10)) ?? { x: W / 2, y: H / 2 };
  architectuur(dim, Lp.x, Lp.y);
  const straal = Math.min(W, H) * BEELD.POOL_STRAAL * (1 - 0.5 * st.rust) * (1 + 0.5 * st.wekken);
  ctx.globalCompositeOperation = 'lighter';
  const g = ctx.createRadialGradient(Lp.x, Lp.y, 0, Lp.x, Lp.y, straal);
  g.addColorStop(0, rgba(WARM, 0.085 * (1 - 0.7 * st.rust) + 0.06 * st.wekken));
  g.addColorStop(0.45, rgba(WARM, 0.03 * (1 - 0.7 * st.rust)));
  g.addColorStop(1, rgba(WARM, 0));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
  ctx.globalCompositeOperation = 'source-over';

  verbindingen(dim);
  // Ver weg eerst tekenen (diepte).
  academie(dim, A.verlicht ?? 0);
  const volgorde = onderwerpen.map((o) => [o, P(o.pos)?.z ?? -1]).sort((x, y) => y[1] - x[1]).map((x) => x[0]);
  for (const o of volgorde) vorm(o, dim);
}

requestAnimationFrame(frame);

// Geen standaard-touchgedrag (scrollen/zoomen): de beweging van de telefoon is de bediening. Links blijven werken.
document.addEventListener('touchmove', (e) => { if (!e.target.closest('a,button')) e.preventDefault(); }, { passive: false });
