"use client";
import Link from "next/link";
import Image from "next/image";

export function TopNav() {
  return (
    <header className="sticky top-0 z-50 w-full px-3 py-2 sm:px-4">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex w-full max-w-6xl flex-col items-stretch gap-4 rounded-2xl border border-white/60 px-4 py-3 text-[15px] text-[#4A4D50] shadow-soft backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-6"
      >
        <Link
          href="/"
          className="flex flex-shrink-0 items-center gap-3 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D73F4]"
          aria-label="Sereno Home"
        >
          <Image src="/sereno-logo.png" alt="Sereno With You" width={44} height={44} priority />
          <span className="text-xl font-semibold tracking-wide text-[#35383B]">Sereno With You</span>
        </Link>

        <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:w-auto sm:justify-end">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end" role="list">
            <li>
              <Link
                href="/studio"
                className="transition-colors hover:text-[#A6AEF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D73F4]"
              >
                Studio
              </Link>
            </li>
            <li>
              <Link
                href="/marketplace"
                className="transition-colors hover:text-[#A6AEF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D73F4]"
              >
                Marketplace
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="transition-colors hover:text-[#A6AEF6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D73F4]"
              >
                Pricing
              </Link>
            </li>
          </ul>
          <Link
            href="/buddy-demo"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#C7F7D4] via-[#D9CCFF] to-[#FFD6E8] px-4 py-2 text-sm font-semibold text-[#1F2328] shadow-soft transition hover:from-[#B8F0C6] hover:via-[#D1C2FF] hover:to-[#FFCCDF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7D73F4]"
          >
            Try Buddy
          </Link>
        </div>
      </nav>
    </header>
  );
}
