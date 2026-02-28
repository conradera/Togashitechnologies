"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Mail, MapPin, Phone, Shield } from "lucide-react";

const services = [
  { label: "Custom Software", href: "/services#custom" },
  { label: "SaaS Development", href: "/services#saas" },
  { label: "Mobile Apps", href: "/services#mobile" },
  { label: "IT Consultancy", href: "/services#consultancy" },
  { label: "Managed IT", href: "/services#managed" },
  { label: "BPO Services", href: "/services#bpo" },
  { label: "IT Training", href: "/services#training" },
  { label: "CTO-as-a-Service", href: "/services#advisory" },
  { label: "Project Management", href: "/services#project-management" },
  { label: "Graphics & Design", href: "/services#graphics" },
];

const company = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Pricing", href: "/pricing-calculator" },
];

const industries = [
  "Government & Public Sector",
  "Education",
  "Financial Services",
  "Healthcare",
  "Logistics & Transport",
  "SMEs & Startups",
];

const columnVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      {/* CTA Band */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-between gap-6 border-b border-neutral-100 py-16 md:flex-row"
        >
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl font-bold tracking-tight text-neutral-900 md:text-3xl"
            >
              Ready to build something great?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-neutral-500"
            >
              Book a free 30-minute technical consultation — no commitment required.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="group flex items-center gap-2 rounded-full bg-neutral-900 px-8 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800 hover:shadow-lg hover:shadow-neutral-900/10"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Links Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand + Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div>
              <Image
                src="/logo.jpeg"
                alt="Togashi Technologies"
                width={120}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              Forward-thinking technology company delivering globally competitive
              SaaS platforms and digital transformation solutions.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Mail className="h-3.5 w-3.5 text-neutral-400" />
                hello@togashi.tech
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <Phone className="h-3.5 w-3.5 text-neutral-400" />
                Available on request
              </div>
              <div className="flex items-start gap-2 text-sm text-neutral-600">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-neutral-400" />
                Global delivery, local presence
              </div>
            </div>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="https://linkedin.com/company/togashi-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-500 transition-all hover:border-neutral-300 hover:text-neutral-900"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h4
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
            >
              Services
            </motion.h4>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h4
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
            >
              Company
            </motion.h4>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <motion.li key={item.label} variants={itemVariants}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.h4
              variants={itemVariants}
              className="text-xs font-semibold uppercase tracking-wider text-neutral-400"
            >
              Industries
            </motion.h4>
            <ul className="mt-4 space-y-3">
              {industries.map((item) => (
                <motion.li
                  key={item}
                  variants={itemVariants}
                  className="text-sm text-neutral-600"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-neutral-200 bg-neutral-50"
      >
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex flex-col items-center gap-1 sm:items-start">
              <p className="text-xs font-medium text-neutral-500">
                &copy; {new Date().getFullYear()} Togashi Technologies Co. Ltd. All rights
                reserved.
              </p>
              <p className="text-[11px] text-neutral-400">
                Registered technology company &middot; Global delivery
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5 text-[11px] text-neutral-400">
                <Shield className="h-3 w-3" />
                Data protection compliant
              </span>
              <Link
                href="/privacy"
                className="text-xs text-neutral-400 transition-colors hover:text-neutral-600"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs text-neutral-400 transition-colors hover:text-neutral-600"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
