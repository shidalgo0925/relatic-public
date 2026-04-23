import { useEffect, useRef, useState, type PropsWithChildren } from 'react'
import { Container } from './Container'

type SectionProps = PropsWithChildren<{
  className?: string
  innerClassName?: string
  /**
   * Entrada suave al hacer scroll (opacidad + leve desplazamiento).
   * Desactivar en bloques que deban ser estáticos (p. ej. avisos legales).
   */
  reveal?: boolean
  /** Retraso en ms al aparecer (ritmo muy suave entre bloques). */
  revealDelay?: number
}>

export function Section({
  children,
  className,
  innerClassName,
  reveal = true,
  revealDelay = 0,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    if (!reveal) return true
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    } catch {
      return true
    }
  })

  useEffect(() => {
    if (!reveal) {
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return

    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mq.matches) {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reveal])

  const motionClass = reveal ? (visible ? 'rp-reveal rp-reveal-visible' : 'rp-reveal') : ''

  return (
    <section
      ref={ref}
      className={[className, motionClass].filter(Boolean).join(' ')}
      style={reveal && revealDelay > 0 ? { transitionDelay: `${revealDelay}ms` } : undefined}
    >
      <Container>
        <div className={innerClassName}>{children}</div>
      </Container>
    </section>
  )
}
