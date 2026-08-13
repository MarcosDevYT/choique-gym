import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Marquee } from "@/components/sections/marquee";
import { Services } from "@/components/sections/services";
import { About } from "@/components/sections/about";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { CallToAction } from "@/components/sections/cta";
import { getFeatures, getGym, getSchedule, getServices, getTestimonials } from "@/lib/data";
import { buildJsonLd } from "@/lib/seo";

/**
 * Toda la data se lee acá y baja por props. Cuando se conecte NeonDB, estas
 * llamadas pasan a ser `await` de las queries de Prisma y las secciones no
 * cambian: ya reciben todo desde afuera.
 */
export default function Home() {
  const gym = getGym();
  const services = getServices();
  const testimonials = getTestimonials();
  const features = getFeatures();
  const schedule = getSchedule();

  const jsonLd = buildJsonLd({ gym, services, schedule });

  return (
    <>
      {/* Datos estructurados: así Google puede mostrar el gimnasio con sus
          horarios y disciplinas, y las IA pueden recomendarlo. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader gym={gym} />
      <main>
        <Hero gym={gym} />
        <Marquee services={services} />
        <Services services={services} />
        <About gym={gym} features={features} />
        <Testimonials testimonials={testimonials} gym={gym} />
        <Location gym={gym} schedule={schedule} />
        <CallToAction gym={gym} />
      </main>
      <SiteFooter gym={gym} services={services} />
    </>
  );
}
