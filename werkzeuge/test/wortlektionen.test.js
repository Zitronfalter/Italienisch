// Tests für die kurzen Wort-Lektionen (lektionen-a1.js, lektionen.js).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const lek = (k, id) => k.Lektionen.finde(id);

test('Wort-Lektionen stehen hinter ihrer Lektion und werden fortlaufend gezählt', () => {
  const k = laden();
  const ids = k.LEKTIONEN.map((l) => l.id);
  assert.deepStrictEqual([...ids.slice(0, 5)], ['l01', 'l01a', 'l01b', 'l01c', 'l02']);
  assert.strictEqual(k.Lektionen.anzeigeNr(lek(k, 'l01')), 1);
  assert.strictEqual(k.Lektionen.anzeigeNr(lek(k, 'l01c')), 4);
  assert.strictEqual(k.Lektionen.anzeigeNr(lek(k, 'l02')), 5);
  // Reihenfolge nach nr stimmt mit der Liste überein
  const nr = k.LEKTIONEN.map((l) => l.nr);
  assert.deepStrictEqual([...nr], [...nr].sort((a, b) => a - b));
});

test('Wiederholungen umfassen auch die Wort-Lektionen', () => {
  const k = laden();
  const r1 = k.LEKTIONEN.find((l) => l.id === 'r1');
  for (const id of ['l01a', 'l02b', 'l04c']) assert.ok(r1.lektionen.includes(id), id);
});

test('Teile einer Wort-Lektion: Wörter, Text, Hören, Übungen', () => {
  const k = laden();
  assert.deepStrictEqual(Object.keys(k.Lektionen.teile(lek(k, 'l01a'))), ['woerter', 'text', 'hoeren', 'uebungen']);
});

test('Übungen kommen erst, wenn die Wörter gelernt sind', () => {
  const k = laden();
  const l = lek(k, 'l01a');
  k.Speicher.daten.fortschritt.lektionen = { l01: { erledigt: '2026-11-01' }, l01a: { begonnen: '2026-11-02', woerterGeprueft: true } };
  k.Speicher.daten.fortschritt.texte = { 'a1-numeri': { verstanden: true, richtig: 3, von: 3 } };
  k.Lektionen.hoerenSpeichern('l01a', 5, 5);
  assert.strictEqual(k.Lektionen.naechsterTeil(), null);          // Wörter noch nicht gelernt
  for (const id of l.wortIds) k.Speicher.daten.karten[id] = { fach: 2, faellig: '2999-01-01', richtig: 1, falsch: 0 };
  const t = k.Lektionen.naechsterTeil();
  assert.strictEqual(t.art, 'uebungen');
  assert.strictEqual(t.lektion.id, 'l01a');
  k.Lektionen.ripassoSpeichern('l01a', 9, 10);
  assert.strictEqual(k.Lektionen.teile(l).uebungen, 'fertig');
  assert.deepStrictEqual([...k.Lektionen.aktualisieren().map((x) => x.id)], ['l01a']);
});

test('gemischte Übungen einer Wort-Lektion: Wörter und Grammatik der Lektion davor', () => {
  const k = laden();
  const l = lek(k, 'l02a');
  const liste = k.Lektionen.aufgabenFuer(l, 10);
  assert.strictEqual(liste.length, 10);
  assert.ok(liste.some((a) => a.art === 'deutsch' && l.wortIds.includes(a.id)));
  assert.ok(liste.some((a) => a.art === 'grammatik' && a.kapitel === 'artikel'));
});
