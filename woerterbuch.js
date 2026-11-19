// Wörterbuch Italienisch–Deutsch (offline)
//
// Daten: WikDict (https://www.wikdict.com), aus Wiktionary, Lizenz CC BY-SA.
// Die Datei woerterbuch.json wird mit werkzeuge/woerterbuch-bauen.js erzeugt.
// Sie wird beim Start im Hintergrund geladen; bis dahin gibt es nur den Grundwortschatz.

const Woerterbuch = (() => {
  let daten = null;           // { 'mangiare': 'essen; …', … }
  let laedt = null;

  function laden() {
    if (!laedt) {
      laedt = fetch('woerterbuch.json')
        .then((antwort) => antwort.json())
        .then((json) => { daten = json; return true; })
        .catch((fehler) => { console.warn('Wörterbuch nicht geladen:', fehler); laedt = null; return false; });
    }
    return laedt;
  }

  function bereit() { return Boolean(daten); }

  // ---------- Formen erkennen ----------
  //
  // Im Wörterbuch stehen nur Grundformen (mangiare, pomodoro, bello).
  // Für Formen im Text (mangio, pomodori, bella) raten wir die Grundform.

  const REGELN = [
    // Verben: Vergangenheit (Partizip)
    [/at[oaie]$/, ['are']], [/ut[oaie]$/, ['ere']], [/it[oaie]$/, ['ire']],
    // Verben mit „sich“
    [/arsi$/, ['are']], [/ersi$/, ['ere']], [/irsi$/, ['ire']],
    // Verben: Gegenwart und Befehlsform
    [/isc[oie]$|iscono$/, ['ire']],
    [/iamo$/, ['are', 'ere', 'ire']], [/ate$/, ['are']], [/ete$/, ['ere']], [/ite$/, ['ire']],
    [/ano$/, ['are']], [/ono$/, ['ere', 'ire']],
    [/o$/, ['are', 'ere', 'ire']], [/i$/, ['are', 'ere', 'ire']], [/a$/, ['are']], [/e$/, ['ere', 'ire']],
  ];

  // Nomen und Adjektive: Mehrzahl und weibliche Form
  const NOMEN = [
    [/chi$/, ['co']], [/ghi$/, ['go']], [/che$/, ['ca']], [/ghe$/, ['ga']],
    [/i$/, ['o', 'e']], [/e$/, ['a']], [/a$/, ['o']],
    [/mente$/, ['o', 'e', '']],     // velocemente → veloce
  ];

  function kandidaten(form) {
    const liste = [];
    // Partizip zuerst (arrivati → arrivare, nicht arrivato)
    for (const [muster, enden] of REGELN.slice(0, 3)) {
      if (muster.test(form)) for (const e of enden) liste.push(form.replace(muster, e));
    }
    for (const [muster, enden] of NOMEN) {
      if (muster.test(form)) for (const e of enden) liste.push(form.replace(muster, e));
    }
    for (const [muster, enden] of REGELN) {
      if (!muster.test(form)) continue;
      const stamm = form.replace(muster, '');
      if (stamm.length < 2) continue;
      for (const e of enden) liste.push(stamm + e);
      // mangiamo → mangi-are (bei Verben auf -iare bleibt das i: mangiare, studiare)
      if (String(muster) === String(/iamo$/)) for (const e of enden) liste.push(stamm + 'i' + e);
      // mangi-o → mangi-are; aber auch cerc-hi → cerc-are (cerchi → cercare)
      if (stamm.endsWith('h')) for (const e of enden) liste.push(stamm.slice(0, -1) + e);
    }
    return [...new Set(liste)].filter((k) => k !== form);
  }

  // Ergebnis: { grundform, bedeutung, vermutlich } oder null
  function suche(wort) {
    if (!daten) return null;
    const form = wort.toLowerCase().replace(/’/g, "'").replace(/'$/, '');
    if (daten[form]) return { grundform: form, bedeutung: daten[form], vermutlich: false };
    for (const k of kandidaten(form)) {
      if (daten[k]) return { grundform: k, bedeutung: daten[k], vermutlich: true };
    }
    return null;
  }

  // ---------- Suchen (für die Wörterbuch-Seite) ----------

  function ohneAkzente(t) {
    return t.normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  // Sucht in beiden Richtungen. Gibt bis zu `max` Treffer: [{ it, de }]
  function finde(text, max = 30) {
    if (!daten) return [];
    const s = ohneAkzente(text.trim().toLowerCase());
    if (s.length < 2) return [];
    const genau = [], anfang = [], deutsch = [];
    const wortGrenze = new RegExp('(^|[ ;(])' + s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[ ;),])', 'i');
    for (const [it, de] of Object.entries(daten)) {
      const itS = ohneAkzente(it);
      if (itS === s) genau.push({ it, de });
      else if (itS.startsWith(s) && anfang.length < max) anfang.push({ it, de });
      else if (wortGrenze.test(ohneAkzente(de.toLowerCase()))) {
        // Treffer als erste Bedeutung zählen mehr als weiter hinten
        const stelle = ohneAkzente(de.toLowerCase()).split('; ').findIndex((b) => wortGrenze.test(b));
        deutsch.push({ it, de, stelle });
      }
    }
    anfang.sort((a, b) => a.it.length - b.it.length);
    deutsch.sort((a, b) => a.stelle - b.stelle || a.it.length - b.it.length);
    return [...genau, ...anfang, ...deutsch].slice(0, max);
  }

  function anzahl() { return daten ? Object.keys(daten).length : 0; }

  return { laden, bereit, suche, finde, anzahl, kandidaten };
})();
