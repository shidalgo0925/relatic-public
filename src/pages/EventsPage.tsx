import { Section } from '../components/Section'
import { nodeOneUrl } from '../lib/nodeone'

export function EventsPage() {
  return (
    <Section className="bg-slate-50" innerClassName="py-14 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="order-2 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1600&q=80"
            alt="Evento académico"
            className="h-[380px] w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Eventos</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Agenda y convocatorias</h1>
          <p className="mt-4 text-slate-600">
            El landing promueve. La publicación, registro y confirmación de eventos se gestiona en nuestra Plataforma de Servicio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={nodeOneUrl('/events')}
              className="rounded-full bg-[color:var(--rp-navy)] px-6 py-3 text-sm font-extrabold text-white hover:opacity-95"
            >
              Ver eventos en la plataforma
            </a>
            <a href={nodeOneUrl('/register')} className="rounded-full border border-slate-300 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-white">
              Crear cuenta
            </a>
          </div>
        </div>
      </div>
    </Section>
  )
}
