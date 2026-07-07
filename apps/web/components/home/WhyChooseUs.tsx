"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";

export default function WhyChooseUs() {
  return (
    <section className="py-32 md:py-48 bg-background border-t border-border overflow-hidden">
      <Container>
        
        {/* Centered Editorial Anchor */}
        <div className="max-w-4xl mx-auto text-center mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-bold tracking-widest uppercase text-brand-secondary mb-8">
              Why Hiecon
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] mb-8">
              We don&apos;t just supply components.<br />We architect complete systems.
            </h2>
          </motion.div>
        </div>

        <div className="flex flex-col gap-32 md:gap-48">
          
          {/* Story 1: Architecture (Text Left, Image Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col order-2 lg:order-1"
            >
              <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                Custom Automation Architecture
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Every manufacturing line is unique. We design tailor-made automation architectures targeting your specific operational bottlenecks. From custom PLC cabinet assembly to full-scale SCADA deployments, our solutions are engineered for precise integration.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-start-7 lg:col-span-6 order-1 lg:order-2"
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-muted relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://placehold.co/1200x900/e5e5e5/a3a3a3?text=Custom+PLC+Cabinets" 
                  alt="Custom PLC Cabinets"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>
          </div>

          {/* Story 2: Quality (Image Left, Text Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-6"
            >
              <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-muted relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://placehold.co/1200x900/e5e5e5/a3a3a3?text=Precision+Servo+Drives" 
                  alt="Precision Servo Drives"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-[2s] hover:scale-105"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-start-8 lg:col-span-5 flex flex-col"
            >
              <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-6">
                Uncompromising Component Quality
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                We maintain authorized alliances with the world&apos;s most trusted automation hardware brands. By sourcing industrial-grade servo drives, ruggedized PCs, and advanced motion controllers, we guarantee system longevity in the harshest industrial environments.
              </p>
            </motion.div>
          </div>

          {/* Story 3: Support (Left-Aligned Typographic Anchor) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mt-8 md:mt-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-9 xl:col-span-8 flex flex-col border-t border-border pt-16 md:pt-24"
            >
              <h3 className="text-3xl md:text-4xl font-medium text-foreground mb-6 lg:mb-8">
                Proactive Technical Support
              </h3>
              <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground leading-snug font-medium">
                Our commitment doesn&apos;t end at deployment. We provide comprehensive after-sales assistance, proactive system maintenance, and rapid troubleshooting to ensure your production lines experience absolute minimum downtime.
              </p>
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
