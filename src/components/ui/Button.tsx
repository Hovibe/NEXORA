"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-lg cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-nexora-blue text-white hover:bg-nexora-blue-light hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] active:scale-[0.98]",
    secondary:
      "bg-nexora-charcoal text-nexora-text-primary border border-nexora-border hover:border-nexora-border-hover hover:bg-nexora-gray active:scale-[0.98]",
    ghost:
      "text-nexora-text-secondary hover:text-nexora-text-primary hover:bg-nexora-charcoal",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowRight className="w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </button>
  );
}
