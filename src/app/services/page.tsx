import type { Metadata } from "next";
import ServicesPage from "./PageClient";

export const metadata: Metadata = {
  title: "Services | Togashi Technologies",
  description:
    "Custom software development, SaaS platforms, mobile apps, IT consultancy, managed IT services, BPO, and more. Explore our full range of technology services.",
};

export default function Page() {
  return <ServicesPage />;
}
