import { NavLink } from 'react-router-dom'
import { HeroUnifiedCarousel } from '../components/HeroUnifiedCarousel'
import { ProgramExampleCard } from '../components/ProgramExampleCard'
import { ServiceExampleCard } from '../components/ServiceExampleCard'
import { Section } from '../components/Section'
import { featuredForHome } from '../data/programsCatalog'
import { serviceCatalogExplainerShort } from '../data/serviceAccessCopy'
import { serviceExamples } from '../data/servicesCatalog'
import { trustedInstitutions } from '../data/trustedInstitutions'
import { campusUrl, nodeOneUrl } from '../lib/nodeone'

type ValueProp =
  | {
      kind: 'internal'
      title: string
      text: string
      to: string
    }
  | {
      kind: 'external'
      title: string
      text: string
      href: string
    }

const valueProps: ValueProp[] = [
  {
    kind: 'internal',
    title: 'Diplomados y cursos',
    text: 'Rutas formativas para fortalecer competencias académicas y profesionales.',
    to: '/programas',
  },
  {
    kind: 'internal',
    title: 'Publicaciones y revistas',
    text: 'Editorial y visibilidad científica. Explorá líneas y catálogo sin costo; acceso a la plataforma con registro gratuito para profundizar.',
    to: '/servicios',
  },
  {
    kind: 'internal',
    title: 'Comunidad académica',
    text: 'Espacios para conversar, compartir y construir red.',
    to: '/comunidad',
  },
  {
    kind: 'internal',
    title: 'Eventos y talleres',
    text: 'Encuentros que aceleran aprendizaje aplicado y networking sobrio.',
    to: '/eventos',
  },
  {
    kind: 'external',
    title: 'Plataforma de Servicio',
    text: 'Explorá servicios y catálogo sin costo; creá tu cuenta gratis para acceder, seguimiento e inscripción cuando elijas avanzar.',
    href: campusUrl(),
  },
]

