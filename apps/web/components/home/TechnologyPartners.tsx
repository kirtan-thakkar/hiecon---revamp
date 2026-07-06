"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";

const partners = [
  {
    name: "ABB",
    description: "Global leader in power and automation technologies.",
    solutions: ["AC Drives", "AC Motors", "PLC"],
  },
  {
    name: "Omron",
    description: "Advanced sensing and control technology for factory automation.",
    solutions: ["Automation Components", "Motion Controllers", "Industrial Robots", "Vision Systems"],
  },
  {
    name: "Weintek",
    description: "Specialized human-machine interfaces for industrial environments.",
    solutions: ["Standard HMI", "Advanced HMI", "Remote I/O", "IIoT Products"],
  },
  {
    name: "SERAD",
    description: "Precision motion control and high-performance servo systems.",
    solutions: ["Servo Drives & Motors"],
  },
  {
    name: "Golden Age",
    description: "Reliable servo motor solutions for dynamic industrial applications.",
    solutions: ["Servo Motors"],
  },
  {
    name: "WEG",
    description: "Leading manufacturer of robust electric motors and drive technology.",
    solutions: ["AC Motors"],
  },
];

export default function TechnologyPartners() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Our Network
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
              Technology Partners
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md pb-2">
            Authorized integrations with the world's most trusted manufacturing brands.
          </p>
        </motion.div>
        
        {/* Consistent Structural Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          {partners.map((partner) => (
            <div 
              key={partner.name}
              className="group flex flex-col h-full border-t border-border pt-8"
            >
              {/* 1. Fixed Logo Area */}
              <div className="h-16 flex items-center justify-start mb-8 transition-transform duration-500 group-hover:scale-[1.02] origin-left">
                <span className="text-4xl md:text-5xl font-medium tracking-tighter text-foreground">
                  {partner.name}
                </span>
              </div>

              {/* 2. Fixed Description Area (Clamped to 2 lines, exact 3.5rem height for text-lg) */}
              <div className="min-h-[3.5rem] mb-10">
                <p className="text-lg text-muted-foreground leading-relaxed line-clamp-2">
                  {partner.description}
                </p>
              </div>
              
              {/* 3. Solutions Area (flex-1 pushes CTA down, top aligns perfectly) */}
              <div className="flex flex-col flex-1 gap-5 mb-10">
                <p className="text-[10px] font-bold tracking-widest uppercase text-foreground">
                  Supported Solutions
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-3">
                  {partner.solutions.map((solution, i) => (
                    <Badge key={i} variant="technology">
                      {solution}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* 4. CTA Pinned to bottom */}
              <div className="mt-auto flex justify-start">
                <Link 
                  href={`/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="inline-flex items-center text-sm font-medium text-foreground transition-opacity hover:opacity-70"
                >
                  Explore Products <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
