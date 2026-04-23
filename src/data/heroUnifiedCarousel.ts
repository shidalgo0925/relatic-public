import { campusUrl, nodeOneLoginUrl, nodeOneUrl } from '../lib/nodeone'

/**
 * Carrusel único del hero: cada slide = misma estructura (texto + CTAs | imagen).
 * Título, párrafo, imagen y (opcionalmente) etiquetas de botones cambian juntos al avanzar.
 */

export type HeroCtaVariant = 'navy' | 'gold' | 'outline'

export type HeroCta =
  | { variant: HeroCtaVariant; label: string; kind: 'internal'; to: string }
  | { variant: HeroCtaVariant; label: string; kind: 'external'; href: string }

export type HeroUnifiedSlide = {
  id: string
  kicker: string
  headline: string
  body: string
  image: { src: string; alt: string }
  /** Tres CTAs por slide (misma jerarquía visual que el diseño de referencia). */
  ctas: [HeroCta, HeroCta, HeroCta]
}

/** CTAs base del embudo (se reutilizan en todos los slides; solo cambian copy si aplica). */
const funnel: [HeroCta, HeroCta, HeroCta] = [
  { kind: 'internal', to: '/programas', label: 'Explorar programas', variant: 'navy' },
  { kind: 'external', href: campusUrl(), label: 'Explorar servicios (sin costo)', variant: 'gold' },
  { kind: 'external', href: nodeOneUrl('/register'), label: 'Registrarse (gratis)', variant: 'outline' },
]

export const heroUnifiedSlides: HeroUnifiedSlide[] = [
  {
    id: 'ecosistema',
    kicker: 'Relatic Panamá',
    headline:
      'Impulsamos la investigación, la formación y la publicación científica en un solo ecosistema.',
    body: 'Vitrina y orientación en este sitio. En la Plataforma de Servicio podés explorar el catálogo de servicios sin costo; con registro gratuito accedés, comparás y avanzás cuando corresponda.',
    image: {
      /* Foto original (solo imagen), no captura de pantalla del hero. */
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
      alt: 'Profesionales en un entorno académico y colaborativo',
    },
    ctas: funnel,
  },
  {
    id: 'formacion',
    kicker: 'Formación',
    headline: 'Diplomados y rutas formativas con rigor académico y aplicación en proyectos reales.',
    body: 'Fortalecé competencias de investigación, escritura científica y gestión editorial con acompañamiento serio.',
    image: {
      src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80',
      alt: 'Personas en taller formativo con laptops',
    },
    ctas: [
      { kind: 'internal', to: '/programas', label: 'Ver programas', variant: 'navy' },
      { kind: 'external', href: campusUrl(), label: 'Explorar servicios (sin costo)', variant: 'gold' },
      { kind: 'external', href: nodeOneUrl('/register'), label: 'Registrarse (gratis)', variant: 'outline' },
    ],
  },
  {
    id: 'publicacion',
    kicker: 'Publicación',
    headline: 'Revistas, libros y visibilidad científica con estándares editoriales claros.',
    body: 'Del manuscrito a la postulación: editorial, revisión y comunicación académica sin improvisación.',
    image: {
      src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1600&q=80',
      alt: 'Material de lectura e investigación sobre una mesa',
    },
    ctas: [
      { kind: 'internal', to: '/servicios', label: 'Resumen de servicios', variant: 'navy' },
      { kind: 'external', href: campusUrl(), label: 'Catálogo (sin costo)', variant: 'gold' },
      { kind: 'external', href: nodeOneUrl('/register'), label: 'Registrarse (gratis)', variant: 'outline' },
    ],
  },
  {
    id: 'comunidad',
    kicker: 'Comunidad',
    headline: 'Espacios sobrios para compartir evidencia y construir red entre pares.',
    body: 'Foros y encuentros con densidad académica: menos ruido comercial, más intercambio útil.',
    image: {
      src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80',
      alt: 'Grupo diverso en conversación de trabajo',
    },
    ctas: [
      { kind: 'internal', to: '/comunidad', label: 'Ver comunidad', variant: 'navy' },
      { kind: 'internal', to: '/eventos', label: 'Ver eventos', variant: 'gold' },
      { kind: 'external', href: nodeOneUrl('/register'), label: 'Registrarse (gratis)', variant: 'outline' },
    ],
  },
  {
    id: 'plataforma',
    kicker: 'Operación digital',
    headline: 'Inscripciones, servicios, citas y seguimiento en un solo lugar: nuestra Plataforma de Servicio.',
    body: 'Explorá y consultá ofertas sin costo. El acceso a la plataforma es con cuenta gratuita; pagos o contratación solo cuando apliquen a lo que elijas.',
    image: {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80',
      alt: 'Personas revisando pantallas y flujo de trabajo digital',
    },
    ctas: [
      { kind: 'external', href: campusUrl(), label: 'Explorar servicios (sin costo)', variant: 'navy' },
      { kind: 'external', href: nodeOneLoginUrl(), label: 'Iniciar sesión', variant: 'gold' },
      { kind: 'external', href: nodeOneUrl('/register'), label: 'Registrarse (gratis)', variant: 'outline' },
    ],
  },
]
