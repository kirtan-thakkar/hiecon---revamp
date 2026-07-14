"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Container from "../../components/ui/Container";

export default function EngineeringHorizontal() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const panels = gsap.utils.toArray<HTMLElement>('.value-panel');
    
    let mm = gsap.matchMedia();
    
    mm.add("(min-width: 768px)", () => {
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
    });
  }, { scope: sectionRef });

  const values = [
    {
      id: "01",
      title: "Built Around Engineering",
      description: "Our engineers work across control systems, motion, industrial communication, and software platforms to select and integrate the technologies that best fit each application.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "02",
      title: "Cross-Platform Expertise",
      description: "This hands-on, multi-platform experience allows Hiecon to move from requirement to implementation efficiently while delivering solutions built around the customer's actual production environment.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop"
    },
    {
      id: "03",
      title: "Real-World Performance",
      description: "Nearly three decades of experience. Thousands of machines in operation. One engineering approach: understand the application, integrate the right technology, and build systems that perform in the real world.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} className="relative w-full md:h-[100svh] bg-background md:overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex flex-col md:flex-row h-full w-full md:w-[300vw]"
      >
        {values.map((value, index) => (
          <div 
            key={value.id}
            className="value-panel relative w-full md:w-screen py-24 md:py-0 md:h-full flex flex-col justify-center shrink-0 border-b md:border-b-0 border-border"
          >
            <Container className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="flex flex-col gap-6 max-w-xl">
                <span className="text-8xl md:text-9xl font-bold dark:text-muted text-black/40 tracking-tighter -ml-2">
                  {value.id}
                </span>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight text-foreground">
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
                  className="object-cover"
                />
              </div>
            </Container>
            

          </div>
        ))}
      </div>
    </section>
  );
}
