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

// ---------- Knöpfe ----------

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
