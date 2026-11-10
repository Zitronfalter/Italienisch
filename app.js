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

// ---------- Knöpfe ----------

document.getElementById('knopf-los').addEventListener('click', () => zeige('runde'));
document.getElementById('knopf-daten').addEventListener('click', oeffneDaten);
document.querySelectorAll('[data-zurueck]').forEach((knopf) => {
  knopf.addEventListener('click', () => zeige('start'));
});

setzeGruss();
Speicher.dauerhaftAnfragen();

// Service Worker anmelden: damit läuft die App auch ohne Internet.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((fehler) => {
      console.warn('Offline-Modus nicht verfügbar:', fehler);
    });
  });
}
