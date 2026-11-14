# Lektionen, Schritt 1 (Gerüst + Lektion 1–4) – Bauplan

> **Für Agenten:** BENÖTIGTE TEIL-FÄHIGKEIT: superpowers:subagent-driven-development (empfohlen) oder superpowers:executing-plans, Aufgabe für Aufgabe. Schritte mit Kästchen (`- [ ]`) zum Abhaken.

**Ziel:** Die App bekommt Lektionen. Startseite mit Lektionsliste und „Frei üben“, eine Lektionsseite, „kenne ich / neu“, und „Los“ richtet sich nach der aktuellen Lektion. Inhalt: Lektion 1–4.

**Aufbau:** `lektionen-inhalt.js` enthält nur Daten (`LEKTIONEN`). `lektionen.js` enthält die Logik (Modul `Lektionen`) und verweist auf Wörter, Kapitel und Texte in den bisherigen Dateien. Die Tests laden die Browser-Skripte in Node mit `vm` (ohne Browser). Die Oberfläche wird im Browser-Pane geprüft.

**Technik:** reines JavaScript ohne Build, `<script>`-Dateien, Node 24 nur für Tests und Prüfskripte (`node --test`, kostenlos und eingebaut).

**Konzept:** [docs/superpowers/specs/2026-11-14-lektionen-design.md](../specs/2026-11-14-lektionen-design.md) – zuerst lesen.

## Feste Regeln

- Alles auf Deutsch (Oberfläche, Kommentare, Namen wie im bisherigen Code).
- Keine Kosten, keine fremden Bibliotheken, keine Fremd-Schriften.
- **Kein Commit ohne Nicoles Okay.** Statt „Commit“ steht unten „Stand zeigen“. Autor im Repo nicht ändern.
- Wort-IDs (`wortId()`) nie ändern. Bisherige Wörter in `wortschatz.js` nicht umbenennen oder löschen.
- Bei jeder Änderung an App-Dateien `VERSION` in `sw.js` erhöhen, neue Dateien in `DATEIEN` eintragen.
- `Speicher.FORMAT` wird 2. Sicherungen mit Format 1 müssen weiter geladen werden.
- Farben nur über Variablen in `style.css`. Ruhige Oberfläche, keine Punkte, keine Serien.
- Pfade relativ halten.
- Prüfen im Browser-Pane (Konfiguration `italienisch`) in 393 × 852, hell und dunkel. Danach `localStorage.removeItem('italienisch-daten')`.

## Worauf beim Prüfen achten

1. **Bisheriger Lernstand (Format 1) ohne Lektionsdaten:** Nach dem ersten Start sind Lektionen, deren Wörter, Kapitel und Texte schon fertig sind, erledigt. Keine Karte und kein Fortschritt gehen verloren. → Test in Aufgabe 2 (`uebergang`).
2. **Sicherung laden, während die App läuft:** Nach `ausDateiLaden` mit Format 1 läuft der Übergang auch. → Test in Aufgabe 2.
3. **Alle Lektionen erledigt** (oder Lektionsliste leer): „Los“ macht Vokabeln und danach „Frei üben“-Inhalt (bisheriges `naechsterInhalt()`), kein Fehler. → Test in Aufgabe 2 (`naechsterTeil` gibt `null`).
4. **Eigene Wörter (`e-…`) und Wörter ohne Lektion** bleiben fällig und werden wiederholt, kommen aber nie als „neu“. → Test in Aufgabe 2.
5. **„Kenne ich“ für ein Wort, das schon eine Karte hat:** Die Karte bleibt unverändert. → Test in Aufgabe 2.

---

### Aufgabe 1: Test-Gerüst und Prüfskript für Lektionen

**Dateien:**
- Neu: `werkzeuge/test/laden.js` – lädt Browser-Skripte in einen `vm`-Kontext
- Neu: `werkzeuge/test/pruefen.test.js`
- Neu: `lektionen-inhalt.js` – zunächst nur Lektion 1–4 mit vorhandenen Kapiteln und Texten, Wörter vorerst leer
- Neu: `werkzeuge/lektionen-pruefen.js`

