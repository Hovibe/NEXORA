"use client";

import Link from "next/link";
import { navLinks, serviceLinks } from "@/data/navigation";
import { getWhatsAppUrl, getPhoneUrl, getEmailUrl, EMAIL } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-nexora-border bg-nexora-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-nexora-white tracking-tight">
                NEXORA
              </span>
            </Link>
            <p className="mt-4 text-xs tracking-[0.15em] uppercase text-nexora-text-dim">
              Where Ideas Connect With What&apos;s Next.
            </p>
            <p className="mt-4 text-sm text-nexora-text-secondary leading-relaxed max-w-xs">
              Digital products, websites, applications, brands, and technical
              solutions — built with purpose.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-nexora-text-secondary hover:text-nexora-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-nexora-text-secondary hover:text-nexora-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-medium tracking-wider uppercase text-nexora-text-dim mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-nexora-text-secondary hover:text-nexora-white transition-colors duration-300"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={getPhoneUrl()}
                  className="text-sm text-nexora-text-secondary hover:text-nexora-white transition-colors duration-300"
                >
                  Phone
                </a>
              </li>
              <li>
                <a
                  href={getEmailUrl()}
                  className="text-sm text-nexora-text-secondary hover:text-nexora-white transition-colors duration-300"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-nexora-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-nexora-text-dim">
            &copy; {new Date().getFullYear()} Nexora. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-nexora-text-dim hover:text-nexora-text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-nexora-text-dim hover:text-nexora-text-secondary transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
