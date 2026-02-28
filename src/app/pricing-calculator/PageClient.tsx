"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Cloud,
  Code2,
  Smartphone,
  Headphones,
  Cpu,
  Calculator,
  Send,
  GraduationCap,
  Wrench,
  Compass,
  Palette,
  ClipboardList,
} from "lucide-react";

type ServiceType = "saas" | "custom" | "mobile" | "bpo" | "consultancy" | "training" | "managed" | "advisory" | "graphics" | "project-management";
type ProjectSize = "small" | "medium" | "large" | "enterprise";
type Timeline = "standard" | "accelerated" | "urgent";

interface FormState {
  service: ServiceType | null;
  size: ProjectSize | null;
  timeline: Timeline | null;
  features: string[];
  name: string;
  email: string;
  company: string;
  details: string;
}

const serviceOptions = [
  {
    id: "project-management" as ServiceType,
    icon: ClipboardList,
    title: "Project Management Services",
    description: "End-to-end project delivery",
    basePrice: 3000,
  },
  {
    id: "saas" as ServiceType,
    icon: Cloud,
    title: "SaaS Development",
    description: "Scalable subscription platforms",
    basePrice: 5000,
  },
  {
    id: "custom" as ServiceType,
    icon: Code2,
    title: "Custom Software",
    description: "Tailored business applications",
    basePrice: 4000,
  },
  {
    id: "mobile" as ServiceType,
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS, Android & cross-platform",
    basePrice: 4500,
  },
  {
    id: "bpo" as ServiceType,
    icon: Headphones,
    title: "BPO Services",
    description: "IT-enabled outsourcing",
    basePrice: 2000,
  },
  {
    id: "consultancy" as ServiceType,
    icon: Cpu,
    title: "IT Consultancy",
    description: "Digital transformation advisory",
    basePrice: 3000,
  },
  {
    id: "training" as ServiceType,
    icon: GraduationCap,
    title: "IT Training & Capacity Building",
    description: "Corporate training & bootcamps",
    basePrice: 2500,
  },
  {
    id: "managed" as ServiceType,
    icon: Wrench,
    title: "Managed IT Services",
    description: "IT support, monitoring & maintenance",
    basePrice: 2000,
  },
  {
    id: "advisory" as ServiceType,
    icon: Compass,
    title: "Strategic Advisory & CTO-as-a-Service",
    description: "Fractional CTO & digital roadmapping",
    basePrice: 3500,
  },
  {
    id: "graphics" as ServiceType,
    icon: Palette,
    title: "Graphics Designing",
    description: "Brand identity & creative design",
    basePrice: 1500,
  },
];

const sizeOptions = [
  {
    id: "small" as ProjectSize,
    title: "Starter",
    description: "Basic functionality, 1-3 core features",
    multiplier: 1,
  },
  {
    id: "medium" as ProjectSize,
    title: "Growth",
    description: "Full-featured, 4-8 modules",
    multiplier: 2.2,
  },
  {
    id: "large" as ProjectSize,
    title: "Scale",
    description: "Complex system, 8-15 modules",
    multiplier: 3.8,
  },
  {
    id: "enterprise" as ProjectSize,
    title: "Enterprise",
    description: "Full enterprise suite, 15+ modules",
    multiplier: 6,
  },
];

const timelineOptions = [
  {
    id: "standard" as Timeline,
    title: "Standard",
    description: "Optimal timeline for quality delivery",
    multiplier: 1,
    badge: "Best value",
  },
  {
    id: "accelerated" as Timeline,
    title: "Accelerated",
    description: "Faster delivery with added resources",
    multiplier: 1.35,
    badge: "Popular",
  },
  {
    id: "urgent" as Timeline,
    title: "Urgent",
    description: "Priority delivery, dedicated team",
    multiplier: 1.75,
    badge: "Fastest",
  },
];

