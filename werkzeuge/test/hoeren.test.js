// Tests für Hören & Üben (uebungen.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('jeder Hörsatz hat eine deutsche Übersetzung', () => {
  const k = laden();
  const ohne = k.Uebungen.saetze().filter((s) => !s.de).map((s) => `${s.quelle}: ${s.it}`);
  assert.deepStrictEqual([...ohne], []);
});

test('Hörsätze aus Texten nehmen die Übersetzung aus uebersetzung', () => {
  const k = laden();
  const s = k.Uebungen.saetze().find((x) => x.it === 'Marco è al bar.');
  assert.strictEqual(s.de, 'Marco ist in der Bar.');
});
