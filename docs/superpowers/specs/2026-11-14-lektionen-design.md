# Lektionen – Konzept (14.11.2026)

## Warum

Nicole möchte nach einem durchdachten Plan lernen, so wie in einem Lehrbuch: Wörter, Grammatik und Lesetexte
einer Lektion passen zusammen. Das Niveau steigt von Lektion zu Lektion, und Gelerntes kommt in späteren
Lektionen wieder vor. Im Moment laufen Wortschatz (nach Themen), Grammatik-Kapitel und Texte nebeneinander her,
und Übungen wiederholen sich, weil die App sich nicht merkt, was schon gelöst ist.

Nicoles Stand: Duolingo zeigt 987 gelernte Wörter, wobei Formen einzeln zählen (andare, andiamo). Das sind etwa
500–600 Grundwörter, also spätes A1. Eine Wortliste von Duolingo gibt es nicht, weil das Passwort fehlt.

## Ziele

- **Lektionen** mit je einer Alltagssituation, 15–20 neuen Wörtern, 1 Grammatik-Thema, 1 Lesetext und
  Hörübungen aus dem Stoff der Lektion. Eine Lektion dauert 1–2 Stunden Lernzeit, bei 10 Minuten am Tag
  also etwa 1–2 Wochen.
- **Aufbauend:** Ein Lektionstext verwendet nur Wörter und Grammatik dieser und früherer Lektionen.
  Einzelne neue Wörter sind im Text erklärt.
- **Nach je 4 Lektionen eine Wiederholung (Ripasso)** ohne neue Wörter, mit gemischten Übungen und einem
  neuen Text aus dem Stoff der 4 Lektionen.
- **Von A1 bis B1.** Danach darf es weitergehen.
- **Erledigte Lektionen werden eingeklappt.** Man kann sie öffnen und noch einmal durcharbeiten.
- **Zu leichte Lektionen überspringen:** über „kenne ich / neu“ bei den Wörtern und einen kurzen Test.
- **Abfrage Italienisch → Deutsch:** Die deutsche Antwort wird aus Kacheln gelegt, nicht getippt.
- **Gelöste Übungen kommen nicht immer wieder:** Grammatik- und Hörübungen merken sich, was richtig
  gelöst wurde.

## Keine Ziele

- Keine KI in der App, auch keine selbst erzeugten Texte (das würde Geld kosten). Alle Texte schreibt Claude
  vorher und baut sie fest ein.
- Kein Import aus Duolingo.
- Erst einmal nicht über B1 hinaus.

## Darf auf keinen Fall passieren

- Der bisherige Lernstand geht verloren: Karteikarten, geübte Kapitel und verstandene Texte bleiben.
  Wort-IDs (`wortId()`) bleiben unverändert.
- Druck, Punkte, Serien oder ein trauriger Begleiter.
- Ein Lektionstext enthält Wörter, die nirgends erklärt sind.
- Kosten jeder Art.

## Rahmen

- Reine Web-App ohne Build-Werkzeug, Dateien per `<script>`, offline über `sw.js` (`VERSION` erhöhen,
  neue Dateien in `DATEIEN`).
- Lernstand nur in `localStorage` (`speicher.js`). Bei neuem Aufbau `FORMAT` erhöhen, alte Sicherungen
  weiter lesen.
- Läuft im iPhone-Format (393 × 852), hell und dunkel.

## Wege, die wir überlegt haben

1. **Lektionen als Inhaltsverzeichnis (gewählt).** Die neue Datei `lektionen.js` verweist auf Wörter
   (aus `wortschatz.js`), Grammatik-Kapitel (`grammatik.js`) und Texte (`texte.js`). Die Inhalte bleiben, wo
   sie sind. Neue Inhalte kommen in dieselben Dateien.
   + Lernstand bleibt sicher, Schritt für Schritt baubar.
   − Beim Schreiben einer Lektion wird in mehreren Dateien gearbeitet.
2. **Alles nach Lektionen neu ordnen** (eine Datei pro Lektion mit Wörtern, Regeln und Text).
   + Alles zu einer Lektion an einem Ort.
   − Großer Umbau, gefährdet Karteikarten und Fortschritt.
3. **Lektionen automatisch aus den Texten bilden** (die App sortiert Texte nach bekannten Wörtern).
   + Wenig Schreibarbeit.
   − Kein durchdachter Aufbau, Grammatik passt nicht zur Lektion. Das widerspricht dem Wunsch.

