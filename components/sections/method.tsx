import { Check } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import { PhotoSlot } from "@/components/photo-slot";
import type { GymProfile, MethodPoint } from "@/lib/types";

/**
 * Foto a la izquierda, argumento a la derecha con lista de tildes. Es el
 * patrón clásico de "por qué acá y no en otro lado", y funciona porque cada
 * punto es una promesa chequeable, no un adjetivo.
 */
export function Method({
  gym,
  points,
}: {
  gym: GymProfile;
  points: MethodPoint[];
}) {
  return (
    <section id="el-lugar" className="py-20 sm:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal y={24} className="order-2 lg:order-1">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl">
              <PhotoSlot
                alt={`Sala de musculación de ${gym.legalName}`}
                hint="Foto del salón / las máquinas"
              />
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <p className="eyebrow mb-6 text-lime">El lugar</p>
            <SplitLines>
              <h2 className="display max-w-[13ch] text-[clamp(2.3rem,5.5vw,4.4rem)]">
                Un gimnasio que da ganas de volver
              </h2>
            </SplitLines>

            <Reveal y={20} delay={0.08}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted">
                {gym.about[0]}
              </p>
            </Reveal>

            <Reveal y={20} delay={0.14}>
              <ul className="mt-9 flex flex-col gap-4">
                {points.map((point) => (
                  <li key={point.id} className="flex items-start gap-3.5">
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-lime"
                    >
                      <Check size={13} strokeWidth={3} className="text-black" />
                    </span>
                    <span className="text-base leading-relaxed text-fg/90">{point.text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