**Schnittstellen:**
- Liefert: `laden(dateien: string[], extraCode?: string) → kontext`.
  - Stellt Platzhalter für `localStorage` (Map-basiert), `navigator = {}`, `document`, `window`, `speechSynthesis` bereit.
  - Hängt alle Dateien hintereinander und danach `extraCode` an und führt alles als **ein** Skript aus. So sind die `const` der App sichtbar.
  - Am Ende stehen `Speicher`, `Vokabeln`, `Lesen`, `Grammatik`, `Uebungen`, `Lektionen`, `LEKTIONEN`, `WORTSCHATZ`, `KAPITEL`, `LESETEXTE` und `GRUNDWOERTER` auf `globalThis`, sofern sie vorhanden sind.
- Liefert: `LEKTIONEN`, ein Feld von Objekten:
  ```js
  { id: 'l01', nr: 1, titel: 'Ciao!', situation: 'Sich vorstellen, Zahlen', stufe: 'A1', art: 'lektion',
    woerter: ['ciao', 'buongiorno', …],   // italienisch wie in wortschatz.js, Auflösung über wortId()
    kapitel: ['essere-un'], texte: ['ciao'] }
  ```
  Ripasso-Einträge kommen erst in Schritt 3 (`art: 'ripasso'`).
- Liefert: `pruefeLektionen(k) → { fehler: string[], hinweise: string[] }` in `werkzeuge/lektionen-pruefen.js`. Aufruf über die Kommandozeile: `node werkzeuge/lektionen-pruefen.js`, Rückgabewert 1 bei Fehlern.

**Regeln von `pruefeLektionen`** (Fehler, sofern nicht anders angegeben):
1. Jedes Lektionswort ergibt über `wortId()` ein Wort in `WORTSCHATZ`.
2. Kein Wort gehört zu zwei Lektionen.
3. Jedes Kapitel und jeder Text existiert. Kein Kapitel und kein Text gehört zu zwei Lektionen.
4. Lektionstext von Lektion n: Für jedes Wort (zerlegt mit `Lesen.stuecke`, klein) gilt eins von:
   - Es steht in `GRUNDWOERTER`.
   - Es passt zu einem Wort einer Lektion ≤ n. Das heißt: Es ist die Form ohne Artikel, oder sein `woerter`-Eintrag hat als Grundform ein solches Wort.
   - Es steht in `woerter` des Textes.

   Zahlen und Eigennamen zählen nicht. Eigenname heißt: Die Grundform im `woerter`-Eintrag beginnt mit einem Großbuchstaben.
5. Höchstens **8** Wörter pro Text fallen nur unter „steht in `woerter`“ (gezählt nach Grundform).
6. **Hinweis** (kein Fehler): Ein Wort in einer Grammatik-Übung eines Lektionskapitels stammt aus einer späteren Lektion.

- [ ] **Schritt 1: Tests schreiben** in `werkzeuge/test/pruefen.test.js` (mit `node:test`, `node:assert`). Die Prüfregeln laufen gegen kleine Beispiel-Daten, die als `extraCode` hinter die echten Dateien gehängt werden und `LEKTIONEN` überschreiben (`var` statt `const` in `lektionen-inhalt.js`, damit das geht):
  - `unbekanntes Lektionswort wird gemeldet`: Lektion mit `woerter: ['gibtsnicht']` → `fehler` enthält `gibtsnicht`.
  - `Wort in zwei Lektionen wird gemeldet`: `'ciao'` in l01 und l02 → ein Fehler mit `ciao`.
  - `Text mit zu vielen neuen Wörtern`: ein Text mit 9 nur in `woerter` erklärten Wörtern → Fehler, der „9“ nennt.
  - `Wort aus späterer Lektion im Text`: Text in l01 mit einem Wort, das erst zu l02 gehört und nicht in `woerter` steht → Fehler.
  - `Eigennamen zählen nicht`: `'marco': ['Marco', …]` → kein Fehler, zählt nicht mit.
  - `echte Daten`: `pruefeLektionen` auf den echten Dateien → `fehler` ist leer. **Dieser Test darf bis zum Ende von Aufgabe 4 rot sein.**
- [ ] **Schritt 2: Ausführen, alle rot.** `node --test werkzeuge/test/` → FAIL (Module fehlen)
- [ ] **Schritt 3: Bauen:** `laden.js`, `lektionen-inhalt.js` (l01–l04 mit `kapitel`/`texte` laut Konzept, `woerter: []`), `lektionen-pruefen.js`.
  - Kapitel und Texte, die erst in Aufgabe 4 entstehen (`essere-un`, `possessiv`, `piacere`, Texte `ciao`, `tempo-libero`), sind jetzt noch nicht eingetragen.
  - Für die Formen-Erkennung bei Regel 4 die Funktion `imWortschatz`-Logik aus `Lesen` übernehmen, nicht neu erfinden: Artikel abschneiden, `klein()`.
