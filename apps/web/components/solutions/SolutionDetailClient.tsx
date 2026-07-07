"use client";
import { motion, Variants } from "motion/react";
import Container from "@/components/ui/Container";
import { TextAnimate } from "@workspace/ui/components/text-animate";

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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={data.image} 
            alt={data.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        <div className="max-w-3xl mb-32">
          <h2 className="text-3xl font-medium mb-6">Overview</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            {data.content}
          </p>

          {data.implementations && data.implementations.length > 0 && (
            <div>
              <h3 className="text-2xl font-medium mb-8">Solutions Implemented</h3>
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
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
