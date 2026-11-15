// Kurze Texte für die Wort-Lektionen B2 (nach Lektion 29–36).
// Aufbau wie in texte.js. Prüfen: node werkzeuge/lektionen-pruefen.js

LESETEXTE.push(
  {
    id: 'b2-lotteria', titel: 'Se fossi milionario', art: 'Text', stufe: 'B2',
    text: `Ogni sabato Paolo fa una scommessa: compra un biglietto e aspetta l'estrazione.

Se diventasse milionario, farebbe il giro del mondo su uno yacht.

Vivrebbe in una villa lussuosa e non lavorerebbe più.

Sua moglie invece dice: se vincessimo, donerei metà dei soldi in beneficenza.

Paolo sorride: è bello sognare. Ma finora non ha vinto nemmeno dieci euro!`,
    woerter: {
      'ogni': ['ogni', 'jeden'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'compra': ['comprare', 'kauft'],
      'biglietto': ['il biglietto', 'Los; Schein'],
      'aspetta': ['aspettare', 'wartet auf'],
      'diventasse': ['diventare', 'würde (wenn er … würde)'],
      'farebbe': ['fare', 'würde machen'],
      'vivrebbe': ['vivere', 'würde leben'],
      'villa': ['la villa', 'Villa'],
      'lussuosa': ['lussuoso', 'luxuriös'],
      'lavorerebbe': ['lavorare', 'würde arbeiten'],
      'sua': ['suo', 'seine'],
      'moglie': ['la moglie', 'Frau (Ehefrau)'],
      'invece': ['invece', 'dagegen'],
      'dice': ['dire', 'sagt'],
      'vincessimo': ['vincere', 'wir gewinnen würden (se vincessimo)'],
      'donerei': ['donare', 'ich würde spenden'],
      'metà': ['la metà', 'Hälfte', 'die Hälfte'],
      'soldi': ['i soldi', 'Geld'],
      'sorride': ['sorridere', 'lächelt'],
      'bello': ['bello', 'schön'],
      'finora': ['finora', 'bisher', 'bisher'],
      'vinto': ['vincere', 'gewonnen'],
      'nemmeno': ['nemmeno', 'nicht einmal', 'nicht einmal'],
    },
    uebersetzung: {
      "Ogni sabato Paolo fa una scommessa: compra un biglietto e aspetta l'estrazione.": 'Jeden Samstag wettet Paolo: Er kauft ein Los und wartet auf die Ziehung.',
      'Se diventasse milionario, farebbe il giro del mondo su uno yacht.': 'Wenn er Millionär würde, würde er mit einer Jacht um die Welt fahren.',
      'Vivrebbe in una villa lussuosa e non lavorerebbe più.': 'Er würde in einer luxuriösen Villa leben und nicht mehr arbeiten.',
      'Sua moglie invece dice: se vincessimo, donerei metà dei soldi in beneficenza.': 'Seine Frau dagegen sagt: Wenn wir gewinnen würden, würde ich die Hälfte des Geldes spenden.',
      'Paolo sorride: è bello sognare.': 'Paolo lächelt: Es ist schön zu träumen.',
      'Ma finora non ha vinto nemmeno dieci euro!': 'Aber bisher hat er nicht einmal zehn Euro gewonnen!',
    },
    fragen: [
      { frage: 'Was würde Paolo als Millionär tun?', antworten: ['Mit einer Jacht um die Welt fahren', 'Ein Restaurant eröffnen', 'Weiter arbeiten'] },
      { frage: 'Was würde seine Frau mit dem Geld machen?', antworten: ['Die Hälfte spenden', 'Alles ausgeben', 'Ein Haus kaufen'] },
      { frage: 'Wie viel hat Paolo bisher gewonnen?', antworten: ['Nicht einmal zehn Euro', 'Eine Million', 'Hundert Euro'] },
    ],
  },

  {
    id: 'b2-carattere', titel: 'Che tipo sei?', art: 'Text', stufe: 'B2',
    text: `Se dovessi descrivere mio fratello, direi che è generoso e affidabile.

È anche ambizioso, ma non egoista. Anzi, è molto umile.

Mia sorella invece è orgogliosa e testarda. Se le dicessi che ha torto, non lo ammetterebbe mai!

Però è onesta e sensibile: per lei l'onestà è tutto.

E io? Vorrei essere più coraggiosa e meno superficiale. Nessuno è perfetto!`,
    woerter: {
      'se': ['se', 'wenn'],
      'dovessi': ['dovere', 'ich müsste (se dovessi = wenn ich müsste)'],
      'descrivere': ['descrivere', 'beschreiben', 'beschreiben'],
      'direi': ['dire', 'ich würde sagen'],
      'anzi': ['anzi', 'im Gegenteil', 'im Gegenteil'],
      'invece': ['invece', 'dagegen'],
      'orgogliosa': ['orgoglioso', 'stolz'],
      'testarda': ['testardo', 'stur'],
      'dicessi': ['dire', 'ich sagen würde (se le dicessi)'],
      'torto': ['avere torto', 'Unrecht (ha torto = hat unrecht)'],
      'ammetterebbe': ['ammettere', 'würde zugeben', 'zugeben'],
      'mai': ['mai', 'nie', 'nie'],
      'però': ['però', 'aber'],
      'onesta': ['onesto', 'ehrlich'],
      'per': ['per', 'für'],
      'lei': ['lei', 'sie'],
      'tutto': ['tutto', 'alles'],
      'vorrei': ['volere', 'ich möchte'],
      'coraggiosa': ['coraggioso', 'mutig'],
      'nessuno': ['nessuno', 'niemand'],
      'perfetto': ['perfetto', 'perfekt', 'perfekt'],
    },
    uebersetzung: {
      'Se dovessi descrivere mio fratello, direi che è generoso e affidabile.': 'Wenn ich meinen Bruder beschreiben müsste, würde ich sagen, dass er großzügig und zuverlässig ist.',
      'È anche ambizioso, ma non egoista.': 'Er ist auch ehrgeizig, aber nicht egoistisch.',
      'Anzi, è molto umile.': 'Im Gegenteil, er ist sehr bescheiden.',
      'Mia sorella invece è orgogliosa e testarda.': 'Meine Schwester dagegen ist stolz und stur.',
      'Se le dicessi che ha torto, non lo ammetterebbe mai!': 'Wenn ich ihr sagen würde, dass sie unrecht hat, würde sie es nie zugeben!',
      "Però è onesta e sensibile: per lei l'onestà è tutto.": 'Aber sie ist ehrlich und sensibel: Für sie ist Ehrlichkeit alles.',
      'E io?': 'Und ich?',
      'Vorrei essere più coraggiosa e meno superficiale.': 'Ich wäre gern mutiger und weniger oberflächlich.',
      'Nessuno è perfetto!': 'Niemand ist perfekt!',
    },
    fragen: [
      { frage: 'Wie ist der Bruder?', antworten: ['Großzügig, zuverlässig, bescheiden', 'Stur und stolz', 'Egoistisch'] },
      { frage: 'Was würde die Schwester nie tun?', antworten: ['Zugeben, dass sie unrecht hat', 'Lügen', 'Helfen'] },
      { frage: 'Wie wäre die Erzählerin gern?', antworten: ['Mutiger und weniger oberflächlich', 'Reicher', 'Größer'] },
    ],
  },

  {
    id: 'b2-mondo', titel: 'Se potessi cambiare il mondo', art: 'Text', stufe: 'B2',
    text: `Sofia fa volontariato in un'associazione che aiuta le persone povere.

Se potesse cambiare il mondo, risolverebbe prima di tutto il problema della fame.

Vorrebbe che la sanità e l'istruzione fossero gratuite per tutti.

Secondo lei, la disuguaglianza è la più grande ingiustizia del nostro tempo.

Molti volontari pensano come lei: senza solidarietà non ci sarà mai vero benessere. Ogni piccolo gesto può migliorare le cose.`,
    woerter: {
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      "un'associazione": ["l'associazione", 'Verein'],
      'aiuta': ['aiutare', 'hilft'],
      'persone': ['la persona', 'Menschen'],
      'povere': ['povero', 'arm', 'arm'],
      'potesse': ['potere', 'könnte (se potesse = wenn sie könnte)'],
      'cambiare': ['cambiare', 'verändern'],
      'risolverebbe': ['risolvere', 'würde lösen'],
      'prima': ['prima', 'vor allem (prima di tutto)'],
      'tutto': ['tutto', 'alles'],
      'problema': ['il problema', 'Problem'],
      'vorrebbe': ['volere', 'möchte'],
      'fossero': ['essere', 'wären'],
      'gratuite': ['gratuito', 'kostenlos'],
      'per': ['per', 'für'],
      'tutti': ['tutto', 'alle'],
      'secondo': ['secondo', 'laut; nach (secondo lei = ihrer Meinung nach)'],
      'lei': ['lei', 'sie'],
      'nostro': ['nostro', 'unserer'],
      'tempo': ['il tempo', 'Zeit'],
      'volontari': ['il volontario', 'Freiwillige'],
      'pensano': ['pensare', 'denken'],
      'come': ['come', 'wie'],
      'senza': ['senza', 'ohne'],
      'sarà': ['essere', 'wird (ci sarà = wird es geben)'],
      'mai': ['mai', 'nie'],
      'vero': ['vero', 'echt; wahr', 'wahr'],
      'ogni': ['ogni', 'jede'],
      'gesto': ['il gesto', 'Geste', 'die Geste'],
      'può': ['potere', 'kann'],
      'cose': ['la cosa', 'Dinge'],
    },
    uebersetzung: {
      "Sofia fa volontariato in un'associazione che aiuta le persone povere.": 'Sofia arbeitet ehrenamtlich in einem Verein, der armen Menschen hilft.',
      'Se potesse cambiare il mondo, risolverebbe prima di tutto il problema della fame.': 'Wenn sie die Welt verändern könnte, würde sie vor allem das Problem des Hungers lösen.',
      "Vorrebbe che la sanità e l'istruzione fossero gratuite per tutti.": 'Sie möchte, dass Gesundheit und Bildung für alle kostenlos wären.',
      'Secondo lei, la disuguaglianza è la più grande ingiustizia del nostro tempo.': 'Ihrer Meinung nach ist die Ungleichheit die größte Ungerechtigkeit unserer Zeit.',
      'Molti volontari pensano come lei: senza solidarietà non ci sarà mai vero benessere.': 'Viele Freiwillige denken wie sie: Ohne Solidarität wird es nie echten Wohlstand geben.',
      'Ogni piccolo gesto può migliorare le cose.': 'Jede kleine Geste kann die Dinge verbessern.',
    },
    fragen: [
      { frage: 'Was macht Sofia?', antworten: ['Sie arbeitet ehrenamtlich', 'Sie ist Ärztin', 'Sie ist Politikerin'] },
      { frage: 'Welches Problem würde sie zuerst lösen?', antworten: ['Den Hunger', 'Den Verkehr', 'Die Arbeitslosigkeit'] },
      { frage: 'Was ist für sie die größte Ungerechtigkeit?', antworten: ['Die Ungleichheit', 'Die Krise', 'Das Wetter'] },
    ],
  },

  {
    id: 'b2-volo', titel: 'Un viaggio da dimenticare', art: 'Text', stufe: 'B2',
    text: `Che sfortuna! Al check-in hanno detto a Marco che c'era stato un overbooking.

Il volo successivo era cancellato. Marco ha aspettato dieci ore al gate.

All'arrivo, al ritiro bagagli, la sua valigia non c'era: era smarrita!

Ha dovuto fare una denuncia all'aeroporto. Per fortuna aveva una polizza di viaggio.

Marco pensa: avrei dovuto prendere il treno! Che disavventura, che guaio!`,
    woerter: {
      'check': ['il check-in', 'Check (check-in)', 'der Check-in'],
      'ritiro': ['il ritiro bagagli', 'Abholung (ritiro bagagli = Gepäckausgabe)', 'die Gepäckausgabe'],
      'bagagli': ['il bagaglio', 'Gepäck', 'das Gepäck'],
      'detto': ['dire', 'gesagt'],
      'marco': ['Marco', 'Marco (Vorname)'],
      "c'era": ['esserci', 'es gab; war da'],
      'stato': ['essere', 'gewesen'],
      'volo': ['il volo', 'Flug'],
      'successivo': ['successivo', 'nächste; folgende', 'folgend'],
      'era': ['essere', 'war'],
      'aspettato': ['aspettare', 'gewartet'],
      'ore': ['ore', 'Stunden'],
      "all'arrivo": ["l'arrivo", 'bei der Ankunft'],
      'arrivo': ["l'arrivo", 'Ankunft'],
      'sua': ['suo', 'sein'],
      'valigia': ['la valigia', 'Koffer'],
      'smarrita': ['smarrito', 'verloren gegangen'],
      'dovuto': ['dovere', 'gemusst'],
      "all'aeroporto": ["l'aeroporto", 'am Flughafen'],
      'aeroporto': ["l'aeroporto", 'Flughafen'],
      'fortuna': ['la fortuna', 'Glück (per fortuna = zum Glück)'],
      'aveva': ['avere', 'hatte'],
      'viaggio': ['il viaggio', 'Reise'],
      'pensa': ['pensare', 'denkt'],
      'avrei': ['avere', 'ich hätte (avrei dovuto = ich hätte … sollen)'],
      'prendere': ['prendere', 'nehmen'],
    },
    uebersetzung: {
      "Che sfortuna! Al check-in hanno detto a Marco che c'era stato un overbooking.": 'So ein Pech! Beim Check-in hat man Marco gesagt, dass der Flug überbucht war.',
      'Il volo successivo era cancellato.': 'Der nächste Flug war gestrichen.',
      'Marco ha aspettato dieci ore al gate.': 'Marco hat zehn Stunden am Gate gewartet.',
      "All'arrivo, al ritiro bagagli, la sua valigia non c'era: era smarrita!": 'Bei der Ankunft, an der Gepäckausgabe, war sein Koffer nicht da: Er war verloren gegangen!',
      "Ha dovuto fare una denuncia all'aeroporto.": 'Er musste am Flughafen eine Verlustanzeige machen.',
      'Per fortuna aveva una polizza di viaggio.': 'Zum Glück hatte er eine Reiseversicherung.',
      'Marco pensa: avrei dovuto prendere il treno!': 'Marco denkt: Ich hätte den Zug nehmen sollen!',
      'Che disavventura, che guaio!': 'Was für ein Missgeschick, was für ein Schlamassel!',
    },
    fragen: [
      { frage: 'Was war beim Check-in los?', antworten: ['Der Flug war überbucht', 'Der Pass fehlte', 'Alles war gut'] },
      { frage: 'Wie lange hat Marco gewartet?', antworten: ['Zehn Stunden', 'Eine Stunde', 'Zwei Tage'] },
      { frage: 'Was denkt Marco am Ende?', antworten: ['Er hätte den Zug nehmen sollen', 'Er fliegt wieder', 'Er bleibt zu Hause'] },
    ],
  },

  {
    id: 'b2-rimpianti', titel: 'Avrei dovuto ascoltarti', art: 'Text', stufe: 'B2',
    text: `Anna aveva avvertito Luca: non comprare quella macchina usata!

Luca ha ignorato l'avvertimento. Dopo un mese la macchina si è rotta.

Ora si rende conto dello sbaglio e lo ammette: avrei dovuto ascoltarti.

Non è colpevole di tutto, ma la responsabilità è sua: aveva trascurato i consigli.

Anna gli dice: non serve rimpiangere il passato. Dagli errori si impara!`,
    woerter: {
      'anna': ['Anna', 'Anna (Vorname)'],
      'aveva': ['avere', 'hatte'],
      'avvertito': ['avvertire', 'gewarnt'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'comprare': ['comprare', 'kaufen'],
      'quella': ['quello', 'jenes'],
      'macchina': ['la macchina', 'Auto'],
      'usata': ['usato', 'gebraucht', 'gebraucht'],
      'ignorato': ['ignorare', 'ignoriert'],
      'mese': ['il mese', 'Monat'],
      'rotta': ['rompersi', 'kaputtgegangen'],
      'rende': ['rendersi conto', 'wird bewusst (si rende conto = merkt)'],
      'conto': ['rendersi conto', 'Bewusstsein (rendersi conto = merken)'],
      'ammette': ['ammettere', 'gibt zu'],
      'avrei': ['avere', 'ich hätte (avrei dovuto)'],
      'dovuto': ['dovere', 'sollen; gemusst'],
      'ascoltarti': ['ascoltare', 'auf dich hören'],
      'tutto': ['tutto', 'alles'],
      'sua': ['suo', 'seine'],
      'trascurato': ['trascurare', 'vernachlässigt; missachtet'],
      'consigli': ['il consiglio', 'Ratschläge'],
      'dice': ['dire', 'sagt'],
      'serve': ['servire', 'nützt'],
      'passato': ['il passato', 'Vergangenheit'],
      'errori': ["l'errore", 'Fehlern'],
      'impara': ['imparare', 'lernt (si impara = man lernt)'],
    },
    uebersetzung: {
      'Anna aveva avvertito Luca: non comprare quella macchina usata!': 'Anna hatte Luca gewarnt: Kauf nicht dieses Gebrauchtauto!',
      "Luca ha ignorato l'avvertimento.": 'Luca hat die Warnung ignoriert.',
      'Dopo un mese la macchina si è rotta.': 'Nach einem Monat ist das Auto kaputtgegangen.',
      'Ora si rende conto dello sbaglio e lo ammette: avrei dovuto ascoltarti.': 'Jetzt merkt er seinen Fehler und gibt es zu: Ich hätte auf dich hören sollen.',
      'Non è colpevole di tutto, ma la responsabilità è sua: aveva trascurato i consigli.': 'Er ist nicht an allem schuld, aber die Verantwortung liegt bei ihm: Er hatte die Ratschläge missachtet.',
      'Anna gli dice: non serve rimpiangere il passato.': 'Anna sagt ihm: Es nützt nichts, der Vergangenheit nachzutrauern.',
      'Dagli errori si impara!': 'Aus Fehlern lernt man!',
    },
    fragen: [
      { frage: 'Wovor hatte Anna gewarnt?', antworten: ['Vor dem Kauf eines Gebrauchtwagens', 'Vor einer Reise', 'Vor einem Job'] },
      { frage: 'Was ist nach einem Monat passiert?', antworten: ['Das Auto ist kaputtgegangen', 'Luca hat es verkauft', 'Nichts'] },
      { frage: 'Was sagt Anna am Ende?', antworten: ['Aus Fehlern lernt man', 'Kauf ein neues Auto', 'Du bist schuld'] },
    ],
  },

  {
    id: 'b2-autostrada', titel: 'Sull’autostrada', art: 'Text', stufe: 'B2',
    text: `Domenica Paolo è partito per il mare, ma in autostrada c'era un ingorgo terribile.

C'era stato un incidente e poi c'erano anche i lavori in corso.

Alla deviazione il navigatore si è sbagliato. Paolo avrebbe dovuto seguire i cartelli!

Poi ha avuto una gomma a terra. Il carro attrezzi è arrivato dopo due ore.

Al casello ha pagato il pedaggio e una multa per eccesso di velocità. Sarebbe stato meglio restare a casa!`,
    woerter: {
      'gomma': ['la gomma a terra', 'Reifen (gomma a terra = Platten)', 'der Platten'],
      'terra': ['la gomma a terra', 'Boden (gomma a terra = Platten)', 'der Platten'],
      'carro': ['il carro attrezzi', 'Wagen (carro attrezzi = Abschleppwagen)', 'der Abschleppwagen'],
      'attrezzi': ['il carro attrezzi', 'Werkzeug (carro attrezzi = Abschleppwagen)', 'der Abschleppwagen'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'partito': ['partire', 'losgefahren'],
      'per': ['per', 'nach; wegen', 'für'],
      'mare': ['il mare', 'Meer'],
      "c'era": ['esserci', 'es gab'],
      'terribile': ['terribile', 'schrecklich', 'schrecklich'],
      'stato': ['essere', 'gewesen'],
      "c'erano": ['esserci', 'es gab'],
      'sbagliato': ['sbagliare', 'geirrt (si è sbagliato)'],
      'avrebbe': ['avere', 'hätte (avrebbe dovuto = hätte sollen)'],
      'dovuto': ['dovere', 'sollen'],
      'seguire': ['seguire', 'folgen', 'folgen'],
      'cartelli': ['il cartello', 'Schilder'],
      'avuto': ['avere', 'gehabt'],
      'arrivato': ['arrivare', 'angekommen'],
      'ore': ['ore', 'Stunden'],
      'pagato': ['pagare', 'bezahlt'],
      'eccesso': ["l'eccesso", 'Überschreitung (eccesso di velocità = zu schnell)', 'das Übermaß'],
      'velocità': ['la velocità', 'Geschwindigkeit', 'die Geschwindigkeit'],
      'sarebbe': ['essere', 'wäre'],
      'meglio': ['meglio', 'besser'],
      'restare': ['restare', 'bleiben'],
    },
    uebersetzung: {
      "Domenica Paolo è partito per il mare, ma in autostrada c'era un ingorgo terribile.": 'Am Sonntag ist Paolo ans Meer gefahren, aber auf der Autobahn war ein schrecklicher Stau.',
      "C'era stato un incidente e poi c'erano anche i lavori in corso.": 'Es hatte einen Unfall gegeben und dann gab es auch noch eine Baustelle.',
      'Alla deviazione il navigatore si è sbagliato.': 'An der Umleitung hat sich das Navi geirrt.',
      'Paolo avrebbe dovuto seguire i cartelli!': 'Paolo hätte den Schildern folgen sollen!',
      'Poi ha avuto una gomma a terra.': 'Dann hatte er einen Platten.',
      'Il carro attrezzi è arrivato dopo due ore.': 'Der Abschleppwagen kam nach zwei Stunden.',
      'Al casello ha pagato il pedaggio e una multa per eccesso di velocità.': 'An der Mautstelle hat er die Maut und ein Bußgeld wegen zu hoher Geschwindigkeit bezahlt.',
      'Sarebbe stato meglio restare a casa!': 'Es wäre besser gewesen, zu Hause zu bleiben!',
    },
    fragen: [
      { frage: 'Warum gab es einen Stau?', antworten: ['Unfall und Baustelle', 'Schnee', 'Ein Fest'] },
      { frage: 'Was ist mit dem Auto passiert?', antworten: ['Ein Platten', 'Kein Benzin', 'Ein Motorschaden'] },
      { frage: 'Was musste Paolo zusätzlich zahlen?', antworten: ['Ein Bußgeld wegen zu schnell', 'Einen Mechaniker', 'Nichts'] },
    ],
  },

  {
    id: 'b2-rapina', titel: 'Rapina in banca', art: 'Text', stufe: 'B2',
    text: `Ieri c'è stata una rapina nella banca del paese. Due rapinatori hanno preso cinquantamila euro.

I carabinieri pensano che uno dei due abbia avuto un complice tra i dipendenti.

Un poliziotto crede che la vittima, il cassiere, abbia riconosciuto un sospettato.

Mancano però le prove. Le indagini continuano.

Si spera che la refurtiva venga ritrovata presto e che il crimine non resti senza arresto.`,
    woerter: {
      'ieri': ['ieri', 'gestern'],
      "c'è": ['esserci', 'es gab (c’è stata)'],
      'stata': ['essere', 'gewesen'],
      'banca': ['la banca', 'Bank'],
      'paese': ['il paese', 'Ort'],
      'rapinatori': ['il rapinatore', 'Räuber'],
      'preso': ['prendere', 'genommen'],
      'cinquantamila': ['cinquantamila', 'fünfzigtausend'],
      'pensano': ['pensare', 'denken'],
      'abbia': ['avere', 'habe (congiuntivo)'],
      'avuto': ['avere', 'gehabt'],
      'tra': ['tra', 'unter'],
      'dipendenti': ['il dipendente', 'Angestellte'],
      'crede': ['credere', 'glaubt'],
      'cassiere': ['il cassiere', 'Kassierer'],
      'riconosciuto': ['riconoscere', 'erkannt', 'erkennen'],
      'mancano': ['mancare', 'fehlen'],
      'però': ['però', 'aber'],
      'prove': ['la prova', 'Beweise'],
      'indagini': ["l'indagine", 'Ermittlungen'],
      'continuano': ['continuare', 'gehen weiter', 'weitermachen'],
      'spera': ['sperare', 'hofft (si spera = man hofft)'],
      'venga': ['venire', 'werde (venga ritrovata = wiedergefunden werde)'],
      'ritrovata': ['ritrovare', 'wiedergefunden', 'wiederfinden'],
      'resti': ['restare', 'bleibe'],
      'senza': ['senza', 'ohne'],
    },
    uebersetzung: {
      "Ieri c'è stata una rapina nella banca del paese.": 'Gestern gab es einen Überfall auf die Bank des Ortes.',
      'Due rapinatori hanno preso cinquantamila euro.': 'Zwei Räuber haben fünfzigtausend Euro mitgenommen.',
      'I carabinieri pensano che uno dei due abbia avuto un complice tra i dipendenti.': 'Die Carabinieri glauben, dass einer der beiden einen Komplizen unter den Angestellten hatte.',
      'Un poliziotto crede che la vittima, il cassiere, abbia riconosciuto un sospettato.': 'Ein Polizist glaubt, dass das Opfer, der Kassierer, einen Verdächtigen erkannt hat.',
      'Mancano però le prove.': 'Es fehlen aber die Beweise.',
      'Le indagini continuano.': 'Die Ermittlungen gehen weiter.',
      'Si spera che la refurtiva venga ritrovata presto e che il crimine non resti senza arresto.': 'Man hofft, dass die Beute bald gefunden wird und das Verbrechen nicht ohne Festnahme bleibt.',
    },
    fragen: [
      { frage: 'Wie viel Geld haben die Räuber genommen?', antworten: ['50.000 Euro', '5.000 Euro', 'Eine Million'] },
      { frage: 'Was glauben die Carabinieri?', antworten: ['Es gab einen Komplizen unter den Angestellten', 'Es waren Touristen', 'Nichts'] },
      { frage: 'Was fehlt noch?', antworten: ['Beweise', 'Zeugen', 'Die Polizei'] },
    ],
  },

  {
    id: 'b2-cassaforte', titel: 'La cassaforte vuota', art: 'Text', stufe: 'B2',
    text: `Stamattina il gioielliere ha trovato la cassaforte vuota.

Mancavano anelli, braccialetti, orecchini di perle e un diamante.

Sembra che i ladri abbiano scassinato la serratura della porta sul retro.

È strano che la telecamera non abbia registrato niente e che la guardia non si sia accorta di nulla.

Il gioielliere dubita che il negozio fosse sorvegliato bene.`,
    woerter: {
      'stamattina': ['stamattina', 'heute Morgen', 'heute Morgen'],
      'trovato': ['trovare', 'gefunden'],
      'vuota': ['vuoto', 'leer', 'leer'],
      'mancavano': ['mancare', 'fehlten'],
      'anelli': ["l'anello", 'Ringe'],
      'braccialetti': ['il braccialetto', 'Armbänder'],
      'perle': ['la perla', 'Perlen'],
      'sembra': ['sembrare', 'scheint'],
      'ladri': ['il ladro', 'Diebe'],
      'abbiano': ['avere', 'haben (congiuntivo)'],
      'scassinato': ['scassinare', 'aufgebrochen'],
      'porta': ['la porta', 'Tür'],
      'retro': ['il retro', 'Rückseite (sul retro = hinten)', 'die Rückseite'],
      'strano': ['strano', 'seltsam', 'seltsam'],
      'abbia': ['avere', 'habe (congiuntivo)'],
      'registrato': ['registrare', 'aufgezeichnet', 'aufnehmen'],
      'sia': ['essere', 'sei (congiuntivo)'],
      'accorta': ['accorgersi', 'bemerkt (si sia accorta)', 'bemerken'],
      'nulla': ['nulla', 'nichts', 'nichts'],
      'dubita': ['dubitare', 'bezweifelt'],
      'negozio': ['il negozio', 'Geschäft'],
      'fosse': ['essere', 'wäre (congiuntivo)'],
      'sorvegliato': ['sorvegliare', 'überwacht'],
    },
    uebersetzung: {
      'Stamattina il gioielliere ha trovato la cassaforte vuota.': 'Heute Morgen hat der Juwelier den Tresor leer vorgefunden.',
      'Mancavano anelli, braccialetti, orecchini di perle e un diamante.': 'Es fehlten Ringe, Armbänder, Perlenohrringe und ein Diamant.',
      'Sembra che i ladri abbiano scassinato la serratura della porta sul retro.': 'Es scheint, dass die Diebe das Schloss der Hintertür aufgebrochen haben.',
      'È strano che la telecamera non abbia registrato niente e che la guardia non si sia accorta di nulla.': 'Es ist seltsam, dass die Kamera nichts aufgezeichnet und der Wachmann nichts bemerkt hat.',
      'Il gioielliere dubita che il negozio fosse sorvegliato bene.': 'Der Juwelier bezweifelt, dass das Geschäft gut überwacht war.',
    },
    fragen: [
      { frage: 'Was hat der Juwelier gefunden?', antworten: ['Den leeren Tresor', 'Einen Dieb', 'Einen Diamanten'] },
      { frage: 'Wie sind die Diebe hineingekommen?', antworten: ['Durch die Hintertür', 'Durch das Fenster', 'Mit einem Schlüssel'] },
      { frage: 'Was ist seltsam?', antworten: ['Die Kamera hat nichts aufgezeichnet', 'Nichts fehlt', 'Die Polizei war da'] },
    ],
  },

  {
    id: 'b2-redazione', titel: 'Una notizia falsa', art: 'Text', stufe: 'B2',
    text: `Ieri un quotidiano ha pubblicato in prima pagina una notizia sensazionale.

Il titolo diceva che il sindaco si era dimesso. Poco dopo anche il telegiornale l'ha ripetuta.

Ma la redazione non aveva controllato la fonte: era una notizia falsa!

Oggi il direttore si scusa: è grave che nessuno abbia verificato la storia prima dell'edizione.

Una rivista settimanale ha intervistato il sindaco, che ha detto: la stampa deve essere più seria!`,
    woerter: {
      'ieri': ['ieri', 'gestern'],
      'pubblicato': ['pubblicare', 'veröffentlicht'],
      'prima': ['primo', 'erste (in prima pagina = auf der Titelseite)'],
      'pagina': ['la pagina', 'Seite', 'die Seite'],
      'sensazionale': ['sensazionale', 'sensationell', 'sensationell'],
      'diceva': ['dire', 'sagte; besagte'],
      'sindaco': ['il sindaco', 'Bürgermeister'],
      'era': ['essere', 'war (si era dimesso = war zurückgetreten)'],
      'dimesso': ['dimettersi', 'zurückgetreten'],
      'poco': ['poco', 'kurz (poco dopo = kurz danach)'],
      "l'ha": ['avere', 'hat sie'],
      'ripetuta': ['ripetere', 'wiederholt'],
      'aveva': ['avere', 'hatte'],
      'controllato': ['controllare', 'geprüft'],
      'oggi': ['oggi', 'heute'],
      'direttore': ['il direttore', 'Chefredakteur; Direktor'],
      'scusa': ['scusarsi', 'entschuldigt sich (si scusa)'],
      'grave': ['grave', 'schlimm; schwer', 'schwer'],
      'nessuno': ['nessuno', 'niemand'],
      'abbia': ['avere', 'habe (congiuntivo)'],
      'verificato': ['verificare', 'überprüft', 'überprüfen'],
      'storia': ['la storia', 'Geschichte'],
      "dell'edizione": ["l'edizione", 'der Ausgabe'],
      'intervistato': ['intervistare', 'interviewt'],
      'detto': ['dire', 'gesagt'],
      'deve': ['dovere', 'muss'],
      'seria': ['serio', 'seriös; ernsthaft'],
    },
    uebersetzung: {
      'Ieri un quotidiano ha pubblicato in prima pagina una notizia sensazionale.': 'Gestern hat eine Tageszeitung auf der Titelseite eine sensationelle Nachricht veröffentlicht.',
      'Il titolo diceva che il sindaco si era dimesso.': 'Die Überschrift besagte, dass der Bürgermeister zurückgetreten war.',
      "Poco dopo anche il telegiornale l'ha ripetuta.": 'Kurz danach hat auch die Tagesschau sie wiederholt.',
      'Ma la redazione non aveva controllato la fonte: era una notizia falsa!': 'Aber die Redaktion hatte die Quelle nicht geprüft: Es war eine Falschmeldung!',
      "Oggi il direttore si scusa: è grave che nessuno abbia verificato la storia prima dell'edizione.": 'Heute entschuldigt sich der Chefredakteur: Es ist schlimm, dass niemand die Geschichte vor der Ausgabe überprüft hat.',
      'Una rivista settimanale ha intervistato il sindaco, che ha detto: la stampa deve essere più seria!': 'Eine Wochenzeitschrift hat den Bürgermeister interviewt, der sagte: Die Presse muss seriöser sein!',
    },
    fragen: [
      { frage: 'Was stand in der Zeitung?', antworten: ['Der Bürgermeister sei zurückgetreten', 'Es gab einen Unfall', 'Ein neues Gesetz'] },
      { frage: 'Was hatte die Redaktion nicht getan?', antworten: ['Die Quelle geprüft', 'Den Artikel gedruckt', 'Den Titel geschrieben'] },
      { frage: 'Was sagt der Bürgermeister?', antworten: ['Die Presse muss seriöser sein', 'Er tritt zurück', 'Nichts'] },
    ],
  },

  {
    id: 'b2-regno', titel: 'Il racconto del nonno', art: 'Text', stufe: 'B2',
    text: `Il nonno narra spesso un racconto antico.

C'era un regno nel sud. Il principe e la principessa vivevano nel palazzo reale.

Un giorno arrivò alla corte un giovane eroe. Il re organizzò un grande ricevimento in suo onore.

L'eroe raccontò di battaglie lontane e partì il giorno dopo.

Molti anni più tardi, con il Risorgimento, venne l'unificazione d'Italia, e tutti presero il tricolore come bandiera.`,
    woerter: {
      'reale': ['il palazzo reale', 'königlich', 'der Königspalast'],
      'nonno': ['il nonno', 'Opa'],
      'narra': ['narrare', 'erzählt'],
      'spesso': ['spesso', 'oft'],
      'antico': ['antico', 'alt'],
      "c'era": ['esserci', 'es gab'],
      'sud': ['il sud', 'Süden'],
      'vivevano': ['vivere', 'lebten'],
      'arrivò': ['arrivare', 'kam an (passato remoto)'],
      'giovane': ['giovane', 'jung'],
      're': ['il re', 'König', 'der König'],
      'organizzò': ['organizzare', 'organisierte'],
      'suo': ['suo', 'seine'],
      'onore': ["l'onore", 'Ehre (in suo onore = ihm zu Ehren)', 'die Ehre'],
      "l'eroe": ["l'eroe", 'der Held'],
      'raccontò': ['raccontare', 'erzählte'],
      'battaglie': ['la battaglia', 'Schlachten'],
      'lontane': ['lontano', 'fern'],
      'partì': ['partire', 'reiste ab'],
      'anni': ['anni', 'Jahre'],
      'tardi': ['tardi', 'später'],
      'venne': ['venire', 'kam'],
      "d'italia": ['Italia', 'Italiens'],
      'italia': ['Italia', 'Italien'],
      'tutti': ['tutto', 'alle'],
      'presero': ['prendere', 'nahmen'],
      'come': ['come', 'als'],
      'bandiera': ['la bandiera', 'Flagge', 'die Flagge'],
    },
    uebersetzung: {
      'Il nonno narra spesso un racconto antico.': 'Der Opa erzählt oft eine alte Geschichte.',
      "C'era un regno nel sud.": 'Es gab ein Königreich im Süden.',
      'Il principe e la principessa vivevano nel palazzo reale.': 'Der Prinz und die Prinzessin lebten im Königspalast.',
      'Un giorno arrivò alla corte un giovane eroe.': 'Eines Tages kam ein junger Held an den Hof.',
      'Il re organizzò un grande ricevimento in suo onore.': 'Der König gab ihm zu Ehren einen großen Empfang.',
      "L'eroe raccontò di battaglie lontane e partì il giorno dopo.": 'Der Held erzählte von fernen Schlachten und reiste am nächsten Tag ab.',
      "Molti anni più tardi, con il Risorgimento, venne l'unificazione d'Italia, e tutti presero il tricolore come bandiera.": 'Viele Jahre später, mit dem Risorgimento, kam die Einigung Italiens, und alle nahmen die Trikolore als Flagge.',
    },
    fragen: [
      { frage: 'Wo lebten Prinz und Prinzessin?', antworten: ['Im Königspalast', 'In einer Burg im Norden', 'Am Meer'] },
      { frage: 'Was machte der König für den Helden?', antworten: ['Einen großen Empfang', 'Eine Hochzeit', 'Nichts'] },
      { frage: 'Was kam viele Jahre später?', antworten: ['Die Einigung Italiens', 'Ein Krieg', 'Ein neuer König'] },
    ],
  },

  {
    id: 'b2-pizzaiolo', titel: 'Il pizzaiolo di Napoli', art: 'Text', stufe: 'B2',
    text: `Il nonno di Gennaro aprì il suo panificio nel 1950. Fece il pane con la pasta madre per trent'anni.

Gennaro invece diventò pizzaiolo. Accese il primo forno a legna nel 1985.

Il suo segreto è la lunga lievitazione: l'impasto lievita per ventiquattro ore.

La pizza ha la crosta sottile e un cornicione alto e morbido. Sopra mette mozzarella di bufala.

Nel suo locale si trovano anche calzoni, focaccia e pizza al taglio. La pala di legno è del nonno!`,
    woerter: {
      'bufala': ['la mozzarella di bufala', 'Büffel (mozzarella di bufala)', 'der Büffelmozzarella'],
      'nonno': ['il nonno', 'Großvater'],
      'gennaro': ['Gennaro', 'Gennaro (Vorname)'],
      'aprì': ['aprire', 'eröffnete'],
      'suo': ['suo', 'sein'],
      'fece': ['fare', 'machte'],
      'pane': ['il pane', 'Brot'],
      "trent'anni": ['trenta', 'dreißig Jahre'],
      "trent'": ['trenta', 'dreißig'],
      'invece': ['invece', 'dagegen'],
      'diventò': ['diventare', 'wurde'],
      'accese': ['accendere', 'zündete an'],
      'primo': ['primo', 'ersten'],
      'segreto': ['il segreto', 'Geheimnis'],
      'lunga': ['lungo', 'lang'],
      'lievita': ['lievitare', 'geht (Teig)'],
      'per': ['per', 'für; lang'],
      'ventiquattro': ['ventiquattro', 'vierundzwanzig'],
      'ore': ['ore', 'Stunden'],
      'alto': ['alto', 'hoch'],
      'morbido': ['morbido', 'weich'],
      'sopra': ['sopra', 'oben drauf'],
      'mette': ['mettere', 'legt'],
      'locale': ['il locale', 'Lokal', 'das Lokal'],
      'trovano': ['trovare', 'findet (si trovano = man findet)'],
      'calzoni': ['il calzone', 'Calzoni'],
      'legno': ['il legno', 'Holz'],
    },
    uebersetzung: {
      "Gennaro invece diventò pizzaiolo.": 'Gennaro dagegen wurde Pizzabäcker.',
      "Fece il pane con la pasta madre per trent'anni.": 'Dreißig Jahre lang machte er Brot mit Sauerteig.',
      'Accese il primo forno a legna nel 1985.': 'Den ersten Holzofen zündete er 1985 an.',
      'Il nonno di Gennaro aprì il suo panificio nel 1950.': 'Gennaros Großvater eröffnete seine Bäckerei 1950.',
      "Il suo segreto è la lunga lievitazione: l'impasto lievita per ventiquattro ore.": 'Sein Geheimnis ist die lange Gehzeit: Der Teig geht vierundzwanzig Stunden.',
      'La pizza ha la crosta sottile e un cornicione alto e morbido.': 'Die Pizza hat einen dünnen Boden und einen hohen, weichen Rand.',
      'Sopra mette mozzarella di bufala.': 'Oben drauf legt er Büffelmozzarella.',
      'Nel suo locale si trovano anche calzoni, focaccia e pizza al taglio.': 'In seinem Lokal gibt es auch Calzoni, Focaccia und Pizza vom Blech.',
      'La pala di legno è del nonno!': 'Die Holzschaufel ist vom Großvater!',
    },
    fragen: [
      { frage: 'Was war der Großvater von Gennaro?', antworten: ['Bäcker', 'Pizzabäcker', 'Koch'] },
      { frage: 'Wie lange geht der Teig?', antworten: ['24 Stunden', '2 Stunden', 'Eine Woche'] },
      { frage: 'Was kommt auf die Pizza?', antworten: ['Büffelmozzarella', 'Schinken', 'Pilze'] },
    ],
  },

  {
    id: 'b2-fiaba', titel: 'La fata e il cavaliere', art: 'Text', stufe: 'B2',
    text: `C'era una volta un cavaliere che viveva vicino a un bosco incantato.

Un giorno una strega cattiva rapì la principessa e la chiuse in una torre. Un drago la sorvegliava.

Il cavaliere partì per salvarla. Nel bosco incontrò una fata buona, che gli diede una spada magica.

Con la spada il protagonista vinse il drago e trovò anche un tesoro.

Il finale? Il mago della corte li sposò. La morale della favola: il coraggio vince sempre!`,
    woerter: {
      'viveva': ['vivere', 'lebte'],
      'vicino': ['vicino', 'nahe'],
      'bosco': ['il bosco', 'Wald'],
      'cattiva': ['cattivo', 'böse'],
      'rapì': ['rapire', 'entführte', 'entführen'],
      'principessa': ['la principessa', 'Prinzessin'],
      'chiuse': ['chiudere', 'schloss ein'],
      'torre': ['la torre', 'Turm'],
      'sorvegliava': ['sorvegliare', 'bewachte'],
      'partì': ['partire', 'brach auf'],
      'per': ['per', 'um zu'],
      'salvarla': ['salvare', 'sie retten', 'retten'],
      'incontrò': ['incontrare', 'traf'],
      'buona': ['buono', 'gut'],
      'diede': ['dare', 'gab'],
      'spada': ['la spada', 'Schwert', 'das Schwert'],
      'magica': ['magico', 'Zauber-'],
      'vinse': ['vincere', 'besiegte'],
      'trovò': ['trovare', 'fand'],
      'corte': ['la corte', 'Hof'],
      'sposò': ['sposare', 'traute (li sposò = traute sie)', 'trauen; heiraten'],
      'coraggio': ['il coraggio', 'Mut'],
      'vince': ['vincere', 'siegt'],
    },
    uebersetzung: {
      "C'era una volta un cavaliere che viveva vicino a un bosco incantato.": 'Es war einmal ein Ritter, der nahe einem verzauberten Wald lebte.',
      'Un giorno una strega cattiva rapì la principessa e la chiuse in una torre.': 'Eines Tages entführte eine böse Hexe die Prinzessin und schloss sie in einen Turm ein.',
      'Un drago la sorvegliava.': 'Ein Drache bewachte sie.',
      'Il cavaliere partì per salvarla.': 'Der Ritter brach auf, um sie zu retten.',
      'Nel bosco incontrò una fata buona, che gli diede una spada magica.': 'Im Wald traf er eine gute Fee, die ihm ein Zauberschwert gab.',
      'Con la spada il protagonista vinse il drago e trovò anche un tesoro.': 'Mit dem Schwert besiegte der Held den Drachen und fand auch einen Schatz.',
      'Il finale?': 'Das Ende?',
      'Il mago della corte li sposò.': 'Der Hofzauberer traute sie.',
      'La morale della favola: il coraggio vince sempre!': 'Die Moral der Geschichte: Mut siegt immer!',
    },
    fragen: [
      { frage: 'Wer hat die Prinzessin entführt?', antworten: ['Eine böse Hexe', 'Ein Drache', 'Ein Zauberer'] },
      { frage: 'Was gab die Fee dem Ritter?', antworten: ['Ein Zauberschwert', 'Einen Schatz', 'Ein Pferd'] },
      { frage: 'Was ist die Moral?', antworten: ['Mut siegt immer', 'Geld macht glücklich', 'Hexen sind gut'] },
    ],
  },

  {
    id: 'b2-chef', titel: 'Intervista allo chef', art: 'Text', stufe: 'B2',
    text: `Il critico gastronomico ha chiesto allo chef quale fosse il segreto del suo successo.

Lo chef ha risposto che usava solo prodotti di stagione e a chilometro zero.

Ha spiegato che conosceva personalmente ogni produttore e che la materia prima era tutto.

Ha aggiunto che il suo menù degustazione era un viaggio nella cucina regionale.

Il sommelier ha detto che avrebbe scelto lui l'abbinamento con i vini. Alla fine lo chef ha ringraziato la sua brigata.`,
    woerter: {
      'chilometro': ['a chilometro zero', 'Kilometer (a chilometro zero = aus der Region)', 'aus der Region'],
      'zero': ['a chilometro zero', 'null (a chilometro zero = aus der Region)', 'aus der Region'],
      'degustazione': ['il menù degustazione', 'Verkostung (menù degustazione)', 'das Degustationsmenü'],
      'gastronomico': ['gastronomico', 'Gastro- (critico gastronomico = Restaurantkritiker)', 'gastronomisch'],
      'chiesto': ['chiedere', 'gefragt'],
      'quale': ['quale', 'welches', 'welcher'],
      'fosse': ['essere', 'sei (congiuntivo)'],
      'segreto': ['il segreto', 'Geheimnis'],
      'suo': ['suo', 'sein'],
      'successo': ['il successo', 'Erfolg'],
      'risposto': ['rispondere', 'geantwortet'],
      'usava': ['usare', 'benutze'],
      'prodotti': ['il prodotto', 'Produkte'],
      'spiegato': ['spiegare', 'erklärt'],
      'conosceva': ['conoscere', 'kenne'],
      'personalmente': ['personalmente', 'persönlich', 'persönlich'],
      'ogni': ['ogni', 'jeden'],
      'era': ['essere', 'sei; war'],
      'tutto': ['tutto', 'alles'],
      'aggiunto': ['aggiungere', 'hinzugefügt'],
      'viaggio': ['il viaggio', 'Reise'],
      'detto': ['dire', 'gesagt'],
      'avrebbe': ['avere', 'würde (avrebbe scelto = werde auswählen)'],
      'scelto': ['scegliere', 'ausgewählt'],
      'lui': ['lui', 'er'],
      'vini': ['il vino', 'Weinen'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
      'ringraziato': ['ringraziare', 'gedankt'],
      'sua': ['suo', 'seiner'],
    },
    uebersetzung: {
      'Il critico gastronomico ha chiesto allo chef quale fosse il segreto del suo successo.': 'Der Restaurantkritiker hat den Küchenchef gefragt, was das Geheimnis seines Erfolgs sei.',
      'Lo chef ha risposto che usava solo prodotti di stagione e a chilometro zero.': 'Der Küchenchef hat geantwortet, dass er nur saisonale Produkte aus der Region benutze.',
      'Ha spiegato che conosceva personalmente ogni produttore e che la materia prima era tutto.': 'Er hat erklärt, dass er jeden Erzeuger persönlich kenne und die Grundzutat alles sei.',
      'Ha aggiunto che il suo menù degustazione era un viaggio nella cucina regionale.': 'Er hat hinzugefügt, dass sein Degustationsmenü eine Reise durch die regionale Küche sei.',
      "Il sommelier ha detto che avrebbe scelto lui l'abbinamento con i vini.": 'Der Sommelier hat gesagt, er werde die passenden Weine aussuchen.',
      'Alla fine lo chef ha ringraziato la sua brigata.': 'Am Ende hat der Küchenchef seiner Küchenmannschaft gedankt.',
    },
    fragen: [
      { frage: 'Welche Produkte benutzt der Koch?', antworten: ['Saisonale aus der Region', 'Nur importierte', 'Tiefkühlware'] },
      { frage: 'Was ist für ihn am wichtigsten?', antworten: ['Die Grundzutat', 'Der Preis', 'Die Deko'] },
      { frage: 'Wem dankt er am Ende?', antworten: ['Seiner Küchenmannschaft', 'Dem Kritiker', 'Den Gästen'] },
    ],
  },

  {
    id: 'b2-dichiarazioni', titel: 'Il discorso del sindaco', art: 'Text', stufe: 'B2',
    text: `Durante il discorso, il sindaco ha annunciato che la piazza sarebbe diventata pedonale.

Ha precisato che i lavori sarebbero cominciati a marzo.

Un giornalista ha riferito che il sindaco aveva confessato di avere dei dubbi. Ma il sindaco ha smentito subito.

Alla fine qualcuno ha gridato una frase contro di lui. Il sindaco ha sussurrato: non commento.

Il giorno dopo i giornali hanno citato le sue parole. Il commento più famoso? Una citazione di Dante!`,
    woerter: {
      'durante': ['durante', 'während'],
      'sindaco': ['il sindaco', 'Bürgermeister'],
      'annunciato': ['annunciare', 'angekündigt'],
      'piazza': ['la piazza', 'Platz'],
      'sarebbe': ['essere', 'würde (sarebbe diventata = werde … werden)'],
      'diventata': ['diventare', 'geworden'],
      'pedonale': ['la zona pedonale', 'Fußgänger- (pedonale = autofrei)'],
      'precisato': ['precisare', 'klargestellt'],
      'lavori': ['il lavoro', 'Arbeiten; Bauarbeiten'],
      'sarebbero': ['essere', 'würden (sarebbero cominciati = würden beginnen)'],
      'cominciati': ['cominciare', 'begonnen'],
      'marzo': ['marzo', 'März'],
      'giornalista': ['il giornalista', 'Journalist', 'der Journalist'],
      'riferito': ['riferire', 'berichtet'],
      'aveva': ['avere', 'hatte'],
      'confessato': ['confessare', 'gestanden'],
      'dei': ['dei', 'einige'],
      'dubbi': ['il dubbio', 'Zweifel'],
      'smentito': ['smentire', 'dementiert'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
      'qualcuno': ['qualcuno', 'jemand', 'jemand'],
      'gridato': ['gridare', 'gerufen; geschrien'],
      'contro': ['contro', 'gegen'],
      'lui': ['lui', 'ihn'],
      'sussurrato': ['sussurrare', 'geflüstert'],
      'commento': ['commentare', 'ich kommentiere'],
      'giorno': ['il giorno', 'Tag'],
      'giornali': ['il giornale', 'Zeitungen'],
      'citato': ['citare', 'zitiert'],
      'sue': ['suo', 'seine'],
      'parole': ['la parola', 'Worte'],
      'famoso': ['famoso', 'berühmt', 'berühmt'],
      'dante': ['Dante', 'Dante (Dichter)'],
    },
    uebersetzung: {
      'Durante il discorso, il sindaco ha annunciato che la piazza sarebbe diventata pedonale.': 'Während der Rede hat der Bürgermeister angekündigt, dass der Platz autofrei werde.',
      'Ha precisato che i lavori sarebbero cominciati a marzo.': 'Er hat klargestellt, dass die Arbeiten im März beginnen würden.',
      'Un giornalista ha riferito che il sindaco aveva confessato di avere dei dubbi.': 'Ein Journalist hat berichtet, dass der Bürgermeister Zweifel gestanden habe.',
      'Ma il sindaco ha smentito subito.': 'Aber der Bürgermeister hat sofort dementiert.',
      'Alla fine qualcuno ha gridato una frase contro di lui.': 'Am Ende hat jemand einen Satz gegen ihn gerufen.',
      'Il sindaco ha sussurrato: non commento.': 'Der Bürgermeister hat geflüstert: Kein Kommentar.',
      'Il giorno dopo i giornali hanno citato le sue parole.': 'Am nächsten Tag haben die Zeitungen seine Worte zitiert.',
      'Il commento più famoso?': 'Der berühmteste Kommentar?',
      'Una citazione di Dante!': 'Ein Zitat von Dante!',
    },
    fragen: [
      { frage: 'Was hat der Bürgermeister angekündigt?', antworten: ['Der Platz wird autofrei', 'Er tritt zurück', 'Neue Steuern'] },
      { frage: 'Wann beginnen die Arbeiten?', antworten: ['Im März', 'Im Mai', 'Nächstes Jahr'] },
      { frage: 'Was hat er auf den Zwischenruf geantwortet?', antworten: ['Kein Kommentar', 'Danke', 'Er hat geschrien'] },
    ],
  },

  {
    id: 'b2-parita', titel: 'Conciliare lavoro e famiglia', art: 'Text', stufe: 'B2',
    text: `Chiara è ingegnere e madre di due bambini. Ha detto alla giornalista che conciliare lavoro e famiglia era la sua sfida più grande.

Ha raccontato che dopo la maternità aveva preso solo tre mesi di congedo.

Ha spiegato che l'asilo nido costava molto e che spesso chiamava una babysitter.

Secondo lei, in Italia ci sono ancora molti pregiudizi e forme di discriminazione nel lavoro femminile.

Ha concluso che la parità richiede determinazione e passione. Per lei, l'indipendenza economica è fondamentale.`,
    woerter: {
      'asilo': ["l'asilo nido", 'Kita (asilo nido = Krippe)', 'die Kinderkrippe'],
      'nido': ["l'asilo nido", 'Nest (asilo nido = Krippe)', 'die Kinderkrippe'],
      'chiara': ['Chiara', 'Chiara (Vorname)'],
      'ingegnere': ["l'ingegnere", 'Ingenieurin', 'der Ingenieur'],
      'madre': ['la madre', 'Mutter'],
      'bambini': ['il bambino', 'Kinder'],
      'detto': ['dire', 'gesagt'],
      'giornalista': ['il giornalista', 'Journalistin'],
      'era': ['essere', 'sei'],
      'sua': ['suo', 'ihre'],
      'raccontato': ['raccontare', 'erzählt'],
      'aveva': ['avere', 'habe; hatte'],
      'preso': ['prendere', 'genommen'],
      'mesi': ['il mese', 'Monate'],
      'spiegato': ['spiegare', 'erklärt'],
      'costava': ['costare', 'koste'],
      'spesso': ['spesso', 'oft'],
      'chiamava': ['chiamare', 'rufe'],
      'secondo': ['secondo', 'laut (secondo lei = ihrer Meinung nach)'],
      'lei': ['lei', 'sie'],
      'italia': ['Italia', 'Italien'],
      'ancora': ['ancora', 'noch'],
      'pregiudizi': ['il pregiudizio', 'Vorurteile'],
      'forme': ['la forma', 'Formen', 'die Form'],
      'concluso': ['concludere', 'abgeschlossen; gefolgert'],
      'richiede': ['richiedere', 'erfordert', 'erfordern'],
      'per': ['per', 'für'],
      'economica': ['economico', 'wirtschaftlich'],
      'fondamentale': ['fondamentale', 'grundlegend', 'grundlegend'],
    },
    uebersetzung: {
      'Chiara è ingegnere e madre di due bambini.': 'Chiara ist Ingenieurin und Mutter von zwei Kindern.',
      'Ha detto alla giornalista che conciliare lavoro e famiglia era la sua sfida più grande.': 'Sie hat der Journalistin gesagt, dass es ihre größte Herausforderung sei, Arbeit und Familie zu vereinbaren.',
      'Ha raccontato che dopo la maternità aveva preso solo tre mesi di congedo.': 'Sie hat erzählt, dass sie nach der Geburt nur drei Monate Elternzeit genommen habe.',
      "Ha spiegato che l'asilo nido costava molto e che spesso chiamava una babysitter.": 'Sie hat erklärt, dass die Krippe viel koste und dass sie oft einen Babysitter rufe.',
      'Secondo lei, in Italia ci sono ancora molti pregiudizi e forme di discriminazione nel lavoro femminile.': 'Ihrer Meinung nach gibt es in Italien noch viele Vorurteile und Formen der Diskriminierung bei der Frauenarbeit.',
      'Ha concluso che la parità richiede determinazione e passione.': 'Sie hat abschließend gesagt, dass Gleichberechtigung Entschlossenheit und Leidenschaft erfordert.',
      "Per lei, l'indipendenza economica è fondamentale.": 'Für sie ist wirtschaftliche Unabhängigkeit grundlegend.',
    },
    fragen: [
      { frage: 'Was ist Chiaras größte Herausforderung?', antworten: ['Arbeit und Familie vereinbaren', 'Eine Stelle finden', 'Italienisch lernen'] },
      { frage: 'Wie lange war sie in Elternzeit?', antworten: ['Drei Monate', 'Ein Jahr', 'Gar nicht'] },
      { frage: 'Was ist für sie grundlegend?', antworten: ['Wirtschaftliche Unabhängigkeit', 'Ein großes Haus', 'Ein Auto'] },
    ],
  },

  {
    id: 'b2-incontro', titel: 'Un incontro inaspettato', art: 'Text', stufe: 'B2',
    text: `Se Sara non avesse perso l'autobus quella mattina, non avrebbe mai conosciuto Marco.

Lo incontrò per caso alla fermata. Fu un colpo di fulmine!

All'improvviso Sara si trovò davanti a un bivio: restare a Milano o seguire Marco a Napoli?

Prese la decisione di cambiare vita. Rinunciò al suo lavoro e partì.

Oggi dice: se avessi scelto diversamente, ora avrei forse qualche rimorso. È stata la sorte!`,
    woerter: {
      'colpo': ['il colpo di fulmine', 'Schlag (colpo di fulmine = Liebe auf den ersten Blick)', 'die Liebe auf den ersten Blick'],
      'improvviso': ["all'improvviso", 'plötzlich (all’improvviso)', 'plötzlich'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'avesse': ['avere', 'hätte (se non avesse perso = hätte sie nicht verpasst)'],
      'perso': ['perdere', 'verpasst'],
      "l'autobus": ["l'autobus", 'den Bus'],
      'quella': ['quello', 'jenem'],
      'mattina': ['la mattina', 'Morgen'],
      'avrebbe': ['avere', 'hätte'],
      'mai': ['mai', 'nie'],
      'conosciuto': ['conoscere', 'kennengelernt'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'incontrò': ['incontrare', 'traf'],
      'fermata': ['la fermata', 'Haltestelle'],
      'fu': ['essere', 'war (Erzählzeit)'],
      'trovò': ['trovare', 'fand sich (si trovò)'],
      'davanti': ['davanti', 'vor (davanti a)'],
      'restare': ['restare', 'bleiben'],
      'milano': ['Milano', 'Mailand'],
      'seguire': ['seguire', 'folgen', 'folgen'],
      'napoli': ['Napoli', 'Neapel'],
      'prese': ['prendere', 'traf (prese la decisione)'],
      'rinunciò': ['rinunciare', 'verzichtete'],
      'suo': ['suo', 'ihre'],
      'partì': ['partire', 'zog fort'],
      'oggi': ['oggi', 'heute'],
      'dice': ['dire', 'sagt'],
      'avessi': ['avere', 'hätte ich'],
      'scelto': ['scegliere', 'gewählt'],
      'diversamente': ['diversamente', 'anders', 'anders'],
      'avrei': ['avere', 'hätte ich'],
      'forse': ['forse', 'vielleicht'],
      'qualche': ['qualche', 'etwas; einige'],
      'stata': ['essere', 'gewesen'],
    },
    uebersetzung: {
      "Se Sara non avesse perso l'autobus quella mattina, non avrebbe mai conosciuto Marco.": 'Hätte Sara an jenem Morgen nicht den Bus verpasst, hätte sie Marco nie kennengelernt.',
      'Lo incontrò per caso alla fermata.': 'Sie traf ihn zufällig an der Haltestelle.',
      'Fu un colpo di fulmine!': 'Es war Liebe auf den ersten Blick!',
      "All'improvviso Sara si trovò davanti a un bivio: restare a Milano o seguire Marco a Napoli?": 'Plötzlich stand Sara an einer Weggabelung: in Mailand bleiben oder Marco nach Neapel folgen?',
      'Prese la decisione di cambiare vita.': 'Sie traf die Entscheidung, ihr Leben zu ändern.',
      'Rinunciò al suo lavoro e partì.': 'Sie gab ihre Arbeit auf und zog fort.',
      'Oggi dice: se avessi scelto diversamente, ora avrei forse qualche rimorso.': 'Heute sagt sie: Hätte ich anders gewählt, würde ich jetzt vielleicht etwas bereuen.',
      'È stata la sorte!': 'Das war Schicksal!',
    },
    fragen: [
      { frage: 'Wie hat Sara Marco kennengelernt?', antworten: ['Zufällig an der Haltestelle', 'Bei der Arbeit', 'Im Internet'] },
      { frage: 'Welche Entscheidung musste sie treffen?', antworten: ['In Mailand bleiben oder nach Neapel ziehen', 'Heiraten oder nicht', 'Studieren oder arbeiten'] },
      { frage: 'Was hat sie aufgegeben?', antworten: ['Ihre Arbeit', 'Ihre Familie', 'Nichts'] },
    ],
  },

  {
    id: 'b2-treno', titel: 'Il treno notturno', art: 'Text', stufe: 'B2',
    text: `Anna voleva andare da Milano a Palermo con il treno notturno.

Aveva prenotato una cuccetta in uno scompartimento da quattro, con un piccolo supplemento.

Ma alla stazione centrale l'annuncio diceva: treno soppresso!

Se avesse preso l'alta velocità, sarebbe arrivata a Roma in tre ore. Invece aspettò il treno regionale.

Il capotreno le disse che il macchinista era malato. Arrivò al capolinea dopo un giorno intero!`,
    woerter: {
      'notturno': ['il treno notturno', 'Nacht- (treno notturno = Nachtzug)', 'der Nachtzug'],
      'centrale': ['la stazione centrale', 'Haupt- (stazione centrale = Hauptbahnhof)', 'der Hauptbahnhof'],
      'velocità': ["l'alta velocità", 'Geschwindigkeit (alta velocità = Schnellzug)', 'der Hochgeschwindigkeitszug'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'voleva': ['volere', 'wollte'],
      'milano': ['Milano', 'Mailand'],
      'palermo': ['Palermo', 'Palermo'],
      'aveva': ['avere', 'hatte'],
      'prenotato': ['prenotare', 'reserviert'],
      'quattro': ['quattro', 'vier'],
      'piccolo': ['piccolo', 'klein'],
      'stazione': ['la stazione', 'Bahnhof'],
      "l'annuncio": ["l'annuncio", 'die Durchsage'],
      'annuncio': ["l'annuncio", 'Durchsage'],
      'diceva': ['dire', 'sagte'],
      'avesse': ['avere', 'hätte'],
      'preso': ['prendere', 'genommen'],
      'sarebbe': ['essere', 'wäre'],
      'arrivata': ['arrivare', 'angekommen'],
      'roma': ['Roma', 'Rom'],
      'ore': ['ore', 'Stunden'],
      'invece': ['invece', 'stattdessen'],
      'aspettò': ['aspettare', 'wartete auf'],
      'disse': ['dire', 'sagte'],
      'era': ['essere', 'war'],
      'malato': ['malato', 'krank'],
      'arrivò': ['arrivare', 'kam an'],
      'intero': ['intero', 'ganz', 'ganz'],
    },
    uebersetzung: {
      'Anna voleva andare da Milano a Palermo con il treno notturno.': 'Anna wollte mit dem Nachtzug von Mailand nach Palermo fahren.',
      'Aveva prenotato una cuccetta in uno scompartimento da quattro, con un piccolo supplemento.': 'Sie hatte einen Liegeplatz in einem Viererabteil reserviert, mit einem kleinen Zuschlag.',
      "Ma alla stazione centrale l'annuncio diceva: treno soppresso!": 'Aber am Hauptbahnhof hieß es in der Durchsage: Zug gestrichen!',
      "Se avesse preso l'alta velocità, sarebbe arrivata a Roma in tre ore.": 'Hätte sie den Schnellzug genommen, wäre sie in drei Stunden in Rom gewesen.',
      'Invece aspettò il treno regionale.': 'Stattdessen wartete sie auf den Regionalzug.',
      'Il capotreno le disse che il macchinista era malato.': 'Der Zugchef sagte ihr, dass der Lokführer krank sei.',
      'Arrivò al capolinea dopo un giorno intero!': 'Sie kam nach einem ganzen Tag an der Endstation an!',
    },
    fragen: [
      { frage: 'Was hatte Anna reserviert?', antworten: ['Einen Liegeplatz', 'Einen Schlafwagen allein', 'Nichts'] },
      { frage: 'Was war mit dem Nachtzug?', antworten: ['Er war gestrichen', 'Er war voll', 'Er war pünktlich'] },
      { frage: 'Warum fiel der Zug aus?', antworten: ['Der Lokführer war krank', 'Es gab Streik', 'Schnee'] },
    ],
  },

  {
    id: 'b2-coppia', titel: 'Storia di una coppia', art: 'Text', stufe: 'B2',
    text: `Luca corteggiò Giulia per mesi. Alla fine si fidanzarono e decisero di convivere.

La convivenza all'inizio fu piena di tenerezza. Poi arrivò la gelosia di Luca.

Se Luca fosse stato meno geloso, forse non ci sarebbe stata la separazione.

Dopo un anno si separarono, ma senza tradimento e senza divorzio, perché non erano sposati.

Oggi Giulia ha un nuovo partner. Lei dice: se non mi fossi separata, non avrei trovato la mia anima gemella!`,
    woerter: {
      'anima': ["l'anima gemella", 'Seele (anima gemella = Seelenverwandter)', 'der Seelenverwandte'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'corteggiò': ['corteggiare', 'umwarb'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'per': ['per', 'lang'],
      'mesi': ['il mese', 'Monate'],
      'fine': ['la fine', 'Ende (alla fine = schließlich)'],
      'fidanzarono': ['fidanzarsi', 'verlobten sich'],
      'decisero': ['decidere', 'beschlossen'],
      "all'inizio": ["l'inizio", 'am Anfang'],
      'inizio': ["l'inizio", 'Anfang'],
      'fu': ['essere', 'war'],
      'piena': ['pieno', 'voll'],
      'arrivò': ['arrivare', 'kam'],
      'fosse': ['essere', 'wäre'],
      'stato': ['essere', 'gewesen'],
      'geloso': ['geloso', 'eifersüchtig'],
      'forse': ['forse', 'vielleicht'],
      'sarebbe': ['essere', 'hätte (non ci sarebbe stata = hätte es nicht gegeben)'],
      'stata': ['essere', 'gegeben'],
      'anno': ["l'anno", 'Jahr'],
      'separarono': ['separarsi', 'trennten sich'],
      'senza': ['senza', 'ohne'],
      'erano': ['essere', 'waren'],
      'sposati': ['sposato', 'verheiratet'],
      'oggi': ['oggi', 'heute'],
      'nuovo': ['nuovo', 'neu'],
      'lei': ['lei', 'sie'],
      'dice': ['dire', 'sagt'],
      'fossi': ['essere', 'wäre (se non mi fossi separata)'],
      'separata': ['separarsi', 'getrennt'],
      'avrei': ['avere', 'hätte ich'],
      'trovato': ['trovare', 'gefunden'],
    },
    uebersetzung: {
      'Luca corteggiò Giulia per mesi.': 'Luca umwarb Giulia monatelang.',
      'Alla fine si fidanzarono e decisero di convivere.': 'Schließlich verlobten sie sich und beschlossen zusammenzuziehen.',
      "La convivenza all'inizio fu piena di tenerezza.": 'Das Zusammenleben war am Anfang voller Zärtlichkeit.',
      'Poi arrivò la gelosia di Luca.': 'Dann kam Lucas Eifersucht.',
      'Se Luca fosse stato meno geloso, forse non ci sarebbe stata la separazione.': 'Wäre Luca weniger eifersüchtig gewesen, hätte es die Trennung vielleicht nicht gegeben.',
      'Dopo un anno si separarono, ma senza tradimento e senza divorzio, perché non erano sposati.': 'Nach einem Jahr trennten sie sich, aber ohne Untreue und ohne Scheidung, weil sie nicht verheiratet waren.',
      'Oggi Giulia ha un nuovo partner.': 'Heute hat Giulia einen neuen Partner.',
      'Lei dice: se non mi fossi separata, non avrei trovato la mia anima gemella!': 'Sie sagt: Hätte ich mich nicht getrennt, hätte ich meinen Seelenverwandten nicht gefunden!',
    },
    fragen: [
      { frage: 'Was beschlossen Luca und Giulia?', antworten: ['Zusammenzuziehen', 'Zu heiraten', 'Auszuwandern'] },
      { frage: 'Was war das Problem?', antworten: ['Lucas Eifersucht', 'Geld', 'Untreue'] },
      { frage: 'Warum gab es keine Scheidung?', antworten: ['Sie waren nicht verheiratet', 'Sie blieben zusammen', 'Es war zu teuer'] },
    ],
  },

  {
    id: 'b2-remoto', titel: 'Lavorare da remoto', art: 'Text', stufe: 'B2',
    text: `Da quando c'è lo smart working, Marco lavora da remoto tre giorni alla settimana.

Benché la flessibilità gli piaccia, a volte soffre di isolamento.

Ha preparato una postazione in soggiorno affinché la famiglia non lo disturbi durante le videoconferenze.

La connessione deve essere veloce, a meno che non voglia restare senza webcam e microfono!

Marco è più produttivo a casa, purché riesca a staccare la sera. L'equilibrio tra lavoro e vita privata è importante.`,
    woerter: {
      'smart': ['lo smart working', 'Smart (smart working = Homeoffice)', 'das Homeoffice'],
      'working': ['lo smart working', 'Working (smart working = Homeoffice)', 'das Homeoffice'],
      'remoto': ['da remoto', 'fern (da remoto = von zu Hause aus)', 'remote'],
      'quando': ['quando', 'seit (da quando = seit)'],
      "c'è": ['esserci', 'es gibt'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'lavora': ['lavorare', 'arbeitet'],
      'giorni': ['il giorno', 'Tage'],
      'settimana': ['la settimana', 'Woche'],
      'benché': ['benché', 'obwohl'],
      'piaccia': ['piacere', 'gefalle (congiuntivo)'],
      'volte': ['a volte', 'manchmal'],
      'soffre': ['soffrire', 'leidet', 'leiden'],
      'preparato': ['preparare', 'eingerichtet'],
      'soggiorno': ['il soggiorno', 'Wohnzimmer'],
      'affinché': ['affinché', 'damit'],
      'famiglia': ['la famiglia', 'Familie'],
      'disturbi': ['disturbare', 'störe (congiuntivo)'],
      'durante': ['durante', 'während'],
      'videoconferenze': ['la videoconferenza', 'Videokonferenzen'],
      'deve': ['dovere', 'muss'],
      'veloce': ['veloce', 'schnell'],
      'voglia': ['volere', 'wolle (congiuntivo)'],
      'restare': ['restare', 'bleiben'],
      'senza': ['senza', 'ohne'],
      'purché': ['purché', 'vorausgesetzt, dass'],
      'riesca': ['riuscire', 'schaffe (congiuntivo)', 'schaffen'],
      'tra': ['tra', 'zwischen'],
      'vita': ['la vita', 'Leben'],
      'privata': ['privato', 'privat', 'privat'],
    },
    uebersetzung: {
      "Da quando c'è lo smart working, Marco lavora da remoto tre giorni alla settimana.": 'Seit es Homeoffice gibt, arbeitet Marco drei Tage pro Woche von zu Hause.',
      'Benché la flessibilità gli piaccia, a volte soffre di isolamento.': 'Obwohl ihm die Flexibilität gefällt, leidet er manchmal unter Isolation.',
      'Ha preparato una postazione in soggiorno affinché la famiglia non lo disturbi durante le videoconferenze.': 'Er hat sich im Wohnzimmer einen Arbeitsplatz eingerichtet, damit die Familie ihn bei den Videokonferenzen nicht stört.',
      'La connessione deve essere veloce, a meno che non voglia restare senza webcam e microfono!': 'Die Verbindung muss schnell sein, es sei denn, er will ohne Webcam und Mikrofon bleiben!',
      'Marco è più produttivo a casa, purché riesca a staccare la sera.': 'Marco ist zu Hause produktiver, vorausgesetzt, er schafft es, abends abzuschalten.',
      "L'equilibrio tra lavoro e vita privata è importante.": 'Das Gleichgewicht zwischen Arbeit und Privatleben ist wichtig.',
    },
    fragen: [
      { frage: 'Wie oft arbeitet Marco von zu Hause?', antworten: ['Drei Tage pro Woche', 'Jeden Tag', 'Nie'] },
      { frage: 'Worunter leidet er manchmal?', antworten: ['Unter Isolation', 'Unter Lärm', 'Unter Rückenschmerzen'] },
      { frage: 'Wann ist er produktiver?', antworten: ['Wenn er abends abschalten kann', 'Wenn die Familie da ist', 'Nachts'] },
    ],
  },

  {
    id: 'b2-connettivi', titel: 'Nonostante tutto', art: 'Text', stufe: 'B2',
    text: `Sebbene piovesse, siamo usciti lo stesso. Anzi, è stata una bella serata!

Il ristorante era pieno; tuttavia il cameriere ci ha trovato un tavolo.

Il cibo era ottimo, inoltre il prezzo era giusto. Infatti torneremo presto.

Abbiamo pagato senza che Luca se ne accorgesse: era il suo compleanno.

Nonostante la pioggia, dunque, tutti erano contenti. Perciò lo rifaremo, a meno che non nevichi!`,
    woerter: {
      'piovesse': ['piovere', 'es regnete (congiuntivo)'],
      'siamo': ['essere', 'wir sind'],
      'usciti': ['uscire', 'ausgegangen'],
      'stesso': ['stesso', 'trotzdem (lo stesso)', 'gleich; selbst'],
      'stata': ['essere', 'gewesen'],
      'bella': ['bello', 'schön'],
      'ristorante': ['il ristorante', 'Restaurant'],
      'era': ['essere', 'war'],
      'pieno': ['pieno', 'voll'],
      'cameriere': ['il cameriere', 'Kellner'],
      'trovato': ['trovare', 'gefunden'],
      'tavolo': ['il tavolo', 'Tisch'],
      'cibo': ['il cibo', 'Essen', 'das Essen'],
      'ottimo': ['ottimo', 'ausgezeichnet', 'ausgezeichnet'],
      'prezzo': ['il prezzo', 'Preis'],
      'giusto': ['giusto', 'angemessen; richtig'],
      'torneremo': ['tornare', 'wir werden wiederkommen'],
      'abbiamo': ['avere', 'wir haben'],
      'pagato': ['pagare', 'bezahlt'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'accorgesse': ['accorgersi', 'bemerkte (congiuntivo)', 'bemerken'],
      'suo': ['suo', 'sein'],
      'compleanno': ['il compleanno', 'Geburtstag'],
      'pioggia': ['la pioggia', 'Regen'],
      'tutti': ['tutto', 'alle'],
      'erano': ['essere', 'waren'],
      'contenti': ['contento', 'zufrieden'],
      'rifaremo': ['rifare', 'wir werden wiederholen', 'wiederholen'],
      'nevichi': ['nevicare', 'schneie (congiuntivo)'],
    },
    uebersetzung: {
      'Sebbene piovesse, siamo usciti lo stesso.': 'Obwohl es regnete, sind wir trotzdem ausgegangen.',
      'Anzi, è stata una bella serata!': 'Es war sogar ein schöner Abend!',
      'Il ristorante era pieno; tuttavia il cameriere ci ha trovato un tavolo.': 'Das Restaurant war voll; dennoch hat der Kellner uns einen Tisch gefunden.',
      'Il cibo era ottimo, inoltre il prezzo era giusto.': 'Das Essen war ausgezeichnet, außerdem war der Preis angemessen.',
      'Infatti torneremo presto.': 'Wir werden tatsächlich bald wiederkommen.',
      'Abbiamo pagato senza che Luca se ne accorgesse: era il suo compleanno.': 'Wir haben bezahlt, ohne dass Luca es bemerkte: Es war sein Geburtstag.',
      'Nonostante la pioggia, dunque, tutti erano contenti.': 'Trotz des Regens waren also alle zufrieden.',
      'Perciò lo rifaremo, a meno che non nevichi!': 'Deshalb machen wir das wieder, es sei denn, es schneit!',
    },
    fragen: [
      { frage: 'Wie war das Wetter?', antworten: ['Es regnete', 'Es war sonnig', 'Es schneite'] },
      { frage: 'Warum haben sie heimlich bezahlt?', antworten: ['Luca hatte Geburtstag', 'Luca hatte kein Geld', 'Es war ein Fehler'] },
      { frage: 'Wann machen sie es nicht wieder?', antworten: ['Wenn es schneit', 'Wenn es regnet', 'Nie'] },
    ],
  },

  {
    id: 'b2-borgo', titel: 'Dalla metropoli al borgo', art: 'Text', stufe: 'B2',
    text: `Paolo viveva nella periferia di Milano. Il ritmo della metropoli era frenetico e il caos lo stancava.

Benché avesse un buon lavoro, ha deciso di trasferirsi in un borgo in Toscana.

Il paesino è isolato e soffre di spopolamento: ci sono pochi servizi e i mezzi pubblici passano raramente.

Tuttavia, secondo Paolo, la qualità della vita rurale è molto più alta di quella urbana.

Lavora da remoto, a meno che non debba andare in ufficio.`,
    woerter: {
      'urbana': ['urbano', 'städtisch'],
      'remoto': ['da remoto', 'fern (da remoto = von zu Hause aus)', 'remote'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'viveva': ['vivere', 'lebte'],
      'milano': ['Milano', 'Mailand'],
      'era': ['essere', 'war'],
      'stancava': ['stancare', 'ermüdete', 'ermüden'],
      'benché': ['benché', 'obwohl'],
      'avesse': ['avere', 'hätte; hatte (congiuntivo)'],
      'buon': ['buono', 'gut'],
      'deciso': ['decidere', 'beschlossen'],
      'trasferirsi': ['trasferirsi', 'umziehen'],
      'toscana': ['Toscana', 'Toskana'],
      'soffre': ['soffrire', 'leidet'],
      'pochi': ['poco', 'wenige'],
      'passano': ['passare', 'fahren vorbei'],
      'raramente': ['raramente', 'selten', 'selten'],
      'secondo': ['secondo', 'laut (secondo Paolo = laut Paolo)'],
      'alta': ['alto', 'hoch'],
      'quella': ['quello', 'die (jene)'],
      'lavora': ['lavorare', 'arbeitet'],
      'debba': ['dovere', 'müsse (congiuntivo)'],
      'ufficio': ["l'ufficio", 'Büro'],
    },
    uebersetzung: {
      'Paolo viveva nella periferia di Milano.': 'Paolo lebte am Stadtrand von Mailand.',
      'Il ritmo della metropoli era frenetico e il caos lo stancava.': 'Das Tempo der Großstadt war hektisch und das Chaos ermüdete ihn.',
      'Benché avesse un buon lavoro, ha deciso di trasferirsi in un borgo in Toscana.': 'Obwohl er eine gute Arbeit hatte, hat er beschlossen, in ein altes Dorf in der Toskana zu ziehen.',
      'Il paesino è isolato e soffre di spopolamento: ci sono pochi servizi e i mezzi pubblici passano raramente.': 'Das Dörfchen ist abgelegen und leidet unter Abwanderung: Es gibt wenig Infrastruktur und Busse fahren selten.',
      'Tuttavia, secondo Paolo, la qualità della vita rurale è molto più alta di quella urbana.': 'Dennoch ist laut Paolo die Lebensqualität auf dem Land viel höher als in der Stadt.',
      'Lavora da remoto, a meno che non debba andare in ufficio.': 'Er arbeitet von zu Hause, es sei denn, er muss ins Büro.',
    },
    fragen: [
      { frage: 'Wo lebte Paolo vorher?', antworten: ['Am Stadtrand von Mailand', 'In Rom', 'In der Toskana'] },
      { frage: 'Was ist das Problem des Dorfes?', antworten: ['Abwanderung und wenig Infrastruktur', 'Zu viele Touristen', 'Lärm'] },
      { frage: 'Wo ist die Lebensqualität laut Paolo höher?', antworten: ['Auf dem Land', 'In der Stadt', 'Überall gleich'] },
    ],
  },

  {
    id: 'b2-tipici', titel: 'Prodotti tipici', art: 'Text', stufe: 'B2',
    text: `La Liguria è la regione in cui nasce il pesto. Il basilico con cui si prepara ha una denominazione protetta.

Il pesto vero si fa nel mortaio: il basilico va pestato con il pestello, non nel frullatore!

Si condiscono le trofie, che sono una pasta artigianale tipica della regione.

L'olio extravergine viene da un piccolo frantoio, la cui provenienza è garantita da un marchio.

Il prodotto industriale costa meno, ma il condimento fatto in casa è un'altra cosa!`,
    woerter: {
      'extravergine': ["l'olio extravergine", 'extra nativ (Olivenöl)', 'das native Olivenöl extra'],
      'liguria': ['Liguria', 'Ligurien'],
      'regione': ['la regione', 'Region'],
      'cui': ['cui', 'in der; mit dem; dessen'],
      'nasce': ['nascere', 'entsteht', 'geboren werden; entstehen'],
      'pesto': ['il pesto', 'Pesto', 'das Pesto'],
      'prepara': ['preparare', 'bereitet zu (si prepara = man bereitet zu)'],
      'protetta': ['protetto', 'geschützt', 'geschützt'],
      'vero': ['vero', 'echt'],
      'fa': ['fare', 'macht (si fa = man macht)'],
      'va': ['andare', 'muss (va pestato = muss zerstoßen werden)'],
      'pestato': ['pestare', 'zerstoßen'],
      'frullatore': ['il frullatore', 'Mixer', 'der Mixer'],
      'condiscono': ['condire', 'anmachen (si condiscono = man macht an)'],
      'tipica': ['tipico', 'typisch'],
      'viene': ['venire', 'kommt'],
      'piccolo': ['piccolo', 'klein'],
      'garantita': ['garantire', 'garantiert', 'garantieren'],
      'industriale': ['industriale', 'industriell'],
      'costa': ['costare', 'kostet'],
      'fatto': ['fare', 'gemacht (fatto in casa = hausgemacht)'],
      'cosa': ['cosa', 'Sache'],
    },
    uebersetzung: {
      'La Liguria è la regione in cui nasce il pesto.': 'Ligurien ist die Region, in der das Pesto entsteht.',
      'Il basilico con cui si prepara ha una denominazione protetta.': 'Das Basilikum, mit dem man es zubereitet, hat eine geschützte Bezeichnung.',
      'Il pesto vero si fa nel mortaio: il basilico va pestato con il pestello, non nel frullatore!': 'Echtes Pesto macht man im Mörser: Das Basilikum muss mit dem Stößel zerstoßen werden, nicht im Mixer!',
      'Si condiscono le trofie, che sono una pasta artigianale tipica della regione.': 'Man macht damit Trofie an, eine handgemachte Pasta, die typisch für die Region ist.',
      "L'olio extravergine viene da un piccolo frantoio, la cui provenienza è garantita da un marchio.": 'Das native Olivenöl kommt aus einer kleinen Ölmühle, deren Herkunft durch ein Siegel garantiert ist.',
      "Il prodotto industriale costa meno, ma il condimento fatto in casa è un'altra cosa!": 'Das Industrieprodukt kostet weniger, aber die hausgemachte Soße ist etwas ganz anderes!',
    },
    fragen: [
      { frage: 'Woher kommt das Pesto?', antworten: ['Aus Ligurien', 'Aus Sizilien', 'Aus Rom'] },
      { frage: 'Womit macht man echtes Pesto?', antworten: ['Mit Mörser und Stößel', 'Mit dem Mixer', 'Mit dem Messer'] },
      { frage: 'Was garantiert die Herkunft des Öls?', antworten: ['Ein Siegel', 'Der Preis', 'Die Farbe'] },
    ],
  },

  {
    id: 'b2-ritratto', titel: 'La persona di cui ti parlo', art: 'Text', stufe: 'B2',
    text: `La persona di cui ti parlo è mia zia Lucia. Ha un carattere straordinario.

Il suo aspetto è ordinario, ma la sua personalità è notevole.

La caratteristica che la distingue è l'ironia. Il suo unico difetto? L'abitudine di arrivare sempre in ritardo!

Il suo pregio più grande è la generosità, per la quale tutti la amano.

Chi la conosce dice che io le assomiglio. La somiglianza è particolare: abbiamo la stessa risata originale!`,
    woerter: {
      'parlo': ['parlare', 'ich spreche'],
      'zia': ['la zia', 'Tante'],
      'lucia': ['Lucia', 'Lucia (Vorname)'],
      'suo': ['suo', 'ihr'],
      'sua': ['suo', 'ihre'],
      'distingue': ['distinguere', 'unterscheidet; zeichnet aus'],
      "l'ironia": ["l'ironia", 'die Ironie'],
      'ironia': ["l'ironia", 'Ironie', 'die Ironie'],
      'unico': ['unico', 'einziger'],
      'arrivare': ['arrivare', 'ankommen'],
      'generosità': ['la generosità', 'Großzügigkeit', 'die Großzügigkeit'],
      'per': ['per', 'wegen'],
      'quale': ['il quale', 'welche (per la quale = derentwegen)'],
      'tutti': ['tutto', 'alle'],
      'amano': ['amare', 'lieben'],
      'chi': ['chi', 'wer'],
      'conosce': ['conoscere', 'kennt'],
      'dice': ['dire', 'sagt'],
      'assomiglio': ['assomigliare', 'ich ähnle'],
      'abbiamo': ['avere', 'wir haben'],
      'stessa': ['stesso', 'gleiche'],
      'risata': ['la risata', 'Lachen', 'das Lachen'],
    },
    uebersetzung: {
      'La persona di cui ti parlo è mia zia Lucia.': 'Der Mensch, von dem ich dir erzähle, ist meine Tante Lucia.',
      'Ha un carattere straordinario.': 'Sie hat einen außergewöhnlichen Charakter.',
      'Il suo aspetto è ordinario, ma la sua personalità è notevole.': 'Ihr Aussehen ist gewöhnlich, aber ihre Persönlichkeit ist beachtlich.',
      "La caratteristica che la distingue è l'ironia.": 'Das Merkmal, das sie auszeichnet, ist die Ironie.',
      'Il suo unico difetto?': 'Ihre einzige Schwäche?',
      "L'abitudine di arrivare sempre in ritardo!": 'Die Gewohnheit, immer zu spät zu kommen!',
      'Il suo pregio più grande è la generosità, per la quale tutti la amano.': 'Ihre größte Stärke ist die Großzügigkeit, für die alle sie lieben.',
      'Chi la conosce dice che io le assomiglio.': 'Wer sie kennt, sagt, dass ich ihr ähnle.',
      'La somiglianza è particolare: abbiamo la stessa risata originale!': 'Die Ähnlichkeit ist besonders: Wir haben das gleiche originelle Lachen!',
    },
    fragen: [
      { frage: 'Was zeichnet Tante Lucia aus?', antworten: ['Die Ironie', 'Die Schönheit', 'Der Reichtum'] },
      { frage: 'Was ist ihre Schwäche?', antworten: ['Sie kommt immer zu spät', 'Sie ist geizig', 'Sie ist streng'] },
      { frage: 'Worin ähneln sich Tante und Erzähler?', antworten: ['Im Lachen', 'Im Aussehen', 'Im Beruf'] },
    ],
  },

  {
    id: 'b2-italiano', titel: 'Il mio italiano', art: 'Text', stufe: 'B2',
    text: `Quando ho cominciato, non capivo niente. Oggi il mio livello è il B2!

Il vocabolario che ho imparato è grande e la grammatica non mi fa più paura.

Ho ancora un accento tedesco, ma la mia pronuncia è comprensibile. Anche la fluidità migliora.

Il segreto del mio progresso? La costanza: mi esercito ogni giorno, anche solo quindici minuti.

Un giorno vorrei perfezionare il mio italiano e capire anche i dialetti. Una padronanza da madrelingua? Chissà. La motivazione non manca!`,
    woerter: {
      'b': ['B2', 'B (Niveau B2)'],
      'quando': ['quando', 'als'],
      'cominciato': ['cominciare', 'angefangen'],
      'capivo': ['capire', 'ich verstand'],
      'niente': ['niente', 'nichts'],
      'oggi': ['oggi', 'heute'],
      'imparato': ['imparare', 'gelernt'],
      'paura': ['avere paura', 'Angst (non mi fa più paura = macht mir keine Angst mehr)'],
      'ancora': ['ancora', 'noch'],
      'tedesco': ['tedesco', 'deutsch'],
      'migliora': ['migliorare', 'wird besser'],
      'segreto': ['il segreto', 'Geheimnis'],
      'esercito': ['esercitarsi', 'ich übe (mi esercito)'],
      'ogni': ['ogni', 'jeden'],
      'minuti': ['il minuto', 'Minuten'],
      'vorrei': ['volere', 'ich möchte'],
      'capire': ['capire', 'verstehen'],
      'dialetti': ['il dialetto', 'Dialekte'],
      'chissà': ['chissà', 'wer weiß', 'wer weiß'],
      'manca': ['mancare', 'fehlt'],
    },
    uebersetzung: {
      'Quando ho cominciato, non capivo niente.': 'Als ich angefangen habe, verstand ich nichts.',
      'Oggi il mio livello è il B2!': 'Heute ist mein Niveau B2!',
      'Il vocabolario che ho imparato è grande e la grammatica non mi fa più paura.': 'Der Wortschatz, den ich gelernt habe, ist groß, und die Grammatik macht mir keine Angst mehr.',
      'Ho ancora un accento tedesco, ma la mia pronuncia è comprensibile.': 'Ich habe noch einen deutschen Akzent, aber meine Aussprache ist verständlich.',
      'Anche la fluidità migliora.': 'Auch der Redefluss wird besser.',
      'Il segreto del mio progresso?': 'Das Geheimnis meines Fortschritts?',
      'La costanza: mi esercito ogni giorno, anche solo quindici minuti.': 'Ausdauer: Ich übe jeden Tag, auch nur fünfzehn Minuten.',
      'Un giorno vorrei perfezionare il mio italiano e capire anche i dialetti.': 'Eines Tages möchte ich mein Italienisch perfektionieren und auch die Dialekte verstehen.',
      'Una padronanza da madrelingua?': 'Eine Beherrschung wie Muttersprachler?',
      'Chissà.': 'Wer weiß.',
      'La motivazione non manca!': 'Die Motivation fehlt nicht!',
    },
    fragen: [
      { frage: 'Welches Niveau hat die Erzählerin heute?', antworten: ['B2', 'A1', 'C2'] },
      { frage: 'Was ist das Geheimnis ihres Fortschritts?', antworten: ['Jeden Tag üben', 'Ein Kurs in Italien', 'Viel Geld'] },
      { frage: 'Was möchte sie eines Tages verstehen?', antworten: ['Die Dialekte', 'Latein', 'Nichts mehr'] },
    ],
  },
);
