import type {
  Feature,
  GymProfile,
  MethodPoint,
  ScheduleDay,
  Service,
  Stat,
  Testimonial,
} from "@/lib/types";

/**
 * Fuente única de verdad mientras no haya base de datos.
 *
 * Todo lo de acá es información real tomada del Instagram del gimnasio
 * (@choique.gym) y de su ficha de Google Maps. Lo que NO estaba verificado
 * está marcado con TODO: preferible dejarlo señalado a inventar un dato que
 * después haya que desmentir frente al cliente.
 *
 * Cuando se conecte NeonDB, este archivo se reemplaza por `lib/queries.ts`
 * con las mismas funciones de lectura. Los componentes no se tocan.
 */

export const gym: GymProfile = {
  id: "main",
  name: "Choique",
  legalName: "Choique — Fitness & Gym",
  tagline: "Una experiencia de entrenamiento diferente",
  heroTitle: "Entrenar\nen serio.\n*Sin vueltas.*",
  heroSubtitle:
    "Musculación, funcional y disciplinas de combate en el corazón de Puerto Madryn. Equipamiento nuevo, profesores en sala y un lugar que da ganas de volver.",
  about: [
    "Choique nació con una idea simple: que entrenar no se sienta una obligación. Un espacio amplio, limpio y bien equipado, donde cada persona encuentra su ritmo — desde quien pisa un gimnasio por primera vez hasta quien entrena hace años.",
    "Somos parte de la familia Sport Club, y eso se nota en el estándar: máquinas nuevas, mantenimiento al día y profesores en sala corrigiendo técnica, no mirando el celular.",
  ],
  claim: "La primera clase\nes la más difícil.\n*El resto lo hacemos fácil.*",
  phone: "0280 435-3089",
  whatsapp: "5492804353089",
  instagram: "https://instagram.com/choique.gym",
  instagramHandle: "@choique.gym",
  followers: 4762,
  rating: 5,
  reviewCount: 22,
  address: "Av. Julio Argentino Roca 1999",
  addressDetail: "Esquina Charcas",
  city: "Puerto Madryn",
  region: "Chubut",
  lat: -42.7758,
  lng: -65.0378,
  // TODO: confirmar el horario de apertura. Google Maps solo expone el cierre
  // (23:00) y una reseña menciona actividades desde las 6:00.
  opensAt: "06:00",
  closesAt: "23:00",
};

export const services: Service[] = [
  {
    id: "musculacion",
    slug: "musculacion",
    name: "Musculación",
    summary: "Sala completa con equipamiento nuevo",
    description:
      "Máquinas y peso libre para trabajar fuerza e hipertrofia a tu ritmo, con profesores en sala que te arman la rutina y te corrigen la técnica.",
    icon: "Dumbbell",
    intensity: "MEDIA",
    frequency: "Libre",
    duration: "Sala completa",
    featured: false,
    active: true,
    order: 0,
  },
  {
    id: "calistenia",
    slug: "calistenia",
    name: "Calistenia",
    summary: "Tu propio cuerpo como resistencia",
    description:
      "Entrenamiento con el peso corporal: dominadas, fondos, progresiones y control. Ganás fuerza real, movilidad y coordinación sin depender de máquinas.",
    icon: "Activity",
    intensity: "ALTA",
    frequency: "3x / semana",
    duration: "Progresiones",
    featured: false,
    active: true,
    order: 1,
  },
  {
    id: "box",
    slug: "box",
    name: "Box",
    summary: "Técnica, ritmo y descarga",
    description:
      "Clases de boxeo con trabajo de guardia, desplazamiento y combinaciones. Cardio intenso, coordinación fina y una de las mejores formas de descargar la semana.",
    icon: "Swords",
    intensity: "ALTA",
    frequency: "2x / semana",
    duration: "Clases de 60′",
    featured: true,
    active: true,
    order: 2,
  },
  {
    id: "kick-boxing",
    slug: "kick-boxing",
    name: "Kick Boxing",
    summary: "Puños, piernas y acondicionamiento",
    description:
      "Suma patadas y trabajo de piernas al golpeo. Una clase completa que mezcla técnica de combate con acondicionamiento físico de alta intensidad.",
    icon: "Flame",
    intensity: "ALTA",
    frequency: "2x / semana",
    duration: "Clases de 60′",
    featured: false,
    active: true,
    order: 3,
  },
  {
    id: "barre-integral",
    slug: "barre-integral",
    name: "Barre Integral",
    summary: "Fuerza, postura y elongación",
    description:
      "Trabajo de bajo impacto que combina barra, elementos de danza y pilates. Tonifica en profundidad, mejora la postura y cuida las articulaciones.",
    icon: "Sparkles",
    intensity: "BAJA",
    frequency: "2x / semana",
    duration: "Bajo impacto",
    featured: false,
    active: true,
    order: 4,
  },
];

/**
 * Reseñas reales publicadas en Google Maps. Se citan textuales y con el
 * nombre de quien las escribió: es prueba social verificable, no marketing.
 */
