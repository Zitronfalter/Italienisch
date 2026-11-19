// Tests für „Leise“: nichts vorlesen, Hörübungen als Text.
// Ausführen: node --test werkzeuge/test/leise.test.js

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('Leise: kannSprechen aus, Einstellung gespeichert', () => {
  const k = laden();
  k.Lesen.kannSprechen = true;                 // Gerät kann sprechen
  assert.strictEqual(k.Lesen.leise(), false);
  assert.strictEqual(k.Lesen.kannSprechen, true);
  k.Lesen.leiseSetzen(true);
  assert.strictEqual(k.Lesen.leise(), true);
  assert.strictEqual(k.Speicher.daten.einstellungen.leise, true);
  assert.strictEqual(k.Lesen.kannSprechen, false);
  k.Lesen.leiseSetzen(false);
  assert.strictEqual(k.Lesen.kannSprechen, true);
});

test('Leise: Hören-Runde ohne Diktat, nur Sätze mit Deutsch', () => {
  const k = laden();
  k.Lesen.kannSprechen = true;
  k.Lesen.leiseSetzen(true);
  for (let i = 0; i < 5; i++) {
    const r = k.Uebungen.runde();
    const saetze = r.filter((a) => a.satz);
    assert.ok(saetze.length > 0);
    for (const a of saetze) {
      assert.strictEqual(a.art, 'kacheln');
      assert.ok(a.satz.de, 'deutscher Satz fehlt: ' + a.satz.it);
    }
  }
});

test('Laut: Diktat kommt weiter vor', () => {
  const k = laden();
  k.Lesen.kannSprechen = true;
  const arten = new Set(k.Uebungen.runde().map((a) => a.art));
  assert.ok(arten.has('diktat'));
});
