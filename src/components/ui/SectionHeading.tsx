"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center max-w-3xl mx-auto",
        align === "left" && "text-left max-w-2xl",
        className
      )}
    >
      {label && (
        <span className="inline-block text-xs font-medium tracking-[0.2em] uppercase text-nexora-blue mb-4 md:mb-6">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-nexora-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 md:mt-6 text-base md:text-lg text-nexora-text-secondary leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
