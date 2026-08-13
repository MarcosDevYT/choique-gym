import { Container } from "@/components/container";
import { Reveal } from "@/components/motion";
import type { Stat } from "@/lib/types";

/**
 * Banda lima a todo el ancho con los números en negro. Es el corte de color
 * de la página: después de varias secciones oscuras seguidas, este bloque
 * respira y ancla los datos duros donde no se pueden pasar por alto.
 */
export function StatsBand({ stats }: { stats: Stat[] }) {
  return (
    <section aria-label="El gimnasio en números" className="bg-lime py-14 text-black sm:py-16">
      <Container>
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <Reveal key={stat.id} y={18}>
              <div className="lg:border-l lg:border-black/15 lg:pl-8">
                <dt className="display text-[clamp(2.8rem,6vw,4.8rem)] leading-none">
                  {stat.value}
                </dt>
                <dd className="eyebrow mt-2 text-black/65">{stat.label}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
