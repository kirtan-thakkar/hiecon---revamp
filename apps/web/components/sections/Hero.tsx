"use client"
import { motion } from "motion/react"
import { TextAnimate } from "@workspace/ui/components/text-animate"
import Image from "next/image"
import Container from "../ui/Container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react"

const HeroSection = () => {
  const videoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 60%",
          end: "bottom center",
          scrub: true,
        },
      });
      t1.fromTo(videoRef.current, { scale: 0.95 }, { scale: 1.15, duration: 1.5 });
    });

    mm.add("(max-width: 767px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 70%",
          end: "center center",
          scrub: true,
        },
      });
      t1.fromTo(videoRef.current, { scale: 0.95 }, { scale: 1.02, duration: 1.5 });
    });

    return () => mm.revert();
  }, [videoRef]);

  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      {/* Background Layers for Visual Depth */}
      <div className="absolute inset-0 pointer-events-none flex justify-center overflow-hidden">
        {/* Technical Blueprint Grid */}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--color-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-line)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />
        
        {/* Premium Industrial Visual Anchor - Cinematic Photo */}
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 0.2, x: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute right-[-20%] top-[-10%] -z-15 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px]"
          style={{ WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 80%)', maskImage: 'radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 80%)' }}
        >
          <Image 
            src="/industrial-robots-hero.jpg" 
            alt="Industrial Automation" 
            fill
            sizes="100vw"
            priority
            className="object-cover -ml-10 -mt-15"
          />
        </motion.div>

        {/* Subtle Radial Gradient */}
        <div className="absolute top-[-20%] left-1/2 -z-10 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-hero-overlay blur-[100px]" />
      </div>

      <Container>
        <div className="relative z-10 w-full pt-16 md:pt-24 lg:pt-28">
          
          {/* Typography */}
          <div className="flex h-full w-full max-w-5xl flex-col items-start justify-center gap-6 text-left">
            <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground mb-2">
              Industrial Automation
            </p>
            <TextAnimate 
              animation="blurInUp" 
              as="h1" 
              by="word"
              once={false}
              className="text-6xl md:text-8xl lg:text-[6.5rem] font-medium tracking-tighter text-foreground leading-[1.02]"
            >
              Engineering Smarter Industrial Automation Systems
            </TextAnimate>

            <motion.p
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
              <Link href="/products" className="group flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-4 text-lg font-medium transition-transform hover:scale-105">
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary">
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
        
            <video
              src="/heicon-main.mov"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
        
      </div>
    </Container>
    </div>
  )
}

export default HeroSection
