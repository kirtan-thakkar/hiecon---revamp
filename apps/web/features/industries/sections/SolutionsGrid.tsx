"use client";

import { motion } from "motion/react";
import Container from "../../../components/ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";
import { MachineSolution } from "../types";

interface SolutionsGridProps {
  solutions: MachineSolution[];
  industrySlug: string;
}

export default function SolutionsGrid({ solutions, industrySlug }: SolutionsGridProps) {
  return (
    <section id="solutions" className="py-24 md:py-32 bg-background border-t border-border scroll-mt-24">
      <Container>
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
              Core Capabilities
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
              Machine Solutions
            </h2>
          </motion.div>
        </div>

        {/* Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
            >
              <Link 
                // Future expansion: /solutions/[industrySlug]/[machineSlug]
                href={`/solutions/${industrySlug}/${solution.slug}`}
                className="group flex flex-col h-full block"
              >
                {/* Image Reveal */}
                <div className="w-full aspect-[4/3] mb-8 overflow-hidden rounded-2xl bg-muted relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={solution.heroImage}
                    alt={solution.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 mix-blend-multiply opacity-90 grayscale group-hover:grayscale-0"
                  />
                </div>

                <div className="flex flex-col flex-1 border-t border-border pt-6">
                  <h3 className="text-2xl font-medium text-foreground mb-4 group-hover:text-brand-primary transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8 flex-1">
                    {solution.shortDescription}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-medium text-foreground transition-opacity group-hover:opacity-70">
                    Explore Solution <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
