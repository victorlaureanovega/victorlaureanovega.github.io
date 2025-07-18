import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Archivo from "./pages/Archivo";
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archivo" element={<Archivo />} />
      </Routes>
    </Router>
  );
}

export default App;
