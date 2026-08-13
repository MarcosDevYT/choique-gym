import type { Service } from "@/lib/types";

/**
 * Tira infinita con las disciplinas. La lista se duplica para que el bucle
 * empalme sin salto; la copia va aria-hidden para no repetirle todo a un
 * lector de pantalla.
 */
export function Marquee({ services }: { services: Service[] }) {
  const items = services.map((s) => s.name);

  return (
    <section
      aria-label="Disciplinas"
      className="overflow-hidden border-y border-line bg-surface py-6"
    >
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10" aria-hidden={copy === 1}>
            {items.map((name) => (
              <span key={`${copy}-${name}`} className="flex items-center gap-10">
                <span className="font-display text-2xl font-bold uppercase tracking-tight text-fg sm:text-3xl">
                  {name}
                </span>
                <span className="text-lime" aria-hidden>
                  ✳
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
