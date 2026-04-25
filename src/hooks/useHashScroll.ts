import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

function scrollToHashId(hash: string) {
  if (!hash || hash === '#') return
  const id = decodeURIComponent(hash.startsWith('#') ? hash.slice(1) : hash)
  if (!id) return
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

/**
 * Al cargar o cambiar el hash (#sección), hace scroll suave al elemento con ese id.
 * Un retardo breve evita carreras con el layout (RSC/first paint en /programas#cursos).
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useLayoutEffect(() => {
    if (!hash) return
    scrollToHashId(hash)
    const t1 = window.setTimeout(() => scrollToHashId(hash), 0)
    const t2 = window.setTimeout(() => scrollToHashId(hash), 100)
    return () => {
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [hash, pathname])
}
