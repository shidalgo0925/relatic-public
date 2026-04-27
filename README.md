# relatic-public

Sitio público de **Relatic** (landing): Vite, React, TypeScript, Tailwind.

## Desarrollo

```bash
npm install
npm run dev
```

## Variables de entorno

Copiá `/.env.example` a `.env` y ajustá. Las claves con prefijo `VITE_` se exponen al front.

## Calidad y build

```bash
npm run lint
npm run build
```

La salida de producción va a `dist/`. Despliegue típico: sincronizar el contenido de `dist/` al directorio del host (p. ej. vhost Nginx).

## Licencia

Propietario: Relatic / acuerdo del proyecto; no redistribuir sin autorización.
