// Prüft die Lektionen: Gibt es alle Wörter, Kapitel und Texte? Passt jeder Lektionstext zum Stand der Lektion?
//
// Aufruf:  node werkzeuge/lektionen-pruefen.js
// Ergebnis: Liste von Fehlern und Hinweisen; Rückgabewert 1, wenn es Fehler gibt.

const MAX_NEU = 8;   // höchstens so viele im Text erklärte neue Wörter pro Lektionstext

function klein(wort) {
  return wort.toLowerCase().replace(/’/g, "'");
}

// "il caffè" → "caffè", "l'acqua" → "acqua"
function ohneArtikel(it) {
  return klein(it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '');
}

function woerterIn(k, zeile) {
  return k.Lesen.stuecke(zeile).filter((s) => s.wort).map((s) => klein(s.text));
}

function pruefeLektionen(k) {
  const fehler = [];
  const hinweise = [];
  const lektionen = [...k.LEKTIONEN].sort((a, b) => a.nr - b.nr);

  // Wort (ohne Artikel) → Nummer der Lektion
  const lektionVon = new Map();
  const besitzer = new Map();   // Wort-ID → Lektions-ID
  for (const l of lektionen) {
    for (const it of l.woerter) {
      const id = k.wortId(it);
      if (!k.WORTSCHATZ.some((w) => w.id === id)) {
        fehler.push(`${l.id}: Wort „${it}“ steht nicht im Wortschatz`);
        continue;
      }
      if (besitzer.has(id)) {
        fehler.push(`${l.id}: Wort „${it}“ gehört schon zu ${besitzer.get(id)}`);
        continue;
      }
      besitzer.set(id, l.id);
      // auch jedes Teilwort: "come stai?" → "come", "stai"
      // (Artikel und andere Grundwörter nicht: „gli ingredienti“ macht „gli“ nicht zum Lektionswort)
      const alleTeile = woerterIn(k, it);
      const teile = alleTeile.length > 1 ? alleTeile.filter((t) => !k.GRUNDWOERTER[t]) : [];
      for (const form of [ohneArtikel(it), klein(it), ...teile]) {
        if (!lektionVon.has(form)) lektionVon.set(form, l.nr);
      }
    }
  }

  const doppelt = (liste, art, finde) => {
    const gesehen = new Map();
    for (const l of lektionen) {
      for (const id of l[liste]) {
        if (!finde(id)) fehler.push(`${l.id}: ${art} „${id}“ gibt es nicht`);
        if (gesehen.has(id)) fehler.push(`${l.id}: ${art} „${id}“ gehört schon zu ${gesehen.get(id)}`);
        gesehen.set(id, l.id);
      }
    }
  };
  doppelt('kapitel', 'Kapitel', (id) => k.KAPITEL.some((x) => x.id === id));
  doppelt('texte', 'Text', (id) => k.LESETEXTE.some((x) => x.id === id));

  const bekanntBis = (form, nr) => lektionVon.has(form) && lektionVon.get(form) <= nr;

  // Lektionstexte
  for (const l of lektionen) {
    for (const tid of l.texte) {
      const t = k.LESETEXTE.find((x) => x.id === tid);
      if (!t) continue;
      const neu = new Set();
      const gemeldet = new Set();
      for (const b of k.Lesen.bloecke(t.text)) {
        for (const form of woerterIn(k, b.zeile)) {
          if (k.GRUNDWOERTER[form] || bekanntBis(form, l.nr)) continue;
          const eintrag = t.woerter[form];
          if (eintrag) {
            const grund = eintrag[0];
            if (/^\p{Lu}/u.test(grund)) continue;                       // Eigenname
            if (bekanntBis(ohneArtikel(grund), l.nr) || bekanntBis(klein(grund), l.nr)) continue;
            neu.add(ohneArtikel(grund));
            continue;
          }
          if (gemeldet.has(form)) continue;
          gemeldet.add(form);
          if (lektionVon.has(form)) {
            fehler.push(`${l.id}, Text ${tid}: „${form}“ kommt erst in Lektion ${lektionVon.get(form)} (in woerter erklären oder ersetzen)`);
          } else {
            fehler.push(`${l.id}, Text ${tid}: „${form}“ hat keine Bedeutung (in woerter erklären oder einer Lektion zuordnen)`);
          }
        }
      }
      if (neu.size > MAX_NEU) {
        fehler.push(`${l.id}, Text ${tid}: ${neu.size} neue Wörter, erlaubt sind ${MAX_NEU} (${[...neu].join(', ')})`);
      }
    }

    // Hinweis: Wörter aus späteren Lektionen in den Grammatik-Übungen
    for (const kid of l.kapitel) {
      const kap = k.KAPITEL.find((x) => x.id === kid);
      if (!kap) continue;
      for (const u of kap.uebungen) {
        const satz = u.art === 'kacheln' ? u.it : u.satz.replace('___', u.loesung);
        for (const form of woerterIn(k, satz)) {
          if (k.GRUNDWOERTER[form]) continue;
          if (lektionVon.has(form) && lektionVon.get(form) > l.nr) {
            hinweise.push(`${l.id}, Kapitel ${kid}: „${form}“ kommt erst in Lektion ${lektionVon.get(form)} („${satz}“)`);
          }
        }
      }
    }
  }

  return { fehler, hinweise };
}

module.exports = { pruefeLektionen };

if (require.main === module) {
  const { laden } = require('./test/laden');
  const { fehler, hinweise } = pruefeLektionen(laden());
  for (const h of hinweise) console.log('Hinweis: ' + h);
  for (const f of fehler) console.log('FEHLER:  ' + f);
  console.log(`\n${fehler.length} Fehler, ${hinweise.length} Hinweise`);
  process.exitCode = fehler.length ? 1 : 0;
}
