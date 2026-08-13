"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/container";
import { Headline } from "@/components/headline";
import type { GymProfile } from "@/lib/types";

if (typeof window !== "undefined") gsap.registerPlugin(SplitText);

export function Hero({ gym }: { gym: GymProfile }) {
  const root = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const scope = root.current;
      const title = titleRef.current;
      if (!scope || !title) return;

      const fades = scope.querySelectorAll(".hero-fade");
      gsap.set(fades, { y: 22, opacity: 0 });

      let cancelled = false;
      const rafId = requestAnimationFrame(async () => {
        if (document.fonts.status !== "loaded") await document.fonts.ready;
        if (cancelled || !title || title.dataset.split === "true") return;
        title.dataset.split = "true";

        const split = SplitText.create(title, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        gsap.set(split.lines, { yPercent: 115 });

        gsap
          .timeline({ delay: 0.1 })
          .to(split.lines, { yPercent: 0, duration: 1.05, stagger: 0.08, ease: "expo.out" }, 0)
          .to(fades, { y: 0, opacity: 1, duration: 0.7, stagger: 0.07, ease: "expo.out" }, 0.4);
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
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pt-32 pb-16"
    >
      {/* Resplandor lima muy bajo: da volumen al negro sin teñir el contenido. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(70% 55% at 80% 15%, rgba(192,253,26,0.13) 0%, transparent 65%)",
        }}
      />

      <Container>
        <p className="hero-fade mb-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.24em] text-muted">
          <span className="flex items-center gap-2 text-lime">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" aria-hidden />
            {gym.city}, {gym.region}
          </span>
          <span className="hidden h-3 w-px bg-line-strong sm:block" aria-hidden />
          <span>{gym.tagline}</span>
        </p>

        <h1
          ref={titleRef}
          className="font-display max-w-[15ch] text-[clamp(2.7rem,9vw,8rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em]"
        >
          <Headline text={gym.heroTitle} />
        </h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <p className="hero-fade max-w-xl text-lg leading-relaxed text-muted">
            {gym.heroSubtitle}
          </p>

          <div className="hero-fade flex flex-wrap items-center gap-4">
            <a
              href={`https://wa.me/${gym.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-8 py-4 text-sm font-semibold uppercase tracking-wide text-bg transition-transform duration-300 hover:scale-[1.03]"
            >
              Probá una clase
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            {/* Prueba social real: 5.0 con 22 reseñas verificables en Google. */}
            <div className="flex items-center gap-3 rounded-full border border-line px-5 py-3">
              <span className="flex" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={13} className="fill-lime text-lime" />
                ))}
              </span>
              <span className="text-sm text-muted">
                <strong className="font-semibold text-fg">{gym.rating.toFixed(1)}</strong> ·{" "}
                {gym.reviewCount} reseñas
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
