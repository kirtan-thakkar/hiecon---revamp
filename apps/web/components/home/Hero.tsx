"use client"

import React, { useRef } from "react"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import Image from "next/image"
import { Link } from "next-view-transitions"
import { ArrowRight } from "lucide-react"
import { motion } from "motion/react"

import Container from "../ui/Container"
import { homeData } from "../../data/homeData"

const HeroSection = () => {
  const videoRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 60%",
        end: "bottom center",
        scrub: true,
      },
    })

    timeline.fromTo(videoRef.current, { scale: 0.9 }, { scale: 1.15, duration: 1.5 })
  }, [videoRef])

  return (
    <div className="relative overflow-hidden pt-24 pb-16">
      <div className="pointer-events-none absolute inset-0 flex justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--color-grid-line)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-grid-line)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_40%,transparent_100%)]" />

        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 0.2, x: 0, scale: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
          className="absolute right-[-30%] top-[-5%] -z-15 h-200 w-200 md:h-300 md:w-300"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 80%)",
            maskImage:
              "radial-gradient(ellipse 50% 50% at 50% 50%, #000 20%, transparent 80%)",
          }}
        >
          <Image
          fill
            src={homeData.hero.bgImageUrl}
            alt="Industrial Machinery"
            className="h-full w-full object-cover mix-blend-luminosity grayscale md:-ml-15 md:-mt-15"
          />
        </motion.div>

        <div className="absolute left-1/2 top-[-20%] -z-10 h-200 w-200 -translate-x-1/2 rounded-full bg-hero-overlay blur-[100px]" />
      </div>

      <Container>
        <div className="relative z-10 w-full pt-16 md:pt-24 lg:pt-28">
          <div className="flex h-full w-full max-w-5xl flex-col items-start justify-center gap-6 text-left">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {homeData.hero.label}
            </p>

            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl sm:text-6xl font-medium leading-[1.02] tracking-tighter text-foreground md:text-8xl lg:text-[6.5rem] w-full"
            >
              {homeData.hero.titleLine1}
              <br />
              <span className="text-muted-foreground">{homeData.hero.titleHighlight}</span> {homeData.hero.titleLine2}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-4 max-w-[60ch] text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              {homeData.hero.description}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="mt-16 flex w-full flex-col items-start justify-center gap-12"
          >
            <div className="flex items-center gap-10">
              <Link href="/products" className="group flex items-center text-lg font-medium text-foreground transition-opacity hover:opacity-70">
                Explore Solutions <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground">
                Talk to an Engineer
              </Link>
            </div>

            <div className="flex items-center gap-6 border-t border-border pt-6 opacity-80">
              {homeData.hero.stats.map((stat, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-sm font-medium text-foreground">
                    {stat.label} <span className="ml-1 text-muted-foreground">{stat.highlight}</span>
                  </span>
                  {idx < homeData.hero.stats.length - 1 && (
                    <div className="h-3 w-px bg-border" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          <div className="mt-20 flex w-full justify-center perspective-distant md:mt-28">
            <div
              ref={videoRef}
              className="relative flex h-[60vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] shadow-[0_0_40px_rgba(0,0,0,0.05)] md:h-[80vh] md:rounded-[3rem] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]"
            >
              <video
                src={homeData.hero.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 " />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
