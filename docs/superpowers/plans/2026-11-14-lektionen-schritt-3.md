# Lektionen, Schritt 3 – Bauplan

> **Für Agenten:** superpowers:executing-plans. Konzept: [2026-11-14-lektionen-design.md](../specs/2026-11-14-lektionen-design.md), Abschnitte „Gelöste Übungen ausblenden“, „Kann ich schon“, „Wiederholungs-Lektion (Ripasso)“, „Erledigte Lektionen wiederholen“.

**Ziel:** Gelöste Übungen kommen nicht immer wieder. Hören passt zur Lektion. Zu leichte Lektionen lassen sich überspringen. Es gibt die erste Wiederholungs-Lektion und „Wörter üben“ für erledigte Lektionen.

## Feste Regeln

Wie in Schritt 1/2: Deutsch, keine Kosten, `sw.js`-`VERSION` erhöhen, Wort-IDs bleiben, neue Übungen nur **hinten** anhängen (Nummern in `geloest`), Farben nur über Variablen, Prüfung in 393 × 852 hell und dunkel. Kein Commit ohne Nicoles Okay.

## Worauf beim Prüfen achten

1. **Alle Übungen eines Kapitels gelöst:** Statt einer leeren Runde erscheint „Alle Übungen gelöst“ mit „Nochmal alle“. → Test `ungeloeste`.
2. **Zu wenige ungelöste Hörsätze** (unter 4): Die Runde wird mit gelösten Sätzen aufgefüllt, sie ist nie kürzer. → Test.
3. **Lektion ohne eigene Hörsätze** (Text nur aus Dialogen, z. B. „Ciao!“): Die Sätze kommen aus den Kapiteln dieser und früherer Lektionen. → Test.
4. **„Kann ich schon“ zählt nicht für den Karteikasten:** Kein Fach ändert sich, nur fehlende Karten entstehen als „bekannt“. → Test.
5. **Wiederholungs-Lektion ohne Wörter:** Es gibt keinen Wortcheck, die Startseite zeigt die Teile „Übungen“ und „Text“, nicht die 4 Teile einer Lektion. → Test `teile` für `art: 'ripasso'`.

### Aufgabe 1: Grammatik – gelöste Übungen merken, mehr Übungen

- `grammatik.js`:
  - `uebungGeloest(id, nr)` legt `nr` in `fortschritt.grammatik[id].geloest` ab, nur einmal.
  - `ungeloeste(id) → number[]` gibt die Nummern der ungelösten Übungen zurück.
  - Das Speichern von `ergebnisSpeichern` behält `geloest`.
- `app.js`:
  - `starteUebung(alle = false)` übt nur `ungeloeste`. Sind alle gelöst, zeigt die Kapitelseite „Alle Übungen gelöst ✓“ und den Knopf „Nochmal alle“.
  - Auf Anhieb richtig → `uebungGeloest`.
- Die bisherigen 9 Kapitel bekommen hinten je 2 neue Übungen (dann 8). Wörter bei l01–l04-Kapiteln nur aus Lektion ≤ n, das Prüfskript zeigt Hinweise.
- Tests: `werkzeuge/test/grammatik.test.js`

### Aufgabe 2: Hören nach Lektion

- `uebungen.js`:
  - `saetze()` merkt die Herkunft im Satz: `kapitel: id` oder `text: id`.
  - `runde(optionen = {})`:
    - Mit `optionen.lektion` nur Sätze aus Kapiteln und Texten von Lektionen mit `nr ≤ lektion.nr`, ohne Ripasso.
    - Ungelöste Sätze kommen zuerst, aufgefüllt bis 4 Sätze.
    - Die Wortpaare kommen aus `lektion.wortIds` (wenn es mindestens 3 sind).
  - `satzGeloest(satz)` legt `sauber(satz.it)` in `fortschritt.hoeren.geloest` ab.
- `app.js`: `starteHoeren` gibt `{ lektion }` an `runde` weiter. Ein Satz, der auf Anhieb richtig ist, wird mit `satzGeloest` gemerkt.
- Tests: `werkzeuge/test/hoeren.test.js` ergänzen

### Aufgabe 3: Aufgabenrunde – Logik

