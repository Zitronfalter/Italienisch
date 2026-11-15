// Limo: der Begleiter – eine kleine Zitrone, die aufrecht steht.
// Oben wachsen zwei Blätter direkt aus der Zitrone, dazwischen ragt der Stiel – sein Haarschopf.
//
// Limo.svg(stimmung) gibt ein SVG als Text zurück (kein Bild nötig, offline, scharf auf dem iPhone).
// Stimmungen: winkt, freut, denkt, ruhig, ueberrascht, liest, jubelt, mut, hoert, schlaeft
// Regeln: nie traurig, kein Druck. Nach Fehlern: ruhig oder mut.
//
// Linien, die neben Limo liegen (Arme, Füße, Zeichen), nehmen „currentColor“ –
// so sind sie auch im dunklen Modus zu sehen (Farbe: --limo-tinte in style.css).

const Limo = (() => {
  const TINTE = '#2B2620';          // Linien auf der Zitrone
  const AUSSEN = 'currentColor';     // Linien außerhalb (Arme, Füße …)
  const GELB = '#F5CF45';
  const GLANZ = '#FFF2B0';
  const PORE = '#D9A92A';
  const BLATT = '#7FA653';
  const BLATT2 = '#6E9A48';
  const STIEL = '#6B4A2B';
  const BACKE = '#EF8E6E';

  const KOERPER = 'M100 34 C 104 38, 108 42, 112 46 C 146 54, 166 86, 166 122 C 166 158, 142 186, 108 192 C 105 197, 103 200, 100 204 C 97 200, 95 197, 92 192 C 58 186, 34 158, 34 122 C 34 86, 54 54, 88 46 C 92 42, 96 38, 100 34 Z';
  const BLATT_R = 'M102 37 C 109 21, 128 13, 150 19 C 144 37, 122 45, 102 37 Z';
  const BLATT_L = 'M98 37 C 89 23, 72 19, 58 25 C 66 39, 86 43, 98 37 Z';

  let zaehler = 0;

  const strich = (d, breite = 4.5, farbe = AUSSEN) =>
    `<path d="${d}" stroke="${farbe}" stroke-width="${breite}" fill="none" stroke-linecap="round" stroke-linejoin="round"/>`;

  function grund() {
    return `
      <ellipse cx="100" cy="214" rx="46" ry="6" fill="${AUSSEN}" opacity="0.12"/>
      ${strich('M88 186 L85 206')}${strich('M112 186 L115 206')}
      <ellipse cx="80" cy="208" rx="8" ry="4" fill="${AUSSEN}"/>
      <ellipse cx="120" cy="208" rx="8" ry="4" fill="${AUSSEN}"/>
      <path d="${KOERPER}" fill="${GELB}" transform="translate(4 4)"/>
      ${strich('M56 92 Q62 74 78 64', 5.5, GLANZ)}
      <circle cx="140" cy="80" r="1.6" fill="${PORE}"/><circle cx="150" cy="100" r="1.4" fill="${PORE}"/>
      <circle cx="56" cy="150" r="1.6" fill="${PORE}"/><circle cx="138" cy="168" r="1.4" fill="${PORE}"/>
      <circle cx="50" cy="118" r="1.3" fill="${PORE}"/><circle cx="120" cy="70" r="1.3" fill="${PORE}"/>
      <path d="${KOERPER}" fill="none" stroke="${TINTE}" stroke-width="3.4" stroke-linejoin="round"/>
      <path d="${BLATT_L}" fill="${BLATT2}" transform="translate(3 3)"/>
      <path d="${BLATT_L}" fill="none" stroke="${TINTE}" stroke-width="3" stroke-linejoin="round"/>
      ${strich('M96 35 C 88 29, 76 26, 64 27', 1.6, TINTE)}
      <path d="${BLATT_R}" fill="${BLATT}" transform="translate(3 3)"/>
      <path d="${BLATT_R}" fill="none" stroke="${TINTE}" stroke-width="3" stroke-linejoin="round"/>
      ${strich('M104 35 C 115 27, 128 22, 144 21', 1.6, TINTE)}
      ${strich('M100 40 C 99 30, 100 20, 103 10', 5.5, STIEL)}
      ${strich('M103 10 L107 7', 4, STIEL)}`;
  }

  const augen = () => `
      <circle cx="84" cy="112" r="6.5" fill="${TINTE}"/><circle cx="86" cy="109.5" r="2" fill="#FFFFFF"/>
      <circle cx="116" cy="111" r="6.5" fill="${TINTE}"/><circle cx="118" cy="108.5" r="2" fill="#FFFFFF"/>`;
  const froh = (dy = 0) =>
    strich(`M76 ${112 + dy} Q84 ${103 + dy} 92 ${112 + dy}`, 4, TINTE) + strich(`M108 ${111 + dy} Q116 ${102 + dy} 124 ${111 + dy}`, 4, TINTE);
  const zu = (dy = 0) =>
    strich(`M76 ${110 + dy} Q84 ${117 + dy} 92 ${110 + dy}`, 4, TINTE) + strich(`M108 ${109 + dy} Q116 ${116 + dy} 124 ${109 + dy}`, 4, TINTE);
  const backen = (d) => `
      <ellipse cx="68" cy="130" rx="8.5" ry="4.5" fill="${BACKE}" opacity="${d}"/>
      <ellipse cx="132" cy="129" rx="8.5" ry="4.5" fill="${BACKE}" opacity="${d}"/>`;
  const armeUnten = strich('M36 140 Q22 156 24 172') + strich('M164 140 Q178 156 176 172');

  const STIMMUNGEN = {
    winkt: {
      vorne: strich('M36 140 Q22 156 24 172') + strich('M164 136 Q184 118 182 92')
        + strich('M190 80 Q196 86 192 94', 2.6, BLATT) + strich('M172 78 Q176 70 184 70', 2.6, BLATT)
        + augen() + backen(0.55) + strich('M91 128 Q100 138 110 127', 4, TINTE),
    },
    freut: {
      vorne: armeUnten + froh() + backen(0.7) + strich('M87 125 Q100 143 114 124', 4, TINTE),
    },
    denkt: {
      hinten: `<circle cx="44" cy="62" r="4" fill="none" stroke="${AUSSEN}" stroke-width="2"/>
        <circle cx="30" cy="46" r="6" fill="none" stroke="${AUSSEN}" stroke-width="2"/>
        <circle cx="16" cy="24" r="10" fill="none" stroke="${AUSSEN}" stroke-width="2"/>`,
      vorne: strich('M36 140 Q22 156 24 172') + strich('M164 142 Q150 164 116 150')
        + `<circle cx="82" cy="107" r="6.5" fill="${TINTE}"/><circle cx="80" cy="104" r="2" fill="#FFFFFF"/>
           <circle cx="114" cy="106" r="6.5" fill="${TINTE}"/><circle cx="112" cy="103" r="2" fill="#FFFFFF"/>`
        + strich('M73 93 L90 91', 3.2, TINTE) + strich('M106 87 L123 92', 3.2, TINTE)
        + strich('M93 131 Q100 128 108 132', 4, TINTE),
    },
    ruhig: {
      vorne: armeUnten + zu() + backen(0.45) + strich('M93 129 Q100 135 108 129', 4, TINTE),
    },
    ueberrascht: {
      hinten: strich('M34 44 L40 64', 4) + `<circle cx="42" cy="74" r="2.6" fill="${AUSSEN}"/>`,
      vorne: strich('M36 136 Q20 132 14 118') + strich('M164 136 Q180 132 186 118')
        + `<circle cx="84" cy="112" r="8.5" fill="#FFFDF6" stroke="${TINTE}" stroke-width="3"/><circle cx="84" cy="113" r="4" fill="${TINTE}"/>
           <circle cx="116" cy="111" r="8.5" fill="#FFFDF6" stroke="${TINTE}" stroke-width="3"/><circle cx="116" cy="112" r="4" fill="${TINTE}"/>`
        + strich('M74 95 Q82 89 91 93', 3.2, TINTE) + strich('M108 92 Q117 87 125 92', 3.2, TINTE)
        + `<ellipse cx="100" cy="136" rx="6" ry="7.5" fill="${TINTE}"/>`,
    },
    liest: {
      vorne: `
        <path d="M60 150 L100 158 L100 194 L60 186 Z" fill="#C8573B" transform="translate(3 2)"/>
        <path d="M140 150 L100 158 L100 194 L140 186 Z" fill="#C8573B" transform="translate(3 2)"/>
        <path d="M64 152 L100 159 L100 190 L64 183 Z" fill="#FFFDF6" stroke="${TINTE}" stroke-width="2.6" stroke-linejoin="round"/>
        <path d="M136 152 L100 159 L100 190 L136 183 Z" fill="#FFFDF6" stroke="${TINTE}" stroke-width="2.6" stroke-linejoin="round"/>`
        + strich('M70 163 L94 167 M70 171 L94 175 M106 167 L130 163 M106 175 L130 171', 2, '#B9AE9B')
        + strich('M38 140 Q50 160 64 164') + strich('M162 140 Q150 160 136 164')
        + zu(6) + backen(0.5) + strich('M94 134 Q100 138 106 134', 3.6, TINTE),
    },
    jubelt: {
      hinten: strich('M24 64 L32 72 M32 64 L24 72', 3, BLATT) + `<circle cx="182" cy="160" r="3.5" fill="${BACKE}"/>`
        + strich('M168 44 l6 -6 l6 6', 3, BACKE) + `<circle cx="16" cy="160" r="3.5" fill="${BLATT}"/>`,
      vorne: strich('M38 112 Q20 96 20 70') + strich('M162 112 Q180 96 180 70')
        + froh(1) + backen(0.7)
        + `<path d="M87 125 Q100 150 114 124 Z" fill="${TINTE}" stroke="${TINTE}" stroke-width="3" stroke-linejoin="round"/>
           <ellipse cx="100" cy="137" rx="5.5" ry="3.5" fill="#E86C4E"/>`,
    },
    // macht Mut (Daumen hoch) – nach Fehlern
    mut: {
      vorne: strich('M36 140 Q22 156 24 172') + strich('M164 140 Q182 132 184 114')
        + `<rect x="176" y="102" width="17" height="15" rx="6" fill="${GELB}" stroke="${AUSSEN}" stroke-width="3.4"/>`
        + strich('M182 102 L182 89', 4.5)
        + strich('M75 97 Q83 93 91 96', 3.2, TINTE) + strich('M109 95 Q117 92 125 96', 3.2, TINTE)
        + augen() + backen(0.55) + strich('M90 127 Q100 136 110 126', 4, TINTE),
    },
    // hört zu (Hören & Üben)
    hoert: {
      hinten: strich('M176 70 L176 52 L188 48 L188 66', 3, AUSSEN) + `<circle cx="172" cy="71" r="4.5" fill="${AUSSEN}"/><circle cx="184" cy="67" r="4.5" fill="${AUSSEN}"/>`
        + strich('M18 84 L18 70 L28 67', 3, AUSSEN) + `<circle cx="14" cy="85" r="4" fill="${AUSSEN}"/>`,
      vorne: strich('M36 140 Q22 156 24 172') + strich('M164 138 Q178 126 168 108')
        + `<ellipse cx="164" cy="110" rx="6" ry="9" fill="${GELB}" stroke="${TINTE}" stroke-width="2.6"/>`
        + zu() + backen(0.55) + strich('M92 127 Q100 134 109 126', 4, TINTE),
    },
    // schläft / A domani
    schlaeft: {
      hinten: `<text x="146" y="64" font-family="Georgia, serif" font-size="20" font-weight="700" fill="${AUSSEN}">z</text>
        <text x="162" y="44" font-family="Georgia, serif" font-size="27" font-weight="700" fill="${AUSSEN}">z</text>`,
      vorne: armeUnten + zu(2) + backen(0.4) + `<ellipse cx="100" cy="133" rx="4.5" ry="5.5" fill="${TINTE}"/>`,
    },
  };

  const NAMEN = Object.keys(STIMMUNGEN);

  // klasse: CSS-Klasse am <svg>; label: Text für Screenreader (leer = nur Schmuck)
  function svg(stimmung, optionen = {}) {
    const s = STIMMUNGEN[stimmung] || STIMMUNGEN.ruhig;
    const id = 'limo-strich-' + (++zaehler);
    const aria = optionen.label ? `role="img" aria-label="${optionen.label}"` : 'aria-hidden="true"';
    return `<svg class="${optionen.klasse || 'limo'}" viewBox="0 -12 200 234" ${aria}>
      <defs><filter id="${id}" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="11" result="r"/>
        <feDisplacementMap in="SourceGraphic" in2="r" scale="3.2"/>
      </filter></defs>
      <g filter="url(#${id})">${s.hinten || ''}${grund()}${s.vorne}</g>
    </svg>`;
  }

  return { svg, NAMEN };
})();
