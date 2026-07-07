"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import Container from "../ui/Container";

const Label = ({ children }: { children: React.ReactNode }) => (
  <div 
    className="text-[11px] uppercase tracking-[0.15em] font-mono mb-6" 
    style={{ color: "var(--text-label)" }}
  >
    {children}
  </div>
);

const panelReveal: any = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  viewport: { once: true }
};

export default function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section 
      ref={containerRef} 
      className="why-choose-us-wrapper relative border-t border-border/50"
    >
      <Container className="relative py-24 md:py-32">
        
        {/* The Vertical Spine */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 z-20 hidden md:block" style={{ width: '1px' }}>
          <div className="wcu-spine-track h-full">
            <div className="wcu-spine-fill"></div>
          </div>
        </div>

        {/* Content Wrapper offset for spine */}
        <div className="md:pl-16 lg:pl-24 flex flex-col gap-32 md:gap-48">
          
          {/* PANEL 01 - The Challenge */}
          <motion.div {...panelReveal} className="overflow-hidden grid grid-cols-1 lg:grid-cols-[42%_58%] items-center min-h-[70vh]">
            <div className="pr-8 flex flex-col justify-center">
              <Label>— 01  CHALLENGE</Label>
              <h3 
                className="font-medium tracking-tight leading-[1.05] mb-6"
                style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)", color: "var(--text-primary)" }}
              >
                Most factories don't know where they're losing time.
              </h3>
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ maxWidth: "52ch", color: "var(--text-body)" }}
              >
                Before we write a single line of PLC code, we analyze your production line to find the exact point of friction costing you throughput.
              </p>
            </div>
            
            <div className="relative w-full h-full mt-12 lg:mt-0 right-0 group">
              <div className="aspect-[4/5] lg:absolute lg:right-[-50vw] lg:w-[calc(100%+50vw)] lg:top-1/2 lg:-translate-y-1/2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop" 
                  alt="Factory Challenge"
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                  style={{ 
                    filter: "grayscale(1) contrast(1.12) brightness(0.88)",
                    transition: "transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)"
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* PANEL 02 - Engineering */}
          <motion.div {...panelReveal} className="overflow-hidden grid grid-cols-1 lg:grid-cols-[58%_42%] items-center min-h-[70vh]">
            <div className="relative w-full h-full mb-12 lg:mb-0 order-2 lg:order-1 left-0 group">
              <div className="aspect-[4/5] lg:absolute lg:left-[-50vw] lg:w-[calc(100%+50vw)] lg:top-1/2 lg:-translate-y-1/2 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?q=80&w=1200&auto=format&fit=crop" 
                  alt="Engineering Architecture"
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                  style={{ 
                    filter: "grayscale(1) contrast(1.12) brightness(0.88)",
                    transition: "transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)"
                  }}
                />
                
                {/* Technical Annotation Overlay */}
                <div className="absolute bottom-8 right-8 lg:right-[50vw] lg:mr-8 flex items-end">
                  <div className="w-4 h-4 border-b border-l mb-1 mr-2" style={{ borderColor: "var(--annotation)" }}></div>
                  <div className="text-[10px] font-mono uppercase tracking-widest" style={{ color: "var(--text-label)" }}>
                    Distributed I/O topology
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:pl-16 flex flex-col justify-center order-1 lg:order-2 z-10">
              <Label>— 02  ENGINEERING</Label>
              <h3 
                className="font-medium tracking-tight leading-[1.05] mb-6"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.8rem)", color: "var(--text-primary)" }}
              >
                Architecting the solution.
              </h3>
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ maxWidth: "52ch", color: "var(--text-body)" }}
              >
                We engineer complete hardware topologies. From specifying high-torque servo drives to designing distributed I/O networks that guarantee microsecond synchronization.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* PANEL 03 - Process */}
      <motion.div {...panelReveal} className="overflow-hidden w-full py-32 md:py-48 my-12" style={{ backgroundColor: "var(--bg-panel-alt)", transition: "background-color 400ms ease" }}>
        <Container>
          <div className="md:pl-16 lg:pl-24">
            <div className="w-full text-center mb-24">
              <Label>— 03  PROCESS</Label>
              <h3 
                className="font-medium tracking-tight leading-[1.05] mb-6"
                style={{ fontSize: "clamp(3.5rem, 5.5vw, 5rem)", color: "var(--text-primary)" }}
              >
                Global hardware. Custom integrated.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
              <div className="md:pr-12 md:border-r" style={{ borderColor: "var(--divider)" }}>
                <p className="text-lg leading-relaxed mx-auto" style={{ maxWidth: "52ch", color: "var(--text-body)" }}>
                  We are not tied to a single vendor. Our engineers select the exact combination of hardware required.
                </p>
              </div>
              <div className="md:px-12 md:border-r" style={{ borderColor: "var(--divider)" }}>
                <p className="text-lg leading-relaxed mx-auto" style={{ maxWidth: "52ch", color: "var(--text-body)" }}>
                  ABB, Siemens, Yaskawa, and Weintek components are integrated into a single, unified nervous system for your facility.
                </p>
              </div>
              <div className="md:pl-12">
                <p className="text-lg leading-relaxed mx-auto" style={{ maxWidth: "52ch", color: "var(--text-body)" }}>
                  The result is a production line that operates seamlessly, without the vendor lock-in that plagues modern manufacturing.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>

      <Container className="relative pb-24 md:pb-32">
        <div className="md:pl-16 lg:pl-24 flex flex-col gap-32 md:gap-48">
          
          {/* PANEL 04 - Delivery */}
          <motion.div {...panelReveal} className="overflow-hidden flex flex-col items-center">
            <div className="w-full flex justify-center gap-[10px] mb-16">
              <div className="aspect-[3/2] w-[45%] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1581092921461-7031e4bfb314?q=80&w=1200&auto=format&fit=crop" 
                  alt="Deployment Phase"
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                  style={{ 
                    filter: "grayscale(1) contrast(1.12) brightness(0.88)",
                    transition: "transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)"
                  }}
                />
              </div>
              <div className="aspect-[3/2] w-[45%] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop" 
                  alt="Commissioning"
                  className="w-full h-full object-cover group-hover:scale-[1.03]"
                  style={{ 
                    filter: "grayscale(1) contrast(1.12) brightness(0.88)",
                    transition: "transform 600ms cubic-bezier(0.25, 0.1, 0.25, 1)"
                  }}
                />
              </div>
            </div>
            
            <div className="max-w-2xl text-center flex flex-col items-center">
              <Label>— 04  RESULTS</Label>
              <h3 
                className="font-medium tracking-tight leading-[1.05] mb-6"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color: "var(--text-primary)" }}
              >
                Commissioned and live within 6 weeks. Every project since 2019.
              </h3>
              <p 
                className="text-lg md:text-xl leading-relaxed"
                style={{ maxWidth: "52ch", color: "var(--text-body)" }}
              >
                Our involvement doesn't end with a schematic. Our engineers deploy to your facility, wiring cabinets, tuning servo loops, and rigorously testing safety zones until the line runs flawlessly.
              </p>
            </div>
          </motion.div>
          
        </div>
      </Container>

      {/* PANEL 05 - Support (Stats Component) */}
      <motion.div {...panelReveal} className="overflow-hidden w-full py-32 md:py-48 bg-[#0d0d0d] dark:bg-[#0a0a0a]">
        <Container>
          <div className="md:pl-16 lg:pl-24">
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              {[
                { v: "27", l: "Years active" },
                { v: "750+", l: "Projects delivered" },
                { v: "36", l: "Cities" },
                { v: "4hr", l: "Avg. response time" }
              ].map((m) => (
                <div key={m.l} className="flex flex-col">
                  <span className="text-[11px] font-mono tracking-widest uppercase mb-4" style={{ color: "var(--text-label)" }}>
                    {m.l}
                  </span>
                  <span className="font-medium text-[#ffffff]" style={{ fontSize: "clamp(4rem, 7vw, 7rem)" }}>
                    {m.v}
                  </span>
                </div>
              ))}
            </div>
            
          </div>
        </Container>
      </motion.div>
      
    </section>
  );
}
