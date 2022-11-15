import "../App.css";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import axios from "axios";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Cplanillalogin = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert2, setMessageAlert2] = useState("");
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else delete axios.defaults.headers.common["Authorization"];
  };
  const getToken = async (e) => {
    e.preventDefault();
    const loginPayload = {
      usuario: usuario,
      clave: clave,
    };
    console.log(loginPayload);
    axios
      .post("http://localhost:8080/calcularplanilla/autenticar", loginPayload)
      .then((response) => {
        setShowAlert2(false);
        setMessageAlert2("");
        const token = response.data.jwtToken;
        localStorage.setItem("token", token);
        setAuthToken(token);
        navigate("/", {
          state: {
            showAlert: true,
            messageAlert: "Bienvenido, " + usuario,
          },
        });
      })
      .catch((err) => {
        setShowAlert2(true);
        setMessageAlert2(
          "Esta cuenta no existe o la contraseña/usuario es incorrecto."
        );
        console.log(err);
      });
  };
  return (
    <div className="glass-panel">
      <Logo />
      <p>Login de calculo de planilla.</p>
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
      <form onSubmit={getToken}>
        <div className="glass-p2">
          <div className="form-group">
            <p style={{ paddingTop: "50px", paddingBottom: "1px" }}>
              Usuario:
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuario"
              />
            </p>
          </div>
          <div className="form-group">
            <p style={{ paddingTop: "30px", paddingBottom: "1px" }}>
              Clave:
              <input
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                placeholder="Contraseña"
              />
            </p>
          </div>
          <div style={{ paddingTop: "100px" }}>
            <button type="submit" className="glass-button">
              Logearse
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

export default Cplanillalogin;
