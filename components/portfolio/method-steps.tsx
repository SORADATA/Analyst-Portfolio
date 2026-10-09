'use client'

import { useState } from 'react'
import { approach } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const GROW = [3.2, 1.7, 1]

export function MethodSteps() {
  const [active, setActive] = useState(0)

  return (
    <ol className="flex flex-col gap-3 md:h-[340px] md:flex-row lg:col-span-8">
      {approach.map((item, i) => {
        const isActive = active === i
        const distance = Math.abs(active - i)

        return (
          <li
            key={item.step}
            style={{ flexGrow: GROW[Math.min(distance, 2)] }}
            className="min-w-0 transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:basis-0"
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              className={cn(
                'group relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border p-6 text-left transition-colors duration-500',
                isActive
                  ? 'border-violet-500/40 bg-gradient-to-br from-violet-500/15 via-violet-500/5 to-transparent shadow-[0_0_40px_-12px] shadow-violet-500/40'
                  : 'border-border/60 bg-card/30 hover:border-violet-500/30'
              )}
            >
              <span
                className={cn(
                  'font-mono text-xs font-semibold tracking-widest transition-colors duration-500',
                  isActive ? 'text-violet-500' : 'text-muted-foreground'
                )}
              >
                {`0${i + 1}`}
              </span>

              <span
                className={cn(
                  'mt-5 block font-semibold leading-tight tracking-tight text-foreground transition-all duration-500',
                  isActive ? 'text-2xl' : 'text-base text-foreground/70'
                )}
              >
                {item.step}
              </span>

              <span
                className={cn(
                  'mt-3 block text-sm leading-relaxed text-muted-foreground transition-all duration-500',
                  isActive ? 'translate-y-0 opacity-100 delay-150' : 'pointer-events-none h-0 translate-y-2 overflow-hidden opacity-0'
                )}
              >
                {item.text}
              </span>

              <span
                aria-hidden={!isActive}
                className={cn(
                  'mt-auto block space-y-2 pt-5 transition-all duration-500',
                  isActive ? 'translate-y-0 opacity-100 delay-200' : 'pointer-events-none translate-y-3 opacity-0'
                )}
              >
                <span className="flex flex-wrap gap-1.5">
                  {item.tools.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-violet-500/25 bg-violet-500/10 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </span>
              </span>

              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-x-0 bottom-0 h-0.5 origin-left bg-violet-500 transition-transform duration-700',
                  isActive ? 'scale-x-100' : 'scale-x-0'
                )}
              />
            </button>
          </li>
        )
      })}
    </ol>
  )
}