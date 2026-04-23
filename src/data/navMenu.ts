/**
 * Enlaces del menú (Programas / Servicios) alineados a anclas en `/programas` y `/servicios`.
 *
 * Estrategia (comentario de producto):
 * - Cada ítem lleva a una **sección propia** en el landing: primero definición / propuesta de valor,
 *   luego CTA hacia la **Plataforma de Servicio** (catálogo, inscripción, carrito).
 * - Más adelante se puede pasar a **rutas dedicadas** (`/programas/diplomados`) si el contenido crece
 *   o si SEO exige URLs separadas; el menú solo cambiaría el `to` aquí.
 */

export const MENU_PROGRAMAS = [
  { label: 'Diplomados', to: '/programas#diplomados' },
  { label: 'Cursos', to: '/programas#cursos' },
  { label: 'Talleres', to: '/programas#talleres' },
  { label: 'Certificaciones', to: '/programas#certificaciones' },
] as const

export const MENU_SERVICIOS = [
  { label: 'Publicación de artículos', to: '/servicios#publicacion-articulos' },
  { label: 'Revistas indexadas', to: '/servicios#revistas-indexadas' },
  { label: 'Libros digitales', to: '/servicios#libros-digitales' },
  { label: 'Carteles científicos', to: '/servicios#carteles-cientificos' },
  { label: 'Asesorías', to: '/servicios#asesorias' },
  { label: 'Postdoctorados', to: '/servicios#postdoctorados' },
] as const
