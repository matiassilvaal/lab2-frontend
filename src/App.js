import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Index from "./pages/Index";
import Importar from "./pages/Importar";
import Justificativo from "./pages/Justificativo";
import Horasextras from "./pages/Horasextras";
import Cplanilla from "./pages/Cplanilla";
import Cplanillalogin from "./pages/Cplanillalogin";
import Mplanilla from "./pages/Mplanilla";
import axios from "axios";

function App() {
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else delete axios.defaults.headers.common["Authorization"];
  };
  const token = localStorage.getItem("token");
  if (token) {
    setAuthToken(token);
  }
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Index />} exact />
        <Route path="/importar" element={<Importar />} exact />
        <Route path="/justificativo" element={<Justificativo />} exact />
        <Route path="/horasextras" element={<Horasextras />} exact />
        <Route path="/cplanilla" element={<Cplanilla />} exact />
        <Route path="/login" element={<Cplanillalogin />} exact />
        <Route path="/mplanilla" element={<Mplanilla />} exact />
      </Routes>
    </Container>
  );
}

export default App;
