import "../App.css";

const Cplanilla = () => {
  return (
    <div className="glass-panel">
      <h1>
        <a href="http://localhost:8090">Recursos Humanos MueblesStgo</a>
      </h1>
      <p>Calculo automatico de planillas</p>
      <div className="glass-p2">
        <form method="POST">
          <div>
            <button type="submit" className="glass-button">
              Calcular plantilla
            </button>
          </div>
        </form>
        <div>
          <a className="glass-button" href="/mplanilla" role="button">
            Mostrar planilla
          </a>
        </div>
        <div>
          <a className="glass-button" href="/" role="button">
            Volver
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cplanilla;