Nicole hat sich zum „Wie“ nicht festgelegt, sondern Ziele beschrieben. Weg 1 ist Claudes Entscheidung.

## Lektionsplan (von Nicole „erstmal so“ freigegeben)

Grundlage: Aufbau von Nuovo Espresso 1–3 (je 10 Lektionen, Ripasso nach 4) und die CILS-Inhalte A2/B1.
✓ = Text oder Kapitel gibt es schon.

| Nr. | Situation, Text | Grammatik |
|---|---|---|
| **A1** | | |
| 1 | Ciao! Sich vorstellen, Zahlen | essere, un/una |
| 2 | Al bar ✓ | Artikel il/lo/la, Mehrzahl ✓ (`artikel`) |
| 3 | La mia famiglia ✓ | avere ✓ (`essere-avere`), mio/mia |
| 4 | Freizeit und Uhrzeit | Verben auf -are ✓ (`verben-are`), mi piace |
| R1 | Wiederholung 1–4 | |
| 5 | Alla stazione ✓ | -ere/-ire ✓ (`verben-ere-ire`) |
| 6 | Bruschetta ✓ | al, del, nel ✓ (`praepositionen`) |
| 7 | Im Hotel | c'è/ci sono, posso/devo/voglio |
| 8 | Una giornata di Giulia ✓ | mi alzo ✓ (`reflexiv`) |
| R2 | Wiederholung 5–8, A1 geschafft | |
| **A2** | | |
| 9 | Il fine settimana scorso ✓ | passato mit avere ✓ (`passato-avere`) |
| 10 | Im Urlaub | passato mit essere ✓ (`passato-essere`) |
| 11 | Spaghetti aglio, olio e peperoncino ✓ | Befehlsform ✓ (`imperativ`) |
| 12 | Auf dem Markt | lo, la, li, le, ne |
| R3 | Wiederholung 9–12 | |
| 13 | Im Restaurant | mi, ti, gli (indirekt), piacere |
| 14 | Als ich klein war | imperfetto |
| 15 | Wetter | Vergleiche più … di |
| 16 | Beim Arzt | imperfetto oder passato prossimo |
| R4 | Wiederholung 13–16 | |
| 17 | Tiramisù ✓ | „si“ in Rezepten (si impersonale) |
| 18 | Bologna in bici ✓ (Nachricht) | Relativsätze mit che, A2 geschafft |
| **B1** | | |
| 19 | Pläne | futuro semplice |
| 20 | Wünsche | condizionale presente |
| R5 | Wiederholung 17–20 | |
| 21–28 | Zeitung, Meinung, Briefe/Mails, Rezepte der Nonna | stare + gerundio, ci/ne, congiuntivo presente, glielo, trapassato |

Lektion 21–28 werden erst genau geplant, wenn A2 steht.

## Wie es aussieht und sich verhält

### Startseite

```
Los  (10 Minuten)

Lektion 3 · La mia famiglia            ← jetzt dran
  ✓ Wörter   ◐ Grammatik   ○ Text   ○ Hören
  [Lektion öffnen]   [Kann ich schon]
Lektion 4 · Freizeit …                 (grau, noch zu)
▸ Erledigt (2) – zum Wiederholen

Frei üben
  Lesen (auch eigene Texte) · Grammatik (alle Kapitel) · Hören · Wörterbuch
```

**Nicoles Entscheidung:** Die bisherigen Bereiche Lesen, Grammatik und Hören bleiben unter „Frei üben“ unter der
Lektionsliste. Dort ist alles frei zugänglich, ohne Lektions-Reihenfolge. Was man dort schafft, zählt auch für die
Lektionen (z. B. ein dort geübtes Kapitel).

Lektionen nach der aktuellen sind sichtbar, aber zu, damit Nicole weiß, was kommt. Wer will, darf trotzdem
vorspringen: Ein Antippen fragt „Schon diese Lektion anfangen?“. **Claudes Entscheidung, weil:** kein Druck,
aber die Reihenfolge bleibt klar.

### Eine Lektion öffnen

Die Lektionsseite zeigt die Teile in fester Reihenfolge, jeweils mit Stand:
1. **Wörter** – beim ersten Öffnen: „kenne ich / neu“ für alle Lektionswörter, die noch keine Karteikarte
   haben. „Kenne ich“ legt eine Karte ohne `kennen` an (gilt als bekannt), Fach 1, fällig morgen. Wer sich
   vertan hat, fällt beim ersten Schreiben ganz normal zurück. „Neu“ legt noch keine Karte an: Die Wörter
   kommen nach und nach als neue Wörter in die Runden (höchstens 5 pro Runde) und werden dann kennengelernt.
   Sind alle Lektionen erledigt, kommen Wörter aus dem Wortschatz dran, die zu keiner Lektion gehören.
