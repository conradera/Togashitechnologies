"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Clock,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "hello@togashi.tech" },
  { icon: Phone, label: "Phone", value: "Available on request" },
  { icon: MapPin, label: "Location", value: "Global delivery, local presence" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours" },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const formFieldVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white pt-32 pb-20">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-xs font-medium text-neutral-600">
              <MessageSquare className="h-3 w-3" />
              Contact Us
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl">
              Let&apos;s start a
              <br />
              <span className="text-neutral-400">conversation</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-500">
              Whether you have a project in mind, a question about our services,
              or just want to explore possibilities, we&apos;re here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-8"
              >
                <motion.div variants={staggerItem}>
                  <h2 className="text-xl font-semibold text-neutral-900">
                    Get in touch
                  </h2>
                  <p className="mt-2 text-sm text-neutral-500">
                    We respond to all inquiries within 24 hours during business
                    days.
                  </p>
                </motion.div>

                <div className="space-y-6">
                  {contactItems.map((item) => (
                    <motion.div
                      key={item.label}
                      variants={staggerItem}
                      className="flex items-start gap-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-100">
                        <item.icon className="h-4 w-4 text-neutral-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          {item.label}
                        </p>
                        <p className="mt-0.5 text-sm text-neutral-500">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Info Cards */}
                <div className="space-y-3 pt-4">
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="rounded-xl bg-neutral-50 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Free Consultation
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">
                      Book a complimentary 30-minute session to discuss your
                      project requirements and get expert advice.
                    </p>
                  </motion.div>
                  <motion.div
                    variants={staggerItem}
                    whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    className="rounded-xl bg-neutral-50 p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Quick Estimate
                    </p>
                    <p className="mt-2 text-sm text-neutral-600">
                      Need pricing fast? Use our{" "}
                      <a
                        href="/pricing-calculator"
                        className="font-medium text-neutral-900 underline underline-offset-2"
                      >
                        pricing calculator
                      </a>{" "}
                      for instant estimates.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {!submitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-6"
                >
                  <motion.div
                    variants={formFieldVariants}
                    className="rounded-2xl border border-neutral-200 bg-white p-8"
                  >
                    <h3 className="text-lg font-semibold text-neutral-900">
                      Tell us about your project
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500">
                      Fill out the form below and we&apos;ll get back to you promptly.
                    </p>

                    <motion.div
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="mt-8 space-y-5"
                    >
                      <motion.div variants={formFieldVariants} className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium text-neutral-700">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
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
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                            placeholder="john@company.com"
                          />
                        </div>
                      </motion.div>

                      <motion.div variants={formFieldVariants}>
                        <label className="text-sm font-medium text-neutral-700">
                          Company
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              company: e.target.value,
                            })
                          }
                          className="mt-1.5 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          placeholder="Company name"
                        />
                      </motion.div>

                      <motion.div variants={formFieldVariants} className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="text-sm font-medium text-neutral-700">
                            Service Interested In
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                service: e.target.value,
                              })
                            }
                            className="mt-1.5 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          >
                            <option value="">Select a service</option>
                            <option value="project-management">Project Management Services</option>
                            <option value="saas">SaaS Development</option>
                            <option value="custom">Custom Software</option>
                            <option value="mobile">Mobile Apps</option>
                            <option value="bpo">BPO Services</option>
                            <option value="consultancy">IT Consultancy</option>
                            <option value="training">IT Training & Capacity Building</option>
                            <option value="managed">Managed IT Services</option>
                            <option value="advisory">Strategic Advisory & CTO-as-a-Service</option>
                            <option value="graphics">Graphics Designing</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-neutral-700">
                            Budget Range
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                budget: e.target.value,
                              })
                            }
                            className="mt-1.5 w-full appearance-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          >
                            <option value="">Select budget range</option>
                            <option value="<5k">Under $5,000</option>
                            <option value="5k-15k">$5,000 - $15,000</option>
                            <option value="15k-50k">$15,000 - $50,000</option>
                            <option value="50k+">$50,000+</option>
                          </select>
                        </div>
                      </motion.div>

                      <motion.div variants={formFieldVariants}>
                        <label className="text-sm font-medium text-neutral-700">
                          Project Details *
                        </label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          rows={5}
                          className="mt-1.5 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition-colors focus:border-neutral-900"
                          placeholder="Tell us about your project, goals, and timeline..."
                        />
                      </motion.div>
                    </motion.div>

                    <motion.button
                      variants={formFieldVariants}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 py-4 text-sm font-medium text-white transition-all hover:bg-neutral-800"
                    >
                      Send Message
                      <Send className="h-4 w-4" />
                    </motion.button>
                  </motion.div>
                </motion.form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 150 }}
                  className="flex flex-col items-center rounded-2xl border border-neutral-100 bg-neutral-50 p-12 text-center"
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
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-neutral-900"
                  >
                    <Check className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 text-2xl font-semibold text-neutral-900"
                  >
                    Message Sent
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mt-3 max-w-md text-neutral-500"
                  >
                    Thank you, {formData.name}! We&apos;ve received your
                    message and will respond within 24 hours.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        service: "",
                        budget: "",
                        message: "",
                      });
                    }}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 px-6 py-3 text-sm font-medium text-neutral-700 transition-all hover:border-neutral-300"
                  >
                    Send another message
                    <ArrowRight className="h-3.5 w-3.5" />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
