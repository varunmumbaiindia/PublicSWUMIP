"use client";
import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-soft shadow-soft">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Sereno Home">
          <Image src="/sereno-logo.png" alt="Sereno With You" width={32} height={32} priority />
          <span className="text-lg font-semibold sereno-gradient-t">SERENO</span>
        </Link>

        <div className="ml-auto flex items-center gap-4">
          <Link href="/studio" className="text-sm hover:underline">Studio</Link>
          <Link href="/marketplace" className="text-sm hover:underline">Coaches</Link>
          <Link href="/pricing" className="text-sm hover:underline">Pricing</Link>
          <Link
            href="/buddy-demo"
            className="rounded-2xl px-4 py-2 text-[#373A3C] border border-soft"
            style={{ background: "linear-gradient(120deg, var(--turquoise), var(--lavender), var(--peach))" }}
          >
            Try Buddy
          </Link>
        </div>
      </nav>
    </header>
  );
}
