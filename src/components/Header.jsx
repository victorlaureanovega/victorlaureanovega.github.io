import "../css/Header.css";

function Header() {
    return (
        <div className="contenedor-enlaces">
            <h1>Victor Laureano Vega</h1>

            <nav className="enlaces">
                <img className="invertir" src="instagram.svg" alt="Logo de Instagram" onClick={() => window.open("https://www.instagram.com/victorlaureanovega", "_blank")} />
                <img src="github.svg" alt="Logo de Github" onClick={() => window.open("https://github.com/victorlaureanovega", "_blank")} />
            </nav>
        </div>
    );
}

export default Header;
