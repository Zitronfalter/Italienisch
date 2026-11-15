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
  'mi': ['mi', 'mich; mir'], 'ti': ['ti', 'dich; dir'], 'si': ['si', 'sich; man'],
  'ci': ['ci', 'uns; da, dort'], "c'": ['ci', "da (c'è = es gibt; da ist)"], 'vi': ['vi', 'euch'],
  'li': ['li', 'sie (Mehrzahl, männlich)'], 'ne': ['ne', 'davon'], 'mio': ['mio', 'mein'], 'mia': ['mia', 'meine'],
  'lui': ['lui', 'er'], 'lei': ['lei', 'sie; Sie'], 'loro': ['loro', 'sie; ihr, ihre (Mehrzahl)'],
  'che': ['che', 'dass; der/die/das (welcher); was'], 'più': ['più', 'mehr'], 'meno': ['meno', 'weniger'],
  'però': ['però', 'aber; jedoch'], 'poi': ['poi', 'dann; danach'], 'qualche': ['qualche', 'einige; ein paar'],
  'anni': ["l'anno", 'Jahre'], 'ore': ["l'ora", 'Stunden; Uhr'], 'minuti': ['il minuto', 'Minuten'],
  'euro': ["l'euro", 'Euro', 'der Euro'],
  // dazu ab B1
  'dalla': ['da + la', 'von der; bei der'], 'dallo': ['da + lo', 'vom'], "dall'": ["da + l'", 'vom; von der; seit'],
  'dalle': ['da + le', 'von den; ab (Uhrzeit)'], 'dello': ['di + lo', 'des; vom'], 'degli': ['di + gli', 'der (Mehrzahl); einige'],
  'nello': ['in + lo', 'im; in dem'], "nell'": ["in + l'", 'im; in der'], 'nei': ['in + i', 'in den'], 'negli': ['in + gli', 'in den'],
  'nelle': ['in + le', 'in den'], 'sullo': ['su + lo', 'auf dem'], "sull'": ["su + l'", 'auf dem; auf der; über'],
  'sui': ['su + i', 'auf den; über die'], 'sugli': ['su + gli', 'auf den; über die'], 'sulle': ['su + le', 'auf den; über die'],
  'allo': ['a + lo', 'zum; am'], 'agli': ['a + gli', 'den; zu den'],
  'ed': ['e', 'und (vor Vokal)'], 'ad': ['a', 'in; nach; zu (vor Vokal)'], "anch'": ['anche', 'auch'],
  'questo': ['questo', 'dieser; dieses'], 'questa': ['questo', 'diese'], 'questi': ['questo', 'diese (Mehrzahl)'],
  'queste': ['questo', 'diese (Mehrzahl)'], "quest'": ['questo', 'diese(r/s) (vor Vokal)'],
  'quello': ['quello', 'jener; das (da)'], 'quella': ['quello', 'jene; die (da)'], 'quel': ['quello', 'jener; der (da)'],
  'altro': ['altro', 'andere(r); noch ein'], 'altra': ['altro', 'andere; noch eine'], 'altri': ['altro', 'andere (Mehrzahl)'],
  'altre': ['altro', 'andere (Mehrzahl)'], 'cosa': ['cosa', 'was (che cosa = was); Sache'],
  'tanto': ['tanto', 'so viel; sehr'], 'tanta': ['tanto', 'so viel; viel'], 'tanti': ['tanto', 'so viele; viele'], 'tante': ['tanto', 'so viele; viele'],
  'certo': ['certo', 'sicher; natürlich'],
  'se': ['se', 'wenn; falls; ob'], 'ah': ['ah', 'ah; ach'], 'me': ['me', 'mich; mir (betont; me lo = es mir)'],
  'te': ['te', 'dich; dir (betont; te lo = es dir)'], 'glielo': ['glielo', 'es ihm / ihr'], 'gliela': ['gliela', 'sie ihm / ihr'],
  'glieli': ['glieli', 'sie (Mehrzahl) ihm / ihr'], 'gliele': ['gliele', 'sie (Mehrzahl) ihm / ihr'], 'gliene': ['gliene', 'davon ihm / ihr'],
  'hanno': ['avere', 'sie haben'], 'era': ['essere', 'war'], 'erano': ['essere', 'waren'],
  'molti': ['molto', 'viele'], 'molte': ['molto', 'viele'], 'molta': ['molto', 'viel'],
  'piace': ['piacere', 'gefällt (mi piace = mir gefällt)'], 'piacciono': ['piacere', 'gefallen (Mehrzahl)'],
  'cui': ['cui', 'dem; der; dessen (in cui = in dem)'], 'ciò': ['ciò', 'das (ciò che = das, was)'],
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
      'cameriere': ['il cameriere', 'Kellner', 'der Kellner'],
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
    id: 'vacanza', titel: 'In vacanza in Sicilia', art: 'Text', stufe: 'A2',
    text: `Quest'estate Marta e Paolo sono andati in vacanza in Sicilia. Sono partiti da Milano in aereo. All'aeroporto di Palermo hanno preso una macchina.

Sono restati dieci giorni in un piccolo paese vicino al mare. La mattina sono andati in spiaggia, il pomeriggio hanno visto i paesi vicini.

Un giorno sono andati a Palermo. Sono entrati in una grande chiesa e in un museo. Poi hanno mangiato in una bella piazza.

Marta è anche andata in montagna con un'amica. La strada era lunga, ma il paesaggio era bellissimo.

Sono tornati a casa stanchi, ma molto contenti.`,
    woerter: {
      "quest'": ['questo', "diese(r, s) (quest'estate = diesen Sommer)", 'dieser; diese; dieses'],
      'marta': ['Marta', 'Marta (Vorname)'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'andati': ['andare', 'gefahren; gegangen (sono andati = sie sind gefahren)'],
      'sicilia': ['Sicilia', 'Sizilien'],
      'partiti': ['partire', 'abgereist; losgeflogen'],
      'milano': ['Milano', 'Mailand'],
      'palermo': ['Palermo', 'Palermo (Stadt auf Sizilien)'],
      'hanno': ['avere', 'sie haben'],
      'preso': ['prendere', 'genommen (hanno preso = sie haben genommen)'],
      'restati': ['restare', 'geblieben'],
      'giorni': ['il giorno', 'Tage'],
      'visto': ['vedere', 'gesehen; angesehen'],
      'paesi': ['il paese', 'Dörfer'],
      'vicini': ['vicino', 'in der Nähe (Mehrzahl)'],
      'entrati': ['entrare', 'hineingegangen'],
      'mangiato': ['mangiare', 'gegessen'],
      'bella': ['bello', 'schön'],
      'andata': ['andare', 'gefahren; gegangen'],
      'era': ['essere', 'war'],
      'lunga': ['lungo', 'lang'],
      'paesaggio': ['il paesaggio', 'die Landschaft', 'die Landschaft'],
      'bellissimo': ['bello', 'wunderschön'],
      'tornati': ['tornare', 'zurückgekommen'],
      'stanchi': ['stanco', 'müde (Mehrzahl)'],
      'contenti': ['contento', 'zufrieden; froh (Mehrzahl)'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      "Quest'estate Marta e Paolo sono andati in vacanza in Sicilia.": 'Diesen Sommer sind Marta und Paolo nach Sizilien in den Urlaub gefahren.',
      'Sono partiti da Milano in aereo.': 'Sie sind von Mailand aus mit dem Flugzeug geflogen.',
      "All'aeroporto di Palermo hanno preso una macchina.": 'Am Flughafen von Palermo haben sie ein Auto genommen.',
      'Sono restati dieci giorni in un piccolo paese vicino al mare.': 'Sie sind zehn Tage in einem kleinen Dorf in der Nähe des Meeres geblieben.',
      'La mattina sono andati in spiaggia, il pomeriggio hanno visto i paesi vicini.': 'Morgens sind sie an den Strand gegangen, nachmittags haben sie sich die Dörfer in der Nähe angesehen.',
      'Un giorno sono andati a Palermo.': 'Eines Tages sind sie nach Palermo gefahren.',
      'Sono entrati in una grande chiesa e in un museo.': 'Sie sind in eine große Kirche und in ein Museum gegangen.',
      'Poi hanno mangiato in una bella piazza.': 'Dann haben sie auf einem schönen Platz gegessen.',
      "Marta è anche andata in montagna con un'amica.": 'Marta ist auch mit einer Freundin in die Berge gefahren.',
      'La strada era lunga, ma il paesaggio era bellissimo.': 'Die Straße war lang, aber die Landschaft war wunderschön.',
      'Sono tornati a casa stanchi, ma molto contenti.': 'Sie sind müde, aber sehr zufrieden nach Hause gekommen.',
    },
    fragen: [
      { frage: 'Wie sind Marta und Paolo nach Sizilien gereist?', antworten: ['Mit dem Flugzeug', 'Mit dem Zug', 'Mit dem Schiff'] },
      { frage: 'Wie lange sind sie geblieben?', antworten: ['Zehn Tage', 'Eine Woche', 'Zwei Tage'] },
      { frage: 'Was haben sie in Palermo gemacht?', antworten: ['Eine Kirche und ein Museum besucht', 'Den ganzen Tag am Strand gelegen', 'Ein Auto gekauft'] },
    ],
  },

  {
    id: 'mercato', titel: 'Al mercato', art: 'Text', stufe: 'A2',
    text: `Sabato mattina Luca va al mercato con sua nonna. Il mercato è in piazza.

«Buongiorno! Quanto costano le mele?» chiede la nonna.

«Due euro al chilo. Sono molto buone!»

«Allora ne prendo un chilo. E i limoni?»

«Li vendo a tre euro al chilo.»

«Sono un po' cari. Li compro la prossima volta.»

Poi la nonna compra le patate, le cipolle e un pezzo di formaggio. Luca lo vuole mangiare subito!

A casa la nonna guarda il resto e dice: «Al mercato la frutta e la verdura sono più fresche.»`,
    woerter: {
      'luca': ['Luca', 'Luca (Vorname)'],
      'sua': ['suo', 'seine; ihre (sua nonna = seine Oma)'],
      'costano': ['costare', 'kosten'],
      'mele': ['la mela', 'Äpfel'],
      'chiede': ['chiedere', 'fragt'],
      'buone': ['buono', 'gut (Mehrzahl)'],
      'ne': ['ne', 'davon (ne prendo un chilo = ich nehme ein Kilo davon)'],
      'prendo': ['prendere', 'ich nehme'],
      'limoni': ['il limone', 'Zitronen'],
      'li': ['li', 'sie (Mehrzahl: die Zitronen)'],
      'vendo': ['vendere', 'ich verkaufe'],
      'cari': ['caro', 'teuer (Mehrzahl)', 'teuer; lieb'],
      'compro': ['comprare', 'ich kaufe'],
      'prossima': ['prossimo', 'nächste'],
      'volta': ['la volta', 'Mal (la prossima volta = nächstes Mal)', 'das Mal'],
      'compra': ['comprare', 'kauft'],
      'patate': ['la patata', 'Kartoffeln'],
      'cipolle': ['la cipolla', 'Zwiebeln'],
      'lo': ['lo', 'ihn (lo vuole mangiare = will ihn essen)'],
      'guarda': ['guardare', 'sieht an'],
      'dice': ['dire', 'sagt'],
      'fresche': ['fresco', 'frisch (Mehrzahl)'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Sabato mattina Luca va al mercato con sua nonna.': 'Am Samstagmorgen geht Luca mit seiner Oma auf den Markt.',
      'Il mercato è in piazza.': 'Der Markt ist auf dem Platz.',
      'Poi la nonna compra le patate, le cipolle e un pezzo di formaggio.': 'Dann kauft die Oma Kartoffeln, Zwiebeln und ein Stück Käse.',
      'Luca lo vuole mangiare subito!': 'Luca will ihn sofort essen!',
    },
    fragen: [
      { frage: 'Wie viel kosten die Äpfel?', antworten: ['Zwei Euro das Kilo', 'Drei Euro das Kilo', 'Einen Euro das Kilo'] },
      { frage: 'Warum kauft die Oma keine Zitronen?', antworten: ['Sie sind ihr etwas zu teuer', 'Es gibt keine', 'Sie sind nicht frisch'] },
      { frage: 'Was will Luca sofort essen?', antworten: ['Den Käse', 'Einen Apfel', 'Eine Zitrone'] },
    ],
  },

  {
    id: 'ripasso-3', titel: 'Una cena per gli amici', art: 'Text', stufe: 'A2',
    text: `Ieri Paolo ha invitato due amici a cena. La mattina è andato al mercato e ha comprato pomodori, aglio e un chilo di spaghetti. Il pane l'ha preso in panetteria.

Il pomeriggio ha cucinato. Ha tagliato l'aglio e i pomodori e li ha rosolati in padella con l'olio e il peperoncino.

Gli amici sono arrivati alle otto. Hanno portato una bottiglia di vino.

A cena hanno parlato delle vacanze. Marta è stata in Sicilia, Luca è andato in montagna.

«Gli spaghetti sono buonissimi!» dice Luca. «Ne vorrei ancora un po'.»

Alla fine Paolo è stanco, ma molto contento.`,
    woerter: {
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'invitato': ['invitare', 'eingeladen', 'einladen'],
      'amici': ["l'amico", 'Freunde'],
      'cena': ['la cena', 'Abendessen (a cena = zum Abendessen)', 'das Abendessen'],
      'andato': ['andare', 'gegangen'],
      'comprato': ['comprare', 'gekauft'],
      'pomodori': ['il pomodoro', 'Tomaten'],
      'preso': ['prendere', "genommen; geholt (l'ha preso = hat es geholt)"],
      'panetteria': ['la panetteria', 'Bäckerei (in panetteria = in der Bäckerei)', 'die Bäckerei'],
      'cucinato': ['cucinare', 'gekocht'],
      'tagliato': ['tagliare', 'geschnitten'],
      'rosolati': ['rosolare', 'angebraten'],
      'arrivati': ['arrivare', 'angekommen'],
      'hanno': ['avere', 'sie haben'],
      'portato': ['portare', 'mitgebracht'],
      'bottiglia': ['la bottiglia', 'Flasche', 'die Flasche'],
      'vino': ['il vino', 'Wein', 'der Wein'],
      'parlato': ['parlare', 'gesprochen'],
      'vacanze': ['la vacanza', 'Ferien; Urlaub'],
      'marta': ['Marta', 'Marta (Vorname)'],
      'stata': ['essere', 'gewesen (è stata = war)'],
      'sicilia': ['Sicilia', 'Sizilien'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'buonissimi': ['buono', 'sehr lecker'],
      'dice': ['dire', 'sagt'],
      'ne': ['ne', "davon (ne vorrei = ich hätte gern noch davon)"],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Ieri Paolo ha invitato due amici a cena.': 'Gestern hat Paolo zwei Freunde zum Abendessen eingeladen.',
      'La mattina è andato al mercato e ha comprato pomodori, aglio e un chilo di spaghetti.': 'Am Morgen ist er auf den Markt gegangen und hat Tomaten, Knoblauch und ein Kilo Spaghetti gekauft.',
      "Il pane l'ha preso in panetteria.": 'Das Brot hat er in der Bäckerei geholt.',
      'Il pomeriggio ha cucinato.': 'Am Nachmittag hat er gekocht.',
      "Ha tagliato l'aglio e i pomodori e li ha rosolati in padella con l'olio e il peperoncino.": 'Er hat den Knoblauch und die Tomaten geschnitten und sie mit Öl und Chili in der Pfanne angebraten.',
      'Gli amici sono arrivati alle otto.': 'Die Freunde sind um acht Uhr gekommen.',
      'Hanno portato una bottiglia di vino.': 'Sie haben eine Flasche Wein mitgebracht.',
      'A cena hanno parlato delle vacanze.': 'Beim Abendessen haben sie über die Ferien gesprochen.',
      'Marta è stata in Sicilia, Luca è andato in montagna.': 'Marta war auf Sizilien, Luca war in den Bergen.',
      'Alla fine Paolo è stanco, ma molto contento.': 'Am Ende ist Paolo müde, aber sehr zufrieden.',
    },
    fragen: [
      { frage: 'Was hat Paolo auf dem Markt gekauft?', antworten: ['Tomaten, Knoblauch und Spaghetti', 'Fisch und Wein', 'Käse und Äpfel'] },
      { frage: 'Was haben die Freunde mitgebracht?', antworten: ['Eine Flasche Wein', 'Einen Kuchen', 'Blumen'] },
      { frage: 'Wo war Marta im Urlaub?', antworten: ['Auf Sizilien', 'In den Bergen', 'In Rom'] },
    ],
  },

  {
    id: 'ristorante', titel: 'Al ristorante', art: 'Text', stufe: 'A2',
    text: `Sabato sera Anna e Marco vanno a cena in un piccolo ristorante. Hanno prenotato un tavolo per le otto.

Il cameriere gli porta il menù. «Vi consiglio il pesce, oggi è molto fresco», dice.

Anna ordina un antipasto e poi il pesce con un contorno di verdure. A Marco il pesce non piace: lui prende il pollo con l'insalata. Da bere ordinano una bottiglia di vino.

«Vi piace?» chiede il cameriere. «Sì, è tutto buonissimo!»

Alla fine Marco chiede il conto. Il coperto costa due euro a persona. Anna lascia una piccola mancia: il cameriere è stato molto gentile.`,
    woerter: {
      'anna': ['Anna', 'Anna (Vorname)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'vanno': ['andare', 'sie gehen'],
      'hanno': ['avere', 'sie haben'],
      'prenotato': ['prenotare', 'reserviert'],
      'gli': ['gli', 'ihnen (gli porta = bringt ihnen)'],
      'porta': ['portare', 'bringt'],
      'vi': ['vi', 'euch (vi consiglio = ich empfehle euch)'],
      'consiglio': ['consigliare', 'ich empfehle'],
      'dice': ['dire', 'sagt'],
      'ordina': ['ordinare', 'bestellt'],
      'verdure': ['la verdura', 'Gemüse'],
      'piace': ['piacere', 'gefällt (a Marco non piace = Marco mag nicht)'],
      'prende': ['prendere', 'nimmt'],
      'bere': ['bere', 'trinken (da bere = zum Trinken)'],
      'ordinano': ['ordinare', 'sie bestellen'],
      'chiede': ['chiedere', 'fragt; bittet um'],
      'buonissimo': ['buono', 'sehr lecker'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
      'costa': ['costare', 'kostet'],
      'lascia': ['lasciare', 'lässt da; gibt', 'lassen'],
      'piccola': ['piccolo', 'klein'],
      'stato': ['essere', 'gewesen (è stato = war)'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Sabato sera Anna e Marco vanno a cena in un piccolo ristorante.': 'Am Samstagabend gehen Anna und Marco in einem kleinen Restaurant essen.',
      'Hanno prenotato un tavolo per le otto.': 'Sie haben einen Tisch für acht Uhr reserviert.',
      'Anna ordina un antipasto e poi il pesce con un contorno di verdure.': 'Anna bestellt eine Vorspeise und dann den Fisch mit Gemüse als Beilage.',
      "A Marco il pesce non piace: lui prende il pollo con l'insalata.": 'Marco mag keinen Fisch: Er nimmt das Hähnchen mit Salat.',
      'Da bere ordinano una bottiglia di vino.': 'Zum Trinken bestellen sie eine Flasche Wein.',
      'Alla fine Marco chiede il conto.': 'Am Ende bittet Marco um die Rechnung.',
      'Il coperto costa due euro a persona.': 'Das Gedeck kostet zwei Euro pro Person.',
      'Anna lascia una piccola mancia: il cameriere è stato molto gentile.': 'Anna gibt ein kleines Trinkgeld: Der Kellner war sehr freundlich.',
    },
    fragen: [
      { frage: 'Was empfiehlt der Kellner?', antworten: ['Den Fisch', 'Das Hähnchen', 'Den Wein'] },
      { frage: 'Was isst Marco?', antworten: ['Hähnchen mit Salat', 'Fisch mit Gemüse', 'Nur eine Vorspeise'] },
      { frage: 'Wie viel kostet das Gedeck?', antworten: ['Zwei Euro pro Person', 'Zehn Euro', 'Nichts'] },
    ],
  },

  {
    id: 'da-piccola', titel: 'Quando ero piccola', art: 'Text', stufe: 'A2',
    text: `Quando ero piccola abitavo con la mia famiglia in un paese vicino a Siena. La nostra casa era vecchia, ma aveva un grande giardino con molti alberi e fiori.

Mio padre lavorava in città e tornava sempre tardi. Mia madre era maestra nella scuola del paese.

Il pomeriggio giocavo in giardino con mio fratello e con il nostro cane. D'estate andavamo spesso al lago. Non avevamo la televisione, ma eravamo felici.

Ogni anno per il mio compleanno la nonna faceva una torta al cioccolato. Ricordo ancora il suo profumo!`,
    woerter: {
      'ero': ['essere', 'ich war'],
      'piccola': ['piccolo', 'klein'],
      'abitavo': ['abitare', 'ich wohnte'],
      'siena': ['Siena', 'Siena (Stadt in der Toskana)'],
      'nostra': ['nostro', 'unsere'],
      'era': ['essere', 'war'],
      'vecchia': ['vecchio', 'alt'],
      'aveva': ['avere', 'hatte'],
      'molti': ['molto', 'viele'],
      'alberi': ["l'albero", 'Bäume'],
      'fiori': ['il fiore', 'Blumen'],
      'lavorava': ['lavorare', 'arbeitete'],
      'tornava': ['tornare', 'kam zurück'],
      'maestra': ['la maestra', 'Lehrerin (in der Grundschule)', 'die Lehrerin'],
      'giocavo': ['giocare', 'ich spielte'],
      "d'": ['di', "von; aus (d'estate = im Sommer)"],
      'andavamo': ['andare', 'wir fuhren; wir gingen'],
      'avevamo': ['avere', 'wir hatten'],
      'televisione': ['la televisione', 'Fernseher; Fernsehen', 'der Fernseher'],
      'eravamo': ['essere', 'wir waren'],
      'felici': ['felice', 'glücklich (Mehrzahl)'],
      'faceva': ['fare', 'machte; backte'],
      'cioccolato': ['il cioccolato', 'Schokolade (al cioccolato = mit Schokolade)', 'die Schokolade'],
      'ricordo': ['ricordare', 'ich erinnere mich an'],
      'profumo': ['il profumo', 'Duft', 'der Duft'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Quando ero piccola abitavo con la mia famiglia in un paese vicino a Siena.': 'Als ich klein war, wohnte ich mit meiner Familie in einem Dorf in der Nähe von Siena.',
      'La nostra casa era vecchia, ma aveva un grande giardino con molti alberi e fiori.': 'Unser Haus war alt, aber es hatte einen großen Garten mit vielen Bäumen und Blumen.',
      'Mio padre lavorava in città e tornava sempre tardi.': 'Mein Vater arbeitete in der Stadt und kam immer spät nach Hause.',
      'Mia madre era maestra nella scuola del paese.': 'Meine Mutter war Lehrerin in der Schule im Dorf.',
      'Il pomeriggio giocavo in giardino con mio fratello e con il nostro cane.': 'Nachmittags spielte ich mit meinem Bruder und unserem Hund im Garten.',
      "D'estate andavamo spesso al lago.": 'Im Sommer fuhren wir oft an den See.',
      'Non avevamo la televisione, ma eravamo felici.': 'Wir hatten keinen Fernseher, aber wir waren glücklich.',
      'Ogni anno per il mio compleanno la nonna faceva una torta al cioccolato.': 'Jedes Jahr backte die Oma zu meinem Geburtstag einen Schokoladenkuchen.',
      'Ricordo ancora il suo profumo!': 'Ich erinnere mich noch an seinen Duft!',
    },
    fragen: [
      { frage: 'Wo wohnte die Erzählerin als Kind?', antworten: ['In einem Dorf bei Siena', 'In Rom', 'Am Meer'] },
      { frage: 'Was war ihre Mutter von Beruf?', antworten: ['Lehrerin', 'Ärztin', 'Köchin'] },
      { frage: 'Was machte die Oma zum Geburtstag?', antworten: ['Einen Schokoladenkuchen', 'Ein Tiramisù', 'Eine Pizza'] },
    ],
  },

  {
    id: 'tempo', titel: 'Che tempo fa in Italia?', art: 'Text', stufe: 'A2',
    text: `In Italia il tempo è molto diverso da nord a sud.

A Milano l'inverno è freddo e spesso c'è la nebbia. A volte c'è anche la neve. In Sicilia l'inverno è meno freddo: anche a gennaio ci sono giorni di sole.

L'estate è calda in tutta Italia, ma il sud è più caldo del nord. In agosto a Palermo ci sono anche quaranta gradi!

La primavera e l'autunno sono le stagioni più belle: non fa troppo caldo e non fa troppo freddo. In autunno però piove spesso e c'è vento.

E oggi? Che tempo fa?`,
    woerter: {
      'italia': ['Italia', 'Italien'],
      'nord': ['il nord', 'Norden', 'der Norden'],
      'sud': ['il sud', 'Süden', 'der Süden'],
      'milano': ['Milano', 'Mailand'],
      'nebbia': ['la nebbia', 'Nebel', 'der Nebel'],
      'volte': ['la volta', 'Mal (a volte = manchmal)', 'das Mal'],
      'sicilia': ['Sicilia', 'Sizilien'],
      'giorni': ['il giorno', 'Tage'],
      'calda': ['caldo', 'warm; heiß'],
      'tutta': ['tutto', 'ganz (in tutta Italia = in ganz Italien)'],
      'palermo': ['Palermo', 'Palermo (Stadt auf Sizilien)'],
      'quaranta': ['quaranta', 'vierzig', 'vierzig'],
      'gradi': ['il grado', 'Grad', 'der Grad'],
      'stagioni': ['la stagione', 'Jahreszeiten'],
      'belle': ['bello', 'schön (Mehrzahl)'],
      'piove': ['piovere', 'es regnet'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'In Italia il tempo è molto diverso da nord a sud.': 'In Italien ist das Wetter von Norden bis Süden sehr verschieden.',
      "A Milano l'inverno è freddo e spesso c'è la nebbia.": 'In Mailand ist der Winter kalt und oft gibt es Nebel.',
      "A volte c'è anche la neve.": 'Manchmal gibt es auch Schnee.',
      "In Sicilia l'inverno è meno freddo: anche a gennaio ci sono giorni di sole.": 'Auf Sizilien ist der Winter weniger kalt: Auch im Januar gibt es sonnige Tage.',
      "L'estate è calda in tutta Italia, ma il sud è più caldo del nord.": 'Der Sommer ist in ganz Italien heiß, aber der Süden ist heißer als der Norden.',
      'In agosto a Palermo ci sono anche quaranta gradi!': 'Im August hat es in Palermo sogar vierzig Grad!',
      "La primavera e l'autunno sono le stagioni più belle: non fa troppo caldo e non fa troppo freddo.": 'Frühling und Herbst sind die schönsten Jahreszeiten: Es ist nicht zu heiß und nicht zu kalt.',
      "In autunno però piove spesso e c'è vento.": 'Im Herbst regnet es aber oft und es ist windig.',
      'Che tempo fa?': 'Wie ist das Wetter?',
    },
    fragen: [
      { frage: 'Wie ist der Winter in Mailand?', antworten: ['Kalt, oft mit Nebel', 'Warm und sonnig', 'Immer mit Schnee'] },
      { frage: 'Wie heiß kann es im August in Palermo werden?', antworten: ['Vierzig Grad', 'Zwanzig Grad', 'Dreißig Grad'] },
      { frage: 'Welche Jahreszeiten sind am schönsten?', antworten: ['Frühling und Herbst', 'Sommer und Winter', 'Nur der Sommer'] },
    ],
  },

  {
    id: 'medico', titel: 'Dal medico', art: 'Text', stufe: 'A2',
    text: `Ieri mattina Sara si è svegliata con un forte mal di testa. Aveva anche mal di pancia e si sentiva molto stanca.

È andata subito dal medico. Mentre aspettava, leggeva un libro.

«Buongiorno, signora. Come sta?» ha chiesto il medico.

«Male. Ho mal di testa e non ho fame.»

Il medico le ha guardato la bocca e gli occhi. «Non è niente di grave, è solo un'influenza. Deve restare a casa tre giorni e bere molta acqua.»

Sara è andata in farmacia e ha comprato una medicina. Poi è tornata a casa e ha dormito tutto il pomeriggio.`,
    woerter: {
      'sara': ['Sara', 'Sara (Vorname)'],
      'svegliata': ['svegliarsi', 'aufgewacht (si è svegliata = ist aufgewacht)'],
      'forte': ['forte', 'stark', 'stark'],
      'mal': ['male', 'Schmerz (mal di testa = Kopfschmerzen)'],
      'aveva': ['avere', 'hatte'],
      'sentiva': ['sentire', 'fühlte (si sentiva = fühlte sich)'],
      'stanca': ['stanco', 'müde'],
      'andata': ['andare', 'gegangen'],
      'aspettava': ['aspettare', 'wartete', 'warten'],
      'leggeva': ['leggere', 'las'],
      'signora': ['la signora', 'Frau (Anrede)', 'die Dame; Frau (Anrede)'],
      'chiesto': ['chiedere', 'gefragt'],
      'fame': ['avere fame', 'Hunger (non ho fame = ich habe keinen Hunger)'],
      'le': ['le', 'ihr (le ha guardato = hat ihr … angesehen)'],
      'guardato': ['guardare', 'angesehen'],
      'occhi': ["l'occhio", 'Augen'],
      'niente': ['niente', 'nichts', 'nichts'],
      'grave': ['grave', 'schlimm; schwer', 'schlimm; schwer'],
      'influenza': ["l'influenza", 'Grippe', 'die Grippe'],
      'deve': ['dovere', 'muss'],
      'giorni': ['il giorno', 'Tage'],
      'molta': ['molto', 'viel'],
      'comprato': ['comprare', 'gekauft'],
      'tornata': ['tornare', 'zurückgekommen'],
      'dormito': ['dormire', 'geschlafen'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Ieri mattina Sara si è svegliata con un forte mal di testa.': 'Gestern Morgen ist Sara mit starken Kopfschmerzen aufgewacht.',
      'Aveva anche mal di pancia e si sentiva molto stanca.': 'Sie hatte auch Bauchschmerzen und fühlte sich sehr müde.',
      'È andata subito dal medico.': 'Sie ist sofort zum Arzt gegangen.',
      'Mentre aspettava, leggeva un libro.': 'Während sie wartete, las sie ein Buch.',
      'Sara è andata in farmacia e ha comprato una medicina.': 'Sara ist in die Apotheke gegangen und hat ein Medikament gekauft.',
      'Poi è tornata a casa e ha dormito tutto il pomeriggio.': 'Dann ist sie nach Hause gegangen und hat den ganzen Nachmittag geschlafen.',
    },
    fragen: [
      { frage: 'Was tat Sara weh?', antworten: ['Kopf und Bauch', 'Arm und Bein', 'Die Zähne'] },
      { frage: 'Was hat Sara, sagt der Arzt?', antworten: ['Eine Grippe, nichts Schlimmes', 'Etwas Schlimmes', 'Zahnschmerzen'] },
      { frage: 'Was soll sie tun?', antworten: ['Drei Tage zu Hause bleiben und viel trinken', 'Ins Krankenhaus gehen', 'Gleich wieder arbeiten'] },
    ],
  },

  {
    id: 'ripasso-4', titel: 'Una vecchia amica', art: 'Text', stufe: 'A2',
    text: `Ieri Marta ha incontrato una vecchia amica, Giulia. Non la vedeva da dieci anni!

Sono andate a pranzo in un ristorante vicino al lago. Faceva caldo e c'era il sole, così hanno preso un tavolo fuori.

Mentre mangiavano, hanno parlato di quando erano bambine. «Ti ricordi la nostra scuola?» ha chiesto Giulia. «Certo! La maestra era molto severa, ma noi eravamo felici.»

Giulia ha ordinato il pesce, Marta un piatto di spaghetti. «Qui il pesce è buonissimo!» ha detto Giulia.

Alla fine il cameriere ha portato il conto. Marta l'ha pagato: «Oggi ti offro io il pranzo!»`,
    woerter: {
      'marta': ['Marta', 'Marta (Vorname)'],
      'incontrato': ['incontrare', 'getroffen', 'treffen'],
      'vecchia': ['vecchio', 'alt'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'la': ['la', 'sie (non la vedeva = sie hatte sie nicht gesehen)'],
      'vedeva': ['vedere', 'sah (non la vedeva da = hatte sie seit … nicht gesehen)'],
      'andate': ['andare', 'gegangen'],
      'faceva': ['fare', "machte (faceva caldo = es war warm)"],
      'era': ['essere', 'war'],
      'hanno': ['avere', 'sie haben'],
      'preso': ['prendere', 'genommen'],
      'fuori': ['fuori', 'draußen', 'draußen'],
      'mangiavano': ['mangiare', 'sie aßen'],
      'parlato': ['parlare', 'gesprochen'],
      'erano': ['essere', 'sie waren'],
      'bambine': ['il bambino', 'kleine Mädchen; Kinder'],
      'ricordi': ['ricordare', 'erinnerst dich (ti ricordi = erinnerst du dich)'],
      'nostra': ['nostro', 'unsere'],
      'chiesto': ['chiedere', 'gefragt'],
      'certo': ['certo', 'sicher; natürlich', 'sicher; natürlich'],
      'maestra': ['la maestra', 'Lehrerin (in der Grundschule)', 'die Lehrerin'],
      'severa': ['severo', 'streng', 'streng'],
      'eravamo': ['essere', 'wir waren'],
      'felici': ['felice', 'glücklich (Mehrzahl)'],
      'ordinato': ['ordinare', 'bestellt'],
      'buonissimo': ['buono', 'sehr lecker'],
      'detto': ['dire', 'gesagt'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
      'portato': ['portare', 'gebracht'],
      'pagato': ['pagare', 'bezahlt'],
      'offro': ['offrire', 'ich lade ein (ti offro = ich lade dich ein)', 'anbieten; einladen'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Ieri Marta ha incontrato una vecchia amica, Giulia.': 'Gestern hat Marta eine alte Freundin getroffen, Giulia.',
      'Non la vedeva da dieci anni!': 'Sie hatte sie seit zehn Jahren nicht gesehen!',
      'Sono andate a pranzo in un ristorante vicino al lago.': 'Sie sind in einem Restaurant am See zu Mittag essen gegangen.',
      "Faceva caldo e c'era il sole, così hanno preso un tavolo fuori.": 'Es war warm und die Sonne schien, deshalb haben sie einen Tisch draußen genommen.',
    },
    fragen: [
      { frage: 'Wie lange hatten sich Marta und Giulia nicht gesehen?', antworten: ['Zehn Jahre', 'Ein Jahr', 'Zwei Wochen'] },
      { frage: 'Warum sitzen sie draußen?', antworten: ['Es ist warm und sonnig', 'Drinnen ist kein Platz', 'Am See ist es ruhig'] },
      { frage: 'Wer bezahlt?', antworten: ['Marta', 'Giulia', 'Jede für sich'] },
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
Prima si separano i tuorli dagli albumi. Si mescolano i tuorli con lo zucchero. Poi si aggiunge il mascarpone e si mescola bene: così si ottiene una crema.

Si montano gli albumi a neve e si aggiungono piano alla crema.

Si bagnano i savoiardi nel caffè e si mettono in una teglia. Si copre con uno strato di crema. Poi si fa un altro strato di savoiardi e di crema.

Il tiramisù si mette in frigorifero per almeno quattro ore. Prima di servire, si copre con il cacao.`,
    woerter: {
      'tiramisù': ['il tiramisù', 'Tiramisu (wörtlich: „zieh mich hoch“)'],
      'ingredienti': ["l'ingrediente", 'Zutaten'],
      'persone': ['la persona', 'Personen', 'die Person'],
      'uova': ["l'uovo", 'Eier (Mehrzahl: le uova)'],
      'grammi': ['il grammo', 'Gramm'],
      'mascarpone': ['il mascarpone', 'Mascarpone (Frischkäse)'],
      'savoiardi': ['il savoiardo', 'Löffelbiskuits', 'der Löffelbiskuit'],
      'tazze': ['la tazza', 'Tassen'],
      'preparazione': ['la preparazione', 'die Zubereitung'],
      'prima': ['prima', 'zuerst (prima di = vor)'],
      'separano': ['separare', 'man trennt (si separano)'],
      'tuorli': ['il tuorlo', 'Eigelbe'],
      'albumi': ["l'albume", 'Eiweiße'],
      'mescolano': ['mescolare', 'man verrührt (si mescolano)'],
      'aggiunge': ['aggiungere', 'man gibt dazu (si aggiunge)'],
      'mescola': ['mescolare', 'man rührt um (si mescola)'],
      'ottiene': ['ottenere', 'man erhält (si ottiene)', 'erhalten'],
      'montano': ['montare', 'man schlägt steif (si montano)', 'steif schlagen'],
      'neve': ['la neve', 'Schnee (a neve = zu Eischnee)'],
      'aggiungono': ['aggiungere', 'man gibt dazu (Mehrzahl)'],
      'piano': ['piano', 'langsam; vorsichtig', 'langsam; leise'],
      'bagnano': ['bagnare', 'man tränkt (si bagnano)', 'tränken; nass machen'],
      'mettono': ['mettere', 'man legt (si mettono)'],
      'teglia': ['la teglia', 'die Form (zum Backen)', 'die Auflaufform'],
      'copre': ['coprire', 'man bedeckt (si copre)'],
      'strato': ['lo strato', 'Schicht', 'die Schicht'],
      'altro': ['altro', 'noch ein; andere(r)', 'andere(r)'],
      'mette': ['mettere', 'man stellt (si mette)'],
      'servire': ['servire', 'servieren'],
    },
    // Übersetzung der Sätze (für Hören & Üben)
    uebersetzung: {
      'Prima si separano i tuorli dagli albumi.': 'Zuerst trennt man das Eigelb vom Eiweiß.',
      'Si mescolano i tuorli con lo zucchero.': 'Man verrührt das Eigelb mit dem Zucker.',
      'Poi si aggiunge il mascarpone e si mescola bene: così si ottiene una crema.': 'Dann gibt man den Mascarpone dazu und rührt gut um: So entsteht eine Creme.',
      'Si montano gli albumi a neve e si aggiungono piano alla crema.': 'Man schlägt das Eiweiß steif und hebt es vorsichtig unter die Creme.',
      'Si bagnano i savoiardi nel caffè e si mettono in una teglia.': 'Man tränkt die Löffelbiskuits im Kaffee und legt sie in eine Form.',
      'Si copre con uno strato di crema.': 'Man bedeckt sie mit einer Schicht Creme.',
      'Poi si fa un altro strato di savoiardi e di crema.': 'Dann macht man noch eine Schicht Löffelbiskuits und Creme.',
      'Il tiramisù si mette in frigorifero per almeno quattro ore.': 'Man stellt das Tiramisù mindestens vier Stunden in den Kühlschrank.',
      'Prima di servire, si copre con il cacao.': 'Vor dem Servieren bestäubt man es mit Kakao.',
    },
    fragen: [
      { frage: 'Wie lange muss das Tiramisù in den Kühlschrank?', antworten: ['Mindestens vier Stunden', 'Eine halbe Stunde', 'Einen ganzen Tag'] },
      { frage: 'Womit werden die Löffelbiskuits getränkt?', antworten: ['Mit kaltem Kaffee', 'Mit Milch', 'Mit Likör'] },
      { frage: 'Was kommt ganz am Ende darauf?', antworten: ['Kakao', 'Zucker', 'Sahne'] },
    ],
  },

  {
    id: 'bologna-bici', titel: 'Bologna: più biciclette in città', art: 'Nachricht', stufe: 'A2',
    text: `Il comune di Bologna ha un nuovo progetto: entro il 2028 la città avrà cento chilometri di nuove strade per le biciclette.

«Vogliamo una città che ha meno traffico e un'aria più pulita», ha detto il sindaco.

Secondo un sondaggio, il sessanta per cento dei cittadini è d'accordo. Ma ci sono anche persone che non sono contente: alcuni negozi temono di perdere i parcheggi che sono davanti alla porta.`,
    woerter: {
      'bologna': ['Bologna', 'Bologna (Stadt)'],
      'biciclette': ['la bicicletta', 'Fahrräder'],
      'entro': ['entro', 'bis (spätestens)', 'bis spätestens'],
      'avrà': ['avere', 'wird haben (Zukunft)'],
      'chilometri': ['il chilometro', 'Kilometer', 'der Kilometer'],
      'nuove': ['nuovo', 'neue'],
      'strade': ['la strada', 'Straßen; Wege'],
      'vogliamo': ['volere', 'wir wollen'],
      'pulita': ['pulito', 'saubere', 'sauber'],
      'detto': ['dire', 'gesagt (ha detto = hat gesagt)'],
      'secondo': ['secondo', 'laut; gemäß', 'laut; gemäß (auch: zweite)'],
      'sondaggio': ['il sondaggio', 'Umfrage', 'die Umfrage'],
      'sessanta': ['sessanta', 'sechzig', 'sechzig'],
      'cento': ['cento', 'hundert (per cento = Prozent)'],
      'cittadini': ['il cittadino', 'Bürger (Mehrzahl)'],
      'persone': ['la persona', 'Personen'],
      'contente': ['contento', 'zufrieden (Mehrzahl)'],
      'alcuni': ['alcuni', 'einige', 'einige'],
      'negozi': ['il negozio', 'Geschäfte'],
      'temono': ['temere', 'sie fürchten', 'fürchten'],
      'parcheggi': ['il parcheggio', 'Parkplätze'],
    },
    fragen: [
      { frage: 'Was plant Bologna?', antworten: ['100 Kilometer neue Radwege', 'Eine neue U-Bahn', 'Mehr Parkplätze'] },
      { frage: 'Wie viele Bürger sind dafür?', antworten: ['60 Prozent', '16 Prozent', 'Alle'] },
      { frage: 'Wer macht sich Sorgen?', antworten: ['Einige Geschäfte', 'Die Radfahrer', 'Die Schüler'] },
    ],
  },
];
