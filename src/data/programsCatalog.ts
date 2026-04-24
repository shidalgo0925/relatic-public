/**
 * Programas de ejemplo (catálogo con imágenes), alineados a las anclas y al menú en `navMenu.ts`.
 */

export type ProgramCategoryId = 'diplomados' | 'cursos' | 'talleres' | 'certificaciones'

export type ProgramExample = {
  title: string
  duration: string
  modality: string
  /** Descripción breve; coherente con vender la promesa en el landing. */
  blurb: string
  img: string
  category: ProgramCategoryId
  /** Incluido en el home “Programas destacados” (3 tarjetas). */
  showOnHome?: boolean
  /** `contain` para piezas gráficas (póster) que no encajan con recorte tipo foto. */
  imgObjectFit?: 'cover' | 'contain'
}

const q = (w: number) => `auto=format&fit=crop&w=${w}&q=80`

export const programExamples: ProgramExample[] = [
  {
    title: 'Diplomado en investigación aplicada',
    duration: '12 semanas',
    modality: 'Online en vivo + recursos',
    blurb: 'Teoría, práctica y estándar académicos con entregas orientadas a resultados reales.',
    img: `https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?${q(1400)}`,
    category: 'diplomados',
    showOnHome: true,
  },
  {
    title: 'Diplomado en metodologías de investigación social',
    duration: '16 semanas',
    modality: 'Online en vivo',
    blurb: 'Diseño de estudio, rigor metodológico e instrumentos alineados a publicación.',
    img: `https://images.unsplash.com/photo-1507842217343-583bb7270b66?${q(1400)}`,
    category: 'diplomados',
  },
  {
    title: 'Diplomado en políticas educativas y evaluación',
    duration: '14 semanas',
    modality: 'Híbrido',
    blurb: 'Lectura de contextos, evidencia y criterios de mejora con mirada institucional.',
    img: `https://images.unsplash.com/photo-1503676260728-1c00da094a0b?${q(1400)}`,
    category: 'diplomados',
  },
  {
    title: 'Curso de redacción científica y publicación en revistas científicas',
    duration: '18 May 2026, 19:00 → 08 Jun 2026, 21:00',
    modality: 'Híbrida (virtual + acompañamiento)',
    blurb:
      'Dirigido a autores de artículos científicos y editores de revistas. Fortalecé tu perfil académico y publicá con éxito.',
    img: '/images/curso-redaccion-cientifica-publicacion.png',
    category: 'cursos',
    imgObjectFit: 'contain',
  },
  {
    title: 'Curso de análisis de datos para investigación',
    duration: '6 semanas',
    modality: 'Online asíncrono + aulas en vivo',
    blurb: 'Bloques modulares para pasar de datos a argumentos interpretables y defendibles.',
    img: `https://images.unsplash.com/photo-1460925895917-afdab827c52f?${q(1400)}`,
    category: 'cursos',
    showOnHome: true,
  },
  {
    title: 'Curso de fundamentos de ética en investigación',
    duration: '4 semanas',
    modality: 'Online en vivo',
    blurb: 'Criterios, consentimientos y riesgo mínimo para proyectos con sujetos humanos.',
    img: `https://images.unsplash.com/photo-1576086213369-97a306d36557?${q(1400)}`,
    category: 'cursos',
  },
  {
    title: 'Taller de redacción científica',
    duration: '3 sesiones',
    modality: 'Intensivo',
    blurb: 'Práctica guiada, revisiones en vivo y criterios claros para salir con un borrador sólido.',
    img: `https://images.unsplash.com/photo-1523240795612-9a054b0db644?${q(1400)}`,
    category: 'talleres',
    showOnHome: true,
  },
  {
    title: 'Taller de presentación y defensa de proyectos',
    duration: '2 sesiones',
    modality: 'En vivo + grabaciones',
    blurb: 'Estructura narrativa, lenguaje preciso y manejo de comités y preguntas técnicas.',
    img: `https://images.unsplash.com/photo-1543269865-cbf427effbad?${q(1400)}`,
    category: 'talleres',
  },
  {
    title: 'Taller de visibilidad y difusión de resultados',
    duration: '3 sesiones',
    modality: 'Híbrido',
    blurb: 'Canales, sintesis para medios y divulgación responsable sin perder rigor académico.',
    img: `https://images.unsplash.com/photo-1522071820081-009f0129c71c?${q(1400)}`,
    category: 'talleres',
  },
  {
    title: 'Certificación en gestión de publicación científica',
    duration: '10 semanas',
    modality: 'Híbrido',
    blurb: 'Revisión por pares, indicadores, contratos editoriales y flujos con autores y indexaciones.',
    img: `https://images.unsplash.com/photo-1524178232363-1fb2b075b655?${q(1400)}`,
    category: 'certificaciones',
  },
  {
    title: 'Certificación en diseño y evaluación de instrumentos',
    duration: '8 semanas',
    modality: 'Online en vivo + proyectos',
    blurb: 'Validez, confiabilidad, pilotaje y ajuste de cuestionarios o guías semiestructuradas.',
    img: `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?${q(1400)}`,
    category: 'certificaciones',
  },
  {
    title: 'Certificación en liderazgo y equipos de investigación',
    duration: '6 semanas',
    modality: 'Híbrido',
    blurb: 'Rol y roles, gobernanza, coordinación y acuerdos verificables con socios e instituciones.',
    img: `https://images.unsplash.com/photo-1521737711867-e3b97375f902?${q(1400)}`,
    category: 'certificaciones',
  },
]

export function getProgramExamplesByCategory(id: ProgramCategoryId): ProgramExample[] {
  return programExamples.filter((p) => p.category === id)
}

export const featuredForHome: ProgramExample[] = programExamples.filter((p) => p.showOnHome).slice(0, 3)
