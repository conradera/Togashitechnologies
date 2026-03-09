import type { Metadata } from "next";
import TermsPage from "./PageClient";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for Togashi Technologies website and professional services, including intellectual property, confidentiality, and payment terms.",
  openGraph: {
    title: "Terms of Service | Togashi Technologies",
    description:
      "Terms of Service for Togashi Technologies website and professional services.",
    url: "/terms",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function Page() {
  return <TermsPage />;
}
