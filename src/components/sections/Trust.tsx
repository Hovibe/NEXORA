"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code, Palette, Compass, Zap } from "lucide-react";

const pillars = [
  {
    icon: Zap,
    title: "Build",
    description:
      "We develop applications, websites, and systems using the right technologies for each project.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "We create interfaces and visual identities that are functional, clear, and visually refined.",
  },
  {
    icon: Compass,
    title: "Solve",
    description:
      "We take problems and find practical digital solutions — even when the path isn't obvious.",
  },
  {
    icon: Code,
    title: "Evolve",
    description:
      "We improve, maintain, and adapt digital products as technology and requirements change.",
  },
];

export function Trust() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            label="From Idea to Digital Reality"
            title="Technology, Design, Strategy, Execution"
            description="We combine technical skill with design thinking to create digital products that are useful, beautiful, and built to last."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <div className="group p-6 md:p-8 rounded-2xl border border-nexora-border bg-nexora-charcoal/50 hover:border-nexora-blue/30 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.08)]">
                <div className="w-12 h-12 rounded-xl bg-nexora-blue/10 flex items-center justify-center mb-5 group-hover:bg-nexora-blue/20 transition-colors duration-500">
                  <pillar.icon className="w-6 h-6 text-nexora-blue" />
                </div>
                <h3 className="text-lg font-semibold text-nexora-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-nexora-text-secondary leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
