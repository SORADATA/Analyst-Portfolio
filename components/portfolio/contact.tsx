import { profile } from '@/lib/portfolio-data'
import { CtaLink } from './cta-link'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 px-4 pb-12 md:px-6">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-8 text-center backdrop-blur-md md:p-14">
          
          {/* Lueur d'arrière-plan (Glow effect) */}
          <div 
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 size-72 rounded-full bg-accent/20 blur-3xl" 
            aria-hidden="true" 
          />

          <p className="relative inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-widest text-accent">
            <span className="size-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Contact
          </p>

          <h2 id="contact-title" className="relative mx-auto mt-4 max-w-2xl text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            Un projet data, un poste, une collaboration ?
          </h2>

          <p className="relative mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Ouvert aux opportunités en data engineering, analytics et finance quantitative.
            Écrivez-moi, je réponds rapidement.
          </p>

          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href={`mailto:${profile.email}`}>Prendre contact</CtaLink>
            <CtaLink href={profile.cv} variant="light" external>
              Télécharger mon CV
            </CtaLink>
          </div>

          <p className="relative mt-6 font-mono text-xs text-muted-foreground/70">
            {profile.email}
          </p>
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
