// Tests für „nichts doppelt an einem Tag“ und „mehr neue Wörter“.
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const frisch = () => laden();
const gestern = (k) => {
  const d = new Date(k.Vokabeln.heute() + 'T12:00');
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
};

test('heuteGeloest: nur richtig gelöste Aufgaben werden gemerkt', () => {
  const k = frisch();
  const a = { art: 'grammatik', kapitel: 'artikel', nr: 0 };
  const b = { art: 'grammatik', kapitel: 'artikel', nr: 1 };
  k.Wiederholung.fehlerMerken(a, true);
  k.Wiederholung.fehlerMerken(b, false);
  assert.strictEqual(k.Wiederholung.heuteGeloest(a), true);
  assert.strictEqual(k.Wiederholung.heuteGeloest(b), false);
});

test('heuteGeloest: auch Hörsätze und Wörter (Italienisch → Deutsch)', () => {
  const k = frisch();
  const h = { art: 'hoeren', satz: { it: 'Ciao, come stai?' } };
  const d = { art: 'deutsch', id: k.wortId('ciao') };
  k.Wiederholung.fehlerMerken(h, true);
  k.Wiederholung.fehlerMerken(d, true);
  assert.strictEqual(k.Wiederholung.heuteGeloest(h), true);
  assert.strictEqual(k.Wiederholung.heuteGeloest(d), true);
});

test('heuteGeloest: am nächsten Tag ist alles wieder frisch', () => {
  const k = frisch();
  const a = { art: 'grammatik', kapitel: 'artikel', nr: 0 };
  k.Wiederholung.fehlerMerken(a, true);
  k.Speicher.daten.fortschritt.heute.datum = gestern(k);
  assert.strictEqual(k.Wiederholung.heuteGeloest(a), false);
});

test('Hören: heute richtig gelöste Sätze kommen nicht noch einmal', () => {
  const k = frisch();
  const l = k.Lektionen.alle()[0];
  const vorher = k.Uebungen.frischeSaetze({ lektion: l });
  assert.ok(vorher.length >= 2);
  k.Wiederholung.fehlerMerken({ art: 'hoeren', satz: vorher[0] }, true);
  const nachher = k.Uebungen.frischeSaetze({ lektion: l });
  assert.strictEqual(nachher.length, vorher.length - 1);
  // Alle gelöst → die Runde hat keine Satz-Aufgaben mehr (nur Wortpaare)
  for (const s of nachher) k.Wiederholung.fehlerMerken({ art: 'hoeren', satz: s }, true);
  const runde = k.Uebungen.runde({ lektion: l });
  assert.ok(runde.every((a) => a.art === 'paare'));
});

test('Aufgabenrunde: heute gelöste Aufgaben fallen weg', () => {
  const k = frisch();
  const l = k.Lektionen.alle()[0];
  const erst = k.Lektionen.aufgabenFuer(l, 10);
  for (const a of erst) k.Wiederholung.fehlerMerken(a, true);
  const dann = k.Lektionen.aufgabenFuer(l, 10);
  assert.ok(dann.every((a) => !k.Wiederholung.heuteGeloest(a)));
});

test('mehrHolen: heute 3 neue Wörter mehr, morgen wieder normal', () => {
  const k = frisch();
  const vorher = k.Vokabeln.neuGrenze();
  k.Vokabeln.mehrHolen();
  assert.strictEqual(k.Vokabeln.neuGrenze(), vorher + 3);
  k.Speicher.daten.fortschritt.neuExtra.datum = gestern(k);
  assert.strictEqual(k.Vokabeln.neuGrenze(), vorher);
});
