import { NavLink } from 'react-router-dom'
import { blogUrl, loginLinkNewTabProps, nodeOneLoginUrl, nodeOneUrl } from '../lib/nodeone'
import { BrandLogo } from './BrandLogo'

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
              Formación · Investigación · Publicación
            </p>
          </div>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
            Vitrina en este sitio. En la Plataforma de Servicio podés explorar el catálogo de servicios sin costo (acceso
            con registro gratuito). Inscripciones, contratación, citas y seguimiento se gestionan allí.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a
              href={nodeOneLoginUrl()}
              {...loginLinkNewTabProps}
              className="rounded-full bg-white px-5 py-2 text-sm font-extrabold text-[color:var(--rp-navy)] hover:bg-slate-100"
            >
              Acceder
            </a>
            <a
              href={nodeOneUrl('/register')}
              className="rounded-full border border-white/25 px-5 py-2 text-sm font-semibold text-white hover:bg-white/10"
            >
              Registrarse
            </a>
          </div>
        </div>

        <div>
          <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Instituto</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <NavLink className="hover:text-white" to="/nosotros">
                Sobre nosotros
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/contacto">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-extrabold uppercase tracking-widest text-slate-400">Programas</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <NavLink className="hover:text-white" to="/programas">
                Diplomados y cursos
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/servicios">
                Servicios académicos
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/eventos">
                Eventos
              </NavLink>
            </li>
            <li>
              <a className="hover:text-white" href={blogUrl()} target="_blank" rel="noreferrer">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Relatic Panamá</div>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a className="hover:text-white" href={nodeOneUrl('/privacidad')}>
              Políticas
            </a>
            <a className="hover:text-white" href={nodeOneUrl('/terminos')}>
              Términos
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
