// Sensortest iPhone (fase 1, proof-of-concept): UI-laag. Alle sensordata blijft in deze pagina (geen opslag, geen
// netwerk, geen analytics). Logica zonder DOM staat in orientation-math.mjs en motion-detect.mjs.
//
// Instelbaar (bovenin): weergave van de bundel. De detectiedrempels staan in motion-detect.mjs (DEFAULT_CONFIG) en zijn
// via URL-parameters te overschrijven (?STILL_ACCEL=0.3&FLAT_MS=1500 …).
import { rotationMatrix, relativeView } from './orientation-math.mjs';
import { createDetector, configFrom } from './motion-detect.mjs';

const VIEW = {
  HALF_FOV_H: 35, // ° yaw die de rand van het canvas haalt
  HALF_FOV_V: 25, // ° pitch
  SMOOTHING: 0.25, // gewicht van de nieuwste waarde per frame (1 = ongedempt)
  ACTIVE_MS: 1000, // „active” als er binnen deze tijd een event was
  LOG_MAX: 14,
};

const $ = (id) => document.getElementById(id);
const fmt = (v, d = 1) => (typeof v === 'number' && Number.isFinite(v) ? (Math.abs(v) < 10 ** -d / 2 ? 0 : v).toFixed(d) : '—');
const yesno = (b) => (b == null ? '<span class="warn">?</span>' : b ? '<span class="yes">YES</span>' : '<span class="no">NO</span>');
const clock = (t = Date.now()) => new Date(t).toTimeString().slice(0, 8);

const cfg = configFrom(Object.fromEntries(new URLSearchParams(location.search)));
const detector = createDetector(cfg);

// iOS levert DeviceMotionEvent.interval in seconden (gemeten: 0,0x), de specificatie in milliseconden.
const intervalMs = (v) => (typeof v === 'number' && Number.isFinite(v) ? (v > 0 && v < 1 ? v * 1000 : v) : null);
const intervalText = (v) => (intervalMs(v) == null ? '—' : `${fmt(intervalMs(v), 1)} ms${v > 0 && v < 1 ? ` (ruw ${v}, iOS: seconden)` : ''}`);
// Schermzijde uit de oriëntatie (beta ≈ 0 = scherm omhoog, ± 180 = scherm omlaag); onafhankelijk van het teken van accG.
const screenSide = () => {
  const b = st.orientation?.beta;
  return typeof b === 'number' ? (Math.abs(b) < 90 ? 'scherm omhoog' : 'scherm omlaag') : null;
};

const st = {
  started: false,
  perm: { orientation: 'niet gevraagd', motion: 'niet gevraagd' },
  orientation: null, // laatste event
  motion: null,
  lastOrientationT: -Infinity,
  lastMotionT: -Infinity,
  orientationStamps: [],
  motionStamps: [],
  calibrated: null, // R0
  view: null, // ruwe yaw/pitch/roll t.o.v. kalibratie
  smooth: { yaw: 0, pitch: 0, roll: 0 },
  wakeLock: 'niet gevraagd',
  log: [],
  nullOrientation: false,
};

// ---------- API-inventaris ----------
const apis = {
  'secure context (https)': window.isSecureContext,
  'DeviceOrientationEvent': 'DeviceOrientationEvent' in window,
  'DeviceOrientationEvent.requestPermission (iOS 13+)': typeof window.DeviceOrientationEvent?.requestPermission === 'function',
  'DeviceMotionEvent': 'DeviceMotionEvent' in window,
  'DeviceMotionEvent.requestPermission (iOS 13+)': typeof window.DeviceMotionEvent?.requestPermission === 'function',
  'ondeviceorientationabsolute': 'ondeviceorientationabsolute' in window,
  'AbsoluteOrientationSensor (Generic Sensor API)': 'AbsoluteOrientationSensor' in window,
  'screen.orientation': !!screen.orientation,
  'navigator.wakeLock': 'wakeLock' in navigator,
  'navigator.clipboard': !!navigator.clipboard,
};
function renderApis() {
  $('apis').innerHTML = Object.entries(apis).map(([k, v]) => `<dt>${k}</dt><dd>${yesno(!!v)}</dd>`).join('') +
    `<dt>user agent</dt><dd>${escapeHtml(navigator.userAgent)}</dd>`;
}
function escapeHtml(s) { return String(s).replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c])); }

