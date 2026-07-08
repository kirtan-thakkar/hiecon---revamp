"use client";

import { motion } from "motion/react";
import { Link } from 'next-view-transitions';
import Container from "../../components/ui/Container";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative w-full py-32 md:py-48 bg-background border-t border-border">
      <Container className="flex flex-col items-center justify-center text-center gap-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 items-center"
        >
          <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground max-w-3xl">
            Ready to upgrade your production line?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            Talk to our engineering team today and discover how Hiecon can optimize your manufacturing processes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mt-8"
        >
          <Link href="/contact" className="group flex items-center justify-center rounded-full bg-primary text-primary-foreground px-10 py-5 text-xl font-medium transition-transform hover:scale-105 shadow-xl shadow-brand-primary/20">
            Talk to an Engineer <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
      </Container>
    </section>
  );
}
