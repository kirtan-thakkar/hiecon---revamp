"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Container from "../../components/ui/Container";

export default function OurStory() {
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
    const stories = gsap.utils.toArray('.story-item');
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
          start: "top 128px", // Matches top-32
          end: () => `+=${gridRef.current!.offsetHeight - imageRef.current!.offsetHeight}`,
          pin: true,
          pinSpacing: false,
        });
      }
    });

  }, { scope: containerRef, dependencies: [mounted] });

  return (
    <section ref={containerRef} className="relative w-full py-24 md:py-32 bg-background border-t border-border">
      <Container>
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative">
          
          {/* Left Column: Scrolling Content */}
          <div className="flex flex-col gap-24 md:py-24">
            
            <div className="story-item flex flex-col gap-6 opacity-0 translate-y-10">
              <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                01 / Origins
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Bridging the Gap
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Hiecon started 27 years ago with a singular vision: to bridge the gap between heavy industrial machinery and intelligent, data-driven automation. What began as a small engineering team has evolved into a global powerhouse in manufacturing technology.
              </p>
            </div>

            <div className="story-item flex flex-col gap-6 opacity-0 translate-y-10">
              <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                02 / The Shift
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Leading the Charge
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                As production lines became more complex, the need for seamless integration grew. We didn't just adapt; we led the charge. By designing proprietary motion controllers and custom PLCs, we empowered factories to scale faster and safer.
              </p>
            </div>

            <div className="story-item flex flex-col gap-6 opacity-0 translate-y-10">
              <p className="text-sm font-bold tracking-widest uppercase text-brand-primary">
                03 / Today
              </p>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
                Pillars of Reliability
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Today, Hiecon stands as a pillar of reliability. Our systems run the facilities that build tomorrow. We partner with industry leaders to engineer solutions that aren't just efficient, but sustainable and future-proof.
              </p>
            </div>

          </div>

          {/* Right Column: Sticky Image */}
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
