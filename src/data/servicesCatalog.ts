import { MENU_SERVICIOS } from './navMenu'

const q = (w: number) => `auto=format&fit=crop&w=${w}&q=80`

export type ServiceExample = {
  /** id de ancla sin `#` (p. ej. `publicacion-articulos`) */
  id: string
  title: string
  to: string
  line: string
  /** Resumen en home. */
  blurb: string
  /** Párrafo completo en /servicios (misma ficha en tarjeta). */
  detail: string
  img: string
}

const lineByLabel: Record<string, string> = {
  'Publicación de artículos': 'Editorial · pauta de envío',
  'Revistas indexadas': 'Indexación · visibilidad',
  'Libros digitales': 'Producción · difusión',
  'Carteles científicos': 'Diseño · congreso',
  Asesorías: 'Mentoría · metodología',
  Postdoctorados: 'Ruta avanzada · I+D',
}

const blurbByLabel: Record<string, string> = {
  'Publicación de artículos':
    'Estructura, estilo y adecuación a convocatorias y revistas con criterio de calidad transparente.',
  'Revistas indexadas':
    'Alineación con bases, pertinencia temática y estrategia de postulación con lenguaje académico sólido.',
  'Libros digitales':
    'Edición, normalización y visibilidad de publicaciones científicas o académicas en entornos digitales.',
  'Carteles científicos':
    'Síntesis de resultados, impacto visual y lectura clara en pasillos y espacios de póster.',
  Asesorías: 'Acompañamiento en proyectos, tesis y convocatorias, con fechas y entregas acordadas.',
  Postdoctorados: 'Consolidación de líneas, redes y producción con estándar institucional e internacional.',
}

const detailByLabel: Record<string, string> = {
  'Publicación de artículos':
    'Acompañamiento en estructura, redacción y adecuación de manuscritos para envío a revistas indexadas, con criterios de calidad y comunicación científica coherentes con tu disciplina.',
  'Revistas indexadas':
    'Estrategia editorial, pertinencia temática y alineación con bases e índices reconocidos para fortalecer visibilidad y credibilidad académica.',
  'Libros digitales':
    'Concepción, desarrollo y edición de libros académicos o científicos: estructura, estilo, normalización y visibilidad editorial en formatos digitales.',
  'Carteles científicos':
    'Diseño y formulación de pósteres con síntesis de resultados, impacto visual y adecuación a estándares de congresos especializados.',
  Asesorías:
    'Acompañamiento metodológico y estratégico en proyectos, tesis y convocatorias: desde la idea inicial hasta la difusión de resultados.',
  Postdoctorados:
    'Rutas avanzadas para doctores que buscan consolidar líneas de investigación, producción y redes internacionales con estándar institucional.',
}

const imgByLabel: Record<string, string> = {
  'Publicación de artículos': `https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?${q(1400)}`,
  'Revistas indexadas': `https://images.unsplash.com/photo-1507842217343-583bb7270b66?${q(1400)}`,
  'Libros digitales': `https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?${q(1400)}`,
  'Carteles científicos': `https://images.unsplash.com/photo-1523240795612-9a054b0db644?${q(1400)}`,
  Asesorías: `https://images.unsplash.com/photo-1521737604893-d14cc237f11d?${q(1400)}`,
  Postdoctorados: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${q(1400)}`,
}

export const serviceCardPlatformFootnote =
  'Recorré el catálogo y la información de cada servicio sin costo. Necesitás una cuenta gratuita para acceder; la contratación o el trámite específico se acuerda allí.'

export const serviceExamples: ServiceExample[] = MENU_SERVICIOS.map((m) => {
  const id = m.to.split('#')[1] ?? m.label
  return {
    id,
    title: m.label,
    to: m.to,
    line: lineByLabel[m.label] ?? 'Relatic',
    blurb: blurbByLabel[m.label] ?? '',
    detail: detailByLabel[m.label] ?? blurbByLabel[m.label] ?? '',
    img: imgByLabel[m.label] ?? `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?${q(1400)}`,
  }
})
