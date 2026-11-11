import { productos } from "../data/productos.js";
import { formatearPrecio } from "../utils.js";

// Número de WhatsApp al que llegan los pedidos (con código de país, sin + ni espacios).
// Cámbialo por el número real de la tienda.
const WHATSAPP = "573104677388";

function Carrito({ abierto, cerrar, carrito, cambiarCantidad, quitar, vaciar }) {
  // Une cada item del carrito con los datos del producto
  const items = carrito.map((item) => {
    const producto = productos.find((p) => p.id === item.id);
    return { ...producto, cantidad: item.cantidad };
  });

  const total = items.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

  const enviarPedido = () => {
    const lineas = items.map(
      (item) => `• ${item.cantidad} x ${item.nombre} - ${formatearPrecio(item.precio * item.cantidad)}`
    );
    const mensaje = `¡Hola! Quiero hacer este pedido:\n\n${lineas.join("\n")}\n\nTotal: ${formatearPrecio(total)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <>
      <div className={abierto ? "fondo visible" : "fondo"} onClick={cerrar}></div>

      <aside className={abierto ? "carrito abierto" : "carrito"} aria-hidden={!abierto}>
        <div className="carrito-cabecera">
          <h2>Tu carrito</h2>
          <button className="cerrar" onClick={cerrar} aria-label="Cerrar carrito">
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className="carrito-vacio">
            <span>🛍️</span>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ul className="carrito-lista">
              {items.map((item) => (
                <li key={item.id} className="carrito-item">
                  <span className="mini-color" style={{ background: item.color }}></span>

                  <div className="carrito-detalle">
                    <h4>{item.nombre}</h4>
                    <p>{formatearPrecio(item.precio)}</p>

                    <div className="cantidad">
                      <button onClick={() => cambiarCantidad(item.id, -1)} aria-label="Quitar uno">
                        −
                      </button>
                      <span>{item.cantidad}</span>
                      <button onClick={() => cambiarCantidad(item.id, 1)} aria-label="Agregar uno">
                        +
                      </button>
                    </div>
                  </div>

                  <button className="quitar" onClick={() => quitar(item.id)} aria-label="Eliminar producto">
                    🗑️
                  </button>
                </li>
              ))}
            </ul>

            <div className="carrito-pie">
              <div className="total">
                <span>Total</span>
                <strong>{formatearPrecio(total)}</strong>
              </div>

              <button className="boton boton-whatsapp" onClick={enviarPedido}>
                Pedir por WhatsApp
              </button>
              <button className="vaciar" onClick={vaciar}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}

export default Carrito;
