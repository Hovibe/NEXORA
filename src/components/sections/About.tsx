"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <SectionHeading
            label="About Nexora"
            title="Built From Curiosity. Driven By Purpose."
          />
        </Reveal>

        <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
          <Reveal delay={100}>
            <p className="text-base md:text-lg text-nexora-text-secondary leading-relaxed">
              Nexora began with a simple belief: a good idea should not have to
              remain an idea simply because the resources, tools, or technical
              knowledge seem out of reach.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-base md:text-lg text-nexora-text-secondary leading-relaxed">
              What started with curiosity and a willingness to learn has grown
              into a digital solutions studio focused on building things that are
              useful, beautiful, and real.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-base md:text-lg text-nexora-text-secondary leading-relaxed">
              We don&apos;t believe great technology has to begin with a massive
              team or massive budget. It begins with understanding the problem,
              learning what is necessary, and being willing to build.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <p className="text-base md:text-lg text-nexora-text-secondary leading-relaxed">
              Every project we take on gets the same approach: understand
              clearly, design thoughtfully, build carefully, and deliver
              something that actually works.
            </p>
          </Reveal>

          <Reveal delay={500}>
            <div className="pt-6 md:pt-8 border-t border-nexora-border">
              <p className="text-sm text-nexora-text-dim tracking-wide">
                Built from Nigeria. Open to the world.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
