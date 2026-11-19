// Tippfehler-Nachsicht: Ist ein falsch getipptes Wort nur vertippt – oder wirklich falsch?
//
// Durchwinken (genau EIN Fehlerchen): Nachbartaste auf der iPhone-Tastatur, zwei Buchstaben
// vertauscht, ein Buchstabe zu viel oder vergessen (nur ab 4 Buchstaben), Akzent vergessen.
// Streng: anderes echtes Wort oder andere Form (grazia, mangiano, e statt è), anderer Endvokal
// (-o/-a/-i/-e), mehr als ein Fehlerchen, kurze Wörter (il/lo, di/da).
// Benutzt von Vokabeln (Schreiben, Grammatik- und Satz-Lücken) und Uebungen (Diktat).
// Entwurf: docs/superpowers/specs/2026-11-19-tippfehler-design.md

const Tippfehler = (() => {
  // ---------- Tastatur ----------

  const TASTATUREN = [
    ['qwertzuiop', 'asdfghjkl', 'yxcvbnm'],   // deutsch
    ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'],   // italienisch / englisch
  ];
  const NACHBARN = new Map();
  for (const reihen of TASTATUREN) {
    reihen.forEach((reihe, r) => {
      [...reihe].forEach((z, i) => {
        if (!NACHBARN.has(z)) NACHBARN.set(z, new Set());
        const set = NACHBARN.get(z);
        for (const rr of [r - 1, r, r + 1]) {
          const andere = reihen[rr];
          if (!andere) continue;
          for (const ii of [i - 1, i, i + 1]) if (andere[ii] && andere[ii] !== z) set.add(andere[ii]);
        }
      });
    });
  }
  const nachbar = (a, b) => Boolean(a && b && NACHBARN.has(a) && NACHBARN.get(a).has(b));

  // ---------- Hilfen ----------

  const klein = (t) => String(t || '').normalize('NFC').toLowerCase().replace(/[’`´]/g, "'").trim();
  const ohneAkzente = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '');
  const VOKALE = 'aeiou';

  // Genau eine Änderung auf den echten Zeichen? → Art oder null
  function eineAenderung(e, l) {
    if (e.length === l.length) {
      const stellen = [];
      for (let i = 0; i < l.length; i++) if (e[i] !== l[i]) stellen.push(i);
      if (stellen.length === 1) return nachbar(e[stellen[0]], l[stellen[0]]) ? 'nachbar' : null;
      const [a, b] = stellen;
      if (stellen.length === 2 && b === a + 1 && e[a] === l[b] && e[b] === l[a]) return 'verdreht';
      return null;
    }
    if (e.length === l.length + 1) {                 // ein Buchstabe zu viel
      let i = 0;
      while (i < l.length && e[i] === l[i]) i++;
      if (e.slice(i + 1) !== l.slice(i)) return null;
      const z = e[i];
      return z === e[i - 1] || z === e[i + 1] || nachbar(z, e[i - 1]) || nachbar(z, e[i + 1]) ? 'doppelt' : null;
    }
    if (e.length === l.length - 1) {                 // ein Buchstabe vergessen
      let i = 0;
      while (i < e.length && e[i] === l[i]) i++;
      return e.slice(i) === l.slice(i + 1) ? 'vergessen' : null;
    }
    return null;
  }

  // Genau ein Fehlerchen zwischen getippt und richtig (beide klein)? → Art oder null
  function fehlerchen(getippt, richtig) {
    const e = klein(getippt), l = klein(richtig);
    if (e === l) return null;
    const ea = ohneAkzente(e), la = ohneAkzente(l);
    if (ea === la) {
      if (e.length !== l.length) return null;
      let n = 0;
      for (let i = 0; i < l.length; i++) if (e[i] !== l[i]) n++;
      return n === 1 ? 'akzent' : null;
    }
    if (la.length < 4) return null;
    return eineAenderung(e, l);                       // Akzent + noch etwas = zwei Fehlerchen → null
  }

  // ---------- Ist das Getippte ein anderes echtes Wort? ----------

  let wortschatzCache = null;
  function wortschatz() {
    if (wortschatzCache) return wortschatzCache;
    wortschatzCache = new Map();
    if (typeof WORTSCHATZ !== 'undefined') {
      for (const w of WORTSCHATZ) {
        const it = klein(w.it);
        const rest = it.replace(/^(il|lo|la|i|gli|le|un|uno|una) /, '').replace(/^(l|un)'/, '');
        for (const k of new Set([it, rest])) if (!wortschatzCache.has(k)) wortschatzCache.set(k, w.de);
      }
    }
    return wortschatzCache;
  }

  const kurz = (de) => String(de || '').split(/;\s*/).slice(0, 2).join(', ');

  // { bedeutung } bzw. { form: Grundform } (andere Form desselben Worts) oder null
  function anderesWort(x, l) {
    if (!x || x === l) return null;
    if (typeof GRUNDWOERTER !== 'undefined' && GRUNDWOERTER[x]) return { bedeutung: kurz(GRUNDWOERTER[x][1]) };
    if (wortschatz().has(x)) return { bedeutung: kurz(wortschatz().get(x)) };
    if (typeof Woerterbuch !== 'undefined' && Woerterbuch.bereit()) {
      const s = Woerterbuch.suche(x);
      if (s && !s.vermutlich) return { bedeutung: kurz(s.bedeutung) };
      // Erratene Formen sind unsicher (perche → „perca“?) – nur, wenn sie zum selben Wort wie die Lösung gehören
      if (s) {
        const sl = Woerterbuch.suche(l);
        if (sl && sl.grundform === s.grundform) return { form: s.grundform };
      }
    }
    return null;
  }

  // ---------- Prüfen ----------

  // { stufe: 'richtig' | 'tippfehler' | 'anderesWort' | 'falsch', art?, wort?, bedeutung? }
  function pruefeWort(getippt, richtig) {
    const e = klein(getippt), l = klein(richtig);
    if (e === l) return { stufe: 'richtig' };
    // Ein echtes anderes Wort ist nie nur vertippt – und der Hinweis hilft auch sonst (grazia, aveva)
    const anders = anderesWort(e, l);
    if (anders) return { stufe: 'anderesWort', wort: e, bedeutung: anders.bedeutung, form: anders.form };
    const art = fehlerchen(e, l);
    if (!art) return { stufe: 'falsch' };
    const ea = ohneAkzente(e), la = ohneAkzente(l);
    const ende = ea[ea.length - 1], endeL = la[la.length - 1];
    if (VOKALE.includes(ende) && VOKALE.includes(endeL) && ende !== endeL) return { stufe: 'falsch' };   // Endung = Grammatik
    return { stufe: 'tippfehler', art };
  }

  // Satz bereinigen wie beim Diktat: klein, gerade Apostrophe, ohne Satzzeichen
  function sauber(text) {
    return klein(text)
      .replace(/[.,!?;:«»"–]/g, ' ')
      .replace(/'\s+/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Hinweis zu einem anderen Wort (für Vokabeln und Sätze)
  const hinweisAnders = (r) => (r.form
    ? `„${r.wort}“ ist eine andere Form von „${r.form}“.`
    : `„${r.wort}“ ist ein anderes Wort${r.bedeutung ? ` (${r.bedeutung})` : ''}.`);

  // Ganzer Satz (Diktat) oder mehrteilige Lösung: Wort für Wort.
  // { stufe: 'richtig' | 'fast' | 'falsch', falscheStellen, hinweis }
  function pruefeSatz(getippt, richtig) {
    const e = sauber(getippt), r = sauber(richtig);
    if (!e) return { stufe: 'falsch', falscheStellen: [], hinweis: '' };
    if (e === r) return { stufe: 'richtig', falscheStellen: [], hinweis: '' };
    const ew = e.split(' '), rw = r.split(' ');
    if (ew.length !== rw.length) {
      const stellen = rw.map((w, i) => (ew[i] && ohneAkzente(ew[i]) === ohneAkzente(w) ? -1 : i)).filter((i) => i >= 0);
      return { stufe: 'falsch', falscheStellen: stellen, hinweis: '' };
    }
    const ergebnisse = rw.map((w, i) => pruefeWort(ew[i], w));
    const stellen = (f) => ergebnisse.map((x, i) => (f(x) ? i : -1)).filter((i) => i >= 0);
    const falsch = stellen((x) => x.stufe === 'falsch' || x.stufe === 'anderesWort');
    if (falsch.length) {
      const anders = ergebnisse.find((x) => x.stufe === 'anderesWort');
      return { stufe: 'falsch', falscheStellen: falsch, hinweis: anders ? hinweisAnders(anders) : '' };
    }
    const tipp = stellen((x) => x.stufe === 'tippfehler');
    if (tipp.length > 2) return { stufe: 'falsch', falscheStellen: tipp, hinweis: '' };
    const nurAkzente = tipp.every((i) => ergebnisse[i].art === 'akzent');
    const hinweis = nurAkzente ? 'Achte auf die Akzente.' : tipp.length > 1 ? 'Kleine Tippfehler.' : 'Kleiner Tippfehler.';
    return { stufe: 'fast', falscheStellen: tipp, hinweis };
  }

  return { fehlerchen, pruefeWort, pruefeSatz, hinweisAnders, nachbar };
})();
