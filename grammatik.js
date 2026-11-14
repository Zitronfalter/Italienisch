// Grammatik: Kapitel mit kurzer Regel, Tabelle und Übungen
//
// regel:    Absätze auf Deutsch (kurz!)
// tabelle:  { kopf: [...], zeilen: [[...], ...] }
// kurz:     Regel in einem Satz – wird bei einem Fehler angezeigt
// uebungen: { art: 'luecke', de, satz (mit ___), loesung, auch? }
//           { art: 'kacheln', de, it (richtiger Satz), extra: [falsche Kacheln], auch? }

const KAPITEL = [
  {
    id: 'artikel', titel: 'Der Artikel: il, lo, la …', stufe: 'A1',
    regel: [
      'Jedes Nomen ist männlich oder weiblich. Der Artikel hängt vom Geschlecht und vom ersten Buchstaben ab.',
      'Faustregel: Wörter auf -o sind meist männlich, Wörter auf -a meist weiblich. Bei -e hilft nur: mit Artikel lernen.',
      'lo steht vor s + Konsonant (lo studente) und vor z (lo zucchero). Vor einem Vokal wird der Artikel zu l\'.',
    ],
    tabelle: {
      kopf: ['', 'Einzahl', 'Mehrzahl'],
      zeilen: [
        ['männlich', 'il libro', 'i libri'],
        ['männlich: s+Kons., z', 'lo studente', 'gli studenti'],
        ['männlich: Vokal', "l'amico", 'gli amici'],
        ['weiblich', 'la casa', 'le case'],
        ['weiblich: Vokal', "l'amica", 'le amiche'],
      ],
    },
    kurz: "Männlich: il / lo / l' – Mehrzahl i / gli. Weiblich: la / l' – Mehrzahl le.",
    uebungen: [
      { art: 'luecke', de: 'das Brot', satz: '___ pane', loesung: 'il' },
      { art: 'luecke', de: 'das Wasser', satz: '___ acqua', loesung: "l'" },
      { art: 'luecke', de: 'der Zucker', satz: '___ zucchero', loesung: 'lo' },
      { art: 'kacheln', de: 'Der Wein und das Brot', it: 'il vino e il pane', extra: ['la', 'lo'] },
      { art: 'luecke', de: 'die Häuser', satz: '___ case', loesung: 'le' },
      { art: 'luecke', de: 'die Freunde', satz: '___ amici', loesung: 'gli' },
    ],
  },

  {
    id: 'verben-are', titel: 'Verben auf -are (Gegenwart)', stufe: 'A1',
    regel: [
      'Die meisten Verben enden auf -are. Für die Gegenwart nimmst du -are weg und hängst die passende Endung an.',
      'Das Wort für „ich, du, er …“ lässt man meist weg: parlo = ich spreche.',
      'Verben auf -iare (mangiare) haben nur ein i: mangi, mangiamo.',
    ],
    tabelle: {
      kopf: ['Person', 'Endung', 'parlare'],
      zeilen: [
        ['io (ich)', '-o', 'parlo'],
        ['tu (du)', '-i', 'parli'],
        ['lui / lei (er / sie)', '-a', 'parla'],
        ['noi (wir)', '-iamo', 'parliamo'],
        ['voi (ihr)', '-ate', 'parlate'],
        ['loro (sie)', '-ano', 'parlano'],
      ],
    },
    kurz: 'Endungen bei -are: -o, -i, -a, -iamo, -ate, -ano.',
    uebungen: [
      { art: 'luecke', de: 'Ich spreche Italienisch.', satz: 'Io ___ italiano. (parlare)', loesung: 'parlo' },
      { art: 'luecke', de: 'Wohnst du in Rom?', satz: 'Tu ___ a Roma? (abitare)', loesung: 'abiti' },
      { art: 'kacheln', de: 'Sie kaufen das Brot. (Mehrzahl)', it: 'Loro comprano il pane', extra: ['compra', 'la'] },
      { art: 'luecke', de: 'Marco arbeitet in einer Bar.', satz: 'Marco ___ in un bar. (lavorare)', loesung: 'lavora' },
      { art: 'luecke', de: 'Wir essen die Nudeln.', satz: 'Noi ___ la pasta. (mangiare)', loesung: 'mangiamo' },
      { art: 'kacheln', de: 'Ihr sprecht gut.', it: 'Parlate bene', extra: ['parliamo', 'buono'] },
    ],
  },

  {
    id: 'essere-avere', titel: 'essere (sein) und avere (haben)', stufe: 'A1',
    regel: [
      'Die zwei wichtigsten Verben sind unregelmäßig. Am besten auswendig lernen.',
      'Achtung beim Alter: Ho trent\'anni = ich bin dreißig (wörtlich: ich habe 30 Jahre). Auch Hunger und Durst „hat“ man: ho fame, ho sete.',
    ],
    tabelle: {
      kopf: ['Person', 'essere', 'avere'],
      zeilen: [
        ['io', 'sono', 'ho'],
        ['tu', 'sei', 'hai'],
        ['lui / lei', 'è', 'ha'],
        ['noi', 'siamo', 'abbiamo'],
        ['voi', 'siete', 'avete'],
        ['loro', 'sono', 'hanno'],
      ],
    },
    kurz: 'essere: sono, sei, è, siamo, siete, sono – avere: ho, hai, ha, abbiamo, avete, hanno.',
    uebungen: [
      { art: 'luecke', de: 'Ich bin Deutsche.', satz: 'Io ___ tedesca. (essere)', loesung: 'sono' },
      { art: 'luecke', de: 'Anna ist 32 Jahre alt.', satz: 'Anna ___ trentadue anni. (avere)', loesung: 'ha' },
      { art: 'kacheln', de: 'Sie haben einen Hund. (Mehrzahl)', it: 'Hanno un cane', extra: ['sono', 'una'] },
      { art: 'luecke', de: 'Wir sind im Urlaub.', satz: 'Noi ___ in vacanza. (essere)', loesung: 'siamo' },
      { art: 'luecke', de: 'Hast du Hunger?', satz: 'Tu ___ fame? (avere)', loesung: 'hai' },
      { art: 'kacheln', de: 'Das Hotel ist teuer.', it: "L'albergo è caro", extra: ['ha', 'cara'] },
    ],
  },

  {
    id: 'verben-ere-ire', titel: 'Verben auf -ere und -ire', stufe: 'A1',
    regel: [
      'Verben auf -ere und -ire funktionieren wie die auf -are, nur mit etwas anderen Endungen.',
      'Viele -ire-Verben schieben -isc- ein: capisco (ich verstehe), finisco, preferisco – aber nicht bei noi und voi.',
    ],
    tabelle: {
      kopf: ['Person', 'prendere', 'dormire', 'capire'],
      zeilen: [
        ['io', 'prendo', 'dormo', 'capisco'],
        ['tu', 'prendi', 'dormi', 'capisci'],
        ['lui / lei', 'prende', 'dorme', 'capisce'],
        ['noi', 'prendiamo', 'dormiamo', 'capiamo'],
        ['voi', 'prendete', 'dormite', 'capite'],
        ['loro', 'prendono', 'dormono', 'capiscono'],
      ],
    },
    kurz: '-ere: -o, -i, -e, -iamo, -ete, -ono. -ire: -o, -i, -e, -iamo, -ite, -ono (oft mit -isc-).',
    uebungen: [
      { art: 'luecke', de: 'Ich nehme einen Kaffee.', satz: 'Io ___ un caffè. (prendere)', loesung: 'prendo' },
      { art: 'luecke', de: 'Giulia liest ein Buch.', satz: 'Giulia ___ un libro. (leggere)', loesung: 'legge' },
      { art: 'kacheln', de: 'Ich verstehe nicht.', it: 'Non capisco', extra: ['capiamo', 'no'] },
      { art: 'luecke', de: 'Verstehst du Italienisch?', satz: "Tu ___ l'italiano? (capire)", loesung: 'capisci' },
      { art: 'luecke', de: 'Sie schlafen bis neun. (Mehrzahl)', satz: 'Loro ___ fino alle nove. (dormire)', loesung: 'dormono' },
      { art: 'kacheln', de: 'Wir schreiben einen Brief.', it: 'Scriviamo una lettera', extra: ['scrivono', 'un'] },
    ],
  },

  {
    id: 'praepositionen', titel: 'a, di, in … + Artikel: al, del, nel', stufe: 'A2',
    regel: [
      'Die kleinen Wörter a, da, di, in und su verschmelzen mit dem Artikel: a + il = al.',
      'So entstehen z. B. al bar (in der Bar), alla stazione (am Bahnhof), nel forno (im Ofen), sul tavolo (auf dem Tisch).',
    ],
    tabelle: {
      kopf: ['', 'il', 'la', "l'", 'i', 'le'],
      zeilen: [
        ['a', 'al', 'alla', "all'", 'ai', 'alle'],
        ['da', 'dal', 'dalla', "dall'", 'dai', 'dalle'],
        ['di', 'del', 'della', "dell'", 'dei', 'delle'],
        ['in', 'nel', 'nella', "nell'", 'nei', 'nelle'],
        ['su', 'sul', 'sulla', "sull'", 'sui', 'sulle'],
      ],
    },
    kurz: 'a / da / di / in / su + Artikel verschmelzen: al, dal, del, nel, sul …',
    uebungen: [
      { art: 'luecke', de: 'Marco geht in die Bar.', satz: 'Marco va ___ bar. (a + il)', loesung: 'al' },
      { art: 'luecke', de: 'Der Zug fährt vom Bahnhof ab.', satz: 'Il treno parte ___ stazione. (da + la)', loesung: 'dalla' },
      { art: 'kacheln', de: 'Wir gehen ans Meer.', it: 'Andiamo al mare', extra: ['alla', 'nel'] },
      { art: 'luecke', de: 'Gib die Pizza in den Ofen.', satz: 'Metti la pizza ___ forno. (in + il)', loesung: 'nel' },
      { art: 'luecke', de: 'Das Buch liegt auf dem Tisch.', satz: 'Il libro è ___ tavolo. (su + il)', loesung: 'sul' },
      { art: 'luecke', de: 'der Orangensaft', satz: "il succo ___ arancia (di + l')", loesung: "dell'" },
    ],
  },

  {
    id: 'reflexiv', titel: 'Verben mit „sich“: mi alzo', stufe: 'A2',
    regel: [
      'Manche Verben haben ein „sich“: alzarsi = aufstehen, chiamarsi = heißen.',
      'Das kleine Wort steht vor dem Verb und passt sich der Person an: mi alzo = ich stehe auf, ti alzi = du stehst auf.',
    ],
    tabelle: {
      kopf: ['Person', '„sich“', 'alzarsi'],
      zeilen: [
        ['io', 'mi', 'mi alzo'],
        ['tu', 'ti', 'ti alzi'],
        ['lui / lei', 'si', 'si alza'],
        ['noi', 'ci', 'ci alziamo'],
        ['voi', 'vi', 'vi alzate'],
        ['loro', 'si', 'si alzano'],
      ],
    },
    kurz: 'mi, ti, si, ci, vi, si stehen vor dem Verb: mi alzo, ti alzi, si alza …',
    uebungen: [
      { art: 'luecke', de: 'Ich stehe um sieben auf.', satz: 'Io ___ alzo alle sette.', loesung: 'mi' },
      { art: 'luecke', de: 'Giulia wacht früh auf.', satz: 'Giulia ___ sveglia presto.', loesung: 'si' },
      { art: 'kacheln', de: 'Ich heiße Nicole.', it: 'Mi chiamo Nicole', extra: ['ti', 'chiama'] },
      { art: 'luecke', de: 'Wir heißen Rossi.', satz: 'Noi ___ chiamiamo Rossi.', loesung: 'ci' },
      { art: 'luecke', de: 'Wie heißt du?', satz: 'Come ti ___? (chiamarsi)', loesung: 'chiami' },
      { art: 'kacheln', de: 'Er setzt sich.', it: 'Si siede', extra: ['mi', 'siedo'] },
    ],
  },

  {
    id: 'passato-avere', titel: 'Vergangenheit mit avere: ho mangiato', stufe: 'A2',
    regel: [
      'Für Vergangenes sagt man im Gespräch meist: avere + Partizip. Ho mangiato = ich habe gegessen.',
      'Partizip: -are wird zu -ato, -ere zu -uto, -ire zu -ito.',
      'Einige sind unregelmäßig: fatto (fare), detto (dire), preso (prendere), letto (leggere), scritto (scrivere).',
    ],
    tabelle: {
      kopf: ['Grundform', 'Partizip', 'Beispiel'],
      zeilen: [
        ['mangiare', 'mangiato', 'ho mangiato'],
        ['avere', 'avuto', 'ho avuto'],
        ['dormire', 'dormito', 'hai dormito'],
        ['fare', 'fatto', 'ha fatto'],
        ['prendere', 'preso', 'abbiamo preso'],
        ['leggere', 'letto', 'hanno letto'],
      ],
    },
    kurz: 'avere + Partizip: ho mangiato, hai dormito, ha fatto … (-are → -ato, -ere → -uto, -ire → -ito)',
    uebungen: [
      { art: 'luecke', de: 'Gestern habe ich Pizza gegessen.', satz: 'Ieri ___ mangiato la pizza.', loesung: 'ho' },
      { art: 'luecke', de: 'Wir haben ein Buch gelesen.', satz: 'Abbiamo ___ un libro. (leggere)', loesung: 'letto' },
      { art: 'kacheln', de: 'Ich habe einen Kaffee getrunken.', it: 'Ho bevuto un caffè', extra: ['bevo', 'sono'] },
      { art: 'luecke', de: 'Hast du gut geschlafen?', satz: 'Hai ___ bene? (dormire)', loesung: 'dormito' },
      { art: 'luecke', de: 'Marco hat die Rechnung bezahlt.', satz: 'Marco ha ___ il conto. (pagare)', loesung: 'pagato' },
      { art: 'kacheln', de: 'Was hast du gemacht?', it: 'Che cosa hai fatto?', extra: ['ha', 'fare'] },
    ],
  },

  {
    id: 'passato-essere', titel: 'Vergangenheit mit essere: sono andata', stufe: 'A2',
    regel: [
      'Verben der Bewegung (andare, venire, partire, arrivare, tornare, uscire) und essere selbst bilden die Vergangenheit mit essere.',
      'Dann passt sich die Endung an, wie bei einem Adjektiv: Marco è andato – Anna è andata – siamo andati.',
    ],
    tabelle: {
      kopf: ['Person', 'andare'],
      zeilen: [
        ['io', 'sono andato / andata'],
        ['tu', 'sei andato / andata'],
        ['lui / lei', 'è andato / è andata'],
        ['noi', 'siamo andati / andate'],
        ['voi', 'siete andati / andate'],
        ['loro', 'sono andati / andate'],
      ],
    },
    kurz: 'Bewegung → essere + Partizip; die Endung passt sich an: andato, andata, andati, andate.',
    uebungen: [
      { art: 'luecke', de: 'Anna ist nach Rom gefahren.', satz: 'Anna è ___ a Roma. (andare)', loesung: 'andata' },
      { art: 'luecke', de: 'Marco ist gestern angekommen.', satz: 'Marco è ___ ieri. (arrivare)', loesung: 'arrivato' },
      { art: 'kacheln', de: 'Anna ist ausgegangen.', it: 'Anna è uscita', extra: ['ha', 'uscito'] },
      { art: 'luecke', de: 'Wir sind früh abgefahren.', satz: 'Noi ___ partiti presto. (essere)', loesung: 'siamo' },
      { art: 'luecke', de: 'Die Mädchen sind nach Hause gekommen.', satz: 'Le ragazze sono ___ a casa. (tornare)', loesung: 'tornate' },
      { art: 'kacheln', de: 'Wir sind ans Meer gefahren.', it: 'Siamo andati al mare', extra: ['abbiamo', 'andato'] },
    ],
  },

  {
    id: 'imperativ', titel: 'Befehlsform in Rezepten: taglia!', stufe: 'A2',
    regel: [
      'Rezepte sprechen dich direkt an: Schneide! Gib dazu! Das ist die Befehlsform (Imperativ).',
      'Du-Form: Verben auf -are enden auf -a (taglia, mescola), Verben auf -ere und -ire auf -i (metti, servi).',
      'Manche Rezepte nutzen die ihr-Form (tagliate) oder einfach die Grundform (tagliare). Gemeint ist dasselbe.',
    ],
    tabelle: {
      kopf: ['Grundform', 'du', 'ihr'],
      zeilen: [
        ['tagliare', 'taglia', 'tagliate'],
        ['mescolare', 'mescola', 'mescolate'],
        ['aggiungere', 'aggiungi', 'aggiungete'],
        ['mettere', 'metti', 'mettete'],
        ['cuocere', 'cuoci', 'cuocete'],
        ['servire', 'servi', 'servite'],
      ],
    },
    kurz: 'Befehl (du): -are → -a (taglia), -ere / -ire → -i (metti, servi).',
    uebungen: [
      { art: 'luecke', de: 'Schneide die Zwiebeln.', satz: '___ le cipolle. (tagliare)', loesung: 'taglia' },
      { art: 'luecke', de: 'Gib das Salz dazu.', satz: '___ il sale. (aggiungere)', loesung: 'aggiungi' },
      { art: 'kacheln', de: 'Gieß die Nudeln ab.', it: 'Scola la pasta', extra: ['scolare', 'il'] },
      { art: 'luecke', de: 'Rühre gut um.', satz: '___ bene. (mescolare)', loesung: 'mescola' },
      { art: 'luecke', de: 'Serviere sofort.', satz: '___ subito. (servire)', loesung: 'servi' },
      { art: 'kacheln', de: 'Gib die Tomaten in die Pfanne.', it: 'Metti i pomodori nella padella', extra: ['mettere', 'nel'] },
    ],
  },
];

