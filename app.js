// Italienisch-App – Hauptprogramm

// Zwischen den Bildschirmen wechseln: genau einer ist sichtbar.
function zeige(name) {
  document.querySelectorAll('.screen').forEach((el) => {
    el.hidden = el.id !== 'screen-' + name;
  });
  window.scrollTo(0, 0);
}

// Gruß passend zur Tageszeit
function setzeGruss() {
  const stunde = new Date().getHours();
  const gruss = stunde < 17 ? 'Buongiorno!' : 'Buonasera!';
  document.getElementById('gruss').textContent = gruss;
}

// ---------- Sichern & Laden ----------

function zeigeZuletztGesichert() {
  const wann = Speicher.daten.zuletztGesichert;
  document.getElementById('zuletzt-gesichert').textContent = wann
    ? new Date(wann).toLocaleString('de-DE', { dateStyle: 'long', timeStyle: 'short' }) + ' Uhr'
    : 'noch nie';
}

function meldung(text, istFehler = false) {
  const el = document.getElementById('daten-meldung');
  el.textContent = text;
  el.classList.toggle('fehler', istFehler);
  el.hidden = !text;
}

function oeffneDaten() {
  meldung('');
  zeigeZuletztGesichert();
  zeige('daten');
}

document.getElementById('knopf-sichern').addEventListener('click', async () => {
  const ergebnis = await Speicher.sichern();
  zeigeZuletztGesichert();
  if (ergebnis === 'geteilt') meldung('Gesichert.');
  else if (ergebnis === 'heruntergeladen') meldung('Gesichert. Die Datei liegt bei deinen Downloads.');
  else meldung('Sichern abgebrochen.');
});

const dateiFeld = document.getElementById('datei-laden');
document.getElementById('knopf-laden').addEventListener('click', () => dateiFeld.click());

dateiFeld.addEventListener('change', async () => {
  const datei = dateiFeld.files[0];
  dateiFeld.value = '';            // damit dieselbe Datei nochmal gewählt werden kann
  if (!datei) return;
  const ok = confirm('Dein jetziger Lernstand wird durch die Sicherung ersetzt. Fortfahren?');
  if (!ok) return;
  try {
    await Speicher.ausDateiLaden(datei);
    zeigeZuletztGesichert();
    meldung('Geladen. Dein Lernstand ist wiederhergestellt.');
  } catch (fehler) {
    meldung(fehler.message, true);
  }
});

// ---------- Was kommt nach den Vokabeln? ----------
//
// Abwechselnd ein Text, der noch nicht verstanden ist, und ein Grammatik-Kapitel,
// das noch nicht geübt ist (immer von leicht nach schwer).

function naechsterInhalt() {
  const texte = LESETEXTE.filter((t) => !(Lesen.stand(t.id) && Lesen.stand(t.id).verstanden));
  const kapitel = KAPITEL.filter((k) => !(Grammatik.stand(k.id) && Grammatik.stand(k.id).geuebt));
  const letzte = (Speicher.daten.fortschritt.runde || {}).art;
  const text = texte[0] && { art: 'text', obj: texte[0], name: `Text „${texte[0].titel}“` };
  const kap = kapitel[0] && { art: 'kapitel', obj: kapitel[0], name: `Grammatik „${kapitel[0].titel}“` };
  if (text && kap) return letzte === 'text' ? kap : text;
  return text || kap || null;
}

function oeffneNaechstes(n) {
  Speicher.daten.fortschritt.runde = { art: n.art, datum: Vokabeln.heute() };
  Speicher.speichern();
  if (n.art === 'text') oeffneText(n.obj);
  else oeffneKapitel(n.obj, 'grammatik');
}

// ---------- Startseite ----------

function zeigeStart() {
  const { wiederholen, neu } = Vokabeln.rundeZusammenstellen();
  const teile = [];
  if (wiederholen.length) teile.push(`${wiederholen.length} ${wiederholen.length === 1 ? 'Vokabel' : 'Vokabeln'} zum Wiederholen`);
  if (neu.length) teile.push(`${neu.length} neue ${neu.length === 1 ? 'Wort' : 'Wörter'}`);
  const n = naechsterInhalt();
  document.getElementById('heute-text').textContent = (teile.length
    ? teile.join(' und ') + '.'
    : 'Keine Vokabeln fällig.') + (n ? ` Danach: ${n.name}` : '');
  zeigeLesenStand();
  zeigeGrammatikStand();
  zeige('start');
}

// ---------- Vokabel-Abfrage ----------
//
// Eine Runde ist eine Liste von Schritten:
//   { art: 'neu', id }    → neues Wort zeigen
//   { art: 'frage', id }  → Wort abfragen

const abfrage = {
  schritte: [],
  pos: 0,
  geprueft: false,      // wurde die aktuelle Antwort schon geprüft?
  gewertet: new Set(),  // diese Wörter haben schon ihr Ergebnis für den Karteikasten
  aufAnhieb: 0,
};

const el = (id) => document.getElementById(id);

function starteRunde() {
  const { wiederholen, neu } = Vokabeln.rundeZusammenstellen();
  abfrage.schritte = [
    ...wiederholen.map((id) => ({ art: 'frage', id })),
    ...neu.map((id) => ({ art: 'neu', id })),
    ...neu.map((id) => ({ art: 'frage', id })),
  ];
  abfrage.pos = 0;
  abfrage.gewertet = new Set();
  abfrage.aufAnhieb = 0;
  if (!abfrage.schritte.length) return beendeRunde();
  zeige('runde');
  zeigeSchritt();
}

