import { LayoutGrid, Sparkle, Users, Wrench, type LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { CountUp, Reveal, SplitLines } from "@/components/motion";
import type { Feature, GymProfile } from "@/lib/types";

const ICONS: Record<string, LucideIcon> = { Wrench, Users, Sparkle, LayoutGrid };

export function About({ gym, features }: { gym: GymProfile; features: Feature[] }) {
  return (
    <section id="el-lugar" className="border-t border-line bg-surface py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.26em] text-lime">El lugar</p>
            <SplitLines>
              <h2 className="font-display max-w-[13ch] text-[clamp(2rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em]">
                Un gimnasio que da ganas de volver
              </h2>
            </SplitLines>

            <div className="mt-10 flex flex-col gap-5">
              {gym.about.map((paragraph, i) => (
                <Reveal key={i} y={18} delay={i * 0.06}>
                  <p className="max-w-xl text-lg leading-relaxed text-muted">{paragraph}</p>
                </Reveal>
              ))}
            </div>

            <Reveal y={18} delay={0.15}>
              <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-faint">Puntuación</dt>
                  <dd className="font-display mt-2 text-4xl font-extrabold text-lime">
                    <CountUp to={gym.rating} />
                    <span className="text-2xl text-muted">/5</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-faint">Reseñas</dt>
                  <dd className="font-display mt-2 text-4xl font-extrabold text-lime">
                    <CountUp to={gym.reviewCount} />
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-faint">Comunidad</dt>
                  <dd className="font-display mt-2 text-4xl font-extrabold text-lime">
                    <CountUp to={gym.followers} />
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <div className="grid gap-px self-start overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = ICONS[feature.icon] ?? Sparkle;
              return (
                <Reveal key={feature.id} y={20} delay={i * 0.06} className="bg-surface">
                  <div className="flex h-full flex-col gap-4 p-8">
                    <Icon size={22} strokeWidth={1.75} className="text-lime" aria-hidden />
                    <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
