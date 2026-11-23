// useState = guardar el usuario que ha hecho login
import { useState } from 'react'
// Link = enlace de React Router (cambia de página sin recargar)
// Outlet = el "hueco" donde se pinta la página de la ruta actual
// useNavigate = ir a otra página desde el código
import { Link, Outlet, useNavigate } from 'react-router-dom'

// Plantilla común de todas las páginas: menú arriba, página en medio y pie abajo
function App() {
  // Usuario que ha hecho login (null = nadie). Al abrir la web lo leemos del
  // localStorage, así si recargas la página sigues dentro
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const navigate = useNavigate()

  // Cerrar sesión: borramos lo que guardó el login y volvemos a la Home
  function handleLogout() {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('user')
    setUser(null)
    navigate('/')
  }

  return (
    <>
      {/* Menú de navegación (las clases son de Bootstrap; bg-vm-dark es nuestra, de index.css) */}
      <nav className="navbar navbar-expand navbar-dark bg-vm-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Valorant <span className="text-vm-red">Merch</span>
          </Link>
          <div className="navbar-nav align-items-center">
            <Link className="nav-link" to="/">Inici</Link>
            {/* Si hay usuario: su nombre y el botón de salir. Si no: Login y Registre */}
            {user ? (
              <>
                {/* d-none d-sm-block: el nombre no sale en el móvil (no cabe) */}
                <span className="nav-link text-white d-none d-sm-block">Hola, {user.name}</span>
                <button className="btn btn-sm btn-outline-light ms-2" onClick={handleLogout}>
                  Sortir
                </button>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">Login</Link>
                <Link className="btn btn-sm btn-vm ms-2" to="/register">Registre</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Aquí React Router pone Home, Login o Register según la URL.
          context: le pasamos setUser para que Login y Register puedan cambiar el usuario */}
      <main className="container py-4">
        <Outlet context={{ setUser }} />
      </main>

      {/* Pie de página */}
      <footer className="bg-vm-dark text-white-50 text-center py-4 mt-5">
        Valorant Merch · Projecte DAW2 · Botiga de prova, no oficial
      </footer>
    </>
  )
}

export default App
