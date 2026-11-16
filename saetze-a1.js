// Sätze zu neuen Wörtern (A1): Neue Wörter lernt man in Sätzen statt einzeln.
//
// SAETZE[lektionsId] = [{ wort, saetze: [{ it, de, form?, formen? }] }, …]
//  - Reihenfolge der Liste = Lern-Reihenfolge der Wörter (bestimmt die Päckchen à 4–5 Wörter).
//  - wort: genau wie in `woerter` der Lektion; jedes Lektionswort kommt genau einmal vor.
//  - Der erste Satz ist der Kennenlern-Satz: Das Wort lässt sich aus dem Zusammenhang erraten.
//  - form: so steht das Wort im Satz, wenn es anders aussieht (z. B. 'benvenuta' für 'benvenuto').
//    Ohne form steht das Wort ohne Artikel im Satz ('il cognome' → 'cognome'; 'come va?' → 'come va').
//    Gesucht wird nach ganzen Wörtern, Groß-/Kleinschreibung und Satzzeichen zählen nicht.
//  - formen: { form: grundform } für Formen bekannter Wörter, die die Formen-Erkennung nicht findet
//    (z. B. { "dov'": 'dove' }).
// In einem Satz stehen nur Wörter früherer Lektionen, GRUNDWOERTER, Eigennamen und Wörter
// dieser Lektion, die in der Liste vorher kommen. Prüfen: node werkzeuge/saetze-pruefen.js

const SAETZE = {};

