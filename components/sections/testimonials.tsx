import { Star } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import type { GymProfile, Testimonial } from "@/lib/types";

/**
 * Reseñas reales de Google Maps, citadas textuales y con la fuente a la vista.
 * Mostrar de dónde salen es lo que las vuelve prueba social creíble en vez de
 * marketing: cualquiera puede ir a Google y verificarlas.
 */
export function Testimonials({
  testimonials,
  gym,
}: {
  testimonials: Testimonial[];
  gym: GymProfile;
}) {
  return (
    <section id="opiniones" className="py-24 sm:py-32">
      <Container>
        <div className="mb-16 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.26em] text-lime">Lo que dicen</p>
            <SplitLines>
              <h2 className="font-display max-w-[15ch] text-[clamp(2rem,5.5vw,4.2rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em]">
                {gym.rating.toFixed(1)} de 5 en Google
              </h2>
            </SplitLines>
          </div>
          <Reveal y={16}>
            <p className="max-w-sm text-base leading-relaxed text-muted">
              {gym.reviewCount} personas puntuaron el gimnasio. Estas son sus palabras,
              tal como las escribieron.
            </p>
          </Reveal>
        </div>

        {/* Masonry por columnas: las citas tienen largos distintos y así no
            quedan cards con huecos enormes para emparejar alturas. */}
        <div className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.id}
              y={22}
              delay={(i % 3) * 0.06}
              className="break-inside-avoid"
            >
              <figure className="rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-line-strong">
                <div
                  className="flex gap-0.5"
                  aria-label={`${testimonial.rating} de 5 estrellas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, s) => (
                    <Star key={s} size={14} className="fill-lime text-lime" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-fg/90">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-2 text-sm">
                  <span className="font-medium text-fg">{testimonial.author}</span>
                  <span className="text-faint" aria-hidden>
                    ·
                  </span>
                  <span className="text-faint">{testimonial.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
