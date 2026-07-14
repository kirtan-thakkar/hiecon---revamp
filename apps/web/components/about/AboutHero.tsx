"use client";

import { motion } from "motion/react";
import { Link } from 'next-view-transitions';
import Container from "../../components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import { ChevronRight } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="w-full">
      {/* Header Section */}
      <div className="relative pt-12 pb-24 mb-16 overflow-hidden border-b border-border/20 rounded-b-[2rem] md:rounded-b-[4rem]">
        <Container className="relative z-10">
          <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
            <span className="text-foreground">About</span>
          </nav>
          <div className="max-w-4xl pt-4">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
            >
              Who We Are
            </motion.p>
            <TextAnimate 
              animation="blurInUp" 
              as="h1" 
              by="word"
              className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
            >
              About Hiecon.
            </TextAnimate>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              Hiecon is an independent industrial automation company engineering and integrating systems since 1996.
            </motion.p>

          </div>
        </Container>
      </div>
    </div>
  );
}
