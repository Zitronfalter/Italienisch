// Grammatik-Wiederholung: Karteikasten für Grammatik-Kapitel
//
// Wie bei den Vokabeln hat jedes geübte Kapitel ein Fach (1–5). Ist ein Kapitel fällig,
// kommen in der Runde ein paar Aufgaben daraus – selbst erzeugte (erzeuger.js) und
// feste Übungen aus dem Kapitel.
//   alles richtig       → ein Fach weiter, kommt später wieder
//   ein Fehler          → bleibt im Fach
//   mehr Fehler         → zurück in Fach 1 (und Zusatzübungen werden angeboten)
//
// Lernstand: Speicher.daten.fortschritt.grammatik[id] = { …, fach, faellig, zuletzt }
//   zuletzt: Nummern der festen Übungen, die zuletzt bei der Wiederholung dran waren

const Wiederholung = (() => {
  const ABSTAND = { 1: 2, 2: 5, 3: 12, 4: 30, 5: 60 };   // Tage bis zur nächsten Wiederholung
  const SICHER_AB_FACH = 4;
  const MAX_KAPITEL = 2;          // höchstens so viele Kapitel pro Runde
  const AUFGABEN_PRO_KAPITEL = 3;

  function g() {
    const f = Speicher.daten.fortschritt;
    f.grammatik = f.grammatik || {};
    return f.grammatik;
  }

  // Kapitel aus erledigten (auch übersprungenen) Lektionen
  function kapitelAusErledigtenLektionen() {
    const l = Speicher.daten.fortschritt.lektionen || {};
    const ids = new Set();
    for (const lek of LEKTIONEN) {
      if (l[lek.id] && l[lek.id].erledigt) for (const k of lek.kapitel || []) ids.add(k);
    }
    return ids;
  }

  // Geübte Kapitel ohne Fach bekommen eins. Damit nicht alle am selben Tag kommen,
  // werden sie auf die nächsten Tage verteilt (eins pro Tag).
  function einsortieren() {
    const aus = kapitelAusErledigtenLektionen();
    const neu = KAPITEL.filter((k) => {
      const s = g()[k.id];
      return !(s && s.fach) && ((s && s.geuebt) || aus.has(k.id));
    });
    neu.forEach((k, i) => {
      g()[k.id] = { ...(g()[k.id] || {}), fach: 1, faellig: Vokabeln.inTagen(ABSTAND[1] + i) };
    });
    if (neu.length) Speicher.speichern();
  }

  function faellige() {
    einsortieren();
    const h = Vokabeln.heute();
    return KAPITEL
      .filter((k) => g()[k.id] && g()[k.id].fach && g()[k.id].faellig <= h)
      .sort((a, b) => g()[a.id].faellig.localeCompare(g()[b.id].faellig) || g()[a.id].fach - g()[b.id].fach)
      .map((k) => k.id);
  }

  function fuerRunde() {
    return faellige().slice(0, MAX_KAPITEL);
  }

  function mischen(liste) {
    const a = [...liste];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // Feste Übungen (Lücke/Kacheln), die zuletzt nicht dran waren
  function festeUebungen(id, anzahl) {
    const k = Grammatik.kapitel(id);
    const zuletzt = (g()[id] && g()[id].zuletzt) || [];
    const nummern = k.uebungen.map((u, i) => i).filter((i) => ['luecke', 'kacheln'].includes(k.uebungen[i].art))
      .filter((i) => !heuteGeloest({ art: 'grammatik', kapitel: id, nr: i }));   // heute schon richtig → nicht nochmal
    const frisch = mischen(nummern.filter((i) => !zuletzt.includes(i)));
    const alt = mischen(nummern.filter((i) => zuletzt.includes(i)));
    return [...frisch, ...alt].slice(0, anzahl);
  }

  // Aufgaben für ein Kapitel: mit Erzeuger 2 erzeugte + 1 feste, sonst 3 feste
  function aufgabenFuer(id) {
    const erzeugt = [];
    if (Erzeuger.hat(id)) {
      const gesehen = new Set();
      for (let versuch = 0; erzeugt.length < AUFGABEN_PRO_KAPITEL - 1 && versuch < 20; versuch++) {
        const u = Erzeuger.aufgabe(id);
        if (u && !gesehen.has(u.satz) && !heuteGeloest({ art: 'grammatik', kapitel: id, uebung: u })) {
          gesehen.add(u.satz);
          erzeugt.push(u);
        }
      }
    }
    const feste = festeUebungen(id, AUFGABEN_PRO_KAPITEL - erzeugt.length);
    const s = g()[id];
    if (s) s.zuletzt = feste;
    return [
      ...erzeugt.map((u) => ({ art: 'grammatik', kapitel: id, uebung: u })),
      ...feste.map((nr) => ({ art: 'grammatik', kapitel: id, nr })),
    ];
  }

  // ---------- Falsch gelöste Übungen ----------
  //
  // Jede falsche Grammatik- oder Hör-Übung kommt auf eine Liste (fortschritt.fehler).
  // Ab dem nächsten Tag kommt sie in der Wiederholung und in Wiederholungs-Lektionen wieder.
  // Einmal richtig gelöst → sie fällt von der Liste.
  const MAX_FEHLER_LISTE = 60;

  function fehlerListe() {
    const f = Speicher.daten.fortschritt;
    f.fehler = f.fehler || [];
    return f.fehler;
  }

  function schluessel(a) {
    if (a.art === 'hoeren') return 'h:' + a.satz.it;
    if (a.art === 'deutsch') return 'd:' + a.id;
    if (a.uebung) return `g:${a.kapitel}:${a.uebung.satz}`;
    return `g:${a.kapitel}:${a.nr}`;
  }

  // ---------- Heute schon richtig gelöst? ----------
  //
  // fortschritt.heute = { datum, gesehen: [schluessel] } – nur richtig gelöste Aufgaben.
  // Sie kommen am selben Tag nicht noch einmal; falsche dürfen wiederkommen.

  function heuteListe() {
    const f = Speicher.daten.fortschritt;
    const h = Vokabeln.heute();
    if (!f.heute || f.heute.datum !== h) f.heute = { datum: h, gesehen: [] };
    return f.heute.gesehen;
  }

  function heuteGeloest(a) {
    return Boolean(a) && heuteListe().includes(schluessel(a));
  }

  // a: Aufgabe wie in der Aufgabenrunde ({ art: 'grammatik', kapitel, nr | uebung }, { art: 'hoeren', satz }
  // oder { art: 'deutsch', id })
  function fehlerMerken(a, gut) {
    if (a && gut && ['grammatik', 'hoeren', 'deutsch'].includes(a.art)) {
      const liste = heuteListe();
      const key = schluessel(a);
      if (!liste.includes(key)) { liste.push(key); Speicher.speichern(); }
    }
    if (!a || (a.art !== 'grammatik' && a.art !== 'hoeren')) return;
    const liste = fehlerListe();
    const key = schluessel(a);
    const i = liste.findIndex((x) => x.key === key);
    if (gut) {
      if (i >= 0) { liste.splice(i, 1); Speicher.speichern(); }
      return;
    }
    const eintrag = { key, art: a.art, datum: Vokabeln.heute() };
    if (a.art === 'hoeren') eintrag.satz = a.satz;
    else {
      eintrag.kapitel = a.kapitel;
      if (a.uebung) eintrag.uebung = a.uebung; else eintrag.nr = a.nr;
    }
    if (i >= 0) liste.splice(i, 1);
    liste.push(eintrag);
    while (liste.length > MAX_FEHLER_LISTE) liste.shift();
    Speicher.speichern();
  }

  // Falsche Übungen von früheren Tagen (die ältesten zuerst), als Aufgaben
  function faelligeFehler(max = 4) {
    const h = Vokabeln.heute();
    return fehlerListe()
      .filter((x) => x.datum < h && (x.art === 'hoeren' || Grammatik.kapitel(x.kapitel)))
      .slice(0, max)
      .map((x) => (x.art === 'hoeren'
        ? { art: 'hoeren', satz: x.satz, ausFehler: true }
        : { art: 'grammatik', kapitel: x.kapitel, ...(x.uebung ? { uebung: x.uebung } : { nr: x.nr }), ausFehler: true }));
  }

  function anzahlFehler() { return fehlerListe().length; }

  // Alle Aufgaben für die Runde, gemischt (abwechselnd üben hilft beim Behalten):
  // fällige Kapitel und bis zu 4 Übungen, die früher falsch waren
  function rundeAufgaben() {
    const aufgaben = fuerRunde().flatMap(aufgabenFuer);
    const schon = new Set(aufgaben.map(schluessel));
    const fehler = faelligeFehler().filter((a) => !schon.has(schluessel(a)));
    Speicher.speichern();
    return mischen([...aufgaben, ...fehler]);
  }

  // Gibt es heute etwas zu wiederholen?
  function etwasFaellig() {
    return fuerRunde().length > 0 || faelligeFehler(1).length > 0;
  }

  function eintragen(id, richtig, von) {
    const s = g()[id];
    if (!s || !s.fach) return;
    const fehler = von - richtig;
    if (fehler === 0) s.fach = Math.min(5, s.fach + 1);
    else if (fehler > 1) s.fach = 1;
    s.faellig = Vokabeln.inTagen(ABSTAND[s.fach]);
    s.wiederholt = { richtig, von, datum: Vokabeln.heute() };
    Speicher.speichern();
  }

  function fach(id) { return (g()[id] && g()[id].fach) || 0; }

  function anzahlSicher() {
    return KAPITEL.filter((k) => fach(k.id) >= SICHER_AB_FACH).length;
  }

  // Wie viele Kapitel in Fach 1 … 5 liegen
  function verteilung() {
    const v = [0, 0, 0, 0, 0];
    for (const k of KAPITEL) if (fach(k.id)) v[fach(k.id) - 1] += 1;
    return v;
  }

  return {
    einsortieren, faellige, fuerRunde, rundeAufgaben, aufgabenFuer, eintragen, fach, anzahlSicher, verteilung, ABSTAND,
    fehlerMerken, faelligeFehler, anzahlFehler, etwasFaellig, heuteGeloest,
  };
})();
