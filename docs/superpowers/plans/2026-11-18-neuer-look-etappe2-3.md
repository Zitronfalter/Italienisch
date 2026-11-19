# Neuer Look, Etappe 2 und 3 – Bauplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans. Steps use checkbox (`- [ ]`) syntax.

**Goal:** Gezeichnete Rahmen und Knöpfe auf allen Bildschirmen, Limo raus, neues App-Symbol (Etappe 2); Reiseskizze je Lektion auf „Heute“ und klein in der Lektionsliste (Etappe 3).

**Architecture:** Rahmen = wenige fertige SVG-Dateien in `rahmen/`, erzeugt von `werkzeuge/rahmen-bauen.js`, als 9-teilige Maske (`-webkit-mask-box-image`) auf einem `::after` der Elemente. Die Farbe kommt aus der Variable `--rahmen` (so bleiben Zustände wie „gewählt“, „richtig“, „noch nicht“ farbig). Skizzen: Motivdaten und Zeichnen aus Entwurf 10 in `skizzen.js`, Zuordnung Lektions-ID → Motiv + Abwandlung in `skizzen-zuordnung.js` (erzeugt von `werkzeuge/skizzen-zuordnung.js` aus der Liste in Entwurf 10), Zeichnen erst im Sichtfeld, fertige SVG zwischengespeichert in `localStorage['italienisch-skizzen']`.

**Tech Stack:** HTML/CSS/JS ohne Build, `node --test`, Edge headless für die App-Symbol-PNGs.

**Spec:** `docs/superpowers/specs/2026-11-18-neuer-look-design.md`

## Global Constraints

- Wie Etappe 1 (keine Kosten, nichts aus dem Internet, relative Pfade, `VERSION` in `sw.js` erhöhen, neue Dateien in `DATEIEN`, Lernstand unverändert, Commit nur auf Nicoles Wort).
- Rahmen: Tuschelinie mit Architekten-Zitterstrich (±0,5 px, Punkte alle 3,5 px), Enden stehen an den Ecken über, nicht schräg. Ecken nur leicht gerundet (3 px).
- Hauptknopf: Ocker-Fläche mit Tuscherahmen; Nebenknopf: Rahmen und Schrift in `--akzent-linie`.
- Kacheln wie Papierschnipsel; Ziehen und `kachel-luecke` unverändert.
- Limo: keine Figur mehr (Heute, Üben, Lektion, Ende, Übungs-Karte); Texte bleiben als Notiz. `limo.js` bleibt im Projekt, wird aber nicht mehr geladen.
- Skizzen-Zuordnung über Lektions-ID; Wiederholungen nehmen die Skizze der Lektion davor; Bildunterschrift = italienischer Titel `bild` des Motivs.
- „Heute“, „Üben“, Wörterbuch passen ohne Scrollen in 393 × 852 (Papier und Pappe).

## Review Focus

1. Zustände in Übungen (gewählt, richtig, noch nicht, Wortpaare daneben, Eingabe mit Fokus) bleiben nach dem Rahmen-Umbau erkennbar. *Prüfung in Task 1 im Browser.*
2. Kachel ziehen auf dem Handy: Rahmen bewegt sich mit, nichts springt. *Prüfung in Task 1.*
3. Neue Lektion, die später eingefügt wird, oder Lektion ohne Eintrag in der Zuordnung → keine Skizze statt Fehler. *Test in Task 3.*
4. Lektionsliste mit 149 Einträgen scrollt flüssig (Skizzen erst im Sichtfeld, Zwischenspeicher). *Prüfung in Task 4.*
5. Zwischenspeicher voll oder kaputt (localStorage-Fehler) → Skizze wird trotzdem gezeichnet, Lernstand unberührt. *Test in Task 3.*

---

### Task 1: Gezeichnete Rahmen

**Files:** Create `werkzeuge/rahmen-bauen.js`, `rahmen/kasten.svg`, `rahmen/knopf.svg`, `rahmen/fein.svg`; Modify `style.css`, `sw.js`.

- [ ] Generator schreibt drei SVGs (100 × 60, schwarze Linie auf transparent, Linien 5 px vom Rand, an den Ecken bis 1 px überstehend, Zitterstrich fest gesät): `kasten` 1.5 px, `knopf` 2.2 px, `fein` 1.2 px. `node werkzeuge/rahmen-bauen.js` erzeugt die Dateien.
- [ ] CSS: Gruppen über Variable `--rahmen-bild` und `--rahmen` (Farbe). `::after` mit `inset: -3px`, `background: var(--rahmen)`, `-webkit-mask-box-image: var(--rahmen-bild) 12 / 12px stretch`, `pointer-events: none`; Element `position: relative`, eigener Rand transparent, Ecken 3 px.
  - Kasten (Tusche): `.karte`, `.tabelle-rahmen`, `.treffer-liste`, `.woerter-gruppe`, `.wortcheck-liste`, `.kasten-fach`, `.weg-schritt-knopf`.
  - Hauptknopf (Ocker-Fläche, Tusche, `knopf`): `.knopf-haupt`, `.knopf-los`, `.knopf-klein-voll`.
  - Nebenknopf (`--akzent-linie`, `knopf`): `.knopf-zweit`, `.knopf-klein`, `.knopf-plus`; hervorgehoben (`.lektion-eintrag.jetzt`, `.weg-schritt.jetzt .weg-schritt-knopf`) ebenso.
  - Fein (`--text-leise`): `.knopf-zurueck`, `.antwort`, `.paar`, `.wortcheck-wahl button`, `.filter-knopf`, `.eingabe-feld`, `.kachel`, `.wort-blatt`.
  - Zustände setzen `--rahmen` statt `border-color` (gewählt/aktiv/Fokus = `--akzent-linie`, richtig = `--richtig`, noch nicht/daneben = `--fehler`).