function zeigeSchritt() {
  const schritt = abfrage.schritte[abfrage.pos];
  const w = Vokabeln.wort(schritt.id);
  const fragen = abfrage.schritte.filter((s) => s.art === 'frage').length;
  const erledigt = abfrage.schritte.slice(0, abfrage.pos).filter((s) => s.art === 'frage').length;
  el('abfrage-stand').textContent = schritt.art === 'frage' ? `${erledigt + 1} von ${fragen}` : '';

  abfrage.geprueft = false;
  el('frage-wort').textContent = w.de;
  el('rueckmeldung').hidden = true;
  el('knopf-pruefen').textContent = 'Prüfen';
  const eingabe = el('abfrage-eingabe');
  eingabe.value = '';
  eingabe.readOnly = false;

  if (schritt.art === 'neu') {
    Vokabeln.aufnehmen(w.id);
    el('frage-art').textContent = 'Neues Wort';
    el('loesung-neu').textContent = w.it;
    el('loesung-neu').hidden = false;
    el('abfrage-form').hidden = true;
    el('knopf-weiss-nicht').hidden = true;
    el('knopf-pruefen').textContent = 'Gemerkt';
    abfrage.geprueft = true;          // „Gemerkt“ geht direkt weiter
  } else {
    el('frage-art').textContent = 'Auf Italienisch?';
    el('loesung-neu').hidden = true;
    el('abfrage-form').hidden = false;
    el('knopf-weiss-nicht').hidden = false;
    eingabe.focus();
  }
}

function pruefen(weissNicht = false) {
  const schritt = abfrage.schritte[abfrage.pos];
  const w = Vokabeln.wort(schritt.id);
  const eingabe = el('abfrage-eingabe');
  const text = eingabe.value.trim();
  if (!weissNicht && !text) { eingabe.focus(); return; }

  const ergebnis = weissNicht ? { stufe: 'falsch', hinweis: '' } : Vokabeln.pruefe(text, w);
  const gewusst = ergebnis.stufe !== 'falsch';

  // Nur der erste Versuch zählt für den Karteikasten.
  if (!abfrage.gewertet.has(w.id)) {
    abfrage.gewertet.add(w.id);
    Vokabeln.eintragen(w.id, gewusst);
    if (gewusst) abfrage.aufAnhieb += 1;
  }
  // Nicht gewusst: am Ende der Runde noch einmal fragen.
  if (!gewusst) abfrage.schritte.push({ art: 'frage', id: w.id });

  const box = el('rueckmeldung');
  box.classList.toggle('falsch', !gewusst);
  const loesung = `<strong lang="it">${w.it}</strong>`;
  if (ergebnis.stufe === 'richtig') {
    el('rueck-titel').textContent = 'Richtig.';
    el('rueck-text').innerHTML = '';
  } else if (ergebnis.stufe === 'fast') {
    el('rueck-titel').textContent = 'Fast richtig – zählt.';
    el('rueck-text').innerHTML = `${ergebnis.hinweis} Genau: ${loesung}`;
  } else if (weissNicht) {
    el('rueck-titel').textContent = 'So heißt es:';
    el('rueck-text').innerHTML = `${loesung}<br>Kommt gleich noch einmal.`;
  } else {
    el('rueck-titel').textContent = 'Noch nicht.';
    el('rueck-text').innerHTML = `${ergebnis.hinweis ? ergebnis.hinweis + ' ' : ''}Richtig ist: ${loesung}<br>Kommt gleich noch einmal.`;
  }
  el('rueck-text').hidden = !el('rueck-text').innerHTML;
  box.hidden = false;

  eingabe.readOnly = true;
  el('knopf-weiss-nicht').hidden = true;
  el('knopf-pruefen').textContent = 'Weiter';
  el('knopf-pruefen').focus();
  abfrage.geprueft = true;
}

function weiter() {
  abfrage.pos += 1;
  if (abfrage.pos >= abfrage.schritte.length) beendeRunde();
  else zeigeSchritt();
}

function beendeRunde() {
  const anzahl = abfrage.gewertet.size;
  if (anzahl === 0) {
    el('ende-titel').textContent = 'Alles erledigt';
    el('ende-text').textContent = 'Heute ist keine Vokabel fällig. Morgen geht es weiter.';
  } else {
    el('ende-titel').textContent = 'Fertig für heute';
    el('ende-text').textContent = `${anzahl} ${anzahl === 1 ? 'Wort' : 'Wörter'} geübt, ${abfrage.aufAnhieb} davon auf Anhieb gewusst.`;
  }
  el('ende-sicher').textContent = Vokabeln.anzahlSicher();

  // Teil 2 der Runde: ein Text oder ein Grammatik-Thema
  const n = naechsterInhalt();
  el('ende-naechstes').hidden = !n;
  el('knopf-naechstes').hidden = !n;
  el('knopf-ende-start').textContent = n ? 'Für heute reicht’s' : 'Zur Startseite';
  if (n) {
    if (anzahl > 0) el('ende-titel').textContent = 'Vokabeln geschafft';
    el('ende-naechstes-text').textContent = n.name;
    el('knopf-naechstes').textContent = n.art === 'text' ? 'Text lesen' : 'Grammatik ansehen';
    el('knopf-naechstes').onclick = () => oeffneNaechstes(n);
  }
  zeige('ende');
}

el('knopf-pruefen').addEventListener('click', () => (abfrage.geprueft ? weiter() : pruefen()));
el('knopf-weiss-nicht').addEventListener('click', () => pruefen(true));
el('abfrage-form').addEventListener('submit', (e) => {
  e.preventDefault();
  abfrage.geprueft ? weiter() : pruefen();
});
el('knopf-beenden').addEventListener('click', beendeRunde);

// ---------- Lesen ----------

const lesen = { text: null, antworten: [], geprueft: false, gewaehltesWort: null, liestVor: false };

