// Grammatik B1 und B2 – gleicher Aufbau wie in grammatik.js (wird an KAPITEL angehängt).
//
// zusatz: leichtere Zusatzübungen bei vielen Fehlern (Aufbau wie in zusatz.js)

KAPITEL.push(
  // ==================== B1 ====================
  {
    id: 'futuro', titel: 'Was sein wird: parlerò, sarò', stufe: 'B1',
    regel: [
      'Die Zukunft (futuro) sagt, was sein wird: Domani parlerò con Marco = Morgen werde ich mit Marco sprechen.',
      'Bildung: Grundform ohne -e, bei -are wird das a zu e (parlare → parler-). Dann die Endungen -ò, -ai, -à, -emo, -ete, -anno.',
      'Unregelmäßig: essere → sarò, avere → avrò, andare → andrò, fare → farò, venire → verrò, potere → potrò, dovere → dovrò, volere → vorrò. Bei cercare und pagare kommt ein h dazu: cercherò, pagherò.',
      'Im Alltag sagt man oft auch die Gegenwart: Domani parto.',
    ],
    tabelle: {
      kopf: ['Person', 'parlare', 'prendere', 'essere'],
      zeilen: [
        ['io', 'parlerò', 'prenderò', 'sarò'],
        ['tu', 'parlerai', 'prenderai', 'sarai'],
        ['lui / lei', 'parlerà', 'prenderà', 'sarà'],
        ['noi', 'parleremo', 'prenderemo', 'saremo'],
        ['voi', 'parlerete', 'prenderete', 'sarete'],
        ['loro', 'parleranno', 'prenderanno', 'saranno'],
      ],
    },
    kurz: 'Zukunft: parlerò, parlerai, parlerà, parleremo, parlerete, parleranno. Unregelmäßig: sarò, avrò, andrò, farò, verrò.',
    uebungen: [
      { art: 'luecke', de: 'Nächstes Jahr werde ich Italienisch lernen.', satz: "L'anno prossimo ___ l'italiano. (studiare)", loesung: 'studierò' },
      { art: 'luecke', de: 'Morgen wirst du Marco anrufen.', satz: 'Domani ___ Marco. (chiamare)', loesung: 'chiamerai' },
      { art: 'kacheln', de: 'Wir werden im September umziehen.', it: 'Ci trasferiremo a settembre', extra: ['trasferiamo', 'trasferiranno'] },
      { art: 'luecke', de: 'Sie wird müde sein.', satz: 'Lei ___ stanca. (essere)', loesung: 'sarà' },
      { art: 'luecke', de: 'Im Sommer werden wir nach Sizilien fahren.', satz: 'In estate ___ in Sicilia. (andare)', loesung: 'andremo' },
      { art: 'kacheln', de: 'Ich werde eine Wohnung suchen.', it: 'Cercherò un appartamento', extra: ['cercarò', 'cerco'] },
      { art: 'luecke', de: 'Werdet ihr Zeit haben?', satz: '___ tempo? (avere)', loesung: 'avrete' },
      { art: 'kacheln', de: 'Sie (Mehrzahl) werden spät kommen.', it: 'Verranno tardi', extra: ['veniranno', 'verrà'] },
    ],
    zusatz: {
      tipp: [
        'Nimm die Grundform und streich das letzte -e: parlare → parlar-, prendere → prender-.',
        'Bei -are wird das a zu e: parlar- → parler-.',
        'Dann kommt die Endung: io -ò, tu -ai, lui/lei -à, noi -emo, voi -ete, loro -anno.',
        'Zwei wichtige Ausnahmen: essere → sarò, avere → avrò.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich werde morgen arbeiten.', satz: 'Domani ___.', optionen: ['lavorerò', 'lavorarò', 'lavoro'], warum: 'lavorare → lavorer- + ò' },
        { art: 'wahl', de: 'Du wirst den Zug nehmen.', satz: '___ il treno.', optionen: ['Prenderai', 'Prenderà', 'Prendi'], warum: 'tu → -ai' },
        { art: 'wahl', de: 'Es wird schön sein.', satz: '___ bello.', optionen: ['Sarà', 'Avrà', 'È'], warum: 'essere → sarà' },
        { art: 'wahl', de: 'Wir werden ein Haus haben.', satz: '___ una casa.', optionen: ['Avremo', 'Saremo', 'Abbiamo'], warum: 'avere → avremo' },
        { art: 'luecke', de: 'Sie (Mehrzahl) werden Italienisch sprechen.', satz: '___ italiano. (parlare)', loesung: 'parleranno', warum: 'loro → -anno' },
        { art: 'kacheln', de: 'Ich werde nach Rom fahren.', it: 'Andrò a Roma', extra: ['Anderò', 'vado'], warum: 'andare ist unregelmäßig: andrò' },
      ],
    },
  },

  {
    id: 'condizionale', titel: 'Ich würde gern: vorrei, sarebbe', stufe: 'B1',
    regel: [
      'Das condizionale heißt „würde“: parlerei = ich würde sprechen. Damit sagt man Wünsche und fragt höflich.',
      'Der Stamm ist derselbe wie in der Zukunft (parler-, prender-, sar-, avr-, vorr-, potr-, dovr-). Die Endungen: -ei, -esti, -ebbe, -emmo, -este, -ebbero.',
      'Höflich: Vorrei un caffè. Potrebbe aiutarmi? Mi piacerebbe = ich würde gern. Ratschlag: Dovresti … = Du solltest …',
    ],
    tabelle: {
      kopf: ['Person', 'parlare', 'essere', 'volere'],
      zeilen: [
        ['io', 'parlerei', 'sarei', 'vorrei'],
        ['tu', 'parleresti', 'saresti', 'vorresti'],
        ['lui / lei', 'parlerebbe', 'sarebbe', 'vorrebbe'],
        ['noi', 'parleremmo', 'saremmo', 'vorremmo'],
        ['voi', 'parlereste', 'sareste', 'vorreste'],
        ['loro', 'parlerebbero', 'sarebbero', 'vorrebbero'],
      ],
    },
    kurz: 'Würde-Form: Stamm wie im Futur + -ei, -esti, -ebbe, -emmo, -este, -ebbero (vorrei, sarebbe, potrebbe).',
    uebungen: [
      { art: 'luecke', de: 'Ich würde gern ein Boot kaufen.', satz: '___ comprare una barca. (volere)', loesung: 'vorrei' },
      { art: 'luecke', de: 'Könnten Sie mir helfen?', satz: '___ aiutarmi? (potere)', loesung: 'potrebbe' },
      { art: 'kacheln', de: 'Ich würde gern am Meer wohnen.', it: 'Mi piacerebbe abitare al mare', extra: ['piacerei', 'piace'] },
      { art: 'luecke', de: 'Wir würden lieber zu Hause bleiben.', satz: '___ restare a casa. (preferire)', loesung: 'preferiremmo' },
      { art: 'luecke', de: 'Du solltest weniger arbeiten.', satz: '___ lavorare meno. (dovere)', loesung: 'dovresti' },
      { art: 'kacheln', de: 'Was würdest du machen?', it: 'Che cosa faresti', extra: ['farai', 'fai'] },
      { art: 'luecke', de: 'Sie (Mehrzahl) würden gern reisen.', satz: '___ viaggiare. (volere)', loesung: 'vorrebbero' },
      { art: 'kacheln', de: 'Das wäre schön.', it: 'Sarebbe bello', extra: ['sarà', 'sarei'] },
    ],
    zusatz: {
      tipp: [
        'Denk an „würde“: Wunsch, Traum oder höfliche Bitte.',
        'Nimm den Stamm der Zukunft: parler-, sar-, vorr-, potr-.',
        'Häng die Würde-Endung an: io -ei, tu -esti, lui/lei -ebbe.',
        'Merksatz: Vorrei un caffè – ich hätte gern einen Kaffee.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich hätte gern ein Wasser.', satz: "___ un'acqua.", optionen: ['Vorrei', 'Voglio', 'Vorrò'], warum: 'höflich wünschen → vorrei' },
        { art: 'wahl', de: 'Könntest du mir helfen?', satz: '___ aiutarmi?', optionen: ['Potresti', 'Potrebbe', 'Puoi'], warum: 'tu → -esti: potresti' },
        { art: 'wahl', de: 'Er würde gern reisen.', satz: 'Gli ___ viaggiare.', optionen: ['piacerebbe', 'piacerei', 'piace'], warum: 'Es (das Reisen) würde ihm gefallen → piacerebbe' },
        { art: 'wahl', de: 'Das wäre toll.', satz: '___ fantastico.', optionen: ['Sarebbe', 'Sarà', 'Sarei'], warum: 'es → -ebbe: sarebbe' },
        { art: 'luecke', de: 'Ich würde gern schlafen.', satz: '___ dormire. (volere)', loesung: 'vorrei', warum: 'io → -ei: vorrei' },
        { art: 'kacheln', de: 'Du solltest Wasser trinken.', it: "Dovresti bere acqua", extra: ['dovrai', 'devi'], warum: 'Ratschlag → dovresti' },
      ],
    },
  },

  {
    id: 'gerundio', titel: 'Gerade jetzt: sto mangiando', stufe: 'B1',
    regel: [
      'Was gerade in diesem Moment passiert, sagt man mit stare + Gerundium: Sto mangiando = Ich esse gerade.',
      'Gerundium: -are → -ando (parlando), -ere und -ire → -endo (prendendo, dormendo). Unregelmäßig: fare → facendo, dire → dicendo, bere → bevendo.',
      'stare: sto, stai, sta, stiamo, state, stanno. Für die Vergangenheit: stavo leggendo = ich las gerade.',
    ],
    tabelle: {
      kopf: ['Person', 'stare', '+ Gerundium'],
      zeilen: [
        ['io', 'sto', 'parlando'],
        ['tu', 'stai', 'mangiando'],
        ['lui / lei', 'sta', 'scrivendo'],
        ['noi', 'stiamo', 'dormendo'],
        ['voi', 'state', 'facendo'],
        ['loro', 'stanno', 'leggendo'],
      ],
    },
    kurz: 'stare (sto, stai, sta …) + -ando / -endo = gerade etwas tun: sto parlando, sta leggendo.',
    uebungen: [
      { art: 'luecke', de: 'Ich spreche gerade mit Marco.', satz: 'Sto ___ con Marco. (parlare)', loesung: 'parlando' },
      { art: 'luecke', de: 'Was machst du gerade?', satz: 'Che cosa stai ___? (fare)', loesung: 'facendo' },
      { art: 'kacheln', de: 'Wir essen gerade.', it: 'Stiamo mangiando', extra: ['mangiamo', 'stando'] },
      { art: 'luecke', de: 'Sie schreibt gerade eine Nachricht.', satz: '___ scrivendo un messaggio. (stare)', loesung: 'sta' },
      { art: 'luecke', de: 'Die Kinder schlafen gerade.', satz: 'I bambini stanno ___. (dormire)', loesung: 'dormendo' },
      { art: 'kacheln', de: 'Ich warte gerade auf den Bus.', it: "Sto aspettando l'autobus", extra: ['aspetto', 'stai'] },
      { art: 'luecke', de: 'Er las gerade, als ich anrief.', satz: 'Stava ___ quando ho chiamato. (leggere)', loesung: 'leggendo' },
      { art: 'kacheln', de: 'Was sagst du da gerade?', it: 'Che cosa stai dicendo', extra: ['facendo', 'dici'] },
    ],
    zusatz: {
      tipp: [
        'Frag dich: Passiert es GERADE JETZT? Dann stare + Gerundium.',
        'Erst stare: io sto, tu stai, lui/lei sta.',
        'Dann das Verb: -are → -ando (parlando), -ere/-ire → -endo (leggendo, dormendo).',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich esse gerade.', satz: 'Sto ___.', optionen: ['mangiando', 'mangiendo', 'mangiato'], warum: 'mangiare (-are) → mangiando' },
        { art: 'wahl', de: 'Du liest gerade.', satz: '___ leggendo.', optionen: ['Stai', 'Sto', 'Sta'], warum: 'tu → stai' },
        { art: 'wahl', de: 'Er schläft gerade.', satz: 'Sta ___.', optionen: ['dormendo', 'dormando', 'dorme'], warum: 'dormire (-ire) → dormendo' },
        { art: 'wahl', de: 'Was machst du gerade?', satz: 'Che cosa stai ___?', optionen: ['facendo', 'fando', 'fatto'], warum: 'fare ist unregelmäßig: facendo' },
        { art: 'luecke', de: 'Wir arbeiten gerade.', satz: '___ lavorando. (stare)', loesung: 'stiamo', warum: 'noi → stiamo' },
        { art: 'kacheln', de: 'Sie (Mehrzahl) kochen gerade.', it: 'Stanno cucinando', extra: ['cucinendo', 'sta'], warum: 'loro → stanno; cucinare → cucinando' },
      ],
    },
  },

  {
    id: 'pronomi-combinati', titel: 'Ich gebe es dir: te lo, glielo', stufe: 'B1',
    regel: [
      'Zwei kleine Wörter zusammen: „es mir“, „es ihm“. Das Wem-Wort steht vorne: Me lo dai? = Gibst du es mir?',
      'mi, ti, ci, vi werden vor lo, la, li, le und ne zu me, te, ce, ve: te lo dico, ce ne sono.',
      'gli und le (ihm, ihr, Ihnen) werden zu glie- und hängen zusammen: glielo, gliela, glieli, gliele, gliene.',
    ],
    tabelle: {
      kopf: ['', '+ lo', '+ la', '+ li / le', '+ ne'],
      zeilen: [
        ['mi', 'me lo', 'me la', 'me li / me le', 'me ne'],
        ['ti', 'te lo', 'te la', 'te li / te le', 'te ne'],
        ['gli / le', 'glielo', 'gliela', 'glieli / gliele', 'gliene'],
        ['ci', 'ce lo', 'ce la', 'ce li / ce le', 'ce ne'],
        ['vi', 've lo', 've la', 've li / ve le', 've ne'],
      ],
    },
    kurz: 'Wem-Wort zuerst und mit e: me lo, te lo, ce lo; ihm/ihr: glielo, gliela, glieli, gliele.',
    uebungen: [
      { art: 'luecke', de: 'Das Buch? Ich leihe es dir.', satz: 'Il libro? ___ lo presto.', loesung: 'te' },
      { art: 'luecke', de: 'Die Tasche? Ich gebe sie ihr.', satz: 'La borsa? ___ do.', loesung: 'gliela' },
      { art: 'kacheln', de: 'Kannst du es mir schicken?', it: 'Me lo puoi mandare', extra: ['mi', 'glielo'] },
      { art: 'luecke', de: 'Die Fotos? Ich schicke sie ihm morgen.', satz: 'Le foto? ___ mando domani.', loesung: 'gliele' },
      { art: 'luecke', de: 'Das Paket? Er schickt es uns.', satz: 'Il pacco? ___ lo spedisce.', loesung: 'ce' },
      { art: 'kacheln', de: 'Ich sage es dir morgen.', it: 'Te lo dico domani', extra: ['ti', 'glielo'] },
      { art: 'luecke', de: 'Die Schlüssel? Gibst du sie mir?', satz: 'Le chiavi? Me ___ dai?', loesung: 'le' },
      { art: 'kacheln', de: 'Ich sage es ihm sofort.', it: 'Glielo dico subito', extra: ['gli', 'lo'] },
    ],
    zusatz: {
      tipp: [
        'Schritt 1: WEM? mir = mi, dir = ti, ihm/ihr = gli/le.',
        'Schritt 2: WAS? ihn/es = lo, sie = la, sie (Mehrzahl) = li / le.',
        'Schritt 3: Zusammensetzen – das Wem-Wort zuerst, das i wird zu e: mi + lo = me lo, ti + la = te la.',
        'Ihm oder ihr: gli + lo = glielo (ein Wort).',
      ],
      uebungen: [
        { art: 'wahl', de: 'Gibst du es mir?', satz: '___ dai?', optionen: ['Me lo', 'Mi lo', 'Lo mi'], warum: 'mi + lo = me lo' },
        { art: 'wahl', de: 'Ich schicke es dir.', satz: '___ mando.', optionen: ['Te lo', 'Ti lo', 'Glielo'], warum: 'ti + lo = te lo' },
        { art: 'wahl', de: 'Ich gebe es ihm.', satz: '___ do.', optionen: ['Glielo', 'Gli lo', 'Lo gli'], warum: 'gli + lo = glielo, ein Wort' },
        { art: 'wahl', de: 'Die Tasche? Ich leihe sie dir.', satz: 'La borsa? ___ presto.', optionen: ['Te la', 'Te lo', 'Ti la'], warum: 'la borsa → la; ti + la = te la' },
        { art: 'luecke', de: 'Der Brief? Ich schreibe ihn dir.', satz: 'La lettera? Te ___ scrivo.', loesung: 'la', warum: 'la lettera ist weiblich → la' },
        { art: 'kacheln', de: 'Ich erkläre es dir.', it: 'Te lo spiego', extra: ['ti', 'mi'], warum: 'ti + lo = te lo' },
      ],
    },
  },

  {
    id: 'ci-ne', titel: 'Dort und davon: ci und ne', stufe: 'B1',
    regel: [
      'ci ersetzt einen Ort: Vai a Napoli? Sì, ci vado. = Ja, ich fahre hin.',
      'ne heißt „davon“ (bei Mengen) oder „darüber“: Quante carote? Ne prendo due. Che ne pensi? = Was denkst du darüber?',
      "Feste Wendungen: ci vuole (eine Sache) / ci vogliono (mehrere) = man braucht: Ci vuole un'ora. Ci vogliono due uova. Und: ci metto dieci minuti = ich brauche zehn Minuten.",
    ],
    tabelle: {
      kopf: ['Italienisch', 'Deutsch'],
      zeilen: [
        ['Ci vado.', 'Ich gehe hin.'],
        ['Ci sono stata.', 'Ich war dort.'],
        ['Ne prendo tre.', 'Ich nehme drei davon.'],
        ['Che ne pensi?', 'Was hältst du davon?'],
        ["Ci vuole un'ora.", 'Man braucht eine Stunde.'],
        ['Ci vogliono due uova.', 'Man braucht zwei Eier.'],
        ['Ci metto dieci minuti.', 'Ich brauche zehn Minuten.'],
      ],
    },
    kurz: 'ci = dort / dorthin (Ci vado). ne = davon / darüber (Ne prendo due). ci vuole / ci vogliono = man braucht.',
    uebungen: [
      { art: 'luecke', de: 'Gehst du zum Markt? Ja, ich gehe hin.', satz: 'Vai al mercato? Sì, ___ vado.', loesung: 'ci' },
      { art: 'luecke', de: 'Wie viele Karotten? Ich nehme zwei (davon).', satz: 'Quante carote? ___ prendo due.', loesung: 'ne' },
      { art: 'kacheln', de: 'Man braucht eine Stunde.', it: "Ci vuole un'ora", extra: ['vogliono', 'ne'] },
      { art: 'luecke', de: 'Man braucht drei Eier.', satz: 'Ci ___ tre uova. (volere)', loesung: 'vogliono' },
      { art: 'kacheln', de: 'Was hältst du davon?', it: 'Che ne pensi', extra: ['ci', 'lo'] },
      { art: 'luecke', de: 'Warst du schon in Neapel? Ja, ich war schon dort.', satz: 'Sì, ___ sono già stata.', loesung: 'ci' },
      { art: 'luecke', de: 'Wie viel Brühe? Ich nehme einen Liter (davon).', satz: 'Quanto brodo? ___ uso un litro.', loesung: 'ne' },
      { art: 'kacheln', de: 'Ich brauche zwanzig Minuten.', it: 'Ci metto venti minuti', extra: ['ne', 'vuole'] },
    ],
    zusatz: {
      tipp: [
        'Geht es um einen ORT (nach Rom, zum Markt)? → ci.',
        'Geht es um eine MENGE (zwei davon, ein bisschen davon)? → ne.',
        'Man braucht eine Sache → ci vuole. Mehrere Sachen → ci vogliono.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Fährst du nach Rom? Ja, ich fahre hin.', satz: 'Sì, ___ vado.', optionen: ['ci', 'ne', 'lo'], warum: 'Ort → ci' },
        { art: 'wahl', de: 'Wie viele Äpfel? Ich nehme vier (davon).', satz: '___ prendo quattro.', optionen: ['Ne', 'Ci', 'Li'], warum: 'Menge → ne' },
        { art: 'wahl', de: 'Man braucht Geduld.', satz: '___ vuole pazienza.', optionen: ['Ci', 'Ne', 'Si'], warum: 'ci vuole = man braucht' },
        { art: 'wahl', de: 'Man braucht zwei Karotten.', satz: 'Ci ___ due carote.', optionen: ['vogliono', 'vuole', 'volete'], warum: 'zwei Karotten = mehrere → ci vogliono' },
        { art: 'luecke', de: 'Bist du im Museum gewesen? Ja, ich war dort.', satz: 'Sì, ___ sono stato.', loesung: 'ci', warum: 'Ort → ci' },
        { art: 'kacheln', de: 'Ich nehme ein bisschen davon.', it: "Ne prendo un po'", extra: ['ci', 'lo'], warum: 'Menge → ne' },
      ],
    },
  },

  {
    id: 'trapassato', titel: 'Es war schon passiert: avevo fatto', stufe: 'B1',
    regel: [
      'Die Vorvergangenheit (trapassato prossimo) erzählt, was VOR einem anderen Ereignis schon passiert war: Avevo già mangiato = Ich hatte schon gegessen.',
      'Bildung wie das passato prossimo, nur steht avere oder essere im imperfetto: avevo fatto, ero andata.',
      'Typische Wörter: già (schon), prima (vorher), mai (nie), quando: Quando sono arrivata, il treno era già partito.',
    ],
    tabelle: {
      kopf: ['Person', 'mit avere', 'mit essere'],
      zeilen: [
        ['io', 'avevo parlato', 'ero andato / andata'],
        ['tu', 'avevi parlato', 'eri andato / andata'],
        ['lui / lei', 'aveva parlato', 'era andato / andata'],
        ['noi', 'avevamo parlato', 'eravamo andati / andate'],
        ['voi', 'avevate parlato', 'eravate andati / andate'],
        ['loro', 'avevano parlato', 'erano andati / andate'],
      ],
    },
    kurz: 'Vorvergangenheit: avevo / ero + Partizip (avevo mangiato, era partito) – was vorher schon passiert war.',
    uebungen: [
      { art: 'luecke', de: 'Ich hatte schon gegessen.', satz: '___ già mangiato. (avere)', loesung: 'avevo' },
      { art: 'luecke', de: 'Als ich ankam, war der Zug schon abgefahren.', satz: 'Quando sono arrivata, il treno ___ già partito. (essere)', loesung: 'era' },
      { art: 'kacheln', de: 'Sie hatte den Vertrag gelesen.', it: 'Aveva letto il contratto', extra: ['ha', 'avevo'] },
      { art: 'luecke', de: 'Wir hatten nichts vorbereitet.', satz: 'Non ___ preparato niente. (avere)', loesung: 'avevamo' },
      { art: 'luecke', de: 'Er hatte nie in einem Büro gearbeitet.', satz: 'Non aveva mai ___ in un ufficio. (lavorare)', loesung: 'lavorato' },
      { art: 'kacheln', de: 'Sie (Mehrzahl) waren schon nach Hause zurückgekehrt.', it: 'Erano già tornati a casa', extra: ['sono', 'avevano'] },
      { art: 'luecke', de: 'Hattest du ihn schon kennengelernt?', satz: "L'___ già conosciuto? (avere)", loesung: 'avevi' },
      { art: 'kacheln', de: 'Ich war noch nie in Mailand gewesen.', it: 'Non ero mai stata a Milano', extra: ['avevo', 'sono'] },
    ],
    zusatz: {
      tipp: [
        'Zwei Dinge in der Vergangenheit: Was war ZUERST? Das bekommt die Vorvergangenheit.',
        'Bilde es wie „ho mangiato“, aber mit avevo statt ho: avevo mangiato.',
        'Bei Verben mit essere: ero statt sono: ero partita.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich hatte schon gegessen.', satz: '___ già mangiato.', optionen: ['Avevo', 'Ho', 'Ero'], warum: 'Vorvergangenheit mit avere → avevo' },
        { art: 'wahl', de: 'Sie war schon abgefahren.', satz: '___ già partita.', optionen: ['Era', 'Aveva', 'È'], warum: 'partire geht mit essere → era' },
        { art: 'wahl', de: 'Wir hatten das Buch gelesen.', satz: '___ letto il libro.', optionen: ['Avevamo', 'Abbiamo', 'Eravamo'], warum: 'noi → avevamo' },
        { art: 'wahl', de: 'Du hattest es mir gesagt.', satz: 'Me lo ___ detto.', optionen: ['avevi', 'hai', 'eri'], warum: 'tu → avevi' },
        { art: 'luecke', de: 'Er hatte gut geschlafen.', satz: '___ dormito bene. (avere)', loesung: 'aveva', warum: 'lui → aveva' },
        { art: 'kacheln', de: 'Ich war schon angekommen.', it: 'Ero già arrivata', extra: ['avevo', 'sono'], warum: 'arrivare geht mit essere → ero arrivata' },
      ],
    },
  },

  {
    id: 'congiuntivo', titel: 'Ich glaube, dass …: congiuntivo', stufe: 'B1',
    regel: [
      'Nach Meinung, Hoffnung, Wunsch oder Gefühl steht das congiuntivo: Penso che sia vero. Spero che tu stia bene. È importante che tutti paghino.',
      'Bildung: -are → -i (che io / tu / lui parli), -ere und -ire → -a (prenda, dorma). Mehrzahl: parliamo, parliate, parlino.',
      'Wichtige unregelmäßige: essere → sia, avere → abbia, fare → faccia, andare → vada, venire → venga, potere → possa, volere → voglia, stare → stia, capire → capisca.',
      'Ist die Person in beiden Teilen gleich, nimmt man di + Grundform: Penso di partire domani.',
    ],
    tabelle: {
      kopf: ['che …', 'parlare', 'prendere', 'essere'],
      zeilen: [
        ['io', 'parli', 'prenda', 'sia'],
        ['tu', 'parli', 'prenda', 'sia'],
        ['lui / lei', 'parli', 'prenda', 'sia'],
        ['noi', 'parliamo', 'prendiamo', 'siamo'],
        ['voi', 'parliate', 'prendiate', 'siate'],
        ['loro', 'parlino', 'prendano', 'siano'],
      ],
    },
    kurz: 'Nach penso / credo / spero / è importante che: congiuntivo – parli, prenda, sia, abbia, faccia, vada.',
    uebungen: [
      { art: 'luecke', de: 'Ich denke, dass es wahr ist.', satz: 'Penso che ___ vero. (essere)', loesung: 'sia' },
      { art: 'luecke', de: 'Ich hoffe, dass du gut ankommst.', satz: 'Spero che tu ___ bene. (arrivare)', loesung: 'arrivi' },
      { art: 'kacheln', de: 'Es scheint, dass sie recht hat.', it: 'Sembra che abbia ragione', extra: ['ha', 'è'] },
      { art: 'luecke', de: 'Es ist wichtig, dass die Touristen zahlen.', satz: 'È importante che i turisti ___. (pagare)', loesung: 'paghino' },
      { art: 'luecke', de: 'Ich glaube, dass Marco morgen kommt.', satz: 'Credo che Marco ___ domani. (venire)', loesung: 'venga' },
      { art: 'kacheln', de: 'Ich will, dass du bleibst.', it: 'Voglio che tu resti', extra: ['resta', 'restare'] },
      { art: 'luecke', de: 'Ich glaube nicht, dass sie (Mehrzahl) es verstehen.', satz: 'Non credo che lo ___. (capire)', loesung: 'capiscano' },
      { art: 'kacheln', de: 'Es ist nötig, dass wir die Umwelt schützen.', it: "È necessario che proteggiamo l'ambiente", extra: ['proteggere', 'proteggono'] },
    ],
    zusatz: {
      tipp: [
        'Steht vorne penso che, credo che, spero che, è importante che? Dann kommt das congiuntivo.',
        '-are-Verben bekommen ein -i: parli, arrivi, paghi.',
        '-ere- und -ire-Verben bekommen ein -a: prenda, dorma, legga.',
        'Die zwei wichtigsten: essere → sia, avere → abbia.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich denke, dass es schön ist.', satz: 'Penso che ___ bello.', optionen: ['sia', 'è', 'sarà'], warum: 'nach penso che → congiuntivo: sia' },
        { art: 'wahl', de: 'Ich hoffe, dass du Zeit hast.', satz: 'Spero che tu ___ tempo.', optionen: ['abbia', 'hai', 'ha'], warum: 'nach spero che → congiuntivo: abbia' },
        { art: 'wahl', de: 'Ich glaube, dass er Italienisch spricht.', satz: 'Credo che ___ italiano.', optionen: ['parli', 'parla', 'parlo'], warum: '-are → -i: parli' },
        { art: 'wahl', de: 'Es ist wichtig, dass sie liest.', satz: 'È importante che ___.', optionen: ['legga', 'legge', 'leggi'], warum: '-ere → -a: legga' },
        { art: 'luecke', de: 'Ich denke, dass sie müde ist.', satz: 'Penso che ___ stanca. (essere)', loesung: 'sia', warum: 'essere → sia' },
        { art: 'kacheln', de: 'Ich hoffe, dass er kommt.', it: 'Spero che venga', extra: ['viene', 'verrà'], warum: 'venire → venga' },
      ],
    },
  },

  {
    id: 'passivo', titel: 'Es wurde gebaut: das Passiv', stufe: 'B1',
    regel: [
      'Im Passiv ist wichtig, WAS passiert, nicht wer es tut: Il teatro è stato costruito nel 1820 = Das Theater wurde 1820 gebaut. So schreibt die Zeitung.',
      'Bildung: essere + Partizip. Das Partizip passt sich an: la mostra è stata aperta, i quadri sono stati scoperti.',
      'Statt essere nimmt man in der Gegenwart oft venire: Il museo viene aperto alle nove. Wer es tut, kommt mit da: scoperto da un turista.',
    ],
    tabelle: {
      kopf: ['Zeit', 'Italienisch', 'Deutsch'],
      zeilen: [
        ['jetzt', 'Il teatro è (viene) restaurato.', 'Das Theater wird restauriert.'],
        ['vorbei', 'Il teatro è stato restaurato.', 'Das Theater wurde restauriert.'],
        ['später', 'Il teatro sarà restaurato.', 'Das Theater wird restauriert werden.'],
        ['weiblich', 'La mostra è stata aperta.', 'Die Ausstellung wurde eröffnet.'],
        ['Mehrzahl', 'I quadri sono stati scoperti.', 'Die Bilder wurden entdeckt.'],
      ],
    },
    kurz: 'Passiv: essere (oder venire) + Partizip, das sich anpasst: è stato costruito, è stata aperta. Wer es tut: da.',
    uebungen: [
      { art: 'luecke', de: 'Das Theater wurde 1820 gebaut.', satz: 'Il teatro è stato ___ nel 1820. (costruire)', loesung: 'costruito' },
      { art: 'luecke', de: 'Die Ausstellung wurde gestern eröffnet.', satz: 'La mostra è stata ___ ieri. (aprire)', loesung: 'aperta' },
      { art: 'kacheln', de: 'Das Bild wurde von einem Touristen entdeckt.', it: 'Il quadro è stato scoperto da un turista', extra: ['ha', 'scoperta'] },
      { art: 'luecke', de: 'Die Bilder werden restauriert.', satz: 'I quadri ___ restaurati. (essere)', loesung: 'sono' },
      { art: 'luecke', de: 'Das Museum wird um neun geöffnet.', satz: 'Il museo ___ aperto alle nove. (venire)', loesung: 'viene' },
      { art: 'kacheln', de: 'Die Straßen wurden geschlossen.', it: 'Le strade sono state chiuse', extra: ['chiusi', 'hanno'] },
      { art: 'luecke', de: 'Der Artikel wurde von vielen Leuten gelesen.', satz: "L'articolo è stato letto ___ molte persone.", loesung: 'da' },
      { art: 'kacheln', de: 'Das Theater wird nächstes Jahr wieder eröffnet.', it: "Il teatro sarà riaperto l'anno prossimo", extra: ['è', 'riaperta'] },
    ],
    zusatz: {
      tipp: [
        'Passiv = etwas WIRD gemacht. Auf Italienisch: essere + Partizip.',
        'Das Partizip passt sich an wie ein Adjektiv: il teatro → costruito, la mostra → aperta, i quadri → scoperti.',
        'Wurde gemacht (Vergangenheit): è stato / è stata + Partizip.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Das Haus wurde gebaut.', satz: 'La casa è stata ___.', optionen: ['costruita', 'costruito', 'costruiti'], warum: 'la casa ist weiblich → costruita' },
        { art: 'wahl', de: 'Das Museum wurde geschlossen.', satz: 'Il museo è stato ___.', optionen: ['chiuso', 'chiusa', 'chiudere'], warum: 'il museo ist männlich → chiuso' },
        { art: 'wahl', de: 'Die Bilder wurden verkauft.', satz: 'I quadri sono stati ___.', optionen: ['venduti', 'venduto', 'vendute'], warum: 'i quadri: Mehrzahl, männlich → venduti' },
        { art: 'wahl', de: 'Das Buch wurde von Anna geschrieben.', satz: 'Il libro è stato scritto ___ Anna.', optionen: ['da', 'di', 'a'], warum: 'von wem? → da' },
        { art: 'luecke', de: 'Der Brief wurde gelesen.', satz: 'La lettera è stata ___. (leggere)', loesung: 'letta', warum: 'la lettera ist weiblich; leggere → letto → letta' },
        { art: 'kacheln', de: 'Das Theater wurde restauriert.', it: 'Il teatro è stato restaurato', extra: ['ha', 'restaurata'], warum: 'il teatro → è stato … restaurato' },
      ],
    },
  },

  {
    id: 'periodo-reale', titel: 'Wenn es regnet …: Sätze mit se', stufe: 'B1',
    regel: [
      'Wenn etwas wirklich passieren kann: se + Gegenwart, danach Gegenwart: Se piove, restiamo a casa.',
      'Geht es um später, steht oft auf beiden Seiten die Zukunft: Se avrò tempo, verrò.',
      'Nach se kann auch ein Befehl kommen: Se hai fame, mangia qualcosa! Se non = wenn nicht; altrimenti = sonst.',
    ],
    tabelle: {
      kopf: ['se …', 'dann …'],
      zeilen: [
        ['Se piove,', 'restiamo a casa.'],
        ['Se fa bel tempo,', 'andiamo in montagna.'],
        ['Se avrò tempo,', 'ti chiamerò.'],
        ['Se hai fame,', 'mangia qualcosa!'],
        ['Se non partiamo subito,', 'arriveremo tardi.'],
      ],
    },
    kurz: 'Wenn es möglich ist: se + Gegenwart → Gegenwart (oder se + Zukunft → Zukunft, oder ein Befehl).',
    uebungen: [
      { art: 'luecke', de: 'Wenn es regnet, bleiben wir zu Hause.', satz: 'Se ___, restiamo a casa. (piovere)', loesung: 'piove' },
      { art: 'luecke', de: 'Wenn schönes Wetter ist, gehen wir in den Wald.', satz: 'Se fa bel tempo, ___ nel bosco. (andare, noi)', loesung: 'andiamo', auch: ['andremo'] },
      { art: 'kacheln', de: 'Wenn du Hunger hast, iss etwas!', it: 'Se hai fame, mangia qualcosa!', extra: ['mangi', 'avrai'] },
      { art: 'luecke', de: 'Wenn ich Zeit habe, rufe ich dich an.', satz: 'Se ___ tempo, ti chiamo. (avere)', loesung: 'ho' },
      { art: 'luecke', de: 'Wenn wir nicht sofort losgehen, kommen wir spät an.', satz: 'Se non partiamo subito, ___ tardi. (arrivare, noi)', loesung: 'arriviamo', auch: ['arriveremo'] },
      { art: 'kacheln', de: 'Wenn ein Gewitter kommt, gehen wir zur Hütte.', it: 'Se arriva un temporale, andiamo al rifugio', extra: ['vanno', 'alla'] },
      { art: 'luecke', de: 'Wenn ihr den Weg nehmt, seht ihr den Gipfel.', satz: 'Se prendete il sentiero, ___ la cima. (vedere)', loesung: 'vedete', auch: ['vedrete'] },
      { art: 'kacheln', de: 'Nimm den Regenschirm, wenn es regnet.', it: "Prendi l'ombrello se piove", extra: ['prende', 'piova'] },
    ],
    zusatz: {
      tipp: [
        'se heißt „wenn“ (oder „falls“).',
        'Kann es wirklich passieren? Dann einfach Gegenwart: Se piove, resto a casa.',
        'Danach geht auch ein Befehl: Se sei stanco, dormi!',
      ],
      uebungen: [
        { art: 'wahl', de: 'Wenn es regnet, bleibe ich zu Hause.', satz: 'Se ___, resto a casa.', optionen: ['piove', 'pioveva', 'piovesse'], warum: 'möglich → Gegenwart: piove' },
        { art: 'wahl', de: 'Wenn du Zeit hast, komm!', satz: 'Se hai tempo, ___!', optionen: ['vieni', 'venire', 'verresti'], warum: 'Befehl an „du“ → vieni' },
        { art: 'wahl', de: 'Wenn wir früh losfahren, kommen wir pünktlich an.', satz: 'Se partiamo presto, ___ in orario.', optionen: ['arriviamo', 'arriveremmo', 'arrivavamo'], warum: 'möglich → Gegenwart' },
        { art: 'wahl', de: 'Wenn, dann …', satz: '___ fa caldo, andiamo al mare.', optionen: ['Se', 'Che', 'Come'], warum: 'wenn (Bedingung) → se' },
        { art: 'luecke', de: 'Wenn ich Hunger habe, esse ich.', satz: 'Se ___ fame, mangio. (avere)', loesung: 'ho', warum: 'io → ho' },
        { art: 'kacheln', de: 'Wenn es kalt ist, bleiben wir drinnen.', it: 'Se fa freddo, restiamo dentro', extra: ['faceva', 'resteremmo'], warum: 'möglich → Gegenwart auf beiden Seiten' },
      ],
    },
  },

  {
    id: 'imperativo-pronomi', titel: 'Sag mir! – Sagen Sie mir!: dimmi, mi dica', stufe: 'B1',
    regel: [
      'Bei Befehlen an „du“ hängen die kleinen Wörter hinten an: Prendilo! (Nimm ihn!), Mandamelo! (Schick es mir!).',
      "Bei den kurzen Befehlen da', di', fa', sta', va' wird der erste Buchstabe verdoppelt: dammi (gib mir), dimmi (sag mir), fammi (lass mich / mach mir).",
      'Die höfliche Sie-Form (Lei) nimmt das congiuntivo, und die kleinen Wörter stehen davor: Mi dica! (Sagen Sie!), Lo controlli! (Prüfen Sie es!), Venga! (Kommen Sie!), Scusi!',
    ],
    tabelle: {
      kopf: ['', 'du (tu)', 'Sie (Lei)'],
      zeilen: [
        ['sagen', 'dimmi', 'mi dica'],
        ['geben', 'dammi', 'mi dia'],
        ['nehmen', 'prendilo', 'lo prenda'],
        ['schicken', 'mandamelo', 'me lo mandi'],
        ['prüfen', 'controllalo', 'lo controlli'],
        ['kommen', 'vieni', 'venga'],
      ],
    },
    kurz: 'du: Wörtchen hinten dran (dimmi, prendilo). Sie: congiuntivo, Wörtchen davor (mi dica, lo controlli).',
    uebungen: [
      { art: 'luecke', de: 'Sag mir die Wahrheit!', satz: '___ la verità!', loesung: 'dimmi' },
      { art: 'luecke', de: 'Sagen Sie (mir), bitte!', satz: 'Mi ___, prego! (dire)', loesung: 'dica' },
      { art: 'kacheln', de: 'Gib mir den Kassenbon!', it: 'Dammi lo scontrino', extra: ['mi', 'dai'] },
      { art: 'luecke', de: 'Prüfen Sie es bitte!', satz: 'Lo ___, per favore! (controllare)', loesung: 'controlli' },
      { art: 'kacheln', de: 'Kommen Sie her!', it: 'Venga qui', extra: ['vieni', 'viene'] },
      { art: 'luecke', de: 'Das Geld? Nimm es!', satz: 'I soldi? ___!', loesung: 'prendili' },
      { art: 'luecke', de: 'Geben Sie mir bitte den Kassenbon!', satz: 'Mi ___ lo scontrino, per favore! (dare)', loesung: 'dia' },
      { art: 'kacheln', de: 'Schick es mir morgen!', it: 'Mandamelo domani', extra: ['mandami', 'lo'] },
    ],
    zusatz: {
      tipp: [
        'Sprichst du jemanden mit du an? Dann hängt das kleine Wort hinten am Befehl: prendilo, dimmi.',
        'Sprichst du jemanden mit Sie an? Dann steht das kleine Wort vorne: lo prenda, mi dica.',
        'Sie-Form: -are-Verben enden auf -i (controlli), -ere/-ire-Verben auf -a (prenda).',
      ],
      uebungen: [
        { art: 'wahl', de: 'Sag mir!', satz: '___!', optionen: ['Dimmi', 'Mi dici', 'Dicimi'], warum: "di' + mi = dimmi (m verdoppelt)" },
        { art: 'wahl', de: 'Sagen Sie mir!', satz: 'Mi ___!', optionen: ['dica', 'dici', 'dice'], warum: 'Sie-Form → congiuntivo: dica' },
        { art: 'wahl', de: 'Nimm es (das Buch)!', satz: '___!', optionen: ['Prendilo', 'Lo prendi', 'Prendila'], warum: 'du-Befehl + lo hinten: prendilo' },
        { art: 'wahl', de: 'Nehmen Sie es (das Buch)!', satz: '___ prenda!', optionen: ['Lo', 'La', 'Gli'], warum: 'Sie-Form: lo vorne' },
        { art: 'luecke', de: 'Gib mir das Wasser!', satz: "___ l'acqua!", loesung: 'dammi', warum: "da' + mi = dammi" },
        { art: 'kacheln', de: 'Kommen Sie bitte!', it: 'Venga, per favore', extra: ['vieni', 'viene'], warum: 'Sie-Form von venire → venga' },
      ],
    },
  },
);

