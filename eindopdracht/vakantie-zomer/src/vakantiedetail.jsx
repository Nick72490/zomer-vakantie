import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import VakantieInfo from "./VakantieInfo";

function VakantieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const vakantie = VakantieInfo.find((v) => String(v.id) === id);

  if (!vakantie) {
    return <p>Bestemming niet gevonden.</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>{vakantie.place}</h1>
      <p>{vakantie.info}</p>
      <p>Prijs: €{vakantie.price}</p>
      <p><strong>Meer info:</strong> Inclusief vervoer, hotel, ontbijt en lokale excursies.</p>
      
      <button style={{ marginRight: "10px" }} onClick={() => navigate("/boeking")}>
      Boeken
      </button>

      <button onClick={() => navigate(-1)}>Terug</button>
    </div>
  );
}

export default VakantieDetail;
