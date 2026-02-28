"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Cloud,
  Code2,
  Smartphone,
  Headphones,
  Cpu,
  Layers,
  Check,
  GraduationCap,
  Wrench,
  Compass,
  Palette,
  ClipboardList,
  ChevronDown,
  Building2,
  Rocket,
  Users,
  Shield,
  Clock,
  Target,
  Quote,
  Zap,
} from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

/* ─── TYPES ─── */

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  timeline: string;
  idealFor: string;
  outcome: string;
  description: string;
  features: string[];
  deliverables: string[];
  cta: string;
  flagship?: boolean;
}

interface Category {
  id: string;
  label: string;
  tagline: string;
  services: Service[];
}

/* ─── SERVICE DATA (Categorized & Outcome-Focused) ─── */

const categories: Category[] = [
  {
    id: "build",
    label: "Build",
    tagline:
      "From MVP to enterprise platform — we engineer software that drives revenue, automates operations, and scales without limits.",
    services: [
      {
        id: "custom",
        icon: Code2,
        title: "Custom Software Development",
        subtitle: "Tailored Business Solutions",
        timeline: "3-10 weeks",
        idealFor: "Enterprises & growing SMEs",
        outcome:
          "Eliminate operational bottlenecks with tailored systems that automate workflows and reduce manual overhead by up to 60%.",
        description:
          "We build bespoke software aligned to your exact operational needs — from ERP systems and management dashboards to API integrations and legacy modernization. Every solution is architected for performance, security, and long-term maintainability.",
        features: [
          "Enterprise Resource Planning (ERP)",
          "Management Information Systems (MIS)",
          "Web-based dashboards & portals",
          "API integrations & backend systems",
          "Cloud-based enterprise solutions",
          "Legacy system modernization",
        ],
        deliverables: [
          "Technical requirements specification",
          "Custom-built application",
          "Database design & setup",
          "Integration documentation",
          "User training materials",
        ],
        cta: "Request a Custom Software Proposal",
        flagship: true,
      },
      {
        id: "saas",
        icon: Cloud,
        title: "SaaS Development",
        subtitle: "Scalable Cloud Platforms",
        timeline: "4-12 weeks",
        idealFor: "Startups & digital-first businesses",
        outcome:
          "Launch subscription-ready platforms that scale from 100 to 100,000 users without re-architecting your infrastructure.",
        description:
          "We design and deploy multi-tenant SaaS platforms with automated billing, role-based access, and cloud-native architecture. Built to generate recurring revenue from day one.",
        features: [
          "Subscription-based web platforms",
          "Enterprise management systems",
          "Industry-specific digital platforms",
          "Cloud-native applications",
          "Multi-tenant architecture",
          "Automated billing & subscriptions",
        ],
        deliverables: [
          "Architecture design document",
          "Fully deployed SaaS platform",
          "Admin dashboard",
          "API documentation",
          "CI/CD pipeline setup",
        ],
        cta: "Request SaaS Cost Estimate",
        flagship: true,
      },
      {
        id: "mobile",
        icon: Smartphone,
        title: "Mobile Application Development",
        subtitle: "iOS, Android & Cross-Platform",
        timeline: "3-8 weeks",
        idealFor: "Consumer brands & field operations",
        outcome:
          "Put your business in every pocket with high-performance apps that drive engagement and revenue on iOS and Android.",
        description:
          "We build native and cross-platform mobile applications focused on user experience, speed, and scalability. From marketplace apps to field service tools — deployed to App Store and Play Store.",
        features: [
          "Android native development",
          "iOS native development",
          "Cross-platform (React Native / Flutter)",
          "Backend API integration",
          "Push notifications & real-time",
          "App Store & Play Store deployment",
        ],
        deliverables: [
          "UI/UX design mockups",
          "Native / cross-platform app",
          "Backend API setup",
          "Store listing & deployment",
          "Performance optimization report",
        ],
        cta: "Get a Mobile App Proposal",
        flagship: true,
      },
    ],
  },
  {
    id: "optimize",
    label: "Optimize",
    tagline:
      "Keep your infrastructure running at peak performance. We monitor, maintain, and modernize so you can focus on growth.",
    services: [
      {
        id: "managed",
        icon: Wrench,
        title: "Managed IT Services",
        subtitle: "End-to-End IT Operations",
        timeline: "Ongoing engagement",
        idealFor: "Organizations without in-house IT teams",
        outcome:
          "Achieve 99.9% uptime with proactive monitoring, SLA-backed support, and AI-powered infrastructure management.",
        description:
          "Fully managed IT services including 24/7 remote monitoring, helpdesk support, hardware maintenance, and AI/ML solution deployment. We keep your technology running so you can focus on your core business.",
        features: [
          "Managed IT support & maintenance",
          "Remote system monitoring",
          "SLA-based support contracts",
          "IT helpdesk outsourcing",
          "Monthly maintenance packages",
          "AI/ML solution deployment",
          "Computer servicing & maintenance",
        ],
        deliverables: [
          "SLA-backed service agreement",
          "24/7 monitoring dashboard",
          "Monthly performance reports",
          "Incident response documentation",
          "Hardware maintenance schedule",
        ],
        cta: "Get a Managed IT Quote",
      },
      {
        id: "consultancy",
        icon: Cpu,
        title: "IT Consultancy & Digital Transformation",
        subtitle: "Strategic Technology Advisory",
        timeline: "1-4 weeks",
        idealFor: "Enterprises modernizing operations",
        outcome:
          "Modernize legacy systems and align your technology stack with business goals — reducing IT costs while accelerating growth.",
        description:
          "We guide organizations through structured digital transformation. From cloud migration and cybersecurity audits to process automation — we help you transition to efficient, digitally driven operations.",
        features: [
          "IT strategy development",
          "Systems analysis & architecture",
          "Cloud migration strategies",
          "Cybersecurity advisory",
          "Process automation",
          "Technology audits",
        ],
        deliverables: [
          "IT strategy roadmap",
          "Architecture assessment report",
          "Migration plan",
          "Security audit report",
          "Implementation timeline",
        ],
        cta: "Book a Strategy Session",
      },
    ],
  },
  {
    id: "advise",
    label: "Advise",
    tagline:
      "Access senior technology leadership and structured project delivery without the full-time commitment.",
    services: [
      {
        id: "advisory",
        icon: Compass,
        title: "Strategic Advisory & CTO-as-a-Service",
        subtitle: "Executive Technology Leadership",
        timeline: "Ongoing engagement",
        idealFor: "Companies without a CTO or VP Engineering",
        outcome:
          "Access C-level technology leadership and strategic roadmapping on demand — at a fraction of a full-time hire.",
        description:
          "Fractional CTO services, digital roadmapping, technology architecture planning, and vendor evaluation. We help you make informed technology decisions that align with your business trajectory.",
        features: [
          "Fractional CTO services",
          "Digital roadmapping",
          "Technology architecture planning",
          "Vendor evaluation & selection",
          "Procurement advisory",
          "Technology governance frameworks",
        ],
        deliverables: [
          "Technology strategy document",
          "Digital transformation roadmap",
          "Architecture review report",
          "Vendor evaluation matrix",
          "Quarterly advisory reports",
        ],
        cta: "Schedule a CTO Consultation",
      },
      {
        id: "project-management",
        icon: ClipboardList,
        title: "Project Management Services",
        subtitle: "Planning, Execution & Delivery",
        timeline: "Ongoing engagement",
        idealFor: "Organizations running complex initiatives",
        outcome:
          "Deliver complex projects on time, within budget, and aligned to business KPIs — with full visibility at every stage.",
        description:
          "End-to-end project management using agile, scrum, and traditional methodologies. We manage the full lifecycle from inception to delivery, ensuring stakeholder alignment and risk mitigation throughout.",
        features: [
          "Agile & Scrum project management",
          "Resource planning & allocation",
          "Risk assessment & mitigation",
          "Stakeholder communication management",
          "Budget tracking & cost control",
          "Quality assurance & delivery oversight",
        ],
        deliverables: [
          "Project charter & scope document",
          "Gantt charts & sprint plans",
          "Risk register & mitigation plan",
          "Weekly/monthly status reports",
          "Post-project review & lessons learned",
        ],
        cta: "Discuss Your Project Needs",
      },
    ],
  },
  {
    id: "enable",
    label: "Enable",
    tagline:
      "Build capacity, scale operations, and strengthen your brand with specialized support services.",
    services: [
      {
        id: "training",
        icon: GraduationCap,
        title: "IT Training & Capacity Building",
        subtitle: "Upskilling & Digital Literacy",
        timeline: "1-8 weeks",
        idealFor: "Corporates & government institutions",
        outcome:
          "Close the digital skills gap with certified programs that transform your workforce into a technology-enabled competitive advantage.",
        description:
          "Comprehensive IT training for corporates, government institutions, and individuals. From coding bootcamps to cybersecurity awareness — we build digital capacity at every level of your organization.",
        features: [
          "Corporate IT training programs",
          "Government digital skills programs",
          "Coding bootcamps & academies",
          "Cybersecurity awareness programs",
          "Digital transformation workshops",
          "Institutional capacity building",
        ],
        deliverables: [
          "Customized training curriculum",
          "Hands-on lab environments",
          "Certification & assessment",
          "Training progress reports",
          "Post-training support plan",
        ],
        cta: "Request Training Proposal",
      },
      {
        id: "bpo",
        icon: Headphones,
        title: "Business Process Outsourcing",
        subtitle: "IT-Enabled BPO Services",
        timeline: "Ongoing engagement",
        idealFor: "Companies scaling operations",
        outcome:
          "Scale operations without scaling headcount — through IT-enabled outsourcing with SLA-backed reliability.",
        description:
          "IT-enabled BPO services for local and international clients. We leverage secure infrastructure and structured workflows to ensure reliability, confidentiality, and consistent service quality.",
        features: [
          "Technical support services",
          "Data processing & management",
          "Customer support systems",
          "Digital operations management",
          "Remote IT services",
          "Quality assurance & monitoring",
        ],
        deliverables: [
          "SLA-backed service agreement",
          "Dedicated support team",
          "Reporting dashboards",
          "Process documentation",
          "Regular performance reviews",
        ],
        cta: "Get a BPO Proposal",
      },
      {
        id: "graphics",
        icon: Palette,
        title: "Graphics & Brand Design",
        subtitle: "Visual Identity & Creative Design",
        timeline: "1-4 weeks",
        idealFor: "Brands launching or repositioning",
        outcome:
          "Build a visual identity that communicates authority and wins trust at first glance.",
        description:
          "Compelling visual identities and design assets that communicate your brand message. From logo design and brand guidelines to marketing collateral and digital graphics — pixel-perfect results.",
        features: [
          "Brand identity & logo design",
          "UI/UX design & prototyping",
          "Marketing & advertising materials",
          "Social media graphics & templates",
          "Print media & publication design",
          "Presentation & pitch deck design",
        ],
        deliverables: [
          "Brand identity guidelines",
          "Design asset library",
          "Source files & exports",
          "Style guide documentation",
          "Print-ready & digital formats",
        ],
        cta: "Request a Design Quote",
      },
    ],
  },
];

