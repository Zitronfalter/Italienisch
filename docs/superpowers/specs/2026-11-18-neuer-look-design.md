# Neuer Look „Reiseskizze“ – Design

Stand: 18.11.2026 · mit Nicole abgestimmt im Gespräch vom 18.11.

## Warum

Nicole möchte, dass die App schöner aussieht und das Lernen mehr Spaß macht. Nach zehn Entwürfen steht die Richtung fest: ein Skizzenbuch eines Architekten auf Reisen. Tusche mit feinem Zitterstrich, zart laviert, Ocker statt Zitronengelb, Handschrift Caveat, handgezeichnete Kästen und zu jeder Lektion eine kleine Reiseskizze. Vorlagen: `docs/superpowers/entwuerfe/entwurf9-zeichenstile.html` (ganz oben: „Heute“ mit Caveat, Papier und Pappe) und `entwurf10-skizzen.html` (58 Motive, Zuordnung zu allen Lektionen, Abwandlungen).

## Ziele

- Die ganze App (alle Bildschirme) im neuen Look: Farben, Schrift, Rahmen, Knöpfe.
- Auf „Heute“ und in der Lektionsliste die Skizze der jeweiligen Lektion.
- Hintergrund wählbar: Papier (hell) oder Pappe (warmes Grau), mit Reglern für Helligkeit und Wärme.
- Limo erstmal ganz raus.
- Läuft weiter offline, flüssig auf dem iPhone (Safari, Home-Bildschirm), ohne Kosten.

## Nicht-Ziele (jetzt nicht)

- Lektionen als Reiseroute (Entwurf 7/8) – kommt später als eigener Schritt (in ROADMAP vormerken).
- Neue Motive oder Änderungen an der Motiv-Zuordnung.
- Änderungen an Lernlogik, Lernstand oder Übungsabläufen.
- Echter Dunkelmodus mit dunklem Hintergrund und heller Tusche.

## Was auf keinen Fall passieren darf

- Lernstand geht verloren oder wird verändert (nur neue Einstellungen dazu, `FORMAT` nur erhöhen, wenn nötig, alte Daten weiter lesbar).
- Text wird schwer lesbar (Caveat nicht für Fließtext, italienische Sätze, Erklärungen oder Eingaben; Kontrast auch bei extremen Reglerstellungen ausreichend).
- Die App ruckelt (z. B. beim Scrollen der Lektionsliste oder beim Kacheln-Ziehen).
- Etwas lädt aus dem Internet (Schrift, Bilder) – alles liegt im Projekt.
- Belohnungs-Effekte, Punkte oder Animationen kommen dazu (bleibt ruhig).

## Festgelegt (Nicoles Entscheidungen)

1. **Limo: Variante A – ganz raus.**
   - „Heute“: Skizze der aktuellen Lektion statt Limo.
   - Übungen: die kleine Figur in `.frage-karte` fällt weg. Ein zusätzlicher Satz ist nicht nötig – die vorhandene Rückmeldung (`rueck-titel`: „Richtig.“, „Fast richtig – zählt.“, „Noch nicht.“) bleibt unverändert. *(Claudes Entscheidung nach der Prüfung: sonst stünde dasselbe doppelt da.)*
   - Die Texte, die Limo bisher sagt (Start-, Ende-, Festigen-, Geschafft-Nachrichten und Tipps in `begleiter.js`), bleiben als Notiz ohne Figur – nur neu gestaltet, keine neuen Inhalte. *(Claudes Entscheidung; ein „Satz des Tages“ wie im Entwurf wäre neuer Inhalt und ist eine Idee für später.)*
   - App-Symbol: neue Zitrone in Tusche im Skizzen-Stil (SVG + PNG 180/192/512).
   - `limo.js` bleibt im Projekt (ungenutzt), damit Limo später zurückkommen kann. Nicht löschen.
