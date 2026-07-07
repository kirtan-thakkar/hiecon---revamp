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
        
        {/* Immersive List Layout */}
        <div className="flex flex-col border-t border-border">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-border items-start hover:bg-muted/20 transition-colors duration-500 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              {/* Logo Area (Monochrome to Color) */}
              <div className="lg:col-span-4 flex items-center">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {partner.name}
                </span>
              </div>
              
              {/* Description */}
              <div className="lg:col-span-4 flex flex-col justify-center pt-2 lg:pt-0">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
              
              {/* Solutions & CTA */}
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0">
                <div className="flex flex-wrap gap-2 justify-start lg:justify-end mb-8 lg:mb-6">
                  {partner.solutions.map((solution, i) => (
                    <Badge key={i} variant="technology">
                      {solution}
                    </Badge>
                  ))}
                </div>
                <Link 
                  href={`/partners/${partner.name.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="inline-flex items-center text-sm font-medium text-foreground transition-opacity lg:opacity-0 lg:group-hover:opacity-100"
                >
                  Explore Products <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
