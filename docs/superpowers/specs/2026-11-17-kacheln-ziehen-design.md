# Kacheln ziehen (Entwurf, kurz)

Stand 17.11.2026, mit Nicole abgestimmt.

## Warum

Nicole (16.11.): Gelegte Kacheln sollen sich mit dem Finger verschieben und zwischen andere einfügen lassen. Bisher muss sie für eine Änderung in der Satzmitte alles dahinter wieder wegtippen.

## Ziele

- **Ziehen** (Nicoles Wahl, Variante A): Kachel festhalten und an eine neue Stelle ziehen. Ab ca. 8 px Bewegung ist es Ziehen statt Tippen. Die Kachel folgt dem Finger (leicht angehoben, Schatten), eine schmale Lücke zeigt, wo sie landet; die anderen Kacheln rücken zur Seite.
  - innerhalb der Ablage (auch über beide Zeilen),
  - aus dem Vorrat direkt an eine Stelle im Satz,
  - außerhalb der Ablage losgelassen: gelegte Kachel geht zurück in den Vorrat; Vorrat-Kachel bleibt im Vorrat.
- **Tippen wie bisher:** Vorrat-Kachel antippen → hinten anlegen; gelegte antippen → zurück.
- Nach dem Prüfen (`.fertig` / gesperrt) nichts mehr verschieben.
- **Ein Baustein** `kacheln.js` für alle vier Stellen: Runde (Vokabeln/Sätze, `runde-ablage`), Grammatik (`kachel-ablage`), Hören & Üben (`hoer-ablage`), gemischte Aufgaben (`aufgabe-ablage`). Die vier eigenen Code-Stücke fallen weg; das Prüfen liest weiter die Reihenfolge der gelegten Kacheln.

## Nicht-Ziele

- Keine Hüpf- oder Belohnungs-Animationen. Keine fremde Bibliothek.
- Kein Ziehen mit der Maus-Drag-&-Drop-Technik des Browsers (auf dem iPhone unbrauchbar).

## Ansätze

1. **Eigener Baustein mit Pointer Events** – gewählt (einziger sinnvoller Weg).
2. HTML5 Drag & Drop – funktioniert auf iPhone-Touch nicht zuverlässig.
3. Fertige Bibliothek (z. B. SortableJS) – braucht trotzdem viel eigenen Code für zwei Bereiche, zusätzliche Datei offline, mehr als nötig.

## Beim Bauen (Claudes Entscheidungen)

- Einfügestelle als reine Funktion (`Kacheln.einfuegeStelle`), testbar in Node.
- `touch-action: none` auf Kacheln, damit das Ziehen nicht die Seite scrollt.
- Neue Datei in `index.html`, `DATEIEN` in `sw.js`, `werkzeuge/test/laden.js`; `VERSION` erhöhen.
- Prüfung im Browser in iPhone-Größe mit Touch, hell und dunkel; Test auf dem echten iPhone als Aufgabe in TODO.md.
