import "../App.css";

const Index = () => {
  return (
    <div className="glass-panel">
      <h1>
        <a href="/">Recursos Humanos MueblesStgo</a>
      </h1>

      <p>Bienvenido a la aplicación web de Recursos Humanos de MueblesStgo.</p>
      <p>¿Qué desea hacer a continuación?</p>
      <div className="glass-p2">
        <div>
          <a className="glass-button" href="/importar" role="button">
            Importar data
          </a>
        </div>
        <div>
          <a className="glass-button" href="/justificativo" role="button">
            Ingresar justificativo
          </a>
        </div>
        <div>
          <a className="glass-button" href="/horasextras" role="button">
            Ingresar horas extras
          </a>
        </div>
        <div>
          <a className="glass-button" href="/cplanilla" role="button">
            Calcular planilla de sueldos
          </a>
        </div>
        <div>
          <a className="glass-button" href="/mplanilla" role="button">
            Mostrar planilla de sueldos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
