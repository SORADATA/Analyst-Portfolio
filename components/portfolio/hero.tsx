import { BarChart3, BrainCircuit, Database, LineChart, ShieldCheck, Workflow } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import heroWorkspace from '@/public/images/architecture_accueil.png'
import { CtaLink } from './cta-link'
import { Eyebrow } from './section-heading'

const domains = [
  { label: 'Data Engineering', icon: Database, tone: 'bg-brand-indigo' },
  { label: 'Analytics', icon: LineChart, tone: 'bg-accent' },
  { label: 'BI', icon: BarChart3, tone: 'bg-brand-teal' },
  { label: 'Orchestration', icon: Workflow, tone: 'bg-accent' },
  { label: 'Machine Learning', icon: BrainCircuit, tone: 'bg-brand-indigo' },
  { label: 'Qualité & Gouvernance', icon: ShieldCheck, tone: 'bg-brand-teal' },
]

const stats = [
  { value: '3', label: 'Institutions publiques & financières' },
  { value: '+10', label: 'Projets data en ligne' },
  { value: 'Bac+5', label: 'Statistique & Data' },
  { value: 'ETL · ELT', label: 'Pipelines testés & documentés' },
]

function DomainPills({ className }: { className?: string }) {
  return (
    <ul className={cn('flex flex-wrap justify-center gap-2.5', className)} aria-label="Domaines d'expertise">
      {domains.map(({ label, icon: Icon, tone }) => (
        <li
          key={label}
          className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-md bg-muted py-1.5 pl-1.5 pr-3 font-mono text-xs font-medium uppercase tracking-wide"
        >
          <span className={cn('flex size-6 items-center justify-center rounded-sm text-white', tone)} aria-hidden="true">
            <Icon className="size-3.5" />
          </span>
          {label}
        </li>
      ))}
    </ul>
  )
}

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="mx-auto max-w-4xl px-6 pb-14 pt-16 text-center md:pb-16 md:pt-24">
        <Eyebrow>Data Analyst & Analytics Engineer · Paris · Disponible</Eyebrow>

        <h1
          id="hero-title"
          className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
        >
          Transformer la donnée en décisions fiables
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-foreground/80 md:text-xl">
          Je suis Moussa Sissoko. De l&apos;ingestion à la restitution, je conçois des pipelines de
          données fiables, des modèles prédictifs et des dashboards de pilotage, avec une
          expertise en finance et en économie.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaLink href="#projets">Découvrir mes projets</CtaLink>
          <CtaLink href="#contact" variant="outline">
            Échanger avec moi
          </CtaLink>
        </div>

        <DomainPills className="mt-12 lg:hidden" />
      </div>

      <div className="px-4 md:px-6">
        <div className="relative mx-auto max-w-[1400px]">
          <div className="absolute left-1/2 top-0 z-10 hidden -translate-x-1/2 rounded-b-[2rem] bg-background px-6 pb-5 lg:block">
            <span
              className="absolute right-full top-0 size-8 bg-[radial-gradient(circle_at_0_100%,transparent_2rem,var(--background)_2rem)]"
              aria-hidden="true"
            />
            <span
              className="absolute left-full top-0 size-8 bg-[radial-gradient(circle_at_100%_100%,transparent_2rem,var(--background)_2rem)]"
              aria-hidden="true"
            />
            <DomainPills className="flex-nowrap" />
          </div>

          {/* Image principale épurée */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl sm:aspect-[16/9] md:aspect-[21/9] md:rounded-[2rem] border border-white/10 shadow-2xl">
            <Image
              src={heroWorkspace}
              alt="Poste de travail avec des tableaux de bord de données à l'écran"
              fill
              priority
              sizes="(min-width: 1400px) 1400px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Barre de KPI positionnée en dessous de l'image (style Modeo) */}
          <dl className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 rounded-3xl border border-white/10 bg-foreground p-6 text-background md:p-8">
            {stats.map((s, index) => (
              <div 
                key={s.label} 
                className={cn(
                  "flex flex-col justify-between",
                  // Ajout de séparateurs subtils en desktop entre les colonnes
                  index !== stats.length - 1 && "md:border-r md:border-white/10 md:pr-6"
                )}
              >
                <dt className="order-2 mt-2 font-mono text-xs uppercase tracking-wider text-background/70">{s.label}</dt>
                <dd className="order-1 whitespace-nowrap text-3xl font-extrabold tracking-tight lg:text-4xl text-background">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>

        </div>
      </div>
    </section>
  )
}