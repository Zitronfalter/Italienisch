// Kurze Texte für die Wort-Lektionen A2 (nach Lektion 9–18).
// Aufbau wie in texte.js. Prüfen: node werkzeuge/lektionen-pruefen.js

LESETEXTE.push(
  {
    id: 'a2-gita', titel: 'Una gita in campagna', art: 'Text', stufe: 'A2',
    text: `Domenica scorsa abbiamo fatto una gita in campagna con un gruppo di amici.

La guida ci ha mostrato un vecchio castello sulla collina.

Abbiamo visitato anche un piccolo villaggio. Marco ha fotografato tutto con la sua macchina fotografica.

A mezzogiorno abbiamo fatto un picnic sul prato.

Il programma era un po' lungo, ma non era noioso. È stata una giornata rilassante!`,
    woerter: {
      'fotografica': ['la macchina fotografica', 'Foto- (macchina fotografica = Fotoapparat)', 'der Fotoapparat'],
      'gita': ['la gita', 'Ausflug', 'der Ausflug'],
      'vecchio': ['vecchio', 'alt', 'alt'],
      'tutto': ['tutto', 'alles', 'alles'],
      'scorsa': ['scorso', 'letzte (domenica scorsa = letzten Sonntag)'],
      'abbiamo': ['avere', 'wir haben'],
      'fatto': ['fare', 'gemacht'],
      'amici': ["l'amico", 'Freunde'],
      'ci': ['ci', 'uns'],
      'mostrato': ['mostrare', 'gezeigt', 'zeigen'],
      'visitato': ['visitare', 'besichtigt'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'fotografato': ['fotografare', 'fotografiert'],
      'sua': ['suo', 'seine'],
      'prato': ['il prato', 'Wiese', 'die Wiese'],
      'era': ['essere', 'war'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'stata': ['essere', 'gewesen (è stata = es war)'],
      'giornata': ['la giornata', 'Tag (ganzer Tag)', 'der Tag'],
    },
    uebersetzung: {
      'La guida ci ha mostrato un vecchio castello sulla collina.': 'Der Führer hat uns eine alte Burg auf dem Hügel gezeigt.',
      'Abbiamo visitato anche un piccolo villaggio.': 'Wir haben auch ein kleines Dorf besichtigt.',
      'Marco ha fotografato tutto con la sua macchina fotografica.': 'Marco hat alles mit seinem Fotoapparat fotografiert.',
      'A mezzogiorno abbiamo fatto un picnic sul prato.': 'Mittags haben wir auf der Wiese ein Picknick gemacht.',
      "Il programma era un po' lungo, ma non era noioso.": 'Das Programm war etwas lang, aber nicht langweilig.',
      'È stata una giornata rilassante!': 'Es war ein entspannender Tag!',
    },
    fragen: [
      { frage: 'Was hat der Führer gezeigt?', antworten: ['Eine alte Burg', 'Einen See', 'Eine Kirche'] },
      { frage: 'Wo haben sie mittags gegessen?', antworten: ['Auf der Wiese (Picknick)', 'Im Restaurant', 'Zu Hause'] },
      { frage: 'Wie war der Tag?', antworten: ['Entspannend', 'Langweilig', 'Anstrengend'] },
    ],
  },

  {
    id: 'a2-festa', titel: 'Una festa a sorpresa', art: 'Text', stufe: 'A2',
    text: `Sabato Paolo e Maria hanno festeggiato l'anniversario di matrimonio.

I figli hanno organizzato una festa a sorpresa e hanno invitato tutti i parenti.

Gli ospiti hanno portato fiori e regali.

Sulla torta c'erano trenta candeline!

Alla fine tutti hanno brindato agli sposi. Maria ha detto: è più bello di Natale!`,
    woerter: {
      'figli': ['il figlio', 'Kinder (Söhne und Töchter)'],
      'festa': ['la festa', 'Fest; Party', 'das Fest'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'maria': ['Maria', 'Maria (Vorname)'],
      'hanno': ['avere', 'sie haben'],
      'festeggiato': ['festeggiare', 'gefeiert'],
      'matrimonio': ['il matrimonio', 'Hochzeit (anniversario di matrimonio = Hochzeitstag)', 'die Hochzeit; die Ehe'],
      'organizzato': ['organizzare', 'organisiert'],
      'invitato': ['invitare', 'eingeladen'],
      'tutti': ['tutto', 'alle'],
      'parenti': ['il parente', 'Verwandte'],
      'ospiti': ["l'ospite", 'Gäste'],
      'portato': ['portare', 'mitgebracht'],
      'fiori': ['il fiore', 'Blumen', 'die Blume'],
      'regali': ['il regalo', 'Geschenke', 'das Geschenk'],
      "c'erano": ['esserci', 'es gab; da waren'],
      'candeline': ['la candelina', 'Geburtstagskerzen'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'brindato': ['brindare', 'angestoßen'],
      'sposi': ['lo sposo', 'Brautpaar (gli sposi)'],
      'detto': ['dire', 'gesagt'],
      'bello': ['bello', 'schön', 'schön'],
    },
    uebersetzung: {
      "Sabato Paolo e Maria hanno festeggiato l'anniversario di matrimonio.": 'Am Samstag haben Paolo und Maria ihren Hochzeitstag gefeiert.',
      'I figli hanno organizzato una festa a sorpresa e hanno invitato tutti i parenti.': 'Die Kinder haben eine Überraschungsparty organisiert und alle Verwandten eingeladen.',
      'Gli ospiti hanno portato fiori e regali.': 'Die Gäste haben Blumen und Geschenke mitgebracht.',
      "Sulla torta c'erano trenta candeline!": 'Auf dem Kuchen waren dreißig Kerzen!',
      'Alla fine tutti hanno brindato agli sposi.': 'Am Ende haben alle auf das Paar angestoßen.',
      'Maria ha detto: è più bello di Natale!': 'Maria hat gesagt: Es ist schöner als Weihnachten!',
    },
    fragen: [
      { frage: 'Was haben Paolo und Maria gefeiert?', antworten: ['Ihren Hochzeitstag', 'Weihnachten', 'Einen Geburtstag'] },
      { frage: 'Wer hat die Party organisiert?', antworten: ['Die Kinder', 'Die Gäste', 'Maria'] },
      { frage: 'Wie viele Kerzen waren auf dem Kuchen?', antworten: ['Dreißig', 'Zehn', 'Fünfzig'] },
    ],
  },

  {
    id: 'a2-emozioni', titel: 'Una settimana difficile', art: 'Text', stufe: 'A2',
    text: `Lunedì Giulia era stressata: ha lavorato dodici ore.

Martedì ha ricevuto una notizia ed era molto triste. Ha pianto.

Mercoledì era preoccupata per l'esame di sua sorella.

Giovedì è arrivata una sorpresa: Luca le ha regalato dei fiori. Giulia era emozionata e ha sorriso.

Venerdì era stanca, ma piena di gioia.`,
    woerter: {
      'dodici': ['dodici', 'zwölf', 'zwölf'],
      'notizia': ['la notizia', 'Nachricht', 'die Nachricht'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'era': ['essere', 'war'],
      'stressata': ['stressato', 'gestresst'],
      'lavorato': ['lavorare', 'gearbeitet'],
      'ricevuto': ['ricevere', 'bekommen'],
      'ed': ['e', 'und'],
      'pianto': ['piangere', 'geweint'],
      'preoccupata': ['preoccupato', 'besorgt'],
      'esame': ["l'esame", 'Prüfung', 'die Prüfung'],
      'sua': ['suo', 'ihre'],
      'arrivata': ['arrivare', 'angekommen (è arrivata = kam)'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'regalato': ['regalare', 'geschenkt', 'schenken'],
      'dei': ['dei', 'einige'],
      'fiori': ['il fiore', 'Blumen', 'die Blume'],
      'emozionata': ['emozionato', 'gerührt'],
      'sorriso': ['sorridere', 'gelächelt'],
      'stanca': ['stanco', 'müde'],
      'piena': ['pieno', 'voll', 'voll'],
    },
    uebersetzung: {
      'Lunedì Giulia era stressata: ha lavorato dodici ore.': 'Am Montag war Giulia gestresst: Sie hat zwölf Stunden gearbeitet.',
      'Martedì ha ricevuto una notizia ed era molto triste.': 'Am Dienstag hat sie eine Nachricht bekommen und war sehr traurig.',
      'Ha pianto.': 'Sie hat geweint.',
      "Mercoledì era preoccupata per l'esame di sua sorella.": 'Am Mittwoch war sie besorgt wegen der Prüfung ihrer Schwester.',
      'Giovedì è arrivata una sorpresa: Luca le ha regalato dei fiori.': 'Am Donnerstag kam eine Überraschung: Luca hat ihr Blumen geschenkt.',
      'Giulia era emozionata e ha sorriso.': 'Giulia war gerührt und hat gelächelt.',
      'Venerdì era stanca, ma piena di gioia.': 'Am Freitag war sie müde, aber voller Freude.',
    },
    fragen: [
      { frage: 'Warum war Giulia am Montag gestresst?', antworten: ['Sie hat zwölf Stunden gearbeitet', 'Sie hatte eine Prüfung', 'Sie war krank'] },
      { frage: 'Was hat Luca gemacht?', antworten: ['Er hat ihr Blumen geschenkt', 'Er hat geweint', 'Er hat gekocht'] },
      { frage: 'Wie war Giulia am Freitag?', antworten: ['Müde, aber voller Freude', 'Traurig', 'Wütend'] },
    ],
  },

  {
    id: 'a2-campeggio', titel: 'In campeggio o in albergo?', art: 'Text', stufe: 'A2',
    text: `L'anno scorso Marco e Anna sono andati in campeggio. Hanno dormito in tenda.

Quest'anno sono andati in un agriturismo in Toscana. Hanno preso una camera doppia con mezza pensione.

Sono partiti in bassa stagione: era più economico.

Hanno noleggiato due biciclette e hanno fatto molte gite.

Prima di tornare hanno comprato souvenir e hanno scritto cartoline.`,
    woerter: {
      'doppia': ['la camera doppia', 'Doppel- (camera doppia = Doppelzimmer)', 'das Doppelzimmer'],
      'anno': ["l'anno", 'Jahr', 'das Jahr'],
      'scorso': ['scorso', 'letzte (l’anno scorso = letztes Jahr)', 'letzter; vergangen'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'andati': ['andare', 'gegangen; gefahren'],
      'hanno': ['avere', 'sie haben'],
      'dormito': ['dormire', 'geschlafen'],
      'toscana': ['Toscana', 'die Toskana'],
      'preso': ['prendere', 'genommen'],
      'partiti': ['partire', 'abgefahren'],
      'era': ['essere', 'war'],
      'economico': ['economico', 'günstig', 'günstig; wirtschaftlich'],
      'noleggiato': ['noleggiare', 'gemietet (Fahrrad, Auto)', 'mieten (Fahrrad, Auto)'],
      'biciclette': ['la bicicletta', 'Fahrräder', 'das Fahrrad'],
      'fatto': ['fare', 'gemacht'],
      'gite': ['la gita', 'Ausflüge', 'der Ausflug'],
      'prima': ['prima', 'vor (prima di = bevor)', 'vorher; zuerst'],
      'comprato': ['comprare', 'gekauft', 'kaufen'],
      'scritto': ['scrivere', 'geschrieben', 'schreiben'],
      'cartoline': ['la cartolina', 'Postkarten'],
    },
    uebersetzung: {
      "L'anno scorso Marco e Anna sono andati in campeggio.": 'Letztes Jahr sind Marco und Anna campen gegangen.',
      'Hanno dormito in tenda.': 'Sie haben im Zelt geschlafen.',
      "Quest'anno sono andati in un agriturismo in Toscana.": 'Dieses Jahr sind sie auf einen Bauernhof in der Toskana gefahren.',
      'Hanno preso una camera doppia con mezza pensione.': 'Sie haben ein Doppelzimmer mit Halbpension genommen.',
      'Sono partiti in bassa stagione: era più economico.': 'Sie sind in der Nebensaison gefahren: Das war günstiger.',
      'Hanno noleggiato due biciclette e hanno fatto molte gite.': 'Sie haben zwei Fahrräder gemietet und viele Ausflüge gemacht.',
      'Prima di tornare hanno comprato souvenir e hanno scritto cartoline.': 'Vor der Rückfahrt haben sie Andenken gekauft und Postkarten geschrieben.',
    },
    fragen: [
      { frage: 'Wo haben sie letztes Jahr geschlafen?', antworten: ['Im Zelt', 'Im Hotel', 'Auf einem Schiff'] },
      { frage: 'Warum sind sie in der Nebensaison gefahren?', antworten: ['Es war günstiger', 'Es war wärmer', 'Sie hatten frei'] },
      { frage: 'Was haben sie gemietet?', antworten: ['Zwei Fahrräder', 'Ein Auto', 'Ein Boot'] },
    ],
  },

  {
    id: 'a2-spiaggia', titel: 'Una giornata al mare', art: 'Text', stufe: 'A2',
    text: `Ieri siamo andati al mare. Abbiamo preso un ombrellone e due sdraio.

Io ho messo la crema solare e ho preso il sole.

I bambini hanno fatto il bagno. Le onde erano alte, ma il bagnino era vicino.

Poi abbiamo cercato conchiglie sulla sabbia e siamo saliti sugli scogli.

La sera ero rossa come un pomodoro: ho dimenticato gli occhiali da sole e il cappello!`,
    woerter: {
      'solare': ['la crema solare', 'Sonnen- (crema solare = Sonnencreme)', 'die Sonnencreme'],
      'ieri': ['ieri', 'gestern', 'gestern'],
      'siamo': ['essere', 'wir sind'],
      'andati': ['andare', 'gegangen; gefahren'],
      'mare': ['il mare', 'Meer (al mare = ans Meer)', 'das Meer'],
      'abbiamo': ['avere', 'wir haben'],
      'preso': ['prendere', 'genommen (preso il sole = mich gesonnt)'],
      'messo': ['mettere', 'aufgetragen; gelegt'],
      'bambini': ['il bambino', 'Kinder', 'das Kind'],
      'fatto': ['fare', 'gemacht (fatto il bagno = gebadet)'],
      'onde': ["l'onda", 'Wellen'],
      'erano': ['essere', 'waren'],
      'alte': ['alto', 'hoch'],
      'era': ['essere', 'war'],
      'vicino': ['vicino', 'in der Nähe', 'nah'],
      'cercato': ['cercare', 'gesucht'],
      'conchiglie': ['la conchiglia', 'Muscheln'],
      'saliti': ['salire', 'hinaufgeklettert'],
      'scogli': ['lo scoglio', 'Felsen'],
      'ero': ['essere', 'ich war'],
      'rossa': ['rosso', 'rot'],
      'come': ['come', 'wie', 'wie'],
      'dimenticato': ['dimenticare', 'vergessen'],
      'cappello': ['il cappello', 'Hut', 'der Hut'],
    },
    uebersetzung: {
      'Ieri siamo andati al mare.': 'Gestern sind wir ans Meer gefahren.',
      'Abbiamo preso un ombrellone e due sdraio.': 'Wir haben einen Sonnenschirm und zwei Liegestühle genommen.',
      'Io ho messo la crema solare e ho preso il sole.': 'Ich habe Sonnencreme aufgetragen und mich gesonnt.',
      'I bambini hanno fatto il bagno.': 'Die Kinder haben gebadet.',
      'Le onde erano alte, ma il bagnino era vicino.': 'Die Wellen waren hoch, aber der Bademeister war in der Nähe.',
      'Poi abbiamo cercato conchiglie sulla sabbia e siamo saliti sugli scogli.': 'Dann haben wir Muscheln im Sand gesucht und sind auf die Felsen geklettert.',
      'La sera ero rossa come un pomodoro: ho dimenticato gli occhiali da sole e il cappello!': 'Am Abend war ich rot wie eine Tomate: Ich habe Sonnenbrille und Hut vergessen!',
    },
    fragen: [
      { frage: 'Was haben sie am Strand gemietet?', antworten: ['Einen Sonnenschirm und zwei Liegestühle', 'Ein Boot', 'Nichts'] },
      { frage: 'Wie waren die Wellen?', antworten: ['Hoch', 'Klein', 'Es gab keine'] },
      { frage: 'Was hat die Erzählerin vergessen?', antworten: ['Sonnenbrille und Hut', 'Die Sonnencreme', 'Das Handtuch'] },
    ],
  },

  {
    id: 'a2-montagna', titel: 'Sul ghiacciaio', art: 'Text', stufe: 'A2',
    text: `In agosto Luca e Sara sono andati in montagna.

Sono saliti con la funivia e poi sono andati a piedi fino al ghiacciaio.

Il sentiero era faticoso, ma il panorama era bellissimo: la valle, il fiume e i prati verdi.

A mezzogiorno si sono fermati in una baita.

Sono scesi la sera, stanchi ma felici. Sara ha detto: amo la natura!`,
    woerter: {
      'fino': ['fino a', 'bis (fino a = bis)', 'bis'],
      'agosto': ['agosto', 'August', 'August'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'andati': ['andare', 'gegangen; gefahren'],
      'montagna': ['la montagna', 'Berge (in montagna = in die Berge)', 'der Berg'],
      'saliti': ['salire', 'hinaufgefahren'],
      'sentiero': ['il sentiero', 'Weg; Pfad', 'der Pfad'],
      'era': ['essere', 'war'],
      'bellissimo': ['bello', 'wunderschön'],
      'prati': ['il prato', 'Wiesen'],
      'verdi': ['verde', 'grün', 'grün'],
      'fermati': ['fermarsi', 'angehalten (si sono fermati = sie haben Halt gemacht)', 'anhalten'],
      'scesi': ['scendere', 'hinuntergegangen'],
      'stanchi': ['stanco', 'müde'],
      'felici': ['felice', 'glücklich', 'glücklich'],
      'detto': ['dire', 'gesagt'],
      'amo': ['amare', 'ich liebe', 'lieben'],
    },
    uebersetzung: {
      'In agosto Luca e Sara sono andati in montagna.': 'Im August sind Luca und Sara in die Berge gefahren.',
      'Sono saliti con la funivia e poi sono andati a piedi fino al ghiacciaio.': 'Sie sind mit der Seilbahn hinaufgefahren und dann zu Fuß bis zum Gletscher gegangen.',
      'Il sentiero era faticoso, ma il panorama era bellissimo: la valle, il fiume e i prati verdi.': 'Der Weg war anstrengend, aber die Aussicht war wunderschön: das Tal, der Fluss und die grünen Wiesen.',
      'A mezzogiorno si sono fermati in una baita.': 'Mittags haben sie in einer Berghütte Halt gemacht.',
      'Sono scesi la sera, stanchi ma felici.': 'Am Abend sind sie hinuntergegangen, müde, aber glücklich.',
      'Sara ha detto: amo la natura!': 'Sara hat gesagt: Ich liebe die Natur!',
    },
    fragen: [
      { frage: 'Wie sind sie hinaufgekommen?', antworten: ['Mit der Seilbahn, dann zu Fuß', 'Mit dem Auto', 'Mit dem Zug'] },
      { frage: 'Wie war der Weg?', antworten: ['Anstrengend', 'Kurz', 'Langweilig'] },
      { frage: 'Wo haben sie mittags Halt gemacht?', antworten: ['In einer Berghütte', 'Am Fluss', 'Auf dem Gletscher'] },
    ],
  },

  {
    id: 'a2-griglia', titel: 'Verdure alla griglia', art: 'Text', stufe: 'A2',
    text: `Lava le zucchine, le melanzane e i peperoni.

Taglia tutto a fette e griglia le verdure per pochi minuti.

Intanto sminuzza l'aglio e il prezzemolo.

Metti le verdure in un piatto e lasciale raffreddare.

Condisci con olio, sale e un po' di aceto.`,
    woerter: {
      'tutto': ['tutto', 'alles', 'alles'],
      'lava': ['lavare', 'wasch!'],
      'zucchine': ['la zucchina', 'Zucchini'],
      'melanzane': ['la melanzana', 'Auberginen'],
      'peperoni': ['il peperone', 'Paprika'],
      'taglia': ['tagliare', 'schneide!'],
      'fette': ['la fetta', 'Scheiben (a fette = in Scheiben)'],
      'griglia': ['grigliare', 'grille!'],
      'verdure': ['la verdura', 'Gemüse', 'das Gemüse'],
      'per': ['per', 'für; lang (Zeit)', 'für'],
      'pochi': ['poco', 'wenige'],
      'minuti': ['il minuto', 'Minuten'],
      'intanto': ['intanto', 'inzwischen', 'inzwischen'],
      'sminuzza': ['sminuzzare', 'zerkleinere!'],
      'prezzemolo': ['il prezzemolo', 'Petersilie', 'die Petersilie'],
      'metti': ['mettere', 'leg!'],
      'piatto': ['il piatto', 'Teller', 'der Teller'],
      'lasciale': ['lasciare', 'lass sie (lasciale raffreddare = lass sie abkühlen)', 'lassen'],
      'condisci': ['condire', 'würze!'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
    },
    uebersetzung: {
      'Lava le zucchine, le melanzane e i peperoni.': 'Wasch die Zucchini, die Auberginen und die Paprika.',
      'Taglia tutto a fette e griglia le verdure per pochi minuti.': 'Schneide alles in Scheiben und grille das Gemüse ein paar Minuten.',
      "Intanto sminuzza l'aglio e il prezzemolo.": 'Zerkleinere inzwischen den Knoblauch und die Petersilie.',
      'Metti le verdure in un piatto e lasciale raffreddare.': 'Leg das Gemüse auf einen Teller und lass es abkühlen.',
      "Condisci con olio, sale e un po' di aceto.": 'Würze mit Öl, Salz und ein bisschen Essig.',
    },
    fragen: [
      { frage: 'Welches Gemüse wird gegrillt?', antworten: ['Zucchini, Auberginen, Paprika', 'Kartoffeln', 'Tomaten'] },
      { frage: 'Was zerkleinert man inzwischen?', antworten: ['Knoblauch und Petersilie', 'Zwiebeln', 'Käse'] },
      { frage: 'Womit würzt man am Ende?', antworten: ['Öl, Salz und Essig', 'Zucker', 'Sahne'] },
    ],
  },

  {
    id: 'a2-spezie', titel: 'Il giardino delle erbe', art: 'Text', stufe: 'A2',
    text: `La nonna di Sofia ha un piccolo giardino con le erbe.

C'è il rosmarino per l'arrosto, la salvia per il burro e il timo per il pesce.

C'è anche la menta: la nonna la mette nel tè.

Sulla pizza la nonna mette origano, olive, capperi e acciughe.

Per i dolci usa la cannella, la vaniglia, le noci e le mandorle.`,
    woerter: {
      'nonna': ['la nonna', 'Oma', 'die Großmutter'],
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'giardino': ['il giardino', 'Garten', 'der Garten'],
      'erbe': ["l'erba", 'Kräuter', 'das Kraut; das Gras'],
      'per': ['per', 'für', 'für'],
      'arrosto': ["l'arrosto", 'Braten', 'der Braten'],
      'burro': ['il burro', 'Butter', 'die Butter'],
      'pesce': ['il pesce', 'Fisch', 'der Fisch'],
      'mette': ['mettere', 'tut; legt'],
      'olive': ["l'oliva", 'Oliven'],
      'capperi': ['il cappero', 'Kapern'],
      'acciughe': ["l'acciuga", 'Sardellen'],
      'dolci': ['il dolce', 'Süßspeisen; Kuchen', 'der Nachtisch'],
      'usa': ['usare', 'benutzt', 'benutzen'],
      'vaniglia': ['la vaniglia', 'Vanille', 'die Vanille'],
      'noci': ['la noce', 'Walnüsse'],
      'mandorle': ['la mandorla', 'Mandeln'],
    },
    uebersetzung: {
      'La nonna di Sofia ha un piccolo giardino con le erbe.': 'Sofias Oma hat einen kleinen Kräutergarten.',
      "C'è il rosmarino per l'arrosto, la salvia per il burro e il timo per il pesce.": 'Es gibt Rosmarin für den Braten, Salbei für die Butter und Thymian für den Fisch.',
      "C'è anche la menta: la nonna la mette nel tè.": 'Es gibt auch Minze: Die Oma tut sie in den Tee.',
      'Sulla pizza la nonna mette origano, olive, capperi e acciughe.': 'Auf die Pizza tut die Oma Oregano, Oliven, Kapern und Sardellen.',
      'Per i dolci usa la cannella, la vaniglia, le noci e le mandorle.': 'Für Süßes benutzt sie Zimt, Vanille, Walnüsse und Mandeln.',
    },
    fragen: [
      { frage: 'Wofür benutzt die Oma Rosmarin?', antworten: ['Für den Braten', 'Für den Tee', 'Für Kuchen'] },
      { frage: 'Was tut sie in den Tee?', antworten: ['Minze', 'Salbei', 'Zimt'] },
      { frage: 'Was kommt auf die Pizza?', antworten: ['Oregano, Oliven, Kapern, Sardellen', 'Zimt und Mandeln', 'Minze'] },
    ],
  },

  {
    id: 'a2-sapori', titel: 'Che sapore ha?', art: 'Text', stufe: 'A2',
    text: `Marco è al ristorante.

La pasta all'arrabbiata è piccante e molto saporita.

Il pane è croccante fuori e morbido dentro.

La carne invece è dura e la zuppa è insipida: non ha gusto.

Il dolce ha un profumo delizioso, ma la porzione è piccola. Marco ne ordina un'altra!`,
    woerter: {
      'tutto': ['tutto', 'alles', 'alles'],
      'arrabbiata': ['arrabbiato', '„wütend“ (all’arrabbiata = mit scharfer Tomatensoße)', 'wütend'],
      'ristorante': ['il ristorante', 'Restaurant', 'das Restaurant'],
      'marco': ['Marco', 'Marco (Vorname)'],
      "all'arrabbiata": ["all'arrabbiata", 'scharfe Tomatensoße (Pasta all’arrabbiata)'],
      'saporita': ['saporito', 'würzig'],
      'fuori': ['fuori', 'außen', 'draußen; außen'],
      'dentro': ['dentro', 'innen', 'drinnen; innen'],
      'carne': ['la carne', 'Fleisch', 'das Fleisch'],
      'invece': ['invece', 'dagegen', 'stattdessen; dagegen'],
      'dura': ['duro', 'hart; zäh'],
      'zuppa': ['la zuppa', 'Suppe', 'die Suppe'],
      'insipida': ['insipido', 'fade'],
      'dolce': ['il dolce', 'Nachtisch', 'der Nachtisch'],
      'piccola': ['piccolo', 'klein', 'klein'],
      'ordina': ['ordinare', 'bestellt', 'bestellen'],
    },
    uebersetzung: {
      'Marco è al ristorante.': 'Marco ist im Restaurant.',
      "La pasta all'arrabbiata è piccante e molto saporita.": 'Die Pasta all’arrabbiata ist scharf und sehr würzig.',
      'Il pane è croccante fuori e morbido dentro.': 'Das Brot ist außen knusprig und innen weich.',
      'La carne invece è dura e la zuppa è insipida: non ha gusto.': 'Das Fleisch dagegen ist zäh und die Suppe ist fade: Sie hat keinen Geschmack.',
      'Il dolce ha un profumo delizioso, ma la porzione è piccola.': 'Der Nachtisch duftet köstlich, aber die Portion ist klein.',
      "Marco ne ordina un'altra!": 'Marco bestellt noch eine!',
    },
    fragen: [
      { frage: 'Wie ist die Pasta?', antworten: ['Scharf und würzig', 'Fade', 'Süß'] },
      { frage: 'Was schmeckt Marco nicht?', antworten: ['Das Fleisch und die Suppe', 'Das Brot', 'Der Nachtisch'] },
      { frage: 'Was macht Marco am Ende?', antworten: ['Er bestellt noch einen Nachtisch', 'Er geht', 'Er zahlt'] },
    ],
  },

  {
    id: 'a2-negozi', titel: 'I negozi del quartiere', art: 'Text', stufe: 'A2',
    text: `Anna abita in un quartiere con tanti negozi.

Il pane lo compra dal fornaio, la carne in macelleria e il pesce in pescheria.

La frutta la prende dal fruttivendolo all'angolo.

Il giornale lo compra all'edicola, i francobolli dal tabaccaio.

Il sabato va in libreria. Il centro commerciale? Non le piace.`,
    woerter: {
      'commerciale': ['il centro commerciale', 'Einkaufs- (centro commerciale = Einkaufszentrum)', 'das Einkaufszentrum'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'abita': ['abitare', 'wohnt'],
      'quartiere': ['il quartiere', 'Stadtviertel', 'das Viertel'],
      'negozi': ['il negozio', 'Geschäfte', 'der Laden'],
      'compra': ['comprare', 'kauft', 'kaufen'],
      'carne': ['la carne', 'Fleisch', 'das Fleisch'],
      'pesce': ['il pesce', 'Fisch', 'der Fisch'],
      'frutta': ['la frutta', 'Obst', 'das Obst'],
      'prende': ['prendere', 'holt; nimmt'],
      'giornale': ['il giornale', 'Zeitung', 'die Zeitung'],
      'francobolli': ['il francobollo', 'Briefmarken', 'die Briefmarke'],
    },
    uebersetzung: {
      'Anna abita in un quartiere con tanti negozi.': 'Anna wohnt in einem Viertel mit vielen Geschäften.',
      'Il pane lo compra dal fornaio, la carne in macelleria e il pesce in pescheria.': 'Das Brot kauft sie beim Bäcker, das Fleisch in der Metzgerei und den Fisch im Fischgeschäft.',
      "La frutta la prende dal fruttivendolo all'angolo.": 'Das Obst holt sie beim Obsthändler an der Ecke.',
      "Il giornale lo compra all'edicola, i francobolli dal tabaccaio.": 'Die Zeitung kauft sie am Kiosk, die Briefmarken im Tabakladen.',
      'Il sabato va in libreria.': 'Samstags geht sie in die Buchhandlung.',
      'Il centro commerciale?': 'Das Einkaufszentrum?',
      'Non le piace.': 'Das mag sie nicht.',
    },
    fragen: [
      { frage: 'Wo kauft Anna das Brot?', antworten: ['Beim Bäcker', 'Im Supermarkt', 'Am Kiosk'] },
      { frage: 'Wo kauft sie Briefmarken?', antworten: ['Im Tabakladen', 'Bei der Post', 'In der Buchhandlung'] },
      { frage: 'Wie findet sie das Einkaufszentrum?', antworten: ['Sie mag es nicht', 'Sie liebt es', 'Sie kennt es nicht'] },
    ],
  },

  {
    id: 'a2-saldi', titel: 'I saldi', art: 'Text', stufe: 'A2',
    text: `A gennaio ci sono i saldi. Giulia vede una giacca in vetrina e entra nel negozio.

Nel reparto donna la prova nel camerino. È di una buona marca, ma è costosa.

C'è un'offerta: meno trenta per cento!

Giulia la compra. Alla cassa c'è una lunga fila.

La commessa le dà la ricevuta e una busta di carta.`,
    woerter: {
      'costosa': ['costoso', 'teuer'],
      'gennaio': ['gennaio', 'Januar', 'Januar'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'vede': ['vedere', 'sieht', 'sehen'],
      'entra': ['entrare', 'geht hinein', 'hineingehen'],
      'negozio': ['il negozio', 'Geschäft', 'der Laden'],
      'donna': ['la donna', 'Frau (reparto donna = Damenabteilung)', 'die Frau'],
      'prova': ['provare', 'probiert an'],
      'buona': ['buono', 'gut', 'gut'],
      'cento': ['cento', 'hundert (per cento = Prozent)', 'hundert'],
      'compra': ['comprare', 'kauft', 'kaufen'],
      'lunga': ['lungo', 'lang'],
      'commessa': ['il commesso', 'Verkäuferin'],
      'dà': ['dare', 'gibt', 'geben'],
      'carta': ['la carta', 'Papier', 'das Papier'],
    },
    uebersetzung: {
      'A gennaio ci sono i saldi.': 'Im Januar ist Schlussverkauf.',
      'Giulia vede una giacca in vetrina e entra nel negozio.': 'Giulia sieht eine Jacke im Schaufenster und geht in den Laden.',
      'Nel reparto donna la prova nel camerino.': 'In der Damenabteilung probiert sie sie in der Kabine an.',
      'È di una buona marca, ma è costosa.': 'Sie ist von einer guten Marke, aber teuer.',
      "C'è un'offerta: meno trenta per cento!": 'Es gibt ein Angebot: minus dreißig Prozent!',
      'Giulia la compra.': 'Giulia kauft sie.',
      "Alla cassa c'è una lunga fila.": 'An der Kasse ist eine lange Schlange.',
      'La commessa le dà la ricevuta e una busta di carta.': 'Die Verkäuferin gibt ihr die Quittung und eine Papiertüte.',
    },
    fragen: [
      { frage: 'Was sieht Giulia im Schaufenster?', antworten: ['Eine Jacke', 'Schuhe', 'Eine Tasche'] },
      { frage: 'Wie viel Rabatt gibt es?', antworten: ['30 Prozent', '50 Prozent', '10 Prozent'] },
      { frage: 'Was bekommt Giulia an der Kasse?', antworten: ['Quittung und Papiertüte', 'Ein Geschenk', 'Geld zurück'] },
    ],
  },

  {
    id: 'a2-materiali', titel: 'Di che cosa è?', art: 'Text', stufe: 'A2',
    text: `Al mercatino Sara cerca regali.

Per la mamma prende una sciarpa di seta, elegante e leggera.

Per il papà un maglione di lana a quadri: è caldo e comodo.

Per Luca una borsa di pelle e per la nonna un vaso di vetro.

Gli orecchini d'oro sono troppo cari. Sara prende gli orecchini d'argento.`,
    woerter: {
      'quelli': ['quello', 'die (jene)', 'jener'],
      'mercatino': ['il mercatino', 'kleiner Markt; Flohmarkt'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'cerca': ['cercare', 'sucht', 'suchen'],
      'regali': ['il regalo', 'Geschenke', 'das Geschenk'],
      'per': ['per', 'für', 'für'],
      'prende': ['prendere', 'nimmt'],
      'sciarpa': ['la sciarpa', 'Schal', 'der Schal'],
      'leggera': ['leggero', 'leicht'],
      'caldo': ['caldo', 'warm', 'warm'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'borsa': ['la borsa', 'Tasche', 'die Tasche'],
      'vaso': ['il vaso', 'Vase', 'die Vase'],
      'orecchini': ["l'orecchino", 'Ohrringe', 'der Ohrring'],
      'troppo': ['troppo', 'zu (viel)', 'zu viel; zu'],
      'cari': ['caro', 'teuer'],
    },
    uebersetzung: {
      'Al mercatino Sara cerca regali.': 'Auf dem kleinen Markt sucht Sara Geschenke.',
      'Per la mamma prende una sciarpa di seta, elegante e leggera.': 'Für die Mama nimmt sie einen Seidenschal, elegant und leicht.',
      'Per il papà un maglione di lana a quadri: è caldo e comodo.': 'Für den Papa einen karierten Wollpullover: Er ist warm und bequem.',
      'Per Luca una borsa di pelle e per la nonna un vaso di vetro.': 'Für Luca eine Ledertasche und für die Oma eine Glasvase.',
      "Gli orecchini d'oro sono troppo cari.": 'Die goldenen Ohrringe sind zu teuer.',
      "Sara prende gli orecchini d'argento.": 'Sara nimmt die silbernen Ohrringe.',
    },
    fragen: [
      { frage: 'Was bekommt die Mama?', antworten: ['Einen Seidenschal', 'Einen Pullover', 'Ohrringe'] },
      { frage: 'Woraus ist die Vase?', antworten: ['Aus Glas', 'Aus Holz', 'Aus Metall'] },
      { frage: 'Welche Ohrringe nimmt Sara?', antworten: ['Die silbernen', 'Die goldenen', 'Keine'] },
    ],
  },

  {
    id: 'a2-trattoria', titel: 'In trattoria', art: 'Text', stufe: 'A2',
    text: `Stasera Anna e Paolo mangiano in una piccola trattoria.

Il cameriere gli porta il menù e la lista dei vini.

Come primo piatto Anna prende la specialità della casa. È vegetariana e ha un'allergia alle noci.

Paolo ordina una bistecca al sangue. Anna gli dice: io la preferisco ben cotta!

Da bere prendono una caraffa di vino rosso.`,
    woerter: {
      'lista': ['la lista dei vini', 'Liste (lista dei vini = Weinkarte)', 'die Weinkarte'],
      'ben': ['ben cotto', 'gut (ben cotta = durchgebraten)', 'durchgebraten'],
      'piccola': ['piccolo', 'klein', 'klein'],
      'stasera': ['stasera', 'heute Abend', 'heute Abend'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'mangiano': ['mangiare', 'sie essen'],
      'porta': ['portare', 'bringt', 'bringen'],
      'come': ['come', 'als', 'wie'],
      'prende': ['prendere', 'nimmt'],
      'vegetariana': ['vegetariano', 'Vegetarierin'],
      'noci': ['la noce', 'Nüsse'],
      'ordina': ['ordinare', 'bestellt', 'bestellen'],
      'dice': ['dire', 'sagt', 'sagen'],
      'preferisco': ['preferire', 'ich mag lieber', 'bevorzugen'],
      'cotta': ['ben cotto', 'durchgebraten'],
      'prendono': ['prendere', 'sie nehmen'],
      'vino': ['il vino', 'Wein', 'der Wein'],
      'rosso': ['rosso', 'rot', 'rot'],
    },
    uebersetzung: {
      'Stasera Anna e Paolo mangiano in una piccola trattoria.': 'Heute Abend essen Anna und Paolo in einem kleinen Gasthaus.',
      'Il cameriere gli porta il menù e la lista dei vini.': 'Der Kellner bringt ihnen die Speisekarte und die Weinkarte.',
      'Come primo piatto Anna prende la specialità della casa.': 'Als ersten Gang nimmt Anna die Spezialität des Hauses.',
      "È vegetariana e ha un'allergia alle noci.": 'Sie ist Vegetarierin und hat eine Nussallergie.',
      'Paolo ordina una bistecca al sangue.': 'Paolo bestellt ein blutiges Steak.',
      'Anna gli dice: io la preferisco ben cotta!': 'Anna sagt ihm: Ich mag es lieber durchgebraten!',
      'Da bere prendono una caraffa di vino rosso.': 'Zu trinken nehmen sie eine Karaffe Rotwein.',
    },
    fragen: [
      { frage: 'Was ist Anna?', antworten: ['Vegetarierin', 'Köchin', 'Kellnerin'] },
      { frage: 'Wie möchte Paolo sein Steak?', antworten: ['Blutig', 'Durchgebraten', 'Gar nicht'] },
      { frage: 'Was trinken sie?', antworten: ['Rotwein aus der Karaffe', 'Wasser', 'Bier'] },
    ],
  },

  {
    id: 'a2-appuntamento', titel: 'Ci vediamo stasera?', art: 'Text', stufe: 'A2',
    text: `Luca scrive a Giulia: ci vediamo stasera? Ti propongo un aperitivo in piazza.

Giulia risponde: che peccato, stasera ho un impegno di lavoro.

Luca chiede: e domani? Giulia accetta volentieri.

Domani si incontrano alle sette davanti al bar.

Luca arriva puntualmente. Giulia, come sempre, arriva tardi!`,
    woerter: {
      'luca': ['Luca', 'Luca (Vorname)'],
      'scrive': ['scrivere', 'schreibt', 'schreiben'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'stasera': ['stasera', 'heute Abend', 'heute Abend'],
      'propongo': ['proporre', 'ich schlage vor'],
      'piazza': ['la piazza', 'Platz (in der Stadt)', 'der Platz'],
      'risponde': ['rispondere', 'antwortet', 'antworten'],
      'chiede': ['chiedere', 'fragt', 'fragen'],
      'accetta': ['accettare', 'nimmt an'],
      'incontrano': ['incontrarsi', 'treffen sich (si incontrano)'],
      'davanti': ['davanti', 'vor (davanti a = vor)', 'vorne; vor'],
      'arriva': ['arrivare', 'kommt an'],
      'come': ['come', 'wie', 'wie'],
    },
    uebersetzung: {
      'Luca scrive a Giulia: ci vediamo stasera?': 'Luca schreibt Giulia: Sehen wir uns heute Abend?',
      'Ti propongo un aperitivo in piazza.': 'Ich schlage dir einen Aperitif auf dem Platz vor.',
      'Giulia risponde: che peccato, stasera ho un impegno di lavoro.': 'Giulia antwortet: Wie schade, heute Abend habe ich einen beruflichen Termin.',
      'Luca chiede: e domani?': 'Luca fragt: Und morgen?',
      'Giulia accetta volentieri.': 'Giulia nimmt gern an.',
      'Domani si incontrano alle sette davanti al bar.': 'Morgen treffen sie sich um sieben vor der Bar.',
      'Luca arriva puntualmente.': 'Luca kommt pünktlich an.',
      'Giulia, come sempre, arriva tardi!': 'Giulia kommt wie immer zu spät!',
    },
    fragen: [
      { frage: 'Was schlägt Luca vor?', antworten: ['Einen Aperitif auf dem Platz', 'Ein Abendessen', 'Kino'] },
      { frage: 'Warum kann Giulia heute nicht?', antworten: ['Sie hat einen beruflichen Termin', 'Sie ist krank', 'Sie hat keine Lust'] },
      { frage: 'Wer kommt zu spät?', antworten: ['Giulia', 'Luca', 'Niemand'] },
    ],
  },

  {
    id: 'a2-tavola', titel: 'A tavola dalla nonna', art: 'Text', stufe: 'A2',
    text: `A casa della nonna l'ospitalità è sacra.

Prima di mangiare tutti dicono: buon appetito!

La nonna offre a tutti il bis. Marco le passa la saliera e rovescia la brocca dell'acqua.

Alla fine nessuno ha più fame: siamo tutti sazi.

Il nonno offre un digestivo e dice: salute! Cin cin!

Gli avanzi? La nonna ce li dà da portare a casa.`,
    woerter: {
      'buon': ['buon appetito', 'guten (buon appetito = guten Appetit)', 'guten Appetit'],
      'appetito': ['buon appetito', 'Appetit (buon appetito = guten Appetit)', 'guten Appetit'],
      'cin': ['cin cin', 'prost (cin cin)', 'prost'],
      'salute': ['salute!', 'Prost! (auch: Gesundheit!)', 'Prost; Gesundheit'],
      'nonna': ['la nonna', 'Oma', 'die Großmutter'],
      'sacra': ['sacro', 'heilig', 'heilig'],
      'prima': ['prima', 'vor (prima di = bevor)', 'vorher; zuerst'],
      'tutti': ['tutto', 'alle'],
      'dicono': ['dire', 'sie sagen'],
      'offre': ['offrire', 'bietet an'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'passa': ['passare', 'reicht'],
      'rovescia': ['rovesciare', 'kippt um'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'nessuno': ['nessuno', 'niemand', 'niemand'],
      'fame': ['avere fame', 'Hunger', 'Hunger haben'],
      'siamo': ['essere', 'wir sind'],
      'sazi': ['sazio', 'satt'],
      'nonno': ['il nonno', 'Opa', 'der Großvater'],
      'dice': ['dire', 'sagt', 'sagen'],
      'ce': ['ce', 'uns (ce li dà = gibt sie uns)'],
      'dà': ['dare', 'gibt', 'geben'],
      'portare': ['portare', 'mitnehmen; bringen', 'bringen'],
    },
    uebersetzung: {
      "A casa della nonna l'ospitalità è sacra.": 'Bei der Oma ist Gastfreundschaft heilig.',
      'Prima di mangiare tutti dicono: buon appetito!': 'Vor dem Essen sagen alle: Guten Appetit!',
      'La nonna offre a tutti il bis.': 'Die Oma bietet allen eine zweite Portion an.',
      "Marco le passa la saliera e rovescia la brocca dell'acqua.": 'Marco reicht ihr den Salzstreuer und kippt den Wasserkrug um.',
      'Alla fine nessuno ha più fame: siamo tutti sazi.': 'Am Ende hat niemand mehr Hunger: Wir sind alle satt.',
      'Il nonno offre un digestivo e dice: salute!': 'Der Opa bietet einen Verdauungsschnaps an und sagt: Prost!',
      'Gli avanzi?': 'Die Reste?',
      'La nonna ce li dà da portare a casa.': 'Die Oma gibt sie uns zum Mitnehmen.',
    },
    fragen: [
      { frage: 'Was passiert Marco?', antworten: ['Er kippt den Wasserkrug um', 'Er isst nichts', 'Er geht früh'] },
      { frage: 'Was bietet der Opa an?', antworten: ['Einen Verdauungsschnaps', 'Kaffee', 'Kuchen'] },
      { frage: 'Was passiert mit den Resten?', antworten: ['Man nimmt sie mit nach Hause', 'Sie kommen in den Müll', 'Der Hund bekommt sie'] },
    ],
  },

  {
    id: 'a2-scuola', titel: 'Quando andavo a scuola', art: 'Text', stufe: 'A2',
    text: `Quando ero piccolo, andavo a scuola a piedi.

La mia maestra si chiamava Rosa. Era severa, ma brava.

In classe scrivevamo con la penna e la matita sul quaderno.

La mia materia preferita era la geografia. La matematica era difficile: i miei voti erano brutti!

Il momento più bello era la ricreazione.`,
    woerter: {
      'ero': ['essere', 'ich war'],
      'andavo': ['andare', 'ich ging'],
      'scuola': ['la scuola', 'Schule', 'die Schule'],
      'chiamava': ['chiamarsi', 'hieß (si chiamava)'],
      'rosa': ['Rosa', 'Rosa (Vorname)'],
      'era': ['essere', 'war'],
      'severa': ['severo', 'streng', 'streng'],
      'brava': ['bravo', 'gut; tüchtig', 'tüchtig'],
      'scrivevamo': ['scrivere', 'wir schrieben'],
      'preferita': ['preferito', 'Lieblings-', 'Lieblings-'],
      'difficile': ['difficile', 'schwer', 'schwierig'],
      'miei': ['mio', 'meine'],
      'voti': ['il voto', 'Noten'],
      'erano': ['essere', 'waren'],
      'brutti': ['brutto', 'schlecht'],
      'momento': ['il momento', 'Moment', 'der Moment'],
      'bello': ['bello', 'schön', 'schön'],
    },
    uebersetzung: {
      'Quando ero piccolo, andavo a scuola a piedi.': 'Als ich klein war, ging ich zu Fuß zur Schule.',
      'La mia maestra si chiamava Rosa.': 'Meine Lehrerin hieß Rosa.',
      'Era severa, ma brava.': 'Sie war streng, aber gut.',
      'In classe scrivevamo con la penna e la matita sul quaderno.': 'In der Klasse schrieben wir mit Kuli und Bleistift ins Heft.',
      'La mia materia preferita era la geografia.': 'Mein Lieblingsfach war Erdkunde.',
      'La matematica era difficile: i miei voti erano brutti!': 'Mathe war schwer: Meine Noten waren schlecht!',
      'Il momento più bello era la ricreazione.': 'Der schönste Moment war die Pause.',
    },
    fragen: [
      { frage: 'Wie ging der Erzähler zur Schule?', antworten: ['Zu Fuß', 'Mit dem Bus', 'Mit dem Fahrrad'] },
      { frage: 'Was war sein Lieblingsfach?', antworten: ['Erdkunde', 'Mathe', 'Sport'] },
      { frage: 'Was war der schönste Moment?', antworten: ['Die Pause', 'Die Prüfung', 'Die Hausaufgaben'] },
    ],
  },

  {
    id: 'a2-giochi', titel: 'Nel cortile', art: 'Text', stufe: 'A2',
    text: `Da bambina giocavo sempre nel cortile con i miei compagni di classe.

Saltavamo, correvamo e ci nascondevamo dietro gli alberi.

Al parco giochi c'erano l'altalena e lo scivolo.

Quando pioveva, giocavamo a carte o facevamo un puzzle.

A volte litigavamo, ma poi facevamo subito pace.`,
    woerter: {
      'bambina': ['il bambino', 'Kind (Mädchen; da bambina = als Kind)'],
      'giocavo': ['giocare', 'ich spielte'],
      'miei': ['mio', 'meine'],
      'compagni': ['il compagno di classe', 'Klassenkameraden'],
      'saltavamo': ['saltare', 'wir sprangen'],
      'correvamo': ['correre', 'wir rannten', 'rennen; laufen'],
      'nascondevamo': ['nascondersi', 'wir versteckten uns (ci nascondevamo)'],
      'dietro': ['dietro', 'hinter', 'hinter'],
      'alberi': ["l'albero", 'Bäume', 'der Baum'],
      "c'erano": ['esserci', 'es gab'],
      'pioveva': ['piovere', 'es regnete', 'regnen'],
      'giocavamo': ['giocare', 'wir spielten'],
      'facevamo': ['fare', 'wir machten'],
      'litigavamo': ['litigare', 'wir stritten'],
    },
    uebersetzung: {
      'Da bambina giocavo sempre nel cortile con i miei compagni di classe.': 'Als Kind spielte ich immer mit meinen Klassenkameraden im Hof.',
      'Saltavamo, correvamo e ci nascondevamo dietro gli alberi.': 'Wir sprangen, rannten und versteckten uns hinter den Bäumen.',
      "Al parco giochi c'erano l'altalena e lo scivolo.": 'Auf dem Spielplatz gab es die Schaukel und die Rutsche.',
      'Quando pioveva, giocavamo a carte o facevamo un puzzle.': 'Wenn es regnete, spielten wir Karten oder machten ein Puzzle.',
      'A volte litigavamo, ma poi facevamo subito pace.': 'Manchmal stritten wir, aber dann versöhnten wir uns sofort.',
    },
    fragen: [
      { frage: 'Wo spielte die Erzählerin?', antworten: ['Im Hof', 'Im Haus', 'In der Schule'] },
      { frage: 'Was machten die Kinder, wenn es regnete?', antworten: ['Karten spielen oder puzzeln', 'Schaukeln', 'Fußball spielen'] },
      { frage: 'Was passierte nach einem Streit?', antworten: ['Sie versöhnten sich sofort', 'Sie sprachen nicht mehr', 'Sie gingen nach Hause'] },
    ],
  },

  {
    id: 'a2-ricordi', titel: 'Il diario della nonna', art: 'Text', stufe: 'A2',
    text: `La nonna ha trovato un vecchio album e il suo diario.

Da bambina viveva in un piccolo paese di montagna. Era il suo paese natale.

A quei tempi non c'era la televisione. La sera la famiglia trascorreva le ore insieme.

La nonna è cresciuta lì. Quando guarda le foto, sente un po' di nostalgia.

Dice: ogni generazione ha la sua gioventù!`,
    woerter: {
      'quei': ['a quei tempi', 'jene (a quei tempi = damals)', 'damals'],
      'bambina': ['il bambino', 'Kind (Mädchen; da bambina = als Kind)'],
      'nonna': ['la nonna', 'Oma', 'die Großmutter'],
      'trovato': ['trovare', 'gefunden', 'finden'],
      'suo': ['suo', 'ihr', 'sein; ihr'],
      'viveva': ['vivere', 'sie lebte', 'leben'],
      'montagna': ['la montagna', 'Berg (di montagna = in den Bergen)', 'der Berg'],
      'era': ['essere', 'war'],
      "c'era": ['esserci', 'es gab'],
      'televisione': ['la televisione', 'Fernsehen', 'das Fernsehen'],
      'trascorreva': ['trascorrere', 'verbrachte'],
      'insieme': ['insieme', 'zusammen', 'zusammen'],
      'cresciuta': ['crescere', 'aufgewachsen'],
      'lì': ['lì', 'dort', 'dort'],
      'guarda': ['guardare', 'schaut an'],
      'foto': ['la foto', 'Fotos', 'das Foto'],
      'sente': ['sentire', 'fühlt'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'dice': ['dire', 'sagt', 'sagen'],
      'ogni': ['ogni', 'jede', 'jeder'],
      'sua': ['suo', 'ihre', 'sein; ihr'],
    },
    uebersetzung: {
      'La nonna ha trovato un vecchio album e il suo diario.': 'Die Oma hat ein altes Album und ihr Tagebuch gefunden.',
      'Da bambina viveva in un piccolo paese di montagna.': 'Als Kind lebte sie in einem kleinen Bergdorf.',
      'Era il suo paese natale.': 'Das war ihr Heimatort.',
      "A quei tempi non c'era la televisione.": 'Damals gab es kein Fernsehen.',
      'La sera la famiglia trascorreva le ore insieme.': 'Abends verbrachte die Familie die Stunden zusammen.',
      'La nonna è cresciuta lì.': 'Die Oma ist dort aufgewachsen.',
      "Quando guarda le foto, sente un po' di nostalgia.": 'Wenn sie die Fotos ansieht, fühlt sie ein bisschen Sehnsucht.',
      'Dice: ogni generazione ha la sua gioventù!': 'Sie sagt: Jede Generation hat ihre Jugend!',
    },
    fragen: [
      { frage: 'Was hat die Oma gefunden?', antworten: ['Ein Album und ihr Tagebuch', 'Einen Brief', 'Einen Ring'] },
      { frage: 'Wo lebte sie als Kind?', antworten: ['In einem kleinen Bergdorf', 'In Rom', 'Am Meer'] },
      { frage: 'Was gab es damals nicht?', antworten: ['Fernsehen', 'Schule', 'Familie'] },
    ],
  },

  {
    id: 'a2-meteo', titel: 'Le previsioni del tempo', art: 'Text', stufe: 'A2',
    text: `Oggi al nord il cielo è nuvoloso e c'è molta nebbia. La temperatura è di due gradi.

In montagna nevica e di notte gela.

Al centro c'è un temporale con tuoni e fulmini. Forse arriva anche la grandine.

Al sud invece è sereno e soleggiato: fa più caldo che al nord.

Dopo la pioggia, forse vediamo un arcobaleno!`,
    woerter: {
      'nord': ['il nord', 'Norden', 'der Norden'],
      'sud': ['il sud', 'Süden', 'der Süden'],
      'temporale': ['il temporale', 'Gewitter', 'das Gewitter'],
      'oggi': ['oggi', 'heute', 'heute'],
      'cielo': ['il cielo', 'Himmel', 'der Himmel'],
      'molta': ['molto', 'viel'],
      'gradi': ['il grado', 'Grad'],
      'montagna': ['la montagna', 'Berge (in montagna = in den Bergen)', 'der Berg'],
      'nevica': ['nevicare', 'es schneit'],
      'gela': ['gelare', 'es friert'],
      'centro': ['il centro', 'Mitte (Mittelitalien)', 'das Zentrum'],
      'tuoni': ['il tuono', 'Donner'],
      'fulmini': ['il fulmine', 'Blitze'],
      'forse': ['forse', 'vielleicht', 'vielleicht'],
      'arriva': ['arrivare', 'kommt'],
      'invece': ['invece', 'dagegen', 'stattdessen; dagegen'],
      'caldo': ['caldo', 'warm (fa caldo = es ist warm)', 'warm'],
      'pioggia': ['la pioggia', 'Regen', 'der Regen'],
      'vediamo': ['vedere', 'wir sehen'],
    },
    uebersetzung: {
      "Oggi al nord il cielo è nuvoloso e c'è molta nebbia.": 'Heute ist der Himmel im Norden bewölkt und es gibt viel Nebel.',
      'La temperatura è di due gradi.': 'Die Temperatur liegt bei zwei Grad.',
      'In montagna nevica e di notte gela.': 'In den Bergen schneit es und nachts friert es.',
      "Al centro c'è un temporale con tuoni e fulmini.": 'In der Mitte gibt es ein Gewitter mit Donner und Blitzen.',
      'Forse arriva anche la grandine.': 'Vielleicht kommt auch Hagel.',
      'Al sud invece è sereno e soleggiato: fa più caldo che al nord.': 'Im Süden dagegen ist es heiter und sonnig: Es ist wärmer als im Norden.',
      'Dopo la pioggia, forse vediamo un arcobaleno!': 'Nach dem Regen sehen wir vielleicht einen Regenbogen!',
    },
    fragen: [
      { frage: 'Wie ist das Wetter im Norden?', antworten: ['Bewölkt und neblig', 'Sonnig', 'Heiß'] },
      { frage: 'Wo gibt es ein Gewitter?', antworten: ['In der Mitte', 'Im Süden', 'In den Bergen'] },
      { frage: 'Wo ist es am wärmsten?', antworten: ['Im Süden', 'Im Norden', 'In den Bergen'] },
    ],
  },

  {
    id: 'a2-mesi', titel: 'Il calendario di Anna', art: 'Text', stufe: 'A2',
    text: `Anna guarda il calendario.

Febbraio è il mese più corto dell'anno. Ad aprile e a maggio fioriscono gli alberi.

In agosto Anna ha le ferie: tre settimane al mare.

A ottobre c'è la vendemmia dallo zio. Dura una settimana.

Novembre è il periodo più triste: piove spesso. Ma alla fine di dicembre c'è Natale!`,
    woerter: {
      'mese': ['il mese', 'Monat', 'der Monat'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'guarda': ['guardare', 'schaut an'],
      'corto': ['corto', 'kurz', 'kurz'],
      'fioriscono': ['fiorire', 'blühen'],
      'alberi': ["l'albero", 'Bäume', 'der Baum'],
      'agosto': ['agosto', 'August', 'August'],
      'settimane': ['la settimana', 'Wochen'],
      'mare': ['il mare', 'Meer', 'das Meer'],
      'dura': ['durare', 'dauert'],
      'piove': ['piovere', 'es regnet', 'regnen'],
      'spesso': ['spesso', 'oft', 'oft'],
    },
    uebersetzung: {
      'Anna guarda il calendario.': 'Anna schaut in den Kalender.',
      "Febbraio è il mese più corto dell'anno.": 'Der Februar ist der kürzeste Monat des Jahres.',
      'Ad aprile e a maggio fioriscono gli alberi.': 'Im April und Mai blühen die Bäume.',
      'In agosto Anna ha le ferie: tre settimane al mare.': 'Im August hat Anna Urlaub: drei Wochen am Meer.',
      "A ottobre c'è la vendemmia dallo zio.": 'Im Oktober ist Weinlese beim Onkel.',
      'Dura una settimana.': 'Sie dauert eine Woche.',
      'Novembre è il periodo più triste: piove spesso.': 'Der November ist die traurigste Zeit: Es regnet oft.',
      "Ma alla fine di dicembre c'è Natale!": 'Aber Ende Dezember ist Weihnachten!',
    },
    fragen: [
      { frage: 'Wann hat Anna Urlaub?', antworten: ['Im August', 'Im Oktober', 'Im Februar'] },
      { frage: 'Was passiert im Oktober?', antworten: ['Weinlese beim Onkel', 'Weihnachten', 'Die Bäume blühen'] },
      { frage: 'Warum ist der November traurig?', antworten: ['Es regnet oft', 'Es ist heiß', 'Anna arbeitet viel'] },
    ],
  },

  {
    id: 'a2-geografia', titel: "L'Italia da nord a sud", art: 'Text', stufe: 'A2',
    text: `L'Italia è una penisola nel sud dell'Europa. La capitale è Roma.

Al nord ci sono le Alpi e il confine con la Svizzera e l'Austria. C'è anche una grande pianura.

Al sud ci sono vulcani come l'Etna e il Vesuvio.

La Sicilia è l'isola più grande. La Calabria ha foreste e mare.

L'Italia ha venti regioni e circa sessanta milioni di abitanti.`,
    woerter: {
      'roma': ['Roma', 'Rom'],
      'alpi': ['le Alpi', 'die Alpen'],
      'vulcani': ['il vulcano', 'Vulkane'],
      'come': ['come', 'wie', 'wie'],
      'etna': ['Etna', 'der Ätna (Vulkan)'],
      'vesuvio': ['Vesuvio', 'der Vesuv (Vulkan)'],
      'sicilia': ['Sicilia', 'Sizilien'],
      'calabria': ['Calabria', 'Kalabrien'],
      'foreste': ['la foresta', 'Wälder'],
      'mare': ['il mare', 'Meer', 'das Meer'],
      'regioni': ['la regione', 'Regionen', 'die Region'],
      'circa': ['circa', 'ungefähr', 'ungefähr'],
      'milioni': ['il milione', 'Millionen', 'die Million'],
      'abitanti': ["l'abitante", 'Einwohner'],
    },
    uebersetzung: {
      "L'Italia è una penisola nel sud dell'Europa.": 'Italien ist eine Halbinsel im Süden Europas.',
      'La capitale è Roma.': 'Die Hauptstadt ist Rom.',
      "Al nord ci sono le Alpi e il confine con la Svizzera e l'Austria.": 'Im Norden gibt es die Alpen und die Grenze zur Schweiz und zu Österreich.',
      "C'è anche una grande pianura.": 'Es gibt auch eine große Ebene.',
      "Al sud ci sono vulcani come l'Etna e il Vesuvio.": 'Im Süden gibt es Vulkane wie den Ätna und den Vesuv.',
      "La Sicilia è l'isola più grande.": 'Sizilien ist die größte Insel.',
      'La Calabria ha foreste e mare.': 'Kalabrien hat Wälder und Meer.',
      "L'Italia ha venti regioni e circa sessanta milioni di abitanti.": 'Italien hat zwanzig Regionen und ungefähr sechzig Millionen Einwohner.',
    },
    fragen: [
      { frage: 'Was liegt im Norden Italiens?', antworten: ['Die Alpen', 'Der Ätna', 'Sizilien'] },
      { frage: 'Welche ist die größte Insel?', antworten: ['Sizilien', 'Sardinien', 'Capri'] },
      { frage: 'Wie viele Regionen hat Italien?', antworten: ['Zwanzig', 'Zehn', 'Sechzig'] },
    ],
  },

  {
    id: 'a2-corpo', titel: 'Dopo la palestra', art: 'Text', stufe: 'A2',
    text: `Ieri Luca è andato in palestra per la prima volta.

Oggi gli fa male tutto: il collo, le spalle e la schiena.

Anche le ginocchia e i gomiti gli fanno male.

Mentre correva, il cuore batteva forte e aveva la faccia rossa.

Il medico gli ha detto: le ossa stanno bene, ma devi fare sport più piano!`,
    woerter: {
      'ieri': ['ieri', 'gestern', 'gestern'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'andato': ['andare', 'gegangen'],
      'prima': ['primo', 'erste (la prima volta = das erste Mal)'],
      'volta': ['la volta', 'Mal', 'das Mal'],
      'oggi': ['oggi', 'heute', 'heute'],
      'male': ['male', 'weh (gli fa male = es tut ihm weh)', 'schlecht'],
      'tutto': ['tutto', 'alles', 'alles'],
      'spalle': ['la spalla', 'Schultern'],
      'ginocchia': ['il ginocchio', 'Knie (Mehrzahl)'],
      'gomiti': ['il gomito', 'Ellbogen (Mehrzahl)'],
      'fanno': ['fare', 'tun (fanno male = tun weh)'],
      'mentre': ['mentre', 'während', 'während'],
      'correva': ['correre', 'lief'],
      'batteva': ['battere', 'schlug', 'schlagen'],
      'forte': ['forte', 'stark; laut', 'stark'],
      'aveva': ['avere', 'hatte'],
      'rossa': ['rosso', 'rot'],
      'medico': ['il medico', 'Arzt', 'der Arzt'],
      'detto': ['dire', 'gesagt'],
      'ossa': ["l'osso", 'Knochen (Mehrzahl)'],
      'stanno': ['stare', 'sind (stanno bene = sind in Ordnung)'],
      'devi': ['dovere', 'du musst'],
      'piano': ['piano', 'langsam; leise', 'langsam; leise'],
    },
    uebersetzung: {
      'Ieri Luca è andato in palestra per la prima volta.': 'Gestern ist Luca zum ersten Mal ins Fitnessstudio gegangen.',
      'Oggi gli fa male tutto: il collo, le spalle e la schiena.': 'Heute tut ihm alles weh: der Hals, die Schultern und der Rücken.',
      'Anche le ginocchia e i gomiti gli fanno male.': 'Auch die Knie und die Ellbogen tun ihm weh.',
      'Mentre correva, il cuore batteva forte e aveva la faccia rossa.': 'Während er lief, schlug das Herz stark und er hatte ein rotes Gesicht.',
      'Il medico gli ha detto: le ossa stanno bene, ma devi fare sport più piano!': 'Der Arzt hat ihm gesagt: Die Knochen sind in Ordnung, aber du musst langsamer Sport machen!',
    },
    fragen: [
      { frage: 'Wann war Luca im Fitnessstudio?', antworten: ['Gestern, zum ersten Mal', 'Heute', 'Jeden Tag'] },
      { frage: 'Was tut Luca weh?', antworten: ['Hals, Schultern, Rücken, Knie, Ellbogen', 'Nur der Kopf', 'Nichts'] },
      { frage: 'Was sagt der Arzt?', antworten: ['Er soll langsamer Sport machen', 'Er hat sich etwas gebrochen', 'Er soll nie mehr Sport machen'] },
    ],
  },

  {
    id: 'a2-malato', titel: 'Ho il raffreddore', art: 'Text', stufe: 'A2',
    text: `Ieri Giulia stava male. Aveva la febbre, la tosse e il mal di gola.

Starnutiva sempre e aveva anche un po' di nausea.

È andata dal medico. Il medico le ha detto: non è l'influenza, è solo un forte raffreddore.

Giulia è rimasta a letto tutto il giorno.

Oggi sta meglio. Tra qualche giorno guarisce!`,
    woerter: {
      'mal': ['il mal di gola', 'Schmerz (mal di gola = Halsschmerzen)', 'die Halsschmerzen'],
      'gola': ['il mal di gola', 'Hals (mal di gola = Halsschmerzen)', 'die Halsschmerzen'],
      'meglio': ['stare meglio', 'besser (sta meglio = es geht ihr besser)', 'sich besser fühlen'],
      'ieri': ['ieri', 'gestern', 'gestern'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'stava': ['stare male', 'fühlte sich (stava male = ging es schlecht)'],
      'aveva': ['avere', 'hatte'],
      'starnutiva': ['starnutire', 'nieste'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'andata': ['andare', 'gegangen'],
      'medico': ['il medico', 'Arzt', 'der Arzt'],
      'detto': ['dire', 'gesagt'],
      'forte': ['forte', 'stark', 'stark'],
      'rimasta': ['rimanere', 'geblieben', 'bleiben'],
      'tutto': ['tutto', 'ganz (tutto il giorno = den ganzen Tag)', 'alles; ganz'],
      'oggi': ['oggi', 'heute', 'heute'],
      'sta': ['stare meglio', 'geht es (sta meglio = geht es besser)'],
      'tra': ['tra', 'in (tra qualche giorno = in ein paar Tagen)', 'zwischen; in'],
      'guarisce': ['guarire', 'wird gesund'],
    },
    uebersetzung: {
      'Ieri Giulia stava male.': 'Gestern ging es Giulia schlecht.',
      'Aveva la febbre, la tosse e il mal di gola.': 'Sie hatte Fieber, Husten und Halsschmerzen.',
      "Starnutiva sempre e aveva anche un po' di nausea.": 'Sie nieste ständig und hatte auch ein bisschen Übelkeit.',
      'È andata dal medico.': 'Sie ist zum Arzt gegangen.',
      "Il medico le ha detto: non è l'influenza, è solo un forte raffreddore.": 'Der Arzt hat ihr gesagt: Es ist keine Grippe, nur eine starke Erkältung.',
      'Giulia è rimasta a letto tutto il giorno.': 'Giulia ist den ganzen Tag im Bett geblieben.',
      'Oggi sta meglio.': 'Heute geht es ihr besser.',
      'Tra qualche giorno guarisce!': 'In ein paar Tagen ist sie gesund!',
    },
    fragen: [
      { frage: 'Was hatte Giulia?', antworten: ['Fieber, Husten, Halsschmerzen', 'Bauchschmerzen', 'Eine Wunde'] },
      { frage: 'Was sagt der Arzt?', antworten: ['Es ist eine starke Erkältung', 'Es ist Grippe', 'Sie muss ins Krankenhaus'] },
      { frage: 'Wie geht es ihr heute?', antworten: ['Besser', 'Schlechter', 'Gleich'] },
    ],
  },

  {
    id: 'a2-farmacia', titel: 'In farmacia', art: 'Text', stufe: 'A2',
    text: `Marco si è ferito al dito mentre tagliava il pane.

In farmacia ha comprato dei cerotti, una benda e una pomata.

Per la tosse di sua figlia ha preso anche uno sciroppo e un termometro.

Il farmacista gli ha detto: se la febbre non passa, andate dal medico in ambulatorio.

Per fortuna non serve il pronto soccorso!`,
    woerter: {
      'soccorso': ['il pronto soccorso', 'Hilfe (pronto soccorso = Notaufnahme)', 'die Notaufnahme'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'ferito': ['ferirsi', 'verletzt (si è ferito = hat sich verletzt)'],
      'dito': ['il dito', 'Finger', 'der Finger'],
      'mentre': ['mentre', 'während', 'während'],
      'tagliava': ['tagliare', 'schnitt'],
      'farmacia': ['la farmacia', 'Apotheke', 'die Apotheke'],
      'comprato': ['comprare', 'gekauft'],
      'dei': ['dei', 'einige'],
      'cerotti': ['il cerotto', 'Pflaster'],
      'per': ['per', 'für; gegen', 'für'],
      'tosse': ['la tosse', 'Husten', 'der Husten'],
      'sua': ['suo', 'seine'],
      'preso': ['prendere', 'genommen; gekauft'],
      'farmacista': ['il farmacista', 'Apotheker', 'der Apotheker'],
      'detto': ['dire', 'gesagt'],
      'se': ['se', 'wenn', 'wenn; ob'],
      'febbre': ['la febbre', 'Fieber', 'das Fieber'],
      'passa': ['passare', 'vergeht'],
      'andate': ['andare', 'geht!'],
      'medico': ['il medico', 'Arzt', 'der Arzt'],
      'fortuna': ['la fortuna', 'Glück (per fortuna = zum Glück)', 'das Glück'],
      'serve': ['servire', 'braucht man (non serve = braucht man nicht)'],
    },
    uebersetzung: {
      'Marco si è ferito al dito mentre tagliava il pane.': 'Marco hat sich am Finger verletzt, als er das Brot schnitt.',
      'In farmacia ha comprato dei cerotti, una benda e una pomata.': 'In der Apotheke hat er Pflaster, einen Verband und eine Salbe gekauft.',
      'Per la tosse di sua figlia ha preso anche uno sciroppo e un termometro.': 'Gegen den Husten seiner Tochter hat er auch einen Hustensaft und ein Thermometer gekauft.',
      'Il farmacista gli ha detto: se la febbre non passa, andate dal medico in ambulatorio.': 'Der Apotheker hat ihm gesagt: Wenn das Fieber nicht vergeht, geht in die Arztpraxis.',
      'Per fortuna non serve il pronto soccorso!': 'Zum Glück braucht man die Notaufnahme nicht!',
    },
    fragen: [
      { frage: 'Wie hat sich Marco verletzt?', antworten: ['Beim Brotschneiden', 'Beim Sport', 'Im Garten'] },
      { frage: 'Was kauft er für seine Tochter?', antworten: ['Hustensaft und Thermometer', 'Pflaster', 'Salbe'] },
      { frage: 'Was rät der Apotheker?', antworten: ['Bei Fieber zum Arzt', 'Sofort ins Krankenhaus', 'Nichts'] },
    ],
  },

  {
    id: 'a2-crostata', titel: 'La crostata della zia', art: 'Text', stufe: 'A2',
    text: `Per la crostata si prepara prima la pasta frolla: farina, burro, zucchero e uova.

Si impasta tutto e si mette in una teglia.

Sopra si mette la marmellata e un po' di vaniglia.

Si inforna per mezz'ora. Poi si lascia raffreddare.

Alla fine si decora con lo zucchero a velo. La zia dice: è più buona del budino!`,
    woerter: {
      'frolla': ['la pasta frolla', 'mürbe (pasta frolla = Mürbeteig)', 'der Mürbeteig'],
      'velo': ['lo zucchero a velo', 'Schleier (zucchero a velo = Puderzucker)', 'der Puderzucker'],
      "mezz'": ['mezzo', 'halb (mezz’ora = halbe Stunde)', 'halb'],
      'per': ['per', 'für', 'für'],
      'prepara': ['preparare', 'bereitet vor (si prepara = man bereitet zu)', 'zubereiten'],
      'prima': ['prima', 'zuerst', 'vorher; zuerst'],
      'farina': ['la farina', 'Mehl', 'das Mehl'],
      'burro': ['il burro', 'Butter', 'die Butter'],
      'zucchero': ['lo zucchero', 'Zucker', 'der Zucker'],
      'uova': ["l'uovo", 'Eier', 'das Ei'],
      'impasta': ['impastare', 'knetet (si impasta = man knetet)'],
      'mette': ['mettere', 'legt (si mette = man legt)'],
      'sopra': ['sopra', 'oben drauf', 'über; oben'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'inforna': ['infornare', 'schiebt in den Ofen (si inforna = man backt)'],
      "mezz'ora": ["la mezz'ora", 'halbe Stunde', 'die halbe Stunde'],
      'lascia': ['lasciare', 'lässt (si lascia = man lässt)'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'decora': ['decorare', 'verziert (si decora = man verziert)'],
      'zia': ['la zia', 'Tante', 'die Tante'],
      'dice': ['dire', 'sagt', 'sagen'],
      'buona': ['buono', 'gut; lecker', 'gut'],
    },
    uebersetzung: {
      'Per la crostata si prepara prima la pasta frolla: farina, burro, zucchero e uova.': 'Für die Crostata macht man zuerst den Mürbeteig: Mehl, Butter, Zucker und Eier.',
      'Si impasta tutto e si mette in una teglia.': 'Man knetet alles und legt es in eine Backform.',
      "Sopra si mette la marmellata e un po' di vaniglia.": 'Oben drauf kommt die Marmelade und ein bisschen Vanille.',
      "Si inforna per mezz'ora.": 'Man backt sie eine halbe Stunde.',
      'Poi si lascia raffreddare.': 'Dann lässt man sie abkühlen.',
      'Alla fine si decora con lo zucchero a velo.': 'Am Ende verziert man sie mit Puderzucker.',
      'La zia dice: è più buona del budino!': 'Die Tante sagt: Sie ist leckerer als Pudding!',
    },
    fragen: [
      { frage: 'Was macht man zuerst?', antworten: ['Den Mürbeteig', 'Die Glasur', 'Den Pudding'] },
      { frage: 'Wie lange backt die Crostata?', antworten: ['Eine halbe Stunde', 'Eine Stunde', 'Zehn Minuten'] },
      { frage: 'Womit verziert man sie?', antworten: ['Mit Puderzucker', 'Mit Sahne', 'Mit Schokolade'] },
    ],
  },

  {
    id: 'a2-faccende', titel: 'Il sabato delle faccende', art: 'Text', stufe: 'A2',
    text: `Il sabato a casa nostra si fanno le faccende di casa.

Il papà mette il bucato nella lavatrice e poi lo stende sul balcone.

La mamma passa l'aspirapolvere e spolvera i mobili.

Io stiro le camicie con il ferro da stiro. Mio fratello butta la spazzatura.

Alla fine si riordina la cucina. Che fatica!`,
    woerter: {
      'faccende': ['le faccende di casa', 'Hausarbeit (faccende di casa)', 'die Hausarbeit'],
      'ferro': ['il ferro da stiro', 'Eisen (ferro da stiro = Bügeleisen)', 'das Bügeleisen'],
      'cucina': ['la cucina', 'Küche', 'die Küche'],
      'nostra': ['nostro', 'unser'],
      'fanno': ['fare', 'machen (si fanno = man macht)'],
      'mette': ['mettere', 'steckt; legt'],
      'stende': ['stendere', 'hängt auf'],
      'passa': ['passare', 'saugt (passa l’aspirapolvere)'],
      'spolvera': ['spolverare', 'staubt ab'],
      'mobili': ['il mobile', 'Möbel', 'das Möbelstück'],
      'stiro': ['stirare', 'ich bügle'],
      'camicie': ['la camicia', 'Hemden'],
      'butta': ['buttare', 'bringt raus; wirft weg'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'riordina': ['riordinare', 'räumt auf (si riordina = man räumt auf)'],
      'fatica': ['la fatica', 'Mühe (che fatica! = wie anstrengend!)', 'die Mühe'],
    },
    uebersetzung: {
      'Il sabato a casa nostra si fanno le faccende di casa.': 'Samstags wird bei uns zu Hause die Hausarbeit gemacht.',
      'Il papà mette il bucato nella lavatrice e poi lo stende sul balcone.': 'Papa steckt die Wäsche in die Waschmaschine und hängt sie dann auf dem Balkon auf.',
      "La mamma passa l'aspirapolvere e spolvera i mobili.": 'Mama saugt und wischt Staub auf den Möbeln.',
      'Io stiro le camicie con il ferro da stiro.': 'Ich bügle die Hemden mit dem Bügeleisen.',
      'Mio fratello butta la spazzatura.': 'Mein Bruder bringt den Müll raus.',
      'Alla fine si riordina la cucina.': 'Am Ende räumt man die Küche auf.',
      'Che fatica!': 'Wie anstrengend!',
    },
    fragen: [
      { frage: 'Was macht der Papa?', antworten: ['Er wäscht und hängt die Wäsche auf', 'Er bügelt', 'Er saugt'] },
      { frage: 'Wer bügelt?', antworten: ['Der Erzähler', 'Die Mama', 'Der Bruder'] },
      { frage: 'Was macht man am Ende?', antworten: ['Die Küche aufräumen', 'Einkaufen', 'Kochen'] },
    ],
  },

  {
    id: 'a2-tradizioni', titel: 'Feste italiane', art: 'Text', stufe: 'A2',
    text: `In Italia a Natale si fa il presepe e l'albero di Natale. Si mangia il panettone.

Il sei gennaio arriva la Befana: porta dolci ai bambini buoni.

A Carnevale i bambini mettono una maschera. A Pasqua si mangia la colomba.

Il quindici agosto è Ferragosto: tutti vanno al mare.

In estate ogni paese celebra il suo patrono con una processione o una sagra.

A Capodanno, a mezzanotte, ci sono i fuochi d'artificio.`,
    woerter: {
      'artificio': ["i fuochi d'artificio", 'Kunst- (fuochi d’artificio = Feuerwerk)', 'das Feuerwerk'],
      'italia': ['Italia', 'Italien'],
      'fa': ['fare', 'macht (si fa = man macht)'],
      'mangia': ['mangiare', 'isst (si mangia = man isst)'],
      'gennaio': ['gennaio', 'Januar', 'Januar'],
      'arriva': ['arrivare', 'kommt'],
      'porta': ['portare', 'bringt', 'bringen'],
      'dolci': ['il dolce', 'Süßigkeiten', 'der Nachtisch'],
      'bambini': ['il bambino', 'Kinder', 'das Kind'],
      'buoni': ['buono', 'brav; gut'],
      'mettono': ['mettere', 'setzen auf'],
      'agosto': ['agosto', 'August', 'August'],
      'tutti': ['tutto', 'alle'],
      'vanno': ['andare', 'gehen; fahren'],
      'mare': ['il mare', 'Meer', 'das Meer'],
      'estate': ["l'estate", 'Sommer', 'der Sommer'],
      'ogni': ['ogni', 'jedes', 'jeder'],
      'paese': ['il paese', 'Dorf; Ort', 'das Land; das Dorf'],
      'celebra': ['celebrare', 'feiert'],
      'suo': ['suo', 'seinen', 'sein; ihr'],
    },
    uebersetzung: {
      "In Italia a Natale si fa il presepe e l'albero di Natale.": 'In Italien baut man an Weihnachten die Krippe und den Weihnachtsbaum auf.',
      'Si mangia il panettone.': 'Man isst Panettone.',
      'Il sei gennaio arriva la Befana: porta dolci ai bambini buoni.': 'Am sechsten Januar kommt die Befana: Sie bringt den braven Kindern Süßigkeiten.',
      'A Carnevale i bambini mettono una maschera.': 'Im Karneval setzen die Kinder eine Maske auf.',
      'A Pasqua si mangia la colomba.': 'An Ostern isst man die Colomba.',
      'Il quindici agosto è Ferragosto: tutti vanno al mare.': 'Am fünfzehnten August ist Ferragosto: Alle fahren ans Meer.',
      'In estate ogni paese celebra il suo patrono con una processione o una sagra.': 'Im Sommer feiert jeder Ort seinen Schutzpatron mit einer Prozession oder einem Dorffest.',
      "A Capodanno, a mezzanotte, ci sono i fuochi d'artificio.": 'An Silvester gibt es um Mitternacht ein Feuerwerk.',
    },
    fragen: [
      { frage: 'Was bringt die Befana?', antworten: ['Süßigkeiten für brave Kinder', 'Den Panettone', 'Masken'] },
      { frage: 'Was isst man an Ostern?', antworten: ['Die Colomba', 'Den Panettone', 'Eis'] },
      { frage: 'Was machen viele an Ferragosto?', antworten: ['Sie fahren ans Meer', 'Sie gehen zur Arbeit', 'Sie bleiben zu Hause'] },
    ],
  },

  {
    id: 'a2-ambiente', titel: 'Una città più verde', art: 'Text', stufe: 'A2',
    text: `La nostra città vuole diventare più ecologica.

C'è troppo smog e l'aria è inquinata. Per questo ci sono nuove piste ciclabili e una grande zona pedonale.

Tutti devono fare la raccolta differenziata: la carta, la plastica e il vetro vanno in bidoni diversi.

Sui tetti delle scuole ci sono pannelli solari.

Il sindaco dice: non dobbiamo sprecare energia!`,
    woerter: {
      'zona': ['la zona pedonale', 'Zone (zona pedonale = Fußgängerzone)', 'die Fußgängerzone'],
      'pedonale': ['la zona pedonale', 'Fußgänger- (zona pedonale = Fußgängerzone)', 'die Fußgängerzone'],
      'raccolta': ['la raccolta differenziata', 'Sammlung (raccolta differenziata = Mülltrennung)', 'die Mülltrennung'],
      'differenziata': ['la raccolta differenziata', 'getrennt (raccolta differenziata = Mülltrennung)', 'die Mülltrennung'],
      'nostra': ['nostro', 'unsere'],
      'diventare': ['diventare', 'werden', 'werden'],
      'ecologica': ['ecologico', 'umweltfreundlich'],
      'troppo': ['troppo', 'zu viel', 'zu viel; zu'],
      'aria': ["l'aria", 'Luft', 'die Luft'],
      'inquinata': ['inquinato', 'verschmutzt'],
      'per': ['per', 'für; deshalb (per questo)', 'für'],
      'nuove': ['nuovo', 'neue'],
      'piste': ['la pista ciclabile', 'Wege (piste ciclabili = Radwege)'],
      'ciclabili': ['la pista ciclabile', 'Rad- (piste ciclabili = Radwege)'],
      'tutti': ['tutto', 'alle'],
      'devono': ['dovere', 'müssen'],
      'vanno': ['andare', 'kommen (gehören)'],
      'bidoni': ['il bidone', 'Tonnen'],
      'diversi': ['diverso', 'verschiedene'],
      'tetti': ['il tetto', 'Dächer', 'das Dach'],
      'scuole': ['la scuola', 'Schulen'],
      'pannelli': ['il pannello solare', 'Paneele (pannelli solari = Solaranlagen)'],
      'solari': ['il pannello solare', 'Solar-'],
      'sindaco': ['il sindaco', 'Bürgermeister', 'der Bürgermeister'],
      'dice': ['dire', 'sagt', 'sagen'],
      'dobbiamo': ['dovere', 'wir müssen'],
    },
    uebersetzung: {
      'La nostra città vuole diventare più ecologica.': 'Unsere Stadt will umweltfreundlicher werden.',
      "C'è troppo smog e l'aria è inquinata.": 'Es gibt zu viel Smog und die Luft ist verschmutzt.',
      'Per questo ci sono nuove piste ciclabili e una grande zona pedonale.': 'Deshalb gibt es neue Radwege und eine große Fußgängerzone.',
      'Tutti devono fare la raccolta differenziata: la carta, la plastica e il vetro vanno in bidoni diversi.': 'Alle müssen den Müll trennen: Papier, Plastik und Glas kommen in verschiedene Tonnen.',
      'Sui tetti delle scuole ci sono pannelli solari.': 'Auf den Dächern der Schulen gibt es Solaranlagen.',
      'Il sindaco dice: non dobbiamo sprecare energia!': 'Der Bürgermeister sagt: Wir dürfen keine Energie verschwenden!',
    },
    fragen: [
      { frage: 'Was ist das Problem der Stadt?', antworten: ['Smog und schmutzige Luft', 'Zu wenig Geschäfte', 'Zu viel Regen'] },
      { frage: 'Was gibt es neu?', antworten: ['Radwege und eine Fußgängerzone', 'Mehr Parkplätze', 'Eine Autobahn'] },
      { frage: 'Wo sind Solaranlagen?', antworten: ['Auf den Schuldächern', 'Am Bahnhof', 'Im Park'] },
    ],
  },

  {
    id: 'a2-cultura', titel: 'Una sera a teatro', art: 'Text', stufe: 'A2',
    text: `Sabato Anna e Paolo sono andati a teatro. Era uno spettacolo su un romanzo famoso.

Il regista è un amico di Paolo. L'attrice principale era bravissima.

Alla fine tutto il pubblico ha applaudito per dieci minuti.

Domenica hanno fatto una visita guidata in una galleria d'arte.

Hanno visto quadri di un pittore che amano molto e una statua antica.`,
    woerter: {
      'anna': ['Anna', 'Anna (Vorname)'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'andati': ['andare', 'gegangen'],
      'teatro': ['il teatro', 'Theater', 'das Theater'],
      'era': ['essere', 'war'],
      'famoso': ['famoso', 'berühmt', 'berühmt'],
      'amico': ["l'amico", 'Freund', 'der Freund'],
      'principale': ['principale', 'Haupt-', 'Haupt-'],
      'bravissima': ['bravo', 'großartig'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'tutto': ['tutto', 'ganz (tutto il pubblico = das ganze Publikum)', 'alles; ganz'],
      'pubblico': ['il pubblico', 'Publikum', 'das Publikum'],
      'applaudito': ['applaudire', 'geklatscht'],
      'minuti': ['il minuto', 'Minuten'],
      'fatto': ['fare', 'gemacht'],
      'arte': ["l'arte", 'Kunst', 'die Kunst'],
      'visto': ['vedere', 'gesehen'],
      'quadri': ['il quadro', 'Bilder', 'das Bild'],
      'amano': ['amare', 'sie lieben'],
      'antica': ['antico', 'antik; alt'],
    },
    uebersetzung: {
      'Sabato Anna e Paolo sono andati a teatro.': 'Am Samstag sind Anna und Paolo ins Theater gegangen.',
      'Era uno spettacolo su un romanzo famoso.': 'Es war ein Stück über einen berühmten Roman.',
      'Il regista è un amico di Paolo.': 'Der Regisseur ist ein Freund von Paolo.',
      "L'attrice principale era bravissima.": 'Die Hauptdarstellerin war großartig.',
      'Alla fine tutto il pubblico ha applaudito per dieci minuti.': 'Am Ende hat das ganze Publikum zehn Minuten lang geklatscht.',
      "Domenica hanno fatto una visita guidata in una galleria d'arte.": 'Am Sonntag haben sie eine Führung in einer Kunstgalerie gemacht.',
      'Hanno visto quadri di un pittore che amano molto e una statua antica.': 'Sie haben Bilder eines Malers gesehen, den sie sehr lieben, und eine antike Statue.',
    },
    fragen: [
      { frage: 'Woher stammt das Theaterstück?', antworten: ['Aus einem berühmten Roman', 'Aus einem Film', 'Aus einem Gedicht'] },
      { frage: 'Wer ist ein Freund von Paolo?', antworten: ['Der Regisseur', 'Die Schauspielerin', 'Der Maler'] },
      { frage: 'Was haben sie am Sonntag gemacht?', antworten: ['Eine Führung in einer Galerie', 'Ein Konzert besucht', 'Sie waren zu Hause'] },
    ],
  },

  {
    id: 'a2-tecnologia', titel: 'Il computer di Sofia', art: 'Text', stufe: 'A2',
    text: `Sofia ha un portatile nuovo. Lo usa per la scuola e per guardare film.

Ieri ha scaricato un'app che le serve per studiare.

Poi ha voluto stampare i compiti, ma la stampante non funzionava.

E la batteria era quasi scarica: Sofia non trovava il caricabatterie!

Alla fine il fratello l'ha aiutata. Lui dice: senza internet e senza rete non si vive!`,
    woerter: {
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'nuovo': ['nuovo', 'neu', 'neu'],
      'usa': ['usare', 'benutzt', 'benutzen'],
      'per': ['per', 'für; um zu', 'für'],
      'scuola': ['la scuola', 'Schule', 'die Schule'],
      'ieri': ['ieri', 'gestern', 'gestern'],
      'scaricato': ['scaricare', 'heruntergeladen'],
      'serve': ['servire', 'braucht (le serve = sie braucht)'],
      'studiare': ['studiare', 'lernen; studieren', 'lernen; studieren'],
      'voluto': ['volere', 'gewollt'],
      'funzionava': ['funzionare', 'funktionierte', 'funktionieren'],
      'era': ['essere', 'war'],
      'quasi': ['quasi', 'fast', 'fast'],
      'scarica': ['scarico', 'leer (Akku)', 'leer (Akku)'],
      'trovava': ['trovare', 'fand'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'aiutata': ['aiutare', 'geholfen', 'helfen'],
      'dice': ['dire', 'sagt', 'sagen'],
      'senza': ['senza', 'ohne', 'ohne'],
      'vive': ['vivere', 'lebt (non si vive = man kann nicht leben)', 'leben'],
    },
    uebersetzung: {
      'Sofia ha un portatile nuovo.': 'Sofia hat einen neuen Laptop.',
      'Lo usa per la scuola e per guardare film.': 'Sie benutzt ihn für die Schule und um Filme zu schauen.',
      "Ieri ha scaricato un'app che le serve per studiare.": 'Gestern hat sie eine App heruntergeladen, die sie zum Lernen braucht.',
      'Poi ha voluto stampare i compiti, ma la stampante non funzionava.': 'Dann wollte sie die Hausaufgaben drucken, aber der Drucker funktionierte nicht.',
      'E la batteria era quasi scarica: Sofia non trovava il caricabatterie!': 'Und der Akku war fast leer: Sofia fand das Ladegerät nicht!',
      "Alla fine il fratello l'ha aiutata.": 'Am Ende hat ihr der Bruder geholfen.',
      'Lui dice: senza internet e senza rete non si vive!': 'Er sagt: Ohne Internet und ohne Netz kann man nicht leben!',
    },
    fragen: [
      { frage: 'Wofür benutzt Sofia den Laptop?', antworten: ['Für die Schule und Filme', 'Nur für Spiele', 'Für die Arbeit'] },
      { frage: 'Was funktionierte nicht?', antworten: ['Der Drucker', 'Die App', 'Das Internet'] },
      { frage: 'Was fand Sofia nicht?', antworten: ['Das Ladegerät', 'Den Laptop', 'Die Hausaufgaben'] },
    ],
  },
);
