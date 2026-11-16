// Sätze zu neuen Wörtern: die „Treppe“.
//
// Neue Wörter einer Satz-Lektion (Daten in saetze-a1.js, global SAETZE) lernt man in Sätzen.
// Die Stufe ist der vorhandene Zähler karte.kennen (0 … Vokabeln.KENNEN_FERTIG = 4):
//   0 Kennenlernen: italienischer Satz, Wort hervorgehoben, danach mit Kacheln ins Deutsche legen
//   1 Lesen: ein anderer Satz mit dem Wort, mit Kacheln ins Deutsche legen
//   2 Hören: Satz hören und aus italienischen Kacheln legen (ohne Sprachausgabe wie Stufe 1)
//   3 Selbst bilden: abwechselnd Lückensatz (mit Hinweis) und Deutsch → Italienisch mit Kacheln
// Bei kennen 4 kommt das Wort wie bisher in den Karteikasten (Fach 1, geschrieben ab morgen).
//
// Aufgabe = { art: 'satz', id, stufe, modus, satz: { it, de, form }, kacheln, ohneWertung? }
// modus: 'kennen' | 'de' | 'hoeren' | 'luecke' | 'it'

const Saetze = (() => {
  // Nur im Speicher (nicht gespeichert): zuletzt gezeigter Satz und Anzahl Stufe-3-Aufgaben pro Wort
  const zuletzt = new Map();
  const zaehler = new Map();
  let tabelle = null;

  function mischen(liste) {
    const a = [...liste];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Wort-ID → { lektion, eintrag }
  function eintraege() {
    if (tabelle) return tabelle;
    tabelle = new Map();
    for (const [lektion, liste] of Object.entries(SAETZE)) {
      for (const eintrag of liste) tabelle.set(wortId(eintrag.wort), { lektion, eintrag });
    }
    return tabelle;
  }

  // Lern-Reihenfolge der Wörter einer Lektion – oder null, wenn die Lektion keine Sätze hat
  function reihenfolge(lektionId) {
    const liste = SAETZE[lektionId];
    return liste ? liste.map((e) => e.wort) : null;
  }

  function hat(id) { return eintraege().has(id); }

  // 0 ohne Karte, sonst karte.kennen solange das Wort jung ist; null wenn fertig oder alt
  function stufe(id) {
    const k = Speicher.daten.karten[id];
    if (!k) return 0;
    return Vokabeln.istJung(k) ? k.kennen : null;
  }

  // ---------- Wort im Satz finden ----------

  function klein(text) { return text.toLowerCase().replace(/’/g, "'"); }

  // "il cognome" → "cognome", "l'acqua" → "acqua"
  function ohneArtikel(it) {
    return klein(it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '');
  }

  // Wo steht `teil` (z. B. "come va?") als ganze Wörter im Satz?
  // Groß/klein und Satzzeichen zählen nicht. Ergebnis: { start, ende, text } oder null.
  function fundstelle(satz, teil) {
    const s = [];
    let pos = 0;
    for (const st of Lesen.stuecke(satz)) {
      if (st.wort) s.push({ wort: klein(st.text), start: pos, ende: pos + st.text.length });
      pos += st.text.length;
    }
    const t = Lesen.stuecke(teil).filter((st) => st.wort).map((st) => klein(st.text));
    if (!t.length) return null;
    for (let i = 0; i + t.length <= s.length; i++) {
      if (t.every((w, j) => s[i + j].wort === w)) {
        const start = s[i].start;
        const ende = s[i + t.length - 1].ende;
        return { start, ende, text: satz.slice(start, ende) };
      }
    }
    return null;
  }

  // So steht das Wort im Satz (für Hervorheben und Lücke)
  function formIm(satz, wort) {
    const ziel = satz.form || ohneArtikel(wort);
    const f = fundstelle(satz.it, ziel);
    return f ? f.text : ziel;
  }

  // ---------- Kacheln ----------

  // Wörter eines Satzes als Kacheln (Satzzeichen und Gedankenstriche weg, „dov’è“ bleibt ganz)
  function satzKacheln(text) {
    return text.replace(/[.,!?;:–«»"]/g, ' ').split(/\s+/).filter((w) => /\p{L}/u.test(w));
  }

  // Sätze aus SAETZE bis zu dieser Lektion (für falsche Kacheln)
  function vorrat(lektion) {
    const grenze = LEKTIONEN.findIndex((l) => l.id === lektion);
    return Object.entries(SAETZE)
      .filter(([lid]) => LEKTIONEN.findIndex((l) => l.id === lid) <= grenze)
      .flatMap(([, liste]) => liste.flatMap((e) => e.saetze));
  }

  function deutschKacheln(satz, saetze) {
    const eigene = satzKacheln(satz.de);
    const klein_ = new Set(eigene.map((w) => w.toLowerCase()));
    const fremde = mischen(saetze.filter((s) => s.it !== satz.it))
      .flatMap((s) => satzKacheln(s.de))
      .filter((w) => w.length > 2 && !klein_.has(w.toLowerCase()));
    return mischen([...eigene, ...[...new Set(fremde)].slice(0, 2)]);
  }

  function italienischKacheln(satz, saetze) {
    return Uebungen.kacheln(satz.it, saetze.filter((s) => s.it !== satz.it))
      .filter((w) => /\p{L}/u.test(w));
  }

  // ---------- Aufgabe bauen ----------

  // Satz wählen: Stufe 0 immer der erste; sonst nicht heute gelöst und nicht der zuletzt gezeigte
  function satzWaehlen(id, eintrag, st) {
    const saetze = eintrag.saetze;
    if (st === 0) return saetze[0];
    const frei = saetze.filter((s) => s.it !== zuletzt.get(id)
      && !Wiederholung.heuteGeloest({ art: 'satz', satz: s }));
    if (frei.length) return mischen(frei)[0];
    const ohneErsten = saetze.length > 1 ? saetze.slice(1) : saetze;
    const andere = ohneErsten.filter((s) => s.it !== zuletzt.get(id));
    return mischen(andere.length ? andere : ohneErsten)[0];
  }

  function modusFuer(id, st) {
    if (st === 0) return 'kennen';
    if (st === 1) return 'de';
    if (st === 2) return Lesen.kannSprechen ? 'hoeren' : 'de';
    const n = zaehler.get(id) || 0;
    zaehler.set(id, n + 1);
    return n % 2 === 0 ? 'luecke' : 'it';
  }

  function aufgabe(id, st, optionen = {}) {
    const t = eintraege().get(id);
    if (!t) return null;
    const s = satzWaehlen(id, t.eintrag, st);
    zuletzt.set(id, s.it);
    const modus = modusFuer(id, st);
    const saetze = vorrat(t.lektion);
    const satz = { it: s.it, de: s.de, form: formIm(s, t.eintrag.wort) };
    let kacheln = [];
    if (modus === 'kennen' || modus === 'de') kacheln = deutschKacheln(s, saetze);
    else if (modus === 'hoeren' || modus === 'it') kacheln = italienischKacheln(s, saetze);
    const a = { art: 'satz', id, stufe: st, modus, satz, kacheln };
    if (optionen.ohneWertung) a.ohneWertung = true;
    return a;
  }

  // Aufgaben für junge Wörter mit Sätzen: ab der eigenen Stufe, höchstens maxStufen Stufen.
  // Abwechselnd nach Wörtern geordnet (erst alle Wörter eine Stufe, dann die nächste).
  function aufgabenFuerJunge(ids, { maxStufen = 1 } = {}) {
    const start = ids.filter(hat).map((id) => ({ id, st: stufe(id) })).filter((x) => x.st !== null);
    const liste = [];
    for (let schritt = 0; schritt < maxStufen; schritt++) {
      for (const { id, st } of start) {
        if (st + schritt < Vokabeln.KENNEN_FERTIG) liste.push(aufgabe(id, st + schritt));
      }
    }
    return liste;
  }

  // Satz-Aufgaben für eine Runde, aufgeteilt nach Platz:
  //   vorne  = Stufe-0-Aufgaben (Kennenlernen, kommen vor die Wortpaare)
  //   hinten = alle anderen (kommen nach den Wortpaaren, gemischt)
  // gruppen: [{ ids, maxStufen }] – z. B. neue Wörter 2 Stufen, junge Wörter 1 Stufe.
  // Wörter ohne Sätze oder nicht mehr junge Wörter fallen weg (die laufen wie bisher).
  function rundenAufgaben(gruppen) {
    const alle = gruppen.flatMap((g) => aufgabenFuerJunge(g.ids, { maxStufen: g.maxStufen }));
    return {
      vorne: alle.filter((a) => a.stufe === 0),
      hinten: alle.filter((a) => a.stufe > 0),
    };
  }

  // Aufgaben für die Festigen-Runde (ohne Wertung). Junge Wörter werden noch nicht geschrieben:
  // ohne Sätze „wählen“, mit Sätzen ihre eigene Stufe (mindestens 1). Gelernte Wörter abwechselnd
  // Italienisch → Deutsch und Italienisch schreiben, mit Sätzen Stufe 1–3 reihum.
  function festigenAufgaben(ids) {
    let n = 0;
    return ids.map((id) => {
      const k = Speicher.daten.karten[id];
      if (Vokabeln.istJung(k)) {
        return hat(id)
          ? aufgabe(id, Math.max(1, k.kennen), { ohneWertung: true })
          : { art: 'waehlen', id, modus: 'de', ohneWertung: true };
      }
      const i = n++;
      if (hat(id)) return aufgabe(id, 1 + (i % 3), { ohneWertung: true });
      return { art: i % 2 ? 'frage' : 'deutsch', id, ohneWertung: true };
    }).filter(Boolean);
  }

  // Vor dem Zeigen: passt die gemerkte Aufgabe noch zur Stufe des Worts?
  // (Die Runde wird am Anfang gebaut; ist Stufe 0 danebengegangen, wäre Stufe 1 zu früh.)
  // Ergebnis: dieselbe Aufgabe, eine neue mit der aktuellen Stufe oder null (Wort ist fertig → überspringen).
  // Aufgaben ohne Wertung (Üben gelernter Wörter) bleiben, wie sie sind.
  function aktualisieren(a) {
    if (a.ohneWertung) return a;
    const st = stufe(a.id);
    if (st === null) return null;
    return st === a.stufe ? a : aufgabe(a.id, st);
  }

  // Nach dem Prüfen: richtig und Stufe passt zur Karte → eine Stufe höher. ohneWertung: nichts ändern.
  // Ergebnis: true, wenn die Stufe gestiegen ist.
  function stufeGeschafft(a, gut, ohneWertung = false) {
    if (!gut || ohneWertung || a.ohneWertung) return false;
    const k = Speicher.daten.karten[a.id];
    if (!k || !Vokabeln.istJung(k) || k.kennen !== a.stufe) return false;
    Vokabeln.kennenGelernt(a.id);
    return true;
  }

  // ---------- Lücke ----------

  // Hinweis in Klammern: Grundform bei Verben, sonst die deutsche Bedeutung (kurz)
  function hinweis(a) {
    const w = Vokabeln.wort(a.id);
    if (!w) return '';
    // Verb = ein Wort ohne Artikel auf -are/-ere/-ire (auch -arsi/-ersi/-irsi); „il mare“ ist keins
    if (/^[^\s'’]+(are|ere|ire|arsi|ersi|irsi)$/.test(w.it)) return w.it;
    return w.de.replace(/\s*\([^)]*\)/g, '').split(';')[0].trim();
  }

  // Satz mit ___ statt des Worts
  function lueckenSatz(a) {
    const f = fundstelle(a.satz.it, a.satz.form);
    return f ? a.satz.it.slice(0, f.start) + '___' + a.satz.it.slice(f.ende) : a.satz.it;
  }

  // ---------- Prüfen ----------

  // Lücke genauer: Ergebnis wie Vokabeln.pruefe ({ stufe: 'richtig'|'fast'|'falsch', hinweis })
  function pruefeLuecke(a, text) {
    return Vokabeln.pruefe(text, { it: a.satz.form });
  }

  // antwort: gelegte Kacheln (Liste) oder getippter Text (Lücke)
  function pruefe(a, antwort) {
    if (a.modus === 'kennen' || a.modus === 'de') {
      const ziel = satzKacheln(a.satz.de).map((w) => w.toLowerCase());
      return antwort.length === ziel.length && antwort.every((w, i) => w.toLowerCase() === ziel[i]);
    }
    if (a.modus === 'hoeren' || a.modus === 'it') return Uebungen.pruefeKacheln(antwort, a.satz.it);
    if (a.modus === 'luecke') return pruefeLuecke(a, antwort).stufe !== 'falsch';
    return false;
  }

  return {
    reihenfolge, hat, stufe, aufgabe, aufgabenFuerJunge, rundenAufgaben, festigenAufgaben, aktualisieren, stufeGeschafft, hinweis, lueckenSatz, pruefe, pruefeLuecke,
    fundstelle, satzKacheln,
  };
})();
