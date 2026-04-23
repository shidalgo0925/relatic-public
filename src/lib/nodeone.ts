function trimSlash(value: string) {
  return value.replace(/\/+$/, '')
}

/**
 * Base URL del portal (Plataforma de Servicio; solo origen), por ejemplo:
 * - https://apps.relatic.org
 * - https://appdev.easynodeone.com
 */
export function nodeOneOrigin(): string {
  const raw = (import.meta.env.VITE_NODEONE_BASE_URL || '').trim()
  if (!raw) {
    return 'https://apps.relatic.org'
  }
  return trimSlash(raw)
}

export function nodeOneUrl(path: string): string {
  const p = path.startsWith('/') ? path : `/${path}`
  return `${nodeOneOrigin()}${p}`
}

/**
 * Inicio de sesión: en Relatic vive en el host de miembros, no en apps.
 * Opcional: VITE_NODEONE_LOGIN_BASE_URL (origen sin barra final), p. ej. https://miembros.relatic.org
 */
export function nodeOneLoginUrl(): string {
  const raw = (import.meta.env.VITE_NODEONE_LOGIN_BASE_URL || '').trim()
  if (raw) return `${trimSlash(raw)}/login`
  return 'https://miembros.relatic.org/login'
}

/** Misma URL de login que `nodeOneLoginUrl()` (origen + ruta `/login`). */
export function isLoginPortalUrl(href: string): boolean {
  let a: URL
  let b: URL
  try {
    a = new URL(href.trim())
    b = new URL(nodeOneLoginUrl())
  } catch {
    return false
  }
  const normPath = (p: string) => (p.replace(/\/+$/, '') || '/')
  return a.origin === b.origin && normPath(a.pathname) === normPath(b.pathname)
}

/** Enlace a login en nueva pestaña (p. ej. miembros…/login). */
export const loginLinkNewTabProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer' as const,
}

/**
 * Entrada a la app (catálogo de servicios, planes, inicio rápido).
 * Sobreescribible con VITE_CAMPUS_URL si en algún entorno apunta a otra URL.
 */
export function campusUrl(): string {
  const raw = (import.meta.env.VITE_CAMPUS_URL || '').trim()
  if (raw) return raw
  return `${nodeOneOrigin()}/services`
}

export function blogUrl(): string {
  const raw = (import.meta.env.VITE_BLOG_URL || '').trim()
  if (raw) return raw
  return 'https://relaticpanama.org/_blog/'
}
