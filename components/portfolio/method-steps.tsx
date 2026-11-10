import { BarChart3, Check, Database, ShieldCheck } from 'lucide-react'
import { approach } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'
import { Eyebrow } from './section-heading'

/*
  Méthode : un panneau bleu nuit, dans l'univers du visuel d'accueil.
  Les trois étapes sont visibles ensemble, reliées par une ligne lumineuse, du brut vers la décision.
  Couleurs fixes (identiques en thème clair et sombre).
*/
const stepStyle = [
  { icon: Database, tile: 'from-brand-indigo to-accent' },
  { icon: ShieldCheck, tile: 'from-accent to-brand-indigo' },
  { icon: BarChart3, tile: 'from-brand-teal to-brand-indigo' },
]

export function MethodSteps() {
  return (
    <div className="relative isolate overflow-hidden rounded-3xl bg-[#0a0b26] p-6 text-white shadow-2xl ring-1 ring-white/10 sm:p-10 lg:p-14">
      {/* Fond : quadrillage fin et lueurs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 30%, #000 40%, transparent 100%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 -z-10 h-[420px] w-[620px] bg-[radial-gradient(closest-side,rgba(80,70,230,0.55),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-[360px] w-[520px] bg-[radial-gradient(closest-side,rgba(124,58,237,0.3),transparent)] blur-2xl"
      />

      <div className="max-w-2xl">
        <Eyebrow className="text-white">Méthode</Eyebrow>
        <h2
          id="methode-title"
          className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
        >
          Trois étapes, zéro approximation
        </h2>
        <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-white/70">
          De la source brute au tableau de bord, chaque étape a un résultat concret et vérifiable.
        </p>
      </div>

      <ol className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
        {approach.map((item, i) => {
          const { icon: Icon, tile } = stepStyle[i % stepStyle.length]
          const isLast = i === approach.length - 1
          return (
            <li key={item.step} className="flex flex-col">
              {/* Ligne lumineuse qui relie les étapes (grand écran) */}
              <div className="mb-5 hidden items-center gap-3 lg:flex" aria-hidden="true">
                <span className="size-3 shrink-0 rounded-full bg-white shadow-[0_0_0_5px_rgba(139,92,246,0.35),0_0_18px_4px_rgba(139,92,246,0.6)]" />
                <span
                  className={cn(
                    'h-px flex-1 bg-gradient-to-r from-white/60 via-violet-400/40 to-white/10',
                    isLast && 'invisible',
                  )}
                />
              </div>

              <div className="relative flex flex-1 flex-col rounded-2xl bg-white/[0.05] p-6 ring-1 ring-white/12 backdrop-blur-sm md:p-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 select-none font-mono text-6xl font-semibold leading-none text-white/[0.07]"
                >
                  0{i + 1}
                </span>

                <span
                  className={cn(
                    'flex size-11 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg shadow-violet-500/20',
                    tile,
                  )}
                  aria-hidden="true"
                >
                  <Icon className="size-5" />
                </span>

                <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.step}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-white/65">{item.text}</p>

                <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-white/85">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check className="mt-1 size-4 shrink-0 text-brand-teal" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <ul className="flex flex-wrap gap-1.5" aria-label={`Outils : ${item.step}`}>
                    {item.tools.map((tool) => (
                      <li
                        key={tool}
                        className="rounded-md bg-white/[0.07] px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-white/80 ring-1 ring-white/10"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 rounded-xl bg-gradient-to-br from-accent/35 to-accent/5 p-4 ring-1 ring-accent/50">
                    <span className="block text-xs font-medium text-white/60">Livrable</span>
                    <span className="mt-1 block text-[15px] font-semibold leading-snug">{item.deliverable}</span>
                  </p>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
