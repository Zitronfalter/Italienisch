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

// ---------- Hören nach Lektion ----------

const BEISPIEL = [
  { id: 'l01', nr: 1, titel: 'Eins', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['ciao', 'grazie', 'buongiorno', 'prego'], kapitel: ['essere-un'], texte: ['ciao'] },
  { id: 'l02', nr: 2, titel: 'Zwei', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['il caffè'], kapitel: ['artikel'], texte: ['al-bar'] },
];
const mitLektionen = () => laden(undefined, `LEKTIONEN = ${JSON.stringify(BEISPIEL)};`);
const satzAufgaben = (aufgaben) => aufgaben.filter((a) => a.satz).map((a) => a.satz);

test('saetze merken ihre Herkunft', () => {
  const k = laden();
  const s = k.Uebungen.saetze();
  assert.ok(s.some((x) => x.kapitel === 'artikel'));
  assert.ok(s.some((x) => x.text === 'al-bar'));
  assert.ok(s.every((x) => x.kapitel || x.text));
});

test('runde mit Lektion: nur Sätze aus dieser und früheren Lektionen', () => {
  const k = mitLektionen();
  const l1 = k.Lektionen.finde('l01');
  for (let i = 0; i < 10; i++) {
    for (const s of satzAufgaben(k.Uebungen.runde({ lektion: l1 }))) {
      assert.ok(s.kapitel === 'essere-un' || s.text === 'ciao', JSON.stringify(s));
    }
  }
});

test('runde mit Lektion: Wortpaare aus den Lektionswörtern', () => {
  const k = mitLektionen();
  const l1 = k.Lektionen.finde('l01');
  const paare = k.Uebungen.runde({ lektion: l1 }).find((a) => a.art === 'paare').paare;
  assert.ok(paare.every((p) => l1.wortIds.includes(p.id)), JSON.stringify(paare));
});

test('gelöste Sätze kommen nicht wieder, solange es ungelöste gibt', () => {
  const k = mitLektionen();
  const l2 = k.Lektionen.finde('l02');
  const alle = k.Uebungen.saetze().filter((s) => ['essere-un', 'artikel'].includes(s.kapitel) || ['ciao', 'al-bar'].includes(s.text));
  const geloest = alle.slice(0, alle.length - 4);
  for (const s of geloest) k.Uebungen.satzGeloest(s);
  for (let i = 0; i < 10; i++) {
    for (const s of satzAufgaben(k.Uebungen.runde({ lektion: l2 }))) {
      assert.ok(!geloest.some((g) => g.it === s.it), s.it);
    }
  }
});

test('zu wenige ungelöste Sätze: Runde wird aufgefüllt', () => {
  const k = mitLektionen();
  const l1 = k.Lektionen.finde('l01');
  for (const s of k.Uebungen.saetze()) k.Uebungen.satzGeloest(s);
  assert.strictEqual(satzAufgaben(k.Uebungen.runde({ lektion: l1 })).length, 4);
});

test('satzGeloest merkt den Satz nur einmal', () => {
  const k = laden();
  const s = k.Uebungen.saetze()[0];
  k.Uebungen.satzGeloest(s);
  k.Uebungen.satzGeloest(s);
  assert.strictEqual(k.Speicher.daten.fortschritt.hoeren.geloest.length, 1);
});
