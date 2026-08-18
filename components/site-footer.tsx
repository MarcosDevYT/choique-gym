import { MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Container } from "@/components/container";
import type { GymProfile, Service } from "@/lib/types";

export function SiteFooter({
  gym,
  services,
}: {
  gym: GymProfile;
  services: Service[];
}) {
  // `pb-28` en móvil: el botón flotante de WhatsApp se apoya en la esquina
  // inferior derecha y tapaba la última línea del footer.
  return (
    <footer className="border-t border-line bg-surface pb-28 pt-16 sm:pb-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="display text-4xl">
              {gym.name}
              <span className="text-lime">.</span>
            </p>
            <p className="mt-3 max-w-xs text-base text-muted">{gym.tagline}</p>
          </div>

          <nav aria-label="Disciplinas">
            <h2 className="eyebrow text-faint">Disciplinas</h2>
            {/* `py-2.5` lleva cada enlace a ~44px de alto: es el mínimo para
                tocar cómodo con el dedo, y en el footer los enlaces quedaban
                en 17px. */}
            <ul className="mt-2 flex flex-col">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#disciplinas"
                    className="block py-2.5 text-base text-muted transition-colors hover:text-lime"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow text-faint">Contacto</h2>
            <ul className="mt-2 flex flex-col text-base text-muted">
              <li>
                <a
                  href={`tel:${gym.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 py-2.5 transition-colors hover:text-lime"
                >
                  <Phone size={15} aria-hidden />
                  {gym.phone}
                </a>
              </li>
              <li>
                <a
                  href={gym.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 transition-colors hover:text-lime"
                >
                  <InstagramIcon size={15} />
                  {gym.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2 py-2.5">
                <MapPin size={15} className="mt-1 shrink-0" aria-hidden />
                <span>
                  {gym.address}
                  <br />
                  {gym.city}, {gym.region}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-line pt-8 text-sm text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {gym.legalName}
          </p>
          <p>{gym.city}, {gym.region}, Argentina</p>
        </div>
      </Container>
    </footer>
  );
}
