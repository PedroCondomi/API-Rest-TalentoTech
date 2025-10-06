# API Rest en Node.js

CRUD básico
Sistema de Gestión de Productos con Express y Firebase. Sólo back-end.

## Instalación

1. **Clonar el repositorio**
  ```shell
  git clone https://github.com/PedroCondomi/API-Rest-TalentoTech.git
  ```

2. **Instalar las dependencias**

```shell
npm install
```

## Ejecutar el proyecto

```shell
npm run start
```

Esto arrancará la API en el puerto configurado (por defecto es http://localhost:3000)

---

## Rutas

- Crear, actualizar y eliminar productos o usuarios requiere estar autenticado y autorizado

### Productos

| Método   | Ruta                   | Descripción                                                                              |
| -------- | ---------------------- | ---------------------------------------------------------------------------------------- |
| `GET`    | `/api/products`        | Obtiene la lista completa de productos.                                                  |
| `GET`    | `/api/products/search` | Filtra productos según parámetros (queries aceptadas: `name`, `price`, `category`).      |
| `GET`    | `/api/products/:id`    | Obtiene los detalles de un producto por su `ID`.                                         |
| `POST`   | `/api/products/create` | Crea un nuevo producto con la información enviada en el cuerpo de la solicitud.          |
| `PUT`    | `/api/products/:id`    | Actualiza un producto existente con la información enviada en el cuerpo de la solicitud. |
| `DELETE` | `/api/products/:id`    | Elimina un producto por su `ID`.                                                         |


### Usuarios

| Método   | Ruta                | Descripción                                                                             |
| -------- | ------------------- | --------------------------------------------------------------------------------------- |
| `POST`   | `/api/auth/login`   | Inicia sesión con las credenciales de usuario enviadas en el cuerpo de la solicitud.    |
| `GET`    | `/api/users`        | Obtiene la lista completa de usuarios.                                                  |
| `GET`    | `/api/users/:id`    | Obtiene los detalles de un usuario por su `ID`.                                         |
| `POST`   | `/api/users/create` | Crea un nuevo usuario con la información enviada en el cuerpo de la solicitud.          |
| `PUT`    | `/api/users/:id`    | Actualiza un usuario existente con la información enviada en el cuerpo de la solicitud. |
| `DELETE` | `/api/users/:id`    | Elimina un usuario por su `ID`.                                                         |

> **Nota**: Las rutas de crear, actualizar y eliminar usuarios requieren que el usuario esté autenticado y autorizado.

### Autenticación
1. Iniciar sesión: Utiliza la ruta `/api/auth/login` para autenticar a un usuario y obtener un token.

2. Autorización: El token debe ser enviado en los encabezados de las solicitudes a las rutas protegidas.
---

## Tecnologías Utilizadas

**Node.js**: Entorno de ejecución de JavaScript para el servidor.

**Express**: Framework para la creación de APIs.

**Firebase**: Base de datos en la nube para almacenar productos y usuarios.

**JWT**: JSON Web Tokens para la autenticación y autorización de usuarios.
