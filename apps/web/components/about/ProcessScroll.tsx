"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Container from "../../components/ui/Container";

export default function ProcessScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useGSAP(() => {
    if (!mounted) return;

    gsap.registerPlugin(ScrollTrigger);
    
    // Story items animation
    const stories = gsap.utils.toArray('.process-item');
    stories.forEach((story: any) => {
      gsap.fromTo(story, 
        { opacity: 0, y: 40 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: story,
            start: "top 85%",
          }
        }
      );
    });

    // Pinning the image on desktop
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      if (gridRef.current && imageRef.current) {
        ScrollTrigger.create({
          trigger: imageRef.current,
          start: "top 128px",
          end: () => `+=${gridRef.current!.offsetHeight - imageRef.current!.offsetHeight}`,
          pin: true,
          scrub: true,
          pinSpacing: false,
        });
      }
    });

  }, { scope: containerRef, dependencies: [mounted] });

  const steps = [
    {
      id: "01",
      title: "Design",
      description: "Understand the application and engineer the appropriate control architecture."
    },
    {
      id: "02",
      title: "Integrate",
      description: "Bring together hardware, software, motion and communication technologies."
    },
    {
      id: "03",
      title: "Implement",
      description: "Commission reliable, production-ready automation systems."
    },
    {
      id: "04",
      title: "Support",
      description: "Provide technical support and services throughout the system lifecycle."
    }
  ];

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          
          <div className="flex flex-col gap-24 md:py-24">
            {steps.map((step) => (
              <div key={step.id} className="process-item flex flex-col gap-6 opacity-0 translate-y-10">
                <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                  {step.id} / Core Competency
                </p>
                <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                  {step.title}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="hidden md:block h-full relative">
            <div ref={imageRef} className="w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-muted">
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
