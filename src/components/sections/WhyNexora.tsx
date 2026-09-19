"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyNexora() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            label="Our Approach"
            title="Technology Is Only Useful When It Solves Something"
            description="We don't build technology simply because technology is possible."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            "Solve problems that matter",
            "Simplify complex experiences",
            "Help ideas become products",
            "Strengthen businesses",
            "Create better digital experiences",
            "Give organizations useful tools",
          ].map((item, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-nexora-blue mt-2.5 shrink-0" />
                <p className="text-sm md:text-base text-nexora-text-secondary">
                  {item}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <div className="mt-16 md:mt-20 text-center max-w-2xl mx-auto">
            <p className="text-base md:text-lg text-nexora-text-secondary leading-relaxed">
              Every project starts with a question:{" "}
              <span className="text-nexora-white font-medium">
                What problem are we actually solving?
              </span>{" "}
              If we can answer that clearly, we can build something that works.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
