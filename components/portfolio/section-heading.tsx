import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  id: string
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-wider text-foreground',
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  )
}

export function SectionHeading({ id, label, title, description, align = 'left', className }: SectionHeadingProps) {
  const centered = align === 'center'
  return (
    <div className={cn('max-w-3xl', centered && 'mx-auto text-center', className)}>
      <Eyebrow>{label}</Eyebrow>
      <h2
        id={id}
        className="mt-5 text-balance text-3xl font-semibold leading-[1.1] tracking-tight md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground',
            centered && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
