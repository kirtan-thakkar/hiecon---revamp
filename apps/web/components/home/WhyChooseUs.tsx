"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          
          {/* Header Column */}
          <div className="md:col-span-5">
            <div className="sticky top-32 flex flex-col justify-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
                  Why Hiecon
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-8">
                  Engineering confidence,<br />built over 27 years.
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
                  We don&apos;t just supply components&mdash;we architect complete industrial automation systems that drive manufacturing efficiency, reliability, and scale.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-16 md:gap-24">
            
            {/* Large Highlight */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border-t border-border pt-8"
            >
              <h3 className="text-7xl md:text-8xl lg:text-9xl font-medium text-foreground tracking-tighter mb-4 leading-none">
                27+
              </h3>
              <p className="text-2xl md:text-3xl text-foreground font-medium mb-4">
                Years of Industry Experience
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
                Decades of hands-on expertise navigating complex industrial environments and evolving manufacturing technologies.
              </p>
            </motion.div>

            {/* Medium Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border-t border-border pt-6"
              >
                <h3 className="text-5xl md:text-6xl font-medium text-foreground tracking-tighter mb-4">
                  750+
                </h3>
                <p className="text-xl text-foreground font-medium mb-3">
                  Valued Customers
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Delivering continuous value and system reliability to manufacturing leaders globally.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border-t border-border pt-6"
              >
                <h3 className="text-5xl md:text-6xl font-medium text-foreground tracking-tighter mb-4">
                  36+
                </h3>
                <p className="text-xl text-foreground font-medium mb-3">
                  Expert Engineers
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A dedicated team of domain experts ready to design, deploy, and scale your operations.
                </p>
              </motion.div>
            </div>

            {/* Small Highlights */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="border-t border-border pt-8 grid grid-cols-1 gap-8"
            >
               <div className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1">Trusted Global Technology Partners</p>
                    <p className="text-muted-foreground leading-relaxed">Authorized alliances with the world&apos;s leading automation hardware brands.</p>
                  </div>
               </div>
               <div className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1">Customized Automation Solutions</p>
                    <p className="text-muted-foreground leading-relaxed">Tailor-made architectures for highly specific operational requirements.</p>
                  </div>
               </div>
               <div className="flex items-start gap-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2.5 shrink-0" />
                  <div>
                    <p className="text-lg font-medium text-foreground mb-1">Fast & Reliable Technical Support</p>
                    <p className="text-muted-foreground leading-relaxed">Comprehensive after-sales assistance and proactive system maintenance.</p>
                  </div>
               </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
