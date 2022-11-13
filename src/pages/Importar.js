import "../App.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";
const Importar = () => {
  const [data, setData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);
  const [messageAlert, setMessageAlert] = useState("");
  const [messageAlert2, setMessageAlert2] = useState("");
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const handleUpload = (e) => {
    e.preventDefault();
    setShowAlert(false);
    setShowAlert2(true);
    setData([]);
    setMessageAlert2("Cargando datos...");

    let url = "http://localhost:8080/data";

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

  const getData = async () => {
    try {
      let url = "http://localhost:8080/data";
      let response = await axios.get(url);
      if (response.status === 200) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div className="glass-panel">
      <Logo />
      <p>Importar archivo data.</p>
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
      <Form onSubmit={handleUpload}>
        <div className="container-left">
          <button type="submit" className="glass-button">
            Importar data
          </button>
        </div>
      </Form>
      {/*
      <Form onSubmit={handleUpload}>
        <div className="container-left">
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Archivo data.txt</Form.Label>
            <Form.Control
              type="file"
              size="lg"
              required
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />
          </Form.Group>
          <div>
            <button type="submit" className="glass-button">
              Importar data
            </button>
          </div>
        </div>
      </Form>*/}
      <div className="glass-toolbar">
        <h2 id="tabla" style={{ textAlign: "center" }}>
          Data de la empresa
        </h2>
        <Table style={{ textAlign: "center" }}>
          <thead
            style={{
              color: "rgba(255,255,255,0.6)",
            }}
          >
            <tr>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Rut</th>
            </tr>
          </thead>
          <tbody style={{ color: "rgba(255,255,255,0.6)" }}>
            {data.map((empleado) => (
              <tr key={empleado.id}>
                <td>{empleado.fecha}</td>
                <td>{empleado.hora}</td>
                <td>{empleado.rut}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
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
  );
};

export default Importar;
