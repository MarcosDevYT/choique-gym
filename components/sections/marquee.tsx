import type { Service } from "@/lib/types";

/**
 * Tira infinita de disciplinas.
 *
 * El bucle desplaza el track un -50%, así que la mitad que queda visible tiene
 * que ser más ancha que la pantalla o aparece un hueco al final de cada ciclo.
 * Con cinco nombres una sola pasada mide ~750px: alcanza en un celular pero
 * deja un vacío enorme en desktop. Por eso cada mitad repite el set varias
 * veces — cinco pasadas dan ~3.700px, que cubre hasta pantallas ultrawide.
 */
const REPEATS_POR_MITAD = 5;

export function Marquee({ services }: { services: Service[] }) {
  const names = services.map((s) => s.name);
  const half = Array.from({ length: REPEATS_POR_MITAD }).flatMap(() => names);

  return (
    <section
      aria-label="Disciplinas"
      className="overflow-hidden border-y border-line bg-surface py-4"
    >
      <div className="marquee-track flex w-max items-center">
        {/* Dos mitades idénticas: la segunda es la que entra por la derecha
            mientras la primera sale, y va aria-hidden para no repetirle la
            lista completa a un lector de pantalla. */}
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {half.map((name, i) => (
              <span key={`${copy}-${i}-${name}`} className="flex items-center">
                <span className="display px-7 text-xl text-fg sm:text-2xl">{name}</span>
                <span className="text-lime" aria-hidden>
                  ◆
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
