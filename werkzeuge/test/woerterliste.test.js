// Tests für „Meine Wörter“ (woerterliste.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden, STANDARD } = require('./laden');

const BEISPIEL = [
  { id: 'l01', nr: 1, titel: 'Eins', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['ciao', 'grazie'], kapitel: [], texte: [] },
  { id: 'r01', nr: 1.5, titel: 'Wiederholung', situation: '', stufe: 'A1', art: 'ripasso',
    woerter: [], lektionen: ['l01'], kapitel: [], texte: [] },
  { id: 'l02', nr: 2, titel: 'Zwei', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['grazie', 'uno'], kapitel: [], texte: [] },
];

function frisch() {
  return laden(STANDARD,
    `LEKTIONEN = ${JSON.stringify(BEISPIEL)}; globalThis.Woerterliste = Woerterliste;`);
}

const id = (k, it) => k.wortId(it);
const karte = (fach, extra = {}) => ({ fach, faellig: '2026-01-01', richtig: 0, falsch: 0, ...extra });

test('stand: keine Karte, jung, Fach 1, Fach 4', () => {
  const k = frisch();
  const karten = k.Speicher.daten.karten;
  assert.strictEqual(k.Woerterliste.stand(id(k, 'ciao')), 'nichtDran');
  karten[id(k, 'ciao')] = karte(1, { kennen: 2 });
  assert.strictEqual(k.Woerterliste.stand(id(k, 'ciao')), 'kennenlernen');
  karten[id(k, 'ciao')] = karte(1, { kennen: 4 });
  assert.strictEqual(k.Woerterliste.stand(id(k, 'ciao')), 'uebt');
  karten[id(k, 'ciao')] = karte(1);           // „kenne ich“ ohne kennen
  assert.strictEqual(k.Woerterliste.stand(id(k, 'ciao')), 'uebt');
  karten[id(k, 'ciao')] = karte(4);
  assert.strictEqual(k.Woerterliste.stand(id(k, 'ciao')), 'sitzt');
});

test('gruppen: Lektionen ohne Wiederholung, Titel mit Nummer, jedes Wort einmal', () => {
  const k = frisch();
  const g = k.Woerterliste.gruppen();
  assert.strictEqual(g[0].titel, 'Lektion 1 · Eins');
  assert.strictEqual(g[1].titel, 'Lektion 2 · Zwei');
  assert.deepStrictEqual([...g[0].woerter.map((w) => w.it)], ['ciao', 'grazie']);
  assert.deepStrictEqual([...g[1].woerter.map((w) => w.it)], ['uno']);   // grazie steht schon in Lektion 1
  assert.ok(!g.some((x) => x.titel.includes('Wiederholung')));
  const alleIds = g.flatMap((x) => x.woerter.map((w) => w.id));
  assert.strictEqual(new Set(alleIds).size, alleIds.length);
});

test('gruppen: Wörter ohne Lektion unter „Weitere Wörter“', () => {
  const k = frisch();
  const weitere = k.Woerterliste.gruppen().find((x) => x.titel === 'Weitere Wörter');
  assert.ok(weitere);
  const verschiedene = new Set(k.WORTSCHATZ.map((w) => w.id)).size;
  assert.strictEqual(weitere.woerter.length, verschiedene - 3);
});

test('gruppen: eigene Wörter am Ende', () => {
  const k = frisch();
  k.Speicher.daten.eigeneWoerter = { 'e-1': { it: 'la cipolla', de: 'die Zwiebel' } };
  const g = k.Woerterliste.gruppen();
  const letzte = g[g.length - 1];
  assert.strictEqual(letzte.titel, 'Eigene Wörter');
  assert.deepStrictEqual(JSON.parse(JSON.stringify(letzte.woerter.map((w) => [w.id, w.it, w.de, w.stand]))),
    [['e-1', 'la cipolla', 'die Zwiebel', 'nichtDran']]);
});

test('gruppen: aktuelle Lektion ist markiert', () => {
  const k = frisch();
  const g = k.Woerterliste.gruppen();
  assert.strictEqual(g[0].aktuell, true);
  assert.strictEqual(g[1].aktuell, false);
});

test('zaehlen: Summe = alle Wörter in den Gruppen', () => {
  const k = frisch();
  k.Speicher.daten.karten[id(k, 'ciao')] = karte(5);
  k.Speicher.daten.karten[id(k, 'uno')] = karte(2);
  const z = k.Woerterliste.zaehlen();
  const gesamt = k.Woerterliste.gruppen().reduce((s, x) => s + x.woerter.length, 0);
  assert.strictEqual(z.sitzt, 1);
  assert.strictEqual(z.uebt, 1);
  assert.strictEqual(z.sitzt + z.uebt + z.kennenlernen + z.nichtDran, gesamt);
});
