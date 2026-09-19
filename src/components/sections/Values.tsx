"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    title: "Curious",
    description: "We keep learning. Technology moves fast, and so do we.",
  },
  {
    title: "Intentional",
    description: "We build with purpose. Every decision has a reason.",
  },
  {
    title: "Creative",
    description: "We look beyond obvious solutions to find better ones.",
  },
  {
    title: "Reliable",
    description: "We take the work seriously. Deadlines and quality matter.",
  },
  {
    title: "Adaptable",
    description: "We evolve with technology. What works today may need refining tomorrow.",
  },
  {
    title: "Human",
    description: "Technology should serve people, not the other way around.",
  },
];

export function Values() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-nexora-dark/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            label="Our Values"
            title="What Drives Us"
            description="The principles that guide how we build, work, and grow."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 80}>
              <div className="group p-6 md:p-8 rounded-2xl border border-nexora-border bg-nexora-charcoal/30 hover:border-nexora-blue/20 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-nexora-white mb-3 group-hover:text-nexora-blue-light transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-nexora-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
