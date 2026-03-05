import type { Metadata } from "next";
import PartnersPage from "./PageClient";

export const metadata: Metadata = {
  title: "Partner Ecosystem | Togashi Technologies",
  description:
    "Togashi Technologies' Strategic Partner Ecosystem — integrated specialists across creative, cloud, IoT, legal, financial, and innovation domains, delivering comprehensive enterprise-grade solutions.",
};

export default function Page() {
  return <PartnersPage />;
}
