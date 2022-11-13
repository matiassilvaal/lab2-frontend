import "../App.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";

const Horasextras = () => {
  const [fecha, setFecha] = useState("");
  const [rut, setRut] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlert2, setMessageAlert2] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(false);
    setShowAlert2(false);
    try {
      let url =
        "http://localhost:8080/horasextras?fecha=" + fecha + "&rut=" + rut;
      if (fecha === "" || rut === "") {
        setShowAlert2(true);
        setMessageAlert2("Debe ingresar todos los datos.");
      } else {
        let response = await axios.post(url);
        console.log(response.status);
        if (response.status === 200) {
          setShowAlert(true);
          setMessageAlert("Se han autorizado las horas extras.");
          setShowAlert2(false);
          setMessageAlert2("");
        }
      }
    } catch (error) {
      console.log(error.message);
      setShowAlert2(true);
      setMessageAlert2("No se ha podido autorizar las horas extras.");
    }
  };
  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>
      <p>Autorizar horas extras.</p>
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
                placeholder="AAAA-MM-DD"
              />
            </label>
            <p>Rut:</p>
            <label>
              <input
                type="text"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                placeholder="XXXXXXXX-X"
              />
            </label>
          </div>
          <div>
            <button type="submit" className="glass-button">
              Autorizar horas extras
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

export default Horasextras;
