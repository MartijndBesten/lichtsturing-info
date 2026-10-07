// Bewegingsdetectie voor de sensortest (fase 1, proof-of-concept). Pure toestandsmachine zonder DOM of timers: iedere
// DeviceMotion-sample gaat met zijn eigen tijdstempel door `detector.sample(...)`; de functie geeft de gebeurtenissen terug
// die daardoor ontstaan. Daardoor is de logica in Node te testen (unit-tests in de bronrepo) en zijn de drempels
// hieronder de enige plaats waar getuned wordt. Niets wordt opgeslagen of verstuurd.
//
// HOE DE DETECTIE WERKT
//
// Per sample worden twee maten berekend:
//   aLin  = |acceleration| in m/s² (lineaire versnelling zonder zwaartekracht; iOS levert dit op toestellen met gyro).
//           Ontbreekt `acceleration`, dan de terugvaloptie | |accelerationIncludingGravity| − g̅ | met g̅ een traag
//           lopend gemiddelde van de totale versnelling (grof, maar bruikbaar).
//   rot   = |rotationRate| in °/s (gyro); ontbreekt die, dan 0 en tellen alleen de versnellingsdrempels.
// Een sample is „stil” als aLin < STILL_ACCEL én rot < STILL_ROT, en „beweging” als aLin > MOVE_ACCEL óf rot > MOVE_ROT.
// Daartussen zit een hysteresisband: een hand die „stil” houdt trilt licht (± 0,1–0,3 m/s², enkele °/s) en mag niet
// tussen moving en stationary flipperen.
//
//   A. MOVING      = er was een bewegingssample in de laatste MOVING_HOLD_MS.
//   B. STATIONARY  = er was STATIONARY_MS lang géén niet-stil sample (dus alle samples onder de stil-drempels).
//   C. FLAT/STABLE = stationary-voorwaarde én de zwaartekrachtvector (traag gemiddelde van accelerationIncludingGravity)
//                    maakt een hoek < FLAT_ANGLE_DEG met de Z-as van het toestel (scherm omhoog of omlaag), beide
//                    FLAT_MS lang ononderbroken. Bij het ingaan wordt die zwaartekrachtvector als „ligt-zo”-referentie
//                    bewaard. Flat eindigt bij een pickup of als de hoek met de Z-as groter wordt dan FLAT_EXIT_ANGLE_DEG.
//   D. PICKUP      = vanuit FLAT/STABLE: (1) de zwaartekrachtvector wijkt meer dan PICKUP_TILT_DEG af van de
//                    „ligt-zo”-referentie (een tafel kantelt niet; een hand wel), óf (2) er is PICKUP_SUSTAIN_MS lang
//                    aaneengesloten beweging (een tik tegen de tafel is kort; optillen niet). Korte beweging zonder
//                    kanteling levert de gebeurtenis „bump” op en geen pickup. Pickup blijft YES tot het toestel opnieuw
//                    FLAT/STABLE is (nieuwe cyclus).
//   STRONG         = aLin > STRONG_ACCEL („duidelijke beweging/versnelling”), hooguit eens per STRONG_LOG_MS gelogd.
//   RESUME         = er zat meer dan GAP_RESET_MS tussen twee samples (iOS stopt de events zodra de pagina verborgen is:
//                    andere app, schermafbeelding, vergrendeling). De tijdvensters beginnen dan opnieuw, zodat stationary en
//                    flat niet „gratis” waar worden over de onderbreking heen. Flat zelf blijft staan; is het toestel
//                    intussen opgepakt, dan ziet de kantelingtoets dat bij de eerste samples na terugkeer.
//
// Bevindingen op een echte iPhone (iOS 26.6.1, 07-10-2026): plat met het scherm omhoog levert accelerationIncludingGravity
// z ≈ −9,7 (het teken is dus omgekeerd t.o.v. de W3C-tekening); de detectie gebruikt alleen |z| en hoeken en is daar
// ongevoelig voor. MOVING_HOLD_MS van 400 naar 1000 ms: in de hand flipperde moving bij langzaam rondkijken.
//
// Alle drempels zijn beginwaarden op basis van de orde van grootte van handbeweging; ze zijn bewust nog niet op een
// echte iPhone gevalideerd. De pagina laat ze via de URL overschrijven (?STILL_ACCEL=0.3&FLAT_MS=1500 …) zodat tunen op
// het toestel zonder nieuwe deploy kan.

