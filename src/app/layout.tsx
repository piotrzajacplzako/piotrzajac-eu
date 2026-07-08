import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  axes: ["opsz"],
});

const SITE_TITLE = "Piotr Zając — HealthTech Founder, Operator & Venture Builder";
const SITE_DESCRIPTION =
  "Exited founder of Untitled Kingdom, HealthTech Director at Monterail. 15+ years and 75+ digital health products shipped — now building ventures in preventive medicine and longevity.";

export const metadata: Metadata = {
  metadataBase: new URL("https://piotrzajac.eu"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "Piotr Zając",
    "HealthTech",
    "digital health",
    "Untitled Kingdom",
    "Monterail",
    "preventive medicine",
    "longevity",
    "founder",
  ],
  authors: [{ name: "Piotr Zając", url: "https://piotrzajac.eu" }],
  creator: "Piotr Zając",
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://piotrzajac.eu",
    siteName: "Piotr Zając",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Piotr Zając",
              url: "https://piotrzajac.eu",
              jobTitle: "HealthTech Director",
              description: SITE_DESCRIPTION,
              worksFor: {
                "@type": "Organization",
                name: "Monterail",
              },
              memberOf: {
                "@type": "Organization",
                name: "Entrepreneurs' Organization",
              },
              knowsAbout: [
                "HealthTech",
                "Digital health product development",
                "FDA and MDR compliance",
                "Preventive medicine",
                "Longevity",
                "Venture building",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kraków",
                addressCountry: "PL",
              },
              sameAs: ["https://linkedin.com/in/zajacp"],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-text-primary">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
