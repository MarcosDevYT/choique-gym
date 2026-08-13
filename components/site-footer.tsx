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
  return (
    <footer className="border-t border-line bg-surface py-16">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-extrabold uppercase tracking-tight">
              {gym.name}
              <span className="text-lime">.</span>
            </p>
            <p className="mt-3 max-w-xs text-base text-muted">{gym.tagline}</p>
          </div>

          <nav aria-label="Disciplinas">
            <h2 className="text-xs uppercase tracking-[0.2em] text-faint">Disciplinas</h2>
            <ul className="mt-4 flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#disciplinas"
                    className="text-base text-muted transition-colors hover:text-lime"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs uppercase tracking-[0.2em] text-faint">Contacto</h2>
            <ul className="mt-4 flex flex-col gap-3 text-base text-muted">
              <li>
                <a
                  href={`tel:${gym.phone.replace(/[^\d+]/g, "")}`}
                  className="flex items-center gap-2 transition-colors hover:text-lime"
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
                  className="flex items-center gap-2 transition-colors hover:text-lime"
                >
                  <InstagramIcon size={15} />
                  {gym.instagramHandle}
                </a>
              </li>
              <li className="flex items-start gap-2">
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
