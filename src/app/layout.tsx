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

export const metadata: Metadata = {
  metadataBase: new URL("https://piotrzajac.eu"),
  title: "Piotr Zając — Founder. Builder. HealthTech Leader.",
  description:
    "I build and scale digital health products that work — clinically, technically, and commercially. 15+ years, 75+ products, one successful exit.",
  openGraph: {
    title: "Piotr Zając — Founder. Builder. HealthTech Leader.",
    description:
      "I build and scale digital health products that work — clinically, technically, and commercially. 15+ years, 75+ products, one successful exit.",
    url: "https://piotrzajac.eu",
    siteName: "Piotr Zając",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Piotr Zając — Founder. Builder. HealthTech Leader.",
    description:
      "I build and scale digital health products that work — clinically, technically, and commercially.",
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
              jobTitle: "Founder & HealthTech Leader",
              worksFor: {
                "@type": "Organization",
                name: "Monterail",
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
