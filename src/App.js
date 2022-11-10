import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Index from "./pages/Index";
import Importar from "./pages/Importar";
import Justificativo from "./pages/Justificativo";
import Horasextras from "./pages/Horasextras";
import Cplanilla from "./pages/Cplanilla";
import Mplanilla from "./pages/Mplanilla";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/importar" element={<Importar />} exact />
        <Route path="/justificativo" element={<Justificativo />} exact />
        <Route path="/horasextras" element={<Horasextras />} exact />
        <Route path="/cplanilla" element={<Cplanilla />} exact />
        <Route path="/mplanilla" element={<Mplanilla />} exact />
      </Routes>
    </Container>
  );
}

export default App;