// Lektion 4 „Buona giornata!“ – ähnliche Wörter auf verschiedene Päckchen verteilt
// (buona giornata / buona serata / buonanotte, a domani / a dopo)
SAETZE.l01c = [
  // Päckchen 1
  { wort: 'salve', saetze: [
    { it: 'Salve! Mi chiamo Luca, e tu?', de: 'Hallo! Ich heiße Luca, und du?' },
    { it: 'Salve, io sono Giulia, di Roma.', de: 'Guten Tag, ich bin Giulia, aus Rom.' },
    { it: 'Salve! Lei è italiano?', de: 'Guten Tag! Sind Sie Italiener?' },
  ] },
  { wort: 'come va?', saetze: [
    { it: 'Ciao Marco! Come va?', de: 'Hallo Marco! Wie geht’s?' },
    { it: 'Come va? – Bene, grazie, e tu?', de: 'Wie geht’s? – Gut, danke, und dir?' },
    { it: 'Salve, Anna! Come va in Germania?', de: 'Hallo, Anna! Wie läuft’s in Deutschland?' },
    { it: 'Come va l’italiano?', de: 'Wie läuft’s mit dem Italienischen?' },
  ] },
  { wort: 'scusi', saetze: [
    { it: 'Scusi, come si chiama?', de: 'Entschuldigung, wie heißen Sie?' },
    { it: 'Scusi, lei è italiano?', de: 'Entschuldigen Sie, sind Sie Italiener?' },
    { it: 'Scusi, non sono di Roma.', de: 'Tut mir leid, ich bin nicht aus Rom.' },
    { it: 'Ah, scusi! Lei è tedesca?', de: 'Ach, Entschuldigung! Sind Sie Deutsche?' },
  ] },
  { wort: 'il cognome', saetze: [
    { it: 'Mi chiamo Anna, di cognome Rossi.', de: 'Ich heiße Anna, mit Nachnamen Rossi.' },
    { it: 'Scusi, come si chiama di cognome?', de: 'Entschuldigung, wie heißen Sie mit Nachnamen?' },
    { it: 'Il mio cognome è tedesco, non italiano.', de: 'Mein Nachname ist deutsch, nicht italienisch.' },
    { it: 'Il cognome Bianchi è italiano, Müller è tedesco.', de: 'Der Nachname Bianchi ist italienisch, Müller ist deutsch.' },
  ] },
  { wort: 'buona giornata', saetze: [
    { it: 'Arrivederci e buona giornata!', de: 'Auf Wiedersehen und einen schönen Tag!' },
    { it: 'Buona giornata, Marco! – Grazie, ciao!', de: 'Schönen Tag, Marco! – Danke, tschüss!' },
    { it: 'Grazie, buona giornata a lei!', de: 'Danke, Ihnen einen schönen Tag!' },
  ] },

  // Päckchen 2
  { wort: 'il telefono', saetze: [
    { it: 'Scusi, dov’è il telefono?', de: 'Entschuldigung, wo ist das Telefon?', formen: { "dov'": 'dove' } },
    { it: 'Il mio telefono non va.', de: 'Mein Telefon geht nicht.' },
    { it: 'Questo è il telefono di Marco, non il mio.', de: 'Das ist Marcos Telefon, nicht meins.' },
  ] },
  { wort: 'grazie mille', saetze: [
    { it: 'Il mio telefono! Grazie mille!', de: 'Mein Telefon! Vielen Dank!' },
    { it: 'Grazie mille e buona giornata!', de: 'Vielen Dank und einen schönen Tag!' },
    { it: 'Per me? Grazie mille!', de: 'Für mich? Vielen Dank!' },
  ] },
  { wort: 'di niente', saetze: [
    { it: 'Grazie mille! – Di niente.', de: 'Vielen Dank! – Gern geschehen.' },
    { it: 'Grazie, Marco! – Di niente, ciao!', de: 'Danke, Marco! – Gern geschehen, tschüss!' },
    { it: 'Prego, di niente!', de: 'Bitte, gern geschehen!' },
  ] },
  { wort: 'a domani', saetze: [
    { it: 'Ciao Giulia, a domani!', de: 'Tschüss Giulia, bis morgen!' },
    { it: 'A domani, Luca! – Sì, a domani!', de: 'Bis morgen, Luca! – Ja, bis morgen!' },
    { it: 'Grazie mille e a domani!', de: 'Vielen Dank und bis morgen!' },
  ] },
  { wort: 'buona serata', saetze: [
    { it: 'Grazie, buona serata!', de: 'Danke, einen schönen Abend noch!' },
    { it: 'Buona serata, Marco, e a domani!', de: 'Schönen Abend, Marco, und bis morgen!' },
    { it: 'Buona serata a te e a Giulia!', de: 'Einen schönen Abend dir und Giulia!' },
  ] },

  // Päckchen 3
  { wort: 'la via', saetze: [
    { it: 'Scusi, dov’è via Roma?', de: 'Entschuldigung, wo ist die Via Roma?', formen: { "dov'": 'dove' } },
    { it: 'Sono in via Garibaldi, e tu dove sei?', de: 'Ich bin in der Via Garibaldi – und wo bist du?' },
    { it: 'Via Dante? È quella, non questa.', de: 'Die Via Dante? Das ist die da, nicht diese hier.' },
  ] },
  { wort: 'a dopo', saetze: [
    { it: 'Sono in via Roma, a dopo!', de: 'Ich bin in der Via Roma, bis später!' },
    { it: 'A dopo, Anna! – Sì, ciao!', de: 'Bis später, Anna! – Ja, tschüss!' },
    { it: 'Va bene, a dopo!', de: 'Okay, bis später!' },
  ] },
  { wort: 'benvenuto', saetze: [
    { it: 'Benvenuto in Italia, Marco!', de: 'Willkommen in Italien, Marco!' },
    { it: 'Benvenuta, Anna! Come va?', de: 'Willkommen, Anna! Wie geht’s?', form: 'benvenuta' },
    { it: 'Ciao, sono Luca. Benvenuti!', de: 'Hallo, ich bin Luca. Willkommen!', form: 'benvenuti' },
  ] },
  { wort: 'auguri', saetze: [
    { it: 'Diciotto anni? Auguri!', de: 'Achtzehn Jahre? Herzlichen Glückwunsch!' },
    { it: 'Tanti auguri, Giulia!', de: 'Alles Gute, Giulia!' },
    { it: 'Grazie mille per gli auguri!', de: 'Vielen Dank für die Glückwünsche!' },
  ] },
  { wort: 'buonanotte', saetze: [
    { it: 'Buonanotte, a domani!', de: 'Gute Nacht, bis morgen!' },
    { it: 'Buonanotte, Anna! – Buonanotte a te, Marco!', de: 'Gute Nacht, Anna! – Gute Nacht, Marco!' },
    { it: 'Grazie della serata e buonanotte!', de: 'Danke für den Abend und gute Nacht!' },
  ] },
];

