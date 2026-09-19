"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/contact";
import { Button } from "@/components/ui/Button";
import { CheckCircle, AlertCircle } from "lucide-react";

const projectTypes = [
  "Mobile App",
  "Website",
  "Web Application",
  "UI/UX Design",
  "Graphic Design",
  "Branding",
  "E-commerce",
  "Software",
  "Technical Consulting",
  "Other",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+",
  "Not sure yet",
];

const inputStyles =
  "w-full px-4 py-3 bg-nexora-charcoal border border-nexora-border rounded-lg text-sm text-nexora-text-primary placeholder:text-nexora-text-dim focus:outline-none focus:border-nexora-blue/50 focus:ring-1 focus:ring-nexora-blue/20 transition-all duration-300";

const labelStyles = "block text-sm font-medium text-nexora-text-secondary mb-2";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContactForm, {
    success: false,
    error: false,
    message: "",
  } satisfies ContactFormState);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Name <span className="text-nexora-blue">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputStyles}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email <span className="text-nexora-blue">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputStyles}
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputStyles}
            placeholder="+234 xxx xxx xxxx"
          />
        </div>
        <div>
          <label htmlFor="company" className={labelStyles}>
            Company / Organization
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className={inputStyles}
            placeholder="Optional"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className={labelStyles}>
            Project Type <span className="text-nexora-blue">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            className={inputStyles}
            defaultValue=""
          >
            <option value="" disabled>
              Select project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className={labelStyles}>
            Budget Range
          </label>
          <select id="budget" name="budget" className={inputStyles} defaultValue="">
            <option value="" disabled>
              Select budget range
            </option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelStyles}>
          Project Description <span className="text-nexora-blue">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          className={`${inputStyles} resize-none`}
          placeholder="Tell us about your project, goals, and any specific requirements..."
        />
      </div>

      <div>
        <label className={labelStyles}>Preferred Contact Method</label>
        <div className="flex flex-wrap gap-4">
          {["Email", "WhatsApp", "Phone"].map((method) => (
            <label
              key={method}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="preferredContact"
                value={method}
                defaultChecked={method === "Email"}
                className="w-4 h-4 accent-nexora-blue"
              />
              <span className="text-sm text-nexora-text-secondary">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {state.message && (
        <div
          className={`flex items-center gap-3 p-4 rounded-lg ${
            state.success
              ? "bg-green-500/10 border border-green-500/20"
              : "bg-red-500/10 border border-red-500/20"
          }`}
        >
          {state.success ? (
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
          )}
          <p
            className={`text-sm ${
              state.success ? "text-green-400" : "text-red-400"
            }`}
          >
            {state.message}
          </p>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        showArrow
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Project Inquiry"}
      </Button>
    </form>
  );
}
