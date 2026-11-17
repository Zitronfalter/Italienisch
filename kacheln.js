// Kacheln: Wörter antippen oder mit dem Finger ziehen – überall gleich
// (Runde, Grammatik, Hören & Üben, gemischte Aufgaben).
//   Antippen im Vorrat → hinten anlegen; gelegte Kachel antippen → zurück in den Vorrat.
//   Ziehen (ab ZIEH_AB Pixeln): gelegte Kachel an eine andere Stelle, Vorrat-Kachel direkt an eine Stelle.
//   Außerhalb der Ablage loslassen: gelegte Kachel geht zurück, Vorrat-Kachel bleibt.
// Geprüft wird weiter über die Reihenfolge der .kachel-Knöpfe in der Ablage.

const Kacheln = (() => {
  const ZIEH_AB = 8;
  const RAND = 12;          // so viel Pixel um die Ablage herum zählen noch als „in der Ablage“

  // Vor welcher Kachel wird eingefügt? rects: Rechtecke der gelegten Kacheln in Lesereihenfolge.
  // Erste Kachel in einer späteren Zeile oder in derselben Zeile rechts vom Finger (Mitte) – sonst ans Ende.
  function einfuegeStelle(rects, x, y) {
    for (let i = 0; i < rects.length; i++) {
      const r = rects[i];
      if (y < r.top) return i;
      if (y <= r.bottom && x < (r.left + r.right) / 2) return i;
    }
    return rects.length;
  }

  // ---------- Aufbau und Tippen ----------

  let klickSperreBis = 0;   // nach einem Ziehen den nachfolgenden „Klick“ nicht als Tippen werten
  const verschlucken = () => Date.now() < klickSperreBis;

  function knopf(wort) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'kachel';
    b.textContent = wort;
    return b;
  }

  // Vorrat neu füllen, Ablage leeren. gesperrt(): true nach dem Prüfen – dann geht nichts mehr.
  function fuellen(vorrat, ablage, woerter, gesperrt) {
    ablage.innerHTML = '';
    ablage.classList.remove('fertig');
    vorrat.innerHTML = '';
    for (const wort of woerter) {
      const quelle = knopf(wort);
      quelle.addEventListener('click', () => {
        if (verschlucken() || gesperrt() || quelle.classList.contains('benutzt')) return;
        legen(quelle, ablage, gesperrt, null);
      });
      ziehbar(quelle, { quelle, ablage, gesperrt, gelegt: false });
      vorrat.appendChild(quelle);
    }
  }

  // Kachel aus dem Vorrat in die Ablage legen (vor: Element, vor dem sie landet; null = hinten)
  function legen(quelle, ablage, gesperrt, vor) {
    quelle.classList.add('benutzt');
    const gelegt = knopf(quelle.textContent);
    gelegt.addEventListener('click', () => {
      if (verschlucken() || gesperrt()) return;
      zurueck(gelegt, quelle);
    });
    ziehbar(gelegt, { quelle, ablage, gesperrt, gelegt: true });
    ablage.insertBefore(gelegt, vor);
    return gelegt;
  }

  function zurueck(gelegt, quelle) {
    gelegt.remove();
    quelle.classList.remove('benutzt');
  }

  // ---------- Ziehen ----------

  let laufend = null;       // { el, info, id, x0, y0, zieht, schwebe, luecke }

  function ziehbar(el, info) {
    el.addEventListener('pointerdown', (e) => {
      if (info.gesperrt() || el.classList.contains('benutzt') || e.button > 0) return;
      // Altes Ziehen ohne Loslassen (App im Hintergrund, Maus außerhalb losgelassen) → abbrechen statt hängen
      if (laufend) {
        if (!e.isPrimary) return;                 // zweiter Finger: ignorieren
        ende({ pointerId: laufend.id }, true);
      }
      laufend = { el, info, id: e.pointerId, x0: e.clientX, y0: e.clientY, zieht: false };
      window.addEventListener('pointermove', bewegen, { passive: false });
      window.addEventListener('pointerup', loslassen);
      window.addEventListener('pointercancel', abbrechen);
    });
  }

  function bewegen(e) {
    const l = laufend;
    if (!l || e.pointerId !== l.id) return;
    if (e.pointerType === 'mouse' && e.buttons === 0) { ende(e, true); return; }   // Maustaste schon los
    if (!l.zieht) {
      if (Math.hypot(e.clientX - l.x0, e.clientY - l.y0) < ZIEH_AB) return;
      l.zieht = true;
      l.schwebe = knopf(l.el.textContent);
      l.schwebe.classList.add('kachel-schwebt');
      l.schwebe.lang = l.info.ablage.lang || '';
      l.schwebe.tabIndex = -1;
      document.body.appendChild(l.schwebe);
      l.luecke = document.createElement('span');
      l.luecke.className = 'kachel-luecke';
      if (l.info.gelegt) l.el.classList.add('kachel-gezogen');
    }
    e.preventDefault();
    l.schwebe.style.left = e.clientX + 'px';
    l.schwebe.style.top = e.clientY + 'px';
    lueckeSetzen(l, e.clientX, e.clientY);
  }

  // Lücke an die Stelle setzen, wo die Kachel landen würde – nur, wenn der Finger über der Ablage ist
  function lueckeSetzen(l, x, y) {
    const ablage = l.info.ablage;
    const r = ablage.getBoundingClientRect();
    const drin = x >= r.left - RAND && x <= r.right + RAND && y >= r.top - RAND && y <= r.bottom + RAND;
    if (!drin) { l.luecke.remove(); return; }
    // Gemessen wird ohne die Lücke: Sonst schiebt die Lücke die Kacheln weg, und die Stelle
    // springt am Zeilenende zwischen zwei Möglichkeiten hin und her.
    const vorher = l.luecke.nextElementSibling;
    const warDrin = l.luecke.parentNode === ablage;
    l.luecke.remove();
    const kacheln = [...ablage.querySelectorAll('.kachel:not(.kachel-gezogen)')];
    const i = einfuegeStelle(kacheln.map((k) => k.getBoundingClientRect()), x, y);
    if (warDrin) ablage.insertBefore(l.luecke, vorher);
    const vor = kacheln[i] || null;
    if (l.luecke.parentNode !== ablage || l.luecke.nextElementSibling !== vor) ablage.insertBefore(l.luecke, vor);
  }

  function ende(e, abbruch) {
    const l = laufend;
    if (!l || e.pointerId !== l.id) return;
    laufend = null;
    window.removeEventListener('pointermove', bewegen);
    window.removeEventListener('pointerup', loslassen);
    window.removeEventListener('pointercancel', abbrechen);
    if (!l.zieht) return;                       // war nur ein Tippen – das erledigt „click“
    klickSperreBis = Date.now() + 400;
    const { ablage, quelle, gesperrt, gelegt } = l.info;
    l.schwebe.remove();
    l.el.classList.remove('kachel-gezogen');
    // Seite inzwischen neu gefüllt (z. B. zweiter Finger auf „Prüfen“)? Dann nichts mehr ändern.
    if (!quelle.isConnected || (gelegt && !l.el.isConnected)) abbruch = true;
    const hinein = !abbruch && !gesperrt() && l.luecke.parentNode === ablage;
    if (hinein) {
      if (gelegt) ablage.insertBefore(l.el, l.luecke);
      else legen(quelle, ablage, gesperrt, l.luecke);
    } else if (!abbruch && gelegt && !gesperrt()) {
      zurueck(l.el, quelle);
    }
    l.luecke.remove();
  }
  const loslassen = (e) => ende(e, false);
  const abbrechen = (e) => ende(e, true);
  // App geht in den Hintergrund: laufendes Ziehen abbrechen
  if (typeof document !== 'undefined' && document.addEventListener) {
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && laufend) ende({ pointerId: laufend.id }, true);
    });
  }

  return { einfuegeStelle, fuellen, ZIEH_AB };
})();