// Lektion 5 „Al bar“ – Verben (bere, mangiare, pagare) früh, Zahlen sei … dieci auf alle Päckchen verteilt
SAETZE.l02 = [
  // Päckchen 1
  { wort: 'il bar', saetze: [
    { it: 'Il bar è in via Roma.', de: 'Die Bar ist in der Via Roma.' },
    { it: 'Scusi, c’è un bar in via Garibaldi?', de: 'Entschuldigung, gibt es eine Bar in der Via Garibaldi?' },
    { it: 'Sono al bar, a dopo!', de: 'Ich bin in der Bar, bis später!' },
  ] },
  { wort: 'il caffè', saetze: [
    { it: 'Buongiorno! Un caffè, per favore.', de: 'Guten Morgen! Einen Kaffee, bitte.' },
    { it: 'Due caffè, per favore!', de: 'Zwei Kaffee, bitte!' },
    { it: 'Scusi, il caffè è per me.', de: 'Entschuldigung, der Kaffee ist für mich.' },
  ] },
  { wort: 'bere', saetze: [
    { it: 'Al bar bevo un caffè.', de: 'In der Bar trinke ich einen Kaffee.', form: 'bevo', formen: { bevo: 'bere' } },
    { it: 'Cosa bevi, Anna?', de: 'Was trinkst du, Anna?', form: 'bevi', formen: { bevi: 'bere' } },
    { it: 'Lui non beve caffè.', de: 'Er trinkt keinen Kaffee.', form: 'beve', formen: { beve: 'bere' } },
    { it: 'Beviamo un caffè al bar?', de: 'Trinken wir einen Kaffee in der Bar?', form: 'beviamo', formen: { beviamo: 'bere' } },
  ] },
  { wort: 'ecco', saetze: [
    { it: 'Ecco il caffè, prego!', de: 'Hier ist der Kaffee, bitte sehr!' },
    { it: 'Ecco il bar di Marco.', de: 'Da ist Marcos Bar.' },
    { it: 'Ecco il mio telefono.', de: 'Hier ist mein Telefon.' },
  ] },
  { wort: 'sei', saetze: [
    { it: 'Contiamo: quattro, cinque, sei!', de: 'Wir zählen: vier, fünf, sechs!' },
    { it: 'Sono sei euro, grazie.', de: 'Das macht sechs Euro, danke.' },
    { it: 'E Luca? Ha sei anni.', de: 'Und Luca? Er ist sechs.' },
  ] },

  // Päckchen 2
  { wort: 'il cornetto', saetze: [
    { it: 'Un caffè e un cornetto, per favore.', de: 'Einen Kaffee und ein Hörnchen, bitte.' },
    { it: 'Un cornetto? Sì, grazie!', de: 'Ein Hörnchen? Ja, gerne!' },
    { it: 'Ecco i cornetti!', de: 'Hier sind die Hörnchen!', form: 'cornetti' },
  ] },
  { wort: 'mangiare', saetze: [
    { it: 'Bevo un caffè e mangio un cornetto.', de: 'Ich trinke einen Kaffee und esse ein Hörnchen.', form: 'mangio', formen: { bevo: 'bere' } },
    { it: 'Cosa mangi al bar?', de: 'Was isst du in der Bar?', form: 'mangi', formen: { mangi: 'mangiare' } },
    { it: 'Ecco Marco: mangia due cornetti!', de: 'Da ist Marco – er isst zwei Hörnchen!', form: 'mangia' },
    { it: 'Mangiamo al bar?', de: 'Essen wir in der Bar?', form: 'mangiamo', formen: { mangiamo: 'mangiare' } },
  ] },
  { wort: 'pagare', saetze: [
    { it: 'Il caffè? No, no, pago io!', de: 'Der Kaffee? Nein, nein, ich bezahle!', form: 'pago' },
    { it: 'Scusi, dove pago?', de: 'Entschuldigung, wo bezahle ich?', form: 'pago' },
    { it: 'Lui paga il caffè e il cornetto.', de: 'Er bezahlt den Kaffee und das Hörnchen.', form: 'paga' },
  ] },
  { wort: 'quanto costa?', saetze: [
    { it: 'Scusi, quanto costa un cornetto?', de: 'Entschuldigung, wie viel kostet ein Hörnchen?' },
    { it: 'Quanto costa? – Due euro.', de: 'Wie viel kostet das? – Zwei Euro.' },
    { it: 'E il caffè, quanto costa?', de: 'Und der Kaffee, was kostet der?' },
  ] },
  { wort: 'sette', saetze: [
    { it: 'Sei più uno fa sette.', de: 'Sechs plus eins ist sieben.' },
    { it: 'E Luca beve sette caffè!', de: 'Und Luca trinkt sieben Kaffee!', formen: { beve: 'bere' } },
    { it: 'Sono le sette.', de: 'Es ist sieben Uhr.' },
  ] },

  // Päckchen 3
  { wort: 'anche', saetze: [
    { it: 'Un caffè, per favore. – Anche per me!', de: 'Einen Kaffee, bitte. – Für mich auch!' },
    { it: 'Pago anche il cornetto.', de: 'Ich bezahle auch das Hörnchen.' },
    { it: 'Buona serata! – Grazie, anche a lei!', de: 'Schönen Abend! – Danke, Ihnen auch!' },
    { it: 'Anche tu sei tedesca?', de: 'Bist du auch Deutsche?' },
  ] },
  { wort: "l'acqua", saetze: [
    { it: 'Per me niente caffè: un’acqua, per favore.', de: 'Für mich keinen Kaffee – ein Wasser, bitte.' },
    { it: 'Ecco l’acqua, Marco!', de: 'Hier ist das Wasser, Marco!' },
    { it: 'Anche un’acqua, per favore!', de: 'Und noch ein Wasser, bitte!' },
  ] },
  { wort: 'la mattina', saetze: [
    { it: 'Buongiorno! Come va questa mattina?', de: 'Guten Morgen! Wie geht’s heute Morgen?' },
    { it: 'La mattina bevo un caffè.', de: 'Morgens trinke ich einen Kaffee.', formen: { bevo: 'bere' } },
    { it: 'Io non mangio la mattina.', de: 'Ich esse morgens nichts.' },
  ] },
  { wort: 'la colazione', saetze: [
    { it: 'A colazione mangio un cornetto.', de: 'Zum Frühstück esse ich ein Hörnchen.' },
    { it: 'Anche Marco fa colazione al bar.', de: 'Auch Marco frühstückt in der Bar.' },
    { it: 'La colazione italiana: caffè e cornetto.', de: 'Das italienische Frühstück: Kaffee und Hörnchen.' },
  ] },
  { wort: 'nove', saetze: [
    { it: 'Cinque più quattro fa nove.', de: 'Fünf plus vier ist neun.' },
    { it: 'Sono le nove: colazione!', de: 'Es ist neun Uhr: Frühstück!' },
    { it: 'Nove euro? Pago io.', de: 'Neun Euro? Ich bezahle.' },
  ] },

  // Päckchen 4
  { wort: 'il latte', saetze: [
    { it: 'La mattina bevo latte, non caffè.', de: 'Morgens trinke ich Milch, keinen Kaffee.', formen: { bevo: 'bere' } },
    { it: 'C’è latte per il caffè?', de: 'Gibt es Milch für den Kaffee?' },
    { it: 'Lui beve tanto latte.', de: 'Er trinkt viel Milch.', formen: { beve: 'bere' } },
  ] },
  { wort: 'il tè', saetze: [
    { it: 'Non bevo caffè, bevo tè.', de: 'Ich trinke keinen Kaffee, ich trinke Tee.', formen: { bevo: 'bere' } },
    { it: 'Per Anna un tè, per me un caffè.', de: 'Für Anna einen Tee, für mich einen Kaffee.' },
    { it: 'Un tè alle cinque? Sì!', de: 'Ein Tee um fünf? Ja!' },
  ] },
  { wort: 'la birra', saetze: [
    { it: 'Una birra tedesca, per favore.', de: 'Ein deutsches Bier, bitte.' },
    { it: 'Una birra di mattina? No, grazie!', de: 'Ein Bier am Morgen? Nein, danke!' },
    { it: 'Io bevo un tè, Marco una birra.', de: 'Ich trinke einen Tee, Marco ein Bier.', formen: { bevo: 'bere' } },
  ] },
  { wort: 'otto', saetze: [
    { it: 'Quattro più quattro? Otto!', de: 'Vier plus vier? Acht!' },
    { it: 'La mattina alle otto bevo un caffè.', de: 'Morgens um acht trinke ich einen Kaffee.', formen: { bevo: 'bere' } },
    { it: 'Otto euro? Ecco, grazie.', de: 'Acht Euro? Hier, danke.' },
  ] },
  { wort: 'dieci', saetze: [
    { it: 'Sette, otto, nove, dieci!', de: 'Sieben, acht, neun, zehn!' },
    { it: 'Ecco dieci euro, grazie.', de: 'Hier sind zehn Euro, danke.' },
    { it: 'Dieci euro per un cornetto?', de: 'Zehn Euro für ein Hörnchen?' },
  ] },
];

