import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import { TestimonialsSlider } from "@/components/testimonials-slider";
import type { GymProfile, Testimonial } from "@/lib/types";

/**
 * Reseñas reales de Google Maps, citadas textuales y con la fuente a la vista.
 * Mostrar de dónde salen es lo que las vuelve prueba social creíble en vez de
 * marketing: cualquiera puede ir a Google y verificarlas.
 *
 * El carrusel vive en un componente cliente aparte para que esta sección siga
 * renderizándose en el servidor — las citas quedan en el HTML y las puede leer
 * un buscador aunque el JS no llegue a correr.
 */
export function Testimonials({
  testimonials,
  gym,
}: {
  testimonials: Testimonial[];
  gym: GymProfile;
}) {
  return (
    <section id="opiniones" className="overflow-hidden py-20 sm:py-28">
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

        <Reveal y={22}>
          <TestimonialsSlider testimonials={testimonials} />
        </Reveal>
      </Container>
    </section>
  );
}
