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
