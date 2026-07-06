"use client"
import { motion } from "motion/react"
import Container from "../ui/Container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  const videoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 60%",
        end: "bottom center",
        scrub: true,
      },
    })
    t1.fromTo(videoRef.current, { scale: 0.95 }, { scale: 1.15, duration: 1.5 })
  }, [videoRef])

  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      {/* Background Layers for Visual Depth */}
      <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">
        {/* Technical Blueprint Grid */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--color-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-line)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        
        {/* Premium Industrial Visual Anchor - CAD Schematic */}
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: -5 }}
          animate={{ opacity: 0.06, x: 0, rotate: 0 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute right-[-20%] top-0 -z-15 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] text-foreground"
        >
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-current">
            {/* Outer Radial Grid */}
            <circle cx="500" cy="500" r="400" strokeWidth="1" strokeDasharray="4 8" />
            <circle cx="500" cy="500" r="300" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="200" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="500" cy="500" r="100" strokeWidth="0.5" />
            
            {/* Crosshairs */}
            <line x1="100" y1="500" x2="900" y2="500" strokeWidth="1" strokeDasharray="10 5" />
            <line x1="500" y1="100" x2="500" y2="900" strokeWidth="1" strokeDasharray="10 5" />
            <line x1="217" y1="217" x2="783" y2="783" strokeWidth="0.5" strokeDasharray="5 5" />
            <line x1="217" y1="783" x2="783" y2="217" strokeWidth="0.5" strokeDasharray="5 5" />

            {/* Robotic Arm Base */}
            <rect x="420" y="600" width="160" height="200" rx="10" strokeWidth="1.5" />
            <line x1="420" y1="650" x2="580" y2="650" strokeWidth="1" />
            <line x1="420" y1="750" x2="580" y2="750" strokeWidth="1" />
            <circle cx="500" cy="550" r="60" strokeWidth="2" />
            <circle cx="500" cy="550" r="40" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="500" cy="550" r="15" strokeWidth="2" />

            {/* Lower Arm */}
            <path d="M 470 500 L 350 250 L 410 230 L 530 480 Z" strokeWidth="1.5" />
            <circle cx="380" cy="240" r="45" strokeWidth="2" />
            <circle cx="380" cy="240" r="25" strokeWidth="1" strokeDasharray="2 4" />
            <circle cx="380" cy="240" r="10" strokeWidth="2" />

            {/* Upper Arm */}
            <path d="M 370 195 L 750 120 L 760 160 L 380 235 Z" strokeWidth="1.5" />
            
            {/* End Effector/Spindle */}
            <g transform="rotate(15 740 90)">
              <rect x="740" y="90" width="60" height="100" rx="5" strokeWidth="2" />
              <line x1="740" y1="110" x2="800" y2="110" strokeWidth="1" />
              <line x1="740" y1="130" x2="800" y2="130" strokeWidth="1" />
              <path d="M 760 190 L 770 230 L 780 190 Z" strokeWidth="2" />
            </g>
            <path d="M 790 140 L 850 160" strokeWidth="2" strokeDasharray="5 5" />
            
            {/* Measurement Callouts */}
            <polyline points="380,240 250,150 150,150" strokeWidth="1" />
            <text x="145" y="145" fontSize="12" fill="currentColor" stroke="none" textAnchor="end" fontFamily="monospace">J2-AXIS : 45°</text>

            <polyline points="500,550 650,450 750,450" strokeWidth="1" />
            <text x="755" y="445" fontSize="12" fill="currentColor" stroke="none" fontFamily="monospace">J1-BASE : ROT 360°</text>
            
            <polyline points="770,140 850,250 900,250" strokeWidth="1" />
            <text x="905" y="245" fontSize="12" fill="currentColor" stroke="none" fontFamily="monospace">EE-T01 : SPINDLE</text>

            {/* Technical Details Text Block */}
            <text x="100" y="850" fontSize="14" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.7">REV: A</text>
            <text x="100" y="870" fontSize="14" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.7">SCALE: 1:10</text>
            <text x="100" y="890" fontSize="14" fill="currentColor" stroke="none" fontFamily="monospace" opacity="0.7">PROJECT: HC-R04</text>
            
            {/* Additional schematic details */}
            <circle cx="850" cy="160" r="4" fill="currentColor" />
            <circle cx="150" cy="150" r="4" fill="currentColor" />
            <circle cx="750" cy="450" r="4" fill="currentColor" />
            
            <rect x="70" y="820" width="120" height="90" strokeWidth="1" />
          </svg>
        </motion.div>

        {/* Subtle Radial Gradient */}
        <div className="absolute top-[-20%] left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-hero-overlay blur-[100px]" />
      </div>

      <Container>
        <div className="relative z-10 w-full pt-16 md:pt-24 lg:pt-32">
          
          {/* Typography */}
          <div className="flex h-full w-full max-w-5xl flex-col items-start justify-center gap-6 text-left">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-4">
              Industrial Automation
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[6.5rem] font-medium tracking-tighter text-foreground leading-[1.02]"
            >
              Engineering Smarter<br />
              <span className="text-muted-foreground">Industrial</span><br />
              Automation Systems.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="max-w-[60ch] text-lg md:text-xl text-muted-foreground leading-relaxed mt-4"
            >
              We architect, deploy, and scale state-of-the-art automation solutions for modern manufacturing&mdash;driving precision, reliability, and long-term performance.
            </motion.p>
          </div>

          {/* CTAs & Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-16 flex w-full flex-col items-start justify-center gap-12"
          >
            <div className="flex items-center gap-10">
              <Link href="/products" className="group flex items-center text-lg font-medium text-foreground transition-opacity hover:opacity-70">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                Talk to an Engineer
              </Link>
            </div>
            
            <div className="flex items-center gap-6 border-t border-border pt-6 opacity-80">
              <span className="text-sm font-medium text-foreground">ISO 9001:2015 <span className="text-muted-foreground ml-1">Certified</span></span>
              <div className="w-px h-3 bg-border" />
              <span className="text-sm font-medium text-foreground">Industry 4.0 <span className="text-muted-foreground ml-1">Ready</span></span>
              <div className="w-px h-3 bg-border" />
              <span className="text-sm font-medium text-foreground">Global <span className="text-muted-foreground ml-1">Support</span></span>
            </div>
          </motion.div>

        {/* Visual Anchor */}
        <div className="mt-20 flex w-full justify-center perspective-[1200px] md:mt-28">
          <div
            ref={videoRef}
            className="relative flex h-[60vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] bg-muted shadow-[0_0_40px_rgba(0,0,0,0.05)] md:h-[80vh] md:rounded-[3rem] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]"
          >
        
            <img
              src="https://placehold.co/1920x1080/e5e5e5/a3a3a3?text=Cinematic+Industrial+Showcase"
              alt="Industrial Automation Showcase"
              className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
            />
            {/* Subtle Gradient Overlay purely via CSS */}
            <div className="absolute inset-0 bg-linear-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        
      </div>
    </Container>
    </div>
  )
}

export default HeroSection
