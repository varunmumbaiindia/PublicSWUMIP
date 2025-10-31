// src/components/common/Section.tsx
import { PropsWithChildren } from "react";

export function Section({ children, title }: PropsWithChildren<{ title: string }>) {
  return (
    <section
      aria-labelledby="page-title"
      className="mx-auto max-w-7xl px-4 py-12"
      role="region"
    >
      <h1 id="page-title" className="text-3xl md:text-4xl font-bold">{title}</h1>
      <div className="mt-4 text-base text-white/80">{children}</div>
    </section>
  );
}
