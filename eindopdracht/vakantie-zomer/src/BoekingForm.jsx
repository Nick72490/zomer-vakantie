import React, { useState } from "react";

function BoekingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    personen: "",
    vertrekdatum: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Bedankt voor uw boeking, {formData.naam}!</h2>
        <p>We hebben uw gegevens ontvangen en nemen spoedig contact op via {formData.email}.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Boek uw vakantie</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: "400px" }}>
        <label>Naam:</label><br />
        <input type="text" name="naam" value={formData.naam} onChange={handleChange} required /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" value={formData.email} onChange={handleChange} required /><br /><br />

        <label>Aantal personen:</label><br />
        <input type="number" name="personen" value={formData.personen} onChange={handleChange} required /><br /><br />

        <label>Vertrekdatum:</label><br />
        <input type="date" name="vertrekdatum" value={formData.vertrekdatum} onChange={handleChange} required /><br /><br />

        <button type="submit">Boek</button>
      </form>
    </div>
  );
}

export default BoekingForm;
