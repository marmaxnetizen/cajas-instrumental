"use client";
import { useEffect, useState } from "react";

/**
 * Botón para pasar entre modo claro y modo oscuro. Muestra el ícono y el nombre del modo al que se pasa
 * («☾ Oscuro» / «☀ Claro»), así se entiende sin adivinar. En pantallas muy chicas queda solo el ícono.
 * La elección se guarda en este dispositivo (localStorage); sin elegir, se usa lo de Configuración o el modo del celular.
 */
export default function TemaToggle({ conTexto = true }: { conTexto?: boolean }) {
  const [oscuro, setOscuro] = useState(false);
  useEffect(() => setOscuro(document.documentElement.classList.contains("dark")), []);

  function cambiar() {
    const nuevo = !oscuro;
    setOscuro(nuevo);
    document.documentElement.classList.toggle("dark", nuevo);
    try {
      localStorage.setItem("tema", nuevo ? "oscuro" : "claro");
    } catch {}
  }

  const destino = oscuro ? "Claro" : "Oscuro";
  return (
    <button type="button" onClick={cambiar} className="btn px-3 gap-1.5" aria-label={`Pasar a modo ${destino.toLowerCase()}`} title={`Modo ${destino.toLowerCase()}`}>
      <span aria-hidden="true">{oscuro ? "☀" : "☾"}</span>
      {conTexto && <span className="hidden min-[360px]:inline text-sm">{destino}</span>}
    </button>
  );
}
