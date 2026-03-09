import type { Metadata } from "next";
import AboutPage from "./PageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Togashi Technologies — our mission, values, leadership, and the story behind building mission-critical systems for Africa's fastest-growing organizations.",
  keywords: [
    "about Togashi Technologies",
    "technology company Uganda",
    "software development Africa",
    "AI company Africa",
    "engineering excellence",
    "digital transformation partner",
  ],
  openGraph: {
    title: "About | Togashi Technologies",
    description:
      "Learn about Togashi Technologies — our mission, values, leadership, and the story behind building mission-critical systems.",
    url: "/about",
  },
  twitter: {
    title: "About | Togashi Technologies",
    description:
      "Our mission, values, leadership, and the story behind building mission-critical systems for Africa's fastest-growing organizations.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPage />;
}
