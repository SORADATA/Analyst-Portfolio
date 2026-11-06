import { profile } from '@/lib/portfolio-data'
import { CtaLink } from './cta-link'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <>
      <section aria-labelledby="contact-title" id="contact" className="scroll-mt-20 px-4 pb-12 md:px-6">
        {/* Utilisation de ta carte sombre élégante avec tes variables de design */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-foreground p-6 text-background md:rounded-[2rem] md:p-12">
          
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-10">
            
            {/* Colonne de gauche : Emplacement visuel / photo (5 colonnes) */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-background/5 border border-white/10 md:col-span-5 md:aspect-square">
              {/* Tu pourras remplacer ou ajouter ton image ici */}
              <div className="flex h-full w-full items-center justify-center font-mono text-xs uppercase tracking-wider text-background/60">
                [ Votre Visuel / Photo ]
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
