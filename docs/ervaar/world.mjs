// De wereld van /ervaar/ (fase 2, art-direction 07-10-2026): lichtsturing.info uit elkaar gehaald en rondom de bezoeker
// in de ruimte gezet. Pure data, zonder DOM.
//
// INHOUD: iedere tekst in `herkenning` en `glimp` is een letterlijk citaat van lichtsturing.info (bronpagina in `pad`).
// De test in de bronrepo controleert dat ieder citaat letterlijk in de broninhoud van het kennisplatform staat. Niet uit
// de site: de onderwerpnamen (zoals de site ze gebruikt, of door Martijn gekozen: „Gebouw & data”), de Academie (een
// conceptuele bestemming; er is nog geen publieke Academie van lichtsturing.info) en de zinnen van de ervaring zelf.
//
// VORM: ieder onderwerp bestaat uit bestaande sitecomponenten (`component` in `panelen`): de paginakop (kruimelpad + h1 +
// lead), het blok „In 30 seconden”, de leerlijnstrip, de onderwerpkaart met icoon, de kernpuntenlijst, de navy
// „Volgende stap”-kaart, de ruimte-illustraties en het ketenschema van de homepage. Ze krijgen in ervaar.mjs de echte
// klassen en de echte stylesheets van de site. `laag` = wanneer het paneel verschijnt (1 begrip, 2 herkenning, 3 glimp).
//
// RUIMTE: richting in graden t.o.v. de startpositie (yaw > 0 = rechts, pitch > 0 = omhoog), `afstand` in CSS-pixels
// (parallax), `schaal` = hoe groot het op het scherm oogt (1 = als op de gewone site). Bewust geen cirkel: dichtbij en
// ver, hoog en laag, lege zones ertussen, Academie achter je. `dx/dy` = verschuiving in het vlak van het onderwerp (px); `dy: 'auto'` = onder het vorige gestapelde paneel, op de echte hoogte.

export const KERN = 'Lichtsturing stuurt meer dan licht.';
export const CTA = { tekst: 'Ontdek verder', href: '/nl/' };
export const OPEN = {
  eyebrow: 'Kennisplatform lichtsturing', // de echte eyebrow van de homepage
  titel: 'Deze website bekijk je anders.',
  houd: 'Houd je iPhone rechtop voor je.',
  start: 'Dit wordt je startpositie.',
  knop: 'Start ervaring',
  goed: 'Goed zo.',
  vind: 'Vind het licht.',
  hint: 'Kijk om je heen.',
};
export const FALLBACK = 'Deze ervaring is gemaakt om op een iPhone te ontdekken.';

/** Iconen uit de onderwerpkaarten van de kennisbank (letterlijk uit de site; paden 24×24). */
export const ICONEN = {
  lichtsturing: '<path d="M8.5 5h7l-1.2 4.5h-4.6z"/><path d="M12 3v2"/><path d="M9.5 9.5l-3 9M14.5 9.5l3 9"/><path d="M8 15h8" stroke-dasharray="1.5 2"/><path d="M5 20h14"/>',
  sensoren: '<path d="M3 4h18"/><path d="M8 4a4 4 0 0 0 8 0"/><path d="M6.5 11a7 7 0 0 0 11 0M4 14.5a10.5 10.5 0 0 0 16 0" stroke-dasharray="2 2.5"/>',
  daglicht: '<circle cx="8" cy="8" r="3"/><path d="M8 2v1.6M8 12.4V14M2 8h1.6M12.4 8H14M3.8 3.8l1.1 1.1M11.1 11.1l1.1 1.1M3.8 12.2l1.1-1.1M11.1 4.9l1.1-1.1"/><rect x="14" y="13" width="7" height="8" rx="1"/><path d="M14 17h7M17.5 13v8"/>',
  gebouw: '<rect x="3" y="5" width="9" height="15" rx="1"/><path d="M5.5 8.5h1.5M8.5 8.5h1.5M5.5 12h1.5M8.5 12h1.5M5.5 15.5h1.5M8.5 15.5h1.5"/><path d="M15 9h6M18 6l3 3-3 3M21 15h-6M18 12l-3 3 3 3"/>',
  lijst: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  dali2: '<path d="M3 9h18M3 15h18"/><path d="M7 9v6M12 9v6M17 9v6" stroke-dasharray="1.5 2"/><circle cx="7" cy="9" r="1.2"/><circle cx="12" cy="15" r="1.2"/><circle cx="17" cy="9" r="1.2"/>',
  draadloos: '<circle cx="12" cy="12" r="2"/><circle cx="5" cy="7" r="1.5"/><circle cx="19" cy="7" r="1.5"/><circle cx="5" cy="17" r="1.5"/><circle cx="19" cy="17" r="1.5"/><path d="M6.3 7.9l4 2.8M17.7 7.9l-4 2.8M6.3 16.1l4-2.8M17.7 16.1l-4-2.8" stroke-dasharray="1.5 2"/>',
};

