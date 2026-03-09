import type { Metadata } from "next";
import ServicesPage from "./PageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom software development, AI/ML solutions, mobile apps, IT consultancy, managed IT services, BPO, and more. Explore our full range of technology services.",
  keywords: [
    "custom software development",
    "AI/ML solutions",
    "mobile app development",
    "IT consultancy",
    "managed IT services",
    "BPO services",
    "web development",
    "cloud migration",
    "digital transformation",
    "systems development",
  ],
  openGraph: {
    title: "Services | Togashi Technologies",
    description:
      "Custom software development, AI/ML solutions, mobile apps, IT consultancy, managed IT services, BPO, and more.",
    url: "/services",
  },
  twitter: {
    title: "Services | Togashi Technologies",
    description:
      "Custom software development, AI/ML solutions, mobile apps, IT consultancy, managed IT services, BPO, and more.",
  },
  alternates: {
    canonical: "/services",
  },
};

export default function Page() {
  return <ServicesPage />;
}
