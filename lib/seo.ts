import type { GymProfile, ScheduleDay, Service } from "@/lib/types";

/**
 * Datos estructurados Schema.org para el gimnasio.
 *
 * Se usa `HealthClub` + `SportsActivityLocation`, que es el tipo que Google
 * espera para un gimnasio, con horarios y disciplinas derivados de los mismos
 * datos que muestra la página — así nunca se contradicen.
 *
 * A propósito NO se incluye `aggregateRating` con las reseñas de Google:
 * las reseñas que un negocio publica en su propio sitio se consideran
 * "auto-servicio", no generan resultados enriquecidos y pueden derivar en una
 * acción manual. Las reseñas se muestran igual para las personas, citando la
 * fuente, que es donde sí suman.
 */
export function buildJsonLd({
  gym,
  services,
  schedule,
}: {
  gym: GymProfile;
  services: Service[];
  schedule: ScheduleDay[];
}) {
  const businessId = "#gimnasio";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
        "@id": businessId,
        name: gym.legalName,
        alternateName: gym.name,
        description: gym.heroSubtitle,
        telephone: gym.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: gym.address,
          addressLocality: gym.city,
          addressRegion: gym.region,
          addressCountry: "AR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: gym.lat,
          longitude: gym.lng,
        },
        areaServed: { "@type": "City", name: gym.city },
        sameAs: [gym.instagram],
        openingHoursSpecification: schedule.map((day) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: day.daysOfWeek,
          opens: day.opens,
          closes: day.closes,
        })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Disciplinas",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.name,
              description: service.description,
            },
          })),
        },
      },
    ],
  };
}
