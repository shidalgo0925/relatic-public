import type { ProgramExample } from '../data/programsCatalog'
import { nodeOneUrl } from '../lib/nodeone'

type Props = {
  program: ProgramExample
  variant: 'page' | 'home'
}

export function ProgramExampleCard({ program, variant }: Props) {
  const cta =
    variant === 'home'
      ? { href: nodeOneUrl('/register'), label: 'Ver programa' }
      : { href: nodeOneUrl('/services'), label: 'Explorar e inscribirme' }

  return (
    <article className="box-border flex h-full min-h-0 w-full max-w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <img
        src={program.img}
        alt=""
        className="h-44 w-full shrink-0 object-cover"
        loading="lazy"
      />
      <div className="flex min-h-0 flex-1 flex-col p-6">
        <div className="text-lg font-extrabold leading-snug text-slate-900">{program.title}</div>
        <div className="mt-2 shrink-0 text-xs font-semibold text-slate-500">
          {program.duration} · {program.modality}
        </div>
        <p className="mt-3 min-h-0 flex-1 text-sm leading-relaxed text-slate-600 line-clamp-5">{program.blurb}</p>
        <a
          href={cta.href}
          className="mt-4 inline-flex w-full shrink-0 items-center justify-center rounded-xl bg-[color:var(--rp-navy)] px-4 py-2.5 text-sm font-extrabold text-white hover:opacity-95"
        >
          {cta.label}
        </a>
      </div>
    </article>
  )
}
