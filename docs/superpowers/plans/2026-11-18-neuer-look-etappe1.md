# Neuer Look, Etappe 1 (Grundlage) – Bauplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Die App bekommt die Grundlage des Looks „Reiseskizze“: Papier/Pappe als Hintergrund (wählbar, mit Reglern für Helligkeit und Wärme), Ocker statt Zitronengelb, Papierstruktur und die Schrift Caveat – noch mit den alten Rahmen.

**Architecture:** Neue Datei `hintergrund.js` (ohne Abhängigkeiten, im `<head>` geladen) rechnet aus der Wahl und den Reglern die Hintergrundfarben und die davon abhängigen Textfarben aus und setzt sie als CSS-Variablen auf `<html>`. Die festen Farben (Tusche, Ocker) stehen in `style.css`. Caveat liegt als Datei im Projekt und wird per `@font-face` eingebunden.

**Tech Stack:** HTML, CSS, einzelne `.js`-Dateien ohne Module und ohne Build; Tests mit `node --test` über `werkzeuge/test/laden.js`.

**Spec:** `docs/superpowers/specs/2026-11-18-neuer-look-design.md`

## Global Constraints

- Keine Kosten, nichts aus dem Internet laden: Caveat als lokale Datei, Lizenz SIL OFL 1.1 in `LIZENZEN.md`.
- Alle Pfade relativ (App läuft unter `/Italienisch/`).
- Bei jeder Änderung an App-Dateien `VERSION` in `sw.js` erhöhen (zurzeit `v73`); neue Dateien in `DATEIEN` eintragen.
- Lernstand unverändert: neue Einstellung nur unter `Speicher.daten.einstellungen.hintergrund`; `FORMAT` bleibt 3; alte Sicherungen ohne diesen Eintrag funktionieren.
- Farben: Tusche `#1f1c18` (Text, Linien), Ocker `#d6a24a` (Hauptknöpfe, Fortschritt, aktiver Reiter, Unterstrich unter Überschrift; Schrift darauf `#1f1c18`), Ocker-Linie `#8a6220` (Nebenknöpfe, Links). Ocker nie als Schriftfarbe auf Papier/Pappe. Grün = richtig, Blau = noch nicht – Bedeutung bleibt.
- Standard-Hintergründe: Papier `#fbfaf5` (≈ `hsl(50 43% 97%)`), Pappe `hsl(29 16% 80%)`.
- Caveat nur für Überschriften, Beschriftungen, Knöpfe, Leiste, Lektionsnamen, mindestens 16 px; nie für Fließtext, italienische Sätze, Notizen, Eingabefelder, Kacheln, Antworten.
- „Heute“, „Üben“ und Wörterbuch passen ohne Scrollen in 393 × 852 (Papier und Pappe).
- Commit nur, wenn Nicole es sagt (Autor im Repo nicht ändern).

## Review Focus

1. Altes Backup / alter Lernstand ohne `einstellungen.hintergrund` (oder mit kaputten Werten wie Text, `null`, 999) → Standardwerte, kein Fehler. *Test in Task 1.*
2. Regler ganz an den Rand (hell 0/100, Wärme 0/100) auf Pappe → leiser Text, Grün und Blau bleiben lesbar (Kontrast ≥ 4.5). *Test in Task 1.*
3. iPhone wechselt abends von hell auf dunkel, während die App offen ist („Wie iPhone“) → Hintergrund wechselt sofort mit. *Prüfung in Task 2.*
4. Pappe gewählt, App neu geöffnet → kein kurzes Aufblitzen von Papier. *Prüfung in Task 2.*
5. Offline nach Update → Caveat erscheint trotzdem (Datei im Service-Worker-Cache). *Prüfung in Task 4.*

---

### Task 1: Rechenteil `hintergrund.js`

**Files:**
- Create: `hintergrund.js`
- Modify: `werkzeuge/test/laden.js` (`'hintergrund.js'` in `STANDARD` direkt nach `'speicher.js'`, `'Hintergrund'` in `NAMEN`)
- Test: `werkzeuge/test/hintergrund.test.js`

