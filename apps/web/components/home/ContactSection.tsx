"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import Container from "../ui/Container";
import { Link } from 'next-view-transitions';
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@workspace/ui/lib/utils";
import { TextAnimate } from "@workspace/ui/components/text-animate";

const offices = [
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.26252906478!2d72.4988921817454!3d23.020345700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173167195!2d76.89719488349257!3d11.014056550000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
  }
];

export default function ContactSection({ 
  title = "Let's Build Better Automation.",
  subtitle = "Contact Us"
}: { 
  title?: string;
  subtitle?: string;
}) {
  const [activeOffice, setActiveOffice] = useState(offices[0]);
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
    <section className="py-24 md:py-32 bg-background overflow-hidden w-full">
      <Container>
        <div className="mb-8 md:mb-12 max-w-4xl">
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
        <div className="mt-12 mb-16 md:mb-24 flex w-full justify-center perspective-[1200px]">
          <div
            ref={mapRef}
            className="relative flex h-[50vh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-[2rem] bg-muted shadow-[0_0_40px_rgba(0,0,0,0.05)] md:h-[70vh] md:rounded-[3rem] after:absolute after:inset-0 after:rounded-[inherit] after:shadow-[inset_0_0_100px_rgba(0,0,0,0.1)] after:pointer-events-none"
          >
            <iframe
              key={activeOffice.id}
              src={activeOffice.mapSrc}
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
