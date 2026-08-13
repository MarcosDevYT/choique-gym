import { Activity, Dumbbell, Flame, Sparkles, Swords, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import type { Service } from "@/lib/types";

/** El ícono llega como string desde los datos, para que sea editable sin tocar código. */
const ICONS: Record<string, LucideIcon> = {
  Dumbbell,
  Activity,
  Swords,
  Flame,
  Sparkles,
};

const INTENSITY_LABEL: Record<Service["intensity"], string> = {
  BAJA: "Bajo impacto",
  MEDIA: "Intensidad media",
  ALTA: "Alta intensidad",
};

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="disciplinas" className="py-24 sm:py-32">
      <Container>
        <div className="mb-16 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.26em] text-lime">Qué vas a encontrar</p>
            <SplitLines>
              <h2 className="font-display max-w-[14ch] text-[clamp(2rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em]">
                Cinco formas de entrenar
              </h2>
            </SplitLines>
          </div>
          <Reveal y={16}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              Una sola cuota para probar todas. Empezá por la que te llame y cambiá
              cuando quieras.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] ?? Dumbbell;
            return (
              <Reveal key={service.id} y={22} delay={(i % 3) * 0.07} className="bg-bg">
                <article className="group flex h-full flex-col gap-5 p-8 transition-colors duration-300 hover:bg-elevated lg:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-12 items-center justify-center rounded-full border border-line-strong text-lime transition-colors duration-300 group-hover:border-lime group-hover:bg-lime group-hover:text-bg">
                      <Icon size={20} strokeWidth={1.75} aria-hidden />
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-faint">
                      {INTENSITY_LABEL[service.intensity]}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-lime">{service.summary}</p>
                  </div>

                  <p className="text-base leading-relaxed text-muted">{service.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
