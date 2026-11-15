// Tests für Limo (limo.js).  Ausführen: node --test "werkzeuge/test/*.test.js"

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

const k = laden(['limo.js'], 'globalThis.Limo = Limo;');

test('jede Stimmung gibt ein SVG mit eigenem Filter', () => {
  const ids = new Set();
  for (const s of k.Limo.NAMEN) {
    const svg = k.Limo.svg(s);
    assert.ok(svg.startsWith('<svg') && svg.trim().endsWith('</svg>'), s);
    assert.ok(!svg.includes('undefined'), s);
    const id = svg.match(/filter id="([^"]+)"/)[1];
    assert.ok(!ids.has(id), s);
    ids.add(id);
  }
});

test('alle Stimmungen der App gibt es', () => {
  for (const s of ['winkt', 'freut', 'denkt', 'ruhig', 'ueberrascht', 'liest', 'jubelt', 'mut', 'hoert', 'schlaeft']) {
    assert.ok(k.Limo.NAMEN.includes(s), s);
  }
});

test('unbekannte Stimmung: ruhig (nie leer)', () => {
  assert.ok(k.Limo.svg('gibtsnicht').includes('<path'));
});
