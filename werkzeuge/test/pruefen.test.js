// Tests für das Prüfskript der Lektionen.  Ausführen: node --test werkzeuge/test/

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');
const { pruefeLektionen } = require('../lektionen-pruefen');

// Beispiel-Lektionen und -Texte statt der echten
function mitBeispiel(lektionen, texte = []) {
  return laden(undefined, `
    LEKTIONEN = ${JSON.stringify(lektionen)};
    LESETEXTE.push(...${JSON.stringify(texte)});
  `);
}

const lektion = (id, nr, woerter, texte = []) =>
  ({ id, nr, titel: id, situation: '', stufe: 'A1', art: 'lektion', woerter, kapitel: [], texte });

const text = (id, inhalt, woerter = {}) =>
  ({ id, titel: id, art: 'Text', stufe: 'A1', text: inhalt, woerter, fragen: [] });

test('unbekanntes Lektionswort wird gemeldet', () => {
  const k = mitBeispiel([lektion('l01', 1, ['gibtsnicht'])]);
  const { fehler } = pruefeLektionen(k);
  assert.ok(fehler.some((f) => f.includes('gibtsnicht')), fehler.join('\n'));
});

test('Wort in zwei Lektionen wird gemeldet', () => {
  const k = mitBeispiel([lektion('l01', 1, ['ciao']), lektion('l02', 2, ['ciao'])]);
  const { fehler } = pruefeLektionen(k);
  assert.ok(fehler.some((f) => f.includes('ciao')), fehler.join('\n'));
});

test('unbekanntes Kapitel oder unbekannter Text wird gemeldet', () => {
  const l = lektion('l01', 1, ['ciao'], ['gibtsnicht-text']);
  l.kapitel = ['gibtsnicht-kapitel'];
  const { fehler } = pruefeLektionen(mitBeispiel([l]));
  assert.ok(fehler.some((f) => f.includes('gibtsnicht-text')), fehler.join('\n'));
  assert.ok(fehler.some((f) => f.includes('gibtsnicht-kapitel')), fehler.join('\n'));
});

test('Text mit zu vielen neuen Wörtern', () => {
  const formen = ['xa', 'xb', 'xc', 'xd', 'xe', 'xf', 'xg', 'xh', 'xi'];
  const woerter = Object.fromEntries(formen.map((f) => [f, [f, 'Testwort']]));
  const k = mitBeispiel([lektion('l01', 1, ['ciao'], ['t1'])], [text('t1', 'Ciao ' + formen.join(' ') + '.', woerter)]);
  const { fehler } = pruefeLektionen(k);
  assert.ok(fehler.some((f) => f.includes('t1') && f.includes('9')), fehler.join('\n'));
});

test('8 neue Wörter sind erlaubt', () => {
  const formen = ['xa', 'xb', 'xc', 'xd', 'xe', 'xf', 'xg', 'xh'];
  const woerter = Object.fromEntries(formen.map((f) => [f, [f, 'Testwort']]));
  const k = mitBeispiel([lektion('l01', 1, ['ciao'], ['t1'])], [text('t1', 'Ciao ' + formen.join(' ') + '.', woerter)]);
  assert.deepStrictEqual(pruefeLektionen(k).fehler, []);
});

test('Wort aus späterer Lektion im Text', () => {
  const k = mitBeispiel(
    [lektion('l01', 1, ['ciao'], ['t1']), lektion('l02', 2, ['il caffè'])],
    [text('t1', 'Ciao, caffè!')],
  );
  const { fehler } = pruefeLektionen(k);
  assert.ok(fehler.some((f) => f.includes('caffè')), fehler.join('\n'));
});

test('Wort aus früherer Lektion und Grundwörter sind bekannt', () => {
  const k = mitBeispiel(
    [lektion('l01', 1, ['il caffè']), lektion('l02', 2, ['ciao'], ['t1'])],
    [text('t1', 'Ciao, il caffè è qui.', { 'qui': ['qui', 'hier'] })],
  );
  assert.deepStrictEqual(pruefeLektionen(k).fehler, []);
});

test('Form mit Grundform aus einer Lektion zählt nicht als neu', () => {
  const formen = ['xa', 'xb', 'xc', 'xd', 'xe', 'xf', 'xg', 'xh'];
  const woerter = Object.fromEntries(formen.map((f) => [f, [f, 'Testwort']]));
  woerter['caffè'] = ['il caffè', 'Kaffee'];
  const k = mitBeispiel([lektion('l01', 1, ['il caffè'], ['t1'])], [text('t1', formen.join(' ') + ' caffè.', woerter)]);
  assert.deepStrictEqual(pruefeLektionen(k).fehler, []);
});

test('Eigennamen und Zahlen zählen nicht', () => {
  const formen = ['xa', 'xb', 'xc', 'xd', 'xe', 'xf', 'xg', 'xh'];
  const woerter = Object.fromEntries(formen.map((f) => [f, [f, 'Testwort']]));
  woerter['marco'] = ['Marco', 'Marco (Vorname)'];
  const k = mitBeispiel([lektion('l01', 1, ['ciao'], ['t1'])], [text('t1', 'Marco 12 ' + formen.join(' ') + '.', woerter)]);
  assert.deepStrictEqual(pruefeLektionen(k).fehler, []);
});

test('Wort ohne Bedeutung im Text wird gemeldet', () => {
  const k = mitBeispiel([lektion('l01', 1, ['ciao'], ['t1'])], [text('t1', 'Ciao zzzunbekannt.')]);
  const { fehler } = pruefeLektionen(k);
  assert.ok(fehler.some((f) => f.includes('zzzunbekannt')), fehler.join('\n'));
});

test('Text in zwei Lektionen wird gemeldet', () => {
  const k = mitBeispiel(
    [lektion('l01', 1, ['ciao'], ['t1']), lektion('l02', 2, ['grazie'], ['t1'])],
    [text('t1', 'Ciao.')],
  );
  const { fehler } = pruefeLektionen(k);
  assert.ok(fehler.some((f) => f.includes('t1')), fehler.join('\n'));
});

test('Lektionswörter aus mehreren Wörtern machen jedes Teilwort bekannt', () => {
  const k = mitBeispiel([lektion('l01', 1, ['come stai?', 'per favore'], ['t1'])], [text('t1', 'Come stai? Per favore.')]);
  assert.deepStrictEqual(pruefeLektionen(k).fehler, []);
});

test('Artikel in Lektionswörtern gehören zu keiner Lektion', () => {
  const l1 = lektion('l01', 1, ['ciao']);
  l1.kapitel = ['artikel'];                    // enthält „gli amici“
  const k = mitBeispiel([l1, lektion('l02', 2, ['gli ingredienti'])]);
  const { hinweise } = pruefeLektionen(k);
  assert.ok(!hinweise.some((h) => h.includes('„gli“')), hinweise.join('\n'));
});

test('echte Daten', () => {
  const { fehler } = pruefeLektionen(laden());
  assert.deepStrictEqual(fehler, []);
});
