# Lektion als Weg – Etappe 2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Tageslimit für neue Wörter entfernen; stattdessen vor einem Neue-Wörter-Schritt einmal eine Festigen-Runde, wenn die 7-Tage-Quote unter 55 % liegt; danach schlägt Limo eine Übung unter „Üben“ vor.

**Architecture:** Logik (testbar ohne Browser) in `vokabeln.js` und `wiederholung.js`; Oberfläche in `app.js`/`index.html`. Die Festigen-Runde ist ein Pseudo-Schritt in `naechsterSchritt()` (`art: 'festigen'`), kein Weg-Schritt.

**Tech Stack:** Reines JavaScript ohne Build, Tests mit `node --test` über `werkzeuge/test/laden.js`.

**Spec:** [docs/superpowers/specs/2026-11-16-lektion-als-weg-etappe2-design.md](../specs/2026-11-16-lektion-als-weg-etappe2-design.md)

## Global Constraints

- Keine Kosten, keine neuen Bibliotheken, keine Module (`<script>`-Dateien).
- Ruhige Oberfläche: keine Punkte, Serien, Warnungen; Limo nie traurig, kein Druck.
- Farben nur über Variablen in `style.css`; Nebenknopf = `.knopf-zweit`.
- Wort-IDs nicht ändern. Kein neues `FORMAT` nötig: alte Felder `fortschritt.neuHeute`, `fortschritt.neuExtra`, `einstellungen.neuProTag` werden nur nicht mehr gelesen.
- Bei jeder Änderung an App-Dateien `VERSION` in `sw.js` erhöhen (aktuell `v66` → `v67`).
- Schwelle: Quote `< 0.55` (`QUOTE_PAUSE`), erst ab 20 Antworten (`QUOTE_MIN_ANTWORTEN`), 7 Tage.
- Festigen-Runde: höchstens 7 Aufgaben, `ohneWertung` (ändert keine Fächer), höchstens einmal je `{ lektion, nr }`.
- Limo-Text vorher: „Erst festigen, was gerade schwer ist – dann kommen neue Wörter.“
- Commit nur, wenn Nicole es sagt.

## Review Focus

- Quote unter 55 %, Festigen gemacht, Quote bleibt niedrig → nächster „Los“ muss den Neue-Wörter-Schritt bringen, keine zweite Festigen-Runde (Task 1 Test `festigen nur einmal je Schritt`).
- Festigen-Runde mittendrin beendet → Weitermachen setzt sie fort; Merker ist schon gesetzt, also kommt danach nicht noch eine (Task 3, beim Start setzen).
- Keine schweren und keine jungen Wörter vorhanden → Festigen-Runde wäre leer → Schritt gilt als gemacht, sofort weiter zu neuen Wörtern (Task 1 Test `schwersteWoerter leer`, Task 3 leer-Zweig).
- Weniger als 20 Antworten (neue Nutzerin) → nie Festigen (Task 1 Test).
- Ohne offene Lektion (alle 36 fertig): normale Runde ohne `pause`, höchstens 3 neue Wörter pro Runde, kein Absturz bei leerer `neue()` (Task 1 Test `ohne Tageslimit`).

---

### Task 1: Tageslimit raus, Festigen-Logik in `vokabeln.js`

**Files:**
- Modify: `vokabeln.js` (Bereich `neuProTag` … `rundeZusammenstellen`, `aufnehmen`, Export)
- Modify: `werkzeuge/test/fehler-quote.test.js` (Test „Trefferquote …“ ersetzen)
- Delete: `werkzeuge/test/neu-pro-tag.test.js`
- Modify: `werkzeuge/test/heute.test.js` (Test „mehrHolen …“ löschen)
- Create: `werkzeuge/test/festigen.test.js`

**Interfaces:**
- Entfällt: `neuProTag`, `neuProTagWaehlen`, `neuHeute`, `neuGrenze`, `neuExtra`, `mehrHolen`, `pauseGrund`, `QUOTE_RUHIGER`, `MEHR_ANZAHL`; Feld `pause` im Ergebnis von `rundeZusammenstellen`; Option `neu` in `aufnehmen` (wird ignoriert).
- Bleibt: `trefferQuote()`, `ergebnisZaehlen(gut)`.
- `rundeZusammenstellen()` → `{ wiederholen, jung, neu, heute }`; `neu` = höchstens `NEU_PRO_RUNDE = 3` aus `neue()`, leer wenn `jungeWoerter().length >= 4`.
- Produces `Vokabeln.festigenNoetig(lektionId: string, nr: number) → boolean`: `trefferQuote() !== null && trefferQuote() < QUOTE_PAUSE` und `fortschritt.festigen` ist nicht `{ lektion: lektionId, nr }`.
- Produces `Vokabeln.festigenGemacht(lektionId, nr) → void`: setzt `fortschritt.festigen = { lektion, nr }`, speichert.
- Produces `Vokabeln.schwersteWoerter(anzahl = 7) → string[]`: Karten mit `Vokabeln.wort(id)`; Reihenfolge: (1) nicht jung, Fach 1, `falsch > 0`; (2) junge; (3) übrige nach Fach aufsteigend, dann `faellig` aufsteigend. Ohne Karten → `[]`.

