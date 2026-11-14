// Vokabeln: Karteikasten (verteilte Wiederholung) und Prüfen der Antwort

const Vokabeln = (() => {
  // Karteikasten mit 5 Fächern. Richtig → ein Fach weiter, falsch → zurück in Fach 1.
  // Tage bis zur nächsten Abfrage, je nach Fach:
  const ABSTAND = { 1: 1, 2: 3, 3: 7, 4: 16, 5: 35 };
  const SICHER_AB_FACH = 4;          // ab Fach 4 gilt ein Wort als „sitzt“
  const MAX_FAELLIG = 20;            // höchstens so viele Wiederholungen pro Runde
  const MAX_NEU = 5;                 // höchstens so viele neue Wörter pro Runde

  // ---------- Datum (Ortszeit, als Text JJJJ-MM-TT) ----------

  function datumText(d) {
    const j = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const t = String(d.getDate()).padStart(2, '0');
    return `${j}-${m}-${t}`;
  }
  function heute() { return datumText(new Date()); }
  function inTagen(n) {
    const d = new Date();
    d.setDate(d.getDate() + n);
    return datumText(d);
  }

  // ---------- Karten ----------

  function karten() { return Speicher.daten.karten; }

  // Wort aus dem Grundwortschatz – oder ein eigenes Wort (z. B. aus einem Text übernommen)
  function wort(id) {
    const w = WORTSCHATZ.find((x) => x.id === id);
    if (w) return w;
    const e = (Speicher.daten.eigeneWoerter || {})[id];
    return e ? { id, it: e.it, de: e.de, auch: e.auch } : undefined;
  }

  function faellige() {
    const h = heute();
    return Object.entries(karten())
      .filter(([id, k]) => k.faellig <= h && wort(id))
      .sort((a, b) => a[1].faellig.localeCompare(b[1].faellig) || a[1].fach - b[1].fach)
      .map(([id]) => id);
  }

  // Neue Wörter kommen nur aus der aktuellen Lektion (siehe lektionen.js)
  function neue() {
    return Lektionen.neueWoerter();
  }

  function anzahlSicher() {
    return Object.values(karten()).filter((k) => k.fach >= SICHER_AB_FACH).length;
  }

  // ---------- Kennenlernen ----------
  //
  // Neue Wörter werden nicht gleich zum Schreiben abgefragt. Erst lernst du sie
  // kennen: lesen und hören, Wortpaare zuordnen, aus Kacheln wählen, nach Gehör wählen.
  // Jede gelöste Aufgabe zählt 1 Punkt („kennen“). Ab KENNEN_FERTIG kommt das Wort
  // ins Schreiben (Karteikasten Fach 1, ab dem nächsten Tag).
  const KENNEN_FERTIG = 4;

  // Karten ohne „kennen“ stammen aus der Zeit vor dieser Regel und gelten als bekannt.
  function istJung(k) { return k && typeof k.kennen === 'number' && k.kennen < KENNEN_FERTIG; }

  function jungeWoerter() {
    return Object.entries(karten())
      .filter(([id, k]) => istJung(k) && wort(id))
      .map(([id]) => id);
  }

  function kennenGelernt(id) {
    const k = karten()[id];
    if (!istJung(k)) return;
    k.kennen += 1;
    if (k.kennen >= KENNEN_FERTIG) {
      k.fach = 1;
      k.faellig = inTagen(1);           // geschrieben wird erst ab morgen
    }
    Speicher.speichern();
  }

  function anzahlJung() { return jungeWoerter().length; }

  // Liste für eine Runde: fällige Wörter zum Schreiben, junge Wörter zum Kennenlernen,
  // dann (wenn Platz) ein paar neue.
  function rundeZusammenstellen() {
    const h = heute();
    const wiederholen = faellige().filter((id) => !istJung(karten()[id])).slice(0, MAX_FAELLIG);
    const jung = jungeWoerter().slice(0, 10);
    const platz = Math.max(0, MAX_NEU - Math.floor(wiederholen.length / 4) - Math.floor(jung.length / 2));
    const neu = neue().slice(0, platz);
    return { wiederholen, jung, neu, heute: h };
  }

  // Ein neues Wort kommt in den Karteikasten – erst zum Kennenlernen.
  function aufnehmen(id) {
    if (!karten()[id]) {
      karten()[id] = { fach: 1, faellig: heute(), richtig: 0, falsch: 0, kennen: 0 };
      Speicher.speichern();
    }
  }

  // Ergebnis eintragen. Nur die erste Antwort pro Runde zählt für das Fach.
  function eintragen(id, gewusst) {
    const k = karten()[id] || { fach: 1, faellig: heute(), richtig: 0, falsch: 0 };
    if (gewusst) {
      k.fach = Math.min(5, k.fach + 1);
      k.richtig += 1;
    } else {
      k.fach = 1;
      k.falsch += 1;
    }
    k.faellig = inTagen(ABSTAND[k.fach]);
    k.zuletzt = heute();
    karten()[id] = k;
    Speicher.speichern();
  }

  // ---------- Antwort prüfen ----------

  const ARTIKEL = ['il', 'lo', 'la', 'i', 'gli', 'le', "l'", 'un', 'uno', 'una', "un'"];

  // Kleinschreibung, gerade Apostrophe, keine doppelten Leerzeichen, kein Satzzeichen am Ende
  function sauber(text) {
    return text
      .toLowerCase()
      .replace(/[’`´]/g, "'")
      .replace(/'\s+/g, "'")
      .replace(/\s+/g, ' ')
      .replace(/[.!?,;:]+$/, '')
      .trim();
  }

  function ohneAkzente(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  // "la casa" → { artikel: 'la', rest: 'casa' }, "l'acqua" → { artikel: "l'", rest: 'acqua' }
  function zerlegen(text) {
    for (const a of ARTIKEL) {
      if (a.endsWith("'") && text.startsWith(a)) return { artikel: a, rest: text.slice(a.length) };
      if (text.startsWith(a + ' ')) return { artikel: a, rest: text.slice(a.length + 1) };
    }
    return { artikel: '', rest: text };
  }

  // Unterschied zwischen zwei Wörtern in Buchstaben (für Tippfehler)
  function abstand(a, b) {
    const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
    for (let j = 1; j <= b.length; j++) d[0][j] = j;
    for (let i = 1; i <= a.length; i++) {
      for (let j = 1; j <= b.length; j++) {
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
      }
    }
    return d[a.length][b.length];
  }

  // Ergebnis: { stufe: 'richtig' | 'fast' | 'falsch', hinweis }
  // „fast“ zählt als gewusst, zeigt aber die genaue Schreibweise.
  // streng: kein Tippfehler-Bonus und kein „Artikel vergessen“ (für Grammatik-Übungen)
  function pruefeEine(eingabe, loesung, streng = false) {
    const e = sauber(eingabe);
    const l = sauber(loesung);
    if (!e) return { stufe: 'falsch', hinweis: '' };
    if (e === l) return { stufe: 'richtig', hinweis: '' };

    const eo = ohneAkzente(e);
    const lo = ohneAkzente(l);
    if (eo === lo) return { stufe: 'fast', hinweis: 'Achte auf den Akzent.' };
    if (streng) return { stufe: 'falsch', hinweis: '' };

    const ez = zerlegen(eo);
    const lz = zerlegen(lo);
    if (lz.artikel && !ez.artikel && ez.rest === lz.rest) {
      return { stufe: 'fast', hinweis: 'Lerne das Wort mit Artikel.' };
    }
    if (lz.artikel && ez.artikel && ez.artikel !== lz.artikel && ez.rest === lz.rest) {
      return { stufe: 'falsch', hinweis: 'Das Wort stimmt, aber der Artikel nicht.' };
    }
    const vergleichE = lz.artikel && !ez.artikel ? ez.rest : eo;
    const vergleichL = lz.artikel && !ez.artikel ? lz.rest : lo;
    // Tippfehler nur bei längeren Wörtern (ab 5 Buchstaben ohne Artikel) verzeihen
    if (lz.rest.length >= 5 && abstand(vergleichE, vergleichL) === 1) {
      return { stufe: 'fast', hinweis: 'Kleiner Tippfehler.' };
    }
    return { stufe: 'falsch', hinweis: '' };
  }

  function pruefe(eingabe, w, optionen = {}) {
    const loesungen = [w.it, ...(w.auch || [])];
    const rang = { richtig: 0, fast: 1, falsch: 2 };
    let bestes = { stufe: 'falsch', hinweis: '' };
    for (const l of loesungen) {
      const r = pruefeEine(eingabe, l, optionen.streng);
      if (rang[r.stufe] < rang[bestes.stufe] || (r.stufe === bestes.stufe && !bestes.hinweis)) bestes = r;
    }
    return bestes;
  }

  return {
    wort,
    faellige,
    neue,
    anzahlSicher,
    anzahlJung,
    istJung,
    kennenGelernt,
    KENNEN_FERTIG,
    rundeZusammenstellen,
    aufnehmen,
    eintragen,
    pruefe,
    heute,
    inTagen,
  };
})();
