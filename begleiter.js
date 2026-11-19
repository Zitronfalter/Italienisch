// Begleiter: kurze Notizen (Tipps, Ende-Nachrichten). Limo, die Zitrone, ist seit dem Look „Reiseskizze“ (18.11.2026)
// nicht mehr zu sehen – die Texte bleiben. Die Zeichnung liegt weiter in limo.js, falls Limo zurückkommt.
//
// Regeln: freundlich, ruhig, nie traurig, kein Druck, keine Punkte.

const BEGLEITER_TIPPS = [
  '„Prego“ heißt nicht nur „bitte“ – man sagt es auch, wenn man jemandem den Vortritt lässt.',
  '„Un caffè“ ist in Italien ein Espresso.',
  'Im Café trinkt man oft im Stehen „al banco“ – an der Theke ist es meist günstiger.',
  'Wörter auf -zione sind weiblich: la stazione, la colazione.',
  'Wörter auf -ore sind meist männlich: il colore, il dolore.',
  '„Ciao“ sagst du zu Leuten, die du duzt. Sonst lieber „buongiorno“ oder „arrivederci“.',
  'In Rezepten heißt „q.b.“ quanto basta – so viel wie nötig.',
  '„Al dente“ heißt wörtlich „für den Zahn“: Die Nudeln haben noch Biss.',
  'Doppelte Konsonanten spricht man länger: „pala“ (Schaufel), „palla“ (Ball).',
  '„Magari!“ heißt so viel wie „Schön wär’s!“',
  '„Allora …“ ist ein beliebtes Füllwort – wie unser „also …“.',
  'Das „h“ ist stumm: ho, hai, ha spricht man „o, ai, a“.',
  '„che“ spricht man „ke“, „ci“ wie „tschi“.',
  'Ein Akzent macht den Unterschied: e = und, è = ist.',
  '„Il conto, per favore!“ – so fragst du nach der Rechnung.',
  '„Scusi“ ist höflich (Sie), „scusa“ ist für Freunde (du).',
  '„Buonasera“ hört man oft schon am Nachmittag.',
  'Tippe beim Lesen auf ein Wort – so lernst du Wörter aus echten Texten.',
  // ab hier neu (19.11.2026) – neue Tipps immer hinten anhängen
  '„Buon appetito!“ wünscht man vor dem Essen. Die Antwort: „Grazie, altrettanto!“',
  '„Cin cin!“ sagt man beim Anstoßen.',
  'Cappuccino trinkt man in Italien meist nur zum Frühstück.',
  '„Coperto“ auf der Rechnung ist ein kleiner Betrag für Brot und Gedeck.',
  '„Mi piace“ heißt „mir gefällt“. Bei mehreren Dingen: „mi piacciono“.',
  'Eine Frage erkennt man oft nur an der Stimme: „Parli italiano?“ geht am Ende nach oben.',
  '„Lei“ ist die höfliche Anrede – wie unser „Sie“.',
  'Betont wird meist die vorletzte Silbe: a-MI-co, po-mo-DO-ro.',
  '„gli“ spricht man fast wie „lj“: famiglia, figlio.',
  '„gn“ klingt wie „nj“: gnocchi, lasagna, bagno.',
  '„sc“ vor e oder i klingt wie „sch“: pesce, scienza.',
  '„ch“ ist immer ein „k“: chiesa, chiave, perché.',
  '„Va bene“ heißt „in Ordnung“ – man hört es ständig.',
  '„Boh!“ mit Schulterzucken heißt „Keine Ahnung“.',
  '„Dai!“ heißt „Komm schon!“ oder „Ach was!“ – je nach Ton.',
  '„Un attimo“ heißt „einen Moment“.',
  'Uhrzeit: „Sono le tre“ (es ist drei), aber „è l’una“ (es ist eins).',
  'Wochentage und Monate schreibt man klein: lunedì, gennaio.',
  '„Il gelato“ ist Eis zum Essen, „il ghiaccio“ ist Eis zum Kühlen.',
  '„Camera“ ist ein Zimmer. Die Kamera heißt „la macchina fotografica“.',
  'Vorsicht am Wasserhahn: „caldo“ heißt warm, kalt ist „freddo“.',
  '„Burro“ ist Butter, kein Esel – der heißt „asino“.',
  '„Morbido“ heißt einfach weich.',
  '„Parenti“ sind Verwandte. Die Eltern heißen „genitori“.',
  '„Salire“ heißt einsteigen, „scendere“ aussteigen.',
  '„Pranzo“ ist das Mittagessen, „cena“ das Abendessen.',
  'Viele Läden machen mittags Pause – „la pausa pranzo“.',
  '„Un etto“ sind 100 Gramm – so kauft man Schinken und Käse an der Theke.',
  '„Piano piano“ heißt „langsam, Schritt für Schritt“ – so lernt man auch.',
  'Laut mitsprechen hilft: Gesprochene Wörter merkt man sich leichter.',
  'Wörter, die noch nicht sitzen, kommen von selbst wieder. Kein Grund zur Eile.',
  'Kurz und oft lernen bleibt besser hängen als selten und lang.',
  '„In bocca al lupo!“ wünscht Glück. Die Antwort: „Crepi!“',
  '„Auguri!“ passt zum Geburtstag, zu Weihnachten und zu allen guten Wünschen.',
  'Mehrzahl: -o wird -i (libro, libri), -a wird -e (casa, case).',
  'Wörter mit Akzent am Ende bleiben in der Mehrzahl gleich: la città, le città.',
  '„Il problema“ ist männlich, obwohl es auf -a endet – genau wie „il tema“.',
  '„La mano“ ist weiblich, obwohl es auf -o endet. Mehrzahl: le mani.',
  '„Ecco!“ heißt „Hier, bitte!“ oder „Da ist es!“',
  '„Che bello!“ – „Wie schön!“ passt fast immer.',
  '„Permesso?“ fragt man, wenn man eine Wohnung betritt oder sich vorbeidrängelt.',
  '„Vorrei …“ heißt „Ich hätte gern …“ – höflich beim Bestellen.',
  'Am 15. August ist Ferragosto – dann ist halb Italien am Meer.',
  'Die „passeggiata“ ist der Abendspaziergang durch den Ort – sehen und gesehen werden.',
  '„Io“, „tu“ & Co. lässt man meist weg: „Sono Nicole“ statt „Io sono Nicole“.',
  '„Anche“ heißt „auch“ – „anch’io“ heißt „ich auch“.',
  '„Di niente“ oder „prego“ – so antwortet man auf „grazie“.',
  '„Prendo …“ heißt „Ich nehme …“ – praktisch beim Bestellen.',
  '„Basta così, grazie“ heißt „Das reicht, danke“ – praktisch an der Theke.',
  '„Ci vediamo!“ heißt „Wir sehen uns!“ – ein netter Abschied.',
];