/** Leerlijnstrip zoals op de pagina's: niveaus 0–10 met categorie; `aan` = de niveaus die de pagina markeert. */
const LL = { cats: ['bediening', 'regeling', 'regeling', 'regeling', 'automatisering', 'automatisering', 'automatisering', 'lichtmanagement', 'lichtmanagement', 'lichtmanagement', 'gebouwintegratie'] };
export const LEERLIJN = (aan, tekst) => ({ ...LL, aan, tekst });

/**
 * @typedef {{id:string, naam:string, groep:string, yaw:number, pitch:number, afstand:number, schaal:number,
 *   herkenning:string, glimp:string[], pad:string, kruimel?:string[], panelen:object[]}} Onderwerp
 */

/** @type {Onderwerp[]} */
export const ONDERWERPEN = [
  {
    id: 'lichtsturing', naam: 'Lichtsturing', groep: 'licht', yaw: -16, pitch: 5, afstand: 950, schaal: 1,
    herkenning: 'Verlichting die het gebruik van een gebouw volgt',
    glimp: ['Licht reageert op aanwezigheid, regelt terug als er genoeg daglicht is, en laat zich bedienen en per situatie instellen.'],
    pad: '/nl/kennisbank/wat-is-lichtsturing/',
    panelen: [
      { component: 'hero', laag: 1, dx: 0, dy: 0, breedte: 330, eyebrow: 'Kennisplatform lichtsturing', titel: 'Lichtsturing', leadLaag: 2, knop: 'Begin bij de basis', knopLaag: 3 },
      { component: 'keten', laag: 3, dx: 40, dy: 'auto', dz: -140, breedte: 360, titel: 'Zo werkt lichtsturing' },
    ],
  },
  {
    id: 'sensoren', naam: 'Sensoren', groep: 'licht', yaw: 40, pitch: 24, afstand: 1150, schaal: 0.92,
    herkenning: 'Een sensor is in de eerste plaats een informatiebron.',
    glimp: ['Hij neemt iets waar en geeft dat door.'],
    pad: '/nl/kennisbank/sensoren/', kruimel: ['Home', 'Kennisbank'],
    panelen: [
      { component: 'icoon', laag: 1, dx: -150, dy: -120, icoon: 'sensoren' },
      { component: 'kop', laag: 1, dx: 0, dy: 0, breedte: 330, titel: 'Sensoren', leadLaag: 2 },
      { component: 'in30', laag: 3, dx: 10, dy: 'auto', breedte: 310 },
      { component: 'leerlijn', laag: 3, dx: -20, dy: 'auto', dz: -80, strip: LEERLIJN([4, 5, 6, 8], 'In de leerlijn van drukknop tot lichtmanagement: niveau 4–6, 8') },
    ],
  },
  {
    id: 'dali', naam: 'DALI', groep: 'licht', yaw: -64, pitch: -6, afstand: 1050, schaal: 0.95,
    herkenning: 'Internationale standaard (IEC 62386) voor digitale lichtsturing',
    glimp: ['Twee draden, één bus: alle apparaten hangen eraan.', 'De sensor of knop meldt. De besturing beslist. De driver voert uit. (Sensoren en knoppen zijn pas met DALI-2 vastgelegd.)', 'Een opdracht gaat naar één adres, naar een groep of naar alle apparaten tegelijk (broadcast).'],
    pad: '/nl/kennisbank/dali/', kruimel: ['Home', 'Kennisbank'],
    panelen: [
      { component: 'icoon', laag: 1, dx: 150, dy: -110, icoon: 'dali2' },
      { component: 'kop', laag: 1, dx: 0, dy: 0, breedte: 330, titel: 'DALI', leadLaag: 2 },
      { component: 'kernpunten', laag: 3, dx: 0, dy: 'auto', breedte: 330 },
    ],
  },
  {
    id: 'dali2', naam: 'DALI-2', groep: 'licht', yaw: -94, pitch: 3, afstand: 1500, schaal: 0.82,
    herkenning: 'Wat DALI-2 verandert ten opzichte van DALI version-1 (de eerste DALI-generatie), hoe certificering werkt en wat je mag verwachten bij gemengde systemen.',
    glimp: ['naast drivers zijn nu ook sensoren, drukknopinterfaces, besturingen en busvoedingen gestandaardiseerd.'],
    pad: '/nl/kennisbank/dali-2/',
    panelen: [
      { component: 'kaart', laag: 1, dx: 0, dy: 0, breedte: 300, icoon: 'dali2', titel: 'DALI-2', tekstLaag: 2 },
      { component: 'in30', laag: 3, dx: 20, dy: 'auto', dz: -60, breedte: 290 },
    ],
  },
  {
    id: 'daglicht', naam: 'Daglichtregeling', groep: 'licht', yaw: 8, pitch: 34, afstand: 1300, schaal: 0.88,
    herkenning: 'Kunstlicht regelt terug wanneer er genoeg daglicht is.',
    glimp: ['Zo brandt er alleen het kunstlicht dat nog nodig is.'],
    pad: '/nl/kennisbank/daglichtregeling/', kruimel: ['Home', 'Kennisbank'],
    panelen: [
      { component: 'icoon', laag: 1, dx: -140, dy: -120, icoon: 'daglicht' },
      { component: 'kop', laag: 1, dx: 0, dy: 0, breedte: 330, titel: 'Daglichtregeling', leadLaag: 2 },
      { component: 'in30', laag: 3, dx: 10, dy: 'auto', breedte: 310 },
    ],
  },
  {
    id: 'gacs', naam: 'GACS', groep: 'gebouw', yaw: 92, pitch: 6, afstand: 1000, schaal: 1,
    herkenning: 'Gebouwautomatiserings- en controlesysteem',
    glimp: ['het geheel van systemen dat de installaties van een gebouw automatisch volgt, analyseert en regelt.', 'Een gebouwbeheersysteem is niet automatisch een GACS.'],
    pad: '/nl/kennisbank/regelgeving/', kruimel: ['Home', 'Kennisbank'],
    panelen: [
      { component: 'kop', laag: 1, dx: 0, dy: 0, breedte: 330, titel: 'GACS', leadLaag: 2, legenda: ['GACS', 'Automatische lichtregeling'] },
      { component: 'in30', laag: 3, dx: 10, dy: 'auto', breedte: 310 },
      { component: 'volgende', laag: 3, dx: -30, dy: 'auto', dz: -90, breedte: 300, label: 'Volgende stap', titel: 'Wat betekent GACS voor mijn gebouw?', tekst: 'Wat geldt wanneer?' },
    ],
  },
  {
    id: 'gebouw', naam: 'Gebouw & data', groep: 'gebouw', yaw: 130, pitch: -6, afstand: 1200, schaal: 0.9,
    herkenning: 'Koppelen met gebouwbeheer',
    glimp: ['brengt de technische installaties van een gebouw samen: klimaat, energie, toegang, en vaak ook verlichting.'],
    pad: '/nl/kennisbank/gebouwbeheer/', kruimel: ['Home', 'Kennisbank'],
    panelen: [
      { component: 'icoon', laag: 1, dx: 150, dy: -120, icoon: 'gebouw' },
      { component: 'kop', laag: 1, dx: 0, dy: 0, breedte: 330, titel: 'Gebouw & data', leadLaag: 2 },
      { component: 'leerlijn', laag: 2, dx: 0, dy: 'auto', strip: LEERLIJN([10], 'In de leerlijn van drukknop tot lichtmanagement: niveau 10') },
      { component: 'in30', laag: 3, dx: 10, dy: 'auto', breedte: 310 },
    ],
  },
  {
    id: 'iot', naam: 'IoT', groep: 'gebouw', yaw: 64, pitch: -26, afstand: 900, schaal: 0.95,
    herkenning: 'apparaten die met internet verbonden zijn',
    glimp: ['Gebouw en IoT', 'Zigbee · Thread · Matter'],
    pad: '/nl/kennisbank/draadloze-protocollen/',
    panelen: [
      { component: 'kaart', laag: 1, dx: 0, dy: 0, breedte: 300, icoon: 'draadloos', titel: 'IoT', tekstLaag: 2 },
      { component: 'chips', laag: 3, dx: 20, dy: 'auto', dz: -50, label: 'Gebouw en IoT', chips: ['Zigbee', 'Thread', 'Matter'] },
    ],
  },
  {
    id: 'praktijk', naam: 'Praktijk', groep: 'praktijk', yaw: -26, pitch: -34, afstand: 720, schaal: 1,
    herkenning: 'Werkplekken langs de gevel: aanwezigheid, daglicht en een knop bij de deur.',
    glimp: ['Hoge montage, stellinggangen en licht dat per gang meegaat.', 'Scènes voor vergaderen en presenteren, en een duidelijke terugweg.'],
    pad: '/nl/praktijk/',
    panelen: [
      { component: 'ruimte', laag: 1, dx: 0, dy: 0, breedte: 300, scene: 'pw-s-kantoor', titel: 'Kantoorruimte', tekstLaag: 2, badge: 'Probeer het' },
      { component: 'ruimte', laag: 3, dx: -250, dy: 120, dz: -160, breedte: 260, scene: 'pw-s-magazijn', titel: 'Magazijn', tekst: 0, badge: 'Probeer het' },
      { component: 'ruimte', laag: 3, dx: 250, dy: 120, dz: -160, breedte: 260, scene: 'pw-s-vergaderen', titel: 'Vergaderruimte', tekst: 1, badge: 'Probeer het' },
      { component: 'link', laag: 3, dx: 0, dy: 'auto', tekst: 'Alle praktijkvoorbeelden' },
    ],
  },
];

