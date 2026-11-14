// Begleiter: kleiner Roboter mit Sprechblase
//
// Regeln: freundlich, ruhig, nie traurig, kein Druck, keine Punkte.
// Er begrüßt, gibt Tipps und freut sich über echten Fortschritt (Meilensteine).
//
// BILDER: Solange hier null steht, zeichnet die App einen Platzhalter-Roboter.
// Wenn die Zeichnungen da sind, z. B. 'begleiter/winkt.png' eintragen
// (Datei auch in sw.js bei DATEIEN aufnehmen).

const BEGLEITER_BILDER = {
  winkt: null,
  freut: null,
  denkt: null,
  ruhig: null,
  ueberrascht: null,
  liest: null,
  jubelt: null,
};

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
    return { stimmung: 'ruhig', text: 'Gut gemacht. Was noch nicht saß, kommt morgen wieder – ganz von selbst.' };
  }

  // ---------- Bild ----------

  // Platzhalter-Roboter als SVG. Farben kommen aus style.css (--roboter-…).
  function platzhalter(stimmung) {
    const augen = {
      winkt: '<path d="M36 44 q5 -6 10 0 M54 44 q5 -6 10 0"/>',
      freut: '<path d="M36 44 q5 -6 10 0 M54 44 q5 -6 10 0"/>',
      jubelt: '<path d="M36 44 q5 -7 10 0 M54 44 q5 -7 10 0"/>',
      denkt: '<circle cx="43" cy="40" r="3" class="voll"/><circle cx="61" cy="40" r="3" class="voll"/>',
      ruhig: '<path d="M36 41 q5 5 10 0 M54 41 q5 5 10 0"/>',
      ueberrascht: '<circle cx="41" cy="42" r="4.5"/><circle cx="59" cy="42" r="4.5"/>',
      liest: '<path d="M36 44 h10 M54 44 h10"/>',
    }[stimmung] || '';
    const mund = { jubelt: '<path d="M45 50 q5 5 10 0"/>', ueberrascht: '<circle cx="50" cy="51" r="2"/>' }[stimmung] || '';
    const arme = {
      winkt: '<path d="M33 74 q-8 4 -9 12 M67 72 q8 -8 10 -18"/>',
      jubelt: '<path d="M33 72 q-8 -8 -10 -18 M67 72 q8 -8 10 -18"/>',
      denkt: '<path d="M33 74 q-8 4 -9 12 M67 74 q2 -6 -6 -10"/>',
      liest: '<path d="M33 74 q4 8 10 8 M67 74 q-4 8 -10 8"/>',
    }[stimmung] || '<path d="M33 74 q-8 4 -9 12 M67 74 q8 4 9 12"/>';
    const buch = stimmung === 'liest' ? '<rect class="buch" x="38" y="76" width="24" height="14" rx="2"/>' : '';
    return `
      <svg class="roboter" viewBox="0 0 100 100" aria-hidden="true">
        <line class="linie" x1="50" y1="8" x2="50" y2="18"/>
        <circle class="antenne" cx="50" cy="7" r="4"/>
        <rect class="kopf" x="20" y="18" width="60" height="46" rx="20"/>
        <rect class="visier" x="28" y="27" width="44" height="30" rx="13"/>
        <g class="augen">${augen}${mund}</g>
        <rect class="koerper" x="33" y="64" width="34" height="26" rx="11"/>
        <circle class="herz" cx="50" cy="76" r="4"/>
        <g class="arme">${arme}</g>
        ${buch}
      </svg>`;
  }

  function bildHtml(stimmung) {
    const datei = BEGLEITER_BILDER[stimmung];
    return datei ? `<img class="roboter" src="${datei}" alt="" aria-hidden="true">` : platzhalter(stimmung);
  }

  // Zeigt den Begleiter in einem Element: { stimmung, text }
  function zeigen(element, nachricht) {
    element.querySelector('.begleiter-bild').innerHTML = bildHtml(nachricht.stimmung);
    element.querySelector('.begleiter-text').textContent = nachricht.text;
    element.dataset.stimmung = nachricht.stimmung;
  }

  return { startNachricht, endeNachricht, tipp, zeigen };
})();
