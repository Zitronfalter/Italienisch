// Tests für die Satz-Treppe (saetze.js): Reihenfolge der Lektion, Stufen, Aufgaben, Prüfen.
// Ausführen: node --test werkzeuge/test/saetze.test.js

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const ERSTES = 'salve';

function karte(k, it, kennen) {
  const id = k.wortId(it);
  k.Speicher.daten.karten[id] = { fach: 1, faellig: k.Vokabeln.heute(), richtig: 0, falsch: 0, ...(kennen === undefined ? {} : { kennen }) };
  return id;
}

test('Lektion mit Sätzen: gleiche Wörter, Reihenfolge wie in SAETZE', () => {
  const k = laden();
  const l = k.Lektionen.alle().find((x) => x.id === 'l01c');
  const roh = k.LEKTIONEN.find((x) => x.id === 'l01c');
  const erwartet = k.SAETZE.l01c.map((e) => k.wortId(e.wort));
  assert.deepStrictEqual([...l.wortIds], [...erwartet]);
  assert.deepStrictEqual([...l.wortIds].sort(), [...roh.woerter.map((w) => k.wortId(w))].sort());
});

test('Lektion ohne Sätze bleibt unverändert (l01b)', () => {
  const k = laden();
  const l = k.Lektionen.alle().find((x) => x.id === 'l01b');
  const roh = k.LEKTIONEN.find((x) => x.id === 'l01b');
  assert.strictEqual(k.Saetze.reihenfolge('l01b'), null);
  assert.deepStrictEqual(l.wortIds, roh.woerter.map((w) => k.wortId(w)));
});

test('hat: Wörter mit Sätzen', () => {
  const k = laden();
  assert.strictEqual(k.Saetze.hat(k.wortId(ERSTES)), true);
  assert.strictEqual(k.Saetze.hat(k.wortId('ciao')), false);
});

test('ohne Karte: Stufe 0, Kennenlernen mit dem ersten Satz', () => {
  const k = laden();
  const id = k.wortId(ERSTES);
  assert.strictEqual(k.Saetze.stufe(id), 0);
  const a = k.Saetze.aufgabe(id, 0);
  assert.strictEqual(a.art, 'satz');
  assert.strictEqual(a.modus, 'kennen');
  assert.strictEqual(a.satz.it, k.SAETZE.l01c[0].saetze[0].it);
  assert.ok(a.kacheln.length >= 5);
});

test('Stufe 2 ohne Sprachausgabe: wieder ins Deutsche legen', () => {
  const k = laden();
  const id = karte(k, ERSTES, 2);
  k.Lesen.kannSprechen = false;
  assert.strictEqual(k.Saetze.stufe(id), 2);
  assert.strictEqual(k.Saetze.aufgabe(id, 2).modus, 'de');
  k.Lesen.kannSprechen = true;
  const h = k.Saetze.aufgabe(id, 2);
  assert.strictEqual(h.modus, 'hoeren');
});

test('fertige oder alte Karten: keine Stufe, keine Aufgaben', () => {
  const k = laden();
  const a = karte(k, ERSTES, 4);
  const b = karte(k, 'scusi');
  assert.strictEqual(k.Saetze.stufe(a), null);
  assert.strictEqual(k.Saetze.stufe(b), null);
  assert.strictEqual(k.Saetze.aufgabenFuerJunge([a, b], { maxStufen: 2 }).length, 0);
});

test('zweimal Stufe 1: verschiedene Sätze; alles heute gelöst: trotzdem eine Aufgabe', () => {
  const k = laden();
  const id = karte(k, 'come va?', 1);
  const a = k.Saetze.aufgabe(id, 1);
  const b = k.Saetze.aufgabe(id, 1);
  assert.notStrictEqual(a.satz.it, b.satz.it);
  for (const s of k.SAETZE.l01c[1].saetze) k.Wiederholung.fehlerMerken({ art: 'satz', satz: s }, true);
  for (const s of k.SAETZE.l01c[1].saetze) assert.strictEqual(k.Wiederholung.heuteGeloest({ art: 'satz', satz: s }), true);
  const c = k.Saetze.aufgabe(id, 1);
  assert.ok(c && c.satz.it);
  assert.notStrictEqual(c.satz.it, k.SAETZE.l01c[1].saetze[0].it);
});

test('pruefe Deutsch: Groß/klein egal, Reihenfolge zählt', () => {
  const k = laden();
  const a = k.Saetze.aufgabe(k.wortId(ERSTES), 0);
  assert.strictEqual(a.satz.de, 'Hallo! Ich bin die neue Nachbarin, ich heiße Elena.');
  assert.strictEqual(k.Saetze.pruefe(a, ['hallo', 'ICH', 'bin', 'die', 'neue', 'nachbarin', 'ich', 'heiße', 'elena']), true);
  assert.strictEqual(k.Saetze.pruefe(a, ['Ich', 'Hallo', 'bin', 'die', 'neue', 'Nachbarin', 'ich', 'heiße', 'Elena']), false);
});

