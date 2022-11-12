import "../App.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";

const Justificativo = () => {
  const [fecha, setFecha] = useState("");
  const [rut, setRut] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlert2, setMessageAlert2] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(false);
    setShowAlert2(false);
    let url = "http://localhost:8080/justificativo";
    let data = {
      fecha: fecha,
      rut: rut,
    };
    if (fecha === "" || rut === "") {
      setShowAlert2(true);
      setMessageAlert2("Debe ingresar todos los datos.");
    } else {
      let response = axios.post(url, data);
      if (response.status === 200) {
        setShowAlert(true);
        setMessageAlert("Se ha generado el justificativo correctamente.");
      } else {
        setShowAlert2(true);
        setMessageAlert2("No se ha podido generar el justificativo.");
      }
    }

    /*if (fecha === "" || rut === "") {
      setShowAlert2(true);
      setMessageAlert2("Debe ingresar todos los datos.");
    } else {
      setShowAlert(true);
      setMessageAlert("Se ha generado el justificativo.");
    }*/
  };

  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>
      <p>Ingresar un justificativo.</p>
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
      <form onSubmit={handleSubmit}>
        <div className="glass-p2">
          <div>
            <p>Fecha:</p>
            <label>
              <input
                type="text"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                placeholder="2022-09-09"
              />
            </label>
            <p>Rut:</p>
            <label>
              <input
                type="text"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                placeholder="12.345.678-K"
              />
            </label>
          </div>
          <div>
            <button type="submit" className="glass-button">
              Ingresar justificativo
            </button>
          </div>
          <div>
            <a className="glass-button" href="/" role="button">
              Volver
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Justificativo;
