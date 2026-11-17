// React y ReactDOM: sirven para "pintar" la app dentro del index.html
import React from 'react'
import ReactDOM from 'react-dom/client'
// React Router: BrowserRouter (activa las rutas), Routes (la lista de rutas) y Route (una ruta)
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// CSS de Bootstrap: estilos ya hechos (menú, tarjetas, botones, formularios...)
import 'bootstrap/dist/css/bootstrap.min.css'
// App = la plantilla común (menú + pie). Las otras son las páginas
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

// Buscamos el <div id="root"> del index.html y pintamos ahí la app
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta padre: App (menú + pie) sale en todas las páginas */}
        <Route path="/" element={<App />}>
          {/* index = lo que sale en "/" (la Home) */}
          <Route index element={<Home />} />
          {/* "/login" y "/register" */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
