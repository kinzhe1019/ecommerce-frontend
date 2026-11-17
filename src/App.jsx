// Link = enlace de React Router (cambia de página sin recargar)
// Outlet = el "hueco" donde se pinta la página de la ruta actual
import { Link, Outlet } from 'react-router-dom'

// Plantilla común de todas las páginas: menú arriba, página en medio y pie abajo
function App() {
  return (
    <>
      {/* Menú de navegación (las clases son de Bootstrap) */}
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Valorant Merch</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Inici</Link>
            <Link className="nav-link" to="/login">Login</Link>
            <Link className="nav-link" to="/register">Registre</Link>
          </div>
        </div>
      </nav>

      {/* Aquí React Router pone Home, Login o Register según la URL */}
      <main className="container py-4">
        <Outlet />
      </main>

      {/* Pie de página */}
      <footer className="text-center text-secondary py-3 border-top">
        Valorant Merch · Projecte DAW2
      </footer>
    </>
  )
}

export default App
