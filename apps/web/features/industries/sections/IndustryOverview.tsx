"use client";

import { motion } from "motion/react";
import Container from "../../../components/ui/Container";

interface IndustryOverviewProps {
  overview: {
    heading: string;
    description: string;
    paragraphs: string[];
  };
}

export default function IndustryOverview({ overview }: IndustryOverviewProps) {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 items-start">
          
          {/* Left Column: Heading */}
          <div className="md:col-span-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
                {overview.heading}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {overview.description}
              </p>
            </motion.div>
          </div>

          {/* Right Column: Deep Dive Paragraphs */}
          <div className="md:col-start-7 md:col-span-6 lg:col-start-6 lg:col-span-7 flex flex-col gap-8 md:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg prose-neutral dark:prose-invert max-w-none"
            >
              {overview.paragraphs.map((paragraph, idx) => (
                <p key={idx} className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
}
