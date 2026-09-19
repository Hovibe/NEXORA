import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexora.dev"),
  title: {
    default: "Nexora — Where Ideas Connect With What's Next.",
    template: "%s | Nexora",
  },
  description:
    "Nexora builds mobile apps, websites, web applications, digital products, brands, and technical solutions. From idea to digital reality.",
  keywords: [
    "web development",
    "mobile app development",
    "UI/UX design",
    "branding",
    "graphic design",
    "software development",
    "digital solutions",
    "e-commerce",
    "API development",
    "technical consulting",
  ],
  authors: [{ name: "Nexora" }],
  creator: "Nexora",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nexora.dev",
    siteName: "Nexora",
    title: "Nexora — Where Ideas Connect With What's Next.",
    description:
      "Nexora builds mobile apps, websites, web applications, digital products, brands, and technical solutions. From idea to digital reality.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexora",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexora — Where Ideas Connect With What's Next.",
    description:
      "Nexora builds mobile apps, websites, web applications, digital products, brands, and technical solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