**Interfaces:**
- Produces (globales `const Hintergrund = (() => { … })()`):
  - `Hintergrund.STANDARD = { papier: { hell: 50, waerme: 50 }, pappe: { hell: 50, waerme: 50 } }` – Reglerwerte 0…100, 50 = Entwurfsfarbe.
  - `Hintergrund.FARBEN = { papier: { textLeise, richtig, fehler }, pappe: { textLeise, richtig, fehler } }` – Hex-Werte; Start: Papier `#6b6459` / `#4f7a30` / `#3f6e8c`, Pappe `#5b5247` / dunklere Töne, wenn der Kontrast-Test es verlangt.
  - `Hintergrund.wahl() -> { art: 'auto'|'papier'|'pappe', papier: {hell, waerme}, pappe: {hell, waerme} }` – liest `Speicher.daten.einstellungen.hintergrund`, oder (wenn `Speicher` noch nicht da ist) `localStorage['italienisch-daten']`; ergänzt fehlende/ungültige Werte mit Standard, Zahlen auf 0…100 begrenzt.
  - `Hintergrund.aktuelleArt(wahl, dunkel: boolean) -> 'papier'|'pappe'`
  - `Hintergrund.farbe(art, regler) -> 'hsl(H S% L%)'` – Hintergrund; `Hintergrund.flaeche(art, regler) -> 'hsl(…)'` – etwas heller für Karten und Leiste.
  - `Hintergrund.kontrast(farbeA, farbeB) -> number` – WCAG-Kontrast; versteht `#rrggbb` und `hsl(H S% L%)`.
  - `Hintergrund.setzen(teil)` – mischt `teil` in `Speicher.daten.einstellungen.hintergrund`, speichert (`Speicher.speichern()`), ruft `anwenden()`.
  - `Hintergrund.zuruecksetzen()` – Regler der gerade gezeigten Art auf `STANDARD`, `art` bleibt.
  - `Hintergrund.anwenden()` – in Task 2; hier nur leere Hülle, die ohne `document.documentElement` nichts tut (Node-Tests).

- [ ] **Step 1: Tests schreiben** in `werkzeuge/test/hintergrund.test.js` (Muster wie `stimmen.test.js`, `const k = laden();`):

```js
test('Standard ergibt die Entwurfsfarben', () => {
  assert.strictEqual(k.Hintergrund.farbe('papier', { hell: 50, waerme: 50 }), 'hsl(50 43% 97%)');
  assert.strictEqual(k.Hintergrund.farbe('pappe', { hell: 50, waerme: 50 }), 'hsl(29 16% 80%)');
});
test('aktuelleArt', () => {
  const A = k.Hintergrund.aktuelleArt;
  assert.strictEqual(A({ art: 'auto' }, false), 'papier');
  assert.strictEqual(A({ art: 'auto' }, true), 'pappe');
  assert.strictEqual(A({ art: 'papier' }, true), 'papier');
  assert.strictEqual(A({ art: 'pappe' }, false), 'pappe');
  assert.strictEqual(A({}, true), 'pappe');
});
test('wahl: alter Lernstand ohne Eintrag und kaputte Werte', () => {
  for (const gespeichert of [undefined, '{}', '{"einstellungen":{"tempo":0.7}}', '{"einstellungen":{"hintergrund":null}}']) {
    const w = laden(undefined, '', { gespeichert }).Hintergrund.wahl();
    assert.deepStrictEqual(JSON.parse(JSON.stringify(w)), { art: 'auto', papier: { hell: 50, waerme: 50 }, pappe: { hell: 50, waerme: 50 } });
  }
  const kaputt = laden(undefined, '', { gespeichert: '{"einstellungen":{"hintergrund":{"art":"lila","pappe":{"hell":"x","waerme":999}}}}' }).Hintergrund.wahl();
  assert.strictEqual(kaputt.art, 'auto');
  assert.deepStrictEqual(JSON.parse(JSON.stringify(kaputt.pappe)), { hell: 50, waerme: 100 });
});
test('Regler-Grenzen: Text bleibt lesbar', () => {
  for (const art of ['papier', 'pappe']) for (const hell of [0, 50, 100]) for (const waerme of [0, 50, 100]) {
    const bg = k.Hintergrund.farbe(art, { hell, waerme }), f = k.Hintergrund.FARBEN[art];
    assert.ok(k.Hintergrund.kontrast('#1f1c18', bg) >= 7, `${art} ${hell}/${waerme} Tusche`);
    for (const t of ['textLeise', 'richtig', 'fehler']) assert.ok(k.Hintergrund.kontrast(f[t], bg) >= 4.5, `${art} ${hell}/${waerme} ${t}`);
  }
});
test('zuruecksetzen: nur Regler der gezeigten Art, Wahl bleibt', () => {
  const kk = laden(undefined, '', { gespeichert: '{"einstellungen":{"hintergrund":{"art":"pappe","pappe":{"hell":10,"waerme":90},"papier":{"hell":20,"waerme":30}}}}' });
  kk.Hintergrund.zuruecksetzen();
  const w = kk.Hintergrund.wahl();
  assert.strictEqual(w.art, 'pappe');
  assert.deepStrictEqual(JSON.parse(JSON.stringify(w.pappe)), { hell: 50, waerme: 50 });
  assert.deepStrictEqual(JSON.parse(JSON.stringify(w.papier)), { hell: 20, waerme: 30 });
});
```

