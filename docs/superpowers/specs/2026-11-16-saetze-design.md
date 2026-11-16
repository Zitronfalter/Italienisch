# Neue Wörter in Sätzen – Entwurf

Stand: 16.11.2026, mit Nicole abgestimmt (Gespräch „Übungen planen“).

## Warum

Nicole findet die Übungsarten gut und mag, dass sie abwechseln. Was fehlt: **Sätze**. Neue Wörter werden heute fast nur einzeln geübt (zeigen, Wortpaare, wählen, Italienisch → Deutsch mit Kacheln, schreiben). Vorbild ist, wie Duolingo neue Wörter einführt: Das Wort taucht zuerst **in einem Satz** auf, man erschließt es aus dem Zusammenhang, und danach kommt es in immer neuen Sätzen wieder – jedes Mal etwas schwerer. Belohnungen, Punkte und Werbung wie dort will sie ausdrücklich nicht.

Außerdem sollen neue Wörter nicht als **Themenliste** kommen (cinquanta, sessanta, settanta auf einmal), sondern so, wie sie für die nächsten Sätze und den Text gebraucht werden – Nomen, Verben, Adjektive gemischt.

## Ziele

- Neue Wörter steigen eine **Treppe** in Sätzen hoch (siehe unten), innerhalb der Lektion wird es spürbar schwerer.
- Viele verschiedene Sätze: pro neues Wort 3–4 eigene Sätze, von Hand geschrieben, natürlich klingend.
- Päckchen neuer Wörter nach Gebrauch statt nach Thema (Reihenfolge der Sätze bestimmt die Päckchen).
- Erst ein **Test mit 3 Lektionen**; danach entscheidet Nicole, ob es für weitere Lektionen kommt.

## Nicht-Ziele (diesmal)

- Neue Übungsarten oder Bilder.
- Abstand der neuen Wörter ändern: bleibt wie jetzt, alle 3 Schritte 4–5 Wörter (Nicole: „erstmal A, später evtl. ändern“).
- Wörter zwischen Lektionen umverteilen – die Wörter einer Lektion bleiben dieselben, nur Reihenfolge und Päckchen ändern sich.
- Kacheln im Satz verschieben (eigener Punkt in der Roadmap).
- Sätze für alle 2.285 Wörter.
- Lektion 3 „Di dove sei?“ (`l01b`) – Nicole steckt mittendrin (Schritt 6/10), daran ändert sich nichts.

## Anti-Ziele (wäre ein Fehlschlag, auch wenn es technisch läuft)

- Sätze mit Wörtern, die Nicole noch nicht kennen kann.
- Eintönige Schablonen-Sätze („Io bevo il succo. Tu bevi il succo.“).
- Punkte, Serien, Belohnungs-Animationen.
- Der Lernstand geht kaputt oder gelernte Wörter gelten plötzlich als neu.

## Rahmen

- Kostenlos, ohne Build-Werkzeug, Safari/iPhone, offline (neue Datei in `DATEIEN` in `sw.js`, `VERSION` erhöhen).
- Wort-IDs (`wortId()`) bleiben unverändert. `FORMAT` nur erhöhen, wenn sich der gespeicherte Aufbau ändert (geplant: nicht nötig, siehe Treppe).
- Lückensätze behalten den Hinweis in Klammern (Grundform oder Deutsch) – gefällt Nicole besser als bei Duolingo.

## Wege, die wir betrachtet haben

| Weg | Vorteil | Nachteil | |
|---|---|---|---|
| **Sätze von Hand schreiben** (Claude), pro Lektion als Daten | natürliche, abwechslungsreiche Sätze; passen genau zum Lernstand | Schreibarbeit; nur für Lektionen, die Sätze bekommen | **gewählt** |
| App baut Sätze selbst aus Schablonen (wie `erzeuger.js`) | für alle Wörter sofort | klingt eintönig – genau das Gegenteil von Nicoles Wunsch | verworfen |
| Sätze aus vorhandenen Texten/Übungen nehmen | keine Schreibarbeit | zu wenige, passen selten zu den neuen Wörtern | verworfen |

## Test-Lektionen

Anzeige-Nummer → ID: **Lektion 4** „Buona giornata!“ (`l01c`, 15 Wörter), **Lektion 5** „Al bar“ (`l02`, 20 Wörter, Kapitel `artikel`), **Lektion 6** „L’aperitivo“ (`l02a`, 15 Wörter). Zusammen 50 Wörter, also etwa 150–200 Sätze.

## Die Treppe

Jedes neue Wort einer Satz-Lektion steigt diese Stufen hoch. Grundlage ist der vorhandene Zähler `karte.kennen` (0 … `KENNEN_FERTIG` = 4): **Stufe = `kennen`**, so bleibt der Karteikasten unverändert (bei 4 → Fach 1, geschrieben ab morgen) und es braucht kein neues `FORMAT`.

| `kennen` | Stufe | Aufgabe |
|:---:|---|---|
| 0 | Kennenlernen im Satz | Italienischer Satz, das neue Wort hervorgehoben; Antippen zeigt die Bedeutung, Satz wird vorgelesen. Danach den Satz mit Kacheln ins Deutsche legen. |
| 1 | Lesen | Ein anderer Satz mit dem Wort, mit Kacheln ins Deutsche legen. |
| 2 | Hören | Satz hören (ohne ihn zu sehen) und aus italienischen Kacheln legen bzw. eintippen. Ohne Sprachausgabe: Stufe 1 noch einmal mit anderem Satz. |
| 3 | Selbst bilden | Lückensatz: Wort einsetzen, Hinweis in Klammern (Verben: Grundform, z. B. „(bere)“; sonst Deutsch). Abwechselnd: deutscher Satz → italienisch mit Kacheln. |

