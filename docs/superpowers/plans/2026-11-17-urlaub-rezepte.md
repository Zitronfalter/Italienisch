# Wörter für Urlaub und Rezepte Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fünf neue Wort-Lektionen (75 Wörter, 5 Texte) für Urlaub und Rezepte hinter vorhandenen Wort-Lektionen.

**Architecture:** Daten in `wortschatz.js`, `lektionen-a2.js`/`lektionen-b1.js`, `texte-a2.js`/`texte-b1.js`; kleine Erweiterung von `wortLektionenEinfuegen` in `lektionen-a1.js`.

**Tech Stack:** Plain JS, `node --test`, Prüfskripte in `werkzeuge/`.

**Spec:** [docs/superpowers/specs/2026-11-17-urlaub-rezepte-design.md](../specs/2026-11-17-urlaub-rezepte-design.md)

## Global Constraints

- Wort-IDs bestehender Wörter unverändert; Lektions-IDs `l10d`, `l11d`, `l16d`, `l17d`, `l23d`; Nummern 10.4, 11.4, 16.4, 17.4, 23.4.
- Jeder Text: ≤ 8 erklärte neue Wörter, `node werkzeuge/lektionen-pruefen.js` 0 Fehler, Übersetzung je Zeile, Fragen (erste Antwort richtig).
- `VERSION` in `sw.js` erhöhen (v72 → v73). Commit nur auf Nicoles Wort.

## Review Focus

- Bestehende Lektionen behalten Nummer und Reihenfolge (x.1–x.3 vor x.4).
- Wiederholungen, die l10/l11/l16/l17/l23 umfassen, bekommen die neue Lektion dazu.
- Nicoles Stand (`fortschritt.lektionen`) unberührt; `Lektionen.aktuelle()` springt nicht.
- `Woerterliste`/`Meine Wörter` zeigt die neuen Wörter unter der neuen Lektion.
- Kein Wort doppelt im Wortschatz.

---

### Task 1: `wortLektionenEinfuegen` hängt hinten an

**Files:** Modify `lektionen-a1.js:11-32`; Test `werkzeuge/test/wortlektionen.test.js`.

- [ ] Test `vierte Wort-Lektion kommt nach x.3`: nach `wortLektionenEinfuegen({ l10: [{ id: 'test10d', … }] })` (im Testkontext) steht `test10d` direkt nach `l10c`, `nr === 10.4`; `l10a–c` behalten 10.1–10.3.
- [ ] Rot sehen; umsetzen: Einfügestelle = hinter der letzten vorhandenen Lektion mit `basis.nr < nr < basis.nr + 1`, Nummer zählt ab deren Anzahl weiter; grün.

### Task 2: Wörter, Lektionen, Texte

**Files:** `wortschatz.js` (5 neue Themen: „Urlaub: Strand und Stadt“ A2, „Rezepte: Zubereiten“ A2, „Urlaub: unterwegs“ A2, „Rezepte: Zutaten“ A2, „Rezepte: Ofen und Geräte“ B1), `lektionen-a2.js` (l10d, l11d, l16d, l17d), `lektionen-b1.js` (l23d), `texte-a2.js` (`a2-strand-stadt`, `a2-rezept-risotto`, `a2-unterwegs`, `a2-rezept-zutaten`), `texte-b1.js` (`b1-rezept-ofen`).

- [ ] Wörter + Lektionen eintragen (Listen aus der Spec); `uebenKapitel` wie die Nachbar-Lektion.
- [ ] Texte schreiben (5–7 Zeilen, Rezept bzw. Szene).
- [ ] `node werkzeuge/lektionen-pruefen.js` → 0 Fehler; `node --test "werkzeuge/test/*.test.js"` → grün.

### Task 3: Prüfen und Doku

- [ ] Browser: Reiter Lektionen zeigt die neuen Lektionen an richtiger Stelle; eine neue Lektion öffnen, Text öffnen.
- [ ] `sw.js` VERSION; `ROADMAP.md` neue Zeile; `TODO.md` Punkt „Urlaub/Rezepte-Lektionen ansehen, Rezept als eigenen Text ausprobieren“; `CLAUDE.md` (4. Wort-Lektion möglich).
