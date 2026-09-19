"use client";

import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-8">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl md:text-8xl font-bold text-nexora-white mb-4">
          404
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-nexora-white mb-4">
          This page went somewhere else.
        </p>
        <p className="text-sm text-nexora-text-secondary mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button href="/" size="lg" showArrow>
          Back to Nexora
        </Button>
      </div>
    </section>
  );
}