Richtig gelöst → `kennen` + 1. Falsch → bleibt, die Aufgabe kommt später im selben Schritt mit einem anderen Satz wieder (falls vorhanden). Wortpaare bleiben als Abwechslung im Schritt „Neue Wörter“ (zählen wie bisher für `kennen`, aber höchstens bis Stufe 1, damit die Treppe nicht übersprungen wird).

## Daten

Neue Datei `saetze-a1.js`, global `SAETZE` (Objekt Lektions-ID → Liste in Lern-Reihenfolge):

```js
SAETZE.l02 = [
  { wort: 'bere', saetze: [
      { it: 'La mattina bevo un caffè.', de: 'Morgens trinke ich einen Kaffee.', form: 'bevo' },
      ...
  ] },
  ...
];
```

- `wort`: wie in `woerter` der Lektion (italienisch, wie in `wortschatz.js`); jedes Wort der Lektion kommt genau einmal vor.
- `form`: so steht das Wort im Satz, falls nicht wörtlich gleich (für Hervorheben und Lücke).
- Der erste Satz eines Worts ist der Kennenlern-Satz und soll das Wort aus dem Zusammenhang erraten lassen.
- Ein Satz enthält nur: Wörter früherer Lektionen, Wörter **dieser** Lektion, die in der Liste davor stehen, das Wort selbst, `GRUNDWOERTER`. Anders als bei Texten gibt es keine Ausnahme für erklärte Wörter. **Formen zählen mit** (Claudes Entscheidung): `bevo` gilt als bekannt, wenn `bere` bekannt ist – dieselbe Formen-Erkennung wie `lektionen-pruefen.js` / `kandidaten()`, sonst lassen sich kaum Sätze schreiben. „Bekannt“ heißt nur: steht in einer Lektionsliste (nicht Nicoles persönliche „kenne ich“-Markierungen).
- Die **Reihenfolge der Liste** bestimmt `l.wortIds` dieser Lektion und damit die Päckchen (`paeckchen()`); Wörter einer Reihe (Zahlen u. Ä.) auf mehrere Päckchen verteilen.

Prüfprogramm `werkzeuge/saetze-pruefen.js` (wie `lektionen-pruefen.js`): jedes Lektionswort hat einen Eintrag, je ≥ 3 Sätze, `form` steht im Satz, jedes Wort im Satz ist bekannt (Regel oben), keine doppelten Sätze. Muss 0 Fehler melden. Dazu ein Test in `werkzeuge/test/`.

## Ablauf im Weg

- `Lektionen.weg(l)` bleibt; nur die Wort-Reihenfolge kommt bei Satz-Lektionen aus `SAETZE`.
- `wegRundenSchritte` erzeugt für Wörter mit Sätzen Satz-Aufgaben nach ihrer Stufe statt `neu`/`waehlen`:
  - **Neue Wörter:** je Wort Stufe 0, dann Wortpaare des Päckchens, dann Stufe 1 der Päckchen-Wörter.
  - **Wörter üben:** junge Wörter der Lektion je mit ihrer nächsten Stufe (neueste zuerst); bereits fertige Wörter der Lektion in Sätzen (Stufe 1–3 gemischt, `ohneWertung` wie heute); dazu wie bisher 3 alte Wörter. Ein Schritt bleibt bei etwa 7–10 Aufgaben (3–5 Minuten).
- Sätze eines Worts wechseln: möglichst nie derselbe Satz zweimal hintereinander; „Nichts doppelt an einem Tag“ (`Wiederholung.heuteGeloest`) gilt auch für Sätze.
- **Tempo der Treppe** (Claudes Entscheidung): Stufe 0 zählt erst, wenn die Kacheln stimmen; sonst bleibt die Karte bei `kennen` 0 und das Wort kommt im nächsten Schritt wieder mit Stufe 0. Im Schritt „Neue Wörter“ darf ein Wort 2 Stufen schaffen (0 und 1), in „Wörter üben“ höchstens 1 Stufe pro Wort. Die Lektion darf enden, auch wenn Wörter noch nicht oben sind – sie steigen danach in den Runden weiter (siehe nächster Punkt).
- **Auch außerhalb des Wegs** (Claudes Entscheidung): Überall, wo junge Wörter vorkommen (Vokabel-Runde ohne Weg, „Mehr neue Wörter holen“, „Wörter üben“ einer erledigten Lektion), bekommen Wörter mit Sätzen dieselben Satz-Aufgaben nach ihrer Stufe statt `neu`/`waehlen`. Sonst würde `kennenGelernt` die Treppe überspringen. Am besten eine gemeinsame Hilfsfunktion „Aufgabe für junges Wort“.
- Lektionen ohne `SAETZE` laufen genau wie bisher.
- Weitermachen (`stelleMerken`) muss die neuen Aufgaben mitmerken.
- Limo in der Aufgaben-Karte wie bei den anderen Übungen.

## Dem Bauenden überlassen

- Wie die Satz-Aufgaben in `app.js` angezeigt werden (vorhandene Bausteine nutzen: `runde-kacheln`, Diktat aus `uebungen.js`, Lücke wie bei Grammatik).
- Falsche Kacheln: aus anderen Sätzen derselben/früheren Lektionen.
- Genaue Mischung im Schritt „Wörter üben“ innerhalb der Grenzen oben.
- Die Sätze selbst (Inhalt, Ton: Alltag, freundlich, etwas Humor erlaubt).

## Danach

Nicole testet Lektion 4–6 auf dem iPhone. Fragen dann: Reichen die Sätze, ist die Treppe zu schnell/langsam, passt der Abstand der neuen Wörter? Erst dann weitere Lektionen.