export const DEFAULT_CONFIG = {
  // Stil-drempels (hysteresis-onderkant). Handtrilling blijft hieronder; tunen op het toestel.
  STILL_ACCEL: 0.4, // m/s²
  STILL_ROT: 10, // °/s
  // Bewegingsdrempels (hysteresis-bovenkant).
  MOVE_ACCEL: 1.0, // m/s²
  MOVE_ROT: 45, // °/s
  STRONG_ACCEL: 3.0, // m/s²: duidelijke versnelling
  STRONG_LOG_MS: 1000,
  MOVING_HOLD_MS: 1000, // moving blijft YES zolang er binnen deze tijd een bewegingssample was (iPhone-test: 400 flipperde)
  STATIONARY_MS: 1500, // zo lang alleen stil-samples → stationary
  // Vlak liggen.
  FLAT_ANGLE_DEG: 15, // hoek tussen zwaartekracht en de Z-as van het toestel
  FLAT_EXIT_ANGLE_DEG: 25,
  FLAT_MS: 2000, // zo lang vlak én stil → flat/stable
  // Oppakken.
  PICKUP_TILT_DEG: 20, // kanteling t.o.v. de „ligt-zo”-referentie
  PICKUP_SUSTAIN_MS: 700, // aaneengesloten beweging zonder kanteling
  // Filters.
  GRAVITY_EMA: 0.2, // gewicht nieuwe sample in het trage zwaartekrachtgemiddelde (≈ 80 ms bij 60 Hz)
  GRAVITY_MAG_EMA: 0.02, // nog trager, voor de terugvaloptie zonder `acceleration`
  GAP_RESET_MS: 500, // grotere pauze tussen samples = onderbreking (pagina verborgen); tijdvensters opnieuw
};

const mag = (x, y, z) => Math.hypot(x ?? 0, y ?? 0, z ?? 0);
const DEG = 180 / Math.PI;

