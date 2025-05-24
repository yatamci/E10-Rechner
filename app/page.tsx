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
  const lohnt = prozent < 0
    ? "Mehrkosten mit E10:"
    : prozent < 2
    ? "E10 lohnt sich nicht wirklich."
    : "Ersparnis mit E10:";

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4">
      <h1 className="text-2xl font-bold mb-6">E10-Rechner</h1>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <div>
          <label className="font-semibold">Verbrauch pro 100 km</label>
          <input
            type="number"
            value={verbrauch}
            onChange={(e) => setVerbrauch(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Super 95 Preis (€)</label>
          <input
            type="number"
            value={preisSuper}
            onChange={(e) => setPreisSuper(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold">E10 Preis (€)</label>
          <input
            type="number"
            value={preisE10}
            onChange={(e) => setPreisE10(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>

        <div>
          <label className="font-semibold">Strecke (km)</label>
          <input
            type="number"
            value={strecke}
            onChange={(e) => setStrecke(e.target.value)}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>

      <div className="mt-8 text-center">
        {prozent >= 2 && (
          <p className="text-green-700 font-semibold">E10 lohnt sich.</p>
        )}
        {prozent < 2 && prozent >= 0 && (
          <p className="text-yellow-600 font-semibold">E10 lohnt sich nicht wirklich.</p>
        )}
        {prozent < 0 && (
          <p className="text-red-600 font-semibold">E10 ist teurer als Super 95.</p>
        )}

        <p className="mt-2">
          <span className="font-semibold">
            {lohnt}
          </span>{" "}
          <span className={prozent < 0 ? "text-red-600 font-bold" : "font-bold"}>
            {Math.abs(differenz).toFixed(2)} €
          </span>
        </p>
      </div>
    </main>
  );
}
