import type { Metadata } from "next";
import PortfolioPage from "./PageClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore our portfolio of AI-powered platforms, mobile applications, and enterprise solutions built for clients across financial services, healthcare, logistics, and more.",
  keywords: [
    "software portfolio",
    "AI projects",
    "mobile applications",
    "enterprise solutions",
    "fintech platform",
    "healthcare system",
    "fleet management",
    "case studies",
  ],
  openGraph: {
    title: "Portfolio | Togashi Technologies",
    description:
      "AI-powered platforms, mobile applications, and enterprise solutions built for clients across financial services, healthcare, logistics, and more.",
    url: "/portfolio",
  },
  twitter: {
    title: "Portfolio | Togashi Technologies",
    description:
      "AI-powered platforms, mobile applications, and enterprise solutions across financial services, healthcare, logistics, and more.",
  },
  alternates: {
    canonical: "/portfolio",
  },
};

export default function Page() {
  return <PortfolioPage />;
}