// ---------- Log ----------
function log(text) {
  st.log.unshift({ t: Date.now(), text });
  if (st.log.length > 60) st.log.length = 60;
  $('log').innerHTML = st.log.slice(0, VIEW.LOG_MAX).map((e) => `<li>${clock(e.t)} <b>${escapeHtml(e.text)}</b></li>`).join('');
}
$('logmax').textContent = VIEW.LOG_MAX;
$('clearlog').addEventListener('click', () => { st.log = []; $('log').innerHTML = ''; });

// ---------- Permissions ----------
async function requestOne(kind) {
  const ctor = kind === 'orientation' ? window.DeviceOrientationEvent : window.DeviceMotionEvent;
  if (!ctor) return 'niet beschikbaar';
  if (typeof ctor.requestPermission !== 'function') return 'niet nodig';
  try {
    return await ctor.requestPermission(); // 'granted' | 'denied'
  } catch (e) {
    return `error: ${e?.name ?? ''} ${e?.message ?? e}`.trim();
  }
}

function attachListeners() {
  window.addEventListener('deviceorientation', onOrientation, true);
  window.addEventListener('devicemotion', onMotion, true);
}

// Signaal bij pickup: een flits over het hele scherm, en optioneel een kort geluid. Trillen kan niet: iOS Safari heeft geen
// Vibration API. Web Audio wordt in de tik op „Start sensortest” vrijgegeven; of iOS het in de stille modus dempt, is
// juist een van de dingen die deze test laat zien.
let audio = null;
function unlockAudio() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    audio = audio || new AC();
    if (audio.state === 'suspended') audio.resume();
    const o = audio.createOscillator(), g = audio.createGain();
    g.gain.value = 0.0001; // onhoorbaar: alleen om de context in de gebruikersactie te starten
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + 0.02);
  } catch { audio = null; }
}
function beep() {
  if (!audio || !$('sound').checked) return;
  try {
    if (audio.state === 'suspended') audio.resume();
    const t = audio.currentTime, o = audio.createOscillator(), g = audio.createGain();
    o.frequency.value = 880;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.4, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25);
    o.connect(g).connect(audio.destination);
    o.start(t); o.stop(t + 0.3);
  } catch { /* geluid is optioneel */ }
}
function flash() {
  const el = $('flash');
  el.classList.remove('on');
  void el.offsetWidth; // animatie opnieuw starten
  el.classList.add('on');
}

async function start() {
  $('start').disabled = true;
  unlockAudio();
  $('msg').textContent = 'Toestemming vragen…';
  if (!window.isSecureContext) {
    $('msg').textContent = 'Geen secure context: iOS geeft alleen via https toegang tot sensoren.';
  }
  // Beide aanvragen in dezelfde gebruikersactie starten (vóór een await), anders is de user-activation mogelijk al verbruikt.
  const [o, m] = await Promise.allSettled([requestOne('orientation'), requestOne('motion')]);
  st.perm.orientation = o.status === 'fulfilled' ? o.value : `error: ${o.reason}`;
  st.perm.motion = m.status === 'fulfilled' ? m.value : `error: ${m.reason}`;
  log(`permission orientation: ${st.perm.orientation}; motion: ${st.perm.motion}`);
  const ok = (v) => v === 'granted' || v === 'niet nodig';
  if (ok(st.perm.orientation) || ok(st.perm.motion)) {
    attachListeners();
    st.started = true;
    $('calibrate').disabled = false;
    $('msg').textContent = 'Sensoren actief zodra er events binnenkomen. Houd de telefoon rechtop voor je en kalibreer.';
    requestWakeLock();
  } else {
    $('msg').textContent = 'Geen sensortoegang. Bij „denied”: tabblad sluiten, Safari volledig afsluiten en de pagina opnieuw openen (iOS onthoudt de weigering per site).';
    $('start').disabled = false;
  }
  // Fout (geen expliciete weigering) bij één van beide: aparte knop, zodat de aanvraag in een eigen tik kan.
  for (const kind of ['orientation', 'motion']) {
    const v = st.perm[kind];
    const btn = $(`retry-${kind}`);
    btn.hidden = !(v.startsWith('error') || v === 'denied');
    $('retry').hidden = $('retry-orientation').hidden && $('retry-motion').hidden;
  }
}
async function retry(kind) {
  st.perm[kind] = await requestOne(kind);
  log(`permission ${kind} (opnieuw): ${st.perm[kind]}`);
  if (st.perm[kind] === 'granted' && !st.started) { attachListeners(); st.started = true; $('calibrate').disabled = false; requestWakeLock(); }
  $(`retry-${kind}`).hidden = st.perm[kind] === 'granted';
  $('retry').hidden = $('retry-orientation').hidden && $('retry-motion').hidden;
}
$('start').addEventListener('click', start);
$('retry-orientation').addEventListener('click', () => retry('orientation'));
$('retry-motion').addEventListener('click', () => retry('motion'));

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) { st.wakeLock = 'niet beschikbaar'; return; }
  try {
    const lock = await navigator.wakeLock.request('screen');
    st.wakeLock = 'actief';
    lock.addEventListener('release', () => { st.wakeLock = 'vrijgegeven'; });
  } catch (e) {
    st.wakeLock = `error: ${e?.name ?? e}`;
  }
}
document.addEventListener('visibilitychange', () => {
  log(`pagina ${document.visibilityState}`);
  if (document.visibilityState === 'visible' && st.started && st.wakeLock !== 'actief') requestWakeLock();
});

