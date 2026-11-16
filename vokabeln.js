// Vokabeln: Karteikasten (verteilte Wiederholung) und Prüfen der Antwort

const Vokabeln = (() => {
  // Karteikasten mit 5 Fächern. Richtig → ein Fach weiter, falsch → zurück in Fach 1.
  // Tage bis zur nächsten Abfrage, je nach Fach:
  const ABSTAND = { 1: 1, 2: 3, 3: 7, 4: 16, 5: 35 };
  const SICHER_AB_FACH = 4;          // ab Fach 4 gilt ein Wort als „sitzt“
  const MAX_FAELLIG = 20;            // höchstens so viele Wiederholungen pro Runde
  // Neue Wörter kommen über die Schritte der Lektion (kein Tageslimit mehr).
  // Ohne offene Lektion: höchstens so viele neue pro Runde – und keine, solange viele noch jung sind.
  const NEU_PRO_RUNDE = 3;
  const JUNG_GENUG = 4;

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

  // hoechstens: nur bis zu dieser Stufe zählen (z. B. Wortpaare höchstens bis 1, damit die Satz-Treppe nicht übersprungen wird)
  function kennenGelernt(id, hoechstens = KENNEN_FERTIG) {
    const k = karten()[id];
    if (!istJung(k) || k.kennen >= hoechstens) return;
    k.kennen += 1;
    if (k.kennen >= KENNEN_FERTIG) {
      k.fach = 1;
      k.faellig = inTagen(1);           // geschrieben wird erst ab morgen
    }
    Speicher.speichern();
  }

  function anzahlJung() { return jungeWoerter().length; }

  // ---------- Wie gut läuft es gerade? ----------
  //
  // Jede Antwort (Vokabeln, Grammatik, Hören) wird pro Tag gezählt: fortschritt.tage[datum] = [richtig, von].
  // Daraus die Trefferquote der letzten 7 Tage. Läuft es schwer, kommt vor neuen Wörtern eine Festigen-Runde.
  const QUOTE_TAGE = 7;
  const QUOTE_MIN_ANTWORTEN = 20;    // vorher keine Anpassung
  const QUOTE_PAUSE = 0.55;          // darunter: vor neuen Wörtern erst festigen

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

  // ---------- Festigen (sanfte Bremse im Weg) ----------
  //
  // Wäre im Weg als Nächstes „Neue Wörter“ dran und läuft es gerade schwer (Quote unter 55 %),
  // kommt vorher einmal eine Festigen-Runde – höchstens einmal je Schritt (fortschritt.festigen).
  function festigenNoetig(lektionId, nr) {
    const q = trefferQuote();
    if (q === null || q >= QUOTE_PAUSE) return false;
    const f = Speicher.daten.fortschritt.festigen;
    return !(f && f.lektion === lektionId && f.nr === nr);
  }

  function festigenGemacht(lektionId, nr) {
    Speicher.daten.fortschritt.festigen = { lektion: lektionId, nr };
    Speicher.speichern();
  }

  // Die Wörter, die gerade am schwersten sind: Fach 1 mit Fehlern, dann junge, dann niedrige Fächer
  function schwersteWoerter(anzahl = 7) {
    const rang = (k) => (!istJung(k) && k.fach === 1 && k.falsch > 0 ? 0 : istJung(k) ? 1 : 2);
    return Object.entries(karten())
      .filter(([id]) => wort(id))
      .sort(([, a], [, b]) => rang(a) - rang(b) || (a.fach || 1) - (b.fach || 1)
        || String(a.faellig).localeCompare(String(b.faellig)))
      .slice(0, anzahl)
      .map(([id]) => id);
  }

  // Liste für eine Runde: fällige Wörter zum Schreiben, junge Wörter zum Kennenlernen,
  // dann ein paar neue (nur ohne offene Lektion wichtig – sonst kommen neue über den Weg).
  function rundeZusammenstellen() {
    const h = heute();
    const alleFaellig = faellige().filter((id) => !istJung(karten()[id]));
    const wiederholen = alleFaellig.slice(0, MAX_FAELLIG);
    const jung = jungeWoerter().slice(0, 10);
    const neu = jungeWoerter().length >= JUNG_GENUG ? [] : neue().slice(0, NEU_PRO_RUNDE);
    return { wiederholen, jung, neu, heute: h };
  }

  // Ein Wort kommt in den Karteikasten – erst zum Kennenlernen.
  function aufnehmen(id) {
    if (!karten()[id]) {
      karten()[id] = { fach: 1, faellig: heute(), richtig: 0, falsch: 0, kennen: 0 };
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

  // ---------- Vokabelkasten: Duolingo-Wörter, Fächer, „lange nicht gesehen“ ----------

  // Einmalig: Wörter aus Nicoles Duolingo-Liste (schon-bekannt.js) kommen als bekannt in Fach 3.
  // Damit nicht alles an einem Tag fällig ist: 20 pro Tag ab morgen, frühe Lektionen zuerst.
  // Vorhandene Karten bleiben unverändert. Rückgabe: Anzahl neuer Karten (0, wenn schon geschehen).
  const DUOLINGO_FACH = 3;
  const DUOLINGO_PRO_TAG = 20;
  function duolingoUebernehmen() {
    const d = Speicher.daten;
    if (d.duolingo && d.duolingo.uebernommen) return 0;
    const reihenfolge = new Map();
    for (const l of Lektionen.alle()) {
      for (const id of l.wortIds || []) if (!reihenfolge.has(id)) reihenfolge.set(id, reihenfolge.size);
    }
    const rang = (id) => (reihenfolge.has(id) ? reihenfolge.get(id) : Infinity);
    const ids = [...new Set(WORTSCHATZ
      .filter((w) => !karten()[w.id] && SchonBekannt.enthaelt(w.it))
      .map((w) => w.id))]                       // ein Wort kann im Wortschatz zweimal stehen (zwei Themen)
      .sort((a, b) => rang(a) - rang(b));
    ids.forEach((id, i) => {
      karten()[id] = {
        fach: DUOLINGO_FACH,
        faellig: inTagen(1 + Math.floor(i / DUOLINGO_PRO_TAG)),
        richtig: 0,
        falsch: 0,
        quelle: 'duolingo',
      };
    });
    d.duolingo = { uebernommen: heute(), anzahl: ids.length };
    Speicher.speichern();
    return ids.length;
  }

  // Wort kam in einer Übung vor (Wortpaar, erzeugte Aufgabe): nur das Datum merken, Fach bleibt.
  function gesehen(id) {
    const k = karten()[id];
    if (!k) return;
    k.zuletzt = heute();
    Speicher.speichern();
  }

  // n Wörter, die am längsten nicht dran waren (ohne Datum = am ältesten), die ältesten zuerst.
  // Bei gleichem Datum zufällig. Wer ein Wort benutzt, setzt danach `zuletzt` (eintragen/gesehen) –
  // so kommen beim nächsten Mal andere dran.
  function langeNichtGesehen(ids, n) {
    const datum = (id) => (karten()[id] && karten()[id].zuletzt) || '';
    const zufall = new Map([...new Set(ids)].map((id) => [id, Math.random()]));
    return [...zufall.keys()]
      .sort((a, b) => datum(a).localeCompare(datum(b)) || zufall.get(a) - zufall.get(b))
      .slice(0, n);
  }

  // Karten eines Fachs (ohne Wörter, die noch kennengelernt werden)
  function fachIds(fach) {
    return Object.entries(karten())
      .filter(([id, k]) => k.fach === fach && !istJung(k) && wort(id))
      .map(([id]) => id);
  }

  // Für die Vokabelkasten-Seite: [{ fach, anzahl, faellig }] für Fach 1–5
  function fachUebersicht() {
    const h = heute();
    return [1, 2, 3, 4, 5].map((fach) => {
      const ids = fachIds(fach);
      return { fach, anzahl: ids.length, faellig: ids.filter((id) => karten()[id].faellig <= h).length };
    });
  }

  return {
    duolingoUebernehmen,
    gesehen,
    langeNichtGesehen,
    fachIds,
    fachUebersicht,
    wort,
    faellige,
    neue,
    anzahlSicher,
    anzahlJung,
    istJung,
    kennenGelernt,
    KENNEN_FERTIG,
    rundeZusammenstellen,
    ergebnisZaehlen,
    trefferQuote,
    festigenNoetig,
    festigenGemacht,
    schwersteWoerter,
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
