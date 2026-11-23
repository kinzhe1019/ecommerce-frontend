# E-commerce Full Stack - Frontend

Proyecto de tienda online (merchandising de Valorant) del módulo Desenvolupament d'aplicacions amb Frameworks client/servidor (curs 2026-2027).
Este repositorio contiene el frontend: la web que ve el cliente, hecha con React.
El backend (API REST con Express y MongoDB) está en https://github.com/kinzhe1019/ecommerce-backend

## Tecnologías

- React 19
- Vite 8
- React Router 7 (react-router-dom)
- Bootstrap 5

## Autor

Xinkai Zheng

## Cómo ejecutar el proyecto

1. Clonar el repositorio: `git clone https://github.com/kinzhe1019/ecommerce-frontend.git`
2. Entrar en la carpeta: `cd ecommerce-frontend`
3. Instalar dependencias: `npm install`
4. Arrancar en modo desarrollo: `npm run dev`
5. Abrir `http://localhost:5173` en el navegador

Para que funcionen el login y el registro, el backend tiene que estar arrancado en `http://localhost:3000` (con MongoDB encendido). La dirección de la API está en `src/api.js`.

## Páginas

| Ruta | Archivo | Qué hace |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Portada, ventajas, categorías y productos destacados |
| `/login` | `src/pages/Login.jsx` | Inicio de sesión con `POST /api/users/login` |
| `/register` | `src/pages/Register.jsx` | Registro con `POST /api/users/register` |

Después del login o del registro, los tokens (`accessToken`, `refreshToken`) y el usuario se guardan en el `localStorage` del navegador, y el menú enseña el nombre y el botón **Sortir** (cerrar sesión).

## Estructura

- `src/main.jsx`: punto de entrada y rutas (React Router)
- `src/App.jsx`: plantilla común (menú con el usuario, `<Outlet />` y pie)
- `src/pages/`: una página por archivo
- `src/api.js`: la dirección de la API
- `src/index.css`: nuestros estilos (colores de Valorant), encima de Bootstrap
