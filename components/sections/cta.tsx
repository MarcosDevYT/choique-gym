import { ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import type { GymProfile } from "@/lib/types";

export function CallToAction({ gym }: { gym: GymProfile }) {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-line py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 60% at 50% 100%, rgba(192,253,26,0.14) 0%, transparent 68%)",
        }}
      />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SplitLines>
            <h2 className="font-display text-[clamp(2rem,6.5vw,5rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em]">
              {gym.claim}
            </h2>
          </SplitLines>

          <Reveal y={20} delay={0.12}>
            <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-muted">
              Escribinos y coordinamos tu primera clase. Te mostramos el lugar, te
              contamos los planes y entrenás.
            </p>
          </Reveal>

          <Reveal y={20} delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${gym.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-9 py-4 text-sm font-semibold uppercase tracking-wide text-bg transition-transform duration-300 hover:scale-[1.03]"
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
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-9 py-4 text-sm uppercase tracking-wide text-fg transition-colors duration-300 hover:border-lime hover:text-lime"
              >
                Llamar al gimnasio
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