// Lektion 6 „L’aperitivo“ – ähnliche Getränke auf verschiedene Päckchen
// (succo / spremuta, cappuccino / macchiato, acqua frizzante / acqua naturale)
SAETZE.l02a = [
  // Päckchen 1
  { wort: 'avere sete', saetze: [
    { it: 'Ho sete! Un’acqua, per favore.', de: 'Ich habe Durst! Ein Wasser, bitte.', form: 'ho sete' },
    { it: 'Hai sete? C’è acqua.', de: 'Hast du Durst? Es gibt Wasser.', form: 'hai sete', formen: { hai: 'avere' } },
    { it: 'Lui ha sete e beve una birra.', de: 'Er hat Durst und trinkt ein Bier.', form: 'ha sete', formen: { beve: 'bere' } },
  ] },
  { wort: 'il succo', saetze: [
    { it: 'Ho sete: un succo, per favore.', de: 'Ich habe Durst – einen Saft, bitte.' },
    { it: 'Ecco il succo per Anna.', de: 'Hier ist der Saft für Anna.' },
    { it: 'Il succo è per me, il latte per Marco.', de: 'Der Saft ist für mich, die Milch für Marco.' },
  ] },
  { wort: 'il cappuccino', saetze: [
    { it: 'A colazione: un cappuccino e un cornetto.', de: 'Zum Frühstück: einen Cappuccino und ein Hörnchen.' },
    { it: 'Un cappuccino e un tè, per favore.', de: 'Einen Cappuccino und einen Tee, bitte.' },
    { it: 'Due cappuccini, per favore.', de: 'Zwei Cappuccino, bitte.', form: 'cappuccini' },
  ] },
  { wort: "l'acqua frizzante", saetze: [
    { it: 'Un’acqua frizzante, per favore. Ho sete!', de: 'Ein Sprudelwasser, bitte. Ich habe Durst!' },
    { it: 'Non bevo acqua frizzante.', de: 'Ich trinke kein Sprudelwasser.', formen: { bevo: 'bere' } },
    { it: 'C’è acqua frizzante?', de: 'Gibt es Sprudelwasser?' },
  ] },
  { wort: 'il bancone', saetze: [
    { it: 'Al bar bevo il caffè al bancone.', de: 'In der Bar trinke ich den Kaffee an der Theke.', formen: { bevo: 'bere' } },
    { it: 'Al bancone il caffè costa un euro.', de: 'An der Theke kostet der Kaffee einen Euro.' },
    { it: 'Scusi, si paga al bancone?', de: 'Entschuldigung, bezahlt man an der Theke?' },
  ] },

  // Päckchen 2
  { wort: 'la spremuta', saetze: [
    { it: 'Un succo? No, una spremuta, per favore!', de: 'Einen Saft? Nein, einen frisch gepressten, bitte!' },
    { it: 'La spremuta è buona!', de: 'Der frisch gepresste Saft ist lecker!' },
    { it: 'Una spremuta e un cappuccino, per favore.', de: 'Einen frisch gepressten Saft und einen Cappuccino, bitte.' },
  ] },
  { wort: 'il macchiato', saetze: [
    { it: 'Per Marco un macchiato, non un cappuccino.', de: 'Für Marco einen Macchiato, keinen Cappuccino.' },
    { it: 'Il macchiato? Sì, per me!', de: 'Der Macchiato? Ja, für mich!' },
    { it: 'Due macchiati al bancone, per favore.', de: 'Zwei Macchiato an der Theke, bitte.', form: 'macchiati' },
  ] },
  { wort: "l'acqua naturale", saetze: [
    { it: 'Non frizzante: acqua naturale, per favore.', de: 'Kein Sprudel – stilles Wasser, bitte.' },
    { it: 'L’acqua naturale costa un euro.', de: 'Das stille Wasser kostet einen Euro.' },
    { it: 'Per me acqua naturale, per Anna frizzante.', de: 'Für mich stilles Wasser, für Anna Sprudel.' },
  ] },
  { wort: 'il ghiaccio', saetze: [
    { it: 'Ghiaccio nell’acqua? Sì, grazie!', de: 'Eiswürfel ins Wasser? Ja, danke!' },
    { it: 'Non c’è ghiaccio?', de: 'Gibt es kein Eis?' },
    { it: 'Per me tanto ghiaccio, per favore.', de: 'Für mich viel Eis, bitte.' },
  ] },
  { wort: 'la lattina', saetze: [
    { it: 'La birra in lattina costa due euro.', de: 'Das Bier in der Dose kostet zwei Euro.' },
    { it: 'Ecco una lattina di succo.', de: 'Hier ist eine Dose Saft.' },
    { it: 'Due lattine, per favore.', de: 'Zwei Dosen, bitte.', form: 'lattine' },
  ] },

  // Päckchen 3
  { wort: "l'aranciata", saetze: [
    { it: 'L’aranciata italiana è buona.', de: 'Die italienische Orangenlimonade ist gut.' },
    { it: 'Due aranciate e un’acqua, per favore.', de: 'Zwei Orangenlimonaden und ein Wasser, bitte.', form: 'aranciate' },
    { it: 'Al bancone Marco beve un’aranciata.', de: 'An der Theke trinkt Marco eine Orangenlimonade.', formen: { beve: 'bere' } },
  ] },
  { wort: 'la cannuccia', saetze: [
    { it: 'Scusi, c’è una cannuccia?', de: 'Entschuldigung, gibt es einen Strohhalm?' },
    { it: 'La cannuccia è nella lattina.', de: 'Der Strohhalm steckt in der Dose.' },
    { it: 'Una cannuccia per la spremuta, per favore.', de: 'Einen Strohhalm für den Saft, bitte.' },
  ] },
  { wort: 'la cioccolata', saetze: [
    { it: 'La mattina Anna beve una cioccolata.', de: 'Morgens trinkt Anna eine heiße Schokolade.', formen: { beve: 'bere' } },
    { it: 'Una cioccolata e due cornetti, per favore.', de: 'Eine heiße Schokolade und zwei Hörnchen, bitte.' },
    { it: 'La cioccolata è per Anna, il tè per me.', de: 'Die heiße Schokolade ist für Anna, der Tee für mich.' },
  ] },
  { wort: "l'aperitivo", saetze: [
    { it: 'Alle sette: aperitivo al bar!', de: 'Um sieben: Aperitif in der Bar!' },
    { it: 'Sono all’aperitivo, ciao!', de: 'Ich bin beim Aperitif, tschüss!' },
    { it: 'L’aperitivo è alle otto, a dopo!', de: 'Der Aperitif ist um acht, bis später!' },
  ] },
  { wort: 'lo spritz', saetze: [
    { it: 'Per l’aperitivo uno spritz!', de: 'Zum Aperitif einen Spritz!' },
    { it: 'Due spritz e due aranciate, per favore.', de: 'Zwei Spritz und zwei Orangenlimonaden, bitte.' },
    { it: 'Lo spritz costa sei euro.', de: 'Der Spritz kostet sechs Euro.' },
  ] },
];