// ---------- Orientation ----------
function stamp(arr, t) {
  arr.push(t);
  while (arr.length && t - arr[0] > 1000) arr.shift();
}
function onOrientation(e) {
  const t = performance.now();
  st.lastOrientationT = t;
  stamp(st.orientationStamps, t);
  st.orientation = e;
  st.nullOrientation = e.alpha == null && e.beta == null && e.gamma == null;
  if (st.calibrated && !st.nullOrientation) st.view = relativeView(st.calibrated, rotationMatrix(e.alpha, e.beta, e.gamma));
}
function calibrate() {
  const e = st.orientation;
  if (!e || st.nullOrientation) { $('msg').textContent = 'Nog geen oriëntatiedata ontvangen; kalibreren kan pas als er events binnenkomen.'; return; }
  st.calibrated = rotationMatrix(e.alpha, e.beta, e.gamma);
  st.view = { yaw: 0, pitch: 0, roll: 0 };
  st.smooth = { yaw: 0, pitch: 0, roll: 0 };
  log(`calibrated (alpha ${fmt(e.alpha, 0)}, beta ${fmt(e.beta, 0)}, gamma ${fmt(e.gamma, 0)})`);
  $('msg').textContent = 'Gekalibreerd: de huidige richting is nu het midden.';
}
$('calibrate').addEventListener('click', calibrate);

// ---------- Motion ----------
const EVENT_TEXT = {
  moving: 'moving',
  stationary: 'stationary',
  flat: 'flat/stable',
  pickup: 'pickup detected',
  resume: 'sensordata hervat',
  bump: 'bump (geen pickup)',
  unflat: 'niet meer vlak',
  strong: 'strong movement',
};
function onMotion(e) {
  const t = performance.now();
  st.lastMotionT = t;
  stamp(st.motionStamps, t);
  st.motion = e;
  const events = detector.sample({ t, acc: e.acceleration, accG: e.accelerationIncludingGravity, rot: e.rotationRate });
  for (const ev of events) {
    const detail = ev.type === 'flat' ? screenSide() ?? ev.detail : ev.detail;
    log(`${EVENT_TEXT[ev.type] ?? ev.type}${detail ? ` (${detail})` : ''}`);
    if (ev.type === 'pickup') { flash(); beep(); }
  }
}

// ---------- Weergave ----------
const canvas = $('stage');
const ctx = canvas.getContext('2d');
$('fovh').textContent = VIEW.HALF_FOV_H;
$('fovv').textContent = VIEW.HALF_FOV_V;
$('smooth').textContent = VIEW.SMOOTHING;

