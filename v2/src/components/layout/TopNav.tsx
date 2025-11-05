"use client";
import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-white/60">
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Sereno Home">
          <Image src="/sereno-logo.png" alt="Sereno With You" width={44} height={44} priority />
          {/* keep readable, calm text — no gradient for body text */}
          <span className="text-xl font-semibold tracking-wide text-[#35383B]">Sereno With You</span>
        </Link>

        <div className="flex items-center gap-8 text-[15px] text-[#4A4D50]">
          <Link href="/studio" className="hover:text-[#7D73F4] transition-colors">Studio</Link>
          <Link href="/marketplace" className="hover:text-[#7D73F4] transition-colors">Coaches</Link>
          <Link href="/pricing" className="hover:text-[#7D73F4] transition-colors">Pricing</Link>
          <Link
            href="/buddy-demo"
            className="rounded-2xl px-4 py-2 text-[#1F2328] shadow-soft"
            style={{ background: "linear-gradient(120deg, var(--mint), var(--lavender), var(--peach))" }}
          >
            Try Buddy
          </Link>
        </div>
      </nav>
    </header>
  );
}
