// Tests für Etappe 2 „Lektion als Weg“: kein Tageslimit mehr, Festigen-Runde bei schwerer Lage,
// Limos Vorschlag danach (Grammatik → Hören → Vokabeln).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

// richtig von n Antworten zählen
function antworten(k, richtig, falsch) {
  for (let i = 0; i < richtig; i++) k.Vokabeln.ergebnisZaehlen(true);
  for (let i = 0; i < falsch; i++) k.Vokabeln.ergebnisZaehlen(false);
}

test('festigenNoetig: unter 20 Antworten nie', () => {
  const k = laden();
  antworten(k, 0, 10);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l01', 0), false);
});

test('festigenNoetig: unter 55 % ja, ab 55 % nein', () => {
  const k = laden();
  antworten(k, 10, 20);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l01', 0), true);
  antworten(k, 200, 0);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l01', 0), false);
});

test('festigen nur einmal je Schritt', () => {
  const k = laden();
  antworten(k, 10, 20);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l01', 0), true);
  k.Vokabeln.festigenGemacht('l01', 0);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l01', 0), false);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l01', 3), true);
  assert.strictEqual(k.Vokabeln.festigenNoetig('l02', 0), true);
});

test('schwersteWoerter: Fach 1 mit Fehlern zuerst, dann junge, dann der Rest', () => {
  const k = laden();
  const [a, b, c] = k.WORTSCHATZ.slice(0, 3).map((w) => w.id);
  const h = k.Vokabeln.heute();
  k.Speicher.daten.karten[a] = { fach: 3, faellig: h, richtig: 2, falsch: 0 };
  k.Speicher.daten.karten[b] = { fach: 1, faellig: h, richtig: 0, falsch: 2 };
  k.Speicher.daten.karten[c] = { fach: 1, faellig: h, richtig: 0, falsch: 0, kennen: 1 };
  assert.deepStrictEqual([...k.Vokabeln.schwersteWoerter(7)], [b, c, a]);
  assert.deepStrictEqual([...k.Vokabeln.schwersteWoerter(2)], [b, c]);
});

test('schwersteWoerter leer ohne Karten', () => {
  const k = laden();
  assert.deepStrictEqual([...k.Vokabeln.schwersteWoerter(7)], []);
});

test('ohne Tageslimit: keine Pause, höchstens 3 neue pro Runde', () => {
  const k = laden();
  const r = k.Vokabeln.rundeZusammenstellen();
  assert.ok(!('pause' in r));
  assert.ok(r.neu.length <= 3);
  assert.strictEqual(typeof k.Vokabeln.neuProTag, 'undefined');
  assert.strictEqual(typeof k.Vokabeln.mehrHolen, 'undefined');
});

test('festigenAufgaben: junge Wörter werden nicht geschrieben', () => {
  const k = laden();
  const h = k.Vokabeln.heute();
  const ohneSatz = k.WORTSCHATZ.map((w) => w.id).find((id) => !k.Saetze.hat(id));
  const mitSatz = k.wortId(k.SAETZE.l01c[0].wort);
  const alt = k.WORTSCHATZ.map((w) => w.id).filter((id) => !k.Saetze.hat(id) && id !== ohneSatz).slice(0, 2);
  k.Speicher.daten.karten[ohneSatz] = { fach: 1, faellig: h, richtig: 0, falsch: 0, kennen: 0 };
  k.Speicher.daten.karten[mitSatz] = { fach: 1, faellig: h, richtig: 0, falsch: 0, kennen: 0 };
  for (const id of alt) k.Speicher.daten.karten[id] = { fach: 1, faellig: h, richtig: 0, falsch: 2 };
  const liste = k.Saetze.festigenAufgaben([ohneSatz, mitSatz, ...alt]);
  assert.strictEqual(liste.length, 4);
  assert.ok(liste.every((a) => a.ohneWertung));
  assert.strictEqual(liste[0].art, 'waehlen');
  assert.strictEqual(liste[1].art, 'satz');
  assert.strictEqual(liste[1].modus, 'de');
  assert.deepStrictEqual(liste.slice(2).map((a) => a.art), ['deutsch', 'frage']);
});

test('Vorschlag reihum Grammatik, Hören, Vokabeln', () => {
  const k = laden();
  k.Wiederholung.fehlerMerken({ art: 'grammatik', kapitel: 'artikel', nr: 0 }, false);
  const W = k.Wiederholung;
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'kapitel', kapitel: 'artikel' });
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'hoeren' });
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'woerter' });
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'kapitel', kapitel: 'artikel' });
});

test('Vorschlag ohne Grammatik-Stand überspringt Grammatik', () => {
  const k = laden();
  const W = k.Wiederholung;
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'hoeren' });
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'woerter' });
  assert.deepStrictEqual({ ...W.festigenVorschlag() }, { art: 'hoeren' });
});

test('Vorschlag nimmt sonst das zuletzt geübte Kapitel', () => {
  const k = laden();
  k.Speicher.daten.fortschritt.grammatik = {
    artikel: { geuebt: true, datum: '2026-11-01' },
    'verben-are': { geuebt: true, datum: '2026-11-10' },
    'essere-un': { geuebt: false, datum: '2026-11-12' },
  };
  assert.deepStrictEqual({ ...k.Wiederholung.festigenVorschlag() }, { art: 'kapitel', kapitel: 'verben-are' });
});
