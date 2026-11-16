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
// In einem Satz stehen nur Wörter früherer Lektionen, GRUNDWOERTER, Wörter aus
// schon-bekannt.js (kennt Nicole schon), Eigennamen und Wörter dieser Lektion,
// die in der Liste vorher kommen. Prüfen: node werkzeuge/saetze-pruefen.js
// Ziel: natürliche Sätze aus kleinen Alltagsszenen, wechselnde Personen, verschiedene Satzarten.

const SAETZE = {};

// Lektion 4 „Buona giornata!“ – ähnliche Wörter auf verschiedene Päckchen verteilt
// (buona giornata / buona serata / buonanotte, a domani / a dopo)
SAETZE.l01c = [
  // Päckchen 1
  { wort: 'salve', saetze: [
    { it: 'Salve! Sono la nuova vicina, mi chiamo Elena.', de: 'Hallo! Ich bin die neue Nachbarin, ich heiße Elena.' },
    { it: 'Salve! Scusi, dov’è la stazione?', de: 'Guten Tag! Entschuldigung, wo ist der Bahnhof?' },
    { it: 'Salve a tutti! Io sono Paolo, il nuovo collega.', de: 'Hallo zusammen! Ich bin Paolo, der neue Kollege.' },
  ] },
  { wort: 'come va?', saetze: [
    { it: 'Ciao Sara! Come va? – Bene, grazie. E tu?', de: 'Hallo Sara! Wie geht’s? – Gut, danke. Und dir?' },
    { it: 'Come va il nuovo lavoro?', de: 'Wie läuft die neue Arbeit?' },
    { it: 'Come va a scuola, Matteo?', de: 'Wie läuft’s in der Schule, Matteo?' },
    { it: 'Allora, come va con la tua coinquilina?', de: 'Und, wie klappt’s mit deiner Mitbewohnerin?' },
  ] },
  { wort: 'scusi', saetze: [
    { it: 'Scusi, che ore sono?', de: 'Entschuldigung, wie spät ist es?' },
    { it: 'Scusi, è libero questo posto?', de: 'Entschuldigung, ist dieser Platz frei?' },
    { it: 'Scusi, signora, dov’è la farmacia?', de: 'Entschuldigen Sie, wo ist die Apotheke?' },
    { it: 'Ah, scusi! È il suo cane?', de: 'Oh, Entschuldigung! Ist das Ihr Hund?' },
  ] },
  { wort: 'il cognome', saetze: [
    { it: 'Mi chiamo Sara, e il mio cognome è Rossi.', de: 'Ich heiße Sara, und mein Nachname ist Rossi.' },
    { it: 'Come si scrive il suo cognome?', de: 'Wie schreibt man Ihren Nachnamen?' },
    { it: 'Il cognome, per favore? – Bianchi.', de: 'Den Nachnamen, bitte? – Bianchi.' },
    { it: 'Mia nonna ha un cognome tedesco.', de: 'Meine Oma hat einen deutschen Nachnamen.' },
  ] },
  { wort: 'buona giornata', saetze: [
    { it: 'Ecco il suo caffè. Buona giornata!', de: 'Hier ist Ihr Kaffee. Einen schönen Tag noch!' },
    { it: 'Vado in ufficio. Buona giornata a tutti!', de: 'Ich gehe ins Büro. Einen schönen Tag euch allen!' },
    { it: 'Ciao Paolo, buona giornata! – Anche a te!', de: 'Tschüss Paolo, schönen Tag! – Dir auch!' },
  ] },

  // Päckchen 2
  { wort: 'il telefono', saetze: [
    { it: 'Il telefono suona: è la mamma.', de: 'Das Telefon klingelt: Es ist Mama.' },
    { it: 'Non trovo il mio telefono!', de: 'Ich finde mein Telefon nicht!' },
    { it: 'Scusi, posso usare il telefono?', de: 'Entschuldigung, darf ich das Telefon benutzen?' },
    { it: 'Al telefono parlo solo italiano.', de: 'Am Telefon spreche ich nur Italienisch.' },
  ] },
  { wort: 'grazie mille', saetze: [
    { it: 'Ecco la tua chiave. – Grazie mille!', de: 'Hier ist dein Schlüssel. – Vielen Dank!' },
    { it: 'Grazie mille per il regalo, è molto bello!', de: 'Vielen Dank für das Geschenk, es ist sehr schön!' },
    { it: 'Grazie mille, è molto gentile.', de: 'Vielen Dank, Sie sind sehr nett.' },
  ] },
  { wort: 'di niente', saetze: [
    { it: 'Grazie per l’aiuto! – Di niente!', de: 'Danke für die Hilfe! – Gern geschehen!' },
    { it: 'Scusa il ritardo. – Di niente, va bene.', de: 'Entschuldige die Verspätung. – Keine Ursache, alles gut.' },
    { it: 'Grazie mille, Davide! – Ma di niente!', de: 'Vielen Dank, Davide! – Aber gern doch!' },
  ] },
  { wort: 'a domani', saetze: [
    { it: 'Ora vado a casa. A domani!', de: 'Jetzt gehe ich nach Hause. Bis morgen!' },
    { it: 'A domani in ufficio, Chiara!', de: 'Bis morgen im Büro, Chiara!' },
    { it: 'Ci vediamo a scuola? – Sì, a domani!', de: 'Sehen wir uns in der Schule? – Ja, bis morgen!' },
  ] },
  { wort: 'buona serata', saetze: [
    { it: 'Il ristorante chiude. Buona serata a tutti!', de: 'Das Restaurant schließt. Einen schönen Abend allen!' },
    { it: 'Vai al concerto? Buona serata!', de: 'Gehst du ins Konzert? Schönen Abend!' },
    { it: 'Grazie della cena e buona serata!', de: 'Danke für das Abendessen und einen schönen Abend!' },
  ] },

  // Päckchen 3
  { wort: 'la via', saetze: [
    { it: 'Abito in via Dante, vicino al parco.', de: 'Ich wohne in der Via Dante, in der Nähe des Parks.' },
    { it: 'Scusi, dov’è via Garibaldi? – Sempre dritto.', de: 'Entschuldigung, wo ist die Via Garibaldi? – Immer geradeaus.' },
    { it: 'In questa via ci sono molti negozi.', de: 'In dieser Straße gibt es viele Geschäfte.', formen: { negozi: 'negozio' } },
  ] },
  { wort: 'a dopo', saetze: [
    { it: 'Vado al supermercato. A dopo!', de: 'Ich gehe zum Supermarkt. Bis später!' },
    { it: 'A dopo, al bar in piazza!', de: 'Bis später, in der Bar am Platz!' },
    { it: 'Adesso non posso, a dopo!', de: 'Jetzt kann ich nicht, bis später!' },
  ] },
  { wort: 'benvenuto', saetze: [
    { it: 'Benvenuto a casa nostra, Paolo!', de: 'Willkommen bei uns zu Hause, Paolo!' },
    { it: 'Benvenuta in Italia, signora Weber!', de: 'Willkommen in Italien, Frau Weber!', form: 'benvenuta' },
    { it: 'Ragazzi, benvenuti a Roma!', de: 'Leute, willkommen in Rom!', form: 'benvenuti' },
  ] },
  { wort: 'auguri', saetze: [
    { it: 'Oggi è il tuo compleanno? Auguri!', de: 'Heute ist dein Geburtstag? Herzlichen Glückwunsch!' },
    { it: 'Tanti auguri, nonna!', de: 'Alles Gute, Oma!' },
    { it: 'Auguri per l’esame!', de: 'Viel Glück für die Prüfung!' },
  ] },
  { wort: 'buonanotte', saetze: [
    { it: 'Sono stanca, vado a letto. Buonanotte!', de: 'Ich bin müde, ich gehe ins Bett. Gute Nacht!' },
    { it: 'Buonanotte, ragazzi, a domani!', de: 'Gute Nacht, Leute, bis morgen!' },
    { it: 'Mamma, mi leggi un libro? – Sì, e poi buonanotte!', de: 'Mama, liest du mir ein Buch vor? – Ja, und dann gute Nacht!' },
  ] },
];

