// Oriëntatie-wiskunde voor de sensortest (fase 1, proof-of-concept). Pure functies, zonder DOM, zodat ze in Node
// getest kunnen worden (unit-tests in de bronrepo).
//
// Waarom een rotatiematrix en niet „alpha min alpha0”?
// DeviceOrientation levert Euler-hoeken (alpha om Z, beta om X, gamma om Y). Houd je een telefoon rechtop (beta ≈ 90°),
// dan zitten alpha en gamma dicht bij een gimbal-lock: gamma springt tussen ±90° en alpha verspringt mee. Hoeken
// aftrekken geeft dan onbruikbare sprongen. Daarom: Euler-hoeken → rotatiematrix (W3C-conventie, Z-X'-Y''), de houding
// bij kalibratie als referentieframe nemen en de kijkrichting (de -Z-as van het toestel, „door de achterkant kijken”)
// in dát frame uitdrukken. Yaw/pitch/roll volgen dan continu, onafhankelijk van de kompasrichting waarin iemand staat.

const DEG = Math.PI / 180;

/** Rotatiematrix (3×3, rij-major) uit DeviceOrientation-hoeken in graden; W3C-voorbeeld „getRotationMatrix”. */
export function rotationMatrix(alpha, beta, gamma) {
  const a = (alpha ?? 0) * DEG;
  const b = (beta ?? 0) * DEG;
  const g = (gamma ?? 0) * DEG;
  const cA = Math.cos(a), sA = Math.sin(a);
  const cB = Math.cos(b), sB = Math.sin(b);
  const cG = Math.cos(g), sG = Math.sin(g);
  return [
    [cA * cG - sA * sB * sG, -cB * sA, cA * sG + cG * sA * sB],
    [cG * sA + cA * sB * sG, cA * cB, sA * sG - cA * cG * sB],
    [-cB * sG, sB, cB * cG],
  ];
}

export function transpose(m) {
  return [
    [m[0][0], m[1][0], m[2][0]],
    [m[0][1], m[1][1], m[2][1]],
    [m[0][2], m[1][2], m[2][2]],
  ];
}

export function multiply(a, b) {
  const r = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) r[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j] + a[i][2] * b[2][j];
  return r;
}

export function apply(m, v) {
  return [
    m[0][0] * v[0] + m[0][1] * v[1] + m[0][2] * v[2],
    m[1][0] * v[0] + m[1][1] * v[1] + m[1][2] * v[2],
    m[2][0] * v[0] + m[2][1] * v[1] + m[2][2] * v[2],
  ];
}

/**
 * Kijkrichting ten opzichte van de gekalibreerde houding.
 * @param {number[][]} calibrated rotatiematrix op het moment van kalibreren (R0)
 * @param {number[][]} current   rotatiematrix nu (R)
 * @returns {{yaw:number, pitch:number, roll:number}} graden; yaw > 0 = naar rechts gedraaid, pitch > 0 = omhoog
 *   gericht, roll > 0 = rechterrand omhoog gekanteld (tegen de klok in gezien door de gebruiker).
 *
 * Toestelframe (W3C): X naar rechts, Y naar boven (bovenkant scherm), Z uit het scherm naar de gebruiker. De
 * kijkrichting is -Z. In het gekalibreerde frame: f = R0ᵀ·R·(0,0,-1); yaw = atan2(f.x, -f.z); pitch = asin(f.y).
 * Roll uit de „rechts”-as r = R0ᵀ·R·(1,0,0): roll = atan2(r.y, r.x).
 */
export function relativeView(calibrated, current) {
  const rel = multiply(transpose(calibrated), current);
  const f = apply(rel, [0, 0, -1]);
  const r = apply(rel, [1, 0, 0]);
  const fy = Math.max(-1, Math.min(1, f[1]));
  return {
    yaw: Math.atan2(f[0], -f[2]) / DEG,
    pitch: Math.asin(fy) / DEG,
    roll: Math.atan2(r[1], r[0]) / DEG,
  };
}

/** Hoek (graden) tussen twee vectoren; 0 bij een nulvector. */
export function angleBetween(a, b) {
  const la = Math.hypot(a[0], a[1], a[2]);
  const lb = Math.hypot(b[0], b[1], b[2]);
  if (!la || !lb) return 0;
  const c = Math.max(-1, Math.min(1, (a[0] * b[0] + a[1] * b[1] + a[2] * b[2]) / (la * lb)));
  return Math.acos(c) / DEG;
}
