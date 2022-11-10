import "../App.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Importar = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const handleUpload = (e) => {
    e.preventDefault();

    let url = "http://localhost:8080/data";

    axios
      .post(url)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        alert(err.response.data);
      });
    navigate("/");
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
  }, []);
  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>
      <p>Importar archivo data.</p>
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
              <tr key={empleado.fecha}>
                <td>{empleado.fecha}</td>
                <td>{empleado.hora}</td>
                <td>{empleado.rut}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="container-right">
        <a className="glass-button" href="/" role="button">
          Volver
        </a>
      </div>
    </div>
  );
};

export default Importar;
