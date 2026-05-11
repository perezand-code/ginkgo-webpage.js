import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ginkgopressurewashing.com"),
  title: {
    default: "Ginkgo Pressure Washing | Premium Exterior Cleaning",
    template: "%s | Ginkgo Pressure Washing"
  },
  description:
    "Professional residential and commercial pressure washing in Fort Wayne and Bloomington. Fully insured, registered LLC, and ready for recurring property maintenance.",
  keywords: [
    "pressure washing Fort Wayne",
    "pressure washing Bloomington",
    "commercial pressure washing",
    "house washing",
    "concrete cleaning",
    "Ginkgo Pressure Washing"
  ],
  openGraph: {
    title: "Ginkgo Pressure Washing",
    description:
      "Premium exterior cleaning for homes, storefronts, apartments, HOAs, and commercial properties.",
    url: "https://ginkgopressurewashing.com",
    siteName: "Ginkgo Pressure Washing",
    images: [
      {
        url: "/images/heroboardfinal.png",
        width: 1200,
        height: 630,
        alt: "Ginkgo Pressure Washing exterior cleaning results"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "https://ginkgopressurewashing.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
