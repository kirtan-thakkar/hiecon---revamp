"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function CompanyIntro() {
  return (
    <section className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 bg-background">
      <Container>
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-8"
          >
            Hiecon is an independent industrial automation company engineering and integrating systems since 1996.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl"
          >
            We help OEMs and manufacturers turn complex automation requirements into reliable, production-ready systems. From system design and integration to implementation and long-term support, our engineers work across hardware, software, motion, control, and industrial communication technologies.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
