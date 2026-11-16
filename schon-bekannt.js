// Wörter, die Nicole schon kennt (aus ihrer Duolingo-Wortliste, Stand 16.11.2026).
// - In der App: Beim „Kennst du die schon?“ (Wort-Check vor neuen Wörtern) steht bei diesen
//   Wörtern schon „kenne ich“ – Nicole kann es noch umstellen.
// - Im Prüfprogramm werkzeuge/saetze-pruefen.js: Diese Wörter dürfen in Sätzen vorkommen,
//   auch wenn die App sie erst später lehrt.
// Ein Eintrag pro Wort oder Wendung, so wie in Duolingo (ohne Artikel).

const SchonBekannt = (() => {
  const LISTE = [
    "a", "a casa", "a che ora", "a destra", "a piedi", "a presto", "a sinistra", "a volte",
    "abbastanza", "abbiamo", "abitare", "accendere", "aceto", "acqua", "adesso", "adorare",
    "aereo", "aeroporto", "affittare", "affollato", "agenzia di viaggi", "agli", "ah", "ai",
    "aiutare", "aiuto", "al", "albero", "all'", "all'una", "alla", "alle",
    "allegra", "allegro", "allo", "allora", "alto", "amare", "ambasciata", "americano",
    "amica", "amico", "anch'io", "anche", "ancora", "andare", "andare in bicicletta", "andiamo",
    "anello", "animale", "animale domestico", "anno", "antico", "antipasto", "antipatico", "aperitivo",
    "aperto", "appartamento", "applicazione", "appuntamento", "aprire", "arabo", "arance", "arancia",
    "arancione", "armadio", "arrabbiato", "arrivare", "arrivederci", "arte", "ascensore", "asciugare",
    "attore", "attrice", "auguri", "australiano", "autobus", "autunno", "avere", "avete",
    "azzurro", "bagagli", "bagno", "balcone", "ballare", "bambola", "banana", "banca",
    "bar", "baseball", "basso", "bello", "bene", "bere", "bianco", "bibita",
    "biblioteca", "bicchiere", "bicicletta", "biglietto", "biologia", "biondo", "birra", "biscotto",
    "blu", "borsa", "bosco", "bracciale", "bravo", "brutto", "buon compleanno", "buonanotte",
    "buonasera", "buongiorno", "buono", "busta", "c'è", "c'è il sole", "caffè", "calcio",
    "caldo", "calzino", "camera", "cameriera", "cameriere", "camerino", "camicia", "camminare",
    "canadese", "cane", "cantante", "cantare", "canzone", "capa", "capello", "capo",
    "cappello", "cappotto", "cappuccino", "carino", "carne", "carne di maiale", "caro", "carota",
    "carta", "casa", "cassa", "cassetto", "castello", "cattivo", "cena", "cenare",
    "cento", "centro", "centro commerciale", "cercare", "certo", "cetriolo", "chi", "chiamare",
    "chiave", "chiesa", "chimica", "chitarra", "chiudere", "chiuso", "ci sono", "ciao",
    "cibo", "cinese", "cinque", "cintura", "cioccolato", "cipolla", "città", "classe",
    "classico", "cliente", "cognata", "cognato", "coinquilina", "coinquilino", "colazione", "collana",
    "collega", "collezionare", "collezione", "colloquio", "coltello", "com'è", "come", "come si chiama",
    "come stai", "come state", "come ti chiami", "come va", "commessa", "commesso", "comodo", "compagna di classe",
    "compagnia", "compagno di classe", "compito", "compleanno", "comprare", "computer", "con", "con la carta di credito",
    "concerto", "condominio", "conosce", "conoscere", "conoscete", "conoscono", "consolato", "contento",
    "conto", "cornetto", "correre", "cosa", "costare", "costume da bagno", "così", "crema",
    "cricket", "cucchiaio", "cucinare", "cugina", "cugino", "cuoca", "cuoco", "curriculum",
    "cuscino", "d'accordo", "debole", "decorazione", "degli", "dei", "del", "dell'",
    "della", "delle", "dello", "dentifricio", "deve", "devi", "devo", "devono",
    "di", "di dov'è", "di dove", "di fronte a", "di notte", "di solito", "dicembre", "dieci",
    "difficile", "dipingere", "discoteca", "disegnare", "divano", "diverso", "divertente", "dizionario",
    "dobbiamo", "doccia", "documento", "dodici", "dolce", "dollaro", "domanda", "domani",
    "domenica", "donna", "dopo", "dopodomani", "dormire", "dottore", "dottoressa", "dov'è",
    "dove", "dove sono", "dovete", "dovrei", "dritto", "due", "durante", "e",
    "e tu", "ecco", "economico", "edificio", "elegante", "email", "emozionato", "entrata",
    "esame", "esco", "estate", "euro", "europeo", "evento", "evviva", "fa",
    "fa bel tempo", "fa caldo", "fa freddo", "fabbrica", "facciamo", "faccio", "facile", "fagiolo",
    "fai", "famiglia", "famoso", "fanno", "fantasma", "fantastico", "fare", "fare giardinaggio",
    "fare karaoke", "fare shopping", "fare sport", "fare yoga", "farina", "farmacia", "fate", "febbraio",
    "felice", "fermata dell'autobus", "festa", "figli", "figlia", "figlio", "film", "finalmente",
    "fine settimana", "finestra", "finire", "fiore", "fisica", "fontana", "football americano", "forbici",
    "forchetta", "formaggio", "forno", "forse", "forte", "foto", "fotografa", "fotografo",
    "fragola", "francese", "Francia", "francobollo", "fratelli", "fratello", "freddo", "freezer",
    "frigorifero", "frutta", "fungo", "funzionare", "fuori", "gamba", "garage", "gatta",
    "gatto", "gelateria", "gelato", "genero", "gennaio", "gentile", "geografia", "giacca",
    "giallo", "giapponese", "giardino", "ginnastica", "giocare", "giocatore", "gioco", "gioiello",
    "giorno", "giovedì", "giugno", "giusto", "già", "gli", "golf", "gonna",
    "grande", "grasso", "grazie", "grazie comunque", "grazie mille", "grido", "grigio", "gruppo",
    "guanto", "guarda", "guardare la televisione", "ha", "ha bisogno di", "hai", "hai bisogno di", "hanno",
    "ho", "ho bisogno di", "ho fame", "ho paura", "ho sete", "ho sonno", "hobby", "hockey",
    "hotel", "i", "il", "imparare", "impegnato", "impermeabile", "impiegata", "impiegato",
    "importante", "in", "in agosto", "in aprile", "in centro", "in contanti", "in corridoio", "in cucina",
    "in offerta", "in ritardo", "in soggiorno", "indiano", "indirizzo", "indossare", "informazione", "inglese",
    "ingrediente", "iniziare", "insalata", "insegnare", "insieme", "intelligente", "interessante", "internazionale",
    "inutile", "invece", "inverno", "inviare", "invitare", "invitata", "invitato", "io",
    "io sono", "isola", "italiano", "jeans", "l'", "la", "lago", "lampada",
    "latte", "lavagna", "lavandino", "lavare", "lavastoviglie", "lavatrice", "lavorare", "lavoro",
    "le", "leggere", "Lei", "lei", "letto", "lezione", "libero", "libreria",
    "libro", "limone", "lingua", "lo", "lontano", "loro", "luglio", "lui",
    "lunedì", "là", "lì", "ma", "macchina", "madre", "maggio", "maglietta",
    "maglione", "magro", "malato", "male", "mamma", "mandare", "mandarino", "mangiare",
    "mani", "marca", "marito", "marocchino", "marrone", "martedì", "marzo", "matematica",
    "materia", "matita", "matrimonio", "mattina", "me", "mela", "melone", "mensa",
    "mercato", "mercoledì", "mese", "metropolitana", "mettere", "mi dispiace", "mi piacciono", "mi piace",
    "mia", "mie", "miei", "migliore", "mille", "mio", "mirtillo", "mobile",
    "moderno", "moglie", "molte", "molti", "molto", "moneta", "montagna", "monumento",
    "moro", "moschea", "mostra", "mouse", "museo", "musica", "nave", "negli",
    "negozio", "nei", "nel", "nell'", "nella", "nelle", "nello", "nero",
    "nevicare", "nipote", "nipoti", "no", "noi", "noioso", "noleggiare", "non",
    "non posso", "non puoi", "non può", "non ti preoccupare", "non trovo", "non vedo l'ora di", "non vi preoccupate", "nonna",
    "nonni", "nonno", "normalmente", "nostra", "nostre", "nostri", "nostro", "nove",
    "novembre", "nuora", "nuotare", "nuovo", "o", "occhiali", "occhiali da sole", "occhio",
    "occupato", "odiare", "oggetto", "oggi", "ogni", "OK", "olio", "ombrello",
    "online", "ora", "ordinare", "organizzare", "orologio", "orribile", "ospedale", "ostello",
    "otto", "ottobre", "padre", "paese", "pagare", "palazzo", "palestra", "palla",
    "pallacanestro", "pallavolo", "panificio", "panino", "pantaloncini", "pantaloni", "papà", "parcheggio",
    "parco", "parente", "parlare", "parli", "parlo", "partire", "partita", "passaporto",
    "passeggiata", "pasta", "patata", "pattinare", "pavimento", "peggiore", "pelle", "penna",
    "per", "per affari", "per favore", "per fortuna", "per piacere", "pera", "perché", "perfetto",
    "pericoloso", "persona", "però", "pescare", "pesce", "pettine", "piacere", "pianoforte",
    "pianta", "piatto", "piazza", "piccante", "piccolo", "pieno", "pigiama", "pigro",
    "ping-pong", "piovere", "piscina", "pittore", "pittrice", "pizza", "pizzeria", "poca",
    "pochi", "poco", "poi", "polizia", "pollo", "polpetta", "poltrona", "pomeriggio",
    "pomodoro", "pompelmo", "ponte", "pop", "porta", "portafoglio", "portare", "portoghese",
    "possiamo", "posso", "possono", "posta", "posto", "potete", "pranzare", "pranzo",
    "preferiamo", "preferisce", "preferisci", "preferisco", "preferiscono", "preferite", "preferito", "prego",
    "prendere", "preparare", "presentazione", "presto", "prezzo", "prima", "primavera", "problema",
    "prodotto", "professore", "professoressa", "profumo", "progetto", "pronto", "prossimo", "pub",
    "pulire", "pulito", "puoi", "purtroppo", "può", "qua", "qua vicino", "quaderno",
    "qualcosa", "qualcosa di", "quando", "quanto costa", "quanto costano", "quartiere", "quattro", "quegli",
    "quei", "quel", "quell'", "quella", "quelle", "quello", "questa", "queste",
    "questi", "questo", "qui", "qui vicino", "ragazza", "ragazze", "ragazzi", "ragazzo",
    "raramente", "regalare", "regalo", "resto", "ricco", "ricevere", "riscaldamento", "riso",
    "ristorante", "riunione", "rock", "romantico", "rosa", "rosso", "rotto", "rugby",
    "rumore", "sabato", "sale", "salotto", "salve", "sapone", "scalare", "scarico",
    "scarpa", "scatola", "sciare", "sciarpa", "scontrino", "scopa", "scrivania", "scrivere",
    "scuola", "scusa", "scusate", "scusi", "sedia", "sei", "sei di", "sempre",
    "sentire", "sera", "seria", "serio", "sette", "settembre", "settimana", "shampoo",
    "siamo", "siciliano", "sicuro", "siete", "signor", "signora", "signore", "simpatica",
    "simpatico", "sinagoga", "sito", "skateboard", "soldi", "solo", "sono", "sono di",
    "sopra", "soprattutto", "sorella", "sotto", "souvenir", "Spagna", "spagnolo", "spaventoso",
    "spazzolino", "specchio", "speciale", "spesso", "sporco", "sportivo", "sposa", "sposo",
    "squadra", "sta piovendo", "stadio", "stanco", "stanno bene", "stanotte", "stanza", "stare",
    "stare male", "stasera", "statua", "stazione", "stivale", "storia", "strada", "straniero",
    "strano", "stressato", "studente", "studentessa", "studi", "studiare", "studio", "sua",
    "sue", "suo", "suocera", "suoceri", "suocero", "suoi", "suonare", "supermercato",
    "svizzero", "sì", "tablet", "tagliare", "tante", "tanti", "tappeto", "tardi",
    "tastiera", "tavolo", "taxi", "tazza", "te", "teatro", "tedesco", "telefonare a",
    "telefono", "tenda", "tennis", "ti piacciono", "ti piace", "ti presento", "timida", "timido",
    "tornare", "torta", "tranquillo", "tre", "tredici", "treno", "triste", "troppe",
    "troppi", "troppo", "trucco", "tu", "tua", "tue", "tuo", "tuoi",
    "turista", "tutte", "tutti", "tutti i giorni", "tutto", "tutto il giorno", "tè", "ufficio",
    "ultimamente", "un", "un altro", "un po'", "un po' di", "un'", "un'altra", "una",
    "undici", "università", "uno", "uomo", "uova", "uovo", "urgente", "usare",
    "uscire", "uscita", "utile", "va", "va bene", "vada", "vado", "vai",
    "valigia", "vanno", "vecchio", "vedere", "vegetariano", "vendere", "venerdì", "venire",
    "verde", "verdura", "vero", "vestiti", "vestito", "vetrina", "vi presento", "via",
    "viaggiare", "viaggio", "vicina", "vicino", "vicino al", "vicino alla", "videogioco", "vino",
    "viola", "visitare", "vivere", "voce", "vogliamo", "voglio", "vogliono", "voi",
    "volete", "vorrebbe", "vorrebbero", "vorrei", "vorremmo", "vorreste", "vorresti", "vostra",
    "vostre", "vostri", "vostro", "vuoi", "vuole", "vuoto", "wow", "zaino",
    "zia", "zio", "zoo", "zucchero", "è", "è di",
  ];

  // Gleich geschrieben, aber in der App etwas anderes: „sei“ ist bei Duolingo „du bist“, in der App „sechs“.
  const NICHT_VORMERKEN = new Set(['sei']);

  const klein = (s) => s.toLowerCase().replace(/’/g, "'").replace(/[?!.]/g, '').trim();
  const menge = new Set(LISTE.map(klein));

  // „il caffè“ → „caffè“, „l'acqua“ → „acqua“, „quanto costa?“ → „quanto costa“
  function grundform(it) {
    return klein(it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '');
  }

  // Kennt Nicole dieses App-Wort schon (für „kenne ich“ vormerken)?
  function enthaelt(it) {
    const g = grundform(it);
    return !NICHT_VORMERKEN.has(g) && (menge.has(g) || menge.has(klein(it)));
  }

  // Einzelne Wörter aus allen Einträgen („grazie mille“ → grazie, mille; „dov'è“ → dov', è)
  const einzeln = new Set();
  for (const eintrag of LISTE) {
    for (const t of klein(eintrag).split(/\s+/)) {
      einzeln.add(t);
      const i = t.indexOf("'");
      if (i > 0) { einzeln.add(t.slice(0, i + 1)); einzeln.add(t.slice(i + 1)); }
    }
  }

  // Kennt Nicole dieses einzelne Wort (so wie es im Satz steht)?
  function wortBekannt(form) {
    return einzeln.has(klein(form));
  }

  return { LISTE, enthaelt, grundform, wortBekannt };
})();
