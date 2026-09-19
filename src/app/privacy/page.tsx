import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Nexora privacy policy and data handling practices.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold text-nexora-white mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-sm md:text-base text-nexora-text-secondary leading-relaxed">
            <p>Last updated: {new Date().getFullYear()}</p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Information We Collect
            </h2>
            <p>
              When you contact us through our website forms, we collect the
              information you provide, including your name, email address, phone
              number, and any details about your project or inquiry.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide to respond to your inquiries,
              discuss potential projects, and provide the services you request.
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Data Security
            </h2>
            <p>
              We take reasonable measures to protect the information you share
              with us. However, no method of transmission over the Internet is
              100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Third-Party Services
            </h2>
            <p>
              Our website may use third-party services for analytics or form
              handling. These services may collect information as governed by
              their own privacy policies.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Cookies
            </h2>
            <p>
              Our website may use essential cookies to ensure proper
              functionality. We do not use tracking cookies for advertising
              purposes.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be reflected on this page with an updated date.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Contact
            </h2>
            <p>
              If you have questions about this privacy policy, please contact us
              at eric22000055@gmail.com.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