2. **Grammatik** – das Kapitel der Lektion (Regel, Tabelle, Übungen).
3. **Text** – der Lesetext mit Fragen.
4. **Hören** – Hören & Üben, nur mit Sätzen aus dieser und früheren Lektionen.

### „Los“ (die 10-Minuten-Runde)

- Vokabeln wie bisher: fällige Wörter aus allen Lektionen, junge Wörter, dann neue Wörter, **aber neue Wörter
  nur aus der aktuellen Lektion.** Sind deren Wörter alle aufgenommen, kommen keine neuen dazu.
- Danach der nächste offene Teil der aktuellen Lektion (statt `naechsterInhalt()` mit Text → Grammatik → Hören).
  Ist die Lektion fertig, zeigt die Runde „Lektion geschafft“ (ruhig, Begleiter freut sich) und schlägt die
  nächste vor.
- Eigene Wörter (`e-…`) und Wörter ohne Lektion bleiben im Karteikasten und werden wiederholt wie bisher.

### Wann eine Lektion erledigt ist

Alle vier Teile sind fertig:
- Wörter: Jedes Lektionswort hat eine Karte, und sie ist nicht mehr „jung“ (`kennen` ≥ `KENNEN_FERTIG` oder kein `kennen`).
- Grammatik: Das Kapitel gilt als geübt (wie bisher ab 80 %).
- Text: verstanden (wie bisher).
- Hören: eine Hör-Runde der Lektion mit mindestens 80 % richtig.

Was Nicole schon vorher geschafft hat (geübte Kapitel, verstandene Texte, gelernte Wörter), zählt sofort mit.
Eine Lektion, die dadurch schon fertig ist, steht direkt unter „Erledigt“.

### „Kann ich schon“ (überspringen)

Ein kurzer Test mit 8 Aufgaben:
- 4× Italienisch → Deutsch mit Kacheln (Wörter der Lektion)
- 3× Grammatik-Übungen des Kapitels
- 1× Hören (Satz aus dem Lektionstext)

Ab 7 von 8 richtig ist die Lektion erledigt (gemerkt als „übersprungen“). Alle Lektionswörter ohne Karte bekommen
eine Karte als „bekannt“ (wie „kenne ich“). Bei weniger als 7 gibt es einen freundlichen Satz („Ein paar Sachen
sind neu, lass uns die Lektion zusammen anschauen“) und die Lektion öffnet sich ganz normal. Ein Test zählt nicht
gegen Nicole: Er verändert keine Fächer im Karteikasten. **Claudes Entscheidung, weil:** Nicole will zu Leichtes
schnell loswerden, aber nichts Neues übersehen.

### Erledigte Lektionen wiederholen

„Erledigt“ ist eingeklappt. Eine erledigte Lektion lässt sich öffnen. Dort gibt es:
- „Wörter üben“: eine Runde mit allen Wörtern dieser Lektion (zählt nicht für den Karteikasten, damit die
  Abstände stimmen).
- Kapitel, Text und Hören wie in einer offenen Lektion. Die Lektion bleibt erledigt.

### Wiederholungs-Lektion (Ripasso)

Keine neuen Wörter. Teile:
- **Gemischte Übungen:** 10 Aufgaben aus den 4 Lektionen (Grammatik-Übungen, Italienisch → Deutsch, Hören).
- **Neuer Text**, der Wörter und Grammatik der 4 Lektionen mischt, mit Fragen.

Erledigt bei 80 % in den gemischten Übungen und verstandenem Text.

### Italienisch → Deutsch mit Kacheln

Neue Aufgabe in der Vokabelrunde: Das italienische Wort wird angezeigt (und auf Wunsch vorgelesen). Die deutsche
Bedeutung wird aus Kacheln gelegt: die Wörter der richtigen Bedeutung (z. B. „der“ „Bahnhof“) plus 2–3 falsche
Kacheln aus anderen Bedeutungen desselben Themas. Bei Bedeutungen mit „;“ oder „/“ zählt die erste Variante.
Kacheln für eine einzige deutsche Wortgruppe ohne Artikel: die richtige plus 3 falsche zur Auswahl.

