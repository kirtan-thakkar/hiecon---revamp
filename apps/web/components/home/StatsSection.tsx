"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";

export default function StatsSection() {
  return (
    <section className="py-24 md:py-40 bg-background border-t border-border">
      <Container>
        {/* Top Row: Intro & Massive Primary Metric */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start relative">
          
          {/* Intro */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 flex flex-col pt-4"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-brand-secondary mb-8">
              Trusted By Industry
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-8">
              Built on performance.<br />Measured in uptime.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              The world&apos;s leading manufacturers rely on our automation systems to keep their production lines moving with absolute precision.
            </p>
          </motion.div>

          {/* Massive Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-start-7 md:col-span-6 border-t border-border pt-8 md:mt-24"
          >
            <h3 className="text-8xl md:text-9xl lg:text-[10rem] font-medium tracking-tighter text-foreground leading-none mb-6 lg:mb-8 flex items-baseline">
              27<span className="text-brand-accent ml-2">+</span>
            </h3>
            <p className="text-sm lg:text-base font-bold tracking-widest uppercase text-muted-foreground">
              Years of Engineering Excellence
            </p>
          </motion.div>

        </div>

        {/* Bottom Row: Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mt-16 md:mt-32">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-4 border-t border-border pt-8"
          >
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground leading-none mb-6 flex items-baseline">
              750<span className="text-brand-accent ml-1">+</span>
            </h3>
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
              Industrial Customers Served
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-start-6 md:col-span-3 border-t border-border pt-8"
          >
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground leading-none mb-6 flex items-baseline">
              5k<span className="text-brand-accent ml-1">+</span>
            </h3>
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
              Projects Delivered
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="md:col-start-10 md:col-span-3 border-t border-border pt-8"
          >
            <h3 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground leading-none mb-6 flex items-baseline">
              36<span className="text-brand-accent ml-1">+</span>
            </h3>
            <p className="text-sm font-bold tracking-widest uppercase text-muted-foreground">
              Automation Experts
            </p>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
