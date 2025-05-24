'use client';

import { useState } from 'react';

export default function Home() {
  const [verbrauch, setVerbrauch] = useState(6.80);
  const [preis95, setPreis95] = useState(1.689);
  const [preisE10, setPreisE10] = useState(1.639);
  const [strecke, setStrecke] = useState(30);

  const kosten95 = +(verbrauch * preis95 * strecke / 100).toFixed(2);
  const kostenE10 = +(verbrauch * preisE10 * strecke / 100).toFixed(2);
  const differenz = +(kosten95 - kostenE10).toFixed(2);
  const diffProzent = ((preis95 - preisE10) / preis95) * 100;

  let ergebnis = '';
  if (diffProzent >= 2) {
    ergebnis = 'E10 lohnt sich!';
  } else if (diffProzent >= 0) {
    ergebnis = 'E10 lohnt sich nicht wirklich.';
  } else {
    ergebnis = 'E10 ist teurer als Super 95!';
  }

      <label className="mb-1">Verbrauch pro 100 km (L)</label>
      <input
        type="number"
        step="0.01"
        value={verbrauch}
        onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
        className="mb-4 p-2 border rounded w-40"
      />

      <label className="mb-1">Super 95 Preis (€/L)</label>
      <input
        type="number"
        step="0.001"
        value={preis95}
        onChange={(e) => setPreis95(parseFloat(e.target.value))}
        className="mb-4 p-2 border rounded w-40"
      />

      <label className="mb-1">Super E10 Preis (€/L)</label>
      <input
        type="number"
        step="0.001"
        value={preisE10}
        onChange={(e) => setPreisE10(parseFloat(e.target.value))}
        className="mb-6 p-2 border rounded w-40"
      />

      <div className="mb-2">{ergebnis}</div>

      <hr className="w-full my-6" />

      <label className="mb-1">Strecke (km)</label>
      <input
        type="number"
        value={strecke}
        onChange={(e) => setStrecke(parseFloat(e.target.value))}
        className="mb-4 p-2 border rounded w-40"
      />

      <div className="mb-1">Kosten mit Super 95: {kosten95.toFixed(2)} €</div>
      <div className="mb-1">Kosten mit Super E10: {kostenE10.toFixed(2)} €</div>
      <div>
        {differenz > 0
          ? `Ersparnis mit Super E10: ${differenz.toFixed(2)} €`
          : differenz < 0
          ? `Mehrkosten mit Super E10: ${Math.abs(differenz).toFixed(2)} €`
          : 'Kein Unterschied bei den Kosten.'}
      </div>
    </main>
  );
}
