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
 * Entra completo en una pantalla sin scrollear. La clave es que los tamaños
 * dependen del ALTO del viewport y no solo del ancho: en un monitor de 1080px
 * el navegador deja unos 900px útiles (barra de tareas y su propia interfaz),
 * así que dimensionar solo con `vw` desborda. Cada medida grande usa
 * `clamp(mínimo, min(medida-por-ancho, medida-por-alto), máximo)`, de modo que
 * gana la restricción más apretada de las dos.
 *
 * El `pt-20` reserva la altura exacta del navbar, que es fijo y se superpone.
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
    <section
      ref={root}
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20"
    >
      <Container className="py-[clamp(1.5rem,4vh,3.5rem)]">
        {/*
          La columna de la foto es más angosta que la del texto a propósito.
          Repartido en partes casi iguales, la foto quedaba en 2.26:1 — más
          panorámica que un video — y no había forma de compensarlo con alto
          porque el hero tiene que entrar en una pantalla. Angostarla arregla
          la proporción sin gastar presupuesto vertical.
        */}
        <div className="grid items-end gap-[clamp(1.5rem,3vh,2.5rem)] lg:grid-cols-[1.3fr_0.7fr] lg:gap-12">
          <div>
            <p className="hero-fade eyebrow mb-[clamp(0.75rem,2vh,1.75rem)] flex items-center gap-2.5 text-lime">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden />
              {gym.city}, {gym.region}
            </p>

            <h1
              ref={titleRef}
              className="display text-[clamp(2.6rem,min(9.5vw,12.5vh),8rem)]"
            >
              <Headline text={gym.heroTitle} />
            </h1>

            <p className="hero-fade mt-[clamp(1rem,2.5vh,2rem)] max-w-lg text-[clamp(0.95rem,1.8vh,1.125rem)] leading-relaxed text-muted">
              {gym.heroSubtitle}
            </p>

            <div className="hero-fade mt-[clamp(1.25rem,3vh,2.25rem)] flex flex-wrap items-center gap-3">
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

          {/*
            La foto es la pieza más alta del hero, así que su altura sale
            directamente del viewport en vez de una relación de aspecto fija:
            con `aspect-ratio` la altura la manda el ancho de la columna y en
            pantallas bajas se desbordaba. La imagen usa object-cover, así que
            se adapta a cualquier proporción.

            Se lleva menos alto en pantallas chicas porque ahí el layout se
            apila y la foto compite con el titular, el texto y los botones por
            el mismo espacio; a partir de `lg` van en dos columnas y puede
            crecer.
          */}
          <div className="hero-fade relative">
            <div className="h-[clamp(9rem,22vh,16rem)] overflow-hidden rounded-2xl lg:h-[clamp(15rem,45vh,34rem)]">
              <PhotoSlot
                alt={`Entrenamiento en ${gym.legalName}`}
                hint="Foto de la sala entrenando"
              />
            </div>

            <div className="absolute -bottom-4 -left-3 rounded-xl bg-lime px-4 py-3 text-black sm:-left-5 sm:px-5 sm:py-4">
              <p className="flex items-center gap-1.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={11} className="fill-black text-black" />
                ))}
              </p>
              <p className="display mt-1.5 text-[clamp(1.5rem,3vh,1.875rem)] leading-none">
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
