// /ervaar/ — fase 2, art-direction 07-10-2026: lichtsturing.info uit elkaar gehaald en rondom de bezoeker gezet.
// De iPhone is het venster én de bediening. Alles lokaal; geen opslag, geen netwerk, geen analytics.
//
// Opbouw: sensor-engine uit fase 1 (orientation-math, motion-detect) → gedempte camera (camera.mjs) → echte
// sitecomponenten (klassen en stylesheets van lichtsturing.info) als panelen in CSS-3D, één wereld-transform per frame →
// het licht als overlay-canvas: donker buiten de lichtkring, en per paneel een onthulling (laag 1/2/3). Geen bibliotheek.
import { rotationMatrix, relativeView } from '../experience-test/orientation-math.mjs?v=fb23827d8b';
import { createDetector } from '../experience-test/motion-detect.mjs?v=fb23827d8b';
import { CAMERA, demp, dempVast, basis, projecteer, verlichting, ontdekking, smoothstep, PERSPECTIEF, wereldTransform, paneelTransform, paneelPositie } from './camera.mjs?v=fb23827d8b';
import { ONDERWERPEN, ACADEMIE, VERBINDINGEN, DRAMATURGIE, KERN, FALLBACK, OPEN, ICONEN, richting } from './world.mjs?v=fb23827d8b';

// ---------- Instelbaar ----------
const BEELD = {
  POOL: 0.56, // straal van de lichtkring t.o.v. de korte schermzijde
  DONKER_START: 0.94, // hoeveel de wereld buiten het licht gedekt is (1 = zwart) aan het begin
  DONKER_SITE: 0.62, // … zodra de ruimte „site” wordt (DRAMATURGIE.SITE_NA)
  HINT_WEG_NA_GRADEN: 28,
  HINT_MAX_MS: 7000,
  VIND_MS: 1700, // „Vind het licht.” zichtbaar vóór „Kijk om je heen.”
  KERN_VERTRAGING: 1.2, // s na de drempel, op een rustig moment
  KERN_DUUR: 6, // s, daarna wordt de ruimte de gewone site
  RECHTOP: { MIN_BETA: 50, MAX_BETA: 125, STIL_GRADEN: 3.5, STIL_MS: 450, MAX_MS: 4500 }, // startpositie na toestemming
};
// Rust/oppakken (optioneel, fase 1 nog niet hard bewezen): alleen bij een tafel-stil toestel; ?rust=0 zet het uit.
const RUST_AAN = new URLSearchParams(location.search).get('rust') !== '0';
const RUST_CFG = { STILL_ACCEL: 0.15, STILL_ROT: 3, FLAT_ANGLE_DEG: 10, FLAT_MS: 3000, STATIONARY_MS: 2000, PICKUP_TILT_DEG: 20, PICKUP_SUSTAIN_MS: 700 };

const $ = (id) => document.getElementById(id);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const P = PERSPECTIEF;
// Panelen krijgen hun grootte via transform-scale (standaard en voorspelbaar). CSS `zoom` gaf in de proef verschoven en
// afgesneden panelen; of Safari scherper rastert met zoom, is op het toestel te beoordelen.

// ---------- Toestand ----------
const st = {
  fase: 'open', // open → wacht → vind → wereld → einde
  ruw: null,
  vorigRuw: null,
  R0: null,
  doel: { yaw: 0, pitch: 0, roll: 0 },
  cam: { yaw: null, pitch: null, roll: null },
  licht: { yaw: null, pitch: null },
  gekeken: 0, tStart: 0, tijd: 0,
  ontdekt: 0, rijker: 0, site: 0, einde: 0, rust: 0, wekken: 0, kernDim: 0,
  kern: { getoond: false, t: null, vanaf: 0, weg: false },
  academie: { open: 0, verblijf: 0, ontdekt: false, verlicht: 0 },
};
let hintWeg = false;
const GLOEIT = new Set(['lichtsturing', 'sensoren', 'gacs']); // zwak zichtbaar vanaf het begin (uitnodiging)
const detector = createDetector(RUST_CFG);

// ---------- Echte sitecomponenten als panelen ----------
const svgIcoon = (id) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" focusable="false" aria-hidden="true">${ICONEN[id]}</svg>`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };

