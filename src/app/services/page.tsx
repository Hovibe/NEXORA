import type { Metadata } from "next";
import { services } from "@/data/services";
import { ServicesPageClient } from "./client";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Nexora offers app development, web development, UI/UX design, graphic design, branding, software solutions, e-commerce, API development, technical consulting, AI solutions, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}
