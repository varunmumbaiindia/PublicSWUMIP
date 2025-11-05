import type { Metadata } from "next";

const studioTiles = [
  {
    title: "Flow Composer",
    description:
      "Sketch mindful session outlines, blend rituals, and layer sensory cues for every client journey.",
    note: "Drag-and-dream canvas for breathing, journaling, and sound.",
  },
  {
    title: "Rhythm Library",
    description:
      "Collect voice notes, music beds, and gentle prompts that sync with each stage of a session.",
    note: "A pastel shelf of tones, timers, and grounded reminders.",
  },
  {
    title: "Energy Pulse",
    description:
      "Track how clients respond in real-time with soft gradients charting calm, focus, and release.",
    note: "Live biofeedback rendered as floating light trails.",
  },
];

export const metadata: Metadata = {
  title: "Sereno — Studio",
  description: "Sereno studio preview featuring calming glass tiles for upcoming creator tools.",
};

export default function StudioPage() {
  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <section className="mx-auto max-w-3xl text-center">
        <p className="uppercase tracking-[0.35em] text-sm text-[#707277]">Creator Studio</p>
        <h1 className="mt-4 text-4xl font-semibold text-[#323539] md:text-5xl">
          A gentle workspace for crafting serene journeys
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-[#4a4d52]">
          Sereno Studio gathers your rituals, audio, and reflections into a single calming hub. These
          glass tiles glow softly while you orchestrate restorative experiences.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {studioTiles.map((tile) => (
          <article
            key={tile.title}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/50 p-8 shadow-soft glass"
          >
            <span className="absolute inset-x-8 top-0 h-1.5 rounded-full bg-gradient-to-r from-[#A7E8E1] via-[#B8A7F8] to-[#FFC6B9]" />
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