// Lektion 5 „Al bar“ – Verben (bere, mangiare, pagare) früh, Zahlen sei … dieci auf alle Päckchen verteilt
SAETZE.l02 = [
  // Päckchen 1
  { wort: 'il bar', saetze: [
    { it: 'La mattina prendo un caffè al bar.', de: 'Morgens trinke ich einen Kaffee in der Bar.' },
    { it: 'C’è un bar qui vicino?', de: 'Gibt es hier in der Nähe eine Bar?' },
    { it: 'Il bar in piazza è sempre pieno.', de: 'Die Bar am Platz ist immer voll.' },
  ] },
  { wort: 'il caffè', saetze: [
    { it: 'Un caffè, per favore! – Va bene!', de: 'Einen Kaffee, bitte! – In Ordnung!' },
    { it: 'Il caffè italiano è molto forte.', de: 'Der italienische Kaffee ist sehr stark.' },
    { it: 'Prendiamo un caffè insieme?', de: 'Trinken wir zusammen einen Kaffee?' },
  ] },
  { wort: 'bere', saetze: [
    { it: 'Ho sete, bevo un po’ d’acqua.', de: 'Ich habe Durst, ich trinke ein bisschen Wasser.', form: 'bevo', formen: { bevo: 'bere' } },
    { it: 'Cosa bevi? – Un tè freddo.', de: 'Was trinkst du? – Einen Eistee.', form: 'bevi', formen: { bevi: 'bere' } },
    { it: 'Mio padre beve solo vino rosso.', de: 'Mein Vater trinkt nur Rotwein.', form: 'beve', formen: { beve: 'bere' } },
    { it: 'Stasera beviamo qualcosa insieme?', de: 'Trinken wir heute Abend zusammen etwas?', form: 'beviamo', formen: { beviamo: 'bere' } },
  ] },
  { wort: 'ecco', saetze: [
    { it: 'Ecco il conto, prego.', de: 'Hier ist die Rechnung, bitte sehr.' },
    { it: 'Ecco Sara, finalmente!', de: 'Da ist Sara, endlich!' },
    { it: 'Ecco le chiavi della macchina.', de: 'Hier sind die Autoschlüssel.' },
  ] },
  { wort: 'sei', saetze: [
    { it: 'Il treno parte alle sei.', de: 'Der Zug fährt um sechs ab.' },
    { it: 'Siamo in sei a cena stasera.', de: 'Wir sind heute Abend zu sechst beim Essen.' },
    { it: 'Sei uova e un po’ di farina.', de: 'Sechs Eier und ein bisschen Mehl.' },
  ] },

  // Päckchen 2
  { wort: 'il cornetto', saetze: [
    { it: 'Un cappuccino e un cornetto, per favore.', de: 'Einen Cappuccino und ein Hörnchen, bitte.' },
    { it: 'Questo cornetto è ancora caldo!', de: 'Dieses Hörnchen ist noch warm!' },
    { it: 'Ci sono ancora cornetti?', de: 'Gibt es noch Hörnchen?', form: 'cornetti' },
  ] },
  { wort: 'mangiare', saetze: [
    { it: 'Ho fame! Mangiamo una pizza?', de: 'Ich habe Hunger! Essen wir eine Pizza?', form: 'mangiamo', formen: { mangiamo: 'mangiare' } },
    { it: 'Mia sorella non mangia carne.', de: 'Meine Schwester isst kein Fleisch.', form: 'mangia' },
    { it: 'Cosa mangi a pranzo?', de: 'Was isst du zu Mittag?', form: 'mangi', formen: { mangi: 'mangiare' } },
    { it: 'La sera mangio poco.', de: 'Abends esse ich wenig.', form: 'mangio' },
  ] },
  { wort: 'pagare', saetze: [
    { it: 'Scusi, posso pagare con la carta di credito?', de: 'Entschuldigung, kann ich mit Kreditkarte bezahlen?' },
    { it: 'Oggi pago io!', de: 'Heute bezahle ich!', form: 'pago' },
    { it: 'Paghiamo alla cassa?', de: 'Bezahlen wir an der Kasse?', form: 'paghiamo', formen: { paghiamo: 'pagare' } },
  ] },
  { wort: 'quanto costa?', saetze: [
    { it: 'Questa borsa è bella. Quanto costa?', de: 'Diese Tasche ist schön. Wie viel kostet sie?' },
    { it: 'Scusi, quanto costa il biglietto?', de: 'Entschuldigung, was kostet die Fahrkarte?' },
    { it: 'Quanto costa una camera per due?', de: 'Was kostet ein Zimmer für zwei?' },
  ] },
  { wort: 'sette', saetze: [
    { it: 'La settimana ha sette giorni.', de: 'Die Woche hat sieben Tage.' },
    { it: 'Alle sette vado in palestra.', de: 'Um sieben gehe ich ins Fitnessstudio.' },
    { it: 'Sette euro per una pizza? Va bene!', de: 'Sieben Euro für eine Pizza? In Ordnung!' },
  ] },

  // Päckchen 3
  { wort: 'anche', saetze: [
    { it: 'Prendo un caffè. – Anche io!', de: 'Ich nehme einen Kaffee. – Ich auch!' },
    { it: 'Parlo inglese e anche un po’ di italiano.', de: 'Ich spreche Englisch und auch ein bisschen Italienisch.' },
    { it: 'Anche oggi piove!', de: 'Auch heute regnet es!' },
  ] },
  { wort: "l'acqua", saetze: [
    { it: 'Ho sete. C’è dell’acqua?', de: 'Ich habe Durst. Gibt es Wasser?' },
    { it: 'Un bicchiere d’acqua, per favore.', de: 'Ein Glas Wasser, bitte.' },
    { it: 'L’acqua del lago è fredda.', de: 'Das Wasser im See ist kalt.' },
  ] },
  { wort: 'la mattina', saetze: [
    { it: 'La mattina vado al lavoro in bicicletta.', de: 'Morgens fahre ich mit dem Fahrrad zur Arbeit.' },
    { it: 'Domani mattina ho un esame.', de: 'Morgen früh habe ich eine Prüfung.' },
    { it: 'Che bella mattina!', de: 'Was für ein schöner Morgen!' },
  ] },
  { wort: 'la colazione', saetze: [
    { it: 'A colazione bevo un cappuccino.', de: 'Zum Frühstück trinke ich einen Cappuccino.', formen: { bevo: 'bere' } },
    { it: 'Facciamo colazione in hotel?', de: 'Frühstücken wir im Hotel?' },
    { it: 'La colazione è pronta!', de: 'Das Frühstück ist fertig!' },
  ] },
  { wort: 'nove', saetze: [
    { it: 'Il negozio apre alle nove.', de: 'Das Geschäft öffnet um neun.' },
    { it: 'Mio nipote ha nove anni.', de: 'Mein Neffe ist neun Jahre alt.' },
    { it: 'Nove euro e cinquanta, grazie.', de: 'Neun Euro fünfzig, danke.' },
  ] },

  // Päckchen 4
  { wort: 'il latte', saetze: [
    { it: 'Un caffè con un po’ di latte, per favore.', de: 'Einen Kaffee mit etwas Milch, bitte.' },
    { it: 'Non c’è più latte nel frigorifero.', de: 'Es gibt keine Milch mehr im Kühlschrank.' },
    { it: 'Mio figlio beve latte freddo.', de: 'Mein Sohn trinkt kalte Milch.', formen: { beve: 'bere' } },
  ] },
  { wort: 'il tè', saetze: [
    { it: 'Fa freddo: prendo un tè caldo.', de: 'Es ist kalt: Ich nehme einen heißen Tee.' },
    { it: 'Preferisci il tè o il caffè?', de: 'Magst du lieber Tee oder Kaffee?' },
    { it: 'Mia nonna beve il tè alle cinque.', de: 'Meine Oma trinkt um fünf Tee.', formen: { beve: 'bere' } },
  ] },
  { wort: 'la birra', saetze: [
    { it: 'Una birra piccola, per favore!', de: 'Ein kleines Bier, bitte!' },
    { it: 'Stasera beviamo una birra al pub?', de: 'Trinken wir heute Abend ein Bier im Pub?', formen: { beviamo: 'bere' } },
    { it: 'La birra tedesca è famosa.', de: 'Das deutsche Bier ist berühmt.' },
  ] },
  { wort: 'otto', saetze: [
    { it: 'La lezione inizia alle otto.', de: 'Der Unterricht beginnt um acht.' },
    { it: 'Siamo in otto: c’è un tavolo?', de: 'Wir sind zu acht: Gibt es einen Tisch?' },
    { it: 'Otto più due fa dieci.', de: 'Acht plus zwei ist zehn.' },
  ] },
  { wort: 'dieci', saetze: [
    { it: 'Il treno è in ritardo di dieci minuti.', de: 'Der Zug hat zehn Minuten Verspätung.' },
    { it: 'Ho solo dieci euro.', de: 'Ich habe nur zehn Euro.' },
    { it: 'Ci vediamo alle dieci in piazza.', de: 'Wir sehen uns um zehn auf dem Platz.' },
  ] },
];

