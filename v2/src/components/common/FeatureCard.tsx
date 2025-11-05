import Link from "next/link";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  href,
  ctaLabel,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur",
        "transition hover:border-white/20 hover:bg-white/10",
        className,
      )}
    >
      <div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-3 text-base leading-relaxed text-white/80">{description}</p>
      </div>
      {href && ctaLabel ? (
        <Link
          href={href}
          rel="noreferrer noopener"
          className="mt-6 inline-flex items-center text-sm font-medium text-sky-200 hover:text-sky-100"
        >
          {ctaLabel}
        </Link>
      ) : null}
    </article>
  );
}
