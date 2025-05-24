import { useState } from "react";

export default function Home() {
  const [verbrauch95, setVerbrauch95] = useState("");
  const [preis95, setPreis95] = useState("");
  const [preisE10, setPreisE10] = useState("");
  const [ergebnis, setErgebnis] = useState("");

  const berechnen = () => {
    const v95 = parseFloat(verbrauch95);
    const p95 = parseFloat(preis95);
    const pE10 = parseFloat(preisE10);
    const mehrverbrauchE10 = v95 * 1.015; // ca. 1,5 % mehrverbrauch

    const kosten95 = (v95 * p95) / 100;
    const kostenE10 = (mehrverbrauchE10 * pE10) / 100;

    if (kostenE10 < kosten95) {
      setErgebnis("E10 lohnt sich!");
    } else if (kostenE10 > kosten95) {
      setErgebnis("Super 95 ist günstiger.");
    } else {
      setErgebnis("Beide sind gleich teuer.");
    }
  };

  return (
    <main style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h1>E10-Rechner</h1>

      <p>Verbrauch mit Super 95 (L/100km):</p>
      <input
        type="number"
        value={verbrauch95}
        onChange={(e) => setVerbrauch95(e.target.value)}
      />

      <p>Preis Super 95 (€/L):</p>
      <input
        type="number"
        value={preis95}
        onChange={(e) => setPreis95(e.target.value)}
      />

      <p>Preis E10 (€/L):</p>
      <input
        type="number"
        value={preisE10}
        onChange={(e) => setPreisE10(e.target.value)}
      />

      <br /><br />
      <button onClick={berechnen}>Berechnen</button>
      <p style={{ fontWeight: "bold" }}>{ergebnis}</p>
    </main>
  );
}
