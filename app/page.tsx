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

  return (
    <main className="font-sans max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">E10-Rechner</h1>
      
      <div className="space-y-4">
        {/* Verbrauch */}
        <div>
          <label className="block mb-1">Verbrauch pro 100 km (L)</label>
          <input
            type="number"
            step="0.01"
            value={verbrauch}
            onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
            className="p-2 border rounded w-full bg-gray-100"
          />
        </div>

        {/* Super 95 Preis */}
        <div>
          <label className="block mb-1">Super 95 Preis (€/L)</label>
          <input
            type="number"
            step="0.001"
            value={preis95}
            onChange={(e) => setPreis95(parseFloat(e.target.value))}
            className="p-2 border rounded w-full bg-gray-100"
          />
        </div>

        {/* E10 Preis */}
        <div>
          <label className="block mb-1">Super E10 Preis (€/L)</label>
          <input
            type="number"
            step="0.001"
            value={preisE10}
            onChange={(e) => setPreisE10(parseFloat(e.target.value))}
            className="p-2 border rounded w-full bg-gray-100"
          />
        </div>

        {/* Ergebnis */}
        <div className="py-4 text-center">
          <div className="text-lg font-medium">{ergebnis}</div>
        </div>

        {/* Horizontale Linie */}
        <hr className="my-4 border-gray-300" />

        {/* Strecke */}
        <div>
          <label className="block mb-1">Strecke (km)</label>
          <input
            type="number"
            value={strecke}
            onChange={(e) => setStrecke(parseFloat(e.target.value))}
            className="p-2 border rounded w-full bg-gray-100"
          />
        </div>

        {/* Ergebnisse */}
        <div className="space-y-2 mt-4">
          <div className="text-center">Kosten mit Super 95: {kosten95.toFixed(2).replace('.', ',')} €</div>
          <div className="text-center">Kosten mit Super E10: {kostenE10.toFixed(2).replace('.', ',')} €</div>
          <div className="font-medium text-center">
            {differenz > 0
              ? `Ersparnis mit Super E10: ${differenz.toFixed(2).replace('.', ',')} €`
              : differenz < 0
              ? `Mehrkosten mit Super E10: ${Math.abs(differenz).toFixed(2).replace('.', ',')} €`
              : 'Kein Unterschied bei den Kosten.'}
          </div>
        </div>
      </div>
    </main>
  );
}
