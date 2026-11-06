import { profile } from '@/lib/portfolio-data'
import { CtaLink } from './cta-link'

/*
  Rubans qui convergent vers le texte (SVG, viewBox 800x400).
  - startEdges : positions verticales des 10 frontières de bandes au bord gauche
  - endEdges   : les mêmes frontières resserrées autour de y=200 au bord droit
  Chaque bande est le polygone entre deux frontières consécutives, avec des courbes de Bézier.
*/
const startEdges = [-10, 45, 100, 150, 178, 222, 250, 300, 355, 410]
const endEdges = [176, 180, 184, 189, 195, 205, 211, 216, 220, 224]

// De haut en bas ; la bande centrale (index 4) utilise un dégradé dédié
const bandFills = [
  '#262d9a',
  '#5b4fd1',
  '#8f86e6',
  '#4fc9c0',
  'url(#ct-core)',
  '#4fc9c0',
  '#8f86e6',
  '#5b4fd1',
  '#262d9a',
]

const bands = bandFills.map((fill, i) => ({
  fill,
  d: `M0 ${startEdges[i]} C300 ${startEdges[i]} 500 ${endEdges[i]} 800 ${endEdges[i]} L800 ${endEdges[i + 1]} C500 ${endEdges[i + 1]} 300 ${startEdges[i + 1]} 0 ${startEdges[i + 1]} Z`,
}))

function Ribbons() {
  return (
    <svg
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ct-core" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#4fc9c0" />
          <stop offset="0.3" stopColor="#7a8df0" />
          <stop offset="0.65" stopColor="#d4559f" />
          <stop offset="1" stopColor="#8b5cf6" />
        </linearGradient>
        {/* Fondu vers la droite pour que les rubans se dissolvent dans la lueur */}
        <linearGradient id="ct-fade" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff" />
          <stop offset="0.7" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.1" />
        </linearGradient>
        <mask id="ct-mask">
          <rect width="800" height="400" fill="url(#ct-fade)" />
        </mask>
      </defs>
      <g mask="url(#ct-mask)">
        {bands.map((b, i) => (
          <path key={i} d={b.d} fill={b.fill} />
        ))}
      </g>
    </svg>
  )
}

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 px-4 pb-16 md:px-6 md:pb-24">
        {/*
          Bandeau toujours sombre (clair ET sombre) : couleurs fixes, donc rendu identique dans les deux thèmes.
        */}
        <div
          className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10
                     bg-[oklch(0.13_0.04_275)] text-white
                     shadow-[0_30px_60px_-30px_oklch(0.2_0.06_275/0.45)] md:rounded-[2.5rem]"
        >
          {/* Rubans : bannière en haut sur mobile, colonne de gauche sur desktop */}
          <div className="relative h-44 w-full md:absolute md:inset-y-0 md:left-0 md:h-auto md:w-[64%]">
            <Ribbons />
          </div>

          {/* Lueur violette derrière le texte, là où les rubans se rejoignent */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[75%] w-[60%] -translate-y-1/2
                       bg-[radial-gradient(closest-side,color-mix(in_oklab,var(--accent)_55%,transparent),transparent)]
                       blur-3xl md:block"
          />

          {/* Contenu */}
          <div className="relative z-10 flex flex-col justify-center p-7 md:ml-auto md:min-h-[26rem] md:w-[42%] md:p-12 md:pl-8">
            <p className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-white/80">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              Disponible · Île-de-France
            </p>

            <h2
              id="contact-title"
              className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl"
            >
              Un projet data, un poste, une collaboration ?
            </h2>

            <p className="mt-4 text-pretty text-sm leading-relaxed text-white/70 md:text-base">
              Ouvert aux opportunités en data engineering, analytics et finance quantitative.
              Écrivez-moi, je réponds rapidement.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <CtaLink href={`mailto:${profile.email}`}>Prendre contact</CtaLink>
              <CtaLink href={profile.cv} variant="onDark" external>
                Télécharger mon CV
              </CtaLink>
            </div>

            <a
              href={`mailto:${profile.email}`}
              className="mt-6 w-fit font-mono text-xs text-white/60 transition-colors hover:text-white"
            >
              {profile.email}
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-border px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <a
            href="#top"
            className="text-xl font-extrabold tracking-tighter text-foreground transition-opacity hover:opacity-80"
          >
            sissoko<span className="text-accent">.</span>
          </a>
          <p>{`© ${year} ${profile.name} · ${profile.role} · ${profile.location}`}</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}