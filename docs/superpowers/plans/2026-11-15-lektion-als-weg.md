# Lektion als Weg – Bauplan (Etappe 1)

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Jede Lektion wird ein Weg aus kurzen Schritten (jeder 3. bringt 4–5 neue Wörter); „Los“ = fällige Wörter → fällige Grammatik → nächster Schritt.

**Architecture:** Weg-Erzeugung und Schritt-Stand in `lektionen.js` (ohne DOM, testbar). Ein Weg-Steuerteil in `app.js` startet Schritte mit den vorhandenen Aktivitäten (Runde, Kapitel, Text, Hören, Aufgaben) und bekommt am Ende jeder Aktivität Bescheid (`wegSchrittFertig`). Alte Teile-Logik (`teile`, `naechsterTeil`) bleibt für Übergang und Tests.

**Tech Stack:** Vanilla JS, `<script>`-Dateien, `node --test`.

**Spec:** `docs/superpowers/specs/2026-11-15-lektion-als-weg-design.md`

## Global Constraints
- Kein Lernstand darf verloren gehen; `FORMAT` 3 mit Übergang aus 2; Wort-IDs unverändert.
- Keine Punkte/XP/Serien; Farben nur über Variablen; `VERSION` in `sw.js` erhöhen.
- Kein Commit ohne Nicoles Okay.
- Bestehende Tests bleiben grün (alte `teile`/`naechsterTeil` bleiben erhalten).

## Review Focus
- Weitermachen nach App-Neustart mitten in einem Schritt → Schritt wird danach als gemacht gezählt.
- Lektion mit Wörtern, die schon alle Karten haben → Wörter-Schritte werden übersprungen, Weg endet nicht in einer Schleife.
- Lektion ohne Kapitel/Text (Wort-Lektion) und Wiederholung (`ripasso`, keine Wörter) → gültiger Weg.
- Alter Lernstand: halb fertige Lektion → Weg startet beim ersten offenen Schritt, erledigte bleiben erledigt.
- „Los“ ohne fällige Wörter und ohne fällige Grammatik → direkt der Schritt, keine leere Ende-Seite.

---

### Task 1: Weg erzeugen und Schritt-Stand (`lektionen.js`)

**Files:** Modify `lektionen.js`, `speicher.js` (FORMAT 3 für neue Stände); Test `werkzeuge/test/weg.test.js`.

**Interfaces – Produces:**
- `Lektionen.weg(l) -> [{ art: 'woerter'|'ueben'|'kapitel'|'text'|'hoeren'|'uebungen'|'abschluss', ids?: [wortId], kapitel?: id, text?: id, name: string }]`
  - Päckchen: `Math.ceil(n/5)` Päckchen, gleichmäßig verteilt (13 → 5,4,4; 5 → 5; 0 → keins).
  - Je Päckchen: `woerter{ids}`, `ueben{ids: alle Wörter der bisherigen Päckchen}`, Festigen-Platz. Festigen-Plätze der Reihe nach: Kapitel (`l.kapitel`), Texte, `hoeren` (nicht bei ripasso); freie Plätze → `ueben{ids: alle bisherigen}`; Reste davon als eigene Schritte; zuletzt `abschluss`.
  - `ripasso`: `[uebungen, text…]` (kein abschluss).
  - Wort-Lektion: Kapitel-Liste ist leer; `uebenKapitel` nicht als Schritt.
- `Lektionen.schrittNr(l) -> number` (gespeichert `fortschritt.lektionen[id].schritt`, Standard 0)
- `Lektionen.schrittErledigt(l, schritt) -> bool` – Inhalt schon fertig (woerter: alle ids mit Karte; kapitel: geübt; text: verstanden; sonst false)
- `Lektionen.naechsterWegSchritt(l) -> { nr, schritt } | null` – überspringt fertige (`schrittErledigt`) und speichert dabei `schritt`; null wenn Weg zu Ende
- `Lektionen.schrittGemacht(lektionId, nr)` – `schritt = max(schritt, nr+1)`; bei Ende → `erledigt`
- `aktualisieren()` zusätzlich: Weg zu Ende → erledigt (alte Bedingung bleibt)
- `uebergang()` ab Format 2 → 3: für begonnene, nicht erledigte Lektionen `schritt` = erster Index, dessen Schritt nicht `schrittErledigt` (für ueben/hoeren/abschluss: zählt als gemacht, wenn alle davor liegenden woerter-Schritte erledigt sind und der alte Teil fertig war: hoeren → `teilHoeren`, ueben → Wörter des Päckchens nicht jung).