test('Hören/Italienisch: Kacheln passen zum Satz, auch mit Apostroph und Gedankenstrich', () => {
  const k = laden();
  const id = karte(k, 'come va?', 2);
  k.Lesen.kannSprechen = true;
  for (let i = 0; i < 10; i++) {
    const a = k.Saetze.aufgabe(id, 2);
    assert.ok(a.kacheln.every((w) => /\p{L}/u.test(w)), a.kacheln.join('|'));
    const eigene = k.Saetze.satzKacheln(a.satz.it);
    assert.strictEqual(k.Saetze.pruefe(a, eigene), true, a.satz.it);
    assert.strictEqual(k.Saetze.pruefe(a, [...eigene].reverse()), false);
  }
});

test('Stufe 3: abwechselnd Lücke und Italienisch, Lücke mit Hinweis', () => {
  const k = laden();
  const id = karte(k, 'il cognome', 3);
  const a = k.Saetze.aufgabe(id, 3);
  const b = k.Saetze.aufgabe(id, 3);
  assert.strictEqual(a.modus, 'luecke');
  assert.strictEqual(b.modus, 'it');
  assert.strictEqual(a.kacheln.length, 0);
  assert.ok(b.kacheln.length > 0);
  assert.strictEqual(a.satz.form.toLowerCase(), 'cognome');
  assert.ok(k.Saetze.lueckenSatz(a).includes('___'));
  assert.ok(!k.Saetze.lueckenSatz(a).toLowerCase().includes('cognome'));
  assert.strictEqual(k.Saetze.hinweis(a), 'der Nachname');
  assert.strictEqual(k.Saetze.pruefe(a, 'cognome'), true);
  assert.strictEqual(k.Saetze.pruefe(a, 'cogome'), true);     // Tippfehler-Nachsicht
  assert.strictEqual(k.Saetze.pruefe(a, 'nome'), false);
});

test('Lücke mit form und Wortfolge', () => {
  const k = laden();
  const f = k.Saetze.fundstelle('Come va? – Bene, grazie, e tu?', 'come va?');
  assert.strictEqual(f.text, 'Come va');
  assert.strictEqual(k.Saetze.fundstelle('Benvenuta, Anna! Come va?', 'benvenuta').text, 'Benvenuta');
  assert.strictEqual(k.Saetze.fundstelle('Scusi, dov’è via Roma?', 'via').text, 'via');
  assert.strictEqual(k.Saetze.fundstelle('Ciao!', 'come'), null);
});

test('Hinweis bei Verben: Grundform', () => {
  const k = laden();
  const a = { art: 'satz', id: k.wortId('essere'), stufe: 3, modus: 'luecke', satz: { it: 'Io sono Anna.', de: 'Ich bin Anna.', form: 'sono' }, kacheln: [] };
  assert.strictEqual(k.Saetze.hinweis(a), 'essere');
  assert.strictEqual(k.Saetze.lueckenSatz(a), 'Io ___ Anna.');
});

test('ohneWertung wird übernommen', () => {
  const k = laden();
  assert.strictEqual(k.Saetze.aufgabe(k.wortId(ERSTES), 0, { ohneWertung: true }).ohneWertung, true);
});

test('kennenGelernt mit Obergrenze', () => {
  const k = laden();
  const a = karte(k, ERSTES, 1);
  k.Vokabeln.kennenGelernt(a, 1);
  assert.strictEqual(k.Speicher.daten.karten[a].kennen, 1);
  const b = karte(k, 'scusi', 3);
  k.Vokabeln.kennenGelernt(b);
  const kb = k.Speicher.daten.karten[b];
  assert.strictEqual(kb.kennen, 4);
  assert.strictEqual(kb.fach, 1);
  const morgen = new Date(k.Vokabeln.heute() + 'T12:00');
  morgen.setDate(morgen.getDate() + 1);
  assert.strictEqual(kb.faellig, morgen.toISOString().slice(0, 10));
});

test('aufgabenFuerJunge: neue Wörter zwei Stufen', () => {
  const k = laden();
  const id = k.wortId(ERSTES);
  const liste = k.Saetze.aufgabenFuerJunge([id], { maxStufen: 2 });
  assert.deepStrictEqual([...liste.map((a) => a.modus)], ['kennen', 'de']);
  assert.notStrictEqual(liste[0].satz.it, liste[1].satz.it);
  const eine = k.Saetze.aufgabenFuerJunge([id, k.wortId('ciao')], { maxStufen: 1 });
  assert.deepStrictEqual([...eine.map((a) => a.modus)], ['kennen']);
});

