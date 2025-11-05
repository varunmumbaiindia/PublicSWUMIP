import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Props for the {@link Section} component.
 */
export interface SectionProps {
  /** Optional identifier used to anchor and reference the section. */
  id?: string
  /**
   * Main headline shown at the top of the section. Styled with the primary
   * charcoal tone from the pastel palette.
   */
  title?: ReactNode
  /**
   * Supporting copy rendered beneath the title using the muted gray tone for
   * comfortable reading.
   */
  description?: ReactNode
  /**
   * Optional node rendered after the heading block (e.g., buttons or badges).
   */
  action?: ReactNode
  /** Additional CSS classes merged with the responsive container styles. */
  className?: string
  /** Section content rendered below the heading area. */
  children?: ReactNode
}

/**
 * A glass-morphism section wrapper that provides responsive padding, soft
 * borders, and consistent typography for landing-page blocks.
 */
export function Section({
  id,
  title,
  description,
  action,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "glass shadow-soft mx-auto flex w-full max-w-6xl flex-col gap-8 rounded-3xl border-white/40 px-6 py-16 text-[#2B2F33] sm:px-8 md:px-12 md:py-20",
        className
      )}
    >
      {(title || description || action) && (
        <div className="flex flex-col gap-4 text-center md:text-left md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            {title && (
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-[#2B2F33] sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="max-w-2xl text-base leading-relaxed text-[#5B6065] sm:text-lg">
                {description}
              </p>
            )}
          </div>
          {action && <div className="flex-shrink-0 text-[#4A4D50]">{action}</div>}
        </div>
      )}
      {children && <div className="grid gap-6 text-[#4A4D50] md:gap-8">{children}</div>}
    </section>
  )
}

/**
 * Props for the {@link FeatureCard} component.
 */
export interface FeatureCardProps {
  /** Title displayed prominently at the top of the card. */
  title: ReactNode
  /** Rich description content explaining the feature. */
  description: ReactNode
  /** Optional accent element such as an icon or emoji. */
  icon?: ReactNode
  /** Additional classes merged with the default glass styles. */
  className?: string
  /** Supplementary content placed in the footer area of the card. */
  footer?: ReactNode
}

/**
 * A compact glass card ideal for highlighting individual features within a
 * {@link Section}. It ensures consistent spacing and color usage.
 */
export function FeatureCard({
  title,
  description,
  icon,
  className,
  footer,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "glass shadow-soft flex h-full flex-col gap-5 rounded-2xl border-white/40 p-6 text-left text-[#2B2F33] sm:p-7 md:p-8",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="glass flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-white/60 text-xl text-[#2B2F33]">
            {icon}
          </div>
        )}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold leading-snug text-[#2B2F33] sm:text-2xl">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-[#5B6065] sm:text-base">
            {description}
          </p>
        </div>
      </div>
      {footer && <div className="mt-auto text-sm text-[#4A4D50]">{footer}</div>}
    </article>
  )}