- [ ] **Schritt 4: Ausführen.** `node --test werkzeuge/test/` → alles grün bis auf „echte Daten“, falls dort Fehler stehen. `node werkzeuge/lektionen-pruefen.js` gibt eine lesbare Liste aus.
- [ ] **Schritt 5: Stand zeigen** (kein Commit).

### Aufgabe 2: Lektions-Logik, Speicher-Format 2, Vokabeln nach Lektion

**Dateien:**
- Neu: `lektionen.js` (Modul `Lektionen`)
- Ändern: `speicher.js` (`FORMAT = 2`, `leer()` mit `fortschritt: {}` wie bisher), `vokabeln.js` (`neue()`)
- Test: `werkzeuge/test/lektionen.test.js`

**Schnittstellen:**
- Benutzt: `LEKTIONEN`, `Vokabeln.istJung` (neu nach außen geben), `Grammatik.stand`, `Lesen.stand`, `Speicher.daten`.
- Liefert (alle in `Lektionen`):
  - `alle() → Lektion[]`. Die Lektion enthält zusätzlich `wortIds: string[]` (aufgelöst).
  - `teile(l) → { woerter, grammatik, text, hoeren }`, jeder Wert ist `'offen' | 'angefangen' | 'fertig'`.
    - woerter: fertig = jede `wortId` hat eine Karte, die nicht jung ist. angefangen = mindestens eine Karte.
    - grammatik: fertig = alle Kapitel `geuebt`. angefangen = ein Kapitel hat einen Stand.
    - text: fertig = alle Texte `verstanden`. angefangen = ein Text hat einen Stand.
    - hoeren: fertig = `fortschritt.hoeren.lektionen[l.id].richtig / von ≥ 0.8` oder `fortschritt.lektionen[l.id].hoerenErledigt`.
  - `istErledigt(l) → boolean`: `fortschritt.lektionen[id].erledigt` ist gesetzt.
  - `aktualisieren() → Lektion[]`: setzt `erledigt: heute` bei allen, deren 4 Teile fertig sind. Gibt die **neu** erledigten zurück.
  - `aktuelle() → Lektion | null`: zuletzt begonnene, nicht erledigte (größtes `begonnen`-Datum, bei gleichem Datum höchste `nr`). Sonst die erste nicht erledigte. Sonst `null`.
  - `beginnen(id)`: setzt `begonnen: heute`, falls leer.
  - `woerterEinordnen(id, bekannt: string[])`: Für jede ID in `bekannt` ohne Karte entsteht `{ fach: 1, faellig: morgen, richtig: 0, falsch: 0 }` (ohne `kennen`). Danach `woerterGeprueft: true`. Vorhandene Karten bleiben unverändert.
  - `brauchtWortCheck(l) → boolean`: `!woerterGeprueft` und es gibt Lektionswörter ohne Karte.
  - `naechsterTeil() → { art: 'woerter' | 'kapitel' | 'text' | 'hoeren', lektion, obj? } | null`, für die aktuelle Lektion in dieser Reihenfolge:
    - `woerter`, wenn `brauchtWortCheck`
    - das erste nicht geübte Kapitel
    - der erste nicht verstandene Text
    - `hoeren`, wenn nicht fertig

    Gibt `null` zurück, wenn es keine aktuelle Lektion gibt oder alles fertig ist.
  - `hoerenSpeichern(id, richtig, von)`: legt `fortschritt.hoeren.lektionen[id] = { richtig, von, datum }` ab und behält das beste Ergebnis.
  - `uebergang()`: Läuft nur, wenn `Speicher.daten.format < 2`.
    - Für jede Lektion mit fertigen Wörtern, Grammatik und Text: `hoerenErledigt: true`.
    - Danach `aktualisieren()`, `format = 2`, speichern.
- Ändert: `Vokabeln.neue() → string[]`: nur `wortIds` von `Lektionen.aktuelle()` ohne Karte, in Lektionsreihenfolge. Ohne aktuelle Lektion: `[]`.
- Speicherort: `fortschritt.lektionen[id] = { begonnen, erledigt, uebersprungen, woerterGeprueft, hoerenErledigt }`

