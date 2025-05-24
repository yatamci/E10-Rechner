'use client';

import { useState } from 'react';

export default function Home() {
  // [Behalten Sie Ihren bestehenden State und Berechnungen bei]
  
  return (
    <div className="e10-container">
      <h1 className="e10-title">E10-Rechner</h1>
      
      <div className="e10-form-group">
        <label>Verbrauch pro 100 km (L)</label>
        <input
          type="number"
          step="0.01"
          value={verbrauch}
          onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
        />
      </div>

      {/* [Behalten Sie alle Ihre bestehenden Input-Gruppen bei] */}

      <div className="e10-result-box">
        {ergebnis}
      </div>

      <hr className="e10-divider" />

      {/* [Behalten Sie die restlichen Elemente bei] */}

      <div className="e10-form-group">
        <label>Strecke (km)</label>
        <input
          type="number"
          value={strecke}
          onChange={(e) => setStrecke(parseFloat(e.target.value))}
        />
      </div>

      <div>
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
