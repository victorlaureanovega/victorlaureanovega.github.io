import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import "../css/Home.css";

function Home() {
    const navigate = useNavigate();

    return (
        <main className="inicio-main">
            <Header />
            <section id="destacado">
                <div className="contenedor-corto">
                    <iframe 
                        title="Cortometraje de Péndulo a media oscuridad"
                        className="corto"
                        src="https://www.youtube.com/embed/z6mUjEQjh_g"
                        allowFullScreen
                    />
                </div>
            </section>

            <div className="contenedor-archivo-blog">
                <section id="archivo">
                    <button onClick={() => navigate("/archivo")}>Archivo</button>
                </section>

                <section id="blog">
                    <button onClick={() => window.open("/obice-y-antonomasia", "_blank")}>Óbice y antonomasia</button>
                </section>
            </div>

            <section id="contenedor-noticia">
                <article>
                    <h3>Atentado en el camino de Kumano deja tres muertos y cuatro heridos</h3>
                    <p>
                        Oztotlán / 30.09.2023.— La mañana de este sábado un sujeto agredió a siete personas con un arma blanca en el camino de Kumano. Tres de ellas perdieron la vida en el lugar, mientras que las demás fueron trasladadas a un hospital en la región, donde permanecen bajo vigilancia médica. Entre las víctimas fatales se encuentra Reiko Tanaka, quien había residido en Oztotlán los últimos cinco años.
                    </p>
                </article>
            </section>
        </main>
    );
}

export default Home;
