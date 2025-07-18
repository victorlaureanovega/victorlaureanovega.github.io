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
                        title="corto"
                        class="corto"
                        src="https://www.youtube.com/embed/z6mUjEQjh_g" 
                        allowfullscreen>
                    </iframe>
                </div>
            </section>

            <section id="archivo">
                <div className="contenedor-archivo">
                    <div className="boton-contenido" onClick={() => navigate("/archivo")}>
                        <img src="Nocturno.png" alt="Nocturno" />
                        <span className="texto">{"Archivo"}</span>
                    </div>
                </div>
            </section>

            <section id="blog">
                <div className="contenedor-blog">
                    <button className="boton-contenido" onClick={() => window.open("https://obiceyantonomasia.blogspot.com", '_blank')}>
                        Óbice y antonomasia
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Home;
