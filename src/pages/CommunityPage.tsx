import { Section } from '../components/Section'
import { loginLinkNewTabProps, nodeOneLoginUrl, nodeOneUrl } from '../lib/nodeone'

export function CommunityPage() {
  return (
    <Section className="bg-white" innerClassName="py-14 md:py-16">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Comunidad</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Ecosistema vivo</h1>
          <p className="mt-4 text-slate-600">
            Foros, grupos y networking académico. El acceso operativo está en la Plataforma de Servicio (requiere sesión).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={nodeOneUrl('/foros')}
              className="rounded-full bg-[color:var(--rp-navy)] px-6 py-3 text-sm font-extrabold text-white hover:opacity-95"
            >
              Ir a foros
            </a>
            <a
              href={nodeOneUrl('/grupos')}
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50"
            >
              Ir a grupos
            </a>
            <a
              href={nodeOneLoginUrl()}
              {...loginLinkNewTabProps}
              className="text-sm font-extrabold text-[color:var(--rp-navy)] hover:underline"
            >
              Ya tengo cuenta
            </a>
          </div>
        </div>
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
            alt="Personas colaborando"
            className="h-[420px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
