export function getSEOMetadata({
  title,
  description,
  path,
  image,
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
}) {
  const siteTitle = "Nexora — Where Ideas Connect With What's Next.";
  const siteDescription =
    "Nexora builds mobile apps, websites, web applications, digital products, brands, and technical solutions. From idea to digital reality.";
  const baseUrl = "https://nexora.dev";

  const fullTitle = title ? `${title} | Nexora` : siteTitle;
  const metaDescription = description || siteDescription;
  const url = path ? `${baseUrl}${path}` : baseUrl;
  const ogImage = image || `${baseUrl}/og-image.png`;

  return {
    title: fullTitle,
    description: metaDescription,
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url,
      siteName: "Nexora",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Nexora",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}
