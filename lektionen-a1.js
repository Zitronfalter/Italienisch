// Kurze Wort-Lektionen A1: je 3 nach Lektion 1–8.
//
// Eine Wort-Lektion (wortLektion: true) bringt ca. 15 neue Wörter zum Thema der Lektion davor,
// einen kurzen Text, Hören und gemischte Übungen. Neue Grammatik gibt es darin nicht:
// uebenKapitel = Kapitel, die in den Übungen wiederholt werden (meist das der Lektion davor).
// nr: 1.1, 1.2 … (für die Reihenfolge) – angezeigt werden die Lektionen fortlaufend (Lektionen.anzeigeNr).
// Die Lektionen werden hinter ihrer Lektion in LEKTIONEN eingefügt; Wiederholungen bekommen sie dazu.

(() => {
  const NACH = {
    l01: [
      { id: 'l01a', titel: 'I numeri', situation: 'Zahlen bis 100, das Alter', uebenKapitel: ['essere-un'], texte: ['a1-numeri'],
        woerter: ['venti', 'trenta', 'cinquanta', 'tredici', 'quattordici', 'sedici', 'diciassette', 'diciotto', 'diciannove',
          'quaranta', 'sessanta', 'settanta', 'ottanta', 'novanta', "l'età", 'contare'] },
      { id: 'l01b', titel: 'Di dove sei?', situation: 'Länder und Sprachen', uebenKapitel: ['essere-un'], texte: ['a1-paesi'],
        woerter: ["l'Italia", 'la Germania', "l'Austria", 'la Svizzera', 'la Francia', 'la Spagna', "l'Inghilterra", "l'Europa",
          'italiano', 'tedesco', 'inglese', 'francese', 'spagnolo', 'straniero', 'di dove sei?'] },
      { id: 'l01c', titel: 'Buona giornata!', situation: 'Grüßen, danken, sich verabschieden', uebenKapitel: ['essere-un'], texte: ['a1-saluti'],
        woerter: ['buonanotte', 'scusi', 'benvenuto', 'auguri', 'salve', 'a dopo', 'a domani', 'come va?', 'grazie mille',
          'di niente', 'buona giornata', 'buona serata', 'il cognome', 'il telefono', 'la via'] },
    ],
    l02: [
      { id: 'l02a', titel: "L'aperitivo", situation: 'Getränke bestellen', uebenKapitel: ['artikel'], texte: ['a1-bibite'],
        woerter: ['il succo', 'avere sete', 'la spremuta', 'il cappuccino', "l'acqua frizzante", "l'acqua naturale", 'il ghiaccio',
          "l'aranciata", 'la cioccolata', 'il macchiato', 'la lattina', 'la cannuccia', 'il bancone', "l'aperitivo", 'lo spritz'] },
      { id: 'l02b', titel: 'La merenda', situation: 'Kleine Speisen und Snacks', uebenKapitel: ['artikel'], texte: ['a1-merenda'],
        woerter: ['il gelato', 'il prosciutto', 'il panino', 'il tramezzino', 'il toast', 'la marmellata', 'il miele', 'lo yogurt',
          'la merenda', 'il biscotto', 'il cioccolato', 'salato', 'buonissimo', 'la pizza', 'il pasticcino'] },
      { id: 'l02c', titel: 'Alla cassa', situation: 'Bezahlen, bar oder mit Karte', uebenKapitel: ['artikel'], texte: ['a1-cassa'],
        woerter: ['la cassa', 'il centesimo', 'la moneta', 'la banconota', 'il bancomat', 'in contanti', 'quanto fa?', 'per me',
          'da portare via', 'al tavolo', 'al banco', 'il cassiere', 'gratis', 'il portafoglio', 'lo sconto'] },
    ],
    l03: [
      { id: 'l03a', titel: 'I parenti', situation: 'Onkel, Tante, Cousins', uebenKapitel: ['essere-avere', 'possessiv'], texte: ['a1-parenti'],
        woerter: ['lo zio', 'la zia', 'il cugino', 'la cugina', 'il nipote', 'i genitori', 'la suocera', 'il fidanzato', 'la fidanzata',
          'sposato', 'divorziato', 'il gemello', 'il parente', 'il papà', 'la mamma'] },
      { id: 'l03b', titel: 'Com’è?', situation: 'Menschen beschreiben', uebenKapitel: ['essere-avere', 'possessiv'], texte: ['a1-carattere'],
        woerter: ['cattivo', 'simpatico', 'antipatico', 'biondo', 'moro', 'magro', 'carino', 'timido', 'allegro', 'serio',
          'divertente', 'intelligente', 'i capelli', 'la barba', 'gli occhiali'] },
      { id: 'l03c', titel: 'Gli animali', situation: 'Haustiere', uebenKapitel: ['essere-avere', 'possessiv'], texte: ['a1-animali'],
        woerter: ["l'uccello", 'il coniglio', 'il cavallo', 'il criceto', 'la tartaruga', 'la gabbia', "l'acquario", 'dare da mangiare',
          'il veterinario', 'il cucciolo', 'il pelo', 'accarezzare', 'portare fuori'] },
    ],
    l04: [
      { id: 'l04a', titel: 'Che ore sono?', situation: 'Uhrzeit und Wochentage', uebenKapitel: ['verben-are'], texte: ['a1-orario'],
        woerter: ['lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'che ore sono?', 'in punto', 'il quarto', 'il mezzogiorno',
          'la mezzanotte', "l'orologio", 'di solito', 'a volte', 'ogni tanto'] },
      { id: 'l04b', titel: 'Gli hobby', situation: 'Musik, Kino, Hobbys', uebenKapitel: ['verben-are', 'piacere'], texte: ['a1-hobby'],
        woerter: ['suonare', 'la chitarra', 'il pianoforte', 'cantare', 'ballare', 'disegnare', 'la musica', 'il film', 'il cinema',
          'la canzone', "l'hobby", 'il fumetto', 'la serie', 'divertirsi', 'il concerto'] },
      { id: 'l04c', titel: 'Lo sport', situation: 'Sport treiben', uebenKapitel: ['verben-are', 'piacere'], texte: ['a1-sport'],
        woerter: ['lo sport', 'il calcio', 'la palestra', 'sciare', 'la squadra', 'la partita', 'il pallone', 'la piscina', 'allenarsi',
          'il tennis', 'lo stadio', 'il giocatore', 'la corsa', 'lo yoga', 'il campo'] },
    ],
    l05: [
      { id: 'l05a', titel: 'In metro o in motorino?', situation: 'Verkehrsmittel', uebenKapitel: ['verben-ere-ire'], texte: ['a1-trasporti'],
        woerter: ['la nave', 'la metro', 'il tram', 'il taxi', 'la moto', 'a piedi', 'il pullman', 'guidare', 'la patente', 'il motorino',
          'il traghetto', 'la benzina', 'il porto', 'il casco'] },
      { id: 'l05b', titel: 'Dov’è la banca?', situation: 'Den Weg in der Stadt finden', uebenKapitel: ['verben-ere-ire'], texte: ['a1-citta'],
        woerter: ["l'incrocio", 'il semaforo', "l'angolo", 'attraversare', 'il viale', 'la banca', 'la posta', 'il parco', 'il palazzo',
          'la torre', 'la fontana', 'il marciapiede', 'in fondo', 'di fronte'] },
      { id: 'l05c', titel: 'In treno', situation: 'Fahrkarte, Bahnsteig, Verspätung', uebenKapitel: ['verben-ere-ire'], texte: ['a1-treno'],
        woerter: ['andata e ritorno', 'solo andata', 'la biglietteria', 'il controllore', 'timbrare', 'la carrozza', 'il finestrino',
          'in orario', "l'orario", "la sala d'attesa", 'il viaggiatore'] },
    ],
    l06: [
      { id: 'l06a', titel: 'Frutta e verdura', situation: 'Obst und Gemüse', uebenKapitel: ['praepositionen'], texte: ['a1-frutta'],
        woerter: ['la banana', 'la pera', "l'uva", 'la fragola', 'la pesca', 'la ciliegia', "l'anguria", 'la zucchina', 'la melanzana',
          'il peperone', 'i fagioli', 'i piselli', 'la lattuga', 'i funghi', 'il cetriolo'] },
      { id: 'l06b', titel: 'Un etto di salame', situation: 'Lebensmittel und Mengen', uebenKapitel: ['praepositionen'], texte: ['a1-spesa'],
        woerter: ["l'etto", 'la confezione', 'il pacchetto', 'la scatola', 'il vasetto', 'la dozzina', 'il tonno', 'il salame',
          "l'aceto", 'la salsiccia', 'il peso', 'pesare'] },
      { id: 'l06c', titel: 'In cucina', situation: 'Tisch decken, aufräumen', uebenKapitel: ['praepositionen'], texte: ['a1-cucina'],
        woerter: ['la forchetta', 'il coltello', 'il tovagliolo', 'la tovaglia', 'apparecchiare', 'il lavandino', 'la lavastoviglie',
          'il microonde', 'la grattugia', 'grattugiare', 'il tagliere', 'il mestolo', 'sporco', 'pulito', 'pulire'] },
    ],
    l07: [
      { id: 'l07a', titel: 'I mobili', situation: 'Möbel im Zimmer', uebenKapitel: ['modalverben'], texte: ['a1-mobili'],
        woerter: ['la sedia', 'il divano', "l'armadio", 'la poltrona', 'la lampada', 'lo specchio', 'la scrivania', 'il comodino',
          'il cuscino', 'la coperta', 'il tappeto', 'il balcone', 'la terrazza', 'il muro', 'lo scaffale'] },
      { id: 'l07b', titel: 'La casa nuova', situation: 'Wohnung, Miete, Umzug', uebenKapitel: ['modalverben'], texte: ['a1-casa'],
        woerter: ['il soggiorno', 'la camera da letto', 'il corridoio', "l'ingresso", 'le scale', "l'affitto", 'affittare',
          'il proprietario', 'il trasloco', 'il garage', 'la cantina', 'il riscaldamento', 'la luce', 'accendere', 'spegnere'] },
      { id: 'l07c', titel: 'Un problema in albergo', situation: 'Service und Beschwerden im Hotel', uebenKapitel: ['modalverben'], texte: ['a1-hotel'],
        woerter: ['la reception', 'la sveglia', 'il wifi', 'la password', 'il rumore', 'rumoroso', 'la mezza pensione', 'il servizio',
          'la pulizia', 'il condizionatore', 'il frigobar', 'disponibile', 'il guasto', 'lamentarsi', 'la stanza'] },
    ],
    l08: [
      { id: 'l08a', titel: 'La mia giornata', situation: 'Der Tagesablauf', uebenKapitel: ['reflexiv'], texte: ['a1-giornata'],
        woerter: ['fare colazione', 'vestirsi', 'pettinarsi', 'farsi la doccia', 'lavarsi i denti', 'andare a letto', 'addormentarsi',
          'riposarsi', 'pranzare', 'cenare', 'la pausa', 'fare la spesa', 'prepararsi', 'puntuale', 'in ritardo'] },
      { id: 'l08b', titel: 'Cosa mi metto?', situation: 'Kleidung und Farben', uebenKapitel: ['reflexiv'], texte: ['a1-vestiti'],
        woerter: ['nero', 'giallo', 'blu', 'marrone', 'la maglietta', 'i pantaloni', 'la gonna', 'il vestito', 'la camicia',
          'le scarpe', 'la giacca', 'il cappotto', 'il maglione', 'la taglia', 'mettersi'] },
      { id: 'l08c', titel: 'Che lavoro fai?', situation: 'Berufe', uebenKapitel: ['reflexiv'], texte: ['a1-lavori'],
        woerter: ["l'impiegato", "l'insegnante", "l'infermiera", 'il commesso', "l'operaio", "l'avvocato", 'il turno',
          'la studentessa', 'il pensionato', 'guadagnare', 'il mestiere', 'che lavoro fai?', 'il parrucchiere'] },
    ],
  };

  for (const [nachId, neue] of Object.entries(NACH)) {
    const i = LEKTIONEN.findIndex((l) => l.id === nachId);
    if (i < 0) continue;
    const basis = LEKTIONEN[i];
    const lektionen = neue.map((l, n) => ({
      ...l,
      nr: basis.nr + (n + 1) / 10,          // 1.1, 1.2, 1.3
      stufe: basis.stufe,
      art: 'lektion',
      wortLektion: true,
      kapitel: [],
    }));
    LEKTIONEN.splice(i + 1, 0, ...lektionen);
    // Wiederholungen, die die Lektion umfassen, bekommen die Wort-Lektionen dazu
    for (const r of LEKTIONEN) {
      if (r.art === 'ripasso' && (r.lektionen || []).includes(nachId)) {
        r.lektionen.push(...lektionen.map((l) => l.id));
      }
    }
  }
})();
