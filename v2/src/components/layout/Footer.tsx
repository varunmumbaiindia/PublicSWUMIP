import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/40 backdrop-blur-md mt-24 py-8 text-center text-sm text-[#555]">
      <p>© {new Date().getFullYear()} Sereno With You · 
        <Link href="/safety" className="hover:text-[#B8A7F8]">Safety</Link> · 
        <Link href="/contact" className="hover:text-[#B8A7F8]">Contact</Link>
      </p>
    </footer>
  );
}
