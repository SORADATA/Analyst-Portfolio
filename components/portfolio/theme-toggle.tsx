'use client'

import { useEffect, useState } from 'react'
import { approach } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const GROW = [3.2, 1.7, 1]
const DURATION = 4500

export function MethodSteps() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [cycle, setCycle] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  }, [])

  useEffect(() => {
    if (paused || reduced) return
    const t = setTimeout(() => {
      setActive((a) => (a + 1) % approach.length)
      setCycle((c) => c + 1)
    }, DURATION)
    return () => clearTimeout(t)
  }, [active, paused, cycle, reduced])

  const select = (i: number) => {
    setActive(i)
    setCycle((c) => c + 1)
  }

  return (
    <>
      <style>{`@keyframes method-progress{from{transform:scaleX(0)}to{transform:scaleX(1)}}`}</style>

      <ol
        className="flex flex-col gap-3 md:h-[320px] md:flex-row lg:col-span-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => {
          setPaused(false)
          setCycle((c) => c + 1)
        }}
      >
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
                onClick={() => select(i)}
                onMouseEnter={() => select(i)}
                onFocus={() => select(i)}
                aria-expanded={isActive}
                className={cn(
                  'relative flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-2xl border p-6 text-left transition-[border-color,box-shadow] duration-500',
                  isActive
                    ? 'border-violet-500/50 shadow-[0_0_44px_-14px] shadow-violet-500/50'
                    : 'border-border/60 hover:border-violet-500/30'
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute inset-0 origin-left bg-gradient-to-br from-violet-500/25 via-violet-500/10 to-transparent transition-transform duration-700 ease-out',
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  )}
                />

                <span className="relative flex items-center justify-between">
                  <span
                    className={cn(
                      'font-mono text-xs font-semibold tracking-widest transition-colors duration-500',
                      isActive ? 'text-violet-500' : 'text-muted-foreground'
                    )}
                  >
                    {`0${i + 1}`}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'size-2 rounded-full transition-all duration-500',
                      isActive ? 'scale-100 bg-violet-500' : 'scale-50 bg-border'
                    )}
                  />
                </span>

                <span
                  className={cn(
                    'relative mt-5 block font-semibold leading-tight tracking-tight text-foreground transition-all duration-700',
                    isActive ? 'text-2xl' : 'text-base text-foreground/70'
                  )}
                >
                  {item.step}
                </span>

                <span
                  className={cn(
                    'relative mt-3 block text-sm leading-relaxed text-muted-foreground transition-all duration-700',
                    isActive
                      ? 'translate-y-0 opacity-100 delay-200'
                      : 'pointer-events-none h-0 translate-y-3 overflow-hidden opacity-0'
                  )}
                >
                  {item.text}
                </span>

                <span
                  aria-hidden={!isActive}
                  className={cn(
                    'relative mt-auto flex flex-wrap gap-1.5 pt-5 transition-all duration-700',
                    isActive
                      ? 'translate-y-0 opacity-100 delay-300'
                      : 'pointer-events-none translate-y-4 opacity-0'
                  )}
                >
                  {item.tools.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-violet-500/25 bg-violet-500/10 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wide text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </span>

                {isActive && !paused && !reduced && (
                  <span
                    key={cycle}
                    aria-hidden="true"
                    style={{ animation: `method-progress ${DURATION}ms linear forwards` }}
                    className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-violet-500"
                  />
                )}
                {isActive && (paused || reduced) && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-violet-500"
                  />
                )}
              </button>
            </li>
          )
        })}
      </ol>
    </>
  )
}