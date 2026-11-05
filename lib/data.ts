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
 * Gimnasio ficticio: el nombre, la dirección, el teléfono, las redes, las
 * reseñas y los números están inventados para mostrar el diseño. No
 * corresponden a ningún negocio real.
 *
 * Cuando se conecte NeonDB, este archivo se reemplaza por `lib/queries.ts`
 * con las mismas funciones de lectura. Los componentes no se tocan.
 */

export const gym: GymProfile = {
  id: "main",
  name: "Forja",
  legalName: "Forja — Training Club",
  tagline: "Una experiencia de entrenamiento diferente",
  heroTitle: "Entrenar\nen serio.\n*Sin vueltas.*",
  heroSubtitle:
    "Musculación, funcional y disciplinas de combate en el corazón de Córdoba. Equipamiento nuevo, profesores en sala y un lugar que da ganas de volver.",
  about: [
    "Forja nació con una idea simple: que entrenar no se sienta una obligación. Un espacio amplio, limpio y bien equipado, donde cada persona encuentra su ritmo — desde quien pisa un gimnasio por primera vez hasta quien entrena hace años.",
    "Somos un club independiente, armado por entrenadores, y eso se nota en el estándar: máquinas nuevas, mantenimiento al día y profesores en sala corrigiendo técnica, no mirando el celular.",
  ],
  claim: "La primera clase\nes la más difícil.\n*El resto lo hacemos fácil.*",
  phone: "0351 555-0142",
  whatsapp: "5493515550142",
  instagram: "https://instagram.com/forja.trainingclub",
  instagramHandle: "@forja.trainingclub",
  followers: 3180,
  rating: 4.9,
  reviewCount: 38,
  address: "Av. Los Andes 1450",
  addressDetail: "Esquina Las Moras",
  addressShort: "Av. Los Andes y Las Moras",
  city: "Córdoba",
  region: "Córdoba",
  lat: -31.4201,
  lng: -64.1888,
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

/** Opiniones de ejemplo: los nombres y los textos están inventados. */
export const testimonials: Testimonial[] = [
  {
    id: "lucia",
    author: "Lucía F.",
    quote:
      "Todo nuevo y siempre impecable. Los profes te corrigen la técnica sin que se los pidas y hay un montón de actividades para elegir. Me dio ganas de volver desde el primer día.",
    rating: 5,
    source: "Alumna",
    active: true,
    order: 0,
  },
  {
    id: "tomas",
    author: "Tomás I.",
    quote:
      "Las máquinas están bien cuidadas y cuando alguna falla la arreglan enseguida. Se nota que limpian todo el día.",
    rating: 5,
    source: "Alumno",
    active: true,
    order: 1,
  },
  {
    id: "carolina",
    author: "Carolina G.",
    quote: "Un 10. Muy buena relación precio-calidad, amplio y siempre limpio.",
    rating: 5,
    source: "Alumna",
    active: true,
    order: 2,
  },
  {
    id: "martin",
    author: "Martín R.",
    quote: "Buena onda, buena atención y siempre hay alguien mirando cómo entrenás.",
    rating: 5,
    source: "Alumno",
    active: true,
    order: 3,
  },
  {
    id: "sofia",
    author: "Sofía P.",
    quote: "Instalaciones impecables y profes que saben.",
    rating: 5,
    source: "Alumna",
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

/** Horarios de ejemplo. */
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

/** Números de la banda lima (de ejemplo). */
export const stats: Stat[] = [
  { id: "rating", value: "4.9", label: "Puntuación de alumnos", order: 0 },
  { id: "resenas", value: "38", label: "Reseñas de alumnos", order: 1 },
  { id: "comunidad", value: "3.1K", label: "En la comunidad", order: 2 },
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