Einsatz: Fällige Wörter werden abwechselnd abgefragt. Jede Karte merkt sich die Richtung vom letzten Mal (`richtung`)
und wechselt beim nächsten Mal. Beide Richtungen zählen gleich für das Fach. Wörter in Fach 1 werden immer auf
Italienisch geschrieben, weil das schwerer ist. **Claudes Entscheidung.**

### Gelöste Übungen ausblenden

- **Grammatik:** Pro Kapitel merkt sich die App, welche Übungen auf Anhieb richtig waren
  (`fortschritt.grammatik[id].geloest`, Liste der Übungsnummern). Beim Üben kommen erst die ungelösten.
  Sind alle gelöst, zeigt das Kapitel „Alle Übungen gelöst“ und bietet „Nochmal alle“ an.
- **Hören:** Die App merkt sich richtig gelöste Sätze (`fortschritt.hoeren.geloest`, Kurzform des Satzes) und nimmt
  sie nicht mehr in neue Runden, solange es ungelöste gibt.
- **Neue Übungen:** Jedes Kapitel bekommt 8–10 Übungen (bisher 6).

## Inhalte schreiben (Claude)

- Neue Wörter kommen in `wortschatz.js` als neue Themen, die nach Lektionen benannt sind, zum Beispiel
  „L07 Hotel“. Bisherige Themen und IDs bleiben. Eine Lektion verweist mit dem italienischen Wort
  (`'stazione'`) auf ihre Wörter, die App sucht die ID über `wortId()`.
- Bisherige Wörter werden den Lektionen zugeordnet. Wörter, die zu keiner Lektion passen, bleiben im Wortschatz
  und kommen über die Ripasso-Lektionen oder spätere Lektionen dazu. Jedes der 510 Wörter soll irgendwann einer
  Lektion gehören.
- Neue Texte im bisherigen Format in `texte.js`, mit `woerter` für alles, was nicht aus früheren Lektionen kommt.
- Prüfskript `werkzeuge/lektionen-pruefen.js` (Node):
  - Jedes Lektionswort steht im Wortschatz.
  - Jedes Wort eines Lektionstextes kommt aus dieser oder einer früheren Lektion, aus `GRUNDWOERTER` oder aus
    `woerter` des Textes.
  - Jedes Kapitel und jeder Text, auf den verwiesen wird, existiert.
  - Kein Wort gehört zu zwei Lektionen.

## Speicher

`FORMAT` wird 2. Neu:
- `fortschritt.lektionen = { 'l03': { begonnen: '2026-…', erledigt: '2026-…' | null, uebersprungen: true|false,
  woerterGeprueft: true } }`
- `fortschritt.grammatik[id].geloest = [0, 2, 5]`
- `fortschritt.hoeren.geloest = ['kurzform', …]`, `fortschritt.hoeren.lektionen = { 'l03': { richtig, von } }`
- `karten[id].richtung = 'it' | 'de'`

Sicherungen mit Format 1 werden gelesen. Fehlende Felder gelten als leer.

## Reihenfolge beim Bauen

1. Gerüst: `lektionen.js`, Lektionsliste auf der Startseite, Lektionsseite, „kenne ich / neu“, Erledigt-Logik,
   „Los“ nach Lektion, Prüfskript. Inhalt: Lektion 1–4 (fehlende Texte und Kapitel schreiben).
2. Italienisch → Deutsch mit Kacheln.
3. Gelöste Übungen ausblenden, Hören nach Lektion, „Kann ich schon“, Ripasso R1.
4. Inhalt Lektion 5–8 und R2 (A1 fertig).
5. Inhalt A2 (9–18, R3, R4).
6. Inhalt B1 (19–28) nach eigener Planung.

Nach jedem Schritt: im Browser in iPhone-Größe prüfen, ROADMAP anpassen, Nicole fragen.

## Entscheidungen nach der Prüfung (Claudes Entscheidungen)

- **Aktuelle Lektion:** die zuletzt begonnene, nicht erledigte Lektion. Gibt es keine, ist es die erste nicht
  erledigte. „Los“ und „jetzt dran“ richten sich danach.
- **Hören beim Übergang:** Sind Wörter, Grammatik und Text einer Lektion beim ersten Start mit FORMAT 2 schon
  fertig, gilt auch Hören als fertig. Danach braucht jede neue Lektion eine eigene Hör-Runde.
