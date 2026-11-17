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

## Páginas

| Ruta | Archivo | Qué hace |
|---|---|---|
| `/` | `src/pages/Home.jsx` | Portada con los productos destacados |
| `/login` | `src/pages/Login.jsx` | Formulario de inicio de sesión (todavía no conectado a la API) |
| `/register` | `src/pages/Register.jsx` | Formulario de registro (todavía no conectado a la API) |

## Estructura

- `src/main.jsx`: punto de entrada y rutas (React Router)
- `src/App.jsx`: plantilla común (menú, `<Outlet />` y pie)
- `src/pages/`: una página por archivo
