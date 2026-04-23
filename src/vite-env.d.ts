/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_NODEONE_BASE_URL?: string
  readonly VITE_NODEONE_LOGIN_BASE_URL?: string
  readonly VITE_CAMPUS_URL?: string
  readonly VITE_BLOG_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
