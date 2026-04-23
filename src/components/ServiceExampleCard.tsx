import { NavLink } from 'react-router-dom'
import { serviceCardPlatformFootnote, type ServiceExample } from '../data/servicesCatalog'
import { nodeOneUrl } from '../lib/nodeone'

type Props = {
  service: ServiceExample
  variant: 'home' | 'page'
}

/**
 * Home: resumen (como programas). Página servicios: ficha completa en una sola tarjeta (imagen + texto + CTA + nota).
 */
export function ServiceExampleCard({ service, variant }: Props) {
  if (variant === 'home') {
    return (
      <article className="box-border flex h-full min-h-0 w-full max-w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <img
          src={service.img}
          alt={service.title}
          className="h-44 w-full shrink-0 object-cover"
          loading="lazy"
        />
        <div className="flex min-h-0 flex-1 flex-col p-6">
          <div className="text-lg font-extrabold leading-snug text-slate-900">{service.title}</div>
          <div className="mt-2 shrink-0 text-xs font-semibold text-slate-500">{service.line}</div>
          <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-5">
            {service.blurb}
          </p>
          <NavLink
            to={service.to}
            className="mt-4 inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-[color:var(--rp-navy)] px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95"
          >
            Ver ficha
          </NavLink>
        </div>
      </article>
    )
  }

  return (
    <article
      id={service.id}
      className="box-border flex min-h-0 w-full max-w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm scroll-mt-28"
    >
      <img
        src={service.img}
        alt={service.title}
        className="h-48 w-full shrink-0 object-cover"
        loading="lazy"
      />
      <div className="flex flex-col p-6">
        <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-3xl">
          {service.title}
        </h2>
        <p className="mt-1 shrink-0 text-xs font-semibold uppercase tracking-wider text-slate-500">{service.line}</p>
        <p className="mt-4 text-base leading-relaxed text-slate-600">{service.detail}</p>
        <div className="mt-6 space-y-3">
          <a
            href={nodeOneUrl('/services')}
            className="inline-flex w-full items-center justify-center rounded-full bg-[color:var(--rp-navy)] px-5 py-2.5 text-sm font-extrabold text-white hover:opacity-95"
            rel="noreferrer"
          >
            Explorar en la Plataforma de Servicio
          </a>
          <p className="text-xs leading-relaxed text-slate-500">{serviceCardPlatformFootnote}</p>
        </div>
      </div>
    </article>
  )
}
