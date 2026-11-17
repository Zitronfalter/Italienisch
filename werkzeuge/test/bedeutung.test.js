// Tests: mehrere Übersetzungen – Wörter mit gleicher deutscher Bedeutung gelten auch (vokabeln.js).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden();
const V = k.Vokabeln;
const wort = (it) => V.wort(k.wortId(it));

test('gleicheBedeutung: gleich, nur im Kern gleich, verschieden', () => {
  assert.strictEqual(V.gleicheBedeutung(wort('ciao'), wort('salve')), 'voll');          // „hallo“
  assert.strictEqual(V.gleicheBedeutung(wort('la strada'), wort('la via')), 'kern');    // „die Straße“ / „(in der Adresse)“
  assert.strictEqual(V.gleicheBedeutung(wort('il gelato'), wort('il ghiaccio')), 'kern');
  assert.strictEqual(V.gleicheBedeutung(wort('ciao'), wort('la strada')), null);
});

test('pruefeUebersetzung: anderes Wort mit gleicher Bedeutung zählt als richtig', () => {
  const r = V.pruefeUebersetzung('salve', wort('ciao'));
  assert.strictEqual(r.stufe, 'richtig');
  assert.strictEqual(r.auch, 'salve');
});

test('pruefeUebersetzung: das gesuchte Wort selbst ist einfach richtig', () => {
  const r = V.pruefeUebersetzung('ciao', wort('ciao'));
  assert.strictEqual(r.stufe, 'richtig');
  assert.ok(!r.auch);
});

test('pruefeUebersetzung: gleiche Bedeutung, aber anderer Hinweis → noch einmal versuchen', () => {
  const r = V.pruefeUebersetzung('strada', wort('la via'));
  assert.strictEqual(r.stufe, 'andere');
  assert.strictEqual(r.wort, 'la strada');
  assert.strictEqual(r.tipp, 'in der Adresse');
});

test('pruefeUebersetzung: Frage ohne Hinweis → Wort mit Hinweis gilt auch', () => {
  const r = V.pruefeUebersetzung('la via', wort('la strada'));
  assert.strictEqual(r.stufe, 'richtig');
  assert.strictEqual(r.auch, 'la via');
});

test('pruefeUebersetzung: das Eis (zum Essen) → ghiaccio noch einmal versuchen', () => {
  const r = V.pruefeUebersetzung('il ghiaccio', wort('il gelato'));
  assert.strictEqual(r.stufe, 'andere');
  assert.strictEqual(r.tipp, 'zum Essen');
});

test('pruefeUebersetzung: andere Bedeutung bleibt falsch', () => {
  assert.strictEqual(V.pruefeUebersetzung('il ponte', wort('la via')).stufe, 'falsch');
});

test('mehrdeutig: Wörter mit gleicher Bedeutung werden erkannt (für Wählen und Wortpaare)', () => {
  assert.strictEqual(V.mehrdeutig(wort('la strada'), [wort('il ponte'), wort('la via')]), true);
  assert.strictEqual(V.mehrdeutig(wort('la strada'), [wort('il ponte'), wort('ciao')]), false);
});
