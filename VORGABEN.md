# Italienisch-App – Vorgaben (10.11.2026)

Ziel: Italienisch lernen auf dem iPhone 17, ohne Werbung, ohne Missionen und Serien-Druck, mit sichtbarem echtem Fortschritt.
Ersetzt Duolingo (kostenlos), dort Stufe 3, Abschnitt 13, Duolingo-Score 24 ≈ spätes A1.

## Lernziele
- Einfache Texte lesen
- Im Urlaub Gespräche führen
- Italienische Rezepte sicher übersetzen
- Später Zeitungsartikel verstehen
- Schwächen heute: Vokabeln bleiben nicht, Grammatik wird geraten, Verstehen echter Texte fehlt
- Zeit: 10 Minuten am Tag aufwärts; Motivation entsteht durch sichtbaren Erfolg

## Technik
- Web-App (PWA) für Safari, „Zum Home-Bildschirm“, läuft offline (Service Worker)
- Gebaut unter Windows, kein Mac, kein App Store
- Hosting: GitHub Pages aus https://github.com/Zitronfalter/Italienisch (Code öffentlich)
- Lernstand und eigene Texte nur auf dem iPhone (lokaler Speicher)
- Sicherung: Knopf „Sichern“ exportiert eine Datei (z. B. iCloud Drive), „Laden“ liest sie ein
- Vorlesen mit der iPhone-Stimme (Web Speech API, Italienisch); keine Spracherkennung
- Oberfläche auf Deutsch, ruhig, ohne Werbung, ohne Punkte- und Serien-Spielereien

## Inhalte
- Grundstock fest eingebaut: Grundwortschatz, Lesetexte, Rezepte, Grammatik ab spätem A1
- Eigene Texte einfügen (z. B. ein Rezept): Tippen auf ein Wort zeigt die Bedeutung aus dem eingebauten Wörterbuch, Wort kommt in die Karteikarten
- Eingebautes freies Wörterbuch Italienisch–Deutsch, offline (Lizenz beachten, Quelle nennen); fehlt ein Wort, trägt Nicole die Bedeutung selbst ein

## Lerneinheit
- Feste Runde: ein Knopf „Los“, ca. 10 Minuten – erst fällige Vokabeln, dann ein kurzer Text oder ein Grammatik-Thema; danach freiwillig weiter
- Vokabeln: Abfrage durch Eintippen, App prüft (Wiederholung nach Karteikasten-Prinzip / verteilte Wiederholung)
- Grammatik beides: eigene Kapitel (kurze Regel auf Deutsch, Tabelle, Lückenübungen, bei Fehlern die passende Regel) und Erklärung direkt am Text (Tippen auf eine Form zeigt die Regel)

## Fortschritt
- Wörter, die sitzen (Anzahl sicher gewusster Vokabeln)
- Texte verstanden (Lesetexte mit Verständnisfragen, steigend schwerer)
- Niveau-Test ab und zu: zeigt A1 / A2 / B1

## Zusammenarbeit
- Alles auf Deutsch; Nicole ist Programmier-Anfängerin, Schritte kurz und einfach erklären
- Kleine Schritte, größere vorher abstimmen; Commit nur, wenn Nicole es sagt
