// Lesen: Wörter nachschlagen, Vorlesen, gelesene Texte merken

const Lesen = (() => {
  // ---------- Text zerlegen ----------

  // Zerlegt eine Zeile in Wörter und den Rest (Leerzeichen, Satzzeichen, Zahlen).
  // "dell'olio" → "dell'" + "olio"
  function stuecke(zeile) {
    const teile = [];
    const muster = /\p{L}+['’]?/gu;
    let letzte = 0;
    for (const treffer of zeile.matchAll(muster)) {
      if (treffer.index > letzte) teile.push({ text: zeile.slice(letzte, treffer.index) });
      teile.push({ text: treffer[0], wort: true });
      letzte = treffer.index + treffer[0].length;
    }
    if (letzte < zeile.length) teile.push({ text: zeile.slice(letzte) });
    return teile;
  }

  // Text in Blöcke: { art: 'h' | 'li' | 'p', zeile }
  function bloecke(text) {
    const liste = [];
    let absatz = [];
    const absatzFertig = () => {
      if (absatz.length) liste.push({ art: 'p', zeile: absatz.join(' ') });
      absatz = [];
    };
    for (const roh of text.split('\n')) {
      const zeile = roh.trim();
      if (!zeile) absatzFertig();
      else if (zeile.startsWith('## ')) { absatzFertig(); liste.push({ art: 'h', zeile: zeile.slice(3) }); }
      else if (zeile.startsWith('- ')) { absatzFertig(); liste.push({ art: 'li', zeile: zeile.slice(2) }); }
      else absatz.push(zeile);
    }
    absatzFertig();
    return liste;
  }

  // Reiner Text zum Vorlesen (ohne ## und -)
  function vorleseText(text) {
    return bloecke(text).map((b) => b.zeile).join('. ').replace(/\.\s*\./g, '.');
  }

  // ---------- Nachschlagen ----------

  function klein(wort) {
    return wort.toLowerCase().replace(/’/g, "'");
  }

  // Wort im Grundwortschatz suchen: "caffè" → il caffè, "mangiare" → mangiare
  function imWortschatz(form) {
    return WORTSCHATZ.find((w) => {
      const it = klein(w.it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '');
      return it === form || klein(w.it) === form;
    });
  }

  function eigenes(form) {
    const eigene = Speicher.daten.eigeneWoerter || {};
    return Object.entries(eigene).find(([, w]) => klein(w.it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '') === form);
  }

  // Ergebnis: { form, grundform, bedeutung, karte: { id, it, de } | null } oder null
  function nachschlagen(wort, text) {
    const form = klein(wort);
    const ohneApostroph = form.replace(/'$/, '');
    const imText = (text && (text.woerter[form] || text.woerter[ohneApostroph])) || null;
    const klein_ = GRUNDWOERTER[form] || GRUNDWOERTER[ohneApostroph] || null;
    const eintrag = imText || klein_;

    if (eintrag) {
      const [grundform, bedeutung, grundbedeutung] = eintrag;
      // Gibt es die Grundform im Grundwortschatz? Dann diese Karteikarte nehmen.
      const ws = imWortschatz(klein(grundform)) || WORTSCHATZ.find((w) => klein(w.it) === klein(grundform));
      let karte = null;
      if (ws) karte = { id: ws.id, it: ws.it, de: ws.de };
      else if (imText && !grundform.includes('+') && !/^[A-Z]/.test(grundform)) {
        // Kleine Wörter (Artikel usw.), Namen (Großbuchstabe) und
        // zusammengezogene Wörter (a + il) nicht als Karte anbieten
        karte = { id: 'e-' + wortId(grundform), it: grundform, de: grundbedeutung || bedeutung, eigen: true };
      }
      return { form: wort, grundform, bedeutung, karte };
    }

    const ws = imWortschatz(form);
    if (ws) return { form: wort, grundform: ws.it, bedeutung: ws.de, karte: { id: ws.id, it: ws.it, de: ws.de } };

    const e = eigenes(form);
    if (e) return { form: wort, grundform: e[1].it, bedeutung: e[1].de, karte: { id: e[0], it: e[1].it, de: e[1].de } };

    return null;
  }

  // Wort in die Karteikarten aufnehmen (eigene Wörter werden zusätzlich gespeichert)
  function inKarteikarten(karte) {
    if (karte.eigen) {
      Speicher.daten.eigeneWoerter = Speicher.daten.eigeneWoerter || {};
      Speicher.daten.eigeneWoerter[karte.id] = { it: karte.it, de: karte.de };
    }
    Vokabeln.aufnehmen(karte.id);
    Speicher.speichern();
  }

  function istInKarteikarten(id) {
    return Boolean(Speicher.daten.karten[id]);
  }

  // ---------- Vorlesen (Stimme des iPhones) ----------

  const kannSprechen = 'speechSynthesis' in window;
  let stimme = null;

  function stimmeSuchen() {
    if (!kannSprechen) return;
    const stimmen = speechSynthesis.getVoices();
    stimme = stimmen.find((s) => s.lang === 'it-IT' && s.localService)
      || stimmen.find((s) => s.lang && s.lang.startsWith('it')) || null;
  }
  if (kannSprechen) {
    stimmeSuchen();
    speechSynthesis.addEventListener('voiceschanged', stimmeSuchen);
  }

  // Liest Text vor. fertig() wird aufgerufen, wenn das Vorlesen endet.
  function sprich(text, fertig) {
    if (!kannSprechen) return;
    speechSynthesis.cancel();
    const satz = new SpeechSynthesisUtterance(text);
    satz.lang = 'it-IT';
    if (stimme) satz.voice = stimme;
    satz.rate = 0.9;                 // etwas langsamer als normal
    if (fertig) {
      satz.onend = fertig;
      satz.onerror = fertig;
    }
    speechSynthesis.speak(satz);
  }

  function stopp() {
    if (kannSprechen) speechSynthesis.cancel();
  }

  // ---------- Gelesene Texte ----------

  function stand(id) {
    const f = Speicher.daten.fortschritt;
    return (f.texte && f.texte[id]) || null;
  }

  function ergebnisSpeichern(id, richtig, von) {
    const f = Speicher.daten.fortschritt;
    f.texte = f.texte || {};
    const alt = f.texte[id] || {};
    f.texte[id] = {
      verstanden: alt.verstanden || richtig === von,   // einmal verstanden bleibt verstanden
      richtig,
      von,
      datum: Vokabeln.heute(),
    };
    Speicher.speichern();
  }

  function anzahlVerstanden() {
    return LESETEXTE.filter((t) => stand(t.id) && stand(t.id).verstanden).length;
  }

  return {
    stuecke, bloecke, vorleseText,
    nachschlagen, inKarteikarten, istInKarteikarten,
    kannSprechen, sprich, stopp,
    stand, ergebnisSpeichern, anzahlVerstanden,
  };
})();