(In Node gibt es kein `matchMedia`: für `zuruecksetzen` bei `art: 'auto'` gilt dann Papier.)

- [ ] **Step 2: Tests laufen lassen** – `node --test werkzeuge/test/hintergrund.test.js` → FAIL (`Hintergrund` nicht definiert).

- [ ] **Step 3: `hintergrund.js` schreiben.** Farbmodell: Standardwerte H/S/L je Art; Regler verschieben linear um die Mitte – `hell` ändert nur L, `waerme` ändert H (wärmer = kleinerer Farbton) und S (wärmer = mehr Sättigung). Spannweiten so wählen, dass die Unterschiede sichtbar sind und der Grenzen-Test besteht (Anhalt: Papier L 94…99, Pappe L ~72…88; Wärme ±10 Grad Farbton, ±15 Prozentpunkte Sättigung). Werte im String gerundet auf ganze Zahlen. `flaeche`: L +2 (Papier, höchstens 100) bzw. +5 (Pappe).

- [ ] **Step 4: Tests laufen lassen** – `node --test "werkzeuge/test/*.test.js"` → alle PASS (auch die alten).

- [ ] **Step 5: Kein Commit** – Nicole entscheidet am Ende der Etappe.

---

### Task 2: Farben in der App umstellen und anwenden

**Files:**
- Modify: `hintergrund.js` (`anwenden()` ausbauen, beim Laden einmal aufrufen, `matchMedia('(prefers-color-scheme: dark)')`-Wechsel beobachten)
- Modify: `index.html` (`<script src="hintergrund.js"></script>` im `<head>` vor `style.css`; die zwei `theme-color`-Metas bleiben als Startwert, `anwenden()` setzt ihren `content` auf die aktuelle Hintergrundfarbe)
- Modify: `style.css` (Farbblock oben, Dunkel-Block Zeile 22–39, Limo-Tinte Zeile 619–624, Papierstruktur)
- Modify: `sw.js` (`hintergrund.js` in `DATEIEN`, `VERSION` → `v74`)

**Interfaces:**
- Consumes: alles aus Task 1.
- Produces: CSS-Variablen auf `document.documentElement`: `--hintergrund`, `--flaeche`, `--text-leise`, `--richtig`, `--fehler`; Attribut `data-grund="papier"|"pappe"` auf `<html>` (für Regeln, die je Grund anders sein müssen, z. B. `--rand`, `--schatten`).

- [ ] **Step 1: `anwenden()` schreiben:** Art aus `wahl()` + `matchMedia` bestimmen, Variablen und `data-grund` setzen, `theme-color` anpassen. Beim Laden der Datei sofort aufrufen (Skript steht im `<head>`, daher kein Aufblitzen); bei `change` des Media-Query erneut, aber nur wirksam bei `art: 'auto'`.

