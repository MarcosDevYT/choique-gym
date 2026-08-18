import { Clock, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { Reveal, SplitLines } from "@/components/motion";
import type { GymProfile, ScheduleDay } from "@/lib/types";

/**
 * Mapa por iframe de Google Maps con `output=embed`: no necesita API key ni
 * cuenta de facturación, a diferencia de la Maps JavaScript API.
 */
export function Location({
  gym,
  schedule,
}: {
  gym: GymProfile;
  schedule: ScheduleDay[];
}) {
  const mapSrc = `https://maps.google.com/maps?q=${gym.lat},${gym.lng}&z=16&output=embed`;

  return (
    <section id="ubicacion" className="border-t border-line bg-surface py-20 sm:py-28">
      <Container>
        <div className="mb-14 max-w-2xl">
          <p className="eyebrow mb-6 text-lime">Dónde estamos</p>
          <SplitLines>
            <h2 className="display text-[clamp(2.4rem,6vw,4.8rem)]">
              Av. Roca y Charcas
            </h2>
          </SplitLines>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr]">
          <Reveal
            y={24}
            className="aspect-[4/3] overflow-hidden rounded-3xl border border-line lg:aspect-auto lg:min-h-[420px]"
          >
            <iframe
              title={`Mapa de ${gym.legalName} en ${gym.city}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="size-full border-0"
            />
          </Reveal>

          <div className="flex flex-col gap-px overflow-hidden rounded-3xl border border-line bg-line">
            <Reveal y={20} className="bg-surface">
              <div className="flex gap-4 p-7">
                <MapPin size={20} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <div>
                  <h3 className="eyebrow text-faint">Dirección</h3>
                  <p className="mt-2 text-lg text-fg">{gym.address}</p>
                  <p className="text-base text-muted">
                    {gym.addressDetail} — {gym.city}, {gym.region}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.06} className="bg-surface">
              <div className="flex gap-4 p-7">
                <Clock size={20} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <div className="w-full">
                  <h3 className="eyebrow text-faint">Horarios</h3>
                  <dl className="mt-3 flex flex-col gap-2">
                    {schedule.map((day) => (
                      <div key={day.id} className="flex items-baseline justify-between gap-4">
                        <dt className="text-base text-fg">{day.label}</dt>
                        <dd className="text-base tabular-nums text-muted">
                          {day.opens} – {day.closes}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>

            <Reveal y={20} delay={0.12} className="bg-surface">
              <div className="flex gap-4 p-7">
                <Phone size={20} className="mt-0.5 shrink-0 text-lime" aria-hidden />
                <div>
                  <h3 className="eyebrow text-faint">Contacto</h3>
                  <a
                    href={`tel:${gym.phone.replace(/[^\d+]/g, "")}`}
                    className="mt-1 block py-2 text-lg text-fg transition-colors hover:text-lime"
                  >
                    {gym.phone}
                  </a>
                  <a
                    href={gym.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2.5 text-base text-muted transition-colors hover:text-lime"
                  >
                    {gym.instagramHandle}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
