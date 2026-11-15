// Italienisch-App – Hauptprogramm

// Zu welchem Reiter der Leiste unten gehört ein Bildschirm?
// Nicht aufgeführt (Runde, Übung, Lesen, Test …) = Leiste ausgeblendet.
const REITER_VON = {
  start: 'heute',
  lektionen: 'lektionen', lektion: 'lektionen',
  ueben: 'ueben', texte: 'ueben', grammatik: 'ueben', kapitel: 'ueben', woerterbuch: 'ueben',
  fortschritt: 'stand', woerter: 'stand',
  einstellungen: 'einst', daten: 'einst',
};

// Zwischen den Bildschirmen wechseln: genau einer ist sichtbar.
function zeige(name) {
  document.querySelectorAll('.screen').forEach((el) => {
    el.hidden = el.id !== 'screen-' + name;
  });
  const reiter = REITER_VON[name];
  const leiste = document.getElementById('leiste');
  leiste.hidden = !reiter;
  document.body.classList.toggle('mit-leiste', Boolean(reiter));
  leiste.querySelectorAll('[data-reiter]').forEach((k) => {
    if (k.dataset.reiter === reiter) k.setAttribute('aria-current', 'page');
    else k.removeAttribute('aria-current');
  });
  obenLeisteZeigen();
  setTimeout(obenLeisteZeigen, 0);   // falls die Seite ihren Zurück-Text gleich danach ändert
  window.scrollTo(0, 0);
}

// Leiste oben: „‹ Zurück“ (bzw. „✕ Übung beenden“) für den Zurück-Knopf der sichtbaren Seite.
// Der Knopf unten bleibt im HTML, wird aber ausgeblendet (body.mit-oben).
function zurueckKnopfDerSeite() {
  const seite = [...document.querySelectorAll('.screen')].find((s) => !s.hidden);
  return seite && [...seite.querySelectorAll('.knopf-zurueck')].find((k) => !k.hidden);
}
function obenLeisteZeigen() {
  const knopf = zurueckKnopfDerSeite();
  document.getElementById('oben-leiste').hidden = !knopf;
  document.body.classList.toggle('mit-oben', Boolean(knopf));
  if (!knopf) return;
  const text = knopf.textContent.trim();
  const beenden = /beenden|abbrechen/i.test(text);
  document.querySelector('#oben-leiste .oben-zeichen').textContent = beenden ? '✕' : '‹';
  document.getElementById('oben-zurueck-text').textContent = text;
}
document.getElementById('knopf-oben-zurueck').addEventListener('click', () => {
  const knopf = zurueckKnopfDerSeite();
  if (knopf) knopf.click();
});

// Einen Reiter der Leiste öffnen
function oeffneReiter(reiter) {
  if (reiter === 'lektionen') { zeigeLektionen(); zeige('lektionen'); }
  else if (reiter === 'ueben') { zeigeLesenStand(); zeigeGrammatikStand(); zeigeHoerenStand(); zeige('ueben'); }
  else if (reiter === 'stand') zeigeFortschritt();
  else if (reiter === 'einst') zeigeEinstellungen();
  else zeigeStart();
}

function zeigeEinstellungen() {
  fuelleStimmWahl();
  el('neu-pro-tag').value = String(Vokabeln.neuProTag());
  zeigeNeuHeute();
  zeige('einstellungen');
}

// Gruß passend zur Tageszeit
function setzeGruss() {
  const stunde = new Date().getHours();
  const gruss = stunde < 17 ? 'Buongiorno!' : 'Buonasera!';
  document.getElementById('gruss').textContent = gruss;
}

// ---------- Sichern & Laden ----------

function zeigeZuletztGesichert() {
  const wann = Speicher.daten.zuletztGesichert;
  document.getElementById('zuletzt-gesichert').textContent = wann
    ? new Date(wann).toLocaleString('de-DE', { dateStyle: 'long', timeStyle: 'short' }) + ' Uhr'
    : 'noch nie';
}

function meldung(text, istFehler = false) {
  const el = document.getElementById('daten-meldung');
  el.textContent = text;
  el.classList.toggle('fehler', istFehler);
  el.hidden = !text;
}

function oeffneDaten() {
  meldung('');
  zeigeZuletztGesichert();
  zeige('daten');
}

document.getElementById('knopf-sichern').addEventListener('click', async () => {
  const ergebnis = await Speicher.sichern();
  zeigeZuletztGesichert();
  if (ergebnis === 'geteilt') meldung('Gesichert.');
  else if (ergebnis === 'heruntergeladen') meldung('Gesichert. Die Datei liegt bei deinen Downloads.');
  else meldung('Sichern abgebrochen.');
});

const dateiFeld = document.getElementById('datei-laden');
document.getElementById('knopf-laden').addEventListener('click', () => dateiFeld.click());

dateiFeld.addEventListener('change', async () => {
  const datei = dateiFeld.files[0];
  dateiFeld.value = '';            // damit dieselbe Datei nochmal gewählt werden kann
  if (!datei) return;
  const ok = confirm('Dein jetziger Lernstand wird durch die Sicherung ersetzt. Fortfahren?');
  if (!ok) return;
  try {
    await Speicher.ausDateiLaden(datei);
    zeigeZuletztGesichert();
    Lektionen.uebergang();
    meldung('Geladen. Dein Lernstand ist wiederhergestellt.');
  } catch (fehler) {
    meldung(fehler.message, true);
  }
});

// ---------- Was kommt nach den Vokabeln? ----------
//
// Abwechselnd ein Text, der noch nicht verstanden ist, und ein Grammatik-Kapitel,
// das noch nicht geübt ist (immer von leicht nach schwer).

function naechsterInhalt() {
  const texte = LESETEXTE.filter((t) => !(Lesen.stand(t.id) && Lesen.stand(t.id).verstanden));
  const kapitel = KAPITEL.filter((k) => !(Grammatik.stand(k.id) && Grammatik.stand(k.id).geuebt));
  const letzte = (Speicher.daten.fortschritt.runde || {}).art;
  const text = texte[0] && { art: 'text', obj: texte[0], name: `Text „${texte[0].titel}“` };
  const kap = kapitel[0] && { art: 'kapitel', obj: kapitel[0], name: `Grammatik „${kapitel[0].titel}“` };
  const hoeren = { art: 'hoeren', name: 'Hören & Üben' };
  // Reihenfolge: Text → Grammatik → Hören → Text …; was fertig ist, fällt weg
  const kreis = [text, kap, hoeren].filter(Boolean);
  const i = kreis.findIndex((x) => x.art === letzte);
  return kreis[(i + 1) % kreis.length];
}

// Nach den Vokabeln: der nächste Teil der aktuellen Lektion – oder, wenn dort nichts offen ist,
// etwas aus „Frei üben“ (naechsterInhalt).
const TEIL_NAMEN = { woerter: 'Wörter', kapitel: 'Grammatik', grammatik: 'Grammatik', text: 'Text', hoeren: 'Hören & Üben', uebungen: 'Übungen' };

// „Lektion 3“ oder „Wiederholung“
function lektionName(l) {
  return l.art === 'ripasso' ? 'Wiederholung' : `Lektion ${Lektionen.anzeigeNr(l)}`;
}

function naechsterSchritt() {
  // Zuerst fällige Grammatik wiederholen (wie beim Karteikasten), dann weiter in der Lektion
  // und Übungen, die an einem früheren Tag falsch waren
  if (Wiederholung.etwasFaellig()) {
    const wdh = Wiederholung.fuerRunde();
    const namen = wdh.map((id) => `„${Grammatik.kapitel(id).titel}“`).join(' und ');
    return {
      art: 'wiederholen',
      name: namen ? `Grammatik wiederholen: ${namen}` : 'Wiederholen: Übungen, die neulich noch nicht saßen',
    };
  }
  const t = Lektionen.naechsterTeil({ ohneWortCheck: true });
  if (t) {
    return { ...t, name: `${lektionName(t.lektion)}, ${TEIL_NAMEN[t.art]}` };
  }
  return naechsterInhalt();
}

function oeffneNaechstes(n) {
  if (n.art === 'wiederholen') { starteGrammatikWiederholung(); return; }
  if (n.lektion) {
    lekt.offen = n.lektion;            // „Zurück zur Lektion“ führt dann zu dieser Lektion
    Lektionen.beginnen(n.lektion.id);
    if (n.art === 'text') oeffneText(n.obj, 'lektion');
    else if (n.art === 'kapitel') oeffneKapitel(n.obj, 'lektion');
    else if (n.art === 'uebungen') starteRipasso(n.lektion);
    else starteHoeren({ lektion: n.lektion });
    return;
  }
  Speicher.daten.fortschritt.runde = { art: n.art, datum: Vokabeln.heute() };
  Speicher.speichern();
  if (n.art === 'text') oeffneText(n.obj);
  else if (n.art === 'kapitel') oeffneKapitel(n.obj, 'grammatik');
  else starteHoeren();
}

// ---------- Lektionen ----------

const lekt = { offen: null, geschafft: [] };   // offene Lektionsseite; neu erledigte Lektionen zum Melden

// Nach jedem gespeicherten Ergebnis: Sind Lektionen jetzt erledigt?
function lektionenPruefen() {
  for (const l of Lektionen.aktualisieren()) lekt.geschafft.push(l);
}

// Zeigt eine Meldung „Lektion geschafft“, falls es eine gibt. Gibt true zurück, wenn ja.
function geschafftZeigen(element) {
  const l = lekt.geschafft.shift();
  if (!l) return false;
  lekt.geschafft = [];
  Begleiter.zeigen(element, Begleiter.lektionGeschafft(l.titel));
  return true;
}

function teilZeichen(stand) {
  return { fertig: '✓', angefangen: '◐', offen: '○' }[stand];
}

function teileHtml(l) {
  return Object.entries(Lektionen.teile(l))
    .map(([art, s]) => `<span class="${s === 'fertig' ? 'teil-fertig' : ''}">${teilZeichen(s)} ${TEIL_NAMEN[art]}</span>`)
    .join('');
}

function lektionKnopf(l, art) {
  const knopf = document.createElement('button');
  knopf.type = 'button';
  knopf.className = 'karte karte-knopf lektion-eintrag ' + art;
  knopf.innerHTML = `
    <span class="lektion-nr"></span>
    <span class="karte-titel" lang="it"></span>
    <span class="karte-text"></span>
    <span class="pfeil" aria-hidden="true">›</span>`;
  knopf.querySelector('.lektion-nr').textContent =
    `${lektionName(l)} · ${l.stufe}` + (art === 'jetzt' ? ' · jetzt dran' : '');
  knopf.querySelector('.karte-titel').textContent = l.titel;
  knopf.querySelector('.karte-text').textContent = l.situation;
  if (art !== 'spaeter') {
    const zeile = document.createElement('span');
    zeile.className = 'teil-zeile';
    zeile.innerHTML = teileHtml(l);
    knopf.appendChild(zeile);
  }
  knopf.addEventListener('click', () => {
    if (art === 'spaeter' && !confirm(`Schon ${lektionName(l)} „${l.titel}“ anfangen?`)) return;
    oeffneLektion(l);
  });
  return knopf;
}

function zeigeLektionen() {
  const aktuelle = Lektionen.aktuelle();
  const liste = el('lektionen-liste');
  const erledigtListe = el('lektionen-erledigt-liste');
  liste.innerHTML = '';
  erledigtListe.innerHTML = '';
  let erledigt = 0;
  for (const l of Lektionen.alle()) {
    if (Lektionen.istErledigt(l)) {
      erledigtListe.appendChild(lektionKnopf(l, 'erledigt'));
      erledigt += 1;
    } else {
      liste.appendChild(lektionKnopf(l, aktuelle && l.id === aktuelle.id ? 'jetzt' : 'spaeter'));
    }
  }
  if (!liste.children.length) {
    const p = document.createElement('p');
    p.className = 'karte-text';
    p.textContent = 'Alle Lektionen geschafft. Neue kommen bald dazu – bis dahin: frei üben.';
    liste.appendChild(p);
  }
  el('lektionen-erledigt').hidden = erledigt === 0;
  el('lektionen-erledigt-titel').textContent = `Erledigt (${erledigt}) – zum Wiederholen`;
}

function wortStand(id) {
  const k = Speicher.daten.karten[id];
  if (!k) return 'neu';
  return Vokabeln.istJung(k) ? 'am Kennenlernen' : 'gelernt';
}

