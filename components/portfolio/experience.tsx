import { GraduationCap } from 'lucide-react'
import { education, experiences } from '@/lib/portfolio-data'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section aria-labelledby="parcours-title" id="parcours" className="scroll-mt-20 bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                id="parcours-title"
                label="Parcours"
                title="Au cœur des institutions économiques et financières"
              />
              <h3 className="mt-12 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Formation
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {education.map((edu) => (
                  <li key={edu.degree} className="flex gap-4 rounded-xl bg-background p-5">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-brand-indigo text-white" aria-hidden="true">
                      <GraduationCap className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold leading-snug">{edu.degree}</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {edu.school} · <span className="font-mono text-xs">{edu.period}</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ol className="flex flex-col gap-4 lg:col-span-8">
            {experiences.map((exp) => (
              <li key={exp.company} className="rounded-2xl bg-background p-7 md:p-9">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-foreground font-mono text-xs font-semibold text-background"
                      aria-hidden="true"
                    >
                      {exp.short}
                    </span>
                    <div>
                      <h4 className="text-xl font-semibold tracking-tight">{exp.role}</h4>
                      <p className="mt-0.5 text-[15px] font-medium text-accent">{exp.company}</p>
                    </div>
                  </div>
                  <p className="inline-flex shrink-0 self-start rounded-sm bg-muted px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wide">
                    {exp.period} · {exp.location}
                  </p>
                </div>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-6">
                  {exp.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-pretty leading-relaxed text-foreground/80">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
