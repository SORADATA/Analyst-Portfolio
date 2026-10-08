import { ArrowUpRight, Code2 } from 'lucide-react'
import { profile, projects, type Project } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { CtaLink } from './cta-link'
import { SectionHeading } from './section-heading'

function ProjectLinks({ project, inverted }: { project: Project; inverted?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-1.5 rounded-md bg-accent px-3.5 font-mono text-xs font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
        >
          Démo live
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
          <span className="sr-only">{`de ${project.title}`}</span>
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex h-9 items-center gap-1.5 rounded-md border px-3.5 font-mono text-xs font-semibold uppercase tracking-wide transition-colors',
            inverted
              ? 'border-background/20 text-background hover:border-background/50'
              : 'border-foreground/15 hover:border-foreground/40',
          )}
        >
          <Code2 className="size-3.5" aria-hidden="true" />
          Code
          <span className="sr-only">{`source de ${project.title}`}</span>
        </a>
      )}
    </div>
  )
}

function Stack({ items, inverted }: { items: string[]; inverted?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
      {items.map((s) => (
        <li
          key={s}
          className={cn(
            'rounded-sm px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide',
            inverted ? 'bg-background/10 text-background' : 'bg-muted',
          )}
        >
          {s}
        </li>
      ))}
    </ul>
  )
}

export function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)

  return (
    <section aria-labelledby="projets-title" id="projets" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="projets-title"
            label="Projets"
            title="Des cas concrets, du pipeline au portefeuille"
            description="Une sélection de projets open source en data engineering, finance quantitative et IA."
          />
          <CtaLink href={profile.github} variant="outline" size="sm" external className="shrink-0 self-start md:self-auto">
            Tout voir sur GitHub
          </CtaLink>
        </div>

        {featured && (
          <article className="mt-14 grid overflow-hidden rounded-3xl bg-foreground text-background lg:grid-cols-12">
            <div className="flex flex-col gap-6 p-8 md:p-12 lg:col-span-7">
              <p className="inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-background/70">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Projet phare · {featured.category}
              </p>
              <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{featured.title}</h3>
              <p className="max-w-xl text-pretty leading-relaxed text-background/75">{featured.summary}</p>
              <Stack items={featured.stack} inverted />
              <div className="mt-2">
                <ProjectLinks project={featured} inverted />
              </div>
            </div>
            <div className="flex flex-col justify-end gap-3 border-t border-background/10 p-8 md:p-12 lg:col-span-5 lg:border-l lg:border-t-0">
              {[
                ['Régimes de marché', 'K-Means'],
                ['Prédiction', 'XGBoost · LightGBM'],
                ['Optimisation', 'Black-Litterman · CVaR'],
                ['Suivi', 'Sharpe · Sortino · CI/CD'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b border-background/10 pb-3 last:border-b-0">
                  <span className="text-sm text-background/60">{k}</span>
                  <span className="text-right font-mono text-sm">{v}</span>
                </div>
              ))}
            </div>
          </article>
        )}

        <ul className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {others.map((project) => (
            <li
              key={project.title}
              className="flex flex-col gap-5 rounded-2xl border border-border p-7 transition-colors hover:border-foreground/30"
            >
              <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">{project.category}</p>
              <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
              <p className="text-pretty text-[15px] leading-relaxed text-muted-foreground">{project.summary}</p>
              <div className="mt-auto flex flex-col gap-5 pt-2">
                <Stack items={project.stack} />
                <ProjectLinks project={project} />
              </div>
            </li>
          ))}
          <li className="flex flex-col justify-between gap-6 rounded-2xl bg-accent p-7 text-accent-foreground">
            <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent-foreground/80">Et plus encore</p>
            <p className="text-balance text-2xl font-semibold tracking-tight">
              15+ dépôts sur la data, le risque et l&apos;IA générative.
            </p>
            <CtaLink href={profile.github} variant="light" size="sm" external className="self-start">
              Explorer GitHub
            </CtaLink>
          </li>
        </ul>
      </div>
    </section>
  )
}
