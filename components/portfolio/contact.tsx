import { profile } from '@/lib/portfolio-data'
import { CtaLink } from './cta-link'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 px-4 pb-6 md:px-6">
        <div className="mx-auto max-w-[1400px] rounded-3xl bg-foreground px-6 py-20 text-center text-background md:rounded-[2rem] md:py-28">
          <p className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-background/80">
            <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Un projet data, un poste, une collaboration ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-background/70">
            Ouvert aux opportunités en data engineering, analytics et finance quantitative.
            Écrivez-moi, je réponds rapidement.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <CtaLink href={`mailto:${profile.email}`}>Prendre contact</CtaLink>
            <CtaLink href={profile.cv} variant="light" external>
              Télécharger mon CV
            </CtaLink>
          </div>
          <p className="mt-8 font-mono text-sm text-background/60">{profile.email}</p>
        </div>
      </section>

      <footer>
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <a href="#top" className="text-xl font-extrabold tracking-tighter text-foreground">
            sissoko<span className="text-accent">.</span>
          </a>
          <p>{`© ${year} ${profile.name} · ${profile.role} · ${profile.location}`}</p>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs font-medium uppercase tracking-wide text-foreground hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </footer>
    </>
  )
}
