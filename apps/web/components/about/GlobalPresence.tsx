"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Container from "../../components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

export default function GlobalPresence() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-[#111111] overflow-hidden text-[#FAFAF8]">
      <Container className="relative z-10 flex flex-col gap-16 md:gap-24">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
              Global Footprint
            </p>
            <TextAnimate 
              animation="blurInUp" 
              as="h2" 
              by="word"
              once={false}
              className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.05]"
            >
              Supporting operations across 40+ countries.
            </TextAnimate>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#A0A0A5] leading-relaxed max-w-md"
          >
            With strategically located engineering hubs and rapid-response teams, we ensure that no matter where your facility is, Hiecon expertise is always within reach.
          </motion.p>
        </div>

        {/* Cinematic Map / Graphic representation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full aspect-[4/3] md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-[#222222]"
        >
          <Image 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000&auto=format&fit=crop"
            alt="Global operations"
            fill
            loading="lazy"
            className="object-cover opacity-60 mix-blend-luminosity hover:opacity-80 transition-opacity duration-700"
          />
          
          {/* Faux map nodes */}
          <div className="absolute top-[30%] left-[20%] w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_20px_4px_var(--color-brand-primary)] animate-pulse"></div>
          <div className="absolute top-[50%] left-[45%] w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_20px_4px_var(--color-brand-primary)] animate-pulse" style={{ animationDelay: "1s" }}></div>
          <div className="absolute top-[40%] left-[75%] w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_20px_4px_var(--color-brand-primary)] animate-pulse" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-[70%] left-[60%] w-3 h-3 rounded-full bg-brand-primary shadow-[0_0_20px_4px_var(--color-brand-primary)] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-[#333333] pt-16">
          {[
            { label: "Installations", value: "10,000+" },
            { label: "Support Centers", value: "24" },
            { label: "Engineers", value: "500+" },
            { label: "Uptime Guaranteed", value: "99.9%" }
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <h3 className="text-4xl md:text-5xl font-medium">{stat.value}</h3>
              <p className="text-sm font-medium tracking-wider uppercase text-[#A0A0A5]">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
