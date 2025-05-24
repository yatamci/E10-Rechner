"use client";

import { useState } from "react";

export default function Home() {
  const [verbrauch95, setVerbrauch95] = useState("6.8");
  const [preis95, setPreis95] = useState("1.689");
  const [preisE10, setPreisE10] = useState("1.639");
  const [strecke, setStrecke] = useState("30");

  const verbrauch = parseFloat(verbrauch95) || 0;
  const super95 = parseFloat(preis95) || 0;
  const e10 = parseFloat(preisE10) || 0;
  const distanz = parseFloat(strecke) || 0;

  const diffProzent = ((super95 - e10) / super95) * 100;
  const lohntText =
    e10 > super95
      ? "E10 ist teurer als Super 95"
      : diffProzent < 2
      ? "E10 lohnt sich nicht wirklich"
      : "E10 lohnt sich";

  const kosten95 = (verbrauch / 100) * super95 * distanz;
  const kostenE10 = (verbrauch / 100) * e10 * distanz;

  const kostenDifferenz = Math.abs(kosten95 - kostenE10);
  const differenzText =
    e10 > super95
      ? `Mehrkosten mit E10: ${kostenDifferenz.toFixed(2)} €`
      : `Ersparnis mit E10: ${kostenDifferenz.toFixed(2)} €`;

  return (
    <main className="p-4 space-y-6 max-w-md mx-auto">
      <div>
        <p>Verbrauch pro 100 km (L)</p>
        <input
          type="number"
          value={verbrauch95}
          onChange={(e) => setVerbrauch95(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <p>Super 95 Preis (€/L)</p>
        <input
          type="number"
          value={preis95}
          onChange={(e) => setPreis95(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <p>Super E10 Preis (€/L)</p>
        <input
          type="number"
          value={preisE10}
          onChange={(e) => setPreisE10(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <p>{lohntText}</p>
      </div>

      <hr />

      <div>
        <p>Strecke (km)</p>
        <input
          type="number"
          value={strecke}
          onChange={(e) => setStrecke(e.target.value)}
          className="w-full border p-2 rounded"
        />

        <p>Kosten mit Super 95: {kosten95.toFixed(2)} €</p>
        <p>Kosten mit E10: {kostenE10.toFixed(2)} €</p>
        <p>{differenzText}</p>
      </div>
    </main>
  );
}