function oeffneLektion(l) {
  lekt.offen = l;
  Lektionen.beginnen(l.id);
  el('lektion-meta').textContent = `${lektionName(l)} · ${l.stufe}` + (Lektionen.istErledigt(l) ? ' · erledigt ✓' : '');
  el('lektion-titel').textContent = l.titel;
  el('lektion-situation').textContent = l.situation;
  el('begleiter-lektion').hidden = !geschafftZeigen(el('begleiter-lektion'));

  const t = Lektionen.teile(l);
  const teile = el('lektion-teile');
  teile.innerHTML = '';
  const teil = (titel, stand, text, aktion) => {
    const knopf = document.createElement('button');
    knopf.type = 'button';
    knopf.className = 'karte karte-knopf';
    knopf.innerHTML = `
      <span class="karte-titel"></span>
      <span class="karte-text"></span>
      <span class="pfeil" aria-hidden="true">›</span>`;
    knopf.querySelector('.karte-titel').textContent = `${teilZeichen(stand)} ${titel}`;
    knopf.querySelector('.karte-text').textContent = text;
    knopf.addEventListener('click', aktion);
    teile.appendChild(knopf);
  };

  if (l.art === 'ripasso') {
    teil('Übungen', t.uebungen, 'Gemischt aus den Lektionen davor', () => starteRipasso(l));
    for (const id of l.texte) {
      const text = LESETEXTE.find((x) => x.id === id);
      if (text) teil('Text', teilAus([Lesen.stand(id)], (s) => s.verstanden), text.titel, () => oeffneText(text, 'lektion'));
    }
    el('lektion-woerter').hidden = true;
    el('lektion-extra').innerHTML = '';
    zeige('lektion');
    return;
  }
  const n = l.wortIds.length;
  const gelernt = l.wortIds.filter((id) => wortStand(id) === 'gelernt').length;
  teil('Wörter', t.woerter, `${n} Wörter · ${gelernt} gelernt`, () => {
    if (Lektionen.brauchtWortCheck(l)) zeigeWortCheck(l, () => oeffneLektion(l));
    else {
      const box = el('lektion-woerter');
      box.hidden = !box.hidden;
      if (!box.hidden) box.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  for (const id of l.kapitel) {
    const k = Grammatik.kapitel(id);
    if (k) teil('Grammatik', teilAus([Grammatik.stand(id)], (s) => s.geuebt), k.titel, () => oeffneKapitel(k, 'lektion'));
  }
  for (const id of l.texte) {
    const text = LESETEXTE.find((x) => x.id === id);
    if (text) teil('Text', teilAus([Lesen.stand(id)], (s) => s.verstanden), text.titel, () => oeffneText(text, 'lektion'));
  }
  teil('Hören & Üben', t.hoeren, 'Hören, schreiben, Sätze legen', () => starteHoeren({ lektion: l }));
  if (l.wortLektion) {
    teil('Übungen', t.uebungen, t.woerter === 'fertig'
      ? 'Wörter und Grammatik gemischt'
      : 'Gemischt – wenn die Wörter sitzen', () => starteRipasso(l));
  }

  const wl = el('lektion-wortliste');
  wl.innerHTML = '';
  for (const id of l.wortIds) {
    const w = Vokabeln.wort(id);
    if (!w) continue;
    const li = document.createElement('li');
    li.innerHTML = '<span><span class="wort-it" lang="it"></span> – <span class="wort-de"></span></span><span class="wort-stand"></span>';
    li.querySelector('.wort-it').textContent = w.it;
    li.querySelector('.wort-de').textContent = w.de;
    li.querySelector('.wort-stand').textContent = wortStand(id);
    wl.appendChild(li);
  }
  el('lektion-woerter').hidden = true;

  // Unten: „Kann ich schon“ (offene Lektion) oder „Wörter üben“ (erledigte Lektion)
  const extra = el('lektion-extra');
  extra.innerHTML = '';
  const knopf = (text, aktion) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'knopf-zweit';
    b.textContent = text;
    b.addEventListener('click', aktion);
    extra.appendChild(b);
  };
  if (Lektionen.istErledigt(l)) knopf('Wörter üben', () => starteRunde({ ids: l.wortIds }));
  else knopf('Kann ich schon', () => starteKannIch(l));
  zeige('lektion');
}

// Stand eines einzelnen Kapitels oder Textes
function teilAus(staende, fertig) {
  const s = staende[0];
  if (s && fertig(s)) return 'fertig';
  return s ? 'angefangen' : 'offen';
}

// Zurück zur zuletzt geöffneten Lektion (oder zur Startseite)
function zurueckZurLektion() {
  if (lekt.offen) oeffneLektion(Lektionen.finde(lekt.offen.id));
  else zeigeStart();
}

// --- Wörter: kenne ich / neu ---

function zeigeWortCheck(l, danach) {
  el('wortcheck-meta').textContent = `${lektionName(l)} · ${l.titel}`;
  const liste = el('wortcheck-liste');
  liste.innerHTML = '';
  const bekannt = new Set();
  for (const id of l.wortIds.filter((x) => !Speicher.daten.karten[x])) {
    const w = Vokabeln.wort(id);
    if (!w) continue;
    const zeile = document.createElement('div');
    zeile.className = 'wortcheck-zeile';
    zeile.innerHTML = `
      <span class="wortcheck-wort"><span class="wort-it" lang="it"></span><span class="wort-de"></span></span>
      <span class="wortcheck-wahl">
        <button type="button" data-wahl="kenne">kenne ich</button>
        <button type="button" data-wahl="neu" class="gewaehlt">neu</button>
      </span>`;
    zeile.querySelector('.wort-it').textContent = w.it;
    zeile.querySelector('.wort-de').textContent = w.de;
    zeile.querySelectorAll('[data-wahl]').forEach((b) => {
      b.addEventListener('click', () => {
        const kenne = b.dataset.wahl === 'kenne';
        if (kenne) bekannt.add(id); else bekannt.delete(id);
        zeile.querySelectorAll('[data-wahl]').forEach((x) => x.classList.toggle('gewaehlt', x === b));
      });
    });
    liste.appendChild(zeile);
  }
  el('knopf-wortcheck-fertig').onclick = () => {
    Lektionen.woerterEinordnen(l.id, [...bekannt]);
    lektionenPruefen();
    danach();
  };
  zeige('wortcheck');
}

// „Los“: erst (falls nötig) „kenne ich / neu“, dann die Vokabeln
function losKlick() {
  if (gemerkteStelle()) { weitermachen(); return; }     // nach einer Pause: an derselben Stelle weiter
  const t = Lektionen.naechsterTeil();
  if (t && t.art === 'woerter') {
    Lektionen.beginnen(t.lektion.id);
    zeigeWortCheck(t.lektion, starteRunde);
  } else {
    starteRunde();
  }
}

// ---------- Startseite ----------

// Warum heute keine neuen Wörter kommen (siehe Vokabeln.rundeZusammenstellen)
const PAUSE_TEXT = {
  tag: 'Die neuen Wörter für heute hast du schon – morgen kommen weitere.',
  jung: 'Neue Wörter kommen, sobald du die aktuellen kennengelernt hast.',
  faellig: 'Heute keine neuen Wörter – erst die fälligen wiederholen.',
  schwer: 'Heute keine neuen Wörter – erst festigen, was du schon hast. Das macht es leichter.',
};

function zeigeStart() {
  const { wiederholen, jung, neu, pause } = Vokabeln.rundeZusammenstellen();
  const teile = [];
  if (wiederholen.length) teile.push(`${wiederholen.length} ${wiederholen.length === 1 ? 'Vokabel' : 'Vokabeln'} zum Wiederholen`);
  if (jung.length) teile.push(`${jung.length} zum Kennenlernen`);
  if (neu.length) teile.push(`${neu.length} neue ${neu.length === 1 ? 'Wort' : 'Wörter'}`);
  const n = naechsterSchritt();
  document.getElementById('heute-text').textContent = (teile.length
    ? teile.join(', ') + '.'
    : 'Keine Vokabeln fällig.')
    + (PAUSE_TEXT[pause] ? ` ${PAUSE_TEXT[pause]}` : '')
    + (n ? ` Danach: ${n.name}` : '');
  // „Jetzt dran“: nur die aktuelle Lektion (alle anderen im Reiter „Lektionen“)
  const jetzt = Lektionen.aktuelle();
  const jetztDran = el('jetzt-dran');
  jetztDran.innerHTML = '';
  if (jetzt) jetztDran.appendChild(lektionKnopf(jetzt, 'jetzt'));
  if (!geschafftZeigen(el('begleiter-start'))) Begleiter.zeigen(el('begleiter-start'), Begleiter.startNachricht());
  lekt.offen = null;
  // Gemerkte Stelle: „Weitermachen“ statt „Los“
  const stelle = gemerkteStelle();
  el('weiter-karte').hidden = !stelle;
  if (stelle) el('weiter-text').textContent = stelleBeschreibung(stelle);
  el('knopf-los').textContent = stelle ? 'Weitermachen' : 'Los';
  zeige('start');
}

// ---------- Vokabel-Abfrage ----------
//
// Eine Runde ist eine Liste von Schritten:
//   { art: 'frage', id }          → Wort schreiben (nur Wörter, die du schon kennst)
//   { art: 'deutsch', id }        → italienisches Wort sehen, deutsche Bedeutung aus Kacheln legen
//   { art: 'neu', id }            → neues Wort zeigen und vorlesen
//   { art: 'paare', ids }         → Wortpaare zuordnen
//   { art: 'waehlen', id, modus } → richtiges Wort antippen: zum deutschen Wort ('de') oder nach Gehör ('hoeren')
// Neue Wörter werden erst geschrieben, wenn du sie ein paar Mal so geübt hast (siehe vokabeln.js).

const abfrage = {
  schritte: [],
  pos: 0,
  geprueft: false,      // wurde die aktuelle Antwort schon geprüft?
  gewertet: new Set(),  // diese Wörter haben schon ihr Ergebnis für den Karteikasten
  aufAnhieb: 0,
  kennen: new Set(),    // diese Wörter hast du heute kennengelernt
  zweiterVersuch: new Set(),
  gewaehlt: null,
  paarFehler: new Set(),
};

const el = (id) => document.getElementById(id);

// optionen.ids: nur diese Wörter üben (z. B. einer erledigten Lektion) – zählt nicht für den Karteikasten
function starteRunde(optionen = {}) {
  if (optionen.ids) {
    abfrage.schritte = mischen(optionen.ids.filter((id) => Vokabeln.wort(id)))
      .map((id) => ({ art: Math.random() < 0.5 ? 'deutsch' : 'frage', id }));
    abfrage.ohneWertung = true;
    abfrage.pos = 0;
    abfrage.gewertet = new Set();
    abfrage.aufAnhieb = 0;
    abfrage.kennen = new Set();
    abfrage.zweiterVersuch = new Set();
    if (!abfrage.schritte.length) return;
    zeige('runde');
    zeigeSchritt();
    return;
  }
  abfrage.ohneWertung = false;
  const { wiederholen, jung, neu } = Vokabeln.rundeZusammenstellen();
  const ueben = [...jung, ...neu];
  const modus = (id) => {
    const k = Speicher.daten.karten[id];
    const n = (k && k.kennen) || 0;
    // Pro Runde kommen meist 2 Punkte dazu → abwechselnd: erst lesen, nächstes Mal hören
    return Lesen.kannSprechen && Math.floor(n / 2) % 2 === 1 ? 'hoeren' : 'de';
  };
  abfrage.schritte = [
    ...wiederholen.map((id) => ({ art: Vokabeln.richtungFuer(id) === 'de' ? 'deutsch' : 'frage', id })),
    ...neu.map((id) => ({ art: 'neu', id })),
    ...(ueben.length ? [{ art: 'paare', ids: mischen(ueben).slice(0, 5) }] : []),
    ...mischen(ueben).map((id) => ({ art: 'waehlen', id, modus: modus(id) })),
  ];
  abfrage.pos = 0;
  abfrage.gewertet = new Set();
  abfrage.aufAnhieb = 0;
  abfrage.kennen = new Set();
  abfrage.zweiterVersuch = new Set();
  if (!abfrage.schritte.length) return beendeRunde();
  zeige('runde');
  zeigeSchritt();
}

// Antwort-Möglichkeiten zum Wählen: das richtige Wort + 3 andere (am liebsten gleiches Thema)
function auswahlFuer(w) {
  const gleich = WORTSCHATZ.filter((x) => x.id !== w.id && x.thema && x.thema === w.thema);
  const andere = WORTSCHATZ.filter((x) => x.id !== w.id);
  const falsche = [];
  for (const x of [...mischen(gleich), ...mischen(andere)]) {
    if (falsche.length === 3) break;
    if (x.it !== w.it && !falsche.some((f) => f.it === x.it)) falsche.push(x);
  }
  return mischen([w, ...falsche]);
}

// wort: true = einzelnes Wort → Stimme nach Geschlecht (männlich/weiblich, falls eingestellt)
function sprichWort(text, langsam = false, wort = true) {
  if (!Lesen.kannSprechen) return;
  vorlesenStopp();
  Lesen.sprich(text, null, { langsam, wort });
}

function zeigeSchritt() {
  stelleMerken('runde');
  const schritt = abfrage.schritte[abfrage.pos];
  const zaehlt = (s) => s.art !== 'neu';
  const gesamt = abfrage.schritte.filter(zaehlt).length;
  const erledigt = abfrage.schritte.slice(0, abfrage.pos).filter(zaehlt).length;
  el('abfrage-stand').textContent = zaehlt(schritt) ? `${erledigt + 1} von ${gesamt}` : '';

  abfrage.geprueft = false;
  abfrage.gewaehlt = null;
  el('rueckmeldung').hidden = true;
  el('knopf-pruefen').textContent = 'Prüfen';
  el('knopf-pruefen').hidden = false;
  el('loesung-neu').hidden = true;
  el('abfrage-form').hidden = true;
  el('knopf-weiss-nicht').hidden = true;
  el('runde-auswahl').hidden = true;
  el('runde-paare').hidden = true;
  el('runde-hoer').hidden = true;
  el('runde-kacheln').hidden = true;
  el('frage-wort').hidden = false;
  el('frage-wort').lang = 'de';
  const eingabe = el('abfrage-eingabe');
  eingabe.value = '';
  eingabe.readOnly = false;

  if (schritt.art === 'neu') {
    const w = Vokabeln.wort(schritt.id);
    Vokabeln.aufnehmen(w.id, { neu: true });
    el('frage-art').textContent = 'Neues Wort – erst einmal nur ansehen und anhören';
    el('frage-wort').textContent = w.de;
    el('loesung-neu').textContent = w.it;
    el('loesung-neu').hidden = false;
    el('runde-hoer').hidden = !Lesen.kannSprechen;
    el('knopf-pruefen').textContent = 'Weiter';
    abfrage.geprueft = true;          // „Weiter“ geht direkt weiter
    sprichWort(w.it);
  } else if (schritt.art === 'frage') {
    const w = Vokabeln.wort(schritt.id);
    el('frage-art').textContent = 'Auf Italienisch?';
    el('frage-wort').textContent = w.de;
    el('abfrage-form').hidden = false;
    el('knopf-weiss-nicht').hidden = false;
    eingabe.focus();
  } else if (schritt.art === 'deutsch') {
    const w = Vokabeln.wort(schritt.id);
    el('frage-art').textContent = 'Was heißt das auf Deutsch?';
    el('frage-wort').textContent = w.it;
    el('frage-wort').lang = 'it';
    el('runde-hoer').hidden = !Lesen.kannSprechen;
    const ablage = el('runde-ablage');
    const vorrat = el('runde-vorrat');
    ablage.innerHTML = '';
    ablage.classList.remove('fertig');
    vorrat.innerHTML = '';
    for (const wort of Vokabeln.deutschKacheln(w).kacheln) {
      const k = document.createElement('button');
      k.type = 'button';
      k.className = 'kachel';
      k.textContent = wort;
      k.addEventListener('click', () => rundeKachelLegen(k));
      vorrat.appendChild(k);
    }
    el('runde-kacheln').hidden = false;
    el('knopf-weiss-nicht').hidden = false;
  } else if (schritt.art === 'waehlen') {
    const w = Vokabeln.wort(schritt.id);
    const box = el('runde-auswahl');
    box.innerHTML = '';
    if (schritt.modus === 'hoeren') {
      el('frage-art').textContent = 'Hör zu: Welches Wort ist es?';
      el('frage-wort').hidden = true;
      el('runde-hoer').hidden = false;
      sprichWort(w.it);
    } else {
      el('frage-art').textContent = 'Welches Wort passt?';
      el('frage-wort').textContent = w.de;
    }
    for (const x of auswahlFuer(w)) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'antwort';
      b.textContent = x.it;
      b.addEventListener('click', () => waehlen(b, x.id === w.id, w));
      box.appendChild(b);
    }
    box.hidden = false;
    el('knopf-pruefen').hidden = true;      // Antippen genügt
  } else {
    // Wortpaare
    el('frage-art').textContent = 'Finde die Paare: erst links, dann rechts antippen.';
    el('frage-wort').hidden = true;
    abfrage.paarFehler = new Set();
    const links = el('runde-paare-it');
    const rechts = el('runde-paare-de');
    links.innerHTML = '';
    rechts.innerHTML = '';
    const woerter = schritt.ids.map((id) => Vokabeln.wort(id));
    // Bei weniger als 3 Wörtern ein paar bekannte dazunehmen, damit es ein Spiel wird
    for (const x of WORTSCHATZ) {
      if (woerter.length >= 3) break;
      if (!woerter.some((y) => y.id === x.id)) woerter.push(x);
    }
    const kurz = (de) => de.replace(/\s*\([^)]*\)/g, '').split(';')[0].trim();
    const knopf = (text, id, seite) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'paar';
      b.textContent = text;
      b.dataset.id = id;
      b.dataset.seite = seite;
      b.addEventListener('click', () => rundePaarTippen(b));
      return b;
    };
    mischen(woerter).forEach((x) => links.appendChild(knopf(x.it, x.id, 'it')));
    mischen(woerter).forEach((x) => rechts.appendChild(knopf(kurz(x.de), x.id, 'de')));
    el('runde-paare').hidden = false;
    el('knopf-pruefen').hidden = true;      // fertig, wenn alle Paare gefunden sind
  }
}

// Italienisch → Deutsch: Kachel antippen legt sie ab, nochmal antippen nimmt sie zurück
function rundeKachelLegen(kachel) {
  if (abfrage.geprueft || kachel.classList.contains('benutzt')) return;
  kachel.classList.add('benutzt');
  const gelegt = document.createElement('button');
  gelegt.type = 'button';
  gelegt.className = 'kachel';
  gelegt.textContent = kachel.textContent;
  gelegt.addEventListener('click', () => {
    if (abfrage.geprueft) return;
    gelegt.remove();
    kachel.classList.remove('benutzt');
  });
  el('runde-ablage').appendChild(gelegt);
}

