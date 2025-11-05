import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";

export const metadata: Metadata = {
  title: "Sereno — Home",
  description: "Sereno v2 preview: Home.",
};

export default function HomePage() { return <Hero />; }
