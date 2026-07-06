"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "27 Years Experience",
  "Experienced Engineers",
  "Trusted Technology Partners",
  "Reliable After Sales Support",
  "Customized Automation Solutions",
  "Fast Technical Assistance",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900 border-y border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6"
            >
              Why Choose Us
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-10"
            >
              We bring decades of expertise and a commitment to excellence, ensuring your industrial automation systems are reliable, efficient, and future-proof.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 shadow-sm"
                >
                  <CheckCircle2 className="w-6 h-6 text-violet-600 dark:text-violet-400 shrink-0" />
                  <span className="font-medium text-neutral-800 dark:text-neutral-200">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="w-full h-[500px] rounded-3xl bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center overflow-hidden relative"
             >
               <span className="text-neutral-400 dark:text-neutral-600 font-medium z-10">Premium Industrial Placeholder</span>
               {/* Decorative elements */}
               <div className="absolute inset-0 bg-linear-to-tr from-violet-500/10 to-transparent dark:from-violet-500/20" />
             </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