- [ ] **Schritt 1: Tests schreiben** in `werkzeuge/test/lektionen.test.js`. Jeder Test lädt frisch über `laden()` und setzt `LEKTIONEN` auf 2–3 Beispiel-Lektionen mit echten Wörtern, Kapiteln und Texten:
  - `teile: alles offen bei leerem Stand`
  - `teile: Wörter fertig, wenn alle Karten nicht jung sind`: eine Karte mit `kennen: 2` → `'angefangen'`
  - `aktualisieren markiert und meldet neu erledigte`: zweiter Aufruf → `[]`
  - `aktuelle: zuletzt begonnene vor erster offener`: l02 begonnen, l01 offen → l02
  - `aktuelle: null, wenn alle erledigt`, und `naechsterTeil()` → `null`
  - `woerterEinordnen legt bekannte Karten ohne kennen an`: `fach 1`, `faellig` = morgen, kein `kennen`
  - `woerterEinordnen lässt vorhandene Karten unverändert` (Prüfpunkt 5)
  - `naechsterTeil: Reihenfolge woerter → kapitel → text → hoeren`
  - `neue: nur Wörter der aktuellen Lektion`: Ein eigenes Wort `e-x` und ein Wortschatz-Wort ohne Lektion erscheinen nicht. Ein fälliges `e-x` erscheint weiter in `faellige()` (Prüfpunkt 4).
  - `uebergang: Format-1-Stand wird übernommen`: Karten, Kapitel und Text von l01 sind fertig, `format: 1`. Danach ist l01 erledigt, `hoerenErledigt` ist gesetzt, `format` ist 2, und `karten` ist unverändert (Prüfpunkt 1).
  - `uebergang läuft nach ausDateiLaden`: Ein Datei-Objekt mit `text()` aus einem Format-1-JSON wird geladen und danach `uebergang()` aufgerufen. Erwartung wie im Test davor (Prüfpunkt 2).
  - `uebergang zweimal ändert nichts mehr`
- [ ] **Schritt 2: Ausführen, rot.** `node --test werkzeuge/test/lektionen.test.js` → FAIL
- [ ] **Schritt 3: Bauen.** `lektionen.js` nach den Schnittstellen oben. `Vokabeln.neue()` umstellen und `istJung` nach außen geben. In `speicher.js` `FORMAT = 2`: `ausDateiLaden` lehnt nur `format > 2` ab.
- [ ] **Schritt 4: Ausführen, grün.** `node --test werkzeuge/test/` → PASS (außer „echte Daten“)
- [ ] **Schritt 5: Stand zeigen.**

### Aufgabe 3: Oberfläche – Startseite, Lektionsseite, „kenne ich / neu“, „Los“

**Dateien:**
- Ändern: `index.html`
  - Startseite: Bereich `#lektionen-liste`. Darunter `<details id="lektionen-erledigt">`, danach die Überschrift „Frei üben“. Die bisherigen Karten Lesen, Grammatik und Hören wandern unter „Frei üben“, dazu der Wörterbuch-Knopf.
  - Neue Bildschirme `screen-lektion` und `screen-wortcheck`.
  - `<script>` für `lektionen-inhalt.js` und `lektionen.js` **vor** `app.js` und **nach** `uebungen.js`.
- Ändern: `app.js`
  - Neue Funktionen `zeigeLektionen()`, `oeffneLektion(l)`, `zeigeWortCheck(l, danach)`.
  - Rücksprung zur Lektion aus Kapitel, Text und Hören.
  - „Los“ läuft über `Lektionen.naechsterTeil()`.
- Ändern: `style.css` – nur bestehende Variablen und Bausteine (`karte`, `karte-knopf`, `knopf-haupt`, `knopf-zweit`)
- Ändern: `begleiter.js` – Nachricht `lektionGeschafft(titel) → { stimmung: 'jubelt', text }`

