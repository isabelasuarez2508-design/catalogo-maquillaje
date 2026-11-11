// Lista de productos del catálogo.
// Para agregar uno nuevo, copia un objeto y cambia sus datos (el id debe ser único).

export const categorias = ["Todos", "Labios", "Rostro", "Mejillas", "Ojos", "Uñas"];

export const iconos = {
  Labios: "💄",
  Rostro: "🧴",
  Mejillas: "🌸",
  Ojos: "👁️",
  Uñas: "💅",
};

export const productos = [
  // ---------- Labios ----------
  { id: 1, nombre: "Labial Mate Rosa Pétalo", categoria: "Labios", precio: 28000, color: "#d6577c", nuevo: true,
    descripcion: "Acabado mate de larga duración, cómodo y sin resecar." },
  { id: 2, nombre: "Labial Cremoso Rojo Cereza", categoria: "Labios", precio: 30000, color: "#b3122d", nuevo: false,
    descripcion: "Color intenso y textura cremosa que hidrata los labios." },
  { id: 3, nombre: "Brillo Labial Cristal", categoria: "Labios", precio: 22000, color: "#f4a9bd", nuevo: false,
    descripcion: "Brillo transparente con un toque rosado para un efecto jugoso." },
  { id: 4, nombre: "Delineador de Labios Nude", categoria: "Labios", precio: 15000, color: "#b87a6a", nuevo: false,
    descripcion: "Define el contorno y evita que el labial se corra." },

  // ---------- Rostro ----------
  { id: 5, nombre: "Base Líquida Tono Medio", categoria: "Rostro", precio: 52000, color: "#e0b48f", nuevo: false,
    descripcion: "Cobertura media y acabado natural para todo el día." },
  { id: 6, nombre: "Corrector Luminoso", categoria: "Rostro", precio: 34000, color: "#ecc9a6", nuevo: true,
    descripcion: "Disimula ojeras e imperfecciones con un acabado luminoso." },
  { id: 7, nombre: "Polvo Compacto Translúcido", categoria: "Rostro", precio: 38000, color: "#f0d5b8", nuevo: false,
    descripcion: "Sella el maquillaje y controla el brillo sin verse pesado." },

  // ---------- Mejillas ----------
  { id: 8, nombre: "Rubor en Crema Durazno", categoria: "Mejillas", precio: 26000, color: "#f29b7f", nuevo: false,
    descripcion: "Se difumina fácil y da un efecto de piel con color natural." },
  { id: 9, nombre: "Rubor en Polvo Rosa", categoria: "Mejillas", precio: 29000, color: "#ee8ba3", nuevo: false,
    descripcion: "Pigmento suave y construible para un look fresco." },
  { id: 10, nombre: "Iluminador Dorado", categoria: "Mejillas", precio: 42000, color: "#f2d17a", nuevo: true,
    descripcion: "Brillo sutil para resaltar pómulos, nariz y arco de cupido." },
  { id: 11, nombre: "Bronceador Suave", categoria: "Mejillas", precio: 33000, color: "#b9825a", nuevo: false,
    descripcion: "Aporta calidez y dimensión al rostro sin dejar manchas." },

  // ---------- Ojos ----------
  { id: 12, nombre: "Máscara de Pestañas Volumen", categoria: "Ojos", precio: 36000, color: "#2b2b2b", nuevo: false,
    descripcion: "Pestañas más largas y con volumen, sin grumos." },
  { id: 13, nombre: "Delineador Líquido Negro", categoria: "Ojos", precio: 24000, color: "#1a1a1a", nuevo: false,
    descripcion: "Punta fina para trazos precisos y resistente al agua." },
  { id: 14, nombre: "Paleta de Sombras Atardecer", categoria: "Ojos", precio: 65000, color: "#c1766b", nuevo: true,
    descripcion: "12 tonos cálidos entre mates y brillantes para todo tipo de looks." },
  { id: 15, nombre: "Sombra Líquida Cobre", categoria: "Ojos", precio: 27000, color: "#b8734a", nuevo: false,
    descripcion: "Un solo toque para un párpado brillante y duradero." },

  // ---------- Uñas ----------
  { id: 16, nombre: "Esmalte Rojo Pasión", categoria: "Uñas", precio: 12000, color: "#c8102e", nuevo: false,
    descripcion: "Rojo clásico con brillo intenso y secado rápido." },
  { id: 17, nombre: "Esmalte Lila Suave", categoria: "Uñas", precio: 12000, color: "#b9a1e0", nuevo: false,
    descripcion: "Tono pastel delicado, ideal para un look romántico." },
  { id: 18, nombre: "Esmalte Nude Rosado", categoria: "Uñas", precio: 12000, color: "#e8bfb4", nuevo: true,
    descripcion: "Elegante y versátil, combina con cualquier ocasión." },
];
