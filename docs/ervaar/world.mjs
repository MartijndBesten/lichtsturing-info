// De wereld van /ervaar/ (fase 2): inhoud en ruimtelijke compositie. Pure data, zonder DOM.
//
// INHOUD: iedere tekst in `herkenning` en `glimp` is een letterlijk citaat van lichtsturing.info (bronpagina in `pad`).
// De test in de bronrepo controleert dat ieder citaat letterlijk in de broninhoud van het kennisplatform staat; verandert
// de site, dan faalt de test in plaats dat de ervaring iets beweert wat de site niet (meer) zegt. Uitzonderingen zijn
// alleen de onderwerpnamen (zoals de site ze gebruikt, of de door Martijn gekozen naam „Gebouw & data”), de Academie
// (een conceptuele bestemming: er is nog geen publieke Academie van lichtsturing.info) en de kernzin van de ervaring.
//
// RUIMTE: richting in graden t.o.v. de gekalibreerde kijkrichting (yaw > 0 = rechts, pitch > 0 = omhoog), afstand in
// meters. Bewust geen cirkel: dichtbij en ver, hoog en laag, lege donkere zones ertussen, Academie achter je.

export const KERN = 'Lichtsturing stuurt meer dan licht.';
export const CTA = { tekst: 'Ontdek verder', href: '/nl/' };
export const OPEN = { titel: 'Vind het licht', knop: 'Start ervaring', hint: 'Kijk om je heen.' };
export const FALLBACK = 'Deze ervaring is gemaakt om op een iPhone te ontdekken.';

/** @typedef {{id:string, naam:string, vorm:string, yaw:number, pitch:number, afstand:number, herkenning:string, glimp:string[], pad:string, groep:string}} Onderwerp */

/** @type {Onderwerp[]} */
export const ONDERWERPEN = [
  {
    id: 'lichtsturing', naam: 'Lichtsturing', vorm: 'woord', groep: 'licht',
    yaw: -16, pitch: 4, afstand: 6,
    herkenning: 'Verlichting die het gebruik van een gebouw volgt',
    glimp: ['Licht reageert op aanwezigheid, regelt terug als er genoeg daglicht is, en laat zich bedienen en per situatie instellen.'],
    pad: '/nl/kennisbank/wat-is-lichtsturing/',
  },
  {
    id: 'sensoren', naam: 'Sensoren', vorm: 'sensor', groep: 'licht',
    yaw: 38, pitch: 26, afstand: 7,
    herkenning: 'Een sensor is in de eerste plaats een informatiebron.',
    glimp: ['Hij neemt iets waar en geeft dat door.'],
    pad: '/nl/kennisbank/sensoren/',
  },
  {
    id: 'dali', naam: 'DALI', vorm: 'bus', groep: 'licht',
    yaw: -62, pitch: -8, afstand: 8,
    herkenning: 'Internationale standaard (IEC 62386) voor digitale lichtsturing',
    glimp: ['Over twee draden, de DALI-bus, gaan opdrachten om te schakelen en te dimmen, en antwoorden terug.'],
    pad: '/nl/kennisbank/dali/',
  },
  {
    id: 'dali2', naam: 'DALI-2', vorm: 'woord-klein', groep: 'licht',
    yaw: -92, pitch: 2, afstand: 11,
    herkenning: 'De actuele generatie van DALI',
    glimp: ['naast drivers zijn nu ook sensoren, drukknopinterfaces, besturingen en busvoedingen gestandaardiseerd.'],
    pad: '/nl/kennisbank/dali-2/',
  },
  {
    id: 'daglicht', naam: 'Daglichtregeling', vorm: 'venster', groep: 'licht',
    yaw: 8, pitch: 34, afstand: 9,
    herkenning: 'Kunstlicht regelt terug wanneer er genoeg daglicht is.',
    glimp: ['Zo brandt er alleen het kunstlicht dat nog nodig is.'],
    pad: '/nl/kennisbank/daglichtregeling/',
  },
  {
    id: 'gacs', naam: 'GACS', vorm: 'verbinding', groep: 'gebouw',
    yaw: 92, pitch: 6, afstand: 9,
    herkenning: 'Gebouwautomatiserings- en controlesysteem',
    glimp: ['het geheel van systemen dat de installaties van een gebouw automatisch volgt, analyseert en regelt.', 'Een gebouwbeheersysteem is niet automatisch een GACS.'],
    pad: '/nl/kennisbank/regelgeving/',
  },
  {
    id: 'gebouw', naam: 'Gebouw & data', vorm: 'gebouw', groep: 'gebouw',
    yaw: 128, pitch: -6, afstand: 10,
    herkenning: 'Koppelen met gebouwbeheer',
    glimp: ['brengt de technische installaties van een gebouw samen: klimaat, energie, toegang, en vaak ook verlichting.'],
    pad: '/nl/kennisbank/gebouwbeheer/',
  },
  {
    id: 'iot', naam: 'IoT', vorm: 'punten', groep: 'gebouw',
    yaw: 64, pitch: -24, afstand: 7,
    herkenning: 'apparaten die met internet verbonden zijn',
    glimp: ['Gebouw en IoT', 'Zigbee · Thread · Matter'],
    pad: '/nl/kennisbank/draadloze-protocollen/',
  },
  {
    id: 'praktijk', naam: 'Praktijk', vorm: 'plattegrond', groep: 'praktijk',
    yaw: -24, pitch: -35, afstand: 2.8, // ligt op „vloerhoogte” (± 1,6 m onder ooghoogte): omlaag kijken
    herkenning: 'Werkplekken langs de gevel: aanwezigheid, daglicht en een knop bij de deur.',
    glimp: ['Kantoorruimte · Klaslokaal · Vergaderruimte', 'Magazijn · Gang en trappenhuis · Toiletgroep'],
    pad: '/nl/praktijk/',
  },
];

/** De Academie: geen onderwerp maar een bestemming, ver weg achter je. Geen link: er is nog geen publieke Academie. */
export const ACADEMIE = {
  id: 'academie', naam: 'Academie', yaw: 178, pitch: 8, afstand: 16,
  herkenning: '',
  glimp: ['Binnenkort verder leren'],
};

/** Verbindingen die zichtbaar worden als beide kanten ontdekt zijn. GACS ligt visueel tussen licht en gebouw. */
export const VERBINDINGEN = [
  ['lichtsturing', 'sensoren'], ['lichtsturing', 'dali'], ['dali', 'dali2'], ['sensoren', 'daglicht'],
  ['lichtsturing', 'daglicht'], ['sensoren', 'gacs'], ['gacs', 'gebouw'], ['gacs', 'iot'], ['iot', 'gebouw'],
  ['lichtsturing', 'praktijk'],
];

/** Dramaturgie (geen timer): drempels in aantal ontdekte onderwerpen (laag 2 bereikt). */
export const VLOER = -1.6; // ooghoogte boven de denkbeeldige vloer (m)

export const DRAMATURGIE = {
  RIJKER_NA: 3, // wereld krijgt diepte, lijnen en verbindingen
  KERN_NA: 5, // de kernzin verschijnt (Academie telt mee)
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
