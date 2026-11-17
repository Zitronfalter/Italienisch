# Kacheln ziehen Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Gelegte Kacheln mit dem Finger verschieben und Vorrat-Kacheln direkt an eine Stelle ziehen – an allen vier Kachel-Stellen gleich.

**Architecture:** Neue Datei `kacheln.js` (IIFE `Kacheln`, wie die anderen Dateien) mit einer reinen Funktion für die Einfügestelle (Node-testbar) und dem Aufbau des Vorrats samt Tippen/Ziehen über Pointer Events. `app.js` ruft an den vier Stellen nur noch `Kacheln.fuellen(...)` auf.

**Tech Stack:** Plain JS ohne Build, Pointer Events, `node --test`.

**Spec:** [docs/superpowers/specs/2026-11-17-kacheln-ziehen-design.md](../specs/2026-11-17-kacheln-ziehen-design.md)

## Global Constraints

- Keine Bibliothek, keine Module; Datei per `<script>` vor `app.js`.
- Ab 8 px Bewegung = Ziehen, sonst Tippen.
- Ruhig: keine Hüpf-Animation; beim Ziehen nur leicht angehoben (Schatten, Farben über Variablen).
- Gesperrt (nach dem Prüfen, `.fertig`): weder Tippen noch Ziehen.
- Neue Datei in `index.html`, `DATEIEN` (`sw.js`), `werkzeuge/test/laden.js`; `VERSION` `v68` → `v69`.
- Commit nur auf Nicoles Wort.

## Review Focus

- Ziehen endet außerhalb des Fensters / Abbruch (`pointercancel`, z. B. Anruf, Scroll-Geste) → Lücke und schwebende Kachel verschwinden, nichts doppelt.
- Nach einem Ziehen darf kein „Klick“ nachkommen (sonst wird die Kachel gleich wieder zurückgelegt).
- Während des Ziehens darf die Lücke nicht als gelegte Kachel zählen (Prüfen liest `ablage.children`, `pruefenSperren` zählt Kinder).
- Zwei Finger / zweites Ziehen während eines laufenden → ignorieren.
- Prüfen sofort nach dem Loslassen: Reihenfolge der Kacheln in der Ablage ist die neue.

---

### Task 1: `kacheln.js` – Einfügestelle (rein, getestet)

**Files:** Create `kacheln.js`, `werkzeuge/test/kacheln.test.js`; Modify `werkzeuge/test/laden.js` (`'kacheln.js'` vor `'uebungen.js'` in `STANDARD`, `'Kacheln'` in `NAMEN`).

**Interfaces – Produces:** `Kacheln.einfuegeStelle(rects, x, y) → number` – `rects`: Rechtecke `{ left, top, right, bottom }` der gelegten Kacheln in Lesereihenfolge (ohne die gezogene). Ergebnis: Index, vor dem eingefügt wird (0…rects.length). Regel: erste Kachel, die in einer späteren Zeile liegt (`y < rect.top`), oder in derselben Zeile (`rect.top <= y <= rect.bottom`) mit `x < (left+right)/2`; sonst `rects.length`.

- [ ] Test `einfuegeStelle`: Zwei Zeilen `[{0,0,50,48},{58,0,108,48},{0,56,50,104}]`: `(10,20)→0`, `(80,20)→1`, `(200,20)→2`, `(10,80)→2`, `(200,80)→3`, `(10,300)→3`, leere Liste `→0`, über allem `(10,-20)→0`.
- [ ] Test laufen → FAIL; umsetzen; → PASS.

### Task 2: `kacheln.js` – Vorrat, Tippen und Ziehen; alle vier Stellen umstellen

**Files:** Modify `kacheln.js`, `app.js` (Stellen um 908–918, 980–994, 1131–1143, 2177–2224, 2714–2762, 2928–2955), `style.css` (`.kachel`-Block), `index.html` (Skript), `sw.js` (DATEIEN, VERSION).

**Interfaces – Produces:** `Kacheln.fuellen(vorrat: Element, ablage: Element, woerter: string[], gesperrt: () => boolean) → void` – leert beide, entfernt `.fertig`, baut je Wort einen `button.kachel` im Vorrat. Gelegte Kachel = neuer `button.kachel` in der Ablage, merkt ihre Quelle; Quelle bekommt `.benutzt`.
- Tippen: Vorrat → hinten anlegen; gelegt → entfernen, Quelle wieder frei.
- Ziehen (Pointer Events, `setPointerCapture`): ab 8 px; Schwebe-Kopie `position: fixed` am `document.body` (Klasse `kachel-schwebt`), Original gelegt bleibt unsichtbar (`kachel-gezogen`, `display: none`). Über der Ablage: Platzhalter `span.kachel-luecke` an `einfuegeStelle(...)`; außerhalb: Platzhalter weg. Loslassen über Ablage → an Platzhalter-Stelle einfügen (Vorrat-Kachel: neu legen dort); außerhalb → gelegte zurück, Vorrat bleibt. `pointercancel` = abbrechen ohne Änderung. Danach den folgenden `click` verschlucken.
- Prüfen-Stellen lesen nur `.kachel`: `runde`/`aufgabe` nutzen schon `querySelectorAll('.kachel')`; `kachel-ablage`/`hoer-ablage` (`[...children]`) auf `querySelectorAll('.kachel')` umstellen; `pruefenSperren` zählt `querySelectorAll('.kachel').length`.
- CSS: `.kachel { touch-action: none; user-select: none; -webkit-user-select: none; }`, `.kachel-schwebt` (fixed, `pointer-events: none`, `box-shadow: var(--schatten)`, z-index über allem, `transform: translate(-50%,-50%)`), `.kachel-luecke` (48 px hoch, ca. 28 px breit, gestrichelter Rand `var(--akzent-linie)`, runde Ecken 12 px), `.kachel-gezogen { display: none; }`.
- Entfernen: `rundeKachelLegen`, `kachelLegen`, `hoerKachelLegen`, Inline-Kacheln in der Aufgabenrunde; `k.dataset.i` in Grammatik entfällt (ungenutzt).

- [ ] Umbauen; `node --check app.js kacheln.js`; `node --test "werkzeuge/test/*.test.js"` → alles grün.
- [ ] Browser (393 × 852, Touch über `mcp__Claude_Browser`): Tippen legt/entfernt; gelegte Kachel per Ziehen an Position 0 → Reihenfolge stimmt, Prüfen richtig; Vorrat-Kachel in die Mitte ziehen; gelegte nach draußen ziehen → zurück im Vorrat; nach dem Prüfen kein Ziehen; an allen vier Stellen (Runde-Satz, Grammatik-Kacheln, Hören-Kacheln, Aufgabenrunde) mindestens Legen + Prüfen; hell und dunkel; Konsole ohne Fehler.

### Task 3: Doku

- [ ] `CLAUDE.md` (Abschnitt Dateien: `kacheln.js`), `ROADMAP.md` (Zeile „Kacheln im Satz verschieben“ → ✅ – wartet auf Nicoles Blick), `TODO.md` („Noch planen: Kacheln“ abhaken; neu „Kacheln ziehen auf dem iPhone ausprobieren“).
