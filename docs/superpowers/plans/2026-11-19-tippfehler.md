# Tippfehler-Nachsicht Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Offensichtliche Vertipper beim Vokabel-Schreiben, im Diktat und in Grammatik-Lücken durchwinken, echte Fehler (anderes Wort, andere Endung, zu viele Fehlerchen) streng werten.

**Architecture:** Neue Datei `tippfehler.js` (Modul `Tippfehler`) entscheidet pro Wortpaar und pro Satz. `Vokabeln.pruefeEine` und `Uebungen.pruefeDiktat` rufen sie auf; Grammatik- und Satz-Lücken laufen schon über `Vokabeln.pruefe` und bekommen die Regeln dadurch mit.

**Tech Stack:** Reines JavaScript ohne Module (per `<script>`), Tests mit `node --test`.

**Spec:** `docs/superpowers/specs/2026-11-19-tippfehler-design.md`

## Global Constraints
- Keine Kosten, keine neuen Bibliotheken; alles offline.
- Neue Datei in `index.html` (vor `vokabeln.js`), in `DATEIEN` in `sw.js` und in `STANDARD` in `werkzeuge/test/laden.js`; `VERSION` in `sw.js` erhöhen.
- Commit nur, wenn Nicole es sagt (CLAUDE.md) – die Commit-Schritte unten entfallen bis dahin.
- Rückgabe-Stufen der bestehenden Prüfungen bleiben `richtig | fast | falsch` (App-Code muss nicht geändert werden).

