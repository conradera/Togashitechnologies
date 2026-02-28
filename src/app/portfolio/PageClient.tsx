"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

type Category = "all" | "saas" | "enterprise" | "mobile" | "web";

interface Project {
  title: string;
  category: Category;
  categoryLabel: string;
  description: string;
  results: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    title: "FinTrack Enterprise",
    category: "saas",
    categoryLabel: "SaaS Platform",
    description:
      "Multi-tenant financial management SaaS platform serving 200+ SMEs with automated invoicing, expense tracking, and real-time financial analytics.",
    results: [
      "200+ active business accounts",
      "60% reduction in manual bookkeeping",
      "99.9% uptime since launch",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "MediConnect Hub",
    category: "enterprise",
    categoryLabel: "Healthcare System",
    description:
      "Comprehensive healthcare management information system connecting hospitals, clinics, and pharmacies with integrated patient records and appointment scheduling.",
    results: [
      "15 healthcare facilities connected",
      "50,000+ patient records managed",
      "40% faster appointment processing",
    ],
    technologies: ["Next.js", "Python", "MongoDB", "Azure"],
  },
  {
    title: "AgriMarket Mobile",
    category: "mobile",
    categoryLabel: "Mobile Application",
    description:
      "Cross-platform marketplace app connecting farmers directly with buyers, featuring real-time pricing, location-based discovery, and mobile money integration.",
    results: [
      "10,000+ app downloads",
      "500+ registered farmers",
      "Direct market access achieved",
    ],
    technologies: ["React Native", "Firebase", "Google Maps", "Mobile Money API"],
  },
  {
    title: "EduPort LMS",
    category: "saas",
    categoryLabel: "SaaS Platform",
    description:
      "Learning management system built for African educational institutions with offline-first capabilities, student portals, and automated grading.",
    results: [
      "8 institutions onboarded",
      "5,000+ students active",
      "Offline-first architecture",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PWA"],
  },
  {
    title: "LogiTrack Fleet",
    category: "enterprise",
    categoryLabel: "Enterprise Solution",
    description:
      "Real-time fleet management and logistics optimization platform with GPS tracking, route planning, and delivery analytics for transport companies.",
    results: [
      "300+ vehicles tracked",
      "25% fuel cost reduction",
      "Real-time GPS monitoring",
    ],
    technologies: ["React", "Node.js", "Redis", "Mapbox"],
  },
  {
    title: "PaySwift Gateway",
    category: "web",
    categoryLabel: "Web Platform",
    description:
      "Unified payment processing gateway integrating multiple mobile money providers, bank transfers, and card payments for e-commerce businesses.",
    results: [
      "50+ merchants integrated",
      "99.99% transaction reliability",
      "Multi-provider support",
    ],
    technologies: ["TypeScript", "Go", "PostgreSQL", "Docker"],
  },
  {
    title: "GovConnect Portal",
    category: "web",
    categoryLabel: "Government Portal",
    description:
      "Citizen services portal enabling online permit applications, tax filings, and government communications with role-based access and audit trails.",
    results: [
      "70% reduction in processing time",
      "Paperless workflow achieved",
      "Full audit trail compliance",
    ],
    technologies: ["React", "Java", "Oracle DB", "Kubernetes"],
  },
  {
    title: "StockSense Inventory",
    category: "mobile",
    categoryLabel: "Mobile Application",
    description:
      "Barcode-powered inventory management mobile app for retail chains with real-time stock tracking, automated reorder alerts, and sales analytics.",
    results: [
      "12 retail locations deployed",
      "35% inventory waste reduction",
      "Real-time stock visibility",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "Barcode API"],
  },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "saas", label: "SaaS" },
  { id: "enterprise", label: "Enterprise" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-16">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
              Our Work
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Projects that deliver
              <br />
              <span className="text-neutral-400">measurable impact</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-500">
              Real solutions we&apos;ve engineered for organizations across
              Africa and beyond. Each project reflects our commitment to
              quality and results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  activeFilter === f.id
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/[0.03]"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-500">
                      {project.categoryLabel}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-neutral-300 transition-all group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    {project.description}
                  </p>

                  {/* Results */}
                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Key Results
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.results.map((r, ri) => (
                        <motion.li
                          key={r}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: ri * 0.08, duration: 0.3 }}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <div className="h-1 w-1 shrink-0 rounded-full bg-neutral-400" />
                          {r}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((t, ti) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: ti * 0.06, duration: 0.3 }}
                        whileHover={{
                          scale: 1.08,
                          borderColor: "rgb(163 163 163)",
                          transition: { duration: 0.15 },
                        }}
                        className="rounded-full border border-neutral-100 px-3 py-1 text-xs text-neutral-500"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <SectionHeading
            title="Your project could be next"
            description="Let's discuss how Togashi Technologies can solve your unique challenges."
          />
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/pricing-calculator"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800"
            >
              Get a Quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
