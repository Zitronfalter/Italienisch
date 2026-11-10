// Lesetexte und Rezepte, von leicht (A1) nach schwerer (A2)
//
// text:    Zeilen mit "## " = Zwischenüberschrift, "- " = Aufzählung, Leerzeile = neuer Absatz
// woerter: Bedeutung der Wörter in diesem Text (nur kleingeschrieben)
//          'form': ['Grundform', 'Bedeutung hier', 'Grundbedeutung für die Karteikarte (optional)']
//          Wörter aus dem Grundwortschatz und kleine Wörter (GRUNDWOERTER) findet die App selbst.
// fragen:  Verständnisfragen auf Deutsch; die erste Antwort ist die richtige
//          (die App mischt die Reihenfolge).

// Kleine Wörter, die in vielen Texten vorkommen
const GRUNDWOERTER = {
  'il': ['il', 'der/das (Artikel)'], 'lo': ['lo', 'der/das (Artikel vor s+Konsonant, z)'],
  'la': ['la', 'die/das (Artikel)'], 'i': ['i', 'die (Mehrzahl)'], 'gli': ['gli', 'die (Mehrzahl)'],
  'le': ['le', 'die (Mehrzahl, weiblich)'], "l'": ["l'", 'der/die/das (vor Vokal)'],
  'un': ['un', 'ein'], 'uno': ['uno', 'ein'], 'una': ['una', 'eine'], "un'": ["un'", 'eine (vor Vokal)'],
  'di': ['di', 'von; aus'], "d'": ['di', 'von; aus (vor Vokal)'], 'a': ['a', 'in; nach; zu; um'],
  'da': ['da', 'von; aus; bei; seit'], 'in': ['in', 'in; nach'], 'su': ['su', 'auf; über'],
  'al': ['a + il', 'zum; am; im'], 'alla': ['a + la', 'zur; an der; in der'], "all'": ["a + l'", 'zum; zur; um (Uhrzeit)'],
  'ai': ['a + i', 'den; zu den'], 'alle': ['a + le', 'um (Uhrzeit); den'],
  'dal': ['da + il', 'vom; von dem'], 'dai': ['da + i', 'bei den; von den'], 'dagli': ['da + gli', 'von den'],
  'del': ['di + il', 'vom; des'], 'della': ['di + la', 'der; von der'], "dell'": ["di + l'", 'des; der; von'],
  'dei': ['di + i', 'der (Mehrzahl); einige'], 'delle': ['di + le', 'der (Mehrzahl); einige'],
  'nel': ['in + il', 'im; in dem'], 'nella': ['in + la', 'in der'], 'sul': ['su + il', 'auf dem; auf den'], 'sulla': ['su + la', 'auf der; auf die'],
  'è': ['essere', 'ist'], 'sono': ['essere', 'bin; sind (sono le otto = es ist acht Uhr)'],
  'ha': ['avere', 'hat'], 'ho': ['avere', 'ich habe'], 'abbiamo': ['avere', 'wir haben'],
  'va': ['andare', 'geht; fährt'], 'fa': ['fare', 'macht'], 'vuole': ['volere', 'will; möchte (Sie möchten)'],
  'mi': ['mi', 'mich; mir'], 'si': ['si', 'sich'], 'mio': ['mio', 'mein'], 'mia': ['mia', 'meine'],
  'lui': ['lui', 'er'], 'lei': ['lei', 'sie; Sie'], 'loro': ['loro', 'sie; ihr, ihre (Mehrzahl)'],
  'che': ['che', 'dass; der/die/das (welcher); was'], 'più': ['più', 'mehr'], 'meno': ['meno', 'weniger'],
  'però': ['però', 'aber; jedoch'], 'qualche': ['qualche', 'einige; ein paar'],
  'anni': ["l'anno", 'Jahre'], 'ore': ["l'ora", 'Stunden; Uhr'], 'minuti': ['il minuto', 'Minuten'],
  'euro': ["l'euro", 'Euro', 'der Euro'],
};

