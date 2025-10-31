"use client";
import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-white/30">
      {/* Animated gradient line */}
      <div className="h-1 w-full sereno-gradient animate-pulse" />
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Sereno Home">
          <Image src="/sereno-logo.png" alt="Sereno With You" width={60} height={60} priority />
          <span className="text-2xl font-bold sereno-text-gradient tracking-wide">Sereno With You</span>
        </Link>
        <div className="flex items-center gap-6 text-[15px]">
          <Link href="/studio" className="hover:text-[#B8A7F8] transition">Studio</Link>
          <Link href="/marketplace" className="hover:text-[#B8A7F8] transition">Coaches</Link>
          <Link href="/pricing" className="hover:text-[#B8A7F8] transition">Pricing</Link>
          <Link href="/buddy-demo" className="btn btn-primary">Try Buddy</Link>
        </div>
      </nav>
    </header>
  );
}