const allServices = categories.flatMap((c) => c.services);

/* ─── COMPARISON TABLE DATA ─── */

const comparisonRows = [
  { service: "Custom Software", timeline: "3-10 weeks", startingFrom: "$4,000", idealFor: "Enterprises", engagement: "Project-based" },
  { service: "SaaS Development", timeline: "4-12 weeks", startingFrom: "$5,000", idealFor: "Startups", engagement: "Project-based" },
  { service: "Mobile Apps", timeline: "3-8 weeks", startingFrom: "$4,500", idealFor: "Consumer brands", engagement: "Project-based" },
  { service: "Managed IT", timeline: "Ongoing", startingFrom: "$2,000/mo", idealFor: "All organizations", engagement: "Retainer" },
  { service: "IT Consultancy", timeline: "1-4 weeks", startingFrom: "$3,000", idealFor: "Enterprises", engagement: "Project-based" },
  { service: "CTO-as-a-Service", timeline: "Ongoing", startingFrom: "$3,500/mo", idealFor: "Growth-stage", engagement: "Retainer" },
  { service: "IT Training", timeline: "1-8 weeks", startingFrom: "$2,500", idealFor: "Corporates & gov", engagement: "Project-based" },
  { service: "BPO Services", timeline: "Ongoing", startingFrom: "$2,000/mo", idealFor: "Scaling companies", engagement: "Retainer" },
  { service: "Brand Design", timeline: "1-4 weeks", startingFrom: "$1,500", idealFor: "All brands", engagement: "Project-based" },
  { service: "Project Management", timeline: "Ongoing", startingFrom: "$3,000/mo", idealFor: "Complex initiatives", engagement: "Retainer" },
];

