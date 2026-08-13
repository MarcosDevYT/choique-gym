/**
 * Estos tipos están escritos con la forma que van a tener los modelos de
 * Prisma cuando se conecte NeonDB: cada entidad tiene `id`, y las que se
 * listan tienen `active` y `order`.
 *
 * Eso hace que la migración sea mecánica y no un rediseño:
 *   1. Se traducen estas interfaces a `schema.prisma` (son 1 a 1).
 *   2. `lib/data.ts` se reemplaza por `lib/queries.ts` con las consultas.
 *   3. Los componentes no cambian: ya reciben todo por props y filtran por
 *      `active` / ordenan por `order`, igual que lo haría la query.
 */

export type Intensity = "BAJA" | "MEDIA" | "ALTA";

export interface GymProfile {
  id: string;
  name: string;
  legalName: string;
  tagline: string;
  heroTitle: string;
  heroSubtitle: string;
  about: string[];
  /** Frase corta que resume la propuesta, para el bloque de cierre. */
  claim: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  instagramHandle: string;
  followers: number;
  rating: number;
  reviewCount: number;
  address: string;
  addressDetail: string;
  city: string;
  region: string;
  lat: number;
  lng: number;
  opensAt: string;
  closesAt: string;
}

export interface Service {
  id: string;
  slug: string;
  name: string;
  summary: string;
  description: string;
  /** Nombre del ícono de lucide-react que representa la disciplina. */
  icon: string;
  intensity: Intensity;
  active: boolean;
  order: number;
}

export interface Testimonial {
  id: string;
  author: string;
  quote: string;
  rating: number;
  /** De dónde salió la reseña, para poder mostrarlo y no inventar prueba social. */
  source: string;
  active: boolean;
  order: number;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  active: boolean;
  order: number;
}

export interface ScheduleDay {
  id: string;
  label: string;
  opens: string;
  closes: string;
  /** Días de la semana en formato Schema.org, para los datos estructurados. */
  daysOfWeek: string[];
  active: boolean;
  order: number;
}