export const testimonials: Testimonial[] = [
  {
    id: "natalia-visintini",
    author: "Natalia Visintini",
    quote:
      "Es un gimnasio con todo nuevo, impecable. Tenés instructores disponibles que te ayudan a corregir técnicas y una variedad de actividades súper interesante. El lugar es hermoso. ¡Espectacular!",
    rating: 5,
    source: "Google Maps",
    active: true,
    order: 0,
  },
  {
    id: "valentino-casasnovas",
    author: "Valentino Casasnovas",
    quote:
      "Muy buen gimnasio, las máquinas en buen estado y si alguna se rompe el equipo no tarda en arreglarla. La limpieza es muy buena.",
    rating: 5,
    source: "Google Maps",
    active: true,
    order: 1,
  },
  {
    id: "mariana-mazzocco",
    author: "Mariana Mazzocco",
    quote:
      "Gimnasio de 10. Relación precio-calidad muy buena. Grande, espacioso y limpio.",
    rating: 5,
    source: "Google Maps",
    active: true,
    order: 2,
  },
  {
    id: "resena-atencion",
    author: "Reseña de Google",
    quote: "Buen lugar, excelente atención, monitoreo constante.",
    rating: 5,
    source: "Google Maps",
    active: true,
    order: 3,
  },
  {
    id: "resena-instalaciones",
    author: "Reseña de Google",
    quote: "Instalaciones impecables, profes excelentes.",
    rating: 5,
    source: "Google Maps",
    active: true,
    order: 4,
  },
];

/** Lo que diferencia al lugar, sacado de lo que repiten las reseñas. */
export const features: Feature[] = [
  {
    id: "equipamiento",
    title: "Equipamiento nuevo",
    description:
      "Máquinas en buen estado y mantenimiento rápido: si algo se rompe, se arregla.",
    icon: "Wrench",
    active: true,
    order: 0,
  },
  {
    id: "profesores",
    title: "Profesores en sala",
    description:
      "Instructores disponibles para corregirte la técnica y acompañarte, siempre.",
    icon: "Users",
    active: true,
    order: 1,
  },
  {
    id: "espacio",
    title: "Amplio y limpio",
    description:
      "Un salón grande y ordenado donde se entrena cómodo, incluso en horario pico.",
    icon: "Sparkle",
    active: true,
    order: 2,
  },
  {
    id: "variedad",
    title: "Varias disciplinas",
    description:
      "Cinco actividades distintas con una sola cuota: probás hasta encontrar la tuya.",
    icon: "LayoutGrid",
    active: true,
    order: 3,
  },
];

/**
 * TODO: confirmar la grilla horaria real con el gimnasio. Google Maps solo
 * publica el horario de cierre, así que esto es una estructura de ejemplo
 * lista para completar con los datos verdaderos.
 */
export const schedule: ScheduleDay[] = [
  {
    id: "semana",
    label: "Lunes a viernes",
    opens: "06:00",
    closes: "23:00",
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    active: true,
    order: 0,
  },
  {
    id: "sabado",
    label: "Sábados",
    opens: "09:00",
    closes: "18:00",
    daysOfWeek: ["Saturday"],
    active: true,
    order: 1,
  },
];

/** Números de la banda lima. Todos verificables en Google o Instagram. */
export const stats: Stat[] = [
  { id: "rating", value: "5.0", label: "Puntuación en Google", order: 0 },
  { id: "resenas", value: "22", label: "Reseñas de alumnos", order: 1 },
  { id: "comunidad", value: "4.7K", label: "En la comunidad", order: 2 },
  { id: "disciplinas", value: "5", label: "Disciplinas", order: 3 },
];

/** Lo que repiten las reseñas, convertido en promesas concretas. */
export const methodPoints: MethodPoint[] = [
  { id: "tecnica", text: "Profesores en sala corrigiendo técnica, no mirando el celular", order: 0 },
  { id: "maquinas", text: "Máquinas nuevas y mantenimiento rápido: si algo se rompe, se arregla", order: 1 },
  { id: "espacio", text: "Salón amplio y limpio, cómodo incluso en horario pico", order: 2 },
  { id: "cuota", text: "Una sola cuota para las cinco disciplinas, sin adicionales", order: 3 },
];

// ── Lecturas ────────────────────────────────────────────────────────────────
// Mismas firmas que van a tener las queries de Prisma, así el reemplazo es
// cambiar el cuerpo de estas funciones y nada más.

export const getGym = () => gym;
export const getServices = () =>
  services.filter((s) => s.active).sort((a, b) => a.order - b.order);
export const getTestimonials = () =>
  testimonials.filter((t) => t.active).sort((a, b) => a.order - b.order);
export const getFeatures = () =>
  features.filter((f) => f.active).sort((a, b) => a.order - b.order);
export const getSchedule = () =>
  schedule.filter((d) => d.active).sort((a, b) => a.order - b.order);
export const getStats = () => [...stats].sort((a, b) => a.order - b.order);
export const getMethodPoints = () => [...methodPoints].sort((a, b) => a.order - b.order);
