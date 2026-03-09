import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.togashitechnologies.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Togashi Technologies | AI/ML, Software & Digital Transformation",
    template: "%s | Togashi Technologies",
  },
  description:
    "Forward-thinking technology company specializing in AI/ML solutions, custom software development, mobile applications, BPO, IT consultancy, and digital transformation for organizations across Africa and globally.",
  keywords: [
    "AI/ML solutions",
    "custom software development",
    "mobile app development",
    "IT consultancy",
    "digital transformation",
    "managed IT services",
    "BPO services",
    "enterprise software",
    "web development",
    "systems development",
    "cloud migration",
    "cybersecurity",
    "IT training",
    "CTO as a service",
    "Uganda technology company",
    "Africa software development",
    "Togashi Technologies",
  ],
  authors: [{ name: "Togashi Technologies Co. Ltd" }],
  creator: "Togashi Technologies Co. Ltd",
  publisher: "Togashi Technologies Co. Ltd",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Togashi Technologies",
    title: "Togashi Technologies | AI/ML, Software & Digital Transformation",
    description:
      "We architect AI-powered solutions, custom enterprise software, and intelligent digital systems that deliver measurable ROI for organizations across Africa and globally.",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Togashi Technologies - Engineering Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Togashi Technologies | AI/ML, Software & Digital Transformation",
    description:
      "We architect AI-powered solutions, custom enterprise software, and intelligent digital systems that deliver measurable ROI.",
    images: ["/logo.jpeg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Togashi Technologies Co. Ltd",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpeg`,
    description:
      "Forward-thinking technology company specializing in AI/ML solutions, custom software development, mobile applications, BPO, IT consultancy, and digital transformation.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+256-780-650-952",
      contactType: "sales",
      email: "togashitechnologies@gmail.com",
      availableLanguage: "English",
    },
    sameAs: [
      "https://linkedin.com/company/togashi-technologies",
      "https://wa.me/256780650952",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "UG",
    },
    areaServed: ["Africa", "Global"],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Custom Software Development",
      "Mobile Application Development",
      "IT Consultancy",
      "Digital Transformation",
      "Managed IT Services",
      "Business Process Outsourcing",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} noise-bg font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