export function HomePage() {
  return (
    <>
      <Section className="bg-gradient-to-b from-slate-50 to-white" innerClassName="pt-6 pb-12 md:pt-8 md:pb-16">
        {/* Un solo carrusel: por slide cambian juntos titular, texto, imagen (derecha) y los tres CTAs. */}
        <HeroUnifiedCarousel />
      </Section>

      <Section
        className="bg-gradient-to-b from-amber-100 via-[color:var(--rp-gold)]/[0.18] to-amber-200/55 text-slate-900"
        innerClassName="pt-6 pb-14 md:pt-8 md:pb-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Propuesta de valor</h2>
          <p className="mt-3 text-balance text-slate-700">
            Formación y actualización con rigor académico, acompañamiento claro en publicación y difusión, y espacios de
            encuentro con pares. Todo pensado para quienes investigan, escriben y desean impacto verificable en su campo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[color:var(--rp-gold)]/35 bg-white/80 p-6 shadow-sm shadow-amber-800/10 backdrop-blur-sm"
            >
              <div className="text-lg font-extrabold text-slate-900">{item.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
              <div className="mt-5">
                {item.kind === 'internal' ? (
                  <NavLink
                    className="text-sm font-extrabold text-[color:var(--rp-navy)] hover:underline"
                    to={item.to}
                  >
                    Ver más
                  </NavLink>
                ) : (
                  <a
                    className="text-sm font-extrabold text-[color:var(--rp-navy)] hover:underline"
                    href={item.href}
                  >
                    Explorar servicios
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-white" innerClassName="py-14 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Programas destacados</h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Estilo catálogo: imagen humana, datos rápidos y CTA a la Plataforma de Servicio.
            </p>
          </div>
          <NavLink to="/programas" className="text-sm font-extrabold text-[color:var(--rp-navy)] hover:underline">
            Ver catálogo completo
          </NavLink>
        </div>

        <div className="mt-10 grid auto-rows-[1fr] items-stretch gap-4 lg:grid-cols-3">
          {featuredForHome.map((p) => (
            <ProgramExampleCard key={p.title} program={p} variant="home" />
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950 text-slate-100" innerClassName="py-14 md:py-16">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-slate-300">
              Exploración sin costo
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Servicios académicos</h2>
            <p className="mt-3 text-slate-300">
              Mismo criterio que programas: imagen, ficha breve y enlace a la ficha ampliada. En la plataforma explorás el
              catálogo sin costo; el acceso es con <span className="font-semibold text-white">registro gratuito</span>.
            </p>
          </div>
          <NavLink
            to="/servicios"
            className="shrink-0 text-sm font-extrabold text-sky-200 underline-offset-2 hover:underline"
          >
            Ver fichas completas
          </NavLink>
        </div>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 md:mx-0">
          {serviceCatalogExplainerShort}
        </p>

        <div className="mt-10 grid auto-rows-[1fr] items-stretch gap-4 md:grid-cols-3">
          {serviceExamples.map((s) => (
            <ServiceExampleCard key={s.id} service={s} variant="home" />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <NavLink
            to="/servicios"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/10"
          >
            Ver servicios en el sitio
          </NavLink>
          <a
            href={nodeOneUrl('/register')}
            className="rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/15"
          >
            Registrarme (gratis) y explorar en plataforma
          </a>
        </div>
      </Section>

      <Section className="bg-slate-50" innerClassName="py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Cómo funciona</h2>
            <p className="mt-3 text-slate-600">
              El landing presenta. La plataforma te deja <span className="font-semibold text-slate-900">explorar el catálogo
              de servicios sin costo</span> y, con <span className="font-semibold text-slate-900">registro gratuito</span>,
              acceder, comparar e ir al paso operativo.
            </p>
            <ol className="mt-8 space-y-4 text-sm text-slate-700">
              <li>
                <span className="font-extrabold text-[color:var(--rp-navy)]">1.</span> Navegás resumen e hilos (aquí y en <em>/servicios</em>).
              </li>
              <li>
                <span className="font-extrabold text-[color:var(--rp-navy)]">2.</span> Con cuenta gratuita entrás a la plataforma y recorrés el
                catálogo; explorar y consultar el listado no tiene costo.
              </li>
              <li>
                <span className="font-extrabold text-[color:var(--rp-navy)]">3.</span> Cuando corresponda, inscribirte, contratar o reservar en la
                plataforma (según cada oferta).
              </li>
              <li>
                <span className="font-extrabold text-[color:var(--rp-navy)]">4.</span> Seguís y gestionás desde tu panel.
              </li>
            </ol>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
              alt="Equipo colaborando"
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-slate-950 text-slate-100" innerClassName="py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 overflow-hidden rounded-2xl border border-white/10 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
              alt="Comunidad académica"
              className="h-[360px] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">Comunidad y ecosistema</h2>
            <p className="mt-3 text-slate-300">
              Foros, grupos, eventos y acompañamiento: la sensación de instituto vivo, no “web estática”.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold text-white">+</div>
                <div className="mt-1 text-xs font-semibold text-slate-400">Red regional</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold text-white">24/7</div>
                <div className="mt-1 text-xs font-semibold text-slate-400">Plataforma</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="text-2xl font-extrabold text-white">360°</div>
                <div className="mt-1 text-xs font-semibold text-slate-400">Acompañamiento</div>
              </div>
            </div>
            <div className="mt-8">
              <NavLink
                to="/comunidad"
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-200"
              >
                Explorar comunidad
              </NavLink>
            </div>
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/80 bg-slate-50" innerClassName="py-12 md:py-14">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[color:var(--rp-navy)]">Alianzas</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Instituciones que confían en nosotros
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Cientos de centros educativos y organizaciones forman parte de nuestra red latinoamericana y global.
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {trustedInstitutions.map((name) => (
            <li
              key={name}
              className="flex min-h-[4.5rem] items-center justify-center rounded-xl border border-slate-200/90 bg-white px-3 py-4 text-center shadow-sm"
            >
              <span className="text-sm font-semibold leading-snug text-slate-800">{name}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-500">
          Más sobre la red en{' '}
          <a
            href="https://relaticpanama.org/"
            className="font-semibold text-[color:var(--rp-navy)] underline-offset-2 hover:underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            relaticpanama.org
          </a>
          .
        </p>
      </Section>

      <Section className="bg-white" innerClassName="py-14 md:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Confianza</h2>
          <p className="mt-3 text-slate-600">
            Voces de participantes y equipos (texto ilustrativo; reemplazar por testimonios reales cuando estén disponibles).
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { q: '“Proceso claro: del interés al acceso en la Plataforma de Servicio.”', a: 'Participante' },
            { q: '“Acompañamiento serio, sin humo comercial.”', a: 'Investigador' },
            { q: '“Se nota institución, no plantilla genérica.”', a: 'Coordinación académica' },
          ].map((t) => (
            <figure key={t.q} className="rounded-2xl border border-slate-200 bg-white p-6">
              <blockquote className="text-sm leading-relaxed text-slate-700">{t.q}</blockquote>
              <figcaption className="mt-4 text-xs font-extrabold uppercase tracking-widest text-slate-500">{t.a}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-950" innerClassName="py-14 md:py-16">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-900 via-[color:var(--rp-navy)] to-slate-900 p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Únete a Relatic Panamá</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-200">
            Revisá programas aquí. <span className="font-semibold">Los servicios podés explorarlos sin costo en la
            plataforma</span> con <span className="font-semibold">registro gratuito</span>; inscripciones, avances con
            coste o citas, cuando apliquen, se hacen desde allí.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <NavLink
              to="/programas"
              className="rounded-full bg-white px-6 py-3 text-sm font-extrabold text-slate-900 hover:bg-slate-100"
            >
              Explorar programas
            </NavLink>
            <a
              href={campusUrl()}
              className="rounded-full bg-gradient-to-r from-[color:var(--rp-gold)] to-[color:var(--rp-gold-2)] px-6 py-3 text-sm font-extrabold text-slate-900 hover:brightness-105"
            >
              Explorar servicios (sin costo)
            </a>
            <a
              href={nodeOneUrl('/register')}
              className="rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-extrabold text-white hover:bg-white/10"
            >
              Crear cuenta gratis
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
