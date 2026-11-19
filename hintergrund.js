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

  const begrenzt = (wert, standard) => {
    const zahl = typeof wert === 'number' ? wert : NaN;
    return Number.isFinite(zahl) ? Math.min(100, Math.max(0, Math.round(zahl))) : standard;
  };
  const regler = (r, standard) => ({
    hell: begrenzt(r && r.hell, standard.hell),
    waerme: begrenzt(r && r.waerme, standard.waerme),
  });

  function gespeichert() {
    try {
      if (typeof Speicher !== 'undefined') return (Speicher.daten.einstellungen || {}).hintergrund;
      const roh = localStorage.getItem('italienisch-daten');
      return roh ? ((JSON.parse(roh) || {}).einstellungen || {}).hintergrund : undefined;
    } catch (e) {
      return undefined;
    }
  }

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
    const werte = {
      '--hintergrund': farbe(art, w[art]),
      '--flaeche': flaeche(art, w[art]),
      '--text-leise': f.textLeise,
      '--richtig': f.richtig,
      '--fehler': f.fehler,
      '--akzent-linie': f.akzentLinie,
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

  return { STANDARD, FARBEN, wahl, aktuelleArt, farbe, flaeche, rand, kontrast, gezeigteArt, setzen, zuruecksetzen, anwenden };
})();
