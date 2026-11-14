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
- `vokabeln.js` – Karteikasten (5 Fächer) und Prüfen der Antwort. Neue Karten haben `kennen` (0…`KENNEN_FERTIG`=4): erst Kennenlernen (Zeigen+Hören, Wortpaare, Wählen nach Lesen/Hören), danach Schreiben ab dem nächsten Tag. Karten ohne `kennen` (alt) gelten als bekannt.
- `wortschatz.js` – Grundwortschatz (Themen, A1/A2)
- `texte.js` – Lesetexte/Rezepte mit Wortbedeutungen und Fragen (erste Antwort = richtig)
- `lesen.js` – Nachschlagen, Vorlesen (Web Speech API, it-IT), gelesene Texte
- `grammatik.js` – Kapitel (Regel, Tabelle, Übungen: Lücke/Kacheln), Fortschritt, Regel-Erkennung am Text (`kapitelFuerWort`)
- Neue Texte: jedes Wort muss eine Bedeutung haben (im Text, in `GRUNDWOERTER` oder im Wortschatz) – vor dem Fertigmelden mit einem kleinen Node-Skript prüfen.
- `woerterbuch.js` + `woerterbuch.json` – großes Wörterbuch (WikDict, CC BY-SA, Quelle in `LIZENZEN.md` und in der App nennen); Formen-Erkennung in `kandidaten()`. Neu bauen mit `werkzeuge/woerterbuch-bauen.js`.
- Nachschlage-Reihenfolge (`Lesen.nachschlagen`): selbst eingetragene Bedeutung → Wörter im Text → `GRUNDWOERTER` → Grundwortschatz → eigene Wörter → Formen von Grundwortschatz-Wörtern → WikDict.
- Eigene Texte: `Speicher.daten.eigeneTexte`; eigene Wörter: `Speicher.daten.eigeneWoerter` (`e-…`-IDs, mit `formen` und `selbst`).
- `niveautest.js` – 24 Fragen (je 8 A1/A2/B1, erste Antwort = richtig), Stufe erreicht ab 6/8
- Runde („Los“): Vokabeln, danach `naechsterInhalt()` in `app.js` – abwechselnd nächster unverstandener Text und nächstes ungeübtes Kapitel
- `uebungen.js` – Hören & Üben: Wortpaare, Diktat, Hören+Kacheln; Hörsätze aus Grammatik-Übungen (mit Deutsch) und Lesetexten (ohne «»-Dialoge). Runde: Text → Grammatik → Hören im Wechsel.
- `sw.js` – Service Worker (offline)
- `werkzeuge/server.js` – Test-Server nur für den eigenen Rechner

## Testen
- Lokal: `node werkzeuge/server.js`, dann http://localhost:8080 (im Browser-Pane: Konfiguration `italienisch` in `.claude/launch.json`).
- Immer in iPhone-Größe prüfen (393 × 852), hell und dunkel.
- Nach Änderungen Service Worker neu laden (Seite zweimal neu laden), sonst sieht man die alte Version.
- Testdaten danach löschen: `localStorage.removeItem('italienisch-daten')`.
