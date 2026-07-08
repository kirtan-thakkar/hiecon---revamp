"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function OfficeLocations() {
  const offices = [
    {
      city: "North America HQ",
      address: "123 Innovation Drive, Tech District, CA 94103",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977461947754!2d-122.40114092404068!3d37.78772397198207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580875c742c3d%3A0xc07c3e5954605f88!2sTech%20District!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
    },
    {
      city: "European Hub",
      address: "45 Automation Allee, Industrial Park, Berlin 10115",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.632289944648!2d13.385551911961445!3d52.53123687981504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851e8093122c5%3A0xc15e24b7a2d1d0c!2sBerlin!5e0!3m2!1sen!2sde!4v1700000000001!5m2!1sen!2sde"
    }
  ];

  return (
    <section className="relative w-full py-24 md:py-32 bg-card border-t border-border mt-12">
      <Container className="flex flex-col gap-16 md:gap-24">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-card-foreground">
            Our Global Offices
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Visit our state-of-the-art facilities to see our automation systems in action and meet the engineering teams behind them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {offices.map((office, i) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="w-full aspect-video md:aspect-[4/3] rounded-[2rem] overflow-hidden bg-muted relative grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-border/50">
                <iframe
                  src={office.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-medium text-card-foreground">{office.city}</h3>
                <p className="text-lg text-muted-foreground">{office.address}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
