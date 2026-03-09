import type { Metadata } from "next";
import PartnersPage from "./PageClient";

export const metadata: Metadata = {
  title: "Partner Ecosystem",
  description:
    "Togashi Technologies' Strategic Partner Ecosystem — integrated specialists across creative, cloud, IoT, legal, financial, and innovation domains, delivering comprehensive enterprise-grade solutions.",
  keywords: [
    "technology partners",
    "strategic partnerships",
    "cloud partners",
    "IoT solutions",
    "enterprise partnerships",
  ],
  openGraph: {
    title: "Partner Ecosystem | Togashi Technologies",
    description:
      "Strategic Partner Ecosystem — integrated specialists across creative, cloud, IoT, legal, financial, and innovation domains.",
    url: "/partners",
  },
  twitter: {
    title: "Partner Ecosystem | Togashi Technologies",
    description:
      "Strategic Partner Ecosystem delivering comprehensive enterprise-grade solutions.",
  },
  alternates: {
    canonical: "/partners",
  },
};

export default function Page() {
  return <PartnersPage />;
}
