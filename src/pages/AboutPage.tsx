import { Section } from '../components/Section'

export function AboutPage() {
  return (
    <Section className="bg-white" innerClassName="py-14 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Nosotros</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Institución con enfoque humano</h1>
          <p className="mt-4 text-slate-600">
            Relatic Panamá combina rigor académico, acompañamiento cercano y herramientas modernas para que investigadores y
            profesionales avancen con claridad.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-slate-700">
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">Red regional con visión internacional</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">Formación continua y publicación responsable</li>
            <li className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              Operación seria centralizada en nuestra Plataforma de Servicio
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1600&q=80"
            alt="Contexto académico"
            className="h-[460px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
