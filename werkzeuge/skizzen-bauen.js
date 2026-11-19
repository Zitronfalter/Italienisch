// Baut skizzen.js und skizzen-zuordnung.js aus dem Entwurf docs/superpowers/entwuerfe/entwurf10-skizzen.html.
// Neu bauen, wenn sich Motive im Entwurf ändern:  node werkzeuge/skizzen-bauen.js
// skizzen.js         – Motive (58), Zeichnen mit Zitterstrich und Wasserfarbe, Abwandlungen, Anzeige in der App
// skizzen-zuordnung.js – Lektions-ID → [Motiv, Abwandlung 0–3] (aus der Liste im Entwurf über Lektionen.anzeigeNr)

const fs = require('node:fs');
const path = require('node:path');
const { laden, WURZEL } = require('./test/laden');

const ENTWURF = path.join(WURZEL, 'docs', 'superpowers', 'entwuerfe', 'entwurf10-skizzen.html');
const html = fs.readFileSync(ENTWURF, 'utf8').replace(/\r\n/g, '\n');

function abschnitt(von, bis) {
  const a = html.indexOf(von), b = html.indexOf(bis, a + von.length);
  if (a < 0 || b < 0) throw new Error('Abschnitt nicht gefunden: ' + von);
  return html.slice(a, b);
}

// ---------- skizzen.js ----------
let zeichnen = abschnitt('// ---------- Hilfen ----------', '// ---------- Welche Lektion bekommt welches Motiv');
const messAlt = zeichnen.slice(zeichnen.indexOf('const messPfad = (() => {'), zeichnen.indexOf('})();', zeichnen.indexOf('const messPfad = (() => {')) + 5);
zeichnen = zeichnen.replace(messAlt, `// unsichtbarer Pfad zum Abtasten der Linien (erst beim ersten Zeichnen angelegt)
let messPfadEl = null;
function messPfadHolen() {
  if (!messPfadEl) {
    const s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    s.setAttribute('width', 0); s.setAttribute('height', 0); s.setAttribute('aria-hidden', 'true');
    s.style.position = 'absolute';
    messPfadEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    s.appendChild(messPfadEl); document.body.appendChild(s);
  }
  return messPfadEl;
}`);
zeichnen = zeichnen.replace('function zitterD(d, amp, saat) {\n', 'function zitterD(d, amp, saat) {\n  const messPfad = messPfadHolen();\n');
const namen = abschnitt('const MOTIV_NAMEN = {', 'const LEKTIONEN = [').trim();
const gezeichnet = abschnitt('const GEZEICHNET = {', '\nconst NEU').trim();

