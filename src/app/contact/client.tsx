"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  getWhatsAppUrl,
  getWhatsAppUrl2,
  getPhoneUrl,
  getEmailUrl,
  WHATSAPP_NUMBER,
  WHATSAPP_NUMBER_2,
  PHONE_NUMBER,
  EMAIL,
} from "@/lib/utils";
import { MessageCircle, Phone, Mail } from "lucide-react";

export function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-20 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <SectionHeading
              label="Contact"
              title="Let's Build Something"
              description="Have an idea, project, business problem, or digital product in mind? Tell us what you are working on."
              align="left"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-24 md:pb-32 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact options */}
            <div className="space-y-6">
              <Reveal>
                <h3 className="text-lg font-semibold text-nexora-white mb-6">
                  Reach Us Directly
                </h3>
              </Reveal>

              <Reveal delay={100}>
                <a
                  href={getWhatsAppUrl(
                    "Hello Nexora, I would like to discuss a project."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-nexora-border bg-nexora-charcoal/50 hover:border-green-500/30 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 group-hover:bg-green-500/20 transition-colors duration-500">
                    <MessageCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-nexora-white mb-1">
                      WhatsApp
                    </h4>
                    <p className="text-sm text-nexora-text-dim">
                      {WHATSAPP_NUMBER.replace(
                        /(\d{3})(\d{3})(\d{4})/,
                        "+$1 $2 $3"
                      )}
                    </p>
                    <p className="text-sm text-nexora-text-dim">
                      {WHATSAPP_NUMBER_2.replace(
                        /(\d{3})(\d{3})(\d{4})/,
                        "+$1 $2 $3"
                      )}
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={200}>
                <a
                  href={getPhoneUrl()}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-nexora-border bg-nexora-charcoal/50 hover:border-nexora-blue/30 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-nexora-blue/10 flex items-center justify-center shrink-0 group-hover:bg-nexora-blue/20 transition-colors duration-500">
                    <Phone className="w-5 h-5 text-nexora-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-nexora-white mb-1">
                      Phone
                    </h4>
                    <p className="text-sm text-nexora-text-dim">
                      +234 905 966 8863
                    </p>
                  </div>
                </a>
              </Reveal>

              <Reveal delay={300}>
                <a
                  href={getEmailUrl()}
                  className="group flex items-start gap-4 p-5 rounded-2xl border border-nexora-border bg-nexora-charcoal/50 hover:border-nexora-blue/30 transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-xl bg-nexora-blue/10 flex items-center justify-center shrink-0 group-hover:bg-nexora-blue/20 transition-colors duration-500">
                    <Mail className="w-5 h-5 text-nexora-blue" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-nexora-white mb-1">
                      Email
                    </h4>
                    <p className="text-sm text-nexora-text-dim break-all">
                      {EMAIL}
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Reveal delay={100}>
                <div className="p-6 md:p-8 rounded-2xl border border-nexora-border bg-nexora-charcoal/30">
                  <h3 className="text-lg font-semibold text-nexora-white mb-6">
                    Send Us a Message
                  </h3>
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
