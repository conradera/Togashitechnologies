"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Cloud,
  Code2,
  Cpu,
  Smartphone,
  Headphones,
  Shield,
  Globe,
  Zap,
  BarChart3,
  GraduationCap,
  Wrench,
  Compass,
  Palette,
  ClipboardList,
  Search,
  Lightbulb,
  PenTool,
  Terminal,
  CheckCircle2,
  LifeBuoy,
  Quote,
  TrendingUp,
  Clock,
  Users,
  Phone,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleLogo from "@/components/ParticleLogo";
import SectionHeading from "@/components/SectionHeading";

/* ─── SERVICE DATA (Tiered: Core → Supporting) ─── */

const coreServices = [
  {
    icon: Code2,
    title: "Custom Software Development",
    outcome:
      "Eliminate operational bottlenecks with tailored systems that automate workflows and reduce manual overhead by up to 60%.",
    features: ["ERP Systems", "API Integration", "Web Portals"],
    href: "/services#custom",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    outcome:
      "Launch subscription-ready platforms that scale from 100 to 100,000 users without re-architecting your infrastructure.",
    features: ["Multi-tenant", "Subscription Billing", "Cloud-Native"],
    href: "/services#saas",
  },
  {
    icon: Cpu,
    title: "IT Consultancy & Digital Transformation",
    outcome:
      "Modernize legacy systems and align your technology stack with business goals — reducing IT costs while accelerating growth.",
    features: ["Cloud Migration", "Cybersecurity", "Process Automation"],
    href: "/services#consultancy",
  },
  {
    icon: Wrench,
    title: "Managed IT Services",
    outcome:
      "Achieve 99.9% uptime with proactive monitoring, SLA-backed support, and AI-powered infrastructure management.",
    features: ["24/7 Monitoring", "AI/ML Solutions", "IT Maintenance"],
    href: "/services#managed",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    outcome:
      "Put your business in every pocket with high-performance apps that drive engagement and revenue on iOS and Android.",
    features: ["Cross-Platform", "Native Performance", "Scalable Backend"],
    href: "/services#mobile",
  },
];

const supportingServices = [
  {
    icon: Headphones,
    title: "BPO Services",
    outcome: "Scale operations without scaling headcount through IT-enabled outsourcing.",
    href: "/services#bpo",
  },
  {
    icon: GraduationCap,
    title: "IT Training & Capacity Building",
    outcome: "Upskill your workforce with certified programs that close the digital skills gap.",
    href: "/services#training",
  },
  {
    icon: Compass,
    title: "Strategic Advisory & CTO-as-a-Service",
    outcome: "Access C-level technology leadership and strategic roadmapping on demand.",
    href: "/services#advisory",
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    outcome: "Deliver complex projects on time, within budget, and aligned to business KPIs.",
    href: "/services#project-management",
  },
  {
    icon: Palette,
    title: "Graphics & Brand Design",
    outcome: "Build a visual identity that communicates authority and wins trust at first glance.",
    href: "/services#graphics",
  },
];

/* ─── WHY TOGASHI (Sharpened value props) ─── */

const advantages = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security Architecture",
    stat: "Zero-Trust",
    description:
      "SOC 2-aligned development practices with encryption at rest and in transit, RBAC, and continuous vulnerability scanning baked into every sprint.",
  },
  {
    icon: Globe,
    title: "Cross-Continent Project Execution",
    stat: "Global",
    description:
      "Distributed delivery teams spanning multiple time zones, enabling round-the-clock development cycles and local regulatory compliance.",
  },
  {
    icon: Zap,
    title: "Built to Scale from Startup to Enterprise",
    stat: "Future-proof",
    description:
      "Microservices architecture and auto-scaling infrastructure that handles 10x traffic spikes without performance degradation or re-platforming.",
  },
  {
    icon: BarChart3,
    title: "ROI-Engineered Technology Decisions",
    stat: "Measurable",
    description:
      "Every engagement starts with business model analysis. We measure success by revenue impact, cost reduction, and operational efficiency gains.",
  },
];

/* ─── PROCESS (Enhanced with icons and detailed descriptions) ─── */