function angleDeg(a, b) {
  const la = mag(...a);
  const lb = mag(...b);
  if (!la || !lb) return 0;
  const c = Math.max(-1, Math.min(1, (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / (la * lb)));
  return Math.acos(c) * DEG;
}

/** Config uit DEFAULT_CONFIG met overschrijvingen (bijv. URL-parameters); onbekende sleutels en NaN worden genegeerd. */
export function configFrom(overrides = {}) {
  const cfg = { ...DEFAULT_CONFIG };
  for (const [k, v] of Object.entries(overrides)) {
    if (!(k in cfg)) continue;
    const n = Number(v);
    if (Number.isFinite(n)) cfg[k] = n;
  }
  return cfg;
}

export function createDetector(config = DEFAULT_CONFIG) {
  const cfg = { ...DEFAULT_CONFIG, ...config };
  const s = {
    t: null,
    aLin: 0,
    rot: 0,
    gravity: null, // [x,y,z] traag gemiddelde van accelerationIncludingGravity
    gravityMag: null,
    tiltDeg: null, // hoek zwaartekracht ↔ Z-as toestel (0 = perfect vlak)
    faceUp: null, // teken van de z-component van accelerationIncludingGravity (welke kant „scherm omhoog” is: op iOS verifiëren)
    moving: false,
    stationary: false,
    flat: false,
    pickup: false,
    pickupAt: null,
    flatRef: null, // zwaartekrachtvector bij het ingaan van flat
    lastMotionT: -Infinity,
    lastNonStillT: -Infinity,
    flatCandidateSince: null,
    pending: null, // { t0, lastT } beweging sinds flat, nog niet bevestigd als pickup
    lastStrongT: -Infinity,
    linearFallback: false,
  };

  /**
   * @param {{t:number, acc?:{x,y,z}|null, accG?:{x,y,z}|null, rot?:{alpha,beta,gamma}|null}} sample
   *   t in ms (performance.now()), acc = acceleration, accG = accelerationIncludingGravity, rot = rotationRate (°/s).
   * @returns {Array<{t:number, type:string, detail?:string}>} gebeurtenissen door deze sample
   */
  function sample({ t, acc = null, accG = null, rot = null }) {
    const events = [];
    const emit = (type, detail) => events.push(detail ? { t, type, detail } : { t, type });
    // Eerste sample: nog geen geschiedenis, dus stationary/flat pas na STATIONARY_MS/FLAT_MS aan échte stil-samples.
    if (s.t == null) s.lastNonStillT = t;
    else if (t - s.t > cfg.GAP_RESET_MS) {
      emit('resume', `${((t - s.t) / 1000).toFixed(1)} s geen sensordata`);
      s.lastNonStillT = t;
      s.lastMotionT = -Infinity;
      s.flatCandidateSince = null;
      s.pending = null;
      s.stationary = false;
      s.moving = false;
    }
    s.t = t;

    // Zwaartekracht (traag) en vlakheid.
    if (accG && [accG.x, accG.y, accG.z].every((v) => typeof v === 'number' && Number.isFinite(v))) {
      const g = [accG.x, accG.y, accG.z];
      const gm = mag(...g);
      s.gravity = s.gravity ? s.gravity.map((p, i) => p + cfg.GRAVITY_EMA * (g[i] - p)) : g;
      s.gravityMag = s.gravityMag == null ? gm : s.gravityMag + cfg.GRAVITY_MAG_EMA * (gm - s.gravityMag);
      const gl = mag(...s.gravity);
      s.tiltDeg = gl ? Math.acos(Math.min(1, Math.abs(s.gravity[2]) / gl)) * DEG : null;
      s.faceUp = s.gravity[2] >= 0;
      // Terugvaloptie zonder lineaire versnelling: afwijking van de totale versnelling t.o.v. het trage gemiddelde.
      s.linearFallback = !(acc && typeof acc.x === 'number');
      if (s.linearFallback) s.aLin = Math.abs(gm - s.gravityMag);
    }
    if (acc && typeof acc.x === 'number' && Number.isFinite(acc.x)) s.aLin = mag(acc.x, acc.y, acc.z);
    s.rot = rot && typeof rot.alpha === 'number' && Number.isFinite(rot.alpha) ? mag(rot.alpha, rot.beta, rot.gamma) : 0;

    const still = s.aLin < cfg.STILL_ACCEL && s.rot < cfg.STILL_ROT;
    const motion = s.aLin > cfg.MOVE_ACCEL || s.rot > cfg.MOVE_ROT;
    if (!still) s.lastNonStillT = t;
    if (motion) s.lastMotionT = t;

    // STRONG
    if (s.aLin > cfg.STRONG_ACCEL && t - s.lastStrongT >= cfg.STRONG_LOG_MS) {
      s.lastStrongT = t;
      emit('strong', `${s.aLin.toFixed(1)} m/s²`);
    }

    // A. MOVING / B. STATIONARY (met hysteresis).
    const moving = t - s.lastMotionT <= cfg.MOVING_HOLD_MS;
    const stationary = t - s.lastNonStillT >= cfg.STATIONARY_MS;
    if (moving && !s.moving) emit('moving');
    if (stationary && !s.stationary) emit('stationary');
    s.moving = moving;
    s.stationary = stationary;

    // C. FLAT/STABLE en D. PICKUP.
    const flatAngle = s.tiltDeg != null && s.tiltDeg < cfg.FLAT_ANGLE_DEG;
    if (!s.flat) {
      if (flatAngle && still) {
        if (s.flatCandidateSince == null) s.flatCandidateSince = t;
        if (t - s.flatCandidateSince >= cfg.FLAT_MS) {
          s.flat = true;
          s.flatRef = [...s.gravity];
          s.pending = null;
          s.pickup = false;
          s.pickupAt = null;
          emit('flat', s.faceUp ? 'accG z > 0' : 'accG z < 0'); // teken ↔ scherm omhoog/omlaag: op iOS verifiëren
        }
      } else {
        s.flatCandidateSince = null;
      }
    } else {
      const tiltChange = angleDeg(s.gravity, s.flatRef);
      let picked = null;
      if (tiltChange > cfg.PICKUP_TILT_DEG) picked = `kanteling ${tiltChange.toFixed(0)}°`;
      else if (motion) {
        if (!s.pending) s.pending = { t0: t, lastT: t };
        else s.pending.lastT = t;
        if (t - s.pending.t0 >= cfg.PICKUP_SUSTAIN_MS) picked = `aanhoudende beweging ${((t - s.pending.t0) / 1000).toFixed(1)} s`;
      } else if (s.pending && t - s.pending.lastT > cfg.MOVING_HOLD_MS) {
        emit('bump', `korte beweging zonder kanteling, ${((s.pending.lastT - s.pending.t0) / 1000).toFixed(1)} s`);
        s.pending = null;
      }
      if (picked) {
        s.flat = false;
        s.flatCandidateSince = null;
        s.pending = null;
        s.pickup = true;
        s.pickupAt = t;
        emit('pickup', picked);
      } else if (s.tiltDeg != null && s.tiltDeg > cfg.FLAT_EXIT_ANGLE_DEG) {
        // Zou door de tilt-voorwaarde hierboven al pickup zijn; vangnet als flatRef zelf schuin was.
        s.flat = false;
        s.flatCandidateSince = null;
        s.pending = null;
        emit('unflat', `hoek ${s.tiltDeg.toFixed(0)}°`);
      }
    }
    return events;
  }

  return { sample, state: s, config: cfg };
}
