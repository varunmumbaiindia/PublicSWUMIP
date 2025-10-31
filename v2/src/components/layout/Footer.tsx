import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-white/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Sereno With You</span>
          <nav className="flex gap-4">
            <Link href="/safety" className="hover:text-white">Safety & Privacy</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/download" className="hover:text-white">Download</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