/** De Academie: geen onderwerp maar een bestemming, ver weg achter je. Geen link: er is nog geen publieke Academie. */
export const ACADEMIE = {
  id: 'academie', naam: 'Academie', yaw: 178, pitch: 6, afstand: 1700, schaal: 0.9,
  label: 'Volgende stap', // de echte „Volgende stap”-kaart van de pagina's als deur
  tekst: 'Binnenkort verder leren',
  ondertitel: 'Van ontdekken naar leren',
};

/** Verbindingen (lichtdraden) die zichtbaar worden als beide kanten ontdekt zijn. GACS ligt visueel tussen licht en gebouw. */
export const VERBINDINGEN = [
  ['lichtsturing', 'sensoren'], ['lichtsturing', 'dali'], ['dali', 'dali2'], ['sensoren', 'daglicht'],
  ['lichtsturing', 'daglicht'], ['sensoren', 'gacs'], ['gacs', 'gebouw'], ['gacs', 'iot'], ['iot', 'gebouw'],
  ['lichtsturing', 'praktijk'],
];

export const VLOER = 560; // ooghoogte boven de denkbeeldige vloer (px, bij afstand = perspectief 1:1)

/** Dramaturgie (geen timer): drempels in aantal ontdekte onderwerpen (laag 2 bereikt). */
export const DRAMATURGIE = {
  RIJKER_NA: 2, // de wereld krijgt vloer, lijnen en verbindingen; ontdekte onderwerpen blijven zichtbaar
  SITE_NA: 4, // de ruimte wordt lichter: steeds meer lichtsturing.info
  KERN_NA: 5, // de kernzin (Academie telt mee), daarna „Ontdek verder” en de gewone site
};

const DEG = Math.PI / 180;
/** Eenheidsvector voor een richting (yaw/pitch in graden): -Z vooruit, X rechts, Y omhoog. */
export function richting(yaw, pitch) {
  const cp = Math.cos(pitch * DEG);
  return [Math.sin(yaw * DEG) * cp, Math.sin(pitch * DEG), -Math.cos(yaw * DEG) * cp];
}
export function positie(o) {
  const d = richting(o.yaw, o.pitch);
  return [d[0] * o.afstand, d[1] * o.afstand, d[2] * o.afstand];
}
