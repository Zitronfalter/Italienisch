// Hören & Üben: Wortpaare zuordnen, Hören und eintippen (Diktat), Hören und Kacheln legen
//
// Eine Runde hat 5 Aufgaben: 1× Wortpaare, 2× Diktat, 2× Kacheln (gemischt).
// Die Sätze kommen aus den Grammatik-Übungen (mit deutscher Bedeutung)
// und aus den Lesetexten.

const Uebungen = (() => {
  function mischen(liste) {
    const a = [...liste];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ---------- Sätze zum Hören ----------

  let saetzeCache = null;

  function saetze() {
    if (saetzeCache) return saetzeCache;
    const liste = [];
    const woerter = (s) => s.replace(/[.,!?;:«»"]/g, ' ').split(/\s+/).filter(Boolean).length;

    // Aus den Grammatik-Übungen: mit deutscher Bedeutung
    for (const k of KAPITEL) {
      for (const u of k.uebungen) {
        const it = u.art === 'kacheln'
          ? u.it
          : u.satz.replace(/\s*\([^)]*\)\s*$/, '').replace('___', u.loesung);
        if (woerter(it) >= 3) liste.push({ it: it.charAt(0).toUpperCase() + it.slice(1), de: u.de, stufe: k.stufe });
      }
    }
    // Aus den Lesetexten (keine Rezept-Listen): kurze Sätze mit 3 bis 9 Wörtern
    for (const t of LESETEXTE) {
      for (const b of Lesen.bloecke(t.text)) {
        if (b.art !== 'p' || b.zeile.includes('«')) continue;   // Dialoge mit «…» auslassen
        const teile = b.zeile.replace(/[«»"]/g, '').split(/(?<=[.!?])\s+/);
        for (const s of teile) {
          const satz = s.replace(/^[–\s,]+/, '').replace(/,\s*$/, '.').trim();
          const n = woerter(satz);
          if (n >= 3 && n <= 9 && /[.!?]$/.test(satz)) liste.push({ it: satz, de: '', quelle: t.titel, stufe: t.stufe });
        }
      }
    }
    // Doppelte entfernen
    const gesehen = new Set();
    saetzeCache = liste.filter((s) => {
      const k = sauber(s.it);
      if (gesehen.has(k)) return false;
      gesehen.add(k);
      return true;
    });
    return saetzeCache;
  }

  // ---------- Vergleichen ----------

  function sauber(text) {
    return text
      .toLowerCase()
      .replace(/[’`´]/g, "'")
      .replace(/[.,!?;:«»"–]/g, ' ')
      .replace(/'\s+/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }
  function ohneAkzente(t) {
    return t.normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  // Diktat prüfen. Ergebnis: { stufe, falscheStellen: [Nummern der falschen Wörter im richtigen Satz] }
  function pruefeDiktat(eingabe, satz) {
    const e = sauber(eingabe);
    const r = sauber(satz);
    if (!e) return { stufe: 'falsch', falscheStellen: [] };
    if (e === r) return { stufe: 'richtig', falscheStellen: [] };
    const ew = ohneAkzente(e).split(' ');
    const rw = ohneAkzente(r).split(' ');
    const falsch = rw.map((w, i) => (ew[i] === w ? -1 : i)).filter((i) => i >= 0);
    if (ohneAkzente(e) === ohneAkzente(r)) return { stufe: 'fast', falscheStellen: [], hinweis: 'Achte auf die Akzente.' };
    return { stufe: 'falsch', falscheStellen: falsch };
  }

  // Kacheln: Wörter des Satzes + 2 falsche Wörter aus anderen Sätzen
  function kacheln(satz) {
    const eigene = satz.replace(/[.,!?;:«»"]/g, '').split(/\s+/).filter(Boolean);
    const klein = new Set(eigene.map((w) => w.toLowerCase()));
    const fremde = mischen(saetze())
      .flatMap((s) => s.it.replace(/[.,!?;:«»"]/g, '').split(/\s+/))
      .filter((w) => w.length > 2 && !klein.has(w.toLowerCase()));
    return mischen([...eigene, ...[...new Set(fremde)].slice(0, 2)]);
  }

  function pruefeKacheln(woerter, satz) {
    return sauber(woerter.join(' ')) === sauber(satz);
  }

  // ---------- Wortpaare ----------

  // 5 Paare aus deinem Karteikasten (am liebsten Wörter, die noch nicht sicher sitzen).
  // Sind noch zu wenige Wörter drin, kommen die ersten Wörter des Grundwortschatzes dazu.
  function paare(anzahl = 5) {
    const kurzDe = (de) => de.replace(/\s*\([^)]*\)/g, '').split(';')[0].trim();
    const karten = Object.entries(Speicher.daten.karten)
      .map(([id, k]) => ({ w: Vokabeln.wort(id), fach: k.fach }))
      .filter((x) => x.w)
      .sort((a, b) => a.fach - b.fach || Math.random() - 0.5)
      .map((x) => x.w);
    const kandidaten = [...mischen(karten.slice(0, 12)), ...WORTSCHATZ];
    const liste = [];
    const deSchon = new Set();
    for (const w of kandidaten) {
      const de = kurzDe(w.de);
      if (deSchon.has(de) || liste.some((x) => x.id === w.id)) continue;
      deSchon.add(de);
      liste.push({ id: w.id, it: w.it, de });
      if (liste.length === anzahl) break;
    }
    return liste;
  }

  // ---------- Eine Runde zusammenstellen ----------

  function runde() {
    const pool = mischen(saetze());
    const auswahl = pool.slice(0, 4);
    const aufgaben = [
      { art: 'paare', paare: paare() },
      { art: 'diktat', satz: auswahl[0] },
      { art: 'kacheln', satz: auswahl[1], kacheln: kacheln(auswahl[1].it) },
      { art: 'diktat', satz: auswahl[2] },
      { art: 'kacheln', satz: auswahl[3], kacheln: kacheln(auswahl[3].it) },
    ];
    return aufgaben;
  }

  // ---------- Fortschritt ----------

  function ergebnisSpeichern(richtig, von) {
    const f = Speicher.daten.fortschritt;
    f.hoeren = f.hoeren || { runden: 0 };
    f.hoeren.runden += 1;
    f.hoeren.zuletzt = { datum: Vokabeln.heute(), richtig, von };
    Speicher.speichern();
  }

  function anzahlRunden() {
    return (Speicher.daten.fortschritt.hoeren || {}).runden || 0;
  }

  return { saetze, runde, pruefeDiktat, pruefeKacheln, kacheln, paare, sauber, ergebnisSpeichern, anzahlRunden };
})();
