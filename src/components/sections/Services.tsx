"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";
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

export function Services() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-nexora-dark/50">
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <SectionHeading
            label="What We Build"
            title="Services Built Around Your Needs"
            description="Every project is different. We offer a range of capabilities designed to cover the full journey from idea to product."
          />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            const isHovered = hoveredId === service.id;

            return (
              <Reveal key={service.id} delay={i * 50}>
                <div
                  className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-default ${
                    isHovered
                      ? "border-nexora-blue/40 bg-nexora-charcoal shadow-[0_0_40px_rgba(37,99,235,0.1)]"
                      : "border-nexora-border bg-nexora-charcoal/30 hover:border-nexora-border-hover"
                  }`}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-500 shrink-0 ${
                        isHovered
                          ? "bg-nexora-blue/20"
                          : "bg-nexora-blue/5 group-hover:bg-nexora-blue/10"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors duration-500 ${
                          isHovered ? "text-nexora-blue" : "text-nexora-text-muted"
                        }`}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-medium tracking-widest text-nexora-text-dim uppercase">
                        {service.number}
                      </span>
                      <h3 className="text-base md:text-lg font-semibold text-nexora-white leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p
                    className={`text-sm leading-relaxed transition-colors duration-500 ${
                      isHovered
                        ? "text-nexora-text-secondary"
                        : "text-nexora-text-dim"
                    }`}
                  >
                    {service.shortDescription}
                  </p>

                  <div
                    className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-nexora-blue/50 to-transparent transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
