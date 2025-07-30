import { useNavigate } from "react-router-dom";
import "../css/Tarjeta.css";

function Tarjeta({ titulo, enlace, fecha }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/${enlace}`);
    }

    return (
        <div className="tarjeta">
            <div className="contenedor-tarjeta" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <h3>{titulo}</h3>
                <p>{fecha}</p>
            </div>
        </div>
    );
}

export default Tarjeta;