function zeigeLesenStand() {
  const n = Lesen.anzahlVerstanden();
  el('lesen-stand').textContent = n
    ? `${n} von ${LESETEXTE.length} Texten verstanden`
    : `${LESETEXTE.length} Texte und Rezepte`;
}

function textEintrag(t, unterzeile) {
  const knopf = document.createElement('button');
  knopf.type = 'button';
  knopf.className = 'karte karte-knopf text-eintrag';
  knopf.innerHTML = `
    <span class="karte-titel" lang="it"></span>
    <span class="karte-text"></span>
    <span class="pfeil" aria-hidden="true">›</span>`;
  knopf.querySelector('.karte-titel').textContent = t.titel;
  knopf.querySelector('.karte-text').innerHTML = unterzeile;
  knopf.addEventListener('click', () => oeffneText(t));
  return knopf;
}

function zeigeTextliste() {
  const liste = el('text-liste');
  liste.innerHTML = '';

  // Meine Texte
  const meine = document.createElement('p');
  meine.className = 'stufe-titel';
  meine.textContent = 'Meine Texte';
  liste.appendChild(meine);
  const neu = document.createElement('button');
  neu.type = 'button';
  neu.className = 'knopf-neu';
  neu.textContent = '+ Eigenen Text einfügen';
  neu.addEventListener('click', oeffneTextNeu);
  liste.appendChild(neu);
  for (const t of Lesen.eigeneTexte()) {
    const datum = new Date(t.datum + 'T12:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
    liste.appendChild(textEintrag(t, `eingefügt am ${datum}`));
  }

  for (const stufe of ['A1', 'A2']) {
    const titel = document.createElement('p');
    titel.className = 'stufe-titel';
    titel.textContent = stufe === 'A1' ? 'Leicht (A1)' : 'Etwas schwerer (A2)';
    liste.appendChild(titel);
    for (const t of LESETEXTE.filter((x) => x.stufe === stufe)) {
      const s = Lesen.stand(t.id);
      const knopf = document.createElement('button');
      knopf.type = 'button';
      knopf.className = 'karte karte-knopf text-eintrag';
      knopf.innerHTML = `
        <span class="karte-titel" lang="it"></span>
        <span class="karte-text"></span>
        <span class="pfeil" aria-hidden="true">›</span>`;
      knopf.querySelector('.karte-titel').textContent = t.titel;
      knopf.querySelector('.karte-text').innerHTML = t.art
        + (s && s.verstanden ? ' · <span class="haken">✓ verstanden</span>' : '');
      knopf.addEventListener('click', () => oeffneText(t));
      liste.appendChild(knopf);
    }
  }
  zeige('texte');
}

// Zeile als HTML: jedes Wort wird antippbar
function zeileAlsHtml(zeile) {
  const frag = document.createDocumentFragment();
  for (const teil of Lesen.stuecke(zeile)) {
    if (teil.wort) {
      const span = document.createElement('span');
      span.className = 'wort';
      span.textContent = teil.text;
      frag.appendChild(span);
    } else {
      frag.appendChild(document.createTextNode(teil.text));
    }
  }
  return frag;
}

function mischen(liste) {
  const a = [...liste];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function oeffneText(t) {
  lesen.text = t;
  lesen.geprueft = false;
  lesen.antworten = t.fragen.map(() => null);
  vorlesenStopp();
  schliesseWortBlatt();

  el('lesen-meta').textContent = t.stufe ? `${t.art} · ${t.stufe}` : t.art;

  // Eigene Texte haben keine Fragen, dafür „Text löschen“
  const mitFragen = t.fragen.length > 0;
  el('fragen-titel').hidden = !mitFragen;
  el('lesen-fragen').hidden = !mitFragen;
  el('knopf-fragen-pruefen').hidden = !mitFragen;
  el('knopf-text-loeschen').hidden = !t.eigen;
  el('lesen-titel').textContent = t.titel;
  el('knopf-vorlesen').hidden = !Lesen.kannSprechen;

  // Text aufbauen
  const artikel = el('lesen-text');
  artikel.innerHTML = '';
  let liste = null;
  for (const b of Lesen.bloecke(t.text)) {
    if (b.art === 'li') {
      if (!liste) { liste = document.createElement('ul'); artikel.appendChild(liste); }
      const li = document.createElement('li');
      li.appendChild(zeileAlsHtml(b.zeile));
      liste.appendChild(li);
      continue;
    }
    liste = null;
    const knoten = document.createElement(b.art === 'h' ? 'h3' : 'p');
    knoten.appendChild(zeileAlsHtml(b.zeile));
    artikel.appendChild(knoten);
  }

  // Fragen aufbauen (Antworten gemischt)
  const fragen = el('lesen-fragen');
  fragen.innerHTML = '';
  t.fragen.forEach((f, nr) => {
    const karte = document.createElement('div');
    karte.className = 'karte frage';
    const text = document.createElement('p');
    text.className = 'frage-text';
    text.textContent = f.frage;
    karte.appendChild(text);
    const box = document.createElement('div');
    box.className = 'antworten';
    mischen(f.antworten.map((a, i) => ({ a, i }))).forEach(({ a, i }) => {
      const knopf = document.createElement('button');
      knopf.type = 'button';
      knopf.className = 'antwort';
      knopf.textContent = a;
      knopf.dataset.index = i;
      knopf.addEventListener('click', () => waehleAntwort(nr, i, box));
      box.appendChild(knopf);
    });
    karte.appendChild(box);
    fragen.appendChild(karte);
  });
  el('fragen-ergebnis').hidden = true;
  el('knopf-fragen-pruefen').textContent = 'Antworten prüfen';
  zeige('lesen');
}

function waehleAntwort(nr, index, box) {
  if (lesen.geprueft) return;
  lesen.antworten[nr] = index;
  box.querySelectorAll('.antwort').forEach((k) => {
    k.classList.toggle('gewaehlt', Number(k.dataset.index) === index);
  });
}

function fragenPruefen() {
  const t = lesen.text;
  if (lesen.geprueft) { oeffneText(t); return; }           // „Nochmal versuchen“
  const ergebnis = el('fragen-ergebnis');
  if (lesen.antworten.some((a) => a === null)) {
    ergebnis.textContent = 'Bitte beantworte erst alle Fragen.';
    ergebnis.classList.add('fehler');
    ergebnis.hidden = false;
    return;
  }
  lesen.geprueft = true;
  let richtig = 0;
  el('lesen-fragen').querySelectorAll('.antworten').forEach((box, nr) => {
    box.querySelectorAll('.antwort').forEach((k) => {
      const i = Number(k.dataset.index);
      if (i === 0) k.classList.add('richtig');                    // erste Antwort ist die richtige
      else if (i === lesen.antworten[nr]) k.classList.add('falsch');
    });
    if (lesen.antworten[nr] === 0) richtig += 1;
  });
  const von = t.fragen.length;
  Lesen.ergebnisSpeichern(t.id, richtig, von);
  ergebnis.classList.toggle('fehler', richtig < von);
  ergebnis.textContent = richtig === von
    ? `Alles richtig – Text verstanden. ✓`
    : `${richtig} von ${von} richtig. Lies die Stelle noch einmal nach und versuch es erneut.`;
  ergebnis.hidden = false;
  el('knopf-fragen-pruefen').textContent = richtig === von ? 'Nochmal lesen' : 'Nochmal versuchen';
}

// --- Eigenen Text einfügen ---

function oeffneTextNeu() {
  el('neu-titel').value = '';
  el('neu-text').value = '';
  el('neu-meldung').hidden = true;
  // „Aus Zwischenablage“ nur zeigen, wenn der Browser das kann
  el('knopf-einfuegen').hidden = !(navigator.clipboard && navigator.clipboard.readText);
  zeige('text-neu');
}

el('knopf-einfuegen').addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (text) el('neu-text').value = text;
  } catch {
    el('neu-meldung').textContent = 'Einfügen ging nicht. Tippe lange ins Textfeld und wähle „Einsetzen“.';
    el('neu-meldung').hidden = false;
  }
});

