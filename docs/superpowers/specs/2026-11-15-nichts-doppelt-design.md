# Nichts doppelt an einem Tag – Entwurf (15.11.2026)

## Warum
Nicole hat an einem Tag viele Runden gemacht. Es kamen immer wieder dieselben Aufgaben, Sätze und Wörter – frustrierend. Ursache: Die App nimmt nur Bekanntes; am Anfang (Lektion 1: 22 Wörter, 1 Kapitel, 1 Text) ist der Vorrat klein, und neue Wörter sind pro Tag begrenzt.

## Ziele
- Eine **richtig gelöste** Aufgabe (Satz, Grammatik-Übung, Hör-Aufgabe) kommt am selben Tag nicht noch einmal.
- **Falsch gelöste** Aufgaben dürfen am selben Tag wiederkommen (Nicoles Wunsch: nochmal richtig machen).
- Ist alles geübt, sagt Limo das ehrlich – statt Wiederholungen anzubieten – und bietet an: „Mehr neue Wörter holen“ (+3) oder „Für heute genug“.

## Nicht-Ziele / Anti-Ziele
- Neue Übungsarten (kommt später, Ansatz B).
- Vokabel-Kennenlernen bleibt wie es ist: Es braucht Wiederholung (4 gelöste Aufgaben pro Wort) und ist von selbst begrenzt.
- Kein Druck: „Mehr neue Wörter“ nur auf Wunsch, kein Zähler, keine Belohnung.

## Ansätze
- **A – Tagesgedächtnis + ehrliches Ende + „Mehr neue Wörter“ – gewählt.**
- B – Mehr Übungsarten – später.
- C – Beides, A zuerst – Nicoles Wahl.

## Entschieden (Bauweise, Claudes Vorschläge)
- `fortschritt.heute = { datum, gesehen: [schlüssel] }`, beim Datumswechsel leer. Schlüssel: Hörsatz `h:<satz>`, Grammatik-Übung `g:<kapitel>:<nr>`, erzeugte Aufgabe `e:<satz>`, Wort Italienisch → Deutsch `d:<wortId>`. Nur bei **richtig** eintragen. Kein neues `FORMAT` nötig (Feld kommt dazu, alte Stände lesen es als leer).
- Ausfiltern beim Zusammenstellen: Hören (`Uebungen.runde`), Grammatik üben (Kapitel-Übungen), Grammatik-Wiederholung, Aufgabenrunden (Wiederholungs-Lektion, „Kann ich schon“).
- `naechsterSchritt()` / `naechsterInhalt()` überspringen Teile, für die heute nichts Frisches mehr da ist (zu wenig für eine Runde). Bleibt nichts: Ende-Seite „Für heute hast du alles geübt“ mit Limo (freut).
- **„Mehr neue Wörter holen“**: `fortschritt.neuExtra = { datum, anzahl }` erhöht die heutige Grenze um 3 und startet gleich eine Runde. Nur angeboten, wenn die neuen Wörter wegen des Tageslimits pausieren (`pause === 'tag'`) und die aktuelle Lektion noch Wörter hat. Bei anderen Pausen (viel fällig, viel im Kennenlernen, läuft schwer) sagt Limo: „Morgen kommt Neues.“
- Test für Tagesgedächtnis (eintragen nur bei richtig, Datumswechsel leert, Filter) und für `neuExtra`.

## Dem Bauenden überlassen
- Mindestgröße „genug für eine Runde“ je Übungsart.
- Genaue Texte von Limo (ruhig, ohne Druck).
