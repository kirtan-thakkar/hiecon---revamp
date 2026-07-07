"use client";

import { motion } from "motion/react";
import Container from "../../../components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function IndustryCTA() {
  return (
    <section className="py-32 md:py-48 bg-muted relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8">
              Ready to automate?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Speak with our senior engineering team to architect a custom solution for your manufacturing facility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex h-16 items-center justify-center rounded-full bg-foreground px-10 text-lg font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Talk to an Engineer
              </Link>
              <Link 
                href="mailto:sales@hiecon.com" 
                className="inline-flex h-16 items-center justify-center rounded-full border border-border bg-transparent px-10 text-lg font-medium text-foreground transition-colors hover:bg-background group"
              >
                Email Sales <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
      
      {/* Background abstract element (very subtle) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full opacity-30 pointer-events-none mix-blend-multiply">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/10 to-transparent blur-3xl rounded-full" />
      </div>
    </section>
  );
}
