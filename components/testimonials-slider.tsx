"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/types";

import "swiper/css";
import "swiper/css/pagination";

/** Slides visibles en la grilla más ancha. */
const MAX_VISIBLES = 3;

/**
 * Carrusel de reseñas: avanza solo, muestra hasta tres y vuelve a empezar sin
 * corte.
 *
 * Para poder clonar y empalmar el bucle, Swiper exige al menos el doble de
 * slides que los visibles (6 con 3 a la vista). Hay 5 reseñas reales, así que
 * la lista se repite hasta llegar a ese mínimo — no se inventan reseñas. Que
 * una vuelva a aparecer después de una vuelta completa es lo que hace
 * cualquier carrusel infinito; la alternativa de Swiper es rellenar con
 * slides en blanco, que se ven como huecos.
 */
export function TestimonialsSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const minimoParaBucle = MAX_VISIBLES * 2;
  const slides = [...testimonials];
  let vuelta = 0;
  while (slides.length < minimoParaBucle && testimonials.length > 0) {
    slides.push(testimonials[vuelta % testimonials.length]);
    vuelta += 1;
  }
  const puedeHacerBucle = slides.length >= minimoParaBucle;

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={16}
      loop={puedeHacerBucle}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 16 },
        1024: { slidesPerView: 3, spaceBetween: 16 },
      }}
      className="!pb-14"
    >
      {slides.map((testimonial, i) => (
        <SwiperSlide key={`${testimonial.id}-${i}`} className="h-auto">
          {/* h-full para que todas las tarjetas de una fila midan igual, sin
              importar el largo de cada reseña. */}
          <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
            <div className="flex gap-0.5" aria-label={`${testimonial.rating} de 5 estrellas`}>
              {Array.from({ length: testimonial.rating }).map((_, s) => (
                <Star key={s} size={13} className="fill-lime text-lime" aria-hidden />
              ))}
            </div>

            <blockquote className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-fg/90">
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
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
