// Lädt die Browser-Dateien der App in Node, damit Tests und Prüfskripte sie benutzen können.
// Alle Dateien werden hintereinander als EIN Skript ausgeführt – so sind die `const` der App sichtbar.

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const WURZEL = path.join(__dirname, '..', '..');

// Reihenfolge wie in index.html (ohne app.js, das die Oberfläche braucht)
const STANDARD = [
  'speicher.js', 'wortschatz.js', 'vokabeln.js', 'texte.js', 'texte-b.js', 'texte-a1.js', 'texte-a2.js', 'texte-b1.js', 'texte-b2.js', 'lesen.js', 'grammatik.js', 'grammatik-b.js', 'zusatz.js', 'erzeuger.js',
  'lektionen-inhalt.js', 'lektionen-a1.js', 'lektionen-a2.js', 'lektionen-b1.js', 'lektionen-b2.js', 'lektionen.js', 'uebungen.js', 'wiederholung.js',
];

const NAMEN = [
  'Speicher', 'Vokabeln', 'Lesen', 'Grammatik', 'Uebungen', 'Lektionen',
  'LEKTIONEN', 'WORTSCHATZ', 'WORTSCHATZ_THEMEN', 'KAPITEL', 'LESETEXTE', 'GRUNDWOERTER', 'wortId', 'ZUSATZ', 'Erzeuger', 'Wiederholung',
];

function platzhalter(gespeichert) {
  const speicher = new Map(gespeichert === undefined ? [] : [['italienisch-daten', gespeichert]]);
  const nichts = () => {};
  return {
    localStorage: {
      getItem: (k) => (speicher.has(k) ? speicher.get(k) : null),
      setItem: (k, v) => speicher.set(k, String(v)),
      removeItem: (k) => speicher.delete(k),
    },
    navigator: {},
    document: { createElement: () => ({}), body: { appendChild: nichts }, getElementById: () => null },
    window: {},
    speechSynthesis: { getVoices: () => [], addEventListener: nichts, speak: nichts, cancel: nichts },
    console,
    URL,
    setTimeout,
    clearTimeout,
  };
}

// dateien: Liste von Dateinamen (fehlende werden übersprungen)
// extraCode: wird hinter die Dateien gehängt (z. B. um LEKTIONEN zu ersetzen)
// optionen.gespeichert: Inhalt von localStorage['italienisch-daten'] (Text) beim Start
function laden(dateien = STANDARD, extraCode = '', optionen = {}) {
  const kontext = vm.createContext(platzhalter(optionen.gespeichert));
  const teile = dateien
    .map((d) => path.join(WURZEL, d))
    .filter((p) => fs.existsSync(p))
    .map((p) => fs.readFileSync(p, 'utf8'));
  const export_ = NAMEN.map((n) => `try { globalThis.${n} = ${n}; } catch (e) {}`).join('\n');
  vm.runInContext([...teile, extraCode, export_].join('\n;\n'), kontext, { filename: 'app-dateien.js' });
  return kontext;
}

module.exports = { laden, STANDARD, WURZEL };