- [ ] Tests (`weg.test.js`): Päckchengrößen 13/12/5/3/0; Reihenfolge für Lektion mit 1 Kapitel + 1 Text (10 Schritte wie im Spec-Beispiel); Wort-Lektion; ripasso; `naechsterWegSchritt` überspringt Päckchen mit lauter bekannten Wörtern; `schrittGemacht` bis Ende → erledigt; Übergang Format 2 → 3 (halb fertig, erledigt); neuer leerer Stand hat Format 3 (bestehenden Test „Format 2“ anpassen).
- [ ] FAIL → implementieren → alle Tests PASS.

### Task 2: Weg-Steuerung und „Los“ (`app.js`)

**Interfaces – Consumes:** Task 1. **Produces:** `starteWegSchritt(l, nr)`, `wegSchrittFertig()`, `zeigeWegEnde()`, Zustand `weg = { lektion, nr } | null` (mit in `stelleMerken`/`weitermachen`).

- „Los“ (`losKlick`): gemerkte Stelle → weitermachen; sonst fällige Wörter (nur `wiederholen`, ohne `neu`/`jung`) als Runde, wenn vorhanden; danach (bzw. direkt) `naechsterSchritt()`: fällige Grammatik → nächster Weg-Schritt → sonst `naechsterInhalt()`.
- Schritt-Arten:
  - `woerter`: `zeigeWortCheck` für die Päckchen-Wörter ohne Karte (Signatur auf `(titel, ids, danach)` erweitern) → Runde: `neu` je Wort, `paare`, `waehlen` je Wort.
  - `ueben`: Runde mit Wörtern des Schritts: junge → `waehlen` (+ `paare`, max 5); nicht junge → `deutsch` ohne Karteikasten-Wertung (neues Flag `abfrage.weg`: kennen zählt, Fächer nicht). Ziel 8–10 Aufgaben.
  - `kapitel` → `oeffneKapitel(k, 'weg')`; `text` → `oeffneText(t, 'weg')`; `hoeren` → `starteHoeren({ lektion })`; `uebungen` → `starteRipasso(l)`; `abschluss` → `starteAufgaben(Lektionen.aufgabenFuer(l, 10), …)`.
- Fertig-Haken (nur wenn `weg` gesetzt): Ende der Runde, `uebungPruefen`-Fertig (Kapitel geübt), `fragenPruefen` (egal wie viele richtig), `hoerWeiter`-Ende, Aufgaben-`fertig` → `wegSchrittFertig()` → `Lektionen.schrittGemacht` → `zeigeWegEnde()`; dort statt „Nochmal …“ Knopf „Weiter“.
- `zeigeWegEnde()`: Ende-Seite „Schritt geschafft“, Limo; Hauptknopf „Weiter: Schritt N – <name>“; „Für heute reicht’s“. Jeder 3. Schritt am Tag (`fortschritt.wegHeute = { datum, anzahl }`): Limo schlägt Pause vor. Lektion zu Ende → `geschafftZeigen`.

- [ ] Tests laufen; im Browser Lektion 1 von Schritt 1 bis Abschluss durchspielen.

### Task 3: Oberfläche (Heute, Lektionsseite, CSS)

- Heute: Karte der aktuellen Lektion zeigt „Schritt n von m · <name>“ + Punkte-Reihe (gemacht/jetzt/später, mit Text für Screenreader).
- Lektionsseite: Weg als Liste (✓ / ● / ○), gemachte und aktueller Schritt antippbar (`starteWegSchritt`); „Kann ich schon“ bleibt.
- `lektionKnopf`: „Schritt n von m“ statt Teile-Zeile.
- [ ] iPhone 393 × 852 hell/dunkel, Heute weiter ohne Scrollen.

### Task 4: Abschluss
- [ ] `VERSION` erhöhen; ROADMAP (neue Zeile, Etappe 1 ✅ wartet auf Nicole), TODO (Lektion 1–2 testen), CLAUDE.md (Weg, Schritt-Stand, FORMAT 3, `wegSchrittFertig`-Haken für neue Aktivitäten).
- [ ] Alle Tests grün, Testdaten im Browser gelöscht.
