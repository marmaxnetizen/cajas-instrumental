// Fotos del catálogo de pedidos (public/pedir/catalogo/<código>.webp, ruta pública como /pedir). Las genera herramientas-informes/fotos-pro/catalogo.mjs
// a partir de las fotos del taller con fondo azul: sin fondo, centradas y con nitidez. Para sumar una, agregarla allá y volver a correrlo.
export const FOTOS_CATALOGO: ReadonlySet<string> = new Set(["CHM-02","CHM-03","CHM-04","COM-01","COM-02","COM-03","COM-04","COM-05","COM-07","DM-01","DM-02","DM-03","DM-04","DM-05","DM-06","DM-07","DM-08","DM-09","TRI-01","TRI-02","TRI-03","TRI-04","TRI-05"]);

export function fotoCatalogo(codigo: string): string | null {
  return FOTOS_CATALOGO.has(codigo) ? `/pedir/catalogo/${codigo}.webp` : null;
}
