import type { ReactNode } from 'react'
import { ProgramExampleCard } from '../components/ProgramExampleCard'
import { Section } from '../components/Section'
import {
  getProgramExamplesByCategory,
  type ProgramCategoryId,
} from '../data/programsCatalog'
import { useHashScroll } from '../hooks/useHashScroll'
import { nodeOneUrl } from '../lib/nodeone'

const CATEGORIES: {
  id: ProgramCategoryId
  title: string
  body: ReactNode
}[] = [
  {
    id: 'diplomados',
    title: 'Diplomados',
    body: (
      <>
        Rutas de mediana duración que combinan teoría, práctica y estándar académico. Pensadas para consolidar líneas de
        investigación y publicación con acompañamiento estructurado.
      </>
    ),
  },
  {
    id: 'cursos',
    title: 'Cursos',
    body: (
      <>
        Actualización modular en bloques breves: competencias puntuales (metodología, escritura, herramientas) con
        aplicación inmediata a proyectos y entregas.
      </>
    ),
  },
  {
    id: 'talleres',
    title: 'Talleres',
    body: (
      <>
        Sesiones intensivas en poco tiempo: práctica guiada, revisiones en vivo y criterios claros de calidad para
        salir con un resultado tangible.
      </>
    ),
  },
  {
    id: 'certificaciones',
    title: 'Certificaciones',
    body: (
      <>
        Reconocimiento formal de competencias adquiridas, alineado a convocatorias institucionales y a la evidencia que
        exige el mercado académico y profesional.
      </>
    ),
  },
]

export function ProgramsPage() {
  useHashScroll()

  return (
    <Section className="bg-white" innerClassName="py-14 md:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Programas</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Diplomados y cursos</h1>
        <p className="mt-4 text-slate-600">
          Página dedicada para catálogo comercial. Cada sección reúne ejemplos con imagen; en las tarjetas con enlace a
          inscripción, abrís en <strong>apps.relatic.org</strong> el <strong>detalle del curso y el plan</strong> y, desde
          ahí, seguís al pago.
        </p>
      </div>

      <div className="mt-14">
        {CATEGORIES.map((c, i) => (
          <section
            key={c.id}
            id={c.id}
            className={['scroll-mt-28', i > 0 ? 'mt-0 border-t border-slate-200 pt-14' : 'pt-0'].join(' ')}
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{c.title}</h2>
            <div className="mt-3 max-w-3xl text-base leading-relaxed text-slate-600">{c.body}</div>
            <a
              href={nodeOneUrl('/services')}
              className="mt-6 inline-flex rounded-full bg-[color:var(--rp-navy)] px-5 py-2.5 text-sm font-extrabold text-white hover:opacity-95"
            >
              Explorar oferta en la Plataforma de Servicio
            </a>

            <div className="mt-10">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-slate-500">Ejemplos destacados</h3>
              <p className="mt-1 max-w-2xl text-sm text-slate-600">
                Cursos e inscripción activa: el CTA abre en apps la página de inscripción (detalle y monto) y, al
                continuar, el <strong>checkout</strong> para abonar. Las demás tarjetas de ejemplo redirigen al catálogo
                de servicios.
              </p>
              <div className="mt-6 grid auto-rows-[1fr] items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {getProgramExamplesByCategory(c.id).map((p) => (
                  <ProgramExampleCard key={p.title} program={p} variant="page" />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </Section>
  )
}
