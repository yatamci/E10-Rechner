"use client";

import { useState } from "react";

export default function Home() {
  const [verbrauch95, setVerbrauch95] = useState("6.8");
  const [super95, setSuper95] = useState("1.689");
  const [e10, setE10] = useState("1.639");
  const [strecke, setStrecke] = useState("30");

  const verbrauchNum = parseFloat(verbrauch95);
  const super95Num = parseFloat(super95);
  const e10Num = parseFloat(e10);
  const streckeNum = parseFloat(strecke);

  const preisUnterschied = super95Num - e10Num;
  let lohntSichText = "";

  if (e10Num > super95Num) {
    lohntSichText = "E10 lohnt sich nicht, da es teurer ist als Super 95.";
  } else if (preisUnterschied / super95Num < 0.02) {
    lohntSichText = "E10 lohnt sich nicht wirklich, da es weniger als 2 % günstiger ist.";
  } else {
    lohntSichText = "E10 lohnt sich.";
  }

  const ersparnis = verbrauchNum / 100 * (super95Num - e10Num);
  const istTeurer = e10Num > super95Num;
  const textFarbe = istTeurer ? "text-red-600" : "text-green-600";
  const ersparnisText = istTeurer ? "Mehrkosten mit E10" : "Ersparnis mit E10";

  const kosten95 = verbrauchNum / 100 * super95Num * streckeNum;
  const kostenE10 = verbrauchNum / 100 * e10Num * streckeNum;

  return (
    <main className="p-4 max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-bold">E10-Rechner</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-2">Verbrauch pro 100 km (L)</label>
          <input
            className="border p-2 w-full"
            type="number"
            value={verbrauch95}
            onChange={(e) => setVerbrauch95(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2">Preis Super 95 (€/L)</label>
          <input
            className="border p-2 w-full"
            type="number"
            value={super95}
            onChange={(e) => setSuper95(e.target.value)}
          />
        </div>

        <div>
          <label className="block mb-2">Preis E10 (€/L)</label>
          <input
            className="border p-2 w-full"
            type="number"
            value={e10}
            onChange={(e) => setE10(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <p>{lohntSichText}</p>
        <p className={`${textFarbe} font-semibold`}>
          {ersparnisText}: {Math.abs(ersparnis).toFixed(2)} € auf 100 km
        </p>
      </div>

      <hr className="my-6" />

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Fahrkosten-Rechner</h2>

        <div>
          <label className="block mb-2">Strecke (km)</label>
          <input
            className="border p-2 w-full"
            type="number"
            value={strecke}
            onChange={(e) => setStrecke(e.target.value)}
          />
        </div>

        <p>Kosten mit Super 95: {kosten95.toFixed(2)} €</p>
        <p>Kosten mit E10: {kostenE10.toFixed(2)} €</p>
      </div>
    </main>
  );
}
