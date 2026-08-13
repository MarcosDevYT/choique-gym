import type { Service } from "@/lib/types";

/**
 * Tira infinita de disciplinas. La lista se duplica para que el bucle empalme
 * sin salto; la copia va aria-hidden para no repetírselo todo a un lector de
 * pantalla.
 */
export function Marquee({ services }: { services: Service[] }) {
  const names = services.map((s) => s.name);

  return (
    <section
      aria-label="Disciplinas"
      className="overflow-hidden border-y border-line bg-surface py-4"
    >
      <div className="marquee-track flex w-max items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
            {names.map((name) => (
              <span key={`${copy}-${name}`} className="flex items-center">
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