function draw() {
  const w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2;
  ctx.clearRect(0, 0, w, h);
  ctx.fillStyle = '#05070c';
  ctx.fillRect(0, 0, w, h);
  // Raster en kruis als referentie.
  ctx.strokeStyle = '#1a2338';
  ctx.lineWidth = 1;
  for (let x = 0; x <= w; x += w / 8) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke(); }
  for (let y = 0; y <= h; y += h / 6) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke(); }
  ctx.strokeStyle = '#2d3b5c';
  ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, h); ctx.moveTo(0, cy); ctx.lineTo(w, cy); ctx.stroke();

  if (!st.view) {
    ctx.fillStyle = '#8b97ad';
    ctx.font = '20px -apple-system, Helvetica, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(st.started ? 'Kalibreer om de bundel te starten' : 'Start de sensortest', cx, cy + 7);
    return;
  }
  const s = st.smooth;
  const k = VIEW.SMOOTHING;
  s.yaw += k * (st.view.yaw - s.yaw);
  s.pitch += k * (st.view.pitch - s.pitch);
  s.roll += k * (st.view.roll - s.roll);
  const nx = s.yaw / VIEW.HALF_FOV_H, ny = -s.pitch / VIEW.HALF_FOV_V;
  const out = Math.abs(nx) > 1 || Math.abs(ny) > 1;
  const px = cx + Math.max(-1, Math.min(1, nx)) * (w / 2 - 24);
  const py = cy + Math.max(-1, Math.min(1, ny)) * (h / 2 - 24);

  // Bundel: kegel vanaf onder, gloed op het doelpunt.
  const cone = ctx.createLinearGradient(cx, h, px, py);
  cone.addColorStop(0, 'rgba(255,209,102,0.02)');
  cone.addColorStop(1, 'rgba(255,209,102,0.28)');
  ctx.fillStyle = cone;
  ctx.beginPath(); ctx.moveTo(cx - 40, h); ctx.lineTo(px, py); ctx.lineTo(cx + 40, h); ctx.closePath(); ctx.fill();
  const glow = ctx.createRadialGradient(px, py, 2, px, py, 70);
  glow.addColorStop(0, 'rgba(255,240,200,0.95)');
  glow.addColorStop(0.3, 'rgba(255,209,102,0.55)');
  glow.addColorStop(1, 'rgba(255,209,102,0)');
  ctx.fillStyle = glow;
  ctx.beginPath(); ctx.arc(px, py, 70, 0, Math.PI * 2); ctx.fill();
  // Horizonlijn draait mee met roll.
  ctx.save();
  ctx.translate(px, py);
  ctx.rotate(-s.roll * Math.PI / 180);
  ctx.strokeStyle = 'rgba(230,235,245,0.8)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(-50, 0); ctx.lineTo(50, 0); ctx.moveTo(0, -10); ctx.lineTo(0, 10); ctx.stroke();
  ctx.restore();
  if (out) { ctx.strokeStyle = '#f87171'; ctx.lineWidth = 6; ctx.strokeRect(3, 3, w - 6, h - 6); }
  $('viewtxt').textContent = `yaw ${fmt(st.view.yaw, 0)}° · pitch ${fmt(st.view.pitch, 0)}° · roll ${fmt(st.view.roll, 0)}°${out ? ' · buiten bereik' : ''}`;
}

function renderStatus(now) {
  const d = detector.state;
  const oAct = now - st.lastOrientationT <= VIEW.ACTIVE_MS;
  const mAct = now - st.lastMotionT <= VIEW.ACTIVE_MS;
  const ago = d.pickupAt != null ? ` (${((now - d.pickupAt) / 1000).toFixed(0)} s geleden)` : '';
  $('status').innerHTML = [
    ['sensor permission', `orientation: ${escapeHtml(st.perm.orientation)} · motion: ${escapeHtml(st.perm.motion)}`],
    ['orientation active', yesno(oAct) + (oAct ? ` ${st.orientationStamps.length} Hz` : '') + (st.nullOrientation ? ' <span class="warn">(alleen null-waarden)</span>' : '')],
    ['motion active', yesno(mAct) + (mAct ? ` ${st.motionStamps.length} Hz` : '')],
    ['calibrated', yesno(!!st.calibrated)],
    ['moving', yesno(mAct ? d.moving : null)],
    ['stationary', yesno(mAct ? d.stationary : null)],
    ['phone flat/stable', yesno(mAct ? d.flat : null) + (d.flat && screenSide() ? ` ${screenSide()}` : '')],
    ['pickup detected', yesno(mAct ? d.pickup : null) + ago],
    ['tilt t.o.v. vlak', `${fmt(d.tiltDeg, 0)}°`],
    ['activity', `aLin ${fmt(d.aLin, 2)} m/s² · rot ${fmt(d.rot, 0)} °/s${d.linearFallback ? ' (terugval zonder acceleration)' : ''}`],
    ['wake lock', escapeHtml(st.wakeLock)],
    ['screen orientation', screen.orientation ? `${screen.orientation.type} ${screen.orientation.angle}°` : '—'],
  ].map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');

  const o = st.orientation;
  $('orientation').innerHTML = [
    ['alpha', fmt(o?.alpha)],
    ['beta', fmt(o?.beta)],
    ['gamma', fmt(o?.gamma)],
    ['absolute', o ? String(o.absolute) : '—'],
    ['webkitCompassHeading', o && 'webkitCompassHeading' in o ? `${fmt(o.webkitCompassHeading)} (±${fmt(o.webkitCompassAccuracy, 0)})` : 'n.v.t.'],
    ['relatief yaw / pitch / roll', st.view ? `${fmt(st.view.yaw)} / ${fmt(st.view.pitch)} / ${fmt(st.view.roll)}` : 'nog niet gekalibreerd'],
  ].map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');

  const m = st.motion;
  const a = m?.acceleration, g = m?.accelerationIncludingGravity, r = m?.rotationRate;
  $('motion').innerHTML = [
    ['acceleration x', fmt(a?.x, 2)], ['acceleration y', fmt(a?.y, 2)], ['acceleration z', fmt(a?.z, 2)],
    ['accelerationIncludingGravity x/y/z', g ? `${fmt(g.x, 2)} / ${fmt(g.y, 2)} / ${fmt(g.z, 2)}` : '—'],
    ['rotationRate alpha/beta/gamma', r && r.alpha != null ? `${fmt(r.alpha, 0)} / ${fmt(r.beta, 0)} / ${fmt(r.gamma, 0)} °/s` : (m ? 'niet beschikbaar' : '—')],
    ['interval', m ? intervalText(m.interval) : '—'],
  ].map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('');
}

