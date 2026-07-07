"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <div className="mb-12 md:mb-20 max-w-5xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05]"
          >
            Let&apos;s Build Better Automation.
          </motion.h2>
        </div>

        {/* Map Centerpiece */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="w-full h-[50vh] min-h-[400px] md:h-[600px] rounded-[2rem] overflow-hidden bg-muted mb-16 md:mb-24 relative"
        >
          <iframe 
            src="https://www.google.com/maps?q=152+Azad+Society,+Ambawadi,+Ahmedabad+380015&output=embed" 
            title="Hiecon Automation Ahmedabad Headquarters Map"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Column 1: Intro & Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4 flex flex-col"
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-md">
              Whether you&apos;re planning a new automation system, upgrading existing machinery, or looking for expert technical support, our engineers are ready to help.
            </p>
            <div className="flex flex-col gap-6 mt-auto">
              <Link href="tel:+919974707600" className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors w-fit">
                Call Us
              </Link>
              <Link href="mailto:sales@hiecon.com" className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors w-fit">
                Email Us
              </Link>
              <Link href="https://wa.me/919974707600" target="_blank" rel="noopener noreferrer" className="text-2xl font-medium text-foreground hover:text-muted-foreground transition-colors w-fit">
                WhatsApp
              </Link>
            </div>
          </motion.div>

          {/* Column 2: HQ */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-start-7 md:col-span-3 flex flex-col"
          >
            <h3 className="text-xs font-bold tracking-widest uppercase text-foreground mb-6">Headquarters</h3>
            <address className="not-italic text-lg text-muted-foreground leading-relaxed mb-8">
              152, Azad Society,<br />
              Ambawadi,<br />
              Ahmedabad &ndash; 380015,<br />
              Gujarat, India
            </address>
            <div className="flex flex-col gap-3 text-lg text-muted-foreground mb-10">
              <p><span className="text-foreground font-medium mr-4">T</span> <a href="tel:+919974707600" className="hover:text-foreground transition-colors">+91 9974707600</a></p>
              <p><span className="text-foreground font-medium mr-4">E</span> <a href="mailto:sales@hiecon.com" className="hover:text-foreground transition-colors">sales@hiecon.com</a></p>
            </div>
            <Link 
              href="https://www.google.com/maps/dir/?api=1&destination=152+Azad+Society+Ambawadi+Ahmedabad+380015"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-medium text-foreground hover:text-muted-foreground transition-colors mt-auto w-fit group"
            >
              Get Directions <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Column 3: Branch */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-start-10 md:col-span-3 flex flex-col"
          >
            <h3 className="text-xs font-bold tracking-widest uppercase text-foreground mb-6">Branch Office</h3>
            <address className="not-italic text-lg text-muted-foreground leading-relaxed mb-8">
              Old No. 308, New No. 99,<br />
              SNR Chinnasamy Naidu Road,<br />
              New Siddhapudur,<br />
              Coimbatore &ndash; 641004,<br />
              Tamil Nadu, India
            </address>
            <div className="flex flex-col gap-3 text-lg text-muted-foreground mb-10">
              <p><span className="text-foreground font-medium mr-4">T</span> <a href="tel:+919787710123" className="hover:text-foreground transition-colors">+91 9787710123</a></p>
              <p><span className="text-foreground font-medium mr-4">E</span> <a href="mailto:salescbe@hiecon.com" className="hover:text-foreground transition-colors">salescbe@hiecon.com</a></p>
            </div>
            <Link 
              href="https://www.google.com/maps/search/?api=1&query=99+SNR+Chinnasamy+Naidu+Road+New+Siddhapudur+Coimbatore+641004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-medium text-foreground hover:text-muted-foreground transition-colors mt-auto w-fit group"
            >
              View on Google Maps <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
