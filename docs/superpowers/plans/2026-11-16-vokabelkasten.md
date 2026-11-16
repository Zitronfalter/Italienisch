# Vokabelkasten Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Duolingo-Wörter einmalig in den Karteikasten übernehmen, eine Vokabelkasten-Seite unter „Üben“ (Fächer, fällige üben, Fach vorziehen) und Übungen, die lange nicht gesehene Wörter bevorzugen.

**Architecture:** Erweitert den vorhandenen Karteikasten in `vokabeln.js` (gleiche Karten `Speicher.daten.karten`, 5 Fächer). Neue Seite `screen-kasten` in `index.html`/`app.js` nutzt die vorhandene Runde (`starteRunde`). Übungen (`uebungen.js`, `erzeuger.js`, `paarFueller` in `app.js`) wählen Wörter über einen gemeinsamen Helfer `Vokabeln.langeNichtGesehen`.

**Tech Stack:** Reine Web-App (PWA) ohne Build, Skripte per `<script>`, Tests mit `node --test` über `werkzeuge/test/laden.js`.

**Spec:** `docs/superpowers/specs/2026-11-16-vokabelkasten-design.md`

## Global Constraints

- Keine Kosten, offline; `VERSION` in `sw.js` erhöhen; neue Dateien in `DATEIEN`.
- 5 Fächer, Abstände `{ 1: 1, 2: 3, 3: 7, 4: 16, 5: 35 }` bleiben; Wort-IDs nicht ändern; `FORMAT` bleibt 3.
- Duolingo-Karte: `{ fach: 3, faellig, richtig: 0, falsch: 0, quelle: 'duolingo' }`, kein `kennen`; 20 pro Tag fällig ab morgen, Reihenfolge nach Lernweg.
- Merker `Speicher.daten.duolingo = { uebernommen: 'JJJJ-MM-TT', anzahl }`.
- Vorziehen: bis zu 20 Wörter eines Fachs, mit Wertung. „Fällige üben“: `starteRunde({ nurFaellig: true })`.
- Oberfläche ruhig: nur Anzahlen, keine Punkte/Serien; Farben über Variablen in `style.css`; 393 × 852 ohne Scrollen, hell und dunkel.
- Alles auf Deutsch, Kommentare deutsch wie im übrigen Code.

## Review Focus

1. Vorhandene Karten (auch junge mit `kennen`) werden von der Übernahme nicht verändert.
2. Übernahme läuft nur einmal; zweiter App-Start ändert nichts.
3. Leeres Fach antippen: nichts passiert (kein leerer Runden-Bildschirm).
4. „Fällige üben“ bei 0 fälligen: Knopf aus, Hinweis „Heute ist nichts fällig.“
5. Karten ohne `zuletzt` zählen in `langeNichtGesehen` als am ältesten.

---

### Task 1: Übernahme und Helfer in `vokabeln.js`

**Files:**
- Modify: `vokabeln.js` (neue Funktionen, Rückgabe-Objekt)
- Modify: `app.js` (Aufruf beim Start neben `Lektionen.uebergang()`)
- Test: `werkzeuge/test/kasten.test.js` (neu)

**Interfaces:**
- Produces: `Vokabeln.duolingoUebernehmen(): number` (Anzahl neu angelegter Karten; 0 wenn Merker gesetzt),
  `Vokabeln.gesehen(id): void` (setzt `zuletzt = heute()`, ändert sonst nichts, ohne Karte nichts),
  `Vokabeln.langeNichtGesehen(ids: string[], n: number): string[]` (n zufällige aus den ältesten `3*n` nach `zuletzt`, ohne `zuletzt` zuerst),
  `Vokabeln.fachUebersicht(): { fach, anzahl, faellig }[]` (5 Einträge, Fach 1–5, nur Karten mit `wort(id)` und ohne `istJung`),
  `Vokabeln.fachIds(fach: number): string[]` (Karten des Fachs, nicht jung).

