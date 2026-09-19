"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/data/services";
import {
  Smartphone,
  Globe,
  Palette,
  PenTool,
  Diamond,
  Code,
  ShoppingCart,
  Database,
  Lightbulb,
  Brain,
  Wrench,
  Layers,
  Check,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Smartphone,
  Globe,
  Palette,
  PenTool,
  Diamond,
  Code,
  ShoppingCart,
  Database,
  Lightbulb,
  Brain,
  Wrench,
  Layers,
};

export function ServicesPageClient({ services }: { services: Service[] }) {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeading
              label="Our Services"
              title="What We Build"
              description="Comprehensive digital solutions covering the full journey from concept to product. Every service is tailored to the specific needs of each project."
              align="left"
            />
          </Reveal>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-4">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Code;
              const isActive = activeService === service.id;

              return (
                <Reveal key={service.id} delay={i * 50}>
                  <div
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                      isActive
                        ? "border-nexora-blue/30 bg-nexora-charcoal"
                        : "border-nexora-border bg-nexora-charcoal/30 hover:border-nexora-border-hover"
                    }`}
                  >
                    <button
                      onClick={() =>
                        setActiveService(isActive ? null : service.id)
                      }
                      className="w-full flex items-center gap-4 md:gap-6 p-6 md:p-8 text-left cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-500 ${
                          isActive
                            ? "bg-nexora-blue/20"
                            : "bg-nexora-blue/5"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 transition-colors duration-500 ${
                            isActive
                              ? "text-nexora-blue"
                              : "text-nexora-text-muted"
                          }`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-medium tracking-widest text-nexora-text-dim">
                            {service.number}
                          </span>
                          <h3 className="text-lg md:text-xl font-semibold text-nexora-white">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-sm text-nexora-text-dim mt-1 hidden md:block">
                          {service.shortDescription}
                        </p>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                          isActive
                            ? "border-nexora-blue/40 rotate-45"
                            : "border-nexora-border"
                        }`}
                      >
                        <span className="text-nexora-text-muted text-lg leading-none">
                          +
                        </span>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                        <div className="border-t border-nexora-border pt-6">
                          <p className="text-sm md:text-base text-nexora-text-secondary leading-relaxed mb-6">
                            {service.fullDescription}
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {service.features.map((feature) => (
                              <div
                                key={feature}
                                className="flex items-center gap-2"
                              >
                                <Check className="w-4 h-4 text-nexora-blue shrink-0" />
                                <span className="text-sm text-nexora-text-secondary">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6">
                            <Button
                              href={`/contact?project=${encodeURIComponent(service.title)}`}
                              size="sm"
                              showArrow
                            >
                              Discuss This Service
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-nexora-dark/50">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold text-nexora-white mb-4">
              Not sure what you need?
            </h2>
            <p className="text-base text-nexora-text-secondary mb-8">
              Tell us about your project or problem. We&apos;ll help you figure
              out the right approach.
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
