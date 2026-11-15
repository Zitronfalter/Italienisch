// Zusatzübungen A1 und A2: leichter als die Übungen im Kapitel, mit einem Tipp in kleinen Schritten.
// (Die Zusatzübungen für B1 und B2 stehen direkt bei den Kapiteln in grammatik-b.js.)
//
// Die App bietet sie an, wenn beim Üben zu viele Fehler passieren (unter 80 % richtig) –
// am Ende der Übung, auf der Kapitelseite und nach „Kann ich schon“ oder einer Wiederholung.
// Sie zählen nicht als gelöste Kapitel-Übungen und machen ein Kapitel nicht „geübt“.
//
// tipp:     2–4 kurze Schritte auf Deutsch
// uebungen: wie in grammatik.js, dazu { art: 'wahl', de, satz (mit ___), optionen: [richtig, falsch, …] }
//           warum: kurze Erklärung, die bei einem Fehler erscheint

const ZUSATZ = {
  // ==================== A1 ====================
  'essere-un': {
    tipp: [
      'Schau zuerst, WER etwas ist: io, tu, lei, noi …',
      'Dann nimm die passende Form: io sono, tu sei, lui/lei è, noi siamo, voi siete, loro sono.',
      'Bei „ein/eine“: Ist das Wort männlich (meist -o) → un. Weiblich (meist -a) → una.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich bin Marco.', satz: 'Io ___ Marco.', optionen: ['sono', 'sei', 'è'], warum: 'io → sono' },
      { art: 'wahl', de: 'Bist du Anna?', satz: 'Tu ___ Anna?', optionen: ['sei', 'sono', 'è'], warum: 'tu → sei' },
      { art: 'wahl', de: 'eine Pizza', satz: '___ pizza', optionen: ['una', 'un', 'uno'], warum: 'pizza endet auf -a, ist weiblich → una' },
      { art: 'wahl', de: 'ein Kaffee', satz: '___ caffè', optionen: ['un', 'una', "un'"], warum: 'caffè ist männlich → un' },
      { art: 'luecke', de: 'Er ist Luca.', satz: 'Lui ___ Luca. (essere)', loesung: 'è', warum: 'lui / lei → è (mit Akzent, sonst heißt es „und“)' },
      { art: 'kacheln', de: 'Ich bin Anna.', it: 'Sono Anna', extra: ['sei'], warum: 'io kann man weglassen: Sono Anna.' },
    ],
  },

  'artikel': {
    tipp: [
      'Schau auf das Ende des Wortes: -o ist meist männlich, -a meist weiblich.',
      'Männlich → il (il libro). Weiblich → la (la casa).',
      'Fängt das Wort mit a, e, i, o, u an → l\' (l\'acqua, l\'amico).',
      'Mehrzahl: il → i, la → le.',
    ],
    uebungen: [
      { art: 'wahl', de: 'das Buch', satz: '___ libro', optionen: ['il', 'la', 'le'], warum: 'libro endet auf -o → männlich → il' },
      { art: 'wahl', de: 'das Haus', satz: '___ casa', optionen: ['la', 'il', 'lo'], warum: 'casa endet auf -a → weiblich → la' },
      { art: 'wahl', de: 'das Wasser', satz: "___acqua", optionen: ["l'", 'la ', 'il '], warum: "acqua beginnt mit a → l'" },
      { art: 'wahl', de: 'die Häuser', satz: '___ case', optionen: ['le', 'i', 'la'], warum: 'Mehrzahl von la → le' },
      { art: 'luecke', de: 'die Bücher', satz: '___ libri', loesung: 'i', warum: 'Mehrzahl von il → i' },
      { art: 'luecke', de: 'die Pizza', satz: '___ pizza', loesung: 'la', warum: 'pizza ist weiblich → la' },
    ],
  },

  'verben-are': {
    tipp: [
      'Nimm die Grundform: parlare. Streich -are weg: parl-.',
      'Häng die Endung an: io -o, tu -i, lui/lei -a, noi -iamo, voi -ate, loro -ano.',
      'Beispiel: io parlo, tu parli, lei parla, noi parliamo.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich spreche Italienisch.', satz: 'Io ___ italiano.', optionen: ['parlo', 'parla', 'parli'], warum: 'io → -o: parlo' },
      { art: 'wahl', de: 'Du arbeitest viel.', satz: 'Tu ___ molto.', optionen: ['lavori', 'lavoro', 'lavora'], warum: 'tu → -i: lavori' },
      { art: 'wahl', de: 'Marco wohnt in Rom.', satz: 'Marco ___ a Roma.', optionen: ['abita', 'abito', 'abitano'], warum: 'Marco = lui → -a: abita' },
      { art: 'wahl', de: 'Wir essen Pasta.', satz: 'Noi ___ la pasta.', optionen: ['mangiamo', 'mangiate', 'mangiano'], warum: 'noi → -iamo: mangiamo' },
      { art: 'luecke', de: 'Ich höre Musik.', satz: 'Io ___ la musica. (ascoltare)', loesung: 'ascolto', warum: 'ascolt- + o' },
      { art: 'kacheln', de: 'Sie (Mehrzahl) sprechen viel.', it: 'Loro parlano molto', extra: ['parla', 'parliamo'], warum: 'loro → -ano: parlano' },
    ],
  },

  'essere-avere': {
    tipp: [
      'essere = sein: sono, sei, è, siamo, siete, sono.',
      'avere = haben: ho, hai, ha, abbiamo, avete, hanno. Das h spricht man nicht.',
      'Alter sagt man mit avere: Ho trent\'anni = Ich bin dreißig (wörtlich: habe dreißig Jahre).',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich habe einen Bruder.', satz: '___ un fratello.', optionen: ['Ho', 'Sono', 'Ha'], warum: 'haben → avere, io → ho' },
      { art: 'wahl', de: 'Sie ist müde.', satz: 'Lei ___ stanca.', optionen: ['è', 'ha', 'ho'], warum: 'sein → essere, lei → è' },
      { art: 'wahl', de: 'Hast du eine Katze?', satz: '___ un gatto?', optionen: ['Hai', 'Ho', 'Sei'], warum: 'tu → hai' },
      { art: 'wahl', de: 'Ich bin zwanzig Jahre alt.', satz: '___ vent\'anni.', optionen: ['Ho', 'Sono', 'È'], warum: 'Alter mit avere: ho … anni' },
      { art: 'luecke', de: 'Wir haben ein Haus.', satz: '___ una casa. (avere)', loesung: 'abbiamo', warum: 'noi → abbiamo' },
      { art: 'luecke', de: 'Sie (Mehrzahl) sind in Italien.', satz: 'Loro ___ in Italia. (essere)', loesung: 'sono', warum: 'loro → sono (wie io sono)' },
    ],
  },

  'possessiv': {
    tipp: [
      'mein: mio (männlich) / mia (weiblich). dein: tuo / tua.',
      'Das Wort richtet sich nach der SACHE, nicht nach der Person: la mia casa – auch wenn Marco spricht.',
      'Meist steht der Artikel davor: il mio libro. Bei Familie in der Einzahl nicht: mia madre.',
    ],
    uebungen: [
      { art: 'wahl', de: 'mein Buch', satz: 'il ___ libro', optionen: ['mio', 'mia', 'tuo'], warum: 'libro ist männlich → mio' },
      { art: 'wahl', de: 'meine Mutter', satz: '___ madre', optionen: ['mia', 'mio', 'la mia'], warum: 'Familie Einzahl ohne Artikel; madre weiblich → mia' },
      { art: 'wahl', de: 'dein Haus', satz: 'la ___ casa', optionen: ['tua', 'tuo', 'mia'], warum: 'casa weiblich → tua' },
      { art: 'wahl', de: 'mein Bruder', satz: '___ fratello', optionen: ['mio', 'il mio', 'mia'], warum: 'Familie Einzahl: ohne Artikel → mio fratello' },
      { art: 'luecke', de: 'meine Familie', satz: 'la ___ famiglia', loesung: 'mia', warum: 'famiglia ist weiblich → mia' },
      { art: 'kacheln', de: 'Mein Vater arbeitet.', it: 'Mio padre lavora', extra: ['mia', 'il'], warum: 'padre: Familie Einzahl, männlich → mio padre' },
    ],
  },

  'piacere': {
    tipp: [
      'Auf Italienisch „gefällt mir“ etwas: mi piace = mir gefällt.',
      'Eine Sache oder ein Verb → piace: mi piace la pizza, mi piace nuotare.',
      'Mehrere Sachen → piacciono: mi piacciono i libri.',
      'ti piace = dir gefällt. Nicht: non mi piace.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich mag Pizza.', satz: 'Mi ___ la pizza.', optionen: ['piace', 'piacciono', 'piaccio'], warum: 'eine Sache → piace' },
      { art: 'wahl', de: 'Ich mag Bücher.', satz: 'Mi ___ i libri.', optionen: ['piacciono', 'piace', 'piacciamo'], warum: 'mehrere Sachen (i libri) → piacciono' },
      { art: 'wahl', de: 'Magst du schwimmen?', satz: '___ piace nuotare?', optionen: ['Ti', 'Mi', 'Tu'], warum: 'dir → ti' },
      { art: 'wahl', de: 'Ich lese gern.', satz: 'Mi piace ___.', optionen: ['leggere', 'leggo', 'libri'], warum: 'nach mi piace kommt die Grundform: leggere' },
      { art: 'luecke', de: 'Ich mag keinen Kaffee.', satz: '___ mi piace il caffè.', loesung: 'non', warum: 'non steht ganz vorne: Non mi piace …' },
      { art: 'kacheln', de: 'Mir gefallen die Katzen.', it: 'Mi piacciono i gatti', extra: ['piace'], warum: 'i gatti = mehrere → piacciono' },
    ],
  },

  'verben-ere-ire': {
    tipp: [
      'Wie bei -are: Endung weg (prend-ere → prend-, dorm-ire → dorm-).',
      'Endungen fast gleich: -o, -i, -e, -iamo, -ete/-ite, -ono.',
      'Der Unterschied zu -are: lui/lei endet auf -e (prende), nicht auf -a.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich nehme den Zug.', satz: '___ il treno.', optionen: ['Prendo', 'Prende', 'Prendi'], warum: 'io → -o: prendo' },
      { art: 'wahl', de: 'Er schläft.', satz: 'Lui ___.', optionen: ['dorme', 'dorma', 'dormo'], warum: 'lui bei -ire → -e: dorme' },
      { art: 'wahl', de: 'Liest du ein Buch?', satz: '___ un libro?', optionen: ['Leggi', 'Legge', 'Leggo'], warum: 'tu → -i: leggi' },
      { art: 'wahl', de: 'Sie (Mehrzahl) fahren um acht.', satz: '___ alle otto.', optionen: ['Partono', 'Partiamo', 'Parte'], warum: 'loro → -ono: partono' },
      { art: 'luecke', de: 'Wir nehmen einen Kaffee.', satz: '___ un caffè. (prendere)', loesung: 'prendiamo', warum: 'noi → -iamo, wie bei -are' },
      { art: 'kacheln', de: 'Anna schreibt viel.', it: 'Anna scrive molto', extra: ['scriva', 'scrivo'], warum: 'Anna = lei → -e: scrive' },
    ],
  },

  'praepositionen': {
    tipp: [
      'a, di, da, in, su verschmelzen mit il, la …: a + il = al, di + la = della, in + il = nel.',
      'Merke die Bausteine: a → al, alla; di → del, della; in → nel, nella.',
      'Bei Städten kein Artikel: a Roma, di Milano.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich gehe in die Bar.', satz: 'Vado ___ bar.', optionen: ['al', 'alla', 'nel'], warum: 'a + il bar = al bar' },
      { art: 'wahl', de: 'Ich gehe zum Bahnhof.', satz: 'Vado ___ stazione.', optionen: ['alla', 'al', 'della'], warum: 'a + la stazione = alla' },
      { art: 'wahl', de: 'Ich wohne in Rom.', satz: 'Abito ___ Roma.', optionen: ['a', 'al', 'nella'], warum: 'Stadt → nur a, ohne Artikel' },
      { art: 'wahl', de: 'Das Salz ist im Topf.', satz: 'Il sale è ___ pentola.', optionen: ['nella', 'nel', 'alla'], warum: 'in + la pentola = nella' },
      { art: 'luecke', de: 'das Haus des Vaters', satz: 'la casa ___ padre', loesung: 'del', warum: 'di + il = del' },
      { art: 'luecke', de: 'Das Brot liegt im Ofen.', satz: 'Il pane è ___ forno.', loesung: 'nel', warum: 'in + il forno = nel' },
    ],
  },

  'modalverben': {
    tipp: [
      'volere = wollen: voglio, vuoi, vuole. potere = können: posso, puoi, può. dovere = müssen: devo, devi, deve.',
      'Danach kommt die Grundform: Posso pagare? Devo partire.',
      'Höflich: vorrei = ich möchte gern.',
      'c\'è = es gibt (eine Sache), ci sono = es gibt (mehrere).',
    ],
    uebungen: [
      { art: 'wahl', de: 'Kann ich bezahlen?', satz: '___ pagare?', optionen: ['Posso', 'Devo', 'Voglio'], warum: 'können → potere → posso' },
      { art: 'wahl', de: 'Ich muss gehen.', satz: '___ andare.', optionen: ['Devo', 'Posso', 'Vuoi'], warum: 'müssen → dovere → devo' },
      { art: 'wahl', de: 'Ich möchte gern einen Kaffee.', satz: '___ un caffè.', optionen: ['Vorrei', 'Devo', 'Può'], warum: 'höflich wünschen → vorrei' },
      { art: 'wahl', de: 'Gibt es ein Handtuch?', satz: '___ un asciugamano?', optionen: ["C'è", 'Ci sono', 'È'], warum: 'eine Sache → c\'è' },
      { art: 'wahl', de: 'Es gibt zwei Betten.', satz: '___ due letti.', optionen: ['Ci sono', "C'è", 'Sono'], warum: 'zwei Sachen → ci sono' },
      { art: 'luecke', de: 'Willst du ein Eis?', satz: '___ un gelato? (volere)', loesung: 'vuoi', warum: 'tu → vuoi' },
    ],
  },

  'reflexiv': {
    tipp: [
      'Manche Verben haben „sich“: alzarsi = aufstehen, svegliarsi = aufwachen.',
      'Das kleine Wort steht VOR dem Verb: mi alzo, ti alzi, si alza.',
      'mi = mich (ich), ti = dich (du), si = sich (er, sie), ci = uns (wir).',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich stehe um sieben auf.', satz: '___ alzo alle sette.', optionen: ['Mi', 'Ti', 'Si'], warum: 'io → mi' },
      { art: 'wahl', de: 'Wann wachst du auf?', satz: 'Quando ___ svegli?', optionen: ['ti', 'mi', 'si'], warum: 'tu → ti' },
      { art: 'wahl', de: 'Giulia wäscht sich.', satz: 'Giulia ___ lava.', optionen: ['si', 'mi', 'ci'], warum: 'Giulia = lei → si' },
      { art: 'wahl', de: 'Wir stehen früh auf.', satz: 'Ci ___ presto.', optionen: ['alziamo', 'alzano', 'alzo'], warum: 'noi → ci alziamo' },
      { art: 'luecke', de: 'Ich wache früh auf.', satz: '___ sveglio presto.', loesung: 'mi', warum: 'io → mi sveglio' },
      { art: 'kacheln', de: 'Er steht spät auf.', it: 'Si alza tardi', extra: ['mi', 'alzo'], warum: 'lui → si alza' },
    ],
  },

  // ==================== A2 ====================
  'passato-avere': {
    tipp: [
      'Die Vergangenheit hat zwei Teile: avere + Partizip. Ho mangiato = ich habe gegessen.',
      'Partizip bilden: -are → -ato (mangiato), -ere → -uto (venduto), -ire → -ito (dormito).',
      'Einige sind unregelmäßig: fare → fatto, prendere → preso, leggere → letto, vedere → visto.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich habe Pizza gegessen.', satz: 'Ho ___ la pizza.', optionen: ['mangiato', 'mangiare', 'mangio'], warum: 'mangiare → mangiato' },
      { art: 'wahl', de: 'Du hast gut geschlafen.', satz: '___ dormito bene.', optionen: ['Hai', 'Ho', 'Sei'], warum: 'tu → hai' },
      { art: 'wahl', de: 'Wir haben ein Buch gelesen.', satz: 'Abbiamo ___ un libro.', optionen: ['letto', 'leggiato', 'leggito'], warum: 'leggere ist unregelmäßig: letto' },
      { art: 'wahl', de: 'Was hast du gemacht?', satz: 'Che cosa hai ___?', optionen: ['fatto', 'fato', 'farito'], warum: 'fare → fatto' },
      { art: 'luecke', de: 'Ich habe Marco angerufen.', satz: 'Ho ___ Marco. (chiamare)', loesung: 'chiamato', warum: '-are → -ato' },
      { art: 'kacheln', de: 'Sie hat einen Kaffee genommen.', it: 'Ha preso un caffè', extra: ['prenduto', 'è'], warum: 'prendere → preso' },
    ],
  },

  'passato-essere': {
    tipp: [
      'Verben der Bewegung (andare, venire, partire, arrivare, tornare) und restare nehmen essere: sono andato.',
      'Mit essere passt sich das Ende an wie ein Adjektiv: Marco è andato, Anna è andata.',
      'Mehrzahl: sono andati (Männer / gemischt), sono andate (nur Frauen).',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich bin nach Rom gefahren.', satz: '___ andato a Roma.', optionen: ['Sono', 'Ho', 'Hai'], warum: 'andare → mit essere: sono andato' },
      { art: 'wahl', de: 'Anna ist angekommen.', satz: 'Anna è ___.', optionen: ['arrivata', 'arrivato', 'arrivati'], warum: 'Anna ist eine Frau → -a' },
      { art: 'wahl', de: 'Marco und Luca sind abgereist.', satz: 'Marco e Luca sono ___.', optionen: ['partiti', 'partito', 'partite'], warum: 'zwei Männer → -i' },
      { art: 'wahl', de: 'Wir sind zu Hause geblieben.', satz: '___ restati a casa.', optionen: ['Siamo', 'Abbiamo', 'Sono'], warum: 'noi → siamo' },
      { art: 'luecke', de: 'Giulia ist nach Hause zurückgekehrt.', satz: 'Giulia è ___ a casa. (tornare)', loesung: 'tornata', warum: 'tornare → essere, Giulia → -a' },
      { art: 'kacheln', de: 'Er ist um acht gekommen.', it: 'È venuto alle otto', extra: ['ha', 'venuta'], warum: 'venire → essere; er → venuto' },
    ],
  },

  'imperativ': {
    tipp: [
      'In Rezepten sagt man „du“-Befehle: taglia! = schneide!',
      'Schau auf die Grundform: tagliare, mescolare enden auf -are → Befehl auf -a: taglia, mescola.',
      'mettere, aggiungere (-ere) und servire (-ire) → Befehl auf -i: metti, aggiungi, servi.',
      'Verbot: non + Grundform: non mescolare!',
    ],
    uebungen: [
      { art: 'wahl', de: 'Schneide das Brot!', satz: '___ il pane!', optionen: ['Taglia', 'Tagli', 'Tagliare'], warum: 'tagliare (-are) → taglia' },
      { art: 'wahl', de: 'Gib das Salz dazu!', satz: '___ il sale!', optionen: ['Aggiungi', 'Aggiunga', 'Aggiungo'], warum: 'aggiungere (-ere) → aggiungi' },
      { art: 'wahl', de: 'Rühr gut um!', satz: '___ bene!', optionen: ['Mescola', 'Mescoli', 'Mescolo'], warum: 'mescolare (-are) → mescola' },
      { art: 'wahl', de: 'Rühr nicht um!', satz: 'Non ___!', optionen: ['mescolare', 'mescola', 'mescoli'], warum: 'Verbot: non + Grundform' },
      { art: 'luecke', de: 'Leg die Pasta ins Wasser!', satz: '___ la pasta nell\'acqua! (mettere)', loesung: 'metti', warum: 'mettere (-ere) → metti' },
      { art: 'kacheln', de: 'Serviere sofort!', it: 'Servi subito', extra: ['serva', 'servire'], warum: 'servire (-ire) → servi' },
    ],
  },

  'pronomi-diretti': {
    tipp: [
      'Statt das Nomen zu wiederholen, sagt man ein kurzes Wort: Il pane? Lo prendo. = Ich nehme es.',
      'lo (ihn/es, männlich), la (sie, weiblich), li (sie, Mehrzahl männlich), le (sie, Mehrzahl weiblich).',
      'Das kurze Wort steht VOR dem Verb.',
      'ne = davon, bei Mengen: Ne prendo due. = Ich nehme zwei davon.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Der Käse? Ich nehme ihn.', satz: 'Il formaggio? ___ prendo.', optionen: ['Lo', 'La', 'Li'], warum: 'il formaggio = männlich → lo' },
      { art: 'wahl', de: 'Die Pizza? Ich esse sie.', satz: 'La pizza? ___ mangio.', optionen: ['La', 'Lo', 'Le'], warum: 'la pizza = weiblich → la' },
      { art: 'wahl', de: 'Die Äpfel? Ich kaufe sie.', satz: 'Le mele? ___ compro.', optionen: ['Le', 'Li', 'La'], warum: 'le mele = weiblich, Mehrzahl → le' },
      { art: 'wahl', de: 'Wie viele Zitronen? Ich nehme drei (davon).', satz: '___ prendo tre.', optionen: ['Ne', 'Lo', 'Le'], warum: 'Menge → ne' },
      { art: 'luecke', de: 'Die Tomaten? Ich kaufe sie.', satz: 'I pomodori? ___ compro.', loesung: 'li', warum: 'i pomodori = männlich, Mehrzahl → li' },
      { art: 'kacheln', de: 'Ich nehme zwei Kilo davon.', it: 'Ne prendo due chili', extra: ['lo', 'li'], warum: 'Menge → ne' },
    ],
  },

  'pronomi-indiretti': {
    tipp: [
      'Auf die Frage „wem?“ antwortet ein kurzes Wort: mi (mir), ti (dir), gli (ihm), le (ihr; Ihnen).',
      'Es steht vor dem Verb: Gli porto il menù. = Ich bringe ihm die Karte.',
      'Auch bei piacere: Gli piace il vino. = Ihm gefällt der Wein.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Ich bringe ihm das Wasser.', satz: '___ porto l\'acqua.', optionen: ['Gli', 'Le', 'Lo'], warum: 'wem? ihm → gli' },
      { art: 'wahl', de: 'Ich empfehle ihr den Fisch.', satz: '___ consiglio il pesce.', optionen: ['Le', 'Gli', 'La'], warum: 'wem? ihr → le' },
      { art: 'wahl', de: 'Gefällt dir der Wein?', satz: '___ piace il vino?', optionen: ['Ti', 'Mi', 'Gli'], warum: 'dir → ti' },
      { art: 'wahl', de: 'Ihm gefällt das Huhn.', satz: '___ piace il pollo.', optionen: ['Gli', 'Lo', 'Le'], warum: 'ihm → gli' },
      { art: 'luecke', de: 'Kannst du mir die Rechnung bringen?', satz: '___ porti il conto?', loesung: 'mi', warum: 'mir → mi' },
      { art: 'kacheln', de: 'Ich schreibe ihr eine Nachricht.', it: 'Le scrivo un messaggio', extra: ['gli', 'la'], warum: 'wem? ihr → le' },
    ],
  },

  'imperfetto': {
    tipp: [
      'Das imperfetto erzählt, wie etwas früher war oder was man oft gemacht hat.',
      'Endung weg, dann -vo, -vi, -va, -vamo, -vate, -vano: giocare → giocavo, avere → avevo, dormire → dormivo.',
      'essere ist unregelmäßig: ero, eri, era, eravamo, eravate, erano.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Als Kind spielte ich im Garten.', satz: 'Da piccola ___ in giardino.', optionen: ['giocavo', 'giocava', 'ho giocato'], warum: 'io → -vo: giocavo' },
      { art: 'wahl', de: 'Das Haus war groß.', satz: 'La casa ___ grande.', optionen: ['era', 'ero', 'è stato'], warum: 'essere, lei → era' },
      { art: 'wahl', de: 'Wir hatten einen Hund.', satz: '___ un cane.', optionen: ['Avevamo', 'Avevano', 'Avevo'], warum: 'noi → -vamo: avevamo' },
      { art: 'wahl', de: 'Du warst klein.', satz: 'Tu ___ piccolo.', optionen: ['eri', 'era', 'ero'], warum: 'tu → eri' },
      { art: 'luecke', de: 'Mein Opa las immer die Zeitung.', satz: 'Mio nonno ___ sempre il giornale. (leggere)', loesung: 'leggeva', warum: 'legge- + va' },
      { art: 'kacheln', de: 'Wir wohnten am Meer.', it: 'Abitavamo al mare', extra: ['abitavano', 'abitato'], warum: 'noi → abitavamo' },
    ],
  },

  'vergleiche': {
    tipp: [
      'größer als = più grande di. kleiner als = meno grande di (oder più piccolo di).',
      'di verschmilzt mit dem Artikel: più alto del padre (di + il).',
      'Sehr groß: grandissimo. Am größten: il più grande.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Rom ist größer als Florenz.', satz: 'Roma è ___ grande di Firenze.', optionen: ['più', 'meno', 'molto'], warum: 'größer → più' },
      { art: 'wahl', de: 'Marco ist größer als Luca.', satz: 'Marco è più alto ___ Luca.', optionen: ['di', 'che', 'come'], warum: 'als (vor Namen) → di' },
      { art: 'wahl', de: 'Der Winter ist kälter als der Herbst.', satz: "L'inverno è più freddo ___ autunno.", optionen: ["dell'", 'di ', 'del '], warum: "di + l'autunno = dell'autunno" },
      { art: 'wahl', de: 'Im Juli ist es sehr heiß.', satz: 'A luglio fa ___.', optionen: ['caldissimo', 'più caldo', 'caldo di'], warum: 'sehr heiß → caldissimo' },
      { art: 'luecke', de: 'Der Zug ist weniger schnell als das Flugzeug.', satz: "Il treno è ___ veloce dell'aereo.", loesung: 'meno', warum: 'weniger → meno' },
      { art: 'kacheln', de: 'Anna ist so groß wie Giulia.', it: 'Anna è alta come Giulia', extra: ['di', 'più'], warum: 'so … wie → come' },
    ],
  },

  'imperfetto-passato': {
    tipp: [
      'imperfetto = der Hintergrund: Wie war es? Was lief gerade? (Pioveva, ero stanca.)',
      'passato prossimo = das Ereignis: Was ist passiert? (Sono caduta, ho chiamato il medico.)',
      'Faustregel: mentre (während) → imperfetto. All\'improvviso (plötzlich) → passato prossimo.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Es regnete, als ich ankam.', satz: '___ quando sono arrivata.', optionen: ['Pioveva', 'È piovuto', 'Piove'], warum: 'Hintergrund (Wetter) → imperfetto' },
      { art: 'wahl', de: 'Gestern habe ich den Arzt angerufen.', satz: 'Ieri ___ il medico.', optionen: ['ho chiamato', 'chiamavo', 'chiamo'], warum: 'einmaliges Ereignis → passato prossimo' },
      { art: 'wahl', de: 'Während ich aß, klingelte das Telefon.', satz: 'Mentre ___, è suonato il telefono.', optionen: ['mangiavo', 'ho mangiato', 'mangio'], warum: 'mentre → imperfetto' },
      { art: 'wahl', de: 'Ich war müde.', satz: '___ stanca.', optionen: ['Ero', 'Sono stata', 'Sono'], warum: 'Zustand / Gefühl → imperfetto' },
      { art: 'luecke', de: 'Ich hatte Kopfweh, also habe ich eine Tablette genommen.', satz: '___ mal di testa, così ho preso una medicina. (avere)', loesung: 'avevo', warum: 'Zustand → imperfetto: avevo' },
      { art: 'kacheln', de: 'Ich habe einen Freund getroffen.', it: 'Ho incontrato un amico', extra: ['incontravo'], warum: 'einmaliges Ereignis → passato prossimo' },
    ],
  },

  'si-impersonale': {
    tipp: [
      'si + Verb = man: si mangia = man isst.',
      'Folgt EINE Sache, bleibt das Verb in der Einzahl: si taglia il pane.',
      'Folgen MEHRERE Sachen, kommt die Mehrzahl: si tagliano i pomodori.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Man schneidet das Brot.', satz: 'Si ___ il pane.', optionen: ['taglia', 'tagliano', 'taglio'], warum: 'il pane = eins → taglia' },
      { art: 'wahl', de: 'Man schneidet die Tomaten.', satz: 'Si ___ i pomodori.', optionen: ['tagliano', 'taglia', 'tagli'], warum: 'i pomodori = mehrere → tagliano' },
      { art: 'wahl', de: 'In Italien isst man spät.', satz: 'In Italia ___ mangia tardi.', optionen: ['si', 'ci', 'mi'], warum: 'man → si' },
      { art: 'wahl', de: 'Man gibt die Eier dazu.', satz: 'Si ___ le uova.', optionen: ['aggiungono', 'aggiunge', 'aggiungi'], warum: 'le uova = mehrere → aggiungono' },
      { art: 'luecke', de: 'Man verrührt den Zucker.', satz: 'Si ___ lo zucchero. (mescolare)', loesung: 'mescola', warum: 'lo zucchero = eins → mescola' },
      { art: 'kacheln', de: 'Man stellt es in den Kühlschrank.', it: 'Si mette in frigorifero', extra: ['mettono', 'ci'], warum: 'eine Sache → mette' },
    ],
  },

  'relativ-che': {
    tipp: [
      'che verbindet zwei Sätze: Ho un amico. Lui abita a Roma. → Ho un amico che abita a Roma.',
      'che bleibt immer gleich (der, die, das, welche).',
      'Steht ein kleines Wort davor (in, con, di, a), heißt es cui: la città in cui abito.',
    ],
    uebungen: [
      { art: 'wahl', de: 'Das ist die Frau, die hier wohnt.', satz: 'È la donna ___ abita qui.', optionen: ['che', 'cui', 'chi'], warum: 'kein kleines Wort davor → che' },
      { art: 'wahl', de: 'das Haus, in dem ich wohne', satz: 'la casa in ___ abito', optionen: ['cui', 'che', 'quale'], warum: 'nach in → cui' },
      { art: 'wahl', de: 'Das Buch, das ich lese, ist lang.', satz: 'Il libro ___ leggo è lungo.', optionen: ['che', 'cui', 'chi'], warum: 'kein kleines Wort davor → che' },
      { art: 'wahl', de: 'der Freund, mit dem ich spreche', satz: "l'amico con ___ parlo", optionen: ['cui', 'che', 'chi'], warum: 'nach con → cui' },
      { art: 'luecke', de: 'Ich habe einen Hund, der viel schläft.', satz: 'Ho un cane ___ dorme molto.', loesung: 'che', warum: 'kein kleines Wort davor → che' },
      { art: 'kacheln', de: 'Das ist der Zug, den ich nehme.', it: 'È il treno che prendo', extra: ['cui'], warum: 'kein kleines Wort davor → che' },
    ],
  },
};

// Zusatzübungen an die Kapitel hängen (auch an die aus grammatik-b.js)
for (const k of KAPITEL) {
  if (ZUSATZ[k.id]) k.zusatz = ZUSATZ[k.id];
}
