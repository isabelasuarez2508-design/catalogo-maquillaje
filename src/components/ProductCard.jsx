import { iconos } from "../data/productos.js";
import { formatearPrecio } from "../utils.js";

function ProductCard({ producto, agregar }) {
  return (
    <article className="producto">
      <div
        className="producto-imagen"
        style={{ background: `linear-gradient(135deg, ${producto.color}, ${producto.color}99)` }}
      >
        {producto.nuevo && <span className="nuevo">Nuevo</span>}
        <span className="producto-icono">{iconos[producto.categoria]}</span>
      </div>

      <div className="producto-info">
        <span className="producto-categoria">{producto.categoria}</span>
        <h3>{producto.nombre}</h3>
        <p>{producto.descripcion}</p>

        <div className="producto-pie">
          <strong className="precio">{formatearPrecio(producto.precio)}</strong>
          <button className="boton" onClick={() => agregar(producto)}>
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
