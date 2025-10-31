"use client";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-28 text-center">
      {/* Ambient gradient aura */}
      <div className="absolute inset-0 -z-10 blur-[120px] opacity-30 sereno-gradient" />
      
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
        Calm technology for <span className="sereno-text-gradient">better days.</span>
      </h1>
      <p className="mx-auto max-w-2xl text-lg text-[#555] mb-10">
        Sereno Buddy, Studio, and trusted Coaches — thoughtfully integrated for real progress.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/buddy-demo" className="btn btn-primary">Try Buddy</Link>
        <Link href="/studio" className="btn btn-outline">Explore Studio</Link>
      </div>
    </section>
  );
}
