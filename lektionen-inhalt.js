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

  // ==================== B1 ====================
  {
    id: 'l19', nr: 19, titel: 'Progetti per il futuro', situation: 'Über Pläne sprechen', stufe: 'B1', art: 'lektion',
    woerter: [
      'il futuro', 'il corso', 'cambiare', 'sperare', "l'università", 'decidere', "l'appartamento", 'trasferirsi',
      "l'estero", 'organizzare', 'studiare', 'la lingua', 'cercare', 'trovare', 'il mese', 'settembre', 'forse',
      'insieme', 'pensare', 'difficile', 'facile', 'la vita',
    ],
    kapitel: ['futuro'],
    texte: ['progetti'],
  },
  {
    id: 'l20', nr: 20, titel: 'Una casa al mare', situation: 'Wünsche und Träume, höflich bitten', stufe: 'B1', art: 'lektion',
    woerter: [
      'il sogno', 'il desiderio', 'desiderare', 'ricco', 'tranquillo', 'il silenzio', 'il cielo', 'la barca', 'magari',
      'invece', 'smettere', 'preferire', 'aiutare', 'i soldi', 'la finestra', 'la cucina', 'dare', 'sapere', 'senza', 'usare',
    ],
    kapitel: ['condizionale'],
    texte: ['desideri'],
  },
  {
    id: 'r5', nr: 20.5, titel: 'Wiederholung 5', situation: 'Lektion 17–20 gemischt', stufe: 'B1', art: 'ripasso',
    lektionen: ['l17', 'l18', 'l19', 'l20'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-5'],
  },
  {
    id: 'l21', nr: 21, titel: 'Al telefono', situation: 'Telefonieren: Was machst du gerade?', stufe: 'B1', art: 'lektion',
    woerter: [
      'stare', 'il messaggio', 'la riunione', 'richiamare', 'il numero', 'ripetere', 'la chiamata', 'disturbare',
      'il cellulare', 'chiamare', 'rispondere', 'aspettare', 'adesso', 'pronto', 'mandare', 'scrivere', 'la parola',
      'capire', 'scusa', 'va bene',
    ],
    kapitel: ['gerundio'],
    texte: ['telefono'],
  },
  {
    id: 'l22', nr: 22, titel: 'Una mail a Giulia', situation: 'Briefe und Mails schreiben', stufe: 'B1', art: 'lektion',
    woerter: [
      'la lettera', 'prestare', 'restituire', 'la foto', 'il pacco', 'spedire', 'ricevere', "l'abbraccio", 'la mail',
      'la collana', 'dimenticare', 'la borsa', "l'indirizzo", 'caro', 'a presto', 'la risposta', 'la domanda', 'lasciare',
      'la cosa', 'perché', 'mille',
    ],
    kapitel: ['pronomi-combinati'],
    texte: ['email'],
  },
  {
    id: 'l23', nr: 23, titel: 'Il ragù della nonna', situation: 'Ein Familienrezept', stufe: 'B1', art: 'lektion',
    woerter: [
      'la carota', 'il sedano', 'la carne macinata', 'il ragù', 'ci vuole', 'il segreto', 'la pazienza', 'la salsa',
      'il riso', 'il brodo', 'il coperchio', 'il litro', 'il pizzico', 'il cucchiaino', 'sbucciare', 'mezzo', 'abbastanza',
      'poco', 'rosso', 'friggere',
    ],
    kapitel: ['ci-ne'],
    texte: ['ragu-nonna'],
  },
  {
    id: 'l24', nr: 24, titel: 'Il colloquio di lavoro', situation: 'Arbeit und Bewerbung', stufe: 'B1', art: 'lektion',
    woerter: [
      'il colloquio', "l'ufficio", "l'azienda", 'il capo', 'il collega', "l'esperienza", 'nervoso', 'lo stipendio',
      'il contratto', 'il curriculum', 'preparare', 'conoscere', 'la donna', "l'uomo", 'la signora', 'il signore', 'bravo',
      'ultimo', 'già', 'la fermata',
    ],
    kapitel: ['trapassato'],
    texte: ['colloquio'],
  },
  {
    id: 'r6', nr: 24.5, titel: 'Wiederholung 6', situation: 'Lektion 21–24 gemischt', stufe: 'B1', art: 'ripasso',
    lektionen: ['l21', 'l22', 'l23', 'l24'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-6'],
  },
  {
    id: 'l25', nr: 25, titel: 'Venezia: troppi turisti?', situation: 'Die eigene Meinung sagen', stufe: 'B1', art: 'lektion',
    woerter: [
      "l'opinione", 'il turista', 'il turismo', 'giusto', 'il centro', 'la tassa', 'proteggere', "l'ambiente",
      'necessario', 'sembrare', 'il motivo', 'la soluzione', 'credere', 'la gente', 'vero', 'sbagliato', 'la situazione',
      'tutti', 'chi',
    ],
    kapitel: ['congiuntivo'],
    texte: ['venezia'],
  },
  {
    id: 'l26', nr: 26, titel: 'Un quadro antico', situation: 'Kultur-Nachrichten lesen', stufe: 'B1', art: 'lektion',
    woerter: [
      'il quadro', 'il teatro', 'costruire', 'scoprire', 'il secolo', 'antico', 'il pubblico', 'il visitatore',
      'la polizia', 'la mostra', "l'artista", 'famoso', 'restaurare', "l'articolo", 'la storia', 'il giornale', 'aprire',
      'chiudere', 'durante', 'il mondo', 'dietro',
    ],
    kapitel: ['passivo'],
    texte: ['quadro'],
  },
  {
    id: 'l27', nr: 27, titel: 'Una gita in montagna', situation: 'Einen Ausflug planen', stufe: 'B1', art: 'lektion',
    woerter: [
      'la gita', 'il bosco', 'il sentiero', 'lo zaino', "l'ombrello", 'le previsioni', 'la cima', 'la vista', 'il rifugio',
      'pericoloso', 'sicuro', 'il temporale', 'camminare', 'correre', 'sopra', 'sotto', 'tra', 'fuori', 'grigio',
    ],
    kapitel: ['periodo-reale'],
    texte: ['gita'],
  },
  {
    id: 'l28', nr: 28, titel: 'Un reclamo', situation: 'Sich beschweren – höflich mit „Sie“', stufe: 'B1', art: 'lektion',
    woerter: [
      'il reclamo', 'funzionare', 'rotto', 'il rimborso', 'il cliente', 'il direttore', 'la garanzia', 'purtroppo',
      'controllare', 'la caffettiera', 'lo scontrino', 'la carta di credito', 'economico', 'spendere', 'aperto', 'chiuso',
      'il sacchetto', 'il supermercato',
    ],
    kapitel: ['imperativo-pronomi'],
    texte: ['reclamo'],
  },
  {
    id: 'r7', nr: 28.5, titel: 'Wiederholung 7', situation: 'Lektion 25–28 gemischt – B1 geschafft', stufe: 'B1', art: 'ripasso',
    lektionen: ['l25', 'l26', 'l27', 'l28'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-7'],
  },

  // ==================== B2 ====================
  {
    id: 'l29', nr: 29, titel: 'Se vincessi un milione…', situation: 'Träumen: Was wäre, wenn …', stufe: 'B2', art: 'lektion',
    woerter: [
      'la lotteria', 'vincere', 'il milione', 'regalare', 'la villa', 'girare', 'povero', 'la differenza', 'la felicità',
      'immaginare', 'fortunato', 'la fortuna', 'il lusso', 'semplice', 'davvero', 'il posto', 'quasi', 'niente', 'stesso',
    ],
    kapitel: ['congiuntivo-imperfetto'],
    texte: ['lotteria'],
  },
  {
    id: 'l30', nr: 30, titel: 'Un viaggio sfortunato', situation: 'Was man hätte tun sollen', stufe: 'B2', art: 'lektion',
    woerter: [
      'sfortunato', 'lo sciopero', 'cancellare', 'il volo', 'la coincidenza', 'il bagaglio', 'la coda', 'avvisare',
      'arrabbiato', 'peccato', 'scegliere', 'il consiglio', 'la colpa', 'nessuno', 'luglio', 'marzo',
    ],
    kapitel: ['condizionale-passato'],
    texte: ['viaggio-sfortunato'],
  },
  {
    id: 'l31', nr: 31, titel: 'Furto in gioielleria', situation: 'Polizeibericht in der Zeitung', stufe: 'B2', art: 'lektion',
    woerter: [
      'il furto', 'il ladro', 'rubare', 'la gioielleria', 'il testimone', 'notare', 'scappare', "l'indagine",
      'il vicino di casa', 'la telecamera', 'il gioiello', "l'allarme", 'arrestare', 'probabilmente', 'il quartiere',
      'disperato',
    ],
    kapitel: ['congiuntivo-passato'],
    texte: ['furto'],
  },
  {
    id: 'l32', nr: 32, titel: 'La pizza Margherita', situation: 'Eine Legende lesen', stufe: 'B2', art: 'lektion',
    woerter: [
      'la leggenda', 'la regina', 'il re', 'il pizzaiolo', 'la bandiera', 'nascere', 'diventare', "l'onore", 'il popolo',
      'inventare', 'la mozzarella', 'assaggiare', "l'idea", 'il colore', 'bianco', 'verde', 'il nome', 'giugno',
    ],
    kapitel: ['passato-remoto'],
    texte: ['margherita'],
  },
  {
    id: 'r8', nr: 32.5, titel: 'Wiederholung 8', situation: 'Lektion 29–32 gemischt', stufe: 'B2', art: 'ripasso',
    lektionen: ['l29', 'l30', 'l31', 'l32'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-8'],
  },
  {
    id: 'l33', nr: 33, titel: 'Intervista a una cuoca', situation: 'Erzählen, was jemand gesagt hat', stufe: 'B2', art: 'lektion',
    woerter: [
      "l'intervista", 'il cuoco', 'il giornalista', 'spiegare', 'raccontare', 'affermare', 'la tradizione', 'il successo',
      'la stella', 'il premio', 'la qualità', 'il prodotto', 'locale', 'rispettare', 'insegnare', 'dodici',
    ],
    kapitel: ['discorso-indiretto'],
    texte: ['intervista-cuoca'],
  },
  {
    id: 'l34', nr: 34, titel: 'Se avessi preso quel treno', situation: 'Über verpasste Chancen sprechen', stufe: 'B2', art: 'lektion',
    woerter: [
      'il destino', "l'occasione", 'innamorarsi', 'sposarsi', 'il matrimonio', 'pentirsi', 'incontrare', 'per caso',
      'la scelta', 'lo studente', 'il ricordo', 'salutare', 'la paura', 'il coraggio', 'ridere', 'comunque', 'il ragazzo',
    ],
    kapitel: ['periodo-irreale'],
    texte: ['occasione'],
  },
  {
    id: 'l35', nr: 35, titel: 'Lavorare da casa', situation: 'Vor- und Nachteile abwägen', stufe: 'B2', art: 'lektion',
    woerter: [
      'il dipendente', 'il datore di lavoro', 'risparmiare', 'il pendolare', 'la sede', 'il vantaggio', 'lo svantaggio',
      'la solitudine', 'benché', 'affinché', 'purché', 'prima che', 'la ricerca', 'permettere', 'la tecnologia',
      'la volta', 'mancare', 'migliore',
    ],
    kapitel: ['congiunzioni'],
    texte: ['lavoro-casa'],
  },
  {
    id: 'l36', nr: 36, titel: 'Il pesto genovese', situation: 'Ein anspruchsvolles Rezept', stufe: 'B2', art: 'lektion',
    woerter: [
      'il pesto', 'il mortaio', 'i pinoli', 'il pecorino', 'il parmigiano', 'la foglia', 'schiacciare', 'la regione',
      'tipico', "l'origine", 'conservare', 'il marmo', 'il legno', 'delicato', 'quale',
    ],
    kapitel: ['relativi'],
    texte: ['pesto'],
  },
  {
    id: 'r9', nr: 36.5, titel: 'Wiederholung 9', situation: 'Lektion 33–36 gemischt – B2 geschafft', stufe: 'B2', art: 'ripasso',
    lektionen: ['l33', 'l34', 'l35', 'l36'],
    woerter: [],
    kapitel: [],
    texte: ['ripasso-9'],
  },
];
