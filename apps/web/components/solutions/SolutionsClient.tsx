"use client";

import { motion } from "motion/react";
import { Link } from 'next-view-transitions';
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { solutions } from "@/data/solutions";

export default function SolutionsClient() {
  return (
    <div className="w-full">
      <Container>
        {/* Header Section */}
        <div className="max-w-4xl pt-12 pb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            Industry Solutions
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            Engineered for your industry.
          </TextAnimate>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            We don't build generic systems. We engineer deep, domain-specific automation architectures tailored to the physics of your production line.
          </motion.p>
        </div>

        {/* Solutions List */}
        <div className="flex flex-col gap-32 pb-32">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={solution.slug} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                
                {/* Text Side */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col gap-6 ${!isEven ? "lg:order-2 lg:pl-12" : "lg:pr-12"}`}
                >
                  <span className="text-sm font-medium text-muted-foreground">0{index + 1} /</span>
                  <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                    {solution.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                  <Link href={`/solutions/${solution.slug}`} className="group inline-flex items-center gap-2 text-brand-primary font-medium mt-4">
                    Explore Solution
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Image Side - Scroll Driven Pull Up */}
                <motion.div 
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted ${!isEven ? "lg:order-1" : ""}`}
                >
                  <div className="absolute inset-0 bg-background/5 z-10" />
                  <Image 
                    src={solution.image} 
                    alt={solution.title}
                    fill
                    loading="lazy"
                    className="object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  />
                </motion.div>

              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
