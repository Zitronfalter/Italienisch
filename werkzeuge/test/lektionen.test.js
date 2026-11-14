// Tests für die Lektions-Logik (lektionen.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const BEISPIEL = [
  { id: 'l01', nr: 1, titel: 'Eins', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['ciao', 'grazie'], kapitel: ['artikel'], texte: ['al-bar'] },
  { id: 'l02', nr: 2, titel: 'Zwei', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['il caffè'], kapitel: ['verben-are'], texte: ['famiglia'] },
  { id: 'l03', nr: 3, titel: 'Drei', situation: '', stufe: 'A1', art: 'lektion',
    woerter: ['uno'], kapitel: [], texte: [] },
];

function frisch(gespeichert) {
  return laden(undefined, `LEKTIONEN = ${JSON.stringify(BEISPIEL)};`,
    { gespeichert: gespeichert === undefined ? undefined : JSON.stringify(gespeichert) });
}

const id = (k, it) => k.wortId(it);
const lek = (k, lid) => k.Lektionen.alle().find((l) => l.id === lid);

// Lektion l01 ganz fertig machen (Wörter bekannt, Kapitel geübt, Text verstanden)
function l01Fertig(k) {
  for (const it of ['ciao', 'grazie']) k.Speicher.daten.karten[id(k, it)] = { fach: 2, faellig: '2026-01-01', richtig: 1, falsch: 0 };
  k.Speicher.daten.fortschritt.grammatik = { artikel: { geuebt: true, richtig: 6, von: 6 } };
  k.Speicher.daten.fortschritt.texte = { 'al-bar': { verstanden: true, richtig: 3, von: 3 } };
}

test('alle: Wort-IDs werden aufgelöst', () => {
  const k = frisch();
  assert.deepStrictEqual([...lek(k, 'l01').wortIds], [id(k, 'ciao'), id(k, 'grazie')]);
});

test('teile: alles offen bei leerem Stand', () => {
  const k = frisch();
  assert.deepStrictEqual({ ...k.Lektionen.teile(lek(k, 'l01')) },
    { woerter: 'offen', grammatik: 'offen', text: 'offen', hoeren: 'offen' });
});

test('teile: Wörter angefangen bei junger Karte, fertig wenn keine jung ist', () => {
  const k = frisch();
  k.Speicher.daten.karten[id(k, 'ciao')] = { fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 0, kennen: 2 };
  assert.strictEqual(k.Lektionen.teile(lek(k, 'l01')).woerter, 'angefangen');
  k.Speicher.daten.karten[id(k, 'ciao')].kennen = 4;
  k.Speicher.daten.karten[id(k, 'grazie')] = { fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 0 };
  assert.strictEqual(k.Lektionen.teile(lek(k, 'l01')).woerter, 'fertig');
});

test('teile: Hören fertig ab 80 %', () => {
  const k = frisch();
  k.Lektionen.hoerenSpeichern('l01', 3, 5);
  assert.strictEqual(k.Lektionen.teile(lek(k, 'l01')).hoeren, 'angefangen');
  k.Lektionen.hoerenSpeichern('l01', 4, 5);
  assert.strictEqual(k.Lektionen.teile(lek(k, 'l01')).hoeren, 'fertig');
  k.Lektionen.hoerenSpeichern('l01', 1, 5);   // schlechteres Ergebnis ändert nichts
  assert.strictEqual(k.Lektionen.teile(lek(k, 'l01')).hoeren, 'fertig');
});

test('aktualisieren markiert und meldet neu erledigte', () => {
  const k = frisch();
  l01Fertig(k);
  k.Lektionen.hoerenSpeichern('l01', 5, 5);
  const neu = k.Lektionen.aktualisieren();
  assert.deepStrictEqual([...neu.map((l) => l.id)], ['l01']);
  assert.ok(k.Lektionen.istErledigt(lek(k, 'l01')));
  assert.deepStrictEqual([...k.Lektionen.aktualisieren()], []);
});

test('aktuelle: erste offene, wenn nichts begonnen ist', () => {
  const k = frisch();
  assert.strictEqual(k.Lektionen.aktuelle().id, 'l01');
});

