"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function CompanyScale() {
  return (
    <section className="relative w-full py-24 bg-background">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Primary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-border pt-12">
            {[
              { label: "Established", value: "1996" },
              { label: "Machines Running", value: "4,500+" },
              { label: "AC Drives Deployed", value: "90,000+" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col gap-3"
              >
                <h3 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">{stat.value}</h3>
                <p className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Secondary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            {[
              { label: "OEMs Served", value: "360+" },
              { label: "End Users", value: "450+" },
              { label: "Team Strength (As of 2026)", value: "39" }
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i * 0.1) + 0.3, ease: "easeOut" }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col gap-2"
              >
                <h4 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">{stat.value}</h4>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
