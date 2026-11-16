// Tests für „Lektion als Weg“ (lektionen.js: weg, schrittNr, naechsterWegSchritt, schrittGemacht, Übergang).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const woerter = (n, vor = 'w') => Array.from({ length: n }, (_, i) => vor + (i + 1));

const BEISPIEL = [
  { id: 'g13', nr: 1, titel: 'Groß', situation: '', stufe: 'A1', art: 'lektion',
    woerter: woerter(13, 'a'), kapitel: ['artikel'], texte: ['al-bar'] },
  { id: 'w12', nr: 1.1, titel: 'Wörter', situation: '', stufe: 'A1', art: 'lektion', wortLektion: true,
    woerter: woerter(12, 'b'), kapitel: [], uebenKapitel: ['artikel'], texte: ['famiglia'] },
  { id: 'r1', nr: 1.5, titel: 'Wiederholung', situation: '', stufe: 'A1', art: 'ripasso',
    lektionen: ['g13', 'w12'], woerter: [], kapitel: [], texte: ['ciao'] },
  { id: 'k5', nr: 2, titel: 'Fünf', situation: '', stufe: 'A1', art: 'lektion',
    woerter: woerter(5, 'c'), kapitel: [], texte: [] },
  { id: 'k3', nr: 3, titel: 'Drei', situation: '', stufe: 'A1', art: 'lektion',
    woerter: woerter(3, 'd'), kapitel: [], texte: [] },
  { id: 'k0', nr: 4, titel: 'Null', situation: '', stufe: 'A1', art: 'lektion',
    woerter: [], kapitel: ['artikel'], texte: [] },
];

function frisch(gespeichert) {
  return laden(undefined, `LEKTIONEN = ${JSON.stringify(BEISPIEL)};`,
    { gespeichert: gespeichert === undefined ? undefined : JSON.stringify(gespeichert) });
}

const lek = (k, lid) => k.Lektionen.finde(lid);
const arten = (w) => [...w.map((s) => s.art)];
const paeckchen = (w) => [...w.filter((s) => s.art === 'woerter').map((s) => s.ids.length)];
const karte = (extra = {}) => ({ fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 0, ...extra });

test('weg: Päckchengrößen 13 / 12 / 5 / 3 / 0', () => {
  const k = frisch();
  assert.deepStrictEqual(paeckchen(k.Lektionen.weg(lek(k, 'g13'))), [5, 4, 4]);
  assert.deepStrictEqual(paeckchen(k.Lektionen.weg(lek(k, 'w12'))), [4, 4, 4]);
  assert.deepStrictEqual(paeckchen(k.Lektionen.weg(lek(k, 'k5'))), [5]);
  assert.deepStrictEqual(paeckchen(k.Lektionen.weg(lek(k, 'k3'))), [3]);
  assert.deepStrictEqual(paeckchen(k.Lektionen.weg(lek(k, 'k0'))), []);
});

test('weg: große Lektion mit 1 Kapitel und 1 Text = 10 Schritte wie im Entwurf', () => {
  const k = frisch();
  const w = k.Lektionen.weg(lek(k, 'g13'));
  assert.deepStrictEqual(arten(w),
    ['woerter', 'ueben', 'kapitel', 'woerter', 'ueben', 'text', 'woerter', 'ueben', 'hoeren', 'abschluss']);
  assert.strictEqual(w[2].kapitel, 'artikel');
  assert.strictEqual(w[5].text, 'al-bar');
  // Üben nimmt alle bisherigen Wörter
  assert.strictEqual(w[1].ids.length, 5);
  assert.strictEqual(w[4].ids.length, 9);
  assert.strictEqual(w[7].ids.length, 13);
  assert.ok(w.every((s) => typeof s.name === 'string' && s.name));
  // gleiche Daten → gleicher Weg
  assert.deepStrictEqual(JSON.stringify(k.Lektionen.weg(lek(k, 'g13'))), JSON.stringify(w));
});

test('weg: Wort-Lektion – freier Platz wird gemischtes Üben, uebenKapitel kein Schritt', () => {
  const k = frisch();
  const w = k.Lektionen.weg(lek(k, 'w12'));
  assert.deepStrictEqual(arten(w),
    ['woerter', 'ueben', 'text', 'woerter', 'ueben', 'hoeren', 'woerter', 'ueben', 'ueben', 'abschluss']);
  assert.strictEqual(w[8].ids.length, 12);
});

test('weg: Wiederholung = Übungen + Text, kein Abschluss', () => {
  const k = frisch();
  const w = k.Lektionen.weg(lek(k, 'r1'));
  assert.deepStrictEqual(arten(w), ['uebungen', 'text']);
});

test('weg: Lektion ohne Wörter – Inhalt als eigene Schritte, dann Abschluss', () => {
  const k = frisch();
  assert.deepStrictEqual(arten(k.Lektionen.weg(lek(k, 'k0'))), ['kapitel', 'hoeren', 'abschluss']);
  assert.deepStrictEqual(arten(k.Lektionen.weg(lek(k, 'k5'))), ['woerter', 'ueben', 'hoeren', 'abschluss']);
});

