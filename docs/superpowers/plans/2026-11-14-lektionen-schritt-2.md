# Lektionen, Schritt 2 (Italienisch → Deutsch mit Kacheln) – Bauplan

> **Für Agenten:** BENÖTIGTE TEIL-FÄHIGKEIT: superpowers:executing-plans. Schritte mit Kästchen (`- [ ]`).

**Ziel:** In der Vokabelrunde werden fällige Wörter abwechselnd auch von Italienisch nach Deutsch abgefragt. Die deutsche Antwort wird aus Kacheln gelegt.

**Aufbau:** Die reine Logik kommt nach `vokabeln.js` und wird mit Node getestet: Zielwörter, Kacheln, Prüfen und Richtung. `app.js` bekommt eine neue Schrittart `'deutsch'` mit Kachel-Ablage im Bildschirm `screen-runde`.

**Konzept:** [Abschnitt „Italienisch → Deutsch mit Kacheln“](../specs/2026-11-14-lektionen-design.md)

## Feste Regeln

Wie in Schritt 1: Deutsch, keine Kosten, `sw.js`-`VERSION` erhöhen, Wort-IDs nicht ändern, Farben nur über Variablen, Prüfung in 393 × 852 hell und dunkel. Kein Commit ohne Nicoles Okay.

## Worauf beim Prüfen achten

1. **Bedeutungen mit Klammern, „;“, „/“, „?“** (z. B. „bitte (als Antwort auf danke)“, „Wie geht es dir?“): Das Ziel ist ohne Klammern und Satzzeichen, und nur die erste Variante zählt. → Test `deutschZiel`.
2. **Eine falsche Kachel ist gleich einer richtigen** (z. B. „der“ kommt in mehreren Bedeutungen vor): Es darf keine Kachel doppelt geben, sonst wird das Prüfen mehrdeutig. → Test `deutschKacheln: keine doppelten Kacheln`.
3. **Eigene Wörter (`e-…`) ohne Thema:** Die falschen Kacheln kommen dann aus dem ganzen Wortschatz. → Test.
4. **Groß- und Kleinschreibung** beim Prüfen ist egal. → Test `pruefeDeutsch`.
5. **Fach 1:** Hier wird immer Italienisch geschrieben, auch wenn `richtung` 'it' war. → Test `richtungFuer`.

### Aufgabe 1: Logik in `vokabeln.js`

**Schnittstellen (neu in `Vokabeln`):**
- `deutschZiel(de: string) → string[]`
  - Teil vor dem ersten „;“ nehmen, dann vor dem ersten „/“.
  - `(…)` entfernen, Satzzeichen `.,!?;:–` entfernen.
  - In Wörter teilen.
- `deutschKacheln(w) → { ziel: string[], kacheln: string[] }`
  - `kacheln` enthält die Zielwörter und falsche Wörter.
  - Falsche Wörter: 3 Stück bei einem Zielwort, sonst 2. Sie kommen aus `deutschZiel` anderer Wörter desselben Themas, zur Not aus dem ganzen Wortschatz.
  - Kein Wort doppelt, verglichen in Kleinschreibung.
  - Die Liste ist gemischt.
- `pruefeDeutsch(gelegt: string[], w) → boolean`: Die gelegten Wörter ergeben das Ziel, Groß- und Kleinschreibung ist egal.
- `richtungFuer(id) → 'it' | 'de'`
  - 'it', wenn die Karte fehlt, jung ist oder in Fach 1 liegt.
  - Sonst das Gegenteil von `karte.richtung`. Ohne `richtung` gilt 'de'.
- `eintragen(id, gewusst, richtung = 'it')`: speichert zusätzlich `karte.richtung = richtung`.

- [ ] Tests in `werkzeuge/test/deutsch.test.js` schreiben (Prüfpunkte 1–5 und die Fälle oben), rot sehen
- [ ] Bauen, `node --test "werkzeuge/test/*.test.js"` grün

### Aufgabe 2: Oberfläche

- `index.html`, in `screen-runde` nach `runde-paare`: `<div id="runde-kacheln" hidden>` mit `kachel-ablage#runde-ablage` und `kachel-vorrat#runde-vorrat` (`lang="de"`)
- `app.js`
  - In `starteRunde` werden fällige Wörter mit `Vokabeln.richtungFuer(id) === 'de'` zu `{ art: 'deutsch', id }`.
  - `zeigeSchritt` für `'deutsch'`:
    - Frage „Was heißt das auf Deutsch?“, darunter das italienische Wort (`lang="it"`).
    - Knopf „▶ Anhören“ sichtbar.
    - Kacheln aus `deutschKacheln`, Antippen legt eine Kachel, nochmal Antippen nimmt sie zurück (wie `hoerKachelLegen`).
    - Dazu „Prüfen“ und „Weiß ich nicht“.
  - `pruefen` für `'deutsch'`:
    - Prüft mit `pruefeDeutsch`.
    - Speichert mit `eintragen(id, gewusst, 'de')`. Nur der erste Versuch zählt.
    - Nicht gewusst: Der Schritt `'deutsch'` kommt am Ende noch einmal.
    - Die Lösung wird als deutscher Text gezeigt.
  - Bei `'frage'` zählt `eintragen(…, 'it')`.
- `sw.js`: `VERSION` erhöhen.

- [ ] Bauen
- [ ] Im Browser prüfen: Karte in Fach 2 mit `richtung: 'it'` → Aufgabe Italienisch → Deutsch. Richtig legen → „Richtig.“, die Karte geht in Fach 3 mit `richtung: 'de'`. Falsch → Lösung, die Aufgabe kommt am Ende wieder. Keine Konsolenfehler. Hell und dunkel.
- [ ] ROADMAP: Schritt 2 ✅, Schritt 3 ⏳. CLAUDE.md: `vokabeln.js` um die Richtung ergänzen.
