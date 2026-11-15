// Tests für Stimmen und Tempo (lesen.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden();
const g = (text) => k.Lesen.geschlecht(text);

test('geschlecht: Artikel', () => {
  for (const w of ['il caffè', 'lo zucchero', 'i libri', 'gli amici', 'un bicchiere', 'uno studente', 'Il conto, per favore']) {
    assert.strictEqual(g(w), 'm', w);
  }
  for (const w of ['la casa', 'le mele', 'una pizza', "un'amica", 'un’idea']) {
    assert.strictEqual(g(w), 'w', w);
  }
});

test("geschlecht: l' nach Endung und Ausnahmen", () => {
  assert.strictEqual(g("l'olio"), 'm');
  assert.strictEqual(g("l'acqua frizzante"), 'w');
  assert.strictEqual(g("l'Italia"), 'w');
  assert.strictEqual(g("l'assicurazione"), 'w');
  assert.strictEqual(g("l'età"), 'w');
  assert.strictEqual(g("l'attrice"), 'w');
  assert.strictEqual(g("l'estate"), 'w');
  assert.strictEqual(g("l'ospedale"), 'm');
  assert.strictEqual(g("l'ascensore"), 'm');
  assert.strictEqual(g("l'esame"), 'm');
});

test('geschlecht: unklar oder ohne Geschlecht → null (normale Stimme)', () => {
  for (const w of ['mangiare', 'bello', 'ciao', "l'insegnante", "l'artista", "l'ospite", "l'autobus"]) {
    assert.strictEqual(g(w), null, w);
  }
});

test('tempo: alte Werte bleiben gültig, Standard 0.85', () => {
  assert.strictEqual(k.Lesen.tempo(), 0.85);
  k.Lesen.tempoWaehlen(0.7);
  assert.strictEqual(k.Lesen.tempo(), 0.7);
});