function pruefenDeutsch(weissNicht) {
  const schritt = abfrage.schritte[abfrage.pos];
  const w = Vokabeln.wort(schritt.id);
  const gelegt = [...el('runde-ablage').querySelectorAll('.kachel')].map((k) => k.textContent);
  if (!weissNicht && !gelegt.length) return;
  const gewusst = !weissNicht && Vokabeln.pruefeDeutsch(gelegt, w);

  if (!abfrage.gewertet.has(w.id)) {
    abfrage.gewertet.add(w.id);
    if (!abfrage.ohneWertung) Vokabeln.eintragen(w.id, gewusst, 'de');
    Vokabeln.ergebnisZaehlen(gewusst);
    if (gewusst) abfrage.aufAnhieb += 1;
  }
  if (!gewusst) abfrage.schritte.push({ art: 'deutsch', id: w.id });

  const loesung = Vokabeln.deutschZiel(w.de).join(' ');
  el('rueckmeldung').classList.toggle('falsch', !gewusst);
  el('rueck-titel').textContent = gewusst ? 'Richtig.' : weissNicht ? 'Das heißt:' : 'Noch nicht.';
  el('rueck-text').textContent = gewusst
    ? (w.de !== loesung ? w.de : '')
    : `${weissNicht ? '' : 'Richtig ist: '}${loesung}. Kommt gleich noch einmal.`;
  el('rueck-text').hidden = !el('rueck-text').textContent;
  el('rueckmeldung').hidden = false;
  el('runde-ablage').classList.add('fertig');
  el('knopf-weiss-nicht').hidden = true;
  el('knopf-pruefen').textContent = 'Weiter';
  el('knopf-pruefen').focus();
  abfrage.geprueft = true;
  if (gewusst) autoWeiter(el('rueck-text').hidden ? 1200 : 2200);
}

function waehlen(knopf, richtig, w) {
  if (abfrage.geprueft) return;
  abfrage.geprueft = true;
  el('runde-auswahl').querySelectorAll('.antwort').forEach((b) => {
    if (b.textContent === w.it) b.classList.add('richtig');
  });
  if (!richtig) knopf.classList.add('falsch');
  Vokabeln.ergebnisZaehlen(richtig);
  if (richtig) {
    Vokabeln.kennenGelernt(w.id);
    abfrage.kennen.add(w.id);
  } else if (!abfrage.zweiterVersuch.has(w.id)) {
    // Nicht schlimm: später in der Runde noch einmal, ohne Wertung
    abfrage.zweiterVersuch.add(w.id);
    const s = abfrage.schritte[abfrage.pos];
    abfrage.schritte.push({ art: 'waehlen', id: w.id, modus: s.modus });
  }
  const box = el('rueckmeldung');
  box.classList.toggle('falsch', !richtig);
  el('rueck-titel').textContent = richtig ? 'Richtig.' : 'Das war es nicht.';
  el('rueck-text').textContent = `${w.it} = ${w.de}`;
  el('rueck-text').hidden = false;
  box.hidden = false;
  sprichWort(w.it);
  el('knopf-pruefen').textContent = 'Weiter';
  el('knopf-pruefen').hidden = false;
  el('knopf-pruefen').focus();
  if (richtig) autoWeiter(1800);
}

function rundePaarTippen(b) {
  const vorher = abfrage.gewaehlt;
  if (!vorher || vorher.dataset.seite === b.dataset.seite) {
    if (vorher) vorher.classList.remove('gewaehlt');
    abfrage.gewaehlt = b;
    b.classList.add('gewaehlt');
    if (b.dataset.seite === 'it') sprichWort(b.textContent);
    return;
  }
  vorher.classList.remove('gewaehlt');
  abfrage.gewaehlt = null;
  if (vorher.dataset.id === b.dataset.id) {
    vorher.classList.add('passt');
    b.classList.add('passt');
    if (!document.querySelector('#runde-paare .paar:not(.passt)')) rundePaareFertig();
  } else {
    abfrage.paarFehler.add(vorher.dataset.id);
    abfrage.paarFehler.add(b.dataset.id);
    for (const x of [vorher, b]) {
      x.classList.add('daneben');
      setTimeout(() => x.classList.remove('daneben'), 600);
    }
  }
}

function rundePaareFertig() {
  const schritt = abfrage.schritte[abfrage.pos];
  // Wörter, die ohne Fehler zugeordnet wurden, zählen fürs Kennenlernen
  for (const id of schritt.ids) {
    if (!abfrage.paarFehler.has(id)) { Vokabeln.kennenGelernt(id); abfrage.kennen.add(id); }
  }
  abfrage.geprueft = true;
  const box = el('rueckmeldung');
  box.classList.remove('falsch');
  el('rueck-titel').textContent = 'Alle Paare gefunden.';
  el('rueck-text').hidden = true;
  box.hidden = false;
  el('knopf-pruefen').textContent = 'Weiter';
  el('knopf-pruefen').hidden = false;
}

el('runde-play').addEventListener('click', () => {
  const s = abfrage.schritte[abfrage.pos];
  if (s && s.id) sprichWort(Vokabeln.wort(s.id).it);
});
el('runde-langsam').addEventListener('click', () => {
  const s = abfrage.schritte[abfrage.pos];
  if (s && s.id) sprichWort(Vokabeln.wort(s.id).it, true);
});

function pruefen(weissNicht = false) {
  const schritt = abfrage.schritte[abfrage.pos];
  if (schritt.art === 'deutsch') return pruefenDeutsch(weissNicht);
  const w = Vokabeln.wort(schritt.id);
  const eingabe = el('abfrage-eingabe');
  const text = eingabe.value.trim();
  if (!weissNicht && !text) { eingabe.focus(); return; }

  const ergebnis = weissNicht ? { stufe: 'falsch', hinweis: '' } : Vokabeln.pruefe(text, w);
  const gewusst = ergebnis.stufe !== 'falsch';

  // Nur der erste Versuch zählt für den Karteikasten.
  if (!abfrage.gewertet.has(w.id)) {
    abfrage.gewertet.add(w.id);
    if (!abfrage.ohneWertung) Vokabeln.eintragen(w.id, gewusst, 'it');
    Vokabeln.ergebnisZaehlen(gewusst);
    if (gewusst) abfrage.aufAnhieb += 1;
  }
  // Nicht gewusst: am Ende der Runde noch einmal fragen.
  if (!gewusst) abfrage.schritte.push({ art: 'frage', id: w.id });

  const box = el('rueckmeldung');
  box.classList.toggle('falsch', !gewusst);
  const loesung = `<strong lang="it">${w.it}</strong>`;
  if (ergebnis.stufe === 'richtig') {
    el('rueck-titel').textContent = 'Richtig.';
    el('rueck-text').innerHTML = '';
  } else if (ergebnis.stufe === 'fast') {
    el('rueck-titel').textContent = 'Fast richtig – zählt.';
    el('rueck-text').innerHTML = `${ergebnis.hinweis} Genau: ${loesung}`;
  } else if (weissNicht) {
    el('rueck-titel').textContent = 'So heißt es:';
    el('rueck-text').innerHTML = `${loesung}<br>Kommt gleich noch einmal.`;
  } else {
    el('rueck-titel').textContent = 'Noch nicht.';
    el('rueck-text').innerHTML = `${ergebnis.hinweis ? ergebnis.hinweis + ' ' : ''}Richtig ist: ${loesung}<br>Kommt gleich noch einmal.`;
  }
  el('rueck-text').hidden = !el('rueck-text').innerHTML;
  box.hidden = false;

  eingabe.readOnly = true;
  el('knopf-weiss-nicht').hidden = true;
  el('knopf-pruefen').textContent = 'Weiter';
  el('knopf-pruefen').focus();
  abfrage.geprueft = true;
  if (ergebnis.stufe === 'richtig') autoWeiter();
}

// Richtig gelöst: nach kurzer Pause geht es von selbst weiter.
// Bei Fehlern bleibt die Lösung stehen, bis du weitertippst.
function autoWeiter(ms = 1200) {
  const pos = abfrage.pos;
  clearTimeout(abfrage.autoZeit);
  abfrage.autoZeit = setTimeout(() => {
    if (abfrage.pos === pos && abfrage.geprueft && !el('screen-runde').hidden) weiter();
  }, ms);
}

function weiter() {
  clearTimeout(abfrage.autoZeit);
  abfrage.pos += 1;
  if (abfrage.pos >= abfrage.schritte.length) beendeRunde();
  else zeigeSchritt();
}

function beendeRunde() {
  clearTimeout(abfrage.autoZeit);
  if (abfrage.pos >= abfrage.schritte.length) stelleVergessen('runde');   // „Beenden“ mittendrin: Stelle bleibt
  // „Wörter üben“ einer erledigten Lektion: kurzer Abschluss, zurück zur Lektion
  if (abfrage.ohneWertung) {
    el('ende-titel').textContent = 'Fertig geübt';
    el('ende-text').textContent = `${abfrage.gewertet.size} ${abfrage.gewertet.size === 1 ? 'Wort' : 'Wörter'} geübt, ${abfrage.aufAnhieb} davon auf Anhieb gewusst. Das zählt nicht für den Karteikasten.`;
    el('ende-sicher').textContent = Vokabeln.anzahlSicher();
    Begleiter.zeigen(el('begleiter-ende'), { stimmung: 'freut', text: 'Schön, dass du wiederholst!' });
    el('ende-naechstes').hidden = true;
    el('knopf-naechstes').hidden = false;
    el('knopf-naechstes').textContent = 'Zurück zur Lektion';
    el('knopf-naechstes').onclick = zurueckZurLektion;
    el('knopf-ende-start').textContent = 'Zur Startseite';
    zeige('ende');
    return;
  }
  const anzahl = abfrage.gewertet.size;
  const kennen = abfrage.kennen.size;
  if (anzahl === 0 && kennen === 0) {
    el('ende-titel').textContent = 'Alles erledigt';
    el('ende-text').textContent = 'Heute ist keine Vokabel fällig. Morgen geht es weiter.';
  } else {
    el('ende-titel').textContent = 'Fertig für heute';
    const teile = [];
    if (anzahl) teile.push(`${anzahl} ${anzahl === 1 ? 'Wort' : 'Wörter'} geschrieben, ${abfrage.aufAnhieb} davon auf Anhieb gewusst`);
    if (kennen) teile.push(`${kennen} ${kennen === 1 ? 'Wort' : 'Wörter'} weiter kennengelernt`);
    el('ende-text').textContent = teile.join('. ') + '.';
  }
  el('ende-sicher').textContent = Vokabeln.anzahlSicher();
  lektionenPruefen();
  if (!geschafftZeigen(el('begleiter-ende'))) {
    Begleiter.zeigen(el('begleiter-ende'), anzahl
      ? Begleiter.endeNachricht(anzahl, abfrage.aufAnhieb)
      : kennen
        ? { stimmung: 'freut', text: 'Schön! Neue Wörter erst kennenlernen – geschrieben wird später.' }
        : Begleiter.endeNachricht(0, 0));
  }

  // Teil 2 der Runde: der nächste Teil der Lektion (oder etwas zum freien Üben)
  const n = naechsterSchritt();
  el('ende-naechstes').hidden = !n;
  el('knopf-naechstes').hidden = !n;
  el('knopf-ende-start').textContent = n ? 'Für heute reicht’s' : 'Zur Startseite';
  if (n) {
    if (anzahl > 0) el('ende-titel').textContent = 'Vokabeln geschafft';
    el('ende-naechstes-text').textContent = n.name;
    el('knopf-naechstes').textContent = { text: 'Text lesen', kapitel: 'Grammatik ansehen', hoeren: 'Hören & Üben', uebungen: 'Übungen', wiederholen: 'Grammatik wiederholen' }[n.art];
    el('knopf-naechstes').onclick = () => oeffneNaechstes(n);
  }
  zeige('ende');
}

el('knopf-pruefen').addEventListener('click', () => (abfrage.geprueft ? weiter() : pruefen()));
el('knopf-weiss-nicht').addEventListener('click', () => pruefen(true));
el('abfrage-form').addEventListener('submit', (e) => {
  e.preventDefault();
  abfrage.geprueft ? weiter() : pruefen();
});
el('knopf-beenden').addEventListener('click', beendeRunde);

// ---------- Lesen ----------

const lesen = { text: null, antworten: [], geprueft: false, gewaehltesWort: null, liestVor: false, zurueckZu: 'liste' };

function zeigeLesenStand() {
  const n = Lesen.anzahlVerstanden();
  el('lesen-stand').textContent = n
    ? `${n} von ${LESETEXTE.length} Texten verstanden`
    : `${LESETEXTE.length} Texte und Rezepte`;
}

function textEintrag(t, unterzeile) {
  const knopf = document.createElement('button');
  knopf.type = 'button';
  knopf.className = 'karte karte-knopf text-eintrag';
  knopf.innerHTML = `
    <span class="karte-titel" lang="it"></span>
    <span class="karte-text"></span>
    <span class="pfeil" aria-hidden="true">›</span>`;
  knopf.querySelector('.karte-titel').textContent = t.titel;
  knopf.querySelector('.karte-text').innerHTML = unterzeile;
  knopf.addEventListener('click', () => oeffneText(t));
  return knopf;
}

function zeigeTextliste() {
  const liste = el('text-liste');
  liste.innerHTML = '';

  // Meine Texte
  const meine = document.createElement('p');
  meine.className = 'stufe-titel';
  meine.textContent = 'Meine Texte';
  liste.appendChild(meine);
  const neu = document.createElement('button');
  neu.type = 'button';
  neu.className = 'knopf-neu';
  neu.textContent = '+ Eigenen Text einfügen';
  neu.addEventListener('click', oeffneTextNeu);
  liste.appendChild(neu);
  for (const t of Lesen.eigeneTexte()) {
    const datum = new Date(t.datum + 'T12:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long' });
    liste.appendChild(textEintrag(t, `eingefügt am ${datum}`));
  }

  const stufenNamen = { A1: 'Leicht (A1)', A2: 'Etwas schwerer (A2)', B1: 'Mittel (B1)', B2: 'Anspruchsvoll (B2)' };
  for (const stufe of ['A1', 'A2', 'B1', 'B2']) {
    if (!LESETEXTE.some((x) => x.stufe === stufe)) continue;
    const titel = document.createElement('p');
    titel.className = 'stufe-titel';
    titel.textContent = stufenNamen[stufe];
    liste.appendChild(titel);
    for (const t of LESETEXTE.filter((x) => x.stufe === stufe)) {
      const s = Lesen.stand(t.id);
      const knopf = document.createElement('button');
      knopf.type = 'button';
      knopf.className = 'karte karte-knopf text-eintrag';
      knopf.innerHTML = `
        <span class="karte-titel" lang="it"></span>
        <span class="karte-text"></span>
        <span class="pfeil" aria-hidden="true">›</span>`;
      knopf.querySelector('.karte-titel').textContent = t.titel;
      knopf.querySelector('.karte-text').innerHTML = t.art
        + (s && s.verstanden ? ' · <span class="haken">✓ verstanden</span>' : '');
      knopf.addEventListener('click', () => oeffneText(t));
      liste.appendChild(knopf);
    }
  }
  zeige('texte');
}

// Zeile als HTML: jedes Wort wird antippbar
function zeileAlsHtml(zeile) {
  const frag = document.createDocumentFragment();
  for (const teil of Lesen.stuecke(zeile)) {
    if (teil.wort) {
      const span = document.createElement('span');
      span.className = 'wort';
      span.textContent = teil.text;
      frag.appendChild(span);
    } else {
      frag.appendChild(document.createTextNode(teil.text));
    }
  }
  return frag;
}

