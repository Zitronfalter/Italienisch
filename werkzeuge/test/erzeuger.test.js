// Tests für selbst erzeugte Aufgaben (erzeuger.js) und die Grammatik-Wiederholung (wiederholung.js).
// Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const formen = (f, v) => [0, 1, 2, 3, 4, 5].map((p) => f(v, p)).join(' ');

test('Gegenwart: Schreibregeln und unregelmäßige Verben', () => {
  const E = laden().Erzeuger;
  assert.strictEqual(formen(E.praesens, 'cercare'), 'cerco cerchi cerca cerchiamo cercate cercano');
  assert.strictEqual(formen(E.praesens, 'mangiare'), 'mangio mangi mangia mangiamo mangiate mangiano');
  assert.strictEqual(formen(E.praesens, 'studiare'), 'studio studi studia studiamo studiate studiano');
  assert.strictEqual(formen(E.praesens, 'pagare'), 'pago paghi paga paghiamo pagate pagano');
  assert.strictEqual(formen(E.praesens, 'leggere'), 'leggo leggi legge leggiamo leggete leggono');
  assert.strictEqual(formen(E.praesens, 'dormire'), 'dormo dormi dorme dormiamo dormite dormono');
  assert.strictEqual(formen(E.praesens, 'capire'), 'capisco capisci capisce capiamo capite capiscono');
  assert.strictEqual(formen(E.praesens, 'andare'), 'vado vai va andiamo andate vanno');
});

test('Zukunft, würde, früher, Partizip, gerundio', () => {
  const E = laden().Erzeuger;
  assert.strictEqual(formen(E.zukunft, 'cercare'), 'cercherò cercherai cercherà cercheremo cercherete cercheranno');
  assert.strictEqual(formen(E.zukunft, 'mangiare'), 'mangerò mangerai mangerà mangeremo mangerete mangeranno');
  assert.strictEqual(formen(E.zukunft, 'venire'), 'verrò verrai verrà verremo verrete verranno');
  assert.strictEqual(formen(E.konditional, 'essere'), 'sarei saresti sarebbe saremmo sareste sarebbero');
  assert.strictEqual(formen(E.imperfetto, 'essere'), 'ero eri era eravamo eravate erano');
  assert.strictEqual(formen(E.imperfetto, 'fare'), 'facevo facevi faceva facevamo facevate facevano');
  assert.strictEqual(formen(E.imperfetto, 'capire'), 'capivo capivi capiva capivamo capivate capivano');
  assert.strictEqual(E.partizip('mangiare'), 'mangiato');
  assert.strictEqual(E.partizip('vendere'), 'venduto');
  assert.strictEqual(E.partizip('finire'), 'finito');
  assert.strictEqual(E.partizip('prendere'), 'preso');
  assert.strictEqual(E.gerundio('fare'), 'facendo');
  assert.strictEqual(E.gerundio('leggere'), 'leggendo');
});

test('Vergangenheit mit essere: Endung passt sich an', () => {
  const E = laden().Erzeuger;
  const r = E.zusammengesetzt('andare', 2, 'lei', E.praesens);
  assert.strictEqual(r.loesung, 'è andata');
  const noi = E.zusammengesetzt('partire', 3, 'noi', E.praesens);
  assert.strictEqual(noi.loesung, 'siamo partiti');
  assert.deepStrictEqual([...noi.auch], ['siamo partite']);
  assert.strictEqual(E.zusammengesetzt('leggere', 0, 'io', E.imperfetto).loesung, 'avevo letto');
});

test('alle Verben stehen im Wortschatz', () => {
  const k = laden();
  const fehlt = k.Erzeuger.VERBEN.filter((v) => !k.WORTSCHATZ.find((w) => w.it === v));
  assert.deepStrictEqual([...fehlt], []);
});

test('erzeugte Aufgaben sind vollständig und richtig prüfbar', () => {
  const k = laden();
  for (const id of k.Erzeuger.KAPITEL_IDS) {
    assert.ok(k.Grammatik.kapitel(id), `Kapitel fehlt: ${id}`);
    for (let i = 0; i < 40; i++) {
      const u = k.Erzeuger.aufgabe(id);
      const wo = `${id}: ${u.satz}`;
      assert.strictEqual(u.art, 'luecke', wo);
      assert.ok(u.de && !u.de.includes('undefined'), wo);
      assert.ok(u.satz.includes('___') && !u.satz.includes('undefined'), wo);
      assert.ok(u.loesung && !u.loesung.includes('undefined'), wo);
      assert.strictEqual(k.Grammatik.pruefeLuecke(u.loesung, u).stufe, 'richtig', wo);
    }
  }
});

test('Wiederholung: geübtes Kapitel bekommt ein Fach und wird fällig', () => {
  const k = laden();
  k.Speicher.daten.fortschritt.grammatik = { artikel: { geuebt: true }, possessiv: { geuebt: true } };
  k.Wiederholung.einsortieren();
  const g = k.Speicher.daten.fortschritt.grammatik;
  assert.strictEqual(g.artikel.fach, 1);
  assert.notStrictEqual(g.artikel.faellig, g.possessiv.faellig);   // verteilt auf verschiedene Tage
  assert.deepStrictEqual([...k.Wiederholung.faellige()], []);       // heute noch nicht

  g.artikel.faellig = '2000-01-01';
  g.possessiv.faellig = '2000-01-01';
  const liste = k.Wiederholung.rundeAufgaben();
  assert.strictEqual(liste.length, 6);
  assert.ok(liste.some((a) => a.uebung && a.uebung.erzeugt));    // artikel hat einen Erzeuger
  assert.strictEqual(liste.filter((a) => a.kapitel === 'possessiv' && a.nr !== undefined).length, 3);

  k.Wiederholung.eintragen('artikel', 3, 3);
  assert.strictEqual(g.artikel.fach, 2);
  k.Wiederholung.eintragen('artikel', 2, 3);
  assert.strictEqual(g.artikel.fach, 2);
  k.Wiederholung.eintragen('artikel', 1, 3);
  assert.strictEqual(g.artikel.fach, 1);
  assert.ok(g.artikel.faellig > k.Vokabeln.heute());
});

test('Wiederholung: Kapitel aus übersprungenen Lektionen kommen auch dran', () => {
  const k = laden();
  const l = k.LEKTIONEN.find((x) => (x.kapitel || []).length);
  k.Speicher.daten.fortschritt.lektionen = { [l.id]: { erledigt: '2026-11-01', uebersprungen: true } };
  k.Wiederholung.einsortieren();
  for (const id of l.kapitel) assert.strictEqual(k.Wiederholung.fach(id), 1, id);
});
