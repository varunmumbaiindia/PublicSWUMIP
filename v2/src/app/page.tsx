import type { Metadata } from "next";
import { Hero } from "@/components/marketing/Hero";
import { Section } from "@/components/common/Section";
import { FeatureCard } from "@/components/common/FeatureCard";

export const metadata: Metadata = {
  title: "Sereno — Home",
  description: "Sereno v2 preview: Home.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <main className="space-y-24 pb-24">
        <Section title="What you get">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Thoughtful onboarding"
              description="We guide your team through a gentle setup that respects existing rhythms while highlighting quick wins for calmer workdays."
            />
            <FeatureCard
              title="Shared language"
              description="Custom prompts and copy blocks help everyone describe customer value the same way, making collaboration natural and efficient."
            />
            <FeatureCard
              title="Clear moments to act"
              description="Friendly nudges surface when something needs attention—never noisy, always actionable, and easy to dismiss when you are focused."
            />
          </div>
        </Section>

        <Section title="Why it matters">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Teams stay in sync"
              description="Lightweight rituals keep product, support, and leadership aligned so decisions can happen quickly without constant meetings."
            />
            <FeatureCard
              title="Customers feel heard"
              description="Every note collected by Sereno loops back to the people who can respond, creating a quiet but steady trust with your community."
            />
            <FeatureCard
              title="Momentum becomes visible"
              description="Progress snapshots celebrate the small wins that add up, giving teammates confidence that their effort is moving the work forward."
            />
          </div>
        </Section>

        <Section title="Be an early friend">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Shape the product"
              description="We invite you to share how your team works today so we can adapt Sereno to feel like a natural extension of your process."
            />
            <FeatureCard
              title="Hear from us first"
              description="Monthly notes from the founding team highlight what changed, what is coming next, and how you can try new ideas before anyone else."
            />
            <FeatureCard
              title="Join the waitlist"
              description="Add your email and we will reach out with a warm introduction and a time to explore Sereno together."
              href="https://sereno.so/waitlist"
              ctaLabel="Save my spot"
            />
          </div>
        </Section>
      </main>
    </>
  );
}
