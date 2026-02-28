"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    title: "Services",
    content:
      "Togashi Technologies provides custom software development, SaaS solutions, mobile applications, IT consultancy, managed IT services, BPO, and related technology services. All engagements are governed by a separate Statement of Work (SOW) or service agreement that details scope, deliverables, timeline, and payment terms.",
  },
  {
    title: "Intellectual Property",
    content:
      "Unless otherwise agreed in writing, all intellectual property created during the course of an engagement is assigned to the client upon full payment. Togashi Technologies retains the right to use general knowledge, techniques, and non-proprietary tools developed during the project. Pre-existing IP remains the property of its respective owner.",
  },
  {
    title: "Confidentiality",
    content:
      "Both parties agree to keep confidential any proprietary or sensitive information shared during the engagement. This obligation survives termination of the agreement. We implement industry-standard security measures to protect all client data and project materials.",
  },
  {
    title: "Payment Terms",
    content:
      "Payment terms are specified in the applicable SOW or service agreement. Unless otherwise agreed, invoices are due within 30 days of issue. Late payments may incur reasonable interest charges. We reserve the right to pause work on overdue accounts.",
  },
  {
    title: "Warranties & Liability",
    content:
      "We warrant that our services will be performed in a professional and workmanlike manner. Our total liability is limited to the fees paid for the specific services giving rise to the claim. We are not liable for indirect, incidental, or consequential damages.",
  },
  {
    title: "Termination",
    content:
      "Either party may terminate an engagement with 30 days written notice. Upon termination, the client pays for all work completed to date. We will provide an orderly handover of all project materials and deliverables.",
  },
  {
    title: "Website Use",
    content:
      "This website is provided for informational purposes. While we strive to keep content accurate and up-to-date, we make no warranties about the completeness or accuracy of information on this site. Use of this website does not create a contractual relationship.",
  },
  {
    title: "Governing Law",
    content:
      "These terms are governed by applicable law. Any disputes will be resolved through good-faith negotiation first, followed by mediation or arbitration if necessary.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We reserve the right to update these Terms of Service at any time. Changes take effect upon posting to this page. Continued use of our website or services constitutes acceptance of the updated terms.",
  },
];

export default function TermsPage() {
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
              Terms of Service
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
            These Terms of Service govern your use of the Togashi Technologies
            Co. Ltd. website and our professional services. By accessing our
            website or engaging our services, you agree to these terms.
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
              Questions?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600">
              If you have questions about these Terms of Service, please contact
              us at{" "}
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
