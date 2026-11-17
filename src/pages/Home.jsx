// Productos de ejemplo (de momento escritos aquí a mano).
// Tienen los mismos campos que el modelo Product del backend: name, description, price, stock, image.
// Más adelante los pediremos a la API (GET /api/products).
const products = [
  {
    id: 1,
    name: 'Dessuadora Jett',
    description: 'Dessuadora negra amb el logo de la Jett.',
    price: 49.99,
    stock: 10,
    image: 'https://placehold.co/400x300?text=Dessuadora+Jett',
  },
  {
    id: 2,
    name: 'Samarreta Reyna',
    description: 'Samarreta de cotó amb la Reyna.',
    price: 24.99,
    stock: 25,
    image: 'https://placehold.co/400x300?text=Samarreta+Reyna',
  },
  {
    id: 3,
    name: 'Alfombreta Spike',
    description: 'Alfombreta de ratolí XL amb la Spike.',
    price: 19.99,
    stock: 15,
    image: 'https://placehold.co/400x300?text=Alfombreta+Spike',
  },
  {
    id: 4,
    name: 'Figura Sage',
    description: 'Figura de la Sage de 20 cm.',
    price: 34.99,
    stock: 0,
    image: 'https://placehold.co/400x300?text=Figura+Sage',
  },
]

// Página principal: bienvenida + una tarjeta por cada producto
function Home() {
  return (
    <>
      {/* Bloque de bienvenida */}
      <div className="p-4 mb-4 bg-light rounded">
        <h1>Benvingut a Valorant Merch</h1>
        <p className="mb-0">Roba, accessoris i figures dels teus agents preferits.</p>
      </div>

      <h2 className="mb-3">Productes destacats</h2>

      {/* Rejilla de Bootstrap: 1 columna en móvil, 2 en tablet y 4 en PC */}
      <div className="row">
        {/* map: por cada producto del array creamos una tarjeta */}
        {products.map((product) => (
          // key: React necesita un valor único en cada elemento de una lista
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="fw-bold">{product.price} €</p>
                {/* Si queda stock sale "En estoc"; si no, "Esgotat" */}
                {product.stock > 0 ? (
                  <span className="badge bg-success">En estoc</span>
                ) : (
                  <span className="badge bg-secondary">Esgotat</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
