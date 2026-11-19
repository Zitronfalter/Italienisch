// Erzeugt die gezeichneten Rahmen (rahmen/*.svg) für den Look „Reiseskizze“.
// Schwarze Linie auf durchsichtigem Grund – die App nutzt sie als Maske, die Farbe kommt aus CSS (--rahmen).
// Ausführen: node werkzeuge/rahmen-bauen.js

const fs = require('node:fs');
const path = require('node:path');

const B = 100, H = 60, INNEN = 5, UEBER = 4;   // Bildgröße, Abstand der Linie zum Rand, Überstand an den Ecken
const zz = (x) => { const v = Math.sin(x * 12.9898) * 43758.5453; return v - Math.floor(v); };

// gerade Linie mit feinem Architekten-Zittern (gleicht sich aus, Enden ohne Versatz)
function zitterLinie(x1, y1, x2, y2, saat) {
  const len = Math.hypot(x2 - x1, y2 - y1), nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
  const schritte = Math.max(2, Math.round(len / 3.5)), ph1 = zz(saat) * 6.3, ph2 = zz(saat + 50) * 6.3;
  let d = `M${x1.toFixed(1)} ${y1.toFixed(1)}`;
  for (let s = 1; s <= schritte; s++) {
    const t = s / schritte, l = t * len;
    const a = s === schritte ? 0 : (Math.sin(l * 0.19 + ph1) * 0.45 + Math.sin(l * 0.07 + ph2) * 0.35 + (zz(saat * 7 + s) - 0.5) * 0.9) * 0.5;
    d += ` L${(x1 + (x2 - x1) * t + nx * a).toFixed(1)} ${(y1 + (y2 - y1) * t + ny * a).toFixed(1)}`;
  }
  return d;
}

function rahmen(staerke, saat) {
  const i = INNEN, u = INNEN - UEBER;
  const linien = [
    zitterLinie(u + 1, i, B - u, i + 0.3, saat + 1),          // oben, links etwas mehr Überstand
    zitterLinie(u, H - i, B - u - 1, H - i - 0.2, saat + 2),  // unten
    zitterLinie(i, u, i + 0.2, H - u - 1, saat + 3),          // links
    zitterLinie(B - i, u + 1, B - i - 0.3, H - u, saat + 4),  // rechts
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${B}" height="${H}" viewBox="0 0 ${B} ${H}">`
    + `<path d="${linien.join(' ')}" fill="none" stroke="#000" stroke-width="${staerke}" stroke-linecap="round" stroke-linejoin="round"/></svg>\n`;
}

const ZIEL = path.join(__dirname, '..', 'rahmen');
fs.mkdirSync(ZIEL, { recursive: true });
for (const [name, staerke, saat] of [['kasten', 1.5, 11], ['knopf', 2.2, 23], ['fein', 1.2, 37]]) {
  fs.writeFileSync(path.join(ZIEL, name + '.svg'), rahmen(staerke, saat));
  console.log('rahmen/' + name + '.svg');
}
