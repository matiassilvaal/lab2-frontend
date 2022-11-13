import "../App.css";
import Logo from "../components/Logo";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  return (
    <div className="glass-panel">
      <Logo />
      <p>Bienvenido a la aplicación web de Recursos Humanos de MueblesStgo.</p>
      <p>¿Qué desea hacer a continuación?</p>
      <div className="glass-p2">
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
