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
          
          {/* Conteneur regroupant GitHub et LinkedIn avec leurs logos respectifs */}
          <div className="flex items-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:text-accent"
              aria-label="Profil GitHub"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>

            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:text-accent"
              aria-label="Profil LinkedIn"
            >
              <svg className="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}