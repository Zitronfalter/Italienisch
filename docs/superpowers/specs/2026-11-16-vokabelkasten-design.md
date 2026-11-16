# Vokabelkasten wie Phase 6 – Entwurf (16.11.2026)

## Warum

Nicole will ihre Vokabeln wie bei Phase 6 trainieren: unabhängig von den Lektionen, mit Blick auf die Fächer,
und alte Wörter sollen immer wieder drankommen, damit nichts vergessen wird. Grundlage ist ihr Duolingo-Wortschatz
(`schon-bekannt.js`, etwa 1.000 Einträge, davon 589 im Wortschatz der App). Diese Wörter muss sie nicht neu lernen –
ihrer Schätzung nach sitzen etwa 90 %.

## Ziele

1. **Duolingo-Wörter als Grundlage:** Alle 589 kommen einmalig in den Karteikasten, gelten als bekannt
   (kein Kennenlernen, keine „Kennst du die schon?“-Frage, Lektionen überspringen sie).
2. **Vokabelkasten unter „Üben“:** eigene Seite mit den 5 Fächern (Anzahl, fällig), „Fällige üben“ und
   „Fach vorziehen“ wie bei Phase 6.
3. **Übungen nehmen Nicoles Wörter:** Wortpaare, Grammatik-Aufgaben (Erzeuger) und Hören nutzen die Wörter
   aus dem Kasten und holen bevorzugt solche, die lange nicht dran waren.

## Nicht-Ziele / Anti-Ziele

- Kein zweiter Karteikasten (Nicole: „macht keinen Sinn“) – es bleibt bei `Speicher.daten.karten`.
- Keine 6 Fächer: Es bleiben 5 (Abstände 1, 3, 7, 16, 35 Tage), der Lernstand hängt daran.
- Kein Druck: keine Punkte, Serien, Zähler „x Tage am Stück“. Der Kasten zeigt nur Anzahlen.
- Nicht alle 589 Wörter an einem Tag fällig machen.

## Ansätze (besprochen)

- **A – vorhandenen Karteikasten erweitern (gewählt):** gleiche Karten, gleiche Abfrage, nur eigener Eingang,
  Übernahme der Duolingo-Wörter und Vorliebe für lange nicht gesehene Wörter. Wenig neuer Code, nichts doppelt.
- B – zweiter Kasten nur für Duolingo-Wörter: doppelt sich mit den Lektionswörtern. Verworfen.
- C – Duolingo-Wörter nach und nach (10 am Tag) oder erst mit der Lektion: Nicole hat sich für „alle sofort“ entschieden.

## Entscheidungen

### Übernahme (einmalig)

- Beim App-Start: Wörter aus `WORTSCHATZ`, für die `SchonBekannt.enthaelt(w.it)` gilt und die noch keine Karte haben,
  bekommen eine Karte `{ fach: 3, faellig, richtig: 0, falsch: 0, quelle: 'duolingo' }` (kein `kennen` → gilt als bekannt).
- `faellig` verteilt: sortiert nach Lernweg (frühe Lektionen zuerst), 20 pro Tag ab morgen → etwa 30 Tage.
- Merker `Speicher.daten.duolingo = { uebernommen: Datum, anzahl }`, damit es nur einmal läuft.
  Lädt Nicole eine ältere Sicherung ohne Merker, läuft die Übernahme erneut – das ist gewollt und harmlos
  (vorhandene Karten bleiben unverändert).
- `FORMAT` bleibt 3 (nur ein neues, optionales Feld; alte Sicherungen bleiben lesbar).
- Falsch beantwortet → wie immer Fach 1. Richtig → Fach 4, später 5.

### Vokabelkasten-Seite (`screen-kasten`, Reiter „Üben“)

- Neue Karte auf der Üben-Seite: „Vokabelkasten“, Untertitel z. B. „540 Wörter · 31 fällig“, eigenes farbiges Symbol
  wie die anderen Üben-Karten.
- Seite: 5 Zeilen (Fach 1–5) mit Anzahl, fälligen Wörtern und einem schlichten Balken (Anteil am Kasten).
  Darunter „Fällige üben (n)“ (Hauptknopf) – bei 0: Hinweis „Heute ist nichts fällig“ und der Knopf ist aus.
- Fach antippen → „Vorziehen“: bis zu 20 Wörter dieses Fachs, die am längsten nicht dran waren, **mit Wertung**
  (richtig → Fach weiter, falsch → Fach 1), wie bei Phase 6.
- Abfrage nutzt die vorhandene Runde (`starteRunde`): Italienisch schreiben bzw. Italienisch → Deutsch mit Kacheln
  (`richtungFuer`). Neu: Option `starteRunde({ ids, wertung: true })` für das Vorziehen.
- „Fällige üben“ = `starteRunde({ nurFaellig: true })` (höchstens 20 pro Runde, danach wieder auf die Seite).
- Nach der Runde zurück zum Vokabelkasten (nicht zur Startseite).
- „‹ Zurück“ führt zu „Üben“ (`data-zurueck="ueben"`), Bildschirm in `REITER_VON` eintragen.

### Lange nicht gesehen

- Jede Karte hat schon `zuletzt` (Datum der letzten Abfrage). Neu: `Vokabeln.gesehen(id)` setzt `zuletzt = heute`
  ohne Fach-Änderung – für Wörter, die in Wortpaaren richtig zugeordnet oder in erzeugten Aufgaben benutzt wurden.
- Helfer `Vokabeln.langeNichtGesehen(ids, n)`: sortiert nach `zuletzt` (ohne Datum = am ältesten), nimmt aus den
  ältesten 3·n zufällig n – damit nicht immer dieselben kommen.
- **Wortpaare** (`Uebungen.paare` ohne ids, `paarFueller` in `app.js`): gelernte Wörter über `langeNichtGesehen`.
- **Erzeuger** (`auswahl`, `nomenAuswahl`): unter den bekannten Wörtern die lange nicht gesehenen bevorzugen.
- **Hören** (`bekanntBis`): Ein Wort im Satz gilt auch als bekannt, wenn es eine Karte hat oder in `SchonBekannt` steht.
  Kapitel/Texte bleiben auf die Lektion begrenzt (keine Zeitformen, die erst später kommen).

## Randbedingungen

- Reine Web-App, keine Kosten, offline. `VERSION` in `sw.js` erhöhen, neue Dateien in `DATEIEN`.
- iPhone-Größe 393 × 852, hell und dunkel; die Kasten-Seite soll ohne Scrollen passen.
- Wort-IDs nicht ändern.

## Dem Bauenden überlassen

- Genaues Aussehen der Fach-Zeilen und des Symbols (im Stil der Üben-Karten).
- Ob „Mein Stand“ zusätzlich auf den Vokabelkasten verlinkt.
- Wie der Weg-Schritt „Neue Wörter“ mit teilweise bekannten Päckchen umgeht (heute: Schritt gilt als erledigt,
  wenn alle Wörter eine Karte haben – das bleibt so).
