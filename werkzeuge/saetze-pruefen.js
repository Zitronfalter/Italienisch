// Prüft die Sätze zu neuen Wörtern (SAETZE in saetze-a1.js):
// Hat jedes Lektionswort genug Sätze? Kennt man jedes Wort im Satz schon?
//
// Aufruf:  node werkzeuge/saetze-pruefen.js
// Ergebnis: Liste von Fehlern und Hinweisen; Rückgabewert 1, wenn es Fehler gibt.
//
// Ein Wort im Satz ist bekannt, wenn es
//  - ein Grundwort ist (GRUNDWOERTER),
//  - aus einer früheren Lektion stammt,
//  - ein Wort dieser Lektion ist, das in der SAETZE-Liste vorher oder an dieser Stelle steht,
//  - über `formen` oder Woerterbuch.kandidaten() eine Form eines solchen Worts ist (bevo → bere),
//  - ein Eigenname ist (Großbuchstabe, nicht am Satzanfang).
// Groß-/Kleinschreibung zählt sonst nicht (Satzanfang „Grazie“ = „grazie“).

const { lektionVonTabelle, formenVon, klein, ohneArtikel } = require('./lektionen-pruefen');

const MIN_SAETZE = 3;

// Wörter im Satz mit Merker, ob sie am Satzanfang stehen
function woerterMitAnfang(k, satz) {
  const liste = [];
  let anfang = true;
  for (const s of k.Lesen.stuecke(satz)) {
    if (!s.wort) {
      if (/[.!?:–«»"]/.test(s.text)) anfang = true;
      continue;
    }
    liste.push({ text: s.text, form: klein(s.text), anfang });
    anfang = false;
  }
  return liste;
}

function pruefeSaetze(k) {
  const fehler = [];
  const hinweise = [];
  const lektionVon = lektionVonTabelle(k);
  const gesehen = new Map();   // Satz → Lektions-ID

  for (const [lid, liste] of Object.entries(k.SAETZE)) {
    const l = k.LEKTIONEN.find((x) => x.id === lid);
    if (!l) {
      fehler.push(`SAETZE.${lid}: Lektion gibt es nicht`);
      continue;
    }

    // Wörter dieser Lektion: Form → Stelle in der SAETZE-Liste
    const hier = new Map();
    const eintraege = new Map();
    liste.forEach((e, i) => {
      if (!l.woerter.includes(e.wort)) fehler.push(`${lid}: „${e.wort}“ ist kein Wort dieser Lektion`);
      if (eintraege.has(e.wort)) fehler.push(`${lid}: „${e.wort}“ steht doppelt in SAETZE`);
      eintraege.set(e.wort, e);
      for (const form of formenVon(k, e.wort)) if (!hier.has(form)) hier.set(form, i);
    });
    for (const wort of l.woerter) {
      if (!eintraege.has(wort)) fehler.push(`${lid}: „${wort}“ hat keine Sätze`);
    }

    liste.forEach((e, stelle) => {
      const saetze = e.saetze || [];
      if (saetze.length < MIN_SAETZE) fehler.push(`${lid}: „${e.wort}“ hat nur ${saetze.length} Sätze (mindestens ${MIN_SAETZE})`);

      const ok = (form) => Boolean(k.GRUNDWOERTER[form])
        || (lektionVon.has(form) && lektionVon.get(form) < l.nr)
        || (hier.has(form) && hier.get(form) <= stelle);

      for (const s of saetze) {
        const formen = s.formen || {};
        if (!s.de || !s.de.trim()) fehler.push(`${lid}: „${s.it}“ hat kein Deutsch`);
        if (gesehen.has(s.it)) fehler.push(`${lid}: Satz „${s.it}“ gibt es schon (${gesehen.get(s.it)})`);
        gesehen.set(s.it, lid);

        const ziel = s.form || ohneArtikel(e.wort);
        // ganze Wörter, Groß/klein und Satzzeichen egal – dieselbe Regel wie in saetze.js
        if (!k.Saetze.fundstelle(s.it, ziel)) fehler.push(`${lid}: „${ziel}“ steht nicht im Satz „${s.it}“`);

        for (const w of woerterMitAnfang(k, s.it)) {
          if (ok(w.form)) continue;
          if (!w.anfang && /^\p{Lu}/u.test(w.text)) continue;          // Eigenname
          if (formen[w.form] && ok(formen[w.form])) continue;
          const grund = k.Woerterbuch.kandidaten(w.form).find(ok);
          if (grund) {
            hinweise.push(`${lid}: „${w.form}“ gilt als Form von „${grund}“ („${s.it}“)`);
            continue;
          }
          const spaeter = lektionVon.has(w.form) ? ` (kommt erst in Lektion ${lektionVon.get(w.form)})`
            : hier.has(w.form) ? ' (Wort dieser Lektion, steht in SAETZE erst später)' : '';
          fehler.push(`${lid}: „${w.form}“ ist noch unbekannt${spaeter} – Satz „${s.it}“`);
        }
      }
    });
  }

  return { fehler, hinweise };
}

module.exports = { pruefeSaetze };

if (require.main === module) {
  const { laden } = require('./test/laden');
  const { fehler, hinweise } = pruefeSaetze(laden());
  for (const h of hinweise) console.log('Hinweis: ' + h);
  for (const f of fehler) console.log('FEHLER:  ' + f);
  console.log(`\n${fehler.length} Fehler, ${hinweise.length} Hinweise`);
  process.exitCode = fehler.length ? 1 : 0;
}