const Begleiter = (() => {
  // ---------- Zustand ----------

  function zustand() {
    const f = Speicher.daten.fortschritt;
    f.begleiter = f.begleiter || { gefeiert: [], tipp: 0, zuletzt: null };
    return f.begleiter;
  }

  // ---------- Meilensteine (nur echter Fortschritt) ----------

  function meilensteine() {
    const liste = [];
    const sicher = Vokabeln.anzahlSicher();
    for (const n of [10, 25, 50, 100, 200, 300, 500]) {
      if (sicher >= n) liste.push({ id: 'woerter-' + n, text: `Schon ${n} Wörter sitzen bei dir. Bravissima!` });
    }
    const texte = Lesen.anzahlVerstanden();
    if (texte >= 1) liste.push({ id: 'texte-1', text: 'Dein erster Text auf Italienisch – verstanden!' });
    if (texte >= 5) liste.push({ id: 'texte-5', text: 'Fünf Texte verstanden. Du liest richtig Italienisch!' });
    if (texte >= LESETEXTE.length) liste.push({ id: 'texte-alle', text: 'Alle Lesetexte verstanden. Probier jetzt eigene Texte aus!' });
    const kap = Grammatik.anzahlGeuebt();
    if (kap >= 1) liste.push({ id: 'grammatik-1', text: 'Erstes Grammatik-Kapitel geübt. Regeln statt Raten!' });
    if (kap >= KAPITEL.length) liste.push({ id: 'grammatik-alle', text: 'Alle Grammatik-Kapitel geübt. Complimenti!' });
    const t = Niveautest.letzter();
    if (t && t.niveau) liste.push({ id: 'niveau-' + t.niveau, text: `Niveau ${t.niveau} erreicht. Das ist echter Fortschritt!` });
    return liste;
  }

  // ---------- Was sagt der Begleiter auf der Startseite? ----------

  function startNachricht() {
    const z = zustand();
    const neu = meilensteine().find((m) => !z.gefeiert.includes(m.id));
    if (neu) {
      z.gefeiert.push(neu.id);
      Speicher.speichern();
      return { stimmung: 'jubelt', text: neu.text };
    }
    const heute = Vokabeln.heute();
    if (z.zuletzt !== heute) {
      z.zuletzt = heute;
      Speicher.speichern();
      return { stimmung: 'winkt', text: 'Schön, dass du da bist! Andiamo? (Los geht’s?)' };
    }
    return tipp();
  }

  function tipp(weiter = false) {
    const z = zustand();
    if (weiter) { z.tipp = (z.tipp + 1) % BEGLEITER_TIPPS.length; Speicher.speichern(); }
    return { stimmung: weiter ? 'denkt' : 'liest', text: 'Tipp: ' + BEGLEITER_TIPPS[z.tipp % BEGLEITER_TIPPS.length] };
  }

  // Nach der Vokabel-Runde
  function endeNachricht(geuebt, aufAnhieb) {
    if (!geuebt) return { stimmung: 'ruhig', text: 'Heute ist nichts fällig. Ein Text passt trotzdem immer.' };
    if (aufAnhieb === geuebt) return { stimmung: 'jubelt', text: 'Alles auf Anhieb gewusst. Perfetto!' };
    if (aufAnhieb / geuebt >= 0.6) return { stimmung: 'freut', text: 'Bravo! Die meisten Wörter saßen schon.' };
    return { stimmung: 'mut', text: 'Gut gemacht. Was noch nicht saß, kommt morgen wieder – ganz von selbst.' };
  }

  // Zeigt die Notiz in einem Element: { stimmung, text } (ohne Bild)
  function zeigen(element, nachricht) {
    const bild = element.querySelector('.begleiter-bild');
    if (bild) bild.innerHTML = '';
    element.querySelector('.begleiter-text').textContent = nachricht.text;
    element.dataset.stimmung = nachricht.stimmung;
  }

  // Seite „Frei üben“: die Notiz lädt ein – ohne Druck, wechselt jedes Mal
  const UEBEN_TEXTE = [
    { stimmung: 'liest', text: 'Worauf hast du Lust? Alles hier zählt – auch nur fünf Minuten.' },
    { stimmung: 'hoert', text: 'Hören trainiert das Ohr. Probier mal „Hören & Üben“!' },
    { stimmung: 'denkt', text: 'Eine Regel nicht ganz klar? Bei Grammatik gibt’s Tipps in kleinen Schritten.' },
    { stimmung: 'freut', text: 'Ein Rezept auf Italienisch lesen – und danach kochen? Buon appetito!' },
    { stimmung: 'liest', text: 'Wort vergessen? Im Wörterbuch findest du es – auch ohne Internet.' },
  ];
  let uebenNr = Math.floor(Math.random() * UEBEN_TEXTE.length);
  function uebenNachricht() {
    uebenNr = (uebenNr + 1) % UEBEN_TEXTE.length;
    return UEBEN_TEXTE[uebenNr];
  }

  // Eine Lektion ist geschafft
  function lektionGeschafft(titel) {
    return { stimmung: 'jubelt', text: `Lektion „${titel}“ geschafft! Ottimo lavoro. Die nächste wartet, wann du magst.` };
  }

  return { startNachricht, endeNachricht, tipp, zeigen, lektionGeschafft, uebenNachricht };
})();
