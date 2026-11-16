// Tests für den Vokabelkasten: Übernahme der Duolingo-Wörter, „lange nicht gesehen“, Fächer.
// Ausführen: node --test werkzeuge/test/kasten.test.js

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const duolingoKarten = (k) => Object.values(k.Speicher.daten.karten).filter((x) => x.quelle === 'duolingo');

test('duolingoUebernehmen legt Karten in Fach 3 an', () => {
  const k = laden();
  const n = k.Vokabeln.duolingoUebernehmen();
  assert.ok(n > 500, String(n));
  const karte = k.Speicher.daten.karten[k.wortId('il caffè')];
  assert.strictEqual(karte.fach, 3);
  assert.strictEqual(karte.quelle, 'duolingo');
  assert.ok(!('kennen' in karte));
  assert.strictEqual(k.Speicher.daten.duolingo.anzahl, n);
});

test('höchstens 20 pro Tag fällig, die ersten ab morgen', () => {
  const k = laden();
  k.Vokabeln.duolingoUebernehmen();
  const proTag = {};
  for (const x of duolingoKarten(k)) proTag[x.faellig] = (proTag[x.faellig] || 0) + 1;
  assert.ok(Math.max(...Object.values(proTag)) <= 20);
  assert.strictEqual(Object.keys(proTag).sort()[0], k.Vokabeln.inTagen(1));
});

test('frühe Lektionen zuerst fällig', () => {
  const k = laden();
  k.Vokabeln.duolingoUebernehmen();
  const karten = k.Speicher.daten.karten;
  assert.ok(karten[k.wortId('ciao')].faellig <= karten[k.wortId('il caffè')].faellig);
});

test('vorhandene Karten bleiben unverändert', () => {
  const k = laden();
  const id = k.wortId('il caffè');
  const vorher = { fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 2, kennen: 1 };
  k.Speicher.daten.karten[id] = { ...vorher };
  k.Vokabeln.duolingoUebernehmen();
  assert.deepStrictEqual({ ...k.Speicher.daten.karten[id] }, vorher);
});

test('Übernahme läuft nur einmal', () => {
  const k = laden();
  assert.ok(k.Vokabeln.duolingoUebernehmen() > 0);
  assert.strictEqual(k.Vokabeln.duolingoUebernehmen(), 0);
});

// 10 Karten mit zuletzt = Tag 1 … 10, eine ohne zuletzt
function kartenMitDatum(k) {
  const ids = k.WORTSCHATZ.slice(0, 11).map((w) => w.id);
  ids.forEach((id, i) => {
    k.Speicher.daten.karten[id] = { fach: 2, faellig: '2099-01-01', richtig: 1, falsch: 0 };
    if (i > 0) k.Speicher.daten.karten[id].zuletzt = `2026-01-${String(i).padStart(2, '0')}`;
  });
  return ids;
}

test('langeNichtGesehen bevorzugt alte (ohne Datum zählt als ältestes)', () => {
  const k = laden();
  const ids = kartenMitDatum(k);
  const aelteste = new Set(ids.slice(0, 3));
  for (let i = 0; i < 50; i++) {
    const [x] = k.Vokabeln.langeNichtGesehen(ids, 1);
    assert.ok(aelteste.has(x), x);
  }
});

test('langeNichtGesehen gibt höchstens n zurück, ohne doppelte', () => {
  const k = laden();
  const ids = kartenMitDatum(k);
  const r = k.Vokabeln.langeNichtGesehen(ids, 4);
  assert.strictEqual(r.length, 4);
  assert.strictEqual(new Set(r).size, 4);
  assert.deepStrictEqual([...k.Vokabeln.langeNichtGesehen([], 3)], []);
});

test('gesehen setzt zuletzt, nicht das Fach', () => {
  const k = laden();
  const id = k.wortId('ciao');
  k.Speicher.daten.karten[id] = { fach: 4, faellig: '2099-01-01', richtig: 3, falsch: 0 };
  k.Vokabeln.gesehen(id);
  assert.strictEqual(k.Speicher.daten.karten[id].zuletzt, k.Vokabeln.heute());
  assert.strictEqual(k.Speicher.daten.karten[id].fach, 4);
  k.Vokabeln.gesehen('gibt-es-nicht');           // ohne Karte: nichts passiert
  assert.ok(!k.Speicher.daten.karten['gibt-es-nicht']);
});

