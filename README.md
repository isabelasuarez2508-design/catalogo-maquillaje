# ✨ Aura Makeup · Catálogo de maquillaje

Catálogo digital de maquillaje con carrito de compras y pedidos por WhatsApp.
Proyecto académico desarrollado con **React**, HTML, CSS y JavaScript.

## Funcionalidades

- Catálogo de 18 productos organizados por categorías (Labios, Rostro, Mejillas, Ojos y Uñas).
- Filtro por categoría, buscador por nombre y orden por precio o nombre.
- Carrito de compras: agregar, aumentar o disminuir cantidades, eliminar y vaciar.
- Total calculado automáticamente en pesos colombianos.
- El carrito se guarda en el navegador (`localStorage`) y no se pierde al recargar.
- Botón **Pedir por WhatsApp**, que genera el mensaje con el pedido y el total.
- Diseño responsive para computador y celular.

## Tecnologías

- React 18 (componentes, `useState`, `useEffect`, `useMemo`)
- Vite
- HTML5
- CSS3
- JavaScript (ES6+)

## Cómo ejecutarlo

Necesitas tener [Node.js](https://nodejs.org) instalado.

```bash
npm install
npm run dev
```

Abre en el navegador la dirección que aparece en la terminal (normalmente http://localhost:5173).

Para generar la versión final: `npm run build` (queda en la carpeta `dist`).

## Estructura

```
catalogo-maquillaje/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx              # Estado principal, filtros y carrito
    ├── utils.js             # Formato de precios
    ├── styles.css
    ├── data/
    │   └── productos.js     # Lista de productos
    └── components/
        ├── Header.jsx
        ├── Filtros.jsx
        ├── ProductCard.jsx
        └── Carrito.jsx
```

## Personalizar

- **Productos:** edita `src/data/productos.js`.
- **Número de WhatsApp:** cambia la constante `WHATSAPP` en `src/components/Carrito.jsx`.

## Autora

Isabela Suárez López · Estudiante de Análisis y Desarrollo de Software · SENA
