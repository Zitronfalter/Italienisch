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
    const nummern = k.uebungen.map((u, i) => i).filter((i) => ['luecke', 'kacheln'].includes(k.uebungen[i].art));
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
        if (u && !gesehen.has(u.satz)) { gesehen.add(u.satz); erzeugt.push(u); }
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

  // Alle Aufgaben für die Runde, gemischt (abwechselnd üben hilft beim Behalten)
  function rundeAufgaben() {
    const aufgaben = fuerRunde().flatMap(aufgabenFuer);
    Speicher.speichern();
    return mischen(aufgaben);
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

  return { einsortieren, faellige, fuerRunde, rundeAufgaben, aufgabenFuer, eintragen, fach, anzahlSicher, verteilung, ABSTAND };
})();
