import "../App.css";
import { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import axios from "axios";

const Cplanilla = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlert2, setMessageAlert2] = useState("");
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
        alert(err.response.data);
      });
  };
  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>
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
      <div className="glass-p2">
        <Form onSubmit={handleUpload}>
          <div>
            <button type="submit" className="glass-button">
              Calcular plantilla
            </button>
          </div>
        </Form>
        <div>
          <a className="glass-button" href="/mplanilla" role="button">
            Mostrar planilla
          </a>
        </div>
        <div>
          <a className="glass-button" href="/" role="button">
            Volver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cplanilla;