function kruimel(o) {
  if (!o.kruimel) return '';
  return `<nav class="breadcrumb" aria-label="Kruimelpad"><ol>${o.kruimel.map((k) => `<li><a href="${k === 'Home' ? '/nl/' : '/nl/kennisbank/'}">${esc(k)}</a></li>`).join('')}<li aria-current="page">${esc(o.naam)}</li></ol></nav>`;
}
function leerlijn(strip) {
  const dots = strip.cats.map((cat, i) => `<span class="ll-dot${strip.aan.includes(i) ? ' is-on' : ''}" data-cat="${cat}">${i}</span>`).join('');
  return `<nav class="ll-strip" aria-label="Plaats in de leerlijn"><a href="/nl/kennisbank/van-drukknop-tot-lichtmanagement/"><span class="ll-dots" aria-hidden="true">${dots}</span><span class="ll-text">${esc(strip.tekst)}</span></a></nav>`;
}
/** Bouwt het DOM van één paneel; `delen` zijn sub-elementen die pas in een latere laag verschijnen. */
function bouw(o, p) {
  const delen = []; // [{ el, laag }]
  let node;
  switch (p.component) {
    case 'hero':
      node = el(`<section class="fragment-navy" style="width:${p.breedte}px"><p class="eyebrow">${esc(p.eyebrow)}</p><h1>${esc(p.titel)}</h1><p class="lead" data-laag="${p.leadLaag}">${esc(o.herkenning)}</p><p class="pf-cta-row" data-laag="${p.knopLaag}"><a class="pf-button" href="${o.pad}">${esc(p.knop)}</a></p></section>`);
      break;
    case 'kop':
      node = el(`<header class="page-header site-fragment" style="width:${p.breedte}px">${kruimel(o)}<h1>${esc(p.titel)}</h1><p class="lead" data-laag="${p.leadLaag}">${esc(o.herkenning)}</p>${p.legenda ? `<ul class="mp-legend" data-laag="${p.leadLaag}">${p.legenda.map((l, i) => `<li class="mp-tag mp-tag--${i + 1}">${esc(l)}</li>`).join('')}</ul>` : ''}</header>`);
      break;
    case 'in30':
      node = el(`<section class="ladder ladder--in-30-seconden site-fragment" style="width:${p.breedte}px"><h2>In 30 seconden</h2>${o.glimp.map((g) => `<div class="block block--text"><p>${esc(g)}</p></div>`).join('')}<p class="block"><a class="pf-link" href="${o.pad}">${esc(o.naam)}</a></p></section>`);
      break;
    case 'kernpunten':
      node = el(`<div class="site-fragment" style="width:${p.breedte}px"><ul class="kernpunten">${o.glimp.map((g) => `<li>${esc(g)}</li>`).join('')}</ul><p class="block" style="margin:var(--s-4) 0 0"><a class="pf-link" href="${o.pad}">${esc(o.naam)}</a></p></div>`);
      break;
    case 'leerlijn':
      node = el(`<div>${leerlijn(p.strip)}</div>`);
      break;
    case 'icoon':
      node = el(`<span class="icoon">${svgIcoon(p.icoon)}</span>`);
      break;
    case 'kaart':
      node = el(`<a class="topic-card" href="${o.pad}" style="width:${p.breedte}px"><span class="topic-card-visual" aria-hidden="true">${svgIcoon(p.icoon)}</span><span class="topic-card-body"><span class="topic-card-title">${esc(p.titel)}</span><span class="topic-card-text" data-laag="${p.tekstLaag}">${esc(o.herkenning)}</span></span></a>`);
      break;
    case 'chips':
      node = el(`<div class="chips"><span class="eyebrow">${esc(p.label)}</span>${p.chips.map((c) => `<span class="chip">${esc(c)}</span>`).join('')}</div>`);
      break;
    case 'ruimte': {
      const tekst = p.tekstLaag ? o.herkenning : o.glimp[p.tekst];
      node = el(`<a class="pf-example" href="${o.pad}" style="width:${p.breedte}px"><span class="pf-example-art"><svg class="scene" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><use href="#${p.scene}"></use></svg><span class="pf-example-badge">${esc(p.badge)}</span></span><span class="pf-example-body"><span class="pf-example-title">${esc(p.titel)}</span><span class="pf-example-text"${p.tekstLaag ? ` data-laag="${p.tekstLaag}"` : ''}>${esc(tekst)}</span></span></a>`);
      break;
    }
    case 'link':
      node = el(`<p style="margin:0"><a class="pf-link" href="${o.pad}">${esc(p.tekst)}</a></p>`);
      break;
    case 'volgende':
      node = el(`<div class="next-step" style="width:${p.breedte}px"><a class="next-step-link" href="${o.pad}"><span class="next-step-label">${esc(p.label)}</span><span class="next-step-title">${esc(p.titel)}</span><span class="next-step-text">${esc(p.tekst)}</span></a></div>`);
      break;
    case 'keten': {
      node = $('t-keten').content.firstElementChild.cloneNode(true);
      node.classList.add('site-fragment');
      node.style.width = `${p.breedte}px`;
      node.querySelector('.kt-title').textContent = p.titel;
      break;
    }
    default:
      node = el('<div></div>');
  }
  for (const d of node.querySelectorAll('[data-laag]')) delen.push({ el: d, laag: Number(d.dataset.laag) });
  return { node, delen };
}

