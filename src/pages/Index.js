import "../App.css";
import Logo from "../components/Logo";
import { useNavigate, useLocation } from "react-router-dom";
import { Alert } from "react-bootstrap";

const Index = () => {
  const location = useLocation();
  const showAlert = location.state?.showAlert
    ? location.state.showAlert
    : false;
  const messageAlert = location.state?.messageAlert
    ? location.state.messageAlert
    : "";

  function hasJWT() {
    let flag = false;
    localStorage.getItem("token") ? (flag = true) : (flag = false);
    return flag;
  }
  const navigate = useNavigate();
  const navigateTo = (path) => {
    console.log(path);
    console.log(path === "/cplanilla");
    console.log(path === "/cplanilla" && !hasJWT());
    if ((path === "/cplanilla" || path === "/mplanilla") && !hasJWT()) {
      navigate("/login");
    } else if (path === "/login" && hasJWT()) {
      localStorage.removeItem("token");
      navigate("/", {
        state: {
          showAlert: true,
          messageAlert: "Sesión cerrada correctamente.",
        },
      });
    } else {
      navigate(path);
    }
  };
  return (
    <div className="glass-panel">
      <Logo />
      <p>Bienvenido a la aplicación web de Recursos Humanos de MueblesStgo.</p>
      <p>¿Qué desea hacer a continuación?</p>
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
      <div className="glass-p2">
        <div>
          <button className="glass-button" onClick={() => navigateTo("/login")}>
            Login/logout
          </button>
        </div>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/importar")}
          >
            Importar data
          </button>
        </div>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/justificativo")}
          >
            Ingresar justificativo
          </button>
        </div>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/horasextras")}
          >
            Ingresar horas extras
          </button>
        </div>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/cplanilla")}
          >
            Calcular planilla de sueldos
          </button>
        </div>
        <div>
          <button
            className="glass-button"
            onClick={() => navigateTo("/mplanilla")}
          >
            Mostrar planilla de sueldos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
