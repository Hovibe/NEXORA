import type { Metadata } from "next";
import { AboutPageClient } from "./client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nexora was built from curiosity, persistence, and the desire to build useful digital products. Learn about our story and approach.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
