# Tippfehler-Nachsicht – Entwurf (19.11.2026, kleine Änderung)

## Warum
Nicole tippt auf dem iPhone. Offensichtliche Vertipper (Nachbartaste, verdrehte Buchstaben, Akzent vergessen) sollen nicht als Fehler zählen. Echte Fehler bleiben streng: wenn ein Grammatikfehler entsteht, das Wort eine andere Bedeutung bekommt oder zu viele Fehlerchen im Wort sind. Heute ist es umgekehrt unscharf: *grazia* geht für *grazie* durch (1 Buchstabe anders), *mangaimo* für *mangiamo* nicht (zählt als 2).

## Ziele
- Eine gemeinsame Prüfung „nur vertippt?“ für **Vokabel-Schreiben, Diktat und Grammatik-Lücken** (auch Satz-Lücken in `saetze.js`).
- Durchwinken mit Hinweis „Kleiner Tippfehler – richtig ist …“ (zählt als richtig, Stufe `fast`).
- Bei anderem Wort ein erklärender Hinweis („*grazia* ist ein anderes Wort (die Gnade)“).

## Nicht-Ziele
- Keine Nachsicht bei Kacheln (dort wird nichts getippt).
- Keine Änderung an „Artikel vergessen“ / „falscher Artikel“ beim Vokabel-Schreiben (bleibt wie heute; in Grammatik weiter streng).

## Regeln (pro Wort)
**Durchwinken**, wenn genau **ein Fehlerchen** im Wort ist und keine Streng-Regel greift:
- Nachbartaste auf der iPhone-Tastatur (QWERTZ und QWERTY, also auch y/z),
- zwei benachbarte Buchstaben vertauscht,
- ein Buchstabe doppelt oder vergessen,
- Akzent vergessen oder falsch (é/è).

Ersetzen/Doppelt/Vergessen nur bei Wörtern ab **4 Buchstaben**; ein vergessener Akzent auch bei kürzeren.

**Streng (falsch)**, wenn
1. das Getippte ein **anderes echtes Wort oder eine andere Form** ist: Grundwortschatz, `GRUNDWOERTER`, Nicoles bekannte Wörter, Wörterbuch (`Woerterbuch.suche`, auch erratene Formen). Das gilt auch für Akzente: *e* statt *è*, *da* statt *dà*, *la* statt *là* sind falsch.
2. sich der **Endvokal** ändert (*-o/-a/-i/-e* gegeneinander) – fast immer Geschlecht, Zahl oder Person.
3. **mehr als ein** Fehlerchen im Wort ist.
4. bei Wörtern unter 4 Buchstaben irgendetwas außer einem Akzent fehlt/abweicht (*il/lo*, *di/da*).

**Diktat:** Satz wortweise prüfen. Pro Wort höchstens ein Fehlerchen; mehr als **2 vertippte Wörter** im Satz → falsch. Vertippte Wörter werden in der Antwort markiert wie heute die falschen.

## Ansätze
1. **Gemeinsame Datei `tippfehler.js`** (gewählt): eine Funktion entscheidet für ein Wortpaar (getippt, richtig): `richtig | tippfehler | anderesWort | falsch`. Vokabeln, Diktat, Grammatik rufen sie auf → überall gleiche Regeln, ein Test.
2. Regeln jeweils in `vokabeln.js` und `uebungen.js` anpassen – verworfen: läuft mit der Zeit auseinander.

## Was der Bau festlegt
- Tastatur-Nachbarn als kleine Tabelle in `tippfehler.js`.
- Wenn das Wörterbuch noch nicht geladen ist, zählt nur der Grundwortschatz als „anderes Wort“.
- Eine erratene Form derselben Grundform wie die Lösung (z. B. *mangiano* zu *mangiare*) ist auch „andere Form“ → streng.
- Test `tippfehler.test.js` mit Beispielen: *grazia*, *mangiano*, *mangaimo*, *e/è*, *la/lo*, Nachbartaste, *cogome*. Vorhandener Test (Satz-Lücke *e* statt *è* = fast) wird auf „falsch“ geändert.
