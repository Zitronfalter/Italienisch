// Tests: falsche Übungen kommen wieder (wiederholung.js), Trefferquote passt neue Wörter an (vokabeln.js).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

test('falsche Übung kommt ab dem nächsten Tag wieder, richtige fällt weg', () => {
  const k = laden();
  const W = k.Wiederholung;
  const a = { art: 'grammatik', kapitel: 'artikel', nr: 2 };
  W.fehlerMerken(a, false);
  assert.strictEqual(W.anzahlFehler(), 1);
  assert.strictEqual(W.faelligeFehler().length, 0);          // heute noch nicht
  assert.strictEqual(W.etwasFaellig(), false);

  k.Speicher.daten.fortschritt.fehler[0].datum = '2000-01-01';
  const f = W.faelligeFehler();
  assert.strictEqual(f.length, 1);
  assert.strictEqual(f[0].kapitel, 'artikel');
  assert.strictEqual(f[0].nr, 2);
  assert.ok(f[0].ausFehler);
  assert.strictEqual(W.etwasFaellig(), true);
  assert.ok(W.rundeAufgaben().some((x) => x.ausFehler));

  W.fehlerMerken(a, true);
  assert.strictEqual(W.anzahlFehler(), 0);
});

test('Hör-Sätze und erzeugte Übungen werden auch gemerkt, Vokabeln nicht', () => {
  const k = laden();
  const W = k.Wiederholung;
  W.fehlerMerken({ art: 'hoeren', satz: { it: 'Vado a casa', de: 'Ich gehe nach Hause' } }, false);
  W.fehlerMerken({ art: 'grammatik', kapitel: 'futuro', uebung: { art: 'luecke', satz: 'noi ___ (andare)', loesung: 'andremo' } }, false);
  W.fehlerMerken({ art: 'deutsch', id: 'casa' }, false);
  assert.strictEqual(W.anzahlFehler(), 2);
  W.fehlerMerken({ art: 'hoeren', satz: { it: 'Vado a casa' } }, false);   // derselbe Satz nur einmal
  assert.strictEqual(W.anzahlFehler(), 2);
});

test('Trefferquote: erst ab 20 Antworten, dann weniger neue Wörter', () => {
  const k = laden();
  const V = k.Vokabeln;
  for (let i = 0; i < 10; i++) V.ergebnisZaehlen(false);
  assert.strictEqual(V.trefferQuote(), null);
  assert.strictEqual(V.neuGrenze(), 3);

  for (let i = 0; i < 15; i++) V.ergebnisZaehlen(true);          // 15 von 25 = 60 %
  assert.ok(Math.abs(V.trefferQuote() - 0.6) < 1e-9);
  assert.strictEqual(V.neuGrenze(), 1);
  assert.strictEqual(V.rundeZusammenstellen().neu.length, 1);

  for (let i = 0; i < 30; i++) V.ergebnisZaehlen(false);         // 15 von 55
  assert.strictEqual(V.neuGrenze(), 0);
  assert.strictEqual(V.rundeZusammenstellen().pause, 'schwer');

  for (let i = 0; i < 200; i++) V.ergebnisZaehlen(true);         // gut gelaufen
  assert.strictEqual(V.neuGrenze(), 3);
});

test('alte Tage zählen nicht mehr', () => {
  const k = laden();
  k.Speicher.daten.fortschritt.tage = { '2000-01-01': [0, 100] };
  assert.strictEqual(k.Vokabeln.trefferQuote(), null);
});