test('aktuelle: zuletzt begonnene vor erster offener', () => {
  const k = frisch();
  k.Lektionen.beginnen('l02');
  assert.strictEqual(k.Lektionen.aktuelle().id, 'l02');
});

test('aktuelle: null, wenn alle erledigt; naechsterTeil dann null', () => {
  const k = frisch();
  k.Speicher.daten.fortschritt.lektionen = {
    l01: { erledigt: '2026-01-01' }, l02: { erledigt: '2026-01-01' }, l03: { erledigt: '2026-01-01' },
  };
  assert.strictEqual(k.Lektionen.aktuelle(), null);
  assert.strictEqual(k.Lektionen.naechsterTeil(), null);
});

test('woerterEinordnen legt bekannte Karten ohne kennen an', () => {
  const k = frisch();
  k.Lektionen.woerterEinordnen('l01', [id(k, 'ciao')]);
  const karte = k.Speicher.daten.karten[id(k, 'ciao')];
  assert.strictEqual(karte.fach, 1);
  assert.strictEqual(karte.faellig, k.Vokabeln.inTagen(1));
  assert.ok(!('kennen' in karte));
  assert.strictEqual(k.Speicher.daten.karten[id(k, 'grazie')], undefined);
  assert.strictEqual(k.Lektionen.brauchtWortCheck(lek(k, 'l01')), false);
});

test('woerterEinordnen lässt vorhandene Karten unverändert', () => {
  const k = frisch();
  const alt = { fach: 3, faellig: '2026-02-02', richtig: 4, falsch: 1 };
  k.Speicher.daten.karten[id(k, 'ciao')] = { ...alt };
  k.Lektionen.woerterEinordnen('l01', [id(k, 'ciao')]);
  assert.deepStrictEqual({ ...k.Speicher.daten.karten[id(k, 'ciao')] }, alt);
});

test('brauchtWortCheck: nein, wenn alle Wörter schon Karten haben', () => {
  const k = frisch();
  for (const it of ['ciao', 'grazie']) k.Speicher.daten.karten[id(k, it)] = { fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 0, kennen: 0 };
  assert.strictEqual(k.Lektionen.brauchtWortCheck(lek(k, 'l01')), false);
});

test('naechsterTeil: Reihenfolge woerter → kapitel → text → hoeren', () => {
  const k = frisch();
  assert.strictEqual(k.Lektionen.naechsterTeil().art, 'woerter');
  k.Lektionen.woerterEinordnen('l01', []);
  const kap = k.Lektionen.naechsterTeil();
  assert.strictEqual(kap.art, 'kapitel');
  assert.strictEqual(kap.obj.id, 'artikel');
  k.Speicher.daten.fortschritt.grammatik = { artikel: { geuebt: true } };
  const t = k.Lektionen.naechsterTeil();
  assert.strictEqual(t.art, 'text');
  assert.strictEqual(t.obj.id, 'al-bar');
  k.Speicher.daten.fortschritt.texte = { 'al-bar': { verstanden: true } };
  assert.strictEqual(k.Lektionen.naechsterTeil().art, 'hoeren');
  assert.strictEqual(k.Lektionen.naechsterTeil().lektion.id, 'l01');
});

test('naechsterTeil ohneWortCheck: überspringt den Wortcheck', () => {
  const k = frisch();
  const t = k.Lektionen.naechsterTeil({ ohneWortCheck: true });
  assert.strictEqual(t.art, 'kapitel');
  assert.strictEqual(t.obj.id, 'artikel');
});

test('naechsterTeil: null, wenn die aktuelle Lektion ganz fertig ist (Wörter noch am Kennenlernen)', () => {
  const k = frisch();
  k.Lektionen.woerterEinordnen('l01', []);
  k.Speicher.daten.fortschritt.grammatik = { artikel: { geuebt: true } };
  k.Speicher.daten.fortschritt.texte = { 'al-bar': { verstanden: true } };
  k.Lektionen.hoerenSpeichern('l01', 5, 5);
  assert.strictEqual(k.Lektionen.naechsterTeil(), null);
});