const skizzenJs = `// Reiseskizzen zu den Lektionen (Look „Reiseskizze“).
// ERZEUGT von werkzeuge/skizzen-bauen.js aus docs/superpowers/entwuerfe/entwurf10-skizzen.html – nicht von Hand ändern.
// Zeichnen braucht den Browser (Zitterstrich über getPointAtLength); Daten und Zuordnung gehen auch ohne.

const Skizzen = (() => {
${zeichnen.trim()}

${namen}

${gezeichnet}

  const STAND = 'v1';                       // erhöhen, wenn sich die Zeichnungen ändern (Zwischenspeicher)
  const SPEICHER = 'italienisch-skizzen';   // eigener Schlüssel – nie im Lernstand
  const GRENZE = 600000;                    // höchstens so viele Zeichen im Zwischenspeicher (Lernstand hat Vorrang)
  const fertig = new Map();

  const MOTIVE = Object.fromEntries(Object.entries(GEZEICHNET).map(([key, m]) => [key, { name: MOTIV_NAMEN[key], bild: m.bild }]));

  // Motiv und Abwandlung einer Lektion; Wiederholungen nehmen die Lektion davor
  function fuer(lektion) {
    if (!lektion || typeof SKIZZEN_ZUORDNUNG === 'undefined') return null;
    let l = lektion;
    if (l.art === 'ripasso' && typeof Lektionen !== 'undefined') {
      const alle = Lektionen.alle();
      const i = alle.findIndex((x) => x.id === l.id);
      l = alle.slice(0, Math.max(i, 0)).reverse().find((x) => x.art !== 'ripasso') || null;
    }
    const eintrag = l && SKIZZEN_ZUORDNUNG[l.id];
    if (!eintrag || !GEZEICHNET[eintrag[0]]) return null;
    return { key: eintrag[0], variante: eintrag[1], bild: GEZEICHNET[eintrag[0]].bild };
  }

  function speicherLesen() {
    try { return JSON.parse(localStorage.getItem(SPEICHER) || '{}') || {}; } catch (e) { return {}; }
  }
  // wie viel im ganzen Gerätespeicher der App liegt (Zeichen) – ohne unsere Bilder
  function belegtOhneBilder() {
    let summe = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const name = localStorage.key(i);
      if (name !== SPEICHER) summe += name.length + (localStorage.getItem(name) || '').length;
    }
    return summe;
  }
  // Zwischenspeicher: einmal lesen, dann im Arbeitsspeicher; geschrieben wird gesammelt (nicht bei jedem Bild)
  let zwischen = null;
  function zwischenHolen() {
    if (!zwischen) {
      const s = speicherLesen();
      zwischen = s.stand === STAND && s.bilder && typeof s.bilder === 'object' ? s : { stand: STAND, bilder: {} };
    }
    return zwischen;
  }
  let schreibenGeplant = null;
  function speicherSchreiben() {
    schreibenGeplant = null;
    try {
      // Lernstand hat Vorrang: liegt schon viel im Speicher, keine Bilder dazulegen
      if (belegtOhneBilder() > 1500000) { localStorage.removeItem(SPEICHER); return; }
      const s = zwischenHolen();
      const schluesselListe = Object.keys(s.bilder);
      let text = JSON.stringify(s);
      // zu groß? älteste Bilder zuerst weglassen
      while (text.length > GRENZE && schluesselListe.length > 1) { delete s.bilder[schluesselListe.shift()]; text = JSON.stringify(s); }
      if (text.length <= GRENZE) localStorage.setItem(SPEICHER, text);
    } catch (e) { /* voll oder gesperrt: dann eben ohne Zwischenspeicher */ }
  }
  function spaeterSchreiben() {
    if (schreibenGeplant || typeof setTimeout === 'undefined') return;
    schreibenGeplant = setTimeout(speicherSchreiben, 2000);
  }

  // Filter für die Wasserfarbe – einmal pro Seite
  function filterEinfuegen() {
    if (document.getElementById('aquarell-voll')) return;
    document.body.insertAdjacentHTML('beforeend', \`<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
      <filter id="aquarell-voll" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" seed="5" result="r"/>
        <feDisplacementMap in="SourceGraphic" in2="r" scale="15" result="d"/>
        <feGaussianBlur in="d" stdDeviation="1.4" result="b"/>
        <feTurbulence type="fractalNoise" baseFrequency="0.06" numOctaves="2" seed="7" result="w"/>
        <feColorMatrix in="w" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -0.9 1.25" result="wa"/>
        <feComposite in="b" in2="wa" operator="in"/>
      </filter></defs></svg>\`);
  }

  // fertiges <svg> (aus dem Zwischenspeicher oder neu gezeichnet)
  function svg(key, variante = 0) {
    const m = GEZEICHNET[key];
    if (!m) return '';
    const schluessel = key + ':' + variante;
    if (fertig.has(schluessel)) return fertig.get(schluessel);
    const z = zwischenHolen();
    let bild = z.bilder[schluessel];
    if (!bild) {
      bild = \`<svg class="skizze-bild" viewBox="0 0 340 220" role="img" aria-label="\${m.bild}">\${abwandeln(m, VARIANTEN[variante] || VARIANTEN[0])}</svg>\`;
      z.bilder[schluessel] = bild;
      spaeterSchreiben();
    }
    fertig.set(schluessel, bild);
    return bild;
  }

  // Skizze einer Lektion in ein Element zeichnen – erst, wenn es ins Bild kommt (optionen.sofort: gleich zeichnen)
  let beobachter = null;
  // eine Skizze pro Bildaufbau zeichnen, damit Scrollen flüssig bleibt; abgehängte Elemente überspringen
  const warteschlange = [];
  let laeuft = false;
  function abarbeiten() {
    if (laeuft) return;
    laeuft = true;
    const weiter = () => {
      const ziel = warteschlange.shift();
      if (!ziel) { laeuft = false; return; }
      if (ziel.isConnected && ziel._malen) ziel._malen();
      ziel._malen = null;
      (typeof requestAnimationFrame === 'function' ? requestAnimationFrame : (f) => setTimeout(f, 16))(() => setTimeout(weiter, 0));
    };
    weiter();
  }
  // alte Listen-Einträge nicht mehr beobachten (die Lektionsliste wird neu gebaut)
  function vergessen(wurzel) {
    if (!beobachter) return;
    wurzel.querySelectorAll('.lektion-skizze').forEach((e) => { beobachter.unobserve(e); e._malen = null; });
  }
  function einhaengen(element, lektion, optionen = {}) {
    const s = fuer(lektion);
    element.hidden = !s;
    if (!s) return null;
    filterEinfuegen();
    const malen = () => { element.innerHTML = svg(s.key, s.variante); };
    if (optionen.sofort || typeof IntersectionObserver === 'undefined') { malen(); return s; }
    if (!beobachter) {
      beobachter = new IntersectionObserver((eintraege) => eintraege.forEach((e) => {
        if (!e.isIntersecting) return;
        beobachter.unobserve(e.target);
        warteschlange.push(e.target);
        abarbeiten();
      }), { rootMargin: '300px 0px' });
    }
    element._malen = malen;
    beobachter.observe(element);
    return s;
  }

  return { MOTIVE, VARIANTEN, fuer, svg, einhaengen, vergessen };
})();
`;
fs.writeFileSync(path.join(WURZEL, 'skizzen.js'), skizzenJs);

