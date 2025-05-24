"use client";

import { useState } from "react";

export default function Home() {
  const [verbrauch95, setVerbrauch95] = useState("6.8");
  const [preis95, setPreis95] = useState("1.689");
  const [preisE10, setPreisE10] = useState("1.639");
  const [strecke, setStrecke] = useState("30");

  const v95 = parseFloat(verbrauch95);
  const p95 = parseFloat(preis95);
  const pE10 = parseFloat(preisE10);
  const km = parseFloat(strecke);

  const ersparnisPro100km = (v95 * (p95 - pE10)).toFixed(2);
  const lohntSich = pE10 < p95 ? "Ja, E10 lohnt sich!" : "Nein, E10 lohnt sich nicht.";
  const kosten95 = ((km / 100) * v95 * p95).toFixed(2);
  const kostenE10 = ((km / 100) * v95 * pE10).toFixed(2);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 space-y-8">
      <h1 className="text-2xl font-bold">E10-Rechner</h1>

      <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
        <label className="w-full">
          <div className="mb-2 font-semibold">Verbrauch pro 100 km (l)</div>
          <input
            type="number"
            value={verbrauch95}
            onChange={(e) => setVerbrauch95(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="w-full">
          <div className="mb-2 font-semibold">Preis Super 95 (€/l)</div>
          <input
            type="number"
            value={preis95}
            onChange={(e) => setPreis95(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="w-full">
          <div className="mb-2 font-semibold">Preis E10 (€/l)</div>
          <input
            type="number"
            value={preisE10}
            onChange={(e) => setPreisE10(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>
      </div>

      <div className="text-lg mt-4">{lohntSich}</div>
      <div className="text-lg">Ersparnis mit E10: <strong>{ersparnisPro100km} €</strong> pro 100 km</div>

      <hr className="border-t border-gray-300 w-full max-w-md my-10" />

      <h2 className="text-xl font-bold">Fahrkosten-Rechner</h2>

      <div className="flex flex-col items-center space-y-4 w-full max-w-xs">
        <label className="w-full">
          <div className="mb-2 font-semibold">Fahrstrecke (km)</div>
          <input
            type="number"
            value={strecke}
            onChange={(e) => setStrecke(e.target.value)}
            className="border p-2 rounded w-full"
          />
        </label>
      </div>

      <div className="text-lg mt-2">
        Mit Super 95 kostet die Fahrt: <strong>{kosten95} €</strong>
      </div>
      <div className="text-lg">
        Mit E10 kostet die Fahrt: <strong>{kostenE10} €</strong>
      </div>
    </main>
  );
}
