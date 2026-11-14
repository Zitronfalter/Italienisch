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

  // ==================== A2 ====================
  {
    id: 'l09', nr: 9, titel: 'Il fine settimana scorso', situation: 'Erzählen, was man gemacht hat', stufe: 'A2', art: 'lektion',
    woerter: [
      'ieri', 'scorso', 'la settimana', 'il mare', 'la spiaggia', 'la macchina', 'il viaggio', "l'amica", "l'amico",
      'il pesce', 'il pranzo', 'il sole', 'piovere', 'ancora', 'così', 'fare', 'dire', 'piccolo', 'bello', 'gentile',
      'il ristorante', 'ma',
    ],
    kapitel: ['passato-avere'],
    texte: ['fine-settimana'],
  },
  {
    id: 'l10', nr: 10, titel: 'In vacanza', situation: 'Vom Urlaub erzählen', stufe: 'A2', art: 'lektion',
    woerter: [
      'la vacanza', "l'aereo", "l'aeroporto", 'viaggiare', 'il lago', 'la montagna', 'il paese', 'la piazza',
      'la chiesa', 'il museo', 'il ponte', 'restare', 'entrare', 'la strada', 'lontano', 'vicino', "l'estate", 'lì',
      'la mappa', 'dritto', 'contento', 'vedere',
    ],
    kapitel: ['passato-essere'],
    texte: ['vacanza'],
  },
  {
    id: 'l11', nr: 11, titel: 'Spaghetti aglio e olio', situation: 'Ein Rezept mit Befehlsform', stufe: 'A2', art: 'lektion',
    woerter: [
      'gli spaghetti', 'il peperoncino', 'lo spicchio', 'la preparazione', 'la pentola', 'la padella', 'il cucchiaio',
      'il grammo', 'il prezzemolo', 'il fuoco', 'a fuoco lento', 'cuocere', 'bollire', 'tritare', 'versare', 'rosolare',
      'scolare', 'circa', 'portare', 'la pasta', 'il pepe',
    ],
    kapitel: ['imperativ'],
    texte: ['spaghetti-aglio-olio'],
  },
  {
    id: 'l12', nr: 12, titel: 'Al mercato', situation: 'Obst und Gemüse einkaufen', stufe: 'A2', art: 'lektion',
    woerter: [
      'il mercato', 'il chilo', 'la frutta', 'la verdura', 'la mela', "l'arancia", 'il limone', 'la patata',
      'la cipolla', 'il formaggio', 'costare', 'il prezzo', "un po'", 'il resto', 'quanto', 'comprare', 'vendere',
      'buono', 'chiedere', 'suo', 'allora',
    ],
    kapitel: ['pronomi-diretti'],
    texte: ['mercato'],
  },
  {
    id: 'r3', nr: 12.5, titel: 'Wiederholung 3', situation: 'Lektion 9–12 gemischt', stufe: 'A2', art: 'ripasso',
    lektionen: ['l09', 'l10', 'l11', 'l12'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-3'],
  },
  {
    id: 'l13', nr: 13, titel: 'Al ristorante', situation: 'Bestellen, empfehlen, bezahlen', stufe: 'A2', art: 'lektion',
    woerter: [
      'il cameriere', 'il menù', 'il tavolo', 'il conto', 'il bicchiere', 'la bottiglia', 'il piatto',
      "l'antipasto", 'il contorno', 'ordinare', 'prenotare', 'il coperto', 'la mancia', 'il vino', 'la carne',
      'il pollo', 'il dolce', 'la cena', "l'insalata", 'consigliare', 'tutto', 'avere fame',
    ],
    kapitel: ['pronomi-indiretti'],
    texte: ['ristorante'],
  },
  {
    id: 'l14', nr: 14, titel: 'Quando ero piccola', situation: 'Von früher erzählen', stufe: 'A2', art: 'lektion',
    woerter: [
      'il bambino', 'la scuola', 'il giardino', "l'albero", "l'animale", 'il fiore', 'ricordare', 'vivere', 'spesso',
      'mai', 'giovane', 'vecchio', 'ogni', 'felice', 'il regalo', 'il compleanno', 'la festa', 'quando', 'nostro',
      "l'anno", 'imparare',
    ],
    kapitel: ['imperfetto'],
    texte: ['da-piccola'],
  },
  {
    id: 'l15', nr: 15, titel: 'Che tempo fa?', situation: 'Wetter und Jahreszeiten vergleichen', stufe: 'A2', art: 'lektion',
    woerter: [
      'il tempo', 'il vento', 'la neve', 'la nuvola', 'la pioggia', 'fa caldo', 'fa freddo', 'freddo', 'brutto',
      'la primavera', "l'autunno", "l'inverno", 'la stagione', 'gennaio', 'agosto', 'alto', 'basso', 'veloce',
      'diverso', 'come', 'troppo',
    ],
    kapitel: ['vergleiche'],
    texte: ['tempo'],
  },
  {
    id: 'l16', nr: 16, titel: 'Dal medico', situation: 'Sagen, was weh tut', stufe: 'A2', art: 'lektion',
    woerter: [
      'il medico', 'la testa', 'la mano', 'il piede', 'il braccio', 'la gamba', "l'occhio", 'la bocca', 'il naso',
      "l'orecchio", 'il dente', 'la pancia', 'il dolore', 'malato', 'ho mal di testa', 'la medicina', 'la farmacia',
      "l'ospedale", 'sentire', 'male', 'come sta?', 'mentre',
    ],
    kapitel: ['imperfetto-passato'],
    texte: ['medico'],
  },
  {
    id: 'r4', nr: 16.5, titel: 'Wiederholung 4', situation: 'Lektion 13–16 gemischt', stufe: 'A2', art: 'ripasso',
    lektionen: ['l13', 'l14', 'l15', 'l16'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-4'],
  },
  {
    id: 'l17', nr: 17, titel: 'Tiramisù', situation: 'Ein Rezept mit „man“', stufe: 'A2', art: 'lektion',
    woerter: [
      'il tiramisù', 'la tazza', 'il frigorifero', 'la crema', 'il tuorlo', "l'albume", 'separare', 'il cacao',
      'amaro', 'almeno', 'prima', "l'uovo", 'lo zucchero', 'la panna', 'il burro', 'la farina', 'coprire', 'togliere',
      'crudo', 'cotto',
    ],
    kapitel: ['si-impersonale'],
    texte: ['tiramisu'],
  },
  {
    id: 'l18', nr: 18, titel: 'Bologna in bici', situation: 'Eine Nachricht lesen – A2 geschafft', stufe: 'A2', art: 'lektion',
    woerter: [
      'la notizia', 'il governo', 'il problema', 'il cittadino', 'aumentare', 'importante', 'possibile',
      'la bicicletta', 'il traffico', 'il sindaco', 'il comune', 'il progetto', 'il parcheggio', 'il negozio',
      'perdere', 'davanti', 'secondo', "d'accordo", "l'aria", 'nuovo', 'cento', 'la porta',
    ],
    kapitel: ['relativ-che'],
    texte: ['bologna-bici'],
  },
];
