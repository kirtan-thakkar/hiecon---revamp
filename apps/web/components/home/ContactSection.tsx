"use client";

import { motion } from "motion/react";
import Container from "../ui/Container";
import { Phone, Mail, MessageSquare, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export default function ContactSection() {
  return (
    <section className="py-24 bg-neutral-50 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-6"
            >
              Get in Touch
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-neutral-600 dark:text-neutral-400 mb-12"
            >
              Our team of experts is ready to help you optimize your industrial automation processes.
            </motion.p>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "Call Us", detail: "+1 (555) 123-4567", href: "tel:+15551234567" },
                { icon: Mail, title: "Email Us", detail: "contact@hiecon.com", href: "mailto:contact@hiecon.com" },
                { icon: MessageSquare, title: "WhatsApp", detail: "Chat with an expert", href: "https://wa.me/15551234567" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                >
                  <Link href={item.href} className="group flex items-center p-4 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800 transition-all hover:shadow-md hover:border-violet-200 dark:hover:border-violet-900">
                    <div className="w-12 h-12 rounded-full bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{item.title}</h4>
                      <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">{item.detail}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="mt-12 flex gap-4"
            >
                <Button size="lg" className="rounded-full px-8">Request Quote</Button>
                <Button size="lg" variant="outline" className="rounded-full px-8">Support</Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] lg:h-auto rounded-3xl overflow-hidden relative bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800"
          >
            {/* Map Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm z-10">
                <MapPin className="w-12 h-12 text-violet-600 dark:text-violet-400 mb-4" />
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">Global Headquarters</h3>
                <p className="text-neutral-600 dark:text-neutral-400 max-w-sm">
                  123 Automation Blvd, Tech District<br/>
                  Innovation City, TX 75001
                </p>
                <Button variant="link" className="mt-4 text-violet-600 dark:text-violet-400">View on Google Maps</Button>
            </div>
            <div className="absolute inset-0 bg-[url('https://placehold.co/800x800/e5e5e5/a3a3a3?text=Map+View')] bg-cover bg-center opacity-50 dark:opacity-30 mix-blend-multiply dark:mix-blend-overlay" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
