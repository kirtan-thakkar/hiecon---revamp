"use client";

import Container from "../ui/Container";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

const stats = [
  {
    value: "27+",
    label: "Years of Industry Experience",
  },
  {
    value: "750+",
    label: "Valued Customers",
  },
  {
    value: "36+",
    label: "Team Strength",
  },
];

export default function StatsSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const labelRefs = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "center 50%",
        scrub: 1,
      }
    });

    tl.fromTo(
      textRefs.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
    ).fromTo(
      labelRefs.current,
      { opacity: 0, filter: "blur(4px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8, stagger: 0.1, ease: "power2.out" },
      "-=0.6"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-32 bg-background border-y border-border ">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-8 ml-50 ">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start flex-1 w-full text-center md:text-left"
            >
              <div className="overflow-hidden mb-2">
                <div 
                  ref={(el) => {
                    if (el) textRefs.current[index] = el;
                  }}
                  className="text-5xl lg:text-7xl font-bold bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600 bg-clip-text text-transparent"
                >
                  {stat.value}
                </div>
              </div>
              <div 
                ref={(el) => {
                  if (el) labelRefs.current[index] = el;
                }}
                className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 font-medium"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
