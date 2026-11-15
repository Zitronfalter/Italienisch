// Kurze Texte für die Wort-Lektionen A1 (nach Lektion 1–8).
// Aufbau wie in texte.js. Jeder Text benutzt die Wörter seiner Lektion und der Lektionen davor
// (Prüfen: node werkzeuge/lektionen-pruefen.js).

LESETEXTE.push(
  {
    id: 'a1-numeri', titel: 'I numeri del nonno', art: 'Text', stufe: 'A1',
    text: `Io sono Giulia. Ho venti anni.

Marco ha trenta anni. Anna ha diciotto anni.

Il nonno ha novanta anni! È l'età più bella, dice il nonno.

Il nonno conta: venti, trenta, quaranta, cinquanta.

Sessanta, settanta, ottanta, novanta. Bene!`,
    woerter: {
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'nonno': ['il nonno', 'Großvater; Opa', 'der Großvater'],
      'bella': ['bello', 'schön', 'schön'],
      'dice': ['dire', 'sagt', 'sagen'],
      'conta': ['contare', 'zählt'],
    },
    uebersetzung: {
      'Io sono Giulia.': 'Ich bin Giulia.',
      'Ho venti anni.': 'Ich bin zwanzig Jahre alt.',
      'Marco ha trenta anni.': 'Marco ist dreißig Jahre alt.',
      'Anna ha diciotto anni.': 'Anna ist achtzehn Jahre alt.',
      'Il nonno ha novanta anni!': 'Der Opa ist neunzig Jahre alt!',
      "È l'età più bella, dice il nonno.": 'Es ist das schönste Alter, sagt der Opa.',
      'Il nonno conta: venti, trenta, quaranta, cinquanta.': 'Der Opa zählt: zwanzig, dreißig, vierzig, fünfzig.',
      'Sessanta, settanta, ottanta, novanta.': 'Sechzig, siebzig, achtzig, neunzig.',
    },
    fragen: [
      { frage: 'Wie alt ist Giulia?', antworten: ['20', '30', '18'] },
      { frage: 'Wie alt ist der Opa?', antworten: ['90', '80', '60'] },
      { frage: 'Was sagt der Opa über sein Alter?', antworten: ['Es ist das schönste Alter', 'Es ist schwer', 'Er ist müde'] },
    ],
  },

  {
    id: 'a1-paesi', titel: 'Di dove sei?', art: 'Text', stufe: 'A1',
    text: `Marco è italiano. È di Roma, in Italia.

Giulia è di Berlino, in Germania. Lei è tedesca.

Marco parla italiano e inglese. Giulia parla tedesco, inglese e un po' di italiano.

Anna è di Vienna, in Austria. E Luca? Luca è di Zurigo, in Svizzera.

Di dove sei tu?`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'roma': ['Roma', 'Rom (Stadt)'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'berlino': ['Berlino', 'Berlin'],
      'tedesca': ['tedesco', 'Deutsche; deutsch'],
      'parla': ['parlare', 'spricht', 'sprechen'],
      "po'": ["un po'", 'ein bisschen (un po’ di = ein bisschen)', 'ein bisschen'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'vienna': ['Vienna', 'Wien'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'zurigo': ['Zurigo', 'Zürich'],
    },
    uebersetzung: {
      'Marco è italiano.': 'Marco ist Italiener.',
      'È di Roma, in Italia.': 'Er ist aus Rom, in Italien.',
      'Giulia è di Berlino, in Germania.': 'Giulia ist aus Berlin, in Deutschland.',
      'Lei è tedesca.': 'Sie ist Deutsche.',
      'Marco parla italiano e inglese.': 'Marco spricht Italienisch und Englisch.',
      "Giulia parla tedesco, inglese e un po' di italiano.": 'Giulia spricht Deutsch, Englisch und ein bisschen Italienisch.',
      'Anna è di Vienna, in Austria.': 'Anna ist aus Wien, in Österreich.',
      'Luca è di Zurigo, in Svizzera.': 'Luca ist aus Zürich, in der Schweiz.',
      'Di dove sei tu?': 'Woher kommst du?',
    },
    fragen: [
      { frage: 'Woher ist Giulia?', antworten: ['Aus Berlin', 'Aus Rom', 'Aus Wien'] },
      { frage: 'Welche Sprachen spricht Marco?', antworten: ['Italienisch und Englisch', 'Deutsch und Englisch', 'Nur Italienisch'] },
      { frage: 'Woher ist Luca?', antworten: ['Aus Zürich', 'Aus Wien', 'Aus Rom'] },
    ],
  },

  {
    id: 'a1-saluti', titel: 'Buona giornata!', art: 'Text', stufe: 'A1',
    text: `Il signor Rossi è in via Garibaldi. Sono le otto di mattina.

«Buongiorno, signora Bianchi! Come va?»

«Salve, signor Rossi! Bene, grazie. E lei?»

«Bene, grazie mille. Buona giornata!»

«Grazie, a dopo!»

La sera Anna dice: «Buona serata e buonanotte!» Marco dice: «A domani!»`,
    woerter: {
      'giornata': ['buona giornata', 'Tag (buona giornata = schönen Tag)', 'der Tag'],
      'serata': ['buona serata', 'Abend (buona serata = schönen Abend)', 'der Abend'],
      'signor': ['il signore', 'Herr (vor dem Namen: signor Rossi)', 'der Herr'],
      'signora': ['la signora', 'Frau (vor dem Namen)', 'die Frau; die Dame'],
      'rossi': ['Rossi', 'Rossi (Nachname)'],
      'garibaldi': ['Garibaldi', 'Garibaldi (Straßenname)'],
      'bianchi': ['Bianchi', 'Bianchi (Nachname)'],
      'otto': ['otto', 'acht (sono le otto = es ist acht Uhr)', 'acht'],
      'mattina': ['la mattina', 'Morgen (di mattina = morgens)', 'der Morgen'],
      'sera': ['la sera', 'Abend (la sera = abends)', 'der Abend'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'dice': ['dire', 'sagt', 'sagen'],
    },
    uebersetzung: {
      'Il signor Rossi è in via Garibaldi.': 'Herr Rossi ist in der Via Garibaldi.',
      'Sono le otto di mattina.': 'Es ist acht Uhr morgens.',
    },
    fragen: [
      { frage: 'Wie spät ist es?', antworten: ['Acht Uhr morgens', 'Acht Uhr abends', 'Zehn Uhr'] },
      { frage: 'Wen trifft Herr Rossi?', antworten: ['Frau Bianchi', 'Anna', 'Marco'] },
      { frage: 'Was sagt Marco am Abend?', antworten: ['Bis morgen!', 'Guten Morgen!', 'Vielen Dank!'] },
    ],
  },

  {
    id: 'a1-bibite', titel: "L'ora dell'aperitivo", art: 'Text', stufe: 'A1',
    text: `Oggi fa caldo. Giulia e Marco sono al bar.

Giulia ha sete. Prende una spremuta d'arancia con ghiaccio.

Marco prende un'acqua frizzante e un caffè macchiato.

Al bancone c'è anche Luca. Lui beve uno spritz: è l'ora dell'aperitivo!

Anna non beve alcol. Prende un'aranciata in lattina, con la cannuccia.`,
    woerter: {
      'sete': ['avere sete', 'Durst (ha sete = hat Durst)', 'Durst haben'],
      'frizzante': ["l'acqua frizzante", 'mit Kohlensäure (acqua frizzante = Sprudelwasser)', 'das Sprudelwasser'],
      'oggi': ['oggi', 'heute', 'heute'],
      'caldo': ['caldo', 'warm; heiß (fa caldo = es ist heiß)', 'warm; heiß'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'arancia': ["l'arancia", "Orange (spremuta d'arancia = frisch gepresster O-Saft)", 'die Orange'],
      'con': ['con', 'mit', 'mit'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'beve': ['bere', 'trinkt'],
      'ora': ["l'ora", 'Zeit; Stunde (è l’ora di … = es ist Zeit für …)', 'die Stunde'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'alcol': ["l'alcol", 'Alkohol', 'der Alkohol'],
    },
    uebersetzung: {
      'Oggi fa caldo.': 'Heute ist es heiß.',
      'Giulia e Marco sono al bar.': 'Giulia und Marco sind in der Bar.',
      'Giulia ha sete.': 'Giulia hat Durst.',
      "Prende una spremuta d'arancia con ghiaccio.": 'Sie nimmt einen frisch gepressten Orangensaft mit Eis.',
      "Marco prende un'acqua frizzante e un caffè macchiato.": 'Marco nimmt ein Sprudelwasser und einen Espresso mit Milchschaum.',
      "Al bancone c'è anche Luca.": 'An der Theke ist auch Luca.',
      "Lui beve uno spritz: è l'ora dell'aperitivo!": 'Er trinkt einen Spritz: Es ist Zeit für den Aperitif!',
      'Anna non beve alcol.': 'Anna trinkt keinen Alkohol.',
      "Prende un'aranciata in lattina, con la cannuccia.": 'Sie nimmt eine Orangenlimonade aus der Dose, mit Strohhalm.',
    },
    fragen: [
      { frage: 'Was trinkt Giulia?', antworten: ['Frisch gepressten Orangensaft', 'Einen Spritz', 'Wasser'] },
      { frage: 'Wer trinkt einen Spritz?', antworten: ['Luca', 'Marco', 'Anna'] },
      { frage: 'Warum nimmt Anna eine Limonade?', antworten: ['Sie trinkt keinen Alkohol', 'Sie hat Hunger', 'Es ist kalt'] },
    ],
  },

  {
    id: 'a1-merenda', titel: 'La merenda', art: 'Text', stufe: 'A1',
    text: `Alle quattro Sofia ha fame. È l'ora della merenda!

Sofia mangia un panino al prosciutto. Luca mangia un toast.

Anna prende uno yogurt al miele e un biscotto. Marco mangia la pizza.

E il gelato? Il gelato è per dopo, alle cinque. Buonissimo!`,
    woerter: {
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'fame': ['avere fame', 'Hunger (ha fame = hat Hunger)', 'Hunger haben'],
      'ora': ["l'ora", 'Zeit; Stunde (è l’ora di … = es ist Zeit für …)', 'die Stunde'],
      'mangia': ['mangiare', 'isst'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'per': ['per', 'für', 'für'],
      'dopo': ['dopo', 'später; nachher', 'nach; danach'],
    },
    uebersetzung: {
      'Alle quattro Sofia ha fame.': 'Um vier hat Sofia Hunger.',
      "È l'ora della merenda!": 'Es ist Zeit für den Nachmittagssnack!',
      'Sofia mangia un panino al prosciutto.': 'Sofia isst ein Schinkenbrötchen.',
      'Luca mangia un toast.': 'Luca isst einen Toast.',
      'Anna prende uno yogurt al miele e un biscotto.': 'Anna nimmt einen Honigjoghurt und einen Keks.',
      'Marco mangia la pizza.': 'Marco isst die Pizza.',
      'E il gelato?': 'Und das Eis?',
      'Il gelato è per dopo, alle cinque.': 'Das Eis gibt es später, um fünf.',
    },
    fragen: [
      { frage: 'Was isst Sofia?', antworten: ['Ein Schinkenbrötchen', 'Eine Pizza', 'Einen Toast'] },
      { frage: 'Was nimmt Anna?', antworten: ['Joghurt mit Honig und einen Keks', 'Ein Eis', 'Eine Pizza'] },
      { frage: 'Wann gibt es das Eis?', antworten: ['Um fünf', 'Um vier', 'Am Morgen'] },
    ],
  },

  {
    id: 'a1-cassa', titel: 'Alla cassa', art: 'Text', stufe: 'A1',
    text: `Marco è al bar. Prende un caffè al banco e un cornetto.

Alla cassa chiede: quanto fa? Fa due euro e cinquanta centesimi.

Marco non ha contanti. Paga con il bancomat.

Giulia prende un cappuccino da portare via. Paga con una moneta da due euro.

Il caffè per me è gratis, dice il cassiere. Oggi c'è lo sconto!`,
    woerter: {
      'banco': ['al banco', 'Theke (al banco = an der Theke)', 'an der Theke'],
      'contanti': ['in contanti', 'Bargeld (contanti)', 'bar'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'chiede': ['chiedere', 'fragt', 'fragen'],
      'centesimi': ['il centesimo', 'Cent'],
      'paga': ['pagare', 'zahlt'],
      'con': ['con', 'mit', 'mit'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'dice': ['dire', 'sagt', 'sagen'],
      'oggi': ['oggi', 'heute', 'heute'],
    },
    uebersetzung: {
      'Marco è al bar.': 'Marco ist in der Bar.',
      'Prende un caffè al banco e un cornetto.': 'Er nimmt einen Kaffee an der Theke und ein Hörnchen.',
      'Alla cassa chiede: quanto fa?': 'An der Kasse fragt er: Wie viel macht das?',
      'Fa due euro e cinquanta centesimi.': 'Es macht zwei Euro und fünfzig Cent.',
      'Marco non ha contanti.': 'Marco hat kein Bargeld.',
      'Paga con il bancomat.': 'Er zahlt mit der Bankkarte.',
      'Giulia prende un cappuccino da portare via.': 'Giulia nimmt einen Cappuccino zum Mitnehmen.',
      'Paga con una moneta da due euro.': 'Sie zahlt mit einer Zwei-Euro-Münze.',
      'Il caffè per me è gratis, dice il cassiere.': 'Der Kaffee für mich ist gratis, sagt der Kassierer.',
      "Oggi c'è lo sconto!": 'Heute gibt es Rabatt!',
    },
    fragen: [
      { frage: 'Wie viel kostet es für Marco?', antworten: ['2,50 Euro', '2 Euro', '5 Euro'] },
      { frage: 'Wie zahlt Marco?', antworten: ['Mit der Bankkarte', 'Bar', 'Gar nicht'] },
      { frage: 'Was nimmt Giulia?', antworten: ['Einen Cappuccino zum Mitnehmen', 'Ein Hörnchen', 'Einen Spritz'] },
    ],
  },

  {
    id: 'a1-parenti', titel: 'Una famiglia grande', art: 'Text', stufe: 'A1',
    text: `La famiglia è dalla nonna. Ci sono gli zii, i cugini e i nipoti.

Lo zio Paolo e la zia Maria sono sposati. Hanno due gemelli, Leo e Lia.

La cugina Sara ha un fidanzato, Marco.

I miei genitori sono divorziati. Il papà abita a Roma, la mamma a Bologna.

La nonna dice: la famiglia è grande, ma è bello!`,
    woerter: {
      'zii': ['lo zio', 'Onkel und Tanten (gli zii)'],
      'cugini': ['il cugino', 'Cousins'],
      'nipoti': ['il nipote', 'Neffen und Nichten; Enkel'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'maria': ['Maria', 'Maria (Vorname)'],
      'sposati': ['sposato', 'verheiratet'],
      'gemelli': ['il gemello', 'Zwillinge'],
      'leo': ['Leo', 'Leo (Vorname)'],
      'lia': ['Lia', 'Lia (Vorname)'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'miei': ['mio', 'meine'],
      'divorziati': ['divorziato', 'geschieden'],
      'abita': ['abitare', 'wohnt'],
      'roma': ['Roma', 'Rom (Stadt)'],
      'bologna': ['Bologna', 'Bologna (Stadt)'],
      'dice': ['dire', 'sagt', 'sagen'],
      'ma': ['ma', 'aber', 'aber'],
      'bello': ['bello', 'schön', 'schön'],
    },
    uebersetzung: {
      'La famiglia è dalla nonna.': 'Die Familie ist bei der Oma.',
      'Ci sono gli zii, i cugini e i nipoti.': 'Da sind die Onkel und Tanten, die Cousins und die Neffen.',
      'Lo zio Paolo e la zia Maria sono sposati.': 'Onkel Paolo und Tante Maria sind verheiratet.',
      'Hanno due gemelli, Leo e Lia.': 'Sie haben Zwillinge, Leo und Lia.',
      'La cugina Sara ha un fidanzato, Marco.': 'Cousine Sara hat einen festen Freund, Marco.',
      'I miei genitori sono divorziati.': 'Meine Eltern sind geschieden.',
      'Il papà abita a Roma, la mamma a Bologna.': 'Papa wohnt in Rom, Mama in Bologna.',
      'La nonna dice: la famiglia è grande, ma è bello!': 'Die Oma sagt: Die Familie ist groß, aber das ist schön!',
    },
    fragen: [
      { frage: 'Wie heißen die Zwillinge?', antworten: ['Leo und Lia', 'Paolo und Maria', 'Sara und Marco'] },
      { frage: 'Wer ist Marco?', antworten: ['Saras fester Freund', 'Der Onkel', 'Der Opa'] },
      { frage: 'Wo wohnt die Mama?', antworten: ['In Bologna', 'In Rom', 'Bei der Oma'] },
    ],
  },

  {
    id: 'a1-carattere', titel: 'Com’è Luca?', art: 'Text', stufe: 'A1',
    text: `Luca è alto e moro. Ha la barba e gli occhiali.

È un po' timido, ma è molto simpatico e intelligente.

Sua sorella Sara è bionda e magra. È allegra e divertente.

Il loro cugino Paolo è serio. A volte è antipatico.

E il gatto? Il gatto di Sara è carino, ma cattivo!`,
    woerter: {
      'luca': ['Luca', 'Luca (Vorname)'],
      'alto': ['alto', 'groß (Person); hoch', 'hoch; groß'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'ma': ['ma', 'aber', 'aber'],
      'sua': ['suo', 'seine; ihre', 'sein; ihr'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'bionda': ['biondo', 'blond'],
      'magra': ['magro', 'schlank'],
      'allegra': ['allegro', 'fröhlich'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'volte': ['a volte', 'manchmal (a volte)', 'manchmal'],
    },
    uebersetzung: {
      'Luca è alto e moro.': 'Luca ist groß und dunkelhaarig.',
      'Ha la barba e gli occhiali.': 'Er hat einen Bart und eine Brille.',
      "È un po' timido, ma è molto simpatico e intelligente.": 'Er ist ein bisschen schüchtern, aber sehr sympathisch und klug.',
      'Sua sorella Sara è bionda e magra.': 'Seine Schwester Sara ist blond und schlank.',
      'È allegra e divertente.': 'Sie ist fröhlich und lustig.',
      'Il loro cugino Paolo è serio.': 'Ihr Cousin Paolo ist ernst.',
      'A volte è antipatico.': 'Manchmal ist er unsympathisch.',
      'E il gatto?': 'Und die Katze?',
      'Il gatto di Sara è carino, ma cattivo!': 'Saras Katze ist süß, aber böse!',
    },
    fragen: [
      { frage: 'Wie sieht Luca aus?', antworten: ['Groß, dunkelhaarig, mit Bart und Brille', 'Blond und schlank', 'Klein und blond'] },
      { frage: 'Wie ist Sara?', antworten: ['Fröhlich und lustig', 'Ernst', 'Schüchtern'] },
      { frage: 'Wie ist Saras Katze?', antworten: ['Süß, aber böse', 'Lieb', 'Alt'] },
    ],
  },

  {
    id: 'a1-animali', titel: 'Gli animali di Giulia', art: 'Text', stufe: 'A1',
    text: `Giulia ama gli animali. Ha un cane, un gatto e un coniglio.

Il cane si chiama Rex. Giulia porta fuori Rex.

Il coniglio abita in una gabbia. Giulia gli dà da mangiare.

Suo fratello ha un criceto e una tartaruga.

Oggi il cucciolo di Rex va dal veterinario. Giulia lo accarezza.`,
    woerter: {
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'ama': ['amare', 'liebt', 'lieben'],
      'animali': ["l'animale", 'Tiere', 'das Tier'],
      'cane': ['il cane', 'Hund', 'der Hund'],
      'chiama': ['chiamarsi', 'heißt (si chiama)', 'heißen'],
      'rex': ['Rex', 'Rex (Name des Hundes)'],
      'porta': ['portare fuori', 'führt aus (porta fuori)'],
      'abita': ['abitare', 'wohnt'],
      'dà': ['dare da mangiare', 'gibt (gli dà da mangiare = füttert es)'],
      'suo': ['suo', 'ihr; sein', 'sein; ihr'],
      'oggi': ['oggi', 'heute', 'heute'],
      'accarezza': ['accarezzare', 'streichelt'],
    },
    uebersetzung: {
      'Giulia ama gli animali.': 'Giulia liebt Tiere.',
      'Ha un cane, un gatto e un coniglio.': 'Sie hat einen Hund, eine Katze und ein Kaninchen.',
      'Il cane si chiama Rex.': 'Der Hund heißt Rex.',
      'Giulia porta fuori Rex.': 'Giulia führt Rex aus.',
      'Il coniglio abita in una gabbia.': 'Das Kaninchen wohnt in einem Käfig.',
      'Giulia gli dà da mangiare.': 'Giulia füttert es.',
      'Suo fratello ha un criceto e una tartaruga.': 'Ihr Bruder hat einen Hamster und eine Schildkröte.',
      'Oggi il cucciolo di Rex va dal veterinario.': 'Heute geht Rex’ Welpe zum Tierarzt.',
      'Giulia lo accarezza.': 'Giulia streichelt ihn.',
    },
    fragen: [
      { frage: 'Wie heißt der Hund?', antworten: ['Rex', 'Micio', 'Leo'] },
      { frage: 'Wo wohnt das Kaninchen?', antworten: ['In einem Käfig', 'Im Garten', 'Im Aquarium'] },
      { frage: 'Welche Tiere hat der Bruder?', antworten: ['Einen Hamster und eine Schildkröte', 'Einen Hund', 'Ein Pferd'] },
    ],
  },

  {
    id: 'a1-orario', titel: 'Che ore sono?', art: 'Text', stufe: 'A1',
    text: `Che ore sono? Sono le sette in punto.

Di solito Marco lavora il lunedì, il martedì e il mercoledì.

Il giovedì gioca con il cane. Il venerdì nuota.

A volte guarda la TV fino a mezzanotte.

Ogni tanto il sabato va al mare con Giulia.

Marco guarda l'orologio: è mezzogiorno e un quarto. Ora di pranzo!`,
    woerter: {
      'punto': ['in punto', 'Punkt (in punto = genau)', 'genau (Uhrzeit)'],
      'solito': ['di solito', 'normalerweise (di solito)', 'normalerweise'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'lavora': ['lavorare', 'arbeitet'],
      'gioca': ['giocare', 'spielt'],
      'con': ['con', 'mit', 'mit'],
      'nuota': ['nuotare', 'schwimmt'],
      'guarda': ['guardare', 'schaut; sieht an'],
      'tv': ['la TV', 'Fernsehen; Fernseher', 'der Fernseher'],
      'fino': ['fino a', 'bis (fino a = bis)', 'bis'],
      'mare': ['il mare', 'Meer', 'das Meer'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'pranzo': ['il pranzo', 'Mittagessen', 'das Mittagessen'],
    },
    uebersetzung: {
      'Che ore sono?': 'Wie spät ist es?',
      'Sono le sette in punto.': 'Es ist Punkt sieben.',
      'Di solito Marco lavora il lunedì, il martedì e il mercoledì.': 'Normalerweise arbeitet Marco montags, dienstags und mittwochs.',
      'Il giovedì gioca con il cane.': 'Donnerstags spielt er mit dem Hund.',
      'Il venerdì nuota.': 'Freitags schwimmt er.',
      'A volte guarda la TV fino a mezzanotte.': 'Manchmal sieht er bis Mitternacht fern.',
      'Ogni tanto il sabato va al mare con Giulia.': 'Ab und zu fährt er samstags mit Giulia ans Meer.',
      "Marco guarda l'orologio: è mezzogiorno e un quarto.": 'Marco schaut auf die Uhr: Es ist Viertel nach zwölf.',
      'Ora di pranzo!': 'Zeit fürs Mittagessen!',
    },
    fragen: [
      { frage: 'An welchen Tagen arbeitet Marco?', antworten: ['Montag bis Mittwoch', 'Nur am Wochenende', 'Jeden Tag'] },
      { frage: 'Was macht Marco freitags?', antworten: ['Er schwimmt', 'Er spielt mit dem Hund', 'Er arbeitet'] },
      { frage: 'Wie spät ist es am Ende?', antworten: ['Viertel nach zwölf', 'Mitternacht', 'Punkt sieben'] },
    ],
  },

  {
    id: 'a1-hobby', titel: 'Gli hobby di Anna', art: 'Text', stufe: 'A1',
    text: `Anna ha molti hobby. Suona la chitarra e il pianoforte.

Le piace cantare e ballare.

Il sabato sera va al cinema con Luca. Guardano un film.

La domenica ascolta musica o disegna fumetti.

A volte guarda una serie in TV. Anna si diverte sempre!`,
    woerter: {
      'anna': ['Anna', 'Anna (Vorname)'],
      'suona': ['suonare', 'spielt (Instrument)'],
      'con': ['con', 'mit', 'mit'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'guardano': ['guardare', 'sie schauen'],
      'ascolta': ['ascoltare', 'hört'],
      'o': ['o', 'oder', 'oder'],
      'disegna': ['disegnare', 'zeichnet'],
      'fumetti': ['il fumetto', 'Comics'],
      'guarda': ['guardare', 'schaut'],
      'tv': ['la TV', 'Fernsehen; Fernseher', 'der Fernseher'],
      'diverte': ['divertirsi', 'hat Spaß (si diverte)'],
    },
    uebersetzung: {
      'Anna ha molti hobby.': 'Anna hat viele Hobbys.',
      'Suona la chitarra e il pianoforte.': 'Sie spielt Gitarre und Klavier.',
      'Le piace cantare e ballare.': 'Sie singt und tanzt gern.',
      'Il sabato sera va al cinema con Luca.': 'Samstagabends geht sie mit Luca ins Kino.',
      'Guardano un film.': 'Sie sehen einen Film.',
      'La domenica ascolta musica o disegna fumetti.': 'Sonntags hört sie Musik oder zeichnet Comics.',
      'A volte guarda una serie in TV.': 'Manchmal schaut sie eine Serie im Fernsehen.',
      'Anna si diverte sempre!': 'Anna hat immer Spaß!',
    },
    fragen: [
      { frage: 'Welche Instrumente spielt Anna?', antworten: ['Gitarre und Klavier', 'Nur Gitarre', 'Keins'] },
      { frage: 'Was macht Anna samstagabends?', antworten: ['Sie geht mit Luca ins Kino', 'Sie zeichnet', 'Sie arbeitet'] },
      { frage: 'Was macht sie sonntags?', antworten: ['Musik hören oder Comics zeichnen', 'Fußball spielen', 'Kochen'] },
    ],
  },

  {
    id: 'a1-sport', titel: 'Luca e lo sport', art: 'Text', stufe: 'A1',
    text: `Luca ama lo sport. Il lunedì va in palestra.

Il mercoledì fa yoga con Anna. Il sabato gioca a tennis.

La domenica c'è la partita di calcio allo stadio.

Luca è un giocatore della squadra del paese.

Prima della partita si allena al campo.

Oggi la squadra di Luca vince tre a uno!`,
    woerter: {
      'luca': ['Luca', 'Luca (Vorname)'],
      'ama': ['amare', 'liebt', 'lieben'],
      'con': ['con', 'mit', 'mit'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'gioca': ['giocare', 'spielt'],
      'paese': ['il paese', 'Dorf; Land (hier: Dorf)', 'das Land; das Dorf'],
      'prima': ['prima', 'vor (prima di = vor)', 'vorher; zuerst'],
      'allena': ['allenarsi', 'trainiert (si allena)'],
      'vince': ['vincere', 'gewinnt', 'gewinnen'],
    },
    uebersetzung: {
      'Luca ama lo sport.': 'Luca liebt Sport.',
      'Il lunedì va in palestra.': 'Montags geht er ins Fitnessstudio.',
      'Il mercoledì fa yoga con Anna.': 'Mittwochs macht er Yoga mit Anna.',
      'Il sabato gioca a tennis.': 'Samstags spielt er Tennis.',
      "La domenica c'è la partita di calcio allo stadio.": 'Sonntags ist das Fußballspiel im Stadion.',
      'Luca è un giocatore della squadra del paese.': 'Luca ist Spieler in der Mannschaft des Dorfes.',
      'Prima della partita si allena al campo.': 'Vor dem Spiel trainiert er auf dem Platz.',
      'Oggi la squadra di Luca vince tre a uno!': 'Heute gewinnt Lucas Mannschaft drei zu eins!',
    },
    fragen: [
      { frage: 'Was macht Luca montags?', antworten: ['Er geht ins Fitnessstudio', 'Er spielt Tennis', 'Er macht Yoga'] },
      { frage: 'Mit wem macht Luca Yoga?', antworten: ['Mit Anna', 'Mit Marco', 'Allein'] },
      { frage: 'Wie geht das Spiel heute aus?', antworten: ['3 zu 1 für Lucas Mannschaft', '1 zu 3', 'Unentschieden'] },
    ],
  },

  {
    id: 'a1-trasporti', titel: 'Come vai al lavoro?', art: 'Text', stufe: 'A1',
    text: `Marco abita a Napoli. Per andare al lavoro prende la metro.

Giulia va al lavoro in motorino, sempre con il casco.

Anna non ha la patente. Va a piedi o prende il tram.

Il sabato Luca guida la macchina. La benzina costa molto!

La domenica prendono il traghetto per Capri. Il traghetto parte dal porto alle nove.

Tornano la sera in taxi.`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'abita': ['abitare', 'wohnt'],
      'napoli': ['Napoli', 'Neapel'],
      'per': ['per', 'um zu; nach (für)', 'für'],
      'lavoro': ['il lavoro', 'Arbeit (al lavoro = zur Arbeit)', 'die Arbeit'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'guida': ['guidare', 'fährt (am Steuer)'],
      'macchina': ['la macchina', 'Auto', 'das Auto'],
      'costa': ['costare', 'kostet', 'kosten'],
      'prendono': ['prendere', 'sie nehmen'],
      'capri': ['Capri', 'Capri (Insel)'],
      'parte': ['partire', 'fährt ab'],
      'tornano': ['tornare', 'sie kommen zurück'],
    },
    uebersetzung: {
      'Marco abita a Napoli.': 'Marco wohnt in Neapel.',
      'Per andare al lavoro prende la metro.': 'Um zur Arbeit zu fahren, nimmt er die U-Bahn.',
      'Giulia va al lavoro in motorino, sempre con il casco.': 'Giulia fährt mit dem Roller zur Arbeit, immer mit Helm.',
      'Anna non ha la patente.': 'Anna hat keinen Führerschein.',
      'Va a piedi o prende il tram.': 'Sie geht zu Fuß oder nimmt die Straßenbahn.',
      'Il sabato Luca guida la macchina.': 'Samstags fährt Luca Auto.',
      'La benzina costa molto!': 'Das Benzin kostet viel!',
      'La domenica prendono il traghetto per Capri.': 'Sonntags nehmen sie die Fähre nach Capri.',
      'Il traghetto parte dal porto alle nove.': 'Die Fähre fährt um neun vom Hafen ab.',
      'Tornano la sera in taxi.': 'Abends kommen sie mit dem Taxi zurück.',
    },
    fragen: [
      { frage: 'Wie fährt Marco zur Arbeit?', antworten: ['Mit der U-Bahn', 'Mit dem Roller', 'Mit dem Auto'] },
      { frage: 'Warum geht Anna zu Fuß?', antworten: ['Sie hat keinen Führerschein', 'Sie mag Sport', 'Es ist nah'] },
      { frage: 'Wann fährt die Fähre ab?', antworten: ['Um neun', 'Um sieben', 'Am Abend'] },
    ],
  },

  {
    id: 'a1-citta', titel: 'Dov’è la banca?', art: 'Text', stufe: 'A1',
    text: `Giulia è in città. Cerca la banca.

Dalla stazione va dritto fino all'incrocio.

Al semaforo attraversa la strada.

La banca è all'angolo, di fronte al parco.

La posta è in fondo al viale, vicino alla fontana.

Dal marciapiede Giulia vede la torre e un bel palazzo.`,
    woerter: {
      'fronte': ['di fronte', 'gegenüber (di fronte a)', 'gegenüber'],
      'fondo': ['in fondo', 'Ende (in fondo a = am Ende von)', 'am Ende; hinten'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'cerca': ['cercare', 'sucht', 'suchen'],
      'dritto': ['dritto', 'geradeaus', 'geradeaus'],
      'fino': ['fino a', 'bis (fino a = bis)', 'bis'],
      'attraversa': ['attraversare', 'überquert'],
      'strada': ['la strada', 'Straße', 'die Straße'],
      'vicino': ['vicino', 'nahe (vicino a = neben; nahe bei)', 'nah'],
      'vede': ['vedere', 'sieht', 'sehen'],
      'bel': ['bello', 'schön (vor Nomen: bel)', 'schön'],
    },
    uebersetzung: {
      'Giulia è in città.': 'Giulia ist in der Stadt.',
      'Cerca la banca.': 'Sie sucht die Bank.',
      "Dalla stazione va dritto fino all'incrocio.": 'Vom Bahnhof geht sie geradeaus bis zur Kreuzung.',
      'Al semaforo attraversa la strada.': 'An der Ampel überquert sie die Straße.',
      "La banca è all'angolo, di fronte al parco.": 'Die Bank ist an der Ecke, gegenüber vom Park.',
      'La posta è in fondo al viale, vicino alla fontana.': 'Die Post ist am Ende der Allee, neben dem Brunnen.',
      'Dal marciapiede Giulia vede la torre e un bel palazzo.': 'Vom Gehweg aus sieht Giulia den Turm und ein schönes Gebäude.',
    },
    fragen: [
      { frage: 'Was sucht Giulia?', antworten: ['Die Bank', 'Die Post', 'Den Bahnhof'] },
      { frage: 'Wo ist die Bank?', antworten: ['An der Ecke, gegenüber vom Park', 'Neben dem Brunnen', 'Am Bahnhof'] },
      { frage: 'Wo ist die Post?', antworten: ['Am Ende der Allee', 'Gegenüber vom Park', 'An der Ampel'] },
    ],
  },

  {
    id: 'a1-treno', titel: 'In treno a Firenze', art: 'Text', stufe: 'A1',
    text: `Anna va a Firenze in treno. Alla biglietteria prende un biglietto di andata e ritorno.

Prima di partire timbra il biglietto.

Il treno è in orario. Anna è nella carrozza sei, vicino al finestrino.

Il controllore guarda il biglietto. Tutto bene!

Il ritorno è un problema: c'è uno sciopero.

Anna aspetta due ore nella sala d'attesa.`,
    woerter: {
      'ritorno': ['andata e ritorno', 'Rückfahrt', 'hin und zurück'],
      'sala': ["la sala d'attesa", 'Saal (sala d’attesa = Wartesaal)', 'der Wartesaal'],
      'attesa': ["la sala d'attesa", 'Warten (sala d’attesa = Wartesaal)', 'der Wartesaal'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'firenze': ['Firenze', 'Florenz'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'prima': ['prima', 'vor (prima di = bevor)', 'vorher; zuerst'],
      'timbra': ['timbrare', 'entwertet'],
      'vicino': ['vicino', 'nahe (vicino a = neben; am)', 'nah'],
      'guarda': ['guardare', 'schaut an'],
      'tutto': ['tutto', 'alles', 'alles; ganz'],
      'problema': ['il problema', 'Problem', 'das Problem'],
      'sciopero': ['lo sciopero', 'Streik', 'der Streik'],
      'aspetta': ['aspettare', 'wartet', 'warten'],
    },
    uebersetzung: {
      'Anna va a Firenze in treno.': 'Anna fährt mit dem Zug nach Florenz.',
      'Alla biglietteria prende un biglietto di andata e ritorno.': 'Am Schalter nimmt sie eine Rückfahrkarte.',
      'Prima di partire timbra il biglietto.': 'Vor der Abfahrt entwertet sie die Fahrkarte.',
      'Il treno è in orario.': 'Der Zug ist pünktlich.',
      'Anna è nella carrozza sei, vicino al finestrino.': 'Anna ist in Wagen sechs, am Fenster.',
      'Il controllore guarda il biglietto.': 'Der Schaffner schaut die Fahrkarte an.',
      'Tutto bene!': 'Alles gut!',
      "Il ritorno è un problema: c'è uno sciopero.": 'Die Rückfahrt ist ein Problem: Es gibt einen Streik.',
      "Anna aspetta due ore nella sala d'attesa.": 'Anna wartet zwei Stunden im Wartesaal.',
    },
    fragen: [
      { frage: 'Welche Fahrkarte kauft Anna?', antworten: ['Hin und zurück', 'Nur hin', 'Keine'] },
      { frage: 'Wo sitzt Anna?', antworten: ['In Wagen sechs, am Fenster', 'In Wagen zwei', 'Im Wartesaal'] },
      { frage: 'Warum wartet Anna zwei Stunden?', antworten: ['Es gibt einen Streik', 'Der Zug ist zu früh', 'Sie hat keine Fahrkarte'] },
    ],
  },

  {
    id: 'a1-frutta', titel: 'Al mercato', art: 'Text', stufe: 'A1',
    text: `Sabato mattina Giulia è al mercato.

Prende un chilo di pere, le fragole e due banane.

Per l'insalata prende la lattuga, un cetriolo e i pomodori.

Ci sono anche le ciliegie e un'anguria grande.

A casa Giulia taglia le zucchine, le melanzane e un peperone.

Con i funghi, i fagioli e i piselli fa una zuppa calda.`,
    woerter: {
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'mercato': ['il mercato', 'Markt', 'der Markt'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'chilo': ['il chilo', 'Kilo', 'das Kilo'],
      'pere': ['la pera', 'Birnen'],
      'fragole': ['la fragola', 'Erdbeeren'],
      'banane': ['la banana', 'Bananen'],
      'per': ['per', 'für', 'für'],
      'insalata': ["l'insalata", 'Salat', 'der Salat'],
      'pomodori': ['il pomodoro', 'Tomaten'],
      'ciliegie': ['la ciliegia', 'Kirschen'],
      'taglia': ['tagliare', 'schneidet'],
      'zucchine': ['la zucchina', 'Zucchini'],
      'melanzane': ['la melanzana', 'Auberginen'],
      'zuppa': ['la zuppa', 'Suppe', 'die Suppe'],
      'calda': ['caldo', 'warm; heiß'],
    },
    uebersetzung: {
      'Sabato mattina Giulia è al mercato.': 'Am Samstagmorgen ist Giulia auf dem Markt.',
      'Prende un chilo di pere, le fragole e due banane.': 'Sie nimmt ein Kilo Birnen, die Erdbeeren und zwei Bananen.',
      "Per l'insalata prende la lattuga, un cetriolo e i pomodori.": 'Für den Salat nimmt sie Kopfsalat, eine Gurke und die Tomaten.',
      "Ci sono anche le ciliegie e un'anguria grande.": 'Es gibt auch Kirschen und eine große Wassermelone.',
      'A casa Giulia taglia le zucchine, le melanzane e un peperone.': 'Zu Hause schneidet Giulia die Zucchini, die Auberginen und eine Paprika.',
      'Con i funghi, i fagioli e i piselli fa una zuppa calda.': 'Mit den Pilzen, den Bohnen und den Erbsen macht sie eine warme Suppe.',
    },
    fragen: [
      { frage: 'Wann ist Giulia auf dem Markt?', antworten: ['Am Samstagmorgen', 'Am Sonntagabend', 'Am Montag'] },
      { frage: 'Was nimmt sie für den Salat?', antworten: ['Kopfsalat, eine Gurke und Tomaten', 'Kirschen', 'Pilze'] },
      { frage: 'Was kocht Giulia zu Hause?', antworten: ['Eine warme Suppe', 'Einen Kuchen', 'Pizza'] },
    ],
  },

  {
    id: 'a1-spesa', titel: 'Dal salumiere', art: 'Text', stufe: 'A1',
    text: `Marco è al negozio di alimentari.

Prende due etti di salame e una salsiccia.

Poi una scatola di biscotti, un vasetto di miele e un pacchetto di caffè.

Prende anche una dozzina di uova e una bottiglia di aceto.

Marco pesa la salsiccia: il peso è giusto.

Marco paga alla cassa con il bancomat.`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'negozio': ['il negozio', 'Laden (negozio di alimentari = Lebensmittelladen)', 'der Laden'],
      'alimentari': ['gli alimentari', 'Lebensmittel', 'die Lebensmittel'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'etti': ["l'etto", 'je 100 Gramm (due etti = 200 Gramm)'],
      'biscotti': ['il biscotto', 'Kekse'],
      'uova': ["l'uovo", 'Eier', 'das Ei'],
      'bottiglia': ['la bottiglia', 'Flasche', 'die Flasche'],
      'pesa': ['pesare', 'wiegt'],
      'giusto': ['giusto', 'richtig; stimmt', 'richtig'],
      'paga': ['pagare', 'zahlt'],
    },
    uebersetzung: {
      'Marco è al negozio di alimentari.': 'Marco ist im Lebensmittelladen.',
      'Prende due etti di salame e una salsiccia.': 'Er nimmt 200 Gramm Salami und eine Wurst.',
      'Poi una scatola di biscotti, un vasetto di miele e un pacchetto di caffè.': 'Dann eine Schachtel Kekse, ein Glas Honig und eine Packung Kaffee.',
      'Prende anche una dozzina di uova e una bottiglia di aceto.': 'Er nimmt auch ein Dutzend Eier und eine Flasche Essig.',
      'Marco pesa la salsiccia: il peso è giusto.': 'Marco wiegt die Wurst: Das Gewicht stimmt.',
      'Marco paga alla cassa con il bancomat.': 'Marco zahlt an der Kasse mit der Bankkarte.',
    },
    fragen: [
      { frage: 'Wie viel Salami nimmt Marco?', antworten: ['200 Gramm', 'Ein Kilo', '100 Gramm'] },
      { frage: 'Wie viele Eier nimmt er?', antworten: ['Zwölf', 'Sechs', 'Zwei'] },
      { frage: 'Wie zahlt Marco?', antworten: ['Mit der Bankkarte', 'Bar', 'Gar nicht'] },
    ],
  },

  {
    id: 'a1-cucina', titel: 'Dopo cena', art: 'Text', stufe: 'A1',
    text: `Anna apparecchia la tavola: la tovaglia, i piatti, le forchette, i coltelli e i tovaglioli.

Luca grattugia il formaggio con la grattugia.

Sul tagliere taglia il pane.

Con il mestolo serve la zuppa calda.

Dopo la cena i piatti sono sporchi.

Luca li mette nella lavastoviglie. Anna pulisce il lavandino.

Ora la cucina è pulita!`,
    woerter: {
      'anna': ['Anna', 'Anna (Vorname)'],
      'apparecchia': ['apparecchiare', 'deckt (den Tisch)'],
      'tavola': ['la tavola', 'Tisch (zum Essen)', 'der Tisch'],
      'piatti': ['il piatto', 'Teller', 'der Teller'],
      'forchette': ['la forchetta', 'Gabeln'],
      'coltelli': ['il coltello', 'Messer'],
      'tovaglioli': ['il tovagliolo', 'Servietten'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'formaggio': ['il formaggio', 'Käse', 'der Käse'],
      'taglia': ['tagliare', 'schneidet'],
      'serve': ['servire', 'serviert'],
      'zuppa': ['la zuppa', 'Suppe', 'die Suppe'],
      'calda': ['caldo', 'warm; heiß'],
      'dopo': ['dopo', 'nach', 'nach; danach'],
      'cena': ['la cena', 'Abendessen', 'das Abendessen'],
      'sporchi': ['sporco', 'schmutzig'],
      'mette': ['mettere', 'stellt; legt'],
      'pulisce': ['pulire', 'putzt'],
      'cucina': ['la cucina', 'Küche', 'die Küche'],
      'pulita': ['pulito', 'sauber'],
    },
    uebersetzung: {
      'Luca grattugia il formaggio con la grattugia.': 'Luca reibt den Käse mit der Reibe.',
      'Sul tagliere taglia il pane.': 'Auf dem Schneidebrett schneidet er das Brot.',
      'Con il mestolo serve la zuppa calda.': 'Mit der Kelle serviert er die warme Suppe.',
      'Dopo la cena i piatti sono sporchi.': 'Nach dem Abendessen sind die Teller schmutzig.',
      'Luca li mette nella lavastoviglie.': 'Luca stellt sie in die Spülmaschine.',
      'Anna pulisce il lavandino.': 'Anna putzt das Spülbecken.',
      'Ora la cucina è pulita!': 'Jetzt ist die Küche sauber!',
    },
    fragen: [
      { frage: 'Was macht Anna zuerst?', antworten: ['Sie deckt den Tisch', 'Sie kocht', 'Sie putzt'] },
      { frage: 'Womit serviert Luca die Suppe?', antworten: ['Mit der Kelle', 'Mit der Gabel', 'Mit dem Messer'] },
      { frage: 'Wohin kommen die schmutzigen Teller?', antworten: ['In die Spülmaschine', 'Ins Spülbecken', 'In den Schrank'] },
    ],
  },

  {
    id: 'a1-mobili', titel: 'La camera di Giulia', art: 'Text', stufe: 'A1',
    text: `Nella camera di Giulia c'è un letto con un cuscino e una coperta.

Vicino al letto c'è un comodino con una lampada.

A destra c'è l'armadio, a sinistra la scrivania con una sedia.

Sul muro c'è uno specchio e sul pavimento un tappeto.

Nel soggiorno ci sono un divano e due poltrone.

Dal balcone Giulia guarda il mare.`,
    woerter: {
      'destra': ['a destra', 'rechts (a destra)', 'rechts'],
      'sinistra': ['a sinistra', 'links (a sinistra)', 'links'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'vicino': ['vicino', 'nahe (vicino a = neben)', 'nah'],
      'pavimento': ['il pavimento', 'Fußboden', 'der Fußboden'],
      'soggiorno': ['il soggiorno', 'Wohnzimmer', 'das Wohnzimmer'],
      'poltrone': ['la poltrona', 'Sessel'],
      'guarda': ['guardare', 'schaut'],
      'mare': ['il mare', 'Meer', 'das Meer'],
    },
    uebersetzung: {
      "Nella camera di Giulia c'è un letto con un cuscino e una coperta.": 'In Giulias Zimmer steht ein Bett mit einem Kissen und einer Decke.',
      "Vicino al letto c'è un comodino con una lampada.": 'Neben dem Bett steht ein Nachttisch mit einer Lampe.',
      "A destra c'è l'armadio, a sinistra la scrivania con una sedia.": 'Rechts ist der Schrank, links der Schreibtisch mit einem Stuhl.',
      "Sul muro c'è uno specchio e sul pavimento un tappeto.": 'An der Wand hängt ein Spiegel und auf dem Boden liegt ein Teppich.',
      'Nel soggiorno ci sono un divano e due poltrone.': 'Im Wohnzimmer gibt es ein Sofa und zwei Sessel.',
      'Dal balcone Giulia guarda il mare.': 'Vom Balkon aus schaut Giulia aufs Meer.',
    },
    fragen: [
      { frage: 'Was steht neben dem Bett?', antworten: ['Ein Nachttisch mit Lampe', 'Ein Schrank', 'Ein Sofa'] },
      { frage: 'Was hängt an der Wand?', antworten: ['Ein Spiegel', 'Eine Lampe', 'Ein Teppich'] },
      { frage: 'Was sieht Giulia vom Balkon?', antworten: ['Das Meer', 'Die Berge', 'Den Park'] },
    ],
  },

  {
    id: 'a1-casa', titel: 'Il trasloco', art: 'Text', stufe: 'A1',
    text: `Oggi c'è il trasloco. Marco e Anna hanno una casa nuova.

La casa è al terzo piano. Non c'è l'ascensore: ci sono le scale!

C'è un ingresso, un corridoio, il soggiorno, la cucina e due camere da letto.

C'è anche una cantina e un garage.

L'affitto è di ottocento euro al mese. Il proprietario abita qui.

La sera Marco accende la luce e il riscaldamento. Che bello!`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'nuova': ['nuovo', 'neu', 'neu'],
      'terzo': ['terzo', 'dritte (al terzo piano = im dritten Stock)', 'dritter'],
      'cucina': ['la cucina', 'Küche', 'die Küche'],
      'camere': ['la camera da letto', 'Schlafzimmer (Mehrzahl)'],
      'ottocento': ['ottocento', 'achthundert'],
      'mese': ['il mese', 'Monat (al mese = im Monat)', 'der Monat'],
      'abita': ['abitare', 'wohnt'],
      'accende': ['accendere', 'schaltet ein'],
      'bello': ['bello', 'schön', 'schön'],
    },
    uebersetzung: {
      "Oggi c'è il trasloco.": 'Heute ist der Umzug.',
      'Marco e Anna hanno una casa nuova.': 'Marco und Anna haben eine neue Wohnung.',
      'La casa è al terzo piano.': 'Die Wohnung ist im dritten Stock.',
      "Non c'è l'ascensore: ci sono le scale!": 'Es gibt keinen Aufzug: Es gibt die Treppe!',
      'C\'è anche una cantina e un garage.': 'Es gibt auch einen Keller und eine Garage.',
      "L'affitto è di ottocento euro al mese.": 'Die Miete beträgt achthundert Euro im Monat.',
      'Il proprietario abita qui.': 'Der Vermieter wohnt hier.',
      'La sera Marco accende la luce e il riscaldamento.': 'Abends schaltet Marco das Licht und die Heizung ein.',
      'Che bello!': 'Wie schön!',
    },
    fragen: [
      { frage: 'In welchem Stock ist die Wohnung?', antworten: ['Im dritten', 'Im ersten', 'Im Erdgeschoss'] },
      { frage: 'Wie hoch ist die Miete?', antworten: ['800 Euro im Monat', '500 Euro', '1000 Euro'] },
      { frage: 'Gibt es einen Aufzug?', antworten: ['Nein, nur eine Treppe', 'Ja', 'Ja, zwei'] },
    ],
  },

  {
    id: 'a1-hotel', titel: 'Una camera rumorosa', art: 'Text', stufe: 'A1',
    text: `Il signor Bianchi arriva in albergo. Alla reception prende la chiave della stanza.

La mezza pensione è compresa. Il wifi è gratis: la password è in camera.

Ma la stanza ha un problema: il condizionatore non funziona.

E di notte c'è molto rumore dalla strada. La camera è rumorosa!

Il signor Bianchi si lamenta alla reception.

Subito c'è un'altra stanza disponibile.`,
    woerter: {
      'pensione': ['la mezza pensione', 'Pension (mezza pensione = Halbpension)', 'die Halbpension'],
      'signor': ['il signore', 'Herr (vor dem Namen: signor Bianchi)', 'der Herr'],
      'bianchi': ['Bianchi', 'Bianchi (Nachname)'],
      'arriva': ['arrivare', 'kommt an'],
      'prende': ['prendere', 'nimmt', 'nehmen'],
      'compresa': ['compreso', 'inbegriffen', 'inbegriffen'],
      'ma': ['ma', 'aber', 'aber'],
      'problema': ['il problema', 'Problem', 'das Problem'],
      'funziona': ['funzionare', 'funktioniert', 'funktionieren'],
      'strada': ['la strada', 'Straße', 'die Straße'],
      'rumorosa': ['rumoroso', 'laut'],
      'lamenta': ['lamentarsi', 'beschwert sich (si lamenta)'],
    },
    uebersetzung: {
      'Il signor Bianchi arriva in albergo.': 'Herr Bianchi kommt im Hotel an.',
      'Alla reception prende la chiave della stanza.': 'An der Rezeption nimmt er den Zimmerschlüssel.',
      'La mezza pensione è compresa.': 'Die Halbpension ist inbegriffen.',
      'Il wifi è gratis: la password è in camera.': 'Das WLAN ist kostenlos: Das Passwort ist im Zimmer.',
      'Ma la stanza ha un problema: il condizionatore non funziona.': 'Aber das Zimmer hat ein Problem: Die Klimaanlage funktioniert nicht.',
      "E di notte c'è molto rumore dalla strada.": 'Und nachts gibt es viel Lärm von der Straße.',
      'La camera è rumorosa!': 'Das Zimmer ist laut!',
      'Il signor Bianchi si lamenta alla reception.': 'Herr Bianchi beschwert sich an der Rezeption.',
      "Subito c'è un'altra stanza disponibile.": 'Sofort ist ein anderes Zimmer frei.',
    },
    fragen: [
      { frage: 'Was ist im Preis inbegriffen?', antworten: ['Die Halbpension', 'Das Abendessen im Restaurant', 'Nichts'] },
      { frage: 'Was funktioniert nicht?', antworten: ['Die Klimaanlage', 'Das WLAN', 'Die Dusche'] },
      { frage: 'Was passiert am Ende?', antworten: ['Er bekommt ein anderes Zimmer', 'Er fährt nach Hause', 'Er schläft im Garten'] },
    ],
  },

  {
    id: 'a1-giornata', titel: 'La giornata di Marco', art: 'Text', stufe: 'A1',
    text: `Marco si sveglia alle sette. Si alza subito e si fa la doccia.

Poi si veste, si pettina e fa colazione.

Prima di uscire si lava i denti.

Al lavoro fa una pausa a mezzogiorno. Pranza con i colleghi.

La sera fa la spesa e cena a casa.

Alle undici va a letto. È stanco e si addormenta subito.`,
    woerter: {
      'spesa': ['fare la spesa', 'Einkauf (fa la spesa = kauft ein)', 'einkaufen'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'sveglia': ['svegliarsi', 'wacht auf (si sveglia)'],
      'alza': ['alzarsi', 'steht auf (si alza)'],
      'veste': ['vestirsi', 'zieht sich an (si veste)'],
      'pettina': ['pettinarsi', 'kämmt sich (si pettina)'],
      'prima': ['prima', 'vor (prima di = bevor)', 'vorher; zuerst'],
      'lava': ['lavarsi i denti', 'putzt (si lava i denti = putzt sich die Zähne)'],
      'pranza': ['pranzare', 'isst zu Mittag'],
      'colleghi': ['il collega', 'Kollegen', 'der Kollege'],
      'cena': ['cenare', 'isst zu Abend'],
      'addormenta': ['addormentarsi', 'schläft ein (si addormenta)'],
    },
    uebersetzung: {
      'Marco si sveglia alle sette.': 'Marco wacht um sieben auf.',
      'Si alza subito e si fa la doccia.': 'Er steht sofort auf und duscht.',
      'Poi si veste, si pettina e fa colazione.': 'Dann zieht er sich an, kämmt sich und frühstückt.',
      'Prima di uscire si lava i denti.': 'Bevor er geht, putzt er sich die Zähne.',
      'Al lavoro fa una pausa a mezzogiorno.': 'Bei der Arbeit macht er mittags eine Pause.',
      'Pranza con i colleghi.': 'Er isst mit den Kollegen zu Mittag.',
      'La sera fa la spesa e cena a casa.': 'Abends kauft er ein und isst zu Hause zu Abend.',
      'Alle undici va a letto.': 'Um elf geht er ins Bett.',
      'È stanco e si addormenta subito.': 'Er ist müde und schläft sofort ein.',
    },
    fragen: [
      { frage: 'Wann wacht Marco auf?', antworten: ['Um sieben', 'Um elf', 'Um zwölf'] },
      { frage: 'Mit wem isst Marco zu Mittag?', antworten: ['Mit den Kollegen', 'Allein', 'Mit Anna'] },
      { frage: 'Wann geht Marco ins Bett?', antworten: ['Um elf', 'Um zehn', 'Um Mitternacht'] },
    ],
  },

  {
    id: 'a1-vestiti', titel: 'Cosa mi metto?', art: 'Text', stufe: 'A1',
    text: `Oggi Giulia esce con Luca. Cosa si mette?

Prova una gonna nera e una camicia gialla.

No, meglio i pantaloni blu e una maglietta.

Fa freddo: si mette anche il maglione e il cappotto marrone.

Le scarpe? Le scarpe nere.

Al negozio Giulia compra una giacca nuova. La taglia è giusta.`,
    woerter: {
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'esce': ['uscire', 'geht aus'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'mette': ['mettersi', 'zieht an (si mette)'],
      'prova': ['provare', 'probiert an', 'probieren'],
      'nera': ['nero', 'schwarz'],
      'gialla': ['giallo', 'gelb'],
      'meglio': ['meglio', 'besser', 'besser'],
      'freddo': ['freddo', 'kalt (fa freddo = es ist kalt)', 'kalt'],
      'nere': ['nero', 'schwarz'],
      'negozio': ['il negozio', 'Laden', 'der Laden'],
      'compra': ['comprare', 'kauft', 'kaufen'],
      'nuova': ['nuovo', 'neu', 'neu'],
      'giusta': ['giusto', 'richtig; passend', 'richtig'],
    },
    uebersetzung: {
      'Oggi Giulia esce con Luca.': 'Heute geht Giulia mit Luca aus.',
      'Cosa si mette?': 'Was zieht sie an?',
      'Prova una gonna nera e una camicia gialla.': 'Sie probiert einen schwarzen Rock und eine gelbe Bluse.',
      'No, meglio i pantaloni blu e una maglietta.': 'Nein, besser die blaue Hose und ein T-Shirt.',
      'Fa freddo: si mette anche il maglione e il cappotto marrone.': 'Es ist kalt: Sie zieht auch den Pullover und den braunen Mantel an.',
      'Le scarpe nere.': 'Die schwarzen Schuhe.',
      'Al negozio Giulia compra una giacca nuova.': 'Im Laden kauft Giulia eine neue Jacke.',
      'La taglia è giusta.': 'Die Größe passt.',
    },
    fragen: [
      { frage: 'Mit wem geht Giulia aus?', antworten: ['Mit Luca', 'Mit Marco', 'Mit Anna'] },
      { frage: 'Was zieht sie am Ende an?', antworten: ['Blaue Hose und T-Shirt', 'Schwarzen Rock', 'Ein Kleid'] },
      { frage: 'Was kauft Giulia?', antworten: ['Eine neue Jacke', 'Schuhe', 'Einen Rock'] },
    ],
  },

  {
    id: 'a1-lavori', titel: 'Nel palazzo di Anna', art: 'Text', stufe: 'A1',
    text: `Nel palazzo di Anna abitano tante persone.

Anna è insegnante in una scuola. Suo marito Paolo è impiegato in banca.

Il signor Rossi al primo piano è avvocato.

Sua figlia è infermiera: fa il turno di notte.

Il nonno Gino è pensionato. Non lavora più, ma ha tanto tempo!`,
    woerter: {
      'anna': ['Anna', 'Anna (Vorname)'],
      'abitano': ['abitare', 'wohnen'],
      'persone': ['la persona', 'Menschen; Personen'],
      'scuola': ['la scuola', 'Schule', 'die Schule'],
      'suo': ['suo', 'ihr; sein', 'sein; ihr'],
      'sua': ['suo', 'seine; ihre', 'sein; ihr'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'signor': ['il signore', 'Herr (vor dem Namen: signor Rossi)', 'der Herr'],
      'rossi': ['Rossi', 'Rossi (Nachname)'],
      'primo': ['primo', 'erste (al primo piano = im ersten Stock)', 'erster'],
      'gino': ['Gino', 'Gino (Vorname)'],
      'lavora': ['lavorare', 'arbeitet'],
      'ma': ['ma', 'aber', 'aber'],
    },
    uebersetzung: {
      'Nel palazzo di Anna abitano tante persone.': 'In Annas Haus wohnen viele Menschen.',
      'Anna è insegnante in una scuola.': 'Anna ist Lehrerin an einer Schule.',
      'Suo marito Paolo è impiegato in banca.': 'Ihr Mann Paolo ist Angestellter bei einer Bank.',
      'Il signor Rossi al primo piano è avvocato.': 'Herr Rossi im ersten Stock ist Anwalt.',
      'Sua figlia è infermiera: fa il turno di notte.': 'Seine Tochter ist Krankenschwester: Sie hat Nachtschicht.',
      'Il nonno Gino è pensionato.': 'Opa Gino ist Rentner.',
      'Non lavora più, ma ha tanto tempo!': 'Er arbeitet nicht mehr, aber er hat viel Zeit!',
    },
    fragen: [
      { frage: 'Was ist Anna von Beruf?', antworten: ['Lehrerin', 'Anwältin', 'Krankenschwester'] },
      { frage: 'Wo arbeitet Paolo?', antworten: ['Bei einer Bank', 'In einer Schule', 'Im Krankenhaus'] },
      { frage: 'Was hat Opa Gino?', antworten: ['Viel Zeit', 'Viel Arbeit', 'Nachtschicht'] },
    ],
  },
);
