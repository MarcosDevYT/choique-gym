"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

/**
 * Revela un titular línea por línea con máscara.
 *
 * El SplitText se crea diferido con requestAnimationFrame, fuera del contexto
 * síncrono de useGSAP: si se crea adentro, GSAP lo trackea y lo auto-revierte
 * en cada cleanup (incluido el doble montaje de desarrollo), lo que corrompe
 * el texto multilínea. El guard por dataset evita partirlo dos veces, y se
 * espera a que las fuentes carguen porque si mide antes, las líneas quedan
 * cortadas donde no van.
 */
export function SplitLines({
  children,
  className = "",
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      let cancelled = false;

      const rafId = requestAnimationFrame(async () => {
        if (document.fonts.status !== "loaded") await document.fonts.ready;
        if (cancelled || !el || el.dataset.split === "true") return;
        el.dataset.split = "true";

        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });
        gsap.set(split.lines, { yPercent: 110 });
        gsap.to(split.lines, {
          yPercent: 0,
          duration: 0.9,
          stagger,
          delay,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      return () => {
        cancelled = true;
        cancelAnimationFrame(rafId);
      };
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/** Fade + desplazamiento genérico al entrar en viewport. */
export function Reveal({
  children,
  className = "",
  y = 28,
  delay = 0,
  duration = 1,
  start = "top 90%",
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  duration?: number;
  start?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "expo.out",
        scrollTrigger: { trigger: ref.current, start, once: true },
      });
    },
    { scope: ref, dependencies: [y, delay, duration, start] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

/**
 * Cuenta de 0 al valor cuando entra en pantalla. Solo se usa con números
 * reales; el texto queda accesible porque el valor final ya está en el DOM.
 */
export function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const counter = { value: 0 };
      gsap.to(counter, {
        value: to,
        duration: 1.6,
        ease: "expo.out",
        scrollTrigger: { trigger: el, start: "top 92%", once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [to, suffix] }
  );

  return <span ref={ref}>{`${to}${suffix}`}</span>;
}
