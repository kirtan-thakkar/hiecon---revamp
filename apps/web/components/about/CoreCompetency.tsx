"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function CoreCompetency() {
  const steps = [
    {
      id: "01",
      title: "Design",
      description: "Understand the application and engineer the appropriate control architecture."
    },
    {
      id: "02",
      title: "Integrate",
      description: "Bring together hardware, software, motion and communication technologies."
    },
    {
      id: "03",
      title: "Implement",
      description: "Commission reliable, production-ready automation systems."
    },
    {
      id: "04",
      title: "Support",
      description: "Provide technical support and services throughout the system lifecycle."
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-foreground leading-[1.1] mb-6">
              How Hiecon Delivers
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We do more than supply components. We support the complete automation lifecycle.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line (Desktop) */}
            <div className="hidden lg:block absolute top-[28px] left-0 w-full h-[1px] bg-border/60 z-0" />
            
            {/* Connecting line (Mobile/Tablet) */}
            <div className="lg:hidden absolute top-0 left-[28px] w-[1px] h-full bg-border/60 z-0" />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                  className="flex flex-row lg:flex-col gap-6 lg:gap-8"
                >
                  <div className="flex items-center justify-center shrink-0 w-14 h-14 rounded-full bg-background border border-border shadow-sm">
                    <span className="text-lg font-medium text-brand-primary">{step.id}</span>
                  </div>
                  <div className="flex flex-col gap-3 pt-2 lg:pt-0">
                    <h3 className="text-2xl font-medium tracking-tight text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
