import Tarjeta from "../components/Tarjeta.jsx";
import "../css/Blog.css";

function Blog() {
    return (
        <main className="blog-main">
            <div className="regresar-inicio">
                <a href="/">Ir a inicio</a>
            </div>
            <section id="contenedor-blog">
                <h1>Óbice y antonomasia</h1>
                <div id="tablero">
                    <Tarjeta titulo="Un prólogo tardío" enlace="un-prologo-tardio" fecha="11/08/2025"/>
                    <Tarjeta titulo="Péndulo a media oscuridad" enlace="pendulo-a-media-oscuridad" fecha="18/01/2025"/>
                    <Tarjeta titulo="Carta a una austriaca" enlace="carta-a-una-austriaca" fecha="04/10/2024"/>
                </div>
            </section>
        </main>
    );
}

export default Blog;
