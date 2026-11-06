import { profile } from '@/lib/portfolio-data'
import { CtaLink } from './cta-link'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 px-4 pb-12 md:px-6">
        {/* Carte principale avec un fond sombre profond et des bordures soignées */}
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-foreground p-6 text-background md:rounded-[2.5rem] md:p-12 shadow-2xl">
          
          {/* Effets lumineux d'arrière-plan (style bannières tech modernes) */}
          <div className="absolute -left-20 top-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-indigo-500/25 blur-[90px] pointer-events-none" />
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent/20 blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
            
            {/* Colonne de gauche : Élément visuel abstrait dynamique (lignes de flux de données lumineuses) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-black/40 border border-white/10 p-6 md:col-span-5 md:aspect-square flex flex-col justify-between shadow-inner">
              
              {/* Simulation de flux lumineux et de courbes de données stylisées */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,theme(colors.indigo.500/15),theme(colors.accent/15))] opacity-75 blur-2xl pointer-events-none" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-background/60">Pipeline Status</span>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="relative z-10 space-y-3">
                <div className="h-1.5 w-3/4 rounded-full bg-white/20 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-accent" />
                </div>
                <div className="h-1.5 w-1/2 rounded-full bg-white/15" />
                <p className="font-mono text-xs text-background/70 pt-2">
                  > End-to-end data processing active.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-[11px] text-background/60">
                <span>LATENCY: 12ms</span>
                <span className="text-accent font-semibold">SECURE</span>
              </div>
            </div>

            {/* Colonne de droite : Contenu et CTA (7 colonnes) */}
            <div className="flex flex-col justify-center text-left md:col-span-7">
              
              <p className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-background/80">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Contact
              </p>

              <h2 id="contact-title" className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
                Un projet data, un poste, une collaboration ?
              </h2>

              <p className="mt-4 text-pretty text-sm leading-relaxed text-background/70 md:text-base">
                Ouvert aux opportunités en data engineering, analytics et finance quantitative.
                Écrivez-moi, je réponds rapidement.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CtaLink href={`mailto:${profile.email}`}>Prendre contact</CtaLink>
                <CtaLink href={profile.cv} variant="light" external>
                  Télécharger mon CV
                </CtaLink>
              </div>

              <p className="mt-6 font-mono text-xs text-background/60">
                {profile.email}
              </p>

            </div>

          </div>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row border-t border-white/5">
          <a href="#top" className="text-xl font-extrabold tracking-tighter text-foreground hover:opacity-80 transition-opacity">
            sissoko<span className="text-accent">.</span>
          </a>
          <p>{`© ${year} ${profile.name} · ${profile.role} · ${profile.location}`}</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-medium uppercase tracking-wide text-foreground hover:text-accent transition-colors"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}