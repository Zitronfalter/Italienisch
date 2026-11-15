# Lektion als Weg aus kleinen Schritten – Entwurf (15.11.2026)

## Warum
Nicole möchte vorankommen, wenn sie Zeit und Lust hat. Bisher bremst das Tageslimit für neue Wörter (Standard 3/Tag); eine Lektion dauert dadurch Tage, und wer an einem Tag viel übt, bekommt immer dasselbe. Vorbild (von Nicole): man geht Schritt für Schritt durch kurze Übungen; nach einigen Übungen kommen neue Wörter, dazwischen ist Zeit, sie zu festigen.

## Ziele
- Jede Lektion ist ein **Weg aus kurzen Schritten** (je ca. 3–5 Min).
- **Jeder dritte Schritt** bringt neue Wörter (Päckchen mit 4–5 Wörtern); die zwei Schritte dazwischen festigen (Üben, Grammatik, Text, Hören).
- **„Los“**: erst fällige Wörter (Karteikasten), dann fällige Grammatik, dann der **nächste Schritt** der Lektion.
- Nach einem Schritt: gleich weiter oder aufhören. **Kein Tageslimit** für neue Wörter mehr – das Tempo bestimmt Nicole über die Schritte.
- Am Ende der Lektion ein kurzer **Abschluss**, danach beginnt die nächste Lektion.
- **Karteikasten bleibt** im Hintergrund: Gelernte Wörter kommen an den Folgetagen zum Wiederholen. Nicole: „den Karteikasten zu pflegen wird wichtig sein.“

## Nicht-Ziele / Anti-Ziele
- Keine Punkte, XP, Serien, Belohnungs-Animationen, kein Druck. Nach ein paar Schritten schlägt Limo freundlich eine Pause vor, blockiert aber nicht.
- Keine neuen Inhalte schreiben (Wörter, Texte, Kapitel bleiben). Keine neuen Übungsarten in diesem Schritt (kommen später).
- Kein Nachbau einer fremden App (Namen, Aussehen) – nur die Idee „kurze Schritte“.
- Lernstand darf nicht verloren gehen.

## Ansätze
- **A – Weg automatisch aus den vorhandenen Lektionsdaten erzeugen – gewählt.** Gilt sofort für alle 144 Lektionen, keine Inhaltsarbeit.
- B – Jeden Weg von Hand festlegen – zu viel Arbeit, fehleranfällig.
- C – Automatisch mit Ausnahmen von Hand – **für später** (Feld `weg` in einer Lektion überschreibt den erzeugten Weg).

## Entschieden

### Ablauf von „Los“
1. Fällige Wörter (nur `wiederholen` aus dem Karteikasten, keine neuen, keine jungen). Gibt es keine, wird dieser Teil übersprungen.
2. Fällige Grammatik (`Wiederholung.etwasFaellig()`, wie bisher 2 Kapitel × 3 Aufgaben + alte Fehler).
3. Nächster Schritt des Wegs der aktuellen Lektion.
Auf der Ende-Seite jedes Teils: „Weiter: <nächster Schritt>“ (Hauptknopf) und „Für heute reicht’s“.

### Der Weg einer Lektion (erzeugt)
Wörter der Lektion → Päckchen zu 4–5 (gleichmäßig verteilt, z. B. 13 Wörter → 5+4+4; unter 6 Wörtern ein Päckchen).
Für jedes Päckchen drei Schritte: **Neue Wörter**, **Üben**, **Festigen**. Die Festigen-Plätze werden der Reihe nach gefüllt mit: jedes Grammatik-Kapitel der Lektion → jeder Text → Hören. Bleiben Plätze frei: gemischtes Üben. Bleibt Inhalt übrig: als eigene Schritte vor dem Abschluss. Letzter Schritt: **Abschluss**.

Beispiel große Lektion (13 Wörter, 1 Kapitel, 1 Text): Neue Wörter 1 · Üben · Grammatik · Neue Wörter 2 · Üben · Text · Neue Wörter 3 · Üben · Hören · Abschluss (10 Schritte).
Wort-Lektion (z. B. 12 Wörter, 1 Text): Neue Wörter 1 · Üben · Text · Neue Wörter 2 · Üben · Hören · Neue Wörter 3 · Üben · Üben gemischt · Abschluss.
Wiederholungs-Lektion (`ripasso`, keine Wörter): Übungen (wie bisher 10 gemischte) · Text · Abschluss entfällt (die Übungen sind der Abschluss) → 2 Schritte.

### Die Schritte
| Schritt | Inhalt (vorhandene Bausteine) | fertig, wenn |
|---|---|---|
| Neue Wörter | erst „Kennst du die schon?“ nur für dieses Päckchen; dann je Wort zeigen + hören, Wortpaare, wählen (lesen/hören) – wie das bisherige Kennenlernen | Runde zu Ende |
| Üben | Kennenlern-Aufgaben mit allen bisher gelernten Wörtern der Lektion (Schwerpunkt neuestes Päckchen) + Italienisch → Deutsch mit Kacheln für Wörter, die nicht mehr jung sind | Runde zu Ende |
| Grammatik | Kapitelseite (Regel, Tabelle) → Üben (8 Übungen, Zusatzübungen wie bisher) | Kapitel „geübt“ |
| Text | Text lesen, Fragen beantworten | Antworten geprüft (egal wie viele richtig) |
| Hören | Hör-Runde der Lektion (`Uebungen.runde({ lektion })`) | Runde zu Ende |
| Abschluss | gemischte Aufgaben der Lektion (`aufgabenFuer(l, 10)`) | Runde zu Ende → Lektion erledigt |

