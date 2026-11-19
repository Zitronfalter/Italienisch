// Tests für die Reiseskizzen (skizzen.js, skizzen-zuordnung.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden();
const echte = () => k.Lektionen.alle().filter((l) => l.art !== 'ripasso');

test('jede echte Lektion hat eine Skizze mit bekanntem Motiv', () => {
  for (const l of echte()) {
    const s = k.Skizzen.fuer(l);
    assert.ok(s, `${l.id} ${l.titel}`);
    assert.ok(k.Skizzen.MOTIVE[s.key], s.key);
    assert.ok(s.variante >= 0 && s.variante <= 3, `${l.id} Variante ${s.variante}`);
  }
});

test('jedes Motiv höchstens 4-mal und frühestens 15 Lektionen später wieder', () => {
  const wo = {};
  echte().forEach((l, i) => (wo[k.SKIZZEN_ZUORDNUNG[l.id][0]] ||= []).push(i));
  for (const [key, stellen] of Object.entries(wo)) {
    assert.ok(stellen.length <= 4, `${key}: ${stellen.length}-mal`);
    for (let i = 1; i < stellen.length; i++) assert.ok(stellen[i] - stellen[i - 1] >= 15, `${key}: Abstand ${stellen[i] - stellen[i - 1]}`);
  }
});

test('Abwandlung zählt hoch: 1. Mal 0, 2. Mal 1 …', () => {
  const zaehler = {};
  for (const l of echte()) {
    const [key, v] = k.SKIZZEN_ZUORDNUNG[l.id];
    assert.strictEqual(v, zaehler[key] || 0, l.id);
    zaehler[key] = v + 1;
  }
});

test('Wiederholung zeigt die Skizze der Lektion davor', () => {
  const alle = k.Lektionen.alle();
  const i = alle.findIndex((l) => l.art === 'ripasso');
  assert.ok(i > 0);
  const davor = alle.slice(0, i).reverse().find((l) => l.art !== 'ripasso');
  assert.deepStrictEqual(JSON.parse(JSON.stringify(k.Skizzen.fuer(alle[i]))), JSON.parse(JSON.stringify(k.Skizzen.fuer(davor))));
});

test('unbekannte Lektion → keine Skizze statt Fehler', () => {
  assert.strictEqual(k.Skizzen.fuer({ id: 'gibt-es-nicht', art: 'lektion' }), null);
  assert.strictEqual(k.Skizzen.fuer(null), null);
});

test('alle 58 Motive haben einen italienischen Bildtitel', () => {
  const m = Object.values(k.Skizzen.MOTIVE);
  assert.strictEqual(m.length, 58);
  for (const x of m) assert.ok(x.bild && x.name, JSON.stringify(x));
});

test('Zwischenspeicher: voller Gerätespeicher → keine Bilder ablegen, Lernstand unberührt', () => {
  const gross = JSON.stringify({ karten: { x: 'a'.repeat(2100000) } });
  const kk = laden(undefined, `
    globalThis.document = { getElementById: () => true, body: { insertAdjacentHTML() {} } };
  `, { gespeichert: gross });
  // svg() braucht zum Zeichnen den Browser – hier nur der Speicher-Teil: ein vorhandenes Bild im Zwischenspeicher
  kk.localStorage.setItem('italienisch-skizzen', JSON.stringify({ stand: 'v1', bilder: { 'piazza:0': '<svg>alt</svg>' } }));
  assert.strictEqual(kk.Skizzen.svg('piazza', 0), '<svg>alt</svg>');
  assert.strictEqual(kk.localStorage.getItem('italienisch-daten'), gross);
});

test('Speicher voll wegen Skizzen-Zwischenspeicher → Bilder weg, Lernstand wird trotzdem gespeichert', () => {
  const kk = laden(undefined, `
    const echt = localStorage.setItem;
    localStorage.setItem = (k, v) => {
      if (k === 'italienisch-daten' && localStorage.getItem('italienisch-skizzen') !== null) throw new Error('QuotaExceededError');
      return echt(k, v);
    };
  `);
  kk.localStorage.setItem('italienisch-skizzen', '{"stand":"v1","bilder":{}}');
  kk.Speicher.daten.fortschritt.test = 1;
  assert.strictEqual(kk.Speicher.speichern(), true);
  assert.strictEqual(kk.localStorage.getItem('italienisch-skizzen'), null);
  assert.strictEqual(JSON.parse(kk.localStorage.getItem('italienisch-daten')).fortschritt.test, 1);
});
