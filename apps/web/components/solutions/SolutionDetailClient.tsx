"use client";
import { motion, Variants } from "motion/react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Image from "next/image";

const PHARMA_STAGES = [
  {
    stage: "Granulation",
    machines: ["Roll Compactor", "Octagonal Machine", "Fluid bed Dryer Machine"]
  },
  {
    stage: "Compression",
    machines: [
      "Amplus Machine",
      "Blitz Table Press Machine",
      "Single Rotary Tablet Machine",
      "Double Rotary Tablet Machine",
      "Moxie Press Machine",
      "Giga Press Machine",
      "Elan Press Machine"
    ]
  },
  {
    stage: "Coating",
    machines: ["Auto Coater"]
  },
  {
    stage: "Inspection & QC",
    machines: ["Checkweigher"]
  }
];

export default function SolutionDetailClient({ data }: { data: { title: string; description: string; content: string; image: string; implementations?: string[] } }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <div className="w-full">
      <Container>
        <div className="max-w-4xl pt-12 pb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            Solution Detail
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            {data.title}
          </TextAnimate>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            {data.description}
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-video w-full rounded-3xl overflow-hidden bg-muted mb-24"
        >
          <Image 
            src={data.image} 
            alt={data.title}
            fill
            loading="lazy"
            className="object-cover"
          />
        </motion.div>

        <div className="w-full max-w-5xl mb-12">
          <h2 className="text-3xl font-medium mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16 max-w-3xl">
            {data.content}
          </p>

          {data.implementations && data.implementations.length > 0 && (
            <div>
              <h3 className="text-2xl font-medium mb-8">Solutions Implemented</h3>
              {data.title === "Pharmaceutical" ? (
                <div className="w-full pt-4">
                  <div className="w-full flex flex-col">
                    {PHARMA_STAGES.map((stage, idx) => (
                      <div 
                        key={stage.stage} 
                        className="flex flex-col md:flex-row md:items-start gap-6 md:gap-16 py-10 border-t border-border/50 first:border-t-0 first:pt-0"
                      >
                        
                        <div className="md:w-72 shrink-0 flex gap-6 items-start">
                          <span className="text-4xl md:text-5xl font-light text-brand-primary/90 tracking-tighter">
                            0{idx + 1}
                          </span>
                          <h4 className="text-xl md:text-2xl font-medium tracking-tight text-foreground pt-1.5 md:pt-2">
                            {stage.stage}
                          </h4>
                        </div>
                        

                        <div className="flex-1 flex flex-wrap items-center gap-x-5 gap-y-3 pt-2 md:pt-3">
                          {stage.machines.map((machine, mIdx) => (
                            <span key={machine} className="flex items-center text-lg md:text-[22px] leading-relaxed font-light text-muted-foreground transition-colors duration-300 hover:text-foreground cursor-default">
                              {machine}
                              {mIdx !== stage.machines.length - 1 && (
                                <span className="ml-5 text-border/60 font-light select-none">/</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-10%" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                  {data.implementations.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      variants={itemVariants}
                      className="flex items-center gap-4 p-4 rounded-xl border bg-card text-card-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
