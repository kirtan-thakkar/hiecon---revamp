"use client";

import { motion } from "motion/react";
import Container from "../../../components/ui/Container";
import { GalleryItem } from "../types";
import { cn } from "@workspace/ui/lib/utils";
import Image from "next/image";

interface IndustryGalleryProps {
  gallery: GalleryItem[];
}

export default function IndustryGallery({ gallery }: IndustryGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <Container>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground leading-[1.1]">
            Engineering in Action
          </h2>
        </motion.div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={cn(
                "flex flex-col gap-4 group",
                item.colSpan === 2 && "md:col-span-2" // Allows dramatic full-width images
              )}
            >
              <div className="w-full rounded-[2rem] overflow-hidden bg-muted relative aspect-[4/3] md:aspect-auto md:min-h-[400px]">
                <Image 
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-[2s] group-hover:scale-105 mix-blend-multiply opacity-90 grayscale group-hover:grayscale-0"
                />
              </div>
              {item.caption && (
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest pl-2">
                  {item.caption}
                </p>
              )}
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}
