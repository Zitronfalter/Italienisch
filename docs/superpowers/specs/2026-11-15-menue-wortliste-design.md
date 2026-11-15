# Einfacheres Menü und „Meine Wörter“ – Entwurf (15.11.2026)

## Warum
Die Startseite ist eine lange Liste (Los, Lektionen, Frei üben, Fortschritt, Sichern). Nicole möchte es übersichtlicher und einfacher. Außerdem möchte sie prüfen, was sie schon kann: eine Wortliste mit Stand und Selbsttest.

## Ziele
- Startseite zeigt nur das Nötigste: Limo, aktuelle Lektion, „Los“.
- Alles andere mit einem Tippen über eine Leiste unten erreichbar.
- Wortliste zeigt pro Wort den Stand und erlaubt Selbsttest ohne Druck.

## Nicht-Ziele / Anti-Ziele
- Keine Abfrage aus der Liste, die den Karteikasten verändert (würde die Planung durcheinanderbringen).
- Keine Punkte, Prozent-Ringe oder Serien in der Liste.
- Keine neuen Daten im Speicher nötig (kein neues `FORMAT`).

## Ansätze (Menü)
Entwürfe im Design-Artifact „Menü-Vorschläge Italienisch-App“:
- **A · Leiste unten** (4 Reiter) – **gewählt**: alles mit einem Tippen, Startseite bleibt leer und ruhig, vertraut von iPhone-Apps.
- B · Vier Kacheln unter „Los“, Fortschritt/Sichern im Rädchen – Fortschritt versteckt.
- C · Nur „Los“ + „Mehr …“ – sehr ruhig, aber alles zwei Tipps entfernt.

## Ansätze (Wortliste)
- **A + B – gewählt**: Liste mit Stand + Schalter „Deutsch verdecken“ (zählt nicht).
- C · Abfrage aus der Liste mit Karteikasten-Wirkung – verworfen (siehe Anti-Ziele).

## Entschieden
**Leiste unten**, sichtbar auf den Haupt-Bildschirmen, ausgeblendet während Runde, Übung, Aufgaben, Hören, Lesen eines Texts, Niveau-Test, Wortcheck:
1. **Heute** – Gruß, Limo, „Du warst gerade hier“ (falls offen), aktuelle Lektion mit ihren Teilen, Knopf „Los“.
2. **Lektionen** – Lektionsliste wie bisher, erledigte eingeklappt.
3. **Üben** – Lesen, Grammatik, Hören & Üben, Wörterbuch.
4. **Mein Stand** – „Wörter, die sitzen“ + Knopf „Alle Wörter ansehen“ (→ Meine Wörter), Karteikasten, neue Wörter pro Tag, Grammatik-Karteikasten, Texte/Grammatik geübt, Niveau-Test, ganz unten „Sichern & Laden“.

**Meine Wörter** (erreichbar aus „Mein Stand“):
- Gruppen nach Lektion (Lernweg-Reihenfolge, Anzeige-Nummer `Lektionen.anzeigeNr`), eigene Wörter als eigene Gruppe. Gruppen aufklappbar; aktuelle Lektion offen.
- Stand je Wort (aus `Speicher.daten.karten`): sitzt (`fach >= SICHER_AB_FACH`, also ab Fach 4, grün), übe ich noch (Fach darunter), lerne ich kennen (`Vokabeln.istJung`), noch nicht dran (keine Karte, grau). Unterscheidbar nicht nur über Farbe (Wort/Zeichen dazu).
- Filter oben: Alle · Sitzt · Übe ich noch · Lerne ich kennen · Noch nicht dran.
- Antippen eines Worts: vorlesen (Web Speech, it-IT).
- Schalter „Deutsch verdecken“: Bedeutungen verdeckt, Tippen zeigt sie; ändert nichts am Lernstand.

## Dem Bauenden überlassen
- Genaue Zeichen/Icons der Leiste (Linien-SVG, keine Emoji), Abstände, Safe-Area unten (`env(safe-area-inset-bottom)`).
- Wie „Zurück“-Knöpfe auf Unterseiten zum richtigen Reiter führen.
- Ob Filter/Verdecken-Wahl im Gerät gemerkt wird.
- Hell und dunkel, iPhone 393 × 852; `VERSION` in `sw.js` erhöhen; Tests für die Stand-Einteilung.
