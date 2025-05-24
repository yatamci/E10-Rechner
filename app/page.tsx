'use client';

import { useState } from 'react';

export default function Home() {
  const [verbrauch, setVerbrauch] = useState(6.8);
  const [preis95, setPreis95] = useState(1.689);
  const [preisE10, setPreisE10] = useState(1.639);
  const [strecke, setStrecke] = useState(30);

  const kosten95 = +(verbrauch * preis95 * strecke / 100).toFixed(2);
  const kostenE10 = +(verbrauch * preisE10 * strecke / 100).toFixed(2);
  const differenz = +(kosten95 - kostenE10).toFixed(2);
  const diffProzent = ((preis95 - preisE10) / preis95) * 100;

  let ergebnis = '';
  if (diffProzent >= 2) {
    ergebnis = 'E10 lohnt sich.';
  } else if (diffProzent >= 0) {
    ergebnis = 'E10 lohnt sich nicht wirklich.';
  } else {
    ergebnis = 'E10 ist teurer als Super 95.';
  }

  const formatEuro = (wert: number) => wert.toFixed(2).replace('.', ',');

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <h1 className="text-4xl font-bold mb-8">E10-Rechner</h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex flex-col">
          <label className="mb-1">Verbrauch pro 100 km (L):</label>
          <input
            type="number"
            step="0.1"
            value={verbrauch}
            onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Super 95 Preis (€/L):</label>
          <input
            type="number"
            step="0.001"
            value={preis95}
            onChange={(e) => setPreis95(parseFloat(e.target.value))}
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1">Super E10 Preis (€/L):</label>
          <input
            type="number"
            step="0.001"
            value={preisE10}
            onChange={(e) => setPreisE10(parseFloat(e.target.value))}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-6 mb-2 text-center">{ergebnis}</div>

      <hr className="w-full my-6" />

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div className="flex flex-col">
          <label className="mb-1">Strecke (km):</label>
          <input
            type="number"
            value={strecke}
            onChange={(e) => setStrecke(parseFloat(e.target.value))}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-6 space-y-1 text-center">
        <div>Kosten mit Super 95: {formatEuro(kosten95)} €</div>
        <div>Kosten mit Super E10: {formatEuro(kostenE10)} €</div>
        <div>
          {differenz > 0
            ? `Ersparnis mit E10: ${formatEuro(differenz)} €`
            : differenz < 0
            ? `Mehrkosten mit E10: ${formatEuro(Math.abs(differenz))} €`
            : 'Kein Unterschied bei den Kosten.'}
        </div>
      </div>
    </main>
  );
}
