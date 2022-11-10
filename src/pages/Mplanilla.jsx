import "../App.css";

const Mplanilla = () => {
  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>
      <p>Información de la planilla de sueldos.</p>
      <div className="container-left">
        <a className="glass-button" href="/cplanilla" role="button">
          Calcular planilla
        </a>
      </div>
      <div
        className="glass-toolbar"
        style={{
          fontSize: "rgba(255,255,255,0.6)",
        }}
      >
        <h2 id="tabla">Planilla de sueldos</h2>
        <table className="table" aria-describedby="tabla">
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
          <tbody style={{ color: "rgba(255,255,255,0.6)" }}></tbody>
        </table>
        <div className="container-right">
          <a className="glass-button" href="/" role="button">
            volver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Mplanilla;
