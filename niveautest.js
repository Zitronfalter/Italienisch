// Niveau-Test: 32 Fragen, je 8 für A1, A2, B1 und B2
// Die erste Antwort ist die richtige (die App mischt die Reihenfolge).
// Eine Stufe gilt als erreicht, wenn mindestens 6 von 8 Fragen stimmen
// und die Stufe davor auch erreicht ist.

const NIVEAUTEST = [
  // ---------- A1 ----------
  { stufe: 'A1', frage: 'Io ___ tedesca.', antworten: ['sono', 'ho', 'sei'] },
  { stufe: 'A1', frage: '„Come ti chiami?“ bedeutet …', antworten: ['Wie heißt du?', 'Wie geht es dir?', 'Woher kommst du?'] },
  { stufe: 'A1', frage: '___ casa', antworten: ['la', 'il', 'lo'] },
  { stufe: 'A1', frage: 'Noi ___ la pizza. (mangiare)', antworten: ['mangiamo', 'mangiate', 'mangiano'] },
  { stufe: 'A1', frage: '„Quanto costa?“ bedeutet …', antworten: ['Wie viel kostet das?', 'Wie spät ist es?', 'Wo ist das?'] },
  { stufe: 'A1', frage: 'Il treno parte ___ dieci.', antworten: ['alle', 'al', 'nel'] },
  { stufe: 'A1', frage: '„Ho fame“ bedeutet …', antworten: ['Ich habe Hunger.', 'Ich bin müde.', 'Ich habe Durst.'] },
  { stufe: 'A1', frage: 'Tu ___ italiano? (parlare)', antworten: ['parli', 'parla', 'parlo'] },

  // ---------- A2 ----------
  { stufe: 'A2', frage: 'Ieri ___ mangiato al ristorante.', antworten: ['ho', 'sono', 'hanno'] },
  { stufe: 'A2', frage: 'Anna è ___ a Roma.', antworten: ['andata', 'andato', 'andare'] },
  { stufe: 'A2', frage: 'Io mi ___ alle sette. (svegliarsi)', antworten: ['sveglio', 'sveglia', 'svegli'] },
  { stufe: 'A2', frage: 'Il libro è ___ tavolo.', antworten: ['sul', 'sulla', 'nella'] },
  { stufe: 'A2', frage: '„Ci vediamo domani!“ bedeutet …', antworten: ['Wir sehen uns morgen!', 'Wir sehen uns heute!', 'Ich sehe dich morgen nicht.'] },
  { stufe: 'A2', frage: '„Taglia le cipolle.“ bedeutet …', antworten: ['Schneide die Zwiebeln.', 'Koche die Zwiebeln.', 'Schäle die Zwiebeln.'] },
  { stufe: 'A2', frage: 'Marco e Luca sono ___ ieri. (tornare)', antworten: ['tornati', 'tornato', 'tornate'] },
  { stufe: 'A2', frage: '„Il negozio è chiuso il lunedì.“ Wann ist das Geschäft zu?', antworten: ['Montags', 'Sonntags', 'Jeden Tag'] },

  // ---------- B1 ----------
  { stufe: 'B1', frage: 'Quando ero piccola, ___ al mare ogni estate. (andare)', antworten: ['andavo', 'sono andata', 'andrò'] },
  { stufe: 'B1', frage: 'Domani ___ a Milano. (andare, ich)', antworten: ['andrò', 'andavo', 'andassi'] },
  { stufe: 'B1', frage: 'Vorrei che tu ___ con me. (venire)', antworten: ['venga', 'vieni', 'verrai'] },
  { stufe: 'B1', frage: 'Se avessi tempo, ___ un viaggio. (fare)', antworten: ['farei', 'faccio', 'farò'] },
  { stufe: 'B1', frage: 'Il libro ___ ho letto è bello.', antworten: ['che', 'cui', 'chi'] },
  { stufe: 'B1', frage: '„Vuoi delle mele?“ – „Sì, ___ prendo due.“', antworten: ['ne', 'li', 'ci'] },
  { stufe: 'B1', frage: '„Nonostante la pioggia, siamo usciti.“ bedeutet …', antworten: ['Trotz des Regens sind wir rausgegangen.', 'Wegen des Regens sind wir drinnen geblieben.', 'Nach dem Regen sind wir rausgegangen.'] },
  { stufe: 'B1', frage: '„Glielo dico domani.“ bedeutet …', antworten: ['Ich sage es ihm (oder ihr) morgen.', 'Ich sage ihm morgen nichts.', 'Er sagt es mir morgen.'] },

  // ---------- B2 ----------
  { stufe: 'B2', frage: 'Se fossi in te, ___ subito. (partire)', antworten: ['partirei', 'partirò', 'parto'] },
  { stufe: 'B2', frage: "Se l'avessi saputo, ___ venuta.", antworten: ['sarei', 'fossi', 'ero'] },
  { stufe: 'B2', frage: 'Penso che Marco ___ già partito.', antworten: ['sia', 'è', 'sarà'] },
  { stufe: 'B2', frage: "Benché ___ tardi, restiamo ancora un po'.", antworten: ['sia', 'è', 'sarà'] },
  { stufe: 'B2', frage: '„Il ladro sarebbe scappato in macchina.“ bedeutet …', antworten: ['Der Dieb soll mit dem Auto geflohen sein.', 'Der Dieb wäre gern mit dem Auto geflohen.', 'Der Dieb wird mit dem Auto fliehen.'] },
  { stufe: 'B2', frage: '„Nel 1889 la regina visitò Napoli.“ – visitò heißt …', antworten: ['besuchte', 'wird besuchen', 'besucht'] },
  { stufe: 'B2', frage: '„Verrò domani.“ → Ha detto che ___ il giorno dopo.', antworten: ['sarebbe venuta', 'verrà', 'viene'] },
  { stufe: 'B2', frage: 'La città nella ___ vivo è piccola.', antworten: ['quale', 'cui', 'che'] },
];

