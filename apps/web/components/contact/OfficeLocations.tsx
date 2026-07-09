"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Container from "../../components/ui/Container";
import { cn } from "@workspace/ui/lib/utils";

export default function OfficeLocations() {
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

  const [activeOffice, setActiveOffice] = useState(offices[0]);

  return (
    <section className="relative w-full py-24 md:py-32 bg-card border-t border-border mt-12">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-card-foreground">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Visit our facilities to see our automation systems in action and meet the engineering teams behind them.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center gap-4 border-b border-border/50 pb-4">
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
        </div>

        {/* Active Office Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-8">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <h3 className="text-3xl font-medium text-card-foreground">{activeOffice.city}</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{activeOffice.address}</p>
          </div>
          
          <div className="lg:col-span-8 w-full aspect-video md:aspect-[21/9] rounded-[2rem] overflow-hidden bg-muted relative transition-all duration-700 shadow-xl border border-border/50">
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
    </section>
  );
}