test('naechsterWegSchritt: Start bei 0, überspringt Päckchen mit lauter bekannten Wörtern', () => {
  const k = frisch();
  const l = lek(k, 'g13');
  assert.strictEqual(k.Lektionen.naechsterWegSchritt(l).nr, 0);
  for (const id of l.wortIds.slice(0, 5)) k.Speicher.daten.karten[id] = karte();
  const n = k.Lektionen.naechsterWegSchritt(l);
  assert.strictEqual(n.nr, 1);
  assert.strictEqual(n.schritt.art, 'ueben');
  assert.strictEqual(k.Lektionen.schrittNr(l), 1);
});

test('naechsterWegSchritt: überspringt geübtes Kapitel und verstandenen Text, keine Schleife', () => {
  const k = frisch();
  const l = lek(k, 'g13');
  for (const id of l.wortIds) k.Speicher.daten.karten[id] = karte();
  k.Speicher.daten.fortschritt.grammatik = { artikel: { geuebt: true, richtig: 8, von: 8 } };
  k.Speicher.daten.fortschritt.texte = { 'al-bar': { verstanden: true, richtig: 3, von: 3 } };
  const besucht = [];
  for (let i = 0; i < 20; i++) {
    const n = k.Lektionen.naechsterWegSchritt(l);
    if (!n) break;
    besucht.push(n.schritt.art);
    k.Lektionen.schrittGemacht(l.id, n.nr);
  }
  assert.deepStrictEqual(besucht, ['ueben', 'ueben', 'ueben', 'hoeren', 'abschluss']);
  assert.ok(k.Lektionen.istErledigt(l));
  assert.strictEqual(k.Lektionen.naechsterWegSchritt(l), null);
});

test('schrittGemacht: zählt nur vorwärts, am Ende erledigt', () => {
  const k = frisch();
  const l = lek(k, 'k5');
  k.Lektionen.schrittGemacht('k5', 1);
  assert.strictEqual(k.Lektionen.schrittNr(l), 2);
  k.Lektionen.schrittGemacht('k5', 0);   // gemachten Schritt nochmal → bleibt
  assert.strictEqual(k.Lektionen.schrittNr(l), 2);
  assert.ok(!k.Lektionen.istErledigt(l));
  k.Lektionen.schrittGemacht('k5', 3);
  assert.ok(k.Lektionen.istErledigt(l));
  assert.ok(k.Speicher.daten.fortschritt.lektionen.k5.begonnen);
});

test('aktualisieren: Weg zu Ende → erledigt', () => {
  const k = frisch();
  k.Speicher.daten.fortschritt.lektionen = { k3: { begonnen: '2026-11-01', schritt: 4 } };
  const neu = k.Lektionen.aktualisieren();
  assert.deepStrictEqual([...neu.map((l) => l.id)], ['k3']);
});

function format2Stand(k) {
  const g = lek(k, 'g13');
  const karten = {};
  for (const id of g.wortIds.slice(0, 9)) karten[id] = karte();          // Päckchen 1+2 gelernt
  karten[g.wortIds[9]] = karte({ kennen: 2 });                           // Päckchen 3 angefangen
  return {
    kennung: 'italienisch-app', format: 2, karten, eigeneTexte: [], eigeneWoerter: {},
    fortschritt: {
      grammatik: { artikel: { geuebt: true, richtig: 8, von: 8 } },
      lektionen: {
        g13: { begonnen: '2026-11-10', woerterGeprueft: true },
        k5: { begonnen: '2026-11-01', erledigt: '2026-11-05' },
      },
    },
  };
}

test('uebergang 2 → 3: halb fertige Lektion startet beim ersten offenen Schritt', () => {
  const k = frisch(format2Stand(frisch()));
  k.Lektionen.uebergang();
  assert.strictEqual(k.Speicher.daten.format, 3);
  // Päckchen 1, Üben, Kapitel, Päckchen 2, Üben fertig; Text offen → Schritt 5
  assert.strictEqual(k.Lektionen.schrittNr(lek(k, 'g13')), 5);
  assert.ok(k.Lektionen.istErledigt(lek(k, 'k5')));
  assert.ok(!k.Lektionen.istErledigt(lek(k, 'g13')));
  // nicht begonnene Lektion bekommt keinen Schritt
  assert.strictEqual(k.Lektionen.schrittNr(lek(k, 'k3')), 0);
  const vorher = JSON.stringify(k.Speicher.daten);
  k.Lektionen.uebergang();
  assert.strictEqual(JSON.stringify(k.Speicher.daten), vorher);
});

test('uebergang 2 → 3: junges Wort hält Üben offen', () => {
  const vorlage = format2Stand(frisch());
  const k0 = frisch();
  vorlage.karten[lek(k0, 'g13').wortIds[0]].kennen = 1;
  const k = frisch(vorlage);
  k.Lektionen.uebergang();
  assert.strictEqual(k.Lektionen.schrittNr(lek(k, 'g13')), 1);
});

test('neuer leerer Stand hat Format 3', () => {
  const k = frisch();
  assert.strictEqual(k.Speicher.daten.format, 3);
});