- [ ] **Step 1: Tests schreiben** in `werkzeuge/test/festigen.test.js`:
  - `festigenNoetig: unter 20 Antworten nie` – 10× `ergebnisZaehlen(false)` → `false`.
  - `festigenNoetig: unter 55 % ja, ab 55 % nein` – 10 richtig + 20 falsch → `true`; danach 200 richtig → `false`.
  - `festigen nur einmal je Schritt` – Quote 33 %; `festigenNoetig('l01', 0) === true`; `festigenGemacht('l01', 0)`; `festigenNoetig('l01', 0) === false`; `festigenNoetig('l01', 3) === true`.
  - `schwersteWoerter: Fach 1 mit Fehlern zuerst` – drei Karten anlegen (a: fach 3; b: fach 1, falsch 2, ohne `kennen`; c: `kennen: 1`) → Ergebnis beginnt mit b, dann c, dann a.
  - `schwersteWoerter leer` – ohne Karten → `[]`.
  - `ohne Tageslimit` – frischer Stand: `rundeZusammenstellen()` hat kein Feld `pause`, `neu.length <= 3`; `typeof Vokabeln.neuProTag === 'undefined'`.
  In `fehler-quote.test.js` den Test „Trefferquote …“ ersetzen durch: `trefferQuote` null unter 20 Antworten, 0.6 bei 15/25.
- [ ] **Step 2:** `node --test "werkzeuge/test/*.test.js"` → neue Tests FAIL (`festigenNoetig is not a function`).
- [ ] **Step 3:** In `vokabeln.js` umsetzen wie in Interfaces; `neu-pro-tag.test.js` löschen, mehrHolen-Test in `heute.test.js` löschen.
- [ ] **Step 4:** `node --test "werkzeuge/test/*.test.js"` → alle PASS.

### Task 2: Limo-Vorschlag in `wiederholung.js`

**Files:**
- Modify: `wiederholung.js` (neue Funktion + Export)
- Test: `werkzeuge/test/festigen.test.js`

**Interfaces:**
- Produces `Wiederholung.festigenVorschlag() → { art: 'kapitel', kapitel: string } | { art: 'hoeren' } | { art: 'woerter' }`: reihum `kapitel` → `hoeren` → `woerter` → `kapitel` …; letzte Art in `fortschritt.festigenVorschlag`, beim Aufruf weiterschalten und speichern. Für `kapitel`: das Kapitel des neuesten Eintrags in `fehlerListe()` mit `art !== 'hoeren'` und `Grammatik.kapitel(x.kapitel)`; sonst das zuletzt geübte Kapitel (`fortschritt.grammatik`, Eintrag mit `geuebt`); gibt es keins → Grammatik überspringen (nächste Art im Kreis).

- [ ] **Step 1: Tests** in `festigen.test.js`:
  - `Vorschlag reihum Grammatik, Hören, Vokabeln` – Fehler für `artikel` merken; Aufrufe 1–4: `{ art: 'kapitel', kapitel: 'artikel' }`, `{ art: 'hoeren' }`, `{ art: 'woerter' }`, wieder `kapitel`.
  - `Vorschlag ohne Grammatik-Stand überspringt Grammatik` – frischer Stand → erster Aufruf `{ art: 'hoeren' }`, zweiter `{ art: 'woerter' }`, dritter `{ art: 'hoeren' }`.
- [ ] **Step 2:** Tests laufen → FAIL.
- [ ] **Step 3:** Umsetzen.
- [ ] **Step 4:** Alle Tests PASS.

### Task 3: Oberfläche (`app.js`, `index.html`)

**Files:**
- Modify: `index.html:538-545` (Einstellung „Neue Wörter pro Tag“ samt Text entfernen), `index.html:646` (`knopf-mehr-woerter` → umbenennen in `knopf-vorschlag`, Text leer, `hidden`)
- Modify: `app.js`