- [ ] **Step 1: Tests schreiben** in `werkzeuge/test/kasten.test.js`:
  - `duolingoUebernehmen legt Karten in Fach 3 an`: frisches `laden()`; Rückgabe `> 500`; Karte zu `wortId('il caffè')` hat `fach === 3`, `quelle === 'duolingo'`, kein `kennen`.
  - `höchstens 20 pro Tag fällig, erste ab morgen`: Zählung der `faellig`-Daten der Duolingo-Karten → kein Datum mehr als 20-mal; kleinstes Datum `=== Vokabeln.inTagen(1)`.
  - `vorhandene Karten bleiben unverändert`: vorher `karten[wortId('il caffè')] = { fach: 1, faellig: 'x', richtig: 0, falsch: 2, kennen: 1 }` → nach Übernahme identisch (`deepStrictEqual`).
  - `läuft nur einmal`: zweiter Aufruf gibt `0` zurück.
  - `langeNichtGesehen bevorzugt alte`: 10 Karten, `zuletzt` = Tag 1…10 und eine ohne `zuletzt`; `langeNichtGesehen(ids, 1)` liefert eine aus den 3 ältesten (inkl. der ohne Datum), 50 Durchläufe.
  - `gesehen setzt zuletzt, nicht fach`.
  - `fachUebersicht`: 5 Einträge, Summe `anzahl` = Zahl der nicht jungen Karten.
- [ ] **Step 2:** `node --test werkzeuge/test/kasten.test.js` → FAIL (Funktionen fehlen).
- [ ] **Step 3: Implementieren** in `vokabeln.js`. Reihenfolge für die Übernahme: Wörter nach `Lektionen.alle()`-Reihenfolge (erste Lektion zuerst), Wörter ohne Lektion zuletzt; `faellig = inTagen(1 + Math.floor(i / 20))`. Merker setzen, `Speicher.speichern()`. In `app.js` direkt nach `Lektionen.uebergang();` aufrufen.
- [ ] **Step 4:** `node --test "werkzeuge/test/*.test.js"` → alle PASS.

### Task 2: Vokabelkasten-Seite

**Files:**
- Modify: `index.html` (Üben-Karte `knopf-kasten` als erste Karte, neue `<section id="screen-kasten">`)
- Modify: `app.js` (`REITER_VON.kasten = 'ueben'`, `zeigeKasten()`, Klick-Handler, `starteRunde`-Option, Rückweg nach der Runde, Untertitel der Üben-Karte)
- Modify: `style.css` (Fach-Zeilen, Balken, Symbol-Farbe)

**Interfaces:**
- Consumes: `Vokabeln.fachUebersicht()`, `Vokabeln.fachIds(fach)`, `Vokabeln.langeNichtGesehen(ids, 20)`, `Vokabeln.faellige()`.
- Produces: `zeigeKasten()`; `starteRunde({ ids, wertung: true, zurueck: 'kasten' })` und `starteRunde({ nurFaellig: true, zurueck: 'kasten' })`: Schritte wie bei fälligen Wörtern (`richtungFuer` → 'deutsch' | 'frage'), `abfrage.ohneWertung = false`; nach Rundenende `zeigeKasten()` statt Startseite/Ende-Seite, wenn `abfrage.zurueck === 'kasten'`.