**Schnittstellen:**
- Benutzt: alles aus Aufgabe 2.
- Verhalten:
  - **Startseite:**
    - Die aktuelle Lektion steht als Karte da, mit den 4 Teilen (Zeichen ✓ fertig, ◐ angefangen, ○ offen) und „Lektion öffnen“.
    - Spätere Lektionen sind grau. Antippen fragt mit `confirm` „Schon diese Lektion anfangen?“ und ruft bei Ja `Lektionen.beginnen` auf.
    - Erledigte stehen eingeklappt unter „Erledigt (n) – zum Wiederholen“.
    - Die „Heute“-Zeile nennt statt `naechsterInhalt().name` den nächsten Teil, z. B. „Danach: Lektion 3, Grammatik“.
  - **Lektionsseite:**
    - Titel „Lektion n · Titel“, darunter die Situation.
    - 4 Knöpfe in Reihenfolge Wörter, Grammatik, Text, Hören, jeder mit Stand.
    - Wörter öffnet den Wortcheck, wenn nötig. Sonst zeigt eine Liste die Lektionswörter (it – de) mit Stand (neu / am Kennenlernen / gelernt).
    - Kapitel und Text öffnen wie bisher mit `zurueckZu = 'lektion'`. Der Zurück-Knopf führt zur Lektionsseite.
    - Hören startet `starteHoeren({ lektion: id })`. Am Ende ruft es `Lektionen.hoerenSpeichern(id, richtig, von)` auf.
    - Beim Öffnen wird `Lektionen.beginnen(id)` aufgerufen.
  - **Wortcheck:**
    - Liste aller Lektionswörter ohne Karte. Jede Zeile zeigt it – de mit zwei Kacheln „kenne ich“ und „neu“, voreingestellt ist „neu“.
    - Ganz unten steht „Fertig“. Es ruft `woerterEinordnen(id, bekannt)` auf und geht zurück zu `danach`.
    - Ein Satz oben: „Tipp an, was du schon kennst. Alles andere lernst du in den nächsten Runden kennen.“
  - **„Los“:**
    - Ist `naechsterTeil().art === 'woerter'`, kommt erst der Wortcheck und danach die Vokabelrunde.
    - Nach der Runde (`beendeRunde`) öffnet `oeffneNaechstes()` den nächsten Teil.
    - Ist `naechsterTeil()` `null`, gilt das bisherige `naechsterInhalt()`.
  - **Erledigt melden:** Nach jedem Speichern eines Ergebnisses (Runde, Kapitel, Text, Hören) läuft `Lektionen.aktualisieren()`. Für neu erledigte Lektionen zeigt der Begleiter auf der nächsten Seite `lektionGeschafft`. Keine Animation, kein Ton.
  - **Start und Laden:** `Lektionen.uebergang()` läuft beim App-Start und nach erfolgreichem `ausDateiLaden`.

- [ ] **Schritt 1:** Vorschau starten (`preview_start` `italienisch`), 393 × 852, Testdaten leer. Erwartet: bisherige Startseite (Ausgangslage merken, Bildschirmfoto).
- [ ] **Schritt 2: Bauen.** HTML, CSS, `app.js`, `begleiter.js` nach dem Verhalten oben.
- [ ] **Schritt 3: Im Browser prüfen** (Seite zweimal neu laden wegen Service Worker), jeweils mit `read_page`:
  - Leerer Stand: Lektion 1 ist „jetzt dran“, l02–l04 sind grau, „Erledigt“ fehlt oder zeigt (0), „Frei üben“ zeigt 4 Einträge.
  - „Los“: Wortcheck erscheint. 2 Wörter auf „kenne ich“ und „Fertig“. Danach kommt die Vokabelrunde mit neuen Wörtern nur aus l01. Die 2 bekannten Wörter sind nicht dabei.
  - Lektionsseite: Kapitel öffnen → Zurück führt zur Lektion. Text öffnen → Zurück führt zur Lektion.
  - Mit `javascript_tool` einen Format-1-Stand setzen, bei dem l02 fertig ist (Karten aller l02-Wörter mit `fach: 2`, `artikel` geübt, `al-bar` verstanden), und neu laden. Erwartet: l02 steht unter „Erledigt“.
  - `read_console_messages` → keine Fehler.
  - Dunkel (`colorScheme: dark`) → Bildschirmfoto.
- [ ] **Schritt 4:** `node --test werkzeuge/test/` → weiterhin grün. Testdaten löschen.
- [ ] **Schritt 5: Stand zeigen** (Bildschirmfotos hell und dunkel).

### Aufgabe 4: Inhalt Lektion 1–4

