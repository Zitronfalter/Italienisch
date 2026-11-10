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

// ---------- Startseite ----------

function zeigeStart() {
  const { wiederholen, neu } = Vokabeln.rundeZusammenstellen();
  const teile = [];
  if (wiederholen.length) teile.push(`${wiederholen.length} ${wiederholen.length === 1 ? 'Vokabel' : 'Vokabeln'} zum Wiederholen`);
  if (neu.length) teile.push(`${neu.length} neue ${neu.length === 1 ? 'Wort' : 'Wörter'}`);
  document.getElementById('heute-text').textContent = teile.length
    ? teile.join(' und ') + '.'
    : 'Heute ist nichts fällig. Schön!';
  zeigeLesenStand();
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

function zeigeTextliste() {
  const liste = el('text-liste');
  liste.innerHTML = '';
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

  el('lesen-meta').textContent = `${t.art} · ${t.stufe}`;
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
    el('wort-grundform').textContent = zeigeGrund ? 'Grundform: ' + treffer.grundform : '';
    el('wort-grundform').hidden = !zeigeGrund;
    el('wort-bedeutung').textContent = treffer.bedeutung;
  } else {
    el('wort-grundform').hidden = true;
    el('wort-bedeutung').textContent = 'Noch nicht im Wörterbuch. (Das Wörterbuch kommt in Schritt 7.)';
  }
  aktualisiereMerkenKnopf();
  el('wort-anhoeren').hidden = !Lesen.kannSprechen;
  el('wort-blatt').hidden = false;
}

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

// ---------- Knöpfe ----------

el('knopf-lesen').addEventListener('click', zeigeTextliste);
document.getElementById('knopf-los').addEventListener('click', starteRunde);
document.getElementById('knopf-daten').addEventListener('click', oeffneDaten);
document.querySelectorAll('[data-zurueck]').forEach((knopf) => {
  knopf.addEventListener('click', zeigeStart);
});

setzeGruss();
zeigeStart();
Speicher.dauerhaftAnfragen();

// Service Worker anmelden: damit läuft die App auch ohne Internet.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((fehler) => {
      console.warn('Offline-Modus nicht verfügbar:', fehler);
    });
  });
}