- **Grammatik:** Jede Lektion hat 1–2 Kapitel (`kapitel: [...]`). Kein Kapitel gehört zu zwei Lektionen
  (das Prüfskript prüft das). Fehlender Stoff kommt in **neue** Kapitel (z. B. `essere-un` für L1, `possessiv`
  für L3, `piacere` für L4). Bisherige Kapitel behalten ihren „geübt“-Stand. Neue Übungen werden nur hinten
  angehängt, damit die Nummern in `geloest` stimmen. Das bisherige `essere-avere` gehört zu L3.
- **Bisherige Texte:** Höchstens **8 erklärte Wörter** (`woerter`) pro Lektionstext, die nicht aus dieser oder
  früheren Lektionen kommen. Wo ein bisheriger Text mehr braucht, werden einzelne Wörter ausgetauscht oder Sätze
  vereinfacht. „Verstanden“ bleibt erhalten.
- **Hörsätze einer Lektion:** Sätze aus Text und Kapiteln dieser und früherer Lektionen. Das Prüfskript meldet
  in Grammatik-Übungen Wörter aus späteren Lektionen als Hinweis (kein Fehler). Gelöst werden die Hinweise beim
  Schreiben der jeweiligen Lektion.
- **R1** kommt mit Schritt 3, weil sie Italienisch → Deutsch und Hören nach Lektion braucht. Schritt 1 umfasst
  Lektion 1–4.
- IDs: `l01` … `l28`, `r1` … `r5`. 80 % einer 5-Aufgaben-Hörrunde heißt 4 von 5.

## Dem Bauenden überlassen

- Genaues Aussehen der Lektionsseite im Stil „Toskana, warm“ (vorhandene Variablen und Bausteine).
- Wie die Ripasso-Übungen gemischt werden.
- Wortwahl der Hinweistexte (kurz, freundlich, auf Deutsch, ohne Druck).
- Wie die Kurzform von Hörsätzen gebildet wird (z. B. `Uebungen.sauber()`).

## Nachtrag 15.11.2026: B1, B2 und Zusatzübungen (Claudes Entscheidungen)

Nicole hat gebeten, B1 und B2 selbständig zu bauen und Zusatzübungen für zu viele Fehler einzubauen.

- **Lektionsplan B1** (Lektion 19–28, Wiederholung nach je 4): 19 Pläne (futuro), 20 Wünsche (condizionale),
  R5 (17–20), 21 Telefon (stare + gerundio), 22 Mail (glielo), 23 Ragù der Nonna (ci/ne), 24 Vorstellungsgespräch
  (trapassato), R6, 25 Venedig/Meinung (congiuntivo), 26 Zeitung: Bild entdeckt (Passiv), 27 Bergtour (se + Gegenwart),
  28 Reklamation (dimmi / mi dica), R7 – B1 geschafft.
- **Lektionsplan B2** (Lektion 29–36): 29 Lotto (congiuntivo imperfetto), 30 Reisepech (condizionale passato),
  31 Polizeibericht (congiuntivo passato), 32 Pizza Margherita (passato remoto), R8, 33 Interview (indirekte Rede),
  34 Verpasster Zug (se avessi saputo), 35 Homeoffice (benché, affinché …), 36 Pesto (il quale, chi, ciò che), R9.
- **Abweichung vom Plan:** R5 umfasst Lektion 17–20 (wie im Plan), A2 endet damit ohne eigene Wiederholung nach L18.
- **Wörter:** Neue Themen „Lektion 19: …“ usw. in `wortschatz.js` (Stufe B1/B2). Wörter aus alten Themen, die noch
  zu keiner Lektion gehörten, wurden B1/B2-Lektionen zugeordnet, wo sie passen. IDs der alten Wörter unverändert.
- **Neue Dateien:** `grammatik-b.js`, `texte-b.js` (hängen an `KAPITEL` / `LESETEXTE` an), `zusatz.js`.
- **Zusatzübungen:** Jedes Kapitel hat `zusatz: { tipp, uebungen }` mit 6 leichteren Übungen; neue Art `wahl`
  (aus 3 Wörtern wählen). Angeboten, wenn ein Üben unter 80 % bleibt: am Ende der Übung, auf der Kapitelseite
  und nach „Kann ich schon“ oder einer Wiederholung (Kapitel mit den meisten Fehlern). Sie zählen nicht als gelöste
  Übungen und machen kein Kapitel „geübt“ – sie sind eine Hilfe, kein Ersatz. Kein `FORMAT`-Wechsel nötig
  (neues Feld `fortschritt.grammatik[id].zusatz` ist freiwillig).
- `GRUNDWOERTER` um kleine Wörter erweitert (dalla, nello, questo, quello, se, glielo, cui, ciò …).
