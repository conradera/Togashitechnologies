import type { Metadata } from "next";
import PortfolioPage from "./PageClient";

export const metadata: Metadata = {
  title: "Portfolio | Togashi Technologies",
  description:
    "Explore our portfolio of SaaS platforms, mobile applications, and enterprise solutions built for clients across financial services, healthcare, logistics, and more.",
};

export default function Page() {
  return <PortfolioPage />;
}