- [ ] **Step 2: `style.css` umstellen:** Kopfkommentar „Design Reiseskizze“. Variablennamen bleiben (damit die übrigen Regeln weiter stimmen), Werte neu: `--text: #1f1c18`, `--akzent: #d6a24a`, `--akzent-text: #1f1c18`, `--akzent-linie: #8a6220`, `--reiter-fuellung: #d6a24a`, `--reiter-strich: #1f1c18`, `--limo-tinte: #1f1c18`; Startwerte für `--hintergrund`/`--flaeche`/`--text-leise`/`--richtig`/`--fehler` wie Papier-Standard. Beide `@media (prefers-color-scheme: dark)`-Blöcke entfernen (Pappe ersetzt sie). `--rand` und `--schatten` passend für Papier; unter `:root[data-grund="pappe"]` dunklere Randfarbe. Papierstruktur als `background-image` auf `html, body` (SVG-Rauschen `--struktur` aus Entwurf 9, Zeile 8). Ocker nirgends als Schriftfarbe auf dem Hintergrund (`grep -n "color: var(--akzent)" style.css` muss leer sein).

- [ ] **Step 3: `sw.js`:** `'hintergrund.js'` in `DATEIEN`, `VERSION = 'v74'`.

- [ ] **Step 4: Prüfen im Browser-Pane** (Konfiguration `italienisch`, zweimal neu laden): Konsole ohne Fehler; 393 × 852; mit `resize_window colorScheme: light` → Papier, `dark` → Pappe ohne Neuladen; per `localStorage` `art: 'pappe'` setzen und neu laden → sofort Pappe; Heute, Üben, Lektionen, Mein Stand, Einstellungen, eine Runde und eine Übung ansehen: kein Gelb mehr, Grün/Blau lesbar. Testdaten danach löschen.

- [ ] **Step 5: Alle Tests** – `node --test "werkzeuge/test/*.test.js"` → PASS.

---

### Task 3: Einstellung „Aussehen“

**Files:**
- Modify: `index.html` (neue Karte in `#screen-einstellungen` über „Vorlesen“)
- Modify: `app.js` (`zeigeEinstellungen()` Zeile 65 füllt die Werte; Ereignisse für Auswahl, Regler, Knopf)
- Modify: `style.css` (Regler im Stil der App: Spur in `--rand`, Daumen Ocker mit Tuscherand)
- Modify: `sw.js` (`VERSION` → `v75`)

**Interfaces:**
- Consumes: `Hintergrund.wahl()`, `aktuelleArt()`, `setzen(teil)`, `zuruecksetzen()`.

- [ ] **Step 1: HTML.** Karte mit `karte-titel` „Aussehen“; `select#einst-grund` mit `auto` „Wie iPhone (hell = Papier, dunkel = Pappe)“, `papier` „Papier“, `pappe` „Pappe“; Hinweis `#einst-grund-jetzt` („Gerade: Pappe“); `input[type=range]#einst-hell` und `#einst-waerme` (min 0, max 100, step 1) mit Labels „Helligkeit“ und „Wärme“; `button.knopf-klein#knopf-grund-zurueck` „Zurücksetzen“.

- [ ] **Step 2: `app.js`.** Beim Öffnen: Auswahl und Regler auf die Werte der gerade gezeigten Art. `change` an der Auswahl → `Hintergrund.setzen({ art })`, Regler neu füllen. `input` an den Reglern → `Hintergrund.setzen({ [art]: { hell, waerme } })` (wirkt sofort beim Ziehen). Knopf → `Hintergrund.zuruecksetzen()`, Regler neu füllen. Der Hinweis „Gerade: …“ zeigt die Art, für die die Regler gelten.

- [ ] **Step 3: Prüfen im Browser-Pane** (393 × 852, hell und dunkel): Umschalten wirkt sofort; Regler ziehen ändert den Hintergrund flüssig; „Zurücksetzen“ stellt die Entwurfsfarbe her; nach Neuladen bleibt alles; „Sichern“ → Datei enthält `einstellungen.hintergrund`. Testdaten danach löschen.