const featureAddons: Record<ServiceType, { id: string; label: string; price: number }[]> = {
  "project-management": [
    { id: "agile", label: "Agile & Scrum Coaching", price: 1200 },
    { id: "resource", label: "Resource Planning & Allocation", price: 1000 },
    { id: "risk", label: "Risk Management Framework", price: 800 },
    { id: "reporting", label: "Executive Reporting Dashboard", price: 1500 },
    { id: "qa", label: "Quality Assurance Oversight", price: 900 },
    { id: "pmo", label: "PMO Setup & Governance", price: 2000 },
  ],
  saas: [
    { id: "auth", label: "Advanced Auth (SSO, 2FA)", price: 800 },
    { id: "billing", label: "Subscription Billing Engine", price: 1200 },
    { id: "analytics", label: "Analytics Dashboard", price: 1000 },
    { id: "api", label: "Public API & Webhooks", price: 900 },
    { id: "multitenancy", label: "Multi-tenant Architecture", price: 1500 },
    { id: "realtime", label: "Real-time Notifications", price: 700 },
  ],
  custom: [
    { id: "erp", label: "ERP Module Integration", price: 1500 },
    { id: "reporting", label: "Advanced Reporting Engine", price: 1000 },
    { id: "workflow", label: "Workflow Automation", price: 1200 },
    { id: "api", label: "Third-party API Integration", price: 800 },
    { id: "migration", label: "Data Migration Service", price: 900 },
    { id: "roles", label: "Role-based Access Control", price: 600 },
  ],
  mobile: [
    { id: "offline", label: "Offline Mode Support", price: 800 },
    { id: "push", label: "Push Notifications", price: 400 },
    { id: "payment", label: "In-app Payments", price: 1000 },
    { id: "maps", label: "Maps & Location Services", price: 700 },
    { id: "camera", label: "Camera & Media Integration", price: 500 },
    { id: "biometric", label: "Biometric Authentication", price: 600 },
  ],
  bpo: [
    { id: "247", label: "24/7 Support Coverage", price: 1500 },
    { id: "multilang", label: "Multi-language Support", price: 800 },
    { id: "crm", label: "CRM Integration", price: 600 },
    { id: "reporting", label: "Custom Reporting", price: 500 },
    { id: "quality", label: "Quality Monitoring", price: 700 },
    { id: "training", label: "Agent Training Program", price: 400 },
  ],
  consultancy: [
    { id: "audit", label: "Full Technology Audit", price: 2000 },
    { id: "security", label: "Cybersecurity Assessment", price: 1500 },
    { id: "cloud", label: "Cloud Migration Plan", price: 1200 },
    { id: "automation", label: "Process Automation Blueprint", price: 1000 },
    { id: "training", label: "Team Training Sessions", price: 800 },
    { id: "roadmap", label: "12-month Technology Roadmap", price: 1500 },
  ],
  training: [
    { id: "corporate", label: "Corporate Training Program", price: 1500 },
    { id: "bootcamp", label: "Coding Bootcamp Package", price: 2000 },
    { id: "cybersec", label: "Cybersecurity Awareness Program", price: 1200 },
    { id: "gov", label: "Government Digital Skills Program", price: 1800 },
    { id: "workshop", label: "Digital Transformation Workshop", price: 1000 },
    { id: "capacity", label: "Institutional Capacity Building", price: 1500 },
  ],
  managed: [
    { id: "monitoring", label: "24/7 Remote System Monitoring", price: 1200 },
    { id: "helpdesk", label: "IT Helpdesk Outsourcing", price: 1000 },
    { id: "sla", label: "Premium SLA Support Contract", price: 1500 },
    { id: "maintenance", label: "Monthly Maintenance Package", price: 800 },
    { id: "aiml", label: "AI/ML Solution Deployment", price: 2500 },
    { id: "hardware", label: "Computer Servicing & Maintenance", price: 600 },
  ],
  advisory: [
    { id: "cto", label: "Fractional CTO Engagement", price: 3000 },
    { id: "roadmap", label: "Digital Roadmap Development", price: 2000 },
    { id: "architecture", label: "Technology Architecture Planning", price: 1800 },
    { id: "vendor", label: "Vendor Evaluation & Selection", price: 1200 },
    { id: "procurement", label: "Procurement Advisory Service", price: 1000 },
    { id: "governance", label: "Technology Governance Framework", price: 1500 },
  ],
  graphics: [
    { id: "branding", label: "Brand Identity & Logo Design", price: 1200 },
    { id: "uiux", label: "UI/UX Design & Prototyping", price: 1500 },
    { id: "marketing", label: "Marketing Materials Package", price: 800 },
    { id: "social", label: "Social Media Graphics Pack", price: 600 },
    { id: "print", label: "Print Media & Publication Design", price: 900 },
    { id: "pitch", label: "Presentation & Pitch Deck Design", price: 700 },
  ],
};

function AnimatedPrice({ value }: { value: number }) {
  const spring = useSpring(0, { stiffness: 80, damping: 20 });
  const display = useTransform(spring, (v) =>
    Math.round(v).toLocaleString()
  );
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    spring.set(value);
  }, [value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => setDisplayValue(v));
    return unsubscribe;
  }, [display]);

  return (
    <motion.span
      key={value}
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      ${displayValue}
    </motion.span>
  );
}