- [ ] **Step 1:** Seite bauen: Kopf „Vokabelkasten“, kurze Zeile „x Wörter · y fällig“, 5 Zeilen als Knöpfe (`data-fach="1"` …) mit „Fach n“, Anzahl, „z fällig“, Balken (Breite = Anteil am größten Fach); Hauptknopf `knopf-kasten-faellig` „Fällige üben (y)“, bei 0 `disabled` und Hinweis „Heute ist nichts fällig.“; Zeile darunter „Fach antippen: Wörter vorziehen“; `.knopf-zurueck` mit `data-zurueck="ueben"`. Üben-Karte: Titel „Vokabelkasten“, Text „x Wörter · y fällig“.
- [ ] **Step 2:** Fach-Klick: `ids = Vokabeln.langeNichtGesehen(Vokabeln.fachIds(f), 20)`; leer → nichts tun.
- [ ] **Step 3:** Runde: Option `wertung` in `starteRunde` (Zweig neben `optionen.ids`), `abfrage.zurueck` setzen und in `beendeRunde` auswerten; `stelleMerken('runde')` muss `zurueck` mitspeichern, damit „Weitermachen“ wieder im Kasten endet.
- [ ] **Step 4:** Browser (393 × 852, hell und dunkel): Seite passt ohne Scrollen; Fach 3 antippen → Runde mit Wertung → danach wieder Kasten mit geänderten Zahlen; „Fällige üben“ bei 0 aus. Testdaten danach zurücksetzen.
- [ ] **Step 5:** `node --test "werkzeuge/test/*.test.js"` → PASS.

### Task 3: Übungen bevorzugen lange nicht gesehene Wörter

**Files:**
- Modify: `uebungen.js` (`paare` ohne ids; `bekanntBis`)
- Modify: `app.js` (`paarFueller`; richtig zugeordnetes Paar → `Vokabeln.gesehen(id)`)
- Modify: `erzeuger.js` (`auswahl`, `nomenAuswahl`; benutztes Wort → `Vokabeln.gesehen`)
- Modify: `schon-bekannt.js` (`SchonBekannt.wortBekannt(form): boolean` – einzelnes Wort aus irgendeinem Eintrag, ohne Artikel-Logik)
- Test: `werkzeuge/test/kasten.test.js`

**Interfaces:**
- Consumes: `Vokabeln.langeNichtGesehen`, `Vokabeln.gesehen` (Task 1).
- Produces: `SchonBekannt.wortBekannt(form)`.

- [ ] **Step 1: Tests:**
  - `Wortpaare nehmen lange nicht gesehene Wörter`: 30 Karten (nicht jung), 5 davon ohne `zuletzt`, Rest `zuletzt = heute()`; `Uebungen.paare(5)` → mindestens 3 der 5 Paare stammen aus den 5 alten (20 Durchläufe, jeweils).
  - `wortBekannt`: `'caffè'`, `'grazie'`, `'mille'` → true; `'bancone'` → false.
  - `Hören erlaubt bekannte Duolingo-Wörter`: `Uebungen.frischeSaetze()` mit aktueller Lektion 1 liefert mehr Sätze als vorher (Vergleich mit `SchonBekannt.wortBekannt = () => false`).
- [ ] **Step 2:** Tests laufen lassen → FAIL.
- [ ] **Step 3:** Implementieren. `paare`: Kandidaten = `langeNichtGesehen(nicht junge Karten, 12)` gemischt, danach wie bisher `WORTSCHATZ` als Auffüllung. `paarFueller`: `gelernt` durch `langeNichtGesehen(gelernt, anzahl * 2)` ersetzen. `bekanntBis`: Wort ist auch ok, wenn `SchonBekannt.wortBekannt(w)` oder eine Karte zu `wortId(w)` existiert. Erzeuger: unter `gekannt` mit `langeNichtGesehen` auf höchstens 30 einschränken, bevor zufällig gewählt wird.
- [ ] **Step 4:** `node --test "werkzeuge/test/*.test.js"` → PASS.

### Task 4: Abschluss

**Files:** `sw.js`, `ROADMAP.md`, `TODO.md`, `CLAUDE.md`

- [ ] **Step 1:** `VERSION` erhöhen. ROADMAP-Zeile „Vokabelkasten wie Phase 6“ (✅ – wartet auf Nicoles Blick); TODO: „Vokabelkasten ausprobieren“ (passen 20 am Tag? Fach vorziehen verständlich?); CLAUDE.md: Abschnitt zu `screen-kasten`, `duolingoUebernehmen`, `langeNichtGesehen`, `gesehen`.
- [ ] **Step 2:** Alle Tests, Browser-Check, Commit nur nach Nicoles OK.
