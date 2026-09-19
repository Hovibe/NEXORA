import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export const WHATSAPP_NUMBER = "2349118031298";
export const WHATSAPP_NUMBER_2 = "2348134889035";
export const PHONE_NUMBER = "2349059668863";
export const EMAIL = "eric22000055@gmail.com";

export function getWhatsAppUrl(message?: string): string {
  const msg = message || "Hello Nexora, I would like to discuss a project.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function getWhatsAppUrl2(message?: string): string {
  const msg = message || "Hello Nexora, I would like to discuss a project.";
  return `https://wa.me/${WHATSAPP_NUMBER_2}?text=${encodeURIComponent(msg)}`;
}

export function getPhoneUrl(): string {
  return `tel:+${PHONE_NUMBER}`;
}

export function getEmailUrl(subject?: string): string {
  const sub = subject || "Project Inquiry";
  return `mailto:${EMAIL}?subject=${encodeURIComponent(sub)}`;
}
