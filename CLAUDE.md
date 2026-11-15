# Italienisch-App – Hinweise für Claude

Ziele und Wünsche stehen in `VORGABEN.md`, der Plan in `ROADMAP.md`, Nicoles Aufgaben in `TODO.md`. Alle drei zuerst lesen.

## Zusammenarbeit mit Nicole
- Alles auf Deutsch, Nicole duzen.
- Nicole ist Programmier-Anfängerin: kurz und einfach erklären, Fachwörter vermeiden oder kurz erklären.
- Kleine Schritte. Größere Änderungen vorher abstimmen.
- **Es dürfen keine Kosten entstehen.** Nur kostenlose Dienste, Bibliotheken und Daten verwenden (kein GitHub Pro, keine bezahlten APIs, Schriften oder Hosting).
- Commit nur, wenn Nicole es sagt. Autor ist im Repo eingestellt (Zitronfalter, noreply-Adresse) – nicht ändern.
- Nach jedem fertigen Schritt `ROADMAP.md` anpassen: Zeichen in der Tabelle (✅ / ⏳ / ⬜), Stand-Zeile und Balken (2 Blöcke █ pro Schritt, 22 Blöcke gesamt).
- Design „Toskana, warm“ ist umgesetzt: Farben nur über Variablen in `style.css` (`--akzent` Terrakotta für Knöpfe, `--richtig` Olivgrün für richtig/geschafft, `--fehler` Ocker, `--serif` für Überschriften und Lesetexte). Keine Fremd-Schriften laden.
- Begleiter: kleiner Roboter (**keine Katze**) in `begleiter.js`. Bis Nicoles gezeichnete Bilder da sind: Platzhalter-SVG. Bilder später in `BEGLEITER_BILDER` eintragen (7 Stimmungen) und in `sw.js` aufnehmen. Danach App-Farben an den Roboter anpassen. Regeln: nie traurig, kein Druck, keine Punkte/XP, kein KI-Chat (kostet Geld).
- Alles, was Nicole selbst tun oder entscheiden muss, in `TODO.md` eintragen (einfach formuliert); Erledigtes dort abhaken.

## Technik
- Reine Web-App (PWA) ohne Build-Werkzeug: `index.html`, `style.css`, einzelne `.js`-Dateien, per `<script>` eingebunden (keine Module).
- Ziel ist Safari auf dem iPhone, „Zum Home-Bildschirm“, offline. Hosting später über GitHub Pages (oder Alternative, siehe Roadmap).
- Alle Pfade relativ halten (die Seite läuft später unter `/Italienisch/`).
- **Bei jeder Änderung an App-Dateien `VERSION` in `sw.js` erhöhen.** Neue Dateien zusätzlich in `DATEIEN` in `sw.js` eintragen, sonst fehlen sie offline.
- Lernstand nur im Gerät (`localStorage`, Schlüssel `italienisch-daten`, siehe `speicher.js`). Beim Ändern des Aufbaus `FORMAT` erhöhen und alte Sicherungen weiter lesen können.
- Wort-IDs (`wortId()` in `wortschatz.js`) nicht ändern: gespeicherte Karteikarten hängen daran.
- Oberfläche ruhig: keine Punkte, Serien, Belohnungs-Animationen oder Werbung. Farben als Variablen in `style.css`, hell und dunkel.

