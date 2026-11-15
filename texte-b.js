// Lesetexte B1 und B2 – gleicher Aufbau wie in texte.js (wird an LESETEXTE angehängt).

LESETEXTE.push(
  // ---------------------------------------------------------------- B1
  {
    id: 'progetti', titel: 'Progetti per il futuro', art: 'Text', stufe: 'B1',
    text: `Sara ha trentadue anni e abita a Milano con il suo gatto. Quest'anno ha deciso di cambiare vita.

«L'anno prossimo mi trasferirò all'estero», racconta. «Andrò a Lisbona, in Portogallo. Prima però farò un corso di portoghese, perché la lingua è difficile.»

A settembre Sara comincerà a cercare un appartamento. Ha un'amica che abita a Lisbona da cinque anni: organizzeranno tutto insieme. Forse troveranno una casa piccola vicino al mare.

E il lavoro? «Lavorerò da casa: per il mio lavoro basta un computer.»

La madre di Sara non è contenta. «Sarai così lontana!» dice. Ma Sara è felice: «Mamma, in aereo sono solo tre ore. Verrai a trovarmi e mangeremo il pesce insieme!»`,
    woerter: {
      'sara': ['Sara', 'Sara (Vorname)'],
      'trentadue': ['trentadue', 'zweiunddreißig', 'zweiunddreißig'],
      'milano': ['Milano', 'Mailand'],
      'suo': ['suo', 'ihr (il suo gatto = ihre Katze)'],
      'deciso': ['decidere', 'entschieden (ha deciso = hat entschieden)'],
      'vita': ['la vita', 'Leben', 'das Leben'],
      'trasferirò': ['trasferirsi', 'ich werde umziehen'],
      "all'": ["a + l'", "ins (all'estero = ins Ausland)"],
      'racconta': ['raccontare', 'erzählt', 'erzählen'],
      'andrò': ['andare', 'ich werde gehen / fahren'],
      'lisbona': ['Lisbona', 'Lissabon'],
      'portogallo': ['Portogallo', 'Portugal'],
      'farò': ['fare', 'ich werde machen'],
      'portoghese': ['il portoghese', 'Portugiesisch', 'Portugiesisch'],
      'comincerà': ['cominciare', 'wird anfangen'],
      "un'": ["un'", 'eine (vor Vokal)'],
      'amica': ["l'amica", 'Freundin'],
      'abita': ['abitare', 'wohnt'],
      'organizzeranno': ['organizzare', 'sie werden organisieren'],
      'troveranno': ['trovare', 'sie werden finden'],
      'lavorerò': ['lavorare', 'ich werde arbeiten'],
      'basta': ['bastare', 'reicht; genügt', 'reichen; genügen'],
      'perché': ['perché', 'weil'],
      'piccola': ['piccolo', 'kleines'],
      'computer': ['il computer', 'Computer', 'der Computer'],
      'contenta': ['contento', 'zufrieden; froh'],
      'sarai': ['essere', 'du wirst sein'],
      'lontana': ['lontano', 'weit weg'],
      'dice': ['dire', 'sagt'],
      'mamma': ['la mamma', 'Mama', 'die Mama'],
      'verrai': ['venire', 'du wirst kommen'],
      'trovarmi': ['trovare', 'mich besuchen (venire a trovare = besuchen)'],
      'mangeremo': ['mangiare', 'wir werden essen'],
    },
    uebersetzung: {
      "Quest'anno ha deciso di cambiare vita.": 'Dieses Jahr hat sie beschlossen, ihr Leben zu ändern.',
      'A settembre Sara comincerà a cercare un appartamento.': 'Im September wird Sara anfangen, eine Wohnung zu suchen.',
      'Forse troveranno una casa piccola vicino al mare.': 'Vielleicht werden sie ein kleines Haus am Meer finden.',
    },
    fragen: [
      { frage: 'Wohin will Sara ziehen?', antworten: ['Nach Lissabon', 'Nach Mailand', 'Nach Rom'] },
      { frage: 'Was macht sie vorher?', antworten: ['Einen Portugiesisch-Kurs', 'Eine Reise nach Spanien', 'Ein Praktikum'] },
      { frage: 'Wie wird Sara arbeiten?', antworten: ['Von zu Hause mit dem Computer', 'In einem Hotel', 'In einer Schule'] },
    ],
  },

  {
    id: 'desideri', titel: 'Una casa al mare', art: 'Text', stufe: 'B1',
    text: `Paolo lavora molto e torna sempre a casa tardi. Una sera dice a sua moglie Lucia: «Sai qual è il mio sogno? Vorrei una casa piccola al mare, in un paese tranquillo.»

«E che cosa faresti tutto il giorno?» chiede Lucia.

«La mattina andrei in barca e la sera guarderei il cielo. Smetterei di lavorare e mi alzerei tardi.»

Lucia ride. «Magari! Anch'io vorrei una vita più tranquilla. Ma io preferirei una casa in montagna: lì c'è più silenzio.»

«Allora potremmo comprare due case!» dice Paolo.

«Con quali soldi? Non siamo ricchi, Paolo.»

Alla fine decidono così: invece di una casa, quest'estate faranno una vacanza in un piccolo paese al mare.`,
    woerter: {
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'lavora': ['lavorare', 'arbeitet'],
      'torna': ['tornare', 'kommt zurück'],
      'una': ['una', 'eine (una sera = eines Abends)'],
      'dice': ['dire', 'sagt'],
      'sua': ['suo', 'seine'],
      'lucia': ['Lucia', 'Lucia (Vorname)'],
      'sai': ['sapere', 'weißt du'],
      'qual': ['quale', 'welcher; was (qual è = was ist)', 'welcher'],
      'vorrei': ['volere', 'ich hätte gern; ich würde gern'],
      'faresti': ['fare', 'würdest du machen'],
      'chiede': ['chiedere', 'fragt'],
      'andrei': ['andare', 'ich würde fahren'],
      'guarderei': ['guardare', 'ich würde anschauen'],
      'smetterei': ['smettere', 'ich würde aufhören'],
      'alzerei': ['alzarsi', 'ich würde aufstehen (mi alzerei)'],
      'ride': ['ridere', 'lacht', 'lachen'],
      'vita': ['la vita', 'Leben', 'das Leben'],
      'tranquilla': ['tranquillo', 'ruhig'],
      'piccola': ['piccolo', 'kleines'],
      'preferirei': ['preferire', 'ich würde lieber haben'],
      'potremmo': ['potere', 'wir könnten'],
      'case': ['la casa', 'Häuser'],
      'quali': ['quale', 'welche (Mehrzahl)', 'welcher'],
      'siamo': ['essere', 'wir sind'],
      'ricchi': ['ricco', 'reich (Mehrzahl)'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'decidono': ['decidere', 'sie entscheiden'],
      "quest'": ['questo', "diesen (quest'estate = diesen Sommer)"],
      'faranno': ['fare', 'sie werden machen'],
    },
    uebersetzung: {},
    fragen: [
      { frage: 'Was ist Paolos Traum?', antworten: ['Ein kleines Haus am Meer', 'Ein großes Auto', 'Eine Reise nach Amerika'] },
      { frage: 'Was würde Lucia lieber haben?', antworten: ['Ein Haus in den Bergen', 'Eine Wohnung in der Stadt', 'Ein Boot'] },
      { frage: 'Was machen sie am Ende?', antworten: ['Sie machen Urlaub am Meer', 'Sie kaufen zwei Häuser', 'Sie bleiben zu Hause'] },
    ],
  },

  {
    id: 'ripasso-5', titel: 'Una festa per Giorgio', art: 'Text', stufe: 'B1',
    text: `Sabato prossimo Giorgio compirà quarant'anni. I suoi amici vogliono organizzare una festa, ma lui non lo deve sapere.

«Dove la facciamo?» chiede Marta. «Io preferirei un ristorante», dice Luca.

«Costerebbe troppo», dice Sara. «Facciamola a casa mia! Ho un giardino grande.»

Così decidono. Sara cucinerà le lasagne, Luca porterà il vino e Marta farà un tiramisù.

«Per il tiramisù si usano le uova crude?» chiede Luca. «Sì, ma si può anche fare una crema cotta», dice Marta.

La sera della festa Giorgio arriva da Sara. Quando entra in giardino, tutti gridano: «Auguri!»

Giorgio è felicissimo: «È la festa più bella della mia vita!»`,
    woerter: {
      'giorgio': ['Giorgio', 'Giorgio (Vorname)'],
      'compirà': ['compiere', 'wird … (Jahre alt) werden', 'vollenden (compiere gli anni = Geburtstag haben)'],
      "quarant'": ['quaranta', 'vierzig', 'vierzig'],
      'suoi': ['suo', 'seine (Mehrzahl)'],
      'amici': ["l'amico", 'Freunde'],
      'vogliono': ['volere', 'sie wollen'],
      'deve': ['dovere', 'darf (non lo deve sapere = er darf es nicht wissen)'],
      'facciamo': ['fare', 'machen wir'],
      'chiede': ['chiedere', 'fragt'],
      'marta': ['Marta', 'Marta (Vorname)'],
      'preferirei': ['preferire', 'ich würde lieber nehmen'],
      'dice': ['dire', 'sagt'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'costerebbe': ['costare', 'würde kosten'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'facciamola': ['fare', 'machen wir sie (die Party)'],
      'decidono': ['decidere', 'sie entscheiden'],
      'cucinerà': ['cucinare', 'wird kochen'],
      'lasagne': ['le lasagne', 'Lasagne', 'die Lasagne'],
      'porterà': ['portare', 'wird mitbringen'],
      'farà': ['fare', 'wird machen'],
      'usano': ['usare', 'man nimmt (si usano)', 'benutzen'],
      'uova': ["l'uovo", 'Eier'],
      'crude': ['crudo', 'roh (Mehrzahl)'],
      'può': ['potere', 'kann (si può = man kann)'],
      'cotta': ['cotto', 'gekocht'],
      'arriva': ['arrivare', 'kommt an'],
      'entra': ['entrare', 'geht hinein'],
      'tutti': ['tutto', 'alle'],
      'gridano': ['gridare', 'rufen laut', 'schreien; laut rufen'],
      'auguri': ['auguri', 'herzlichen Glückwunsch'],
      'felicissimo': ['felice', 'überglücklich'],
      'bella': ['bello', 'schön'],
      'vita': ['la vita', 'Leben', 'das Leben'],
    },
    uebersetzung: {
      "Sabato prossimo Giorgio compirà quarant'anni.": 'Nächsten Samstag wird Giorgio vierzig Jahre alt.',
      'Così decidono.': 'So beschließen sie es.',
    },
    fragen: [
      { frage: 'Warum gibt es eine Party?', antworten: ['Giorgio wird 40', 'Giorgio heiratet', 'Giorgio zieht um'] },
      { frage: 'Wo findet die Party statt?', antworten: ['Bei Sara im Garten', 'In einem Restaurant', 'Bei Giorgio'] },
      { frage: 'Was bringt Luca mit?', antworten: ['Den Wein', 'Die Lasagne', 'Ein Tiramisù'] },
    ],
  },

  {
    id: 'telefono', titel: 'Al telefono', art: 'Text', stufe: 'B1',
    text: `Sono le sei di sera. Chiara sta cucinando quando il cellulare suona. È sua sorella Elena.

«Pronto, Chiara? Ti disturbo?»

«No, no. Sto cucinando la pasta. E tu, che cosa stai facendo?»

«Sto aspettando il treno. Ho appena finito una riunione lunghissima!»

«Scusa, non capisco bene. C'è molto rumore.»

«Sono alla stazione! Ripeto: sto aspettando il treno.»

«Ah, va bene. Senti, adesso i bambini stanno litigando e l'acqua sta bollendo. Posso richiamarti più tardi?»

«Certo. Ti mando un messaggio quando arrivo a casa.»

Mezz'ora dopo arriva il messaggio di Elena: «Sono a casa. Chiamami!»`,
    woerter: {
      'chiara': ['Chiara', 'Chiara (Vorname)'],
      'sta': ['stare', 'ist gerade (sta cucinando = kocht gerade)'],
      'cucinando': ['cucinare', 'kochend (sta cucinando = kocht gerade)'],
      'suona': ['suonare', 'klingelt', 'klingeln; spielen (Musik)'],
      'sua': ['suo', 'ihre'],
      'elena': ['Elena', 'Elena (Vorname)'],
      'disturbo': ['disturbare', 'ich störe'],
      'sto': ['stare', 'ich bin gerade (sto cucinando = ich koche gerade)'],
      'stai': ['stare', 'du bist gerade'],
      'facendo': ['fare', 'machend (stai facendo = du machst gerade)'],
      'aspettando': ['aspettare', 'wartend (sto aspettando = ich warte gerade)'],
      'appena': ['appena', 'gerade erst', 'gerade erst; kaum'],
      'finito': ['finire', 'beendet'],
      'lunghissima': ['lungo', 'sehr lang'],
      'capisco': ['capire', 'ich verstehe'],
      'rumore': ['il rumore', 'Lärm', 'der Lärm'],
      'ripeto': ['ripetere', 'ich wiederhole'],
      'senti': ['sentire', 'hör mal'],
      'bambini': ['il bambino', 'Kinder'],
      'stanno': ['stare', 'sie sind gerade'],
      'litigando': ['litigare', 'streitend (stanno litigando = streiten gerade)', 'streiten'],
      'bollendo': ['bollire', 'kochend (sta bollendo = kocht gerade)'],
      'posso': ['potere', 'kann ich'],
      'richiamarti': ['richiamare', 'dich zurückrufen'],
      'mando': ['mandare', 'ich schicke'],
      'arrivo': ['arrivare', 'ich komme an'],
      "mezz'": ['mezzo', "halb (mezz'ora = halbe Stunde)"],
      'ora': ["l'ora", 'Stunde'],
      'arriva': ['arrivare', 'kommt an'],
      'chiamami': ['chiamare', 'ruf mich an!'],
    },
    uebersetzung: {
      'Sono le sei di sera.': 'Es ist sechs Uhr abends.',
      'Chiara sta cucinando quando il cellulare suona.': 'Chiara kocht gerade, als das Handy klingelt.',
      'È sua sorella Elena.': 'Es ist ihre Schwester Elena.',
    },
    fragen: [
      { frage: 'Was macht Chiara, als das Handy klingelt?', antworten: ['Sie kocht', 'Sie schläft', 'Sie liest'] },
      { frage: 'Wo ist Elena?', antworten: ['Am Bahnhof', 'Im Büro', 'Zu Hause'] },
      { frage: 'Warum will Chiara später zurückrufen?', antworten: ['Die Kinder streiten und das Wasser kocht', 'Sie muss zur Arbeit', 'Ihr Akku ist leer'] },
    ],
  },

  {
    id: 'email', titel: 'Una mail a Giulia', art: 'Text', stufe: 'B1',
    text: `Cara Giulia,

grazie mille per la tua lettera! L'ho ricevuta ieri ed è stata una bella sorpresa.

Ti scrivo per due cose. La prima: ti ricordi la collana blu che mi hai prestato per la festa? Te la restituisco presto, promesso! Te la spedisco in un pacco con le foto della festa.

La seconda: mio fratello Luca cerca un libro di cucina siciliana. Tu ne hai uno, no? Se non lo usi, glielo puoi prestare? Lui te lo restituirà a Natale.

Ah, dimenticavo: il tuo nuovo indirizzo è sempre Via Garibaldi 12? Me lo puoi scrivere nella risposta?

Un abbraccio e a presto,
Anna`,
    woerter: {
      'cara': ['caro', 'liebe (Anrede im Brief)'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'mille': ['mille', 'tausend (grazie mille = vielen Dank)'],
      'tua': ['tuo', 'deine'],
      "l'": ['la', "sie (l'ho ricevuta = ich habe ihn bekommen)"],
      'ricevuta': ['ricevere', 'bekommen'],
      'stata': ['essere', 'gewesen (è stata = war)'],
      'bella': ['bello', 'schöne'],
      'sorpresa': ['la sorpresa', 'Überraschung', 'die Überraschung'],
      'scrivo': ['scrivere', 'ich schreibe'],
      'cose': ['la cosa', 'Sachen; Dinge'],
      'prima': ['primo', 'die erste'],
      'ricordi': ['ricordare', 'erinnerst dich (ti ricordi = erinnerst du dich)'],
      'blu': ['blu', 'blau', 'blau'],
      'hai': ['avere', 'du hast'],
      'prestato': ['prestare', 'geliehen'],
      'te': ['ti', 'dir (te la = sie dir)'],
      'restituisco': ['restituire', 'ich gebe zurück'],
      'promesso': ['promettere', 'versprochen', 'versprechen'],
      'spedisco': ['spedire', 'ich schicke'],
      'foto': ['la foto', 'Fotos (Mehrzahl gleich: le foto)'],
      'seconda': ['secondo', 'die zweite'],
      'fratello': ['il fratello', 'Bruder'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'cerca': ['cercare', 'sucht'],
      'cucina': ['la cucina', 'Küche (hier: Kochen)'],
      'siciliana': ['siciliano', 'sizilianisch', 'sizilianisch'],
      'usi': ['usare', 'du benutzt', 'benutzen'],
      'glielo': ['glielo', 'es ihm'],
      'puoi': ['potere', 'du kannst'],
      'restituirà': ['restituire', 'er wird zurückgeben'],
      'natale': ['Natale', 'Weihnachten'],
      'dimenticavo': ['dimenticare', 'ich hätte fast vergessen (wörtlich: ich vergaß)'],
      'tuo': ['tuo', 'deine'],
      'nuovo': ['nuovo', 'neue'],
      'via': ['la via', 'Straße (in Adressen)', 'die Straße; der Weg'],
      'garibaldi': ['Garibaldi', 'Garibaldi (Name)'],
      'me': ['mi', 'mir (me lo = es mir)'],
      'nella': ['in + la', 'in der'],
      'anna': ['Anna', 'Anna (Vorname)'],
    },
    uebersetzung: {
      'grazie mille per la tua lettera!': 'Vielen Dank für deinen Brief!',
      "L'ho ricevuta ieri ed è stata una bella sorpresa.": 'Ich habe ihn gestern bekommen, und er war eine schöne Überraschung.',
      'Ti scrivo per due cose.': 'Ich schreibe dir wegen zwei Dingen.',
      'Te la restituisco presto, promesso!': 'Ich gebe sie dir bald zurück, versprochen!',
      'Tu ne hai uno, no?': 'Du hast doch eins, oder?',
      'Se non lo usi, glielo puoi prestare?': 'Wenn du es nicht benutzt, kannst du es ihm leihen?',
      'Lui te lo restituirà a Natale.': 'Er wird es dir an Weihnachten zurückgeben.',
      'Me lo puoi scrivere nella risposta?': 'Kannst du sie mir in der Antwort schreiben?',
    },
    fragen: [
      { frage: 'Was hat Anna von Giulia geliehen?', antworten: ['Eine blaue Halskette', 'Ein Kochbuch', 'Eine Tasche'] },
      { frage: 'Was sucht Annas Bruder?', antworten: ['Ein sizilianisches Kochbuch', 'Eine Wohnung', 'Fotos von der Party'] },
      { frage: 'Was soll Giulia in ihrer Antwort schreiben?', antworten: ['Ihre Adresse', 'Ein Rezept', 'Ihre Telefonnummer'] },
    ],
  },

  {
    id: 'ragu-nonna', titel: 'Il ragù della nonna', art: 'Rezept', stufe: 'B1',
    text: `## Ingredienti per 6 persone
- 500 grammi di carne macinata
- 1 carota
- 1 pezzo di sedano
- 1 cipolla
- 1 bicchiere di vino rosso
- 700 grammi di salsa di pomodoro
- olio, sale e pepe

## Preparazione
Nonna Rosa dice sempre: «Per un buon ragù ci vogliono tre cose: carne buona, verdura fresca e tanta pazienza.»

Sbuccia la carota e la cipolla e tritale con il sedano. In una pentola grande metti un po' d'olio e fai rosolare la verdura per dieci minuti.

Aggiungi la carne e cuocila a fuoco alto. Poi versa il vino: ne basta un bicchiere.

Adesso aggiungi la salsa, un pizzico di sale e un po' di pepe. Copri con il coperchio e lascia cuocere a fuoco lento. Quanto tempo ci vuole? Almeno due ore!

Il segreto della nonna? «Alla fine ci metto sempre un cucchiaino di zucchero.»

Servi il ragù con le tagliatelle. Se ne resta un po', mettilo in frigorifero: il giorno dopo è ancora più buono!`,
    woerter: {
      'ingredienti': ["l'ingrediente", 'Zutaten'],
      'persone': ['la persona', 'Personen'],
      'grammi': ['il grammo', 'Gramm'],
      'nonna': ['la nonna', 'Oma'],
      'rosa': ['Rosa', 'Rosa (Vorname)'],
      'dice': ['dire', 'sagt'],
      'buon': ['buono', 'gutes'],
      'vogliono': ['volere', 'braucht man (ci vogliono)'],
      'cose': ['la cosa', 'Dinge'],
      'buona': ['buono', 'gute'],
      'fresca': ['fresco', 'frische'],
      'sbuccia': ['sbucciare', 'schäle!'],
      'tritale': ['tritare', 'hacke sie (klein)!'],
      'metti': ['mettere', 'gib!; lege!'],
      "d'": ['di', "von (un po' d'olio = etwas Öl)"],
      'fai': ['fare', 'lass! (fai rosolare = lass anbraten)'],
      'aggiungi': ['aggiungere', 'gib dazu!'],
      'cuocila': ['cuocere', 'brate sie!'],
      'versa': ['versare', 'gieße!'],
      'basta': ['bastare', 'reicht', 'reichen; genügen'],
      'copri': ['coprire', 'decke zu!'],
      'lascia': ['lasciare', 'lass!'],
      'lento': ['lento', 'langsam (a fuoco lento = auf kleiner Flamme)'],
      'ore': ["l'ora", 'Stunden'],
      'segreto': ['il segreto', 'Geheimnis'],
      'metto': ['mettere', 'ich gebe hinein (ci metto = ich tue hinein)'],
      'servi': ['servire', 'serviere!'],
      'tagliatelle': ['le tagliatelle', 'Tagliatelle (Bandnudeln)', 'die Bandnudeln'],
      'resta': ['restare', 'bleibt übrig'],
      'mettilo': ['mettere', 'stell es!'],
      'buono': ['buono', 'lecker'],
    },
    uebersetzung: {
      'Sbuccia la carota e la cipolla e tritale con il sedano.': 'Schäle die Karotte und die Zwiebel und hacke sie mit dem Sellerie klein.',
      'Aggiungi la carne e cuocila a fuoco alto.': 'Gib das Fleisch dazu und brate es bei starker Hitze.',
      'Poi versa il vino: ne basta un bicchiere.': 'Dann gieß den Wein dazu: ein Glas davon reicht.',
      'Adesso aggiungi la salsa, un pizzico di sale e un po\' di pepe.': 'Jetzt gib die Soße, eine Prise Salz und etwas Pfeffer dazu.',
      'Copri con il coperchio e lascia cuocere a fuoco lento.': 'Leg den Deckel darauf und lass es auf kleiner Flamme kochen.',
      'Quanto tempo ci vuole?': 'Wie lange braucht es?',
      'Almeno due ore!': 'Mindestens zwei Stunden!',
      'Il segreto della nonna?': 'Das Geheimnis der Oma?',
      'Servi il ragù con le tagliatelle.': 'Serviere das Ragù mit Tagliatelle.',
    },
    fragen: [
      { frage: 'Was braucht man laut Nonna Rosa für ein gutes Ragù?', antworten: ['Gutes Fleisch, frisches Gemüse und Geduld', 'Viel Wein und Zucker', 'Nur gute Tomaten'] },
      { frage: 'Wie lange muss das Ragù kochen?', antworten: ['Mindestens zwei Stunden', 'Zehn Minuten', 'Eine halbe Stunde'] },
      { frage: 'Was ist das Geheimnis der Nonna?', antworten: ['Ein Teelöffel Zucker', 'Ein Glas Milch', 'Viel Knoblauch'] },
    ],
  },

  {
    id: 'colloquio', titel: 'Il colloquio di lavoro', art: 'Text', stufe: 'B1',
    text: `Martedì scorso Davide ha avuto un colloquio di lavoro in un'azienda di Torino.

La sera prima aveva preparato tutto: aveva letto molte cose sull'azienda, aveva scritto le domande per il capo e aveva stampato il curriculum. Era molto nervoso e non aveva dormito bene.

La mattina è uscito presto, ma quando è arrivato alla fermata, l'autobus era già partito! Così ha preso un taxi.

In ufficio lo aspettava una signora gentile, la signora Ferri. «Lei ha già lavorato in un'azienda come la nostra?» gli ha chiesto.

Davide ha raccontato la sua esperienza: prima aveva lavorato tre anni a Milano, poi era andato a Londra per un anno.

Alla fine la signora Ferri ha parlato dello stipendio e del contratto. Una settimana dopo Davide ha ricevuto una mail: il lavoro era suo!`,
    woerter: {
      'martedì': ['martedì', 'Dienstag', 'Dienstag'],
      'scorso': ['scorso', 'letzten'],
      'davide': ['Davide', 'Davide (Vorname)'],
      'avuto': ['avere', 'gehabt'],
      "un'": ["un'", 'eine (vor Vokal)'],
      'torino': ['Torino', 'Turin'],
      'aveva': ['avere', 'er hatte (aveva preparato = hatte vorbereitet)'],
      'preparato': ['preparare', 'vorbereitet'],
      'letto': ['leggere', 'gelesen'],
      'molte': ['molto', 'viele'],
      'cose': ['la cosa', 'Dinge'],
      'scritto': ['scrivere', 'geschrieben'],
      'domande': ['la domanda', 'Fragen'],
      'stampato': ['stampare', 'ausgedruckt', 'drucken'],
      'era': ['essere', 'er war'],
      'dormito': ['dormire', 'geschlafen'],
      'uscito': ['uscire', 'hinausgegangen'],
      'arrivato': ['arrivare', 'angekommen'],
      'partito': ['partire', 'abgefahren'],
      'preso': ['prendere', 'genommen'],
      'taxi': ['il taxi', 'Taxi', 'das Taxi'],
      'lo': ['lo', 'ihn'],
      'aspettava': ['aspettare', 'erwartete'],
      'ferri': ['Ferri', 'Ferri (Nachname)'],
      'lavorato': ['lavorare', 'gearbeitet'],
      'nostra': ['nostro', 'unsere'],
      'chiesto': ['chiedere', 'gefragt'],
      'raccontato': ['raccontare', 'erzählt', 'erzählen'],
      'sua': ['suo', 'seine'],
      'milano': ['Milano', 'Mailand'],
      'andato': ['andare', 'gegangen'],
      'londra': ['Londra', 'London'],
      'parlato': ['parlare', 'gesprochen'],
      'ricevuto': ['ricevere', 'bekommen'],
      'suo': ['suo', 'seiner'],
    },
    uebersetzung: {
      "Martedì scorso Davide ha avuto un colloquio di lavoro in un'azienda di Torino.": 'Letzten Dienstag hatte Davide ein Vorstellungsgespräch bei einer Firma in Turin.',
      'Era molto nervoso e non aveva dormito bene.': 'Er war sehr nervös und hatte nicht gut geschlafen.',
      'Così ha preso un taxi.': 'Also hat er ein Taxi genommen.',
    },
    fragen: [
      { frage: 'Was hatte Davide am Abend vorher gemacht?', antworten: ['Alles vorbereitet', 'Mit Freunden gefeiert', 'Einen Film geschaut'] },
      { frage: 'Warum hat er ein Taxi genommen?', antworten: ['Der Bus war schon weg', 'Es regnete', 'Er hatte kein Ticket'] },
      { frage: 'Wo hatte Davide vorher gearbeitet?', antworten: ['In Mailand und London', 'In Turin und Rom', 'Nur in Mailand'] },
    ],
  },

  {
    id: 'ripasso-6', titel: 'Una telefonata alla nonna', art: 'Text', stufe: 'B1',
    text: `Domenica mattina Chiara chiama sua nonna Rosa.

«Pronto, nonna? Che cosa stai facendo?»

«Sto preparando il ragù per il pranzo. Vieni anche tu?»

«Oggi non posso, devo lavorare. Ma senti, nonna: mi dai la ricetta del ragù? L'avevo scritta su un foglio, ma ho perso il foglio!»

«Certo, te la do. Ma ci vuole pazienza, eh!»

«Lo so. Quanta carne ci vuole?»

«Mezzo chilo. E di vino ne basta un bicchiere.»

«E il segreto? Me lo dici?»

«Il segreto? Te lo dico solo se vieni a pranzo domenica prossima!»

Chiara ride. Aveva già capito che la nonna voleva solo vederla.`,
    woerter: {
      'chiara': ['Chiara', 'Chiara (Vorname)'],
      'chiama': ['chiamare', 'ruft an'],
      'sua': ['suo', 'ihre'],
      'rosa': ['Rosa', 'Rosa (Vorname)'],
      'stai': ['stare', 'du bist gerade'],
      'facendo': ['fare', 'machend (stai facendo = machst du gerade)'],
      'sto': ['stare', 'ich bin gerade'],
      'preparando': ['preparare', 'vorbereitend (sto preparando = ich bereite gerade zu)'],
      'vieni': ['venire', 'kommst du'],
      'posso': ['potere', 'ich kann'],
      'devo': ['dovere', 'ich muss'],
      'senti': ['sentire', 'hör mal'],
      'dai': ['dare', 'gibst du'],
      "l'": ['la', "sie (l'avevo scritta = ich hatte sie aufgeschrieben)"],
      'avevo': ['avere', 'ich hatte'],
      'scritta': ['scrivere', 'geschrieben'],
      'foglio': ['il foglio', 'Blatt (Papier)', 'das Blatt'],
      'perso': ['perdere', 'verloren'],
      'te': ['ti', 'dir (te la do = ich gebe sie dir)'],
      'do': ['dare', 'ich gebe'],
      'eh': ['eh', 'hörst du; nicht wahr'],
      'so': ['sapere', 'ich weiß'],
      'quanta': ['quanto', 'wie viel'],
      'chilo': ['il chilo', 'Kilo'],
      'basta': ['bastare', 'reicht', 'reichen; genügen'],
      'me': ['mi', 'mir (me lo dici = sagst du es mir)'],
      'dici': ['dire', 'sagst du'],
      'dico': ['dire', 'ich sage'],
      'prossima': ['prossimo', 'nächsten'],
      'ride': ['ridere', 'lacht', 'lachen'],
      'aveva': ['avere', 'sie hatte'],
      'capito': ['capire', 'verstanden'],
      'voleva': ['volere', 'wollte'],
      'vederla': ['vedere', 'sie sehen'],
    },
    uebersetzung: {
      'Domenica mattina Chiara chiama sua nonna Rosa.': 'Am Sonntagmorgen ruft Chiara ihre Oma Rosa an.',
      'Aveva già capito che la nonna voleva solo vederla.': 'Sie hatte schon verstanden, dass die Oma sie nur sehen wollte.',
    },
    fragen: [
      { frage: 'Was macht die Oma gerade?', antworten: ['Sie kocht Ragù', 'Sie geht spazieren', 'Sie schläft'] },
      { frage: 'Warum braucht Chiara das Rezept noch einmal?', antworten: ['Sie hat den Zettel verloren', 'Sie hat es nie bekommen', 'Ihre Freundin will es'] },
      { frage: 'Wann verrät die Oma das Geheimnis?', antworten: ['Wenn Chiara nächsten Sonntag zum Essen kommt', 'Am Telefon', 'Nie'] },
    ],
  },

  {
    id: 'venezia', titel: 'Venezia: troppi turisti?', art: 'Nachricht', stufe: 'B1',
    text: `Ogni anno milioni di turisti visitano Venezia. Da qualche anno chi visita la città per un solo giorno deve pagare una tassa di cinque euro. È giusto? Abbiamo chiesto l'opinione di tre persone.

Marco, 45 anni, veneziano: «Penso che la tassa sia una buona idea. Nel centro c'è sempre troppa gente e noi veneziani non possiamo più vivere tranquilli. È necessario che la città protegga i suoi cittadini.»

Laura, 28 anni, turista di Roma: «Secondo me la tassa non serve a molto. Credo che i turisti vengano anche con la tassa. Il problema è un altro: ci sono troppe navi grandi.»

Jonas, 33 anni, turista tedesco: «Mi sembra giusto che chi viene per un giorno paghi qualcosa. Ma spero che i soldi servano per proteggere l'ambiente e la città.»`,
    woerter: {
      'milioni': ['il milione', 'Millionen', 'die Million'],
      'turisti': ['il turista', 'Touristen'],
      'visitano': ['visitare', 'besuchen', 'besuchen (Ort)'],
      'venezia': ['Venezia', 'Venedig'],
      'visita': ['visitare', 'besucht'],
      'deve': ['dovere', 'muss'],
      'abbiamo': ['avere', 'wir haben'],
      'chiesto': ['chiedere', 'gefragt'],
      'persone': ['la persona', 'Personen'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'veneziano': ['veneziano', 'aus Venedig; Venezianer', 'venezianisch'],
      'penso': ['pensare', 'ich denke'],
      'sia': ['essere', 'sei; ist (nach penso che)'],
      'buona': ['buono', 'gute'],
      'idea': ["l'idea", 'Idee', 'die Idee'],
      'troppa': ['troppo', 'zu viel'],
      'veneziani': ['veneziano', 'Venezianer (Mehrzahl)'],
      'possiamo': ['potere', 'wir können'],
      'tranquilli': ['tranquillo', 'ruhig (Mehrzahl)'],
      'protegga': ['proteggere', 'schützt (nach è necessario che)'],
      'suoi': ['suo', 'ihre (Mehrzahl)'],
      'cittadini': ['il cittadino', 'Bürger'],
      'laura': ['Laura', 'Laura (Vorname)'],
      'roma': ['Roma', 'Rom'],
      'serve': ['servire', 'nützt (non serve a molto = bringt nicht viel)'],
      'credo': ['credere', 'ich glaube'],
      'vengano': ['venire', 'kommen (nach credo che)'],
      'troppe': ['troppo', 'zu viele'],
      'navi': ['la nave', 'Schiffe', 'das Schiff'],
      'grandi': ['grande', 'große'],
      'jonas': ['Jonas', 'Jonas (Vorname)'],
      'tedesco': ['tedesco', 'deutsch; Deutscher', 'deutsch'],
      'viene': ['venire', 'kommt'],
      'sembra': ['sembrare', 'scheint (mi sembra = mir scheint)'],
      'paghi': ['pagare', 'bezahlt (nach è giusto che)'],
      'spero': ['sperare', 'ich hoffe'],
      'servano': ['servire', 'genutzt werden (nach spero che)'],
    },
    uebersetzung: {
      'Ogni anno milioni di turisti visitano Venezia.': 'Jedes Jahr besuchen Millionen Touristen Venedig.',
      'È giusto?': 'Ist das gerecht?',
      "Abbiamo chiesto l'opinione di tre persone.": 'Wir haben drei Menschen nach ihrer Meinung gefragt.',
    },
    fragen: [
      { frage: 'Wer muss in Venedig eine Gebühr zahlen?', antworten: ['Wer nur einen Tag bleibt', 'Alle Bewohner', 'Nur Leute mit Auto'] },
      { frage: 'Was sagt Laura?', antworten: ['Die Gebühr bringt nicht viel', 'Die Gebühr ist zu niedrig', 'Venedig braucht mehr Touristen'] },
      { frage: 'Was hofft Jonas?', antworten: ['Dass das Geld für Umwelt und Stadt verwendet wird', 'Dass die Gebühr wegfällt', 'Dass mehr Schiffe kommen'] },
    ],
  },

  {
    id: 'quadro', titel: 'Firenze: scoperto un quadro antico', art: 'Nachricht', stufe: 'B1',
    text: `Durante i lavori nel vecchio Teatro della Pergola, a Firenze, è stato scoperto un quadro antico. Il quadro era chiuso in una piccola camera dietro il palco da più di trecento anni.

Il quadro è stato trovato da due operai lunedì mattina. «Abbiamo aperto una vecchia porta e lì c'era il quadro», racconta uno di loro.

Secondo gli esperti, il quadro è stato fatto da un artista famoso del Seicento. Adesso sarà restaurato, e l'anno prossimo il pubblico lo potrà vedere in una mostra.

Il teatro, chiuso da un anno, sarà riaperto in primavera.`,
    woerter: {
      'lavori': ['il lavoro', 'Arbeiten; Bauarbeiten'],
      'vecchio': ['vecchio', 'alten'],
      'pergola': ['Pergola', 'Pergola (Name des Theaters)'],
      'firenze': ['Firenze', 'Florenz'],
      'stato': ['essere', 'worden (è stato scoperto = wurde entdeckt)'],
      'scoperto': ['scoprire', 'entdeckt'],
      'era': ['essere', 'war'],
      'chiuso': ['chiudere', 'eingeschlossen; geschlossen'],
      'piccola': ['piccolo', 'kleinen'],
      'palco': ['il palco', 'Bühne', 'die Bühne'],
      'trecento': ['trecento', 'dreihundert', 'dreihundert'],
      'trovato': ['trovare', 'gefunden'],
      'operai': ["l'operaio", 'Arbeiter (Mehrzahl)', 'der Arbeiter'],
      'lunedì': ['lunedì', 'Montag', 'Montag'],
      'abbiamo': ['avere', 'wir haben'],
      'aperto': ['aprire', 'geöffnet'],
      'vecchia': ['vecchio', 'alte'],
      "c'era": ['esserci', 'war da (c\'era = es gab; da war)'],
      'racconta': ['raccontare', 'erzählt', 'erzählen'],
      'loro': ['loro', 'ihnen'],
      'esperti': ["l'esperto", 'Experten', 'der Experte'],
      'fatto': ['fare', 'gemacht'],
      'seicento': ['Seicento', '17. Jahrhundert (die 1600er-Jahre)'],
      'sarà': ['essere', 'wird (sarà restaurato = wird restauriert werden)'],
      'restaurato': ['restaurare', 'restauriert'],
      'potrà': ['potere', 'wird können'],
      'riaperto': ['aprire', 'wieder eröffnet (riaprire)'],
    },
    uebersetzung: {
      'Il quadro è stato trovato da due operai lunedì mattina.': 'Das Bild wurde am Montagmorgen von zwei Arbeitern gefunden.',
      'Il teatro, chiuso da un anno, sarà riaperto in primavera.': 'Das Theater, seit einem Jahr geschlossen, wird im Frühling wieder eröffnet.',
    },
    fragen: [
      { frage: 'Wo wurde das Bild gefunden?', antworten: ['In einem kleinen Raum hinter der Bühne', 'Im Keller eines Museums', 'In einer Kirche'] },
      { frage: 'Wer hat das Bild gefunden?', antworten: ['Zwei Arbeiter', 'Ein Tourist', 'Die Polizei'] },
      { frage: 'Wann kann das Publikum das Bild sehen?', antworten: ['Nächstes Jahr in einer Ausstellung', 'Ab morgen', 'Nie'] },
    ],
  },

  {
    id: 'gita', titel: 'Una gita in montagna', art: 'Text', stufe: 'B1',
    text: `Domenica Elisa e Tommaso vogliono fare una gita in montagna. Sabato sera guardano le previsioni del tempo.

«Domani mattina c'è il sole, ma nel pomeriggio può arrivare un temporale», legge Elisa.

«Allora partiamo presto», dice Tommaso. «Se partiamo alle sette, arriviamo sulla cima prima di mezzogiorno.»

«E se piove?»

«Se piove, ci fermiamo al rifugio. Lì si mangia benissimo!»

Elisa prepara lo zaino: acqua, pane, formaggio, frutta e un ombrello. Se il sentiero è bagnato, è pericoloso. Così mette nello zaino anche le scarpe buone.

La mattina camminano due ore nel bosco. Il sentiero non è difficile e la vista è bellissima. Sotto di loro ci sono il lago e i paesi.

Alle due il cielo diventa grigio. Corrono al rifugio e arrivano prima della pioggia. Mangiano la polenta e bevono un tè caldo, mentre fuori arriva il temporale.`,
    woerter: {
      'elisa': ['Elisa', 'Elisa (Vorname)'],
      'tommaso': ['Tommaso', 'Tommaso (Vorname)'],
      'vogliono': ['volere', 'sie wollen'],
      'guardano': ['guardare', 'sie schauen an'],
      'previsioni': ['le previsioni', 'Vorhersage'],
      'può': ['potere', 'kann'],
      'legge': ['leggere', 'liest'],
      'partiamo': ['partire', 'wir fahren los'],
      'dice': ['dire', 'sagt'],
      'arriviamo': ['arrivare', 'wir kommen an'],
      'mezzogiorno': ['il mezzogiorno', 'Mittag (12 Uhr)', 'der Mittag'],
      'piove': ['piovere', 'regnet'],
      'fermiamo': ['fermarsi', 'wir halten an (ci fermiamo)', 'anhalten; Halt machen'],
      'benissimo': ['bene', 'sehr gut'],
      'mangia': ['mangiare', 'isst (si mangia = man isst)'],
      'prepara': ['preparare', 'packt; bereitet vor'],
      'bagnato': ['bagnato', 'nass', 'nass'],
      'mette': ['mettere', 'legt'],
      'scarpe': ['la scarpa', 'Schuhe', 'der Schuh'],
      'buone': ['buono', 'guten'],
      'camminano': ['camminare', 'sie gehen (zu Fuß)'],
      'ore': ["l'ora", 'Stunden'],
      'bellissima': ['bello', 'wunderschön'],
      'paesi': ['il paese', 'Dörfer'],
      'diventa': ['diventare', 'wird', 'werden'],
      'corrono': ['correre', 'sie laufen'],
      'arrivano': ['arrivare', 'sie kommen an'],
      'mangiano': ['mangiare', 'sie essen'],
      'polenta': ['la polenta', 'Polenta (Maisbrei)', 'die Polenta'],
      'bevono': ['bere', 'sie trinken'],
      'caldo': ['caldo', 'heißen'],
      'arriva': ['arrivare', 'kommt'],
    },
    uebersetzung: {
      'Domenica Elisa e Tommaso vogliono fare una gita in montagna.': 'Am Sonntag wollen Elisa und Tommaso einen Ausflug in die Berge machen.',
      'Sabato sera guardano le previsioni del tempo.': 'Am Samstagabend schauen sie sich die Wettervorhersage an.',
      'Se il sentiero è bagnato, è pericoloso.': 'Wenn der Weg nass ist, ist er gefährlich.',
      'Così mette nello zaino anche le scarpe buone.': 'Deshalb packt sie auch die guten Schuhe in den Rucksack.',
      'La mattina camminano due ore nel bosco.': 'Am Morgen wandern sie zwei Stunden durch den Wald.',
      'Il sentiero non è difficile e la vista è bellissima.': 'Der Weg ist nicht schwer, und die Aussicht ist wunderschön.',
      'Sotto di loro ci sono il lago e i paesi.': 'Unter ihnen liegen der See und die Dörfer.',
      'Alle due il cielo diventa grigio.': 'Um zwei Uhr wird der Himmel grau.',
      'Corrono al rifugio e arrivano prima della pioggia.': 'Sie laufen zur Hütte und kommen vor dem Regen an.',
    },
    fragen: [
      { frage: 'Warum wollen sie früh losgehen?', antworten: ['Am Nachmittag kann ein Gewitter kommen', 'Die Hütte schließt früh', 'Es wird sehr heiß'] },
      { frage: 'Was packt Elisa außerdem ein?', antworten: ['Die guten Schuhe', 'Eine Karte', 'Ein Handy-Ladegerät'] },
      { frage: 'Was essen sie in der Hütte?', antworten: ['Polenta', 'Pizza', 'Spaghetti'] },
    ],
  },

  {
    id: 'reclamo', titel: 'Un reclamo', art: 'Text', stufe: 'B1',
    text: `Due settimane fa la signora Bianchi ha comprato una caffettiera nuova in un negozio del centro. Ieri mattina l'ha usata per la prima volta, ma la caffettiera non funzionava: il caffè non usciva!

Oggi la signora torna al negozio con la caffettiera e lo scontrino.

«Buongiorno, mi dica!» dice il commesso.

«Buongiorno. Ho comprato questa caffettiera due settimane fa, ma è rotta. Vorrei fare un reclamo.»

«Mi faccia vedere… Ah, sì, purtroppo è rotta. Ha lo scontrino?»

«Sì, eccolo.»

«Bene. La caffettiera ha due anni di garanzia. Vuole un'altra caffettiera o preferisce un rimborso?»

«Preferirei il rimborso, grazie. L'ho pagata con la carta di credito.»

«Va bene. Mi dia la carta, per favore… Ecco fatto. I soldi arriveranno sul conto in tre giorni.»

«Grazie mille, è stato molto gentile.»

«Si figuri! Arrivederci, signora. E torni a trovarci!»`,
    woerter: {
      'settimane': ['la settimana', 'Wochen'],
      'fa': ['fa', 'vor (due settimane fa = vor zwei Wochen)'],
      'bianchi': ['Bianchi', 'Bianchi (Nachname)'],
      'comprato': ['comprare', 'gekauft'],
      'nuova': ['nuovo', 'neue'],
      "l'": ['la', "sie (l'ha usata = hat sie benutzt)"],
      'usata': ['usare', 'benutzt', 'benutzen'],
      'prima': ['primo', 'erste (per la prima volta = zum ersten Mal)'],
      'volta': ['la volta', 'Mal', 'das Mal'],
      'funzionava': ['funzionare', 'funktionierte'],
      'usciva': ['uscire', 'kam heraus'],
      'torna': ['tornare', 'geht zurück'],
      'dica': ['dire', 'sagen Sie (mi dica = was darf es sein?)'],
      'dice': ['dire', 'sagt'],
      'commesso': ['il commesso', 'Verkäufer', 'der Verkäufer'],
      'rotta': ['rotto', 'kaputt'],
      'vorrei': ['volere', 'ich möchte'],
      'faccia': ['fare', 'lassen Sie (mi faccia vedere = lassen Sie mich sehen)'],
      'eccolo': ['ecco', 'hier ist er'],
      'anni': ["l'anno", 'Jahre'],
      'preferisce': ['preferire', 'möchten Sie lieber'],
      'preferirei': ['preferire', 'ich hätte lieber'],
      'pagata': ['pagare', 'bezahlt'],
      'dia': ['dare', 'geben Sie (mi dia = geben Sie mir)'],
      'fatto': ['fare', 'gemacht (ecco fatto = so, fertig)'],
      'arriveranno': ['arrivare', 'werden ankommen'],
      'sul': ['su + il', 'auf das'],
      'conto': ['il conto', 'Konto (auch: Rechnung)'],
      'giorni': ['il giorno', 'Tagen'],
      'mille': ['mille', 'tausend (grazie mille = vielen Dank)'],
      'stato': ['essere', 'gewesen (è stato = Sie waren)'],
      'figuri': ['figurarsi', 'gern geschehen (si figuri = Sie-Form)', 'sich vorstellen (figurati = gern geschehen)'],
      'torni': ['tornare', 'kommen Sie wieder'],
      'trovarci': ['trovare', 'uns besuchen'],
    },
    uebersetzung: {
      'Oggi la signora torna al negozio con la caffettiera e lo scontrino.': 'Heute geht die Dame mit der Espressokanne und dem Kassenbon zurück ins Geschäft.',
    },
    fragen: [
      { frage: 'Was ist mit der Espressokanne los?', antworten: ['Sie ist kaputt, es kommt kein Kaffee heraus', 'Sie ist zu klein', 'Sie hat die falsche Farbe'] },
      { frage: 'Was möchte Frau Bianchi?', antworten: ['Ihr Geld zurück', 'Eine neue Kanne', 'Einen Gutschein'] },
      { frage: 'Wann ist das Geld auf dem Konto?', antworten: ['In drei Tagen', 'Sofort', 'In zwei Wochen'] },
    ],
  },

  {
    id: 'ripasso-7', titel: 'Una lettera al giornale', art: 'Text', stufe: 'B1',
    text: `Caro direttore,

le scrivo perché sono molto arrabbiata. Domenica scorsa sono andata con i miei figli a vedere la nuova mostra al Museo Civico. Il museo era stato restaurato per due anni e tutti i giornali avevano scritto articoli sulla mostra.

Quando siamo arrivati, però, il museo era chiuso. Sulla porta c'era solo un foglio: «Chiuso per problemi». Non lo avevamo saputo prima.

Penso che non sia giusto. Credo che i visitatori debbano sapere prima se un museo è chiuso. Se il museo resta chiuso, il comune deve dirlo subito.

Se il direttore del museo legge questa lettera, gli chiedo una cosa: ci dica quando il museo sarà riaperto! I miei figli vogliono ancora vedere la mostra.

Grazie e saluti,
Francesca Neri, Verona`,
    woerter: {
      'caro': ['caro', 'lieber (Anrede im Brief)'],
      'le': ['le', 'Ihnen (le scrivo = ich schreibe Ihnen)'],
      'scrivo': ['scrivere', 'ich schreibe'],
      'arrabbiata': ['arrabbiato', 'wütend', 'wütend; verärgert'],
      'scorsa': ['scorso', 'letzten'],
      'andata': ['andare', 'gegangen'],
      'miei': ['mio', 'meinen (Mehrzahl)'],
      'figli': ['il figlio', 'Kindern; Söhnen'],
      'nuova': ['nuovo', 'neue'],
      'museo': ['il museo', 'Museum'],
      'civico': ['Civico', 'städtisch (Museo Civico = Stadtmuseum)'],
      'era': ['essere', 'war'],
      'stato': ['essere', 'worden'],
      'restaurato': ['restaurare', 'restauriert'],
      'tutti': ['tutto', 'alle'],
      'giornali': ['il giornale', 'Zeitungen'],
      'avevano': ['avere', 'hatten'],
      'scritto': ['scrivere', 'geschrieben'],
      'articoli': ["l'articolo", 'Artikel (Mehrzahl)'],
      'siamo': ['essere', 'wir sind'],
      'arrivati': ['arrivare', 'angekommen'],
      'chiuso': ['chiuso', 'geschlossen'],
      "c'era": ['esserci', 'da war'],
      'foglio': ['il foglio', 'Blatt (Papier)', 'das Blatt'],
      'problemi': ['il problema', 'Probleme'],
      'avevamo': ['avere', 'wir hatten'],
      'saputo': ['sapere', 'gewusst'],
      'penso': ['pensare', 'ich denke'],
      'sia': ['essere', 'ist (nach penso che)'],
      'credo': ['credere', 'ich glaube'],
      'visitatori': ['il visitatore', 'Besucher (Mehrzahl)'],
      'debbano': ['dovere', 'müssen (nach credo che)'],
      'resta': ['restare', 'bleibt'],
      'deve': ['dovere', 'muss'],
      'dirlo': ['dire', 'es sagen'],
      'legge': ['leggere', 'liest'],
      'chiedo': ['chiedere', 'ich bitte um; ich frage'],
      'dica': ['dire', 'sagen Sie (ci dica = sagen Sie uns)'],
      'sarà': ['essere', 'wird'],
      'riaperto': ['aprire', 'wieder geöffnet (riaprire)'],
      'vogliono': ['volere', 'wollen'],
      'saluti': ['il saluto', 'Grüße', 'der Gruß'],
      'francesca': ['Francesca', 'Francesca (Vorname)'],
      'neri': ['Neri', 'Neri (Nachname)'],
      'verona': ['Verona', 'Verona (Stadt)'],
    },
    uebersetzung: {
      'le scrivo perché sono molto arrabbiata.': 'ich schreibe Ihnen, weil ich sehr wütend bin.',
      'Penso che non sia giusto.': 'Ich finde, dass das nicht richtig ist.',
      'Credo che i visitatori debbano sapere prima se un museo è chiuso.': 'Ich glaube, dass die Besucher vorher wissen müssen, ob ein Museum geschlossen ist.',
      'Se il museo resta chiuso, il comune deve dirlo subito.': 'Wenn das Museum geschlossen bleibt, muss die Stadt es sofort sagen.',
      'Non lo avevamo saputo prima.': 'Wir hatten es vorher nicht gewusst.',
      'I miei figli vogliono ancora vedere la mostra.': 'Meine Kinder wollen die Ausstellung immer noch sehen.',
    },
    fragen: [
      { frage: 'Warum ist Francesca wütend?', antworten: ['Das Museum war ohne Ankündigung geschlossen', 'Der Eintritt war zu teuer', 'Die Ausstellung war schlecht'] },
      { frage: 'Was war an der Tür?', antworten: ['Ein Zettel', 'Ein Polizist', 'Nichts'] },
      { frage: 'Was möchte sie vom Museumsdirektor wissen?', antworten: ['Wann das Museum wieder öffnet', 'Wie viel der Eintritt kostet', 'Wer die Bilder gemalt hat'] },
    ],
  },
);

LESETEXTE.push(
  // ---------------------------------------------------------------- B2
  {
    id: 'lotteria', titel: 'Se vincessi un milione…', art: 'Text', stufe: 'B2',
    text: `Che cosa faresti se vincessi un milione di euro alla lotteria? Lo abbiamo chiesto ai nostri lettori. Ecco alcune risposte.

Giovanna, 52 anni: «Se vincessi un milione, smetterei subito di lavorare. Comprerei una villa al mare e regalerei una casa a ciascuno dei miei figli. Il resto lo darei ai poveri.»

Stefano, 37 anni: «Io farei il giro del mondo. Se avessi tanti soldi, non resterei mai nello stesso posto per più di un mese. Ma non comprerei cose di lusso: mi piace una vita semplice.»

Rita, 68 anni: «Sinceramente? Non cambierei quasi niente. Se fossi ricca, forse sarei meno felice. La felicità non dipende dai soldi. Ma magari vincessi: così potrei aiutare mia sorella!»`,
    woerter: {
      'faresti': ['fare', 'würdest du machen'],
      'vincessi': ['vincere', 'wenn du / ich gewinnen würdest / würde'],
      'milione': ['il milione', 'Million'],
      'abbiamo': ['avere', 'wir haben'],
      'chiesto': ['chiedere', 'gefragt'],
      'nostri': ['nostro', 'unsere (Mehrzahl)'],
      'lettori': ['il lettore', 'Leser (Mehrzahl)', 'der Leser'],
      'alcune': ['alcuno', 'einige', 'einige; irgendein'],
      'risposte': ['la risposta', 'Antworten'],
      'giovanna': ['Giovanna', 'Giovanna (Vorname)'],
      'anni': ["l'anno", 'Jahre'],
      'smetterei': ['smettere', 'ich würde aufhören'],
      'comprerei': ['comprare', 'ich würde kaufen'],
      'regalerei': ['regalare', 'ich würde schenken'],
      'ciascuno': ['ciascuno', 'jedem (einzelnen)', 'jeder (einzelne)'],
      'miei': ['mio', 'meinen (Mehrzahl)'],
      'figli': ['il figlio', 'Kindern'],
      'darei': ['dare', 'ich würde geben'],
      'poveri': ['povero', 'den Armen'],
      'stefano': ['Stefano', 'Stefano (Vorname)'],
      'farei': ['fare', 'ich würde machen'],
      'giro': ['il giro', 'Runde; Reise (il giro del mondo = Weltreise)', 'die Runde; die Rundreise'],
      'avessi': ['avere', 'wenn ich hätte'],
      'resterei': ['restare', 'ich würde bleiben'],
      'cose': ['la cosa', 'Sachen'],
      'rita': ['Rita', 'Rita (Vorname)'],
      'sinceramente': ['sinceramente', 'ehrlich gesagt', 'ehrlich'],
      'cambierei': ['cambiare', 'ich würde ändern'],
      'fossi': ['essere', 'wenn ich wäre'],
      'ricca': ['ricco', 'reich'],
      'sarei': ['essere', 'ich wäre'],
      'dipende': ['dipendere', 'hängt ab', 'abhängen'],
      'dai': ['da + i', 'von den'],
      'potrei': ['potere', 'ich könnte'],
      'sorella': ['la sorella', 'Schwester'],
    },
    uebersetzung: {
      'Ecco alcune risposte.': 'Hier sind einige Antworten.',
      'Lo abbiamo chiesto ai nostri lettori.': 'Wir haben unsere Leser gefragt.',
    },
    fragen: [
      { frage: 'Was würde Giovanna ihren Kindern schenken?', antworten: ['Jedem ein Haus', 'Ein Auto', 'Eine Reise'] },
      { frage: 'Was würde Stefano machen?', antworten: ['Eine Weltreise', 'Eine Villa kaufen', 'Weiter arbeiten'] },
      { frage: 'Was denkt Rita über Geld?', antworten: ['Glück hängt nicht vom Geld ab', 'Mit Geld ist man immer glücklich', 'Sie möchte reich sein'] },
    ],
  },

  {
    id: 'viaggio-sfortunato', titel: 'Un viaggio sfortunato', art: 'Text', stufe: 'B2',
    text: `Lo scorso luglio Matteo voleva andare a trovare sua sorella a Palermo. Avrebbe dovuto prendere il volo delle sette e mezza da Milano, ma quel giorno c'era uno sciopero e il volo è stato cancellato.

«Nessuno mi aveva avvisato!» racconta Matteo, ancora arrabbiato. «Avrei preso il treno, ma ormai era troppo tardi.»

Così ha dovuto aspettare sei ore in coda all'aeroporto. Alla fine ha preso un volo per Catania, ma lì ha perso la coincidenza per Palermo. E il suo bagaglio? È arrivato a Palermo due giorni dopo di lui.

«Avrei potuto restare a casa», dice oggi ridendo. «Mia sorella dice che è stata colpa mia: avrei dovuto scegliere il treno subito. Forse ha ragione. Peccato!»`,
    woerter: {
      'scorso': ['scorso', 'letzten'],
      'luglio': ['luglio', 'Juli', 'Juli'],
      'matteo': ['Matteo', 'Matteo (Vorname)'],
      'voleva': ['volere', 'wollte'],
      'trovare': ['trovare', 'besuchen (andare a trovare)'],
      'sua': ['suo', 'seine'],
      'palermo': ['Palermo', 'Palermo (Stadt)'],
      'avrebbe': ['avere', 'hätte (avrebbe dovuto = hätte sollen)'],
      'dovuto': ['dovere', 'gemusst (avrebbe dovuto = hätte sollen)'],
      'mezza': ['mezzo', 'halb (le sette e mezza = halb acht)'],
      'milano': ['Milano', 'Mailand'],
      "c'era": ['esserci', 'es gab'],
      'stato': ['essere', 'worden (è stato cancellato = wurde gestrichen)'],
      'cancellato': ['cancellare', 'gestrichen'],
      'aveva': ['avere', 'hatte'],
      'avvisato': ['avvisare', 'benachrichtigt'],
      'racconta': ['raccontare', 'erzählt'],
      'avrei': ['avere', 'ich hätte'],
      'preso': ['prendere', 'genommen'],
      'ormai': ['ormai', 'inzwischen; schon', 'inzwischen; nunmehr'],
      'era': ['essere', 'war'],
      'ha': ['avere', 'hat'],
      'catania': ['Catania', 'Catania (Stadt)'],
      'perso': ['perdere', 'verpasst'],
      'suo': ['suo', 'sein'],
      'arrivato': ['arrivare', 'angekommen'],
      'giorni': ['il giorno', 'Tage'],
      'potuto': ['potere', 'gekonnt (avrei potuto = hätte können)'],
      'dice': ['dire', 'sagt'],
      'ridendo': ['ridere', 'lachend'],
      'mia': ['mio', 'meine'],
      'stata': ['essere', 'gewesen'],
      'ragione': ['la ragione', 'recht (avere ragione = recht haben)', 'die Vernunft; das Recht'],
    },
    uebersetzung: {
      'Alla fine ha preso un volo per Catania, ma lì ha perso la coincidenza per Palermo.': 'Am Ende hat er einen Flug nach Catania genommen, aber dort hat er den Anschluss nach Palermo verpasst.',
      'E il suo bagaglio?': 'Und sein Gepäck?',
      'È arrivato a Palermo due giorni dopo di lui.': 'Es kam zwei Tage nach ihm in Palermo an.',
      "Così ha dovuto aspettare sei ore in coda all'aeroporto.": 'Also musste er sechs Stunden am Flughafen in der Schlange warten.',
    },
    fragen: [
      { frage: 'Warum wurde der Flug gestrichen?', antworten: ['Wegen eines Streiks', 'Wegen eines Gewitters', 'Das Flugzeug war kaputt'] },
      { frage: 'Was ist in Catania passiert?', antworten: ['Er hat den Anschluss verpasst', 'Er hat seine Schwester getroffen', 'Er hat ein Auto gemietet'] },
      { frage: 'Was hätte er laut seiner Schwester tun sollen?', antworten: ['Gleich den Zug nehmen', 'Zu Hause bleiben', 'Früher aufstehen'] },
    ],
  },

  {
    id: 'furto', titel: 'Furto in gioielleria', art: 'Nachricht', stufe: 'B2',
    text: `Roma – Nella notte tra sabato e domenica alcuni ladri sono entrati in una gioielleria del quartiere San Lorenzo e hanno rubato molti gioielli.

Secondo la polizia, sembra che i ladri siano entrati da una finestra. È possibile che abbiano lavorato per più di due ore: l'allarme non ha suonato. «Pensiamo che i ladri conoscessero bene il negozio», ha detto la polizia.

Un vicino di casa ha notato due uomini con una grande borsa alle quattro del mattino. «Credevo che fossero operai», dice. Le telecamere del quartiere hanno visto una macchina grigia che è scappata verso il centro.

Franco Bellini, il gioielliere, è disperato: «Non capisco come sia stato possibile. Spero che la polizia arresti presto i ladri.» Intanto le indagini continuano.`,
    woerter: {
      'roma': ['Roma', 'Rom'],
      'alcuni': ['alcuno', 'einige', 'einige; irgendein'],
      'ladri': ['il ladro', 'Diebe'],
      'entrati': ['entrare', 'eingedrungen; hineingegangen'],
      'san': ['San Lorenzo', 'San Lorenzo (Stadtviertel in Rom)'],
      'lorenzo': ['San Lorenzo', 'San Lorenzo (Stadtviertel in Rom)'],
      'rubato': ['rubare', 'gestohlen'],
      'molti': ['molto', 'viele'],
      'gioielli': ['il gioiello', 'Schmuckstücke'],
      'sembra': ['sembrare', 'scheint'],
      'siano': ['essere', 'sind (nach sembra che)'],
      'abbiano': ['avere', 'haben (nach è possibile che)'],
      'lavorato': ['lavorare', 'gearbeitet'],
      'suonato': ['suonare', 'geläutet; losgegangen', 'klingeln; läuten'],
      'pensiamo': ['pensare', 'wir denken'],
      'conoscessero': ['conoscere', 'kannten (nach pensiamo che)'],
      'detto': ['dire', 'gesagt'],
      'notato': ['notare', 'bemerkt'],
      'mattino': ['il mattino', 'Morgen (alle quattro del mattino = um vier Uhr morgens)', 'der Morgen'],
      'uomini': ["l'uomo", 'Männer (Mehrzahl: gli uomini)'],
      'credevo': ['credere', 'ich glaubte'],
      'fossero': ['essere', 'wären (nach credevo che)'],
      'operai': ["l'operaio", 'Arbeiter (Mehrzahl)', 'der Arbeiter'],
      'dice': ['dire', 'sagt'],
      'telecamere': ['la telecamera', 'Kameras'],
      'visto': ['vedere', 'gesehen; aufgenommen'],
      'grigia': ['grigio', 'graues'],
      'scappata': ['scappare', 'geflohen'],
      'verso': ['verso', 'in Richtung', 'gegen; in Richtung'],
      'franco': ['Franco', 'Franco (Vorname)'],
      'bellini': ['Bellini', 'Bellini (Nachname)'],
      'gioielliere': ['il gioielliere', 'Juwelier', 'der Juwelier'],
      'capisco': ['capire', 'ich verstehe'],
      'sia': ['essere', 'ist (nach non capisco come)'],
      'stato': ['essere', 'gewesen'],
      'spero': ['sperare', 'ich hoffe'],
      'arresti': ['arrestare', 'festnimmt (nach spero che)'],
      'intanto': ['intanto', 'inzwischen', 'inzwischen; währenddessen'],
      'indagini': ["l'indagine", 'Ermittlungen'],
      'continuano': ['continuare', 'gehen weiter', 'weitermachen; fortsetzen'],
    },
    uebersetzung: {
      'Secondo la polizia, sembra che i ladri siano entrati da una finestra.': 'Laut Polizei sind die Diebe anscheinend durch ein Fenster eingestiegen.',
      'Intanto le indagini continuano.': 'Die Ermittlungen gehen inzwischen weiter.',
    },
    fragen: [
      { frage: 'Wie sind die Diebe wahrscheinlich hineingekommen?', antworten: ['Durch ein Fenster', 'Durch die Tür', 'Über das Dach'] },
      { frage: 'Was hat der Nachbar gesehen?', antworten: ['Zwei Männer mit einer großen Tasche', 'Ein Polizeiauto', 'Nichts'] },
      { frage: 'Warum glaubt die Polizei, dass die Diebe den Laden kannten?', antworten: ['Der Alarm ging nicht los', 'Sie hatten einen Schlüssel', 'Ein Zeuge hat es gesagt'] },
    ],
  },

  {
    id: 'margherita', titel: 'La leggenda della pizza Margherita', art: 'Text', stufe: 'B2',
    text: `Nel giugno del 1889 il re Umberto I e la regina Margherita visitarono Napoli. La regina aveva sentito parlare della pizza, un piatto semplice che mangiava il popolo, e volle assaggiarla.

Così il pizzaiolo più famoso della città, Raffaele Esposito, fu chiamato dalla regina. Esposito preparò tre pizze diverse. Per una di queste ebbe un'idea: usò il pomodoro, la mozzarella e il basilico, perché avevano i colori della bandiera: rosso, bianco e verde.

La regina assaggiò le pizze e scelse proprio quella. Esposito, felice, le diede il nome della regina. Nacque così la pizza Margherita.

Oggi molti dicono che questa storia è solo una leggenda: pizze con pomodoro e mozzarella c'erano già prima. Ma una cosa è sicura: la Margherita diventò la pizza più famosa del mondo.`,
    woerter: {
      'giugno': ['giugno', 'Juni', 'Juni'],
      'umberto': ['Umberto', 'Umberto I. (König von Italien)'],
      'margherita': ['Margherita', 'Margherita (Name der Königin)'],
      'visitarono': ['visitare', 'besuchten'],
      'napoli': ['Napoli', 'Neapel'],
      'aveva': ['avere', 'hatte'],
      'sentito': ['sentire', 'gehört (sentire parlare = davon hören)'],
      'mangiava': ['mangiare', 'aß'],
      'volle': ['volere', 'wollte'],
      'assaggiarla': ['assaggiare', 'sie probieren'],
      'raffaele': ['Raffaele', 'Raffaele (Vorname)'],
      'esposito': ['Esposito', 'Esposito (Nachname)'],
      'fu': ['essere', 'wurde; war'],
      'chiamato': ['chiamare', 'gerufen'],
      'preparò': ['preparare', 'bereitete zu'],
      'pizze': ['la pizza', 'Pizzen'],
      'pizza': ['la pizza', 'Pizza', 'die Pizza'],
      'diverse': ['diverso', 'verschiedene'],
      'ebbe': ['avere', 'hatte'],
      "un'": ["un'", 'eine (vor Vokal)'],
      'usò': ['usare', 'benutzte'],
      'avevano': ['avere', 'hatten'],
      'colori': ['il colore', 'Farben'],
      'assaggiò': ['assaggiare', 'probierte'],
      'scelse': ['scegliere', 'wählte'],
      'proprio': ['proprio', 'genau; gerade', 'genau; eigen'],
      'le': ['le', 'ihr'],
      'diede': ['dare', 'gab'],
      'nacque': ['nascere', 'entstand; wurde geboren'],
      'molti': ['molto', 'viele'],
      'dicono': ['dire', 'sagen'],
      "c'erano": ['esserci', 'es gab'],
      'sicura': ['sicuro', 'sicher'],
      'diventò': ['diventare', 'wurde'],
      'famosa': ['famoso', 'berühmt'],
    },
    uebersetzung: {
      'La regina assaggiò le pizze e scelse proprio quella.': 'Die Königin probierte die Pizzen und wählte genau diese.',
      'Esposito, felice, le diede il nome della regina.': 'Esposito gab ihr glücklich den Namen der Königin.',
      'Nacque così la pizza Margherita.': 'So entstand die Pizza Margherita.',
      'Esposito preparò tre pizze diverse.': 'Esposito bereitete drei verschiedene Pizzen zu.',
    },
    fragen: [
      { frage: 'Warum hat Esposito Tomate, Mozzarella und Basilikum genommen?', antworten: ['Wegen der Farben der Fahne', 'Weil die Königin sie mochte', 'Weil sie billig waren'] },
      { frage: 'Wer besuchte 1889 Neapel?', antworten: ['Der König und die Königin', 'Ein berühmter Koch', 'Touristen aus Rom'] },
      { frage: 'Was sagen viele heute über die Geschichte?', antworten: ['Sie ist eher eine Legende', 'Sie ist ganz sicher wahr', 'Sie spielt in Rom'] },
    ],
  },

  {
    id: 'ripasso-8', titel: 'Il biglietto perduto', art: 'Text', stufe: 'B2',
    text: `Tutto cominciò un lunedì di marzo. Anna Ricci comprò un biglietto della lotteria nel bar sotto casa, come ogni settimana. Due giorni dopo lesse sul giornale i numeri vincenti: erano i suoi! Aveva vinto un milione di euro.

Ma il biglietto non c'era più. Anna cercò in tutta la casa, nella borsa, nelle tasche. Niente. «Avrei dovuto metterlo in un posto sicuro», pensò disperata.

La sera il barista la chiamò: «Signora, credo che abbia dimenticato qualcosa da noi!» Il biglietto era sul bancone. Qualcuno l'aveva trovato e l'aveva dato al barista.

Con una parte dei soldi Anna ha regalato al barista una vacanza al mare. «Se tutti fossero così onesti, il mondo sarebbe più bello», dice.`,
    woerter: {
      'cominciò': ['cominciare', 'begann'],
      'lunedì': ['lunedì', 'Montag', 'Montag'],
      'marzo': ['marzo', 'März', 'März'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'ricci': ['Ricci', 'Ricci (Nachname)'],
      'comprò': ['comprare', 'kaufte'],
      'giorni': ['il giorno', 'Tage'],
      'lesse': ['leggere', 'las'],
      'numeri': ['il numero', 'Zahlen'],
      'vincenti': ['vincere', 'gewinnende (i numeri vincenti = die Gewinnzahlen)'],
      'erano': ['essere', 'waren'],
      'suoi': ['suo', 'ihre (Mehrzahl)'],
      'aveva': ['avere', 'hatte'],
      'vinto': ['vincere', 'gewonnen'],
      "c'era": ['esserci', 'war da'],
      'cercò': ['cercare', 'suchte'],
      'tutta': ['tutto', 'ganz'],
      'tasche': ['la tasca', 'Taschen (an der Kleidung)', 'die Tasche (an der Kleidung)'],
      'avrei': ['avere', 'ich hätte'],
      'dovuto': ['dovere', 'gemusst (avrei dovuto = hätte sollen)'],
      'metterlo': ['mettere', 'ihn legen'],
      'pensò': ['pensare', 'dachte'],
      'disperata': ['disperato', 'verzweifelt'],
      'barista': ['il barista', 'Barmann', 'der Barmann; die Barfrau'],
      'chiamò': ['chiamare', 'rief an'],
      'credo': ['credere', 'ich glaube'],
      'abbia': ['avere', 'haben (nach credo che)'],
      'dimenticato': ['dimenticare', 'vergessen'],
      'noi': ['noi', 'uns (da noi = bei uns)'],
      'era': ['essere', 'war'],
      'bancone': ['il bancone', 'Theke', 'die Theke'],
      'qualcuno': ['qualcuno', 'jemand', 'jemand'],
      "l'": ['lo', "ihn (l'aveva trovato = hatte ihn gefunden)"],
      'trovato': ['trovare', 'gefunden'],
      'dato': ['dare', 'gegeben'],
      'parte': ['la parte', 'Teil', 'der Teil'],
      'regalato': ['regalare', 'geschenkt'],
      'tutti': ['tutto', 'alle'],
      'fossero': ['essere', 'wären'],
      'onesti': ['onesto', 'ehrlich (Mehrzahl)', 'ehrlich'],
      'sarebbe': ['essere', 'wäre'],
      'bello': ['bello', 'schöner'],
      'dice': ['dire', 'sagt'],
    },
    uebersetzung: {
      'Tutto cominciò un lunedì di marzo.': 'Alles begann an einem Montag im März.',
      'Aveva vinto un milione di euro.': 'Sie hatte eine Million Euro gewonnen.',
      'Ma il biglietto non c\'era più.': 'Aber der Schein war nicht mehr da.',
      'Anna cercò in tutta la casa, nella borsa, nelle tasche.': 'Anna suchte im ganzen Haus, in der Handtasche, in den Taschen.',
      'Qualcuno l\'aveva trovato e l\'aveva dato al barista.': 'Jemand hatte ihn gefunden und dem Barmann gegeben.',
      'Il biglietto era sul bancone.': 'Der Schein lag auf der Theke.',
    },
    fragen: [
      { frage: 'Wie viel hatte Anna gewonnen?', antworten: ['Eine Million Euro', 'Tausend Euro', 'Eine Reise'] },
      { frage: 'Wo war der Lottoschein?', antworten: ['Auf der Theke in der Bar', 'In ihrer Handtasche', 'Bei der Polizei'] },
      { frage: 'Was hat Anna dem Barmann geschenkt?', antworten: ['Einen Urlaub am Meer', 'Eine Million', 'Ein Auto'] },
    ],
  },

  {
    id: 'intervista-cuoca', titel: 'Intervista a una cuoca', art: 'Text', stufe: 'B2',
    text: `La settimana scorsa la nostra giornalista ha parlato con Lucia Moretti, la cuoca del ristorante «Il Fico» di Bologna, che ha appena ricevuto la sua prima stella.

Lucia ci ha raccontato che aveva cominciato a cucinare a dodici anni, nella cucina di sua nonna. Ha spiegato che la nonna le aveva insegnato tutto. Diceva sempre che la pasta fresca si fa con le mani, non con le macchine.

Le abbiamo chiesto quale fosse il segreto del suo successo. Ha risposto che non c'era nessun segreto: usava solo prodotti locali di grande qualità e rispettava le stagioni. Ha affermato che in inverno non avrebbe mai servito pomodori freschi.

Alla fine ha detto che il premio era anche merito della sua squadra. E ha aggiunto che l'anno dopo avrebbe aperto un secondo ristorante, più piccolo e più semplice, per chi vuole mangiare bene senza spendere troppo.`,
    woerter: {
      'scorsa': ['scorso', 'letzte'],
      'nostra': ['nostro', 'unsere'],
      'giornalista': ['il giornalista', 'Journalistin'],
      'parlato': ['parlare', 'gesprochen'],
      'lucia': ['Lucia', 'Lucia (Vorname)'],
      'moretti': ['Moretti', 'Moretti (Nachname)'],
      'cuoca': ['il cuoco', 'Köchin'],
      'fico': ['Il Fico', '„Die Feige“ (Name des Restaurants)'],
      'bologna': ['Bologna', 'Bologna (Stadt)'],
      'appena': ['appena', 'gerade erst'],
      'ricevuto': ['ricevere', 'bekommen'],
      'sua': ['suo', 'ihre'],
      'prima': ['primo', 'erste'],
      'raccontato': ['raccontare', 'erzählt'],
      'aveva': ['avere', 'hatte'],
      'cominciato': ['cominciare', 'angefangen'],
      'anni': ["l'anno", 'Jahren'],
      'spiegato': ['spiegare', 'erklärt'],
      'insegnato': ['insegnare', 'beigebracht'],
      'diceva': ['dire', 'sagte (immer)'],
      'fresca': ['fresco', 'frische'],
      'fa': ['fare', 'macht (si fa = man macht)'],
      'mani': ['la mano', 'Händen (Mehrzahl: le mani)'],
      'macchine': ['la macchina', 'Maschinen'],
      'abbiamo': ['avere', 'wir haben'],
      'chiesto': ['chiedere', 'gefragt'],
      'quale': ['quale', 'was; welches'],
      'fosse': ['essere', 'sei; wäre'],
      'suo': ['suo', 'ihres'],
      'risposto': ['rispondere', 'geantwortet'],
      "c'era": ['esserci', 'es gab'],
      'nessun': ['nessuno', 'kein'],
      'usava': ['usare', 'sie benutzte'],
      'prodotti': ['il prodotto', 'Produkte'],
      'locali': ['locale', 'aus der Gegend'],
      'rispettava': ['rispettare', 'sie achtete auf'],
      'stagioni': ['la stagione', 'Jahreszeiten'],
      'affermato': ['affermare', 'erklärt'],
      'avrebbe': ['avere', 'würde (avrebbe servito = würde servieren)'],
      'servito': ['servire', 'serviert'],
      'pomodori': ['il pomodoro', 'Tomaten'],
      'freschi': ['fresco', 'frische'],
      'detto': ['dire', 'gesagt'],
      'merito': ['il merito', 'Verdienst', 'der Verdienst'],
      'squadra': ['la squadra', 'Team; Mannschaft', 'die Mannschaft; das Team'],
      'aggiunto': ['aggiungere', 'hinzugefügt'],
      'aperto': ['aprire', 'eröffnet'],
      'piccolo': ['piccolo', 'kleiner'],
      'vuole': ['volere', 'will'],
    },
    uebersetzung: {
      'Ha spiegato che la nonna le aveva insegnato tutto.': 'Sie erklärte, dass die Oma ihr alles beigebracht hatte.',
      'Diceva sempre che la pasta fresca si fa con le mani, non con le macchine.': 'Sie sagte immer, dass man frische Pasta mit den Händen macht, nicht mit Maschinen.',
      'Le abbiamo chiesto quale fosse il segreto del suo successo.': 'Wir haben sie gefragt, was das Geheimnis ihres Erfolgs sei.',
      'Ha affermato che in inverno non avrebbe mai servito pomodori freschi.': 'Sie erklärte, dass sie im Winter nie frische Tomaten servieren würde.',
    },
    fragen: [
      { frage: 'Wer hat Lucia das Kochen beigebracht?', antworten: ['Ihre Oma', 'Ein berühmter Koch', 'Ihre Mutter'] },
      { frage: 'Was ist Lucias „Geheimnis“?', antworten: ['Gute Produkte aus der Gegend und die Jahreszeiten', 'Ein besonderes Gewürz', 'Teure Maschinen'] },
      { frage: 'Was plant sie für nächstes Jahr?', antworten: ['Ein zweites, einfacheres Restaurant', 'Ein Kochbuch', 'Eine Reise nach Japan'] },
    ],
  },

  {
    id: 'occasione', titel: 'Se avessi preso quel treno', art: 'Text', stufe: 'B2',
    text: `Nel 1998 Elena era una studentessa tedesca e studiava a Bologna. Una sera, alla stazione, perse l'ultimo treno per Firenze. Sul binario c'era un ragazzo che aveva perso lo stesso treno: si chiamava Luca.

Per caso aspettarono insieme il treno della mattina dopo. Parlarono tutta la notte, risero molto e si raccontarono la loro vita. Quella notte Elena si innamorò.

Oggi Elena e Luca sono sposati da venticinque anni e vivono a Bologna con i loro tre figli.

«Se avessi preso quel treno, non avrei mai conosciuto Luca», dice Elena. «E se non fossi venuta in Italia, oggi non parlerei italiano e la mia vita sarebbe completamente diversa.»

Luca sorride: «Io invece penso che ci saremmo incontrati comunque. Era il destino.»`,
    woerter: {
      'elena': ['Elena', 'Elena (Vorname)'],
      'era': ['essere', 'war'],
      'studentessa': ['lo studente', 'Studentin'],
      'tedesca': ['tedesco', 'deutsche', 'deutsch'],
      'studiava': ['studiare', 'studierte'],
      'bologna': ['Bologna', 'Bologna (Stadt)'],
      'perse': ['perdere', 'verpasste'],
      "l'": ["l'", 'den (vor Vokal)'],
      'firenze': ['Firenze', 'Florenz'],
      'sul': ['su + il', 'auf dem'],
      "c'era": ['esserci', 'da war'],
      'aveva': ['avere', 'hatte'],
      'perso': ['perdere', 'verpasst'],
      'chiamava': ['chiamare', 'hieß (si chiamava)'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'aspettarono': ['aspettare', 'warteten'],
      'parlarono': ['parlare', 'redeten'],
      'tutta': ['tutto', 'die ganze'],
      'risero': ['ridere', 'lachten'],
      'raccontarono': ['raccontare', 'erzählten (si raccontarono = erzählten sich)'],
      'innamorò': ['innamorarsi', 'verliebte sich (si innamorò)'],
      'sposati': ['sposarsi', 'verheiratet'],
      'venticinque': ['venticinque', 'fünfundzwanzig', 'fünfundzwanzig'],
      'vivono': ['vivere', 'leben'],
      'figli': ['il figlio', 'Kindern'],
      'avessi': ['avere', 'wenn ich … hätte'],
      'preso': ['prendere', 'genommen'],
      'avrei': ['avere', 'ich hätte'],
      'conosciuto': ['conoscere', 'kennengelernt'],
      'dice': ['dire', 'sagt'],
      'fossi': ['essere', 'wenn ich … wäre'],
      'venuta': ['venire', 'gekommen'],
      'italia': ['Italia', 'Italien'],
      'parlerei': ['parlare', 'ich würde sprechen'],
      'italiano': ["l'italiano", 'Italienisch', 'Italienisch'],
      'mia': ['mio', 'mein'],
      'sarebbe': ['essere', 'wäre'],
      'completamente': ['completamente', 'völlig', 'völlig'],
      'diversa': ['diverso', 'anders'],
      'sorride': ['sorridere', 'lächelt', 'lächeln'],
      'penso': ['pensare', 'ich denke'],
      'saremmo': ['essere', 'wir wären'],
      'incontrati': ['incontrare', 'begegnet'],
    },
    uebersetzung: {
      'Quella notte Elena si innamorò.': 'In dieser Nacht verliebte sich Elena.',
      'Oggi Elena e Luca sono sposati da venticinque anni e vivono a Bologna con i loro tre figli.': 'Heute sind Elena und Luca seit fünfundzwanzig Jahren verheiratet und leben mit ihren drei Kindern in Bologna.',
      "Per caso aspettarono insieme il treno della mattina dopo.": 'Zufällig warteten sie gemeinsam auf den Zug am nächsten Morgen.',
      "Una sera, alla stazione, perse l'ultimo treno per Firenze.": 'Eines Abends verpasste sie am Bahnhof den letzten Zug nach Florenz.',
    },
    fragen: [
      { frage: 'Wie haben sich Elena und Luca kennengelernt?', antworten: ['Beide hatten denselben Zug verpasst', 'An der Universität', 'Im Urlaub am Meer'] },
      { frage: 'Wie lange sind sie verheiratet?', antworten: ['25 Jahre', '10 Jahre', '5 Jahre'] },
      { frage: 'Was glaubt Luca?', antworten: ['Sie hätten sich sowieso getroffen', 'Es war reiner Zufall', 'Sie hätten sich nie getroffen'] },
    ],
  },

  {
    id: 'lavoro-casa', titel: 'Lavorare da casa: un sogno?', art: 'Nachricht', stufe: 'B2',
    text: `Da qualche anno molte aziende italiane permettono ai dipendenti di lavorare da casa almeno due giorni alla settimana. Una ricerca dell'Università di Milano spiega vantaggi e svantaggi.

Il primo vantaggio è il tempo. I pendolari risparmiano circa un'ora e mezza al giorno, purché la tecnologia funzioni bene. Anche i datori di lavoro sono contenti: benché i dipendenti non siano in sede, spesso lavorano di più.

Ma ci sono anche svantaggi. Molti dipendenti si sentono soli. «Benché io ami il mio lavoro, mi mancano i colleghi», dice Giulia, 41 anni. Per questo molte aziende organizzano riunioni in ufficio, affinché i colleghi possano vedersi almeno una volta alla settimana.

Secondo la ricerca, la soluzione migliore è un po' a casa e un po' in ufficio. A meno che non si abiti molto lontano dalla sede.`,
    woerter: {
      'molte': ['molto', 'viele'],
      'aziende': ["l'azienda", 'Firmen'],
      'italiane': ['italiano', 'italienische', 'italienisch'],
      'permettono': ['permettere', 'erlauben'],
      'dipendenti': ['il dipendente', 'Angestellten'],
      'giorni': ['il giorno', 'Tage'],
      "dell'": ["di + l'", 'der'],
      'milano': ['Milano', 'Mailand'],
      'spiega': ['spiegare', 'erklärt'],
      'vantaggi': ['il vantaggio', 'Vorteile'],
      'svantaggi': ['lo svantaggio', 'Nachteile'],
      'primo': ['primo', 'erste'],
      'pendolari': ['il pendolare', 'Pendler'],
      'risparmiano': ['risparmiare', 'sparen'],
      'mezza': ['mezzo', 'halb'],
      'funzioni': ['funzionare', 'funktioniert (nach purché)'],
      'datori': ['il datore di lavoro', 'Arbeitgeber (Mehrzahl)'],
      'contenti': ['contento', 'zufrieden'],
      'siano': ['essere', 'sind (nach benché)'],
      'lavorano': ['lavorare', 'sie arbeiten'],
      'sentono': ['sentire', 'fühlen sich (si sentono)'],
      'soli': ['solo', 'allein; einsam'],
      'ami': ['amare', 'liebe (nach benché)', 'lieben'],
      'mio': ['mio', 'meine'],
      'mancano': ['mancare', 'fehlen (mi mancano = mir fehlen)'],
      'colleghi': ['il collega', 'Kollegen'],
      'dice': ['dire', 'sagt'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'anni': ["l'anno", 'Jahre'],
      'organizzano': ['organizzare', 'organisieren'],
      'riunioni': ['la riunione', 'Besprechungen'],
      'possano': ['potere', 'können (nach affinché)'],
      'vedersi': ['vedere', 'sich sehen'],
      'abiti': ['abitare', 'wohnt (a meno che non si abiti = es sei denn, man wohnt)'],
      'meno': ['meno', 'weniger (a meno che = es sei denn)'],
    },
    uebersetzung: {
      'Il primo vantaggio è il tempo.': 'Der erste Vorteil ist die Zeit.',
      'Ma ci sono anche svantaggi.': 'Aber es gibt auch Nachteile.',
      'Molti dipendenti si sentono soli.': 'Viele Angestellte fühlen sich einsam.',
      'A meno che non si abiti molto lontano dalla sede.': 'Es sei denn, man wohnt sehr weit vom Büro entfernt.',
      "Una ricerca dell'Università di Milano spiega vantaggi e svantaggi.": 'Eine Studie der Universität Mailand erklärt Vor- und Nachteile.',
    },
    fragen: [
      { frage: 'Wie viel Zeit sparen Pendler am Tag?', antworten: ['Etwa anderthalb Stunden', 'Zehn Minuten', 'Einen halben Tag'] },
      { frage: 'Was fehlt Giulia?', antworten: ['Die Kollegen', 'Ein guter Computer', 'Mehr Geld'] },
      { frage: 'Was ist laut der Studie die beste Lösung?', antworten: ['Teils zu Hause, teils im Büro', 'Nur zu Hause', 'Nur im Büro'] },
    ],
  },

  {
    id: 'pesto', titel: 'Il pesto genovese', art: 'Rezept', stufe: 'B2',
    text: `Il pesto è una salsa tipica della Liguria, la regione di Genova. Chi lo assaggia una volta non lo dimentica più.

## Ingredienti per 4 persone
- 50 grammi di foglie di basilico
- 30 grammi di pinoli
- 1 spicchio d'aglio
- 60 grammi di parmigiano
- 30 grammi di pecorino
- 1 bicchiere di olio
- un pizzico di sale

## Preparazione
Il pesto vero si fa nel mortaio, il quale deve essere di marmo o di legno. Chi non ha un mortaio può usare anche una macchina, ma ciò che si ottiene non è la stessa cosa.

Lava le foglie di basilico. Metti nel mortaio l'aglio e il sale, poi aggiungi il basilico, un po' alla volta. Schiaccia le foglie piano: i genovesi dicono che il basilico non va tritato, ma «accarezzato».

Aggiungi i pinoli, poi i formaggi. Alla fine versa l'olio piano piano e mescola. Il pesto, le cui origini sono antiche, si conserva in frigorifero per due o tre giorni, purché sia coperto d'olio.

Servi il pesto con le trofie, la pasta tipica genovese.`,
    woerter: {
      'tipica': ['tipico', 'typische'],
      'liguria': ['Liguria', 'Ligurien'],
      'genova': ['Genova', 'Genua'],
      'assaggia': ['assaggiare', 'probiert'],
      'dimentica': ['dimenticare', 'vergisst'],
      'ingredienti': ["l'ingrediente", 'Zutaten'],
      'persone': ['la persona', 'Personen'],
      'grammi': ['il grammo', 'Gramm'],
      'foglie': ['la foglia', 'Blätter'],
      "d'": ['di', 'von; aus (vor Vokal)'],
      'vero': ['vero', 'echte'],
      'fa': ['fare', 'macht (si fa = man macht)'],
      'deve': ['dovere', 'muss'],
      'essere': ['essere', 'sein'],
      'può': ['potere', 'kann'],
      'ciò': ['ciò', 'das (ciò che = das, was)', 'das'],
      'ottiene': ['ottenere', 'man erhält (si ottiene)', 'erhalten'],
      'stessa': ['stesso', 'gleiche'],
      'lava': ['lavare', 'wasche!'],
      'metti': ['mettere', 'gib!'],
      'aggiungi': ['aggiungere', 'gib dazu!'],
      'schiaccia': ['schiacciare', 'zerdrücke!'],
      'piano': ['piano', 'sanft; langsam (piano piano = ganz langsam)', 'langsam; leise'],
      'genovesi': ['genovese', 'die Genuesen', 'aus Genua'],
      'dicono': ['dire', 'sagen'],
      'tritato': ['tritare', 'gehackt (non va tritato = darf nicht gehackt werden)'],
      'accarezzato': ['accarezzare', 'gestreichelt', 'streicheln'],
      'formaggi': ['il formaggio', 'Käsesorten'],
      'versa': ['versare', 'gieße!'],
      'mescola': ['mescolare', 'rühre um!'],
      'cui': ['cui', 'dessen (le cui origini = dessen Ursprünge)'],
      'origini': ["l'origine", 'Ursprünge'],
      'antiche': ['antico', 'alt'],
      'conserva': ['conservare', 'man bewahrt auf (si conserva)'],
      'giorni': ['il giorno', 'Tage'],
      'sia': ['essere', 'ist (nach purché)'],
      'coperto': ['coprire', 'bedeckt'],
      'servi': ['servire', 'serviere!'],
      'trofie': ['le trofie', 'Trofie (kleine gedrehte Nudeln)', 'die Trofie (Nudeln)'],
      'genovese': ['genovese', 'aus Genua', 'aus Genua'],
    },
    uebersetzung: {
      'Chi lo assaggia una volta non lo dimentica più.': 'Wer es einmal probiert, vergisst es nie wieder.',
      'Lava le foglie di basilico.': 'Wasch die Basilikumblätter.',
      'Aggiungi i pinoli, poi i formaggi.': 'Gib die Pinienkerne dazu, dann den Käse.',
      "Alla fine versa l'olio piano piano e mescola.": 'Zum Schluss gieß das Öl ganz langsam dazu und rühr um.',
      'Servi il pesto con le trofie, la pasta tipica genovese.': 'Serviere das Pesto mit Trofie, der typischen Pasta aus Genua.',
    },
    fragen: [
      { frage: 'Woraus soll der Mörser sein?', antworten: ['Aus Marmor oder Holz', 'Aus Metall', 'Aus Glas'] },
      { frage: 'Was sagen die Genuesen über das Basilikum?', antworten: ['Man soll es sanft zerdrücken, nicht hacken', 'Man soll es kochen', 'Man soll es sehr fein hacken'] },
      { frage: 'Wie lange hält sich das Pesto im Kühlschrank?', antworten: ['Zwei bis drei Tage, mit Öl bedeckt', 'Einen Monat', 'Nur eine Stunde'] },
    ],
  },

  {
    id: 'ripasso-9', titel: 'Una cena da ricordare', art: 'Text', stufe: 'B2',
    text: `Marco aveva prenotato un tavolo nel ristorante di Lucia Moretti, la cuoca della quale tutti parlavano. Era il compleanno di sua moglie Sofia, e voleva che tutto fosse perfetto.

Il cameriere disse che il tavolo era pronto e che la cuoca avrebbe preparato un menù speciale. Sofia era felice, benché non le piacessero molto i ristoranti eleganti.

Durante la cena Marco le ricordò come si erano conosciuti: «Se quel giorno non avessi perso il treno, non ti avrei mai incontrata.» Sofia rise: «E se tu non fossi stato così timido, mi avresti invitata a cena molto prima!»

Alla fine arrivò la cuoca. Spiegò che il dolce, il cui segreto era un po' di basilico, era un regalo per Sofia. «Ciò che conta», disse, «è festeggiare con chi ami.»`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'aveva': ['avere', 'hatte'],
      'prenotato': ['prenotare', 'reserviert'],
      'lucia': ['Lucia', 'Lucia (Vorname)'],
      'moretti': ['Moretti', 'Moretti (Nachname)'],
      'cuoca': ['il cuoco', 'Köchin'],
      'quale': ['quale', 'der (della quale = von der)'],
      'parlavano': ['parlare', 'sprachen'],
      'era': ['essere', 'war'],
      'sua': ['suo', 'seiner'],
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'voleva': ['volere', 'wollte'],
      'fosse': ['essere', 'wäre; sei'],
      'perfetto': ['perfetto', 'perfekt', 'perfekt'],
      'disse': ['dire', 'sagte'],
      'avrebbe': ['avere', 'würde (avrebbe preparato = würde zubereiten)'],
      'preparato': ['preparare', 'zubereitet'],
      'speciale': ['speciale', 'besonderes', 'besonders'],
      'le': ['le', 'ihr'],
      'piacessero': ['piacere', 'gefielen (nach benché)'],
      'ristoranti': ['il ristorante', 'Restaurants'],
      'eleganti': ['elegante', 'elegant (Mehrzahl)', 'elegant'],
      'ricordò': ['ricordare', 'erinnerte'],
      'erano': ['essere', 'hatten (si erano conosciuti = hatten sich kennengelernt)'],
      'conosciuti': ['conoscere', 'kennengelernt'],
      'avessi': ['avere', 'wenn ich … hätte'],
      'perso': ['perdere', 'verpasst'],
      'avrei': ['avere', 'ich hätte'],
      'incontrata': ['incontrare', 'getroffen'],
      'rise': ['ridere', 'lachte'],
      'fossi': ['essere', 'wenn du … wärst'],
      'stato': ['essere', 'gewesen'],
      'timido': ['timido', 'schüchtern', 'schüchtern'],
      'avresti': ['avere', 'du hättest'],
      'invitata': ['invitare', 'eingeladen', 'einladen'],
      'arrivò': ['arrivare', 'kam'],
      'spiegò': ['spiegare', 'erklärte'],
      'cui': ['cui', 'dessen'],
      'ciò': ['ciò', 'das (ciò che = das, was)'],
      'conta': ['contare', 'zählt', 'zählen'],
      'festeggiare': ['festeggiare', 'feiern', 'feiern'],
      'ami': ['amare', 'du liebst'],
    },
    uebersetzung: {
      'Alla fine arrivò la cuoca.': 'Zum Schluss kam die Köchin.',
    },
    fragen: [
      { frage: 'Warum geht Marco ins Restaurant?', antworten: ['Seine Frau hat Geburtstag', 'Er hat eine Wette verloren', 'Er will einen Job'] },
      { frage: 'Wie haben sich Marco und Sofia kennengelernt?', antworten: ['Sie hatte den Zug verpasst', 'Im Restaurant', 'Bei der Arbeit'] },
      { frage: 'Was war das Geheimnis des Desserts?', antworten: ['Ein bisschen Basilikum', 'Viel Zucker', 'Ein Glas Wein'] },
    ],
  },
);
