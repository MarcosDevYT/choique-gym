import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Headline } from "@/components/headline";
import { Reveal, SplitLines } from "@/components/motion";
import type { GymProfile } from "@/lib/types";

/**
 * Cierre sobre fondo claro.
 *
 * Toda la página viene en negro; este corte de luminancia es el que hace que
 * el último bloque pegue. Acá el acento no puede ser el lima (sobre crema no
 * contrasta), así que el botón va en negro y el lima queda de detalle.
 */
export function CallToAction({ gym }: { gym: GymProfile }) {
  return (
    <section id="contacto" className="bg-cream py-24 text-black sm:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-8 text-black/50">Empezá cuando quieras</p>

          <SplitLines>
            <h2 className="display text-[clamp(2.6rem,8vw,6.5rem)]">
              <Headline
                text={gym.claim}
                className="[&_span]:text-black/40"
              />
            </h2>
          </SplitLines>

          <Reveal y={20} delay={0.12}>
            <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-black/65">
              Escribinos y coordinamos tu primera clase. Te mostramos el lugar, te
              contamos los planes y entrenás.
            </p>
          </Reveal>

          <Reveal y={20} delay={0.2}>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`https://wa.me/${gym.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-sm font-bold uppercase tracking-wide text-lime transition-transform duration-300 hover:scale-[1.03]"
              >
                <MessageCircle size={17} aria-hidden />
                Escribinos por WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={`tel:${gym.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-black/20 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-black transition-colors duration-300 hover:border-black"
              >
                {gym.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