/* ─── WHO THIS IS FOR ─── */

const audiences = [
  {
    icon: Rocket,
    title: "Startups & Scale-ups",
    description: "Launch MVPs fast, build subscription platforms, and scale infrastructure as you grow.",
  },
  {
    icon: Building2,
    title: "Enterprises & Corporates",
    description: "Modernize legacy systems, automate operations, and reduce IT costs with strategic technology.",
  },
  {
    icon: Users,
    title: "Government & Institutions",
    description: "Digital transformation, citizen portals, capacity building, and compliance-ready systems.",
  },
];

/* ─── COLLAPSIBLE SERVICE BLOCK ─── */

function ServiceBlock({ service, index }: { service: Service; index: number }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.div
      id={service.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`scroll-mt-32 rounded-2xl border p-8 transition-all lg:p-10 ${
        service.flagship
          ? "border-neutral-300 bg-white shadow-lg shadow-neutral-900/[0.04]"
          : "border-neutral-200 bg-white"
      } ${index % 2 === 1 ? "lg:bg-neutral-50/50" : ""}`}
    >
      <div className="grid gap-8 lg:grid-cols-5">
        {/* Left — Info (3 cols) */}
        <div className="lg:col-span-3">
          <div className="flex items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                service.flagship
                  ? "bg-neutral-900"
                  : "bg-neutral-100"
              }`}
            >
              <service.icon
                className={`h-6 w-6 ${
                  service.flagship ? "text-white" : "text-neutral-700"
                }`}
              />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  {service.subtitle}
                </span>
                {service.flagship && (
                  <span className="rounded-full bg-neutral-900 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                    Flagship
                  </span>
                )}
              </div>
              <h2 className="text-xl font-bold text-neutral-900 lg:text-2xl">
                {service.title}
              </h2>
            </div>
          </div>

          {/* Outcome Statement */}
          <p className="mt-5 text-base font-medium leading-relaxed text-neutral-800">
            {service.outcome}
          </p>

          <p className="mt-3 text-sm leading-relaxed text-neutral-500">
            {service.description}
          </p>

          {/* Meta Tags */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600">
              <Clock className="h-3 w-3" />
              {service.timeline}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600">
              <Target className="h-3 w-3" />
              {service.idealFor}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Link
              href="/pricing-calculator"
              className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10"
            >
              {service.cta}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
            <span className="text-xs text-neutral-400">
              Free consultation &middot; No obligation &middot; 24-hour response
            </span>
          </div>
        </div>

        {/* Right — Collapsible Details (2 cols) */}
        <div className="lg:col-span-2">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex w-full items-center justify-between rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300 hover:bg-neutral-50"
          >
            <span>Capabilities & Deliverables</span>
            <ChevronDown
              className={`h-4 w-4 text-neutral-400 transition-transform duration-200 ${
                showDetails ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4 overflow-hidden"
            >
              {/* Capabilities */}
              <div className="rounded-xl border border-neutral-100 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Capabilities
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-900" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div className="rounded-xl bg-neutral-50 p-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                  Deliverables
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-neutral-600"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── PAGE ─── */

export default function ServicesPage() {
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
              <Layers className="h-3 w-3" />
              Our Services
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              We build systems that don&apos;t
              <br />
              <span className="text-neutral-400">break under scale.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-500">
              From MVP to enterprise infrastructure — we engineer growth. Every
              service is designed around measurable business outcomes.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/10"
              >
                Book a Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-xs text-neutral-400">
                30 min &middot; No obligation &middot; Senior engineer on every call
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── TRUST METRICS ─── */}
      <section className="border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-neutral-200 sm:grid-cols-4">
            {[
              { value: 50, suffix: "+", label: "Projects Delivered" },
              { value: 6, suffix: " Weeks", label: "Avg. Delivery Time" },
              { value: 99, suffix: ".9%", label: "Uptime SLA" },
              { value: 24, suffix: "hr", label: "Response Time" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="px-4 py-6 text-center sm:px-6"
              >
                <span className="text-2xl font-bold text-neutral-900">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </span>
                <p className="mt-1 text-xs font-medium text-neutral-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STICKY SERVICE NAVIGATION ─── */}
      <div className="sticky top-16 z-30 border-b border-neutral-200 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav className="scrollbar-hide flex gap-1 overflow-x-auto py-3">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-900"
              >
                {cat.label}
              </a>
            ))}
            <a
              href="#compare"
              className="shrink-0 rounded-full px-4 py-2 text-sm font-medium text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-900"
            >
              Compare
            </a>
          </nav>
        </div>
      </div>

      {/* ─── CATEGORIZED SERVICES ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                {/* Category Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-10"
                >
                  <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {category.label}
                  </span>
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-500">
                    {category.tagline}
                  </p>
                </motion.div>

                {/* Service Blocks */}
                <div className="space-y-8">
                  {category.services.map((service, i) => (
                    <ServiceBlock key={service.id} service={service} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON TABLE ─── */}
      <section
        id="compare"
        className="scroll-mt-32 border-t border-neutral-200 bg-neutral-50 py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Quick Comparison
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Find the right service faster
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-500">
              Compare timelines, pricing, and engagement models at a glance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-sm"
          >
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-6 py-4 font-semibold text-neutral-900">Service</th>
                  <th className="px-6 py-4 font-semibold text-neutral-900">Timeline</th>
                  <th className="px-6 py-4 font-semibold text-neutral-900">Starting From</th>
                  <th className="px-6 py-4 font-semibold text-neutral-900">Ideal For</th>
                  <th className="px-6 py-4 font-semibold text-neutral-900">Engagement</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.service}
                    className={`border-b border-neutral-100 transition-colors hover:bg-neutral-50 ${
                      i === comparisonRows.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <td className="px-6 py-4 font-medium text-neutral-900">
                      {row.service}
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{row.timeline}</td>
                    <td className="px-6 py-4 font-medium text-neutral-900">
                      {row.startingFrom}
                    </td>
                    <td className="px-6 py-4 text-neutral-600">{row.idealFor}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          row.engagement === "Retainer"
                            ? "bg-neutral-900 text-white"
                            : "bg-neutral-100 text-neutral-600"
                        }`}
                      >
                        {row.engagement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          <div className="mt-8 text-center">
            <Link
              href="/pricing-calculator"
              className="group inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900"
            >
              Get exact pricing with our calculator
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WHO THIS IS FOR ─── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Who We Serve
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Built for organizations that take technology seriously
            </h2>
          </motion.div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {audiences.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-200 p-8 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/[0.04]"
              >
                <a.icon className="h-6 w-6 text-neutral-900" />
                <h3 className="mt-4 text-lg font-bold text-neutral-900">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                  {a.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Quote className="mx-auto h-8 w-8 text-neutral-200" />
            <p className="mt-6 text-xl font-medium leading-relaxed text-neutral-700 lg:text-2xl">
              &ldquo;Togashi Technologies transformed our operations. What used to
              take weeks now takes hours. Their team didn&apos;t just build
              software — they understood our business.&rdquo;
            </p>
            <div className="mt-8">
              <p className="font-semibold text-neutral-900">
                Operations Director
              </p>
              <p className="text-sm text-neutral-500">
                Enterprise Client, Financial Services
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Not sure which service fits?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-neutral-400"
            >
              Book a free 30-minute consultation. We&apos;ll assess your needs and
              recommend the right engagement model.
            </motion.p>

            {/* Trust Bullets */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-400"
            >
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-white" />
                Dedicated team
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-white" />
                Transparent pricing
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-white" />
                Enterprise-grade security
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
                Book Your Free Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/pricing-calculator"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-8 py-4 text-sm font-medium text-white transition-all hover:border-neutral-500 hover:bg-neutral-800"
              >
                Pricing Calculator
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
