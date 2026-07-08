"use client";

import { motion } from "motion/react";
import Container from "../../../components/ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { IndustryHero as IndustryHeroType } from "../types";

interface IndustryHeroProps {
  hero: IndustryHeroType;
  title: string; // The industry title for breadcrumb
}

export default function IndustryHero({ hero, title }: IndustryHeroProps) {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-background">
      <Container>
        
        {/* Breadcrumb & Label */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-8 justify-center">
              <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
              <span>/</span>
              <span className="text-foreground">{title}</span>
            </nav>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] max-w-5xl mx-auto mb-8">
              {hero.heading}
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-12">
              {hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#solutions" 
                className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-base font-medium text-background transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Solutions
              </a>
              <Link 
                href="/contact" 
                className="inline-flex h-14 items-center justify-center rounded-full border border-border bg-background px-8 text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                Talk to an Engineer
              </Link>
            </div>
          </motion.div>
        </div>

      </Container>

      {/* Industrial Hero Image */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="w-full px-4 md:px-8"
      >
        <div className="w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-muted relative mx-auto max-w-[1400px]">
          <Image 
            src={hero.heroImage} 
            alt={title}
            fill
            loading="lazy"
            className="object-cover mix-blend-multiply opacity-80"
          />
          {/* Subtle gradient overlay to ensure text/UI above it pops if needed, or just industrial vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