test('fachUebersicht: 5 Fächer, junge Wörter zählen nicht', () => {
  const k = laden();
  k.Vokabeln.duolingoUebernehmen();
  k.Speicher.daten.karten[k.wortId('il bancone')] = { fach: 1, faellig: k.Vokabeln.heute(), richtig: 0, falsch: 0, kennen: 1 };
  const u = k.Vokabeln.fachUebersicht();
  assert.deepStrictEqual([...u.map((x) => x.fach)], [1, 2, 3, 4, 5]);
  const summe = u.reduce((s, x) => s + x.anzahl, 0);
  assert.strictEqual(summe, k.Speicher.daten.duolingo.anzahl);
  assert.strictEqual(k.Vokabeln.fachIds(3).length, u[2].anzahl);
  assert.strictEqual(u[2].faellig, 0);           // Duolingo-Wörter erst ab morgen fällig
});

// ---------- Übungen nehmen lange nicht gesehene Wörter ----------

test('Wortpaare nehmen lange nicht gesehene Wörter', () => {
  for (let lauf = 0; lauf < 20; lauf++) {
    const k = laden();
    const heute = k.Vokabeln.heute();
    const ids = [...new Set(k.WORTSCHATZ.filter((w) => w.stufe === 'A1').map((w) => w.id))].slice(0, 30);
    const alt = new Set(ids.slice(0, 5));
    for (const id of ids) {
      k.Speicher.daten.karten[id] = { fach: 2, faellig: '2099-01-01', richtig: 1, falsch: 0 };
      if (!alt.has(id)) k.Speicher.daten.karten[id].zuletzt = heute;
    }
    const p = k.Uebungen.paare(5);
    const ausAlt = p.filter((x) => alt.has(x.id)).length;
    assert.ok(ausAlt >= 3, `nur ${ausAlt} alte Wörter in den Paaren`);
  }
});

test('wortBekannt: einzelne Wörter aus der Duolingo-Liste', () => {
  const { SchonBekannt } = laden();
  for (const w of ['caffè', 'grazie', 'mille', 'stazione']) assert.strictEqual(SchonBekannt.wortBekannt(w), true, w);
  for (const w of ['bancone', 'cannuccia']) assert.strictEqual(SchonBekannt.wortBekannt(w), false, w);
});

test('Hören erlaubt Sätze mit bekannten Duolingo-Wörtern', () => {
  const mit = laden();
  const ohne = laden(undefined, 'SchonBekannt.wortBekannt = () => false;');
  const n = (k) => k.Uebungen.frischeSaetze({ lektion: k.Lektionen.alle()[0] }).length;
  assert.ok(n(mit) > n(ohne), `${n(mit)} > ${n(ohne)}`);
});

test('Erzeuger: „un/una“-Aufgabe klappt, auch wenn die ältesten Wörter Mehrzahl sind', () => {
  const k = laden();
  const heute = k.Vokabeln.heute();
  for (const w of k.WORTSCHATZ) {
    const mehrzahl = /^(i|gli|le) /.test(w.it);
    const einzahl = /^(il|lo|la) /.test(w.it);
    if (!mehrzahl && !einzahl) continue;
    k.Speicher.daten.karten[w.id] = { fach: 2, faellig: '2099-01-01', richtig: 1, falsch: 0 };
    if (einzahl) k.Speicher.daten.karten[w.id].zuletzt = heute;     // Mehrzahl = am längsten nicht gesehen
  }
  for (let i = 0; i < 30; i++) {
    const a = k.Erzeuger.aufgabe('essere-un');
    assert.ok(a && a.loesung, JSON.stringify(a));
  }
});

test('Erzeuger: benutztes Nomen gilt als gesehen', () => {
  const k = laden();
  const ids = [...new Set(k.WORTSCHATZ.filter((w) => /^(il|la) /.test(w.it)).map((w) => w.id))].slice(0, 12);
  for (const id of ids) k.Speicher.daten.karten[id] = { fach: 2, faellig: '2099-01-01', richtig: 1, falsch: 0 };
  k.Erzeuger.aufgabe('artikel');
  const gesehen = ids.filter((id) => k.Speicher.daten.karten[id].zuletzt === k.Vokabeln.heute());
  assert.strictEqual(gesehen.length, 1);
});
