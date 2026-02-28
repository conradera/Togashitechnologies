import type { Metadata } from "next";
import AboutPage from "./PageClient";

export const metadata: Metadata = {
  title: "About | Togashi Technologies",
  description:
    "Learn about Togashi Technologies — our mission, values, leadership, and the story behind building mission-critical systems for Africa's fastest-growing organizations.",
};

export default function Page() {
  return <AboutPage />;
}