test('neue: nur Wörter der aktuellen Lektion', () => {
  const k = frisch();
  k.Speicher.daten.eigeneWoerter = { 'e-x': { it: 'xyz', de: 'Test' } };
  k.Speicher.daten.karten['e-x'] = { fach: 1, faellig: '2000-01-01', richtig: 0, falsch: 0 };
  assert.deepStrictEqual([...k.Vokabeln.neue()], [id(k, 'ciao'), id(k, 'grazie')]);
  assert.ok(k.Vokabeln.faellige().includes('e-x'));
  k.Lektionen.beginnen('l03');
  assert.deepStrictEqual([...k.Vokabeln.neue()], [id(k, 'uno')]);
});

test('neue: ohne aktuelle Lektion kommen Wörter, die zu keiner Lektion gehören', () => {
  const k = frisch();
  k.Speicher.daten.fortschritt.lektionen = {
    l01: { erledigt: '2026-01-01' }, l02: { erledigt: '2026-01-01' }, l03: { erledigt: '2026-01-01' },
  };
  const neu = [...k.Vokabeln.neue()];
  assert.ok(neu.length > 0);
  const inLektion = new Set(['ciao', 'grazie', 'il caffè', 'uno'].map((it) => id(k, it)));
  assert.ok(neu.every((w) => !inLektion.has(w)));
  k.Speicher.daten.karten[neu[0]] = { fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 0 };
  assert.ok(!k.Vokabeln.neue().includes(neu[0]));
});

function format1Stand(k) {
  return {
    kennung: 'italienisch-app', format: 1,
    karten: {
      [id(k, 'ciao')]: { fach: 2, faellig: '2026-01-01', richtig: 1, falsch: 0 },
      [id(k, 'grazie')]: { fach: 3, faellig: '2026-01-01', richtig: 2, falsch: 0 },
    },
    eigeneTexte: [], eigeneWoerter: {},
    fortschritt: {
      grammatik: { artikel: { geuebt: true, richtig: 6, von: 6 } },
      texte: { 'al-bar': { verstanden: true, richtig: 3, von: 3 } },
      hoeren: { runden: 2 },
    },
  };
}

test('uebergang: Format-1-Stand wird übernommen', () => {
  const vorlage = format1Stand(frisch());
  const k = frisch(vorlage);
  k.Lektionen.uebergang();
  assert.ok(k.Lektionen.istErledigt(lek(k, 'l01')));
  assert.strictEqual(k.Speicher.daten.fortschritt.lektionen.l01.hoerenErledigt, true);
  assert.ok(!k.Lektionen.istErledigt(lek(k, 'l02')));
  assert.strictEqual(k.Speicher.daten.format, 2);
  assert.deepStrictEqual(JSON.parse(JSON.stringify(k.Speicher.daten.karten)), vorlage.karten);
});

test('uebergang läuft nach ausDateiLaden', async () => {
  const k = frisch();
  const vorlage = format1Stand(k);
  await k.Speicher.ausDateiLaden({ text: async () => JSON.stringify(vorlage) });
  assert.strictEqual(k.Speicher.daten.format, 1);
  k.Lektionen.uebergang();
  assert.ok(k.Lektionen.istErledigt(lek(k, 'l01')));
  assert.strictEqual(k.Speicher.daten.format, 2);
});

test('uebergang zweimal ändert nichts mehr', () => {
  const k = frisch(format1Stand(frisch()));
  k.Lektionen.uebergang();
  const vorher = JSON.stringify(k.Speicher.daten);
  k.Lektionen.uebergang();
  assert.strictEqual(JSON.stringify(k.Speicher.daten), vorher);
});

test('uebergang: Hören nicht geschenkt, wenn nur ein Teil fehlt', () => {
  const vorlage = format1Stand(frisch());
  delete vorlage.fortschritt.texte;
  const k = frisch(vorlage);
  k.Lektionen.uebergang();
  assert.ok(!k.Lektionen.istErledigt(lek(k, 'l01')));
  assert.ok(!(k.Speicher.daten.fortschritt.lektionen && k.Speicher.daten.fortschritt.lektionen.l01 &&
    k.Speicher.daten.fortschritt.lektionen.l01.hoerenErledigt));
});

test('neuer leerer Stand hat Format 2', () => {
  const k = frisch();
  assert.strictEqual(k.Speicher.daten.format, 2);
});

