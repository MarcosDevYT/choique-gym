"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/container";
import { Headline } from "@/components/headline";
import { PhotoSlot } from "@/components/photo-slot";
import type { GymProfile } from "@/lib/types";

if (typeof window !== "undefined") gsap.registerPlugin(SplitText);

/**
 * Hero a dos columnas: el titular manda a la izquierda y la foto sostiene la
 * derecha, con el badge de puntuación de Google encima.
 *
 * Los números generales no van acá sino en la banda lima de más abajo: eran
 * los mismos cuatro y repetirlos en un mismo scroll los debilita.
 */
export function Hero({ gym }: { gym: GymProfile }) {
  const root = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const scope = root.current;
      const title = titleRef.current;
      if (!scope || !title) return;

      const fades = scope.querySelectorAll(".hero-fade");
      gsap.set(fades, { y: 24, opacity: 0 });

      let cancelled = false;
      const rafId = requestAnimationFrame(async () => {
        if (document.fonts.status !== "loaded") await document.fonts.ready;
        if (cancelled || !title || title.dataset.split === "true") return;
        title.dataset.split = "true";

        // Sin máscara: recortaría la punta de los acentos con este
        // interlineado. Ver el comentario en components/motion.tsx.
        const split = SplitText.create(title, {
          type: "lines",
          linesClass: "line++",
        });
        gsap.set(split.lines, { yPercent: 45, opacity: 0 });

        gsap
          .timeline({ delay: 0.1 })
          .to(split.lines, { yPercent: 0, opacity: 1, duration: 1, stagger: 0.07, ease: "expo.out" }, 0)
          .to(fades, { y: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: "expo.out" }, 0.35);
      });

      return () => {
        cancelled = true;
        cancelAnimationFrame(rafId);
      };
    },
    { scope: root }
  );

  return (
    <section ref={root} id="inicio" className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32">
      <Container>
        <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div>
            <p className="hero-fade eyebrow mb-7 flex items-center gap-2.5 text-lime">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden />
              {gym.city}, {gym.region}
            </p>

            <h1
              ref={titleRef}
              className="display text-[clamp(3.4rem,10.5vw,8.5rem)]"
            >
              <Headline text={gym.heroTitle} />
            </h1>

            <p className="hero-fade mt-8 max-w-lg text-lg leading-relaxed text-muted">
              {gym.heroSubtitle}
            </p>

            <div className="hero-fade mt-9 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/${gym.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.03]"
              >
                Probá una clase
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href="#disciplinas"
                className="inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-fg transition-colors duration-300 hover:border-lime hover:text-lime"
              >
                Ver disciplinas
              </a>
            </div>
          </div>

          {/* Foto con el badge de puntuación encima, al estilo de la referencia. */}
          <div className="hero-fade relative">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-[5/4]">
              <PhotoSlot
                alt={`Entrenamiento en ${gym.legalName}`}
                hint="Foto de la sala entrenando"
              />
            </div>

            <div className="absolute -bottom-5 -left-3 rounded-xl bg-lime px-5 py-4 text-black sm:-left-5">
              <p className="flex items-center gap-1.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={12} className="fill-black text-black" />
                ))}
              </p>
              <p className="display mt-1.5 text-3xl leading-none">
                {gym.rating.toFixed(1)}
              </p>
              <p className="eyebrow mt-1 text-black/70">{gym.reviewCount} reseñas</p>
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
