# Wörter für Urlaub und Rezepte (Entwurf, kurz)

Stand 17.11.2026, mit Nicole abgestimmt (Weg B).

## Warum

Nicole merkt im Urlaub und beim Lesen echter Rezepte, dass ihr Wörter fehlen. Grundwörter zu Kochen und Reisen sind im Lernweg (ab Lektion 17), aber typischer Rezept-Wortschatz (*soffriggere*, *q.b.* …) und einige Urlaubswörter fehlen.

## Ziele

Fünf neue kurze Wort-Lektionen (je 15 Wörter, A2/B1), je mit einem kurzen Text (Rezept bzw. Urlaubsszene), hinter den passenden vorhandenen Wort-Lektionen:

| id | Titel | nach | Wörter |
|---|---|---|---|
| `l10d` | Urlaub: Strand und Stadt | l10c (In montagna) | il lido, lo stabilimento balneare, il lungomare, la cabina, il molo, il pedalò, il lettino, il duomo, il belvedere, la ZTL, il biglietto cumulativo, il chiostro, il campanile, la scalinata, il vicolo |
| `l11d` | Rezepte lesen: Zubereiten | l11c (Che sapore ha?) | soffriggere, sfumare, tostare, insaporire, mantecare, dorare, scottare, sbollentare, amalgamare, incorporare, setacciare, a fuoco vivace, stufare, saltare in padella, imbiondire |
| `l16d` | Urlaub: unterwegs und kleine Notfälle | l16c (In farmacia) | la guardia medica, smarrire, l'ufficio oggetti smarriti, la navetta, convalidare, gli spiccioli, il deposito bagagli, la stazione di servizio, il noleggio auto, la presa, l'adattatore, la colazione inclusa, il carro attrezzi, il soccorso stradale, rimborsare |
| `l17d` | Rezepte lesen: Zutaten und Mengen | l17c | q.b., a piacere, il rametto, la buccia, il pangrattato, la pancetta, il guanciale, il brodo vegetale, grattugiato, il dado, la passata di pomodoro, il concentrato di pomodoro, la fecola di patate, la ricotta, lo strutto |
| `l23d` | Rezepte lesen: Ofen und Geräte | l23c | il forno ventilato, preriscaldare, la tortiera, la carta forno, la frusta, il mattarello, il colino, lo scolapasta, al dente, dorato, tiepido, riposare, la spatola, il cucchiaio di legno, la placca |

## Nicht-Ziele

- Keine Duolingo-Wörter (Nicole kennt sie schon), keine Satz-Treppe für diese Wörter (Sätze gibt es bisher nur für Lektion 4–9).
- Kein Umbau: bestehende Lektionen, Nummern und Lernstand bleiben.

## Ansätze

- **B – in den Lernweg einbauen** (gewählt): klein, wie die Wort-Lektionen vom 15.11.
- A – eigene Pakete zum Vorziehen: neue Funktion, nicht nötig; Rezepte lassen sich schon jetzt als eigener Text mit Wörterbuch lesen.

## Beim Bauen (Claudes Entscheidungen)

- `wortLektionenEinfuegen` kann eine 4. Wort-Lektion hinter vorhandene hängen (Nummer x.4, eingefügt nach x.3).
- Neue Wörter in `wortschatz.js` als neue Themen (A2 bzw. B1), Wort-IDs neu.
- Texte in `texte-a2.js` / `texte-b1.js`; `node werkzeuge/lektionen-pruefen.js` 0 Fehler; jede Zeile mit Übersetzung (Test `hoeren.test.js`), Fragen mit erster Antwort richtig.
- Ersatzwörter, falls eins schon existiert, wählt Claude im selben Thema.
