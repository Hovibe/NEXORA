"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CallToAction() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nexora-blue/5 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        aria-hidden="true"
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37, 99, 235, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-nexora-white mb-4 md:mb-6">
            Have an idea?
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="text-lg md:text-xl lg:text-2xl text-nexora-text-secondary mb-10 md:mb-14">
            Let&apos;s turn it into something real.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" size="lg" showArrow>
              Start a Project
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Talk to Nexora
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
