"use client";

import Container from "../ui/Container";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.fromTo(
      leftColRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "center 50%",
          scrub: 1,
        }
      }
    );

    gsap.fromTo(
      rightColRef.current,
      {
        clipPath: "inset(0 0 0 100%)",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "center 50%",
          scrub: 1,
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-32 bg-background overflow-hidden relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div ref={leftColRef} className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8">
              Start the <br/> conversation.
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-16 max-w-lg">
              Partner with our engineers to design, deploy, and scale your next industrial automation system.
            </p>

            <div className="flex flex-col gap-12">
              {[
                { icon: Phone, title: "Sales & Technical", detail: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: Mail, title: "General Inquiries", detail: "contact@hiecon.com", href: "mailto:contact@hiecon.com" },
              ].map((item, index) => (
                <div key={index} className="group flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-muted-foreground mb-1">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                    <span className="text-sm font-medium tracking-wide uppercase">{item.title}</span>
                  </div>
                  <Link href={item.href} className="text-2xl md:text-3xl font-medium text-foreground hover:text-muted-foreground transition-colors">
                    {item.detail}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div
            ref={rightColRef}
            className="lg:col-span-7 w-full h-[600px] bg-card rounded-[2rem] overflow-hidden relative flex items-center justify-center"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-12 text-center bg-background/40 backdrop-blur-md">
                <MapPin className="w-16 h-16 text-foreground mb-6 opacity-80" strokeWidth={1} />
                <h3 className="text-3xl font-bold text-foreground mb-4">Global Headquarters</h3>
                <p className="text-lg text-muted-foreground max-w-sm mb-8 leading-relaxed">
                  123 Automation Blvd, Tech District<br/>
                  Innovation City, TX 75001
                </p>
                <Button size="lg" className="rounded-full px-8 text-sm uppercase tracking-widest font-semibold">Get Directions</Button>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://placehold.co/1200x800/e5e5e5/a3a3a3?text=Map+View" alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply" />
          </div>
        </div>
      </Container>
    </section>
  );
}