2. **Hintergrund: Variante A – Pappe statt Schwarz.**
   - Einstellung „Hintergrund“ mit drei Möglichkeiten: **Wie iPhone** (hell → Papier, dunkel → Pappe), **Papier**, **Pappe**. Standard: Wie iPhone.
   - Zwei Regler **Helligkeit** und **Wärme**; sie gelten für den gerade gezeigten Hintergrund und wirken sofort. Grenzen so, dass der Text immer lesbar bleibt. Knopf „Zurücksetzen“ = Werte aus Entwurf 9 (Papier `#fbfaf5`, Pappe `hsl(29 16% 80%)`).
   - Skizzen bleiben auf beiden Hintergründen gleich (schwarze Tusche).
3. **Lektionen-Seite: Variante A – Liste im neuen Kleid**, jede Lektion mit kleiner Skizze daneben.
4. **Rahmen und Knöpfe: Variante B – fertige gezeichnete Rahmen** (siehe Ansätze).
5. **Reihenfolge in drei Etappen** (siehe unten); nach jeder Etappe schaut Nicole auf dem iPhone.

## Ansätze

### Rahmen und Knöpfe

- **A – wie im Entwurf:** Ein Skript misst jedes Element und zeichnet seinen Rahmen einzeln (`skizzieren()` in Entwurf 9). Am echtesten, jeder Kasten anders. Aber bei jeder Inhalts- oder Größenänderung neu zeichnen (neue Aufgaben, aufklappende Antworten, Kacheln) – fehleranfällig, kann ruckeln.
- **B – fertige Rahmen (gewählt):** Einige Rahmen einmal als SVG vorzeichnen (Kasten, Hauptknopf, Nebenknopf, Kachel, Trennlinie, Balken) und per CSS um die Elemente legen; sie passen sich der Größe an. Robust, schnell, keine Skripte. Gleiche Elementarten sehen gleich aus – durch den Zitterstrich wirken sie trotzdem gezeichnet.
- **Gewählt: B**, weil die App viele Bildschirme mit wechselndem Inhalt hat und flüssig bleiben muss.

### Skizzen

- Zeichnen zur Laufzeit wie im Entwurf (Motivdaten + Zitterstrich + Wasserfarben-Filter).
- Damit die Lektionsliste nicht bremst: Bild erst zeichnen, wenn es ins Sichtfeld kommt; fertiges Bild zwischenspeichern, damit es beim nächsten Mal sofort da ist.
- Verworfen: alle Bilder vorab als Dateien erzeugen (bräuchte ein eigenes Werkzeug, das den Zitterstrich ohne Browser berechnet – mehr Aufwand ohne sichtbaren Vorteil).

## Gestaltung (aus Entwurf 9/10)

