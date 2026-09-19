"use client";

import { getWhatsAppUrl } from "@/lib/utils";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppUrl("Hello Nexora, I would like to discuss a project.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] hover:bg-[#20bd5a] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-white" />
      <span className="absolute right-full mr-3 px-3 py-1.5 bg-nexora-charcoal text-nexora-text-primary text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-nexora-border pointer-events-none">
        Chat on WhatsApp
      </span>
    </a>
  );
}
