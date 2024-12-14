# API de Biblioteca

### Endpoints

#### Página Principal
- **`GET /`**: Muestra un mensaje de bienvenida con enlaces para explorar los endpoints de la API.
  - **Ejemplo de navegación:**
    - [Lista de autores](http://localhost:3000/autores)
    - [Lista de libros](http://localhost:3000/libros)
    - [Libros disponibles](http://localhost:3000/libros/disponibles)
    - [Libros no disponibles](http://localhost:3000/libros/nodisponibles)

#### 1. Autores
- **`GET /autores`**: Listar todos los autores.

#### 2. Libros
- **`GET /libros`**: Listar todos los libros.
- **`GET /libros/disponibles`**: Obtener solo los libros disponibles.
- **`GET /libros/nodisponibles`**: Obtener solo los libros que no están disponibles.

---

### Instalación

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd biblioteca-api
