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
    <section id="opiniones" className="py-20 sm:py-28">
      <Container>
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SplitLines>
            <h2 className="display max-w-[12ch] text-[clamp(2.6rem,7vw,5.5rem)]">
              Gente real.
              <br />
              <span className="text-lime">Opiniones reales.</span>
            </h2>
          </SplitLines>
          <Reveal y={16}>
            <p className="max-w-xs text-base leading-relaxed text-muted">
              {gym.reviewCount} personas puntuaron el gimnasio con {gym.rating.toFixed(1)} de 5
              en Google. Estas son sus palabras, tal cual las escribieron.
            </p>
          </Reveal>
        </div>

        {/* Masonry por columnas: las citas tienen largos muy distintos y así no
            quedan huecos enormes para emparejar alturas. */}
        <div className="columns-1 gap-4 md:columns-2 lg:columns-3 [&>*]:mb-4">
          {testimonials.map((testimonial, i) => (
            <Reveal
              key={testimonial.id}
              y={20}
              delay={(i % 3) * 0.05}
              className="break-inside-avoid"
            >
              <figure className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-line-strong">
                <div
                  className="flex gap-0.5"
                  aria-label={`${testimonial.rating} de 5 estrellas`}
                >
                  {Array.from({ length: testimonial.rating }).map((_, s) => (
                    <Star key={s} size={13} className="fill-lime text-lime" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 text-[0.95rem] leading-relaxed text-fg/90">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span
                    aria-hidden
                    className="display flex size-9 shrink-0 items-center justify-center rounded-full bg-elevated text-sm text-lime"
                  >
                    {testimonial.author.charAt(0)}
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-fg">{testimonial.author}</span>
                    <span className="text-xs text-faint">{testimonial.source}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