const processSteps = [
  {
    step: "01",
    icon: Search,
    title: "Discovery",
    description: "Stakeholder interviews, system audits, requirements mapping, and competitive landscape analysis.",
  },
  {
    step: "02",
    icon: Lightbulb,
    title: "Strategy",
    description: "Technical architecture planning, technology stack selection, and project roadmap definition.",
  },
  {
    step: "03",
    icon: PenTool,
    title: "Design",
    description: "Wireframing, interactive prototyping, UI/UX design systems, and user testing validation.",
  },
  {
    step: "04",
    icon: Terminal,
    title: "Development",
    description: "Agile sprints with CI/CD pipelines, code reviews, automated testing, and weekly stakeholder demos.",
  },
  {
    step: "05",
    icon: CheckCircle2,
    title: "QA & Deploy",
    description: "End-to-end testing, performance benchmarking, security audits, and zero-downtime deployment.",
  },
  {
    step: "06",
    icon: LifeBuoy,
    title: "Support & Scale",
    description: "SLA-backed monitoring, proactive optimization, feature iteration, and infrastructure scaling.",
  },
];

/* ─── INDUSTRIES (With case snippets) ─── */

const industries = [
  {
    sector: "Financial Services",
    proof: "Unified payment gateway processing 50+ merchants with 99.99% transaction reliability.",
    icon: BarChart3,
  },
  {
    sector: "Healthcare",
    proof: "Connected 15 facilities with integrated patient records — 40% faster appointment processing.",
    icon: Shield,
  },
  {
    sector: "Logistics & Transport",
    proof: "Fleet management platform tracking 300+ vehicles with 25% fuel cost reduction.",
    icon: Globe,
  },
  {
    sector: "Education",
    proof: "Learning management system serving 5,000+ students across 8 institutions with offline-first architecture.",
    icon: GraduationCap,
  },
  {
    sector: "Government & Public Sector",
    proof: "Citizen services portal achieving 70% reduction in processing time with full audit trail compliance.",
    icon: ClipboardList,
  },
  {
    sector: "SMEs & Startups",
    proof: "Financial management SaaS platform serving 200+ SMEs — 60% reduction in manual bookkeeping.",
    icon: TrendingUp,
  },
];

/* ─── TESTIMONIALS ─── */

const testimonials = [
  {
    quote:
      "Togashi Technologies transformed our operations. What used to take weeks now takes hours. Their team didn't just build software — they understood our business.",
    name: "Operations Director",
    company: "Enterprise Client, Financial Services",
  },
  {
    quote:
      "The SaaS platform they built for us has scaled seamlessly from 50 to 200+ business accounts. Their architecture decisions were forward-thinking and spot-on.",
    name: "CTO",
    company: "FinTech Startup",
  },
  {
    quote:
      "Their managed IT services and proactive monitoring have given us peace of mind. System downtime is virtually non-existent since we partnered with Togashi.",
    name: "IT Manager",
    company: "Healthcare Organization",
  },
];

/* ─── MEASURABLE RESULTS ─── */

const caseResults = [
  {
    metric: "42%",
    label: "Reduction in system downtime",
    context: "National logistics provider",
  },
  {
    metric: "60%",
    label: "Decrease in manual processing",
    context: "Financial services platform",
  },
  {
    metric: "3x",
    label: "Faster time-to-market",
    context: "SaaS product launch",
  },
  {
    metric: "99.9%",
    label: "Platform uptime achieved",
    context: "Multi-tenant enterprise system",
  },
];

/* ─── HERO TYPING EFFECT ─── */

const HERO_LINE1 = "Engineering Digital";
const HERO_LINE2 = "Transformation";
const FULL_TEXT = HERO_LINE1 + "\n" + HERO_LINE2;
const TYPING_SPEED = 60;
const PAUSE_AFTER_TYPED = 2500;

