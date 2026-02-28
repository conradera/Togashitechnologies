"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Lightbulb,
  Shield,
  Award,
  Users,
  Target,
  TrendingUp,
  Globe,
  Zap,
  Eye,
  Clock,
  Check,
  Quote,
  Building2,
  BarChart3,
  Code2,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ─── VALUES (Operational Principles) ─── */

const values = [
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    principle: "We only build what solves real business problems.",
    description:
      "No technology for technology's sake. Every line of code, every architecture decision, and every feature must tie back to a measurable business outcome.",
  },
  {
    icon: Eye,
    title: "Transparent Delivery",
    principle: "Clear timelines. Clear budgets. No surprises.",
    description:
      "Weekly progress demos, open sprint boards, and honest communication — even when the news isn't what you want to hear.",
  },
  {
    icon: Award,
    title: "Engineering Excellence",
    principle: "We ship production-grade, not prototype-grade.",
    description:
      "Code reviews on every PR, automated testing pipelines, and security audits baked into our development process — not bolted on at the end.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    principle: "Your success is our only metric.",
    description:
      "We measure engagements by business impact — revenue generated, costs reduced, operations streamlined — not by lines of code shipped.",
  },
  {
    icon: Target,
    title: "Ownership Mindset",
    principle: "We treat your system like our own.",
    description:
      "When something breaks at 2AM, we don't wait for a ticket. We take full ownership of outcomes and stand behind every deliverable.",
  },
  {
    icon: TrendingUp,
    title: "Relentless Improvement",
    principle: "Yesterday's best practice is today's baseline.",
    description:
      "We invest in continuous learning, adopt emerging technologies early, and refine our processes with every engagement.",
  },
];

/* ─── TIMELINE (With dates and metrics) ─── */

const milestones = [
  {
    year: "2022",
    title: "Togashi Technologies Founded",
    description:
      "Launched with a mission to build globally competitive technology from Africa. First 5 enterprise clients onboarded.",
    metric: "5 clients",
  },
  {
    year: "2023",
    title: "Enterprise Expansion",
    description:
      "Expanded into government, healthcare, and financial services. Grew to 20+ active enterprise partnerships.",
    metric: "20+ partners",
  },
  {
    year: "2024",
    title: "SaaS Platform Launch",
    description:
      "Launched 2 proprietary SaaS products serving multiple industries. Crossed 200+ business accounts on the platform.",
    metric: "2 SaaS products",
  },
  {
    year: "2025",
    title: "Global Delivery Capability",
    description:
      "Serving clients across Africa and internationally. 50+ projects delivered with 99% client satisfaction.",
    metric: "50+ projects",
  },
];

/* ─── COMPETITIVE ADVANTAGES (Authority language) ─── */

const advantages = [
  {
    icon: Zap,
    title: "Architecture That Scales Without Breaking",
    description:
      "Microservices, auto-scaling infrastructure, and CI/CD pipelines that handle 10x traffic spikes without downtime or re-platforming.",
  },
  {
    icon: Globe,
    title: "Cross-Continent Execution Model",
    description:
      "Distributed teams across multiple time zones enable round-the-clock development and local regulatory compliance in every market.",
  },
  {
    icon: Shield,
    title: "Security Engineered Into Every Sprint",
    description:
      "SOC 2-aligned practices, encryption at rest and in transit, RBAC, and continuous vulnerability scanning — not a checkbox at the end.",
  },
  {
    icon: BarChart3,
    title: "ROI-First Technology Decisions",
    description:
      "Every engagement begins with business model analysis. We don't recommend technology for its own sake — only when it drives measurable returns.",
  },
  {
    icon: Code2,
    title: "Full-Lifecycle Ownership",
    description:
      "From architecture to deployment to ongoing optimization — we own the entire stack. No handoff gaps, no finger-pointing between vendors.",
  },
];

