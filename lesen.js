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

  // Eigenes Wort: passt die Grundform oder eine gespeicherte Form (z. B. „tagliate“ zu „tagliare“)?
  function eigenes(form) {
    const eigene = Speicher.daten.eigeneWoerter || {};
    return Object.entries(eigene).find(([, w]) =>
      klein(w.it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '') === form
      || (w.formen || []).includes(form));
  }

  // Bedeutung selbst eintragen. Gibt die Karte zurück.
  function bedeutungSpeichern(form, grundform, bedeutung) {
    const id = 'e-' + wortId(grundform);
    const eigene = Speicher.daten.eigeneWoerter = Speicher.daten.eigeneWoerter || {};
    const alt = eigene[id] || {};
    const formen = new Set(alt.formen || []);
    const f = klein(form).replace(/'$/, '');
    if (f !== klein(grundform)) formen.add(f);
    eigene[id] = { ...alt, it: grundform.trim(), de: bedeutung.trim(), formen: [...formen], selbst: true };
    Speicher.speichern();
    return { id, it: eigene[id].it, de: eigene[id].de, eigen: true };
  }

  // ---------- Eigene Texte ----------

  function eigeneTexte() {
    return (Speicher.daten.eigeneTexte || []).map((t) => ({
      id: t.id, titel: t.titel, text: t.text, datum: t.datum,
      art: 'Eigener Text', stufe: '', woerter: {}, fragen: [], eigen: true,
    }));
  }

  function textSpeichern(titel, text) {
    const sauberText = text.replace(/\r\n?/g, '\n').trim();
    const t = {
      id: 't-' + Date.now(),
      titel: titel.trim() || sauberText.split('\n')[0].slice(0, 40),
      text: sauberText,
      datum: Vokabeln.heute(),
    };
    Speicher.daten.eigeneTexte = [t, ...(Speicher.daten.eigeneTexte || [])];
    Speicher.speichern();
    return eigeneTexte()[0];
  }

  function textLoeschen(id) {
    Speicher.daten.eigeneTexte = (Speicher.daten.eigeneTexte || []).filter((t) => t.id !== id);
    Speicher.speichern();
  }

  // Ergebnis: { form, grundform, bedeutung, karte: { id, it, de } | null } oder null
  function nachschlagen(wort, text) {
    const form = klein(wort);
    const ohneApostroph = form.replace(/'$/, '');

    // Selbst eingetragene Bedeutungen haben Vorrang vor allem anderen
    const selbst = eigenes(ohneApostroph);
    if (selbst && selbst[1].selbst) {
      return { form: wort, grundform: selbst[1].it, bedeutung: selbst[1].de, selbst: true,
        karte: { id: selbst[0], it: selbst[1].it, de: selbst[1].de } };
    }
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

    // Form eines Wortes aus dem Grundwortschatz? (trita → tritare, pomodori → pomodoro)
    for (const k of Woerterbuch.kandidaten(ohneApostroph)) {
      const ws3 = imWortschatz(k);
      if (ws3) return { form: wort, grundform: ws3.it, bedeutung: ws3.de, vermutlich: true, karte: { id: ws3.id, it: ws3.it, de: ws3.de } };
    }

    // Zuletzt: das große Wörterbuch (WikDict)
    const wb = Woerterbuch.suche(form);
    if (wb) {
      // Gibt es die Grundform im Grundwortschatz? Dann lieber diese Bedeutung.
      const ws2 = imWortschatz(wb.grundform);
      if (ws2) return { form: wort, grundform: ws2.it, bedeutung: ws2.de, vermutlich: wb.vermutlich, karte: { id: ws2.id, it: ws2.it, de: ws2.de } };
      const kurz = wb.bedeutung.split('; ').slice(0, 2).join('; ');
      return {
        form: wort, grundform: wb.grundform, bedeutung: wb.bedeutung, vermutlich: wb.vermutlich, quelle: 'WikDict',
        karte: { id: 'e-' + wortId(wb.grundform), it: wb.grundform, de: kurz, eigen: true },
      };
    }

    return null;
  }

  // Wort in die Karteikarten aufnehmen (eigene Wörter werden zusätzlich gespeichert)
  function inKarteikarten(karte) {
    if (karte.eigen) {
      Speicher.daten.eigeneWoerter = Speicher.daten.eigeneWoerter || {};
      const alt = Speicher.daten.eigeneWoerter[karte.id] || {};
      Speicher.daten.eigeneWoerter[karte.id] = { ...alt, it: karte.it, de: karte.de };
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
    nachschlagen, inKarteikarten, istInKarteikarten, bedeutungSpeichern,
    eigeneTexte, textSpeichern, textLoeschen,
    kannSprechen, sprich, stopp,
    stand, ergebnisSpeichern, anzahlVerstanden,
  };
})();