// ---------- Kann ich schon / Wiederholung ----------

const MIT_R = [
  ...BEISPIEL.slice(0, 2),
  { id: 'r1', nr: 2.5, titel: 'Wiederholung 1', situation: '', stufe: 'A1', art: 'ripasso',
    lektionen: ['l01', 'l02'], woerter: [], kapitel: [], texte: [] },
  BEISPIEL[2],
];
const mitR = () => laden(undefined, `LEKTIONEN = ${JSON.stringify(MIT_R)};`);

test('aufgabenFuer: 8 Aufgaben für „Kann ich schon“ – Wörter, Grammatik, Hören', () => {
  const k = frisch();
  const a = k.Lektionen.aufgabenFuer(lek(k, 'l01'), 8);
  assert.strictEqual(a.length, 8);
  const arten = a.map((x) => x.art);
  assert.strictEqual(arten.filter((x) => x === 'deutsch').length, 2);   // l01 hat nur 2 Wörter
  assert.ok(arten.includes('grammatik') && arten.includes('hoeren'));
  for (const x of a.filter((y) => y.art === 'grammatik')) assert.strictEqual(x.kapitel, 'artikel');
  for (const x of a.filter((y) => y.art === 'deutsch')) assert.ok(lek(k, 'l01').wortIds.includes(x.id));
});

test('aufgabenFuer: Wiederholung mischt aus ihren Lektionen', () => {
  const k = mitR();
  const r = lek(k, 'r1');
  const a = k.Lektionen.aufgabenFuer(r, 10);
  assert.strictEqual(a.length, 10);
  const erlaubt = new Set(['artikel', 'verben-are']);
  for (const x of a.filter((y) => y.art === 'grammatik')) assert.ok(erlaubt.has(x.kapitel), x.kapitel);
});

test('ueberspringen: ab 7 von 8 erledigt, Wörter als bekannt, keine Fächer verändert', () => {
  const k = frisch();
  const alt = { fach: 3, faellig: '2026-02-02', richtig: 4, falsch: 1 };
  k.Speicher.daten.karten[id(k, 'ciao')] = { ...alt };
  assert.strictEqual(k.Lektionen.ueberspringen('l01', 6, 8), false);
  assert.ok(!k.Lektionen.istErledigt(lek(k, 'l01')));
  assert.strictEqual(k.Lektionen.ueberspringen('l01', 7, 8), true);
  assert.ok(k.Lektionen.istErledigt(lek(k, 'l01')));
  assert.strictEqual(k.Speicher.daten.fortschritt.lektionen.l01.uebersprungen, true);
  assert.deepStrictEqual({ ...k.Speicher.daten.karten[id(k, 'ciao')] }, alt);
  const neu = k.Speicher.daten.karten[id(k, 'grazie')];
  assert.strictEqual(neu.fach, 1);
  assert.ok(!('kennen' in neu));
});

test('Wiederholung: Teile sind Übungen und Text, kein Wortcheck', () => {
  const k = mitR();
  const r = lek(k, 'r1');
  assert.deepStrictEqual({ ...k.Lektionen.teile(r) }, { uebungen: 'offen', text: 'fertig' });
  assert.strictEqual(k.Lektionen.brauchtWortCheck(r), false);
});

test('Wiederholung: Übungen fertig ab 80 %, dann erledigt', () => {
  const k = mitR();
  const r = lek(k, 'r1');
  k.Lektionen.ripassoSpeichern('r1', 7, 10);
  assert.strictEqual(k.Lektionen.teile(r).uebungen, 'angefangen');
  k.Lektionen.ripassoSpeichern('r1', 8, 10);
  assert.strictEqual(k.Lektionen.teile(r).uebungen, 'fertig');
  assert.ok(k.Lektionen.aktualisieren().some((l) => l.id === 'r1'));
});

test('Wiederholung: naechsterTeil sind die Übungen, keine neuen Wörter', () => {
  const k = mitR();
  k.Lektionen.beginnen('r1');
  assert.strictEqual(k.Lektionen.naechsterTeil().art, 'uebungen');
  assert.deepStrictEqual([...k.Vokabeln.neue()], []);
});
