// Service Worker: speichert die App-Dateien auf dem Gerät,
// damit sie auch ohne Internet startet.
//
// WICHTIG: Bei jeder Änderung an den Dateien die Versionsnummer erhöhen.
// Dann lädt das iPhone beim nächsten Start die neuen Dateien.
const VERSION = 'v54';
const CACHE = 'italienisch-' + VERSION;

const DATEIEN = [
  './',
  'index.html',
  'style.css',
  'speicher.js',
  'wortschatz.js',
  'vokabeln.js',
  'texte.js',
  'texte-b.js',
  'texte-a1.js',
  'texte-a2.js',
  'texte-b1.js',
  'texte-b2.js',
  'lesen.js',
  'grammatik.js',
  'grammatik-b.js',
  'erzeuger.js',
  'wiederholung.js',
  'zusatz.js',
  'woerterbuch.js',
  'woerterbuch.json',
  'niveautest.js',
  'limo.js',
  'begleiter.js',
  'uebungen.js',
  'lektionen-inhalt.js',
  'lektionen-a1.js',
  'lektionen-a2.js',
  'lektionen-b1.js',
  'lektionen-b2.js',
  'lektionen.js',
  'woerterliste.js',
  'app.js',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-180.png',
  'icons/icon-192.png',
  'icons/icon-512.png',
];

// Beim Installieren: alle Dateien in den Speicher legen.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(DATEIEN)).then(() => self.skipWaiting())
  );
});

// Beim Aktivieren: alte Versionen löschen.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((namen) => Promise.all(
        namen.filter((n) => n.startsWith('italienisch-') && n !== CACHE).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// Bei jeder Anfrage: zuerst im Speicher nachsehen, sonst aus dem Internet holen.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((treffer) => treffer || fetch(event.request))
  );
});
