"use client"

import { motion } from "motion/react"
import Image from "next/image"
import Container from "../../components/ui/Container"
import { TextAnimate } from "@workspace/ui/components/text-animate"

export default function ScaleReveal() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-24 text-foreground md:py-32">
      <Container className="relative z-10 flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
          <div className="flex max-w-2xl flex-col gap-6">
            <p className="text-sm font-bold tracking-widest text-brand-primary uppercase">
              Company Scale
            </p>
            <TextAnimate
              animation="blurInUp"
              as="h2"
              by="word"
              once={false}
              className="text-5xl leading-[1.05] font-medium tracking-tight md:text-7xl"
            >
              Delivering proven industrial reliability since 1996.
            </TextAnimate>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-md text-lg leading-relaxed text-muted-foreground md:text-xl"
          >
            With an engineering team of 39 professionals, we ensure that every
            facility is backed by hands-on, multi-platform expertise you can
            trust.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 , filter: "blur(10px)"}}
          whileInView={{ opacity: 1, scale: 1 , filter: "blur(0px)"}}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] bg-muted md:aspect-21/9"
        >
          <Image
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2000&auto=format&fit=crop"
            alt="Global operations"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover"
          />
        </motion.div>
      </Container>
    </section>
  )
}
