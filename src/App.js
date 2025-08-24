import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archivo from "./pages/Archivo";
import Blog from "./pages/Blog";
import CartaAustriaca from "./pages/Blog/CartaAustriaca";
import Pendulo from "./pages/Blog/Pendulo";
import PrologoTardio from "./pages/Blog/PrologoTardio";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archivo" element={<Archivo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/carta-a-una-austriaca" element={<CartaAustriaca />} />
        <Route path="/blog/pendulo-a-media-oscuridad" element={<Pendulo />} />
        <Route path="/blog/un-prologo-tardio" element={<PrologoTardio />} />
      </Routes>
    </Router>
  );
}

export default App;
