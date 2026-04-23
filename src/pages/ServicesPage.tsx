import { ServiceExampleCard } from '../components/ServiceExampleCard'
import { Section } from '../components/Section'
import { serviceCatalogExplainer } from '../data/serviceAccessCopy'
import { serviceExamples } from '../data/servicesCatalog'
import { useHashScroll } from '../hooks/useHashScroll'

/**
 * Cada servicio: tarjeta (imagen + texto + CTA + nota), anclas `#` para el menú. Grilla 2–3 columnas en pantallas anchas.
 */

export function ServicesPage() {
  useHashScroll()

  return (
    <Section className="bg-slate-50" innerClassName="py-14 md:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Servicios</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Servicios académicos</h1>
        <p className="mt-4 text-slate-600">
          Cada bloque es una ficha con imagen: leé el detalle, abrí la plataforma para recorrer el catálogo y, con cuenta
          gratuita, accedé a la operación.
        </p>
        <div className="mt-6 rounded-2xl border border-emerald-200/60 bg-emerald-50/40 p-4 text-sm leading-relaxed text-slate-700 md:p-5">
          <p className="font-extrabold text-slate-900">Explorá sin costo</p>
          <p className="mt-1.5">{serviceCatalogExplainer}</p>
        </div>
      </div>

      <div className="mt-12 grid auto-rows-[1fr] items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceExamples.map((s) => (
          <ServiceExampleCard key={s.id} service={s} variant="page" />
        ))}
      </div>
    </Section>
  )
}
