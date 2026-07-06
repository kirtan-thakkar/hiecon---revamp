"use client"
import { motion } from "motion/react"
import Container from "../ui/Container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { TextAnimate } from "@workspace/ui/components/text-animate"
import path from "path/win32"
const HeroSection = () => {
  const videoRef = useRef<HTMLImageElement>(null)

  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top 50%",
        end: "bottom center",
        scrub: true,
        markers: true,
      },
    })
    t1.fromTo(videoRef.current, { scale: 0.95 }, { scale: 1.2,  duration: 1.5 })
  }, [videoRef])

  return (
    <Container>
      {/* <div className="z-10 w-full">
        <Navbar />
      </div> */}
      <div className="mt-20 min-h-[650px] w-full md:mt-30 lg:mt-35">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-col items-center justify-center gap-12 text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}

            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="bg-linear-to-b from-neutral-700 to-neutral-100 bg-clip-text text-7xl font-bold tracking-tight text-transparent dark:bg-linear-to-b dark:from-neutral-100 dark:to-neutral-700 dark:text-transparent"
          >
            Delivering Intelligent Industrial Automation Solutions
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}

            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="max-w-lg text-base text-neutral-700 dark:text-neutral-300"
          >
            We provide state-of-the-art automation solutions, seamless system
            integration, and dependable technical support to help industries
            improve productivity, reliability, and operational efficiency.
          </motion.p>
        </div>
        {/* video */}
        <div
          ref={videoRef}
          className="mt-20 min-h-screen bg-violet-100 dark:bg-violet-900 rounded-[30px]"
        >
          <h2>Placeholder image</h2>
        </div>
      </div>
    </Container>
  )
}
export default HeroSection
