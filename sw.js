// Service Worker: speichert die App-Dateien auf dem Gerät,
// damit sie auch ohne Internet startet.
//
// WICHTIG: Bei jeder Änderung an den Dateien die Versionsnummer erhöhen.
// Dann lädt das iPhone beim nächsten Start die neuen Dateien.
const VERSION = 'v23';
const CACHE = 'italienisch-' + VERSION;

const DATEIEN = [
  './',
  'index.html',
  'style.css',
  'speicher.js',
  'wortschatz.js',
  'vokabeln.js',
  'texte.js',
  'lesen.js',
  'grammatik.js',
  'woerterbuch.js',
  'woerterbuch.json',
  'niveautest.js',
  'begleiter.js',
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
