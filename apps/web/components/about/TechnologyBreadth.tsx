"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function TechnologyBreadth() {
  const technologies = [
    "PLCs",
    "IPCs",
    "HMIs",
    "AC Drives",
    "Motion Control",
    "Industrial Communication",
    "Automation Software"
  ];

  return (
    <section className="relative w-full py-24 bg-card text-card-foreground">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left: Breadth Counters */}
          <div className="flex flex-col gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
                Application Breadth
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our experience spans across a massive spectrum of manufacturing environments, allowing us to adapt proven solutions to new challenges.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl font-light text-brand-primary">14</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Industries Served</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="flex flex-col gap-2"
              >
                <span className="text-5xl font-light text-brand-primary">14</span>
                <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">Product Families</span>
              </motion.div>
            </div>
          </div>

          {/* Right: Technology Ecosystem */}
          <div className="flex flex-col gap-8 md:pl-12 md:border-l md:border-border">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <h3 className="text-3xl font-medium tracking-tight mb-4">
                Technology Ecosystem
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We engineer and integrate comprehensive automation architectures utilizing a wide array of core technologies.
              </p>
            </motion.div>

            <ul className="flex flex-col gap-4">
              {technologies.map((tech, i) => (
                <motion.li 
                  key={tech}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: 0.2 + (i * 0.05), ease: "easeOut" }}
                  className="flex items-center gap-3 text-lg font-medium"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                  {tech}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
