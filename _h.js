const fs=require('fs');let s=fs.readFileSync('uebungen.js','utf8');
const rep=(a,b)=>{if(s.split(a).length!==2)throw new Error('x: '+a.slice(0,70));s=s.replace(a,b);};
rep(`  // Kacheln: Wörter des Satzes + 2 falsche Wörter aus anderen Sätzen
  function kacheln(satz) {
    const eigene = satz.replace(/[.,!?;:«»"]/g, '').split(/\s+/).filter(Boolean);
    const klein = new Set(eigene.map((w) => w.toLowerCase()));
    const fremde = mischen(saetze())`,`  // Kacheln: Wörter des Satzes + 2 falsche Wörter aus anderen Sätzen
  // vorrat: Sätze, aus denen die falschen Wörter kommen (am besten nur Bekanntes)
  function kacheln(satz, vorrat = null) {
    const eigene = satz.replace(/[.,!?;:«»"]/g, '').split(/\s+/).filter(Boolean);
    const klein = new Set(eigene.map((w) => w.toLowerCase()));
    const fremde = mischen(vorrat || saetze())`);
rep(`  // optionen.lektion: nur Sätze aus Kapiteln und Texten dieser und früherer Lektionen,
  // Wortpaare aus den Wörtern der Lektion. Ungelöste Sätze kommen zuerst.
  function runde(optionen = {}) {
    let pool = saetze();
    let paarListe = null;
    const l = optionen.lektion;
    if (l) {
      const bis = Lektionen.alle().filter((x) => x.nr <= l.nr);
      const kap = new Set(bis.flatMap((x) => x.kapitel));
      const tx = new Set(bis.flatMap((x) => x.texte));
      const passend = pool.filter((x) => kap.has(x.kapitel) || tx.has(x.text));
      if (passend.length >= 4) pool = passend;
      if (l.wortIds.length >= 3) paarListe = paare(5, l.wortIds);
    }`,`  // Wörter aus späteren Lektionen: Wort (klein, ohne Artikel) → Lektionsnummer
  let spaeterCache = null;
  function lektionVonWort() {
    if (spaeterCache) return spaeterCache;
    spaeterCache = new Map();
    const klein = (t) => t.toLowerCase().replace(/’/g, "'");
    for (const l of [...Lektionen.alle()].sort((a, b) => a.nr - b.nr)) {
      for (const it of l.woerter) {
        const formen = [klein(it).replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, ''),
          ...klein(it).split(/[\s']+/).filter((t) => t.length > 1 && !GRUNDWOERTER[t])];
        for (const f of formen) if (!spaeterCache.has(f)) spaeterCache.set(f, l.nr);
      }
    }
    return spaeterCache;
  }

  // Passt der Satz zum Stand bis Lektion nr? (kein Wort aus einer späteren Lektion)
  function bekanntBis(satz, nr) {
    const von = lektionVonWort();
    return satz.it.toLowerCase().replace(/[.,!?;:«»"–]/g, ' ').split(/\s+/).filter(Boolean)
      .every((w) => !von.has(w) || von.get(w) <= nr);
  }

  // optionen.lektion: nur Sätze aus Kapiteln und Texten dieser und früherer Lektionen,
  // Wortpaare aus den Wörtern der Lektion. Ungelöste Sätze kommen zuerst.
  // Ohne Lektion (Frei üben): Stand der aktuellen Lektion – nie Neues aus späteren Lektionen.
  function runde(optionen = {}) {
    let pool = saetze();
    let paarListe = null;
    const l = optionen.lektion;
    const grenze = l || Lektionen.aktuelle();
    if (grenze) {
      const bis = Lektionen.alle().filter((x) => x.nr <= grenze.nr);
      const kap = new Set(bis.flatMap((x) => [...x.kapitel, ...(x.uebenKapitel || [])]));
      const tx = new Set(bis.flatMap((x) => x.texte));
      const passend = pool.filter((x) => (kap.has(x.kapitel) || tx.has(x.text)) && bekanntBis(x, grenze.nr));
      const lockerer = pool.filter((x) => kap.has(x.kapitel) || tx.has(x.text));
      pool = passend.length >= 4 ? passend : lockerer.length >= 4 ? lockerer : pool.filter((x) => x.stufe === 'A1');
    }
    if (l && l.wortIds.length >= 3) paarListe = paare(5, l.wortIds);`);
rep(`      { art: 'kacheln', satz: auswahl[1], kacheln: kacheln(auswahl[1].it) },`,`      { art: 'kacheln', satz: auswahl[1], kacheln: kacheln(auswahl[1].it, pool) },`);
rep(`      { art: 'kacheln', satz: auswahl[3], kacheln: kacheln(auswahl[3].it) },`,`      { art: 'kacheln', satz: auswahl[3], kacheln: kacheln(auswahl[3].it, pool) },`);
fs.writeFileSync('uebungen.js',s);
