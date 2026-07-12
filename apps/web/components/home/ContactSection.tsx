"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import Container from "../ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@workspace/ui/lib/utils";
import { TextAnimate } from "@workspace/ui/components/text-animate";

const offices = [
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    mapSrc: "https://maps.google.com/maps?q=Hiecon+Technologies+Pvt+Ltd,+Ahmedabad&t=&z=16&ie=UTF8&iwloc=B&output=embed"
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    mapSrc: "https://maps.google.com/maps?q=Chinnasamy+Naidu+Street,+New+Siddhapudur,+Coimbatore&t=&z=16&ie=UTF8&iwloc=B&output=embed"
  }
];

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  showBreadcrumb?: boolean;
}

export default function ContactSection({ 
  title = "Let's Build Better Automation.",
  subtitle = "Contact Us",
  showBreadcrumb = false
}: ContactSectionProps) {
  const [activeOffice, setActiveOffice] = useState<(typeof offices)[number]>(offices[0]!);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: true,
        },
      });
      t1.fromTo(mapRef.current, { scale: 0.95 }, { scale: 1.15, duration: 1.5 });
    });

    mm.add("(max-width: 767px)", () => {
      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: mapRef.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });
      t1.fromTo(mapRef.current, { scale: 0.95 }, { scale: 1.02, duration: 1.5 });
    });

    return () => mm.revert();
  }, [mapRef]);

  return (
    <section className={`bg-background overflow-hidden w-full ${showBreadcrumb ? "pt-12 pb-24 md:pb-32" : "py-24 md:py-32"}`}>
      <Container>
        <div className="mb-8 md:mb-12 max-w-4xl">
          {showBreadcrumb && (
            <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
              <span className="text-foreground">Contact Us</span>
            </nav>
          )}
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            {subtitle}
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            once={true}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            {title}
          </TextAnimate>
          
          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-8"
          >
            {offices.map((office) => (
              <button
                key={office.id}
                onClick={() => setActiveOffice(office)}
                className={cn(
                  "px-6 py-3 rounded-full text-base font-medium transition-all duration-300",
                  activeOffice.id === office.id 
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:text-foreground hover:bg-muted/80"
                )}
              >
                {office.city}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Map Centerpiece with GSAP */}
        <div className="mt-12 mb-16 md:mb-24 flex w-full justify-center perspective-distant">
          <div
            ref={mapRef}
            className="relative flex h-[50vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] bg-muted shadow-[0_0_40px_rgba(0,0,0,0.05)] md:h-[70vh] md:rounded-[3rem] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] after:pointer-events-none"
          >
            <iframe
              key={activeOffice.id}
              src={activeOffice.mapSrc}
              title={`HIECON ${activeOffice.city} Office Location`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

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
              Hiecon Technologies Pvt Ltd<br />
              152, Lane 3, Azad Society, Acharya Narendradev Nagar,<br />
              Ambawadi, Ahmedabad,<br />
              Gujarat 380015
            </address>
            <div className="flex flex-col gap-3 text-lg text-muted-foreground mb-10">
              <p><span className="text-foreground font-medium mr-4">T</span> <a href="tel:+919974707600" className="hover:text-foreground transition-colors">+91 9974707600</a></p>
              <p><span className="text-foreground font-medium mr-4">E</span> <a href="mailto:sales@hiecon.com" className="hover:text-foreground transition-colors">sales@hiecon.com</a></p>
            </div>
            <Link 
              href="https://www.google.com/maps/dir/?api=1&destination=23.0256211,72.5377989"
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
              Shop No. 299, Chinnasamy Naidu Street,<br />
              C.K. Colony, B.K.R Nagar, New Siddhapudur,<br />
              Tamil Nadu 641044, India
            </address>
            <div className="flex flex-col gap-3 text-lg text-muted-foreground mb-10">
              <p><span className="text-foreground font-medium mr-4">T</span> <a href="tel:+919787710123" className="hover:text-foreground transition-colors">+91 9787710123</a></p>
              <p><span className="text-foreground font-medium mr-4">E</span> <a href="mailto:salescbe@hiecon.com" className="hover:text-foreground transition-colors">salescbe@hiecon.com</a></p>
            </div>
            <Link 
              href="https://www.google.com/maps/dir/?api=1&destination=Shop%20No.299%2C%20Chinnasamy%20Naidu%20Street%2C%20C.K.Colony%2C%20B.K.R%20Nagar%2C%20New%20Siddhapudur%2C%20Tamil%20Nadu%20641044%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-lg font-medium text-foreground hover:text-muted-foreground transition-colors mt-auto w-fit group"
            >
              Get Directions <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
