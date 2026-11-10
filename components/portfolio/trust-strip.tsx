'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

/*
  Bandeau des institutions : les logos défilent un par un (celui en cours est mis en lumière).

  Pour ajouter un logo : dépose le fichier dans le dossier public/logos/ avec le nom indiqué ci-dessous
  (ou change le nom ici). Tant que le fichier est absent, le nom de l'institution s'affiche à la place.
  Les chemins sont relatifs (sans « / » au début) pour fonctionner sur GitHub Pages.
*/
const institutions = [
  { name: "Ministère de l'Économie et des Finances", logo: 'logos/mef.png' },
  { name: 'Banque de France', logo: 'logos/banque-de-france.png' },
  { name: 'CDEF Maine-et-Loire', logo: 'logos/cdef.png' },
  { name: 'Université de Lorraine', logo: 'logos/universite-de-lorraine.png' },
  { name: "Université d'Angers", logo: 'logos/universite-d-angers.png' },
]

const INTERVAL_MS = 2600

function Mark({ name, logo, lit }: { name: string; logo: string; lit: boolean }) {
  const [failed, setFailed] = useState(false)
  const ref = useRef<HTMLImageElement>(null)

  // L'erreur de chargement peut survenir avant que React ne soit prêt : on revérifie une fois monté
  useEffect(() => {
    const img = ref.current
    if (img && img.complete && img.naturalWidth === 0) setFailed(true)
  }, [])

  if (failed) {
    return <span className="text-base font-semibold tracking-tight md:text-lg">{name}</span>
  }
  return (
    // En mode sombre, le logo est posé sur une pastille claire : lisible quel que soit son fond d'origine
    <span className="flex items-center rounded-lg dark:bg-white dark:px-3 dark:py-1.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={logo}
        alt={name}
        height={44}
        loading="lazy"
        onError={() => setFailed(true)}
        className={cn(
          'h-9 w-auto max-w-[170px] object-contain transition-[filter] duration-500 md:h-11 md:max-w-[200px]',
          lit ? '' : 'grayscale',
        )}
      />
    </span>
  )
}

export function TrustStrip() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setStill(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (paused || still) return
    const id = window.setInterval(() => setActive((i) => (i + 1) % institutions.length), INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, still])

  return (
    <div className="mx-auto max-w-7xl px-6 pt-14 text-center md:pt-16">
      <p className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Un parcours au sein d&apos;institutions de référence
      </p>
      <ul
        className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 md:gap-x-16"
        onMouseLeave={() => setPaused(false)}
      >
        {institutions.map((item, i) => {
          const lit = still || active === i
          return (
            <li
              key={item.name}
              onMouseEnter={() => {
                setPaused(true)
                setActive(i)
              }}
              className={cn(
                'flex h-11 items-center text-foreground transition-opacity duration-500',
                lit ? 'opacity-100' : 'opacity-30',
              )}
            >
              <Mark name={item.name} logo={item.logo} lit={lit} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}
