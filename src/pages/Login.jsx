import { Link } from 'react-router-dom'

// Página de login: de momento solo el formulario (aún no habla con la API)
function Login() {
  // Al enviar: evitamos que el navegador recargue la página.
  // En la próxima sesión aquí llamaremos a POST /api/users/login
  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-6 col-lg-4">
        <h1 className="mb-4">Iniciar sessió</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Contrasenya</label>
            <input className="form-control" type="password" id="password" required />
          </div>
          <button className="btn btn-dark w-100" type="submit">Entrar</button>
        </form>
        {/* Enlace a la página de registro */}
        <p className="mt-3">
          No tens compte? <Link to="/register">Registra't</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
