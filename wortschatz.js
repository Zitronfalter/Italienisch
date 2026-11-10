// Grundwortschatz (wird in Schritt 4 auf ca. 500 Wörter erweitert)
// id: eindeutiger Name · it: Italienisch (Nomen mit Artikel) · de: Deutsch
// auch: weitere richtige Antworten (optional) · thema: zum Sortieren

const WORTSCHATZ = [
  // Begrüßung und Höflichkeit
  { id: 'grazie', it: 'grazie', de: 'danke', thema: 'Höflichkeit' },
  { id: 'prego', it: 'prego', de: 'bitte (als Antwort auf danke)', thema: 'Höflichkeit' },
  { id: 'per-favore', it: 'per favore', de: 'bitte (als Bitte)', thema: 'Höflichkeit' },
  { id: 'scusi', it: 'scusi', de: 'Entschuldigung (Sie-Form)', thema: 'Höflichkeit' },
  { id: 'arrivederci', it: 'arrivederci', de: 'auf Wiedersehen', thema: 'Höflichkeit' },
  { id: 'buonanotte', it: 'buonanotte', de: 'gute Nacht', thema: 'Höflichkeit' },

  // Essen und Trinken
  { id: 'acqua', it: "l'acqua", de: 'das Wasser', thema: 'Essen' },
  { id: 'pane', it: 'il pane', de: 'das Brot', thema: 'Essen' },
  { id: 'vino', it: 'il vino', de: 'der Wein', thema: 'Essen' },
  { id: 'formaggio', it: 'il formaggio', de: 'der Käse', thema: 'Essen' },
  { id: 'uovo', it: "l'uovo", de: 'das Ei', thema: 'Essen' },
  { id: 'cipolla', it: 'la cipolla', de: 'die Zwiebel', thema: 'Essen' },
  { id: 'aglio', it: "l'aglio", de: 'der Knoblauch', thema: 'Essen' },
  { id: 'conto', it: 'il conto', de: 'die Rechnung', thema: 'Essen' },
  { id: 'colazione', it: 'la colazione', de: 'das Frühstück', thema: 'Essen' },

  // Küche und Rezepte
  { id: 'cucchiaio', it: 'il cucchiaio', de: 'der Löffel', thema: 'Küche' },
  { id: 'pentola', it: 'la pentola', de: 'der Kochtopf', thema: 'Küche' },
  { id: 'tagliare', it: 'tagliare', de: 'schneiden', thema: 'Küche' },
  { id: 'cuocere', it: 'cuocere', de: 'kochen, garen', thema: 'Küche' },
  { id: 'aggiungere', it: 'aggiungere', de: 'hinzufügen', thema: 'Küche' },
  { id: 'sale', it: 'il sale', de: 'das Salz', thema: 'Küche' },

  // Unterwegs
  { id: 'stazione', it: 'la stazione', de: 'der Bahnhof', thema: 'Unterwegs' },
  { id: 'biglietto', it: 'il biglietto', de: 'die Fahrkarte', thema: 'Unterwegs' },
  { id: 'spiaggia', it: 'la spiaggia', de: 'der Strand', thema: 'Unterwegs' },
  { id: 'citta', it: 'la città', de: 'die Stadt', thema: 'Unterwegs' },
  { id: 'strada', it: 'la strada', de: 'die Straße', thema: 'Unterwegs' },
  { id: 'a-destra', it: 'a destra', de: 'rechts', thema: 'Unterwegs' },
  { id: 'a-sinistra', it: 'a sinistra', de: 'links', thema: 'Unterwegs' },

  // Alltag
  { id: 'casa', it: 'la casa', de: 'das Haus', thema: 'Alltag' },
  { id: 'amico', it: "l'amico", de: 'der Freund', thema: 'Alltag' },
  { id: 'giorno', it: 'il giorno', de: 'der Tag', thema: 'Alltag' },
  { id: 'settimana', it: 'la settimana', de: 'die Woche', thema: 'Alltag' },
  { id: 'oggi', it: 'oggi', de: 'heute', thema: 'Alltag' },
  { id: 'domani', it: 'domani', de: 'morgen', thema: 'Alltag' },
  { id: 'sempre', it: 'sempre', de: 'immer', thema: 'Alltag' },
  { id: 'perche', it: 'perché', de: 'warum; weil', thema: 'Alltag' },
  { id: 'caldo', it: 'caldo', de: 'warm, heiß', thema: 'Alltag' },
  { id: 'freddo', it: 'freddo', de: 'kalt', thema: 'Alltag' },
];