function HeroTyping() {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (charCount < FULL_TEXT.length) {
      timeout = setTimeout(() => setCharCount((c) => c + 1), TYPING_SPEED);
    } else {
      timeout = setTimeout(() => setCharCount(0), PAUSE_AFTER_TYPED);
    }

    return () => clearTimeout(timeout);
  }, [charCount]);

  const line1Typed = FULL_TEXT.slice(0, Math.min(charCount, HERO_LINE1.length));
  const line2Typed =
    charCount > HERO_LINE1.length + 1
      ? FULL_TEXT.slice(HERO_LINE1.length + 1, charCount)
      : "";
  const cursorOnLine1 = charCount <= HERO_LINE1.length;

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="mt-8 text-5xl font-semibold leading-[1.1] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl"
    >
      <span>
        {line1Typed}
        {cursorOnLine1 && (
          <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-pulse bg-neutral-900" />
        )}
      </span>
      {charCount > HERO_LINE1.length && (
        <>
          <br />
          <span className="text-neutral-400">
            {line2Typed}
            {!cursorOnLine1 && (
              <span className="ml-0.5 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-pulse bg-neutral-400" />
            )}
          </span>
        </>
      )}
    </motion.h1>
  );
}

/* ─── PAGE ─── */

export default function Home() {
  return (
    <>
      {/* ────── HERO ────── */}
      <section className="relative min-h-screen overflow-hidden bg-white">
        <div className="grid-pattern absolute inset-0" />
        <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-neutral-100 to-transparent opacity-60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-neutral-50 to-transparent opacity-40 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600 shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-neutral-900 animate-pulse" />
                  Togashi Technologies Co. Ltd
                </span>
              </motion.div>

              <HeroTyping />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500"
              >
                We architect scalable SaaS platforms, custom enterprise software,
                and intelligent digital systems that deliver measurable ROI for
                organizations across Africa and globally.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/10"
                >
                  Book a Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-4 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:shadow-md"
                >
                  View Our Work
                </Link>
              </motion.div>

              {/* Risk Reversal */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-4 flex items-center gap-2 text-xs text-neutral-400"
              >
                <Phone className="h-3 w-3" />
                Free 30-minute technical consultation — no commitment required
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hidden h-[500px] w-[500px] justify-self-center lg:block"
            >
              <ParticleLogo />
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-2 gap-px rounded-2xl border border-neutral-200 bg-neutral-200 shadow-sm sm:grid-cols-4 lg:mt-32"
          >
            {[
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 99, suffix: "%", label: "Client Satisfaction" },
              { value: 7, suffix: "+", label: "Industries Served" },
              { value: 24, suffix: "/7", label: "Support Available" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center bg-white px-6 py-8 ${
                  i === 0
                    ? "rounded-tl-2xl sm:rounded-l-2xl"
                    : i === 1
                    ? "rounded-tr-2xl sm:rounded-none"
                    : i === 2
                    ? "sm:rounded-none"
                    : "rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none"
                }`}
              >
                <span className="text-3xl font-bold text-neutral-900">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-1 text-xs font-medium text-neutral-500">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ────── MEASURABLE RESULTS (Social Proof) ────── */}
      <section className="border-b border-neutral-100 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-xs font-semibold uppercase tracking-wider text-neutral-400"
          >
            Proven Impact
          </motion.p>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {caseResults.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-4xl font-bold text-neutral-900">
                  {item.metric}
                </span>
                <p className="mt-2 text-sm font-medium text-neutral-700">
                  {item.label}
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  {item.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── SERVICES (Tiered) ────── */}
      <section className="relative bg-neutral-50 py-32">
        <div className="dot-pattern absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="What We Deliver"
            title="Technology Solutions That Drive Revenue"
            description="We don't just build software — we engineer measurable business outcomes. Every solution is designed around your growth objectives."
          />

          {/* Core Offerings */}
          <div className="mt-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
            >
              Core Offerings
            </motion.p>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-xl hover:shadow-neutral-900/[0.06]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 transition-colors group-hover:bg-neutral-900">
                    <service.icon className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-white" />
                  </div>

                  <h3 className="mt-6 text-lg font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-500">
                    {service.outcome}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-neutral-100 px-3 py-1 text-xs text-neutral-500"
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-1 text-sm font-medium text-neutral-900 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Supporting Services */}
          <div className="mt-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
            >
              Supporting Services
            </motion.p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {supportingServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/[0.04]"
                >
                  <service.icon className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                  <h3 className="mt-3 text-sm font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-neutral-500">
                    {service.outcome}
                  </p>
                  <span className="mt-3 text-xs font-medium text-neutral-400 transition-colors group-hover:text-neutral-900">
                    Learn more &rarr;
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              View all services in detail
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ────── WHY CHOOSE US ────── */}
      <section className="relative bg-neutral-950 py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-xs font-medium uppercase tracking-wider text-neutral-500"
              >
                Our Edge
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
              >
                Why Togashi
                <br />
                <span className="text-neutral-500">Technologies?</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-6 max-w-md text-neutral-400"
              >
                We don&apos;t deliver code — we deliver competitive advantage.
                Engineering precision meets business strategy to produce
                solutions with quantifiable impact.
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-10"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-all hover:border-neutral-400 hover:bg-neutral-800"
                >
                  Learn about us
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {advantages.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group rounded-2xl border border-neutral-800 p-6 transition-all hover:-translate-y-1 hover:border-neutral-600 hover:bg-neutral-800/60 hover:shadow-lg hover:shadow-black/20"
                >
                  <item.icon className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-white" />
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    {item.stat}
                  </p>
                  <h3 className="mt-1 text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────── PROCESS ────── */}
      <section className="bg-neutral-900 py-32 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block rounded-full border border-neutral-700 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-400"
            >
              Our Methodology
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              From Discovery to Delivery
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mx-auto mt-4 max-w-2xl text-neutral-400"
            >
              A structured, agile methodology that ensures quality, transparency, and results at every stage. Enterprise buyers trust process clarity.
            </motion.p>
          </div>

          <div className="mt-16 grid gap-px rounded-2xl border border-neutral-700 bg-neutral-700 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group bg-neutral-900 p-8 transition-colors hover:bg-neutral-800 ${
                  i === 0
                    ? "rounded-tl-2xl"
                    : i === 2
                    ? "sm:rounded-none lg:rounded-tr-2xl"
                    : i === 3
                    ? "sm:rounded-none lg:rounded-bl-2xl"
                    : i === 5
                    ? "rounded-br-2xl"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-neutral-700 transition-colors group-hover:text-neutral-500">
                    {step.step}
                  </span>
                  <step.icon className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── INDUSTRIES (Case Snippets) ────── */}
      <section className="border-t border-neutral-100 bg-white py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Industries"
            title="Proven Across Sectors"
            description="Specific solutions for specific industries — each backed by real project outcomes."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, i) => (
              <motion.div
                key={item.sector}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-2xl border border-neutral-200 p-6 transition-all hover:-translate-y-1 hover:border-neutral-300 hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <item.icon className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-neutral-900" />
                <h3 className="mt-4 text-base font-bold text-neutral-900">
                  {item.sector}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {item.proof}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── TESTIMONIALS ────── */}
      <section className="bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            badge="Client Feedback"
            title="Trusted by Decision-Makers"
            description="What our clients say about working with Togashi Technologies."
          />

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <Quote className="h-6 w-6 text-neutral-200" />
                <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="text-sm font-semibold text-neutral-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-neutral-400">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ────── FINAL CTA ────── */}
      <section className="relative overflow-hidden bg-neutral-950 py-32">
        <div className="grid-pattern absolute inset-0 opacity-[0.03]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              Let&apos;s Architect Your Next
              <br />
              <span className="text-neutral-500">Digital Breakthrough</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-lg text-neutral-400"
            >
              Start with a free 30-minute technical consultation. No pitch decks,
              no pressure — just a strategic conversation about your technology
              goals.
            </motion.p>
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
                Book Your Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-8 py-4 text-sm font-medium text-white transition-all hover:border-neutral-500 hover:bg-neutral-800"
              >
                Calculate Pricing
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 flex items-center justify-center gap-6 text-xs text-neutral-500"
            >
              <span className="flex items-center gap-1.5">
                <Clock className="h-3 w-3" />
                30-min session
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="h-3 w-3" />
                Senior engineer on every call
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="h-3 w-3" />
                100% confidential
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
