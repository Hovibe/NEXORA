"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Rocket,
  Building2,
  Camera,
  Users,
  GraduationCap,
  User,
} from "lucide-react";

const clientTypes = [
  { icon: Rocket, label: "Startups" },
  { icon: Building2, label: "Businesses" },
  { icon: Camera, label: "Creators" },
  { icon: Users, label: "Organizations" },
  { icon: GraduationCap, label: "Institutions" },
  { icon: User, label: "Individuals" },
];

export function ClientTypes() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-nexora-dark/50">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading
            label="Who We Work With"
            title="Built for Different Kinds of Ambition"
            description="We adapt our approach to match the scale, goals, and reality of each project."
          />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {clientTypes.map((client, i) => (
            <Reveal key={client.label} delay={i * 80}>
              <div className="group flex flex-col items-center gap-4 p-6 md:p-8 rounded-2xl border border-nexora-border bg-nexora-charcoal/30 hover:border-nexora-blue/20 hover:bg-nexora-charcoal/50 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-nexora-blue/5 flex items-center justify-center group-hover:bg-nexora-blue/10 transition-colors duration-500">
                  <client.icon className="w-6 h-6 text-nexora-text-muted group-hover:text-nexora-blue transition-colors duration-500" />
                </div>
                <span className="text-sm font-medium text-nexora-text-secondary group-hover:text-nexora-white transition-colors duration-300 text-center">
                  {client.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