export default function PricingCalculator() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    service: null,
    size: null,
    timeline: null,
    features: [],
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const estimate = useMemo(() => {
    if (!form.service || !form.size || !form.timeline) return 0;
    const base =
      serviceOptions.find((s) => s.id === form.service)?.basePrice ?? 0;
    const sizeMultiplier =
      sizeOptions.find((s) => s.id === form.size)?.multiplier ?? 1;
    const timeMultiplier =
      timelineOptions.find((t) => t.id === form.timeline)?.multiplier ?? 1;
    const addons = form.features.reduce((sum, fId) => {
      const addon = featureAddons[form.service!]?.find((f) => f.id === fId);
      return sum + (addon?.price ?? 0);
    }, 0);
    return Math.round((base * sizeMultiplier + addons) * timeMultiplier);
  }, [form]);

  const canProceed = () => {
    switch (step) {
      case 0:
        return form.service !== null;
      case 1:
        return form.size !== null;
      case 2:
        return form.timeline !== null;
      case 3:
        return true;
      case 4:
        return form.name && form.email;
      default:
        return false;
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const steps = ["Service", "Scope", "Timeline", "Add-ons", "Details"];

  return (
    <section className="relative min-h-screen bg-white pt-28 pb-20">
      <div className="grid-pattern absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
            <Calculator className="h-3 w-3" />
            Pricing Calculator
          </span>
          <h1 className="mt-6 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Get an instant estimate
          </h1>
          <p className="mt-3 text-neutral-500">
            Configure your project to see pricing in real-time.
          </p>
        </motion.div>

        {!submitted ? (
          <>
            {/* Progress */}
            <div className="mt-12 flex items-center justify-center gap-2">
              {steps.map((label, i) => (
                <div key={label} className="flex items-center gap-2">
                  <button
                    onClick={() => i < step && setStep(i)}
                    className={`flex h-8 items-center gap-2 rounded-full px-3 text-xs font-medium transition-all ${
                      i === step
                        ? "bg-neutral-900 text-white"
                        : i < step
                        ? "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                        : "bg-neutral-50 text-neutral-400"
                    }`}
                  >
                    {i < step ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <span>{i + 1}</span>
                    )}
                    <span className="hidden sm:inline">{label}</span>
                  </button>
                  {i < steps.length - 1 && (
                    <div
                      className={`h-px w-6 ${
                        i < step ? "bg-neutral-300" : "bg-neutral-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Estimate Preview */}
            {form.service && form.size && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-8 overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50 p-6 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                  Estimated Investment
                </p>
                <p className="mt-2 text-4xl font-semibold tabular-nums text-neutral-900">
                  <AnimatedPrice value={estimate} />
                  <span className="text-lg font-normal text-neutral-400">
                    {" "}
                    USD
                  </span>
                </p>
                <p className="mt-1 text-xs text-neutral-400">
                  Final pricing may vary based on detailed requirements
                </p>
              </motion.div>
            )}

            {/* Step Content */}
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {/* Step 0: Service Selection */}
                {step === 0 && (
                  <motion.div
                    key="step-0"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <h2 className="text-lg font-semibold text-neutral-900">
                      What service do you need?
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {serviceOptions.map((opt) => (
                        <motion.button
                          key={opt.id}
                          onClick={() =>
                            setForm({ ...form, service: opt.id, features: [] })
                          }
                          whileTap={{ scale: 0.97 }}
                          animate={
                            form.service === opt.id
                              ? { scale: [1, 1.02, 1] }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.25 }}
                          className={`group flex items-start gap-4 rounded-xl border p-5 text-left transition-all ${
                            form.service === opt.id
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-200 bg-white hover:border-neutral-300"
                          }`}
                        >
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                              form.service === opt.id
                                ? "bg-white/10"
                                : "bg-neutral-100"
                            }`}
                          >
                            <opt.icon
                              className={`h-5 w-5 ${
                                form.service === opt.id
                                  ? "text-white"
                                  : "text-neutral-600"
                              }`}
                            />
                          </div>
                          <div>
                            <p className="font-medium">{opt.title}</p>
                            <p
                              className={`mt-0.5 text-sm ${
                                form.service === opt.id
                                  ? "text-white/70"
                                  : "text-neutral-500"
                              }`}
                            >
                              {opt.description}
                            </p>
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 1: Project Size */}
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <h2 className="text-lg font-semibold text-neutral-900">
                      What&apos;s the project scope?
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {sizeOptions.map((opt) => (
                        <motion.button
                          key={opt.id}
                          onClick={() =>
                            setForm({ ...form, size: opt.id })
                          }
                          whileTap={{ scale: 0.97 }}
                          animate={
                            form.size === opt.id
                              ? { scale: [1, 1.02, 1] }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.25 }}
                          className={`rounded-xl border p-5 text-left transition-all ${
                            form.size === opt.id
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-200 bg-white hover:border-neutral-300"
                          }`}
                        >
                          <p className="font-medium">{opt.title}</p>
                          <p
                            className={`mt-1 text-sm ${
                              form.size === opt.id
                                ? "text-white/70"
                                : "text-neutral-500"
                            }`}
                          >
                            {opt.description}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Timeline */}
                {step === 2 && (
                  <motion.div
                    key="step-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <h2 className="text-lg font-semibold text-neutral-900">
                      What&apos;s your preferred timeline?
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {timelineOptions.map((opt) => (
                        <motion.button
                          key={opt.id}
                          onClick={() =>
                            setForm({ ...form, timeline: opt.id })
                          }
                          whileTap={{ scale: 0.97 }}
                          animate={
                            form.timeline === opt.id
                              ? { scale: [1, 1.02, 1] }
                              : { scale: 1 }
                          }
                          transition={{ duration: 0.25 }}
                          className={`rounded-xl border p-5 text-left transition-all ${
                            form.timeline === opt.id
                              ? "border-neutral-900 bg-neutral-900 text-white"
                              : "border-neutral-200 bg-white hover:border-neutral-300"
                          }`}
                        >
                          <span
                            className={`inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${
                              form.timeline === opt.id
                                ? "bg-white/20 text-white"
                                : "bg-neutral-100 text-neutral-500"
                            }`}
                          >
                            {opt.badge}
                          </span>
                          <p className="mt-3 font-medium">{opt.title}</p>
                          <p
                            className={`mt-1 text-sm ${
                              form.timeline === opt.id
                                ? "text-white/70"
                                : "text-neutral-500"
                            }`}
                          >
                            {opt.description}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Feature Add-ons */}
                {step === 3 && form.service && (
                  <motion.div
                    key="step-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-3"
                  >
                    <h2 className="text-lg font-semibold text-neutral-900">
                      Any additional features?
                    </h2>
                    <p className="text-sm text-neutral-500">
                      Select any add-ons you need. These are optional.
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {featureAddons[form.service].map((addon) => {
                        const selected = form.features.includes(addon.id);
                        return (
                          <button
                            key={addon.id}
                            onClick={() =>
                              setForm({
                                ...form,
                                features: selected
                                  ? form.features.filter((f) => f !== addon.id)
                                  : [...form.features, addon.id],
                              })
                            }
                            className={`flex items-center justify-between rounded-xl border p-4 text-left transition-all ${
                              selected
                                ? "border-neutral-900 bg-neutral-50"
                                : "border-neutral-200 bg-white hover:border-neutral-300"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`flex h-5 w-5 items-center justify-center rounded border ${
                                  selected
                                    ? "border-neutral-900 bg-neutral-900"
                                    : "border-neutral-300"
                                }`}
                              >
                                {selected && (
                                  <Check className="h-3 w-3 text-white" />
                                )}
                              </div>
                              <span className="text-sm font-medium text-neutral-700">
                                {addon.label}
                              </span>
                            </div>
                            <span className="text-sm font-medium text-neutral-400">
                              +${addon.price}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Contact Details */}
                {step === 4 && (
                  <motion.div
                    key="step-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h2 className="text-lg font-semibold text-neutral-900">
                      Your details
                    </h2>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="text-sm font-medium text-neutral-700">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-neutral-700">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-sm font-medium text-neutral-700">
                          Company
                        </label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          placeholder="Company name"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="text-sm font-medium text-neutral-700">
                          Project Details
                        </label>
                        <textarea
                          value={form.details}
                          onChange={(e) =>
                            setForm({ ...form, details: e.target.value })
                          }
                          rows={4}
                          className="mt-1.5 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          placeholder="Tell us about your project requirements..."
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                  step === 0
                    ? "invisible"
                    : "border border-neutral-200 text-neutral-700 hover:border-neutral-300"
                }`}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back
              </button>

              {step < 4 ? (
                <button
                  onClick={() => canProceed() && setStep(step + 1)}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    canProceed()
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "cursor-not-allowed bg-neutral-200 text-neutral-400"
                  }`}
                >
                  Continue
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                    canProceed()
                      ? "bg-neutral-900 text-white hover:bg-neutral-800"
                      : "cursor-not-allowed bg-neutral-200 text-neutral-400"
                  }`}
                >
                  Submit Request
                  <Send className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          </>
        ) : (
          /* Success State */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
            className="mt-16 rounded-2xl border border-neutral-100 bg-neutral-50 p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 12,
              }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900"
            >
              <Check className="h-8 w-8 text-white" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-2xl font-semibold text-neutral-900"
            >
              Request Submitted
            </motion.h2>
            <p className="mt-3 text-neutral-500">
              Thank you, {form.name}! Your estimated investment of{" "}
              <strong className="text-neutral-900">
                ${estimate.toLocaleString()} USD
              </strong>{" "}
              has been noted. Our team will reach out within 24 hours with a
              detailed proposal.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-neutral-800"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
