import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import Filtros from "./components/Filtros.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Carrito from "./components/Carrito.jsx";
import { productos } from "./data/productos.js";

function App() {
  // ----- Estados -----
  const [categoria, setCategoria] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [orden, setOrden] = useState("recomendado");
  const [carritoAbierto, setCarritoAbierto] = useState(false);

  // El carrito se guarda en localStorage para que no se pierda al recargar
  const [carrito, setCarrito] = useState(() => {
    const guardado = localStorage.getItem("carrito-aura");
    return guardado ? JSON.parse(guardado) : [];
  });

  useEffect(() => {
    localStorage.setItem("carrito-aura", JSON.stringify(carrito));
  }, [carrito]);

  // ----- Filtrar y ordenar productos -----
  const productosFiltrados = useMemo(() => {
    let lista = productos.filter((p) => {
      const coincideCategoria = categoria === "Todos" || p.categoria === categoria;
      const coincideBusqueda = p.nombre.toLowerCase().includes(busqueda.toLowerCase().trim());
      return coincideCategoria && coincideBusqueda;
    });

    if (orden === "menor") lista = [...lista].sort((a, b) => a.precio - b.precio);
    if (orden === "mayor") lista = [...lista].sort((a, b) => b.precio - a.precio);
    if (orden === "nombre") lista = [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre));

    return lista;
  }, [categoria, busqueda, orden]);

  // ----- Funciones del carrito -----
  const agregarAlCarrito = (producto) => {
    setCarrito((actual) => {
      const existe = actual.find((item) => item.id === producto.id);
      if (existe) {
        return actual.map((item) =>
          item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
        );
      }
      return [...actual, { id: producto.id, cantidad: 1 }];
    });
  };

  const cambiarCantidad = (id, cambio) => {
    setCarrito((actual) =>
      actual
        .map((item) => (item.id === id ? { ...item, cantidad: item.cantidad + cambio } : item))
        .filter((item) => item.cantidad > 0)
    );
  };

  const quitarDelCarrito = (id) => {
    setCarrito((actual) => actual.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setCarrito([]);

  const totalProductos = carrito.reduce((suma, item) => suma + item.cantidad, 0);

  return (
    <>
      <Header totalProductos={totalProductos} abrirCarrito={() => setCarritoAbierto(true)} />

      <main className="contenedor">
        <section className="intro">
          <span className="etiqueta">Catálogo 2026</span>
          <h1>Descubre tu mejor versión</h1>
          <p>Elige tus productos favoritos, arma tu carrito y haz tu pedido por WhatsApp.</p>
        </section>

        <Filtros
          categoria={categoria}
          setCategoria={setCategoria}
          busqueda={busqueda}
          setBusqueda={setBusqueda}
          orden={orden}
          setOrden={setOrden}
        />

        <p className="resultados">
          {productosFiltrados.length} {productosFiltrados.length === 1 ? "producto" : "productos"}
        </p>

        {productosFiltrados.length > 0 ? (
          <section className="grid-productos">
            {productosFiltrados.map((producto) => (
              <ProductCard key={producto.id} producto={producto} agregar={agregarAlCarrito} />
            ))}
          </section>
        ) : (
          <div className="sin-resultados">
            <p>😕 No encontramos productos con esa búsqueda.</p>
            <button
              className="boton"
              onClick={() => {
                setBusqueda("");
                setCategoria("Todos");
              }}
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Proyecto académico · Hecho con React, HTML, CSS y JavaScript</p>
      </footer>

      <Carrito
        abierto={carritoAbierto}
        cerrar={() => setCarritoAbierto(false)}
        carrito={carrito}
        cambiarCantidad={cambiarCantidad}
        quitar={quitarDelCarrito}
        vaciar={vaciarCarrito}
      />
    </>
  );
}

export default App;