- [ ] **Step 4: Alle Tests** → PASS.

---

### Task 4: Schrift Caveat

**Files:**
- Create: `schriften/caveat-500.woff2`, `schriften/caveat-600.woff2` (heruntergeladen am 18.11. von `@fontsource/caveat@5.3.0`, Teilmenge „latin“; liegen im Scratchpad unter `caveat-download/` – dorthin kopieren; falls nicht mehr da: Nicole fragen, bevor neu heruntergeladen wird)
- Modify: `style.css` (`@font-face` für Gewicht 500 und 600, `font-display: swap`, relative URL `schriften/…`; Variable `--hand: 'Caveat', var(--serif)`)
- Modify: `LIZENZEN.md` (Abschnitt „Schrift Caveat“: Copyright 2014 The Caveat Project Authors, SIL Open Font License 1.1, Quelle github.com/googlefonts/caveat, Dateien über Fontsource)
- Modify: `sw.js` (beide Dateien in `DATEIEN`, `VERSION` → `v76`)

- [ ] **Step 1: Dateien kopieren und einbinden.**

- [ ] **Step 2: Schrift zuordnen.** Caveat (`font-family: var(--hand)`) für: `.kopf h1`, `.kopf-klein`, `.karte-titel`, `.lektion-eintrag .karte-titel`, `.abschnitt`, `.knopf-haupt`, `.knopf-zweit`, `.knopf-klein`, `.knopf-zurueck`, Text der Leiste unten (`.leiste button`) und oben (`#oben-leiste`). Größe je Stelle anheben, weil Caveat kleiner wirkt (Anhalt Entwurf 9: Gruß 42 px, Lektionsname 32 px, Hauptknopf 24 px, Nebenknopf 20 px, Leiste 14–16 px – Leiste dabei mindestens 14 px, sonst mindestens 16 px). Kein `text-transform`/Versalien. Nicht anfassen: `.frage-wort`, `.frage-text`, `.zahl-gross`, Lesetexte, Kacheln, Eingaben, Antworten, Notizen (bleiben Serif bzw. Systemschrift). `.kopf h1::after` (Unterstrich) in Ocker bleibt.

- [ ] **Step 3: Prüfen im Browser-Pane** (393 × 852, Papier und Pappe): Heute, Üben und Wörterbuch passen weiterhin ohne Scrollen; lange Lektionsnamen und Knopftexte brechen sauber um; im Netzwerk-Tab keine Anfrage an fremde Server; nach zweimal Neuladen offline (Service Worker) wird Caveat noch angezeigt.

- [ ] **Step 4: Alle Tests** → PASS.

---

### Task 5: Unterlagen nachziehen

**Files:**
- Modify: `CLAUDE.md` (Abschnitt „Design“: Look „Reiseskizze“ statt „Limo“ für Farben, Schrift, Hintergrund; Hinweis auf `hintergrund.js` in der Dateiliste; Limo-Regeln bleiben bis Etappe 2 stehen)
- Modify: `ROADMAP.md` (Zeile „Neuer Look“: Etappe 1 ✅, Etappe 2 und 3 ⬜; Reiseroute als späterer Schritt vormerken; Stand-Zeile und Balken nach den Regeln in CLAUDE.md)
- Modify: `TODO.md` (neu: „Neuen Look Etappe 1 auf dem iPhone ansehen – Papier/Pappe, Regler, Schrift. Lesbar? Gefällt die Wärme?“; der Punkt „Ocker mit eigener Schrift ansehen“ ist erledigt)
- Memory `look-entwuerfe.md` um die Entscheidungen vom 18.11. ergänzen (Limo A, Pappe statt Dunkel mit Reglern, Liste statt Reiseroute, fertige Rahmen)

- [ ] **Step 1: Texte anpassen.**
- [ ] **Step 2: Nicole Bescheid geben und fragen, ob committet werden soll.**