el('knopf-text-speichern').addEventListener('click', () => {
  const text = el('neu-text').value;
  if (!/\p{L}{2,}/u.test(text)) {
    el('neu-meldung').textContent = 'Bitte füge erst einen Text ein.';
    el('neu-meldung').hidden = false;
    return;
  }
  const t = Lesen.textSpeichern(el('neu-titel').value, text);
  oeffneText(t);
});
el('knopf-text-abbrechen').addEventListener('click', zeigeTextliste);

el('knopf-text-loeschen').addEventListener('click', () => {
  const t = lesen.text;
  if (!t || !t.eigen) return;
  if (!confirm(`„${t.titel}“ löschen? Die Wörter in deinen Karteikarten bleiben erhalten.`)) return;
  vorlesenStopp();
  schliesseWortBlatt();
  Lesen.textLoeschen(t.id);
  zeigeTextliste();
});

// Wort antippen
el('lesen-text').addEventListener('click', (e) => {
  const span = e.target.closest('.wort');
  if (!span) return;
  zeigeWortBlatt(span);
});

function zeigeWortBlatt(span) {
  if (lesen.gewaehltesWort) lesen.gewaehltesWort.classList.remove('gewaehlt');
  lesen.gewaehltesWort = span;
  span.classList.add('gewaehlt');

  const treffer = Lesen.nachschlagen(span.textContent, lesen.text);
  lesen.treffer = treffer;
  el('wort-form').textContent = span.textContent.replace(/['’]$/, '');
  if (treffer) {
    const zeigeGrund = treffer.grundform.toLowerCase() !== span.textContent.toLowerCase();
    el('wort-grundform').textContent = treffer.selbst
      ? 'Grundform: ' + treffer.grundform + ' (selbst eingetragen)'
      : zeigeGrund ? 'Grundform: ' + treffer.grundform + (treffer.vermutlich ? ' (vermutlich)' : '') : '';
    el('wort-grundform').hidden = !(zeigeGrund || treffer.selbst);
    el('wort-bedeutung').textContent = treffer.bedeutung;
    el('wort-quelle').hidden = treffer.quelle !== 'WikDict';
  } else {
    el('wort-grundform').hidden = true;
    el('wort-quelle').hidden = true;
    el('wort-bedeutung').textContent = Woerterbuch.bereit()
      ? 'Nicht im Wörterbuch gefunden.'
      : 'Das Wörterbuch lädt noch – gleich noch einmal antippen.';
  }
  aktualisiereMerkenKnopf();

  // Passende Grammatik-Regel? Dazu das Wort davor suchen (wichtig für die Vergangenheit).
  const alle = [...el('lesen-text').querySelectorAll('.wort')];
  const vorher = alle[alle.indexOf(span) - 1];
  const kap = Grammatik.kapitelFuerWort(span.textContent, treffer, vorher && vorher.textContent);
  const regelKnopf = el('wort-regel');
  regelKnopf.hidden = !kap;
  if (kap) {
    regelKnopf.textContent = `Regel: ${kap.titel} ›`;
    regelKnopf.dataset.kapitel = kap.id;
  }

  el('wort-anhoeren').hidden = !Lesen.kannSprechen;

  // Eigene Bedeutung: Formular gleich offen, wenn nichts gefunden wurde
  el('eigen-grundform').value = treffer ? treffer.grundform.replace(/^(il|lo|la|i|gli|le) /, '') : span.textContent.toLowerCase().replace(/['’]$/, '');
  el('eigen-bedeutung').value = '';
  el('wort-eigen').hidden = Boolean(treffer);
  el('wort-eigen-oeffnen').hidden = !treffer;
  el('wort-eigen-oeffnen').textContent = 'Andere Bedeutung eintragen';
  el('wort-blatt').hidden = false;
}

el('wort-eigen-oeffnen').addEventListener('click', () => {
  el('wort-eigen-oeffnen').hidden = true;
  el('wort-eigen').hidden = false;
  el('eigen-bedeutung').focus();
});

el('wort-eigen').addEventListener('submit', (e) => {
  e.preventDefault();
  const grundform = el('eigen-grundform').value.trim();
  const bedeutung = el('eigen-bedeutung').value.trim();
  if (!grundform || !bedeutung) {
    (grundform ? el('eigen-bedeutung') : el('eigen-grundform')).focus();
    return;
  }
  const karte = Lesen.bedeutungSpeichern(lesen.gewaehltesWort.textContent, grundform, bedeutung);
  lesen.treffer = { form: lesen.gewaehltesWort.textContent, grundform, bedeutung, karte };
  el('wort-bedeutung').textContent = bedeutung;
  el('wort-grundform').textContent = 'Grundform: ' + grundform + ' (selbst eingetragen)';
  el('wort-grundform').hidden = false;
  el('wort-quelle').hidden = true;
  el('wort-eigen').hidden = true;
  el('eigen-bedeutung').blur();
  aktualisiereMerkenKnopf();
});

function aktualisiereMerkenKnopf() {
  const knopf = el('wort-merken');
  const karte = lesen.treffer && lesen.treffer.karte;
  knopf.hidden = !karte;
  if (!karte) return;
  const drin = Lesen.istInKarteikarten(karte.id);
  knopf.disabled = drin;
  knopf.textContent = drin ? '✓ In Karteikarten' : 'In Karteikarten';
}

function schliesseWortBlatt() {
  el('wort-blatt').hidden = true;
  if (lesen.gewaehltesWort) lesen.gewaehltesWort.classList.remove('gewaehlt');
  lesen.gewaehltesWort = null;
}

el('wort-schliessen').addEventListener('click', schliesseWortBlatt);
el('wort-anhoeren').addEventListener('click', () => {
  if (lesen.gewaehltesWort) Lesen.sprich(lesen.gewaehltesWort.textContent);
});
el('wort-merken').addEventListener('click', () => {
  if (lesen.treffer && lesen.treffer.karte) {
    Lesen.inKarteikarten(lesen.treffer.karte);
    aktualisiereMerkenKnopf();
  }
});

// Ganzen Text vorlesen / anhalten
function vorlesenStopp() {
  Lesen.stopp();
  lesen.liestVor = false;
  el('knopf-vorlesen').textContent = '▶ Vorlesen';
}
el('knopf-vorlesen').addEventListener('click', () => {
  if (lesen.liestVor) { vorlesenStopp(); return; }
  lesen.liestVor = true;
  el('knopf-vorlesen').textContent = '■ Anhalten';
  Lesen.sprich(Lesen.vorleseText(lesen.text.text), () => {
    lesen.liestVor = false;
    el('knopf-vorlesen').textContent = '▶ Vorlesen';
  });
});

el('knopf-fragen-pruefen').addEventListener('click', fragenPruefen);
el('knopf-lesen-zurueck').addEventListener('click', () => {
  vorlesenStopp();
  schliesseWortBlatt();
  zeigeTextliste();
});

// ---------- Grammatik ----------

const gram = { kapitel: null, zurueckZu: 'grammatik', nr: 0, richtig: 0, geprueft: false, fertig: false, gelegt: [] };

function zeigeGrammatikStand() {
  const n = Grammatik.anzahlGeuebt();
  el('grammatik-stand').textContent = n
    ? `${n} von ${KAPITEL.length} Kapiteln geübt`
    : `${KAPITEL.length} Kapitel mit Übungen`;
}

function zeigeKapitelliste() {
  const liste = el('kapitel-liste');
  liste.innerHTML = '';
  for (const stufe of ['A1', 'A2']) {
    const titel = document.createElement('p');
    titel.className = 'stufe-titel';
    titel.textContent = stufe === 'A1' ? 'Grundlagen (A1)' : 'Weiter geht’s (A2)';
    liste.appendChild(titel);
    for (const k of KAPITEL.filter((x) => x.stufe === stufe)) {
      const s = Grammatik.stand(k.id);
      const knopf = document.createElement('button');
      knopf.type = 'button';
      knopf.className = 'karte karte-knopf text-eintrag';
      knopf.innerHTML = `
        <span class="karte-titel"></span>
        <span class="karte-text"></span>
        <span class="pfeil" aria-hidden="true">›</span>`;
      knopf.querySelector('.karte-titel').textContent = k.titel;
      knopf.querySelector('.karte-text').innerHTML = s
        ? (s.geuebt ? '<span class="haken">✓ geübt</span>' : `zuletzt ${s.richtig} von ${s.von} richtig`)
        : `${k.uebungen.length} Übungen`;
      knopf.addEventListener('click', () => oeffneKapitel(k, 'grammatik'));
      liste.appendChild(knopf);
    }
  }
  zeige('grammatik');
}

function oeffneKapitel(k, zurueckZu) {
  gram.kapitel = k;
  gram.zurueckZu = zurueckZu;
  el('kapitel-meta').textContent = `Grammatik · ${k.stufe}`;
  el('kapitel-titel').textContent = k.titel;

  const regel = el('kapitel-regel');
  regel.innerHTML = '';
  for (const absatz of k.regel) {
    const p = document.createElement('p');
    p.textContent = absatz;
    regel.appendChild(p);
  }

  const tabelle = el('kapitel-tabelle');
  tabelle.innerHTML = '';
  const kopf = tabelle.createTHead().insertRow();
  for (const zelle of k.tabelle.kopf) {
    const th = document.createElement('th');
    th.textContent = zelle;
    kopf.appendChild(th);
  }
  const rumpf = tabelle.createTBody();
  for (const zeile of k.tabelle.zeilen) {
    const tr = rumpf.insertRow();
    for (const zelle of zeile) tr.insertCell().textContent = zelle;
  }

  el('knopf-kapitel-zurueck').textContent = zurueckZu === 'lesen' ? 'Zurück zum Text' : 'Zurück';
  zeige('kapitel');
}

el('knopf-kapitel-zurueck').addEventListener('click', () => {
  if (gram.zurueckZu === 'lesen') zeige('lesen');
  else zeigeKapitelliste();
});

// --- Übung ---

function starteUebung() {
  gram.nr = 0;
  gram.richtig = 0;
  gram.fertig = false;
  el('uebung-titel').textContent = 'Übung';
  zeige('uebung');
  zeigeUebung();
}

function zeigeUebung() {
  const k = gram.kapitel;
  const u = k.uebungen[gram.nr];
  gram.geprueft = false;
  gram.gelegt = [];
  el('uebung-stand').textContent = `${gram.nr + 1} von ${k.uebungen.length}`;
  el('uebung-de').textContent = u.de;
  el('uebung-rueck').hidden = true;
  el('knopf-uebung').textContent = 'Prüfen';

  const istLuecke = u.art === 'luecke';
  el('uebung-luecke').hidden = !istLuecke;
  el('uebung-kacheln').hidden = istLuecke;

  if (istLuecke) {
    el('uebung-art').textContent = 'Setze das fehlende Wort ein.';
    zeigeLueckenSatz(u.satz, '');
    const feld = el('luecke-eingabe');
    feld.value = '';
    feld.readOnly = false;
    feld.focus();
  } else {
    el('uebung-art').textContent = 'Bau den Satz auf Italienisch.';
    const ablage = el('kachel-ablage');
    const vorrat = el('kachel-vorrat');
    ablage.innerHTML = '';
    ablage.classList.remove('fertig');
    vorrat.innerHTML = '';
    mischen(Grammatik.kacheln(u)).forEach((wort, i) => {
      const k = document.createElement('button');
      k.type = 'button';
      k.className = 'kachel';
      k.textContent = wort;
      k.dataset.i = i;
      k.addEventListener('click', () => kachelLegen(k));
      vorrat.appendChild(k);
    });
  }
}

// Satz mit Lücke anzeigen; die Lücke zeigt, was gerade getippt wird
function zeigeLueckenSatz(satz, eingabe) {
  const p = el('luecke-satz');
  p.innerHTML = '';
  const [vorne, hinten] = satz.split('___');
  p.appendChild(document.createTextNode(vorne));
  const luecke = document.createElement('span');
  luecke.className = 'luecke';
  luecke.textContent = eingabe || ' ';
  p.appendChild(luecke);
  p.appendChild(document.createTextNode(hinten || ''));
}

el('luecke-eingabe').addEventListener('input', (e) => {
  const u = gram.kapitel.uebungen[gram.nr];
  zeigeLueckenSatz(u.satz, e.target.value);
});

function kachelLegen(kachel) {
  if (gram.geprueft) return;
  kachel.classList.add('benutzt');
  const gelegt = document.createElement('button');
  gelegt.type = 'button';
  gelegt.className = 'kachel';
  gelegt.textContent = kachel.textContent;
  gelegt.addEventListener('click', () => {
    if (gram.geprueft) return;
    gelegt.remove();
    kachel.classList.remove('benutzt');
  });
  el('kachel-ablage').appendChild(gelegt);
}

function uebungPruefen() {
  const u = gram.kapitel.uebungen[gram.nr];
  let ergebnis;
  let loesungText;
  if (u.art === 'luecke') {
    const text = el('luecke-eingabe').value.trim();
    if (!text) { el('luecke-eingabe').focus(); return; }
    ergebnis = Grammatik.pruefeLuecke(text, u);
    loesungText = u.satz.replace(/\s*\([^)]*\)\s*$/, '').replace('___', u.loesung);
    el('luecke-eingabe').readOnly = true;
  } else {
    const woerter = [...el('kachel-ablage').children].map((k) => k.textContent);
    if (!woerter.length) return;
    ergebnis = Grammatik.pruefeKacheln(woerter, u);
    loesungText = u.it;
    el('kachel-ablage').classList.add('fertig');
  }
  const gut = ergebnis.stufe !== 'falsch';
  if (gut) gram.richtig += 1;

  el('uebung-rueck').classList.toggle('falsch', !gut);
  el('uebung-rueck-titel').textContent = ergebnis.stufe === 'richtig' ? 'Richtig.'
    : ergebnis.stufe === 'fast' ? 'Fast richtig – zählt.' : 'Noch nicht.';
  const text = el('uebung-rueck-text');
  text.innerHTML = '';
  if (ergebnis.stufe !== 'richtig') {
    const zeile = document.createElement('span');
    zeile.textContent = (ergebnis.hinweis ? ergebnis.hinweis + ' ' : '') + 'Richtig ist: ';
    const s = document.createElement('strong');
    s.lang = 'it';
    s.textContent = loesungText;
    text.append(zeile, s);
  }
  if (!gut) {
    const regel = document.createElement('span');
    regel.textContent = 'Regel: ' + gram.kapitel.kurz;
    text.append(document.createElement('br'), regel);
  }
  text.hidden = !text.childNodes.length;
  el('uebung-rueck').hidden = false;
  gram.geprueft = true;
  el('knopf-uebung').textContent = 'Weiter';
  el('knopf-uebung').focus();
}

function uebungWeiter() {
  gram.nr += 1;
  if (gram.nr < gram.kapitel.uebungen.length) { zeigeUebung(); return; }
  // Fertig
  const k = gram.kapitel;
  const von = k.uebungen.length;
  Grammatik.ergebnisSpeichern(k.id, gram.richtig, von);
  gram.fertig = true;
  el('uebung-titel').textContent = 'Fertig';
  el('uebung-stand').textContent = '';
  el('uebung-art').textContent = k.titel;
  el('uebung-de').textContent = `${gram.richtig} von ${von} richtig`;
  el('uebung-luecke').hidden = true;
  el('uebung-kacheln').hidden = true;
  el('uebung-rueck').classList.remove('falsch');
  el('uebung-rueck-titel').textContent = gram.richtig / von >= 0.8
    ? 'Gut gemacht – Kapitel geübt. ✓'
    : 'Lies die Regel noch einmal und übe dann erneut.';
  el('uebung-rueck-text').hidden = true;
  el('uebung-rueck').hidden = false;
  el('knopf-uebung').textContent = 'Zurück zum Kapitel';
}

el('knopf-uebung').addEventListener('click', () => {
  if (gram.fertig) { oeffneKapitel(gram.kapitel, gram.zurueckZu); return; }
  gram.geprueft ? uebungWeiter() : uebungPruefen();
});
el('luecke-form').addEventListener('submit', (e) => {
  e.preventDefault();
  gram.geprueft ? uebungWeiter() : uebungPruefen();
});
el('knopf-ueben').addEventListener('click', starteUebung);
el('knopf-uebung-beenden').addEventListener('click', () => oeffneKapitel(gram.kapitel, gram.zurueckZu));

// Regel direkt am Text: Knopf im Wort-Blatt
el('wort-regel').addEventListener('click', () => {
  const k = Grammatik.kapitel(el('wort-regel').dataset.kapitel);
  if (!k) return;
  vorlesenStopp();
  schliesseWortBlatt();
  oeffneKapitel(k, 'lesen');
});

// ---------- Wörterbuch ----------

function oeffneWoerterbuch() {
  el('suche-eingabe').value = '';
  el('treffer-liste').innerHTML = '';
  zeigeSuchHinweis();
  zeige('woerterbuch');
  el('suche-eingabe').focus();
}

function zeigeSuchHinweis(text) {
  el('suche-hinweis').hidden = false;
  el('suche-hinweis').textContent = text || (Woerterbuch.bereit()
    ? `${Woerterbuch.anzahl().toLocaleString('de-DE')} Wörter, auch ohne Internet.`
    : 'Wörterbuch lädt …');
}

let sucheZeit = null;
function suchen() {
  const text = el('suche-eingabe').value;
  const liste = el('treffer-liste');
  liste.innerHTML = '';
  if (text.trim().length < 2) { zeigeSuchHinweis(); return; }
  if (!Woerterbuch.bereit()) { zeigeSuchHinweis('Wörterbuch lädt noch – einen Moment.'); return; }
  const treffer = Woerterbuch.finde(text);
  zeigeSuchHinweis('Nichts gefunden.');
  el('suche-hinweis').hidden = treffer.length > 0;
  for (const t of treffer) {
    const zeile = document.createElement('div');
    zeile.className = 'treffer';
    zeile.innerHTML = `
      <div class="treffer-text">
        <p class="treffer-it" lang="it"></p>
        <p class="treffer-de"></p>
      </div>
      <button class="knopf-plus" type="button" aria-label="In Karteikarten">+</button>`;
    zeile.querySelector('.treffer-it').textContent = t.it;
    zeile.querySelector('.treffer-de').textContent = t.de;
    const knopf = zeile.querySelector('.knopf-plus');
    // Grundwortschatz-Karte bevorzugen, sonst eigenes Wort
    const ws = WORTSCHATZ.find((w) => w.it.toLowerCase().replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '') === t.it);
    const karte = ws
      ? { id: ws.id, it: ws.it, de: ws.de }
      : { id: 'e-' + wortId(t.it), it: t.it, de: t.de.split('; ').slice(0, 2).join('; '), eigen: true };
    const markieren = () => {
      const drin = Lesen.istInKarteikarten(karte.id);
      knopf.disabled = drin;
      knopf.textContent = drin ? '✓' : '+';
      knopf.setAttribute('aria-label', drin ? 'Schon in Karteikarten' : 'In Karteikarten');
    };
    knopf.addEventListener('click', () => { Lesen.inKarteikarten(karte); markieren(); });
    markieren();
    liste.appendChild(zeile);
  }
}

el('suche-eingabe').addEventListener('input', () => {
  clearTimeout(sucheZeit);
  sucheZeit = setTimeout(suchen, 200);      // erst suchen, wenn kurz nicht getippt wird
});
el('suche-form').addEventListener('submit', (e) => {
  e.preventDefault();
  el('suche-eingabe').blur();               // Tastatur schließen
  suchen();
});

// ---------- Fortschritt ----------

function balken(liste, name, zahl, max) {
  const zeile = document.createElement('div');
  zeile.className = 'fach';
  zeile.innerHTML = '<span class="fach-name"></span><span class="fach-balken"><span></span></span><span class="fach-zahl"></span>';
  zeile.querySelector('.fach-name').textContent = name;
  zeile.querySelector('.fach-balken span').style.width = (max ? Math.round((zahl / max) * 100) : 0) + '%';
  zeile.querySelector('.fach-zahl').textContent = zahl;
  liste.appendChild(zeile);
}

function zeigeFortschritt() {
  const karten = Object.values(Speicher.daten.karten);
  const sicher = Vokabeln.anzahlSicher();
  el('fs-sicher').textContent = sicher;
  el('fs-sicher-text').textContent = karten.length
    ? `von ${karten.length} Wörtern in deinem Karteikasten`
    : 'Drück auf „Los“, dann kommen die ersten Wörter.';

  const faecher = el('fs-faecher');
  faecher.innerHTML = '';
  const proFach = [1, 2, 3, 4, 5].map((f) => karten.filter((k) => k.fach === f).length);
  const max = Math.max(1, ...proFach);
  proFach.forEach((zahl, i) => balken(faecher, `Fach ${i + 1}`, zahl, max));

  const eingebaute = LESETEXTE.length;
  el('fs-texte').textContent = `${Lesen.anzahlVerstanden()} / ${eingebaute}`;
  el('fs-grammatik').textContent = `${Grammatik.anzahlGeuebt()} / ${KAPITEL.length}`;

  const t = Niveautest.letzter();
  if (t) {
    const datum = new Date(t.datum + 'T12:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
    el('fs-niveau').textContent = t.niveau || 'unter A1';
    el('fs-niveau-text').textContent = `Letzter Test am ${datum}. Mach ihn ab und zu wieder, z. B. einmal im Monat.`;
    el('knopf-test').textContent = 'Test wiederholen (ca. 10 Min.)';
  } else {
    el('fs-niveau').textContent = '–';
    el('fs-niveau-text').textContent = 'Noch kein Test gemacht. 24 Fragen zeigen dir, ob A1, A2 oder B1 sitzt.';
    el('knopf-test').textContent = 'Niveau-Test machen (ca. 10 Min.)';
  }
  zeige('fortschritt');
}

// ---------- Niveau-Test ----------

const test = { nr: 0, antworten: [], gewaehlt: null, fertig: false, reihenfolge: [] };

function starteTest() {
  test.nr = 0;
  test.antworten = [];
  test.fertig = false;
  el('test-ergebnis').hidden = true;
  el('test-frage-karte').hidden = false;
  el('test-hinweis').hidden = false;
  el('knopf-test-ende').textContent = 'Test abbrechen';
  zeige('test');
  zeigeTestfrage();
}

function zeigeTestfrage() {
  const f = NIVEAUTEST[test.nr];
  test.gewaehlt = null;
  el('test-stand').textContent = `${test.nr + 1} von ${NIVEAUTEST.length}`;
  el('test-frage').textContent = f.frage;
  const box = el('test-antworten');
  box.innerHTML = '';
  const optionen = [...mischen(f.antworten.map((a, i) => ({ a, i }))), { a: 'Weiß ich nicht', i: -1 }];
  for (const { a, i } of optionen) {
    const knopf = document.createElement('button');
    knopf.type = 'button';
    knopf.className = 'antwort' + (i === -1 ? ' antwort-leise' : '');
    knopf.textContent = a;
    knopf.addEventListener('click', () => {
      test.gewaehlt = i;
      box.querySelectorAll('.antwort').forEach((k) => k.classList.toggle('gewaehlt', k === knopf));
      el('knopf-test-weiter').disabled = false;
    });
    box.appendChild(knopf);
  }
  el('knopf-test-weiter').textContent = test.nr === NIVEAUTEST.length - 1 ? 'Auswerten' : 'Weiter';
  el('knopf-test-weiter').disabled = true;
}

function testWeiter() {
  if (test.fertig) { zeigeFortschritt(); return; }
  if (test.gewaehlt === null) return;
  test.antworten.push(test.gewaehlt);
  test.nr += 1;
  if (test.nr < NIVEAUTEST.length) { zeigeTestfrage(); return; }

  // Auswerten
  const ergebnis = Niveautest.auswerten(test.antworten);
  Niveautest.speichern(ergebnis);
  test.fertig = true;
  el('test-stand').textContent = '';
  el('test-frage-karte').hidden = true;
  el('test-hinweis').hidden = true;
  el('test-niveau').textContent = ergebnis.niveau || 'unter A1';
  el('test-erklaerung').textContent = Niveautest.erklaerung(ergebnis.niveau);
  const stufen = el('test-stufen');
  stufen.innerHTML = '';
  for (const [s, w] of Object.entries(ergebnis.proStufe)) balken(stufen, s, w.richtig, w.von);
  el('test-ergebnis').hidden = false;
  el('knopf-test-weiter').disabled = false;
  el('knopf-test-weiter').textContent = 'Zum Fortschritt';
  el('knopf-test-ende').textContent = 'Zur Startseite';
}

el('knopf-test').addEventListener('click', starteTest);
el('knopf-test-weiter').addEventListener('click', testWeiter);
el('knopf-test-ende').addEventListener('click', () => (test.fertig ? zeigeStart() : zeigeFortschritt()));

// ---------- Knöpfe ----------

el('knopf-fortschritt').addEventListener('click', zeigeFortschritt);
el('knopf-woerterbuch').addEventListener('click', oeffneWoerterbuch);
el('knopf-grammatik').addEventListener('click', zeigeKapitelliste);
el('knopf-lesen').addEventListener('click', zeigeTextliste);
document.getElementById('knopf-los').addEventListener('click', starteRunde);
document.getElementById('knopf-daten').addEventListener('click', oeffneDaten);
document.querySelectorAll('[data-zurueck]').forEach((knopf) => {
  knopf.addEventListener('click', zeigeStart);
});

setzeGruss();
zeigeStart();
Woerterbuch.laden().then(() => {
  if (!el('screen-woerterbuch').hidden) { zeigeSuchHinweis(); suchen(); }
});
Speicher.dauerhaftAnfragen();

// Service Worker anmelden: damit läuft die App auch ohne Internet.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((fehler) => {
      console.warn('Offline-Modus nicht verfügbar:', fehler);
    });
  });
}
