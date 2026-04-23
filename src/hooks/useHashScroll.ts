import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Al cargar o cambiar el hash (#sección), hace scroll suave al elemento con ese id.
 * Usar en páginas con anclas alineadas al menú (Programas / Servicios).
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation()

  useLayoutEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    if (!id) return
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [hash, pathname])
}
