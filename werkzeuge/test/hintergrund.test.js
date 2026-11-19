// Tests für Hintergrund (Papier/Pappe, Regler).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden();
const roh = (x) => JSON.parse(JSON.stringify(x));

test('Standard ergibt die Entwurfsfarben', () => {
  assert.strictEqual(k.Hintergrund.farbe('papier', { hell: 50, waerme: 50 }), 'hsl(50 43% 97%)');
  assert.strictEqual(k.Hintergrund.farbe('pappe', { hell: 50, waerme: 50 }), 'hsl(29 16% 80%)');
});

test('aktuelleArt', () => {
  const A = k.Hintergrund.aktuelleArt;
  assert.strictEqual(A({ art: 'auto' }, false), 'papier');
  assert.strictEqual(A({ art: 'auto' }, true), 'pappe');
  assert.strictEqual(A({ art: 'papier' }, true), 'papier');
  assert.strictEqual(A({ art: 'pappe' }, false), 'pappe');
  assert.strictEqual(A({}, true), 'pappe');
});

test('wahl: alter Lernstand ohne Eintrag und kaputte Werte', () => {
  for (const gespeichert of [undefined, '{}', '{"einstellungen":{"tempo":0.7}}', '{"einstellungen":{"hintergrund":null}}']) {
    const w = laden(undefined, '', { gespeichert }).Hintergrund.wahl();
    assert.deepStrictEqual(roh(w), { art: 'auto', papier: { hell: 50, waerme: 50 }, pappe: { hell: 50, waerme: 50 } }, String(gespeichert));
  }
  const kaputt = laden(undefined, '', { gespeichert: '{"einstellungen":{"hintergrund":{"art":"lila","pappe":{"hell":"x","waerme":999}}}}' }).Hintergrund.wahl();
  assert.strictEqual(kaputt.art, 'auto');
  assert.deepStrictEqual(roh(kaputt.pappe), { hell: 50, waerme: 100 });
});

test('Regler-Grenzen: Text bleibt lesbar', () => {
  for (const art of ['papier', 'pappe']) for (const hell of [0, 50, 100]) for (const waerme of [0, 50, 100]) {
    const bg = k.Hintergrund.farbe(art, { hell, waerme }), f = k.Hintergrund.FARBEN[art];
    assert.ok(k.Hintergrund.kontrast('#1f1c18', bg) >= 7, `${art} ${hell}/${waerme} Tusche`);
    for (const t of ['textLeise', 'richtig', 'fehler']) {
      const kt = k.Hintergrund.kontrast(f[t], bg);
      assert.ok(kt >= 4.5, `${art} ${hell}/${waerme} ${t}: ${kt.toFixed(2)}`);
    }
  }
});

test('Regler ändern die Farbe sichtbar', () => {
  for (const art of ['papier', 'pappe']) {
    assert.notStrictEqual(k.Hintergrund.farbe(art, { hell: 0, waerme: 50 }), k.Hintergrund.farbe(art, { hell: 100, waerme: 50 }));
    assert.notStrictEqual(k.Hintergrund.farbe(art, { hell: 50, waerme: 0 }), k.Hintergrund.farbe(art, { hell: 50, waerme: 100 }));
  }
});

test('zuruecksetzen: nur Regler der gezeigten Art, Wahl bleibt', () => {
  const kk = laden(undefined, '', { gespeichert: '{"einstellungen":{"hintergrund":{"art":"pappe","pappe":{"hell":10,"waerme":90},"papier":{"hell":20,"waerme":30}}}}' });
  kk.Hintergrund.zuruecksetzen();
  const w = kk.Hintergrund.wahl();
  assert.strictEqual(w.art, 'pappe');
  assert.deepStrictEqual(roh(w.pappe), { hell: 50, waerme: 50 });
  assert.deepStrictEqual(roh(w.papier), { hell: 20, waerme: 30 });
});

test('setzen speichert in den Einstellungen, andere bleiben', () => {
  const kk = laden(undefined, '', { gespeichert: '{"einstellungen":{"tempo":0.7}}' });
  kk.Hintergrund.setzen({ art: 'papier' });
  kk.Hintergrund.setzen({ papier: { hell: 80, waerme: 20 } });
  assert.strictEqual(kk.Speicher.daten.einstellungen.tempo, 0.7);
  assert.deepStrictEqual(roh(kk.Hintergrund.wahl()), { art: 'papier', papier: { hell: 80, waerme: 20 }, pappe: { hell: 50, waerme: 50 } });
});

test('Linkfarbe (Nebenknöpfe) und Ränder bleiben an den Regler-Grenzen sichtbar', () => {
  for (const art of ['papier', 'pappe']) for (const hell of [0, 50, 100]) for (const waerme of [0, 50, 100]) {
    const r = { hell, waerme }, bg = k.Hintergrund.farbe(art, r), fl = k.Hintergrund.flaeche(art, r);
    const linie = k.Hintergrund.FARBEN[art].akzentLinie;
    assert.ok(k.Hintergrund.kontrast(linie, bg) >= 4.5, `${art} ${hell}/${waerme} akzentLinie auf Grund`);
    assert.ok(k.Hintergrund.kontrast(linie, fl) >= 4.5, `${art} ${hell}/${waerme} akzentLinie auf Fläche`);
    for (const t of ['textLeise', 'richtig', 'fehler']) assert.ok(k.Hintergrund.kontrast(k.Hintergrund.FARBEN[art][t], fl) >= 4.5, `${art} ${hell}/${waerme} ${t} auf Fläche`);
    const rand = k.Hintergrund.rand(art, r);
    assert.ok(k.Hintergrund.kontrast(rand, bg) >= 1.25, `${art} ${hell}/${waerme} Rand: ${k.Hintergrund.kontrast(rand, bg).toFixed(2)}`);
  }
});

test('setzen ohne Speichern (beim Ziehen der Regler) schreibt nichts', () => {
  const kk = laden(undefined, '', { gespeichert: '{"einstellungen":{"tempo":0.7}}' });
  kk.Hintergrund.setzen({ pappe: { hell: 10, waerme: 10 } }, { speichern: false });
  assert.strictEqual(kk.localStorage.getItem('italienisch-daten'), '{"einstellungen":{"tempo":0.7}}');
  assert.deepStrictEqual(roh(kk.Hintergrund.wahl().pappe), { hell: 10, waerme: 10 });
  kk.Hintergrund.setzen({});
  assert.ok(JSON.parse(kk.localStorage.getItem('italienisch-daten')).einstellungen.hintergrund);
});
