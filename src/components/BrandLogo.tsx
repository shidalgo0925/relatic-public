type BrandLogoProps = { variant: 'header' | 'footer' }

const ALT = 'Relatic Panamá'

/**
 * Isotipo (`relatic-mark.jpg`, libro + globo) y logotipo
 * (`relatic-wordmark.png`, RELATIC + PANAMÁ), aportados como activos oficiales.
 */
export function BrandLogo({ variant }: BrandLogoProps) {
  const footer = variant === 'footer'

  const content = (
    <div
      className={[
        'flex min-w-0 items-center',
        footer ? 'gap-3 sm:gap-4' : 'gap-2 sm:gap-2.5 md:gap-3',
      ].join(' ')}
    >
      <img
        src="/brand/relatic-mark.jpg"
        alt=""
        width={256}
        height={207}
        className={
          footer
            ? 'h-16 w-auto max-h-20 object-contain object-left sm:h-20 sm:max-h-24'
            : 'h-9 w-auto max-h-9 shrink-0 object-contain object-left sm:h-10 sm:max-h-10 md:h-11 md:max-h-11'
        }
        loading="eager"
        decoding="async"
        aria-hidden
      />
      <img
        src="/brand/relatic-wordmark.png"
        alt={ALT}
        width={740}
        height={111}
        className={
          footer
            ? 'h-8 w-auto max-w-[min(100%,90vw)] object-contain object-left sm:h-9'
            : 'h-5 w-auto max-w-[min(64vw,240px)] object-contain object-left sm:h-6 sm:max-w-[min(50vw,280px)] md:h-7'
        }
        loading="eager"
        decoding="async"
      />
    </div>
  )

  if (footer) {
    return (
      <div className="inline-block max-w-full rounded-lg bg-white/95 p-2.5 shadow-sm">
        {content}
      </div>
    )
  }

  return content
}
