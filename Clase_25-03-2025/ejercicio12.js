import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const puerto = 1984;

// Datos
const escuelas = [
    {
        id: 1,
        nombre: "Escuela Primaria Benito Juárez"
    },
    {
        id: 2,
        nombre: "Escuela 2"
    }
]

const donantes = {
    1: ["Fundación ABC"],
    2: ["Fundación XYZ"]
}

// Obtener una escuela en específico (Para probar DELETE en Postman)
app.delete("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const escuela = escuelas.find(e => e.id === id);
    res.json({ escuela: escuela.nombre });
})

// Obtener las escuelas en la página principal
app.get("/", (req, res) => {
    res.json({ escuelas });
})

// Obtener donantes de una escuela específica
app.get("/:id/donantes", (req, res) => {
    const id = parseInt(req.params.id);
    const escuela = escuelas.find(e => e.id === id);

    if (!escuela) {
        return res.status(404).json({ error: "Escuela no encontrada" });
    }

    res.json({ escuela: escuela.nombre, donantes: donantes[id] || [] });
})

// Inicializar servidor
app.listen(puerto, () => {
    console.log(`Servidor escuchando`);
});