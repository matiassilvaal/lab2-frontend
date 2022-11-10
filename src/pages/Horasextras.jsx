import "../App.css";

const Horasextras = () => {
  return (
    <form method="get">
      <div className="glass-panel">
        <h1>
          <a href="/">Recursos Humanos MueblesStgo</a>
        </h1>
        <p>Autorizar horas extras.</p>
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
              Autorizar horas extras
            </button>
          </div>
          <div>
            <a className="glass-button" href="/" role="button">
              Volver
            </a>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Horasextras;
