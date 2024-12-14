class Autor {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }

    informacion() {
        return `Autor: ${this.nombre}, Nacionalidad: ${this.nacionalidad}`;
    }
}

module.exports = Autor;
