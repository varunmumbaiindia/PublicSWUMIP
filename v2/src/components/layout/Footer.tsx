import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-soft">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm text-[#5b5e60]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Sereno With You</span>
          <nav className="flex gap-4">
            <Link href="/safety" className="hover:underline">Safety & Privacy</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
            <Link href="/download" className="hover:underline">Download</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
