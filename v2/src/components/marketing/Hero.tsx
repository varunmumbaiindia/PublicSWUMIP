"use client";
import Link from "next/link";
import Countdown from "@/components/interactive/Countdown";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 text-center">
      {/* softly moving aura behind the hero */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-120px] h-[480px] w-[860px] -translate-x-1/2 rounded-[55%] opacity-40 blur-[140px] sereno-gradient aura-motion" />
      </div>

      <h1 className="mb-5 text-4xl font-extrabold leading-tight text-[#2B2F33] md:text-6xl">
        Calm technology for <span className="sereno-text-gradient">better days.</span>
      </h1>
      <p className="mx-auto max-w-2xl text-[17px] text-[#5B6065]">
        Sereno Buddy, Studio, and trusted Coaches — thoughtfully integrated for real progress.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Link
          href="/buddy-demo"
          className="btn btn-primary shadow-soft"
          aria-label="Try the Sereno Buddy demo"
        >
          Try Buddy
        </Link>
        <Link
          href="/studio"
          className="btn btn-outline"
          aria-label="Explore Sereno Studio"
        >
          Explore Studio
        </Link>
      </div>

      {/* Countdown to Launch */}
      <div className="mt-10">
        <Countdown />
      </div>
    </section>
  );
}