**Interfaces:**
- Consumes: `Vokabeln.festigenNoetig`, `festigenGemacht`, `schwersteWoerter` (Task 1); `Wiederholung.festigenVorschlag` (Task 2).
- Entfernen in `app.js`: `mehrWoerterMoeglich`, `PAUSE_TEXT` und `pause` in `zeigeStart`, `zeigeNeuHeute` + Listener `neu-pro-tag`, `el('neu-pro-tag').value = …` (Zeile ~67), Listener `knopf-mehr-woerter`, `{ neu: !abfrage.weg }` in den zwei `aufnehmen`-Aufrufen, alle `mehr`-Zweige auf der Ende-Seite (Texte ohne „hol dir neue Wörter“).
- `naechsterSchritt()`: liefert der Weg einen Schritt mit `schritt.art === 'woerter'` und `Vokabeln.festigenNoetig(l.id, w.nr)`, dann `{ art: 'festigen', lektion: l, nr: w.nr, name: 'Erst festigen: Wörter, die gerade schwer sind' }`.
- `oeffneNaechstes`: `festigen` → `starteFestigen(n)`. `naechstesAnbieten`: Knopftext `festigen: 'Festigen'`.
- `starteFestigen(n)`: zuerst `Vokabeln.festigenGemacht(n.lektion.id, n.nr)`; dann `abfrage.festigen = true`, Runde aus `schwersteWoerter(7)` → je Wort `Saetze.hat(id) ? Saetze.aufgabe(id, 1 + i % 3, { ohneWertung: true }) : { art: i % 2 ? 'frage' : 'deutsch', id, ohneWertung: true }`, `abfrage.ohneWertung = true`. Vor dem Start Limo-Text aus Global Constraints (dort, wo die App sonst vor Runden einen Begleiter-Text zeigt; sonst als `ende-text`-ähnlicher Hinweis oben in der Runde – Builder wählt). Leer → direkt `zeigeStart()`.
- `starteRunde` setzt `abfrage.festigen = false` in allen anderen Zweigen; `stelleMerken('runde')` merkt `festigen`, `weitermachen` stellt es wieder her.
- `beendeRunde`: zu Ende und `abfrage.festigen` → `zeigeFestigenEnde()`: Titel „Gefestigt“, Limo `freut`: „Gut gefestigt! Wenn du magst, probier noch …“ + Name des Vorschlags; `naechstesAnbieten(naechsterSchritt())` (Hauptknopf = Neue Wörter); `knopf-vorschlag` sichtbar mit „Grammatik: <Titel>“ → `oeffneKapitel(k, 'ueben')` bzw. „Hören & Üben“ → `starteHoeren()` bzw. „Vokabelkasten“ → `zeigeKasten()`. Auf allen anderen Ende-Seiten `knopf-vorschlag` verstecken.

- [ ] **Step 1:** Umsetzen; `node --test "werkzeuge/test/*.test.js"` → PASS.
- [ ] **Step 2:** `VERSION` in `sw.js` auf `v67`.
- [ ] **Step 3: Browser-Prüfung** (Konfiguration `italienisch`, 393 × 852, hell und dunkel): per Konsole Testdaten setzen (Lektion begonnen, nächster Schritt `woerter`, `fortschritt.tage` mit 10/30) → Startseite zeigt „Erst festigen …“; „Los“ → Festigen-Runde; zu Ende → Ende-Seite mit Hauptknopf „Weiter: Schritt …“ und Nebenknopf Vorschlag; erneut „Los“ → Neue-Wörter-Schritt. Einstellungen: „Neue Wörter pro Tag“ weg. Konsole ohne Fehler. Danach `localStorage.removeItem('italienisch-daten')`.

### Task 4: Doku nachziehen

**Files:** `CLAUDE.md`, `ROADMAP.md`, `TODO.md`

- [ ] **Step 1:** `CLAUDE.md`: Zeile „Neue Wörter pro Tag …“ ersetzen durch Festigen-Beschreibung (`festigenNoetig`, `festigenGemacht`, `schwersteWoerter`, `fortschritt.festigen`, `Wiederholung.festigenVorschlag`, `knopf-vorschlag`); „Mehr neue Wörter holen“ und `neuGrenze` aus den anderen Zeilen streichen; Test `festigen.test.js` nennen.
- [ ] **Step 2:** `ROADMAP.md`: Zeile „Lektion als Weg (Etappe 2)“ → ✅ – wartet auf Nicoles Blick, Text kurz anpassen (Spec und Plan verlinken).
- [ ] **Step 3:** `TODO.md`: neuer Punkt „Festigen ausprobieren“ (einfach formuliert: wann es kommt, Fragen: hilft der Vorschlag? zu oft?); Punkt „Neue Wörter pro Tag einstellen“ abhaken als „entfällt (16.11.2026)“.
- [ ] **Step 4:** Nicole fragen, ob committet werden soll.
