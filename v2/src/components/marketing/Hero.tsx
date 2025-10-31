"use client";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
        Calm technology for <span style={{color:"#4ECDC4"}}>better days</span>.
      </h1>
      <p className="mt-4 max-w-2xl text-white/80">
        Sereno Buddy, Studio, and trusted Coaches — thoughtfully integrated for real progress.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/buddy-demo" className="rounded-2xl px-5 py-3 text-black" style={{background:"#4ECDC4"}}>Try Buddy</Link>
        <Link href="/studio" className="rounded-2xl border border-white/15 px-5 py-3 text-white/90 hover:bg-white/5">Explore Studio</Link>
      </div>
    </section>
  );
}
