import { useState } from "react";
import Archivo from "../components/Archivo.jsx";
import "../css/Home.css";

function abrirEnlace(url) {
    window.open(url, '_blank');
}

function Home() {
    const [mostrarArchivo, setMostrarArchivo] = useState(false);
    const toggleArchivo = () => {
        setMostrarArchivo(!mostrarArchivo);
    };

    return (
        <main>
            <section id="destacado">
                <h3>Cortometraje de <span>Péndulo a media oscuridad</span></h3>
                <div class="contenedor-corto">
                    <iframe
                        class="corto"
                        src="https://www.youtube.com/embed/z6mUjEQjh_g" 
                        allowfullscreen>
                    </iframe>
                </div>
            </section>

            <section id="archivo">
                <div class="contenedor-archivo">
                    <div class="boton-contenido" onClick={toggleArchivo}>
                        <img src="Nocturno.png" alt="Nocturno" />
                        <span class="texto">{mostrarArchivo ? "Ocultar" : "Archivo"}</span>
                    </div>
                </div>
                {mostrarArchivo && (
                    <div class="modal-overlay-archivo" onClick={toggleArchivo}>
                        <div class="lista-archivo" onClick={(e) => e.stopPropagation()}>
                            <Archivo />
                        </div>
                    </div>
                )}
            </section>

            <section id="blog">
                <div class="contenedor-blog">
                    <button class="boton-contenido" onClick={() => abrirEnlace("https://obiceyantonomasia.blogspot.com")}>
                        Óbice y antonomasia
                    </button>
                </div>
            </section>
        </main>
    );
}

export default Home;
