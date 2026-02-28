import type { Metadata } from "next";
import PricingCalculator from "./PageClient";

export const metadata: Metadata = {
  title: "Pricing Calculator | Togashi Technologies",
  description:
    "Get an instant ballpark estimate for your software project. Choose your service type, project size, and timeline to see estimated costs.",
};

export default function Page() {
  return <PricingCalculator />;
}
