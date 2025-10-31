import "./globals.css";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { TopNav } from "@/components/layout/TopNav";
import { Footer } from "@/components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-plusjakarta", display: "swap" });

export const metadata: Metadata = {
  title: "Sereno With You",
  description: "AI-powered mental wellness — Buddy, Studio, Marketplace.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} font-sans`} style={{background:"#0B1215", color:"#F7F9FA"}}>
        <TopNav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