const Niveautest = (() => {
  const STUFEN = ['A1', 'A2', 'B1', 'B2'];
  const MINDESTENS = 6;      // von 8

  // antworten: Liste der gewählten Antwort-Nummern (0 = richtig)
  function auswerten(antworten) {
    const proStufe = {};
    for (const s of STUFEN) proStufe[s] = { richtig: 0, von: 0 };
    NIVEAUTEST.forEach((f, i) => {
      proStufe[f.stufe].von += 1;
      if (antworten[i] === 0) proStufe[f.stufe].richtig += 1;
    });
    let niveau = '';
    for (const s of STUFEN) {
      if (proStufe[s].richtig >= MINDESTENS) niveau = s;
      else break;
    }
    return { niveau, proStufe };
  }

  function erklaerung(niveau) {
    return {
      '': 'Du bist auf dem Weg zu A1. Die Vokabeln und die A1-Kapitel helfen dir am meisten.',
      A1: 'A1 sitzt: Du verstehst einfache Sätze und kannst dich vorstellen. Als Nächstes: die A2-Texte und die Vergangenheit.',
      A2: 'A2 sitzt: Alltag, Urlaub und einfache Rezepte klappen. Für B1 helfen eigene Texte und mehr Zeitung.',
      B1: 'B1: Du verstehst auch längere Texte. Jetzt sind Zeitungsartikel ein gutes Ziel.',
      B2: 'B2: Zeitung, Geschichten und schwierige Rezepte klappen. Bravissima!',
    }[niveau];
  }

  function speichern(ergebnis) {
    const f = Speicher.daten.fortschritt;
    f.tests = f.tests || [];
    f.tests.push({ datum: Vokabeln.heute(), niveau: ergebnis.niveau, proStufe: ergebnis.proStufe });
    Speicher.speichern();
  }

  function letzter() {
    const t = Speicher.daten.fortschritt.tests;
    return t && t.length ? t[t.length - 1] : null;
  }

  return { auswerten, erklaerung, speichern, letzter, MINDESTENS };
})();
