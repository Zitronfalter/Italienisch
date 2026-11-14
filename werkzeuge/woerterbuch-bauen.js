// Baut woerterbuch.json aus den freien WikDict-Daten (Wiktionary, CC BY-SA).
// Nur nötig, wenn das Wörterbuch erneuert werden soll – die App braucht diese Datei nicht.
//
// 1. Herunterladen (je eine Datei):
//    https://download.wikdict.com/dictionaries/sqlite/2/it-de.sqlite3
//    https://download.wikdict.com/dictionaries/sqlite/2/de-it.sqlite3
// 2. Starten (Node 22 oder neuer):
//    node werkzeuge/woerterbuch-bauen.js <pfad/it-de.sqlite3> <pfad/de-it.sqlite3>
//
// Beide Richtungen werden zusammengeführt: so stehen bei „mangiare“ auch „essen“
// (aus Deutsch→Italienisch) und nicht nur „fressen“ (aus Italienisch→Deutsch).

const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const path = require('path');

const [itDePfad, deItPfad] = process.argv.slice(2);
if (!itDePfad || !deItPfad) {
  console.log('Aufruf: node werkzeuge/woerterbuch-bauen.js it-de.sqlite3 de-it.sqlite3');
  process.exit(1);
}

const MAX_BEDEUTUNGEN = 4;
const MAX_WOERTER = 3;          // nur Einträge mit höchstens 3 Wörtern (keine langen Redewendungen)

// italienisches Wort → Map(deutsches Wort → Punkte)
const kandidaten = new Map();

function sauber(text) {
  return String(text || '').replace(/’/g, "'").trim();
}

function hinzufuegen(it, de, punkte) {
  it = sauber(it).toLowerCase();
  de = sauber(de);
  if (!it || !de) return;
  if (it.split(/\s+/).length > MAX_WOERTER) return;
  if (!/^[\p{L}' -]+$/u.test(it)) return;            // nur Buchstaben, Apostroph, Leerzeichen, Bindestrich
  if (!kandidaten.has(it)) kandidaten.set(it, new Map());
  const m = kandidaten.get(it);
  m.set(de, Math.max(m.get(de) || 0, punkte));
}

// Italienisch → Deutsch
const itDe = new DatabaseSync(itDePfad, { readOnly: true });
for (const z of itDe.prepare('SELECT written_rep, trans_list, max_score FROM simple_translation').iterate()) {
  const liste = String(z.trans_list || '').split(' | ');
  liste.forEach((de, i) => hinzufuegen(z.written_rep, de, (z.max_score || 0) - i));   // vordere zählen mehr
}

// Deutsch → Italienisch, umgedreht
const deIt = new DatabaseSync(deItPfad, { readOnly: true });
for (const z of deIt.prepare('SELECT written_rep, trans_list, max_score FROM simple_translation').iterate()) {
  for (const it of String(z.trans_list || '').split(' | ')) hinzufuegen(it, z.written_rep, z.max_score || 0);
}

// Pro Wort die besten Bedeutungen, als Text "essen; fressen"
const ergebnis = {};
for (const it of [...kandidaten.keys()].sort()) {
  const besten = [...kandidaten.get(it).entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, MAX_BEDEUTUNGEN)
    .map(([de]) => de);
  ergebnis[it] = besten.join('; ');
}

const ziel = path.join(__dirname, '..', 'woerterbuch.json');
fs.writeFileSync(ziel, JSON.stringify(ergebnis));
console.log(`${Object.keys(ergebnis).length} Einträge → ${ziel} (${Math.round(fs.statSync(ziel).size / 1024)} KB)`);
