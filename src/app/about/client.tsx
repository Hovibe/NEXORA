"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Values } from "@/components/sections/Values";
import { WhyNexora } from "@/components/sections/WhyNexora";
import {
  Code,
  Palette,
  Compass,
  Zap,
} from "lucide-react";

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

export function AboutPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeading
              label="About Nexora"
              title="Built From Curiosity. Driven By Purpose."
              align="left"
            />
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6 md:space-y-8 max-w-3xl">
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
              <p className="text-base md:text-lg text-nexora-text-secondary leading-relaxed">
                Nexora combines technology, design, strategy, and execution into
                practical digital products. We work with startups, businesses,
                creators, organizations, institutions, and individuals — adapting
                our approach to match each project&apos;s unique needs.
              </p>
            </Reveal>

            <Reveal delay={600}>
              <div className="pt-6 md:pt-8 border-t border-nexora-border">
                <p className="text-sm text-nexora-text-dim tracking-wide">
                  Built from Nigeria. Open to the world.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-nexora-dark/50">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionHeading
              label="What We Do"
              title="Four Core Capabilities"
              description="Every project draws from these four pillars, combined in different ways depending on what's needed."
            />
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="group p-6 md:p-8 rounded-2xl border border-nexora-border bg-nexora-charcoal/50 hover:border-nexora-blue/30 transition-all duration-500">
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

      <Values />
      <WhyNexora />

      {/* CTA */}
      <section className="py-24 md:py-32 px-6 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold text-nexora-white mb-4">
              Want to work with us?
            </h2>
            <p className="text-base text-nexora-text-secondary mb-8">
              We&apos;re always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>
            <Button href="/contact" size="lg" showArrow>
              Get in Touch
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