test('rundenAufgaben: Stufe 0 vorne, Rest hinten, Wörter ohne Sätze und alte fallen weg', () => {
  const k = laden();
  const neu = k.wortId(ERSTES);                 // ohne Karte → Stufe 0 und 1
  const jung = karte(k, 'come va?', 2);         // junge Karte → nur Stufe 2
  const alt = karte(k, 'il cognome', 4);        // fertig → nichts
  const ohne = k.wortId('ciao');                // keine Sätze → nichts
  const r = k.Saetze.rundenAufgaben([{ ids: [neu, ohne], maxStufen: 2 }, { ids: [jung, alt], maxStufen: 1 }]);
  assert.deepStrictEqual([...r.vorne.map((a) => [a.id, a.stufe])], [[neu, 0]]);
  assert.deepStrictEqual([...r.hinten.map((a) => [a.id, a.stufe])].sort(), [[jung, 2], [neu, 1]].sort());
  assert.ok([...r.vorne, ...r.hinten].every((a) => a.art === 'satz' && !a.ohneWertung));
  // Schritte sind reine Daten (werden für „Weitermachen“ gespeichert)
  for (const a of [...r.vorne, ...r.hinten]) {
    const kopie = JSON.parse(JSON.stringify(a));
    assert.strictEqual(JSON.stringify(kopie), JSON.stringify(a));
    assert.strictEqual(kopie.satz.it, a.satz.it);
  }
  const leer = k.Saetze.rundenAufgaben([{ ids: [ohne, alt], maxStufen: 2 }]);
  assert.strictEqual(leer.vorne.length + leer.hinten.length, 0);
});

test('aktualisieren: veraltete Stufe wird ersetzt, fertige Wörter übersprungen, ohneWertung bleibt', () => {
  const k = laden();
  const id = k.wortId(ERSTES);
  const [null0, eins] = k.Saetze.aufgabenFuerJunge([id], { maxStufen: 2 });
  assert.strictEqual(k.Saetze.aktualisieren(null0), null0);       // ohne Karte: Stufe 0 passt
  karte(k, ERSTES, 0);                                             // Stufe 0 danebengegangen
  const ersatz = k.Saetze.aktualisieren(eins);
  assert.strictEqual(ersatz.stufe, 0);
  assert.strictEqual(ersatz.modus, 'kennen');
  k.Speicher.daten.karten[id].kennen = 1;
  assert.strictEqual(k.Saetze.aktualisieren(eins), eins);
  k.Speicher.daten.karten[id].kennen = 4;
  assert.strictEqual(k.Saetze.aktualisieren(eins), null);
  const frei = k.Saetze.aufgabe(id, 2, { ohneWertung: true });
  assert.strictEqual(k.Saetze.aktualisieren(frei), frei);
});

test('stufeGeschafft: nur richtig, passende Stufe und mit Wertung', () => {
  const k = laden();
  const id = karte(k, ERSTES, 1);
  const a = k.Saetze.aufgabe(id, 1);
  assert.strictEqual(k.Saetze.stufeGeschafft(a, false), false);
  assert.strictEqual(k.Saetze.stufeGeschafft(a, true, true), false);                       // Runde ohne Wertung
  assert.strictEqual(k.Saetze.stufeGeschafft(k.Saetze.aufgabe(id, 1, { ohneWertung: true }), true), false);
  assert.strictEqual(k.Speicher.daten.karten[id].kennen, 1);
  assert.strictEqual(k.Saetze.stufeGeschafft(a, true), true);
  assert.strictEqual(k.Speicher.daten.karten[id].kennen, 2);
  assert.strictEqual(k.Saetze.stufeGeschafft(a, true), false);     // dieselbe Stufe zählt nicht zweimal
  assert.strictEqual(k.Speicher.daten.karten[id].kennen, 2);
});

test('pruefeLuecke: fast richtig mit Hinweis, pruefe bleibt true/false', () => {
  const k = laden();
  const a = { art: 'satz', id: k.wortId('essere'), stufe: 3, modus: 'luecke', satz: { it: 'Lui è Marco.', de: 'Er ist Marco.', form: 'è' }, kacheln: [] };
  assert.strictEqual(k.Saetze.pruefeLuecke(a, 'è').stufe, 'richtig');
  const fast = k.Saetze.pruefeLuecke(a, 'e');
  assert.strictEqual(fast.stufe, 'fast');
  assert.ok(fast.hinweis);
  assert.strictEqual(k.Saetze.pruefe(a, 'e'), true);
  assert.strictEqual(k.Saetze.pruefe(a, 'sono'), false);
});

test('Hinweis: Nomen auf -are/-ere verraten nichts, reflexive Verben in Grundform', () => {
  const k = laden();
  const luecke = (it, form) => ({ art: 'satz', id: k.wortId(it), stufe: 3, modus: 'luecke', satz: { it: 'x', de: 'x', form }, kacheln: [] });
  assert.strictEqual(k.Saetze.hinweis(luecke('il mare', 'mare')), 'das Meer');
  assert.strictEqual(k.Saetze.hinweis(luecke('allenarsi', 'mi alleno')), 'allenarsi');
  assert.strictEqual(k.Saetze.hinweis(luecke('vestirsi', 'mi vesto')), 'vestirsi');
});
