import { categorias } from "../data/productos.js";

function Filtros({ categoria, setCategoria, busqueda, setBusqueda, orden, setOrden }) {
  return (
    <section className="filtros">
      <div className="categorias">
        {categorias.map((cat) => (
          <button
            key={cat}
            className={cat === categoria ? "categoria activa" : "categoria"}
            onClick={() => setCategoria(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="controles">
        <input
          type="search"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          aria-label="Buscar producto"
        />

        <select value={orden} onChange={(e) => setOrden(e.target.value)} aria-label="Ordenar productos">
          <option value="recomendado">Ordenar: recomendados</option>
          <option value="menor">Precio: menor a mayor</option>
          <option value="mayor">Precio: mayor a menor</option>
          <option value="nombre">Nombre: A - Z</option>
        </select>
      </div>
    </section>
  );
}

export default Filtros;
