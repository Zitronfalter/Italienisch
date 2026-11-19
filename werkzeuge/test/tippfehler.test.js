// Tests für die Tippfehler-Nachsicht (tippfehler.js) und ihren Einsatz in Vokabeln, Diktat und Grammatik.
// Ausführen: node --test werkzeuge/test/tippfehler.test.js

const test = require('node:test');
const assert = require('node:assert');
const { laden } = require('./laden');

let k;
test.before(async () => {
  k = laden(undefined, '', { woerterbuch: true });
  await k.Woerterbuch.laden();
});
const W = (a, b) => k.Tippfehler.pruefeWort(a, b);

test('durchwinken: verdreht, vergessen, doppelt, Nachbartaste', () => {
  assert.strictEqual(W('mangaimo', 'mangiamo').stufe, 'tippfehler');
  assert.strictEqual(W('cogome', 'cognome').stufe, 'tippfehler');
  assert.strictEqual(W('cognomme', 'cognome').stufe, 'tippfehler');
  assert.strictEqual(W('cssa', 'casa').stufe, 'tippfehler');
  assert.strictEqual(W('casda', 'casa').stufe, 'tippfehler');
  assert.strictEqual(W('gratie', 'grazie').stufe, 'tippfehler');   // t neben z (QWERTZ)
  assert.strictEqual(W('grabie', 'grazie').stufe, 'falsch');       // b ist keine Nachbartaste
});

test('Akzent vergessen: durchwinken', () => {
  const r = W('perche', 'perché');
  assert.strictEqual(r.stufe, 'tippfehler');
  assert.strictEqual(r.art, 'akzent');
  assert.strictEqual(W('citta', 'città').art, 'akzent');
});

test('anderes Wort oder andere Form: streng', () => {
  const r = W('grazia', 'grazie');
  assert.strictEqual(r.stufe, 'anderesWort');
  assert.strictEqual(r.wort, 'grazia');
  assert.ok(/Anmut/.test(r.bedeutung), r.bedeutung);
  assert.strictEqual(W('e', 'è').stufe, 'anderesWort');
  assert.notStrictEqual(W('mangiano', 'mangiamo').stufe, 'tippfehler');
  assert.notStrictEqual(W('palla', 'pala').stufe, 'tippfehler');
});

test('Endvokal, kurze Wörter, zu viele Fehlerchen: streng', () => {
  const streng = (x) => assert.ok(['falsch', 'anderesWort'].includes(x.stufe), JSON.stringify(x));
  streng(W('aveva', 'avevo'));
  streng(W('lo', 'la'));
  streng(W('da', 'di'));
  assert.strictEqual(W('nuova', 'nuovo').stufe === 'tippfehler', false);   // Endvokal (Geschlecht)
  assert.strictEqual(W('mangaimp', 'mangiamo').stufe, 'falsch');
  assert.strictEqual(W('perhce', 'perché').stufe, 'falsch');      // Akzent + verdreht = 2
});

test('richtig bleibt richtig, die Lösung ist nie „anderes Wort“', () => {
  assert.strictEqual(W('grazie', 'grazie').stufe, 'richtig');
  assert.strictEqual(W('Grazie', 'grazie').stufe, 'richtig');
});

test('Satz: vertippte Wörter markiert, mehr als 2 → falsch', () => {
  const S = k.Tippfehler.pruefeSatz;
  assert.strictEqual(S('io mangio la pasta', 'Io mangio la pasta.').stufe, 'richtig');
  const r = S('Io mangaimo la pasta', 'Io mangiamo la pasta.');
  assert.strictEqual(r.stufe, 'fast');
  assert.deepStrictEqual([...r.falscheStellen], [1]);
  assert.ok(r.hinweis);
  assert.strictEqual(S('Io mangaimo la psta con cogome', 'Io mangiamo la pasta con cognome').stufe, 'falsch');
  assert.strictEqual(S('Io mangio pasta', 'Io mangio la pasta').stufe, 'falsch');
});

test('ohne geladenes Wörterbuch: kein Absturz', () => {
  const ohne = laden();
  assert.ok(['anderesWort', 'tippfehler', 'falsch'].includes(ohne.Tippfehler.pruefeWort('grazia', 'grazie').stufe));
});

// ---------- Einsatz in der App ----------

test('Vokabeln: Tippfehler zählt, anderes Wort nicht', () => {
  const V = k.Vokabeln;
  const t = V.pruefe('mangaimo', { it: 'mangiamo' });
  assert.strictEqual(t.stufe, 'fast');
  assert.strictEqual(t.hinweis, 'Kleiner Tippfehler.');
  const g = V.pruefe('grazia', { it: 'grazie' });
  assert.strictEqual(g.stufe, 'falsch');
  assert.ok(g.hinweis.includes('„grazia“ ist ein anderes Wort'), g.hinweis);
  const a = V.pruefe('perche', { it: 'perché' });
  assert.strictEqual(a.stufe, 'fast');
  assert.strictEqual(a.hinweis, 'Achte auf den Akzent.');
  assert.strictEqual(V.pruefe('casa', { it: 'la casa' }).hinweis, 'Lerne das Wort mit Artikel.');
  assert.strictEqual(V.pruefe('cssa', { it: 'la casa' }).stufe, 'fast');
  assert.strictEqual(V.pruefe('fare la sepsa', { it: 'fare la spesa' }).stufe, 'fast');
});

test('Grammatik-Lücke: Tippfehler zählt, Grammatikfehler nicht', () => {
  assert.strictEqual(k.Grammatik.pruefeLuecke('mangaimo', { loesung: 'mangiamo' }).stufe, 'fast');
  assert.strictEqual(k.Grammatik.pruefeLuecke('mangiano', { loesung: 'mangiamo' }).stufe, 'falsch');
  assert.strictEqual(k.Grammatik.pruefeLuecke('lo', { loesung: 'la' }).stufe, 'falsch');
});

test('Diktat: Tippfehler zählt und wird markiert', () => {
  const r = k.Uebungen.pruefeDiktat('Io mangaimo la pasta', 'Io mangiamo la pasta.');
  assert.strictEqual(r.stufe, 'fast');
  assert.deepStrictEqual([...r.falscheStellen], [1]);
});
