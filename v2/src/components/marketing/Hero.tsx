"use client";
import Link from "next/link";
import Countdown from "@/components/interactive/Countdown";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 text-center">
      {/* softly moving aura behind the hero */}
      <div className="pointer-events-none absolute left-1/2 top-[-80px] -z-10 h-[420px] w-[820px] -translate-x-1/2 rounded-[50%] blur-[120px] opacity-30 sereno-gradient aura-motion" />

      <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[#2B2F33]">
        Calm technology for <span className="sereno-text-gradient">better days.</span>
      </h1>
      <p className="mx-auto max-w-2xl text-[17px] text-[#5B6065]">
        Sereno Buddy, Studio, and trusted Coaches — thoughtfully integrated for real progress.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/buddy-demo" className="btn btn-primary shadow-soft">Try Buddy</Link>
        <Link href="/studio" className="btn btn-outline">Explore Studio</Link>
      </div>

      {/* Countdown to Launch */}
      <Countdown />
    </section>
  );
}
