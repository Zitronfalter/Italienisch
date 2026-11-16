// Tests für schon-bekannt.js: Welche App-Wörter kennt Nicole schon aus Duolingo?
// Ausführen: node --test werkzeuge/test/schon-bekannt.test.js

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('Wörter mit Artikel, Apostroph und Fragezeichen werden erkannt', () => {
  const { SchonBekannt } = laden();
  for (const it of ['il caffè', "l'acqua", 'l’acqua', 'quanto costa?', 'come va?', 'la mattina', 'il tè', 'grazie mille']) {
    assert.strictEqual(SchonBekannt.enthaelt(it), true, it);
  }
});

test('unbekannte Wörter und „sei“ (sechs) werden nicht vorgemerkt', () => {
  const { SchonBekannt } = laden();
  for (const it of ['il bancone', 'la cannuccia', 'sei', 'buona giornata']) {
    assert.strictEqual(SchonBekannt.enthaelt(it), false, it);
  }
});

test('Lektion 5 „Al bar“: die meisten Wörter sind schon bekannt', () => {
  const k = laden();
  const l = k.Lektionen.alle().find((x) => x.id === 'l02');
  const vorgemerkt = l.woerter.filter((w) => k.SchonBekannt.enthaelt(w));
  assert.ok(vorgemerkt.length >= 15, vorgemerkt.join(', '));
});
