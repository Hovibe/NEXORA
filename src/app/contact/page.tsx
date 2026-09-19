import type { Metadata } from "next";
import { ContactPageClient } from "./client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Nexora. Tell us about your project and let us turn your idea into something real.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
