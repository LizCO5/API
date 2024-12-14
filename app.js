const express = require('express');
const {
    inicializarDatos,
    obtenerAutores,
    obtenerLibros,
    obtenerLibrosDisponibles,
    obtenerLibrosNoDisponibles
} = require('./controllers/bibliotecaController');

const app = express();
const PORT = 3000;

// Inicializar datos
inicializarDatos();

// Ruta de inicio con enlaces a los endpoints
app.get('/', (req, res) => {
    const mensaje = `
        <h1>22-MISN-2-052 ¡Bienvenido a la API de la Biblioteca!</h1>
        <p>Visita los siguientes enlaces para explorar la API:</p>
        <ul>
            <li><a href="/autores">Lista de autores</a></li>
            <li><a href="/libros">Lista de libros</a></li>
            <li><a href="/libros/disponibles">Libros disponibles</a></li>
            <li><a href="/libros/nodisponibles">Libros no disponibles</a></li>
            
        </ul>
    `;
    res.send(mensaje);
});

// Rutas
app.get('/autores', obtenerAutores);
app.get('/libros', obtenerLibros);
app.get('/libros/disponibles', obtenerLibrosDisponibles);
app.get('/libros/nodisponibles', obtenerLibrosNoDisponibles);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
