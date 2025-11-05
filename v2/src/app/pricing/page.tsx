import type { Metadata } from "next";

const pricingTiles = [
  {
    title: "Starter Glow",
    price: "$22 / month",
    description:
      "For emerging guides launching their first mindful series with up to 25 members and essential studio tools.",
    note: "Includes Flow Composer, session scheduling, and pastel template packs.",
  },
  {
    title: "Studio Collective",
    price: "$58 / month",
    description:
      "For growing collectives hosting weekly gatherings, sharing resources, and nurturing a gentle community hub.",
    note: "Adds multi-coach access, reflection analytics, and custom soundscapes.",
  },
  {
    title: "Aurora Partner",
    price: "Custom",
    description:
      "For established brands co-creating signature wellness programs, retreats, and immersive offerings.",
    note: "White-glove onboarding, experiential design support, and concierge care.",
  },
];

export const metadata: Metadata = {
  title: "Sereno — Pricing",
  description: "Sereno pricing preview with calming glass plan tiles and gentle copy placeholders.",
};

export default function PricingPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-[#707277]">Pricing Preview</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#323539] md:text-5xl">
          Softly tiered plans for mindful creators
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#4a4d52]">
          Choose a plan that fits your rhythm. Each glass tile shimmers with calming gradients to mirror
          the supportive experience Sereno brings to every partnership.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {pricingTiles.map((tile) => (
          <article
            key={tile.title}
            className="relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/50 p-8 shadow-soft glass"
          >
            <span className="absolute inset-x-10 top-0 h-1.5 rounded-full bg-gradient-to-r from-[#A7E8E1] via-[#FFC6B9] to-[#B8A7F8]" />
            <div className="relative mt-6 flex flex-1 flex-col gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[#323539]">{tile.title}</h2>
                <p className="mt-2 text-xl font-medium text-[#4a4d52]">{tile.price}</p>
              </div>
              <p className="flex-1 text-base leading-relaxed text-[#4a4d52]">{tile.description}</p>
              <p className="text-sm text-[#707277]">{tile.note}</p>
            </div>
            <button className="relative mt-8 inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-5 py-2 text-sm font-medium text-[#323539] transition hover:scale-[1.02] hover:bg-white/90">
              Choose plan
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
