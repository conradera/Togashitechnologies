import type { Metadata } from "next";
import TermsPage from "./PageClient";

export const metadata: Metadata = {
  title: "Terms of Service | Togashi Technologies",
  description:
    "Terms of Service for Togashi Technologies website and professional services, including intellectual property, confidentiality, and payment terms.",
};

export default function Page() {
  return <TermsPage />;
}
