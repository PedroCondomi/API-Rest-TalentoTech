# API Rest en Node.js

Sistema de Gestión de Productos con Express y Firebase

## Instalación

1. Clonar el repositorio

2. Instalar las dependencias

```shell
npm install
```

## Ejecutar el proyecto

```shell
npm run dev
```

---

## Rutas

- Crear, actualizar y eliminar productos o usuarios requiere estar autenticado y autorizado

### Productos

| Ruta                     | Descripción                                                                           |
| ------------------------ | ------------------------------------------------------------------------------------- |
| get api/products         | Devuelve una lista completa de todos los productos                                    |
| get api/products/search  | Filtra productos específicos (queries aceptadas: name, price, category)               |
| get api/products/:id     | Busca un producto por su ID                                                           |
| post api/products/create | Crea un producto en base a la información incluída en el body                         |
| put api/products/:id     | Modifica un producto referenciado por ID en base a la información incluída en el body |
| delete api/products/:id  | Elimina un producto referenciado por ID                                               |

### Usuarios

| Ruta                  | Descripción                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| post api/auth/login   | Inicia sesión con el la información de usuario incluída en el body                   |
| get api/users         | Devuelve una lista completa de todos los usuarios                                    |
| get api/users/:id     | Busca un usuario por su ID                                                           |
| post api/users/create | Crea un usuario en base a la información incluída en el body                         |
| put api/users/:id     | Modifica un usuario referenciado por ID en base a la información incluída en el body |
| delete api/users/:id  | Elimina un usuario referenciado por ID                                               |
