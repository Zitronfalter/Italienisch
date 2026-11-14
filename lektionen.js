// Lektionen: Welche Lektion ist dran, wie weit ist sie, wann ist sie erledigt?
//
// Die Inhalte stehen in lektionen-inhalt.js (LEKTIONEN). Hier steht nur die Logik.
// Lernstand: Speicher.daten.fortschritt.lektionen[id] =
//   { begonnen, erledigt, uebersprungen, woerterGeprueft, hoerenErledigt }
// Hör-Ergebnisse: Speicher.daten.fortschritt.hoeren.lektionen[id] = { richtig, von, datum }

const Lektionen = (() => {
  const HOEREN_FERTIG_AB = 0.8;

  function f() { return Speicher.daten.fortschritt; }

  function stand(id) {
    f().lektionen = f().lektionen || {};
    f().lektionen[id] = f().lektionen[id] || {};
    return f().lektionen[id];
  }

  function gespeichert(id) {
    return (f().lektionen && f().lektionen[id]) || {};
  }

  function alle() {
    return LEKTIONEN.map((l) => ({ ...l, wortIds: l.woerter.map((it) => wortId(it)) }));
  }

  function finde(id) { return alle().find((l) => l.id === id); }

  // ---------- Teile einer Lektion ----------

  function teilWoerter(l) {
    const karten = Speicher.daten.karten;
    const mitKarte = l.wortIds.filter((id) => karten[id]);
    if (mitKarte.length === l.wortIds.length && l.wortIds.every((id) => !Vokabeln.istJung(karten[id]))) return 'fertig';
    return mitKarte.length ? 'angefangen' : 'offen';
  }

  function teilAus(liste, standVon, fertig) {
    const staende = liste.map(standVon);
    if (staende.every((s) => s && fertig(s))) return 'fertig';
    return staende.some(Boolean) ? 'angefangen' : 'offen';
  }

  function hoerErgebnis(id) {
    return ((f().hoeren || {}).lektionen || {})[id] || null;
  }

  function teilHoeren(l) {
    if (gespeichert(l.id).hoerenErledigt) return 'fertig';
    const e = hoerErgebnis(l.id);
    if (!e) return 'offen';
    return e.richtig / e.von >= HOEREN_FERTIG_AB ? 'fertig' : 'angefangen';
  }

  function teile(l) {
    return {
      woerter: teilWoerter(l),
      grammatik: teilAus(l.kapitel, Grammatik.stand, (s) => s.geuebt),
      text: teilAus(l.texte, Lesen.stand, (s) => s.verstanden),
      hoeren: teilHoeren(l),
    };
  }

  function allesFertig(l) {
    return Object.values(teile(l)).every((t) => t === 'fertig');
  }

  function istErledigt(l) {
    return Boolean(gespeichert(l.id).erledigt);
  }

  // Setzt „erledigt“ bei allen fertigen Lektionen; gibt die neu erledigten zurück.
  function aktualisieren() {
    const neu = alle().filter((l) => !istErledigt(l) && allesFertig(l));
    for (const l of neu) stand(l.id).erledigt = Vokabeln.heute();
    if (neu.length) Speicher.speichern();
    return neu;
  }

  // ---------- Welche Lektion ist dran? ----------

  // Zuletzt begonnene, nicht erledigte Lektion – sonst die erste nicht erledigte.
  function aktuelle() {
    const offen = alle().filter((l) => !istErledigt(l));
    let beste = null;
    for (const l of offen) {
      const b = gespeichert(l.id).begonnen;
      if (!b) continue;
      const bb = beste && gespeichert(beste.id).begonnen;
      if (!beste || b > bb || (b === bb && l.nr > beste.nr)) beste = l;
    }
    return beste || offen[0] || null;
  }

  function beginnen(id) {
    const s = stand(id);
    if (!s.begonnen) {
      s.begonnen = Vokabeln.heute();
      Speicher.speichern();
    }
  }

  // ---------- Wörter: „kenne ich / neu“ ----------

  function brauchtWortCheck(l) {
    if (gespeichert(l.id).woerterGeprueft) return false;
    return l.wortIds.some((id) => !Speicher.daten.karten[id]);
  }

  // bekannt: Wort-IDs, die du schon kennst. Sie kommen gleich ins Wiederholen (ab morgen).
  function woerterEinordnen(id, bekannt) {
    const karten = Speicher.daten.karten;
    for (const w of bekannt) {
      if (karten[w]) continue;
      karten[w] = { fach: 1, faellig: Vokabeln.inTagen(1), richtig: 0, falsch: 0 };
    }
    stand(id).woerterGeprueft = true;
    Speicher.speichern();
  }

  // Wörter der aktuellen Lektion, die noch keine Karte haben (Reihenfolge der Lektion).
  // Ohne aktuelle Lektion (alle erledigt): Wörter aus dem Wortschatz, die zu keiner Lektion gehören.
  function neueWoerter() {
    const karten = Speicher.daten.karten;
    const l = aktuelle();
    if (l) return l.wortIds.filter((id) => !karten[id]);
    const inLektion = new Set(alle().flatMap((x) => x.wortIds));
    return WORTSCHATZ.filter((w) => !inLektion.has(w.id) && !karten[w.id]).map((w) => w.id);
  }

  // ---------- Was kommt als Nächstes? ----------

  // optionen.ohneWortCheck: „kenne ich / neu“ überspringen (für die Anzeige „Danach: …“)
  function naechsterTeil(optionen = {}) {
    const l = aktuelle();
    if (!l) return null;
    if (!optionen.ohneWortCheck && brauchtWortCheck(l)) return { art: 'woerter', lektion: l };
    const kap = l.kapitel.map((id) => Grammatik.kapitel(id)).find((k) => k && !(Grammatik.stand(k.id) || {}).geuebt);
    if (kap) return { art: 'kapitel', lektion: l, obj: kap };
    const text = l.texte.map((id) => LESETEXTE.find((t) => t.id === id)).find((t) => t && !(Lesen.stand(t.id) || {}).verstanden);
    if (text) return { art: 'text', lektion: l, obj: text };
    if (teilHoeren(l) !== 'fertig') return { art: 'hoeren', lektion: l };
    return null;
  }

  // ---------- Hören ----------

  function hoerenSpeichern(id, richtig, von) {
    const h = (f().hoeren = f().hoeren || { runden: 0 });
    h.lektionen = h.lektionen || {};
    const alt = h.lektionen[id];
    if (!alt || richtig / von >= alt.richtig / alt.von) {
      h.lektionen[id] = { richtig, von, datum: Vokabeln.heute() };
    }
    Speicher.speichern();
  }

  // ---------- Übergang vom alten Lernstand (Format 1) ----------
  //
  // Lektionen, deren Wörter, Grammatik und Text schon fertig sind, gelten auch beim Hören als fertig.

  function uebergang() {
    if ((Speicher.daten.format || 1) >= 2) return;
    for (const l of alle()) {
      const t = teile(l);
      if (t.woerter === 'fertig' && t.grammatik === 'fertig' && t.text === 'fertig') stand(l.id).hoerenErledigt = true;
    }
    Speicher.daten.format = 2;
    aktualisieren();
    Speicher.speichern();
  }

  return {
    alle, finde, teile, istErledigt, aktualisieren, aktuelle, beginnen,
    brauchtWortCheck, woerterEinordnen, neueWoerter, naechsterTeil, hoerenSpeichern, uebergang,
  };
})();
