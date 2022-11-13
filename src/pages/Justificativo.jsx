import "../App.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Justificativo = () => {
  const [fecha, setFecha] = useState("");
  const [rut, setRut] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlert2, setMessageAlert2] = useState("");
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowAlert(false);
    setShowAlert2(false);
    try {
      let url =
        "http://localhost:8080/justificativo?fecha=" + fecha + "&rut=" + rut;
      if (fecha === "" || rut === "") {
        setShowAlert2(true);
        setMessageAlert2("Debe ingresar todos los datos.");
      } else {
        let response = await axios.post(url);
        console.log(response.status);
        if (response.status === 200) {
          setShowAlert(true);
          setMessageAlert("Se ha generado el justificativo correctamente.");
          setShowAlert2(false);
          setMessageAlert2("");
        }
      }
    } catch (error) {
      console.log(error.message);
      setShowAlert2(true);
      setMessageAlert2("No se ha podido generar el justificativo.");
    }
  };

  return (
    <div className="glass-panel" style={{}}>
      <Logo />
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
          <div className="form-group">
            <p style={{ paddingTop: "50px", paddingBottom: "1px" }}>
              Fecha:
              <input
                type="text"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                placeholder="AAAA-MM-DD"
              />
            </p>
          </div>
          <div className="form-group">
            <p style={{ paddingTop: "30px", paddingBottom: "1px" }}>
              Rut:
              <input
                type="text"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
                placeholder="XXXXXXXX-X"
              />
            </p>
          </div>
          <div style={{ paddingTop: "100px" }}>
            <button type="submit" className="glass-button">
              Ingresar justificativo
            </button>
          </div>
          <div>
            <button className="glass-button" onClick={() => navigateTo("/")}>
              Volver al inicio
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Justificativo;
