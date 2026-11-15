// Tests für die Zusatzübungen (zusatz.js, grammatik.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('jedes Kapitel hat Zusatzübungen mit Tipp', () => {
  const k = laden();
  const ohne = k.KAPITEL.filter((x) => !k.Grammatik.hatZusatz(x.id) || !(x.zusatz.tipp || []).length).map((x) => x.id);
  assert.deepStrictEqual([...ohne], []);
  for (const x of k.KAPITEL) assert.ok(x.zusatz.uebungen.length >= 6, x.id);
});

test('ZUSATZ verweist nur auf vorhandene Kapitel', () => {
  const k = laden();
  const fehlt = Object.keys(k.ZUSATZ).filter((id) => !k.Grammatik.kapitel(id));
  assert.deepStrictEqual(fehlt, []);
});

test('Zusatzübungen sind richtig aufgebaut', () => {
  const k = laden();
  for (const x of k.KAPITEL) {
    for (const u of x.zusatz.uebungen) {
      const wo = `${x.id}: ${u.de}`;
      assert.ok(u.de, wo);
      if (u.art === 'wahl') {
        assert.ok(u.satz.includes('___'), wo);
        assert.ok(u.optionen.length >= 2, wo);
        assert.strictEqual(new Set(u.optionen).size, u.optionen.length, wo);
      } else if (u.art === 'luecke') {
        assert.ok(u.satz.includes('___') && u.loesung, wo);
      } else {
        assert.strictEqual(u.art, 'kacheln', wo);
        assert.ok(u.it, wo);
      }
    }
  }
});

test('auch die Kapitel-Übungen sind richtig aufgebaut', () => {
  const k = laden();
  for (const x of k.KAPITEL) {
    assert.ok(x.uebungen.length >= 8, x.id);
    for (const u of x.uebungen) {
      const wo = `${x.id}: ${u.de}`;
      if (u.art === 'luecke') assert.ok(u.satz.includes('___') && u.loesung, wo);
      else assert.ok(u.art === 'kacheln' && u.it, wo);
    }
  }
});

test('pruefeWahl: erste Option ist richtig', () => {
  const k = laden();
  const u = { art: 'wahl', satz: '___ libro', optionen: ['il', 'la'] };
  assert.strictEqual(k.Grammatik.pruefeWahl('il', u).stufe, 'richtig');
  assert.strictEqual(k.Grammatik.pruefeWahl('la', u).stufe, 'falsch');
});

test('zusatzAnbieten: erst bei weniger als 80 %', () => {
  const k = laden();
  assert.strictEqual(k.Grammatik.zusatzAnbieten('artikel'), false);           // noch nicht geübt
  assert.strictEqual(k.Grammatik.zusatzAnbieten('artikel', 6, 8), true);
  assert.strictEqual(k.Grammatik.zusatzAnbieten('artikel', 7, 8), false);
  k.Grammatik.ergebnisSpeichern('artikel', 3, 8);
  assert.strictEqual(k.Grammatik.zusatzAnbieten('artikel'), true);
  k.Grammatik.ergebnisSpeichern('artikel', 8, 8);
  assert.strictEqual(k.Grammatik.zusatzAnbieten('artikel'), false);
});

test('zusatzSpeichern ändert weder geübt noch gelöste Übungen', () => {
  const k = laden();
  k.Grammatik.uebungGeloest('artikel', 2);
  k.Grammatik.zusatzSpeichern('artikel', 6, 6);
  const s = k.Speicher.daten.fortschritt.grammatik.artikel;
  assert.deepStrictEqual([...s.geloest], [2]);
  assert.ok(!s.geuebt);
  assert.strictEqual(s.zusatz.richtig, 6);
});
