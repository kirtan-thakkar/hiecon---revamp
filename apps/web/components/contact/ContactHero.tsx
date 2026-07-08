"use client";

import { motion } from "motion/react";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Container from "../../components/ui/Container";

export default function ContactHero() {
  return (
    <section className="relative w-full pt-48 pb-24 bg-background">
      <Container className="flex flex-col gap-8 max-w-4xl">
        <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
          Contact Us
        </p>
        <TextAnimate 
          animation="blurInUp" 
          as="h1" 
          by="word"
          once={true}
          className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter text-foreground leading-[0.95]"
        >
          Let's Engineer the Future Together.
        </TextAnimate>
        <motion.p
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mt-4"
        >
          Whether you're looking for global support or custom automation solutions, our experts are ready to assist. Reach out directly or visit one of our engineering hubs.
        </motion.p>
      </Container>
    </section>
  );
}
