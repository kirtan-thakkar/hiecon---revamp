"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { TextAnimate } from "@workspace/ui/components/text-animate";
import Container from "../../components/ui/Container";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { cn } from "@workspace/ui/lib/utils";

const offices = [
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    address: "Hiecon Technologies, Ahmedabad, Gujarat, India",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.26252906478!2d72.4988921817454!3d23.020345700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  {
    id: "coimbatore",
    city: "Coimbatore",
    address: "Hiecon Technologies, Coimbatore, Tamil Nadu, India",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44173167195!2d76.89719488349257!3d11.014056550000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
  }
];

export default function ContactHero() {
  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const mapRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: mapRef.current,
        start: "top 60%",
        end: "bottom center",
        scrub: true,
      },
    });
    t1.fromTo(mapRef.current, { scale: 0.95 }, { scale: 1.15, duration: 1.5 });
  }, [mapRef]);

  return (
    <div className="relative overflow-hidden w-full">
      <Container>
        <div className="max-w-4xl pt-12 pb-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6"
          >
            Contact Us
          </motion.p>
          <TextAnimate 
            animation="blurInUp" 
            as="h1" 
            by="word"
            once={true}
            className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground leading-[1.05] mb-8"
          >
            Let's Engineer the Future Together.
          </TextAnimate>
          <motion.p
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mb-12"
          >
            Whether you're looking for global support or custom automation solutions, our experts are ready to assist. Reach out directly or visit one of our engineering hubs.
          </motion.p>

          {/* Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4"
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

        {/* Visual Anchor - Map */}
        <div className="mt-12 mb-24 flex w-full justify-center perspective-[1200px]">
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

      </Container>
    </div>
  );
}
