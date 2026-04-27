import { useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { MENU_PROGRAMAS, MENU_SERVICIOS } from '../data/navMenu'
import { blogUrl, loginLinkNewTabProps, nodeOneLoginUrl, nodeOneUrl } from '../lib/nodeone'
import { BrandLogo } from './BrandLogo'
import { NavMegaMenuPanel, NavMegaTrigger } from './NavMegaMenu'

function linkPrimary({ isActive }: { isActive: boolean }) {
  return [
    'text-sm font-extrabold tracking-tight transition-colors',
    isActive ? 'text-[color:var(--rp-navy)]' : 'text-slate-900 hover:text-[color:var(--rp-navy)]',
  ].join(' ')
}

function linkSecondary({ isActive }: { isActive: boolean }) {
  return [
    'text-sm font-semibold transition-colors',
    isActive ? 'text-[color:var(--rp-navy)]' : 'text-slate-600 hover:text-[color:var(--rp-navy)]',
  ].join(' ')
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      className={['ml-0.5 h-4 w-4 shrink-0 transition-transform', open ? 'rotate-180' : ''].join(' ')}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

type DropdownId = 'programas' | 'servicios' | null

export function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [desktopDropdown, setDesktopDropdown] = useState<DropdownId>(null)
  const [mobileProg, setMobileProg] = useState(false)
  const [mobileServ, setMobileServ] = useState(false)
  const megaRef = useRef<HTMLDivElement>(null)

  const registerHref = useMemo(() => nodeOneUrl('/register'), [])
  const accederHref = useMemo(() => nodeOneLoginUrl(), [])

  const programsActive = location.pathname.startsWith('/programas')
  const serviciosActive = location.pathname.startsWith('/servicios')

  useEffect(() => {
    queueMicrotask(() => setDesktopDropdown(null))
  }, [location.pathname])

  useEffect(() => {
    if (!desktopDropdown) return
    const close = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setDesktopDropdown(null)
      }
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDesktopDropdown(null)
    }
    document.addEventListener('mousedown', close)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', close)
      document.removeEventListener('keydown', onKey)
    }
  }, [desktopDropdown])

  return (
    <header className="sticky top-0 z-50">
      <div ref={megaRef} className="relative z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5 px-3 py-2 sm:px-4 md:py-2.5">
        <NavLink
          to="/"
          className="ml-0 flex min-w-0 max-w-[min(100%,min(100vw-5rem,28rem))] shrink-0 items-center self-center py-0.5 pl-1.5 sm:pl-2 md:pl-4 lg:pl-5 xl:pl-6"
          onClick={() => {
            setMobileOpen(false)
            setDesktopDropdown(null)
          }}
        >
          <BrandLogo variant="header" />
        </NavLink>

        {/* Escritorio: comercial primero, institucional después (misma barra, distinta jerarquía tipográfica). */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-x-0.5 sm:gap-x-1 md:gap-x-1 lg:flex lg:gap-x-1.5 xl:gap-x-2 2xl:gap-x-2.5 whitespace-nowrap">
          <NavMegaTrigger
            label="Programas"
            open={desktopDropdown === 'programas'}
            active={programsActive}
            onToggle={() => setDesktopDropdown((d) => (d === 'programas' ? null : 'programas'))}
          />
          <NavMegaTrigger
            label="Servicios"
            open={desktopDropdown === 'servicios'}
            active={serviciosActive}
            onToggle={() => setDesktopDropdown((d) => (d === 'servicios' ? null : 'servicios'))}
          />
          <NavLink
            to="/comunidad"
            className={({ isActive }) => [linkPrimary({ isActive }), 'shrink-0 rounded-lg px-2 py-1.5'].join(' ')}
            onClick={() => setDesktopDropdown(null)}
          >
            Comunidad
          </NavLink>
          <NavLink
            to="/eventos"
            className={({ isActive }) => [linkPrimary({ isActive }), 'shrink-0 rounded-lg px-2 py-1.5'].join(' ')}
            onClick={() => setDesktopDropdown(null)}
          >
            Eventos
          </NavLink>

          <span
            className="mx-0.5 hidden h-4 w-px shrink-0 bg-slate-200/90 sm:mx-1 md:mx-1.5 lg:inline-block"
            aria-hidden
          />

          <NavLink
            to="/nosotros"
            className={({ isActive }) => [linkSecondary({ isActive }), 'shrink-0 rounded-lg px-2 py-1.5'].join(' ')}
            onClick={() => setDesktopDropdown(null)}
          >
            Nosotros
          </NavLink>
          <a
            href={blogUrl()}
            className="shrink-0 rounded-lg px-2 py-1.5 text-sm font-semibold text-slate-600 hover:text-[color:var(--rp-navy)]"
            onClick={() => setDesktopDropdown(null)}
          >
            Blog
          </a>
          <NavLink
            to="/contacto"
            className={({ isActive }) => [linkSecondary({ isActive }), 'shrink-0 rounded-lg px-2 py-1.5'].join(' ')}
            onClick={() => setDesktopDropdown(null)}
          >
            Contacto
          </NavLink>
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 sm:gap-2 md:flex">
          <a
            href={accederHref}
            {...loginLinkNewTabProps}
            className="shrink-0 rounded-full bg-[color:var(--rp-navy)] px-3 py-1.5 text-sm font-extrabold text-white shadow-sm hover:opacity-95 sm:px-3.5 sm:py-2"
          >
            Acceder
          </a>
          <a
            href={registerHref}
            className="shrink-0 rounded-full border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-800 hover:bg-slate-50 sm:px-3.5 sm:py-2"
          >
            Registrarse
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-800 lg:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => {
            setDesktopDropdown(null)
            setMobileOpen((o) => !o)
          }}
        >
          {mobileOpen ? 'Cerrar' : 'Menú'}
        </button>
        </div>
        {desktopDropdown ? <NavMegaMenuPanel variant={desktopDropdown} onClose={() => setDesktopDropdown(null)} /> : null}
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            <p className="px-1 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Explorar</p>
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-extrabold text-slate-900"
              aria-expanded={mobileProg}
              onClick={() => setMobileProg((v) => !v)}
            >
              Programas
              <ChevronDown open={mobileProg} />
            </button>
            {mobileProg
              ? MENU_PROGRAMAS.map((it) => (
                  <NavLink
                    key={it.label}
                    to={it.to}
                    className="block rounded-lg py-2 pl-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {it.label}
                  </NavLink>
                ))
              : null}

            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-sm font-extrabold text-slate-900"
              aria-expanded={mobileServ}
              onClick={() => setMobileServ((v) => !v)}
            >
              Servicios
              <ChevronDown open={mobileServ} />
            </button>
            {mobileServ
              ? MENU_SERVICIOS.map((it) => (
                  <NavLink
                    key={it.label}
                    to={it.to}
                    className="block rounded-lg py-2 pl-4 text-sm font-semibold text-slate-600 hover:bg-slate-50"
                    onClick={() => setMobileOpen(false)}
                  >
                    {it.label}
                  </NavLink>
                ))
              : null}

            <NavLink
              to="/comunidad"
              className={({ isActive }) => [linkPrimary({ isActive }), 'rounded-lg px-2 py-2'].join(' ')}
              onClick={() => setMobileOpen(false)}
            >
              Comunidad
            </NavLink>
            <NavLink
              to="/eventos"
              className={({ isActive }) => [linkPrimary({ isActive }), 'rounded-lg px-2 py-2'].join(' ')}
              onClick={() => setMobileOpen(false)}
            >
              Eventos
            </NavLink>

            <p className="mt-2 px-1 pb-1 text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Instituto</p>
            <NavLink
              to="/nosotros"
              className={({ isActive }) => [linkSecondary({ isActive }), 'rounded-lg px-2 py-2'].join(' ')}
              onClick={() => setMobileOpen(false)}
            >
              Nosotros
            </NavLink>
            <a href={blogUrl()} className="rounded-lg px-2 py-2 text-sm font-semibold text-slate-600">
              Blog
            </a>
            <NavLink
              to="/contacto"
              className={({ isActive }) => [linkSecondary({ isActive }), 'rounded-lg px-2 py-2'].join(' ')}
              onClick={() => setMobileOpen(false)}
            >
              Contacto
            </NavLink>

            <div className="mt-3 grid gap-2 border-t border-slate-100 pt-3">
              <a
                href={accederHref}
                {...loginLinkNewTabProps}
                className="rounded-xl bg-[color:var(--rp-navy)] px-4 py-3 text-center text-sm font-extrabold text-white"
              >
                Acceder
              </a>
              <a
                href={registerHref}
                className="rounded-xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-800"
              >
                Registrarse
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
