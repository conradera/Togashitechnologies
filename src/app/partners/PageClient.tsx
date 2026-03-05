"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Palette,
  Cloud,
  Wifi,
  Scale,
  BarChart3,
  Check,
  Building2,
  Layers,
  ShieldCheck,
  Globe,
  Lock,
} from "lucide-react";

/* ─── PARTNER CATEGORIES ─── */

const partnerCategories = [
  {
    icon: Palette,
    title: "Advanced Creative & 3D Technology Partners",
    description:
      "For immersive digital experiences and advanced visualization systems.",
    capabilities: [
      "3D architectural rendering",
      "Blender-based animation & modeling",
      "Digital twin development",
      "Product visualization",
      "UI motion design",
      "Interactive simulation systems",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure Alliance",
    description:
      "For scalable, secure, and high-performance deployment environments.",
    capabilities: [
      "Enterprise hosting environments",
      "Managed cloud services",
      "Hybrid cloud architecture",
      "Global content delivery networks (CDN)",
      "High-availability infrastructure setups",
      "Disaster recovery & business continuity systems",
    ],
  },
  {
    icon: Wifi,
    title: "IoT & Smart Systems Innovation Network",
    description:
      "For next-generation connected infrastructure and embedded systems.",
    capabilities: [
      "Embedded systems development",
      "IoT hardware prototyping",
      "Smart sensor integration",
      "Industrial automation systems",
      "Smart campus & smart city pilot projects",
      "Electronics & IoT technical training",
    ],
  },
  {
    icon: Scale,
    title: "Technology Legal & Regulatory Advisory",
    description:
      "For secure, compliant, and future-proof digital operations.",
    capabilities: [
      "Technology contract drafting & review",
      "Intellectual property protection",
      "Data protection & privacy compliance",
      "Cross-border digital law advisory",
      "Startup structuring & governance support",
      "Regulatory alignment for digital platforms",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial & Strategic Advisory Network",
    description:
      "For sustainable growth and financial governance.",
    capabilities: [
      "Technology tax advisory",
      "Audit & compliance services",
      "Financial structuring for digital ventures",
      "Investment readiness advisory",
      "Startup financial modeling",
      "Cross-border transaction advisory",
    ],
  },
];

/* ─── GOVERNANCE ITEMS ─── */

const governanceItems = [
  "Unified project management oversight",
  "Centralized quality assurance standards",
  "Confidentiality & compliance controls",
  "Clear service-level accountability",
  "Structured performance monitoring",
];

/* ─── ECOSYSTEM BENEFITS ─── */

const ecosystemBenefits = [
  "Engineering excellence",
  "Infrastructure depth",
  "Legal clarity",
  "Financial intelligence",
  "Innovation-driven partnerships",
];

/* ─── PROJECT TYPES ─── */

const projectTypes = [
  {
    icon: Building2,
    title: "Government Digital Infrastructure",
    description: "Large-scale government digital infrastructure programs.",
  },
  {
    icon: Layers,
    title: "Enterprise Modernization",
    description: "Enterprise modernization and transformation initiatives.",
  },
  {
    icon: Wifi,
    title: "Smart Infrastructure",
    description: "Smart infrastructure deployments and connected systems.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Industry Platforms",
    description: "Platforms for regulated industries with strict compliance.",
  },
  {
    icon: Lock,
    title: "High-Security Environments",
    description: "Mission-critical systems requiring top-tier security.",
  },
  {
    icon: Globe,
    title: "International Collaborations",
    description: "Cross-border technology collaborations and deployments.",
  },
];

/* ─── PAGE ─── */

export default function PartnersPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-white pt-32 pb-20">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
              Partner Ecosystem
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              Integrated Expertise.
              <br />
              <span className="text-neutral-400">Unified Delivery.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              At Togashi Technologies, we believe complex digital transformation
              requires more than isolated capabilities. Through our Strategic
              Partner Ecosystem, we collaborate with carefully selected industry
              specialists to deliver comprehensive, enterprise-grade solutions
              &mdash; all managed under Togashi&apos;s unified governance and
              delivery framework.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-500">
              We remain your single point of accountability while mobilizing the
              right expertise for every stage of your project.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#0E0E10] px-8 py-4 text-sm font-medium text-white transition-all hover:bg-[#17171A] hover:shadow-xl hover:shadow-[rgba(5,150,105,0.15)]"
              >
                Discuss a Partnership
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PARTNER CATEGORIES ─── */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Our Integrated Capability Network
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Coordinated expertise across every domain
            </h2>
            <p className="mt-4 text-neutral-500">
              Complex digital transformation requires coordinated expertise
              across technology, infrastructure, legal, financial, and innovation
              domains.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnerCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <category.icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                </motion.div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500">
                  {category.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {category.capabilities.map((cap) => (
                    <li
                      key={cap}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#059669]" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GOVERNANCE MODEL ─── */}
      <section className="bg-[#0E0E10] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-[#059669]">
                Our Governance Model
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Enterprise-level execution, every time
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                Togashi Technologies remains your principal engagement partner,
                ensuring seamless coordination and enterprise-level execution
                across every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              {governanceItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                  className="flex items-center gap-3 rounded-xl border border-[#1F1F23] px-5 py-4"
                >
                  <Check className="h-4 w-4 shrink-0 text-[#059669]" />
                  <span className="text-sm font-medium text-neutral-200">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── WHY OUR ECOSYSTEM MODEL MATTERS ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              The Ecosystem Advantage
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Why our ecosystem model matters
            </h2>
            <p className="mt-4 text-neutral-500">
              Digital transformation today demands multidisciplinary execution.
              Our ecosystem model allows us to mobilize specialized expertise
              rapidly while maintaining centralized control, quality, and
              strategic direction.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {ecosystemBenefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <p className="text-sm font-bold text-neutral-900">{benefit}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 max-w-2xl text-neutral-500"
          >
            We deliver fully integrated digital solutions &mdash; without
            fragmentation.
          </motion.p>
        </div>
      </section>

      {/* ─── BUILT FOR COMPLEX PROJECTS ─── */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Where We Excel
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Built for complex, multi-stakeholder projects
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projectTypes.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl border border-neutral-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <project.icon className="h-6 w-6 text-neutral-900" />
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#0E0E10] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Strategic Partnerships.
              <br />
              <span className="text-[#059669]">Structured Execution.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-neutral-400"
            >
              We don&apos;t simply connect services. We orchestrate
              capabilities. Through our ecosystem-driven approach, Togashi
              Technologies ensures that every solution is technically robust,
              legally sound, financially sustainable, and strategically aligned.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400"
            >
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#059669]" />
                Single point of accountability
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#059669]" />
                Enterprise-grade execution
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-[#059669]" />
                Unified governance
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-neutral-900 transition-all hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/10"
              >
                Start a Conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1F1F23] px-8 py-4 text-sm font-medium text-white transition-all hover:border-neutral-500 hover:bg-[#17171A]"
              >
                View Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
