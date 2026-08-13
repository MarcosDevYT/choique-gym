import { Activity, Dumbbell, Flame, Sparkles, Swords, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import type { Service } from "@/lib/types";

const ICONS: Record<string, LucideIcon> = { Dumbbell, Activity, Swords, Flame, Sparkles };

const INTENSITY_LABEL: Record<Service["intensity"], string> = {
  BAJA: "Bajo impacto",
  MEDIA: "Intensidad media",
  ALTA: "Alta intensidad",
};

/**
 * Cards de disciplinas. La destacada se pinta en lima entera con el texto en
 * negro: en una grilla donde todo pesa igual el ojo no sabe por dónde entrar,
 * y esa card es la que orienta la decisión.
 */
export function Services({ services }: { services: Service[] }) {
  return (
    <section id="disciplinas" className="py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SplitLines>
            <h2 className="display max-w-[11ch] text-[clamp(2.6rem,7vw,5.5rem)]">
              Elegí tu disciplina
            </h2>
          </SplitLines>
          <Reveal y={16}>
            <p className="max-w-xs text-base leading-relaxed text-muted">
              Una sola cuota para las cinco. Probá hasta encontrar la tuya y cambiá
              cuando quieras.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Dumbbell;
            const featured = service.featured;

            return (
              <Reveal key={service.id} y={22} delay={(i % 3) * 0.06}>
                <article
                  className={`flex h-full flex-col rounded-2xl p-7 transition-colors duration-300 ${
                    featured
                      ? "bg-lime text-black"
                      : "border border-line bg-surface hover:border-line-strong"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`flex size-11 items-center justify-center rounded-xl ${
                        featured ? "bg-black/10 text-black" : "bg-elevated text-lime"
                      }`}
                    >
                      <Icon size={19} strokeWidth={2} aria-hidden />
                    </span>
                    {featured && (
                      <span className="eyebrow rounded-full bg-black px-3 py-1.5 text-lime">
                        La más elegida
                      </span>
                    )}
                  </div>

                  <h3 className="display mt-7 text-[1.9rem]">{service.name}</h3>
                  <p
                    className={`mt-2.5 text-[0.95rem] leading-relaxed ${
                      featured ? "text-black/75" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>

                  {/* Fila de metadatos al pie: lo primero que se compara entre cards. */}
                  <dl
                    className={`mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t pt-4 ${
                      featured ? "border-black/15" : "border-line"
                    }`}
                  >
                    {[
                      { k: "Frecuencia", v: service.frequency },
                      { k: "Formato", v: service.duration },
                      { k: "Nivel", v: INTENSITY_LABEL[service.intensity] },
                    ].map((meta) => (
                      <div key={meta.k} className="flex items-baseline gap-1.5">
                        <dt className="sr-only">{meta.k}</dt>
                        <dd
                          className={`eyebrow ${featured ? "text-black/60" : "text-faint"}`}
                        >
                          {meta.v}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
