# Menü mit Leiste unten und „Meine Wörter“ – Bauplan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Startseite entschlacken (Leiste unten: Heute · Lektionen · Üben · Mein Stand) und eine Wortliste mit Stand und „Deutsch verdecken“ bauen.

**Architecture:** Gleiches Bildschirm-System wie bisher (`zeige(name)`), dazu eine feste `<nav>` außerhalb der Sections; `zeige()` blendet sie je nach Bildschirm ein und markiert den Reiter. Wortliste-Logik in neuer Datei `woerterliste.js` (ohne DOM, testbar), Anzeige in `app.js`.

**Tech Stack:** Vanilla JS, `<script>`-Dateien, kein Build; Tests mit `node --test`.

**Spec:** `docs/superpowers/specs/2026-11-15-menue-wortliste-design.md`

## Global Constraints
- Keine Kosten, keine Fremd-Schriften, keine Emoji-Icons (Linien-SVG, `currentColor`).
- Farben nur über Variablen in `style.css`; Gelb nie als Schrift auf Creme.
- `VERSION` in `sw.js` erhöhen; `woerterliste.js` in `DATEIEN` eintragen.
- Kein neues Speicherformat (`FORMAT` bleibt). Wort-IDs nicht ändern.
- Kein Commit ohne Nicoles Okay (CLAUDE.md) – Commit-Schritte entfallen.

## Review Focus
- Leiste darf Inhalte unten nicht verdecken (letzter Knopf, Safe-Area am iPhone).
- Leiste darf in Runde/Übung/Aufgaben/Hören/Lesen/Test/Wortcheck/Eigener-Text nicht erscheinen (Tastatur!).
- „Weitermachen“ nach Neustart muss weiter funktionieren (Startseite zeigt Weiter-Karte).
- Wortliste mit 2.285 Wörtern muss flüssig öffnen (keine `WORTSCHATZ.find` pro Wort).
- Wörter, die in keiner Lektion stehen, und eigene Wörter dürfen nicht fehlen.

---

### Task 1: Wort-Stand und Gruppen (`woerterliste.js`)

**Files:** Create `woerterliste.js`, `werkzeuge/test/woerterliste.test.js`; Modify `index.html` (Script nach `lektionen.js`), `sw.js` (`DATEIEN`).

**Interfaces – Produces:**
- `Woerterliste.stand(id) -> 'sitzt' | 'uebt' | 'kennenlernen' | 'nichtDran'` (keine Karte → nichtDran; `Vokabeln.istJung` → kennenlernen; `fach >= 4` → sitzt; sonst uebt)
- `Woerterliste.gruppen() -> [{ titel, untertitel, aktuell: bool, woerter: [{ id, it, de, stand }] }]` – Lektionen ohne Wiederholungen in Lernweg-Reihenfolge (Titel `Lektion <anzeigeNr> · <titel>`), danach „Weitere Wörter“ (Wortschatz ohne Lektion, nur wenn vorhanden), danach „Eigene Wörter“ (nur wenn vorhanden). Jedes Wort genau einmal (erste Lektion gewinnt).
- `Woerterliste.zaehlen() -> { sitzt, uebt, kennenlernen, nichtDran }`

- [ ] Tests: Stand für keine Karte / jung / Fach 1 / Fach 4; Gruppen ohne ripasso; eigenes Wort erscheint in „Eigene Wörter“; kein Wort doppelt; Summe von `zaehlen()` = Anzahl Wörter in allen Gruppen.
- [ ] Laufen lassen → FAIL. Implementieren. → PASS (`node --test "werkzeuge/test/*.test.js"`).

### Task 2: Leiste unten und vier Reiter

**Files:** Modify `index.html`, `app.js`, `style.css`, `sw.js`.

- Neue Screens `screen-lektionen` (Abschnitt „Deine Lektionen“ + Erledigt verschoben) und `screen-ueben` (4 Karten Lesen/Grammatik/Hören/Wörterbuch verschoben). Startseite behält Gruß, Limo, Heute, Weiter-Karte, „Los“, dazu Karte „Jetzt dran“ (aktuelle Lektion, `lektionKnopf(l,'jetzt')`).
- `screen-fortschritt` heißt „Mein Stand“: oben Knopf „Alle Wörter ansehen“ unter „Wörter, die sitzen“; unten Knopf „Sichern & Laden“; Zurück-Knopf entfällt.
- `<nav id="leiste">` mit 4 Knöpfen `data-reiter="heute|lektionen|ueben|stand"`, `aria-current` für den aktiven.
- `REITER_VON = { start:'heute', lektion:'lektionen', lektionen:'lektionen', ueben:'ueben', texte:'ueben', grammatik:'ueben', kapitel:'ueben', woerterbuch:'ueben', fortschritt:'stand', woerter:'stand', daten:'stand' }`; `zeige()` zeigt Leiste nur für diese Screens, `body.mit-leiste` für Abstand unten.
- `data-zurueck` bekommt Ziel: `texte`/`grammatik`/`woerterbuch` → `ueben`, `daten`/`woerter` → `stand`, sonst Start.

- [ ] Bauen, Tests laufen lassen, im Browser alle Reiter und Zurück-Wege prüfen.

### Task 3: Seite „Meine Wörter“

**Files:** Modify `index.html` (`screen-woerter`), `app.js` (`zeigeWoerter()`), `style.css`.

- Filter-Knöpfe (Alle · Sitzt · Übe ich noch · Lerne ich kennen · Noch nicht dran) mit Anzahl; Schalter „Deutsch verdecken“ (Checkbox mit Label).
- Gruppen als `<details>`; aktuelle Lektion offen; Gruppen ohne passende Wörter beim Filter ausgeblendet.
- Zeile: italienisch (Knopf → `sprichWort`), deutsch (verdeckt: Knopf „zeigen“), Stand-Zeichen + kurzes Wort (nicht nur Farbe).
- Filter/Verdecken nur im Speicher der Sitzung (nicht in `Speicher.daten`).

- [ ] Bauen, im Browser mit Testdaten prüfen (hell/dunkel, 393 × 852), Testdaten löschen.

### Task 4: Doku
- [ ] `ROADMAP.md`, `TODO.md`, `CLAUDE.md` (Dateien: `woerterliste.js`, Leiste/Reiter) anpassen.
