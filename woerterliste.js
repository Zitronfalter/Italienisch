// „Meine Wörter“: alle Wörter nach Lektion, mit Stand pro Wort.
// Nur zum Ansehen und Selbsttesten – ändert nichts am Karteikasten.
//
// Stand eines Worts:
//   'sitzt'        Fach 4 oder 5 (wie „Wörter, die sitzen“)
//   'uebt'         im Karteikasten, aber noch nicht ab Fach 4
//   'kennenlernen' wird gerade kennengelernt (noch nicht geschrieben)
//   'nichtDran'    noch keine Karteikarte

const Woerterliste = (() => {
  const SITZT_AB_FACH = 4;   // gleich wie SICHER_AB_FACH in vokabeln.js

  function stand(id) {
    const k = Speicher.daten.karten[id];
    if (!k) return 'nichtDran';
    if (Vokabeln.istJung(k)) return 'kennenlernen';
    return k.fach >= SITZT_AB_FACH ? 'sitzt' : 'uebt';
  }

  function eintrag(id, it, de) {
    return { id, it, de, stand: stand(id) };
  }

  function gruppen() {
    const nachId = new Map(WORTSCHATZ.map((w) => [w.id, w]));
    const gesehen = new Set();
    const aktuelle = Lektionen.aktuelle();
    const liste = [];

    for (const l of Lektionen.alle()) {
      if (l.art === 'ripasso') continue;
      const woerter = [];
      for (const id of l.wortIds) {
        const w = nachId.get(id);
        if (!w || gesehen.has(id)) continue;
        gesehen.add(id);
        woerter.push(eintrag(id, w.it, w.de));
      }
      if (!woerter.length) continue;
      liste.push({
        titel: `Lektion ${Lektionen.anzeigeNr(l)} · ${l.titel}`,
        untertitel: l.stufe,
        aktuell: Boolean(aktuelle && aktuelle.id === l.id),
        woerter,
      });
    }

    // (Ein Wort kann im Wortschatz in zwei Themen stehen – trotzdem nur einmal zeigen.)
    const weitere = [];
    for (const w of WORTSCHATZ) {
      if (gesehen.has(w.id)) continue;
      gesehen.add(w.id);
      weitere.push(eintrag(w.id, w.it, w.de));
    }
    if (weitere.length) liste.push({ titel: 'Weitere Wörter', untertitel: 'ohne Lektion', aktuell: false, woerter: weitere });

    const eigene = Object.entries(Speicher.daten.eigeneWoerter || {}).map(([id, e]) => eintrag(id, e.it, e.de));
    if (eigene.length) liste.push({ titel: 'Eigene Wörter', untertitel: 'selbst eingetragen', aktuell: false, woerter: eigene });

    return liste;
  }

  function zaehlen(liste = gruppen()) {
    const z = { sitzt: 0, uebt: 0, kennenlernen: 0, nichtDran: 0 };
    for (const g of liste) for (const w of g.woerter) z[w.stand] += 1;
    return z;
  }

  return { stand, gruppen, zaehlen };
})();
