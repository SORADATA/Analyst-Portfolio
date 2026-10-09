'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { approach } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function MethodSteps() {
  const [active, setActive] = useState(0)

  return (
    <ol className="flex flex-col gap-px overflow-hidden rounded-2xl border border-border bg-border md:flex-row lg:col-span-8">
      {approach.map((item, i) => {
        const isActive = active === i
        return (
          <li
            key={item.step}
            className={cn(
              'transition-[flex-grow,background-color] duration-500 ease-out md:basis-0',
              isActive ? 'bg-violet-700 text-white md:grow-[2.4]' : 'bg-background md:grow'
            )}
          >
            <button
              type="button"
              onClick={() => setActive(i)}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              aria-expanded={isActive}
              className="flex h-full w-full cursor-pointer flex-col p-7 text-left"
            >
              <span
                className={cn(
                  'font-mono text-sm font-semibold transition-colors duration-500',
                  isActive ? 'text-white' : 'text-accent'
                )}
              >
                {`0${i + 1}`}
              </span>

              <span
                className={cn(
                  'mt-6 block font-semibold tracking-tight transition-all duration-500',
                  isActive ? 'text-2xl text-white' : 'text-lg text-foreground/70'
                )}
              >
                {item.step}
              </span>

              <span
                className={cn(
                  'mt-2 block text-[15px] leading-relaxed transition-colors duration-500',
                  isActive ? 'text-white/85' : 'text-muted-foreground'
                )}
              >
                {item.text}
              </span>

              <span
                aria-hidden={!isActive}
                className={cn(
                  'grid transition-all duration-500 ease-out',
                  isActive ? 'mt-6 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <span className="block overflow-hidden">
                  <span className="block space-y-2.5">
                    {item.points.map((p) => (
                      <span key={p} className="flex items-start gap-2.5 text-sm leading-snug text-white/90">
                        <Check className="mt-0.5 size-4 shrink-0 text-white" aria-hidden="true" />
                        {p}
                      </span>
                    ))}
                  </span>

                  <span className="mt-5 flex flex-wrap gap-1.5">
                    {item.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-sm bg-white/15 px-2 py-1 font-mono text-[11px] font-medium uppercase tracking-wide text-white"
                      >
                        {t}
                      </span>
                    ))}
                  </span>

                  <span className="mt-5 block border-t border-white/20 pt-4 text-xs text-white/75">
                    <span className="font-mono uppercase tracking-wide">Livrable</span>
                    <span className="mt-1 block text-sm font-medium text-white">{item.deliverable}</span>
                  </span>
                </span>
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}