// Erzeuger: baut Grammatik-Aufgaben selbst – aus Regeln, Tabellen und deinem Wortschatz.
//
// So gibt es bei der Wiederholung immer wieder neue Aufgaben, die man nicht auswendig kennt.
// Jede Aufgabe sieht aus wie eine normale Lücken-Übung:
//   { art: 'luecke', de, satz (mit ___), loesung, auch?, erzeugt: true }
//
// Nur Verben aus den Listen unten werden benutzt. Unregelmäßige Formen stehen einzeln
// in den Tabellen – so entstehen keine falschen Formen. Neue Verben nur eintragen, wenn
// sie auch im Wortschatz stehen (Test: werkzeuge/test/erzeuger.test.js).

const Erzeuger = (() => {
  const PERSONEN = ['io', 'tu', 'lui', 'noi', 'voi', 'loro'];

  // ---------- Verben ----------

  const ARE = [
    'parlare', 'guardare', 'ascoltare', 'cercare', 'trovare', 'aspettare', 'abitare', 'lavorare',
    'comprare', 'pagare', 'mangiare', 'tornare', 'arrivare', 'viaggiare', 'entrare', 'restare',
    'aiutare', 'pensare', 'amare', 'cominciare', 'imparare', 'studiare', 'ordinare', 'giocare',
    'usare', 'prenotare', 'nuotare', 'portare', 'camminare', 'mandare', 'chiamare', 'ricordare',
    'dimenticare', 'provare', 'lasciare', 'cucinare', 'tagliare', 'preparare', 'cambiare', 'sperare',
    'controllare', 'organizzare', 'spiegare', 'raccontare', 'incontrare', 'salutare', 'insegnare',
    'assaggiare', 'regalare', 'risparmiare', 'diventare', 'consigliare',
  ];
  const ERE = [
    'chiedere', 'rispondere', 'vedere', 'leggere', 'scrivere', 'chiudere', 'prendere', 'credere',
    'vendere', 'spendere', 'perdere', 'vivere', 'correre', 'mettere', 'decidere', 'ripetere',
    'ricevere', 'ridere', 'permettere', 'conoscere', 'vincere',
  ];
  const IRE = ['sentire', 'aprire', 'dormire', 'partire', 'servire', 'coprire', 'scoprire'];
  const ISC = ['capire', 'finire', 'preferire', 'spedire', 'costruire', 'restituire'];
  const UNREGELMAESSIG = [
    'essere', 'avere', 'fare', 'volere', 'potere', 'dovere', 'sapere', 'dire', 'dare', 'stare',
    'andare', 'venire', 'uscire', 'bere',
  ];

  // Gegenwart der unregelmäßigen Verben
  const PRAESENS = {
    essere: ['sono', 'sei', 'è', 'siamo', 'siete', 'sono'],
    avere: ['ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'],
    fare: ['faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno'],
    volere: ['voglio', 'vuoi', 'vuole', 'vogliamo', 'volete', 'vogliono'],
    potere: ['posso', 'puoi', 'può', 'possiamo', 'potete', 'possono'],
    dovere: ['devo', 'devi', 'deve', 'dobbiamo', 'dovete', 'devono'],
    sapere: ['so', 'sai', 'sa', 'sappiamo', 'sapete', 'sanno'],
    dire: ['dico', 'dici', 'dice', 'diciamo', 'dite', 'dicono'],
    dare: ['do', 'dai', 'dà', 'diamo', 'date', 'danno'],
    stare: ['sto', 'stai', 'sta', 'stiamo', 'state', 'stanno'],
    andare: ['vado', 'vai', 'va', 'andiamo', 'andate', 'vanno'],
    venire: ['vengo', 'vieni', 'viene', 'veniamo', 'venite', 'vengono'],
    uscire: ['esco', 'esci', 'esce', 'usciamo', 'uscite', 'escono'],
    bere: ['bevo', 'bevi', 'beve', 'beviamo', 'bevete', 'bevono'],
  };

  // Zukunft und „würde“: unregelmäßiger Stamm
  const ZUKUNFT_STAMM = {
    essere: 'sar', avere: 'avr', fare: 'far', dare: 'dar', stare: 'star', andare: 'andr',
    dovere: 'dovr', potere: 'potr', sapere: 'sapr', vedere: 'vedr', vivere: 'vivr', venire: 'verr',
    volere: 'vorr', bere: 'berr', dire: 'dir', uscire: 'uscir',
  };

  // Früher (imperfetto): unregelmäßig
  const IMPERFETTO = {
    essere: ['ero', 'eri', 'era', 'eravamo', 'eravate', 'erano'],
  };
  const IMPERFETTO_STAMM = { fare: 'face', bere: 'beve', dire: 'dice' };

  // Partizip (gemacht, gegessen …): unregelmäßig
  const PARTIZIP = {
    essere: 'stato', stare: 'stato', fare: 'fatto', dire: 'detto', leggere: 'letto', scrivere: 'scritto',
    chiudere: 'chiuso', prendere: 'preso', vedere: 'visto', rispondere: 'risposto', chiedere: 'chiesto',
    aprire: 'aperto', coprire: 'coperto', scoprire: 'scoperto', mettere: 'messo', permettere: 'permesso',
    decidere: 'deciso', perdere: 'perso', spendere: 'speso', vivere: 'vissuto', correre: 'corso',
    ridere: 'riso', vincere: 'vinto', bere: 'bevuto', venire: 'venuto', conoscere: 'conosciuto',
  };

  // Vergangenheit mit essere (Endung passt sich an: andato, andata, andati)
  const MIT_ESSERE = [
    'andare', 'venire', 'tornare', 'arrivare', 'partire', 'uscire', 'entrare', 'restare', 'diventare',
    'stare', 'essere',
  ];
  // Für die Vergangenheit nicht geeignet (Hilfsverb unklar oder selten so benutzt)
  const NICHT_PASSATO = ['volere', 'potere', 'dovere', 'vivere', 'correre', 'sapere'];

  const GERUNDIO = { fare: 'facendo', bere: 'bevendo', dire: 'dicendo' };

  function gruppe(inf) {
    if (ISC.includes(inf)) return 'isc';
    if (inf.endsWith('are')) return 'are';
    if (inf.endsWith('ere')) return 'ere';
    return 'ire';
  }

  // Gegenwart, Person 0–5
  function praesens(inf, p) {
    if (PRAESENS[inf]) return PRAESENS[inf][p];
    const g = gruppe(inf);
    const stamm = inf.slice(0, -3);
    if (g === 'are') {
      const hart = /[cg]$/.test(stamm);       // cercare → cerchi, pagare → paghiamo
      const i = stamm.endsWith('i');          // mangiare → mangi, studiare → studiamo
      if (p === 1) return i ? stamm : stamm + (hart ? 'hi' : 'i');
      if (p === 3) return i ? stamm + 'amo' : stamm + (hart ? 'hiamo' : 'iamo');
      return stamm + ['o', '', 'a', '', 'ate', 'ano'][p];
    }
    if (g === 'isc') return stamm + ['isco', 'isci', 'isce', 'iamo', 'ite', 'iscono'][p];
    return stamm + (g === 'ere'
      ? ['o', 'i', 'e', 'iamo', 'ete', 'ono']
      : ['o', 'i', 'e', 'iamo', 'ite', 'ono'])[p];
  }

  function zukunftStamm(inf) {
    if (ZUKUNFT_STAMM[inf]) return ZUKUNFT_STAMM[inf];
    const stamm = inf.slice(0, -3);
    if (inf.endsWith('are')) {
      if (/[cg]iare$/.test(inf)) return stamm.slice(0, -1) + 'er';   // mangiare → manger-
      if (/[cg]are$/.test(inf)) return stamm + 'her';                  // cercare → cercher-
      return stamm + 'er';
    }
    return inf.endsWith('ere') ? stamm + 'er' : stamm + 'ir';
  }

  function zukunft(inf, p) {
    return zukunftStamm(inf) + ['ò', 'ai', 'à', 'emo', 'ete', 'anno'][p];
  }

  function konditional(inf, p) {
    return zukunftStamm(inf) + ['ei', 'esti', 'ebbe', 'emmo', 'este', 'ebbero'][p];
  }

  function imperfetto(inf, p) {
    if (IMPERFETTO[inf]) return IMPERFETTO[inf][p];
    const stamm = IMPERFETTO_STAMM[inf] || inf.slice(0, -2);    // parlare → parla-
    return stamm + ['vo', 'vi', 'va', 'vamo', 'vate', 'vano'][p];
  }

  function partizip(inf) {
    if (PARTIZIP[inf]) return PARTIZIP[inf];
    const stamm = inf.slice(0, -3);
    return stamm + { are: 'ato', ere: 'uto', ire: 'ito', isc: 'ito' }[gruppe(inf)];
  }

  function gerundio(inf) {
    if (GERUNDIO[inf]) return GERUNDIO[inf];
    return inf.slice(0, -3) + (inf.endsWith('are') ? 'ando' : 'endo');
  }

  // Zusammengesetzte Vergangenheit: Hilfsverb (in der passenden Zeit) + Partizip.
  // person: Index 0–5, wer: 'lui' oder 'lei' (für die Endung bei essere)
  function zusammengesetzt(inf, p, wer, hilfsZeit) {
    const essere = MIT_ESSERE.includes(inf);
    const hilf = hilfsZeit(essere ? 'essere' : 'avere', p);
    const part = partizip(inf);
    if (!essere) return { loesung: `${hilf} ${part}`, auch: [] };
    const stamm = part.slice(0, -1);
    let endungen;
    if (p === 2) endungen = wer === 'lei' ? ['a'] : ['o'];
    else if (p < 2) endungen = ['o', 'a'];
    else endungen = ['i', 'e'];
    const formen = endungen.map((e) => `${hilf} ${stamm}${e}`);
    return { loesung: formen[0], auch: formen.slice(1) };
  }

  // ---------- Wörter aus dem Wortschatz ----------

  function eintrag(it) { return WORTSCHATZ.find((w) => w.it === it); }

  // Erste Bedeutung ohne Klammer: „hinausgehen; ausgehen“ → „hinausgehen“
  function kurz(de) { return de.split(';')[0].replace(/\s*\(.*?\)/g, '').trim(); }

  function zufall(liste) { return liste[Math.floor(Math.random() * liste.length)]; }

  // Bevorzugt Wörter, die du schon kennst (Karte im Karteikasten, fertig kennengelernt).
  function bekannt(it) {
    const k = Speicher.daten.karten[wortId(it)];
    return Boolean(k && !(typeof k.kennen === 'number' && k.kennen < Vokabeln.KENNEN_FERTIG));
  }

  // Reihenfolge der Wörter im Lernweg: Wort-ID → Nummer der Lektion
  function lektionsNr() {
    const m = new Map();
    for (const l of Lektionen.alle()) for (const id of l.wortIds) if (!m.has(id)) m.set(id, l.nr);
    return m;
  }

  // Zu wenige bekannte Wörter? Dann die frühesten aus dem Lernweg: alle bis zur aktuellen Lektion,
  // und – wenn das nicht reicht – die nächsten, bis es genug sind. Sonst null (dann alle).
  function fruehe(liste, idVon, mindestens) {
    const nr = lektionsNr();
    const a = Lektionen.aktuelle();
    const sortiert = liste.filter((x) => nr.has(idVon(x))).sort((x, y) => nr.get(idVon(x)) - nr.get(idVon(y)));
    if (!sortiert.length) return null;
    const bis = a ? sortiert.filter((x) => nr.get(idVon(x)) <= a.nr) : [];
    return bis.length >= mindestens ? bis : sortiert.slice(0, Math.max(mindestens, bis.length));
  }

  // Erst Wörter, die du kennst; sind es zu wenige, Wörter bis zur aktuellen Lektion; erst danach alle
  function auswahl(liste, mindestens) {
    const da = liste.filter((it) => eintrag(it));
    const gekannt = da.filter(bekannt);
    if (gekannt.length >= mindestens) return gekannt;
    return fruehe(da, (it) => wortId(it), mindestens) || da;
  }

  function verbAufgabe(verben, zeitName, form) {
    const inf = zufall(auswahl(verben, 4));
    const p = Math.floor(Math.random() * 6);
    const wer = p === 2 ? zufall(['lui', 'lei']) : PERSONEN[p];
    const ergebnis = form(inf, p, wer);
    const w = eintrag(inf);
    return {
      art: 'luecke',
      de: zeitName,
      satz: `${wer} ___ (${inf} = ${kurz(w.de)})`,
      loesung: typeof ergebnis === 'string' ? ergebnis : ergebnis.loesung,
      auch: typeof ergebnis === 'string' ? [] : ergebnis.auch,
      erzeugt: true,
    };
  }

  // Nomen mit Artikel: { artikel, rest, w }
  function nomen() {
    return WORTSCHATZ
      .map((w) => {
        const m = w.it.match(/^(il|lo|la|i|gli|le) (.+)$/) || w.it.match(/^(l')(.+)$/);
        return m && !m[2].includes('?') ? { artikel: m[1], rest: m[2], w } : null;
      })
      .filter(Boolean);
  }

  function nomenAuswahl() {
    const alle = nomen();
    const gekannt = alle.filter((n) => bekannt(n.w.it));
    if (gekannt.length >= 10) return gekannt;
    return fruehe(alle, (n) => n.w.id, 10) || alle;
  }

  function lueckeVor(artikel, rest) {
    return artikel.endsWith("'") ? `___${rest}` : `___ ${rest}`;
  }

  function artikelAufgabe() {
    const n = zufall(nomenAuswahl());
    return {
      art: 'luecke',
      de: "Welcher Artikel? (il, lo, la, l', i, gli, le)",
      satz: `${lueckeVor(n.artikel, n.rest)} (${kurz(n.w.de)})`,
      loesung: n.artikel,
      erzeugt: true,
    };
  }

  const UNBESTIMMT = { il: 'un', lo: 'uno', la: 'una' };

  function einAufgabe() {
    const n = zufall(nomenAuswahl().filter((x) => UNBESTIMMT[x.artikel]));
    return {
      art: 'luecke',
      de: "Ein oder eine? (un, uno, una, un')",
      satz: `___ ${n.rest} (${kurz(n.w.de).replace(/^(der|die|das) /, '')})`,
      loesung: UNBESTIMMT[n.artikel],
      erzeugt: true,
    };
  }

  const PRAEP = {
    di: { il: 'del', lo: 'dello', la: 'della', "l'": "dell'", i: 'dei', gli: 'degli', le: 'delle' },
    a: { il: 'al', lo: 'allo', la: 'alla', "l'": "all'", i: 'ai', gli: 'agli', le: 'alle' },
    da: { il: 'dal', lo: 'dallo', la: 'dalla', "l'": "dall'", i: 'dai', gli: 'dagli', le: 'dalle' },
    in: { il: 'nel', lo: 'nello', la: 'nella', "l'": "nell'", i: 'nei', gli: 'negli', le: 'nelle' },
    su: { il: 'sul', lo: 'sullo', la: 'sulla', "l'": "sull'", i: 'sui', gli: 'sugli', le: 'sulle' },
  };

  function praepAufgabe() {
    const n = zufall(nomenAuswahl());
    const p = zufall(Object.keys(PRAEP));
    return {
      art: 'luecke',
      de: `${p} + Artikel – zusammen ein Wort`,
      satz: `${lueckeVor(PRAEP[p][n.artikel], n.rest)} (${p} + ${n.artikel})`,
      loesung: PRAEP[p][n.artikel],
      erzeugt: true,
    };
  }

  // ---------- Welches Kapitel bekommt welche Aufgaben? ----------

  const REGELMAESSIG = [...ARE, ...ERE, ...IRE, ...ISC];
  const ALLE = [...REGELMAESSIG, ...UNREGELMAESSIG];
  const PASSATO = ALLE.filter((v) => !NICHT_PASSATO.includes(v));
  const PASSATO_AVERE = PASSATO.filter((v) => !MIT_ESSERE.includes(v));
  const PASSATO_ESSERE = MIT_ESSERE;

  const KAPITEL_ERZEUGER = {
    'essere-un': () => (Math.random() < 0.5
      ? verbAufgabe(['essere'], 'Gegenwart', praesens)
      : einAufgabe()),
    artikel: artikelAufgabe,
    'verben-are': () => verbAufgabe(ARE, 'Gegenwart', praesens),
    'essere-avere': () => verbAufgabe(['essere', 'avere'], 'Gegenwart', praesens),
    'verben-ere-ire': () => verbAufgabe([...ERE, ...IRE, ...ISC], 'Gegenwart', praesens),
    modalverben: () => verbAufgabe(['volere', 'potere', 'dovere'], 'Gegenwart', praesens),
    praepositionen: praepAufgabe,
    'passato-avere': () => verbAufgabe(PASSATO_AVERE, 'Vergangenheit (ho …)',
      (inf, p, wer) => zusammengesetzt(inf, p, wer, praesens)),
    'passato-essere': () => verbAufgabe(PASSATO_ESSERE, 'Vergangenheit (sono …)',
      (inf, p, wer) => zusammengesetzt(inf, p, wer, praesens)),
    imperfetto: () => verbAufgabe(ALLE, 'früher (imperfetto)', imperfetto),
    futuro: () => verbAufgabe(ALLE, 'Zukunft', zukunft),
    condizionale: () => verbAufgabe(ALLE, '„würde“ (condizionale)', konditional),
    gerundio: () => verbAufgabe(ALLE.filter((v) => v !== 'stare' && v !== 'essere'), 'gerade jetzt (sto …)',
      (inf, p) => `${PRAESENS.stare[p]} ${gerundio(inf)}`),
    trapassato: () => verbAufgabe(PASSATO, 'war schon passiert (avevo …)',
      (inf, p, wer) => zusammengesetzt(inf, p, wer, imperfetto)),
  };

  function hat(kapitelId) { return Boolean(KAPITEL_ERZEUGER[kapitelId]); }

  // Eine neue Aufgabe für das Kapitel – oder null, wenn es keinen Erzeuger gibt
  function aufgabe(kapitelId) {
    const f = KAPITEL_ERZEUGER[kapitelId];
    return f ? f() : null;
  }

  return {
    hat, aufgabe,
    // für Tests
    praesens, zukunft, konditional, imperfetto, partizip, gerundio, zusammengesetzt,
    VERBEN: ALLE, KAPITEL_IDS: Object.keys(KAPITEL_ERZEUGER), PRAEP,
  };
})();
