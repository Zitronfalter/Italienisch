// Lektionen: Welche Lektion ist dran, wie weit ist sie, wann ist sie erledigt?
//
// Die Inhalte stehen in lektionen-inhalt.js (LEKTIONEN). Hier steht nur die Logik.
// Lernstand: Speicher.daten.fortschritt.lektionen[id] =
//   { begonnen, erledigt, uebersprungen, woerterGeprueft, hoerenErledigt, schritt }
// schritt = Anzahl gemachter Schritte des Wegs (siehe weg()); der Weg selbst wird immer neu erzeugt.
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
    // Satz-Lektionen: gleiche Wörter, aber in der Reihenfolge der Sätze (bestimmt die Päckchen)
    return LEKTIONEN.map((l) => {
      // (nur wenn SAETZE genau die Wörter der Lektion enthält – sonst gilt die Liste der Lektion)
      const r = Saetze.reihenfolge(l.id);
      const passt = r && r.length === l.woerter.length && r.every((it) => l.woerter.includes(it));
      const woerter = passt ? r : l.woerter;
      return { ...l, woerter, wortIds: woerter.map((it) => wortId(it)) };
    });
  }

  function finde(id) { return alle().find((l) => l.id === id); }

  // Nummer zum Anzeigen: Lektionen fortlaufend gezählt (Wiederholungen zählen nicht mit)
  function anzeigeNr(l) {
    return LEKTIONEN.filter((x) => x.art !== 'ripasso').findIndex((x) => x.id === l.id) + 1;
  }

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

  function teilUebungen(l) {
    const e = gespeichert(l.id).uebungen;
    if (!e) return 'offen';
    return e.richtig / e.von >= HOEREN_FERTIG_AB ? 'fertig' : 'angefangen';
  }

  // Lektion: Wörter, Grammatik, Text, Hören. Wiederholung: gemischte Übungen und Text.
  // Wort-Lektion (lektionen-a1.js): Wörter, Text, Hören, gemischte Übungen.
  function teile(l) {
    if (l.art === 'ripasso') {
      return { uebungen: teilUebungen(l), text: teilAus(l.texte, Lesen.stand, (s) => s.verstanden) };
    }
    if (l.wortLektion) {
      return {
        woerter: teilWoerter(l),
        text: teilAus(l.texte, Lesen.stand, (s) => s.verstanden),
        hoeren: teilHoeren(l),
        uebungen: teilUebungen(l),
      };
    }
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

  // Setzt „erledigt“ bei allen Lektionen, deren Weg zu Ende ist; gibt die neu erledigten zurück.
  function aktualisieren() {
    const neu = alle().filter((l) => !istErledigt(l) && schrittNr(l) >= weg(l).length);
    for (const l of neu) stand(l.id).erledigt = Vokabeln.heute();
    if (neu.length) Speicher.speichern();
    return neu;
  }

  // Alte Regel (vor dem Weg): erledigt, wenn alle Teile fertig sind. Nur noch für den Übergang.
  function altAktualisieren() {
    for (const l of alle().filter((x) => !istErledigt(x) && allesFertig(x))) stand(l.id).erledigt = Vokabeln.heute();
  }

  // ---------- Der Weg: kurze Schritte ----------
  //
  // Wörter der Lektion in Päckchen zu 4–5. Je Päckchen: Neue Wörter, Üben, Festigen.
  // Festigen-Plätze der Reihe nach: Kapitel, Texte, Hören; frei → Üben gemischt; Rest → eigene Schritte.
  // Zuletzt der Abschluss. Wiederholung: Übungen und Text.

  function paeckchen(ids) {
    const anzahl = Math.ceil(ids.length / 5);
    const ergebnis = [];
    let start = 0;
    for (let i = 0; i < anzahl; i++) {
      const groesse = Math.floor(ids.length / anzahl) + (i < ids.length % anzahl ? 1 : 0);
      ergebnis.push(ids.slice(start, start + groesse));
      start += groesse;
    }
    return ergebnis;
  }

  function kapitelSchritt(id) {
    const k = Grammatik.kapitel(id);
    return { art: 'kapitel', kapitel: id, name: 'Grammatik' + (k ? ': ' + k.titel : '') };
  }

  function textSchritt(id) {
    const t = LESETEXTE.find((x) => x.id === id);
    return { art: 'text', text: id, name: 'Text' + (t ? ': ' + t.titel : '') };
  }

  function weg(l) {
    const texte = l.texte.map(textSchritt);
    if (l.art === 'ripasso') return [{ art: 'uebungen', name: 'Gemischte Übungen' }, ...texte];
    const festigen = [...l.kapitel.map(kapitelSchritt), ...texte, { art: 'hoeren', name: 'Hören' }];
    const schritte = [];
    const bisher = [];
    paeckchen(l.wortIds).forEach((p, i) => {
      bisher.push(...p);
      schritte.push({ art: 'woerter', ids: p, name: 'Neue Wörter ' + (i + 1) });
      schritte.push({ art: 'ueben', ids: [...bisher], name: 'Wörter üben' });
      schritte.push(festigen.shift() || { art: 'ueben', ids: [...bisher], name: 'Wörter üben gemischt' });
    });
    schritte.push(...festigen, { art: 'abschluss', name: 'Abschluss' });
    return schritte;
  }

  function schrittNr(l) {
    return gespeichert(l.id).schritt || 0;
  }

  // Ist der Inhalt eines Schritts schon fertig (z. B. aus einer früheren Lektion)? Dann wird er übersprungen.
  function schrittErledigt(l, s) {
    if (s.art === 'woerter') return s.ids.every((id) => Speicher.daten.karten[id]);
    if (s.art === 'kapitel') return Boolean((Grammatik.stand(s.kapitel) || {}).geuebt);
    if (s.art === 'text') return Boolean((Lesen.stand(s.text) || {}).verstanden);
    return false;
  }

  // Nächster Schritt, der noch zu tun ist (fertige werden übersprungen und gezählt). null: Weg zu Ende.
  function naechsterWegSchritt(l) {
    const w = weg(l);
    const alt = schrittNr(l);
    let nr = alt;
    while (nr < w.length && schrittErledigt(l, w[nr])) nr++;
    if (nr > alt) {
      stand(l.id).schritt = nr;
      if (nr >= w.length && !istErledigt(l)) stand(l.id).erledigt = Vokabeln.heute();
      Speicher.speichern();
    }
    return nr < w.length ? { nr, schritt: w[nr] } : null;
  }

  // Schritt nr ist gemacht. Ein früherer Schritt nochmal gemacht ändert nichts.
  function schrittGemacht(lektionId, nr) {
    const l = finde(lektionId);
    const s = stand(lektionId);
    s.begonnen = s.begonnen || Vokabeln.heute();
    s.schritt = Math.max(s.schritt || 0, nr + 1);
    if (s.schritt >= weg(l).length && !s.erledigt) s.erledigt = Vokabeln.heute();
    Speicher.speichern();
  }

  // ---------- Welche Lektion ist dran? ----------

  // Die Lektion, in der zuletzt ein Schritt gestartet wurde (fortschritt.aktuelleLektion), solange nicht erledigt.
  // Ohne Merker (alter Lernstand): zuletzt begonnene, nicht erledigte – sonst die erste nicht erledigte.
  function aktuelle() {
    const offen = alle().filter((l) => !istErledigt(l));
    const gemerkt = finde(Speicher.daten.fortschritt.aktuelleLektion);
    if (gemerkt && !istErledigt(gemerkt)) return gemerkt;
    let beste = null;
    for (const l of offen) {
      const b = gespeichert(l.id).begonnen;
      if (!b) continue;
      const bb = beste && gespeichert(beste.id).begonnen;
      if (!beste || b > bb || (b === bb && l.nr > beste.nr)) beste = l;
    }
    return beste || offen[0] || null;
  }

  // Ein Schritt (oder die Wiederholung) dieser Lektion wird gestartet: sie ist ab jetzt die aktuelle.
  // Nur ansehen (Lektionsseite öffnen) ruft das nicht auf.
  function beginnen(id) {
    const s = stand(id);
    const f = Speicher.daten.fortschritt;
    if (!s.begonnen || f.aktuelleLektion !== id) {
      s.begonnen = s.begonnen || Vokabeln.heute();
      f.aktuelleLektion = id;
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
    if (l.art === 'ripasso' && teilUebungen(l) !== 'fertig') return { art: 'uebungen', lektion: l };
    const kap = l.kapitel.map((id) => Grammatik.kapitel(id)).find((k) => k && !(Grammatik.stand(k.id) || {}).geuebt);
    if (kap) return { art: 'kapitel', lektion: l, obj: kap };
    const text = l.texte.map((id) => LESETEXTE.find((t) => t.id === id)).find((t) => t && !(Lesen.stand(t.id) || {}).verstanden);
    if (text) return { art: 'text', lektion: l, obj: text };
    if (l.art !== 'ripasso' && teilHoeren(l) !== 'fertig') return { art: 'hoeren', lektion: l };
    // Wort-Lektion: gemischte Übungen erst, wenn die Wörter gelernt sind
    if (l.wortLektion && teilUebungen(l) !== 'fertig' && teilWoerter(l) === 'fertig') return { art: 'uebungen', lektion: l };
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

  // ---------- Aufgabenrunde: „Kann ich schon“ und Wiederholung ----------
  //
  // Aufgaben: { art: 'deutsch', id }            – Italienisch → Deutsch mit Kacheln
  //           { art: 'grammatik', kapitel, nr }  – eine Grammatik-Übung
  //           { art: 'hoeren', satz }            – Satz hören und aus Kacheln legen

  function gemischt(liste) {
    const a = [...liste];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Stoff einer Lektion – bei einer Wiederholung der Stoff ihrer Lektionen
  function stoff(l) {
    const quellen = l.art === 'ripasso' ? alle().filter((x) => (l.lektionen || []).includes(x.id)) : [l];
    return {
      wortIds: quellen.flatMap((x) => x.wortIds),
      kapitel: quellen.flatMap((x) => [...x.kapitel, ...(x.uebenKapitel || [])]),
      texte: quellen.flatMap((x) => x.texte),
    };
  }

  // anzahl 8: „Kann ich schon“ (4 Wörter, 3 Grammatik, 1 Hören); 10: Wiederholung (4, 4, 2).
  // Fehlt eine Sorte, wird mit den anderen aufgefüllt.
  function aufgabenFuer(l, anzahl) {
    const s = stoff(l);
    const kap = new Set(s.kapitel);
    const tx = new Set(s.texte);
    const vorrat = {
      deutsch: gemischt(s.wortIds).map((id) => ({ art: 'deutsch', id })),
      grammatik: gemischt([...new Set(s.kapitel)].flatMap((kid) => {
        const k = Grammatik.kapitel(kid);
        if (!k) return [];
        const feste = k.uebungen.map((u, nr) => ({ art: 'grammatik', kapitel: kid, nr }));
        // dazu 2 selbst erzeugte Aufgaben, wo es geht (erzeuger.js)
        const erzeugt = Erzeuger.hat(kid) ? [Erzeuger.aufgabe(kid), Erzeuger.aufgabe(kid)].map((u) => ({ art: 'grammatik', kapitel: kid, uebung: u })) : [];
        return [...feste, ...erzeugt];
      })),
      hoeren: gemischt(Uebungen.saetze().filter((x) => tx.has(x.text) || kap.has(x.kapitel)))
        .map((satz) => ({ art: 'hoeren', satz })),
    };
    // heute schon richtig gelöste Aufgaben kommen nicht noch einmal
    for (const art of Object.keys(vorrat)) vorrat[art] = vorrat[art].filter((a) => !Wiederholung.heuteGeloest(a));
    const ziel = anzahl === 8 ? { deutsch: 4, grammatik: 3, hoeren: 1 } : { deutsch: 4, grammatik: 4, hoeren: 2 };
    const auswahl = [];
    for (const art of Object.keys(ziel)) auswahl.push(...vorrat[art].splice(0, ziel[art]));
    const rest = gemischt([...vorrat.grammatik, ...vorrat.deutsch, ...vorrat.hoeren]);
    while (auswahl.length < anzahl && rest.length) auswahl.push(rest.shift());
    return gemischt(auswahl);
  }

  // „Kann ich schon“: ab 7 von 8 ist die Lektion erledigt. Verändert keine Fächer im Karteikasten,
  // nur Wörter ohne Karte bekommen eine Karte als „bekannt“.
  function ueberspringen(id, richtig, von) {
    if (richtig < von - 1) return false;
    const l = finde(id);
    woerterEinordnen(id, l.wortIds);
    const s = stand(id);
    s.begonnen = s.begonnen || Vokabeln.heute();
    s.erledigt = Vokabeln.heute();
    s.uebersprungen = true;
    Speicher.speichern();
    return true;
  }

  // Wiederholung: bestes Ergebnis der gemischten Übungen merken
  function ripassoSpeichern(id, richtig, von) {
    const s = stand(id);
    if (!s.uebungen || richtig / von >= s.uebungen.richtig / s.uebungen.von) {
      s.uebungen = { richtig, von, datum: Vokabeln.heute() };
    }
    Speicher.speichern();
  }

  // ---------- Übergang vom alten Lernstand ----------
  //
  // Format 1 → 2: Lektionen, deren Wörter, Grammatik und Text schon fertig sind, gelten auch beim Hören als fertig.
  // Format 2 → 3: begonnene Lektionen bekommen `schritt` = erster Schritt des Wegs, der nach altem Stand offen ist.

  function altFertig(l, s) {
    if (s.art === 'woerter' || s.art === 'kapitel' || s.art === 'text') return schrittErledigt(l, s);
    if (s.art === 'ueben') return s.ids.every((id) => Speicher.daten.karten[id] && !Vokabeln.istJung(Speicher.daten.karten[id]));
    if (s.art === 'hoeren') return teilHoeren(l) === 'fertig';
    if (s.art === 'uebungen') return teilUebungen(l) === 'fertig';
    return false;
  }

  function uebergang() {
    const format = Speicher.daten.format || 1;
    if (format >= 3) return;
    if (format < 2) {
      for (const l of alle()) {
        const t = teile(l);
        if (t.woerter === 'fertig' && t.grammatik === 'fertig' && t.text === 'fertig') stand(l.id).hoerenErledigt = true;
      }
    }
    altAktualisieren();
    for (const l of alle()) {
      if (istErledigt(l) || !gespeichert(l.id).begonnen) continue;
      const w = weg(l);
      let nr = 0;
      while (nr < w.length && altFertig(l, w[nr])) nr++;
      if (nr) stand(l.id).schritt = nr;
    }
    Speicher.daten.format = 3;
    Speicher.speichern();
  }

  return {
    alle, finde, anzeigeNr, teile, istErledigt, aktualisieren, aktuelle, beginnen,
    brauchtWortCheck, woerterEinordnen, neueWoerter, naechsterTeil, hoerenSpeichern, uebergang,
    aufgabenFuer, ueberspringen, ripassoSpeichern,
    weg, schrittNr, schrittErledigt, naechsterWegSchritt, schrittGemacht,
  };
})();
