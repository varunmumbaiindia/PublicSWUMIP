"use client";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      {/* subtle gradient ribbon behind heading */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-40 opacity-25 sereno-gradient blur-2xl rounded-2xl" />
      <h1 className="relative text-4xl md:text-6xl font-extrabold leading-tight">
        Calm technology for <span className="sereno-gradient-t">better days</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-[#65686b]">
        Sereno Buddy, Studio, and trusted Coaches — thoughtfully integrated for real progress.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/buddy-demo" className="rounded-2xl px-5 py-3 text-[#373A3C] border border-soft shadow-soft"
          style={{ background: "linear-gradient(120deg, var(--turquoise), var(--lavender), var(--peach))" }}>
          Try Buddy
        </Link>
        <Link href="/studio" className="rounded-2xl border border-soft px-5 py-3 hover:shadow-soft">
          Explore Studio
        </Link>
      </div>
    </section>
  );
}
