"use client";

import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export function WorkPageClient({ projects }: { projects: Project[] }) {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeading
              label="Our Work"
              title="Built With Purpose"
              description="Real projects built to solve real problems. Every project represents a unique challenge met with thoughtful design and solid engineering."
              align="left"
            />
          </Reveal>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {projects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 150}>
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative rounded-2xl border border-nexora-border bg-nexora-charcoal/50 overflow-hidden hover:border-nexora-blue/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(37,99,235,0.08)]">
                    {/* Visual */}
                    <div className="relative h-64 md:h-80 bg-gradient-to-br from-nexora-charcoal via-nexora-dark to-nexora-black overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full p-8 md:p-12">
                          <div className="absolute inset-8 md:inset-12 border border-nexora-border/50 rounded-xl" />
                          <div className="absolute inset-10 md:inset-14 border border-nexora-blue/10 rounded-lg" />
                          <div className="absolute top-12 md:top-16 left-12 md:left-16 w-16 md:w-24 h-2 md:h-3 bg-nexora-blue/20 rounded" />
                          <div className="absolute top-16 md:top-22 left-12 md:left-16 w-24 md:w-36 h-1.5 md:h-2 bg-nexora-muted rounded" />
                          <div className="absolute bottom-12 md:bottom-16 right-12 md:right-16 w-20 md:w-28 h-20 md:h-28 rounded-xl bg-nexora-blue/10 border border-nexora-blue/20" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-3xl md:text-5xl font-bold text-nexora-white/10 tracking-wider">
                              {project.name}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-nexora-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Info */}
                    <div className="p-6 md:p-8">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full bg-nexora-blue/10 text-nexora-blue border border-nexora-blue/10"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-nexora-white group-hover:text-nexora-blue-light transition-colors duration-300">
                            {project.name}
                          </h3>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-nexora-text-dim group-hover:text-nexora-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-1" />
                      </div>
                      <p className="text-sm text-nexora-text-secondary leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
