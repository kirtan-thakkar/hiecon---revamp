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

          {/* Content Column (Editorial Storytelling) */}
          <div className="md:col-span-6 md:col-start-7 flex flex-col gap-16 md:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-8 border-t border-border pt-8"
            >
              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://placehold.co/1200x800/e5e5e5/a3a3a3?text=Custom+PLC+Cabinets" 
                  alt="Custom PLC Cabinets"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                  Custom Automation Architecture
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Every manufacturing line is unique. We design tailor-made automation architectures targeting your specific operational bottlenecks. From custom PLC cabinet assembly to full-scale SCADA deployments, our solutions are engineered for precise integration.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 border-t border-border pt-8"
            >
              <div className="w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden bg-muted">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://placehold.co/1200x800/e5e5e5/a3a3a3?text=Precision+Servo+Drives" 
                  alt="Precision Servo Drives"
                  className="w-full h-full object-cover mix-blend-multiply opacity-90"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                  Uncompromising Component Quality
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We maintain authorized alliances with the world&apos;s most trusted automation hardware brands. By sourcing industrial-grade servo drives, ruggedized PCs, and advanced motion controllers, we guarantee system longevity in the harshest industrial environments.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-8 border-t border-border pt-8"
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-medium text-foreground mb-4">
                  Proactive Technical Support
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our commitment doesn&apos;t end at deployment. We provide comprehensive after-sales assistance, proactive system maintenance, and rapid troubleshooting to ensure your production lines experience absolute minimum downtime.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
