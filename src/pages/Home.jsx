import { useNavigate } from "react-router-dom";
import "../css/Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <main className="inicio-main">
            <section id="destacado">
                <h3>Cortometraje de <span>Péndulo a media oscuridad</span></h3>
                <div className="contenedor-corto">
                    <iframe
                        title="Cortometraje de Péndulo a media oscuridad"
                        className="corto"
                        src="https://www.youtube.com/embed/z6mUjEQjh_g" 
                        allowfullscreen>
                    </iframe>
                </div>
            </section>

            <section id="archivo">
                <div className="contenedor-pagina">
                    <div className="boton-contenido" onClick={() => navigate("/archivo")}>
                        <img src="Nocturno.png" alt="Archivo" />
                        <span className="texto">{"Archivo"}</span>
                    </div>
                </div>
            </section>

            <section id="blog">
                <div className="contenedor-pagina">
                    <div className="boton-contenido" onClick={() => navigate("/obice-y-antonomasia")}>
                        <img src="Retrato.png" alt="Blog" />
                        <span className="texto">{"Blog"}</span>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
