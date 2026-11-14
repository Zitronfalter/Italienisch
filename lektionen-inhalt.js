// Lektionen: der Lernweg von A1 bis B1
//
// Jede Lektion verweist auf Inhalte in den anderen Dateien:
//   woerter: italienisch genau wie in wortschatz.js (die App findet die ID über wortId())
//   kapitel: IDs aus grammatik.js
//   texte:   IDs aus texte.js
// Regeln (prüft `node werkzeuge/lektionen-pruefen.js`):
//   - kein Wort, Kapitel oder Text gehört zu zwei Lektionen
//   - ein Lektionstext benutzt nur Wörter aus dieser und früheren Lektionen, GRUNDWOERTER
//     und höchstens 8 im Text erklärte neue Wörter
//
// `var`, damit Tests die Liste ersetzen können.

var LEKTIONEN = [
  // ==================== A1 ====================
  {
    id: 'l01', nr: 1, titel: 'Ciao!', situation: 'Sich vorstellen, Zahlen', stufe: 'A1', art: 'lektion',
    woerter: [
      'ciao', 'buongiorno', 'buonasera', 'arrivederci', 'grazie', 'prego', 'per favore', 'sì', 'no',
      'come stai?', 'bene', 'mi chiamo', 'io', 'tu', 'essere', 'e', 'non', 'uno', 'due', 'tre', 'quattro', 'cinque',
    ],
    kapitel: ['essere-un'],
    texte: ['ciao'],
  },
  {
    id: 'l02', nr: 2, titel: 'Al bar', situation: 'Im Café bestellen und bezahlen', stufe: 'A1', art: 'lektion',
    woerter: [
      'il bar', 'il caffè', 'il tè', "l'acqua", 'il latte', 'la birra', 'il cornetto', 'la colazione',
      'la mattina', 'bere', 'mangiare', 'pagare', 'quanto costa?', 'ecco', 'anche', 'sei', 'sette', 'otto',
      'nove', 'dieci',
    ],
    kapitel: ['artikel'],
    texte: ['al-bar'],
  },
  {
    id: 'l03', nr: 3, titel: 'La mia famiglia', situation: 'Über die Familie sprechen', stufe: 'A1', art: 'lektion',
    woerter: [
      'la famiglia', 'la madre', 'il padre', 'il figlio', 'la figlia', 'il fratello', 'la sorella',
      'il marito', 'la moglie', 'il nonno', 'la nonna', 'il gatto', 'avere', 'abitare', 'lavorare', 'la casa',
      'grande', 'molto', 'sempre', 'mio', 'tuo', 'noi',
    ],
    kapitel: ['essere-avere', 'possessiv'],
    texte: ['famiglia'],
  },
  {
    id: 'l04', nr: 4, titel: 'Tempo libero', situation: 'Freizeit und Uhrzeit', stufe: 'A1', art: 'lektion',
    woerter: [
      'il tempo libero', 'il pomeriggio', 'la sera', "l'ora", 'oggi', 'domani', 'sabato', 'domenica',
      'il fine settimana', 'piacere', 'giocare', 'nuotare', 'la passeggiata', 'ascoltare', 'guardare',
      'parlare', 'il cane', 'voi',
    ],
    kapitel: ['verben-are', 'piacere'],
    texte: ['tempo-libero'],
  },
  {
    id: 'r1', nr: 4.5, titel: 'Wiederholung 1', situation: 'Lektion 1–4 gemischt', stufe: 'A1', art: 'ripasso',
    lektionen: ['l01', 'l02', 'l03', 'l04'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-1'],
  },
  {
    id: 'l05', nr: 5, titel: 'Alla stazione', situation: 'Fahrkarte kaufen, Zug nehmen', stufe: 'A1', art: 'lektion',
    woerter: [
      'la stazione', 'il treno', 'il biglietto', 'il binario', 'la partenza', "l'arrivo", 'il ritardo',
      'partire', 'arrivare', 'andare', 'venire', 'tornare', 'prendere', "l'autobus", 'la città', 'il minuto',
      'prossimo', 'solo', 'undici', 'quindici', 'o', 'con',
    ],
    kapitel: ['verben-ere-ire'],
    texte: ['stazione'],
  },
  {
    id: 'l06', nr: 6, titel: 'Bruschetta', situation: 'Ein einfaches Rezept', stufe: 'A1', art: 'lektion',
    woerter: [
      'il pane', 'il pomodoro', "l'aglio", 'il sale', 'il basilico', 'la fetta', 'il forno', 'la ciotola',
      'il pezzo', 'tagliare', 'mettere', 'aggiungere', 'mescolare', 'scaldare', 'servire', 'caldo', 'fresco', "l'olio", 'la persona', 'subito',
      'la ricetta', 'gli ingredienti',
    ],
    kapitel: ['praepositionen'],
    texte: ['bruschetta'],
  },
  {
    id: 'l07', nr: 7, titel: 'In albergo', situation: 'Im Hotel einchecken und fragen', stufe: 'A1', art: 'lektion',
    woerter: [
      "l'albergo", 'la camera', 'la chiave', 'il letto', 'la doccia', 'il bagno', "l'asciugamano", 'il piano',
      "l'ascensore", 'libero', 'occupato', 'volere', 'potere', 'dovere', 'la notte', 'la valigia',
      'il passaporto', 'vorrei', 'a destra', 'a sinistra', 'la prenotazione', 'qui', 'dove',
    ],
    kapitel: ['modalverben'],
    texte: ['albergo'],
  },
  {
    id: 'l08', nr: 8, titel: 'Una giornata di Giulia', situation: 'Der Tagesablauf', stufe: 'A1', art: 'lektion',
    woerter: [
      'svegliarsi', 'alzarsi', 'lavare', 'il lavoro', 'la torta', 'il giorno', 'presto', 'tardi', 'stanco',
      'lungo', 'dormire', 'leggere', 'il libro', 'cucinare', 'uscire', 'cominciare', 'finire', 'dopo', 'qualcosa',
    ],
    kapitel: ['reflexiv'],
    texte: ['giornata-giulia'],
  },
  {
    id: 'r2', nr: 8.5, titel: 'Wiederholung 2', situation: 'Lektion 5–8 gemischt – A1 geschafft', stufe: 'A1', art: 'ripasso',
    lektionen: ['l05', 'l06', 'l07', 'l08'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-2'],
  },
];
