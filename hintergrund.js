// Hintergrund: Papier (hell) oder Pappe (warmes Grau), mit Reglern für Helligkeit und Wärme.
// Wird im <head> geladen (vor style.css), damit beim Öffnen nichts in der falschen Farbe aufblitzt.
// Gespeichert in Speicher.daten.einstellungen.hintergrund = { art, papier: {hell, waerme}, pappe: {hell, waerme} }.

const Hintergrund = (() => {
  const ARTEN = ['auto', 'papier', 'pappe'];
  const STANDARD = { papier: { hell: 50, waerme: 50 }, pappe: { hell: 50, waerme: 50 } };

  // Grundfarbe je Art (= Regler auf 50) und wie stark die Regler sie verschieben
  const MODELL = {
    papier: { h: 50, s: 43, l: 97, proHell: 0.04, flaeche: 2, rand: -15 },   // L 95…99
    pappe: { h: 29, s: 16, l: 80, proHell: 0.16, flaeche: 5, rand: -16 },    // L 72…88
  };
  const PRO_WAERME_H = -0.2;   // wärmer = Farbton Richtung Rot (±10 Grad)
  const PRO_WAERME_S = 0.3;    // wärmer = kräftiger (±15 Prozentpunkte)

  // Farben, die vom Hintergrund abhängen (Text muss überall lesbar bleiben, siehe Test)
  const FARBEN = {
    papier: { textLeise: '#6b6459', richtig: '#4f7a30', fehler: '#3f6e8c', akzentLinie: '#8a6220' },
    pappe: { textLeise: '#4a4239', richtig: '#2f4f1b', fehler: '#294b61', akzentLinie: '#553a0c' },
  };

  // Knopf-Farbe (statt Ocker wählbar): Grundton je Farbe, Regler Helligkeit und Sättigung (0–100, Mitte = Grundton).
  // Gespeichert in Speicher.daten.einstellungen.akzent = { farbe, hell, saettigung }.
  // Schrift darauf: Tusche, bei dunkler Einstellung hell. Die Linie (Nebenknöpfe, Links) wird daraus abgeleitet.
  // Die Reiseskizzen behalten ihre eigenen Farben.
  const AKZENTE = [
    { id: 'ocker', name: 'Ocker', h: 38, s: 63, l: 56 },
    { id: 'honig', name: 'Honig', h: 46, s: 72, l: 60 },
    { id: 'sand', name: 'Sand', h: 35, s: 32, l: 70 },
    { id: 'olive', name: 'Olive', h: 68, s: 34, l: 54 },
    { id: 'salbei', name: 'Salbei', h: 100, s: 20, l: 62 },
    { id: 'minze', name: 'Minze', h: 155, s: 28, l: 66 },
    { id: 'petrol', name: 'Petrol', h: 185, s: 34, l: 52 },
    { id: 'himmel', name: 'Himmelblau', h: 200, s: 52, l: 70 },
    { id: 'taube', name: 'Taubenblau', h: 215, s: 30, l: 64 },
    { id: 'lavendel', name: 'Lavendel', h: 258, s: 36, l: 72 },
    { id: 'flieder', name: 'Flieder', h: 290, s: 26, l: 68 },
    { id: 'altrosa', name: 'Altrosa', h: 350, s: 40, l: 72 },
    { id: 'beere', name: 'Beere', h: 335, s: 38, l: 58 },
    { id: 'schiefer', name: 'Schiefer', h: 210, s: 10, l: 62 },
  ];
  const AKZENT_STANDARD = { farbe: 'ocker', hell: 50, saettigung: 50 };
  const PRO_HELL_L = 0.8;          // Helligkeit ±40 Prozentpunkte (dunkel → helle Schrift)
  const PRO_SAETTIGUNG_S = 0.6;    // Sättigung ±30 Prozentpunkte
  const TUSCHE = '#1f1c18';
  const HELL = '#fbfaf5';          // Schrift auf dunkler Knopf-Farbe
  const LINIE_START = { papier: 33, pappe: 19 };   // so dunkel ist die Linie beim Ocker (wie bisher)

  const begrenzt = (wert, standard) => {
    const zahl = typeof wert === 'number' ? wert : NaN;
    return Number.isFinite(zahl) ? Math.min(100, Math.max(0, Math.round(zahl))) : standard;
  };
  const regler = (r, standard) => ({
    hell: begrenzt(r && r.hell, standard.hell),
    waerme: begrenzt(r && r.waerme, standard.waerme),
  });

  function einstellungen() {
    try {
      if (typeof Speicher !== 'undefined') return Speicher.daten.einstellungen || {};
      const roh = localStorage.getItem('italienisch-daten');
      return (roh ? (JSON.parse(roh) || {}).einstellungen : null) || {};
    } catch (e) {
      return {};
    }
  }
  const gespeichert = () => einstellungen().hintergrund;

  function wahl() {
    const g = gespeichert() || {};
    return {
      art: ARTEN.includes(g.art) ? g.art : 'auto',
      papier: regler(g.papier, STANDARD.papier),
      pappe: regler(g.pappe, STANDARD.pappe),
    };
  }

  function aktuelleArt(w, dunkel) {
    const art = w && w.art;
    if (art === 'papier' || art === 'pappe') return art;
    return dunkel ? 'pappe' : 'papier';
  }

  function hsl(art, r, plusL = 0) {
    const m = MODELL[art];
    const { hell, waerme } = regler(r, STANDARD[art]);
    const h = Math.round(m.h + (waerme - 50) * PRO_WAERME_H);
    const s = Math.round(Math.min(100, Math.max(0, m.s + (waerme - 50) * PRO_WAERME_S)));
    const l = Math.round(Math.min(100, m.l + (hell - 50) * m.proHell + plusL));
    return `hsl(${h} ${s}% ${l}%)`;
  }
  const farbe = (art, r) => hsl(art, r);
  const flaeche = (art, r) => hsl(art, r, MODELL[art].flaeche);
  const rand = (art, r) => hsl(art, r, MODELL[art].rand);   // Ränder von Karten, Leisten, Reglern

  // WCAG-Kontrast zwischen zwei Farben (#rrggbb oder hsl(H S% L%))
  function rgb(text) {
    const hex = /^#([0-9a-f]{6})$/i.exec(text);
    if (hex) return [0, 2, 4].map((i) => parseInt(hex[1].slice(i, i + 2), 16) / 255);
    const m = /^hsl\(\s*([\d.]+)\s+([\d.]+)%\s+([\d.]+)%\s*\)$/.exec(text);
    if (!m) throw new Error('Farbe nicht lesbar: ' + text);
    const h = Number(m[1]) / 360, s = Number(m[2]) / 100, l = Number(m[3]) / 100;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    const kanal = (t) => {
      t = (t + 1) % 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    return [kanal(h + 1 / 3), kanal(h), kanal(h - 1 / 3)];
  }
  function leuchtkraft(text) {
    const [r, g, b] = rgb(text).map((c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  function kontrast(a, b) {
    const [x, y] = [leuchtkraft(a), leuchtkraft(b)].sort((m, n) => n - m);
    return (x + 0.05) / (y + 0.05);
  }

  // ---------- Knopf-Farbe ----------

  function akzentWahl() {
    const g = einstellungen().akzent || {};
    return {
      farbe: AKZENTE.some((a) => a.id === g.farbe) ? g.farbe : AKZENT_STANDARD.farbe,
      hell: begrenzt(g.hell, AKZENT_STANDARD.hell),
      saettigung: begrenzt(g.saettigung, AKZENT_STANDARD.saettigung),
    };
  }

  const grenzen = (x, min, max) => Math.round(Math.min(max, Math.max(min, x)));
  const hslText = (h, s, l) => `hsl(${h} ${s}% ${l}%)`;

  // Fläche (Hauptknöpfe …) und Linie (Nebenknöpfe, Links) für Art art und Hintergrund-Regler r
  function akzentFarben(art, a = akzentWahl(), r = wahl()[art]) {
    const wahlA = { ...AKZENT_STANDARD, ...(a || {}) };
    const basis = AKZENTE.find((x) => x.id === wahlA.farbe) || AKZENTE[0];
    const s = grenzen(basis.s + (begrenzt(wahlA.saettigung, 50) - 50) * PRO_SAETTIGUNG_S, 4, 95);
    let l = grenzen(basis.l + (begrenzt(wahlA.hell, 50) - 50) * PRO_HELL_L, 18, 92);
    // Schrift auf der Farbe: Tusche, bei dunkler Farbe hell. Reicht keins (mittlere Töne), etwas heller bzw. dunkler machen.
    const passt = (schrift, ll) => kontrast(schrift, hslText(basis.h, s, ll)) >= 4.5;
    let text = TUSCHE;
    if (!passt(TUSCHE, l)) {
      if (passt(HELL, l)) text = HELL;
      else if (l >= 45) { while (l < 95 && !passt(TUSCHE, l)) l += 1; }
      else { text = HELL; while (l > 5 && !passt(HELL, l)) l -= 1; }
    }
    const grund = farbe(art, r), fl = flaeche(art, r);
    let ll = LINIE_START[art];
    const linieS = Math.min(s + 10, 80);
    while (ll > 5 && (kontrast(hslText(basis.h, linieS, ll), grund) < 4.5 || kontrast(hslText(basis.h, linieS, ll), fl) < 4.5)) ll -= 1;
    return { akzent: hslText(basis.h, s, l), linie: hslText(basis.h, linieS, ll), text };
  }

  function akzentSetzen(teil, optionen = {}) {
    const neu = { ...akzentWahl(), ...(teil || {}) };
    const alt_ = Speicher.daten.einstellungen;
    Speicher.daten.einstellungen = { ...(alt_ && typeof alt_ === 'object' ? alt_ : {}), akzent: neu };
    Speicher.daten.einstellungen.akzent = akzentWahl();          // bereinigt (Grenzen, bekannte Farbe)
    if (optionen.speichern !== false) Speicher.speichern();
    anwenden();
  }

  function akzentZuruecksetzen() {
    akzentSetzen({ ...AKZENT_STANDARD });
  }

  function dunkelGewuenscht() {
    return typeof matchMedia === 'function' && matchMedia('(prefers-color-scheme: dark)').matches;
  }
  // die Art, die gerade zu sehen ist
  const gezeigteArt = () => aktuelleArt(wahl(), dunkelGewuenscht());

  // optionen.speichern = false: nur anzeigen (beim Ziehen der Regler), gespeichert wird beim Loslassen
  function setzen(teil, optionen = {}) {
    const alt = wahl();
    const neu = {
      art: ARTEN.includes(teil.art) ? teil.art : alt.art,
      papier: regler({ ...alt.papier, ...(teil.papier || {}) }, STANDARD.papier),
      pappe: regler({ ...alt.pappe, ...(teil.pappe || {}) }, STANDARD.pappe),
    };
    const alt_ = Speicher.daten.einstellungen;
    Speicher.daten.einstellungen = { ...(alt_ && typeof alt_ === 'object' ? alt_ : {}), hintergrund: neu };
    if (optionen.speichern !== false) Speicher.speichern();
    anwenden();
  }

  function zuruecksetzen() {
    setzen({ [gezeigteArt()]: { ...STANDARD[gezeigteArt()] } });
  }

  // Farben als CSS-Variablen auf <html> setzen, dazu data-grund und die Farbe der Statusleiste
  function anwenden() {
    if (typeof document === 'undefined' || !document.documentElement || !document.documentElement.style) return;
    const w = wahl();
    const art = aktuelleArt(w, dunkelGewuenscht());
    const wurzel = document.documentElement;
    const f = FARBEN[art];
    const ak = akzentFarben(art, akzentWahl(), w[art]);
    const werte = {
      '--akzent': ak.akzent,
      '--akzent-text': ak.text,
      '--hintergrund': farbe(art, w[art]),
      '--flaeche': flaeche(art, w[art]),
      '--text-leise': f.textLeise,
      '--richtig': f.richtig,
      '--fehler': f.fehler,
      '--akzent-linie': ak.linie,
      '--rand': rand(art, w[art]),
    };
    Object.entries(werte).forEach(([name, wert]) => wurzel.style.setProperty(name, wert));
    wurzel.dataset.grund = art;
    document.querySelectorAll('meta[name="theme-color"]').forEach((m) => m.setAttribute('content', werte['--hintergrund']));
  }

  // sofort beim Laden anwenden und dem iPhone folgen, wenn es zwischen hell und dunkel wechselt
  anwenden();
  if (typeof matchMedia === 'function') {
    const mq = matchMedia('(prefers-color-scheme: dark)');
    const neu = () => anwenden();
    if (mq.addEventListener) mq.addEventListener('change', neu);
    else if (mq.addListener) mq.addListener(neu);
  }

  return {
    STANDARD, FARBEN, wahl, aktuelleArt, farbe, flaeche, rand, kontrast, gezeigteArt, setzen, zuruecksetzen, anwenden,
    AKZENTE, AKZENT_STANDARD, akzentWahl, akzentFarben, akzentSetzen, akzentZuruecksetzen,
  };
})();
