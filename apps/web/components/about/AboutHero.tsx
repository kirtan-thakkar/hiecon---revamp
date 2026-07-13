"use client";

import { useRef } from "react";
import Image from "next/image";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import { motion } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Container from "../../components/ui/Container";

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Parallax and color reveal on scroll
    gsap.fromTo(
      imageRef.current,
      { scale: 1.15, filter: "brightness(0.8) contrast(1.1) grayscale(100%)" },
      {
        scale: 1,
        filter: "brightness(1) contrast(1) grayscale(0%)",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, { scope: containerRef });

  const yearsOfExperience = 27;

  return (
    <section className="relative w-full h-[85vh] md:h-screen min-h-[600px] flex flex-col justify-end pb-12 md:pb-24 pt-32 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/5 via-background to-background" />
      
      <Container className="relative z-10 w-full">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
        >
          About Hiecon
        </motion.p>
        
        <TextAnimate 
          animation="blurInUp" 
          as="h1" 
          by="word"
          className="text-5xl md:text-7xl lg:text-[7rem] font-medium tracking-tight text-foreground leading-[1.05] max-w-5xl"
        >
          Engineering the Future of Automation
        </TextAnimate>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mt-12 md:mt-24">
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="max-w-[45ch] text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            For over {yearsOfExperience} years, Hiecon has been at the forefront of industrial innovation, architecting systems that define precision and reliability.
          </motion.p>
        </div>
      </Container>
      
      {/* Background Cinematic Image Reveal */}
      <div ref={wrapperRef} className="absolute top-0 right-0 w-full md:w-[65%] h-full -z-10 opacity-40 md:opacity-90 mix-blend-multiply dark:mix-blend-lighten">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent" />
        <Image 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2000&auto=format&fit=crop"
          alt="Hiecon Industrial Facility"
          fill
          priority
          className="object-cover object-right"
        />
      </div>
    </section>
  );
}
