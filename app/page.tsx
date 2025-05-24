'use client';

import { useState } from 'react';
import './styles.css'; // Neue CSS-Datei

export default function Home() {
  // [Behalten Sie Ihren bestehenden State bei]
  
  return (
    <div className="e10-container">
      <h1>E10-Rechner</h1>
      
      <div>
        <label>Verbrauch pro 100 km (L)</label>
        <input
          type="number"
          step="0.01"
          value={verbrauch}
          onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div>
        <label>Super 95 Preis (€/L)</label>
        <input
          type="number"
          step="0.001"
          value={preis95}
          onChange={(e) => setPreis95(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div>
        <label>Super E10 Preis (€/L)</label>
        <input
          type="number"
          step="0.001"
          value={preisE10}
          onChange={(e) => setPreisE10(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div className="e10-result">{ergebnis}</div>

      <hr className="e10-divider" />

      <div>
        <label>Strecke (km)</label>
        <input
          type="number"
          value={strecke}
          onChange={(e) => setStrecke(parseFloat(e.target.value))}
          className="e10-input"
        />
      </div>

      <div className="e10-results">
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