- [ ] Notiz statt Sprechblase: `.begleiter-blase` ohne Spitze, Papierzettel (`rgba(255,255,255,.4)`, leicht gedreht −1°, feiner Schatten).
- [ ] `sw.js`: drei SVGs in `DATEIEN`, `VERSION` +1.
- [ ] Prüfen im Browser (Review Focus 1–2), alle Tests grün.

### Task 2: Limo raus, App-Symbol

**Files:** Modify `begleiter.js`, `index.html`, `app.js`, `style.css`, `manifest.webmanifest`, `sw.js`; Create neues `icons/icon.svg`, `icons/icon-180.png`, `-192.png`, `-512.png`.

- [ ] `Begleiter.zeigen` setzt nur noch Text und `data-stimmung` (kein Bild); `Begleiter.uebungLimo` entfernt eine vorhandene `.frage-limo` und zeichnet nichts. `.begleiter-bild` ausgeblendet. MutationObserver in `app.js` (Limo in Übungen) entfernen.
- [ ] `index.html`: `<script src="limo.js">` raus; `sw.js`: `limo.js` aus `DATEIEN` (Datei bleibt).
- [ ] App-Symbol: Zitrone in Tusche mit Zitterstrich, zart laviert (Gelb), auf Papier-Hintergrund, im Stil der Skizzen; PNGs per Edge headless aus der SVG. `manifest.webmanifest`: `background_color`/`theme_color` `#fbfaf5`.
- [ ] Tests (auch `limo.test.js`) grün; Browser: Heute/Üben/Übung ohne Figur, Notiz da.

### Task 3: Skizzen-Datei und Zuordnung

**Files:** Create `skizzen.js`, `werkzeuge/skizzen-zuordnung.js`, `skizzen-zuordnung.js`, `werkzeuge/test/skizzen.test.js`; Modify `werkzeuge/test/laden.js`.

**Interfaces (Produces):**
- `SKIZZEN_ZUORDNUNG = { [lektionId]: [motivKey, variante 0–3] }` (nur echte Lektionen; erzeugt aus Entwurf 10 über `Lektionen.anzeigeNr`).
- `Skizzen.fuer(lektion) -> { key, variante, bild } | null` (Wiederholung → Lektion davor in `Lektionen.alle()`; unbekannte ID → `null`).
- `Skizzen.svg(key, variante) -> string` (ganzes `<svg>`; braucht DOM für den Zitterstrich), mit Zwischenspeicher `localStorage['italienisch-skizzen']` (Schlüssel `key:variante:VERSION`), Fehler beim Speichern werden ignoriert.
- `Skizzen.einhaengen(element, lektion)` – zeichnet, sobald sichtbar (IntersectionObserver; ohne ihn sofort).

- [ ] Tests: jede echte Lektion hat einen Eintrag mit bekanntem Motiv; jedes Motiv höchstens 4-mal, gleiche Motive ≥ 15 Lektionen auseinander; Wiederholung bekommt die Skizze der Lektion davor; unbekannte ID → `null`; `Skizzen.MOTIVE[key].bild` ist bei allen 58 gesetzt.
- [ ] Zeichen-Code (Motive, `skizze()`, `abwandeln()`, `zitterD`) aus Entwurf 10 übernehmen; Filter `aquarell-voll` einmal ins Dokument einfügen.
- [ ] `sw.js`: neue Dateien, `VERSION` +1; Tests grün.

### Task 4: Skizzen anzeigen

**Files:** Modify `index.html`, `app.js`, `style.css`.

- [ ] „Heute“: unter der Überschrift die Skizze der aktuellen Lektion mit Bildunterschrift (kursiv, Serif, leise). Ohne Lektion: keine Skizze. Seite muss ohne Scrollen passen (Skizze notfalls kleiner).
- [ ] Lektionsliste: kleine Skizze (etwa 96 × 62 px) links in jedem Eintrag; gezeichnet erst im Sichtfeld.
- [ ] Prüfen: Heute Papier/Pappe ohne Scrollen, Liste scrollt flüssig, Konsole leer; alle Tests grün.

### Task 5: Abschluss

- [ ] `CLAUDE.md` (Dateien, Design), `ROADMAP.md`, `TODO.md`, Memory anpassen; Abschlussprüfung durch frischen Prüfer; wichtige Funde beheben.
