// Tests für die Abfrage Italienisch → Deutsch (vokabeln.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden();
const w = (it) => k.WORTSCHATZ.find((x) => x.it === it);

test('deutschZiel: Klammern weg, nur erste Variante', () => {
  assert.deepStrictEqual([...k.Vokabeln.deutschZiel('bitte (als Antwort auf danke)')], ['bitte']);
  assert.deepStrictEqual([...k.Vokabeln.deutschZiel('guten Morgen; guten Tag')], ['guten', 'Morgen']);
  assert.deepStrictEqual([...k.Vokabeln.deutschZiel('der/die/das')], ['der']);
  assert.deepStrictEqual([...k.Vokabeln.deutschZiel('Wie geht es dir?')], ['Wie', 'geht', 'es', 'dir']);
  assert.deepStrictEqual([...k.Vokabeln.deutschZiel('der Bahnhof')], ['der', 'Bahnhof']);
});

test('deutschKacheln: Ziel plus 2 falsche Kacheln bei mehreren Wörtern', () => {
  const { ziel, kacheln } = k.Vokabeln.deutschKacheln(w('il caffè'));
  assert.deepStrictEqual([...ziel], ['der', 'Kaffee']);
  assert.strictEqual(kacheln.length, 4);
  assert.ok(kacheln.includes('der') && kacheln.includes('Kaffee'));
});

test('deutschKacheln: Ziel plus 3 falsche Kacheln bei einem Wort', () => {
  const { ziel, kacheln } = k.Vokabeln.deutschKacheln(w('grazie'));
  assert.deepStrictEqual([...ziel], ['danke']);
  assert.strictEqual(kacheln.length, 4);
});

test('deutschKacheln: keine doppelten Kacheln', () => {
  for (const x of k.WORTSCHATZ) {
    const { kacheln } = k.Vokabeln.deutschKacheln(x);
    const klein = kacheln.map((t) => t.toLowerCase());
    assert.strictEqual(new Set(klein).size, klein.length, `${x.it}: ${kacheln.join(' | ')}`);
  }
});

test('deutschKacheln: eigenes Wort ohne Thema bekommt falsche Kacheln aus dem Wortschatz', () => {
  const { kacheln } = k.Vokabeln.deutschKacheln({ id: 'e-x', it: 'xyz', de: 'die Pfanne' });
  assert.strictEqual(kacheln.length, 4);
});

test('deutschKacheln: keine falsche Kachel aus anderen Bedeutungen desselben Wortes', () => {
  const alleWoerter = (de) => de.replace(/[();/.,!?:–]/g, ' ').split(/\s+/).filter(Boolean).map((t) => t.toLowerCase());
  for (let runde = 0; runde < 5; runde++) {
    for (const x of k.WORTSCHATZ) {
      const { ziel, kacheln } = k.Vokabeln.deutschKacheln(x);
      const zielKlein = new Set(ziel.map((t) => t.toLowerCase()));
      const verboten = new Set(alleWoerter(x.de));
      const schlecht = kacheln.filter((t) => !zielKlein.has(t.toLowerCase()) && verboten.has(t.toLowerCase()));
      assert.deepStrictEqual([...schlecht], [], `${x.it} (${x.de}): ${kacheln.join(' | ')}`);
    }
  }
});

test('richtungFuer: Italienisch, wenn die Bedeutung keine Kacheln ergibt', () => {
  const kk = laden();
  kk.Speicher.daten.eigeneWoerter = { 'e-ah': { it: 'ah', de: '(Ausruf)' } };
  kk.Speicher.daten.karten['e-ah'] = { fach: 2, faellig: '2026-01-01', richtig: 1, falsch: 0 };
  assert.strictEqual(kk.Vokabeln.richtungFuer('e-ah'), 'it');
});

test('pruefeDeutsch: Reihenfolge zählt, Groß/klein egal', () => {
  assert.strictEqual(k.Vokabeln.pruefeDeutsch(['der', 'Kaffee'], w('il caffè')), true);
  assert.strictEqual(k.Vokabeln.pruefeDeutsch(['Der', 'kaffee'], w('il caffè')), true);
  assert.strictEqual(k.Vokabeln.pruefeDeutsch(['Kaffee', 'der'], w('il caffè')), false);
  assert.strictEqual(k.Vokabeln.pruefeDeutsch(['der'], w('il caffè')), false);
});

test('richtungFuer: Fach 1, junge und fehlende Karten immer Italienisch', () => {
  const kk = laden();
  const id = kk.wortId('ciao');
  assert.strictEqual(kk.Vokabeln.richtungFuer(id), 'it');
  kk.Speicher.daten.karten[id] = { fach: 1, faellig: '2026-01-01', richtig: 0, falsch: 0, richtung: 'it' };
  assert.strictEqual(kk.Vokabeln.richtungFuer(id), 'it');
  kk.Speicher.daten.karten[id] = { fach: 3, faellig: '2026-01-01', richtig: 0, falsch: 0, kennen: 1 };
  assert.strictEqual(kk.Vokabeln.richtungFuer(id), 'it');
});

test('richtungFuer: ab Fach 2 abwechselnd, ohne richtung erst Deutsch', () => {
  const kk = laden();
  const id = kk.wortId('ciao');
  kk.Speicher.daten.karten[id] = { fach: 2, faellig: '2026-01-01', richtig: 1, falsch: 0 };
  assert.strictEqual(kk.Vokabeln.richtungFuer(id), 'de');
  kk.Speicher.daten.karten[id].richtung = 'de';
  assert.strictEqual(kk.Vokabeln.richtungFuer(id), 'it');
  kk.Speicher.daten.karten[id].richtung = 'it';
  assert.strictEqual(kk.Vokabeln.richtungFuer(id), 'de');
});

test('eintragen merkt sich die Richtung', () => {
  const kk = laden();
  const id = kk.wortId('ciao');
  kk.Speicher.daten.karten[id] = { fach: 2, faellig: '2026-01-01', richtig: 1, falsch: 0 };
  kk.Vokabeln.eintragen(id, true, 'de');
  assert.strictEqual(kk.Speicher.daten.karten[id].richtung, 'de');
  assert.strictEqual(kk.Speicher.daten.karten[id].fach, 3);
  kk.Vokabeln.eintragen(id, false);
  assert.strictEqual(kk.Speicher.daten.karten[id].richtung, 'it');
});