KAPITEL.push(
  // ==================== B2 ====================
  {
    id: 'congiuntivo-imperfetto', titel: 'Wenn ich reich wäre: se fossi, se avessi', stufe: 'B2',
    regel: [
      'Das congiuntivo imperfetto braucht man für Träume und unwirkliche Bedingungen: Se fossi ricca, comprerei una villa = Wenn ich reich wäre, würde ich eine Villa kaufen.',
      'Bildung: Stamm des imperfetto + -ssi, -ssi, -sse, -ssimo, -ste, -ssero: parlare → parlassi, avere → avessi, dormire → dormissi.',
      'Unregelmäßig: essere → fossi, fare → facessi, dire → dicessi, stare → stessi, dare → dessi.',
      'Es steht auch nach einem Hauptsatz in der Vergangenheit oder im condizionale: Pensavo che fosse vero. Vorrei che tu venissi. Und als Wunsch: Magari fosse vero!',
    ],
    tabelle: {
      kopf: ['Person', 'parlare', 'avere', 'essere'],
      zeilen: [
        ['(se) io', 'parlassi', 'avessi', 'fossi'],
        ['tu', 'parlassi', 'avessi', 'fossi'],
        ['lui / lei', 'parlasse', 'avesse', 'fosse'],
        ['noi', 'parlassimo', 'avessimo', 'fossimo'],
        ['voi', 'parlaste', 'aveste', 'foste'],
        ['loro', 'parlassero', 'avessero', 'fossero'],
      ],
    },
    kurz: 'Unwirklich jetzt: se + congiuntivo imperfetto (fossi, avessi, parlassi), dann condizionale (sarei, avrei, parlerei).',
    uebungen: [
      { art: 'luecke', de: 'Wenn ich reich wäre, würde ich reisen.', satz: 'Se ___ ricca, viaggerei. (essere)', loesung: 'fossi' },
      { art: 'luecke', de: 'Wenn ich Zeit hätte, würde ich kommen.', satz: 'Se ___ tempo, verrei. (avere)', loesung: 'avessi' },
      { art: 'kacheln', de: 'Wenn wir im Lotto gewinnen würden, würden wir eine Villa kaufen.', it: 'Se vincessimo alla lotteria, compreremmo una villa', extra: ['vinciamo', 'compriamo'] },
      { art: 'luecke', de: 'Ich dachte, dass es wahr sei.', satz: 'Pensavo che ___ vero. (essere)', loesung: 'fosse' },
      { art: 'luecke', de: 'Ich möchte, dass du bleibst.', satz: 'Vorrei che tu ___. (restare)', loesung: 'restassi' },
      { art: 'kacheln', de: 'Was würdest du machen, wenn du eine Million hättest?', it: 'Che cosa faresti se avessi un milione', extra: ['avresti', 'hai'] },
      { art: 'luecke', de: 'Wenn er Italienisch spräche, würde er alles verstehen.', satz: 'Se ___ italiano, capirebbe tutto. (parlare)', loesung: 'parlasse' },
      { art: 'kacheln', de: 'Wenn doch Sommer wäre!', it: 'Magari fosse estate', extra: ['è', 'sarebbe'] },
    ],
    zusatz: {
      tipp: [
        'Ist es ein Traum, also im Moment nicht wahr? Dann: se + congiuntivo imperfetto.',
        'Die zwei wichtigsten Formen: se fossi (wenn ich wäre), se avessi (wenn ich hätte).',
        'Im zweiten Teil steht das condizionale: sarei, avrei, farei, comprerei.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Wenn ich reich wäre …', satz: 'Se ___ ricco …', optionen: ['fossi', 'sono', 'sarei'], warum: 'nach se (unwirklich) → fossi' },
        { art: 'wahl', de: 'Wenn ich ein Boot hätte …', satz: 'Se ___ una barca …', optionen: ['avessi', 'avrei', 'ho'], warum: 'nach se (unwirklich) → avessi' },
        { art: 'wahl', de: '… würde ich aufs Meer fahren.', satz: '… ___ al mare.', optionen: ['andrei', 'andassi', 'vado'], warum: 'der zweite Teil → condizionale: andrei' },
        { art: 'wahl', de: 'Wenn sie Zeit hätte, würde sie kommen.', satz: 'Se ___ tempo, verrebbe.', optionen: ['avesse', 'avessi', 'avrebbe'], warum: 'lei → avesse' },
        { art: 'luecke', de: 'Wenn wir in Rom wären …', satz: 'Se ___ a Roma … (essere)', loesung: 'fossimo', warum: 'noi → fossimo' },
        { art: 'kacheln', de: 'An deiner Stelle würde ich gehen.', it: 'Se fossi in te, andrei', extra: ['sarei', 'vado'], warum: 'se fossi …, dann condizionale' },
      ],
    },
  },

  {
    id: 'condizionale-passato', titel: 'Ich hätte … sollen: avrei dovuto', stufe: 'B2',
    regel: [
      'Das condizionale passato sagt, was man getan hätte – aber nicht getan hat: Avrei preso il treno = Ich hätte den Zug genommen.',
      'Bildung: avrei / sarei + Partizip: avrei mangiato, sarei andata. Sehr häufig: avrei dovuto (hätte sollen), avrei potuto (hätte können), avrei voluto (hätte gewollt).',
      'In der Zeitung bedeutet es „soll … haben“ (nicht bestätigt): Il ladro sarebbe scappato in macchina. Und nach einer Vergangenheit steht es für die Zukunft: Ha detto che sarebbe venuto = Er sagte, er würde kommen.',
    ],
    tabelle: {
      kopf: ['Person', 'mit avere', 'mit essere'],
      zeilen: [
        ['io', 'avrei fatto', 'sarei partito / partita'],
        ['tu', 'avresti fatto', 'saresti partito / partita'],
        ['lui / lei', 'avrebbe fatto', 'sarebbe partito / partita'],
        ['noi', 'avremmo fatto', 'saremmo partiti / partite'],
        ['voi', 'avreste fatto', 'sareste partiti / partite'],
        ['loro', 'avrebbero fatto', 'sarebbero partiti / partite'],
      ],
    },
    kurz: 'Hätte / wäre: avrei / sarei + Partizip (avrei dovuto, sarei venuta). Zeitung: sarebbe scappato = soll geflohen sein.',
    uebungen: [
      { art: 'luecke', de: 'Ich hätte früher losfahren sollen.', satz: '___ dovuto partire prima. (avere)', loesung: 'avrei' },
      { art: 'luecke', de: 'Wir wären gern gekommen.', satz: 'Saremmo ___ volentieri. (venire)', loesung: 'venuti', auch: ['venute'] },
      { art: 'kacheln', de: 'Du hättest mich anrufen können.', it: 'Avresti potuto chiamarmi', extra: ['potresti', 'hai'] },
      { art: 'luecke', de: 'Sie hätte den Zug genommen.', satz: '___ preso il treno. (avere)', loesung: 'avrebbe' },
      { art: 'luecke', de: 'Er sagte, er würde am Montag kommen.', satz: 'Ha detto che ___ venuto lunedì. (essere)', loesung: 'sarebbe' },
      { art: 'kacheln', de: 'Ich hätte gern eine Pizza gegessen.', it: 'Avrei mangiato volentieri una pizza', extra: ['mangerei', 'ho'] },
      { art: 'luecke', de: 'Der Dieb soll durch das Fenster geflohen sein.', satz: 'Il ladro ___ scappato dalla finestra. (essere)', loesung: 'sarebbe' },
      { art: 'kacheln', de: 'Sie (Mehrzahl) hätten es wissen müssen.', it: 'Avrebbero dovuto saperlo', extra: ['dovrebbero', 'avevano'] },
    ],
    zusatz: {
      tipp: [
        'Es ist nicht passiert, aber es hätte passieren können? → condizionale passato.',
        'Erster Teil: avrei, avresti, avrebbe … (oder sarei, saresti, sarebbe bei Bewegung).',
        'Zweiter Teil: das Partizip wie im passato prossimo: fatto, preso, dovuto, andato.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich hätte es gemacht.', satz: "L'___ fatto.", optionen: ['avrei', 'avessi', 'ho'], warum: 'hätte → avrei' },
        { art: 'wahl', de: 'Du hättest kommen sollen.', satz: '___ dovuto venire.', optionen: ['Avresti', 'Avrebbe', 'Hai'], warum: 'tu → avresti' },
        { art: 'wahl', de: 'Sie wäre gegangen.', satz: '___ andata.', optionen: ['Sarebbe', 'Avrebbe', 'Sarei'], warum: 'andare → essere; lei → sarebbe' },
        { art: 'wahl', de: 'Wir hätten gegessen.', satz: 'Avremmo ___.', optionen: ['mangiato', 'mangiare', 'mangeremmo'], warum: 'Partizip: mangiato' },
        { art: 'luecke', de: 'Ich hätte gern geholfen.', satz: '___ aiutato volentieri. (avere)', loesung: 'avrei', warum: 'io → avrei' },
        { art: 'kacheln', de: 'Er hätte anrufen können.', it: 'Avrebbe potuto chiamare', extra: ['potrebbe', 'ha'], warum: 'lui → avrebbe + potuto' },
      ],
    },
  },

  {
    id: 'congiuntivo-passato', titel: 'Ich glaube, dass er gegangen ist: sia andato', stufe: 'B2',
    regel: [
      'Nach penso che, credo che, sembra che, spero che … steht für etwas Vergangenes das congiuntivo passato: Penso che sia partito = Ich glaube, dass er abgefahren ist.',
      'Bildung: abbia / sia + Partizip: abbia fatto, sia arrivata. Wie beim passato prossimo nehmen Bewegungsverben essere.',
      'Typisch in Nachrichten: Sembra che il ladro sia entrato dalla finestra. Non è sicuro che abbiano rubato tutto.',
    ],
    tabelle: {
      kopf: ['che …', 'mit avere', 'mit essere'],
      zeilen: [
        ['io', 'abbia visto', 'sia arrivato / arrivata'],
        ['tu', 'abbia visto', 'sia arrivato / arrivata'],
        ['lui / lei', 'abbia visto', 'sia arrivato / arrivata'],
        ['noi', 'abbiamo visto', 'siamo arrivati / arrivate'],
        ['voi', 'abbiate visto', 'siate arrivati / arrivate'],
        ['loro', 'abbiano visto', 'siano arrivati / arrivate'],
      ],
    },
    kurz: 'Vergangenes nach penso / credo / sembra che: abbia / sia + Partizip (abbia visto, sia partito).',
    uebungen: [
      { art: 'luecke', de: 'Ich glaube, dass er schon abgefahren ist.', satz: 'Credo che ___ già partito. (essere)', loesung: 'sia' },
      { art: 'luecke', de: 'Es scheint, dass sie den Schmuck gestohlen haben.', satz: 'Sembra che ___ rubato i gioielli. (avere)', loesung: 'abbiano' },
      { art: 'kacheln', de: 'Ich hoffe, dass du gut geschlafen hast.', it: 'Spero che tu abbia dormito bene', extra: ['hai', 'sia'] },
      { art: 'luecke', de: 'Ich denke, dass Anna angekommen ist.', satz: 'Penso che Anna sia ___. (arrivare)', loesung: 'arrivata' },
      { art: 'luecke', de: 'Es ist möglich, dass niemand etwas gesehen hat.', satz: 'È possibile che nessuno ___ visto niente. (avere)', loesung: 'abbia' },
      { art: 'kacheln', de: 'Ich glaube nicht, dass sie es verstanden haben.', it: "Non credo che l'abbiano capito", extra: ['hanno', 'abbia'] },
      { art: 'luecke', de: 'Wir sind froh, dass ihr gekommen seid.', satz: 'Siamo contenti che ___ venuti. (essere)', loesung: 'siate' },
      { art: 'kacheln', de: 'Es scheint, dass der Dieb geflohen ist.', it: 'Sembra che il ladro sia scappato', extra: ['è', 'abbia'] },
    ],
    zusatz: {
      tipp: [
        'Vorne steht penso che / credo che / sembra che, und es geht um VORHER? → congiuntivo passato.',
        'Statt ha / è sagt man abbia / sia: ha visto → abbia visto, è partito → sia partito.',
        'Mehrzahl: abbiano / siano.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Ich glaube, dass er gegessen hat.', satz: 'Credo che ___ mangiato.', optionen: ['abbia', 'ha', 'sia'], warum: 'ha → abbia (nach credo che)' },
        { art: 'wahl', de: 'Ich denke, dass sie abgefahren ist.', satz: 'Penso che ___ partita.', optionen: ['sia', 'è', 'abbia'], warum: 'partire → essere; è → sia' },
        { art: 'wahl', de: 'Es scheint, dass sie (Mehrzahl) gewonnen haben.', satz: 'Sembra che ___ vinto.', optionen: ['abbiano', 'hanno', 'abbia'], warum: 'Mehrzahl → abbiano' },
        { art: 'wahl', de: 'Ich hoffe, dass du angekommen bist.', satz: 'Spero che tu ___ arrivato.', optionen: ['sia', 'sei', 'abbia'], warum: 'arrivare → essere; tu → sia' },
        { art: 'luecke', de: 'Ich glaube, dass Marco es gesagt hat.', satz: "Credo che Marco l'___ detto. (avere)", loesung: 'abbia', warum: 'lui → abbia' },
        { art: 'kacheln', de: 'Ich glaube, dass sie geschlafen hat.', it: 'Credo che abbia dormito', extra: ['ha', 'sia'], warum: 'dormire → avere; ha → abbia' },
      ],
    },
  },

  {
    id: 'passato-remoto', titel: 'Es war einmal: das passato remoto', stufe: 'B2',
    regel: [
      'Das passato remoto erzählt Geschichte, Legenden und Literatur: Nel 1889 la regina visitò Napoli. Im Gespräch hört man es vor allem im Süden. Zum Lesen sollte man es erkennen.',
      'Regelmäßig: -are → -ai, -asti, -ò, -ammo, -aste, -arono (parlò). -ere → -ei, -esti, -é, -emmo, -este, -erono (credé). -ire → -ii, -isti, -ì, -immo, -iste, -irono (partì).',
      'Wichtige unregelmäßige (er / sie): essere → fu (Mehrzahl furono), avere → ebbe, fare → fece, dire → disse, nascere → nacque, venire → venne, vedere → vide, prendere → prese, decidere → decise.',
    ],
    tabelle: {
      kopf: ['Person', 'parlare', 'partire', 'essere'],
      zeilen: [
        ['io', 'parlai', 'partii', 'fui'],
        ['tu', 'parlasti', 'partisti', 'fosti'],
        ['lui / lei', 'parlò', 'partì', 'fu'],
        ['noi', 'parlammo', 'partimmo', 'fummo'],
        ['voi', 'parlaste', 'partiste', 'foste'],
        ['loro', 'parlarono', 'partirono', 'furono'],
      ],
    },
    kurz: 'Erzählzeit: parlò, partì, fu, ebbe, fece, disse – Mehrzahl parlarono, partirono, furono.',
    uebungen: [
      { art: 'luecke', de: 'Die Königin besuchte Neapel.', satz: 'La regina ___ Napoli. (visitare)', loesung: 'visitò' },
      { art: 'luecke', de: 'Es war ein großer Erfolg.', satz: '___ un grande successo. (essere)', loesung: 'fu' },
      { art: 'kacheln', de: 'Der Pizzabäcker machte eine neue Pizza.', it: 'Il pizzaiolo fece una pizza nuova', extra: ['fa', 'ha'] },
      { art: 'luecke', de: 'Die Touristen reisten am nächsten Tag ab.', satz: 'I turisti ___ il giorno dopo. (partire)', loesung: 'partirono' },
      { art: 'luecke', de: 'Der König sagte, dass die Pizza sehr gut war.', satz: 'Il re ___ che la pizza era buonissima. (dire)', loesung: 'disse' },
      { art: 'kacheln', de: 'Dante wurde in Florenz geboren.', it: 'Dante nacque a Firenze', extra: ['nato', 'è'] },
      { art: 'luecke', de: 'Sie (Mehrzahl) hatten viel Glück.', satz: '___ molta fortuna. (avere)', loesung: 'ebbero' },
      { art: 'kacheln', de: 'Die Pizza wurde berühmt.', it: 'La pizza diventò famosa', extra: ['diventa', 'è'] },
    ],
    zusatz: {
      tipp: [
        'Du musst das passato remoto vor allem ERKENNEN: Es heißt dasselbe wie das passato prossimo.',
        'Typische Endung bei er / sie: -ò (parlò, visitò) oder -ì (partì).',
        'Mehrzahl: -arono, -erono, -irono (parlarono, partirono).',
        'Merke die häufigsten: fu (war), ebbe (hatte), fece (machte), disse (sagte).',
      ],
      uebungen: [
        { art: 'wahl', de: 'Fu un giorno importante.', satz: 'Es ___ ein wichtiger Tag.', optionen: ['war', 'wird', 'ist'], warum: 'fu = era / è stato = war' },
        { art: 'wahl', de: 'Sie besuchte Rom.', satz: '___ Roma.', optionen: ['Visitò', 'Visita', 'Visiterà'], warum: 'Endung -ò = Vergangenheit (er / sie)' },
        { art: 'wahl', de: 'Er sagte, dass es spät war.', satz: '___ che era tardi.', optionen: ['Disse', 'Dice', 'Dirà'], warum: 'dire → disse' },
        { art: 'wahl', de: 'Sie (Mehrzahl) reisten am Morgen ab.', satz: '___ la mattina.', optionen: ['Partirono', 'Partì', 'Partono'], warum: 'Mehrzahl → -irono' },
        { art: 'luecke', de: 'Er machte eine Pizza.', satz: '___ una pizza. (fare)', loesung: 'fece', warum: 'fare → fece' },
        { art: 'kacheln', de: 'Die Königin hatte Hunger.', it: 'La regina ebbe fame', extra: ['ha', 'aveva'], warum: 'avere → ebbe' },
      ],
    },
  },

  {
    id: 'discorso-indiretto', titel: 'Sie sagte, dass …: indirekte Rede', stufe: 'B2',
    regel: [
      'In der indirekten Rede erzählt man, was jemand gesagt hat: «Sono stanca.» → Ha detto che era stanca.',
      'Steht das Einleitungsverb in der Vergangenheit (ha detto, ha spiegato), verschiebt sich die Zeit: Gegenwart → imperfetto, passato prossimo → trapassato, Zukunft → condizionale passato.',
      'Auch Personen und Orte ändern sich: io → lui / lei, mio → suo, qui → lì, oggi → quel giorno, domani → il giorno dopo. Befehle werden zu di + Grundform: «Cucina!» → Gli ha detto di cucinare.',
    ],
    tabelle: {
      kopf: ['Direkt', 'Indirekt (ha detto che …)'],
      zeilen: [
        ['«Sono stanca.»', 'era stanca'],
        ['«Ho mangiato.»', 'aveva mangiato'],
        ['«Verrò domani.»', 'sarebbe venuta il giorno dopo'],
        ['«Il mio ristorante è qui.»', 'il suo ristorante era lì'],
        ['«Cucina!»', 'gli ha detto di cucinare'],
        ['«Hai fame?»', 'ha chiesto se avevo fame'],
      ],
    },
    kurz: 'Ha detto che …: è → era, ho fatto → aveva fatto, farò → avrebbe fatto; mio → suo, qui → lì.',
    uebungen: [
      { art: 'luecke', de: '„Ich bin müde.“ → Sie sagte, sie sei müde.', satz: 'Ha detto che ___ stanca. (essere)', loesung: 'era' },
      { art: 'luecke', de: '„Ich habe gegessen.“ → Er sagte, er habe schon gegessen.', satz: 'Ha detto che ___ già mangiato. (avere)', loesung: 'aveva' },
      { art: 'kacheln', de: '„Ich komme morgen.“ → Sie sagte, sie würde am nächsten Tag kommen.', it: 'Ha detto che sarebbe venuta il giorno dopo', extra: ['verrà', 'domani'] },
      { art: 'luecke', de: '„Mein Restaurant ist klein.“ → Sie sagte, ihr Restaurant sei klein.', satz: 'Ha detto che il ___ ristorante era piccolo.', loesung: 'suo' },
      { art: 'luecke', de: '„Koch!“ → Sie sagte ihm, er solle kochen.', satz: 'Gli ha detto ___ cucinare.', loesung: 'di' },
      { art: 'kacheln', de: 'Er erklärte, dass er dort arbeite.', it: 'Ha spiegato che lavorava lì', extra: ['qui', 'lavora'] },
      { art: 'luecke', de: '„Wir werden ein Restaurant eröffnen.“ → Sie sagten, sie würden eins eröffnen.', satz: 'Hanno detto che ___ aperto un ristorante. (avere)', loesung: 'avrebbero' },
      { art: 'kacheln', de: 'Sie fragte, ob ich Hunger hätte.', it: 'Ha chiesto se avevo fame', extra: ['ho', 'che'] },
    ],
    zusatz: {
      tipp: [
        'Schritt 1: Was hat die Person GENAU gesagt? Zum Beispiel: «Sono stanca.»',
        'Schritt 2: Eine Zeit zurück: sono → ero / era, ho mangiato → avevo / aveva mangiato.',
        'Schritt 3: Personen anpassen: io → lei, mio → suo, qui → lì.',
      ],
      uebungen: [
        { art: 'wahl', de: '„Ich bin glücklich.“ → Sie sagte, dass sie glücklich sei.', satz: 'Ha detto che ___ felice.', optionen: ['era', 'sono', 'sarà'], warum: 'è (Gegenwart) → era' },
        { art: 'wahl', de: '„Ich wohne hier.“ → Er sagte, er wohne dort.', satz: 'Ha detto che abitava ___.', optionen: ['lì', 'qui', 'qua'], warum: 'qui → lì' },
        { art: 'wahl', de: '„Mein Bruder ist Koch.“ → Sie sagte, ihr Bruder sei Koch.', satz: 'Ha detto che ___ fratello era cuoco.', optionen: ['suo', 'mio', 'tuo'], warum: 'mio → suo' },
        { art: 'wahl', de: '„Ich habe gelesen.“ → Er sagte, er habe gelesen.', satz: 'Ha detto che ___ letto.', optionen: ['aveva', 'ha', 'avrà'], warum: 'ho letto → aveva letto' },
        { art: 'luecke', de: '„Komm!“ → Sie sagte mir, ich solle kommen.', satz: 'Mi ha detto ___ venire.', loesung: 'di', warum: 'Befehl → di + Grundform' },
        { art: 'kacheln', de: 'Er sagte, er sei müde.', it: 'Ha detto che era stanco', extra: ['è', 'sono'], warum: 'è → era' },
      ],
    },
  },

  {
    id: 'periodo-irreale', titel: 'Hätte ich es gewusst …: se avessi saputo', stufe: 'B2',
    regel: [
      'Für die Vergangenheit, die man nicht mehr ändern kann: se + congiuntivo trapassato, danach condizionale passato: Se l’avessi saputo, sarei venuta = Wenn ich es gewusst hätte, wäre ich gekommen.',
      'congiuntivo trapassato: avessi / fossi + Partizip: avessi preso, fossi partita.',
      'Überblick: möglich – Se ho tempo, vengo. Unwirklich jetzt – Se avessi tempo, verrei. Unwirklich vorbei – Se avessi avuto tempo, sarei venuta.',
    ],
    tabelle: {
      kopf: ['Art', 'se …', 'dann …'],
      zeilen: [
        ['möglich', 'Se ho tempo,', 'vengo.'],
        ['unwirklich jetzt', 'Se avessi tempo,', 'verrei.'],
        ['unwirklich vorbei', 'Se avessi avuto tempo,', 'sarei venuta.'],
        ['mit essere', 'Se fossi partita prima,', 'avrei preso il treno.'],
      ],
    },
    kurz: 'Vorbei und nicht mehr zu ändern: se avessi / fossi + Partizip, dann avrei / sarei + Partizip.',
    uebungen: [
      { art: 'luecke', de: 'Wenn ich es gewusst hätte, wäre ich gekommen.', satz: "Se l'___ saputo, sarei venuta. (avere)", loesung: 'avessi' },
      { art: 'luecke', de: 'Wenn wir früher losgefahren wären, wären wir nicht zu spät gekommen.', satz: 'Se ___ partiti prima, non saremmo arrivati tardi. (essere)', loesung: 'fossimo' },
      { art: 'kacheln', de: 'Wenn du angerufen hättest, hätte ich dir geholfen.', it: 'Se avessi chiamato, ti avrei aiutato', extra: ['avresti', 'hai'] },
      { art: 'luecke', de: 'Wenn sie mutiger gewesen wäre, hätte sie ihn geheiratet.', satz: "Se fosse stata più coraggiosa, l'___ sposato. (avere)", loesung: 'avrebbe' },
      { art: 'luecke', de: 'Wenn ich nicht nach Bologna gegangen wäre, hätte ich Marco nicht kennengelernt.', satz: 'Se non fossi andata a Bologna, non ___ conosciuto Marco. (avere)', loesung: 'avrei' },
      { art: 'kacheln', de: 'Hätte ich das nur gewusst!', it: "Se l'avessi saputo", extra: ['avrei', 'sapessi'] },
      { art: 'luecke', de: 'Wenn es geregnet hätte, wären wir zu Hause geblieben.', satz: 'Se fosse ___, saremmo restati a casa. (piovere)', loesung: 'piovuto' },
      { art: 'kacheln', de: 'Was hättest du gemacht?', it: 'Che cosa avresti fatto', extra: ['faresti', 'avessi'] },
    ],
    zusatz: {
      tipp: [
        'Ist es VORBEI und nicht mehr zu ändern? Dann braucht es zwei zusammengesetzte Formen.',
        'Nach se: avessi / fossi + Partizip (se avessi saputo = hätte ich gewusst).',
        'Im zweiten Teil: avrei / sarei + Partizip (sarei venuta = wäre ich gekommen).',
      ],
      uebungen: [
        { art: 'wahl', de: 'Wenn ich es gewusst hätte …', satz: "Se l'___ saputo …", optionen: ['avessi', 'avrei', 'ho'], warum: 'nach se → avessi' },
        { art: 'wahl', de: '… wäre ich gekommen.', satz: '… ___ venuta.', optionen: ['sarei', 'fossi', 'sono'], warum: 'zweiter Teil → sarei' },
        { art: 'wahl', de: 'Wenn du gekommen wärst …', satz: 'Se ___ venuto …', optionen: ['fossi', 'saresti', 'sei'], warum: 'venire → essere; nach se → fossi' },
        { art: 'wahl', de: '… hätten wir gegessen.', satz: '… ___ mangiato.', optionen: ['avremmo', 'avessimo', 'abbiamo'], warum: 'zweiter Teil → avremmo' },
        { art: 'luecke', de: 'Wenn sie angerufen hätte, hätte ich geantwortet.', satz: 'Se avesse chiamato, ___ risposto. (avere)', loesung: 'avrei', warum: 'zweiter Teil, io → avrei' },
        { art: 'kacheln', de: 'Wenn ich gelernt hätte …', it: 'Se avessi studiato', extra: ['avrei', 'ho'], warum: 'nach se → avessi + Partizip' },
      ],
    },
  },

  {
    id: 'congiunzioni', titel: 'Obwohl, damit, bevor: benché, affinché, prima che', stufe: 'B2',
    regel: [
      'Nach einigen Bindewörtern steht immer das congiuntivo: benché / sebbene (obwohl), affinché (damit), purché (vorausgesetzt, dass), a meno che (es sei denn), prima che (bevor), senza che (ohne dass).',
      'Beispiele: Benché lavori da casa, Anna è molto occupata. Ti do le chiavi affinché tu possa entrare.',
      'Ist die Person in beiden Teilen gleich, nimmt man oft die Grundform: prima di partire (bevor ich abfahre), senza dire niente (ohne etwas zu sagen).',
    ],
    tabelle: {
      kopf: ['Wort', 'Bedeutung', 'Beispiel'],
      zeilen: [
        ['benché', 'obwohl', 'Benché piova, esco.'],
        ['affinché', 'damit', 'Parlo piano affinché tu capisca.'],
        ['purché', 'vorausgesetzt, dass', 'Vengo, purché sia presto.'],
        ['a meno che', 'es sei denn', 'Esco, a meno che non piova.'],
        ['prima che', 'bevor', 'Parto prima che arrivi Marco.'],
        ['prima di', 'bevor (gleiche Person)', 'Prima di uscire, bevo un caffè.'],
      ],
    },
    kurz: 'Nach benché, affinché, purché, a meno che, prima che, senza che: immer congiuntivo (piova, capisca, sia).',
    uebungen: [
      { art: 'luecke', de: 'Obwohl es regnet, gehe ich hinaus.', satz: 'Benché ___, esco. (piovere)', loesung: 'piova' },
      { art: 'luecke', de: 'Ich spreche langsam, damit du verstehst.', satz: 'Parlo piano affinché tu ___. (capire)', loesung: 'capisca' },
      { art: 'kacheln', de: 'Ich komme, vorausgesetzt, dass du da bist.', it: 'Vengo purché tu ci sia', extra: ['sei', 'sarai'] },
      { art: 'luecke', de: 'Wir fahren ab, bevor Marco ankommt.', satz: 'Partiamo prima che Marco ___. (arrivare)', loesung: 'arrivi' },
      { art: 'luecke', de: 'Obwohl sie von zu Hause arbeitet, ist sie sehr beschäftigt.', satz: 'Benché ___ da casa, è molto occupata. (lavorare)', loesung: 'lavori' },
      { art: 'kacheln', de: 'Ich gehe aus, es sei denn, es regnet.', it: 'Esco a meno che non piova', extra: ['piove', 'senza'] },
      { art: 'luecke', de: 'Die Firma erlaubt Arbeit von zu Hause, damit die Angestellten Zeit sparen.', satz: "L'azienda permette il lavoro da casa affinché i dipendenti ___ tempo. (risparmiare)", loesung: 'risparmino' },
      { art: 'kacheln', de: 'Bevor ich hinausgehe, trinke ich einen Kaffee.', it: 'Prima di uscire bevo un caffè', extra: ['che', 'esca'] },
    ],
    zusatz: {
      tipp: [
        'Siehst du benché, affinché, purché oder prima che? Dann kommt das congiuntivo.',
        'congiuntivo: -are → -i (lavori, arrivi), -ere/-ire → -a (piova, capisca).',
        'Gleiche Person in beiden Teilen? Dann prima di + Grundform: prima di partire.',
      ],
      uebungen: [
        { art: 'wahl', de: 'Obwohl es kalt ist, gehe ich hinaus.', satz: 'Benché ___ freddo, esco.', optionen: ['faccia', 'fa', 'farà'], warum: 'nach benché → congiuntivo: faccia' },
        { art: 'wahl', de: 'Ich erkläre es, damit du verstehst.', satz: 'Lo spiego affinché tu ___.', optionen: ['capisca', 'capisci', 'capirai'], warum: 'nach affinché → congiuntivo' },
        { art: 'wahl', de: 'Bevor ich gehe, esse ich.', satz: 'Prima ___ uscire, mangio.', optionen: ['di', 'che', 'a'], warum: 'gleiche Person → prima di + Grundform' },
        { art: 'wahl', de: 'Bevor du gehst, ruf mich an.', satz: 'Prima che tu ___, chiamami.', optionen: ['esca', 'esci', 'uscire'], warum: 'andere Person → prima che + congiuntivo' },
        { art: 'luecke', de: 'Obwohl er müde ist, arbeitet er.', satz: 'Benché ___ stanco, lavora. (essere)', loesung: 'sia', warum: 'essere → sia' },
        { art: 'kacheln', de: 'Obwohl es regnet, gehe ich spazieren.', it: 'Benché piova, faccio una passeggiata', extra: ['piove', 'fa'], warum: 'nach benché → piova' },
      ],
    },
  },

  {
    id: 'relativi', titel: 'Welcher, wer, das was: il quale, chi, ciò che', stufe: 'B2',
    regel: [
      'il quale / la quale / i quali / le quali kann che oder cui ersetzen und klingt förmlicher. Es zeigt Geschlecht und Zahl: la regione nella quale vivo = die Region, in der ich lebe.',
      'chi = wer, derjenige, der: Chi va piano va sano e va lontano (Sprichwort: Wer langsam geht, kommt gesund und weit).',
      'ciò che (oder quello che) = das, was: Ciò che conta è la qualità. Und il cui = dessen / deren: Genova, il cui pesto è famoso …',
    ],
    tabelle: {
      kopf: ['Italienisch', 'Deutsch'],
      zeilen: [
        ['la ricetta che uso', 'das Rezept, das ich benutze'],
        ['la regione in cui / nella quale vivo', 'die Region, in der ich lebe'],
        ['i pinoli dei quali parliamo', 'die Pinienkerne, von denen wir sprechen'],
        ['chi cucina', 'wer kocht'],
        ['ciò che conta', 'das, was zählt'],
        ['Genova, il cui porto …', 'Genua, dessen Hafen …'],
      ],
    },
    kurz: 'il quale / la quale / i quali / le quali = der, die (förmlich). chi = wer. ciò che = das, was. il cui = dessen.',
    uebungen: [
      { art: 'luecke', de: 'Die Region, in der ich wohne, heißt Ligurien.', satz: 'La regione nella ___ abito si chiama Liguria.', loesung: 'quale' },
      { art: 'luecke', de: 'Wer kocht, spült nicht ab.', satz: '___ cucina non lava i piatti.', loesung: 'chi' },
      { art: 'kacheln', de: 'Das, was zählt, ist die Qualität.', it: 'Ciò che conta è la qualità', extra: ['chi', 'cui'] },
      { art: 'luecke', de: 'Die Freunde, mit denen ich koche, sind aus Genua.', satz: 'Gli amici con i ___ cucino sono di Genova.', loesung: 'quali' },
      { art: 'luecke', de: 'Ich verstehe nicht, was du sagst.', satz: 'Non capisco ___ che dici.', loesung: 'ciò', auch: ['quello'] },
      { art: 'kacheln', de: 'Genua, dessen Pesto berühmt ist, liegt am Meer.', it: 'Genova, il cui pesto è famoso, è sul mare', extra: ['che', 'quale'] },
      { art: 'luecke', de: 'Die Pinienkerne, von denen wir sprechen, sind teuer.', satz: 'I pinoli dei ___ parliamo sono cari.', loesung: 'quali' },
      { art: 'kacheln', de: 'Wer Pesto liebt, muss nach Ligurien fahren.', it: 'Chi ama il pesto deve andare in Liguria', extra: ['che', 'cui'] },
    ],
    zusatz: {
      tipp: [
        'che und cui kennst du schon. il quale bedeutet dasselbe, nur förmlicher.',
        'il quale richtet sich nach dem Wort davor: la regione → la quale, gli amici → i quali.',
        'chi = wer (ohne Wort davor). ciò che = das, was.',
      ],
      uebungen: [
        { art: 'wahl', de: 'die Stadt, in der ich lebe', satz: 'la città nella ___ vivo', optionen: ['quale', 'quali', 'chi'], warum: 'la città: Einzahl → la quale (nella quale)' },
        { art: 'wahl', de: 'die Freunde, mit denen ich reise', satz: 'gli amici con i ___ viaggio', optionen: ['quali', 'quale', 'cui'], warum: 'gli amici: Mehrzahl → i quali' },
        { art: 'wahl', de: 'Wer liest, lernt viel.', satz: '___ legge impara molto.', optionen: ['Chi', 'Che', 'Cui'], warum: 'wer → chi' },
        { art: 'wahl', de: 'Das, was ich will, ist Ruhe.', satz: '___ che voglio è la tranquillità.', optionen: ['Ciò', 'Chi', 'Quale'], warum: 'das, was → ciò che' },
        { art: 'luecke', de: 'Ich mache, was ich will.', satz: 'Faccio ___ che voglio.', loesung: 'ciò', auch: ['quello'], warum: 'das, was → ciò che (oder quello che)' },
        { art: 'kacheln', de: 'Wer kocht, isst gut.', it: 'Chi cucina mangia bene', extra: ['che', 'cui'], warum: 'wer → chi' },
      ],
    },
  },
);
