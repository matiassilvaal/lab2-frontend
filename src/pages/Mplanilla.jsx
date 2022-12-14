import "../App.css";
import { useEffect, useState } from "react";
import { Table, Alert } from "react-bootstrap";
import axios from "axios";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Mplanilla = () => {
  const [planilla, setPlanilla] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const navigate = useNavigate();
  function hasJWT() {
    let flag = false;

    //check user has JWT token
    localStorage.getItem("token") ? (flag = true) : (flag = false);

    return flag;
  }
  const navigateTo = (path) => {
    if (path === "/cplanilla" && !hasJWT()) {
      navigate("/login");
    } else {
      navigate(path);
    }
  };
  const getPlanilla = async () => {
    try {
      let url = "http://localhost:8080/mostrarplanilla";
      let response = await axios.get(url);
      if (response.status === 200) {
        setPlanilla(response.data);
        setShowAlert(false);
        setMessageAlert("");
      } else {
        setShowAlert(true);
        setMessageAlert("No existen empleados suficientes.");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPlanilla();
  }, []);
  return (
    <div className="glass-panel">
      <Logo />
      <p>Información de la planilla de sueldos.</p>
      <Alert
        show={showAlert}
        style={{
          width: "100%",
          height: "40px",
          textAlign: "center",
        }}
        variant="alert-danger"
      >
        <p style={{ marginTop: "-40px" }} class="alert alert-danger">
          {messageAlert}
        </p>
      </Alert>
      <div className="container-left">
        <button
          className="glass-button"
          onClick={() => navigateTo("/cplanilla")}
          style={{ textAlign: "center" }}
        >
          Calcular planilla
        </button>
      </div>
      <div
        className="glass-toolbar"
        style={{
          fontSize: "rgba(255,255,255,0.6)",
        }}
      >
        <h2 id="tabla">Planilla de sueldos</h2>
        <Table className="table" aria-describedby="tabla">
          <thead
            style={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <tr>
              <th>Rut</th>
              <th>Apellidos y Nombres</th>
              <th>Categoria</th>
              <th>Años en la empresa</th>
              <th>Sueldo Fijo</th>
              <th>Bonificaciones</th>
              <th>Horas Extras</th>
              <th>Descuentos</th>
              <th>Sueldo Bruto</th>
              <th>Cotización Previsional</th>
              <th>Cotización Salud</th>
              <th>Sueldo final</th>
            </tr>
          </thead>
          <tbody style={{ color: "rgba(255,255,255,0.6)" }}>
            {planilla.map((pl) => (
              <tr key={pl.rut}>
                <td>{pl.rut}</td>
                <td>{pl.apellidosNombres}</td>
                <td>{pl.categoria}</td>
                <td>{pl.aniosEnEmpresa}</td>
                <td>{pl.sueldoFijo}</td>
                <td>{pl.bonificacionServicios}</td>
                <td>{pl.horasExtras}</td>
                <td>{pl.descuentos}</td>
                <td>{pl.sueldoBruto}</td>
                <td>{pl.cotizacionPrevisional}</td>
                <td>{pl.cotizacionSalud}</td>
                <td>{pl.sueldoFinal}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div className="container-right">
          <button
            className="glass-button"
            onClick={() => navigateTo("/")}
            style={{ textAlign: "center" }}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mplanilla;