// Lektion 6 „L’aperitivo“ – ähnliche Getränke auf verschiedene Päckchen
// (succo / spremuta, cappuccino / macchiato, acqua frizzante / acqua naturale)
SAETZE.l02a = [
  // Päckchen 1
  { wort: 'avere sete', saetze: [
    { it: 'Fa caldo e ho sete! Un’acqua, per favore.', de: 'Es ist heiß und ich habe Durst! Ein Wasser, bitte.', form: 'ho sete' },
    { it: 'Hai sete? In frigorifero c’è una bibita.', de: 'Hast du Durst? Im Kühlschrank ist ein Getränk.', form: 'hai sete' },
    { it: 'Dopo la partita i ragazzi hanno sete.', de: 'Nach dem Spiel haben die Jungs Durst.', form: 'hanno sete' },
    { it: 'Abbiamo sete: andiamo al bar?', de: 'Wir haben Durst: Gehen wir in die Bar?', form: 'abbiamo sete' },
  ] },
  { wort: 'il succo', saetze: [
    { it: 'Per me un succo di frutta, per favore.', de: 'Für mich einen Fruchtsaft, bitte.' },
    { it: 'A colazione bevo un succo d’arancia.', de: 'Zum Frühstück trinke ich einen Orangensaft.', formen: { bevo: 'bere' } },
    { it: 'Questo succo è troppo dolce.', de: 'Dieser Saft ist zu süß.' },
  ] },
  { wort: 'il cappuccino', saetze: [
    { it: 'Vorrei un cappuccino e un cornetto.', de: 'Ich hätte gern einen Cappuccino und ein Hörnchen.' },
    { it: 'In Italia il cappuccino si beve solo la mattina.', de: 'In Italien trinkt man Cappuccino nur morgens.', formen: { beve: 'bere' } },
    { it: 'Due cappuccini caldi, per favore.', de: 'Zwei heiße Cappuccino, bitte.', form: 'cappuccini' },
  ] },
  { wort: "l'acqua frizzante", saetze: [
    { it: 'Per me acqua frizzante, per favore.', de: 'Für mich Sprudelwasser, bitte.' },
    { it: 'Al ristorante ordino sempre acqua frizzante.', de: 'Im Restaurant bestelle ich immer Sprudelwasser.' },
    { it: 'Mia figlia non beve acqua frizzante.', de: 'Meine Tochter trinkt kein Sprudelwasser.', formen: { beve: 'bere' } },
  ] },
  { wort: 'il bancone', saetze: [
    { it: 'Al bancone il caffè costa meno.', de: 'An der Theke kostet der Kaffee weniger.' },
    { it: 'Paghiamo alla cassa e poi andiamo al bancone.', de: 'Wir bezahlen an der Kasse und gehen dann zur Theke.', formen: { paghiamo: 'pagare' } },
    { it: 'Prendiamo il caffè al bancone o al tavolo?', de: 'Trinken wir den Kaffee an der Theke oder am Tisch?' },
  ] },

  // Päckchen 2
  { wort: 'la spremuta', saetze: [
    { it: 'Una spremuta d’arancia, per favore!', de: 'Einen frisch gepressten Orangensaft, bitte!' },
    { it: 'Una spremuta di pompelmo per me.', de: 'Für mich einen frisch gepressten Grapefruitsaft.' },
    { it: 'Che buona questa spremuta!', de: 'Dieser frisch gepresste Saft ist lecker!' },
  ] },
  { wort: 'il macchiato', saetze: [
    { it: 'Un macchiato: un caffè con un po’ di latte.', de: 'Ein Macchiato: ein Kaffee mit etwas Milch.' },
    { it: 'Per me un macchiato, per mio marito un cappuccino.', de: 'Für mich einen Macchiato, für meinen Mann einen Cappuccino.' },
    { it: 'Al bar il signor Rossi prende sempre un macchiato.', de: 'In der Bar nimmt Herr Rossi immer einen Macchiato.' },
  ] },
  { wort: "l'acqua naturale", saetze: [
    { it: 'Acqua frizzante o naturale? – Naturale, grazie.', de: 'Sprudel oder still? – Still, danke.', form: 'naturale' },
    { it: 'In frigorifero c’è solo acqua naturale.', de: 'Im Kühlschrank gibt es nur stilles Wasser.' },
    { it: 'Un’acqua naturale e un macchiato, per favore.', de: 'Ein stilles Wasser und einen Macchiato, bitte.' },
  ] },
  { wort: 'il ghiaccio', saetze: [
    { it: 'Fa caldo: una bibita con tanto ghiaccio!', de: 'Es ist heiß: ein Getränk mit viel Eis!' },
    { it: 'Il ghiaccio è nel freezer.', de: 'Das Eis ist im Gefrierschrank.' },
    { it: 'Vuoi il ghiaccio nel succo?', de: 'Willst du Eis im Saft?' },
  ] },
  { wort: 'la lattina', saetze: [
    { it: 'Al supermercato compro sei lattine di birra.', de: 'Im Supermarkt kaufe ich sechs Dosen Bier.', form: 'lattine' },
    { it: 'La lattina è vuota.', de: 'Die Dose ist leer.' },
    { it: 'Bevi dalla lattina o dal bicchiere?', de: 'Trinkst du aus der Dose oder aus dem Glas?', formen: { bevi: 'bere' } },
  ] },

  // Päckchen 3
  { wort: "l'aranciata", saetze: [
    { it: 'Per i ragazzi due aranciate, per favore.', de: 'Für die Jungs zwei Orangenlimonaden, bitte.', form: 'aranciate' },
    { it: 'L’aranciata è troppo dolce per me.', de: 'Die Orangenlimonade ist mir zu süß.' },
    { it: 'D’estate bevo un’aranciata con ghiaccio.', de: 'Im Sommer trinke ich eine Orangenlimonade mit Eis.', formen: { bevo: 'bere' } },
  ] },
  { wort: 'la cannuccia', saetze: [
    { it: 'Una cannuccia per il succo, per favore.', de: 'Einen Strohhalm für den Saft, bitte.' },
    { it: 'Il cameriere mette una cannuccia nella spremuta.', de: 'Der Kellner steckt einen Strohhalm in den Saft.' },
    { it: 'Non mi piace bere con la cannuccia.', de: 'Ich trinke nicht gern mit Strohhalm.' },
  ] },
  { wort: 'la cioccolata', saetze: [
    { it: 'D’inverno bevo una cioccolata calda.', de: 'Im Winter trinke ich eine heiße Schokolade.', formen: { bevo: 'bere' } },
    { it: 'La cioccolata in questo bar è molto buona.', de: 'Die heiße Schokolade in dieser Bar ist sehr gut.' },
    { it: 'Mamma, posso avere una cioccolata?', de: 'Mama, darf ich eine heiße Schokolade haben?' },
  ] },
  { wort: "l'aperitivo", saetze: [
    { it: 'Venerdì sera facciamo un aperitivo con i colleghi.', de: 'Freitagabend machen wir einen Aperitif mit den Kollegen.', formen: { colleghi: 'collega' } },
    { it: 'L’aperitivo inizia alle sette.', de: 'Der Aperitif beginnt um sieben.' },
    { it: 'Andiamo all’aperitivo in piazza?', de: 'Gehen wir zum Aperitif auf dem Platz?' },
  ] },
  { wort: 'lo spritz', saetze: [
    { it: 'Per me uno spritz, per lei un’acqua frizzante.', de: 'Für mich einen Spritz, für sie ein Sprudelwasser.' },
    { it: 'Lo spritz è arancione e molto famoso.', de: 'Der Spritz ist orange und sehr berühmt.' },
    { it: 'Due spritz con tanto ghiaccio, per favore!', de: 'Zwei Spritz mit viel Eis, bitte!' },
  ] },
];
