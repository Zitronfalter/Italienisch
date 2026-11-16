// Tests für die Sätze zu neuen Wörtern (saetze-a1.js) und ihr Prüfprogramm.
// Ausführen: node --test werkzeuge/test/saetze-daten.test.js

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');
const { pruefeSaetze } = require('../saetze-pruefen');

test('Prüfprogramm meldet 0 Fehler', () => {
  const { fehler } = pruefeSaetze(laden());
  assert.deepStrictEqual(fehler, []);
});

test('jede Satz-Lektion enthält genau die Wörter ihrer Lektion', () => {
  const k = laden();
  const ids = Object.keys(k.SAETZE);
  assert.ok(ids.length > 0, 'SAETZE ist leer');
  for (const id of ids) {
    const l = k.LEKTIONEN.find((x) => x.id === id);
    assert.ok(l, `Lektion ${id} gibt es nicht`);
    const woerter = k.SAETZE[id].map((e) => e.wort);
    assert.strictEqual(new Set(woerter).size, woerter.length, `${id}: Wort doppelt`);
    assert.deepStrictEqual([...woerter].sort(), [...l.woerter].sort(), id);
  }
});

test('jedes Wort hat mindestens 3 Sätze, kein Satz doppelt', () => {
  const k = laden();
  const gesehen = new Set();
  for (const [id, liste] of Object.entries(k.SAETZE)) {
    for (const e of liste) {
      assert.ok(e.saetze.length >= 3, `${id}: „${e.wort}“ hat nur ${e.saetze.length} Sätze`);
      for (const s of e.saetze) {
        assert.ok(!gesehen.has(s.it), `Satz doppelt: ${s.it}`);
        gesehen.add(s.it);
      }
    }
  }
});

// ---------- Prüfprogramm mit Beispiel-Daten ----------

const lektion = (id, nr, woerter) =>
  ({ id, nr, titel: id, situation: '', stufe: 'A1', art: 'lektion', woerter, kapitel: [], texte: [] });

function mitBeispiel(saetze) {
  return laden(undefined, `
    LEKTIONEN = ${JSON.stringify([lektion('l01', 1, ['ciao', 'bene', 'mi chiamo']), lektion('l02', 2, ['il caffè', 'bere', 'grazie mille'])])};
    for (const id of Object.keys(SAETZE)) delete SAETZE[id];
    SAETZE.l02 = ${JSON.stringify(saetze)};
  `);
}

const drei = (it, de, extra = {}) => [1, 2, 3].map((n) => ({ it: n > 1 ? `${it} (${n})` : it, de, ...extra }));

test('Beispiel ohne Fehler: Formen, Eigennamen, frühere Wörter dieser Lektion', () => {
  const k = mitBeispiel([
    { wort: 'il caffè', saetze: drei('Ciao Marco, è il caffè?', 'Hallo Marco, ist das der Kaffee?') },
    { wort: 'bere', saetze: drei('Ciao, bevo il caffè.', 'Hallo, ich trinke den Kaffee.', { form: 'bevo', formen: { bevo: 'bere' } }) },
    { wort: 'grazie mille', saetze: drei('Grazie mille, Anna! Ti chiami Anna?', 'Vielen Dank!') },
  ]);
  assert.deepStrictEqual(pruefeSaetze(k).fehler, []);
});

test('unbekanntes Wort und Wort, das erst später kommt, werden gemeldet', () => {
  const k = mitBeispiel([
    { wort: 'il caffè', saetze: drei('Bevo il caffè sempre.', 'Ich trinke immer Kaffee.') },
    { wort: 'bere', saetze: drei('Bevo.', 'Ich trinke.', { form: 'bevo', formen: { bevo: 'bere' } }) },
    { wort: 'grazie mille', saetze: drei('Grazie mille.', 'Vielen Dank.') },
  ]);
  const { fehler } = pruefeSaetze(k);
  assert.ok(fehler.some((f) => f.includes('„sempre“')), fehler.join('\n'));
  assert.ok(fehler.some((f) => f.includes('„bevo“') && f.includes('Bevo il caffè')), fehler.join('\n'));
});

test('fehlendes Wort, zu wenige Sätze, Form nicht im Satz, leeres Deutsch', () => {
  const k = mitBeispiel([
    { wort: 'il caffè', saetze: [{ it: 'Ciao!', de: 'Hallo!' }, { it: 'Il caffè.', de: '' }] },
    { wort: 'bere', saetze: drei('Il caffè.', 'Der Kaffee.', { form: 'bevo' }) },
  ]);
  const { fehler } = pruefeSaetze(k);
  const hat = (teil) => assert.ok(fehler.some((f) => f.includes(teil)), `${teil}\n${fehler.join('\n')}`);
  hat('„grazie mille“ hat keine Sätze');
  hat('nur 2 Sätze');
  hat('„caffè“ steht nicht im Satz „Ciao!“');
  hat('„bevo“ steht nicht im Satz');
  hat('kein Deutsch');
});
