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

  // Italienische Stimmen, die beste zuerst (Premium > Verbessert > Standard)
  function italienischeStimmen() {
    if (!kannSprechen) return [];
    const guete = (s) => (/premium/i.test(s.name) ? 3 : /enhanced|verbessert|erweitert|siri/i.test(s.name) ? 2 : 1)
      + (s.localService ? 0.5 : 0);
    return speechSynthesis.getVoices()
      .filter((s) => s.lang && s.lang.replace('_', '-').toLowerCase().startsWith('it'))
      .sort((a, b) => guete(b) - guete(a));
  }

  function stimmeSuchen() {
    const liste = italienischeStimmen();
    const gewuenscht = (Speicher.daten.einstellungen || {}).stimme;
    stimme = liste.find((s) => s.name === gewuenscht) || liste[0] || null;
  }
  if (kannSprechen) {
    stimmeSuchen();
    speechSynthesis.addEventListener('voiceschanged', stimmeSuchen);
  }

  function stimmeWaehlen(name) {
    Speicher.daten.einstellungen = { ...(Speicher.daten.einstellungen || {}), stimme: name };
    Speicher.speichern();
    stimmeSuchen();
  }

  function stimmeName() { return stimme ? stimme.name : ''; }

  // Sprechtempo: 0.7 langsam, 0.8 etwas langsamer (Standard), 0.9 fast normal
  function tempo() { return Number((Speicher.daten.einstellungen || {}).tempo) || 0.8; }
  function tempoWaehlen(wert) {
    Speicher.daten.einstellungen = { ...(Speicher.daten.einstellungen || {}), tempo: Number(wert) };
    Speicher.speichern();
  }

  // Wird aufgerufen, wenn das Vorlesen nach kurzer Zeit nicht startet
  // (z. B. iPhone im Stumm-Modus). Die App zeigt dann einen Hinweis.
  let beiStille = null;
  function wennStill(fn) { beiStille = fn; }

  // Satzzeichen so säubern, dass die Stimme Fragen und Satzenden sicher erkennt:
  // «Vuole un cornetto?», chiede …  →  Vuole un cornetto? Chiede …
  function fuerStimme(text) {
    return text
      .replace(/[«»“”„"]/g, '')
      .replace(/\s+[–—-]\s+/g, ', ')
      .replace(/([.!?])\s*,/g, '$1')
      .replace(/([.!?])\.+/g, '$1')
      .replace(/([.!?])\s+(\p{Ll})/gu, (_, z, b) => z + ' ' + b.toUpperCase())
      .replace(/\s+/g, ' ')
      .trim();
  }

  // Text in Teile mit Pausen zerlegen:
  // - nach jedem Satz eine längere Pause
  // - bei Komma eine kurze Pause
  // - Fragen bleiben ganz, damit die Stimme am Ende nach oben geht
  const PAUSE_SATZ = 550;
  const PAUSE_KOMMA = 220;
  function teile(text) {
    const liste = [];
    const saetze = fuerStimme(text).split(/(?<=[.!?:;])\s+/).filter(Boolean);
    for (const satz of saetze) {
      if (satz.endsWith('?')) { liste.push({ text: satz, pause: PAUSE_SATZ }); continue; }
      const stuecke = satz.split(/(?<=,)\s+/).filter(Boolean);
      stuecke.forEach((s, i) => liste.push({ text: s, pause: i === stuecke.length - 1 ? PAUSE_SATZ : PAUSE_KOMMA }));
    }
    return liste;
  }

  let lauf = 0;            // jede neue Ausgabe bekommt eine Nummer; alte laufen nicht weiter
  let pausenUhr = null;

  // Liest Text vor. fertig() wird aufgerufen, wenn das Vorlesen endet.
  // Die Teile werden nacheinander gesprochen, dazwischen eine echte Pause.
  function sprich(text, fertig) {
    if (!kannSprechen) return;
    if (!stimme) stimmeSuchen();
    const liste = teile(text);
    if (!liste.length) return;

    const meinLauf = ++lauf;
    clearTimeout(pausenUhr);
    let gestartet = false;
    let erledigt = false;
    const ende = () => { if (!erledigt) { erledigt = true; if (fertig) fertig(); } };

    const sprichTeil = (i) => {
      if (meinLauf !== lauf) return;               // inzwischen angehalten oder neu gestartet
      if (i >= liste.length) { ende(); return; }
      const u = new SpeechSynthesisUtterance(liste[i].text);
      u.lang = 'it-IT';
      if (stimme) u.voice = stimme;
      u.rate = tempo();                             // Standard: etwas langsamer als normal
      u.onstart = () => { gestartet = true; };
      u.onend = () => {
        if (meinLauf !== lauf) return;
        pausenUhr = setTimeout(() => sprichTeil(i + 1), liste[i].pause);
      };
      u.onerror = (e) => { if (e.error !== 'interrupted' && e.error !== 'canceled') ende(); };
      speechSynthesis.speak(u);
    };

    const los = () => {
      speechSynthesis.resume();                     // iOS: falls die Ausgabe „hängt“
      sprichTeil(0);
      setTimeout(() => {
        if (meinLauf === lauf && !gestartet && !erledigt) {
          if (beiStille) beiStille();
          ende();
        }
      }, 2500);
    };

    if (speechSynthesis.speaking || speechSynthesis.pending) {
      speechSynthesis.cancel();
      setTimeout(los, 120);                         // nach cancel() kurz warten, sonst bleibt Safari stumm
    } else {
      los();
    }
  }

  function hatItalienischeStimme() {
    if (!stimme) stimmeSuchen();
    return Boolean(stimme);
  }

  function stopp() {
    lauf += 1;
    clearTimeout(pausenUhr);
    if (kannSprechen) speechSynthesis.cancel();
  }

  // Den Satz finden, in dem ein Wort steht (für „Satz anhören“)
  function satzMit(blockText, position) {
    const saetze = [...blockText.matchAll(/[^.!?]+[.!?»]*/g)];
    const treffer = saetze.find((m) => position >= m.index && position < m.index + m[0].length);
    return (treffer ? treffer[0] : blockText).trim();
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
    kannSprechen, sprich, stopp, wennStill, hatItalienischeStimme, teile, satzMit,
    italienischeStimmen, stimmeWaehlen, stimmeName, tempo, tempoWaehlen,
    stand, ergebnisSpeichern, anzahlVerstanden,
  };
})();
