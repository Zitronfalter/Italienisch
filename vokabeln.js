// Vokabeln: Karteikasten (verteilte Wiederholung) und Prüfen der Antwort

const Vokabeln = (() => {
  // Karteikasten mit 5 Fächern. Richtig → ein Fach weiter, falsch → zurück in Fach 1.
  // Tage bis zur nächsten Abfrage, je nach Fach:
  const ABSTAND = { 1: 1, 2: 3, 3: 7, 4: 16, 5: 35 };
  const SICHER_AB_FACH = 4;          // ab Fach 4 gilt ein Wort als „sitzt“
  const MAX_FAELLIG = 20;            // höchstens so viele Wiederholungen pro Runde
  // Neue Wörter pro Tag: selbst einstellbar (Fortschritt), Standard 3.
  // Es kommen nur neue, wenn die alten gut laufen (siehe rundeZusammenstellen).
  const NEU_WAHL = [1, 2, 3, 5];
  const NEU_STANDARD = 3;
  const PAUSE_FAELLIG = 15;          // so viele fällige Wörter → heute keine neuen
  const PAUSE_SCHWER = 8;            // so viele Wörter in Fach 1, die schon falsch waren → keine neuen

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

  // ---------- Neue Wörter pro Tag ----------

  function neuProTag() {
    const n = Number((Speicher.daten.einstellungen || {}).neuProTag);
    return NEU_WAHL.includes(n) ? n : NEU_STANDARD;
  }

  function neuProTagWaehlen(wert) {
    Speicher.daten.einstellungen = { ...(Speicher.daten.einstellungen || {}), neuProTag: Number(wert) };
    Speicher.speichern();
  }

  // Wie viele neue Wörter heute schon dazugekommen sind
  function neuHeute() {
    const z = Speicher.daten.fortschritt.neuHeute;
    return z && z.datum === heute() ? z.anzahl : 0;
  }

  // ---------- Wie gut läuft es gerade? ----------
  //
  // Jede Antwort (Vokabeln, Grammatik, Hören) wird pro Tag gezählt: fortschritt.tage[datum] = [richtig, von].
  // Daraus die Trefferquote der letzten 7 Tage. Läuft es schwer, kommen weniger neue Wörter.
  const QUOTE_TAGE = 7;
  const QUOTE_MIN_ANTWORTEN = 20;    // vorher keine Anpassung
  const QUOTE_RUHIGER = 0.7;         // darunter: höchstens 1 neues Wort am Tag
  const QUOTE_PAUSE = 0.55;          // darunter: heute keine neuen Wörter

  function ergebnisZaehlen(gut) {
    const f = Speicher.daten.fortschritt;
    f.tage = f.tage || {};
    const h = heute();
    const t = f.tage[h] || [0, 0];
    f.tage[h] = [t[0] + (gut ? 1 : 0), t[1] + 1];
    const grenze = inTagen(-30);
    for (const d of Object.keys(f.tage)) if (d < grenze) delete f.tage[d];
    Speicher.speichern();
  }

  // Anteil richtiger Antworten der letzten 7 Tage (0…1) – oder null bei zu wenigen Antworten
  function trefferQuote() {
    const tage = Speicher.daten.fortschritt.tage || {};
    const ab = inTagen(-(QUOTE_TAGE - 1));
    let richtig = 0;
    let von = 0;
    for (const [d, [r, v]] of Object.entries(tage)) if (d >= ab) { richtig += r; von += v; }
    return von >= QUOTE_MIN_ANTWORTEN ? richtig / von : null;
  }

  // Neue Wörter heute: die eigene Höchstzahl, bei schwerer Lage weniger
  function neuGrenze() {
    const n = neuProTag() + neuExtra();
    const q = trefferQuote();
    if (q === null || q >= QUOTE_RUHIGER) return n;
    return q < QUOTE_PAUSE ? 0 : 1 + neuExtra();
  }

  // „Mehr neue Wörter holen“: heute 3 neue Wörter zusätzlich (nur auf Wunsch, gilt nur heute)
  const MEHR_ANZAHL = 3;
  function neuExtra() {
    const z = Speicher.daten.fortschritt.neuExtra;
    return z && z.datum === heute() ? z.anzahl : 0;
  }
  function mehrHolen() {
    Speicher.daten.fortschritt.neuExtra = { datum: heute(), anzahl: neuExtra() + MEHR_ANZAHL };
    Speicher.speichern();
  }

  // Warum heute keine neuen Wörter kommen – oder null.
  //   'tag'     → die neuen Wörter für heute sind schon da
  //   'jung'    → erst die Wörter kennenlernen, die gerade neu sind
  //   'faellig' → viele Wörter sind zum Wiederholen dran
  //   'schwer'  → einige Wörter sitzen noch nicht (Fach 1, schon falsch gewesen)
  function pauseGrund(faelligAnzahl, jungAnzahl) {
    const n = neuProTag();
    if (neuGrenze() === 0) return 'schwer';
    if (neuHeute() >= neuGrenze()) return 'tag';
    if (jungAnzahl >= Math.max(4, n * 2)) return 'jung';
    if (faelligAnzahl >= PAUSE_FAELLIG) return 'faellig';
    const schwer = Object.values(karten()).filter((k) => !istJung(k) && k.fach === 1 && k.falsch > 0).length;
    if (schwer >= PAUSE_SCHWER) return 'schwer';
    return null;
  }

  // Liste für eine Runde: fällige Wörter zum Schreiben, junge Wörter zum Kennenlernen,
  // dann – wenn es gut läuft – ein paar neue (höchstens neuProTag() am Tag).
  // pause: Grund, warum keine neuen kommen (nur wenn es noch neue gäbe)
  function rundeZusammenstellen() {
    const h = heute();
    const alleFaellig = faellige().filter((id) => !istJung(karten()[id]));
    const wiederholen = alleFaellig.slice(0, MAX_FAELLIG);
    const jung = jungeWoerter().slice(0, 10);
    const warten = neue();
    const grund = warten.length ? pauseGrund(alleFaellig.length, jungeWoerter().length) : null;
    const neu = grund ? [] : warten.slice(0, neuGrenze() - neuHeute());
    return { wiederholen, jung, neu, pause: grund, heute: h };
  }

  // Ein Wort kommt in den Karteikasten – erst zum Kennenlernen.
  // optionen.neu: ein neues Wort aus der Runde (zählt für „neue Wörter pro Tag“)
  function aufnehmen(id, optionen = {}) {
    if (!karten()[id]) {
      karten()[id] = { fach: 1, faellig: heute(), richtig: 0, falsch: 0, kennen: 0 };
      if (optionen.neu) {
        Speicher.daten.fortschritt.neuHeute = { datum: heute(), anzahl: neuHeute() + 1 };
      }
      Speicher.speichern();
    }
  }

  // ---------- Abfrage Italienisch → Deutsch (mit Kacheln) ----------
  //
  // Fällige Wörter werden abwechselnd in beide Richtungen abgefragt (karte.richtung = zuletzt).
  // Fach 1 und junge Wörter: immer Italienisch schreiben – das ist schwerer und festigt mehr.

  function richtungFuer(id) {
    const k = karten()[id];
    if (!k || istJung(k) || k.fach <= 1) return 'it';
    const w = wort(id);
    if (!w || !deutschZiel(w.de).length) return 'it';     // z. B. Bedeutung „(Ausruf)“ – nicht legbar
    return k.richtung === 'de' ? 'it' : 'de';
  }

  // "bitte (als Antwort auf danke)" → ["bitte"], "guten Morgen; guten Tag" → ["guten", "Morgen"]
  function deutschZiel(de) {
    return de.split(';')[0].split('/')[0]
      .replace(/\([^)]*\)/g, ' ')
      .replace(/[.,!?;:–]/g, ' ')
      .split(/\s+/)
      .filter(Boolean);
  }

  function gemischt(liste) {
    const a = [...liste];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Kacheln: die Wörter der Lösung + 2 falsche (bei nur einem Wort: 3), am liebsten aus demselben Thema
  function deutschKacheln(w) {
    const ziel = deutschZiel(w.de);
    // Kein Wort aus irgendeiner Bedeutung dieses Wortes als falsche Kachel (sonst wäre „falsch“ eigentlich richtig)
    const gesehen = new Set(w.de.replace(/[();/.,!?:–]/g, ' ').split(/\s+/).filter(Boolean).map((t) => t.toLowerCase()));
    const anzahl = ziel.length === 1 ? 3 : 2;
    const falsche = [];
    const gleich = WORTSCHATZ.filter((x) => x.id !== w.id && w.thema && x.thema === w.thema);
    const andere = WORTSCHATZ.filter((x) => x.id !== w.id);
    for (const x of [...gemischt(gleich), ...gemischt(andere)]) {
      if (falsche.length >= anzahl) break;
      // am liebsten Inhaltswörter (nicht „der“, „die“ …), damit es nicht zu leicht wird
      const kandidaten = gemischt(deutschZiel(x.de)).filter((t) => !gesehen.has(t.toLowerCase()));
      const t = kandidaten.find((y) => y.length > 3) || kandidaten[0];
      if (!t) continue;
      gesehen.add(t.toLowerCase());
      falsche.push(t);
    }
    return { ziel, kacheln: gemischt([...ziel, ...falsche]) };
  }

  function pruefeDeutsch(gelegt, w) {
    const ziel = deutschZiel(w.de);
    return gelegt.length === ziel.length && gelegt.every((t, i) => t.toLowerCase() === ziel[i].toLowerCase());
  }

  // Ergebnis eintragen. Nur die erste Antwort pro Runde zählt für das Fach.
  // richtung: 'it' (Italienisch geschrieben) oder 'de' (Deutsch mit Kacheln gelegt)
  function eintragen(id, gewusst, richtung = 'it') {
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
    k.richtung = richtung;
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
    neuProTag,
    neuProTagWaehlen,
    neuGrenze,
    neuExtra,
    mehrHolen,
    ergebnisZaehlen,
    trefferQuote,
    neuHeute,
    NEU_WAHL,
    aufnehmen,
    eintragen,
    pruefe,
    heute,
    inTagen,
    richtungFuer,
    deutschZiel,
    deutschKacheln,
    pruefeDeutsch,
  };
})();
