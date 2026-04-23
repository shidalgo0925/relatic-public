import { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { heroUnifiedSlides, type HeroCta } from '../data/heroUnifiedCarousel'

/** Autoplay del carrusel único (texto + imagen + CTAs avanzan juntos). */
const AUTOPLAY_MS = 10_500

function ctaClass(variant: HeroCta['variant']) {
  if (variant === 'navy') {
    return 'rounded-full bg-[color:var(--rp-navy)] px-6 py-3 text-sm font-extrabold text-white shadow-sm hover:opacity-95'
  }
  if (variant === 'gold') {
    return 'rounded-full bg-gradient-to-r from-[color:var(--rp-gold)] to-[color:var(--rp-gold-2)] px-6 py-3 text-sm font-extrabold text-slate-900 shadow-sm hover:brightness-105'
  }
  return 'rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50'
}

function HeroCtaButton({ cta }: { cta: HeroCta }) {
  const cls = ctaClass(cta.variant)
  if (cta.kind === 'internal') {
    return (
      <NavLink to={cta.to} className={cls}>
        {cta.label}
      </NavLink>
    )
  }
  return (
    <a href={cta.href} className={cls}>
      {cta.label}
    </a>
  )
}

/**
 * Carrusel único: en cada paso cambian a la vez la idea (izquierda) y la foto (derecha),
 * con tres CTAs debajo del texto. La imagen usa esquinas muy redondeadas como el diseño de referencia.
 */
export function HeroUnifiedCarousel() {
  const n = heroUnifiedSlides.length
  const [index, setIndex] = useState(0)
  const pauseRef = useRef(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n])
  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n])
  const go = useCallback((i: number) => setIndex(((i % n) + n) % n), [n])

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!pauseRef.current) next()
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [next])

  const slide = heroUnifiedSlides[index]

  return (
    <div
      className="relative"
      onPointerEnter={() => {
        pauseRef.current = true
      }}
      onPointerLeave={() => {
        pauseRef.current = false
      }}
    >
      <div className="relative min-h-[26rem] md:min-h-[30rem] lg:min-h-[32rem]">
        {heroUnifiedSlides.map((s, i) => (
          <div
            key={s.id}
            aria-hidden={i !== index}
            className={[
              'absolute inset-0 grid items-center gap-8 transition-opacity duration-700 ease-out lg:grid-cols-2 lg:gap-10',
              i === index ? 'z-10 opacity-100' : 'pointer-events-none z-0 opacity-0',
            ].join(' ')}
          >
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-slate-500">{s.kicker}</p>
              <h1 className="mt-2 max-w-full text-pretty text-2xl font-extrabold leading-snug tracking-tight text-slate-900 sm:text-3xl sm:leading-snug md:text-[1.65rem] md:leading-snug lg:text-4xl lg:leading-tight xl:text-[2.15rem] xl:leading-tight">
                {s.headline}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">{s.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <HeroCtaButton cta={s.ctas[0]} />
                <HeroCtaButton cta={s.ctas[1]} />
                <HeroCtaButton cta={s.ctas[2]} />
              </div>
            </div>

            <div className="relative min-h-[280px] w-full lg:min-h-0">
              <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-[color:var(--rp-sky)]/25 via-white to-[color:var(--rp-gold)]/20 blur-2xl" />
              {/* Esquinas bien redondeadas (referencia de diseño). */}
              <div className="overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl md:rounded-[2.25rem]">
                <img
                  src={s.image.src}
                  alt={s.image.alt}
                  className="h-[280px] w-full object-cover sm:h-[340px] md:h-[400px] lg:h-[480px] xl:h-[520px]"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex justify-center gap-2 sm:justify-start" role="tablist" aria-label="Seleccionar mensaje del hero">
          {heroUnifiedSlides.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1}: ${s.kicker}`}
              className={[
                'h-2.5 rounded-full transition-all duration-300',
                i === index ? 'w-8 bg-[color:var(--rp-navy)]' : 'w-2.5 bg-slate-300 hover:bg-slate-400',
              ].join(' ')}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2">
          <button
            type="button"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            onClick={prev}
            aria-label="Anterior"
          >
            Anterior
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50"
            onClick={next}
            aria-label="Siguiente"
          >
            Siguiente
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {slide.kicker}. {slide.headline}
      </p>
    </div>
  )
}
