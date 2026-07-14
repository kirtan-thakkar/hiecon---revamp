"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";
import { Badge } from "@workspace/ui/components/badge";
import { homeData } from "../../data/homeData";

const partners = homeData.technologyPartners.partners;

export default function TechnologyPartners() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-6">
              {homeData.technologyPartners.label}
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
              {homeData.technologyPartners.title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-md pb-2">
            {homeData.technologyPartners.description}
          </p>
        </motion.div>

        <div className="flex flex-col">
          {partners.map((partner, index) => (
            <motion.div 
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 border-b border-border items-start hover:bg-muted/20 transition-colors duration-500 -mx-4 px-4 sm:mx-0 sm:px-0"
            >
              <div className="lg:col-span-4 flex items-center">
                <span className="text-5xl md:text-6xl font-bold tracking-tighter text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                  {partner.name}
                </span>
              </div>

              <div className="lg:col-span-4 flex flex-col justify-center pt-2 lg:pt-0">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </div>
              
              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center pt-4 lg:pt-0">
                <div className="flex flex-wrap gap-2 justify-start lg:justify-end mb-8 lg:mb-6">
                  {partner.solutions.map((solution, i) => (
                    <Badge key={i} variant="technology">
                      {solution}
                    </Badge>
                  ))}
                </div>
                <Link 
                  href="/products"
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