function mischen(liste) {
  const a = [...liste];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// zurueckZu: 'liste' (Textliste) oder 'lektion' (Lektionsseite)
function oeffneText(t, zurueckZu = 'liste') {
  lesen.text = t;
  lesen.zurueckZu = zurueckZu;
  stelleMerken('text');
  el('knopf-lesen-zurueck').textContent = zurueckZu === 'lektion' ? 'Zurück zur Lektion' : 'Zurück zu den Texten';
  lesen.geprueft = false;
  lesen.antworten = t.fragen.map(() => null);
  vorlesenStopp();
  schliesseWortBlatt();

  el('lesen-meta').textContent = t.stufe ? `${t.art} · ${t.stufe}` : t.art;

  // Eigene Texte haben keine Fragen, dafür „Text löschen“
  const mitFragen = t.fragen.length > 0;
  el('fragen-titel').hidden = !mitFragen;
  el('lesen-fragen').hidden = !mitFragen;
  el('knopf-fragen-pruefen').hidden = !mitFragen;
  el('knopf-text-loeschen').hidden = !t.eigen;
  el('lesen-titel').textContent = t.titel;
  el('knopf-vorlesen').hidden = !Lesen.kannSprechen;
  el('stimm-einstellung').hidden = !Lesen.kannSprechen;
  el('vorlese-hinweis').hidden = true;
  fuelleStimmWahl();

  // Text aufbauen
  const artikel = el('lesen-text');
  artikel.innerHTML = '';
  let liste = null;
  for (const b of Lesen.bloecke(t.text)) {
    if (b.art === 'li') {
      if (!liste) { liste = document.createElement('ul'); artikel.appendChild(liste); }
      const li = document.createElement('li');
      li.appendChild(zeileAlsHtml(b.zeile));
      liste.appendChild(li);
      continue;
    }
    liste = null;
    const knoten = document.createElement(b.art === 'h' ? 'h3' : 'p');
    knoten.appendChild(zeileAlsHtml(b.zeile));
    artikel.appendChild(knoten);
  }

  // Fragen aufbauen (Antworten gemischt)
  const fragen = el('lesen-fragen');
  fragen.innerHTML = '';
  t.fragen.forEach((f, nr) => {
    const karte = document.createElement('div');
    karte.className = 'karte frage';
    const text = document.createElement('p');
    text.className = 'frage-text';
    text.textContent = f.frage;
    karte.appendChild(text);
    const box = document.createElement('div');
    box.className = 'antworten';
    mischen(f.antworten.map((a, i) => ({ a, i }))).forEach(({ a, i }) => {
      const knopf = document.createElement('button');
      knopf.type = 'button';
      knopf.className = 'antwort';
      knopf.textContent = a;
      knopf.dataset.index = i;
      knopf.addEventListener('click', () => waehleAntwort(nr, i, box));
      box.appendChild(knopf);
    });
    karte.appendChild(box);
    fragen.appendChild(karte);
  });
  el('fragen-ergebnis').hidden = true;
  el('knopf-fragen-pruefen').textContent = 'Antworten prüfen';
  zeige('lesen');
}

function waehleAntwort(nr, index, box) {
  if (lesen.geprueft) return;
  lesen.antworten[nr] = index;
  box.querySelectorAll('.antwort').forEach((k) => {
    k.classList.toggle('gewaehlt', Number(k.dataset.index) === index);
  });
}

function fragenPruefen() {
  const t = lesen.text;
  if (lesen.geprueft) { oeffneText(t, lesen.zurueckZu); return; }           // „Nochmal versuchen“
  const ergebnis = el('fragen-ergebnis');
  if (lesen.antworten.some((a) => a === null)) {
    ergebnis.textContent = 'Bitte beantworte erst alle Fragen.';
    ergebnis.classList.add('fehler');
    ergebnis.hidden = false;
    return;
  }
  lesen.geprueft = true;
  let richtig = 0;
  el('lesen-fragen').querySelectorAll('.antworten').forEach((box, nr) => {
    box.querySelectorAll('.antwort').forEach((k) => {
      const i = Number(k.dataset.index);
      if (i === 0) k.classList.add('richtig');                    // erste Antwort ist die richtige
      else if (i === lesen.antworten[nr]) k.classList.add('falsch');
    });
    if (lesen.antworten[nr] === 0) richtig += 1;
  });
  const von = t.fragen.length;
  Lesen.ergebnisSpeichern(t.id, richtig, von);
  if (richtig === von) stelleVergessen('text');
  lektionenPruefen();
  ergebnis.classList.toggle('fehler', richtig < von);
  ergebnis.textContent = richtig === von
    ? `Alles richtig – Text verstanden. ✓`
    : `${richtig} von ${von} richtig. Lies die Stelle noch einmal nach und versuch es erneut.`;
  ergebnis.hidden = false;
  el('knopf-fragen-pruefen').textContent = richtig === von ? 'Nochmal lesen' : 'Nochmal versuchen';
}

// --- Eigenen Text einfügen ---

function oeffneTextNeu() {
  el('neu-titel').value = '';
  el('neu-text').value = '';
  el('neu-meldung').hidden = true;
  // „Aus Zwischenablage“ nur zeigen, wenn der Browser das kann
  el('knopf-einfuegen').hidden = !(navigator.clipboard && navigator.clipboard.readText);
  zeige('text-neu');
}

el('knopf-einfuegen').addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (text) el('neu-text').value = text;
  } catch {
    el('neu-meldung').textContent = 'Einfügen ging nicht. Tippe lange ins Textfeld und wähle „Einsetzen“.';
    el('neu-meldung').hidden = false;
  }
});

el('knopf-text-speichern').addEventListener('click', () => {
  const text = el('neu-text').value;
  if (!/\p{L}{2,}/u.test(text)) {
    el('neu-meldung').textContent = 'Bitte füge erst einen Text ein.';
    el('neu-meldung').hidden = false;
    return;
  }
  const t = Lesen.textSpeichern(el('neu-titel').value, text);
  oeffneText(t);
});
el('knopf-text-abbrechen').addEventListener('click', zeigeTextliste);

el('knopf-text-loeschen').addEventListener('click', () => {
  const t = lesen.text;
  if (!t || !t.eigen) return;
  if (!confirm(`„${t.titel}“ löschen? Die Wörter in deinen Karteikarten bleiben erhalten.`)) return;
  vorlesenStopp();
  schliesseWortBlatt();
  Lesen.textLoeschen(t.id);
  zeigeTextliste();
});

// Wort antippen
el('lesen-text').addEventListener('click', (e) => {
  const span = e.target.closest('.wort');
  if (!span) return;
  zeigeWortBlatt(span);
});

