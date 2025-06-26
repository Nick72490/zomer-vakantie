import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VakantieInfo from "./VakantieInfo";

function VakantieList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredVakanties = VakantieInfo.filter((vakantie) =>
    vakantie.place.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="vakantie-list" style={{ padding: "20px" }}>
      <input
        type="text"
        placeholder="Zoek een bestemming..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "16px", width: "100%" }}
      />

      {filteredVakanties.length > 0 ? (
        filteredVakanties.map((vakantie) => (
          <div key={vakantie.id} className="vakantie-item" style={{ border: "1px solid #ccc", padding: "16px", marginBottom: "16px" }}>
            <h2>{vakantie.place}</h2>
            <p>{vakantie.info}</p>
            <p>Prijs: €{vakantie.price}</p>
            <button onClick={() => navigate(`/vakantie/${vakantie.id}`)}>Bekijk</button>
          </div>
        ))
      ) : (
        <p>Geen bestemmingen gevonden.</p>
      )}
    </div>
  );
}

export default VakantieList;
