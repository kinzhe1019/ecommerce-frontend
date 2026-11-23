// useState = guardar datos que cambian (lo que escribe el usuario, el error...)
import { useState } from 'react'
// useNavigate = ir a otra página desde el código
// useOutletContext = recibir lo que nos pasa App por el <Outlet /> (setUser)
import { Link, useNavigate, useOutletContext } from 'react-router-dom'
// La dirección de la API (http://localhost:3000/api)
import API_URL from '../api.js'

// Página de registro: envía nombre, email y contraseña a POST /api/users/register
function Register() {
  // Lo que escribe el usuario en cada campo
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Mensaje de error ('' = no hay error) y si estamos esperando a la API
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  // setUser es de App: sirve para que el menú sepa que hemos entrado
  const { setUser } = useOutletContext()

  // Al enviar el formulario
  async function handleSubmit(event) {
    // Evitamos que el navegador recargue la página
    event.preventDefault()
    setError('')
    setLoading(true)
    try {
      // Petición POST con los 3 campos en JSON (como en Postman)
      const response = await fetch(API_URL + '/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email, password: password }),
      })
      // Leemos el JSON de la respuesta: { success, data } o { success, error }
      const result = await response.json()
      if (result.success) {
        // El registro ya devuelve los tokens: entramos directamente
        localStorage.setItem('accessToken', result.data.accessToken)
        localStorage.setItem('refreshToken', result.data.refreshToken)
        localStorage.setItem('user', JSON.stringify(result.data.user))
        // Avisamos a App (el menú cambia) y vamos a la Home
        setUser(result.data.user)
        navigate('/')
      } else {
        // Error de la API (ej: 409 email repetido o 422 datos no válidos).
        // Si trae detalles (qué campo está mal), los añadimos al mensaje
        let message = result.error.message
        if (result.error.details) {
          message = message + ': ' + result.error.details.map((detail) => detail.message).join(', ')
        }
        setError(message)
      }
    } catch (err) {
      // fetch falla si la API está apagada o si CORS la bloquea
      console.error(err)
      setError("No s'ha pogut connectar amb el servidor")
    }
    setLoading(false)
  }

  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-8 col-lg-5">
        {/* Tarjeta blanca con sombra */}
        <div className="card border-0 shadow-sm">
          <div className="card-body p-4 p-md-5">
            <h1 className="h2 mb-1">Crear compte</h1>
            <p className="text-secondary mb-4">Registra't per comprar el merch dels teus agents.</p>

            {/* Si hay error, sale una caja roja con el mensaje */}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="name">Nom</label>
                {/* value + onChange: el campo y el estado siempre tienen lo mismo */}
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  minLength={2}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label" htmlFor="password">Contrasenya</label>
                {/* minLength 12: la misma regla que el backend */}
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  minLength={12}
                  required
                />
                <div className="form-text">Mínim 12 caràcters.</div>
              </div>
              {/* Mientras esperamos a la API, el botón está desactivado */}
              <button className="btn btn-vm w-100" type="submit" disabled={loading}>
                {loading ? 'Creant el compte...' : 'Registrar-me'}
              </button>
            </form>

            {/* Enlace a la página de login */}
            <p className="mt-4 mb-0 text-center">
              Ja tens compte? <Link to="/login">Inicia sessió</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
