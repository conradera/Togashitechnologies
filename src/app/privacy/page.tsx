import type { Metadata } from "next";
import PrivacyPage from "./PageClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Togashi Technologies",
  description:
    "How Togashi Technologies collects, uses, and protects your personal data. Read our full privacy policy.",
};

export default function Page() {
  return <PrivacyPage />;
}
