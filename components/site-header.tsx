"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/container";
import type { GymProfile } from "@/lib/types";

const LINKS = [
  { href: "#disciplinas", label: "Disciplinas" },
  { href: "#el-lugar", label: "El lugar" },
  { href: "#opiniones", label: "Opiniones" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function SiteHeader({ gym }: { gym: GymProfile }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Con el menú abierto se bloquea el scroll del fondo, si no la página de
  // atrás se mueve mientras el panel está encima.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-bg/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <a
            href="#inicio"
            className="display flex h-11 items-center text-xl"
          >
            {gym.name}
            <span className="text-lime">.</span>
          </a>

          <nav aria-label="Secciones" className="hidden items-center gap-9 lg:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors duration-300 hover:text-lime"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${gym.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-lime px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-black transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
            >
              Sumate
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex size-11 items-center justify-center rounded-full border border-line text-fg transition-colors hover:border-lime hover:text-lime lg:hidden"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </Container>
      </header>

      {/* Menú móvil a pantalla completa. */}
      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-center bg-bg lg:hidden"
      >
        <Container>
          <nav aria-label="Secciones" className="flex flex-col gap-2">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="display border-b border-line py-5 text-4xl transition-colors hover:text-lime"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${gym.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-8 inline-flex justify-center rounded-full bg-lime px-8 py-4 text-sm font-bold uppercase tracking-wide text-black"
            >
              Escribinos por WhatsApp
            </a>
          </nav>
        </Container>
      </div>
    </>
  );
}
