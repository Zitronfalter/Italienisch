// Kurze Texte für die Wort-Lektionen B1 (nach Lektion 19–28).
// Aufbau wie in texte.js. Prüfen: node werkzeuge/lektionen-pruefen.js

LESETEXTE.push(
  {
    id: 'b1-progetti', titel: 'Tra dieci anni', art: 'Text', stufe: 'B1',
    text: `Sara ha venticinque anni e ha molti obiettivi.

Tra dieci anni farà carriera in una grande azienda. Avrà un buon stipendio.

Poi metterà su famiglia e comprerà una casa in campagna.

Sua madre le dice: nessuno può prevedere l'avvenire. Ci saranno cambiamenti!

Sara risponde: lo so, ma senza speranza non si realizza niente. Affronterò ogni traguardo!`,
    woerter: {
      'tra': ['tra', 'in (tra dieci anni = in zehn Jahren)', 'zwischen; in'],
      'azienda': ["l'azienda", 'Firma', 'die Firma'],
      'stipendio': ['lo stipendio', 'Gehalt', 'das Gehalt'],
      'senza': ['senza', 'ohne', 'ohne'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'venticinque': ['venticinque', 'fünfundzwanzig'],
      'obiettivi': ["l'obiettivo", 'Ziele'],
      'farà': ['fare', 'wird machen'],
      'avrà': ['avere', 'wird haben'],
      'buon': ['buono', 'gut', 'gut'],
      'metterà': ['mettere su famiglia', 'wird gründen (metterà su famiglia)'],
      'comprerà': ['comprare', 'wird kaufen'],
      'sua': ['suo', 'ihre'],
      'dice': ['dire', 'sagt'],
      'nessuno': ['nessuno', 'niemand', 'niemand'],
      'può': ['potere', 'kann'],
      'saranno': ['essere', 'wird es geben (ci saranno)'],
      'cambiamenti': ['il cambiamento', 'Veränderungen'],
      'risponde': ['rispondere', 'antwortet'],
      'so': ['sapere', 'ich weiß'],
      'realizza': ['realizzare', 'verwirklicht (non si realizza = man verwirklicht nicht)'],
      'affronterò': ['affrontare', 'ich werde angehen'],
      'coraggio': ['il coraggio', 'Mut', 'der Mut'],
    },
    uebersetzung: {
      'Sara ha venticinque anni e ha molti obiettivi.': 'Sara ist fünfundzwanzig und hat viele Ziele.',
      'Tra dieci anni farà carriera in una grande azienda.': 'In zehn Jahren wird sie in einer großen Firma Karriere machen.',
      'Avrà un buon stipendio.': 'Sie wird ein gutes Gehalt haben.',
      'Poi metterà su famiglia e comprerà una casa in campagna.': 'Dann wird sie eine Familie gründen und ein Haus auf dem Land kaufen.',
      "Sua madre le dice: nessuno può prevedere l'avvenire.": 'Ihre Mutter sagt ihr: Niemand kann die Zukunft vorhersehen.',
      'Ci saranno cambiamenti!': 'Es wird Veränderungen geben!',
      'Sara risponde: lo so, ma senza speranza non si realizza niente.': 'Sara antwortet: Ich weiß, aber ohne Hoffnung verwirklicht man nichts.',
      'Affronterò ogni traguardo!': 'Ich werde jedes Ziel angehen!',
    },
    fragen: [
      { frage: 'Was will Sara in zehn Jahren machen?', antworten: ['Karriere in einer großen Firma', 'Im Ausland studieren', 'Nichts'] },
      { frage: 'Was sagt die Mutter?', antworten: ['Niemand kann die Zukunft vorhersehen', 'Sara soll heiraten', 'Sara soll sparen'] },
      { frage: 'Was will Sara nach der Karriere?', antworten: ['Eine Familie gründen und ein Haus kaufen', 'Auswandern', 'Studieren'] },
    ],
  },

  {
    id: 'b1-universita', titel: 'Il primo semestre', art: 'Text', stufe: 'B1',
    text: `Dopo il diploma Luca si iscriverà alla facoltà di architettura a Milano.

Ha vinto una borsa di studio: non dovrà pagare le tasse universitarie.

Frequenterà le lezioni ogni giorno e studierà in biblioteca.

Al terzo anno farà un tirocinio in uno studio di architetti.

Il professore gli ha detto: la conoscenza è importante, ma anche l'esperienza. Tra cinque anni avrà la laurea!`,
    woerter: {
      'lezioni': ['la lezione', 'Vorlesungen; Unterricht'],
      'terzo': ['terzo', 'dritte', 'dritter'],
      'esperienza': ["l'esperienza", 'Erfahrung', 'die Erfahrung'],
      'tra': ['tra', 'in (tra dieci anni = in zehn Jahren)', 'zwischen; in'],
      'diploma': ['il diploma', 'Abitur'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'iscriverà': ['iscriversi', 'wird sich einschreiben'],
      'architettura': ["l'architettura", 'Architektur', 'die Architektur'],
      'milano': ['Milano', 'Mailand'],
      'vinto': ['vincere', 'gewonnen; bekommen'],
      'dovrà': ['dovere', 'wird müssen'],
      'tasse': ['la tassa', 'Gebühren'],
      'universitarie': ['universitario', 'Universitäts-', 'Universitäts-'],
      'frequenterà': ['frequentare', 'wird besuchen'],
      'studierà': ['studiare', 'wird lernen'],
      'farà': ['fare', 'wird machen'],
      'studio': ['lo studio', 'Büro (studio di architetti = Architekturbüro); Arbeitszimmer', 'das Arbeitszimmer; das Büro'],
      'architetti': ["l'architetto", 'Architekten'],
      'detto': ['dire', 'gesagt'],
      'avrà': ['avere', 'wird haben'],
    },
    uebersetzung: {
      'Dopo il diploma Luca si iscriverà alla facoltà di architettura a Milano.': 'Nach dem Abitur wird sich Luca an der Fakultät für Architektur in Mailand einschreiben.',
      'Ha vinto una borsa di studio: non dovrà pagare le tasse universitarie.': 'Er hat ein Stipendium bekommen: Er wird keine Studiengebühren zahlen müssen.',
      'Frequenterà le lezioni ogni giorno e studierà in biblioteca.': 'Er wird jeden Tag die Vorlesungen besuchen und in der Bibliothek lernen.',
      'Al terzo anno farà un tirocinio in uno studio di architetti.': 'Im dritten Jahr wird er ein Praktikum in einem Architekturbüro machen.',
      "Il professore gli ha detto: la conoscenza è importante, ma anche l'esperienza.": 'Der Professor hat ihm gesagt: Wissen ist wichtig, aber auch Erfahrung.',
      'Tra cinque anni avrà la laurea!': 'In fünf Jahren wird er seinen Abschluss haben!',
    },
    fragen: [
      { frage: 'Was wird Luca studieren?', antworten: ['Architektur', 'Medizin', 'Sprachen'] },
      { frage: 'Warum muss er keine Gebühren zahlen?', antworten: ['Er hat ein Stipendium', 'Die Uni ist gratis', 'Seine Eltern zahlen'] },
      { frage: 'Wann macht er ein Praktikum?', antworten: ['Im dritten Jahr', 'Im ersten Semester', 'Nach dem Abschluss'] },
    ],
  },

  {
    id: 'b1-estero', titel: 'Una nuova vita in Germania', art: 'Text', stufe: 'B1',
    text: `Il prossimo anno Paolo emigrerà in Germania per lavoro.

Prima dovrà compilare molti moduli. La burocrazia sarà lunga!

Non avrà bisogno di un visto, perché è cittadino europeo. Ma dovrà prendere la residenza.

All'inizio non sarà facile abituarsi alla cultura e alla mentalità tedesca.

Paolo dice: mi adatterò. L'integrazione comincia con la lingua!`,
    woerter: {
      'bisogno': ['avere bisogno', 'Bedarf (avrà bisogno = wird brauchen)', 'brauchen'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'emigrerà': ['emigrare', 'wird auswandern'],
      'per': ['per', 'für; wegen', 'für'],
      'dovrà': ['dovere', 'wird müssen'],
      'moduli': ['il modulo', 'Formulare'],
      'sarà': ['essere', 'wird sein'],
      'lunga': ['lungo', 'lang'],
      'avrà': ['avere', 'wird haben (avrà bisogno = wird brauchen)'],
      'cittadino': ['il cittadino', 'Bürger', 'der Bürger'],
      'europeo': ['europeo', 'europäisch', 'europäisch'],
      'inizio': ["l'inizio", 'Anfang (all’inizio = am Anfang)', 'der Anfang'],
      'tedesca': ['tedesco', 'deutsch'],
      'dice': ['dire', 'sagt'],
      'adatterò': ['adattarsi', 'ich werde mich anpassen'],
      'comincia': ['cominciare', 'fängt an'],
    },
    uebersetzung: {
      'Il prossimo anno Paolo emigrerà in Germania per lavoro.': 'Nächstes Jahr wird Paolo wegen der Arbeit nach Deutschland auswandern.',
      'Prima dovrà compilare molti moduli.': 'Vorher wird er viele Formulare ausfüllen müssen.',
      'La burocrazia sarà lunga!': 'Die Bürokratie wird lange dauern!',
      'Non avrà bisogno di un visto, perché è cittadino europeo.': 'Er wird kein Visum brauchen, weil er EU-Bürger ist.',
      'Ma dovrà prendere la residenza.': 'Aber er wird sich anmelden müssen.',
      "All'inizio non sarà facile abituarsi alla cultura e alla mentalità tedesca.": 'Am Anfang wird es nicht leicht sein, sich an die deutsche Kultur und Mentalität zu gewöhnen.',
      'Paolo dice: mi adatterò.': 'Paolo sagt: Ich werde mich anpassen.',
      "L'integrazione comincia con la lingua!": 'Integration beginnt mit der Sprache!',
    },
    fragen: [
      { frage: 'Warum geht Paolo nach Deutschland?', antworten: ['Wegen der Arbeit', 'Wegen der Liebe', 'Zum Studieren'] },
      { frage: 'Warum braucht er kein Visum?', antworten: ['Er ist EU-Bürger', 'Er bleibt nur kurz', 'Er hat schon eins'] },
      { frage: 'Womit beginnt Integration laut Paolo?', antworten: ['Mit der Sprache', 'Mit Geld', 'Mit Freunden'] },
    ],
  },

  {
    id: 'b1-sogno', titel: 'La casa dei sogni', art: 'Text', stufe: 'B1',
    text: `Se avessi i soldi … no, aspetta: vorrei una casa in campagna.

Sarebbe spaziosa e luminosa, con un caminetto e una mansarda.

Intorno ci sarebbe un terreno con un orto e una siepe. Davanti, un grande cancello.

Mi piacerebbe ristrutturarla e arredarla da sola.

Ma per ora vivo in un piccolo appartamento in condominio. Il mutuo costerebbe troppo!`,
    woerter: {
      'se': ['se', 'wenn', 'wenn'],
      'avessi': ['avere', 'hätte (se avessi = wenn ich hätte)'],
      'aspetta': ['aspettare', 'warte!'],
      'sarebbe': ['essere', 'wäre'],
      'spaziosa': ['spazioso', 'geräumig'],
      'luminosa': ['luminoso', 'hell'],
      'intorno': ['intorno', 'rundherum', 'herum'],
      'piacerebbe': ['piacere', 'würde gefallen (mi piacerebbe = ich würde gern)'],
      'ristrutturarla': ['ristrutturare', 'sie renovieren'],
      'arredarla': ['arredare', 'sie einrichten'],
      'sola': ['solo', 'allein (da sola = allein)'],
      'per': ['per', 'für (per ora = vorerst)', 'für'],
      'vivo': ['vivere', 'ich lebe'],
      'costerebbe': ['costare', 'würde kosten'],
      'troppo': ['troppo', 'zu viel', 'zu viel; zu'],
    },
    uebersetzung: {
      'Sarebbe spaziosa e luminosa, con un caminetto e una mansarda.': 'Es wäre geräumig und hell, mit einem Kamin und einem Dachgeschoss.',
      'Intorno ci sarebbe un terreno con un orto e una siepe.': 'Rundherum gäbe es ein Grundstück mit einem Gemüsegarten und einer Hecke.',
      'Davanti, un grande cancello.': 'Vorne ein großes Tor.',
      'Mi piacerebbe ristrutturarla e arredarla da sola.': 'Ich würde es gern selbst renovieren und einrichten.',
      'Ma per ora vivo in un piccolo appartamento in condominio.': 'Aber vorerst lebe ich in einer kleinen Wohnung in einem Mehrfamilienhaus.',
      'Il mutuo costerebbe troppo!': 'Der Kredit würde zu viel kosten!',
    },
    fragen: [
      { frage: 'Wo hätte die Erzählerin gern ein Haus?', antworten: ['Auf dem Land', 'Am Meer', 'In der Stadt'] },
      { frage: 'Was gäbe es rund um das Haus?', antworten: ['Einen Gemüsegarten und eine Hecke', 'Ein Schwimmbad', 'Einen Parkplatz'] },
      { frage: 'Warum kauft sie das Haus nicht?', antworten: ['Der Kredit wäre zu teuer', 'Sie mag das Land nicht', 'Es gibt kein Haus'] },
    ],
  },

  {
    id: 'b1-favore', titel: 'Mi farebbe un favore?', art: 'Text', stufe: 'B1',
    text: `Il signor Rossi ha bisogno di aiuto e scrive alla vicina.

Gentile signora, scusi il disturbo. Avrei una richiesta: mi farebbe un favore?

Domani parto per tre giorni. Potrebbe gentilmente dare da mangiare al mio gatto?

Gradirebbe un piccolo regalo come ringraziamento? La ringrazio della sua cortesia!

La signora risponde: con piacere! Lei è sempre così educato.`,
    woerter: {
      'bisogno': ['avere bisogno', 'Bedarf (ha bisogno di = braucht)', 'brauchen'],
      'signora': ['la signora', 'Frau', 'die Frau'],
      'giorni': ['il giorno', 'Tage'],
      'signor': ['il signore', 'Herr (vor dem Namen)', 'der Herr'],
      'rossi': ['Rossi', 'Rossi (Nachname)'],
      'aiuto': ["l'aiuto", 'Hilfe', 'die Hilfe'],
      'scrive': ['scrivere', 'schreibt'],
      'vicina': ['il vicino di casa', 'Nachbarin'],
      'gentile': ['gentile', 'liebe; freundlich (in Briefen: Gentile signora = Sehr geehrte Frau)', 'freundlich'],
      'disturbo': ['il disturbo', 'Störung', 'die Störung'],
      'avrei': ['avere', 'ich hätte'],
      'farebbe': ['fare', 'würden Sie tun'],
      'parto': ['partire', 'ich fahre weg'],
      'per': ['per', 'für', 'für'],
      'potrebbe': ['potere', 'könnten Sie'],
      'dare': ['dare da mangiare', 'geben (dare da mangiare = füttern)'],
      'gradirebbe': ['gradire', 'würden Sie mögen'],
      'ringraziamento': ['il ringraziamento', 'Dank', 'der Dank'],
      'ringrazio': ['ringraziare', 'ich danke'],
      'sua': ['suo', 'Ihre'],
      'risponde': ['rispondere', 'antwortet'],
      'piacere': ['piacere', 'Vergnügen (con piacere = gern)', 'gefallen'],
      'così': ['così', 'so', 'so'],
    },
    uebersetzung: {
      'Il signor Rossi ha bisogno di aiuto e scrive alla vicina.': 'Herr Rossi braucht Hilfe und schreibt der Nachbarin.',
      'Gentile signora, scusi il disturbo.': 'Sehr geehrte Frau, entschuldigen Sie die Störung.',
      'Avrei una richiesta: mi farebbe un favore?': 'Ich hätte eine Bitte: Würden Sie mir einen Gefallen tun?',
      'Domani parto per tre giorni.': 'Morgen fahre ich für drei Tage weg.',
      'Potrebbe gentilmente dare da mangiare al mio gatto?': 'Könnten Sie freundlicherweise meine Katze füttern?',
      'Gradirebbe un piccolo regalo come ringraziamento?': 'Hätten Sie gern ein kleines Geschenk als Dank?',
      'La ringrazio della sua cortesia!': 'Ich danke Ihnen für Ihre Freundlichkeit!',
      'La signora risponde: con piacere!': 'Die Frau antwortet: Gern!',
      'Lei è sempre così educato.': 'Sie sind immer so höflich.',
    },
    fragen: [
      { frage: 'Was bittet Herr Rossi?', antworten: ['Die Katze zu füttern', 'Die Blumen zu gießen', 'Ihn zum Bahnhof zu fahren'] },
      { frage: 'Wie lange ist er weg?', antworten: ['Drei Tage', 'Eine Woche', 'Einen Monat'] },
      { frage: 'Wie antwortet die Nachbarin?', antworten: ['Gern!', 'Nein, keine Zeit', 'Gar nicht'] },
    ],
  },

  {
    id: 'b1-soldi', titel: 'Dove vanno i soldi?', art: 'Text', stufe: 'B1',
    text: `Ogni mese Anna controlla il suo conto corrente.

Le spese sono tante: l'affitto, le bollette e il prestito per la macchina.

Anna vorrebbe risparmiare di più. Potrebbe investire i suoi risparmi, ma ha paura dei rischi.

Sua sorella le consiglia: faresti meglio a non fare debiti!

Oggi Anna preleva solo cinquanta euro. Il resto lo lascia in banca.`,
    woerter: {
      'corrente': ['il conto corrente', 'laufend (conto corrente = Girokonto)', 'das Girokonto'],
      'risparmiare': ['risparmiare', 'sparen', 'sparen'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'controlla': ['controllare', 'überprüft', 'kontrollieren'],
      'suo': ['suo', 'ihr'],
      'bollette': ['la bolletta', 'Rechnungen (Strom, Gas)'],
      'per': ['per', 'für', 'für'],
      'macchina': ['la macchina', 'Auto', 'das Auto'],
      'vorrebbe': ['volere', 'würde gern'],
      'potrebbe': ['potere', 'könnte'],
      'suoi': ['suo', 'ihre'],
      'risparmi': ['il risparmio', 'Ersparnisse'],
      'paura': ['avere paura', 'Angst'],
      'rischi': ['il rischio', 'Risiken', 'das Risiko'],
      'sua': ['suo', 'ihre'],
      'consiglia': ['consigliare', 'rät'],
      'faresti': ['fare', 'du würdest tun (faresti meglio = du solltest lieber)'],
      'meglio': ['meglio', 'besser', 'besser'],
      'debiti': ['il debito', 'Schulden'],
      'preleva': ['prelevare', 'hebt ab'],
      'lascia': ['lasciare', 'lässt'],
    },
    uebersetzung: {
      'Ogni mese Anna controlla il suo conto corrente.': 'Jeden Monat überprüft Anna ihr Girokonto.',
      "Le spese sono tante: l'affitto, le bollette e il prestito per la macchina.": 'Die Ausgaben sind viele: die Miete, die Rechnungen und der Kredit für das Auto.',
      'Anna vorrebbe risparmiare di più.': 'Anna würde gern mehr sparen.',
      'Potrebbe investire i suoi risparmi, ma ha paura dei rischi.': 'Sie könnte ihre Ersparnisse anlegen, aber sie hat Angst vor den Risiken.',
      'Sua sorella le consiglia: faresti meglio a non fare debiti!': 'Ihre Schwester rät ihr: Mach lieber keine Schulden!',
      'Oggi Anna preleva solo cinquanta euro.': 'Heute hebt Anna nur fünfzig Euro ab.',
      'Il resto lo lascia in banca.': 'Den Rest lässt sie auf der Bank.',
    },
    fragen: [
      { frage: 'Welche Ausgaben hat Anna?', antworten: ['Miete, Rechnungen, Autokredit', 'Nur Essen', 'Keine'] },
      { frage: 'Warum legt sie ihr Geld nicht an?', antworten: ['Sie hat Angst vor Risiken', 'Sie hat kein Geld', 'Die Bank ist zu'] },
      { frage: 'Wie viel hebt Anna heute ab?', antworten: ['50 Euro', '500 Euro', 'Nichts'] },
    ],
  },

  {
    id: 'b1-pronto', titel: 'Pronto, chi parla?', art: 'Text', stufe: 'B1',
    text: `Il telefono sta squillando. Marco risponde: pronto, chi parla?

È il centralino di una ditta. Una voce dice: attenda in linea, prego.

Marco sta aspettando da cinque minuti. Poi la linea cade.

Marco compone di nuovo il numero e chiede l'interno trecentodue.

Questa volta risponde la segreteria telefonica. Marco riattacca: che conversazione inutile!`,
    woerter: {
      'segreteria': ['la segreteria telefonica', 'Sekretariat (segreteria telefonica = Anrufbeantworter)', 'der Anrufbeantworter'],
      'telefonica': ['la segreteria telefonica', 'Telefon- (segreteria telefonica = Anrufbeantworter)', 'der Anrufbeantworter'],
      'telefono': ['il telefono', 'Telefon'],
      'sta': ['stare', 'ist gerade (sta squillando = klingelt gerade)'],
      'squillando': ['squillare', 'klingelnd (sta squillando)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'risponde': ['rispondere', 'antwortet; geht ran'],
      'ditta': ['la ditta', 'Firma', 'die Firma'],
      'voce': ['la voce', 'Stimme', 'die Stimme'],
      'dice': ['dire', 'sagt'],
      'attenda': ['attendere', 'warten Sie'],
      'aspettando': ['aspettare', 'wartend (sta aspettando = wartet gerade)'],
      'minuti': ['il minuto', 'Minuten'],
      'cade': ['cadere', 'fällt (la linea cade = die Verbindung bricht ab)', 'fallen'],
      'compone': ['comporre', 'wählt'],
      'nuovo': ['nuovo', 'neu (di nuovo = noch einmal)', 'neu'],
      'chiede': ['chiedere', 'fragt nach'],
      'trecentodue': ['trecentodue', 'dreihundertzwei'],
      'questa': ['questo', 'dieses'],
      'volta': ['la volta', 'Mal', 'das Mal'],
      'riattacca': ['riattaccare', 'legt auf'],
      'inutile': ['inutile', 'nutzlos', 'nutzlos'],
    },
    uebersetzung: {
      'Il telefono sta squillando.': 'Das Telefon klingelt gerade.',
      'Marco risponde: pronto, chi parla?': 'Marco geht ran: Hallo, wer spricht da?',
      'È il centralino di una ditta.': 'Es ist die Telefonzentrale einer Firma.',
      'Una voce dice: attenda in linea, prego.': 'Eine Stimme sagt: Bitte bleiben Sie in der Leitung.',
      'Marco sta aspettando da cinque minuti.': 'Marco wartet schon seit fünf Minuten.',
      'Poi la linea cade.': 'Dann bricht die Verbindung ab.',
      "Marco compone di nuovo il numero e chiede l'interno trecentodue.": 'Marco wählt die Nummer noch einmal und fragt nach Durchwahl dreihundertzwei.',
      'Questa volta risponde la segreteria telefonica.': 'Diesmal geht der Anrufbeantworter ran.',
      'Marco riattacca: che conversazione inutile!': 'Marco legt auf: Was für ein nutzloses Gespräch!',
    },
    fragen: [
      { frage: 'Wer ist am Telefon?', antworten: ['Die Zentrale einer Firma', 'Marcos Mutter', 'Ein Freund'] },
      { frage: 'Was passiert nach fünf Minuten?', antworten: ['Die Verbindung bricht ab', 'Jemand antwortet', 'Marco legt auf'] },
      { frage: 'Wer antwortet beim zweiten Anruf?', antworten: ['Der Anrufbeantworter', 'Der Chef', 'Niemand'] },
    ],
  },

  {
    id: 'b1-ufficio', titel: 'Una giornata pesante', art: 'Text', stufe: 'B1',
    text: `Oggi in ufficio tutti stanno lavorando molto. Domani c'è una scadenza importante.

Giulia sta scrivendo il rapporto per il cliente. Il suo collega sta fotocopiando i documenti.

Il responsabile sta preparando la presentazione e controlla l'agenda.

Lo stagista sta archiviando le pratiche vecchie.

Stasera faranno tutti gli straordinari!`,
    woerter: {
      'ufficio': ["l'ufficio", 'Büro', 'das Büro'],
      'cliente': ['il cliente', 'Kunde', 'der Kunde'],
      'collega': ['il collega', 'Kollege', 'der Kollege'],
      'oggi': ['oggi', 'heute'],
      'tutti': ['tutto', 'alle'],
      'stanno': ['stare', 'sind gerade (stanno lavorando = arbeiten gerade)'],
      'lavorando': ['lavorare', 'arbeitend'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'sta': ['stare', 'ist gerade (sta scrivendo = schreibt gerade)'],
      'scrivendo': ['scrivere', 'schreibend'],
      'per': ['per', 'für', 'für'],
      'suo': ['suo', 'ihr'],
      'fotocopiando': ['fotocopiare', 'kopierend'],
      'documenti': ['il documento', 'Dokumente'],
      'preparando': ['preparare', 'vorbereitend'],
      'controlla': ['controllare', 'prüft'],
      'stagista': ['lo stagista', 'Praktikant'],
      'archiviando': ['archiviare', 'ablegend'],
      'pratiche': ['la pratica', 'Akten'],
      'vecchie': ['vecchio', 'alt'],
      'stasera': ['stasera', 'heute Abend', 'heute Abend'],
      'faranno': ['fare', 'werden machen'],
    },
    uebersetzung: {
      'Oggi in ufficio tutti stanno lavorando molto.': 'Heute arbeiten im Büro alle sehr viel.',
      "Domani c'è una scadenza importante.": 'Morgen ist eine wichtige Frist.',
      'Giulia sta scrivendo il rapporto per il cliente.': 'Giulia schreibt gerade den Bericht für den Kunden.',
      'Il suo collega sta fotocopiando i documenti.': 'Ihr Kollege kopiert gerade die Dokumente.',
      "Il responsabile sta preparando la presentazione e controlla l'agenda.": 'Der Verantwortliche bereitet gerade die Präsentation vor und prüft den Terminkalender.',
      'Lo stagista sta archiviando le pratiche vecchie.': 'Der Praktikant legt gerade die alten Akten ab.',
      'Stasera faranno tutti gli straordinari!': 'Heute Abend werden alle Überstunden machen!',
    },
    fragen: [
      { frage: 'Warum arbeiten alle so viel?', antworten: ['Morgen ist eine wichtige Frist', 'Der Chef ist da', 'Es ist Montag'] },
      { frage: 'Was macht Giulia?', antworten: ['Sie schreibt den Bericht', 'Sie kopiert', 'Sie telefoniert'] },
      { frage: 'Was macht der Praktikant?', antworten: ['Er legt alte Akten ab', 'Er macht Kaffee', 'Er schreibt eine Mail'] },
    ],
  },

  {
    id: 'b1-adesso', titel: 'Cosa stai facendo?', art: 'Text', stufe: 'B1',
    text: `Domenica pomeriggio. Ognuno ha il suo passatempo.

Il nonno sta facendo un pisolino sul divano. La nonna sta chiacchierando con la vicina.

Sofia sta chattando con le amiche e il fratello sta navigando su internet.

Il papà si sta annoiando e la mamma sta curiosando in una libreria.

Solo il cane si sta dando da fare: sta cercando la sua palla!`,
    woerter: {
      'pisolino': ['fare un pisolino', 'Nickerchen', 'ein Nickerchen machen'],
      'ognuno': ['ognuno', 'jeder', 'jeder'],
      'suo': ['suo', 'sein'],
      'sta': ['stare', 'ist gerade dabei'],
      'facendo': ['fare', 'machend (sta facendo = macht gerade)'],
      'chiacchierando': ['chiacchierare', 'plaudernd'],
      'vicina': ['il vicino di casa', 'Nachbarin'],
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'chattando': ['chattare', 'chattend'],
      'amiche': ["l'amica", 'Freundinnen'],
      'navigando': ['navigare', 'surfend'],
      'annoiando': ['annoiarsi', 'sich langweilend (si sta annoiando = langweilt sich)'],
      'curiosando': ['curiosare', 'stöbernd'],
      'dando': ['darsi da fare', 'sich ins Zeug legend (si sta dando da fare)'],
      'cercando': ['cercare', 'suchend'],
      'sua': ['suo', 'seinen'],
      'palla': ['la palla', 'Ball', 'der Ball'],
    },
    uebersetzung: {
      'Domenica pomeriggio.': 'Sonntagnachmittag.',
      'Ognuno ha il suo passatempo.': 'Jeder hat seinen Zeitvertreib.',
      'Il nonno sta facendo un pisolino sul divano.': 'Der Opa macht gerade ein Nickerchen auf dem Sofa.',
      'La nonna sta chiacchierando con la vicina.': 'Die Oma plaudert gerade mit der Nachbarin.',
      'Sofia sta chattando con le amiche e il fratello sta navigando su internet.': 'Sofia chattet gerade mit ihren Freundinnen und der Bruder surft im Internet.',
      'Il papà si sta annoiando e la mamma sta curiosando in una libreria.': 'Papa langweilt sich gerade und Mama stöbert in einer Buchhandlung.',
      'Solo il cane si sta dando da fare: sta cercando la sua palla!': 'Nur der Hund ist fleißig: Er sucht gerade seinen Ball!',
    },
    fragen: [
      { frage: 'Was macht der Opa?', antworten: ['Ein Nickerchen', 'Er chattet', 'Er kocht'] },
      { frage: 'Wo ist die Mama?', antworten: ['In einer Buchhandlung', 'Im Garten', 'Im Büro'] },
      { frage: 'Was sucht der Hund?', antworten: ['Seinen Ball', 'Futter', 'Den Opa'] },
    ],
  },

  {
    id: 'b1-lettera', titel: 'Una mail formale', art: 'Text', stufe: 'B1',
    text: `Oggetto: richiesta di informazioni

Gentile signora Bianchi,

le scrivo per il corso di italiano. Le allego il modulo di iscrizione con la mia firma.

Il certificato glielo mando per posta. Potrebbe inoltrarlo alla segreteria?

In attesa di una sua risposta, le invio distinti saluti.

Nicola Weber`,
    woerter: {
      'distinti': ['distinti saluti', 'hochachtungsvoll (distinti saluti)', 'hochachtungsvoll'],
      'informazioni': ["l'informazione", 'Informationen', 'die Information'],
      'gentile': ['gentile', 'sehr geehrte (in Briefen)', 'freundlich'],
      'signora': ['la signora', 'Frau'],
      'bianchi': ['Bianchi', 'Bianchi (Nachname)'],
      'le': ['le', 'Ihnen'],
      'scrivo': ['scrivere', 'ich schreibe'],
      'per': ['per', 'wegen', 'für'],
      'italiano': ['italiano', 'Italienisch'],
      'allego': ['allegare', 'ich hänge an'],
      'iscrizione': ["l'iscrizione", 'Anmeldung', 'die Anmeldung'],
      'glielo': ['glielo', 'es Ihnen'],
      'mando': ['mandare', 'ich schicke'],
      'posta': ['la posta', 'Post (per posta = per Post)'],
      'potrebbe': ['potere', 'könnten Sie'],
      'inoltrarlo': ['inoltrare', 'es weiterleiten'],
      'segreteria': ['la segreteria', 'Sekretariat', 'das Sekretariat'],
      'sua': ['suo', 'Ihre'],
      'invio': ['inviare', 'ich sende', 'senden'],
      'nicola': ['Nicola', 'Nicola (Vorname)'],
      'weber': ['Weber', 'Weber (Nachname)'],
    },
    uebersetzung: {
      'Gentile signora Bianchi.': 'Sehr geehrte Frau Bianchi,',
      'le scrivo per il corso di italiano.': 'ich schreibe Ihnen wegen des Italienischkurses.',
      'Le allego il modulo di iscrizione con la mia firma.': 'Ich hänge Ihnen das Anmeldeformular mit meiner Unterschrift an.',
      'Il certificato glielo mando per posta.': 'Die Bescheinigung schicke ich Ihnen per Post.',
      'Potrebbe inoltrarlo alla segreteria?': 'Könnten Sie sie an das Sekretariat weiterleiten?',
      'In attesa di una sua risposta, le invio distinti saluti.': 'In Erwartung Ihrer Antwort sende ich Ihnen freundliche Grüße.',
    },
    fragen: [
      { frage: 'Worum geht es in der Mail?', antworten: ['Um einen Italienischkurs', 'Um eine Wohnung', 'Um eine Rechnung'] },
      { frage: 'Was ist angehängt?', antworten: ['Das Anmeldeformular', 'Ein Foto', 'Eine Rechnung'] },
      { frage: 'Wie kommt die Bescheinigung?', antworten: ['Per Post', 'Per Mail', 'Persönlich'] },
    ],
  },

  {
    id: 'b1-prestito', titel: 'Te lo presto!', art: 'Text', stufe: 'B1',
    text: `Giulia vuole prendere in prestito un vestito elegante per una festa.

Sua sorella le dice: te lo presto, ma me lo devi riportare domenica. Promesso?

Giulia glielo promette. Per ringraziarla, le compra un piccolo regalo.

Lo incarta con la carta regalo, ci mette un fiocco e un biglietto d'auguri.

La sorella apprezza il pensiero e dice: grazie, non dovevi!`,
    woerter: {
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'vuole': ['volere', 'will'],
      'per': ['per', 'für; um zu', 'für'],
      'festa': ['la festa', 'Fest', 'das Fest'],
      'sua': ['suo', 'ihre'],
      'dice': ['dire', 'sagt'],
      'presto': ['prestare', 'ich leihe'],
      'devi': ['dovere', 'du musst'],
      'riportare': ['riportare', 'zurückbringen', 'zurückbringen'],
      'promesso': ['promettere', 'versprochen'],
      'promette': ['promettere', 'verspricht'],
      'ringraziarla': ['ringraziare', 'ihr zu danken'],
      'compra': ['comprare', 'kauft'],
      'incarta': ['incartare', 'packt ein'],
      'mette': ['mettere', 'macht dran; legt'],
      'apprezza': ['apprezzare', 'schätzt'],
      'dovevi': ['dovere', 'du hättest nicht müssen (non dovevi = das war doch nicht nötig)'],
    },
    uebersetzung: {
      'Giulia vuole prendere in prestito un vestito elegante per una festa.': 'Giulia möchte sich ein elegantes Kleid für ein Fest ausleihen.',
      'Sua sorella le dice: te lo presto, ma me lo devi riportare domenica.': 'Ihre Schwester sagt ihr: Ich leihe es dir, aber du musst es mir am Sonntag zurückbringen.',
      'Promesso?': 'Versprochen?',
      'Giulia glielo promette.': 'Giulia verspricht es ihr.',
      'Per ringraziarla, le compra un piccolo regalo.': 'Um sich zu bedanken, kauft sie ihr ein kleines Geschenk.',
      "Lo incarta con la carta regalo, ci mette un fiocco e un biglietto d'auguri.": 'Sie packt es in Geschenkpapier, macht eine Schleife dran und legt eine Glückwunschkarte dazu.',
      'La sorella apprezza il pensiero e dice: grazie, non dovevi!': 'Die Schwester freut sich über die Aufmerksamkeit und sagt: Danke, das war doch nicht nötig!',
    },
    fragen: [
      { frage: 'Was leiht sich Giulia?', antworten: ['Ein elegantes Kleid', 'Ein Auto', 'Geld'] },
      { frage: 'Wann muss sie es zurückbringen?', antworten: ['Am Sonntag', 'Morgen', 'Nächsten Monat'] },
      { frage: 'Was macht Giulia als Dank?', antworten: ['Sie kauft ein kleines Geschenk', 'Sie kocht', 'Nichts'] },
    ],
  },

  {
    id: 'b1-amicizia', titel: 'Una vecchia amicizia', art: 'Text', stufe: 'B1',
    text: `Anna e Sara si conoscono da vent'anni. Vanno sempre d'accordo.

L'anno scorso Sara si è innamorata di Marco. La loro relazione è durata sei mesi.

Poi Sara ha scoperto una bugia: Marco le mentiva. Si sono lasciati.

Anna le ha detto: hai fatto bene. In una relazione ci vuole fiducia!

Sara gliel'ha detto: tu sei l'unica persona di cui mi fido davvero.`,
    woerter: {
      'accordo': ["andare d'accordo", 'Einvernehmen (vanno d’accordo = verstehen sich)', 'sich gut verstehen'],
      'hai': ['avere', 'du hast'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'sara': ['Sara', 'Sara (Vorname)'],
      'conoscono': ['conoscersi', 'kennen sich'],
      "vent'anni": ['vent’anni', 'zwanzig Jahre'],
      "vent'": ['venti', 'zwanzig'],
      'vanno': ['andare d’accordo', 'verstehen sich (vanno d’accordo)'],
      'scorso': ['scorso', 'letzte (l’anno scorso = letztes Jahr)'],
      'innamorata': ['innamorarsi', 'verliebt'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'durata': ['durare', 'gedauert'],
      'mesi': ['il mese', 'Monate'],
      'scoperto': ['scoprire', 'entdeckt'],
      'mentiva': ['mentire', 'log'],
      'lasciati': ['lasciarsi', 'getrennt'],
      'detto': ['dire', 'gesagt'],
      'fatto': ['fare', 'gemacht'],
      'vuole': ['ci vuole', 'braucht man (ci vuole = man braucht)'],
      "gliel'ha": ['glielo', 'es ihr (gliel’ha detto = hat es ihr gesagt)'],
      "gliel'": ['glielo', 'es ihr'],
      'unica': ['unico', 'einzige', 'einzig'],
      'fido': ['fidarsi', 'ich vertraue'],
      'davvero': ['davvero', 'wirklich', 'wirklich'],
    },
    uebersetzung: {
      "Anna e Sara si conoscono da vent'anni.": 'Anna und Sara kennen sich seit zwanzig Jahren.',
      "Vanno sempre d'accordo.": 'Sie verstehen sich immer gut.',
      "L'anno scorso Sara si è innamorata di Marco.": 'Letztes Jahr hat sich Sara in Marco verliebt.',
      'La loro relazione è durata sei mesi.': 'Ihre Beziehung hat sechs Monate gedauert.',
      'Poi Sara ha scoperto una bugia: Marco le mentiva.': 'Dann hat Sara eine Lüge entdeckt: Marco hat sie belogen.',
      'Si sono lasciati.': 'Sie haben sich getrennt.',
      'Anna le ha detto: hai fatto bene.': 'Anna hat ihr gesagt: Du hast es richtig gemacht.',
      'In una relazione ci vuole fiducia!': 'In einer Beziehung braucht man Vertrauen!',
      "Sara gliel'ha detto: tu sei l'unica persona di cui mi fido davvero.": 'Sara hat ihr gesagt: Du bist der einzige Mensch, dem ich wirklich vertraue.',
    },
    fragen: [
      { frage: 'Seit wann kennen sich Anna und Sara?', antworten: ['Seit zwanzig Jahren', 'Seit sechs Monaten', 'Seit gestern'] },
      { frage: 'Warum haben sich Sara und Marco getrennt?', antworten: ['Marco hat gelogen', 'Sara ist umgezogen', 'Marco ist krank'] },
      { frage: 'Was braucht man laut Anna in einer Beziehung?', antworten: ['Vertrauen', 'Geld', 'Glück'] },
    ],
  },

  {
    id: 'b1-dosi', titel: 'Il sugo della zia', art: 'Text', stufe: 'B1',
    text: `Per il sugo ci vogliono pomodori freschi. Quanti ne servono? Ne bastano dieci.

Prima si prepara il soffritto: cipolla, carota e sedano in un tegame con abbondante olio.

Poi si aggiungono i pomodori e una manciata di basilico.

Il sale? Quanto basta. La zia ne mette un pizzico e qualche goccia di limone.

Alla fine assaggia e aggiusta. Ci vuole pazienza: il sugo deve cuocere un'ora!`,
    woerter: {
      'per': ['per', 'für', 'für'],
      'vogliono': ['ci vuole', 'braucht man (ci vogliono)'],
      'pomodori': ['il pomodoro', 'Tomaten'],
      'freschi': ['fresco', 'frisch'],
      'quanti': ['quanto', 'wie viele'],
      'servono': ['servire', 'braucht man (servono)'],
      'bastano': ['bastare', 'reichen'],
      'prima': ['prima', 'zuerst', 'vorher; zuerst'],
      'prepara': ['preparare', 'bereitet (si prepara = man bereitet)'],
      'carota': ['la carota', 'Karotte'],
      'sedano': ['il sedano', 'Sellerie'],
      'aggiungono': ['aggiungere', 'gibt dazu (si aggiungono = man gibt dazu)'],
      'zia': ['la zia', 'Tante'],
      'mette': ['mettere', 'tut hinein'],
      'pizzico': ['il pizzico', 'Prise'],
      'qualche': ['qualche', 'einige', 'einige'],
      'limone': ['il limone', 'Zitrone'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)', 'das Ende'],
      'assaggia': ['assaggiare', 'probiert'],
      'aggiusta': ['aggiustare', 'schmeckt ab'],
      'vuole': ['ci vuole', 'braucht man'],
      'deve': ['dovere', 'muss'],
    },
    uebersetzung: {
      'Per il sugo ci vogliono pomodori freschi.': 'Für die Soße braucht man frische Tomaten.',
      'Quanti ne servono?': 'Wie viele braucht man?',
      'Ne bastano dieci.': 'Zehn reichen.',
      'Prima si prepara il soffritto: cipolla, carota e sedano in un tegame con abbondante olio.': 'Zuerst macht man das Soffritto: Zwiebel, Karotte und Sellerie in einer Pfanne mit reichlich Öl.',
      'Poi si aggiungono i pomodori e una manciata di basilico.': 'Dann gibt man die Tomaten und eine Handvoll Basilikum dazu.',
      'Il sale?': 'Das Salz?',
      'Quanto basta.': 'Nach Bedarf.',
      'La zia ne mette un pizzico e qualche goccia di limone.': 'Die Tante tut eine Prise hinein und ein paar Tropfen Zitrone.',
      'Alla fine assaggia e aggiusta.': 'Am Ende probiert sie und schmeckt ab.',
      "Ci vuole pazienza: il sugo deve cuocere un'ora!": 'Man braucht Geduld: Die Soße muss eine Stunde kochen!',
    },
    fragen: [
      { frage: 'Wie viele Tomaten braucht man?', antworten: ['Zehn', 'Zwei', 'Zwanzig'] },
      { frage: 'Was ist im Soffritto?', antworten: ['Zwiebel, Karotte, Sellerie', 'Knoblauch und Chili', 'Fleisch'] },
      { frage: 'Wie lange muss die Soße kochen?', antworten: ['Eine Stunde', 'Zehn Minuten', 'Den ganzen Tag'] },
    ],
  },

  {
    id: 'b1-famiglia', titel: 'La festa del bisnonno', art: 'Text', stufe: 'B1',
    text: `Il bisnonno Giovanni compie cento anni. Tutta la famiglia ci va.

C'è sua figlia, che è vedova, con il genero e la nuora. Ci sono anche il cognato e la cognata.

Quanti nipoti ci sono? Ne contiamo venti!

Il bisnonno ha educato tutti con amore, ma ha anche viziato un po' i bambini.

Una nipote si prende cura di lui ogni giorno. Dice: è la mia eredità più bella.`,
    woerter: {
      'tutti': ['tutto', 'alle'],
      'bella': ['bello', 'schön'],
      'giovanni': ['Giovanni', 'Giovanni (Vorname)'],
      'compie': ['compiere', 'wird (Alter: compie cento anni = wird hundert)', 'vollenden'],
      'tutta': ['tutto', 'ganze'],
      'va': ['andare', 'geht hin (ci va = geht dorthin)'],
      'sua': ['suo', 'seine'],
      'quanti': ['quanto', 'wie viele'],
      'nipoti': ['il nipote', 'Enkel; Urenkel'],
      'contiamo': ['contare', 'wir zählen'],
      'educato': ['educare', 'erzogen'],
      'amore': ["l'amore", 'Liebe'],
      'viziato': ['viziare', 'verwöhnt'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'bambini': ['il bambino', 'Kinder'],
      'nipote': ['il nipote', 'Enkelin'],
      'prende': ['prendersi cura', 'kümmert sich (si prende cura)'],
      'cura': ['prendersi cura', 'Sorge (prendersi cura = sich kümmern)'],
      'lui': ['lui', 'ihn'],
      'dice': ['dire', 'sagt'],
    },
    uebersetzung: {
      'Il bisnonno Giovanni compie cento anni.': 'Urgroßvater Giovanni wird hundert Jahre alt.',
      'Tutta la famiglia ci va.': 'Die ganze Familie geht hin.',
      "C'è sua figlia, che è vedova, con il genero e la nuora.": 'Da ist seine Tochter, die verwitwet ist, mit dem Schwiegersohn und der Schwiegertochter.',
      'Ci sono anche il cognato e la cognata.': 'Auch der Schwager und die Schwägerin sind da.',
      'Quanti nipoti ci sono?': 'Wie viele Enkel sind da?',
      'Ne contiamo venti!': 'Wir zählen zwanzig!',
      "Il bisnonno ha educato tutti con amore, ma ha anche viziato un po' i bambini.": 'Der Urgroßvater hat alle mit Liebe erzogen, aber die Kinder auch ein bisschen verwöhnt.',
      'Una nipote si prende cura di lui ogni giorno.': 'Eine Enkelin kümmert sich jeden Tag um ihn.',
      'Dice: è la mia eredità più bella.': 'Sie sagt: Das ist mein schönstes Erbe.',
    },
    fragen: [
      { frage: 'Wie alt wird der Urgroßvater?', antworten: ['Hundert', 'Neunzig', 'Achtzig'] },
      { frage: 'Wie viele Enkel sind da?', antworten: ['Zwanzig', 'Zehn', 'Zwei'] },
      { frage: 'Wer kümmert sich um ihn?', antworten: ['Eine Enkelin', 'Der Schwager', 'Niemand'] },
    ],
  },

  {
    id: 'b1-pesce', titel: 'Al mercato del pesce', art: 'Text', stufe: 'B1',
    text: `Sabato Paolo va al mercato. Ci va presto, quando il pesce è freschissimo.

Per gli spaghetti alle vongole ne prende un chilo. Prende anche gamberi e un polpo.

Al banco della carne compra il manzo per il ragù e un po' di vitello.

Sua moglie è vegetariana: per lei prende lenticchie, ceci e pasta fresca.

Il salmone? Oggi non ce n'è più!`,
    woerter: {
      'ce': ['ce', 'es (non ce n’è più = es gibt keinen mehr)'],
      "n'": ['ne', 'davon'],
      'paolo': ['Paolo', 'Paolo (Vorname)'],
      'va': ['andare', 'geht (ci va = geht dorthin)'],
      'mercato': ['il mercato', 'Markt'],
      'pesce': ['il pesce', 'Fisch'],
      'freschissimo': ['fresco', 'ganz frisch'],
      'per': ['per', 'für', 'für'],
      'spaghetti': ['gli spaghetti', 'Spaghetti'],
      'prende': ['prendere', 'nimmt'],
      'chilo': ['il chilo', 'Kilo'],
      'banco': ['al banco', 'Theke; Stand'],
      'carne': ['la carne', 'Fleisch'],
      'compra': ['comprare', 'kauft'],
      'ragù': ['il ragù', 'Ragù (Fleischsoße)'],
      "po'": ["un po'", 'ein bisschen', 'ein bisschen'],
      'sua': ['suo', 'seine'],
      'moglie': ['la moglie', 'Frau (Ehefrau)'],
      'vegetariana': ['vegetariano', 'Vegetarierin'],
      'lei': ['lei', 'sie'],
      'oggi': ['oggi', 'heute'],
      "n'è": ['ne', 'davon (non ce n’è più = es gibt keinen mehr)'],
    },
    uebersetzung: {
      'Sabato Paolo va al mercato.': 'Am Samstag geht Paolo auf den Markt.',
      'Ci va presto, quando il pesce è freschissimo.': 'Er geht früh hin, wenn der Fisch ganz frisch ist.',
      'Per gli spaghetti alle vongole ne prende un chilo.': 'Für Spaghetti mit Venusmuscheln nimmt er ein Kilo davon.',
      'Prende anche gamberi e un polpo.': 'Er nimmt auch Garnelen und einen Tintenfisch.',
      "Al banco della carne compra il manzo per il ragù e un po' di vitello.": 'An der Fleischtheke kauft er Rindfleisch für das Ragù und ein bisschen Kalbfleisch.',
      'Sua moglie è vegetariana: per lei prende lenticchie, ceci e pasta fresca.': 'Seine Frau ist Vegetarierin: Für sie nimmt er Linsen, Kichererbsen und frische Pasta.',
      'Il salmone?': 'Der Lachs?',
      "Oggi non ce n'è più!": 'Heute gibt es keinen mehr!',
    },
    fragen: [
      { frage: 'Warum geht Paolo früh auf den Markt?', antworten: ['Dann ist der Fisch ganz frisch', 'Es ist billiger', 'Er hat Zeit'] },
      { frage: 'Was kauft er für seine Frau?', antworten: ['Linsen, Kichererbsen, frische Pasta', 'Lachs', 'Fleisch'] },
      { frage: 'Was gibt es heute nicht mehr?', antworten: ['Lachs', 'Muscheln', 'Garnelen'] },
    ],
  },

  {
    id: 'b1-candidatura', titel: 'Finalmente un lavoro', art: 'Text', stufe: 'B1',
    text: `Marco era disoccupato da sei mesi. Aveva già mandato molte candidature.

Un giorno ha visto un annuncio: cercavano un cuoco a tempo pieno.

Aveva tutti i requisiti e aveva già scritto la lettera di presentazione.

Al colloquio il selezionatore gli ha chiesto le sue qualifiche e competenze.

Dopo una settimana l'hanno assunto. Il periodo di prova dura tre mesi.`,
    woerter: {
      'marco': ['Marco', 'Marco (Vorname)'],
      'era': ['essere', 'war'],
      'mesi': ['il mese', 'Monate'],
      'aveva': ['avere', 'hatte'],
      'già': ['già', 'schon', 'schon'],
      'mandato': ['mandare', 'geschickt'],
      'candidature': ['la candidatura', 'Bewerbungen'],
      'visto': ['vedere', 'gesehen'],
      'cercavano': ['cercare', 'sie suchten'],
      'cuoco': ['il cuoco', 'Koch'],
      'tutti': ['tutto', 'alle'],
      'requisiti': ['il requisito', 'Voraussetzungen'],
      'scritto': ['scrivere', 'geschrieben'],
      'colloquio': ['il colloquio', 'Vorstellungsgespräch'],
      'chiesto': ['chiedere', 'gefragt'],
      'sue': ['suo', 'seine'],
      'qualifiche': ['la qualifica', 'Qualifikationen'],
      'competenze': ['la competenza', 'Fähigkeiten'],
      "l'hanno": ['avere', 'haben ihn (l’hanno assunto = haben ihn eingestellt)'],
      'assunto': ['assumere', 'eingestellt'],
      'dura': ['durare', 'dauert'],
    },
    uebersetzung: {
      'Marco era disoccupato da sei mesi.': 'Marco war seit sechs Monaten arbeitslos.',
      'Aveva già mandato molte candidature.': 'Er hatte schon viele Bewerbungen geschickt.',
      'Un giorno ha visto un annuncio: cercavano un cuoco a tempo pieno.': 'Eines Tages hat er eine Anzeige gesehen: Man suchte einen Koch in Vollzeit.',
      'Aveva tutti i requisiti e aveva già scritto la lettera di presentazione.': 'Er erfüllte alle Voraussetzungen und hatte das Anschreiben schon geschrieben.',
      'Al colloquio il selezionatore gli ha chiesto le sue qualifiche e competenze.': 'Beim Gespräch hat ihn der Personalauswähler nach seinen Qualifikationen und Fähigkeiten gefragt.',
      "Dopo una settimana l'hanno assunto.": 'Nach einer Woche hat man ihn eingestellt.',
      'Il periodo di prova dura tre mesi.': 'Die Probezeit dauert drei Monate.',
    },
    fragen: [
      { frage: 'Wie lange war Marco arbeitslos?', antworten: ['Sechs Monate', 'Ein Jahr', 'Drei Wochen'] },
      { frage: 'Welche Stelle war ausgeschrieben?', antworten: ['Koch in Vollzeit', 'Kellner in Teilzeit', 'Fahrer'] },
      { frage: 'Wie lange dauert die Probezeit?', antworten: ['Drei Monate', 'Sechs Monate', 'Eine Woche'] },
    ],
  },

  {
    id: 'b1-azienda', titel: 'Le dimissioni', art: 'Text', stufe: 'B1',
    text: `Giulia lavorava in una ditta di produzione di mobili.

La sede era lontana: era pendolare e passava tre ore al giorno in treno.

Aveva sperato in una promozione, ma il capo l'aveva data a un collega.

Così Giulia ha dato le dimissioni. Prima aveva già parlato con il sindacato.

Adesso lavora in un altro settore, vicino a casa. Pranza in mensa con i colleghi ed è felice.`,
    woerter: {
      'sede': ['la sede', 'Sitz (Firmensitz)', 'der Sitz'],
      'pendolare': ['il pendolare', 'Pendler(in)', 'der Pendler'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'lavorava': ['lavorare', 'arbeitete'],
      'mobili': ['il mobile', 'Möbel', 'das Möbelstück'],
      'era': ['essere', 'war'],
      'lontana': ['lontano', 'weit weg'],
      'passava': ['passare', 'verbrachte'],
      'aveva': ['avere', 'hatte'],
      'sperato': ['sperare', 'gehofft'],
      "l'aveva": ['avere', 'hatte sie (l’aveva data = hatte sie gegeben)'],
      'data': ['dare', 'gegeben'],
      'così': ['così', 'deshalb; so', 'so'],
      'dato': ['dare', 'gegeben (dato le dimissioni = gekündigt)'],
      'parlato': ['parlare', 'gesprochen'],
      'lavora': ['lavorare', 'arbeitet'],
      'vicino': ['vicino', 'nahe (vicino a casa = nah bei zu Hause)'],
      'pranza': ['pranzare', 'isst zu Mittag'],
      'colleghi': ['il collega', 'Kollegen'],
    },
    uebersetzung: {
      'Giulia lavorava in una ditta di produzione di mobili.': 'Giulia arbeitete in einer Firma, die Möbel herstellt.',
      'La sede era lontana: era pendolare e passava tre ore al giorno in treno.': 'Der Firmensitz war weit weg: Sie pendelte und verbrachte drei Stunden am Tag im Zug.',
      "Aveva sperato in una promozione, ma il capo l'aveva data a un collega.": 'Sie hatte auf eine Beförderung gehofft, aber der Chef hatte sie einem Kollegen gegeben.',
      'Così Giulia ha dato le dimissioni.': 'Deshalb hat Giulia gekündigt.',
      'Prima aveva già parlato con il sindacato.': 'Vorher hatte sie schon mit der Gewerkschaft gesprochen.',
      'Adesso lavora in un altro settore, vicino a casa.': 'Jetzt arbeitet sie in einer anderen Branche, nah bei zu Hause.',
      'Pranza in mensa con i colleghi ed è felice.': 'Sie isst mit den Kollegen in der Kantine zu Mittag und ist glücklich.',
    },
    fragen: [
      { frage: 'Was war das Problem mit dem alten Job?', antworten: ['Weiter Weg und keine Beförderung', 'Zu wenig Arbeit', 'Der Lärm'] },
      { frage: 'Mit wem hatte Giulia vorher gesprochen?', antworten: ['Mit der Gewerkschaft', 'Mit ihrer Mutter', 'Mit dem Chef'] },
      { frage: 'Wie geht es Giulia jetzt?', antworten: ['Sie ist glücklich', 'Sie ist arbeitslos', 'Sie pendelt noch mehr'] },
    ],
  },

  {
    id: 'b1-biografia', titel: 'La vita di nonna Rosa', art: 'Text', stufe: 'B1',
    text: `Nonna Rosa era nata in un piccolo paese in Calabria.

All'età di quindici anni aveva già abbandonato la scuola per lavorare.

In seguito si era trasferita a Torino. Il trasferimento era stato una svolta.

Lì aveva ottenuto un lavoro in fabbrica e aveva iniziato a studiare la sera.

Aveva raggiunto il suo traguardo a quarant'anni: il diploma! Che soddisfazione!`,
    woerter: {
      'seguito': ['in seguito', 'Folge (in seguito = später)', 'danach; später'],
      'nonna': ['la nonna', 'Oma'],
      'rosa': ['Rosa', 'Rosa (Vorname)'],
      'era': ['essere', 'war (era nata = war geboren)'],
      'nata': ['nascere', 'geboren'],
      'calabria': ['Calabria', 'Kalabrien'],
      'aveva': ['avere', 'hatte'],
      'già': ['già', 'schon'],
      'abbandonato': ['abbandonare', 'verlassen; abgebrochen'],
      'scuola': ['la scuola', 'Schule'],
      'per': ['per', 'um zu', 'für'],
      'trasferita': ['trasferirsi', 'umgezogen'],
      'torino': ['Torino', 'Turin'],
      'stato': ['essere', 'gewesen'],
      'lì': ['lì', 'dort'],
      'ottenuto': ['ottenere', 'bekommen'],
      'fabbrica': ['la fabbrica', 'Fabrik', 'die Fabrik'],
      'iniziato': ['iniziare', 'angefangen'],
      'raggiunto': ['raggiungere', 'erreicht'],
      'suo': ['suo', 'ihr'],
      "quarant'anni": ['quaranta', 'vierzig Jahre'],
      "quarant'": ['quaranta', 'vierzig'],
    },
    uebersetzung: {
      'Nonna Rosa era nata in un piccolo paese in Calabria.': 'Oma Rosa war in einem kleinen Dorf in Kalabrien geboren.',
      "All'età di quindici anni aveva già abbandonato la scuola per lavorare.": 'Mit fünfzehn hatte sie die Schule schon verlassen, um zu arbeiten.',
      'In seguito si era trasferita a Torino.': 'Später war sie nach Turin gezogen.',
      'Il trasferimento era stato una svolta.': 'Der Umzug war eine Wende gewesen.',
      'Lì aveva ottenuto un lavoro in fabbrica e aveva iniziato a studiare la sera.': 'Dort hatte sie Arbeit in einer Fabrik bekommen und hatte angefangen, abends zu lernen.',
      "Aveva raggiunto il suo traguardo a quarant'anni: il diploma!": 'Mit vierzig hatte sie ihr Ziel erreicht: das Abitur!',
      'Che soddisfazione!': 'Was für eine Genugtuung!',
    },
    fragen: [
      { frage: 'Wo war Rosa geboren?', antworten: ['In Kalabrien', 'In Turin', 'In Rom'] },
      { frage: 'Wann hatte sie die Schule verlassen?', antworten: ['Mit fünfzehn', 'Mit vierzig', 'Nie'] },
      { frage: 'Was hatte sie mit vierzig erreicht?', antworten: ['Das Abitur', 'Eine eigene Fabrik', 'Die Rente'] },
    ],
  },

  {
    id: 'b1-venezia', titel: 'Venezia: residenti e turisti', art: 'Text', stufe: 'B1',
    text: `Ogni giorno migliaia di turisti visitano il centro storico di Venezia.

I vaporetti sono affollati e sui ponti c'è sempre una grande folla.

Molti residenti pensano che i turisti siano troppi. Credono che la città perda la sua anima.

Per questo il comune ha introdotto una tassa di soggiorno e un biglietto d'ingresso.

Un gondoliere dice: spero che Venezia resti un patrimonio di tutti, non solo dei turisti.`,
    woerter: {
      'affollati': ['affollato', 'überfüllt'],
      'ogni': ['ogni', 'jeden'],
      'migliaia': ['il migliaio', 'Tausende', 'das Tausend'],
      'turisti': ['il turista', 'Touristen'],
      'visitano': ['visitare', 'besuchen'],
      'venezia': ['Venezia', 'Venedig'],
      'vaporetti': ['il vaporetto', 'Wasserbusse'],
      'ponti': ['il ponte', 'Brücken'],
      'residenti': ['il residente', 'Einwohner'],
      'pensano': ['pensare', 'denken'],
      'siano': ['essere', 'seien (congiuntivo)'],
      'troppi': ['troppo', 'zu viele'],
      'credono': ['credere', 'glauben'],
      'perda': ['perdere', 'verliere (congiuntivo)'],
      'sua': ['suo', 'ihre'],
      'anima': ["l'anima", 'Seele', 'die Seele'],
      'per': ['per', 'deshalb (per questo)', 'für'],
      'introdotto': ['introdurre', 'eingeführt', 'einführen'],
      'dice': ['dire', 'sagt'],
      'spero': ['sperare', 'ich hoffe'],
      'resti': ['restare', 'bleibe (congiuntivo)'],
      'tutti': ['tutto', 'alle'],
    },
    uebersetzung: {
      'Ogni giorno migliaia di turisti visitano il centro storico di Venezia.': 'Jeden Tag besuchen Tausende Touristen die Altstadt von Venedig.',
      "I vaporetti sono affollati e sui ponti c'è sempre una grande folla.": 'Die Wasserbusse sind überfüllt und auf den Brücken ist immer eine große Menschenmenge.',
      'Molti residenti pensano che i turisti siano troppi.': 'Viele Einwohner denken, dass es zu viele Touristen sind.',
      'Credono che la città perda la sua anima.': 'Sie glauben, dass die Stadt ihre Seele verliert.',
      "Per questo il comune ha introdotto una tassa di soggiorno e un biglietto d'ingresso.": 'Deshalb hat die Stadt eine Kurtaxe und eine Eintrittskarte eingeführt.',
      'Un gondoliere dice: spero che Venezia resti un patrimonio di tutti, non solo dei turisti.': 'Ein Gondoliere sagt: Ich hoffe, dass Venedig ein Erbe für alle bleibt, nicht nur für die Touristen.',
    },
    fragen: [
      { frage: 'Was denken viele Einwohner?', antworten: ['Es gibt zu viele Touristen', 'Es gibt zu wenige Touristen', 'Alles ist gut'] },
      { frage: 'Was hat die Stadt eingeführt?', antworten: ['Kurtaxe und Eintrittskarte', 'Mehr Gondeln', 'Ein Autoverbot'] },
      { frage: 'Was hofft der Gondoliere?', antworten: ['Dass Venedig allen gehört', 'Dass mehr Touristen kommen', 'Dass er reich wird'] },
    ],
  },

  {
    id: 'b1-opinioni', titel: 'Una discussione in famiglia', art: 'Text', stufe: 'B1',
    text: `A cena si discute di un argomento difficile: i social media.

Secondo il papà, i ragazzi passano troppo tempo al telefono. Teme che diventino pigri.

Sofia non è d'accordo: dal suo punto di vista, il telefono serve per studiare.

La mamma dubita che Sofia abbia ragione, ma non vuole litigare.

Alla fine il nonno dice: a mio parere avete ragione tutti e due!`,
    woerter: {
      'accordo': ["d'accordo", 'einverstanden (non è d’accordo = ist nicht einverstanden)', 'einverstanden'],
      'punto': ['il punto di vista', 'Punkt (punto di vista = Standpunkt)', 'der Standpunkt'],
      'ragione': ['avere ragione', 'Recht (avere ragione = recht haben)', 'recht haben'],
      'parere': ['a mio parere', 'Ansicht (a mio parere = meiner Meinung nach)', 'meiner Meinung nach'],
      'cena': ['la cena', 'Abendessen'],
      'discute': ['discutere', 'diskutiert (si discute = man diskutiert)'],
      'difficile': ['difficile', 'schwierig'],
      'social': ['i social media', 'soziale Medien (social media)'],
      'media': ['i social media', 'Medien (social media)'],
      'papà': ['il papà', 'Papa'],
      'ragazzi': ['il ragazzo', 'Jugendliche'],
      'passano': ['passare', 'verbringen'],
      'troppo': ['troppo', 'zu viel'],
      'tempo': ['il tempo', 'Zeit'],
      'telefono': ['il telefono', 'Handy; Telefon'],
      'teme': ['temere', 'befürchtet'],
      'diventino': ['diventare', 'werden (congiuntivo)'],
      'pigri': ['pigro', 'faul', 'faul'],
      'sofia': ['Sofia', 'Sofia (Vorname)'],
      'suo': ['suo', 'ihr'],
      'serve': ['servire', 'dient'],
      'per': ['per', 'zum; für', 'für'],
      'dubita': ['dubitare', 'bezweifelt'],
      'abbia': ['avere', 'habe (congiuntivo)'],
      'vuole': ['volere', 'will'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
      'nonno': ['il nonno', 'Opa'],
      'dice': ['dire', 'sagt'],
      'avete': ['avere', 'ihr habt'],
      'tutti': ['tutto', 'alle (tutti e due = beide)'],
    },
    uebersetzung: {
      'A cena si discute di un argomento difficile: i social media.': 'Beim Abendessen diskutiert man über ein schwieriges Thema: soziale Medien.',
      'Secondo il papà, i ragazzi passano troppo tempo al telefono.': 'Laut Papa verbringen die Jugendlichen zu viel Zeit am Handy.',
      'Teme che diventino pigri.': 'Er befürchtet, dass sie faul werden.',
      "Sofia non è d'accordo: dal suo punto di vista, il telefono serve per studiare.": 'Sofia ist nicht einverstanden: Aus ihrer Sicht dient das Handy zum Lernen.',
      'La mamma dubita che Sofia abbia ragione, ma non vuole litigare.': 'Die Mama bezweifelt, dass Sofia recht hat, aber sie will nicht streiten.',
      'Alla fine il nonno dice: a mio parere avete ragione tutti e due!': 'Am Ende sagt der Opa: Meiner Meinung nach habt ihr beide recht!',
    },
    fragen: [
      { frage: 'Worüber diskutiert die Familie?', antworten: ['Über soziale Medien', 'Über Politik', 'Über den Urlaub'] },
      { frage: 'Was befürchtet der Papa?', antworten: ['Dass die Jugendlichen faul werden', 'Dass das Handy kaputtgeht', 'Dass Sofia umzieht'] },
      { frage: 'Was sagt der Opa?', antworten: ['Beide haben recht', 'Sofia hat unrecht', 'Er will kein Handy'] },
    ],
  },

  {
    id: 'b1-societa', titel: 'Le elezioni', art: 'Text', stufe: 'B1',
    text: `Domenica ci sono le elezioni. In piazza c'è una manifestazione: molti protestano contro la crisi.

Il ministro dice che la situazione migliorerà. Ma molti cittadini pensano che la politica non li ascolti.

Marco crede che votare sia un diritto e anche un dovere.

È importante che tutti partecipino, perché la democrazia ha bisogno della libertà e dell'uguaglianza.

Chi avrà la maggioranza in parlamento? Lo sapremo lunedì.`,
    woerter: {
      'bisogno': ['avere bisogno', 'Bedarf (ha bisogno di = braucht)', 'brauchen'],
      'piazza': ['la piazza', 'Platz'],
      'protestano': ['protestare', 'protestieren'],
      'contro': ['contro', 'gegen', 'gegen'],
      'dice': ['dire', 'sagt'],
      'situazione': ['la situazione', 'Lage'],
      'migliorerà': ['migliorare', 'wird sich verbessern', 'verbessern'],
      'cittadini': ['il cittadino', 'Bürger'],
      'pensano': ['pensare', 'denken'],
      'ascolti': ['ascoltare', 'zuhöre (congiuntivo)'],
      'marco': ['Marco', 'Marco (Vorname)'],
      'crede': ['credere', 'glaubt'],
      'sia': ['essere', 'sei (congiuntivo)'],
      'dovere': ['il dovere', 'Pflicht', 'die Pflicht'],
      'tutti': ['tutto', 'alle'],
      'partecipino': ['partecipare', 'teilnehmen (congiuntivo)'],
      'chi': ['chi', 'wer', 'wer'],
      'avrà': ['avere', 'wird haben'],
      'sapremo': ['sapere', 'wir werden wissen'],
    },
    uebersetzung: {
      'Domenica ci sono le elezioni.': 'Am Sonntag sind Wahlen.',
      "In piazza c'è una manifestazione: molti protestano contro la crisi.": 'Auf dem Platz gibt es eine Demonstration: Viele protestieren gegen die Krise.',
      'Il ministro dice che la situazione migliorerà.': 'Der Minister sagt, dass sich die Lage verbessern wird.',
      'Ma molti cittadini pensano che la politica non li ascolti.': 'Aber viele Bürger denken, dass die Politik ihnen nicht zuhört.',
      'Marco crede che votare sia un diritto e anche un dovere.': 'Marco glaubt, dass Wählen ein Recht und auch eine Pflicht ist.',
      "È importante che tutti partecipino, perché la democrazia ha bisogno della libertà e dell'uguaglianza.": 'Es ist wichtig, dass alle teilnehmen, denn die Demokratie braucht Freiheit und Gleichheit.',
      'Chi avrà la maggioranza in parlamento?': 'Wer wird die Mehrheit im Parlament haben?',
      'Lo sapremo lunedì.': 'Das werden wir am Montag wissen.',
    },
    fragen: [
      { frage: 'Wogegen protestieren die Leute?', antworten: ['Gegen die Krise', 'Gegen die Wahlen', 'Gegen das Wetter'] },
      { frage: 'Was glaubt Marco über das Wählen?', antworten: ['Es ist Recht und Pflicht', 'Es ist unwichtig', 'Es ist zu kompliziert'] },
      { frage: 'Wann erfährt man das Ergebnis?', antworten: ['Am Montag', 'Am Sonntag', 'In einem Monat'] },
    ],
  },

  {
    id: 'b1-arte', titel: 'La cupola di Firenze', art: 'Text', stufe: 'B1',
    text: `La cupola del Duomo di Firenze fu progettata dall'architetto Brunelleschi.

È stata costruita nel Rinascimento ed è considerata un capolavoro.

Dentro, gli affreschi sono stati dipinti da molti artisti dell'epoca.

Qualche anno fa sono stati restaurati. Il restauro è durato dieci anni.

Oggi la cupola viene visitata da migliaia di persone ogni giorno.`,
    woerter: {
      'duomo': ['il duomo', 'Dom', 'der Dom'],
      'firenze': ['Firenze', 'Florenz'],
      'fu': ['essere', 'wurde (Erzählzeit; fu progettata = wurde entworfen)'],
      'progettata': ['progettare', 'entworfen'],
      'brunelleschi': ['Brunelleschi', 'Brunelleschi (Architekt)'],
      'stata': ['essere', 'worden (è stata costruita = wurde gebaut)'],
      'costruita': ['costruire', 'gebaut'],
      'considerata': ['considerare', 'gehalten für (è considerata = gilt als)', 'betrachten'],
      'dentro': ['dentro', 'innen', 'drinnen'],
      'affreschi': ["l'affresco", 'Fresken'],
      'stati': ['essere', 'worden'],
      'dipinti': ['dipingere', 'gemalt'],
      'artisti': ["l'artista", 'Künstler'],
      'qualche': ['qualche', 'einige'],
      'fa': ['fa', 'vor (qualche anno fa = vor einigen Jahren)'],
      'restaurati': ['restaurare', 'restauriert'],
      'durato': ['durare', 'gedauert'],
      'oggi': ['oggi', 'heute'],
      'viene': ['venire', 'wird (viene visitata = wird besucht)'],
      'visitata': ['visitare', 'besucht'],
      'migliaia': ['il migliaio', 'Tausende'],
      'persone': ['la persona', 'Menschen'],
    },
    uebersetzung: {
      "La cupola del Duomo di Firenze fu progettata dall'architetto Brunelleschi.": 'Die Kuppel des Florentiner Doms wurde vom Architekten Brunelleschi entworfen.',
      'È stata costruita nel Rinascimento ed è considerata un capolavoro.': 'Sie wurde in der Renaissance gebaut und gilt als Meisterwerk.',
      "Dentro, gli affreschi sono stati dipinti da molti artisti dell'epoca.": 'Innen wurden die Fresken von vielen Künstlern der Epoche gemalt.',
      'Qualche anno fa sono stati restaurati.': 'Vor einigen Jahren wurden sie restauriert.',
      'Il restauro è durato dieci anni.': 'Die Restaurierung hat zehn Jahre gedauert.',
      'Oggi la cupola viene visitata da migliaia di persone ogni giorno.': 'Heute wird die Kuppel jeden Tag von Tausenden Menschen besucht.',
    },
    fragen: [
      { frage: 'Wer hat die Kuppel entworfen?', antworten: ['Brunelleschi', 'Michelangelo', 'Leonardo'] },
      { frage: 'Wann wurde sie gebaut?', antworten: ['In der Renaissance', 'Im Mittelalter', 'Vor zehn Jahren'] },
      { frage: 'Wie lange hat die Restaurierung gedauert?', antworten: ['Zehn Jahre', 'Ein Jahr', 'Hundert Jahre'] },
    ],
  },

  {
    id: 'b1-storia', titel: 'Roma antica', art: 'Text', stufe: 'B1',
    text: `Secondo la leggenda, Roma fu fondata nel 753 avanti Cristo.

I Romani conquistarono molti popoli e fondarono un grande impero.

L'esercito romano era forte: i soldati vinsero tante battaglie.

Nel Medioevo molte città antiche furono distrutte. Oggi vediamo le loro rovine.

La civiltà romana ha lasciato strade, ponti e leggi: l'antichità è ancora presente!`,
    woerter: {
      'secondo': ['secondo', 'laut; nach (secondo la leggenda = der Legende nach)', 'laut'],
      'leggenda': ['la leggenda', 'Legende', 'die Legende'],
      'roma': ['Roma', 'Rom'],
      'fu': ['essere', 'wurde (Erzählzeit)'],
      'fondata': ['fondare', 'gegründet'],
      'avanti': ['avanti Cristo', 'vor (avanti Cristo = vor Christus)'],
      'cristo': ['avanti Cristo', 'Christus (avanti Cristo = v. Chr.)'],
      'conquistarono': ['conquistare', 'eroberten'],
      'popoli': ['il popolo', 'Völker', 'das Volk'],
      'impero': ["l'impero", 'Reich'],
      'fondarono': ['fondare', 'gründeten'],
      'romano': ['romano', 'römisch', 'römisch'],
      'era': ['essere', 'war'],
      'forte': ['forte', 'stark'],
      'soldati': ['il soldato', 'Soldaten'],
      'vinsero': ['vincere', 'gewannen'],
      'battaglie': ['la battaglia', 'Schlachten'],
      'antiche': ['antico', 'antike'],
      'furono': ['essere', 'wurden (Erzählzeit)'],
      'distrutte': ['distruggere', 'zerstört'],
      'vediamo': ['vedere', 'wir sehen'],
      'rovine': ['la rovina', 'Ruinen'],
      'romana': ['romano', 'römisch'],
      'lasciato': ['lasciare', 'hinterlassen'],
      'strade': ['la strada', 'Straßen'],
      'ponti': ['il ponte', 'Brücken'],
      'leggi': ['la legge', 'Gesetze'],
      'ancora': ['ancora', 'noch', 'noch'],
      'presente': ['presente', 'gegenwärtig', 'anwesend'],
    },
    uebersetzung: {
      'I Romani conquistarono molti popoli e fondarono un grande impero.': 'Die Römer eroberten viele Völker und gründeten ein großes Reich.',
      "L'esercito romano era forte: i soldati vinsero tante battaglie.": 'Das römische Heer war stark: Die Soldaten gewannen viele Schlachten.',
      'Nel Medioevo molte città antiche furono distrutte.': 'Im Mittelalter wurden viele antike Städte zerstört.',
      'Oggi vediamo le loro rovine.': 'Heute sehen wir ihre Ruinen.',
      "La civiltà romana ha lasciato strade, ponti e leggi: l'antichità è ancora presente!": 'Die römische Zivilisation hat Straßen, Brücken und Gesetze hinterlassen: Die Antike ist noch gegenwärtig!',
    },
    fragen: [
      { frage: 'Wann wurde Rom der Legende nach gegründet?', antworten: ['753 v. Chr.', '1492', 'Im Mittelalter'] },
      { frage: 'Wie war das römische Heer?', antworten: ['Stark', 'Klein', 'Schwach'] },
      { frage: 'Was haben die Römer hinterlassen?', antworten: ['Straßen, Brücken, Gesetze', 'Nur Ruinen', 'Nichts'] },
    ],
  },

  {
    id: 'b1-asta', titel: "Un quadro all'asta", art: 'Text', stufe: 'B1',
    text: `Un collezionista ha trovato un vecchio quadro in cantina. Era senza cornice.

La tela è stata esaminata da un esperto. Era autentica o falsa?

Dopo molti mesi il quadro è stato valutato: è un'opera rara e preziosa del Settecento!

Il ritrovamento è stato pubblicato sui giornali.

Il quadro verrà venduto all'asta. Il suo valore? Almeno un milione di euro!`,
    woerter: {
      'trovato': ['trovare', 'gefunden'],
      'quadro': ['il quadro', 'Bild'],
      'cantina': ['la cantina', 'Keller'],
      'era': ['essere', 'war'],
      'senza': ['senza', 'ohne'],
      'stata': ['essere', 'worden'],
      'esaminata': ['esaminare', 'untersucht', 'untersuchen'],
      'autentica': ['autentico', 'echt'],
      'falsa': ['falso', 'gefälscht'],
      'mesi': ['il mese', 'Monate'],
      'stato': ['essere', 'worden'],
      'valutato': ['valutare', 'geschätzt'],
      "un'opera": ["l'opera", 'Werk'],
      'rara': ['raro', 'selten'],
      'preziosa': ['prezioso', 'wertvoll'],
      'settecento': ['il Settecento', 'das 18. Jahrhundert'],
      'pubblicato': ['pubblicare', 'veröffentlicht', 'veröffentlichen'],
      'giornali': ['il giornale', 'Zeitungen'],
      'verrà': ['venire', 'wird (verrà venduto = wird verkauft werden)'],
      'venduto': ['vendere', 'verkauft'],
      'suo': ['suo', 'sein'],
      'almeno': ['almeno', 'mindestens'],
      'milione': ['il milione', 'Million', 'die Million'],
    },
    uebersetzung: {
      'Un collezionista ha trovato un vecchio quadro in cantina.': 'Ein Sammler hat im Keller ein altes Bild gefunden.',
      'Era senza cornice.': 'Es war ohne Rahmen.',
      'La tela è stata esaminata da un esperto.': 'Die Leinwand wurde von einem Experten untersucht.',
      'Era autentica o falsa?': 'War sie echt oder gefälscht?',
      "Dopo molti mesi il quadro è stato valutato: è un'opera rara e preziosa del Settecento!": 'Nach vielen Monaten wurde das Bild geschätzt: Es ist ein seltenes und wertvolles Werk aus dem 18. Jahrhundert!',
      'Il ritrovamento è stato pubblicato sui giornali.': 'Der Fund wurde in den Zeitungen veröffentlicht.',
      "Il quadro verrà venduto all'asta.": 'Das Bild wird versteigert werden.',
      'Il suo valore?': 'Sein Wert?',
      'Almeno un milione di euro!': 'Mindestens eine Million Euro!',
    },
    fragen: [
      { frage: 'Wo wurde das Bild gefunden?', antworten: ['Im Keller', 'Im Museum', 'Auf dem Dachboden'] },
      { frage: 'Aus welcher Zeit ist es?', antworten: ['Aus dem 18. Jahrhundert', 'Aus der Antike', 'Von heute'] },
      { frage: 'Was passiert mit dem Bild?', antworten: ['Es wird versteigert', 'Es kommt ins Museum', 'Es wird zerstört'] },
    ],
  },

  {
    id: 'b1-sicurezza', titel: 'Prima di partire', art: 'Text', stufe: 'B1',
    text: `Se fai un'escursione in montagna, controlla sempre le previsioni del tempo.

Se il sentiero è lungo, porta la borraccia, la bussola e una torcia.

Se ti perdi, cerca i cartelli e cerca di orientarti.

Se c'è pericolo di frane o valanghe, non partire!

In caso di incidente, chiama subito il soccorso alpino. E durante la salita, fai una sosta ogni ora.`,
    woerter: {
      'soccorso': ['il soccorso alpino', 'Hilfe (soccorso alpino = Bergrettung)', 'die Bergrettung'],
      'alpino': ['il soccorso alpino', 'Alpen- (soccorso alpino = Bergrettung)', 'die Bergrettung'],
      'caso': ['in caso di', 'Fall (in caso di = im Fall von)', 'im Fall von'],
      'se': ['se', 'wenn'],
      'fai': ['fare', 'du machst'],
      "un'escursione": ["l'escursione", 'Wanderung'],
      'montagna': ['la montagna', 'Berge'],
      'controlla': ['controllare', 'prüfe!'],
      'previsioni': ['le previsioni', 'Vorhersage'],
      'tempo': ['il tempo', 'Wetter'],
      'sentiero': ['il sentiero', 'Weg'],
      'lungo': ['lungo', 'lang'],
      'porta': ['portare', 'nimm mit!'],
      'perdi': ['perdersi', 'du verläufst dich (ti perdi)'],
      'cerca': ['cercare', 'such!; versuch!'],
      'cartelli': ['il cartello', 'Schilder'],
      'orientarti': ['orientarsi', 'dich zu orientieren'],
      'frane': ['la frana', 'Erdrutsche'],
      'valanghe': ['la valanga', 'Lawinen'],
      'partire': ['partire', 'losgehen; abfahren'],
      'incidente': ["l'incidente", 'Unfall', 'der Unfall'],
      'chiama': ['chiamare', 'ruf an!'],
      'durante': ['durante', 'während'],
      'ogni': ['ogni', 'jede'],
    },
    uebersetzung: {
      "Se fai un'escursione in montagna, controlla sempre le previsioni del tempo.": 'Wenn du eine Bergwanderung machst, prüfe immer die Wettervorhersage.',
      'Se il sentiero è lungo, porta la borraccia, la bussola e una torcia.': 'Wenn der Weg lang ist, nimm Trinkflasche, Kompass und Taschenlampe mit.',
      'Se ti perdi, cerca i cartelli e cerca di orientarti.': 'Wenn du dich verläufst, such die Schilder und versuch, dich zu orientieren.',
      "Se c'è pericolo di frane o valanghe, non partire!": 'Wenn Erdrutsch- oder Lawinengefahr besteht, geh nicht los!',
      'In caso di incidente, chiama subito il soccorso alpino.': 'Bei einem Unfall ruf sofort die Bergrettung.',
      'E durante la salita, fai una sosta ogni ora.': 'Und mach beim Aufstieg jede Stunde eine Rast.',
    },
    fragen: [
      { frage: 'Was soll man immer prüfen?', antworten: ['Die Wettervorhersage', 'Die Uhrzeit', 'Den Fahrplan'] },
      { frage: 'Was tun, wenn man sich verläuft?', antworten: ['Schilder suchen und orientieren', 'Schlafen', 'Weiterlaufen'] },
      { frage: 'Wen ruft man bei einem Unfall?', antworten: ['Die Bergrettung', 'Die Polizei', 'Niemanden'] },
    ],
  },

  {
    id: 'b1-animali', titel: 'Nel bosco', art: 'Text', stufe: 'B1',
    text: `Se cammini piano nel bosco, puoi vedere molti animali.

Gli scoiattoli saltano sugli alberi e a volte passa una volpe.

Se sei fortunato, vedi un cervo. I lupi e gli orsi invece sono rari.

In alto vola un'aquila. Sui prati ci sono farfalle e api.

Più in basso, un pastore porta il suo gregge di pecore e capre. Attenzione alle zanzare e ai serpenti!`,
    woerter: {
      'se': ['se', 'wenn'],
      'cammini': ['camminare', 'du gehst'],
      'piano': ['piano', 'leise; langsam'],
      'bosco': ['il bosco', 'Wald'],
      'puoi': ['potere', 'du kannst'],
      'vedere': ['vedere', 'sehen'],
      'animali': ["l'animale", 'Tiere'],
      'scoiattoli': ['lo scoiattolo', 'Eichhörnchen (Mehrzahl)'],
      'saltano': ['saltare', 'springen'],
      'alberi': ["l'albero", 'Bäume'],
      'volte': ['a volte', 'manchmal'],
      'passa': ['passare', 'kommt vorbei'],
      'sei': ['essere', 'du bist'],
      'fortunato': ['fortunato', 'glücklich (Glück haben)', 'glücklich'],
      'vedi': ['vedere', 'siehst'],
      'lupi': ['il lupo', 'Wölfe'],
      'orsi': ["l'orso", 'Bären'],
      'invece': ['invece', 'dagegen'],
      'rari': ['raro', 'selten'],
      'alto': ['alto', 'hoch (in alto = oben)'],
      'vola': ['volare', 'fliegt', 'fliegen'],
      'prati': ['il prato', 'Wiesen'],
      'farfalle': ['la farfalla', 'Schmetterlinge'],
      'api': ["l'ape", 'Bienen'],
      'basso': ['basso', 'niedrig (più in basso = weiter unten)'],
      'pastore': ['il pastore', 'Hirte', 'der Hirte'],
      'porta': ['portare', 'führt'],
      'suo': ['suo', 'seine'],
      'pecore': ['la pecora', 'Schafe'],
      'capre': ['la capra', 'Ziegen'],
      'attenzione': ["l'attenzione", 'Achtung', 'die Aufmerksamkeit'],
      'zanzare': ['la zanzara', 'Mücken'],
      'serpenti': ['il serpente', 'Schlangen'],
    },
    uebersetzung: {
      'Se cammini piano nel bosco, puoi vedere molti animali.': 'Wenn du leise durch den Wald gehst, kannst du viele Tiere sehen.',
      'Gli scoiattoli saltano sugli alberi e a volte passa una volpe.': 'Die Eichhörnchen springen auf den Bäumen und manchmal kommt ein Fuchs vorbei.',
      'Se sei fortunato, vedi un cervo.': 'Wenn du Glück hast, siehst du einen Hirsch.',
      'I lupi e gli orsi invece sono rari.': 'Wölfe und Bären dagegen sind selten.',
      "In alto vola un'aquila.": 'Oben fliegt ein Adler.',
      'Sui prati ci sono farfalle e api.': 'Auf den Wiesen gibt es Schmetterlinge und Bienen.',
      'Più in basso, un pastore porta il suo gregge di pecore e capre.': 'Weiter unten führt ein Hirte seine Herde aus Schafen und Ziegen.',
      'Attenzione alle zanzare e ai serpenti!': 'Achtung vor Mücken und Schlangen!',
    },
    fragen: [
      { frage: 'Welche Tiere sind selten?', antworten: ['Wölfe und Bären', 'Eichhörnchen', 'Bienen'] },
      { frage: 'Was fliegt oben?', antworten: ['Ein Adler', 'Ein Schmetterling', 'Eine Biene'] },
      { frage: 'Was führt der Hirte?', antworten: ['Schafe und Ziegen', 'Kühe', 'Pferde'] },
    ],
  },

  {
    id: 'b1-piani', titel: 'Il matrimonio all’aperto', art: 'Text', stufe: 'B1',
    text: `Sara e Luca si sposano a giugno, all'aperto. Ma se piove?

Sara è prudente: se il tempo è brutto, la festa sarà nel ristorante. È l'alternativa.

Se ci sono imprevisti, non annulleranno niente: rimanderanno di qualche ora.

Luca ha confermato tutto con il ristorante e ha ricevuto la conferma per email.

Sara dice: non voglio rischiare. Per sicurezza, compriamo anche cento ombrelli!`,
    woerter: {
      'sara': ['Sara', 'Sara (Vorname)'],
      'luca': ['Luca', 'Luca (Vorname)'],
      'sposano': ['sposarsi', 'heiraten'],
      'giugno': ['giugno', 'Juni', 'Juni'],
      "all'aperto": ["all'aperto", 'im Freien'],
      'aperto': ["all'aperto", 'im Freien (all’aperto)'],
      'se': ['se', 'wenn'],
      'piove': ['piovere', 'es regnet'],
      'tempo': ['il tempo', 'Wetter'],
      'brutto': ['brutto', 'schlecht'],
      'festa': ['la festa', 'Fest'],
      'sarà': ['essere', 'wird sein'],
      'ristorante': ['il ristorante', 'Restaurant'],
      'imprevisti': ["l'imprevisto", 'Unvorhergesehenes'],
      'annulleranno': ['annullare', 'werden absagen'],
      'rimanderanno': ['rimandare', 'werden verschieben'],
      'qualche': ['qualche', 'einige'],
      'confermato': ['confermare', 'bestätigt'],
      'tutto': ['tutto', 'alles'],
      'ricevuto': ['ricevere', 'bekommen'],
      'per': ['per', 'per; für', 'für'],
      'email': ['la mail', 'E-Mail'],
      'dice': ['dire', 'sagt'],
      'voglio': ['volere', 'ich will'],
      'compriamo': ['comprare', 'kaufen wir'],
      'cento': ['cento', 'hundert'],
      'ombrelli': ["l'ombrello", 'Regenschirme'],
    },
    uebersetzung: {
      "Sara e Luca si sposano a giugno, all'aperto.": 'Sara und Luca heiraten im Juni, im Freien.',
      'Ma se piove?': 'Aber wenn es regnet?',
      'Sara è prudente: se il tempo è brutto, la festa sarà nel ristorante.': 'Sara ist vorsichtig: Wenn das Wetter schlecht ist, findet das Fest im Restaurant statt.',
      "È l'alternativa.": 'Das ist die Alternative.',
      'Se ci sono imprevisti, non annulleranno niente: rimanderanno di qualche ora.': 'Wenn etwas Unvorhergesehenes passiert, sagen sie nichts ab: Sie verschieben um ein paar Stunden.',
      'Luca ha confermato tutto con il ristorante e ha ricevuto la conferma per email.': 'Luca hat alles mit dem Restaurant bestätigt und die Bestätigung per E-Mail bekommen.',
      'Sara dice: non voglio rischiare.': 'Sara sagt: Ich will nichts riskieren.',
      'Per sicurezza, compriamo anche cento ombrelli!': 'Sicherheitshalber kaufen wir auch hundert Regenschirme!',
    },
    fragen: [
      { frage: 'Wo findet das Fest statt, wenn es regnet?', antworten: ['Im Restaurant', 'Im Garten', 'Gar nicht'] },
      { frage: 'Was machen sie bei Unvorhergesehenem?', antworten: ['Ein paar Stunden verschieben', 'Alles absagen', 'Nichts'] },
      { frage: 'Was kauft Sara sicherheitshalber?', antworten: ['Hundert Regenschirme', 'Ein Zelt', 'Eine Versicherung'] },
    ],
  },

  {
    id: 'b1-difetto', titel: 'La lavatrice difettosa', art: 'Text', stufe: 'B1',
    text: `Anna ha comprato una lavatrice nuova, ma dopo una settimana non funziona più.

Chiama il servizio clienti: la lavatrice è difettosa, me la sostituite?

L'operatore risponde: ci mandi la fattura e una foto del danno, per favore.

Anna è insoddisfatta: non voglio aspettare un mese! Riparatela subito o datemi un rimborso!

Alla fine il venditore le propone un cambio. Il diritto del consumatore è importante!`,
    woerter: {
      'difettosa': ['difettoso', 'defekt'],
      'insoddisfatta': ['insoddisfatto', 'unzufrieden'],
      'anna': ['Anna', 'Anna (Vorname)'],
      'comprato': ['comprare', 'gekauft'],
      'nuova': ['nuovo', 'neu'],
      'funziona': ['funzionare', 'funktioniert'],
      'chiama': ['chiamare', 'ruft an'],
      'sostituite': ['sostituire', 'ersetzt ihr'],
      "l'operatore": ["l'operatore", 'Mitarbeiter (am Telefon)'],
      'operatore': ["l'operatore", 'Mitarbeiter (am Telefon)', 'der Mitarbeiter'],
      'risponde': ['rispondere', 'antwortet'],
      'mandi': ['mandare', 'schicken Sie'],
      'foto': ['la foto', 'Foto'],
      'voglio': ['volere', 'ich will'],
      'aspettare': ['aspettare', 'warten'],
      'mese': ['il mese', 'Monat'],
      'riparatela': ['riparare', 'repariert sie!'],
      'datemi': ['dare', 'gebt mir!'],
      'fine': ['la fine', 'Ende (alla fine = am Ende)'],
      'propone': ['proporre', 'schlägt vor'],
      'diritto': ['il diritto', 'Recht'],
    },
    uebersetzung: {
      'Anna ha comprato una lavatrice nuova, ma dopo una settimana non funziona più.': 'Anna hat eine neue Waschmaschine gekauft, aber nach einer Woche funktioniert sie nicht mehr.',
      'Chiama il servizio clienti: la lavatrice è difettosa, me la sostituite?': 'Sie ruft den Kundendienst an: Die Waschmaschine ist defekt, tauscht ihr sie mir um?',
      "L'operatore risponde: ci mandi la fattura e una foto del danno, per favore.": 'Der Mitarbeiter antwortet: Schicken Sie uns bitte die Rechnung und ein Foto vom Schaden.',
      'Anna è insoddisfatta: non voglio aspettare un mese!': 'Anna ist unzufrieden: Ich will nicht einen Monat warten!',
      'Riparatela subito o datemi un rimborso!': 'Repariert sie sofort oder gebt mir das Geld zurück!',
      'Alla fine il venditore le propone un cambio.': 'Am Ende schlägt ihr der Verkäufer einen Umtausch vor.',
      'Il diritto del consumatore è importante!': 'Das Verbraucherrecht ist wichtig!',
    },
    fragen: [
      { frage: 'Was ist kaputt?', antworten: ['Die Waschmaschine', 'Der Kühlschrank', 'Das Handy'] },
      { frage: 'Was soll Anna schicken?', antworten: ['Rechnung und Foto vom Schaden', 'Die Maschine', 'Nichts'] },
      { frage: 'Was schlägt der Verkäufer am Ende vor?', antworten: ['Einen Umtausch', 'Nichts', 'Eine neue Rechnung'] },
    ],
  },

  {
    id: 'b1-online', titel: 'Un ordine online', art: 'Text', stufe: 'B1',
    text: `Luca ha ordinato delle scarpe online. Prima ha fatto la registrazione e ha creato un account.

Il pagamento con la carta è stato veloce e la spedizione era gratuita.

Il fornitore gli ha mandato un codice per il tracciamento.

Purtroppo le scarpe sono arrivate della taglia sbagliata. Luca le rimanda: il reso è gratis.

Ma quelle giuste sono esaurite in magazzino! Al posto della merce, Luca riceve un coupon.`,
    woerter: {
      'luca': ['Luca', 'Luca (Vorname)'],
      'ordinato': ['ordinare', 'bestellt'],
      'delle': ['delle', 'einige'],
      'online': ['online', 'online', 'online'],
      'prima': ['prima', 'zuerst'],
      'fatto': ['fare', 'gemacht'],
      'creato': ['creare', 'erstellt', 'erstellen'],
      'carta': ['la carta di credito', 'Karte'],
      'stato': ['essere', 'gewesen'],
      'veloce': ['veloce', 'schnell'],
      'era': ['essere', 'war'],
      'gratuita': ['gratuito', 'kostenlos'],
      'mandato': ['mandare', 'geschickt'],
      'per': ['per', 'für', 'für'],
      'purtroppo': ['purtroppo', 'leider'],
      'arrivate': ['arrivare', 'angekommen'],
      'sbagliata': ['sbagliato', 'falsch'],
      'rimanda': ['rimandare', 'schickt zurück'],
      'quelle': ['quello', 'die (jene)'],
      'giuste': ['giusto', 'richtigen'],
      'esaurite': ['esaurito', 'ausverkauft'],
      'posto': ['il posto', 'Platz (al posto di = anstelle von)'],
      'riceve': ['ricevere', 'bekommt'],
    },
    uebersetzung: {
      'Luca ha ordinato delle scarpe online.': 'Luca hat online Schuhe bestellt.',
      'Prima ha fatto la registrazione e ha creato un account.': 'Zuerst hat er sich registriert und ein Konto erstellt.',
      'Il pagamento con la carta è stato veloce e la spedizione era gratuita.': 'Die Zahlung mit Karte war schnell und der Versand kostenlos.',
      'Il fornitore gli ha mandato un codice per il tracciamento.': 'Der Anbieter hat ihm einen Code für die Sendungsverfolgung geschickt.',
      'Purtroppo le scarpe sono arrivate della taglia sbagliata.': 'Leider sind die Schuhe in der falschen Größe angekommen.',
      'Luca le rimanda: il reso è gratis.': 'Luca schickt sie zurück: Die Rücksendung ist kostenlos.',
      'Ma quelle giuste sono esaurite in magazzino!': 'Aber die richtigen sind im Lager ausverkauft!',
      'Al posto della merce, Luca riceve un coupon.': 'Statt der Ware bekommt Luca einen Gutschein.',
    },
    fragen: [
      { frage: 'Was hat Luca bestellt?', antworten: ['Schuhe', 'Ein Buch', 'Ein Handy'] },
      { frage: 'Was war das Problem?', antworten: ['Falsche Größe', 'Zu teuer', 'Kaputt'] },
      { frage: 'Was bekommt Luca am Ende?', antworten: ['Einen Gutschein', 'Neue Schuhe', 'Nichts'] },
    ],
  },

  {
    id: 'b1-posta', titel: "All'ufficio postale", art: 'Text', stufe: 'B1',
    text: `Giulia deve rinnovare la carta d'identità, che scade il mese prossimo.

Prima va all'anagrafe. Il funzionario le dice: si presenti con due foto e il codice fiscale.

Poi va all'ufficio postale per spedire una raccomandata. Allo sportello c'è una lunga attesa.

L'impiegata le chiede: la compili, per favore, e me la dia. Mi serve anche la tessera sanitaria?

No, basta una firma e il timbro. Ecco la ricevuta!`,
    woerter: {
      'identità': ["la carta d'identità", 'Identität (carta d’identità = Personalausweis)', 'der Personalausweis'],
      'fiscale': ['il codice fiscale', 'Steuer- (codice fiscale = Steuernummer)', 'die Steuernummer'],
      'postale': ["l'ufficio postale", 'Post- (ufficio postale = Postamt)', 'das Postamt'],
      'tessera': ['la tessera sanitaria', 'Karte (tessera sanitaria = Krankenversicherungskarte)', 'die Krankenversicherungskarte'],
      'sanitaria': ['la tessera sanitaria', 'Gesundheits- (tessera sanitaria)', 'die Krankenversicherungskarte'],
      'giulia': ['Giulia', 'Giulia (Vorname)'],
      'deve': ['dovere', 'muss'],
      'scade': ['scadere', 'läuft ab'],
      'mese': ['il mese', 'Monat'],
      'prima': ['prima', 'zuerst'],
      'va': ['andare', 'geht'],
      'dice': ['dire', 'sagt'],
      'presenti': ['presentarsi', 'kommen Sie (si presenti)'],
      'foto': ['la foto', 'Fotos'],
      'per': ['per', 'um zu', 'für'],
      'spedire': ['spedire', 'verschicken'],
      'lunga': ['lungo', 'lang'],
      "l'impiegata": ["l'impiegato", 'Angestellte'],
      'impiegata': ["l'impiegato", 'Angestellte'],
      'chiede': ['chiedere', 'bittet; fragt'],
      'compili': ['compilare', 'füllen Sie aus'],
      'dia': ['dare', 'geben Sie'],
      'serve': ['servire', 'brauche (mi serve = ich brauche)'],
      'basta': ['bastare', 'reicht'],
    },
    uebersetzung: {
      "Giulia deve rinnovare la carta d'identità, che scade il mese prossimo.": 'Giulia muss ihren Personalausweis verlängern, der nächsten Monat abläuft.',
      "Prima va all'anagrafe.": 'Zuerst geht sie zum Einwohnermeldeamt.',
      'Il funzionario le dice: si presenti con due foto e il codice fiscale.': 'Der Beamte sagt ihr: Kommen Sie mit zwei Fotos und der Steuernummer.',
      "Poi va all'ufficio postale per spedire una raccomandata.": 'Dann geht sie zur Post, um ein Einschreiben zu schicken.',
      "Allo sportello c'è una lunga attesa.": 'Am Schalter muss man lange warten.',
      "L'impiegata le chiede: la compili, per favore, e me la dia.": 'Die Angestellte bittet sie: Füllen Sie es bitte aus und geben Sie es mir.',
      'Mi serve anche la tessera sanitaria?': 'Brauche ich auch die Krankenversicherungskarte?',
      'No, basta una firma e il timbro.': 'Nein, eine Unterschrift und der Stempel reichen.',
      'Ecco la ricevuta!': 'Hier ist die Quittung!',
    },
    fragen: [
      { frage: 'Was muss Giulia verlängern?', antworten: ['Den Personalausweis', 'Den Führerschein', 'Den Pass'] },
      { frage: 'Was soll sie zum Amt mitbringen?', antworten: ['Zwei Fotos und die Steuernummer', 'Geld', 'Nichts'] },
      { frage: 'Was schickt sie bei der Post?', antworten: ['Ein Einschreiben', 'Ein Paket', 'Eine Postkarte'] },
    ],
  },
);

// Rezepte: Ofen und Geräte (17.11.2026): Text für die Wort-Lektion l23d
LESETEXTE.push(
  {
    id: 'b1-torta-mele', titel: 'Torta di mele della nonna', art: 'Rezept', stufe: 'B1',
    text: `Preriscalda il forno ventilato a 170 gradi.

Metti la carta forno nella tortiera.

Con la frusta sbatti le uova con lo zucchero, poi aggiungi la farina con il cucchiaio di legno.

Taglia le mele a fette e mettile sulla torta.

Inforna per 40 minuti, finché la torta è dorata.

Lasciala riposare e servila tiepida.

Con la spatola pulisci bene la ciotola: così non buttiamo niente!`,
    woerter: {
      'preriscalda': ['preriscaldare', 'heize vor!'],
      'metti': ['mettere', 'leg!', 'legen'],
      'gradi': ['il grado', 'Grad'],
      'sbatti': ['sbattere', 'schlag auf!'],
      'uova': ["l'uovo", 'Eier'],
      'aggiungi': ['aggiungere', 'gib dazu!', 'hinzufügen'],
      'mele': ['la mela', 'Äpfel'],
      'fette': ['la fetta', 'Scheiben (a fette = in Scheiben)'],
      'mettile': ['mettere', 'leg sie', 'legen'],
      'inforna': ['infornare', 'schieb in den Ofen!'],
      'finché': ['finché', 'bis', 'bis'],
      'dorata': ['dorato', 'goldbraun'],
      'lasciala': ['lasciare', 'lass ihn', 'lassen'],
      'servila': ['servire', 'servier ihn', 'servieren'],
      'tiepida': ['tiepido', 'lauwarm'],
      'pulisci': ['pulire', 'putz!', 'putzen'],
      'buttiamo': ['buttare', 'werfen weg', 'wegwerfen'],
    },
    uebersetzung: {
      'Preriscalda il forno ventilato a 170 gradi.': 'Heize den Umluftofen auf 170 Grad vor.',
      'Metti la carta forno nella tortiera.': 'Leg das Backpapier in die Kuchenform.',
      'Con la frusta sbatti le uova con lo zucchero, poi aggiungi la farina con il cucchiaio di legno.': 'Schlage mit dem Schneebesen die Eier mit dem Zucker auf, dann gib das Mehl mit dem Kochlöffel dazu.',
      'Taglia le mele a fette e mettile sulla torta.': 'Schneide die Äpfel in Scheiben und leg sie auf den Kuchen.',
      'Inforna per 40 minuti, finché la torta è dorata.': 'Backe ihn 40 Minuten, bis der Kuchen goldbraun ist.',
      'Lasciala riposare e servila tiepida.': 'Lass ihn ruhen und serviere ihn lauwarm.',
      'Con la spatola pulisci bene la ciotola: così non buttiamo niente!': 'Kratze die Schüssel mit dem Teigschaber gut aus: So werfen wir nichts weg!',
    },
    fragen: [
      { frage: 'Auf wie viel Grad wird der Ofen vorgeheizt?', antworten: ['170 Grad', '220 Grad', '100 Grad'] },
      { frage: 'Was kommt in die Kuchenform?', antworten: ['Backpapier', 'Butter', 'Mehl'] },
      { frage: 'Wie wird der Kuchen serviert?', antworten: ['Lauwarm', 'Eiskalt', 'Sehr heiß'] },
    ],
  },
);
