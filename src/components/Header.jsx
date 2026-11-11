function Header({ totalProductos, abrirCarrito }) {
  return (
    <header className="header">
      <div className="contenedor header-contenido">
        <a href="#" className="logo">
          ✨ Aura <span>Makeup</span>
        </a>

        <button className="boton-carrito" onClick={abrirCarrito} aria-label="Abrir carrito">
          🛍️ Carrito
          {totalProductos > 0 && <span className="contador">{totalProductos}</span>}
        </button>
      </div>
    </header>
  );
}

export default Header;
