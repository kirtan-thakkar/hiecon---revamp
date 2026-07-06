"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";

const stats = [
  {
    value: "27+",
    label: "Years of Industry Experience",
  },
  {
    value: "750+",
    label: "Valued Customers",
  },
  {
    value: "36+",
    label: "Team Strength",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-neutral-950 shadow-sm border border-neutral-100 dark:border-neutral-800"
            >
              <div className="text-5xl lg:text-7xl font-bold bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600 bg-clip-text text-transparent mb-4">
                {stat.value}
              </div>
              <div className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
