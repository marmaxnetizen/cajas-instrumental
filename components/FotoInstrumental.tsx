import { fotoCatalogo } from "@/lib/fotos-catalogo";

/**
 * Foto de una pieza: primero la foto profesional del catálogo (sin fondo, centrada); si no hay, la foto subida en la ficha
 * (/archivos/<id>); si tampoco, un recuadro con el código para que la lista no se desalinee.
 */
export default function FotoInstrumental({
  codigo,
  nombre,
  archivoId,
  tam = "w-20 h-20",
}: {
  codigo: string;
  nombre: string;
  archivoId?: string | null;
  tam?: string;
}) {
  const pro = fotoCatalogo(codigo);
  const src = pro ?? (archivoId ? `/archivos/${archivoId}` : null);
  const clase = `${tam} shrink-0 rounded-lg border border-borde overflow-hidden`;
  if (!src) {
    return (
      <span className={`${clase} bg-superficie-2 grid place-items-center font-mono text-xs text-tenue`} aria-hidden="true">
        {codigo}
      </span>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`Foto de ${nombre}`}
      loading="lazy"
      decoding="async"
      className={`${clase} ${pro ? "bg-white object-contain p-1" : "object-cover"}`}
    />
  );
}
