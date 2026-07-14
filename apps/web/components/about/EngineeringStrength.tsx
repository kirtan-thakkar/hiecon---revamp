"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function EngineeringStrength() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-card text-card-foreground border-t border-border">
      <Container>
        <div className="flex flex-col gap-24">
          
          <div className="max-w-5xl">
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-10"
            >
              Built around engineering,<br className="hidden md:block" /> not a single vendor.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl"
            >
              Our engineers work across control systems, motion, industrial communication, and software platforms to select and integrate the technologies that best fit each application. This hands-on, multi-platform experience allows Hiecon to move from requirement to implementation efficiently while delivering solutions built around the customer's actual production environment.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col gap-6 pt-12 border-t border-border/50 max-w-3xl"
          >
            <p className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
              Nearly three decades of experience. Thousands of machines in operation. One engineering approach: understand the application, integrate the right technology, and build systems that perform in the real world.
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