- **Farben** (als Variablen in `style.css`, ersetzen „Limo“): Papier/Pappe als Hintergrund mit feiner Papierstruktur; Tusche `#1f1c18` als Text- und Linienfarbe; Ocker `#d6a24a` für Hauptknöpfe, Fortschritt, aktiven Reiter, Gruß-Unterstrich, Schrift darauf dunkel; Ocker-Linie `#8a6220` für Nebenknöpfe und Links. `--richtig` Blattgrün und `--fehler` ruhiges Blau bleiben (Bedeutung unverändert). Ocker nie als Schriftfarbe auf Papier.
- **Schrift:** Caveat (lokale Datei – Herkunft siehe Frage an Nicole unten, SIL Open Font License, Eintrag in `LIZENZEN.md`) für Überschriften, Beschriftungen, Knöpfe, Leiste, Lektionsnamen – mindestens etwa 15–16 px. Fließtext, Notizen, italienische Sätze, Eingabefelder und Kacheln bleiben in der normalen Schrift; Serif wie bisher für Lesetexte.
- **Rahmen:** Tuschelinie mit Architekten-Zitterstrich, Enden stehen an den Ecken leicht über; nicht schräg. Hauptknopf: Ocker-Fläche, leicht versetzt, mit Tuscherahmen. Nebenknopf: Rahmen in Ocker-Linie.
- **Kacheln:** wie Papierschnipsel mit gezeichnetem Rand; Ziehen und Lücke (`kachel-luecke`) funktionieren wie bisher.
- **Skizzen:** Stil „zwischen M1 und M2“ mit Zitterstrich (Funktion `skizze()` in Entwurf 10). Zuordnung Lektion → Motiv und Abwandlung (2. Mal gespiegelt + andere Farben, 3. Mal Abendlicht, 4. Mal Regen) wie in Entwurf 10. Wiederholungen (`art: 'ripasso'`) zeigen die Skizze der Lektion davor. Die Zuordnung wird in der App über die **Lektions-ID** gespeichert (nicht über die Anzeige-Nummer), damit später eingefügte Lektionen nichts verschieben. *(Claudes Entscheidung.)*
- **„Heute“:** Aufbau wie Entwurf 9 oben: Kopfzeile mit Datum und Stufe, Gruß in Caveat mit Ocker-Unterstrich, Skizze mit italienischer Bildunterschrift, Kasten mit aktueller Lektion und Fortschritt, Notiz, Hauptknopf „Los“. Inhalt und Knöpfe bleiben die von heute (kein neuer Nebenknopf „Wörter wiederholen“; „Lieber neu anfangen“ in der Weitermachen-Karte bleibt der Nebenknopf; der Hinweis „Etwa 10 Minuten …“ wandert in die Notiz). *(Claudes Entscheidung: der Lernablauf ändert sich nicht.)* Muss weiter ohne Scrollen passen (393 × 852).
- **Bildunterschrift:** der italienische Titel des Motivs (`bild` in Entwurf 10, z. B. „Una piazza con la fontana“), für alle Abwandlungen gleich. Nur Schmuck, wird nicht auf bekannte Wörter geprüft. *(Claudes Entscheidung.)*

## Etappen

1. **Grundlage:** neue Farbvariablen (Papier/Pappe), Papierstruktur, Einstellung „Hintergrund“ mit Reglern und Zurücksetzen, Caveat lokal einbinden, Schriftzuordnung. App sieht danach schon „neu“ aus, noch mit alten Rahmen.
2. **Rahmen, Knöpfe, Limo raus:** gezeichnete Rahmen auf allen Bildschirmen (Heute, Üben, Lektionen, Mein Stand, Einstellungen, Runde, Übungen, Lesen, Hören, Test …), Kacheln als Papierschnipsel, Limo-Figuren entfernen (Texte bleiben), neues App-Symbol.
3. **Skizzen:** Motive und Zuordnung aus Entwurf 10 in die App übernehmen (eigene Datei), Skizze auf „Heute“ und klein in der Lektionsliste, verzögertes Zeichnen + Zwischenspeicher.

Jede Etappe: `VERSION` in `sw.js` erhöhen, neue Dateien in `DATEIEN`, Tests grün, Prüfung in 393 × 852 auf Papier und Pappe, `ROADMAP.md` und `CLAUDE.md` (Design-Abschnitt, Dateiliste) anpassen, Aufgaben für Nicole in `TODO.md`.

## Dem Bauenden überlassen

- Genaue Grenzen der Regler (Helligkeit/Wärme) – Hauptsache, Text bleibt lesbar.
- Wie die gezeichneten Rahmen technisch an die Elemente kommen (z. B. `border-image` oder Hintergrund-SVG), solange sie sich der Größe anpassen und nicht verzerren.
- Wie und wo der Zwischenspeicher für Skizzen liegt (nicht in `italienisch-daten`).
- Genaue Formulierung der kurzen Sätze nach dem Prüfen (ruhig, ohne Druck, wie bisher bei Limo).
- Aufteilung in Dateien (z. B. `skizzen.js` für Motive und Zeichnen).