// ---------- skizzen-zuordnung.js ----------
const liste = abschnitt('const LEKTIONEN = [', '\nconst GEZEICHNET');
const nachNr = new Map();
for (const m of liste.matchAll(/\[(\d+), (['"])(.*?)\2, '(\w+)'\]/g)) nachNr.set(Number(m[1]), { titel: m[3], key: m[4] });

const k = laden();
const zuordnung = {};
const zaehler = {};
for (const l of k.Lektionen.alle()) {
  if (l.art === 'ripasso') continue;
  const nr = k.Lektionen.anzeigeNr(l);
  const e = nachNr.get(nr);
  if (!e) { console.warn('Keine Skizze für', nr, l.id, l.titel); continue; }
  if (e.titel !== l.titel) console.warn(`Titel weicht ab bei ${nr}: Entwurf „${e.titel}“, App „${l.titel}“`);
  const variante = zaehler[e.key] || 0;
  zaehler[e.key] = variante + 1;
  zuordnung[l.id] = [e.key, variante];
}
const zeilen = Object.entries(zuordnung).map(([id, [key, v]]) => `  ${id}: ['${key}', ${v}],`).join('\n');
fs.writeFileSync(path.join(WURZEL, 'skizzen-zuordnung.js'), `// Welche Lektion zeigt welche Skizze: Lektions-ID → [Motiv, Abwandlung 0–3]
// (0 = wie gezeichnet, 1 = gespiegelt + andere Farben, 2 = Abendlicht, 3 = Regen).
// ERZEUGT von werkzeuge/skizzen-bauen.js aus Entwurf 10 – neue Lektionen dort oder hier von Hand ergänzen.
const SKIZZEN_ZUORDNUNG = {
${zeilen}
};
`);
console.log('skizzen.js und skizzen-zuordnung.js geschrieben –', Object.keys(zuordnung).length, 'Lektionen');
