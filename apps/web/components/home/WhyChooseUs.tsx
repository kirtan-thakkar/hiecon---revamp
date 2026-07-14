"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Container from "../ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

const MotionImage = motion.create(Image);
import { cn } from "@workspace/ui/lib/utils";
import { homeData } from "../../data/homeData";

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
              <MotionImage 
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                exit={{ scale: 1.1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: false }}
                src={image} 
                alt={title.replace(/\n/g, ' ')}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover transition-all duration-1000 rounded-2xl"
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
  
  const yearsOfExperience = new Date().getFullYear() - homeData.whyChooseUs.support.startYear;

  return (
    <section ref={containerRef} className="relative bg-background -mt-24 md:-mt-16  overflow-hidden ">
      {homeData.whyChooseUs.sections.map((section, idx) => (
        <Section 
          key={idx}
          label={section.label}
          title={section.title}
          description={section.description}
          image={section.image}
          reverse={section.reverse}
        />
      ))}

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
              {homeData.whyChooseUs.support.label}
            </motion.p>
            <div className="max-w-4xl mx-auto mb-24">
              <TextAnimate 
                animation="blurInUp" 
                as="h2" 
                by="word"
                once={false}
                className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
              >
                {`${yearsOfExperience} years of keeping production lines moving`}
              </TextAnimate>
              <motion.p
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: false }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
              >
                {homeData.whyChooseUs.support.description}
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-border/50 pt-16 max-w-5xl mx-auto">
              {[
                { v: yearsOfExperience.toString(), l: "Years Active" },
                ...homeData.whyChooseUs.support.stats
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