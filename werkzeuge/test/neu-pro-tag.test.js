// Tests für „neue Wörter pro Tag“ (vokabeln.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('Standard: höchstens 3 neue Wörter am Tag', () => {
  const k = laden();
  const r = k.Vokabeln.rundeZusammenstellen();
  assert.strictEqual(k.Vokabeln.neuProTag(), 3);
  assert.strictEqual(r.neu.length, 3);
  assert.strictEqual(r.pause, null);
});

test('Einstellung wird beachtet und gezählt', () => {
  const k = laden();
  k.Vokabeln.neuProTagWaehlen(2);
  const r = k.Vokabeln.rundeZusammenstellen();
  assert.strictEqual(r.neu.length, 2);
  for (const id of r.neu) k.Vokabeln.aufnehmen(id, { neu: true });
  assert.strictEqual(k.Vokabeln.neuHeute(), 2);
  const danach = k.Vokabeln.rundeZusammenstellen();
  assert.strictEqual(danach.neu.length, 0);
  assert.strictEqual(danach.pause, 'tag');
});

test('Wörter aus Texten zählen nicht als neue Wörter des Tages', () => {
  const k = laden();
  k.Vokabeln.aufnehmen(k.WORTSCHATZ[500].id);
  assert.strictEqual(k.Vokabeln.neuHeute(), 0);
});

test('Pause, wenn noch viele Wörter kennengelernt werden', () => {
  const k = laden();
  const karten = k.Speicher.daten.karten;
  for (const w of k.WORTSCHATZ.slice(200, 206)) karten[w.id] = { fach: 1, faellig: '2000-01-01', richtig: 0, falsch: 0, kennen: 1 };
  const r = k.Vokabeln.rundeZusammenstellen();
  assert.strictEqual(r.pause, 'jung');
  assert.strictEqual(r.neu.length, 0);
});

test('Pause, wenn viele Wörter fällig sind oder noch nicht sitzen', () => {
  const k = laden();
  const karten = k.Speicher.daten.karten;
  for (const w of k.WORTSCHATZ.slice(200, 216)) karten[w.id] = { fach: 2, faellig: '2000-01-01', richtig: 1, falsch: 0 };
  assert.strictEqual(k.Vokabeln.rundeZusammenstellen().pause, 'faellig');

  const k2 = laden();
  const karten2 = k2.Speicher.daten.karten;
  for (const w of k2.WORTSCHATZ.slice(200, 208)) karten2[w.id] = { fach: 1, faellig: '2999-01-01', richtig: 0, falsch: 2 };
  assert.strictEqual(k2.Vokabeln.rundeZusammenstellen().pause, 'schwer');
});

test('ungültige Einstellung: Standard', () => {
  const k = laden();
  k.Speicher.daten.einstellungen = { neuProTag: 99 };
  assert.strictEqual(k.Vokabeln.neuProTag(), 3);
});
