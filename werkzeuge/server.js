// Kleiner Test-Server nur für den eigenen Rechner.
// Start: node werkzeuge/server.js  → dann http://localhost:8080 öffnen.
// Für GitHub Pages wird diese Datei nicht gebraucht.
const http = require('http');
const fs = require('fs');
const path = require('path');

const WURZEL = path.join(__dirname, '..');
const PORT = 8080;
const TYPEN = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
};

http.createServer((anfrage, antwort) => {
  let pfad = decodeURIComponent(new URL(anfrage.url, 'http://x').pathname);
  if (pfad.endsWith('/')) pfad += 'index.html';
  const datei = path.join(WURZEL, pfad);
  if (!datei.startsWith(WURZEL)) { antwort.writeHead(403); return antwort.end(); }
  fs.readFile(datei, (fehler, inhalt) => {
    if (fehler) { antwort.writeHead(404); return antwort.end('Nicht gefunden'); }
    antwort.writeHead(200, {
      'Content-Type': TYPEN[path.extname(datei)] || 'application/octet-stream',
      'Cache-Control': 'no-cache',
    });
    antwort.end(inhalt);
  });
// '127.0.0.1' = nur dieser Rechner, nicht das Netzwerk (keine Firewall-Frage).
}).listen(PORT, '127.0.0.1', () =>console.log('Läuft: http://localhost:' + PORT));