`lektionen.js`, neue Funktionen:
- `aufgabenFuer(l, anzahl) → Aufgabe[]`. Eine Aufgabe sieht so aus:
  - `{ art: 'deutsch', id }` – Italienisch → Deutsch mit Kacheln
  - `{ art: 'grammatik', kapitel, nr }` – eine Grammatik-Übung
  - `{ art: 'hoeren', satz }` – Hören und Kacheln legen
- **„Kann ich schon“** (`aufgabenFuer(l, 8)`): 4× `deutsch` aus `l.wortIds`, 3× `grammatik` aus `l.kapitel`, 1× `hoeren`. Fehlt eine Sorte, wird mit den anderen aufgefüllt.
- **Ripasso** (`aufgabenFuer(r, 10)`): gemischt aus den Lektionen in `r.lektionen` (`['l01', …]`).
- `ueberspringen(id, richtig, von) → boolean`:
  - Bei `richtig ≥ 7` (von 8) wird die Lektion erledigt mit `uebersprungen: true`, und Wörter ohne Karte bekommen eine Karte als „bekannt“ (wie `woerterEinordnen`).
  - Gibt zurück, ob es geklappt hat.
- `ripassoSpeichern(id, richtig, von)`: legt das beste Ergebnis in `fortschritt.lektionen[id].uebungen` ab.
- **Ripasso-Lektion** in `LEKTIONEN`: `{ id: 'r1', nr: 4.5, art: 'ripasso', titel: 'Wiederholung 1', lektionen: ['l01','l02','l03','l04'], woerter: [], kapitel: [], texte: ['ripasso-1'] }`
  - `teile(r) → { uebungen, text }`. `uebungen` ist fertig ab 80 %.
  - `naechsterTeil()` liefert für eine Ripasso-Lektion `{ art: 'uebungen' }`, danach `text`.
- Tests: `werkzeuge/test/lektionen.test.js` ergänzen (Prüfpunkte 4 und 5, Schwelle 7/8, Reihenfolge)

### Aufgabe 4: Oberfläche

- `index.html`: neuer Bildschirm `screen-aufgaben` (Kopf mit Stand, Frage, Anhören-Knöpfe, Lücken-Feld, Kachel-Ablage und -Vorrat, Rückmeldung, Prüfen/Weiter, Beenden).
- `app.js`:
  - `starteAufgaben(aufgaben, titel, fertig)` als gemeinsame Runde. Prüfen über `Vokabeln.pruefeDeutsch`, `Grammatik.pruefeLuecke`/`pruefeKacheln` und `Uebungen.pruefeKacheln`. Am Ende wird `fertig(richtig, von)` aufgerufen.
  - **Startseite:** Die aktuelle Lektion bekommt den Knopf „Kann ich schon“, ein Ripasso den Teil „Übungen“.
  - **„Kann ich schon“:** 8 Aufgaben, danach eine Meldung:
    - Geschafft: „Lektion übersprungen ✓“
    - Sonst: „Ein paar Sachen sind neu – lass uns die Lektion zusammen anschauen.“, danach öffnet sich die Lektion.
  - **Erledigte Lektion:** Knopf „Wörter üben“. Eine Runde mit allen Wörtern der Lektion als `deutsch`- oder `frage`-Schritte, ohne Wertung (`abfrage.ohneWertung`, `eintragen` wird übersprungen).
  - `teileHtml` und `oeffneLektion` können auch Ripasso-Lektionen anzeigen.
- `style.css`: nur vorhandene Bausteine
- Browser-Prüfung

### Aufgabe 5: Inhalt R1 und Abschluss

- `texte.js`: Text `ripasso-1` (A1), der nur Wörter aus l01–l04 und `GRUNDWOERTER` verwendet und höchstens 8 erklärte Wörter hat. Dazu 3 Fragen und `uebersetzung` für die Hörsätze.
- Prüfskript: Ripasso-Texte werden mit `nr` des Ripasso geprüft (4.5 → Wörter aus l01–l04).
- `sw.js` VERSION, ROADMAP (Schritt 3 ✅, Schritt 4 ⏳), CLAUDE.md (geloest, Ripasso, Aufgabenrunde)
