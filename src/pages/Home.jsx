// Link = enlace de React Router (para el botón "Crear compte")
import { Link } from 'react-router-dom'

// Productos de ejemplo (de momento escritos aquí a mano).
// Tienen los mismos campos que el modelo Product del backend: name, description, price, stock, image.
// category es el nombre de su categoría. Más adelante los pediremos a la API (GET /api/products).
// Las imágenes son de placehold.co: /tamaño/fondo/letra?text=...&font=... (colores de Valorant)
const products = [
  {
    id: 1,
    name: 'Dessuadora Jett',
    category: 'Roba',
    description: 'Dessuadora negra amb el logo de la Jett.',
    price: 49.99,
    stock: 10,
    image: 'https://placehold.co/400x300/0f1923/ff4655?text=Dessuadora+Jett&font=oswald',
  },
  {
    id: 2,
    name: 'Samarreta Reyna',
    category: 'Roba',
    description: 'Samarreta de cotó amb la Reyna.',
    price: 24.99,
    stock: 25,
    image: 'https://placehold.co/400x300/0f1923/ff4655?text=Samarreta+Reyna&font=oswald',
  },
  {
    id: 3,
    name: 'Alfombreta Spike',
    category: 'Accessoris',
    description: 'Alfombreta de ratolí XL amb la Spike.',
    price: 19.99,
    stock: 15,
    image: 'https://placehold.co/400x300/0f1923/ff4655?text=Alfombreta+Spike&font=oswald',
  },
  {
    id: 4,
    name: 'Figura Sage',
    category: 'Figures',
    description: 'Figura de la Sage de 20 cm.',
    price: 34.99,
    stock: 0,
    image: 'https://placehold.co/400x300/0f1923/ff4655?text=Figura+Sage&font=oswald',
  },
]

// Las 3 categorías de la tienda (las mismas que en la colección categories)
const categories = [
  { name: 'Roba', description: 'Dessuadores, samarretes i gorres dels teus agents.' },
  { name: 'Accessoris', description: 'Alfombretes, clauers i tasses per al teu setup.' },
  { name: 'Figures', description: "Figures dels agents per decorar l'escriptori." },
]

// Página principal: portada, ventajas, categorías y productos destacados
function Home() {
  return (
    <>
      {/* 1. PORTADA: fondo oscuro con degradado (clase hero de index.css) */}
      <section className="hero text-white rounded-4 p-4 p-md-5 mb-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="text-vm-red fw-bold mb-2">Nova col·lecció 2026</p>
            <h1 className="display-4 fw-bold">Vesteix-te com el teu agent</h1>
            <p className="lead mb-4">Roba, accessoris i figures de Valorant, amb enviament en 48 hores.</p>
            {/* href="#productes" baja hasta el título con id="productes" */}
            <a className="btn btn-vm btn-lg me-2 mb-2" href="#productes">Veure productes</a>
            <Link className="btn btn-outline-light btn-lg mb-2" to="/register">Crear compte</Link>
          </div>
          {/* La imagen solo sale en pantallas grandes (d-none d-lg-block) */}
          <div className="col-lg-6 d-none d-lg-block">
            <img
              className="img-fluid rounded-4"
              src="https://placehold.co/600x400/ff4655/0f1923?text=VALORANT+MERCH&font=oswald"
              alt="Valorant Merch"
            />
          </div>
        </div>
      </section>

      {/* 2. VENTAJAS: 3 columnas (una debajo de otra en móvil) */}
      <div className="row text-center mb-5">
        <div className="col-md-4 mb-3">
          <h3 className="h5 text-vm-red">Enviament en 48 h</h3>
          <p className="text-secondary mb-0">Gratis a partir de 50 €.</p>
        </div>
        <div className="col-md-4 mb-3">
          <h3 className="h5 text-vm-red">Devolució gratuïta</h3>
          <p className="text-secondary mb-0">Tens 30 dies per canviar d'opinió.</p>
        </div>
        <div className="col-md-4 mb-3">
          <h3 className="h5 text-vm-red">Pagament segur</h3>
          <p className="text-secondary mb-0">Amb targeta o Bizum.</p>
        </div>
      </div>

      {/* 3. CATEGORÍAS: una tarjeta oscura por categoría */}
      <h2 className="section-title mb-4">Categories</h2>
      <div className="row mb-5">
        {categories.map((category) => (
          <div className="col-md-4 mb-3" key={category.name}>
            <div className="category-card rounded-3 p-4 h-100">
              <h3 className="h4">{category.name}</h3>
              <p className="mb-0 text-white-50">{category.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 4. PRODUCTOS DESTACADOS: 1 columna en móvil, 2 en tablet y 4 en PC */}
      <h2 className="section-title mb-4" id="productes">Productes destacats</h2>
      <div className="row">
        {/* map: por cada producto del array creamos una tarjeta */}
        {products.map((product) => (
          // key: React necesita un valor único en cada elemento de una lista
          <div className="col-12 col-md-6 col-lg-3 mb-4" key={product.id}>
            <div className="card product-card h-100 border-0 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              {/* d-flex flex-column + mt-auto: el precio queda siempre abajo */}
              <div className="card-body d-flex flex-column">
                <span className="badge bg-dark align-self-start mb-2">{product.category}</span>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-secondary">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span className="fs-5 fw-bold text-vm-red">{product.price} €</span>
                  {/* Si queda stock sale "En estoc"; si no, "Esgotat" */}
                  {product.stock > 0 ? (
                    <span className="badge bg-success">En estoc</span>
                  ) : (
                    <span className="badge bg-secondary">Esgotat</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
