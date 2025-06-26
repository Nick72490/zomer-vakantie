import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VakantieList from "./Vakantielist";
import VakantieDetail from "./VakantieDetail";
import BoekingForm from "./BoekingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VakantieList />} />
        <Route path="/vakantie/:id" element={<VakantieDetail />} />
        <Route path="/boeking" element={<BoekingForm />} />
      </Routes>
    </Router>
  );
}

export default App; 