const wereld = $('wereld');
const panelen = []; // { o, p, el, delen, dir, laag }
const STAPEL_GAP = 30; // px tussen gestapelde panelen (in het vlak van het onderwerp)
const meet = document.createElement('div');
meet.style.cssText = 'position:absolute;left:-9999px;top:0;visibility:hidden;pointer-events:none';
document.body.appendChild(meet);
/** Echte hoogte van een paneel in CSS-px (zonder zoom/transform), voor het stapelen. */
function hoogte(node) { meet.appendChild(node); const h = node.offsetHeight; meet.removeChild(node); return h; }
function plaats(o, p, node) {
  const wrap = document.createElement('div');
  wrap.className = 'paneel';
  wrap.appendChild(node);
  const schaal = (o.afstand - (p.dz ?? 0)) / P * (p.schaal ?? o.schaal ?? 1);
  wrap.style.transform = paneelTransform({ yaw: o.yaw, pitch: o.pitch, afstand: o.afstand, dx: p.dx, dy: p.dy, dz: p.dz, schaal });
  wereld.appendChild(wrap);
  const pos = paneelPositie(o, p);
  const n = Math.hypot(...pos) || 1;
  return { el: wrap, dir: [pos[0] / n, pos[1] / n, pos[2] / n] };
}
const onderwerpen = ONDERWERPEN.map((o) => ({ ...o, dir: richting(o.yaw, o.pitch), od: ontdekking(), seed: o.id.length }));
const byId = Object.fromEntries(onderwerpen.map((o) => [o.id, o]));
for (const o of onderwerpen) {
  let onder = null; // onderkant (px) van het laatste gestapelde paneel, t.o.v. het midden van het eerste
  for (const p of o.panelen) {
    const { node, delen } = bouw(o, p);
    // Hoogte in het vlak van het onderwerp = gemeten hoogte × schaal van dit paneel.
    const h = hoogte(node) * ((o.afstand - (p.dz ?? 0)) / P * (p.schaal ?? o.schaal ?? 1));
    if (p.dy === 'auto') p.dy = onder == null ? h / 2 : onder + STAPEL_GAP + h / 2;
    onder = Math.max(onder ?? -Infinity, p.dy + h / 2);
    const { el: wrap, dir } = plaats(o, p, node);
    for (const d of delen) d.el.style.opacity = '0';
    panelen.push({ o, p, el: wrap, delen, dir, laag: p.laag, op: -1 });
  }
}