/* ─── PAGE ─── */

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative bg-white pt-32 pb-20">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
                About Us
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
                Building mission-critical
                <br />
                <span className="text-neutral-400">
                  systems for Africa&apos;s fastest-growing organizations.
                </span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-500">
                Togashi Technologies is a technology company that builds
                scalable SaaS platforms, custom enterprise software, and
                intelligent digital systems. We serve startups, SMEs,
                enterprises, and government institutions — locally and globally.
              </p>

              {/* Manifesto */}
              <div className="mt-8 border-l-2 border-neutral-900 pl-5">
                <p className="text-base font-medium leading-relaxed text-neutral-800">
                  We refuse to build fragile systems. Every product we ship must
                  withstand real-world scale, generate measurable ROI, and
                  outlast the engagement that created it.
                </p>
              </div>
            </motion.div>

            {/* Metrics — Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  value: 50,
                  suffix: "+",
                  label: "Projects Delivered",
                  sublabel: "Across 4+ countries",
                },
                {
                  value: 7,
                  suffix: "+",
                  label: "Industries Served",
                  sublabel: "Gov, fintech, health, edu",
                },
                {
                  value: 99,
                  suffix: "%",
                  label: "Client Satisfaction",
                  sublabel: "Based on post-project surveys",
                },
                {
                  value: 6,
                  suffix: " Weeks",
                  label: "Avg. Delivery Time",
                  sublabel: "From kickoff to deployment",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm"
                >
                  <span className="text-3xl font-bold text-neutral-900">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                    />
                  </span>
                  <p className="mt-1 text-sm font-medium text-neutral-700">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-400">
                    {stat.sublabel}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── VISION & MISSION (Rewritten) ─── */}
      <section className="bg-neutral-950 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-neutral-800 p-8 transition-colors hover:border-neutral-700"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Our Vision
              </span>
              <h2 className="mt-4 text-2xl font-bold">
                Building systems that scale without breaking.
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                To become Africa&apos;s most trusted technology partner for
                mission-critical systems — delivering globally competitive SaaS
                platforms and enterprise solutions that organizations depend on
                for growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-neutral-800 p-8 transition-colors hover:border-neutral-700"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Our Mission
              </span>
              <h2 className="mt-4 text-2xl font-bold">
                Every product we build must generate measurable ROI.
              </h2>
              <p className="mt-4 leading-relaxed text-neutral-400">
                To engineer software, automation, and strategic IT solutions
                that don&apos;t just work — they deliver quantifiable efficiency
                gains, cost reduction, and revenue growth for every organization
                we partner with.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── FOUNDER MESSAGE (Human Element) ─── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              From Our Founder
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 lg:p-12"
          >
            <Quote className="h-8 w-8 text-neutral-200" />
            <p className="mt-6 text-lg leading-relaxed text-neutral-700 lg:text-xl">
              I started Togashi Technologies because I saw a gap: organizations
              across Africa needed technology partners who could deliver at
              global standards — not just functional software, but systems
              engineered to withstand real-world scale, security threats, and
              rapid growth.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700 lg:text-xl">
              We don&apos;t take on projects we can&apos;t deliver excellently.
              Every client gets senior engineering talent, transparent
              communication, and a team that treats their system like our own.
              That&apos;s not a marketing promise — it&apos;s how we operate.
            </p>
            <div className="mt-8 border-t border-neutral-200 pt-6">
              <p className="font-bold text-neutral-900">Founder & CEO</p>
              <p className="text-sm text-neutral-500">
                Togashi Technologies Co. Ltd
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── VALUES (Operational Principles) ─── */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              How We Operate
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Principles, not platitudes
            </h2>
            <p className="mt-4 text-neutral-500">
              These aren&apos;t aspirational values on a wall. They&apos;re
              operational standards we hold ourselves to on every engagement.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                className="group cursor-default rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <value.icon className="h-6 w-6 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                </motion.div>
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {value.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-neutral-700">
                  {value.principle}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── JOURNEY TIMELINE (With dates + metrics) ─── */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Our Journey
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              From founding to global delivery
            </h2>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                {/* Connecting line */}
                {i < milestones.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                    className="absolute -right-4 top-10 hidden h-px w-8 origin-left bg-neutral-300 lg:block"
                  />
                )}

                {/* Year Badge */}
                <span className="inline-block rounded-full bg-neutral-900 px-3 py-1 text-xs font-bold text-white">
                  {m.year}
                </span>

                <h3 className="mt-4 text-base font-bold text-neutral-900">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {m.description}
                </p>

                {/* Metric */}
                <div className="mt-4 border-t border-neutral-100 pt-3">
                  <span className="text-sm font-bold text-neutral-900">
                    {m.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPETITIVE ADVANTAGE (Authority Section) ─── */}
      <section className="border-t border-neutral-200 bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <span className="inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Our Edge
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
                Why serious organizations choose Togashi
              </h2>
              <p className="mt-4 text-neutral-500">
                We don&apos;t just build software. We engineer growth systems.
                Here&apos;s what sets us apart from every other development shop.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10"
                >
                  Book a 30-Minute Strategy Call
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>

            <div className="space-y-4">
              {advantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
                      <item.icon className="h-5 w-5 text-neutral-900" />
                    </div>
                    <div>
                      <h3 className="font-bold text-neutral-900">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DUAL CTA ─── */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Ready to partner with a team that
            <br />
            <span className="text-neutral-500">
              treats your system like their own?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-neutral-400"
          >
            Start with a free 30-minute strategy call. We&apos;ll assess your
            technology landscape and recommend the right path forward.
          </motion.p>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400"
          >
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-white" />
              Senior engineer on every call
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-white" />
              No obligation
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="h-3.5 w-3.5 text-white" />
              100% confidential
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
              Book a Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-8 py-4 text-sm font-medium text-white transition-all hover:border-neutral-500 hover:bg-neutral-800"
            >
              View Our Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
