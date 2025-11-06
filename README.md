# 💻 API REST para Gestión de Clientes

API RESTful desarrollada en Node.js con Express, utilizando Sequelize como ORM para la interacción con una base de datos MySQL. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Borrar Lógico) sobre la entidad Cliente.

## ✨ Características Principales

CRUD Completo: Implementación de las 4 operaciones básicas de persistencia (Creación, Lectura, Actualización y Eliminación Lógica).

Base de Datos Relacional: Persistencia de datos mediante MySQL.

ORM Sequelize: Uso del ORM para una gestión de base de datos más eficiente y con código JavaScript.

Eliminación Lógica: En lugar de eliminar registros permanentemente, se utiliza una eliminación lógica (soft delete) para mantener la integridad histórica de los datos.

## ⚙️ Tecnologías Utilizadas

| Tecnología | Versión | Descripción                                      |
| ---------- | :-----: | ------------------------------------------------ |
| Node.js    | 22.16.0 | Entorno de ejecución de JavaScript.              |
| Express    |  5.1.0  | Framework web rápido y minimalista para Node.js. |
| mysql2     | 3.15.3  | Driver de MySQL utilizado por Sequelize.         |
| Sequelize  | 6.37.7  | ORM para Node.js que soporta MySQL.              |
| dotenv     | 17.2.3  | Para la gestión de variables de entorno.         |

## 🚀 Configuración y Puesta en Marcha

_Sigue estos pasos para clonar el repositorio y ejecutar el proyecto localmente._

Prerrequisitos
Node.js (versión compatible, ej: 20 o superior).

Un servidor de base de datos MySQL en ejecución.

### 1. Clonar el Repositorio

```
git clone https://github.com/addisonR/APIGesti-nDeClientes.git
```

### 2. Instalación de Dependencias

Instala todas las dependencias listadas en el package.json:

```
pnpm install
```

### 3. Configuración del Entorno

Crea un archivo llamado .env en la raíz del proyecto. Este archivo contendrá las credenciales de tu base de datos.

```
//SERVER CONFIG
SERVER_PORT =

// BASE DE DATOS CONFIG
DB_HOST =
DB_PORT =
DB_USER =
DB_PASSWORD =
DB_DATABASE =
DB_DIALECT =
```

### 4. Ejecutar el Servidor

Inicia la aplicación

```
pnpm dev
```

## 🗺️ Endpoints de la API

Los siguientes son los endpoints disponibles para la gestión de clientes. El router principal utiliza los siguientes métodos y rutas:

| Método |     Ruta     | Descripción                                             |
| ------ | :----------: | ------------------------------------------------------- |
| POST   |  /clientes   | Crear un nuevo cliente.                                 |
| GET    |  /clientes   | Obtener la lista de todos los clientes activos.         |
| GET    | /cliente/:id | Obtener un cliente específico por su ID.                |
| PUT    | /cliente/:id | Actualizar la información de un cliente por su ID.      |
| DELETE | /cliente/:id | Realiza una Eliminación Lógica de un cliente por su ID. |

## 🤝 Contribuciones

Si deseas contribuir al proyecto, por favor:

Haz un fork del repositorio.

Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).

Realiza tus cambios y haz commit (git commit -m 'feat: Añadir nueva funcionalidad X').

Haz push a la rama (git push origin feature/nueva-funcionalidad).

Abre un Pull Request.
