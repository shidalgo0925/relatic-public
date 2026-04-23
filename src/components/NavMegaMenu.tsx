import type { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import type { MegaItem } from '../data/megaMenu'
import { megaMenuProgramas, megaMenuServicios } from '../data/megaMenu'
import { nodeOneUrl } from '../lib/nodeone'

const icons: Record<MegaItem['icon'], (cls: string) => ReactElement> = {
  academic: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 0 12 20.904a48.62 48.62 0 0 0 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84 51.39 51.39 0 0 0-2.658.814m-15.482 0A50.711 50.711 0 0 1 12 13.489a50.602 50.602 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      />
    </svg>
  ),
  layers: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" d="M4 6h16M4 10h10M4 14h16" />
    </svg>
  ),
  beaker: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.75h4.5L18 7.5v3.75A5.25 5.25 0 0 1 12.75 16.5h-1.5A5.25 5.25 0 0 1 6 11.25V7.5l3.75-3.75Z"
      />
    </svg>
  ),
  badge: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l6.25 6.25a2.25 2.25 0 0 0 3.182 0l4.5-4.5a2.25 2.25 0 0 0 0-3.182l-6.25-6.25A2.25 2.25 0 0 0 9.568 3Z"
      />
    </svg>
  ),
  article: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
    </svg>
  ),
  book: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6.75 7.5A8.967 8.967 0 0 0 3.75 9.75A8.967 8.967 0 0 0 3 10.5v8.25a2.25 2.25 0 0 0 2.25 2.25h.75A8.967 8.967 0 0 1 12 21.75A8.967 8.967 0 0 1 18.75 21h.75A2.25 2.25 0 0 0 21.75 18.75v-8.25A8.967 8.967 0 0 0 18.75 9.75A8.967 8.967 0 0 0 12.75 6.042"
      />
    </svg>
  ),
  file: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25V6A2.25 2.25 0 0 0 17.25 3.75H9l-1.5 1.5v12A2.25 2.25 0 0 0 8.25 19.5h.75A3.75 3.75 0 0 0 12 22.5h6.75A1.5 1.5 0 0 0 20.25 21v-1.5"
      />
    </svg>
  ),
  image: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3A1.5 1.5 0 0 0 1.5 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10-10.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
      />
    </svg>
  ),
  user: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
      />
    </svg>
  ),
  flask: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.75 3.75V9L6.5 20.25h11L14.25 9V3.75M8.25 15.75h7.5"
      />
    </svg>
  ),
  layout: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25A2.25 2.25 0 0 1 8.25 10.5H6A2.25 2.25 0 0 1 3.75 8.25V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25A2.25 2.25 0 0 1 10.5 15.75V18A2.25 2.25 0 0 1 8.25 20.25H6A2.25 2.25 0 0 1 3.75 18V15.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6A2.25 2.25 0 0 1 15.75 3.75H18A2.25 2.25 0 0 1 20.25 6V8.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 15.75A2.25 2.25 0 0 1 15.75 13.5H18A2.25 2.25 0 0 1 20.25 15.75V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18V15.75Z" />
    </svg>
  ),
  list: (c) => (
    <svg className={c} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12M8.25 17.25h12" />
    </svg>
  ),
}

function IconBox({ name }: { name: MegaItem['icon'] }) {
  const I = icons[name]
  return <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">{I('h-5 w-5')}</div>
}

const rowClass =
  'group flex gap-3 rounded-xl p-2.5 -m-1 transition-colors hover:bg-slate-50/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--rp-navy)]/20'

function MegaItemLink({ item, onClose }: { item: MegaItem; onClose: () => void }) {
  const inner = (
    <>
      <IconBox name={item.icon} />
      <div className="min-w-0 text-left">
        <div className="text-sm font-extrabold text-slate-900">{item.label}</div>
        <p className="mt-0.5 text-xs font-medium leading-snug text-slate-500">{item.blurb}</p>
      </div>
    </>
  )
  if (item.kind === 'internal') {
    return (
      <NavLink to={item.to} className={rowClass} onClick={onClose} role="menuitem">
        {inner}
      </NavLink>
    )
  }
  if (item.kind === 'external') {
    return (
      <a href={item.href} className={rowClass} onClick={onClose} rel="noreferrer" role="menuitem">
        {inner}
      </a>
    )
  }
  return (
    <a href={nodeOneUrl(item.path)} className={rowClass} onClick={onClose} rel="noreferrer" role="menuitem">
      {inner}
    </a>
  )
}

function Col({
  heading,
  items,
  onClose,
}: {
  heading: string
  items: readonly MegaItem[]
  onClose: () => void
}) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">{heading}</p>
      <div className="mt-4 flex flex-col gap-0.5" role="list">
        {items.map((item) => (
          <MegaItemLink key={item.label} item={item} onClose={onClose} />
        ))}
      </div>
    </div>
  )
}

function MegaFeatured({
  kicker,
  title,
  body,
  cta,
  to,
  onClose,
}: {
  kicker: string
  title: string
  body: string
  cta: string
  to: string
  onClose: () => void
}) {
  return (
    <div className="h-full min-h-[12rem] rounded-2xl bg-slate-100/90 p-6">
      <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[color:var(--rp-navy)]">{kicker}</p>
      <p className="mt-3 text-lg font-extrabold tracking-tight text-slate-900">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
      <NavLink
        to={to}
        onClick={onClose}
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200/80 bg-white px-4 py-2.5 text-sm font-extrabold text-slate-900 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
      >
        {cta}
      </NavLink>
    </div>
  )
}

export type MegaVariant = 'programas' | 'servicios'

export function NavMegaMenuPanel({ variant, onClose }: { variant: MegaVariant; onClose: () => void }) {
  const data = variant === 'programas' ? megaMenuProgramas : megaMenuServicios

  return (
    <div className="border-b border-slate-100 bg-white shadow-lg" role="region" aria-label="Submenú de navegación">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-5 md:py-9 lg:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-x-8 md:gap-y-10 lg:grid-cols-3 lg:gap-10">
          <Col heading={data.colA.heading} items={data.colA.items} onClose={onClose} />
          <Col heading={data.colB.heading} items={data.colB.items} onClose={onClose} />
          <div className="min-w-0 border-t border-slate-200 pt-8 md:col-span-2 lg:col-span-1 lg:border-l lg:border-slate-200 lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-400">Destacado</p>
            <div className="mt-4">
              <MegaFeatured
                kicker={data.featured.kicker}
                title={data.featured.title}
                body={data.featured.body}
                cta={data.featured.cta}
                to={data.featured.to}
                onClose={onClose}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function NavMegaTrigger({
  label,
  open,
  active,
  onToggle,
}: {
  label: string
  open: boolean
  active: boolean
  onToggle: () => void
}) {
  return (
    <button
      type="button"
      className={[
        'inline-flex shrink-0 items-center gap-0.5 rounded-lg px-2 py-1.5 text-sm font-extrabold tracking-tight transition-colors',
        open || active
          ? 'bg-amber-50/90 text-[color:var(--rp-navy)] ring-1 ring-amber-200/70'
          : 'text-slate-900 hover:bg-slate-50 hover:text-[color:var(--rp-navy)]',
      ].join(' ')}
      aria-expanded={open}
      aria-haspopup="true"
      onClick={onToggle}
    >
      {label}
      <svg
        className={['ml-0.5 h-4 w-4 shrink-0 transition-transform', open ? 'rotate-180' : ''].join(' ')}
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        />
      </svg>
    </button>
  )
}
