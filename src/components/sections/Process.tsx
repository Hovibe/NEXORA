"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand the idea, problem, audience, and objective.",
  },
  {
    number: "02",
    title: "Define",
    description: "Turn the idea into a clear product or technical direction.",
  },
  {
    number: "03",
    title: "Design",
    description: "Create the visual and user experience direction.",
  },
  {
    number: "04",
    title: "Build",
    description: "Develop the actual product using appropriate technologies.",
  },
  {
    number: "05",
    title: "Refine",
    description: "Test, improve, fix, optimize, and polish.",
  },
  {
    number: "06",
    title: "Launch",
    description:
      "Deliver the final product and continue supporting it where needed.",
  },
];

export function Process() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            label="How We Work"
            title="How We Turn Ideas Into Reality"
            description="A clear, proven process that takes your project from concept to completion."
          />
        </Reveal>

        <div className="relative">
          {/* Connecting line - desktop */}
          <div
            className="hidden lg:block absolute top-[40px] left-[8.33%] right-[8.33%] h-[1px] bg-gradient-to-r from-nexora-border via-nexora-blue/20 to-nexora-border"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <div className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full border border-nexora-border bg-nexora-black flex items-center justify-center mb-5 group-hover:border-nexora-blue/40 group-hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-500">
                    <span className="text-sm font-semibold text-nexora-blue">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-nexora-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs md:text-sm text-nexora-text-dim leading-relaxed max-w-[200px]">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