**Dateien:**
- Ändern: `lektionen-inhalt.js` – Wörter und neue Kapitel- und Text-IDs eintragen
- Ändern: `grammatik.js` – neue Kapitel `essere-un`, `possessiv`, `piacere`, im Format der bisherigen Kapitel mit je 8 Übungen (Lücke und Kacheln gemischt)
- Ändern: `texte.js`
  - neue Texte `ciao` (A1, Dialog: sich vorstellen, Zahlen) und `tempo-libero` (A1, Freizeit und Uhrzeit), je 3 Fragen
  - `al-bar` und `famiglia` nur so weit anpassen, dass die Prüfregeln erfüllt sind
- Ändern: `wortschatz.js` – nur wenn ein nötiges Wort fehlt: neues Thema `'L01 Ciao'` usw. **unten** anhängen, `stufe: 'A1'`

**Inhalt:**

| Lektion | Wörter (15–20, vor allem aus den Themen) | Kapitel | Text |
|---|---|---|---|
| l01 Ciao! | Begrüßung, Zahlen 1–10 | `essere-un` (sono/sei/è …, un/uno/una/un') | `ciao` |
| l02 Al bar | Essen: Getränke, Frühstück; Restaurant-Grundwörter | `artikel` | `al-bar` |
| l03 La mia famiglia | Menschen (Familie) | `essere-avere`, `possessiv` (mio/mia/miei/mie, tuo …) | `famiglia` |
| l04 Tempo libero | Zeit (Uhrzeit, Tage), Freizeit, -are-Verben | `verben-are`, `piacere` (mi piace / mi piacciono, ti piace) | `tempo-libero` |

Die genaue Wortauswahl trifft der Bauende. Bedingung: Die Prüfregeln aus Aufgabe 1 sind erfüllt, und jedes Wort passt zur Situation.

- [ ] **Schritt 1:** `node werkzeuge/lektionen-pruefen.js` → Fehlerliste, die Ausgangslage
- [ ] **Schritt 2:** Wörter für l01–l04 eintragen und Kapitel schreiben. Die Regeln sind kurz und auf Deutsch, mit Tabelle, `kurz` und 8 Übungen. Die Übungen benutzen nur Wörter aus Lektion ≤ n.
- [ ] **Schritt 3:** Texte schreiben und anpassen, Fragen auf Deutsch, die erste Antwort ist richtig.
- [ ] **Schritt 4:** `node werkzeuge/lektionen-pruefen.js` → 0 Fehler. Hinweise aus l01–l04 auflösen. `node --test werkzeuge/test/` → **alles grün**, auch „echte Daten“.
- [ ] **Schritt 5: Im Browser:** Lektion 1 öffnen, Kapitel `essere-un` durchspielen, Text `ciao` mit Fragen lesen, Wort antippen → Bedeutung erscheint. Keine Konsolenfehler.
- [ ] **Schritt 6: Stand zeigen.**

### Aufgabe 5: Abschluss

**Dateien:** `sw.js`, `ROADMAP.md`, `TODO.md`, `CLAUDE.md`

- [ ] **Schritt 1:** `sw.js`: `VERSION` von `'v26'` auf `'v27'` erhöhen. `'lektionen-inhalt.js'` und `'lektionen.js'` vor `'app.js'` in `DATEIEN` eintragen.
- [ ] **Schritt 2:** `ROADMAP.md` anpassen:
  - Unter „Dazugekommen“ Zeile „**Lektionen** – Lektion 1–4, Startseite mit Lektionen und Frei üben“ ✅
  - Zeile „Lektionen Schritt 2–6“ ⏳
  - Die Idee „Abfrage Italienisch → Deutsch“ wandert von „Ideen“ in den Plan.
- [ ] **Schritt 3:** `CLAUDE.md`, Abschnitt Dateien:
  - `lektionen-inhalt.js` / `lektionen.js` eintragen, außerdem Prüfskript und `node --test werkzeuge/test/`.
  - Regel: „Neue Lektionstexte: `node werkzeuge/lektionen-pruefen.js` muss 0 Fehler melden.“
- [ ] **Schritt 4:** `TODO.md`: unter „Jetzt“ „Lektion 1–4 ausprobieren: Passt die Startseite? Ist der Wortcheck angenehm?“
- [ ] **Schritt 5:** Gesamtprüfung im Browser, hell und dunkel, iPhone-Größe. Ein Durchlauf „Los“ von leerem Stand bis Kapitel. Testdaten löschen.
- [ ] **Schritt 6:** Nicole Stand zeigen und fragen, ob committet werden soll.
