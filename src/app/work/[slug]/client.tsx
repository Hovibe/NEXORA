"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm text-nexora-text-muted hover:text-nexora-white transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-nexora-blue/10 text-nexora-blue border border-nexora-blue/10"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-nexora-white mb-4">
              {project.name}
            </h1>
            <p className="text-lg md:text-xl text-nexora-text-secondary">
              {project.shortDescription}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Visual */}
      <section className="px-6 md:px-8 pb-16 md:pb-20">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="relative h-64 md:h-96 rounded-2xl border border-nexora-border bg-gradient-to-br from-nexora-charcoal via-nexora-dark to-nexora-black overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full p-12 md:p-16">
                  <div className="absolute inset-12 md:inset-16 border border-nexora-border/50 rounded-xl" />
                  <div className="absolute inset-16 md:inset-20 border border-nexora-blue/10 rounded-lg" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl md:text-8xl font-bold text-nexora-white/5 tracking-wider">
                      {project.name}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Details */}
      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <Reveal>
                <div>
                  <h2 className="text-xl font-semibold text-nexora-white mb-3">
                    Overview
                  </h2>
                  <p className="text-base text-nexora-text-secondary leading-relaxed">
                    {project.overview}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div>
                  <h2 className="text-xl font-semibold text-nexora-white mb-3">
                    Problem
                  </h2>
                  <p className="text-base text-nexora-text-secondary leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div>
                  <h2 className="text-xl font-semibold text-nexora-white mb-3">
                    Solution
                  </h2>
                  <p className="text-base text-nexora-text-secondary leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div>
                  <h2 className="text-xl font-semibold text-nexora-white mb-3">
                    Design Direction
                  </h2>
                  <p className="text-base text-nexora-text-secondary leading-relaxed">
                    {project.designDirection}
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <Reveal delay={100}>
                <div className="p-6 rounded-2xl border border-nexora-border bg-nexora-charcoal/50">
                  <h3 className="text-sm font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
                    Category
                  </h3>
                  <p className="text-base text-nexora-white">{project.category}</p>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="p-6 rounded-2xl border border-nexora-border bg-nexora-charcoal/50">
                  <h3 className="text-sm font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-nexora-blue/10 text-nexora-blue border border-nexora-blue/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="p-6 rounded-2xl border border-nexora-border bg-nexora-charcoal/50">
                  <h3 className="text-sm font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
                    Year
                  </h3>
                  <p className="text-base text-nexora-white">{project.year}</p>
                </div>
              </Reveal>

              <Reveal delay={400}>
                <div className="p-6 rounded-2xl border border-nexora-border bg-nexora-charcoal/50">
                  <h3 className="text-sm font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-nexora-text-secondary"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>

          {/* CTA */}
          <Reveal delay={200}>
            <div className="mt-16 md:mt-20 pt-12 border-t border-nexora-border flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold text-nexora-white mb-2">
                  Have a similar project?
                </h2>
                <p className="text-sm text-nexora-text-secondary">
                  Let&apos;s discuss how we can build something great together.
                </p>
              </div>
              <Button href="/contact" size="lg" showArrow>
                Start a Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
