const Autor = require('../models/autor');
const Libro = require('../models/libro');

const biblioteca = {
    autores: [],
    libros: [],
};

// Inicializa los datos
function inicializarDatos() {
    const autor1 = new Autor("Isabel Allende", "Chilena");
    const autor2 = new Autor("George Orwell", "Británica");
    const autor3 = new Autor("Haruki Murakami", "Japonesa");

    biblioteca.autores.push(autor1, autor2, autor3);

    biblioteca.libros.push(
        new Libro("La casa de los espíritus", autor1, 1982),
        new Libro("1984", autor2, 1949),
        new Libro("Kafka en la orilla", autor3, 2002),
        new Libro("Cuentos de Eva Luna", autor1, 1989),
        new Libro("Rebelión en la granja", autor2, 1945)
    );
}

// Listar autores
function obtenerAutores(req, res) {
    res.json(biblioteca.autores);
}

// Crear un autor
function crearAutor(req, res) {
    const { nombre, nacionalidad } = req.body;
    const nuevoAutor = new Autor(nombre, nacionalidad);
    biblioteca.autores.push(nuevoAutor);
    res.status(201).json({ mensaje: "Autor creado exitosamente", autor: nuevoAutor });
}

// Eliminar un autor
function eliminarAutor(req, res) {
    const { nombre } = req.params;
    const indice = biblioteca.autores.findIndex((autor) => autor.nombre === nombre);

    if (indice === -1) {
        return res.status(404).json({ mensaje: "Autor no encontrado" });
    }

    biblioteca.autores.splice(indice, 1);
    res.json({ mensaje: "Autor eliminado exitosamente" });
}

// Listar libros
function obtenerLibros(req, res) {
    res.json(biblioteca.libros);
}

// Crear un libro
function crearLibro(req, res) {
    const { titulo, autorNombre, anioPublicacion } = req.body;

    const autor = biblioteca.autores.find((autor) => autor.nombre === autorNombre);
    if (!autor) {
        return res.status(400).json({ mensaje: "Autor no encontrado" });
    }

    const nuevoLibro = new Libro(titulo, autor, anioPublicacion);
    biblioteca.libros.push(nuevoLibro);
    res.status(201).json({ mensaje: "Libro creado exitosamente", libro: nuevoLibro });
}

// Eliminar un libro
function eliminarLibro(req, res) {
    const { id } = req.params;
    const indice = biblioteca.libros.findIndex((libro) => libro.indice === parseInt(id, 10));

    if (indice === -1) {
        return res.status(404).json({ mensaje: "Libro no encontrado" });
    }

    biblioteca.libros.splice(indice, 1);
    res.json({ mensaje: "Libro eliminado exitosamente" });
}

// Actualizar un libro
function actualizarLibro(req, res) {
    const { id } = req.params;
    const { titulo, autorNombre, anioPublicacion, disponibilidad } = req.body;

    const libro = biblioteca.libros.find((libro) => libro.indice === parseInt(id, 10));
    if (!libro) {
        return res.status(404).json({ mensaje: "Libro no encontrado" });
    }

    if (titulo) libro.titulo = titulo;
    if (autorNombre) {
        const autor = biblioteca.autores.find((autor) => autor.nombre === autorNombre);
        if (!autor) {
            return res.status(400).json({ mensaje: "Autor no encontrado" });
        }
        libro.autor = autor;
    }
    if (anioPublicacion) libro.anioPublicacion = anioPublicacion;
    if (disponibilidad !== undefined) libro.disponibilidad = disponibilidad;

    res.json({ mensaje: "Libro actualizado exitosamente", libro });
}

// Obtener libros disponibles
function obtenerLibrosDisponibles(req, res) {
    const disponibles = biblioteca.libros.filter((libro) => libro.disponibilidad);
    res.json(disponibles);
}

// Obtener libros no disponibles
function obtenerLibrosNoDisponibles(req, res) {
    const noDisponibles = biblioteca.libros.filter((libro) => !libro.disponibilidad);
    res.json(noDisponibles);
}

module.exports = {
    inicializarDatos,
    obtenerAutores,
    obtenerLibros,
    obtenerLibrosDisponibles,
    obtenerLibrosNoDisponibles,
    crearAutor,
    crearLibro,
    eliminarAutor,
    eliminarLibro,
    actualizarLibro,
};
