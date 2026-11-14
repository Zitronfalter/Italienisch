// Speicher: Lernstand und eigene Texte bleiben nur auf diesem Gerät
// (im Browser-Speicher "localStorage"). Sichern/Laden macht daraus eine Datei.

const Speicher = (() => {
  const SCHLUESSEL = 'italienisch-daten';
  const KENNUNG = 'italienisch-app';   // steht in jeder Sicherungsdatei
  const FORMAT = 2;                     // erhöhen, wenn sich der Aufbau ändert (2: Lektionen)

  function leer() {
    return {
      kennung: KENNUNG,
      format: FORMAT,
      karten: {},          // Vokabeln mit Karteikasten-Fach (kommt in Schritt 3)
      eigeneTexte: [],     // eingefügte Texte (Schritt 8)
      eigeneWoerter: {},   // selbst eingetragene Bedeutungen (Schritt 8)
      fortschritt: {},     // gelesene Texte, Tests usw. (Schritt 9)
      zuletztGesichert: null,
    };
  }

  let daten = laden();

  function laden() {
    try {
      const roh = localStorage.getItem(SCHLUESSEL);
      if (!roh) return leer();
      return { ...leer(), ...JSON.parse(roh) };
    } catch (fehler) {
      console.warn('Speicher nicht lesbar:', fehler);
      return leer();
    }
  }

  function speichern() {
    try {
      localStorage.setItem(SCHLUESSEL, JSON.stringify(daten));
      return true;
    } catch (fehler) {
      console.warn('Speichern fehlgeschlagen:', fehler);
      return false;
    }
  }

  // Den Browser bitten, die Daten nicht von selbst zu löschen.
  function dauerhaftAnfragen() {
    if (navigator.storage && navigator.storage.persist) {
      navigator.storage.persist().catch(() => {});
    }
  }

  function heute() {
    return new Date().toISOString().slice(0, 10);   // z. B. 2026-11-10
  }

  // Sichern: Datei erzeugen und dem iPhone übergeben (Teilen → „In Dateien sichern“).
  async function sichern() {
    daten.zuletztGesichert = new Date().toISOString();
    speichern();
    const name = 'italienisch-sicherung-' + heute() + '.json';
    const inhalt = JSON.stringify(daten, null, 2);
    const datei = new File([inhalt], name, { type: 'application/json' });

    // iPhone: Teilen-Menü öffnen, dort „In Dateien sichern“ → iCloud Drive
    if (navigator.canShare && navigator.canShare({ files: [datei] })) {
      try {
        await navigator.share({ files: [datei], title: name });
        return 'geteilt';
      } catch (fehler) {
        if (fehler.name === 'AbortError') return 'abgebrochen';
        // sonst unten mit Herunterladen weitermachen
      }
    }

    // Sonst: normal herunterladen
    const url = URL.createObjectURL(datei);
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    return 'heruntergeladen';
  }

  // Laden: Sicherungsdatei prüfen und den Stand ersetzen.
  async function ausDateiLaden(datei) {
    const text = await datei.text();
    let neu;
    try {
      neu = JSON.parse(text);
    } catch {
      throw new Error('Die Datei ist keine Sicherung dieser App.');
    }
    if (!neu || neu.kennung !== KENNUNG) {
      throw new Error('Die Datei ist keine Sicherung dieser App.');
    }
    if (neu.format > FORMAT) {
      throw new Error('Die Sicherung ist von einer neueren App-Version. Bitte App erst aktualisieren.');
    }
    daten = { ...leer(), ...neu };
    speichern();
  }

  return {
    get daten() { return daten; },
    speichern,
    sichern,
    ausDateiLaden,
    dauerhaftAnfragen,
  };
})();
