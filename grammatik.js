// Grammatik: Kapitel mit kurzer Regel, Tabelle und Übungen
//
// regel:    Absätze auf Deutsch (kurz!)
// tabelle:  { kopf: [...], zeilen: [[...], ...] }
// kurz:     Regel in einem Satz – wird bei einem Fehler angezeigt
// uebungen: { art: 'luecke', de, satz (mit ___), loesung, auch? }
//           { art: 'kacheln', de, it (richtiger Satz), extra: [falsche Kacheln], auch? }

const KAPITEL = [
  {
    id: 'essere-un', titel: 'Ich bin …: essere und un, una', stufe: 'A1',
    regel: [
      'essere heißt „sein“. Das Wort für „ich, du …“ kann man weglassen: Sono Anna = Ich bin Anna.',
      'Verneinen ist leicht: non kommt vor das Verb. Non sono Marco = Ich bin nicht Marco.',
      "Ein / eine: un vor männlichen Wörtern, una vor weiblichen, un' vor weiblichen mit Vokal am Anfang, uno vor s + Konsonant und vor z.",
    ],
    tabelle: {
      kopf: ['Person', 'essere', 'ein / eine'],
      zeilen: [
        ['io', 'sono', 'un nome'],
        ['tu', 'sei', 'una parola'],
        ['lui / lei', 'è', "un'idea"],
        ['noi', 'siamo', 'uno studente'],
        ['voi', 'siete', ''],
        ['loro', 'sono', ''],
      ],
    },
    kurz: "essere: sono, sei, è, siamo, siete, sono. Ein/eine: un (m), una (w), un' (w + Vokal), uno (s + Konsonant, z).",
    uebungen: [
      { art: 'luecke', de: 'Ich bin Anna.', satz: 'Io ___ Anna. (essere)', loesung: 'sono' },
      { art: 'luecke', de: 'Du bist Marco.', satz: 'Tu ___ Marco. (essere)', loesung: 'sei' },
      { art: 'kacheln', de: 'Hallo, ich bin Luca.', it: 'Ciao, sono Luca', extra: ['sei', 'è'] },
      { art: 'luecke', de: 'Sie ist Sofia.', satz: 'Lei ___ Sofia. (essere)', loesung: 'è' },
      { art: 'luecke', de: 'Wir sind Anna und Luca.', satz: '___ Anna e Luca. (essere)', loesung: 'siamo' },
      { art: 'luecke', de: 'ein Name', satz: '___ nome', loesung: 'un' },
      { art: 'luecke', de: 'eine Idee', satz: '___idea', loesung: "un'" },
      { art: 'kacheln', de: 'Ich bin nicht Marco.', it: 'Non sono Marco', extra: ['sei', 'no'] },
    ],
  },

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
      { art: 'luecke', de: 'die Bar', satz: '___ bar', loesung: 'il' },
      { art: 'luecke', de: 'das Wasser', satz: '___ acqua', loesung: "l'" },
      { art: 'luecke', de: 'der Kassenbon', satz: '___ scontrino', loesung: 'lo' },
      { art: 'kacheln', de: 'Der Tee und der Kaffee', it: 'il tè e il caffè', extra: ['la', 'lo'] },
      { art: 'luecke', de: 'die Häuser', satz: '___ case', loesung: 'le' },
      { art: 'luecke', de: 'die Freunde', satz: '___ amici', loesung: 'gli' },
      { art: 'luecke', de: 'die Milch', satz: '___ latte', loesung: 'il' },
      { art: 'kacheln', de: 'Das Frühstück und der Kaffee', it: 'la colazione e il caffè', extra: ['lo', 'le'] },
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
      { art: 'kacheln', de: 'Sie kaufen die Milch. (Mehrzahl)', it: 'Loro comprano il latte', extra: ['compra', 'la'] },
      { art: 'luecke', de: 'Marco arbeitet in einer Bar.', satz: 'Marco ___ in un bar. (lavorare)', loesung: 'lavora' },
      { art: 'luecke', de: 'Wir essen ein Hörnchen.', satz: 'Noi ___ un cornetto. (mangiare)', loesung: 'mangiamo' },
      { art: 'kacheln', de: 'Ihr sprecht gut.', it: 'Parlate bene', extra: ['parliamo', 'buono'] },
      { art: 'luecke', de: 'Wir spielen am Sonntag.', satz: 'Noi ___ la domenica. (giocare)', loesung: 'giochiamo' },
      { art: 'kacheln', de: 'Sie arbeiten am Samstag. (Mehrzahl)', it: 'Lavorano il sabato', extra: ['lavora', 'lavoriamo'] },
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
      { art: 'kacheln', de: 'Sie haben eine Katze. (Mehrzahl)', it: 'Hanno un gatto', extra: ['sono', 'una'] },
      { art: 'luecke', de: 'Wir sind zu Hause.', satz: 'Noi ___ a casa. (essere)', loesung: 'siamo' },
      { art: 'luecke', de: 'Hast du eine Schwester?', satz: 'Tu ___ una sorella? (avere)', loesung: 'hai' },
      { art: 'kacheln', de: 'Der Kaffee ist teuer.', it: 'Il caffè è caro', extra: ['ha', 'cara'] },
      { art: 'luecke', de: 'Meine Schwester ist groß.', satz: 'Mia sorella ___ grande. (essere)', loesung: 'è' },
      { art: 'luecke', de: 'Wir haben zwei Kinder.', satz: 'Noi ___ due figli. (avere)', loesung: 'abbiamo' },
    ],
  },

  {
    id: 'possessiv', titel: 'Mein, dein: mio, tuo …', stufe: 'A1',
    regel: [
      'Mein, dein … stehen auf Italienisch meist mit Artikel: il mio libro, la mia casa.',
      'Bei Familienmitgliedern in der Einzahl fällt der Artikel weg: mio padre, mia sorella. In der Mehrzahl steht er wieder: i miei fratelli.',
      'Die Endung richtet sich nach dem, was jemandem gehört: la mia casa (weiblich), il mio gatto (männlich).',
    ],
    tabelle: {
      kopf: ['', 'männlich', 'weiblich'],
      zeilen: [
        ['mein', 'il mio · i miei', 'la mia · le mie'],
        ['dein', 'il tuo · i tuoi', 'la tua · le tue'],
        ['sein, ihr', 'il suo · i suoi', 'la sua · le sue'],
        ['unser', 'il nostro · i nostri', 'la nostra · le nostre'],
      ],
    },
    kurz: 'mio/mia, tuo/tua … mit Artikel – nur nicht bei einem Familienmitglied (mio padre, aber i miei fratelli).',
    uebungen: [
      { art: 'luecke', de: 'mein Vater', satz: '___ padre', loesung: 'mio' },
      { art: 'luecke', de: 'meine Mutter', satz: '___ madre', loesung: 'mia' },
      { art: 'luecke', de: 'mein Haus', satz: 'la ___ casa', loesung: 'mia' },
      { art: 'luecke', de: 'meine Brüder', satz: 'i ___ fratelli', loesung: 'miei' },
      { art: 'luecke', de: 'deine Schwester', satz: '___ sorella', loesung: 'tua' },
      { art: 'luecke', de: 'deine Familie', satz: 'la ___ famiglia', loesung: 'tua' },
      { art: 'kacheln', de: 'Mein Mann heißt Luca.', it: 'Mio marito si chiama Luca', extra: ['mia', 'il'] },
      { art: 'kacheln', de: 'Meine Großeltern haben eine Katze.', it: 'I miei nonni hanno un gatto', extra: ['mie', 'mio'] },
    ],
  },

  {
    id: 'piacere', titel: 'Mi piace: was dir gefällt', stufe: 'A1',
    regel: [
      '„Ich mag …“ sagt man mit „gefallen“: Mi piace il caffè = Mir gefällt der Kaffee.',
      'Gefallen mehrere Dinge, heißt es piacciono: Mi piacciono i gatti.',
      'Mit einem Verb bleibt es bei piace: Mi piace nuotare = Ich schwimme gern.',
      'Mir, dir, ihm, ihr: mi, ti, gli, le. Verneinung: Non mi piace.',
    ],
    tabelle: {
      kopf: ['wem?', 'eine Sache, ein Verb', 'mehrere Sachen'],
      zeilen: [
        ['mir', 'mi piace', 'mi piacciono'],
        ['dir', 'ti piace', 'ti piacciono'],
        ['ihm', 'gli piace', 'gli piacciono'],
        ['ihr, Ihnen', 'le piace', 'le piacciono'],
      ],
    },
    kurz: 'Eine Sache oder ein Verb: mi piace. Mehrere Sachen: mi piacciono.',
    uebungen: [
      { art: 'luecke', de: 'Mir gefällt der Kaffee.', satz: 'Mi ___ il caffè.', loesung: 'piace' },
      { art: 'luecke', de: 'Ich mag Katzen.', satz: 'Mi ___ i gatti.', loesung: 'piacciono' },
      { art: 'luecke', de: 'Schwimmst du gern?', satz: '___ piace nuotare?', loesung: 'ti' },
      { art: 'luecke', de: 'Ihm schmeckt das Bier nicht.', satz: 'Non ___ piace la birra.', loesung: 'gli' },
      { art: 'kacheln', de: 'Ich mag Spaziergänge.', it: 'Mi piacciono le passeggiate', extra: ['piace', 'ti'] },
      { art: 'luecke', de: 'Magst du Hunde?', satz: 'Ti ___ i cani?', loesung: 'piacciono' },
      { art: 'kacheln', de: 'Ihr gefällt der Sonntag.', it: 'Le piace la domenica', extra: ['gli', 'piacciono'] },
      { art: 'luecke', de: 'Mir gefällt das Wochenende nicht.', satz: 'Non mi ___ il fine settimana.', loesung: 'piace' },
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
      { art: 'luecke', de: 'Giulia nimmt den Zug.', satz: 'Giulia ___ il treno. (prendere)', loesung: 'prende' },
      { art: 'kacheln', de: 'Ich verstehe nicht.', it: 'Non capisco', extra: ['capiamo', 'no'] },
      { art: 'luecke', de: 'Verstehst du Italienisch?', satz: "Tu ___ l'italiano? (capire)", loesung: 'capisci' },
      { art: 'luecke', de: 'Sie fahren um neun ab. (Mehrzahl)', satz: 'Loro ___ alle nove. (partire)', loesung: 'partono' },
      { art: 'kacheln', de: 'Wir schreiben einen Brief.', it: 'Scriviamo una lettera', extra: ['scrivono', 'un'] },
      { art: 'luecke', de: 'Was trinkst du?', satz: 'Che cosa ___? (bere)', loesung: 'bevi' },
      { art: 'kacheln', de: 'Wir öffnen das Fenster.', it: 'Apriamo la finestra', extra: ['aprono', 'il'] },
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
      { art: 'kacheln', de: 'Wir gehen in die Bar.', it: 'Andiamo al bar', extra: ['alla', 'nel'] },
      { art: 'luecke', de: 'Gib die Pizza in den Ofen.', satz: 'Metti la pizza ___ forno. (in + il)', loesung: 'nel' },
      { art: 'luecke', de: 'Gib das Salz auf das Brot.', satz: 'Metti il sale ___ pane. (su + il)', loesung: 'sul' },
      { art: 'luecke', de: 'die Farbe des Öls', satz: "il colore ___ olio (di + l')", loesung: "dell'" },
      { art: 'luecke', de: 'Ich komme aus Deutschland.', satz: 'Vengo ___ Germania. (da + la)', loesung: 'dalla' },
      { art: 'luecke', de: 'Ich gehe zum Bahnhof.', satz: 'Vado ___ stazione. (a + la)', loesung: 'alla' },
    ],
  },

  {
    id: 'modalverben', titel: 'Ich will, ich kann, ich muss – und: c’è', stufe: 'A1',
    regel: [
      'volere (wollen), potere (können, dürfen) und dovere (müssen) stehen mit der Grundform eines zweiten Verbs: Posso pagare? = Kann ich bezahlen?',
      'Höflich bitten: Vorrei una camera = Ich hätte gern ein Zimmer.',
      "c'è heißt „es gibt / da ist“ (Einzahl), ci sono „es gibt“ (Mehrzahl): C'è un ascensore? Ci sono due letti.",
    ],
    tabelle: {
      kopf: ['Person', 'volere', 'potere', 'dovere'],
      zeilen: [
        ['io', 'voglio', 'posso', 'devo'],
        ['tu', 'vuoi', 'puoi', 'devi'],
        ['lui / lei', 'vuole', 'può', 'deve'],
        ['noi', 'vogliamo', 'possiamo', 'dobbiamo'],
        ['voi', 'volete', 'potete', 'dovete'],
        ['loro', 'vogliono', 'possono', 'devono'],
      ],
    },
    kurz: "volere/potere/dovere + Grundform: voglio partire, posso pagare, devo tornare. c'è (Einzahl), ci sono (Mehrzahl).",
    uebungen: [
      { art: 'luecke', de: 'Kann ich hier bezahlen?', satz: '___ pagare qui? (potere)', loesung: 'posso' },
      { art: 'luecke', de: 'Ich muss morgen abreisen.', satz: '___ partire domani. (dovere)', loesung: 'devo' },
      { art: 'luecke', de: 'Wollt ihr hier essen?', satz: '___ mangiare qui? (volere)', loesung: 'volete' },
      { art: 'luecke', de: 'Gibt es einen Aufzug?', satz: '___ un ascensore?', loesung: "c'è", auch: ["c'e"] },
      { art: 'kacheln', de: 'Im Zimmer gibt es zwei Betten.', it: 'Nella camera ci sono due letti', auch: ['Ci sono due letti nella camera'], extra: ["c'è", 'è'] },
      { art: 'luecke', de: 'Musst du heute arbeiten?', satz: '___ lavorare oggi? (dovere)', loesung: 'devi' },
      { art: 'kacheln', de: 'Sie wollen zurückkommen. (Mehrzahl)', it: 'Vogliono tornare', extra: ['vuole', 'tornano'] },
      { art: 'luecke', de: 'Ich hätte gern den Schlüssel, bitte.', satz: '___ la chiave, per favore.', loesung: 'vorrei' },
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
      { art: 'luecke', de: 'Wir ziehen uns an.', satz: '___ vestiamo.', loesung: 'ci' },
      { art: 'kacheln', de: 'Ich wasche mich.', it: 'Mi lavo', extra: ['si', 'lava'] },
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
      { art: 'luecke', de: 'Marco hat den Kaffee bezahlt.', satz: 'Marco ha ___ il caffè. (pagare)', loesung: 'pagato' },
      { art: 'kacheln', de: 'Was hast du gemacht?', it: 'Che cosa hai fatto?', extra: ['ha', 'fare'] },
      { art: 'luecke', de: 'Ihr habt viel gearbeitet.', satz: 'Avete ___ molto. (lavorare)', loesung: 'lavorato' },
      { art: 'kacheln', de: 'Sie haben einen Film gesehen. (Mehrzahl)', it: 'Hanno visto un film', extra: ['sono', 'vedere'] },
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
      { art: 'luecke', de: 'Sofia ist zu Hause geblieben.', satz: 'Sofia è ___ a casa. (restare)', loesung: 'restata' },
      { art: 'kacheln', de: 'Wir sind spät angekommen. (Männer)', it: 'Siamo arrivati tardi', extra: ['abbiamo', 'arrivato'] },
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
      { art: 'luecke', de: 'Schneide den Knoblauch.', satz: "___ l'aglio. (tagliare)", loesung: 'taglia' },
      { art: 'luecke', de: 'Gib das Salz dazu.', satz: '___ il sale. (aggiungere)', loesung: 'aggiungi' },
      { art: 'kacheln', de: 'Gieß die Nudeln ab.', it: 'Scola la pasta', extra: ['scolare', 'il'] },
      { art: 'luecke', de: 'Rühre gut um.', satz: '___ bene. (mescolare)', loesung: 'mescola' },
      { art: 'luecke', de: 'Serviere sofort.', satz: '___ subito. (servire)', loesung: 'servi' },
      { art: 'kacheln', de: 'Gib die Tomaten in die Pfanne.', it: 'Metti i pomodori nella padella', extra: ['mettere', 'nel'] },
      { art: 'luecke', de: 'Nimm das Brot!', satz: '___ il pane! (prendere)', loesung: 'prendi' },
      { art: 'kacheln', de: 'Schneide das Brot!', it: 'Taglia il pane', extra: ['tagli', 'la'] },
    ],
  },

  {
    id: 'pronomi-diretti', titel: 'Ich nehme ihn: lo, la, li, le – und ne', stufe: 'A2',
    regel: [
      'Statt ein Nomen zu wiederholen, sagt man lo (ihn, es), la (sie, es), li (sie, Mehrzahl männlich) und le (sie, Mehrzahl weiblich). Il formaggio? Lo prendo. = Den Käse? Ich nehme ihn.',
      'Das kleine Wort steht vor dem Verb: Non lo vedo. = Ich sehe ihn nicht.',
      'ne heißt „davon“ und steht bei Mengen: Quante mele? Ne prendo due. = Wie viele Äpfel? Ich nehme zwei (davon).',
    ],
    tabelle: {
      kopf: ['Was?', 'Wort', 'Beispiel'],
      zeilen: [
        ['il formaggio', 'lo', 'Lo prendo.'],
        ['la frutta', 'la', 'La compro.'],
        ['i limoni', 'li', 'Li vendo.'],
        ['le mele', 'le', 'Le mangio.'],
        ['due mele (davon)', 'ne', 'Ne prendo due.'],
      ],
    },
    kurz: 'lo (ihn), la (sie), li / le (sie, Mehrzahl) und ne (davon) stehen vor dem Verb: Lo prendo. Ne prendo due.',
    uebungen: [
      { art: 'luecke', de: 'Den Käse? Ich nehme ihn.', satz: '___ prendo. (il formaggio)', loesung: 'lo' },
      { art: 'luecke', de: 'Das Obst? Ich kaufe es.', satz: '___ compro. (la frutta)', loesung: 'la' },
      { art: 'luecke', de: 'Die Zitronen? Ich verkaufe sie für drei Euro.', satz: '___ vendo a tre euro. (i limoni)', loesung: 'li' },
      { art: 'luecke', de: 'Die Äpfel? Ich kaufe sie auf dem Markt.', satz: '___ compro al mercato. (le mele)', loesung: 'le' },
      { art: 'kacheln', de: 'Ich nehme drei (davon).', it: 'Ne prendo tre', extra: ['lo', 'prendi'] },
      { art: 'luecke', de: 'Kartoffeln? Ich will zwei Kilo davon.', satz: '___ voglio due chili. (le patate)', loesung: 'ne' },
      { art: 'kacheln', de: 'Ich sehe ihn nicht.', it: 'Non lo vedo', extra: ['la', 'vedi'] },
      { art: 'kacheln', de: 'Die Zwiebeln kaufe ich auf dem Markt.', it: 'Le cipolle le compro al mercato', extra: ['li', 'la'] },
    ],
  },

  {
    id: 'pronomi-indiretti', titel: 'Mir, dir, ihm: mi, ti, gli, le', stufe: 'A2',
    regel: [
      'Auf die Frage „wem?“ antworten mi (mir), ti (dir), gli (ihm), le (ihr), ci (uns), vi (euch) und gli (ihnen). Sie stehen vor dem Verb: Ti porto il menù. = Ich bringe dir die Speisekarte.',
      'Bei piacere ist die Person immer ein „wem“: Gli piace il vino. = Ihm gefällt der Wein. Mehrzahl: Le piacciono i dolci. = Ihr gefallen Süßspeisen.',
      'Höflich mit Le (Ihnen): Le porto il conto? = Soll ich Ihnen die Rechnung bringen?',
    ],
    tabelle: {
      kopf: ['Wem?', 'Wort', 'Beispiel'],
      zeilen: [
        ['mir', 'mi', 'Mi porti il conto?'],
        ['dir', 'ti', 'Ti consiglio il pesce.'],
        ['ihm', 'gli', 'Gli piace il vino.'],
        ['ihr / Ihnen', 'le', 'Le porto il menù.'],
        ['uns', 'ci', 'Ci piace la cena.'],
        ['euch', 'vi', 'Vi piace la carne?'],
        ['ihnen', 'gli', 'Gli piacciono i dolci.'],
      ],
    },
    kurz: 'Wem? mi, ti, gli, le, ci, vi, gli – vor dem Verb: Gli piace il vino. Le porto il conto.',
    uebungen: [
      { art: 'luecke', de: 'Bringst du mir die Rechnung?', satz: '___ porti il conto?', loesung: 'mi' },
      { art: 'luecke', de: 'Ich empfehle dir den Fisch.', satz: '___ consiglio il pesce.', loesung: 'ti' },
      { art: 'luecke', de: 'Marco mag Wein. (Ihm gefällt …)', satz: '___ piace il vino.', loesung: 'gli' },
      { art: 'luecke', de: 'Anna mag Süßes. (Ihr gefallen …)', satz: '___ piacciono i dolci.', loesung: 'le' },
      { art: 'kacheln', de: 'Uns gefällt dieses Restaurant.', it: 'Ci piace questo ristorante', extra: ['piacciono', 'mi'] },
      { art: 'luecke', de: 'Mögt ihr die Spaghetti? (Gefallen euch …)', satz: 'Vi ___ gli spaghetti? (piacere)', loesung: 'piacciono' },
      { art: 'kacheln', de: 'Ich bringe Ihnen die Speisekarte.', it: 'Le porto il menù', extra: ['gli', 'porta'] },
      { art: 'luecke', de: 'Was empfiehlst du uns?', satz: 'Che cosa ___ consigli?', loesung: 'ci' },
    ],
  },

  {
    id: 'imperfetto', titel: 'Früher war es so: ero, avevo, giocavo', stufe: 'A2',
    regel: [
      'Mit dem imperfetto erzählt man, wie etwas früher war oder was man oft gemacht hat: Da bambina giocavo in giardino. = Als Kind spielte ich im Garten.',
      'Endungen bei -are: -avo, -avi, -ava, -avamo, -avate, -avano. Bei -ere: -evo … (avevo), bei -ire: -ivo … (dormivo).',
      'Unregelmäßig ist vor allem essere: ero, eri, era, eravamo, eravate, erano. Und fare: facevo, facevi …',
    ],
    tabelle: {
      kopf: ['Person', 'giocare', 'avere', 'essere'],
      zeilen: [
        ['io', 'giocavo', 'avevo', 'ero'],
        ['tu', 'giocavi', 'avevi', 'eri'],
        ['lui / lei', 'giocava', 'aveva', 'era'],
        ['noi', 'giocavamo', 'avevamo', 'eravamo'],
        ['voi', 'giocavate', 'avevate', 'eravate'],
        ['loro', 'giocavano', 'avevano', 'erano'],
      ],
    },
    kurz: 'Früher / oft: -avo, -evo, -ivo … (giocavo, avevo, dormivo). essere: ero, eri, era …',
    uebungen: [
      { art: 'luecke', de: 'Als Kind spielte ich oft im Garten.', satz: 'Da bambina ___ spesso in giardino. (giocare)', loesung: 'giocavo' },
      { art: 'luecke', de: 'Mein Großvater war sehr freundlich.', satz: 'Mio nonno ___ molto gentile. (essere)', loesung: 'era' },
      { art: 'luecke', de: 'Wir wohnten in einem kleinen Dorf.', satz: '___ in un piccolo paese. (abitare)', loesung: 'abitavamo' },
      { art: 'kacheln', de: 'Als Kind hatte ich eine Katze.', it: 'Da bambina avevo un gatto', extra: ['ho', 'aveva'] },
      { art: 'luecke', de: 'Jeden Sommer fuhren wir ans Meer.', satz: 'Ogni estate ___ al mare. (andare)', loesung: 'andavamo' },
      { art: 'luecke', de: 'Was hast du sonntags immer gemacht?', satz: 'Che cosa ___ la domenica? (fare)', loesung: 'facevi' },
      { art: 'kacheln', de: 'Die Kinder schliefen viel.', it: 'I bambini dormivano molto', extra: ['dormono', 'dormiva'] },
      { art: 'luecke', de: 'Ihr wart sehr jung.', satz: '___ molto giovani. (essere)', loesung: 'eravate' },
    ],
  },

  {
    id: 'vergleiche', titel: 'Größer als …: più … di, meno … di', stufe: 'A2',
    regel: [
      'Vergleichen: più … di = mehr … als, meno … di = weniger … als. Roma è più grande di Siena. = Rom ist größer als Siena.',
      "Vor einem Artikel verschmilzt di: più caldo del mare, più freddo dell'autunno.",
      'Gleich viel: come. Marco è alto come Luca. = Marco ist so groß wie Luca.',
      'Besonders: buono → migliore (besser), cattivo → peggiore (schlechter).',
    ],
    tabelle: {
      kopf: ['Deutsch', 'Italienisch'],
      zeilen: [
        ['größer als', 'più grande di'],
        ['weniger kalt als', 'meno freddo di'],
        ['so groß wie', 'alto come'],
        ['besser', 'migliore'],
        ['schlechter', 'peggiore'],
      ],
    },
    kurz: 'più / meno + Eigenschaft + di: più caldo di, meno caro di. Gleich: come. buono → migliore.',
    uebungen: [
      { art: 'luecke', de: 'Rom ist größer als Siena.', satz: 'Roma è ___ grande di Siena.', loesung: 'più', auch: ['piu'] },
      { art: 'luecke', de: 'Der Winter ist kälter als der Herbst.', satz: "L'inverno è più freddo ___ autunno. (di + l')", loesung: "dell'" },
      { art: 'luecke', de: 'Das Auto ist langsamer als der Zug.', satz: 'La macchina è più lenta ___ treno. (di + il)', loesung: 'del' },
      { art: 'kacheln', de: 'Marco ist so groß wie Luca.', it: 'Marco è alto come Luca', extra: ['di', 'più'] },
      { art: 'luecke', de: 'Dieser Wein ist besser.', satz: 'Questo vino è ___. (buono)', loesung: 'migliore' },
      { art: 'kacheln', de: 'Der Fisch ist weniger teuer als das Fleisch.', it: 'Il pesce è meno caro della carne', extra: ['di', 'più'] },
      { art: 'luecke', de: 'Heute ist es wärmer als gestern.', satz: 'Oggi fa più caldo ___ ieri.', loesung: 'di' },
      { art: 'kacheln', de: 'Mein Bruder ist größer als ich.', it: 'Mio fratello è più alto di me', extra: ['come', 'meno'] },
    ],
  },

  {
    id: 'imperfetto-passato', titel: 'Erzählen: imperfetto oder passato prossimo?', stufe: 'A2',
    regel: [
      'Das passato prossimo erzählt, was passiert ist – ein Ereignis, einmal und abgeschlossen: Ieri sono andata dal medico.',
      "Das imperfetto beschreibt den Hintergrund – wie es war, was gerade lief: Pioveva e c'era vento.",
      'Oft kommen beide zusammen: Mentre leggevo, è arrivato Marco. = Während ich las, ist Marco gekommen.',
    ],
    tabelle: {
      kopf: ['imperfetto (Hintergrund)', 'passato prossimo (Ereignis)'],
      zeilen: [
        ['Pioveva …', '… e sono restata a casa.'],
        ['Mentre leggevo …', '… è arrivato Marco.'],
        ['Avevo mal di testa …', '… e ho preso una medicina.'],
        ['Era tardi …', '… e sono andata a letto.'],
      ],
    },
    kurz: 'Hintergrund, Zustand → imperfetto (pioveva, avevo). Ereignis, einmal → passato prossimo (sono andata, ho preso).',
    uebungen: [
      { art: 'luecke', de: 'Während ich kochte, ist Marco gekommen.', satz: 'Mentre ___, è arrivato Marco. (cucinare)', loesung: 'cucinavo' },
      { art: 'luecke', de: 'Gestern bin ich zum Arzt gegangen.', satz: 'Ieri ___ andata dal medico. (essere)', loesung: 'sono' },
      { art: 'luecke', de: 'Ich hatte Kopfschmerzen.', satz: '___ mal di testa. (avere)', loesung: 'avevo' },
      { art: 'kacheln', de: 'Es regnete, deshalb bin ich zu Hause geblieben.', it: 'Pioveva, così sono restata a casa', extra: ['piove', 'ho'] },
      { art: 'luecke', de: 'Ich war müde und bin früh ins Bett gegangen.', satz: '___ stanca e sono andata a letto presto. (essere)', loesung: 'ero' },
      { art: 'luecke', de: 'Gestern habe ich ein Medikament genommen.', satz: 'Ieri ___ preso una medicina. (avere)', loesung: 'ho' },
      { art: 'kacheln', de: 'Während er schlief, ist Anna gekommen.', it: 'Mentre dormiva, è arrivata Anna', extra: ['dormito', 'arrivato'] },
      { art: 'luecke', de: 'Mir tat der Arm weh.', satz: 'Mi ___ male il braccio. (fare)', loesung: 'faceva' },
    ],
  },

  {
    id: 'si-impersonale', titel: 'Man macht: si mescola, si mettono', stufe: 'A2',
    regel: [
      'In Rezepten und Regeln sagt man oft „man“: si + Verb. Si mescola bene. = Man rührt gut um.',
      'Kommt danach ein Nomen in der Mehrzahl, steht auch das Verb in der Mehrzahl: si taglia la cipolla – si tagliano le cipolle.',
      'Auch im Alltag: In Italia si mangia tardi. = In Italien isst man spät.',
    ],
    tabelle: {
      kopf: ['Einzahl', 'Mehrzahl'],
      zeilen: [
        ['si taglia la cipolla', 'si tagliano le cipolle'],
        ['si mette il sale', 'si mettono le uova'],
        ['si aggiunge lo zucchero', 'si aggiungono i tuorli'],
        ['si serve il dolce', 'si servono gli spaghetti'],
      ],
    },
    kurz: 'si + Verb = man: si mescola. Nomen in der Mehrzahl → Verb in der Mehrzahl: si tagliano le cipolle.',
    uebungen: [
      { art: 'luecke', de: 'Man rührt gut um.', satz: 'Si ___ bene. (mescolare)', loesung: 'mescola' },
      { art: 'luecke', de: 'Man schneidet die Zwiebeln.', satz: 'Si ___ le cipolle. (tagliare)', loesung: 'tagliano' },
      { art: 'kacheln', de: 'In Italien isst man spät.', it: 'In Italia si mangia tardi', extra: ['mangiano', 'mi'] },
      { art: 'luecke', de: 'Man gibt den Zucker dazu.', satz: 'Si ___ lo zucchero. (aggiungere)', loesung: 'aggiunge' },
      { art: 'luecke', de: 'Man nimmt die Eier aus dem Kühlschrank.', satz: 'Si ___ le uova dal frigorifero. (togliere)', loesung: 'tolgono' },
      { art: 'kacheln', de: 'Den Nachtisch serviert man kalt.', it: 'Il dolce si serve freddo', extra: ['servono', 'fa'] },
      { art: 'luecke', de: 'Wie sagt man das auf Italienisch?', satz: 'Come si ___ in italiano? (dire)', loesung: 'dice' },
      { art: 'kacheln', de: 'Hier spricht man Italienisch.', it: 'Qui si parla italiano', extra: ['parlano', 'mi'] },
    ],
  },

  {
    id: 'relativ-che', titel: 'Der, die, das: Sätze mit che und cui', stufe: 'A2',
    regel: [
      "che verbindet zwei Sätze und heißt „der, die, das“ (welcher): Ho un'amica che abita a Roma. = Ich habe eine Freundin, die in Rom wohnt.",
      'che bleibt immer gleich – egal ob männlich, weiblich, Einzahl oder Mehrzahl.',
      'Nach einem kleinen Wort wie in, con, di steht cui: la città in cui abito = die Stadt, in der ich wohne.',
    ],
    tabelle: {
      kopf: ['Deutsch', 'Italienisch'],
      zeilen: [
        ['der Zug, der …', 'il treno che …'],
        ['die Frau, die …', 'la donna che …'],
        ['das Buch, das ich lese', 'il libro che leggo'],
        ['die Leute, die …', 'le persone che …'],
        ['die Stadt, in der …', 'la città in cui …'],
        ['der Freund, mit dem …', "l'amico con cui …"],
      ],
    },
    kurz: 'che = der / die / das (welche): il libro che leggo. Nach in, con, di …: cui (la città in cui abito).',
    uebungen: [
      { art: 'luecke', de: 'Das ist der Zug, der nach Rom fährt.', satz: 'È il treno ___ va a Roma.', loesung: 'che' },
      { art: 'luecke', de: 'Ich habe einen Freund, der in Bologna wohnt.', satz: 'Ho un amico ___ abita a Bologna.', loesung: 'che' },
      { art: 'kacheln', de: 'Das Buch, das ich lese, ist schön.', it: 'Il libro che leggo è bello', extra: ['cui', 'chi'] },
      { art: 'luecke', de: 'Die Stadt, in der ich wohne, ist klein.', satz: 'La città in ___ abito è piccola.', loesung: 'cui' },
      { art: 'kacheln', de: 'Das ist die Nachricht, die ich gelesen habe.', it: 'Questa è la notizia che ho letto', extra: ['cui', 'chi'] },
      { art: 'luecke', de: 'Der Freund, mit dem ich reise, heißt Marco.', satz: "L'amico con ___ viaggio si chiama Marco.", loesung: 'cui' },
      { art: 'kacheln', de: 'Die Leute, die Rad fahren, sind zufrieden.', it: 'Le persone che vanno in bicicletta sono contente', extra: ['cui', 'chi'] },
      { art: 'luecke', de: 'Das Problem, über das wir sprechen, ist wichtig.', satz: 'Il problema di ___ parliamo è importante.', loesung: 'cui' },
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
      ...alt,                                          // z. B. geloest behalten
      // geübt: ab 80 % richtig – oder wenn jede Übung schon einmal auf Anhieb gelöst wurde
      geuebt: alt.geuebt || richtig / von >= 0.8 || ungeloeste(id).length === 0,
      richtig,
      von,
      datum: Vokabeln.heute(),
    };
    Speicher.speichern();
  }

  // Auf Anhieb gelöste Übungen merken (Nummern) – sie kommen beim nächsten Üben nicht wieder
  function uebungGeloest(id, nr) {
    const f = Speicher.daten.fortschritt;
    f.grammatik = f.grammatik || {};
    const st = (f.grammatik[id] = f.grammatik[id] || {});
    st.geloest = st.geloest || [];
    if (!st.geloest.includes(nr)) st.geloest.push(nr);
    Speicher.speichern();
  }

  function ungeloeste(id) {
    const k = kapitel(id);
    const geloest = (stand(id) || {}).geloest || [];
    return k ? k.uebungen.map((u, i) => i).filter((i) => !geloest.includes(i)) : [];
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

  return { kapitel, pruefeLuecke, pruefeKacheln, kacheln, stand, ergebnisSpeichern, uebungGeloest, ungeloeste, anzahlGeuebt, kapitelFuerWort };
})();