// Academie: de „Volgende stap”-kaart als deur, met daarachter een lichtere ruimte.
const ac = (() => {
  const kaart = (extra) => `<a class="next-step-link${extra}" href="#" onclick="return false"><span class="next-step-label">${esc(ACADEMIE.label)}</span><span class="next-step-title">${esc(ACADEMIE.naam)}</span><span class="next-step-text">${esc(ACADEMIE.tekst)}</span></a>`;
  const node = el(`<div class="next-step" style="position:relative;width:300px;height:150px"><div class="ac-ruimte"></div><div class="ac-deur ac-deur--l">${kaart('')}</div><div class="ac-deur ac-deur--r">${kaart('')}</div></div>`);
  const ruimte = node.querySelector('.ac-ruimte');
  const kozijnen = [];
  const diepten = [[0, -140], [1, -320], [2, -560]];
  for (const [i] of diepten) {
    const k = el(`<div class="ac-kozijn" style="width:${300 + i * 70}px;height:${150 + i * 90}px"></div>`);
    ruimte.appendChild(k); kozijnen.push(k);
  }
  const achter = el(`<div class="ac-achter"><p class="eyebrow">${esc(ACADEMIE.ondertitel)}</p><h1>${esc(ACADEMIE.naam)}</h1><p class="lead">${esc(ACADEMIE.tekst)}</p></div>`);
  ruimte.appendChild(achter);
  const { el: wrap, dir } = plaats(ACADEMIE, { dx: 0, dy: 0, dz: 0 }, node);
  diepten.forEach(([i, dz]) => { kozijnen[i].style.transform = `translate(-50%,-50%) translateZ(${dz}px)`; });
  achter.style.transform = 'translate(-50%,-50%) translateZ(-640px)';
  return { wrap, dir, deuren: [...node.querySelectorAll('.ac-deur')], kozijnen, achter };
})();

const vloer = $('vloer');
vloer.style.transform = `translateY(${560}px) rotateX(90deg)`;