## Review Focus
- Wörterbuch noch nicht geladen (App-Start): nur Grundwortschatz/`GRUNDWOERTER` zählen als „anderes Wort“, kein Absturz.
- Mehrwort-Lösungen („fare la spesa“, „ci sono“) und vergessener Artikel beim Vokabel-Schreiben verhalten sich wie bisher plus Nachsicht pro Wort.
- Großschreibung, Apostroph (’ vs '), Satzzeichen im Diktat werden wie bisher vor dem Vergleich bereinigt.
- Unterschiedliche Wortzahl im Diktat (Wort vergessen) → falsch wie bisher.
- Lösung selbst steht im Wörterbuch → das Richtige darf nie als „anderes Wort“ gelten.

---

### Task 1: `tippfehler.js` – Regeln pro Wort und pro Satz

**Files:**
- Create: `tippfehler.js`
- Modify: `werkzeuge/test/laden.js` (Datei in `STANDARD` vor `vokabeln.js`, `Tippfehler` in `NAMEN`; Option `optionen.woerterbuch: true` stellt ein `fetch` bereit, das `woerterbuch.json` liefert, damit Tests `await k.Woerterbuch.laden()` können)
- Test: `werkzeuge/test/tippfehler.test.js`

**Interfaces:**
- Produces:
  - `Tippfehler.fehlerchen(getippt, richtig) -> 'akzent' | 'nachbar' | 'verdreht' | 'doppelt' | 'vergessen' | null` – genau ein Fehlerchen? (beide schon klein/bereinigt)
  - `Tippfehler.pruefeWort(getippt, richtig) -> { stufe: 'richtig' | 'tippfehler' | 'anderesWort' | 'falsch', art?, wort?, bedeutung? }`
  - `Tippfehler.pruefeSatz(getippt, richtig) -> { stufe: 'richtig' | 'fast' | 'falsch', falscheStellen: number[], hinweis: string }`

- [ ] **Step 1: Tests schreiben** (`tippfehler.test.js`, mit `laden(undefined, '', { woerterbuch: true })` und `await k.Woerterbuch.laden()`)
  - `pruefeWort('mangaimo','mangiamo').stufe === 'tippfehler'` (verdreht)
  - `pruefeWort('cogome','cognome').stufe === 'tippfehler'` (vergessen)
  - `pruefeWort('cognomme','cognome').stufe === 'tippfehler'` (doppelt)
  - `pruefeWort('cssa','casa')` → `tippfehler` (a→s, Nachbartaste); `pruefeWort('casda','casa')` → `tippfehler` (d eingefügt, Nachbar von s)
  - `pruefeWort('gratie','grazie')` → `tippfehler` (t/z Nachbarn auf QWERTZ) ; `pruefeWort('grabie','grazie')` → `falsch` (keine Nachbartaste)
  - `pruefeWort('perche','perché')` → `tippfehler`, `art === 'akzent'`
  - `pruefeWort('grazia','grazie')` → `anderesWort`, `wort === 'grazia'`, `bedeutung` enthält „Anmut“
  - `pruefeWort('e','è')` → `anderesWort`
  - `pruefeWort('mangiano','mangiamo')` → nicht `tippfehler` (andere Form)
  - `pruefeWort('aveva','avevo')` → `falsch` (Endvokal)
  - `pruefeWort('lo','la')`, `pruefeWort('da','di')` → `falsch` (unter 4 Buchstaben)
  - `pruefeWort('mangaimp','mangiamo')` → `falsch` (zwei Fehlerchen)
  - `pruefeSatz('Io mangaimo la pasta.','Io mangiamo la pasta.')` → `fast`, `falscheStellen` `[1]`
  - drei vertippte Wörter in einem Satz → `falsch`
  - Satz ganz richtig (Groß/klein, Satzzeichen egal) → `richtig`
  - ohne geladenes Wörterbuch: `pruefeWort('grazia','grazie')` stürzt nicht ab
- [ ] **Step 2: Tests laufen lassen** – `node --test werkzeuge/test/tippfehler.test.js` → FAIL (`Tippfehler is not defined`)
- [ ] **Step 3: `tippfehler.js` bauen**
  - Nachbartasten aus den Reihen `qwertzuiop/asdfghjkl/yxcvbnm` und `qwertyuiop/asdfghjkl/zxcvbnm`: gleiche Reihe ±1, Reihe darüber/darunter Index −1…+1.
  - `fehlerchen`: erst auf den echten Zeichen nach genau einer Änderung suchen (Ersetzen nur Nachbartaste, Vertauschen benachbarter, ein Buchstabe zu viel = gleich wie oder Nachbar des Nachbarzeichens, ein Buchstabe zu wenig). Ohne Akzente gleich, mit genau einer abweichenden Stelle → `'akzent'`. Akzent **und** eine weitere Änderung → `null`. Ersetzen/zu viel/zu wenig/vertauscht nur, wenn `richtig` ohne Akzente ≥ 4 Zeichen.
  - `pruefeWort` Reihenfolge: gleich → richtig; kein Fehlerchen → falsch; Endvokal (`aeio`) beide Vokale und verschieden → falsch; `anderesWort` wenn das Getippte bekannt ist: `GRUNDWOERTER[x]`, Wortschatz (`it` ohne Artikel, klein), `Woerterbuch.suche(x)` (wenn `bereit()`), auch erratene Formen; erratene Form mit gleicher Grundform wie die Lösung zählt ebenfalls (ohne Bedeutung, dann `bedeutung: 'Form von ' + grundform`). Die Lösung selbst nie. Sonst `tippfehler`.
  - `pruefeSatz`: bereinigen wie `Uebungen.sauber`, in Wörter teilen; ungleiche Wortzahl → falsch mit Stellen wie bisher; pro Wort `pruefeWort`; ein Wort falsch/anderesWort → falsch (Stellen = diese Wörter); mehr als 2 Tippfehler → falsch (Stellen = Tippfehler); sonst `fast` mit `hinweis` `'Achte auf die Akzente.'` (nur Akzente) bzw. `'Kleine Tippfehler – zählt.'`, Stellen = vertippte Wörter.
- [ ] **Step 4: Tests laufen lassen** – PASS
- [ ] **Step 5: Commit** (nur nach Nicoles Freigabe)

### Task 2: Anschließen – Vokabeln, Diktat, Grammatik

**Files:**
- Modify: `vokabeln.js` (`pruefeEine`), `uebungen.js` (`pruefeDiktat`), `index.html` (Skript), `sw.js` (`DATEIEN`, `VERSION`)
- Test: `werkzeuge/test/saetze.test.js` (Satz-Lücke: *e* statt *è* jetzt `falsch`, `pruefe(a,'e') === false`), neue Fälle in `tippfehler.test.js`

**Interfaces:**
- Consumes: `Tippfehler.pruefeWort`, `Tippfehler.pruefeSatz` (Task 1)
- Produces: unverändert `Vokabeln.pruefe(eingabe, w, { streng }) -> { stufe: 'richtig'|'fast'|'falsch', hinweis }`, `Uebungen.pruefeDiktat(eingabe, satz) -> { stufe, falscheStellen, hinweis? }`

- [ ] **Step 1: Tests ergänzen** (in `tippfehler.test.js`)
  - `Vokabeln.pruefe('mangaimo', { it: 'mangiamo' }).stufe === 'fast'`, Hinweis `'Kleiner Tippfehler.'`
  - `Vokabeln.pruefe('grazia', { it: 'grazie' })` → `falsch`, Hinweis enthält `„grazia“ ist ein anderes Wort`
  - `Vokabeln.pruefe('perche', { it: 'perché' })` → `fast`, Hinweis `'Achte auf den Akzent.'`
  - `Vokabeln.pruefe('casa', { it: 'la casa' })` → `fast` „Lerne das Wort mit Artikel.“ (wie bisher); `Vokabeln.pruefe('cssa', { it: 'la casa' })` → `fast`
  - streng (Grammatik): `Grammatik.pruefeLuecke('mangaimo', { loesung: 'mangiamo' })` → `fast`; `pruefeLuecke('mangiano', { loesung: 'mangiamo' })` → `falsch`
  - `Uebungen.pruefeDiktat('Io mangaimo la pasta', 'Io mangiamo la pasta.')` → `fast`, `falscheStellen` `[1]`
  - `saetze.test.js` Zeile 219ff: *e* für *è* → `falsch`
- [ ] **Step 2: Tests laufen lassen** → FAIL
- [ ] **Step 3: Anschließen**
  - `pruefeEine`: Artikel-Regeln (nur ohne `streng`) bleiben; danach statt „Akzent“- und „abstand === 1“-Regel: einwortig → `Tippfehler.pruefeWort`, mehrwortig → `Tippfehler.pruefeSatz` (vergessener Artikel: wie bisher nur den Rest vergleichen). `tippfehler` → `fast` mit `'Achte auf den Akzent.'` (art `akzent`) bzw. `'Kleiner Tippfehler.'`; `anderesWort` → `falsch` mit `„x“ ist ein anderes Wort (Bedeutung).` (ohne Bedeutung: `„x“ ist ein anderes Wort.`). `streng` schaltet nur die Artikel-Regeln ab. `abstand` bleibt, falls noch benutzt, sonst entfernen.
  - `pruefeDiktat` → `Tippfehler.pruefeSatz`.
  - `<script src="tippfehler.js">` vor `vokabeln.js`; `'tippfehler.js'` in `DATEIEN`; `VERSION` +1.
- [ ] **Step 4: Alle Tests** – `node --test "werkzeuge/test/*.test.js"` → alle PASS (bestehende Tests mit „Kleiner Tippfehler“, `cogome`, Erzeuger-Lücken bleiben grün)
- [ ] **Step 5: Im Browser (393 × 852) prüfen:** Vokabel schreiben mit Vertipper, Diktat mit Vertipper, Grammatik-Lücke mit *mangiano* – Anzeige stimmt, keine Konsolenfehler
- [ ] **Step 6: ROADMAP.md (Zeile „Tippfehler“ aus den Ideen als ✅ in „Dazugekommen“), CLAUDE.md (Abschnitt Dateien: `tippfehler.js`), TODO.md (Ausprobieren auf dem iPhone)**
- [ ] **Step 7: Commit** (nur nach Nicoles Freigabe)
