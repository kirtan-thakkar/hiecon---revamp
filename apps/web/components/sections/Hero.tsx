"use client"
import { motion } from "motion/react"
import Container from "../ui/Container"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"
import { TextAnimate } from "@workspace/ui/components/text-animate"
import { Button } from "@workspace/ui/components/button"
import Link from "next/link"
import ContactSection from "../home/ContactSection"
import WhyChooseUs from "../home/WhyChooseUs"
import ProductFamilies from "../home/ProductFamilies"
import StatsSection from "../home/StatsSection"
import TechnologyPartners from "../home/TechnologyPartners"
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
    t1.fromTo(videoRef.current, { scale: 0.95 }, { scale: 1.2, duration: 1.5 })
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
              y: 10,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="bg-linear-to-b from-neutral-700 to-neutral-100 bg-clip-text text-7xl font-bold tracking-tight text-transparent dark:bg-linear-to-b dark:from-neutral-100 dark:to-neutral-700 dark:text-transparent"
          >
            Delivering Intelligent Industrial Automation Solutions
          </motion.h1>

          <TextAnimate
            animation="blurIn"
            as="p"
            delay={0.7}
            className="max-w-lg text-base text-neutral-700 dark:text-neutral-300"
          >
            We provide state-of-the-art automation solutions, seamless system
            integration, and dependable technical support to help industries
            improve productivity, reliability, and operational efficiency.
          </TextAnimate>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            delay: 0.9,
            ease: "easeOut",
          }}
          className="mt-12 flex w-full items-center justify-center gap-4"
        >
          <Link href="/products">
            <Button size="lg" className="h-12 rounded-full px-8 text-base">
              View Products
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-full px-8 text-base"
            >
              Contact Us
            </Button>
          </Link>
        </motion.div>

        {/* video */}
        <div className="mt-24 flex w-full justify-center perspective-[1200px] md:mt-32">
          <div
            ref={videoRef}
            className="relative flex h-[60vh] w-full items-center justify-center overflow-hidden rounded-[2rem] bg-neutral-200 shadow-2xl md:h-[85vh] md:rounded-[3rem] dark:bg-neutral-800"
          >
            <img
              src="https://placehold.co/1920x1080/e5e5e5/a3a3a3?text=Cinematic+Industrial+Showcase"
              alt="Industrial Automation Showcase"
              className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-multiply dark:mix-blend-overlay"
            />
            <h2 className="z-10 text-2xl font-medium text-neutral-500 mix-blend-difference dark:text-neutral-400">
              Showcase Video
            </h2>
          </div>
        </div>
        <div>
          <div className="-mb-32 py-48">
            <TechnologyPartners />
          </div>
          <div className="mt-12">
            <StatsSection />
          </div>
          <div className="mt-12">
            <ProductFamilies />
          </div>
          <div className="mt-12">
            <WhyChooseUs />
          </div>
          <div className="mt-12">
            <ContactSection />
          </div>
        </div>
      </div>
    </Container>
  )
}
export default HeroSection
