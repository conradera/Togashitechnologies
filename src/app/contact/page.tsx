import type { Metadata } from "next";
import ContactPage from "./PageClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Togashi Technologies. Book a free consultation, request a quote, or discuss your next software project with our team.",
  keywords: [
    "contact Togashi Technologies",
    "free consultation",
    "software development quote",
    "hire developers Uganda",
    "technology partner",
  ],
  openGraph: {
    title: "Contact | Togashi Technologies",
    description:
      "Book a free consultation, request a quote, or discuss your next software project with our team.",
    url: "/contact",
  },
  twitter: {
    title: "Contact | Togashi Technologies",
    description:
      "Book a free consultation, request a quote, or discuss your next software project with our team.",
  },
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
