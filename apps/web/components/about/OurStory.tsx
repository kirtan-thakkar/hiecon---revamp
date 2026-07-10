"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function OurStory() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          
          {/* Left Column: Scrolling Content */}
          <div className="flex flex-col gap-24 md:py-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                01 / Origins
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Bridging the Gap
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hiecon started 27 years ago with a singular vision: to bridge the gap between heavy industrial machinery and intelligent, data-driven automation. What began as a small engineering team has evolved into a global powerhouse in manufacturing technology.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                02 / The Shift
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Leading the Charge
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As production lines became more complex, the need for seamless integration grew. We didn't just adapt; we led the charge. By designing proprietary motion controllers and custom PLCs, we empowered factories to scale faster and safer.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6"
            >
              <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                03 / Today
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Pillars of Reliability
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Today, Hiecon stands as a pillar of reliability. Our systems run the facilities that build tomorrow. We partner with industry leaders to engineer solutions that aren't just efficient, but sustainable and future-proof.
              </p>
            </motion.div>

          </div>

          {/* Right Column: Sticky Image */}
          <div className="hidden md:block h-full relative">
            <div className="sticky top-32 w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted">
              <div className="relative w-full h-full">
                <Image 
                  src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop"
                  alt="Hiecon engineering team"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay"></div>
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
