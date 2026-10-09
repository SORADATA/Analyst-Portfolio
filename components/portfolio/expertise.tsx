import { BarChart3, BrainCircuit, Database, LineChart } from 'lucide-react'
import { expertise } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { SectionHeading } from './section-heading'
import { MethodSteps } from './method-steps'

const visuals = [
  { icon: Database, tone: 'bg-brand-indigo' },
  { icon: LineChart, tone: 'bg-accent' },
  { icon: BrainCircuit, tone: 'bg-brand-teal' },
  { icon: BarChart3, tone: 'bg-foreground' },
]

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
            const { icon: Icon, tone } = visuals[i % visuals.length]
            return (
              <li
                key={item.id}
                className="group flex flex-col rounded-2xl bg-muted p-7 transition-colors hover:bg-foreground hover:text-background"
              >
                <div className="flex items-center justify-between">
                  <span className={cn('flex size-11 items-center justify-center rounded-lg text-white', tone)} aria-hidden="true">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-background/60">{item.id}</span>
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{item.title}</h3>
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
              </li>
            )
          })}
        </ul>

        <div className="mt-24 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading id="methode-title" label="Méthode" title="Trois étapes, zéro approximation" />
          </div>
          <MethodSteps />
        </div>
      </div>
    </section>
  )
}