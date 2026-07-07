"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Container from "../ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import { cn } from "@workspace/ui/lib/utils";

const Section = ({ 
  label, 
  title, 
  description, 
  image, 
  reverse = false,
}: {
  label: string;
  title: string;
  description: string;
  image?: string;
  reverse?: boolean;
}) => {
  return (
    <div className="relative py-24 md:py-32 lg:py-48 min-h-screen flex items-center">
      <Container className="w-full">
        <div className={cn("grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center", reverse && "lg:flex-row-reverse")}>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            className={cn("flex flex-col", reverse ? "lg:pl-12" : "lg:pr-12")}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: false }}
              className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
            >
              {label}
            </motion.p>
            
            <div className="mb-6">
              <TextAnimate 
                animation="blurInUp" 
                as="h3" 
                by="line"
                once={false}
                className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05]"
              >
                {title}
              </TextAnimate>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, filter: "blur(4px)" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: false }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              {description}
            </motion.p>
          </motion.div>

          {/* Media Content */}
          {image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
              className="relative aspect-square md:aspect-5/5 w-full bg-muted overflow-hidden -mb-20 rounded-2xl"
            >
              <div className="absolute inset-0 bg-background/5 z-10 "  />
              <motion.img 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                exit={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false }}
                src={image} 
                alt={title.replace(/\n/g, ' ')}
                className="absolute inset-0 w-full h-full rounded-2xl  object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              />
            </motion.div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={containerRef} className="relative bg-background overflow-hidden border-t border-border/50">
      <Section 
        label="01 / The Challenge"
        title={"Every factory has\na bottleneck"}
        description="Before we write a single line of PLC code, we analyze your production line to find the exact point of friction costing you throughput."
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
      />
      
      <Section 
        label="02 / Engineering"
        title={"Architecting\nthe solution"}
        description="We engineer complete hardware topologies. From specifying high-torque servo drives to designing distributed I/O networks that guarantee microsecond synchronization."
        image="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop"
        reverse
      />

      <Section 
        label="03 / Partners"
        title={"Global Components\nOne Integrated Solution"}
        description="We aren't tied to a single vendor. Our engineers select the ideal combination of ABB, Siemens, Yaskawa, and Weintek technologies to build automation solutions tailored to your manufacturing requirements."
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop"
      />

      <Section 
        label="04 / Deployment"
        title={"Commission on\nthe factory floor"}
        description="Our involvement doesn't end with a schematic. Our engineers deploy to your facility, wiring cabinets, tuning servo loops, and rigorously testing safety zones until the line runs flawlessly."
        image="https://images.unsplash.com/photo-1581092921461-7031e4bfb314?q=80&w=1200&auto=format&fit=crop"
        reverse
      />

      <div className="relative py-32 md:py-48 flex items-center justify-center text-center">
        <Container className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: false }}
              className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-12"
            >
              05 / Support
            </motion.p>
            <div className="max-w-4xl mx-auto mb-24">
              <TextAnimate 
                animation="blurInUp" 
                as="h2" 
                by="word"
                once={false}
                className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
              >
                27 years of keeping production lines moving
              </TextAnimate>
              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                We don't just engineer systems—we partner with you for the lifecycle of your facility. Our dedicated support teams ensure your operations never miss a beat.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-border/50 pt-16 max-w-5xl mx-auto">
              {[
                { v: "27", l: "Years Active" },
                { v: "750+", l: "Facilities" },
                { v: "36", l: "Engineers" },
                { v: "4hr", l: "Avg. Response" }
              ].map((m, i) => (
                <motion.div 
                  key={m.l}
                  initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
                  whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(8px)", y: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: false }}
                  className="flex flex-col items-center justify-center"
                >
                  <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">{m.l}</span>
                  <span className="text-5xl md:text-6xl font-medium text-foreground">{m.v}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}