## Dateien
- `app.js` – Bildschirme und Knöpfe
- `speicher.js` – Speichern, Sichern, Laden
- `vokabeln.js` – Karteikasten (5 Fächer) und Prüfen der Antwort. Neue Karten haben `kennen` (0…`KENNEN_FERTIG`=4): erst Kennenlernen (Zeigen+Hören, Wortpaare, Wählen nach Lesen/Hören), danach Schreiben ab dem nächsten Tag. Karten ohne `kennen` (alt) gelten als bekannt. Fällige Wörter ab Fach 2 kommen abwechselnd als Italienisch schreiben oder Italienisch → Deutsch mit Kacheln (`karte.richtung`, `richtungFuer`, `deutschKacheln`).
- Neue Wörter pro Tag: `Vokabeln.neuProTag()` (Einstellung `einstellungen.neuProTag`, Standard 3), gezählt in `fortschritt.neuHeute` (nur `aufnehmen(id, { neu: true })` aus der Runde). Pause-Gründe in `rundeZusammenstellen` (`tag`, `jung`, `faellig`, `schwer`), Text auf der Startseite (`PAUSE_TEXT`).
- `wortschatz.js` – Grundwortschatz (Themen, A1/A2)
- `texte.js` – Lesetexte/Rezepte mit Wortbedeutungen, Fragen (erste Antwort = richtig) und `uebersetzung` (deutsche Übersetzung jedes Hörsatzes; Test `werkzeuge/test/hoeren.test.js` prüft, dass keiner fehlt). Texte B1/B2 in `texte-b.js` (`LESETEXTE.push`)
- `lesen.js` – Nachschlagen, Vorlesen (Web Speech API, it-IT), gelesene Texte
- `grammatik.js` – Kapitel (Regel, Tabelle, Übungen: Lücke/Kacheln), Fortschritt, Regel-Erkennung am Text (`kapitelFuerWort`). Kapitel B1/B2 in `grammatik-b.js` (`KAPITEL.push`, Zusatzübungen direkt im Kapitel)
- `zusatz.js` – leichtere Zusatzübungen A1/A2 (`ZUSATZ`, wird an die Kapitel gehängt): Tipp in Schritten + 6 Übungen, auch Art `wahl` (erste Option richtig), optional `warum`. Angeboten unter 80 % (`Grammatik.zusatzAnbieten`), am Ende der Übung, auf der Kapitelseite und nach „Kann ich schon“/Wiederholung. Zählen nicht als gelöst/geübt (`fortschritt.grammatik[id].zusatz`). Jedes neue Kapitel braucht Zusatzübungen (Test `zusatz.test.js`)
- Neue Texte: jedes Wort muss eine Bedeutung haben (im Text, in `GRUNDWOERTER` oder im Wortschatz) – vor dem Fertigmelden mit einem kleinen Node-Skript prüfen.
- `woerterbuch.js` + `woerterbuch.json` – großes Wörterbuch (WikDict, CC BY-SA, Quelle in `LIZENZEN.md` und in der App nennen); Formen-Erkennung in `kandidaten()`. Neu bauen mit `werkzeuge/woerterbuch-bauen.js`.
- Nachschlage-Reihenfolge (`Lesen.nachschlagen`): selbst eingetragene Bedeutung → Wörter im Text → `GRUNDWOERTER` → Grundwortschatz → eigene Wörter → Formen von Grundwortschatz-Wörtern → WikDict.
- Eigene Texte: `Speicher.daten.eigeneTexte`; eigene Wörter: `Speicher.daten.eigeneWoerter` (`e-…`-IDs, mit `formen` und `selbst`).
- `lektionen-inhalt.js` – Lektionen (`LEKTIONEN`): Wörter (italienisch wie in `wortschatz.js`), Kapitel-IDs, Text-IDs. Konzept: `docs/superpowers/specs/2026-11-14-lektionen-design.md`
- Wiederholungen (`art: 'ripasso'`, `nr` z. B. 4.5, `lektionen: [...]`): Teile „Übungen“ (10 gemischte Aufgaben) und Text, keine neuen Wörter. Aufgabenrunde in `app.js` (`starteAufgaben`) auch für „Kann ich schon“ (8 Aufgaben, ab 7 richtig übersprungen).
- Gelöste Übungen: `fortschritt.grammatik[id].geloest` (Nummern – neue Übungen nur hinten anhängen), `fortschritt.hoeren.geloest`.
- `lektionen.js` – welche Lektion dran ist, Teile (Wörter/Grammatik/Text/Hören), erledigt, „kenne ich / neu“, Übergang vom alten Lernstand (`FORMAT` 2). Neue Wörter in der Runde kommen nur aus der aktuellen Lektion.
- Neue Lektionstexte: `node werkzeuge/lektionen-pruefen.js` muss 0 Fehler melden (jedes Wort aus dieser oder früheren Lektion, `GRUNDWOERTER` oder höchstens 8 im Text erklärt).
- `niveautest.js` – 32 Fragen (je 8 A1/A2/B1/B2, erste Antwort = richtig), Stufe erreicht ab 6/8
- Runde („Los“): erst „kenne ich / neu“ (falls nötig), Vokabeln, danach `naechsterSchritt()` in `app.js` – nächster Teil der aktuellen Lektion; ist dort nichts offen, `naechsterInhalt()` (Frei üben)
- `wiederholung.js` – Grammatik-Karteikasten: geübte Kapitel (oder aus erledigten Lektionen) bekommen `fach`/`faellig` in `fortschritt.grammatik[id]`; fällige Kapitel kommen in `naechsterSchritt()` zuerst (`starteGrammatikWiederholung` in `app.js`, 2 Kapitel × 3 Aufgaben).
- `erzeuger.js` – erzeugt Lücken-Aufgaben selbst (Verbformen aller Zeiten, Artikel, Präposition + Artikel) für 14 Kapitel (`KAPITEL_ERZEUGER`). Nur Verben aus den Listen dort; unregelmäßige Formen stehen in Tabellen. Test `erzeuger.test.js`. In der Aufgabenrunde: `{ art: 'grammatik', kapitel, uebung }` statt `nr`.
- `uebungen.js` – Hören & Üben: Wortpaare, Diktat, Hören+Kacheln; Hörsätze aus Grammatik-Übungen (mit Deutsch) und Lesetexten (ohne «»-Dialoge). Runde: Text → Grammatik → Hören im Wechsel.
- `sw.js` – Service Worker (offline)
- `werkzeuge/server.js` – Test-Server nur für den eigenen Rechner

## Testen
- Logik: `node --test "werkzeuge/test/*.test.js"` (lädt die App-Dateien ohne Browser, siehe `werkzeuge/test/laden.js`).
- Lokal: `node werkzeuge/server.js`, dann http://localhost:8080 (im Browser-Pane: Konfiguration `italienisch` in `.claude/launch.json`).
- Immer in iPhone-Größe prüfen (393 × 852), hell und dunkel.
- Nach Änderungen Service Worker neu laden (Seite zweimal neu laden), sonst sieht man die alte Version.
- Testdaten danach löschen: `localStorage.removeItem('italienisch-daten')`.
