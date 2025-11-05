import type { Metadata } from "next";

const marketplaceTiles = [
  {
    title: "Spotlight Coaches",
    description:
      "Discover mindfulness guides, breathwork artists, and gentle movement mentors curated for balance.",
    note: "Soft gradients indicate availability windows and vibe match.",
  },
  {
    title: "Session Capsules",
    description:
      "Browse ready-to-flow experiences blending music, meditations, and check-ins from trusted creators.",
    note: "Preview the sensory arc, from first inhale to closing gratitude.",
  },
  {
    title: "Client Reflections",
    description:
      "Read calming testimonials shaped like floating glass pebbles, highlighting transformation moments.",
    note: "Each reflection glows warmer as the community grows.",
  },
  {
    title: "Wellness Bundles",
    description:
      "Combine serene courses, ambient playlists, and guided journaling tracks for seasonal journeys.",
    note: "Bundle cards shimmer with pastel ribbons indicating focus themes.",
  },
];

export const metadata: Metadata = {
  title: "Sereno — Marketplace",
  description: "Sereno marketplace preview featuring calming glass tiles with curated offerings.",
};

export default function MarketplacePage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-[#707277]">Marketplace Preview</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#323539] md:text-5xl">
          Gentle matches for every mindful seeker
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#4a4d52]">
          Explore coaches, experiences, and bundles through a calming glass gallery. Each tile hints at
          the energy, tone, and availability of your next restorative partner.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {marketplaceTiles.map((tile) => (
          <article
            key={tile.title}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/50 p-8 shadow-soft glass"
          >
            <span className="absolute inset-x-10 top-0 h-1.5 rounded-full bg-gradient-to-r from-[#F8BBD0] via-[#A7E8E1] to-[#B8A7F8]" />
            <div className="relative mt-6 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-[#323539]">{tile.title}</h2>
              <p className="text-base leading-relaxed text-[#4a4d52]">{tile.description}</p>
              <p className="text-sm text-[#707277]">{tile.note}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
