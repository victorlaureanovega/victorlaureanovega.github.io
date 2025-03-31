import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors())     // Permite solicitudes desde el navegador

const puerto = 1984;

app.get("/", async (req, res) => {
    try {
        const respuesta = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100");
        const pokemons = respuesta.data.results.map(pokemon => pokemon.name);
        res.json({pokemons});
    }
    catch (error) {
        res.status(500).json({error: "Error al obtener los datos"});
    }
})

app.listen(puerto, () => {
    console.log("Servidor abierto");
})