"use client"
import { motion } from "motion/react"
import Container from "../ui/Container"
const HeroSection = () => {
  return (
    <Container>
      {/* <div className="z-10 w-full">
        <Navbar />
      </div> */}
      <div className="min-h-[650px] w-full mt-20 md:mt-30 lg:mt-35">
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
              delay: 0.1,
              ease:"easeOut"
            }}
            className="bg-linear-to-b from-neutral-700 to-neutral-100 bg-clip-text text-7xl font-bold tracking-tight text-transparent dark:bg-linear-to-b dark:from-neutral-100 dark:to-neutral-700 dark:text-transparent bg-clip-text"
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
              duration: 0.6,
              delay: 0.3,
              ease:"easeOut"
            }}
            className="max-w-lg text-base text-neutral-700 dark:text-neutral-300"
          >
            We provide state-of-the-art automation solutions, seamless system
            integration, and dependable technical support to help industries
            improve productivity, reliability, and operational efficiency.
          </motion.p>
        </div>
      </div>
    </Container>
  )
}
export default HeroSection