let lastStatus = 0;
function frame(now) {
  draw();
  if (now - lastStatus > 100) { renderStatus(performance.now()); lastStatus = now; }
  requestAnimationFrame(frame);
}
renderApis();
renderStatus(performance.now());
requestAnimationFrame(frame);

// ---------- Rapport ----------
function report() {
  const d = detector.state;
  const lines = [
    `Sensortest iPhone — rapport ${new Date().toISOString()}`,
    `URL: ${location.href}`,
    `UA: ${navigator.userAgent}`,
    '',
    'API\'s:',
    ...Object.entries(apis).map(([k, v]) => `  ${k}: ${v ? 'ja' : 'nee'}`),
    '',
    `permission: orientation=${st.perm.orientation}, motion=${st.perm.motion}`,
    `rates: orientation ${st.orientationStamps.length} Hz, motion ${st.motionStamps.length} Hz, interval ${intervalText(st.motion?.interval)}`,
    `orientation nu: alpha ${fmt(st.orientation?.alpha)} beta ${fmt(st.orientation?.beta)} gamma ${fmt(st.orientation?.gamma)} absolute ${st.orientation?.absolute}` +
      (st.orientation && 'webkitCompassHeading' in st.orientation ? ` compass ${fmt(st.orientation.webkitCompassHeading)}` : ''),
    `relatief: ${st.view ? `yaw ${fmt(st.view.yaw)} pitch ${fmt(st.view.pitch)} roll ${fmt(st.view.roll)}` : 'niet gekalibreerd'}`,
    `motion nu: acc ${fmt(st.motion?.acceleration?.x, 2)}/${fmt(st.motion?.acceleration?.y, 2)}/${fmt(st.motion?.acceleration?.z, 2)}; accG ${fmt(st.motion?.accelerationIncludingGravity?.x, 2)}/${fmt(st.motion?.accelerationIncludingGravity?.y, 2)}/${fmt(st.motion?.accelerationIncludingGravity?.z, 2)}; rot ${fmt(st.motion?.rotationRate?.alpha, 0)}/${fmt(st.motion?.rotationRate?.beta, 0)}/${fmt(st.motion?.rotationRate?.gamma, 0)}`,
    `status: moving=${d.moving} stationary=${d.stationary} flat=${d.flat} side=${screenSide()} accGz=${fmt(st.motion?.accelerationIncludingGravity?.z, 2)} pickup=${d.pickup} tilt=${fmt(d.tiltDeg, 0)} linearFallback=${d.linearFallback} wakeLock=${st.wakeLock}`,
    `sound: ${$('sound').checked ? 'aan' : 'uit'}${audio ? ` (audio ${audio.state})` : ''}`,
    `config: ${Object.entries(detector.config).map(([k, v]) => `${k}=${v}`).join(' ')}`,
    '',
    'log (nieuwste eerst):',
    ...st.log.slice(0, 40).map((e) => `  ${clock(e.t)} ${e.text}`),
  ];
  return lines.join('\n');
}
$('copy').addEventListener('click', async () => {
  const text = report();
  const ta = $('report');
  ta.value = text;
  ta.hidden = false;
  try {
    await navigator.clipboard.writeText(text);
    $('msg').textContent = 'Rapport gekopieerd naar het klembord (en hieronder zichtbaar).';
  } catch {
    $('msg').textContent = 'Kopiëren naar klembord lukte niet; selecteer de tekst hieronder handmatig.';
  }
});
