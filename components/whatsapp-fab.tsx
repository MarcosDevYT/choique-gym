import { MessageCircle } from "lucide-react";
import type { GymProfile } from "@/lib/types";

/**
 * Botón flotante de WhatsApp.
 *
 * Existe sobre todo por el teléfono: el CTA del header se oculta en pantallas
 * chicas para que no compita con el logo y el menú, así que sin esto un
 * visitante en celular tiene que llegar hasta el final de la página para
 * encontrar cómo escribir. En un gimnasio esa es LA acción que importa.
 *
 * z-30 a propósito: por debajo del panel del menú móvil (z-40), si no queda
 * flotando encima del menú abierto.
 */
export function WhatsAppFab({ gym }: { gym: GymProfile }) {
  return (
    <a
      href={`https://wa.me/${gym.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="fixed bottom-5 right-5 z-30 flex size-14 items-center justify-center rounded-full bg-lime text-black shadow-[0_8px_30px_-8px_rgba(192,253,26,0.6)] transition-transform duration-300 hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={24} strokeWidth={2} aria-hidden />
    </a>
  );
}
