"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`${align === "center" ? "text-center" : "text-left"}`}
    >
      {badge && (
        <motion.span
          variants={itemVariants}
          className="inline-block rounded-full border border-neutral-200 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neutral-500"
        >
          {badge}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className="mt-4 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-4 text-lg text-neutral-500 ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
