"use client";
import { useState } from "react";

export default function Home() {
  const [verbrauch, setVerbrauch] = useState("6.8");
  const [preisSuper, setPreisSuper] = useState("1.689");
  const [preisE10, setPreisE10] = useState("1.639");
  const [strecke, setStrecke] = useState("30");

  const v = parseFloat(verbrauch);
  const p95 = parseFloat(preisSuper);
  const pE10 = parseFloat(preisE10);
  const km = parseFloat(strecke);

  const kosten95 = (v / 100) * km * p95;
  const kostenE10 = (v / 100) * km * pE10;
  const differenz = +(kosten95 - kostenE10).toFixed(2);
  const prozent = 100 * (1 - pE10 / p95);

  let lohntText = "";
  if (prozent >= 2) {
    lohntText = "E10 lohnt sich.";
  } else if (prozent >= 0) {
    lohntText = "E10 lohnt sich nicht wirklich.";
  } else {
    lohntText = "E10 ist teurer als Super 95.";
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <h1 className="text-2xl font-bold mb-6">E10-Rechner</h1>

      <div className="flex flex-col gap-6 w-full max-w-xs">
        <div className="flex flex-col">
          <label className="block font-semibold mb-2">Verbrauch pro 100 km (L)</label>
          <input
            type="number"
            value={verbrauch}
            onChange={(e) => setVerbrauch(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="block font-semibold mb-2">Super 95 Preis (€/L)</label>
          <input
            type="number"
            value={preisSuper}
            onChange={(e) => setPreisSuper(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="flex flex-col">
          <label className="block font-semibold mb-2">Super E10 Preis (€/L)</label>
          <input
            type="number"
            value={preisE10}
            onChange={(e) => setPreisE10(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-8 text-center space-y-2">
        <p className={`font-semibold ${prozent < 0 ? "text-red-600" : prozent < 2 ? "text-yellow-600" : "text-green-700"}`}>
          {lohntText}
        </p>
        <p>
          <span className="font-semibold">
            {prozent < 0 ? "Mehrkosten mit E10:" : "Ersparnis mit E10:"}
          </span>{" "}
          <span className={`font-bold ${prozent < 0 ? "text-red-600" : ""}`}>
            {Math.abs(differenz).toFixed(2)} €
          </span>
        </p>
      </div>

      <hr className="w-full my-8 border-gray-300" />

      <div className="flex flex-col gap-6 w-full max-w-xs">
        <div className="flex flex-col">
          <label className="block font-semibold mb-2">Strecke (km)</label>
          <input
            type="number"
            value={strecke}
            onChange={(e) => setStrecke(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-6 text-center space-y-2">
        <p>
          <span className="font-semibold">Kosten mit Super 95:</span>{" "}
          <span className="font-bold">{kosten95.toFixed(2)} €</span>
        </p>
        <p>
          <span className="font-semibold">Kosten mit E10:</span>{" "}
          <span className="font-bold">{kostenE10.toFixed(2)} €</span>
        </p>
      </div>
    </main>
  );
}
