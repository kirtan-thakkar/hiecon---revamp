"use client";

import { motion } from "motion/react";
import Container from "../../components/ui/Container";

export default function ContactInfo() {
  const contacts = [
    {
      label: "General Inquiries",
      value: "info@hiecon.com",
      link: "mailto:info@hiecon.com"
    },
    {
      label: "Global Support Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      label: "WhatsApp Business",
      value: "Chat with an Engineer",
      link: "https://wa.me/919876543210"
    }
  ];

  return (
    <section className="relative w-full py-12 md:py-24 bg-background">
      <Container>
        <div className="flex flex-col gap-12">
          {contacts.map((contact, i) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2 group border-b border-border pb-12"
            >
              <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                {contact.label}
              </p>
              <a 
                href={contact.link}
                className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-foreground transition-colors hover:text-brand-primary w-fit"
              >
                {contact.value}
              </a>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
