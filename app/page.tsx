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

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <h1 className="text-4xl font-bold mb-8">E10-Rechner</h1>

      <div className="w-full max-w-xs flex flex-col mb-4">
        <label htmlFor="verbrauch" className="block mb-1">
          Verbrauch pro 100 km (L):
        </label>
        <input
          id="verbrauch"
          type="number"
          step="0.1"
          value={verbrauch}
          onChange={(e) => setVerbrauch(parseFloat(e.target.value))}
          className="p-2 border rounded"
        />
      </div>

      <div className="w-full max-w-xs flex flex-col mb-4">
        <label htmlFor="preis95" className="block mb-1">
          Super 95 Preis (€/L):
        </label>
        <input
          id="preis95"
          type="number"
          step="0.001"
          value={preis95}
          onChange={(e) => setPreis95(parseFloat(e.target.value))}
          className="p-2 border rounded"
        />
      </div>

      <div className="w-full max-w-xs flex flex-col mb-4">
        <label htmlFor="preisE10" className="block mb-1">
          Super E10 Preis (€/L):
        </label>
        <input
          id="preisE10"
          type="number"
          step="0.001"
          value={preisE10}
          onChange={(e) => setPreisE10(parseFloat(e.target.value))}
          className="p-2 border rounded"
        />
      
</div>

      <div className="mt-6 mb-2 text-center">
        {ergebnis}
      </div>

      <hr className="w-full my-6" />
    </main>
  );
}

      <div className="w-full max-w-xs flex flex-col mb-4">
        <label htmlFor="strecke" className="block mb-1">
          Strecke (km):
        </label>
        <input
          id="strecke"
          type="number"
          value={strecke}
          onChange={(e) => setStrecke(parseFloat(e.target.value))}
          className="p-2 border rounded"
        />
      </div>

      <div className="mb-1">
        Kosten mit Super 95: {kosten95.toFixed(2).replace('.', ',')} €
      </div>
      <div className="mb-1">
        Kosten mit Super E10: {kostenE10.toFixed(2).replace('.', ',')} €
      </div>
      <div>
        {differenz > 0
          ? `Ersparnis mit E10: ${differenz.toFixed(2).replace('.', ',')} €`
          : differenz < 0
          ? `Mehrkosten mit E10: ${Math.abs(differenz).toFixed(2).replace('.', ',')} €`
          : 'Kein Unterschied bei den Kosten.'}
      </div>
    </main>
  );
}
