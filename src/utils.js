// Convierte un número a formato de pesos colombianos. Ej: 28000 -> $28.000
export function formatearPrecio(valor) {
  return "$" + valor.toLocaleString("es-CO");
}