const LESETEXTE = [
  // ---------------------------------------------------------------- A1
  {
    id: 'al-bar', titel: 'Al bar', art: 'Text', stufe: 'A1',
    text: `Sono le otto di mattina. Marco entra in un bar vicino alla stazione.

«Buongiorno! Un caffè, per favore», dice Marco.

«Ecco il caffè. Vuole anche un cornetto?», chiede il barista.

«Sì, grazie. Un cornetto alla crema.»

Marco mangia il cornetto e beve il caffè al banco. Poi paga: due euro e cinquanta.

«Grazie e buona giornata!» – «Arrivederci!»`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'entra': ['entrare', 'geht hinein'],
      'bar': ['il bar', 'die Bar; das Café', 'die Bar; das Café'],
      'vicino': ['vicino', 'in der Nähe (vicino a = nahe bei)'],
      'favore': ['per favore', 'bitte (per favore)'],
      'dice': ['dire', 'sagt'],
      'cornetto': ['il cornetto', 'das Hörnchen; der Croissant', 'das Hörnchen (Croissant)'],
      'chiede': ['chiedere', 'fragt'],
      'barista': ['il barista', 'der Barkeeper', 'der Barkeeper (im Café)'],
      'crema': ['la crema', 'die Creme; der Pudding', 'die Creme'],
      'mangia': ['mangiare', 'isst'],
      'beve': ['bere', 'trinkt'],
      'banco': ['il banco', 'die Theke', 'die Theke'],
      'paga': ['pagare', 'zahlt'],
      'buona': ['buono', 'gute(n)'],
      'giornata': ['la giornata', 'der Tag (wie er verläuft)', 'der Tag (Verlauf)'],
    },
    fragen: [
      { frage: 'Wann ist Marco in der Bar?', antworten: ['Um acht Uhr morgens', 'Am Abend', 'Am Mittag'] },
      { frage: 'Was isst Marco?', antworten: ['Ein Hörnchen mit Creme', 'Ein Brötchen mit Schinken', 'Ein Eis'] },
      { frage: 'Wie viel zahlt Marco?', antworten: ['2,50 Euro', '5,20 Euro', '2 Euro'] },
    ],
  },

  {
    id: 'famiglia', titel: 'La mia famiglia', art: 'Text', stufe: 'A1',
    text: `Mi chiamo Anna e abito a Bologna. Ho trentadue anni e lavoro in una scuola.

La mia famiglia non è grande. Mio marito si chiama Luca. Lui è cuoco e cucina molto bene. Abbiamo una figlia, Sofia. Sofia ha sei anni e ama gli animali. Abbiamo anche un gatto nero, Micio.

La domenica mangiamo sempre dai nonni. La nonna prepara la pasta fatta in casa.`,
    woerter: {
      'chiamo': ['chiamarsi', 'ich heiße (mi chiamo)', 'heißen'],
      'chiama': ['chiamarsi', 'heißt (si chiama)', 'heißen'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'abito': ['abitare', 'ich wohne'],
      'bologna': ['Bologna', 'Bologna (Stadt)'],
      'trentadue': ['trentadue', 'zweiunddreißig'],
      'lavoro': ['lavorare', 'ich arbeite'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'cuoco': ['il cuoco', 'Koch', 'der Koch'],
      'cucina': ['cucinare', 'kocht'],
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'ama': ['amare', 'liebt'],
      'animali': ["l'animale", 'Tiere'],
      'micio': ['Micio', 'Micio (Name; heißt etwa „Mieze“)'],
      'mangiamo': ['mangiare', 'wir essen'],
      'nonni': ['il nonno', 'Großeltern'],
      'prepara': ['preparare', 'bereitet zu; macht', 'zubereiten'],
      'fatta': ['fare', 'gemacht (fatta in casa = hausgemacht)'],
    },
    fragen: [
      { frage: 'Wo wohnt Anna?', antworten: ['In Bologna', 'In Rom', 'In Neapel'] },
      { frage: 'Was ist Luca von Beruf?', antworten: ['Koch', 'Lehrer', 'Kellner'] },
      { frage: 'Was macht die Familie am Sonntag?', antworten: ['Sie isst bei den Großeltern', 'Sie geht ins Kino', 'Sie arbeitet'] },
    ],
  },

  {
    id: 'bruschetta', titel: 'Bruschetta al pomodoro', art: 'Rezept', stufe: 'A1',
    text: `## Ingredienti per 4 persone
- 4 fette di pane
- 3 pomodori maturi
- 1 spicchio d'aglio
- olio extravergine d'oliva
- sale e basilico

## Preparazione
Taglia i pomodori a pezzetti e mettili in una ciotola. Aggiungi il sale, l'olio e qualche foglia di basilico. Mescola bene.

Scalda le fette di pane nel forno per cinque minuti. Strofina l'aglio sul pane caldo.

Metti i pomodori sul pane e servi subito.`,
    woerter: {
      'bruschetta': ['la bruschetta', 'geröstetes Brot mit Belag', 'die Bruschetta (geröstetes Brot)'],
      'ingredienti': ["l'ingrediente", 'Zutaten'],
      'persone': ['la persona', 'Personen', 'die Person'],
      'fette': ['la fetta', 'Scheiben'],
      'pomodori': ['il pomodoro', 'Tomaten'],
      'maturi': ['maturo', 'reife', 'reif'],
      'spicchio': ['lo spicchio', 'die Zehe (Knoblauch)', 'die Knoblauchzehe'],
      'extravergine': ['extravergine', 'nativ extra (Olivenöl)'],
      'oliva': ["l'oliva", "Olive (olio d'oliva = Olivenöl)", 'die Olive'],
      'preparazione': ['la preparazione', 'die Zubereitung', 'die Zubereitung'],
      'taglia': ['tagliare', 'schneide! (Befehlsform)'],
      'pezzetti': ['il pezzetto', 'kleine Stücke', 'das Stückchen'],
      'mettili': ['mettere', 'leg sie! (metti + li = sie)'],
      'aggiungi': ['aggiungere', 'füge hinzu!'],
      'foglia': ['la foglia', 'Blatt', 'das Blatt'],
      'mescola': ['mescolare', 'rühre um!'],
      'scalda': ['scaldare', 'erhitze! wärme!'],
      'strofina': ['strofinare', 'reibe! (über etwas)', 'reiben'],
      'metti': ['mettere', 'leg! gib!'],
      'servi': ['servire', 'serviere!'],
    },
    fragen: [
      { frage: 'Wie viele Tomaten braucht man?', antworten: ['Drei', 'Vier', 'Eine'] },
      { frage: 'Was macht man mit dem Knoblauch?', antworten: ['Man reibt ihn über das warme Brot', 'Man brät ihn in der Pfanne', 'Man gibt ihn zu den Tomaten'] },
      { frage: 'Wie lange kommt das Brot in den Ofen?', antworten: ['Fünf Minuten', 'Fünfzehn Minuten', 'Eine Stunde'] },
    ],
  },

  {
    id: 'stazione', titel: 'Alla stazione', art: 'Text', stufe: 'A1',
    text: `Paola è alla stazione di Firenze. Vuole andare a Roma. Va alla biglietteria.

«Buongiorno. Un biglietto per Roma, per favore.»

«Solo andata o andata e ritorno?»

«Andata e ritorno. A che ora parte il prossimo treno?»

«Alle dieci e quindici, dal binario sei. Il treno arriva a Roma alle undici e cinquanta.»

«Quanto costa?» – «Quarantotto euro.»

Paola paga con la carta di credito e va al binario. Il treno è in ritardo di dieci minuti.`,
    woerter: {
      'paola': ['Paola', 'Paola (Vorname)'],
      'firenze': ['Firenze', 'Florenz'],
      'roma': ['Roma', 'Rom'],
      'biglietteria': ['la biglietteria', 'der Fahrkartenschalter', 'der Fahrkartenschalter'],
      'favore': ['per favore', 'bitte (per favore)'],
      'andata': ["l'andata", 'die Hinfahrt', 'die Hinfahrt'],
      'ritorno': ['il ritorno', 'die Rückfahrt', 'die Rückfahrt'],
      'parte': ['partire', 'fährt ab'],
      'arriva': ['arrivare', 'kommt an'],
      'costa': ['costare', 'kostet'],
      'quarantotto': ['quarantotto', 'achtundvierzig'],
      'paga': ['pagare', 'zahlt'],
      'carta': ['la carta', 'die Karte (carta di credito = Kreditkarte)', 'die Karte'],
      'credito': ['il credito', 'Kredit (carta di credito = Kreditkarte)'],
    },
    fragen: [
      { frage: 'Wohin will Paola fahren?', antworten: ['Nach Rom', 'Nach Florenz', 'Nach Mailand'] },
      { frage: 'Von welchem Gleis fährt der Zug?', antworten: ['Von Gleis 6', 'Von Gleis 10', 'Von Gleis 15'] },
      { frage: 'Was passiert am Ende?', antworten: ['Der Zug hat 10 Minuten Verspätung', 'Der Zug fällt aus', 'Paola verpasst den Zug'] },
    ],
  },

  // ---------------------------------------------------------------- A2
  {
    id: 'giornata-giulia', titel: 'Una giornata di Giulia', art: 'Text', stufe: 'A2',
    text: `Giulia si sveglia alle sette. Si alza subito, si lava e si veste. Fa colazione con un cappuccino e una fetta di torta.

Alle otto prende l'autobus per andare in ufficio. Lavora fino all'una, poi pranza con una collega. Il pomeriggio è lungo e Giulia è stanca.

Alle sei torna a casa. La sera cucina qualcosa di semplice, legge un libro e alle undici va a letto.`,
    woerter: {
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'sveglia': ['svegliarsi', 'wacht auf (si sveglia)'],
      'alza': ['alzarsi', 'steht auf (si alza)'],
      'lava': ['lavarsi', 'wäscht sich (si lava)', 'sich waschen'],
      'veste': ['vestirsi', 'zieht sich an (si veste)', 'sich anziehen'],
      'colazione': ['la colazione', 'Frühstück (fa colazione = frühstückt)'],
      'cappuccino': ['il cappuccino', 'Cappuccino'],
      'prende': ['prendere', 'nimmt'],
      'ufficio': ["l'ufficio", 'das Büro', 'das Büro'],
      'lavora': ['lavorare', 'arbeitet'],
      'fino': ['fino a', 'bis (fino a)', 'bis'],
      'una': ['una', "eine; all'una = um ein Uhr"],
      'pranza': ['pranzare', 'isst zu Mittag', 'zu Mittag essen'],
      'collega': ['la collega', 'Kollegin', 'der Kollege; die Kollegin'],
      'stanca': ['stanco', 'müde'],
      'torna': ['tornare', 'kehrt zurück; kommt zurück'],
      'cucina': ['cucinare', 'kocht'],
      'semplice': ['semplice', 'einfach', 'einfach'],
      'legge': ['leggere', 'liest'],
      'letto': ['il letto', 'Bett (va a letto = geht ins Bett)'],
    },
    fragen: [
      { frage: 'Wie kommt Giulia zur Arbeit?', antworten: ['Mit dem Bus', 'Mit dem Auto', 'Zu Fuß'] },
      { frage: 'Mit wem isst sie zu Mittag?', antworten: ['Mit einer Kollegin', 'Mit ihrem Mann', 'Allein'] },
      { frage: 'Was macht sie am Abend?', antworten: ['Sie kocht etwas Einfaches und liest', 'Sie geht ins Restaurant', 'Sie macht Sport'] },
    ],
  },

  {
    id: 'spaghetti-aglio-olio', titel: 'Spaghetti aglio, olio e peperoncino', art: 'Rezept', stufe: 'A2',
    text: `## Ingredienti per 2 persone
- 200 grammi di spaghetti
- 2 spicchi d'aglio
- 1 peperoncino
- 4 cucchiai d'olio d'oliva
- prezzemolo fresco, sale

## Preparazione
Porta a bollore una pentola d'acqua e aggiungi il sale. Cuoci gli spaghetti per circa dieci minuti.

Nel frattempo taglia l'aglio a fettine e il peperoncino a pezzetti. Scalda l'olio in una padella e rosola l'aglio a fuoco lento per due minuti: non deve diventare scuro! Aggiungi il peperoncino.

Scola gli spaghetti e versali nella padella. Mescola bene, aggiungi il prezzemolo tritato e servi subito.`,
    woerter: {
      'spaghetti': ['gli spaghetti', 'Spaghetti'],
      'peperoncino': ['il peperoncino', 'die Chilischote', 'die Chilischote'],
      'ingredienti': ["l'ingrediente", 'Zutaten'],
      'persone': ['la persona', 'Personen', 'die Person'],
      'grammi': ['il grammo', 'Gramm'],
      'spicchi': ['lo spicchio', 'Zehen (Knoblauch)', 'die Knoblauchzehe'],
      'cucchiai': ['il cucchiaio', 'Esslöffel'],
      'oliva': ["l'oliva", "Olive (olio d'oliva = Olivenöl)", 'die Olive'],
      'preparazione': ['la preparazione', 'die Zubereitung', 'die Zubereitung'],
      'porta': ['portare', 'bring! (porta a bollore = bring zum Kochen)'],
      'bollore': ['il bollore', 'das Kochen (a bollore = zum Kochen)', 'das Sieden'],
      'aggiungi': ['aggiungere', 'füge hinzu!'],
      'cuoci': ['cuocere', 'gare! koche!'],
      'frattempo': ['nel frattempo', 'in der Zwischenzeit (nel frattempo)', 'in der Zwischenzeit'],
      'taglia': ['tagliare', 'schneide!'],
      'fettine': ['la fettina', 'dünne Scheibchen', 'das Scheibchen'],
      'pezzetti': ['il pezzetto', 'kleine Stücke', 'das Stückchen'],
      'scalda': ['scaldare', 'erhitze!'],
      'rosola': ['rosolare', 'brate an!'],
      'deve': ['dovere', 'muss (non deve = darf nicht)'],
      'diventare': ['diventare', 'werden', 'werden'],
      'scuro': ['scuro', 'dunkel', 'dunkel'],
      'scola': ['scolare', 'gieß ab!'],
      'versali': ['versare', 'gieß sie! (versa + li = sie)'],
      'mescola': ['mescolare', 'rühre um!'],
      'tritato': ['tritare', 'gehackt'],
      'servi': ['servire', 'serviere!'],
    },
    fragen: [
      { frage: 'Wie lange kochen die Spaghetti?', antworten: ['Ungefähr zehn Minuten', 'Zwei Minuten', 'Zwanzig Minuten'] },
      { frage: 'Worauf muss man beim Knoblauch achten?', antworten: ['Er darf nicht dunkel werden', 'Er muss roh bleiben', 'Er muss sehr fein gehackt sein'] },
      { frage: 'Wann kommt die Petersilie dazu?', antworten: ['Ganz am Ende', 'Zusammen mit dem Knoblauch', 'Ins Nudelwasser'] },
    ],
  },

  {
    id: 'fine-settimana', titel: 'Il fine settimana scorso', art: 'Text', stufe: 'A2',
    text: `Il fine settimana scorso sono andata al mare con la mia amica Chiara. Siamo partite sabato mattina in macchina. Il viaggio è durato due ore.

Al mare abbiamo fatto una lunga passeggiata sulla spiaggia. Il sole era caldo, ma l'acqua era ancora fredda. A pranzo abbiamo mangiato pesce fresco in un piccolo ristorante. Il cameriere è stato molto gentile.

Domenica ha piovuto, così siamo tornate a casa presto. È stato un fine settimana bellissimo!`,
    woerter: {
      'fine': ['il fine settimana', 'Wochenende (fine settimana)'],
      'scorso': ['scorso', 'letzte(s); vergangene(s)', 'vergangen; letzte(r)'],
      'andata': ['andare', 'gefahren; gegangen (sono andata = ich bin gefahren)'],
      'chiara': ['Chiara', 'Chiara (Vorname)'],
      'siamo': ['essere', 'wir sind (siamo partite = wir sind abgefahren)'],
      'partite': ['partire', 'abgefahren'],
      'durato': ['durare', 'gedauert', 'dauern'],
      'fatto': ['fare', 'gemacht'],
      'lunga': ['lungo', 'lange(n)'],
      'era': ['essere', 'war'],
      'fredda': ['freddo', 'kalt'],
      'pranzo': ['il pranzo', 'Mittagessen (a pranzo = zum Mittagessen)'],
      'mangiato': ['mangiare', 'gegessen'],
      'ristorante': ['il ristorante', 'Restaurant', 'das Restaurant'],
      'stato': ['essere', 'gewesen (è stato = war)'],
      'piovuto': ['piovere', 'geregnet (ha piovuto = es hat geregnet)'],
      'tornate': ['tornare', 'zurückgekehrt'],
      'bellissimo': ['bello', 'wunderschön'],
    },
    fragen: [
      { frage: 'Mit wem war die Erzählerin am Meer?', antworten: ['Mit ihrer Freundin Chiara', 'Mit ihrer Familie', 'Allein'] },
      { frage: 'Wie war das Wasser?', antworten: ['Noch kalt', 'Schön warm', 'Schmutzig'] },
      { frage: 'Warum sind sie früh nach Hause gefahren?', antworten: ['Am Sonntag hat es geregnet', 'Chiara war krank', 'Das Auto war kaputt'] },
    ],
  },

  {
    id: 'tiramisu', titel: 'Tiramisù', art: 'Rezept', stufe: 'A2',
    text: `## Ingredienti per 6 persone
- 4 uova
- 100 grammi di zucchero
- 500 grammi di mascarpone
- 300 grammi di savoiardi
- 2 tazze di caffè freddo
- cacao amaro

## Preparazione
Separa i tuorli dagli albumi. Sbatti i tuorli con lo zucchero fino a ottenere una crema chiara. Aggiungi il mascarpone e mescola bene.

Monta gli albumi a neve e uniscili delicatamente alla crema.

Bagna velocemente i savoiardi nel caffè e mettili in una teglia. Copri con uno strato di crema. Ripeti: savoiardi, crema.

Metti il tiramisù in frigorifero per almeno quattro ore. Prima di servire, spolvera con il cacao.`,
    woerter: {
      'tiramisù': ['il tiramisù', 'Tiramisu (wörtlich: „zieh mich hoch“)'],
      'ingredienti': ["l'ingrediente", 'Zutaten'],
      'persone': ['la persona', 'Personen', 'die Person'],
      'uova': ["l'uovo", 'Eier (Mehrzahl: le uova)'],
      'grammi': ['il grammo', 'Gramm'],
      'mascarpone': ['il mascarpone', 'Mascarpone (Frischkäse)'],
      'savoiardi': ['il savoiardo', 'Löffelbiskuits', 'der Löffelbiskuit'],
      'tazze': ['la tazza', 'Tassen', 'die Tasse'],
      'cacao': ['il cacao', 'Kakao', 'der Kakao'],
      'amaro': ['amaro', 'bitter (ungesüßt)', 'bitter'],
      'preparazione': ['la preparazione', 'die Zubereitung', 'die Zubereitung'],
      'separa': ['separare', 'trenne!', 'trennen'],
      'tuorli': ['il tuorlo', 'Eigelbe', 'das Eigelb'],
      'albumi': ["l'albume", 'Eiweiße', 'das Eiweiß'],
      'sbatti': ['sbattere', 'schlage! (verquirlen)', 'schlagen; verquirlen'],
      'fino': ['fino a', 'bis (fino a)', 'bis'],
      'ottenere': ['ottenere', 'erhalten', 'erhalten'],
      'crema': ['la crema', 'Creme', 'die Creme'],
      'chiara': ['chiaro', 'hell', 'hell'],
      'aggiungi': ['aggiungere', 'füge hinzu!'],
      'mescola': ['mescolare', 'rühre um!'],
      'monta': ['montare', 'schlage! (steif schlagen)', 'steif schlagen'],
      'neve': ['la neve', 'Schnee (a neve = zu Eischnee)'],
      'uniscili': ['unire', 'heb sie unter! (unisci + li = sie)', 'vereinen; unterheben'],
      'delicatamente': ['delicatamente', 'vorsichtig', 'vorsichtig'],
      'bagna': ['bagnare', 'tränke! (nass machen)', 'tränken; nass machen'],
      'velocemente': ['velocemente', 'schnell', 'schnell'],
      'mettili': ['mettere', 'leg sie!'],
      'teglia': ['la teglia', 'die Form (zum Backen)', 'die Auflaufform'],
      'copri': ['coprire', 'bedecke!'],
      'strato': ['lo strato', 'Schicht', 'die Schicht'],
      'ripeti': ['ripetere', 'wiederhole!', 'wiederholen'],
      'metti': ['mettere', 'stell!'],
      'frigorifero': ['il frigorifero', 'Kühlschrank', 'der Kühlschrank'],
      'almeno': ['almeno', 'mindestens', 'mindestens'],
      'prima': ['prima', 'vorher (prima di = vor)'],
      'spolvera': ['spolverare', 'bestäube!', 'bestäuben'],
    },
    fragen: [
      { frage: 'Wie lange muss das Tiramisù in den Kühlschrank?', antworten: ['Mindestens vier Stunden', 'Eine halbe Stunde', 'Einen ganzen Tag'] },
      { frage: 'Womit werden die Löffelbiskuits getränkt?', antworten: ['Mit kaltem Kaffee', 'Mit Milch', 'Mit Likör'] },
      { frage: 'Was kommt ganz am Ende darauf?', antworten: ['Kakao', 'Zucker', 'Sahne'] },
    ],
  },

  {
    id: 'bologna-bici', titel: 'Bologna: più biciclette in città', art: 'Nachricht', stufe: 'A2',
    text: `Il comune di Bologna ha presentato ieri un nuovo progetto: entro il 2028 la città avrà cento chilometri di nuove piste ciclabili.

«Vogliamo meno traffico e un'aria più pulita», ha detto il sindaco.

Secondo un sondaggio, il sessanta per cento dei cittadini è favorevole. Alcuni commercianti però sono preoccupati: temono di perdere parcheggi davanti ai loro negozi.`,
    woerter: {
      'bologna': ['Bologna', 'Bologna (Stadt)'],
      'biciclette': ['la bicicletta', 'Fahrräder', 'das Fahrrad'],
      'comune': ['il comune', 'die Stadtverwaltung; die Gemeinde', 'die Gemeinde'],
      'presentato': ['presentare', 'vorgestellt', 'vorstellen'],
      'progetto': ['il progetto', 'Projekt', 'das Projekt'],
      'entro': ['entro', 'bis (spätestens)', 'bis spätestens'],
      'avrà': ['avere', 'wird haben (Zukunft)'],
      'cento': ['cento', 'hundert (per cento = Prozent)'],
      'chilometri': ['il chilometro', 'Kilometer', 'der Kilometer'],
      'nuove': ['nuovo', 'neue'],
      'piste': ['la pista', 'Wege (pista ciclabile = Radweg)', 'die Piste; die Bahn'],
      'ciclabili': ['ciclabile', 'Rad- (pista ciclabile = Radweg)', 'befahrbar mit dem Rad'],
      'vogliamo': ['volere', 'wir wollen'],
      'traffico': ['il traffico', 'Verkehr', 'der Verkehr'],
      'aria': ["l'aria", 'Luft', 'die Luft'],
      'pulita': ['pulito', 'saubere', 'sauber'],
      'detto': ['dire', 'gesagt (ha detto = hat gesagt)'],
      'sindaco': ['il sindaco', 'der Bürgermeister', 'der Bürgermeister'],
      'secondo': ['secondo', 'laut; gemäß', 'laut; gemäß (auch: zweite)'],
      'sondaggio': ['il sondaggio', 'Umfrage', 'die Umfrage'],
      'sessanta': ['sessanta', 'sechzig'],
      'cittadini': ['il cittadino', 'Bürger (Mehrzahl)'],
      'favorevole': ['favorevole', 'dafür; einverstanden', 'dafür (sein)'],
      'alcuni': ['alcuni', 'einige', 'einige'],
      'commercianti': ['il commerciante', 'Händler; Geschäftsleute', 'der Händler'],
      'preoccupati': ['preoccupato', 'besorgt', 'besorgt'],
      'temono': ['temere', 'sie fürchten', 'fürchten'],
      'parcheggi': ['il parcheggio', 'Parkplätze', 'der Parkplatz'],
      'negozi': ['il negozio', 'Geschäfte'],
    },
    fragen: [
      { frage: 'Was plant Bologna?', antworten: ['100 Kilometer neue Radwege', 'Eine neue U-Bahn', 'Mehr Parkplätze'] },
      { frage: 'Wie viele Bürger sind dafür?', antworten: ['60 Prozent', '16 Prozent', 'Alle'] },
      { frage: 'Wer macht sich Sorgen?', antworten: ['Einige Geschäftsleute', 'Die Radfahrer', 'Die Schüler'] },
    ],
  },
];
