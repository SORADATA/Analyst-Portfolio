import { expertise } from '@/lib/portfolio-data'
import { expertiseVisuals } from './expertise-visuals'
import { MethodSteps } from './method-steps'
import { SectionHeading } from './section-heading'

export function Expertise() {
  return (
    <section aria-labelledby="expertise-title" id="expertise" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          id="expertise-title"
          label="Expertise"
          align="center"
          title="Une approche hybride : rigueur statistique et ingénierie moderne"
          description="De la donnée brute jusqu'à la restitution décisionnelle, je couvre l'ensemble de la chaîne de valeur data."
        />

        <ul className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {expertise.map((item, i) => {
            const Visual = expertiseVisuals[i % expertiseVisuals.length]
            return (
              <li
                key={item.id}
                className="group flex flex-col rounded-2xl bg-muted p-3 transition-colors hover:bg-foreground hover:text-background"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-xl bg-[#0a0b26] ring-1 ring-white/10">
                  <Visual />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-3 text-pretty text-[15px] leading-relaxed text-muted-foreground group-hover:text-background/70">
                    {item.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-8" aria-label={`Outils ${item.title}`}>
                    {item.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-sm bg-background px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-foreground"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-24">
          <MethodSteps />
        </div>
      </div>
    </section>
  )
}