const Grammatik = (() => {
  function kapitel(id) { return KAPITEL.find((k) => k.id === id); }

  // ---------- Prüfen ----------

  function satzSauber(text) {
    return text
      .toLowerCase()
      .replace(/[’`´]/g, "'")
      .replace(/[.,!?;:«»"]/g, ' ')
      .replace(/'\s+/g, "'")
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Lücke: wie bei Vokabeln, aber streng (kein Tippfehler-Bonus – bei Endungen zählt jeder Buchstabe)
  function pruefeLuecke(eingabe, u) {
    return Vokabeln.pruefe(eingabe, { it: u.loesung, auch: u.auch }, { streng: true });
  }

  // Kacheln: gelegte Wörter mit dem richtigen Satz vergleichen
  function pruefeKacheln(woerter, u) {
    const gelegt = satzSauber(woerter.join(' '));
    const richtig = [u.it, ...(u.auch || [])].some((s) => satzSauber(s) === gelegt);
    return { stufe: richtig ? 'richtig' : 'falsch', hinweis: '' };
  }

  // Kacheln für eine Übung: Wörter des Satzes + falsche Kacheln, gemischt
  function kacheln(u) {
    const woerter = u.it.replace(/[.,!?;:]/g, '').split(/\s+/).filter(Boolean);
    return [...woerter, ...(u.extra || [])];
  }

  // ---------- Fortschritt ----------

  function stand(id) {
    const g = Speicher.daten.fortschritt.grammatik;
    return (g && g[id]) || null;
  }

  function ergebnisSpeichern(id, richtig, von) {
    const f = Speicher.daten.fortschritt;
    f.grammatik = f.grammatik || {};
    const alt = f.grammatik[id] || {};
    f.grammatik[id] = {
      geuebt: alt.geuebt || richtig / von >= 0.8,    // ab 80 % richtig gilt das Kapitel als geübt
      richtig,
      von,
      datum: Vokabeln.heute(),
    };
    Speicher.speichern();
  }

  function anzahlGeuebt() {
    return KAPITEL.filter((k) => stand(k.id) && stand(k.id).geuebt).length;
  }

  // ---------- Regel direkt am Text ----------
  //
  // Findet zu einem angetippten Wort das passende Kapitel.
  // treffer: Ergebnis von Lesen.nachschlagen, vorher: das Wort davor (für die Vergangenheit)

  const ARTIKEL = ['il', 'lo', 'la', 'i', 'gli', 'le', "l'"];
  const ESSERE_AVERE = ['sono', 'sei', 'è', 'siamo', 'siete', 'ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno'];
  const ESSERE_FORMEN = ['sono', 'sei', 'è', 'siamo', 'siete'];

  function kapitelFuerWort(wort, treffer, vorher) {
    const form = wort.toLowerCase().replace(/’/g, "'");
    if (ARTIKEL.includes(form)) return kapitel('artikel');
    if (ESSERE_AVERE.includes(form)) return kapitel('essere-avere');
    if (!treffer) return null;
    const grund = treffer.grundform.toLowerCase();
    if (grund.includes(' + ')) return kapitel('praepositionen');
    if (treffer.bedeutung.includes('!')) return kapitel('imperativ');
    if (/(arsi|ersi|irsi)$/.test(grund)) return kapitel('reflexiv');
    const istVerb = /(are|ere|ire)$/.test(grund);
    if (!istVerb || form === grund) return null;
    if (/(at|ut|it|tt|es)[oaie]$/.test(form)) {
      const v = (vorher || '').toLowerCase();
      return ESSERE_FORMEN.includes(v) ? kapitel('passato-essere') : kapitel('passato-avere');
    }
    if (grund.endsWith('are')) return kapitel('verben-are');
    return kapitel('verben-ere-ire');
  }

  return { kapitel, pruefeLuecke, pruefeKacheln, kacheln, stand, ergebnisSpeichern, anzahlGeuebt, kapitelFuerWort };
})();
