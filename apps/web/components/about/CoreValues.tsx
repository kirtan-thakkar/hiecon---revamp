"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Container from "../../components/ui/Container";

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // We get all the panels
    const panels = gsap.utils.toArray<HTMLElement>('.value-panel');
    
    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => `+=${scrollContainerRef.current?.offsetWidth || 0}`,
      }
    });
  }, { scope: sectionRef });

  const values = [
    {
      id: "01",
      title: "Precision",
      description: "In automation, millimeters matter. Our systems are engineered to deliver unparalleled exactness, ensuring your manufacturing processes meet the highest standards of quality control.",
      image: "https://images.unsplash.com/photo-1504917595217-d4bffc269b02?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Reliability",
      description: "Downtime is not an option. We build robust, industrial-grade solutions designed to run 24/7 in the most demanding environments on the planet.",
      image: "https://images.unsplash.com/photo-1611078174542-6e21b777a885?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Innovation",
      description: "We don't follow trends; we set them. By integrating advanced motion control and intelligent data systems, we future-proof your production lines against tomorrow's challenges.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full h-[100svh] bg-card overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex h-full w-[300vw]"
      >
        {values.map((value, index) => (
          <div 
            key={value.id}
            className="value-panel relative w-screen h-full flex flex-col justify-center shrink-0"
          >
            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="flex flex-col gap-6 max-w-xl">
                <span className="text-8xl md:text-9xl font-bold text-muted/50 tracking-tighter -ml-2">
                  {value.id}
                </span>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-card-foreground">
                  {value.title}
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mt-4">
                  {value.description}
                </p>
              </div>
              
              <div className="hidden md:block w-full aspect-square rounded-full overflow-hidden bg-muted relative scale-90">
                <Image 
                  src={value.image}
                  alt={value.title}
                  fill
                  loading="lazy"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 mix-blend-multiply opacity-80"
                />
              </div>
            </Container>
            
            {/* Very subtle background number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-bold text-muted/20 pointer-events-none z-0">
              {value.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