- **Schon Erledigtes wird übersprungen** (Claudes Entscheidung): Ist der Inhalt eines Schritts beim Erreichen schon fertig – alle Wörter des Päckchens haben schon eine Karte (z. B. aus einer früheren Lektion oder „kenne ich“), Kapitel schon geübt, Text schon verstanden –, zählt der Schritt sofort als gemacht und der nächste kommt. Der Weg selbst bleibt gleich (immer aus allen Wörtern der Lektion erzeugt), damit `schritt` stabil bleibt.
- **Neue Wörter kommen nur noch über den Weg** (Claudes Entscheidung): Die Vokabel-Runde von „Los“ nimmt nur noch fällige Wörter. Wörter ohne Lektion (wenn alle Lektionen erledigt sind) laufen wie bisher mit Tageslimit.
- Ein Schritt zählt als gemacht, wenn er **zu Ende** gespielt ist – nicht nach Trefferquote. Gelernt wird über die Wiederholung (Karteikasten, Fehlerliste, „nichts doppelt“).
- Kennenlernen wie bisher: Jede gelöste Aufgabe zählt `kennen` +1, ab 4 ist das Wort im Karteikasten (Fach 1, geschrieben ab morgen). Bei „Neue Wörter“ + „Üben“ kommt ein Wort meist auf 4.
- Wörter, die nach dem Weg noch jung sind (z. B. Fehler), kommen in den späteren Üben-Schritten und im Abschluss wieder.

### Speichern
- `fortschritt.lektionen[id].schritt` = Anzahl gemachter Schritte (Index des nächsten). Der Weg wird jedes Mal aus den Lektionsdaten erzeugt (gleiche Daten → gleicher Weg).
- Lektion **erledigt**, wenn `schritt` = Länge des Wegs (oder „Kann ich schon“ / alte Erledigt-Markierung).
- `FORMAT` 3. Übergang aus Format 2: erledigte Lektionen bleiben erledigt. Begonnene Lektionen: `schritt` = erster Schritt, dessen Inhalt nach altem Stand noch nicht fertig ist (Päckchen fertig = alle Wörter mit Karte und nicht jung; Kapitel geübt; Text verstanden; Hören fertig).
- Weitermachen (`stelleMerken`): zusätzlich merken, zu welchem Schritt (Lektion, Nr.) die laufende Aktivität gehört, damit er nach dem Neustart als gemacht zählt.

### Oberfläche
- **Heute**: Karte der aktuellen Lektion zeigt „Schritt 3 von 10 · Grammatik“ und eine Reihe kleiner Punkte (gemacht / jetzt / später). Knopf „Los“ wie bisher.
- **Lektionsseite**: der Weg als Liste (✓ gemacht, ● jetzt, ○ später); jeder gemachte oder der aktuelle Schritt antippbar.
- **Ende-Seite** nach einem Schritt: „Weiter: Schritt 4 – Neue Wörter“ + „Für heute reicht’s“. Nach jedem 3. Schritt am selben Tag sagt Limo z. B.: „Schön gemacht! Eine kleine Pause hilft dem Gedächtnis.“ (Knopf bleibt).
- **Einstellungen**: „Neue Wörter pro Tag“ entfällt. „Mehr neue Wörter holen“ entfällt (Code für `neuExtra` und Tageslimit-Pause wird entfernt bzw. nur noch für Wörter ohne Lektion genutzt – Entscheidung beim Bauen).

### Bleibt
Karteikasten (5 Fächer), Grammatik-Karteikasten, Fehlerliste, „nichts doppelt an einem Tag“, „Kann ich schon“, Frei üben, Meine Wörter, Limo in Übungen.

## Etappen
1. Weg erzeugen, Schritte, Ablauf von „Los“, Speichern + Übergang, Oberfläche (Heute, Lektion, Ende). Nicole testet mit Lektion 1–2 auf dem iPhone.
2. Nach Nicoles Rückmeldung: Tageslimit und „Neue Wörter pro Tag“ endgültig entfernen, Feinschliff, Ausnahmen (C) bei Bedarf.

## Sonderfälle (Claudes Entscheidungen)
- Spätere Lektion von Hand geöffnet (Reiter Lektionen): sie wird begonnen, ist damit die aktuelle, ihr Weg startet bei Schritt 1. Die vorige bleibt offen und kann weitergemacht werden.
- Einen gemachten Schritt nochmal antippen: geht, ändert `schritt` nicht.
- Keine Lektion mehr offen: nach den fälligen Wörtern schlägt die App wie bisher etwas aus „Frei üben“ vor (`naechsterInhalt`).
- Weg abgebrochen mitten in „Neue Wörter“: die bereits gezeigten Wörter sind jung und kommen im nächsten Üben-Schritt wieder; der Schritt selbst bleibt offen (Weitermachen setzt fort).

## Dem Bauenden überlassen
- Genaue Verteilung der Aufgaben im Üben-Schritt (Anzahl ca. 8–10 Aufgaben ≈ 3–5 Min).
- Texte von Limo (ruhig, kein Druck), Darstellung der Punkte-Reihe.
- Tests: Weg-Erzeugung (Päckchengrößen, Reihenfolge, Lektionsarten), Übergang Format 2 → 3, Schritt-Fortschritt.
