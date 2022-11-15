import "../App.css";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const Cplanilla = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlert2, setMessageAlert2] = useState("");
  const navigate = useNavigate();
  const handleUpload = (e) => {
    e.preventDefault();
    setShowAlert(false);
    setShowAlert2(true);
    setMessageAlert2("Cargando datos...");
    let url = "http://localhost:8080/calcularplanilla";
    axios
      .post(url)
      .then((response) => {
        setShowAlert2(false);
        setMessageAlert2("");
        console.log(response);
        setShowAlert(true);
        setMessageAlert("Se han calculado correctamente los datos.");
      })
      .catch((err) => {
        setShowAlert2(true);
        setMessageAlert2("No eres administrador de la plataforma.");
      });
  };
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className="glass-panel">
      <Logo />
      <p>Calculo automatico de planillas</p>
      <Alert
        show={showAlert}
        style={{
          width: "100%",
          height: "40px",
          textAlign: "center",
        }}
        variant="alert-success"
      >
        <p style={{ marginTop: "-40px" }} className="alert alert-success">
          {messageAlert}
        </p>
      </Alert>
      <Alert
        show={showAlert2}
        style={{
          width: "100%",
          height: "40px",
          textAlign: "center",
        }}
        variant="alert-info"
      >
        <p style={{ marginTop: "-40px" }} className="alert alert-info">
          {messageAlert2}
        </p>
      </Alert>
      <div className="glass-p2" style={{}}>
        <Form onSubmit={handleUpload}>
          <div>
            <button type="submit" className="glass-button">
              Calcular plantilla
            </button>
          </div>
        </Form>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/mplanilla")}
          >
            Mostrar planilla
          </button>
        </div>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/")}
            type="submit"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cplanilla;
