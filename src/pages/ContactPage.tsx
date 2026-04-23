import { Section } from '../components/Section'
import { campusUrl, nodeOneLoginUrl } from '../lib/nodeone'

export function ContactPage() {
  return (
    <Section className="bg-slate-50" innerClassName="py-14 md:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">Contacto</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">Hablemos</h1>
        <p className="mt-4 text-slate-600">
          Para operación (inscripciones, compras, citas), lo ideal es entrar a la Plataforma de Servicio. Para consultas institucionales, usa
          estos canales.
        </p>
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        <a
          className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm"
          href="mailto:administracion@relaticpanama.org"
        >
          <div className="text-sm font-extrabold text-slate-900">Email</div>
          <div className="mt-2 text-sm text-slate-600">administracion@relaticpanama.org</div>
        </a>
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="text-sm font-extrabold text-slate-900">Teléfonos</div>
          <div className="mt-2 text-sm text-slate-600">+507 6645-7685 · +507 208-4689</div>
        </div>
        <a className="rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-sm" href="https://wa.me/50766751782" target="_blank" rel="noreferrer">
          <div className="text-sm font-extrabold text-slate-900">WhatsApp</div>
          <div className="mt-2 text-sm text-slate-600">Escríbenos para orientación rápida.</div>
        </a>
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a href={campusUrl()} className="rounded-full bg-[color:var(--rp-navy)] px-6 py-3 text-sm font-extrabold text-white hover:opacity-95">
          Explorar servicios
        </a>
        <a href={nodeOneLoginUrl()} className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-50">
          Acceder
        </a>
      </div>
    </Section>
  )
}
