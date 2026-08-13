import { Camera } from "lucide-react";

/**
 * Espacio para una foto real del gimnasio.
 *
 * Todavía no tenemos fotos propias, así que en vez de dejar un hueco o poner
 * un stock genérico, esto muestra un marcador diseñado que dice exactamente
 * qué foto va ahí. Sirve para dos cosas: la maqueta se ve resuelta al
 * presentarla, y queda claro qué material hay que pedirle al cliente.
 *
 * Cuando llegue la foto se pasa `src` y el marcador desaparece solo.
 */
export function PhotoSlot({
  src,
  alt,
  hint,
  className = "",
}: {
  src?: string | null;
  alt: string;
  hint: string;
  className?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`size-full object-cover ${className}`} />;
  }

  return (
    <div
      className={`relative flex size-full items-center justify-center overflow-hidden bg-elevated ${className}`}
    >
      {/* Trama diagonal: le da textura al hueco para que lea como una
          decisión de diseño y no como una imagen que no cargó. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #c0fd1a 0 1px, transparent 1px 11px)",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 px-6 text-center">
        <Camera size={22} className="text-lime" aria-hidden />
        {/* `muted` y no `faint`: sobre el gris del marcador, faint quedaba en
            4.2:1 y no llegaba al mínimo AA. */}
        <p className="eyebrow text-muted">{hint}</p>
      </div>
    </div>
  );
}
