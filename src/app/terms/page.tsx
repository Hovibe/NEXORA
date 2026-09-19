import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Nexora terms of service and engagement conditions.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <Reveal>
          <h1 className="text-3xl md:text-4xl font-bold text-nexora-white mb-8">
            Terms of Service
          </h1>
          <div className="space-y-6 text-sm md:text-base text-nexora-text-secondary leading-relaxed">
            <p>Last updated: {new Date().getFullYear()}</p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Overview
            </h2>
            <p>
              Nexora provides digital solutions including but not limited to web
              development, mobile app development, design, branding, and
              technical consulting. These terms govern your use of our services
              and website.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Project Engagement
            </h2>
            <p>
              All projects are subject to a separate agreement or scope of work
              that defines the specific terms, deliverables, timelines, and
              pricing for that engagement. These general terms do not override
              any specific project agreements.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Intellectual Property
            </h2>
            <p>
              Ownership of deliverables is defined in each project agreement.
              Unless otherwise specified, clients receive full rights to the
              final deliverables upon complete payment.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Payment
            </h2>
            <p>
              Payment terms are defined in each project agreement. Work typically
              begins after an agreed-upon deposit. Final deliverables may be
              withheld until full payment is received.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Limitation of Liability
            </h2>
            <p>
              Nexora is not liable for any indirect, incidental, or
              consequential damages arising from the use of our services or
              deliverables. Our total liability is limited to the amount paid
              for the specific service in question.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Website Content
            </h2>
            <p>
              The content on this website is provided for informational purposes.
              We make reasonable efforts to ensure accuracy but do not warrant
              that all information is complete or error-free.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Changes to Terms
            </h2>
            <p>
              We reserve the right to update these terms at any time. Changes
              will be reflected on this page. Continued use of our services after
              changes constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-lg font-semibold text-nexora-white pt-4">
              Contact
            </h2>
            <p>
              For questions about these terms, please contact us at
              eric22000055@gmail.com.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
