"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email address, company name, and message when you fill out our contact form or request a consultation. We also collect standard analytics data (page views, device type, browser) to improve our website experience.",
  },
  {
    title: "How We Use Your Information",
    content:
      "We use the information we collect to respond to your inquiries, provide our services, send project updates, improve our website, and comply with legal obligations. We do not sell or rent your personal data to third parties.",
  },
  {
    title: "Data Protection",
    content:
      "We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. All data transmission is encrypted using industry-standard TLS/SSL protocols.",
  },
  {
    title: "Cookies",
    content:
      "Our website uses essential cookies to ensure proper functionality. We may also use analytics cookies to understand how visitors interact with our site. You can control cookie preferences through your browser settings.",
  },
  {
    title: "Third-Party Services",
    content:
      "We may use third-party services for analytics, hosting, and communication. These providers are bound by their own privacy policies and we ensure they meet adequate data protection standards.",
  },
  {
    title: "Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data. You may also withdraw consent for data processing at any time. To exercise these rights, contact us at hello@togashi.tech.",
  },
  {
    title: "Data Retention",
    content:
      "We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Project-related data is retained for the duration of our engagement and a reasonable period thereafter.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="relative bg-white pt-32 pb-20">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-neutral-500">
              Effective date: January 1, 2024 &middot; Last updated: January 1, 2025
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm leading-relaxed text-neutral-600"
          >
            Togashi Technologies Co. Ltd. (&ldquo;we&rdquo;, &ldquo;our&rdquo;,
            &ldquo;us&rdquo;) is committed to protecting your privacy. This
            policy explains how we collect, use, and safeguard your personal
            information when you visit our website or engage with our services.
          </motion.p>

          <div className="mt-12 space-y-10">
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <h2 className="text-lg font-semibold text-neutral-900">
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {s.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-16 rounded-2xl border border-neutral-200 bg-neutral-50 p-8"
          >
            <h2 className="text-lg font-semibold text-neutral-900">
              Contact Us
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              If you have questions about this Privacy Policy or wish to exercise
              your data rights, please contact us at{" "}
              <a
                href="mailto:hello@togashi.tech"
                className="font-medium text-neutral-900 underline underline-offset-4 transition-colors hover:text-neutral-700"
              >
                hello@togashi.tech
              </a>
              .
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