// ---------- Sensoren en start ----------
function onOrientation(e) {
  if (e.alpha == null && e.beta == null) return;
  st.vorigRuw = st.ruw;
  st.ruw = e;
  if (st.R0) st.doel = relativeView(st.R0, rotationMatrix(e.alpha, e.beta, e.gamma));
}
function onMotion(e) {
  if (!RUST_AAN) return;
  for (const x of detector.sample({ t: performance.now(), acc: e.acceleration, accG: e.accelerationIncludingGravity, rot: e.rotationRate })) if (x.type === 'pickup') st.wekken = 1;
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
async function wakker() {
  try { if ('wakeLock' in navigator && document.visibilityState === 'visible') await navigator.wakeLock.request('screen'); } catch { /* optioneel */ }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible' && st.fase !== 'open') wakker(); });

function melding(tekst, klein = '') {
  $('melding-tekst').textContent = tekst;
  $('melding-klein').textContent = klein;
  $('melding').hidden = false;
  $('open').hidden = true;
  st.fase = 'melding';
}

$('open-eyebrow').textContent = OPEN.eyebrow;
$('h-open').textContent = OPEN.titel;
$('houd-tekst').firstChild.textContent = OPEN.houd;
$('houd-klein').textContent = OPEN.start;
$('start').textContent = OPEN.knop;
$('kern-tekst').textContent = KERN;

$('start').addEventListener('click', async () => {
  $('start').disabled = true;
  const [o, m] = await Promise.all([vraag(window.DeviceOrientationEvent), vraag(window.DeviceMotionEvent)]);
  if (o === 'denied' || o === 'fout') { melding('Zonder toegang tot de bewegingssensoren kun je hier niet rondkijken.', 'Sluit het tabblad en open de pagina opnieuw om de vraag nog eens te krijgen.'); return; }
  if (o === 'niet beschikbaar') { melding(FALLBACK); return; }
  addEventListener('deviceorientation', onOrientation, true);
  if (m === 'granted' || m === 'niet nodig') addEventListener('devicemotion', onMotion, true);
  st.fase = 'wacht';
  wakker();
  // Startpositie: nu komt er echte oriëntatiedata. De illustratie volgt de telefoon; rechtop én stil = startpositie.
  const houd = $('houd');
  houd.classList.add('is-live');
  const tel = houd.querySelector('.tel');
  const R = BEELD.RECHTOP;
  const t0 = performance.now();
  let stilSinds = null;
  const wacht = () => {
    const nu = performance.now();
    const e = st.ruw;
    if (e) {
      const beta = e.beta ?? 90;
      tel.style.transform = `rotate(${clamp(90 - beta, -60, 60) * 0.5}deg)`;
      const stil = st.vorigRuw && Math.abs(beta - (st.vorigRuw.beta ?? beta)) < R.STIL_GRADEN && Math.abs(((e.alpha ?? 0) - (st.vorigRuw.alpha ?? 0) + 540) % 360 - 180) < R.STIL_GRADEN;
      const rechtop = beta > R.MIN_BETA && beta < R.MAX_BETA;
      if (rechtop && stil) { if (stilSinds == null) stilSinds = nu; } else stilSinds = null;
      const goed = stilSinds != null && nu - stilSinds > R.STIL_MS;
      houd.classList.toggle('is-goed', goed);
      if (goed) $('houd-tekst').firstChild.textContent = OPEN.goed;
      if (goed && nu - stilSinds > R.STIL_MS + 500) return begin();
    }
    if (nu - t0 > R.MAX_MS) { if (st.ruw) return begin(); return melding(FALLBACK); }
    requestAnimationFrame(wacht);
  };
  requestAnimationFrame(wacht);
});
function begin() {
  kalibreer();
  st.fase = 'vind';
  $('open').classList.add('uit');
  setTimeout(() => { $('open').hidden = true; }, 1200);
  const vind = $('vind');
  vind.textContent = OPEN.vind;
  vind.classList.remove('uit');
  setTimeout(() => {
    vind.classList.add('uit');
    st.fase = 'wereld';
    st.tStart = performance.now();
    setTimeout(() => toonHint(OPEN.hint), 900);
  }, BEELD.VIND_MS);
}
function toonHint(t) { const h = $('hint'); h.textContent = t; h.classList.remove('uit'); }
function verbergHint() { $('hint').classList.add('uit'); }

// ---------- Licht (overlay) ----------
const licht = $('licht');
const lctx = licht.getContext('2d');
let W = 0, H = 0;
function maat() { W = innerWidth; H = innerHeight; licht.width = W; licht.height = H; }
addEventListener('resize', maat);
maat();
let cam;
function schermpunt(dir) {
  const q = projecteer(dir.map((v) => v * 1000), cam, P);
  return q ? { x: W / 2 + q.x, y: H / 2 + q.y } : null;
}
function tekenLicht(Lp, donker) {
  lctx.clearRect(0, 0, W, H);
  if (donker > 0.004) {
    lctx.globalCompositeOperation = 'source-over';
    lctx.fillStyle = `rgba(5,6,8,${donker.toFixed(3)})`;
    lctx.fillRect(0, 0, W, H);
    const straal = Math.min(W, H) * BEELD.POOL * (1 - 0.45 * st.rust) * (1 + 0.5 * st.wekken);
    lctx.globalCompositeOperation = 'destination-out';
    const g = lctx.createRadialGradient(Lp.x, Lp.y, 0, Lp.x, Lp.y, straal);
    g.addColorStop(0, 'rgba(0,0,0,1)');
    g.addColorStop(0.45, 'rgba(0,0,0,0.85)');
    g.addColorStop(1, 'rgba(0,0,0,0)');
    lctx.fillStyle = g;
    lctx.fillRect(Lp.x - straal, Lp.y - straal, straal * 2, straal * 2);
  }
  // Warme gloed van het licht zelf (ook als de ruimte al licht is: het blijft „jouw licht”).
  lctx.globalCompositeOperation = 'source-over';
  const w = Math.min(W, H) * 0.5;
  const g2 = lctx.createRadialGradient(Lp.x, Lp.y, 0, Lp.x, Lp.y, w);
  g2.addColorStop(0, `rgba(255,227,154,${(0.16 * (1 - 0.75 * st.einde) * (1 - 0.35 * st.site) * (1 - 0.7 * st.academie.open * st.academie.verlicht) * (1 - 0.6 * st.rust) + 0.1 * st.wekken).toFixed(3)})`);
  g2.addColorStop(1, 'rgba(255,227,154,0)');
  lctx.fillStyle = g2;
  lctx.fillRect(Lp.x - w, Lp.y - w, w * 2, w * 2);
  // Lichtdraden tussen ontdekte onderwerpen.
  if (st.rijker > 0.01) {
    lctx.lineWidth = 1;
    for (const [a, b] of VERBINDINGEN) {
      const A = byId[a], B = byId[b];
      if (!A.od.toestand.ontdekt || !B.od.toestand.ontdekt) continue;
      const alpha = (0.14 * st.rijker + 0.2 * st.wekken) * (1 - 0.5 * st.einde);
      lctx.strokeStyle = `rgba(255,227,154,${alpha.toFixed(3)})`;
      lctx.beginPath();
      let pen = false;
      for (let i = 0; i <= 24; i++) {
        const t = i / 24;
        const d = [A.dir[0] + (B.dir[0] - A.dir[0]) * t, A.dir[1] + (B.dir[1] - A.dir[1]) * t, A.dir[2] + (B.dir[2] - A.dir[2]) * t];
        const q = schermpunt(d);
        if (!q || projecteer(d.map((v) => v * 1000), cam, P).z < 200) { pen = false; continue; }
        if (pen) lctx.lineTo(q.x, q.y); else { lctx.moveTo(q.x, q.y); pen = true; }
      }
      lctx.stroke();
    }
  }
}

// ---------- Frame ----------
let vorige = performance.now();
function frame(nu) {
  const dt = clamp((nu - vorige) / 1000, 0, 0.05);
  vorige = nu;
  st.tijd += dt;
  if (st.fase === 'wereld' || st.fase === 'einde') { stap(dt, nu); teken(); }
  requestAnimationFrame(frame);
}
function stap(dt, nu) {
  st.cam.yaw = demp(st.cam.yaw, st.doel.yaw, dt, { wrap: true });
  st.cam.pitch = demp(st.cam.pitch, st.doel.pitch, dt);
  st.cam.roll = demp(st.cam.roll, st.doel.roll, dt);
  st.licht.yaw = dempVast(st.licht.yaw, st.cam.yaw, dt, CAMERA.TAU_LICHT, true);
  st.licht.pitch = dempVast(st.licht.pitch, st.cam.pitch, dt, CAMERA.TAU_LICHT);
  st.gekeken = Math.max(st.gekeken, Math.hypot(st.cam.yaw, st.cam.pitch));
  if (!hintWeg && (st.gekeken > BEELD.HINT_WEG_NA_GRADEN || nu - st.tStart > BEELD.HINT_MAX_MS)) { hintWeg = true; verbergHint(); }

  const plat = RUST_AAN && detector.state.flat;
  st.rust = dempVast(st.rust, plat ? 1 : 0, dt, plat ? 1.6 : 0.25);
  st.wekken = Math.max(0, st.wekken - dt / 1.8);

  const L = richting(st.licht.yaw, st.licht.pitch);
  const kracht = 1 - 0.8 * st.rust;
  for (const o of onderwerpen) {
    if (o.od.stap(verlichting(o.dir, L) * kracht, dt)) { st.ontdekt += 1; $('sr').textContent = `Ontdekt: ${o.naam}`; }
  }
  const A = st.academie;
  const va = verlichting(ac.dir, L) * kracht;
  if (va > 0.6) A.verblijf += dt; else A.verblijf = Math.max(0, A.verblijf - dt * 0.5);
  if (A.verblijf > 1.1) A.open = Math.min(1, A.open + dt / 2.4);
  else A.open = Math.max(A.ontdekt ? 0.35 : 0, A.open - dt / 7);
  if (!A.ontdekt && A.open > 0.6) { A.ontdekt = true; st.ontdekt += 1; $('sr').textContent = 'Ontdekt: Academie'; }
  A.verlicht = va;

  st.rijker = dempVast(st.rijker, st.ontdekt >= DRAMATURGIE.RIJKER_NA ? 1 : 0, dt, 2.5);
  st.site = dempVast(st.site, st.ontdekt >= DRAMATURGIE.SITE_NA ? 1 : 0, dt, 3);
  // Kernzin op een rustig moment: niet terwijl je iets leest of de Academie opent.
  const K = st.kern;
  const leest = onderwerpen.some((o) => o.od.toestand.l2 > 0.25) || A.open > 0.05 + (A.ontdekt ? 0.35 : 0);
  if (leest) K.t = null;
  if (!K.getoond && st.ontdekt >= DRAMATURGIE.KERN_NA && !leest) {
    if (K.t == null) K.t = st.tijd;
    if (st.tijd - K.t > BEELD.KERN_VERTRAGING) { K.getoond = true; K.vanaf = st.tijd; $('kern').classList.remove('uit'); verbergHint(); }
  }
  st.kernDim = dempVast(st.kernDim, K.getoond && !K.weg ? 1 : 0, dt, 0.9);
  if (K.getoond && !K.weg && (st.tijd - K.vanaf > BEELD.KERN_DUUR || (leest && st.tijd - K.vanaf > 2.5))) {
    K.weg = true;
    $('kern').classList.add('uit');
    einde();
  }
  st.einde = dempVast(st.einde, st.fase === 'einde' ? 1 : 0, dt, 2.2);
}
function einde() {
  // De ruimtelijke website wordt de gewone website: wit, de echte header bovenaan, „Ontdek verder” als echte knop.
  st.fase = 'einde';
  document.body.classList.add('is-site');
  $('kop').classList.add('is-in');
  $('verder').classList.add('is-in');
}
$('verder-knop').addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.add('is-uit');
  setTimeout(() => { location.href = $('verder-knop').getAttribute('href'); }, 700);
});

