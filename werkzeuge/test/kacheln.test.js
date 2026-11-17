// Tests: wohin eine gezogene Kachel kommt (kacheln.js).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden();
const r = (left, top, right, bottom) => ({ left, top, right, bottom });
// zwei Kacheln in Zeile 1, eine in Zeile 2
const zwei = [r(0, 0, 50, 48), r(58, 0, 108, 48), r(0, 56, 50, 104)];

test('einfuegeStelle: in der Zeile nach der Mitte der Kacheln', () => {
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 10, 20), 0);
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 80, 20), 1);
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 200, 20), 2);
});

test('einfuegeStelle: zweite Zeile, darunter, darüber, leer', () => {
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 10, 80), 2);
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 200, 80), 3);
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 10, 300), 3);
  assert.strictEqual(k.Kacheln.einfuegeStelle(zwei, 10, -20), 0);
  assert.strictEqual(k.Kacheln.einfuegeStelle([], 10, 10), 0);
});
