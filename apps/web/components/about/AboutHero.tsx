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

  return (
    <section ref={containerRef} className="relative w-full min-h-[100svh] flex flex-col justify-end pb-12 md:pb-24 pt-32 overflow-hidden bg-background">
      <Container className="relative z-10 flex flex-col gap-6">
        <p className="text-brand-primary text-xs font-bold tracking-widest uppercase ">
          Who We Are
        </p>
        <TextAnimate 
          animation="blurInUp" 
          as="h1" 
          by="word"
          once={true}
          className="text-6xl md:text-8xl lg:text-[8rem] font-medium tracking-tighter text-foreground leading-[0.95] max-w-[14ch]"
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
            For over 27 years, Hiecon has been at the forefront of industrial innovation, architecting systems that define precision and reliability.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="hidden md:flex w-24 h-24 rounded-full border border-border items-center justify-center p-2"
          >
            <div className="w-full h-full rounded-full bg-muted flex items-center justify-center animate-[spin_10s_linear_infinite]">
               {/* Arrow down icon rotating */}
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground animate-[spin_-10s_linear_infinite]">
                 <path d="M12 5v14M19 12l-7 7-7-7" />
               </svg>
            </div>
          </motion.div>
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
