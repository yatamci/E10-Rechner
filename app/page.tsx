'use client';

import { useState } from 'react';
import './e10-styles.css';

export default function Home() {
  const [verbrauch, setVerbrauch] = useState(6.80);
  const [preis95, setPreis95] = useState(1.689);
  const [preisE10, setPreisE10] = useState(1.639);
  const [strecke, setStrecke] = useState(30);

  const kosten95 = +(verbrauch * preis95 * strecke / 100).toFixed(2);
  const kostenE10 = +(verbrauch * preisE10 * strecke / 100).toFixed(2);
  const differenz = +(kosten95 - kostenE10).toFixed(2);
  const diffProzent = ((preis95 - preisE10) / preis95) * 100;
  const spritVerbrauch = +(strecke * verbrauch / 100).toFixed(2);

  let ergebnis = '';
  let ergebnisFarbe = '';
  
  if (diffProzent >= 5) {
    ergebnis = 'E10 lohnt sich sehr!';
    ergebnisFarbe = 'ergebnis-blau';
  } else if (diffProzent >= 2) {
    ergebnis = 'E10 lohnt sich!';
    ergebnisFarbe = 'ergebnis-gruen';
  } else if (diffProzent >= 0) {
    ergebnis = 'E10 lohnt sich nicht wirklich.';
    ergebnisFarbe = 'ergebnis-gelb';
  } else {
    ergebnis = 'E10 lohnt sich nicht!';
    ergebnisFarbe = 'ergebnis-rot';
  }

  return (
    <div className="e10-container">
      <h1 className="e10-title">E10-Rechner</h1>
      
      <div className="e10-input-group">
        <label>Verbrauch pro 100 km (L)</label>
        <input
          type="number"
          step="0.01"
          value={verbrauch}
          onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div className="e10-input-group">
        <label>Super 95 Preis (€/L)</label>
        <input
          type="number"
          step="0.001"
          value={preis95}
          onChange={(e) => setPreis95(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div className="e10-input-group">
        <label>Super E10 Preis (€/L)</label>
        <input
          type="number"
          step="0.001"
          value={preisE10}
          onChange={(e) => setPreisE10(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div className={`e10-result-box ${ergebnisFarbe}`}>
        {ergebnis}
      </div>

      <hr className="e10-divider" />

      <div className="e10-input-group">
        <label>Strecke (km)</label>
        <input
          type="number"
          value={strecke}
          onChange={(e) => setStrecke(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div className="e10-results">
        <div className="e10-spritverbrauch">
          Verbrauch an Sprit: {spritVerbrauch} L
        </div>
        <div>Kosten mit Super 95: {kosten95.toFixed(2).replace('.', ',')} €</div>
        <div>Kosten mit Super E10: {kostenE10.toFixed(2).replace('.', ',')} €</div>
        <div className="e10-savings">
          {differenz > 0
            ? `Ersparnis mit Super E10: ${differenz.toFixed(2).replace('.', ',')} €`
            : differenz < 0
            ? `Mehrkosten mit Super E10: ${Math.abs(differenz).toFixed(2).replace('.', ',')} €`
            : 'Kein Unterschied bei den Kosten.'}
        </div>
      </div>
    </div>
  );
}