function teken() {
  cam = basis(st.cam.yaw, st.cam.pitch, st.cam.roll);
  wereld.style.transform = wereldTransform(st.cam.yaw, st.cam.pitch, st.cam.roll);
  const A = st.academie;
  const dim = (1 - 0.35 * A.open * A.verlicht) * (1 - 0.82 * st.rust) * (1 - 0.7 * st.kernDim);
  const basisZicht = (ontdekt, laag) => (ontdekt ? (laag === 3 ? 0.08 : 0.14) + 0.6 * st.site : 0);
  for (const pn of panelen) {
    const t = pn.o.od.toestand;
    const lit = pn.laag === 1 ? t.l1 : pn.laag === 2 ? t.l2 : t.l3;
    const ember = pn.laag === 1 && GLOEIT.has(pn.o.id) ? (0.16 + 0.05 * Math.sin(st.tijd * 1.05 + pn.o.seed)) * (1 - t.l1) : 0;
    let op = Math.max(lit, basisZicht(t.ontdekt, pn.laag), ember);
    op = Math.max(op * dim, st.einde);
    const zichtbaar = pn.dir[0] * cam.f[0] + pn.dir[1] * cam.f[1] + pn.dir[2] * cam.f[2] > 0.05;
    pn.el.classList.toggle('is-weg', !zichtbaar);
    if (Math.abs(op - pn.op) > 0.004) { pn.el.style.opacity = op.toFixed(3); pn.op = op; }
    for (const d of pn.delen) {
      const dl = d.laag === 2 ? t.l2 : t.l3;
      const dop = Math.max(dl, basisZicht(t.ontdekt, d.laag) / Math.max(op, 0.05), st.einde);
      d.el.style.opacity = clamp(dop, 0, 1).toFixed(3);
    }
  }
  // Academie.
  const p = A.open;
  const acOp = Math.max((0.14 + 0.05 * Math.sin(st.tijd * 0.7)) * (1 - p), A.verlicht * 0.9, p, st.einde) * (1 - 0.82 * st.rust);
  ac.wrap.style.opacity = acOp.toFixed(3);
  ac.wrap.classList.toggle('is-weg', ac.dir[0] * cam.f[0] + ac.dir[1] * cam.f[1] + ac.dir[2] * cam.f[2] <= 0.05);
  ac.deuren[0].style.transform = `translateX(${(-p * 108).toFixed(1)}%)`;
  ac.deuren[1].style.transform = `translateX(${(p * 108).toFixed(1)}%)`;
  ac.kozijnen.forEach((k, i) => { k.style.opacity = smoothstep(0.08 + i * 0.12, 0.5 + i * 0.12, p).toFixed(3); });
  ac.achter.style.opacity = smoothstep(0.45, 1, p).toFixed(3);
  // Vloer.
  vloer.style.opacity = ((0.35 * st.rijker + 0.4 * st.site) * (1 - 0.8 * st.rust)).toFixed(3);
  // Licht.
  const Lp = schermpunt(richting(st.licht.yaw, st.licht.pitch)) ?? { x: W / 2, y: H / 2 };
  const donker = (BEELD.DONKER_START + (BEELD.DONKER_SITE - BEELD.DONKER_START) * st.site) * (1 - st.einde) * (1 - 0.4 * st.kernDim) + 0.5 * st.rust * (1 - st.einde);
  tekenLicht(Lp, clamp(donker, 0, 0.97));
}
requestAnimationFrame(frame);

document.addEventListener('touchmove', (e) => { if (!e.target.closest('a,button')) e.preventDefault(); }, { passive: false });
window.__ervaarKlaar = true; // voor het vangnet in index.html