function zeigeWortBlatt(span) {
  if (lesen.gewaehltesWort) lesen.gewaehltesWort.classList.remove('gewaehlt');
  lesen.gewaehltesWort = span;
  span.classList.add('gewaehlt');

  const treffer = Lesen.nachschlagen(span.textContent, lesen.text);
  lesen.treffer = treffer;
  el('wort-form').textContent = span.textContent.replace(/['’]$/, '');
  if (treffer) {
    const zeigeGrund = treffer.grundform.toLowerCase() !== span.textContent.toLowerCase();
    el('wort-grundform').textContent = treffer.selbst
      ? 'Grundform: ' + treffer.grundform + ' (selbst eingetragen)'
      : zeigeGrund ? 'Grundform: ' + treffer.grundform + (treffer.vermutlich ? ' (vermutlich)' : '') : '';
    el('wort-grundform').hidden = !(zeigeGrund || treffer.selbst);
    el('wort-bedeutung').textContent = treffer.bedeutung;
    el('wort-quelle').hidden = treffer.quelle !== 'WikDict';
  } else {
    el('wort-grundform').hidden = true;
    el('wort-quelle').hidden = true;
    el('wort-bedeutung').textContent = Woerterbuch.bereit()
      ? 'Nicht im Wörterbuch gefunden.'
      : 'Das Wörterbuch lädt noch – gleich noch einmal antippen.';
  }
  aktualisiereMerkenKnopf();

  // Passende Grammatik-Regel? Dazu das Wort davor suchen (wichtig für die Vergangenheit).
  const alle = [...el('lesen-text').querySelectorAll('.wort')];
  const vorher = alle[alle.indexOf(span) - 1];
  const kap = Grammatik.kapitelFuerWort(span.textContent, treffer, vorher && vorher.textContent);
  const regelKnopf = el('wort-regel');
  regelKnopf.hidden = !kap;
  if (kap) {
    regelKnopf.textContent = `Regel: ${kap.titel} ›`;
    regelKnopf.dataset.kapitel = kap.id;
  }

  el('wort-anhoeren').hidden = !Lesen.kannSprechen;
  el('satz-anhoeren').hidden = !Lesen.kannSprechen;

  // Eigene Bedeutung: Formular gleich offen, wenn nichts gefunden wurde
  el('eigen-grundform').value = treffer ? treffer.grundform.replace(/^(il|lo|la|i|gli|le) /, '') : span.textContent.toLowerCase().replace(/['’]$/, '');
  el('eigen-bedeutung').value = '';
  el('wort-eigen').hidden = Boolean(treffer);
  el('wort-eigen-oeffnen').hidden = !treffer;
  el('wort-eigen-oeffnen').textContent = 'Andere Bedeutung eintragen';
  el('wort-blatt').hidden = false;
}

el('wort-eigen-oeffnen').addEventListener('click', () => {
  el('wort-eigen-oeffnen').hidden = true;
  el('wort-eigen').hidden = false;
  el('eigen-bedeutung').focus();
});

el('wort-eigen').addEventListener('submit', (e) => {
  e.preventDefault();
  const grundform = el('eigen-grundform').value.trim();
  const bedeutung = el('eigen-bedeutung').value.trim();
  if (!grundform || !bedeutung) {
    (grundform ? el('eigen-bedeutung') : el('eigen-grundform')).focus();
    return;
  }
  const karte = Lesen.bedeutungSpeichern(lesen.gewaehltesWort.textContent, grundform, bedeutung);
  lesen.treffer = { form: lesen.gewaehltesWort.textContent, grundform, bedeutung, karte };
  el('wort-bedeutung').textContent = bedeutung;
  el('wort-grundform').textContent = 'Grundform: ' + grundform + ' (selbst eingetragen)';
  el('wort-grundform').hidden = false;
  el('wort-quelle').hidden = true;
  el('wort-eigen').hidden = true;
  el('eigen-bedeutung').blur();
  aktualisiereMerkenKnopf();
});

function aktualisiereMerkenKnopf() {
  const knopf = el('wort-merken');
  const karte = lesen.treffer && lesen.treffer.karte;
  knopf.hidden = !karte;
  if (!karte) return;
  const drin = Lesen.istInKarteikarten(karte.id);
  knopf.disabled = drin;
  knopf.textContent = drin ? '✓ In Karteikarten' : 'In Karteikarten';
}

function schliesseWortBlatt() {
  el('wort-blatt').hidden = true;
  if (lesen.gewaehltesWort) lesen.gewaehltesWort.classList.remove('gewaehlt');
  lesen.gewaehltesWort = null;
}

el('wort-schliessen').addEventListener('click', schliesseWortBlatt);
el('wort-anhoeren').addEventListener('click', () => {
  if (lesen.gewaehltesWort) Lesen.sprich(lesen.gewaehltesWort.textContent);
});

// Den ganzen Satz anhören, in dem das Wort steht (gut für die Betonung von Fragen)
el('satz-anhoeren').addEventListener('click', () => {
  const span = lesen.gewaehltesWort;
  if (!span) return;
  const block = span.closest('p, li, h3');
  if (!block) return;
  // Stelle des Wortes im Absatz bestimmen
  let position = 0;
  const lauf = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
  while (lauf.nextNode() && !span.contains(lauf.currentNode)) position += lauf.currentNode.length;
  vorlesenStopp();
  Lesen.sprich(Lesen.satzMit(block.textContent, position));
});
el('wort-merken').addEventListener('click', () => {
  if (lesen.treffer && lesen.treffer.karte) {
    Lesen.inKarteikarten(lesen.treffer.karte);
    aktualisiereMerkenKnopf();
  }
});

// Hinweis, wenn nichts zu hören ist (Stumm-Modus, Lautstärke, fehlende Stimme)
function zeigeVorleseHinweis() {
  const h = el('vorlese-hinweis');
  h.textContent = Lesen.hatItalienischeStimme()
    ? 'Nichts zu hören? Schalte den Stumm-Modus aus (Glocke im Kontrollzentrum) und dreh die Lautstärke hoch.'
    : 'Keine italienische Stimme gefunden. Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Italienisch → eine Stimme laden. Und: Stumm-Modus aus, Lautstärke hoch.';
  h.hidden = false;
}
Lesen.wennStill(zeigeVorleseHinweis);

// Stimme und Tempo auswählen – beim Lesen („Stimme und Tempo“) und unter „Mein Stand“ („Vorlesen“).
// Auswahlfelder: select[data-tempo], select[data-stimme=""|"M"|"W"] (M/W = Stimme für männliche/weibliche Wörter)
const HOERPROBE = { '': 'Ciao! Questa è la mia voce. Ti piace?', M: 'il ragazzo, il libro', W: 'la ragazza, la casa' };

function fuelleStimmWahl() {
  document.querySelectorAll('select[data-tempo]').forEach((t) => { t.value = String(Lesen.tempoStufe()); });
  const stimmen = Lesen.italienischeStimmen();
  document.querySelectorAll('select[data-stimme]').forEach((wahl) => {
    const art = wahl.dataset.stimme;
    wahl.innerHTML = '';
    if (art) {
      const o = document.createElement('option');
      o.value = '';
      o.textContent = 'wie die normale Stimme';
      wahl.appendChild(o);
    }
    for (const s of stimmen) {
      const o = document.createElement('option');
      o.value = s.name;
      o.textContent = s.name;
      wahl.appendChild(o);
    }
    wahl.value = Lesen.stimmeName(art);
  });
  // Stimmen-Auswahl nur zeigen, wenn es mehr als eine italienische Stimme gibt
  document.querySelectorAll('[data-stimmen-teil]').forEach((x) => { x.hidden = stimmen.length < 2; });
}
document.querySelectorAll('select[data-tempo]').forEach((t) => t.addEventListener('change', (e) => {
  Lesen.tempoWaehlen(e.target.value);
  fuelleStimmWahl();
  vorlesenStopp();
  Lesen.sprich('Ciao! Così parlo adesso.');           // kurze Hörprobe
}));
document.querySelectorAll('select[data-stimme]').forEach((wahl) => wahl.addEventListener('change', (e) => {
  const art = e.target.dataset.stimme;
  Lesen.stimmeWaehlen(e.target.value, art);
  fuelleStimmWahl();
  vorlesenStopp();
  Lesen.sprich(HOERPROBE[art], null, { wort: Boolean(art) });
}));
if (Lesen.kannSprechen) speechSynthesis.addEventListener('voiceschanged', fuelleStimmWahl);

// Ganzen Text vorlesen / anhalten
function vorlesenStopp() {
  Lesen.stopp();
  lesen.liestVor = false;
  el('knopf-vorlesen').textContent = '▶ Vorlesen';
}
el('knopf-vorlesen').addEventListener('click', () => {
  if (lesen.liestVor) { vorlesenStopp(); return; }
  lesen.liestVor = true;
  el('knopf-vorlesen').textContent = '■ Anhalten';
  if (!Lesen.hatItalienischeStimme()) zeigeVorleseHinweis();
  Lesen.sprich(Lesen.vorleseText(lesen.text.text), () => {
    lesen.liestVor = false;
    el('knopf-vorlesen').textContent = '▶ Vorlesen';
  });
});

el('knopf-fragen-pruefen').addEventListener('click', fragenPruefen);
el('knopf-lesen-zurueck').addEventListener('click', () => {
  vorlesenStopp();
  schliesseWortBlatt();
  if (lesen.zurueckZu === 'lektion') zurueckZurLektion();
  else zeigeTextliste();
});

// ---------- Grammatik ----------

// zusatz: true = leichtere Zusatzübungen (k.zusatz.uebungen), tipp: gerade wird der Tipp vorab gezeigt
const gram = { kapitel: null, zurueckZu: 'grammatik', liste: [], nr: 0, richtig: 0, geprueft: false, fertig: false, gelegt: [], zusatz: false, tipp: false };

// Übungen, die gerade geübt werden (normale oder Zusatzübungen)
function gramUebungen() {
  return gram.zusatz ? gram.kapitel.zusatz.uebungen : gram.kapitel.uebungen;
}

function zeigeGrammatikStand() {
  const n = Grammatik.anzahlGeuebt();
  el('grammatik-stand').textContent = n
    ? `${n} von ${KAPITEL.length} Kapiteln geübt`
    : `${KAPITEL.length} Kapitel mit Übungen`;
}

function zeigeKapitelliste() {
  const liste = el('kapitel-liste');
  liste.innerHTML = '';
  const stufenNamen = { A1: 'Grundlagen (A1)', A2: 'Weiter geht’s (A2)', B1: 'Fortgeschritten (B1)', B2: 'Sicher unterwegs (B2)' };
  for (const stufe of ['A1', 'A2', 'B1', 'B2']) {
    if (!KAPITEL.some((x) => x.stufe === stufe)) continue;
    const titel = document.createElement('p');
    titel.className = 'stufe-titel';
    titel.textContent = stufenNamen[stufe];
    liste.appendChild(titel);
    for (const k of KAPITEL.filter((x) => x.stufe === stufe)) {
      const s = Grammatik.stand(k.id);
      const knopf = document.createElement('button');
      knopf.type = 'button';
      knopf.className = 'karte karte-knopf text-eintrag';
      knopf.innerHTML = `
        <span class="karte-titel"></span>
        <span class="karte-text"></span>
        <span class="pfeil" aria-hidden="true">›</span>`;
      knopf.querySelector('.karte-titel').textContent = k.titel;
      knopf.querySelector('.karte-text').innerHTML = s
        ? (s.geuebt ? '<span class="haken">✓ geübt</span>' : `zuletzt ${s.richtig} von ${s.von} richtig`)
        : `${k.uebungen.length} Übungen`;
      knopf.addEventListener('click', () => oeffneKapitel(k, 'grammatik'));
      liste.appendChild(knopf);
    }
  }
  zeige('grammatik');
}

function oeffneKapitel(k, zurueckZu) {
  gram.kapitel = k;
  gram.zurueckZu = zurueckZu;
  el('kapitel-meta').textContent = `Grammatik · ${k.stufe}`;
  el('kapitel-titel').textContent = k.titel;

  const regel = el('kapitel-regel');
  regel.innerHTML = '';
  for (const absatz of k.regel) {
    const p = document.createElement('p');
    p.textContent = absatz;
    regel.appendChild(p);
  }

  const tabelle = el('kapitel-tabelle');
  tabelle.innerHTML = '';
  const kopf = tabelle.createTHead().insertRow();
  for (const zelle of k.tabelle.kopf) {
    const th = document.createElement('th');
    th.textContent = zelle;
    kopf.appendChild(th);
  }
  const rumpf = tabelle.createTBody();
  for (const zeile of k.tabelle.zeilen) {
    const tr = rumpf.insertRow();
    for (const zelle of zeile) tr.insertCell().textContent = zelle;
  }

  const n = k.uebungen.length;
  const offen = Grammatik.ungeloeste(k.id).length;
  el('kapitel-uebungen-stand').textContent = !offen
    ? 'Alle Übungen gelöst ✓'
    : offen < n ? `${n - offen} von ${n} Übungen gelöst – jetzt kommen die anderen.` : `${n} Übungen`;
  el('knopf-ueben').textContent = offen ? 'Üben' : 'Nochmal alle';
  const zusatz = Grammatik.zusatzAnbieten(k.id);
  el('kapitel-zusatz-hinweis').hidden = !zusatz;
  el('knopf-zusatz').hidden = !zusatz;
  el('knopf-kapitel-zurueck').textContent = { lesen: 'Zurück zum Text', lektion: 'Zurück zur Lektion' }[zurueckZu] || 'Zurück';
  zeige('kapitel');
}

el('knopf-kapitel-zurueck').addEventListener('click', () => {
  if (gram.zurueckZu === 'lesen') zeige('lesen');
  else if (gram.zurueckZu === 'lektion') zurueckZurLektion();
  else zeigeKapitelliste();
});

// --- Übung ---

// Übt nur die noch ungelösten Übungen; alle = true übt das ganze Kapitel noch einmal
function starteUebung(alle = false) {
  const k = gram.kapitel;
  const offen = Grammatik.ungeloeste(k.id);
  gram.liste = alle || !offen.length ? k.uebungen.map((u, i) => i) : offen;
  gram.nr = 0;
  gram.richtig = 0;
  gram.fertig = false;
  gram.zusatz = false;
  gram.tipp = false;
  el('uebung-titel').textContent = 'Übung';
  el('uebung-tipp').hidden = true;
  zeige('uebung');
  zeigeUebung();
}

// Leichtere Zusatzübungen: erst ein Tipp in kleinen Schritten, dann die Übungen der Reihe nach
function starteZusatz(k, zurueckZu) {
  if (!Grammatik.hatZusatz(k.id)) return;
  gram.kapitel = k;
  if (zurueckZu) gram.zurueckZu = zurueckZu;
  gram.zusatz = true;
  gram.liste = k.zusatz.uebungen.map((u, i) => i);
  gram.nr = 0;
  gram.richtig = 0;
  gram.fertig = false;
  gram.geprueft = false;
  el('uebung-titel').textContent = 'Zusatzübungen';
  zeige('uebung');
  if (k.zusatz.tipp && k.zusatz.tipp.length) zeigeZusatzTipp();
  else zeigeUebung();
}

function zeigeZusatzTipp() {
  const k = gram.kapitel;
  gram.tipp = true;
  el('uebung-stand').textContent = '';
  el('uebung-art').textContent = 'Schritt für Schritt';
  el('uebung-de').textContent = k.titel;
  const liste = el('uebung-tipp');
  liste.innerHTML = '';
  for (const schritt of k.zusatz.tipp) {
    const li = document.createElement('li');
    li.textContent = schritt;
    liste.appendChild(li);
  }
  liste.hidden = false;
  el('uebung-luecke').hidden = true;
  el('uebung-kacheln').hidden = true;
  el('uebung-wahl').hidden = true;
  el('uebung-rueck').hidden = true;
  el('knopf-uebung-zusatz').hidden = true;
  el('knopf-uebung').hidden = false;
  el('knopf-uebung').textContent = 'Los geht’s';
}

function zeigeUebung() {
  stelleMerken('uebung');
  const u = gramUebungen()[gram.liste[gram.nr]];
  gram.geprueft = false;
  gram.tipp = false;
  gram.gelegt = [];
  el('uebung-tipp').hidden = true;
  el('knopf-uebung-zusatz').hidden = true;
  el('uebung-stand').textContent = `${gram.nr + 1} von ${gram.liste.length}`;
  el('uebung-de').textContent = u.de;
  el('uebung-rueck').hidden = true;
  el('knopf-uebung').textContent = 'Prüfen';
  el('knopf-uebung').hidden = false;

  const istLuecke = u.art === 'luecke';
  const istWahl = u.art === 'wahl';
  el('uebung-luecke').hidden = !istLuecke;
  el('uebung-kacheln').hidden = istLuecke || istWahl;
  el('uebung-wahl').hidden = !istWahl;

  if (istWahl) {
    el('uebung-art').textContent = 'Welches Wort passt?';
    const satz = el('wahl-satz');
    satz.innerHTML = '';
    const [vorne, hinten] = u.satz.split('___');
    const luecke = document.createElement('span');
    luecke.className = 'luecke';
    luecke.textContent = ' ';
    satz.append(vorne, luecke, hinten || '');
    const box = el('wahl-antworten');
    box.innerHTML = '';
    for (const option of mischen(u.optionen)) {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'antwort';
      b.textContent = option;
      b.addEventListener('click', () => uebungPruefen(b));
      box.appendChild(b);
    }
    // Ohne Auswahl gibt es nichts zu prüfen: Knopf erst nach der Antwort zeigen
    el('knopf-uebung').hidden = true;
  } else if (istLuecke) {
    el('uebung-art').textContent = 'Setze das fehlende Wort ein.';
    zeigeLueckenSatz(u.satz, '');
    const feld = el('luecke-eingabe');
    feld.value = '';
    feld.readOnly = false;
    feld.focus();
  } else {
    el('uebung-art').textContent = 'Bau den Satz auf Italienisch.';
    const ablage = el('kachel-ablage');
    const vorrat = el('kachel-vorrat');
    ablage.innerHTML = '';
    ablage.classList.remove('fertig');
    vorrat.innerHTML = '';
    mischen(Grammatik.kacheln(u)).forEach((wort, i) => {
      const k = document.createElement('button');
      k.type = 'button';
      k.className = 'kachel';
      k.textContent = wort;
      k.dataset.i = i;
      k.addEventListener('click', () => kachelLegen(k));
      vorrat.appendChild(k);
    });
  }
}

// Satz mit Lücke anzeigen; die Lücke zeigt, was gerade getippt wird
function zeigeLueckenSatz(satz, eingabe) {
  const p = el('luecke-satz');
  p.innerHTML = '';
  const [vorne, hinten] = satz.split('___');
  p.appendChild(document.createTextNode(vorne));
  const luecke = document.createElement('span');
  luecke.className = 'luecke';
  luecke.textContent = eingabe || ' ';
  p.appendChild(luecke);
  p.appendChild(document.createTextNode(hinten || ''));
}

el('luecke-eingabe').addEventListener('input', (e) => {
  const u = gramUebungen()[gram.liste[gram.nr]];
  zeigeLueckenSatz(u.satz, e.target.value);
});

function kachelLegen(kachel) {
  if (gram.geprueft) return;
  kachel.classList.add('benutzt');
  const gelegt = document.createElement('button');
  gelegt.type = 'button';
  gelegt.className = 'kachel';
  gelegt.textContent = kachel.textContent;
  gelegt.addEventListener('click', () => {
    if (gram.geprueft) return;
    gelegt.remove();
    kachel.classList.remove('benutzt');
  });
  el('kachel-ablage').appendChild(gelegt);
}

// wahlKnopf: bei Auswahl-Übungen die angetippte Antwort
function uebungPruefen(wahlKnopf) {
  if (gram.geprueft || gram.tipp) return;
  const u = gramUebungen()[gram.liste[gram.nr]];
  let ergebnis;
  let loesungText;
  if (u.art === 'wahl') {
    if (!wahlKnopf) return;
    ergebnis = Grammatik.pruefeWahl(wahlKnopf.textContent, u);
    loesungText = u.satz.replace('___', u.optionen[0]);
    el('wahl-antworten').querySelectorAll('.antwort').forEach((b) => {
      if (b.textContent === u.optionen[0]) b.classList.add('richtig');
    });
    if (ergebnis.stufe === 'falsch') wahlKnopf.classList.add('falsch');
    el('knopf-uebung').hidden = false;
  } else if (u.art === 'luecke') {
    const text = el('luecke-eingabe').value.trim();
    if (!text) { el('luecke-eingabe').focus(); return; }
    ergebnis = Grammatik.pruefeLuecke(text, u);
    loesungText = u.satz.replace(/\s*\([^)]*\)\s*$/, '').replace('___', u.loesung);
    el('luecke-eingabe').readOnly = true;
  } else {
    const woerter = [...el('kachel-ablage').children].map((k) => k.textContent);
    if (!woerter.length) return;
    ergebnis = Grammatik.pruefeKacheln(woerter, u);
    loesungText = u.it;
    el('kachel-ablage').classList.add('fertig');
  }
  const gut = ergebnis.stufe !== 'falsch';
  if (gut) {
    gram.richtig += 1;
    // Zusatzübungen haben eigene Nummern – sie zählen nicht als gelöste Kapitel-Übungen
    if (!gram.zusatz) Grammatik.uebungGeloest(gram.kapitel.id, gram.liste[gram.nr]);
  }
  if (!gram.zusatz) Vokabeln.ergebnisZaehlen(gut);
  if (!gram.zusatz && u.art !== 'wahl') {
    Wiederholung.fehlerMerken({ art: 'grammatik', kapitel: gram.kapitel.id, nr: gram.liste[gram.nr] }, gut);
  }

  el('uebung-rueck').classList.toggle('falsch', !gut);
  el('uebung-rueck-titel').textContent = ergebnis.stufe === 'richtig' ? 'Richtig.'
    : ergebnis.stufe === 'fast' ? 'Fast richtig – zählt.' : 'Noch nicht.';
  const text = el('uebung-rueck-text');
  text.innerHTML = '';
  if (ergebnis.stufe !== 'richtig') {
    const zeile = document.createElement('span');
    zeile.textContent = (ergebnis.hinweis ? ergebnis.hinweis + ' ' : '') + 'Richtig ist: ';
    const s = document.createElement('strong');
    s.lang = 'it';
    s.textContent = loesungText;
    text.append(zeile, s);
  }
  if (!gut) {
    const regel = document.createElement('span');
    regel.textContent = u.warum ? 'Warum: ' + u.warum : 'Regel: ' + gram.kapitel.kurz;
    text.append(document.createElement('br'), regel);
  }
  text.hidden = !text.childNodes.length;
  el('uebung-rueck').hidden = false;
  gram.geprueft = true;
  el('knopf-uebung').textContent = 'Weiter';
  el('knopf-uebung').focus();
}

function uebungWeiter() {
  gram.nr += 1;
  if (gram.nr < gram.liste.length) { zeigeUebung(); return; }
  // Fertig
  stelleVergessen('uebung');
  const k = gram.kapitel;
  const von = gram.liste.length;
  const gut = gram.richtig / von >= 0.8;
  let zusatzZeigen = false;
  if (gram.zusatz) {
    Grammatik.zusatzSpeichern(k.id, gram.richtig, von);
    el('uebung-rueck-titel').textContent = gut
      ? 'Schön – jetzt klappt es bestimmt auch mit den Übungen des Kapitels.'
      : 'Schon besser. Lies die Regel noch einmal in Ruhe – dann geht es weiter.';
  } else {
    Grammatik.ergebnisSpeichern(k.id, gram.richtig, von);
    lektionenPruefen();
    zusatzZeigen = Grammatik.zusatzAnbieten(k.id, gram.richtig, von);
    el('uebung-rueck-titel').textContent = gut
      ? 'Gut gemacht – Kapitel geübt. ✓'
      : zusatzZeigen
        ? 'Das war noch viel Neues. Leichtere Zusatzübungen helfen, Schritt für Schritt.'
        : 'Lies die Regel noch einmal und übe dann erneut.';
  }
  gram.fertig = true;
  el('uebung-titel').textContent = 'Fertig';
  el('uebung-stand').textContent = '';
  el('uebung-art').textContent = k.titel;
  el('uebung-de').textContent = `${gram.richtig} von ${von} richtig`;
  el('uebung-luecke').hidden = true;
  el('uebung-kacheln').hidden = true;
  el('uebung-wahl').hidden = true;
  el('uebung-rueck').classList.remove('falsch');
  el('uebung-rueck-text').hidden = true;
  el('uebung-rueck').hidden = false;
  el('knopf-uebung').hidden = false;
  el('knopf-uebung').textContent = 'Zurück zum Kapitel';
  el('knopf-uebung-zusatz').hidden = !zusatzZeigen;
}

el('knopf-uebung').addEventListener('click', () => {
  if (gram.fertig) { oeffneKapitel(gram.kapitel, gram.zurueckZu); return; }
  if (gram.tipp) { zeigeUebung(); return; }
  gram.geprueft ? uebungWeiter() : uebungPruefen();
});
el('luecke-form').addEventListener('submit', (e) => {
  e.preventDefault();
  gram.geprueft ? uebungWeiter() : uebungPruefen();
});
el('knopf-uebung-zusatz').addEventListener('click', () => starteZusatz(gram.kapitel));
el('knopf-zusatz').addEventListener('click', () => starteZusatz(gram.kapitel));
el('knopf-ueben').addEventListener('click', () => starteUebung(!Grammatik.ungeloeste(gram.kapitel.id).length));
el('knopf-uebung-beenden').addEventListener('click', () => oeffneKapitel(gram.kapitel, gram.zurueckZu));

// Regel direkt am Text: Knopf im Wort-Blatt
el('wort-regel').addEventListener('click', () => {
  const k = Grammatik.kapitel(el('wort-regel').dataset.kapitel);
  if (!k) return;
  vorlesenStopp();
  schliesseWortBlatt();
  oeffneKapitel(k, 'lesen');
});

// ---------- Wörterbuch ----------

function oeffneWoerterbuch() {
  el('suche-eingabe').value = '';
  el('treffer-liste').innerHTML = '';
  zeigeSuchHinweis();
  zeige('woerterbuch');
  el('suche-eingabe').focus();
}

function zeigeSuchHinweis(text) {
  el('suche-hinweis').hidden = false;
  el('suche-hinweis').textContent = text || (Woerterbuch.bereit()
    ? `${Woerterbuch.anzahl().toLocaleString('de-DE')} Wörter, auch ohne Internet.`
    : 'Wörterbuch lädt …');
}

let sucheZeit = null;
function suchen() {
  const text = el('suche-eingabe').value;
  const liste = el('treffer-liste');
  liste.innerHTML = '';
  if (text.trim().length < 2) { zeigeSuchHinweis(); return; }
  if (!Woerterbuch.bereit()) { zeigeSuchHinweis('Wörterbuch lädt noch – einen Moment.'); return; }
  const treffer = Woerterbuch.finde(text);
  zeigeSuchHinweis('Nichts gefunden.');
  el('suche-hinweis').hidden = treffer.length > 0;
  for (const t of treffer) {
    const zeile = document.createElement('div');
    zeile.className = 'treffer';
    zeile.innerHTML = `
      <div class="treffer-text">
        <p class="treffer-it" lang="it"></p>
        <p class="treffer-de"></p>
      </div>
      <button class="knopf-plus" type="button" aria-label="In Karteikarten">+</button>`;
    zeile.querySelector('.treffer-it').textContent = t.it;
    zeile.querySelector('.treffer-de').textContent = t.de;
    const knopf = zeile.querySelector('.knopf-plus');
    // Grundwortschatz-Karte bevorzugen, sonst eigenes Wort
    const ws = WORTSCHATZ.find((w) => w.it.toLowerCase().replace(/^(il|lo|la|i|gli|le) /, '').replace(/^l'/, '') === t.it);
    const karte = ws
      ? { id: ws.id, it: ws.it, de: ws.de }
      : { id: 'e-' + wortId(t.it), it: t.it, de: t.de.split('; ').slice(0, 2).join('; '), eigen: true };
    const markieren = () => {
      const drin = Lesen.istInKarteikarten(karte.id);
      knopf.disabled = drin;
      knopf.textContent = drin ? '✓' : '+';
      knopf.setAttribute('aria-label', drin ? 'Schon in Karteikarten' : 'In Karteikarten');
    };
    knopf.addEventListener('click', () => { Lesen.inKarteikarten(karte); markieren(); });
    markieren();
    liste.appendChild(zeile);
  }
}

el('suche-eingabe').addEventListener('input', () => {
  clearTimeout(sucheZeit);
  sucheZeit = setTimeout(suchen, 200);      // erst suchen, wenn kurz nicht getippt wird
});
el('suche-form').addEventListener('submit', (e) => {
  e.preventDefault();
  el('suche-eingabe').blur();               // Tastatur schließen
  suchen();
});

// ---------- Fortschritt ----------

function balken(liste, name, zahl, max) {
  const zeile = document.createElement('div');
  zeile.className = 'fach';
  zeile.innerHTML = '<span class="fach-name"></span><span class="fach-balken"><span></span></span><span class="fach-zahl"></span>';
  zeile.querySelector('.fach-name').textContent = name;
  zeile.querySelector('.fach-balken span').style.width = (max ? Math.round((zahl / max) * 100) : 0) + '%';
  zeile.querySelector('.fach-zahl').textContent = zahl;
  liste.appendChild(zeile);
}

function zeigeNeuHeute() {
  const heute = Vokabeln.neuHeute();
  const q = Vokabeln.trefferQuote();
  const grenze = Vokabeln.neuGrenze();
  const ruhiger = grenze < Vokabeln.neuProTag()
    ? ` Gerade etwas ruhiger: heute höchstens ${grenze}, bis es wieder leichter läuft.` : '';
  el('neu-pro-tag-text').textContent = `Heute: ${heute} von ${Vokabeln.neuProTag()}.${ruhiger}`
    + (q === null ? '' : ` Letzte 7 Tage: ${Math.round(q * 100)} % richtig.`)
    + ' Neue Wörter kommen nur, wenn die anderen gut laufen – so hast du Zeit, sie ein paar Tage zu üben.';
}

el('neu-pro-tag').addEventListener('change', (e) => {
  Vokabeln.neuProTagWaehlen(e.target.value);
  zeigeNeuHeute();
});

function zeigeFortschritt() {
  const karten = Object.values(Speicher.daten.karten);
  const sicher = Vokabeln.anzahlSicher();
  el('fs-sicher').textContent = sicher;
  el('fs-sicher-text').textContent = karten.length
    ? `von ${karten.length} Wörtern in deinem Karteikasten`
    : 'Drück auf „Los“, dann kommen die ersten Wörter.';

  const faecher = el('fs-faecher');
  faecher.innerHTML = '';
  // „Neu“ = Wörter, die du gerade kennenlernst (noch nicht geschrieben)
  const jung = karten.filter((k) => Vokabeln.istJung(k)).length;
  const proFach = [1, 2, 3, 4, 5].map((f) => karten.filter((k) => k.fach === f && !Vokabeln.istJung(k)).length);
  const max = Math.max(1, jung, ...proFach);
  balken(faecher, 'Neu', jung, max);
  proFach.forEach((zahl, i) => balken(faecher, `Fach ${i + 1}`, zahl, max));

  // Grammatik-Kapitel im Karteikasten
  Wiederholung.einsortieren();
  const gramFaecher = el('fs-gram-faecher');
  gramFaecher.innerHTML = '';
  const gramVerteilung = Wiederholung.verteilung();
  const gramMax = Math.max(1, ...gramVerteilung);
  gramVerteilung.forEach((zahl, i) => balken(gramFaecher, `Fach ${i + 1}`, zahl, gramMax));
  const gramDa = gramVerteilung.some(Boolean);
  gramFaecher.style.display = gramDa ? '' : 'none';     // .faecher überschreibt sonst „hidden“
  el('fs-gram-text').textContent = gramDa
    ? 'Geübte Kapitel kommen wie Vokabeln immer wieder – mit neuen Aufgaben. Fach 5 = sitzt lange.'
    : 'Sobald du ein Kapitel geübt hast, kommt es hier in den Karteikasten und nach ein paar Tagen wieder – mit neuen Aufgaben.';

  const eingebaute = LESETEXTE.length;
  el('fs-texte').textContent = `${Lesen.anzahlVerstanden()} / ${eingebaute}`;
  el('fs-grammatik').textContent = `${Grammatik.anzahlGeuebt()} / ${KAPITEL.length}`;

  const t = Niveautest.letzter();
  if (t) {
    const datum = new Date(t.datum + 'T12:00').toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' });
    el('fs-niveau').textContent = t.niveau || 'unter A1';
    el('fs-niveau-text').textContent = `Letzter Test am ${datum}. Mach ihn ab und zu wieder, z. B. einmal im Monat.`;
    el('knopf-test').textContent = 'Test wiederholen (ca. 10 Min.)';
  } else {
    el('fs-niveau').textContent = '–';
    el('fs-niveau-text').textContent = 'Noch kein Test gemacht. 32 Fragen zeigen dir, ob A1, A2, B1 oder B2 sitzt.';
    el('knopf-test').textContent = 'Niveau-Test machen (ca. 10 Min.)';
  }
  zeige('fortschritt');
}

// ---------- Meine Wörter ----------
//
// Liste aller Wörter mit Stand (woerterliste.js). Nur ansehen und selbst prüfen –
// „Deutsch verdecken“ zählt nicht für den Karteikasten.

const STAND_INFO = {
  sitzt: { name: 'Sitzt', zeichen: '●' },
  uebt: { name: 'Übe ich noch', zeichen: '◐' },
  kennenlernen: { name: 'Lerne ich kennen', zeichen: '◔' },
  nichtDran: { name: 'Noch nicht dran', zeichen: '○' },
};

const woerterAnsicht = { filter: 'alle', verdeckt: false, gruppen: [] };

function zeigeWoerter() {
  woerterAnsicht.gruppen = Woerterliste.gruppen();
  el('woerter-verdecken').checked = woerterAnsicht.verdeckt;
  woerterZeichnen();
  zeige('woerter');
}

function woerterZeichnen() {
  const { gruppen, filter } = woerterAnsicht;
  const zahl = Woerterliste.zaehlen(gruppen);
  const gesamt = Object.values(zahl).reduce((a, b) => a + b, 0);

  const leiste = el('woerter-filter');
  leiste.innerHTML = '';
  const knoepfe = [['alle', 'Alle', gesamt], ...Object.entries(STAND_INFO).map(([k, i]) => [k, i.name, zahl[k]])];
  for (const [key, name, anzahl] of knoepfe) {
    const k = document.createElement('button');
    k.type = 'button';
    k.className = 'filter-knopf';
    k.textContent = `${name} · ${anzahl}`;
    k.setAttribute('aria-pressed', String(filter === key));
    k.addEventListener('click', () => { woerterAnsicht.filter = key; woerterZeichnen(); });
    leiste.appendChild(k);
  }

  const ziel = el('woerter-gruppen');
  ziel.innerHTML = '';
  for (const g of gruppen) {
    const passend = g.woerter.filter((w) => filter === 'alle' || w.stand === filter);
    if (!passend.length) continue;
    const box = document.createElement('details');
    box.className = 'woerter-gruppe';
    box.innerHTML = '<summary><span class="gruppe-titel"></span><span class="gruppe-zahl"></span></summary><ul class="woerter-zeilen"></ul>';
    box.querySelector('.gruppe-titel').textContent = g.titel;
    box.querySelector('.gruppe-zahl').textContent = `${passend.length} ${passend.length === 1 ? 'Wort' : 'Wörter'}`;
    // Zeilen erst beim Aufklappen bauen (über 2.000 Wörter)
    const fuellen = () => {
      const ul = box.querySelector('ul');
      if (ul.children.length) return;
      for (const w of passend) ul.appendChild(wortZeile(w));
    };
    box.addEventListener('toggle', () => { if (box.open) fuellen(); });
    if (g.aktuell) { box.open = true; fuellen(); }
    ziel.appendChild(box);
  }
  if (!ziel.children.length) {
    const p = document.createElement('p');
    p.className = 'karte-text';
    p.textContent = 'Hier ist gerade kein Wort.';
    ziel.appendChild(p);
  }
}

function wortZeile(w) {
  const li = document.createElement('li');
  li.className = 'wort-zeile stand-' + w.stand;
  li.innerHTML = `
    <button class="wort-it" type="button" lang="it"></button>
    <span class="wort-stand"><span aria-hidden="true"></span> </span>
    <span class="wort-de" lang="de"></span>`;
  const it = li.querySelector('.wort-it');
  it.textContent = w.it;
  it.setAttribute('aria-label', `${w.it} anhören`);
  it.addEventListener('click', () => sprichWort(w.it));
  const info = STAND_INFO[w.stand];
  li.querySelector('.wort-stand span').textContent = info.zeichen;
  li.querySelector('.wort-stand').append(info.name);
  const de = li.querySelector('.wort-de');
  if (woerterAnsicht.verdeckt) {
    const zeigen = document.createElement('button');
    zeigen.type = 'button';
    zeigen.className = 'wort-zeigen';
    zeigen.textContent = 'zeigen';
    zeigen.setAttribute('aria-label', `Bedeutung von ${w.it} zeigen`);
    zeigen.addEventListener('click', () => { de.textContent = w.de; });
    de.appendChild(zeigen);
  } else {
    de.textContent = w.de;
  }
  return li;
}

el('woerter-verdecken').addEventListener('change', (e) => {
  woerterAnsicht.verdeckt = e.target.checked;
  // offene Gruppen merken und neu zeichnen
  const offen = [...document.querySelectorAll('#woerter-gruppen details')].map((d) => d.open);
  woerterZeichnen();
  document.querySelectorAll('#woerter-gruppen details').forEach((d, i) => { if (offen[i]) d.open = true; });
});

// ---------- Niveau-Test ----------

const test = { nr: 0, antworten: [], gewaehlt: null, fertig: false, reihenfolge: [] };

function starteTest() {
  test.nr = 0;
  test.antworten = [];
  test.fertig = false;
  el('test-ergebnis').hidden = true;
  el('test-frage-karte').hidden = false;
  el('test-hinweis').hidden = false;
  el('knopf-test-ende').textContent = 'Test abbrechen';
  zeige('test');
  zeigeTestfrage();
}

function zeigeTestfrage() {
  const f = NIVEAUTEST[test.nr];
  test.gewaehlt = null;
  el('test-stand').textContent = `${test.nr + 1} von ${NIVEAUTEST.length}`;
  el('test-frage').textContent = f.frage;
  const box = el('test-antworten');
  box.innerHTML = '';
  const optionen = [...mischen(f.antworten.map((a, i) => ({ a, i }))), { a: 'Weiß ich nicht', i: -1 }];
  for (const { a, i } of optionen) {
    const knopf = document.createElement('button');
    knopf.type = 'button';
    knopf.className = 'antwort' + (i === -1 ? ' antwort-leise' : '');
    knopf.textContent = a;
    knopf.addEventListener('click', () => {
      test.gewaehlt = i;
      box.querySelectorAll('.antwort').forEach((k) => k.classList.toggle('gewaehlt', k === knopf));
      el('knopf-test-weiter').disabled = false;
    });
    box.appendChild(knopf);
  }
  el('knopf-test-weiter').textContent = test.nr === NIVEAUTEST.length - 1 ? 'Auswerten' : 'Weiter';
  el('knopf-test-weiter').disabled = true;
}

function testWeiter() {
  if (test.fertig) { zeigeFortschritt(); return; }
  if (test.gewaehlt === null) return;
  test.antworten.push(test.gewaehlt);
  test.nr += 1;
  if (test.nr < NIVEAUTEST.length) { zeigeTestfrage(); return; }

  // Auswerten
  const ergebnis = Niveautest.auswerten(test.antworten);
  Niveautest.speichern(ergebnis);
  test.fertig = true;
  el('test-stand').textContent = '';
  el('test-frage-karte').hidden = true;
  el('test-hinweis').hidden = true;
  el('test-niveau').textContent = ergebnis.niveau || 'unter A1';
  el('test-erklaerung').textContent = Niveautest.erklaerung(ergebnis.niveau);
  const stufen = el('test-stufen');
  stufen.innerHTML = '';
  for (const [s, w] of Object.entries(ergebnis.proStufe)) balken(stufen, s, w.richtig, w.von);
  el('test-ergebnis').hidden = false;
  el('knopf-test-weiter').disabled = false;
  el('knopf-test-weiter').textContent = 'Zum Fortschritt';
  el('knopf-test-ende').textContent = 'Zur Startseite';
}

el('knopf-test').addEventListener('click', starteTest);
el('knopf-test-weiter').addEventListener('click', testWeiter);
el('knopf-test-ende').addEventListener('click', () => (test.fertig ? zeigeStart() : zeigeFortschritt()));

// ---------- Hören & Üben ----------

const hoer = { aufgaben: [], nr: 0, richtig: 0, geprueft: false, fertig: false, gewaehlt: null, fehler: 0, lektion: null };

function zeigeHoerenStand() {
  const n = Uebungen.anzahlRunden();
  el('hoeren-stand-start').textContent = n
    ? `${n} ${n === 1 ? 'Runde' : 'Runden'} geübt`
    : 'Wortpaare, Hören und schreiben, Sätze legen';
}

// optionen.lektion: Hör-Runde für diese Lektion (Ergebnis zählt für die Lektion)
function starteHoeren(optionen = {}) {
  hoer.lektion = optionen.lektion || null;
  hoer.aufgaben = Uebungen.runde({ lektion: hoer.lektion });
  hoer.nr = 0;
  hoer.richtig = 0;
  hoer.fertig = false;
  el('hoeren-titel').textContent = 'Hören & Üben';
  el('knopf-hoeren-beenden').textContent = 'Übung beenden';
  zeige('hoeren');
  zeigeHoerAufgabe();
}

function hoerVorlesen(langsam = false) {
  const a = hoer.aufgaben[hoer.nr];
  if (!a || !a.satz) return;
  vorlesenStopp();
  Lesen.sprich(a.satz.it, null, { langsam });
}

function zeigeHoerAufgabe() {
  stelleMerken('hoeren');
  const a = hoer.aufgaben[hoer.nr];
  hoer.geprueft = false;
  hoer.gewaehlt = null;
  hoer.fehler = 0;
  el('hoeren-stand').textContent = `${hoer.nr + 1} von ${hoer.aufgaben.length}`;
  el('hoeren-rueck').hidden = true;
  el('hoeren-ergebnis-titel').hidden = true;
  el('knopf-hoeren').textContent = 'Prüfen';
  el('knopf-hoeren').hidden = false;

  el('diktat-form').hidden = a.art !== 'diktat';
  el('hoer-kacheln').hidden = a.art !== 'kacheln';
  el('paare').hidden = a.art !== 'paare';
  el('hoer-knoepfe').hidden = a.art === 'paare' || !Lesen.kannSprechen;

  if (a.art === 'diktat') {
    el('hoeren-art').textContent = 'Hör zu und schreib den Satz auf.';
    const feld = el('diktat-eingabe');
    feld.value = '';
    feld.readOnly = false;
    hoerVorlesen();
    feld.focus();
  } else if (a.art === 'kacheln') {
    el('hoeren-art').textContent = 'Hör zu und leg den Satz mit den Wörtern.';
    const ablage = el('hoer-ablage');
    const vorrat = el('hoer-vorrat');
    ablage.innerHTML = '';
    ablage.classList.remove('fertig');
    vorrat.innerHTML = '';
    for (const wort of a.kacheln) {
      const k = document.createElement('button');
      k.type = 'button';
      k.className = 'kachel';
      k.textContent = wort;
      k.addEventListener('click', () => hoerKachelLegen(k));
      vorrat.appendChild(k);
    }
    hoerVorlesen();
  } else {
    el('hoeren-art').textContent = 'Finde die Paare: erst links, dann rechts antippen.';
    el('knopf-hoeren').hidden = true;      // fertig, sobald alle Paare gefunden sind
    const links = el('paare-it');
    const rechts = el('paare-de');
    links.innerHTML = '';
    rechts.innerHTML = '';
    const knopf = (text, id, seite) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'paar';
      b.textContent = text;
      b.dataset.id = id;
      b.dataset.seite = seite;
      b.addEventListener('click', () => paarTippen(b));
      return b;
    };
    mischen(a.paare).forEach((p) => links.appendChild(knopf(p.it, p.id, 'it')));
    mischen(a.paare).forEach((p) => rechts.appendChild(knopf(p.de, p.id, 'de')));
  }
}

function hoerKachelLegen(kachel) {
  if (hoer.geprueft) return;
  kachel.classList.add('benutzt');
  const gelegt = document.createElement('button');
  gelegt.type = 'button';
  gelegt.className = 'kachel';
  gelegt.textContent = kachel.textContent;
  gelegt.addEventListener('click', () => {
    if (hoer.geprueft) return;
    gelegt.remove();
    kachel.classList.remove('benutzt');
  });
  el('hoer-ablage').appendChild(gelegt);
}

// Wortpaare: erst ein Wort wählen, dann das passende auf der anderen Seite
function paarTippen(b) {
  const vorher = hoer.gewaehlt;
  if (!vorher || vorher.dataset.seite === b.dataset.seite) {
    if (vorher) vorher.classList.remove('gewaehlt');
    hoer.gewaehlt = b;
    b.classList.add('gewaehlt');
    if (b.dataset.seite === 'it' && Lesen.kannSprechen) Lesen.sprich(b.textContent, null, { wort: true });
    return;
  }
  vorher.classList.remove('gewaehlt');
  hoer.gewaehlt = null;
  if (vorher.dataset.id === b.dataset.id) {
    vorher.classList.add('passt');
    b.classList.add('passt');
    if (!document.querySelector('#paare .paar:not(.passt)')) paareFertig();
  } else {
    hoer.fehler += 1;
    for (const x of [vorher, b]) {
      x.classList.add('daneben');
      setTimeout(() => x.classList.remove('daneben'), 600);
    }
  }
}

function paareFertig() {
  hoer.geprueft = true;
  if (hoer.fehler === 0) hoer.richtig += 1;
  el('hoeren-rueck').classList.toggle('falsch', hoer.fehler > 0);
  el('hoeren-rueck-titel').textContent = hoer.fehler === 0 ? 'Alle Paare auf Anhieb.' : 'Alle Paare gefunden.';
  el('hoeren-rueck-text').textContent = hoer.fehler ? `${hoer.fehler}× daneben getippt – macht nichts.` : '';
  el('hoeren-rueck-text').hidden = !hoer.fehler;
  el('hoeren-rueck').hidden = false;
  el('knopf-hoeren').textContent = 'Weiter';
  el('knopf-hoeren').hidden = false;
}

function hoerPruefen() {
  const a = hoer.aufgaben[hoer.nr];
  let gut;
  let hinweis = '';
  let falscheStellen = [];
  if (a.art === 'diktat') {
    const text = el('diktat-eingabe').value.trim();
    if (!text) { el('diktat-eingabe').focus(); return; }
    const r = Uebungen.pruefeDiktat(text, a.satz.it);
    gut = r.stufe !== 'falsch';
    hinweis = r.hinweis || '';
    falscheStellen = r.falscheStellen;
    el('diktat-eingabe').readOnly = true;
    el('diktat-eingabe').blur();
  } else {
    const woerter = [...el('hoer-ablage').children].map((k) => k.textContent);
    if (!woerter.length) return;
    gut = Uebungen.pruefeKacheln(woerter, a.satz.it);
    el('hoer-ablage').classList.add('fertig');
  }
  if (gut) {
    hoer.richtig += 1;
    Uebungen.satzGeloest(a.satz);
  }
  Wiederholung.fehlerMerken({ art: 'hoeren', satz: a.satz }, gut);
  Vokabeln.ergebnisZaehlen(gut);
  hoer.geprueft = true;

  el('hoeren-rueck').classList.toggle('falsch', !gut);
  el('hoeren-rueck-titel').textContent = gut ? (hinweis ? 'Fast richtig – zählt.' : 'Richtig.') : 'Noch nicht ganz.';
  // Richtigen Satz zeigen, falsche Wörter markiert, dazu die deutsche Bedeutung
  const text = el('hoeren-rueck-text');
  text.innerHTML = '';
  if (hinweis) text.append(hinweis + ' ');
  const satz = document.createElement('strong');
  satz.lang = 'it';
  a.satz.it.split(' ').forEach((w, i) => {
    if (i) satz.append(' ');
    if (falscheStellen.includes(i)) {
      const m = document.createElement('span');
      m.className = 'wort-falsch';
      m.textContent = w;
      satz.append(m);
    } else satz.append(w);
  });
  text.append(satz);
  if (a.satz.de) text.append(document.createElement('br'), a.satz.de);
  else if (a.satz.quelle) text.append(document.createElement('br'), `aus „${a.satz.quelle}“`);
  text.hidden = false;
  el('hoeren-rueck').hidden = false;
  el('knopf-hoeren').textContent = 'Weiter';
  el('knopf-hoeren').focus();
}

function hoerWeiter() {
  hoer.nr += 1;
  if (hoer.nr < hoer.aufgaben.length) { zeigeHoerAufgabe(); return; }
  vorlesenStopp();
  stelleVergessen('hoeren');
  Uebungen.ergebnisSpeichern(hoer.richtig, hoer.aufgaben.length);
  if (hoer.lektion) Lektionen.hoerenSpeichern(hoer.lektion.id, hoer.richtig, hoer.aufgaben.length);
  lektionenPruefen();
  hoer.fertig = true;
  el('hoeren-titel').textContent = 'Fertig';
  el('hoeren-stand').textContent = '';
  el('hoeren-art').textContent = 'Hören & Üben';
  el('hoer-knoepfe').hidden = true;
  el('diktat-form').hidden = true;
  el('hoer-kacheln').hidden = true;
  el('paare').hidden = true;
  el('hoeren-ergebnis-titel').textContent = `${hoer.richtig} von ${hoer.aufgaben.length} gut gelöst`;
  el('hoeren-ergebnis-titel').hidden = false;
  el('hoeren-rueck').hidden = true;
  el('knopf-hoeren').textContent = 'Noch eine Runde';
  el('knopf-hoeren-beenden').textContent = hoer.lektion ? 'Zur Lektion' : 'Zur Startseite';
}

el('knopf-hoeren').addEventListener('click', () => {
  if (hoer.fertig) { starteHoeren({ lektion: hoer.lektion }); return; }
  hoer.geprueft ? hoerWeiter() : hoerPruefen();
});
el('diktat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  hoer.geprueft ? hoerWeiter() : hoerPruefen();
});
el('knopf-hoeren-play').addEventListener('click', () => hoerVorlesen(false));
el('knopf-hoeren-langsam').addEventListener('click', () => hoerVorlesen(true));
el('knopf-hoeren-beenden').addEventListener('click', () => {
  vorlesenStopp();
  if (hoer.lektion) zurueckZurLektion();
  else oeffneReiter('ueben');
});
el('knopf-hoeren-start').addEventListener('click', () => starteHoeren());

// ---------- Aufgabenrunde („Kann ich schon“, Wiederholung) ----------
//
// Aufgaben aus Lektionen.aufgabenFuer: deutsch (Kacheln), grammatik (Lücke oder Kacheln), hoeren (Kacheln).
// fertig(richtig, von) gibt { titel, text, weiter } zurück: was nach der letzten Aufgabe passiert.

// fehler: Kapitel-ID → Anzahl falscher Grammatik-Aufgaben (für das Angebot „Zusatzübungen“)
const aufg = { liste: [], nr: 0, richtig: 0, geprueft: false, ende: null, fertig: null, abbruch: null, fehler: {} };

// info: { typ: 'wiederholen' | 'ripasso' | 'kannich', lektion } – zum Weitermachen nach einer Pause
function starteAufgaben(liste, titel, fertig, abbruch, info = {}) {
  Object.assign(aufg, { liste, nr: 0, richtig: 0, geprueft: false, ende: null, fertig, abbruch, fehler: {}, titel, info });
  el('knopf-aufgabe-zusatz').hidden = true;
  el('aufgaben-titel').textContent = titel;
  zeige('aufgaben');
  zeigeAufgabe();
}

function aufgabeSprechen(langsam = false) {
  const a = aufg.liste[aufg.nr];
  if (!a) return;
  const text = a.art === 'hoeren' ? a.satz.it : a.art === 'deutsch' ? Vokabeln.wort(a.id).it : '';
  if (text) sprichWort(text, langsam, a.art === 'deutsch');
}

function aufgabeKacheln(woerter, sprache) {
  const ablage = el('aufgabe-ablage');
  const vorrat = el('aufgabe-vorrat');
  ablage.innerHTML = '';
  vorrat.innerHTML = '';
  ablage.lang = sprache;
  vorrat.lang = sprache;
  ablage.classList.remove('fertig');
  for (const wort of woerter) {
    const k = document.createElement('button');
    k.type = 'button';
    k.className = 'kachel';
    k.textContent = wort;
    k.addEventListener('click', () => {
      if (aufg.geprueft || k.classList.contains('benutzt')) return;
      k.classList.add('benutzt');
      const gelegt = document.createElement('button');
      gelegt.type = 'button';
      gelegt.className = 'kachel';
      gelegt.textContent = wort;
      gelegt.addEventListener('click', () => {
        if (aufg.geprueft) return;
        gelegt.remove();
        k.classList.remove('benutzt');
      });
      ablage.appendChild(gelegt);
    });
    vorrat.appendChild(k);
  }
  el('aufgabe-kacheln').hidden = false;
}

function zeigeAufgabe() {
  stelleMerken('aufgaben');
  const a = aufg.liste[aufg.nr];
  aufg.geprueft = false;
  el('aufgaben-stand').textContent = `${aufg.nr + 1} von ${aufg.liste.length}`;
  el('aufgabe-rueck').hidden = true;
  el('aufgabe-luecke').hidden = true;
  el('aufgabe-kacheln').hidden = true;
  el('aufgabe-hoer').hidden = true;
  el('aufgabe-text').hidden = false;
  el('aufgabe-text').lang = 'de';
  el('knopf-aufgabe').textContent = 'Prüfen';
  if (a.art === 'deutsch') {
    const w = Vokabeln.wort(a.id);
    el('aufgabe-art').textContent = 'Was heißt das auf Deutsch?';
    el('aufgabe-text').textContent = w.it;
    el('aufgabe-text').lang = 'it';
    el('aufgabe-hoer').hidden = !Lesen.kannSprechen;
    aufgabeKacheln(Vokabeln.deutschKacheln(w).kacheln, 'de');
  } else if (a.art === 'grammatik') {
    const u = a.uebung || Grammatik.kapitel(a.kapitel).uebungen[a.nr];
    el('aufgabe-text').textContent = u.de;
    if (u.art === 'luecke') {
      el('aufgabe-art').textContent = 'Setze das fehlende Wort ein.';
      el('aufgabe-luecke-satz').textContent = u.satz;
      const feld = el('aufgabe-eingabe');
      feld.value = '';
      feld.readOnly = false;
      el('aufgabe-luecke').hidden = false;
      feld.focus();
    } else {
      el('aufgabe-art').textContent = 'Bau den Satz auf Italienisch.';
      aufgabeKacheln(mischen(Grammatik.kacheln(u)), 'it');
    }
  } else {
    el('aufgabe-art').textContent = 'Hör zu und leg den Satz.';
    el('aufgabe-text').hidden = true;
    el('aufgabe-hoer').hidden = false;
    aufgabeKacheln(Uebungen.kacheln(a.satz.it), 'it');
    aufgabeSprechen();
  }
}

function aufgabePruefen() {
  const a = aufg.liste[aufg.nr];
  const gelegt = [...el('aufgabe-ablage').querySelectorAll('.kachel')].map((k) => k.textContent);
  let gut;
  let loesung;
  if (a.art === 'deutsch') {
    if (!gelegt.length) return;
    const w = Vokabeln.wort(a.id);
    gut = Vokabeln.pruefeDeutsch(gelegt, w);
    loesung = Vokabeln.deutschZiel(w.de).join(' ');
  } else if (a.art === 'grammatik') {
    const u = a.uebung || Grammatik.kapitel(a.kapitel).uebungen[a.nr];
    if (u.art === 'luecke') {
      const text = el('aufgabe-eingabe').value.trim();
      if (!text) { el('aufgabe-eingabe').focus(); return; }
      gut = Grammatik.pruefeLuecke(text, u).stufe !== 'falsch';
      loesung = u.satz.replace(/\s*\([^)]*\)\s*$/, '').replace('___', u.loesung);
      el('aufgabe-eingabe').readOnly = true;
    } else {
      if (!gelegt.length) return;
      gut = Grammatik.pruefeKacheln(gelegt, u).stufe !== 'falsch';
      loesung = u.it;
    }
  } else {
    if (!gelegt.length) return;
    gut = Uebungen.pruefeKacheln(gelegt, a.satz.it);
    loesung = a.satz.it + (a.satz.de ? ' – ' + a.satz.de : '');
  }
  if (gut) aufg.richtig += 1;
  else if (a.art === 'grammatik') aufg.fehler[a.kapitel] = (aufg.fehler[a.kapitel] || 0) + 1;
  a.gut = gut;
  Vokabeln.ergebnisZaehlen(gut);
  Wiederholung.fehlerMerken(a, gut);   // falsch → kommt an einem der nächsten Tage wieder
  aufg.geprueft = true;
  el('aufgabe-ablage').classList.add('fertig');
  el('aufgabe-rueck').classList.toggle('falsch', !gut);
  el('aufgabe-rueck-titel').textContent = gut ? 'Richtig.' : 'Noch nicht.';
  el('aufgabe-rueck-text').textContent = gut ? (a.art === 'hoeren' && a.satz.de ? a.satz.de : '') : 'Richtig ist: ' + loesung;
  el('aufgabe-rueck-text').hidden = !el('aufgabe-rueck-text').textContent;
  el('aufgabe-rueck').hidden = false;
  el('knopf-aufgabe').textContent = 'Weiter';
  el('knopf-aufgabe').focus();
  // Richtig und nichts weiter zu lesen: von selbst weiter
  if (gut && el('aufgabe-rueck-text').hidden) {
    const nr = aufg.nr;
    clearTimeout(aufg.autoZeit);
    aufg.autoZeit = setTimeout(() => {
      if (aufg.nr === nr && aufg.geprueft && !aufg.ende && !el('screen-aufgaben').hidden) aufgabeWeiter();
    }, 1200);
  }
}

function aufgabeWeiter() {
  aufg.nr += 1;
  if (aufg.nr < aufg.liste.length) { zeigeAufgabe(); return; }
  vorlesenStopp();
  stelleVergessen('aufgaben');
  aufg.ende = aufg.fertig(aufg.richtig, aufg.liste.length);
  el('aufgaben-stand').textContent = '';
  el('aufgabe-art').textContent = `${aufg.richtig} von ${aufg.liste.length} richtig`;
  el('aufgabe-text').hidden = true;
  el('aufgabe-hoer').hidden = true;
  el('aufgabe-luecke').hidden = true;
  el('aufgabe-kacheln').hidden = true;
  el('aufgabe-rueck').classList.toggle('falsch', !aufg.ende.gut);
  el('aufgabe-rueck-titel').textContent = aufg.ende.titel;
  el('aufgabe-rueck-text').textContent = aufg.ende.text;
  el('aufgabe-rueck-text').hidden = !aufg.ende.text;
  el('aufgabe-rueck').hidden = false;
  el('knopf-aufgabe').textContent = 'Weiter';
  // Zu viele Fehler: Zusatzübungen für das Kapitel mit den meisten Fehlern anbieten
  aufg.zusatzKapitel = aufg.ende.gut ? null : zusatzKapitelNachFehlern(aufg.fehler);
  el('knopf-aufgabe-zusatz').hidden = !aufg.zusatzKapitel;
  if (aufg.zusatzKapitel) {
    const k = Grammatik.kapitel(aufg.zusatzKapitel);
    el('knopf-aufgabe-zusatz').textContent = `Zusatzübungen: ${k.titel}`;
  }
}

// Kapitel mit den meisten Fehlern (mindestens 1), das Zusatzübungen hat
function zusatzKapitelNachFehlern(fehler) {
  const kandidaten = Object.entries(fehler)
    .filter(([id, n]) => n > 0 && Grammatik.hatZusatz(id))
    .sort((a, b) => b[1] - a[1]);
  return kandidaten.length ? kandidaten[0][0] : null;
}

el('knopf-aufgabe-zusatz').addEventListener('click', () => {
  const k = Grammatik.kapitel(aufg.zusatzKapitel);
  if (k) starteZusatz(k, lekt.offen ? 'lektion' : 'grammatik');
});

el('knopf-aufgabe').addEventListener('click', () => {
  if (aufg.ende) { aufg.ende.weiter(); return; }
  aufg.geprueft ? aufgabeWeiter() : aufgabePruefen();
});
el('aufgabe-luecke-form').addEventListener('submit', (e) => {
  e.preventDefault();
  aufg.geprueft ? aufgabeWeiter() : aufgabePruefen();
});
el('aufgabe-play').addEventListener('click', () => aufgabeSprechen(false));
el('aufgabe-langsam').addEventListener('click', () => aufgabeSprechen(true));
el('knopf-aufgaben-beenden').addEventListener('click', () => {
  vorlesenStopp();
  if (aufg.abbruch) aufg.abbruch();
  else zeigeStart();
});

// „Kann ich schon“: 8 Aufgaben, ab 7 richtig ist die Lektion erledigt
function starteKannIch(l, liste = null) {
  starteAufgaben(liste || Lektionen.aufgabenFuer(l, 8), 'Kann ich schon?', (richtig, von) => {
    if (Lektionen.ueberspringen(l.id, richtig, von)) {
      lektionenPruefen();
      lekt.geschafft.push(l);
      return { gut: true, titel: 'Lektion übersprungen ✓', text: 'Die Wörter kommen ab morgen ab und zu zum Wiederholen.', weiter: zeigeStart };
    }
    return {
      gut: false,
      titel: 'Ein paar Sachen sind neu',
      text: 'Lass uns die Lektion zusammen anschauen.',
      weiter: () => oeffneLektion(Lektionen.finde(l.id)),
    };
  }, () => oeffneLektion(Lektionen.finde(l.id)), { typ: 'kannich', lektion: l.id });
}

// Wiederholung: 10 gemischte Aufgaben aus den Lektionen davor
function starteRipasso(l, gespeichert = null) {
  lekt.offen = l;
  Lektionen.beginnen(l.id);
  // Übungen, die früher falsch waren, kommen hier mit dran
  const fehler = gespeichert ? [] : Wiederholung.faelligeFehler(3);
  const liste = gespeichert || mischen([...fehler, ...Lektionen.aufgabenFuer(l, 10 - fehler.length)]);
  starteAufgaben(liste, l.titel, (richtig, von) => {
    Lektionen.ripassoSpeichern(l.id, richtig, von);
    lektionenPruefen();
    const gut = richtig / von >= 0.8;
    return {
      gut,
      titel: gut ? 'Gut wiederholt ✓' : 'Schon einiges sitzt',
      text: gut ? '' : 'Ab 8 von 10 sind die Übungen geschafft. Versuch es gern noch einmal.',
      weiter: () => oeffneLektion(Lektionen.finde(l.id)),
    };
  }, () => oeffneLektion(Lektionen.finde(l.id)), { typ: 'ripasso', lektion: l.id });
}

// Grammatik-Wiederholung (Karteikasten für Kapitel, siehe wiederholung.js):
// je fälligem Kapitel 3 Aufgaben, gemischt. Danach geht es mit dem nächsten Schritt weiter.
function starteGrammatikWiederholung(gespeichert = null) {
  const liste = gespeichert || Wiederholung.rundeAufgaben();
  if (!liste.length) { zeigeStart(); return; }
  starteAufgaben(liste, 'Grammatik wiederholen', (richtig, von) => {
    // Fächer nur für die fälligen Kapitel (nicht für die früher falschen Übungen)
    const kapitelAufgaben = liste.filter((a) => a.kapitel && !a.ausFehler);
    for (const id of new Set(kapitelAufgaben.map((a) => a.kapitel))) {
      const eigene = kapitelAufgaben.filter((a) => a.kapitel === id);
      Wiederholung.eintragen(id, eigene.filter((a) => a.gut).length, eigene.length);
    }
    const n = naechsterSchritt();
    const gut = richtig / von >= 0.8;
    return {
      gut,
      titel: gut ? 'Gut wiederholt ✓' : 'Ein paar Sachen brauchen noch Übung',
      text: (gut
        ? 'Die Kapitel kommen erst in ein paar Tagen wieder.'
        : 'Kein Problem – diese Kapitel kommen bald noch einmal.')
        + (n ? ` Als Nächstes: ${n.name}` : ''),
      weiter: n ? () => oeffneNaechstes(n) : zeigeStart,
    };
  }, zeigeStart, { typ: 'wiederholen' });
}

// ---------- Weitermachen, wo du warst ----------
//
// Die App merkt sich die Stelle (Speicher.daten.laufend), damit du nach einer Pause
// genau dort weitermachen kannst. Die Ergebnisse selbst sind schon nach jeder Antwort gespeichert.
// Vokabel-Runden gelten nur am selben Tag (am nächsten Tag sind andere Wörter fällig).

const LAUFEND_TAGE = 14;

function stelleMerken(art) {
  const d = { art, datum: Vokabeln.heute(), lektionOffen: lekt.offen ? lekt.offen.id : null };
  if (art === 'runde') {
    Object.assign(d, {
      schritte: abfrage.schritte, pos: abfrage.pos, gewertet: [...abfrage.gewertet], aufAnhieb: abfrage.aufAnhieb,
      kennen: [...abfrage.kennen], zweiterVersuch: [...abfrage.zweiterVersuch], ohneWertung: Boolean(abfrage.ohneWertung),
    });
  } else if (art === 'aufgaben') {
    Object.assign(d, { liste: aufg.liste, nr: aufg.nr, richtig: aufg.richtig, fehler: aufg.fehler, titel: aufg.titel, info: aufg.info });
  } else if (art === 'uebung') {
    Object.assign(d, { kapitel: gram.kapitel.id, liste: gram.liste, nr: gram.nr, richtig: gram.richtig, zusatz: gram.zusatz, zurueckZu: gram.zurueckZu });
  } else if (art === 'hoeren') {
    Object.assign(d, { aufgaben: hoer.aufgaben, nr: hoer.nr, richtig: hoer.richtig, lektion: hoer.lektion ? hoer.lektion.id : null });
  } else if (art === 'text') {
    Object.assign(d, { text: lesen.text.id, zurueckZu: lesen.zurueckZu, scroll: 0 });
  }
  Speicher.daten.laufend = d;
  Speicher.speichern();
}

// Nur vergessen, wenn gerade diese Art gemerkt ist
function stelleVergessen(art) {
  const d = Speicher.daten.laufend;
  if (d && (!art || d.art === art)) {
    Speicher.daten.laufend = null;
    Speicher.speichern();
  }
}

function alleTexte() {
  return [...LESETEXTE, ...(Speicher.daten.eigeneTexte || [])];
}

// Gemerkte Stelle – oder null, wenn sie zu alt ist oder nicht mehr passt
function gemerkteStelle() {
  const d = Speicher.daten.laufend;
  if (!d || !d.art) return null;
  if (d.art === 'runde' && d.datum !== Vokabeln.heute()) return null;
  if (d.datum < Vokabeln.inTagen(-LAUFEND_TAGE)) return null;
  if (d.art === 'uebung' && !Grammatik.kapitel(d.kapitel)) return null;
  if (d.art === 'text' && !alleTexte().find((t) => t.id === d.text)) return null;
  if (d.art === 'aufgaben' && d.info && d.info.lektion && !Lektionen.finde(d.info.lektion)) return null;
  return d;
}

function stelleBeschreibung(d) {
  if (d.art === 'runde') {
    const zaehlt = d.schritte.filter((s) => s.art !== 'neu').length;
    const erledigt = d.schritte.slice(0, d.pos).filter((s) => s.art !== 'neu').length;
    return `Vokabeln – ${Math.min(erledigt + 1, zaehlt)} von ${zaehlt}`;
  }
  if (d.art === 'aufgaben') return `${d.titel} – Aufgabe ${d.nr + 1} von ${d.liste.length}`;
  if (d.art === 'uebung') {
    return `${d.zusatz ? 'Zusatzübungen' : 'Grammatik'} „${Grammatik.kapitel(d.kapitel).titel}“ – ${d.nr + 1} von ${d.liste.length}`;
  }
  if (d.art === 'hoeren') return `Hören & Üben – ${d.nr + 1} von ${d.aufgaben.length}`;
  return `Text „${alleTexte().find((t) => t.id === d.text).titel}“`;
}

function weitermachen() {
  const d = gemerkteStelle();
  if (!d) { zeigeStart(); return; }
  lekt.offen = d.lektionOffen ? Lektionen.finde(d.lektionOffen) || null : null;
  if (d.art === 'runde') {
    Object.assign(abfrage, {
      schritte: d.schritte, pos: d.pos, gewertet: new Set(d.gewertet), aufAnhieb: d.aufAnhieb,
      kennen: new Set(d.kennen), zweiterVersuch: new Set(d.zweiterVersuch), ohneWertung: d.ohneWertung,
      geprueft: false, gewaehlt: null, paarFehler: new Set(),
    });
    zeige('runde');
    zeigeSchritt();
  } else if (d.art === 'aufgaben') {
    const typ = (d.info || {}).typ;
    const l = d.info && d.info.lektion ? Lektionen.finde(d.info.lektion) : null;
    if (typ === 'ripasso' && l) starteRipasso(l, d.liste);
    else if (typ === 'kannich' && l) starteKannIch(l, d.liste);
    else starteGrammatikWiederholung(d.liste);
    Object.assign(aufg, { nr: d.nr, richtig: d.richtig, fehler: d.fehler || {} });
    zeigeAufgabe();
  } else if (d.art === 'uebung') {
    Object.assign(gram, {
      kapitel: Grammatik.kapitel(d.kapitel), zurueckZu: d.zurueckZu, zusatz: d.zusatz, liste: d.liste,
      nr: d.nr, richtig: d.richtig, fertig: false, geprueft: false,
    });
    el('uebung-titel').textContent = d.zusatz ? 'Zusatzübungen' : 'Übung';
    zeige('uebung');
    zeigeUebung();
  } else if (d.art === 'hoeren') {
    Object.assign(hoer, {
      lektion: d.lektion ? Lektionen.finde(d.lektion) : null, aufgaben: d.aufgaben, nr: d.nr, richtig: d.richtig, fertig: false,
    });
    el('hoeren-titel').textContent = 'Hören & Üben';
    el('knopf-hoeren-beenden').textContent = 'Übung beenden';
    zeige('hoeren');
    zeigeHoerAufgabe();
  } else if (d.art === 'text') {
    const scroll = d.scroll || 0;
    oeffneText(alleTexte().find((t) => t.id === d.text), d.zurueckZu);
    setTimeout(() => window.scrollTo(0, scroll), 50);
  }
}

// Beim Lesen: Stelle im Text merken (höchstens alle 2 Sekunden)
let scrollMerkenZeit = null;
window.addEventListener('scroll', () => {
  if (el('screen-lesen').hidden) return;
  clearTimeout(scrollMerkenZeit);
  scrollMerkenZeit = setTimeout(() => {
    const d = Speicher.daten.laufend;
    if (d && d.art === 'text' && lesen.text && d.text === lesen.text.id) {
      d.scroll = Math.round(window.scrollY);
      Speicher.speichern();
    }
  }, 2000);
}, { passive: true });

el('knopf-weiter-verwerfen').addEventListener('click', () => {
  stelleVergessen();
  zeigeStart();
});

// ---------- Begleiter ----------

// Antippen: nächster Tipp
el('begleiter-start').addEventListener('click', () => {
  Begleiter.zeigen(el('begleiter-start'), Begleiter.tipp(true));
});

// ---------- Knöpfe ----------

el('knopf-woerter').addEventListener('click', () => { woerterAnsicht.verdeckt = false; woerterAnsicht.filter = 'alle'; zeigeWoerter(); });
el('leiste').querySelectorAll('[data-reiter]').forEach((knopf) => {
  knopf.addEventListener('click', () => oeffneReiter(knopf.dataset.reiter));
});
el('knopf-woerterbuch').addEventListener('click', oeffneWoerterbuch);
el('knopf-grammatik').addEventListener('click', zeigeKapitelliste);
el('knopf-lesen').addEventListener('click', zeigeTextliste);
document.getElementById('knopf-los').addEventListener('click', losKlick);
document.getElementById('knopf-daten').addEventListener('click', oeffneDaten);
// „Zurück“: data-zurueck="ueben" / "stand" führt zu diesem Reiter, leer = Startseite
document.querySelectorAll('[data-zurueck]').forEach((knopf) => {
  knopf.addEventListener('click', () => oeffneReiter(knopf.dataset.zurueck || 'heute'));
});

// Limo in den Übungen: sitzt in der Aufgaben-Karte (.frage-karte) und passt ihre Stimmung an,
// sobald sich auf der Seite etwas zeigt/versteckt (neue Aufgabe, Hören, Rückmeldung).
if (typeof MutationObserver !== 'undefined') {
  const UEBUNGS_SEITEN = ['screen-runde', 'screen-uebung', 'screen-aufgaben', 'screen-hoeren'];
  const limoAktualisieren = (seite) => {
    if (seite.hidden) return;
    const karte = seite.querySelector('.frage-karte');
    if (karte) Begleiter.uebungLimo(karte, Begleiter.uebungStimmung(seite));
  };
  const limoBeobachter = new MutationObserver((aenderungen) => {
    const seiten = new Set(aenderungen.map((a) => a.target.closest('.screen')).filter(Boolean));
    seiten.forEach(limoAktualisieren);
  });
  for (const id of UEBUNGS_SEITEN) {
    limoBeobachter.observe(el(id), { attributes: true, subtree: true, attributeFilter: ['hidden', 'class'] });
  }
}

setzeGruss();
Lektionen.uebergang();
zeigeStart();
Woerterbuch.laden().then(() => {
  if (!el('screen-woerterbuch').hidden) { zeigeSuchHinweis(); suchen(); }
});
Speicher.dauerhaftAnfragen();

// Service Worker anmelden: damit läuft die App auch ohne Internet.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((fehler) => {
      console.warn('Offline-Modus nicht verfügbar:', fehler);
    });
  });
}
