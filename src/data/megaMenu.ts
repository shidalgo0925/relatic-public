import { MENU_PROGRAMAS, MENU_SERVICIOS } from './navMenu'
import { campusUrl } from '../lib/nodeone'

export type MegaItem = {
  label: string
  blurb: string
  /** Nombre lógico para asociar icono (SVG en el componente) */
  icon: 'academic' | 'layers' | 'beaker' | 'badge' | 'article' | 'book' | 'image' | 'user' | 'flask' | 'layout' | 'file' | 'list'
} & (
  | { kind: 'internal'; to: string }
  | { kind: 'register'; path: string }
  | { kind: 'external'; href: string }
)

const programasMeta: Record<string, { blurb: string; icon: MegaItem['icon'] }> = {
  Diplomados: {
    blurb: 'Rutas estructuradas: teoría, práctica e investigación con entregas probadas.',
    icon: 'academic',
  },
  Cursos: {
    blurb: 'Módulos breves: competencias puntuales con aplicación a tus proyectos.',
    icon: 'beaker',
  },
  Talleres: {
    blurb: 'Intensivo en pocas sesiones, feedback en vivo y criterio de calidad.',
    icon: 'layers',
  },
  Certificaciones: {
    blurb: 'Reconocimiento formal y evidencia alineada a exigencia institucional.',
    icon: 'badge',
  },
}

const serviciosMeta: Record<string, { blurb: string; icon: MegaItem['icon'] }> = {
  'Publicación de artículos': {
    blurb: 'Preparación, pauta editorial y acompañamiento a revistas indexadas.',
    icon: 'article',
  },
  'Revistas indexadas': {
    blurb: 'Postulación, criterio académico y visibilidad científica.',
    icon: 'book',
  },
  'Libros digitales': { blurb: 'Producción y difusión con estándar universitario.', icon: 'file' },
  'Carteles científicos': { blurb: 'Síntesis y diseño de comunicación para congresos.', icon: 'image' },
  Asesorías: { blurb: 'Mentoría para tesis, proyectos y convocatorias.', icon: 'user' },
  Postdoctorados: { blurb: 'Rutas de alto nivel para perfiles de investigación.', icon: 'flask' },
}

export const megaMenuProgramas = {
  colA: {
    heading: 'Formación',
    items: MENU_PROGRAMAS.map((m) => ({
      kind: 'internal' as const,
      to: m.to,
      label: m.label,
      ...programasMeta[m.label],
    })),
  },
  colB: {
    heading: 'Plataforma',
    items: [
      {
        kind: 'internal' as const,
        to: '/programas',
        label: 'Catálogo y secciones',
        blurb: 'Recorrido por anclas: diplomados, cursos, talleres y certificaciones.',
        icon: 'list' as const,
      },
      {
        kind: 'external' as const,
        href: campusUrl(),
        label: 'Plataforma de Servicio',
        blurb: 'Explorá el catálogo sin costo; acceso con registro gratuito para recorrer, comparar y avanzar.',
        icon: 'layout' as const,
      },
      {
        kind: 'register' as const,
        path: '/register',
        label: 'Registrarse (gratis)',
        blurb: 'Cuenta gratuita para entrar a la plataforma, explorar el catálogo y seguir desde tu panel.',
        icon: 'badge' as const,
      },
    ] satisfies MegaItem[],
  },
  featured: {
    kicker: 'Novedades',
    title: 'Explorá formación a tu ritmo',
    body: 'El detalle de fechas, costos y cupos queda en nuestra Plataforma de Servicio. Acá, la visión clara y los atajos.',
    cta: 'Abrir /programas',
    to: '/programas' as const,
  } satisfies {
    kicker: string
    title: string
    body: string
    cta: string
    to: string
  },
} as const

export const megaMenuServicios = {
  colA: {
    heading: 'Edición e investigación',
    items: [
      { ...itemFromServ(0) },
      { ...itemFromServ(1) },
      { ...itemFromServ(2) },
    ],
  },
  colB: {
    heading: 'Difusión y trayectoria',
    items: [
      { ...itemFromServ(3) },
      { ...itemFromServ(4) },
      { ...itemFromServ(5) },
    ],
  },
  featured: {
    kicker: 'Hablemos',
    title: 'Hablá con el equipo',
    body: 'Antes, el catálogo de servicios lo podés explorar sin costo en la plataforma (con cuenta gratis). Si preferís canal directo, escribinos.',
    cta: 'Ir a contacto',
    to: '/contacto' as const,
  },
} as const

function itemFromServ(index: 0 | 1 | 2 | 3 | 4 | 5): MegaItem {
  const m = MENU_SERVICIOS[index]!
  return {
    kind: 'internal' as const,
    to: m.to,
    label: m.label,
    ...serviciosMeta[m.label],
  }
}
