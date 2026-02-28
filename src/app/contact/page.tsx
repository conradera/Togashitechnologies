import type { Metadata } from "next";
import ContactPage from "./PageClient";

export const metadata: Metadata = {
  title: "Contact | Togashi Technologies",
  description:
    "Get in touch with Togashi Technologies. Book a free consultation, request a quote, or discuss your next software project with our team.",
};

export default function Page() {
  return <ContactPage />;
}
