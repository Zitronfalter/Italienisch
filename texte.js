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
  'però': ['però', 'aber; jedoch'], 'poi': ['poi', 'dann; danach'], 'qualche': ['qualche', 'einige; ein paar'],
  'anni': ["l'anno", 'Jahre'], 'ore': ["l'ora", 'Stunden; Uhr'], 'minuti': ['il minuto', 'Minuten'],
  'euro': ["l'euro", 'Euro', 'der Euro'],
};

const LESETEXTE = [
  // ---------------------------------------------------------------- A1
  {
    id: 'ciao', titel: 'Ciao!', art: 'Text', stufe: 'A1',
    text: `«Buongiorno! Io sono Marco. E tu, come ti chiami?»

«Buongiorno, Marco. Mi chiamo Giulia.»

«Piacere, Giulia! Sei italiana?»

«No, non sono italiana. Sono tedesca. E tu?»

«Io sono di Roma. Come stai?»

«Bene, grazie!»

«Giulia, il mio numero è tre, quattro, due, cinque, uno.»

«Grazie, Marco. Ciao, a presto!»`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'roma': ['Roma', 'Rom (Stadt)'],
      'ti': ['ti', 'dich; dir (come ti chiami? = wie heißt du?)'],
      'chiami': ['chiamarsi', 'du heißt (ti chiami)', 'heißen'],
      'piacere': ['piacere', 'freut mich (beim Kennenlernen)', 'gefallen; (piacere! = freut mich)'],
      'sei': ['essere', 'du bist'],
      'stai': ['stare', 'es geht dir (come stai? = wie geht es dir?)', 'sein; sich befinden; bleiben'],
      'italiana': ['italiano', 'Italienerin; italienisch', 'italienisch; Italiener'],
      'tedesca': ['tedesco', 'Deutsche; deutsch', 'deutsch; Deutscher'],
      'numero': ['il numero', 'Nummer (Telefonnummer)', 'die Nummer; die Zahl'],
      'presto': ['a presto', 'bis bald (a presto)', 'bis bald'],
    },
    fragen: [
      { frage: 'Wie heißt die Frau?', antworten: ['Giulia', 'Anna', 'Sofia'] },
      { frage: 'Woher kommt Giulia?', antworten: ['Aus Deutschland', 'Aus Italien', 'Aus Rom'] },
      { frage: 'Woher kommt Marco?', antworten: ['Aus Rom', 'Aus Berlin', 'Aus Bologna'] },
    ],
  },

  {
    id: 'al-bar', titel: 'Al bar', art: 'Text', stufe: 'A1',
    text: `Sono le otto di mattina. Marco è al bar.

«Buongiorno! Un caffè, per favore», dice Marco.

«Ecco il caffè. Vuole anche un cornetto?», chiede il barista.

«Sì, grazie. Un cornetto alla crema.»

Marco mangia il cornetto e beve il caffè al banco. Poi paga: due euro e cinquanta.

«Grazie e buona giornata!» – «Arrivederci!»`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'favore': ['per favore', 'bitte (per favore)'],
      'dice': ['dire', 'sagt'],
      'cinquanta': ['cinquanta', 'fünfzig (due euro e cinquanta = 2,50 €)'],
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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Sono le otto di mattina.': 'Es ist acht Uhr morgens.',
      'Marco è al bar.': 'Marco ist in der Bar.',
      'Poi paga: due euro e cinquanta.': 'Dann zahlt er: zwei Euro fünfzig.',
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

La mia famiglia non è grande. Mio marito si chiama Luca. Lui è cuoco e cucina molto bene. Abbiamo una figlia, Sofia. Sofia ha sei anni. Abbiamo anche un gatto, Micio.

La domenica mangiamo sempre dai nonni. La nonna fa la pasta in casa.`,
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
      'micio': ['Micio', 'Micio (Name; heißt etwa „Mieze“)'],
      'mangiamo': ['mangiare', 'wir essen'],
      'nonni': ['il nonno', 'Großeltern'],
      'scuola': ['la scuola', 'Schule', 'die Schule'],
      'domenica': ['domenica', 'Sonntag (la domenica = sonntags)'],
      'pasta': ['la pasta', 'Nudeln (la pasta in casa = selbst gemachte Nudeln)', 'die Nudeln; der Teig'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Mi chiamo Anna e abito a Bologna.': 'Ich heiße Anna und wohne in Bologna.',
      'Ho trentadue anni e lavoro in una scuola.': 'Ich bin zweiunddreißig Jahre alt und arbeite in einer Schule.',
      'La mia famiglia non è grande.': 'Meine Familie ist nicht groß.',
      'Lui è cuoco e cucina molto bene.': 'Er ist Koch und kocht sehr gut.',
      'Abbiamo una figlia, Sofia.': 'Wir haben eine Tochter, Sofia.',
      'Sofia ha sei anni.': 'Sofia ist sechs Jahre alt.',
      'Abbiamo anche un gatto, Micio.': 'Wir haben auch eine Katze, Micio.',
      'La domenica mangiamo sempre dai nonni.': 'Sonntags essen wir immer bei den Großeltern.',
      'La nonna fa la pasta in casa.': 'Die Oma macht die Nudeln selbst.',
    },
    fragen: [
      { frage: 'Wo wohnt Anna?', antworten: ['In Bologna', 'In Rom', 'In Neapel'] },
      { frage: 'Was ist Luca von Beruf?', antworten: ['Koch', 'Lehrer', 'Kellner'] },
      { frage: 'Was macht die Familie am Sonntag?', antworten: ['Sie isst bei den Großeltern', 'Sie geht ins Kino', 'Sie arbeitet'] },
    ],
  },

  {
    id: 'tempo-libero', titel: 'Il fine settimana di Luca', art: 'Text', stufe: 'A1',
    text: `È sabato. Oggi Luca non lavora. La mattina gioca con il cane al parco. Il pomeriggio Luca e Anna fanno una passeggiata. Sofia nuota.

«Ti piace il fine settimana?», chiede Anna.

«Sì, mi piace molto!», dice Luca.

La sera guardano un film e mangiano una pizza. Domani è domenica: la famiglia va dai nonni.`,
    woerter: {
      'luca': ['Luca', 'Luca (Vorname)'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'lavora': ['lavorare', 'arbeitet'],
      'gioca': ['giocare', 'spielt'],
      'con': ['con', 'mit', 'mit'],
      'parco': ['il parco', 'Park', 'der Park'],
      'fanno': ['fare', 'machen (fare una passeggiata = spazieren gehen)', 'machen; tun'],
      'nuota': ['nuotare', 'schwimmt'],
      'ti': ['ti', 'dir'],
      'piace': ['piacere', 'gefällt'],
      'chiede': ['chiedere', 'fragt'],
      'dice': ['dire', 'sagt'],
      'guardano': ['guardare', 'sehen an (guardare un film = einen Film sehen)'],
      'film': ['il film', 'Film', 'der Film'],
      'mangiano': ['mangiare', 'essen'],
      'pizza': ['la pizza', 'Pizza', 'die Pizza'],
      'nonni': ['il nonno', 'Großeltern'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Oggi Luca non lavora.': 'Heute arbeitet Luca nicht.',
      'La mattina gioca con il cane al parco.': 'Am Morgen spielt er mit dem Hund im Park.',
      'Il pomeriggio Luca e Anna fanno una passeggiata.': 'Am Nachmittag gehen Luca und Anna spazieren.',
      'La sera guardano un film e mangiano una pizza.': 'Am Abend sehen sie einen Film und essen eine Pizza.',
      'Domani è domenica: la famiglia va dai nonni.': 'Morgen ist Sonntag: Die Familie geht zu den Großeltern.',
    },
    fragen: [
      { frage: 'Was macht Luca am Samstagmorgen?', antworten: ['Er spielt mit dem Hund im Park', 'Er arbeitet', 'Er schwimmt'] },
      { frage: 'Wer schwimmt?', antworten: ['Sofia', 'Anna', 'Luca'] },
      { frage: 'Was macht die Familie am Sonntag?', antworten: ['Sie geht zu den Großeltern', 'Sie geht ins Kino', 'Sie bleibt zu Hause'] },
    ],
  },

  {
    id: 'ripasso-1', titel: 'Una domenica in famiglia', art: 'Text', stufe: 'A1',
    text: `Oggi è domenica. Sono le dieci di mattina. Sofia e suo fratello Marco sono al bar con il padre.

«Buongiorno! Un caffè, un latte e due cornetti, per favore», dice il padre.

Marco beve il latte. Sofia mangia un cornetto e beve un tè.

Il pomeriggio la famiglia va dai nonni. La nonna è in casa con il gatto. Il nonno gioca con Marco e il cane. Sofia e la madre fanno una passeggiata.

«Ti piace la domenica dai nonni?», chiede la madre. «Sì, mi piace molto!», dice Sofia.`,
    woerter: {
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'suo': ['suo', 'ihr (suo fratello = ihr Bruder)', 'sein; ihr'],
      'con': ['con', 'mit', 'mit'],
      'cornetti': ['il cornetto', 'Hörnchen (Mehrzahl)'],
      'dice': ['dire', 'sagt', 'sagen'],
      'beve': ['bere', 'trinkt'],
      'mangia': ['mangiare', 'isst'],
      'nonni': ['il nonno', 'Großeltern'],
      'gioca': ['giocare', 'spielt'],
      'fanno': ['fare', 'machen (fare una passeggiata = spazieren gehen)', 'machen; tun'],
      'ti': ['ti', 'dir'],
      'piace': ['piacere', 'gefällt'],
      'chiede': ['chiedere', 'fragt', 'fragen'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Oggi è domenica.': 'Heute ist Sonntag.',
      'Sono le dieci di mattina.': 'Es ist zehn Uhr morgens.',
      'Marco beve il latte.': 'Marco trinkt die Milch.',
      'Sofia mangia un cornetto e beve un tè.': 'Sofia isst ein Hörnchen und trinkt einen Tee.',
      'Il pomeriggio la famiglia va dai nonni.': 'Am Nachmittag geht die Familie zu den Großeltern.',
      'La nonna è in casa con il gatto.': 'Die Oma ist mit der Katze zu Hause.',
      'Il nonno gioca con Marco e il cane.': 'Der Opa spielt mit Marco und dem Hund.',
      'Sofia e la madre fanno una passeggiata.': 'Sofia und die Mutter gehen spazieren.',
    },
    fragen: [
      { frage: 'Wo sind Sofia, Marco und der Vater am Morgen?', antworten: ['In der Bar', 'Bei den Großeltern', 'Im Park'] },
      { frage: 'Was trinkt Marco?', antworten: ['Milch', 'Kaffee', 'Tee'] },
      { frage: 'Was machen Sofia und ihre Mutter am Nachmittag?', antworten: ['Sie gehen spazieren', 'Sie spielen mit dem Hund', 'Sie trinken Kaffee'] },
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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      "Aggiungi il sale, l'olio e qualche foglia di basilico.": 'Gib das Salz, das Öl und ein paar Basilikumblätter dazu.',
      "Strofina l'aglio sul pane caldo.": 'Reib den Knoblauch auf das warme Brot.',
      'Metti i pomodori sul pane e servi subito.': 'Leg die Tomaten auf das Brot und servier sofort.',
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
      'cinquanta': ['cinquanta', 'fünfzig'],
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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Paola è alla stazione di Firenze.': 'Paola ist am Bahnhof von Florenz.',
      'Vuole andare a Roma.': 'Sie will nach Rom fahren.',
      'Va alla biglietteria.': 'Sie geht zum Fahrkartenschalter.',
      'Il treno è in ritardo di dieci minuti.': 'Der Zug hat zehn Minuten Verspätung.',
    },
    fragen: [
      { frage: 'Wohin will Paola fahren?', antworten: ['Nach Rom', 'Nach Florenz', 'Nach Mailand'] },
      { frage: 'Von welchem Gleis fährt der Zug?', antworten: ['Von Gleis 6', 'Von Gleis 10', 'Von Gleis 15'] },
      { frage: 'Was passiert am Ende?', antworten: ['Der Zug hat 10 Minuten Verspätung', 'Der Zug fällt aus', 'Paola verpasst den Zug'] },
    ],
  },

  // ---------------------------------------------------------------- A2
  {
    id: 'albergo', titel: 'In albergo', art: 'Text', stufe: 'A1',
    text: `Paola arriva in albergo alle otto di sera.

«Buonasera! Vorrei una camera per due notti, per favore.»

«Sì, abbiamo una camera libera al terzo piano. Ecco la chiave.»

«Grazie. C'è un ascensore?»

«Sì, è qui a destra.»

«E dov'è il bagno?»

«Nella camera c'è il bagno con la doccia. Gli asciugamani sono sul letto.»

«Posso fare colazione domani mattina?»

«Certo, la colazione è dalle sette alle dieci.»

Paola prende la valigia e va in camera. È molto contenta.`,
    woerter: {
      'paola': ['Paola', 'Paola (Vorname)'],
      'arriva': ['arrivare', 'kommt an'],
      'notti': ['la notte', 'Nächte'],
      'libera': ['libero', 'frei'],
      'terzo': ['terzo', 'dritte(r)', 'dritte(r)'],
      'destra': ['a destra', 'rechts (a destra)', 'rechts'],
      "c'": ['ci', "da (c'è = es gibt; da ist)", 'da; dort'],
      "dov'": ['dove', "wo (dov'è = wo ist)"],
      'asciugamani': ["l'asciugamano", 'Handtücher'],
      'posso': ['potere', 'ich kann; darf ich'],
      'fare': ['fare', 'machen (fare colazione = frühstücken)', 'machen; tun'],
      'certo': ['certo', 'sicher; natürlich', 'sicher; natürlich'],
      'dalle': ['da + le', 'von (dalle sette = ab sieben Uhr)'],
      'prende': ['prendere', 'nimmt'],
      'contenta': ['contento', 'zufrieden; froh', 'zufrieden; froh'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Paola arriva in albergo alle otto di sera.': 'Paola kommt um acht Uhr abends im Hotel an.',
      'Paola prende la valigia e va in camera.': 'Paola nimmt den Koffer und geht ins Zimmer.',
      'È molto contenta.': 'Sie ist sehr zufrieden.',
    },
    fragen: [
      { frage: 'Wie viele Nächte bleibt Paola?', antworten: ['Zwei', 'Eine', 'Drei'] },
      { frage: 'Wo ist das Zimmer?', antworten: ['Im dritten Stock', 'Im Erdgeschoss', 'Im zweiten Stock'] },
      { frage: 'Wann gibt es Frühstück?', antworten: ['Von sieben bis zehn Uhr', 'Von acht bis elf Uhr', 'Nur um sieben Uhr'] },
    ],
  },

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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Giulia si sveglia alle sette.': 'Giulia wacht um sieben Uhr auf.',
      'Si alza subito, si lava e si veste.': 'Sie steht sofort auf, wäscht sich und zieht sich an.',
      "Alle otto prende l'autobus per andare in ufficio.": 'Um acht nimmt sie den Bus, um ins Büro zu fahren.',
      "Lavora fino all'una, poi pranza con una collega.": 'Sie arbeitet bis ein Uhr, dann isst sie mit einer Kollegin zu Mittag.',
      'Il pomeriggio è lungo e Giulia è stanca.': 'Der Nachmittag ist lang und Giulia ist müde.',
      'Alle sei torna a casa.': 'Um sechs kommt sie nach Hause.',
    },
    fragen: [
      { frage: 'Wie kommt Giulia zur Arbeit?', antworten: ['Mit dem Bus', 'Mit dem Auto', 'Zu Fuß'] },
      { frage: 'Mit wem isst sie zu Mittag?', antworten: ['Mit einer Kollegin', 'Mit ihrem Mann', 'Allein'] },
      { frage: 'Was macht sie am Abend?', antworten: ['Sie kocht etwas Einfaches und liest', 'Sie geht ins Restaurant', 'Sie macht Sport'] },
    ],
  },

  {
    id: 'ripasso-2', titel: 'Un fine settimana a Roma', art: 'Text', stufe: 'A1',
    text: `Sabato Paola parte per Roma. Il treno parte alle nove dal binario cinque, ma ha un ritardo di dieci minuti.

A Roma Paola va in albergo con l'autobus. La camera è piccola, ma il letto è grande e la doccia è nuova.

La sera Paola è stanca. Mangia una bruschetta: pane caldo, pomodori freschi, aglio, sale e basilico.

Domenica si sveglia presto, si lava e si veste. Dopo la colazione esce e guarda la città.`,
    woerter: {
      'paola': ['Paola', 'Paola (Vorname)'],
      'roma': ['Roma', 'Rom (Stadt)'],
      'parte': ['partire', 'fährt ab'],
      'ma': ['ma', 'aber', 'aber'],
      'piccola': ['piccolo', 'klein', 'klein'],
      'nuova': ['nuovo', 'neu', 'neu'],
      'stanca': ['stanco', 'müde'],
      'mangia': ['mangiare', 'isst'],
      'bruschetta': ['la bruschetta', 'Bruschetta (geröstetes Brot mit Tomaten)', 'die Bruschetta'],
      'pomodori': ['il pomodoro', 'Tomaten'],
      'freschi': ['fresco', 'frisch'],
      'sveglia': ['svegliarsi', 'wacht auf (si sveglia)'],
      'lava': ['lavare', 'wäscht (si lava = wäscht sich)'],
      'veste': ['vestirsi', 'zieht an (si veste = zieht sich an)', 'sich anziehen'],
      'esce': ['uscire', 'geht hinaus'],
      'guarda': ['guardare', 'sieht an'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Sabato Paola parte per Roma.': 'Am Samstag fährt Paola nach Rom.',
      "A Roma Paola va in albergo con l'autobus.": 'In Rom fährt Paola mit dem Bus ins Hotel.',
      'La sera Paola è stanca.': 'Am Abend ist Paola müde.',
      'Domenica si sveglia presto, si lava e si veste.': 'Am Sonntag wacht sie früh auf, wäscht sich und zieht sich an.',
      'Dopo la colazione esce e guarda la città.': 'Nach dem Frühstück geht sie hinaus und sieht sich die Stadt an.',
    },
    fragen: [
      { frage: 'Warum fährt der Zug später ab?', antworten: ['Er hat zehn Minuten Verspätung', 'Er fährt erst am Sonntag', 'Paola hat keine Fahrkarte'] },
      { frage: 'Wie ist das Bett im Hotel?', antworten: ['Groß', 'Klein', 'Alt'] },
      { frage: 'Was isst Paola am Abend?', antworten: ['Eine Bruschetta', 'Eine Pizza', 'Spaghetti'] },
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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Cuoci gli spaghetti per circa dieci minuti.': 'Koch die Spaghetti etwa zehn Minuten.',
      'Aggiungi il peperoncino.': 'Gib die Chilischote dazu.',
      'Scola gli spaghetti e versali nella padella.': 'Gieß die Spaghetti ab und gib sie in die Pfanne.',
      'Mescola bene, aggiungi il prezzemolo tritato e servi subito.': 'Gut umrühren, die gehackte Petersilie dazugeben und sofort servieren.',
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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Siamo partite sabato mattina in macchina.': 'Wir sind am Samstagmorgen mit dem Auto losgefahren.',
      'Il viaggio è durato due ore.': 'Die Fahrt hat zwei Stunden gedauert.',
      'Al mare abbiamo fatto una lunga passeggiata sulla spiaggia.': 'Am Meer haben wir einen langen Spaziergang am Strand gemacht.',
      "Il sole era caldo, ma l'acqua era ancora fredda.": 'Die Sonne war warm, aber das Wasser war noch kalt.',
      'Il cameriere è stato molto gentile.': 'Der Kellner war sehr freundlich.',
      'Domenica ha piovuto, così siamo tornate a casa presto.': 'Am Sonntag hat es geregnet, deshalb sind wir früh nach Hause gefahren.',
      'È stato un fine settimana bellissimo!': 'Es war ein wunderschönes Wochenende!',
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
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Separa i tuorli dagli albumi.': 'Trenn das Eigelb vom Eiweiß.',
      'Aggiungi il mascarpone e mescola bene.': 'Gib den Mascarpone dazu und rühr gut um.',
      'Copri con uno strato di crema.': 'Bedeck alles mit einer Schicht Creme.',
      'Ripeti: savoiardi, crema.': 'Wiederhole: Löffelbiskuits, Creme.',
      'Metti il tiramisù in frigorifero per almeno quattro ore.': 'Stell das Tiramisù mindestens vier Stunden in den Kühlschrank.',
      'Prima di servire, spolvera con il cacao.': 'Vor dem Servieren mit Kakao bestäuben.',
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
