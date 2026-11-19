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
        if (woerter(it) >= 3) liste.push({ it: it.charAt(0).toUpperCase() + it.slice(1), de: u.de, stufe: k.stufe, kapitel: k.id });
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
          if (n >= 3 && n <= 9 && /[.!?]$/.test(satz)) liste.push({ it: satz, de: (t.uebersetzung || {})[satz] || '', quelle: t.titel, stufe: t.stufe, text: t.id });
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

  // Diktat prüfen. Ergebnis: { stufe, falscheStellen: [Nummern der falschen Wörter im richtigen Satz] }
  // Wort für Wort mit Tippfehler-Nachsicht (tippfehler.js): vertippte Wörter zählen und werden markiert,
  // mehr als 2 vertippte Wörter oder ein echtes anderes Wort → falsch.
  function pruefeDiktat(eingabe, satz) {
    return Tippfehler.pruefeSatz(eingabe, satz);
  }

  // Kacheln: Wörter des Satzes + 2 falsche Wörter aus anderen Sätzen
  // vorrat: Sätze, aus denen die falschen Wörter kommen (am besten nur Bekanntes)
  function kacheln(satz, vorrat = null) {
    const eigene = satz.replace(/[.,!?;:«»"]/g, '').split(/\s+/).filter(Boolean);
    const klein = new Set(eigene.map((w) => w.toLowerCase()));
    const grenze = Lektionen.aktuelle();
    const fremde = mischen(vorrat || saetze().filter((x) => !grenze || bekanntBis(x, grenze.nr)))
      .flatMap((s) => s.it.replace(/[.,!?;:«»"]/g, '').split(/\s+/))
      .filter((w) => w.length > 2 && !klein.has(w.toLowerCase()));
    return mischen([...eigene, ...[...new Set(fremde)].slice(0, 2)]);
  }

  function pruefeKacheln(woerter, satz) {
    return sauber(woerter.join(' ')) === sauber(satz);
  }

  // ---------- Wortpaare ----------

  // 5 Paare aus deinem Karteikasten – am liebsten Wörter, die lange nicht dran waren.
  // Sind noch zu wenige Wörter drin, kommen die ersten Wörter des Grundwortschatzes dazu.
  // ids: nur diese Wörter verwenden (z. B. die Wörter einer Lektion)
  function paare(anzahl = 5, ids = null) {
    const kurzDe = (de) => de.replace(/\s*\([^)]*\)/g, '').split(';')[0].trim();
    const gelernt = Object.entries(Speicher.daten.karten)
      .filter(([id, k]) => !Vokabeln.istJung(k) && Vokabeln.wort(id))
      .map(([id]) => id);
    const karten = ids ? mischen(ids.map((id) => Vokabeln.wort(id)).filter(Boolean))
      : Vokabeln.langeNichtGesehen(gelernt, 12).map((id) => Vokabeln.wort(id));
    const kandidaten = ids ? karten : [...karten, ...WORTSCHATZ];
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

  // Wörter der Lektionen: Wort (klein, ohne Artikel) → Nummer der Lektion, in der es neu ist
  let lektionVonCache = null;
  function lektionVonWort() {
    if (lektionVonCache) return lektionVonCache;
    lektionVonCache = new Map();
    const klein = (t) => t.toLowerCase().replace(/’/g, "'");
    for (const l of [...Lektionen.alle()].sort((a, b) => a.nr - b.nr)) {
      for (const it of l.woerter) {
        const formen = [
          klein(it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, ''),
          ...klein(it).split(/[\s']+/).filter((t) => t.length > 1 && !GRUNDWOERTER[t]),
        ];
        for (const f of formen) if (!lektionVonCache.has(f)) lektionVonCache.set(f, l.nr);
      }
    }
    return lektionVonCache;
  }

  // Passt der Satz zum Stand bis Lektion nr? (kein Wort aus einer späteren Lektion –
  // außer Nicole kennt es schon aus Duolingo, siehe schon-bekannt.js)
  function bekanntBis(satz, nr) {
    const von = lektionVonWort();
    return satz.it.toLowerCase().replace(/[.,!?;:«»"–]/g, ' ').split(/\s+/).filter(Boolean)
      .every((w) => !von.has(w) || von.get(w) <= nr || SchonBekannt.wortBekannt(w));
  }

  // optionen.lektion: nur Sätze aus Kapiteln und Texten dieser und früherer Lektionen,
  // Wortpaare aus den Wörtern der Lektion. Ungelöste Sätze kommen zuerst.
  // Ohne Lektion (Frei üben): Stand der aktuellen Lektion – nie Zeitformen oder Wörter aus späteren Lektionen.
  // Alle Sätze, die zum Stand passen (bis zur Lektion bzw. zur aktuellen Lektion)
  function passendeSaetze(optionen = {}) {
    let pool = saetze();
    const grenze = optionen.lektion || Lektionen.aktuelle();
    if (grenze) {
      const bis = Lektionen.alle().filter((x) => x.nr <= grenze.nr);
      const kap = new Set(bis.flatMap((x) => [...x.kapitel, ...(x.uebenKapitel || [])]));
      const tx = new Set(bis.flatMap((x) => x.texte));
      const dazu = pool.filter((x) => kap.has(x.kapitel) || tx.has(x.text));
      const passend = dazu.filter((x) => bekanntBis(x, grenze.nr));
      pool = passend.length >= 4 ? passend : dazu.length >= 4 ? dazu : pool.filter((x) => x.stufe === 'A1');
    }
    return pool;
  }

  // Passende Sätze ohne die, die heute schon richtig gehört wurden
  function frischeSaetze(optionen = {}) {
    return passendeSaetze(optionen).filter((x) => !Wiederholung.heuteGeloest({ art: 'hoeren', satz: x }));
  }

  // Eine Runde: Wortpaare + bis zu 4 Satz-Aufgaben (Diktat / Kacheln im Wechsel).
  // Heute schon richtig gelöste Sätze kommen nicht noch einmal – sind keine mehr da, bleiben nur die Wortpaare.
  function runde(optionen = {}) {
    const pool = passendeSaetze(optionen);
    const l = optionen.lektion;
    const paarListe = l && l.wortIds.length >= 3 ? paare(5, l.wortIds) : null;
    const geloest = new Set(((Speicher.daten.fortschritt.hoeren || {}).geloest) || []);
    // Zuerst Sätze aus dem Text dieser Lektion, dann aus den Lektionen davor; ungelöste vor gelösten
    const eigen = new Set((l && l.texte) || []);
    const reihe = (liste) => [
      ...mischen(liste.filter((x) => eigen.has(x.text))),
      ...mischen(liste.filter((x) => !eigen.has(x.text))),
    ];
    // Leise (oder keine Sprachausgabe): nur Sätze mit deutscher Bedeutung, alle als Kacheln
    const leise = optionen.leise !== undefined ? optionen.leise : !Lesen.kannSprechen;
    const frisch = frischeSaetze(optionen).filter((x) => !leise || x.de);
    const auswahl = [
      ...reihe(frisch.filter((x) => !geloest.has(sauber(x.it)))),
      ...reihe(frisch.filter((x) => geloest.has(sauber(x.it)))),
    ].slice(0, 4);
    const aufgaben = [{ art: 'paare', paare: paarListe || paare() }];
    auswahl.forEach((satz, i) => {
      aufgaben.push(i % 2 === 0 && !leise
        ? { art: 'diktat', satz }
        : { art: 'kacheln', satz, kacheln: kacheln(satz.it, pool) });
    });
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

  // Auf Anhieb richtig gehörter Satz: kommt in neuen Runden erst wieder, wenn alle anderen dran waren
  function satzGeloest(satz) {
    const f = Speicher.daten.fortschritt;
    f.hoeren = f.hoeren || { runden: 0 };
    f.hoeren.geloest = f.hoeren.geloest || [];
    const kurz = sauber(satz.it);
    if (!f.hoeren.geloest.includes(kurz)) f.hoeren.geloest.push(kurz);
    Speicher.speichern();
  }

  function anzahlRunden() {
    return (Speicher.daten.fortschritt.hoeren || {}).runden || 0;
  }

  return { saetze, runde, frischeSaetze, satzGeloest, pruefeDiktat, pruefeKacheln, kacheln, paare, sauber, ergebnisSpeichern, anzahlRunden };
})();
