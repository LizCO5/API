class Libro {
    static contadorIndices = 1;

    constructor(titulo, autor, anioPublicacion, disponibilidad = true) {
        this.indice = Libro.contadorIndices++;
        this.titulo = titulo;
        this.autor = autor; // Instancia de Autor
        this.anioPublicacion = anioPublicacion;
        this.disponibilidad = disponibilidad;
    }

    informacion() {
        const estado = this.disponibilidad ? "Disponible" : "No disponible";
        return `Índice: ${this.indice}, Título: ${this.titulo}, Autor: ${this.autor.nombre}, Año: ${this.anioPublicacion}, Estado: ${estado}`;
    }

    prestar() {
        if (this.disponibilidad) {
            this.disponibilidad = false;
            return `El libro '${this.titulo}' ha sido prestado.`;
        }
        return `El libro '${this.titulo}' no está disponible.`;
    }

    devolver() {
        if (!this.disponibilidad) {
            this.disponibilidad = true;
            return `El libro '${this.titulo}' ha sido devuelto.`;
        }
        return `El libro '${this.titulo}' ya está disponible.`;
    }
}

module.exports = Libro;
