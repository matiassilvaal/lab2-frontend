import "../App.css";

const Justificativo = () => {
  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>
      <p>Ingresar un justificativo.</p>
      <form method="get">
        <div className="glass-p2">
          <div>
            <p>Fecha:</p>
            <label>
              <input type="text" name="fecha" placeholder="2022-09-09" />
            </label>
            <p>Rut:</p>
            <label>
              <input type="text" name="rut" placeholder="12.345.678-K" />
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
