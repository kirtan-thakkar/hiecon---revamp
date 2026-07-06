"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";

const partners = [
  "Siemens",
  "Rockwell Automation",
  "ABB",
  "Schneider Electric",
  "Mitsubishi Electric",
  "Omron",
  "Fanuc",
  "Yaskawa",
];

export default function TechnologyPartners() {
  // Duplicate the array to create a seamless infinite loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-24 bg-white dark:bg-neutral-950 overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest text-neutral-500 uppercase"
          >
            Trusted Technology Partners
          </motion.h2>
        </div>
      </Container>
      
      <div className="relative flex overflow-hidden group">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-linear-to-r from-white to-transparent dark:from-neutral-950" />
        <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-linear-to-l from-white to-transparent dark:from-neutral-950" />

        <motion.div
          className="flex whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <div 
              key={index}
              className="flex items-center justify-center px-12 md:px-24"
            >
              {/* Placeholder for Logo */}
              <span className="text-xl md:text-3xl font-bold text-neutral-300 dark:text-neutral-600">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
