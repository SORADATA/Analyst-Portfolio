'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { profile } from '@/lib/portfolio-data'
import { CtaLink } from './cta-link'
import { ThemeToggle } from './theme-toggle'

const links = [
  { href: '#expertise', label: 'Expertise' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#projets', label: 'Projets' },
  { href: profile.cv, label: 'CV', external: true },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 border-b border-border px-6">
        <a href="#top" className="text-2xl font-extrabold tracking-tighter" aria-label="Moussa Sissoko, accueil">
          sissoko<span className="text-accent">.</span>
        </a>

        <nav aria-label="Navigation principale" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-[15px] font-medium text-foreground/80 transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <CtaLink href="#contact" size="sm">
            Me contacter
          </CtaLink>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-md border border-border"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="border-b border-border bg-background md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="block py-2 text-base font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <CtaLink href="#contact" size="sm" className="w-full">
                Me contacter
              </CtaLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}