"use client";
import Link from "next/link";

export function TopNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/25 border-b border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <Link href="/" className="text-lg font-bold" aria-label="Sereno Home">
          <span style={{color:"#4ECDC4"}}>Sereno</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/studio" className="text-sm text-white/80 hover:text-white">Studio</Link>
          <Link href="/marketplace" className="text-sm text-white/80 hover:text-white">Coaches</Link>
          <Link href="/pricing" className="text-sm text-white/80 hover:text-white">Pricing</Link>
          <Link href="/buddy-demo" className="rounded-2xl px-4 py-2 text-black hover:opacity-90" style={{background:"#B19CD9"}}>
            Try Buddy
          </Link>
        </div>
      </nav>
    </header>
  );
}
