# Lektion als Weg – Etappe 2 (Entwurf, kurz)

Stand 16.11.2026. Baut auf [2026-11-15-lektion-als-weg-design.md](2026-11-15-lektion-als-weg-design.md) auf.

## Warum

Nicole hat Etappe 1 getestet: Der Weg passt. Das alte Tageslimit für neue Wörter wird nicht mehr gebraucht. Statt eines Limits soll der Weg **sanft bremsen**, wenn es gerade schwer läuft – ohne Nicole aufzuhalten. Dazu soll Limo zu einer passenden Übung unter „Üben“ ermuntern.

## Ziele

1. **Tageslimit weg:** Einstellung „Neue Wörter pro Tag“, Tageslimit (`neuProTag`, `neuHeute`, `neuGrenze`), „Mehr neue Wörter holen“ (`neuExtra`, `mehrHolen`, `mehrWoerterMoeglich`, Knopf auf der Ende-Seite) und der Pausen-Text auf der Startseite (`PAUSE_TEXT`, Pause-Gründe) entfallen. Auch ohne offene Lektion gibt es keine Sonderregel mehr.
2. **Festigen-Runde (sanfte Bremse):** Wäre der nächste Weg-Schritt „Neue Wörter“ und ist die Trefferquote der letzten 7 Tage unter 55 % (mindestens 20 Antworten, `Vokabeln.trefferQuote()`), kommt vorher eine Festigen-Runde.
   - Höchstens **einmal vor jedem Neue-Wörter-Schritt** (Merker im Lernstand, z. B. `fortschritt.festigen = { lektion, nr }`). Danach kommen die neuen Wörter, auch wenn die Quote noch niedrig ist – Nicole hängt nie fest.
   - Inhalt: etwa 7 Aufgaben mit den schwersten Wörtern (Fach 1 mit Fehlern, dann junge Wörter, dann niedrigste Fächer). Ändert keine Fächer (`ohneWertung`), wie die Üben-Schritte.
   - Zählt **nicht** als Weg-Schritt („Schritt 4 von 12“ bleibt).
   - Limo vorher kurz, ohne Druck: „Erst festigen, was gerade schwer ist – dann kommen neue Wörter.“
3. **Limo-Vorschlag nach der Festigen-Runde:** Auf der Ende-Seite schlägt Limo zusätzlich eine Übung unter „Üben“ vor, reihum **Grammatik** (ein Kapitel der aktuellen oder einer früheren Lektion, bevorzugt eins mit Fehlern), **Hören & Üben** und **Vokabeln** (öffnet den Vokabelkasten; Nicoles Wunsch vom 16.11.). Ein Nebenknopf öffnet sie; der Hauptknopf bleibt „Weiter: Neue Wörter …“. Freiwillig, zählt nicht für den Weg.

## Nicht-Ziele

- Keine Ausnahmen von Hand im Weg (Nicoles Test: nicht nötig).
- Keine neuen Übungsarten, keine neuen Inhalte.
- Keine Punkte, keine Warnung, kein „du bist schlecht“ – Limo bleibt freundlich.

## Ansätze (gewählt: 1)

1. **Festigen-Runde einmal vor jedem Neue-Wörter-Schritt** – gewählt. Übt gezielt, was hakt, blockiert nie. Nachteil: Die 7-Tage-Quote reagiert langsam.
2. Neue Wörter sperren, bis die Quote wieder über 55 % ist – zu streng, kann tagelang aufhalten.
3. Schritt „Wörter üben“ der Lektion wiederholen – übt nur Lektionswörter, nicht die wirklich schweren.

## Beim Bauen zu beachten (Claudes Entscheidungen)

- Alter Lernstand: gespeicherte Felder `neuHeute`, `neuExtra`, `einstellungen.neuProTag` werden einfach nicht mehr gelesen (kein neues `FORMAT` nötig).
- Weitermachen: Die Festigen-Runde wird wie andere Runden in `stelleMerken` mitgemerkt.
- Tests anpassen (`heute.test.js` u. a.), neue Tests für „Festigen nur einmal pro Schritt“ und „unter 55 % / ab 55 %“.
- `VERSION` in `sw.js` erhöhen, ROADMAP und TODO nachziehen, CLAUDE.md-Abschnitte zu `neuProTag`/`mehrHolen` anpassen.
