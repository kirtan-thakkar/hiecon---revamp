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
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate the cards with clip-path and y-transform
    gsap.fromTo(
      cardsRef.current,
      {
        clipPath: "inset(100% 0 0 0)",
        y: 50,
      },
      {
        clipPath: "inset(0% 0 0 0)",
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 60%",
          scrub: 1,
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24  border-y border-neutral-200 dark:border-neutral-700">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white dark:bg-neutral-950 shadow-sm border border-neutral-100 dark:border-neutral-800"
            >
              <div className="text-5xl lg:text-7xl font-bold bg-linear-to-b from-neutral-800 to-neutral-400 dark:from-neutral-100 dark:to-neutral-600 bg-clip-text text-transparent mb-4">
                {stat.value}
              </div>
              <div className="text-base lg:text-lg text-neutral-600 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
