import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Bienvenida
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'bienvenida.html'));
});

// Escuelas (API)
app.get('/api/escuelas', (req, res) => {
    const escuelas = [
        {
            nombre: "Escuela Benito Juárez",
            direccion: "Av. Principal 123, Ciudad de México"
        },
        {
            nombre: "Escuela Sor Juana Inés de la Cruz",
            direccion: "Av. México 724, Zapopan, Jalisco"
        }
    ];
    res.json(escuelas);
});

// Escuelas (Mostrar)
app.get('/escuelas', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'escuelas.html'));
});

// Donantes (API)
app.get('/api/donantes', (req, res) => {
    const donantes = [
        {
            nombre: "Comercial Mexicana SA de CV",
            donativos: "Material de construcción"
        },
        {
            nombre: "Raquel Soto",
            donativos: "Material de construcción"
        }
    ];
    res.json(donantes);
});

// Donantes (Mostrar)
app.get('/donantes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'donantes.html'));
});

// Equipo (API)
app.get('/api/equipo', (req, res) => {
    const equipo = [
        {
            nombre: "Octavio Sebastián Hernández Galindo",
            cualidad: "Hábil para investigar y analizar código."
        },
        {
            nombre: "Sebastián Alejandro Soria Piñuela",
            cualidad: "Muestra disposición para el trabajo en equipo."
        },
        {
            nombre: "José Yael Varela García",
            cualidad: "Hábil para programar y resolver problemas de código."
        },
        {
            nombre: "Paulina Méndez López",
            cualidad: "Profundiza en los temas y es hábil con el código."
        }
    ];
    res.json(equipo);
});

// Equipo (Mostrar)
app.get('/equipo', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'equipo.html'));
});

// Opinión
app.get('/opinion', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'opinion.html'));
});

// Manejo de error 404
app.use((req, res) => {
    res.status(404).send('.adartnocne on anigàP');
});

// Inicializar el servidor
const puerto = 1984;
app.listen(puerto, () => {
    console.log(`Servidor iniciado`);
});