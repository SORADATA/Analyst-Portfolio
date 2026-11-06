import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: 'accent' | 'outline' | 'light' | 'onDark'
  size?: 'sm' | 'lg'
  external?: boolean
  className?: string
}

const variants = {
  accent: {
    root: 'bg-accent text-accent-foreground hover:bg-accent/90',
    box: 'bg-accent-foreground text-accent',
  },
  outline: {
    root: 'border border-foreground/15 bg-background text-foreground hover:border-foreground/40',
    box: 'bg-foreground text-background',
  },
  light: {
    root: 'bg-background text-foreground hover:bg-background/90',
    box: 'bg-foreground text-background',
  },
  // Pour les surfaces toujours sombres (indépendant du thème clair/sombre)
  onDark: {
    root: 'bg-white text-neutral-950 hover:bg-white/90',
    box: 'bg-neutral-950 text-white',
  },
}

export function CtaLink({ href, children, variant = 'accent', size = 'lg', external, className }: CtaLinkProps) {
  const v = variants[variant]
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group inline-flex items-center justify-between gap-4 rounded-md font-mono font-semibold uppercase tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2',
        size === 'lg' ? 'h-12 pl-6 pr-2 text-sm' : 'h-10 pl-4 pr-1.5 text-xs',
        v.root,
        className,
      )}
    >
      {children}
      <span
        className={cn(
          'flex items-center justify-center rounded-sm transition-transform group-hover:translate-x-0.5',
          size === 'lg' ? 'size-8' : 'size-7',
          v.box,
        )}
        aria-hidden="true"
      >
        <ArrowRight className="size-4" />
      </span>
    </a>
  )
}