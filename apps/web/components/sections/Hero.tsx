"use client"
import { motion } from "motion/react"
import Container from "../ui/Container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import ContactSection from "../home/ContactSection"
import WhyChooseUs from "../home/WhyChooseUs"
import ProductFamilies from "../home/ProductFamilies"
import StatsSection from "../home/StatsSection"
import TechnologyPartners from "../home/TechnologyPartners"

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
      <div className="absolute inset-0 pointer-events-none flex justify-center">
        {/* Technical Blueprint Grid */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        {/* Subtle Radial Gradient */}
        <div className="absolute top-[-20%] left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-neutral-300/20 dark:bg-neutral-500/10 blur-[100px] opacity-30" />
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
              <span className="text-sm font-medium text-foreground">27+ <span className="text-muted-foreground ml-1">Years</span></span>
              <div className="w-px h-3 bg-border" />
              <span className="text-sm font-medium text-foreground">750+ <span className="text-muted-foreground ml-1">Customers</span></span>
              <div className="w-px h-3 bg-border" />
              <span className="text-sm font-medium text-foreground">36+ <span className="text-muted-foreground ml-1">Engineers</span></span>
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
        
        {/* Child Sections */}
        <div className="mt-24 w-full">
          <div className="py-16 border-y border-border">
            <TechnologyPartners />
          </div>
          <StatsSection />
          <ProductFamilies />
          <WhyChooseUs />
          <ContactSection />
        </div>
        
      </div>
    </Container>
    </div>
  )
}

export default HeroSection
