"use client";

import { Reveal } from "@/components/ui/Reveal";

export function TechEcosystem() {
  const items = [
    { label: "IDEA", x: 10, y: 50 },
    { label: "DESIGN", x: 30, y: 30 },
    { label: "CODE", x: 50, y: 50 },
    { label: "PRODUCT", x: 70, y: 30 },
    { label: "IMPACT", x: 90, y: 50 },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-nexora-blue mb-4 block">
              The Nexora Flow
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-nexora-white">
              From Concept to Impact
            </h2>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative h-48 md:h-64 hidden md:block">
            {/* Connection line */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 10 50 C 20 50, 20 30, 30 30 C 40 30, 40 50, 50 50 C 60 50, 60 30, 70 30 C 80 30, 80 50, 90 50"
                fill="none"
                stroke="rgba(37, 99, 235, 0.2)"
                strokeWidth="0.3"
              />
            </svg>

            {/* Nodes */}
            {items.map((item, i) => (
              <div
                key={item.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
              >
                <div className="w-3 h-3 rounded-full bg-nexora-blue/30 border border-nexora-blue/50" />
                <span className="text-[10px] md:text-xs font-medium tracking-wider text-nexora-text-muted whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mobile version */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-4">
            {items.map((item, i) => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-nexora-blue/30 border border-nexora-blue/50" />
                <span className="text-xs font-medium tracking-wider text-nexora-text-muted">
                  {item.label}
                </span>
                {i < items.length - 1 && (
                  <div className="w-[1px] h-4 bg-nexora-blue/20 absolute ml-0.5 mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
