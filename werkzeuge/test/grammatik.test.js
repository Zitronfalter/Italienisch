// Tests für gelöste Grammatik-Übungen (grammatik.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('ungeloeste: am Anfang alle Übungen', () => {
  const k = laden();
  const n = k.Grammatik.kapitel('artikel').uebungen.length;
  assert.deepStrictEqual([...k.Grammatik.ungeloeste('artikel')], [...Array(n).keys()]);
});

test('uebungGeloest: gelöste fallen weg, doppelt zählt einmal', () => {
  const k = laden();
  k.Grammatik.uebungGeloest('artikel', 1);
  k.Grammatik.uebungGeloest('artikel', 1);
  k.Grammatik.uebungGeloest('artikel', 3);
  assert.deepStrictEqual([...k.Speicher.daten.fortschritt.grammatik.artikel.geloest], [1, 3]);
  assert.ok(!k.Grammatik.ungeloeste('artikel').includes(1));
  assert.ok(!k.Grammatik.ungeloeste('artikel').includes(3));
});

test('ungeloeste: leer, wenn alle gelöst sind', () => {
  const k = laden();
  const n = k.Grammatik.kapitel('artikel').uebungen.length;
  for (let i = 0; i < n; i++) k.Grammatik.uebungGeloest('artikel', i);
  assert.deepStrictEqual([...k.Grammatik.ungeloeste('artikel')], []);
});

test('ergebnisSpeichern behält gelöste Übungen', () => {
  const k = laden();
  k.Grammatik.uebungGeloest('artikel', 0);
  k.Grammatik.ergebnisSpeichern('artikel', 5, 6);
  assert.deepStrictEqual([...k.Speicher.daten.fortschritt.grammatik.artikel.geloest], [0]);
  assert.strictEqual(k.Speicher.daten.fortschritt.grammatik.artikel.geuebt, true);
});

test('Kapitel gilt als geübt, wenn alle Übungen einmal gelöst sind', () => {
  const k = laden();
  const n = k.Grammatik.kapitel('artikel').uebungen.length;
  for (let i = 0; i < n; i++) k.Grammatik.uebungGeloest('artikel', i);
  k.Grammatik.ergebnisSpeichern('artikel', 1, 2);    // letzte Runde nur 1 von 2
  assert.strictEqual(k.Speicher.daten.fortschritt.grammatik.artikel.geuebt, true);
});

test('kein Übungssatz kommt doppelt vor', () => {
  const k = laden();
  const doppelt = [];
  for (const kap of k.KAPITEL) {
    const gesehen = new Set();
    for (const u of kap.uebungen) {
      const satz = (u.art === 'kacheln' ? u.it : u.satz.replace(/\s*\([^)]*\)\s*$/, '')).toLowerCase();
      if (gesehen.has(satz)) doppelt.push(`${kap.id}: ${satz}`);
      gesehen.add(satz);
    }
  }
  assert.deepStrictEqual([...doppelt], []);
});

test('jedes Kapitel hat mindestens 8 Übungen', () => {
  const k = laden();
  const zuWenig = k.KAPITEL.filter((x) => x.uebungen.length < 8).map((x) => `${x.id}: ${x.uebungen.length}`);
  assert.deepStrictEqual([...zuWenig], []);
});
